"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [7568], {
        7568: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => m
            });
            var n = i(28250),
                a = i(1794),
                s = i(25108);
            class r {
                name = "Animator";
                icon = i(404);
                get settings() {
                    let t = [""];
                    if (this.renderer?.animationClips)
                        for (let e of this.renderer.animationClips) t.push(e.name);
                    return [{
                        id: "animation_name",
                        name: "Animation",
                        type: "select",
                        default: "",
                        values: t
                    }]
                }
                mixer = null;
                action = null;
                async onLoad() {
                    if (!this.renderer.object?.isObject3D) throw new Error(`Not supported on entity of type '${this.entity.type}'`);
                    this.mixer = new THREE.AnimationMixer(this.renderer.object)
                }
                onRender() {
                    this.mixer.update(metapress.renderer.delta), this._lastAnimationName == this.entity.animation_name && this._lastAnimationNonce == this.entity.animation_nonce || this.playCurrentAnimation()
                }
                isEntitySupported(t) {
                    return metapress.entities.getOrCreateRenderer(t)?.animationClips ? {
                        result: !0,
                        reason: null
                    } : {
                        result: !1,
                        reason: "No animation data found."
                    }
                }
                playCurrentAnimation() {
                    this._lastAnimationName = this.entity.animation_name, this._lastAnimationNonce = this.entity.animation_nonce;
                    let t = this.entity.animation_name;
                    if (!t) return void(this.action && (this.action.stop(), this.action.enabled = !1, this.action = null));
                    let e = metapress.animation.getClip(t, this.renderer);
                    if (!e) return this["_notified_clipNotFound_" + t] || s.warn(`[MetaPress > Animator] Animation clip not found: ${t}`), this["_notified_clipNotFound_" + t] = !0, void("core.human.idle" == t && (this.retryAnimation || (this.retryAnimation = 0), this.retryAnimation < 4 && setTimeout((t => {
                        "core.human.idle" == this._lastAnimationName && (this._lastAnimationName = null, this._lastAnimationNonce = null, this.retryAnimation += 1)
                    }), 1e3)));
                    this.missingObjectCheck(e);
                    let i = this.action,
                        a = this.mixer.clipAction(e);
                    this.action = a, a.isRunning() && a.enabled && 0 != a.getEffectiveWeight() && a.nonce == this.entity.animation_nonce || (a.reset(), a.play(), a.enabled = !0, a.nonce = this.entity.animation_nonce), !0 === this.entity.animation_loop || null === this.entity.animation_loop || void 0 === this.entity.animation_loop ? a.setLoop(THREE.LoopRepeat, 1 / 0) : !1 === this.entity.animation_loop || this.entity.animation_loop <= 1 ? (a.setLoop(THREE.LoopOnce, 1), a.clampWhenFinished = !0) : this.entity.animation_loop > 1 && (a.setLoop(THREE.LoopRepeat, this.entity.animation_loop), a.clampWhenFinished = !0), i && i != a && (i.weightTween?.stop(), a.weightTween?.stop(), i.weightTween = new n.ZP.Tween(i).to({
                        weight: 0
                    }).duration(1e3 * (this.entity.animation_crossfade ?? .25)).onUpdate((t => t.setEffectiveWeight(t.weight))).onComplete((t => {
                        t.enabled = !1, t.weightTween = null
                    })).start(), a.weightTween = new n.ZP.Tween(a).to({
                        weight: 1
                    }).duration(1e3 * (this.entity.animation_crossfade ?? .25)).onUpdate((t => t.setEffectiveWeight(t.weight))).onComplete((t => {
                        t.weightTween = null
                    })).start())
                }
                missingObjectCheck(t) {
                    let e = "_notified_missingBones_" + t.name;
                    if (this[e]) return;
                    this[e] = !0;
                    let i = [];
                    for (let e of t.tracks) {
                        let t = e.name?.lastIndexOf(".") ?? -1;
                        if (-1 == t) continue;
                        let n = e.name.substring(0, t);
                        this.renderer.object.getObjectByName(n) || i.includes(n) || i.push(n)
                    }
                    0 != i.length && s.warn(`[MetaPress > Animator] Missing bones or meshes when playing '${t.name}' on entity ${this.entity.id} (${this.entity.name}) :`, i)
                }
                async playAnimationAndWait(t, e = .25) {
                    let i = metapress.animation.getClip(t, this.renderer);
                    if (!i) return void s.warn(`[MetaPress > Animator] Animation '${t}' not found.`);
                    this.entity.animation_name = t, this.entity.animation_loop = !1, this.entity.animation_crossfade = e, this.entity.animation_nonce = Date.now(), this.playCurrentAnimation();
                    let n = this.action;
                    if (n?.getClip() != i) return s.warn(`[MetaPress > Animator] Animation '${t}' couldn't be played.`);
                    await (0, a.C)((() => n.time > e && n.time > i.duration - e || n != this.action || !n.isRunning() || void 0))
                }
            }
            var o = i(47660),
                h = i(25108);
            class l extends o.Z {
                async onLoad() {
                    if (await super.onLoad(), this.entity.animation_slice?.length)
                        for (let t of this.entity.animation_slice) this.createAnimationSlice(t)
                }
                createAnimationSlice(t) {
                    let e = this.animationClips[0];
                    if (!e) return h.warn(`[MetaPress > Animation] No animations found on ${this.entity.id}`);
                    let i = e.clone(),
                        n = Math.max(0, t.from ?? 0) * e.duration,
                        a = Math.min(1, t.to ?? 1) * e.duration;
                    for (let e of i.tracks) e.shift(-n), e.trim(0, a - n), t.scale && e.scale(t.scale);
                    i.resetDuration(), i.name = t.name || "<untitled slice>", this.animationClips.push(i)
                }
                applyTransforms() {
                    super.applyTransforms(), this.container.visible = !1
                }
            }
            class m {
                id = "core.render.animation";
                name = "Animation Manager";
                description = "Handles applying animations to 3D objects.";
                version = "1.0.0";
                requires = ["entities"];
                provides = ["animation", "render:animation", "modifier:animator", "modifier:avatar-animations"];
                async onLoad() {
                    metapress.entities.add({
                        type: "animation",
                        url: i(68872),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.idle"
                    }), metapress.entities.add({
                        type: "animation",
                        url: i(79693),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.walk"
                    }), metapress.entities.add({
                        type: "animation",
                        url: i(91044),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.run"
                    }), metapress.entities.add({
                        type: "animation",
                        url: i(77795),
                        animation_cache_priority: 1,
                        animation_slice: [{
                            from: 0,
                            to: .4,
                            name: "core.human.jump_start"
                        }, {
                            from: .4,
                            to: .6,
                            name: "core.human.jump_loop",
                            scale: 8
                        }, {
                            from: .6,
                            to: 1,
                            name: "core.human.jump_end"
                        }]
                    })
                }
                getClip(t, e) {
                    let i = e?.animationClips?.find((e => e.name == t)) || this.allClips().find((e => e.name == t));
                    return i ? (i._didOptimize || (i._didOptimize = !0, i.optimize()), i) : null
                }
                allClips() {
                    let t = [];
                    for (let e of metapress.entities.renderers)
                        if (e instanceof l && e.animationClips?.length)
                            if (e.entity.animation_name_override) {
                                let i = e.animationClips[0];
                                i.name = e.entity.animation_name_override, i.priority = e.entity.animation_priority || 0, t.push(i)
                            } else
                                for (let i of e.animationClips) i.priority = e.entity.animation_priority || 0, t.push(i);
                    return t.sort(((t, e) => t.priority - e.priority)), t
                }
                createRenderer(t) {
                    if ("animation" == t) return new l
                }
                createModifier(t) {
                    if ("animator" == t) return new r
                }
            }
        },
        47660: (t, e, i) => {
            i.d(e, {
                Z: () => a
            });
            var n = i(6147);
            class a extends n.Z {
                get settings() {
                    return [...super.settings, {
                        type: "file",
                        id: "url",
                        name: "Source",
                        help: "The model to render."
                    }]
                }
                modelInfo = {};animationClips = [];async onLoad() {
                    let t = await metapress.assets.load("mesh", this.entity.url, !0);
                    this.object = t.scene, this.animationClips = t.animations || [], this.modelInfo = t.userData || {}
                }
            }
        },
        6147: (t, e, i) => {
            i.d(e, {
                Z: () => a
            });
            var n = i(4028);
            class a {
                get settings() {
                    return [{
                        type: "checkbox",
                        id: "hidden",
                        name: "Hidden",
                        help: "If enabled, the object will not be visible."
                    }]
                }
                static showBoundingBoxes = !1;
                static wireframeMode = !1;
                _lastEntityWireframe = void 0;
                container = new THREE.Object3D;
                object = null;
                entity = {};
                hideLock = new n.Z;
                hasLoaded = !1;
                wireframeState = {};
                async onLoad() {}
                afterLoad() {
                    if (!this.object?.isObject3D) throw new Error("The renderer must create an Object3D instance when subclassing Object3DRenderer.");
                    this.container.entityRenderer = this, this.container.add(this.object), metapress.renderer.scene.add(this.container), this.applyTransforms(), this._lastUrl = this.entity.url, this._lastEntityWireframe = this.entity.wireframe
                }
                onUnload() {}
                afterUnload() {
                    this.container?.removeFromParent(), this.container = null, this.applyParent()
                }
                onEntityUpdated() {
                    this._lastUrl != this.entity.url && metapress.entities.reload(this.entity.id);
                    for (let t of metapress.entities.renderers) t != this && t.container?.isObject3D && t.applyParent && t.applyParent(!0);
                    this.entity.wireframe != this._lastEntityWireframe && (this._lastEntityWireframe = this.entity.wireframe, this.container.traverse((t => {
                        t.isMesh && t.material && (t.material.wireframe = this.entity.wireframe ?? !1, this.wireframeState[t.uuid] = t.material.wireframe)
                    }))), this.onRender()
                }
                onRender() {
                    this._lastTransformUpdate != this.entity.lastModified && (this._lastTransformUpdate = this.entity.lastModified, this.applyTransforms()), this.applyHideLock(), this.applyBoundingBox(), this.applyWireframe()
                }
                applyTransforms() {
                    this.object && (this.entity.x = parseFloat(this.entity.x) || 0, this.entity.y = parseFloat(this.entity.y) || 0, this.entity.z = parseFloat(this.entity.z) || 0, this.entity.scaleX = parseFloat(this.entity.scaleX) || 1, this.entity.scaleY = parseFloat(this.entity.scaleY) || 1, this.entity.scaleZ = parseFloat(this.entity.scaleZ) || 1, this.entity.quatX = parseFloat(this.entity.quatX) || 0, this.entity.quatY = parseFloat(this.entity.quatY) || 0, this.entity.quatZ = parseFloat(this.entity.quatZ) || 0, this.entity.quatW = parseFloat(this.entity.quatW) || 0, this.entity.extra_offset_x = parseFloat(this.entity.extra_offset_x) || 0, this.entity.extra_offset_y = parseFloat(this.entity.extra_offset_y) || 0, this.entity.extra_offset_z = parseFloat(this.entity.extra_offset_z) || 0, this.entity.extra_scale_x = parseFloat(this.entity.extra_scale_x) || 1, this.entity.extra_scale_y = parseFloat(this.entity.extra_scale_y) || 1, this.entity.extra_scale_z = parseFloat(this.entity.extra_scale_z) || 1, this.entity.extra_rotation_x = parseFloat(this.entity.extra_rotation_x) || 0, this.entity.extra_rotation_y = parseFloat(this.entity.extra_rotation_y) || 0, this.entity.extra_rotation_z = parseFloat(this.entity.extra_rotation_z) || 0, this.container.position.set(this.entity.x, this.entity.y, this.entity.z), this.container.scale.set(this.entity.scaleX, this.entity.scaleY, this.entity.scaleZ), this.entity.quatX || this.entity.quatY || this.entity.quatZ || this.entity.quatW ? this.container.quaternion.set(this.entity.quatX, this.entity.quatY, this.entity.quatZ, this.entity.quatW) : this.container.quaternion.set(0, 0, 0, 1), this.object.position.set(this.entity.extra_offset_x, this.entity.extra_offset_y, this.entity.extra_offset_z), this.object.scale.set(this.entity.extra_scale_x, this.entity.extra_scale_y, this.entity.extra_scale_z), this.object.rotation.set(this.entity.extra_rotation_x, this.entity.extra_rotation_y, this.entity.extra_rotation_z))
                }
                applyHideLock() {
                    let t = !this.entity.hidden && !this.hideLock.isAcquired;
                    this.container.visible && !t ? this.container.visible = !1 : !this.container.visible && t && (this.container.visible = !0)
                }
                applyBoundingBox() {
                    this.boundingBoxHelper?.update();
                    let t = a.showBoundingBoxes && this.container.visible;
                    !t && this.boundingBoxHelper ? (this.boundingBoxHelper.removeFromParent(), this.boundingBoxHelper.dispose(), this.boundingBoxHelper = null) : t && !this.boundingBoxHelper && (this.boundingBoxHelper = new THREE.BoxHelper(this.container, 16777215), metapress.renderer.scene.add(this.boundingBoxHelper))
                }
                applyWireframe() {
                    this._lastWireframeMode != a.wireframeMode && (this._lastWireframeMode = a.wireframeMode, this.container.traverse((t => {
                        t.isMesh && t.material && (this.hasLoaded || (this.wireframeState[t.uuid] = !!t.material.wireframe), t.material.wireframe = !!a.wireframeMode || (this.wireframeState[t.uuid] ?? !1))
                    })), this.hasLoaded = !0)
                }
                applyParent(t) {
                    if (!t && !this.parentHideLock && void 0 !== this._lastParent && this._lastParent != this.entity.parent) return;
                    if (this._lastParent = this.entity.parent || "", !t)
                        for (let t of metapress.entities.renderers) t != this && t.container?.isObject3D && t.applyParent && t.applyParent(!0);
                    if (!this.entity.parent) return this.parentHideLock?.(), this.parentHideLock = null, void(this.container && this.container.parent != metapress.renderer.scene && (this.container.removeFromParent(), metapress.renderer.scene.add(this.container)));
                    let e = metapress.entities.getRenderer(this.entity.parent);
                    e?.object?.isObject3D ? (this.parentHideLock?.(), this.parentHideLock = null, this.container.parent != e.container && (this.container.removeFromParent(), e.container.add(this.container))) : this.parentHideLock || (this.parentHideLock = this.hideLock.acquire())
                }
            }
        },
        1794: (t, e, i) => {
            function n(t, e = 1 / 0) {
                return new Promise(((i, n) => {
                    let a = Date.now(),
                        s = null;
                    s = setInterval((function() {
                        if (Date.now() - a > e) return clearInterval(s), void n(new Error("Timed out."));
                        let r = t();
                        r && (clearInterval(s), i(r))
                    }), 5)
                }))
            }
            i.d(e, {
                C: () => n
            })
        },
        4028: (t, e, i) => {
            i.d(e, {
                Z: () => n
            });
            class n {
                _counter = 0;
                get isUnlocked() {
                    return 0 == this._counter
                }
                get isLocked() {
                    return this._counter > 0
                }
                get isAcquired() {
                    return this._counter > 0
                }
                lock() {
                    this._counter += 1;
                    let t = !1;
                    return () => {
                        t || (t = !0, this._counter = Math.max(0, this._counter - 1))
                    }
                }
                acquire() {
                    return this.lock()
                }
            }
        },
        404: (t, e, i) => {
            t.exports = i.p + "mp-core/animation.f2b0a4753ac29e7f7b11.svg"
        },
        68872: (t, e, i) => {
            t.exports = i.p + "mp-core/animation_idle.3fdd176e0ee0b4fb47dd.fbx"
        },
        77795: (t, e, i) => {
            t.exports = i.p + "mp-core/animation_jump.d43c98eece753fd07920.fbx"
        },
        91044: (t, e, i) => {
            t.exports = i.p + "mp-core/animation_run.8c195ab303ed414631d1.fbx"
        },
        79693: (t, e, i) => {
            t.exports = i.p + "mp-core/animation_walk.ef0086ad2a9738253f9f.fbx"
        }
    }
]);