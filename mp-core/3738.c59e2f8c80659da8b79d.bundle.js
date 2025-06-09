/*! For license information please see 3738.c59e2f8c80659da8b79d.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [3738], {
        40001: (e, t, n) => {
            n.d(t, {
                Lm: () => a,
                U8: () => i,
                lk: () => s,
                sN: () => o
            });
            var r = n(67294);
            const s = e => r.createElement(r.Fragment, null, r.createElement("div", {
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
                a = e => {
                    let [t, s] = r.useState(!!e.openByDefault);
                    return !1 === e.visible ? r.createElement(r.Fragment, null) : r.createElement(r.Fragment, null, r.createElement("div", {
                        style: Object.assign({
                            display: "flex",
                            margin: "20px 10px 10px 10px",
                            fontSize: 15,
                            cursor: "pointer",
                            alignItems: "center"
                        }, e.style),
                        onClick: e => s(!t)
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
                o = e => {
                    let [t, s] = r.useState(!1);
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
                        onPointerEnter: e => s(!0),
                        onPointerLeave: e => s(!1),
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
                i = e => r.createElement("div", {
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
        43738: (e, t, n) => {
            n.r(t), n.d(t, {
                default: () => l
            });
            var r = n(67294),
                s = (n(20745), n(40001));
            class a extends r.PureComponent {
                state = {
                    text: "",
                    messages: []
                };
                messageRef = r.createRef();
                componentDidMount() {
                    this.props.plugin.addEventListener("updated.messages", this.onMessagesUpdated), this.onMessagesUpdated()
                }
                componentWillUnmount() {
                    this.props.plugin.removeEventListener("updated.messages", this.onMessagesUpdated)
                }
                onMessagesUpdated = () => {
                    this.setState({
                        messages: this.props.plugin.messages
                    }, (() => {
                        this.messageRef.current && (this.messageRef.current.scrollTop = this.messageRef.current.scrollHeight)
                    })), this.forceUpdate()
                };
                onInputKeyDown(e) {
                    "Escape" == e.key ? metapress.menubar.closePanel() : "Enter" == e.key && (metapress.chat.sendMessage(this.state.text), this.setState({
                        text: ""
                    }))
                }
                render = () => r.createElement(s.lk, {
                    title: "Chat",
                    onClose: () => metapress.menubar.closePanel()
                }, r.createElement("div", {
                    ref: this.messageRef,
                    style: {
                        position: "relative",
                        top: "5px",
                        width: "100%",
                        height: "calc(100% - 80px)",
                        overflowY: "auto"
                    }
                }, r.createElement("div", {
                    style: {
                        left: 0,
                        width: "100%",
                        padding: 20,
                        boxSizing: "border-box"
                    }
                }, this.state.messages.map((e => r.createElement(o, {
                    key: e.id,
                    message: e
                }))))), r.createElement("div", {
                    ref: e => this.inputField = e,
                    style: {
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        width: "calc(100% - 40px)",
                        height: 44,
                        backgroundColor: "#0A0A0A",
                        borderRadius: 22,
                        border: "1px solid rgba(255, 255, 255, 0.1)",
                        boxSizing: "border-box",
                        display: "flex",
                        alignItems: "center"
                    }
                }, r.createElement("input", {
                    autoFocus: !0,
                    value: this.state.text,
                    onChange: e => this.setState({
                        text: e.target.value
                    }),
                    onKeyDown: e => this.onInputKeyDown(e),
                    style: {
                        height: "100%",
                        padding: "0px 20px",
                        fontSize: 13,
                        flex: "1 1 auto",
                        background: "none",
                        border: "none",
                        outline: "none",
                        color: "white"
                    },
                    placeholder: "Digite uma mensagem..."
                })))
            }
            const o = e => r.createElement("div", {
                style: {
                    margin: 10,
                    lineHeight: "1.5"
                }
            }, r.createElement("b", null, e.message.username), ": ", e.message.text);
            var i = n(28721);
            class l extends EventTarget {
                id = "core.feature.chat";
                name = "Chat";
                description = "Lets users chat to each other in the environment.";
                version = "1.0.0";
                requires = ["entities", "menubar", "messaging"];
                provides = ["chat"];
                messages = [];
                personalID = (0, i.Z)();
                idNameCache = {};
                onLoad() {
                    metapress.entities.add({
                        id: "chat.menu",
                        type: "menubar.item",
                        name: "Chat",
                        description: "Can be used to send text messages to people in the world.",
                        is_panel: !0,
                        icon: n(6952),
                        onClick: () => this.toggleUI()
                    })
                }
                $onIncomingMessage(e) {
                    "chat:msg" == e.name && this.onChatIncoming(e)
                }
                toggleUI() {
                    metapress.menubar.toggleReactPanel("chat.menu", (() => r.createElement(a, {
                        plugin: this
                    })))
                }
                openUI() {
                    metapress.menubar.openReactPanel("chat.menu", (() => r.createElement(a, {
                        plugin: this
                    })))
                }
                sendMessage(e) {
                    if (e = e?.trim(), !e) return;
                    let t = (0, i.Z)();
                    metapress.messaging.send("global", "chat:msg", {
                        username: metapress.profile.get("name") || "Guest",
                        text: e,
                        id: t,
                        personalID: this.personalID
                    }), this.messages.push({
                        username: "Você",
                        text: e,
                        sent: !0,
                        id: t
                    }), this.dispatchEvent(new CustomEvent("updated.messages", {
                        messages: this.messages
                    }))
                }
                onChatIncoming(e) {
                    this.messages.push(e.data), this.messages = this.messages.slice(-50), null != e.data.personalID && (this.idNameCache[e.data.personalID] = e.data.username, this.messages = this.messages.map((t => (t.personalID === e.data.personalID && t.username != this.idNameCache[e.data.personalID] && (t.username = this.idNameCache[e.data.personalID]), t)))), this.dispatchEvent(new CustomEvent("updated.messages", {
                        messages: this.messages
                    })), metapress.menubar.toasts.show({
                        buttonID: "chat.menu",
                        text: `<b>${e.data.username}</b>: ${e.data.text}`
                    }), new Audio(n(20106)).play()
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:sendMessage`,
                    type: "action",
                    name: "Chat - Send message",
                    tags: "send message, chat, send chat, send text message, send text, send message to everyone, send message to world, tell everyone, tell everybody, broadcast message",
                    content: "\n                This action can be used to send a text message to everyone in the world. The message will be displayed in the chat window for everyone.\n                Assistant instruction: The value is the text to send.\n            ",
                    action: e => {
                        if (!e.value) throw new Error("Cannot send empty message.");
                        return this.openUI(), this.sendMessage(e.value), "Message successfully sent to everyone in the world."
                    }
                }]
            }
        },
        72408: (e, t) => {
            var n = Symbol.for("react.element"),
                r = Symbol.for("react.portal"),
                s = Symbol.for("react.fragment"),
                a = Symbol.for("react.strict_mode"),
                o = Symbol.for("react.profiler"),
                i = Symbol.for("react.provider"),
                l = Symbol.for("react.context"),
                u = Symbol.for("react.forward_ref"),
                c = Symbol.for("react.suspense"),
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
                g = {};

            function y(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || m
            }

            function b() {}

            function v(e, t, n) {
                this.props = e, this.context = t, this.refs = g, this.updater = n || m
            }
            y.prototype.isReactComponent = {}, y.prototype.setState = function(e, t) {
                if ("object" != typeof e && "function" != typeof e && null != e) throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
                this.updater.enqueueSetState(this, e, t, "setState")
            }, y.prototype.forceUpdate = function(e) {
                this.updater.enqueueForceUpdate(this, e, "forceUpdate")
            }, b.prototype = y.prototype;
            var x = v.prototype = new b;
            x.constructor = v, h(x, y.prototype), x.isPureReactComponent = !0;
            var E = Array.isArray,
                w = Object.prototype.hasOwnProperty,
                k = {
                    current: null
                },
                S = {
                    key: !0,
                    ref: !0,
                    __self: !0,
                    __source: !0
                };

            function _(e, t, r) {
                var s, a = {},
                    o = null,
                    i = null;
                if (null != t)
                    for (s in void 0 !== t.ref && (i = t.ref), void 0 !== t.key && (o = "" + t.key), t) w.call(t, s) && !S.hasOwnProperty(s) && (a[s] = t[s]);
                var l = arguments.length - 2;
                if (1 === l) a.children = r;
                else if (1 < l) {
                    for (var u = Array(l), c = 0; c < l; c++) u[c] = arguments[c + 2];
                    a.children = u
                }
                if (e && e.defaultProps)
                    for (s in l = e.defaultProps) void 0 === a[s] && (a[s] = l[s]);
                return {
                    $$typeof: n,
                    type: e,
                    key: o,
                    ref: i,
                    props: a,
                    _owner: k.current
                }
            }

            function C(e) {
                return "object" == typeof e && null !== e && e.$$typeof === n
            }
            var R = /\/+/g;

            function I(e, t) {
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

            function $(e, t, s, a, o) {
                var i = typeof e;
                "undefined" !== i && "boolean" !== i || (e = null);
                var l = !1;
                if (null === e) l = !0;
                else switch (i) {
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
                if (l) return o = o(l = e), e = "" === a ? "." + I(l, 0) : a, E(o) ? (s = "", null != e && (s = e.replace(R, "$&/") + "/"), $(o, t, s, "", (function(e) {
                    return e
                }))) : null != o && (C(o) && (o = function(e, t) {
                    return {
                        $$typeof: n,
                        type: e.type,
                        key: t,
                        ref: e.ref,
                        props: e.props,
                        _owner: e._owner
                    }
                }(o, s + (!o.key || l && l.key === o.key ? "" : ("" + o.key).replace(R, "$&/") + "/") + e)), t.push(o)), 1;
                if (l = 0, a = "" === a ? "." : a + ":", E(e))
                    for (var u = 0; u < e.length; u++) {
                        var c = a + I(i = e[u], u);
                        l += $(i, t, s, c, o)
                    } else if (c = function(e) {
                            return null === e || "object" != typeof e ? null : "function" == typeof(e = f && e[f] || e["@@iterator"]) ? e : null
                        }(e), "function" == typeof c)
                        for (e = c.call(e), u = 0; !(i = e.next()).done;) l += $(i = i.value, t, s, c = a + I(i, u++), o);
                    else if ("object" === i) throw t = String(e), Error("Objects are not valid as a React child (found: " + ("[object Object]" === t ? "object with keys {" + Object.keys(e).join(", ") + "}" : t) + "). If you meant to render a collection of children, use an array instead.");
                return l
            }

            function D(e, t, n) {
                if (null == e) return e;
                var r = [],
                    s = 0;
                return $(e, r, "", "", (function(e) {
                    return t.call(n, e, s++)
                })), r
            }

            function P(e) {
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
            var M = {
                    current: null
                },
                j = {
                    transition: null
                },
                U = {
                    ReactCurrentDispatcher: M,
                    ReactCurrentBatchConfig: j,
                    ReactCurrentOwner: k
                };
            t.Children = {
                map: D,
                forEach: function(e, t, n) {
                    D(e, (function() {
                        t.apply(this, arguments)
                    }), n)
                },
                count: function(e) {
                    var t = 0;
                    return D(e, (function() {
                        t++
                    })), t
                },
                toArray: function(e) {
                    return D(e, (function(e) {
                        return e
                    })) || []
                },
                only: function(e) {
                    if (!C(e)) throw Error("React.Children.only expected to receive a single React element child.");
                    return e
                }
            }, t.Component = y, t.Fragment = s, t.Profiler = o, t.PureComponent = v, t.StrictMode = a, t.Suspense = c, t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = U, t.cloneElement = function(e, t, r) {
                if (null == e) throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + e + ".");
                var s = h({}, e.props),
                    a = e.key,
                    o = e.ref,
                    i = e._owner;
                if (null != t) {
                    if (void 0 !== t.ref && (o = t.ref, i = k.current), void 0 !== t.key && (a = "" + t.key), e.type && e.type.defaultProps) var l = e.type.defaultProps;
                    for (u in t) w.call(t, u) && !S.hasOwnProperty(u) && (s[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
                }
                var u = arguments.length - 2;
                if (1 === u) s.children = r;
                else if (1 < u) {
                    l = Array(u);
                    for (var c = 0; c < u; c++) l[c] = arguments[c + 2];
                    s.children = l
                }
                return {
                    $$typeof: n,
                    type: e.type,
                    key: a,
                    ref: o,
                    props: s,
                    _owner: i
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
                    $$typeof: i,
                    _context: e
                }, e.Consumer = e
            }, t.createElement = _, t.createFactory = function(e) {
                var t = _.bind(null, e);
                return t.type = e, t
            }, t.createRef = function() {
                return {
                    current: null
                }
            }, t.forwardRef = function(e) {
                return {
                    $$typeof: u,
                    render: e
                }
            }, t.isValidElement = C, t.lazy = function(e) {
                return {
                    $$typeof: d,
                    _payload: {
                        _status: -1,
                        _result: e
                    },
                    _init: P
                }
            }, t.memo = function(e, t) {
                return {
                    $$typeof: p,
                    type: e,
                    compare: void 0 === t ? null : t
                }
            }, t.startTransition = function(e) {
                var t = j.transition;
                j.transition = {};
                try {
                    e()
                } finally {
                    j.transition = t
                }
            }, t.unstable_act = function() {
                throw Error("act(...) is not supported in production builds of React.")
            }, t.useCallback = function(e, t) {
                return M.current.useCallback(e, t)
            }, t.useContext = function(e) {
                return M.current.useContext(e)
            }, t.useDebugValue = function() {}, t.useDeferredValue = function(e) {
                return M.current.useDeferredValue(e)
            }, t.useEffect = function(e, t) {
                return M.current.useEffect(e, t)
            }, t.useId = function() {
                return M.current.useId()
            }, t.useImperativeHandle = function(e, t, n) {
                return M.current.useImperativeHandle(e, t, n)
            }, t.useInsertionEffect = function(e, t) {
                return M.current.useInsertionEffect(e, t)
            }, t.useLayoutEffect = function(e, t) {
                return M.current.useLayoutEffect(e, t)
            }, t.useMemo = function(e, t) {
                return M.current.useMemo(e, t)
            }, t.useReducer = function(e, t, n) {
                return M.current.useReducer(e, t, n)
            }, t.useRef = function(e) {
                return M.current.useRef(e)
            }, t.useState = function(e) {
                return M.current.useState(e)
            }, t.useSyncExternalStore = function(e, t, n) {
                return M.current.useSyncExternalStore(e, t, n)
            }, t.useTransition = function() {
                return M.current.useTransition()
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
        6952: (e, t, n) => {
            e.exports = n.p + "mp-core/chat.d95b7c8c8375f41cf073.svg"
        },
        20106: (e, t, n) => {
            e.exports = n.p + "mp-core/ping.66af2694e1280aa7a6ab.mp3"
        }
    }
]);