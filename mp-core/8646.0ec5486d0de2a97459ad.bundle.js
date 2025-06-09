/*! For license information please see 8646.0ec5486d0de2a97459ad.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [8646], {
        78646: (r, e, a) => {
            a.d(e, {
                HT: () => C
            });
            var n = Uint8Array,
                t = Uint16Array,
                i = Int32Array,
                f = new n([0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0]),
                o = new n([0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0, 0]),
                u = new n([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                v = function(r, e) {
                    for (var a = new t(31), n = 0; n < 31; ++n) a[n] = e += 1 << r[n - 1];
                    var f = new i(a[30]);
                    for (n = 1; n < 30; ++n)
                        for (var o = a[n]; o < a[n + 1]; ++o) f[o] = o - a[n] << 5 | n;
                    return {
                        b: a,
                        r: f
                    }
                },
                l = v(f, 2),
                c = l.b,
                d = l.r;
            c[28] = 258, d[258] = 28;
            for (var s = v(o, 0), w = s.b, b = (s.r, new t(32768)), h = 0; h < 32768; ++h) {
                var p = (43690 & h) >> 1 | (21845 & h) << 1;
                p = (61680 & (p = (52428 & p) >> 2 | (13107 & p) << 2)) >> 4 | (3855 & p) << 4, b[h] = ((65280 & p) >> 8 | (255 & p) << 8) >> 1
            }
            var y = function(r, e, a) {
                    for (var n = r.length, i = 0, f = new t(e); i < n; ++i) r[i] && ++f[r[i] - 1];
                    var o, u = new t(e);
                    for (i = 1; i < e; ++i) u[i] = u[i - 1] + f[i - 1] << 1;
                    if (a) {
                        o = new t(1 << e);
                        var v = 15 - e;
                        for (i = 0; i < n; ++i)
                            if (r[i])
                                for (var l = i << 4 | r[i], c = e - r[i], d = u[r[i] - 1]++ << c, s = d | (1 << c) - 1; d <= s; ++d) o[b[d] >> v] = l
                    } else
                        for (o = new t(n), i = 0; i < n; ++i) r[i] && (o[i] = b[u[r[i] - 1]++] >> 15 - r[i]);
                    return o
                },
                k = new n(288);
            for (h = 0; h < 144; ++h) k[h] = 8;
            for (h = 144; h < 256; ++h) k[h] = 9;
            for (h = 256; h < 280; ++h) k[h] = 7;
            for (h = 280; h < 288; ++h) k[h] = 8;
            var g = new n(32);
            for (h = 0; h < 32; ++h) g[h] = 5;
            var m = y(k, 9, 1),
                T = y(g, 5, 1),
                x = function(r) {
                    for (var e = r[0], a = 1; a < r.length; ++a) r[a] > e && (e = r[a]);
                    return e
                },
                E = function(r, e, a) {
                    var n = e / 8 | 0;
                    return (r[n] | r[n + 1] << 8) >> (7 & e) & a
                },
                M = function(r, e) {
                    var a = e / 8 | 0;
                    return (r[a] | r[a + 1] << 8 | r[a + 2] << 16) >> (7 & e)
                },
                z = ["unexpected EOF", "invalid block type", "invalid length/literal", "invalid distance", "stream finished", "no stream handler", , "no callback", "invalid UTF-8 data", "extra field too long", "date not in range 1980-2099", "filename too long", "stream finishing", "invalid zip data"],
                A = function(r, e, a) {
                    var n = new Error(e || z[r]);
                    if (n.code = r, Error.captureStackTrace && Error.captureStackTrace(n, A), !a) throw n;
                    return n
                },
                U = function(r, e, a, t) {
                    var i = r.length,
                        v = t ? t.length : 0;
                    if (!i || e.f && !e.l) return a || new n(0);
                    var l = !a,
                        d = l || 2 != e.i,
                        s = e.i;
                    l && (a = new n(3 * i));
                    var b, h = function(r) {
                            var e = a.length;
                            if (r > e) {
                                var t = new n(Math.max(2 * e, r));
                                t.set(a), a = t
                            }
                        },
                        p = e.f || 0,
                        k = e.p || 0,
                        g = e.b || 0,
                        z = e.l,
                        U = e.d,
                        q = e.m,
                        C = e.n,
                        D = 8 * i;
                    do {
                        if (!z) {
                            p = E(r, k, 1);
                            var F = E(r, k + 1, 3);
                            if (k += 3, !F) {
                                var S = r[(b = k, (P = 4 + ((b + 7) / 8 | 0)) - 4)] | r[P - 3] << 8,
                                    H = P + S;
                                if (H > i) {
                                    s && A(0);
                                    break
                                }
                                d && h(g + S), a.set(r.subarray(P, H), g), e.b = g += S, e.p = k = 8 * H, e.f = p;
                                continue
                            }
                            if (1 == F) z = m, U = T, q = 9, C = 5;
                            else if (2 == F) {
                                var I = E(r, k, 31) + 257,
                                    O = E(r, k + 10, 15) + 4,
                                    j = I + E(r, k + 5, 31) + 1;
                                k += 14;
                                for (var B = new n(j), G = new n(19), J = 0; J < O; ++J) G[u[J]] = E(r, k + 3 * J, 7);
                                k += 3 * O;
                                var K = x(G),
                                    L = (1 << K) - 1,
                                    N = y(G, K, 1);
                                for (J = 0; J < j;) {
                                    var P, Q = N[E(r, k, L)];
                                    if (k += 15 & Q, (P = Q >> 4) < 16) B[J++] = P;
                                    else {
                                        var R = 0,
                                            V = 0;
                                        for (16 == P ? (V = 3 + E(r, k, 3), k += 2, R = B[J - 1]) : 17 == P ? (V = 3 + E(r, k, 7), k += 3) : 18 == P && (V = 11 + E(r, k, 127), k += 7); V--;) B[J++] = R
                                    }
                                }
                                var W = B.subarray(0, I),
                                    X = B.subarray(I);
                                q = x(W), C = x(X), z = y(W, q, 1), U = y(X, C, 1)
                            } else A(1);
                            if (k > D) {
                                s && A(0);
                                break
                            }
                        }
                        d && h(g + 131072);
                        for (var Y = (1 << q) - 1, Z = (1 << C) - 1, $ = k;; $ = k) {
                            var _ = (R = z[M(r, k) & Y]) >> 4;
                            if ((k += 15 & R) > D) {
                                s && A(0);
                                break
                            }
                            if (R || A(2), _ < 256) a[g++] = _;
                            else {
                                if (256 == _) {
                                    $ = k, z = null;
                                    break
                                }
                                var rr = _ - 254;
                                if (_ > 264) {
                                    var er = f[J = _ - 257];
                                    rr = E(r, k, (1 << er) - 1) + c[J], k += er
                                }
                                var ar = U[M(r, k) & Z],
                                    nr = ar >> 4;
                                if (ar || A(3), k += 15 & ar, X = w[nr], nr > 3 && (er = o[nr], X += M(r, k) & (1 << er) - 1, k += er), k > D) {
                                    s && A(0);
                                    break
                                }
                                d && h(g + 131072);
                                var tr = g + rr;
                                if (g < X) {
                                    var ir = v - X,
                                        fr = Math.min(X, tr);
                                    for (ir + g < 0 && A(3); g < fr; ++g) a[g] = t[ir + g]
                                }
                                for (; g < tr; ++g) a[g] = a[g - X]
                            }
                        }
                        e.l = z, e.p = $, e.b = g, e.f = p, z && (p = 1, e.m = q, e.d = U, e.n = C)
                    } while (!p);
                    return g != a.length && l ? function(r, e, a) {
                        return (null == e || e < 0) && (e = 0), (null == a || a > r.length) && (a = r.length), new n(r.subarray(e, a))
                    }(a, 0, g) : a.subarray(0, g)
                },
                q = new n(0);

            function C(r, e) {
                return U(r.subarray((a = r, n = e && e.dictionary, (8 != (15 & a[0]) || a[0] >> 4 > 7 || (a[0] << 8 | a[1]) % 31) && A(6, "invalid zlib data"), (a[1] >> 5 & 1) == +!n && A(6, "invalid zlib data: " + (32 & a[1] ? "need" : "unexpected") + " dictionary"), 2 + (a[1] >> 3 & 4)), -4), {
                    i: 2
                }, e && e.out, e && e.dictionary);
                var a, n
            }
            var D = "undefined" != typeof TextDecoder && new TextDecoder;
            try {
                D.decode(q, {
                    stream: !0
                })
            } catch (r) {}
            "function" == typeof queueMicrotask ? queueMicrotask : "function" == typeof setTimeout && setTimeout
        }
    }
]);