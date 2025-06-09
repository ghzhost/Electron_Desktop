"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [4530], {
        4530: (t, e, o) => {
            o.r(e), o.d(e, {
                default: () => d
            }), o(25108), Math.PI, Math.PI;
            var n = o(8838),
                i = o(60516),
                a = o(25108);
            class r {
                name = "Logo Slot";
                icon = o(56607);
                hidden = !0;
                provides = ["material"];
                settings = [{
                    type: "description",
                    name: "A slot for website logo content, pulled automatically from the site."
                }];
                async onLoad() {
                    if (!this.renderer.object?.isMesh) throw new Error("Unable to attach PostModifier to a non-mesh entity.");
                    this.material = metapress.ui.createMaterial({
                        width: 1024,
                        height: 512
                    }), this.renderer.object.material = this.material, this.recalculateViewportSize(), this.renderNotice(o(2747)), metapress.config["core.integration.sitecontent"]?.websiteLogoImage ? this.renderLogoImage(metapress.config["core.integration.sitecontent"]?.websiteLogoImage) : this.renderLogoImage(o(7305))
                }
                onEntityEdited() {
                    this.recalculateViewportSize()
                }
                recalculateViewportSize() {
                    let t = (this.entity.scaleY || 1) / (this.entity.scaleX || 1),
                        e = this.entity.contentSlot_aspectRatio || t;
                    this.material.viewportSize.width = 1024, this.material.viewportSize.height = 1024 * e, this.material.invalidate()
                }
                renderNotice(t, e, o) {
                    this.material.baseView = metapress.ui.createElement("flex-layout"), this.material.baseView.background = "#333", this.material.baseView.direction = "column", this.material.baseView.justify = "center", this.material.baseView.align = "center", this.material.invalidate();
                    let n = metapress.ui.createElement("image");
                    n.width = 80, n.height = 80, n.url = t, t && this.material.baseView.add(n);
                    let i = metapress.ui.createElement("text");
                    i.width = 500, i.autoHeight = !0, i.text = e || "Error", i.textAlign = "center", i.color = "#FFF", i.font = "44px Comfortaa, Arial", i.lineHeight = 1.5, i.marginTop = 40, e && this.material.baseView.add(i);
                    let a = metapress.ui.createElement("text");
                    a.width = 500, a.autoHeight = !0, a.text = o || "", a.textAlign = "center", a.color = "#AAA", a.font = "24px Comfortaa, Arial", a.lineHeight = 1.5, a.marginTop = 20, o && this.material.baseView.add(a)
                }
                async renderLogoImage(t) {
                    try {
                        let e = await metapress.assets.download(t),
                            o = URL.createObjectURL(e);
                        this.material.baseView = metapress.ui.createElement("image"), this.material.baseView.url = o, this.material.baseView.scaleMode = "fit", this.renderer.object.material.transparent = !0, this.renderer.object.material.opacity = this.entity.opacity || 1, this.renderer.object.material.alphaTest = .01, this.material.invalidate()
                    } catch (t) {
                        a.warn(`[MetaPress > ContentSlotModifier] Error rendering post image for '${this.entity.contentSlot_source||"any:0"}':`, t), this.renderNotice(o(48174), "Unable to Load", t.message)
                    }
                }
            }
            var s, l = o(25108);

            function c(t, e, o) {
                return (c = function() {
                    function t(t, e) {
                        return function(n) {
                            ! function(t, e) {
                                if (t.v) throw new Error("attempted to call addInitializer after decoration was finished")
                            }(e), o(n, "An initializer"), t.push(n)
                        }
                    }

                    function e(e, o, n, i, a, r, s, l) {
                        var c;
                        switch (a) {
                            case 1:
                                c = "accessor";
                                break;
                            case 2:
                                c = "method";
                                break;
                            case 3:
                                c = "getter";
                                break;
                            case 4:
                                c = "setter";
                                break;
                            default:
                                c = "field"
                        }
                        var d, u, h = {
                                kind: c,
                                name: s ? "#" + o : o,
                                static: r,
                                private: s
                            },
                            f = {
                                v: !1
                            };
                        0 !== a && (h.addInitializer = t(i, f)), 0 === a ? s ? (d = n.get, u = n.set) : (d = function() {
                            return this[o]
                        }, u = function(t) {
                            this[o] = t
                        }) : 2 === a ? d = function() {
                            return n.value
                        } : (1 !== a && 3 !== a || (d = function() {
                            return n.get.call(this)
                        }), 1 !== a && 4 !== a || (u = function(t) {
                            n.set.call(this, t)
                        })), h.access = d && u ? {
                            get: d,
                            set: u
                        } : d ? {
                            get: d
                        } : {
                            set: u
                        };
                        try {
                            return e(l, h)
                        } finally {
                            f.v = !0
                        }
                    }

                    function o(t, e) {
                        if ("function" != typeof t) throw new TypeError(e + " must be a function")
                    }

                    function n(t, e) {
                        var n = typeof e;
                        if (1 === t) {
                            if ("object" !== n || null === e) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
                            void 0 !== e.get && o(e.get, "accessor.get"), void 0 !== e.set && o(e.set, "accessor.set"), void 0 !== e.init && o(e.init, "accessor.init")
                        } else if ("function" !== n) throw new TypeError((0 === t ? "field" : 10 === t ? "class" : "method") + " decorators must return a function or void 0")
                    }

                    function i(t, o, i, a, r, s, l, c) {
                        var d, u, h, f, m, p, g = i[0];
                        if (l ? d = 0 === r || 1 === r ? {
                                get: i[3],
                                set: i[4]
                            } : 3 === r ? {
                                get: i[3]
                            } : 4 === r ? {
                                set: i[3]
                            } : {
                                value: i[3]
                            } : 0 !== r && (d = Object.getOwnPropertyDescriptor(o, a)), 1 === r ? h = {
                                get: d.get,
                                set: d.set
                            } : 2 === r ? h = d.value : 3 === r ? h = d.get : 4 === r && (h = d.set), "function" == typeof g) void 0 !== (f = e(g, a, d, c, r, s, l, h)) && (n(r, f), 0 === r ? u = f : 1 === r ? (u = f.init, m = f.get || h.get, p = f.set || h.set, h = {
                            get: m,
                            set: p
                        }) : h = f);
                        else
                            for (var w = g.length - 1; w >= 0; w--) {
                                var v;
                                void 0 !== (f = e(g[w], a, d, c, r, s, l, h)) && (n(r, f), 0 === r ? v = f : 1 === r ? (v = f.init, m = f.get || h.get, p = f.set || h.set, h = {
                                    get: m,
                                    set: p
                                }) : h = f, void 0 !== v && (void 0 === u ? u = v : "function" == typeof u ? u = [u, v] : u.push(v)))
                            }
                        if (0 === r || 1 === r) {
                            if (void 0 === u) u = function(t, e) {
                                return e
                            };
                            else if ("function" != typeof u) {
                                var y = u;
                                u = function(t, e) {
                                    for (var o = e, n = 0; n < y.length; n++) o = y[n].call(t, o);
                                    return o
                                }
                            } else {
                                var b = u;
                                u = function(t, e) {
                                    return b.call(t, e)
                                }
                            }
                            t.push(u)
                        }
                        0 !== r && (1 === r ? (d.get = h.get, d.set = h.set) : 2 === r ? d.value = h : 3 === r ? d.get = h : 4 === r && (d.set = h), l ? 1 === r ? (t.push((function(t, e) {
                            return h.get.call(t, e)
                        })), t.push((function(t, e) {
                            return h.set.call(t, e)
                        }))) : 2 === r ? t.push(h) : t.push((function(t, e) {
                            return h.call(t, e)
                        })) : Object.defineProperty(o, a, d))
                    }

                    function a(t, e) {
                        for (var o, n, a = [], s = new Map, l = new Map, c = 0; c < e.length; c++) {
                            var d = e[c];
                            if (Array.isArray(d)) {
                                var u, h, f = d[1],
                                    m = d[2],
                                    p = d.length > 3,
                                    g = f >= 5;
                                if (g ? (u = t, 0 != (f -= 5) && (h = n = n || [])) : (u = t.prototype, 0 !== f && (h = o = o || [])), 0 !== f && !p) {
                                    var w = g ? l : s,
                                        v = w.get(m) || 0;
                                    if (!0 === v || 3 === v && 4 !== f || 4 === v && 3 !== f) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + m);
                                    !v && f > 2 ? w.set(m, f) : w.set(m, !0)
                                }
                                i(a, u, d, m, f, g, p, h)
                            }
                        }
                        return r(a, o), r(a, n), a
                    }

                    function r(t, e) {
                        e && t.push((function(t) {
                            for (var o = 0; o < e.length; o++) e[o].call(t);
                            return t
                        }))
                    }
                    return function(e, o, i) {
                        return {
                            e: a(e, o),
                            get c() {
                                return function(e, o) {
                                    if (o.length > 0) {
                                        for (var i = [], a = e, r = e.name, s = o.length - 1; s >= 0; s--) {
                                            var l = {
                                                v: !1
                                            };
                                            try {
                                                var c = o[s](a, {
                                                    kind: "class",
                                                    name: r,
                                                    addInitializer: t(i, l)
                                                })
                                            } finally {
                                                l.v = !0
                                            }
                                            void 0 !== c && (n(10, c), a = c)
                                        }
                                        return [a, function() {
                                            for (var t = 0; t < i.length; t++) i[t].call(a)
                                        }]
                                    }
                                }(e, i)
                            }
                        }
                    }
                }())(t, e, o)
            }
            class d {
                static {
                    [s] = c(this, [
                        [n.j8, 2, "updateFeed"]
                    ], []).e
                }
                constructor(...t) {
                    s(this)
                }
                id = "core.integration.sitecontent";
                name = "Site Content";
                description = "Handles pulling site content.";
                version = "1.0.0";
                requires = ["ui"];
                provides = ["siteContent", "modifier:contentSlot", "modifier:logoSlot"];
                feed = [];
                maxSourceItems = 60;
                onLoad() {
                    this.updateFeed()
                }
                createModifier(t) {
                    return "contentSlot" == t ? new i.Z : "logoSlot" == t ? new r : void 0
                }
                async updateFeed() {
                    let t = metapress.plugins.callAll("siteContent_getSource");
                    t = t.flat(2), this.feed = await Promise.all(t.map((async t => await (t.fetchFeed?.(null, this.maxSourceItems))))), this.feed = this.feed.flat(2).filter((t => !!t)), this.feed.sort(((t, e) => e.date - t.date)), metapress.plugins.callAll("siteContent_onFeedUpdated", this.feed)
                }
                getItems(t) {
                    return "any" == t ? this.feed : this.feed.filter((e => e.type == t))
                }
                getItem(t) {
                    let e = t.indexOf(":");
                    if (-1 == e) throw new Error("Invalid identifier.");
                    let o = t.substr(0, e),
                        n = t.substr(e + 1);
                    if ("id" == o) return this.feed.find((t => t.id == n));
                    if (n = parseInt(n), isNaN(n)) throw new Error("Invalid identifier.");
                    return this.getItems(o)[n]
                }
                $editor_getAddableEntities = () => [{
                    id: "contentSlot",
                    name: "Content Slot",
                    icon: o(56607),
                    description: "Adds a post or product from your site.",
                    action: t => metapress.entities.add({
                        ...t,
                        type: "plane",
                        name: "Content Slot",
                        scaleX: 16 / 9,
                        "modifier:contentSlot": !0,
                        contentSlot_source: "any:" + this.getNextAvailableSource()
                    })
                }, {
                    id: "logoSlot",
                    name: "Logo Slot",
                    icon: o(44877),
                    description: "Adds a logo from your site.",
                    action: t => metapress.entities.add({
                        ...t,
                        type: "plane",
                        name: "Logo Slot",
                        scaleX: 16 / 9,
                        "modifier:logoSlot": !0
                    })
                }];
                getNextAvailableSource() {
                    let t = 0;
                    for (;;) {
                        if (!metapress.entities.all.find((e => e.contentSlot_source == `any:${t}`))) return t;
                        t++
                    }
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:info`,
                    type: "info",
                    name: "Site content",
                    tags: "site content, website content, content slots, content slot, logo slot, logo slots, content feed, feed, content feed items, content feed item, content feed source, content feed sources, blog post, product, article",
                    content: "\n                Content Slots are automatically filled with articles, blog posts and products from the hosting website. Logo Slots automatically pull the site's logo. \n                This is useful when creating template worlds that automatically populate with the latest content from the hosting site when they are loaded.\n                To create a new content slot or logo slot, use the Editor in the sidebar.\n            "
                }, {
                    id: `${this.id}:get-closest-content-action`,
                    type: "action",
                    tags: "content, take me to content, content slot, move me to content",
                    content: "Call this KB action to position the user to the closest content slot.",
                    action: () => {
                        let t = this.GetClosestContentSlot(),
                            e = new THREE.Vector3(t.x, t.y, t.z),
                            o = new THREE.Quaternion(t.quatX, t.quatY, t.quatZ, t.quatW),
                            n = new THREE.Vector3(0, 0, 1);
                        n.applyQuaternion(o), e.add(n.multiplyScalar(2)), metapress.avatars.moveTo(e.x, e.y, e.z)
                    }
                }, {
                    id: `${this.id}:get-random-content-action`,
                    type: "action",
                    tags: "content, take to content, content slot, random content, random content slot",
                    content: "Call this KB action to position the user to a random content slot.",
                    action: () => {
                        let t = this.GetRandomContentSlot(),
                            e = new THREE.Vector3(t.x, t.y, t.z),
                            o = new THREE.Quaternion(t.quatX, t.quatY, t.quatZ, t.quatW),
                            n = new THREE.Vector3(0, 0, 1);
                        n.applyQuaternion(o), e.add(n.multiplyScalar(2)), metapress.avatars.moveTo(e.x, e.y, e.z)
                    }
                }];
                GetAllContentSlots() {
                    let t = metapress.entities.all.filter((t => "template" == t.sync)).filter((t => null != t.contentSlot_source));
                    return l.log(t.length, t.count), t
                }
                GetClosestContentSlot() {
                    let t = null,
                        e = 999999;
                    return this.GetAllContentSlots().forEach((o => {
                        metapress.avatar.distanceTo(o) < e && (e = metapress.avatar.distanceTo(o), t = o)
                    })), t
                }
                GetRandomContentSlot() {
                    let t = this.GetAllContentSlots();
                    return t[(e = 0, o = t.length, e + Math.floor(Math.random() * (o - e + 1)))];
                    var e, o
                }
            }
        },
        44877: (t, e, o) => {
            t.exports = o.p + "mp-core/logo-slot.4f7fb28a3817e594fe99.svg"
        },
        7305: (t, e, o) => {
            t.exports = o.p + "mp-core/mp-logo.c30005ccdcb762bdc0e0.png"
        }
    }
]);