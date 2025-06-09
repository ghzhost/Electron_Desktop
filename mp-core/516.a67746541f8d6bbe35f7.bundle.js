"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [516], {
        40001: (e, t, n) => {
            n.d(t, {
                Lm: () => a,
                U8: () => l,
                lk: () => r,
                sN: () => o
            });
            var i = n(67294);
            const r = e => i.createElement(i.Fragment, null, i.createElement("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 44,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                    }
                }, i.createElement("div", {
                    style: {
                        fontSize: 15,
                        margin: "0px 20px",
                        flex: "1 1 1px"
                    }
                }, e.title), null != e.onClose ? i.createElement("img", {
                    draggable: "false",
                    src: n(42728),
                    title: "Close",
                    style: {
                        width: 20,
                        height: 20,
                        marginRight: 15,
                        cursor: "pointer"
                    },
                    onClick: e.onClose
                }) : null), i.createElement("div", {
                    style: Object.assign({
                        position: "absolute",
                        top: 45,
                        left: 0,
                        width: "100%",
                        height: "calc(100% - 45px)",
                        overflowX: "hidden",
                        overflowY: "auto"
                    }, e.containerStyle)
                }, e.children)),
                a = e => {
                    let [t, r] = i.useState(!!e.openByDefault);
                    return !1 === e.visible ? i.createElement(i.Fragment, null) : i.createElement(i.Fragment, null, i.createElement("div", {
                        style: Object.assign({
                            display: "flex",
                            margin: "20px 10px 10px 10px",
                            fontSize: 15,
                            cursor: "pointer",
                            alignItems: "center"
                        }, e.style),
                        onClick: e => r(!t)
                    }, i.createElement("img", {
                        draggable: "false",
                        src: n(t ? 40313 : 65141),
                        style: {
                            width: 8,
                            height: 8,
                            margin: "0px 6px"
                        }
                    }), i.createElement("div", {
                        style: {
                            flex: "1 1 auto"
                        }
                    }, e.title), e.onRemove ? i.createElement("img", {
                        draggable: "false",
                        src: n(3272),
                        style: {
                            width: 16,
                            height: 16,
                            margin: "0px 10px",
                            cursor: "pointer",
                            opacity: .75
                        },
                        onClick: t => {
                            t.preventDefault(), t.stopPropagation(), e.onRemove()
                        }
                    }) : null), t ? e.children : null)
                },
                o = e => {
                    let [t, r] = i.useState(!1);
                    return i.createElement("div", {
                        style: {
                            margin: "2px 10px",
                            fontSize: 13,
                            borderRadius: 5,
                            backgroundColor: t ? "rgba(255, 255, 255, 0.1)" : e.selected ? "rgb(36, 76, 119)" : "rgba(255, 255, 255, 0.0)",
                            cursor: e.disabled ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            height: 30
                        },
                        title: e.tooltip,
                        onPointerEnter: e => r(!0),
                        onPointerLeave: e => r(!1),
                        onClick: e.disabled ? null : e.onClick
                    }, e.disabled ? i.createElement("div", {
                        style: {
                            flex: "0 0 auto",
                            margin: "0 10px",
                            backgroundColor: "#717171",
                            width: 16,
                            height: 16,
                            maskImage: `url(${e.icon||n(86029)})`,
                            maskPosition: "center",
                            maskSize: "cover",
                            maskRepeat: "no-repeat",
                            WebkitMaskImage: `url(${e.icon||n(86029)})`,
                            WebkitMaskPosition: "center",
                            WebkitMaskSize: "cover",
                            WebkitMaskRepeat: "no-repeat",
                            pointerEvents: "none"
                        }
                    }) : i.createElement("img", {
                        draggable: "false",
                        src: e.icon || n(86029),
                        style: {
                            pointerEvents: "none",
                            width: 16,
                            height: 16,
                            margin: "0px 10px",
                            flex: "0 0 auto",
                            border: "none"
                        }
                    }), i.createElement("div", {
                        style: {
                            color: e.disabled ? "#717171" : null,
                            fontSize: 13,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            marginRight: 10
                        }
                    }, e.name))
                },
                l = e => i.createElement("div", {
                    style: {
                        margin: "10px 20px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: 5,
                        display: "flex"
                    }
                }, i.createElement("img", {
                    src: n(83203),
                    style: {
                        width: 16,
                        margin: "0px 20px",
                        flex: "0 0 auto",
                        opacity: .5
                    }
                }), i.createElement("div", {
                    style: {
                        fontSize: 12,
                        color: "rgba(255, 255, 255, 0.5)",
                        textAlign: "left",
                        margin: "10px 10px 10px 0px",
                        lineHeight: "1.5",
                        flex: "1 1 1px"
                    }
                }, e.text))
        },
        83674: (e, t, n) => {
            n.d(t, {
                g: () => o
            });
            var i = n(67294),
                r = n(40001),
                a = n(32589);
            const o = e => {
                const [t, n] = i.useState(""), o = metapress.entities.get(e.entityID);
                let l = metapress.siteContent.feed;
                if (t) {
                    let e = t.toLowerCase();
                    l = l.filter((t => t.title.toLowerCase().includes(e)))
                }
                return i.createElement(r.lk, {
                    title: "Select Content"
                }, i.createElement(a.Um, {
                    onSearch: e => n(e)
                }), i.createElement(r.Lm, {
                    openByDefault: !0,
                    title: "Feeds"
                }, i.createElement(r.sN, {
                    name: "From website content feed",
                    onClick: () => {
                        let e = 0;
                        e = o.contentSlot_source?.startsWith("any:") ? parseInt(o.contentSlot_source.substring(4)) || 0 : metapress.siteContent.getNextAvailableSource();
                        let t = prompt("Enter the index of the feed item to display. For example, 0 will show the latest post, 1 the second latest, etc.", e.toString());
                        null !== t && 0 != t.length && (metapress.entities.update(o.id, {
                            contentSlot_source: "any:" + t
                        }), metapress.menubar.closePanel())
                    }
                })), i.createElement(r.Lm, {
                    openByDefault: !0,
                    title: "Posts"
                }, l.map((e => i.createElement(r.sN, {
                    key: e.id,
                    name: e.title,
                    onClick: () => {
                        return t = e, metapress.entities.update(o.id, {
                            contentSlot_source: "id:" + t.id
                        }), void metapress.menubar.closePanel();
                        var t
                    }
                })))))
            }
        },
        60516: (e, t, n) => {
            n.d(t, {
                T: () => c,
                Z: () => l
            });
            var i = n(67294),
                r = (n(18151), n(8838), n(40001)),
                a = n(83674),
                o = n(25108);
            class l {
                name = "Content Slot";
                icon = n(56607);
                provides = ["material"];
                settings = [{
                    type: "description",
                    name: "A slot for user-generated content, either pulled automatically from the site or manually selected."
                }, {
                    type: "button",
                    id: "contentSlot_pickContent",
                    name: "Select Content",
                    help: "Select the content to display in this slot.",
                    onClick: () => this.showContentPicker()
                }, {
                    type: "text",
                    id: "contentSlot_source",
                    name: "Source ID",
                    placeholder: "any:0",
                    help: "Can either be a direct post ID or an offset in a list, ie 'posts:0' would return the first post etc."
                }, {
                    type: "select",
                    id: "contentSlot_displayType",
                    name: "Display Type",
                    placeholder: "panel",
                    values: ["panel", "popup", "same-tab", "new-tab", "sidebar"],
                    labels: ["Open in panel", "Open in browser popup", "Open in same tab", "Open in new tab", "Open in sidebar"],
                    help: "Controls how the content will be displayed when the user clicks on it."
                }];
                currentItem = null;
                currentItemRendered = !1;
                async onLoad() {
                    if (!this.renderer.object?.isMesh) throw new Error("Unable to attach PostModifier to a non-mesh entity.");
                    this.material = metapress.ui.createMaterial({
                        width: 1024,
                        height: 512
                    }), this.renderer.object.material = this.material, this.recalculateViewportSize(), this.renderNotice(n(2747)), this.loadPost()
                }
                onEntityUpdated() {
                    this.loadPost()
                }
                onEntityEdited() {
                    this.recalculateViewportSize()
                }
                recalculateViewportSize() {
                    let e = (this.entity.scaleY || 1) / (this.entity.scaleX || 1),
                        t = this.entity.contentSlot_aspectRatio || e;
                    this.material.viewportSize.width = 1024, this.material.viewportSize.height = 1024 * t, this.material.invalidate()
                }
                $siteContent_onFeedUpdated() {
                    this.loadPost()
                }
                loadPost() {
                    try {
                        let e = metapress.siteContent.getItem(this.entity.contentSlot_source || "any:0");
                        if (this.currentItem?.id == e?.id && this.currentItemRendered) return;
                        if (this.currentItem = e, this.currentItemRendered = !0, !e) return void this.renderNotice(n(45910));
                        e.image ? this.renderPostImage(e.image) : this.renderNotice(null, s(e.title), s(e.excerpt || e.content))
                    } catch (e) {
                        o.warn(`[MetaPress > ContentSlotModifier] Error loading content for '${this.entity.contentSlot_source||"any:0"}':`, e), this.renderNotice(n(48174), "Unable to Load", e.message)
                    }
                }
                renderNotice(e, t, n) {
                    this.material.baseView = metapress.ui.createElement("flex-layout"), this.material.baseView.background = "#333", this.material.baseView.direction = "column", this.material.baseView.justify = "center", this.material.baseView.align = "center", this.material.invalidate();
                    let i = metapress.ui.createElement("image");
                    i.width = 80, i.height = 80, i.url = e, e && this.material.baseView.add(i);
                    let r = metapress.ui.createElement("text");
                    r.width = 500, r.autoHeight = !0, r.text = t || "Error", r.textAlign = "center", r.color = "#FFF", r.font = "44px Comfortaa, Arial", r.lineHeight = 1.5, r.marginTop = 40, t && this.material.baseView.add(r);
                    let a = metapress.ui.createElement("text");
                    a.width = 500, a.autoHeight = !0, a.text = n || "", a.textAlign = "center", a.color = "#AAA", a.font = "24px Comfortaa, Arial", a.lineHeight = 1.5, a.marginTop = 20, n && this.material.baseView.add(a)
                }
                async renderPostImage(e) {
                    try {
                        let t = await metapress.assets.download(e),
                            n = URL.createObjectURL(t);
                        this.material.baseView = metapress.ui.createElement("image"), this.material.baseView.background = "#333", this.material.baseView.url = n, this.material.baseView.scaleMode = "fill", this.material.invalidate()
                    } catch (e) {
                        o.warn(`[MetaPress > ContentSlotModifier] Error rendering post image for '${this.entity.contentSlot_source||"any:0"}':`, e), this.renderNotice(n(48174), "Unable to Load", e.message)
                    }
                }
                async onClick() {
                    if (this.currentItem?.link)
                        if (document.pointerLockElement && document.exitPointerLock(), "same-tab" == this.entity.contentSlot_displayType) metapress.close(), await new Promise((e => setTimeout(e, 500))), location.href = this.currentItem.link;
                        else if ("new-tab" == this.entity.contentSlot_displayType) window.open(this.currentItem.link, "_blank");
                    else if ("popup" == this.entity.contentSlot_displayType) {
                        let e = 600,
                            t = 800,
                            n = window.screenLeft || window.screenX || 0,
                            i = window.screenTop || window.screenY || 0,
                            r = window.outerWidth || 1920,
                            a = window.outerHeight || 1080,
                            o = Math.max(n + r / 2 - e / 2, 0),
                            l = Math.max(i + a / 2 - t / 2, 0);
                        window.open(this.currentItem.link, "_blank", `width=${e},height=${t},left=${o},top=${l},menubar=no,toolbar=no,location=no,personalbar=no,status=no`)
                    } else "sidebar" == this.entity.contentSlot_displayType ? this.currentItem?.link && metapress.menubar.openReactPanel("sidebar-iframe", c, {
                        item: this.currentItem,
                        onClose: () => metapress.menubar.closePanel()
                    }) : (metapress.dialogs.show({
                        title: this.currentItem.title,
                        url: this.currentItem.link,
                        width: Math.floor(.8 * window.innerWidth),
                        height: Math.floor(.8 * window.innerHeight)
                    }), metapress.plugins.sendEvent("siteContent_onClick", {
                        id: this.entity.id,
                        title: this.currentItem.title,
                        url: this.currentItem.link
                    }))
                }
                showContentPicker() {
                    metapress.menubar.openReactPanel("site-content-picker", a.g, {
                        entityID: this.entity.id
                    })
                }
            }

            function s(e) {
                let t = document.createElement("div");
                t.innerHTML = e;
                let n = t.innerText;
                for (;;) {
                    let e = n.indexOf("\n\n\n");
                    if (-1 == e) break;
                    n = n.substring(0, e) + "\n\n" + n.substring(e + 3)
                }
                return n = n.trim(), n
            }
            const c = e => i.createElement(r.lk, {
                title: e.item.title,
                containerStyle: {
                    overflow: "hidden"
                },
                onClose: e.onClose
            }, i.createElement("iframe", {
                src: e.item.link,
                style: {
                    width: "100%",
                    height: "100%",
                    background: "none",
                    border: "none",
                    outline: "none"
                }
            }))
        },
        8838: (e, t, n) => {
            n.d(t, {
                dI: () => a,
                j8: () => r
            });
            var i = n(25108);

            function r(e) {
                let t = null;
                return function(...n) {
                    let i = this,
                        r = t;
                    return t = async function() {
                        return await (r?.catch((() => null))), await e.apply(i, n)
                    }(), t
                }
            }

            function a(e) {
                return function(t) {
                    return async function(...n) {
                        try {
                            return await t.apply(this, n)
                        } catch (t) {
                            return e ? i.warn(e, t) : i.warn(t), null
                        }
                    }
                }
            }
        },
        40313: (e, t, n) => {
            e.exports = n.p + "mp-core/chevron-down.cc1880a489f70d445894.svg"
        },
        65141: (e, t, n) => {
            e.exports = n.p + "mp-core/chevron-right.4d67e59ffa9deea58f42.svg"
        },
        83203: (e, t, n) => {
            e.exports = n.p + "mp-core/icon-info.7ffb0c7f21d06d441b00.svg"
        },
        86029: (e, t, n) => {
            e.exports = n.p + "mp-core/icon-unknown.c9a47daeb41c69cd7c2b.svg"
        },
        3272: (e, t, n) => {
            e.exports = n.p + "mp-core/trash-can.a6dd95456040e25648a2.svg"
        },
        56607: (e, t, n) => {
            e.exports = n.p + "mp-core/content-slot.79c075b0882c6d864a7d.svg"
        },
        2747: (e, t, n) => {
            e.exports = n.p + "mp-core/loading.bb6e11d815519d3a5e6c.svg"
        },
        45910: (e, t, n) => {
            e.exports = n.p + "mp-core/missing-file.a0bac9e91cf74db7f1c6.svg"
        },
        48174: (e, t, n) => {
            e.exports = n.p + "mp-core/warning.1cf133b62e6ba94dbcf9.svg"
        }
    }
]);