"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [4659], {
        4659: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => n
            });
            var a = s(83977),
                i = s(43897);
            class n {
                id = "core.backend";
                name = "Backend";
                description = "This plugin provides access to the MetaPress backend server.";
                version = "1.0.0";
                requires = [];
                provides = ["backend"];
                apiURL = "https://get.metapress.dev/api";
                onLoad() {
                    this.config.disableAnalytics || (this.fbApp = (0, a.ZF)({
                        apiKey: "AIzaSyD-UIoGF1eizNk99a7QjLR34EA96H6buF8",
                        authDomain: "mp-backend-api.firebaseapp.com",
                        projectId: "mp-backend-api",
                        storageBucket: "mp-backend-api.appspot.com",
                        messagingSenderId: "100760407859",
                        appId: "1:100760407859:web:55ce7df3625f5df5ea7846",
                        measurementId: "G-WXEMM03B6X"
                    }, "mp-backend"), this.fbAnalytics = (0, i.IH)(this.fbApp), this.logEvent("world_load"), this.logWorldMinute(), setInterval((() => this.logWorldMinute()), 6e4))
                }
                get assetsURL() {
                    return metapress.config?.["core.integration.wordpress"]?.isLocalEnvironment ? "/cdn.metapress.dev/mp-core-assets" : "https://cdn.metapress.dev/mp-core-assets"
                }
                async callApi(e, t = {}) {
                    let s = await fetch(this.apiURL + e, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(t)
                    });
                    if (!s.ok) {
                        let e = {};
                        try {
                            e = await s.json()
                        } catch (e) {}
                        let t = e?.errorText || s.status + " " + s.statusText,
                            a = new Error(t);
                        throw a.code = e?.errorCode || s.status, a
                    }
                    return await s.json()
                }
                getAsset(e) {
                    return this.assetsURL + "/" + e
                }
                async $editor_getTemplates() {
                    let e = await fetch(this.assetsURL + "/templates/templates.json").then((e => e.json())),
                        t = new URL(this.assetsURL + "/templates/", window.location.href);
                    for (let s of e) s.image && (s.image = new URL(s.image, t).href), s.url && (s.url = new URL(s.url, t).href);
                    return e
                }
                logEvent(e, t) {
                    this.fbAnalytics && ((t = t || {}).domain = window.location.hostname, (0, i.Kz)(this.fbAnalytics, e, t))
                }
                logWorldMinute() {
                    (0, i.Kz)(this.fbAnalytics, "world_minute", {
                        domain: window.location.hostname
                    })
                }
            }
        }
    }
]);