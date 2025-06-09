"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2302], {
        22302: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => n
            });
            class n {
                id = "core.integration.template-file";
                name = "Tempate File Integration";
                description = "Loads world data from a URL pointing to an .mpbackup file.";
                version = "1.0.0";
                requires = ["backend", "assets"];
                provides = [];
                contentURL = "";
                contentZip = null;
                async onLoad() {
                    if (this.config.contentURL) this.contentURL = this.config.contentURL;
                    else {
                        if (!this.config.templateID) throw {
                            message: "Not configured.",
                            cancelled: !0
                        };
                        {
                            let t = await metapress.plugins.callAllAsync("editor_getTemplates");
                            t = t.flat().filter((t => t?.url && t?.name));
                            let e = t.find((t => t.id === this.config.templateID));
                            if (!e) throw new Error(`Template with ID '${this.config.templateID}' was not found.`);
                            this.contentURL = e.url
                        }
                    }
                    let t = await metapress.assets.load("blob", this.contentURL);
                    const {
                        default: e
                    } = await Promise.all([i.e(8764), i.e(5733)]).then(i.t.bind(i, 55733, 23));
                    let n = await e.loadAsync(t);
                    this.contentZip = n;
                    let s = await n.file("template.json");
                    if (!s) throw new Error("Missing template.json in template file.");
                    let a = JSON.parse(await s.async("string"));
                    if ("metapress:custom-template" != a.type) throw new Error("Invalid data in template file.");
                    let l = {};
                    for (let t of a.entities)
                        for (let e in t) {
                            let i = this.getEntityRelativePath(t[e]);
                            if (!i) continue;
                            let s = l[i];
                            if (!s) {
                                let t = n.file(i);
                                if (!t) continue;
                                let e = await t.async("blob");
                                s = URL.createObjectURL(e) + "#" + i, l[i] = s
                            }
                            t[e] = s
                        }
                    for (let t of a.entities) metapress.entities.add(t)
                }
                getEntityRelativePath(t) {
                    if ("string" != typeof t || !t.startsWith("http:") && !t.startsWith("https:")) return null;
                    let e = t.indexOf("/custom-template/");
                    if (-1 == e) return null;
                    let i = t.substring(e + 17);
                    return e = i.indexOf("?"), -1 != e && (i = i.substring(0, e)), e = i.indexOf("#"), -1 != e && (i = i.substring(0, e)), i
                }
            }
        }
    }
]);