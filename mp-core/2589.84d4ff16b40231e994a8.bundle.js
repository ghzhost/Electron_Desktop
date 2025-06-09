"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2589], {
        32589: (e, t, l) => {
            l.d(t, {
                N7: () => y,
                zx: () => u,
                ji: () => m,
                zH: () => k,
                j9: () => h,
                f: () => v,
                f4: () => b,
                Um: () => w,
                mg: () => E,
                aW: () => g,
                ek: () => x,
                eo: () => p,
                nv: () => s,
                tC: () => f
            });
            var n = l(67294),
                a = l(99477),
                o = l(55651),
                r = l(25108);

            function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var l = arguments[t];
                        for (var n in l) Object.prototype.hasOwnProperty.call(l, n) && (e[n] = l[n])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            const c = e => n.createElement("div", {
                    style: {
                        display: "flex",
                        alignItems: "flex-start",
                        margin: "1.5% 0.5%"
                    }
                }, e.hideTitle ? null : n.createElement("div", {
                    title: e.tooltip,
                    style: {
                        width: "37%",
                        flex: "0 0 auto",
                        opacity: .75,
                        fontSize: 13,
                        padding: "2px 0px 0px 22px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis"
                    }
                }, e.name), n.createElement("div", {
                    style: {
                        flex: "1 1 1px",
                        display: "flex",
                        minHeight: 20,
                        overflow: "hidden",
                        margin: "0px 20px 0px 0px"
                    }
                }, e.children)),
                d = e => n.createElement(c, {
                    name: e.name,
                    tooltip: e.tooltip,
                    hideTitle: e.hideTitle
                }, n.createElement("div", {
                    style: {
                        flex: "1 1 1px",
                        display: "flex",
                        alignItems: "center",
                        minHeight: 26,
                        margin: 0,
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        borderRadius: 5,
                        overflow: "hidden",
                        boxSizing: "border-box",
                        cursor: e.onClick ? "pointer" : "default"
                    },
                    onClick: e.onClick
                }, n.createElement("div", {
                    style: {
                        flex: "0 0 auto",
                        width: 24,
                        alignSelf: "stretch",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backgroundPosition: "center",
                        backgroundSize: "14px 14px",
                        backgroundRepeat: "no-repeat",
                        backgroundImage: "url(" + e.icon + ")",
                        opacity: .5
                    }
                }), e.children)),
                s = e => !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(d, {
                    name: e.name,
                    tooltip: e.tooltip,
                    icon: e.fieldIcon || l(37877)
                }, n.createElement("input", {
                    style: {
                        flex: "1 1 1px",
                        width: 1,
                        color: e.disabled ? "rgba(255, 255, 255, 0.75)" : "white",
                        background: "none",
                        border: "none",
                        outline: "none",
                        padding: "5px 8px",
                        fontSize: 12
                    },
                    value: e.value,
                    autoComplete: "off",
                    onChange: t => function(t) {
                        let l = t.currentTarget.value;
                        "number" === e.type && (l = parseFloat(l) || 0), e.onChange && "function" == typeof e.onChange && e.onChange({
                            target: {
                                value: l
                            },
                            currentTarget: {
                                value: l
                            }
                        })
                    }(t),
                    disabled: e.disabled,
                    placeholder: e.placeholder,
                    type: "number" == e.type ? "number" : "text"
                })),
                p = e => !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(d, {
                    name: e.name,
                    tooltip: e.tooltip,
                    icon: e.fieldIcon || l(37877)
                }, n.createElement("textarea", {
                    style: {
                        flex: "1 1 1px",
                        width: 1,
                        color: e.disabled ? "rgba(255, 255, 255, 0.75)" : "white",
                        background: "none",
                        border: "none",
                        outline: "none",
                        padding: "5px 8px",
                        fontSize: 12
                    },
                    value: e.value,
                    autoComplete: "off",
                    onChange: t => function(t) {
                        let l = t.currentTarget.value;
                        "number" === e.type && (l = parseFloat(l) || 0), e.onChange && "function" == typeof e.onChange && e.onChange({
                            target: {
                                value: l
                            },
                            currentTarget: {
                                value: l
                            }
                        })
                    }(t),
                    disabled: e.disabled,
                    placeholder: e.placeholder,
                    type: "number" == e.type ? "number" : "text"
                })),
                u = e => n.createElement("div", {
                    style: {
                        display: "flex",
                        margin: "10px 20px",
                        padding: 10,
                        color: "white",
                        backgroundColor: e.style?.backgroundColor ? e.style.backgroundColor : "rgba(255, 255, 255, 0.1)",
                        cursor: "pointer",
                        borderRadius: 5,
                        fontSize: 13,
                        flex: "1 1 1px",
                        justifyContent: "center",
                        alignItems: "center"
                    },
                    onClick: e.onClick
                }, e.icon ? n.createElement("img", {
                    draggable: "false",
                    src: e.icon,
                    style: {
                        width: 16,
                        height: 16,
                        marginRight: 10
                    }
                }) : null, e.title),
                g = e => n.createElement("div", {
                    style: {
                        display: "flex",
                        margin: "10px 20px",
                        gap: 10
                    }
                }, e.children),
                x = e => n.createElement("div", {
                    style: {
                        margin: 0,
                        textAlign: "center",
                        padding: 10,
                        color: "white",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        cursor: "pointer",
                        borderRadius: 5,
                        fontSize: 13,
                        flex: "1 1 1px",
                        opacity: e.disabled ? .5 : 1
                    },
                    onClick: e.disabled ? null : e.onClick
                }, e.title),
                m = e => !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(c, {
                    name: e.name,
                    tooltip: e.tooltip
                }, n.createElement("div", {
                    style: {
                        flex: "0 0 auto",
                        width: 1,
                        margin: "0px 10px 0px 0px",
                        color: "white",
                        borderRadius: 5,
                        width: 25,
                        height: 25,
                        cursor: "pointer",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        backgroundSize: "14px 14px",
                        backgroundImage: e.value ? `url(${l(50110)})` : `url(${l(57233)})`,
                        border: "1px solid rgba(255, 255, 255, 0.025)",
                        boxSizing: "border-box"
                    },
                    onClick: () => e.onChange(!e.value)
                }), n.createElement("div", {
                    style: {
                        flex: "1 1 1px"
                    }
                })),
                h = e => {
                    let t = e.value;
                    try {
                        if (t) {
                            let l = new URL(t, location.href);
                            t = l.pathname.split("/").pop() || l.hostname || e.value
                        }
                    } catch (e) {}
                    const a = async t => {
                        if (e.disabled) return;
                        let l = "";
                        try {
                            let t = (await C())[0];
                            if (!t) return;
                            let n = e.toastText || "Uploading $FILENAME...";
                            n = n.replaceAll("$FILENAME", t.name), l = metapress.menubar.toasts.show({
                                sticky: !0,
                                text: n
                            }), await e.onSelect(t)
                        } catch (e) {
                            r.warn(`[MetaPress] Unable to process file: ${e.message}`), metapress.menubar.toasts.show({
                                text: `Failed: ${e.message}`
                            })
                        }
                        metapress.menubar.toasts.close(l)
                    };
                    if (!1 === e.visible) return n.createElement(n.Fragment, null);
                    const o = e.value && e.onClear && "function" == typeof e.onClear;
                    return n.createElement(d, {
                        name: e.name,
                        tooltip: e.tooltip,
                        icon: e.fieldIcon || l(21434),
                        onClick: o ? null : a
                    }, n.createElement("div", {
                        onClick: o ? a : null,
                        style: {
                            flex: "1 1 1px",
                            margin: "0px 8px",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                            fontSize: 12,
                            cursor: o ? "pointer" : null
                        }
                    }, t), o ? n.createElement("div", {
                        title: "Remove",
                        onClick: e.onClear,
                        style: {
                            display: "flex",
                            flexShrink: 0,
                            width: 14,
                            height: 14,
                            marginRight: 7,
                            cursor: "pointer"
                        }
                    }, n.createElement("img", {
                        src: l(42728),
                        style: {
                            width: "100%",
                            height: "100%"
                        }
                    })) : null)
                },
                f = e => {
                    let t = (0).toFixed(3),
                        a = parseFloat(e.default) || 0;
                    const o = e => (parseFloat(e) || a).toFixed(3);
                    let [r, i] = n.useState(!1), [c, s] = n.useState(o(e.value?.x)), [p, u] = n.useState(o(e.value?.y)), [g, x] = n.useState(o(e.value?.z)), m = c === t && p === t && g === t;
                    n.useEffect((() => {
                        r ? i(!1) : (s(o(e.value.x)), u(o(e.value.y)), x(o(e.value.z)), m = c === t && p === t && g === t)
                    }), [e.value.x, e.value.y, e.value.z]);
                    const h = (t, l, n) => {
                            e.onChange?.({
                                x: t,
                                y: l,
                                z: n
                            }), i(!0)
                        },
                        f = () => {
                            let t = (parseFloat(e.value.x) || a).toFixed(3),
                                l = (parseFloat(e.value.y) || a).toFixed(3),
                                n = (parseFloat(e.value.z) || a).toFixed(3);
                            e.onChange?.({
                                x: parseFloat(t),
                                y: parseFloat(l),
                                z: parseFloat(n)
                            }), s(t), u(l), x(n)
                        },
                        b = e => {
                            "Enter" === e.key && e.currentTarget.blur()
                        };
                    return !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(d, {
                        name: e.name,
                        tooltip: e.tooltip,
                        icon: e.fieldIcon || l(31423)
                    }, n.createElement("input", {
                        style: {
                            flex: "1 1 1px",
                            width: 1,
                            background: "none",
                            border: "none",
                            outline: "none",
                            padding: "5px 5px",
                            fontSize: 12,
                            color: "white",
                            textAlign: "center"
                        },
                        placeholder: "X",
                        value: m ? "" : c,
                        onChange: t => {
                            h(parseFloat(t.currentTarget.value) || a, e.value?.y, e.value?.z), s(t.currentTarget.value)
                        },
                        onBlur: f,
                        onKeyDown: b,
                        disabled: e.disabled
                    }), n.createElement("div", {
                        style: {
                            width: 1,
                            height: 16,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            flex: "0 0 auto"
                        }
                    }), n.createElement("input", {
                        style: {
                            flex: "1 1 1px",
                            width: 1,
                            background: "none",
                            border: "none",
                            outline: "none",
                            padding: "5px 5px",
                            fontSize: 12,
                            color: "white",
                            textAlign: "center"
                        },
                        placeholder: "Y",
                        value: m ? "" : p,
                        onChange: t => {
                            h(e.value?.x, parseFloat(t.currentTarget.value) || a, e.value?.z), u(t.currentTarget.value)
                        },
                        onBlur: f,
                        onKeyDown: b,
                        disabled: e.disabled
                    }), n.createElement("div", {
                        style: {
                            width: 1,
                            height: 16,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            flex: "0 0 auto"
                        }
                    }), n.createElement("input", {
                        style: {
                            flex: "1 1 1px",
                            width: 1,
                            background: "none",
                            border: "none",
                            outline: "none",
                            padding: "5px 5px",
                            fontSize: 12,
                            color: "white",
                            textAlign: "center"
                        },
                        placeholder: "Z",
                        value: m ? "" : g,
                        onChange: t => {
                            h(e.value?.x, e.value?.y, parseFloat(t.currentTarget.value) || a), x(t.currentTarget.value)
                        },
                        onBlur: f,
                        onKeyDown: b,
                        disabled: e.disabled
                    }))
                },
                b = e => n.createElement(f, i({
                    default: 1,
                    fieldIcon: l(37099)
                }, e)),
                v = e => {
                    let t = parseFloat(e.value?.x) || 0,
                        o = parseFloat(e.value?.y) || 0,
                        r = parseFloat(e.value?.z) || 0,
                        i = parseFloat(e.value?.w) || 0;
                    t || o || r || i || (i = 1);
                    let c = new a.Quaternion(t, o, r, i),
                        s = (new a.Euler).setFromQuaternion(c),
                        p = (0).toFixed(0),
                        [u, g] = n.useState((s.x * (180 / Math.PI)).toFixed(0)),
                        [x, m] = n.useState((s.y * (180 / Math.PI)).toFixed(0)),
                        [h, f] = n.useState((s.z * (180 / Math.PI)).toFixed(0)),
                        b = u === p && x === p && h === p;
                    n.useEffect((() => {
                        t = parseFloat(e.value?.x) || 0, o = parseFloat(e.value?.y) || 0, r = parseFloat(e.value?.z) || 0, i = parseFloat(e.value?.w) || 0, t || o || r || i || (i = 1), c = new a.Quaternion(t, o, r, i), s = (new a.Euler).setFromQuaternion(c), g((s.x * (180 / Math.PI)).toFixed(0)), m((s.y * (180 / Math.PI)).toFixed(0)), f((s.z * (180 / Math.PI)).toFixed(0)), b = u === p && x === p && h === p
                    }), [e.value.x, e.value.y, e.value.z, e.value.w]);
                    const v = (t, l, n) => {
                        let a = (parseFloat(t) || 0) * (Math.PI / 180),
                            o = (parseFloat(l) || 0) * (Math.PI / 180),
                            r = (parseFloat(n) || 0) * (Math.PI / 180);
                        s.set(a, o, r), c.setFromEuler(s), e.onChange?.(c)
                    };
                    return !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(d, {
                        name: e.name,
                        tooltip: e.tooltip,
                        icon: e.fieldIcon || l(79143)
                    }, n.createElement("input", {
                        style: {
                            flex: "1 1 1px",
                            width: 1,
                            background: "none",
                            border: "none",
                            outline: "none",
                            padding: "5px 5px",
                            fontSize: 12,
                            color: "white",
                            textAlign: "center"
                        },
                        placeholder: "X",
                        value: b ? "" : u,
                        onChange: t => {
                            if (e.disabled) return;
                            let l = t.currentTarget.value;
                            v(l, x, h), g(l)
                        },
                        disabled: e.disabled
                    }), n.createElement("div", {
                        style: {
                            width: 1,
                            height: 16,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            flex: "0 0 auto"
                        }
                    }), n.createElement("input", {
                        style: {
                            flex: "1 1 1px",
                            width: 1,
                            background: "none",
                            border: "none",
                            outline: "none",
                            padding: "5px 5px",
                            fontSize: 12,
                            color: "white",
                            textAlign: "center"
                        },
                        placeholder: "Y",
                        value: b ? "" : x,
                        onChange: t => {
                            if (e.disabled) return;
                            let l = t.currentTarget.value;
                            v(u, l, h), m(l)
                        },
                        disabled: e.disabled
                    }), n.createElement("div", {
                        style: {
                            width: 1,
                            height: 16,
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            flex: "0 0 auto"
                        }
                    }), n.createElement("input", {
                        style: {
                            flex: "1 1 1px",
                            width: 1,
                            background: "none",
                            border: "none",
                            outline: "none",
                            padding: "5px 5px",
                            fontSize: 12,
                            color: "white",
                            textAlign: "center"
                        },
                        placeholder: "Z",
                        value: b ? "" : h,
                        onChange: t => {
                            if (e.disabled) return;
                            let l = t.currentTarget.value;
                            v(u, x, l), f(l)
                        },
                        disabled: e.disabled
                    }))
                },
                y = e => !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(d, {
                    name: e.name,
                    tooltip: e.tooltip,
                    icon: e.fieldIcon || l(88761),
                    onClick: e.onClick
                }, n.createElement("div", {
                    className: "fake-input",
                    style: {
                        flex: "1 1 1px",
                        margin: "0px 8px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: 12
                    }
                }, e.value)),
                E = e => !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(d, {
                    name: e.name,
                    tooltip: e.tooltip,
                    icon: e.fieldIcon || l(96454)
                }, n.createElement("select", {
                    style: {
                        flex: "1 1 1px",
                        margin: "0 6px 0 4px",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        fontSize: 12,
                        color: "white",
                        border: "none",
                        background: "none",
                        outline: "none",
                        padding: 0,
                        lineHeight: "12px"
                    },
                    onChange: e.onChange,
                    value: e.value
                }, e.values?.map(((t, l) => n.createElement("option", {
                    style: {
                        color: "black"
                    },
                    key: t + l,
                    value: t
                }, e.labels?.[l] || t))))),
                w = e => {
                    const [t, a] = (0, n.useState)("");
                    return ((l, a, o) => {
                        let r = (0, n.useRef)(null);
                        (0, n.useEffect)((() => {
                            r.current && clearTimeout(r.current), r.current = setTimeout((() => {
                                e.onSearch?.(t)
                            }), 500)
                        }), o)
                    })(0, 0, [t]), n.createElement("div", {
                        style: Object.assign({
                            margin: "10px 20px",
                            textAlign: "center",
                            padding: 0,
                            color: "white",
                            backgroundColor: "rgba(255, 255, 255, 0.1)",
                            borderRadius: 5,
                            fontSize: 13,
                            flex: "1 1 1px",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }, e.style)
                    }, n.createElement("img", {
                        draggable: "false",
                        src: l(54351),
                        style: {
                            width: 18,
                            margin: "0px 10px",
                            opacity: .3
                        }
                    }), n.createElement("input", {
                        style: {
                            border: "none",
                            background: "none",
                            outline: "none",
                            color: "white",
                            fontSize: 13,
                            flex: "1 1 1px",
                            padding: "10px 0px"
                        },
                        placeholder: "Pesquisar...",
                        value: t,
                        autoComplete: "off",
                        autoCorrect: "off",
                        onChange: e => a(e.currentTarget.value)
                    }), e.allowClear && t ? n.createElement("img", {
                        draggable: "false",
                        src: l(42728),
                        style: {
                            width: 18,
                            margin: "0px 10px",
                            opacity: .3,
                            cursor: "pointer"
                        },
                        onClick: () => a("")
                    }) : null)
                },
                C = () => new Promise((e => {
                    const t = (() => {
                        const e = document.createElement("input");
                        return e.type = "file", e
                    })();
                    t.addEventListener("change", (() => e(t.files || null))), setTimeout((() => {
                        const e = new MouseEvent("click");
                        t.dispatchEvent(e)
                    }), 0)
                })),
                k = e => {
                    let [t, l] = (0, n.useState)(!1);
                    const r = e.value?.startsWith?.("#") ? e.value : "#" + new a.Color(e.value).getHexString();
                    return n.createElement(c, {
                        name: e.name,
                        tooltip: e.tooltip
                    }, n.createElement("div", {
                        style: {
                            display: "flex",
                            position: "absolute",
                            paddingTop: 4,
                            height: 18
                        }
                    }, n.createElement("div", {
                        onClick: () => {
                            l(!t)
                        },
                        style: {
                            display: "inline-block",
                            backgroundColor: "#2e2e2e",
                            borderRadius: 6,
                            cursor: "pointer"
                        }
                    }, n.createElement("div", {
                        style: {
                            width: 36,
                            height: 16,
                            backgroundColor: r,
                            borderRadius: 4
                        }
                    })), t ? n.createElement(n.Fragment, null, n.createElement("div", {
                        style: {
                            position: "absolute",
                            paddingTop: 20,
                            borderRadius: 8,
                            zIndex: 2
                        }
                    }, n.createElement("div", {
                        onClick: e => {
                            var t;
                            "hex-color-picker" !== (t = e).target.id && "hex-color-input" !== t.target.id && l(!1)
                        },
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }
                    }), n.createElement(o.gW, {
                        id: "hex-color-picker",
                        color: r,
                        onChange: e.onChange,
                        style: {
                            width: 170,
                            height: 160
                        }
                    }), n.createElement("div", {
                        id: "hex-color-input",
                        style: {
                            display: "flex",
                            position: "relative",
                            width: 170,
                            height: 40,
                            backgroundColor: "#2e2e2e",
                            borderRadius: "0 0 8px 8px",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }, n.createElement(o.ZE, {
                        color: r,
                        prefixed: !0,
                        onChange: e.onChange,
                        style: {
                            fontSize: 13,
                            color: "#FFFFFF",
                            padding: "3px 0",
                            backgroundColor: "transparent",
                            width: 80,
                            border: "none",
                            outline: "none",
                            textAlign: "center",
                            zIndex: 12
                        }
                    })))) : null))
                }
        },
        42728: (e, t, l) => {
            e.exports = l.p + "mp-core/close.9b4e57a8512d18bd5a68.svg"
        },
        88761: (e, t, l) => {
            e.exports = l.p + "mp-core/field-action.02fae8a3a5e804b4910a.svg"
        },
        21434: (e, t, l) => {
            e.exports = l.p + "mp-core/field-file.459ee024840dcc9ca95f.svg"
        },
        79143: (e, t, l) => {
            e.exports = l.p + "mp-core/field-quaternion.3689f33eb816749b54e5.svg"
        },
        37099: (e, t, l) => {
            e.exports = l.p + "mp-core/field-scale.5dbdde69061f7df0c33c.svg"
        },
        96454: (e, t, l) => {
            e.exports = l.p + "mp-core/field-select.f7d07d7e71c99a51f176.svg"
        },
        37877: (e, t, l) => {
            e.exports = l.p + "mp-core/field-text.fe2b157e51bd13e0f2f4.svg"
        },
        31423: (e, t, l) => {
            e.exports = l.p + "mp-core/field-vector3.b5753cf96b5c5d384c8d.svg"
        },
        50110: (e, t, l) => {
            e.exports = l.p + "mp-core/icon-checked.c2c8a3ee43149d3f5549.svg"
        },
        54351: (e, t, l) => {
            e.exports = l.p + "mp-core/icon-search.c1a02236f95e4bc7f82b.svg"
        },
        57233: (e, t, l) => {
            e.exports = l.p + "mp-core/icon-unchecked.89eb9ec1abf5c71dacb9.svg"
        }
    }
]);