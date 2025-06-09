"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [3170], {
        83170: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => d
            });
            var i = r(28250),
                s = r(99477),
                n = r(62371);
            class a {
                name = "UI: Anchor to Screen";
                hidden = !0;
                entity = null;
                renderer = null;
                onLoad() {
                    if (!this.renderer.object?.isObject3D) throw new Error(`Cannot anchor a entity of type '${this.entity.type}'`)
                }
                beforeRender() {
                    if (metapress.renderer.camera.updateMatrixWorld(!0), this.v3a || (this.v3a = new THREE.Vector3), "top-left" == this.entity.anchorTo) {
                        let e = (this.entity.anchorOffsetX || 0) / metapress.renderer.canvasRect.width - 1,
                            t = 1 - (this.entity.anchorOffsetY || 0) / metapress.renderer.canvasRect.height;
                        this.v3a.set(e, t, 0)
                    } else if ("center-left" == this.entity.anchorTo) {
                        let e = (this.entity.anchorOffsetX || 0) / metapress.renderer.canvasRect.width - 1,
                            t = 0 - (this.entity.anchorOffsetY || 0) / metapress.renderer.canvasRect.height;
                        this.v3a.set(e, t, 0)
                    } else this.v3a.set(0, 0, 0);
                    this.v3a.unproject(metapress.renderer.camera), this.renderer.container.position.copy(this.v3a), this.renderer.container.quaternion.copy(metapress.renderer.camera.quaternion)
                }
            }
            var o = r(25108);
            class h {
                timers = [];
                lastTimerID = 1e4;
                constructor() {
                    this.fallbackTimer = setInterval(this.doFallbackIteration.bind(this), 250), this._originalSetImmediate = window.setImmediate, this._originalSetTimeout = window.setTimeout, this._originalSetInterval = window.setInterval, this._originalClearTimeout = window.clearTimeout, this._originalClearInterval = window.clearInterval, window.setTimeout = this.setTimeout.bind(this), window.setInterval = this.setInterval.bind(this), window.clearTimeout = this.clearTimeout.bind(this), window.clearInterval = this.clearInterval.bind(this)
                }
                setTimeout(e, t) {
                    let r = this.lastTimerID++;
                    return this.timers.push({
                        func: e,
                        interval: t,
                        lastRun: performance.now(),
                        id: r,
                        once: !0
                    }), r
                }
                setInterval(e, t) {
                    let r = this.lastTimerID++;
                    return this.timers.push({
                        func: e,
                        interval: t,
                        lastRun: performance.now(),
                        id: r,
                        once: !1
                    }), r
                }
                setImmediate(e) {
                    this.setTimeout(e, 0)
                }
                clearTimeout(e) {
                    for (let t = 0; t < this.timers.length; t++)
                        if (this.timers[t].id == e) return void this.timers.splice(t, 1);
                    this._originalClearTimeout.call(window, e)
                }
                clearInterval(e) {
                    for (let t = 0; t < this.timers.length; t++)
                        if (this.timers[t].id == e) return void this.timers.splice(t, 1);
                    this._originalClearInterval.call(window, e)
                }
                runIteration() {
                    let e = 0,
                        t = performance.now();
                    for (let r = 0; r < this.timers.length; r++) {
                        let i = this.timers[r];
                        if (!(t - i.lastRun < i.interval)) {
                            try {
                                e += 1, i.lastRun = t, i.func()
                            } catch (e) {
                                o.error(e)
                            }
                            if (i.once) {
                                let e = r;
                                i !== this.timers[r] && (e = this.timers.findIndex((e => e === i))), -1 != e && this.timers.splice(e, 1)
                            }
                        }
                    }
                    return this.lastIterationTime = t, e
                }
                doFallbackIteration() {
                    performance.now() - this.lastIterationTime < 200 || this.runIteration()
                }
            }
            class l {
                minDuration = 0;
                avgDuration = 0;
                maxDuration = 0;
                count = 0;
                _lastConsolidation = 0;
                _numRuns = 0;
                _currentMin = 0;
                _currentMax = 0;
                _currentTotal = 0;
                start() {
                    this.startedAt = performance.now()
                }
                end() {
                    let e = performance.now(),
                        t = e - this.startedAt;
                    this._currentMax = Math.max(this._currentMax, t), this._currentMin = 0 == this._numRuns ? t : Math.min(this._currentMin, t), this._currentTotal += t, this._numRuns += 1, e - this._lastConsolidation < 1e3 || (this.minDuration = this._currentMin || this.minDuration, this.avgDuration = this._currentTotal / this._numRuns || this.avgDuration, this.maxDuration = this._currentMax || this.maxDuration, this.count = this._numRuns, this._currentMax = 0, this._currentMin = 0, this._currentTotal = 0, this._numRuns = 0, this._lastConsolidation = e)
                }
                get text() {
                    return `min=${this.minDuration.toFixed(1)}ms, avg=${this.avgDuration.toFixed(1)}ms, max=${this.maxDuration.toFixed(1)}ms`
                }
            }
            var m = r(25108);
            s.ColorManagement.enabled = !0;
            class d {
                id = "core.render.world";
                name = "World Renderer";
                description = "Renders the 3D environment.";
                version = "1.0.0";
                provides = ["renderer", "modifier:anchor"];
                requires = [];
                scene = new s.Scene;
                camera = new s.PerspectiveCamera(75, window.innerWidth / window.innerHeight, .1, 500);
                glrenderer = new s.WebGLRenderer({
                    powerPreference: "high-performance",
                    antialias: !0,
                    stencil: !1,
                    depth: !1
                });
                get canvas() {
                    return this.glrenderer.domElement
                }
                canvasRect = null;
                composer = null;
                antialias = new n.Ln({
                    blendFunction: n.YQ.SRC
                });
                bloom = new n.rk({
                    intensity: 1.8,
                    radius: .6,
                    mipmapBlur: !0,
                    luminanceThreshold: 1.0000001
                });
                delta = 0;
                graphicsVendor = "?";
                graphicsRenderer = "?";
                stats = {
                    frames: new l,
                    timers: new l,
                    timersRun: 0,
                    glTimeNanos: 0,
                    textureMemory: 0
                };
                frameTime = performance.now();
                timerWrapper = new h;
                layers = ["render"];
                async onLoad() {
                    window.THREE = s, window.TWEEN = i.ZP, this.camera.position.y = 1.8, this.glrenderer.domElement.style.cssText = "position: absolute; top: 0px; left: 0px; width: 100%; height: 100%; outline: none; ", this.glrenderer.domElement.tabIndex = 1, this.glrenderer.info.autoReset = !1, this.glrenderer.autoClear = !1, this.glrenderer.xr.enabled = !0, this.glrenderer.outputColorSpace = s.SRGBColorSpace, metapress.contentDiv.appendChild(this.glrenderer.domElement), window.addEventListener("resize", this.onResize), this.onResize(), window.addEventListener("orientationchange", this.onResize), window.screen.orientation.addEventListener("change", this.onResize), window.__metapress_bot ? (this.timerWrapper._originalSetInterval || setInterval)(this.onRender, 1e3 / 30) : this.glrenderer.setAnimationLoop(this.onRender);
                    try {
                        this.disjointTimerExt = this.glrenderer.getContext().getExtension("EXT_disjoint_timer_query_webgl2"), this.disjointTimerQuery = this.glrenderer.getContext().createQuery()
                    } catch (e) {}
                }
                $onAppReady() {
                    this.antialias.subpixelQuality = 1, this.updatePipeline()
                }
                onResize = async e => {
                    if (this.glrenderer.xr.isPresenting) return;
                    if (e) {
                        this._resizeCounter = (this._resizeCounter || 0) + 1;
                        let e = this._resizeCounter;
                        if (await new Promise((e => setTimeout(e, 200))), e != this._resizeCounter) return
                    }
                    this.canvasRect = this.canvas.getBoundingClientRect();
                    let t = Math.round(this.canvasRect.width),
                        r = Math.round(this.canvasRect.height);
                    m.debug(`[WorldRenderer] Resizing viewport to ${t}x${r}`), this.composer ? this.composer.setSize(t, r, !1) : this.glrenderer.setSize(t, r, !1), this.camera.aspect = t / r, this.camera.updateProjectionMatrix(), e && metapress.plugins.sendEvent("renderer_onResize")
                };
                onRender = () => {
                    try {
                        if (!metapress.isOpen) return
                    } catch (e) {}
                    this.stats.frames.start();
                    let e = performance.now();
                    this.delta = Math.min(1 / 15, (e - (this.frameTime || 0)) / 1e3), this.frameTime = e, metapress.plugins.sendEvent("beforeRender"), i.ZP.update(this.frameTime);
                    let t = this.glrenderer.getContext(),
                        r = !1;
                    this.disjointTimerExt && this.disjointTimerQuery && !this.disjointTimerQueryRunning && (this.disjointTimerQueryRunning = !0, r = !0, t.beginQuery(this.disjointTimerExt.TIME_ELAPSED_EXT, this.disjointTimerQuery)), metapress.plugins.sendEvent("onRender"), this.glrenderer.info.reset(), this.renderScene(), r && t.endQuery(this.disjointTimerExt.TIME_ELAPSED_EXT), this.disjointTimerQueryRunning && t.getQueryParameter(this.disjointTimerQuery, t.QUERY_RESULT_AVAILABLE) && (this.stats.glTimeNanos = Math.max(t.getQueryParameter(this.disjointTimerQuery, t.QUERY_RESULT), this.stats.glTimeNanos), this.disjointTimerQueryRunning = !1), metapress.plugins.sendEvent("afterRender"), this.stats.timers.start();
                    let s = this.timerWrapper.runIteration();
                    this.stats.timersRun += s, this.stats.timers.end(), this.stats.frames.end()
                };
                renderScene() {
                    window.__metapress_bot ? this.scene.updateWorldMatrix(!1, !0) : (this.glrenderer.clear(), this.composer ? this.composer.render(this.delta) : this.glrenderer.render(this.scene, this.camera))
                }
                $renderer_getPipelineEffects(e) {
                    return [this.antialias, this.bloom]
                }
                updatePipeline() {
                    this.composer && (this.composer.dispose(), this.composer = null), m.debug("[WorldRenderer] Creating effect composer"), this.composer = new n.xC(this.glrenderer, {
                        stencilBuffer: !0,
                        frameBufferType: s.HalfFloatType
                    }), this.composer.addPass(new n.CD(this.scene, this.camera));
                    let e = metapress.plugins.callAll("renderer_getPipelinePasses", {
                            pipeline: this.composer,
                            camera: this.camera
                        }).flat().filter((e => !!e)),
                        t = metapress.plugins.callAll("renderer_getPipelineEffects", this.camera).flat().filter((e => !!e));
                    t.sort(((e, t) => (e.priority || 0) - (t.priority || 0))), t.length > 0 && e.unshift(new n.H5(this.camera, ...t)), e.sort(((e, t) => (e.priority || 0) - (t.priority || 0)));
                    for (let t of e) this.composer.addPass(t)
                }
                $getDebugSection() {
                    if (!this.fetchedGlInfo) {
                        this.fetchedGlInfo = !0;
                        try {
                            let e = this.glrenderer.getContext(),
                                t = e?.getExtension("WEBGL_debug_renderer_info");
                            if (!t) throw new Error("WebGL extension missing: WEBGL_debug_renderer_info");
                            this.graphicsVendor = e.getParameter(t.UNMASKED_VENDOR_WEBGL) || "?", this.graphicsRenderer = e.getParameter(t.UNMASKED_RENDERER_WEBGL) || "?"
                        } catch (e) {}
                    }
                    let e = this.stats.frames.avgDuration,
                        t = this.stats.glTimeNanos / 1e6,
                        r = Math.max(e, t),
                        i = Math.round(Math.min(r / 12 * 100, 100)),
                        s = Date.now();
                    if (!this._lastTextureMemoryDate || s - this._lastTextureMemoryDate > 5e3) {
                        this._lastTextureMemoryDate = s;
                        let e = [];
                        this.stats.textureMemory = 0, this.scene.traverse((t => {
                            if (t.material)
                                for (let r in t.material) {
                                    let i = t.material[r];
                                    i?.image?.width && (e.includes(i) || (e.push(i), this.stats.textureMemory += i.image.width * i.image.height * 4))
                                }
                        }))
                    }
                    let n = `Render (${this.stats.frames.count} FPS)`,
                        a = `Time: cpu=(${this.stats.frames.text}) gpu=${t?t.toFixed(1):"?"}ms budget=12ms usage=${i}%\nDriver: ${this.graphicsRenderer||"?"} - ${this.graphicsVendor||"?"}\nStats: api=${this.glrenderer.capabilities?.isWebGL2?"webgl2":"webgl1"} lib=threejs-v${window.__THREE__||"?"} calls=${this.glrenderer.info.render.calls} tris=${this.glrenderer.info.render.triangles} meshes=${this.glrenderer.info.memory.geometries} textures=(${this.glrenderer.info.memory.textures}, ${Math.round(this.stats.textureMemory/1024/1024)}MB)\nTimers: registered=${this.timerWrapper.timers.length} executed=${this.stats.timersRun}/s duration=(${this.stats.timers.text})`;
                    return this.stats.timersRun = 0, this.stats.glTimeNanos = 0, {
                        name: n,
                        text: a,
                        order: -100
                    }
                }
                createModifier(e) {
                    if ("anchor" == e) return new a
                }
                namedLayer(e) {
                    let t = this.layers.indexOf(e);
                    if (-1 == t) {
                        if (32 == this.layers.length) throw new Error("Too many layers! There can only be a maximum of 32 layers.");
                        t = this.layers.length, this.layers.push(e)
                    }
                    return t
                }
            }
        }
    }
]);