"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [7387], {
        6147: (t, e, i) => {
            i.d(e, {
                Z: () => r
            });
            var s = i(4028);
            class r {
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
                hideLock = new s.Z;
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
                    let t = r.showBoundingBoxes && this.container.visible;
                    !t && this.boundingBoxHelper ? (this.boundingBoxHelper.removeFromParent(), this.boundingBoxHelper.dispose(), this.boundingBoxHelper = null) : t && !this.boundingBoxHelper && (this.boundingBoxHelper = new THREE.BoxHelper(this.container, 16777215), metapress.renderer.scene.add(this.boundingBoxHelper))
                }
                applyWireframe() {
                    this._lastWireframeMode != r.wireframeMode && (this._lastWireframeMode = r.wireframeMode, this.container.traverse((t => {
                        t.isMesh && t.material && (this.hasLoaded || (this.wireframeState[t.uuid] = !!t.material.wireframe), t.material.wireframe = !!r.wireframeMode || (this.wireframeState[t.uuid] ?? !1))
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
        37387: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => p
            });
            var s = i(6147);
            class r extends s.Z {
                onLoad() {
                    this.material = metapress.ui.createMaterial({
                        width: 1024,
                        height: 256,
                        transparent: !0,
                        alphaTest: .1
                    });
                    let t = new THREE.PlaneGeometry(1, 1);
                    this.object = new THREE.Mesh(t, this.material), this.timer = setInterval((() => this.updateUI()), 3e4), this.updateUI()
                }
                onUnload() {
                    clearInterval(this.timer)
                }
                updateUI() {
                    if (!this.material) return;
                    let t = metapress.entities.all.filter((t => "menubar.item" == t.type));
                    t.sort(((t, e) => (t.order || 0) - (e.order || 0))), this.material.viewportSize.width = 64 * t.length + 100, this.material.viewportSize.height = 64, this.object.scale.set(.001 * this.material.viewportSize.width, .001 * this.material.viewportSize.height, 1), this.material.baseView = metapress.ui.createElement("box"), this.material.baseView.background = "#333", this.material.baseView.borderRadius = 32;
                    for (let e = 0; e < t.length; e++) {
                        let i = t[e],
                            s = metapress.ui.createElement("center-layout");
                        s.x = 64 * e, s.y = 0, s.width = 64, s.height = this.material.viewportSize.height, s.addEventListener("click", (t => metapress.menubar.onMenuItemClicked(i))), this.material.baseView.add(s);
                        let r = metapress.ui.createElement("image");
                        r.url = i.icon, r.scaleMode = "fit", r.width = 32, r.height = 32, s.add(r)
                    }
                    let e = metapress.ui.createElement("center-layout");
                    e.x = this.material.viewportSize.width - 100, e.y = 0, e.width = 100, e.height = this.material.viewportSize.height, this.material.baseView.add(e);
                    let i = metapress.ui.createElement("text");
                    i.autoHeight = !0, i.width = 100, i.text = (new Date).toLocaleTimeString("en-US", {
                        timeStyle: "short"
                    }), i.textAlign = "center", i.color = "#FFF", i.font = "bold 15px Comfortaa, Arial, Helvetica, sans-serif", e.add(i), this.material.invalidate()
                }
                onClick(t) {
                    this.material.incomingClick(t.hit?.uv?.x, t.hit?.uv?.y, !0)
                }
                $menubar_iconsUpdated() {
                    this.updateUI()
                }
            }
            var n = i(92583),
                a = i(9801),
                o = i(1594),
                h = i(99477);
            class l extends h.Object3D {
                get lineLength() {
                    return this._lineLength
                }
                set lineLength(t) {
                    this._lineLength != t && (this._lineLength = Math.max(.001, t), this.updateLine())
                }
                get color() {
                    return this.startShape.material.color
                }
                set color(t) {
                    this.startShape.material.color = t, this.startShape.material.emissive = t
                }
                raycaster = new h.Raycaster;constructor(t = 1) {
                    super(), this._lineLength = t, this.isPhysicalObject = !1;
                    let e = new h.SphereGeometry(.01, 8, 8),
                        i = new h.MeshStandardMaterial({
                            color: 16711680,
                            emissive: 16711680,
                            emissiveIntensity: 5,
                            flatShading: !0
                        });
                    this.startShape = new h.Mesh(e, i), this.add(this.startShape), this.endShape = new h.Mesh(e, i), this.add(this.endShape), e = new h.CylinderGeometry(.005, .005, 1, 5), this.lineShape = new h.Mesh(e, i), this.lineShape.rotation.x = Math.PI / 2, this.add(this.lineShape), this.updateLine()
                }
                updateLine() {
                    this.endShape.position.z = -this._lineLength, this.lineShape.position.z = -this._lineLength / 2, this.lineShape.scale.y = this._lineLength
                }
                updateRay() {
                    this.startShape.getWorldPosition(this.raycaster.ray.origin), this.endShape.getWorldPosition(this.raycaster.ray.direction), this.raycaster.ray.direction.sub(this.raycaster.ray.origin).normalize()
                }
                intersectObjects(t, e = !1) {
                    return this.updateRay(), this.raycaster.intersectObjects(t, e)
                }
                intersectObject(t, e = !1) {
                    return this.updateRay(), this.raycaster.intersectObject(t, e)
                }
            }
            class d {
                id = "vr-controllers";
                manager = null;
                plugin = null;
                movement = new THREE.Vector2;
                movementVelocity = new THREE.Vector2;
                rotation = new THREE.Vector2;
                rotationVelocity = new THREE.Vector2;
                zoom = 0;
                zoomVelocity = 0;
                actions = {};
                deadzone = .15;
                xrManager = null;
                xrSession = null;
                laserLine = new l;
                leftControllerWristRotation = (new THREE.Quaternion).setFromEuler(new THREE.Euler(0, Math.PI / 2, Math.PI / 2, "XZY"));
                leftControllerWristPosition = new THREE.Vector3(-.12, 0, 0);
                rightControllerWristRotation = (new THREE.Quaternion).setFromEuler(new THREE.Euler(Math.PI, Math.PI / 2, -Math.PI / 2, "XZY"));
                rightControllerWristPosition = new THREE.Vector3(.12, 0, 0);
                leftHandWristRotation = (new THREE.Quaternion).setFromEuler(new THREE.Euler(-Math.PI / 2, 0, Math.PI / 2, "XYZ"));
                leftHandWristPosition = new THREE.Vector3(0, 0, .02);
                rightHandWristRotation = (new THREE.Quaternion).setFromEuler(new THREE.Euler(-Math.PI / 2, 0, -Math.PI / 2, "XYZ"));
                rightHandWristPosition = new THREE.Vector3(0, 0, .02);
                constructor() {
                    this.laserLine.position.z = -.05
                }
                attachSession(t, e, i) {
                    this.xrManager = e, this.xrSession = i;
                    let s = e.getController(0);
                    t.add(s);
                    let r = e.getController(1);
                    t.add(r);
                    const h = new n.i;
                    let l = e.getControllerGrip(0);
                    l.isPhysicalObject = !1, l.add(h.createControllerModel(l)), t.add(l);
                    let d = e.getHand(0);
                    d.isPhysicalObject = !1, d.add(new a.X(d)), t.add(d), this.handPointer1 = new o.P(d, s), d.add(this.handPointer1);
                    let c = e.getControllerGrip(1);
                    c.isPhysicalObject = !1, c.add(h.createControllerModel(c)), t.add(c);
                    let p = e.getHand(1);
                    p.isPhysicalObject = !1, p.add(new a.X(p)), t.add(p), this.handPointer2 = new o.P(p, r), p.add(this.handPointer2);
                    let u = setInterval((() => {
                        let t = d.getObjectByProperty("type", "SkinnedMesh"),
                            e = p.getObjectByProperty("type", "SkinnedMesh");
                        t && e && (e.material = t.material, t.material.color = new THREE.Color("#66BBFF"), t.material.needsUpdate = !0, clearInterval(u))
                    }), 100)
                }
                detachSession() {
                    this.xrSession = null, this.laserLine.removeFromParent()
                }
                processInput() {
                    if (this.movementVelocity.set(0, 0), this.rotationVelocity.set(0, 0), this.zoomVelocity = 0, !this.xrSession || !this.xrManager) return;
                    let t = null,
                        e = null,
                        i = 0,
                        s = 0;
                    for (let r = 0; r < this.plugin.session.inputSources.length; r++) {
                        let n = this.plugin.session.inputSources[r];
                        "left" == n.handedness ? (t = n, i = r) : "right" == n.handedness && (e = n, s = r)
                    }
                    t?.hand ? (this.processHandPointer(this.handPointer1), this.processHandPointer(this.handPointer2), this.laserLine.removeFromParent(), this.setEntityTransform(this.plugin.entities.wristLeft, this.xrManager.getHand(i)?.joints?.wrist, this.leftHandWristRotation, this.leftHandWristPosition), this.setEntityTransform(this.plugin.entities.wristRight, this.xrManager.getHand(s)?.joints?.wrist, this.rightHandWristRotation, this.rightHandWristPosition)) : (this.processGamepad(t, e), this.processLaserLine(t, e, i, s), this.setEntityTransform(this.plugin.entities.wristLeft, this.xrManager.getController(i), this.leftControllerWristRotation, this.leftControllerWristPosition), this.setEntityTransform(this.plugin.entities.wristRight, this.xrManager.getController(s), this.rightControllerWristRotation, this.rightControllerWristPosition))
                }
                setEntityTransform(t, e, i, s) {
                    if (!t || !e) return;
                    let r = this._matrixA || (this._matrixA = new THREE.Matrix4);
                    r.makeTranslation(s);
                    let n = this._matrixB || (this._matrixB = new THREE.Matrix4);
                    n.makeRotationFromQuaternion(i), n.multiply(r);
                    let a = this._matrixC || (this._matrixC = new THREE.Matrix4);
                    a.copy(e.matrixWorld), a.multiply(n);
                    let o = this._posA || (this._pos = new THREE.Vector3),
                        h = this._quatA || (this._quatA = new THREE.Quaternion),
                        l = this._scaleA || (this._scaleA = new THREE.Vector3);
                    a.decompose(o, h, l), t.x = o.x, t.y = o.y, t.z = o.z, t.quatX = h.x, t.quatY = h.y, t.quatZ = h.z, t.quatW = h.w, t.lastModified = Date.now()
                }
                processGamepad(t, e) {
                    let i = t?.gamepad?.axes[2] || 0,
                        s = t?.gamepad?.axes[3] || 0,
                        r = e?.gamepad?.axes[2] || 0,
                        n = e?.gamepad?.axes[3] || 0;
                    Math.abs(i) < this.deadzone && (i = 0), Math.abs(s) < this.deadzone && (s = 0), Math.abs(r) < this.deadzone && (r = 0), Math.abs(n) < this.deadzone && (n = 0), this.movementVelocity.set(i, -s);
                    let a = r <= 1 && r >= .5,
                        o = r >= -1 && r <= -.5;
                    !this._wasSnappingLeft && a && (this.plugin.rotation += Math.PI / 8), !this._wasSnappingRight && o && (this.plugin.rotation -= Math.PI / 8), this._wasSnappingLeft = a, this._wasSnappingRight = o
                }
                processLaserLine(t, e, i, s) {
                    let r = t?.gamepad?.buttons[0]?.touched || t?.gamepad?.buttons[0]?.value > .2,
                        n = e?.gamepad?.buttons[0]?.touched || e?.gamepad?.buttons[0]?.value > .2;
                    if (!r && !n) return void this.laserLine.removeFromParent();
                    let a = r ? i : s,
                        o = this.xrManager.getController(a);
                    this.laserLine.parent != o && (this.laserLine.removeFromParent(), o.add(this.laserLine));
                    let h = this.laserLine.intersectObjects(metapress.raycast.physicalObjects, !1)[0],
                        l = h?.object,
                        d = l && metapress.entities.rendererFromObject3D(l),
                        p = d && metapress.entities.isClickable(d.entity.id);
                    this.laserLine.lineLength = h?.distance || 1e3, p ? "g" != this.laserLine.colorCode && (this.laserLine.colorCode = "g", this.laserLine.color = new THREE.Color(65280)) : "r" != this.laserLine.colorCode && (this.laserLine.colorCode = "r", this.laserLine.color = new THREE.Color(16711680));
                    let u = r ? t : n ? e : null,
                        m = u?.gamepad?.buttons[0]?.value || 0,
                        y = l && m > .8;
                    !this.currentLaserEvent && y ? (this.currentLaserEvent = {
                        id: c++,
                        hit: h,
                        position: h?.point,
                        hitObject: l,
                        hitRenderer: d,
                        startPosition: h.point,
                        controller: u,
                        startTime: Date.now(),
                        inputType: "controller"
                    }, metapress.plugins.sendEvent("vr_pointerDown", this.currentLaserEvent)) : this.currentLaserEvent && y ? (this.currentLaserEvent.position = h?.point, this.currentLaserEvent.controller = u, metapress.plugins.sendEvent("vr_pointerMove", this.currentLaserEvent)) : this.currentLaserEvent && !y && (this.currentLaserEvent.position = h?.point, this.currentLaserEvent.controller = u, metapress.plugins.sendEvent("vr_pointerUp", this.currentLaserEvent), Date.now() - this.currentLaserEvent.startTime < 500 && (metapress.plugins.sendEvent("vr_click", this.currentLaserEvent), this.onClick(this.currentLaserEvent)), this.currentLaserEvent = null)
                }
                processHandPointer(t) {
                    if (!t) return;
                    let e = t.intersectObjects(metapress.raycast.physicalObjects, !1)[0];
                    if (e) {
                        if (t.cursorObject.visible = !0, t.setCursor(e.distance), !t.currentPinchEvent && t.isPinched()) {
                            let i = e?.object,
                                s = i && metapress.entities.rendererFromObject3D(i),
                                r = t.cursorObject.getWorldPosition(new THREE.Vector3);
                            t.currentPinchEvent = {
                                id: c++,
                                hit: e,
                                hitObject: i,
                                hitRenderer: s,
                                position: r,
                                startPosition: r,
                                startTime: Date.now(),
                                inputType: "hand"
                            }, metapress.plugins.sendEvent("vr_pinchStart", t.currentPinchEvent)
                        } else if (t.currentPinchEvent && t.isPinched());
                        else if (t.currentPinchEvent && !t.isPinched()) {
                            t.currentPinchEvent.position = t.cursorObject.getWorldPosition(new THREE.Vector3), metapress.plugins.sendEvent("vr_pinchEnd", t.currentPinchEvent);
                            let e = t.currentPinchEvent.position.distanceTo(t.currentPinchEvent.startPosition),
                                i = Date.now() - t.currentPinchEvent.startTime;
                            e < .5 && i < 500 && (metapress.plugins.sendEvent("vr_click", t.currentPinchEvent), this.onClick(t.currentPinchEvent)), t.currentPinchEvent = null
                        }
                    } else t.cursorObject.visible = !1
                }
                onClick(t) {
                    t.hitRenderer?.entity?.id && metapress.entities.doClick(t.hitRenderer.entity.id, t)
                }
            }
            let c = 1;
            class p {
                id = "core.render.vr";
                name = "VR";
                description = "Manages the VR session.";
                version = "1.0.0";
                requires = ["entities", "renderer", "menubar", "input", "ui"];
                provides = ["vr", "render:vr.menubar"];
                entities = {};
                rotation = 0;
                async onLoad() {
                    if (!await (window.navigator.xr?.isSessionSupported("immersive-vr"))) throw {
                        message: "VR is not supported.",
                        cancelled: !0
                    };
                    metapress.entities.add({
                        id: "core.render.vr:menubutton",
                        type: "menubar.item",
                        name: "Enter VR",
                        description: "Enters immersive VR mode.",
                        icon: i(87024),
                        onClick: () => {
                            this.isActive ? this.exit() : this.enter()
                        }
                    }), metapress.renderer.glrenderer.xr.addEventListener("sessionend", this.onEnd.bind(this)), this.inputDevice = new d, this.inputDevice.plugin = this, metapress.input.addDevice(this.inputDevice), this.entities.container = metapress.entities.add({
                        id: "vr:container",
                        type: "group",
                        hidden: !0
                    }), this.entities.wristLeft = metapress.entities.add({
                        id: "vr:wrist.left",
                        type: "group",
                        hidden: !0
                    }), this.entities.wristRight = metapress.entities.add({
                        id: "vr:wrist.right",
                        type: "group",
                        hidden: !0
                    });
                    let t = (new THREE.Quaternion).setFromEuler(new THREE.Euler(-.5, 0, 0));
                    this.entities.menubar = metapress.entities.add({
                        id: "core.render.vr:menubar",
                        type: "vr.menubar",
                        name: "VR Menubar",
                        parent: "vr:container",
                        x: 0,
                        y: 1,
                        z: -.6,
                        quatX: t.x,
                        quatY: t.y,
                        quatZ: t.z,
                        quatW: t.w
                    })
                }
                createRenderer(t) {
                    if ("vr.menubar" == t) return new r
                }
                get isActive() {
                    return metapress.renderer.glrenderer.xr.isPresenting
                }
                async enter() {
                    this.isActive || (this.session = await navigator.xr.requestSession("immersive-vr", {
                        optionalFeatures: ["local-floor", "bounded-floor", "hand-tracking", "layers"]
                    }), this.referenceSpace = await this.session.requestReferenceSpace("local-floor"), metapress.renderer.composer && (metapress.renderer.composer.dispose(), metapress.renderer.composer = null), await metapress.renderer.glrenderer.xr.setSession(this.session), metapress.entities.update(this.entities.container.id, {
                        hidden: !1
                    }), metapress.entities.update(this.entities.wristLeft.id, {
                        hidden: !1
                    }), metapress.entities.update(this.entities.wristRight.id, {
                        hidden: !1
                    }), metapress.entities.update("core.render.vr:menubutton", {
                        name: "Exit VR"
                    }), this._lastX = 0, this._lastY = 0, this._lastZ = 0, this._lastRotation = 0, this.inputDevice.attachSession(metapress.renderer.scene, metapress.renderer.glrenderer.xr, this.session))
                }
                async exit(t = !1) {
                    this.isActive && await metapress.renderer.glrenderer.xr.getSession().end()
                }
                async onEnd() {
                    this.session = null, this.handPointerLeft = null, this.handPointerRight = null, metapress.renderer.onResize(), metapress.renderer.updatePipeline(), metapress.entities.update(this.entities.container.id, {
                        hidden: !0
                    }), metapress.entities.update(this.entities.wristLeft.id, {
                        hidden: !0
                    }), metapress.entities.update(this.entities.wristRight.id, {
                        hidden: !0
                    }), metapress.entities.update("core.render.vr:menubutton", {
                        name: "Enter VR"
                    }), this.inputDevice.detachSession()
                }
                $onRender() {
                    if (!this.isActive) return;
                    this._rotationSmoothed !== this.rotation && (this._rotationSmoothed = THREE.MathUtils.damp(this._rotationSmoothed || 0, this.rotation, 40, metapress.renderer.delta), Math.abs(this.rotation - this._rotationSmoothed) < .001 && (this._rotationSmoothed = this.rotation));
                    let t = metapress.renderer.glrenderer.xr,
                        e = metapress.avatars.currentUserEntity;
                    if (e && (this._lastX != e.x || this._lastY != e.y || this._lastZ != e.z || this._lastRotation != this._rotationSmoothed)) {
                        this._lastX = e.x, this._lastY = e.y, this._lastZ = e.z, this._lastRotation = this._rotationSmoothed, this._snapAngle = this._snapAngle || new THREE.Vector3(0, 1, 0), this._quat = this._quat || new THREE.Quaternion, this._quat.setFromAxisAngle(this._snapAngle, this._rotationSmoothed);
                        let i = this.referenceSpace.getOffsetReferenceSpace(new XRRigidTransform(null, this._quat)).getOffsetReferenceSpace(new XRRigidTransform({
                            x: -e.x,
                            y: -e.y,
                            z: -e.z
                        }, null));
                        t.setReferenceSpace(i), this._quat.setFromAxisAngle(this._snapAngle, -this._rotationSmoothed), this.entities.container.x = e.x, this.entities.container.y = e.y, this.entities.container.z = e.z, this.entities.container.quatX = this._quat.x, this.entities.container.quatY = this._quat.y, this.entities.container.quatZ = this._quat.z, this.entities.container.quatW = this._quat.w, this.entities.container.lastModified = Date.now()
                    }
                }
                $dialogs_didShow() {
                    this.exit()
                }
                $menubar_didOpenPanel() {
                    this.exit()
                }
            }
        },
        4028: (t, e, i) => {
            i.d(e, {
                Z: () => s
            });
            class s {
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
        87024: (t, e, i) => {
            t.exports = i.p + "mp-core/vr.47898486ae76643b63b1.svg"
        }
    }
]);