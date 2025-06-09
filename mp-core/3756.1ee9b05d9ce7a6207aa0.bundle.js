"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [3756], {
        3756: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => s
            });
            class s {
                id = "core.integration.webdav";
                name = "WebDAV Integration";
                description = "Handles integration with a WebDAV-enabled server.";
                version = "1.0.0";
                requires = [];
                provides = ["webdav", "storage"];
                get publicURL() {
                    return this.config.publicURL || this.joinPath(this.config.url, this.config.basePath)
                }
                onLoad() {
                    if (!this.config.url) throw {
                        message: "Not configured.",
                        cancelled: !0
                    }
                }
                joinPath(...t) {
                    let e = t[0];
                    for (let i = 1; i < t.length; i++) t[i] && (e = e.replace(/\/+$/, "") + "/" + t[i].replace(/^\/+/, ""));
                    return e
                }
                get canEdit() {
                    return void 0 !== this.config.canEdit && null !== this.config.canEdit ? this.config.canEdit : !(!this.config.username || !this.config.password)
                }
                async uploadFile(t, e) {
                    if (!t) throw new Error("contentDirectory must be set.");
                    if (!e) throw new Error("You must specify a file to upload.");
                    if (!(e instanceof File)) throw new Error("File must be a valid File instance.");
                    const i = new r({
                        url: this.config.url,
                        username: this.config.username,
                        password: this.config.password
                    });
                    return await i.putFileContents(this.joinPath(this.config.basePath, t, e.name), e, !0), await this.getFileURL(t, e.name)
                }
                async getFileURL(t, e) {
                    return this.joinPath(this.publicURL, t, e)
                }
            }
            class r {
                constructor(t) {
                    if (this.opts = t, !this.opts.url) throw new Error("You must specify a URL for the WebDAV server.");
                    this.opts.url.endsWith("/") || (this.opts.url += "/")
                }
                async createDirectory(t, e = !1) {
                    t = (t = t.replace(/^\/+/, "")).replace(/\/+$/, "");
                    let i = await fetch(this.opts.url + t + "/", {
                        method: "MKCOL",
                        headers: {
                            Authorization: "Basic " + btoa(this.opts.username + ":" + this.opts.password)
                        }
                    });
                    if (409 == i.status && e) {
                        let e = t.split("/").slice(0, -1).join("/");
                        if (e == t) throw new Error("Failed to create directory, the root path does not exist.");
                        return await this.createDirectory(e, !0), void await this.createDirectory(t, !1)
                    }
                    if (405 != i.status) {
                        if (409 == i.status) throw new Error("Failed to create directory, the parent path does not exist.");
                        if (!i.ok) throw new Error(`Failed to create directory: ${i.status} ${i.statusText}`)
                    }
                }
                async putFileContents(t, e, i = !0) {
                    if (t = (t = t.replace(/^\/+/, "")).replace(/\/+$/, ""), i) {
                        let e = t.split("/").slice(0, -1).join("/");
                        e && e != t && await this.createDirectory(e, !0)
                    }
                    let s = await fetch(this.opts.url + t, {
                        method: "PUT",
                        body: e,
                        headers: {
                            Authorization: "Basic " + btoa(this.opts.username + ":" + this.opts.password)
                        }
                    });
                    if (!s.ok) throw new Error(`Failed to write file: ${s.status} ${s.statusText}`)
                }
            }
        }
    }
]);