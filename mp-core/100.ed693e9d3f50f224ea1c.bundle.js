"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [100], {
        40001: (e, t, a) => {
            a.d(t, {
                Lm: () => n,
                U8: () => o,
                lk: () => r,
                sN: () => i
            });
            var s = a(67294);
            const r = e => s.createElement(s.Fragment, null, s.createElement("div", {
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
                }, s.createElement("div", {
                    style: {
                        fontSize: 15,
                        margin: "0px 20px",
                        flex: "1 1 1px"
                    }
                }, e.title), null != e.onClose ? s.createElement("img", {
                    draggable: "false",
                    src: a(42728),
                    title: "Close",
                    style: {
                        width: 20,
                        height: 20,
                        marginRight: 15,
                        cursor: "pointer"
                    },
                    onClick: e.onClose
                }) : null), s.createElement("div", {
                    style: Object.assign({
                        position: "absolute",
                        top: 45,
                        left: 0,
                        width: "100%",
                        height: "calc(100% - 45px)",
                        overflowX: "hidden",
                        overflowY: "auto",
                        backgroundColor: "#00233f"
                    }, e.containerStyle)
                }, e.children)),
                n = e => {
                    let [t, r] = s.useState(!!e.openByDefault);
                    return !1 === e.visible ? s.createElement(s.Fragment, null) : s.createElement(s.Fragment, null, s.createElement("div", {
                        style: Object.assign({
                            display: "flex",
                            margin: "20px 10px 10px 10px",
                            fontSize: 15,
                            cursor: "pointer",
                            alignItems: "center"
                        }, e.style),
                        onClick: e => r(!t)
                    }, s.createElement("img", {
                        draggable: "false",
                        src: a(t ? 40313 : 65141),
                        style: {
                            width: 8,
                            height: 8,
                            margin: "0px 6px"
                        }
                    }), s.createElement("div", {
                        style: {
                            flex: "1 1 auto"
                        }
                    }, e.title), e.onRemove ? s.createElement("img", {
                        draggable: "false",
                        src: a(3272),
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
                i = e => {
                    let [t, r] = s.useState(!1), [n, i] = s.useState(!1), o = s.useRef(null);
                    const l = e.avatar.avatar_name || e.avatar.avatar_id || "(no name)",
                        c = a(78226),
                        m = e.avatar.avatar_image;
                    return s.useEffect((() => {
                        i(o.current.offsetWidth < o.current.scrollWidth)
                    }), []), s.createElement("div", {
                        onMouseEnter: e => r(!0),
                        onMouseLeave: e => r(!1),
                        onClick: e.onClick,
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            transform: t ? "scale(1.1)" : null,
                            transition: "all 0.2s ease",
                            alignItems: "center",
                            cursor: "pointer"
                        }
                    }, e.selected ? s.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 4,
                            right: 6,
                            width: 18,
                            height: 18,
                            backgroundColor: "#00bd28",
                            mask: `url(${c}) center / contain no-repeat`,
                            WebkitMask: `url(${c}) center / contain no-repeat`
                        }
                    }) : null, null != m ? s.createElement("img", {
                        draggable: "false",
                        src: e.avatar.avatar_image,
                        style: {
                            width: 110,
                            height: 80,
                            borderRadius: "6px 6px 0 0"
                        }
                    }) : s.createElement("div", {
                        style: {
                            display: "flex",
                            width: 110,
                            height: 80,
                            backgroundColor: "rgba(36, 33, 32, 0.4)",
                            borderRadius: "6px 6px 0 0",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }, s.createElement("img", {
                        draggable: "false",
                        src: a(95186),
                        style: {
                            width: "90%",
                            height: "90%"
                        }
                    })), s.createElement("div", {
                        ref: o,
                        title: n ? l : null,
                        style: {
                            display: "block",
                            width: 110,
                            height: 23,
                            padding: "0 5px",
                            color: "white",
                            backgroundColor: "#202020",
                            fontSize: 13,
                            borderRadius: "0 0 6px 6px",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            textOverflow: "ellipsis",
                            textAlign: "center",
                            boxSizing: "border-box"
                        }
                    }, l))
                }
        },
        30100: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => p
            });
            var s = a(67294),
                r = a(32589),
                n = a(42321),
                i = a(40001),
                o = a(46839),
                l = a(25108);
            class c extends s.PureComponent {
                state = {
                    page: "main",
                    profile_image_src: metapress.profile?.currentProfile?.fields?.profile_image_src
                };
                get termsAndConditions() {
                    return {
                        title: "Verseweb Termos e condições",
                        noHeader: !1,
                        content: s.createElement("div", {
                            style: {
                                height: "100%",
                                padding: "10px 10px 60px 10px",
                                overflow: "hidden auto"
                            }
                        }, s.createElement("p", {
                            style: {
                                color: "#C7C7C7",
                                fontSize: 16,
                                fontWeight: 400,
                                fontFamily: "'Rubik', sans-serif"
                            }
                        }, "Olá Mundo"))
                    }
                }
                render() {
                    if ("avatar-select" == this.state.page) return s.createElement(n.Z, {
                        setPage: e => this.setState({
                            page: e
                        })
                    });
                    metapress.plugins.callAll("getAccountLoginOptions").flat().sort(((e, t) => (e.name || "").localeCompare(t.name || "")));
                    let e = metapress.plugins.callAll("siteSettings_getSettingSources");
                    return s.createElement(i.lk, {
                        title: "Configurações",
                        onClose: () => metapress.menubar.closePanel()
                    }, s.createElement("img", {
                        draggable: "false",
                        src: this.state.profile_image_src || a(95186),
                        style: {
                            display: "block",
                            width: 100,
                            height: 100,
                            objectFit: "cover",
                            objectPosition: "center",
                            overflow: "hidden",
                            borderRadius: 50,
                            margin: "30px auto 10px auto",
                            cursor: "pointer"
                        },
                        onClick: async () => await this.updateImage()
                    }), this.state.profile_image_src ? s.createElement("div", {
                        title: "Remover",
                        style: {
                            width: 26,
                            height: 26,
                            backgroundColor: "#333",
                            borderRadius: 12,
                            opacity: .8,
                            position: "relative",
                            top: -90,
                            left: 40,
                            margin: "-24px auto 0px auto",
                            display: "block",
                            cursor: "pointer",
                            backgroundSize: 16,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: `url(${a(86418)}`
                        },
                        onClick: () => this.removeImage()
                    }) : null, s.createElement("div", {
                        style: {
                            fontSize: 15,
                            margin: "0px 20px 10px 20px",
                            textAlign: "center"
                        }
                    }, metapress.profile.get("name") || "Convidado"), this.getProfile(e), this.getHelpSection(e), this.getPluginSection(e), s.createElement("div", {
                        style: {
                            margin: 30,
                            opacity: .25,
                            fontSize: 11,
                            textAlign: "center"
                        },
                        onClick: () => this.onVersionClick()
                    }, "VerseWeb 1.0 BETA"))
                }
                getUIType(e) {
                    switch (e.type) {
                        case "text":
                            return s.createElement(d, {
                                key: e.id | e.name,
                                name: e.name,
                                field: e.field,
                                placeholder: e.placeholder,
                                onValue: () => this.forceUpdate()
                            });
                        case "button":
                            return s.createElement(r.zx, {
                                key: e.id | e.name,
                                title: e.name,
                                onClick: e.onClick
                            });
                        case "actionField":
                            return s.createElement(r.N7, {
                                key: e.id | e.name,
                                fieldIcon: e.icon,
                                name: e.name,
                                value: e.value,
                                onClick: e.onClick
                            });
                        case "header":
                            return s.createElement("div", {
                                key: e.id | e.name,
                                style: {
                                    margin: "14px 32px -6px 32px",
                                    fontSize: 12,
                                    color: "rgba(255, 255, 255, 0.3)",
                                    textAlign: "left"
                                }
                            }, e.text);
                        case "description":
                            return s.createElement("div", {
                                key: e.id | e.name,
                                style: {
                                    margin: "10px calc(22px + 0.5%)",
                                    fontSize: 12,
                                    color: "rgba(255, 255, 255, 0.5)",
                                    textAlign: "left"
                                }
                            }, e.text);
                        case "checkbox":
                            return e.id ? s.createElement(CheckboxField, {
                                key: e.id | e.name,
                                name: e.name || e.id,
                                tooltip: e.help,
                                placeholder: e.placeholder,
                                onUpdate: e.onUpdate()
                            }) : null;
                        case "file":
                            return e.id ? s.createElement(FileField, {
                                key: e.id | e.name,
                                name: e.name || e.id,
                                tooltip: e.help,
                                placeholder: e.placeholder,
                                allowClear: e.allowClear ?? !1,
                                onUpdate: e.onUpdate()
                            }) : null;
                        case "select":
                            return e.id ? s.createElement(SelectField, {
                                key: e.id | e.name,
                                name: e.name || e.id,
                                tooltip: e.help,
                                default: e.default,
                                values: e.values,
                                labels: e.labels,
                                onUpdate: e.onUpdate()
                            }) : null;
                        case "number":
                            return e.id ? s.createElement(d, {
                                key: e.id | e.name,
                                name: e.name || e.id,
                                tooltip: e.help,
                                placeholder: e.placeholder,
                                type: e.fieldType
                            }) : null;
                        default:
                            return null
                    }
                }
                getProfile(e) {
                    if (e.length <= 0) return s.createElement(i.Lm, {
                        title: "Meu Perfil",
                        openByDefault: !0
                    }, s.createElement(d, {
                        name: "Nome",
                        field: "name",
                        placeholder: "Convidado",
                        onValue: () => this.forceUpdate()
                    }), s.createElement(r.N7, {
                        fieldIcon: a(46314),
                        name: "Avatar",
                        value: metapress.avatars?.currentUserEntity?.avatar_name || metapress.avatars?.currentUserEntity?.avatar_id || "",
                        onClick: e => this.setState({
                            page: "avatar-select"
                        })
                    }));
                    let t = [];
                    for (let a of e) {
                        if ("profile" !== a.section) continue;
                        const e = this.getUIType(a);
                        e && t.push(e)
                    }
                    return s.createElement(i.Lm, {
                        title: "Meu Perfil",
                        openByDefault: !0
                    }, s.createElement(d, {
                        name: "Nome",
                        field: "name",
                        placeholder: "Convidado",
                        onValue: () => this.forceUpdate()
                    }), s.createElement(r.N7, {
                        fieldIcon: a(46314),
                        name: "Avatar",
                        value: metapress.avatars?.currentUserEntity?.avatar_name || metapress.avatars?.currentUserEntity?.avatar_id || "",
                        onClick: e => this.setState({
                            page: "avatar-select"
                        })
                    }), t)
                }
                getHelpSection(e) {
                    if (e.length <= 0) return s.createElement(i.Lm, {
                        title: "Ajuda",
                        openByDefault: !0
                    }, s.createElement(r.zx, {
                        title: "Renascer",
                        onClick: () => metapress.spawnpoints.respawn()
                    }), s.createElement(r.zx, {
                        title: "Termos e Condições",
                        onClick: () => metapress.dialogs.show(this.termsAndConditions)
                    }));
                    let t = [];
                    for (let a of e) {
                        if ("help" !== a.section) continue;
                        const e = this.getUIType(a);
                        e && t.push(e)
                    }
                    return s.createElement(i.Lm, {
                        title: "Ajuda",
                        openByDefault: !0
                    }, s.createElement(r.zx, {
                        title: "Renascer",
                        onClick: () => metapress.spawnpoints.respawn()
                    }), s.createElement(r.zx, {
                        title: "Termos e Condições",
                        onClick: () => metapress.dialogs.show(this.termsAndConditions)
                    }), t)
                }
                getPluginSection(e) {
                    if (e.length <= 0) return;
                    let t = [];
                    for (let a of e) {
                        if ("help" == a.section || "profile" == a.section) continue;
                        const e = this.getUIType(a);
                        e && t.push(e)
                    }
                    return t.length <= 0 ? void 0 : s.createElement(i.Lm, {
                        title: "Plugins",
                        openByDefault: !0
                    }, t)
                }
                onVersionClick() {
                    this._lastVersionClick && Date.now() - this._lastVersionClick < 500 ? this._versionClickCount++ : this._versionClickCount = 1, this._lastVersionClick = Date.now(), this._versionClickCount >= 4 && metapress.debug.showDebugMenu()
                }
                async updateImage() {
                    let e = "";
                    try {
                        let t = (await m({
                            multiple: !1,
                            accept: "image/*"
                        }))[0];
                        if (!t) return;
                        let a = "Uploading $FILENAME...";
                        a = a.replaceAll("$FILENAME", t.name), e = metapress.menubar.toasts.show({
                            sticky: !0,
                            text: a
                        }), this.update(t)
                    } catch (e) {
                        l.warn(`[MetaPress] Unable to process file: ${e.message}`), metapress.menubar.toasts.show({
                            text: `Failed: ${e.message}`
                        })
                    }
                    metapress.menubar.toasts.close(e)
                }
                update(e) {
                    var t = new FileReader;
                    let a = null;
                    t.onloadend = e => {
                        var s = new Image;
                        s.src = t.result, s.onload = e => {
                            a = this.resize(s), metapress.profile.set("profile_image_src", a), this.setState({
                                profile_image_src: a
                            }), "default" == metapress.avatars.configurationID && metapress.avatars.setConfigurationByID("default", !0)
                        }
                    }, t.readAsDataURL(e)
                }
                resize(e) {
                    let t = document.createElement("canvas"),
                        a = e.width,
                        s = e.height;
                    return a > s ? a > 300 && (s = Math.round(s *= 300 / a), a = 300) : s > 300 && (a = Math.round(a *= 300 / s), s = 300), t.width = a, t.height = s, t.getContext("2d").drawImage(e, 0, 0, a, s), t.toDataURL("image/jpeg", .7)
                }
                removeImage() {
                    metapress.profile.set("profile_image_src", ""), this.setState({
                        profile_image_src: ""
                    }), "default" == metapress.avatars.configurationID && metapress.avatars.setConfigurationByID("default", !0)
                }
            }
            const m = () => new Promise((e => {
                    const t = (() => {
                        const e = document.createElement("input");
                        return e.type = "file", e.id = "file", e.accept = "image/*", e
                    })();
                    document.body.appendChild(t), t.addEventListener("change", (() => {
                        e(t.files || null), document.body.removeChild(t)
                    })), t.click()
                })),
                d = e => {
                    let [t, a] = s.useState(metapress.profile.get(e.field) || "");
                    return s.createElement(r.nv, {
                        name: e.name,
                        tooltip: e.tooltip,
                        placeholder: e.placeholder,
                        value: t,
                        onChange: t => {
                            metapress.profile.set(e.field, t.target.value), a(t.target.value), e.onValue?.(t.target.value)
                        }
                    })
                };
            class p {
                id = "core.ui.settings";
                name = "Settings Panel";
                description = "This displays a settings menu for users to access.";
                version = "1.0.0";
                requires = ["menubar"];
                provides = [];
                onLoad() {
                    metapress.entities.add({
                        id: "core.ui.settings.menu",
                        type: "menubar.item",
                        name: "Configurações",
                        description: "Can be used to change user name and avatar.",
                        is_panel: !0,
                        order: 100,
                        icon: a(65077),
                        onClick: () => this.toggleMenu()
                    })
                }
                showMenu() {
                    metapress.menubar.openReactPanel("core.ui.settings.menu", (() => s.createElement(c, {
                        plugin: this
                    })))
                }
                hideMenu() {
                    "core.ui.settings.menu" == metapress.menubar.openPanelID && metapress.menubar.closePanel()
                }
                toggleMenu() {
                    "core.ui.settings.menu" == metapress.menubar.openPanelID ? this.hideMenu() : this.showMenu()
                }
            }
        },
        40313: (e, t, a) => {
            e.exports = a.p + "mp-core/chevron-down.cc1880a489f70d445894.svg"
        },
        65141: (e, t, a) => {
            e.exports = a.p + "mp-core/chevron-right.4d67e59ffa9deea58f42.svg"
        },
        83203: (e, t, a) => {
            e.exports = a.p + "mp-core/icon-info.7ffb0c7f21d06d441b00.svg"
        },
        86029: (e, t, a) => {
            e.exports = a.p + "mp-core/icon-unknown.c9a47daeb41c69cd7c2b.svg"
        },
        3272: (e, t, a) => {
            e.exports = a.p + "mp-core/trash-can.a6dd95456040e25648a2.svg"
        },
        12108: (e, t, a) => {
            e.exports = a.p + "mp-core/back.6840705508068eb1b067.svg"
        },
        78226: (e, t, a) => {
            e.exports = a.p + "mp-core/icon-good.332ed59028d6225e5a04.svg"
        },
        65077: (e, t, a) => {
            e.exports = a.p + "mp-core/gear.8cb3aa11048e7d496917.svg"
        },
        95186: (e, t, a) => {
            e.exports = a.p + "mp-core/avatar-default.18ad46433ff3942e17b8.svg"
        },
        46314: (e, t, a) => {
            e.exports = a.p + "mp-core/field-avatar.21c2f9b9026f7b14f62a.svg"
        },
        86418: (e, t, a) => {
            e.exports = a.p + "mp-core/trash-can.a6dd95456040e25648a2.svg"
        },
        4147: e => {
            e.exports = {
                i8: "VerseWeb 1.0 BETA"
            }
        }
    }
]);