"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [8789], {
        68789: (t, e, n) => {
            n.d(e, {
                u: () => f
            });
            var s = n(99477);
            const i = new s.Vector3,
                r = new s.Line3,
                o = new s.Plane,
                a = new s.Vector3,
                l = new s.Triangle;
            class h {
                constructor() {
                    this.tolerance = -1, this.faces = [], this.newFaces = [], this.assigned = new p, this.unassigned = new p, this.vertices = []
                }
                setFromPoints(t) {
                    if (t.length >= 4) {
                        this.makeEmpty();
                        for (let e = 0, n = t.length; e < n; e++) this.vertices.push(new d(t[e]));
                        this.compute()
                    }
                    return this
                }
                setFromObject(t) {
                    const e = [];
                    return t.updateMatrixWorld(!0), t.traverse((function(t) {
                        const n = t.geometry;
                        if (void 0 !== n) {
                            const i = n.attributes.position;
                            if (void 0 !== i)
                                for (let n = 0, r = i.count; n < r; n++) {
                                    const r = new s.Vector3;
                                    r.fromBufferAttribute(i, n).applyMatrix4(t.matrixWorld), e.push(r)
                                }
                        }
                    })), this.setFromPoints(e)
                }
                containsPoint(t) {
                    const e = this.faces;
                    for (let n = 0, s = e.length; n < s; n++)
                        if (e[n].distanceToPoint(t) > this.tolerance) return !1;
                    return !0
                }
                intersectRay(t, e) {
                    const n = this.faces;
                    let s = -1 / 0,
                        i = 1 / 0;
                    for (let e = 0, r = n.length; e < r; e++) {
                        const r = n[e],
                            o = r.distanceToPoint(t.origin),
                            a = r.normal.dot(t.direction);
                        if (o > 0 && a >= 0) return null;
                        const l = 0 !== a ? -o / a : 0;
                        if (!(l <= 0) && (a > 0 ? i = Math.min(l, i) : s = Math.max(l, s), s > i)) return null
                    }
                    return s !== -1 / 0 ? t.at(s, e) : t.at(i, e), e
                }
                intersectsRay(t) {
                    return null !== this.intersectRay(t, i)
                }
                makeEmpty() {
                    return this.faces = [], this.vertices = [], this
                }
                addVertexToFace(t, e) {
                    return t.face = e, null === e.outside ? this.assigned.append(t) : this.assigned.insertBefore(e.outside, t), e.outside = t, this
                }
                removeVertexFromFace(t, e) {
                    return t === e.outside && (null !== t.next && t.next.face === e ? e.outside = t.next : e.outside = null), this.assigned.remove(t), this
                }
                removeAllVerticesFromFace(t) {
                    if (null !== t.outside) {
                        const e = t.outside;
                        let n = t.outside;
                        for (; null !== n.next && n.next.face === t;) n = n.next;
                        return this.assigned.removeSubList(e, n), e.prev = n.next = null, t.outside = null, e
                    }
                }
                deleteFaceVertices(t, e) {
                    const n = this.removeAllVerticesFromFace(t);
                    if (void 0 !== n)
                        if (void 0 === e) this.unassigned.appendChain(n);
                        else {
                            let t = n;
                            do {
                                const n = t.next;
                                e.distanceToPoint(t.point) > this.tolerance ? this.addVertexToFace(t, e) : this.unassigned.append(t), t = n
                            } while (null !== t)
                        } return this
                }
                resolveUnassignedPoints(t) {
                    if (!1 === this.unassigned.isEmpty()) {
                        let e = this.unassigned.first();
                        do {
                            const n = e.next;
                            let s = this.tolerance,
                                i = null;
                            for (let n = 0; n < t.length; n++) {
                                const r = t[n];
                                if (0 === r.mark) {
                                    const t = r.distanceToPoint(e.point);
                                    if (t > s && (s = t, i = r), s > 1e3 * this.tolerance) break
                                }
                            }
                            null !== i && this.addVertexToFace(e, i), e = n
                        } while (null !== e)
                    }
                    return this
                }
                computeExtremes() {
                    const t = new s.Vector3,
                        e = new s.Vector3,
                        n = [],
                        i = [];
                    for (let t = 0; t < 3; t++) n[t] = i[t] = this.vertices[0];
                    t.copy(this.vertices[0].point), e.copy(this.vertices[0].point);
                    for (let s = 0, r = this.vertices.length; s < r; s++) {
                        const r = this.vertices[s],
                            o = r.point;
                        for (let e = 0; e < 3; e++) o.getComponent(e) < t.getComponent(e) && (t.setComponent(e, o.getComponent(e)), n[e] = r);
                        for (let t = 0; t < 3; t++) o.getComponent(t) > e.getComponent(t) && (e.setComponent(t, o.getComponent(t)), i[t] = r)
                    }
                    return this.tolerance = 3 * Number.EPSILON * (Math.max(Math.abs(t.x), Math.abs(e.x)) + Math.max(Math.abs(t.y), Math.abs(e.y)) + Math.max(Math.abs(t.z), Math.abs(e.z))), {
                        min: n,
                        max: i
                    }
                }
                computeInitialHull() {
                    const t = this.vertices,
                        e = this.computeExtremes(),
                        n = e.min,
                        s = e.max;
                    let i = 0,
                        l = 0;
                    for (let t = 0; t < 3; t++) {
                        const e = s[t].point.getComponent(t) - n[t].point.getComponent(t);
                        e > i && (i = e, l = t)
                    }
                    const h = n[l],
                        u = s[l];
                    let d, p;
                    i = 0, r.set(h.point, u.point);
                    for (let e = 0, n = this.vertices.length; e < n; e++) {
                        const n = t[e];
                        if (n !== h && n !== u) {
                            r.closestPointToPoint(n.point, !0, a);
                            const t = a.distanceToSquared(n.point);
                            t > i && (i = t, d = n)
                        }
                    }
                    i = -1, o.setFromCoplanarPoints(h.point, u.point, d.point);
                    for (let e = 0, n = this.vertices.length; e < n; e++) {
                        const n = t[e];
                        if (n !== h && n !== u && n !== d) {
                            const t = Math.abs(o.distanceToPoint(n.point));
                            t > i && (i = t, p = n)
                        }
                    }
                    const f = [];
                    if (o.distanceToPoint(p.point) < 0) {
                        f.push(c.create(h, u, d), c.create(p, u, h), c.create(p, d, u), c.create(p, h, d));
                        for (let t = 0; t < 3; t++) {
                            const e = (t + 1) % 3;
                            f[t + 1].getEdge(2).setTwin(f[0].getEdge(e)), f[t + 1].getEdge(1).setTwin(f[e + 1].getEdge(0))
                        }
                    } else {
                        f.push(c.create(h, d, u), c.create(p, h, u), c.create(p, u, d), c.create(p, d, h));
                        for (let t = 0; t < 3; t++) {
                            const e = (t + 1) % 3;
                            f[t + 1].getEdge(2).setTwin(f[0].getEdge((3 - t) % 3)), f[t + 1].getEdge(0).setTwin(f[e + 1].getEdge(1))
                        }
                    }
                    for (let t = 0; t < 4; t++) this.faces.push(f[t]);
                    for (let e = 0, n = t.length; e < n; e++) {
                        const n = t[e];
                        if (n !== h && n !== u && n !== d && n !== p) {
                            i = this.tolerance;
                            let t = null;
                            for (let e = 0; e < 4; e++) {
                                const s = this.faces[e].distanceToPoint(n.point);
                                s > i && (i = s, t = this.faces[e])
                            }
                            null !== t && this.addVertexToFace(n, t)
                        }
                    }
                    return this
                }
                reindexFaces() {
                    const t = [];
                    for (let e = 0; e < this.faces.length; e++) {
                        const n = this.faces[e];
                        0 === n.mark && t.push(n)
                    }
                    return this.faces = t, this
                }
                nextVertexToAdd() {
                    if (!1 === this.assigned.isEmpty()) {
                        let t, e = 0;
                        const n = this.assigned.first().face;
                        let s = n.outside;
                        do {
                            const i = n.distanceToPoint(s.point);
                            i > e && (e = i, t = s), s = s.next
                        } while (null !== s && s.face === n);
                        return t
                    }
                }
                computeHorizon(t, e, n, s) {
                    let i;
                    this.deleteFaceVertices(n), n.mark = 1, i = null === e ? e = n.getEdge(0) : e.next;
                    do {
                        const e = i.twin,
                            n = e.face;
                        0 === n.mark && (n.distanceToPoint(t) > this.tolerance ? this.computeHorizon(t, e, n, s) : s.push(i)), i = i.next
                    } while (i !== e);
                    return this
                }
                addAdjoiningFace(t, e) {
                    const n = c.create(t, e.tail(), e.head());
                    return this.faces.push(n), n.getEdge(-1).setTwin(e.twin), n.getEdge(0)
                }
                addNewFaces(t, e) {
                    this.newFaces = [];
                    let n = null,
                        s = null;
                    for (let i = 0; i < e.length; i++) {
                        const r = e[i],
                            o = this.addAdjoiningFace(t, r);
                        null === n ? n = o : o.next.setTwin(s), this.newFaces.push(o.face), s = o
                    }
                    return n.next.setTwin(s), this
                }
                addVertexToHull(t) {
                    const e = [];
                    return this.unassigned.clear(), this.removeVertexFromFace(t, t.face), this.computeHorizon(t.point, null, t.face, e), this.addNewFaces(t, e), this.resolveUnassignedPoints(this.newFaces), this
                }
                cleanup() {
                    return this.assigned.clear(), this.unassigned.clear(), this.newFaces = [], this
                }
                compute() {
                    let t;
                    for (this.computeInitialHull(); void 0 !== (t = this.nextVertexToAdd());) this.addVertexToHull(t);
                    return this.reindexFaces(), this.cleanup(), this
                }
            }
            class c {
                constructor() {
                    this.normal = new s.Vector3, this.midpoint = new s.Vector3, this.area = 0, this.constant = 0, this.outside = null, this.mark = 0, this.edge = null
                }
                static create(t, e, n) {
                    const s = new c,
                        i = new u(t, s),
                        r = new u(e, s),
                        o = new u(n, s);
                    return i.next = o.prev = r, r.next = i.prev = o, o.next = r.prev = i, s.edge = i, s.compute()
                }
                getEdge(t) {
                    let e = this.edge;
                    for (; t > 0;) e = e.next, t--;
                    for (; t < 0;) e = e.prev, t++;
                    return e
                }
                compute() {
                    const t = this.edge.tail(),
                        e = this.edge.head(),
                        n = this.edge.next.head();
                    return l.set(t.point, e.point, n.point), l.getNormal(this.normal), l.getMidpoint(this.midpoint), this.area = l.getArea(), this.constant = this.normal.dot(this.midpoint), this
                }
                distanceToPoint(t) {
                    return this.normal.dot(t) - this.constant
                }
            }
            class u {
                constructor(t, e) {
                    this.vertex = t, this.prev = null, this.next = null, this.twin = null, this.face = e
                }
                head() {
                    return this.vertex
                }
                tail() {
                    return this.prev ? this.prev.vertex : null
                }
                length() {
                    const t = this.head(),
                        e = this.tail();
                    return null !== e ? e.point.distanceTo(t.point) : -1
                }
                lengthSquared() {
                    const t = this.head(),
                        e = this.tail();
                    return null !== e ? e.point.distanceToSquared(t.point) : -1
                }
                setTwin(t) {
                    return this.twin = t, t.twin = this, this
                }
            }
            class d {
                constructor(t) {
                    this.point = t, this.prev = null, this.next = null, this.face = null
                }
            }
            class p {
                constructor() {
                    this.head = null, this.tail = null
                }
                first() {
                    return this.head
                }
                last() {
                    return this.tail
                }
                clear() {
                    return this.head = this.tail = null, this
                }
                insertBefore(t, e) {
                    return e.prev = t.prev, e.next = t, null === e.prev ? this.head = e : e.prev.next = e, t.prev = e, this
                }
                insertAfter(t, e) {
                    return e.prev = t, e.next = t.next, null === e.next ? this.tail = e : e.next.prev = e, t.next = e, this
                }
                append(t) {
                    return null === this.head ? this.head = t : this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t, this
                }
                appendChain(t) {
                    for (null === this.head ? this.head = t : this.tail.next = t, t.prev = this.tail; null !== t.next;) t = t.next;
                    return this.tail = t, this
                }
                remove(t) {
                    return null === t.prev ? this.head = t.next : t.prev.next = t.next, null === t.next ? this.tail = t.prev : t.next.prev = t.prev, this
                }
                removeSubList(t, e) {
                    return null === t.prev ? this.head = e.next : t.prev.next = e.next, null === e.next ? this.tail = t.prev : e.next.prev = t.prev, this
                }
                isEmpty() {
                    return null === this.head
                }
            }
            class f extends s.BufferGeometry {
                constructor(t = []) {
                    super();
                    const e = [],
                        n = [],
                        i = (new h).setFromPoints(t).faces;
                    for (let t = 0; t < i.length; t++) {
                        const s = i[t];
                        let r = s.edge;
                        do {
                            const t = r.head().point;
                            e.push(t.x, t.y, t.z), n.push(s.normal.x, s.normal.y, s.normal.z), r = r.next
                        } while (r !== s.edge)
                    }
                    this.setAttribute("position", new s.Float32BufferAttribute(e, 3)), this.setAttribute("normal", new s.Float32BufferAttribute(n, 3))
                }
            }
        }
    }
]);