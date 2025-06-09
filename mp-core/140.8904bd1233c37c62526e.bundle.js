"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [140], {
        40140: (e, t, r) => {
            r.d(t, {
                $1: () => i,
                Vs: () => s
            });
            var n = r(99477),
                o = r(25108);

            function i(e, t = 1e-4) {
                t = Math.max(t, Number.EPSILON);
                const r = {},
                    o = e.getIndex(),
                    i = e.getAttribute("position"),
                    s = o ? o.count : i.count;
                let u = 0;
                const a = Object.keys(e.attributes),
                    l = {},
                    f = {},
                    c = [],
                    g = ["getX", "getY", "getZ", "getW"],
                    m = ["setX", "setY", "setZ", "setW"];
                for (let t = 0, r = a.length; t < r; t++) {
                    const r = a[t],
                        o = e.attributes[r];
                    l[r] = new n.BufferAttribute(new o.array.constructor(o.count * o.itemSize), o.itemSize, o.normalized);
                    const i = e.morphAttributes[r];
                    i && (f[r] = new n.BufferAttribute(new i.array.constructor(i.count * i.itemSize), i.itemSize, i.normalized))
                }
                const d = .5 * t,
                    h = Math.log10(1 / t),
                    p = Math.pow(10, h),
                    b = d * p;
                for (let t = 0; t < s; t++) {
                    const n = o ? o.getX(t) : t;
                    let i = "";
                    for (let t = 0, r = a.length; t < r; t++) {
                        const r = a[t],
                            o = e.getAttribute(r),
                            s = o.itemSize;
                        for (let e = 0; e < s; e++) i += ~~(o[g[e]](n) * p + b) + ","
                    }
                    if (i in r) c.push(r[i]);
                    else {
                        for (let t = 0, r = a.length; t < r; t++) {
                            const r = a[t],
                                o = e.getAttribute(r),
                                i = e.morphAttributes[r],
                                s = o.itemSize,
                                c = l[r],
                                d = f[r];
                            for (let e = 0; e < s; e++) {
                                const t = g[e],
                                    r = m[e];
                                if (c[r](u, o[t](n)), i)
                                    for (let e = 0, o = i.length; e < o; e++) d[e][r](u, i[e][t](n))
                            }
                        }
                        r[i] = u, c.push(u), u++
                    }
                }
                const w = e.clone();
                for (const t in e.attributes) {
                    const e = l[t];
                    if (w.setAttribute(t, new n.BufferAttribute(e.array.slice(0, u * e.itemSize), e.itemSize, e.normalized)), t in f)
                        for (let e = 0; e < f[t].length; e++) {
                            const r = f[t][e];
                            w.morphAttributes[t][e] = new n.BufferAttribute(r.array.slice(0, u * r.itemSize), r.itemSize, r.normalized)
                        }
                }
                return w.setIndex(c), w
            }

            function s(e, t) {
                if (t === n.TrianglesDrawMode) return o.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."), e;
                if (t === n.TriangleFanDrawMode || t === n.TriangleStripDrawMode) {
                    let r = e.getIndex();
                    if (null === r) {
                        const t = [],
                            n = e.getAttribute("position");
                        if (void 0 === n) return o.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."), e;
                        for (let e = 0; e < n.count; e++) t.push(e);
                        e.setIndex(t), r = e.getIndex()
                    }
                    const i = r.count - 2,
                        s = [];
                    if (t === n.TriangleFanDrawMode)
                        for (let e = 1; e <= i; e++) s.push(r.getX(0)), s.push(r.getX(e)), s.push(r.getX(e + 1));
                    else
                        for (let e = 0; e < i; e++) e % 2 == 0 ? (s.push(r.getX(e)), s.push(r.getX(e + 1)), s.push(r.getX(e + 2))) : (s.push(r.getX(e + 2)), s.push(r.getX(e + 1)), s.push(r.getX(e)));
                    s.length / 3 !== i && o.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
                    const u = e.clone();
                    return u.setIndex(s), u.clearGroups(), u
                }
                return o.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:", t), e
            }
        }
    }
]);