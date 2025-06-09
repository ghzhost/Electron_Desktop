"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2371], {
        62371: (e, t, i) => {
            i.d(t, {
                CD: () => k,
                H5: () => K,
                Ln: () => O,
                YQ: () => E,
                bn: () => X,
                rk: () => L,
                xC: () => S
            });
            var r = i(99477),
                n = i(25108),
                s = .001,
                a = new r.Camera,
                o = null,
                l = class e {
                    constructor(e = "Pass", t = new r.Scene, i = a) {
                        this.name = e, this.renderer = null, this.scene = t, this.camera = i, this.screen = null, this.rtt = !0, this.needsSwap = !0, this.needsDepthTexture = !1, this.enabled = !0
                    }
                    get renderToScreen() {
                        return !this.rtt
                    }
                    set renderToScreen(e) {
                        if (this.rtt === e) {
                            const t = this.fullscreenMaterial;
                            null !== t && (t.needsUpdate = !0), this.rtt = !e
                        }
                    }
                    set mainScene(e) {}
                    set mainCamera(e) {}
                    setRenderer(e) {
                        this.renderer = e
                    }
                    isEnabled() {
                        return this.enabled
                    }
                    setEnabled(e) {
                        this.enabled = e
                    }
                    get fullscreenMaterial() {
                        return null !== this.screen ? this.screen.material : null
                    }
                    set fullscreenMaterial(e) {
                        let t = this.screen;
                        null !== t ? t.material = e : (t = new r.Mesh(function() {
                            if (null === o) {
                                const e = new Float32Array([-1, -1, 0, 3, -1, 0, -1, 3, 0]),
                                    t = new Float32Array([0, 0, 2, 0, 0, 2]);
                                void 0 !== (o = new r.BufferGeometry).setAttribute ? (o.setAttribute("position", new r.BufferAttribute(e, 3)), o.setAttribute("uv", new r.BufferAttribute(t, 2))) : (o.addAttribute("position", new r.BufferAttribute(e, 3)), o.addAttribute("uv", new r.BufferAttribute(t, 2)))
                            }
                            return o
                        }(), e), t.frustumCulled = !1, null === this.scene && (this.scene = new r.Scene), this.scene.add(t), this.screen = t)
                    }
                    getFullscreenMaterial() {
                        return this.fullscreenMaterial
                    }
                    setFullscreenMaterial(e) {
                        this.fullscreenMaterial = e
                    }
                    getDepthTexture() {
                        return null
                    }
                    setDepthTexture(e, t = r.BasicDepthPacking) {}
                    render(e, t, i, r, n) {
                        throw new Error("Render method not implemented!")
                    }
                    setSize(e, t) {}
                    initialize(e, t, i) {}
                    dispose() {
                        for (const t of Object.keys(this)) {
                            const i = this[t];
                            (i instanceof r.WebGLRenderTarget || i instanceof r.Material || i instanceof r.Texture || i instanceof e) && this[t].dispose()
                        }
                    }
                },
                u = class extends l {
                    constructor() {
                        super("ClearMaskPass", null, null), this.needsSwap = !1
                    }
                    render(e, t, i, r, n) {
                        const s = e.state.buffers.stencil;
                        s.setLocked(!1), s.setTest(!1)
                    }
                },
                h = Number(r.REVISION.replace(/\D+/g, ""));

            function c(e) {
                return h < 154 ? e.replace("colorspace_fragment", "encodings_fragment") : e
            }
            var f = "varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",
                d = class extends r.ShaderMaterial {
                    constructor() {
                        super({
                            name: "CopyMaterial",
                            uniforms: {
                                inputBuffer: new r.Uniform(null),
                                opacity: new r.Uniform(1)
                            },
                            blending: r.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <common>\n#include <dithering_pars_fragment>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nuniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;\n#include <colorspace_fragment>\n#include <dithering_fragment>\n}",
                            vertexShader: f
                        }), this.fragmentShader = c(this.fragmentShader)
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    getOpacity(e) {
                        return this.uniforms.opacity.value
                    }
                    setOpacity(e) {
                        this.uniforms.opacity.value = e
                    }
                },
                p = class extends l {
                    constructor(e, t = !0) {
                        super("CopyPass"), this.fullscreenMaterial = new d, this.needsSwap = !1, this.renderTarget = e, void 0 === e && (this.renderTarget = new r.WebGLRenderTarget(1, 1, {
                            minFilter: r.LinearFilter,
                            magFilter: r.LinearFilter,
                            stencilBuffer: !1,
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "CopyPass.Target"), this.autoResize = t
                    }
                    get resize() {
                        return this.autoResize
                    }
                    set resize(e) {
                        this.autoResize = e
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    setAutoResizeEnabled(e) {
                        this.autoResize = e
                    }
                    render(e, t, i, r, n) {
                        this.fullscreenMaterial.inputBuffer = t.texture, e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera)
                    }
                    setSize(e, t) {
                        this.autoResize && this.renderTarget.setSize(e, t)
                    }
                    initialize(e, t, i) {
                        void 0 !== i && (this.renderTarget.texture.type = i, i !== r.UnsignedByteType ? this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1" : null !== e && e.outputColorSpace === r.SRGBColorSpace && (this.renderTarget.texture.colorSpace = r.SRGBColorSpace))
                    }
                },
                v = new r.Color,
                m = class extends l {
                    constructor(e = !0, t = !0, i = !1) {
                        super("ClearPass", null, null), this.needsSwap = !1, this.color = e, this.depth = t, this.stencil = i, this.overrideClearColor = null, this.overrideClearAlpha = -1
                    }
                    setClearFlags(e, t, i) {
                        this.color = e, this.depth = t, this.stencil = i
                    }
                    getOverrideClearColor() {
                        return this.overrideClearColor
                    }
                    setOverrideClearColor(e) {
                        this.overrideClearColor = e
                    }
                    getOverrideClearAlpha() {
                        return this.overrideClearAlpha
                    }
                    setOverrideClearAlpha(e) {
                        this.overrideClearAlpha = e
                    }
                    render(e, t, i, r, n) {
                        const s = this.overrideClearColor,
                            a = this.overrideClearAlpha,
                            o = e.getClearAlpha(),
                            l = null !== s,
                            u = a >= 0;
                        l ? (e.getClearColor(v), e.setClearColor(s, u ? a : o)) : u && e.setClearAlpha(a), e.setRenderTarget(this.renderToScreen ? null : t), e.clear(this.color, this.depth, this.stencil), l ? e.setClearColor(v, o) : u && e.setClearAlpha(o)
                    }
                },
                g = class extends l {
                    constructor(e, t) {
                        super("MaskPass", e, t), this.needsSwap = !1, this.clearPass = new m(!1, !1, !0), this.inverse = !1
                    }
                    set mainScene(e) {
                        this.scene = e
                    }
                    set mainCamera(e) {
                        this.camera = e
                    }
                    get inverted() {
                        return this.inverse
                    }
                    set inverted(e) {
                        this.inverse = e
                    }
                    get clear() {
                        return this.clearPass.enabled
                    }
                    set clear(e) {
                        this.clearPass.enabled = e
                    }
                    getClearPass() {
                        return this.clearPass
                    }
                    isInverted() {
                        return this.inverted
                    }
                    setInverted(e) {
                        this.inverted = e
                    }
                    render(e, t, i, r, n) {
                        const s = e.getContext(),
                            a = e.state.buffers,
                            o = this.scene,
                            l = this.camera,
                            u = this.clearPass,
                            h = this.inverted ? 0 : 1,
                            c = 1 - h;
                        a.color.setMask(!1), a.depth.setMask(!1), a.color.setLocked(!0), a.depth.setLocked(!0), a.stencil.setTest(!0), a.stencil.setOp(s.REPLACE, s.REPLACE, s.REPLACE), a.stencil.setFunc(s.ALWAYS, h, 4294967295), a.stencil.setClear(c), a.stencil.setLocked(!0), this.clearPass.enabled && (this.renderToScreen ? u.render(e, null) : (u.render(e, t), u.render(e, i))), this.renderToScreen ? (e.setRenderTarget(null), e.render(o, l)) : (e.setRenderTarget(t), e.render(o, l), e.setRenderTarget(i), e.render(o, l)), a.color.setLocked(!1), a.depth.setLocked(!1), a.stencil.setLocked(!1), a.stencil.setFunc(s.EQUAL, 1, 4294967295), a.stencil.setOp(s.KEEP, s.KEEP, s.KEEP), a.stencil.setLocked(!0)
                    }
                },
                S = class {
                    constructor(e = null, {
                        depthBuffer: t = !0,
                        stencilBuffer: i = !1,
                        multisampling: r = 0,
                        frameBufferType: n
                    } = {}) {
                        this.renderer = null, this.inputBuffer = this.createBuffer(t, i, n, r), this.outputBuffer = this.inputBuffer.clone(), this.copyPass = new p, this.depthTexture = null, this.passes = [], this.timer = new class {
                            constructor() {
                                this.startTime = performance.now(), this.previousTime = 0, this.currentTime = 0, this._delta = 0, this._elapsed = 0, this._fixedDelta = 1e3 / 60, this.timescale = 1, this.useFixedDelta = !1, this._autoReset = !1
                            }
                            get autoReset() {
                                return this._autoReset
                            }
                            set autoReset(e) {
                                "undefined" != typeof document && void 0 !== document.hidden && (e ? document.addEventListener("visibilitychange", this) : document.removeEventListener("visibilitychange", this), this._autoReset = e)
                            }
                            get delta() {
                                return this._delta * s
                            }
                            get fixedDelta() {
                                return this._fixedDelta * s
                            }
                            set fixedDelta(e) {
                                this._fixedDelta = 1e3 * e
                            }
                            get elapsed() {
                                return this._elapsed * s
                            }
                            update(e) {
                                this.useFixedDelta ? this._delta = this.fixedDelta : (this.previousTime = this.currentTime, this.currentTime = (void 0 !== e ? e : performance.now()) - this.startTime, this._delta = this.currentTime - this.previousTime), this._delta *= this.timescale, this._elapsed += this._delta
                            }
                            reset() {
                                this._delta = 0, this._elapsed = 0, this.currentTime = performance.now() - this.startTime
                            }
                            getDelta() {
                                return this.delta
                            }
                            getElapsed() {
                                return this.elapsed
                            }
                            handleEvent(e) {
                                document.hidden || (this.currentTime = performance.now() - this.startTime)
                            }
                            dispose() {
                                this.autoReset = !1
                            }
                        }, this.autoRenderToScreen = !0, this.setRenderer(e)
                    }
                    get multisampling() {
                        return this.inputBuffer.samples || 0
                    }
                    set multisampling(e) {
                        const t = this.inputBuffer,
                            i = this.multisampling;
                        i > 0 && e > 0 ? (this.inputBuffer.samples = e, this.outputBuffer.samples = e, this.inputBuffer.dispose(), this.outputBuffer.dispose()) : i !== e && (this.inputBuffer.dispose(), this.outputBuffer.dispose(), this.inputBuffer = this.createBuffer(t.depthBuffer, t.stencilBuffer, t.texture.type, e), this.inputBuffer.depthTexture = this.depthTexture, this.outputBuffer = this.inputBuffer.clone())
                    }
                    getTimer() {
                        return this.timer
                    }
                    getRenderer() {
                        return this.renderer
                    }
                    setRenderer(e) {
                        if (this.renderer = e, null !== e) {
                            const t = e.getSize(new r.Vector2),
                                i = e.getContext().getContextAttributes().alpha,
                                n = this.inputBuffer.texture.type;
                            n === r.UnsignedByteType && e.outputColorSpace === r.SRGBColorSpace && (this.inputBuffer.texture.colorSpace = r.SRGBColorSpace, this.outputBuffer.texture.colorSpace = r.SRGBColorSpace, this.inputBuffer.dispose(), this.outputBuffer.dispose()), e.autoClear = !1, this.setSize(t.width, t.height);
                            for (const t of this.passes) t.initialize(e, i, n)
                        }
                    }
                    replaceRenderer(e, t = !0) {
                        const i = this.renderer,
                            r = i.domElement.parentNode;
                        return this.setRenderer(e), t && null !== r && (r.removeChild(i.domElement), r.appendChild(e.domElement)), i
                    }
                    createDepthTexture() {
                        const e = this.depthTexture = new r.DepthTexture;
                        return this.inputBuffer.depthTexture = e, this.inputBuffer.dispose(), this.inputBuffer.stencilBuffer ? (e.format = r.DepthStencilFormat, e.type = r.UnsignedInt248Type) : e.type = r.UnsignedIntType, e
                    }
                    deleteDepthTexture() {
                        if (null !== this.depthTexture) {
                            this.depthTexture.dispose(), this.depthTexture = null, this.inputBuffer.depthTexture = null, this.inputBuffer.dispose();
                            for (const e of this.passes) e.setDepthTexture(null)
                        }
                    }
                    createBuffer(e, t, i, n) {
                        const s = this.renderer,
                            a = null === s ? new r.Vector2 : s.getDrawingBufferSize(new r.Vector2),
                            o = {
                                minFilter: r.LinearFilter,
                                magFilter: r.LinearFilter,
                                stencilBuffer: t,
                                depthBuffer: e,
                                type: i
                            },
                            l = new r.WebGLRenderTarget(a.width, a.height, o);
                        return n > 0 && (l.ignoreDepthForMultisampleCopy = !1, l.samples = n), i === r.UnsignedByteType && null !== s && s.outputColorSpace === r.SRGBColorSpace && (l.texture.colorSpace = r.SRGBColorSpace), l.texture.name = "EffectComposer.Buffer", l.texture.generateMipmaps = !1, l
                    }
                    setMainScene(e) {
                        for (const t of this.passes) t.mainScene = e
                    }
                    setMainCamera(e) {
                        for (const t of this.passes) t.mainCamera = e
                    }
                    addPass(e, t) {
                        const i = this.passes,
                            n = this.renderer,
                            s = n.getDrawingBufferSize(new r.Vector2),
                            a = n.getContext().getContextAttributes().alpha,
                            o = this.inputBuffer.texture.type;
                        if (e.setRenderer(n), e.setSize(s.width, s.height), e.initialize(n, a, o), this.autoRenderToScreen && (i.length > 0 && (i[i.length - 1].renderToScreen = !1), e.renderToScreen && (this.autoRenderToScreen = !1)), void 0 !== t ? i.splice(t, 0, e) : i.push(e), this.autoRenderToScreen && (i[i.length - 1].renderToScreen = !0), e.needsDepthTexture || null !== this.depthTexture)
                            if (null === this.depthTexture) {
                                const t = this.createDepthTexture();
                                for (e of i) e.setDepthTexture(t)
                            } else e.setDepthTexture(this.depthTexture)
                    }
                    removePass(e) {
                        const t = this.passes,
                            i = t.indexOf(e);
                        if (-1 !== i && t.splice(i, 1).length > 0) {
                            if (null !== this.depthTexture) {
                                const i = (e, t) => e || t.needsDepthTexture;
                                t.reduce(i, !1) || (e.getDepthTexture() === this.depthTexture && e.setDepthTexture(null), this.deleteDepthTexture())
                            }
                            this.autoRenderToScreen && i === t.length && (e.renderToScreen = !1, t.length > 0 && (t[t.length - 1].renderToScreen = !0))
                        }
                    }
                    removeAllPasses() {
                        const e = this.passes;
                        this.deleteDepthTexture(), e.length > 0 && (this.autoRenderToScreen && (e[e.length - 1].renderToScreen = !1), this.passes = [])
                    }
                    render(e) {
                        const t = this.renderer,
                            i = this.copyPass;
                        let r, n, s, a = this.inputBuffer,
                            o = this.outputBuffer,
                            l = !1;
                        void 0 === e && (this.timer.update(), e = this.timer.getDelta());
                        for (const h of this.passes) h.enabled && (h.render(t, a, o, e, l), h.needsSwap && (l && (i.renderToScreen = h.renderToScreen, r = t.getContext(), n = t.state.buffers.stencil, n.setFunc(r.NOTEQUAL, 1, 4294967295), i.render(t, a, o, e, l), n.setFunc(r.EQUAL, 1, 4294967295)), s = a, a = o, o = s), h instanceof g ? l = !0 : h instanceof u && (l = !1))
                    }
                    setSize(e, t, i) {
                        const n = this.renderer,
                            s = n.getSize(new r.Vector2);
                        void 0 !== e && void 0 !== t || (e = s.width, t = s.height), s.width === e && s.height === t || n.setSize(e, t, i);
                        const a = n.getDrawingBufferSize(new r.Vector2);
                        this.inputBuffer.setSize(a.width, a.height), this.outputBuffer.setSize(a.width, a.height);
                        for (const e of this.passes) e.setSize(a.width, a.height)
                    }
                    reset() {
                        this.dispose(), this.autoRenderToScreen = !0
                    }
                    dispose() {
                        for (const e of this.passes) e.dispose();
                        this.passes = [], null !== this.inputBuffer && this.inputBuffer.dispose(), null !== this.outputBuffer && this.outputBuffer.dispose(), this.deleteDepthTexture(), this.copyPass.dispose(), this.timer.dispose()
                    }
                },
                x = {
                    FRAGMENT_HEAD: "FRAGMENT_HEAD",
                    FRAGMENT_MAIN_UV: "FRAGMENT_MAIN_UV",
                    FRAGMENT_MAIN_IMAGE: "FRAGMENT_MAIN_IMAGE",
                    VERTEX_HEAD: "VERTEX_HEAD",
                    VERTEX_MAIN_SUPPORT: "VERTEX_MAIN_SUPPORT"
                },
                y = !1,
                T = class {
                    constructor(e = null) {
                        this.originalMaterials = new Map, this.material = null, this.materials = null, this.materialsBackSide = null, this.materialsDoubleSide = null, this.materialsFlatShaded = null, this.materialsFlatShadedBackSide = null, this.materialsFlatShadedDoubleSide = null, this.setMaterial(e), this.meshCount = 0, this.replaceMaterial = e => {
                            if (e.isMesh) {
                                let t;
                                if (e.material.flatShading) switch (e.material.side) {
                                    case r.DoubleSide:
                                        t = this.materialsFlatShadedDoubleSide;
                                        break;
                                    case r.BackSide:
                                        t = this.materialsFlatShadedBackSide;
                                        break;
                                    default:
                                        t = this.materialsFlatShaded
                                } else switch (e.material.side) {
                                    case r.DoubleSide:
                                        t = this.materialsDoubleSide;
                                        break;
                                    case r.BackSide:
                                        t = this.materialsBackSide;
                                        break;
                                    default:
                                        t = this.materials
                                }
                                this.originalMaterials.set(e, e.material), e.isSkinnedMesh ? e.material = t[2] : e.isInstancedMesh ? e.material = t[1] : e.material = t[0], ++this.meshCount
                            }
                        }
                    }
                    cloneMaterial(e) {
                        if (!(e instanceof r.ShaderMaterial)) return e.clone();
                        const t = e.uniforms,
                            i = new Map;
                        for (const e in t) {
                            const r = t[e].value;
                            r.isRenderTargetTexture && (t[e].value = null, i.set(e, r))
                        }
                        const n = e.clone();
                        for (const e of i) t[e[0]].value = e[1], n.uniforms[e[0]].value = e[1];
                        return n
                    }
                    setMaterial(e) {
                        if (this.disposeMaterials(), this.material = e, null !== e) {
                            const t = this.materials = [this.cloneMaterial(e), this.cloneMaterial(e), this.cloneMaterial(e)];
                            for (const i of t) i.uniforms = Object.assign({}, e.uniforms), i.side = r.FrontSide;
                            t[2].skinning = !0, this.materialsBackSide = t.map((t => {
                                const i = this.cloneMaterial(t);
                                return i.uniforms = Object.assign({}, e.uniforms), i.side = r.BackSide, i
                            })), this.materialsDoubleSide = t.map((t => {
                                const i = this.cloneMaterial(t);
                                return i.uniforms = Object.assign({}, e.uniforms), i.side = r.DoubleSide, i
                            })), this.materialsFlatShaded = t.map((t => {
                                const i = this.cloneMaterial(t);
                                return i.uniforms = Object.assign({}, e.uniforms), i.flatShading = !0, i
                            })), this.materialsFlatShadedBackSide = t.map((t => {
                                const i = this.cloneMaterial(t);
                                return i.uniforms = Object.assign({}, e.uniforms), i.flatShading = !0, i.side = r.BackSide, i
                            })), this.materialsFlatShadedDoubleSide = t.map((t => {
                                const i = this.cloneMaterial(t);
                                return i.uniforms = Object.assign({}, e.uniforms), i.flatShading = !0, i.side = r.DoubleSide, i
                            }))
                        }
                    }
                    render(e, t, i) {
                        const r = e.shadowMap.enabled;
                        if (e.shadowMap.enabled = !1, y) {
                            const r = this.originalMaterials;
                            this.meshCount = 0, t.traverse(this.replaceMaterial), e.render(t, i);
                            for (const e of r) e[0].material = e[1];
                            this.meshCount !== r.size && r.clear()
                        } else {
                            const r = t.overrideMaterial;
                            t.overrideMaterial = this.material, e.render(t, i), t.overrideMaterial = r
                        }
                        e.shadowMap.enabled = r
                    }
                    disposeMaterials() {
                        if (null !== this.material) {
                            const e = this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);
                            for (const t of e) t.dispose()
                        }
                    }
                    dispose() {
                        this.originalMaterials.clear(), this.disposeMaterials()
                    }
                    static get workaroundEnabled() {
                        return y
                    }
                    static set workaroundEnabled(e) {
                        y = e
                    }
                },
                U = -1,
                w = class extends r.EventDispatcher {
                    constructor(e, t = -1, i = -1, n = 1) {
                        super(), this.resizable = e, this.baseSize = new r.Vector2(1, 1), this.preferredSize = new r.Vector2(t, i), this.target = this.preferredSize, this.s = n, this.effectiveSize = new r.Vector2, this.addEventListener("change", (() => this.updateEffectiveSize())), this.updateEffectiveSize()
                    }
                    updateEffectiveSize() {
                        const e = this.baseSize,
                            t = this.preferredSize,
                            i = this.effectiveSize,
                            r = this.scale;
                        t.width !== U ? i.width = t.width : t.height !== U ? i.width = Math.round(t.height * (e.width / Math.max(e.height, 1))) : i.width = Math.round(e.width * r), t.height !== U ? i.height = t.height : t.width !== U ? i.height = Math.round(t.width / Math.max(e.width / Math.max(e.height, 1), 1)) : i.height = Math.round(e.height * r)
                    }
                    get width() {
                        return this.effectiveSize.width
                    }
                    set width(e) {
                        this.preferredWidth = e
                    }
                    get height() {
                        return this.effectiveSize.height
                    }
                    set height(e) {
                        this.preferredHeight = e
                    }
                    getWidth() {
                        return this.width
                    }
                    getHeight() {
                        return this.height
                    }
                    get scale() {
                        return this.s
                    }
                    set scale(e) {
                        this.s !== e && (this.s = e, this.preferredSize.setScalar(U), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getScale() {
                        return this.scale
                    }
                    setScale(e) {
                        this.scale = e
                    }
                    get baseWidth() {
                        return this.baseSize.width
                    }
                    set baseWidth(e) {
                        this.baseSize.width !== e && (this.baseSize.width = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getBaseWidth() {
                        return this.baseWidth
                    }
                    setBaseWidth(e) {
                        this.baseWidth = e
                    }
                    get baseHeight() {
                        return this.baseSize.height
                    }
                    set baseHeight(e) {
                        this.baseSize.height !== e && (this.baseSize.height = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getBaseHeight() {
                        return this.baseHeight
                    }
                    setBaseHeight(e) {
                        this.baseHeight = e
                    }
                    setBaseSize(e, t) {
                        this.baseSize.width === e && this.baseSize.height === t || (this.baseSize.set(e, t), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    get preferredWidth() {
                        return this.preferredSize.width
                    }
                    set preferredWidth(e) {
                        this.preferredSize.width !== e && (this.preferredSize.width = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getPreferredWidth() {
                        return this.preferredWidth
                    }
                    setPreferredWidth(e) {
                        this.preferredWidth = e
                    }
                    get preferredHeight() {
                        return this.preferredSize.height
                    }
                    set preferredHeight(e) {
                        this.preferredSize.height !== e && (this.preferredSize.height = e, this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    getPreferredHeight() {
                        return this.preferredHeight
                    }
                    setPreferredHeight(e) {
                        this.preferredHeight = e
                    }
                    setPreferredSize(e, t) {
                        this.preferredSize.width === e && this.preferredSize.height === t || (this.preferredSize.set(e, t), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height))
                    }
                    copy(e) {
                        this.s = e.scale, this.baseSize.set(e.baseWidth, e.baseHeight), this.preferredSize.set(e.preferredWidth, e.preferredHeight), this.dispatchEvent({
                            type: "change"
                        }), this.resizable.setSize(this.baseSize.width, this.baseSize.height)
                    }
                    static get AUTO_SIZE() {
                        return U
                    }
                },
                E = (Set, {
                    SKIP: 9,
                    SET: 30,
                    ADD: 0,
                    ALPHA: 1,
                    AVERAGE: 2,
                    COLOR: 3,
                    COLOR_BURN: 4,
                    COLOR_DODGE: 5,
                    DARKEN: 6,
                    DIFFERENCE: 7,
                    DIVIDE: 8,
                    DST: 9,
                    EXCLUSION: 10,
                    HARD_LIGHT: 11,
                    HARD_MIX: 12,
                    HUE: 13,
                    INVERT: 14,
                    INVERT_RGB: 15,
                    LIGHTEN: 16,
                    LINEAR_BURN: 17,
                    LINEAR_DODGE: 18,
                    LINEAR_LIGHT: 19,
                    LUMINOSITY: 20,
                    MULTIPLY: 21,
                    NEGATION: 22,
                    NORMAL: 23,
                    OVERLAY: 24,
                    PIN_LIGHT: 25,
                    REFLECT: 26,
                    SATURATION: 27,
                    SCREEN: 28,
                    SOFT_LIGHT: 29,
                    SRC: 30,
                    SUBTRACT: 31,
                    VIVID_LIGHT: 32
                }),
                R = new Map([
                    [E.ADD, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}"],
                    [E.ALPHA, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}"],
                    [E.AVERAGE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}"],
                    [E.COLOR, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],
                    [E.COLOR_BURN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}"],
                    [E.COLOR_DODGE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}"],
                    [E.DARKEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}"],
                    [E.DIFFERENCE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}"],
                    [E.DIVIDE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}"],
                    [E.DST, null],
                    [E.EXCLUSION, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}"],
                    [E.HARD_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}"],
                    [E.HARD_MIX, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}"],
                    [E.HUE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}"],
                    [E.INVERT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}"],
                    [E.INVERT_RGB, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}"],
                    [E.LIGHTEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}"],
                    [E.LINEAR_BURN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}"],
                    [E.LINEAR_DODGE, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}"],
                    [E.LINEAR_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}"],
                    [E.LUMINOSITY, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],
                    [E.MULTIPLY, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}"],
                    [E.NEGATION, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}"],
                    [E.NORMAL, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}"],
                    [E.OVERLAY, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}"],
                    [E.PIN_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}"],
                    [E.REFLECT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}"],
                    [E.SATURATION, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}"],
                    [E.SCREEN, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}"],
                    [E.SOFT_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}"],
                    [E.SRC, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}"],
                    [E.SUBTRACT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}"],
                    [E.VIVID_LIGHT, "vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}"]
                ]),
                M = class extends r.EventDispatcher {
                    constructor(e, t = 1) {
                        super(), this._blendFunction = e, this.opacity = new r.Uniform(t)
                    }
                    getOpacity() {
                        return this.opacity.value
                    }
                    setOpacity(e) {
                        this.opacity.value = e
                    }
                    get blendFunction() {
                        return this._blendFunction
                    }
                    set blendFunction(e) {
                        this._blendFunction = e, this.dispatchEvent({
                            type: "change"
                        })
                    }
                    getBlendFunction() {
                        return this.blendFunction
                    }
                    setBlendFunction(e) {
                        this.blendFunction = e
                    }
                    getShaderCode() {
                        return R.get(this.blendFunction)
                    }
                },
                A = [new Float32Array([0, 0]), new Float32Array([0, 1, 1]), new Float32Array([0, 1, 1, 2]), new Float32Array([0, 1, 2, 2, 3]), new Float32Array([0, 1, 2, 3, 4, 4, 5]), new Float32Array([0, 1, 2, 3, 4, 5, 7, 8, 9, 10])],
                B = class extends r.ShaderMaterial {
                    constructor(e = new r.Vector4) {
                        super({
                            name: "KawaseBlurMaterial",
                            uniforms: {
                                inputBuffer: new r.Uniform(null),
                                texelSize: new r.Uniform(new r.Vector4),
                                scale: new r.Uniform(1),
                                kernel: new r.Uniform(0)
                            },
                            blending: r.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\nvarying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;\n#include <colorspace_fragment>\n}",
                            vertexShader: "uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.fragmentShader = c(this.fragmentShader), this.setTexelSize(e.x, e.y), this.kernelSize = 2
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.inputBuffer = e
                    }
                    get kernelSequence() {
                        return A[this.kernelSize]
                    }
                    get scale() {
                        return this.uniforms.scale.value
                    }
                    set scale(e) {
                        this.uniforms.scale.value = e
                    }
                    getScale() {
                        return this.uniforms.scale.value
                    }
                    setScale(e) {
                        this.uniforms.scale.value = e
                    }
                    getKernel() {
                        return null
                    }
                    get kernel() {
                        return this.uniforms.kernel.value
                    }
                    set kernel(e) {
                        this.uniforms.kernel.value = e
                    }
                    setKernel(e) {
                        this.kernel = e
                    }
                    setTexelSize(e, t) {
                        this.uniforms.texelSize.value.set(e, t, .5 * e, .5 * t)
                    }
                    setSize(e, t) {
                        const i = 1 / e,
                            r = 1 / t;
                        this.uniforms.texelSize.value.set(i, r, .5 * i, .5 * r)
                    }
                },
                D = class extends l {
                    constructor({
                        kernelSize: e = 2,
                        resolutionScale: t = .5,
                        width: i = w.AUTO_SIZE,
                        height: n = w.AUTO_SIZE,
                        resolutionX: s = i,
                        resolutionY: a = n
                    } = {}) {
                        super("KawaseBlurPass"), this.renderTargetA = new r.WebGLRenderTarget(1, 1, {
                            depthBuffer: !1
                        }), this.renderTargetA.texture.name = "Blur.Target.A", this.renderTargetB = this.renderTargetA.clone(), this.renderTargetB.texture.name = "Blur.Target.B";
                        const o = this.resolution = new w(this, s, a, t);
                        o.addEventListener("change", (e => this.setSize(o.baseWidth, o.baseHeight))), this._blurMaterial = new B, this._blurMaterial.kernelSize = e, this.copyMaterial = new d
                    }
                    getResolution() {
                        return this.resolution
                    }
                    get blurMaterial() {
                        return this._blurMaterial
                    }
                    set blurMaterial(e) {
                        this._blurMaterial = e
                    }
                    get dithering() {
                        return this.copyMaterial.dithering
                    }
                    set dithering(e) {
                        this.copyMaterial.dithering = e
                    }
                    get kernelSize() {
                        return this.blurMaterial.kernelSize
                    }
                    set kernelSize(e) {
                        this.blurMaterial.kernelSize = e
                    }
                    get width() {
                        return this.resolution.width
                    }
                    set width(e) {
                        this.resolution.preferredWidth = e
                    }
                    get height() {
                        return this.resolution.height
                    }
                    set height(e) {
                        this.resolution.preferredHeight = e
                    }
                    get scale() {
                        return this.blurMaterial.scale
                    }
                    set scale(e) {
                        this.blurMaterial.scale = e
                    }
                    getScale() {
                        return this.blurMaterial.scale
                    }
                    setScale(e) {
                        this.blurMaterial.scale = e
                    }
                    getKernelSize() {
                        return this.kernelSize
                    }
                    setKernelSize(e) {
                        this.kernelSize = e
                    }
                    getResolutionScale() {
                        return this.resolution.scale
                    }
                    setResolutionScale(e) {
                        this.resolution.scale = e
                    }
                    render(e, t, i, r, n) {
                        const s = this.scene,
                            a = this.camera,
                            o = this.renderTargetA,
                            l = this.renderTargetB,
                            u = this.blurMaterial,
                            h = u.kernelSequence;
                        let c = t;
                        this.fullscreenMaterial = u;
                        for (let t = 0, i = h.length; t < i; ++t) {
                            const i = 0 == (1 & t) ? o : l;
                            u.kernel = h[t], u.inputBuffer = c.texture, e.setRenderTarget(i), e.render(s, a), c = i
                        }
                        this.fullscreenMaterial = this.copyMaterial, this.copyMaterial.inputBuffer = c.texture, e.setRenderTarget(this.renderToScreen ? null : i), e.render(s, a)
                    }
                    setSize(e, t) {
                        const i = this.resolution;
                        i.setBaseSize(e, t);
                        const r = i.width,
                            n = i.height;
                        this.renderTargetA.setSize(r, n), this.renderTargetB.setSize(r, n), this.blurMaterial.setSize(e, t)
                    }
                    initialize(e, t, i) {
                        void 0 !== i && (this.renderTargetA.texture.type = i, this.renderTargetB.texture.type = i, i !== r.UnsignedByteType ? (this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1") : null !== e && e.outputColorSpace === r.SRGBColorSpace && (this.renderTargetA.texture.colorSpace = r.SRGBColorSpace, this.renderTargetB.texture.colorSpace = r.SRGBColorSpace))
                    }
                    static get AUTO_SIZE() {
                        return w.AUTO_SIZE
                    }
                },
                b = class extends r.ShaderMaterial {
                    constructor(e = !1, t = null) {
                        super({
                            name: "LuminanceMaterial",
                            defines: {
                                THREE_REVISION: r.REVISION.replace(/\D+/g, "")
                            },
                            uniforms: {
                                inputBuffer: new r.Uniform(null),
                                threshold: new r.Uniform(0),
                                smoothing: new r.Uniform(1),
                                range: new r.Uniform(null)
                            },
                            blending: r.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <common>\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#ifdef RANGE\nuniform vec2 range;\n#elif defined(THRESHOLD)\nuniform float threshold;uniform float smoothing;\n#endif\nvarying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);\n#ifdef RANGE\nfloat low=step(range.x,l);float high=step(l,range.y);l*=low*high;\n#elif defined(THRESHOLD)\nl=smoothstep(threshold,threshold+smoothing,l)*l;\n#endif\n#ifdef COLOR\ngl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);\n#else\ngl_FragColor=vec4(l);\n#endif\n}",
                            vertexShader: f
                        }), this.colorOutput = e, this.luminanceRange = t
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    get threshold() {
                        return this.uniforms.threshold.value
                    }
                    set threshold(e) {
                        this.smoothing > 0 || e > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.threshold.value = e
                    }
                    getThreshold() {
                        return this.threshold
                    }
                    setThreshold(e) {
                        this.threshold = e
                    }
                    get smoothing() {
                        return this.uniforms.smoothing.value
                    }
                    set smoothing(e) {
                        this.threshold > 0 || e > 0 ? this.defines.THRESHOLD = "1" : delete this.defines.THRESHOLD, this.uniforms.smoothing.value = e
                    }
                    getSmoothingFactor() {
                        return this.smoothing
                    }
                    setSmoothingFactor(e) {
                        this.smoothing = e
                    }
                    get useThreshold() {
                        return this.threshold > 0 || this.smoothing > 0
                    }
                    set useThreshold(e) {}
                    get colorOutput() {
                        return void 0 !== this.defines.COLOR
                    }
                    set colorOutput(e) {
                        e ? this.defines.COLOR = "1" : delete this.defines.COLOR, this.needsUpdate = !0
                    }
                    isColorOutputEnabled(e) {
                        return this.colorOutput
                    }
                    setColorOutputEnabled(e) {
                        this.colorOutput = e
                    }
                    get useRange() {
                        return null !== this.luminanceRange
                    }
                    set useRange(e) {
                        this.luminanceRange = null
                    }
                    get luminanceRange() {
                        return this.uniforms.range.value
                    }
                    set luminanceRange(e) {
                        null !== e ? this.defines.RANGE = "1" : delete this.defines.RANGE, this.uniforms.range.value = e, this.needsUpdate = !0
                    }
                    getLuminanceRange() {
                        return this.luminanceRange
                    }
                    setLuminanceRange(e) {
                        this.luminanceRange = e
                    }
                },
                C = class extends l {
                    constructor({
                        renderTarget: e,
                        luminanceRange: t,
                        colorOutput: i,
                        resolutionScale: n = 1,
                        width: s = w.AUTO_SIZE,
                        height: a = w.AUTO_SIZE,
                        resolutionX: o = s,
                        resolutionY: l = a
                    } = {}) {
                        super("LuminancePass"), this.fullscreenMaterial = new b(i, t), this.needsSwap = !1, this.renderTarget = e, void 0 === this.renderTarget && (this.renderTarget = new r.WebGLRenderTarget(1, 1, {
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "LuminancePass.Target");
                        const u = this.resolution = new w(this, o, l, n);
                        u.addEventListener("change", (e => this.setSize(u.baseWidth, u.baseHeight)))
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    getResolution() {
                        return this.resolution
                    }
                    render(e, t, i, r, n) {
                        this.fullscreenMaterial.inputBuffer = t.texture, e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera)
                    }
                    setSize(e, t) {
                        const i = this.resolution;
                        i.setBaseSize(e, t), this.renderTarget.setSize(i.width, i.height)
                    }
                    initialize(e, t, i) {
                        void 0 !== i && i !== r.UnsignedByteType && (this.renderTarget.texture.type = i, this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
                    }
                },
                _ = class extends r.ShaderMaterial {
                    constructor() {
                        super({
                            name: "DownsamplingMaterial",
                            uniforms: {
                                inputBuffer: new r.Uniform(null),
                                texelSize: new r.Uniform(new r.Vector2)
                            },
                            blending: r.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#define WEIGHT_INNER 0.125\n#define WEIGHT_OUTER 0.0555555\nvarying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;\n#include <colorspace_fragment>\n}",
                            vertexShader: "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.fragmentShader = c(this.fragmentShader)
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setSize(e, t) {
                        this.uniforms.texelSize.value.set(1 / e, 1 / t)
                    }
                },
                P = class extends r.ShaderMaterial {
                    constructor() {
                        super({
                            name: "UpsamplingMaterial",
                            uniforms: {
                                inputBuffer: new r.Uniform(null),
                                supportBuffer: new r.Uniform(null),
                                texelSize: new r.Uniform(new r.Vector2),
                                radius: new r.Uniform(.85)
                            },
                            blending: r.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;\n#else\nuniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;\n#endif\nuniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);\n#include <colorspace_fragment>\n}",
                            vertexShader: "uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.fragmentShader = c(this.fragmentShader)
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    set supportBuffer(e) {
                        this.uniforms.supportBuffer.value = e
                    }
                    get radius() {
                        return this.uniforms.radius.value
                    }
                    set radius(e) {
                        this.uniforms.radius.value = e
                    }
                    setSize(e, t) {
                        this.uniforms.texelSize.value.set(1 / e, 1 / t)
                    }
                },
                I = class extends l {
                    constructor() {
                        super("MipmapBlurPass"), this.needsSwap = !1, this.renderTarget = new r.WebGLRenderTarget(1, 1, {
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "Upsampling.Mipmap0", this.downsamplingMipmaps = [], this.upsamplingMipmaps = [], this.downsamplingMaterial = new _, this.upsamplingMaterial = new P, this.resolution = new r.Vector2
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    get levels() {
                        return this.downsamplingMipmaps.length
                    }
                    set levels(e) {
                        if (this.levels !== e) {
                            const t = this.renderTarget;
                            this.dispose(), this.downsamplingMipmaps = [], this.upsamplingMipmaps = [];
                            for (let i = 0; i < e; ++i) {
                                const e = t.clone();
                                e.texture.name = "Downsampling.Mipmap" + i, this.downsamplingMipmaps.push(e)
                            }
                            this.upsamplingMipmaps.push(t);
                            for (let i = 1, r = e - 1; i < r; ++i) {
                                const e = t.clone();
                                e.texture.name = "Upsampling.Mipmap" + i, this.upsamplingMipmaps.push(e)
                            }
                            this.setSize(this.resolution.x, this.resolution.y)
                        }
                    }
                    get radius() {
                        return this.upsamplingMaterial.radius
                    }
                    set radius(e) {
                        this.upsamplingMaterial.radius = e
                    }
                    render(e, t, i, r, n) {
                        const {
                            scene: s,
                            camera: a
                        } = this, {
                            downsamplingMaterial: o,
                            upsamplingMaterial: l
                        } = this, {
                            downsamplingMipmaps: u,
                            upsamplingMipmaps: h
                        } = this;
                        let c = t;
                        this.fullscreenMaterial = o;
                        for (let t = 0, i = u.length; t < i; ++t) {
                            const i = u[t];
                            o.setSize(c.width, c.height), o.inputBuffer = c.texture, e.setRenderTarget(i), e.render(s, a), c = i
                        }
                        this.fullscreenMaterial = l;
                        for (let t = h.length - 1; t >= 0; --t) {
                            const i = h[t];
                            l.setSize(c.width, c.height), l.inputBuffer = c.texture, l.supportBuffer = u[t].texture, e.setRenderTarget(i), e.render(s, a), c = i
                        }
                    }
                    setSize(e, t) {
                        const i = this.resolution;
                        i.set(e, t);
                        let r = i.width,
                            n = i.height;
                        for (let e = 0, t = this.downsamplingMipmaps.length; e < t; ++e) r = Math.round(.5 * r), n = Math.round(.5 * n), this.downsamplingMipmaps[e].setSize(r, n), e < this.upsamplingMipmaps.length && this.upsamplingMipmaps[e].setSize(r, n)
                    }
                    initialize(e, t, i) {
                        if (void 0 !== i) {
                            const t = this.downsamplingMipmaps.concat(this.upsamplingMipmaps);
                            for (const e of t) e.texture.type = i;
                            if (i !== r.UnsignedByteType) this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1", this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1";
                            else if (null !== e && e.outputColorSpace === r.SRGBColorSpace)
                                for (const e of t) e.texture.colorSpace = r.SRGBColorSpace
                        }
                    }
                    dispose() {
                        super.dispose();
                        for (const e of this.downsamplingMipmaps.concat(this.upsamplingMipmaps)) e.dispose()
                    }
                },
                F = class extends r.EventDispatcher {
                    constructor(e, t, {
                        attributes: i = 0,
                        blendFunction: n = E.NORMAL,
                        defines: s = new Map,
                        uniforms: a = new Map,
                        extensions: o = null,
                        vertexShader: l = null
                    } = {}) {
                        super(), this.name = e, this.renderer = null, this.attributes = i, this.fragmentShader = t, this.vertexShader = l, this.defines = s, this.uniforms = a, this.extensions = o, this.blendMode = new M(n), this.blendMode.addEventListener("change", (e => this.setChanged())), this._inputColorSpace = r.LinearSRGBColorSpace, this._outputColorSpace = r.NoColorSpace
                    }
                    get inputColorSpace() {
                        return this._inputColorSpace
                    }
                    set inputColorSpace(e) {
                        this._inputColorSpace = e, this.setChanged()
                    }
                    get outputColorSpace() {
                        return this._outputColorSpace
                    }
                    set outputColorSpace(e) {
                        this._outputColorSpace = e, this.setChanged()
                    }
                    set mainScene(e) {}
                    set mainCamera(e) {}
                    getName() {
                        return this.name
                    }
                    setRenderer(e) {
                        this.renderer = e
                    }
                    getDefines() {
                        return this.defines
                    }
                    getUniforms() {
                        return this.uniforms
                    }
                    getExtensions() {
                        return this.extensions
                    }
                    getBlendMode() {
                        return this.blendMode
                    }
                    getAttributes() {
                        return this.attributes
                    }
                    setAttributes(e) {
                        this.attributes = e, this.setChanged()
                    }
                    getFragmentShader() {
                        return this.fragmentShader
                    }
                    setFragmentShader(e) {
                        this.fragmentShader = e, this.setChanged()
                    }
                    getVertexShader() {
                        return this.vertexShader
                    }
                    setVertexShader(e) {
                        this.vertexShader = e, this.setChanged()
                    }
                    setChanged() {
                        this.dispatchEvent({
                            type: "change"
                        })
                    }
                    setDepthTexture(e, t = r.BasicDepthPacking) {}
                    update(e, t, i) {}
                    setSize(e, t) {}
                    initialize(e, t, i) {}
                    dispose() {
                        for (const e of Object.keys(this)) {
                            const t = this[e];
                            (t instanceof r.WebGLRenderTarget || t instanceof r.Material || t instanceof r.Texture || t instanceof l) && this[e].dispose()
                        }
                    }
                },
                L = class extends F {
                    constructor({
                        blendFunction: e = E.SCREEN,
                        luminanceThreshold: t = .9,
                        luminanceSmoothing: i = .025,
                        mipmapBlur: n = !1,
                        intensity: s = 1,
                        radius: a = .85,
                        levels: o = 8,
                        kernelSize: l = 3,
                        resolutionScale: u = .5,
                        width: h = w.AUTO_SIZE,
                        height: c = w.AUTO_SIZE,
                        resolutionX: f = h,
                        resolutionY: d = c
                    } = {}) {
                        super("BloomEffect", "#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D map;\n#else\nuniform lowp sampler2D map;\n#endif\nuniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}", {
                            blendFunction: e,
                            uniforms: new Map([
                                ["map", new r.Uniform(null)],
                                ["intensity", new r.Uniform(s)]
                            ])
                        }), this.renderTarget = new r.WebGLRenderTarget(1, 1, {
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "Bloom.Target", this.blurPass = new D({
                            kernelSize: l
                        }), this.luminancePass = new C({
                            colorOutput: !0
                        }), this.luminanceMaterial.threshold = t, this.luminanceMaterial.smoothing = i, this.mipmapBlurPass = new I, this.mipmapBlurPass.enabled = n, this.mipmapBlurPass.radius = a, this.mipmapBlurPass.levels = o, this.uniforms.get("map").value = n ? this.mipmapBlurPass.texture : this.renderTarget.texture;
                        const p = this.resolution = new w(this, f, d, u);
                        p.addEventListener("change", (e => this.setSize(p.baseWidth, p.baseHeight)))
                    }
                    get texture() {
                        return this.mipmapBlurPass.enabled ? this.mipmapBlurPass.texture : this.renderTarget.texture
                    }
                    getTexture() {
                        return this.texture
                    }
                    getResolution() {
                        return this.resolution
                    }
                    getBlurPass() {
                        return this.blurPass
                    }
                    getLuminancePass() {
                        return this.luminancePass
                    }
                    get luminanceMaterial() {
                        return this.luminancePass.fullscreenMaterial
                    }
                    getLuminanceMaterial() {
                        return this.luminancePass.fullscreenMaterial
                    }
                    get width() {
                        return this.resolution.width
                    }
                    set width(e) {
                        this.resolution.preferredWidth = e
                    }
                    get height() {
                        return this.resolution.height
                    }
                    set height(e) {
                        this.resolution.preferredHeight = e
                    }
                    get dithering() {
                        return this.blurPass.dithering
                    }
                    set dithering(e) {
                        this.blurPass.dithering = e
                    }
                    get kernelSize() {
                        return this.blurPass.kernelSize
                    }
                    set kernelSize(e) {
                        this.blurPass.kernelSize = e
                    }
                    get distinction() {
                        return n.warn(this.name, "distinction was removed"), 1
                    }
                    set distinction(e) {
                        n.warn(this.name, "distinction was removed")
                    }
                    get intensity() {
                        return this.uniforms.get("intensity").value
                    }
                    set intensity(e) {
                        this.uniforms.get("intensity").value = e
                    }
                    getIntensity() {
                        return this.intensity
                    }
                    setIntensity(e) {
                        this.intensity = e
                    }
                    getResolutionScale() {
                        return this.resolution.scale
                    }
                    setResolutionScale(e) {
                        this.resolution.scale = e
                    }
                    update(e, t, i) {
                        const r = this.renderTarget,
                            n = this.luminancePass;
                        n.enabled ? (n.render(e, t), this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e, n.renderTarget) : this.blurPass.render(e, n.renderTarget, r)) : this.mipmapBlurPass.enabled ? this.mipmapBlurPass.render(e, t) : this.blurPass.render(e, t, r)
                    }
                    setSize(e, t) {
                        const i = this.resolution;
                        i.setBaseSize(e, t), this.renderTarget.setSize(i.width, i.height), this.blurPass.resolution.copy(i), this.luminancePass.setSize(e, t), this.mipmapBlurPass.setSize(e, t)
                    }
                    initialize(e, t, i) {
                        this.blurPass.initialize(e, t, i), this.luminancePass.initialize(e, t, i), this.mipmapBlurPass.initialize(e, t, i), void 0 !== i && (this.renderTarget.texture.type = i, null !== e && e.outputColorSpace === r.SRGBColorSpace && (this.renderTarget.texture.colorSpace = r.SRGBColorSpace))
                    }
                };

            function z(e, t, i) {
                return e * (t - i) - t
            }

            function N(e, t, i) {
                return Math.min(Math.max((e + t) / (t - i), 0), 1)
            }
            var H = class extends l {
                    constructor(e, t = "inputBuffer") {
                        super("ShaderPass"), this.fullscreenMaterial = e, this.input = t
                    }
                    setInput(e) {
                        this.input = e
                    }
                    render(e, t, i, r, n) {
                        const s = this.fullscreenMaterial.uniforms;
                        null !== t && void 0 !== s && void 0 !== s[this.input] && (s[this.input].value = t.texture), e.setRenderTarget(this.renderToScreen ? null : i), e.render(this.scene, this.camera)
                    }
                    initialize(e, t, i) {
                        void 0 !== i && i !== r.UnsignedByteType && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
                    }
                },
                O = class extends F {
                    constructor({
                        blendFunction: e = E.SRC
                    } = {}) {
                        super("FXAAEffect", "#define QUALITY(q) ((q) < 5 ? 1.0 : ((q) > 5 ? ((q) < 10 ? 2.0 : ((q) < 11 ? 4.0 : 8.0)) : 1.5))\n#define ONE_OVER_TWELVE 0.08333333333333333\nvarying vec2 vUvDown;varying vec2 vUvUp;varying vec2 vUvLeft;varying vec2 vUvRight;varying vec2 vUvDownLeft;varying vec2 vUvUpRight;varying vec2 vUvUpLeft;varying vec2 vUvDownRight;vec4 fxaa(const in vec4 inputColor,const in vec2 uv){float lumaCenter=luminance(inputColor.rgb);float lumaDown=luminance(texture2D(inputBuffer,vUvDown).rgb);float lumaUp=luminance(texture2D(inputBuffer,vUvUp).rgb);float lumaLeft=luminance(texture2D(inputBuffer,vUvLeft).rgb);float lumaRight=luminance(texture2D(inputBuffer,vUvRight).rgb);float lumaMin=min(lumaCenter,min(min(lumaDown,lumaUp),min(lumaLeft,lumaRight)));float lumaMax=max(lumaCenter,max(max(lumaDown,lumaUp),max(lumaLeft,lumaRight)));float lumaRange=lumaMax-lumaMin;if(lumaRange<max(EDGE_THRESHOLD_MIN,lumaMax*EDGE_THRESHOLD_MAX)){return inputColor;}float lumaDownLeft=luminance(texture2D(inputBuffer,vUvDownLeft).rgb);float lumaUpRight=luminance(texture2D(inputBuffer,vUvUpRight).rgb);float lumaUpLeft=luminance(texture2D(inputBuffer,vUvUpLeft).rgb);float lumaDownRight=luminance(texture2D(inputBuffer,vUvDownRight).rgb);float lumaDownUp=lumaDown+lumaUp;float lumaLeftRight=lumaLeft+lumaRight;float lumaLeftCorners=lumaDownLeft+lumaUpLeft;float lumaDownCorners=lumaDownLeft+lumaDownRight;float lumaRightCorners=lumaDownRight+lumaUpRight;float lumaUpCorners=lumaUpRight+lumaUpLeft;float edgeHorizontal=(abs(-2.0*lumaLeft+lumaLeftCorners)+abs(-2.0*lumaCenter+lumaDownUp)*2.0+abs(-2.0*lumaRight+lumaRightCorners));float edgeVertical=(abs(-2.0*lumaUp+lumaUpCorners)+abs(-2.0*lumaCenter+lumaLeftRight)*2.0+abs(-2.0*lumaDown+lumaDownCorners));bool isHorizontal=(edgeHorizontal>=edgeVertical);float stepLength=isHorizontal?texelSize.y:texelSize.x;float luma1=isHorizontal?lumaDown:lumaLeft;float luma2=isHorizontal?lumaUp:lumaRight;float gradient1=abs(luma1-lumaCenter);float gradient2=abs(luma2-lumaCenter);bool is1Steepest=gradient1>=gradient2;float gradientScaled=0.25*max(gradient1,gradient2);float lumaLocalAverage=0.0;if(is1Steepest){stepLength=-stepLength;lumaLocalAverage=0.5*(luma1+lumaCenter);}else{lumaLocalAverage=0.5*(luma2+lumaCenter);}vec2 currentUv=uv;if(isHorizontal){currentUv.y+=stepLength*0.5;}else{currentUv.x+=stepLength*0.5;}vec2 offset=isHorizontal?vec2(texelSize.x,0.0):vec2(0.0,texelSize.y);vec2 uv1=currentUv-offset*QUALITY(0);vec2 uv2=currentUv+offset*QUALITY(0);float lumaEnd1=luminance(texture2D(inputBuffer,uv1).rgb);float lumaEnd2=luminance(texture2D(inputBuffer,uv2).rgb);lumaEnd1-=lumaLocalAverage;lumaEnd2-=lumaLocalAverage;bool reached1=abs(lumaEnd1)>=gradientScaled;bool reached2=abs(lumaEnd2)>=gradientScaled;bool reachedBoth=reached1&&reached2;if(!reached1){uv1-=offset*QUALITY(1);}if(!reached2){uv2+=offset*QUALITY(1);}if(!reachedBoth){for(int i=2;i<SAMPLES;++i){if(!reached1){lumaEnd1=luminance(texture2D(inputBuffer,uv1).rgb);lumaEnd1=lumaEnd1-lumaLocalAverage;}if(!reached2){lumaEnd2=luminance(texture2D(inputBuffer,uv2).rgb);lumaEnd2=lumaEnd2-lumaLocalAverage;}reached1=abs(lumaEnd1)>=gradientScaled;reached2=abs(lumaEnd2)>=gradientScaled;reachedBoth=reached1&&reached2;if(!reached1){uv1-=offset*QUALITY(i);}if(!reached2){uv2+=offset*QUALITY(i);}if(reachedBoth){break;}}}float distance1=isHorizontal?(uv.x-uv1.x):(uv.y-uv1.y);float distance2=isHorizontal?(uv2.x-uv.x):(uv2.y-uv.y);bool isDirection1=distance1<distance2;float distanceFinal=min(distance1,distance2);float edgeThickness=(distance1+distance2);bool isLumaCenterSmaller=lumaCenter<lumaLocalAverage;bool correctVariation1=(lumaEnd1<0.0)!=isLumaCenterSmaller;bool correctVariation2=(lumaEnd2<0.0)!=isLumaCenterSmaller;bool correctVariation=isDirection1?correctVariation1:correctVariation2;float pixelOffset=-distanceFinal/edgeThickness+0.5;float finalOffset=correctVariation?pixelOffset:0.0;float lumaAverage=ONE_OVER_TWELVE*(2.0*(lumaDownUp+lumaLeftRight)+lumaLeftCorners+lumaRightCorners);float subPixelOffset1=clamp(abs(lumaAverage-lumaCenter)/lumaRange,0.0,1.0);float subPixelOffset2=(-2.0*subPixelOffset1+3.0)*subPixelOffset1*subPixelOffset1;float subPixelOffsetFinal=subPixelOffset2*subPixelOffset2*SUBPIXEL_QUALITY;finalOffset=max(finalOffset,subPixelOffsetFinal);vec2 finalUv=uv;if(isHorizontal){finalUv.y+=finalOffset*stepLength;}else{finalUv.x+=finalOffset*stepLength;}return texture2D(inputBuffer,finalUv);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){outputColor=fxaa(inputColor,uv);}", {
                            vertexShader: "varying vec2 vUvDown;varying vec2 vUvUp;varying vec2 vUvLeft;varying vec2 vUvRight;varying vec2 vUvDownLeft;varying vec2 vUvUpRight;varying vec2 vUvUpLeft;varying vec2 vUvDownRight;void mainSupport(const in vec2 uv){vUvDown=uv+vec2(0.0,-1.0)*texelSize;vUvUp=uv+vec2(0.0,1.0)*texelSize;vUvRight=uv+vec2(1.0,0.0)*texelSize;vUvLeft=uv+vec2(-1.0,0.0)*texelSize;vUvDownLeft=uv+vec2(-1.0,-1.0)*texelSize;vUvUpRight=uv+vec2(1.0,1.0)*texelSize;vUvUpLeft=uv+vec2(-1.0,1.0)*texelSize;vUvDownRight=uv+vec2(1.0,-1.0)*texelSize;}",
                            blendFunction: e,
                            defines: new Map([
                                ["EDGE_THRESHOLD_MIN", "0.0312"],
                                ["EDGE_THRESHOLD_MAX", "0.125"],
                                ["SUBPIXEL_QUALITY", "0.75"],
                                ["SAMPLES", "12"]
                            ])
                        })
                    }
                    get minEdgeThreshold() {
                        return Number(this.defines.get("EDGE_THRESHOLD_MIN"))
                    }
                    set minEdgeThreshold(e) {
                        this.defines.set("EDGE_THRESHOLD_MIN", e.toFixed(12)), this.setChanged()
                    }
                    get maxEdgeThreshold() {
                        return Number(this.defines.get("EDGE_THRESHOLD_MAX"))
                    }
                    set maxEdgeThreshold(e) {
                        this.defines.set("EDGE_THRESHOLD_MAX", e.toFixed(12)), this.setChanged()
                    }
                    get subpixelQuality() {
                        return Number(this.defines.get("SUBPIXEL_QUALITY"))
                    }
                    set subpixelQuality(e) {
                        this.defines.set("SUBPIXEL_QUALITY", e.toFixed(12)), this.setChanged()
                    }
                    get samples() {
                        return Number(this.defines.get("SAMPLES"))
                    }
                    set samples(e) {
                        this.defines.set("SAMPLES", e.toFixed(0)), this.setChanged()
                    }
                },
                G = class extends r.DataTexture {
                    constructor(e, t, i = r.LuminanceFormat, s = r.UnsignedByteType) {
                        super(function(e, t, i) {
                            const s = new Map([
                                [r.LuminanceFormat, 1],
                                [r.RedFormat, 1],
                                [r.RGFormat, 2],
                                [r.RGBAFormat, 4]
                            ]);
                            let a;
                            if (s.has(t) || n.error("Invalid noise texture format"), i === r.UnsignedByteType) {
                                a = new Uint8Array(e * s.get(t));
                                for (let e = 0, t = a.length; e < t; ++e) a[e] = 255 * Math.random() + .5
                            } else {
                                a = new Float32Array(e * s.get(t));
                                for (let e = 0, t = a.length; e < t; ++e) a[e] = Math.random()
                            }
                            return a
                        }(e * t, i, s), e, t, i, s), this.needsUpdate = !0
                    }
                },
                k = class extends l {
                    constructor(e, t, i = null) {
                        super("RenderPass", e, t), this.needsSwap = !1, this.clearPass = new m, this.overrideMaterialManager = null === i ? null : new T(i), this.ignoreBackground = !1, this.skipShadowMapUpdate = !1, this.selection = null
                    }
                    set mainScene(e) {
                        this.scene = e
                    }
                    set mainCamera(e) {
                        this.camera = e
                    }
                    get renderToScreen() {
                        return super.renderToScreen
                    }
                    set renderToScreen(e) {
                        super.renderToScreen = e, this.clearPass.renderToScreen = e
                    }
                    get overrideMaterial() {
                        const e = this.overrideMaterialManager;
                        return null !== e ? e.material : null
                    }
                    set overrideMaterial(e) {
                        const t = this.overrideMaterialManager;
                        null !== e ? null !== t ? t.setMaterial(e) : this.overrideMaterialManager = new T(e) : null !== t && (t.dispose(), this.overrideMaterialManager = null)
                    }
                    getOverrideMaterial() {
                        return this.overrideMaterial
                    }
                    setOverrideMaterial(e) {
                        this.overrideMaterial = e
                    }
                    get clear() {
                        return this.clearPass.enabled
                    }
                    set clear(e) {
                        this.clearPass.enabled = e
                    }
                    getSelection() {
                        return this.selection
                    }
                    setSelection(e) {
                        this.selection = e
                    }
                    isBackgroundDisabled() {
                        return this.ignoreBackground
                    }
                    setBackgroundDisabled(e) {
                        this.ignoreBackground = e
                    }
                    isShadowMapDisabled() {
                        return this.skipShadowMapUpdate
                    }
                    setShadowMapDisabled(e) {
                        this.skipShadowMapUpdate = e
                    }
                    getClearPass() {
                        return this.clearPass
                    }
                    render(e, t, i, r, n) {
                        const s = this.scene,
                            a = this.camera,
                            o = this.selection,
                            l = a.layers.mask,
                            u = s.background,
                            h = e.shadowMap.autoUpdate,
                            c = this.renderToScreen ? null : t;
                        null !== o && a.layers.set(o.getLayer()), this.skipShadowMapUpdate && (e.shadowMap.autoUpdate = !1), (this.ignoreBackground || null !== this.clearPass.overrideClearColor) && (s.background = null), this.clearPass.enabled && this.clearPass.render(e, t), e.setRenderTarget(c), null !== this.overrideMaterialManager ? this.overrideMaterialManager.render(e, s, a) : e.render(s, a), a.layers.mask = l, s.background = u, e.shadowMap.autoUpdate = h
                    }
                };
            Math.PI;
            var V = class extends r.ShaderMaterial {
                    constructor(e) {
                        super({
                            name: "SSAOMaterial",
                            defines: {
                                SAMPLES_INT: "0",
                                INV_SAMPLES_FLOAT: "0.0",
                                SPIRAL_TURNS: "0.0",
                                RADIUS: "1.0",
                                RADIUS_SQ: "1.0",
                                DISTANCE_SCALING: "1",
                                DEPTH_PACKING: "0"
                            },
                            uniforms: {
                                depthBuffer: new r.Uniform(null),
                                normalBuffer: new r.Uniform(null),
                                normalDepthBuffer: new r.Uniform(null),
                                noiseTexture: new r.Uniform(null),
                                inverseProjectionMatrix: new r.Uniform(new r.Matrix4),
                                projectionMatrix: new r.Uniform(new r.Matrix4),
                                texelSize: new r.Uniform(new r.Vector2),
                                cameraNearFar: new r.Uniform(new r.Vector2),
                                distanceCutoff: new r.Uniform(new r.Vector2),
                                proximityCutoff: new r.Uniform(new r.Vector2),
                                noiseScale: new r.Uniform(new r.Vector2),
                                minRadiusScale: new r.Uniform(.33),
                                intensity: new r.Uniform(1),
                                fade: new r.Uniform(.01),
                                bias: new r.Uniform(0)
                            },
                            blending: r.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <common>\n#include <packing>\n#ifdef NORMAL_DEPTH\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D normalDepthBuffer;\n#else\nuniform mediump sampler2D normalDepthBuffer;\n#endif\nfloat readDepth(const in vec2 uv){return texture2D(normalDepthBuffer,uv).a;}\n#else\nuniform lowp sampler2D normalBuffer;\n#if DEPTH_PACKING == 3201\nuniform lowp sampler2D depthBuffer;\n#elif defined(GL_FRAGMENT_PRECISION_HIGH)\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nfloat readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}\n#endif\nuniform lowp sampler2D noiseTexture;uniform mat4 inverseProjectionMatrix;uniform mat4 projectionMatrix;uniform vec2 texelSize;uniform vec2 cameraNearFar;uniform float intensity;uniform float minRadiusScale;uniform float fade;uniform float bias;uniform vec2 distanceCutoff;uniform vec2 proximityCutoff;varying vec2 vUv;varying vec2 vUv2;float getViewZ(const in float depth){\n#ifdef PERSPECTIVE_CAMERA\nreturn perspectiveDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);\n#else\nreturn orthographicDepthToViewZ(depth,cameraNearFar.x,cameraNearFar.y);\n#endif\n}vec3 getViewPosition(const in vec2 screenPosition,const in float depth,const in float viewZ){vec4 clipPosition=vec4(vec3(screenPosition,depth)*2.0-1.0,1.0);float clipW=projectionMatrix[2][3]*viewZ+projectionMatrix[3][3];clipPosition*=clipW;return(inverseProjectionMatrix*clipPosition).xyz;}float getAmbientOcclusion(const in vec3 p,const in vec3 n,const in float depth,const in vec2 uv){float radiusScale=1.0-smoothstep(0.0,distanceCutoff.y,depth);radiusScale=radiusScale*(1.0-minRadiusScale)+minRadiusScale;float radius=RADIUS*radiusScale;float noise=texture2D(noiseTexture,vUv2).r;float baseAngle=noise*PI2;float rings=SPIRAL_TURNS*PI2;float occlusion=0.0;int taps=0;for(int i=0;i<SAMPLES_INT;++i){float alpha=(float(i)+0.5)*INV_SAMPLES_FLOAT;float angle=alpha*rings+baseAngle;vec2 rotation=vec2(cos(angle),sin(angle));vec2 coords=alpha*radius*rotation*texelSize+uv;if(coords.s<0.0||coords.s>1.0||coords.t<0.0||coords.t>1.0){continue;}float sampleDepth=readDepth(coords);float viewZ=getViewZ(sampleDepth);\n#ifdef PERSPECTIVE_CAMERA\nfloat linearSampleDepth=viewZToOrthographicDepth(viewZ,cameraNearFar.x,cameraNearFar.y);\n#else\nfloat linearSampleDepth=sampleDepth;\n#endif\nfloat proximity=abs(depth-linearSampleDepth);if(proximity<proximityCutoff.y){float falloff=1.0-smoothstep(proximityCutoff.x,proximityCutoff.y,proximity);vec3 Q=getViewPosition(coords,sampleDepth,viewZ);vec3 v=Q-p;float vv=dot(v,v);float vn=dot(v,n)-bias;float f=max(RADIUS_SQ-vv,0.0)/RADIUS_SQ;occlusion+=(f*f*f*max(vn/(fade+vv),0.0))*falloff;}++taps;}return occlusion/(4.0*max(float(taps),1.0));}void main(){\n#ifdef NORMAL_DEPTH\nvec4 normalDepth=texture2D(normalDepthBuffer,vUv);\n#else\nvec4 normalDepth=vec4(texture2D(normalBuffer,vUv).xyz,readDepth(vUv));\n#endif\nfloat ao=0.0;float depth=normalDepth.a;float viewZ=getViewZ(depth);\n#ifdef PERSPECTIVE_CAMERA\nfloat linearDepth=viewZToOrthographicDepth(viewZ,cameraNearFar.x,cameraNearFar.y);\n#else\nfloat linearDepth=depth;\n#endif\nif(linearDepth<distanceCutoff.y){vec3 viewPosition=getViewPosition(vUv,depth,viewZ);vec3 viewNormal=unpackRGBToNormal(normalDepth.rgb);ao+=getAmbientOcclusion(viewPosition,viewNormal,linearDepth,vUv);float d=smoothstep(distanceCutoff.x,distanceCutoff.y,linearDepth);ao=mix(ao,0.0,d);\n#ifdef LEGACY_INTENSITY\nao=clamp(1.0-pow(1.0-ao,abs(intensity)),0.0,1.0);\n#endif\n}gl_FragColor.r=ao;}",
                            vertexShader: "uniform vec2 noiseScale;varying vec2 vUv;varying vec2 vUv2;void main(){vUv=position.xy*0.5+0.5;vUv2=vUv*noiseScale;gl_Position=vec4(position.xy,1.0,1.0);}"
                        }), this.copyCameraSettings(e), this.resolution = new r.Vector2, this.r = 1
                    }
                    get near() {
                        return this.uniforms.cameraNearFar.value.x
                    }
                    get far() {
                        return this.uniforms.cameraNearFar.value.y
                    }
                    set normalDepthBuffer(e) {
                        this.uniforms.normalDepthBuffer.value = e, null !== e ? this.defines.NORMAL_DEPTH = "1" : delete this.defines.NORMAL_DEPTH, this.needsUpdate = !0
                    }
                    setNormalDepthBuffer(e) {
                        this.normalDepthBuffer = e
                    }
                    set normalBuffer(e) {
                        this.uniforms.normalBuffer.value = e
                    }
                    setNormalBuffer(e) {
                        this.uniforms.normalBuffer.value = e
                    }
                    set depthBuffer(e) {
                        this.uniforms.depthBuffer.value = e
                    }
                    set depthPacking(e) {
                        this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = !0
                    }
                    setDepthBuffer(e, t = r.BasicDepthPacking) {
                        this.depthBuffer = e, this.depthPacking = t
                    }
                    set noiseTexture(e) {
                        this.uniforms.noiseTexture.value = e
                    }
                    setNoiseTexture(e) {
                        this.uniforms.noiseTexture.value = e
                    }
                    get samples() {
                        return Number(this.defines.SAMPLES_INT)
                    }
                    set samples(e) {
                        this.defines.SAMPLES_INT = e.toFixed(0), this.defines.INV_SAMPLES_FLOAT = (1 / e).toFixed(9), this.needsUpdate = !0
                    }
                    getSamples() {
                        return this.samples
                    }
                    setSamples(e) {
                        this.samples = e
                    }
                    get rings() {
                        return Number(this.defines.SPIRAL_TURNS)
                    }
                    set rings(e) {
                        this.defines.SPIRAL_TURNS = e.toFixed(1), this.needsUpdate = !0
                    }
                    getRings() {
                        return this.rings
                    }
                    setRings(e) {
                        this.rings = e
                    }
                    get intensity() {
                        return this.uniforms.intensity.value
                    }
                    set intensity(e) {
                        this.uniforms.intensity.value = e, void 0 === this.defines.LEGACY_INTENSITY && (this.defines.LEGACY_INTENSITY = "1", this.needsUpdate = !0)
                    }
                    getIntensity() {
                        return this.uniforms.intensity.value
                    }
                    setIntensity(e) {
                        this.uniforms.intensity.value = e
                    }
                    get fade() {
                        return this.uniforms.fade.value
                    }
                    set fade(e) {
                        this.uniforms.fade.value = e
                    }
                    getFade() {
                        return this.uniforms.fade.value
                    }
                    setFade(e) {
                        this.uniforms.fade.value = e
                    }
                    get bias() {
                        return this.uniforms.bias.value
                    }
                    set bias(e) {
                        this.uniforms.bias.value = e
                    }
                    getBias() {
                        return this.uniforms.bias.value
                    }
                    setBias(e) {
                        this.uniforms.bias.value = e
                    }
                    get minRadiusScale() {
                        return this.uniforms.minRadiusScale.value
                    }
                    set minRadiusScale(e) {
                        this.uniforms.minRadiusScale.value = e
                    }
                    getMinRadiusScale() {
                        return this.uniforms.minRadiusScale.value
                    }
                    setMinRadiusScale(e) {
                        this.uniforms.minRadiusScale.value = e
                    }
                    updateRadius() {
                        const e = this.r * this.resolution.height;
                        this.defines.RADIUS = e.toFixed(11), this.defines.RADIUS_SQ = (e * e).toFixed(11), this.needsUpdate = !0
                    }
                    get radius() {
                        return this.r
                    }
                    set radius(e) {
                        this.r = Math.min(Math.max(e, 1e-6), 1), this.updateRadius()
                    }
                    getRadius() {
                        return this.radius
                    }
                    setRadius(e) {
                        this.radius = e
                    }
                    get distanceScaling() {
                        return !0
                    }
                    set distanceScaling(e) {}
                    isDistanceScalingEnabled() {
                        return this.distanceScaling
                    }
                    setDistanceScalingEnabled(e) {
                        this.distanceScaling = e
                    }
                    get distanceThreshold() {
                        return this.uniforms.distanceCutoff.value.x
                    }
                    set distanceThreshold(e) {
                        this.uniforms.distanceCutoff.value.set(Math.min(Math.max(e, 0), 1), Math.min(Math.max(e + this.distanceFalloff, 0), 1))
                    }
                    get worldDistanceThreshold() {
                        return -z(this.distanceThreshold, this.near, this.far)
                    }
                    set worldDistanceThreshold(e) {
                        this.distanceThreshold = N(-e, this.near, this.far)
                    }
                    get distanceFalloff() {
                        return this.uniforms.distanceCutoff.value.y - this.distanceThreshold
                    }
                    set distanceFalloff(e) {
                        this.uniforms.distanceCutoff.value.y = Math.min(Math.max(this.distanceThreshold + e, 0), 1)
                    }
                    get worldDistanceFalloff() {
                        return -z(this.distanceFalloff, this.near, this.far)
                    }
                    set worldDistanceFalloff(e) {
                        this.distanceFalloff = N(-e, this.near, this.far)
                    }
                    setDistanceCutoff(e, t) {
                        this.uniforms.distanceCutoff.value.set(Math.min(Math.max(e, 0), 1), Math.min(Math.max(e + t, 0), 1))
                    }
                    get proximityThreshold() {
                        return this.uniforms.proximityCutoff.value.x
                    }
                    set proximityThreshold(e) {
                        this.uniforms.proximityCutoff.value.set(Math.min(Math.max(e, 0), 1), Math.min(Math.max(e + this.proximityFalloff, 0), 1))
                    }
                    get worldProximityThreshold() {
                        return -z(this.proximityThreshold, this.near, this.far)
                    }
                    set worldProximityThreshold(e) {
                        this.proximityThreshold = N(-e, this.near, this.far)
                    }
                    get proximityFalloff() {
                        return this.uniforms.proximityCutoff.value.y - this.proximityThreshold
                    }
                    set proximityFalloff(e) {
                        this.uniforms.proximityCutoff.value.y = Math.min(Math.max(this.proximityThreshold + e, 0), 1)
                    }
                    get worldProximityFalloff() {
                        return -z(this.proximityFalloff, this.near, this.far)
                    }
                    set worldProximityFalloff(e) {
                        this.proximityFalloff = N(-e, this.near, this.far)
                    }
                    setProximityCutoff(e, t) {
                        this.uniforms.proximityCutoff.value.set(Math.min(Math.max(e, 0), 1), Math.min(Math.max(e + t, 0), 1))
                    }
                    setTexelSize(e, t) {
                        this.uniforms.texelSize.value.set(e, t)
                    }
                    adoptCameraSettings(e) {
                        this.copyCameraSettings(e)
                    }
                    copyCameraSettings(e) {
                        e && (this.uniforms.cameraNearFar.value.set(e.near, e.far), this.uniforms.projectionMatrix.value.copy(e.projectionMatrix), this.uniforms.inverseProjectionMatrix.value.copy(e.projectionMatrix).invert(), e instanceof r.PerspectiveCamera ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = !0)
                    }
                    setSize(e, t) {
                        const i = this.uniforms,
                            r = i.noiseTexture.value;
                        null !== r && i.noiseScale.value.set(e / r.image.width, t / r.image.height), i.texelSize.value.set(1 / e, 1 / t), this.resolution.set(e, t), this.updateRadius()
                    }
                },
                W = class extends r.ShaderMaterial {
                    constructor() {
                        super({
                            name: "DepthDownsamplingMaterial",
                            defines: {
                                DEPTH_PACKING: "0"
                            },
                            uniforms: {
                                depthBuffer: new r.Uniform(null),
                                normalBuffer: new r.Uniform(null),
                                texelSize: new r.Uniform(new r.Vector2)
                            },
                            blending: r.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            fragmentShader: "#include <packing>\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\n#ifdef DOWNSAMPLE_NORMALS\nuniform lowp sampler2D normalBuffer;\n#endif\nvarying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;float readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}int findBestDepth(const in float samples[4]){float c=(samples[0]+samples[1]+samples[2]+samples[3])*0.25;float distances[4];distances[0]=abs(c-samples[0]);distances[1]=abs(c-samples[1]);distances[2]=abs(c-samples[2]);distances[3]=abs(c-samples[3]);float maxDistance=max(max(distances[0],distances[1]),max(distances[2],distances[3]));int remaining[3];int rejected[3];int i,j,k;for(i=0,j=0,k=0;i<4;++i){if(distances[i]<maxDistance){remaining[j++]=i;}else{rejected[k++]=i;}}for(;j<3;++j){remaining[j]=rejected[--k];}vec3 s=vec3(samples[remaining[0]],samples[remaining[1]],samples[remaining[2]]);c=(s.x+s.y+s.z)/3.0;distances[0]=abs(c-s.x);distances[1]=abs(c-s.y);distances[2]=abs(c-s.z);float minDistance=min(distances[0],min(distances[1],distances[2]));for(i=0;i<3;++i){if(distances[i]==minDistance){break;}}return remaining[i];}void main(){float d[4];d[0]=readDepth(vUv0);d[1]=readDepth(vUv1);d[2]=readDepth(vUv2);d[3]=readDepth(vUv3);int index=findBestDepth(d);\n#ifdef DOWNSAMPLE_NORMALS\nvec3 n[4];n[0]=texture2D(normalBuffer,vUv0).rgb;n[1]=texture2D(normalBuffer,vUv1).rgb;n[2]=texture2D(normalBuffer,vUv2).rgb;n[3]=texture2D(normalBuffer,vUv3).rgb;\n#else\nvec3 n[4];n[0]=vec3(0.0);n[1]=vec3(0.0);n[2]=vec3(0.0);n[3]=vec3(0.0);\n#endif\ngl_FragColor=vec4(n[index],d[index]);}",
                            vertexShader: "uniform vec2 texelSize;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vUv0=uv;vUv1=vec2(uv.x,uv.y+texelSize.y);vUv2=vec2(uv.x+texelSize.x,uv.y);vUv3=uv+texelSize;gl_Position=vec4(position.xy,1.0,1.0);}"
                        })
                    }
                    set depthBuffer(e) {
                        this.uniforms.depthBuffer.value = e
                    }
                    set depthPacking(e) {
                        this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = !0
                    }
                    setDepthBuffer(e, t = r.BasicDepthPacking) {
                        this.depthBuffer = e, this.depthPacking = t
                    }
                    set normalBuffer(e) {
                        this.uniforms.normalBuffer.value = e, null !== e ? this.defines.DOWNSAMPLE_NORMALS = "1" : delete this.defines.DOWNSAMPLE_NORMALS, this.needsUpdate = !0
                    }
                    setNormalBuffer(e) {
                        this.normalBuffer = e
                    }
                    setTexelSize(e, t) {
                        this.uniforms.texelSize.value.set(e, t)
                    }
                    setSize(e, t) {
                        this.uniforms.texelSize.value.set(1 / e, 1 / t)
                    }
                },
                Z = class extends l {
                    constructor({
                        normalBuffer: e = null,
                        resolutionScale: t = .5,
                        width: i = w.AUTO_SIZE,
                        height: n = w.AUTO_SIZE,
                        resolutionX: s = i,
                        resolutionY: a = n
                    } = {}) {
                        super("DepthDownsamplingPass");
                        const o = new W;
                        o.normalBuffer = e, this.fullscreenMaterial = o, this.needsDepthTexture = !0, this.needsSwap = !1, this.renderTarget = new r.WebGLRenderTarget(1, 1, {
                            minFilter: r.NearestFilter,
                            magFilter: r.NearestFilter,
                            depthBuffer: !1,
                            type: r.FloatType
                        }), this.renderTarget.texture.name = "DepthDownsamplingPass.Target", this.renderTarget.texture.generateMipmaps = !1;
                        const l = this.resolution = new w(this, s, a, t);
                        l.addEventListener("change", (e => this.setSize(l.baseWidth, l.baseHeight)))
                    }
                    get texture() {
                        return this.renderTarget.texture
                    }
                    getTexture() {
                        return this.renderTarget.texture
                    }
                    getResolution() {
                        return this.resolution
                    }
                    setDepthTexture(e, t = r.BasicDepthPacking) {
                        this.fullscreenMaterial.depthBuffer = e, this.fullscreenMaterial.depthPacking = t
                    }
                    render(e, t, i, r, n) {
                        e.setRenderTarget(this.renderToScreen ? null : this.renderTarget), e.render(this.scene, this.camera)
                    }
                    setSize(e, t) {
                        const i = this.resolution;
                        i.setBaseSize(e, t), this.renderTarget.setSize(i.width, i.height), this.fullscreenMaterial.setSize(e, t)
                    }
                    initialize(e, t, i) {
                        const r = e.getContext();
                        if (!r.getExtension("EXT_color_buffer_float") && !r.getExtension("EXT_color_buffer_half_float")) throw new Error("Rendering to float texture is not supported.")
                    }
                },
                X = class extends F {
                    constructor(e, t, {
                        blendFunction: i = E.MULTIPLY,
                        samples: n = 9,
                        rings: s = 7,
                        normalDepthBuffer: a = null,
                        depthAwareUpsampling: o = !0,
                        worldDistanceThreshold: l,
                        worldDistanceFalloff: u,
                        worldProximityThreshold: h,
                        worldProximityFalloff: c,
                        distanceThreshold: f = .97,
                        distanceFalloff: d = .03,
                        rangeThreshold: p = 5e-4,
                        rangeFalloff: v = .001,
                        minRadiusScale: m = .1,
                        luminanceInfluence: g = .7,
                        radius: S = .1825,
                        intensity: x = 1,
                        bias: y = .025,
                        fade: T = .01,
                        color: U = null,
                        resolutionScale: R = 1,
                        width: M = w.AUTO_SIZE,
                        height: A = w.AUTO_SIZE,
                        resolutionX: B = M,
                        resolutionY: D = A
                    } = {}) {
                        super("SSAOEffect", "uniform lowp sampler2D aoBuffer;uniform float luminanceInfluence;uniform float intensity;\n#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH)\n#ifdef GL_FRAGMENT_PRECISION_HIGH\nuniform highp sampler2D normalDepthBuffer;\n#else\nuniform mediump sampler2D normalDepthBuffer;\n#endif\n#endif\n#ifdef COLORIZE\nuniform vec3 color;\n#endif\nvoid mainImage(const in vec4 inputColor,const in vec2 uv,const in float depth,out vec4 outputColor){float aoLinear=texture2D(aoBuffer,uv).r;\n#if defined(DEPTH_AWARE_UPSAMPLING) && defined(NORMAL_DEPTH) && __VERSION__ == 300\nvec4 normalDepth[4];normalDepth[0]=textureOffset(normalDepthBuffer,uv,ivec2(0,0));normalDepth[1]=textureOffset(normalDepthBuffer,uv,ivec2(0,1));normalDepth[2]=textureOffset(normalDepthBuffer,uv,ivec2(1,0));normalDepth[3]=textureOffset(normalDepthBuffer,uv,ivec2(1,1));float dot01=dot(normalDepth[0].rgb,normalDepth[1].rgb);float dot02=dot(normalDepth[0].rgb,normalDepth[2].rgb);float dot03=dot(normalDepth[0].rgb,normalDepth[3].rgb);float minDot=min(dot01,min(dot02,dot03));float s=step(THRESHOLD,minDot);float smallestDistance=1.0;int index;for(int i=0;i<4;++i){float distance=abs(depth-normalDepth[i].a);if(distance<smallestDistance){smallestDistance=distance;index=i;}}ivec2 offsets[4];offsets[0]=ivec2(0,0);offsets[1]=ivec2(0,1);offsets[2]=ivec2(1,0);offsets[3]=ivec2(1,1);ivec2 coord=ivec2(uv*vec2(textureSize(aoBuffer,0)))+offsets[index];float aoNearest=texelFetch(aoBuffer,coord,0).r;float ao=mix(aoNearest,aoLinear,s);\n#else\nfloat ao=aoLinear;\n#endif\nfloat l=luminance(inputColor.rgb);ao=mix(ao,0.0,l*luminanceInfluence);ao=clamp(ao*intensity,0.0,1.0);\n#ifdef COLORIZE\noutputColor=vec4(1.0-ao*(1.0-color),inputColor.a);\n#else\noutputColor=vec4(vec3(1.0-ao),inputColor.a);\n#endif\n}", {
                            blendFunction: i,
                            attributes: 1,
                            defines: new Map([
                                ["THRESHOLD", "0.997"]
                            ]),
                            uniforms: new Map([
                                ["aoBuffer", new r.Uniform(null)],
                                ["normalDepthBuffer", new r.Uniform(a)],
                                ["luminanceInfluence", new r.Uniform(g)],
                                ["color", new r.Uniform(null)],
                                ["intensity", new r.Uniform(x)],
                                ["scale", new r.Uniform(0)]
                            ])
                        }), this.renderTarget = new r.WebGLRenderTarget(1, 1, {
                            depthBuffer: !1
                        }), this.renderTarget.texture.name = "AO.Target", this.uniforms.get("aoBuffer").value = this.renderTarget.texture;
                        const b = this.resolution = new w(this, B, D, R);
                        b.addEventListener("change", (e => this.setSize(b.baseWidth, b.baseHeight))), this.camera = e, this.depthDownsamplingPass = new Z({
                            normalBuffer: t,
                            resolutionScale: R
                        }), this.depthDownsamplingPass.enabled = null === a, this.ssaoPass = new H(new V(e));
                        const C = new G(64, 64, r.RGBAFormat);
                        C.wrapS = C.wrapT = r.RepeatWrapping;
                        const _ = this.ssaoMaterial;
                        _.normalBuffer = t, _.noiseTexture = C, _.minRadiusScale = m, _.samples = n, _.radius = S, _.rings = s, _.fade = T, _.bias = y, _.distanceThreshold = f, _.distanceFalloff = d, _.proximityThreshold = p, _.proximityFalloff = v, void 0 !== l && (_.worldDistanceThreshold = l), void 0 !== u && (_.worldDistanceFalloff = u), void 0 !== h && (_.worldProximityThreshold = h), void 0 !== c && (_.worldProximityFalloff = c), null !== a && (this.ssaoMaterial.normalDepthBuffer = a, this.defines.set("NORMAL_DEPTH", "1")), this.depthAwareUpsampling = o, this.color = U
                    }
                    set mainCamera(e) {
                        this.camera = e, this.ssaoMaterial.copyCameraSettings(e)
                    }
                    get normalBuffer() {
                        return this.ssaoMaterial.normalBuffer
                    }
                    set normalBuffer(e) {
                        this.ssaoMaterial.normalBuffer = e, this.depthDownsamplingPass.fullscreenMaterial.normalBuffer = e
                    }
                    getResolution() {
                        return this.resolution
                    }
                    get ssaoMaterial() {
                        return this.ssaoPass.fullscreenMaterial
                    }
                    getSSAOMaterial() {
                        return this.ssaoMaterial
                    }
                    get samples() {
                        return this.ssaoMaterial.samples
                    }
                    set samples(e) {
                        this.ssaoMaterial.samples = e
                    }
                    get rings() {
                        return this.ssaoMaterial.rings
                    }
                    set rings(e) {
                        this.ssaoMaterial.rings = e
                    }
                    get radius() {
                        return this.ssaoMaterial.radius
                    }
                    set radius(e) {
                        this.ssaoMaterial.radius = e
                    }
                    get depthAwareUpsampling() {
                        return this.defines.has("DEPTH_AWARE_UPSAMPLING")
                    }
                    set depthAwareUpsampling(e) {
                        this.depthAwareUpsampling !== e && (e ? this.defines.set("DEPTH_AWARE_UPSAMPLING", "1") : this.defines.delete("DEPTH_AWARE_UPSAMPLING"), this.setChanged())
                    }
                    isDepthAwareUpsamplingEnabled() {
                        return this.depthAwareUpsampling
                    }
                    setDepthAwareUpsamplingEnabled(e) {
                        this.depthAwareUpsampling = e
                    }
                    get distanceScaling() {
                        return !0
                    }
                    set distanceScaling(e) {}
                    get color() {
                        return this.uniforms.get("color").value
                    }
                    set color(e) {
                        const t = this.uniforms,
                            i = this.defines;
                        null !== e ? i.has("COLORIZE") ? t.get("color").value.set(e) : (i.set("COLORIZE", "1"), t.get("color").value = new r.Color(e), this.setChanged()) : i.has("COLORIZE") && (i.delete("COLORIZE"), t.get("color").value = null, this.setChanged())
                    }
                    get luminanceInfluence() {
                        return this.uniforms.get("luminanceInfluence").value
                    }
                    set luminanceInfluence(e) {
                        this.uniforms.get("luminanceInfluence").value = e
                    }
                    get intensity() {
                        return this.uniforms.get("intensity").value
                    }
                    set intensity(e) {
                        this.uniforms.get("intensity").value = e
                    }
                    getColor() {
                        return this.color
                    }
                    setColor(e) {
                        this.color = e
                    }
                    setDistanceCutoff(e, t) {
                        this.ssaoMaterial.distanceThreshold = e, this.ssaoMaterial.distanceFalloff = t
                    }
                    setProximityCutoff(e, t) {
                        this.ssaoMaterial.proximityThreshold = e, this.ssaoMaterial.proximityFalloff = t
                    }
                    setDepthTexture(e, t = r.BasicDepthPacking) {
                        this.depthDownsamplingPass.setDepthTexture(e, t), this.ssaoMaterial.depthBuffer = e, this.ssaoMaterial.depthPacking = t
                    }
                    update(e, t, i) {
                        const r = this.renderTarget;
                        this.depthDownsamplingPass.enabled && this.depthDownsamplingPass.render(e), this.ssaoPass.render(e, null, r)
                    }
                    setSize(e, t) {
                        const i = this.resolution;
                        i.setBaseSize(e, t);
                        const r = i.width,
                            n = i.height;
                        this.ssaoMaterial.copyCameraSettings(this.camera), this.ssaoMaterial.setSize(r, n), this.renderTarget.setSize(r, n), this.depthDownsamplingPass.resolution.scale = i.scale, this.depthDownsamplingPass.setSize(e, t)
                    }
                    initialize(e, t, i) {
                        try {
                            let r = this.uniforms.get("normalDepthBuffer").value;
                            null === r && (this.depthDownsamplingPass.initialize(e, t, i), r = this.depthDownsamplingPass.texture, this.uniforms.get("normalDepthBuffer").value = r, this.ssaoMaterial.normalDepthBuffer = r, this.defines.set("NORMAL_DEPTH", "1"))
                        } catch (e) {
                            this.depthDownsamplingPass.enabled = !1
                        }
                    }
                },
                Y = class extends r.ShaderMaterial {
                    constructor(e, t, i, n, s = !1) {
                        super({
                            name: "EffectMaterial",
                            defines: {
                                THREE_REVISION: r.REVISION.replace(/\D+/g, ""),
                                DEPTH_PACKING: "0",
                                ENCODE_OUTPUT: "1"
                            },
                            uniforms: {
                                inputBuffer: new r.Uniform(null),
                                depthBuffer: new r.Uniform(null),
                                resolution: new r.Uniform(new r.Vector2),
                                texelSize: new r.Uniform(new r.Vector2),
                                cameraNear: new r.Uniform(.3),
                                cameraFar: new r.Uniform(1e3),
                                aspect: new r.Uniform(1),
                                time: new r.Uniform(0)
                            },
                            blending: r.NoBlending,
                            toneMapped: !1,
                            depthWrite: !1,
                            depthTest: !1,
                            dithering: s
                        }), e && this.setShaderParts(e), t && this.setDefines(t), i && this.setUniforms(i), this.copyCameraSettings(n)
                    }
                    set inputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    setInputBuffer(e) {
                        this.uniforms.inputBuffer.value = e
                    }
                    get depthBuffer() {
                        return this.uniforms.depthBuffer.value
                    }
                    set depthBuffer(e) {
                        this.uniforms.depthBuffer.value = e
                    }
                    get depthPacking() {
                        return Number(this.defines.DEPTH_PACKING)
                    }
                    set depthPacking(e) {
                        this.defines.DEPTH_PACKING = e.toFixed(0), this.needsUpdate = !0
                    }
                    setDepthBuffer(e, t = r.BasicDepthPacking) {
                        this.depthBuffer = e, this.depthPacking = t
                    }
                    setShaderData(e) {
                        this.setShaderParts(e.shaderParts), this.setDefines(e.defines), this.setUniforms(e.uniforms), this.setExtensions(e.extensions)
                    }
                    setShaderParts(e) {
                        return this.fragmentShader = "#include <common>\n#include <packing>\n#include <dithering_pars_fragment>\n#define packFloatToRGBA(v) packDepthToRGBA(v)\n#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)\n#ifdef FRAMEBUFFER_PRECISION_HIGH\nuniform mediump sampler2D inputBuffer;\n#else\nuniform lowp sampler2D inputBuffer;\n#endif\n#if DEPTH_PACKING == 3201\nuniform lowp sampler2D depthBuffer;\n#elif defined(GL_FRAGMENT_PRECISION_HIGH)\nuniform highp sampler2D depthBuffer;\n#else\nuniform mediump sampler2D depthBuffer;\n#endif\nuniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;\n#if THREE_REVISION < 143\n#define luminance(v) linearToRelativeLuminance(v)\n#endif\n#if THREE_REVISION >= 137\nvec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}\n#endif\nfloat readDepth(const in vec2 uv){\n#if DEPTH_PACKING == 3201\nreturn unpackRGBAToDepth(texture2D(depthBuffer,uv));\n#else\nreturn texture2D(depthBuffer,uv).r;\n#endif\n}float getViewZ(const in float depth){\n#ifdef PERSPECTIVE_CAMERA\nreturn perspectiveDepthToViewZ(depth,cameraNear,cameraFar);\n#else\nreturn orthographicDepthToViewZ(depth,cameraNear,cameraFar);\n#endif\n}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;\n#ifdef ENCODE_OUTPUT\n#include <colorspace_fragment>\n#endif\n#include <dithering_fragment>\n}".replace(x.FRAGMENT_HEAD, e.get(x.FRAGMENT_HEAD) || "").replace(x.FRAGMENT_MAIN_UV, e.get(x.FRAGMENT_MAIN_UV) || "").replace(x.FRAGMENT_MAIN_IMAGE, e.get(x.FRAGMENT_MAIN_IMAGE) || ""), this.vertexShader = "uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}".replace(x.VERTEX_HEAD, e.get(x.VERTEX_HEAD) || "").replace(x.VERTEX_MAIN_SUPPORT, e.get(x.VERTEX_MAIN_SUPPORT) || ""), this.fragmentShader = c(this.fragmentShader), this.needsUpdate = !0, this
                    }
                    setDefines(e) {
                        for (const t of e.entries()) this.defines[t[0]] = t[1];
                        return this.needsUpdate = !0, this
                    }
                    setUniforms(e) {
                        for (const t of e.entries()) this.uniforms[t[0]] = t[1];
                        return this
                    }
                    setExtensions(e) {
                        this.extensions = {};
                        for (const t of e) this.extensions[t] = !0;
                        return this
                    }
                    get encodeOutput() {
                        return void 0 !== this.defines.ENCODE_OUTPUT
                    }
                    set encodeOutput(e) {
                        this.encodeOutput !== e && (e ? this.defines.ENCODE_OUTPUT = "1" : delete this.defines.ENCODE_OUTPUT, this.needsUpdate = !0)
                    }
                    isOutputEncodingEnabled(e) {
                        return this.encodeOutput
                    }
                    setOutputEncodingEnabled(e) {
                        this.encodeOutput = e
                    }
                    get time() {
                        return this.uniforms.time.value
                    }
                    set time(e) {
                        this.uniforms.time.value = e
                    }
                    setDeltaTime(e) {
                        this.uniforms.time.value += e
                    }
                    adoptCameraSettings(e) {
                        this.copyCameraSettings(e)
                    }
                    copyCameraSettings(e) {
                        e && (this.uniforms.cameraNear.value = e.near, this.uniforms.cameraFar.value = e.far, e instanceof r.PerspectiveCamera ? this.defines.PERSPECTIVE_CAMERA = "1" : delete this.defines.PERSPECTIVE_CAMERA, this.needsUpdate = !0)
                    }
                    setSize(e, t) {
                        const i = this.uniforms;
                        i.resolution.value.set(e, t), i.texelSize.value.set(1 / e, 1 / t), i.aspect.value = e / t
                    }
                    static get Section() {
                        return x
                    }
                };

            function Q(e, t, i) {
                for (const r of t) {
                    const t = "$1" + e + r.charAt(0).toUpperCase() + r.slice(1),
                        n = new RegExp("([^\\.])(\\b" + r + "\\b)", "g");
                    for (const e of i.entries()) null !== e[1] && i.set(e[0], e[1].replace(n, t))
                }
            }

            function j(e, t, i) {
                let n = t.getFragmentShader(),
                    s = t.getVertexShader();
                const a = void 0 !== n && /mainImage/.test(n),
                    o = void 0 !== n && /mainUv/.test(n);
                if (i.attributes |= t.getAttributes(), void 0 === n) throw new Error(`Missing fragment shader (${t.name})`);
                if (o && 0 != (2 & i.attributes)) throw new Error(`Effects that transform UVs are incompatible with convolution effects (${t.name})`);
                if (!a && !o) throw new Error(`Could not find mainImage or mainUv function (${t.name})`);
                {
                    const l = /\w+\s+(\w+)\([\w\s,]*\)\s*{/g,
                        u = i.shaderParts;
                    let h = u.get(x.FRAGMENT_HEAD) || "",
                        c = u.get(x.FRAGMENT_MAIN_UV) || "",
                        f = u.get(x.FRAGMENT_MAIN_IMAGE) || "",
                        d = u.get(x.VERTEX_HEAD) || "",
                        p = u.get(x.VERTEX_MAIN_SUPPORT) || "";
                    const v = new Set,
                        m = new Set;
                    if (o && (c += `\t${e}MainUv(UV);\n`, i.uvTransformation = !0), null !== s && /mainSupport/.test(s)) {
                        const t = /mainSupport *\([\w\s]*?uv\s*?\)/.test(s);
                        p += `\t${e}MainSupport(`, p += t ? "vUv);\n" : ");\n";
                        for (const e of s.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))
                            for (const t of e[1].split(/\s*,\s*/)) i.varyings.add(t), v.add(t), m.add(t);
                        for (const e of s.matchAll(l)) m.add(e[1])
                    }
                    for (const e of n.matchAll(l)) m.add(e[1]);
                    for (const e of t.defines.keys()) m.add(e.replace(/\([\w\s,]*\)/g, ""));
                    for (const e of t.uniforms.keys()) m.add(e);
                    m.delete("while"), m.delete("for"), m.delete("if"), t.uniforms.forEach(((t, r) => i.uniforms.set(e + r.charAt(0).toUpperCase() + r.slice(1), t))), t.defines.forEach(((t, r) => i.defines.set(e + r.charAt(0).toUpperCase() + r.slice(1), t)));
                    const g = new Map([
                        ["fragment", n],
                        ["vertex", s]
                    ]);
                    Q(e, m, i.defines), Q(e, m, g), n = g.get("fragment"), s = g.get("vertex");
                    const S = t.blendMode;
                    if (i.blendModes.set(S.blendFunction, S), a) {
                        null !== t.inputColorSpace && t.inputColorSpace !== i.colorSpace && (f += t.inputColorSpace === r.SRGBColorSpace ? "color0 = LinearTosRGB(color0);\n\t" : "color0 = sRGBToLinear(color0);\n\t"), t.outputColorSpace !== r.NoColorSpace ? i.colorSpace = t.outputColorSpace : null !== t.inputColorSpace && (i.colorSpace = t.inputColorSpace);
                        const s = /MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;
                        f += `${e}MainImage(color0, UV, `, 0 != (1 & i.attributes) && s.test(n) && (f += "depth, ", i.readDepth = !0), f += "color1);\n\t";
                        const a = e + "BlendOpacity";
                        i.uniforms.set(a, S.opacity), f += `color0 = blend${S.blendFunction}(color0, color1, ${a});\n\n\t`, h += `uniform float ${a};\n\n`
                    }
                    if (h += n + "\n", null !== s && (d += s + "\n"), u.set(x.FRAGMENT_HEAD, h), u.set(x.FRAGMENT_MAIN_UV, c), u.set(x.FRAGMENT_MAIN_IMAGE, f), u.set(x.VERTEX_HEAD, d), u.set(x.VERTEX_MAIN_SUPPORT, p), null !== t.extensions)
                        for (const e of t.extensions) i.extensions.add(e)
                }
            }
            new Float32Array([255 / 256 / 256 ** 3, 255 / 256 / 65536, 255 / 256 / 256, 255 / 256]);
            var K = class extends l {
                constructor(e, ...t) {
                    super("EffectPass"), this.fullscreenMaterial = new Y(null, null, null, e), this.listener = e => this.handleEvent(e), this.effects = [], this.setEffects(t), this.skipRendering = !1, this.minTime = 1, this.maxTime = Number.POSITIVE_INFINITY, this.timeScale = 1
                }
                set mainScene(e) {
                    for (const t of this.effects) t.mainScene = e
                }
                set mainCamera(e) {
                    this.fullscreenMaterial.copyCameraSettings(e);
                    for (const t of this.effects) t.mainCamera = e
                }
                get encodeOutput() {
                    return this.fullscreenMaterial.encodeOutput
                }
                set encodeOutput(e) {
                    this.fullscreenMaterial.encodeOutput = e
                }
                get dithering() {
                    return this.fullscreenMaterial.dithering
                }
                set dithering(e) {
                    const t = this.fullscreenMaterial;
                    t.dithering = e, t.needsUpdate = !0
                }
                setEffects(e) {
                    for (const e of this.effects) e.removeEventListener("change", this.listener);
                    this.effects = e.sort(((e, t) => t.attributes - e.attributes));
                    for (const e of this.effects) e.addEventListener("change", this.listener)
                }
                updateMaterial() {
                    const e = new class {
                        constructor() {
                            this.shaderParts = new Map([
                                [x.FRAGMENT_HEAD, null],
                                [x.FRAGMENT_MAIN_UV, null],
                                [x.FRAGMENT_MAIN_IMAGE, null],
                                [x.VERTEX_HEAD, null],
                                [x.VERTEX_MAIN_SUPPORT, null]
                            ]), this.defines = new Map, this.uniforms = new Map, this.blendModes = new Map, this.extensions = new Set, this.attributes = 0, this.varyings = new Set, this.uvTransformation = !1, this.readDepth = !1, this.colorSpace = r.LinearSRGBColorSpace
                        }
                    };
                    let t = 0;
                    for (const i of this.effects)
                        if (i.blendMode.blendFunction === E.DST) e.attributes |= 1 & i.getAttributes();
                        else {
                            if (0 != (e.attributes & i.getAttributes() & 2)) throw new Error(`Convolution effects cannot be merged (${i.name})`);
                            j("e" + t++, i, e)
                        } let i = e.shaderParts.get(x.FRAGMENT_HEAD),
                        n = e.shaderParts.get(x.FRAGMENT_MAIN_IMAGE),
                        s = e.shaderParts.get(x.FRAGMENT_MAIN_UV);
                    const a = /\bblend\b/g;
                    for (const t of e.blendModes.values()) i += t.getShaderCode().replace(a, `blend${t.blendFunction}`) + "\n";
                    0 != (1 & e.attributes) ? (e.readDepth && (n = "float depth = readDepth(UV);\n\n\t" + n), this.needsDepthTexture = null === this.getDepthTexture()) : this.needsDepthTexture = !1, e.colorSpace === r.SRGBColorSpace && (n += "color0 = sRGBToLinear(color0);\n\t"), e.uvTransformation ? (s = "vec2 transformedUv = vUv;\n" + s, e.defines.set("UV", "transformedUv")) : e.defines.set("UV", "vUv"), e.shaderParts.set(x.FRAGMENT_HEAD, i), e.shaderParts.set(x.FRAGMENT_MAIN_IMAGE, n), e.shaderParts.set(x.FRAGMENT_MAIN_UV, s);
                    for (const [t, i] of e.shaderParts) null !== i && e.shaderParts.set(t, i.trim().replace(/^#/, "\n#"));
                    this.skipRendering = 0 === t, this.needsSwap = !this.skipRendering, this.fullscreenMaterial.setShaderData(e)
                }
                recompile() {
                    this.updateMaterial()
                }
                getDepthTexture() {
                    return this.fullscreenMaterial.depthBuffer
                }
                setDepthTexture(e, t = r.BasicDepthPacking) {
                    this.fullscreenMaterial.depthBuffer = e, this.fullscreenMaterial.depthPacking = t;
                    for (const i of this.effects) i.setDepthTexture(e, t)
                }
                render(e, t, i, r, n) {
                    for (const i of this.effects) i.update(e, t, r);
                    if (!this.skipRendering || this.renderToScreen) {
                        const n = this.fullscreenMaterial;
                        n.inputBuffer = t.texture, n.time += r * this.timeScale, e.setRenderTarget(this.renderToScreen ? null : i), e.render(this.scene, this.camera)
                    }
                }
                setSize(e, t) {
                    this.fullscreenMaterial.setSize(e, t);
                    for (const i of this.effects) i.setSize(e, t)
                }
                initialize(e, t, i) {
                    this.renderer = e;
                    for (const r of this.effects) r.initialize(e, t, i);
                    this.updateMaterial(), void 0 !== i && i !== r.UnsignedByteType && (this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH = "1")
                }
                dispose() {
                    super.dispose();
                    for (const e of this.effects) e.removeEventListener("change", this.listener), e.dispose()
                }
                handleEvent(e) {
                    "change" === e.type && this.recompile()
                }
            };

            function $(e, t, i) {
                return e + (t - e) * i
            }

            function q(e, t, i, r) {
                const n = $(e, t, .75),
                    s = $(i, r, .75);
                return $(n, s, .875)
            }
            new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array(3), new Float32Array([0, 0, 0]), new Float32Array([1, 0, 0]), new Float32Array([1, 1, 0]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([1, 0, 0]), new Float32Array([1, 0, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 0, 1]), new Float32Array([1, 0, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 1, 0]), new Float32Array([1, 1, 0]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 1, 0]), new Float32Array([0, 1, 1]), new Float32Array([1, 1, 1]), new Float32Array([0, 0, 0]), new Float32Array([0, 0, 1]), new Float32Array([0, 1, 1]), new Float32Array([1, 1, 1]), new Float32Array(2), new Float32Array(2), new Float32Array([0, -.25, .25, -.125, .125, -.375, .375]), new Float32Array([0, 0]), new Float32Array([.25, -.25]), new Float32Array([-.25, .25]), new Float32Array([.125, -.125]), new Float32Array([-.125, .125]), new Uint8Array([0, 0]), new Uint8Array([3, 0]), new Uint8Array([0, 3]), new Uint8Array([3, 3]), new Uint8Array([1, 0]), new Uint8Array([4, 0]), new Uint8Array([1, 3]), new Uint8Array([4, 3]), new Uint8Array([0, 1]), new Uint8Array([3, 1]), new Uint8Array([0, 4]), new Uint8Array([3, 4]), new Uint8Array([1, 1]), new Uint8Array([4, 1]), new Uint8Array([1, 4]), new Uint8Array([4, 4]), new Uint8Array([0, 0]), new Uint8Array([1, 0]), new Uint8Array([0, 2]), new Uint8Array([1, 2]), new Uint8Array([2, 0]), new Uint8Array([3, 0]), new Uint8Array([2, 2]), new Uint8Array([3, 2]), new Uint8Array([0, 1]), new Uint8Array([1, 1]), new Uint8Array([0, 3]), new Uint8Array([1, 3]), new Uint8Array([2, 1]), new Uint8Array([3, 1]), new Uint8Array([2, 3]), new Uint8Array([3, 3]), q(0, 0, 0, 0), new Float32Array([0, 0, 0, 0]), q(0, 0, 0, 1), new Float32Array([0, 0, 0, 1]), q(0, 0, 1, 0), new Float32Array([0, 0, 1, 0]), q(0, 0, 1, 1), new Float32Array([0, 0, 1, 1]), q(0, 1, 0, 0), new Float32Array([0, 1, 0, 0]), q(0, 1, 0, 1), new Float32Array([0, 1, 0, 1]), q(0, 1, 1, 0), new Float32Array([0, 1, 1, 0]), q(0, 1, 1, 1), new Float32Array([0, 1, 1, 1]), q(1, 0, 0, 0), new Float32Array([1, 0, 0, 0]), q(1, 0, 0, 1), new Float32Array([1, 0, 0, 1]), q(1, 0, 1, 0), new Float32Array([1, 0, 1, 0]), q(1, 0, 1, 1), new Float32Array([1, 0, 1, 1]), q(1, 1, 0, 0), new Float32Array([1, 1, 0, 0]), q(1, 1, 0, 1), new Float32Array([1, 1, 0, 1]), q(1, 1, 1, 0), new Float32Array([1, 1, 1, 0]), q(1, 1, 1, 1), new Float32Array([1, 1, 1, 1])
        }
    }
]);