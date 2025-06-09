/*! For license information please see 1310.ccdb6fa732d26e629ac4.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [1310], {
        91310: (e, t, r) => {
            r.d(t, {
                Z: () => xs
            });
            var i = r(25108),
                n = Object.defineProperty,
                o = Object.getOwnPropertyDescriptor,
                s = Object.getOwnPropertyNames,
                a = Object.prototype.hasOwnProperty,
                l = (e, t) => () => (e && (t = e(e = 0)), t),
                h = (e, t) => () => (t || e((t = {
                    exports: {}
                }).exports, t), t.exports),
                u = (e, t) => {
                    for (var r in t) n(e, r, {
                        get: t[r],
                        enumerable: !0
                    })
                },
                c = e => ((e, t, r, i) => {
                    if (t && "object" == typeof t || "function" == typeof t)
                        for (let r of s(t)) !a.call(e, r) && undefined !== r && n(e, r, {
                            get: () => t[r],
                            enumerable: !(i = o(t, r)) || i.enumerable
                        });
                    return e
                })(n({}, "__esModule", {
                    value: !0
                }), e),
                f = l((() => {})),
                p = {};

            function d(e) {
                throw new Error("Node.js process " + e + " is not supported by JSPM core outside of Node.js")
            }

            function g() {
                !P || !B || (P = !1, B.length ? O = B.concat(O) : x = -1, O.length && b())
            }

            function b() {
                if (!P) {
                    var e = setTimeout(g, 0);
                    P = !0;
                    for (var t = O.length; t;) {
                        for (B = O, O = []; ++x < t;) B && B[x].run();
                        x = -1, t = O.length
                    }
                    B = null, P = !1, clearTimeout(e)
                }
            }

            function y(e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1)
                    for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                O.push(new m(e, t)), 1 === O.length && !P && setTimeout(b, 0)
            }

            function m(e, t) {
                this.fun = e, this.array = t
            }

            function w() {}

            function _(e) {
                d("_linkedBinding")
            }

            function v(e) {
                d("dlopen")
            }

            function E() {
                return []
            }

            function S() {
                return []
            }

            function A(e, t) {
                if (!e) throw new Error(t || "assertion error")
            }

            function I() {
                return !1
            }

            function k() {
                return Te.now() / 1e3
            }

            function T(e) {
                var t = Math.floor(.001 * (Date.now() - Te.now())),
                    r = .001 * Te.now(),
                    i = Math.floor(r) + t,
                    n = Math.floor(r % 1 * 1e9);
                return e && (i -= e[0], (n -= e[1]) < 0 && (i--, n += Re)), [i, n]
            }

            function C() {
                return We
            }

            function R(e) {
                return []
            }
            u(p, {
                _debugEnd: () => pe,
                _debugProcess: () => fe,
                _events: () => Pe,
                _eventsCount: () => Be,
                _exiting: () => J,
                _fatalExceptions: () => he,
                _getActiveHandles: () => S,
                _getActiveRequests: () => E,
                _kill: () => ee,
                _linkedBinding: () => _,
                _maxListeners: () => Oe,
                _preload_modules: () => Ie,
                _rawDebug: () => G,
                _startProfilerIdleNotifier: () => de,
                _stopProfilerIdleNotifier: () => ge,
                _tickCallback: () => ce,
                abort: () => we,
                addListener: () => xe,
                allowedNodeEnvironmentFlags: () => ae,
                arch: () => M,
                argv: () => j,
                argv0: () => Ae,
                assert: () => A,
                binding: () => q,
                chdir: () => z,
                config: () => X,
                cpuUsage: () => te,
                cwd: () => H,
                debugPort: () => Se,
                default: () => We,
                dlopen: () => v,
                domain: () => Y,
                emit: () => je,
                emitWarning: () => $,
                env: () => N,
                execArgv: () => D,
                execPath: () => Ee,
                exit: () => oe,
                features: () => le,
                hasUncaughtExceptionCaptureCallback: () => I,
                hrtime: () => T,
                kill: () => ne,
                listeners: () => R,
                memoryUsage: () => ie,
                moduleLoadList: () => Q,
                nextTick: () => y,
                off: () => Me,
                on: () => C,
                once: () => Ue,
                openStdin: () => se,
                pid: () => _e,
                platform: () => L,
                ppid: () => ve,
                prependListener: () => De,
                prependOnceListener: () => Fe,
                reallyExit: () => Z,
                release: () => K,
                removeAllListeners: () => Ne,
                removeListener: () => Le,
                resourceUsage: () => re,
                setSourceMapsEnabled: () => ke,
                setUncaughtExceptionCaptureCallback: () => ue,
                stderr: () => ye,
                stdin: () => me,
                stdout: () => be,
                title: () => U,
                umask: () => V,
                uptime: () => k,
                version: () => F,
                versions: () => W
            });
            var O, P, B, x, U, M, L, N, j, D, F, W, $, q, V, H, z, K, G, Q, Y, J, X, Z, ee, te, re, ie, ne, oe, se, ae, le, he, ue, ce, fe, pe, de, ge, be, ye, me, we, _e, ve, Ee, Se, Ae, Ie, ke, Te, Ce, Re, Oe, Pe, Be, xe, Ue, Me, Le, Ne, je, De, Fe, We, $e = l((() => {
                    f(), rt(), qe(), O = [], P = !1, x = -1, m.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, U = "browser", M = "x64", L = "browser", N = {
                        PATH: "/usr/bin",
                        LANG: navigator.language + ".UTF-8",
                        PWD: "/",
                        HOME: "/home",
                        TMP: "/tmp"
                    }, j = ["/usr/bin/node"], D = [], F = "v16.8.0", W = {}, $ = function(e, t) {
                        i.warn((t ? t + ": " : "") + e)
                    }, q = function(e) {
                        d("binding")
                    }, V = function(e) {
                        return 0
                    }, H = function() {
                        return "/"
                    }, z = function(e) {}, K = {
                        name: "node",
                        sourceUrl: "",
                        headersUrl: "",
                        libUrl: ""
                    }, G = w, Q = [], Y = {}, J = !1, X = {}, Z = w, ee = w, re = te = function() {
                        return {}
                    }, ie = te, ne = w, oe = w, se = w, ae = {}, le = {
                        inspector: !1,
                        debug: !1,
                        uv: !1,
                        ipv6: !1,
                        tls_alpn: !1,
                        tls_sni: !1,
                        tls_ocsp: !1,
                        tls: !1,
                        cached_builtins: !0
                    }, he = w, ue = w, ce = w, fe = w, pe = w, de = w, ge = w, be = void 0, ye = void 0, me = void 0, we = w, _e = 2, ve = 1, Ee = "/bin/usr/node", Se = 9229, Ae = "node", Ie = [], ke = w, void 0 === (Te = {
                        now: typeof performance < "u" ? performance.now.bind(performance) : void 0,
                        timing: typeof performance < "u" ? performance.timing : void 0
                    }).now && (Ce = Date.now(), Te.timing && Te.timing.navigationStart && (Ce = Te.timing.navigationStart), Te.now = () => Date.now() - Ce), Re = 1e9, T.bigint = function(e) {
                        var t = T(e);
                        return typeof BigInt > "u" ? t[0] * Re + t[1] : BigInt(t[0] * Re) + BigInt(t[1])
                    }, We = {
                        version: F,
                        versions: W,
                        arch: M,
                        platform: L,
                        release: K,
                        _rawDebug: G,
                        moduleLoadList: Q,
                        binding: q,
                        _linkedBinding: _,
                        _events: Pe = {},
                        _eventsCount: Be = 0,
                        _maxListeners: Oe = 10,
                        on: C,
                        addListener: xe = C,
                        once: Ue = C,
                        off: Me = C,
                        removeListener: Le = C,
                        removeAllListeners: Ne = C,
                        emit: je = w,
                        prependListener: De = C,
                        prependOnceListener: Fe = C,
                        listeners: R,
                        domain: Y,
                        _exiting: J,
                        config: X,
                        dlopen: v,
                        uptime: k,
                        _getActiveRequests: E,
                        _getActiveHandles: S,
                        reallyExit: Z,
                        _kill: ee,
                        cpuUsage: te,
                        resourceUsage: re,
                        memoryUsage: ie,
                        kill: ne,
                        exit: oe,
                        openStdin: se,
                        allowedNodeEnvironmentFlags: ae,
                        assert: A,
                        features: le,
                        _fatalExceptions: he,
                        setUncaughtExceptionCaptureCallback: ue,
                        hasUncaughtExceptionCaptureCallback: I,
                        emitWarning: $,
                        nextTick: y,
                        _tickCallback: ce,
                        _debugProcess: fe,
                        _debugEnd: pe,
                        _startProfilerIdleNotifier: de,
                        _stopProfilerIdleNotifier: ge,
                        stdout: be,
                        stdin: me,
                        stderr: ye,
                        abort: we,
                        umask: V,
                        chdir: z,
                        cwd: H,
                        env: N,
                        title: U,
                        argv: j,
                        execArgv: D,
                        pid: _e,
                        ppid: ve,
                        execPath: Ee,
                        debugPort: Se,
                        hrtime: T,
                        argv0: Ae,
                        _preload_modules: Ie,
                        setSourceMapsEnabled: ke
                    }
                })),
                qe = l((() => {
                    $e()
                })),
                Ve = {};
            u(Ve, {
                Buffer: () => Xe,
                INSPECT_MAX_BYTES: () => Ze,
                default: () => Je,
                kMaxLength: () => et
            });
            var He, ze, Ke, Ge, Qe, Ye, Je, Xe, Ze, et, tt = l((() => {
                    f(), rt(), qe(), He = {}, ze = !1, Ke = {}, Ge = !1, Qe = {}, Ye = !1, (Je = function() {
                        if (Ye) return Qe;
                        Ye = !0;
                        let e = function() {
                                if (ze) return He;
                                ze = !0, He.byteLength = function(e) {
                                    var t = s(e),
                                        r = t[0],
                                        i = t[1];
                                    return 3 * (r + i) / 4 - i
                                }, He.toByteArray = function(e) {
                                    var i, n, o = s(e),
                                        a = o[0],
                                        l = o[1],
                                        h = new r(function(e, t, r) {
                                            return 3 * (t + r) / 4 - r
                                        }(0, a, l)),
                                        u = 0,
                                        c = l > 0 ? a - 4 : a;
                                    for (n = 0; n < c; n += 4) i = t[e.charCodeAt(n)] << 18 | t[e.charCodeAt(n + 1)] << 12 | t[e.charCodeAt(n + 2)] << 6 | t[e.charCodeAt(n + 3)], h[u++] = i >> 16 & 255, h[u++] = i >> 8 & 255, h[u++] = 255 & i;
                                    return 2 === l && (i = t[e.charCodeAt(n)] << 2 | t[e.charCodeAt(n + 1)] >> 4, h[u++] = 255 & i), 1 === l && (i = t[e.charCodeAt(n)] << 10 | t[e.charCodeAt(n + 1)] << 4 | t[e.charCodeAt(n + 2)] >> 2, h[u++] = i >> 8 & 255, h[u++] = 255 & i), h
                                }, He.fromByteArray = function(t) {
                                    for (var r, i = t.length, n = i % 3, o = [], s = 16383, a = 0, h = i - n; a < h; a += s) o.push(l(t, a, a + s > h ? h : a + s));
                                    return 1 === n ? (r = t[i - 1], o.push(e[r >> 2] + e[r << 4 & 63] + "==")) : 2 === n && (r = (t[i - 2] << 8) + t[i - 1], o.push(e[r >> 10] + e[r >> 4 & 63] + e[r << 2 & 63] + "=")), o.join("")
                                };
                                for (var e = [], t = [], r = typeof Uint8Array < "u" ? Uint8Array : Array, i = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", n = 0, o = i.length; n < o; ++n) e[n] = i[n], t[i.charCodeAt(n)] = n;

                                function s(e) {
                                    var t = e.length;
                                    if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                                    var r = e.indexOf("=");
                                    return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
                                }

                                function a(t) {
                                    return e[t >> 18 & 63] + e[t >> 12 & 63] + e[t >> 6 & 63] + e[63 & t]
                                }

                                function l(e, t, r) {
                                    for (var i, n = [], o = t; o < r; o += 3) i = (e[o] << 16 & 16711680) + (e[o + 1] << 8 & 65280) + (255 & e[o + 2]), n.push(a(i));
                                    return n.join("")
                                }
                                return t["-".charCodeAt(0)] = 62, t["_".charCodeAt(0)] = 63, He
                            }(),
                            t = (Ge || (Ge = !0, Ke.read = function(e, t, r, i, n) {
                                var o, s, a = 8 * n - i - 1,
                                    l = (1 << a) - 1,
                                    h = l >> 1,
                                    u = -7,
                                    c = r ? n - 1 : 0,
                                    f = r ? -1 : 1,
                                    p = e[t + c];
                                for (c += f, o = p & (1 << -u) - 1, p >>= -u, u += a; u > 0; o = 256 * o + e[t + c], c += f, u -= 8);
                                for (s = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; s = 256 * s + e[t + c], c += f, u -= 8);
                                if (0 === o) o = 1 - h;
                                else {
                                    if (o === l) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                                    s += Math.pow(2, i), o -= h
                                }
                                return (p ? -1 : 1) * s * Math.pow(2, o - i)
                            }, Ke.write = function(e, t, r, i, n, o) {
                                var s, a, l, h = 8 * o - n - 1,
                                    u = (1 << h) - 1,
                                    c = u >> 1,
                                    f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                    p = i ? 0 : o - 1,
                                    d = i ? 1 : -1,
                                    g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                                for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + c >= 1 ? f / l : f * Math.pow(2, 1 - c)) * l >= 2 && (s++, l /= 2), s + c >= u ? (a = 0, s = u) : s + c >= 1 ? (a = (t * l - 1) * Math.pow(2, n), s += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, n), s = 0)); n >= 8; e[r + p] = 255 & a, p += d, a /= 256, n -= 8);
                                for (s = s << n | a, h += n; h > 0; e[r + p] = 255 & s, p += d, s /= 256, h -= 8);
                                e[r + p - d] |= 128 * g
                            }), Ke),
                            r = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null;
                        Qe.Buffer = s, Qe.SlowBuffer = function(e) {
                            return +e != e && (e = 0), s.alloc(+e)
                        }, Qe.INSPECT_MAX_BYTES = 50;
                        let n = 2147483647;

                        function o(e) {
                            if (e > n) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                            let t = new Uint8Array(e);
                            return Object.setPrototypeOf(t, s.prototype), t
                        }

                        function s(e, t, r) {
                            if ("number" == typeof e) {
                                if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                                return h(e)
                            }
                            return a(e, t, r)
                        }

                        function a(e, t, r) {
                            if ("string" == typeof e) return function(e, t) {
                                if (("string" != typeof t || "" === t) && (t = "utf8"), !s.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                                let r = 0 | p(e, t),
                                    i = o(r),
                                    n = i.write(e, t);
                                return n !== r && (i = i.slice(0, n)), i
                            }(e, t);
                            if (ArrayBuffer.isView(e)) return function(e) {
                                if (K(e, Uint8Array)) {
                                    let t = new Uint8Array(e);
                                    return c(t.buffer, t.byteOffset, t.byteLength)
                                }
                                return u(e)
                            }(e);
                            if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                            if (K(e, ArrayBuffer) || e && K(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (K(e, SharedArrayBuffer) || e && K(e.buffer, SharedArrayBuffer))) return c(e, t, r);
                            if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                            let i = e.valueOf && e.valueOf();
                            if (null != i && i !== e) return s.from(i, t, r);
                            let n = function(e) {
                                if (s.isBuffer(e)) {
                                    let t = 0 | f(e.length),
                                        r = o(t);
                                    return 0 === r.length || e.copy(r, 0, 0, t), r
                                }
                                return void 0 !== e.length ? "number" != typeof e.length || G(e.length) ? o(0) : u(e) : "Buffer" === e.type && Array.isArray(e.data) ? u(e.data) : void 0
                            }(e);
                            if (n) return n;
                            if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return s.from(e[Symbol.toPrimitive]("string"), t, r);
                            throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
                        }

                        function l(e) {
                            if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                            if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
                        }

                        function h(e) {
                            return l(e), o(e < 0 ? 0 : 0 | f(e))
                        }

                        function u(e) {
                            let t = e.length < 0 ? 0 : 0 | f(e.length),
                                r = o(t);
                            for (let i = 0; i < t; i += 1) r[i] = 255 & e[i];
                            return r
                        }

                        function c(e, t, r) {
                            if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                            if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                            let i;
                            return i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Object.setPrototypeOf(i, s.prototype), i
                        }

                        function f(e) {
                            if (e >= n) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + n.toString(16) + " bytes");
                            return 0 | e
                        }

                        function p(e, t) {
                            if (s.isBuffer(e)) return e.length;
                            if (ArrayBuffer.isView(e) || K(e, ArrayBuffer)) return e.byteLength;
                            if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                            let r = e.length,
                                i = arguments.length > 2 && !0 === arguments[2];
                            if (!i && 0 === r) return 0;
                            let n = !1;
                            for (;;) switch (t) {
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return r;
                                case "utf8":
                                case "utf-8":
                                    return V(e).length;
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return 2 * r;
                                case "hex":
                                    return r >>> 1;
                                case "base64":
                                    return H(e).length;
                                default:
                                    if (n) return i ? -1 : V(e).length;
                                    t = ("" + t).toLowerCase(), n = !0
                            }
                        }

                        function d(e, t, r) {
                            let i = !1;
                            if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0) <= (t >>>= 0)) return "";
                            for (e || (e = "utf8");;) switch (e) {
                                case "hex":
                                    return C(this, t, r);
                                case "utf8":
                                case "utf-8":
                                    return A(this, t, r);
                                case "ascii":
                                    return k(this, t, r);
                                case "latin1":
                                case "binary":
                                    return T(this, t, r);
                                case "base64":
                                    return S(this, t, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return R(this, t, r);
                                default:
                                    if (i) throw new TypeError("Unknown encoding: " + e);
                                    e = (e + "").toLowerCase(), i = !0
                            }
                        }

                        function g(e, t, r) {
                            let i = e[t];
                            e[t] = e[r], e[r] = i
                        }

                        function b(e, t, r, i, n) {
                            if (0 === e.length) return -1;
                            if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), G(r = +r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                                if (n) return -1;
                                r = e.length - 1
                            } else if (r < 0) {
                                if (!n) return -1;
                                r = 0
                            }
                            if ("string" == typeof t && (t = s.from(t, i)), s.isBuffer(t)) return 0 === t.length ? -1 : y(e, t, r, i, n);
                            if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : y(e, [t], r, i, n);
                            throw new TypeError("val must be string, number or Buffer")
                        }

                        function y(e, t, r, i, n) {
                            let o, s = 1,
                                a = e.length,
                                l = t.length;
                            if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                                if (e.length < 2 || t.length < 2) return -1;
                                s = 2, a /= 2, l /= 2, r /= 2
                            }

                            function h(e, t) {
                                return 1 === s ? e[t] : e.readUInt16BE(t * s)
                            }
                            if (n) {
                                let i = -1;
                                for (o = r; o < a; o++)
                                    if (h(e, o) === h(t, -1 === i ? 0 : o - i)) {
                                        if (-1 === i && (i = o), o - i + 1 === l) return i * s
                                    } else - 1 !== i && (o -= o - i), i = -1
                            } else
                                for (r + l > a && (r = a - l), o = r; o >= 0; o--) {
                                    let r = !0;
                                    for (let i = 0; i < l; i++)
                                        if (h(e, o + i) !== h(t, i)) {
                                            r = !1;
                                            break
                                        } if (r) return o
                                }
                            return -1
                        }

                        function m(e, t, r, i) {
                            r = Number(r) || 0;
                            let n = e.length - r;
                            i ? (i = Number(i)) > n && (i = n) : i = n;
                            let o, s = t.length;
                            for (i > s / 2 && (i = s / 2), o = 0; o < i; ++o) {
                                let i = parseInt(t.substr(2 * o, 2), 16);
                                if (G(i)) return o;
                                e[r + o] = i
                            }
                            return o
                        }

                        function w(e, t, r, i) {
                            return z(V(t, e.length - r), e, r, i)
                        }

                        function _(e, t, r, i) {
                            return z(function(e) {
                                let t = [];
                                for (let r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                                return t
                            }(t), e, r, i)
                        }

                        function v(e, t, r, i) {
                            return z(H(t), e, r, i)
                        }

                        function E(e, t, r, i) {
                            return z(function(e, t) {
                                let r, i, n, o = [];
                                for (let s = 0; s < e.length && !((t -= 2) < 0); ++s) r = e.charCodeAt(s), i = r >> 8, n = r % 256, o.push(n), o.push(i);
                                return o
                            }(t, e.length - r), e, r, i)
                        }

                        function S(t, r, i) {
                            return 0 === r && i === t.length ? e.fromByteArray(t) : e.fromByteArray(t.slice(r, i))
                        }

                        function A(e, t, r) {
                            r = Math.min(e.length, r);
                            let i = [],
                                n = t;
                            for (; n < r;) {
                                let t = e[n],
                                    o = null,
                                    s = t > 239 ? 4 : t > 223 ? 3 : t > 191 ? 2 : 1;
                                if (n + s <= r) {
                                    let r, i, a, l;
                                    switch (s) {
                                        case 1:
                                            t < 128 && (o = t);
                                            break;
                                        case 2:
                                            r = e[n + 1], 128 == (192 & r) && (l = (31 & t) << 6 | 63 & r, l > 127 && (o = l));
                                            break;
                                        case 3:
                                            r = e[n + 1], i = e[n + 2], 128 == (192 & r) && 128 == (192 & i) && (l = (15 & t) << 12 | (63 & r) << 6 | 63 & i, l > 2047 && (l < 55296 || l > 57343) && (o = l));
                                            break;
                                        case 4:
                                            r = e[n + 1], i = e[n + 2], a = e[n + 3], 128 == (192 & r) && 128 == (192 & i) && 128 == (192 & a) && (l = (15 & t) << 18 | (63 & r) << 12 | (63 & i) << 6 | 63 & a, l > 65535 && l < 1114112 && (o = l))
                                    }
                                }
                                null === o ? (o = 65533, s = 1) : o > 65535 && (o -= 65536, i.push(o >>> 10 & 1023 | 55296), o = 56320 | 1023 & o), i.push(o), n += s
                            }
                            return function(e) {
                                let t = e.length;
                                if (t <= I) return String.fromCharCode.apply(String, e);
                                let r = "",
                                    i = 0;
                                for (; i < t;) r += String.fromCharCode.apply(String, e.slice(i, i += I));
                                return r
                            }(i)
                        }
                        Qe.kMaxLength = n, s.TYPED_ARRAY_SUPPORT = function() {
                            try {
                                let e = new Uint8Array(1),
                                    t = {
                                        foo: function() {
                                            return 42
                                        }
                                    };
                                return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                            } catch {
                                return !1
                            }
                        }(), !s.TYPED_ARRAY_SUPPORT && typeof i < "u" && "function" == typeof i.error && i.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(s.prototype, "parent", {
                            enumerable: !0,
                            get: function() {
                                if (s.isBuffer(this)) return this.buffer
                            }
                        }), Object.defineProperty(s.prototype, "offset", {
                            enumerable: !0,
                            get: function() {
                                if (s.isBuffer(this)) return this.byteOffset
                            }
                        }), s.poolSize = 8192, s.from = function(e, t, r) {
                            return a(e, t, r)
                        }, Object.setPrototypeOf(s.prototype, Uint8Array.prototype), Object.setPrototypeOf(s, Uint8Array), s.alloc = function(e, t, r) {
                            return function(e, t, r) {
                                return l(e), e <= 0 ? o(e) : void 0 !== t ? "string" == typeof r ? o(e).fill(t, r) : o(e).fill(t) : o(e)
                            }(e, t, r)
                        }, s.allocUnsafe = function(e) {
                            return h(e)
                        }, s.allocUnsafeSlow = function(e) {
                            return h(e)
                        }, s.isBuffer = function(e) {
                            return null != e && !0 === e._isBuffer && e !== s.prototype
                        }, s.compare = function(e, t) {
                            if (K(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), K(t, Uint8Array) && (t = s.from(t, t.offset, t.byteLength)), !s.isBuffer(e) || !s.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                            if (e === t) return 0;
                            let r = e.length,
                                i = t.length;
                            for (let n = 0, o = Math.min(r, i); n < o; ++n)
                                if (e[n] !== t[n]) {
                                    r = e[n], i = t[n];
                                    break
                                } return r < i ? -1 : i < r ? 1 : 0
                        }, s.isEncoding = function(e) {
                            switch (String(e).toLowerCase()) {
                                case "hex":
                                case "utf8":
                                case "utf-8":
                                case "ascii":
                                case "latin1":
                                case "binary":
                                case "base64":
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return !0;
                                default:
                                    return !1
                            }
                        }, s.concat = function(e, t) {
                            if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                            if (0 === e.length) return s.alloc(0);
                            let r;
                            if (void 0 === t)
                                for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                            let i = s.allocUnsafe(t),
                                n = 0;
                            for (r = 0; r < e.length; ++r) {
                                let t = e[r];
                                if (K(t, Uint8Array)) n + t.length > i.length ? (s.isBuffer(t) || (t = s.from(t)), t.copy(i, n)) : Uint8Array.prototype.set.call(i, t, n);
                                else {
                                    if (!s.isBuffer(t)) throw new TypeError('"list" argument must be an Array of Buffers');
                                    t.copy(i, n)
                                }
                                n += t.length
                            }
                            return i
                        }, s.byteLength = p, s.prototype._isBuffer = !0, s.prototype.swap16 = function() {
                            let e = this.length;
                            if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                            for (let t = 0; t < e; t += 2) g(this, t, t + 1);
                            return this
                        }, s.prototype.swap32 = function() {
                            let e = this.length;
                            if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                            for (let t = 0; t < e; t += 4) g(this, t, t + 3), g(this, t + 1, t + 2);
                            return this
                        }, s.prototype.swap64 = function() {
                            let e = this.length;
                            if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                            for (let t = 0; t < e; t += 8) g(this, t, t + 7), g(this, t + 1, t + 6), g(this, t + 2, t + 5), g(this, t + 3, t + 4);
                            return this
                        }, s.prototype.toString = function() {
                            let e = this.length;
                            return 0 === e ? "" : 0 === arguments.length ? A(this, 0, e) : d.apply(this, arguments)
                        }, s.prototype.toLocaleString = s.prototype.toString, s.prototype.equals = function(e) {
                            if (!s.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                            return this === e || 0 === s.compare(this, e)
                        }, s.prototype.inspect = function() {
                            let e = "",
                                t = Qe.INSPECT_MAX_BYTES;
                            return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
                        }, r && (s.prototype[r] = s.prototype.inspect), s.prototype.compare = function(e, t, r, i, n) {
                            if (K(e, Uint8Array) && (e = s.from(e, e.offset, e.byteLength)), !s.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                            if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length) throw new RangeError("out of range index");
                            if (i >= n && t >= r) return 0;
                            if (i >= n) return -1;
                            if (t >= r) return 1;
                            if (this === e) return 0;
                            let o = (n >>>= 0) - (i >>>= 0),
                                a = (r >>>= 0) - (t >>>= 0),
                                l = Math.min(o, a),
                                h = this.slice(i, n),
                                u = e.slice(t, r);
                            for (let e = 0; e < l; ++e)
                                if (h[e] !== u[e]) {
                                    o = h[e], a = u[e];
                                    break
                                } return o < a ? -1 : a < o ? 1 : 0
                        }, s.prototype.includes = function(e, t, r) {
                            return -1 !== this.indexOf(e, t, r)
                        }, s.prototype.indexOf = function(e, t, r) {
                            return b(this, e, t, r, !0)
                        }, s.prototype.lastIndexOf = function(e, t, r) {
                            return b(this, e, t, r, !1)
                        }, s.prototype.write = function(e, t, r, i) {
                            if (void 0 === t) i = "utf8", r = this.length, t = 0;
                            else if (void 0 === r && "string" == typeof t) i = t, r = this.length, t = 0;
                            else {
                                if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                                t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
                            }
                            let n = this.length - t;
                            if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                            i || (i = "utf8");
                            let o = !1;
                            for (;;) switch (i) {
                                case "hex":
                                    return m(this, e, t, r);
                                case "utf8":
                                case "utf-8":
                                    return w(this, e, t, r);
                                case "ascii":
                                case "latin1":
                                case "binary":
                                    return _(this, e, t, r);
                                case "base64":
                                    return v(this, e, t, r);
                                case "ucs2":
                                case "ucs-2":
                                case "utf16le":
                                case "utf-16le":
                                    return E(this, e, t, r);
                                default:
                                    if (o) throw new TypeError("Unknown encoding: " + i);
                                    i = ("" + i).toLowerCase(), o = !0
                            }
                        }, s.prototype.toJSON = function() {
                            return {
                                type: "Buffer",
                                data: Array.prototype.slice.call(this._arr || this, 0)
                            }
                        };
                        let I = 4096;

                        function k(e, t, r) {
                            let i = "";
                            r = Math.min(e.length, r);
                            for (let n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
                            return i
                        }

                        function T(e, t, r) {
                            let i = "";
                            r = Math.min(e.length, r);
                            for (let n = t; n < r; ++n) i += String.fromCharCode(e[n]);
                            return i
                        }

                        function C(e, t, r) {
                            let i = e.length;
                            (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
                            let n = "";
                            for (let i = t; i < r; ++i) n += Q[e[i]];
                            return n
                        }

                        function R(e, t, r) {
                            let i = e.slice(t, r),
                                n = "";
                            for (let e = 0; e < i.length - 1; e += 2) n += String.fromCharCode(i[e] + 256 * i[e + 1]);
                            return n
                        }

                        function O(e, t, r) {
                            if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                            if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
                        }

                        function P(e, t, r, i, n, o) {
                            if (!s.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                            if (t > n || t < o) throw new RangeError('"value" argument is out of bounds');
                            if (r + i > e.length) throw new RangeError("Index out of range")
                        }

                        function B(e, t, r, i, n) {
                            F(t, i, n, e, r, 7);
                            let o = Number(t & BigInt(4294967295));
                            e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o, o >>= 8, e[r++] = o;
                            let s = Number(t >> BigInt(32) & BigInt(4294967295));
                            return e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, s >>= 8, e[r++] = s, r
                        }

                        function x(e, t, r, i, n) {
                            F(t, i, n, e, r, 7);
                            let o = Number(t & BigInt(4294967295));
                            e[r + 7] = o, o >>= 8, e[r + 6] = o, o >>= 8, e[r + 5] = o, o >>= 8, e[r + 4] = o;
                            let s = Number(t >> BigInt(32) & BigInt(4294967295));
                            return e[r + 3] = s, s >>= 8, e[r + 2] = s, s >>= 8, e[r + 1] = s, s >>= 8, e[r] = s, r + 8
                        }

                        function U(e, t, r, i, n, o) {
                            if (r + i > e.length) throw new RangeError("Index out of range");
                            if (r < 0) throw new RangeError("Index out of range")
                        }

                        function M(e, r, i, n, o) {
                            return r = +r, i >>>= 0, o || U(e, 0, i, 4), t.write(e, r, i, n, 23, 4), i + 4
                        }

                        function L(e, r, i, n, o) {
                            return r = +r, i >>>= 0, o || U(e, 0, i, 8), t.write(e, r, i, n, 52, 8), i + 8
                        }
                        s.prototype.slice = function(e, t) {
                            let r = this.length;
                            (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                            let i = this.subarray(e, t);
                            return Object.setPrototypeOf(i, s.prototype), i
                        }, s.prototype.readUintLE = s.prototype.readUIntLE = function(e, t, r) {
                            e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                            let i = this[e],
                                n = 1,
                                o = 0;
                            for (; ++o < t && (n *= 256);) i += this[e + o] * n;
                            return i
                        }, s.prototype.readUintBE = s.prototype.readUIntBE = function(e, t, r) {
                            e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                            let i = this[e + --t],
                                n = 1;
                            for (; t > 0 && (n *= 256);) i += this[e + --t] * n;
                            return i
                        }, s.prototype.readUint8 = s.prototype.readUInt8 = function(e, t) {
                            return e >>>= 0, t || O(e, 1, this.length), this[e]
                        }, s.prototype.readUint16LE = s.prototype.readUInt16LE = function(e, t) {
                            return e >>>= 0, t || O(e, 2, this.length), this[e] | this[e + 1] << 8
                        }, s.prototype.readUint16BE = s.prototype.readUInt16BE = function(e, t) {
                            return e >>>= 0, t || O(e, 2, this.length), this[e] << 8 | this[e + 1]
                        }, s.prototype.readUint32LE = s.prototype.readUInt32LE = function(e, t) {
                            return e >>>= 0, t || O(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                        }, s.prototype.readUint32BE = s.prototype.readUInt32BE = function(e, t) {
                            return e >>>= 0, t || O(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                        }, s.prototype.readBigUInt64LE = Y((function(e) {
                            W(e >>>= 0, "offset");
                            let t = this[e],
                                r = this[e + 7];
                            (void 0 === t || void 0 === r) && $(e, this.length - 8);
                            let i = t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24,
                                n = this[++e] + 256 * this[++e] + 65536 * this[++e] + r * 2 ** 24;
                            return BigInt(i) + (BigInt(n) << BigInt(32))
                        })), s.prototype.readBigUInt64BE = Y((function(e) {
                            W(e >>>= 0, "offset");
                            let t = this[e],
                                r = this[e + 7];
                            (void 0 === t || void 0 === r) && $(e, this.length - 8);
                            let i = t * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + this[++e],
                                n = this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r;
                            return (BigInt(i) << BigInt(32)) + BigInt(n)
                        })), s.prototype.readIntLE = function(e, t, r) {
                            e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                            let i = this[e],
                                n = 1,
                                o = 0;
                            for (; ++o < t && (n *= 256);) i += this[e + o] * n;
                            return n *= 128, i >= n && (i -= Math.pow(2, 8 * t)), i
                        }, s.prototype.readIntBE = function(e, t, r) {
                            e >>>= 0, t >>>= 0, r || O(e, t, this.length);
                            let i = t,
                                n = 1,
                                o = this[e + --i];
                            for (; i > 0 && (n *= 256);) o += this[e + --i] * n;
                            return n *= 128, o >= n && (o -= Math.pow(2, 8 * t)), o
                        }, s.prototype.readInt8 = function(e, t) {
                            return e >>>= 0, t || O(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                        }, s.prototype.readInt16LE = function(e, t) {
                            e >>>= 0, t || O(e, 2, this.length);
                            let r = this[e] | this[e + 1] << 8;
                            return 32768 & r ? 4294901760 | r : r
                        }, s.prototype.readInt16BE = function(e, t) {
                            e >>>= 0, t || O(e, 2, this.length);
                            let r = this[e + 1] | this[e] << 8;
                            return 32768 & r ? 4294901760 | r : r
                        }, s.prototype.readInt32LE = function(e, t) {
                            return e >>>= 0, t || O(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                        }, s.prototype.readInt32BE = function(e, t) {
                            return e >>>= 0, t || O(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                        }, s.prototype.readBigInt64LE = Y((function(e) {
                            W(e >>>= 0, "offset");
                            let t = this[e],
                                r = this[e + 7];
                            (void 0 === t || void 0 === r) && $(e, this.length - 8);
                            let i = this[e + 4] + 256 * this[e + 5] + 65536 * this[e + 6] + (r << 24);
                            return (BigInt(i) << BigInt(32)) + BigInt(t + 256 * this[++e] + 65536 * this[++e] + this[++e] * 2 ** 24)
                        })), s.prototype.readBigInt64BE = Y((function(e) {
                            W(e >>>= 0, "offset");
                            let t = this[e],
                                r = this[e + 7];
                            (void 0 === t || void 0 === r) && $(e, this.length - 8);
                            let i = (t << 24) + 65536 * this[++e] + 256 * this[++e] + this[++e];
                            return (BigInt(i) << BigInt(32)) + BigInt(this[++e] * 2 ** 24 + 65536 * this[++e] + 256 * this[++e] + r)
                        })), s.prototype.readFloatLE = function(e, r) {
                            return e >>>= 0, r || O(e, 4, this.length), t.read(this, e, !0, 23, 4)
                        }, s.prototype.readFloatBE = function(e, r) {
                            return e >>>= 0, r || O(e, 4, this.length), t.read(this, e, !1, 23, 4)
                        }, s.prototype.readDoubleLE = function(e, r) {
                            return e >>>= 0, r || O(e, 8, this.length), t.read(this, e, !0, 52, 8)
                        }, s.prototype.readDoubleBE = function(e, r) {
                            return e >>>= 0, r || O(e, 8, this.length), t.read(this, e, !1, 52, 8)
                        }, s.prototype.writeUintLE = s.prototype.writeUIntLE = function(e, t, r, i) {
                            e = +e, t >>>= 0, r >>>= 0, i || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                            let n = 1,
                                o = 0;
                            for (this[t] = 255 & e; ++o < r && (n *= 256);) this[t + o] = e / n & 255;
                            return t + r
                        }, s.prototype.writeUintBE = s.prototype.writeUIntBE = function(e, t, r, i) {
                            e = +e, t >>>= 0, r >>>= 0, i || P(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                            let n = r - 1,
                                o = 1;
                            for (this[t + n] = 255 & e; --n >= 0 && (o *= 256);) this[t + n] = e / o & 255;
                            return t + r
                        }, s.prototype.writeUint8 = s.prototype.writeUInt8 = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                        }, s.prototype.writeUint16LE = s.prototype.writeUInt16LE = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                        }, s.prototype.writeUint16BE = s.prototype.writeUInt16BE = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                        }, s.prototype.writeUint32LE = s.prototype.writeUInt32LE = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                        }, s.prototype.writeUint32BE = s.prototype.writeUInt32BE = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                        }, s.prototype.writeBigUInt64LE = Y((function(e, t = 0) {
                            return B(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                        })), s.prototype.writeBigUInt64BE = Y((function(e, t = 0) {
                            return x(this, e, t, BigInt(0), BigInt("0xffffffffffffffff"))
                        })), s.prototype.writeIntLE = function(e, t, r, i) {
                            if (e = +e, t >>>= 0, !i) {
                                let i = Math.pow(2, 8 * r - 1);
                                P(this, e, t, r, i - 1, -i)
                            }
                            let n = 0,
                                o = 1,
                                s = 0;
                            for (this[t] = 255 & e; ++n < r && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + n - 1] && (s = 1), this[t + n] = (e / o >> 0) - s & 255;
                            return t + r
                        }, s.prototype.writeIntBE = function(e, t, r, i) {
                            if (e = +e, t >>>= 0, !i) {
                                let i = Math.pow(2, 8 * r - 1);
                                P(this, e, t, r, i - 1, -i)
                            }
                            let n = r - 1,
                                o = 1,
                                s = 0;
                            for (this[t + n] = 255 & e; --n >= 0 && (o *= 256);) e < 0 && 0 === s && 0 !== this[t + n + 1] && (s = 1), this[t + n] = (e / o >> 0) - s & 255;
                            return t + r
                        }, s.prototype.writeInt8 = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                        }, s.prototype.writeInt16LE = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                        }, s.prototype.writeInt16BE = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                        }, s.prototype.writeInt32LE = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                        }, s.prototype.writeInt32BE = function(e, t, r) {
                            return e = +e, t >>>= 0, r || P(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                        }, s.prototype.writeBigInt64LE = Y((function(e, t = 0) {
                            return B(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                        })), s.prototype.writeBigInt64BE = Y((function(e, t = 0) {
                            return x(this, e, t, -BigInt("0x8000000000000000"), BigInt("0x7fffffffffffffff"))
                        })), s.prototype.writeFloatLE = function(e, t, r) {
                            return M(this, e, t, !0, r)
                        }, s.prototype.writeFloatBE = function(e, t, r) {
                            return M(this, e, t, !1, r)
                        }, s.prototype.writeDoubleLE = function(e, t, r) {
                            return L(this, e, t, !0, r)
                        }, s.prototype.writeDoubleBE = function(e, t, r) {
                            return L(this, e, t, !1, r)
                        }, s.prototype.copy = function(e, t, r, i) {
                            if (!s.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                            if (r || (r = 0), !i && 0 !== i && (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r || 0 === e.length || 0 === this.length) return 0;
                            if (t < 0) throw new RangeError("targetStart out of bounds");
                            if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                            if (i < 0) throw new RangeError("sourceEnd out of bounds");
                            i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
                            let n = i - r;
                            return this === e && "function" == typeof Uint8Array.prototype.copyWithin ? this.copyWithin(t, r, i) : Uint8Array.prototype.set.call(e, this.subarray(r, i), t), n
                        }, s.prototype.fill = function(e, t, r, i) {
                            if ("string" == typeof e) {
                                if ("string" == typeof t ? (i = t, t = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                                if ("string" == typeof i && !s.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                                if (1 === e.length) {
                                    let t = e.charCodeAt(0);
                                    ("utf8" === i && t < 128 || "latin1" === i) && (e = t)
                                }
                            } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                            if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                            if (r <= t) return this;
                            let n;
                            if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                                for (n = t; n < r; ++n) this[n] = e;
                            else {
                                let o = s.isBuffer(e) ? e : s.from(e, i),
                                    a = o.length;
                                if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                                for (n = 0; n < r - t; ++n) this[n + t] = o[n % a]
                            }
                            return this
                        };
                        let N = {};

                        function j(e, t, r) {
                            N[e] = class extends r {
                                constructor() {
                                    super(), Object.defineProperty(this, "message", {
                                        value: t.apply(this, arguments),
                                        writable: !0,
                                        configurable: !0
                                    }), this.name = `${this.name} [${e}]`, this.stack, delete this.name
                                }
                                get code() {
                                    return e
                                }
                                set code(e) {
                                    Object.defineProperty(this, "code", {
                                        configurable: !0,
                                        enumerable: !0,
                                        value: e,
                                        writable: !0
                                    })
                                }
                                toString() {
                                    return `${this.name} [${e}]: ${this.message}`
                                }
                            }
                        }

                        function D(e) {
                            let t = "",
                                r = e.length,
                                i = "-" === e[0] ? 1 : 0;
                            for (; r >= i + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
                            return `${e.slice(0,r)}${t}`
                        }

                        function F(e, t, r, i, n, o) {
                            if (e > r || e < t) {
                                let i, n = "bigint" == typeof t ? "n" : "";
                                throw i = o > 3 ? 0 === t || t === BigInt(0) ? `>= 0${n} and < 2${n} ** ${8*(o+1)}${n}` : `>= -(2${n} ** ${8*(o+1)-1}${n}) and < 2 ** ${8*(o+1)-1}${n}` : `>= ${t}${n} and <= ${r}${n}`, new N.ERR_OUT_OF_RANGE("value", i, e)
                            }! function(e, t, r) {
                                W(t, "offset"), (void 0 === e[t] || void 0 === e[t + r]) && $(t, e.length - (r + 1))
                            }(i, n, o)
                        }

                        function W(e, t) {
                            if ("number" != typeof e) throw new N.ERR_INVALID_ARG_TYPE(t, "number", e)
                        }

                        function $(e, t, r) {
                            throw Math.floor(e) !== e ? (W(e, r), new N.ERR_OUT_OF_RANGE(r || "offset", "an integer", e)) : t < 0 ? new N.ERR_BUFFER_OUT_OF_BOUNDS : new N.ERR_OUT_OF_RANGE(r || "offset", `>= ${r?1:0} and <= ${t}`, e)
                        }
                        j("ERR_BUFFER_OUT_OF_BOUNDS", (function(e) {
                            return e ? `${e} is outside of buffer bounds` : "Attempt to access memory outside buffer bounds"
                        }), RangeError), j("ERR_INVALID_ARG_TYPE", (function(e, t) {
                            return `The "${e}" argument must be of type number. Received type ${typeof t}`
                        }), TypeError), j("ERR_OUT_OF_RANGE", (function(e, t, r) {
                            let i = `The value of "${e}" is out of range.`,
                                n = r;
                            return Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = D(String(r)) : "bigint" == typeof r && (n = String(r), (r > BigInt(2) ** BigInt(32) || r < -(BigInt(2) ** BigInt(32))) && (n = D(n)), n += "n"), i += ` It must be ${t}. Received ${n}`, i
                        }), RangeError);
                        let q = /[^+/0-9A-Za-z-_]/g;

                        function V(e, t) {
                            t = t || 1 / 0;
                            let r, i = e.length,
                                n = null,
                                o = [];
                            for (let s = 0; s < i; ++s) {
                                if (r = e.charCodeAt(s), r > 55295 && r < 57344) {
                                    if (!n) {
                                        if (r > 56319) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        if (s + 1 === i) {
                                            (t -= 3) > -1 && o.push(239, 191, 189);
                                            continue
                                        }
                                        n = r;
                                        continue
                                    }
                                    if (r < 56320) {
                                        (t -= 3) > -1 && o.push(239, 191, 189), n = r;
                                        continue
                                    }
                                    r = 65536 + (n - 55296 << 10 | r - 56320)
                                } else n && (t -= 3) > -1 && o.push(239, 191, 189);
                                if (n = null, r < 128) {
                                    if ((t -= 1) < 0) break;
                                    o.push(r)
                                } else if (r < 2048) {
                                    if ((t -= 2) < 0) break;
                                    o.push(r >> 6 | 192, 63 & r | 128)
                                } else if (r < 65536) {
                                    if ((t -= 3) < 0) break;
                                    o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                                } else {
                                    if (!(r < 1114112)) throw new Error("Invalid code point");
                                    if ((t -= 4) < 0) break;
                                    o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                                }
                            }
                            return o
                        }

                        function H(t) {
                            return e.toByteArray(function(e) {
                                if ((e = (e = e.split("=")[0]).trim().replace(q, "")).length < 2) return "";
                                for (; e.length % 4 != 0;) e += "=";
                                return e
                            }(t))
                        }

                        function z(e, t, r, i) {
                            let n;
                            for (n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];
                            return n
                        }

                        function K(e, t) {
                            return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
                        }

                        function G(e) {
                            return e != e
                        }
                        let Q = function() {
                            let e = "0123456789abcdef",
                                t = new Array(256);
                            for (let r = 0; r < 16; ++r) {
                                let i = 16 * r;
                                for (let n = 0; n < 16; ++n) t[i + n] = e[r] + e[n]
                            }
                            return t
                        }();

                        function Y(e) {
                            return typeof BigInt > "u" ? J : e
                        }

                        function J() {
                            throw new Error("BigInt not supported")
                        }
                        return Qe
                    }()).Buffer, Je.SlowBuffer, Je.INSPECT_MAX_BYTES, Je.kMaxLength, Xe = Je.Buffer, Ze = Je.INSPECT_MAX_BYTES, et = Je.kMaxLength
                })),
                rt = l((() => {
                    tt()
                })),
                it = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = class {
                        constructor(e) {
                            this.aliasToTopic = {}, this.max = e
                        }
                        put(e, t) {
                            return !(0 === t || t > this.max || (this.aliasToTopic[t] = e, this.length = Object.keys(this.aliasToTopic).length, 0))
                        }
                        getTopicByAlias(e) {
                            return this.aliasToTopic[e]
                        }
                        clear() {
                            this.aliasToTopic = {}
                        }
                    }
                })),
                nt = h(((e, t) => {
                    f(), rt(), qe(), t.exports = {
                        ArrayIsArray: e => Array.isArray(e),
                        ArrayPrototypeIncludes: (e, t) => e.includes(t),
                        ArrayPrototypeIndexOf: (e, t) => e.indexOf(t),
                        ArrayPrototypeJoin: (e, t) => e.join(t),
                        ArrayPrototypeMap: (e, t) => e.map(t),
                        ArrayPrototypePop: (e, t) => e.pop(t),
                        ArrayPrototypePush: (e, t) => e.push(t),
                        ArrayPrototypeSlice: (e, t, r) => e.slice(t, r),
                        Error,
                        FunctionPrototypeCall: (e, t, ...r) => e.call(t, ...r),
                        FunctionPrototypeSymbolHasInstance: (e, t) => Function.prototype[Symbol.hasInstance].call(e, t),
                        MathFloor: Math.floor,
                        Number,
                        NumberIsInteger: Number.isInteger,
                        NumberIsNaN: Number.isNaN,
                        NumberMAX_SAFE_INTEGER: Number.MAX_SAFE_INTEGER,
                        NumberMIN_SAFE_INTEGER: Number.MIN_SAFE_INTEGER,
                        NumberParseInt: Number.parseInt,
                        ObjectDefineProperties: (e, t) => Object.defineProperties(e, t),
                        ObjectDefineProperty: (e, t, r) => Object.defineProperty(e, t, r),
                        ObjectGetOwnPropertyDescriptor: (e, t) => Object.getOwnPropertyDescriptor(e, t),
                        ObjectKeys: e => Object.keys(e),
                        ObjectSetPrototypeOf: (e, t) => Object.setPrototypeOf(e, t),
                        Promise,
                        PromisePrototypeCatch: (e, t) => e.catch(t),
                        PromisePrototypeThen: (e, t, r) => e.then(t, r),
                        PromiseReject: e => Promise.reject(e),
                        ReflectApply: Reflect.apply,
                        RegExpPrototypeTest: (e, t) => e.test(t),
                        SafeSet: Set,
                        String,
                        StringPrototypeSlice: (e, t, r) => e.slice(t, r),
                        StringPrototypeToLowerCase: e => e.toLowerCase(),
                        StringPrototypeToUpperCase: e => e.toUpperCase(),
                        StringPrototypeTrim: e => e.trim(),
                        Symbol,
                        SymbolFor: Symbol.for,
                        SymbolAsyncIterator: Symbol.asyncIterator,
                        SymbolHasInstance: Symbol.hasInstance,
                        SymbolIterator: Symbol.iterator,
                        TypedArrayPrototypeSet: (e, t, r) => e.set(t, r),
                        Uint8Array
                    }
                })),
                ot = h(((e, t) => {
                    f(), rt(), qe();
                    var r = (tt(), c(Ve)),
                        i = Object.getPrototypeOf((async function() {})).constructor,
                        n = globalThis.Blob || r.Blob,
                        o = typeof n < "u" ? function(e) {
                            return e instanceof n
                        } : function(e) {
                            return !1
                        },
                        s = class extends Error {
                            constructor(e) {
                                if (!Array.isArray(e)) throw new TypeError("Expected input to be an Array, got " + typeof e);
                                let t = "";
                                for (let r = 0; r < e.length; r++) t += `    ${e[r].stack}\n`;
                                super(t), this.name = "AggregateError", this.errors = e
                            }
                        };
                    t.exports = {
                        AggregateError: s,
                        kEmptyObject: Object.freeze({}),
                        once(e) {
                            let t = !1;
                            return function(...r) {
                                t || (t = !0, e.apply(this, r))
                            }
                        },
                        createDeferredPromise: function() {
                            let e, t;
                            return {
                                promise: new Promise(((r, i) => {
                                    e = r, t = i
                                })),
                                resolve: e,
                                reject: t
                            }
                        },
                        promisify: e => new Promise(((t, r) => {
                            e(((e, ...i) => e ? r(e) : t(...i)))
                        })),
                        debuglog: () => function() {},
                        format: (e, ...t) => e.replace(/%([sdifj])/g, (function(...[e, r]) {
                            let i = t.shift();
                            return "f" === r ? i.toFixed(6) : "j" === r ? JSON.stringify(i) : "s" === r && "object" == typeof i ? `${i.constructor!==Object?i.constructor.name:""} {}`.trim() : i.toString()
                        })),
                        inspect(e) {
                            switch (typeof e) {
                                case "string":
                                    if (e.includes("'")) {
                                        if (!e.includes('"')) return `"${e}"`;
                                        if (!e.includes("`") && !e.includes("${")) return `\`${e}\``
                                    }
                                    return `'${e}'`;
                                case "number":
                                    return isNaN(e) ? "NaN" : Object.is(e, -0) ? String(e) : e;
                                case "bigint":
                                    return `${String(e)}n`;
                                case "boolean":
                                case "undefined":
                                    return String(e);
                                case "object":
                                    return "{}"
                            }
                        },
                        types: {
                            isAsyncFunction: e => e instanceof i,
                            isArrayBufferView: e => ArrayBuffer.isView(e)
                        },
                        isBlob: o
                    }, t.exports.promisify.custom = Symbol.for("nodejs.util.promisify.custom")
                })),
                st = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        AbortController: r,
                        AbortSignal: i
                    } = typeof self < "u" ? self : typeof window < "u" ? window : void 0;
                    t.exports = r, t.exports.AbortSignal = i, t.exports.default = r
                })),
                at = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        format: r,
                        inspect: i,
                        AggregateError: n
                    } = ot(), o = globalThis.AggregateError || n, s = Symbol("kIsNodeError"), a = ["string", "function", "number", "object", "Function", "Object", "boolean", "bigint", "symbol"], l = /^([A-Z][a-z0-9]*)+$/, h = {};

                    function u(e, t) {
                        if (!e) throw new h.ERR_INTERNAL_ASSERTION(t)
                    }

                    function c(e) {
                        let t = "",
                            r = e.length,
                            i = "-" === e[0] ? 1 : 0;
                        for (; r >= i + 4; r -= 3) t = `_${e.slice(r-3,r)}${t}`;
                        return `${e.slice(0,r)}${t}`
                    }

                    function p(e, t, i) {
                        i || (i = Error);
                        class n extends i {
                            constructor(...i) {
                                super(function(e, t, i) {
                                    if ("function" == typeof t) return u(t.length <= i.length, `Code: ${e}; The provided arguments length (${i.length}) does not match the required ones (${t.length}).`), t(...i);
                                    let n = (t.match(/%[dfijoOs]/g) || []).length;
                                    return u(n === i.length, `Code: ${e}; The provided arguments length (${i.length}) does not match the required ones (${n}).`), 0 === i.length ? t : r(t, ...i)
                                }(e, t, i))
                            }
                            toString() {
                                return `${this.name} [${e}]: ${this.message}`
                            }
                        }
                        Object.defineProperties(n.prototype, {
                            name: {
                                value: i.name,
                                writable: !0,
                                enumerable: !1,
                                configurable: !0
                            },
                            toString: {
                                value() {
                                    return `${this.name} [${e}]: ${this.message}`
                                },
                                writable: !0,
                                enumerable: !1,
                                configurable: !0
                            }
                        }), n.prototype.code = e, n.prototype[s] = !0, h[e] = n
                    }

                    function d(e) {
                        let t = "__node_internal_" + e.name;
                        return Object.defineProperty(e, "name", {
                            value: t
                        }), e
                    }
                    var g = class extends Error {
                        constructor(e = "The operation was aborted", t) {
                            if (void 0 !== t && "object" != typeof t) throw new h.ERR_INVALID_ARG_TYPE("options", "Object", t);
                            super(e, t), this.code = "ABORT_ERR", this.name = "AbortError"
                        }
                    };
                    p("ERR_ASSERTION", "%s", Error), p("ERR_INVALID_ARG_TYPE", ((e, t, r) => {
                        u("string" == typeof e, "'name' must be a string"), Array.isArray(t) || (t = [t]);
                        let n = "The ";
                        e.endsWith(" argument") ? n += `${e} ` : n += `"${e}" ${e.includes(".")?"property":"argument"} `, n += "must be ";
                        let o = [],
                            s = [],
                            h = [];
                        for (let e of t) u("string" == typeof e, "All expected entries have to be of type string"), a.includes(e) ? o.push(e.toLowerCase()) : l.test(e) ? s.push(e) : (u("object" !== e, 'The value "object" should be written as "Object"'), h.push(e));
                        if (s.length > 0) {
                            let e = o.indexOf("object"); - 1 !== e && (o.splice(o, e, 1), s.push("Object"))
                        }
                        if (o.length > 0) {
                            switch (o.length) {
                                case 1:
                                    n += `of type ${o[0]}`;
                                    break;
                                case 2:
                                    n += `one of type ${o[0]} or ${o[1]}`;
                                    break;
                                default: {
                                    let e = o.pop();
                                    n += `one of type ${o.join(", ")}, or ${e}`
                                }
                            }(s.length > 0 || h.length > 0) && (n += " or ")
                        }
                        if (s.length > 0) {
                            switch (s.length) {
                                case 1:
                                    n += `an instance of ${s[0]}`;
                                    break;
                                case 2:
                                    n += `an instance of ${s[0]} or ${s[1]}`;
                                    break;
                                default: {
                                    let e = s.pop();
                                    n += `an instance of ${s.join(", ")}, or ${e}`
                                }
                            }
                            h.length > 0 && (n += " or ")
                        }
                        switch (h.length) {
                            case 0:
                                break;
                            case 1:
                                h[0].toLowerCase() !== h[0] && (n += "an "), n += `${h[0]}`;
                                break;
                            case 2:
                                n += `one of ${h[0]} or ${h[1]}`;
                                break;
                            default: {
                                let e = h.pop();
                                n += `one of ${h.join(", ")}, or ${e}`
                            }
                        }
                        if (null == r) n += `. Received ${r}`;
                        else if ("function" == typeof r && r.name) n += `. Received function ${r.name}`;
                        else if ("object" == typeof r) {
                            var c;
                            null !== (c = r.constructor) && void 0 !== c && c.name ? n += `. Received an instance of ${r.constructor.name}` : n += `. Received ${i(r,{depth:-1})}`
                        } else {
                            let e = i(r, {
                                colors: !1
                            });
                            e.length > 25 && (e = `${e.slice(0,25)}...`), n += `. Received type ${typeof r} (${e})`
                        }
                        return n
                    }), TypeError), p("ERR_INVALID_ARG_VALUE", ((e, t, r = "is invalid") => {
                        let n = i(t);
                        return n.length > 128 && (n = n.slice(0, 128) + "..."), `The ${e.includes(".")?"property":"argument"} '${e}' ${r}. Received ${n}`
                    }), TypeError), p("ERR_INVALID_RETURN_VALUE", ((e, t, r) => {
                        var i;
                        return `Expected ${e} to be returned from the "${t}" function but got ${null!=r&&null!==(i=r.constructor)&&void 0!==i&&i.name?`instance of ${r.constructor.name}`:"type "+typeof r}.`
                    }), TypeError), p("ERR_MISSING_ARGS", ((...e) => {
                        u(e.length > 0, "At least one arg needs to be specified");
                        let t, r = e.length;
                        switch (e = (Array.isArray(e) ? e : [e]).map((e => `"${e}"`)).join(" or "), r) {
                            case 1:
                                t += `The ${e[0]} argument`;
                                break;
                            case 2:
                                t += `The ${e[0]} and ${e[1]} arguments`;
                                break;
                            default: {
                                let r = e.pop();
                                t += `The ${e.join(", ")}, and ${r} arguments`
                            }
                        }
                        return `${t} must be specified`
                    }), TypeError), p("ERR_OUT_OF_RANGE", ((e, t, r) => {
                        let n;
                        return u(t, 'Missing "range" argument'), Number.isInteger(r) && Math.abs(r) > 2 ** 32 ? n = c(String(r)) : "bigint" == typeof r ? (n = String(r), (r > 2n ** 32n || r < -(2n ** 32n)) && (n = c(n)), n += "n") : n = i(r), `The value of "${e}" is out of range. It must be ${t}. Received ${n}`
                    }), RangeError), p("ERR_MULTIPLE_CALLBACK", "Callback called multiple times", Error), p("ERR_METHOD_NOT_IMPLEMENTED", "The %s method is not implemented", Error), p("ERR_STREAM_ALREADY_FINISHED", "Cannot call %s after a stream was finished", Error), p("ERR_STREAM_CANNOT_PIPE", "Cannot pipe, not readable", Error), p("ERR_STREAM_DESTROYED", "Cannot call %s after a stream was destroyed", Error), p("ERR_STREAM_NULL_VALUES", "May not write null values to stream", TypeError), p("ERR_STREAM_PREMATURE_CLOSE", "Premature close", Error), p("ERR_STREAM_PUSH_AFTER_EOF", "stream.push() after EOF", Error), p("ERR_STREAM_UNSHIFT_AFTER_END_EVENT", "stream.unshift() after end event", Error), p("ERR_STREAM_WRITE_AFTER_END", "write after end", Error), p("ERR_UNKNOWN_ENCODING", "Unknown encoding: %s", TypeError), t.exports = {
                        AbortError: g,
                        aggregateTwoErrors: d((function(e, t) {
                            if (e && t && e !== t) {
                                if (Array.isArray(t.errors)) return t.errors.push(e), t;
                                let r = new o([t, e], t.message);
                                return r.code = t.code, r
                            }
                            return e || t
                        })),
                        hideStackFrames: d,
                        codes: h
                    }
                })),
                lt = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        ArrayIsArray: r,
                        ArrayPrototypeIncludes: i,
                        ArrayPrototypeJoin: n,
                        ArrayPrototypeMap: o,
                        NumberIsInteger: s,
                        NumberIsNaN: a,
                        NumberMAX_SAFE_INTEGER: l,
                        NumberMIN_SAFE_INTEGER: h,
                        NumberParseInt: u,
                        ObjectPrototypeHasOwnProperty: c,
                        RegExpPrototypeExec: p,
                        String: d,
                        StringPrototypeToUpperCase: g,
                        StringPrototypeTrim: b
                    } = nt(), {
                        hideStackFrames: y,
                        codes: {
                            ERR_SOCKET_BAD_PORT: m,
                            ERR_INVALID_ARG_TYPE: w,
                            ERR_INVALID_ARG_VALUE: _,
                            ERR_OUT_OF_RANGE: v,
                            ERR_UNKNOWN_SIGNAL: E
                        }
                    } = at(), {
                        normalizeEncoding: S
                    } = ot(), {
                        isAsyncFunction: A,
                        isArrayBufferView: I
                    } = ot().types, k = {}, T = /^[0-7]+$/, C = y(((e, t, r = h, i = l) => {
                        if ("number" != typeof e) throw new w(t, "number", e);
                        if (!s(e)) throw new v(t, "an integer", e);
                        if (e < r || e > i) throw new v(t, `>= ${r} && <= ${i}`, e)
                    })), R = y(((e, t, r = -2147483648, i = 2147483647) => {
                        if ("number" != typeof e) throw new w(t, "number", e);
                        if (!s(e)) throw new v(t, "an integer", e);
                        if (e < r || e > i) throw new v(t, `>= ${r} && <= ${i}`, e)
                    })), O = y(((e, t, r = !1) => {
                        if ("number" != typeof e) throw new w(t, "number", e);
                        if (!s(e)) throw new v(t, "an integer", e);
                        let i = r ? 1 : 0,
                            n = 4294967295;
                        if (e < i || e > n) throw new v(t, `>= ${i} && <= ${n}`, e)
                    }));

                    function P(e, t) {
                        if ("string" != typeof e) throw new w(t, "string", e)
                    }
                    var B = y(((e, t, r) => {
                        if (!i(r, e)) {
                            let i = "must be one of: " + n(o(r, (e => "string" == typeof e ? `'${e}'` : d(e))), ", ");
                            throw new _(t, e, i)
                        }
                    }));

                    function x(e, t) {
                        if ("boolean" != typeof e) throw new w(t, "boolean", e)
                    }

                    function U(e, t, r) {
                        return null != e && c(e, t) ? e[t] : r
                    }
                    var M = y(((e, t, i = null) => {
                            let n = U(i, "allowArray", !1),
                                o = U(i, "allowFunction", !1);
                            if (!U(i, "nullable", !1) && null === e || !n && r(e) || "object" != typeof e && (!o || "function" != typeof e)) throw new w(t, "Object", e)
                        })),
                        L = y(((e, t) => {
                            if (null != e && "object" != typeof e && "function" != typeof e) throw new w(t, "a dictionary", e)
                        })),
                        N = y(((e, t, i = 0) => {
                            if (!r(e)) throw new w(t, "Array", e);
                            if (e.length < i) throw new _(t, e, `must be longer than ${i}`)
                        })),
                        j = y(((e, t = "buffer") => {
                            if (!I(e)) throw new w(t, ["Buffer", "TypedArray", "DataView"], e)
                        })),
                        D = y(((e, t) => {
                            if (void 0 !== e && (null === e || "object" != typeof e || !("aborted" in e))) throw new w(t, "AbortSignal", e)
                        })),
                        F = y(((e, t) => {
                            if ("function" != typeof e) throw new w(t, "Function", e)
                        })),
                        W = y(((e, t) => {
                            if ("function" != typeof e || A(e)) throw new w(t, "Function", e)
                        })),
                        $ = y(((e, t) => {
                            if (void 0 !== e) throw new w(t, "undefined", e)
                        })),
                        q = /^(?:<[^>]*>)(?:\s*;\s*[^;"\s]+(?:=(")?[^;"\s]*\1)?)*$/;

                    function V(e, t) {
                        if (typeof e > "u" || !p(q, e)) throw new _(t, e, 'must be an array or string of format "</styles.css>; rel=preload; as=style"')
                    }
                    t.exports = {
                        isInt32: function(e) {
                            return e === (0 | e)
                        },
                        isUint32: function(e) {
                            return e === e >>> 0
                        },
                        parseFileMode: function(e, t, r) {
                            if (typeof e > "u" && (e = r), "string" == typeof e) {
                                if (null === p(T, e)) throw new _(t, e, "must be a 32-bit unsigned integer or an octal string");
                                e = u(e, 8)
                            }
                            return O(e, t), e
                        },
                        validateArray: N,
                        validateStringArray: function(e, t) {
                            N(e, t);
                            for (let r = 0; r < e.length; r++) P(e[r], `${t}[${r}]`)
                        },
                        validateBooleanArray: function(e, t) {
                            N(e, t);
                            for (let r = 0; r < e.length; r++) x(e[r], `${t}[${r}]`)
                        },
                        validateBoolean: x,
                        validateBuffer: j,
                        validateDictionary: L,
                        validateEncoding: function(e, t) {
                            let r = S(t),
                                i = e.length;
                            if ("hex" === r && i % 2 != 0) throw new _("encoding", t, `is invalid for data of length ${i}`)
                        },
                        validateFunction: F,
                        validateInt32: R,
                        validateInteger: C,
                        validateNumber: function(e, t, r, i) {
                            if ("number" != typeof e) throw new w(t, "number", e);
                            if (null != r && e < r || null != i && e > i || (null != r || null != i) && a(e)) throw new v(t, `${null!=r?`>= ${r}`:""}${null!=r&&null!=i?" && ":""}${null!=i?`<= ${i}`:""}`, e)
                        },
                        validateObject: M,
                        validateOneOf: B,
                        validatePlainFunction: W,
                        validatePort: function(e, t = "Port", r = !0) {
                            if ("number" != typeof e && "string" != typeof e || "string" == typeof e && 0 === b(e).length || +e != +e >>> 0 || e > 65535 || 0 === e && !r) throw new m(t, e, r);
                            return 0 | e
                        },
                        validateSignalName: function(e, t = "signal") {
                            if (P(e, t), void 0 === k[e]) throw void 0 !== k[g(e)] ? new E(e + " (signals must use all capital letters)") : new E(e)
                        },
                        validateString: P,
                        validateUint32: O,
                        validateUndefined: $,
                        validateUnion: function(e, t, r) {
                            if (!i(r, e)) throw new w(t, `('${n(r,"|")}')`, e)
                        },
                        validateAbortSignal: D,
                        validateLinkHeaderValue: function(e) {
                            if ("string" == typeof e) return V(e, "hints"), e;
                            if (r(e)) {
                                let t = e.length,
                                    r = "";
                                if (0 === t) return r;
                                for (let i = 0; i < t; i++) {
                                    let n = e[i];
                                    V(n, "hints"), r += n, i !== t - 1 && (r += ", ")
                                }
                                return r
                            }
                            throw new _("hints", e, 'must be an array or string of format "</styles.css>; rel=preload; as=style"')
                        }
                    }
                })),
                ht = h(((e, t) => {
                    f(), rt(), qe();
                    var r, i, n = t.exports = {};

                    function o() {
                        throw new Error("setTimeout has not been defined")
                    }

                    function s() {
                        throw new Error("clearTimeout has not been defined")
                    }

                    function a(e) {
                        if (r === setTimeout) return setTimeout(e, 0);
                        if ((r === o || !r) && setTimeout) return r = setTimeout, setTimeout(e, 0);
                        try {
                            return r(e, 0)
                        } catch {
                            try {
                                return r.call(null, e, 0)
                            } catch {
                                return r.call(this, e, 0)
                            }
                        }
                    }! function() {
                        try {
                            r = "function" == typeof setTimeout ? setTimeout : o
                        } catch {
                            r = o
                        }
                        try {
                            i = "function" == typeof clearTimeout ? clearTimeout : s
                        } catch {
                            i = s
                        }
                    }();
                    var l, h = [],
                        u = !1,
                        c = -1;

                    function p() {
                        !u || !l || (u = !1, l.length ? h = l.concat(h) : c = -1, h.length && d())
                    }

                    function d() {
                        if (!u) {
                            var e = a(p);
                            u = !0;
                            for (var t = h.length; t;) {
                                for (l = h, h = []; ++c < t;) l && l[c].run();
                                c = -1, t = h.length
                            }
                            l = null, u = !1,
                                function(e) {
                                    if (i === clearTimeout) return clearTimeout(e);
                                    if ((i === s || !i) && clearTimeout) return i = clearTimeout, clearTimeout(e);
                                    try {
                                        i(e)
                                    } catch {
                                        try {
                                            return i.call(null, e)
                                        } catch {
                                            return i.call(this, e)
                                        }
                                    }
                                }(e)
                        }
                    }

                    function g(e, t) {
                        this.fun = e, this.array = t
                    }

                    function b() {}
                    n.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        h.push(new g(e, t)), 1 === h.length && !u && a(d)
                    }, g.prototype.run = function() {
                        this.fun.apply(null, this.array)
                    }, n.title = "browser", n.browser = !0, n.env = {}, n.argv = [], n.version = "", n.versions = {}, n.on = b, n.addListener = b, n.once = b, n.off = b, n.removeListener = b, n.removeAllListeners = b, n.emit = b, n.prependListener = b, n.prependOnceListener = b, n.listeners = function(e) {
                        return []
                    }, n.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }, n.cwd = function() {
                        return "/"
                    }, n.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }, n.umask = function() {
                        return 0
                    }
                })),
                ut = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        Symbol: r,
                        SymbolAsyncIterator: i,
                        SymbolIterator: n,
                        SymbolFor: o
                    } = nt(), s = r("kDestroyed"), a = r("kIsErrored"), l = r("kIsReadable"), h = r("kIsDisturbed"), u = o("nodejs.webstream.isClosedPromise"), c = o("nodejs.webstream.controllerErrorFunction");

                    function p(e, t = !1) {
                        var r;
                        return !(!e || "function" != typeof e.pipe || "function" != typeof e.on || t && ("function" != typeof e.pause || "function" != typeof e.resume) || e._writableState && !1 === (null === (r = e._readableState) || void 0 === r ? void 0 : r.readable) || e._writableState && !e._readableState)
                    }

                    function d(e) {
                        var t;
                        return !(!e || "function" != typeof e.write || "function" != typeof e.on || e._readableState && !1 === (null === (t = e._writableState) || void 0 === t ? void 0 : t.writable))
                    }

                    function g(e) {
                        return e && (e._readableState || e._writableState || "function" == typeof e.write && "function" == typeof e.on || "function" == typeof e.pipe && "function" == typeof e.on)
                    }

                    function b(e) {
                        return !(!e || g(e) || "function" != typeof e.pipeThrough || "function" != typeof e.getReader || "function" != typeof e.cancel)
                    }

                    function y(e) {
                        return !(!e || g(e) || "function" != typeof e.getWriter || "function" != typeof e.abort)
                    }

                    function m(e) {
                        return !(!e || g(e) || "object" != typeof e.readable || "object" != typeof e.writable)
                    }

                    function w(e) {
                        if (!g(e)) return null;
                        let t = e._writableState,
                            r = e._readableState,
                            i = t || r;
                        return !!(e.destroyed || e[s] || null != i && i.destroyed)
                    }

                    function _(e) {
                        if (!d(e)) return null;
                        if (!0 === e.writableEnded) return !0;
                        let t = e._writableState;
                        return (null == t || !t.errored) && ("boolean" != typeof t?.ended ? null : t.ended)
                    }

                    function v(e, t) {
                        if (!p(e)) return null;
                        let r = e._readableState;
                        return (null == r || !r.errored) && ("boolean" != typeof r?.endEmitted ? null : !!(r.endEmitted || !1 === t && !0 === r.ended && 0 === r.length))
                    }

                    function E(e) {
                        return e && null != e[l] ? e[l] : "boolean" != typeof e?.readable ? null : !w(e) && p(e) && e.readable && !v(e)
                    }

                    function S(e) {
                        return "boolean" != typeof e?.writable ? null : !w(e) && d(e) && e.writable && !_(e)
                    }

                    function A(e) {
                        return "boolean" == typeof e._closed && "boolean" == typeof e._defaultKeepAlive && "boolean" == typeof e._removedConnection && "boolean" == typeof e._removedContLen
                    }

                    function I(e) {
                        return "boolean" == typeof e._sent100 && A(e)
                    }
                    t.exports = {
                        kDestroyed: s,
                        isDisturbed: function(e) {
                            var t;
                            return !(!e || !(null !== (t = e[h]) && void 0 !== t ? t : e.readableDidRead || e.readableAborted))
                        },
                        kIsDisturbed: h,
                        isErrored: function(e) {
                            var t, r, i, n, o, s, l, h, u, c;
                            return !(!e || !(null !== (t = null !== (r = null !== (i = null !== (n = null !== (o = null !== (s = e[a]) && void 0 !== s ? s : e.readableErrored) && void 0 !== o ? o : e.writableErrored) && void 0 !== n ? n : null === (l = e._readableState) || void 0 === l ? void 0 : l.errorEmitted) && void 0 !== i ? i : null === (h = e._writableState) || void 0 === h ? void 0 : h.errorEmitted) && void 0 !== r ? r : null === (u = e._readableState) || void 0 === u ? void 0 : u.errored) && void 0 !== t ? t : null !== (c = e._writableState) && void 0 !== c && c.errored))
                        },
                        kIsErrored: a,
                        isReadable: E,
                        kIsReadable: l,
                        kIsClosedPromise: u,
                        kControllerErrorFunction: c,
                        isClosed: function(e) {
                            if (!g(e)) return null;
                            if ("boolean" == typeof e.closed) return e.closed;
                            let t = e._writableState,
                                r = e._readableState;
                            return "boolean" == typeof t?.closed || "boolean" == typeof r?.closed ? t?.closed || r?.closed : "boolean" == typeof e._closed && A(e) ? e._closed : null
                        },
                        isDestroyed: w,
                        isDuplexNodeStream: function(e) {
                            return !(!e || "function" != typeof e.pipe || !e._readableState || "function" != typeof e.on || "function" != typeof e.write)
                        },
                        isFinished: function(e, t) {
                            return g(e) ? !!w(e) || !(!1 !== t?.readable && E(e) || !1 !== t?.writable && S(e)) : null
                        },
                        isIterable: function(e, t) {
                            return null != e && (!0 === t ? "function" == typeof e[i] : !1 === t ? "function" == typeof e[n] : "function" == typeof e[i] || "function" == typeof e[n])
                        },
                        isReadableNodeStream: p,
                        isReadableStream: b,
                        isReadableEnded: function(e) {
                            if (!p(e)) return null;
                            if (!0 === e.readableEnded) return !0;
                            let t = e._readableState;
                            return !(!t || t.errored) && ("boolean" != typeof t?.ended ? null : t.ended)
                        },
                        isReadableFinished: v,
                        isReadableErrored: function(e) {
                            var t, r;
                            return g(e) ? e.readableErrored ? e.readableErrored : null !== (t = null === (r = e._readableState) || void 0 === r ? void 0 : r.errored) && void 0 !== t ? t : null : null
                        },
                        isNodeStream: g,
                        isWebStream: function(e) {
                            return b(e) || y(e) || m(e)
                        },
                        isWritable: S,
                        isWritableNodeStream: d,
                        isWritableStream: y,
                        isWritableEnded: _,
                        isWritableFinished: function(e, t) {
                            if (!d(e)) return null;
                            if (!0 === e.writableFinished) return !0;
                            let r = e._writableState;
                            return (null == r || !r.errored) && ("boolean" != typeof r?.finished ? null : !!(r.finished || !1 === t && !0 === r.ended && 0 === r.length))
                        },
                        isWritableErrored: function(e) {
                            var t, r;
                            return g(e) ? e.writableErrored ? e.writableErrored : null !== (t = null === (r = e._writableState) || void 0 === r ? void 0 : r.errored) && void 0 !== t ? t : null : null
                        },
                        isServerRequest: function(e) {
                            var t;
                            return "boolean" == typeof e._consuming && "boolean" == typeof e._dumped && void 0 === (null === (t = e.req) || void 0 === t ? void 0 : t.upgradeOrConnect)
                        },
                        isServerResponse: I,
                        willEmitClose: function(e) {
                            if (!g(e)) return null;
                            let t = e._writableState,
                                r = e._readableState,
                                i = t || r;
                            return !i && I(e) || !!(i && i.autoDestroy && i.emitClose && !1 === i.closed)
                        },
                        isTransformStream: m
                    }
                })),
                ct = h(((e, t) => {
                    f(), rt(), qe();
                    var r = ht(),
                        {
                            AbortError: i,
                            codes: n
                        } = at(),
                        {
                            ERR_INVALID_ARG_TYPE: o,
                            ERR_STREAM_PREMATURE_CLOSE: s
                        } = n,
                        {
                            kEmptyObject: a,
                            once: l
                        } = ot(),
                        {
                            validateAbortSignal: h,
                            validateFunction: u,
                            validateObject: c,
                            validateBoolean: p
                        } = lt(),
                        {
                            Promise: d,
                            PromisePrototypeThen: g
                        } = nt(),
                        {
                            isClosed: b,
                            isReadable: y,
                            isReadableNodeStream: m,
                            isReadableStream: w,
                            isReadableFinished: _,
                            isReadableErrored: v,
                            isWritable: E,
                            isWritableNodeStream: S,
                            isWritableStream: A,
                            isWritableFinished: I,
                            isWritableErrored: k,
                            isNodeStream: T,
                            willEmitClose: C,
                            kIsClosedPromise: R
                        } = ut();

                    function O(e) {
                        return e.setHeader && "function" == typeof e.abort
                    }
                    var P = () => {};

                    function B(e, t, n) {
                        var f, p;
                        if (2 === arguments.length ? (n = t, t = a) : null == t ? t = a : c(t, "options"), u(n, "callback"), h(t.signal, "options.signal"), n = l(n), w(e) || A(e)) return x(e, t, n);
                        if (!T(e)) throw new o("stream", ["ReadableStream", "WritableStream", "Stream"], e);
                        let d = null !== (f = t.readable) && void 0 !== f ? f : m(e),
                            g = null !== (p = t.writable) && void 0 !== p ? p : S(e),
                            R = e._writableState,
                            B = e._readableState,
                            U = () => {
                                e.writable || N()
                            },
                            M = C(e) && m(e) === d && S(e) === g,
                            L = I(e, !1),
                            N = () => {
                                L = !0, e.destroyed && (M = !1), (!M || e.readable && !d) && (!d || j) && n.call(e)
                            },
                            j = _(e, !1),
                            D = () => {
                                j = !0, e.destroyed && (M = !1), (!M || e.writable && !g) && (!g || L) && n.call(e)
                            },
                            F = t => {
                                n.call(e, t)
                            },
                            W = b(e),
                            $ = () => {
                                W = !0;
                                let t = k(e) || v(e);
                                return t && "boolean" != typeof t ? n.call(e, t) : d && !j && m(e, !0) && !_(e, !1) ? n.call(e, new s) : !g || L || I(e, !1) ? void n.call(e) : n.call(e, new s)
                            },
                            q = () => {
                                W = !0;
                                let t = k(e) || v(e);
                                if (t && "boolean" != typeof t) return n.call(e, t);
                                n.call(e)
                            },
                            V = () => {
                                e.req.on("finish", N)
                            };
                        O(e) ? (e.on("complete", N), M || e.on("abort", $), e.req ? V() : e.on("request", V)) : g && !R && (e.on("end", U), e.on("close", U)), !M && "boolean" == typeof e.aborted && e.on("aborted", $), e.on("end", D), e.on("finish", N), !1 !== t.error && e.on("error", F), e.on("close", $), W ? r.nextTick($) : null != R && R.errorEmitted || null != B && B.errorEmitted ? M || r.nextTick(q) : (!d && (!M || y(e)) && (L || !1 === E(e)) || !g && (!M || E(e)) && (j || !1 === y(e)) || B && e.req && e.aborted) && r.nextTick(q);
                        let H = () => {
                            n = P, e.removeListener("aborted", $), e.removeListener("complete", N), e.removeListener("abort", $), e.removeListener("request", V), e.req && e.req.removeListener("finish", N), e.removeListener("end", U), e.removeListener("close", U), e.removeListener("finish", N), e.removeListener("end", D), e.removeListener("error", F), e.removeListener("close", $)
                        };
                        if (t.signal && !W) {
                            let o = () => {
                                let r = n;
                                H(), r.call(e, new i(void 0, {
                                    cause: t.signal.reason
                                }))
                            };
                            if (t.signal.aborted) r.nextTick(o);
                            else {
                                let r = n;
                                n = l(((...i) => {
                                    t.signal.removeEventListener("abort", o), r.apply(e, i)
                                })), t.signal.addEventListener("abort", o)
                            }
                        }
                        return H
                    }

                    function x(e, t, n) {
                        let o = !1,
                            s = P;
                        if (t.signal)
                            if (s = () => {
                                    o = !0, n.call(e, new i(void 0, {
                                        cause: t.signal.reason
                                    }))
                                }, t.signal.aborted) r.nextTick(s);
                            else {
                                let r = n;
                                n = l(((...i) => {
                                    t.signal.removeEventListener("abort", s), r.apply(e, i)
                                })), t.signal.addEventListener("abort", s)
                            } let a = (...t) => {
                            o || r.nextTick((() => n.apply(e, t)))
                        };
                        return g(e[R].promise, a, a), P
                    }
                    t.exports = B, t.exports.finished = function(e, t) {
                        var r;
                        let i = !1;
                        return null === t && (t = a), null !== (r = t) && void 0 !== r && r.cleanup && (p(t.cleanup, "cleanup"), i = t.cleanup), new d(((r, n) => {
                            let o = B(e, t, (e => {
                                i && o(), e ? n(e) : r()
                            }))
                        }))
                    }
                })),
                ft = h(((e, t) => {
                    f(), rt(), qe();
                    var r = ht(),
                        {
                            aggregateTwoErrors: i,
                            codes: {
                                ERR_MULTIPLE_CALLBACK: n
                            },
                            AbortError: o
                        } = at(),
                        {
                            Symbol: s
                        } = nt(),
                        {
                            kDestroyed: a,
                            isDestroyed: l,
                            isFinished: h,
                            isServerRequest: u
                        } = ut(),
                        c = s("kDestroy"),
                        p = s("kConstruct");

                    function d(e, t, r) {
                        e && (e.stack, t && !t.errored && (t.errored = e), r && !r.errored && (r.errored = e))
                    }

                    function g(e, t, i) {
                        let n = !1;

                        function o(t) {
                            if (n) return;
                            n = !0;
                            let o = e._readableState,
                                s = e._writableState;
                            d(t, s, o), s && (s.closed = !0), o && (o.closed = !0), "function" == typeof i && i(t), t ? r.nextTick(b, e, t) : r.nextTick(y, e)
                        }
                        try {
                            e._destroy(t || null, o)
                        } catch (e) {
                            o(e)
                        }
                    }

                    function b(e, t) {
                        m(e, t), y(e)
                    }

                    function y(e) {
                        let t = e._readableState,
                            r = e._writableState;
                        r && (r.closeEmitted = !0), t && (t.closeEmitted = !0), (null != r && r.emitClose || null != t && t.emitClose) && e.emit("close")
                    }

                    function m(e, t) {
                        let r = e._readableState,
                            i = e._writableState;
                        null != i && i.errorEmitted || null != r && r.errorEmitted || (i && (i.errorEmitted = !0), r && (r.errorEmitted = !0), e.emit("error", t))
                    }

                    function w(e, t, i) {
                        let n = e._readableState,
                            o = e._writableState;
                        if (null != o && o.destroyed || null != n && n.destroyed) return this;
                        null != n && n.autoDestroy || null != o && o.autoDestroy ? e.destroy(t) : t && (t.stack, o && !o.errored && (o.errored = t), n && !n.errored && (n.errored = t), i ? r.nextTick(m, e, t) : m(e, t))
                    }

                    function _(e) {
                        let t = !1;

                        function i(i) {
                            if (t) return void w(e, i ?? new n);
                            t = !0;
                            let o = e._readableState,
                                s = e._writableState,
                                a = s || o;
                            o && (o.constructed = !0), s && (s.constructed = !0), a.destroyed ? e.emit(c, i) : i ? w(e, i, !0) : r.nextTick(v, e)
                        }
                        try {
                            e._construct((e => {
                                r.nextTick(i, e)
                            }))
                        } catch (e) {
                            r.nextTick(i, e)
                        }
                    }

                    function v(e) {
                        e.emit(p)
                    }

                    function E(e) {
                        return e?.setHeader && "function" == typeof e.abort
                    }

                    function S(e) {
                        e.emit("close")
                    }

                    function A(e, t) {
                        e.emit("error", t), r.nextTick(S, e)
                    }
                    t.exports = {
                        construct: function(e, t) {
                            if ("function" != typeof e._construct) return;
                            let i = e._readableState,
                                n = e._writableState;
                            i && (i.constructed = !1), n && (n.constructed = !1), e.once(p, t), !(e.listenerCount(p) > 1) && r.nextTick(_, e)
                        },
                        destroyer: function(e, t) {
                            !e || l(e) || (!t && !h(e) && (t = new o), u(e) ? (e.socket = null, e.destroy(t)) : E(e) ? e.abort() : E(e.req) ? e.req.abort() : "function" == typeof e.destroy ? e.destroy(t) : "function" == typeof e.close ? e.close() : t ? r.nextTick(A, e, t) : r.nextTick(S, e), e.destroyed || (e[a] = !0))
                        },
                        destroy: function(e, t) {
                            let r = this._readableState,
                                n = this._writableState,
                                o = n || r;
                            return null != n && n.destroyed || null != r && r.destroyed ? ("function" == typeof t && t(), this) : (d(e, n, r), n && (n.destroyed = !0), r && (r.destroyed = !0), o.constructed ? g(this, e, t) : this.once(c, (function(r) {
                                g(this, i(r, e), t)
                            })), this)
                        },
                        undestroy: function() {
                            let e = this._readableState,
                                t = this._writableState;
                            e && (e.constructed = !0, e.closed = !1, e.closeEmitted = !1, e.destroyed = !1, e.errored = null, e.errorEmitted = !1, e.reading = !1, e.ended = !1 === e.readable, e.endEmitted = !1 === e.readable), t && (t.constructed = !0, t.destroyed = !1, t.closed = !1, t.closeEmitted = !1, t.errored = null, t.errorEmitted = !1, t.finalCalled = !1, t.prefinished = !1, t.ended = !1 === t.writable, t.ending = !1 === t.writable, t.finished = !1 === t.writable)
                        },
                        errorOrDestroy: w
                    }
                }));

            function pt() {
                pt.init.call(this)
            }

            function dt(e) {
                if ("function" != typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
            }

            function gt(e) {
                return void 0 === e._maxListeners ? pt.defaultMaxListeners : e._maxListeners
            }

            function bt(e, t, r, n) {
                var o, s, a, l;
                if (dt(r), void 0 === (s = e._events) ? (s = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== s.newListener && (e.emit("newListener", t, r.listener ? r.listener : r), s = e._events), a = s[t]), void 0 === a) a = s[t] = r, ++e._eventsCount;
                else if ("function" == typeof a ? a = s[t] = n ? [r, a] : [a, r] : n ? a.unshift(r) : a.push(r), (o = gt(e)) > 0 && a.length > o && !a.warned) {
                    a.warned = !0;
                    var h = new Error("Possible EventEmitter memory leak detected. " + a.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                    h.name = "MaxListenersExceededWarning", h.emitter = e, h.type = t, h.count = a.length, l = h, i && i.warn && i.warn(l)
                }
                return e
            }

            function yt() {
                if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
            }

            function mt(e, t, r) {
                var i = {
                        fired: !1,
                        wrapFn: void 0,
                        target: e,
                        type: t,
                        listener: r
                    },
                    n = yt.bind(i);
                return n.listener = r, i.wrapFn = n, n
            }

            function wt(e, t, r) {
                var i = e._events;
                if (void 0 === i) return [];
                var n = i[t];
                return void 0 === n ? [] : "function" == typeof n ? r ? [n.listener || n] : [n] : r ? function(e) {
                    for (var t = new Array(e.length), r = 0; r < t.length; ++r) t[r] = e[r].listener || e[r];
                    return t
                }(n) : vt(n, n.length)
            }

            function _t(e) {
                var t = this._events;
                if (void 0 !== t) {
                    var r = t[e];
                    if ("function" == typeof r) return 1;
                    if (void 0 !== r) return r.length
                }
                return 0
            }

            function vt(e, t) {
                for (var r = new Array(t), i = 0; i < t; ++i) r[i] = e[i];
                return r
            }
            var Et, St, At, It, kt, Tt, Ct, Rt = l((() => {
                    f(), rt(), qe(), At = "object" == typeof Reflect ? Reflect : null, It = At && "function" == typeof At.apply ? At.apply : function(e, t, r) {
                        return Function.prototype.apply.call(e, t, r)
                    }, St = At && "function" == typeof At.ownKeys ? At.ownKeys : Object.getOwnPropertySymbols ? function(e) {
                        return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
                    } : function(e) {
                        return Object.getOwnPropertyNames(e)
                    }, kt = Number.isNaN || function(e) {
                        return e != e
                    }, Et = pt, pt.EventEmitter = pt, pt.prototype._events = void 0, pt.prototype._eventsCount = 0, pt.prototype._maxListeners = void 0, Tt = 10, Object.defineProperty(pt, "defaultMaxListeners", {
                        enumerable: !0,
                        get: function() {
                            return Tt
                        },
                        set: function(e) {
                            if ("number" != typeof e || e < 0 || kt(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                            Tt = e
                        }
                    }), pt.init = function() {
                        void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
                    }, pt.prototype.setMaxListeners = function(e) {
                        if ("number" != typeof e || e < 0 || kt(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
                        return this._maxListeners = e, this
                    }, pt.prototype.getMaxListeners = function() {
                        return gt(this)
                    }, pt.prototype.emit = function(e) {
                        for (var t = [], r = 1; r < arguments.length; r++) t.push(arguments[r]);
                        var i = "error" === e,
                            n = this._events;
                        if (void 0 !== n) i = i && void 0 === n.error;
                        else if (!i) return !1;
                        if (i) {
                            var o;
                            if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                            var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                            throw s.context = o, s
                        }
                        var a = n[e];
                        if (void 0 === a) return !1;
                        if ("function" == typeof a) It(a, this, t);
                        else {
                            var l = a.length,
                                h = vt(a, l);
                            for (r = 0; r < l; ++r) It(h[r], this, t)
                        }
                        return !0
                    }, pt.prototype.addListener = function(e, t) {
                        return bt(this, e, t, !1)
                    }, pt.prototype.on = pt.prototype.addListener, pt.prototype.prependListener = function(e, t) {
                        return bt(this, e, t, !0)
                    }, pt.prototype.once = function(e, t) {
                        return dt(t), this.on(e, mt(this, e, t)), this
                    }, pt.prototype.prependOnceListener = function(e, t) {
                        return dt(t), this.prependListener(e, mt(this, e, t)), this
                    }, pt.prototype.removeListener = function(e, t) {
                        var r, i, n, o, s;
                        if (dt(t), void 0 === (i = this._events)) return this;
                        if (void 0 === (r = i[e])) return this;
                        if (r === t || r.listener === t) 0 == --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, r.listener || t));
                        else if ("function" != typeof r) {
                            for (n = -1, o = r.length - 1; o >= 0; o--)
                                if (r[o] === t || r[o].listener === t) {
                                    s = r[o].listener, n = o;
                                    break
                                } if (n < 0) return this;
                            0 === n ? r.shift() : function(e, t) {
                                for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                                e.pop()
                            }(r, n), 1 === r.length && (i[e] = r[0]), void 0 !== i.removeListener && this.emit("removeListener", e, s || t)
                        }
                        return this
                    }, pt.prototype.off = pt.prototype.removeListener, pt.prototype.removeAllListeners = function(e) {
                        var t, r, i;
                        if (void 0 === (r = this._events)) return this;
                        if (void 0 === r.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== r[e] && (0 == --this._eventsCount ? this._events = Object.create(null) : delete r[e]), this;
                        if (0 === arguments.length) {
                            var n, o = Object.keys(r);
                            for (i = 0; i < o.length; ++i) "removeListener" !== (n = o[i]) && this.removeAllListeners(n);
                            return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
                        }
                        if ("function" == typeof(t = r[e])) this.removeListener(e, t);
                        else if (void 0 !== t)
                            for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
                        return this
                    }, pt.prototype.listeners = function(e) {
                        return wt(this, e, !0)
                    }, pt.prototype.rawListeners = function(e) {
                        return wt(this, e, !1)
                    }, pt.listenerCount = function(e, t) {
                        return "function" == typeof e.listenerCount ? e.listenerCount(t) : _t.call(e, t)
                    }, pt.prototype.listenerCount = _t, pt.prototype.eventNames = function() {
                        return this._eventsCount > 0 ? St(this._events) : []
                    }, (Ct = Et).EventEmitter, Ct.defaultMaxListeners, Ct.init, Ct.listenerCount, Ct.EventEmitter, Ct.defaultMaxListeners, Ct.init, Ct.listenerCount
                })),
                Ot = {};
            u(Ot, {
                EventEmitter: () => Pt,
                default: () => Ct,
                defaultMaxListeners: () => Bt,
                init: () => xt,
                listenerCount: () => Ut,
                on: () => Mt,
                once: () => Lt
            });
            var Pt, Bt, xt, Ut, Mt, Lt, Nt = l((() => {
                    f(), rt(), qe(), Rt(), Rt(), Ct.once = function(e, t) {
                        return new Promise(((r, i) => {
                            function n(...t) {
                                void 0 !== o && e.removeListener("error", o), r(t)
                            }
                            let o;
                            "error" !== t && (o = t => {
                                e.removeListener(name, n), i(t)
                            }, e.once("error", o)), e.once(t, n)
                        }))
                    }, Ct.on = function(e, t) {
                        let r = [],
                            i = [],
                            n = null,
                            o = !1,
                            s = {
                                async next() {
                                    let e = r.shift();
                                    if (e) return createIterResult(e, !1);
                                    if (n) {
                                        let e = Promise.reject(n);
                                        return n = null, e
                                    }
                                    return o ? createIterResult(void 0, !0) : new Promise(((e, t) => i.push({
                                        resolve: e,
                                        reject: t
                                    })))
                                },
                                async return () {
                                    e.removeListener(t, a), e.removeListener("error", l), o = !0;
                                    for (let e of i) e.resolve(createIterResult(void 0, !0));
                                    return createIterResult(void 0, !0)
                                },
                                throw (r) {
                                    n = r, e.removeListener(t, a), e.removeListener("error", l)
                                },
                                [Symbol.asyncIterator]() {
                                    return this
                                }
                            };
                        return e.on(t, a), e.on("error", l), s;

                        function a(...e) {
                            let t = i.shift();
                            t ? t.resolve(createIterResult(e, !1)) : r.push(e)
                        }

                        function l(e) {
                            o = !0;
                            let t = i.shift();
                            t ? t.reject(e) : n = e, s.return()
                        }
                    }, ({
                        EventEmitter: Pt,
                        defaultMaxListeners: Bt,
                        init: xt,
                        listenerCount: Ut,
                        on: Mt,
                        once: Lt
                    } = Ct)
                })),
                jt = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        ArrayIsArray: r,
                        ObjectSetPrototypeOf: i
                    } = nt(), {
                        EventEmitter: n
                    } = (Nt(), c(Ot));

                    function o(e) {
                        n.call(this, e)
                    }

                    function s(e, t, i) {
                        if ("function" == typeof e.prependListener) return e.prependListener(t, i);
                        e._events && e._events[t] ? r(e._events[t]) ? e._events[t].unshift(i) : e._events[t] = [i, e._events[t]] : e.on(t, i)
                    }
                    i(o.prototype, n.prototype), i(o, n), o.prototype.pipe = function(e, t) {
                        let r = this;

                        function i(t) {
                            e.writable && !1 === e.write(t) && r.pause && r.pause()
                        }

                        function o() {
                            r.readable && r.resume && r.resume()
                        }
                        r.on("data", i), e.on("drain", o), !e._isStdio && (!t || !1 !== t.end) && (r.on("end", l), r.on("close", h));
                        let a = !1;

                        function l() {
                            a || (a = !0, e.end())
                        }

                        function h() {
                            a || (a = !0, "function" == typeof e.destroy && e.destroy())
                        }

                        function u(e) {
                            c(), 0 === n.listenerCount(this, "error") && this.emit("error", e)
                        }

                        function c() {
                            r.removeListener("data", i), e.removeListener("drain", o), r.removeListener("end", l), r.removeListener("close", h), r.removeListener("error", u), e.removeListener("error", u), r.removeListener("end", c), r.removeListener("close", c), e.removeListener("close", c)
                        }
                        return s(r, "error", u), s(e, "error", u), r.on("end", c), r.on("close", c), e.on("close", c), e.emit("pipe", r), e
                    }, t.exports = {
                        Stream: o,
                        prependListener: s
                    }
                })),
                Dt = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        AbortError: r,
                        codes: i
                    } = at(), {
                        isNodeStream: n,
                        isWebStream: o,
                        kControllerErrorFunction: s
                    } = ut(), a = ct(), {
                        ERR_INVALID_ARG_TYPE: l
                    } = i;
                    t.exports.addAbortSignal = function(e, r) {
                        if (((e, t) => {
                                if ("object" != typeof e || !("aborted" in e)) throw new l("signal", "AbortSignal", e)
                            })(e), !n(r) && !o(r)) throw new l("stream", ["ReadableStream", "WritableStream", "Stream"], r);
                        return t.exports.addAbortSignalNoValidate(e, r)
                    }, t.exports.addAbortSignalNoValidate = function(e, t) {
                        if ("object" != typeof e || !("aborted" in e)) return t;
                        let i = n(t) ? () => {
                            t.destroy(new r(void 0, {
                                cause: e.reason
                            }))
                        } : () => {
                            t[s](new r(void 0, {
                                cause: e.reason
                            }))
                        };
                        return e.aborted ? i() : (e.addEventListener("abort", i), a(t, (() => e.removeEventListener("abort", i)))), t
                    }
                })),
                Ft = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        StringPrototypeSlice: r,
                        SymbolIterator: i,
                        TypedArrayPrototypeSet: n,
                        Uint8Array: o
                    } = nt(), {
                        Buffer: s
                    } = (tt(), c(Ve)), {
                        inspect: a
                    } = ot();
                    t.exports = class {
                        constructor() {
                            this.head = null, this.tail = null, this.length = 0
                        }
                        push(e) {
                            let t = {
                                data: e,
                                next: null
                            };
                            this.length > 0 ? this.tail.next = t : this.head = t, this.tail = t, ++this.length
                        }
                        unshift(e) {
                            let t = {
                                data: e,
                                next: this.head
                            };
                            0 === this.length && (this.tail = t), this.head = t, ++this.length
                        }
                        shift() {
                            if (0 === this.length) return;
                            let e = this.head.data;
                            return 1 === this.length ? this.head = this.tail = null : this.head = this.head.next, --this.length, e
                        }
                        clear() {
                            this.head = this.tail = null, this.length = 0
                        }
                        join(e) {
                            if (0 === this.length) return "";
                            let t = this.head,
                                r = "" + t.data;
                            for (; null !== (t = t.next);) r += e + t.data;
                            return r
                        }
                        concat(e) {
                            if (0 === this.length) return s.alloc(0);
                            let t = s.allocUnsafe(e >>> 0),
                                r = this.head,
                                i = 0;
                            for (; r;) n(t, r.data, i), i += r.data.length, r = r.next;
                            return t
                        }
                        consume(e, t) {
                            let r = this.head.data;
                            if (e < r.length) {
                                let t = r.slice(0, e);
                                return this.head.data = r.slice(e), t
                            }
                            return e === r.length ? this.shift() : t ? this._getString(e) : this._getBuffer(e)
                        }
                        first() {
                            return this.head.data
                        }*[i]() {
                            for (let e = this.head; e; e = e.next) yield e.data
                        }
                        _getString(e) {
                            let t = "",
                                i = this.head,
                                n = 0;
                            do {
                                let o = i.data;
                                if (!(e > o.length)) {
                                    e === o.length ? (t += o, ++n, i.next ? this.head = i.next : this.head = this.tail = null) : (t += r(o, 0, e), this.head = i, i.data = r(o, e));
                                    break
                                }
                                t += o, e -= o.length, ++n
                            } while (null !== (i = i.next));
                            return this.length -= n, t
                        }
                        _getBuffer(e) {
                            let t = s.allocUnsafe(e),
                                r = e,
                                i = this.head,
                                a = 0;
                            do {
                                let s = i.data;
                                if (!(e > s.length)) {
                                    e === s.length ? (n(t, s, r - e), ++a, i.next ? this.head = i.next : this.head = this.tail = null) : (n(t, new o(s.buffer, s.byteOffset, e), r - e), this.head = i, i.data = s.slice(e));
                                    break
                                }
                                n(t, s, r - e), e -= s.length, ++a
                            } while (null !== (i = i.next));
                            return this.length -= a, t
                        } [Symbol.for("nodejs.util.inspect.custom")](e, t) {
                            return a(this, {
                                ...t,
                                depth: 0,
                                customInspect: !1
                            })
                        }
                    }
                })),
                Wt = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        MathFloor: r,
                        NumberIsInteger: i
                    } = nt(), {
                        ERR_INVALID_ARG_VALUE: n
                    } = at().codes;

                    function o(e) {
                        return e ? 16 : 16384
                    }
                    t.exports = {
                        getHighWaterMark: function(e, t, s, a) {
                            let l = function(e, t, r) {
                                return null != e.highWaterMark ? e.highWaterMark : t ? e[r] : null
                            }(t, a, s);
                            if (null != l) {
                                if (!i(l) || l < 0) throw new n(a ? `options.${s}` : "options.highWaterMark", l);
                                return r(l)
                            }
                            return o(e.objectMode)
                        },
                        getDefaultHighWaterMark: o
                    }
                }));

            function $t(e) {
                var t = e.length;
                if (t % 4 > 0) throw new Error("Invalid string. Length must be a multiple of 4");
                var r = e.indexOf("=");
                return -1 === r && (r = t), [r, r === t ? 0 : 4 - r % 4]
            }

            function qt(e, t, r) {
                for (var i, n, o = [], s = t; s < r; s += 3) i = (e[s] << 16 & 16711680) + (e[s + 1] << 8 & 65280) + (255 & e[s + 2]), o.push(Lr[(n = i) >> 18 & 63] + Lr[n >> 12 & 63] + Lr[n >> 6 & 63] + Lr[63 & n]);
                return o.join("")
            }

            function Vt(e) {
                if (e > 2147483647) throw new RangeError('The value "' + e + '" is invalid for option "size"');
                var t = new Uint8Array(e);
                return Object.setPrototypeOf(t, Ht.prototype), t
            }

            function Ht(e, t, r) {
                if ("number" == typeof e) {
                    if ("string" == typeof t) throw new TypeError('The "string" argument must be of type string. Received type number');
                    return Gt(e)
                }
                return zt(e, t, r)
            }

            function zt(e, t, r) {
                if ("string" == typeof e) return function(e, t) {
                    if ("string" == typeof t && "" !== t || (t = "utf8"), !Ht.isEncoding(t)) throw new TypeError("Unknown encoding: " + t);
                    var r = 0 | Jt(e, t),
                        i = Vt(r),
                        n = i.write(e, t);
                    return n !== r && (i = i.slice(0, n)), i
                }(e, t);
                if (ArrayBuffer.isView(e)) return Qt(e);
                if (null == e) throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e);
                if (Er(e, ArrayBuffer) || e && Er(e.buffer, ArrayBuffer) || typeof SharedArrayBuffer < "u" && (Er(e, SharedArrayBuffer) || e && Er(e.buffer, SharedArrayBuffer))) return function(e, t, r) {
                    if (t < 0 || e.byteLength < t) throw new RangeError('"offset" is outside of buffer bounds');
                    if (e.byteLength < t + (r || 0)) throw new RangeError('"length" is outside of buffer bounds');
                    var i;
                    return i = void 0 === t && void 0 === r ? new Uint8Array(e) : void 0 === r ? new Uint8Array(e, t) : new Uint8Array(e, t, r), Object.setPrototypeOf(i, Ht.prototype), i
                }(e, t, r);
                if ("number" == typeof e) throw new TypeError('The "value" argument must not be of type number. Received type number');
                var i = e.valueOf && e.valueOf();
                if (null != i && i !== e) return Ht.from(i, t, r);
                var n = function(e) {
                    if (Ht.isBuffer(e)) {
                        var t = 0 | Yt(e.length),
                            r = Vt(t);
                        return 0 === r.length || e.copy(r, 0, 0, t), r
                    }
                    return void 0 !== e.length ? "number" != typeof e.length || Sr(e.length) ? Vt(0) : Qt(e) : "Buffer" === e.type && Array.isArray(e.data) ? Qt(e.data) : void 0
                }(e);
                if (n) return n;
                if (typeof Symbol < "u" && null != Symbol.toPrimitive && "function" == typeof e[Symbol.toPrimitive]) return Ht.from(e[Symbol.toPrimitive]("string"), t, r);
                throw new TypeError("The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type " + typeof e)
            }

            function Kt(e) {
                if ("number" != typeof e) throw new TypeError('"size" argument must be of type number');
                if (e < 0) throw new RangeError('The value "' + e + '" is invalid for option "size"')
            }

            function Gt(e) {
                return Kt(e), Vt(e < 0 ? 0 : 0 | Yt(e))
            }

            function Qt(e) {
                for (var t = e.length < 0 ? 0 : 0 | Yt(e.length), r = Vt(t), i = 0; i < t; i += 1) r[i] = 255 & e[i];
                return r
            }

            function Yt(e) {
                if (e >= 2147483647) throw new RangeError("Attempt to allocate Buffer larger than maximum size: 0x" + 2147483647..toString(16) + " bytes");
                return 0 | e
            }

            function Jt(e, t) {
                if (Ht.isBuffer(e)) return e.length;
                if (ArrayBuffer.isView(e) || Er(e, ArrayBuffer)) return e.byteLength;
                if ("string" != typeof e) throw new TypeError('The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' + typeof e);
                var r = e.length,
                    i = arguments.length > 2 && !0 === arguments[2];
                if (!i && 0 === r) return 0;
                for (var n = !1;;) switch (t) {
                    case "ascii":
                    case "latin1":
                    case "binary":
                        return r;
                    case "utf8":
                    case "utf-8":
                        return wr(e).length;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return 2 * r;
                    case "hex":
                        return r >>> 1;
                    case "base64":
                        return _r(e).length;
                    default:
                        if (n) return i ? -1 : wr(e).length;
                        t = ("" + t).toLowerCase(), n = !0
                }
            }

            function Xt(e, t, r) {
                var i = !1;
                if ((void 0 === t || t < 0) && (t = 0), t > this.length || ((void 0 === r || r > this.length) && (r = this.length), r <= 0) || (r >>>= 0) <= (t >>>= 0)) return "";
                for (e || (e = "utf8");;) switch (e) {
                    case "hex":
                        return fr(this, t, r);
                    case "utf8":
                    case "utf-8":
                        return hr(this, t, r);
                    case "ascii":
                        return ur(this, t, r);
                    case "latin1":
                    case "binary":
                        return cr(this, t, r);
                    case "base64":
                        return lr(this, t, r);
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return pr(this, t, r);
                    default:
                        if (i) throw new TypeError("Unknown encoding: " + e);
                        e = (e + "").toLowerCase(), i = !0
                }
            }

            function Zt(e, t, r) {
                var i = e[t];
                e[t] = e[r], e[r] = i
            }

            function er(e, t, r, i, n) {
                if (0 === e.length) return -1;
                if ("string" == typeof r ? (i = r, r = 0) : r > 2147483647 ? r = 2147483647 : r < -2147483648 && (r = -2147483648), Sr(r = +r) && (r = n ? 0 : e.length - 1), r < 0 && (r = e.length + r), r >= e.length) {
                    if (n) return -1;
                    r = e.length - 1
                } else if (r < 0) {
                    if (!n) return -1;
                    r = 0
                }
                if ("string" == typeof t && (t = Ht.from(t, i)), Ht.isBuffer(t)) return 0 === t.length ? -1 : tr(e, t, r, i, n);
                if ("number" == typeof t) return t &= 255, "function" == typeof Uint8Array.prototype.indexOf ? n ? Uint8Array.prototype.indexOf.call(e, t, r) : Uint8Array.prototype.lastIndexOf.call(e, t, r) : tr(e, [t], r, i, n);
                throw new TypeError("val must be string, number or Buffer")
            }

            function tr(e, t, r, i, n) {
                var o, s = 1,
                    a = e.length,
                    l = t.length;
                if (void 0 !== i && ("ucs2" === (i = String(i).toLowerCase()) || "ucs-2" === i || "utf16le" === i || "utf-16le" === i)) {
                    if (e.length < 2 || t.length < 2) return -1;
                    s = 2, a /= 2, l /= 2, r /= 2
                }

                function h(e, t) {
                    return 1 === s ? e[t] : e.readUInt16BE(t * s)
                }
                if (n) {
                    var u = -1;
                    for (o = r; o < a; o++)
                        if (h(e, o) === h(t, -1 === u ? 0 : o - u)) {
                            if (-1 === u && (u = o), o - u + 1 === l) return u * s
                        } else - 1 !== u && (o -= o - u), u = -1
                } else
                    for (r + l > a && (r = a - l), o = r; o >= 0; o--) {
                        for (var c = !0, f = 0; f < l; f++)
                            if (h(e, o + f) !== h(t, f)) {
                                c = !1;
                                break
                            } if (c) return o
                    }
                return -1
            }

            function rr(e, t, r, i) {
                r = Number(r) || 0;
                var n = e.length - r;
                i ? (i = Number(i)) > n && (i = n) : i = n;
                var o = t.length;
                i > o / 2 && (i = o / 2);
                for (var s = 0; s < i; ++s) {
                    var a = parseInt(t.substr(2 * s, 2), 16);
                    if (Sr(a)) return s;
                    e[r + s] = a
                }
                return s
            }

            function ir(e, t, r, i) {
                return vr(wr(t, e.length - r), e, r, i)
            }

            function nr(e, t, r, i) {
                return vr(function(e) {
                    for (var t = [], r = 0; r < e.length; ++r) t.push(255 & e.charCodeAt(r));
                    return t
                }(t), e, r, i)
            }

            function or(e, t, r, i) {
                return nr(e, t, r, i)
            }

            function sr(e, t, r, i) {
                return vr(_r(t), e, r, i)
            }

            function ar(e, t, r, i) {
                return vr(function(e, t) {
                    for (var r, i, n, o = [], s = 0; s < e.length && !((t -= 2) < 0); ++s) i = (r = e.charCodeAt(s)) >> 8, n = r % 256, o.push(n), o.push(i);
                    return o
                }(t, e.length - r), e, r, i)
            }

            function lr(e, t, r) {
                return 0 === t && r === e.length ? qr.fromByteArray(e) : qr.fromByteArray(e.slice(t, r))
            }

            function hr(e, t, r) {
                r = Math.min(e.length, r);
                for (var i = [], n = t; n < r;) {
                    var o, s, a, l, h = e[n],
                        u = null,
                        c = h > 239 ? 4 : h > 223 ? 3 : h > 191 ? 2 : 1;
                    if (n + c <= r) switch (c) {
                        case 1:
                            h < 128 && (u = h);
                            break;
                        case 2:
                            128 == (192 & (o = e[n + 1])) && (l = (31 & h) << 6 | 63 & o) > 127 && (u = l);
                            break;
                        case 3:
                            o = e[n + 1], s = e[n + 2], 128 == (192 & o) && 128 == (192 & s) && (l = (15 & h) << 12 | (63 & o) << 6 | 63 & s) > 2047 && (l < 55296 || l > 57343) && (u = l);
                            break;
                        case 4:
                            o = e[n + 1], s = e[n + 2], a = e[n + 3], 128 == (192 & o) && 128 == (192 & s) && 128 == (192 & a) && (l = (15 & h) << 18 | (63 & o) << 12 | (63 & s) << 6 | 63 & a) > 65535 && l < 1114112 && (u = l)
                    }
                    null === u ? (u = 65533, c = 1) : u > 65535 && (u -= 65536, i.push(u >>> 10 & 1023 | 55296), u = 56320 | 1023 & u), i.push(u), n += c
                }
                return function(e) {
                    var t = e.length;
                    if (t <= 4096) return String.fromCharCode.apply(String, e);
                    for (var r = "", i = 0; i < t;) r += String.fromCharCode.apply(String, e.slice(i, i += 4096));
                    return r
                }(i)
            }

            function ur(e, t, r) {
                var i = "";
                r = Math.min(e.length, r);
                for (var n = t; n < r; ++n) i += String.fromCharCode(127 & e[n]);
                return i
            }

            function cr(e, t, r) {
                var i = "";
                r = Math.min(e.length, r);
                for (var n = t; n < r; ++n) i += String.fromCharCode(e[n]);
                return i
            }

            function fr(e, t, r) {
                var i = e.length;
                (!t || t < 0) && (t = 0), (!r || r < 0 || r > i) && (r = i);
                for (var n = "", o = t; o < r; ++o) n += Kr[e[o]];
                return n
            }

            function pr(e, t, r) {
                for (var i = e.slice(t, r), n = "", o = 0; o < i.length; o += 2) n += String.fromCharCode(i[o] + 256 * i[o + 1]);
                return n
            }

            function dr(e, t, r) {
                if (e % 1 != 0 || e < 0) throw new RangeError("offset is not uint");
                if (e + t > r) throw new RangeError("Trying to access beyond buffer length")
            }

            function gr(e, t, r, i, n, o) {
                if (!Ht.isBuffer(e)) throw new TypeError('"buffer" argument must be a Buffer instance');
                if (t > n || t < o) throw new RangeError('"value" argument is out of bounds');
                if (r + i > e.length) throw new RangeError("Index out of range")
            }

            function br(e, t, r, i, n, o) {
                if (r + i > e.length) throw new RangeError("Index out of range");
                if (r < 0) throw new RangeError("Index out of range")
            }

            function yr(e, t, r, i, n) {
                return t = +t, r >>>= 0, n || br(e, 0, r, 4), Vr.write(e, t, r, i, 23, 4), r + 4
            }

            function mr(e, t, r, i, n) {
                return t = +t, r >>>= 0, n || br(e, 0, r, 8), Vr.write(e, t, r, i, 52, 8), r + 8
            }

            function wr(e, t) {
                var r;
                t = t || 1 / 0;
                for (var i = e.length, n = null, o = [], s = 0; s < i; ++s) {
                    if ((r = e.charCodeAt(s)) > 55295 && r < 57344) {
                        if (!n) {
                            if (r > 56319) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            if (s + 1 === i) {
                                (t -= 3) > -1 && o.push(239, 191, 189);
                                continue
                            }
                            n = r;
                            continue
                        }
                        if (r < 56320) {
                            (t -= 3) > -1 && o.push(239, 191, 189), n = r;
                            continue
                        }
                        r = 65536 + (n - 55296 << 10 | r - 56320)
                    } else n && (t -= 3) > -1 && o.push(239, 191, 189);
                    if (n = null, r < 128) {
                        if ((t -= 1) < 0) break;
                        o.push(r)
                    } else if (r < 2048) {
                        if ((t -= 2) < 0) break;
                        o.push(r >> 6 | 192, 63 & r | 128)
                    } else if (r < 65536) {
                        if ((t -= 3) < 0) break;
                        o.push(r >> 12 | 224, r >> 6 & 63 | 128, 63 & r | 128)
                    } else {
                        if (!(r < 1114112)) throw new Error("Invalid code point");
                        if ((t -= 4) < 0) break;
                        o.push(r >> 18 | 240, r >> 12 & 63 | 128, r >> 6 & 63 | 128, 63 & r | 128)
                    }
                }
                return o
            }

            function _r(e) {
                return qr.toByteArray(function(e) {
                    if ((e = (e = e.split("=")[0]).trim().replace(zr, "")).length < 2) return "";
                    for (; e.length % 4 != 0;) e += "=";
                    return e
                }(e))
            }

            function vr(e, t, r, i) {
                for (var n = 0; n < i && !(n + r >= t.length || n >= e.length); ++n) t[n + r] = e[n];
                return n
            }

            function Er(e, t) {
                return e instanceof t || null != e && null != e.constructor && null != e.constructor.name && e.constructor.name === t.name
            }

            function Sr(e) {
                return e != e
            }

            function Ar(e, t) {
                for (var r in e) t[r] = e[r]
            }

            function Ir(e, t, r) {
                return Yr(e, t, r)
            }

            function kr(e) {
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
                        if ("string" != typeof t && (Xr.isEncoding === Zr || !Zr(e))) throw new Error("Unknown encoding: " + e);
                        return t || e
                    }(e), this.encoding) {
                    case "utf16le":
                        this.text = Rr, this.end = Or, t = 4;
                        break;
                    case "utf8":
                        this.fillLast = Cr, t = 4;
                        break;
                    case "base64":
                        this.text = Pr, this.end = Br, t = 3;
                        break;
                    default:
                        return this.write = xr, void(this.end = Ur)
                }
                this.lastNeed = 0, this.lastTotal = 0, this.lastChar = Xr.allocUnsafe(t)
            }

            function Tr(e) {
                return e <= 127 ? 0 : e >> 5 == 6 ? 2 : e >> 4 == 14 ? 3 : e >> 3 == 30 ? 4 : e >> 6 == 2 ? -1 : -2
            }

            function Cr(e) {
                var t = this.lastTotal - this.lastNeed,
                    r = function(e, t, r) {
                        if (128 != (192 & t[0])) return e.lastNeed = 0, "�";
                        if (e.lastNeed > 1 && t.length > 1) {
                            if (128 != (192 & t[1])) return e.lastNeed = 1, "�";
                            if (e.lastNeed > 2 && t.length > 2 && 128 != (192 & t[2])) return e.lastNeed = 2, "�"
                        }
                    }(this, e);
                return void 0 !== r ? r : this.lastNeed <= e.length ? (e.copy(this.lastChar, t, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal)) : (e.copy(this.lastChar, t, 0, e.length), void(this.lastNeed -= e.length))
            }

            function Rr(e, t) {
                if ((e.length - t) % 2 == 0) {
                    var r = e.toString("utf16le", t);
                    if (r) {
                        var i = r.charCodeAt(r.length - 1);
                        if (i >= 55296 && i <= 56319) return this.lastNeed = 2, this.lastTotal = 4, this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1], r.slice(0, -1)
                    }
                    return r
                }
                return this.lastNeed = 1, this.lastTotal = 2, this.lastChar[0] = e[e.length - 1], e.toString("utf16le", t, e.length - 1)
            }

            function Or(e) {
                var t = e && e.length ? this.write(e) : "";
                if (this.lastNeed) {
                    var r = this.lastTotal - this.lastNeed;
                    return t + this.lastChar.toString("utf16le", 0, r)
                }
                return t
            }

            function Pr(e, t) {
                var r = (e.length - t) % 3;
                return 0 === r ? e.toString("base64", t) : (this.lastNeed = 3 - r, this.lastTotal = 3, 1 === r ? this.lastChar[0] = e[e.length - 1] : (this.lastChar[0] = e[e.length - 2], this.lastChar[1] = e[e.length - 1]), e.toString("base64", t, e.length - r))
            }

            function Br(e) {
                var t = e && e.length ? this.write(e) : "";
                return this.lastNeed ? t + this.lastChar.toString("base64", 0, 3 - this.lastNeed) : t
            }

            function xr(e) {
                return e.toString(this.encoding)
            }

            function Ur(e) {
                return e && e.length ? this.write(e) : ""
            }
            var Mr, Lr, Nr, jr, Dr, Fr, Wr, $r, qr, Vr, Hr, zr, Kr, Gr, Qr, Yr, Jr, Xr, Zr, ei = l((() => {
                    for (f(), rt(), qe(), Mr = {
                            byteLength: function(e) {
                                var t = $t(e),
                                    r = t[0],
                                    i = t[1];
                                return 3 * (r + i) / 4 - i
                            },
                            toByteArray: function(e) {
                                var t, r, i, n = $t(e),
                                    o = n[0],
                                    s = n[1],
                                    a = new jr(3 * (o + (i = s)) / 4 - i),
                                    l = 0,
                                    h = s > 0 ? o - 4 : o;
                                for (r = 0; r < h; r += 4) t = Nr[e.charCodeAt(r)] << 18 | Nr[e.charCodeAt(r + 1)] << 12 | Nr[e.charCodeAt(r + 2)] << 6 | Nr[e.charCodeAt(r + 3)], a[l++] = t >> 16 & 255, a[l++] = t >> 8 & 255, a[l++] = 255 & t;
                                return 2 === s && (t = Nr[e.charCodeAt(r)] << 2 | Nr[e.charCodeAt(r + 1)] >> 4, a[l++] = 255 & t), 1 === s && (t = Nr[e.charCodeAt(r)] << 10 | Nr[e.charCodeAt(r + 1)] << 4 | Nr[e.charCodeAt(r + 2)] >> 2, a[l++] = t >> 8 & 255, a[l++] = 255 & t), a
                            },
                            fromByteArray: function(e) {
                                for (var t, r = e.length, i = r % 3, n = [], o = 0, s = r - i; o < s; o += 16383) n.push(qt(e, o, o + 16383 > s ? s : o + 16383));
                                return 1 === i ? (t = e[r - 1], n.push(Lr[t >> 2] + Lr[t << 4 & 63] + "==")) : 2 === i && (t = (e[r - 2] << 8) + e[r - 1], n.push(Lr[t >> 10] + Lr[t >> 4 & 63] + Lr[t << 2 & 63] + "=")), n.join("")
                            }
                        }, Lr = [], Nr = [], jr = typeof Uint8Array < "u" ? Uint8Array : Array, Fr = 0, Wr = (Dr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/").length; Fr < Wr; ++Fr) Lr[Fr] = Dr[Fr], Nr[Dr.charCodeAt(Fr)] = Fr;
                    Nr["-".charCodeAt(0)] = 62, Nr["_".charCodeAt(0)] = 63, $r = {}, qr = Mr, Vr = {
                        read: function(e, t, r, i, n) {
                            var o, s, a = 8 * n - i - 1,
                                l = (1 << a) - 1,
                                h = l >> 1,
                                u = -7,
                                c = r ? n - 1 : 0,
                                f = r ? -1 : 1,
                                p = e[t + c];
                            for (c += f, o = p & (1 << -u) - 1, p >>= -u, u += a; u > 0; o = 256 * o + e[t + c], c += f, u -= 8);
                            for (s = o & (1 << -u) - 1, o >>= -u, u += i; u > 0; s = 256 * s + e[t + c], c += f, u -= 8);
                            if (0 === o) o = 1 - h;
                            else {
                                if (o === l) return s ? NaN : 1 / 0 * (p ? -1 : 1);
                                s += Math.pow(2, i), o -= h
                            }
                            return (p ? -1 : 1) * s * Math.pow(2, o - i)
                        },
                        write: function(e, t, r, i, n, o) {
                            var s, a, l, h = 8 * o - n - 1,
                                u = (1 << h) - 1,
                                c = u >> 1,
                                f = 23 === n ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
                                p = i ? 0 : o - 1,
                                d = i ? 1 : -1,
                                g = t < 0 || 0 === t && 1 / t < 0 ? 1 : 0;
                            for (t = Math.abs(t), isNaN(t) || t === 1 / 0 ? (a = isNaN(t) ? 1 : 0, s = u) : (s = Math.floor(Math.log(t) / Math.LN2), t * (l = Math.pow(2, -s)) < 1 && (s--, l *= 2), (t += s + c >= 1 ? f / l : f * Math.pow(2, 1 - c)) * l >= 2 && (s++, l /= 2), s + c >= u ? (a = 0, s = u) : s + c >= 1 ? (a = (t * l - 1) * Math.pow(2, n), s += c) : (a = t * Math.pow(2, c - 1) * Math.pow(2, n), s = 0)); n >= 8; e[r + p] = 255 & a, p += d, a /= 256, n -= 8);
                            for (s = s << n | a, h += n; h > 0; e[r + p] = 255 & s, p += d, s /= 256, h -= 8);
                            e[r + p - d] |= 128 * g
                        }
                    }, Hr = "function" == typeof Symbol && "function" == typeof Symbol.for ? Symbol.for("nodejs.util.inspect.custom") : null, $r.Buffer = Ht, $r.SlowBuffer = function(e) {
                        return +e != e && (e = 0), Ht.alloc(+e)
                    }, $r.INSPECT_MAX_BYTES = 50, $r.kMaxLength = 2147483647, Ht.TYPED_ARRAY_SUPPORT = function() {
                        try {
                            var e = new Uint8Array(1),
                                t = {
                                    foo: function() {
                                        return 42
                                    }
                                };
                            return Object.setPrototypeOf(t, Uint8Array.prototype), Object.setPrototypeOf(e, t), 42 === e.foo()
                        } catch {
                            return !1
                        }
                    }(), Ht.TYPED_ARRAY_SUPPORT || typeof i > "u" || "function" != typeof i.error || i.error("This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support."), Object.defineProperty(Ht.prototype, "parent", {
                        enumerable: !0,
                        get: function() {
                            if (Ht.isBuffer(this)) return this.buffer
                        }
                    }), Object.defineProperty(Ht.prototype, "offset", {
                        enumerable: !0,
                        get: function() {
                            if (Ht.isBuffer(this)) return this.byteOffset
                        }
                    }), Ht.poolSize = 8192, Ht.from = function(e, t, r) {
                        return zt(e, t, r)
                    }, Object.setPrototypeOf(Ht.prototype, Uint8Array.prototype), Object.setPrototypeOf(Ht, Uint8Array), Ht.alloc = function(e, t, r) {
                        return n = t, o = r, Kt(i = e), i <= 0 ? Vt(i) : void 0 !== n ? "string" == typeof o ? Vt(i).fill(n, o) : Vt(i).fill(n) : Vt(i);
                        var i, n, o
                    }, Ht.allocUnsafe = function(e) {
                        return Gt(e)
                    }, Ht.allocUnsafeSlow = function(e) {
                        return Gt(e)
                    }, Ht.isBuffer = function(e) {
                        return null != e && !0 === e._isBuffer && e !== Ht.prototype
                    }, Ht.compare = function(e, t) {
                        if (Er(e, Uint8Array) && (e = Ht.from(e, e.offset, e.byteLength)), Er(t, Uint8Array) && (t = Ht.from(t, t.offset, t.byteLength)), !Ht.isBuffer(e) || !Ht.isBuffer(t)) throw new TypeError('The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array');
                        if (e === t) return 0;
                        for (var r = e.length, i = t.length, n = 0, o = Math.min(r, i); n < o; ++n)
                            if (e[n] !== t[n]) {
                                r = e[n], i = t[n];
                                break
                            } return r < i ? -1 : i < r ? 1 : 0
                    }, Ht.isEncoding = function(e) {
                        switch (String(e).toLowerCase()) {
                            case "hex":
                            case "utf8":
                            case "utf-8":
                            case "ascii":
                            case "latin1":
                            case "binary":
                            case "base64":
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return !0;
                            default:
                                return !1
                        }
                    }, Ht.concat = function(e, t) {
                        if (!Array.isArray(e)) throw new TypeError('"list" argument must be an Array of Buffers');
                        if (0 === e.length) return Ht.alloc(0);
                        var r;
                        if (void 0 === t)
                            for (t = 0, r = 0; r < e.length; ++r) t += e[r].length;
                        var i = Ht.allocUnsafe(t),
                            n = 0;
                        for (r = 0; r < e.length; ++r) {
                            var o = e[r];
                            if (Er(o, Uint8Array) && (o = Ht.from(o)), !Ht.isBuffer(o)) throw new TypeError('"list" argument must be an Array of Buffers');
                            o.copy(i, n), n += o.length
                        }
                        return i
                    }, Ht.byteLength = Jt, Ht.prototype._isBuffer = !0, Ht.prototype.swap16 = function() {
                        var e = this.length;
                        if (e % 2 != 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                        for (var t = 0; t < e; t += 2) Zt(this, t, t + 1);
                        return this
                    }, Ht.prototype.swap32 = function() {
                        var e = this.length;
                        if (e % 4 != 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                        for (var t = 0; t < e; t += 4) Zt(this, t, t + 3), Zt(this, t + 1, t + 2);
                        return this
                    }, Ht.prototype.swap64 = function() {
                        var e = this.length;
                        if (e % 8 != 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                        for (var t = 0; t < e; t += 8) Zt(this, t, t + 7), Zt(this, t + 1, t + 6), Zt(this, t + 2, t + 5), Zt(this, t + 3, t + 4);
                        return this
                    }, Ht.prototype.toString = function() {
                        var e = this.length;
                        return 0 === e ? "" : 0 === arguments.length ? hr(this, 0, e) : Xt.apply(this, arguments)
                    }, Ht.prototype.toLocaleString = Ht.prototype.toString, Ht.prototype.equals = function(e) {
                        if (!Ht.isBuffer(e)) throw new TypeError("Argument must be a Buffer");
                        return this === e || 0 === Ht.compare(this, e)
                    }, Ht.prototype.inspect = function() {
                        var e = "",
                            t = $r.INSPECT_MAX_BYTES;
                        return e = this.toString("hex", 0, t).replace(/(.{2})/g, "$1 ").trim(), this.length > t && (e += " ... "), "<Buffer " + e + ">"
                    }, Hr && (Ht.prototype[Hr] = Ht.prototype.inspect), Ht.prototype.compare = function(e, t, r, i, n) {
                        if (Er(e, Uint8Array) && (e = Ht.from(e, e.offset, e.byteLength)), !Ht.isBuffer(e)) throw new TypeError('The "target" argument must be one of type Buffer or Uint8Array. Received type ' + typeof e);
                        if (void 0 === t && (t = 0), void 0 === r && (r = e ? e.length : 0), void 0 === i && (i = 0), void 0 === n && (n = this.length), t < 0 || r > e.length || i < 0 || n > this.length) throw new RangeError("out of range index");
                        if (i >= n && t >= r) return 0;
                        if (i >= n) return -1;
                        if (t >= r) return 1;
                        if (this === e) return 0;
                        for (var o = (n >>>= 0) - (i >>>= 0), s = (r >>>= 0) - (t >>>= 0), a = Math.min(o, s), l = this.slice(i, n), h = e.slice(t, r), u = 0; u < a; ++u)
                            if (l[u] !== h[u]) {
                                o = l[u], s = h[u];
                                break
                            } return o < s ? -1 : s < o ? 1 : 0
                    }, Ht.prototype.includes = function(e, t, r) {
                        return -1 !== this.indexOf(e, t, r)
                    }, Ht.prototype.indexOf = function(e, t, r) {
                        return er(this, e, t, r, !0)
                    }, Ht.prototype.lastIndexOf = function(e, t, r) {
                        return er(this, e, t, r, !1)
                    }, Ht.prototype.write = function(e, t, r, i) {
                        if (void 0 === t) i = "utf8", r = this.length, t = 0;
                        else if (void 0 === r && "string" == typeof t) i = t, r = this.length, t = 0;
                        else {
                            if (!isFinite(t)) throw new Error("Buffer.write(string, encoding, offset[, length]) is no longer supported");
                            t >>>= 0, isFinite(r) ? (r >>>= 0, void 0 === i && (i = "utf8")) : (i = r, r = void 0)
                        }
                        var n = this.length - t;
                        if ((void 0 === r || r > n) && (r = n), e.length > 0 && (r < 0 || t < 0) || t > this.length) throw new RangeError("Attempt to write outside buffer bounds");
                        i || (i = "utf8");
                        for (var o = !1;;) switch (i) {
                            case "hex":
                                return rr(this, e, t, r);
                            case "utf8":
                            case "utf-8":
                                return ir(this, e, t, r);
                            case "ascii":
                                return nr(this, e, t, r);
                            case "latin1":
                            case "binary":
                                return or(this, e, t, r);
                            case "base64":
                                return sr(this, e, t, r);
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return ar(this, e, t, r);
                            default:
                                if (o) throw new TypeError("Unknown encoding: " + i);
                                i = ("" + i).toLowerCase(), o = !0
                        }
                    }, Ht.prototype.toJSON = function() {
                        return {
                            type: "Buffer",
                            data: Array.prototype.slice.call(this._arr || this, 0)
                        }
                    }, Ht.prototype.slice = function(e, t) {
                        var r = this.length;
                        (e = ~~e) < 0 ? (e += r) < 0 && (e = 0) : e > r && (e = r), (t = void 0 === t ? r : ~~t) < 0 ? (t += r) < 0 && (t = 0) : t > r && (t = r), t < e && (t = e);
                        var i = this.subarray(e, t);
                        return Object.setPrototypeOf(i, Ht.prototype), i
                    }, Ht.prototype.readUIntLE = function(e, t, r) {
                        e >>>= 0, t >>>= 0, r || dr(e, t, this.length);
                        for (var i = this[e], n = 1, o = 0; ++o < t && (n *= 256);) i += this[e + o] * n;
                        return i
                    }, Ht.prototype.readUIntBE = function(e, t, r) {
                        e >>>= 0, t >>>= 0, r || dr(e, t, this.length);
                        for (var i = this[e + --t], n = 1; t > 0 && (n *= 256);) i += this[e + --t] * n;
                        return i
                    }, Ht.prototype.readUInt8 = function(e, t) {
                        return e >>>= 0, t || dr(e, 1, this.length), this[e]
                    }, Ht.prototype.readUInt16LE = function(e, t) {
                        return e >>>= 0, t || dr(e, 2, this.length), this[e] | this[e + 1] << 8
                    }, Ht.prototype.readUInt16BE = function(e, t) {
                        return e >>>= 0, t || dr(e, 2, this.length), this[e] << 8 | this[e + 1]
                    }, Ht.prototype.readUInt32LE = function(e, t) {
                        return e >>>= 0, t || dr(e, 4, this.length), (this[e] | this[e + 1] << 8 | this[e + 2] << 16) + 16777216 * this[e + 3]
                    }, Ht.prototype.readUInt32BE = function(e, t) {
                        return e >>>= 0, t || dr(e, 4, this.length), 16777216 * this[e] + (this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3])
                    }, Ht.prototype.readIntLE = function(e, t, r) {
                        e >>>= 0, t >>>= 0, r || dr(e, t, this.length);
                        for (var i = this[e], n = 1, o = 0; ++o < t && (n *= 256);) i += this[e + o] * n;
                        return i >= (n *= 128) && (i -= Math.pow(2, 8 * t)), i
                    }, Ht.prototype.readIntBE = function(e, t, r) {
                        e >>>= 0, t >>>= 0, r || dr(e, t, this.length);
                        for (var i = t, n = 1, o = this[e + --i]; i > 0 && (n *= 256);) o += this[e + --i] * n;
                        return o >= (n *= 128) && (o -= Math.pow(2, 8 * t)), o
                    }, Ht.prototype.readInt8 = function(e, t) {
                        return e >>>= 0, t || dr(e, 1, this.length), 128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
                    }, Ht.prototype.readInt16LE = function(e, t) {
                        e >>>= 0, t || dr(e, 2, this.length);
                        var r = this[e] | this[e + 1] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, Ht.prototype.readInt16BE = function(e, t) {
                        e >>>= 0, t || dr(e, 2, this.length);
                        var r = this[e + 1] | this[e] << 8;
                        return 32768 & r ? 4294901760 | r : r
                    }, Ht.prototype.readInt32LE = function(e, t) {
                        return e >>>= 0, t || dr(e, 4, this.length), this[e] | this[e + 1] << 8 | this[e + 2] << 16 | this[e + 3] << 24
                    }, Ht.prototype.readInt32BE = function(e, t) {
                        return e >>>= 0, t || dr(e, 4, this.length), this[e] << 24 | this[e + 1] << 16 | this[e + 2] << 8 | this[e + 3]
                    }, Ht.prototype.readFloatLE = function(e, t) {
                        return e >>>= 0, t || dr(e, 4, this.length), Vr.read(this, e, !0, 23, 4)
                    }, Ht.prototype.readFloatBE = function(e, t) {
                        return e >>>= 0, t || dr(e, 4, this.length), Vr.read(this, e, !1, 23, 4)
                    }, Ht.prototype.readDoubleLE = function(e, t) {
                        return e >>>= 0, t || dr(e, 8, this.length), Vr.read(this, e, !0, 52, 8)
                    }, Ht.prototype.readDoubleBE = function(e, t) {
                        return e >>>= 0, t || dr(e, 8, this.length), Vr.read(this, e, !1, 52, 8)
                    }, Ht.prototype.writeUIntLE = function(e, t, r, i) {
                        e = +e, t >>>= 0, r >>>= 0, i || gr(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                        var n = 1,
                            o = 0;
                        for (this[t] = 255 & e; ++o < r && (n *= 256);) this[t + o] = e / n & 255;
                        return t + r
                    }, Ht.prototype.writeUIntBE = function(e, t, r, i) {
                        e = +e, t >>>= 0, r >>>= 0, i || gr(this, e, t, r, Math.pow(2, 8 * r) - 1, 0);
                        var n = r - 1,
                            o = 1;
                        for (this[t + n] = 255 & e; --n >= 0 && (o *= 256);) this[t + n] = e / o & 255;
                        return t + r
                    }, Ht.prototype.writeUInt8 = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 1, 255, 0), this[t] = 255 & e, t + 1
                    }, Ht.prototype.writeUInt16LE = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 2, 65535, 0), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                    }, Ht.prototype.writeUInt16BE = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 2, 65535, 0), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                    }, Ht.prototype.writeUInt32LE = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 4, 4294967295, 0), this[t + 3] = e >>> 24, this[t + 2] = e >>> 16, this[t + 1] = e >>> 8, this[t] = 255 & e, t + 4
                    }, Ht.prototype.writeUInt32BE = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 4, 4294967295, 0), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                    }, Ht.prototype.writeIntLE = function(e, t, r, i) {
                        if (e = +e, t >>>= 0, !i) {
                            var n = Math.pow(2, 8 * r - 1);
                            gr(this, e, t, r, n - 1, -n)
                        }
                        var o = 0,
                            s = 1,
                            a = 0;
                        for (this[t] = 255 & e; ++o < r && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o - 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                        return t + r
                    }, Ht.prototype.writeIntBE = function(e, t, r, i) {
                        if (e = +e, t >>>= 0, !i) {
                            var n = Math.pow(2, 8 * r - 1);
                            gr(this, e, t, r, n - 1, -n)
                        }
                        var o = r - 1,
                            s = 1,
                            a = 0;
                        for (this[t + o] = 255 & e; --o >= 0 && (s *= 256);) e < 0 && 0 === a && 0 !== this[t + o + 1] && (a = 1), this[t + o] = (e / s >> 0) - a & 255;
                        return t + r
                    }, Ht.prototype.writeInt8 = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 1, 127, -128), e < 0 && (e = 255 + e + 1), this[t] = 255 & e, t + 1
                    }, Ht.prototype.writeInt16LE = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 2, 32767, -32768), this[t] = 255 & e, this[t + 1] = e >>> 8, t + 2
                    }, Ht.prototype.writeInt16BE = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 2, 32767, -32768), this[t] = e >>> 8, this[t + 1] = 255 & e, t + 2
                    }, Ht.prototype.writeInt32LE = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 4, 2147483647, -2147483648), this[t] = 255 & e, this[t + 1] = e >>> 8, this[t + 2] = e >>> 16, this[t + 3] = e >>> 24, t + 4
                    }, Ht.prototype.writeInt32BE = function(e, t, r) {
                        return e = +e, t >>>= 0, r || gr(this, e, t, 4, 2147483647, -2147483648), e < 0 && (e = 4294967295 + e + 1), this[t] = e >>> 24, this[t + 1] = e >>> 16, this[t + 2] = e >>> 8, this[t + 3] = 255 & e, t + 4
                    }, Ht.prototype.writeFloatLE = function(e, t, r) {
                        return yr(this, e, t, !0, r)
                    }, Ht.prototype.writeFloatBE = function(e, t, r) {
                        return yr(this, e, t, !1, r)
                    }, Ht.prototype.writeDoubleLE = function(e, t, r) {
                        return mr(this, e, t, !0, r)
                    }, Ht.prototype.writeDoubleBE = function(e, t, r) {
                        return mr(this, e, t, !1, r)
                    }, Ht.prototype.copy = function(e, t, r, i) {
                        if (!Ht.isBuffer(e)) throw new TypeError("argument should be a Buffer");
                        if (r || (r = 0), i || 0 === i || (i = this.length), t >= e.length && (t = e.length), t || (t = 0), i > 0 && i < r && (i = r), i === r || 0 === e.length || 0 === this.length) return 0;
                        if (t < 0) throw new RangeError("targetStart out of bounds");
                        if (r < 0 || r >= this.length) throw new RangeError("Index out of range");
                        if (i < 0) throw new RangeError("sourceEnd out of bounds");
                        i > this.length && (i = this.length), e.length - t < i - r && (i = e.length - t + r);
                        var n = i - r;
                        if (this === e && "function" == typeof Uint8Array.prototype.copyWithin) this.copyWithin(t, r, i);
                        else if (this === e && r < t && t < i)
                            for (var o = n - 1; o >= 0; --o) e[o + t] = this[o + r];
                        else Uint8Array.prototype.set.call(e, this.subarray(r, i), t);
                        return n
                    }, Ht.prototype.fill = function(e, t, r, i) {
                        if ("string" == typeof e) {
                            if ("string" == typeof t ? (i = t, t = 0, r = this.length) : "string" == typeof r && (i = r, r = this.length), void 0 !== i && "string" != typeof i) throw new TypeError("encoding must be a string");
                            if ("string" == typeof i && !Ht.isEncoding(i)) throw new TypeError("Unknown encoding: " + i);
                            if (1 === e.length) {
                                var n = e.charCodeAt(0);
                                ("utf8" === i && n < 128 || "latin1" === i) && (e = n)
                            }
                        } else "number" == typeof e ? e &= 255 : "boolean" == typeof e && (e = Number(e));
                        if (t < 0 || this.length < t || this.length < r) throw new RangeError("Out of range index");
                        if (r <= t) return this;
                        var o;
                        if (t >>>= 0, r = void 0 === r ? this.length : r >>> 0, e || (e = 0), "number" == typeof e)
                            for (o = t; o < r; ++o) this[o] = e;
                        else {
                            var s = Ht.isBuffer(e) ? e : Ht.from(e, i),
                                a = s.length;
                            if (0 === a) throw new TypeError('The value "' + e + '" is invalid for argument "value"');
                            for (o = 0; o < r - t; ++o) this[o + t] = s[o % a]
                        }
                        return this
                    }, zr = /[^+/0-9A-Za-z-_]/g, Kr = function() {
                        for (var e = new Array(256), t = 0; t < 16; ++t)
                            for (var r = 16 * t, i = 0; i < 16; ++i) e[r + i] = "0123456789abcdef" [t] + "0123456789abcdef" [i];
                        return e
                    }(), $r.Buffer, $r.INSPECT_MAX_BYTES, $r.kMaxLength, Gr = {}, (Yr = (Qr = $r).Buffer).from && Yr.alloc && Yr.allocUnsafe && Yr.allocUnsafeSlow ? Gr = Qr : (Ar(Qr, Gr), Gr.Buffer = Ir), Ir.prototype = Object.create(Yr.prototype), Ar(Yr, Ir), Ir.from = function(e, t, r) {
                        if ("number" == typeof e) throw new TypeError("Argument must not be a number");
                        return Yr(e, t, r)
                    }, Ir.alloc = function(e, t, r) {
                        if ("number" != typeof e) throw new TypeError("Argument must be a number");
                        var i = Yr(e);
                        return void 0 !== t ? "string" == typeof r ? i.fill(t, r) : i.fill(t) : i.fill(0), i
                    }, Ir.allocUnsafe = function(e) {
                        if ("number" != typeof e) throw new TypeError("Argument must be a number");
                        return Yr(e)
                    }, Ir.allocUnsafeSlow = function(e) {
                        if ("number" != typeof e) throw new TypeError("Argument must be a number");
                        return Qr.SlowBuffer(e)
                    }, Jr = {}, Xr = Gr.Buffer, Zr = Xr.isEncoding || function(e) {
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
                    }, Jr.StringDecoder = kr, kr.prototype.write = function(e) {
                        if (0 === e.length) return "";
                        var t, r;
                        if (this.lastNeed) {
                            if (void 0 === (t = this.fillLast(e))) return "";
                            r = this.lastNeed, this.lastNeed = 0
                        } else r = 0;
                        return r < e.length ? t ? t + this.text(e, r) : this.text(e, r) : t || ""
                    }, kr.prototype.end = function(e) {
                        var t = e && e.length ? this.write(e) : "";
                        return this.lastNeed ? t + "�" : t
                    }, kr.prototype.text = function(e, t) {
                        var r = function(e, t, r) {
                            var i = t.length - 1;
                            if (i < r) return 0;
                            var n = Tr(t[i]);
                            return n >= 0 ? (n > 0 && (e.lastNeed = n - 1), n) : --i < r || -2 === n ? 0 : (n = Tr(t[i])) >= 0 ? (n > 0 && (e.lastNeed = n - 2), n) : --i < r || -2 === n ? 0 : (n = Tr(t[i])) >= 0 ? (n > 0 && (2 === n ? n = 0 : e.lastNeed = n - 3), n) : 0
                        }(this, e, t);
                        if (!this.lastNeed) return e.toString("utf8", t);
                        this.lastTotal = r;
                        var i = e.length - (r - this.lastNeed);
                        return e.copy(this.lastChar, 0, i), e.toString("utf8", t, i)
                    }, kr.prototype.fillLast = function(e) {
                        if (this.lastNeed <= e.length) return e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, this.lastNeed), this.lastChar.toString(this.encoding, 0, this.lastTotal);
                        e.copy(this.lastChar, this.lastTotal - this.lastNeed, 0, e.length), this.lastNeed -= e.length
                    }, Jr.StringDecoder, Jr.StringDecoder
                })),
                ti = {};
            u(ti, {
                StringDecoder: () => ri,
                default: () => Jr
            });
            var ri, ii = l((() => {
                    f(), rt(), qe(), ei(), ei(), ri = Jr.StringDecoder
                })),
                ni = h(((e, t) => {
                    f(), rt(), qe();
                    var r = ht(),
                        {
                            PromisePrototypeThen: i,
                            SymbolAsyncIterator: n,
                            SymbolIterator: o
                        } = nt(),
                        {
                            Buffer: s
                        } = (tt(), c(Ve)),
                        {
                            ERR_INVALID_ARG_TYPE: a,
                            ERR_STREAM_NULL_VALUES: l
                        } = at().codes;
                    t.exports = function(e, t, h) {
                        let u, c;
                        if ("string" == typeof t || t instanceof s) return new e({
                            objectMode: !0,
                            ...h,
                            read() {
                                this.push(t), this.push(null)
                            }
                        });
                        if (t && t[n]) c = !0, u = t[n]();
                        else {
                            if (!t || !t[o]) throw new a("iterable", ["Iterable"], t);
                            c = !1, u = t[o]()
                        }
                        let f = new e({
                                objectMode: !0,
                                highWaterMark: 1,
                                ...h
                            }),
                            p = !1;
                        return f._read = function() {
                            p || (p = !0, async function() {
                                for (;;) {
                                    try {
                                        let {
                                            value: e,
                                            done: t
                                        } = c ? await u.next() : u.next();
                                        if (t) f.push(null);
                                        else {
                                            let t = e && "function" == typeof e.then ? await e : e;
                                            if (null === t) throw p = !1, new l;
                                            if (f.push(t)) continue;
                                            p = !1
                                        }
                                    } catch (e) {
                                        f.destroy(e)
                                    }
                                    break
                                }
                            }())
                        }, f._destroy = function(e, t) {
                            i(async function(e) {
                                let t = null != e,
                                    r = "function" == typeof u.throw;
                                if (t && r) {
                                    let {
                                        value: t,
                                        done: r
                                    } = await u.throw(e);
                                    if (await t, r) return
                                }
                                if ("function" == typeof u.return) {
                                    let {
                                        value: e
                                    } = await u.return();
                                    await e
                                }
                            }(e), (() => r.nextTick(t, e)), (i => r.nextTick(t, i || e)))
                        }, f
                    }
                })),
                oi = h(((e, t) => {
                    f(), rt(), qe();
                    var r = ht(),
                        {
                            ArrayPrototypeIndexOf: i,
                            NumberIsInteger: n,
                            NumberIsNaN: o,
                            NumberParseInt: s,
                            ObjectDefineProperties: a,
                            ObjectKeys: l,
                            ObjectSetPrototypeOf: h,
                            Promise: u,
                            SafeSet: p,
                            SymbolAsyncIterator: d,
                            Symbol: g
                        } = nt();
                    t.exports = W, W.ReadableState = F;
                    var {
                        EventEmitter: b
                    } = (Nt(), c(Ot)), {
                        Stream: y,
                        prependListener: m
                    } = jt(), {
                        Buffer: w
                    } = (tt(), c(Ve)), {
                        addAbortSignal: _
                    } = Dt(), v = ct(), E = ot().debuglog("stream", (e => {
                        E = e
                    })), S = Ft(), A = ft(), {
                        getHighWaterMark: I,
                        getDefaultHighWaterMark: k
                    } = Wt(), {
                        aggregateTwoErrors: T,
                        codes: {
                            ERR_INVALID_ARG_TYPE: C,
                            ERR_METHOD_NOT_IMPLEMENTED: R,
                            ERR_OUT_OF_RANGE: O,
                            ERR_STREAM_PUSH_AFTER_EOF: P,
                            ERR_STREAM_UNSHIFT_AFTER_END_EVENT: B
                        }
                    } = at(), {
                        validateObject: x
                    } = lt(), U = g("kPaused"), {
                        StringDecoder: M
                    } = (ii(), c(ti)), L = ni();
                    h(W.prototype, y.prototype), h(W, y);
                    var N, j = () => {},
                        {
                            errorOrDestroy: D
                        } = A;

                    function F(e, t, r) {
                        "boolean" != typeof r && (r = t instanceof li()), this.objectMode = !(!e || !e.objectMode), r && (this.objectMode = this.objectMode || !(!e || !e.readableObjectMode)), this.highWaterMark = e ? I(this, e, "readableHighWaterMark", r) : k(!1), this.buffer = new S, this.length = 0, this.pipes = [], this.flowing = null, this.ended = !1, this.endEmitted = !1, this.reading = !1, this.constructed = !0, this.sync = !0, this.needReadable = !1, this.emittedReadable = !1, this.readableListening = !1, this.resumeScheduled = !1, this[U] = null, this.errorEmitted = !1, this.emitClose = !e || !1 !== e.emitClose, this.autoDestroy = !e || !1 !== e.autoDestroy, this.destroyed = !1, this.errored = null, this.closed = !1, this.closeEmitted = !1, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.awaitDrainWriters = null, this.multiAwaitDrain = !1, this.readingMore = !1, this.dataEmitted = !1, this.decoder = null, this.encoding = null, e && e.encoding && (this.decoder = new M(e.encoding), this.encoding = e.encoding)
                    }

                    function W(e) {
                        if (!(this instanceof W)) return new W(e);
                        let t = this instanceof li();
                        this._readableState = new F(e, this, t), e && ("function" == typeof e.read && (this._read = e.read), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.construct && (this._construct = e.construct), e.signal && !t && _(e.signal, this)), y.call(this, e), A.construct(this, (() => {
                            this._readableState.needReadable && K(this, this._readableState)
                        }))
                    }

                    function $(e, t, r, i) {
                        E("readableAddChunk", t);
                        let n, o = e._readableState;
                        if (o.objectMode || ("string" == typeof t ? (r = r || o.defaultEncoding, o.encoding !== r && (i && o.encoding ? t = w.from(t, r).toString(o.encoding) : (t = w.from(t, r), r = ""))) : t instanceof w ? r = "" : y._isUint8Array(t) ? (t = y._uint8ArrayToBuffer(t), r = "") : null != t && (n = new C("chunk", ["string", "Buffer", "Uint8Array"], t))), n) D(e, n);
                        else if (null === t) o.reading = !1,
                            function(e, t) {
                                if (E("onEofChunk"), !t.ended) {
                                    if (t.decoder) {
                                        let e = t.decoder.end();
                                        e && e.length && (t.buffer.push(e), t.length += t.objectMode ? 1 : e.length)
                                    }
                                    t.ended = !0, t.sync ? H(e) : (t.needReadable = !1, t.emittedReadable = !0, z(e))
                                }
                            }(e, o);
                        else if (o.objectMode || t && t.length > 0)
                            if (i)
                                if (o.endEmitted) D(e, new B);
                                else {
                                    if (o.destroyed || o.errored) return !1;
                                    q(e, o, t, !0)
                                }
                        else if (o.ended) D(e, new P);
                        else {
                            if (o.destroyed || o.errored) return !1;
                            o.reading = !1, o.decoder && !r ? (t = o.decoder.write(t), o.objectMode || 0 !== t.length ? q(e, o, t, !1) : K(e, o)) : q(e, o, t, !1)
                        } else i || (o.reading = !1, K(e, o));
                        return !o.ended && (o.length < o.highWaterMark || 0 === o.length)
                    }

                    function q(e, t, r, i) {
                        t.flowing && 0 === t.length && !t.sync && e.listenerCount("data") > 0 ? (t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null, t.dataEmitted = !0, e.emit("data", r)) : (t.length += t.objectMode ? 1 : r.length, i ? t.buffer.unshift(r) : t.buffer.push(r), t.needReadable && H(e)), K(e, t)
                    }

                    function V(e, t) {
                        return e <= 0 || 0 === t.length && t.ended ? 0 : t.objectMode ? 1 : o(e) ? t.flowing && t.length ? t.buffer.first().length : t.length : e <= t.length ? e : t.ended ? t.length : 0
                    }

                    function H(e) {
                        let t = e._readableState;
                        E("emitReadable", t.needReadable, t.emittedReadable), t.needReadable = !1, t.emittedReadable || (E("emitReadable", t.flowing), t.emittedReadable = !0, r.nextTick(z, e))
                    }

                    function z(e) {
                        let t = e._readableState;
                        E("emitReadable_", t.destroyed, t.length, t.ended), !t.destroyed && !t.errored && (t.length || t.ended) && (e.emit("readable"), t.emittedReadable = !1), t.needReadable = !t.flowing && !t.ended && t.length <= t.highWaterMark, X(e)
                    }

                    function K(e, t) {
                        !t.readingMore && t.constructed && (t.readingMore = !0, r.nextTick(G, e, t))
                    }

                    function G(e, t) {
                        for (; !t.reading && !t.ended && (t.length < t.highWaterMark || t.flowing && 0 === t.length);) {
                            let r = t.length;
                            if (E("maybeReadMore read 0"), e.read(0), r === t.length) break
                        }
                        t.readingMore = !1
                    }

                    function Q(e) {
                        let t = e._readableState;
                        t.readableListening = e.listenerCount("readable") > 0, t.resumeScheduled && !1 === t[U] ? t.flowing = !0 : e.listenerCount("data") > 0 ? e.resume() : t.readableListening || (t.flowing = null)
                    }

                    function Y(e) {
                        E("readable nexttick read 0"), e.read(0)
                    }

                    function J(e, t) {
                        E("resume", t.reading), t.reading || e.read(0), t.resumeScheduled = !1, e.emit("resume"), X(e), t.flowing && !t.reading && e.read(0)
                    }

                    function X(e) {
                        let t = e._readableState;
                        for (E("flow", t.flowing); t.flowing && null !== e.read(););
                    }

                    function Z(e, t) {
                        "function" != typeof e.read && (e = W.wrap(e, {
                            objectMode: !0
                        }));
                        let r = async function*(e, t) {
                            let r = j;

                            function i(t) {
                                this === e ? (r(), r = j) : r = t
                            }
                            e.on("readable", i);
                            let n, o = v(e, {
                                writable: !1
                            }, (e => {
                                n = e ? T(n, e) : null, r(), r = j
                            }));
                            try {
                                for (;;) {
                                    let t = e.destroyed ? null : e.read();
                                    if (null !== t) yield t;
                                    else {
                                        if (n) throw n;
                                        if (null === n) return;
                                        await new u(i)
                                    }
                                }
                            } catch (e) {
                                throw n = T(n, e), n
                            } finally {
                                !n && !1 === t?.destroyOnReturn || void 0 !== n && !e._readableState.autoDestroy ? (e.off("readable", i), o()) : A.destroyer(e, null)
                            }
                        }(e, t);
                        return r.stream = e, r
                    }

                    function ee(e, t) {
                        if (0 === t.length) return null;
                        let r;
                        return t.objectMode ? r = t.buffer.shift() : !e || e >= t.length ? (r = t.decoder ? t.buffer.join("") : 1 === t.buffer.length ? t.buffer.first() : t.buffer.concat(t.length), t.buffer.clear()) : r = t.buffer.consume(e, t.decoder), r
                    }

                    function te(e) {
                        let t = e._readableState;
                        E("endReadable", t.endEmitted), t.endEmitted || (t.ended = !0, r.nextTick(re, t, e))
                    }

                    function re(e, t) {
                        if (E("endReadableNT", e.endEmitted, e.length), !e.errored && !e.closeEmitted && !e.endEmitted && 0 === e.length)
                            if (e.endEmitted = !0, t.emit("end"), t.writable && !1 === t.allowHalfOpen) r.nextTick(ie, t);
                            else if (e.autoDestroy) {
                            let e = t._writableState;
                            (!e || e.autoDestroy && (e.finished || !1 === e.writable)) && t.destroy()
                        }
                    }

                    function ie(e) {
                        e.writable && !e.writableEnded && !e.destroyed && e.end()
                    }

                    function ne() {
                        return void 0 === N && (N = {}), N
                    }
                    W.prototype.destroy = A.destroy, W.prototype._undestroy = A.undestroy, W.prototype._destroy = function(e, t) {
                        t(e)
                    }, W.prototype[b.captureRejectionSymbol] = function(e) {
                        this.destroy(e)
                    }, W.prototype.push = function(e, t) {
                        return $(this, e, t, !1)
                    }, W.prototype.unshift = function(e, t) {
                        return $(this, e, t, !0)
                    }, W.prototype.isPaused = function() {
                        let e = this._readableState;
                        return !0 === e[U] || !1 === e.flowing
                    }, W.prototype.setEncoding = function(e) {
                        let t = new M(e);
                        this._readableState.decoder = t, this._readableState.encoding = this._readableState.decoder.encoding;
                        let r = this._readableState.buffer,
                            i = "";
                        for (let e of r) i += t.write(e);
                        return r.clear(), "" !== i && r.push(i), this._readableState.length = i.length, this
                    }, W.prototype.read = function(e) {
                        E("read", e), void 0 === e ? e = NaN : n(e) || (e = s(e, 10));
                        let t = this._readableState,
                            r = e;
                        if (e > t.highWaterMark && (t.highWaterMark = function(e) {
                                if (e > 1073741824) throw new O("size", "<= 1GiB", e);
                                return e--, e |= e >>> 1, e |= e >>> 2, e |= e >>> 4, e |= e >>> 8, e |= e >>> 16, ++e
                            }(e)), 0 !== e && (t.emittedReadable = !1), 0 === e && t.needReadable && ((0 !== t.highWaterMark ? t.length >= t.highWaterMark : t.length > 0) || t.ended)) return E("read: emitReadable", t.length, t.ended), 0 === t.length && t.ended ? te(this) : H(this), null;
                        if (0 === (e = V(e, t)) && t.ended) return 0 === t.length && te(this), null;
                        let i, o = t.needReadable;
                        if (E("need readable", o), (0 === t.length || t.length - e < t.highWaterMark) && (o = !0, E("length less than watermark", o)), t.ended || t.reading || t.destroyed || t.errored || !t.constructed) o = !1, E("reading, ended or constructing", o);
                        else if (o) {
                            E("do read"), t.reading = !0, t.sync = !0, 0 === t.length && (t.needReadable = !0);
                            try {
                                this._read(t.highWaterMark)
                            } catch (e) {
                                D(this, e)
                            }
                            t.sync = !1, t.reading || (e = V(r, t))
                        }
                        return i = e > 0 ? ee(e, t) : null, null === i ? (t.needReadable = t.length <= t.highWaterMark, e = 0) : (t.length -= e, t.multiAwaitDrain ? t.awaitDrainWriters.clear() : t.awaitDrainWriters = null), 0 === t.length && (t.ended || (t.needReadable = !0), r !== e && t.ended && te(this)), null !== i && !t.errorEmitted && !t.closeEmitted && (t.dataEmitted = !0, this.emit("data", i)), i
                    }, W.prototype._read = function(e) {
                        throw new R("_read()")
                    }, W.prototype.pipe = function(e, t) {
                        let i = this,
                            n = this._readableState;
                        1 === n.pipes.length && (n.multiAwaitDrain || (n.multiAwaitDrain = !0, n.awaitDrainWriters = new p(n.awaitDrainWriters ? [n.awaitDrainWriters] : []))), n.pipes.push(e), E("pipe count=%d opts=%j", n.pipes.length, t);
                        let o = t && !1 === t.end || e === r.stdout || e === r.stderr ? g : s;

                        function s() {
                            E("onend"), e.end()
                        }
                        n.endEmitted ? r.nextTick(o) : i.once("end", o), e.on("unpipe", (function t(r, o) {
                            E("onunpipe"), r === i && o && !1 === o.hasUnpiped && (o.hasUnpiped = !0, E("cleanup"), e.removeListener("close", f), e.removeListener("finish", d), a && e.removeListener("drain", a), e.removeListener("error", c), e.removeListener("unpipe", t), i.removeListener("end", s), i.removeListener("end", g), i.removeListener("data", u), l = !0, a && n.awaitDrainWriters && (!e._writableState || e._writableState.needDrain) && a())
                        }));
                        let a, l = !1;

                        function h() {
                            l || (1 === n.pipes.length && n.pipes[0] === e ? (E("false write response, pause", 0), n.awaitDrainWriters = e, n.multiAwaitDrain = !1) : n.pipes.length > 1 && n.pipes.includes(e) && (E("false write response, pause", n.awaitDrainWriters.size), n.awaitDrainWriters.add(e)), i.pause()), a || (a = function(e, t) {
                                return function() {
                                    let r = e._readableState;
                                    r.awaitDrainWriters === t ? (E("pipeOnDrain", 1), r.awaitDrainWriters = null) : r.multiAwaitDrain && (E("pipeOnDrain", r.awaitDrainWriters.size), r.awaitDrainWriters.delete(t)), (!r.awaitDrainWriters || 0 === r.awaitDrainWriters.size) && e.listenerCount("data") && e.resume()
                                }
                            }(i, e), e.on("drain", a))
                        }

                        function u(t) {
                            E("ondata");
                            let r = e.write(t);
                            E("dest.write", r), !1 === r && h()
                        }

                        function c(t) {
                            if (E("onerror", t), g(), e.removeListener("error", c), 0 === e.listenerCount("error")) {
                                let r = e._writableState || e._readableState;
                                r && !r.errorEmitted ? D(e, t) : e.emit("error", t)
                            }
                        }

                        function f() {
                            e.removeListener("finish", d), g()
                        }

                        function d() {
                            E("onfinish"), e.removeListener("close", f), g()
                        }

                        function g() {
                            E("unpipe"), i.unpipe(e)
                        }
                        return i.on("data", u), m(e, "error", c), e.once("close", f), e.once("finish", d), e.emit("pipe", i), !0 === e.writableNeedDrain ? n.flowing && h() : n.flowing || (E("pipe resume"), i.resume()), e
                    }, W.prototype.unpipe = function(e) {
                        let t = this._readableState;
                        if (0 === t.pipes.length) return this;
                        if (!e) {
                            let e = t.pipes;
                            t.pipes = [], this.pause();
                            for (let t = 0; t < e.length; t++) e[t].emit("unpipe", this, {
                                hasUnpiped: !1
                            });
                            return this
                        }
                        let r = i(t.pipes, e);
                        return -1 === r || (t.pipes.splice(r, 1), 0 === t.pipes.length && this.pause(), e.emit("unpipe", this, {
                            hasUnpiped: !1
                        })), this
                    }, W.prototype.on = function(e, t) {
                        let i = y.prototype.on.call(this, e, t),
                            n = this._readableState;
                        return "data" === e ? (n.readableListening = this.listenerCount("readable") > 0, !1 !== n.flowing && this.resume()) : "readable" === e && !n.endEmitted && !n.readableListening && (n.readableListening = n.needReadable = !0, n.flowing = !1, n.emittedReadable = !1, E("on readable", n.length, n.reading), n.length ? H(this) : n.reading || r.nextTick(Y, this)), i
                    }, W.prototype.addListener = W.prototype.on, W.prototype.removeListener = function(e, t) {
                        let i = y.prototype.removeListener.call(this, e, t);
                        return "readable" === e && r.nextTick(Q, this), i
                    }, W.prototype.off = W.prototype.removeListener, W.prototype.removeAllListeners = function(e) {
                        let t = y.prototype.removeAllListeners.apply(this, arguments);
                        return ("readable" === e || void 0 === e) && r.nextTick(Q, this), t
                    }, W.prototype.resume = function() {
                        let e = this._readableState;
                        return e.flowing || (E("resume"), e.flowing = !e.readableListening, function(e, t) {
                            t.resumeScheduled || (t.resumeScheduled = !0, r.nextTick(J, e, t))
                        }(this, e)), e[U] = !1, this
                    }, W.prototype.pause = function() {
                        return E("call pause flowing=%j", this._readableState.flowing), !1 !== this._readableState.flowing && (E("pause"), this._readableState.flowing = !1, this.emit("pause")), this._readableState[U] = !0, this
                    }, W.prototype.wrap = function(e) {
                        let t = !1;
                        e.on("data", (r => {
                            !this.push(r) && e.pause && (t = !0, e.pause())
                        })), e.on("end", (() => {
                            this.push(null)
                        })), e.on("error", (e => {
                            D(this, e)
                        })), e.on("close", (() => {
                            this.destroy()
                        })), e.on("destroy", (() => {
                            this.destroy()
                        })), this._read = () => {
                            t && e.resume && (t = !1, e.resume())
                        };
                        let r = l(e);
                        for (let t = 1; t < r.length; t++) {
                            let i = r[t];
                            void 0 === this[i] && "function" == typeof e[i] && (this[i] = e[i].bind(e))
                        }
                        return this
                    }, W.prototype[d] = function() {
                        return Z(this)
                    }, W.prototype.iterator = function(e) {
                        return void 0 !== e && x(e, "options"), Z(this, e)
                    }, a(W.prototype, {
                        readable: {
                            __proto__: null,
                            get() {
                                let e = this._readableState;
                                return !(!e || !1 === e.readable || e.destroyed || e.errorEmitted || e.endEmitted)
                            },
                            set(e) {
                                this._readableState && (this._readableState.readable = !!e)
                            }
                        },
                        readableDidRead: {
                            __proto__: null,
                            enumerable: !1,
                            get: function() {
                                return this._readableState.dataEmitted
                            }
                        },
                        readableAborted: {
                            __proto__: null,
                            enumerable: !1,
                            get: function() {
                                return !(!1 === this._readableState.readable || !this._readableState.destroyed && !this._readableState.errored || this._readableState.endEmitted)
                            }
                        },
                        readableHighWaterMark: {
                            __proto__: null,
                            enumerable: !1,
                            get: function() {
                                return this._readableState.highWaterMark
                            }
                        },
                        readableBuffer: {
                            __proto__: null,
                            enumerable: !1,
                            get: function() {
                                return this._readableState && this._readableState.buffer
                            }
                        },
                        readableFlowing: {
                            __proto__: null,
                            enumerable: !1,
                            get: function() {
                                return this._readableState.flowing
                            },
                            set: function(e) {
                                this._readableState && (this._readableState.flowing = e)
                            }
                        },
                        readableLength: {
                            __proto__: null,
                            enumerable: !1,
                            get() {
                                return this._readableState.length
                            }
                        },
                        readableObjectMode: {
                            __proto__: null,
                            enumerable: !1,
                            get() {
                                return !!this._readableState && this._readableState.objectMode
                            }
                        },
                        readableEncoding: {
                            __proto__: null,
                            enumerable: !1,
                            get() {
                                return this._readableState ? this._readableState.encoding : null
                            }
                        },
                        errored: {
                            __proto__: null,
                            enumerable: !1,
                            get() {
                                return this._readableState ? this._readableState.errored : null
                            }
                        },
                        closed: {
                            __proto__: null,
                            get() {
                                return !!this._readableState && this._readableState.closed
                            }
                        },
                        destroyed: {
                            __proto__: null,
                            enumerable: !1,
                            get() {
                                return !!this._readableState && this._readableState.destroyed
                            },
                            set(e) {
                                this._readableState && (this._readableState.destroyed = e)
                            }
                        },
                        readableEnded: {
                            __proto__: null,
                            enumerable: !1,
                            get() {
                                return !!this._readableState && this._readableState.endEmitted
                            }
                        }
                    }), a(F.prototype, {
                        pipesCount: {
                            __proto__: null,
                            get() {
                                return this.pipes.length
                            }
                        },
                        paused: {
                            __proto__: null,
                            get() {
                                return !1 !== this[U]
                            },
                            set(e) {
                                this[U] = !!e
                            }
                        }
                    }), W._fromList = ee, W.from = function(e, t) {
                        return L(W, e, t)
                    }, W.fromWeb = function(e, t) {
                        return ne().newStreamReadableFromReadableStream(e, t)
                    }, W.toWeb = function(e, t) {
                        return ne().newReadableStreamFromStreamReadable(e, t)
                    }, W.wrap = function(e, t) {
                        var r, i;
                        return new W({
                            objectMode: null === (r = null !== (i = e.readableObjectMode) && void 0 !== i ? i : e.objectMode) || void 0 === r || r,
                            ...t,
                            destroy(t, r) {
                                A.destroyer(e, t), r(t)
                            }
                        }).wrap(e)
                    }
                })),
                si = h(((e, t) => {
                    f(), rt(), qe();
                    var r = ht(),
                        {
                            ArrayPrototypeSlice: i,
                            Error: n,
                            FunctionPrototypeSymbolHasInstance: o,
                            ObjectDefineProperty: s,
                            ObjectDefineProperties: a,
                            ObjectSetPrototypeOf: l,
                            StringPrototypeToLowerCase: h,
                            Symbol: u,
                            SymbolHasInstance: p
                        } = nt();
                    t.exports = M, M.WritableState = x;
                    var {
                        EventEmitter: d
                    } = (Nt(), c(Ot)), g = jt().Stream, {
                        Buffer: b
                    } = (tt(), c(Ve)), y = ft(), {
                        addAbortSignal: m
                    } = Dt(), {
                        getHighWaterMark: w,
                        getDefaultHighWaterMark: _
                    } = Wt(), {
                        ERR_INVALID_ARG_TYPE: v,
                        ERR_METHOD_NOT_IMPLEMENTED: E,
                        ERR_MULTIPLE_CALLBACK: S,
                        ERR_STREAM_CANNOT_PIPE: A,
                        ERR_STREAM_DESTROYED: I,
                        ERR_STREAM_ALREADY_FINISHED: k,
                        ERR_STREAM_NULL_VALUES: T,
                        ERR_STREAM_WRITE_AFTER_END: C,
                        ERR_UNKNOWN_ENCODING: R
                    } = at().codes, {
                        errorOrDestroy: O
                    } = y;

                    function P() {}
                    l(M.prototype, g.prototype), l(M, g);
                    var B = u("kOnFinished");

                    function x(e, t, r) {
                        "boolean" != typeof r && (r = t instanceof li()), this.objectMode = !(!e || !e.objectMode), r && (this.objectMode = this.objectMode || !(!e || !e.writableObjectMode)), this.highWaterMark = e ? w(this, e, "writableHighWaterMark", r) : _(!1), this.finalCalled = !1, this.needDrain = !1, this.ending = !1, this.ended = !1, this.finished = !1, this.destroyed = !1;
                        let i = !(!e || !1 !== e.decodeStrings);
                        this.decodeStrings = !i, this.defaultEncoding = e && e.defaultEncoding || "utf8", this.length = 0, this.writing = !1, this.corked = 0, this.sync = !0, this.bufferProcessing = !1, this.onwrite = D.bind(void 0, t), this.writecb = null, this.writelen = 0, this.afterWriteTickInfo = null, U(this), this.pendingcb = 0, this.constructed = !0, this.prefinished = !1, this.errorEmitted = !1, this.emitClose = !e || !1 !== e.emitClose, this.autoDestroy = !e || !1 !== e.autoDestroy, this.errored = null, this.closed = !1, this.closeEmitted = !1, this[B] = []
                    }

                    function U(e) {
                        e.buffered = [], e.bufferedIndex = 0, e.allBuffers = !0, e.allNoop = !0
                    }

                    function M(e) {
                        let t = this instanceof li();
                        if (!t && !o(M, this)) return new M(e);
                        this._writableState = new x(e, this, t), e && ("function" == typeof e.write && (this._write = e.write), "function" == typeof e.writev && (this._writev = e.writev), "function" == typeof e.destroy && (this._destroy = e.destroy), "function" == typeof e.final && (this._final = e.final), "function" == typeof e.construct && (this._construct = e.construct), e.signal && m(e.signal, this)), g.call(this, e), y.construct(this, (() => {
                            let e = this._writableState;
                            e.writing || q(this, e), H(this, e)
                        }))
                    }

                    function L(e, t, i, n) {
                        let o, s = e._writableState;
                        if ("function" == typeof i) n = i, i = s.defaultEncoding;
                        else {
                            if (i) {
                                if ("buffer" !== i && !b.isEncoding(i)) throw new R(i)
                            } else i = s.defaultEncoding;
                            "function" != typeof n && (n = P)
                        }
                        if (null === t) throw new T;
                        if (!s.objectMode)
                            if ("string" == typeof t) !1 !== s.decodeStrings && (t = b.from(t, i), i = "buffer");
                            else if (t instanceof b) i = "buffer";
                        else {
                            if (!g._isUint8Array(t)) throw new v("chunk", ["string", "Buffer", "Uint8Array"], t);
                            t = g._uint8ArrayToBuffer(t), i = "buffer"
                        }
                        return s.ending ? o = new C : s.destroyed && (o = new I("write")), o ? (r.nextTick(n, o), O(e, o, !0), o) : (s.pendingcb++, function(e, t, r, i, n) {
                            let o = t.objectMode ? 1 : r.length;
                            t.length += o;
                            let s = t.length < t.highWaterMark;
                            return s || (t.needDrain = !0), t.writing || t.corked || t.errored || !t.constructed ? (t.buffered.push({
                                chunk: r,
                                encoding: i,
                                callback: n
                            }), t.allBuffers && "buffer" !== i && (t.allBuffers = !1), t.allNoop && n !== P && (t.allNoop = !1)) : (t.writelen = o, t.writecb = n, t.writing = !0, t.sync = !0, e._write(r, i, t.onwrite), t.sync = !1), s && !t.errored && !t.destroyed
                        }(e, s, t, i, n))
                    }

                    function N(e, t, r, i, n, o, s) {
                        t.writelen = i, t.writecb = s, t.writing = !0, t.sync = !0, t.destroyed ? t.onwrite(new I("write")) : r ? e._writev(n, t.onwrite) : e._write(n, o, t.onwrite), t.sync = !1
                    }

                    function j(e, t, r, i) {
                        --t.pendingcb, i(r), $(t), O(e, r)
                    }

                    function D(e, t) {
                        let i = e._writableState,
                            n = i.sync,
                            o = i.writecb;
                        "function" == typeof o ? (i.writing = !1, i.writecb = null, i.length -= i.writelen, i.writelen = 0, t ? (t.stack, i.errored || (i.errored = t), e._readableState && !e._readableState.errored && (e._readableState.errored = t), n ? r.nextTick(j, e, i, t, o) : j(e, i, t, o)) : (i.buffered.length > i.bufferedIndex && q(e, i), n ? null !== i.afterWriteTickInfo && i.afterWriteTickInfo.cb === o ? i.afterWriteTickInfo.count++ : (i.afterWriteTickInfo = {
                            count: 1,
                            cb: o,
                            stream: e,
                            state: i
                        }, r.nextTick(F, i.afterWriteTickInfo)) : W(e, i, 1, o))) : O(e, new S)
                    }

                    function F({
                        stream: e,
                        state: t,
                        count: r,
                        cb: i
                    }) {
                        return t.afterWriteTickInfo = null, W(e, t, r, i)
                    }

                    function W(e, t, r, i) {
                        for (!t.ending && !e.destroyed && 0 === t.length && t.needDrain && (t.needDrain = !1, e.emit("drain")); r-- > 0;) t.pendingcb--, i();
                        t.destroyed && $(t), H(e, t)
                    }

                    function $(e) {
                        if (e.writing) return;
                        for (let r = e.bufferedIndex; r < e.buffered.length; ++r) {
                            var t;
                            let {
                                chunk: i,
                                callback: n
                            } = e.buffered[r], o = e.objectMode ? 1 : i.length;
                            e.length -= o, n(null !== (t = e.errored) && void 0 !== t ? t : new I("write"))
                        }
                        let r = e[B].splice(0);
                        for (let t = 0; t < r.length; t++) {
                            var i;
                            r[t](null !== (i = e.errored) && void 0 !== i ? i : new I("end"))
                        }
                        U(e)
                    }

                    function q(e, t) {
                        if (t.corked || t.bufferProcessing || t.destroyed || !t.constructed) return;
                        let {
                            buffered: r,
                            bufferedIndex: n,
                            objectMode: o
                        } = t, s = r.length - n;
                        if (!s) return;
                        let a = n;
                        if (t.bufferProcessing = !0, s > 1 && e._writev) {
                            t.pendingcb -= s - 1;
                            let n = t.allNoop ? P : e => {
                                    for (let t = a; t < r.length; ++t) r[t].callback(e)
                                },
                                o = t.allNoop && 0 === a ? r : i(r, a);
                            o.allBuffers = t.allBuffers, N(e, t, !0, t.length, o, "", n), U(t)
                        } else {
                            do {
                                let {
                                    chunk: i,
                                    encoding: n,
                                    callback: s
                                } = r[a];
                                r[a++] = null, N(e, t, !1, o ? 1 : i.length, i, n, s)
                            } while (a < r.length && !t.writing);
                            a === r.length ? U(t) : a > 256 ? (r.splice(0, a), t.bufferedIndex = 0) : t.bufferedIndex = a
                        }
                        t.bufferProcessing = !1
                    }

                    function V(e) {
                        return e.ending && !e.destroyed && e.constructed && 0 === e.length && !e.errored && 0 === e.buffered.length && !e.finished && !e.writing && !e.errorEmitted && !e.closeEmitted
                    }

                    function H(e, t, i) {
                        V(t) && (function(e, t) {
                            !t.prefinished && !t.finalCalled && ("function" != typeof e._final || t.destroyed ? (t.prefinished = !0, e.emit("prefinish")) : (t.finalCalled = !0, function(e, t) {
                                let i = !1;

                                function n(n) {
                                    if (i) O(e, n ?? S());
                                    else if (i = !0, t.pendingcb--, n) {
                                        let r = t[B].splice(0);
                                        for (let e = 0; e < r.length; e++) r[e](n);
                                        O(e, n, t.sync)
                                    } else V(t) && (t.prefinished = !0, e.emit("prefinish"), t.pendingcb++, r.nextTick(z, e, t))
                                }
                                t.sync = !0, t.pendingcb++;
                                try {
                                    e._final(n)
                                } catch (e) {
                                    n(e)
                                }
                                t.sync = !1
                            }(e, t)))
                        }(e, t), 0 === t.pendingcb && (i ? (t.pendingcb++, r.nextTick(((e, t) => {
                            V(t) ? z(e, t) : t.pendingcb--
                        }), e, t)) : V(t) && (t.pendingcb++, z(e, t))))
                    }

                    function z(e, t) {
                        t.pendingcb--, t.finished = !0;
                        let r = t[B].splice(0);
                        for (let e = 0; e < r.length; e++) r[e]();
                        if (e.emit("finish"), t.autoDestroy) {
                            let t = e._readableState;
                            (!t || t.autoDestroy && (t.endEmitted || !1 === t.readable)) && e.destroy()
                        }
                    }
                    x.prototype.getBuffer = function() {
                        return i(this.buffered, this.bufferedIndex)
                    }, s(x.prototype, "bufferedRequestCount", {
                        __proto__: null,
                        get() {
                            return this.buffered.length - this.bufferedIndex
                        }
                    }), s(M, p, {
                        __proto__: null,
                        value: function(e) {
                            return !!o(this, e) || this === M && e && e._writableState instanceof x
                        }
                    }), M.prototype.pipe = function() {
                        O(this, new A)
                    }, M.prototype.write = function(e, t, r) {
                        return !0 === L(this, e, t, r)
                    }, M.prototype.cork = function() {
                        this._writableState.corked++
                    }, M.prototype.uncork = function() {
                        let e = this._writableState;
                        e.corked && (e.corked--, e.writing || q(this, e))
                    }, M.prototype.setDefaultEncoding = function(e) {
                        if ("string" == typeof e && (e = h(e)), !b.isEncoding(e)) throw new R(e);
                        return this._writableState.defaultEncoding = e, this
                    }, M.prototype._write = function(e, t, r) {
                        if (!this._writev) throw new E("_write()");
                        this._writev([{
                            chunk: e,
                            encoding: t
                        }], r)
                    }, M.prototype._writev = null, M.prototype.end = function(e, t, i) {
                        let o, s = this._writableState;
                        if ("function" == typeof e ? (i = e, e = null, t = null) : "function" == typeof t && (i = t, t = null), null != e) {
                            let r = L(this, e, t);
                            r instanceof n && (o = r)
                        }
                        return s.corked && (s.corked = 1, this.uncork()), o || (s.errored || s.ending ? s.finished ? o = new k("end") : s.destroyed && (o = new I("end")) : (s.ending = !0, H(this, s, !0), s.ended = !0)), "function" == typeof i && (o || s.finished ? r.nextTick(i, o) : s[B].push(i)), this
                    }, a(M.prototype, {
                        closed: {
                            __proto__: null,
                            get() {
                                return !!this._writableState && this._writableState.closed
                            }
                        },
                        destroyed: {
                            __proto__: null,
                            get() {
                                return !!this._writableState && this._writableState.destroyed
                            },
                            set(e) {
                                this._writableState && (this._writableState.destroyed = e)
                            }
                        },
                        writable: {
                            __proto__: null,
                            get() {
                                let e = this._writableState;
                                return !(!e || !1 === e.writable || e.destroyed || e.errored || e.ending || e.ended)
                            },
                            set(e) {
                                this._writableState && (this._writableState.writable = !!e)
                            }
                        },
                        writableFinished: {
                            __proto__: null,
                            get() {
                                return !!this._writableState && this._writableState.finished
                            }
                        },
                        writableObjectMode: {
                            __proto__: null,
                            get() {
                                return !!this._writableState && this._writableState.objectMode
                            }
                        },
                        writableBuffer: {
                            __proto__: null,
                            get() {
                                return this._writableState && this._writableState.getBuffer()
                            }
                        },
                        writableEnded: {
                            __proto__: null,
                            get() {
                                return !!this._writableState && this._writableState.ending
                            }
                        },
                        writableNeedDrain: {
                            __proto__: null,
                            get() {
                                let e = this._writableState;
                                return !!e && !e.destroyed && !e.ending && e.needDrain
                            }
                        },
                        writableHighWaterMark: {
                            __proto__: null,
                            get() {
                                return this._writableState && this._writableState.highWaterMark
                            }
                        },
                        writableCorked: {
                            __proto__: null,
                            get() {
                                return this._writableState ? this._writableState.corked : 0
                            }
                        },
                        writableLength: {
                            __proto__: null,
                            get() {
                                return this._writableState && this._writableState.length
                            }
                        },
                        errored: {
                            __proto__: null,
                            enumerable: !1,
                            get() {
                                return this._writableState ? this._writableState.errored : null
                            }
                        },
                        writableAborted: {
                            __proto__: null,
                            enumerable: !1,
                            get: function() {
                                return !(!1 === this._writableState.writable || !this._writableState.destroyed && !this._writableState.errored || this._writableState.finished)
                            }
                        }
                    });
                    var K, G = y.destroy;

                    function Q() {
                        return void 0 === K && (K = {}), K
                    }
                    M.prototype.destroy = function(e, t) {
                        let i = this._writableState;
                        return !i.destroyed && (i.bufferedIndex < i.buffered.length || i[B].length) && r.nextTick($, i), G.call(this, e, t), this
                    }, M.prototype._undestroy = y.undestroy, M.prototype._destroy = function(e, t) {
                        t(e)
                    }, M.prototype[d.captureRejectionSymbol] = function(e) {
                        this.destroy(e)
                    }, M.fromWeb = function(e, t) {
                        return Q().newStreamWritableFromWritableStream(e, t)
                    }, M.toWeb = function(e) {
                        return Q().newWritableStreamFromStreamWritable(e)
                    }
                })),
                ai = h(((e, t) => {
                    f(), rt(), qe();
                    var r = ht(),
                        i = (tt(), c(Ve)),
                        {
                            isReadable: n,
                            isWritable: o,
                            isIterable: s,
                            isNodeStream: a,
                            isReadableNodeStream: l,
                            isWritableNodeStream: h,
                            isDuplexNodeStream: u
                        } = ut(),
                        p = ct(),
                        {
                            AbortError: d,
                            codes: {
                                ERR_INVALID_ARG_TYPE: g,
                                ERR_INVALID_RETURN_VALUE: b
                            }
                        } = at(),
                        {
                            destroyer: y
                        } = ft(),
                        m = li(),
                        w = oi(),
                        {
                            createDeferredPromise: _
                        } = ot(),
                        v = ni(),
                        E = globalThis.Blob || i.Blob,
                        S = typeof E < "u" ? function(e) {
                            return e instanceof E
                        } : function(e) {
                            return !1
                        },
                        A = globalThis.AbortController || st().AbortController,
                        {
                            FunctionPrototypeCall: I
                        } = nt(),
                        k = class extends m {
                            constructor(e) {
                                super(e), !1 === e?.readable && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), !1 === e?.writable && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)
                            }
                        };

                    function T(e) {
                        let t, r, i, s, a, l = e.readable && "function" != typeof e.readable.read ? w.wrap(e.readable) : e.readable,
                            h = e.writable,
                            u = !!n(l),
                            c = !!o(h);

                        function f(e) {
                            let t = s;
                            s = null, t ? t(e) : e && a.destroy(e)
                        }
                        return a = new k({
                            readableObjectMode: !(null == l || !l.readableObjectMode),
                            writableObjectMode: !(null == h || !h.writableObjectMode),
                            readable: u,
                            writable: c
                        }), c && (p(h, (e => {
                            c = !1, e && y(l, e), f(e)
                        })), a._write = function(e, r, i) {
                            h.write(e, r) ? i() : t = i
                        }, a._final = function(e) {
                            h.end(), r = e
                        }, h.on("drain", (function() {
                            if (t) {
                                let e = t;
                                t = null, e()
                            }
                        })), h.on("finish", (function() {
                            if (r) {
                                let e = r;
                                r = null, e()
                            }
                        }))), u && (p(l, (e => {
                            u = !1, e && y(l, e), f(e)
                        })), l.on("readable", (function() {
                            if (i) {
                                let e = i;
                                i = null, e()
                            }
                        })), l.on("end", (function() {
                            a.push(null)
                        })), a._read = function() {
                            for (;;) {
                                let e = l.read();
                                if (null === e) return void(i = a._read);
                                if (!a.push(e)) return
                            }
                        }), a._destroy = function(e, n) {
                            !e && null !== s && (e = new d), i = null, t = null, r = null, null === s ? n(e) : (s = n, y(h, e), y(l, e))
                        }, a
                    }
                    t.exports = function e(t, i) {
                        if (u(t)) return t;
                        if (l(t)) return T({
                            readable: t
                        });
                        if (h(t)) return T({
                            writable: t
                        });
                        if (a(t)) return T({
                            writable: !1,
                            readable: !1
                        });
                        if ("function" == typeof t) {
                            let {
                                value: e,
                                write: n,
                                final: o,
                                destroy: a
                            } = function(e) {
                                let {
                                    promise: t,
                                    resolve: i
                                } = _(), n = new A, o = n.signal;
                                return {
                                    value: e(async function*() {
                                        for (;;) {
                                            let e = t;
                                            t = null;
                                            let {
                                                chunk: n,
                                                done: s,
                                                cb: a
                                            } = await e;
                                            if (r.nextTick(a), s) return;
                                            if (o.aborted) throw new d(void 0, {
                                                cause: o.reason
                                            });
                                            ({
                                                promise: t,
                                                resolve: i
                                            } = _()), yield n
                                        }
                                    }(), {
                                        signal: o
                                    }),
                                    write(e, t, r) {
                                        let n = i;
                                        i = null, n({
                                            chunk: e,
                                            done: !1,
                                            cb: r
                                        })
                                    },
                                    final(e) {
                                        let t = i;
                                        i = null, t({
                                            done: !0,
                                            cb: e
                                        })
                                    },
                                    destroy(e, t) {
                                        n.abort(), t(e)
                                    }
                                }
                            }(t);
                            if (s(e)) return v(k, e, {
                                objectMode: !0,
                                write: n,
                                final: o,
                                destroy: a
                            });
                            let l = e?.then;
                            if ("function" == typeof l) {
                                let t, i = I(l, e, (e => {
                                    if (null != e) throw new b("nully", "body", e)
                                }), (e => {
                                    y(t, e)
                                }));
                                return t = new k({
                                    objectMode: !0,
                                    readable: !1,
                                    write: n,
                                    final(e) {
                                        o((async () => {
                                            try {
                                                await i, r.nextTick(e, null)
                                            } catch (t) {
                                                r.nextTick(e, t)
                                            }
                                        }))
                                    },
                                    destroy: a
                                })
                            }
                            throw new b("Iterable, AsyncIterable or AsyncFunction", i, e)
                        }
                        if (S(t)) return e(t.arrayBuffer());
                        if (s(t)) return v(k, t, {
                            objectMode: !0,
                            writable: !1
                        });
                        if ("object" == typeof t?.writable || "object" == typeof t?.readable) return T({
                            readable: null != t && t.readable ? l(t?.readable) ? t?.readable : e(t.readable) : void 0,
                            writable: null != t && t.writable ? h(t?.writable) ? t?.writable : e(t.writable) : void 0
                        });
                        let n = t?.then;
                        if ("function" == typeof n) {
                            let e;
                            return I(n, t, (t => {
                                null != t && e.push(t), e.push(null)
                            }), (t => {
                                y(e, t)
                            })), e = new k({
                                objectMode: !0,
                                writable: !1,
                                read() {}
                            })
                        }
                        throw new g(i, ["Blob", "ReadableStream", "WritableStream", "Stream", "Iterable", "AsyncIterable", "Function", "{ readable, writable } pair", "Promise"], t)
                    }
                })),
                li = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        ObjectDefineProperties: r,
                        ObjectGetOwnPropertyDescriptor: i,
                        ObjectKeys: n,
                        ObjectSetPrototypeOf: o
                    } = nt();
                    t.exports = u;
                    var s, a, l = oi(),
                        h = si();
                    o(u.prototype, l.prototype), o(u, l);
                    {
                        let e = n(h.prototype);
                        for (let t = 0; t < e.length; t++) {
                            let r = e[t];
                            u.prototype[r] || (u.prototype[r] = h.prototype[r])
                        }
                    }

                    function u(e) {
                        if (!(this instanceof u)) return new u(e);
                        l.call(this, e), h.call(this, e), e ? (this.allowHalfOpen = !1 !== e.allowHalfOpen, !1 === e.readable && (this._readableState.readable = !1, this._readableState.ended = !0, this._readableState.endEmitted = !0), !1 === e.writable && (this._writableState.writable = !1, this._writableState.ending = !0, this._writableState.ended = !0, this._writableState.finished = !0)) : this.allowHalfOpen = !0
                    }

                    function c() {
                        return void 0 === s && (s = {}), s
                    }
                    r(u.prototype, {
                        writable: {
                            __proto__: null,
                            ...i(h.prototype, "writable")
                        },
                        writableHighWaterMark: {
                            __proto__: null,
                            ...i(h.prototype, "writableHighWaterMark")
                        },
                        writableObjectMode: {
                            __proto__: null,
                            ...i(h.prototype, "writableObjectMode")
                        },
                        writableBuffer: {
                            __proto__: null,
                            ...i(h.prototype, "writableBuffer")
                        },
                        writableLength: {
                            __proto__: null,
                            ...i(h.prototype, "writableLength")
                        },
                        writableFinished: {
                            __proto__: null,
                            ...i(h.prototype, "writableFinished")
                        },
                        writableCorked: {
                            __proto__: null,
                            ...i(h.prototype, "writableCorked")
                        },
                        writableEnded: {
                            __proto__: null,
                            ...i(h.prototype, "writableEnded")
                        },
                        writableNeedDrain: {
                            __proto__: null,
                            ...i(h.prototype, "writableNeedDrain")
                        },
                        destroyed: {
                            __proto__: null,
                            get() {
                                return void 0 !== this._readableState && void 0 !== this._writableState && this._readableState.destroyed && this._writableState.destroyed
                            },
                            set(e) {
                                this._readableState && this._writableState && (this._readableState.destroyed = e, this._writableState.destroyed = e)
                            }
                        }
                    }), u.fromWeb = function(e, t) {
                        return c().newStreamDuplexFromReadableWritablePair(e, t)
                    }, u.toWeb = function(e) {
                        return c().newReadableWritablePairFromDuplex(e)
                    }, u.from = function(e) {
                        return a || (a = ai()), a(e, "body")
                    }
                })),
                hi = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        ObjectSetPrototypeOf: r,
                        Symbol: i
                    } = nt();
                    t.exports = l;
                    var {
                        ERR_METHOD_NOT_IMPLEMENTED: n
                    } = at().codes, o = li(), {
                        getHighWaterMark: s
                    } = Wt();
                    r(l.prototype, o.prototype), r(l, o);
                    var a = i("kCallback");

                    function l(e) {
                        if (!(this instanceof l)) return new l(e);
                        let t = e ? s(this, e, "readableHighWaterMark", !0) : null;
                        0 === t && (e = {
                            ...e,
                            highWaterMark: null,
                            readableHighWaterMark: t,
                            writableHighWaterMark: e.writableHighWaterMark || 0
                        }), o.call(this, e), this._readableState.sync = !1, this[a] = null, e && ("function" == typeof e.transform && (this._transform = e.transform), "function" == typeof e.flush && (this._flush = e.flush)), this.on("prefinish", u)
                    }

                    function h(e) {
                        "function" != typeof this._flush || this.destroyed ? (this.push(null), e && e()) : this._flush(((t, r) => {
                            t ? e ? e(t) : this.destroy(t) : (null != r && this.push(r), this.push(null), e && e())
                        }))
                    }

                    function u() {
                        this._final !== h && h.call(this)
                    }
                    l.prototype._final = h, l.prototype._transform = function(e, t, r) {
                        throw new n("_transform()")
                    }, l.prototype._write = function(e, t, r) {
                        let i = this._readableState,
                            n = this._writableState,
                            o = i.length;
                        this._transform(e, t, ((e, t) => {
                            e ? r(e) : (null != t && this.push(t), n.ended || o === i.length || i.length < i.highWaterMark ? r() : this[a] = r)
                        }))
                    }, l.prototype._read = function() {
                        if (this[a]) {
                            let e = this[a];
                            this[a] = null, e()
                        }
                    }
                })),
                ui = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        ObjectSetPrototypeOf: r
                    } = nt();
                    t.exports = n;
                    var i = hi();

                    function n(e) {
                        if (!(this instanceof n)) return new n(e);
                        i.call(this, e)
                    }
                    r(n.prototype, i.prototype), r(n, i), n.prototype._transform = function(e, t, r) {
                        r(null, e)
                    }
                })),
                ci = h(((e, t) => {
                    f(), rt(), qe();
                    var r, i, n = ht(),
                        {
                            ArrayIsArray: o,
                            Promise: s,
                            SymbolAsyncIterator: a
                        } = nt(),
                        l = ct(),
                        {
                            once: h
                        } = ot(),
                        u = ft(),
                        c = li(),
                        {
                            aggregateTwoErrors: p,
                            codes: {
                                ERR_INVALID_ARG_TYPE: d,
                                ERR_INVALID_RETURN_VALUE: g,
                                ERR_MISSING_ARGS: b,
                                ERR_STREAM_DESTROYED: y,
                                ERR_STREAM_PREMATURE_CLOSE: m
                            },
                            AbortError: w
                        } = at(),
                        {
                            validateFunction: _,
                            validateAbortSignal: v
                        } = lt(),
                        {
                            isIterable: E,
                            isReadable: S,
                            isReadableNodeStream: A,
                            isNodeStream: I,
                            isTransformStream: k,
                            isWebStream: T,
                            isReadableStream: C,
                            isReadableEnded: R
                        } = ut(),
                        O = globalThis.AbortController || st().AbortController;

                    function P(e, t, r) {
                        let i = !1;
                        return e.on("close", (() => {
                            i = !0
                        })), {
                            destroy: t => {
                                i || (i = !0, u.destroyer(e, t || new y("pipe")))
                            },
                            cleanup: l(e, {
                                readable: t,
                                writable: r
                            }, (e => {
                                i = !e
                            }))
                        }
                    }

                    function B(e) {
                        if (E(e)) return e;
                        if (A(e)) return async function*(e) {
                            i || (i = oi()), yield* i.prototype[a].call(e)
                        }(e);
                        throw new d("val", ["Readable", "Iterable", "AsyncIterable"], e)
                    }
                    async function x(e, t, r, {
                        end: i
                    }) {
                        let n, o = null,
                            a = e => {
                                if (e && (n = e), o) {
                                    let e = o;
                                    o = null, e()
                                }
                            },
                            h = () => new s(((e, t) => {
                                n ? t(n) : o = () => {
                                    n ? t(n) : e()
                                }
                            }));
                        t.on("drain", a);
                        let u = l(t, {
                            readable: !1
                        }, a);
                        try {
                            t.writableNeedDrain && await h();
                            for await (let r of e) t.write(r) || await h();
                            i && t.end(), await h(), r()
                        } catch (e) {
                            r(n !== e ? p(n, e) : e)
                        } finally {
                            u(), t.off("drain", a)
                        }
                    }
                    async function U(e, t, r, {
                        end: i
                    }) {
                        k(t) && (t = t.writable);
                        let n = t.getWriter();
                        try {
                            for await (let t of e) await n.ready, n.write(t).catch((() => {}));
                            await n.ready, i && await n.close(), r()
                        } catch (e) {
                            try {
                                await n.abort(e), r(e)
                            } catch (e) {
                                r(e)
                            }
                        }
                    }

                    function M(e, t, i) {
                        if (1 === e.length && o(e[0]) && (e = e[0]), e.length < 2) throw new b("streams");
                        let s = new O,
                            a = s.signal,
                            l = i?.signal,
                            h = [];

                        function u() {
                            M(new w)
                        }
                        v(l, "options.signal"), l?.addEventListener("abort", u);
                        let f, p, y, m = [],
                            _ = 0;

                        function R(e) {
                            M(e, 0 == --_)
                        }

                        function M(e, r) {
                            if (e && (!f || "ERR_STREAM_PREMATURE_CLOSE" === f.code) && (f = e), f || r) {
                                for (; m.length;) m.shift()(f);
                                l?.removeEventListener("abort", u), s.abort(), r && (f || h.forEach((e => e())), n.nextTick(t, f, p))
                            }
                        }
                        for (let t = 0; t < e.length; t++) {
                            let o = e[t],
                                s = t < e.length - 1,
                                l = t > 0,
                                u = s || !1 !== i?.end,
                                f = t === e.length - 1;
                            if (I(o)) {
                                let e = function(e) {
                                    e && "AbortError" !== e.name && "ERR_STREAM_PREMATURE_CLOSE" !== e.code && R(e)
                                };
                                if (u) {
                                    let {
                                        destroy: e,
                                        cleanup: t
                                    } = P(o, s, l);
                                    m.push(e), S(o) && f && h.push(t)
                                }
                                o.on("error", e), S(o) && f && h.push((() => {
                                    o.removeListener("error", e)
                                }))
                            }
                            if (0 === t)
                                if ("function" == typeof o) {
                                    if (y = o({
                                            signal: a
                                        }), !E(y)) throw new g("Iterable, AsyncIterable or Stream", "source", y)
                                } else y = E(o) || A(o) || k(o) ? o : c.from(o);
                            else if ("function" == typeof o) {
                                var N;
                                if (y = k(y) ? B(null === (N = y) || void 0 === N ? void 0 : N.readable) : B(y), y = o(y, {
                                        signal: a
                                    }), s) {
                                    if (!E(y, !0)) throw new g("AsyncIterable", `transform[${t-1}]`, y)
                                } else {
                                    var j;
                                    r || (r = ui());
                                    let e = new r({
                                            objectMode: !0
                                        }),
                                        t = null === (j = y) || void 0 === j ? void 0 : j.then;
                                    if ("function" == typeof t) _++, t.call(y, (t => {
                                        p = t, null != t && e.write(t), u && e.end(), n.nextTick(R)
                                    }), (t => {
                                        e.destroy(t), n.nextTick(R, t)
                                    }));
                                    else if (E(y, !0)) _++, x(y, e, R, {
                                        end: u
                                    });
                                    else {
                                        if (!C(y) && !k(y)) throw new g("AsyncIterable or Promise", "destination", y);
                                        {
                                            let t = y.readable || y;
                                            _++, x(t, e, R, {
                                                end: u
                                            })
                                        }
                                    }
                                    y = e;
                                    let {
                                        destroy: i,
                                        cleanup: o
                                    } = P(y, !1, !0);
                                    m.push(i), f && h.push(o)
                                }
                            } else if (I(o)) {
                                if (A(y)) {
                                    _ += 2;
                                    let e = L(y, o, R, {
                                        end: u
                                    });
                                    S(o) && f && h.push(e)
                                } else if (k(y) || C(y)) {
                                    let e = y.readable || y;
                                    _++, x(e, o, R, {
                                        end: u
                                    })
                                } else {
                                    if (!E(y)) throw new d("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], y);
                                    _++, x(y, o, R, {
                                        end: u
                                    })
                                }
                                y = o
                            } else if (T(o)) {
                                if (A(y)) _++, U(B(y), o, R, {
                                    end: u
                                });
                                else if (C(y) || E(y)) _++, U(y, o, R, {
                                    end: u
                                });
                                else {
                                    if (!k(y)) throw new d("val", ["Readable", "Iterable", "AsyncIterable", "ReadableStream", "TransformStream"], y);
                                    _++, U(y.readable, o, R, {
                                        end: u
                                    })
                                }
                                y = o
                            } else y = c.from(o)
                        }
                        return (null != a && a.aborted || null != l && l.aborted) && n.nextTick(u), y
                    }

                    function L(e, t, r, {
                        end: i
                    }) {
                        let o = !1;
                        if (t.on("close", (() => {
                                o || r(new m)
                            })), e.pipe(t, {
                                end: !1
                            }), i) {
                            let r = function() {
                                o = !0, t.end()
                            };
                            R(e) ? n.nextTick(r) : e.once("end", r)
                        } else r();
                        return l(e, {
                            readable: !0,
                            writable: !1
                        }, (t => {
                            let i = e._readableState;
                            t && "ERR_STREAM_PREMATURE_CLOSE" === t.code && i && i.ended && !i.errored && !i.errorEmitted ? e.once("end", r).once("error", r) : r(t)
                        })), l(t, {
                            readable: !1,
                            writable: !0
                        }, r)
                    }
                    t.exports = {
                        pipelineImpl: M,
                        pipeline: function(...e) {
                            return M(e, h(function(e) {
                                return _(e[e.length - 1], "streams[stream.length - 1]"), e.pop()
                            }(e)))
                        }
                    }
                })),
                fi = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        pipeline: r
                    } = ci(), i = li(), {
                        destroyer: n
                    } = ft(), {
                        isNodeStream: o,
                        isReadable: s,
                        isWritable: a,
                        isWebStream: l,
                        isTransformStream: h,
                        isWritableStream: u,
                        isReadableStream: c
                    } = ut(), {
                        AbortError: p,
                        codes: {
                            ERR_INVALID_ARG_VALUE: d,
                            ERR_MISSING_ARGS: g
                        }
                    } = at(), b = ct();
                    t.exports = function(...e) {
                        if (0 === e.length) throw new g("streams");
                        if (1 === e.length) return i.from(e[0]);
                        let t, f, y, m, w, _ = [...e];
                        if ("function" == typeof e[0] && (e[0] = i.from(e[0])), "function" == typeof e[e.length - 1]) {
                            let t = e.length - 1;
                            e[t] = i.from(e[t])
                        }
                        for (let t = 0; t < e.length; ++t)
                            if (o(e[t]) || l(e[t])) {
                                if (t < e.length - 1 && !(s(e[t]) || c(e[t]) || h(e[t]))) throw new d(`streams[${t}]`, _[t], "must be readable");
                                if (t > 0 && !(a(e[t]) || u(e[t]) || h(e[t]))) throw new d(`streams[${t}]`, _[t], "must be writable")
                            } let v = e[0],
                            E = r(e, (function(e) {
                                let t = m;
                                m = null, t ? t(e) : e ? w.destroy(e) : !A && !S && w.destroy()
                            })),
                            S = !!(a(v) || u(v) || h(v)),
                            A = !!(s(E) || c(E) || h(E));
                        if (w = new i({
                                writableObjectMode: !(null == v || !v.writableObjectMode),
                                readableObjectMode: !(null == E || !E.writableObjectMode),
                                writable: S,
                                readable: A
                            }), S) {
                            if (o(v)) w._write = function(e, r, i) {
                                v.write(e, r) ? i() : t = i
                            }, w._final = function(e) {
                                v.end(), f = e
                            }, v.on("drain", (function() {
                                if (t) {
                                    let e = t;
                                    t = null, e()
                                }
                            }));
                            else if (l(v)) {
                                let e = (h(v) ? v.writable : v).getWriter();
                                w._write = async function(t, r, i) {
                                    try {
                                        await e.ready, e.write(t).catch((() => {})), i()
                                    } catch (e) {
                                        i(e)
                                    }
                                }, w._final = async function(t) {
                                    try {
                                        await e.ready, e.close().catch((() => {})), f = t
                                    } catch (e) {
                                        t(e)
                                    }
                                }
                            }
                            let e = h(E) ? E.readable : E;
                            b(e, (() => {
                                if (f) {
                                    let e = f;
                                    f = null, e()
                                }
                            }))
                        }
                        if (A)
                            if (o(E)) E.on("readable", (function() {
                                if (y) {
                                    let e = y;
                                    y = null, e()
                                }
                            })), E.on("end", (function() {
                                w.push(null)
                            })), w._read = function() {
                                for (;;) {
                                    let e = E.read();
                                    if (null === e) return void(y = w._read);
                                    if (!w.push(e)) return
                                }
                            };
                            else if (l(E)) {
                            let e = (h(E) ? E.readable : E).getReader();
                            w._read = async function() {
                                for (;;) try {
                                    let {
                                        value: t,
                                        done: r
                                    } = await e.read();
                                    if (!w.push(t)) return;
                                    if (r) return void w.push(null)
                                } catch {
                                    return
                                }
                            }
                        }
                        return w._destroy = function(e, r) {
                            !e && null !== m && (e = new p), y = null, t = null, f = null, null === m ? r(e) : (m = r, o(E) && n(E, e))
                        }, w
                    }
                })),
                pi = h(((e, t) => {
                    f(), rt(), qe();
                    var r = globalThis.AbortController || st().AbortController,
                        {
                            codes: {
                                ERR_INVALID_ARG_VALUE: i,
                                ERR_INVALID_ARG_TYPE: n,
                                ERR_MISSING_ARGS: o,
                                ERR_OUT_OF_RANGE: s
                            },
                            AbortError: a
                        } = at(),
                        {
                            validateAbortSignal: l,
                            validateInteger: h,
                            validateObject: u
                        } = lt(),
                        c = nt().Symbol("kWeak"),
                        {
                            finished: p
                        } = ct(),
                        d = fi(),
                        {
                            addAbortSignalNoValidate: g
                        } = Dt(),
                        {
                            isWritable: b,
                            isNodeStream: y
                        } = ut(),
                        {
                            ArrayPrototypePush: m,
                            MathFloor: w,
                            Number: _,
                            NumberIsNaN: v,
                            Promise: E,
                            PromiseReject: S,
                            PromisePrototypeThen: A,
                            Symbol: I
                        } = nt(),
                        k = I("kEmpty"),
                        T = I("kEof");

                    function C(e, t) {
                        if ("function" != typeof e) throw new n("fn", ["Function", "AsyncFunction"], e);
                        null != t && u(t, "options"), null != t?.signal && l(t.signal, "options.signal");
                        let i = 1;
                        return null != t?.concurrency && (i = w(t.concurrency)), h(i, "concurrency", 1), async function*() {
                            var n, o;
                            let s = new r,
                                l = this,
                                h = [],
                                u = s.signal,
                                c = {
                                    signal: u
                                },
                                f = () => s.abort();
                            null != t && null !== (n = t.signal) && void 0 !== n && n.aborted && f(), null == t || null === (o = t.signal) || void 0 === o || o.addEventListener("abort", f);
                            let p, d, g = !1;

                            function b() {
                                g = !0
                            }!async function() {
                                try {
                                    for await (let t of l) {
                                        var r;
                                        if (g) return;
                                        if (u.aborted) throw new a;
                                        try {
                                            t = e(t, c)
                                        } catch (e) {
                                            t = S(e)
                                        }
                                        t !== k && ("function" == typeof(null === (r = t) || void 0 === r ? void 0 : r.catch) && t.catch(b), h.push(t), p && (p(), p = null), !g && h.length && h.length >= i && await new E((e => {
                                            d = e
                                        })))
                                    }
                                    h.push(T)
                                } catch (e) {
                                    let t = S(e);
                                    A(t, void 0, b), h.push(t)
                                } finally {
                                    var n;
                                    g = !0, p && (p(), p = null), null == t || null === (n = t.signal) || void 0 === n || n.removeEventListener("abort", f)
                                }
                            }();
                            try {
                                for (;;) {
                                    for (; h.length > 0;) {
                                        let e = await h[0];
                                        if (e === T) return;
                                        if (u.aborted) throw new a;
                                        e !== k && (yield e), h.shift(), d && (d(), d = null)
                                    }
                                    await new E((e => {
                                        p = e
                                    }))
                                }
                            } finally {
                                s.abort(), g = !0, d && (d(), d = null)
                            }
                        }.call(this)
                    }
                    async function R(e, t) {
                        for await (let r of O.call(this, e, t)) return !0;
                        return !1
                    }

                    function O(e, t) {
                        if ("function" != typeof e) throw new n("fn", ["Function", "AsyncFunction"], e);
                        return C.call(this, (async function(t, r) {
                            return await e(t, r) ? t : k
                        }), t)
                    }
                    var P = class extends o {
                        constructor() {
                            super("reduce"), this.message = "Reduce of an empty stream requires an initial value"
                        }
                    };

                    function B(e) {
                        if (e = _(e), v(e)) return 0;
                        if (e < 0) throw new s("number", ">= 0", e);
                        return e
                    }
                    t.exports.streamReturningOperators = {
                        asIndexedPairs: function(e) {
                            return null != e && u(e, "options"), null != e?.signal && l(e.signal, "options.signal"), async function*() {
                                let t = 0;
                                for await (let i of this) {
                                    var r;
                                    if (null != e && null !== (r = e.signal) && void 0 !== r && r.aborted) throw new a({
                                        cause: e.signal.reason
                                    });
                                    yield [t++, i]
                                }
                            }.call(this)
                        },
                        drop: function(e, t) {
                            return null != t && u(t, "options"), null != t?.signal && l(t.signal, "options.signal"), e = B(e), async function*() {
                                var r;
                                if (null != t && null !== (r = t.signal) && void 0 !== r && r.aborted) throw new a;
                                for await (let r of this) {
                                    var i;
                                    if (null != t && null !== (i = t.signal) && void 0 !== i && i.aborted) throw new a;
                                    e-- <= 0 && (yield r)
                                }
                            }.call(this)
                        },
                        filter: O,
                        flatMap: function(e, t) {
                            let r = C.call(this, e, t);
                            return async function*() {
                                for await (let e of r) yield* e
                            }.call(this)
                        },
                        map: C,
                        take: function(e, t) {
                            return null != t && u(t, "options"), null != t?.signal && l(t.signal, "options.signal"), e = B(e), async function*() {
                                var r;
                                if (null != t && null !== (r = t.signal) && void 0 !== r && r.aborted) throw new a;
                                for await (let r of this) {
                                    var i;
                                    if (null != t && null !== (i = t.signal) && void 0 !== i && i.aborted) throw new a;
                                    if (!(e-- > 0)) return;
                                    yield r
                                }
                            }.call(this)
                        },
                        compose: function(e, t) {
                            if (null != t && u(t, "options"), null != t?.signal && l(t.signal, "options.signal"), y(e) && !b(e)) throw new i("stream", e, "must be writable");
                            let r = d(this, e);
                            return null != t && t.signal && g(t.signal, r), r
                        }
                    }, t.exports.promiseReturningOperators = {
                        every: async function(e, t) {
                            if ("function" != typeof e) throw new n("fn", ["Function", "AsyncFunction"], e);
                            return !await R.call(this, (async (...t) => !await e(...t)), t)
                        },
                        forEach: async function(e, t) {
                            if ("function" != typeof e) throw new n("fn", ["Function", "AsyncFunction"], e);
                            for await (let r of C.call(this, (async function(t, r) {
                                return await e(t, r), k
                            }), t));
                        },
                        reduce: async function(e, t, i) {
                            var o;
                            if ("function" != typeof e) throw new n("reducer", ["Function", "AsyncFunction"], e);
                            null != i && u(i, "options"), null != i?.signal && l(i.signal, "options.signal");
                            let s = arguments.length > 1;
                            if (null != i && null !== (o = i.signal) && void 0 !== o && o.aborted) {
                                let e = new a(void 0, {
                                    cause: i.signal.reason
                                });
                                throw this.once("error", (() => {})), await p(this.destroy(e)), e
                            }
                            let h = new r,
                                f = h.signal;
                            if (null != i && i.signal) {
                                let e = {
                                    once: !0,
                                    [c]: this
                                };
                                i.signal.addEventListener("abort", (() => h.abort()), e)
                            }
                            let d = !1;
                            try {
                                for await (let r of this) {
                                    var g;
                                    if (d = !0, null != i && null !== (g = i.signal) && void 0 !== g && g.aborted) throw new a;
                                    s ? t = await e(t, r, {
                                        signal: f
                                    }) : (t = r, s = !0)
                                }
                                if (!d && !s) throw new P
                            } finally {
                                h.abort()
                            }
                            return t
                        },
                        toArray: async function(e) {
                            null != e && u(e, "options"), null != e?.signal && l(e.signal, "options.signal");
                            let t = [];
                            for await (let i of this) {
                                var r;
                                if (null != e && null !== (r = e.signal) && void 0 !== r && r.aborted) throw new a(void 0, {
                                    cause: e.signal.reason
                                });
                                m(t, i)
                            }
                            return t
                        },
                        some: R,
                        find: async function(e, t) {
                            for await (let r of O.call(this, e, t)) return r
                        }
                    }
                })),
                di = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        ArrayPrototypePop: r,
                        Promise: i
                    } = nt(), {
                        isIterable: n,
                        isNodeStream: o,
                        isWebStream: s
                    } = ut(), {
                        pipelineImpl: a
                    } = ci(), {
                        finished: l
                    } = ct();
                    gi(), t.exports = {
                        finished: l,
                        pipeline: function(...e) {
                            return new i(((t, i) => {
                                let l, h, u = e[e.length - 1];
                                if (u && "object" == typeof u && !o(u) && !n(u) && !s(u)) {
                                    let t = r(e);
                                    l = t.signal, h = t.end
                                }
                                a(e, ((e, r) => {
                                    e ? i(e) : t(r)
                                }), {
                                    signal: l,
                                    end: h
                                })
                            }))
                        }
                    }
                })),
                gi = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        Buffer: r
                    } = (tt(), c(Ve)), {
                        ObjectDefineProperty: i,
                        ObjectKeys: n,
                        ReflectApply: o
                    } = nt(), {
                        promisify: {
                            custom: s
                        }
                    } = ot(), {
                        streamReturningOperators: a,
                        promiseReturningOperators: l
                    } = pi(), {
                        codes: {
                            ERR_ILLEGAL_CONSTRUCTOR: h
                        }
                    } = at(), u = fi(), {
                        pipeline: p
                    } = ci(), {
                        destroyer: d
                    } = ft(), g = ct(), b = di(), y = ut(), m = t.exports = jt().Stream;
                    m.isDisturbed = y.isDisturbed, m.isErrored = y.isErrored, m.isReadable = y.isReadable, m.Readable = oi();
                    for (let e of n(a)) {
                        let t = function(...e) {
                                if (new.target) throw h();
                                return m.Readable.from(o(r, this, e))
                            },
                            r = a[e];
                        i(t, "name", {
                            __proto__: null,
                            value: r.name
                        }), i(t, "length", {
                            __proto__: null,
                            value: r.length
                        }), i(m.Readable.prototype, e, {
                            __proto__: null,
                            value: t,
                            enumerable: !1,
                            configurable: !0,
                            writable: !0
                        })
                    }
                    for (let e of n(l)) {
                        let t = function(...e) {
                                if (new.target) throw h();
                                return o(r, this, e)
                            },
                            r = l[e];
                        i(t, "name", {
                            __proto__: null,
                            value: r.name
                        }), i(t, "length", {
                            __proto__: null,
                            value: r.length
                        }), i(m.Readable.prototype, e, {
                            __proto__: null,
                            value: t,
                            enumerable: !1,
                            configurable: !0,
                            writable: !0
                        })
                    }
                    m.Writable = si(), m.Duplex = li(), m.Transform = hi(), m.PassThrough = ui(), m.pipeline = p;
                    var {
                        addAbortSignal: w
                    } = Dt();
                    m.addAbortSignal = w, m.finished = g, m.destroy = d, m.compose = u, i(m, "promises", {
                        __proto__: null,
                        configurable: !0,
                        enumerable: !0,
                        get: () => b
                    }), i(p, s, {
                        __proto__: null,
                        enumerable: !0,
                        get: () => b.pipeline
                    }), i(g, s, {
                        __proto__: null,
                        enumerable: !0,
                        get: () => b.finished
                    }), m.Stream = m, m._isUint8Array = function(e) {
                        return e instanceof Uint8Array
                    }, m._uint8ArrayToBuffer = function(e) {
                        return r.from(e.buffer, e.byteOffset, e.byteLength)
                    }
                })),
                bi = h(((e, t) => {
                    f(), rt(), qe();
                    var r = gi(),
                        i = di(),
                        n = r.Readable.destroy;
                    t.exports = r.Readable, t.exports._uint8ArrayToBuffer = r._uint8ArrayToBuffer, t.exports._isUint8Array = r._isUint8Array, t.exports.isDisturbed = r.isDisturbed, t.exports.isErrored = r.isErrored, t.exports.isReadable = r.isReadable, t.exports.Readable = r.Readable, t.exports.Writable = r.Writable, t.exports.Duplex = r.Duplex, t.exports.Transform = r.Transform, t.exports.PassThrough = r.PassThrough, t.exports.addAbortSignal = r.addAbortSignal, t.exports.finished = r.finished, t.exports.destroy = r.destroy, t.exports.destroy = n, t.exports.pipeline = r.pipeline, t.exports.compose = r.compose, Object.defineProperty(r, "promises", {
                        configurable: !0,
                        enumerable: !0,
                        get: () => i
                    }), t.exports.Stream = r.Stream, t.exports.default = t.exports
                })),
                yi = h(((e, t) => {
                    f(), rt(), qe(), "function" == typeof Object.create ? t.exports = function(e, t) {
                        t && (e.super_ = t, e.prototype = Object.create(t.prototype, {
                            constructor: {
                                value: e,
                                enumerable: !1,
                                writable: !0,
                                configurable: !0
                            }
                        }))
                    } : t.exports = function(e, t) {
                        if (t) {
                            e.super_ = t;
                            var r = function() {};
                            r.prototype = t.prototype, e.prototype = new r, e.prototype.constructor = e
                        }
                    }
                })),
                mi = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        Buffer: r
                    } = (tt(), c(Ve)), i = Symbol.for("BufferList");

                    function n(e) {
                        if (!(this instanceof n)) return new n(e);
                        n._init.call(this, e)
                    }
                    n._init = function(e) {
                            Object.defineProperty(this, i, {
                                value: !0
                            }), this._bufs = [], this.length = 0, e && this.append(e)
                        }, n.prototype._new = function(e) {
                            return new n(e)
                        }, n.prototype._offset = function(e) {
                            if (0 === e) return [0, 0];
                            let t = 0;
                            for (let r = 0; r < this._bufs.length; r++) {
                                let i = t + this._bufs[r].length;
                                if (e < i || r === this._bufs.length - 1) return [r, e - t];
                                t = i
                            }
                        }, n.prototype._reverseOffset = function(e) {
                            let t = e[0],
                                r = e[1];
                            for (let e = 0; e < t; e++) r += this._bufs[e].length;
                            return r
                        }, n.prototype.get = function(e) {
                            if (e > this.length || e < 0) return;
                            let t = this._offset(e);
                            return this._bufs[t[0]][t[1]]
                        }, n.prototype.slice = function(e, t) {
                            return "number" == typeof e && e < 0 && (e += this.length), "number" == typeof t && t < 0 && (t += this.length), this.copy(null, 0, e, t)
                        }, n.prototype.copy = function(e, t, i, n) {
                            if (("number" != typeof i || i < 0) && (i = 0), ("number" != typeof n || n > this.length) && (n = this.length), i >= this.length || n <= 0) return e || r.alloc(0);
                            let o = !!e,
                                s = this._offset(i),
                                a = n - i,
                                l = a,
                                h = o && t || 0,
                                u = s[1];
                            if (0 === i && n === this.length) {
                                if (!o) return 1 === this._bufs.length ? this._bufs[0] : r.concat(this._bufs, this.length);
                                for (let t = 0; t < this._bufs.length; t++) this._bufs[t].copy(e, h), h += this._bufs[t].length;
                                return e
                            }
                            if (l <= this._bufs[s[0]].length - u) return o ? this._bufs[s[0]].copy(e, t, u, u + l) : this._bufs[s[0]].slice(u, u + l);
                            o || (e = r.allocUnsafe(a));
                            for (let t = s[0]; t < this._bufs.length; t++) {
                                let r = this._bufs[t].length - u;
                                if (!(l > r)) {
                                    this._bufs[t].copy(e, h, u, u + l), h += r;
                                    break
                                }
                                this._bufs[t].copy(e, h, u), h += r, l -= r, u && (u = 0)
                            }
                            return e.length > h ? e.slice(0, h) : e
                        }, n.prototype.shallowSlice = function(e, t) {
                            if (e = e || 0, t = "number" != typeof t ? this.length : t, e < 0 && (e += this.length), t < 0 && (t += this.length), e === t) return this._new();
                            let r = this._offset(e),
                                i = this._offset(t),
                                n = this._bufs.slice(r[0], i[0] + 1);
                            return 0 === i[1] ? n.pop() : n[n.length - 1] = n[n.length - 1].slice(0, i[1]), 0 !== r[1] && (n[0] = n[0].slice(r[1])), this._new(n)
                        }, n.prototype.toString = function(e, t, r) {
                            return this.slice(t, r).toString(e)
                        }, n.prototype.consume = function(e) {
                            if (e = Math.trunc(e), Number.isNaN(e) || e <= 0) return this;
                            for (; this._bufs.length;) {
                                if (!(e >= this._bufs[0].length)) {
                                    this._bufs[0] = this._bufs[0].slice(e), this.length -= e;
                                    break
                                }
                                e -= this._bufs[0].length, this.length -= this._bufs[0].length, this._bufs.shift()
                            }
                            return this
                        }, n.prototype.duplicate = function() {
                            let e = this._new();
                            for (let t = 0; t < this._bufs.length; t++) e.append(this._bufs[t]);
                            return e
                        }, n.prototype.append = function(e) {
                            if (null == e) return this;
                            if (e.buffer) this._appendBuffer(r.from(e.buffer, e.byteOffset, e.byteLength));
                            else if (Array.isArray(e))
                                for (let t = 0; t < e.length; t++) this.append(e[t]);
                            else if (this._isBufferList(e))
                                for (let t = 0; t < e._bufs.length; t++) this.append(e._bufs[t]);
                            else "number" == typeof e && (e = e.toString()), this._appendBuffer(r.from(e));
                            return this
                        }, n.prototype._appendBuffer = function(e) {
                            this._bufs.push(e), this.length += e.length
                        }, n.prototype.indexOf = function(e, t, i) {
                            if (void 0 === i && "string" == typeof t && (i = t, t = void 0), "function" == typeof e || Array.isArray(e)) throw new TypeError('The "value" argument must be one of type string, Buffer, BufferList, or Uint8Array.');
                            if ("number" == typeof e ? e = r.from([e]) : "string" == typeof e ? e = r.from(e, i) : this._isBufferList(e) ? e = e.slice() : Array.isArray(e.buffer) ? e = r.from(e.buffer, e.byteOffset, e.byteLength) : r.isBuffer(e) || (e = r.from(e)), t = Number(t || 0), isNaN(t) && (t = 0), t < 0 && (t = this.length + t), t < 0 && (t = 0), 0 === e.length) return t > this.length ? this.length : t;
                            let n = this._offset(t),
                                o = n[0],
                                s = n[1];
                            for (; o < this._bufs.length; o++) {
                                let t = this._bufs[o];
                                for (; s < t.length;)
                                    if (t.length - s >= e.length) {
                                        let r = t.indexOf(e, s);
                                        if (-1 !== r) return this._reverseOffset([o, r]);
                                        s = t.length - e.length + 1
                                    } else {
                                        let t = this._reverseOffset([o, s]);
                                        if (this._match(t, e)) return t;
                                        s++
                                    } s = 0
                            }
                            return -1
                        }, n.prototype._match = function(e, t) {
                            if (this.length - e < t.length) return !1;
                            for (let r = 0; r < t.length; r++)
                                if (this.get(e + r) !== t[r]) return !1;
                            return !0
                        },
                        function() {
                            let e = {
                                readDoubleBE: 8,
                                readDoubleLE: 8,
                                readFloatBE: 4,
                                readFloatLE: 4,
                                readBigInt64BE: 8,
                                readBigInt64LE: 8,
                                readBigUInt64BE: 8,
                                readBigUInt64LE: 8,
                                readInt32BE: 4,
                                readInt32LE: 4,
                                readUInt32BE: 4,
                                readUInt32LE: 4,
                                readInt16BE: 2,
                                readInt16LE: 2,
                                readUInt16BE: 2,
                                readUInt16LE: 2,
                                readInt8: 1,
                                readUInt8: 1,
                                readIntBE: null,
                                readIntLE: null,
                                readUIntBE: null,
                                readUIntLE: null
                            };
                            for (let t in e) ! function(t) {
                                n.prototype[t] = null === e[t] ? function(e, r) {
                                    return this.slice(e, e + r)[t](0, r)
                                } : function(r = 0) {
                                    return this.slice(r, r + e[t])[t](0)
                                }
                            }(t)
                        }(), n.prototype._isBufferList = function(e) {
                            return e instanceof n || n.isBufferList(e)
                        }, n.isBufferList = function(e) {
                            return null != e && e[i]
                        }, t.exports = n
                })),
                wi = h(((e, t) => {
                    f(), rt(), qe();
                    var r = bi().Duplex,
                        i = yi(),
                        n = mi();

                    function o(e) {
                        if (!(this instanceof o)) return new o(e);
                        if ("function" == typeof e) {
                            this._callback = e;
                            let t = function(e) {
                                this._callback && (this._callback(e), this._callback = null)
                            }.bind(this);
                            this.on("pipe", (function(e) {
                                e.on("error", t)
                            })), this.on("unpipe", (function(e) {
                                e.removeListener("error", t)
                            })), e = null
                        }
                        n._init.call(this, e), r.call(this)
                    }
                    i(o, r), Object.assign(o.prototype, n.prototype), o.prototype._new = function(e) {
                        return new o(e)
                    }, o.prototype._write = function(e, t, r) {
                        this._appendBuffer(e), "function" == typeof r && r()
                    }, o.prototype._read = function(e) {
                        if (!this.length) return this.push(null);
                        e = Math.min(e, this.length), this.push(this.slice(0, e)), this.consume(e)
                    }, o.prototype.end = function(e) {
                        r.prototype.end.call(this, e), this._callback && (this._callback(null, this.slice()), this._callback = null)
                    }, o.prototype._destroy = function(e, t) {
                        this._bufs.length = 0, this.length = 0, t(e)
                    }, o.prototype._isBufferList = function(e) {
                        return e instanceof o || e instanceof n || o.isBufferList(e)
                    }, o.isBufferList = n.isBufferList, t.exports = o, t.exports.BufferListStream = o, t.exports.BufferList = n
                })),
                _i = h(((e, t) => {
                    f(), rt(), qe(), t.exports = class {
                        constructor() {
                            this.cmd = null, this.retain = !1, this.qos = 0, this.dup = !1, this.length = -1, this.topic = null, this.payload = null
                        }
                    }
                })),
                vi = h(((e, t) => {
                    f(), rt(), qe();
                    var r = t.exports,
                        {
                            Buffer: i
                        } = (tt(), c(Ve));
                    r.types = {
                        0: "reserved",
                        1: "connect",
                        2: "connack",
                        3: "publish",
                        4: "puback",
                        5: "pubrec",
                        6: "pubrel",
                        7: "pubcomp",
                        8: "subscribe",
                        9: "suback",
                        10: "unsubscribe",
                        11: "unsuback",
                        12: "pingreq",
                        13: "pingresp",
                        14: "disconnect",
                        15: "auth"
                    }, r.requiredHeaderFlags = {
                        1: 0,
                        2: 0,
                        4: 0,
                        5: 0,
                        6: 2,
                        7: 0,
                        8: 2,
                        9: 0,
                        10: 2,
                        11: 0,
                        12: 0,
                        13: 0,
                        14: 0,
                        15: 0
                    }, r.requiredHeaderFlagsErrors = {};
                    for (let e in r.requiredHeaderFlags) {
                        let t = r.requiredHeaderFlags[e];
                        r.requiredHeaderFlagsErrors[e] = "Invalid header flag bits, must be 0x" + t.toString(16) + " for " + r.types[e] + " packet"
                    }
                    r.codes = {};
                    for (let e in r.types) {
                        let t = r.types[e];
                        r.codes[t] = e
                    }
                    r.CMD_SHIFT = 4, r.CMD_MASK = 240, r.DUP_MASK = 8, r.QOS_MASK = 3, r.QOS_SHIFT = 1, r.RETAIN_MASK = 1, r.VARBYTEINT_MASK = 127, r.VARBYTEINT_FIN_MASK = 128, r.VARBYTEINT_MAX = 268435455, r.SESSIONPRESENT_MASK = 1, r.SESSIONPRESENT_HEADER = i.from([r.SESSIONPRESENT_MASK]), r.CONNACK_HEADER = i.from([r.codes.connack << r.CMD_SHIFT]), r.USERNAME_MASK = 128, r.PASSWORD_MASK = 64, r.WILL_RETAIN_MASK = 32, r.WILL_QOS_MASK = 24, r.WILL_QOS_SHIFT = 3, r.WILL_FLAG_MASK = 4, r.CLEAN_SESSION_MASK = 2, r.CONNECT_HEADER = i.from([r.codes.connect << r.CMD_SHIFT]), r.properties = {
                        sessionExpiryInterval: 17,
                        willDelayInterval: 24,
                        receiveMaximum: 33,
                        maximumPacketSize: 39,
                        topicAliasMaximum: 34,
                        requestResponseInformation: 25,
                        requestProblemInformation: 23,
                        userProperties: 38,
                        authenticationMethod: 21,
                        authenticationData: 22,
                        payloadFormatIndicator: 1,
                        messageExpiryInterval: 2,
                        contentType: 3,
                        responseTopic: 8,
                        correlationData: 9,
                        maximumQoS: 36,
                        retainAvailable: 37,
                        assignedClientIdentifier: 18,
                        reasonString: 31,
                        wildcardSubscriptionAvailable: 40,
                        subscriptionIdentifiersAvailable: 41,
                        sharedSubscriptionAvailable: 42,
                        serverKeepAlive: 19,
                        responseInformation: 26,
                        serverReference: 28,
                        topicAlias: 35,
                        subscriptionIdentifier: 11
                    }, r.propertiesCodes = {};
                    for (let e in r.properties) {
                        let t = r.properties[e];
                        r.propertiesCodes[t] = e
                    }

                    function n(e) {
                        return [0, 1, 2].map((t => [0, 1].map((n => [0, 1].map((o => {
                            let s = i.alloc(1);
                            return s.writeUInt8(r.codes[e] << r.CMD_SHIFT | (n ? r.DUP_MASK : 0) | t << r.QOS_SHIFT | o, 0, !0), s
                        }))))))
                    }
                    r.propertiesTypes = {
                        sessionExpiryInterval: "int32",
                        willDelayInterval: "int32",
                        receiveMaximum: "int16",
                        maximumPacketSize: "int32",
                        topicAliasMaximum: "int16",
                        requestResponseInformation: "byte",
                        requestProblemInformation: "byte",
                        userProperties: "pair",
                        authenticationMethod: "string",
                        authenticationData: "binary",
                        payloadFormatIndicator: "byte",
                        messageExpiryInterval: "int32",
                        contentType: "string",
                        responseTopic: "string",
                        correlationData: "binary",
                        maximumQoS: "int8",
                        retainAvailable: "byte",
                        assignedClientIdentifier: "string",
                        reasonString: "string",
                        wildcardSubscriptionAvailable: "byte",
                        subscriptionIdentifiersAvailable: "byte",
                        sharedSubscriptionAvailable: "byte",
                        serverKeepAlive: "int16",
                        responseInformation: "string",
                        serverReference: "string",
                        topicAlias: "int16",
                        subscriptionIdentifier: "var"
                    }, r.PUBLISH_HEADER = n("publish"), r.SUBSCRIBE_HEADER = n("subscribe"), r.SUBSCRIBE_OPTIONS_QOS_MASK = 3, r.SUBSCRIBE_OPTIONS_NL_MASK = 1, r.SUBSCRIBE_OPTIONS_NL_SHIFT = 2, r.SUBSCRIBE_OPTIONS_RAP_MASK = 1, r.SUBSCRIBE_OPTIONS_RAP_SHIFT = 3, r.SUBSCRIBE_OPTIONS_RH_MASK = 3, r.SUBSCRIBE_OPTIONS_RH_SHIFT = 4, r.SUBSCRIBE_OPTIONS_RH = [0, 16, 32], r.SUBSCRIBE_OPTIONS_NL = 4, r.SUBSCRIBE_OPTIONS_RAP = 8, r.SUBSCRIBE_OPTIONS_QOS = [0, 1, 2], r.UNSUBSCRIBE_HEADER = n("unsubscribe"), r.ACKS = {
                        unsuback: n("unsuback"),
                        puback: n("puback"),
                        pubcomp: n("pubcomp"),
                        pubrel: n("pubrel"),
                        pubrec: n("pubrec")
                    }, r.SUBACK_HEADER = i.from([r.codes.suback << r.CMD_SHIFT]), r.VERSION3 = i.from([3]), r.VERSION4 = i.from([4]), r.VERSION5 = i.from([5]), r.VERSION131 = i.from([131]), r.VERSION132 = i.from([132]), r.QOS = [0, 1, 2].map((e => i.from([e]))), r.EMPTY = {
                        pingreq: i.from([r.codes.pingreq << 4, 0]),
                        pingresp: i.from([r.codes.pingresp << 4, 0]),
                        disconnect: i.from([r.codes.disconnect << 4, 0])
                    }, r.MQTT5_PUBACK_PUBREC_CODES = {
                        0: "Success",
                        16: "No matching subscribers",
                        128: "Unspecified error",
                        131: "Implementation specific error",
                        135: "Not authorized",
                        144: "Topic Name invalid",
                        145: "Packet identifier in use",
                        151: "Quota exceeded",
                        153: "Payload format invalid"
                    }, r.MQTT5_PUBREL_PUBCOMP_CODES = {
                        0: "Success",
                        146: "Packet Identifier not found"
                    }, r.MQTT5_SUBACK_CODES = {
                        0: "Granted QoS 0",
                        1: "Granted QoS 1",
                        2: "Granted QoS 2",
                        128: "Unspecified error",
                        131: "Implementation specific error",
                        135: "Not authorized",
                        143: "Topic Filter invalid",
                        145: "Packet Identifier in use",
                        151: "Quota exceeded",
                        158: "Shared Subscriptions not supported",
                        161: "Subscription Identifiers not supported",
                        162: "Wildcard Subscriptions not supported"
                    }, r.MQTT5_UNSUBACK_CODES = {
                        0: "Success",
                        17: "No subscription existed",
                        128: "Unspecified error",
                        131: "Implementation specific error",
                        135: "Not authorized",
                        143: "Topic Filter invalid",
                        145: "Packet Identifier in use"
                    }, r.MQTT5_DISCONNECT_CODES = {
                        0: "Normal disconnection",
                        4: "Disconnect with Will Message",
                        128: "Unspecified error",
                        129: "Malformed Packet",
                        130: "Protocol Error",
                        131: "Implementation specific error",
                        135: "Not authorized",
                        137: "Server busy",
                        139: "Server shutting down",
                        141: "Keep Alive timeout",
                        142: "Session taken over",
                        143: "Topic Filter invalid",
                        144: "Topic Name invalid",
                        147: "Receive Maximum exceeded",
                        148: "Topic Alias invalid",
                        149: "Packet too large",
                        150: "Message rate too high",
                        151: "Quota exceeded",
                        152: "Administrative action",
                        153: "Payload format invalid",
                        154: "Retain not supported",
                        155: "QoS not supported",
                        156: "Use another server",
                        157: "Server moved",
                        158: "Shared Subscriptions not supported",
                        159: "Connection rate exceeded",
                        160: "Maximum connect time",
                        161: "Subscription Identifiers not supported",
                        162: "Wildcard Subscriptions not supported"
                    }, r.MQTT5_AUTH_CODES = {
                        0: "Success",
                        24: "Continue authentication",
                        25: "Re-authenticate"
                    }
                })),
                Ei = h(((e, t) => {
                    f(), rt(), qe();
                    var r = 1e3,
                        i = 6e4,
                        n = 60 * i,
                        o = 24 * n;

                    function s(e, t, r, i) {
                        var n = t >= 1.5 * r;
                        return Math.round(e / r) + " " + i + (n ? "s" : "")
                    }
                    t.exports = function(e, t) {
                        t = t || {};
                        var a = typeof e;
                        if ("string" === a && e.length > 0) return function(e) {
                            if (!((e = String(e)).length > 100)) {
                                var t = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(e);
                                if (t) {
                                    var s = parseFloat(t[1]);
                                    switch ((t[2] || "ms").toLowerCase()) {
                                        case "years":
                                        case "year":
                                        case "yrs":
                                        case "yr":
                                        case "y":
                                            return 315576e5 * s;
                                        case "weeks":
                                        case "week":
                                        case "w":
                                            return 6048e5 * s;
                                        case "days":
                                        case "day":
                                        case "d":
                                            return s * o;
                                        case "hours":
                                        case "hour":
                                        case "hrs":
                                        case "hr":
                                        case "h":
                                            return s * n;
                                        case "minutes":
                                        case "minute":
                                        case "mins":
                                        case "min":
                                        case "m":
                                            return s * i;
                                        case "seconds":
                                        case "second":
                                        case "secs":
                                        case "sec":
                                        case "s":
                                            return s * r;
                                        case "milliseconds":
                                        case "millisecond":
                                        case "msecs":
                                        case "msec":
                                        case "ms":
                                            return s;
                                        default:
                                            return
                                    }
                                }
                            }
                        }(e);
                        if ("number" === a && isFinite(e)) return t.long ? function(e) {
                            var t = Math.abs(e);
                            return t >= o ? s(e, t, o, "day") : t >= n ? s(e, t, n, "hour") : t >= i ? s(e, t, i, "minute") : t >= r ? s(e, t, r, "second") : e + " ms"
                        }(e) : function(e) {
                            var t = Math.abs(e);
                            return t >= o ? Math.round(e / o) + "d" : t >= n ? Math.round(e / n) + "h" : t >= i ? Math.round(e / i) + "m" : t >= r ? Math.round(e / r) + "s" : e + "ms"
                        }(e);
                        throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(e))
                    }
                })),
                Si = h(((e, t) => {
                    f(), rt(), qe(), t.exports = function(e) {
                        function t(e) {
                            let i, n, o, s = null;

                            function a(...e) {
                                if (!a.enabled) return;
                                let r = a,
                                    n = Number(new Date),
                                    o = n - (i || n);
                                r.diff = o, r.prev = i, r.curr = n, i = n, e[0] = t.coerce(e[0]), "string" != typeof e[0] && e.unshift("%O");
                                let s = 0;
                                e[0] = e[0].replace(/%([a-zA-Z%])/g, ((i, n) => {
                                    if ("%%" === i) return "%";
                                    s++;
                                    let o = t.formatters[n];
                                    if ("function" == typeof o) {
                                        let t = e[s];
                                        i = o.call(r, t), e.splice(s, 1), s--
                                    }
                                    return i
                                })), t.formatArgs.call(r, e), (r.log || t.log).apply(r, e)
                            }
                            return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = r, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                                enumerable: !0,
                                configurable: !1,
                                get: () => null !== s ? s : (n !== t.namespaces && (n = t.namespaces, o = t.enabled(e)), o),
                                set: e => {
                                    s = e
                                }
                            }), "function" == typeof t.init && t.init(a), a
                        }

                        function r(e, r) {
                            let i = t(this.namespace + (typeof r > "u" ? ":" : r) + e);
                            return i.log = this.log, i
                        }

                        function n(e) {
                            return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
                        }
                        return t.debug = t, t.default = t, t.coerce = function(e) {
                            return e instanceof Error ? e.stack || e.message : e
                        }, t.disable = function() {
                            let e = [...t.names.map(n), ...t.skips.map(n).map((e => "-" + e))].join(",");
                            return t.enable(""), e
                        }, t.enable = function(e) {
                            t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                            let r, i = ("string" == typeof e ? e : "").split(/[\s,]+/),
                                n = i.length;
                            for (r = 0; r < n; r++) i[r] && ("-" === (e = i[r].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
                        }, t.enabled = function(e) {
                            if ("*" === e[e.length - 1]) return !0;
                            let r, i;
                            for (r = 0, i = t.skips.length; r < i; r++)
                                if (t.skips[r].test(e)) return !1;
                            for (r = 0, i = t.names.length; r < i; r++)
                                if (t.names[r].test(e)) return !0;
                            return !1
                        }, t.humanize = Ei(), t.destroy = function() {
                            i.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
                        }, Object.keys(e).forEach((r => {
                            t[r] = e[r]
                        })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                            let r = 0;
                            for (let t = 0; t < e.length; t++) r = (r << 5) - r + e.charCodeAt(t), r |= 0;
                            return t.colors[Math.abs(r) % t.colors.length]
                        }, t.enable(t.load()), t
                    }
                })),
                Ai = h(((e, t) => {
                    f(), rt(), qe(), e.formatArgs = function(e) {
                        if (e[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + e[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors) return;
                        let r = "color: " + this.color;
                        e.splice(1, 0, r, "color: inherit");
                        let i = 0,
                            n = 0;
                        e[0].replace(/%[a-zA-Z%]/g, (e => {
                            "%%" !== e && (i++, "%c" === e && (n = i))
                        })), e.splice(n, 0, r)
                    }, e.save = function(t) {
                        try {
                            t ? e.storage.setItem("debug", t) : e.storage.removeItem("debug")
                        } catch {}
                    }, e.load = function() {
                        let t;
                        try {
                            t = e.storage.getItem("debug")
                        } catch {}
                        return !t && typeof p < "u" && "env" in p && (t = p.env.DEBUG), t
                    }, e.useColors = function() {
                        return !(!(typeof window < "u" && window.process) || "renderer" !== window.process.type && !window.process.__nwjs) || !(typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) && (typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))
                    }, e.storage = function() {
                        try {
                            return localStorage
                        } catch {}
                    }(), e.destroy = (() => {
                        let e = !1;
                        return () => {
                            e || (e = !0, i.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                        }
                    })(), e.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], e.log = i.debug || i.log || (() => {}), t.exports = Si()(e);
                    var {
                        formatters: r
                    } = t.exports;
                    r.j = function(e) {
                        try {
                            return JSON.stringify(e)
                        } catch (e) {
                            return "[UnexpectedJSONParseError]: " + e.message
                        }
                    }
                })),
                Ii = h(((e, t) => {
                    f(), rt(), qe();
                    var r = wi(),
                        {
                            EventEmitter: i
                        } = (Nt(), c(Ot)),
                        n = _i(),
                        o = vi(),
                        s = Ai()("mqtt-packet:parser");
                    t.exports = class e extends i {
                        constructor() {
                            super(), this.parser = this.constructor.parser
                        }
                        static parser(t) {
                            return this instanceof e ? (this.settings = t || {}, this._states = ["_parseHeader", "_parseLength", "_parsePayload", "_newPacket"], this._resetState(), this) : (new e).parser(t)
                        }
                        _resetState() {
                            s("_resetState: resetting packet, error, _list, and _stateCounter"), this.packet = new n, this.error = null, this._list = r(), this._stateCounter = 0
                        }
                        parse(e) {
                            for (this.error && this._resetState(), this._list.append(e), s("parse: current state: %s", this._states[this._stateCounter]);
                                (-1 !== this.packet.length || this._list.length > 0) && this[this._states[this._stateCounter]]() && !this.error;) this._stateCounter++, s("parse: state complete. _stateCounter is now: %d", this._stateCounter), s("parse: packet.length: %d, buffer list length: %d", this.packet.length, this._list.length), this._stateCounter >= this._states.length && (this._stateCounter = 0);
                            return s("parse: exited while loop. packet: %d, buffer list length: %d", this.packet.length, this._list.length), this._list.length
                        }
                        _parseHeader() {
                            let e = this._list.readUInt8(0),
                                t = e >> o.CMD_SHIFT;
                            this.packet.cmd = o.types[t];
                            let r = 15 & e,
                                i = o.requiredHeaderFlags[t];
                            return null != i && r !== i ? this._emitError(new Error(o.requiredHeaderFlagsErrors[t])) : (this.packet.retain = 0 != (e & o.RETAIN_MASK), this.packet.qos = e >> o.QOS_SHIFT & o.QOS_MASK, this.packet.qos > 2 ? this._emitError(new Error("Packet must not have both QoS bits set to 1")) : (this.packet.dup = 0 != (e & o.DUP_MASK), s("_parseHeader: packet: %o", this.packet), this._list.consume(1), !0))
                        }
                        _parseLength() {
                            let e = this._parseVarByteNum(!0);
                            return e && (this.packet.length = e.value, this._list.consume(e.bytes)), s("_parseLength %d", e.value), !!e
                        }
                        _parsePayload() {
                            s("_parsePayload: payload %O", this._list);
                            let e = !1;
                            if (0 === this.packet.length || this._list.length >= this.packet.length) {
                                switch (this._pos = 0, this.packet.cmd) {
                                    case "connect":
                                        this._parseConnect();
                                        break;
                                    case "connack":
                                        this._parseConnack();
                                        break;
                                    case "publish":
                                        this._parsePublish();
                                        break;
                                    case "puback":
                                    case "pubrec":
                                    case "pubrel":
                                    case "pubcomp":
                                        this._parseConfirmation();
                                        break;
                                    case "subscribe":
                                        this._parseSubscribe();
                                        break;
                                    case "suback":
                                        this._parseSuback();
                                        break;
                                    case "unsubscribe":
                                        this._parseUnsubscribe();
                                        break;
                                    case "unsuback":
                                        this._parseUnsuback();
                                        break;
                                    case "pingreq":
                                    case "pingresp":
                                        break;
                                    case "disconnect":
                                        this._parseDisconnect();
                                        break;
                                    case "auth":
                                        this._parseAuth();
                                        break;
                                    default:
                                        this._emitError(new Error("Not supported"))
                                }
                                e = !0
                            }
                            return s("_parsePayload complete result: %s", e), e
                        }
                        _parseConnect() {
                            s("_parseConnect");
                            let e, t, r, i, n = {},
                                a = this.packet,
                                l = this._parseString();
                            if (null === l) return this._emitError(new Error("Cannot parse protocolId"));
                            if ("MQTT" !== l && "MQIsdp" !== l) return this._emitError(new Error("Invalid protocolId"));
                            if (a.protocolId = l, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
                            if (a.protocolVersion = this._list.readUInt8(this._pos), a.protocolVersion >= 128 && (a.bridgeMode = !0, a.protocolVersion = a.protocolVersion - 128), 3 !== a.protocolVersion && 4 !== a.protocolVersion && 5 !== a.protocolVersion) return this._emitError(new Error("Invalid protocol version"));
                            if (this._pos++, this._pos >= this._list.length) return this._emitError(new Error("Packet too short"));
                            if (1 & this._list.readUInt8(this._pos)) return this._emitError(new Error("Connect flag bit 0 must be 0, but got 1"));
                            n.username = this._list.readUInt8(this._pos) & o.USERNAME_MASK, n.password = this._list.readUInt8(this._pos) & o.PASSWORD_MASK, n.will = this._list.readUInt8(this._pos) & o.WILL_FLAG_MASK;
                            let h = !!(this._list.readUInt8(this._pos) & o.WILL_RETAIN_MASK),
                                u = (this._list.readUInt8(this._pos) & o.WILL_QOS_MASK) >> o.WILL_QOS_SHIFT;
                            if (n.will) a.will = {}, a.will.retain = h, a.will.qos = u;
                            else {
                                if (h) return this._emitError(new Error("Will Retain Flag must be set to zero when Will Flag is set to 0"));
                                if (u) return this._emitError(new Error("Will QoS must be set to zero when Will Flag is set to 0"))
                            }
                            if (a.clean = 0 != (this._list.readUInt8(this._pos) & o.CLEAN_SESSION_MASK), this._pos++, a.keepalive = this._parseNum(), -1 === a.keepalive) return this._emitError(new Error("Packet too short"));
                            if (5 === a.protocolVersion) {
                                let e = this._parseProperties();
                                Object.getOwnPropertyNames(e).length && (a.properties = e)
                            }
                            let c = this._parseString();
                            if (null === c) return this._emitError(new Error("Packet too short"));
                            if (a.clientId = c, s("_parseConnect: packet.clientId: %s", a.clientId), n.will) {
                                if (5 === a.protocolVersion) {
                                    let e = this._parseProperties();
                                    Object.getOwnPropertyNames(e).length && (a.will.properties = e)
                                }
                                if (e = this._parseString(), null === e) return this._emitError(new Error("Cannot parse will topic"));
                                if (a.will.topic = e, s("_parseConnect: packet.will.topic: %s", a.will.topic), t = this._parseBuffer(), null === t) return this._emitError(new Error("Cannot parse will payload"));
                                a.will.payload = t, s("_parseConnect: packet.will.paylaod: %s", a.will.payload)
                            }
                            if (n.username) {
                                if (i = this._parseString(), null === i) return this._emitError(new Error("Cannot parse username"));
                                a.username = i, s("_parseConnect: packet.username: %s", a.username)
                            }
                            if (n.password) {
                                if (r = this._parseBuffer(), null === r) return this._emitError(new Error("Cannot parse password"));
                                a.password = r
                            }
                            return this.settings = a, s("_parseConnect: complete"), a
                        }
                        _parseConnack() {
                            s("_parseConnack");
                            let e = this.packet;
                            if (this._list.length < 1) return null;
                            let t = this._list.readUInt8(this._pos++);
                            if (t > 1) return this._emitError(new Error("Invalid connack flags, bits 7-1 must be set to 0"));
                            if (e.sessionPresent = !!(t & o.SESSIONPRESENT_MASK), 5 === this.settings.protocolVersion) this._list.length >= 2 ? e.reasonCode = this._list.readUInt8(this._pos++) : e.reasonCode = 0;
                            else {
                                if (this._list.length < 2) return null;
                                e.returnCode = this._list.readUInt8(this._pos++)
                            }
                            if (-1 === e.returnCode || -1 === e.reasonCode) return this._emitError(new Error("Cannot parse return code"));
                            if (5 === this.settings.protocolVersion) {
                                let t = this._parseProperties();
                                Object.getOwnPropertyNames(t).length && (e.properties = t)
                            }
                            s("_parseConnack: complete")
                        }
                        _parsePublish() {
                            s("_parsePublish");
                            let e = this.packet;
                            if (e.topic = this._parseString(), null === e.topic) return this._emitError(new Error("Cannot parse topic"));
                            if (!(e.qos > 0) || this._parseMessageId()) {
                                if (5 === this.settings.protocolVersion) {
                                    let t = this._parseProperties();
                                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                                }
                                e.payload = this._list.slice(this._pos, e.length), s("_parsePublish: payload from buffer list: %o", e.payload)
                            }
                        }
                        _parseSubscribe() {
                            s("_parseSubscribe");
                            let e, t, r, i, n, a, l, h = this.packet;
                            if (h.subscriptions = [], this._parseMessageId()) {
                                if (5 === this.settings.protocolVersion) {
                                    let e = this._parseProperties();
                                    Object.getOwnPropertyNames(e).length && (h.properties = e)
                                }
                                if (h.length <= 0) return this._emitError(new Error("Malformed subscribe, no payload specified"));
                                for (; this._pos < h.length;) {
                                    if (e = this._parseString(), null === e) return this._emitError(new Error("Cannot parse topic"));
                                    if (this._pos >= h.length) return this._emitError(new Error("Malformed Subscribe Payload"));
                                    if (t = this._parseByte(), 5 === this.settings.protocolVersion) {
                                        if (192 & t) return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-6 must be 0"))
                                    } else if (252 & t) return this._emitError(new Error("Invalid subscribe topic flag bits, bits 7-2 must be 0"));
                                    if (r = t & o.SUBSCRIBE_OPTIONS_QOS_MASK, r > 2) return this._emitError(new Error("Invalid subscribe QoS, must be <= 2"));
                                    if (a = 0 != (t >> o.SUBSCRIBE_OPTIONS_NL_SHIFT & o.SUBSCRIBE_OPTIONS_NL_MASK), n = 0 != (t >> o.SUBSCRIBE_OPTIONS_RAP_SHIFT & o.SUBSCRIBE_OPTIONS_RAP_MASK), i = t >> o.SUBSCRIBE_OPTIONS_RH_SHIFT & o.SUBSCRIBE_OPTIONS_RH_MASK, i > 2) return this._emitError(new Error("Invalid retain handling, must be <= 2"));
                                    l = {
                                        topic: e,
                                        qos: r
                                    }, 5 === this.settings.protocolVersion ? (l.nl = a, l.rap = n, l.rh = i) : this.settings.bridgeMode && (l.rh = 0, l.rap = !0, l.nl = !0), s("_parseSubscribe: push subscription `%s` to subscription", l), h.subscriptions.push(l)
                                }
                            }
                        }
                        _parseSuback() {
                            s("_parseSuback");
                            let e = this.packet;
                            if (this.packet.granted = [], this._parseMessageId()) {
                                if (5 === this.settings.protocolVersion) {
                                    let t = this._parseProperties();
                                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                                }
                                if (e.length <= 0) return this._emitError(new Error("Malformed suback, no payload specified"));
                                for (; this._pos < this.packet.length;) {
                                    let e = this._list.readUInt8(this._pos++);
                                    if (5 === this.settings.protocolVersion) {
                                        if (!o.MQTT5_SUBACK_CODES[e]) return this._emitError(new Error("Invalid suback code"))
                                    } else if (e > 2 && 128 !== e) return this._emitError(new Error("Invalid suback QoS, must be 0, 1, 2 or 128"));
                                    this.packet.granted.push(e)
                                }
                            }
                        }
                        _parseUnsubscribe() {
                            s("_parseUnsubscribe");
                            let e = this.packet;
                            if (e.unsubscriptions = [], this._parseMessageId()) {
                                if (5 === this.settings.protocolVersion) {
                                    let t = this._parseProperties();
                                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                                }
                                if (e.length <= 0) return this._emitError(new Error("Malformed unsubscribe, no payload specified"));
                                for (; this._pos < e.length;) {
                                    let t = this._parseString();
                                    if (null === t) return this._emitError(new Error("Cannot parse topic"));
                                    s("_parseUnsubscribe: push topic `%s` to unsubscriptions", t), e.unsubscriptions.push(t)
                                }
                            }
                        }
                        _parseUnsuback() {
                            s("_parseUnsuback");
                            let e = this.packet;
                            if (!this._parseMessageId()) return this._emitError(new Error("Cannot parse messageId"));
                            if ((3 === this.settings.protocolVersion || 4 === this.settings.protocolVersion) && 2 !== e.length) return this._emitError(new Error("Malformed unsuback, payload length must be 2"));
                            if (e.length <= 0) return this._emitError(new Error("Malformed unsuback, no payload specified"));
                            if (5 === this.settings.protocolVersion) {
                                let t = this._parseProperties();
                                for (Object.getOwnPropertyNames(t).length && (e.properties = t), e.granted = []; this._pos < this.packet.length;) {
                                    let e = this._list.readUInt8(this._pos++);
                                    if (!o.MQTT5_UNSUBACK_CODES[e]) return this._emitError(new Error("Invalid unsuback code"));
                                    this.packet.granted.push(e)
                                }
                            }
                        }
                        _parseConfirmation() {
                            s("_parseConfirmation: packet.cmd: `%s`", this.packet.cmd);
                            let e = this.packet;
                            if (this._parseMessageId(), 5 === this.settings.protocolVersion) {
                                if (e.length > 2) {
                                    switch (e.reasonCode = this._parseByte(), this.packet.cmd) {
                                        case "puback":
                                        case "pubrec":
                                            if (!o.MQTT5_PUBACK_PUBREC_CODES[e.reasonCode]) return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"));
                                            break;
                                        case "pubrel":
                                        case "pubcomp":
                                            if (!o.MQTT5_PUBREL_PUBCOMP_CODES[e.reasonCode]) return this._emitError(new Error("Invalid " + this.packet.cmd + " reason code"))
                                    }
                                    s("_parseConfirmation: packet.reasonCode `%d`", e.reasonCode)
                                } else e.reasonCode = 0;
                                if (e.length > 3) {
                                    let t = this._parseProperties();
                                    Object.getOwnPropertyNames(t).length && (e.properties = t)
                                }
                            }
                            return !0
                        }
                        _parseDisconnect() {
                            let e = this.packet;
                            if (s("_parseDisconnect"), 5 === this.settings.protocolVersion) {
                                this._list.length > 0 ? (e.reasonCode = this._parseByte(), o.MQTT5_DISCONNECT_CODES[e.reasonCode] || this._emitError(new Error("Invalid disconnect reason code"))) : e.reasonCode = 0;
                                let t = this._parseProperties();
                                Object.getOwnPropertyNames(t).length && (e.properties = t)
                            }
                            return s("_parseDisconnect result: true"), !0
                        }
                        _parseAuth() {
                            s("_parseAuth");
                            let e = this.packet;
                            if (5 !== this.settings.protocolVersion) return this._emitError(new Error("Not supported auth packet for this version MQTT"));
                            if (e.reasonCode = this._parseByte(), !o.MQTT5_AUTH_CODES[e.reasonCode]) return this._emitError(new Error("Invalid auth reason code"));
                            let t = this._parseProperties();
                            return Object.getOwnPropertyNames(t).length && (e.properties = t), s("_parseAuth: result: true"), !0
                        }
                        _parseMessageId() {
                            let e = this.packet;
                            return e.messageId = this._parseNum(), null === e.messageId ? (this._emitError(new Error("Cannot parse messageId")), !1) : (s("_parseMessageId: packet.messageId %d", e.messageId), !0)
                        }
                        _parseString(e) {
                            let t = this._parseNum(),
                                r = t + this._pos;
                            if (-1 === t || r > this._list.length || r > this.packet.length) return null;
                            let i = this._list.toString("utf8", this._pos, r);
                            return this._pos += t, s("_parseString: result: %s", i), i
                        }
                        _parseStringPair() {
                            return s("_parseStringPair"), {
                                name: this._parseString(),
                                value: this._parseString()
                            }
                        }
                        _parseBuffer() {
                            let e = this._parseNum(),
                                t = e + this._pos;
                            if (-1 === e || t > this._list.length || t > this.packet.length) return null;
                            let r = this._list.slice(this._pos, t);
                            return this._pos += e, s("_parseBuffer: result: %o", r), r
                        }
                        _parseNum() {
                            if (this._list.length - this._pos < 2) return -1;
                            let e = this._list.readUInt16BE(this._pos);
                            return this._pos += 2, s("_parseNum: result: %s", e), e
                        }
                        _parse4ByteNum() {
                            if (this._list.length - this._pos < 4) return -1;
                            let e = this._list.readUInt32BE(this._pos);
                            return this._pos += 4, s("_parse4ByteNum: result: %s", e), e
                        }
                        _parseVarByteNum(e) {
                            s("_parseVarByteNum");
                            let t, r = 0,
                                i = 1,
                                n = 0,
                                a = !1,
                                l = this._pos ? this._pos : 0;
                            for (; r < 4 && l + r < this._list.length;) {
                                if (t = this._list.readUInt8(l + r++), n += i * (t & o.VARBYTEINT_MASK), i *= 128, !(t & o.VARBYTEINT_FIN_MASK)) {
                                    a = !0;
                                    break
                                }
                                if (this._list.length <= r) break
                            }
                            return !a && 4 === r && this._list.length >= r && this._emitError(new Error("Invalid variable byte integer")), l && (this._pos += r), a = !!a && (e ? {
                                bytes: r,
                                value: n
                            } : n), s("_parseVarByteNum: result: %o", a), a
                        }
                        _parseByte() {
                            let e;
                            return this._pos < this._list.length && (e = this._list.readUInt8(this._pos), this._pos++), s("_parseByte: result: %o", e), e
                        }
                        _parseByType(e) {
                            switch (s("_parseByType: type: %s", e), e) {
                                case "byte":
                                    return 0 !== this._parseByte();
                                case "int8":
                                    return this._parseByte();
                                case "int16":
                                    return this._parseNum();
                                case "int32":
                                    return this._parse4ByteNum();
                                case "var":
                                    return this._parseVarByteNum();
                                case "string":
                                    return this._parseString();
                                case "pair":
                                    return this._parseStringPair();
                                case "binary":
                                    return this._parseBuffer()
                            }
                        }
                        _parseProperties() {
                            s("_parseProperties");
                            let e = this._parseVarByteNum(),
                                t = this._pos + e,
                                r = {};
                            for (; this._pos < t;) {
                                let e = this._parseByte();
                                if (!e) return this._emitError(new Error("Cannot parse property code type")), !1;
                                let t = o.propertiesCodes[e];
                                if (!t) return this._emitError(new Error("Unknown property")), !1;
                                if ("userProperties" !== t) r[t] ? (Array.isArray(r[t]) || (r[t] = [r[t]]), r[t].push(this._parseByType(o.propertiesTypes[t]))) : r[t] = this._parseByType(o.propertiesTypes[t]);
                                else {
                                    r[t] || (r[t] = Object.create(null));
                                    let e = this._parseByType(o.propertiesTypes[t]);
                                    if (r[t][e.name])
                                        if (Array.isArray(r[t][e.name])) r[t][e.name].push(e.value);
                                        else {
                                            let i = r[t][e.name];
                                            r[t][e.name] = [i], r[t][e.name].push(e.value)
                                        }
                                    else r[t][e.name] = e.value
                                }
                            }
                            return r
                        }
                        _newPacket() {
                            return s("_newPacket"), this.packet && (this._list.consume(this.packet.length), s("_newPacket: parser emit packet: packet.cmd: %s, packet.payload: %s, packet.length: %d", this.packet.cmd, this.packet.payload, this.packet.length), this.emit("packet", this.packet)), s("_newPacket: new packet"), this.packet = new n, this._pos = 0, !0
                        }
                        _emitError(e) {
                            s("_emitError", e), this.error = e, this.emit("error", e)
                        }
                    }
                })),
                ki = h(((e, t) => {
                    f(), rt(), qe();
                    var {
                        Buffer: r
                    } = (tt(), c(Ve)), i = {}, n = r.isBuffer(r.from([1, 2]).subarray(0, 1));

                    function o(e) {
                        let t = r.allocUnsafe(2);
                        return t.writeUInt8(e >> 8, 0), t.writeUInt8(255 & e, 1), t
                    }
                    t.exports = {
                        cache: i,
                        generateCache: function() {
                            for (let e = 0; e < 65536; e++) i[e] = o(e)
                        },
                        generateNumber: o,
                        genBufVariableByteInt: function(e) {
                            let t = 0,
                                i = 0,
                                o = r.allocUnsafe(4);
                            do {
                                t = e % 128 | 0, (e = e / 128 | 0) > 0 && (t |= 128), o.writeUInt8(t, i++)
                            } while (e > 0 && i < 4);
                            return e > 0 && (i = 0), n ? o.subarray(0, i) : o.slice(0, i)
                        },
                        generate4ByteBuffer: function(e) {
                            let t = r.allocUnsafe(4);
                            return t.writeUInt32BE(e, 0), t
                        }
                    }
                })),
                Ti = h(((e, t) => {
                    f(), rt(), qe(), typeof p > "u" || !p.version || 0 === p.version.indexOf("v0.") || 0 === p.version.indexOf("v1.") && 0 !== p.version.indexOf("v1.8.") ? t.exports = {
                        nextTick: function(e, t, r, i) {
                            if ("function" != typeof e) throw new TypeError('"callback" argument must be a function');
                            var n, o, s = arguments.length;
                            switch (s) {
                                case 0:
                                case 1:
                                    return p.nextTick(e);
                                case 2:
                                    return p.nextTick((function() {
                                        e.call(null, t)
                                    }));
                                case 3:
                                    return p.nextTick((function() {
                                        e.call(null, t, r)
                                    }));
                                case 4:
                                    return p.nextTick((function() {
                                        e.call(null, t, r, i)
                                    }));
                                default:
                                    for (n = new Array(s - 1), o = 0; o < n.length;) n[o++] = arguments[o];
                                    return p.nextTick((function() {
                                        e.apply(null, n)
                                    }))
                            }
                        }
                    } : t.exports = p
                })),
                Ci = h(((e, t) => {
                    f(), rt(), qe();
                    var r = vi(),
                        {
                            Buffer: i
                        } = (tt(), c(Ve)),
                        n = i.allocUnsafe(0),
                        o = i.from([0]),
                        s = ki(),
                        a = Ti().nextTick,
                        l = Ai()("mqtt-packet:writeToStream"),
                        h = s.cache,
                        u = s.generateNumber,
                        p = s.generateCache,
                        d = s.genBufVariableByteInt,
                        g = s.generate4ByteBuffer,
                        b = A,
                        y = !0;

                    function m(e, t, s) {
                        switch (l("generate called"), t.cork && (t.cork(), a(w, t)), y && (y = !1, p()), l("generate: packet.cmd: %s", e.cmd), e.cmd) {
                            case "connect":
                                return function(e, t, n) {
                                    let o = e || {},
                                        s = o.protocolId || "MQTT",
                                        a = o.protocolVersion || 4,
                                        l = o.will,
                                        h = o.clean,
                                        u = o.keepalive || 0,
                                        c = o.clientId || "",
                                        f = o.username,
                                        p = o.password,
                                        d = o.properties;
                                    void 0 === h && (h = !0);
                                    let g, y, m = 0;
                                    if (!s || "string" != typeof s && !i.isBuffer(s)) return t.destroy(new Error("Invalid protocolId")), !1;
                                    if (m += s.length + 2, 3 !== a && 4 !== a && 5 !== a) return t.destroy(new Error("Invalid protocol version")), !1;
                                    if (m += 1, ("string" == typeof c || i.isBuffer(c)) && (c || a >= 4) && (c || h)) m += i.byteLength(c) + 2;
                                    else {
                                        if (a < 4) return t.destroy(new Error("clientId must be supplied before 3.1.1")), !1;
                                        if (1 * h == 0) return t.destroy(new Error("clientId must be given if cleanSession set to 0")), !1
                                    }
                                    if ("number" != typeof u || u < 0 || u > 65535 || u % 1 != 0) return t.destroy(new Error("Invalid keepalive")), !1;
                                    if (m += 2, m += 1, 5 === a) {
                                        if (g = T(t, d), !g) return !1;
                                        m += g.length
                                    }
                                    if (l) {
                                        if ("object" != typeof l) return t.destroy(new Error("Invalid will")), !1;
                                        if (!l.topic || "string" != typeof l.topic) return t.destroy(new Error("Invalid will topic")), !1;
                                        if (m += i.byteLength(l.topic) + 2, m += 2, l.payload) {
                                            if (!(l.payload.length >= 0)) return t.destroy(new Error("Invalid will payload")), !1;
                                            "string" == typeof l.payload ? m += i.byteLength(l.payload) : m += l.payload.length
                                        }
                                        if (y = {}, 5 === a) {
                                            if (y = T(t, l.properties), !y) return !1;
                                            m += y.length
                                        }
                                    }
                                    let w = !1;
                                    if (null != f) {
                                        if (!B(f)) return t.destroy(new Error("Invalid username")), !1;
                                        w = !0, m += i.byteLength(f) + 2
                                    }
                                    if (null != p) {
                                        if (!w) return t.destroy(new Error("Username is required to use password")), !1;
                                        if (!B(p)) return t.destroy(new Error("Invalid password")), !1;
                                        m += P(p) + 2
                                    }
                                    t.write(r.CONNECT_HEADER), v(t, m), k(t, s), o.bridgeMode && (a += 128), t.write(131 === a ? r.VERSION131 : 132 === a ? r.VERSION132 : 4 === a ? r.VERSION4 : 5 === a ? r.VERSION5 : r.VERSION3);
                                    let _ = 0;
                                    return _ |= null != f ? r.USERNAME_MASK : 0, _ |= null != p ? r.PASSWORD_MASK : 0, _ |= l && l.retain ? r.WILL_RETAIN_MASK : 0, _ |= l && l.qos ? l.qos << r.WILL_QOS_SHIFT : 0, _ |= l ? r.WILL_FLAG_MASK : 0, _ |= h ? r.CLEAN_SESSION_MASK : 0, t.write(i.from([_])), b(t, u), 5 === a && g.write(), k(t, c), l && (5 === a && y.write(), E(t, l.topic), k(t, l.payload)), null != f && k(t, f), null != p && k(t, p), !0
                                }(e, t);
                            case "connack":
                                return function(e, t, n) {
                                    let s = n ? n.protocolVersion : 4,
                                        a = e || {},
                                        l = 5 === s ? a.reasonCode : a.returnCode,
                                        h = a.properties,
                                        u = 2;
                                    if ("number" != typeof l) return t.destroy(new Error("Invalid return code")), !1;
                                    let c = null;
                                    if (5 === s) {
                                        if (c = T(t, h), !c) return !1;
                                        u += c.length
                                    }
                                    return t.write(r.CONNACK_HEADER), v(t, u), t.write(a.sessionPresent ? r.SESSIONPRESENT_HEADER : o), t.write(i.from([l])), c?.write(), !0
                                }(e, t, s);
                            case "publish":
                                return function(e, t, o) {
                                    l("publish: packet: %o", e);
                                    let s = o ? o.protocolVersion : 4,
                                        a = e || {},
                                        h = a.qos || 0,
                                        u = a.retain ? r.RETAIN_MASK : 0,
                                        c = a.topic,
                                        f = a.payload || n,
                                        p = a.messageId,
                                        d = a.properties,
                                        g = 0;
                                    if ("string" == typeof c) g += i.byteLength(c) + 2;
                                    else {
                                        if (!i.isBuffer(c)) return t.destroy(new Error("Invalid topic")), !1;
                                        g += c.length + 2
                                    }
                                    if (i.isBuffer(f) ? g += f.length : g += i.byteLength(f), h && "number" != typeof p) return t.destroy(new Error("Invalid messageId")), !1;
                                    h && (g += 2);
                                    let y = null;
                                    if (5 === s) {
                                        if (y = T(t, d), !y) return !1;
                                        g += y.length
                                    }
                                    return t.write(r.PUBLISH_HEADER[h][a.dup ? 1 : 0][u ? 1 : 0]), v(t, g), b(t, P(c)), t.write(c), h > 0 && b(t, p), y?.write(), l("publish: payload: %o", f), t.write(f)
                                }(e, t, s);
                            case "puback":
                            case "pubrec":
                            case "pubrel":
                            case "pubcomp":
                                return function(e, t, n) {
                                    let o = n ? n.protocolVersion : 4,
                                        s = e || {},
                                        a = s.cmd || "puback",
                                        l = s.messageId,
                                        h = s.dup && "pubrel" === a ? r.DUP_MASK : 0,
                                        u = 0,
                                        c = s.reasonCode,
                                        f = s.properties,
                                        p = 5 === o ? 3 : 2;
                                    if ("pubrel" === a && (u = 1), "number" != typeof l) return t.destroy(new Error("Invalid messageId")), !1;
                                    let d = null;
                                    if (5 === o && "object" == typeof f) {
                                        if (d = C(t, f, n, p), !d) return !1;
                                        p += d.length
                                    }
                                    return t.write(r.ACKS[a][u][h][0]), 3 === p && (p += 0 !== c ? 1 : -1), v(t, p), b(t, l), 5 === o && 2 !== p && t.write(i.from([c])), null !== d ? d.write() : 4 === p && t.write(i.from([0])), !0
                                }(e, t, s);
                            case "subscribe":
                                return function(e, t, n) {
                                    l("subscribe: packet: ");
                                    let o = n ? n.protocolVersion : 4,
                                        s = e || {},
                                        a = s.dup ? r.DUP_MASK : 0,
                                        h = s.messageId,
                                        u = s.subscriptions,
                                        c = s.properties,
                                        f = 0;
                                    if ("number" != typeof h) return t.destroy(new Error("Invalid messageId")), !1;
                                    f += 2;
                                    let p = null;
                                    if (5 === o) {
                                        if (p = T(t, c), !p) return !1;
                                        f += p.length
                                    }
                                    if ("object" != typeof u || !u.length) return t.destroy(new Error("Invalid subscriptions")), !1;
                                    for (let e = 0; e < u.length; e += 1) {
                                        let r = u[e].topic,
                                            n = u[e].qos;
                                        if ("string" != typeof r) return t.destroy(new Error("Invalid subscriptions - invalid topic")), !1;
                                        if ("number" != typeof n) return t.destroy(new Error("Invalid subscriptions - invalid qos")), !1;
                                        if (5 === o) {
                                            if ("boolean" != typeof(u[e].nl || !1)) return t.destroy(new Error("Invalid subscriptions - invalid No Local")), !1;
                                            if ("boolean" != typeof(u[e].rap || !1)) return t.destroy(new Error("Invalid subscriptions - invalid Retain as Published")), !1;
                                            let r = u[e].rh || 0;
                                            if ("number" != typeof r || r > 2) return t.destroy(new Error("Invalid subscriptions - invalid Retain Handling")), !1
                                        }
                                        f += i.byteLength(r) + 2 + 1
                                    }
                                    l("subscribe: writing to stream: %o", r.SUBSCRIBE_HEADER), t.write(r.SUBSCRIBE_HEADER[1][a ? 1 : 0][0]), v(t, f), b(t, h), null !== p && p.write();
                                    let d = !0;
                                    for (let e of u) {
                                        let n, s = e.topic,
                                            a = e.qos,
                                            l = +e.nl,
                                            h = +e.rap,
                                            u = e.rh;
                                        E(t, s), n = r.SUBSCRIBE_OPTIONS_QOS[a], 5 === o && (n |= l ? r.SUBSCRIBE_OPTIONS_NL : 0, n |= h ? r.SUBSCRIBE_OPTIONS_RAP : 0, n |= u ? r.SUBSCRIBE_OPTIONS_RH[u] : 0), d = t.write(i.from([n]))
                                    }
                                    return d
                                }(e, t, s);
                            case "suback":
                                return function(e, t, n) {
                                    let o = n ? n.protocolVersion : 4,
                                        s = e || {},
                                        a = s.messageId,
                                        l = s.granted,
                                        h = s.properties,
                                        u = 0;
                                    if ("number" != typeof a) return t.destroy(new Error("Invalid messageId")), !1;
                                    if (u += 2, "object" != typeof l || !l.length) return t.destroy(new Error("Invalid qos vector")), !1;
                                    for (let e = 0; e < l.length; e += 1) {
                                        if ("number" != typeof l[e]) return t.destroy(new Error("Invalid qos vector")), !1;
                                        u += 1
                                    }
                                    let c = null;
                                    if (5 === o) {
                                        if (c = C(t, h, n, u), !c) return !1;
                                        u += c.length
                                    }
                                    return t.write(r.SUBACK_HEADER), v(t, u), b(t, a), null !== c && c.write(), t.write(i.from(l))
                                }(e, t, s);
                            case "unsubscribe":
                                return function(e, t, n) {
                                    let o = n ? n.protocolVersion : 4,
                                        s = e || {},
                                        a = s.messageId,
                                        l = s.dup ? r.DUP_MASK : 0,
                                        h = s.unsubscriptions,
                                        u = s.properties,
                                        c = 0;
                                    if ("number" != typeof a) return t.destroy(new Error("Invalid messageId")), !1;
                                    if (c += 2, "object" != typeof h || !h.length) return t.destroy(new Error("Invalid unsubscriptions")), !1;
                                    for (let e = 0; e < h.length; e += 1) {
                                        if ("string" != typeof h[e]) return t.destroy(new Error("Invalid unsubscriptions")), !1;
                                        c += i.byteLength(h[e]) + 2
                                    }
                                    let f = null;
                                    if (5 === o) {
                                        if (f = T(t, u), !f) return !1;
                                        c += f.length
                                    }
                                    t.write(r.UNSUBSCRIBE_HEADER[1][l ? 1 : 0][0]), v(t, c), b(t, a), null !== f && f.write();
                                    let p = !0;
                                    for (let e = 0; e < h.length; e++) p = E(t, h[e]);
                                    return p
                                }(e, t, s);
                            case "unsuback":
                                return function(e, t, n) {
                                    let o = n ? n.protocolVersion : 4,
                                        s = e || {},
                                        a = s.messageId,
                                        l = s.dup ? r.DUP_MASK : 0,
                                        h = s.granted,
                                        u = s.properties,
                                        c = s.cmd,
                                        f = 2;
                                    if ("number" != typeof a) return t.destroy(new Error("Invalid messageId")), !1;
                                    if (5 === o) {
                                        if ("object" != typeof h || !h.length) return t.destroy(new Error("Invalid qos vector")), !1;
                                        for (let e = 0; e < h.length; e += 1) {
                                            if ("number" != typeof h[e]) return t.destroy(new Error("Invalid qos vector")), !1;
                                            f += 1
                                        }
                                    }
                                    let p = null;
                                    if (5 === o) {
                                        if (p = C(t, u, n, f), !p) return !1;
                                        f += p.length
                                    }
                                    return t.write(r.ACKS[c][0][l][0]), v(t, f), b(t, a), null !== p && p.write(), 5 === o && t.write(i.from(h)), !0
                                }(e, t, s);
                            case "pingreq":
                            case "pingresp":
                                return function(e, t, i) {
                                    return t.write(r.EMPTY[e.cmd])
                                }(e, t);
                            case "disconnect":
                                return function(e, t, n) {
                                    let o = n ? n.protocolVersion : 4,
                                        s = e || {},
                                        a = s.reasonCode,
                                        l = s.properties,
                                        h = 5 === o ? 1 : 0,
                                        u = null;
                                    if (5 === o) {
                                        if (u = C(t, l, n, h), !u) return !1;
                                        h += u.length
                                    }
                                    return t.write(i.from([r.codes.disconnect << 4])), v(t, h), 5 === o && t.write(i.from([a])), null !== u && u.write(), !0
                                }(e, t, s);
                            case "auth":
                                return function(e, t, n) {
                                    let o = n ? n.protocolVersion : 4,
                                        s = e || {},
                                        a = s.reasonCode,
                                        l = s.properties,
                                        h = 5 === o ? 1 : 0;
                                    5 !== o && t.destroy(new Error("Invalid mqtt version for auth packet"));
                                    let u = C(t, l, n, h);
                                    return !!u && (h += u.length, t.write(i.from([r.codes.auth << 4])), v(t, h), t.write(i.from([a])), null !== u && u.write(), !0)
                                }(e, t, s);
                            default:
                                return t.destroy(new Error("Unknown command")), !1
                        }
                    }

                    function w(e) {
                        e.uncork()
                    }
                    Object.defineProperty(m, "cacheNumbers", {
                        get: () => b === A,
                        set(e) {
                            e ? ((!h || 0 === Object.keys(h).length) && (y = !0), b = A) : (y = !1, b = I)
                        }
                    });
                    var _ = {};

                    function v(e, t) {
                        if (t > r.VARBYTEINT_MAX) return e.destroy(new Error(`Invalid variable byte integer: ${t}`)), !1;
                        let i = _[t];
                        return i || (i = d(t), t < 16384 && (_[t] = i)), l("writeVarByteInt: writing to stream: %o", i), e.write(i)
                    }

                    function E(e, t) {
                        let r = i.byteLength(t);
                        return b(e, r), l("writeString: %s", t), e.write(t, "utf8")
                    }

                    function S(e, t, r) {
                        E(e, t), E(e, r)
                    }

                    function A(e, t) {
                        return l("writeNumberCached: number: %d", t), l("writeNumberCached: %o", h[t]), e.write(h[t])
                    }

                    function I(e, t) {
                        let r = u(t);
                        return l("writeNumberGenerated: %o", r), e.write(r)
                    }

                    function k(e, t) {
                        "string" == typeof t ? E(e, t) : t ? (b(e, t.length), e.write(t)) : b(e, 0)
                    }

                    function T(e, t) {
                        if ("object" != typeof t || null != t.length) return {
                            length: 1,
                            write() {
                                O(e, {}, 0)
                            }
                        };
                        let n = 0;

                        function o(t, n) {
                            let o = 0;
                            switch (r.propertiesTypes[t]) {
                                case "byte":
                                    if ("boolean" != typeof n) return e.destroy(new Error(`Invalid ${t}: ${n}`)), !1;
                                    o += 2;
                                    break;
                                case "int8":
                                    if ("number" != typeof n || n < 0 || n > 255) return e.destroy(new Error(`Invalid ${t}: ${n}`)), !1;
                                    o += 2;
                                    break;
                                case "binary":
                                    if (n && null === n) return e.destroy(new Error(`Invalid ${t}: ${n}`)), !1;
                                    o += 1 + i.byteLength(n) + 2;
                                    break;
                                case "int16":
                                    if ("number" != typeof n || n < 0 || n > 65535) return e.destroy(new Error(`Invalid ${t}: ${n}`)), !1;
                                    o += 3;
                                    break;
                                case "int32":
                                    if ("number" != typeof n || n < 0 || n > 4294967295) return e.destroy(new Error(`Invalid ${t}: ${n}`)), !1;
                                    o += 5;
                                    break;
                                case "var":
                                    if ("number" != typeof n || n < 0 || n > 268435455) return e.destroy(new Error(`Invalid ${t}: ${n}`)), !1;
                                    o += 1 + i.byteLength(d(n));
                                    break;
                                case "string":
                                    if ("string" != typeof n) return e.destroy(new Error(`Invalid ${t}: ${n}`)), !1;
                                    o += 3 + i.byteLength(n.toString());
                                    break;
                                case "pair":
                                    if ("object" != typeof n) return e.destroy(new Error(`Invalid ${t}: ${n}`)), !1;
                                    o += Object.getOwnPropertyNames(n).reduce(((e, t) => {
                                        let r = n[t];
                                        return Array.isArray(r) ? e += r.reduce(((e, r) => e + (3 + i.byteLength(t.toString()) + 2 + i.byteLength(r.toString()))), 0) : e += 3 + i.byteLength(t.toString()) + 2 + i.byteLength(n[t].toString()), e
                                    }), 0);
                                    break;
                                default:
                                    return e.destroy(new Error(`Invalid property ${t}: ${n}`)), !1
                            }
                            return o
                        }
                        if (t)
                            for (let e in t) {
                                let r = 0,
                                    i = 0,
                                    s = t[e];
                                if (Array.isArray(s))
                                    for (let t = 0; t < s.length; t++) {
                                        if (i = o(e, s[t]), !i) return !1;
                                        r += i
                                    } else {
                                        if (i = o(e, s), !i) return !1;
                                        r = i
                                    }
                                if (!r) return !1;
                                n += r
                            }
                        return {
                            length: i.byteLength(d(n)) + n,
                            write() {
                                O(e, t, n)
                            }
                        }
                    }

                    function C(e, t, r, i) {
                        let n = ["reasonString", "userProperties"],
                            o = r && r.properties && r.properties.maximumPacketSize ? r.properties.maximumPacketSize : 0,
                            s = T(e, t);
                        if (o)
                            for (; i + s.length > o;) {
                                let r = n.shift();
                                if (!r || !t[r]) return !1;
                                delete t[r], s = T(e, t)
                            }
                        return s
                    }

                    function R(e, t, n) {
                        switch (r.propertiesTypes[t]) {
                            case "byte":
                                e.write(i.from([r.properties[t]])), e.write(i.from([+n]));
                                break;
                            case "int8":
                                e.write(i.from([r.properties[t]])), e.write(i.from([n]));
                                break;
                            case "binary":
                                e.write(i.from([r.properties[t]])), k(e, n);
                                break;
                            case "int16":
                                e.write(i.from([r.properties[t]])), b(e, n);
                                break;
                            case "int32":
                                e.write(i.from([r.properties[t]])),
                                    function(e, t) {
                                        let r = g(t);
                                        l("write4ByteNumber: %o", r), e.write(r)
                                    }(e, n);
                                break;
                            case "var":
                                e.write(i.from([r.properties[t]])), v(e, n);
                                break;
                            case "string":
                                e.write(i.from([r.properties[t]])), E(e, n);
                                break;
                            case "pair":
                                Object.getOwnPropertyNames(n).forEach((o => {
                                    let s = n[o];
                                    Array.isArray(s) ? s.forEach((n => {
                                        e.write(i.from([r.properties[t]])), S(e, o.toString(), n.toString())
                                    })) : (e.write(i.from([r.properties[t]])), S(e, o.toString(), s.toString()))
                                }));
                                break;
                            default:
                                return e.destroy(new Error(`Invalid property ${t} value: ${n}`)), !1
                        }
                    }

                    function O(e, t, r) {
                        v(e, r);
                        for (let r in t)
                            if (Object.prototype.hasOwnProperty.call(t, r) && null !== t[r]) {
                                let i = t[r];
                                if (Array.isArray(i))
                                    for (let t = 0; t < i.length; t++) R(e, r, i[t]);
                                else R(e, r, i)
                            }
                    }

                    function P(e) {
                        return e ? e instanceof i ? e.length : i.byteLength(e) : 0
                    }

                    function B(e) {
                        return "string" == typeof e || e instanceof i
                    }
                    t.exports = m
                })),
                Ri = h(((e, t) => {
                    f(), rt(), qe();
                    var r = Ci(),
                        {
                            EventEmitter: i
                        } = (Nt(), c(Ot)),
                        {
                            Buffer: n
                        } = (tt(), c(Ve)),
                        o = class extends i {
                            constructor() {
                                super(), this._array = new Array(20), this._i = 0
                            }
                            write(e) {
                                return this._array[this._i++] = e, !0
                            }
                            concat() {
                                let e, t = 0,
                                    r = new Array(this._array.length),
                                    i = this._array,
                                    o = 0;
                                for (e = 0; e < i.length && void 0 !== i[e]; e++) "string" != typeof i[e] ? r[e] = i[e].length : r[e] = n.byteLength(i[e]), t += r[e];
                                let s = n.allocUnsafe(t);
                                for (e = 0; e < i.length && void 0 !== i[e]; e++) "string" != typeof i[e] ? (i[e].copy(s, o), o += r[e]) : (s.write(i[e], o), o += r[e]);
                                return s
                            }
                            destroy(e) {
                                e && this.emit("error", e)
                            }
                        };
                    t.exports = function(e, t) {
                        let i = new o;
                        return r(e, i, t), i.concat()
                    }
                })),
                Oi = h((e => {
                    f(), rt(), qe(), e.parser = Ii().parser, e.generate = Ri(), e.writeToStream = Ci()
                })),
                Pi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = class {
                        constructor() {
                            this.nextId = Math.max(1, Math.floor(65535 * Math.random()))
                        }
                        allocate() {
                            let e = this.nextId++;
                            return 65536 === this.nextId && (this.nextId = 1), e
                        }
                        getLastAllocated() {
                            return 1 === this.nextId ? 65535 : this.nextId - 1
                        }
                        register(e) {
                            return !0
                        }
                        deallocate(e) {}
                        clear() {}
                    }
                })),
                Bi = h(((e, t) => {
                    function r(e, t, r) {
                        var i = this;
                        this._callback = e, this._args = r, this._interval = setInterval(e, t, this._args), this.reschedule = function(e) {
                            e || (e = i._interval), i._interval && clearInterval(i._interval), i._interval = setInterval(i._callback, e, i._args)
                        }, this.clear = function() {
                            i._interval && (clearInterval(i._interval), i._interval = void 0)
                        }, this.destroy = function() {
                            i._interval && clearInterval(i._interval), i._callback = void 0, i._interval = void 0, i._args = void 0
                        }
                    }
                    f(), rt(), qe(), t.exports = function() {
                        if ("function" != typeof arguments[0]) throw new Error("callback needed");
                        if ("number" != typeof arguments[1]) throw new Error("interval needed");
                        var e;
                        if (arguments.length > 0) {
                            e = new Array(arguments.length - 2);
                            for (var t = 0; t < e.length; t++) e[t] = arguments[t + 2]
                        }
                        return new r(arguments[0], arguments[1], e)
                    }
                })),
                xi = h(((e, t) => {
                    function r(e) {
                        return e instanceof Xe ? Xe.from(e) : new e.constructor(e.buffer.slice(), e.byteOffset, e.length)
                    }
                    f(), rt(), qe(), t.exports = function(e) {
                        return (e = e || {}).circles ? function(e) {
                            var t = [],
                                i = [];
                            return e.proto ? function e(o) {
                                if ("object" != typeof o || null === o) return o;
                                if (o instanceof Date) return new Date(o);
                                if (Array.isArray(o)) return n(o, e);
                                if (o instanceof Map) return new Map(n(Array.from(o), e));
                                if (o instanceof Set) return new Set(n(Array.from(o), e));
                                var s = {};
                                for (var a in t.push(o), i.push(s), o) {
                                    var l = o[a];
                                    if ("object" != typeof l || null === l) s[a] = l;
                                    else if (l instanceof Date) s[a] = new Date(l);
                                    else if (l instanceof Map) s[a] = new Map(n(Array.from(l), e));
                                    else if (l instanceof Set) s[a] = new Set(n(Array.from(l), e));
                                    else if (ArrayBuffer.isView(l)) s[a] = r(l);
                                    else {
                                        var h = t.indexOf(l);
                                        s[a] = -1 !== h ? i[h] : e(l)
                                    }
                                }
                                return t.pop(), i.pop(), s
                            } : function e(o) {
                                if ("object" != typeof o || null === o) return o;
                                if (o instanceof Date) return new Date(o);
                                if (Array.isArray(o)) return n(o, e);
                                if (o instanceof Map) return new Map(n(Array.from(o), e));
                                if (o instanceof Set) return new Set(n(Array.from(o), e));
                                var s = {};
                                for (var a in t.push(o), i.push(s), o)
                                    if (!1 !== Object.hasOwnProperty.call(o, a)) {
                                        var l = o[a];
                                        if ("object" != typeof l || null === l) s[a] = l;
                                        else if (l instanceof Date) s[a] = new Date(l);
                                        else if (l instanceof Map) s[a] = new Map(n(Array.from(l), e));
                                        else if (l instanceof Set) s[a] = new Set(n(Array.from(l), e));
                                        else if (ArrayBuffer.isView(l)) s[a] = r(l);
                                        else {
                                            var h = t.indexOf(l);
                                            s[a] = -1 !== h ? i[h] : e(l)
                                        }
                                    } return t.pop(), i.pop(), s
                            };

                            function n(e, n) {
                                for (var o = Object.keys(e), s = new Array(o.length), a = 0; a < o.length; a++) {
                                    var l = o[a],
                                        h = e[l];
                                    if ("object" != typeof h || null === h) s[l] = h;
                                    else if (h instanceof Date) s[l] = new Date(h);
                                    else if (ArrayBuffer.isView(h)) s[l] = r(h);
                                    else {
                                        var u = t.indexOf(h);
                                        s[l] = -1 !== u ? i[u] : n(h)
                                    }
                                }
                                return s
                            }
                        }(e) : e.proto ? function e(i) {
                            if ("object" != typeof i || null === i) return i;
                            if (i instanceof Date) return new Date(i);
                            if (Array.isArray(i)) return t(i, e);
                            if (i instanceof Map) return new Map(t(Array.from(i), e));
                            if (i instanceof Set) return new Set(t(Array.from(i), e));
                            var n = {};
                            for (var o in i) {
                                var s = i[o];
                                "object" != typeof s || null === s ? n[o] = s : s instanceof Date ? n[o] = new Date(s) : s instanceof Map ? n[o] = new Map(t(Array.from(s), e)) : s instanceof Set ? n[o] = new Set(t(Array.from(s), e)) : ArrayBuffer.isView(s) ? n[o] = r(s) : n[o] = e(s)
                            }
                            return n
                        } : function e(i) {
                            if ("object" != typeof i || null === i) return i;
                            if (i instanceof Date) return new Date(i);
                            if (Array.isArray(i)) return t(i, e);
                            if (i instanceof Map) return new Map(t(Array.from(i), e));
                            if (i instanceof Set) return new Set(t(Array.from(i), e));
                            var n = {};
                            for (var o in i)
                                if (!1 !== Object.hasOwnProperty.call(i, o)) {
                                    var s = i[o];
                                    "object" != typeof s || null === s ? n[o] = s : s instanceof Date ? n[o] = new Date(s) : s instanceof Map ? n[o] = new Map(t(Array.from(s), e)) : s instanceof Set ? n[o] = new Set(t(Array.from(s), e)) : ArrayBuffer.isView(s) ? n[o] = r(s) : n[o] = e(s)
                                } return n
                        };

                        function t(e, t) {
                            for (var i = Object.keys(e), n = new Array(i.length), o = 0; o < i.length; o++) {
                                var s = i[o],
                                    a = e[s];
                                "object" != typeof a || null === a ? n[s] = a : a instanceof Date ? n[s] = new Date(a) : ArrayBuffer.isView(a) ? n[s] = r(a) : n[s] = t(a)
                            }
                            return n
                        }
                    }
                })),
                Ui = h(((e, t) => {
                    f(), rt(), qe(), t.exports = xi()()
                })),
                Mi = h((e => {
                    function t(e) {
                        let t = e.split("/");
                        for (let e = 0; e < t.length; e++)
                            if ("+" !== t[e]) {
                                if ("#" === t[e]) return e === t.length - 1;
                                if (-1 !== t[e].indexOf("+") || -1 !== t[e].indexOf("#")) return !1
                            } return !0
                    }
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.validateTopics = e.validateTopic = void 0, e.validateTopic = t, e.validateTopics = function(e) {
                        if (0 === e.length) return "empty_topic_list";
                        for (let r = 0; r < e.length; r++)
                            if (!t(e[r])) return e[r];
                        return null
                    }
                })),
                Li = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = bi(),
                        r = {
                            objectMode: !0
                        },
                        i = {
                            clean: !0
                        };
                    e.default = class {
                        constructor(e) {
                            this.options = e || {}, this.options = Object.assign(Object.assign({}, i), e), this._inflights = new Map
                        }
                        put(e, t) {
                            return this._inflights.set(e.messageId, e), t && t(), this
                        }
                        createStream() {
                            let e = new t.Readable(r),
                                i = [],
                                n = !1,
                                o = 0;
                            return this._inflights.forEach(((e, t) => {
                                i.push(e)
                            })), e._read = () => {
                                !n && o < i.length ? e.push(i[o++]) : e.push(null)
                            }, e.destroy = t => {
                                if (!n) return n = !0, setTimeout((() => {
                                    e.emit("close")
                                }), 0), e
                            }, e
                        }
                        del(e, t) {
                            let r = this._inflights.get(e.messageId);
                            return r ? (this._inflights.delete(e.messageId), t(null, r)) : t && t(new Error("missing packet")), this
                        }
                        get(e, t) {
                            let r = this._inflights.get(e.messageId);
                            return r ? t(null, r) : t && t(new Error("missing packet")), this
                        }
                        close(e) {
                            this.options.clean && (this._inflights = null), e && e()
                        }
                    }
                })),
                Ni = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = [0, 16, 128, 131, 135, 144, 145, 151, 153];
                    e.default = (e, r, i) => {
                        e.log("handlePublish: packet %o", r), i = typeof i < "u" ? i : e.noop;
                        let n = r.topic.toString(),
                            o = r.payload,
                            {
                                qos: s
                            } = r,
                            {
                                messageId: a
                            } = r,
                            {
                                options: l
                            } = e;
                        if (5 === e.options.protocolVersion) {
                            let t;
                            if (r.properties && (t = r.properties.topicAlias), typeof t < "u")
                                if (0 === n.length) {
                                    if (!(t > 0 && t <= 65535)) return e.log("handlePublish :: topic alias out of range. alias: %d", t), void e.emit("error", new Error("Received Topic Alias is out of range"));
                                    {
                                        let r = e.topicAliasRecv.getTopicByAlias(t);
                                        if (!r) return e.log("handlePublish :: unregistered topic alias. alias: %d", t), void e.emit("error", new Error("Received unregistered Topic Alias"));
                                        n = r, e.log("handlePublish :: topic complemented by alias. topic: %s - alias: %d", n, t)
                                    }
                                } else {
                                    if (!e.topicAliasRecv.put(n, t)) return e.log("handlePublish :: topic alias out of range. alias: %d", t), void e.emit("error", new Error("Received Topic Alias is out of range"));
                                    e.log("handlePublish :: registered topic: %s - alias: %d", n, t)
                                }
                        }
                        switch (e.log("handlePublish: qos %d", s), s) {
                            case 2:
                                l.customHandleAcks(n, o, r, ((n, o) => ("number" == typeof n && (o = n, n = null), n ? e.emit("error", n) : -1 === t.indexOf(o) ? e.emit("error", new Error("Wrong reason code for pubrec")) : void(o ? e._sendPacket({
                                    cmd: "pubrec",
                                    messageId: a,
                                    reasonCode: o
                                }, i) : e.incomingStore.put(r, (() => {
                                    e._sendPacket({
                                        cmd: "pubrec",
                                        messageId: a
                                    }, i)
                                }))))));
                                break;
                            case 1:
                                l.customHandleAcks(n, o, r, ((s, l) => ("number" == typeof s && (l = s, s = null), s ? e.emit("error", s) : -1 === t.indexOf(l) ? e.emit("error", new Error("Wrong reason code for puback")) : (l || e.emit("message", n, o, r), void e.handleMessage(r, (t => {
                                    if (t) return i && i(t);
                                    e._sendPacket({
                                        cmd: "puback",
                                        messageId: a,
                                        reasonCode: l
                                    }, i)
                                }))))));
                                break;
                            case 0:
                                e.emit("message", n, o, r), e.handleMessage(r, i);
                                break;
                            default:
                                e.log("handlePublish: unknown QoS. Doing nothing.")
                        }
                    }
                })),
                ji = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.applyMixin = e.ErrorWithReasonCode = void 0;
                    var t = class e extends Error {
                        constructor(t, r) {
                            super(t), this.code = r, Object.setPrototypeOf(this, e.prototype), Object.getPrototypeOf(this).name = "ErrorWithReasonCode"
                        }
                    };
                    e.ErrorWithReasonCode = t, e.applyMixin = function(e, t, r = !1) {
                        var i;
                        let n = [t];
                        for (;;) {
                            let e = n[0],
                                t = Object.getPrototypeOf(e);
                            if (!t?.prototype) break;
                            n.unshift(t)
                        }
                        for (let t of n)
                            for (let n of Object.getOwnPropertyNames(t.prototype))(r || "constructor" !== n) && Object.defineProperty(e.prototype, n, null !== (i = Object.getOwnPropertyDescriptor(t.prototype, n)) && void 0 !== i ? i : Object.create(null))
                    }
                })),
                Di = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.ReasonCodes = void 0, e.ReasonCodes = {
                        0: "",
                        1: "Unacceptable protocol version",
                        2: "Identifier rejected",
                        3: "Server unavailable",
                        4: "Bad username or password",
                        5: "Not authorized",
                        16: "No matching subscribers",
                        17: "No subscription existed",
                        128: "Unspecified error",
                        129: "Malformed Packet",
                        130: "Protocol Error",
                        131: "Implementation specific error",
                        132: "Unsupported Protocol Version",
                        133: "Client Identifier not valid",
                        134: "Bad User Name or Password",
                        135: "Not authorized",
                        136: "Server unavailable",
                        137: "Server busy",
                        138: "Banned",
                        139: "Server shutting down",
                        140: "Bad authentication method",
                        141: "Keep Alive timeout",
                        142: "Session taken over",
                        143: "Topic Filter invalid",
                        144: "Topic Name invalid",
                        145: "Packet identifier in use",
                        146: "Packet Identifier not found",
                        147: "Receive Maximum exceeded",
                        148: "Topic Alias invalid",
                        149: "Packet too large",
                        150: "Message rate too high",
                        151: "Quota exceeded",
                        152: "Administrative action",
                        153: "Payload format invalid",
                        154: "Retain not supported",
                        155: "QoS not supported",
                        156: "Use another server",
                        157: "Server moved",
                        158: "Shared Subscriptions not supported",
                        159: "Connection rate exceeded",
                        160: "Maximum connect time",
                        161: "Subscription Identifiers not supported",
                        162: "Wildcard Subscriptions not supported"
                    }, e.default = (t, r) => {
                        let i, {
                                messageId: n
                            } = r,
                            o = r.cmd,
                            s = null,
                            a = t.outgoing[n] ? t.outgoing[n].cb : null;
                        if (a) {
                            switch (t.log("_handleAck :: packet type", o), o) {
                                case "pubcomp":
                                case "puback": {
                                    let o = r.reasonCode;
                                    o && o > 0 && 16 !== o ? (i = new Error(`Publish error: ${e.ReasonCodes[o]}`), i.code = o, t._removeOutgoingAndStoreMessage(n, (() => {
                                        a(i, r)
                                    }))) : t._removeOutgoingAndStoreMessage(n, a);
                                    break
                                }
                                case "pubrec": {
                                    s = {
                                        cmd: "pubrel",
                                        qos: 2,
                                        messageId: n
                                    };
                                    let o = r.reasonCode;
                                    o && o > 0 && 16 !== o ? (i = new Error(`Publish error: ${e.ReasonCodes[o]}`), i.code = o, t._removeOutgoingAndStoreMessage(n, (() => {
                                        a(i, r)
                                    }))) : t._sendPacket(s);
                                    break
                                }
                                case "suback": {
                                    delete t.outgoing[n], t.messageIdProvider.deallocate(n);
                                    let e = r.granted;
                                    for (let r = 0; r < e.length; r++)
                                        if (128 & e[r]) {
                                            let e = t.messageIdToTopic[n];
                                            e && e.forEach((e => {
                                                delete t._resubscribeTopics[e]
                                            }))
                                        } delete t.messageIdToTopic[n], t._invokeStoreProcessingQueue(), a(null, r);
                                    break
                                }
                                case "unsuback":
                                    delete t.outgoing[n], t.messageIdProvider.deallocate(n), t._invokeStoreProcessingQueue(), a(null);
                                    break;
                                default:
                                    t.emit("error", new Error("unrecognized packet type"))
                            }
                            t.disconnecting && 0 === Object.keys(t.outgoing).length && t.emit("outgoingEmpty")
                        } else t.log("_handleAck :: Server sent an ack in error. Ignoring.")
                    }
                })),
                Fi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = ji(),
                        r = Di();
                    e.default = (e, i) => {
                        let {
                            options: n
                        } = e, o = n.protocolVersion, s = 5 === o ? i.reasonCode : i.returnCode;
                        if (5 === o) e.handleAuth(i, ((i, n) => {
                            if (i) e.emit("error", i);
                            else if (24 === s) e.reconnecting = !1, e._sendPacket(n);
                            else {
                                let i = new t.ErrorWithReasonCode(`Connection refused: ${r.ReasonCodes[s]}`, s);
                                e.emit("error", i)
                            }
                        }));
                        else {
                            let r = new t.ErrorWithReasonCode(`Protocol error: Auth packets are only supported in MQTT 5. Your version:${o}`, s);
                            e.emit("error", r)
                        }
                    }
                })),
                Wi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.LRUCache = void 0;
                    var t = "object" == typeof performance && performance && "function" == typeof performance.now ? performance : Date,
                        r = new Set,
                        n = "object" == typeof p && p ? p : {},
                        o = (e, t, r, o) => {
                            "function" == typeof n.emitWarning ? n.emitWarning(e, t, r, o) : i.error(`[${r}] ${t}: ${e}`)
                        },
                        s = globalThis.AbortController,
                        a = globalThis.AbortSignal;
                    if (typeof s > "u") {
                        a = class {
                            onabort;
                            _onabort = [];
                            reason;
                            aborted = !1;
                            addEventListener(e, t) {
                                this._onabort.push(t)
                            }
                        }, s = class {
                            constructor() {
                                t()
                            }
                            signal = new a;
                            abort(e) {
                                if (!this.signal.aborted) {
                                    this.signal.reason = e, this.signal.aborted = !0;
                                    for (let t of this.signal._onabort) t(e);
                                    this.signal.onabort?.(e)
                                }
                            }
                        };
                        let e = "1" !== n.env?.LRU_CACHE_IGNORE_AC_WARNING,
                            t = () => {
                                e && (e = !1, o("AbortController is not defined. If using lru-cache in node 14, load an AbortController polyfill from the `node-abort-controller` package. A minimal polyfill is provided for use by LRUCache.fetch(), but it should not be relied upon in other contexts (eg, passing it to other APIs that use AbortController/AbortSignal might have undesirable effects). You may disable this with LRU_CACHE_IGNORE_AC_WARNING=1 in the env.", "NO_ABORT_CONTROLLER", "ENOTSUP", t))
                            }
                    }
                    Symbol("type");
                    var l = e => e && e === Math.floor(e) && e > 0 && isFinite(e),
                        h = e => l(e) ? e <= Math.pow(2, 8) ? Uint8Array : e <= Math.pow(2, 16) ? Uint16Array : e <= Math.pow(2, 32) ? Uint32Array : e <= Number.MAX_SAFE_INTEGER ? u : null : null,
                        u = class extends Array {
                            constructor(e) {
                                super(e), this.fill(0)
                            }
                        },
                        c = class e {
                            heap;
                            length;
                            static #e = !1;
                            static create(t) {
                                let r = h(t);
                                if (!r) return [];
                                e.#e = !0;
                                let i = new e(t, r);
                                return e.#e = !1, i
                            }
                            constructor(t, r) {
                                if (!e.#e) throw new TypeError("instantiate Stack using Stack.create(n)");
                                this.heap = new r(t), this.length = 0
                            }
                            push(e) {
                                this.heap[this.length++] = e
                            }
                            pop() {
                                return this.heap[--this.length]
                            }
                        },
                        d = class e {
                            #e;
                            #t;
                            #r;
                            #i;
                            #n;
                            ttl;
                            ttlResolution;
                            ttlAutopurge;
                            updateAgeOnGet;
                            updateAgeOnHas;
                            allowStale;
                            noDisposeOnSet;
                            noUpdateTTL;
                            maxEntrySize;
                            sizeCalculation;
                            noDeleteOnFetchRejection;
                            noDeleteOnStaleGet;
                            allowStaleOnFetchAbort;
                            allowStaleOnFetchRejection;
                            ignoreFetchAbort;
                            #o;
                            #s;
                            #a;
                            #l;
                            #h;
                            #u;
                            #c;
                            #f;
                            #p;
                            #d;
                            #g;
                            #b;
                            #y;
                            #m;
                            #w;
                            #_;
                            #v;
                            static unsafeExposeInternals(e) {
                                return {
                                    starts: e.#y,
                                    ttls: e.#m,
                                    sizes: e.#b,
                                    keyMap: e.#a,
                                    keyList: e.#l,
                                    valList: e.#h,
                                    next: e.#u,
                                    prev: e.#c,
                                    get head() {
                                        return e.#f
                                    },
                                    get tail() {
                                        return e.#p
                                    },
                                    free: e.#d,
                                    isBackgroundFetch: t => e.#E(t),
                                    backgroundFetch: (t, r, i, n) => e.#S(t, r, i, n),
                                    moveToTail: t => e.#A(t),
                                    indexes: t => e.#I(t),
                                    rindexes: t => e.#k(t),
                                    isStale: t => e.#T(t)
                                }
                            }
                            get max() {
                                return this.#e
                            }
                            get maxSize() {
                                return this.#t
                            }
                            get calculatedSize() {
                                return this.#s
                            }
                            get size() {
                                return this.#o
                            }
                            get fetchMethod() {
                                return this.#n
                            }
                            get dispose() {
                                return this.#r
                            }
                            get disposeAfter() {
                                return this.#i
                            }
                            constructor(t) {
                                let {
                                    max: i = 0,
                                    ttl: n,
                                    ttlResolution: s = 1,
                                    ttlAutopurge: a,
                                    updateAgeOnGet: u,
                                    updateAgeOnHas: f,
                                    allowStale: p,
                                    dispose: d,
                                    disposeAfter: g,
                                    noDisposeOnSet: b,
                                    noUpdateTTL: y,
                                    maxSize: m = 0,
                                    maxEntrySize: w = 0,
                                    sizeCalculation: _,
                                    fetchMethod: v,
                                    noDeleteOnFetchRejection: E,
                                    noDeleteOnStaleGet: S,
                                    allowStaleOnFetchRejection: A,
                                    allowStaleOnFetchAbort: I,
                                    ignoreFetchAbort: k
                                } = t;
                                if (0 !== i && !l(i)) throw new TypeError("max option must be a nonnegative integer");
                                let T = i ? h(i) : Array;
                                if (!T) throw new Error("invalid max value: " + i);
                                if (this.#e = i, this.#t = m, this.maxEntrySize = w || this.#t, this.sizeCalculation = _, this.sizeCalculation) {
                                    if (!this.#t && !this.maxEntrySize) throw new TypeError("cannot set sizeCalculation without setting maxSize or maxEntrySize");
                                    if ("function" != typeof this.sizeCalculation) throw new TypeError("sizeCalculation set to non-function")
                                }
                                if (void 0 !== v && "function" != typeof v) throw new TypeError("fetchMethod must be a function if specified");
                                if (this.#n = v, this.#_ = !!v, this.#a = new Map, this.#l = new Array(i).fill(void 0), this.#h = new Array(i).fill(void 0), this.#u = new T(i), this.#c = new T(i), this.#f = 0, this.#p = 0, this.#d = c.create(i), this.#o = 0, this.#s = 0, "function" == typeof d && (this.#r = d), "function" == typeof g ? (this.#i = g, this.#g = []) : (this.#i = void 0, this.#g = void 0), this.#w = !!this.#r, this.#v = !!this.#i, this.noDisposeOnSet = !!b, this.noUpdateTTL = !!y, this.noDeleteOnFetchRejection = !!E, this.allowStaleOnFetchRejection = !!A, this.allowStaleOnFetchAbort = !!I, this.ignoreFetchAbort = !!k, 0 !== this.maxEntrySize) {
                                    if (0 !== this.#t && !l(this.#t)) throw new TypeError("maxSize must be a positive integer if specified");
                                    if (!l(this.maxEntrySize)) throw new TypeError("maxEntrySize must be a positive integer if specified");
                                    this.#C()
                                }
                                if (this.allowStale = !!p, this.noDeleteOnStaleGet = !!S, this.updateAgeOnGet = !!u, this.updateAgeOnHas = !!f, this.ttlResolution = l(s) || 0 === s ? s : 1, this.ttlAutopurge = !!a, this.ttl = n || 0, this.ttl) {
                                    if (!l(this.ttl)) throw new TypeError("ttl must be a positive integer if specified");
                                    this.#R()
                                }
                                if (0 === this.#e && 0 === this.ttl && 0 === this.#t) throw new TypeError("At least one of max, maxSize, or ttl is required");
                                if (!this.ttlAutopurge && !this.#e && !this.#t) {
                                    let t = "LRU_CACHE_UNBOUNDED";
                                    (e => !r.has(e))(t) && (r.add(t), o("TTL caching without ttlAutopurge, max, or maxSize can result in unbounded memory consumption.", "UnboundedCacheWarning", t, e))
                                }
                            }
                            getRemainingTTL(e) {
                                return this.#a.has(e) ? 1 / 0 : 0
                            }
                            #R() {
                                let e = new u(this.#e),
                                    r = new u(this.#e);
                                this.#m = e, this.#y = r, this.#O = (i, n, o = t.now()) => {
                                    if (r[i] = 0 !== n ? o : 0, e[i] = n, 0 !== n && this.ttlAutopurge) {
                                        let e = setTimeout((() => {
                                            this.#T(i) && this.delete(this.#l[i])
                                        }), n + 1);
                                        e.unref && e.unref()
                                    }
                                }, this.#P = i => {
                                    r[i] = 0 !== e[i] ? t.now() : 0
                                }, this.#B = (t, o) => {
                                    if (e[o]) {
                                        let s = e[o],
                                            a = r[o];
                                        t.ttl = s, t.start = a, t.now = i || n();
                                        let l = t.now - a;
                                        t.remainingTTL = s - l
                                    }
                                };
                                let i = 0,
                                    n = () => {
                                        let e = t.now();
                                        if (this.ttlResolution > 0) {
                                            i = e;
                                            let t = setTimeout((() => i = 0), this.ttlResolution);
                                            t.unref && t.unref()
                                        }
                                        return e
                                    };
                                this.getRemainingTTL = t => {
                                    let o = this.#a.get(t);
                                    if (void 0 === o) return 0;
                                    let s = e[o],
                                        a = r[o];
                                    return 0 === s || 0 === a ? 1 / 0 : s - ((i || n()) - a)
                                }, this.#T = t => 0 !== e[t] && 0 !== r[t] && (i || n()) - r[t] > e[t]
                            }
                            #P = () => {};
                            #B = () => {};
                            #O = () => {};
                            #T = () => !1;
                            #C() {
                                let e = new u(this.#e);
                                this.#s = 0, this.#b = e, this.#x = t => {
                                    this.#s -= e[t], e[t] = 0
                                }, this.#U = (e, t, r, i) => {
                                    if (this.#E(t)) return 0;
                                    if (!l(r)) {
                                        if (!i) throw new TypeError("invalid size value (must be positive integer). When maxSize or maxEntrySize is used, sizeCalculation or size must be set.");
                                        if ("function" != typeof i) throw new TypeError("sizeCalculation must be a function");
                                        if (r = i(t, e), !l(r)) throw new TypeError("sizeCalculation return invalid (expect positive integer)")
                                    }
                                    return r
                                }, this.#M = (t, r, i) => {
                                    if (e[t] = r, this.#t) {
                                        let r = this.#t - e[t];
                                        for (; this.#s > r;) this.#L(!0)
                                    }
                                    this.#s += e[t], i && (i.entrySize = r, i.totalCalculatedSize = this.#s)
                                }
                            }
                            #x = e => {};
                            #M = (e, t, r) => {};
                            #U = (e, t, r, i) => {
                                if (r || i) throw new TypeError("cannot set size without setting maxSize or maxEntrySize on cache");
                                return 0
                            };* #I({
                                allowStale: e = this.allowStale
                            } = {}) {
                                if (this.#o)
                                    for (let t = this.#p; this.#N(t) && ((e || !this.#T(t)) && (yield t), t !== this.#f);) t = this.#c[t]
                            }* #k({
                                allowStale: e = this.allowStale
                            } = {}) {
                                if (this.#o)
                                    for (let t = this.#f; this.#N(t) && ((e || !this.#T(t)) && (yield t), t !== this.#p);) t = this.#u[t]
                            }
                            #N(e) {
                                return void 0 !== e && this.#a.get(this.#l[e]) === e
                            }* entries() {
                                for (let e of this.#I()) void 0 !== this.#h[e] && void 0 !== this.#l[e] && !this.#E(this.#h[e]) && (yield [this.#l[e], this.#h[e]])
                            }* rentries() {
                                for (let e of this.#k()) void 0 !== this.#h[e] && void 0 !== this.#l[e] && !this.#E(this.#h[e]) && (yield [this.#l[e], this.#h[e]])
                            }* keys() {
                                for (let e of this.#I()) {
                                    let t = this.#l[e];
                                    void 0 !== t && !this.#E(this.#h[e]) && (yield t)
                                }
                            }* rkeys() {
                                for (let e of this.#k()) {
                                    let t = this.#l[e];
                                    void 0 !== t && !this.#E(this.#h[e]) && (yield t)
                                }
                            }* values() {
                                for (let e of this.#I()) void 0 !== this.#h[e] && !this.#E(this.#h[e]) && (yield this.#h[e])
                            }* rvalues() {
                                for (let e of this.#k()) void 0 !== this.#h[e] && !this.#E(this.#h[e]) && (yield this.#h[e])
                            } [Symbol.iterator]() {
                                return this.entries()
                            }
                            find(e, t = {}) {
                                for (let r of this.#I()) {
                                    let i = this.#h[r],
                                        n = this.#E(i) ? i.__staleWhileFetching : i;
                                    if (void 0 !== n && e(n, this.#l[r], this)) return this.get(this.#l[r], t)
                                }
                            }
                            forEach(e, t = this) {
                                for (let r of this.#I()) {
                                    let i = this.#h[r],
                                        n = this.#E(i) ? i.__staleWhileFetching : i;
                                    void 0 !== n && e.call(t, n, this.#l[r], this)
                                }
                            }
                            rforEach(e, t = this) {
                                for (let r of this.#k()) {
                                    let i = this.#h[r],
                                        n = this.#E(i) ? i.__staleWhileFetching : i;
                                    void 0 !== n && e.call(t, n, this.#l[r], this)
                                }
                            }
                            purgeStale() {
                                let e = !1;
                                for (let t of this.#k({
                                        allowStale: !0
                                    })) this.#T(t) && (this.delete(this.#l[t]), e = !0);
                                return e
                            }
                            dump() {
                                let e = [];
                                for (let r of this.#I({
                                        allowStale: !0
                                    })) {
                                    let i = this.#l[r],
                                        n = this.#h[r],
                                        o = this.#E(n) ? n.__staleWhileFetching : n;
                                    if (void 0 === o || void 0 === i) continue;
                                    let s = {
                                        value: o
                                    };
                                    if (this.#m && this.#y) {
                                        s.ttl = this.#m[r];
                                        let e = t.now() - this.#y[r];
                                        s.start = Math.floor(Date.now() - e)
                                    }
                                    this.#b && (s.size = this.#b[r]), e.unshift([i, s])
                                }
                                return e
                            }
                            load(e) {
                                this.clear();
                                for (let [r, i] of e) {
                                    if (i.start) {
                                        let e = Date.now() - i.start;
                                        i.start = t.now() - e
                                    }
                                    this.set(r, i.value, i)
                                }
                            }
                            set(e, t, r = {}) {
                                if (void 0 === t) return this.delete(e), this;
                                let {
                                    ttl: i = this.ttl,
                                    start: n,
                                    noDisposeOnSet: o = this.noDisposeOnSet,
                                    sizeCalculation: s = this.sizeCalculation,
                                    status: a
                                } = r, {
                                    noUpdateTTL: l = this.noUpdateTTL
                                } = r, h = this.#U(e, t, r.size || 0, s);
                                if (this.maxEntrySize && h > this.maxEntrySize) return a && (a.set = "miss", a.maxEntrySizeExceeded = !0), this.delete(e), this;
                                let u = 0 === this.#o ? void 0 : this.#a.get(e);
                                if (void 0 === u) u = 0 === this.#o ? this.#p : 0 !== this.#d.length ? this.#d.pop() : this.#o === this.#e ? this.#L(!1) : this.#o, this.#l[u] = e, this.#h[u] = t, this.#a.set(e, u), this.#u[this.#p] = u, this.#c[u] = this.#p, this.#p = u, this.#o++, this.#M(u, h, a), a && (a.set = "add"), l = !1;
                                else {
                                    this.#A(u);
                                    let r = this.#h[u];
                                    if (t !== r) {
                                        if (this.#_ && this.#E(r)) {
                                            r.__abortController.abort(new Error("replaced"));
                                            let {
                                                __staleWhileFetching: t
                                            } = r;
                                            void 0 !== t && !o && (this.#w && this.#r?.(t, e, "set"), this.#v && this.#g?.push([t, e, "set"]))
                                        } else o || (this.#w && this.#r?.(r, e, "set"), this.#v && this.#g?.push([r, e, "set"]));
                                        if (this.#x(u), this.#M(u, h, a), this.#h[u] = t, a) {
                                            a.set = "replace";
                                            let e = r && this.#E(r) ? r.__staleWhileFetching : r;
                                            void 0 !== e && (a.oldValue = e)
                                        }
                                    } else a && (a.set = "update")
                                }
                                if (0 !== i && !this.#m && this.#R(), this.#m && (l || this.#O(u, i, n), a && this.#B(a, u)), !o && this.#v && this.#g) {
                                    let e, t = this.#g;
                                    for (; e = t?.shift();) this.#i?.(...e)
                                }
                                return this
                            }
                            pop() {
                                try {
                                    for (; this.#o;) {
                                        let e = this.#h[this.#f];
                                        if (this.#L(!0), this.#E(e)) {
                                            if (e.__staleWhileFetching) return e.__staleWhileFetching
                                        } else if (void 0 !== e) return e
                                    }
                                } finally {
                                    if (this.#v && this.#g) {
                                        let e, t = this.#g;
                                        for (; e = t?.shift();) this.#i?.(...e)
                                    }
                                }
                            }
                            #L(e) {
                                let t = this.#f,
                                    r = this.#l[t],
                                    i = this.#h[t];
                                return this.#_ && this.#E(i) ? i.__abortController.abort(new Error("evicted")) : (this.#w || this.#v) && (this.#w && this.#r?.(i, r, "evict"), this.#v && this.#g?.push([i, r, "evict"])), this.#x(t), e && (this.#l[t] = void 0, this.#h[t] = void 0, this.#d.push(t)), 1 === this.#o ? (this.#f = this.#p = 0, this.#d.length = 0) : this.#f = this.#u[t], this.#a.delete(r), this.#o--, t
                            }
                            has(e, t = {}) {
                                let {
                                    updateAgeOnHas: r = this.updateAgeOnHas,
                                    status: i
                                } = t, n = this.#a.get(e);
                                if (void 0 !== n) {
                                    let e = this.#h[n];
                                    if (this.#E(e) && void 0 === e.__staleWhileFetching) return !1;
                                    if (!this.#T(n)) return r && this.#P(n), i && (i.has = "hit", this.#B(i, n)), !0;
                                    i && (i.has = "stale", this.#B(i, n))
                                } else i && (i.has = "miss");
                                return !1
                            }
                            peek(e, t = {}) {
                                let {
                                    allowStale: r = this.allowStale
                                } = t, i = this.#a.get(e);
                                if (void 0 !== i && (r || !this.#T(i))) {
                                    let e = this.#h[i];
                                    return this.#E(e) ? e.__staleWhileFetching : e
                                }
                            }
                            #S(e, t, r, i) {
                                let n = void 0 === t ? void 0 : this.#h[t];
                                if (this.#E(n)) return n;
                                let o = new s,
                                    {
                                        signal: a
                                    } = r;
                                a?.addEventListener("abort", (() => o.abort(a.reason)), {
                                    signal: o.signal
                                });
                                let l = {
                                        signal: o.signal,
                                        options: r,
                                        context: i
                                    },
                                    h = (i, n = !1) => {
                                        let {
                                            aborted: s
                                        } = o.signal, a = r.ignoreFetchAbort && void 0 !== i;
                                        if (r.status && (s && !n ? (r.status.fetchAborted = !0, r.status.fetchError = o.signal.reason, a && (r.status.fetchAbortIgnored = !0)) : r.status.fetchResolved = !0), s && !a && !n) return u(o.signal.reason);
                                        let h = c;
                                        return this.#h[t] === c && (void 0 === i ? h.__staleWhileFetching ? this.#h[t] = h.__staleWhileFetching : this.delete(e) : (r.status && (r.status.fetchUpdated = !0), this.set(e, i, l.options))), i
                                    },
                                    u = i => {
                                        let {
                                            aborted: n
                                        } = o.signal, s = n && r.allowStaleOnFetchAbort, a = s || r.allowStaleOnFetchRejection, l = a || r.noDeleteOnFetchRejection, h = c;
                                        if (this.#h[t] === c && (l && void 0 !== h.__staleWhileFetching ? s || (this.#h[t] = h.__staleWhileFetching) : this.delete(e)), a) return r.status && void 0 !== h.__staleWhileFetching && (r.status.returnedStale = !0), h.__staleWhileFetching;
                                        if (h.__returned === h) throw i
                                    };
                                r.status && (r.status.fetchDispatched = !0);
                                let c = new Promise(((t, i) => {
                                        let s = this.#n?.(e, n, l);
                                        s && s instanceof Promise && s.then((e => t(void 0 === e ? void 0 : e)), i), o.signal.addEventListener("abort", (() => {
                                            (!r.ignoreFetchAbort || r.allowStaleOnFetchAbort) && (t(void 0), r.allowStaleOnFetchAbort && (t = e => h(e, !0)))
                                        }))
                                    })).then(h, (e => (r.status && (r.status.fetchRejected = !0, r.status.fetchError = e), u(e)))),
                                    f = Object.assign(c, {
                                        __abortController: o,
                                        __staleWhileFetching: n,
                                        __returned: void 0
                                    });
                                return void 0 === t ? (this.set(e, f, {
                                    ...l.options,
                                    status: void 0
                                }), t = this.#a.get(e)) : this.#h[t] = f, f
                            }
                            #E(e) {
                                if (!this.#_) return !1;
                                let t = e;
                                return !!t && t instanceof Promise && t.hasOwnProperty("__staleWhileFetching") && t.__abortController instanceof s
                            }
                            async fetch(e, t = {}) {
                                let {
                                    allowStale: r = this.allowStale,
                                    updateAgeOnGet: i = this.updateAgeOnGet,
                                    noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
                                    ttl: o = this.ttl,
                                    noDisposeOnSet: s = this.noDisposeOnSet,
                                    size: a = 0,
                                    sizeCalculation: l = this.sizeCalculation,
                                    noUpdateTTL: h = this.noUpdateTTL,
                                    noDeleteOnFetchRejection: u = this.noDeleteOnFetchRejection,
                                    allowStaleOnFetchRejection: c = this.allowStaleOnFetchRejection,
                                    ignoreFetchAbort: f = this.ignoreFetchAbort,
                                    allowStaleOnFetchAbort: p = this.allowStaleOnFetchAbort,
                                    context: d,
                                    forceRefresh: g = !1,
                                    status: b,
                                    signal: y
                                } = t;
                                if (!this.#_) return b && (b.fetch = "get"), this.get(e, {
                                    allowStale: r,
                                    updateAgeOnGet: i,
                                    noDeleteOnStaleGet: n,
                                    status: b
                                });
                                let m = {
                                        allowStale: r,
                                        updateAgeOnGet: i,
                                        noDeleteOnStaleGet: n,
                                        ttl: o,
                                        noDisposeOnSet: s,
                                        size: a,
                                        sizeCalculation: l,
                                        noUpdateTTL: h,
                                        noDeleteOnFetchRejection: u,
                                        allowStaleOnFetchRejection: c,
                                        allowStaleOnFetchAbort: p,
                                        ignoreFetchAbort: f,
                                        status: b,
                                        signal: y
                                    },
                                    w = this.#a.get(e);
                                if (void 0 === w) {
                                    b && (b.fetch = "miss");
                                    let t = this.#S(e, w, m, d);
                                    return t.__returned = t
                                } {
                                    let t = this.#h[w];
                                    if (this.#E(t)) {
                                        let e = r && void 0 !== t.__staleWhileFetching;
                                        return b && (b.fetch = "inflight", e && (b.returnedStale = !0)), e ? t.__staleWhileFetching : t.__returned = t
                                    }
                                    let n = this.#T(w);
                                    if (!g && !n) return b && (b.fetch = "hit"), this.#A(w), i && this.#P(w), b && this.#B(b, w), t;
                                    let o = this.#S(e, w, m, d),
                                        s = void 0 !== o.__staleWhileFetching && r;
                                    return b && (b.fetch = n ? "stale" : "refresh", s && n && (b.returnedStale = !0)), s ? o.__staleWhileFetching : o.__returned = o
                                }
                            }
                            get(e, t = {}) {
                                let {
                                    allowStale: r = this.allowStale,
                                    updateAgeOnGet: i = this.updateAgeOnGet,
                                    noDeleteOnStaleGet: n = this.noDeleteOnStaleGet,
                                    status: o
                                } = t, s = this.#a.get(e);
                                if (void 0 !== s) {
                                    let t = this.#h[s],
                                        a = this.#E(t);
                                    return o && this.#B(o, s), this.#T(s) ? (o && (o.get = "stale"), a ? (o && r && void 0 !== t.__staleWhileFetching && (o.returnedStale = !0), r ? t.__staleWhileFetching : void 0) : (n || this.delete(e), o && r && (o.returnedStale = !0), r ? t : void 0)) : (o && (o.get = "hit"), a ? t.__staleWhileFetching : (this.#A(s), i && this.#P(s), t))
                                }
                                o && (o.get = "miss")
                            }
                            #j(e, t) {
                                this.#c[t] = e, this.#u[e] = t
                            }
                            #A(e) {
                                e !== this.#p && (e === this.#f ? this.#f = this.#u[e] : this.#j(this.#c[e], this.#u[e]), this.#j(this.#p, e), this.#p = e)
                            }
                            delete(e) {
                                let t = !1;
                                if (0 !== this.#o) {
                                    let r = this.#a.get(e);
                                    if (void 0 !== r)
                                        if (t = !0, 1 === this.#o) this.clear();
                                        else {
                                            this.#x(r);
                                            let t = this.#h[r];
                                            this.#E(t) ? t.__abortController.abort(new Error("deleted")) : (this.#w || this.#v) && (this.#w && this.#r?.(t, e, "delete"), this.#v && this.#g?.push([t, e, "delete"])), this.#a.delete(e), this.#l[r] = void 0, this.#h[r] = void 0, r === this.#p ? this.#p = this.#c[r] : r === this.#f ? this.#f = this.#u[r] : (this.#u[this.#c[r]] = this.#u[r], this.#c[this.#u[r]] = this.#c[r]), this.#o--, this.#d.push(r)
                                        }
                                }
                                if (this.#v && this.#g?.length) {
                                    let e, t = this.#g;
                                    for (; e = t?.shift();) this.#i?.(...e)
                                }
                                return t
                            }
                            clear() {
                                for (let e of this.#k({
                                        allowStale: !0
                                    })) {
                                    let t = this.#h[e];
                                    if (this.#E(t)) t.__abortController.abort(new Error("deleted"));
                                    else {
                                        let r = this.#l[e];
                                        this.#w && this.#r?.(t, r, "delete"), this.#v && this.#g?.push([t, r, "delete"])
                                    }
                                }
                                if (this.#a.clear(), this.#h.fill(void 0), this.#l.fill(void 0), this.#m && this.#y && (this.#m.fill(0), this.#y.fill(0)), this.#b && this.#b.fill(0), this.#f = 0, this.#p = 0, this.#d.length = 0, this.#s = 0, this.#o = 0, this.#v && this.#g) {
                                    let e, t = this.#g;
                                    for (; e = t?.shift();) this.#i?.(...e)
                                }
                            }
                        };
                    e.LRUCache = d
                })),
                $i = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.ContainerIterator = e.Container = e.Base = void 0, e.ContainerIterator = class {
                        constructor(e = 0) {
                            this.iteratorType = e
                        }
                        equals(e) {
                            return this.o === e.o
                        }
                    };
                    var t = class {
                        constructor() {
                            this.i = 0
                        }
                        get length() {
                            return this.i
                        }
                        size() {
                            return this.i
                        }
                        empty() {
                            return 0 === this.i
                        }
                    };
                    e.Base = t, e.Container = class extends t {}
                })),
                qi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = $i(),
                        r = class extends t.Base {
                            constructor(e = []) {
                                super(), this.S = [];
                                let t = this;
                                e.forEach((function(e) {
                                    t.push(e)
                                }))
                            }
                            clear() {
                                this.i = 0, this.S = []
                            }
                            push(e) {
                                return this.S.push(e), this.i += 1, this.i
                            }
                            pop() {
                                if (0 !== this.i) return this.i -= 1, this.S.pop()
                            }
                            top() {
                                return this.S[this.i - 1]
                            }
                        };
                    e.default = r
                })),
                Vi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = $i(),
                        r = class extends t.Base {
                            constructor(e = []) {
                                super(), this.j = 0, this.q = [];
                                let t = this;
                                e.forEach((function(e) {
                                    t.push(e)
                                }))
                            }
                            clear() {
                                this.q = [], this.i = this.j = 0
                            }
                            push(e) {
                                let t = this.q.length;
                                if (this.j / t > .5 && this.j + this.i >= t && t > 4096) {
                                    let t = this.i;
                                    for (let e = 0; e < t; ++e) this.q[e] = this.q[this.j + e];
                                    this.j = 0, this.q[this.i] = e
                                } else this.q[this.j + this.i] = e;
                                return ++this.i
                            }
                            pop() {
                                if (0 === this.i) return;
                                let e = this.q[this.j++];
                                return this.i -= 1, e
                            }
                            front() {
                                if (0 !== this.i) return this.q[this.j]
                            }
                        };
                    e.default = r
                })),
                Hi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = $i(),
                        r = class extends t.Base {
                            constructor(e = [], t = function(e, t) {
                                return e > t ? -1 : e < t ? 1 : 0
                            }, r = !0) {
                                if (super(), this.v = t, Array.isArray(e)) this.C = r ? [...e] : e;
                                else {
                                    this.C = [];
                                    let t = this;
                                    e.forEach((function(e) {
                                        t.C.push(e)
                                    }))
                                }
                                this.i = this.C.length;
                                let i = this.i >> 1;
                                for (let e = this.i - 1 >> 1; e >= 0; --e) this.k(e, i)
                            }
                            m(e) {
                                let t = this.C[e];
                                for (; e > 0;) {
                                    let r = e - 1 >> 1,
                                        i = this.C[r];
                                    if (this.v(i, t) <= 0) break;
                                    this.C[e] = i, e = r
                                }
                                this.C[e] = t
                            }
                            k(e, t) {
                                let r = this.C[e];
                                for (; e < t;) {
                                    let t = e << 1 | 1,
                                        i = t + 1,
                                        n = this.C[t];
                                    if (i < this.i && this.v(n, this.C[i]) > 0 && (t = i, n = this.C[i]), this.v(n, r) >= 0) break;
                                    this.C[e] = n, e = t
                                }
                                this.C[e] = r
                            }
                            clear() {
                                this.i = 0, this.C.length = 0
                            }
                            push(e) {
                                this.C.push(e), this.m(this.i), this.i += 1
                            }
                            pop() {
                                if (0 === this.i) return;
                                let e = this.C[0],
                                    t = this.C.pop();
                                return this.i -= 1, this.i && (this.C[0] = t, this.k(0, this.i >> 1)), e
                            }
                            top() {
                                return this.C[0]
                            }
                            find(e) {
                                return this.C.indexOf(e) >= 0
                            }
                            remove(e) {
                                let t = this.C.indexOf(e);
                                return !(t < 0 || (0 === t ? this.pop() : t === this.i - 1 ? (this.C.pop(), this.i -= 1) : (this.C.splice(t, 1, this.C.pop()), this.i -= 1, this.m(t), this.k(t, this.i >> 1)), 0))
                            }
                            updateItem(e) {
                                let t = this.C.indexOf(e);
                                return !(t < 0 || (this.m(t), this.k(t, this.i >> 1), 0))
                            }
                            toArray() {
                                return [...this.C]
                            }
                        };
                    e.default = r
                })),
                zi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = $i(),
                        r = class extends t.Container {};
                    e.default = r
                })),
                Ki = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.throwIteratorAccessError = function() {
                        throw new RangeError("Iterator access denied!")
                    }
                })),
                Gi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.RandomIterator = void 0;
                    var t = $i(),
                        r = Ki(),
                        i = class extends t.ContainerIterator {
                            constructor(e, t) {
                                super(t), this.o = e, 0 === this.iteratorType ? (this.pre = function() {
                                    return 0 === this.o && (0, r.throwIteratorAccessError)(), this.o -= 1, this
                                }, this.next = function() {
                                    return this.o === this.container.size() && (0, r.throwIteratorAccessError)(), this.o += 1, this
                                }) : (this.pre = function() {
                                    return this.o === this.container.size() - 1 && (0, r.throwIteratorAccessError)(), this.o += 1, this
                                }, this.next = function() {
                                    return -1 === this.o && (0, r.throwIteratorAccessError)(), this.o -= 1, this
                                })
                            }
                            get pointer() {
                                return this.container.getElementByPos(this.o)
                            }
                            set pointer(e) {
                                this.container.setElementByPos(this.o, e)
                            }
                        };
                    e.RandomIterator = i
                })),
                Qi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t, r = (t = zi()) && t.t ? t : {
                            default: t
                        },
                        i = Gi(),
                        n = class e extends i.RandomIterator {
                            constructor(e, t, r) {
                                super(e, r), this.container = t
                            }
                            copy() {
                                return new e(this.o, this.container, this.iteratorType)
                            }
                        },
                        o = class extends r.default {
                            constructor(e = [], t = !0) {
                                if (super(), Array.isArray(e)) this.J = t ? [...e] : e, this.i = e.length;
                                else {
                                    this.J = [];
                                    let t = this;
                                    e.forEach((function(e) {
                                        t.pushBack(e)
                                    }))
                                }
                            }
                            clear() {
                                this.i = 0, this.J.length = 0
                            }
                            begin() {
                                return new n(0, this)
                            }
                            end() {
                                return new n(this.i, this)
                            }
                            rBegin() {
                                return new n(this.i - 1, this, 1)
                            }
                            rEnd() {
                                return new n(-1, this, 1)
                            }
                            front() {
                                return this.J[0]
                            }
                            back() {
                                return this.J[this.i - 1]
                            }
                            getElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                return this.J[e]
                            }
                            eraseElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                return this.J.splice(e, 1), this.i -= 1, this.i
                            }
                            eraseElementByValue(e) {
                                let t = 0;
                                for (let r = 0; r < this.i; ++r) this.J[r] !== e && (this.J[t++] = this.J[r]);
                                return this.i = this.J.length = t, this.i
                            }
                            eraseElementByIterator(e) {
                                let t = e.o;
                                return e = e.next(), this.eraseElementByPos(t), e
                            }
                            pushBack(e) {
                                return this.J.push(e), this.i += 1, this.i
                            }
                            popBack() {
                                if (0 !== this.i) return this.i -= 1, this.J.pop()
                            }
                            setElementByPos(e, t) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                this.J[e] = t
                            }
                            insert(e, t, r = 1) {
                                if (e < 0 || e > this.i) throw new RangeError;
                                return this.J.splice(e, 0, ...new Array(r).fill(t)), this.i += r, this.i
                            }
                            find(e) {
                                for (let t = 0; t < this.i; ++t)
                                    if (this.J[t] === e) return new n(t, this);
                                return this.end()
                            }
                            reverse() {
                                this.J.reverse()
                            }
                            unique() {
                                let e = 1;
                                for (let t = 1; t < this.i; ++t) this.J[t] !== this.J[t - 1] && (this.J[e++] = this.J[t]);
                                return this.i = this.J.length = e, this.i
                            }
                            sort(e) {
                                this.J.sort(e)
                            }
                            forEach(e) {
                                for (let t = 0; t < this.i; ++t) e(this.J[t], t, this)
                            } [Symbol.iterator]() {
                                return function*() {
                                    yield* this.J
                                }.bind(this)()
                            }
                        };
                    e.default = o
                })),
                Yi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t, r = (t = zi()) && t.t ? t : {
                            default: t
                        },
                        i = $i(),
                        n = Ki(),
                        o = class e extends i.ContainerIterator {
                            constructor(e, t, r, i) {
                                super(i), this.o = e, this.h = t, this.container = r, 0 === this.iteratorType ? (this.pre = function() {
                                    return this.o.L === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.L, this
                                }, this.next = function() {
                                    return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.B, this
                                }) : (this.pre = function() {
                                    return this.o.B === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.B, this
                                }, this.next = function() {
                                    return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.L, this
                                })
                            }
                            get pointer() {
                                return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o.l
                            }
                            set pointer(e) {
                                this.o === this.h && (0, n.throwIteratorAccessError)(), this.o.l = e
                            }
                            copy() {
                                return new e(this.o, this.h, this.container, this.iteratorType)
                            }
                        },
                        s = class extends r.default {
                            constructor(e = []) {
                                super(), this.h = {}, this.p = this._ = this.h.L = this.h.B = this.h;
                                let t = this;
                                e.forEach((function(e) {
                                    t.pushBack(e)
                                }))
                            }
                            V(e) {
                                let {
                                    L: t,
                                    B: r
                                } = e;
                                t.B = r, r.L = t, e === this.p && (this.p = r), e === this._ && (this._ = t), this.i -= 1
                            }
                            G(e, t) {
                                let r = t.B,
                                    i = {
                                        l: e,
                                        L: t,
                                        B: r
                                    };
                                t.B = i, r.L = i, t === this.h && (this.p = i), r === this.h && (this._ = i), this.i += 1
                            }
                            clear() {
                                this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h
                            }
                            begin() {
                                return new o(this.p, this.h, this)
                            }
                            end() {
                                return new o(this.h, this.h, this)
                            }
                            rBegin() {
                                return new o(this._, this.h, this, 1)
                            }
                            rEnd() {
                                return new o(this.h, this.h, this, 1)
                            }
                            front() {
                                return this.p.l
                            }
                            back() {
                                return this._.l
                            }
                            getElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let t = this.p;
                                for (; e--;) t = t.B;
                                return t.l
                            }
                            eraseElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let t = this.p;
                                for (; e--;) t = t.B;
                                return this.V(t), this.i
                            }
                            eraseElementByValue(e) {
                                let t = this.p;
                                for (; t !== this.h;) t.l === e && this.V(t), t = t.B;
                                return this.i
                            }
                            eraseElementByIterator(e) {
                                let t = e.o;
                                return t === this.h && (0, n.throwIteratorAccessError)(), e = e.next(), this.V(t), e
                            }
                            pushBack(e) {
                                return this.G(e, this._), this.i
                            }
                            popBack() {
                                if (0 === this.i) return;
                                let e = this._.l;
                                return this.V(this._), e
                            }
                            pushFront(e) {
                                return this.G(e, this.h), this.i
                            }
                            popFront() {
                                if (0 === this.i) return;
                                let e = this.p.l;
                                return this.V(this.p), e
                            }
                            setElementByPos(e, t) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let r = this.p;
                                for (; e--;) r = r.B;
                                r.l = t
                            }
                            insert(e, t, r = 1) {
                                if (e < 0 || e > this.i) throw new RangeError;
                                if (r <= 0) return this.i;
                                if (0 === e)
                                    for (; r--;) this.pushFront(t);
                                else if (e === this.i)
                                    for (; r--;) this.pushBack(t);
                                else {
                                    let i = this.p;
                                    for (let t = 1; t < e; ++t) i = i.B;
                                    let n = i.B;
                                    for (this.i += r; r--;) i.B = {
                                        l: t,
                                        L: i
                                    }, i.B.L = i, i = i.B;
                                    i.B = n, n.L = i
                                }
                                return this.i
                            }
                            find(e) {
                                let t = this.p;
                                for (; t !== this.h;) {
                                    if (t.l === e) return new o(t, this.h, this);
                                    t = t.B
                                }
                                return this.end()
                            }
                            reverse() {
                                if (this.i <= 1) return;
                                let e = this.p,
                                    t = this._,
                                    r = 0;
                                for (; r << 1 < this.i;) {
                                    let i = e.l;
                                    e.l = t.l, t.l = i, e = e.B, t = t.L, r += 1
                                }
                            }
                            unique() {
                                if (this.i <= 1) return this.i;
                                let e = this.p;
                                for (; e !== this.h;) {
                                    let t = e;
                                    for (; t.B !== this.h && t.l === t.B.l;) t = t.B, this.i -= 1;
                                    e.B = t.B, e.B.L = e, e = e.B
                                }
                                return this.i
                            }
                            sort(e) {
                                if (this.i <= 1) return;
                                let t = [];
                                this.forEach((function(e) {
                                    t.push(e)
                                })), t.sort(e);
                                let r = this.p;
                                t.forEach((function(e) {
                                    r.l = e, r = r.B
                                }))
                            }
                            merge(e) {
                                let t = this;
                                if (0 === this.i) e.forEach((function(e) {
                                    t.pushBack(e)
                                }));
                                else {
                                    let r = this.p;
                                    e.forEach((function(e) {
                                        for (; r !== t.h && r.l <= e;) r = r.B;
                                        t.G(e, r.L)
                                    }))
                                }
                                return this.i
                            }
                            forEach(e) {
                                let t = this.p,
                                    r = 0;
                                for (; t !== this.h;) e(t.l, r++, this), t = t.B
                            } [Symbol.iterator]() {
                                return function*() {
                                    if (0 === this.i) return;
                                    let e = this.p;
                                    for (; e !== this.h;) yield e.l, e = e.B
                                }.bind(this)()
                            }
                        };
                    e.default = s
                })),
                Ji = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t, r = (t = zi()) && t.t ? t : {
                            default: t
                        },
                        i = Gi(),
                        n = class e extends i.RandomIterator {
                            constructor(e, t, r) {
                                super(e, r), this.container = t
                            }
                            copy() {
                                return new e(this.o, this.container, this.iteratorType)
                            }
                        },
                        o = class extends r.default {
                            constructor(e = [], t = 4096) {
                                super(), this.j = 0, this.D = 0, this.R = 0, this.N = 0, this.P = 0, this.A = [];
                                let r = (() => {
                                    if ("number" == typeof e.length) return e.length;
                                    if ("number" == typeof e.size) return e.size;
                                    if ("function" == typeof e.size) return e.size();
                                    throw new TypeError("Cannot get the length or size of the container")
                                })();
                                this.F = t, this.P = Math.max(Math.ceil(r / this.F), 1);
                                for (let e = 0; e < this.P; ++e) this.A.push(new Array(this.F));
                                let i = Math.ceil(r / this.F);
                                this.j = this.R = (this.P >> 1) - (i >> 1), this.D = this.N = this.F - r % this.F >> 1;
                                let n = this;
                                e.forEach((function(e) {
                                    n.pushBack(e)
                                }))
                            }
                            T() {
                                let e = [],
                                    t = Math.max(this.P >> 1, 1);
                                for (let r = 0; r < t; ++r) e[r] = new Array(this.F);
                                for (let t = this.j; t < this.P; ++t) e[e.length] = this.A[t];
                                for (let t = 0; t < this.R; ++t) e[e.length] = this.A[t];
                                e[e.length] = [...this.A[this.R]], this.j = t, this.R = e.length - 1;
                                for (let r = 0; r < t; ++r) e[e.length] = new Array(this.F);
                                this.A = e, this.P = e.length
                            }
                            O(e) {
                                let t = this.D + e + 1,
                                    r = t % this.F,
                                    i = r - 1,
                                    n = this.j + (t - r) / this.F;
                                return 0 === r && (n -= 1), n %= this.P, i < 0 && (i += this.F), {
                                    curNodeBucketIndex: n,
                                    curNodePointerIndex: i
                                }
                            }
                            clear() {
                                this.A = [new Array(this.F)], this.P = 1, this.j = this.R = this.i = 0, this.D = this.N = this.F >> 1
                            }
                            begin() {
                                return new n(0, this)
                            }
                            end() {
                                return new n(this.i, this)
                            }
                            rBegin() {
                                return new n(this.i - 1, this, 1)
                            }
                            rEnd() {
                                return new n(-1, this, 1)
                            }
                            front() {
                                if (0 !== this.i) return this.A[this.j][this.D]
                            }
                            back() {
                                if (0 !== this.i) return this.A[this.R][this.N]
                            }
                            pushBack(e) {
                                return this.i && (this.N < this.F - 1 ? this.N += 1 : this.R < this.P - 1 ? (this.R += 1, this.N = 0) : (this.R = 0, this.N = 0), this.R === this.j && this.N === this.D && this.T()), this.i += 1, this.A[this.R][this.N] = e, this.i
                            }
                            popBack() {
                                if (0 === this.i) return;
                                let e = this.A[this.R][this.N];
                                return 1 !== this.i && (this.N > 0 ? this.N -= 1 : this.R > 0 ? (this.R -= 1, this.N = this.F - 1) : (this.R = this.P - 1, this.N = this.F - 1)), this.i -= 1, e
                            }
                            pushFront(e) {
                                return this.i && (this.D > 0 ? this.D -= 1 : this.j > 0 ? (this.j -= 1, this.D = this.F - 1) : (this.j = this.P - 1, this.D = this.F - 1), this.j === this.R && this.D === this.N && this.T()), this.i += 1, this.A[this.j][this.D] = e, this.i
                            }
                            popFront() {
                                if (0 === this.i) return;
                                let e = this.A[this.j][this.D];
                                return 1 !== this.i && (this.D < this.F - 1 ? this.D += 1 : this.j < this.P - 1 ? (this.j += 1, this.D = 0) : (this.j = 0, this.D = 0)), this.i -= 1, e
                            }
                            getElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let {
                                    curNodeBucketIndex: t,
                                    curNodePointerIndex: r
                                } = this.O(e);
                                return this.A[t][r]
                            }
                            setElementByPos(e, t) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let {
                                    curNodeBucketIndex: r,
                                    curNodePointerIndex: i
                                } = this.O(e);
                                this.A[r][i] = t
                            }
                            insert(e, t, r = 1) {
                                if (e < 0 || e > this.i) throw new RangeError;
                                if (0 === e)
                                    for (; r--;) this.pushFront(t);
                                else if (e === this.i)
                                    for (; r--;) this.pushBack(t);
                                else {
                                    let i = [];
                                    for (let t = e; t < this.i; ++t) i.push(this.getElementByPos(t));
                                    this.cut(e - 1);
                                    for (let e = 0; e < r; ++e) this.pushBack(t);
                                    for (let e = 0; e < i.length; ++e) this.pushBack(i[e])
                                }
                                return this.i
                            }
                            cut(e) {
                                if (e < 0) return this.clear(), 0;
                                let {
                                    curNodeBucketIndex: t,
                                    curNodePointerIndex: r
                                } = this.O(e);
                                return this.R = t, this.N = r, this.i = e + 1, this.i
                            }
                            eraseElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                if (0 === e) this.popFront();
                                else if (e === this.i - 1) this.popBack();
                                else {
                                    let t = [];
                                    for (let r = e + 1; r < this.i; ++r) t.push(this.getElementByPos(r));
                                    this.cut(e), this.popBack();
                                    let r = this;
                                    t.forEach((function(e) {
                                        r.pushBack(e)
                                    }))
                                }
                                return this.i
                            }
                            eraseElementByValue(e) {
                                if (0 === this.i) return 0;
                                let t = [];
                                for (let r = 0; r < this.i; ++r) {
                                    let i = this.getElementByPos(r);
                                    i !== e && t.push(i)
                                }
                                let r = t.length;
                                for (let e = 0; e < r; ++e) this.setElementByPos(e, t[e]);
                                return this.cut(r - 1)
                            }
                            eraseElementByIterator(e) {
                                let t = e.o;
                                return this.eraseElementByPos(t), e.next()
                            }
                            find(e) {
                                for (let t = 0; t < this.i; ++t)
                                    if (this.getElementByPos(t) === e) return new n(t, this);
                                return this.end()
                            }
                            reverse() {
                                let e = 0,
                                    t = this.i - 1;
                                for (; e < t;) {
                                    let r = this.getElementByPos(e);
                                    this.setElementByPos(e, this.getElementByPos(t)), this.setElementByPos(t, r), e += 1, t -= 1
                                }
                            }
                            unique() {
                                if (this.i <= 1) return this.i;
                                let e = 1,
                                    t = this.getElementByPos(0);
                                for (let r = 1; r < this.i; ++r) {
                                    let i = this.getElementByPos(r);
                                    i !== t && (t = i, this.setElementByPos(e++, i))
                                }
                                for (; this.i > e;) this.popBack();
                                return this.i
                            }
                            sort(e) {
                                let t = [];
                                for (let e = 0; e < this.i; ++e) t.push(this.getElementByPos(e));
                                t.sort(e);
                                for (let e = 0; e < this.i; ++e) this.setElementByPos(e, t[e])
                            }
                            shrinkToFit() {
                                if (0 === this.i) return;
                                let e = [];
                                this.forEach((function(t) {
                                    e.push(t)
                                })), this.P = Math.max(Math.ceil(this.i / this.F), 1), this.i = this.j = this.R = this.D = this.N = 0, this.A = [];
                                for (let e = 0; e < this.P; ++e) this.A.push(new Array(this.F));
                                for (let t = 0; t < e.length; ++t) this.pushBack(e[t])
                            }
                            forEach(e) {
                                for (let t = 0; t < this.i; ++t) e(this.getElementByPos(t), t, this)
                            } [Symbol.iterator]() {
                                return function*() {
                                    for (let e = 0; e < this.i; ++e) yield this.getElementByPos(e)
                                }.bind(this)()
                            }
                        };
                    e.default = o
                })),
                Xi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.TreeNodeEnableIndex = e.TreeNode = void 0;
                    var t = class {
                        constructor(e, t) {
                            this.ee = 1, this.u = void 0, this.l = void 0, this.U = void 0, this.W = void 0, this.tt = void 0, this.u = e, this.l = t
                        }
                        L() {
                            let e = this;
                            if (1 === e.ee && e.tt.tt === e) e = e.W;
                            else if (e.U)
                                for (e = e.U; e.W;) e = e.W;
                            else {
                                let t = e.tt;
                                for (; t.U === e;) e = t, t = e.tt;
                                e = t
                            }
                            return e
                        }
                        B() {
                            let e = this;
                            if (e.W) {
                                for (e = e.W; e.U;) e = e.U;
                                return e
                            } {
                                let t = e.tt;
                                for (; t.W === e;) e = t, t = e.tt;
                                return e.W !== t ? t : e
                            }
                        }
                        te() {
                            let e = this.tt,
                                t = this.W,
                                r = t.U;
                            return e.tt === this ? e.tt = t : e.U === this ? e.U = t : e.W = t, t.tt = e, t.U = this, this.tt = t, this.W = r, r && (r.tt = this), t
                        }
                        se() {
                            let e = this.tt,
                                t = this.U,
                                r = t.W;
                            return e.tt === this ? e.tt = t : e.U === this ? e.U = t : e.W = t, t.tt = e, t.W = this, this.tt = t, this.U = r, r && (r.tt = this), t
                        }
                    };
                    e.TreeNode = t, e.TreeNodeEnableIndex = class extends t {
                        constructor() {
                            super(...arguments), this.rt = 1
                        }
                        te() {
                            let e = super.te();
                            return this.ie(), e.ie(), e
                        }
                        se() {
                            let e = super.se();
                            return this.ie(), e.ie(), e
                        }
                        ie() {
                            this.rt = 1, this.U && (this.rt += this.U.rt), this.W && (this.rt += this.W.rt)
                        }
                    }
                })),
                Zi = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = Xi(),
                        r = $i(),
                        i = Ki(),
                        n = class extends r.Container {
                            constructor(e = function(e, t) {
                                return e < t ? -1 : e > t ? 1 : 0
                            }, r = !1) {
                                super(), this.Y = void 0, this.v = e, r ? (this.re = t.TreeNodeEnableIndex, this.M = function(e, t, r) {
                                    let i = this.ne(e, t, r);
                                    if (i) {
                                        let e = i.tt;
                                        for (; e !== this.h;) e.rt += 1, e = e.tt;
                                        let t = this.he(i);
                                        if (t) {
                                            let {
                                                parentNode: e,
                                                grandParent: r,
                                                curNode: i
                                            } = t;
                                            e.ie(), r.ie(), i.ie()
                                        }
                                    }
                                    return this.i
                                }, this.V = function(e) {
                                    let t = this.fe(e);
                                    for (; t !== this.h;) t.rt -= 1, t = t.tt
                                }) : (this.re = t.TreeNode, this.M = function(e, t, r) {
                                    let i = this.ne(e, t, r);
                                    return i && this.he(i), this.i
                                }, this.V = this.fe), this.h = new this.re
                            }
                            X(e, t) {
                                let r = this.h;
                                for (; e;) {
                                    let i = this.v(e.u, t);
                                    if (i < 0) e = e.W;
                                    else {
                                        if (!(i > 0)) return e;
                                        r = e, e = e.U
                                    }
                                }
                                return r
                            }
                            Z(e, t) {
                                let r = this.h;
                                for (; e;) this.v(e.u, t) <= 0 ? e = e.W : (r = e, e = e.U);
                                return r
                            }
                            $(e, t) {
                                let r = this.h;
                                for (; e;) {
                                    let i = this.v(e.u, t);
                                    if (i < 0) r = e, e = e.W;
                                    else {
                                        if (!(i > 0)) return e;
                                        e = e.U
                                    }
                                }
                                return r
                            }
                            rr(e, t) {
                                let r = this.h;
                                for (; e;) this.v(e.u, t) < 0 ? (r = e, e = e.W) : e = e.U;
                                return r
                            }
                            ue(e) {
                                for (;;) {
                                    let t = e.tt;
                                    if (t === this.h) return;
                                    if (1 === e.ee) return void(e.ee = 0);
                                    if (e === t.U) {
                                        let r = t.W;
                                        if (1 === r.ee) r.ee = 0, t.ee = 1, t === this.Y ? this.Y = t.te() : t.te();
                                        else {
                                            if (r.W && 1 === r.W.ee) return r.ee = t.ee, t.ee = 0, r.W.ee = 0, void(t === this.Y ? this.Y = t.te() : t.te());
                                            r.U && 1 === r.U.ee ? (r.ee = 1, r.U.ee = 0, r.se()) : (r.ee = 1, e = t)
                                        }
                                    } else {
                                        let r = t.U;
                                        if (1 === r.ee) r.ee = 0, t.ee = 1, t === this.Y ? this.Y = t.se() : t.se();
                                        else {
                                            if (r.U && 1 === r.U.ee) return r.ee = t.ee, t.ee = 0, r.U.ee = 0, void(t === this.Y ? this.Y = t.se() : t.se());
                                            r.W && 1 === r.W.ee ? (r.ee = 1, r.W.ee = 0, r.te()) : (r.ee = 1, e = t)
                                        }
                                    }
                                }
                            }
                            fe(e) {
                                if (1 === this.i) return this.clear(), this.h;
                                let t = e;
                                for (; t.U || t.W;) {
                                    if (t.W)
                                        for (t = t.W; t.U;) t = t.U;
                                    else t = t.U;
                                    [e.u, t.u] = [t.u, e.u], [e.l, t.l] = [t.l, e.l], e = t
                                }
                                this.h.U === t ? this.h.U = t.tt : this.h.W === t && (this.h.W = t.tt), this.ue(t);
                                let r = t.tt;
                                return t === r.U ? r.U = void 0 : r.W = void 0, this.i -= 1, this.Y.ee = 0, r
                            }
                            oe(e, t) {
                                return void 0 !== e && (!(!this.oe(e.U, t) && !t(e)) || this.oe(e.W, t))
                            }
                            he(e) {
                                for (;;) {
                                    let t = e.tt;
                                    if (0 === t.ee) return;
                                    let r = t.tt;
                                    if (t === r.U) {
                                        let i = r.W;
                                        if (i && 1 === i.ee) {
                                            if (i.ee = t.ee = 0, r === this.Y) return;
                                            r.ee = 1, e = r;
                                            continue
                                        }
                                        if (e === t.W) {
                                            if (e.ee = 0, e.U && (e.U.tt = t), e.W && (e.W.tt = r), t.W = e.U, r.U = e.W, e.U = t, e.W = r, r === this.Y) this.Y = e, this.h.tt = e;
                                            else {
                                                let t = r.tt;
                                                t.U === r ? t.U = e : t.W = e
                                            }
                                            return e.tt = r.tt, t.tt = e, r.tt = e, r.ee = 1, {
                                                parentNode: t,
                                                grandParent: r,
                                                curNode: e
                                            }
                                        }
                                        t.ee = 0, r === this.Y ? this.Y = r.se() : r.se(), r.ee = 1
                                    } else {
                                        let i = r.U;
                                        if (i && 1 === i.ee) {
                                            if (i.ee = t.ee = 0, r === this.Y) return;
                                            r.ee = 1, e = r;
                                            continue
                                        }
                                        if (e === t.U) {
                                            if (e.ee = 0, e.U && (e.U.tt = r), e.W && (e.W.tt = t), r.W = e.U, t.U = e.W, e.U = r, e.W = t, r === this.Y) this.Y = e, this.h.tt = e;
                                            else {
                                                let t = r.tt;
                                                t.U === r ? t.U = e : t.W = e
                                            }
                                            return e.tt = r.tt, t.tt = e, r.tt = e, r.ee = 1, {
                                                parentNode: t,
                                                grandParent: r,
                                                curNode: e
                                            }
                                        }
                                        t.ee = 0, r === this.Y ? this.Y = r.te() : r.te(), r.ee = 1
                                    }
                                    return
                                }
                            }
                            ne(e, t, r) {
                                if (void 0 === this.Y) return this.i += 1, this.Y = new this.re(e, t), this.Y.ee = 0, this.Y.tt = this.h, this.h.tt = this.Y, this.h.U = this.Y, void(this.h.W = this.Y);
                                let i, n = this.h.U,
                                    o = this.v(n.u, e);
                                if (0 !== o) {
                                    if (o > 0) n.U = new this.re(e, t), n.U.tt = n, i = n.U, this.h.U = i;
                                    else {
                                        let n = this.h.W,
                                            o = this.v(n.u, e);
                                        if (0 === o) return void(n.l = t);
                                        if (o < 0) n.W = new this.re(e, t), n.W.tt = n, i = n.W, this.h.W = i;
                                        else {
                                            if (void 0 !== r) {
                                                let n = r.o;
                                                if (n !== this.h) {
                                                    let r = this.v(n.u, e);
                                                    if (0 === r) return void(n.l = t);
                                                    if (r > 0) {
                                                        let r = n.L(),
                                                            o = this.v(r.u, e);
                                                        if (0 === o) return void(r.l = t);
                                                        o < 0 && (i = new this.re(e, t), void 0 === r.W ? (r.W = i, i.tt = r) : (n.U = i, i.tt = n))
                                                    }
                                                }
                                            }
                                            if (void 0 === i)
                                                for (i = this.Y;;) {
                                                    let r = this.v(i.u, e);
                                                    if (r > 0) {
                                                        if (void 0 === i.U) {
                                                            i.U = new this.re(e, t), i.U.tt = i, i = i.U;
                                                            break
                                                        }
                                                        i = i.U
                                                    } else {
                                                        if (!(r < 0)) return void(i.l = t);
                                                        if (void 0 === i.W) {
                                                            i.W = new this.re(e, t), i.W.tt = i, i = i.W;
                                                            break
                                                        }
                                                        i = i.W
                                                    }
                                                }
                                        }
                                    }
                                    return this.i += 1, i
                                }
                                n.l = t
                            }
                            I(e, t) {
                                for (; e;) {
                                    let r = this.v(e.u, t);
                                    if (r < 0) e = e.W;
                                    else {
                                        if (!(r > 0)) return e;
                                        e = e.U
                                    }
                                }
                                return e || this.h
                            }
                            clear() {
                                this.i = 0, this.Y = void 0, this.h.tt = void 0, this.h.U = this.h.W = void 0
                            }
                            updateKeyByIterator(e, t) {
                                let r = e.o;
                                if (r === this.h && (0, i.throwIteratorAccessError)(), 1 === this.i) return r.u = t, !0;
                                if (r === this.h.U) return this.v(r.B().u, t) > 0 && (r.u = t, !0);
                                if (r === this.h.W) return this.v(r.L().u, t) < 0 && (r.u = t, !0);
                                let n = r.L().u;
                                if (this.v(n, t) >= 0) return !1;
                                let o = r.B().u;
                                return !(this.v(o, t) <= 0 || (r.u = t, 0))
                            }
                            eraseElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let t = 0,
                                    r = this;
                                return this.oe(this.Y, (function(i) {
                                    return e === t ? (r.V(i), !0) : (t += 1, !1)
                                })), this.i
                            }
                            eraseElementByKey(e) {
                                if (0 === this.i) return !1;
                                let t = this.I(this.Y, e);
                                return t !== this.h && (this.V(t), !0)
                            }
                            eraseElementByIterator(e) {
                                let t = e.o;
                                t === this.h && (0, i.throwIteratorAccessError)();
                                let r = void 0 === t.W;
                                return 0 === e.iteratorType ? r && e.next() : (!r || void 0 === t.U) && e.next(), this.V(t), e
                            }
                            forEach(e) {
                                let t = 0;
                                for (let r of this) e(r, t++, this)
                            }
                            getElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let t, r = 0;
                                for (let i of this) {
                                    if (r === e) {
                                        t = i;
                                        break
                                    }
                                    r += 1
                                }
                                return t
                            }
                            getHeight() {
                                if (0 === this.i) return 0;
                                let e = function(t) {
                                    return t ? Math.max(e(t.U), e(t.W)) + 1 : 0
                                };
                                return e(this.Y)
                            }
                        };
                    e.default = n
                })),
                en = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = $i(),
                        r = Ki(),
                        i = class extends t.ContainerIterator {
                            constructor(e, t, i) {
                                super(i), this.o = e, this.h = t, 0 === this.iteratorType ? (this.pre = function() {
                                    return this.o === this.h.U && (0, r.throwIteratorAccessError)(), this.o = this.o.L(), this
                                }, this.next = function() {
                                    return this.o === this.h && (0, r.throwIteratorAccessError)(), this.o = this.o.B(), this
                                }) : (this.pre = function() {
                                    return this.o === this.h.W && (0, r.throwIteratorAccessError)(), this.o = this.o.B(), this
                                }, this.next = function() {
                                    return this.o === this.h && (0, r.throwIteratorAccessError)(), this.o = this.o.L(), this
                                })
                            }
                            get index() {
                                let e = this.o,
                                    t = this.h.tt;
                                if (e === this.h) return t ? t.rt - 1 : 0;
                                let r = 0;
                                for (e.U && (r += e.U.rt); e !== t;) {
                                    let t = e.tt;
                                    e === t.W && (r += 1, t.U && (r += t.U.rt)), e = t
                                }
                                return r
                            }
                        };
                    e.default = i
                })),
                tn = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = n(Zi()),
                        r = n(en()),
                        i = Ki();

                    function n(e) {
                        return e && e.t ? e : {
                            default: e
                        }
                    }
                    var o = class e extends r.default {
                            constructor(e, t, r, i) {
                                super(e, t, i), this.container = r
                            }
                            get pointer() {
                                return this.o === this.h && (0, i.throwIteratorAccessError)(), this.o.u
                            }
                            copy() {
                                return new e(this.o, this.h, this.container, this.iteratorType)
                            }
                        },
                        s = class extends t.default {
                            constructor(e = [], t, r) {
                                super(t, r);
                                let i = this;
                                e.forEach((function(e) {
                                    i.insert(e)
                                }))
                            }* K(e) {
                                void 0 !== e && (yield* this.K(e.U), yield e.u, yield* this.K(e.W))
                            }
                            begin() {
                                return new o(this.h.U || this.h, this.h, this)
                            }
                            end() {
                                return new o(this.h, this.h, this)
                            }
                            rBegin() {
                                return new o(this.h.W || this.h, this.h, this, 1)
                            }
                            rEnd() {
                                return new o(this.h, this.h, this, 1)
                            }
                            front() {
                                return this.h.U ? this.h.U.u : void 0
                            }
                            back() {
                                return this.h.W ? this.h.W.u : void 0
                            }
                            insert(e, t) {
                                return this.M(e, void 0, t)
                            }
                            find(e) {
                                let t = this.I(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            lowerBound(e) {
                                let t = this.X(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            upperBound(e) {
                                let t = this.Z(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            reverseLowerBound(e) {
                                let t = this.$(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            reverseUpperBound(e) {
                                let t = this.rr(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            union(e) {
                                let t = this;
                                return e.forEach((function(e) {
                                    t.insert(e)
                                })), this.i
                            } [Symbol.iterator]() {
                                return this.K(this.Y)
                            }
                        };
                    e.default = s
                })),
                rn = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = n(Zi()),
                        r = n(en()),
                        i = Ki();

                    function n(e) {
                        return e && e.t ? e : {
                            default: e
                        }
                    }
                    var o = class e extends r.default {
                            constructor(e, t, r, i) {
                                super(e, t, i), this.container = r
                            }
                            get pointer() {
                                this.o === this.h && (0, i.throwIteratorAccessError)();
                                let e = this;
                                return new Proxy([], {
                                    get: (t, r) => "0" === r ? e.o.u : "1" === r ? e.o.l : void 0,
                                    set(t, r, i) {
                                        if ("1" !== r) throw new TypeError("props must be 1");
                                        return e.o.l = i, !0
                                    }
                                })
                            }
                            copy() {
                                return new e(this.o, this.h, this.container, this.iteratorType)
                            }
                        },
                        s = class extends t.default {
                            constructor(e = [], t, r) {
                                super(t, r);
                                let i = this;
                                e.forEach((function(e) {
                                    i.setElement(e[0], e[1])
                                }))
                            }* K(e) {
                                void 0 !== e && (yield* this.K(e.U), yield [e.u, e.l], yield* this.K(e.W))
                            }
                            begin() {
                                return new o(this.h.U || this.h, this.h, this)
                            }
                            end() {
                                return new o(this.h, this.h, this)
                            }
                            rBegin() {
                                return new o(this.h.W || this.h, this.h, this, 1)
                            }
                            rEnd() {
                                return new o(this.h, this.h, this, 1)
                            }
                            front() {
                                if (0 === this.i) return;
                                let e = this.h.U;
                                return [e.u, e.l]
                            }
                            back() {
                                if (0 === this.i) return;
                                let e = this.h.W;
                                return [e.u, e.l]
                            }
                            lowerBound(e) {
                                let t = this.X(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            upperBound(e) {
                                let t = this.Z(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            reverseLowerBound(e) {
                                let t = this.$(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            reverseUpperBound(e) {
                                let t = this.rr(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            setElement(e, t, r) {
                                return this.M(e, t, r)
                            }
                            find(e) {
                                let t = this.I(this.Y, e);
                                return new o(t, this.h, this)
                            }
                            getElementByKey(e) {
                                return this.I(this.Y, e).l
                            }
                            union(e) {
                                let t = this;
                                return e.forEach((function(e) {
                                    t.setElement(e[0], e[1])
                                })), this.i
                            } [Symbol.iterator]() {
                                return this.K(this.Y)
                            }
                        };
                    e.default = s
                })),
                nn = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = function(e) {
                        let t = typeof e;
                        return "object" === t && null !== e || "function" === t
                    }
                })),
                on = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.HashContainerIterator = e.HashContainer = void 0;
                    var t, r = $i(),
                        i = (t = nn()) && t.t ? t : {
                            default: t
                        },
                        n = Ki(),
                        o = class extends r.ContainerIterator {
                            constructor(e, t, r) {
                                super(r), this.o = e, this.h = t, 0 === this.iteratorType ? (this.pre = function() {
                                    return this.o.L === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.L, this
                                }, this.next = function() {
                                    return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.B, this
                                }) : (this.pre = function() {
                                    return this.o.B === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.B, this
                                }, this.next = function() {
                                    return this.o === this.h && (0, n.throwIteratorAccessError)(), this.o = this.o.L, this
                                })
                            }
                        };
                    e.HashContainerIterator = o;
                    var s = class extends r.Container {
                        constructor() {
                            super(), this.H = [], this.g = {}, this.HASH_TAG = Symbol("@@HASH_TAG"), Object.setPrototypeOf(this.g, null), this.h = {}, this.h.L = this.h.B = this.p = this._ = this.h
                        }
                        V(e) {
                            let {
                                L: t,
                                B: r
                            } = e;
                            t.B = r, r.L = t, e === this.p && (this.p = r), e === this._ && (this._ = t), this.i -= 1
                        }
                        M(e, t, r) {
                            let n;
                            if (void 0 === r && (r = (0, i.default)(e)), r) {
                                let r = e[this.HASH_TAG];
                                if (void 0 !== r) return this.H[r].l = t, this.i;
                                Object.defineProperty(e, this.HASH_TAG, {
                                    value: this.H.length,
                                    configurable: !0
                                }), n = {
                                    u: e,
                                    l: t,
                                    L: this._,
                                    B: this.h
                                }, this.H.push(n)
                            } else {
                                let r = this.g[e];
                                if (r) return r.l = t, this.i;
                                n = {
                                    u: e,
                                    l: t,
                                    L: this._,
                                    B: this.h
                                }, this.g[e] = n
                            }
                            return 0 === this.i ? (this.p = n, this.h.B = n) : this._.B = n, this._ = n, this.h.L = n, ++this.i
                        }
                        I(e, t) {
                            if (void 0 === t && (t = (0, i.default)(e)), t) {
                                let t = e[this.HASH_TAG];
                                return void 0 === t ? this.h : this.H[t]
                            }
                            return this.g[e] || this.h
                        }
                        clear() {
                            let e = this.HASH_TAG;
                            this.H.forEach((function(t) {
                                delete t.u[e]
                            })), this.H = [], this.g = {}, Object.setPrototypeOf(this.g, null), this.i = 0, this.p = this._ = this.h.L = this.h.B = this.h
                        }
                        eraseElementByKey(e, t) {
                            let r;
                            if (void 0 === t && (t = (0, i.default)(e)), t) {
                                let t = e[this.HASH_TAG];
                                if (void 0 === t) return !1;
                                delete e[this.HASH_TAG], r = this.H[t], delete this.H[t]
                            } else {
                                if (r = this.g[e], void 0 === r) return !1;
                                delete this.g[e]
                            }
                            return this.V(r), !0
                        }
                        eraseElementByIterator(e) {
                            let t = e.o;
                            return t === this.h && (0, n.throwIteratorAccessError)(), this.V(t), e.next()
                        }
                        eraseElementByPos(e) {
                            if (e < 0 || e > this.i - 1) throw new RangeError;
                            let t = this.p;
                            for (; e--;) t = t.B;
                            return this.V(t), this.i
                        }
                    };
                    e.HashContainer = s
                })),
                sn = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t = on(),
                        r = Ki(),
                        i = class e extends t.HashContainerIterator {
                            constructor(e, t, r, i) {
                                super(e, t, i), this.container = r
                            }
                            get pointer() {
                                return this.o === this.h && (0, r.throwIteratorAccessError)(), this.o.u
                            }
                            copy() {
                                return new e(this.o, this.h, this.container, this.iteratorType)
                            }
                        },
                        n = class extends t.HashContainer {
                            constructor(e = []) {
                                super();
                                let t = this;
                                e.forEach((function(e) {
                                    t.insert(e)
                                }))
                            }
                            begin() {
                                return new i(this.p, this.h, this)
                            }
                            end() {
                                return new i(this.h, this.h, this)
                            }
                            rBegin() {
                                return new i(this._, this.h, this, 1)
                            }
                            rEnd() {
                                return new i(this.h, this.h, this, 1)
                            }
                            front() {
                                return this.p.u
                            }
                            back() {
                                return this._.u
                            }
                            insert(e, t) {
                                return this.M(e, void 0, t)
                            }
                            getElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let t = this.p;
                                for (; e--;) t = t.B;
                                return t.u
                            }
                            find(e, t) {
                                let r = this.I(e, t);
                                return new i(r, this.h, this)
                            }
                            forEach(e) {
                                let t = 0,
                                    r = this.p;
                                for (; r !== this.h;) e(r.u, t++, this), r = r.B
                            } [Symbol.iterator]() {
                                return function*() {
                                    let e = this.p;
                                    for (; e !== this.h;) yield e.u, e = e.B
                                }.bind(this)()
                            }
                        };
                    e.default = n
                })),
                an = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), e.default = void 0;
                    var t, r = on(),
                        i = (t = nn()) && t.t ? t : {
                            default: t
                        },
                        n = Ki(),
                        o = class e extends r.HashContainerIterator {
                            constructor(e, t, r, i) {
                                super(e, t, i), this.container = r
                            }
                            get pointer() {
                                this.o === this.h && (0, n.throwIteratorAccessError)();
                                let e = this;
                                return new Proxy([], {
                                    get: (t, r) => "0" === r ? e.o.u : "1" === r ? e.o.l : void 0,
                                    set(t, r, i) {
                                        if ("1" !== r) throw new TypeError("props must be 1");
                                        return e.o.l = i, !0
                                    }
                                })
                            }
                            copy() {
                                return new e(this.o, this.h, this.container, this.iteratorType)
                            }
                        },
                        s = class extends r.HashContainer {
                            constructor(e = []) {
                                super();
                                let t = this;
                                e.forEach((function(e) {
                                    t.setElement(e[0], e[1])
                                }))
                            }
                            begin() {
                                return new o(this.p, this.h, this)
                            }
                            end() {
                                return new o(this.h, this.h, this)
                            }
                            rBegin() {
                                return new o(this._, this.h, this, 1)
                            }
                            rEnd() {
                                return new o(this.h, this.h, this, 1)
                            }
                            front() {
                                if (0 !== this.i) return [this.p.u, this.p.l]
                            }
                            back() {
                                if (0 !== this.i) return [this._.u, this._.l]
                            }
                            setElement(e, t, r) {
                                return this.M(e, t, r)
                            }
                            getElementByKey(e, t) {
                                if (void 0 === t && (t = (0, i.default)(e)), t) {
                                    let t = e[this.HASH_TAG];
                                    return void 0 !== t ? this.H[t].l : void 0
                                }
                                let r = this.g[e];
                                return r ? r.l : void 0
                            }
                            getElementByPos(e) {
                                if (e < 0 || e > this.i - 1) throw new RangeError;
                                let t = this.p;
                                for (; e--;) t = t.B;
                                return [t.u, t.l]
                            }
                            find(e, t) {
                                let r = this.I(e, t);
                                return new o(r, this.h, this)
                            }
                            forEach(e) {
                                let t = 0,
                                    r = this.p;
                                for (; r !== this.h;) e([r.u, r.l], t++, this), r = r.B
                            } [Symbol.iterator]() {
                                return function*() {
                                    let e = this.p;
                                    for (; e !== this.h;) yield [e.u, e.l], e = e.B
                                }.bind(this)()
                            }
                        };
                    e.default = s
                })),
                ln = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "t", {
                        value: !0
                    }), Object.defineProperty(e, "Deque", {
                        enumerable: !0,
                        get: function() {
                            return s.default
                        }
                    }), Object.defineProperty(e, "HashMap", {
                        enumerable: !0,
                        get: function() {
                            return u.default
                        }
                    }), Object.defineProperty(e, "HashSet", {
                        enumerable: !0,
                        get: function() {
                            return h.default
                        }
                    }), Object.defineProperty(e, "LinkList", {
                        enumerable: !0,
                        get: function() {
                            return o.default
                        }
                    }), Object.defineProperty(e, "OrderedMap", {
                        enumerable: !0,
                        get: function() {
                            return l.default
                        }
                    }), Object.defineProperty(e, "OrderedSet", {
                        enumerable: !0,
                        get: function() {
                            return a.default
                        }
                    }), Object.defineProperty(e, "PriorityQueue", {
                        enumerable: !0,
                        get: function() {
                            return i.default
                        }
                    }), Object.defineProperty(e, "Queue", {
                        enumerable: !0,
                        get: function() {
                            return r.default
                        }
                    }), Object.defineProperty(e, "Stack", {
                        enumerable: !0,
                        get: function() {
                            return t.default
                        }
                    }), Object.defineProperty(e, "Vector", {
                        enumerable: !0,
                        get: function() {
                            return n.default
                        }
                    });
                    var t = c(qi()),
                        r = c(Vi()),
                        i = c(Hi()),
                        n = c(Qi()),
                        o = c(Yi()),
                        s = c(Ji()),
                        a = c(tn()),
                        l = c(rn()),
                        h = c(sn()),
                        u = c(an());

                    function c(e) {
                        return e && e.t ? e : {
                            default: e
                        }
                    }
                })),
                hn = h(((e, t) => {
                    f(), rt(), qe();
                    var r = ln().OrderedSet,
                        n = Ai()("number-allocator:trace"),
                        o = Ai()("number-allocator:error");

                    function s(e, t) {
                        this.low = e, this.high = t
                    }

                    function a(e, t) {
                        if (!(this instanceof a)) return new a(e, t);
                        this.min = e, this.max = t, this.ss = new r([], ((e, t) => e.compare(t))), n("Create"), this.clear()
                    }
                    s.prototype.equals = function(e) {
                        return this.low === e.low && this.high === e.high
                    }, s.prototype.compare = function(e) {
                        return this.low < e.low && this.high < e.low ? -1 : e.low < this.low && e.high < this.low ? 1 : 0
                    }, a.prototype.firstVacant = function() {
                        return 0 === this.ss.size() ? null : this.ss.front().low
                    }, a.prototype.alloc = function() {
                        if (0 === this.ss.size()) return n("alloc():empty"), null;
                        let e = this.ss.begin(),
                            t = e.pointer.low,
                            r = e.pointer.high,
                            i = t;
                        return i + 1 <= r ? this.ss.updateKeyByIterator(e, new s(t + 1, r)) : this.ss.eraseElementByPos(0), n("alloc():" + i), i
                    }, a.prototype.use = function(e) {
                        let t = new s(e, e),
                            r = this.ss.lowerBound(t);
                        if (!r.equals(this.ss.end())) {
                            let i = r.pointer.low,
                                o = r.pointer.high;
                            return r.pointer.equals(t) ? (this.ss.eraseElementByIterator(r), n("use():" + e), !0) : !(i > e || (i === e ? (this.ss.updateKeyByIterator(r, new s(i + 1, o)), n("use():" + e), 0) : o === e ? (this.ss.updateKeyByIterator(r, new s(i, o - 1)), n("use():" + e), 0) : (this.ss.updateKeyByIterator(r, new s(e + 1, o)), this.ss.insert(new s(i, e - 1)), n("use():" + e), 0)))
                        }
                        return n("use():failed"), !1
                    }, a.prototype.free = function(e) {
                        if (e < this.min || e > this.max) return void o("free():" + e + " is out of range");
                        let t = new s(e, e),
                            r = this.ss.upperBound(t);
                        if (r.equals(this.ss.end())) {
                            if (r.equals(this.ss.begin())) return void this.ss.insert(t);
                            r.pre();
                            let i = r.pointer.high;
                            r.pointer.high + 1 === e ? this.ss.updateKeyByIterator(r, new s(i, e)) : this.ss.insert(t)
                        } else if (r.equals(this.ss.begin()))
                            if (e + 1 === r.pointer.low) {
                                let t = r.pointer.high;
                                this.ss.updateKeyByIterator(r, new s(e, t))
                            } else this.ss.insert(t);
                        else {
                            let i = r.pointer.low,
                                n = r.pointer.high;
                            r.pre();
                            let o = r.pointer.low;
                            r.pointer.high + 1 === e ? e + 1 === i ? (this.ss.eraseElementByIterator(r), this.ss.updateKeyByIterator(r, new s(o, n))) : this.ss.updateKeyByIterator(r, new s(o, e)) : e + 1 === i ? (this.ss.eraseElementByIterator(r.next()), this.ss.insert(new s(e, n))) : this.ss.insert(t)
                        }
                        n("free():" + e)
                    }, a.prototype.clear = function() {
                        n("clear()"), this.ss.clear(), this.ss.insert(new s(this.min, this.max))
                    }, a.prototype.intervalCount = function() {
                        return this.ss.size()
                    }, a.prototype.dump = function() {
                        i.log("length:" + this.ss.size());
                        for (let e of this.ss) i.log(e)
                    }, t.exports = a
                })),
                un = h(((e, t) => {
                    f(), rt(), qe();
                    var r = hn();
                    t.exports.NumberAllocator = r
                })),
                cn = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = Wi(),
                        r = un();
                    e.default = class {
                        constructor(e) {
                            e > 0 && (this.aliasToTopic = new t.LRUCache({
                                max: e
                            }), this.topicToAlias = {}, this.numberAllocator = new r.NumberAllocator(1, e), this.max = e, this.length = 0)
                        }
                        put(e, t) {
                            if (0 === t || t > this.max) return !1;
                            let r = this.aliasToTopic.get(t);
                            return r && delete this.topicToAlias[r], this.aliasToTopic.set(t, e), this.topicToAlias[e] = t, this.numberAllocator.use(t), this.length = this.aliasToTopic.size, !0
                        }
                        getTopicByAlias(e) {
                            return this.aliasToTopic.get(e)
                        }
                        getAliasByTopic(e) {
                            let t = this.topicToAlias[e];
                            return typeof t < "u" && this.aliasToTopic.get(t), t
                        }
                        clear() {
                            this.aliasToTopic.clear(), this.topicToAlias = {}, this.numberAllocator.clear(), this.length = 0
                        }
                        getLruAlias() {
                            return this.numberAllocator.firstVacant() || [...this.aliasToTopic.keys()][this.aliasToTopic.size - 1]
                        }
                    }
                })),
                fn = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = Di(),
                        i = t(cn()),
                        n = ji();
                    e.default = (e, t) => {
                        e.log("_handleConnack");
                        let {
                            options: o
                        } = e, s = 5 === o.protocolVersion ? t.reasonCode : t.returnCode;
                        if (clearTimeout(e.connackTimer), delete e.topicAliasSend, t.properties) {
                            if (t.properties.topicAliasMaximum) {
                                if (t.properties.topicAliasMaximum > 65535) return void e.emit("error", new Error("topicAliasMaximum from broker is out of range"));
                                t.properties.topicAliasMaximum > 0 && (e.topicAliasSend = new i.default(t.properties.topicAliasMaximum))
                            }
                            t.properties.serverKeepAlive && o.keepalive && (o.keepalive = t.properties.serverKeepAlive, e._shiftPingInterval()), t.properties.maximumPacketSize && (o.properties || (o.properties = {}), o.properties.maximumPacketSize = t.properties.maximumPacketSize)
                        }
                        if (0 === s) e.reconnecting = !1, e._onConnect(t);
                        else if (s > 0) {
                            let t = new n.ErrorWithReasonCode(`Connection refused: ${r.ReasonCodes[s]}`, s);
                            e.emit("error", t)
                        }
                    }
                })),
                pn = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.default = (e, t, r) => {
                        e.log("handling pubrel packet");
                        let i = typeof r < "u" ? r : e.noop,
                            {
                                messageId: n
                            } = t,
                            o = {
                                cmd: "pubcomp",
                                messageId: n
                            };
                        e.incomingStore.get(t, ((t, r) => {
                            t ? e._sendPacket(o, i) : (e.emit("message", r.topic, r.payload, r), e.handleMessage(r, (t => {
                                if (t) return i(t);
                                e.incomingStore.del(r, e.noop), e._sendPacket(o, i)
                            })))
                        }))
                    }
                })),
                dn = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = t(Ni()),
                        i = t(Fi()),
                        n = t(fn()),
                        o = t(Di()),
                        s = t(pn());
                    e.default = (e, t, a) => {
                        let {
                            options: l
                        } = e;
                        if (5 === l.protocolVersion && l.properties && l.properties.maximumPacketSize && l.properties.maximumPacketSize < t.length) return e.emit("error", new Error(`exceeding packets size ${t.cmd}`)), e.end({
                            reasonCode: 149,
                            properties: {
                                reasonString: "Maximum packet size was exceeded"
                            }
                        }), e;
                        switch (e.log("_handlePacket :: emitting packetreceive"), e.emit("packetreceive", t), t.cmd) {
                            case "publish":
                                (0, r.default)(e, t, a);
                                break;
                            case "puback":
                            case "pubrec":
                            case "pubcomp":
                            case "suback":
                            case "unsuback":
                                (0, o.default)(e, t), a();
                                break;
                            case "pubrel":
                                (0, s.default)(e, t, a);
                                break;
                            case "connack":
                                (0, n.default)(e, t), a();
                                break;
                            case "auth":
                                (0, i.default)(e, t), a();
                                break;
                            case "pingresp":
                                e.pingResp = !0, a();
                                break;
                            case "disconnect":
                                e.emit("disconnect", t), a();
                                break;
                            default:
                                e.log("_handlePacket :: unknown command"), a()
                        }
                    }
                })),
                gn = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.TypedEventEmitter = void 0;
                    var r = t((Nt(), c(Ot))),
                        i = ji(),
                        n = class {};
                    e.TypedEventEmitter = n, (0, i.applyMixin)(n, r.default)
                })),
                bn = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__createBinding || (Object.create ? function(e, t, r, i) {
                            void 0 === i && (i = r);
                            var n = Object.getOwnPropertyDescriptor(t, r);
                            (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                                enumerable: !0,
                                get: function() {
                                    return t[r]
                                }
                            }), Object.defineProperty(e, i, n)
                        } : function(e, t, r, i) {
                            void 0 === i && (i = r), e[i] = t[r]
                        }),
                        r = e && e.__setModuleDefault || (Object.create ? function(e, t) {
                            Object.defineProperty(e, "default", {
                                enumerable: !0,
                                value: t
                            })
                        } : function(e, t) {
                            e.default = t
                        }),
                        i = e && e.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var i = {};
                            if (null != e)
                                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && t(i, e, n);
                            return r(i, e), i
                        },
                        n = e && e.__importDefault || function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var o = n(it()),
                        s = n(Oi()),
                        a = n(Pi()),
                        l = bi(),
                        h = n(Bi()),
                        u = n(Ui()),
                        c = i(Mi()),
                        d = n(Ai()),
                        g = n(Li()),
                        b = n(dn()),
                        y = gn(),
                        m = p ? p.nextTick : e => {
                            setTimeout(e, 0)
                        },
                        w = window.setImmediate || ((...e) => {
                            let t = e.shift();
                            m((() => {
                                t(...e)
                            }))
                        }),
                        _ = {
                            keepalive: 60,
                            reschedulePings: !0,
                            protocolId: "MQTT",
                            protocolVersion: 4,
                            reconnectPeriod: 1e3,
                            connectTimeout: 3e4,
                            clean: !0,
                            resubscribe: !0,
                            writeCache: !0
                        },
                        v = ["ECONNREFUSED", "EADDRINUSE", "ECONNRESET", "ENOTFOUND", "ETIMEDOUT"],
                        E = class e extends y.TypedEventEmitter {
                            static defaultId() {
                                return `mqttjs_${Math.random().toString(16).substr(2,8)}`
                            }
                            constructor(t, r) {
                                super(), this.options = r || {};
                                for (let e in _) typeof this.options[e] > "u" ? this.options[e] = _[e] : this.options[e] = r[e];
                                this.log = this.options.log || (0, d.default)("mqttjs:client"), this.noop = this._noop.bind(this), this.log("MqttClient :: options.protocol", r.protocol), this.log("MqttClient :: options.protocolVersion", r.protocolVersion), this.log("MqttClient :: options.username", r.username), this.log("MqttClient :: options.keepalive", r.keepalive), this.log("MqttClient :: options.reconnectPeriod", r.reconnectPeriod), this.log("MqttClient :: options.rejectUnauthorized", r.rejectUnauthorized), this.log("MqttClient :: options.properties.topicAliasMaximum", r.properties ? r.properties.topicAliasMaximum : void 0), this.options.clientId = "string" == typeof r.clientId ? r.clientId : e.defaultId(), this.log("MqttClient :: clientId", this.options.clientId), this.options.customHandleAcks = 5 === r.protocolVersion && r.customHandleAcks ? r.customHandleAcks : (...e) => {
                                    e[3](null, 0)
                                }, this.options.writeCache || (s.default.writeToStream.cacheNumbers = !1), this.streamBuilder = t, this.messageIdProvider = typeof this.options.messageIdProvider > "u" ? new a.default : this.options.messageIdProvider, this.outgoingStore = r.outgoingStore || new g.default, this.incomingStore = r.incomingStore || new g.default, this.queueQoSZero = void 0 === r.queueQoSZero || r.queueQoSZero, this._resubscribeTopics = {}, this.messageIdToTopic = {}, this.pingTimer = null, this.connected = !1, this.disconnecting = !1, this.reconnecting = !1, this.queue = [], this.connackTimer = null, this.reconnectTimer = null, this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}, this._storeProcessingQueue = [], this.outgoing = {}, this._firstConnection = !0, r.properties && r.properties.topicAliasMaximum > 0 && (r.properties.topicAliasMaximum > 65535 ? this.log("MqttClient :: options.properties.topicAliasMaximum is out of range") : this.topicAliasRecv = new o.default(r.properties.topicAliasMaximum)), this.on("connect", (() => {
                                    let {
                                        queue: e
                                    } = this, t = () => {
                                        let r = e.shift();
                                        this.log("deliver :: entry %o", r);
                                        let i = null;
                                        if (!r) return void this._resubscribe();
                                        i = r.packet, this.log("deliver :: call _sendPacket for %o", i);
                                        let n = !0;
                                        i.messageId && 0 !== i.messageId && (this.messageIdProvider.register(i.messageId) || (n = !1)), n ? this._sendPacket(i, (e => {
                                            r.cb && r.cb(e), t()
                                        })) : (this.log("messageId: %d has already used. The message is skipped and removed.", i.messageId), t())
                                    };
                                    this.log("connect :: sending queued packets"), t()
                                })), this.on("close", (() => {
                                    this.log("close :: connected set to `false`"), this.connected = !1, this.log("close :: clearing connackTimer"), clearTimeout(this.connackTimer), this.log("close :: clearing ping timer"), null !== this.pingTimer && (this.pingTimer.clear(), this.pingTimer = null), this.topicAliasRecv && this.topicAliasRecv.clear(), this.log("close :: calling _setupReconnect"), this._setupReconnect()
                                })), this.options.manualConnect || (this.log("MqttClient :: setting up stream"), this.connect())
                            }
                            handleAuth(e, t) {
                                t()
                            }
                            handleMessage(e, t) {
                                t()
                            }
                            _nextId() {
                                return this.messageIdProvider.allocate()
                            }
                            getLastMessageId() {
                                return this.messageIdProvider.getLastAllocated()
                            }
                            connect() {
                                var e;
                                let t = new l.Writable,
                                    r = s.default.parser(this.options),
                                    i = null,
                                    n = [];
                                this.log("connect :: calling method to clear reconnect"), this._clearReconnect(), this.log("connect :: using streamBuilder provided to client to create stream"), this.stream = this.streamBuilder(this), r.on("packet", (e => {
                                    this.log("parser :: on packet push to packets array."), n.push(e)
                                }));
                                let o = () => {
                                        this.log("work :: getting next packet in queue");
                                        let e = n.shift();
                                        if (e) this.log("work :: packet pulled from queue"), (0, b.default)(this, e, a);
                                        else {
                                            this.log("work :: no packets in queue");
                                            let e = i;
                                            i = null, this.log("work :: done flag is %s", !!e), e && e()
                                        }
                                    },
                                    a = () => {
                                        if (n.length) m(o);
                                        else {
                                            let e = i;
                                            i = null, e()
                                        }
                                    };
                                t._write = (e, t, n) => {
                                    i = n, this.log("writable stream :: parsing buffer"), r.parse(e), o()
                                }, this.log("connect :: pipe stream to writable stream"), this.stream.pipe(t), this.stream.on("error", (e => {
                                    this.log("streamErrorHandler :: error", e.message), v.includes(e.code) ? (this.log("streamErrorHandler :: emitting error"), this.emit("error", e)) : this.noop(e)
                                })), this.stream.on("close", (() => {
                                    this.log("(%s)stream :: on close", this.options.clientId), this._flushVolatile(), this.log("stream: emit close to MqttClient"), this.emit("close")
                                })), this.log("connect: sending packet `connect`");
                                let h = {
                                    cmd: "connect",
                                    protocolId: this.options.protocolId,
                                    protocolVersion: this.options.protocolVersion,
                                    clean: this.options.clean,
                                    clientId: this.options.clientId,
                                    keepalive: this.options.keepalive,
                                    username: this.options.username,
                                    password: this.options.password,
                                    properties: this.options.properties
                                };
                                if (this.options.will && (h.will = Object.assign(Object.assign({}, this.options.will), {
                                        payload: null === (e = this.options.will) || void 0 === e ? void 0 : e.payload
                                    })), this.topicAliasRecv && (h.properties || (h.properties = {}), this.topicAliasRecv && (h.properties.topicAliasMaximum = this.topicAliasRecv.max)), this._writePacket(h), r.on("error", this.emit.bind(this, "error")), this.options.properties) {
                                    if (!this.options.properties.authenticationMethod && this.options.properties.authenticationData) return this.end((() => this.emit("error", new Error("Packet has no Authentication Method")))), this;
                                    if (this.options.properties.authenticationMethod && this.options.authPacket && "object" == typeof this.options.authPacket) {
                                        let e = Object.assign({
                                            cmd: "auth",
                                            reasonCode: 0
                                        }, this.options.authPacket);
                                        this._writePacket(e)
                                    }
                                }
                                return this.stream.setMaxListeners(1e3), clearTimeout(this.connackTimer), this.connackTimer = setTimeout((() => {
                                    this.log("!!connectTimeout hit!! Calling _cleanUp with force `true`"), this._cleanUp(!0)
                                }), this.options.connectTimeout), this
                            }
                            publish(e, t, r, i) {
                                this.log("publish :: message `%s` to topic `%s`", t, e);
                                let {
                                    options: n
                                } = this;
                                "function" == typeof r && (i = r, r = null), r = r || {}, r = Object.assign(Object.assign({}, {
                                    qos: 0,
                                    retain: !1,
                                    dup: !1
                                }), r);
                                let {
                                    qos: o,
                                    retain: s,
                                    dup: a,
                                    properties: l,
                                    cbStorePut: h
                                } = r;
                                if (this._checkDisconnecting(i)) return this;
                                let u = () => {
                                    let r = 0;
                                    if ((1 === o || 2 === o) && (r = this._nextId(), null === r)) return this.log("No messageId left"), !1;
                                    let u = {
                                        cmd: "publish",
                                        topic: e,
                                        payload: t,
                                        qos: o,
                                        retain: s,
                                        messageId: r,
                                        dup: a
                                    };
                                    switch (5 === n.protocolVersion && (u.properties = l), this.log("publish :: qos", o), o) {
                                        case 1:
                                        case 2:
                                            this.outgoing[u.messageId] = {
                                                volatile: !1,
                                                cb: i || this.noop
                                            }, this.log("MqttClient:publish: packet cmd: %s", u.cmd), this._sendPacket(u, void 0, h);
                                            break;
                                        default:
                                            this.log("MqttClient:publish: packet cmd: %s", u.cmd), this._sendPacket(u, i, h)
                                    }
                                    return !0
                                };
                                return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !u()) && this._storeProcessingQueue.push({
                                    invoke: u,
                                    cbStorePut: r.cbStorePut,
                                    callback: i
                                }), this
                            }
                            publishAsync(e, t, r) {
                                return new Promise(((i, n) => {
                                    this.publish(e, t, r, ((e, t) => {
                                        e ? n(e) : i(t)
                                    }))
                                }))
                            }
                            subscribe(e, t, r) {
                                let i = this.options.protocolVersion;
                                "function" == typeof t && (r = t), r = r || this.noop;
                                let n = !1,
                                    o = [];
                                "string" == typeof e ? o = e = [e] : Array.isArray(e) ? o = e : "object" == typeof e && (n = e.resubscribe, delete e.resubscribe, o = Object.keys(e));
                                let s = c.validateTopics(o);
                                if (null !== s) return w(r, new Error(`Invalid topic ${s}`)), this;
                                if (this._checkDisconnecting(r)) return this.log("subscribe: discconecting true"), this;
                                let a = {
                                    qos: 0
                                };
                                5 === i && (a.nl = !1, a.rap = !1, a.rh = 0);
                                let l = (t = Object.assign(Object.assign({}, a), t)).properties,
                                    h = [],
                                    u = (e, r) => {
                                        if (r = r || t, !Object.prototype.hasOwnProperty.call(this._resubscribeTopics, e) || this._resubscribeTopics[e].qos < r.qos || n) {
                                            let t = {
                                                topic: e,
                                                qos: r.qos
                                            };
                                            5 === i && (t.nl = r.nl, t.rap = r.rap, t.rh = r.rh, t.properties = l), this.log("subscribe: pushing topic `%s` and qos `%s` to subs list", t.topic, t.qos), h.push(t)
                                        }
                                    };
                                if (Array.isArray(e) ? e.forEach((e => {
                                        this.log("subscribe: array topic %s", e), u(e)
                                    })) : Object.keys(e).forEach((t => {
                                        this.log("subscribe: object topic %s, %o", t, e[t]), u(t, e[t])
                                    })), !h.length) return r(null, []), this;
                                let f = () => {
                                    let e = this._nextId();
                                    if (null === e) return this.log("No messageId left"), !1;
                                    let t = {
                                        cmd: "subscribe",
                                        subscriptions: h,
                                        messageId: e
                                    };
                                    if (l && (t.properties = l), this.options.resubscribe) {
                                        this.log("subscribe :: resubscribe true");
                                        let e = [];
                                        h.forEach((t => {
                                            if (this.options.reconnectPeriod > 0) {
                                                let r = {
                                                    qos: t.qos
                                                };
                                                5 === i && (r.nl = t.nl || !1, r.rap = t.rap || !1, r.rh = t.rh || 0, r.properties = t.properties), this._resubscribeTopics[t.topic] = r, e.push(t.topic)
                                            }
                                        })), this.messageIdToTopic[t.messageId] = e
                                    }
                                    return this.outgoing[t.messageId] = {
                                        volatile: !0,
                                        cb(e, t) {
                                            if (!e) {
                                                let {
                                                    granted: e
                                                } = t;
                                                for (let t = 0; t < e.length; t += 1) h[t].qos = e[t]
                                            }
                                            r(e, h)
                                        }
                                    }, this.log("subscribe :: call _sendPacket"), this._sendPacket(t), !0
                                };
                                return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !f()) && this._storeProcessingQueue.push({
                                    invoke: f,
                                    callback: r
                                }), this
                            }
                            subscribeAsync(e, t) {
                                return new Promise(((r, i) => {
                                    this.subscribe(e, t, ((e, t) => {
                                        e ? i(e) : r(t)
                                    }))
                                }))
                            }
                            unsubscribe(e, t, r) {
                                "string" == typeof e && (e = [e]), "function" == typeof t && (r = t), r = r || this.noop;
                                let i = c.validateTopics(e);
                                if (null !== i) return w(r, new Error(`Invalid topic ${i}`)), this;
                                if (this._checkDisconnecting(r)) return this;
                                let n = () => {
                                    let i = this._nextId();
                                    if (null === i) return this.log("No messageId left"), !1;
                                    let n = {
                                        cmd: "unsubscribe",
                                        messageId: i,
                                        unsubscriptions: []
                                    };
                                    return "string" == typeof e ? n.unsubscriptions = [e] : Array.isArray(e) && (n.unsubscriptions = e), this.options.resubscribe && n.unsubscriptions.forEach((e => {
                                        delete this._resubscribeTopics[e]
                                    })), "object" == typeof t && t.properties && (n.properties = t.properties), this.outgoing[n.messageId] = {
                                        volatile: !0,
                                        cb: r
                                    }, this.log("unsubscribe: call _sendPacket"), this._sendPacket(n), !0
                                };
                                return (this._storeProcessing || this._storeProcessingQueue.length > 0 || !n()) && this._storeProcessingQueue.push({
                                    invoke: n,
                                    callback: r
                                }), this
                            }
                            unsubscribeAsync(e, t) {
                                return new Promise(((r, i) => {
                                    this.unsubscribe(e, t, ((e, t) => {
                                        e ? i(e) : r(t)
                                    }))
                                }))
                            }
                            end(e, t, r) {
                                this.log("end :: (%s)", this.options.clientId), (null == e || "boolean" != typeof e) && (r = r || t, t = e, e = !1), "object" != typeof t && (r = r || t, t = null), this.log("end :: cb? %s", !!r), (!r || "function" != typeof r) && (r = this.noop);
                                let i = () => {
                                        this.log("end :: closeStores: closing incoming and outgoing stores"), this.disconnected = !0, this.incomingStore.close((e => {
                                            this.outgoingStore.close((t => {
                                                if (this.log("end :: closeStores: emitting end"), this.emit("end"), r) {
                                                    let i = e || t;
                                                    this.log("end :: closeStores: invoking callback with args"), r(i)
                                                }
                                            }))
                                        })), this._deferredReconnect && this._deferredReconnect()
                                    },
                                    n = () => {
                                        this.log("end :: (%s) :: finish :: calling _cleanUp with force %s", this.options.clientId, e), this._cleanUp(e, (() => {
                                            this.log("end :: finish :: calling process.nextTick on closeStores"), m(i)
                                        }), t)
                                    };
                                return this.disconnecting ? (r(), this) : (this._clearReconnect(), this.disconnecting = !0, !e && Object.keys(this.outgoing).length > 0 ? (this.log("end :: (%s) :: calling finish in 10ms once outgoing is empty", this.options.clientId), this.once("outgoingEmpty", setTimeout.bind(null, n, 10))) : (this.log("end :: (%s) :: immediately calling finish", this.options.clientId), n()), this)
                            }
                            endAsync(e, t) {
                                return new Promise(((r, i) => {
                                    this.end(e, t, (e => {
                                        e ? i(e) : r()
                                    }))
                                }))
                            }
                            removeOutgoingMessage(e) {
                                if (this.outgoing[e]) {
                                    let {
                                        cb: t
                                    } = this.outgoing[e];
                                    this._removeOutgoingAndStoreMessage(e, (() => {
                                        t(new Error("Message removed"))
                                    }))
                                }
                                return this
                            }
                            reconnect(e) {
                                this.log("client reconnect");
                                let t = () => {
                                    e ? (this.options.incomingStore = e.incomingStore, this.options.outgoingStore = e.outgoingStore) : (this.options.incomingStore = null, this.options.outgoingStore = null), this.incomingStore = this.options.incomingStore || new g.default, this.outgoingStore = this.options.outgoingStore || new g.default, this.disconnecting = !1, this.disconnected = !1, this._deferredReconnect = null, this._reconnect()
                                };
                                return this.disconnecting && !this.disconnected ? this._deferredReconnect = t : t(), this
                            }
                            _flushVolatile() {
                                this.outgoing && (this.log("_flushVolatile :: deleting volatile messages from the queue and setting their callbacks as error function"), Object.keys(this.outgoing).forEach((e => {
                                    this.outgoing[e].volatile && "function" == typeof this.outgoing[e].cb && (this.outgoing[e].cb(new Error("Connection closed")), delete this.outgoing[e])
                                })))
                            }
                            _flush() {
                                this.outgoing && (this.log("_flush: queue exists? %b", !!this.outgoing), Object.keys(this.outgoing).forEach((e => {
                                    "function" == typeof this.outgoing[e].cb && (this.outgoing[e].cb(new Error("Connection closed")), delete this.outgoing[e])
                                })))
                            }
                            _removeTopicAliasAndRecoverTopicName(e) {
                                let t;
                                e.properties && (t = e.properties.topicAlias);
                                let r = e.topic.toString();
                                if (this.log("_removeTopicAliasAndRecoverTopicName :: alias %d, topic %o", t, r), 0 === r.length) {
                                    if (typeof t > "u") return new Error("Unregistered Topic Alias");
                                    if (r = this.topicAliasSend.getTopicByAlias(t), typeof r > "u") return new Error("Unregistered Topic Alias");
                                    e.topic = r
                                }
                                t && delete e.properties.topicAlias
                            }
                            _checkDisconnecting(e) {
                                return this.disconnecting && (e && e !== this.noop ? e(new Error("client disconnecting")) : this.emit("error", new Error("client disconnecting"))), this.disconnecting
                            }
                            _reconnect() {
                                this.log("_reconnect: emitting reconnect to client"), this.emit("reconnect"), this.connected ? (this.end((() => {
                                    this.connect()
                                })), this.log("client already connected. disconnecting first.")) : (this.log("_reconnect: calling connect"), this.connect())
                            }
                            _setupReconnect() {
                                !this.disconnecting && !this.reconnectTimer && this.options.reconnectPeriod > 0 ? (this.reconnecting || (this.log("_setupReconnect :: emit `offline` state"), this.emit("offline"), this.log("_setupReconnect :: set `reconnecting` to `true`"), this.reconnecting = !0), this.log("_setupReconnect :: setting reconnectTimer for %d ms", this.options.reconnectPeriod), this.reconnectTimer = setInterval((() => {
                                    this.log("reconnectTimer :: reconnect triggered!"), this._reconnect()
                                }), this.options.reconnectPeriod)) : this.log("_setupReconnect :: doing nothing...")
                            }
                            _clearReconnect() {
                                this.log("_clearReconnect : clearing reconnect timer"), this.reconnectTimer && (clearInterval(this.reconnectTimer), this.reconnectTimer = null)
                            }
                            _cleanUp(e, t, r = {}) {
                                if (t && (this.log("_cleanUp :: done callback provided for on stream close"), this.stream.on("close", t)), this.log("_cleanUp :: forced? %s", e), e) 0 === this.options.reconnectPeriod && this.options.clean && this._flush(), this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), this.stream.destroy();
                                else {
                                    let e = Object.assign({
                                        cmd: "disconnect"
                                    }, r);
                                    this.log("_cleanUp :: (%s) :: call _sendPacket with disconnect packet", this.options.clientId), this._sendPacket(e, (() => {
                                        this.log("_cleanUp :: (%s) :: destroying stream", this.options.clientId), w((() => {
                                            this.stream.end((() => {
                                                this.log("_cleanUp :: (%s) :: stream destroyed", this.options.clientId)
                                            }))
                                        }))
                                    }))
                                }
                                this.disconnecting || (this.log("_cleanUp :: client not disconnecting. Clearing and resetting reconnect."), this._clearReconnect(), this._setupReconnect()), null !== this.pingTimer && (this.log("_cleanUp :: clearing pingTimer"), this.pingTimer.clear(), this.pingTimer = null), t && !this.connected && (this.log("_cleanUp :: (%s) :: removing stream `done` callback `close` listener", this.options.clientId), this.stream.removeListener("close", t), t())
                            }
                            _storeAndSend(e, t, r) {
                                this.log("storeAndSend :: store packet with cmd %s to outgoingStore", e.cmd);
                                let i, n = e;
                                if ("publish" === n.cmd && (n = (0, u.default)(e), i = this._removeTopicAliasAndRecoverTopicName(n), i)) return t && t(i);
                                this.outgoingStore.put(n, (i => {
                                    if (i) return t && t(i);
                                    r(), this._writePacket(e, t)
                                }))
                            }
                            _applyTopicAlias(e) {
                                if (5 === this.options.protocolVersion && "publish" === e.cmd) {
                                    let t;
                                    e.properties && (t = e.properties.topicAlias);
                                    let r = e.topic.toString();
                                    if (this.topicAliasSend)
                                        if (t) {
                                            if (0 !== r.length && (this.log("applyTopicAlias :: register topic: %s - alias: %d", r, t), !this.topicAliasSend.put(r, t))) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", r, t), new Error("Sending Topic Alias out of range")
                                        } else 0 !== r.length && (this.options.autoAssignTopicAlias ? (t = this.topicAliasSend.getAliasByTopic(r), t ? (e.topic = "", e.properties = Object.assign(Object.assign({}, e.properties), {
                                            topicAlias: t
                                        }), this.log("applyTopicAlias :: auto assign(use) topic: %s - alias: %d", r, t)) : (t = this.topicAliasSend.getLruAlias(), this.topicAliasSend.put(r, t), e.properties = Object.assign(Object.assign({}, e.properties), {
                                            topicAlias: t
                                        }), this.log("applyTopicAlias :: auto assign topic: %s - alias: %d", r, t))) : this.options.autoUseTopicAlias && (t = this.topicAliasSend.getAliasByTopic(r), t && (e.topic = "", e.properties = Object.assign(Object.assign({}, e.properties), {
                                            topicAlias: t
                                        }), this.log("applyTopicAlias :: auto use topic: %s - alias: %d", r, t))));
                                    else if (t) return this.log("applyTopicAlias :: error out of range. topic: %s - alias: %d", r, t), new Error("Sending Topic Alias out of range")
                                }
                            }
                            _noop(e) {
                                this.log("noop ::", e)
                            }
                            _writePacket(e, t) {
                                this.log("_writePacket :: packet: %O", e), this.log("_writePacket :: emitting `packetsend`"), this.emit("packetsend", e), this._shiftPingInterval(), this.log("_writePacket :: writing to stream");
                                let r = s.default.writeToStream(e, this.stream, this.options);
                                this.log("_writePacket :: writeToStream result %s", r), !r && t && t !== this.noop ? (this.log("_writePacket :: handle events on `drain` once through callback."), this.stream.once("drain", t)) : t && (this.log("_writePacket :: invoking cb"), t())
                            }
                            _sendPacket(e, t, r, i) {
                                this.log("_sendPacket :: (%s) ::  start", this.options.clientId), r = r || this.noop, t = t || this.noop;
                                let n = this._applyTopicAlias(e);
                                if (n) t(n);
                                else {
                                    if (!this.connected) return "auth" === e.cmd ? void this._writePacket(e, t) : (this.log("_sendPacket :: client not connected. Storing packet offline."), void this._storePacket(e, t, r));
                                    if (i) this._writePacket(e, t);
                                    else {
                                        switch (e.cmd) {
                                            case "publish":
                                                break;
                                            case "pubrel":
                                                return void this._storeAndSend(e, t, r);
                                            default:
                                                return void this._writePacket(e, t)
                                        }
                                        switch (e.qos) {
                                            case 2:
                                            case 1:
                                                this._storeAndSend(e, t, r);
                                                break;
                                            default:
                                                this._writePacket(e, t)
                                        }
                                        this.log("_sendPacket :: (%s) ::  end", this.options.clientId)
                                    }
                                }
                            }
                            _storePacket(e, t, r) {
                                this.log("_storePacket :: packet: %o", e), this.log("_storePacket :: cb? %s", !!t), r = r || this.noop;
                                let i = e;
                                if ("publish" === i.cmd) {
                                    i = (0, u.default)(e);
                                    let r = this._removeTopicAliasAndRecoverTopicName(i);
                                    if (r) return t && t(r)
                                }
                                let n = i.qos || 0;
                                0 === n && this.queueQoSZero || "publish" !== i.cmd ? this.queue.push({
                                    packet: i,
                                    cb: t
                                }) : n > 0 ? (t = this.outgoing[i.messageId] ? this.outgoing[i.messageId].cb : null, this.outgoingStore.put(i, (e => {
                                    if (e) return t && t(e);
                                    r()
                                }))) : t && t(new Error("No connection to broker"))
                            }
                            _setupPingTimer() {
                                this.log("_setupPingTimer :: keepalive %d (seconds)", this.options.keepalive), !this.pingTimer && this.options.keepalive && (this.pingResp = !0, this.pingTimer = (0, h.default)((() => {
                                    this._checkPing()
                                }), 1e3 * this.options.keepalive))
                            }
                            _shiftPingInterval() {
                                this.pingTimer && this.options.keepalive && this.options.reschedulePings && this.pingTimer.reschedule(1e3 * this.options.keepalive)
                            }
                            _checkPing() {
                                this.log("_checkPing :: checking ping..."), this.pingResp ? (this.log("_checkPing :: ping response received. Clearing flag and sending `pingreq`"), this.pingResp = !1, this._sendPacket({
                                    cmd: "pingreq"
                                })) : (this.log("_checkPing :: calling _cleanUp with force true"), this._cleanUp(!0))
                            }
                            _resubscribe() {
                                this.log("_resubscribe");
                                let e = Object.keys(this._resubscribeTopics);
                                if (!this._firstConnection && (this.options.clean || this.options.protocolVersion >= 4 && !this.connackPacket.sessionPresent) && e.length > 0)
                                    if (this.options.resubscribe)
                                        if (5 === this.options.protocolVersion) {
                                            this.log("_resubscribe: protocolVersion 5");
                                            for (let t = 0; t < e.length; t++) {
                                                let r = {};
                                                r[e[t]] = this._resubscribeTopics[e[t]], r.resubscribe = !0, this.subscribe(r, {
                                                    properties: r[e[t]].properties
                                                })
                                            }
                                        } else this._resubscribeTopics.resubscribe = !0, this.subscribe(this._resubscribeTopics);
                                else this._resubscribeTopics = {};
                                this._firstConnection = !1
                            }
                            _onConnect(e) {
                                if (this.disconnected) return void this.emit("connect", e);
                                this.connackPacket = e, this.messageIdProvider.clear(), this._setupPingTimer(), this.connected = !0;
                                let t = () => {
                                    let r = this.outgoingStore.createStream(),
                                        i = () => {
                                            r.destroy(), r = null, this._flushStoreProcessingQueue(), n()
                                        },
                                        n = () => {
                                            this._storeProcessing = !1, this._packetIdsDuringStoreProcessing = {}
                                        };
                                    this.once("close", i), r.on("error", (e => {
                                        n(), this._flushStoreProcessingQueue(), this.removeListener("close", i), this.emit("error", e)
                                    }));
                                    let o = () => {
                                        if (!r) return;
                                        let e, t = r.read(1);
                                        t ? (this._storeProcessing = !0, this._packetIdsDuringStoreProcessing[t.messageId] ? o() : this.disconnecting || this.reconnectTimer ? r.destroy && r.destroy() : (e = this.outgoing[t.messageId] ? this.outgoing[t.messageId].cb : null, this.outgoing[t.messageId] = {
                                            volatile: !1,
                                            cb(t, r) {
                                                e && e(t, r), o()
                                            }
                                        }, this._packetIdsDuringStoreProcessing[t.messageId] = !0, this.messageIdProvider.register(t.messageId) ? this._sendPacket(t, void 0, void 0, !0) : this.log("messageId: %d has already used.", t.messageId))) : r.once("readable", o)
                                    };
                                    r.on("end", (() => {
                                        let r = !0;
                                        for (let e in this._packetIdsDuringStoreProcessing)
                                            if (!this._packetIdsDuringStoreProcessing[e]) {
                                                r = !1;
                                                break
                                            } r ? (n(), this.removeListener("close", i), this._invokeAllStoreProcessingQueue(), this.emit("connect", e)) : t()
                                    })), o()
                                };
                                t()
                            }
                            _invokeStoreProcessingQueue() {
                                if (!this._storeProcessing && this._storeProcessingQueue.length > 0) {
                                    let e = this._storeProcessingQueue[0];
                                    if (e && e.invoke()) return this._storeProcessingQueue.shift(), !0
                                }
                                return !1
                            }
                            _invokeAllStoreProcessingQueue() {
                                for (; this._invokeStoreProcessingQueue(););
                            }
                            _flushStoreProcessingQueue() {
                                for (let e of this._storeProcessingQueue) e.cbStorePut && e.cbStorePut(new Error("Connection closed")), e.callback && e.callback(new Error("Connection closed"));
                                this._storeProcessingQueue.splice(0)
                            }
                            _removeOutgoingAndStoreMessage(e, t) {
                                delete this.outgoing[e], this.outgoingStore.del({
                                    messageId: e
                                }, ((r, i) => {
                                    t(r, i), this.messageIdProvider.deallocate(e), this._invokeStoreProcessingQueue()
                                }))
                            }
                        };
                    e.default = E
                })),
                yn = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = un();
                    e.default = class {
                        constructor() {
                            this.numberAllocator = new t.NumberAllocator(1, 65535)
                        }
                        allocate() {
                            return this.lastId = this.numberAllocator.alloc(), this.lastId
                        }
                        getLastAllocated() {
                            return this.lastId
                        }
                        register(e) {
                            return this.numberAllocator.use(e)
                        }
                        deallocate(e) {
                            this.numberAllocator.free(e)
                        }
                        clear() {
                            this.numberAllocator.clear()
                        }
                    }
                }));

            function mn(e) {
                throw new RangeError(An[e])
            }

            function wn(e, t) {
                let r = e.split("@"),
                    i = "";
                return r.length > 1 && (i = r[0] + "@", e = r[1]), i + function(e, t) {
                    let r = [],
                        i = e.length;
                    for (; i--;) r[i] = t(e[i]);
                    return r
                }((e = e.replace(Sn, ".")).split("."), t).join(".")
            }

            function _n(e) {
                let t = [],
                    r = 0,
                    i = e.length;
                for (; r < i;) {
                    let n = e.charCodeAt(r++);
                    if (n >= 55296 && n <= 56319 && r < i) {
                        let i = e.charCodeAt(r++);
                        56320 == (64512 & i) ? t.push(((1023 & n) << 10) + (1023 & i) + 65536) : (t.push(n), r--)
                    } else t.push(n)
                }
                return t
            }
            var vn, En, Sn, An, In, kn, Tn, Cn, Rn, On, Pn, Bn = l((() => {
                f(), rt(), qe(), vn = /^xn--/, En = /[^\0-\x7E]/, Sn = /[\x2E\u3002\uFF0E\uFF61]/g, An = {
                    overflow: "Overflow: input needs wider integers to process",
                    "not-basic": "Illegal input >= 0x80 (not a basic code point)",
                    "invalid-input": "Invalid input"
                }, In = Math.floor, kn = String.fromCharCode, Tn = function(e, t) {
                    return e + 22 + 75 * (e < 26) - ((0 != t) << 5)
                }, Cn = function(e, t, r) {
                    let i = 0;
                    for (e = r ? In(e / 700) : e >> 1, e += In(e / t); e > 455; i += 36) e = In(e / 35);
                    return In(i + 36 * e / (e + 38))
                }, On = function(e) {
                    let t = [],
                        r = (e = _n(e)).length,
                        i = 128,
                        n = 0,
                        o = 72;
                    for (let r of e) r < 128 && t.push(kn(r));
                    let s = t.length,
                        a = s;
                    for (s && t.push("-"); a < r;) {
                        let r = 2147483647;
                        for (let t of e) t >= i && t < r && (r = t);
                        let l = a + 1;
                        r - i > In((2147483647 - n) / l) && mn("overflow"), n += (r - i) * l, i = r;
                        for (let r of e)
                            if (r < i && ++n > 2147483647 && mn("overflow"), r == i) {
                                let e = n;
                                for (let r = 36;; r += 36) {
                                    let i = r <= o ? 1 : r >= o + 26 ? 26 : r - o;
                                    if (e < i) break;
                                    let n = e - i,
                                        s = 36 - i;
                                    t.push(kn(Tn(i + n % s, 0))), e = In(n / s)
                                }
                                t.push(kn(Tn(e, 0))), o = Cn(n, l, a == s), n = 0, ++a
                            }++ n, ++i
                    }
                    return t.join("")
                }, (Pn = {
                    version: "2.1.0",
                    ucs2: {
                        decode: _n,
                        encode: e => String.fromCodePoint(...e)
                    },
                    decode: Rn = function(e) {
                        let t = [],
                            r = e.length,
                            i = 0,
                            n = 128,
                            o = 72,
                            s = e.lastIndexOf("-");
                        s < 0 && (s = 0);
                        for (let r = 0; r < s; ++r) e.charCodeAt(r) >= 128 && mn("not-basic"), t.push(e.charCodeAt(r));
                        for (let l = s > 0 ? s + 1 : 0; l < r;) {
                            let s = i;
                            for (let t = 1, n = 36;; n += 36) {
                                l >= r && mn("invalid-input");
                                let s = (a = e.charCodeAt(l++)) - 48 < 10 ? a - 22 : a - 65 < 26 ? a - 65 : a - 97 < 26 ? a - 97 : 36;
                                (s >= 36 || s > In((2147483647 - i) / t)) && mn("overflow"), i += s * t;
                                let h = n <= o ? 1 : n >= o + 26 ? 26 : n - o;
                                if (s < h) break;
                                let u = 36 - h;
                                t > In(2147483647 / u) && mn("overflow"), t *= u
                            }
                            let h = t.length + 1;
                            o = Cn(i - s, h, 0 == s), In(i / h) > 2147483647 - n && mn("overflow"), n += In(i / h), i %= h, t.splice(i++, 0, n)
                        }
                        var a;
                        return String.fromCodePoint(...t)
                    },
                    encode: On,
                    toASCII: function(e) {
                        return wn(e, (function(e) {
                            return En.test(e) ? "xn--" + On(e) : e
                        }))
                    },
                    toUnicode: function(e) {
                        return wn(e, (function(e) {
                            return vn.test(e) ? Rn(e.slice(4).toLowerCase()) : e
                        }))
                    }
                }).encode, Pn.toASCII, Pn.toUnicode, Pn.ucs2, Pn.version
            }));

            function xn(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
            var Un, Mn, Ln, Nn, jn = l((() => {
                f(), rt(), qe(), Un = function(e, t, r, i) {
                    t = t || "&", r = r || "=";
                    var n = {};
                    if ("string" != typeof e || 0 === e.length) return n;
                    var o = /\+/g;
                    e = e.split(t);
                    var s = 1e3;
                    i && "number" == typeof i.maxKeys && (s = i.maxKeys);
                    var a = e.length;
                    s > 0 && a > s && (a = s);
                    for (var l = 0; l < a; ++l) {
                        var h, u, c, f, p = e[l].replace(o, "%20"),
                            d = p.indexOf(r);
                        d >= 0 ? (h = p.substr(0, d), u = p.substr(d + 1)) : (h = p, u = ""), c = decodeURIComponent(h), f = decodeURIComponent(u), xn(n, c) ? Array.isArray(n[c]) ? n[c].push(f) : n[c] = [n[c], f] : n[c] = f
                    }
                    return n
                }, Mn = function(e) {
                    switch (typeof e) {
                        case "string":
                            return e;
                        case "boolean":
                            return e ? "true" : "false";
                        case "number":
                            return isFinite(e) ? e : "";
                        default:
                            return ""
                    }
                }, Ln = function(e, t, r, i) {
                    return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map((function(i) {
                        var n = encodeURIComponent(Mn(i)) + r;
                        return Array.isArray(e[i]) ? e[i].map((function(e) {
                            return n + encodeURIComponent(Mn(e))
                        })).join(t) : n + encodeURIComponent(Mn(e[i]))
                    })).join(t) : i ? encodeURIComponent(Mn(i)) + r + encodeURIComponent(Mn(e)) : ""
                }, (Nn = {}).decode = Nn.parse = Un, Nn.encode = Nn.stringify = Ln, Nn.decode, Nn.encode, Nn.parse, Nn.stringify
            }));

            function Dn() {
                throw new Error("setTimeout has not been defined")
            }

            function Fn() {
                throw new Error("clearTimeout has not been defined")
            }

            function Wn(e) {
                if (Kn === setTimeout) return setTimeout(e, 0);
                if ((Kn === Dn || !Kn) && setTimeout) return Kn = setTimeout, setTimeout(e, 0);
                try {
                    return Kn(e, 0)
                } catch {
                    try {
                        return Kn.call(null, e, 0)
                    } catch {
                        return Kn.call(this || Qn, e, 0)
                    }
                }
            }

            function $n() {
                Zn && Jn && (Zn = !1, Jn.length ? Xn = Jn.concat(Xn) : eo = -1, Xn.length && qn())
            }

            function qn() {
                if (!Zn) {
                    var e = Wn($n);
                    Zn = !0;
                    for (var t = Xn.length; t;) {
                        for (Jn = Xn, Xn = []; ++eo < t;) Jn && Jn[eo].run();
                        eo = -1, t = Xn.length
                    }
                    Jn = null, Zn = !1,
                        function(e) {
                            if (Gn === clearTimeout) return clearTimeout(e);
                            if ((Gn === Fn || !Gn) && clearTimeout) return Gn = clearTimeout, clearTimeout(e);
                            try {
                                Gn(e)
                            } catch {
                                try {
                                    return Gn.call(null, e)
                                } catch {
                                    return Gn.call(this || Qn, e)
                                }
                            }
                        }(e)
                }
            }

            function Vn(e, t) {
                (this || Qn).fun = e, (this || Qn).array = t
            }

            function Hn() {}
            var zn, Kn, Gn, Qn, Yn, Jn, Xn, Zn, eo, to, ro = l((() => {
                f(), rt(), qe(), Qn = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, Yn = zn = {},
                    function() {
                        try {
                            Kn = "function" == typeof setTimeout ? setTimeout : Dn
                        } catch {
                            Kn = Dn
                        }
                        try {
                            Gn = "function" == typeof clearTimeout ? clearTimeout : Fn
                        } catch {
                            Gn = Fn
                        }
                    }(), Xn = [], Zn = !1, eo = -1, Yn.nextTick = function(e) {
                        var t = new Array(arguments.length - 1);
                        if (arguments.length > 1)
                            for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                        Xn.push(new Vn(e, t)), 1 !== Xn.length || Zn || Wn(qn)
                    }, Vn.prototype.run = function() {
                        (this || Qn).fun.apply(null, (this || Qn).array)
                    }, Yn.title = "browser", Yn.browser = !0, Yn.env = {}, Yn.argv = [], Yn.version = "", Yn.versions = {}, Yn.on = Hn, Yn.addListener = Hn, Yn.once = Hn, Yn.off = Hn, Yn.removeListener = Hn, Yn.removeAllListeners = Hn, Yn.emit = Hn, Yn.prependListener = Hn, Yn.prependOnceListener = Hn, Yn.listeners = function(e) {
                        return []
                    }, Yn.binding = function(e) {
                        throw new Error("process.binding is not supported")
                    }, Yn.cwd = function() {
                        return "/"
                    }, Yn.chdir = function(e) {
                        throw new Error("process.chdir is not supported")
                    }, Yn.umask = function() {
                        return 0
                    }, (to = zn).argv, to.binding, to.browser, to.chdir, to.cwd, to.emit, to.env, to.listeners, to.nextTick, to.off, to.on, to.once, to.prependListener, to.prependOnceListener, to.removeAllListeners, to.removeListener, to.title, to.umask, to.version, to.versions
            }));
            var io, no, oo, so, ao, lo, ho, uo = l((() => {
                    f(), rt(), qe(), io = {}, no = !1, oo = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : window, (so = function() {
                        if (no) return io;
                        no = !0;
                        var e, t, r = io = {};

                        function i() {
                            throw new Error("setTimeout has not been defined")
                        }

                        function n() {
                            throw new Error("clearTimeout has not been defined")
                        }

                        function o(t) {
                            if (e === setTimeout) return setTimeout(t, 0);
                            if ((e === i || !e) && setTimeout) return e = setTimeout, setTimeout(t, 0);
                            try {
                                return e(t, 0)
                            } catch {
                                try {
                                    return e.call(null, t, 0)
                                } catch {
                                    return e.call(this || oo, t, 0)
                                }
                            }
                        }! function() {
                            try {
                                e = "function" == typeof setTimeout ? setTimeout : i
                            } catch {
                                e = i
                            }
                            try {
                                t = "function" == typeof clearTimeout ? clearTimeout : n
                            } catch {
                                t = n
                            }
                        }();
                        var s, a = [],
                            l = !1,
                            h = -1;

                        function u() {
                            !l || !s || (l = !1, s.length ? a = s.concat(a) : h = -1, a.length && c())
                        }

                        function c() {
                            if (!l) {
                                var e = o(u);
                                l = !0;
                                for (var r = a.length; r;) {
                                    for (s = a, a = []; ++h < r;) s && s[h].run();
                                    h = -1, r = a.length
                                }
                                s = null, l = !1,
                                    function(e) {
                                        if (t === clearTimeout) return clearTimeout(e);
                                        if ((t === n || !t) && clearTimeout) return t = clearTimeout, clearTimeout(e);
                                        try {
                                            t(e)
                                        } catch {
                                            try {
                                                return t.call(null, e)
                                            } catch {
                                                return t.call(this || oo, e)
                                            }
                                        }
                                    }(e)
                            }
                        }

                        function f(e, t) {
                            (this || oo).fun = e, (this || oo).array = t
                        }

                        function p() {}
                        return r.nextTick = function(e) {
                            var t = new Array(arguments.length - 1);
                            if (arguments.length > 1)
                                for (var r = 1; r < arguments.length; r++) t[r - 1] = arguments[r];
                            a.push(new f(e, t)), 1 === a.length && !l && o(c)
                        }, f.prototype.run = function() {
                            (this || oo).fun.apply(null, (this || oo).array)
                        }, r.title = "browser", r.browser = !0, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = p, r.addListener = p, r.once = p, r.off = p, r.removeListener = p, r.removeAllListeners = p, r.emit = p, r.prependListener = p, r.prependOnceListener = p, r.listeners = function(e) {
                            return []
                        }, r.binding = function(e) {
                            throw new Error("process.binding is not supported")
                        }, r.cwd = function() {
                            return "/"
                        }, r.chdir = function(e) {
                            throw new Error("process.chdir is not supported")
                        }, r.umask = function() {
                            return 0
                        }, io
                    }()).platform = "browser", so.addListener, so.argv, so.binding, so.browser, so.chdir, so.cwd, so.emit, so.env, so.listeners, so.nextTick, so.off, so.on, so.once, so.prependListener, so.prependOnceListener, so.removeAllListeners, so.removeListener, so.title, so.umask, so.version, so.versions
                })),
                co = l((() => {
                    f(), rt(), qe(), uo(), ao = {}, lo = !1, ho = function() {
                        if (lo) return ao;
                        lo = !0;
                        var e = so;

                        function t(e) {
                            if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
                        }

                        function r(e, t) {
                            for (var r, i = "", n = 0, o = -1, s = 0, a = 0; a <= e.length; ++a) {
                                if (a < e.length) r = e.charCodeAt(a);
                                else {
                                    if (47 === r) break;
                                    r = 47
                                }
                                if (47 === r) {
                                    if (o !== a - 1 && 1 !== s)
                                        if (o !== a - 1 && 2 === s) {
                                            if (i.length < 2 || 2 !== n || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                                if (i.length > 2) {
                                                    var l = i.lastIndexOf("/");
                                                    if (l !== i.length - 1) {
                                                        -1 === l ? (i = "", n = 0) : n = (i = i.slice(0, l)).length - 1 - i.lastIndexOf("/"), o = a, s = 0;
                                                        continue
                                                    }
                                                } else if (2 === i.length || 1 === i.length) {
                                                i = "", n = 0, o = a, s = 0;
                                                continue
                                            }
                                            t && (i.length > 0 ? i += "/.." : i = "..", n = 2)
                                        } else i.length > 0 ? i += "/" + e.slice(o + 1, a) : i = e.slice(o + 1, a), n = a - o - 1;
                                    o = a, s = 0
                                } else 46 === r && -1 !== s ? ++s : s = -1
                            }
                            return i
                        }
                        var i = {
                            resolve: function() {
                                for (var i, n = "", o = !1, s = arguments.length - 1; s >= -1 && !o; s--) {
                                    var a;
                                    s >= 0 ? a = arguments[s] : (void 0 === i && (i = e.cwd()), a = i), t(a), 0 !== a.length && (n = a + "/" + n, o = 47 === a.charCodeAt(0))
                                }
                                return n = r(n, !o), o ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : "."
                            },
                            normalize: function(e) {
                                if (t(e), 0 === e.length) return ".";
                                var i = 47 === e.charCodeAt(0),
                                    n = 47 === e.charCodeAt(e.length - 1);
                                return 0 === (e = r(e, !i)).length && !i && (e = "."), e.length > 0 && n && (e += "/"), i ? "/" + e : e
                            },
                            isAbsolute: function(e) {
                                return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                            },
                            join: function() {
                                if (0 === arguments.length) return ".";
                                for (var e, r = 0; r < arguments.length; ++r) {
                                    var n = arguments[r];
                                    t(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                                }
                                return void 0 === e ? "." : i.normalize(e)
                            },
                            relative: function(e, r) {
                                if (t(e), t(r), e === r || (e = i.resolve(e)) === (r = i.resolve(r))) return "";
                                for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                                for (var o = e.length, s = o - n, a = 1; a < r.length && 47 === r.charCodeAt(a); ++a);
                                for (var l = r.length - a, h = s < l ? s : l, u = -1, c = 0; c <= h; ++c) {
                                    if (c === h) {
                                        if (l > h) {
                                            if (47 === r.charCodeAt(a + c)) return r.slice(a + c + 1);
                                            if (0 === c) return r.slice(a + c)
                                        } else s > h && (47 === e.charCodeAt(n + c) ? u = c : 0 === c && (u = 0));
                                        break
                                    }
                                    var f = e.charCodeAt(n + c);
                                    if (f !== r.charCodeAt(a + c)) break;
                                    47 === f && (u = c)
                                }
                                var p = "";
                                for (c = n + u + 1; c <= o; ++c)(c === o || 47 === e.charCodeAt(c)) && (0 === p.length ? p += ".." : p += "/..");
                                return p.length > 0 ? p + r.slice(a + u) : (a += u, 47 === r.charCodeAt(a) && ++a, r.slice(a))
                            },
                            _makeLong: function(e) {
                                return e
                            },
                            dirname: function(e) {
                                if (t(e), 0 === e.length) return ".";
                                for (var r = e.charCodeAt(0), i = 47 === r, n = -1, o = !0, s = e.length - 1; s >= 1; --s)
                                    if (47 === (r = e.charCodeAt(s))) {
                                        if (!o) {
                                            n = s;
                                            break
                                        }
                                    } else o = !1;
                                return -1 === n ? i ? "/" : "." : i && 1 === n ? "//" : e.slice(0, n)
                            },
                            basename: function(e, r) {
                                if (void 0 !== r && "string" != typeof r) throw new TypeError('"ext" argument must be a string');
                                t(e);
                                var i, n = 0,
                                    o = -1,
                                    s = !0;
                                if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                                    if (r.length === e.length && r === e) return "";
                                    var a = r.length - 1,
                                        l = -1;
                                    for (i = e.length - 1; i >= 0; --i) {
                                        var h = e.charCodeAt(i);
                                        if (47 === h) {
                                            if (!s) {
                                                n = i + 1;
                                                break
                                            }
                                        } else - 1 === l && (s = !1, l = i + 1), a >= 0 && (h === r.charCodeAt(a) ? -1 == --a && (o = i) : (a = -1, o = l))
                                    }
                                    return n === o ? o = l : -1 === o && (o = e.length), e.slice(n, o)
                                }
                                for (i = e.length - 1; i >= 0; --i)
                                    if (47 === e.charCodeAt(i)) {
                                        if (!s) {
                                            n = i + 1;
                                            break
                                        }
                                    } else - 1 === o && (s = !1, o = i + 1);
                                return -1 === o ? "" : e.slice(n, o)
                            },
                            extname: function(e) {
                                t(e);
                                for (var r = -1, i = 0, n = -1, o = !0, s = 0, a = e.length - 1; a >= 0; --a) {
                                    var l = e.charCodeAt(a);
                                    if (47 !== l) - 1 === n && (o = !1, n = a + 1), 46 === l ? -1 === r ? r = a : 1 !== s && (s = 1) : -1 !== r && (s = -1);
                                    else if (!o) {
                                        i = a + 1;
                                        break
                                    }
                                }
                                return -1 === r || -1 === n || 0 === s || 1 === s && r === n - 1 && r === i + 1 ? "" : e.slice(r, n)
                            },
                            format: function(e) {
                                if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                                return function(e, t) {
                                    var r = t.dir || t.root,
                                        i = t.base || (t.name || "") + (t.ext || "");
                                    return r ? r === t.root ? r + i : r + "/" + i : i
                                }(0, e)
                            },
                            parse: function(e) {
                                t(e);
                                var r = {
                                    root: "",
                                    dir: "",
                                    base: "",
                                    ext: "",
                                    name: ""
                                };
                                if (0 === e.length) return r;
                                var i, n = e.charCodeAt(0),
                                    o = 47 === n;
                                o ? (r.root = "/", i = 1) : i = 0;
                                for (var s = -1, a = 0, l = -1, h = !0, u = e.length - 1, c = 0; u >= i; --u)
                                    if (47 !== (n = e.charCodeAt(u))) - 1 === l && (h = !1, l = u + 1), 46 === n ? -1 === s ? s = u : 1 !== c && (c = 1) : -1 !== s && (c = -1);
                                    else if (!h) {
                                    a = u + 1;
                                    break
                                }
                                return -1 === s || -1 === l || 0 === c || 1 === c && s === l - 1 && s === a + 1 ? -1 !== l && (r.base = r.name = 0 === a && o ? e.slice(1, l) : e.slice(a, l)) : (0 === a && o ? (r.name = e.slice(1, s), r.base = e.slice(1, l)) : (r.name = e.slice(a, s), r.base = e.slice(a, l)), r.ext = e.slice(s, l)), a > 0 ? r.dir = e.slice(0, a - 1) : o && (r.dir = "/"), r
                            },
                            sep: "/",
                            delimiter: ":",
                            win32: null,
                            posix: null
                        };
                        return i.posix = i, ao = i
                    }()
                })),
                fo = {};

            function po() {
                this.protocol = null, this.slashes = null, this.auth = null, this.host = null, this.port = null, this.hostname = null, this.hash = null, this.search = null, this.query = null, this.pathname = null, this.path = null, this.href = null
            }

            function go(e, t, r) {
                if (e && Eo.isObject(e) && e instanceof po) return e;
                var i = new po;
                return i.parse(e, t, r), i
            }

            function bo(e) {
                if ("string" == typeof e) e = new URL(e);
                else if (!(e instanceof URL)) throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
                if ("file:" !== e.protocol) throw new Deno.errors.InvalidData("invalid url scheme");
                return Vo ? function(e) {
                    let t = e.hostname,
                        r = e.pathname;
                    for (let e = 0; e < r.length; e++)
                        if ("%" === r[e]) {
                            let t = r.codePointAt(e + 2) || 32;
                            if ("2" === r[e + 1] && 102 === t || "5" === r[e + 1] && 99 === t) throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")
                        } if (r = r.replace(Ho, "\\"), r = decodeURIComponent(r), "" !== t) return `\\\\${t}${r}`;
                    {
                        let e = 32 | r.codePointAt(1),
                            t = r[2];
                        if (e < $o || e > qo || ":" !== t) throw new Deno.errors.InvalidData("file url path must be absolute");
                        return r.slice(1)
                    }
                }(e) : function(e) {
                    if ("" !== e.hostname) throw new Deno.errors.InvalidData("invalid file url hostname");
                    let t = e.pathname;
                    for (let e = 0; e < t.length; e++)
                        if ("%" === t[e]) {
                            let r = t.codePointAt(e + 2) || 32;
                            if ("2" === t[e + 1] && 102 === r) throw new Deno.errors.InvalidData("must not include encoded / characters")
                        } return decodeURIComponent(t)
                }(e)
            }

            function yo(e) {
                let t = jo.resolve(e),
                    r = e.charCodeAt(e.length - 1);
                (r === Wo || Vo && r === Fo) && t[t.length - 1] !== jo.sep && (t += "/");
                let i = new URL("file://");
                return t.includes("%") && (t = t.replace(zo, "%25")), !Vo && t.includes("\\") && (t = t.replace(Ko, "%5C")), t.includes("\n") && (t = t.replace(Go, "%0A")), t.includes("\r") && (t = t.replace(Qo, "%0D")), t.includes("\t") && (t = t.replace(Yo, "%09")), i.pathname = t, i
            }

            function mo(e) {
                if ("string" == typeof e) e = new URL(e);
                else if (!(e instanceof URL)) throw new Deno.errors.InvalidData("invalid argument path , must be a string or URL");
                if ("file:" !== e.protocol) throw new Deno.errors.InvalidData("invalid url scheme");
                return ls ? function(e) {
                    let t = e.hostname,
                        r = e.pathname;
                    for (let e = 0; e < r.length; e++)
                        if ("%" === r[e]) {
                            let t = r.codePointAt(e + 2) || 32;
                            if ("2" === r[e + 1] && 102 === t || "5" === r[e + 1] && 99 === t) throw new Deno.errors.InvalidData("must not include encoded \\ or / characters")
                        } if (r = r.replace(hs, "\\"), r = decodeURIComponent(r), "" !== t) return `\\\\${t}${r}`;
                    {
                        let e = 32 | r.codePointAt(1),
                            t = r[2];
                        if (e < ss || e > as || ":" !== t) throw new Deno.errors.InvalidData("file url path must be absolute");
                        return r.slice(1)
                    }
                }(e) : function(e) {
                    if ("" !== e.hostname) throw new Deno.errors.InvalidData("invalid file url hostname");
                    let t = e.pathname;
                    for (let e = 0; e < t.length; e++)
                        if ("%" === t[e]) {
                            let r = t.codePointAt(e + 2) || 32;
                            if ("2" === t[e + 1] && 102 === r) throw new Deno.errors.InvalidData("must not include encoded / characters")
                        } return decodeURIComponent(t)
                }(e)
            }

            function wo(e) {
                let t = ho.resolve(e),
                    r = e.charCodeAt(e.length - 1);
                (r === os || ls && r === ns) && t[t.length - 1] !== ho.sep && (t += "/");
                let i = new URL("file://");
                return t.includes("%") && (t = t.replace(us, "%25")), !ls && t.includes("\\") && (t = t.replace(cs, "%5C")), t.includes("\n") && (t = t.replace(fs, "%0A")), t.includes("\r") && (t = t.replace(ps, "%0D")), t.includes("\t") && (t = t.replace(ds, "%09")), i.pathname = t, i
            }
            u(fo, {
                URL: () => is,
                Url: () => Xo,
                default: () => _o,
                fileURLToPath: () => mo,
                format: () => Zo,
                parse: () => rs,
                pathToFileURL: () => wo,
                resolve: () => es,
                resolveObject: () => ts
            });
            var _o, vo, Eo, So, Ao, Io, ko, To, Co, Ro, Oo, Po, Bo, xo, Uo, Mo, Lo, No, jo, Do, Fo, Wo, $o, qo, Vo, Ho, zo, Ko, Go, Qo, Yo, Jo, Xo, Zo, es, ts, rs, is, ns, os, ss, as, ls, hs, us, cs, fs, ps, ds, gs = l((() => {
                    f(), rt(), qe(), Bn(), jn(), ro(), co(), uo(), vo = Pn, Eo = {
                        isString: function(e) {
                            return "string" == typeof e
                        },
                        isObject: function(e) {
                            return "object" == typeof e && null !== e
                        },
                        isNull: function(e) {
                            return null === e
                        },
                        isNullOrUndefined: function(e) {
                            return null == e
                        }
                    }, (_o = {}).parse = go, _o.resolve = function(e, t) {
                        return go(e, !1, !0).resolve(t)
                    }, _o.resolveObject = function(e, t) {
                        return e ? go(e, !1, !0).resolveObject(t) : t
                    }, _o.format = function(e) {
                        return Eo.isString(e) && (e = go(e)), e instanceof po ? e.format() : po.prototype.format.call(e)
                    }, _o.Url = po, So = /^([a-z0-9.+-]+:)/i, Ao = /:[0-9]*$/, Io = /^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/, ko = ["{", "}", "|", "\\", "^", "`"].concat(["<", ">", '"', "`", " ", "\r", "\n", "\t"]), To = ["'"].concat(ko), Co = ["%", "/", "?", ";", "#"].concat(To), Ro = ["/", "?", "#"], Oo = /^[+a-z0-9A-Z_-]{0,63}$/, Po = /^([+a-z0-9A-Z_-]{0,63})(.*)$/, Bo = {
                        javascript: !0,
                        "javascript:": !0
                    }, xo = {
                        javascript: !0,
                        "javascript:": !0
                    }, Uo = {
                        http: !0,
                        https: !0,
                        ftp: !0,
                        gopher: !0,
                        file: !0,
                        "http:": !0,
                        "https:": !0,
                        "ftp:": !0,
                        "gopher:": !0,
                        "file:": !0
                    }, Mo = Nn, po.prototype.parse = function(e, t, r) {
                        if (!Eo.isString(e)) throw new TypeError("Parameter 'url' must be a string, not " + typeof e);
                        var i = e.indexOf("?"),
                            n = -1 !== i && i < e.indexOf("#") ? "?" : "#",
                            o = e.split(n);
                        o[0] = o[0].replace(/\\/g, "/");
                        var s = e = o.join(n);
                        if (s = s.trim(), !r && 1 === e.split("#").length) {
                            var a = Io.exec(s);
                            if (a) return this.path = s, this.href = s, this.pathname = a[1], a[2] ? (this.search = a[2], this.query = t ? Mo.parse(this.search.substr(1)) : this.search.substr(1)) : t && (this.search = "", this.query = {}), this
                        }
                        var l = So.exec(s);
                        if (l) {
                            var h = (l = l[0]).toLowerCase();
                            this.protocol = h, s = s.substr(l.length)
                        }
                        if (r || l || s.match(/^\/\/[^@\/]+@[^@\/]+/)) {
                            var u = "//" === s.substr(0, 2);
                            !u || l && xo[l] || (s = s.substr(2), this.slashes = !0)
                        }
                        if (!xo[l] && (u || l && !Uo[l])) {
                            for (var c, f, p = -1, d = 0; d < Ro.length; d++) - 1 !== (g = s.indexOf(Ro[d])) && (-1 === p || g < p) && (p = g);
                            for (-1 !== (f = -1 === p ? s.lastIndexOf("@") : s.lastIndexOf("@", p)) && (c = s.slice(0, f), s = s.slice(f + 1), this.auth = decodeURIComponent(c)), p = -1, d = 0; d < Co.length; d++) {
                                var g; - 1 !== (g = s.indexOf(Co[d])) && (-1 === p || g < p) && (p = g)
                            } - 1 === p && (p = s.length), this.host = s.slice(0, p), s = s.slice(p), this.parseHost(), this.hostname = this.hostname || "";
                            var b = "[" === this.hostname[0] && "]" === this.hostname[this.hostname.length - 1];
                            if (!b)
                                for (var y = this.hostname.split(/\./), m = (d = 0, y.length); d < m; d++) {
                                    var w = y[d];
                                    if (w && !w.match(Oo)) {
                                        for (var _ = "", v = 0, E = w.length; v < E; v++) w.charCodeAt(v) > 127 ? _ += "x" : _ += w[v];
                                        if (!_.match(Oo)) {
                                            var S = y.slice(0, d),
                                                A = y.slice(d + 1),
                                                I = w.match(Po);
                                            I && (S.push(I[1]), A.unshift(I[2])), A.length && (s = "/" + A.join(".") + s), this.hostname = S.join(".");
                                            break
                                        }
                                    }
                                }
                            this.hostname.length > 255 ? this.hostname = "" : this.hostname = this.hostname.toLowerCase(), b || (this.hostname = vo.toASCII(this.hostname));
                            var k = this.port ? ":" + this.port : "",
                                T = this.hostname || "";
                            this.host = T + k, this.href += this.host, b && (this.hostname = this.hostname.substr(1, this.hostname.length - 2), "/" !== s[0] && (s = "/" + s))
                        }
                        if (!Bo[h])
                            for (d = 0, m = To.length; d < m; d++) {
                                var C = To[d];
                                if (-1 !== s.indexOf(C)) {
                                    var R = encodeURIComponent(C);
                                    R === C && (R = escape(C)), s = s.split(C).join(R)
                                }
                            }
                        var O = s.indexOf("#"); - 1 !== O && (this.hash = s.substr(O), s = s.slice(0, O));
                        var P = s.indexOf("?");
                        if (-1 !== P ? (this.search = s.substr(P), this.query = s.substr(P + 1), t && (this.query = Mo.parse(this.query)), s = s.slice(0, P)) : t && (this.search = "", this.query = {}), s && (this.pathname = s), Uo[h] && this.hostname && !this.pathname && (this.pathname = "/"), this.pathname || this.search) {
                            k = this.pathname || "";
                            var B = this.search || "";
                            this.path = k + B
                        }
                        return this.href = this.format(), this
                    }, po.prototype.format = function() {
                        var e = this.auth || "";
                        e && (e = (e = encodeURIComponent(e)).replace(/%3A/i, ":"), e += "@");
                        var t = this.protocol || "",
                            r = this.pathname || "",
                            i = this.hash || "",
                            n = !1,
                            o = "";
                        this.host ? n = e + this.host : this.hostname && (n = e + (-1 === this.hostname.indexOf(":") ? this.hostname : "[" + this.hostname + "]"), this.port && (n += ":" + this.port)), this.query && Eo.isObject(this.query) && Object.keys(this.query).length && (o = Mo.stringify(this.query));
                        var s = this.search || o && "?" + o || "";
                        return t && ":" !== t.substr(-1) && (t += ":"), this.slashes || (!t || Uo[t]) && !1 !== n ? (n = "//" + (n || ""), r && "/" !== r.charAt(0) && (r = "/" + r)) : n || (n = ""), i && "#" !== i.charAt(0) && (i = "#" + i), s && "?" !== s.charAt(0) && (s = "?" + s), t + n + (r = r.replace(/[?#]/g, (function(e) {
                            return encodeURIComponent(e)
                        }))) + (s = s.replace("#", "%23")) + i
                    }, po.prototype.resolve = function(e) {
                        return this.resolveObject(go(e, !1, !0)).format()
                    }, po.prototype.resolveObject = function(e) {
                        if (Eo.isString(e)) {
                            var t = new po;
                            t.parse(e, !1, !0), e = t
                        }
                        for (var r = new po, i = Object.keys(this), n = 0; n < i.length; n++) {
                            var o = i[n];
                            r[o] = this[o]
                        }
                        if (r.hash = e.hash, "" === e.href) return r.href = r.format(), r;
                        if (e.slashes && !e.protocol) {
                            for (var s = Object.keys(e), a = 0; a < s.length; a++) {
                                var l = s[a];
                                "protocol" !== l && (r[l] = e[l])
                            }
                            return Uo[r.protocol] && r.hostname && !r.pathname && (r.path = r.pathname = "/"), r.href = r.format(), r
                        }
                        if (e.protocol && e.protocol !== r.protocol) {
                            if (!Uo[e.protocol]) {
                                for (var h = Object.keys(e), u = 0; u < h.length; u++) {
                                    var c = h[u];
                                    r[c] = e[c]
                                }
                                return r.href = r.format(), r
                            }
                            if (r.protocol = e.protocol, e.host || xo[e.protocol]) r.pathname = e.pathname;
                            else {
                                for (var f = (e.pathname || "").split("/"); f.length && !(e.host = f.shift()););
                                e.host || (e.host = ""), e.hostname || (e.hostname = ""), "" !== f[0] && f.unshift(""), f.length < 2 && f.unshift(""), r.pathname = f.join("/")
                            }
                            if (r.search = e.search, r.query = e.query, r.host = e.host || "", r.auth = e.auth, r.hostname = e.hostname || e.host, r.port = e.port, r.pathname || r.search) {
                                var p = r.pathname || "",
                                    d = r.search || "";
                                r.path = p + d
                            }
                            return r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                        }
                        var g = r.pathname && "/" === r.pathname.charAt(0),
                            b = e.host || e.pathname && "/" === e.pathname.charAt(0),
                            y = b || g || r.host && e.pathname,
                            m = y,
                            w = r.pathname && r.pathname.split("/") || [],
                            _ = (f = e.pathname && e.pathname.split("/") || [], r.protocol && !Uo[r.protocol]);
                        if (_ && (r.hostname = "", r.port = null, r.host && ("" === w[0] ? w[0] = r.host : w.unshift(r.host)), r.host = "", e.protocol && (e.hostname = null, e.port = null, e.host && ("" === f[0] ? f[0] = e.host : f.unshift(e.host)), e.host = null), y = y && ("" === f[0] || "" === w[0])), b) r.host = e.host || "" === e.host ? e.host : r.host, r.hostname = e.hostname || "" === e.hostname ? e.hostname : r.hostname, r.search = e.search, r.query = e.query, w = f;
                        else if (f.length) w || (w = []), w.pop(), w = w.concat(f), r.search = e.search, r.query = e.query;
                        else if (!Eo.isNullOrUndefined(e.search)) return _ && (r.hostname = r.host = w.shift(), (I = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = I.shift(), r.host = r.hostname = I.shift())), r.search = e.search, r.query = e.query, Eo.isNull(r.pathname) && Eo.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.href = r.format(), r;
                        if (!w.length) return r.pathname = null, r.search ? r.path = "/" + r.search : r.path = null, r.href = r.format(), r;
                        for (var v = w.slice(-1)[0], E = (r.host || e.host || w.length > 1) && ("." === v || ".." === v) || "" === v, S = 0, A = w.length; A >= 0; A--) "." === (v = w[A]) ? w.splice(A, 1) : ".." === v ? (w.splice(A, 1), S++) : S && (w.splice(A, 1), S--);
                        if (!y && !m)
                            for (; S--; S) w.unshift("..");
                        !y || "" === w[0] || w[0] && "/" === w[0].charAt(0) || w.unshift(""), E && "/" !== w.join("/").substr(-1) && w.push("");
                        var I, k = "" === w[0] || w[0] && "/" === w[0].charAt(0);
                        return _ && (r.hostname = r.host = k ? "" : w.length ? w.shift() : "", (I = !!(r.host && r.host.indexOf("@") > 0) && r.host.split("@")) && (r.auth = I.shift(), r.host = r.hostname = I.shift())), (y = y || r.host && w.length) && !k && w.unshift(""), w.length ? r.pathname = w.join("/") : (r.pathname = null, r.path = null), Eo.isNull(r.pathname) && Eo.isNull(r.search) || (r.path = (r.pathname ? r.pathname : "") + (r.search ? r.search : "")), r.auth = e.auth || r.auth, r.slashes = r.slashes || e.slashes, r.href = r.format(), r
                    }, po.prototype.parseHost = function() {
                        var e = this.host,
                            t = Ao.exec(e);
                        t && (":" !== (t = t[0]) && (this.port = t.substr(1)), e = e.substr(0, e.length - t.length)), e && (this.hostname = e)
                    }, _o.Url, _o.format, _o.resolve, _o.resolveObject, Lo = {}, No = !1, jo = function() {
                        if (No) return Lo;
                        No = !0;
                        var e = to;

                        function t(e) {
                            if ("string" != typeof e) throw new TypeError("Path must be a string. Received " + JSON.stringify(e))
                        }

                        function r(e, t) {
                            for (var r, i = "", n = 0, o = -1, s = 0, a = 0; a <= e.length; ++a) {
                                if (a < e.length) r = e.charCodeAt(a);
                                else {
                                    if (47 === r) break;
                                    r = 47
                                }
                                if (47 === r) {
                                    if (o !== a - 1 && 1 !== s)
                                        if (o !== a - 1 && 2 === s) {
                                            if (i.length < 2 || 2 !== n || 46 !== i.charCodeAt(i.length - 1) || 46 !== i.charCodeAt(i.length - 2))
                                                if (i.length > 2) {
                                                    var l = i.lastIndexOf("/");
                                                    if (l !== i.length - 1) {
                                                        -1 === l ? (i = "", n = 0) : n = (i = i.slice(0, l)).length - 1 - i.lastIndexOf("/"), o = a, s = 0;
                                                        continue
                                                    }
                                                } else if (2 === i.length || 1 === i.length) {
                                                i = "", n = 0, o = a, s = 0;
                                                continue
                                            }
                                            t && (i.length > 0 ? i += "/.." : i = "..", n = 2)
                                        } else i.length > 0 ? i += "/" + e.slice(o + 1, a) : i = e.slice(o + 1, a), n = a - o - 1;
                                    o = a, s = 0
                                } else 46 === r && -1 !== s ? ++s : s = -1
                            }
                            return i
                        }
                        var i = {
                            resolve: function() {
                                for (var i, n = "", o = !1, s = arguments.length - 1; s >= -1 && !o; s--) {
                                    var a;
                                    s >= 0 ? a = arguments[s] : (void 0 === i && (i = e.cwd()), a = i), t(a), 0 !== a.length && (n = a + "/" + n, o = 47 === a.charCodeAt(0))
                                }
                                return n = r(n, !o), o ? n.length > 0 ? "/" + n : "/" : n.length > 0 ? n : "."
                            },
                            normalize: function(e) {
                                if (t(e), 0 === e.length) return ".";
                                var i = 47 === e.charCodeAt(0),
                                    n = 47 === e.charCodeAt(e.length - 1);
                                return 0 === (e = r(e, !i)).length && !i && (e = "."), e.length > 0 && n && (e += "/"), i ? "/" + e : e
                            },
                            isAbsolute: function(e) {
                                return t(e), e.length > 0 && 47 === e.charCodeAt(0)
                            },
                            join: function() {
                                if (0 === arguments.length) return ".";
                                for (var e, r = 0; r < arguments.length; ++r) {
                                    var n = arguments[r];
                                    t(n), n.length > 0 && (void 0 === e ? e = n : e += "/" + n)
                                }
                                return void 0 === e ? "." : i.normalize(e)
                            },
                            relative: function(e, r) {
                                if (t(e), t(r), e === r || (e = i.resolve(e)) === (r = i.resolve(r))) return "";
                                for (var n = 1; n < e.length && 47 === e.charCodeAt(n); ++n);
                                for (var o = e.length, s = o - n, a = 1; a < r.length && 47 === r.charCodeAt(a); ++a);
                                for (var l = r.length - a, h = s < l ? s : l, u = -1, c = 0; c <= h; ++c) {
                                    if (c === h) {
                                        if (l > h) {
                                            if (47 === r.charCodeAt(a + c)) return r.slice(a + c + 1);
                                            if (0 === c) return r.slice(a + c)
                                        } else s > h && (47 === e.charCodeAt(n + c) ? u = c : 0 === c && (u = 0));
                                        break
                                    }
                                    var f = e.charCodeAt(n + c);
                                    if (f !== r.charCodeAt(a + c)) break;
                                    47 === f && (u = c)
                                }
                                var p = "";
                                for (c = n + u + 1; c <= o; ++c)(c === o || 47 === e.charCodeAt(c)) && (0 === p.length ? p += ".." : p += "/..");
                                return p.length > 0 ? p + r.slice(a + u) : (a += u, 47 === r.charCodeAt(a) && ++a, r.slice(a))
                            },
                            _makeLong: function(e) {
                                return e
                            },
                            dirname: function(e) {
                                if (t(e), 0 === e.length) return ".";
                                for (var r = e.charCodeAt(0), i = 47 === r, n = -1, o = !0, s = e.length - 1; s >= 1; --s)
                                    if (47 === (r = e.charCodeAt(s))) {
                                        if (!o) {
                                            n = s;
                                            break
                                        }
                                    } else o = !1;
                                return -1 === n ? i ? "/" : "." : i && 1 === n ? "//" : e.slice(0, n)
                            },
                            basename: function(e, r) {
                                if (void 0 !== r && "string" != typeof r) throw new TypeError('"ext" argument must be a string');
                                t(e);
                                var i, n = 0,
                                    o = -1,
                                    s = !0;
                                if (void 0 !== r && r.length > 0 && r.length <= e.length) {
                                    if (r.length === e.length && r === e) return "";
                                    var a = r.length - 1,
                                        l = -1;
                                    for (i = e.length - 1; i >= 0; --i) {
                                        var h = e.charCodeAt(i);
                                        if (47 === h) {
                                            if (!s) {
                                                n = i + 1;
                                                break
                                            }
                                        } else - 1 === l && (s = !1, l = i + 1), a >= 0 && (h === r.charCodeAt(a) ? -1 == --a && (o = i) : (a = -1, o = l))
                                    }
                                    return n === o ? o = l : -1 === o && (o = e.length), e.slice(n, o)
                                }
                                for (i = e.length - 1; i >= 0; --i)
                                    if (47 === e.charCodeAt(i)) {
                                        if (!s) {
                                            n = i + 1;
                                            break
                                        }
                                    } else - 1 === o && (s = !1, o = i + 1);
                                return -1 === o ? "" : e.slice(n, o)
                            },
                            extname: function(e) {
                                t(e);
                                for (var r = -1, i = 0, n = -1, o = !0, s = 0, a = e.length - 1; a >= 0; --a) {
                                    var l = e.charCodeAt(a);
                                    if (47 !== l) - 1 === n && (o = !1, n = a + 1), 46 === l ? -1 === r ? r = a : 1 !== s && (s = 1) : -1 !== r && (s = -1);
                                    else if (!o) {
                                        i = a + 1;
                                        break
                                    }
                                }
                                return -1 === r || -1 === n || 0 === s || 1 === s && r === n - 1 && r === i + 1 ? "" : e.slice(r, n)
                            },
                            format: function(e) {
                                if (null === e || "object" != typeof e) throw new TypeError('The "pathObject" argument must be of type Object. Received type ' + typeof e);
                                return function(e, t) {
                                    var r = t.dir || t.root,
                                        i = t.base || (t.name || "") + (t.ext || "");
                                    return r ? r === t.root ? r + i : r + "/" + i : i
                                }(0, e)
                            },
                            parse: function(e) {
                                t(e);
                                var r = {
                                    root: "",
                                    dir: "",
                                    base: "",
                                    ext: "",
                                    name: ""
                                };
                                if (0 === e.length) return r;
                                var i, n = e.charCodeAt(0),
                                    o = 47 === n;
                                o ? (r.root = "/", i = 1) : i = 0;
                                for (var s = -1, a = 0, l = -1, h = !0, u = e.length - 1, c = 0; u >= i; --u)
                                    if (47 !== (n = e.charCodeAt(u))) - 1 === l && (h = !1, l = u + 1), 46 === n ? -1 === s ? s = u : 1 !== c && (c = 1) : -1 !== s && (c = -1);
                                    else if (!h) {
                                    a = u + 1;
                                    break
                                }
                                return -1 === s || -1 === l || 0 === c || 1 === c && s === l - 1 && s === a + 1 ? -1 !== l && (r.base = r.name = 0 === a && o ? e.slice(1, l) : e.slice(a, l)) : (0 === a && o ? (r.name = e.slice(1, s), r.base = e.slice(1, l)) : (r.name = e.slice(a, s), r.base = e.slice(a, l)), r.ext = e.slice(s, l)), a > 0 ? r.dir = e.slice(0, a - 1) : o && (r.dir = "/"), r
                            },
                            sep: "/",
                            delimiter: ":",
                            win32: null,
                            posix: null
                        };
                        return i.posix = i, Lo = i
                    }(), Do = typeof Deno < "u" ? "windows" === Deno.build.os ? "win32" : Deno.build.os : void 0, _o.URL = typeof URL < "u" ? URL : null, _o.pathToFileURL = yo, _o.fileURLToPath = bo, _o.Url, _o.format, _o.resolve, _o.resolveObject, _o.URL, Fo = 92, Wo = 47, $o = 97, qo = 122, Vo = "win32" === Do, Ho = /\//g, zo = /%/g, Ko = /\\/g, Go = /\n/g, Qo = /\r/g, Yo = /\t/g, Jo = typeof Deno < "u" ? "windows" === Deno.build.os ? "win32" : Deno.build.os : void 0, _o.URL = typeof URL < "u" ? URL : null, _o.pathToFileURL = wo, _o.fileURLToPath = mo, Xo = _o.Url, Zo = _o.format, es = _o.resolve, ts = _o.resolveObject, rs = _o.parse, is = _o.URL, ns = 92, os = 47, ss = 97, as = 122, ls = "win32" === Jo, hs = /\//g, us = /%/g, cs = /\\/g, fs = /\n/g, ps = /\r/g, ds = /\t/g
                })),
                bs = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t = typeof window < "u" && typeof window.document < "u" || "object" == typeof self && self.constructor && "DedicatedWorkerGlobalScope" === self.constructor.name || typeof navigator < "u" && "ReactNative" === navigator.product;
                    e.default = t
                })),
                ys = {};

            function ms() {
                throw new Error("Node.js net module is not supported by JSPM core outside of Node.js")
            }
            u(ys, {
                Server: () => ms,
                Socket: () => ms,
                Stream: () => ms,
                _createServerHandle: () => ms,
                _normalizeArgs: () => ms,
                _setSimultaneousAccepts: () => ms,
                connect: () => ms,
                createConnection: () => ms,
                createServer: () => ms,
                default: () => ws,
                isIP: () => ms,
                isIPv4: () => ms,
                isIPv6: () => ms
            });
            var ws, _s = l((() => {
                    f(), rt(), qe(), ws = {
                        _createServerHandle: ms,
                        _normalizeArgs: ms,
                        _setSimultaneousAccepts: ms,
                        connect: ms,
                        createConnection: ms,
                        createServer: ms,
                        isIP: ms,
                        isIPv4: ms,
                        isIPv6: ms,
                        Server: ms,
                        Socket: ms,
                        Stream: ms
                    }
                })),
                vs = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = t((_s(), c(ys))),
                        i = (0, t(Ai()).default)("mqttjs:tcp");
                    e.default = (e, t) => {
                        t.port = t.port || 1883, t.hostname = t.hostname || t.host || "localhost";
                        let {
                            port: n
                        } = t, o = t.hostname;
                        return i("port %d and host %s", n, o), r.default.createConnection(n, o)
                    }
                })),
                Es = {};
            u(Es, {
                default: () => Ss
            });
            var Ss, As = l((() => {
                    f(), rt(), qe(), Ss = {}
                })),
                Is = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = t((As(), c(Es))),
                        i = t((_s(), c(ys))),
                        n = (0, t(Ai()).default)("mqttjs:tls");
                    e.default = (e, t) => {
                        t.port = t.port || 8883, t.host = t.hostname || t.host || "localhost", 0 === i.default.isIP(t.host) && (t.servername = t.host), t.rejectUnauthorized = !1 !== t.rejectUnauthorized, delete t.path, n("port %d host %s rejectUnauthorized %b", t.port, t.host, t.rejectUnauthorized);
                        let o = r.default.connect(t);

                        function s(r) {
                            t.rejectUnauthorized && e.emit("error", r), o.end()
                        }
                        return o.on("secureConnect", (() => {
                            t.rejectUnauthorized && !o.authorized ? o.emit("error", new Error("TLS not authorized")) : o.removeListener("error", s)
                        })), o.on("error", s), o
                    }
                })),
                ks = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.BufferedDuplex = e.writev = void 0;
                    var t = bi();

                    function r(e, t) {
                        let r = new Array(e.length);
                        for (let t = 0; t < e.length; t++) "string" == typeof e[t].chunk ? r[t] = Xe.from(e[t].chunk, "utf8") : r[t] = e[t].chunk;
                        this._write(Xe.concat(r), "binary", t)
                    }
                    e.writev = r;
                    var i = class extends t.Duplex {
                        constructor(e, t, i) {
                            super({
                                objectMode: !0
                            }), this.proxy = t, this.socket = i, this.writeQueue = [], e.objectMode || (this._writev = r.bind(this)), this.isSocketOpen = !1, this.proxy.on("data", (e => {
                                this.push(e)
                            }))
                        }
                        _read(e) {
                            this.proxy.read(e)
                        }
                        _write(e, t, r) {
                            this.isSocketOpen ? this.writeToProxy(e, t, r) : this.writeQueue.push({
                                chunk: e,
                                encoding: t,
                                cb: r
                            })
                        }
                        _final(e) {
                            this.writeQueue = [], this.proxy.end(e)
                        }
                        socketReady() {
                            this.emit("connect"), this.isSocketOpen = !0, this.processWriteQueue()
                        }
                        writeToProxy(e, t, r) {
                            !1 === this.proxy.write(e, t) ? this.proxy.once("drain", r) : r()
                        }
                        processWriteQueue() {
                            for (; this.writeQueue.length > 0;) {
                                let {
                                    chunk: e,
                                    encoding: t,
                                    cb: r
                                } = this.writeQueue.shift();
                                this.writeToProxy(e, t, r)
                            }
                        }
                    };
                    e.BufferedDuplex = i
                })),
                Ts = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t, r, i, n = (tt(), c(Ve)),
                        o = bi(),
                        s = ks();
                    e.default = (e, a) => {
                        if (a.hostname = a.hostname || a.host, !a.hostname) throw new Error("Could not determine host. Specify host manually.");
                        let l = "MQIsdp" === a.protocolId && 3 === a.protocolVersion ? "mqttv3.1" : "mqtt";
                        ! function(e) {
                            e.hostname || (e.hostname = "localhost"), e.path || (e.path = "/"), e.wsOptions || (e.wsOptions = {})
                        }(a);
                        let h = function(e, t) {
                            let r = "wxs" === e.protocol ? "wss" : "ws",
                                i = `${r}://${e.hostname}${e.path}`;
                            return e.port && 80 !== e.port && 443 !== e.port && (i = `${r}://${e.hostname}:${e.port}${e.path}`), "function" == typeof e.transformWsUrl && (i = e.transformWsUrl(i, e, t)), i
                        }(a, e);
                        t = wx.connectSocket({
                            url: h,
                            protocols: [l]
                        }), r = function() {
                            let e = new o.Transform;
                            return e._write = (e, r, i) => {
                                t.send({
                                    data: e.buffer,
                                    success() {
                                        i()
                                    },
                                    fail(e) {
                                        i(new Error(e))
                                    }
                                })
                            }, e._flush = e => {
                                t.close({
                                    success() {
                                        e()
                                    }
                                })
                            }, e
                        }(), (i = new s.BufferedDuplex(a, r, t))._destroy = (e, r) => {
                            t.close({
                                success() {
                                    r && r(e)
                                }
                            })
                        };
                        let u = i.destroy;
                        return i.destroy = (e, r) => (i.destroy = u, setTimeout((() => {
                            t.close({
                                fail() {
                                    i._destroy(e, r)
                                }
                            })
                        }), 0), i), t.onOpen((() => {
                            i.socketReady()
                        })), t.onMessage((e => {
                            let {
                                data: t
                            } = e;
                            t = t instanceof ArrayBuffer ? n.Buffer.from(t) : n.Buffer.from(t, "utf8"), r.push(t)
                        })), t.onClose((() => {
                            i.emit("close"), i.end(), i.destroy()
                        })), t.onError((e => {
                            let t = new Error(e.errMsg);
                            i.destroy(t)
                        })), i
                    }
                })),
                Cs = h((e => {
                    f(), rt(), qe(), Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var t, r, i, n = (tt(), c(Ve)),
                        o = bi(),
                        s = ks(),
                        a = !1;
                    e.default = (e, l) => {
                        if (l.hostname = l.hostname || l.host, !l.hostname) throw new Error("Could not determine host. Specify host manually.");
                        let h = "MQIsdp" === l.protocolId && 3 === l.protocolVersion ? "mqttv3.1" : "mqtt";
                        ! function(e) {
                            e.hostname || (e.hostname = "localhost"), e.path || (e.path = "/"), e.wsOptions || (e.wsOptions = {})
                        }(l);
                        let u = function(e, t) {
                            let r = "alis" === e.protocol ? "wss" : "ws",
                                i = `${r}://${e.hostname}${e.path}`;
                            return e.port && 80 !== e.port && 443 !== e.port && (i = `${r}://${e.hostname}:${e.port}${e.path}`), "function" == typeof e.transformWsUrl && (i = e.transformWsUrl(i, e, t)), i
                        }(l, e);
                        return (t = l.my).connectSocket({
                            url: u,
                            protocols: h
                        }), r = function() {
                            let e = new o.Transform;
                            return e._write = (e, r, i) => {
                                t.sendSocketMessage({
                                    data: e.buffer,
                                    success() {
                                        i()
                                    },
                                    fail() {
                                        i(new Error)
                                    }
                                })
                            }, e._flush = e => {
                                t.closeSocket({
                                    success() {
                                        e()
                                    }
                                })
                            }, e
                        }(), i = new s.BufferedDuplex(l, r, t), a || (a = !0, t.onSocketOpen((() => {
                            i.socketReady()
                        })), t.onSocketMessage((e => {
                            if ("string" == typeof e.data) {
                                let t = n.Buffer.from(e.data, "base64");
                                r.push(t)
                            } else {
                                let t = new FileReader;
                                t.addEventListener("load", (() => {
                                    let e = t.result;
                                    e = e instanceof ArrayBuffer ? n.Buffer.from(e) : n.Buffer.from(e, "utf8"), r.push(e)
                                })), t.readAsArrayBuffer(e.data)
                            }
                        })), t.onSocketClose((() => {
                            i.end(), i.destroy()
                        })), t.onSocketError((e => {
                            i.destroy(e)
                        }))), i
                    }
                })),
                Rs = h(((e, t) => {
                    f(), rt(), qe(), t.exports = function() {
                        throw new Error("ws does not work in the browser. Browser clients must use the native WebSocket object")
                    }
                })),
                Os = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    });
                    var r = (tt(), c(Ve)),
                        i = t(Rs()),
                        n = t(Ai()),
                        o = bi(),
                        s = t(bs()),
                        a = ks(),
                        l = (0, n.default)("mqttjs:ws"),
                        h = ["rejectUnauthorized", "ca", "cert", "key", "pfx", "passphrase"];

                    function u(e, t) {
                        let r = `${e.protocol}://${e.hostname}:${e.port}${e.path}`;
                        return "function" == typeof e.transformWsUrl && (r = e.transformWsUrl(r, e, t)), r
                    }

                    function p(e) {
                        let t = e;
                        return e.hostname || (t.hostname = "localhost"), e.port || ("wss" === e.protocol ? t.port = 443 : t.port = 80), e.path || (t.path = "/"), e.wsOptions || (t.wsOptions = {}), !s.default && "wss" === e.protocol && h.forEach((r => {
                            Object.prototype.hasOwnProperty.call(e, r) && !Object.prototype.hasOwnProperty.call(e.wsOptions, r) && (t.wsOptions[r] = e[r])
                        })), t
                    }
                    e.default = s.default ? (e, t) => {
                        l("browserStreamBuilder");
                        let i, n = function(e) {
                                let t = p(e);
                                if (t.hostname || (t.hostname = t.host), !t.hostname) {
                                    if (typeof document > "u") throw new Error("Could not determine host. Specify host manually.");
                                    let e = new URL(document.URL);
                                    t.hostname = e.hostname, t.port || (t.port = Number(e.port))
                                }
                                return void 0 === t.objectMode && (t.objectMode = !(!0 === t.binary || void 0 === t.binary)), t
                            }(t).browserBufferSize || 524288,
                            s = t.browserBufferTimeout || 1e3,
                            h = !t.objectMode,
                            c = function(e, t) {
                                let r, i = "MQIsdp" === t.protocolId && 3 === t.protocolVersion ? "mqttv3.1" : "mqtt",
                                    n = u(t, e);
                                return r = t.createWebsocket ? t.createWebsocket(n, [i], t) : new WebSocket(n, [i]), r.binaryType = "arraybuffer", r
                            }(e, t),
                            f = function(e, t, i) {
                                let a = new o.Transform({
                                    objectMode: e.objectMode
                                });
                                return a._write = function e(t, i, o) {
                                    if (c.bufferedAmount > n) return void setTimeout(e, s, t, i, o);
                                    h && "string" == typeof t && (t = r.Buffer.from(t, "utf8"));
                                    try {
                                        c.send(t)
                                    } catch (e) {
                                        return o(e)
                                    }
                                    o()
                                }, a._flush = function(e) {
                                    c.close(), e()
                                }, a
                            }(t);
                        t.objectMode || (f._writev = a.writev.bind(f)), f.on("close", (() => {
                            c.close()
                        }));
                        let d = typeof c.addEventListener < "u";

                        function g() {
                            l("WebSocket onOpen"), i instanceof a.BufferedDuplex && i.socketReady()
                        }

                        function b(e) {
                            l("WebSocket onClose", e), i.end(), i.destroy()
                        }

                        function y(e) {
                            l("WebSocket onError", e);
                            let t = new Error("WebSocket error");
                            t.event = e, i.destroy(t)
                        }

                        function m(e) {
                            let {
                                data: t
                            } = e;
                            t = t instanceof ArrayBuffer ? r.Buffer.from(t) : r.Buffer.from(t, "utf8"), f.push(t)
                        }
                        return c.readyState === c.OPEN ? (i = f, i.socket = c) : (i = new a.BufferedDuplex(t, f, c), d ? c.addEventListener("open", g) : c.onopen = g), d ? (c.addEventListener("close", b), c.addEventListener("error", y), c.addEventListener("message", m)) : (c.onclose = b, c.onerror = y, c.onmessage = m), i
                    } : (e, t) => {
                        l("streamBuilder");
                        let r = p(t),
                            n = u(r, e),
                            o = function(e, t, r) {
                                l("createWebSocket"), l(`protocol: ${r.protocolId} ${r.protocolVersion}`);
                                let n, o = "MQIsdp" === r.protocolId && 3 === r.protocolVersion ? "mqttv3.1" : "mqtt";
                                return l(`creating new Websocket for url: ${t} and protocol: ${o}`), n = r.createWebsocket ? r.createWebsocket(t, [o], r) : new i.default(t, [o], r.wsOptions), n
                            }(0, n, r),
                            s = i.default.createWebSocketStream(o, r.wsOptions);
                        return s.url = n, o.on("close", (() => {
                            s.destroy()
                        })), s
                    }
                })),
                Ps = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__importDefault || function(e) {
                        return e && e.__esModule ? e : {
                            default: e
                        }
                    };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.connectAsync = void 0;
                    var r = t(Ai()),
                        i = t((gs(), c(fo))),
                        n = t(bn()),
                        o = t(bs()),
                        s = (0, r.default)("mqttjs"),
                        a = {};

                    function l(e, t) {
                        if (s("connecting to an MQTT broker..."), "object" == typeof e && !t && (t = e, e = ""), t = t || {}, e && "string" == typeof e) {
                            let r = i.default.parse(e, !0);
                            if (null != r.port && (r.port = Number(r.port)), null === (t = Object.assign(Object.assign({}, r), t)).protocol) throw new Error("Missing protocol");
                            t.protocol = t.protocol.replace(/:$/, "")
                        }
                        if (function(e) {
                                let t;
                                e.auth && (t = e.auth.match(/^(.+):(.+)$/), t ? (e.username = t[1], e.password = t[2]) : e.username = e.auth)
                            }(t), t.query && "string" == typeof t.query.clientId && (t.clientId = t.query.clientId), t.cert && t.key) {
                            if (!t.protocol) throw new Error("Missing secure protocol key");
                            if (-1 === ["mqtts", "wss", "wxs", "alis"].indexOf(t.protocol)) switch (t.protocol) {
                                case "mqtt":
                                    t.protocol = "mqtts";
                                    break;
                                case "ws":
                                    t.protocol = "wss";
                                    break;
                                case "wx":
                                    t.protocol = "wxs";
                                    break;
                                case "ali":
                                    t.protocol = "alis";
                                    break;
                                default:
                                    throw new Error(`Unknown protocol for secure connection: "${t.protocol}"!`)
                            }
                        }
                        if (!a[t.protocol]) {
                            let e = -1 !== ["mqtts", "wss"].indexOf(t.protocol);
                            t.protocol = ["mqtt", "mqtts", "ws", "wss", "wx", "wxs", "ali", "alis"].filter(((t, r) => (!e || r % 2 != 0) && "function" == typeof a[t]))[0]
                        }
                        if (!1 === t.clean && !t.clientId) throw new Error("Missing clientId for unclean clients");
                        t.protocol && (t.defaultProtocol = t.protocol);
                        let r = new n.default((function(e) {
                            return t.servers && ((!e._reconnectCount || e._reconnectCount === t.servers.length) && (e._reconnectCount = 0), t.host = t.servers[e._reconnectCount].host, t.port = t.servers[e._reconnectCount].port, t.protocol = t.servers[e._reconnectCount].protocol ? t.servers[e._reconnectCount].protocol : t.defaultProtocol, t.hostname = t.host, e._reconnectCount++), s("calling streambuilder for", t.protocol), a[t.protocol](e, t)
                        }), t);
                        return r.on("error", (() => {})), r
                    }
                    o.default ? (a.wx = Ts().default, a.wxs = Ts().default, a.ali = Cs().default, a.alis = Cs().default) : (a.mqtt = vs().default, a.tcp = vs().default, a.ssl = Is().default, a.tls = a.ssl, a.mqtts = Is().default), a.ws = Os().default, a.wss = Os().default, e.connectAsync = function(e, t, r = !0) {
                        return new Promise(((i, n) => {
                            let o = l(e, t),
                                s = {
                                    connect: e => {
                                        a(), i(o)
                                    },
                                    end: () => {
                                        a(), i(o)
                                    },
                                    error: e => {
                                        a(), o.end(), n(e)
                                    }
                                };

                            function a() {
                                Object.keys(s).forEach((e => {
                                    o.off(e, s[e])
                                }))
                            }!1 === r && (s.close = () => {
                                s.error(new Error("Couldn't connect to server"))
                            }), Object.keys(s).forEach((e => {
                                o.on(e, s[e])
                            }))
                        }))
                    }, e.default = l
                })),
                Bs = h((e => {
                    f(), rt(), qe();
                    var t = e && e.__createBinding || (Object.create ? function(e, t, r, i) {
                            void 0 === i && (i = r);
                            var n = Object.getOwnPropertyDescriptor(t, r);
                            (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                                enumerable: !0,
                                get: function() {
                                    return t[r]
                                }
                            }), Object.defineProperty(e, i, n)
                        } : function(e, t, r, i) {
                            void 0 === i && (i = r), e[i] = t[r]
                        }),
                        r = e && e.__setModuleDefault || (Object.create ? function(e, t) {
                            Object.defineProperty(e, "default", {
                                enumerable: !0,
                                value: t
                            })
                        } : function(e, t) {
                            e.default = t
                        }),
                        i = e && e.__importStar || function(e) {
                            if (e && e.__esModule) return e;
                            var i = {};
                            if (null != e)
                                for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && t(i, e, n);
                            return r(i, e), i
                        },
                        n = e && e.__exportStar || function(e, r) {
                            for (var i in e) "default" !== i && !Object.prototype.hasOwnProperty.call(r, i) && t(r, e, i)
                        },
                        o = e && e.__importDefault || function(e) {
                            return e && e.__esModule ? e : {
                                default: e
                            }
                        };
                    Object.defineProperty(e, "__esModule", {
                        value: !0
                    }), e.ReasonCodes = e.UniqueMessageIdProvider = e.DefaultMessageIdProvider = e.Store = e.MqttClient = e.connectAsync = e.connect = e.Client = void 0;
                    var s = o(bn());
                    e.MqttClient = s.default;
                    var a = o(Pi());
                    e.DefaultMessageIdProvider = a.default;
                    var l = o(yn());
                    e.UniqueMessageIdProvider = l.default;
                    var h = o(Li());
                    e.Store = h.default;
                    var u = i(Ps());
                    e.connect = u.default, Object.defineProperty(e, "connectAsync", {
                        enumerable: !0,
                        get: function() {
                            return u.connectAsync
                        }
                    }), e.Client = s.default, n(bn(), e), n(ji(), e);
                    var c = Di();
                    Object.defineProperty(e, "ReasonCodes", {
                        enumerable: !0,
                        get: function() {
                            return c.ReasonCodes
                        }
                    })
                }));
            const xs = h((e => {
                f(), rt(), qe();
                var t = e && e.__createBinding || (Object.create ? function(e, t, r, i) {
                        void 0 === i && (i = r);
                        var n = Object.getOwnPropertyDescriptor(t, r);
                        (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = {
                            enumerable: !0,
                            get: function() {
                                return t[r]
                            }
                        }), Object.defineProperty(e, i, n)
                    } : function(e, t, r, i) {
                        void 0 === i && (i = r), e[i] = t[r]
                    }),
                    r = e && e.__setModuleDefault || (Object.create ? function(e, t) {
                        Object.defineProperty(e, "default", {
                            enumerable: !0,
                            value: t
                        })
                    } : function(e, t) {
                        e.default = t
                    }),
                    i = e && e.__importStar || function(e) {
                        if (e && e.__esModule) return e;
                        var i = {};
                        if (null != e)
                            for (var n in e) "default" !== n && Object.prototype.hasOwnProperty.call(e, n) && t(i, e, n);
                        return r(i, e), i
                    },
                    n = e && e.__exportStar || function(e, r) {
                        for (var i in e) "default" !== i && !Object.prototype.hasOwnProperty.call(r, i) && t(r, e, i)
                    };
                Object.defineProperty(e, "__esModule", {
                    value: !0
                });
                var o = i(Bs());
                e.default = o, n(Bs(), e)
            }))()
        }
    }
]);