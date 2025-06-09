/*! For license information please see 8718.9cfd1705958640832a52.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [8718], {
        88718: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => s
            });
            var n = r(67294),
                o = r(20745),
                i = r(55293);
            class s {
                id = "core.ui.loader";
                name = "Loader";
                description = "Shows the loading screen upon entry.";
                version = "1.0.0";
                requires = [];
                provides = ["loader"];
                _finishedLoading = !1;
                constructor() {
                    this.loaderReadyPromise = new Promise((e => this.loaderReadyCallback = e)), this.start()
                }
                get finishedLoading() {
                    return this._finishedLoading
                }
                waitForLoaderReady() {
                    return this.loaderReadyPromise
                }
                start() {
                    a.show(this, (() => a.hide()))
                }
            }
            class a extends n.PureComponent {
                static div = null;
                static root = null;
                static show(e, t) {
                    this.div || (this.div = document.createElement("div"), this.div.setAttribute("id", "metapress-loader"), metapress.contentDiv.appendChild(this.div), this.root = o.createRoot(this.div), this.root.render(n.createElement(a, {
                        base: e,
                        onSuccess: t
                    })))
                }
                static hide() {
                    this.div && (this.div.parentElement.removeChild(this.div), this.div = null, this.root.unmount(), this.root = null)
                }
                state = {
                    opacity: 1,
                    title: "",
                    tagline: "",
                    loadingText: "Loading...",
                    loadingPercent: 0
                };
                get config() {
                    return metapress.config[this.props.base.id]
                }
                loadingImage = this.config?.loadingImage || r(72053);
                blurAmount = null != this.config?.blurAmount && parseInt(this.config.blurAmount) || 0;
                clickCount = 0;
                enterButtonCSS = null;
                get isMobile() {
                    return window.innerWidth < 800
                }
                componentDidMount() {
                    const e = metapress.button?.div;
                    e && (e.style.cssText = "bottom: -42px;"), this.props.base._finishedLoading = !1, window.addEventListener("resize", this.onResize), this.updateTitle(), this.props.base.loaderReadyCallback?.(), this.props.base.loaderReadyCallback = null, this.updateLoadProgress()
                }
                componentWillUnmount() {
                    window.removeEventListener("resize", this.onResize);
                    const e = metapress.button?.div;
                    e && (e.style.cssText = null)
                }
                onResize = e => {
                    this.resizeTimer || (this.resizeTimer = setTimeout((() => {
                        this.resizeTimer = null, this.forceUpdate()
                    }), 10))
                };
                getProgress() {
                    let e = metapress.plugins.all.find((e => e._state == i.BV.Loading)) || metapress.plugins.loadingPluginMetadata[0];
                    if (e) {
                        let t = metapress.plugins.all.filter((e => e._state == i.BV.Loading)).length + metapress.plugins.loadingPluginMetadata.length - 1,
                            r = `Loading feature: ${e.name||e.id}`;
                        return t > 0 && (r += ` + ${t} more`), {
                            progress: 0,
                            description: r
                        }
                    }
                    if (!metapress.plugins.allLoaded) return {
                        progress: 0,
                        description: "Loading..."
                    };
                    this.props.base._hasDoneEntityCheck || (this.props.base._hasDoneEntityCheck = !0, metapress.plugins.sendEvent("loader_beforeLoadEntities"), metapress.entities.checkAllEntities());
                    let t = metapress.entities.renderers.length + metapress.entities.modifiers.length,
                        r = metapress.entities.renderers.reduce(((e, t) => e + (t._loaded ? 1 : 0)), 0) + metapress.entities.modifiers.reduce(((e, t) => e + (t._loaded ? 1 : 0)), 0);
                    0 == t && (t = 1, r = 1);
                    let n = (metapress.entities.renderers.find((e => !e._loaded && e.entity?.name)) || metapress.entities.modifiers.find((e => !e._loaded && e.entity?.name)))?.entity?.name,
                        o = t - r;
                    return 0 == o ? {
                        progress: 1,
                        description: "Loading..."
                    } : 1 == o && n ? {
                        progress: r / t,
                        description: `Loading object: ${n}`
                    } : o > 1 && n ? {
                        progress: r / t,
                        description: `Loading object: ${n} + ${o-1} more`
                    } : 1 == o ? {
                        progress: r / t,
                        description: "Loading 1 object..."
                    } : {
                        progress: r / t,
                        description: `Loading ${o} objects...`
                    }
                }
                async updateLoadProgress() {
                    for (;;) {
                        let {
                            progress: e,
                            description: t
                        } = this.getProgress();
                        if (this.setState({
                                loadingText: t,
                                loadingPercent: Math.round(100 * e)
                            }), await new Promise((e => setTimeout(e, 500))), e >= 1) break
                    }
                    this.props.base._finishedLoading = !0, metapress.plugins.sendEvent("loader_beforeEnterWorld"), metapress.plugins.sendEvent("loader_onEnterWorld"), await new Promise((e => setTimeout(e, 500))), this.setState({
                        opacity: 0
                    }), await new Promise((e => setTimeout(e, 1e3))), this.onFinish()
                }
                updateTitle() {
                    let e = document.querySelector("title")?.innerText || "",
                        t = "",
                        r = e.indexOf(" – ");
                    r >= 0 && (t = e.slice(r + 3), e = e.slice(0, r)), this.setState({
                        title: e,
                        tagline: t
                    })
                }
                onFinish() {
                    null != this.props.onSuccess && this.props.onSuccess()
                }
                onBackgroundClick = e => {
                    this.clickCount++, 10 == this.clickCount && (this.props.base.loaderReadyCallback?.(), this.props.base.loaderReadyCallback = null, this.setState({
                        opacity: 0
                    }), setTimeout((() => this.onFinish()), 500))
                };
                render() {
                    return n.createElement(n.Fragment, null, this.blurAmount > 0 ? n.createElement("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: this.state.opacity,
                            backgroundImage: `url(${this.loadingImage})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            transform: "scale(1.1)",
                            transition: "opacity 0.5s",
                            zIndex: 999
                        }
                    }) : null, n.createElement("div", {
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: this.state.opacity,
                            backgroundImage: `url(${this.loadingImage})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            filter: this.blurAmount > 0 ? `blur(${this.blurAmount}px)` : null,
                            WebkitFilter: this.blurAmount > 0 ? `blur(${this.blurAmount}px)` : null,
                            transform: this.blurAmount > 0 ? "scale(1.1)" : null,
                            transition: "opacity 0.5s",
                            zIndex: 1e3
                        }
                    }), n.createElement("div", {
                        onClick: this.onBackgroundClick,
                        style: {
                            position: "fixed",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            opacity: this.state.opacity,
                            transition: "opacity 0.5s",
                            zIndex: 1001
                        }
                    }, n.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "relative",
                            top: "12%",
                            padding: "0 20px",
                            gap: 10,
                            color: "#FFFFFF",
                            textAlign: "center",
                            justifyContent: "center",
                            alignItems: "center"
                        }
                    }, n.createElement("div", {
                        style: {
                            fontSize: this.isMobile ? 48 : 64,
                            fontWeight: 300
                        }
                    }, this.state.title), this.state.tagline ? n.createElement("div", {
                        style: {
                            fontSize: this.isMobile ? 18 : 28,
                            fontWeight: 300,
                            opacity: .6
                        }
                    }, this.state.tagline) : null), n.createElement("img", {
                        src: "//ghzhost.com/logo.png",
                        alt: "VerseWeb Logo",
                        style: {
                            display: "block",
                            margin: "auto",
                            position: "absolute",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            zIndex: 1002,
                            maxWidth: "100%",
                            maxHeight: "300px"
                        }
                    }), n.createElement("div", {
                        style: {
                            position: "absolute",
                            left: "calc(50% - 300px)",
                            top: "75%",
                            width: 600,
                            height: 30,
                            borderRadius: 15,
                            border: "2px solid white",
                            overflow: "hidden",
                            boxSizing: "border-box"
                        }
                    }, n.createElement("div", {
                        style: {
                            position: "absolute",
                            left: 0,
                            top: 0,
                            width: `${this.state.loadingPercent}%`,
                            height: "100%",
                            backgroundColor: "#00afe6",
                            transition: "width 0.5s",
                            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.5)"
                        }
                    })), n.createElement("div", {
                        style: {
                            position: "absolute",
                            left: 20,
                            top: "calc(75% + 35px)",
                            width: "calc(100% - 40px)",
                            textAlign: "center",
                            fontSize: 12,
                            color: "#FFFFFF",
                            opacity: .5
                        }
                    }, this.state.loadingText), n.createElement("div", {
                        style: {
                            display: "flex",
                            width: "100%",
                            justifyContent: "center"
                        }
                    }, n.createElement("img", {
                        draggable: "false",
                        src: "",
                        style: {
                            position: "absolute",
                            bottom: 30,
                            width: 200
                        }
                    }))))
                }
            }
        },
        72408: (e, t) => {
            var r = Symbol.for("react.element"),
                n = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                i = Symbol.for("react.strict_mode"),
                s = Symbol.for("react.profiler"),
                a = Symbol.for("react.provider"),
                u = Symbol.for("react.context"),
                l = Symbol.for("react.forward_ref"),
                c = Symbol.for("react.suspense"),
                d = Symbol.for("react.memo"),
                p = Symbol.for("react.lazy"),
                f = Symbol.iterator,
                h = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                m = Object.assign,
                y = {};

            function g(e, t, r) {
                this.props = e, this.context = t, this.refs = y, this.updater = r || h
            }

            function b() {}

            function v(e, t, r) {
                this.props = e, this.context = t, this.refs = y, this.updater = r || h
            }
            g.prototype.isReactComponent = {}, g.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, g.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, b.prototype = g.prototype;
            var _ = v.prototype = new b;
            _.constructor = v, m(_, g.prototype), _.isPureReactComponent = !0;
            var w = Array.isArray,
                k = Object.prototype.hasOwnProperty,
                E = {
                    current: null
                },
                S = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function x(e, t, n) {
                var o, i = {},
                    s = null,
                    a = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) k.call(t, o) && !S.hasOwnProperty(o) && (i[o] = t[o]);
                var u = arguments.length - 2;
                if (1 === u) i.children = n;
                else if (1 < u) {
                    for (var l = Array(u), c = 0; c < u; c++) l[c] = arguments[c + 2];
                    i.children = l
                }
                if (e && e.defaultProps)
                    for (o in u = e.defaultProps) void 0 === i[o] && (i[o] = u[o]);
                return {
                    $$typeof: r,
                    type: e,
                    key: s,
                    ref: a,
                    props: i,
                    _owner: E.current
                }
            }

            function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === r
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

            function P(e, t, o, i, s) {
                var a = typeof e;
                "undefined" !== a && "boolean" !== a || (e = null);
                var u = !1;
                if (null === e) u = !0;
                else switch (a) {
                    case "string":
                    case "number":
                        u = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case r:
                            case n:
                                u = !0
                        }
                }
                if (u) return s = s(u = e), e = "" === i ? "." + $(u, 0) : i, w(s) ? (o = "", null != e && (o = e.replace(R, "$&/") + "/"), P(s, t, o, "", (function(e) {
                    return e
                }))) : null != s && (C(s) && (s = function(e, t) {
                    return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(s, o + (!s.key || u && u.key === s.key ? "" : ("" + s.key).replace(R, "$&/") + "/") + e)), t.push(s)), 1;
                if (u = 0, i = "" === i ? "." : i + ":", w(e))
                    for (var l = 0; l < e.length; l++) {
                        var c = i + $(a = e[l], l);
                        u += P(a, t, o, c, s)
                    } else if (c = function(e) {
                            return null === e || "object" != typeof e ? null : "function" == typeof(e = f && e[f] || e["@@iterator"]) ? e : null
                        }(e), "function" == typeof c)
                        for (e = c.call(e), l = 0; !(a = e.next()).done;) u += P(a = a.value, t, o, c = i + $(a, l++), s);
                    else if ("object" === a) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return u
            }

            function L(e, t, r) {
                if (null == e) return e;
                var n = [],
                    o = 0;
                return P(e, n, "", "", (function(e) {
                    return t.call(r, e, o++)
                })), n
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
            var F = {
                    current: null
                },
                T = {
                    transition: null
                },
                I = {
                    ReactCurrentDispatcher: F,
                    ReactCurrentBatchConfig: T,
                    ReactCurrentOwner: E
                };
            t.Children = {
                map: L,
                forEach: function(e, t, r) {
                    L(e, (function() {
                        t.apply(this, arguments)
                    }), r)
                },
                count: function(e) {
                    var t = 0;
                    return L(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return L(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = g, t.Fragment = o, t.Profiler = s, t.PureComponent = v, t.StrictMode = i, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = I, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = m({}, e.props),
                    i = e.key,
                    s = e.ref,
                    a = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (s = t.ref, a = E.current), void 0 !== t.key && (i = "" + t.key), e.type && e.type.defaultProps) var u = e.type.defaultProps;
                    for (l in t) k.call(t, l) && !S.hasOwnProperty(l) && (o[l] = void 0 === t[l] && void 0 !== u ? u[l] : t[l])
                }
                var l = arguments.length - 2;
                if (1 === l) o.children = n;
                else if (1 < l) {
                    u = Array(l);
                    for (var c = 0; c < l; c++) u[c] = arguments[c + 2];
                    o.children = u
                }
                return {
                    $$typeof: r,
                    type: e.type,
                    key: i,
                    ref: s,
                    props: o,
                    _owner: a
                }
            }, t.createContext = function(e) {
                return (e = {
                    $$typeof: u,
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
            }, t.createElement = x, t.createFactory = function(e) {
                var t = x.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: l,
                    render: e
                }
            }, t.isValidElement = C, t.lazy = function(e) {
                return {
                    $$typeof: p,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: j
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: d,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = T.transition;
                T.transition = {};
                try {
                    e()
                } finally {
                    T.transition = t
                }
            }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function(e, t) {
                return F.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return F.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return F.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return F.current.useEffect(e, t)
            }, t.useId = function() {
                return F.current.useId()
            }, t.useImperativeHandle = function(e, t, r) {
                return F.current.useImperativeHandle(e, t, r)
            }, t.useInsertionEffect = function(e, t) {
                return F.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return F.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return F.current.useMemo(e, t)
            }, t.useReducer = function(e, t, r) {
                return F.current.useReducer(e, t, r)
            }, t.useRef = function(e) {
                return F.current.useRef(e)
            }, t.useState = function(e) {
                return F.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, r) {
                return F.current.useSyncExternalStore(e, t, r)
            }, t.useTransition = function() {
                return F.current.useTransition()
            }, t.version = "18.2.0"
        },
        67294: (e, t, r) => {
            e.exports = r(72408)
        },
        72053: (e, t, r) => {
            e.exports = r.p + "mp-core/bg_gradient.e49c63638af6cb80e6cc.jpg"
        },
        50286: (e, t, r) => {
            e.exports = r.p + "mp-core/metapress_logo_white.ed02c14a4db1b3783ca0.svg"
        }
    }
]);