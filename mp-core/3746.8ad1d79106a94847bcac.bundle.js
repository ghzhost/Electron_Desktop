/*! For license information please see 3746.8ad1d79106a94847bcac.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [3746], {
        40001: (e, t, n) => {
            n.d(t, {
                Lm: () => i,
                U8: () => a,
                lk: () => o,
                sN: () => s
            });
            var r = n(67294);
            const o = e => r.createElement(r.Fragment, null, r.createElement("div", {
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
                }, r.createElement("div", {
                    style: {
                        fontSize: 15,
                        margin: "0px 20px",
                        flex: "1 1 1px"
                    }
                }, e.title), null != e.onClose ? r.createElement("img", {
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
                }) : null), r.createElement("div", {
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
                i = e => {
                    let [t, o] = r.useState(!!e.openByDefault);
                    return !1 === e.visible ? r.createElement(r.Fragment, null) : r.createElement(r.Fragment, null, r.createElement("div", {
                        style: Object.assign({
                            display: "flex",
                            margin: "20px 10px 10px 10px",
                            fontSize: 15,
                            cursor: "pointer",
                            alignItems: "center"
                        }, e.style),
                        onClick: e => o(!t)
                    }, r.createElement("img", {
                        draggable: "false",
                        src: n(t ? 40313 : 65141),
                        style: {
                            width: 8,
                            height: 8,
                            margin: "0px 6px"
                        }
                    }), r.createElement("div", {
                        style: {
                            flex: "1 1 auto"
                        }
                    }, e.title), e.onRemove ? r.createElement("img", {
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
                s = e => {
                    let [t, o] = r.useState(!1);
                    return r.createElement("div", {
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
                        onPointerEnter: e => o(!0),
                        onPointerLeave: e => o(!1),
                        onClick: e.disabled ? null : e.onClick
                    }, e.disabled ? r.createElement("div", {
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
                    }) : r.createElement("img", {
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
                    }), r.createElement("div", {
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
                a = e => r.createElement("div", {
                    style: {
                        margin: "10px 20px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: 5,
                        display: "flex"
                    }
                }, r.createElement("img", {
                    src: n(83203),
                    style: {
                        width: 16,
                        margin: "0px 20px",
                        flex: "0 0 auto",
                        opacity: .5
                    }
                }), r.createElement("div", {
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
        46839: (e, t, n) => {
            n.d(t, {
                Z: () => r
            });
            const r = {
                appVersion: n(4147).i8,
                colors: {
                    darkGrey: "#272727",
                    black: "#1a1a1a"
                }
            }
        },
        63746: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => s
            });
            var r = n(67294),
                o = n(40001),
                i = n(66729);
            class s {
                id = "core.ui.action";
                name = "Action Panel";
                description = "This displays an action menu containing different actions that a user can execute";
                version = "1.0.0";
                requires = ["menubar", "entities"];
                provides = [];
                items = [];
                tooltip = null;
                menuIndex = null;
                onLoad() {
                    this.tooltip = new i.u
                }
                $loader_onEnterWorld() {
                    if (this.items = metapress.entities.all.filter((e => "avatar.action.item" === e.type)), 0 === this.items.length) return;
                    metapress.entities.add({
                        id: "core.ui.action.menu",
                        type: "menubar.item",
                        name: "Actions",
                        icon: n(92698),
                        onClick: () => this.toggleMenu()
                    });
                    const e = metapress.entities.all.filter((e => "menubar.item" == e.type));
                    e.sort(((e, t) => (e.order || 0) - (t.order || 0))), this.menuIndex = e.findIndex((e => "core.ui.action.menu" === e.id)) + 1
                }
                toggleMenu() {
                    return "core.ui.action.menu" == metapress.menubar.openPanelID ? metapress.menubar.closePanel() : metapress.menubar.openReactPanel("core.ui.action.menu", (() => r.createElement(a, {
                        plugin: this
                    })))
                }
            }
            class a extends r.Component {
                state = {
                    showShortcut: !1
                };
                _keyCache = {};
                componentDidMount() {
                    window.addEventListener("keyup", this.onKeyUp), window.addEventListener("keydown", this.onKeyDown)
                }
                componentWillUnmount() {
                    window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("keydown", this.onKeyDown)
                }
                onKeyDown = e => {
                    (e.ctrlKey || e.metaKey || "Control" === e.key || "Meta" === e.key) && this.setState({
                        showShortcut: !0
                    }), (e.code?.startsWith?.("Digit") ? parseInt(e.code.slice(5)) : null) === this.props.plugin.menuIndex && document.addEventListener("keydown", (t => {
                        const n = t.code?.startsWith?.("Digit") ? parseInt(t.code.slice(5)) : null;
                        null != n && n <= this.props.plugin.items.length && (this._keyCache[e.code + t.code] = !0, this.onSelectAction(this.props.plugin.items[n - 1]))
                    }))
                };
                onKeyUp = e => {
                    if ("Control" !== e.key && "Meta" !== e.key) {
                        if (e.code && e.code.startsWith("Digit")) {
                            const t = "Digit" + this.props.plugin.menuIndex + e.code;
                            this._keyCache[t] = !1
                        }
                    } else this.setState({
                        showShortcut: !1
                    })
                };
                onSelectAction(e) {
                    e.onClick(), this.props.plugin.tooltip.hide(), metapress.menubar.closePanel()
                }
                render() {
                    return r.createElement(o.lk, {
                        title: "Actions",
                        onClose: () => metapress.menubar.closePanel()
                    }, r.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "14px 8px",
                            flexWrap: "wrap",
                            marginTop: 14,
                            alignItems: "center",
                            justifyContent: "space-evenly"
                        }
                    }, this.props.plugin.items.map(((e, t) => r.createElement(l, {
                        key: e.id,
                        index: t,
                        action: e,
                        showShortcut: this.state.showShortcut,
                        onClick: t => this.onSelectAction(e),
                        tooltip: this.props.plugin.tooltip
                    })))))
                }
            }
            const l = e => {
                let [t, n] = r.useState(!1);
                const o = e.action.name || "none",
                    i = e.action.icon;
                return r.createElement("div", {
                    onMouseEnter: t => (t => {
                        n(!0);
                        let r = t.target.getBoundingClientRect(),
                            i = metapress.contentDiv.getBoundingClientRect(),
                            s = r.x + r.width - i.x,
                            a = r.y + r.height / 2 - i.y;
                        e.tooltip.show(s, a, o)
                    })(t),
                    onMouseLeave: t => (n(!1), void e.tooltip.hide()),
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
                }, e.showShortcut ? r.createElement("div", {
                    style: {
                        display: "flex",
                        position: "absolute",
                        right: 3,
                        fontSize: 11,
                        fontFamily: "monospace",
                        color: "#9e9e9e",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, e.index + 1) : null, r.createElement("div", {
                    style: {
                        display: "flex",
                        width: 70,
                        height: 70,
                        backgroundColor: t ? "rgba(102,102,102,0.8)" : "rgba(102,102,102,0.5)",
                        borderRadius: "6px",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, r.createElement("img", {
                    draggable: "false",
                    src: i,
                    style: {
                        width: "60%",
                        height: "60%"
                    }
                })))
            }
        },
        66729: (e, t, n) => {
            n.d(t, {
                u: () => o
            });
            var r = n(46839);
            class o {
                constructor() {
                    this.div = document.createElement("div"), this.div.id = "metapress-menubar-tooltip-container", this.div.style.cssText = "position: absolute; top: 100px; left: 100px; display: none; z-index: 100; ", metapress.contentDiv.appendChild(this.div), this._x = 100, this._y = 100, this.div.innerHTML = `\n        \n            \x3c!-- Background + text --\x3e\n            <div id='metapress-menubar-tooltip-text' style="background-color: ${r.Z.colors.darkGrey}; border-radius: 10px; display: flex; align-items: center; height: 44px; padding: 0px 20px; color: white; font-size: 13px; box-sizing: border-box; box-shadow: 0 0.4rem 0 0 ${r.Z.colors.black}, 0 0 10px 0px rgba(0, 0, 0, 0.6); ">\n                My text here\n            </div>\n\n            \x3c!-- Chevron --\x3e\n            <div id='metapress-menubar-tooltip-chevron' style="display: none; position: absolute; top: 10px; left: 0px; width: 10px; height: 10px; overflow: hidden; ">\n                <div style="position: absolute; top: 0px; left: 0px; width: 10px; height: 10px; background-color: rgba(0, 0, 0, 0.8); transform: rotate(45deg); "></div>\n            </div>\n        \n        `
                }
                get x() {
                    return this._x
                }
                get y() {
                    return this._y
                }
                show(e, t, n) {
                    this._x = e, this._y = t, this.div.style.cssText += `display: block; left: ${this.x+10}px; top: ${this.y-22}px; `, this.div.querySelector("#metapress-menubar-tooltip-text").innerText = n
                }
                hide() {
                    this.div.style.cssText += "display: none; "
                }
            }
        },
        72408: (e, t) => {
            var n = Symbol.for("react.element"),
                r = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                i = Symbol.for("react.strict_mode"),
                s = Symbol.for("react.profiler"),
                a = Symbol.for("react.provider"),
                l = Symbol.for("react.context"),
                c = Symbol.for("react.forward_ref"),
                u = Symbol.for("react.suspense"),
                p = Symbol.for("react.memo"),
                d = Symbol.for("react.lazy"),
                f = Symbol.iterator,
                m = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                h = Object.assign,
                y = {};

            function g(e, t, n) {
                this.props = e, this.context = t, this.refs = y, this.updater = n || m
            }

            function x() {}

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = y, this.updater = n || m
            }
            g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, g.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, x.prototype = g.prototype;
            var v = b.prototype = new x;
            v.constructor = b, h(v, g.prototype), v.isPureReactComponent = !0;
            var k = Array.isArray,
                w = Object.prototype.hasOwnProperty,
                E = {
                    current: null
                },
                _ = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function S(e, t, r) {
                var o, i = {},
                    s = null,
                    a = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) w.call(t, o) && !_.hasOwnProperty(o) && (i[o] = t[o]);
                var l = arguments.length - 2;
                if (1 === l) i.children = r;
                else if (1 < l) {
                    for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
                    i.children = c
                }
                if (e && e.defaultProps)
                    for (o in l = e.defaultProps) void 0 === i[o] && (i[o] = l[o]);
                return {
                    $$typeof: n,
                    type: e,
                    key: s,
                    ref: a,
                    props: i,
                    _owner: E.current
                }
            }

            function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }
            var R = /\/+/g;

            function $(e, t) {
                return "object" == typeof e && null !== e && null != e.key ? function(e) {
                    var t = {
                        "=": "=0",
                        ":": "=2"
                    };
                    return "$" + e.replace(/[=:]/g, (function(e) {
                        return t[e]
                    }))
                }("" + e.key) : t.toString(36)
            }

            function I(e, t, o, i, s) {
                var a = typeof e;
                "undefined" !== a && "boolean" !== a || (e = null);
                var l = !1;
                if (null === e) l = !0;
                else switch (a) {
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                l = !0
                        }
                }
                if (l) return s = s(l = e), e = "" === i ? "." + $(l, 0) : i, k(s) ? (o = "", null != e && (o = e.replace(R, "$&/") + "/"), I(s, t, o, "", (function(e) {
                    return e
                }))) : null != s && (C(s) && (s = function(e, t) {
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(s, o + (!s.key || l && l.key === s.key ? "" : ("" + s.key).replace(R, "$&/") + "/") + e)), t.push(s)), 1;
                if (l = 0, i = "" === i ? "." : i + ":", k(e))
                    for (var c = 0; c < e.length; c++) {
                        var u = i + $(a = e[c], c);
                        l += I(a, t, o, u, s)
                    } else if (u = function(e) {
                            return null === e || "object" != typeof e ? null : "function" == typeof(e = f && e[f] || e["@@iterator"]) ? e : null
                        }(e), "function" == typeof u)
                        for (e = u.call(e), c = 0; !(a = e.next()).done;) l += I(a = a.value, t, o, u = i + $(a, c++), s);
                    else if ("object" === a) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }

            function P(e, t, n) {
                if (null == e) return e;
                var r = [],
                    o = 0;
                return I(e, r, "", "", (function(e) {
                    return t.call(n, e, o++)
                })), r
            }

            function j(e) {
                if (-1 === e._status) {
                    var t = e._result;
                    (t = t()).then((function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 1, e._result = t)
                    }), (function(t) {
                        0 !== e._status && -1 !== e._status || (e._status = 2, e._result = t)
                    })), -1 === e._status && (e._status = 0, e._result = t)
                }
                if (1 === e._status) return e._result.default;
                throw e._result
            }
            var D = {
                    current: null
                },
                M = {
                    transition: null
                },
                O = {
                    ReactCurrentDispatcher: D,
                    ReactCurrentBatchConfig: M,
                    ReactCurrentOwner: E
                };
            t.Children = {
                map: P,
                forEach: function(e, t, n) {
                    P(e, (function() {
                        t.apply(this, arguments)
                    }), n)
                },
                count: function(e) {
                    var t = 0;
                    return P(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return P(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = g, t.Fragment = o, t.Profiler = s, t.PureComponent = b, t.StrictMode = i, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = O, t.cloneElement = function(e, t, r) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = h({}, e.props),
                    i = e.key,
                    s = e.ref,
                    a = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (s = t.ref, a = E.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                    for (c in t) w.call(t, c) && !_.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== l ? l[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c) o.children = r;
                else if (1 < c) {
                    l = Array(c);
                    for (var u = 0; u < c; u++) l[u] = arguments[u + 2];
                    o.children = l
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: i,
                    ref: s,
                    props: o,
                    _owner: a
                }
            }, t.createContext = function(e) {
                return (e = {
                    $$typeof: l,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: a,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = S, t.createFactory = function(e) {
                var t = S.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: c,
                    render: e
                }
            }, t.isValidElement = C, t.lazy = function(e) {
                return {
                    $$typeof: d,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: j
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: p,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = M.transition;
                M.transition = {};
                try {
                    e()
                } finally {
                    M.transition = t
                }
            }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function(e, t) {
                return D.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return D.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return D.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return D.current.useEffect(e, t)
            }, t.useId = function() {
                return D.current.useId()
            }, t.useImperativeHandle = function(e, t, n) {
                return D.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function(e, t) {
                return D.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return D.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return D.current.useMemo(e, t)
            }, t.useReducer = function(e, t, n) {
                return D.current.useReducer(e, t, n)
            }, t.useRef = function(e) {
                return D.current.useRef(e)
            }, t.useState = function(e) {
                return D.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, n) {
                return D.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function() {
                return D.current.useTransition()
            }, t.version = "18.2.0"
        },
        67294: (e, t, n) => {
            e.exports = n(72408)
        },
        40313: (e, t, n) => {
            e.exports = n.p + "mp-core/chevron-down.cc1880a489f70d445894.svg"
        },
        65141: (e, t, n) => {
            e.exports = n.p + "mp-core/chevron-right.4d67e59ffa9deea58f42.svg"
        },
        42728: (e, t, n) => {
            e.exports = n.p + "mp-core/close.9b4e57a8512d18bd5a68.svg"
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
        92698: (e, t, n) => {
            e.exports = n.p + "mp-core/action-icon.113c08f6bce5443b1030.png"
        },
        4147: e => {
            e.exports = {
                i8: "VerseWeb 1.0 BETA"
            }
        }
    }
]);