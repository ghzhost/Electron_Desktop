"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2973], {
        42973: (e, r, s) => {
            s.r(r), s.d(r, {
                default: () => i
            });
            class i {
                id = "core.notifier";
                name = "Notifier Plugin";
                description = "Notifies the admin user that a user entered their world.";
                version = "1.0.0";
                requires = ["profile"];
                provides = [];
                onLoad() {
                    this.sendEmail()
                }
                async sendEmail() {
                    if ("1" != metapress.config?.["core.notification.address"]?.enabled || !metapress.config?.["core.notification.address"]?.address) return;
                    let e = metapress.config?.["core.notification.address"]?.address,
                        r = metapress.profile?.currentProfile?.fields?.name || "Guest",
                        s = window.location.href;
                    await this.sendAPI("https://get.metapress.dev/api/communication/send-entry-notification", {
                        email: e,
                        world: s,
                        user: r,
                        nonce: this.nonce
                    })
                }
                async sendAPI(e, r) {
                    let s = await fetch(e, {
                            method: "POST",
                            body: JSON.stringify(r)
                        }),
                        i = await s.json();
                    if (i.errorText) throw new Error(i.errorText);
                    return i
                }
            }
        }
    }
]);