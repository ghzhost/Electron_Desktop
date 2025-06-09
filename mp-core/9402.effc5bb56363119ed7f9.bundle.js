"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [9402], {
        89402: (e, r, s) => {
            s.r(r), s.d(r, {
                default: () => t
            });
            var i = s(25108);
            class t {
                id = "core.profile";
                name = "Profiles";
                description = "Manages the user's profile, and verifying profile data.";
                version = "1.0.0";
                requires = [];
                provides = ["profile"];
                currentProfile = {};
                async onLoad() {
                    try {
                        await this.loadProfile()
                    } catch (e) {
                        i.warn(`[MetaPress > Profile] Logging in as guest due to: ${e.message}`), await this.loginGuest()
                    }
                }
                async loadProfile() {
                    let e = localStorage["mp:profile"];
                    if (!e) throw new Error("No stored profile found.");
                    let r = JSON.parse(e);
                    if ("mp:profile" != r?.type || !r?.fields) throw new Error("Invalid profile data found in storage.");
                    this.currentProfile = r;
                    try {
                        this.currentProfile.fields.profile_image_src && await new Promise(((e, r) => {
                            let s = new Image;
                            s.crossOrigin = "anonymous", s.src = this.currentProfile.fields.profile_image_src, s.onload = () => e(s), s.onerror = () => r(new Error("Failed to load profile image."))
                        }))
                    } catch (e) {
                        i.warn(`[MetaPress > Profile] Failed to load profile image, reverting to default: ${e.message}`), this.currentProfile.fields.profile_image_src = ""
                    }
                }
                async loginGuest() {
                    this.currentProfile = {
                        type: "mp:profile",
                        id: null,
                        fields: {},
                        account: null
                    }, this.save()
                }
                save() {
                    localStorage["mp:profile"] = JSON.stringify(this.currentProfile), metapress.plugins.sendEvent("profile_onUpdate")
                }
                saveSoon() {
                    this.saveTimer && clearTimeout(this.saveTimer), this.saveTimer = setTimeout((() => this.save()), 1e3)
                }
                get userID() {
                    return this.currentProfile.id
                }
                get(e) {
                    return this.currentProfile.fields[e]
                }
                async set(e, r) {
                    this.currentProfile.fields[e] = r, this.saveSoon()
                }
                $portals_prepareTransfer(e) {
                    e.profile = this.currentProfile
                }
                $portals_receiveTransfer(e) {
                    if (!e.profile) return;
                    let r = e.profile?.fields?.avatarConfig?.avatar_id;
                    if (r) {
                        let s = metapress.avatars.getConfigurations().find((e => e.avatar_id == r));
                        s && (i.debug(`[MetaPress > Profile] Updating URL of matching '${r}' avatar from portal data`), e.profile.fields.avatarConfig.url = s.url)
                    }
                    this.currentProfile = e.profile, this.saveSoon(), metapress.plugins.sendEvent("profile_onUpdate", {
                        isFromPortal: !0
                    })
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:setName`,
                    type: "action",
                    name: "Set user name",
                    tags: "set name, set username, set current user's name, set my name, change name",
                    content: `\n                Use this action to change the user's display name. The value is the new name to use. Only use after confirming with the user.\n                User's current name: ${metapress.profile.get("name")||"Guest"}\n            `,
                    action: async e => (metapress.profile.set("name", e.value || ""), "Name changed successfully")
                }]
            }
        }
    }
]);