/*! For license information please see 5651.50e5a936656bbfd0c680.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [5651], {
        72408: (e, t) => {
            var r = Symbol.for("react.element"),
                n = Symbol.for("react.portal"),
                o = Symbol.for("react.fragment"),
                u = Symbol.for("react.strict_mode"),
                a = Symbol.for("react.profiler"),
                c = Symbol.for("react.provider"),
                l = Symbol.for("react.context"),
                i = Symbol.for("react.forward_ref"),
                f = Symbol.for("react.suspense"),
                s = Symbol.for("react.memo"),
                p = Symbol.for("react.lazy"),
                d = Symbol.iterator,
                v = {
                    isMounted: function() {
                        return !1
                    },
                    enqueueForceUpdate: function() {},
                    enqueueReplaceState: function() {},
                    enqueueSetState: function() {}
                },
                h = Object.assign,
                m = {};

            function y(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || v
            }

            function _() {}

            function b(e, t, r) {
                this.props = e, this.context = t, this.refs = m, this.updater = r || v
            }
            y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, y.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, _.prototype = y.prototype;
            var g = b.prototype = new _;
            g.constructor = b, h(g, y.prototype), g.isPureReactComponent = !0;
            var w = Array.isArray,
                E = Object.prototype.hasOwnProperty,
                x = {
                    current: null
                },
                C = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function k(e, t, n) {
                var o, u = {},
                    a = null,
                    c = null;
                if (null != t)
                    for (o in void 0 !== t.ref && (c = t.ref), void 0 !== t.key && (a = "" + t.key), t) E.call(t, o) && !C.hasOwnProperty(o) && (u[o] = t[o]);
                var l = arguments.length - 2;
                if (1 === l) u.children = n;
                else if (1 < l) {
                    for (var i = Array(l), f = 0; f < l; f++) i[f] = arguments[f + 2];
                    u.children = i
                }
                if (e && e.defaultProps)
                    for (o in l = e.defaultProps) void 0 === u[o] && (u[o] = l[o]);
                return {
                    $$typeof: r,
                    type: e,
                    key: a,
                    ref: c,
                    props: u,
                    _owner: x.current
                }
            }

            function S(e) {
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

            function M(e, t, o, u, a) {
                var c = typeof e;
                "undefined" !== c && "boolean" !== c || (e = null);
                var l = !1;
                if (null === e) l = !0;
                else switch (c) {
                    case "string":
                    case "number":
                        l = !0;
                        break;
                    case "object":
                        switch (e.$$typeof) {
                            case r:
                            case n:
                                l = !0
                        }
                }
                if (l) return a = a(l = e), e = "" === u ? "." + $(l, 0) : u, w(a) ? (o = "", null != e && (o = e.replace(R, "$&/") + "/"), M(a, t, o, "", (function(e) {
                    return e
                }))) : null != a && (S(a) && (a = function(e, t) {
                    return {
                        $$typeof: r,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(a, o + (!a.key || l && l.key === a.key ? "" : ("" + a.key).replace(R, "$&/") + "/") + e)), t.push(a)), 1;
                if (l = 0, u = "" === u ? "." : u + ":", w(e))
                    for (var i = 0; i < e.length; i++) {
                        var f = u + $(c = e[i], i);
                        l += M(c, t, o, f, a)
                    } else if (f = function(e) {
                            return null === e || "object" != typeof e ? null : "function" == typeof(e = d && e[d] || e["@@iterator"]) ? e : null
                        }(e), "function" == typeof f)
                        for (e = f.call(e), i = 0; !(c = e.next()).done;) l += M(c = c.value, t, o, f = u + $(c, i++), a);
                    else if ("object" === c) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }

            function j(e, t, r) {
                if (null == e) return e;
                var n = [],
                    o = 0;
                return M(e, n, "", "", (function(e) {
                    return t.call(r, e, o++)
                })), n
            }

            function O(e) {
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
            var I = {
                    current: null
                },
                N = {
                    transition: null
                },
                P = {
                    ReactCurrentDispatcher: I,
                    ReactCurrentBatchConfig: N,
                    ReactCurrentOwner: x
                };
            t.Children = {
                map: j,
                forEach: function(e, t, r) {
                    j(e, (function() {
                        t.apply(this, arguments)
                    }), r)
                },
                count: function(e) {
                    var t = 0;
                    return j(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return j(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!S(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = y, t.Fragment = o, t.Profiler = a, t.PureComponent = b, t.StrictMode = u, t.Suspense = f, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = P, t.cloneElement = function(e, t, n) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var o = h({}, e.props),
                    u = e.key,
                    a = e.ref,
                    c = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (a = t.ref, c = x.current), void 0 !== t.key && (u = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                    for (i in t) E.call(t, i) && !C.hasOwnProperty(i) && (o[i] = void 0 === t[i] && void 0 !== l ? l[i] : t[i])
                }
                var i = arguments.length - 2;
                if (1 === i) o.children = n;
                else if (1 < i) {
                    l = Array(i);
                    for (var f = 0; f < i; f++) l[f] = arguments[f + 2];
                    o.children = l
                }
                return {
                    $$typeof: r,
                    type: e.type,
                    key: u,
                    ref: a,
                    props: o,
                    _owner: c
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
                    $$typeof: c,
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
                    $$typeof: i,
                    render: e
                }
            }, t.isValidElement = S, t.lazy = function(e) {
                return {
                    $$typeof: p,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: O
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: s,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = N.transition;
                N.transition = {};
                try {
                    e()
                } finally {
                    N.transition = t
                }
            }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function(e, t) {
                return I.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return I.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return I.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return I.current.useEffect(e, t)
            }, t.useId = function() {
                return I.current.useId()
            }, t.useImperativeHandle = function(e, t, r) {
                return I.current.useImperativeHandle(e, t, r)
            }, t.useInsertionEffect = function(e, t) {
                return I.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return I.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return I.current.useMemo(e, t)
            }, t.useReducer = function(e, t, r) {
                return I.current.useReducer(e, t, r)
            }, t.useRef = function(e) {
                return I.current.useRef(e)
            }, t.useState = function(e) {
                return I.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, r) {
                return I.current.useSyncExternalStore(e, t, r)
            }, t.useTransition = function() {
                return I.current.useTransition()
            }, t.version = "18.2.0"
        },
        67294: (e, t, r) => {
            e.exports = r(72408)
        },
        55651: (e, t, r) => {
            r.d(t, {
                ZE: () => D,
                gW: () => O
            });
            var n = r(67294);

            function o() {
                return (o = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var r = arguments[t];
                        for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
                    }
                    return e
                }).apply(this, arguments)
            }

            function u(e, t) {
                if (null == e) return {};
                var r, n, o = {},
                    u = Object.keys(e);
                for (n = 0; n < u.length; n++) t.indexOf(r = u[n]) >= 0 || (o[r] = e[r]);
                return o
            }

            function a(e) {
                var t = (0, n.useRef)(e),
                    r = (0, n.useRef)((function(e) {
                        t.current && t.current(e)
                    }));
                return t.current = e, r.current
            }
            var c = function(e, t, r) {
                    return void 0 === t && (t = 0), void 0 === r && (r = 1), e > r ? r : e < t ? t : e
                },
                l = function(e) {
                    return "touches" in e
                },
                i = function(e) {
                    return e && e.ownerDocument.defaultView || self
                },
                f = function(e, t, r) {
                    var n = e.getBoundingClientRect(),
                        o = l(t) ? function(e, t) {
                            for (var r = 0; r < e.length; r++)
                                if (e[r].identifier === t) return e[r];
                            return e[0]
                        }(t.touches, r) : t;
                    return {
                        left: c((o.pageX - (n.left + i(e).pageXOffset)) / n.width),
                        top: c((o.pageY - (n.top + i(e).pageYOffset)) / n.height)
                    }
                },
                s = function(e) {
                    !l(e) && e.preventDefault()
                },
                p = n.memo((function(e) {
                    var t = e.onMove,
                        r = e.onKey,
                        c = u(e, ["onMove", "onKey"]),
                        p = (0, n.useRef)(null),
                        d = a(t),
                        v = a(r),
                        h = (0, n.useRef)(null),
                        m = (0, n.useRef)(!1),
                        y = (0, n.useMemo)((function() {
                            var e = function(e) {
                                    s(e), (l(e) ? e.touches.length > 0 : e.buttons > 0) && p.current ? d(f(p.current, e, h.current)) : r(!1)
                                },
                                t = function() {
                                    return r(!1)
                                };

                            function r(r) {
                                var n = m.current,
                                    o = i(p.current),
                                    u = r ? o.addEventListener : o.removeEventListener;
                                u(n ? "touchmove" : "mousemove", e), u(n ? "touchend" : "mouseup", t)
                            }
                            return [function(e) {
                                var t = e.nativeEvent,
                                    n = p.current;
                                if (n && (s(t), ! function(e, t) {
                                        return t && !l(e)
                                    }(t, m.current) && n)) {
                                    if (l(t)) {
                                        m.current = !0;
                                        var o = t.changedTouches || [];
                                        o.length && (h.current = o[0].identifier)
                                    }
                                    n.focus(), d(f(n, t, h.current)), r(!0)
                                }
                            }, function(e) {
                                var t = e.which || e.keyCode;
                                t < 37 || t > 40 || (e.preventDefault(), v({
                                    left: 39 === t ? .05 : 37 === t ? -.05 : 0,
                                    top: 40 === t ? .05 : 38 === t ? -.05 : 0
                                }))
                            }, r]
                        }), [v, d]),
                        _ = y[0],
                        b = y[1],
                        g = y[2];
                    return (0, n.useEffect)((function() {
                        return g
                    }), [g]), n.createElement("div", o({}, c, {
                        onTouchStart: _,
                        onMouseDown: _,
                        className: "react-colorful__interactive",
                        ref: p,
                        onKeyDown: b,
                        tabIndex: 0,
                        role: "slider"
                    }))
                })),
                d = function(e) {
                    return e.filter(Boolean).join(" ")
                },
                v = function(e) {
                    var t = e.color,
                        r = e.left,
                        o = e.top,
                        u = void 0 === o ? .5 : o,
                        a = d(["react-colorful__pointer", e.className]);
                    return n.createElement("div", {
                        className: a,
                        style: {
                            top: 100 * u + "%",
                            left: 100 * r + "%"
                        }
                    }, n.createElement("div", {
                        className: "react-colorful__pointer-fill",
                        style: {
                            backgroundColor: t
                        }
                    }))
                },
                h = function(e, t, r) {
                    return void 0 === t && (t = 0), void 0 === r && (r = Math.pow(10, t)), Math.round(r * e) / r
                },
                m = (Math.PI, function(e) {
                    return E(y(e))
                }),
                y = function(e) {
                    return "#" === e[0] && (e = e.substring(1)), e.length < 6 ? {
                        r: parseInt(e[0] + e[0], 16),
                        g: parseInt(e[1] + e[1], 16),
                        b: parseInt(e[2] + e[2], 16),
                        a: 4 === e.length ? h(parseInt(e[3] + e[3], 16) / 255, 2) : 1
                    } : {
                        r: parseInt(e.substring(0, 2), 16),
                        g: parseInt(e.substring(2, 4), 16),
                        b: parseInt(e.substring(4, 6), 16),
                        a: 8 === e.length ? h(parseInt(e.substring(6, 8), 16) / 255, 2) : 1
                    }
                },
                _ = function(e) {
                    var t = function(e) {
                        var t = e.s,
                            r = e.v,
                            n = e.a,
                            o = (200 - t) * r / 100;
                        return {
                            h: h(e.h),
                            s: h(o > 0 && o < 200 ? t * r / 100 / (o <= 100 ? o : 200 - o) * 100 : 0),
                            l: h(o / 2),
                            a: h(n, 2)
                        }
                    }(e);
                    return "hsl(" + t.h + ", " + t.s + "%, " + t.l + "%)"
                },
                b = function(e) {
                    var t = e.h,
                        r = e.s,
                        n = e.v,
                        o = e.a;
                    t = t / 360 * 6, r /= 100, n /= 100;
                    var u = Math.floor(t),
                        a = n * (1 - r),
                        c = n * (1 - (t - u) * r),
                        l = n * (1 - (1 - t + u) * r),
                        i = u % 6;
                    return {
                        r: h(255 * [n, c, a, a, l, n][i]),
                        g: h(255 * [l, n, n, c, a, a][i]),
                        b: h(255 * [a, a, l, n, n, c][i]),
                        a: h(o, 2)
                    }
                },
                g = function(e) {
                    var t = e.toString(16);
                    return t.length < 2 ? "0" + t : t
                },
                w = function(e) {
                    var t = e.r,
                        r = e.g,
                        n = e.b,
                        o = e.a,
                        u = o < 1 ? g(h(255 * o)) : "";
                    return "#" + g(t) + g(r) + g(n) + u
                },
                E = function(e) {
                    var t = e.r,
                        r = e.g,
                        n = e.b,
                        o = e.a,
                        u = Math.max(t, r, n),
                        a = u - Math.min(t, r, n),
                        c = a ? u === t ? (r - n) / a : u === r ? 2 + (n - t) / a : 4 + (t - r) / a : 0;
                    return {
                        h: h(60 * (c < 0 ? c + 6 : c)),
                        s: h(u ? a / u * 100 : 0),
                        v: h(u / 255 * 100),
                        a: o
                    }
                },
                x = n.memo((function(e) {
                    var t = e.hue,
                        r = e.onChange,
                        o = d(["react-colorful__hue", e.className]);
                    return n.createElement("div", {
                        className: o
                    }, n.createElement(p, {
                        onMove: function(e) {
                            r({
                                h: 360 * e.left
                            })
                        },
                        onKey: function(e) {
                            r({
                                h: c(t + 360 * e.left, 0, 360)
                            })
                        },
                        "aria-label": "Hue",
                        "aria-valuenow": h(t),
                        "aria-valuemax": "360",
                        "aria-valuemin": "0"
                    }, n.createElement(v, {
                        className: "react-colorful__hue-pointer",
                        left: t / 360,
                        color: _({
                            h: t,
                            s: 100,
                            v: 100,
                            a: 1
                        })
                    })))
                })),
                C = n.memo((function(e) {
                    var t = e.hsva,
                        r = e.onChange,
                        o = {
                            backgroundColor: _({
                                h: t.h,
                                s: 100,
                                v: 100,
                                a: 1
                            })
                        };
                    return n.createElement("div", {
                        className: "react-colorful__saturation",
                        style: o
                    }, n.createElement(p, {
                        onMove: function(e) {
                            r({
                                s: 100 * e.left,
                                v: 100 - 100 * e.top
                            })
                        },
                        onKey: function(e) {
                            r({
                                s: c(t.s + 100 * e.left, 0, 100),
                                v: c(t.v - 100 * e.top, 0, 100)
                            })
                        },
                        "aria-label": "Color",
                        "aria-valuetext": "Saturation " + h(t.s) + "%, Brightness " + h(t.v) + "%"
                    }, n.createElement(v, {
                        className: "react-colorful__saturation-pointer",
                        top: 1 - t.v / 100,
                        left: t.s / 100,
                        color: _(t)
                    })))
                })),
                k = function(e, t) {
                    if (e === t) return !0;
                    for (var r in e)
                        if (e[r] !== t[r]) return !1;
                    return !0
                };

            function S(e, t, r) {
                var o = a(r),
                    u = (0, n.useState)((function() {
                        return e.toHsva(t)
                    })),
                    c = u[0],
                    l = u[1],
                    i = (0, n.useRef)({
                        color: t,
                        hsva: c
                    });
                (0, n.useEffect)((function() {
                    if (!e.equal(t, i.current.color)) {
                        var r = e.toHsva(t);
                        i.current = {
                            hsva: r,
                            color: t
                        }, l(r)
                    }
                }), [t, e]), (0, n.useEffect)((function() {
                    var t;
                    k(c, i.current.hsva) || e.equal(t = e.fromHsva(c), i.current.color) || (i.current = {
                        hsva: c,
                        color: t
                    }, o(t))
                }), [c, e, o]);
                var f = (0, n.useCallback)((function(e) {
                    l((function(t) {
                        return Object.assign({}, t, e)
                    }))
                }), []);
                return [c, f]
            }
            var R = "undefined" != typeof window ? n.useLayoutEffect : n.useEffect,
                $ = new Map,
                M = function(e) {
                    var t, a = e.className,
                        c = e.colorModel,
                        l = e.color,
                        i = void 0 === l ? c.defaultColor : l,
                        f = e.onChange,
                        s = u(e, ["className", "colorModel", "color", "onChange"]),
                        p = (0, n.useRef)(null);
                    t = p, R((function() {
                        var e = t.current ? t.current.ownerDocument : document;
                        if (void 0 !== e && !$.has(e)) {
                            var n = e.createElement("style");
                            n.innerHTML = '.react-colorful{position:relative;display:flex;flex-direction:column;width:200px;height:200px;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:default}.react-colorful__saturation{position:relative;flex-grow:1;border-color:transparent;border-bottom:12px solid #000;border-radius:8px 8px 0 0;background-image:linear-gradient(0deg,#000,transparent),linear-gradient(90deg,#fff,hsla(0,0%,100%,0))}.react-colorful__alpha-gradient,.react-colorful__pointer-fill{content:"";position:absolute;left:0;top:0;right:0;bottom:0;pointer-events:none;border-radius:inherit}.react-colorful__alpha-gradient,.react-colorful__saturation{box-shadow:inset 0 0 0 1px rgba(0,0,0,.05)}.react-colorful__alpha,.react-colorful__hue{position:relative;height:24px}.react-colorful__hue{background:linear-gradient(90deg,red 0,#ff0 17%,#0f0 33%,#0ff 50%,#00f 67%,#f0f 83%,red)}.react-colorful__last-control{border-radius:0 0 8px 8px}.react-colorful__interactive{position:absolute;left:0;top:0;right:0;bottom:0;border-radius:inherit;outline:none;touch-action:none}.react-colorful__pointer{position:absolute;z-index:1;box-sizing:border-box;width:28px;height:28px;transform:translate(-50%,-50%);background-color:#fff;border:2px solid #fff;border-radius:50%;box-shadow:0 2px 4px rgba(0,0,0,.2)}.react-colorful__interactive:focus .react-colorful__pointer{transform:translate(-50%,-50%) scale(1.1)}.react-colorful__alpha,.react-colorful__alpha-pointer{background-color:#fff;background-image:url(\'data:image/svg+xml;charset=utf-8,<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill-opacity=".05"><path d="M8 0h8v8H8zM0 8h8v8H0z"/></svg>\')}.react-colorful__saturation-pointer{z-index:3}.react-colorful__hue-pointer{z-index:2}', $.set(e, n);
                            var o = r.nc;
                            o && n.setAttribute("nonce", o), e.head.appendChild(n)
                        }
                    }), []);
                    var v = S(c, i, f),
                        h = v[0],
                        m = v[1],
                        y = d(["react-colorful", a]);
                    return n.createElement("div", o({}, s, {
                        ref: p,
                        className: y
                    }), n.createElement(C, {
                        hsva: h,
                        onChange: m
                    }), n.createElement(x, {
                        hue: h.h,
                        onChange: m,
                        className: "react-colorful__last-control"
                    }))
                },
                j = {
                    defaultColor: "000",
                    toHsva: m,
                    fromHsva: function(e) {
                        return function(e) {
                            return w(b(e))
                        }({
                            h: e.h,
                            s: e.s,
                            v: e.v,
                            a: 1
                        })
                    },
                    equal: function(e, t) {
                        return e.toLowerCase() === t.toLowerCase() || k(y(e), y(t))
                    }
                },
                O = function(e) {
                    return n.createElement(M, o({}, e, {
                        colorModel: j
                    }))
                },
                I = /^#?([0-9A-F]{3,8})$/i,
                N = function(e) {
                    var t = e.color,
                        r = void 0 === t ? "" : t,
                        c = e.onChange,
                        l = e.onBlur,
                        i = e.escape,
                        f = e.validate,
                        s = e.format,
                        p = e.process,
                        d = u(e, ["color", "onChange", "onBlur", "escape", "validate", "format", "process"]),
                        v = (0, n.useState)((function() {
                            return i(r)
                        })),
                        h = v[0],
                        m = v[1],
                        y = a(c),
                        _ = a(l),
                        b = (0, n.useCallback)((function(e) {
                            var t = i(e.target.value);
                            m(t), f(t) && y(p ? p(t) : t)
                        }), [i, p, f, y]),
                        g = (0, n.useCallback)((function(e) {
                            f(e.target.value) || m(i(r)), _(e)
                        }), [r, i, f, _]);
                    return (0, n.useEffect)((function() {
                        m(i(r))
                    }), [r, i]), n.createElement("input", o({}, d, {
                        value: s ? s(h) : h,
                        spellCheck: "false",
                        onChange: b,
                        onBlur: g
                    }))
                },
                P = function(e) {
                    return "#" + e
                },
                D = function(e) {
                    var t = e.prefixed,
                        r = e.alpha,
                        a = u(e, ["prefixed", "alpha"]),
                        c = (0, n.useCallback)((function(e) {
                            return e.replace(/([^0-9A-F]+)/gi, "").substring(0, r ? 8 : 6)
                        }), [r]),
                        l = (0, n.useCallback)((function(e) {
                            return function(e, t) {
                                var r = I.exec(e),
                                    n = r ? r[1].length : 0;
                                return 3 === n || 6 === n || !!t && 4 === n || !!t && 8 === n
                            }(e, r)
                        }), [r]);
                    return n.createElement(N, o({}, a, {
                        escape: c,
                        format: t ? P : void 0,
                        process: P,
                        validate: l
                    }))
                }
        }
    }
]);