"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [488], {
        10488: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => n
            });
            var s = r(25108);
            class n {
                id = "core.integration.wordpress";
                name = "WordPress Integration";
                description = "Handles integration with the WordPress server.";
                version = "1.0.0";
                requires = ["siteContent"];
                provides = ["wordpress", "storage"];
                get contentURL() {
                    return this.config.contentURL
                }
                get apiURL() {
                    return this.config.apiURL
                }
                get worldID() {
                    return this.config.worldID || null
                }
                onLoad() {
                    if (!this.config.contentURL) throw {
                        message: "Not configured.",
                        cancelled: !0
                    };
                    metapress.siteContent.updateFeed()
                }
                async ajax(e, t = new FormData) {
                    if (!e) throw new Error("Name must be set.");
                    t.set("action", e), t.set("_ajax_nonce", this.config.apiNonce);
                    let r = await fetch(this.config.ajaxURL, {
                            method: "POST",
                            credentials: "same-origin",
                            body: t
                        }),
                        s = await r.json();
                    if (!s.success) throw new Error(s.data || "An unexpected server error occured.");
                    return s.data
                }
                get canEdit() {
                    return this.config.canEdit
                }
                async uploadFile(e, t) {
                    if (!e) throw new Error("contentDirectory must be set.");
                    if (!t) throw new Error("You must specify a file to upload.");
                    if (!(t instanceof File)) throw new Error("File must be a valid File instance.");
                    let r = 1048576,
                        s = [];
                    if (t.size <= r) s = [t];
                    else {
                        let e = 0;
                        for (let n = 0; n < t.size; n += r) {
                            let i = t.slice(n, n + r),
                                o = new File([i], t.name + ".mpchunk" + e++, {
                                    type: t.type
                                });
                            s.push(o)
                        }
                    }
                    for (;;) {
                        await new Promise((e => setTimeout(e, 100)));
                        let t = s.find((e => e.error));
                        if (t) throw new Error(t.error);
                        if (s.every((e => e.completed))) break;
                        if (s.reduce(((e, t) => e + (t.uploading ? 1 : 0)), 0) >= 1) continue;
                        let r = s.find((e => !e.uploading && !e.completed));
                        if (!r) continue;
                        r.uploading = !0;
                        let n = new FormData;
                        n.append("directory", e), n.append("file", r), this.worldID && n.append("worldID", this.worldID), this.ajax("metapress_save_file", n).then((e => {
                            r.url = e.url, r.completed = !0, r.uploading = !1
                        })).catch((e => {
                            r.retry || (r.retry = 0), r.retry += 1, r.uploading = !1, r.retry > 2 ? r.error = e : r.error = null
                        }))
                    }
                    if (1 == s.length) return s[0].url;
                    let n = new FormData;
                    return n.append("directory", e), n.append("name", t.name), this.worldID && n.append("worldID", this.worldID), (await this.ajax("metapress_merge_chunks", n)).url
                }
                async getFileURL(e, t) {
                    return this.contentURL + "/" + e + "/" + t
                }
                async api(e, t, r = {}, s, n) {
                    t.startsWith("/") && (t = t.substring(1));
                    let i = this.apiURL + t;
                    if (r)
                        for (let e in r) i += (i.includes("?") ? "&" : "?") + e + "=" + encodeURIComponent(r[e]);
                    "object" == typeof s && (s = JSON.stringify(s), (n = n || {})["Content-Type"] = "application/json"), null === s && (s = void 0), n || (n = {}), this.config.apiNonce && (n["X-WP-Nonce"] = this.config.apiNonce);
                    let o = await fetch(i, {
                        method: e,
                        body: s,
                        headers: n,
                        credentials: "same-origin"
                    });
                    if (!o.ok) {
                        let e = o.status + " " + o.statusText,
                            t = o.status;
                        try {
                            let r = await o.json();
                            e = r.message || e, t = r.code || t
                        } catch (e) {}
                        let r = new Error(e);
                        throw r.code = t, r
                    }
                    return await o.json()
                }
                async getPostsFromFeed(e = 0, t = 1) {
                    return await this.api("GET", "/wp/v2/posts", {
                        per_page: t,
                        offset: e
                    })
                }
                async getMediaDetails(e) {
                    return await this.api("GET", `/wp/v2/media/${e}`)
                }
                async getTypes() {
                    return this._cachedTypes || (this._cachedTypes = await metapress.wordpress.api("GET", "/metapress/v1/post-types")), this._cachedTypes
                }
                startLogin() {
                    window.parent.location.href = "/wp-login.php"
                }
                $getAssetProviders = () => [{
                    id: "wordpress.posts",
                    name: "WordPress Posts",
                    icon: r(44812),
                    action: e => s.log("hereeeee")
                }];
                $siteContent_getSource = () => ({
                    id: "wordpress",
                    name: "WordPress",
                    icon: r(44812),
                    fetchFeed: async (e, t) => {
                        let r = await this.getTypes(),
                            s = [];
                        return await Promise.all(r.map((async r => {
                            if (!r.supports.metapress_content_feed) return;
                            let n = await this.api("GET", `/${r.rest_namespace}/${r.rest_base}`, {
                                per_page: t || 20,
                                offset: e || 0,
                                _embed: !0
                            });
                            for (let e of n) {
                                let t = {
                                        id: "wordpress:" + e.id,
                                        link: e.link,
                                        date: new Date(e.date).getTime(),
                                        title: e.title?.rendered || "",
                                        type: r.name,
                                        excerpt: e.excerpt?.rendered || "",
                                        content: e.content?.rendered || ""
                                    },
                                    n = e._embedded?.["wp:featuredmedia"]?.[0],
                                    i = n?.media_details?.sizes?.large?.source_url || n?.source_url;
                                t.image = i, s.push(t)
                            }
                        }))), s
                    }
                });
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:info`,
                    type: "info",
                    name: "WordPress backend integration",
                    content: `\n                MetaPress is using WordPress as the backend server. The current user is ${this.canEdit?"an admin and can edit this world":"a guest user and cannot modify this world"}. \n                Posts, products, and other public WordPress post types from the WordPress backend are pulled into the site content feed in date descending order, which is then used to populate the content slots along the walls.\n                Visit https://metapress.dev for details on setting up MetaPress on WordPress.\n            `
                }, {
                    id: `${this.id}:openConfig`,
                    type: "action",
                    disabled: !this.canEdit,
                    name: "Open MetaPress WordPress configuration",
                    content: "Call this KB action to open the MetaPress configuration panel in the WordPress dashboard.",
                    action: () => {
                        if (!window.open("/wp-admin/admin.php?page=metapress", "_blank")) throw new Error("window.open() returned null");
                        return "success"
                    }
                }]
            }
        },
        44812: (e, t, r) => {
            e.exports = r.p + "mp-core/wordpress-logo.dfdf688bbbd08bbee05c.svg"
        }
    }
]);