"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [8250], {
        28250: (t, e, i) => {
            i.d(e, {
                ZP: () => g
            });
            var n, r = i(25108),
                s = Object.freeze({
                    Linear: Object.freeze({
                        None: function(t) {
                            return t
                        },
                        In: function(t) {
                            return this.None(t)
                        },
                        Out: function(t) {
                            return this.None(t)
                        },
                        InOut: function(t) {
                            return this.None(t)
                        }
                    }),
                    Quadratic: Object.freeze({
                        In: function(t) {
                            return t * t
                        },
                        Out: function(t) {
                            return t * (2 - t)
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
                        }
                    }),
                    Cubic: Object.freeze({
                        In: function(t) {
                            return t * t * t
                        },
                        Out: function(t) {
                            return --t * t * t + 1
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
                        }
                    }),
                    Quartic: Object.freeze({
                        In: function(t) {
                            return t * t * t * t
                        },
                        Out: function(t) {
                            return 1 - --t * t * t * t
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
                        }
                    }),
                    Quintic: Object.freeze({
                        In: function(t) {
                            return t * t * t * t * t
                        },
                        Out: function(t) {
                            return --t * t * t * t * t + 1
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
                        }
                    }),
                    Sinusoidal: Object.freeze({
                        In: function(t) {
                            return 1 - Math.sin((1 - t) * Math.PI / 2)
                        },
                        Out: function(t) {
                            return Math.sin(t * Math.PI / 2)
                        },
                        InOut: function(t) {
                            return .5 * (1 - Math.sin(Math.PI * (.5 - t)))
                        }
                    }),
                    Exponential: Object.freeze({
                        In: function(t) {
                            return 0 === t ? 0 : Math.pow(1024, t - 1)
                        },
                        Out: function(t) {
                            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
                        },
                        InOut: function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
                        }
                    }),
                    Circular: Object.freeze({
                        In: function(t) {
                            return 1 - Math.sqrt(1 - t * t)
                        },
                        Out: function(t) {
                            return Math.sqrt(1 - --t * t)
                        },
                        InOut: function(t) {
                            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
                        }
                    }),
                    Elastic: Object.freeze({
                        In: function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : -Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI)
                        },
                        Out: function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : Math.pow(2, -10 * t) * Math.sin(5 * (t - .1) * Math.PI) + 1
                        },
                        InOut: function(t) {
                            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? -.5 * Math.pow(2, 10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) : .5 * Math.pow(2, -10 * (t - 1)) * Math.sin(5 * (t - 1.1) * Math.PI) + 1
                        }
                    }),
                    Back: Object.freeze({
                        In: function(t) {
                            var e = 1.70158;
                            return 1 === t ? 1 : t * t * ((e + 1) * t - e)
                        },
                        Out: function(t) {
                            var e = 1.70158;
                            return 0 === t ? 0 : --t * t * ((e + 1) * t + e) + 1
                        },
                        InOut: function(t) {
                            var e = 2.5949095;
                            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
                        }
                    }),
                    Bounce: Object.freeze({
                        In: function(t) {
                            return 1 - s.Bounce.Out(1 - t)
                        },
                        Out: function(t) {
                            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
                        },
                        InOut: function(t) {
                            return t < .5 ? .5 * s.Bounce.In(2 * t) : .5 * s.Bounce.Out(2 * t - 1) + .5
                        }
                    }),
                    generatePow: function(t) {
                        return void 0 === t && (t = 4), t = (t = t < Number.EPSILON ? Number.EPSILON : t) > 1e4 ? 1e4 : t, {
                            In: function(e) {
                                return Math.pow(e, t)
                            },
                            Out: function(e) {
                                return 1 - Math.pow(1 - e, t)
                            },
                            InOut: function(e) {
                                return e < .5 ? Math.pow(2 * e, t) / 2 : (1 - Math.pow(2 - 2 * e, t)) / 2 + .5
                            }
                        }
                    }
                }),
                a = function() {
                    return performance.now()
                },
                o = function() {
                    function t() {
                        this._tweens = {}, this._tweensAddedDuringUpdate = {}
                    }
                    return t.prototype.getAll = function() {
                        var t = this;
                        return Object.keys(this._tweens).map((function(e) {
                            return t._tweens[e]
                        }))
                    }, t.prototype.removeAll = function() {
                        this._tweens = {}
                    }, t.prototype.add = function(t) {
                        this._tweens[t.getId()] = t, this._tweensAddedDuringUpdate[t.getId()] = t
                    }, t.prototype.remove = function(t) {
                        delete this._tweens[t.getId()], delete this._tweensAddedDuringUpdate[t.getId()]
                    }, t.prototype.update = function(t, e) {
                        void 0 === t && (t = a()), void 0 === e && (e = !1);
                        var i = Object.keys(this._tweens);
                        if (0 === i.length) return !1;
                        for (; i.length > 0;) {
                            this._tweensAddedDuringUpdate = {};
                            for (var n = 0; n < i.length; n++) {
                                var r = this._tweens[i[n]],
                                    s = !e;
                                r && !1 === r.update(t, s) && !e && delete this._tweens[i[n]]
                            }
                            i = Object.keys(this._tweensAddedDuringUpdate)
                        }
                        return !0
                    }, t
                }(),
                u = {
                    Linear: function(t, e) {
                        var i = t.length - 1,
                            n = i * e,
                            r = Math.floor(n),
                            s = u.Utils.Linear;
                        return e < 0 ? s(t[0], t[1], n) : e > 1 ? s(t[i], t[i - 1], i - n) : s(t[r], t[r + 1 > i ? i : r + 1], n - r)
                    },
                    Bezier: function(t, e) {
                        for (var i = 0, n = t.length - 1, r = Math.pow, s = u.Utils.Bernstein, a = 0; a <= n; a++) i += r(1 - e, n - a) * r(e, a) * t[a] * s(n, a);
                        return i
                    },
                    CatmullRom: function(t, e) {
                        var i = t.length - 1,
                            n = i * e,
                            r = Math.floor(n),
                            s = u.Utils.CatmullRom;
                        return t[0] === t[i] ? (e < 0 && (r = Math.floor(n = i * (1 + e))), s(t[(r - 1 + i) % i], t[r], t[(r + 1) % i], t[(r + 2) % i], n - r)) : e < 0 ? t[0] - (s(t[0], t[0], t[1], t[1], -n) - t[0]) : e > 1 ? t[i] - (s(t[i], t[i], t[i - 1], t[i - 1], n - i) - t[i]) : s(t[r ? r - 1 : 0], t[r], t[i < r + 1 ? i : r + 1], t[i < r + 2 ? i : r + 2], n - r)
                    },
                    Utils: {
                        Linear: function(t, e, i) {
                            return (e - t) * i + t
                        },
                        Bernstein: function(t, e) {
                            var i = u.Utils.Factorial;
                            return i(t) / i(e) / i(t - e)
                        },
                        Factorial: (n = [1], function(t) {
                            var e = 1;
                            if (n[t]) return n[t];
                            for (var i = t; i > 1; i--) e *= i;
                            return n[t] = e, e
                        }),
                        CatmullRom: function(t, e, i, n, r) {
                            var s = .5 * (i - t),
                                a = .5 * (n - e),
                                o = r * r;
                            return (2 * e - 2 * i + s + a) * (r * o) + (-3 * e + 3 * i - 2 * s - a) * o + s * r + e
                        }
                    }
                },
                h = function() {
                    function t() {}
                    return t.nextId = function() {
                        return t._nextId++
                    }, t._nextId = 0, t
                }(),
                p = new o,
                _ = function() {
                    function t(t, e) {
                        void 0 === e && (e = p), this._object = t, this._group = e, this._isPaused = !1, this._pauseStart = 0, this._valuesStart = {}, this._valuesEnd = {}, this._valuesStartRepeat = {}, this._duration = 1e3, this._isDynamic = !1, this._initialRepeat = 0, this._repeat = 0, this._yoyo = !1, this._isPlaying = !1, this._reversed = !1, this._delayTime = 0, this._startTime = 0, this._easingFunction = s.Linear.None, this._interpolationFunction = u.Linear, this._chainedTweens = [], this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._id = h.nextId(), this._isChainStopped = !1, this._propertiesAreSetUp = !1, this._goToEnd = !1
                    }
                    return t.prototype.getId = function() {
                        return this._id
                    }, t.prototype.isPlaying = function() {
                        return this._isPlaying
                    }, t.prototype.isPaused = function() {
                        return this._isPaused
                    }, t.prototype.to = function(t, e) {
                        if (void 0 === e && (e = 1e3), this._isPlaying) throw new Error("Can not call Tween.to() while Tween is already started or paused. Stop the Tween first.");
                        return this._valuesEnd = t, this._propertiesAreSetUp = !1, this._duration = e, this
                    }, t.prototype.duration = function(t) {
                        return void 0 === t && (t = 1e3), this._duration = t, this
                    }, t.prototype.dynamic = function(t) {
                        return void 0 === t && (t = !1), this._isDynamic = t, this
                    }, t.prototype.start = function(t, e) {
                        if (void 0 === t && (t = a()), void 0 === e && (e = !1), this._isPlaying) return this;
                        if (this._group && this._group.add(this), this._repeat = this._initialRepeat, this._reversed)
                            for (var i in this._reversed = !1, this._valuesStartRepeat) this._swapEndStartRepeatValues(i), this._valuesStart[i] = this._valuesStartRepeat[i];
                        if (this._isPlaying = !0, this._isPaused = !1, this._onStartCallbackFired = !1, this._onEveryStartCallbackFired = !1, this._isChainStopped = !1, this._startTime = t, this._startTime += this._delayTime, !this._propertiesAreSetUp || e) {
                            if (this._propertiesAreSetUp = !0, !this._isDynamic) {
                                var n = {};
                                for (var r in this._valuesEnd) n[r] = this._valuesEnd[r];
                                this._valuesEnd = n
                            }
                            this._setupProperties(this._object, this._valuesStart, this._valuesEnd, this._valuesStartRepeat, e)
                        }
                        return this
                    }, t.prototype.startFromCurrentValues = function(t) {
                        return this.start(t, !0)
                    }, t.prototype._setupProperties = function(t, e, i, n, s) {
                        for (var a in i) {
                            var o = t[a],
                                u = Array.isArray(o),
                                h = u ? "array" : typeof o,
                                p = !u && Array.isArray(i[a]);
                            if ("undefined" !== h && "function" !== h) {
                                if (p) {
                                    if (0 === (y = i[a]).length) continue;
                                    for (var _ = [o], l = 0, c = y.length; l < c; l += 1) {
                                        var d = this._handleRelativeValue(o, y[l]);
                                        if (isNaN(d)) {
                                            p = !1, r.warn("Found invalid interpolation list. Skipping.");
                                            break
                                        }
                                        _.push(d)
                                    }
                                    p && (i[a] = _)
                                }
                                if ("object" !== h && !u || !o || p)(void 0 === e[a] || s) && (e[a] = o), u || (e[a] *= 1), n[a] = p ? i[a].slice().reverse() : e[a] || 0;
                                else {
                                    e[a] = u ? [] : {};
                                    var f = o;
                                    for (var v in f) e[a][v] = f[v];
                                    n[a] = u ? [] : {};
                                    var y = i[a];
                                    if (!this._isDynamic) {
                                        var b = {};
                                        for (var v in y) b[v] = y[v];
                                        i[a] = y = b
                                    }
                                    this._setupProperties(f, e[a], y, n[a], s)
                                }
                            }
                        }
                    }, t.prototype.stop = function() {
                        return this._isChainStopped || (this._isChainStopped = !0, this.stopChainedTweens()), this._isPlaying ? (this._group && this._group.remove(this), this._isPlaying = !1, this._isPaused = !1, this._onStopCallback && this._onStopCallback(this._object), this) : this
                    }, t.prototype.end = function() {
                        return this._goToEnd = !0, this.update(1 / 0), this
                    }, t.prototype.pause = function(t) {
                        return void 0 === t && (t = a()), this._isPaused || !this._isPlaying || (this._isPaused = !0, this._pauseStart = t, this._group && this._group.remove(this)), this
                    }, t.prototype.resume = function(t) {
                        return void 0 === t && (t = a()), this._isPaused && this._isPlaying ? (this._isPaused = !1, this._startTime += t - this._pauseStart, this._pauseStart = 0, this._group && this._group.add(this), this) : this
                    }, t.prototype.stopChainedTweens = function() {
                        for (var t = 0, e = this._chainedTweens.length; t < e; t++) this._chainedTweens[t].stop();
                        return this
                    }, t.prototype.group = function(t) {
                        return void 0 === t && (t = p), this._group = t, this
                    }, t.prototype.delay = function(t) {
                        return void 0 === t && (t = 0), this._delayTime = t, this
                    }, t.prototype.repeat = function(t) {
                        return void 0 === t && (t = 0), this._initialRepeat = t, this._repeat = t, this
                    }, t.prototype.repeatDelay = function(t) {
                        return this._repeatDelayTime = t, this
                    }, t.prototype.yoyo = function(t) {
                        return void 0 === t && (t = !1), this._yoyo = t, this
                    }, t.prototype.easing = function(t) {
                        return void 0 === t && (t = s.Linear.None), this._easingFunction = t, this
                    }, t.prototype.interpolation = function(t) {
                        return void 0 === t && (t = u.Linear), this._interpolationFunction = t, this
                    }, t.prototype.chain = function() {
                        for (var t = [], e = 0; e < arguments.length; e++) t[e] = arguments[e];
                        return this._chainedTweens = t, this
                    }, t.prototype.onStart = function(t) {
                        return this._onStartCallback = t, this
                    }, t.prototype.onEveryStart = function(t) {
                        return this._onEveryStartCallback = t, this
                    }, t.prototype.onUpdate = function(t) {
                        return this._onUpdateCallback = t, this
                    }, t.prototype.onRepeat = function(t) {
                        return this._onRepeatCallback = t, this
                    }, t.prototype.onComplete = function(t) {
                        return this._onCompleteCallback = t, this
                    }, t.prototype.onStop = function(t) {
                        return this._onStopCallback = t, this
                    }, t.prototype.update = function(t, e) {
                        if (void 0 === t && (t = a()), void 0 === e && (e = !0), this._isPaused) return !0;
                        var i, n, r = this._startTime + this._duration;
                        if (!this._goToEnd && !this._isPlaying) {
                            if (t > r) return !1;
                            e && this.start(t, !0)
                        }
                        if (this._goToEnd = !1, t < this._startTime) return !0;
                        !1 === this._onStartCallbackFired && (this._onStartCallback && this._onStartCallback(this._object), this._onStartCallbackFired = !0), !1 === this._onEveryStartCallbackFired && (this._onEveryStartCallback && this._onEveryStartCallback(this._object), this._onEveryStartCallbackFired = !0), n = (t - this._startTime) / this._duration, n = 0 === this._duration || n > 1 ? 1 : n;
                        var s = this._easingFunction(n);
                        if (this._updateProperties(this._object, this._valuesStart, this._valuesEnd, s), this._onUpdateCallback && this._onUpdateCallback(this._object, n), 1 === n) {
                            if (this._repeat > 0) {
                                for (i in isFinite(this._repeat) && this._repeat--, this._valuesStartRepeat) this._yoyo || "string" != typeof this._valuesEnd[i] || (this._valuesStartRepeat[i] = this._valuesStartRepeat[i] + parseFloat(this._valuesEnd[i])), this._yoyo && this._swapEndStartRepeatValues(i), this._valuesStart[i] = this._valuesStartRepeat[i];
                                return this._yoyo && (this._reversed = !this._reversed), void 0 !== this._repeatDelayTime ? this._startTime = t + this._repeatDelayTime : this._startTime = t + this._delayTime, this._onRepeatCallback && this._onRepeatCallback(this._object), this._onEveryStartCallbackFired = !1, !0
                            }
                            this._onCompleteCallback && this._onCompleteCallback(this._object);
                            for (var o = 0, u = this._chainedTweens.length; o < u; o++) this._chainedTweens[o].start(this._startTime + this._duration, !1);
                            return this._isPlaying = !1, !1
                        }
                        return !0
                    }, t.prototype._updateProperties = function(t, e, i, n) {
                        for (var r in i)
                            if (void 0 !== e[r]) {
                                var s = e[r] || 0,
                                    a = i[r],
                                    o = Array.isArray(t[r]),
                                    u = Array.isArray(a);
                                !o && u ? t[r] = this._interpolationFunction(a, n) : "object" == typeof a && a ? this._updateProperties(t[r], s, a, n) : "number" == typeof(a = this._handleRelativeValue(s, a)) && (t[r] = s + (a - s) * n)
                            }
                    }, t.prototype._handleRelativeValue = function(t, e) {
                        return "string" != typeof e ? e : "+" === e.charAt(0) || "-" === e.charAt(0) ? t + parseFloat(e) : parseFloat(e)
                    }, t.prototype._swapEndStartRepeatValues = function(t) {
                        var e = this._valuesStartRepeat[t],
                            i = this._valuesEnd[t];
                        this._valuesStartRepeat[t] = "string" == typeof i ? this._valuesStartRepeat[t] + parseFloat(i) : this._valuesEnd[t], this._valuesEnd[t] = e
                    }, t
                }(),
                l = h.nextId,
                c = p,
                d = c.getAll.bind(c),
                f = c.removeAll.bind(c),
                v = c.add.bind(c),
                y = c.remove.bind(c),
                b = c.update.bind(c),
                g = {
                    Easing: s,
                    Group: o,
                    Interpolation: u,
                    now: a,
                    Sequence: h,
                    nextId: l,
                    Tween: _,
                    VERSION: "21.0.0",
                    getAll: d,
                    removeAll: f,
                    add: v,
                    remove: y,
                    update: b
                }
        }
    }
]);