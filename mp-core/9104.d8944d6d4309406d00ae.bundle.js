/*! For license information please see 9104.d8944d6d4309406d00ae.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [9104], {
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
        89104: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => a
            });
            var r = n(67294),
                o = n(20745),
                i = n(46839);
            class a {
                id = "core.navigation";
                name = "Navigation";
                description = "Displays an overlay showing the navigation and shortcut keys .";
                version = "1.0.0";
                requires = ["renderer", "menubar"];
                provides = ["navigation"];
                root = null;
                div = null;
                isShowing = !1;
                started = !1;
                _holdTimer = null;
                onLoad() {
                    window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.cancel), window.addEventListener("mousedown", this.cancel), window.addEventListener("blur", this.cancel), document.addEventListener("visibilitychange", this.cancel), document.addEventListener("pointerlockchange", this.cancel), this.div = document.createElement("div"), this.div.setAttribute("id", "metapress-navigation-menu"), this.div.style.cssText = "display: none; position: fixed; top: 0; left: 0; width: 100%; height: 100%; backdrop-filter: blur(3px); -webkit-backdrop-filter: blur(3px); justify-content: center; align-items: center; pointer-events: auto; z-index: 9999999;", this.div.addEventListener("click", this.cancel), this.createMenu(), metapress.contentDiv.appendChild(this.div)
                }
                onUnload() {
                    window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.cancel), window.removeEventListener("mousedown", this.cancel), window.removeEventListener("blur", this.cancel), document.removeEventListener("visibilitychange", this.cancel), document.removeEventListener("pointerlockchange", this.cancel), this.cancel(), this.div = null, this.root.unmount()
                }
                createMenu() {
                    this.root || (this.root = o.createRoot(this.div), this.root.render(r.createElement(l, null)))
                }
                showUI() {
                    this.div && !this.isShowing && (this.isShowing = !0, this.div.style.display = "flex")
                }
                hideUI() {
                    this.div && this.isShowing && (this.isShowing = !1, this.div.style.display = "none")
                }
                start() {
                    this.started || (this.started = !0, this._holdTimer = setTimeout((() => {
                        metapress.editor.currentTool ? this.cancel() : (this._holdTimer = null, this.started = !1, this.showUI())
                    }), 1200))
                }
                cancel = () => {
                    this._holdTimer && clearTimeout(this._holdTimer), this._holdTimer = null, this.started = !1, this.hideUI()
                };
                onKeyDown = e => {
                    this.div && "INPUT" !== document.activeElement.tagName && "TEXTAREA" !== document.activeElement.tagName && ("Control" === e.key || "Meta" === e.key ? this.start() : this.cancel())
                }
            }
            class l extends r.PureComponent {
                isMac = navigator.userAgent.includes("Mac");
                cmdSymbol = String.fromCharCode(8984);
                controlSymbol = String.fromCharCode(8963);
                shiftKeyText = String.fromCharCode(8593) + " Shift";
                componentDidMount() {
                    metapress.plugins.addEventListener("onAppReady", this.onAppReady)
                }
                componentWillUnmount() {
                    metapress.plugins.removeEventListener("onAppReady", this.onAppReady)
                }
                onAppReady = () => {
                    this.forceUpdate()
                };
                render() {
                    const e = (metapress.entities?.all?.filter?.((e => "menubar.item" == e.type)) || []).length;
                    return r.createElement("div", {
                        style: {
                            display: "flex",
                            width: 700,
                            maxWidth: "calc(100% - 40px)",
                            padding: "20px 25px",
                            color: "#E9E9E9",
                            fontSize: 10,
                            borderRadius: 10,
                            backgroundColor: i.Z.colors.darkGrey,
                            boxSizing: "border-box",
                            boxShadow: `0 0.4rem 0 0 ${i.Z.colors.black}, 0 0 10px 0px rgba(0, 0, 0, 0.6)`,
                            overflow: "hidden"
                        }
                    }, r.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0,
                            width: "52%"
                        }
                    }, r.createElement(s, {
                        title: "Keyboard Shortcuts"
                    }), r.createElement(u, null, r.createElement(c, {
                        text: "Move"
                    }, r.createElement(f, null)), r.createElement(c, {
                        text: "Jump"
                    }, r.createElement(d, {
                        text: "Space"
                    })), r.createElement(c, {
                        text: "Sprint"
                    }, r.createElement(d, {
                        text: this.shiftKeyText
                    }), r.createElement("div", {
                        style: {
                            fontSize: 16,
                            color: "#FFFFFF",
                            margin: "0 7px"
                        }
                    }, "+"), r.createElement(f, null)), r.createElement(c, {
                        text: "See actions"
                    }, r.createElement(d, {
                        text: this.isMac ? this.cmdSymbol + " Cmd" : "Ctrl"
                    })), r.createElement(c, {
                        text: "Perform actions"
                    }, r.createElement(d, {
                        text: "1"
                    }), r.createElement("div", {
                        style: {
                            fontSize: 16,
                            fontFamily: "monospace",
                            color: "#FFFFFF",
                            margin: "0 7px"
                        }
                    }, "-"), r.createElement(d, {
                        text: e > 0 ? e : "9"
                    })), r.createElement(c, {
                        text: "Debug menu",
                        style: {
                            gap: 3
                        }
                    }, r.createElement(d, {
                        text: this.isMac ? this.controlSymbol + " Ctrl" : "Ctrl"
                    }), r.createElement(d, {
                        text: this.shiftKeyText
                    }), r.createElement(d, {
                        text: "~"
                    })))), r.createElement("div", {
                        style: {
                            display: "flex",
                            width: "4%",
                            justifyContent: "center"
                        }
                    }, r.createElement("div", {
                        style: {
                            width: 2,
                            height: "100%",
                            backgroundColor: "#303030",
                            borderRadius: 2
                        }
                    })), r.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            flexShrink: 0,
                            width: "44%"
                        }
                    }, r.createElement(s, {
                        title: "Gestures"
                    }), r.createElement(u, {
                        style: {
                            paddingLeft: 10,
                            gap: 42
                        }
                    }, r.createElement(c, {
                        text: "Rotate"
                    }, r.createElement("img", {
                        src: n(41075),
                        style: {
                            width: 30,
                            height: 30
                        }
                    })), r.createElement(c, {
                        text: "Zoom"
                    }, r.createElement("img", {
                        src: n(80216),
                        style: {
                            width: 30,
                            height: 30
                        }
                    })), r.createElement(c, {
                        text: "Pointer lock"
                    }, r.createElement("img", {
                        src: n(34391),
                        style: {
                            width: 30,
                            height: 30
                        }
                    })), r.createElement(c, {
                        text: "Fullscreen"
                    }, r.createElement("img", {
                        src: n(35817),
                        style: {
                            width: 30,
                            height: 30
                        }
                    })))))
                }
            }
            const s = e => r.createElement("div", {
                    style: {
                        color: "#FFFFFF",
                        marginBottom: 30,
                        fontSize: 20,
                        fontWeight: 700,
                        textAlign: "center"
                    }
                }, e.title),
                c = e => r.createElement("div", {
                    style: {
                        display: "flex",
                        width: "100%",
                        padding: "0 15px",
                        boxSizing: "border-box",
                        alignItems: "center"
                    }
                }, r.createElement("div", {
                    style: {
                        width: "40%",
                        fontSize: 16,
                        color: "#E9E9E9",
                        fontWeight: 400
                    }
                }, e.text), r.createElement("div", {
                    style: Object.assign({
                        display: "flex",
                        width: "60%",
                        justifyContent: "center",
                        alignItems: "center"
                    }, e.style)
                }, e.children)),
                u = e => r.createElement("div", {
                    style: Object.assign({
                        display: "flex",
                        flexDirection: "column",
                        width: "100%",
                        gap: 30
                    }, e.style)
                }, e.children),
                d = e => r.createElement("div", {
                    style: {
                        width: "fit-content",
                        height: "fit-content",
                        color: "#E9E9E9",
                        fontSize: 11,
                        fontFamily: "monospace",
                        padding: "2px 8px",
                        borderRadius: 6,
                        border: "1px solid rgba(172, 176, 183, 0.4)",
                        boxShadow: "inset 0 -1px 0 rgba(172, 176, 183, 0.4)"
                    }
                }, e.text),
                f = e => r.createElement("div", {
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        gap: 3,
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, r.createElement("div", {
                    style: {
                        display: "flex",
                        justifyContent: "center"
                    }
                }, r.createElement(d, {
                    text: "W"
                })), r.createElement("div", {
                    style: {
                        display: "flex",
                        gap: 3,
                        justifyContent: "center"
                    }
                }, r.createElement(d, {
                    text: "A"
                }), r.createElement(d, {
                    text: "S"
                }), r.createElement(d, {
                    text: "D"
                })))
        },
        72408: (e, t) => {
            var n = Symbol.for("react.element"),
                r = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                i = Symbol.for("react.strict_mode"),
                a = Symbol.for("react.profiler"),
                l = Symbol.for("react.provider"),
                s = Symbol.for("react.context"),
                c = Symbol.for("react.forward_ref"),
                u = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"),
                f = Symbol.for("react.lazy"),
                p = Symbol.iterator,
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

            function v(e, t, n) {
                this.props = e, this.context = t, this.refs = y, this.updater = n || m
            }

            function E() {}

            function b(e, t, n) {
                this.props = e, this.context = t, this.refs = y, this.updater = n || m
            }
            v.prototype.isReactComponent = {}, v.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, v.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, E.prototype = v.prototype;
            var x = b.prototype = new E;
            x.constructor = b, h(x, v.prototype), x.isPureReactComponent = !0;
            var g = Array.isArray,
                w = Object.prototype.hasOwnProperty,
                S = {
                    current: null
                },
                _ = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function k(e, t, r) {
                var o, i = {},
                    a = null,
                    l = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (l = t.ref), void 0 !== t.key && (a = "" + t.key), t) w.call(t, o) && !_.hasOwnProperty(o) && (i[o] = t[o]);
                var s = arguments.length - 2;
                if (1 === s) i.children = r;
                else if (1 < s) {
                    for (var c = Array(s), u = 0; u < s; u++) c[u] = arguments[u + 2];
                    i.children = c
                }
                if (e && e.defaultProps)
                    for (o in s = e.defaultProps) void 0 === i[o] && (i[o] = s[o]);
                return {
                    $$typeof: n,
                    type: e,
                    key: a,
                    ref: l,
                    props: i,
                    _owner: S.current
                }
            }

            function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }
            var R = /\/+/g;

            function F(e, t) {
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

            function j(e, t, o, i, a) {
                var l = typeof e;
                "undefined" !== l && "boolean" !== l || (e = null);
                var s = !1;
                if (null === e) s = !0;
                else switch (l) {
                    case "string":
                    case "number":
                        s = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case n:
                            case r:
                                s = !0
                        }
                }
                if (s) return a = a(s = e), e = "" === i ? "." + F(s, 0) : i, g(a) ? (o = "", null != e && (o = e.replace(R, "$&/") + "/"), j(a, t, o, "", (function(e) {
                    return e
                }))) : null != a && (C(a) && (a = function(e, t) {
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(a, o + (!a.key || s && s.key === a.key ? "" : ("" + a.key).replace(R, "$&/") + "/") + e)), t.push(a)), 1;
                if (s = 0, i = "" === i ? "." : i + ":", g(e))
                    for (var c = 0; c < e.length; c++) {
                        var u = i + F(l = e[c], c);
                        s += j(l, t, o, u, a)
                    } else if (u = function(e) {
                            return null === e || "object" != typeof e ? null : "function" == typeof(e = p && e[p] || e["@@iterator"]) ? e : null
                        }(e), "function" == typeof u)
                        for (e = u.call(e), c = 0; !(l = e.next()).done;) s += j(l = l.value, t, o, u = i + F(l, c++), a);
                    else if ("object" === l) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return s
            }

            function $(e, t, n) {
                if (null == e) return e;
                var r = [],
                    o = 0;
                return j(e, r, "", "", (function(e) {
                    return t.call(n, e, o++)
                })), r
            }

            function T(e) {
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
            var L = {
                    current: null
                },
                D = {
                    transition: null
                },
                I = {
                    ReactCurrentDispatcher: L,
                    ReactCurrentBatchConfig: D,
                    ReactCurrentOwner: S
                };
            t.Children = {
                map: $,
                forEach: function(e, t, n) {
                    $(e, (function() {
                        t.apply(this, arguments)
                    }), n)
                },
                count: function(e) {
                    var t = 0;
                    return $(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return $(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = v, t.Fragment = o, t.Profiler = a, t.PureComponent = b, t.StrictMode = i, t.Suspense = u, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function(e, t, r) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = h({}, e.props),
                    i = e.key,
                    a = e.ref,
                    l = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (a = t.ref, l = S.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var s = e.type.defaultProps;
                    for (c in t) w.call(t, c) && !_.hasOwnProperty(c) && (o[c] = void 0 === t[c] && void 0 !== s ? s[c] : t[c])
                }
                var c = arguments.length - 2;
                if (1 === c) o.children = r;
                else if (1 < c) {
                    s = Array(c);
                    for (var u = 0; u < c; u++) s[u] = arguments[u + 2];
                    o.children = s
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: i,
                    ref: a,
                    props: o,
                    _owner: l
                }
            }, t.createContext = function(e) {
                return (e = {
                    $$typeof: s,
                    _currentValue: e,
                    _currentValue2: e,
                    _threadCount: 0,
                    Provider: null,
                    Consumer: null,
                    _defaultValue: null,
                    _globalName: null
                }).Provider = {
                    $$typeof: l,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = k, t.createFactory = function(e) {
                var t = k.bind(null, e);
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
                    $$typeof: f,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: T
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = D.transition;
                D.transition = {};
                try {
                    e()
                } finally {
                    D.transition = t
                }
            }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function(e, t) {
                return L.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return L.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return L.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return L.current.useEffect(e, t)
            }, t.useId = function() {
                return L.current.useId()
            }, t.useImperativeHandle = function(e, t, n) {
                return L.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function(e, t) {
                return L.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return L.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return L.current.useMemo(e, t)
            }, t.useReducer = function(e, t, n) {
                return L.current.useReducer(e, t, n)
            }, t.useRef = function(e) {
                return L.current.useRef(e)
            }, t.useState = function(e) {
                return L.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, n) {
                return L.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function() {
                return L.current.useTransition()
            }, t.version = "18.2.0"
        },
        67294: (e, t, n) => {
            e.exports = n(72408)
        },
        35817: (e, t, n) => {
            e.exports = n.p + "mp-core/double-tap.2dce0df5dbeafcc6c587.png"
        },
        34391: (e, t, n) => {
            e.exports = n.p + "mp-core/hand.c3fd5b37622643db944c.png"
        },
        41075: (e, t, n) => {
            e.exports = n.p + "mp-core/rotate.c6da480eee03bf85cca4.png"
        },
        80216: (e, t, n) => {
            e.exports = n.p + "mp-core/zoom.d702098524bcf5eee5ff.png"
        },
        4147: e => {
            e.exports = {
                i8: "VerseWeb 1.0 BETA"
            }
        }
    }
]);