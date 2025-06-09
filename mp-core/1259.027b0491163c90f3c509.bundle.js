"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [1259], {
        91259: (e, t, n) => {
            n.d(t, {
                I: () => i
            });
            var r = n(99477),
                o = n(78646),
                l = n(25108);
            class i extends r.DataTextureLoader {
                constructor(e) {
                    super(e), this.type = r.HalfFloatType
                }
                parse(e) {
                    const t = 65536,
                        n = 14,
                        i = 65537,
                        s = Math.pow(2.7182818, 2.2),
                        a = {
                            l: 0,
                            c: 0,
                            lc: 0
                        };

                    function c(e, t, n, r, o) {
                        for (; n < e;) t = t << 8 | B(r, o), n += 8;
                        n -= e, a.l = t >> n & (1 << e) - 1, a.c = t, a.lc = n
                    }
                    const u = new Array(59);

                    function f(e) {
                        return 63 & e
                    }

                    function h(e) {
                        return e >> 6
                    }
                    const p = {
                        c: 0,
                        lc: 0
                    };

                    function w(e, t, n, r) {
                        e = e << 8 | B(n, r), t += 8, p.c = e, p.lc = t
                    }
                    const d = {
                        c: 0,
                        lc: 0
                    };

                    function y(e, t, n, r, o, l, i, s, a) {
                        if (e == t) {
                            r < 8 && (w(n, r, o, l), n = p.c, r = p.lc);
                            let e = n >> (r -= 8);
                            if (e = new Uint8Array([e])[0], s.value + e > a) return !1;
                            const t = i[s.value - 1];
                            for (; e-- > 0;) i[s.value++] = t
                        } else {
                            if (!(s.value < a)) return !1;
                            i[s.value++] = e
                        }
                        d.c = n, d.lc = r
                    }

                    function g(e) {
                        return 65535 & e
                    }

                    function v(e) {
                        const t = g(e);
                        return t > 32767 ? t - 65536 : t
                    }
                    const m = {
                        a: 0,
                        b: 0
                    };

                    function b(e, t) {
                        const n = v(e),
                            r = v(t),
                            o = n + (1 & r) + (r >> 1),
                            l = o,
                            i = o - r;
                        m.a = l, m.b = i
                    }

                    function E(e, t) {
                        const n = g(e),
                            r = g(t),
                            o = n - (r >> 1) & 65535,
                            l = r + o - 32768 & 65535;
                        m.a = l, m.b = o
                    }

                    function S(e, t, n, r, o, l, i) {
                        const s = i < 16384,
                            a = n > o ? o : n;
                        let c, u, f = 1;
                        for (; f <= a;) f <<= 1;
                        for (f >>= 1, c = f, f >>= 1; f >= 1;) {
                            u = 0;
                            const i = u + l * (o - c),
                                a = l * f,
                                h = l * c,
                                p = r * f,
                                w = r * c;
                            let d, y, g, v;
                            for (; u <= i; u += h) {
                                let o = u;
                                const l = u + r * (n - c);
                                for (; o <= l; o += w) {
                                    const n = o + p,
                                        r = o + a,
                                        l = r + p;
                                    s ? (b(e[o + t], e[r + t]), d = m.a, g = m.b, b(e[n + t], e[l + t]), y = m.a, v = m.b, b(d, y), e[o + t] = m.a, e[n + t] = m.b, b(g, v), e[r + t] = m.a, e[l + t] = m.b) : (E(e[o + t], e[r + t]), d = m.a, g = m.b, E(e[n + t], e[l + t]), y = m.a, v = m.b, E(d, y), e[o + t] = m.a, e[n + t] = m.b, E(g, v), e[r + t] = m.a, e[l + t] = m.b)
                                }
                                if (n & f) {
                                    const n = o + a;
                                    s ? b(e[o + t], e[n + t]) : E(e[o + t], e[n + t]), d = m.a, e[n + t] = m.b, e[o + t] = d
                                }
                            }
                            if (o & f) {
                                let o = u;
                                const l = u + r * (n - c);
                                for (; o <= l; o += w) {
                                    const n = o + p;
                                    s ? b(e[o + t], e[n + t]) : E(e[o + t], e[n + t]), d = m.a, e[n + t] = m.b, e[o + t] = d
                                }
                            }
                            c = f, f >>= 1
                        }
                        return u
                    }

                    function A(e, t, r, o, l, s) {
                        const g = r.value,
                            v = D(t, r),
                            m = D(t, r);
                        r.value += 4;
                        const b = D(t, r);
                        if (r.value += 4, v < 0 || v >= i || m < 0 || m >= i) throw new Error("Something wrong with HUF_ENCSIZE");
                        const E = new Array(i),
                            S = new Array(16384);
                        if (function(e) {
                                for (let t = 0; t < 16384; t++) e[t] = {}, e[t].len = 0, e[t].lit = 0, e[t].p = null
                            }(S), function(e, t, n, r, o, l) {
                                const s = t;
                                let f = 0,
                                    h = 0;
                                for (; r <= o; r++) {
                                    if (s.value - t.value > n) return !1;
                                    c(6, f, h, e, s);
                                    const i = a.l;
                                    if (f = a.c, h = a.lc, l[r] = i, 63 == i) {
                                        if (s.value - t.value > n) throw new Error("Something wrong with hufUnpackEncTable");
                                        c(8, f, h, e, s);
                                        let i = a.l + 6;
                                        if (f = a.c, h = a.lc, r + i > o + 1) throw new Error("Something wrong with hufUnpackEncTable");
                                        for (; i--;) l[r++] = 0;
                                        r--
                                    } else if (i >= 59) {
                                        let e = i - 59 + 2;
                                        if (r + e > o + 1) throw new Error("Something wrong with hufUnpackEncTable");
                                        for (; e--;) l[r++] = 0;
                                        r--
                                    }
                                }! function(e) {
                                    for (let e = 0; e <= 58; ++e) u[e] = 0;
                                    for (let t = 0; t < i; ++t) u[e[t]] += 1;
                                    let t = 0;
                                    for (let e = 58; e > 0; --e) {
                                        const n = t + u[e] >> 1;
                                        u[e] = t, t = n
                                    }
                                    for (let t = 0; t < i; ++t) {
                                        const n = e[t];
                                        n > 0 && (e[t] = n | u[n]++ << 6)
                                    }
                                }(l)
                            }(e, r, o - (r.value - g), v, m, E), b > 8 * (o - (r.value - g))) throw new Error("Something wrong with hufUncompress");
                        ! function(e, t, r, o) {
                            for (; t <= r; t++) {
                                const r = h(e[t]),
                                    l = f(e[t]);
                                if (r >> l) throw new Error("Invalid table entry");
                                if (l > n) {
                                    const e = o[r >> l - n];
                                    if (e.len) throw new Error("Invalid table entry");
                                    if (e.lit++, e.p) {
                                        const t = e.p;
                                        e.p = new Array(e.lit);
                                        for (let n = 0; n < e.lit - 1; ++n) e.p[n] = t[n]
                                    } else e.p = new Array(1);
                                    e.p[e.lit - 1] = t
                                } else if (l) {
                                    let e = 0;
                                    for (let i = 1 << n - l; i > 0; i--) {
                                        const i = o[(r << n - l) + e];
                                        if (i.len || i.p) throw new Error("Invalid table entry");
                                        i.len = l, i.lit = t, e++
                                    }
                                }
                            }
                        }(E, v, m, S),
                        function(e, t, r, o, l, i, s, a, c) {
                            let u = 0,
                                g = 0;
                            const v = s,
                                m = Math.trunc(o.value + (l + 7) / 8);
                            for (; o.value < m;)
                                for (w(u, g, r, o), u = p.c, g = p.lc; g >= n;) {
                                    const l = t[u >> g - n & 16383];
                                    if (l.len) g -= l.len, y(l.lit, i, u, g, r, o, a, c, v), u = d.c, g = d.lc;
                                    else {
                                        if (!l.p) throw new Error("hufDecode issues");
                                        let t;
                                        for (t = 0; t < l.lit; t++) {
                                            const n = f(e[l.p[t]]);
                                            for (; g < n && o.value < m;) w(u, g, r, o), u = p.c, g = p.lc;
                                            if (g >= n && h(e[l.p[t]]) == (u >> g - n & (1 << n) - 1)) {
                                                g -= n, y(l.p[t], i, u, g, r, o, a, c, v), u = d.c, g = d.lc;
                                                break
                                            }
                                        }
                                        if (t == l.lit) throw new Error("hufDecode issues")
                                    }
                                }
                            const b = 8 - l & 7;
                            for (u >>= b, g -= b; g > 0;) {
                                const e = t[u << n - g & 16383];
                                if (!e.len) throw new Error("hufDecode issues");
                                g -= e.len, y(e.lit, i, u, g, r, o, a, c, v), u = d.c, g = d.lc
                            }
                        }(E, S, e, r, b, m, s, l, {
                            value: 0
                        })
                    }

                    function C(e) {
                        for (let t = 1; t < e.length; t++) {
                            const n = e[t - 1] + e[t] - 128;
                            e[t] = n
                        }
                    }

                    function M(e, t) {
                        let n = 0,
                            r = Math.floor((e.length + 1) / 2),
                            o = 0;
                        const l = e.length - 1;
                        for (; !(o > l || (t[o++] = e[n++], o > l));) t[o++] = e[r++]
                    }

                    function U(e) {
                        let t = e.byteLength;
                        const n = new Array;
                        let r = 0;
                        const o = new DataView(e);
                        for (; t > 0;) {
                            const e = o.getInt8(r++);
                            if (e < 0) {
                                const l = -e;
                                t -= l + 1;
                                for (let e = 0; e < l; e++) n.push(o.getUint8(r++))
                            } else {
                                const l = e;
                                t -= 2;
                                const i = o.getUint8(r++);
                                for (let e = 0; e < l + 1; e++) n.push(i)
                            }
                        }
                        return n
                    }

                    function O(e, t, n) {
                        let r, o = 1;
                        for (; o < 64;) r = t[e.value], 65280 == r ? o = 64 : r >> 8 == 255 ? o += 255 & r : (n[o] = r, o++), e.value++
                    }

                    function R(e) {
                        const t = .5 * Math.cos(.7853975),
                            n = .5 * Math.cos(3.14159 / 16),
                            r = .5 * Math.cos(3.14159 / 8),
                            o = .5 * Math.cos(3 * 3.14159 / 16),
                            l = .5 * Math.cos(.981746875),
                            i = .5 * Math.cos(3 * 3.14159 / 8),
                            s = .5 * Math.cos(1.374445625),
                            a = new Array(4),
                            c = new Array(4),
                            u = new Array(4),
                            f = new Array(4);
                        for (let h = 0; h < 8; ++h) {
                            const p = 8 * h;
                            a[0] = r * e[p + 2], a[1] = i * e[p + 2], a[2] = r * e[p + 6], a[3] = i * e[p + 6], c[0] = n * e[p + 1] + o * e[p + 3] + l * e[p + 5] + s * e[p + 7], c[1] = o * e[p + 1] - s * e[p + 3] - n * e[p + 5] - l * e[p + 7], c[2] = l * e[p + 1] - n * e[p + 3] + s * e[p + 5] + o * e[p + 7], c[3] = s * e[p + 1] - l * e[p + 3] + o * e[p + 5] - n * e[p + 7], u[0] = t * (e[p + 0] + e[p + 4]), u[3] = t * (e[p + 0] - e[p + 4]), u[1] = a[0] + a[3], u[2] = a[1] - a[2], f[0] = u[0] + u[1], f[1] = u[3] + u[2], f[2] = u[3] - u[2], f[3] = u[0] - u[1], e[p + 0] = f[0] + c[0], e[p + 1] = f[1] + c[1], e[p + 2] = f[2] + c[2], e[p + 3] = f[3] + c[3], e[p + 4] = f[3] - c[3], e[p + 5] = f[2] - c[2], e[p + 6] = f[1] - c[1], e[p + 7] = f[0] - c[0]
                        }
                        for (let h = 0; h < 8; ++h) a[0] = r * e[16 + h], a[1] = i * e[16 + h], a[2] = r * e[48 + h], a[3] = i * e[48 + h], c[0] = n * e[8 + h] + o * e[24 + h] + l * e[40 + h] + s * e[56 + h], c[1] = o * e[8 + h] - s * e[24 + h] - n * e[40 + h] - l * e[56 + h], c[2] = l * e[8 + h] - n * e[24 + h] + s * e[40 + h] + o * e[56 + h], c[3] = s * e[8 + h] - l * e[24 + h] + o * e[40 + h] - n * e[56 + h], u[0] = t * (e[h] + e[32 + h]), u[3] = t * (e[h] - e[32 + h]), u[1] = a[0] + a[3], u[2] = a[1] - a[2], f[0] = u[0] + u[1], f[1] = u[3] + u[2], f[2] = u[3] - u[2], f[3] = u[0] - u[1], e[0 + h] = f[0] + c[0], e[8 + h] = f[1] + c[1], e[16 + h] = f[2] + c[2], e[24 + h] = f[3] + c[3], e[32 + h] = f[3] - c[3], e[40 + h] = f[2] - c[2], e[48 + h] = f[1] - c[1], e[56 + h] = f[0] - c[0]
                    }

                    function k(e) {
                        for (let t = 0; t < 64; ++t) {
                            const n = e[0][t],
                                r = e[1][t],
                                o = e[2][t];
                            e[0][t] = n + 1.5747 * o, e[1][t] = n - .1873 * r - .4682 * o, e[2][t] = n + 1.8556 * r
                        }
                    }

                    function I(e, t, n) {
                        for (let l = 0; l < 64; ++l) t[n + l] = r.DataUtils.toHalfFloat((o = e[l]) <= 1 ? Math.sign(o) * Math.pow(Math.abs(o), 2.2) : Math.sign(o) * Math.pow(s, Math.abs(o) - 1));
                        var o
                    }

                    function P(e) {
                        return new DataView(e.array.buffer, e.offset.value, e.size)
                    }

                    function N(e) {
                        const t = e.viewer.buffer.slice(e.offset.value, e.offset.value + e.size),
                            n = new Uint8Array(U(t)),
                            r = new Uint8Array(n.length);
                        return C(n), M(n, r), new DataView(r.buffer)
                    }

                    function x(e) {
                        const t = e.array.slice(e.offset.value, e.offset.value + e.size),
                            n = o.HT(t),
                            r = new Uint8Array(n.length);
                        return C(n), M(n, r), new DataView(r.buffer)
                    }

                    function L(e) {
                        const n = e.viewer,
                            r = {
                                value: e.offset.value
                            },
                            o = new Uint16Array(e.columns * e.lines * (e.inputChannels.length * e.type)),
                            l = new Uint8Array(8192);
                        let i = 0;
                        const s = new Array(e.inputChannels.length);
                        for (let t = 0, n = e.inputChannels.length; t < n; t++) s[t] = {}, s[t].start = i, s[t].end = s[t].start, s[t].nx = e.columns, s[t].ny = e.lines, s[t].size = e.type, i += s[t].nx * s[t].ny * s[t].size;
                        const a = G(n, r),
                            c = G(n, r);
                        if (c >= 8192) throw new Error("Something is wrong with PIZ_COMPRESSION BITMAP_SIZE");
                        if (a <= c)
                            for (let e = 0; e < c - a + 1; e++) l[e + a] = F(n, r);
                        const u = new Uint16Array(t),
                            f = function(e, n) {
                                let r = 0;
                                for (let o = 0; o < t; ++o)(0 == o || e[o >> 3] & 1 << (7 & o)) && (n[r++] = o);
                                const o = r - 1;
                                for (; r < t;) n[r++] = 0;
                                return o
                            }(l, u),
                            h = D(n, r);
                        A(e.array, n, r, h, o, i);
                        for (let t = 0; t < e.inputChannels.length; ++t) {
                            const e = s[t];
                            for (let n = 0; n < s[t].size; ++n) S(o, e.start + n, e.nx, e.size, e.ny, e.nx * e.size, f)
                        }! function(e, t, n) {
                            for (let r = 0; r < n; ++r) t[r] = e[t[r]]
                        }(u, o, i);
                        let p = 0;
                        const w = new Uint8Array(o.buffer.byteLength);
                        for (let t = 0; t < e.lines; t++)
                            for (let t = 0; t < e.inputChannels.length; t++) {
                                const e = s[t],
                                    n = e.nx * e.size,
                                    r = new Uint8Array(o.buffer, 2 * e.end, 2 * n);
                                w.set(r, p), p += 2 * n, e.end += n
                            }
                        return new DataView(w.buffer)
                    }

                    function z(e) {
                        const t = e.array.slice(e.offset.value, e.offset.value + e.size),
                            n = o.HT(t),
                            r = e.inputChannels.length * e.lines * e.columns * e.totalBytes,
                            l = new ArrayBuffer(r),
                            i = new DataView(l);
                        let s = 0,
                            a = 0;
                        const c = new Array(4);
                        for (let t = 0; t < e.lines; t++)
                            for (let t = 0; t < e.inputChannels.length; t++) {
                                let r = 0;
                                switch (e.inputChannels[t].pixelType) {
                                    case 1:
                                        c[0] = s, c[1] = c[0] + e.columns, s = c[1] + e.columns;
                                        for (let t = 0; t < e.columns; ++t) r += n[c[0]++] << 8 | n[c[1]++], i.setUint16(a, r, !0), a += 2;
                                        break;
                                    case 2:
                                        c[0] = s, c[1] = c[0] + e.columns, c[2] = c[1] + e.columns, s = c[2] + e.columns;
                                        for (let t = 0; t < e.columns; ++t) r += n[c[0]++] << 24 | n[c[1]++] << 16 | n[c[2]++] << 8, i.setUint32(a, r, !0), a += 4
                                }
                            }
                        return i
                    }

                    function _(e) {
                        const t = e.viewer,
                            n = {
                                value: e.offset.value
                            },
                            r = new Uint8Array(e.columns * e.lines * (e.inputChannels.length * e.type * 2)),
                            l = {
                                version: V(t, n),
                                unknownUncompressedSize: V(t, n),
                                unknownCompressedSize: V(t, n),
                                acCompressedSize: V(t, n),
                                dcCompressedSize: V(t, n),
                                rleCompressedSize: V(t, n),
                                rleUncompressedSize: V(t, n),
                                rleRawSize: V(t, n),
                                totalAcUncompressedCount: V(t, n),
                                totalDcUncompressedCount: V(t, n),
                                acCompression: V(t, n)
                            };
                        if (l.version < 2) throw new Error("EXRLoader.parse: " + te.compression + " version " + l.version + " is unsupported");
                        const i = new Array;
                        let s = G(t, n) - 2;
                        for (; s > 0;) {
                            const e = H(t.buffer, n),
                                r = F(t, n),
                                o = r >> 2 & 3,
                                l = new Int8Array([(r >> 4) - 1])[0],
                                a = F(t, n);
                            i.push({
                                name: e,
                                index: l,
                                type: a,
                                compression: o
                            }), s -= e.length + 3
                        }
                        const a = te.channels,
                            c = new Array(e.inputChannels.length);
                        for (let t = 0; t < e.inputChannels.length; ++t) {
                            const n = c[t] = {},
                                r = a[t];
                            n.name = r.name, n.compression = 0, n.decoded = !1, n.type = r.pixelType, n.pLinear = r.pLinear, n.width = e.columns, n.height = e.lines
                        }
                        const u = {
                            idx: new Array(3)
                        };
                        for (let t = 0; t < e.inputChannels.length; ++t) {
                            const e = c[t];
                            for (let n = 0; n < i.length; ++n) {
                                const r = i[n];
                                e.name == r.name && (e.compression = r.compression, r.index >= 0 && (u.idx[r.index] = t), e.offset = t)
                            }
                        }
                        let f, h, p;
                        if (l.acCompressedSize > 0) switch (l.acCompression) {
                            case 0:
                                f = new Uint16Array(l.totalAcUncompressedCount), A(e.array, t, n, l.acCompressedSize, f, l.totalAcUncompressedCount);
                                break;
                            case 1:
                                const r = e.array.slice(n.value, n.value + l.totalAcUncompressedCount),
                                    i = o.HT(r);
                                f = new Uint16Array(i.buffer), n.value += l.totalAcUncompressedCount
                        }
                        if (l.dcCompressedSize > 0) {
                            const t = {
                                array: e.array,
                                offset: n,
                                size: l.dcCompressedSize
                            };
                            h = new Uint16Array(x(t).buffer), n.value += l.dcCompressedSize
                        }
                        if (l.rleRawSize > 0) {
                            const t = e.array.slice(n.value, n.value + l.rleCompressedSize);
                            p = U(o.HT(t).buffer), n.value += l.rleCompressedSize
                        }
                        let w = 0;
                        const d = new Array(c.length);
                        for (let e = 0; e < d.length; ++e) d[e] = new Array;
                        for (let t = 0; t < e.lines; ++t)
                            for (let t = 0; t < c.length; ++t) d[t].push(w), w += c[t].width * e.type * 2;
                        ! function(e, t, n, r, o, l) {
                            let i = new DataView(l.buffer);
                            const s = n[e.idx[0]].width,
                                a = n[e.idx[0]].height,
                                c = Math.floor(s / 8),
                                u = Math.ceil(s / 8),
                                f = Math.ceil(a / 8),
                                h = s - 8 * (u - 1),
                                p = a - 8 * (f - 1),
                                w = {
                                    value: 0
                                },
                                d = new Array(3),
                                y = new Array(3),
                                g = new Array(3),
                                v = new Array(3),
                                m = new Array(3);
                            for (let n = 0; n < 3; ++n) m[n] = t[e.idx[n]], d[n] = n < 1 ? 0 : d[n - 1] + u * f, y[n] = new Float32Array(64), g[n] = new Uint16Array(64), v[n] = new Uint16Array(64 * u);
                            for (let t = 0; t < f; ++t) {
                                let l = 8;
                                t == f - 1 && (l = p);
                                let s = 8;
                                for (let e = 0; e < u; ++e) {
                                    e == u - 1 && (s = h);
                                    for (let e = 0; e < 3; ++e) g[e].fill(0), g[e][0] = o[d[e]++], O(w, r, g[e]), b = g[e], (E = y[e])[0] = Y(b[0]), E[1] = Y(b[1]), E[2] = Y(b[5]), E[3] = Y(b[6]), E[4] = Y(b[14]), E[5] = Y(b[15]), E[6] = Y(b[27]), E[7] = Y(b[28]), E[8] = Y(b[2]), E[9] = Y(b[4]), E[10] = Y(b[7]), E[11] = Y(b[13]), E[12] = Y(b[16]), E[13] = Y(b[26]), E[14] = Y(b[29]), E[15] = Y(b[42]), E[16] = Y(b[3]), E[17] = Y(b[8]), E[18] = Y(b[12]), E[19] = Y(b[17]), E[20] = Y(b[25]), E[21] = Y(b[30]), E[22] = Y(b[41]), E[23] = Y(b[43]), E[24] = Y(b[9]), E[25] = Y(b[11]), E[26] = Y(b[18]), E[27] = Y(b[24]), E[28] = Y(b[31]), E[29] = Y(b[40]), E[30] = Y(b[44]), E[31] = Y(b[53]), E[32] = Y(b[10]), E[33] = Y(b[19]), E[34] = Y(b[23]), E[35] = Y(b[32]), E[36] = Y(b[39]), E[37] = Y(b[45]), E[38] = Y(b[52]), E[39] = Y(b[54]), E[40] = Y(b[20]), E[41] = Y(b[22]), E[42] = Y(b[33]), E[43] = Y(b[38]), E[44] = Y(b[46]), E[45] = Y(b[51]), E[46] = Y(b[55]), E[47] = Y(b[60]), E[48] = Y(b[21]), E[49] = Y(b[34]), E[50] = Y(b[37]), E[51] = Y(b[47]), E[52] = Y(b[50]), E[53] = Y(b[56]), E[54] = Y(b[59]), E[55] = Y(b[61]), E[56] = Y(b[35]), E[57] = Y(b[36]), E[58] = Y(b[48]), E[59] = Y(b[49]), E[60] = Y(b[57]), E[61] = Y(b[58]), E[62] = Y(b[62]), E[63] = Y(b[63]), R(y[e]);
                                    k(y);
                                    for (let t = 0; t < 3; ++t) I(y[t], v[t], 64 * e)
                                }
                                let a = 0;
                                for (let r = 0; r < 3; ++r) {
                                    const o = n[e.idx[r]].type;
                                    for (let e = 8 * t; e < 8 * t + l; ++e) {
                                        a = m[r][e];
                                        for (let t = 0; t < c; ++t) {
                                            const n = 64 * t + 8 * (7 & e);
                                            i.setUint16(a + 0 * o, v[r][n + 0], !0), i.setUint16(a + 2 * o, v[r][n + 1], !0), i.setUint16(a + 4 * o, v[r][n + 2], !0), i.setUint16(a + 6 * o, v[r][n + 3], !0), i.setUint16(a + 8 * o, v[r][n + 4], !0), i.setUint16(a + 10 * o, v[r][n + 5], !0), i.setUint16(a + 12 * o, v[r][n + 6], !0), i.setUint16(a + 14 * o, v[r][n + 7], !0), a += 16 * o
                                        }
                                    }
                                    if (c != u)
                                        for (let e = 8 * t; e < 8 * t + l; ++e) {
                                            const t = m[r][e] + 8 * c * 2 * o,
                                                n = 64 * c + 8 * (7 & e);
                                            for (let e = 0; e < s; ++e) i.setUint16(t + 2 * e * o, v[r][n + e], !0)
                                        }
                                }
                            }
                            var b, E;
                            const S = new Uint16Array(s);
                            i = new DataView(l.buffer);
                            for (let t = 0; t < 3; ++t) {
                                n[e.idx[t]].decoded = !0;
                                const r = n[e.idx[t]].type;
                                if (2 == n[t].type)
                                    for (let e = 0; e < a; ++e) {
                                        const n = m[t][e];
                                        for (let e = 0; e < s; ++e) S[e] = i.getUint16(n + 2 * e * r, !0);
                                        for (let e = 0; e < s; ++e) i.setFloat32(n + 2 * e * r, Y(S[e]), !0)
                                    }
                            }
                        }(u, d, c, f, h, r);
                        for (let t = 0; t < c.length; ++t) {
                            const n = c[t];
                            if (!n.decoded) {
                                if (2 !== n.compression) throw new Error("EXRLoader.parse: unsupported channel compression");
                                {
                                    let o = 0,
                                        l = 0;
                                    for (let i = 0; i < e.lines; ++i) {
                                        let e = d[t][o];
                                        for (let t = 0; t < n.width; ++t) {
                                            for (let t = 0; t < 2 * n.type; ++t) r[e++] = p[l + t * n.width * n.height];
                                            l++
                                        }
                                        o++
                                    }
                                }
                            }
                        }
                        return new DataView(r.buffer)
                    }

                    function H(e, t) {
                        const n = new Uint8Array(e);
                        let r = 0;
                        for (; 0 != n[t.value + r];) r += 1;
                        const o = (new TextDecoder).decode(n.slice(t.value, t.value + r));
                        return t.value = t.value + r + 1, o
                    }

                    function T(e, t) {
                        const n = e.getInt32(t.value, !0);
                        return t.value = t.value + 4, n
                    }

                    function D(e, t) {
                        const n = e.getUint32(t.value, !0);
                        return t.value = t.value + 4, n
                    }

                    function B(e, t) {
                        const n = e[t.value];
                        return t.value = t.value + 1, n
                    }

                    function F(e, t) {
                        const n = e.getUint8(t.value);
                        return t.value = t.value + 1, n
                    }
                    const V = function(e, t) {
                        let n;
                        return n = "getBigInt64" in DataView.prototype ? Number(e.getBigInt64(t.value, !0)) : e.getUint32(t.value + 4, !0) + Number(e.getUint32(t.value, !0) << 32), t.value += 8, n
                    };

                    function W(e, t) {
                        const n = e.getFloat32(t.value, !0);
                        return t.value += 4, n
                    }

                    function X(e, t) {
                        return r.DataUtils.toHalfFloat(W(e, t))
                    }

                    function Y(e) {
                        const t = (31744 & e) >> 10,
                            n = 1023 & e;
                        return (e >> 15 ? -1 : 1) * (t ? 31 === t ? n ? NaN : 1 / 0 : Math.pow(2, t - 15) * (1 + n / 1024) : n / 1024 * 6103515625e-14)
                    }

                    function G(e, t) {
                        const n = e.getUint16(t.value, !0);
                        return t.value += 2, n
                    }

                    function Z(e, t) {
                        return Y(G(e, t))
                    }

                    function $(e, t, n, r, o) {
                        return "string" === r || "stringvector" === r || "iccProfile" === r ? function(e, t, n) {
                            const r = (new TextDecoder).decode(new Uint8Array(e).slice(t.value, t.value + n));
                            return t.value = t.value + n, r
                        }(t, n, o) : "chlist" === r ? function(e, t, n, r) {
                            const o = n.value,
                                l = [];
                            for (; n.value < o + r - 1;) {
                                const r = H(t, n),
                                    o = T(e, n),
                                    i = F(e, n);
                                n.value += 3;
                                const s = T(e, n),
                                    a = T(e, n);
                                l.push({
                                    name: r,
                                    pixelType: o,
                                    pLinear: i,
                                    xSampling: s,
                                    ySampling: a
                                })
                            }
                            return n.value += 1, l
                        }(e, t, n, o) : "chromaticities" === r ? function(e, t) {
                            return {
                                redX: W(e, t),
                                redY: W(e, t),
                                greenX: W(e, t),
                                greenY: W(e, t),
                                blueX: W(e, t),
                                blueY: W(e, t),
                                whiteX: W(e, t),
                                whiteY: W(e, t)
                            }
                        }(e, n) : "compression" === r ? function(e, t) {
                            return ["NO_COMPRESSION", "RLE_COMPRESSION", "ZIPS_COMPRESSION", "ZIP_COMPRESSION", "PIZ_COMPRESSION", "PXR24_COMPRESSION", "B44_COMPRESSION", "B44A_COMPRESSION", "DWAA_COMPRESSION", "DWAB_COMPRESSION"][F(e, t)]
                        }(e, n) : "box2i" === r ? function(e, t) {
                            return {
                                xMin: T(e, t),
                                yMin: T(e, t),
                                xMax: T(e, t),
                                yMax: T(e, t)
                            }
                        }(e, n) : "envmap" === r ? function(e, t) {
                            return ["ENVMAP_LATLONG", "ENVMAP_CUBE"][F(e, t)]
                        }(e, n) : "tiledesc" === r ? function(e, t) {
                            const n = D(e, t),
                                r = D(e, t),
                                o = F(e, t);
                            return {
                                xSize: n,
                                ySize: r,
                                levelMode: ["ONE_LEVEL", "MIPMAP_LEVELS", "RIPMAP_LEVELS"][15 & o],
                                roundingMode: ["ROUND_DOWN", "ROUND_UP"][o >> 4]
                            }
                        }(e, n) : "lineOrder" === r ? function(e, t) {
                            return ["INCREASING_Y", "DECREASING_Y", "RANDOM_Y"][F(e, t)]
                        }(e, n) : "float" === r ? W(e, n) : "v2f" === r ? function(e, t) {
                            return [W(e, t), W(e, t)]
                        }(e, n) : "v3f" === r ? function(e, t) {
                            return [W(e, t), W(e, t), W(e, t)]
                        }(e, n) : "int" === r ? T(e, n) : "rational" === r ? function(e, t) {
                            return [T(e, t), D(e, t)]
                        }(e, n) : "timecode" === r ? function(e, t) {
                            return [D(e, t), D(e, t)]
                        }(e, n) : "preview" === r ? (n.value += o, "skipped") : void(n.value += o)
                    }

                    function j(e, t, n, r) {
                        const o = new Array(e);
                        for (let l = 0; l < e; l++) {
                            const e = 1 << l;
                            let i = t / e | 0;
                            "ROUND_UP" == r && i * e < t && (i += 1);
                            const s = Math.max(i, 1);
                            o[l] = (s + n - 1) / n | 0
                        }
                        return o
                    }

                    function q() {
                        const e = this,
                            t = e.offset,
                            n = {
                                value: 0
                            };
                        for (let r = 0; r < e.tileCount; r++) {
                            const r = T(e.viewer, t),
                                o = T(e.viewer, t);
                            t.value += 8, e.size = D(e.viewer, t);
                            const l = r * e.blockWidth,
                                i = o * e.blockHeight;
                            e.columns = l + e.blockWidth > e.width ? e.width - l : e.blockWidth, e.lines = i + e.blockHeight > e.height ? e.height - i : e.blockHeight;
                            const s = e.columns * e.totalBytes,
                                a = e.size < e.lines * s ? e.uncompress(e) : P(e);
                            t.value += e.size;
                            for (let t = 0; t < e.lines; t++) {
                                const r = t * e.columns * e.totalBytes;
                                for (let o = 0; o < e.inputChannels.length; o++) {
                                    const s = te.channels[o].name,
                                        c = e.channelByteOffsets[s] * e.columns,
                                        u = e.decodeChannels[s];
                                    if (void 0 === u) continue;
                                    n.value = r + c;
                                    const f = (e.height - (1 + i + t)) * e.outLineWidth;
                                    for (let t = 0; t < e.columns; t++) {
                                        const r = f + (t + l) * e.outputChannels + u;
                                        e.byteArray[r] = e.getter(a, n)
                                    }
                                }
                            }
                        }
                    }

                    function J() {
                        const e = this,
                            t = e.offset,
                            n = {
                                value: 0
                            };
                        for (let r = 0; r < e.height / e.blockHeight; r++) {
                            const o = T(e.viewer, t) - te.dataWindow.yMin;
                            e.size = D(e.viewer, t), e.lines = o + e.blockHeight > e.height ? e.height - o : e.blockHeight;
                            const l = e.columns * e.totalBytes,
                                i = e.size < e.lines * l ? e.uncompress(e) : P(e);
                            t.value += e.size;
                            for (let t = 0; t < e.blockHeight; t++) {
                                const o = r * e.blockHeight,
                                    s = t + e.scanOrder(o);
                                if (s >= e.height) continue;
                                const a = t * l,
                                    c = (e.height - 1 - s) * e.outLineWidth;
                                for (let t = 0; t < e.inputChannels.length; t++) {
                                    const r = te.channels[t].name,
                                        o = e.channelByteOffsets[r] * e.columns,
                                        l = e.decodeChannels[r];
                                    if (void 0 !== l) {
                                        n.value = a + o;
                                        for (let t = 0; t < e.columns; t++) {
                                            const r = c + t * e.outputChannels + l;
                                            e.byteArray[r] = e.getter(i, n)
                                        }
                                    }
                                }
                            }
                        }
                    }
                    const K = {
                            value: 0
                        },
                        Q = new DataView(e),
                        ee = new Uint8Array(e),
                        te = function(e, t, n) {
                            const r = {};
                            if (20000630 != e.getUint32(0, !0)) throw new Error("THREE.EXRLoader: Provided file doesn't appear to be in OpenEXR format.");
                            r.version = e.getUint8(4);
                            const o = e.getUint8(5);
                            r.spec = {
                                singleTile: !!(2 & o),
                                longName: !!(4 & o),
                                deepFormat: !!(8 & o),
                                multiPart: !!(16 & o)
                            }, n.value = 8;
                            let i = !0;
                            for (; i;) {
                                const o = H(t, n);
                                if (0 == o) i = !1;
                                else {
                                    const i = H(t, n),
                                        s = $(e, t, n, i, D(e, n));
                                    void 0 === s ? l.warn(`THREE.EXRLoader: Skipped unknown header attribute type '${i}'.`) : r[o] = s
                                }
                            }
                            if (0 != (-7 & o)) throw l.error("THREE.EXRHeader:", r), new Error("THREE.EXRLoader: Provided file is currently unsupported.");
                            return r
                        }(Q, e, K),
                        ne = function(e, t, n, o, i) {
                            const s = {
                                size: 0,
                                viewer: t,
                                array: n,
                                offset: o,
                                width: e.dataWindow.xMax - e.dataWindow.xMin + 1,
                                height: e.dataWindow.yMax - e.dataWindow.yMin + 1,
                                inputChannels: e.channels,
                                channelByteOffsets: {},
                                scanOrder: null,
                                totalBytes: null,
                                columns: null,
                                lines: null,
                                type: null,
                                uncompress: null,
                                getter: null,
                                format: null,
                                colorSpace: r.LinearSRGBColorSpace
                            };
                            switch (e.compression) {
                                case "NO_COMPRESSION":
                                    s.blockHeight = 1, s.uncompress = P;
                                    break;
                                case "RLE_COMPRESSION":
                                    s.blockHeight = 1, s.uncompress = N;
                                    break;
                                case "ZIPS_COMPRESSION":
                                    s.blockHeight = 1, s.uncompress = x;
                                    break;
                                case "ZIP_COMPRESSION":
                                    s.blockHeight = 16, s.uncompress = x;
                                    break;
                                case "PIZ_COMPRESSION":
                                    s.blockHeight = 32, s.uncompress = L;
                                    break;
                                case "PXR24_COMPRESSION":
                                    s.blockHeight = 16, s.uncompress = z;
                                    break;
                                case "DWAA_COMPRESSION":
                                    s.blockHeight = 32, s.uncompress = _;
                                    break;
                                case "DWAB_COMPRESSION":
                                    s.blockHeight = 256, s.uncompress = _;
                                    break;
                                default:
                                    throw new Error("EXRLoader.parse: " + e.compression + " is unsupported")
                            }
                            const a = {};
                            for (const t of e.channels) switch (t.name) {
                                case "Y":
                                case "R":
                                case "G":
                                case "B":
                                case "A":
                                    a[t.name] = !0, s.type = t.pixelType
                            }
                            let c = !1;
                            if (a.R && a.G && a.B) c = !a.A, s.outputChannels = 4, s.decodeChannels = {
                                R: 0,
                                G: 1,
                                B: 2,
                                A: 3
                            };
                            else {
                                if (!a.Y) throw new Error("EXRLoader.parse: file contains unsupported data channels.");
                                s.outputChannels = 1, s.decodeChannels = {
                                    Y: 0
                                }
                            }
                            if (1 == s.type) switch (i) {
                                case r.FloatType:
                                    s.getter = Z;
                                    break;
                                case r.HalfFloatType:
                                    s.getter = G
                            } else {
                                if (2 != s.type) throw new Error("EXRLoader.parse: unsupported pixelType " + s.type + " for " + e.compression + ".");
                                switch (i) {
                                    case r.FloatType:
                                        s.getter = W;
                                        break;
                                    case r.HalfFloatType:
                                        s.getter = X
                                }
                            }
                            s.columns = s.width;
                            const u = s.width * s.height * s.outputChannels;
                            switch (i) {
                                case r.FloatType:
                                    s.byteArray = new Float32Array(u), c && s.byteArray.fill(1, 0, u);
                                    break;
                                case r.HalfFloatType:
                                    s.byteArray = new Uint16Array(u), c && s.byteArray.fill(15360, 0, u);
                                    break;
                                default:
                                    l.error("THREE.EXRLoader: unsupported type: ", i)
                            }
                            let f = 0;
                            for (const t of e.channels) void 0 !== s.decodeChannels[t.name] && (s.channelByteOffsets[t.name] = f), f += 2 * t.pixelType;
                            if (s.totalBytes = f, s.outLineWidth = s.width * s.outputChannels, "INCREASING_Y" === e.lineOrder ? s.scanOrder = e => e : s.scanOrder = e => s.height - 1 - e, 4 == s.outputChannels ? (s.format = r.RGBAFormat, s.colorSpace = r.LinearSRGBColorSpace) : (s.format = r.RedFormat, s.colorSpace = r.NoColorSpace), e.spec.singleTile) {
                                s.blockHeight = e.tiles.ySize, s.blockWidth = e.tiles.xSize;
                                const n = function(e, t, n) {
                                        let r = 0;
                                        switch (e.levelMode) {
                                            case "ONE_LEVEL":
                                                r = 1;
                                                break;
                                            case "MIPMAP_LEVELS":
                                                r = function(e, t) {
                                                    const n = Math.log2(e);
                                                    return "ROUND_DOWN" == t ? Math.floor(n) : Math.ceil(n)
                                                }(Math.max(t, n), e.roundingMode) + 1;
                                                break;
                                            case "RIPMAP_LEVELS":
                                                throw new Error("THREE.EXRLoader: RIPMAP_LEVELS tiles currently unsupported.")
                                        }
                                        return r
                                    }(e.tiles, s.width, s.height),
                                    r = j(n, s.width, e.tiles.xSize, e.tiles.roundingMode),
                                    l = j(n, s.height, e.tiles.ySize, e.tiles.roundingMode);
                                s.tileCount = r[0] * l[0];
                                for (let e = 0; e < n; e++)
                                    for (let n = 0; n < l[e]; n++)
                                        for (let n = 0; n < r[e]; n++) V(t, o);
                                s.decode = q.bind(s)
                            } else {
                                s.blockWidth = s.width;
                                const e = Math.ceil(s.height / s.blockHeight);
                                for (let n = 0; n < e; n++) V(t, o);
                                s.decode = J.bind(s)
                            }
                            return s
                        }(te, Q, ee, K, this.type);
                    return ne.decode(), {
                        header: te,
                        width: ne.width,
                        height: ne.height,
                        data: ne.byteArray,
                        format: ne.format,
                        colorSpace: ne.colorSpace,
                        type: this.type
                    }
                }
                setDataType(e) {
                    return this.type = e, this
                }
                load(e, t, n, o) {
                    return super.load(e, (function(e, n) {
                        e.colorSpace = n.colorSpace, e.minFilter = r.LinearFilter, e.magFilter = r.LinearFilter, e.generateMipmaps = !1, e.flipY = !1, t && t(e, n)
                    }), n, o)
                }
            }
        }
    }
]);