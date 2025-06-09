/*! For license information please see 8853.dd37c6d6d0f63f3bb13c.bundle.js.LICENSE.txt */
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [8853], {
        11227: (e, t, n) => {
            var r = n(25108),
                i = n(34155);
            t.formatArgs = function(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                const n = "color: " + this.color;
                t.splice(1, 0, n, "color: inherit");
                let r = 0,
                    i = 0;
                t[0].replace(/%[a-zA-Z%]/g, (e => {
                    "%%" !== e && (r++, "%c" === e && (i = r))
                })), t.splice(i, 0, n)
            }, t.save = function(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (e) {}
            }, t.load = function() {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (e) {}
                return !e && void 0 !== i && "env" in i && (e = i.env.DEBUG), e
            }, t.useColors = function() {
                return !("undefined" == typeof window || !window.process || "renderer" !== window.process.type && !window.process.__nwjs) || ("undefined" == typeof navigator || !navigator.userAgent || !navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && ("undefined" != typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" != typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || "undefined" != typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
            }, t.storage = function() {
                try {
                    return localStorage
                } catch (e) {}
            }(), t.destroy = (() => {
                let e = !1;
                return () => {
                    e || (e = !0, r.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }
            })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = r.debug || r.log || (() => {}), e.exports = n(82447)(t);
            const {
                formatters: s
            } = e.exports;
            s.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (e) {
                    return "[UnexpectedJSONParseError]: " + e.message
                }
            }
        },
        82447: (e, t, n) => {
            var r = n(25108);
            e.exports = function(e) {
                function t(e) {
                    let n, r, s, o = null;

                    function a(...e) {
                        if (!a.enabled) return;
                        const r = a,
                            i = Number(new Date),
                            s = i - (n || i);
                        r.diff = s, r.prev = n, r.curr = i, n = i, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                        let o = 0;
                        e[0] = e[0].replace(/%([a-zA-Z%])/g, ((n, i) => {
                            if ("%%" === n) return "%";
                            o++;
                            const s = t.formatters[i];
                            if ("function" == typeof s) {
                                const t = e[o];
                                n = s.call(r, t), e.splice(o, 1), o--
                            }
                            return n
                        })), t.formatArgs.call(r, e), (r.log || t.log).apply(r, e)
                    }
                    return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = i, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                        enumerable: !0,
                        configurable: !1,
                        get: () => null !== o ? o : (r !== t.namespaces && (r = t.namespaces, s = t.enabled(e)), s),
                        set: e => {
                            o = e
                        }
                    }), "function" == typeof t.init && t.init(a), a
                }

                function i(e, n) {
                    const r = t(this.namespace + (void 0 === n ? ":" : n) + e);
                    return r.log = this.log, r
                }

                function s(e) {
                    return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                }
                return t.debug = t, t.default = t, t.coerce = function(e) {
                    return e instanceof Error ? e.stack || e.message : e
                }, t.disable = function() {
                    const e = [...t.names.map(s), ...t.skips.map(s).map((e => "-" + e))].join(",");
                    return t.enable(""), e
                }, t.enable = function(e) {
                    let n;
                    t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                    const r = ("string" == typeof e ? e : "").split(/[\s,]+/),
                        i = r.length;
                    for (n = 0; n < i; n++) r[n] && ("-" === (e = r[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
                }, t.enabled = function(e) {
                    if ("*" === e[e.length - 1]) return !0;
                    let n, r;
                    for (n = 0, r = t.skips.length; n < r; n++)
                        if (t.skips[n].test(e)) return !1;
                    for (n = 0, r = t.names.length; n < r; n++)
                        if (t.names[n].test(e)) return !0;
                    return !1
                }, t.humanize = n(57824), t.destroy = function() {
                    r.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                }, Object.keys(e).forEach((n => {
                    t[n] = e[n]
                })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                    let n = 0;
                    for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                    return t.colors[Math.abs(n) % t.colors.length]
                }, t.enable(t.load()), t
            }
        },
        32114: e => {
            "use strict";

            function t(e, t) {
                for (const n in t) Object.defineProperty(e, n, {
                    value: t[n],
                    enumerable: !0,
                    configurable: !0
                });
                return e
            }
            e.exports = function(e, n, r) {
                if (!e || "string" == typeof e) throw new TypeError("Please pass an Error to err-code");
                r || (r = {}), "object" == typeof n && (r = n, n = ""), n && (r.code = n);
                try {
                    return t(e, r)
                } catch (n) {
                    r.message = e.message, r.stack = e.stack;
                    const i = function() {};
                    return i.prototype = Object.create(Object.getPrototypeOf(e)), t(new i, r)
                }
            }
        },
        17187: (e, t, n) => {
            "use strict";
            var r, i = n(25108),
                s = "object" == typeof Reflect ? Reflect : null,
                o = s && "function" == typeof s.apply ? s.apply : function(e, t, n) {
                    return Function.prototype.apply.call(e, t, n)
                };
            r = s && "function" == typeof s.ownKeys ? s.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
            } : function(e) {
                return Object.getOwnPropertyNames(e)
            };
            var a = Number.isNaN || function(e) {
                return e != e
            };

            function l() {
                l.init.call(this)
            }
            e.exports = l, e.exports.once = function(e, t) {
                return new Promise((function(n, r) {
                    function i(n) {
                        e.removeListener(t, s), r(n)
                    }

                    function s() {
                        "function" == typeof e.removeListener && e.removeListener("error", i), n([].slice.call(arguments))
                    }
                    y(e, t, s, {
                        once: !0
                    }), "error" !== t && function(e, t, n) {
                        "function" == typeof e.on && y(e, "error", t, {
                            once: !0
                        })
                    }(e, i)
                }))
            }, l.EventEmitter = l, l.prototype._events = void 0, l.prototype._eventsCount = 0, l.prototype._maxListeners = void 0;
            var h = 10;

            function c(e) {
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function d(e) {
                return void 0 === e._maxListeners ? l.defaultMaxListeners : e._maxListeners
            }

            function u(e, t, n, r) {
                var s, o, a, l;
                if (c(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), a = o[t]), void 0 === a) a = o[t] = n, ++e._eventsCount;
                else if ("function" == typeof a ? a = o[t] = r ? [n, a] : [a, n] : r ? a.unshift(n) : a.push(n), (s = d(e)) > 0 && a.length > s && !a.warned) {
                    a.warned = !0;
                    var h = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    h.name = "MaxListenersExceededWarning", h.emitter = e, h.type = t, h.count = a.length, l = h, i && i.warn && i.warn(l)
                }
                return e
            }

            function f() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function p(e, t, n) {
                var r = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: n
                    },
                    i = f.bind(r);
                return i.listener = n, r.wrapFn = i, i
            }

            function g(e, t, n) {
                var r = e._events;
                if (void 0 === r) return [];
                var i = r[t];
                return void 0 === i ? [] : "function" == typeof i ? n ? [i.listener || i] : [i] : n ? function(e) {
                    for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                    return t
                }(i) : b(i, i.length)
            }

            function _(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var n = t[e];
                    if ("function" == typeof n) return 1;
                    if (void 0 !== n) return n.length
                }
                return 0
            }

            function b(e, t) {
                for (var n = new Array(t), r = 0; r < t; ++r) n[r] = e[r];
                return n
            }

            function y(e, t, n, r) {
                if ("function" == typeof e.on) r.once ? e.once(t, n) : e.on(t, n);
                else {
                    if ("function" != typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                    e.addEventListener(t, (function i(s) {
                        r.once && e.removeEventListener(t, i), n(s)
                    }))
                }
            }
            Object.defineProperty(l, "defaultMaxListeners", {
                enumerable: !0,
                get: function() {
                    return h
                },
                set: function(e) {
                    if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                    h = e
                }
            }), l.init = function() {
                void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
            }, l.prototype.setMaxListeners = function(e) {
                if ("number" != typeof e || e < 0 || a(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                return this._maxListeners = e, this
            }, l.prototype.getMaxListeners = function() {
                return d(this)
            }, l.prototype.emit = function(e) {
                for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
                var r = "error" === e,
                    i = this._events;
                if (void 0 !== i) r = r && void 0 === i.error;
                else if (!r) return !1;
                if (r) {
                    var s;
                    if (t.length > 0 && (s = t[0]), s instanceof Error) throw s;
                    var a = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
                    throw a.context = s, a
                }
                var l = i[e];
                if (void 0 === l) return !1;
                if ("function" == typeof l) o(l, this, t);
                else {
                    var h = l.length,
                        c = b(l, h);
                    for (n = 0; n < h; ++n) o(c[n], this, t)
                }
                return !0
            }, l.prototype.addListener = function(e, t) {
                return u(this, e, t, !1)
            }, l.prototype.on = l.prototype.addListener, l.prototype.prependListener = function(e, t) {
                return u(this, e, t, !0)
            }, l.prototype.once = function(e, t) {
                return c(t), this.on(e, p(this, e, t)), this
            }, l.prototype.prependOnceListener = function(e, t) {
                return c(t), this.prependListener(e, p(this, e, t)), this
            }, l.prototype.removeListener = function(e, t) {
                var n, r, i, s, o;
                if (c(t), void 0 === (r = this._events)) return this;
                if (void 0 === (n = r[e])) return this;
                if (n === t || n.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete r[e], r.removeListener && this.emit("removeListener", e, n.listener || t));
                else if ("function" != typeof n) {
                    for (i = -1, s = n.length - 1; s >= 0; s--)
                        if (n[s] === t || n[s].listener === t) {
                            o = n[s].listener, i = s;
                            break
                        } if (i < 0) return this;
                    0 === i ? n.shift() : function(e, t) {
                        for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                        e.pop()
                    }(n, i), 1 === n.length && (r[e] = n[0]), void 0 !== r.removeListener && this.emit("removeListener", e, o || t)
                }
                return this
            }, l.prototype.off = l.prototype.removeListener, l.prototype.removeAllListeners = function(e) {
                var t, n, r;
                if (void 0 === (n = this._events)) return this;
                if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
                if (0 === arguments.length) {
                    var i, s = Object.keys(n);
                    for (r = 0; r < s.length; ++r) "removeListener" !== (i = s[r]) && this.removeAllListeners(i);
                    return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                }
                if ("function" == typeof(t = n[e])) this.removeListener(e, t);
                else if (void 0 !== t)
                    for (r = t.length - 1; r >= 0; r--) this.removeListener(e, t[r]);
                return this
            }, l.prototype.listeners = function(e) {
                return g(this, e, !0)
            }, l.prototype.rawListeners = function(e) {
                return g(this, e, !1)
            }, l.listenerCount = function(e, t) {
                return "function" == typeof e.listenerCount ? e.listenerCount(t) : _.call(e, t)
            }, l.prototype.listenerCount = _, l.prototype.eventNames = function() {
                return this._eventsCount > 0 ? r(this._events) : []
            }
        },
        5177: e => {
            e.exports = function() {
                if ("undefined" == typeof globalThis) return null;
                var e = {
                    RTCPeerConnection: globalThis.RTCPeerConnection || globalThis.mozRTCPeerConnection || globalThis.webkitRTCPeerConnection,
                    RTCSessionDescription: globalThis.RTCSessionDescription || globalThis.mozRTCSessionDescription || globalThis.webkitRTCSessionDescription,
                    RTCIceCandidate: globalThis.RTCIceCandidate || globalThis.mozRTCIceCandidate || globalThis.webkitRTCIceCandidate
                };
                return e.RTCPeerConnection ? e : null
            }
        },
        57824: e => {
            var t = 1e3,
                n = 60 * t,
                r = 60 * n,
                i = 24 * r;

            function s(e, t, n, r) {
                var i = t >= 1.5 * n;
                return Math.round(e / n) + " " + r + (i ? "s" : "")
            }
            e.exports = function(e, o) {
                o = o || {};
                var a, l, h = typeof e;
                if ("string" === h && e.length > 0) return function(e) {
                    if (!((e = String(e)).length > 100)) {
                        var s = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                        if (s) {
                            var o = parseFloat(s[1]);
                            switch ((s[2] || "ms").toLowerCase()) {
                                case "years":
                                case "year":
                                case "yrs":
                                case "yr":
                                case "y":
                                    return 315576e5 * o;
                                case "weeks":
                                case "week":
                                case "w":
                                    return 6048e5 * o;
                                case "days":
                                case "day":
                                case "d":
                                    return o * i;
                                case "hours":
                                case "hour":
                                case "hrs":
                                case "hr":
                                case "h":
                                    return o * r;
                                case "minutes":
                                case "minute":
                                case "mins":
                                case "min":
                                case "m":
                                    return o * n;
                                case "seconds":
                                case "second":
                                case "secs":
                                case "sec":
                                case "s":
                                    return o * t;
                                case "milliseconds":
                                case "millisecond":
                                case "msecs":
                                case "msec":
                                case "ms":
                                    return o;
                                default:
                                    return
                            }
                        }
                    }
                }(e);
                if ("number" === h && isFinite(e)) return o.long ? (a = e, (l = Math.abs(a)) >= i ? s(a, l, i, "day") : l >= r ? s(a, l, r, "hour") : l >= n ? s(a, l, n, "minute") : l >= t ? s(a, l, t, "second") : a + " ms") : function(e) {
                    var s = Math.abs(e);
                    return s >= i ? Math.round(e / i) + "d" : s >= r ? Math.round(e / r) + "h" : s >= n ? Math.round(e / n) + "m" : s >= t ? Math.round(e / t) + "s" : e + "ms"
                }(e);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
            }
        },
        54375: (e, t, n) => {
            let r;
            e.exports = "function" == typeof queueMicrotask ? queueMicrotask.bind("undefined" != typeof window ? window : n.g) : e => (r || (r = Promise.resolve())).then(e).catch((e => setTimeout((() => {
                throw e
            }), 0)))
        },
        61798: (e, t, n) => {
            "use strict";
            var r = n(34155),
                i = 65536,
                s = n(89509).Buffer,
                o = n.g.crypto || n.g.msCrypto;
            o && o.getRandomValues ? e.exports = function(e, t) {
                if (e > 4294967295) throw new RangeError("requested too many random bytes");
                var n = s.allocUnsafe(e);
                if (e > 0)
                    if (e > i)
                        for (var a = 0; a < e; a += i) o.getRandomValues(n.slice(a, a + i));
                    else o.getRandomValues(n);
                return "function" == typeof t ? r.nextTick((function() {
                    t(null, n)
                })) : n
            } : e.exports = function() {
                throw new Error("Secure random number generation is not supported by this browser.\nUse Chrome, Firefox or Internet Explorer 11")
            }
        },
        94281: e => {
            "use strict";
            var t = {};

            function n(e, n, r) {
                r || (r = Error);
                var i = function(e) {
                    var t, r;

                    function i(t, r, i) {
                        return e.call(this, function(e, t, r) {
                            return "string" == typeof n ? n : n(e, t, r)
                        }(t, r, i)) || this
                    }
                    return r = e, (t = i).prototype = Object.create(r.prototype), t.prototype.constructor = t, t.__proto__ = r, i
                }(r);
                i.prototype.name = r.name, i.prototype.code = e, t[e] = i
            }

            function r(e, t) {
                if (Array.isArray(e)) {
                    var n = e.length;
                    return e = e.map((function(e) {
                        return String(e)
                    })), n > 2 ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : 2 === n ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
                }
                return "of ".concat(t, " ").concat(String(e))
            }
            n("ERR_INVALID_OPT_VALUE", (function(e, t) {
                return 'The value "' + t + '" is invalid for option "' + e + '"'
            }), TypeError), n("ERR_INVALID_ARG_TYPE", (function(e, t, n) {
                var i, s, o, a, l;
                if ("string" == typeof t && (s = "not ", t.substr(0, s.length) === s) ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be", function(e, t, n) {
                        return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t
                    }(e, " argument")) o = "The ".concat(e, " ").concat(i, " ").concat(r(t, "type"));
                else {
                    var h = ("number" != typeof l && (l = 0), l + ".".length > (a = e).length || -1 === a.indexOf(".", l) ? "argument" : "property");
                    o = 'The "'.concat(e, '" ').concat(h, " ").concat(i, " ").concat(r(t, "type"))
                }
                return o + ". Received type ".concat(typeof n)
            }), TypeError), n("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF"), n("ERR_METHOD_NOT_IMPLEMENTED", (function(e) {
                return "The " + e + " method is not implemented"
            })), n("ERR_STREAM_PREMATURE_CLOSE", "Premature close"), n("ERR_STREAM_DESTROYED", (function(e) {
                return "Cannot call " + e + " after a stream was destroyed"
            })), n("ERR_MULTIPLE_CALLBACK", "Callback called multiple times"), n("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable"), n("ERR_STREAM_WRITE_AFTER_END", "write after end"), n("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), n("ERR_UNKNOWN_ENCODING", (function(e) {
                return "Unknown encoding: " + e
            }), TypeError), n("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event"), e.exports.q = t
        },
        56753: (e, t, n) => {
            "use strict";
            var r = n(34155),
                i = Object.keys || function(e) {
                    var t = [];
                    for (var n in e) t.push(n);
                    return t
                };
            e.exports = c;
            var s = n(79481),
                o = n(64229);
            n(35717)(c, s);
            for (var a = i(o.prototype), l = 0; l < a.length; l++) {
                var h = a[l];
                c.prototype[h] || (c.prototype[h] = o.prototype[h])
            }

            function c(e) {
                if (!(this instanceof c)) return new c(e);
                s.call(this, e), o.call(this, e), this.allowHalfOpen = !0, e && (!1 === e.readable && (this.readable = !1), !1 === e.writable && (this.writable = !1), !1 === e.allowHalfOpen && (this.allowHalfOpen = !1, this.once("end", d)))
            }

            function d() {
                this._writableState.ended || r.nextTick(u, this)
            }

            function u(e) {
                e.end()
            }
            Object.defineProperty(c.prototype, "writableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._writableState.highWaterMark
                }
            }), Object.defineProperty(c.prototype, "writableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._writableState && this._writableState.getBuffer()
                }
            }), Object.defineProperty(c.prototype, "writableLength", {
                enumerable: !1,
                get: function() {
                    return this._writableState.length
                }
            }), Object.defineProperty(c.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                },
                set: function(e) {
                    void 0 !== this._readableState && void 0 !== this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                }
            })
        },
        82725: (e, t, n) => {
            "use strict";
            e.exports = i;
            var r = n(74605);

            function i(e) {
                if (!(this instanceof i)) return new i(e);
                r.call(this, e)
            }
            n(35717)(i, r), i.prototype._transform = function(e, t, n) {
                n(null, e)
            }
        },
        79481: (e, t, n) => {
            "use strict";
            var r, i = n(34155);
            e.exports = S, S.ReadableState = R, n(17187).EventEmitter;
            var s, o = function(e, t) {
                    return e.listeners(t).length
                },
                a = n(22503),
                l = n(48764).Buffer,
                h = n.g.Uint8Array || function() {},
                c = n(94616);
            s = c && c.debuglog ? c.debuglog("stream") : function() {};
            var d, u, f, p = n(57327),
                g = n(61195),
                _ = n(82457).getHighWaterMark,
                b = n(94281).q,
                y = b.ERR_INVALID_ARG_TYPE,
                m = b.ERR_STREAM_PUSH_AFTER_EOF,
                v = b.ERR_METHOD_NOT_IMPLEMENTED,
                w = b.ERR_STREAM_UNSHIFT_AFTER_END_EVENT;
            n(35717)(S, a);
            var C = g.errorOrDestroy,
                E = ["error", "close", "destroy", "pause", "resume"];

            function R(e, t, i) {
                r = r || n(56753), e = e || {}, "boolean" != typeof i && (i = t instanceof r), this.objectMode = !!e.objectMode, i && (this.objectMode = this.objectMode || !!e.readableObjectMode), this.highWaterMark = _(this, e, "readableHighWaterMark", i), this.buffer = new p, this.length = 0, this.pipes = null, this.pipesCount = 0, this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this.paused = !0, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.destroyed = !1, this.defaultEncoding = e.defaultEncoding || "utf8", this.awaitDrain = 0, this.readingMore = !1, this.decoder = null, this.encoding = null, e.encoding && (d || (d = n(32553).s), this.decoder = new d(e.encoding), this.encoding = e.encoding)
            }

            function S(e) {
                if (r = r || n(56753), !(this instanceof S)) return new S(e);
                var t = this instanceof r;
                this._readableState = new R(e, this, t), this.readable = !0, e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy)), a.call(this)
            }

            function T(e, t, n, r, i) {
                s("readableAddChunk", t);
                var o, a = e._readableState;
                if (null === t) a.reading = !1,
                    function(e, t) {
                        if (s("onEofChunk"), !t.ended) {
                            if (t.decoder) {
                                var n = t.decoder.end();
                                n && n.length && (t.buffer.push(n), t.length += t.objectMode ? 1 : n.length)
                            }
                            t.ended = !0, t.sync ? O(e) : (t.needReadable = !1, t.emittedReadable || (t.emittedReadable = !0, L(e)))
                        }
                    }(e, a);
                else if (i || (o = function(e, t) {
                        var n, r;
                        return r = t, l.isBuffer(r) || r instanceof h || "string" == typeof t || void 0 === t || e.objectMode || (n = new y("chunk", ["string", "Buffer", "Uint8Array"], t)), n
                    }(a, t)), o) C(e, o);
                else if (a.objectMode || t && t.length > 0)
                    if ("string" == typeof t || a.objectMode || Object.getPrototypeOf(t) === l.prototype || (t = function(e) {
                            return l.from(e)
                        }(t)), r) a.endEmitted ? C(e, new w) : k(e, a, t, !0);
                    else if (a.ended) C(e, new m);
                else {
                    if (a.destroyed) return !1;
                    a.reading = !1, a.decoder && !n ? (t = a.decoder.write(t), a.objectMode || 0 !== t.length ? k(e, a, t, !1) : M(e, a)) : k(e, a, t, !1)
                } else r || (a.reading = !1, M(e, a));
                return !a.ended && (a.length < a.highWaterMark || 0 === a.length)
            }

            function k(e, t, n, r) {
                t.flowing && 0 === t.length && !t.sync ? (t.awaitDrain = 0, e.emit("data", n)) : (t.length += t.objectMode ? 1 : n.length, r ? t.buffer.unshift(n) : t.buffer.push(n), t.needReadable && O(e)), M(e, t)
            }
            Object.defineProperty(S.prototype, "destroyed", {
                enumerable: !1,
                get: function() {
                    return void 0 !== this._readableState && this._readableState.destroyed
                },
                set: function(e) {
                    this._readableState && (this._readableState.destroyed = e)
                }
            }), S.prototype.destroy = g.destroy, S.prototype._undestroy = g.undestroy, S.prototype._destroy = function(e, t) {
                t(e)
            }, S.prototype.push = function(e, t) {
                var n, r = this._readableState;
                return r.objectMode ? n = !0 : "string" == typeof e && ((t = t || r.defaultEncoding) !== r.encoding && (e = l.from(e, t), t = ""), n = !0), T(this, e, t, !1, n)
            }, S.prototype.unshift = function(e) {
                return T(this, e, null, !0, !1)
            }, S.prototype.isPaused = function() {
                return !1 === this._readableState.flowing
            }, S.prototype.setEncoding = function(e) {
                d || (d = n(32553).s);
                var t = new d(e);
                this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                for (var r = this._readableState.buffer.head, i = ""; null !== r;) i += t.write(r.data), r = r.next;
                return this._readableState.buffer.clear(), "" !== i && this._readableState.buffer.push(i), this._readableState.length = i.length, this
            };
            var A = 1073741824;

            function N(e, t) {
                return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : e != e ? t.flowing && t.length ? t.buffer.head.data.length : t.length : (e > t.highWaterMark && (t.highWaterMark = function(e) {
                    return e >= A ? e = A : (e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, e++), e
                }(e)), e <= t.length ? e : t.ended ? t.length : (t.needReadable = !0, 0))
            }

            function O(e) {
                var t = e._readableState;
                s("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (s("emitReadable", t.flowing), t.emittedReadable = !0, i.nextTick(L, e))
            }

            function L(e) {
                var t = e._readableState;
                s("emitReadable_", t.destroyed, t.length, t.ended), t.destroyed || !t.length && !t.ended || (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, I(e)
            }

            function M(e, t) {
                t.readingMore || (t.readingMore = !0, i.nextTick(D, e, t))
            }

            function D(e, t) {
                for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                    var n = t.length;
                    if (s("maybeReadMore read 0"), e.read(0), n === t.length) break
                }
                t.readingMore = !1
            }

            function x(e) {
                var t = e._readableState;
                t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !t.paused ? t.flowing = !0 : e.listenerCount("data") > 0 && e.resume()
            }

            function P(e) {
                s("readable nexttick read 0"), e.read(0)
            }

            function F(e, t) {
                s("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), I(e), t.flowing && !t.reading && e.read(0)
            }

            function I(e) {
                var t = e._readableState;
                for (s("flow", t.flowing); t.flowing && null !== e.read(););
            }

            function j(e, t) {
                return 0 === t.length ? null : (t.objectMode ? n = t.buffer.shift() : !e || e >= t.length ? (n = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : n = t.buffer.consume(e, t.decoder), n);
                var n
            }

            function q(e) {
                var t = e._readableState;
                s("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, i.nextTick(B, t, e))
            }

            function B(e, t) {
                if (s("endReadableNT", e.endEmitted, e.length), !e.endEmitted && 0 === e.length && (e.endEmitted = !0, t.readable = !1, t.emit("end"), e.autoDestroy)) {
                    var n = t._writableState;
                    (!n || n.autoDestroy && n.finished) && t.destroy()
                }
            }

            function U(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t) return n;
                return -1
            }
            S.prototype.read = function(e) {
                s("read", e), e = parseInt(e, 10);
                var t = this._readableState,
                    n = e;
                if (0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return s("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? q(this) : O(this), null;
                if (0 === (e = N(e, t)) && t.ended) return 0 === t.length && q(this), null;
                var r, i = t.needReadable;
                return s("need readable", i), (0 === t.length || t.length - e < t.highWaterMark) && s("length less than watermark", i = !0), t.ended || t.reading ? s("reading or ended", i = !1) : i && (s("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0), this._read(t.highWaterMark), t.sync = !1, t.reading || (e = N(n, t))), null === (r = e > 0 ? j(e, t) : null) ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.awaitDrain = 0), 0 === t.length && (t.ended || (t.needReadable = !0), n !== e && t.ended && q(this)), null !== r && this.emit("data", r), r
            }, S.prototype._read = function(e) {
                C(this, new v("_read()"))
            }, S.prototype.pipe = function(e, t) {
                var n = this,
                    r = this._readableState;
                switch (r.pipesCount) {
                    case 0:
                        r.pipes = e;
                        break;
                    case 1:
                        r.pipes = [r.pipes, e];
                        break;
                    default:
                        r.pipes.push(e)
                }
                r.pipesCount += 1, s("pipe count=%d opts=%j", r.pipesCount, t);
                var a = t && !1 === t.end || e === i.stdout || e === i.stderr ? g : l;

                function l() {
                    s("onend"), e.end()
                }
                r.endEmitted ? i.nextTick(a) : n.once("end", a), e.on("unpipe", (function t(i, o) {
                    s("onunpipe"), i === n && o && !1 === o.hasUnpiped && (o.hasUnpiped = !0, s("cleanup"), e.removeListener("close", f), e.removeListener("finish", p), e.removeListener("drain", h), e.removeListener("error", u), e.removeListener("unpipe", t), n.removeListener("end", l), n.removeListener("end", g), n.removeListener("data", d), c = !0, !r.awaitDrain || e._writableState && !e._writableState.needDrain || h())
                }));
                var h = function(e) {
                    return function() {
                        var t = e._readableState;
                        s("pipeOnDrain", t.awaitDrain), t.awaitDrain && t.awaitDrain--, 0 === t.awaitDrain && o(e, "data") && (t.flowing = !0, I(e))
                    }
                }(n);
                e.on("drain", h);
                var c = !1;

                function d(t) {
                    s("ondata");
                    var i = e.write(t);
                    s("dest.write", i), !1 === i && ((1 === r.pipesCount && r.pipes === e || r.pipesCount > 1 && -1 !== U(r.pipes, e)) && !c && (s("false write response, pause", r.awaitDrain), r.awaitDrain++), n.pause())
                }

                function u(t) {
                    s("onerror", t), g(), e.removeListener("error", u), 0 === o(e, "error") && C(e, t)
                }

                function f() {
                    e.removeListener("finish", p), g()
                }

                function p() {
                    s("onfinish"), e.removeListener("close", f), g()
                }

                function g() {
                    s("unpipe"), n.unpipe(e)
                }
                return n.on("data", d),
                    function(e, t, n) {
                        if ("function" == typeof e.prependListener) return e.prependListener(t, n);
                        e._events && e._events.error ? Array.isArray(e._events.error) ? e._events.error.unshift(n) : e._events.error = [n, e._events.error] : e.on(t, n)
                    }(e, "error", u), e.once("close", f), e.once("finish", p), e.emit("pipe", n), r.flowing || (s("pipe resume"), n.resume()), e
            }, S.prototype.unpipe = function(e) {
                var t = this._readableState,
                    n = {
                        hasUnpiped: !1
                    };
                if (0 === t.pipesCount) return this;
                if (1 === t.pipesCount) return e && e !== t.pipes || (e || (e = t.pipes), t.pipes = null, t.pipesCount = 0, t.flowing = !1, e && e.emit("unpipe", this, n)), this;
                if (!e) {
                    var r = t.pipes,
                        i = t.pipesCount;
                    t.pipes = null, t.pipesCount = 0, t.flowing = !1;
                    for (var s = 0; s < i; s++) r[s].emit("unpipe", this, {
                        hasUnpiped: !1
                    });
                    return this
                }
                var o = U(t.pipes, e);
                return -1 === o || (t.pipes.splice(o, 1), t.pipesCount -= 1, 1 === t.pipesCount && (t.pipes = t.pipes[0]), e.emit("unpipe", this, n)), this
            }, S.prototype.on = function(e, t) {
                var n = a.prototype.on.call(this, e, t),
                    r = this._readableState;
                return "data" === e ? (r.readableListening = this.listenerCount("readable") > 0, !1 !== r.flowing && this.resume()) : "readable" === e && (r.endEmitted || r.readableListening || (r.readableListening = r.needReadable = !0, r.flowing = !1, r.emittedReadable = !1, s("on readable", r.length, r.reading), r.length ? O(this) : r.reading || i.nextTick(P, this))), n
            }, S.prototype.addListener = S.prototype.on, S.prototype.removeListener = function(e, t) {
                var n = a.prototype.removeListener.call(this, e, t);
                return "readable" === e && i.nextTick(x, this), n
            }, S.prototype.removeAllListeners = function(e) {
                var t = a.prototype.removeAllListeners.apply(this, arguments);
                return "readable" !== e && void 0 !== e || i.nextTick(x, this), t
            }, S.prototype.resume = function() {
                var e = this._readableState;
                return e.flowing || (s("resume"), e.flowing = !e.readableListening, function(e, t) {
                    t.resumeScheduled || (t.resumeScheduled = !0, i.nextTick(F, e, t))
                }(this, e)), e.paused = !1, this
            }, S.prototype.pause = function() {
                return s("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (s("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState.paused = !0, this
            }, S.prototype.wrap = function(e) {
                var t = this,
                    n = this._readableState,
                    r = !1;
                for (var i in e.on("end", (function() {
                        if (s("wrapped end"), n.decoder && !n.ended) {
                            var e = n.decoder.end();
                            e && e.length && t.push(e)
                        }
                        t.push(null)
                    })), e.on("data", (function(i) {
                        s("wrapped data"), n.decoder && (i = n.decoder.write(i)), n.objectMode && null == i || (n.objectMode || i && i.length) && (t.push(i) || (r = !0, e.pause()))
                    })), e) void 0 === this[i] && "function" == typeof e[i] && (this[i] = function(t) {
                    return function() {
                        return e[t].apply(e, arguments)
                    }
                }(i));
                for (var o = 0; o < E.length; o++) e.on(E[o], this.emit.bind(this, E[o]));
                return this._read = function(t) {
                    s("wrapped _read", t), r && (r = !1, e.resume())
                }, this
            }, "function" == typeof Symbol && (S.prototype[Symbol.asyncIterator] = function() {
                return void 0 === u && (u = n(45850)), u(this)
            }), Object.defineProperty(S.prototype, "readableHighWaterMark", {
                enumerable: !1,
                get: function() {
                    return this._readableState.highWaterMark
                }
            }), Object.defineProperty(S.prototype, "readableBuffer", {
                enumerable: !1,
                get: function() {
                    return this._readableState && this._readableState.buffer
                }
            }), Object.defineProperty(S.prototype, "readableFlowing", {
                enumerable: !1,
                get: function() {
                    return this._readableState.flowing
                },
                set: function(e) {
                    this._readableState && (this._readableState.flowing = e)
                }
            }), S._fromList = j, Object.defineProperty(S.prototype, "readableLength", {
                enumerable: !1,
                get: function() {
                    return this._readableState.length
                }
            }), "function" == typeof Symbol && (S.from = function(e, t) {
                return void 0 === f && (f = n(15167)), f(S, e, t)
            })
        },
        74605: (e, t, n) => {
            "use strict";
            e.exports = c;
            var r = n(94281).q,
                i = r.ERR_METHOD_NOT_IMPLEMENTED,
                s = r.ERR_MULTIPLE_CALLBACK,
                o = r.ERR_TRANSFORM_ALREADY_TRANSFORMING,
                a = r.ERR_TRANSFORM_WITH_LENGTH_0,
                l = n(56753);

            function h(e, t) {
                var n = this._transformState;
                n.transforming = !1;
                var r = n.writecb;
                if (null === r) return this.emit("error", new s);
                n.writechunk = null, n.writecb = null, null != t && this.push(t), r(e);
                var i = this._readableState;
                i.reading = !1, (i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
            }

            function c(e) {
                if (!(this instanceof c)) return new c(e);
                l.call(this, e), this._transformState = {
                    afterTransform: h.bind(this),
                    needTransform: !1,
                    transforming: !1,
                    writecb: null,
                    writechunk: null,
                    writeencoding: null
                }, this._readableState.needReadable = !0, this._readableState.sync = !1, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", d)
            }

            function d() {
                var e = this;
                "function" != typeof this._flush || this._readableState.destroyed ? u(this, null, null) : this._flush((function(t, n) {
                    u(e, t, n)
                }))
            }

            function u(e, t, n) {
                if (t) return e.emit("error", t);
                if (null != n && e.push(n), e._writableState.length) throw new a;
                if (e._transformState.transforming) throw new o;
                return e.push(null)
            }
            n(35717)(c, l), c.prototype.push = function(e, t) {
                return this._transformState.needTransform = !1, l.prototype.push.call(this, e, t)
            }, c.prototype._transform = function(e, t, n) {
                n(new i("_transform()"))
            }, c.prototype._write = function(e, t, n) {
                var r = this._transformState;
                if (r.writecb = n, r.writechunk = e, r.writeencoding = t, !r.transforming) {
                    var i = this._readableState;
                    (r.needTransform || i.needReadable || i.length < i.highWaterMark) && this._read(i.highWaterMark)
                }
            }, c.prototype._read = function(e) {
                var t = this._transformState;
                null === t.writechunk || t.transforming ? t.needTransform = !0 : (t.transforming = !0, this._transform(t.writechunk, t.writeencoding, t.afterTransform))
            }, c.prototype._destroy = function(e, t) {
                l.prototype._destroy.call(this, e, (function(e) {
                    t(e)
                }))
            }
        },
        64229: (e, t, n) => {
            "use strict";
            var r, i = n(34155);

            function s(e) {
                var t = this;
                this.next = null, this.entry = null, this.finish = function() {
                    ! function(e, t, n) {
                        var r = e.entry;
                        for (e.entry = null; r;) {
                            var i = r.callback;
                            t.pendingcb--, i(undefined), r = r.next
                        }
                        t.corkedRequestsFree.next = e
                    }(t, e)
                }
            }
            e.exports = S, S.WritableState = R;
            var o, a = {
                    deprecate: n(94927)
                },
                l = n(22503),
                h = n(48764).Buffer,
                c = n.g.Uint8Array || function() {},
                d = n(61195),
                u = n(82457).getHighWaterMark,
                f = n(94281).q,
                p = f.ERR_INVALID_ARG_TYPE,
                g = f.ERR_METHOD_NOT_IMPLEMENTED,
                _ = f.ERR_MULTIPLE_CALLBACK,
                b = f.ERR_STREAM_CANNOT_PIPE,
                y = f.ERR_STREAM_DESTROYED,
                m = f.ERR_STREAM_NULL_VALUES,
                v = f.ERR_STREAM_WRITE_AFTER_END,
                w = f.ERR_UNKNOWN_ENCODING,
                C = d.errorOrDestroy;

            function E() {}

            function R(e, t, o) {
                r = r || n(56753), e = e || {}, "boolean" != typeof o && (o = t instanceof r), this.objectMode = !!e.objectMode, o && (this.objectMode = this.objectMode || !!e.writableObjectMode), this.highWaterMark = u(this, e, "writableHighWaterMark", o), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                var a = !1 === e.decodeStrings;
                this.decodeStrings = !a, this.defaultEncoding = e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = function(e) {
                    ! function(e, t) {
                        var n = e._writableState,
                            r = n.sync,
                            s = n.writecb;
                        if ("function" != typeof s) throw new _;
                        if (function(e) {
                                e.writing = !1, e.writecb = null, e.length -= e.writelen, e.writelen = 0
                            }(n), t) ! function(e, t, n, r, s) {
                            --t.pendingcb, n ? (i.nextTick(s, r), i.nextTick(L, e, t), e._writableState.errorEmitted = !0, C(e, r)) : (s(r), e._writableState.errorEmitted = !0, C(e, r), L(e, t))
                        }(e, n, r, t, s);
                        else {
                            var o = N(n) || e.destroyed;
                            o || n.corked || n.bufferProcessing || !n.bufferedRequest || A(e, n), r ? i.nextTick(k, e, n, o, s) : k(e, n, o, s)
                        }
                    }(t, e)
                }, this.writecb = null, this.writelen = 0, this.bufferedRequest = null, this.lastBufferedRequest = null, this.pendingcb = 0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !1 !== e.emitClose, this.autoDestroy = !!e.autoDestroy, this.bufferedRequestCount = 0, this.corkedRequestsFree = new s(this)
            }

            function S(e) {
                var t = this instanceof(r = r || n(56753));
                if (!t && !o.call(S, this)) return new S(e);
                this._writableState = new R(e, this, t), this.writable = !0, e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final)), l.call(this)
            }

            function T(e, t, n, r, i, s, o) {
                t.writelen = r, t.writecb = o, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new y("write")) : n ? e._writev(i, t.onwrite) : e._write(i, s, t.onwrite), t.sync = !1
            }

            function k(e, t, n, r) {
                n || function(e, t) {
                    0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain"))
                }(e, t), t.pendingcb--, r(), L(e, t)
            }

            function A(e, t) {
                t.bufferProcessing = !0;
                var n = t.bufferedRequest;
                if (e._writev && n && n.next) {
                    var r = t.bufferedRequestCount,
                        i = new Array(r),
                        o = t.corkedRequestsFree;
                    o.entry = n;
                    for (var a = 0, l = !0; n;) i[a] = n, n.isBuf || (l = !1), n = n.next, a += 1;
                    i.allBuffers = l, T(e, t, !0, t.length, i, "", o.finish), t.pendingcb++, t.lastBufferedRequest = null, o.next ? (t.corkedRequestsFree = o.next, o.next = null) : t.corkedRequestsFree = new s(t), t.bufferedRequestCount = 0
                } else {
                    for (; n;) {
                        var h = n.chunk,
                            c = n.encoding,
                            d = n.callback;
                        if (T(e, t, !1, t.objectMode ? 1 : h.length, h, c, d), n = n.next, t.bufferedRequestCount--, t.writing) break
                    }
                    null === n && (t.lastBufferedRequest = null)
                }
                t.bufferedRequest = n, t.bufferProcessing = !1
            }

            function N(e) {
                return e.ending && 0 === e.length && null === e.bufferedRequest && !e.finished && !e.writing
            }

            function O(e, t) {
                e._final((function(n) {
                    t.pendingcb--, n && C(e, n), t.prefinished = !0, e.emit("prefinish"), L(e, t)
                }))
            }

            function L(e, t) {
                var n = N(t);
                if (n && (function(e, t) {
                        t.prefinished || t.finalCalled || ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.pendingcb++, t.finalCalled = !0, i.nextTick(O, e, t)))
                    }(e, t), 0 === t.pendingcb && (t.finished = !0, e.emit("finish"), t.autoDestroy))) {
                    var r = e._readableState;
                    (!r || r.autoDestroy && r.endEmitted) && e.destroy()
                }
                return n
            }
            n(35717)(S, l), R.prototype.getBuffer = function() {
                    for (var e = this.bufferedRequest, t = []; e;) t.push(e), e = e.next;
                    return t
                },
                function() {
                    try {
                        Object.defineProperty(R.prototype, "buffer", {
                            get: a.deprecate((function() {
                                return this.getBuffer()
                            }), "_writableState.buffer is deprecated. Use _writableState.getBuffer instead.", "DEP0003")
                        })
                    } catch (e) {}
                }(), "function" == typeof Symbol && Symbol.hasInstance && "function" == typeof Function.prototype[Symbol.hasInstance] ? (o = Function.prototype[Symbol.hasInstance], Object.defineProperty(S, Symbol.hasInstance, {
                    value: function(e) {
                        return !!o.call(this, e) || this === S && e && e._writableState instanceof R
                    }
                })) : o = function(e) {
                    return e instanceof this
                }, S.prototype.pipe = function() {
                    C(this, new b)
                }, S.prototype.write = function(e, t, n) {
                    var r, s = this._writableState,
                        o = !1,
                        a = !s.objectMode && (r = e, h.isBuffer(r) || r instanceof c);
                    return a && !h.isBuffer(e) && (e = function(e) {
                        return h.from(e)
                    }(e)), "function" == typeof t && (n = t, t = null), a ? t = "buffer" : t || (t = s.defaultEncoding), "function" != typeof n && (n = E), s.ending ? function(e, t) {
                        var n = new v;
                        C(e, n), i.nextTick(t, n)
                    }(this, n) : (a || function(e, t, n, r) {
                        var s;
                        return null === n ? s = new m : "string" == typeof n || t.objectMode || (s = new p("chunk", ["string", "Buffer"], n)), !s || (C(e, s), i.nextTick(r, s), !1)
                    }(this, s, e, n)) && (s.pendingcb++, o = function(e, t, n, r, i, s) {
                        if (!n) {
                            var o = function(e, t, n) {
                                return e.objectMode || !1 === e.decodeStrings || "string" != typeof t || (t = h.from(t, n)), t
                            }(t, r, i);
                            r !== o && (n = !0, i = "buffer", r = o)
                        }
                        var a = t.objectMode ? 1 : r.length;
                        t.length += a;
                        var l = t.length < t.highWaterMark;
                        if (l || (t.needDrain = !0), t.writing || t.corked) {
                            var c = t.lastBufferedRequest;
                            t.lastBufferedRequest = {
                                chunk: r,
                                encoding: i,
                                isBuf: n,
                                callback: s,
                                next: null
                            }, c ? c.next = t.lastBufferedRequest : t.bufferedRequest = t.lastBufferedRequest, t.bufferedRequestCount += 1
                        } else T(e, t, !1, a, r, i, s);
                        return l
                    }(this, s, a, e, t, n)), o
                }, S.prototype.cork = function() {
                    this._writableState.corked++
                }, S.prototype.uncork = function() {
                    var e = this._writableState;
                    e.corked && (e.corked--, e.writing || e.corked || e.bufferProcessing || !e.bufferedRequest || A(this, e))
                }, S.prototype.setDefaultEncoding = function(e) {
                    if ("string" == typeof e && (e = e.toLowerCase()), !(["hex", "utf8", "utf-8", "ascii", "binary", "base64", "ucs2", "ucs-2", "utf16le", "utf-16le", "raw"].indexOf((e + "").toLowerCase()) > -1)) throw new w(e);
                    return this._writableState.defaultEncoding = e, this
                }, Object.defineProperty(S.prototype, "writableBuffer", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState && this._writableState.getBuffer()
                    }
                }), Object.defineProperty(S.prototype, "writableHighWaterMark", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.highWaterMark
                    }
                }), S.prototype._write = function(e, t, n) {
                    n(new g("_write()"))
                }, S.prototype._writev = null, S.prototype.end = function(e, t, n) {
                    var r = this._writableState;
                    return "function" == typeof e ? (n = e, e = null, t = null) : "function" == typeof t && (n = t, t = null), null != e && this.write(e, t), r.corked && (r.corked = 1, this.uncork()), r.ending || function(e, t, n) {
                        t.ending = !0, L(e, t), n && (t.finished ? i.nextTick(n) : e.once("finish", n)), t.ended = !0, e.writable = !1
                    }(this, r, n), this
                }, Object.defineProperty(S.prototype, "writableLength", {
                    enumerable: !1,
                    get: function() {
                        return this._writableState.length
                    }
                }), Object.defineProperty(S.prototype, "destroyed", {
                    enumerable: !1,
                    get: function() {
                        return void 0 !== this._writableState && this._writableState.destroyed
                    },
                    set: function(e) {
                        this._writableState && (this._writableState.destroyed = e)
                    }
                }), S.prototype.destroy = d.destroy, S.prototype._undestroy = d.undestroy, S.prototype._destroy = function(e, t) {
                    t(e)
                }
        },
        45850: (e, t, n) => {
            "use strict";
            var r, i = n(34155);

            function s(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            var o = n(8610),
                a = Symbol("lastResolve"),
                l = Symbol("lastReject"),
                h = Symbol("error"),
                c = Symbol("ended"),
                d = Symbol("lastPromise"),
                u = Symbol("handlePromise"),
                f = Symbol("stream");

            function p(e, t) {
                return {
                    value: e,
                    done: t
                }
            }

            function g(e) {
                var t = e[a];
                if (null !== t) {
                    var n = e[f].read();
                    null !== n && (e[d] = null, e[a] = null, e[l] = null, t(p(n, !1)))
                }
            }

            function _(e) {
                i.nextTick(g, e)
            }
            var b = Object.getPrototypeOf((function() {})),
                y = Object.setPrototypeOf((s(r = {
                    get stream() {
                        return this[f]
                    },
                    next: function() {
                        var e = this,
                            t = this[h];
                        if (null !== t) return Promise.reject(t);
                        if (this[c]) return Promise.resolve(p(void 0, !0));
                        if (this[f].destroyed) return new Promise((function(t, n) {
                            i.nextTick((function() {
                                e[h] ? n(e[h]) : t(p(void 0, !0))
                            }))
                        }));
                        var n, r = this[d];
                        if (r) n = new Promise(function(e, t) {
                            return function(n, r) {
                                e.then((function() {
                                    t[c] ? n(p(void 0, !0)) : t[u](n, r)
                                }), r)
                            }
                        }(r, this));
                        else {
                            var s = this[f].read();
                            if (null !== s) return Promise.resolve(p(s, !1));
                            n = new Promise(this[u])
                        }
                        return this[d] = n, n
                    }
                }, Symbol.asyncIterator, (function() {
                    return this
                })), s(r, "return", (function() {
                    var e = this;
                    return new Promise((function(t, n) {
                        e[f].destroy(null, (function(e) {
                            e ? n(e) : t(p(void 0, !0))
                        }))
                    }))
                })), r), b);
            e.exports = function(e) {
                var t, n = Object.create(y, (s(t = {}, f, {
                    value: e,
                    writable: !0
                }), s(t, a, {
                    value: null,
                    writable: !0
                }), s(t, l, {
                    value: null,
                    writable: !0
                }), s(t, h, {
                    value: null,
                    writable: !0
                }), s(t, c, {
                    value: e._readableState.endEmitted,
                    writable: !0
                }), s(t, u, {
                    value: function(e, t) {
                        var r = n[f].read();
                        r ? (n[d] = null, n[a] = null, n[l] = null, e(p(r, !1))) : (n[a] = e, n[l] = t)
                    },
                    writable: !0
                }), t));
                return n[d] = null, o(e, (function(e) {
                    if (e && "ERR_STREAM_PREMATURE_CLOSE" !== e.code) {
                        var t = n[l];
                        return null !== t && (n[d] = null, n[a] = null, n[l] = null, t(e)), void(n[h] = e)
                    }
                    var r = n[a];
                    null !== r && (n[d] = null, n[a] = null, n[l] = null, r(p(void 0, !0))), n[c] = !0
                })), e.on("readable", _.bind(null, n)), n
            }
        },
        57327: (e, t, n) => {
            "use strict";

            function r(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }

            function s(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                }
            }
            var o = n(48764).Buffer,
                a = n(52361).inspect,
                l = a && a.custom || "inspect";
            e.exports = function() {
                function e() {
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), this.head = null, this.tail = null, this.length = 0
                }
                var t, n;
                return t = e, n = [{
                    key: "push",
                    value: function(e) {
                        var t = {
                            data: e,
                            next: null
                        };
                        this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                    }
                }, {
                    key: "unshift",
                    value: function(e) {
                        var t = {
                            data: e,
                            next: this.head
                        };
                        0 === this.length && (this.tail = t), this.head = t, ++this.length
                    }
                }, {
                    key: "shift",
                    value: function() {
                        if (0 !== this.length) {
                            var e = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                        }
                    }
                }, {
                    key: "clear",
                    value: function() {
                        this.head = this.tail = null, this.length = 0
                    }
                }, {
                    key: "join",
                    value: function(e) {
                        if (0 === this.length) return "";
                        for (var t = this.head, n = "" + t.data; t = t.next;) n += e + t.data;
                        return n
                    }
                }, {
                    key: "concat",
                    value: function(e) {
                        if (0 === this.length) return o.alloc(0);
                        for (var t, n, r, i = o.allocUnsafe(e >>> 0), s = this.head, a = 0; s;) t = s.data, n = i, r = a, o.prototype.copy.call(t, n, r), a += s.data.length, s = s.next;
                        return i
                    }
                }, {
                    key: "consume",
                    value: function(e, t) {
                        var n;
                        return e < this.head.data.length ? (n = this.head.data.slice(0, e), this.head.data = this.head.data.slice(e)) : n = e === this.head.data.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e), n
                    }
                }, {
                    key: "first",
                    value: function() {
                        return this.head.data
                    }
                }, {
                    key: "_getString",
                    value: function(e) {
                        var t = this.head,
                            n = 1,
                            r = t.data;
                        for (e -= r.length; t = t.next;) {
                            var i = t.data,
                                s = e > i.length ? i.length : e;
                            if (s === i.length ? r += i : r += i.slice(0, e), 0 == (e -= s)) {
                                s === i.length ? (++n, t.next ? this.head = t.next : this.head = this.tail = null) : (this.head = t, t.data = i.slice(s));
                                break
                            }++n
                        }
                        return this.length -= n, r
                    }
                }, {
                    key: "_getBuffer",
                    value: function(e) {
                        var t = o.allocUnsafe(e),
                            n = this.head,
                            r = 1;
                        for (n.data.copy(t), e -= n.data.length; n = n.next;) {
                            var i = n.data,
                                s = e > i.length ? i.length : e;
                            if (i.copy(t, t.length - e, 0, s), 0 == (e -= s)) {
                                s === i.length ? (++r, n.next ? this.head = n.next : this.head = this.tail = null) : (this.head = n, n.data = i.slice(s));
                                break
                            }++r
                        }
                        return this.length -= r, t
                    }
                }, {
                    key: l,
                    value: function(e, t) {
                        return a(this, function(e) {
                            for (var t = 1; t < arguments.length; t++) {
                                var n = null != arguments[t] ? arguments[t] : {};
                                t % 2 ? r(Object(n), !0).forEach((function(t) {
                                    i(e, t, n[t])
                                })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : r(Object(n)).forEach((function(t) {
                                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                }))
                            }
                            return e
                        }({}, t, {
                            depth: 0,
                            customInspect: !1
                        }))
                    }
                }], n && s(t.prototype, n), e
            }()
        },
        61195: (e, t, n) => {
            "use strict";
            var r = n(34155);

            function i(e, t) {
                o(e, t), s(e)
            }

            function s(e) {
                e._writableState && !e._writableState.emitClose || e._readableState && !e._readableState.emitClose || e.emit("close")
            }

            function o(e, t) {
                e.emit("error", t)
            }
            e.exports = {
                destroy: function(e, t) {
                    var n = this,
                        a = this._readableState && this._readableState.destroyed,
                        l = this._writableState && this._writableState.destroyed;
                    return a || l ? (t ? t(e) : e && (this._writableState ? this._writableState.errorEmitted || (this._writableState.errorEmitted = !0, r.nextTick(o, this, e)) : r.nextTick(o, this, e)), this) : (this._readableState && (this._readableState.destroyed = !0), this._writableState && (this._writableState.destroyed = !0), this._destroy(e || null, (function(e) {
                        !t && e ? n._writableState ? n._writableState.errorEmitted ? r.nextTick(s, n) : (n._writableState.errorEmitted = !0, r.nextTick(i, n, e)) : r.nextTick(i, n, e) : t ? (r.nextTick(s, n), t(e)) : r.nextTick(s, n)
                    })), this)
                },
                undestroy: function() {
                    this._readableState && (this._readableState.destroyed = !1, this._readableState.reading = !1, this._readableState.ended = !1, this._readableState.endEmitted = !1), this._writableState && (this._writableState.destroyed = !1, this._writableState.ended = !1, this._writableState.ending = !1, this._writableState.finalCalled = !1, this._writableState.prefinished = !1, this._writableState.finished = !1, this._writableState.errorEmitted = !1)
                },
                errorOrDestroy: function(e, t) {
                    var n = e._readableState,
                        r = e._writableState;
                    n && n.autoDestroy || r && r.autoDestroy ? e.destroy(t) : e.emit("error", t)
                }
            }
        },
        8610: (e, t, n) => {
            "use strict";
            var r = n(94281).q.ERR_STREAM_PREMATURE_CLOSE;

            function i() {}
            e.exports = function e(t, n, s) {
                if ("function" == typeof n) return e(t, null, n);
                n || (n = {}), s = function(e) {
                    var t = !1;
                    return function() {
                        if (!t) {
                            t = !0;
                            for (var n = arguments.length, r = new Array(n), i = 0; i < n; i++) r[i] = arguments[i];
                            e.apply(this, r)
                        }
                    }
                }(s || i);
                var o = n.readable || !1 !== n.readable && t.readable,
                    a = n.writable || !1 !== n.writable && t.writable,
                    l = function() {
                        t.writable || c()
                    },
                    h = t._writableState && t._writableState.finished,
                    c = function() {
                        a = !1, h = !0, o || s.call(t)
                    },
                    d = t._readableState && t._readableState.endEmitted,
                    u = function() {
                        o = !1, d = !0, a || s.call(t)
                    },
                    f = function(e) {
                        s.call(t, e)
                    },
                    p = function() {
                        var e;
                        return o && !d ? (t._readableState && t._readableState.ended || (e = new r), s.call(t, e)) : a && !h ? (t._writableState && t._writableState.ended || (e = new r), s.call(t, e)) : void 0
                    },
                    g = function() {
                        t.req.on("finish", c)
                    };
                return function(e) {
                        return e.setHeader && "function" == typeof e.abort
                    }(t) ? (t.on("complete", c), t.on("abort", p), t.req ? g() : t.on("request", g)) : a && !t._writableState && (t.on("end", l), t.on("close", l)), t.on("end", u), t.on("finish", c), !1 !== n.error && t.on("error", f), t.on("close", p),
                    function() {
                        t.removeListener("complete", c), t.removeListener("abort", p), t.removeListener("request", g), t.req && t.req.removeListener("finish", c), t.removeListener("end", l), t.removeListener("close", l), t.removeListener("finish", c), t.removeListener("end", u), t.removeListener("error", f), t.removeListener("close", p)
                    }
            }
        },
        15167: e => {
            e.exports = function() {
                throw new Error("Readable.from is not available in the browser")
            }
        },
        59946: (e, t, n) => {
            "use strict";
            var r, i = n(94281).q,
                s = i.ERR_MISSING_ARGS,
                o = i.ERR_STREAM_DESTROYED;

            function a(e) {
                if (e) throw e
            }

            function l(e, t, i, s) {
                s = function(e) {
                    var t = !1;
                    return function() {
                        t || (t = !0, e.apply(void 0, arguments))
                    }
                }(s);
                var a = !1;
                e.on("close", (function() {
                    a = !0
                })), void 0 === r && (r = n(8610)), r(e, {
                    readable: t,
                    writable: i
                }, (function(e) {
                    if (e) return s(e);
                    a = !0, s()
                }));
                var l = !1;
                return function(t) {
                    if (!a && !l) return l = !0,
                        function(e) {
                            return e.setHeader && "function" == typeof e.abort
                        }(e) ? e.abort() : "function" == typeof e.destroy ? e.destroy() : void s(t || new o("pipe"))
                }
            }

            function h(e) {
                e()
            }

            function c(e, t) {
                return e.pipe(t)
            }

            function d(e) {
                return e.length ? "function" != typeof e[e.length - 1] ? a : e.pop() : a
            }
            e.exports = function() {
                for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                var r, i = d(t);
                if (Array.isArray(t[0]) && (t = t[0]), t.length < 2) throw new s("streams");
                var o = t.map((function(e, n) {
                    var s = n < t.length - 1;
                    return l(e, s, n > 0, (function(e) {
                        r || (r = e), e && o.forEach(h), s || (o.forEach(h), i(r))
                    }))
                }));
                return t.reduce(c)
            }
        },
        82457: (e, t, n) => {
            "use strict";
            var r = n(94281).q.ERR_INVALID_OPT_VALUE;
            e.exports = {
                getHighWaterMark: function(e, t, n, i) {
                    var s = function(e, t, n) {
                        return null != e.highWaterMark ? e.highWaterMark : t ? e[n] : null
                    }(t, i, n);
                    if (null != s) {
                        if (!isFinite(s) || Math.floor(s) !== s || s < 0) throw new r(i ? n : "highWaterMark", s);
                        return Math.floor(s)
                    }
                    return e.objectMode ? 16 : 16384
                }
            }
        },
        22503: (e, t, n) => {
            e.exports = n(17187).EventEmitter
        },
        88473: (e, t, n) => {
            (t = e.exports = n(79481)).Stream = t, t.Readable = t, t.Writable = n(64229), t.Duplex = n(56753), t.Transform = n(74605), t.PassThrough = n(82725), t.finished = n(8610), t.pipeline = n(59946)
        },
        89509: (e, t, n) => {
            var r = n(48764),
                i = r.Buffer;

            function s(e, t) {
                for (var n in e) t[n] = e[n]
            }

            function o(e, t, n) {
                return i(e, t, n)
            }
            i.from && i.alloc && i.allocUnsafe && i.allocUnsafeSlow ? e.exports = r : (s(r, t), t.Buffer = o), o.prototype = Object.create(i.prototype), s(i, o), o.from = function(e, t, n) {
                if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                return i(e, t, n)
            }, o.alloc = function(e, t, n) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                var r = i(e);
                return void 0 !== t ? "string" == typeof n ? r.fill(t, n) : r.fill(t) : r.fill(0), r
            }, o.allocUnsafe = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return i(e)
            }, o.allocUnsafeSlow = function(e) {
                if ("number" != typeof e) throw new TypeError("Argument must be a number");
                return r.SlowBuffer(e)
            }
        },
        38853: (e, t, n) => {
            var r = n(25108);
            const i = n(11227)("simple-peer"),
                s = n(5177),
                o = n(61798),
                a = n(88473),
                l = n(54375),
                h = n(32114),
                {
                    Buffer: c
                } = n(48764),
                d = 65536;

            function u(e) {
                return e.replace(/a=ice-options:trickle\s\n/g, "")
            }
            class f extends a.Duplex {
                constructor(e) {
                    if (super(e = Object.assign({
                            allowHalfOpen: !1
                        }, e)), this._id = o(4).toString("hex").slice(0, 7), this._debug("new peer %o", e), this.channelName = e.initiator ? e.channelName || o(20).toString("hex") : null, this.initiator = e.initiator || !1, this.channelConfig = e.channelConfig || f.channelConfig, this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, f.config, e.config), this.offerOptions = e.offerOptions || {}, this.answerOptions = e.answerOptions || {}, this.sdpTransform = e.sdpTransform || (e => e), this.streams = e.streams || (e.stream ? [e.stream] : []), this.trickle = void 0 === e.trickle || e.trickle, this.allowHalfTrickle = void 0 !== e.allowHalfTrickle && e.allowHalfTrickle, this.iceCompleteTimeout = e.iceCompleteTimeout || 5e3, this.destroyed = !1, this.destroying = !1, this._connected = !1, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, this._wrtc = e.wrtc && "object" == typeof e.wrtc ? e.wrtc : s(), !this._wrtc) throw "undefined" == typeof window ? h(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT") : h(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
                    this._pcReady = !1, this._channelReady = !1, this._iceComplete = !1, this._iceCompleteTimer = null, this._channel = null, this._pendingCandidates = [], this._isNegotiating = !1, this._firstNegotiation = !0, this._batchedNegotiation = !1, this._queuedNegotiation = !1, this._sendersAwaitingStable = [], this._senderMap = new Map, this._closingInterval = null, this._remoteTracks = [], this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
                    try {
                        this._pc = new this._wrtc.RTCPeerConnection(this.config)
                    } catch (e) {
                        return void this.destroy(h(e, "ERR_PC_CONSTRUCTOR"))
                    }
                    this._isReactNativeWebrtc = "number" == typeof this._pc._peerConnectionId, this._pc.oniceconnectionstatechange = () => {
                        this._onIceStateChange()
                    }, this._pc.onicegatheringstatechange = () => {
                        this._onIceStateChange()
                    }, this._pc.onconnectionstatechange = () => {
                        this._onConnectionStateChange()
                    }, this._pc.onsignalingstatechange = () => {
                        this._onSignalingStateChange()
                    }, this._pc.onicecandidate = e => {
                        this._onIceCandidate(e)
                    }, "object" == typeof this._pc.peerIdentity && this._pc.peerIdentity.catch((e => {
                        this.destroy(h(e, "ERR_PC_PEER_IDENTITY"))
                    })), this.initiator || this.channelNegotiated ? this._setupData({
                        channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
                    }) : this._pc.ondatachannel = e => {
                        this._setupData(e)
                    }, this.streams && this.streams.forEach((e => {
                        this.addStream(e)
                    })), this._pc.ontrack = e => {
                        this._onTrack(e)
                    }, this._debug("initial negotiation"), this._needsNegotiation(), this._onFinishBound = () => {
                        this._onFinish()
                    }, this.once("finish", this._onFinishBound)
                }
                get bufferSize() {
                    return this._channel && this._channel.bufferedAmount || 0
                }
                get connected() {
                    return this._connected && "open" === this._channel.readyState
                }
                address() {
                    return {
                        port: this.localPort,
                        family: this.localFamily,
                        address: this.localAddress
                    }
                }
                signal(e) {
                    if (!this.destroying) {
                        if (this.destroyed) throw h(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
                        if ("string" == typeof e) try {
                            e = JSON.parse(e)
                        } catch (t) {
                            e = {}
                        }
                        this._debug("signal()"), e.renegotiate && this.initiator && (this._debug("got request to renegotiate"), this._needsNegotiation()), e.transceiverRequest && this.initiator && (this._debug("got request for transceiver"), this.addTransceiver(e.transceiverRequest.kind, e.transceiverRequest.init)), e.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(e.candidate) : this._pendingCandidates.push(e.candidate)), e.sdp && this._pc.setRemoteDescription(new this._wrtc.RTCSessionDescription(e)).then((() => {
                            this.destroyed || (this._pendingCandidates.forEach((e => {
                                this._addIceCandidate(e)
                            })), this._pendingCandidates = [], "offer" === this._pc.remoteDescription.type && this._createAnswer())
                        })).catch((e => {
                            this.destroy(h(e, "ERR_SET_REMOTE_DESCRIPTION"))
                        })), e.sdp || e.candidate || e.renegotiate || e.transceiverRequest || this.destroy(h(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"))
                    }
                }
                _addIceCandidate(e) {
                    const t = new this._wrtc.RTCIceCandidate(e);
                    this._pc.addIceCandidate(t).catch((e => {
                        !t.address || t.address.endsWith(".local") ? ("Ignoring unsupported ICE candidate.", r.warn("Ignoring unsupported ICE candidate.")) : this.destroy(h(e, "ERR_ADD_ICE_CANDIDATE"))
                    }))
                }
                send(e) {
                    if (!this.destroying) {
                        if (this.destroyed) throw h(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
                        this._channel.send(e)
                    }
                }
                addTransceiver(e, t) {
                    if (!this.destroying) {
                        if (this.destroyed) throw h(new Error("cannot addTransceiver after peer is destroyed"), "ERR_DESTROYED");
                        if (this._debug("addTransceiver()"), this.initiator) try {
                            this._pc.addTransceiver(e, t), this._needsNegotiation()
                        } catch (e) {
                            this.destroy(h(e, "ERR_ADD_TRANSCEIVER"))
                        } else this.emit("signal", {
                            type: "transceiverRequest",
                            transceiverRequest: {
                                kind: e,
                                init: t
                            }
                        })
                    }
                }
                addStream(e) {
                    if (!this.destroying) {
                        if (this.destroyed) throw h(new Error("cannot addStream after peer is destroyed"), "ERR_DESTROYED");
                        this._debug("addStream()"), e.getTracks().forEach((t => {
                            this.addTrack(t, e)
                        }))
                    }
                }
                addTrack(e, t) {
                    if (this.destroying) return;
                    if (this.destroyed) throw h(new Error("cannot addTrack after peer is destroyed"), "ERR_DESTROYED");
                    this._debug("addTrack()");
                    const n = this._senderMap.get(e) || new Map;
                    let r = n.get(t);
                    if (r) throw r.removed ? h(new Error("Track has been removed. You should enable/disable tracks that you want to re-add."), "ERR_SENDER_REMOVED") : h(new Error("Track has already been added to that stream."), "ERR_SENDER_ALREADY_ADDED");
                    r = this._pc.addTrack(e, t), n.set(t, r), this._senderMap.set(e, n), this._needsNegotiation()
                }
                replaceTrack(e, t, n) {
                    if (this.destroying) return;
                    if (this.destroyed) throw h(new Error("cannot replaceTrack after peer is destroyed"), "ERR_DESTROYED");
                    this._debug("replaceTrack()");
                    const r = this._senderMap.get(e),
                        i = r ? r.get(n) : null;
                    if (!i) throw h(new Error("Cannot replace track that was never added."), "ERR_TRACK_NOT_ADDED");
                    t && this._senderMap.set(t, r), null != i.replaceTrack ? i.replaceTrack(t) : this.destroy(h(new Error("replaceTrack is not supported in this browser"), "ERR_UNSUPPORTED_REPLACETRACK"))
                }
                removeTrack(e, t) {
                    if (this.destroying) return;
                    if (this.destroyed) throw h(new Error("cannot removeTrack after peer is destroyed"), "ERR_DESTROYED");
                    this._debug("removeSender()");
                    const n = this._senderMap.get(e),
                        r = n ? n.get(t) : null;
                    if (!r) throw h(new Error("Cannot remove track that was never added."), "ERR_TRACK_NOT_ADDED");
                    try {
                        r.removed = !0, this._pc.removeTrack(r)
                    } catch (e) {
                        "NS_ERROR_UNEXPECTED" === e.name ? this._sendersAwaitingStable.push(r) : this.destroy(h(e, "ERR_REMOVE_TRACK"))
                    }
                    this._needsNegotiation()
                }
                removeStream(e) {
                    if (!this.destroying) {
                        if (this.destroyed) throw h(new Error("cannot removeStream after peer is destroyed"), "ERR_DESTROYED");
                        this._debug("removeSenders()"), e.getTracks().forEach((t => {
                            this.removeTrack(t, e)
                        }))
                    }
                }
                _needsNegotiation() {
                    this._debug("_needsNegotiation"), this._batchedNegotiation || (this._batchedNegotiation = !0, l((() => {
                        this._batchedNegotiation = !1, this.initiator || !this._firstNegotiation ? (this._debug("starting batched negotiation"), this.negotiate()) : this._debug("non-initiator initial negotiation request discarded"), this._firstNegotiation = !1
                    })))
                }
                negotiate() {
                    if (!this.destroying) {
                        if (this.destroyed) throw h(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
                        this.initiator ? this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("start negotiation"), setTimeout((() => {
                            this._createOffer()
                        }), 0)) : this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("requesting negotiation from initiator"), this.emit("signal", {
                            type: "renegotiate",
                            renegotiate: !0
                        })), this._isNegotiating = !0
                    }
                }
                destroy(e) {
                    this._destroy(e, (() => {}))
                }
                _destroy(e, t) {
                    this.destroyed || this.destroying || (this.destroying = !0, this._debug("destroying (error: %s)", e && (e.message || e)), l((() => {
                        if (this.destroyed = !0, this.destroying = !1, this._debug("destroy (error: %s)", e && (e.message || e)), this.readable = this.writable = !1, this._readableState.ended || this.push(null), this._writableState.finished || this.end(), this._connected = !1, this._pcReady = !1, this._channelReady = !1, this._remoteTracks = null, this._remoteStreams = null, this._senderMap = null, clearInterval(this._closingInterval), this._closingInterval = null, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._onFinishBound && this.removeListener("finish", this._onFinishBound), this._onFinishBound = null, this._channel) {
                            try {
                                this._channel.close()
                            } catch (e) {}
                            this._channel.onmessage = null, this._channel.onopen = null, this._channel.onclose = null, this._channel.onerror = null
                        }
                        if (this._pc) {
                            try {
                                this._pc.close()
                            } catch (e) {}
                            this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ontrack = null, this._pc.ondatachannel = null
                        }
                        this._pc = null, this._channel = null, e && this.emit("error", e), this.emit("close"), t()
                    })))
                }
                _setupData(e) {
                    if (!e.channel) return this.destroy(h(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
                    this._channel = e.channel, this._channel.binaryType = "arraybuffer", "number" == typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = d), this.channelName = this._channel.label, this._channel.onmessage = e => {
                        this._onChannelMessage(e)
                    }, this._channel.onbufferedamountlow = () => {
                        this._onChannelBufferedAmountLow()
                    }, this._channel.onopen = () => {
                        this._onChannelOpen()
                    }, this._channel.onclose = () => {
                        this._onChannelClose()
                    }, this._channel.onerror = e => {
                        const t = e.error instanceof Error ? e.error : new Error(`Datachannel error: ${e.message} ${e.filename}:${e.lineno}:${e.colno}`);
                        this.destroy(h(t, "ERR_DATA_CHANNEL"))
                    };
                    let t = !1;
                    this._closingInterval = setInterval((() => {
                        this._channel && "closing" === this._channel.readyState ? (t && this._onChannelClose(), t = !0) : t = !1
                    }), 5e3)
                }
                _read() {}
                _write(e, t, n) {
                    if (this.destroyed) return n(h(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
                    if (this._connected) {
                        try {
                            this.send(e)
                        } catch (e) {
                            return this.destroy(h(e, "ERR_DATA_CHANNEL"))
                        }
                        this._channel.bufferedAmount > d ? (this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount), this._cb = n) : n(null)
                    } else this._debug("write before connect"), this._chunk = e, this._cb = n
                }
                _onFinish() {
                    if (this.destroyed) return;
                    const e = () => {
                        setTimeout((() => this.destroy()), 1e3)
                    };
                    this._connected ? e() : this.once("connect", e)
                }
                _startIceCompleteTimeout() {
                    this.destroyed || this._iceCompleteTimer || (this._debug("started iceComplete timeout"), this._iceCompleteTimer = setTimeout((() => {
                        this._iceComplete || (this._iceComplete = !0, this._debug("iceComplete timeout completed"), this.emit("iceTimeout"), this.emit("_iceComplete"))
                    }), this.iceCompleteTimeout))
                }
                _createOffer() {
                    this.destroyed || this._pc.createOffer(this.offerOptions).then((e => {
                        if (this.destroyed) return;
                        this.trickle || this.allowHalfTrickle || (e.sdp = u(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
                        const t = () => {
                            if (this.destroyed) return;
                            const t = this._pc.localDescription || e;
                            this._debug("signal"), this.emit("signal", {
                                type: t.type,
                                sdp: t.sdp
                            })
                        };
                        this._pc.setLocalDescription(e).then((() => {
                            this._debug("createOffer success"), this.destroyed || (this.trickle || this._iceComplete ? t() : this.once("_iceComplete", t))
                        })).catch((e => {
                            this.destroy(h(e, "ERR_SET_LOCAL_DESCRIPTION"))
                        }))
                    })).catch((e => {
                        this.destroy(h(e, "ERR_CREATE_OFFER"))
                    }))
                }
                _requestMissingTransceivers() {
                    this._pc.getTransceivers && this._pc.getTransceivers().forEach((e => {
                        e.mid || !e.sender.track || e.requested || (e.requested = !0, this.addTransceiver(e.sender.track.kind))
                    }))
                }
                _createAnswer() {
                    this.destroyed || this._pc.createAnswer(this.answerOptions).then((e => {
                        if (this.destroyed) return;
                        this.trickle || this.allowHalfTrickle || (e.sdp = u(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
                        const t = () => {
                            if (this.destroyed) return;
                            const t = this._pc.localDescription || e;
                            this._debug("signal"), this.emit("signal", {
                                type: t.type,
                                sdp: t.sdp
                            }), this.initiator || this._requestMissingTransceivers()
                        };
                        this._pc.setLocalDescription(e).then((() => {
                            this.destroyed || (this.trickle || this._iceComplete ? t() : this.once("_iceComplete", t))
                        })).catch((e => {
                            this.destroy(h(e, "ERR_SET_LOCAL_DESCRIPTION"))
                        }))
                    })).catch((e => {
                        this.destroy(h(e, "ERR_CREATE_ANSWER"))
                    }))
                }
                _onConnectionStateChange() {
                    this.destroyed || "failed" === this._pc.connectionState && this.destroy(h(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"))
                }
                _onIceStateChange() {
                    if (this.destroyed) return;
                    const e = this._pc.iceConnectionState,
                        t = this._pc.iceGatheringState;
                    this._debug("iceStateChange (connection: %s) (gathering: %s)", e, t), this.emit("iceStateChange", e, t), "connected" !== e && "completed" !== e || (this._pcReady = !0, this._maybeReady()), "failed" === e && this.destroy(h(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), "closed" === e && this.destroy(h(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"))
                }
                getStats(e) {
                    const t = e => ("[object Array]" === Object.prototype.toString.call(e.values) && e.values.forEach((t => {
                        Object.assign(e, t)
                    })), e);
                    0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then((n => {
                        const r = [];
                        n.forEach((e => {
                            r.push(t(e))
                        })), e(null, r)
                    }), (t => e(t))) : this._pc.getStats.length > 0 ? this._pc.getStats((n => {
                        if (this.destroyed) return;
                        const r = [];
                        n.result().forEach((e => {
                            const n = {};
                            e.names().forEach((t => {
                                n[t] = e.stat(t)
                            })), n.id = e.id, n.type = e.type, n.timestamp = e.timestamp, r.push(t(n))
                        })), e(null, r)
                    }), (t => e(t))) : e(null, [])
                }
                _maybeReady() {
                    if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
                    this._connecting = !0;
                    const e = () => {
                        this.destroyed || this.getStats(((t, n) => {
                            if (this.destroyed) return;
                            t && (n = []);
                            const r = {},
                                i = {},
                                s = {};
                            let o = !1;
                            n.forEach((e => {
                                "remotecandidate" !== e.type && "remote-candidate" !== e.type || (r[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (i[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (s[e.id] = e)
                            }));
                            const a = e => {
                                o = !0;
                                let t = i[e.localCandidateId];
                                t && (t.ip || t.address) ? (this.localAddress = t.ip || t.address, this.localPort = Number(t.port)) : t && t.ipAddress ? (this.localAddress = t.ipAddress, this.localPort = Number(t.portNumber)) : "string" == typeof e.googLocalAddress && (t = e.googLocalAddress.split(":"), this.localAddress = t[0], this.localPort = Number(t[1])), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                                let n = r[e.remoteCandidateId];
                                n && (n.ip || n.address) ? (this.remoteAddress = n.ip || n.address, this.remotePort = Number(n.port)) : n && n.ipAddress ? (this.remoteAddress = n.ipAddress, this.remotePort = Number(n.portNumber)) : "string" == typeof e.googRemoteAddress && (n = e.googRemoteAddress.split(":"), this.remoteAddress = n[0], this.remotePort = Number(n[1])), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort)
                            };
                            if (n.forEach((e => {
                                    "transport" === e.type && e.selectedCandidatePairId && a(s[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && a(e)
                                })), o || Object.keys(s).length && !Object.keys(i).length) {
                                if (this._connecting = !1, this._connected = !0, this._chunk) {
                                    try {
                                        this.send(this._chunk)
                                    } catch (t) {
                                        return this.destroy(h(t, "ERR_DATA_CHANNEL"))
                                    }
                                    this._chunk = null, this._debug('sent chunk from "write before connect"');
                                    const e = this._cb;
                                    this._cb = null, e(null)
                                }
                                "number" != typeof this._channel.bufferedAmountLowThreshold && (this._interval = setInterval((() => this._onInterval()), 150), this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect")
                            } else setTimeout(e, 100)
                        }))
                    };
                    e()
                }
                _onInterval() {
                    !this._cb || !this._channel || this._channel.bufferedAmount > d || this._onChannelBufferedAmountLow()
                }
                _onSignalingStateChange() {
                    this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = !1, this._debug("flushing sender queue", this._sendersAwaitingStable), this._sendersAwaitingStable.forEach((e => {
                        this._pc.removeTrack(e), this._queuedNegotiation = !0
                    })), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._debug("flushing negotiation queue"), this._queuedNegotiation = !1, this._needsNegotiation()) : (this._debug("negotiated"), this.emit("negotiated"))), this._debug("signalingStateChange %s", this._pc.signalingState), this.emit("signalingStateChange", this._pc.signalingState))
                }
                _onIceCandidate(e) {
                    this.destroyed || (e.candidate && this.trickle ? this.emit("signal", {
                        type: "candidate",
                        candidate: {
                            candidate: e.candidate.candidate,
                            sdpMLineIndex: e.candidate.sdpMLineIndex,
                            sdpMid: e.candidate.sdpMid
                        }
                    }) : e.candidate || this._iceComplete || (this._iceComplete = !0, this.emit("_iceComplete")), e.candidate && this._startIceCompleteTimeout())
                }
                _onChannelMessage(e) {
                    if (this.destroyed) return;
                    let t = e.data;
                    t instanceof ArrayBuffer && (t = c.from(t)), this.push(t)
                }
                _onChannelBufferedAmountLow() {
                    if (this.destroyed || !this._cb) return;
                    this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
                    const e = this._cb;
                    this._cb = null, e(null)
                }
                _onChannelOpen() {
                    this._connected || this.destroyed || (this._debug("on channel open"), this._channelReady = !0, this._maybeReady())
                }
                _onChannelClose() {
                    this.destroyed || (this._debug("on channel close"), this.destroy())
                }
                _onTrack(e) {
                    this.destroyed || e.streams.forEach((t => {
                        this._debug("on track"), this.emit("track", e.track, t), this._remoteTracks.push({
                            track: e.track,
                            stream: t
                        }), this._remoteStreams.some((e => e.id === t.id)) || (this._remoteStreams.push(t), l((() => {
                            this._debug("on stream"), this.emit("stream", t)
                        })))
                    }))
                }
                _debug() {
                    const e = [].slice.call(arguments);
                    e[0] = "[" + this._id + "] " + e[0], i.apply(null, e)
                }
            }
            f.WEBRTC_SUPPORT = !!s(), f.config = {
                iceServers: [{
                    urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]
                }],
                sdpSemantics: "unified-plan"
            }, f.channelConfig = {}, e.exports = f
        },
        32553: (e, t, n) => {
            "use strict";
            var r = n(89509).Buffer,
                i = r.isEncoding || function(e) {
                    switch ((e = "" + e) && e.toLowerCase()) {
                        case "hex":
                        case "utf8":
                        case "utf-8":
                        case "ascii":
                        case "binary":
                        case "base64":
                        case "ucs2":
                        case "ucs-2":
                        case "utf16le":
                        case "utf-16le":
                        case "raw":
                            return !0;
                        default:
                            return !1
                    }
                };

            function s(e) {
                var t;
                switch (this.encoding = function(e) {
                        var t = function(e) {
                            if (!e) return "utf8";
                            for (var t;;) switch (e) {
                                case "utf8":
                                case "utf-8":
                                    return "utf8";
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return "utf16le";
                                case "latin1":
                                case "binary":
                                    return "latin1";
                                case "base64":
                                case "ascii":
                                case "hex":
                                    return e;
                                default:
                                    if (t) return;
                                    e = ("" + e).toLowerCase(), t = !0
                            }
                        }(e);
                        if ("string" != typeof t && (r.isEncoding === i || !i(e))) throw new Error("Unknown encoding: " + e);
                        return t || e
                    }(e), this.encoding) {
                    case "utf16le":
                        this.text = l, this.end = h, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = a, t = 4;
                        break;
                    case "base64":
                        this.text = c, this.end = d, t = 3;
                        break;
                    default:
                        return this.write = u, void(this.end = f)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = r.allocUnsafe(t)
            }

            function o(e) {
                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
            }

            function a(e) {
                var t = this.lastTotal - this.lastNeed,
                    n = function(e, t, n) {
                        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                        if (e.lastNeed > 1 && t.length > 1) {
                            if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                        }
                    }(this, e);
                return void 0 !== n ? n : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
            }

            function l(e, t) {
                if ((e.length - t) % 2 == 0) {
                    var n = e.toString("utf16le", t);
                    if (n) {
                        var r = n.charCodeAt(n.length - 1);
                        if (r >= 55296 && r <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], n.slice(0, -1)
                    }
                    return n
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
            }

            function h(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var n = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, n)
                }
                return t
            }

            function c(e, t) {
                var n = (e.length - t) % 3;
                return 0 === n ? e.toString("base64", t) : (this.lastNeed = 3 - n, this.lastTotal = 3, 1 === n ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - n))
            }

            function d(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
            }

            function u(e) {
                return e.toString(this.encoding)
            }

            function f(e) {
                return e && e.length ? this.write(e) : ""
            }
            t.s = s, s.prototype.write = function(e) {
                if (0 === e.length) return "";
                var t, n;
                if (this.lastNeed) {
                    if (void 0 === (t = this.fillLast(e))) return "";
                    n = this.lastNeed, this.lastNeed = 0
                } else n = 0;
                return n < e.length ? t ? t + this.text(e, n) : this.text(e, n) : t || ""
            }, s.prototype.end = function(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + "�" : t
            }, s.prototype.text = function(e, t) {
                var n = function(e, t, n) {
                    var r = t.length - 1;
                    if (r < n) return 0;
                    var i = o(t[r]);
                    return i >= 0 ? (i > 0 && (e.lastNeed = i - 1), i) : --r < n || -2 === i ? 0 : (i = o(t[r])) >= 0 ? (i > 0 && (e.lastNeed = i - 2), i) : --r < n || -2 === i ? 0 : (i = o(t[r])) >= 0 ? (i > 0 && (2 === i ? i = 0 : e.lastNeed = i - 3), i) : 0
                }(this, e, t);
                if (!this.lastNeed) return e.toString("utf8", t);
                this.lastTotal = n;
                var r = e.length - (n - this.lastNeed);
                return e.copy(this.lastChar, 0, r), e.toString("utf8", t, r)
            }, s.prototype.fillLast = function(e) {
                if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
            }
        },
        94927: (e, t, n) => {
            var r = n(25108);

            function i(e) {
                try {
                    if (!n.g.localStorage) return !1
                } catch (e) {
                    return !1
                }
                var t = n.g.localStorage[e];
                return null != t && "true" === String(t).toLowerCase()
            }
            e.exports = function(e, t) {
                if (i("noDeprecation")) return e;
                var n = !1;
                return function() {
                    if (!n) {
                        if (i("throwDeprecation")) throw new Error(t);
                        i("traceDeprecation") ? r.trace(t) : r.warn(t), n = !0
                    }
                    return e.apply(this, arguments)
                }
            }
        }
    }
]);