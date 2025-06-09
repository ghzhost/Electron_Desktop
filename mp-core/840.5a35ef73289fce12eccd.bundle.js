/*! For license information please see 840.5a35ef73289fce12eccd.bundle.js.LICENSE.txt */
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [840], {
        50840: (t, e, i) => {
            var n;
            ! function(s, r, o, a) {
                "use strict";
                var h, u = ["", "webkit", "Moz", "MS", "ms", "o"],
                    c = r.createElement("div"),
                    l = Math.round,
                    p = Math.abs,
                    f = Date.now;

                function v(t, e, i) {
                    return setTimeout(I(t, i), e)
                }

                function d(t, e, i) {
                    return !!Array.isArray(t) && (m(t, i[e], i), !0)
                }

                function m(t, e, i) {
                    var n;
                    if (t)
                        if (t.forEach) t.forEach(e, i);
                        else if (t.length !== a)
                        for (n = 0; n < t.length;) e.call(i, t[n], n, t), n++;
                    else
                        for (n in t) t.hasOwnProperty(n) && e.call(i, t[n], n, t)
                }

                function g(t, e, i) {
                    var n = "DEPRECATED METHOD: " + e + "\n" + i + " AT \n";
                    return function() {
                        var e = new Error("get-stack-trace"),
                            i = e && e.stack ? e.stack.replace(/^[^\(]+?[\n$]/gm, "").replace(/^\s+at\s+/gm, "").replace(/^Object.<anonymous>\s*\(/gm, "{anonymous}()@") : "Unknown Stack Trace",
                            r = s.console && (s.console.warn || s.console.log);
                        return r && r.call(s.console, n, i), t.apply(this, arguments)
                    }
                }
                h = "function" != typeof Object.assign ? function(t) {
                    if (t === a || null === t) throw new TypeError("Cannot convert undefined or null to object");
                    for (var e = Object(t), i = 1; i < arguments.length; i++) {
                        var n = arguments[i];
                        if (n !== a && null !== n)
                            for (var s in n) n.hasOwnProperty(s) && (e[s] = n[s])
                    }
                    return e
                } : Object.assign;
                var T = g((function(t, e, i) {
                        for (var n = Object.keys(e), s = 0; s < n.length;)(!i || i && t[n[s]] === a) && (t[n[s]] = e[n[s]]), s++;
                        return t
                    }), "extend", "Use `assign`."),
                    y = g((function(t, e) {
                        return T(t, e, !0)
                    }), "merge", "Use `assign`.");

                function E(t, e, i) {
                    var n, s = e.prototype;
                    (n = t.prototype = Object.create(s)).constructor = t, n._super = s, i && h(n, i)
                }

                function I(t, e) {
                    return function() {
                        return t.apply(e, arguments)
                    }
                }

                function A(t, e) {
                    return "function" == typeof t ? t.apply(e && e[0] || a, e) : t
                }

                function C(t, e) {
                    return t === a ? e : t
                }

                function b(t, e, i) {
                    m(D(e), (function(e) {
                        t.addEventListener(e, i, !1)
                    }))
                }

                function _(t, e, i) {
                    m(D(e), (function(e) {
                        t.removeEventListener(e, i, !1)
                    }))
                }

                function S(t, e) {
                    for (; t;) {
                        if (t == e) return !0;
                        t = t.parentNode
                    }
                    return !1
                }

                function P(t, e) {
                    return t.indexOf(e) > -1
                }

                function D(t) {
                    return t.trim().split(/\s+/g)
                }

                function w(t, e, i) {
                    if (t.indexOf && !i) return t.indexOf(e);
                    for (var n = 0; n < t.length;) {
                        if (i && t[n][i] == e || !i && t[n] === e) return n;
                        n++
                    }
                    return -1
                }

                function x(t) {
                    return Array.prototype.slice.call(t, 0)
                }

                function O(t, e, i) {
                    for (var n = [], s = [], r = 0; r < t.length;) {
                        var o = e ? t[r][e] : t[r];
                        w(s, o) < 0 && n.push(t[r]), s[r] = o, r++
                    }
                    return i && (n = e ? n.sort((function(t, i) {
                        return t[e] > i[e]
                    })) : n.sort()), n
                }

                function R(t, e) {
                    for (var i, n, s = e[0].toUpperCase() + e.slice(1), r = 0; r < u.length;) {
                        if ((n = (i = u[r]) ? i + s : e) in t) return n;
                        r++
                    }
                    return a
                }
                var M = 1;

                function z(t) {
                    var e = t.ownerDocument || t;
                    return e.defaultView || e.parentWindow || s
                }
                var N = "ontouchstart" in s,
                    X = R(s, "PointerEvent") !== a,
                    Y = N && /mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),
                    F = "touch",
                    k = "mouse",
                    W = ["x", "y"],
                    q = ["clientX", "clientY"];

                function L(t, e) {
                    var i = this;
                    this.manager = t, this.callback = e, this.element = t.element, this.target = t.options.inputTarget, this.domHandler = function(e) {
                        A(t.options.enable, [t]) && i.handler(e)
                    }, this.init()
                }

                function H(t, e, i) {
                    var n = i.pointers.length,
                        s = i.changedPointers.length,
                        r = 1 & e && n - s == 0,
                        o = 12 & e && n - s == 0;
                    i.isFirst = !!r, i.isFinal = !!o, r && (t.session = {}), i.eventType = e,
                        function(t, e) {
                            var i = t.session,
                                n = e.pointers,
                                s = n.length;
                            i.firstInput || (i.firstInput = U(e)), s > 1 && !i.firstMultiple ? i.firstMultiple = U(e) : 1 === s && (i.firstMultiple = !1);
                            var r = i.firstInput,
                                o = i.firstMultiple,
                                h = o ? o.center : r.center,
                                u = e.center = V(n);
                            e.timeStamp = f(), e.deltaTime = e.timeStamp - r.timeStamp, e.angle = B(h, u), e.distance = Z(h, u),
                                function(t, e) {
                                    var i = e.center,
                                        n = t.offsetDelta || {},
                                        s = t.prevDelta || {},
                                        r = t.prevInput || {};
                                    1 !== e.eventType && 4 !== r.eventType || (s = t.prevDelta = {
                                        x: r.deltaX || 0,
                                        y: r.deltaY || 0
                                    }, n = t.offsetDelta = {
                                        x: i.x,
                                        y: i.y
                                    }), e.deltaX = s.x + (i.x - n.x), e.deltaY = s.y + (i.y - n.y)
                                }(i, e), e.offsetDirection = G(e.deltaX, e.deltaY);
                            var c, l, v = j(e.deltaTime, e.deltaX, e.deltaY);
                            e.overallVelocityX = v.x, e.overallVelocityY = v.y, e.overallVelocity = p(v.x) > p(v.y) ? v.x : v.y, e.scale = o ? (c = o.pointers, Z((l = n)[0], l[1], q) / Z(c[0], c[1], q)) : 1, e.rotation = o ? function(t, e) {
                                    return B(e[1], e[0], q) + B(t[1], t[0], q)
                                }(o.pointers, n) : 0, e.maxPointers = i.prevInput ? e.pointers.length > i.prevInput.maxPointers ? e.pointers.length : i.prevInput.maxPointers : e.pointers.length,
                                function(t, e) {
                                    var i, n, s, r, o = t.lastInterval || e,
                                        h = e.timeStamp - o.timeStamp;
                                    if (8 != e.eventType && (h > 25 || o.velocity === a)) {
                                        var u = e.deltaX - o.deltaX,
                                            c = e.deltaY - o.deltaY,
                                            l = j(h, u, c);
                                        n = l.x, s = l.y, i = p(l.x) > p(l.y) ? l.x : l.y, r = G(u, c), t.lastInterval = e
                                    } else i = o.velocity, n = o.velocityX, s = o.velocityY, r = o.direction;
                                    e.velocity = i, e.velocityX = n, e.velocityY = s, e.direction = r
                                }(i, e);
                            var d = t.element;
                            S(e.srcEvent.target, d) && (d = e.srcEvent.target), e.target = d
                        }(t, i), t.emit("hammer.input", i), t.recognize(i), t.session.prevInput = i
                }

                function U(t) {
                    for (var e = [], i = 0; i < t.pointers.length;) e[i] = {
                        clientX: l(t.pointers[i].clientX),
                        clientY: l(t.pointers[i].clientY)
                    }, i++;
                    return {
                        timeStamp: f(),
                        pointers: e,
                        center: V(e),
                        deltaX: t.deltaX,
                        deltaY: t.deltaY
                    }
                }

                function V(t) {
                    var e = t.length;
                    if (1 === e) return {
                        x: l(t[0].clientX),
                        y: l(t[0].clientY)
                    };
                    for (var i = 0, n = 0, s = 0; s < e;) i += t[s].clientX, n += t[s].clientY, s++;
                    return {
                        x: l(i / e),
                        y: l(n / e)
                    }
                }

                function j(t, e, i) {
                    return {
                        x: e / t || 0,
                        y: i / t || 0
                    }
                }

                function G(t, e) {
                    return t === e ? 1 : p(t) >= p(e) ? t < 0 ? 2 : 4 : e < 0 ? 8 : 16
                }

                function Z(t, e, i) {
                    i || (i = W);
                    var n = e[i[0]] - t[i[0]],
                        s = e[i[1]] - t[i[1]];
                    return Math.sqrt(n * n + s * s)
                }

                function B(t, e, i) {
                    i || (i = W);
                    var n = e[i[0]] - t[i[0]],
                        s = e[i[1]] - t[i[1]];
                    return 180 * Math.atan2(s, n) / Math.PI
                }
                L.prototype = {
                    handler: function() {},
                    init: function() {
                        this.evEl && b(this.element, this.evEl, this.domHandler), this.evTarget && b(this.target, this.evTarget, this.domHandler), this.evWin && b(z(this.element), this.evWin, this.domHandler)
                    },
                    destroy: function() {
                        this.evEl && _(this.element, this.evEl, this.domHandler), this.evTarget && _(this.target, this.evTarget, this.domHandler), this.evWin && _(z(this.element), this.evWin, this.domHandler)
                    }
                };
                var $ = {
                        mousedown: 1,
                        mousemove: 2,
                        mouseup: 4
                    },
                    J = "mousedown",
                    K = "mousemove mouseup";

                function Q() {
                    this.evEl = J, this.evWin = K, this.pressed = !1, L.apply(this, arguments)
                }
                E(Q, L, {
                    handler: function(t) {
                        var e = $[t.type];
                        1 & e && 0 === t.button && (this.pressed = !0), 2 & e && 1 !== t.which && (e = 4), this.pressed && (4 & e && (this.pressed = !1), this.callback(this.manager, e, {
                            pointers: [t],
                            changedPointers: [t],
                            pointerType: k,
                            srcEvent: t
                        }))
                    }
                });
                var tt = {
                        pointerdown: 1,
                        pointermove: 2,
                        pointerup: 4,
                        pointercancel: 8,
                        pointerout: 8
                    },
                    et = {
                        2: F,
                        3: "pen",
                        4: k,
                        5: "kinect"
                    },
                    it = "pointerdown",
                    nt = "pointermove pointerup pointercancel";

                function st() {
                    this.evEl = it, this.evWin = nt, L.apply(this, arguments), this.store = this.manager.session.pointerEvents = []
                }
                s.MSPointerEvent && !s.PointerEvent && (it = "MSPointerDown", nt = "MSPointerMove MSPointerUp MSPointerCancel"), E(st, L, {
                    handler: function(t) {
                        var e = this.store,
                            i = !1,
                            n = t.type.toLowerCase().replace("ms", ""),
                            s = tt[n],
                            r = et[t.pointerType] || t.pointerType,
                            o = r == F,
                            a = w(e, t.pointerId, "pointerId");
                        1 & s && (0 === t.button || o) ? a < 0 && (e.push(t), a = e.length - 1) : 12 & s && (i = !0), a < 0 || (e[a] = t, this.callback(this.manager, s, {
                            pointers: e,
                            changedPointers: [t],
                            pointerType: r,
                            srcEvent: t
                        }), i && e.splice(a, 1))
                    }
                });
                var rt = {
                        touchstart: 1,
                        touchmove: 2,
                        touchend: 4,
                        touchcancel: 8
                    },
                    ot = "touchstart",
                    at = "touchstart touchmove touchend touchcancel";

                function ht() {
                    this.evTarget = ot, this.evWin = at, this.started = !1, L.apply(this, arguments)
                }

                function ut(t, e) {
                    var i = x(t.touches),
                        n = x(t.changedTouches);
                    return 12 & e && (i = O(i.concat(n), "identifier", !0)), [i, n]
                }
                E(ht, L, {
                    handler: function(t) {
                        var e = rt[t.type];
                        if (1 === e && (this.started = !0), this.started) {
                            var i = ut.call(this, t, e);
                            12 & e && i[0].length - i[1].length == 0 && (this.started = !1), this.callback(this.manager, e, {
                                pointers: i[0],
                                changedPointers: i[1],
                                pointerType: F,
                                srcEvent: t
                            })
                        }
                    }
                });
                var ct = {
                        touchstart: 1,
                        touchmove: 2,
                        touchend: 4,
                        touchcancel: 8
                    },
                    lt = "touchstart touchmove touchend touchcancel";

                function pt() {
                    this.evTarget = lt, this.targetIds = {}, L.apply(this, arguments)
                }

                function ft(t, e) {
                    var i = x(t.touches),
                        n = this.targetIds;
                    if (3 & e && 1 === i.length) return n[i[0].identifier] = !0, [i, i];
                    var s, r, o = x(t.changedTouches),
                        a = [],
                        h = this.target;
                    if (r = i.filter((function(t) {
                            return S(t.target, h)
                        })), 1 === e)
                        for (s = 0; s < r.length;) n[r[s].identifier] = !0, s++;
                    for (s = 0; s < o.length;) n[o[s].identifier] && a.push(o[s]), 12 & e && delete n[o[s].identifier], s++;
                    return a.length ? [O(r.concat(a), "identifier", !0), a] : void 0
                }

                function vt() {
                    L.apply(this, arguments);
                    var t = I(this.handler, this);
                    this.touch = new pt(this.manager, t), this.mouse = new Q(this.manager, t), this.primaryTouch = null, this.lastTouches = []
                }

                function dt(t, e) {
                    1 & t ? (this.primaryTouch = e.changedPointers[0].identifier, mt.call(this, e)) : 12 & t && mt.call(this, e)
                }

                function mt(t) {
                    var e = t.changedPointers[0];
                    if (e.identifier === this.primaryTouch) {
                        var i = {
                            x: e.clientX,
                            y: e.clientY
                        };
                        this.lastTouches.push(i);
                        var n = this.lastTouches;
                        setTimeout((function() {
                            var t = n.indexOf(i);
                            t > -1 && n.splice(t, 1)
                        }), 2500)
                    }
                }

                function gt(t) {
                    for (var e = t.srcEvent.clientX, i = t.srcEvent.clientY, n = 0; n < this.lastTouches.length; n++) {
                        var s = this.lastTouches[n],
                            r = Math.abs(e - s.x),
                            o = Math.abs(i - s.y);
                        if (r <= 25 && o <= 25) return !0
                    }
                    return !1
                }
                E(pt, L, {
                    handler: function(t) {
                        var e = ct[t.type],
                            i = ft.call(this, t, e);
                        i && this.callback(this.manager, e, {
                            pointers: i[0],
                            changedPointers: i[1],
                            pointerType: F,
                            srcEvent: t
                        })
                    }
                }), E(vt, L, {
                    handler: function(t, e, i) {
                        var n = i.pointerType == F,
                            s = i.pointerType == k;
                        if (!(s && i.sourceCapabilities && i.sourceCapabilities.firesTouchEvents)) {
                            if (n) dt.call(this, e, i);
                            else if (s && gt.call(this, i)) return;
                            this.callback(t, e, i)
                        }
                    },
                    destroy: function() {
                        this.touch.destroy(), this.mouse.destroy()
                    }
                });
                var Tt = R(c.style, "touchAction"),
                    yt = Tt !== a,
                    Et = "compute",
                    It = "auto",
                    At = "manipulation",
                    Ct = "none",
                    bt = "pan-x",
                    _t = "pan-y",
                    St = function() {
                        if (!yt) return !1;
                        var t = {},
                            e = s.CSS && s.CSS.supports;
                        return ["auto", "manipulation", "pan-y", "pan-x", "pan-x pan-y", "none"].forEach((function(i) {
                            t[i] = !e || s.CSS.supports("touch-action", i)
                        })), t
                    }();

                function Pt(t, e) {
                    this.manager = t, this.set(e)
                }
                Pt.prototype = {
                    set: function(t) {
                        t == Et && (t = this.compute()), yt && this.manager.element.style && St[t] && (this.manager.element.style[Tt] = t), this.actions = t.toLowerCase().trim()
                    },
                    update: function() {
                        this.set(this.manager.options.touchAction)
                    },
                    compute: function() {
                        var t = [];
                        return m(this.manager.recognizers, (function(e) {
                                A(e.options.enable, [e]) && (t = t.concat(e.getTouchAction()))
                            })),
                            function(t) {
                                if (P(t, Ct)) return Ct;
                                var e = P(t, bt),
                                    i = P(t, _t);
                                return e && i ? Ct : e || i ? e ? bt : _t : P(t, At) ? At : It
                            }(t.join(" "))
                    },
                    preventDefaults: function(t) {
                        var e = t.srcEvent,
                            i = t.offsetDirection;
                        if (this.manager.session.prevented) e.preventDefault();
                        else {
                            var n = this.actions,
                                s = P(n, Ct) && !St.none,
                                r = P(n, _t) && !St["pan-y"],
                                o = P(n, bt) && !St["pan-x"];
                            if (s) {
                                var a = 1 === t.pointers.length,
                                    h = t.distance < 2,
                                    u = t.deltaTime < 250;
                                if (a && h && u) return
                            }
                            if (!o || !r) return s || r && 6 & i || o && 24 & i ? this.preventSrc(e) : void 0
                        }
                    },
                    preventSrc: function(t) {
                        this.manager.session.prevented = !0, t.preventDefault()
                    }
                };
                var Dt = 32;

                function wt(t) {
                    this.options = h({}, this.defaults, t || {}), this.id = M++, this.manager = null, this.options.enable = C(this.options.enable, !0), this.state = 1, this.simultaneous = {}, this.requireFail = []
                }

                function xt(t) {
                    return 16 & t ? "cancel" : 8 & t ? "end" : 4 & t ? "move" : 2 & t ? "start" : ""
                }

                function Ot(t) {
                    return 16 == t ? "down" : 8 == t ? "up" : 2 == t ? "left" : 4 == t ? "right" : ""
                }

                function Rt(t, e) {
                    var i = e.manager;
                    return i ? i.get(t) : t
                }

                function Mt() {
                    wt.apply(this, arguments)
                }

                function zt() {
                    Mt.apply(this, arguments), this.pX = null, this.pY = null
                }

                function Nt() {
                    Mt.apply(this, arguments)
                }

                function Xt() {
                    wt.apply(this, arguments), this._timer = null, this._input = null
                }

                function Yt() {
                    Mt.apply(this, arguments)
                }

                function Ft() {
                    Mt.apply(this, arguments)
                }

                function kt() {
                    wt.apply(this, arguments), this.pTime = !1, this.pCenter = !1, this._timer = null, this._input = null, this.count = 0
                }

                function Wt(t, e) {
                    return (e = e || {}).recognizers = C(e.recognizers, Wt.defaults.preset), new qt(t, e)
                }

                function qt(t, e) {
                    this.options = h({}, Wt.defaults, e || {}), this.options.inputTarget = this.options.inputTarget || t, this.handlers = {}, this.session = {}, this.recognizers = [], this.oldCssProps = {}, this.element = t, this.input = new(this.options.inputClass || (X ? st : Y ? pt : N ? vt : Q))(this, H), this.touchAction = new Pt(this, this.options.touchAction), Lt(this, !0), m(this.options.recognizers, (function(t) {
                        var e = this.add(new t[0](t[1]));
                        t[2] && e.recognizeWith(t[2]), t[3] && e.requireFailure(t[3])
                    }), this)
                }

                function Lt(t, e) {
                    var i, n = t.element;
                    n.style && (m(t.options.cssProps, (function(s, r) {
                        i = R(n.style, r), e ? (t.oldCssProps[i] = n.style[i], n.style[i] = s) : n.style[i] = t.oldCssProps[i] || ""
                    })), e || (t.oldCssProps = {}))
                }
                wt.prototype = {
                    defaults: {},
                    set: function(t) {
                        return h(this.options, t), this.manager && this.manager.touchAction.update(), this
                    },
                    recognizeWith: function(t) {
                        if (d(t, "recognizeWith", this)) return this;
                        var e = this.simultaneous;
                        return e[(t = Rt(t, this)).id] || (e[t.id] = t, t.recognizeWith(this)), this
                    },
                    dropRecognizeWith: function(t) {
                        return d(t, "dropRecognizeWith", this) || (t = Rt(t, this), delete this.simultaneous[t.id]), this
                    },
                    requireFailure: function(t) {
                        if (d(t, "requireFailure", this)) return this;
                        var e = this.requireFail;
                        return -1 === w(e, t = Rt(t, this)) && (e.push(t), t.requireFailure(this)), this
                    },
                    dropRequireFailure: function(t) {
                        if (d(t, "dropRequireFailure", this)) return this;
                        t = Rt(t, this);
                        var e = w(this.requireFail, t);
                        return e > -1 && this.requireFail.splice(e, 1), this
                    },
                    hasRequireFailures: function() {
                        return this.requireFail.length > 0
                    },
                    canRecognizeWith: function(t) {
                        return !!this.simultaneous[t.id]
                    },
                    emit: function(t) {
                        var e = this,
                            i = this.state;

                        function n(i) {
                            e.manager.emit(i, t)
                        }
                        i < 8 && n(e.options.event + xt(i)), n(e.options.event), t.additionalEvent && n(t.additionalEvent), i >= 8 && n(e.options.event + xt(i))
                    },
                    tryEmit: function(t) {
                        if (this.canEmit()) return this.emit(t);
                        this.state = Dt
                    },
                    canEmit: function() {
                        for (var t = 0; t < this.requireFail.length;) {
                            if (!(33 & this.requireFail[t].state)) return !1;
                            t++
                        }
                        return !0
                    },
                    recognize: function(t) {
                        var e = h({}, t);
                        if (!A(this.options.enable, [this, e])) return this.reset(), void(this.state = Dt);
                        56 & this.state && (this.state = 1), this.state = this.process(e), 30 & this.state && this.tryEmit(e)
                    },
                    process: function(t) {},
                    getTouchAction: function() {},
                    reset: function() {}
                }, E(Mt, wt, {
                    defaults: {
                        pointers: 1
                    },
                    attrTest: function(t) {
                        var e = this.options.pointers;
                        return 0 === e || t.pointers.length === e
                    },
                    process: function(t) {
                        var e = this.state,
                            i = t.eventType,
                            n = 6 & e,
                            s = this.attrTest(t);
                        return n && (8 & i || !s) ? 16 | e : n || s ? 4 & i ? 8 | e : 2 & e ? 4 | e : 2 : Dt
                    }
                }), E(zt, Mt, {
                    defaults: {
                        event: "pan",
                        threshold: 10,
                        pointers: 1,
                        direction: 30
                    },
                    getTouchAction: function() {
                        var t = this.options.direction,
                            e = [];
                        return 6 & t && e.push(_t), 24 & t && e.push(bt), e
                    },
                    directionTest: function(t) {
                        var e = this.options,
                            i = !0,
                            n = t.distance,
                            s = t.direction,
                            r = t.deltaX,
                            o = t.deltaY;
                        return s & e.direction || (6 & e.direction ? (s = 0 === r ? 1 : r < 0 ? 2 : 4, i = r != this.pX, n = Math.abs(t.deltaX)) : (s = 0 === o ? 1 : o < 0 ? 8 : 16, i = o != this.pY, n = Math.abs(t.deltaY))), t.direction = s, i && n > e.threshold && s & e.direction
                    },
                    attrTest: function(t) {
                        return Mt.prototype.attrTest.call(this, t) && (2 & this.state || !(2 & this.state) && this.directionTest(t))
                    },
                    emit: function(t) {
                        this.pX = t.deltaX, this.pY = t.deltaY;
                        var e = Ot(t.direction);
                        e && (t.additionalEvent = this.options.event + e), this._super.emit.call(this, t)
                    }
                }), E(Nt, Mt, {
                    defaults: {
                        event: "pinch",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [Ct]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.scale - 1) > this.options.threshold || 2 & this.state)
                    },
                    emit: function(t) {
                        if (1 !== t.scale) {
                            var e = t.scale < 1 ? "in" : "out";
                            t.additionalEvent = this.options.event + e
                        }
                        this._super.emit.call(this, t)
                    }
                }), E(Xt, wt, {
                    defaults: {
                        event: "press",
                        pointers: 1,
                        time: 251,
                        threshold: 9
                    },
                    getTouchAction: function() {
                        return [It]
                    },
                    process: function(t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            n = t.distance < e.threshold,
                            s = t.deltaTime > e.time;
                        if (this._input = t, !n || !i || 12 & t.eventType && !s) this.reset();
                        else if (1 & t.eventType) this.reset(), this._timer = v((function() {
                            this.state = 8, this.tryEmit()
                        }), e.time, this);
                        else if (4 & t.eventType) return 8;
                        return Dt
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function(t) {
                        8 === this.state && (t && 4 & t.eventType ? this.manager.emit(this.options.event + "up", t) : (this._input.timeStamp = f(), this.manager.emit(this.options.event, this._input)))
                    }
                }), E(Yt, Mt, {
                    defaults: {
                        event: "rotate",
                        threshold: 0,
                        pointers: 2
                    },
                    getTouchAction: function() {
                        return [Ct]
                    },
                    attrTest: function(t) {
                        return this._super.attrTest.call(this, t) && (Math.abs(t.rotation) > this.options.threshold || 2 & this.state)
                    }
                }), E(Ft, Mt, {
                    defaults: {
                        event: "swipe",
                        threshold: 10,
                        velocity: .3,
                        direction: 30,
                        pointers: 1
                    },
                    getTouchAction: function() {
                        return zt.prototype.getTouchAction.call(this)
                    },
                    attrTest: function(t) {
                        var e, i = this.options.direction;
                        return 30 & i ? e = t.overallVelocity : 6 & i ? e = t.overallVelocityX : 24 & i && (e = t.overallVelocityY), this._super.attrTest.call(this, t) && i & t.offsetDirection && t.distance > this.options.threshold && t.maxPointers == this.options.pointers && p(e) > this.options.velocity && 4 & t.eventType
                    },
                    emit: function(t) {
                        var e = Ot(t.offsetDirection);
                        e && this.manager.emit(this.options.event + e, t), this.manager.emit(this.options.event, t)
                    }
                }), E(kt, wt, {
                    defaults: {
                        event: "tap",
                        pointers: 1,
                        taps: 1,
                        interval: 300,
                        time: 250,
                        threshold: 9,
                        posThreshold: 10
                    },
                    getTouchAction: function() {
                        return [At]
                    },
                    process: function(t) {
                        var e = this.options,
                            i = t.pointers.length === e.pointers,
                            n = t.distance < e.threshold,
                            s = t.deltaTime < e.time;
                        if (this.reset(), 1 & t.eventType && 0 === this.count) return this.failTimeout();
                        if (n && s && i) {
                            if (4 != t.eventType) return this.failTimeout();
                            var r = !this.pTime || t.timeStamp - this.pTime < e.interval,
                                o = !this.pCenter || Z(this.pCenter, t.center) < e.posThreshold;
                            if (this.pTime = t.timeStamp, this.pCenter = t.center, o && r ? this.count += 1 : this.count = 1, this._input = t, 0 == this.count % e.taps) return this.hasRequireFailures() ? (this._timer = v((function() {
                                this.state = 8, this.tryEmit()
                            }), e.interval, this), 2) : 8
                        }
                        return Dt
                    },
                    failTimeout: function() {
                        return this._timer = v((function() {
                            this.state = Dt
                        }), this.options.interval, this), Dt
                    },
                    reset: function() {
                        clearTimeout(this._timer)
                    },
                    emit: function() {
                        8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
                    }
                }), Wt.VERSION = "2.0.7", Wt.defaults = {
                    domEvents: !1,
                    touchAction: Et,
                    enable: !0,
                    inputTarget: null,
                    inputClass: null,
                    preset: [
                        [Yt, {
                            enable: !1
                        }],
                        [Nt, {
                                enable: !1
                            },
                            ["rotate"]
                        ],
                        [Ft, {
                            direction: 6
                        }],
                        [zt, {
                                direction: 6
                            },
                            ["swipe"]
                        ],
                        [kt],
                        [kt, {
                                event: "doubletap",
                                taps: 2
                            },
                            ["tap"]
                        ],
                        [Xt]
                    ],
                    cssProps: {
                        userSelect: "none",
                        touchSelect: "none",
                        touchCallout: "none",
                        contentZooming: "none",
                        userDrag: "none",
                        tapHighlightColor: "rgba(0,0,0,0)"
                    }
                }, qt.prototype = {
                    set: function(t) {
                        return h(this.options, t), t.touchAction && this.touchAction.update(), t.inputTarget && (this.input.destroy(), this.input.target = t.inputTarget, this.input.init()), this
                    },
                    stop: function(t) {
                        this.session.stopped = t ? 2 : 1
                    },
                    recognize: function(t) {
                        var e = this.session;
                        if (!e.stopped) {
                            var i;
                            this.touchAction.preventDefaults(t);
                            var n = this.recognizers,
                                s = e.curRecognizer;
                            (!s || s && 8 & s.state) && (s = e.curRecognizer = null);
                            for (var r = 0; r < n.length;) i = n[r], 2 === e.stopped || s && i != s && !i.canRecognizeWith(s) ? i.reset() : i.recognize(t), !s && 14 & i.state && (s = e.curRecognizer = i), r++
                        }
                    },
                    get: function(t) {
                        if (t instanceof wt) return t;
                        for (var e = this.recognizers, i = 0; i < e.length; i++)
                            if (e[i].options.event == t) return e[i];
                        return null
                    },
                    add: function(t) {
                        if (d(t, "add", this)) return this;
                        var e = this.get(t.options.event);
                        return e && this.remove(e), this.recognizers.push(t), t.manager = this, this.touchAction.update(), t
                    },
                    remove: function(t) {
                        if (d(t, "remove", this)) return this;
                        if (t = this.get(t)) {
                            var e = this.recognizers,
                                i = w(e, t); - 1 !== i && (e.splice(i, 1), this.touchAction.update())
                        }
                        return this
                    },
                    on: function(t, e) {
                        if (t !== a && e !== a) {
                            var i = this.handlers;
                            return m(D(t), (function(t) {
                                i[t] = i[t] || [], i[t].push(e)
                            })), this
                        }
                    },
                    off: function(t, e) {
                        if (t !== a) {
                            var i = this.handlers;
                            return m(D(t), (function(t) {
                                e ? i[t] && i[t].splice(w(i[t], e), 1) : delete i[t]
                            })), this
                        }
                    },
                    emit: function(t, e) {
                        this.options.domEvents && function(t, e) {
                            var i = r.createEvent("Event");
                            i.initEvent(t, !0, !0), i.gesture = e, e.target.dispatchEvent(i)
                        }(t, e);
                        var i = this.handlers[t] && this.handlers[t].slice();
                        if (i && i.length) {
                            e.type = t, e.preventDefault = function() {
                                e.srcEvent.preventDefault()
                            };
                            for (var n = 0; n < i.length;) i[n](e), n++
                        }
                    },
                    destroy: function() {
                        this.element && Lt(this, !1), this.handlers = {}, this.session = {}, this.input.destroy(), this.element = null
                    }
                }, h(Wt, {
                    INPUT_START: 1,
                    INPUT_MOVE: 2,
                    INPUT_END: 4,
                    INPUT_CANCEL: 8,
                    STATE_POSSIBLE: 1,
                    STATE_BEGAN: 2,
                    STATE_CHANGED: 4,
                    STATE_ENDED: 8,
                    STATE_RECOGNIZED: 8,
                    STATE_CANCELLED: 16,
                    STATE_FAILED: Dt,
                    DIRECTION_NONE: 1,
                    DIRECTION_LEFT: 2,
                    DIRECTION_RIGHT: 4,
                    DIRECTION_UP: 8,
                    DIRECTION_DOWN: 16,
                    DIRECTION_HORIZONTAL: 6,
                    DIRECTION_VERTICAL: 24,
                    DIRECTION_ALL: 30,
                    Manager: qt,
                    Input: L,
                    TouchAction: Pt,
                    TouchInput: pt,
                    MouseInput: Q,
                    PointerEventInput: st,
                    TouchMouseInput: vt,
                    SingleTouchInput: ht,
                    Recognizer: wt,
                    AttrRecognizer: Mt,
                    Tap: kt,
                    Pan: zt,
                    Swipe: Ft,
                    Pinch: Nt,
                    Rotate: Yt,
                    Press: Xt,
                    on: b,
                    off: _,
                    each: m,
                    merge: y,
                    extend: T,
                    assign: h,
                    inherit: E,
                    bindFn: I,
                    prefixed: R
                }), (void 0 !== s ? s : "undefined" != typeof self ? self : {}).Hammer = Wt, (n = function() {
                    return Wt
                }.call(e, i, e, t)) === a || (t.exports = n)
            }(window, document)
        }
    }
]);