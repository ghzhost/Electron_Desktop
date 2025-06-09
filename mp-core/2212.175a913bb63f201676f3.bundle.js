"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2212], {
        12212: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => m
            });
            var h = i(99477);
            class n extends EventTarget {
                manager = null;
                parent = null;
                children = [];
                x = 0;
                y = 0;
                width = 1024;
                height = 1024;
                hidden = !1;
                background = "transparent";
                borderRadius = 0;
                onLayout() {}
                onRender(t) {
                    if (this.background && "transparent" != this.background && !this.borderRadius) t.fillStyle = this.background || "black", t.fillRect(0, 0, this.width, this.height);
                    else if (this.background && "transparent" != this.background) {
                        let e = Math.min(this.borderRadius, this.width / 2, this.height / 2);
                        t.fillStyle = this.background || "black", n.drawRoundedRect(t, 0, 0, this.width, this.height, e)
                    }
                }
                add(t) {
                    if (t == this) throw new Error("Cannot add an element to itself.");
                    if (t.parent) throw new Error("This element already has a parent.");
                    this.children.push(t), t.parent = this
                }
                remove(t) {
                    if (t == this) throw new Error("Cannot remove an element from itself.");
                    if (t.parent != this) throw new Error("The provided element is not a child of this element.");
                    this.children = this.children.filter((e => e != t)), t.parent = null
                }
                removeFromParent() {
                    this.parent && this.parent.remove(this)
                }
                static drawRoundedRect(t, e, i, h, n, s) {
                    t.beginPath(), t.moveTo(e + s, i), t.lineTo(e + h - s, i), t.quadraticCurveTo(e + h, i, e + h, i + s), t.lineTo(e + h, i + n - s), t.quadraticCurveTo(e + h, i + n, e + h - s, i + n), t.lineTo(e + s, i + n), t.quadraticCurveTo(e, i + n, e, i + n - s), t.lineTo(e, i + s), t.quadraticCurveTo(e, i, e + s, i), t.closePath(), t.fill()
                }
            }
            class s extends n {
                onLayout() {
                    for (let t of this.children) t.x = 0, t.y = 0, t.width = this.width, t.height = this.height
                }
            }
            class r extends h.MeshBasicMaterial {
                canvas = null;
                canvasCtx = null;
                baseView = new s;
                imageCache = {};
                viewportSize = {
                    width: 1024,
                    height: 1024
                };
                static maxRedrawsPerFrame = 1;
                static redrawQueue = [];
                static frameCounter = 0;
                get isOnscreen() {
                    return Math.abs(r.frameCounter - this.lastFrameIndex) < 3
                }
                constructor(t) {
                    let e = document.createElement("canvas");
                    e.width = t.width || 1024, e.height = t.height || 1024, delete t.width, delete t.height;
                    let i = e.getContext("2d"),
                        n = new h.Texture(e);
                    n.colorSpace = THREE.SRGBColorSpace, n.minFilter = h.LinearFilter, n.magFilter = h.LinearFilter, n.generateMipmaps = !1, super({
                        side: THREE.DoubleSide,
                        map: n,
                        ...t
                    }), this.viewportSize = {
                        width: e.width,
                        height: e.height
                    }, this.canvas = e, this.canvasCtx = i, this.invalidate()
                }
                onBeforeRender(t, e, i, h, n, s) {
                    super.onBeforeRender(t, e, i, h, n, s), this.lastFrameIndex = r.frameCounter
                }
                render2D() {
                    this.canvasCtx.resetTransform(), this.canvasCtx.clearRect(0, 0, this.canvas.width, this.canvas.height), this.map && (this.map.needsUpdate = !0);
                    let t = this.canvas.width / this.viewportSize.width,
                        e = this.canvas.height / this.viewportSize.height;
                    this.canvasCtx.scale(t, e), this.baseView && (this.baseView.x = 0, this.baseView.y = 0, this.baseView.width = this.viewportSize.width, this.baseView.height = this.viewportSize.height, function t(e, i) {
                        e.manager = i;
                        for (let h of e.children) t(h, i)
                    }(this.baseView, this), this.drawView(this.baseView))
                }
                drawView(t) {
                    if (!t.hidden) {
                        this.canvasCtx.translate(t.x || 0, t.y || 0), t.manager = this, t.onLayout?.(), t.onRender?.(this.canvasCtx);
                        for (let e of t.children) this.drawView(e);
                        this.canvasCtx.translate(-(t.x || 0), -(t.y || 0))
                    }
                }
                invalidate() {
                    r.redrawQueue.includes(this) || r.redrawQueue.push(this)
                }
                static onRender() {
                    r.frameCounter += 1;
                    for (let t = 0; t < r.maxRedrawsPerFrame; t++) {
                        let t = r.nextItemToRender();
                        if (!t) break;
                        t.render2D()
                    }
                }
                static nextItemToRender() {
                    for (let t = 0; t < r.redrawQueue.length; t++) {
                        let e = r.redrawQueue[t];
                        if (e.isOnscreen) return r.redrawQueue.splice(t, 1), e
                    }
                }
                incomingClick(t, e, i) {
                    i && (t *= this.viewportSize.width, e *= this.viewportSize.height);
                    let h = this.hitTest(t, e);
                    if (!h) return;
                    let n = new Event("click");
                    n.targetView = h, n.viewX = t, n.viewY = e;
                    let s = h;
                    for (; s && (s.dispatchEvent?.(n), !n.defaultPrevented);) s = s.parent
                }
                hitTest(t, e) {
                    return function i(h, n, s) {
                        if (!(t < n || t > n + h.width || e < s || e > s + h.height)) {
                            for (let t of h.children) {
                                let e = i(t, n + t.x, s + t.y);
                                if (e) return e
                            }
                            return h
                        }
                    }(this.baseView, 0, 0)
                }
            }
            class a extends n {
                url = "";
                scaleMode = "stretch";
                onRender(t) {
                    if (super.onRender(t), this._lastURL !== this.url) {
                        if (this._lastURL = this.url, !this.url) return void(this._image = null);
                        this._image = new Image, this._image.crossOrigin = "anonymous", this._image.src = this.url, this._image.addEventListener("load", (() => this.manager?.invalidate()))
                    }
                    if (!this._image?.complete) return;
                    let e = 0,
                        i = 0,
                        h = this.width,
                        n = this.height,
                        s = this._image.width / this._image.height,
                        r = this.width / this.height;
                    "fill" == this.scaleMode ? (s > r ? (n = this.height, h = n * s) : (h = this.width, n = h / s), e = (this.width - h) / 2, i = (this.height - n) / 2) : "fit" == this.scaleMode && (s > r ? (h = this.width, n = h / s) : (n = this.height, h = n * s), e = (this.width - h) / 2, i = (this.height - n) / 2), t.drawImage(this._image, e, i, h, n)
                }
            }
            var l = new Map,
                o = new Map,
                d = new Map;

            function u(t, e, i, h) {
                var n, s;
                let r = o.get(i);
                if (h && void 0 !== r && r.count > 2e4) {
                    let h = d.get(i);
                    if (void 0 === h && (h = function(t, e) {
                            var i;
                            let h = new Map,
                                n = 0;
                            for (let e of "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890,.-+=?") {
                                let i = t.measureText(e).width;
                                h.set(e, i), n += i
                            }
                            let s = n / h.size,
                                r = (e / s + 3) / 4,
                                a = h.keys();
                            for (let t of a) h.set(t, (null != (i = h.get(t)) ? i : s) * r);
                            return h
                        }(t, r.size), d.set(i, h)), r.count > 5e5) {
                        let t = 0;
                        for (let i of e) t += null != (n = h.get(i)) ? n : r.size;
                        return 1.01 * t
                    }
                    let s = t.measureText(e);
                    return function(t, e, i, h, n) {
                        var s, r, a;
                        let l = 0,
                            o = {};
                        for (let e of t) l += null != (s = i.get(e)) ? s : n, o[e] = (null != (r = o[e]) ? r : 0) + 1;
                        let d = e - l;
                        for (let t of Object.keys(o)) {
                            let e = o[t],
                                s = null != (a = i.get(t)) ? a : n,
                                r = s + d * (s * e / l) * h / e;
                            i.set(t, r)
                        }
                    }(e, s.width, h, Math.max(.05, 1 - r.count / 2e5), r.size), o.set(i, {
                        count: r.count + e.length,
                        size: r.size
                    }), s.width
                }
                let a = t.measureText(e),
                    l = a.width / e.length;
                if ((null != (s = null == r ? void 0 : r.count) ? s : 0) > 2e4) return a.width;
                if (void 0 === r) o.set(i, {
                    count: e.length,
                    size: l
                });
                else {
                    let t = l - r.size,
                        h = e.length / (r.count + e.length),
                        n = r.size + t * h;
                    o.set(i, {
                        count: r.count + e.length,
                        size: n
                    })
                }
                return a.width
            }

            function c(t, e, i, h, n, s, r, a) {
                if (e.length <= 1) return e.length;
                if (n < i) return -1;
                let l = Math.floor(i / n * s),
                    o = u(t, e.slice(0, Math.max(0, l)), h, r),
                    d = null == a ? void 0 : a(e);
                if (o !== i)
                    if (o < i) {
                        for (; o < i;) l++, o = u(t, e.slice(0, Math.max(0, l)), h, r);
                        l--
                    } else
                        for (; o > i;) {
                            let i = void 0 !== d ? 0 : e.lastIndexOf(" ", l - 1);
                            i > 0 ? l = i : l--, o = u(t, e.slice(0, Math.max(0, l)), h, r)
                        }
                if (" " !== e[l]) {
                    let t = 0;
                    if (void 0 === d) t = e.lastIndexOf(" ", l);
                    else
                        for (let e of d) {
                            if (e > l) break;
                            t = e
                        }
                    t > 0 && (l = t)
                }
                return l
            }
            class g extends n {
                text = "";
                autoHeight = !0;
                font = "16px sans-serif";
                color = "#888888";
                lineHeight = 1.2;
                textAlign = "left";
                onLayout() {
                    if (!this.autoHeight) return;
                    let t = this.manager.canvasCtx;
                    t.font = this.font, t.textBaseline = "top", t.textAlign = "left";
                    let e = this.splitLines(t, this.text, this.width),
                        i = t.measureText("|"),
                        h = (i.actualBoundingBoxAscent + i.actualBoundingBoxDescent) * this.lineHeight,
                        n = e.length * h;
                    this.height != n && (this.height = n)
                }
                onRender(t) {
                    super.onRender(t), t.font = this.font, t.textBaseline = "top", t.textAlign = this.textAlign, t.fillStyle = this.color;
                    let e = t.measureText("|"),
                        i = (e.actualBoundingBoxAscent + e.actualBoundingBoxDescent) * this.lineHeight,
                        h = this.splitLines(t, this.text, this.width),
                        n = 0;
                    for (let e of h) {
                        let h = 0,
                            s = n;
                        "center" == this.textAlign ? h = Math.round(this.width / 2) : "right" == this.textAlign && (h = this.width), t.fillText(e, h, s), n += i
                    }
                }
                splitLines(t, e, i) {
                    return function(t, e, i, h, n, s) {
                        let r = `${e}_${i}_${h}px`,
                            a = l.get(r);
                        if (void 0 !== a) return a;
                        if (h <= 0) return [];
                        let d = [],
                            g = e.split("\n"),
                            f = o.get(i),
                            w = void 0 === f ? e.length : h / f.size * 1.5,
                            m = void 0 !== f && f.count > 2e4;
                        for (let e of g) {
                            let n = u(t, e.slice(0, Math.max(0, w)), i, m),
                                s = Math.min(e.length, w);
                            if (n <= h) d.push(e);
                            else {
                                for (; n > h;) {
                                    let r = c(t, e, h, i, n, s, m, undefined),
                                        a = e.slice(0, Math.max(0, r));
                                    e = e.slice(a.length), d.push(a), n = u(t, e.slice(0, Math.max(0, w)), i, m), s = Math.min(e.length, w)
                                }
                                n > 0 && d.push(e)
                            }
                        }
                        return d = d.map(((t, e) => 0 === e ? t.trimEnd() : t.trim())), l.set(r, d), l.size > 500 && l.delete(l.keys().next().value), d
                    }(t, e, t.font, i)
                }
            }
            class f extends n {
                onLayout() {
                    for (let t of this.children) t.onLayout?.();
                    for (let t of this.children) t.x = Math.round((this.width - t.width) / 2), t.y = Math.round((this.height - t.height) / 2)
                }
            }
            class w extends n {
                direction = "row";
                justify = "start";
                align = "stretch";
                onLayout() {
                    for (let t of this.children) t.onLayout?.();
                    let t = 0;
                    for (let e of this.children) "row" == this.direction ? t += e.width + (e.marginLeft || 0) + (e.marginRight || 0) : t += e.height + (e.marginTop || 0) + (e.marginBottom || 0);
                    let e = 0;
                    "center" == this.justify ? e = Math.max(0, Math.round(this.height / 2 - t / 2)) : "end" == this.justify && (e = Math.max(0, this.height - t));
                    for (let t of this.children) "row" == this.direction ? t.x = e + (t.marginLeft || 0) : t.y = e + (t.marginTop || 0), "start" == this.align ? "row" == this.direction ? t.y = t.marginTop || 0 : t.x = t.marginLeft || 0 : "center" == this.align ? "row" == this.direction ? t.y = Math.round((this.height - t.height) / 2) : t.x = Math.round((this.width - t.width) / 2) : "end" == this.align ? "row" == this.direction ? t.y = this.height - t.height - (t.marginBottom || 0) : t.x = this.width - t.width - (t.marginRight || 0) : "stretch" == this.align && ("row" == this.direction ? (t.y = t.marginTop || 0, t.height = this.height - (t.marginTop || 0) - (t.marginBottom || 0)) : (t.x = t.marginLeft || 0, t.width = this.width - (t.marginLeft || 0) - (t.marginRight || 0))), "row" == this.direction ? e += t.width + (t.marginLeft || 0) + (t.marginRight || 0) : e += t.height + (t.marginTop || 0) + (t.marginBottom || 0)
                }
            }
            class m {
                id = "core.ui";
                name = "User Interface";
                description = "Provide 2D UI elements in the metaverse.";
                version = "1.0.0";
                requires = ["entities"];
                provides = ["ui"];
                createMaterial(t) {
                    return new r(t)
                }
                createElement(t) {
                    return metapress.plugins.call("ui_createElement", t)
                }
                $ui_createElement(t) {
                    return "box" == t ? new n : "image" == t ? new a : "text" == t ? new g : "center-layout" == t ? new f : "stretch-layout" == t ? new s : "flex-layout" == t ? new w : void 0
                }
                $onRender() {
                    r.onRender()
                }
            }
        }
    }
]);