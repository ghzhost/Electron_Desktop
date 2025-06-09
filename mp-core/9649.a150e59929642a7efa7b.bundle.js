"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [9649], {
        19649: (s, t, a) => {
            a.r(t), a.d(t, {
                default: () => e
            });
            class e {
                id = "core.misc.urlhashlocation";
                name = "URL Hash Location";
                description = "Manages updating the hash location of the parent page to allow bookmarking of certain locations.";
                version = "1.0.0";
                requires = ["avatars"];
                onLoad() {
                    throw {
                        message: "This plugin is disabled.",
                        cancelled: !0
                    }
                }
                $spawnpoint_onSpawn(s) {
                    if (!s.isFirstSpawn) return;
                    let t = window.location.hash;
                    if (t.length > 1 && !t.startsWith("metapress:") && !t.startsWith("#metapress:")) throw new Error("Hash rewriting disabled, the hash is already in use");
                    this.setFromHash(t), this.timer = setInterval(this.updateHash.bind(this), 5e3)
                }
                setFromHash(s) {
                    let t = s?.split(":") || [];
                    if ("VerseWeb" != t[0] && "#VerseWeb" != t[0]) return;
                    if (t.length < 4) return;
                    this._lastHash = s;
                    const a = parseFloat(t[1]),
                        e = parseFloat(t[2]),
                        r = parseFloat(t[3]);
                    metapress.avatars.currentUserEntity.x = isNaN(a) ? 0 : a, metapress.avatars.currentUserEntity.y = isNaN(e) ? 0 : e, metapress.avatars.currentUserEntity.z = isNaN(r) ? 0 : r, metapress.avatars.currentUserEntity.lastModified = Date.now()
                }
                updateHash() {
                    let s = metapress.avatars.currentUserEntity.x?.toFixed(1) || 0,
                        t = metapress.avatars.currentUserEntity.y?.toFixed(1) || 0,
                        a = metapress.avatars.currentUserEntity.z?.toFixed(1) || 0;
                    isNaN(s) && (s = 0), isNaN(t) && (t = 0), isNaN(a) && (a = 0);
                    let e = `#metapress:${s}:${t}:${a}`;
                    e != this._lastHash && (this._lastHash = e, window.parent.history.replaceState(null, "", e))
                }
            }
        }
    }
]);