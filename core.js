/*! For license information please see metapress.js.LICENSE.txt */
(() => {
    var e, t, n, r, o = {
            69282: (e, t, n) => {
                "use strict";
                var r = n(34155),
                    o = n(25108);

                function i(e) {
                    return i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, i(e)
                }
                var a, c, s = n(62136).codes,
                    l = s.ERR_AMBIGUOUS_ARGUMENT,
                    u = s.ERR_INVALID_ARG_TYPE,
                    f = s.ERR_INVALID_ARG_VALUE,
                    p = s.ERR_INVALID_RETURN_VALUE,
                    y = s.ERR_MISSING_ARGS,
                    d = n(25961),
                    g = n(89539).inspect,
                    h = n(89539).types,
                    b = h.isPromise,
                    m = h.isRegExp,
                    v = Object.assign ? Object.assign : n(8091).assign,
                    w = Object.is ? Object.is : n(20609);

                function P() {
                    var e = n(19158);
                    a = e.isDeepEqual, c = e.isDeepStrictEqual
                }
                new Map;
                var S = !1,
                    A = e.exports = x,
                    E = {};

                function O(e) {
                    if (e.message instanceof Error) throw e.message;
                    throw new d(e)
                }

                function j(e, t, n, r) {
                    if (!n) {
                        var o = !1;
                        if (0 === t) o = !0, r = "No value argument passed to `assert.ok()`";
                        else if (r instanceof Error) throw r;
                        var i = new d({
                            actual: n,
                            expected: !0,
                            message: r,
                            operator: "==",
                            stackStartFn: e
                        });
                        throw i.generatedMessage = o, i
                    }
                }

                function x() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    j.apply(void 0, [x, t.length].concat(t))
                }
                A.fail = function e(t, n, i, a, c) {
                    var s, l = arguments.length;
                    if (0 === l) s = "Failed";
                    else if (1 === l) i = t, t = void 0;
                    else {
                        if (!1 === S) {
                            S = !0;
                            var u = r.emitWarning ? r.emitWarning : o.warn.bind(o);
                            u("assert.fail() with more than one argument is deprecated. Please use assert.strictEqual() instead or only pass a message.", "DeprecationWarning", "DEP0094")
                        }
                        2 === l && (a = "!=")
                    }
                    if (i instanceof Error) throw i;
                    var f = {
                        actual: t,
                        expected: n,
                        operator: void 0 === a ? "fail" : a,
                        stackStartFn: c || e
                    };
                    void 0 !== i && (f.message = i);
                    var p = new d(f);
                    throw s && (p.message = s, p.generatedMessage = !0), p
                }, A.AssertionError = d, A.ok = x, A.equal = function e(t, n, r) {
                    if (arguments.length < 2) throw new y("actual", "expected");
                    t != n && O({
                        actual: t,
                        expected: n,
                        message: r,
                        operator: "==",
                        stackStartFn: e
                    })
                }, A.notEqual = function e(t, n, r) {
                    if (arguments.length < 2) throw new y("actual", "expected");
                    t == n && O({
                        actual: t,
                        expected: n,
                        message: r,
                        operator: "!=",
                        stackStartFn: e
                    })
                }, A.deepEqual = function e(t, n, r) {
                    if (arguments.length < 2) throw new y("actual", "expected");
                    void 0 === a && P(), a(t, n) || O({
                        actual: t,
                        expected: n,
                        message: r,
                        operator: "deepEqual",
                        stackStartFn: e
                    })
                }, A.notDeepEqual = function e(t, n, r) {
                    if (arguments.length < 2) throw new y("actual", "expected");
                    void 0 === a && P(), a(t, n) && O({
                        actual: t,
                        expected: n,
                        message: r,
                        operator: "notDeepEqual",
                        stackStartFn: e
                    })
                }, A.deepStrictEqual = function e(t, n, r) {
                    if (arguments.length < 2) throw new y("actual", "expected");
                    void 0 === a && P(), c(t, n) || O({
                        actual: t,
                        expected: n,
                        message: r,
                        operator: "deepStrictEqual",
                        stackStartFn: e
                    })
                }, A.notDeepStrictEqual = function e(t, n, r) {
                    if (arguments.length < 2) throw new y("actual", "expected");
                    void 0 === a && P(), c(t, n) && O({
                        actual: t,
                        expected: n,
                        message: r,
                        operator: "notDeepStrictEqual",
                        stackStartFn: e
                    })
                }, A.strictEqual = function e(t, n, r) {
                    if (arguments.length < 2) throw new y("actual", "expected");
                    w(t, n) || O({
                        actual: t,
                        expected: n,
                        message: r,
                        operator: "strictEqual",
                        stackStartFn: e
                    })
                }, A.notStrictEqual = function e(t, n, r) {
                    if (arguments.length < 2) throw new y("actual", "expected");
                    w(t, n) && O({
                        actual: t,
                        expected: n,
                        message: r,
                        operator: "notStrictEqual",
                        stackStartFn: e
                    })
                };
                var I = function e(t, n, r) {
                    var o = this;
                    ! function(e, t) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this, e), n.forEach((function(e) {
                        e in t && (void 0 !== r && "string" == typeof r[e] && m(t[e]) && t[e].test(r[e]) ? o[e] = r[e] : o[e] = t[e])
                    }))
                };

                function k(e, t, n, r, o, i) {
                    if (!(n in e) || !c(e[n], t[n])) {
                        if (!r) {
                            var a = new I(e, o),
                                s = new I(t, o, e),
                                l = new d({
                                    actual: a,
                                    expected: s,
                                    operator: "deepStrictEqual",
                                    stackStartFn: i
                                });
                            throw l.actual = e, l.expected = t, l.operator = i.name, l
                        }
                        O({
                            actual: e,
                            expected: t,
                            message: r,
                            operator: i.name,
                            stackStartFn: i
                        })
                    }
                }

                function T(e, t, n, r) {
                    if ("function" != typeof t) {
                        if (m(t)) return t.test(e);
                        if (2 === arguments.length) throw new u("expected", ["Function", "RegExp"], t);
                        if ("object" !== i(e) || null === e) {
                            var o = new d({
                                actual: e,
                                expected: t,
                                message: n,
                                operator: "deepStrictEqual",
                                stackStartFn: r
                            });
                            throw o.operator = r.name, o
                        }
                        var c = Object.keys(t);
                        if (t instanceof Error) c.push("name", "message");
                        else if (0 === c.length) throw new f("error", t, "may not be an empty object");
                        return void 0 === a && P(), c.forEach((function(o) {
                            "string" == typeof e[o] && m(t[o]) && t[o].test(e[o]) || k(e, t, o, n, c, r)
                        })), !0
                    }
                    return void 0 !== t.prototype && e instanceof t || !Error.isPrototypeOf(t) && !0 === t.call({}, e)
                }

                function _(e) {
                    if ("function" != typeof e) throw new u("fn", "Function", e);
                    try {
                        e()
                    } catch (e) {
                        return e
                    }
                    return E
                }

                function R(e) {
                    return b(e) || null !== e && "object" === i(e) && "function" == typeof e.then && "function" == typeof e.catch
                }

                function F(e) {
                    return Promise.resolve().then((function() {
                        var t;
                        if ("function" == typeof e) {
                            if (!R(t = e())) throw new p("instance of Promise", "promiseFn", t)
                        } else {
                            if (!R(e)) throw new u("promiseFn", ["Function", "Promise"], e);
                            t = e
                        }
                        return Promise.resolve().then((function() {
                            return t
                        })).then((function() {
                            return E
                        })).catch((function(e) {
                            return e
                        }))
                    }))
                }

                function D(e, t, n, r) {
                    if ("string" == typeof n) {
                        if (4 === arguments.length) throw new u("error", ["Object", "Error", "Function", "RegExp"], n);
                        if ("object" === i(t) && null !== t) {
                            if (t.message === n) throw new l("error/message", 'The error message "'.concat(t.message, '" is identical to the message.'))
                        } else if (t === n) throw new l("error/message", 'The error "'.concat(t, '" is identical to the message.'));
                        r = n, n = void 0
                    } else if (null != n && "object" !== i(n) && "function" != typeof n) throw new u("error", ["Object", "Error", "Function", "RegExp"], n);
                    if (t === E) {
                        var o = "";
                        n && n.name && (o += " (".concat(n.name, ")")), o += r ? ": ".concat(r) : ".";
                        var a = "rejects" === e.name ? "rejection" : "exception";
                        O({
                            actual: void 0,
                            expected: n,
                            operator: e.name,
                            message: "Missing expected ".concat(a).concat(o),
                            stackStartFn: e
                        })
                    }
                    if (n && !T(t, n, r, e)) throw t
                }

                function M(e, t, n, r) {
                    if (t !== E) {
                        if ("string" == typeof n && (r = n, n = void 0), !n || T(t, n)) {
                            var o = r ? ": ".concat(r) : ".",
                                i = "doesNotReject" === e.name ? "rejection" : "exception";
                            O({
                                actual: t,
                                expected: n,
                                operator: e.name,
                                message: "Got unwanted ".concat(i).concat(o, "\n") + 'Actual message: "'.concat(t && t.message, '"'),
                                stackStartFn: e
                            })
                        }
                        throw t
                    }
                }

                function N() {
                    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++) t[n] = arguments[n];
                    j.apply(void 0, [N, t.length].concat(t))
                }
                A.throws = function e(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    D.apply(void 0, [e, _(t)].concat(r))
                }, A.rejects = function e(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    return F(t).then((function(t) {
                        return D.apply(void 0, [e, t].concat(r))
                    }))
                }, A.doesNotThrow = function e(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    M.apply(void 0, [e, _(t)].concat(r))
                }, A.doesNotReject = function e(t) {
                    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), o = 1; o < n; o++) r[o - 1] = arguments[o];
                    return F(t).then((function(t) {
                        return M.apply(void 0, [e, t].concat(r))
                    }))
                }, A.ifError = function e(t) {
                    if (null != t) {
                        var n = "ifError got unwanted exception: ";
                        "object" === i(t) && "string" == typeof t.message ? 0 === t.message.length && t.constructor ? n += t.constructor.name : n += t.message : n += g(t);
                        var r = new d({
                                actual: t,
                                expected: null,
                                operator: "ifError",
                                message: n,
                                stackStartFn: e
                            }),
                            o = t.stack;
                        if ("string" == typeof o) {
                            var a = o.split("\n");
                            a.shift();
                            for (var c = r.stack.split("\n"), s = 0; s < a.length; s++) {
                                var l = c.indexOf(a[s]);
                                if (-1 !== l) {
                                    c = c.slice(0, l);
                                    break
                                }
                            }
                            r.stack = "".concat(c.join("\n"), "\n").concat(a.join("\n"))
                        }
                        throw r
                    }
                }, A.strict = v(N, A, {
                    equal: A.strictEqual,
                    deepEqual: A.deepStrictEqual,
                    notEqual: A.notStrictEqual,
                    notDeepEqual: A.notDeepStrictEqual
                }), A.strict.strict = A.strict
            },
            25961: (e, t, n) => {
                "use strict";
                var r = n(34155);

                function o(e, t, n) {
                    return t in e ? Object.defineProperty(e, t, {
                        value: n,
                        enumerable: !0,
                        configurable: !0,
                        writable: !0
                    }) : e[t] = n, e
                }

                function i(e, t) {
                    for (var n = 0; n < t.length; n++) {
                        var r = t[n];
                        r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(e, r.key, r)
                    }
                }

                function a(e, t) {
                    return !t || "object" !== y(t) && "function" != typeof t ? c(e) : t
                }

                function c(e) {
                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                    return e
                }

                function s(e) {
                    var t = "function" == typeof Map ? new Map : void 0;
                    return s = function(e) {
                        if (null === e || (n = e, -1 === Function.toString.call(n).indexOf("[native code]"))) return e;
                        var n;
                        if ("function" != typeof e) throw new TypeError("Super expression must either be null or a function");
                        if (void 0 !== t) {
                            if (t.has(e)) return t.get(e);
                            t.set(e, r)
                        }

                        function r() {
                            return u(e, arguments, p(this).constructor)
                        }
                        return r.prototype = Object.create(e.prototype, {
                            constructor: {
                                value: r,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }), f(r, e)
                    }, s(e)
                }

                function l() {
                    if ("undefined" == typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" == typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }

                function u(e, t, n) {
                    return u = l() ? Reflect.construct : function(e, t, n) {
                        var r = [null];
                        r.push.apply(r, t);
                        var o = new(Function.bind.apply(e, r));
                        return n && f(o, n.prototype), o
                    }, u.apply(null, arguments)
                }

                function f(e, t) {
                    return f = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, f(e, t)
                }

                function p(e) {
                    return p = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, p(e)
                }

                function y(e) {
                    return y = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, y(e)
                }
                var d = n(89539).inspect,
                    g = n(62136).codes.ERR_INVALID_ARG_TYPE;

                function h(e, t, n) {
                    return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t
                }
                var b = "",
                    m = "",
                    v = "",
                    w = "",
                    P = {
                        deepStrictEqual: "Expected values to be strictly deep-equal:",
                        strictEqual: "Expected values to be strictly equal:",
                        strictEqualObject: 'Expected "actual" to be reference-equal to "expected":',
                        deepEqual: "Expected values to be loosely deep-equal:",
                        equal: "Expected values to be loosely equal:",
                        notDeepStrictEqual: 'Expected "actual" not to be strictly deep-equal to:',
                        notStrictEqual: 'Expected "actual" to be strictly unequal to:',
                        notStrictEqualObject: 'Expected "actual" not to be reference-equal to "expected":',
                        notDeepEqual: 'Expected "actual" not to be loosely deep-equal to:',
                        notEqual: 'Expected "actual" to be loosely unequal to:',
                        notIdentical: "Values identical but not reference-equal:"
                    };

                function S(e) {
                    var t = Object.keys(e),
                        n = Object.create(Object.getPrototypeOf(e));
                    return t.forEach((function(t) {
                        n[t] = e[t]
                    })), Object.defineProperty(n, "message", {
                        value: e.message
                    }), n
                }

                function A(e) {
                    return d(e, {
                        compact: !1,
                        customInspect: !1,
                        depth: 1e3,
                        maxArrayLength: 1 / 0,
                        showHidden: !1,
                        breakLength: 1 / 0,
                        showProxy: !1,
                        sorted: !0,
                        getters: !0
                    })
                }
                var E = function(e) {
                    function t(e) {
                        var n;
                        if (function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, t), "object" !== y(e) || null === e) throw new g("options", "Object", e);
                        var o = e.message,
                            i = e.operator,
                            s = e.stackStartFn,
                            l = e.actual,
                            u = e.expected,
                            f = Error.stackTraceLimit;
                        if (Error.stackTraceLimit = 0, null != o) n = a(this, p(t).call(this, String(o)));
                        else if (r.stderr && r.stderr.isTTY && (r.stderr && r.stderr.getColorDepth && 1 !== r.stderr.getColorDepth() ? (b = "[34m", m = "[32m", w = "[39m", v = "[31m") : (b = "", m = "", w = "", v = "")), "object" === y(l) && null !== l && "object" === y(u) && null !== u && "stack" in l && l instanceof Error && "stack" in u && u instanceof Error && (l = S(l), u = S(u)), "deepStrictEqual" === i || "strictEqual" === i) n = a(this, p(t).call(this, function(e, t, n) {
                            var o = "",
                                i = "",
                                a = 0,
                                c = "",
                                s = !1,
                                l = A(e),
                                u = l.split("\n"),
                                f = A(t).split("\n"),
                                p = 0,
                                d = "";
                            if ("strictEqual" === n && "object" === y(e) && "object" === y(t) && null !== e && null !== t && (n = "strictEqualObject"), 1 === u.length && 1 === f.length && u[0] !== f[0]) {
                                var g = u[0].length + f[0].length;
                                if (g <= 10) {
                                    if (!("object" === y(e) && null !== e || "object" === y(t) && null !== t || 0 === e && 0 === t)) return "".concat(P[n], "\n\n") + "".concat(u[0], " !== ").concat(f[0], "\n")
                                } else if ("strictEqualObject" !== n && g < (r.stderr && r.stderr.isTTY ? r.stderr.columns : 80)) {
                                    for (; u[0][p] === f[0][p];) p++;
                                    p > 2 && (d = "\n  ".concat(function(e, t) {
                                        if (t = Math.floor(t), 0 == e.length || 0 == t) return "";
                                        var n = e.length * t;
                                        for (t = Math.floor(Math.log(t) / Math.log(2)); t;) e += e, t--;
                                        return e + e.substring(0, n - e.length)
                                    }(" ", p), "^"), p = 0)
                                }
                            }
                            for (var S = u[u.length - 1], E = f[f.length - 1]; S === E && (p++ < 2 ? c = "\n  ".concat(S).concat(c) : o = S, u.pop(), f.pop(), 0 !== u.length && 0 !== f.length);) S = u[u.length - 1], E = f[f.length - 1];
                            var O = Math.max(u.length, f.length);
                            if (0 === O) {
                                var j = l.split("\n");
                                if (j.length > 30)
                                    for (j[26] = "".concat(b, "...").concat(w); j.length > 27;) j.pop();
                                return "".concat(P.notIdentical, "\n\n").concat(j.join("\n"), "\n")
                            }
                            p > 3 && (c = "\n".concat(b, "...").concat(w).concat(c), s = !0), "" !== o && (c = "\n  ".concat(o).concat(c), o = "");
                            var x = 0,
                                I = P[n] + "\n".concat(m, "+ actual").concat(w, " ").concat(v, "- expected").concat(w),
                                k = " ".concat(b, "...").concat(w, " Lines skipped");
                            for (p = 0; p < O; p++) {
                                var T = p - a;
                                if (u.length < p + 1) T > 1 && p > 2 && (T > 4 ? (i += "\n".concat(b, "...").concat(w), s = !0) : T > 3 && (i += "\n  ".concat(f[p - 2]), x++), i += "\n  ".concat(f[p - 1]), x++), a = p, o += "\n".concat(v, "-").concat(w, " ").concat(f[p]), x++;
                                else if (f.length < p + 1) T > 1 && p > 2 && (T > 4 ? (i += "\n".concat(b, "...").concat(w), s = !0) : T > 3 && (i += "\n  ".concat(u[p - 2]), x++), i += "\n  ".concat(u[p - 1]), x++), a = p, i += "\n".concat(m, "+").concat(w, " ").concat(u[p]), x++;
                                else {
                                    var _ = f[p],
                                        R = u[p],
                                        F = R !== _ && (!h(R, ",") || R.slice(0, -1) !== _);
                                    F && h(_, ",") && _.slice(0, -1) === R && (F = !1, R += ","), F ? (T > 1 && p > 2 && (T > 4 ? (i += "\n".concat(b, "...").concat(w), s = !0) : T > 3 && (i += "\n  ".concat(u[p - 2]), x++), i += "\n  ".concat(u[p - 1]), x++), a = p, i += "\n".concat(m, "+").concat(w, " ").concat(R), o += "\n".concat(v, "-").concat(w, " ").concat(_), x += 2) : (i += o, o = "", 1 !== T && 0 !== p || (i += "\n  ".concat(R), x++))
                                }
                                if (x > 20 && p < O - 2) return "".concat(I).concat(k, "\n").concat(i, "\n").concat(b, "...").concat(w).concat(o, "\n") + "".concat(b, "...").concat(w)
                            }
                            return "".concat(I).concat(s ? k : "", "\n").concat(i).concat(o).concat(c).concat(d)
                        }(l, u, i)));
                        else if ("notDeepStrictEqual" === i || "notStrictEqual" === i) {
                            var d = P[i],
                                E = A(l).split("\n");
                            if ("notStrictEqual" === i && "object" === y(l) && null !== l && (d = P.notStrictEqualObject), E.length > 30)
                                for (E[26] = "".concat(b, "...").concat(w); E.length > 27;) E.pop();
                            n = 1 === E.length ? a(this, p(t).call(this, "".concat(d, " ").concat(E[0]))) : a(this, p(t).call(this, "".concat(d, "\n\n").concat(E.join("\n"), "\n")))
                        } else {
                            var O = A(l),
                                j = "",
                                x = P[i];
                            "notDeepEqual" === i || "notEqual" === i ? (O = "".concat(P[i], "\n\n").concat(O)).length > 1024 && (O = "".concat(O.slice(0, 1021), "...")) : (j = "".concat(A(u)), O.length > 512 && (O = "".concat(O.slice(0, 509), "...")), j.length > 512 && (j = "".concat(j.slice(0, 509), "...")), "deepEqual" === i || "equal" === i ? O = "".concat(x, "\n\n").concat(O, "\n\nshould equal\n\n") : j = " ".concat(i, " ").concat(j)), n = a(this, p(t).call(this, "".concat(O).concat(j)))
                        }
                        return Error.stackTraceLimit = f, n.generatedMessage = !o, Object.defineProperty(c(n), "name", {
                            value: "AssertionError [ERR_ASSERTION]",
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }), n.code = "ERR_ASSERTION", n.actual = l, n.expected = u, n.operator = i, Error.captureStackTrace && Error.captureStackTrace(c(n), s), n.stack, n.name = "AssertionError", a(n)
                    }
                    var n, s;
                    return function(e, t) {
                        if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                        e.prototype = Object.create(t && t.prototype, {
                            constructor: {
                                value: e,
                                writable: !0,
                                configurable: !0
                            }
                        }), t && f(e, t)
                    }(t, e), n = t, s = [{
                        key: "toString",
                        value: function() {
                            return "".concat(this.name, " [").concat(this.code, "]: ").concat(this.message)
                        }
                    }, {
                        key: d.custom,
                        value: function(e, t) {
                            return d(this, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {},
                                        r = Object.keys(n);
                                    "function" == typeof Object.getOwnPropertySymbols && (r = r.concat(Object.getOwnPropertySymbols(n).filter((function(e) {
                                        return Object.getOwnPropertyDescriptor(n, e).enumerable
                                    })))), r.forEach((function(t) {
                                        o(e, t, n[t])
                                    }))
                                }
                                return e
                            }({}, t, {
                                customInspect: !1,
                                depth: 0
                            }))
                        }
                    }], s && i(n.prototype, s), t
                }(s(Error));
                e.exports = E
            },
            62136: (e, t, n) => {
                "use strict";

                function r(e) {
                    return r = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, r(e)
                }

                function o(e) {
                    return o = Object.setPrototypeOf ? Object.getPrototypeOf : function(e) {
                        return e.__proto__ || Object.getPrototypeOf(e)
                    }, o(e)
                }

                function i(e, t) {
                    return i = Object.setPrototypeOf || function(e, t) {
                        return e.__proto__ = t, e
                    }, i(e, t)
                }
                var a, c, s = {};

                function l(e, t, n) {
                    n || (n = Error);
                    var a = function(n) {
                        function a(n, i, c) {
                            var s;
                            return function(e, t) {
                                if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                            }(this, a), s = function(e, t) {
                                return !t || "object" !== r(t) && "function" != typeof t ? function(e) {
                                    if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                                    return e
                                }(e) : t
                            }(this, o(a).call(this, function(e, n, r) {
                                return "string" == typeof t ? t : t(e, n, r)
                            }(n, i, c))), s.code = e, s
                        }
                        return function(e, t) {
                            if ("function" != typeof t && null !== t) throw new TypeError("Super expression must either be null or a function");
                            e.prototype = Object.create(t && t.prototype, {
                                constructor: {
                                    value: e,
                                    writable: !0,
                                    configurable: !0
                                }
                            }), t && i(e, t)
                        }(a, n), a
                    }(n);
                    s[e] = a
                }

                function u(e, t) {
                    if (Array.isArray(e)) {
                        var n = e.length;
                        return e = e.map((function(e) {
                            return String(e)
                        })), n > 2 ? "one of ".concat(t, " ").concat(e.slice(0, n - 1).join(", "), ", or ") + e[n - 1] : 2 === n ? "one of ".concat(t, " ").concat(e[0], " or ").concat(e[1]) : "of ".concat(t, " ").concat(e[0])
                    }
                    return "of ".concat(t, " ").concat(String(e))
                }
                l("ERR_AMBIGUOUS_ARGUMENT", 'The "%s" argument is ambiguous. %s', TypeError), l("ERR_INVALID_ARG_TYPE", (function(e, t, o) {
                    var i, c, s, l, f;
                    if (void 0 === a && (a = n(69282)), a("string" == typeof e, "'name' must be a string"), "string" == typeof t && (c = "not ", t.substr(0, c.length) === c) ? (i = "must not be", t = t.replace(/^not /, "")) : i = "must be", function(e, t, n) {
                            return (void 0 === n || n > e.length) && (n = e.length), e.substring(n - t.length, n) === t
                        }(e, " argument")) s = "The ".concat(e, " ").concat(i, " ").concat(u(t, "type"));
                    else {
                        var p = ("number" != typeof f && (f = 0), f + ".".length > (l = e).length || -1 === l.indexOf(".", f) ? "argument" : "property");
                        s = 'The "'.concat(e, '" ').concat(p, " ").concat(i, " ").concat(u(t, "type"))
                    }
                    return s + ". Received type ".concat(r(o))
                }), TypeError), l("ERR_INVALID_ARG_VALUE", (function(e, t) {
                    var r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "is invalid";
                    void 0 === c && (c = n(89539));
                    var o = c.inspect(t);
                    return o.length > 128 && (o = "".concat(o.slice(0, 128), "...")), "The argument '".concat(e, "' ").concat(r, ". Received ").concat(o)
                }), TypeError, RangeError), l("ERR_INVALID_RETURN_VALUE", (function(e, t, n) {
                    var o;
                    return o = n && n.constructor && n.constructor.name ? "instance of ".concat(n.constructor.name) : "type ".concat(r(n)), "Expected ".concat(e, ' to be returned from the "').concat(t, '"') + " function but got ".concat(o, ".")
                }), TypeError), l("ERR_MISSING_ARGS", (function() {
                    for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r];
                    void 0 === a && (a = n(69282)), a(t.length > 0, "At least one arg needs to be specified");
                    var o = "The ",
                        i = t.length;
                    switch (t = t.map((function(e) {
                            return '"'.concat(e, '"')
                        })), i) {
                        case 1:
                            o += "".concat(t[0], " argument");
                            break;
                        case 2:
                            o += "".concat(t[0], " and ").concat(t[1], " arguments");
                            break;
                        default:
                            o += t.slice(0, i - 1).join(", "), o += ", and ".concat(t[i - 1], " arguments")
                    }
                    return "".concat(o, " must be specified")
                }), TypeError), e.exports.codes = s
            },
            19158: (e, t, n) => {
                "use strict";

                function r(e, t) {
                    return function(e) {
                        if (Array.isArray(e)) return e
                    }(e) || function(e, t) {
                        var n = [],
                            r = !0,
                            o = !1,
                            i = void 0;
                        try {
                            for (var a, c = e[Symbol.iterator](); !(r = (a = c.next()).done) && (n.push(a.value), !t || n.length !== t); r = !0);
                        } catch (e) {
                            o = !0, i = e
                        } finally {
                            try {
                                r || null == c.return || c.return()
                            } finally {
                                if (o) throw i
                            }
                        }
                        return n
                    }(e, t) || function() {
                        throw new TypeError("Invalid attempt to destructure non-iterable instance")
                    }()
                }

                function o(e) {
                    return o = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                        return typeof e
                    } : function(e) {
                        return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                    }, o(e)
                }
                var i = void 0 !== /a/g.flags,
                    a = function(e) {
                        var t = [];
                        return e.forEach((function(e) {
                            return t.push(e)
                        })), t
                    },
                    c = function(e) {
                        var t = [];
                        return e.forEach((function(e, n) {
                            return t.push([n, e])
                        })), t
                    },
                    s = Object.is ? Object.is : n(20609),
                    l = Object.getOwnPropertySymbols ? Object.getOwnPropertySymbols : function() {
                        return []
                    },
                    u = Number.isNaN ? Number.isNaN : n(20360);

                function f(e) {
                    return e.call.bind(e)
                }
                var p = f(Object.prototype.hasOwnProperty),
                    y = f(Object.prototype.propertyIsEnumerable),
                    d = f(Object.prototype.toString),
                    g = n(89539).types,
                    h = g.isAnyArrayBuffer,
                    b = g.isArrayBufferView,
                    m = g.isDate,
                    v = g.isMap,
                    w = g.isRegExp,
                    P = g.isSet,
                    S = g.isNativeError,
                    A = g.isBoxedPrimitive,
                    E = g.isNumberObject,
                    O = g.isStringObject,
                    j = g.isBooleanObject,
                    x = g.isBigIntObject,
                    I = g.isSymbolObject,
                    k = g.isFloat32Array,
                    T = g.isFloat64Array;

                function _(e) {
                    if (0 === e.length || e.length > 10) return !0;
                    for (var t = 0; t < e.length; t++) {
                        var n = e.charCodeAt(t);
                        if (n < 48 || n > 57) return !0
                    }
                    return 10 === e.length && e >= Math.pow(2, 32)
                }

                function R(e) {
                    return Object.keys(e).filter(_).concat(l(e).filter(Object.prototype.propertyIsEnumerable.bind(e)))
                }

                function F(e, t) {
                    if (e === t) return 0;
                    for (var n = e.length, r = t.length, o = 0, i = Math.min(n, r); o < i; ++o)
                        if (e[o] !== t[o]) {
                            n = e[o], r = t[o];
                            break
                        } return n < r ? -1 : r < n ? 1 : 0
                }

                function D(e, t, n, r) {
                    if (e === t) return 0 !== e || !n || s(e, t);
                    if (n) {
                        if ("object" !== o(e)) return "number" == typeof e && u(e) && u(t);
                        if ("object" !== o(t) || null === e || null === t) return !1;
                        if (Object.getPrototypeOf(e) !== Object.getPrototypeOf(t)) return !1
                    } else {
                        if (null === e || "object" !== o(e)) return (null === t || "object" !== o(t)) && e == t;
                        if (null === t || "object" !== o(t)) return !1
                    }
                    var a, c, l, f, p = d(e);
                    if (p !== d(t)) return !1;
                    if (Array.isArray(e)) {
                        if (e.length !== t.length) return !1;
                        var y = R(e),
                            g = R(t);
                        return y.length === g.length && N(e, t, n, r, 1, y)
                    }
                    if ("[object Object]" === p && (!v(e) && v(t) || !P(e) && P(t))) return !1;
                    if (m(e)) {
                        if (!m(t) || Date.prototype.getTime.call(e) !== Date.prototype.getTime.call(t)) return !1
                    } else if (w(e)) {
                        if (!w(t) || (l = e, f = t, !(i ? l.source === f.source && l.flags === f.flags : RegExp.prototype.toString.call(l) === RegExp.prototype.toString.call(f)))) return !1
                    } else if (S(e) || e instanceof Error) {
                        if (e.message !== t.message || e.name !== t.name) return !1
                    } else {
                        if (b(e)) {
                            if (n || !k(e) && !T(e)) {
                                if (! function(e, t) {
                                        return e.byteLength === t.byteLength && 0 === F(new Uint8Array(e.buffer, e.byteOffset, e.byteLength), new Uint8Array(t.buffer, t.byteOffset, t.byteLength))
                                    }(e, t)) return !1
                            } else if (! function(e, t) {
                                    if (e.byteLength !== t.byteLength) return !1;
                                    for (var n = 0; n < e.byteLength; n++)
                                        if (e[n] !== t[n]) return !1;
                                    return !0
                                }(e, t)) return !1;
                            var _ = R(e),
                                D = R(t);
                            return _.length === D.length && N(e, t, n, r, 0, _)
                        }
                        if (P(e)) return !(!P(t) || e.size !== t.size) && N(e, t, n, r, 2);
                        if (v(e)) return !(!v(t) || e.size !== t.size) && N(e, t, n, r, 3);
                        if (h(e)) {
                            if (c = t, (a = e).byteLength !== c.byteLength || 0 !== F(new Uint8Array(a), new Uint8Array(c))) return !1
                        } else if (A(e) && ! function(e, t) {
                                return E(e) ? E(t) && s(Number.prototype.valueOf.call(e), Number.prototype.valueOf.call(t)) : O(e) ? O(t) && String.prototype.valueOf.call(e) === String.prototype.valueOf.call(t) : j(e) ? j(t) && Boolean.prototype.valueOf.call(e) === Boolean.prototype.valueOf.call(t) : x(e) ? x(t) && BigInt.prototype.valueOf.call(e) === BigInt.prototype.valueOf.call(t) : I(t) && Symbol.prototype.valueOf.call(e) === Symbol.prototype.valueOf.call(t)
                            }(e, t)) return !1
                    }
                    return N(e, t, n, r, 0)
                }

                function M(e, t) {
                    return t.filter((function(t) {
                        return y(e, t)
                    }))
                }

                function N(e, t, n, r, o, i) {
                    if (5 === arguments.length) {
                        i = Object.keys(e);
                        var a = Object.keys(t);
                        if (i.length !== a.length) return !1
                    }
                    for (var c = 0; c < i.length; c++)
                        if (!p(t, i[c])) return !1;
                    if (n && 5 === arguments.length) {
                        var s = l(e);
                        if (0 !== s.length) {
                            var u = 0;
                            for (c = 0; c < s.length; c++) {
                                var f = s[c];
                                if (y(e, f)) {
                                    if (!y(t, f)) return !1;
                                    i.push(f), u++
                                } else if (y(t, f)) return !1
                            }
                            var d = l(t);
                            if (s.length !== d.length && M(t, d).length !== u) return !1
                        } else {
                            var g = l(t);
                            if (0 !== g.length && 0 !== M(t, g).length) return !1
                        }
                    }
                    if (0 === i.length && (0 === o || 1 === o && 0 === e.length || 0 === e.size)) return !0;
                    if (void 0 === r) r = {
                        val1: new Map,
                        val2: new Map,
                        position: 0
                    };
                    else {
                        var h = r.val1.get(e);
                        if (void 0 !== h) {
                            var b = r.val2.get(t);
                            if (void 0 !== b) return h === b
                        }
                        r.position++
                    }
                    r.val1.set(e, r.position), r.val2.set(t, r.position);
                    var m = C(e, t, n, i, r, o);
                    return r.val1.delete(e), r.val2.delete(t), m
                }

                function U(e, t, n, r) {
                    for (var o = a(e), i = 0; i < o.length; i++) {
                        var c = o[i];
                        if (D(t, c, n, r)) return e.delete(c), !0
                    }
                    return !1
                }

                function L(e) {
                    switch (o(e)) {
                        case "undefined":
                            return null;
                        case "object":
                            return;
                        case "symbol":
                            return !1;
                        case "string":
                            e = +e;
                        case "number":
                            if (u(e)) return !1
                    }
                    return !0
                }

                function B(e, t, n) {
                    var r = L(n);
                    return null != r ? r : t.has(r) && !e.has(r)
                }

                function q(e, t, n, r, o) {
                    var i = L(n);
                    if (null != i) return i;
                    var a = t.get(i);
                    return !(void 0 === a && !t.has(i) || !D(r, a, !1, o)) && !e.has(i) && D(r, a, !1, o)
                }

                function $(e, t, n, r, o, i) {
                    for (var c = a(e), s = 0; s < c.length; s++) {
                        var l = c[s];
                        if (D(n, l, o, i) && D(r, t.get(l), o, i)) return e.delete(l), !0
                    }
                    return !1
                }

                function C(e, t, n, i, s, l) {
                    var u = 0;
                    if (2 === l) {
                        if (! function(e, t, n, r) {
                                for (var i = null, c = a(e), s = 0; s < c.length; s++) {
                                    var l = c[s];
                                    if ("object" === o(l) && null !== l) null === i && (i = new Set), i.add(l);
                                    else if (!t.has(l)) {
                                        if (n) return !1;
                                        if (!B(e, t, l)) return !1;
                                        null === i && (i = new Set), i.add(l)
                                    }
                                }
                                if (null !== i) {
                                    for (var u = a(t), f = 0; f < u.length; f++) {
                                        var p = u[f];
                                        if ("object" === o(p) && null !== p) {
                                            if (!U(i, p, n, r)) return !1
                                        } else if (!n && !e.has(p) && !U(i, p, n, r)) return !1
                                    }
                                    return 0 === i.size
                                }
                                return !0
                            }(e, t, n, s)) return !1
                    } else if (3 === l) {
                        if (! function(e, t, n, i) {
                                for (var a = null, s = c(e), l = 0; l < s.length; l++) {
                                    var u = r(s[l], 2),
                                        f = u[0],
                                        p = u[1];
                                    if ("object" === o(f) && null !== f) null === a && (a = new Set), a.add(f);
                                    else {
                                        var y = t.get(f);
                                        if (void 0 === y && !t.has(f) || !D(p, y, n, i)) {
                                            if (n) return !1;
                                            if (!q(e, t, f, p, i)) return !1;
                                            null === a && (a = new Set), a.add(f)
                                        }
                                    }
                                }
                                if (null !== a) {
                                    for (var d = c(t), g = 0; g < d.length; g++) {
                                        var h = r(d[g], 2),
                                            b = (f = h[0], h[1]);
                                        if ("object" === o(f) && null !== f) {
                                            if (!$(a, e, f, b, n, i)) return !1
                                        } else if (!(n || e.has(f) && D(e.get(f), b, !1, i) || $(a, e, f, b, !1, i))) return !1
                                    }
                                    return 0 === a.size
                                }
                                return !0
                            }(e, t, n, s)) return !1
                    } else if (1 === l)
                        for (; u < e.length; u++) {
                            if (!p(e, u)) {
                                if (p(t, u)) return !1;
                                for (var f = Object.keys(e); u < f.length; u++) {
                                    var y = f[u];
                                    if (!p(t, y) || !D(e[y], t[y], n, s)) return !1
                                }
                                return f.length === Object.keys(t).length
                            }
                            if (!p(t, u) || !D(e[u], t[u], n, s)) return !1
                        }
                    for (u = 0; u < i.length; u++) {
                        var d = i[u];
                        if (!D(e[d], t[d], n, s)) return !1
                    }
                    return !0
                }
                e.exports = {
                    isDeepEqual: function(e, t) {
                        return D(e, t, !1)
                    },
                    isDeepStrictEqual: function(e, t) {
                        return D(e, t, !0)
                    }
                }
            },
            54220: (e, t, n) => {
                "use strict";
                n.d(t, {
                    H: () => o
                });
                var r = n(25108);
                class o {
                    static shared = new o;
                    activeSubscription = null;
                    get editorUnlocked() {
                        return !!this.activeSubscription
                    }
                    get externalPluginsUnlocked() {
                        return !!this.activeSubscription
                    }
                    async refreshSubscription() {
                        let e = await fetch("https://get.metapress.dev/api/payments/checkSubscription").then((e => e.json()));
                        if (e.errorText) throw new Error(e.errorText);
                        this.activeSubscription = e.subscriptionInfo, setTimeout((function() {
                            r.debug(`[MetaPress] Subscription for ${e.domain} is: ${e.subscription}`)
                        }), 1)
                    }
                    async subscribe(e) {
                        let t = `https://get.metapress.dev/api/payments/subscribe?domain=${encodeURIComponent(window.location.hostname)}&affiliateCode=${encodeURIComponent(e||"")}`,
                            n = window.screenLeft || window.screenX || 0,
                            r = window.screenTop || window.screenY || 0,
                            o = window.outerWidth || 1920,
                            i = window.outerHeight || 1080,
                            a = Math.max(n + o / 2 - 300, 0),
                            c = Math.max(r + i / 2 - 400, 0),
                            s = window.open(t, "manage-subscription", `width=600,height=800,left=${a},top=${c},menubar=no,toolbar=no,location=no,personalbar=no,status=no`);
                        for (; await new Promise((e => setTimeout(e, 500))), !s.closed;);
                        await this.refreshSubscription()
                    }
                }
            },
            55293: (e, t, n) => {
                "use strict";
                n.d(t, {
                    BV: () => a,
                    ZP: () => i,
                    mc: () => c
                });
                var r = n(54220),
                    o = n(25108);
                class i {
                    all = [];
                    stats = {
                        eventsEmitted: 0,
                        recordEvents: !1,
                        recordedEvents: []
                    };
                    get allLoaded() {
                        return this.startedAllPlugins
                    }
                    startedAllPlugins = !1;
                    allPluginsRegistered = !1;
                    loadingPluginMetadata = [];
                    pendingLoadPromises = [];
                    async start() {
                        o.debug("[MetaPress] Loading plugins...");
                        let e = await this.register(Promise.all([n.e(745), n.e(8718)]).then(n.bind(n, 88718)), {
                            name: "Loader",
                            InternalPluginKey: s
                        });
                        await e.waitForLoaderReady(), await r.H.shared.refreshSubscription().catch((e => {
                            setTimeout((function() {
                                o.error("[MetaPress] Unable to check subscription: " + e.message)
                            }), 1)
                        })), this.register(Promise.all([n.e(8250), n.e(7568)]).then(n.bind(n, 7568)), {
                            name: "Animations",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(140), n.e(1217), n.e(8646), n.e(452), n.e(5414)]).then(n.bind(n, 65414)), {
                            name: "Built-in Objects",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(4162), n.e(6955)]).then(n.bind(n, 26955)), {
                            name: "Camera Controller",
                            InternalPluginKey: s
                        }), this.register(n.e(3301).then(n.bind(n, 13301)), {
                            name: "Entity Manager",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(840), n.e(7109)]).then(n.bind(n, 77109)), {
                            name: "Input Manager",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(140), n.e(4162), n.e(8789), n.e(9528)]).then(n.bind(n, 9528)), {
                            name: "Physics",
                            InternalPluginKey: s
                        }), this.register(n.e(4142).then(n.bind(n, 84142)), {
                            name: "Raycasting",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(8646), n.e(1259), n.e(6282)]).then(n.bind(n, 16282)), {
                            name: "Regions",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(8250), n.e(2371), n.e(3170)]).then(n.bind(n, 83170)), {
                            name: "World Renderer",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(2371), n.e(3696)]).then(n.bind(n, 73696)), {
                            name: "Ambient Occlusion",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(140), n.e(1217), n.e(2050), n.e(7387)]).then(n.bind(n, 37387)), {
                            name: "VR Manager",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(3446)]).then(n.bind(n, 43446)), {
                            name: "Avatar Manager",
                            InternalPluginKey: s
                        }), this.register(n.e(5380).then(n.bind(n, 55380)), {
                            name: "Default Avatar",
                            InternalPluginKey: s
                        }), this.register(n.e(4240).then(n.bind(n, 54240)), {
                            name: "Extra Avatars",
                            InternalPluginKey: s
                        }), this.register(n.e(2167).then(n.bind(n, 92167)), {
                            name: "Audio Core",
                            InternalPluginKey: s
                        }), this.register(n.e(1530).then(n.bind(n, 41530)), {
                            name: "Media",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(8764), n.e(8853), n.e(510)]).then(n.bind(n, 82944)), {
                            name: "P2P Audio",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(5651), n.e(8151), n.e(2589), n.e(516), n.e(2116)]).then(n.bind(n, 62116)), {
                            name: "Open Link",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(983), n.e(341)]).then(n.bind(n, 90341)), {
                            name: "Asset Manager",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(5972), n.e(4659)]).then(n.bind(n, 4659)), {
                            name: "Backend",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(745), n.e(3738)]).then(n.bind(n, 43738)), {
                            name: "Chat",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(5651), n.e(2238), n.e(2589), n.e(1985)]).then(n.bind(n, 31985)), {
                            name: "Debug",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(745), n.e(9104)]).then(n.bind(n, 89104)), {
                            name: "Navigation",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(5651), n.e(8250), n.e(3475), n.e(2589), n.e(4716)]).then(n.bind(n, 4716)), {
                            name: "Emojis",
                            InternalPluginKey: s
                        }), this.register(n.e(242).then(n.bind(n, 242)), {
                            name: "Mixamo Compatibility",
                            InternalPluginKey: s
                        }), this.register(n.e(4148).then(n.bind(n, 94148)), {
                            name: "Nametags",
                            InternalPluginKey: s
                        }), this.register(n.e(2973).then(n.bind(n, 42973)), {
                            name: "Notifier",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(8764), n.e(7600), n.e(5101)]).then(n.bind(n, 45101)), {
                            name: "Portals",
                            InternalPluginKey: s
                        }), this.register(n.e(9402).then(n.bind(n, 89402)), {
                            name: "Profiles",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(5651), n.e(8151), n.e(2589), n.e(516), n.e(4530)]).then(n.bind(n, 4530)), {
                            name: "Site content",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(2031)]).then(n.bind(n, 32031)), {
                            name: "Spawn points",
                            InternalPluginKey: s
                        }), this.register(n.e(9649).then(n.bind(n, 19649)), {
                            name: "URL Hash Location",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(8764), n.e(5319), n.e(1003)]).then(n.bind(n, 91003)), {
                            name: "Optimize GLB Imports",
                            InternalPluginKey: s
                        }), this.register(n.e(488).then(n.bind(n, 10488)), {
                            name: "WordPress Integration",
                            InternalPluginKey: s
                        }), this.register(n.e(3756).then(n.bind(n, 3756)), {
                            name: "WebDAV Integration",
                            InternalPluginKey: s
                        }), this.register(n.e(2302).then(n.bind(n, 22302)), {
                            name: "Template File Integration",
                            InternalPluginKey: s
                        }), this.register(n.e(7141).then(n.bind(n, 27141)), {
                            name: "Web Weaver AI",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(8764), n.e(8853), n.e(4025)]).then(n.bind(n, 45604)), {
                            name: "Ethereal Storage",
                            InternalPluginKey: s
                        }), this.register(n.e(5948).then(n.bind(n, 25948)), {
                            name: "Messaging",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(1310), n.e(781)]).then(n.bind(n, 10781)), {
                            name: "MQTT",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(5651), n.e(745), n.e(1884), n.e(2589), n.e(4079)]).then(n.bind(n, 4079)), {
                            name: "Dialogs",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(5651), n.e(745), n.e(9220), n.e(2589), n.e(2009)]).then(n.bind(n, 42009)), {
                            name: "Editor",
                            InternalPluginKey: s
                        }), this.register(n.e(7195).then(n.bind(n, 47195)), {
                            name: "Fullscreen Support",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(5651), n.e(745), n.e(8764), n.e(1036), n.e(2589), n.e(1023)]).then(n.bind(n, 66579)), {
                            name: "Menubar",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(5651), n.e(2589), n.e(100)]).then(n.bind(n, 30100)), {
                            name: "Settings Panel",
                            InternalPluginKey: s
                        }), this.register(Promise.all([n.e(9477), n.e(2212)]).then(n.bind(n, 12212)), {
                            name: "User Interface",
                            InternalPluginKey: s
                        }), this.register(n.e(3746).then(n.bind(n, 63746)), {
                            name: "Action Panel",
                            InternalPluginKey: s
                        }), await this.waitForAllPluginsToLoad(), this.allPluginsRegistered = !0, "loading" == document.readyState && (o.debug("[MetaPress] Waiting for document to finish loading..."), await new Promise((e => window.addEventListener("DOMContentLoaded", e))));
                        for (let e of window.metapressPluginLoaders || []) this.pendingLoadPromises.push(e());
                        window.metapressPluginLoaders = {
                            push: async e => {
                                this.pendingLoadPromises.push(e()), await this.waitForAllPluginsToLoad()
                            }
                        }, await this.waitForAllPluginsToLoad(), o.debug("[MetaPress] All plugins loaded!"), this.startedAllPlugins = !0, metapress.plugins.sendEvent("onAppReady")
                    }
                    async waitForAllPluginsToLoad() {
                        for (; this._isWaitingForPluginsToLoad;) await new Promise((e => setTimeout(e, 100)));
                        for (this._isWaitingForPluginsToLoad = !0;;) {
                            for (let e of this.pendingLoadPromises) {
                                try {
                                    await e
                                } catch (e) {
                                    o.warn("[MetaPress] Plugin load error:", e)
                                }
                                this.pendingLoadPromises = this.pendingLoadPromises.filter((t => t != e))
                            }
                            let e = this.pluginLoadCheck();
                            for (let e of this.all) await e._loadPromise;
                            if (!e) break;
                            await new Promise((e => setTimeout(e, 100)))
                        }
                        this._isWaitingForPluginsToLoad = !1
                    }
                    async register(e, t) {
                        if (t?.InternalPluginKey === s || r.H.shared.externalPluginsUnlocked) {
                            t && delete t.InternalPluginKey, t && this.loadingPluginMetadata.push(t);
                            try {
                                if (e instanceof Promise && (this.pendingLoadPromises.push(e), e = await e), e.__esModule && (e = e.default), "function" == typeof e && (e = new e), !e.id) throw new Error("No 'id' field found on the registered plugin.");
                                if (e.id.includes(">")) throw new Error("Invalid character '>' in plugin ID.");
                                if (this.all.find((t => t.id == e.id))) throw new Error(`Plugin with ID '${e.id}' already registered.`);
                                return e.config = metapress.config[e.id] || {}, e._state = a.Waiting, this.all.push(e), this.all.sort(((e, t) => (e.priority || 0) - (t.priority || 0))), this.startedAllPlugins && this.waitForAllPluginsToLoad(), e
                            } finally {
                                t && (this.loadingPluginMetadata = this.loadingPluginMetadata.filter((e => e != t)))
                            }
                        } else o.warn(`[MetaPress] External plugin '${t?.name||e?.id}' is not loaded because no valid subscription was found.`)
                    }
                    pluginLoadCheck() {
                        let e = !1;
                        for (let t of this.all) this.pluginLoadCheckIndividual(t) && (e = !0);
                        if (!e)
                            for (let e of this.all) this.pluginDependencyCheckIndividual(e);
                        return e
                    }
                    pluginLoadCheckIndividual(e) {
                        if (e._state == a.Loading) return !0;
                        if (e._state == a.Loaded) return !1;
                        if (e._state == a.Error) return !1;
                        let t = !1;
                        for (let n of e.requires || [])
                            if (!this.getProvider(n)) {
                                t = !0;
                                break
                            } return !t && (e._state = a.Loading, e._loadPromise = Promise.resolve().then((async () => {
                            try {
                                await (e.onLoad?.()), e._state = a.Loaded, this.sendEvent("onPluginLoad", e), o.debug(`[MetaPress] Plugin loaded: ${e.id}`);
                                let t = e.provides || [];
                                for (let n of t) {
                                    let t = this.all.find((t => t._state == a.Loaded && t.provides?.includes(n) && t.id != e.id));
                                    t && o.warn(`[MetaPress] Plugin '${e.id}' provides '${n}', but so does '${t.id}'. This can have unintended side effects.`)
                                }
                            } catch (t) {
                                t.cancelled ? o.debug(`[MetaPress] Plugin '${e.id}' was skipped: ${t.message}`) : o.error(`[MetaPress] Plugin '${e.id}' failed to load:`, t), e._state = a.Error, e._error = t
                            }
                        })), !0)
                    }
                    pluginDependencyCheckIndividual(e) {
                        if (e._state == a.Waiting)
                            for (let t of e.requires || [])
                                if (!this.getProvider(t)) return e._state = a.Error, e._error = {
                                    message: `The dependency '${t}' was not found.`,
                                    cancelled: !0
                                }, void o.debug(`[MetaPress] Plugin '${e.id}' was skipped: ${e._error.message}`)
                    }
                    _sendEvent(e, t, n, r) {
                        if (this.stats.eventsEmitted += 1, this.stats.recordEvents && "_onInternalEvent" != t && this.stats.recordedEvents.push({
                                responseMode: e,
                                name: t,
                                args: n,
                                isAsync: r,
                                date: Date.now()
                            }), this._callStack || (this._callStack = []), this._callStack.includes(t)) return;
                        this._callStack.push(t);
                        let i = null;
                        try {
                            let r = this._listeners[t];
                            if (r?.length)
                                for (let e of r) e(...n);
                            i = e == c.All || e == c.AllAsync ? [] : null;
                            let s = t.split(">"),
                                l = null,
                                u = null;
                            1 == s.length ? (l = null, u = s[0].trim()) : s.length >= 2 && (l = s[0].trim(), u = s[1].trim()), u = "$" + u;
                            for (let t of this.all)
                                if (t._state == a.Loaded && (!l || t.id == l) && (l || t[u])) try {
                                    let r = e == c.AllAsync ? Promise.resolve().then((() => t[u]?.apply(t, n))) : t[u]?.apply(t, n);
                                    if (null == r);
                                    else if (e == c.All || e == c.AllAsync) i.push(r);
                                    else if (e == c.First) {
                                        i = r;
                                        break
                                    }
                                } catch (e) {
                                    o.error(`[MetaPress] Error calling plugin '${t.id}.${u}':`, e)
                                }
                        } catch (e) {
                            o.error(e)
                        }
                        return this._callStack.pop(), i
                    }
                    sendEvent(e, ...t) {
                        this._sendEvent(c.None, e, t), this._sendEvent(c.None, "_onInternalEvent", [c.None, e, t])
                    }
                    call(e, ...t) {
                        return this._sendEvent(c.First, e, t) ?? this._sendEvent(c.First, "_onInternalEvent", [c.First, e, t])
                    }
                    callAll(e, ...t) {
                        return [...this._sendEvent(c.All, e, t), ...this._sendEvent(c.All, "_onInternalEvent", [c.All, e, t]).flat()]
                    }
                    async callAsync(e, ...t) {
                        let n = this._sendEvent(c.AllAsync, e, t),
                            r = this._sendEvent(c.AllAsync, "_onInternalEvent", [c.All, e, t]);
                        return n = await Promise.all(n), r = await Promise.all(r), n.find((e => !!e)) ?? r.flat().find((e => !!e))
                    }
                    async callAllAsync(e, ...t) {
                        let n = this._sendEvent(c.AllAsync, e, t),
                            r = this._sendEvent(c.AllAsync, "_onInternalEvent", [e, t]);
                        return n = await Promise.all(n), r = await Promise.all(r), [...n, ...r.flat()].filter((e => !!e))
                    }
                    getProvider(e, t) {
                        return t ? this.all.find((t => t.provides?.includes(e))) : this.all.find((t => t._state == a.Loaded && t.provides?.includes(e)))
                    }
                    _listeners = {};
                    addEventListener(e, t) {
                        this._listeners[e] || (this._listeners[e] = []), this._listeners[e].push(t)
                    }
                    removeEventListener(e, t) {
                        this._listeners[e] && (this._listeners[e] = this._listeners[e].filter((e => e != t)))
                    }
                }
                const a = {
                        Waiting: "waiting",
                        Loading: "loading",
                        Loaded: "loaded",
                        Error: "error"
                    },
                    c = {
                        None: 0,
                        First: 1,
                        All: 2,
                        AllAsync: 3
                    };
                var s = Math.random() + ":" + Math.random()
            },
            21924: (e, t, n) => {
                "use strict";
                var r = n(40210),
                    o = n(55559),
                    i = o(r("String.prototype.indexOf"));
                e.exports = function(e, t) {
                    var n = r(e, !!t);
                    return "function" == typeof n && i(e, ".prototype.") > -1 ? o(n) : n
                }
            },
            55559: (e, t, n) => {
                "use strict";
                var r = n(58612),
                    o = n(40210),
                    i = o("%Function.prototype.apply%"),
                    a = o("%Function.prototype.call%"),
                    c = o("%Reflect.apply%", !0) || r.call(a, i),
                    s = o("%Object.getOwnPropertyDescriptor%", !0),
                    l = o("%Object.defineProperty%", !0),
                    u = o("%Math.max%");
                if (l) try {
                    l({}, "a", {
                        value: 1
                    })
                } catch (e) {
                    l = null
                }
                e.exports = function(e) {
                    var t = c(r, a, arguments);
                    if (s && l) {
                        var n = s(t, "length");
                        n.configurable && l(t, "length", {
                            value: 1 + u(0, e.length - (arguments.length - 1))
                        })
                    }
                    return t
                };
                var f = function() {
                    return c(r, i, arguments)
                };
                l ? l(e.exports, "apply", {
                    value: f
                }) : e.exports.apply = f
            },
            25108: (e, t, n) => {
                var r = n(89539),
                    o = n(69282);

                function i() {
                    return (new Date).getTime()
                }
                var a, c = Array.prototype.slice,
                    s = {};
                a = void 0 !== n.g && n.g.console ? n.g.console : "undefined" != typeof window && window.console ? window.console : {};
                for (var l = [
                        [function() {}, "log"],
                        [function() {
                            a.log.apply(a, arguments)
                        }, "info"],
                        [function() {
                            a.log.apply(a, arguments)
                        }, "warn"],
                        [function() {
                            a.warn.apply(a, arguments)
                        }, "error"],
                        [function(e) {
                            s[e] = i()
                        }, "time"],
                        [function(e) {
                            var t = s[e];
                            if (!t) throw new Error("No such label: " + e);
                            delete s[e];
                            var n = i() - t;
                            a.log(e + ": " + n + "ms")
                        }, "timeEnd"],
                        [function() {
                            var e = new Error;
                            e.name = "Trace", e.message = r.format.apply(null, arguments), a.error(e.stack)
                        }, "trace"],
                        [function(e) {
                            a.log(r.inspect(e) + "\n")
                        }, "dir"],
                        [function(e) {
                            if (!e) {
                                var t = c.call(arguments, 1);
                                o.ok(!1, r.format.apply(null, t))
                            }
                        }, "assert"]
                    ], u = 0; u < l.length; u++) {
                    var f = l[u],
                        p = f[0],
                        y = f[1];
                    a[y] || (a[y] = p)
                }
                e.exports = a
            },
            4289: (e, t, n) => {
                "use strict";
                var r = n(82215),
                    o = "function" == typeof Symbol && "symbol" == typeof Symbol("foo"),
                    i = Object.prototype.toString,
                    a = Array.prototype.concat,
                    c = Object.defineProperty,
                    s = n(31044)(),
                    l = c && s,
                    u = function(e, t, n, r) {
                        var o;
                        (!(t in e) || "function" == typeof(o = r) && "[object Function]" === i.call(o) && r()) && (l ? c(e, t, {
                            configurable: !0,
                            enumerable: !1,
                            value: n,
                            writable: !0
                        }) : e[t] = n)
                    },
                    f = function(e, t) {
                        var n = arguments.length > 2 ? arguments[2] : {},
                            i = r(t);
                        o && (i = a.call(i, Object.getOwnPropertySymbols(t)));
                        for (var c = 0; c < i.length; c += 1) u(e, i[c], t[i[c]], n[i[c]])
                    };
                f.supportsDescriptors = !!l, e.exports = f
            },
            8091: e => {
                "use strict";

                function t(e, t) {
                    if (null == e) throw new TypeError("Cannot convert first argument to object");
                    for (var n = Object(e), r = 1; r < arguments.length; r++) {
                        var o = arguments[r];
                        if (null != o)
                            for (var i = Object.keys(Object(o)), a = 0, c = i.length; a < c; a++) {
                                var s = i[a],
                                    l = Object.getOwnPropertyDescriptor(o, s);
                                void 0 !== l && l.enumerable && (n[s] = o[s])
                            }
                    }
                    return n
                }
                e.exports = {
                    assign: t,
                    polyfill: function() {
                        Object.assign || Object.defineProperty(Object, "assign", {
                            enumerable: !1,
                            configurable: !0,
                            writable: !0,
                            value: t
                        })
                    }
                }
            },
            94029: (e, t, n) => {
                "use strict";
                var r = n(95320),
                    o = Object.prototype.toString,
                    i = Object.prototype.hasOwnProperty,
                    a = function(e, t, n) {
                        for (var r = 0, o = e.length; r < o; r++) i.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
                    },
                    c = function(e, t, n) {
                        for (var r = 0, o = e.length; r < o; r++) null == n ? t(e.charAt(r), r, e) : t.call(n, e.charAt(r), r, e)
                    },
                    s = function(e, t, n) {
                        for (var r in e) i.call(e, r) && (null == n ? t(e[r], r, e) : t.call(n, e[r], r, e))
                    };
                e.exports = function(e, t, n) {
                    if (!r(t)) throw new TypeError("iterator must be a function");
                    var i;
                    arguments.length >= 3 && (i = n), "[object Array]" === o.call(e) ? a(e, t, i) : "string" == typeof e ? c(e, t, i) : s(e, t, i)
                }
            },
            17648: e => {
                "use strict";
                var t = "Function.prototype.bind called on incompatible ",
                    n = Array.prototype.slice,
                    r = Object.prototype.toString,
                    o = "[object Function]";
                e.exports = function(e) {
                    var i = this;
                    if ("function" != typeof i || r.call(i) !== o) throw new TypeError(t + i);
                    for (var a, c = n.call(arguments, 1), s = function() {
                            if (this instanceof a) {
                                var t = i.apply(this, c.concat(n.call(arguments)));
                                return Object(t) === t ? t : this
                            }
                            return i.apply(e, c.concat(n.call(arguments)))
                        }, l = Math.max(0, i.length - c.length), u = [], f = 0; f < l; f++) u.push("$" + f);
                    if (a = Function("binder", "return function (" + u.join(",") + "){ return binder.apply(this,arguments); }")(s), i.prototype) {
                        var p = function() {};
                        p.prototype = i.prototype, a.prototype = new p, p.prototype = null
                    }
                    return a
                }
            },
            58612: (e, t, n) => {
                "use strict";
                var r = n(17648);
                e.exports = Function.prototype.bind || r
            },
            40210: (e, t, n) => {
                "use strict";
                var r, o = SyntaxError,
                    i = Function,
                    a = TypeError,
                    c = function(e) {
                        try {
                            return i('"use strict"; return (' + e + ").constructor;")()
                        } catch (e) {}
                    },
                    s = Object.getOwnPropertyDescriptor;
                if (s) try {
                    s({}, "")
                } catch (e) {
                    s = null
                }
                var l = function() {
                        throw new a
                    },
                    u = s ? function() {
                        try {
                            return l
                        } catch (e) {
                            try {
                                return s(arguments, "callee").get
                            } catch (e) {
                                return l
                            }
                        }
                    }() : l,
                    f = n(41405)(),
                    p = Object.getPrototypeOf || function(e) {
                        return e.__proto__
                    },
                    y = {},
                    d = "undefined" == typeof Uint8Array ? r : p(Uint8Array),
                    g = {
                        "%AggregateError%": "undefined" == typeof AggregateError ? r : AggregateError,
                        "%Array%": Array,
                        "%ArrayBuffer%": "undefined" == typeof ArrayBuffer ? r : ArrayBuffer,
                        "%ArrayIteratorPrototype%": f ? p([][Symbol.iterator]()) : r,
                        "%AsyncFromSyncIteratorPrototype%": r,
                        "%AsyncFunction%": y,
                        "%AsyncGenerator%": y,
                        "%AsyncGeneratorFunction%": y,
                        "%AsyncIteratorPrototype%": y,
                        "%Atomics%": "undefined" == typeof Atomics ? r : Atomics,
                        "%BigInt%": "undefined" == typeof BigInt ? r : BigInt,
                        "%BigInt64Array%": "undefined" == typeof BigInt64Array ? r : BigInt64Array,
                        "%BigUint64Array%": "undefined" == typeof BigUint64Array ? r : BigUint64Array,
                        "%Boolean%": Boolean,
                        "%DataView%": "undefined" == typeof DataView ? r : DataView,
                        "%Date%": Date,
                        "%decodeURI%": decodeURI,
                        "%decodeURIComponent%": decodeURIComponent,
                        "%encodeURI%": encodeURI,
                        "%encodeURIComponent%": encodeURIComponent,
                        "%Error%": Error,
                        "%eval%": eval,
                        "%EvalError%": EvalError,
                        "%Float32Array%": "undefined" == typeof Float32Array ? r : Float32Array,
                        "%Float64Array%": "undefined" == typeof Float64Array ? r : Float64Array,
                        "%FinalizationRegistry%": "undefined" == typeof FinalizationRegistry ? r : FinalizationRegistry,
                        "%Function%": i,
                        "%GeneratorFunction%": y,
                        "%Int8Array%": "undefined" == typeof Int8Array ? r : Int8Array,
                        "%Int16Array%": "undefined" == typeof Int16Array ? r : Int16Array,
                        "%Int32Array%": "undefined" == typeof Int32Array ? r : Int32Array,
                        "%isFinite%": isFinite,
                        "%isNaN%": isNaN,
                        "%IteratorPrototype%": f ? p(p([][Symbol.iterator]())) : r,
                        "%JSON%": "object" == typeof JSON ? JSON : r,
                        "%Map%": "undefined" == typeof Map ? r : Map,
                        "%MapIteratorPrototype%": "undefined" != typeof Map && f ? p((new Map)[Symbol.iterator]()) : r,
                        "%Math%": Math,
                        "%Number%": Number,
                        "%Object%": Object,
                        "%parseFloat%": parseFloat,
                        "%parseInt%": parseInt,
                        "%Promise%": "undefined" == typeof Promise ? r : Promise,
                        "%Proxy%": "undefined" == typeof Proxy ? r : Proxy,
                        "%RangeError%": RangeError,
                        "%ReferenceError%": ReferenceError,
                        "%Reflect%": "undefined" == typeof Reflect ? r : Reflect,
                        "%RegExp%": RegExp,
                        "%Set%": "undefined" == typeof Set ? r : Set,
                        "%SetIteratorPrototype%": "undefined" != typeof Set && f ? p((new Set)[Symbol.iterator]()) : r,
                        "%SharedArrayBuffer%": "undefined" == typeof SharedArrayBuffer ? r : SharedArrayBuffer,
                        "%String%": String,
                        "%StringIteratorPrototype%": f ? p("" [Symbol.iterator]()) : r,
                        "%Symbol%": f ? Symbol : r,
                        "%SyntaxError%": o,
                        "%ThrowTypeError%": u,
                        "%TypedArray%": d,
                        "%TypeError%": a,
                        "%Uint8Array%": "undefined" == typeof Uint8Array ? r : Uint8Array,
                        "%Uint8ClampedArray%": "undefined" == typeof Uint8ClampedArray ? r : Uint8ClampedArray,
                        "%Uint16Array%": "undefined" == typeof Uint16Array ? r : Uint16Array,
                        "%Uint32Array%": "undefined" == typeof Uint32Array ? r : Uint32Array,
                        "%URIError%": URIError,
                        "%WeakMap%": "undefined" == typeof WeakMap ? r : WeakMap,
                        "%WeakRef%": "undefined" == typeof WeakRef ? r : WeakRef,
                        "%WeakSet%": "undefined" == typeof WeakSet ? r : WeakSet
                    };
                try {
                    null.error
                } catch (e) {
                    var h = p(p(e));
                    g["%Error.prototype%"] = h
                }
                var b = function e(t) {
                        var n;
                        if ("%AsyncFunction%" === t) n = c("async function () {}");
                        else if ("%GeneratorFunction%" === t) n = c("function* () {}");
                        else if ("%AsyncGeneratorFunction%" === t) n = c("async function* () {}");
                        else if ("%AsyncGenerator%" === t) {
                            var r = e("%AsyncGeneratorFunction%");
                            r && (n = r.prototype)
                        } else if ("%AsyncIteratorPrototype%" === t) {
                            var o = e("%AsyncGenerator%");
                            o && (n = p(o.prototype))
                        }
                        return g[t] = n, n
                    },
                    m = {
                        "%ArrayBufferPrototype%": ["ArrayBuffer", "prototype"],
                        "%ArrayPrototype%": ["Array", "prototype"],
                        "%ArrayProto_entries%": ["Array", "prototype", "entries"],
                        "%ArrayProto_forEach%": ["Array", "prototype", "forEach"],
                        "%ArrayProto_keys%": ["Array", "prototype", "keys"],
                        "%ArrayProto_values%": ["Array", "prototype", "values"],
                        "%AsyncFunctionPrototype%": ["AsyncFunction", "prototype"],
                        "%AsyncGenerator%": ["AsyncGeneratorFunction", "prototype"],
                        "%AsyncGeneratorPrototype%": ["AsyncGeneratorFunction", "prototype", "prototype"],
                        "%BooleanPrototype%": ["Boolean", "prototype"],
                        "%DataViewPrototype%": ["DataView", "prototype"],
                        "%DatePrototype%": ["Date", "prototype"],
                        "%ErrorPrototype%": ["Error", "prototype"],
                        "%EvalErrorPrototype%": ["EvalError", "prototype"],
                        "%Float32ArrayPrototype%": ["Float32Array", "prototype"],
                        "%Float64ArrayPrototype%": ["Float64Array", "prototype"],
                        "%FunctionPrototype%": ["Function", "prototype"],
                        "%Generator%": ["GeneratorFunction", "prototype"],
                        "%GeneratorPrototype%": ["GeneratorFunction", "prototype", "prototype"],
                        "%Int8ArrayPrototype%": ["Int8Array", "prototype"],
                        "%Int16ArrayPrototype%": ["Int16Array", "prototype"],
                        "%Int32ArrayPrototype%": ["Int32Array", "prototype"],
                        "%JSONParse%": ["JSON", "parse"],
                        "%JSONStringify%": ["JSON", "stringify"],
                        "%MapPrototype%": ["Map", "prototype"],
                        "%NumberPrototype%": ["Number", "prototype"],
                        "%ObjectPrototype%": ["Object", "prototype"],
                        "%ObjProto_toString%": ["Object", "prototype", "toString"],
                        "%ObjProto_valueOf%": ["Object", "prototype", "valueOf"],
                        "%PromisePrototype%": ["Promise", "prototype"],
                        "%PromiseProto_then%": ["Promise", "prototype", "then"],
                        "%Promise_all%": ["Promise", "all"],
                        "%Promise_reject%": ["Promise", "reject"],
                        "%Promise_resolve%": ["Promise", "resolve"],
                        "%RangeErrorPrototype%": ["RangeError", "prototype"],
                        "%ReferenceErrorPrototype%": ["ReferenceError", "prototype"],
                        "%RegExpPrototype%": ["RegExp", "prototype"],
                        "%SetPrototype%": ["Set", "prototype"],
                        "%SharedArrayBufferPrototype%": ["SharedArrayBuffer", "prototype"],
                        "%StringPrototype%": ["String", "prototype"],
                        "%SymbolPrototype%": ["Symbol", "prototype"],
                        "%SyntaxErrorPrototype%": ["SyntaxError", "prototype"],
                        "%TypedArrayPrototype%": ["TypedArray", "prototype"],
                        "%TypeErrorPrototype%": ["TypeError", "prototype"],
                        "%Uint8ArrayPrototype%": ["Uint8Array", "prototype"],
                        "%Uint8ClampedArrayPrototype%": ["Uint8ClampedArray", "prototype"],
                        "%Uint16ArrayPrototype%": ["Uint16Array", "prototype"],
                        "%Uint32ArrayPrototype%": ["Uint32Array", "prototype"],
                        "%URIErrorPrototype%": ["URIError", "prototype"],
                        "%WeakMapPrototype%": ["WeakMap", "prototype"],
                        "%WeakSetPrototype%": ["WeakSet", "prototype"]
                    },
                    v = n(58612),
                    w = n(17642),
                    P = v.call(Function.call, Array.prototype.concat),
                    S = v.call(Function.apply, Array.prototype.splice),
                    A = v.call(Function.call, String.prototype.replace),
                    E = v.call(Function.call, String.prototype.slice),
                    O = v.call(Function.call, RegExp.prototype.exec),
                    j = /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
                    x = /\\(\\)?/g,
                    I = function(e) {
                        var t = E(e, 0, 1),
                            n = E(e, -1);
                        if ("%" === t && "%" !== n) throw new o("invalid intrinsic syntax, expected closing `%`");
                        if ("%" === n && "%" !== t) throw new o("invalid intrinsic syntax, expected opening `%`");
                        var r = [];
                        return A(e, j, (function(e, t, n, o) {
                            r[r.length] = n ? A(o, x, "$1") : t || e
                        })), r
                    },
                    k = function(e, t) {
                        var n, r = e;
                        if (w(m, r) && (r = "%" + (n = m[r])[0] + "%"), w(g, r)) {
                            var i = g[r];
                            if (i === y && (i = b(r)), void 0 === i && !t) throw new a("intrinsic " + e + " exists, but is not available. Please file an issue!");
                            return {
                                alias: n,
                                name: r,
                                value: i
                            }
                        }
                        throw new o("intrinsic " + e + " does not exist!")
                    };
                e.exports = function(e, t) {
                    if ("string" != typeof e || 0 === e.length) throw new a("intrinsic name must be a non-empty string");
                    if (arguments.length > 1 && "boolean" != typeof t) throw new a('"allowMissing" argument must be a boolean');
                    if (null === O(/^%?[^%]*%?$/, e)) throw new o("`%` may not be present anywhere but at the beginning and end of the intrinsic name");
                    var n = I(e),
                        r = n.length > 0 ? n[0] : "",
                        i = k("%" + r + "%", t),
                        c = i.name,
                        l = i.value,
                        u = !1,
                        f = i.alias;
                    f && (r = f[0], S(n, P([0, 1], f)));
                    for (var p = 1, y = !0; p < n.length; p += 1) {
                        var d = n[p],
                            h = E(d, 0, 1),
                            b = E(d, -1);
                        if (('"' === h || "'" === h || "`" === h || '"' === b || "'" === b || "`" === b) && h !== b) throw new o("property names with quotes must have matching quotes");
                        if ("constructor" !== d && y || (u = !0), w(g, c = "%" + (r += "." + d) + "%")) l = g[c];
                        else if (null != l) {
                            if (!(d in l)) {
                                if (!t) throw new a("base intrinsic for " + e + " exists, but the property is not available.");
                                return
                            }
                            if (s && p + 1 >= n.length) {
                                var m = s(l, d);
                                l = (y = !!m) && "get" in m && !("originalValue" in m.get) ? m.get : l[d]
                            } else y = w(l, d), l = l[d];
                            y && !u && (g[c] = l)
                        }
                    }
                    return l
                }
            },
            27296: (e, t, n) => {
                "use strict";
                var r = n(40210)("%Object.getOwnPropertyDescriptor%", !0);
                if (r) try {
                    r([], "length")
                } catch (e) {
                    r = null
                }
                e.exports = r
            },
            31044: (e, t, n) => {
                "use strict";
                var r = n(40210)("%Object.defineProperty%", !0),
                    o = function() {
                        if (r) try {
                            return r({}, "a", {
                                value: 1
                            }), !0
                        } catch (e) {
                            return !1
                        }
                        return !1
                    };
                o.hasArrayLengthDefineBug = function() {
                    if (!o()) return null;
                    try {
                        return 1 !== r([], "length", {
                            value: 1
                        }).length
                    } catch (e) {
                        return !0
                    }
                }, e.exports = o
            },
            41405: (e, t, n) => {
                "use strict";
                var r = "undefined" != typeof Symbol && Symbol,
                    o = n(55419);
                e.exports = function() {
                    return "function" == typeof r && "function" == typeof Symbol && "symbol" == typeof r("foo") && "symbol" == typeof Symbol("bar") && o()
                }
            },
            55419: e => {
                "use strict";
                e.exports = function() {
                    if ("function" != typeof Symbol || "function" != typeof Object.getOwnPropertySymbols) return !1;
                    if ("symbol" == typeof Symbol.iterator) return !0;
                    var e = {},
                        t = Symbol("test"),
                        n = Object(t);
                    if ("string" == typeof t) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(t)) return !1;
                    if ("[object Symbol]" !== Object.prototype.toString.call(n)) return !1;
                    for (t in e[t] = 42, e) return !1;
                    if ("function" == typeof Object.keys && 0 !== Object.keys(e).length) return !1;
                    if ("function" == typeof Object.getOwnPropertyNames && 0 !== Object.getOwnPropertyNames(e).length) return !1;
                    var r = Object.getOwnPropertySymbols(e);
                    if (1 !== r.length || r[0] !== t) return !1;
                    if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1;
                    if ("function" == typeof Object.getOwnPropertyDescriptor) {
                        var o = Object.getOwnPropertyDescriptor(e, t);
                        if (42 !== o.value || !0 !== o.enumerable) return !1
                    }
                    return !0
                }
            },
            96410: (e, t, n) => {
                "use strict";
                var r = n(55419);
                e.exports = function() {
                    return r() && !!Symbol.toStringTag
                }
            },
            17642: (e, t, n) => {
                "use strict";
                var r = n(58612);
                e.exports = r.call(Function.call, Object.prototype.hasOwnProperty)
            },
            35717: e => {
                "function" == typeof Object.create ? e.exports = function(e, t) {
                    t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                        constructor: {
                            value: e,
                            enumerable: !1,
                            writable: !0,
                            configurable: !0
                        }
                    }))
                } : e.exports = function(e, t) {
                    if (t) {
                        e.super_ = t;
                        var n = function() {};
                        n.prototype = t.prototype, e.prototype = new n, e.prototype.constructor = e
                    }
                }
            },
            82584: (e, t, n) => {
                "use strict";
                var r = n(96410)(),
                    o = n(21924)("Object.prototype.toString"),
                    i = function(e) {
                        return !(r && e && "object" == typeof e && Symbol.toStringTag in e) && "[object Arguments]" === o(e)
                    },
                    a = function(e) {
                        return !!i(e) || null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== o(e) && "[object Function]" === o(e.callee)
                    },
                    c = function() {
                        return i(arguments)
                    }();
                i.isLegacyArguments = a, e.exports = c ? i : a
            },
            95320: e => {
                "use strict";
                var t, n, r = Function.prototype.toString,
                    o = "object" == typeof Reflect && null !== Reflect && Reflect.apply;
                if ("function" == typeof o && "function" == typeof Object.defineProperty) try {
                    t = Object.defineProperty({}, "length", {
                        get: function() {
                            throw n
                        }
                    }), n = {}, o((function() {
                        throw 42
                    }), null, t)
                } catch (e) {
                    e !== n && (o = null)
                } else o = null;
                var i = /^\s*class\b/,
                    a = function(e) {
                        try {
                            var t = r.call(e);
                            return i.test(t)
                        } catch (e) {
                            return !1
                        }
                    },
                    c = function(e) {
                        try {
                            return !a(e) && (r.call(e), !0)
                        } catch (e) {
                            return !1
                        }
                    },
                    s = Object.prototype.toString,
                    l = "function" == typeof Symbol && !!Symbol.toStringTag,
                    u = !(0 in [, ]),
                    f = function() {
                        return !1
                    };
                if ("object" == typeof document) {
                    var p = document.all;
                    s.call(p) === s.call(document.all) && (f = function(e) {
                        if ((u || !e) && (void 0 === e || "object" == typeof e)) try {
                            var t = s.call(e);
                            return ("[object HTMLAllCollection]" === t || "[object HTML document.all class]" === t || "[object HTMLCollection]" === t || "[object Object]" === t) && null == e("")
                        } catch (e) {}
                        return !1
                    })
                }
                e.exports = o ? function(e) {
                    if (f(e)) return !0;
                    if (!e) return !1;
                    if ("function" != typeof e && "object" != typeof e) return !1;
                    try {
                        o(e, null, t)
                    } catch (e) {
                        if (e !== n) return !1
                    }
                    return !a(e) && c(e)
                } : function(e) {
                    if (f(e)) return !0;
                    if (!e) return !1;
                    if ("function" != typeof e && "object" != typeof e) return !1;
                    if (l) return c(e);
                    if (a(e)) return !1;
                    var t = s.call(e);
                    return !("[object Function]" !== t && "[object GeneratorFunction]" !== t && !/^\[object HTML/.test(t)) && c(e)
                }
            },
            48662: (e, t, n) => {
                "use strict";
                var r, o = Object.prototype.toString,
                    i = Function.prototype.toString,
                    a = /^\s*(?:function)?\*/,
                    c = n(96410)(),
                    s = Object.getPrototypeOf;
                e.exports = function(e) {
                    if ("function" != typeof e) return !1;
                    if (a.test(i.call(e))) return !0;
                    if (!c) return "[object GeneratorFunction]" === o.call(e);
                    if (!s) return !1;
                    if (void 0 === r) {
                        var t = function() {
                            if (!c) return !1;
                            try {
                                return Function("return function*() {}")()
                            } catch (e) {}
                        }();
                        r = !!t && s(t)
                    }
                    return s(e) === r
                }
            },
            98611: e => {
                "use strict";
                e.exports = function(e) {
                    return e != e
                }
            },
            20360: (e, t, n) => {
                "use strict";
                var r = n(55559),
                    o = n(4289),
                    i = n(98611),
                    a = n(29415),
                    c = n(23194),
                    s = r(a(), Number);
                o(s, {
                    getPolyfill: a,
                    implementation: i,
                    shim: c
                }), e.exports = s
            },
            29415: (e, t, n) => {
                "use strict";
                var r = n(98611);
                e.exports = function() {
                    return Number.isNaN && Number.isNaN(NaN) && !Number.isNaN("a") ? Number.isNaN : r
                }
            },
            23194: (e, t, n) => {
                "use strict";
                var r = n(4289),
                    o = n(29415);
                e.exports = function() {
                    var e = o();
                    return r(Number, {
                        isNaN: e
                    }, {
                        isNaN: function() {
                            return Number.isNaN !== e
                        }
                    }), e
                }
            },
            85692: (e, t, n) => {
                "use strict";
                var r = n(94029),
                    o = n(63083),
                    i = n(21924),
                    a = i("Object.prototype.toString"),
                    c = n(96410)(),
                    s = n(27296),
                    l = "undefined" == typeof globalThis ? n.g : globalThis,
                    u = o(),
                    f = i("Array.prototype.indexOf", !0) || function(e, t) {
                        for (var n = 0; n < e.length; n += 1)
                            if (e[n] === t) return n;
                        return -1
                    },
                    p = i("String.prototype.slice"),
                    y = {},
                    d = Object.getPrototypeOf;
                c && s && d && r(u, (function(e) {
                    var t = new l[e];
                    if (Symbol.toStringTag in t) {
                        var n = d(t),
                            r = s(n, Symbol.toStringTag);
                        if (!r) {
                            var o = d(n);
                            r = s(o, Symbol.toStringTag)
                        }
                        y[e] = r.get
                    }
                })), e.exports = function(e) {
                    if (!e || "object" != typeof e) return !1;
                    if (!c || !(Symbol.toStringTag in e)) {
                        var t = p(a(e), 8, -1);
                        return f(u, t) > -1
                    }
                    return !!s && function(e) {
                        var t = !1;
                        return r(y, (function(n, r) {
                            if (!t) try {
                                t = n.call(e) === r
                            } catch (e) {}
                        })), t
                    }(e)
                }
            },
            24244: e => {
                "use strict";
                var t = function(e) {
                    return e != e
                };
                e.exports = function(e, n) {
                    return 0 === e && 0 === n ? 1 / e == 1 / n : e === n || !(!t(e) || !t(n))
                }
            },
            20609: (e, t, n) => {
                "use strict";
                var r = n(4289),
                    o = n(55559),
                    i = n(24244),
                    a = n(75624),
                    c = n(52281),
                    s = o(a(), Object);
                r(s, {
                    getPolyfill: a,
                    implementation: i,
                    shim: c
                }), e.exports = s
            },
            75624: (e, t, n) => {
                "use strict";
                var r = n(24244);
                e.exports = function() {
                    return "function" == typeof Object.is ? Object.is : r
                }
            },
            52281: (e, t, n) => {
                "use strict";
                var r = n(75624),
                    o = n(4289);
                e.exports = function() {
                    var e = r();
                    return o(Object, {
                        is: e
                    }, {
                        is: function() {
                            return Object.is !== e
                        }
                    }), e
                }
            },
            18987: (e, t, n) => {
                "use strict";
                var r;
                if (!Object.keys) {
                    var o = Object.prototype.hasOwnProperty,
                        i = Object.prototype.toString,
                        a = n(21414),
                        c = Object.prototype.propertyIsEnumerable,
                        s = !c.call({
                            toString: null
                        }, "toString"),
                        l = c.call((function() {}), "prototype"),
                        u = ["toString", "toLocaleString", "valueOf", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "constructor"],
                        f = function(e) {
                            var t = e.constructor;
                            return t && t.prototype === e
                        },
                        p = {
                            $applicationCache: !0,
                            $console: !0,
                            $external: !0,
                            $frame: !0,
                            $frameElement: !0,
                            $frames: !0,
                            $innerHeight: !0,
                            $innerWidth: !0,
                            $onmozfullscreenchange: !0,
                            $onmozfullscreenerror: !0,
                            $outerHeight: !0,
                            $outerWidth: !0,
                            $pageXOffset: !0,
                            $pageYOffset: !0,
                            $parent: !0,
                            $scrollLeft: !0,
                            $scrollTop: !0,
                            $scrollX: !0,
                            $scrollY: !0,
                            $self: !0,
                            $webkitIndexedDB: !0,
                            $webkitStorageInfo: !0,
                            $window: !0
                        },
                        y = function() {
                            if ("undefined" == typeof window) return !1;
                            for (var e in window) try {
                                if (!p["$" + e] && o.call(window, e) && null !== window[e] && "object" == typeof window[e]) try {
                                    f(window[e])
                                } catch (e) {
                                    return !0
                                }
                            } catch (e) {
                                return !0
                            }
                            return !1
                        }();
                    r = function(e) {
                        var t = null !== e && "object" == typeof e,
                            n = "[object Function]" === i.call(e),
                            r = a(e),
                            c = t && "[object String]" === i.call(e),
                            p = [];
                        if (!t && !n && !r) throw new TypeError("Object.keys called on a non-object");
                        var d = l && n;
                        if (c && e.length > 0 && !o.call(e, 0))
                            for (var g = 0; g < e.length; ++g) p.push(String(g));
                        if (r && e.length > 0)
                            for (var h = 0; h < e.length; ++h) p.push(String(h));
                        else
                            for (var b in e) d && "prototype" === b || !o.call(e, b) || p.push(String(b));
                        if (s)
                            for (var m = function(e) {
                                    if ("undefined" == typeof window || !y) return f(e);
                                    try {
                                        return f(e)
                                    } catch (e) {
                                        return !1
                                    }
                                }(e), v = 0; v < u.length; ++v) m && "constructor" === u[v] || !o.call(e, u[v]) || p.push(u[v]);
                        return p
                    }
                }
                e.exports = r
            },
            82215: (e, t, n) => {
                "use strict";
                var r = Array.prototype.slice,
                    o = n(21414),
                    i = Object.keys,
                    a = i ? function(e) {
                        return i(e)
                    } : n(18987),
                    c = Object.keys;
                a.shim = function() {
                    if (Object.keys) {
                        var e = function() {
                            var e = Object.keys(arguments);
                            return e && e.length === arguments.length
                        }(1, 2);
                        e || (Object.keys = function(e) {
                            return o(e) ? c(r.call(e)) : c(e)
                        })
                    } else Object.keys = a;
                    return Object.keys || a
                }, e.exports = a
            },
            21414: e => {
                "use strict";
                var t = Object.prototype.toString;
                e.exports = function(e) {
                    var n = t.call(e),
                        r = "[object Arguments]" === n;
                    return r || (r = "[object Array]" !== n && null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Function]" === t.call(e.callee)), r
                }
            },
            34155: e => {
                var t, n, r = e.exports = {};

                function o() {
                    throw new Error("setTimeout has not been defined")
                }

                function i() {
                    throw new Error("clearTimeout has not been defined")
                }

                function a(e) {
                    if (t === setTimeout) return setTimeout(e, 0);
                    if ((t === o || !t) && setTimeout) return t = setTimeout, setTimeout(e, 0);
                    try {
                        return t(e, 0)
                    } catch (n) {
                        try {
                            return t.call(null, e, 0)
                        } catch (n) {
                            return t.call(this, e, 0)
                        }
                    }
                }! function() {
                    try {
                        t = "function" == typeof setTimeout ? setTimeout : o
                    } catch (e) {
                        t = o
                    }
                    try {
                        n = "function" == typeof clearTimeout ? clearTimeout : i
                    } catch (e) {
                        n = i
                    }
                }();
                var c, s = [],
                    l = !1,
                    u = -1;

                function f() {
                    l && c && (l = !1, c.length ? s = c.concat(s) : u = -1, s.length && p())
                }

                function p() {
                    if (!l) {
                        var e = a(f);
                        l = !0;
                        for (var t = s.length; t;) {
                            for (c = s, s = []; ++u < t;) c && c[u].run();
                            u = -1, t = s.length
                        }
                        c = null, l = !1,
                            function(e) {
                                if (n === clearTimeout) return clearTimeout(e);
                                if ((n === i || !n) && clearTimeout) return n = clearTimeout, clearTimeout(e);
                                try {
                                    n(e)
                                } catch (t) {
                                    try {
                                        return n.call(null, e)
                                    } catch (t) {
                                        return n.call(this, e)
                                    }
                                }
                            }(e)
                    }
                }

                function y(e, t) {
                    this.fun = e, this.array = t
                }

                function d() {}
                r.nextTick = function(e) {
                    var t = new Array(arguments.length - 1);
                    if (arguments.length > 1)
                        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
                    s.push(new y(e, t)), 1 !== s.length || l || a(p)
                }, y.prototype.run = function() {
                    this.fun.apply(null, this.array)
                }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = d, r.addListener = d, r.once = d, r.off = d, r.removeListener = d, r.removeAllListeners = d, r.emit = d, r.prependListener = d, r.prependOnceListener = d, r.listeners = function(e) {
                    return []
                }, r.binding = function(e) {
                    throw new Error("process.binding is not supported")
                }, r.cwd = function() {
                    return "/"
                }, r.chdir = function(e) {
                    throw new Error("process.chdir is not supported")
                }, r.umask = function() {
                    return 0
                }
            },
            20384: e => {
                e.exports = function(e) {
                    return e && "object" == typeof e && "function" == typeof e.copy && "function" == typeof e.fill && "function" == typeof e.readUInt8
                }
            },
            55955: (e, t, n) => {
                "use strict";
                var r = n(82584),
                    o = n(48662),
                    i = n(86430),
                    a = n(85692);

                function c(e) {
                    return e.call.bind(e)
                }
                var s = "undefined" != typeof BigInt,
                    l = "undefined" != typeof Symbol,
                    u = c(Object.prototype.toString),
                    f = c(Number.prototype.valueOf),
                    p = c(String.prototype.valueOf),
                    y = c(Boolean.prototype.valueOf);
                if (s) var d = c(BigInt.prototype.valueOf);
                if (l) var g = c(Symbol.prototype.valueOf);

                function h(e, t) {
                    if ("object" != typeof e) return !1;
                    try {
                        return t(e), !0
                    } catch (e) {
                        return !1
                    }
                }

                function b(e) {
                    return "[object Map]" === u(e)
                }

                function m(e) {
                    return "[object Set]" === u(e)
                }

                function v(e) {
                    return "[object WeakMap]" === u(e)
                }

                function w(e) {
                    return "[object WeakSet]" === u(e)
                }

                function P(e) {
                    return "[object ArrayBuffer]" === u(e)
                }

                function S(e) {
                    return "undefined" != typeof ArrayBuffer && (P.working ? P(e) : e instanceof ArrayBuffer)
                }

                function A(e) {
                    return "[object DataView]" === u(e)
                }

                function E(e) {
                    return "undefined" != typeof DataView && (A.working ? A(e) : e instanceof DataView)
                }
                t.isArgumentsObject = r, t.isGeneratorFunction = o, t.isTypedArray = a, t.isPromise = function(e) {
                    return "undefined" != typeof Promise && e instanceof Promise || null !== e && "object" == typeof e && "function" == typeof e.then && "function" == typeof e.catch
                }, t.isArrayBufferView = function(e) {
                    return "undefined" != typeof ArrayBuffer && ArrayBuffer.isView ? ArrayBuffer.isView(e) : a(e) || E(e)
                }, t.isUint8Array = function(e) {
                    return "Uint8Array" === i(e)
                }, t.isUint8ClampedArray = function(e) {
                    return "Uint8ClampedArray" === i(e)
                }, t.isUint16Array = function(e) {
                    return "Uint16Array" === i(e)
                }, t.isUint32Array = function(e) {
                    return "Uint32Array" === i(e)
                }, t.isInt8Array = function(e) {
                    return "Int8Array" === i(e)
                }, t.isInt16Array = function(e) {
                    return "Int16Array" === i(e)
                }, t.isInt32Array = function(e) {
                    return "Int32Array" === i(e)
                }, t.isFloat32Array = function(e) {
                    return "Float32Array" === i(e)
                }, t.isFloat64Array = function(e) {
                    return "Float64Array" === i(e)
                }, t.isBigInt64Array = function(e) {
                    return "BigInt64Array" === i(e)
                }, t.isBigUint64Array = function(e) {
                    return "BigUint64Array" === i(e)
                }, b.working = "undefined" != typeof Map && b(new Map), t.isMap = function(e) {
                    return "undefined" != typeof Map && (b.working ? b(e) : e instanceof Map)
                }, m.working = "undefined" != typeof Set && m(new Set), t.isSet = function(e) {
                    return "undefined" != typeof Set && (m.working ? m(e) : e instanceof Set)
                }, v.working = "undefined" != typeof WeakMap && v(new WeakMap), t.isWeakMap = function(e) {
                    return "undefined" != typeof WeakMap && (v.working ? v(e) : e instanceof WeakMap)
                }, w.working = "undefined" != typeof WeakSet && w(new WeakSet), t.isWeakSet = function(e) {
                    return w(e)
                }, P.working = "undefined" != typeof ArrayBuffer && P(new ArrayBuffer), t.isArrayBuffer = S, A.working = "undefined" != typeof ArrayBuffer && "undefined" != typeof DataView && A(new DataView(new ArrayBuffer(1), 0, 1)), t.isDataView = E;
                var O = "undefined" != typeof SharedArrayBuffer ? SharedArrayBuffer : void 0;

                function j(e) {
                    return "[object SharedArrayBuffer]" === u(e)
                }

                function x(e) {
                    return void 0 !== O && (void 0 === j.working && (j.working = j(new O)), j.working ? j(e) : e instanceof O)
                }

                function I(e) {
                    return h(e, f)
                }

                function k(e) {
                    return h(e, p)
                }

                function T(e) {
                    return h(e, y)
                }

                function _(e) {
                    return s && h(e, d)
                }

                function R(e) {
                    return l && h(e, g)
                }
                t.isSharedArrayBuffer = x, t.isAsyncFunction = function(e) {
                    return "[object AsyncFunction]" === u(e)
                }, t.isMapIterator = function(e) {
                    return "[object Map Iterator]" === u(e)
                }, t.isSetIterator = function(e) {
                    return "[object Set Iterator]" === u(e)
                }, t.isGeneratorObject = function(e) {
                    return "[object Generator]" === u(e)
                }, t.isWebAssemblyCompiledModule = function(e) {
                    return "[object WebAssembly.Module]" === u(e)
                }, t.isNumberObject = I, t.isStringObject = k, t.isBooleanObject = T, t.isBigIntObject = _, t.isSymbolObject = R, t.isBoxedPrimitive = function(e) {
                    return I(e) || k(e) || T(e) || _(e) || R(e)
                }, t.isAnyArrayBuffer = function(e) {
                    return "undefined" != typeof Uint8Array && (S(e) || x(e))
                }, ["isProxy", "isExternal", "isModuleNamespaceObject"].forEach((function(e) {
                    Object.defineProperty(t, e, {
                        enumerable: !1,
                        value: function() {
                            throw new Error(e + " is not supported in userland")
                        }
                    })
                }))
            },
            89539: (e, t, n) => {
                var r = n(34155),
                    o = n(25108),
                    i = Object.getOwnPropertyDescriptors || function(e) {
                        for (var t = Object.keys(e), n = {}, r = 0; r < t.length; r++) n[t[r]] = Object.getOwnPropertyDescriptor(e, t[r]);
                        return n
                    },
                    a = /%[sdj%]/g;
                t.format = function(e) {
                    if (!w(e)) {
                        for (var t = [], n = 0; n < arguments.length; n++) t.push(u(arguments[n]));
                        return t.join(" ")
                    }
                    n = 1;
                    for (var r = arguments, o = r.length, i = String(e).replace(a, (function(e) {
                            if ("%%" === e) return "%";
                            if (n >= o) return e;
                            switch (e) {
                                case "%s":
                                    return String(r[n++]);
                                case "%d":
                                    return Number(r[n++]);
                                case "%j":
                                    try {
                                        return JSON.stringify(r[n++])
                                    } catch (e) {
                                        return "[Circular]"
                                    }
                                default:
                                    return e
                            }
                        })), c = r[n]; n < o; c = r[++n]) m(c) || !A(c) ? i += " " + c : i += " " + u(c);
                    return i
                }, t.deprecate = function(e, n) {
                    if (void 0 !== r && !0 === r.noDeprecation) return e;
                    if (void 0 === r) return function() {
                        return t.deprecate(e, n).apply(this, arguments)
                    };
                    var i = !1;
                    return function() {
                        if (!i) {
                            if (r.throwDeprecation) throw new Error(n);
                            r.traceDeprecation ? o.trace(n) : o.error(n), i = !0
                        }
                        return e.apply(this, arguments)
                    }
                };
                var c = {},
                    s = /^$/;
                if (r.env.NODE_DEBUG) {
                    var l = r.env.NODE_DEBUG;
                    l = l.replace(/[|\\{}()[\]^$+?.]/g, "\\$&").replace(/\*/g, ".*").replace(/,/g, "$|^").toUpperCase(), s = new RegExp("^" + l + "$", "i")
                }

                function u(e, n) {
                    var r = {
                        seen: [],
                        stylize: p
                    };
                    return arguments.length >= 3 && (r.depth = arguments[2]), arguments.length >= 4 && (r.colors = arguments[3]), b(n) ? r.showHidden = n : n && t._extend(r, n), P(r.showHidden) && (r.showHidden = !1), P(r.depth) && (r.depth = 2), P(r.colors) && (r.colors = !1), P(r.customInspect) && (r.customInspect = !0), r.colors && (r.stylize = f), y(r, e, r.depth)
                }

                function f(e, t) {
                    var n = u.styles[t];
                    return n ? "[" + u.colors[n][0] + "m" + e + "[" + u.colors[n][1] + "m" : e
                }

                function p(e, t) {
                    return e
                }

                function y(e, n, r) {
                    if (e.customInspect && n && j(n.inspect) && n.inspect !== t.inspect && (!n.constructor || n.constructor.prototype !== n)) {
                        var o = n.inspect(r, e);
                        return w(o) || (o = y(e, o, r)), o
                    }
                    var i = function(e, t) {
                        if (P(t)) return e.stylize("undefined", "undefined");
                        if (w(t)) {
                            var n = "'" + JSON.stringify(t).replace(/^"|"$/g, "").replace(/'/g, "\\'").replace(/\\"/g, '"') + "'";
                            return e.stylize(n, "string")
                        }
                        return v(t) ? e.stylize("" + t, "number") : b(t) ? e.stylize("" + t, "boolean") : m(t) ? e.stylize("null", "null") : void 0
                    }(e, n);
                    if (i) return i;
                    var a = Object.keys(n),
                        c = function(e) {
                            var t = {};
                            return e.forEach((function(e, n) {
                                t[e] = !0
                            })), t
                        }(a);
                    if (e.showHidden && (a = Object.getOwnPropertyNames(n)), O(n) && (a.indexOf("message") >= 0 || a.indexOf("description") >= 0)) return d(n);
                    if (0 === a.length) {
                        if (j(n)) {
                            var s = n.name ? ": " + n.name : "";
                            return e.stylize("[Function" + s + "]", "special")
                        }
                        if (S(n)) return e.stylize(RegExp.prototype.toString.call(n), "regexp");
                        if (E(n)) return e.stylize(Date.prototype.toString.call(n), "date");
                        if (O(n)) return d(n)
                    }
                    var l, u = "",
                        f = !1,
                        p = ["{", "}"];
                    return h(n) && (f = !0, p = ["[", "]"]), j(n) && (u = " [Function" + (n.name ? ": " + n.name : "") + "]"), S(n) && (u = " " + RegExp.prototype.toString.call(n)), E(n) && (u = " " + Date.prototype.toUTCString.call(n)), O(n) && (u = " " + d(n)), 0 !== a.length || f && 0 != n.length ? r < 0 ? S(n) ? e.stylize(RegExp.prototype.toString.call(n), "regexp") : e.stylize("[Object]", "special") : (e.seen.push(n), l = f ? function(e, t, n, r, o) {
                        for (var i = [], a = 0, c = t.length; a < c; ++a) _(t, String(a)) ? i.push(g(e, t, n, r, String(a), !0)) : i.push("");
                        return o.forEach((function(o) {
                            o.match(/^\d+$/) || i.push(g(e, t, n, r, o, !0))
                        })), i
                    }(e, n, r, c, a) : a.map((function(t) {
                        return g(e, n, r, c, t, f)
                    })), e.seen.pop(), function(e, t, n) {
                        return e.reduce((function(e, t) {
                            return t.indexOf("\n"), e + t.replace(/\u001b\[\d\d?m/g, "").length + 1
                        }), 0) > 60 ? n[0] + ("" === t ? "" : t + "\n ") + " " + e.join(",\n  ") + " " + n[1] : n[0] + t + " " + e.join(", ") + " " + n[1]
                    }(l, u, p)) : p[0] + u + p[1]
                }

                function d(e) {
                    return "[" + Error.prototype.toString.call(e) + "]"
                }

                function g(e, t, n, r, o, i) {
                    var a, c, s;
                    if ((s = Object.getOwnPropertyDescriptor(t, o) || {
                            value: t[o]
                        }).get ? c = s.set ? e.stylize("[Getter/Setter]", "special") : e.stylize("[Getter]", "special") : s.set && (c = e.stylize("[Setter]", "special")), _(r, o) || (a = "[" + o + "]"), c || (e.seen.indexOf(s.value) < 0 ? (c = m(n) ? y(e, s.value, null) : y(e, s.value, n - 1)).indexOf("\n") > -1 && (c = i ? c.split("\n").map((function(e) {
                            return "  " + e
                        })).join("\n").slice(2) : "\n" + c.split("\n").map((function(e) {
                            return "   " + e
                        })).join("\n")) : c = e.stylize("[Circular]", "special")), P(a)) {
                        if (i && o.match(/^\d+$/)) return c;
                        (a = JSON.stringify("" + o)).match(/^"([a-zA-Z_][a-zA-Z_0-9]*)"$/) ? (a = a.slice(1, -1), a = e.stylize(a, "name")) : (a = a.replace(/'/g, "\\'").replace(/\\"/g, '"').replace(/(^"|"$)/g, "'"), a = e.stylize(a, "string"))
                    }
                    return a + ": " + c
                }

                function h(e) {
                    return Array.isArray(e)
                }

                function b(e) {
                    return "boolean" == typeof e
                }

                function m(e) {
                    return null === e
                }

                function v(e) {
                    return "number" == typeof e
                }

                function w(e) {
                    return "string" == typeof e
                }

                function P(e) {
                    return void 0 === e
                }

                function S(e) {
                    return A(e) && "[object RegExp]" === x(e)
                }

                function A(e) {
                    return "object" == typeof e && null !== e
                }

                function E(e) {
                    return A(e) && "[object Date]" === x(e)
                }

                function O(e) {
                    return A(e) && ("[object Error]" === x(e) || e instanceof Error)
                }

                function j(e) {
                    return "function" == typeof e
                }

                function x(e) {
                    return Object.prototype.toString.call(e)
                }

                function I(e) {
                    return e < 10 ? "0" + e.toString(10) : e.toString(10)
                }
                t.debuglog = function(e) {
                    if (e = e.toUpperCase(), !c[e])
                        if (s.test(e)) {
                            var n = r.pid;
                            c[e] = function() {
                                var r = t.format.apply(t, arguments);
                                o.error("%s %d: %s", e, n, r)
                            }
                        } else c[e] = function() {};
                    return c[e]
                }, t.inspect = u, u.colors = {
                    bold: [1, 22],
                    italic: [3, 23],
                    underline: [4, 24],
                    inverse: [7, 27],
                    white: [37, 39],
                    grey: [90, 39],
                    black: [30, 39],
                    blue: [34, 39],
                    cyan: [36, 39],
                    green: [32, 39],
                    magenta: [35, 39],
                    red: [31, 39],
                    yellow: [33, 39]
                }, u.styles = {
                    special: "cyan",
                    number: "yellow",
                    boolean: "yellow",
                    undefined: "grey",
                    null: "bold",
                    string: "green",
                    date: "magenta",
                    regexp: "red"
                }, t.types = n(55955), t.isArray = h, t.isBoolean = b, t.isNull = m, t.isNullOrUndefined = function(e) {
                    return null == e
                }, t.isNumber = v, t.isString = w, t.isSymbol = function(e) {
                    return "symbol" == typeof e
                }, t.isUndefined = P, t.isRegExp = S, t.types.isRegExp = S, t.isObject = A, t.isDate = E, t.types.isDate = E, t.isError = O, t.types.isNativeError = O, t.isFunction = j, t.isPrimitive = function(e) {
                    return null === e || "boolean" == typeof e || "number" == typeof e || "string" == typeof e || "symbol" == typeof e || void 0 === e
                }, t.isBuffer = n(20384);
                var k = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

                function T() {
                    var e = new Date,
                        t = [I(e.getHours()), I(e.getMinutes()), I(e.getSeconds())].join(":");
                    return [e.getDate(), k[e.getMonth()], t].join(" ")
                }

                function _(e, t) {
                    return Object.prototype.hasOwnProperty.call(e, t)
                }
                t.log = function() {
                    o.log("%s - %s", T(), t.format.apply(t, arguments))
                }, t.inherits = n(35717), t._extend = function(e, t) {
                    if (!t || !A(t)) return e;
                    for (var n = Object.keys(t), r = n.length; r--;) e[n[r]] = t[n[r]];
                    return e
                };
                var R = "undefined" != typeof Symbol ? Symbol("util.promisify.custom") : void 0;

                function F(e, t) {
                    if (!e) {
                        var n = new Error("Promise was rejected with a falsy value");
                        n.reason = e, e = n
                    }
                    return t(e)
                }
                t.promisify = function(e) {
                    if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');
                    if (R && e[R]) {
                        var t;
                        if ("function" != typeof(t = e[R])) throw new TypeError('The "util.promisify.custom" argument must be of type Function');
                        return Object.defineProperty(t, R, {
                            value: t,
                            enumerable: !1,
                            writable: !1,
                            configurable: !0
                        }), t
                    }

                    function t() {
                        for (var t, n, r = new Promise((function(e, r) {
                                t = e, n = r
                            })), o = [], i = 0; i < arguments.length; i++) o.push(arguments[i]);
                        o.push((function(e, r) {
                            e ? n(e) : t(r)
                        }));
                        try {
                            e.apply(this, o)
                        } catch (e) {
                            n(e)
                        }
                        return r
                    }
                    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), R && Object.defineProperty(t, R, {
                        value: t,
                        enumerable: !1,
                        writable: !1,
                        configurable: !0
                    }), Object.defineProperties(t, i(e))
                }, t.promisify.custom = R, t.callbackify = function(e) {
                    if ("function" != typeof e) throw new TypeError('The "original" argument must be of type Function');

                    function t() {
                        for (var t = [], n = 0; n < arguments.length; n++) t.push(arguments[n]);
                        var o = t.pop();
                        if ("function" != typeof o) throw new TypeError("The last argument must be of type Function");
                        var i = this,
                            a = function() {
                                return o.apply(i, arguments)
                            };
                        e.apply(this, t).then((function(e) {
                            r.nextTick(a.bind(null, null, e))
                        }), (function(e) {
                            r.nextTick(F.bind(null, e, a))
                        }))
                    }
                    return Object.setPrototypeOf(t, Object.getPrototypeOf(e)), Object.defineProperties(t, i(e)), t
                }
            },
            28721: (e, t, n) => {
                "use strict";
                n.d(t, {
                    Z: () => s
                });
                const r = {
                    randomUUID: "undefined" != typeof crypto && crypto.randomUUID && crypto.randomUUID.bind(crypto)
                };
                let o;
                const i = new Uint8Array(16);

                function a() {
                    if (!o && (o = "undefined" != typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto), !o)) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
                    return o(i)
                }
                const c = [];
                for (let e = 0; e < 256; ++e) c.push((e + 256).toString(16).slice(1));
                const s = function(e, t, n) {
                    if (r.randomUUID && !t && !e) return r.randomUUID();
                    const o = (e = e || {}).random || (e.rng || a)();
                    if (o[6] = 15 & o[6] | 64, o[8] = 63 & o[8] | 128, t) {
                        n = n || 0;
                        for (let e = 0; e < 16; ++e) t[n + e] = o[e];
                        return t
                    }
                    return function(e, t = 0) {
                        return (c[e[t + 0]] + c[e[t + 1]] + c[e[t + 2]] + c[e[t + 3]] + "-" + c[e[t + 4]] + c[e[t + 5]] + "-" + c[e[t + 6]] + c[e[t + 7]] + "-" + c[e[t + 8]] + c[e[t + 9]] + "-" + c[e[t + 10]] + c[e[t + 11]] + c[e[t + 12]] + c[e[t + 13]] + c[e[t + 14]] + c[e[t + 15]]).toLowerCase()
                    }(o)
                }
            },
            86430: (e, t, n) => {
                "use strict";
                var r = n(94029),
                    o = n(63083),
                    i = n(21924),
                    a = n(27296),
                    c = i("Object.prototype.toString"),
                    s = n(96410)(),
                    l = "undefined" == typeof globalThis ? n.g : globalThis,
                    u = o(),
                    f = i("String.prototype.slice"),
                    p = {},
                    y = Object.getPrototypeOf;
                s && a && y && r(u, (function(e) {
                    if ("function" == typeof l[e]) {
                        var t = new l[e];
                        if (Symbol.toStringTag in t) {
                            var n = y(t),
                                r = a(n, Symbol.toStringTag);
                            if (!r) {
                                var o = y(n);
                                r = a(o, Symbol.toStringTag)
                            }
                            p[e] = r.get
                        }
                    }
                }));
                var d = n(85692);
                e.exports = function(e) {
                    return !!d(e) && (s && Symbol.toStringTag in e ? function(e) {
                        var t = !1;
                        return r(p, (function(n, r) {
                            if (!t) try {
                                var o = n.call(e);
                                o === r && (t = o)
                            } catch (e) {}
                        })), t
                    }(e) : f(c(e), 8, -1))
                }
            },
            63083: (e, t, n) => {
                "use strict";
                var r = ["BigInt64Array", "BigUint64Array", "Float32Array", "Float64Array", "Int16Array", "Int32Array", "Int8Array", "Uint16Array", "Uint32Array", "Uint8Array", "Uint8ClampedArray"],
                    o = "undefined" == typeof globalThis ? n.g : globalThis;
                e.exports = function() {
                    for (var e = [], t = 0; t < r.length; t++) "function" == typeof o[r[t]] && (e[e.length] = r[t]);
                    return e
                }
            }
        },
        i = {};

    function a(e) {
        var t = i[e];
        if (void 0 !== t) return t.exports;
        var n = i[e] = {
            id: e,
            loaded: !1,
            exports: {}
        };
        return o[e].call(n.exports, n, n.exports, a), n.loaded = !0, n.exports
    }
    a.m = o, a.amdD = function() {
        throw new Error("define cannot be used indirect")
    }, a.amdO = {}, a.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return a.d(t, {
            a: t
        }), t
    }, t = Object.getPrototypeOf ? e => Object.getPrototypeOf(e) : e => e.__proto__, a.t = function(n, r) {
        if (1 & r && (n = this(n)), 8 & r) return n;
        if ("object" == typeof n && n) {
            if (4 & r && n.__esModule) return n;
            if (16 & r && "function" == typeof n.then) return n
        }
        var o = Object.create(null);
        a.r(o);
        var i = {};
        e = e || [null, t({}), t([]), t(t)];
        for (var c = 2 & r && n;
            "object" == typeof c && !~e.indexOf(c); c = t(c)) Object.getOwnPropertyNames(c).forEach((e => i[e] = () => n[e]));
        return i.default = () => n, a.d(o, i), o
    }, a.d = (e, t) => {
        for (var n in t) a.o(t, n) && !a.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, a.f = {}, a.e = e => Promise.all(Object.keys(a.f).reduce(((t, n) => (a.f[n](e, t), t)), [])), a.u = e => "mp-core/" + e + "." + {
        87: "5699f7cda3c90f83830b",
        100: "ed693e9d3f50f224ea1c",
        140: "8904bd1233c37c62526e",
        242: "53320f1d872026e28294",
        341: "48692c3a072447f43798",
        452: "c0a7d2c9e078899a3956",
        488: "eaeea95fba7ad1ac2e0c",
        510: "8e42de5365b69e32aee6",
        516: "a67746541f8d6bbe35f7",
        745: "f0412a366bed1690f45f",
        781: "a4dad612af5605293c68",
        840: "5a35ef73289fce12eccd",
        983: "fb9761d7ed3d54e012c9",
        1003: "07365fe51405362eed1f",
        1023: "8d8a93197f60c9a53862",
        1036: "ffda2f3fca1d099fb52e",
        1217: "0936a1194f22a3351250",
        1259: "027b0491163c90f3c509",
        1310: "ccdb6fa732d26e629ac4",
        1530: "1f599abe6bb0aa7290b8",
        1884: "2b7cbd8ff99c67d7c3f9",
        1985: "72f33bc23aaabe93ae9a",
        2009: "dfdb84a8533087597abc",
        2031: "f295fecf8726ab70c465",
        2050: "1d65bfa04ba15a8db781",
        2116: "43ed19b0c5c4834034ad",
        2167: "febbff22e51ce16e09a8",
        2212: "175a913bb63f201676f3",
        2238: "25311b5bca452092272c",
        2302: "004dd82aad40d71680cc",
        2371: "de1b9165c5c02c010699",
        2589: "84d4ff16b40231e994a8",
        2973: "26cea1d94d325a74bd27",
        3041: "f0562e3445339520e4e2",
        3170: "98ff77257d0dd1ce1e79",
        3301: "6c003d1f94da33ed48a2",
        3446: "dd059db1d4c0efb71f7e",
        3475: "e6774ca63479294c37ab",
        3696: "6c1688b5380783cd9763",
        3738: "c59e2f8c80659da8b79d",
        3746: "8ad1d79106a94847bcac",
        3756: "1ee9b05d9ce7a6207aa0",
        4025: "62f778212dd8d973e15e",
        4079: "104642eee2beaf1f3f3f",
        4142: "c8ef6b51843f25edb294",
        4148: "dd6eef45d0b3aecad38f",
        4162: "410558a96e2cd1c99b72",
        4240: "0fbdf037c9ba71d0a987",
        4530: "6c47ddfc70bcd7c85a4c",
        4659: "01838f8486534144d729",
        4716: "58661ad1306ee5037402",
        5101: "7eb52fa042636a859afc",
        5319: "2091f5edc8f40c2e7d2d",
        5380: "f23079b41e4ca095de5f",
        5414: "4031eef599a696f81f7c",
        5651: "50e5a936656bbfd0c680",
        5733: "a988a3a53aa19d43d41e",
        5948: "89bc32cf626c7557b89d",
        5972: "3a4ce7cbebe3ef574f60",
        6282: "79a261084de7bc1b171a",
        6955: "57f38995c76dd52b66e0",
        7109: "ac3ba5f29adea1f80a5a",
        7141: "b23c3a293c5eca16605d",
        7195: "8181ac8896c1ce405592",
        7263: "41c1258b0ad3dc2168de",
        7387: "68400629ead8ff4f5fb7",
        7568: "bd91c24889dc1571b2ba",
        7600: "ec777e96e4b9e81913bd",
        8151: "05dcd0b4bff4f4b930c2",
        8250: "c503d7388d485702f9cb",
        8646: "0ec5486d0de2a97459ad",
        8718: "9cfd1705958640832a52",
        8764: "de7b5fad116eb5e3a6ac",
        8789: "6d4d2a50d69117441536",
        8853: "dd37c6d6d0f63f3bb13c",
        9104: "d8944d6d4309406d00ae",
        9220: "bc0c3287241bf0522322",
        9402: "effc5bb56363119ed7f9",
        9477: "aae27230a1f3d5fa1b7f",
        9528: "ec5926af2086c7d1044b",
        9649: "a150e59929642a7efa7b"
    } [e] + ".bundle.js", a.g = function() {
        if ("object" == typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" == typeof window) return window
        }
    }(), a.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), n = {}, r = "metapress:", a.l = (e, t, o, i) => {
        if (n[e]) n[e].push(t);
        else {
            var c, s;
            if (void 0 !== o)
                for (var l = document.getElementsByTagName("script"), u = 0; u < l.length; u++) {
                    var f = l[u];
                    if (f.getAttribute("src") == e || f.getAttribute("data-webpack") == r + o) {
                        c = f;
                        break
                    }
                }
            c || (s = !0, (c = document.createElement("script")).charset = "utf-8", c.timeout = 120, a.nc && c.setAttribute("nonce", a.nc), c.setAttribute("data-webpack", r + o), c.src = e), n[e] = [t];
            var p = (t, r) => {
                    c.onerror = c.onload = null, clearTimeout(y);
                    var o = n[e];
                    if (delete n[e], c.parentNode && c.parentNode.removeChild(c), o && o.forEach((e => e(r))), t) return t(r)
                },
                y = setTimeout(p.bind(null, void 0, {
                    type: "timeout",
                    target: c
                }), 12e4);
            c.onerror = p.bind(null, c.onerror), c.onload = p.bind(null, c.onload), s && document.head.appendChild(c)
        }
    }, a.r = e => {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, a.nmd = e => (e.paths = [], e.children || (e.children = []), e), (() => {
        var e;
        a.g.importScripts && (e = a.g.location + "");
        var t = a.g.document;
        if (!e && t && (t.currentScript && (e = t.currentScript.src), !e)) {
            var n = t.getElementsByTagName("script");
            n.length && (e = n[n.length - 1].src)
        }
        if (!e) throw new Error("Automatic publicPath is not supported in this browser");
        e = e.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/"), a.p = e
    })(), (() => {
        var e = {
            179: 0
        };
        a.f.j = (t, n) => {
            var r = a.o(e, t) ? e[t] : void 0;
            if (0 !== r)
                if (r) n.push(r[2]);
                else {
                    var o = new Promise(((n, o) => r = e[t] = [n, o]));
                    n.push(r[2] = o);
                    var i = a.p + a.u(t),
                        c = new Error;
                    a.l(i, (n => {
                        if (a.o(e, t) && (0 !== (r = e[t]) && (e[t] = void 0), r)) {
                            var o = n && ("load" === n.type ? "missing" : n.type),
                                i = n && n.target && n.target.src;
                            c.message = "Loading chunk " + t + " failed.\n(" + o + ": " + i + ")", c.name = "ChunkLoadError", c.type = o, c.request = i, r[1](c)
                        }
                    }), "chunk-" + t, t)
                }
        };
        var t = (t, n) => {
                var r, o, [i, c, s] = n,
                    l = 0;
                if (i.some((t => 0 !== e[t]))) {
                    for (r in c) a.o(c, r) && (a.m[r] = c[r]);
                    s && s(a)
                }
                for (t && t(n); l < i.length; l++) o = i[l], a.o(e, o) && e[o] && e[o][0](), e[o] = 0
            },
            n = self.webpackChunkmetapress = self.webpackChunkmetapress || [];
        n.forEach(t.bind(null, 0)), n.push = t.bind(null, n.push.bind(n))
    })(), a.nc = void 0, (() => {
        "use strict";
        var e = a(28721),
            t = a(55293);
        class n {
            constructor() {
                let e = document.createElement("style");
                e.innerText = '\n\n            /** Default button */\n            div.metapress.button {\n\n                /* Position */\n                position: fixed;\n                bottom: 30px;\n                left: calc(50% - 150px / 2);\n                width: 150px;\n                height: 40px;\n                z-index: 200000;\n\n                /* Appearance */\n                background-color: #000;\n                box-sizing: border-box;\n                border-radius: 10px;\n                cursor: pointer;\n                transition: background-color 0.35s, box-shadow 0.35s, bottom 0.35s;\n\n                /* Text appearance */\n                display: flex;\n                text-align: center;\n                color: #FFF;\n                font-size: 11px;\n                align-items: center;\n\n            }\n\n            /** Button state when MetaPress is closed */\n            div.metapress.button.closed {\n                background-color: #138b34;\n                box-shadow: 0 0.4rem 0 0 #056921e6, 0 5px 10px 0px rgba(0, 0, 0, 0.6);\n            }\n            div.metapress.button.closed:before {\n                content: "Enter metaverse";\n                text-align: center;\n                flex: 1 1 auto;\n            }\n\n            /** Button state when MetaPress is open */\n            div.metapress.button.opened {\n                background-color: #954303;\n                box-shadow: 0 0.4rem 0 0 #6b3205e6, 0 5px 10px 0px rgba(0, 0, 0, 0.6);\n            }\n            div.metapress.button.opened:before {\n                content: "Close metaverse";\n                text-align: center;\n                flex: 1 1 auto;\n            }\n\n        ', document.body.appendChild(e), this.div = document.createElement("div"), this.div.className = "metapress button closed", this.div.addEventListener("click", metapress.toggle), document.body.appendChild(this.div)
            }
            metapressOpened(e) {
                this.div.className = e ? "metapress button opened" : "metapress button closed"
            }
        }
        var r = a(25108);
        window.metapress || new class {
            config = Object.assign({}, window.metapressConfig);
            instanceID = (0, e.Z)();
            plugins = new t.ZP;
            floatingButton = null;
            contentDiv = null;
            constructor() {
                window.metapress = this.proxy, "1" != this.config.floatingButton || window.parent == window && !window.opener ? "1" == this.config.floatingButton && (this.floatingButton = new n) : r.debug("[MetaPress] Not showing the enter button due to being inside a popup or iframe");
                let e = document.createElement("style");
                e.innerText = `\n\n            /** Import fonts */\n            @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;600;700&display=swap');\n            @import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');\n\n            /** CSS applied to the main body while the Metaverse is open */\n            body.metapress-open {\n                height: 100%;\n                overflow: hidden;\n            }\n\n            .metapress {\n                font-family: 'Rubik', sans-serif;\n            }\n\n            /** Reset any styling applied globally to <input> elements */\n            .metapress.content * input {\n                all: initial;\n            }\n\n            .metapress.content * input {\n                font-family: 'Rubik', sans-serif;\n                line-height: 1;\n            }\n\n            /** Hides spinner buttons for number input element */\n            .metapress.content * input::-webkit-outer-spin-button,\n            .metapress.content * input::-webkit-inner-spin-button {\n                -webkit-appearance: none;\n                margin: 0;\n            }\n\n            .metapress.content * input[type=number] {\n                -moz-appearance: textfield;\n            }\n\n            /** Reset any styling applied globally to <select> elements */\n            .metapress.content * select {\n                all: initial;\n            }\n\n            .metapress.content * select {\n                font-family: 'Rubik', sans-serif;\n                line-height: 1;\n                cursor: pointer;\n                appearance: auto;\n                -webkit-appearance: auto;\n            }\n\n            .metapress.content * select > option {\n                padding: 0px 2px 1px;\n            }\n\n            /** Default content frame */\n            div.metapress.content {\n\n                /* Position */\n                position: fixed; \n                top: ${metapress.config["core.integration.wordpress"]?.adminBarShowing?"var(--wp-admin--admin-bar--height)":"0px"}; \n                left: 0px; \n                width: 100%; \n                height: ${metapress.config["core.integration.wordpress"]?.adminBarShowing?"calc(100% - var(--wp-admin--admin-bar--height))":"100%"}; \n                z-index: 100000;  /* <-- Needs to be high up, to be above wordpress theme elements */\n                margin: 0px;\n                padding: 0px;\n\n                /* Appearance */\n                border: none;\n                background: #000;\n                outline: none;\n                transition: opacity 0.35s;\n                color: white;\n\n                /* Prevent text selection on UI elements */\n                user-select: none;\n                -webkit-user-select: none;\n                cursor: default;\n\n            }\n\n            /** Hidden content frame */\n            div.metapress.content.hidden {\n                opacity: 0;\n                pointer-events: none;\n            }\n\n            /** Better looking scroll bars */\n            div.metapress.content *::-webkit-scrollbar {\n                width: 8px;\n                height: 8px;\n            }\n            div.metapress.content *::-webkit-scrollbar-track {\n                background: rgba(255, 255, 255, 0.1);\n            }\n            div.metapress.content *::-webkit-scrollbar-thumb {\n                background: rgba(255, 255, 255, 0.2);\n            }\n\n            /** Set all input elements font size to prevent zooming in */\n            @supports (-webkit-touch-callout: none) {\n                #metapress-content input,\n                #metapress-content select,\n                #metapress-content textarea,\n                #metapress-content .fake-input {\n                    font-size: 16px !important;\n                }\n            }\n\n        `, document.body.appendChild(e);
                let t = !1;
                try {
                    t = "0" === localStorage["mp.lastOpen"]
                } catch (e) {}
                window.parent != window || window.opener ? r.debug("[MetaPress] Not starting immediately due to being inside a popup or iframe") : "1" != this.config.autoOpen || t ? window.location.hash.startsWith("#mp.portal:") ? (r.debug("[MetaPress] Starting immediately due to incoming portal"), this.open()) : t && r.debug("[MetaPress] Not starting immediately due to being closed manually last time") : (r.debug("[MetaPress] Starting immediately due to 'autoOpen' config option"), this.open())
            }
            get proxy() {
                return this._proxy || (this._proxy = new Proxy(this, {
                    get: this.onProxyGet.bind(this),
                    set: this.onProxySet.bind(this)
                })), this._proxy
            }
            onProxyGet(e, t, n) {
                return "plugins" == t ? this.plugins : "config" == t ? this.config : "instanceID" == t ? this.instanceID : "worldID" == t ? this.getWorldID() : "loadPromise" == t ? this.loadPromise : "button" == t ? this.floatingButton : "contentDiv" == t ? this.contentDiv : "open" == t ? this.open.bind(this) : "close" == t ? this.close.bind(this) : "toggle" == t ? this.toggle.bind(this) : "addEventListener" == t ? this.plugins.addEventListener.bind(this.plugins) : "removeEventListener" == t ? this.plugins.removeEventListener.bind(this.plugins) : "isOpen" == t ? this.isOpen : this.plugins.getProvider(t)
            }
            onProxySet(e, t, n, r) {
                throw new Error(`Manually setting providers is not allowed. Instead add "provides = ['${t}']" to your plugin.`)
            }
            getWorldID() {
                if (this.config.worldID) return this.config.worldID;
                if ("localhost" == window.location.hostname || "127.0.0.1" == window.location.hostname || "::1" == window.location.hostname || "0.0.0.0" == window.location.hostname) {
                    let t = localStorage["mp.local.worldID"];
                    if (!t) {
                        t = (0, e.Z)();
                        try {
                            localStorage["mp.local.worldID"] = t
                        } catch (e) {
                            r.warn(`[MetaPress] Unable to store world ID in local storage. ${e.message}`)
                        }
                    }
                    return "local:" + t
                }
                return window.location.hostname
            }
            async open() {
                try {
                    localStorage["mp.lastOpen"] = "1"
                } catch (e) {}
                this.floatingButton && this.floatingButton.metapressOpened(!0), this.config.skipBodyStylingOnOpen || document.body.classList.add("metapress-open"), this.contentDiv ? this.contentDiv.classList.remove("hidden") : (this.contentDiv = document.createElement("div"), this.contentDiv.id = "metapress-content", this.contentDiv.className = "metapress content", document.body.appendChild(this.contentDiv), await this.plugins.start())
            }
            async close() {
                try {
                    localStorage["mp.lastOpen"] = "0"
                } catch (e) {}
                metapress.fullscreen.isFullscreen && document.exitFullscreen(), this.floatingButton && this.floatingButton.metapressOpened(!1), this.config.skipBodyStylingOnOpen || document.body.classList.remove("metapress-open"), this.contentDiv?.classList?.add("hidden"), metapress.audio.muted = !0
            }
            async toggle() {
                return this.isOpen ? this.close() : this.open()
            }
            get isOpen() {
                return this.contentDiv && !this.contentDiv.classList.contains("hidden")
            }
        }
    })()
})();