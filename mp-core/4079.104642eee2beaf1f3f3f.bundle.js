"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [4079], {
        46839: (e, t, o) => {
            o.d(t, {
                Z: () => i
            });
            const i = {
                appVersion: o(4147).i8,
                colors: {
                    darkGrey: "#272727",
                    black: "#1a1a1a"
                }
            }
        },
        4079: (e, t, o) => {
            o.r(t), o.d(t, {
                default: () => c
            });
            var i = o(67294),
                n = o(20745),
                l = o(46839),
                s = o(32589),
                a = o(71884),
                r = o(25108);
            class c {
                id = "core.ui.dialogs";
                name = "Dialogs";
                description = "Shows popup dialog windows.";
                requires = [];
                provides = ["dialogs"];
                iconSize = 70;
                dialogs = [];
                show(e) {
                    let t = document.createElement("div");
                    t.className = "metapress-dialog", metapress.contentDiv.appendChild(t);
                    let o = n.createRoot(t),
                        l = {
                            id: THREE.MathUtils.generateUUID(),
                            _closeHandler: () => r.warn("[Dialogs] Close called before component was rendered!"),
                            isClosed: !1,
                            options: e,
                            close: async () => {
                                const i = metapress.button?.div;
                                i && e?.hideMetaverseButton && (i.style.cssText = null), l.isClosed = !0, await new Promise((e => setTimeout(e, 1))), await l._closeHandler(), this.dialogs = this.dialogs.filter((e => e.id != l.id)), o.unmount(), t.remove()
                            }
                        };
                    o.render(i.createElement(d, {
                        handler: l,
                        options: e
                    })), metapress.plugins.sendEvent("dialogs_didShow", l);
                    const s = metapress.button?.div;
                    return s && e?.hideMetaverseButton && (s.style.cssText = "bottom: -42px;"), this.dialogs.push(l), l
                }
                closeAll() {
                    for (let e in this.dialogs) this.dialogs[e].isClosed || this.dialogs[e].close();
                    this.dialogs = []
                }
                get useDialog() {
                    return g
                }
                async alert(e) {
                    "string" == typeof e && (e = {
                        text: e
                    }), "error" == e.icon && (e.icon = o(52586)), "warn" == e.icon && (e.icon = o(91858)), "warning" == e.icon && (e.icon = o(91858)), "info" == e.icon && (e.icon = o(95005)), "information" == e.icon && (e.icon = o(95005)), "success" == e.icon && (e.icon = o(87952)), "question" == e.icon && (e.icon = o(82663)), void 0 === e.icon && (e.icon = o(95005));
                    let t = this.show({
                        width: 500,
                        height: "auto",
                        noHeader: !0,
                        content: i.createElement("div", null, e.icon ? i.createElement("img", {
                            draggable: "false",
                            src: e.icon,
                            style: {
                                display: "block",
                                height: this.iconSize,
                                margin: "30px auto 20px auto"
                            }
                        }) : null, i.createElement("div", {
                            style: {
                                fontSize: 18,
                                fontWeight: "bold",
                                textAlign: "center",
                                margin: "20px 40px 5px 40px"
                            }
                        }, e.title), i.createElement("div", {
                            style: {
                                fontSize: 14,
                                textAlign: "center",
                                lineHeight: "1.5",
                                margin: "0px 40px 20px 40px",
                                opacity: .5
                            }
                        }, i.createElement(a.U, {
                            children: e.text
                        })), i.createElement(s.zx, {
                            title: "Close",
                            onClick: () => t.close()
                        }), i.createElement("div", {
                            style: {
                                height: 5
                            }
                        }))
                    });
                    for (; !t.isClosed;) await new Promise((e => setTimeout(e, 250)))
                }
                async confirm(e) {
                    "string" == typeof e && (e = {
                        text: e
                    }), "error" == e.icon && (e.icon = o(52586)), "warn" == e.icon && (e.icon = o(91858)), "warning" == e.icon && (e.icon = o(91858)), "info" == e.icon && (e.icon = o(95005)), "information" == e.icon && (e.icon = o(95005)), "success" == e.icon && (e.icon = o(87952)), "question" == e.icon && (e.icon = o(82663)), void 0 === e.icon && (e.icon = o(82663));
                    let t = null,
                        n = this.show({
                            width: 500,
                            height: "auto",
                            noHeader: !0,
                            noDismiss: !0,
                            content: i.createElement("div", null, e.icon ? i.createElement("img", {
                                draggable: "false",
                                src: e.icon,
                                style: {
                                    display: "block",
                                    height: this.iconSize,
                                    margin: "30px auto 20px auto"
                                }
                            }) : null, i.createElement("div", {
                                style: {
                                    fontSize: 18,
                                    fontWeight: "bold",
                                    textAlign: "center",
                                    margin: "20px 40px 5px 40px"
                                }
                            }, e.title), i.createElement("div", {
                                style: {
                                    fontSize: 14,
                                    textAlign: "center",
                                    lineHeight: "1.5",
                                    margin: "0px 40px 20px 40px",
                                    opacity: .5
                                }
                            }, i.createElement(a.U, {
                                children: e.text
                            })), i.createElement(s.aW, null, i.createElement(s.ek, {
                                title: "OK",
                                onClick: () => {
                                    t = !0, n.close()
                                }
                            }), i.createElement(s.ek, {
                                title: "Cancel",
                                onClick: () => {
                                    t = !1, n.close()
                                }
                            })), i.createElement("div", {
                                style: {
                                    height: 5
                                }
                            }))
                        });
                    for (; !n.isClosed;) await new Promise((e => setTimeout(e, 250)));
                    return t
                }
            }
            const d = e => {
                    const [t, n] = i.useState(!1);
                    (0, i.useEffect)((() => {
                        setTimeout((() => n(!0)), 1)
                    }), []), e.handler._closeHandler = async () => {
                        r.debug("[Dialogs] Closing..."), n(!1), await new Promise((e => setTimeout(e, 750)))
                    };
                    let s = null;
                    s = e.options?.content ? e.options.content : e.options?.url ? i.createElement("iframe", {
                        src: e.options.url,
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            background: "none",
                            outline: "none",
                            border: "none",
                            margin: 0,
                            padding: 0
                        }
                    }) : i.createElement("div", null, "No content was provided.");
                    let a = null;
                    return a = e.options?.noHeader ? i.createElement("div", {
                        style: {
                            flex: "1",
                            position: "relative",
                            overflowY: "auto"
                        }
                    }, s) : i.createElement(i.Fragment, null, i.createElement("div", {
                        style: {
                            display: "flex",
                            height: 40,
                            flex: "0 0 auto",
                            flexDirection: "row",
                            alignItems: "center",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                        }
                    }, i.createElement("div", {
                        style: {
                            fontSize: 15,
                            margin: "0px 20px",
                            flex: "1 1 1px"
                        }
                    }, e.options?.title || ""), i.createElement(p, {
                        icon: o(42728),
                        enabled: !0,
                        onClick: e.handler.close,
                        title: "Close"
                    }), i.createElement("div", {
                        style: {
                            width: 10,
                            flex: "0 0 auto"
                        }
                    })), i.createElement("div", {
                        style: {
                            flex: "1",
                            position: "relative",
                            overflowY: "auto"
                        }
                    }, s)), i.createElement(u.Provider, {
                        value: e.handler
                    }, i.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            zIndex: 10,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: "rgba(0, 0, 0, 0.4)",
                            opacity: t ? 1 : 0,
                            transition: "opacity 0.25s",
                            pointerEvents: t ? "auto" : "none"
                        },
                        onClick: t => {
                            e.options?.noDismiss || t.target === t.currentTarget && (t.preventDefault(), e.handler.close())
                        }
                    }, i.createElement("div", {
                        style: {
                            width: "auto" == e.options?.width ? "auto" : "calc(100% - 20px)",
                            height: "auto" == e.options?.height ? "auto" : "calc(100% - 30px)",
                            maxWidth: "auto" == e.options?.width ? "calc(100% - 20px)" : e.options?.width || 600,
                            maxHeight: "auto" == e.options?.height ? "calc(100% - 30px)" : e.options?.height || 800,
                            overflow: "auto",
                            backgroundColor: l.Z.colors.darkGrey,
                            borderRadius: 10,
                            boxShadow: `0 0.4rem 0 0 ${l.Z.colors.black}, 0 0 10px 0px rgba(0, 0, 0, 0.6)`,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "stretch",
                            justifyContent: "stretch",
                            transform: t ? "translateY(0px)" : "translateY(50px)",
                            transition: "transform 0.5s"
                        }
                    }, a)))
                },
                p = e => i.createElement("div", {
                    style: Object.assign({
                        width: 24,
                        height: "100%",
                        flex: "0 0 auto",
                        opacity: e.enabled ? 1 : .4,
                        cursor: "pointer",
                        backgroundSize: "contain",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: `url(${e.icon})`
                    }, e.style),
                    onClick: e.onClick,
                    title: e.title
                }),
                u = (0, i.createContext)(null),
                g = () => (0, i.useContext)(u)
        },
        52586: (e, t, o) => {
            e.exports = o.p + "mp-core/error.26d2fb4f8ac4def89ee9.svg"
        },
        95005: (e, t, o) => {
            e.exports = o.p + "mp-core/info.0c158f002afb308dc5a7.svg"
        },
        82663: (e, t, o) => {
            e.exports = o.p + "mp-core/question.6d37354afd90bd7bf1ff.svg"
        },
        87952: (e, t, o) => {
            e.exports = o.p + "mp-core/success.6b6350a4feeebacef223.svg"
        },
        91858: (e, t, o) => {
            e.exports = o.p + "mp-core/warning.dc8f3656c194cb1b13dc.svg"
        },
        4147: e => {
            e.exports = {
                i8: "VerseWeb 1.0 BETA"
            }
        }
    }
]);