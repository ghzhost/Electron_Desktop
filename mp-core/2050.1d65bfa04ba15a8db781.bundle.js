"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2050], {
        9801: (t, e, s) => {
            s.d(e, {
                X: () => r
            });
            var i = s(99477),
                o = s(1217),
                n = s(25108);
            class a {
                constructor(t, e, s, i, a = null, r = null) {
                    this.controller = e, this.handModel = t, this.bones = [], null === a && (a = new o.E).setPath(s || "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles/generic-hand/"), a.load(`${i}.glb`, (t => {
                        const e = t.scene.children[0];
                        this.handModel.add(e);
                        const s = e.getObjectByProperty("type", "SkinnedMesh");
                        s.frustumCulled = !1, s.castShadow = !0, s.receiveShadow = !0, ["wrist", "thumb-metacarpal", "thumb-phalanx-proximal", "thumb-phalanx-distal", "thumb-tip", "index-finger-metacarpal", "index-finger-phalanx-proximal", "index-finger-phalanx-intermediate", "index-finger-phalanx-distal", "index-finger-tip", "middle-finger-metacarpal", "middle-finger-phalanx-proximal", "middle-finger-phalanx-intermediate", "middle-finger-phalanx-distal", "middle-finger-tip", "ring-finger-metacarpal", "ring-finger-phalanx-proximal", "ring-finger-phalanx-intermediate", "ring-finger-phalanx-distal", "ring-finger-tip", "pinky-finger-metacarpal", "pinky-finger-phalanx-proximal", "pinky-finger-phalanx-intermediate", "pinky-finger-phalanx-distal", "pinky-finger-tip"].forEach((t => {
                            const s = e.getObjectByName(t);
                            void 0 !== s ? s.jointName = t : n.warn(`Couldn't find ${t} in ${i} hand mesh`), this.bones.push(s)
                        })), r && r(e)
                    }))
                }
                updateMesh() {
                    const t = this.controller.joints;
                    for (let e = 0; e < this.bones.length; e++) {
                        const s = this.bones[e];
                        if (s) {
                            const e = t[s.jointName];
                            if (e.visible) {
                                const t = e.position;
                                s.position.copy(t), s.quaternion.copy(e.quaternion)
                            }
                        }
                    }
                }
            }
            class r extends i.Object3D {
                constructor(t, e = null, s = null) {
                    super(), this.controller = t, this.motionController = null, this.envMap = null, this.loader = e, this.onLoad = s, this.mesh = null, t.addEventListener("connected", (e => {
                        const s = e.data;
                        s.hand && !this.motionController && (this.xrInputSource = s, this.motionController = new a(this, t, this.path, s.handedness, this.loader, this.onLoad))
                    })), t.addEventListener("disconnected", (() => {
                        this.clear(), this.motionController = null
                    }))
                }
                updateMatrixWorld(t) {
                    super.updateMatrixWorld(t), this.motionController && this.motionController.updateMesh()
                }
                getPointerPosition() {
                    const t = this.controller.joints["index-finger-tip"];
                    return t ? t.position : null
                }
                intersectBoxObject(t) {
                    const e = this.getPointerPosition();
                    if (e) {
                        const s = new i.Sphere(e, .01),
                            o = (new i.Box3).setFromObject(t);
                        return s.intersectsBox(o)
                    }
                    return !1
                }
                checkButton(t) {
                    this.intersectBoxObject(t) ? t.onPress() : t.onClear(), t.isPressed() && t.whilePressed()
                }
            }
        },
        1594: (t, e, s) => {
            s.d(e, {
                P: () => h
            });
            var i = s(99477);
            const o = .4,
                n = 16,
                a = new i.Vector3(0, 1, 0),
                r = new i.Vector3(0, 0, 1);
            class h extends i.Object3D {
                constructor(t, e) {
                    super(), this.hand = t, this.controller = e, this.motionController = null, this.envMap = null, this.mesh = null, this.pointerGeometry = null, this.pointerMesh = null, this.pointerObject = null, this.pinched = !1, this.attached = !1, this.cursorObject = null, this.raycaster = null, this._onConnected = this._onConnected.bind(this), this._onDisconnected = this._onDisconnected.bind(this), this.hand.addEventListener("connected", this._onConnected), this.hand.addEventListener("disconnected", this._onDisconnected)
                }
                _onConnected(t) {
                    const e = t.data;
                    e.hand && (this.visible = !0, this.xrInputSource = e, this.createPointer())
                }
                _onDisconnected() {
                    this.visible = !1, this.xrInputSource = null, this.pointerGeometry && this.pointerGeometry.dispose(), this.pointerMesh && this.pointerMesh.material && this.pointerMesh.material.dispose(), this.clear()
                }
                _drawVerticesRing(t, e, s) {
                    const i = e.clone();
                    for (let e = 0; e < n; e++) {
                        i.applyAxisAngle(r, 2 * Math.PI / n);
                        const o = s * n + e;
                        t[3 * o] = i.x, t[3 * o + 1] = i.y, t[3 * o + 2] = i.z
                    }
                }
                _updatePointerVertices(t) {
                    const e = this.pointerGeometry.attributes.position.array,
                        s = new i.Vector3(.002, 0, -1 * (.035 - t));
                    this._drawVerticesRing(e, s, 0);
                    const o = new i.Vector3(Math.sin(110 * Math.PI / 180) * t, Math.cos(110 * Math.PI / 180) * t, 0);
                    for (let t = 0; t < 12; t++) this._drawVerticesRing(e, o, t + 1), o.applyAxisAngle(a, 110 * Math.PI / 180 / -24);
                    const n = new i.Vector3(0, 0, -1 * (.035 - t));
                    e[624] = n.x, e[625] = n.y, e[626] = n.z;
                    const r = new i.Vector3(0, 0, t);
                    e[627] = r.x, e[628] = r.y, e[629] = r.z, this.pointerGeometry.setAttribute("position", new i.Float32BufferAttribute(e, 3))
                }
                createPointer() {
                    let t, e;
                    const s = new Array(630).fill(0),
                        a = [];
                    for (this.pointerGeometry = new i.BufferGeometry, this.pointerGeometry.setAttribute("position", new i.Float32BufferAttribute(s, 3)), this._updatePointerVertices(.01), t = 0; t < 12; t++) {
                        for (e = 0; e < 15; e++) a.push(t * n + e, t * n + e + 1, (t + 1) * n + e), a.push(t * n + e + 1, (t + 1) * n + e + 1, (t + 1) * n + e);
                        a.push((t + 1) * n - 1, t * n, (t + 2) * n - 1), a.push(t * n, (t + 1) * n, (t + 2) * n - 1)
                    }
                    for (t = 0; t < 15; t++) a.push(208, t + 1, t), a.push(209, t + 192, t + 192 + 1);
                    a.push(208, 0, 15), a.push(209, 207, 192);
                    const r = new i.MeshBasicMaterial;
                    r.transparent = !0, r.opacity = o, this.pointerGeometry.setIndex(a), this.pointerMesh = new i.Mesh(this.pointerGeometry, r), this.pointerMesh.position.set(0, 0, -.01), this.pointerObject = new i.Object3D, this.pointerObject.add(this.pointerMesh), this.raycaster = new i.Raycaster;
                    const h = new i.SphereGeometry(.02, 10, 10),
                        l = new i.MeshBasicMaterial;
                    l.transparent = !0, l.opacity = o, this.cursorObject = new i.Mesh(h, l), this.pointerObject.add(this.cursorObject), this.add(this.pointerObject)
                }
                _updateRaycaster() {
                    if (this.raycaster) {
                        const t = this.pointerObject.matrixWorld,
                            e = new i.Matrix4;
                        e.identity().extractRotation(t), this.raycaster.ray.origin.setFromMatrixPosition(t), this.raycaster.ray.direction.set(0, 0, -1).applyMatrix4(e)
                    }
                }
                _updatePointer() {
                    this.pointerObject.visible = this.controller.visible;
                    const t = this.hand.joints["index-finger-tip"],
                        e = this.hand.joints["thumb-tip"],
                        s = t.position.distanceTo(e.position),
                        i = t.position.clone().add(e.position).multiplyScalar(.5);
                    this.pointerObject.position.copy(i), this.pointerObject.quaternion.copy(this.controller.quaternion), this.pinched = s <= .02;
                    const n = (s - .01) / .04,
                        a = (s - .01) / .01;
                    if (n > 1) this._updatePointerVertices(.01), this.pointerMesh.position.set(0, 0, -.01), this.pointerMesh.material.opacity = o;
                    else if (n > 0) {
                        const t = .007 * n + .003;
                        this._updatePointerVertices(t), a < 1 ? (this.pointerMesh.position.set(0, 0, -1 * t - .02 * (1 - a)), this.pointerMesh.material.opacity = o + .6 * (1 - a)) : (this.pointerMesh.position.set(0, 0, -1 * t), this.pointerMesh.material.opacity = o)
                    } else this._updatePointerVertices(.003), this.pointerMesh.position.set(0, 0, -.023), this.pointerMesh.material.opacity = 1;
                    this.cursorObject.material.opacity = this.pointerMesh.material.opacity
                }
                updateMatrixWorld(t) {
                    super.updateMatrixWorld(t), this.pointerGeometry && (this._updatePointer(), this._updateRaycaster())
                }
                isPinched() {
                    return this.pinched
                }
                setAttached(t) {
                    this.attached = t
                }
                isAttached() {
                    return this.attached
                }
                intersectObject(t, e = !0) {
                    if (this.raycaster) return this.raycaster.intersectObject(t, e)
                }
                intersectObjects(t, e = !0) {
                    if (this.raycaster) return this.raycaster.intersectObjects(t, e)
                }
                checkIntersections(t, e = !1) {
                    if (this.raycaster && !this.attached) {
                        const s = this.raycaster.intersectObjects(t, e),
                            o = new i.Vector3(0, 0, -1);
                        if (s.length > 0) {
                            const t = s[0].distance;
                            this.cursorObject.position.copy(o.multiplyScalar(t))
                        } else this.cursorObject.position.copy(o.multiplyScalar(1.5))
                    }
                }
                setCursor(t) {
                    const e = new i.Vector3(0, 0, -1);
                    this.raycaster && !this.attached && this.cursorObject.position.copy(e.multiplyScalar(t))
                }
                dispose() {
                    this._onDisconnected(), this.hand.removeEventListener("connected", this._onConnected), this.hand.removeEventListener("disconnected", this._onDisconnected)
                }
            }
        },
        92583: (t, e, s) => {
            s.d(e, {
                i: () => m
            });
            var i = s(99477),
                o = s(1217);
            const n = {
                Handedness: Object.freeze({
                    NONE: "none",
                    LEFT: "left",
                    RIGHT: "right"
                }),
                ComponentState: Object.freeze({
                    DEFAULT: "default",
                    TOUCHED: "touched",
                    PRESSED: "pressed"
                }),
                ComponentProperty: Object.freeze({
                    BUTTON: "button",
                    X_AXIS: "xAxis",
                    Y_AXIS: "yAxis",
                    STATE: "state"
                }),
                ComponentType: Object.freeze({
                    TRIGGER: "trigger",
                    SQUEEZE: "squeeze",
                    TOUCHPAD: "touchpad",
                    THUMBSTICK: "thumbstick",
                    BUTTON: "button"
                }),
                ButtonTouchThreshold: .05,
                AxisTouchThreshold: .1,
                VisualResponseProperty: Object.freeze({
                    TRANSFORM: "transform",
                    VISIBILITY: "visibility"
                })
            };
            async function a(t) {
                const e = await fetch(t);
                if (e.ok) return e.json();
                throw new Error(e.statusText)
            }
            const r = {
                xAxis: 0,
                yAxis: 0,
                button: 0,
                state: n.ComponentState.DEFAULT
            };
            class h {
                constructor(t) {
                    this.componentProperty = t.componentProperty, this.states = t.states, this.valueNodeName = t.valueNodeName, this.valueNodeProperty = t.valueNodeProperty, this.valueNodeProperty === n.VisualResponseProperty.TRANSFORM && (this.minNodeName = t.minNodeName, this.maxNodeName = t.maxNodeName), this.value = 0, this.updateFromComponent(r)
                }
                updateFromComponent({
                    xAxis: t,
                    yAxis: e,
                    button: s,
                    state: i
                }) {
                    const {
                        normalizedXAxis: o,
                        normalizedYAxis: a
                    } = function(t = 0, e = 0) {
                        let s = t,
                            i = e;
                        if (Math.sqrt(t * t + e * e) > 1) {
                            const o = Math.atan2(e, t);
                            s = Math.cos(o), i = Math.sin(o)
                        }
                        return {
                            normalizedXAxis: .5 * s + .5,
                            normalizedYAxis: .5 * i + .5
                        }
                    }(t, e);
                    switch (this.componentProperty) {
                        case n.ComponentProperty.X_AXIS:
                            this.value = this.states.includes(i) ? o : .5;
                            break;
                        case n.ComponentProperty.Y_AXIS:
                            this.value = this.states.includes(i) ? a : .5;
                            break;
                        case n.ComponentProperty.BUTTON:
                            this.value = this.states.includes(i) ? s : 0;
                            break;
                        case n.ComponentProperty.STATE:
                            this.valueNodeProperty === n.VisualResponseProperty.VISIBILITY ? this.value = this.states.includes(i) : this.value = this.states.includes(i) ? 1 : 0;
                            break;
                        default:
                            throw new Error(`Unexpected visualResponse componentProperty ${this.componentProperty}`)
                    }
                }
            }
            class l {
                constructor(t, e) {
                    if (!(t && e && e.visualResponses && e.gamepadIndices && 0 !== Object.keys(e.gamepadIndices).length)) throw new Error("Invalid arguments supplied");
                    this.id = t, this.type = e.type, this.rootNodeName = e.rootNodeName, this.touchPointNodeName = e.touchPointNodeName, this.visualResponses = {}, Object.keys(e.visualResponses).forEach((t => {
                        const s = new h(e.visualResponses[t]);
                        this.visualResponses[t] = s
                    })), this.gamepadIndices = Object.assign({}, e.gamepadIndices), this.values = {
                        state: n.ComponentState.DEFAULT,
                        button: void 0 !== this.gamepadIndices.button ? 0 : void 0,
                        xAxis: void 0 !== this.gamepadIndices.xAxis ? 0 : void 0,
                        yAxis: void 0 !== this.gamepadIndices.yAxis ? 0 : void 0
                    }
                }
                get data() {
                    return {
                        id: this.id,
                        ...this.values
                    }
                }
                updateFromGamepad(t) {
                    if (this.values.state = n.ComponentState.DEFAULT, void 0 !== this.gamepadIndices.button && t.buttons.length > this.gamepadIndices.button) {
                        const e = t.buttons[this.gamepadIndices.button];
                        this.values.button = e.value, this.values.button = this.values.button < 0 ? 0 : this.values.button, this.values.button = this.values.button > 1 ? 1 : this.values.button, e.pressed || 1 === this.values.button ? this.values.state = n.ComponentState.PRESSED : (e.touched || this.values.button > n.ButtonTouchThreshold) && (this.values.state = n.ComponentState.TOUCHED)
                    }
                    void 0 !== this.gamepadIndices.xAxis && t.axes.length > this.gamepadIndices.xAxis && (this.values.xAxis = t.axes[this.gamepadIndices.xAxis], this.values.xAxis = this.values.xAxis < -1 ? -1 : this.values.xAxis, this.values.xAxis = this.values.xAxis > 1 ? 1 : this.values.xAxis, this.values.state === n.ComponentState.DEFAULT && Math.abs(this.values.xAxis) > n.AxisTouchThreshold && (this.values.state = n.ComponentState.TOUCHED)), void 0 !== this.gamepadIndices.yAxis && t.axes.length > this.gamepadIndices.yAxis && (this.values.yAxis = t.axes[this.gamepadIndices.yAxis], this.values.yAxis = this.values.yAxis < -1 ? -1 : this.values.yAxis, this.values.yAxis = this.values.yAxis > 1 ? 1 : this.values.yAxis, this.values.state === n.ComponentState.DEFAULT && Math.abs(this.values.yAxis) > n.AxisTouchThreshold && (this.values.state = n.ComponentState.TOUCHED)), Object.values(this.visualResponses).forEach((t => {
                        t.updateFromComponent(this.values)
                    }))
                }
            }
            class c {
                constructor(t, e, s) {
                    if (!t) throw new Error("No xrInputSource supplied");
                    if (!e) throw new Error("No profile supplied");
                    this.xrInputSource = t, this.assetUrl = s, this.id = e.profileId, this.layoutDescription = e.layouts[t.handedness], this.components = {}, Object.keys(this.layoutDescription.components).forEach((t => {
                        const e = this.layoutDescription.components[t];
                        this.components[t] = new l(t, e)
                    })), this.updateFromGamepad()
                }
                get gripSpace() {
                    return this.xrInputSource.gripSpace
                }
                get targetRaySpace() {
                    return this.xrInputSource.targetRaySpace
                }
                get data() {
                    const t = [];
                    return Object.values(this.components).forEach((e => {
                        t.push(e.data)
                    })), t
                }
                updateFromGamepad() {
                    Object.values(this.components).forEach((t => {
                        t.updateFromGamepad(this.xrInputSource.gamepad)
                    }))
                }
            }
            var p = s(25108);
            class d extends i.Object3D {
                constructor() {
                    super(), this.motionController = null, this.envMap = null
                }
                setEnvironmentMap(t) {
                    return this.envMap == t || (this.envMap = t, this.traverse((t => {
                        t.isMesh && (t.material.envMap = this.envMap, t.material.needsUpdate = !0)
                    }))), this
                }
                updateMatrixWorld(t) {
                    super.updateMatrixWorld(t), this.motionController && (this.motionController.updateFromGamepad(), Object.values(this.motionController.components).forEach((t => {
                        Object.values(t.visualResponses).forEach((t => {
                            const {
                                valueNode: e,
                                minNode: s,
                                maxNode: i,
                                value: o,
                                valueNodeProperty: a
                            } = t;
                            e && (a === n.VisualResponseProperty.VISIBILITY ? e.visible = o : a === n.VisualResponseProperty.TRANSFORM && (e.quaternion.slerpQuaternions(s.quaternion, i.quaternion, o), e.position.lerpVectors(s.position, i.position, o)))
                        }))
                    })))
                }
            }

            function u(t, e) {
                ! function(t, e) {
                    Object.values(t.components).forEach((t => {
                        const {
                            type: s,
                            touchPointNodeName: o,
                            visualResponses: a
                        } = t;
                        if (s === n.ComponentType.TOUCHPAD)
                            if (t.touchPointNode = e.getObjectByName(o), t.touchPointNode) {
                                const e = new i.SphereGeometry(.001),
                                    s = new i.MeshBasicMaterial({
                                        color: 255
                                    }),
                                    o = new i.Mesh(e, s);
                                t.touchPointNode.add(o)
                            } else p.warn(`Could not find touch dot, ${t.touchPointNodeName}, in touchpad component ${t.id}`);
                        Object.values(a).forEach((t => {
                            const {
                                valueNodeName: s,
                                minNodeName: i,
                                maxNodeName: o,
                                valueNodeProperty: a
                            } = t;
                            if (a === n.VisualResponseProperty.TRANSFORM) {
                                if (t.minNode = e.getObjectByName(i), t.maxNode = e.getObjectByName(o), !t.minNode) return void p.warn(`Could not find ${i} in the model`);
                                if (!t.maxNode) return void p.warn(`Could not find ${o} in the model`)
                            }
                            t.valueNode = e.getObjectByName(s), t.valueNode || p.warn(`Could not find ${s} in the model`)
                        }))
                    }))
                }(t.motionController, e), t.envMap && e.traverse((e => {
                    e.isMesh && (e.material.envMap = t.envMap, e.material.needsUpdate = !0)
                })), t.add(e)
            }
            class m {
                constructor(t = null, e = null) {
                    this.gltfLoader = t, this.path = "https://cdn.jsdelivr.net/npm/@webxr-input-profiles/assets@1.0/dist/profiles", this._assetCache = {}, this.onLoad = e, this.gltfLoader || (this.gltfLoader = new o.E)
                }
                setPath(t) {
                    return this.path = t, this
                }
                createControllerModel(t) {
                    const e = new d;
                    let s = null;
                    return t.addEventListener("connected", (t => {
                        const i = t.data;
                        "tracked-pointer" === i.targetRayMode && i.gamepad && async function(t, e, s = null, i = !0) {
                            if (!t) throw new Error("No xrInputSource supplied");
                            if (!e) throw new Error("No basePath supplied");
                            const o = await async function(t) {
                                if (!t) throw new Error("No basePath supplied");
                                return await a(`${t}/profilesList.json`)
                            }(e);
                            let n;
                            if (t.profiles.some((t => {
                                    const s = o[t];
                                    return s && (n = {
                                        profileId: t,
                                        profilePath: `${e}/${s.path}`,
                                        deprecated: !!s.deprecated
                                    }), !!n
                                })), !n) {
                                if (!s) throw new Error("No matching profile name found");
                                const t = o[s];
                                if (!t) throw new Error(`No matching profile name found and default profile "${s}" missing.`);
                                n = {
                                    profileId: s,
                                    profilePath: `${e}/${t.path}`,
                                    deprecated: !!t.deprecated
                                }
                            }
                            const r = await a(n.profilePath);
                            let h;
                            if (i) {
                                let e;
                                if (e = "any" === t.handedness ? r.layouts[Object.keys(r.layouts)[0]] : r.layouts[t.handedness], !e) throw new Error(`No matching handedness, ${t.handedness}, in profile ${n.profileId}`);
                                e.assetPath && (h = n.profilePath.replace("profile.json", e.assetPath))
                            }
                            return {
                                profile: r,
                                assetPath: h
                            }
                        }(i, this.path, "generic-trigger").then((({
                            profile: t,
                            assetPath: o
                        }) => {
                            e.motionController = new c(i, t, o);
                            const n = this._assetCache[e.motionController.assetUrl];
                            if (n) s = n.scene.clone(), u(e, s), this.onLoad && this.onLoad(s);
                            else {
                                if (!this.gltfLoader) throw new Error("GLTFLoader not set.");
                                this.gltfLoader.setPath(""), this.gltfLoader.load(e.motionController.assetUrl, (t => {
                                    this._assetCache[e.motionController.assetUrl] = t, s = t.scene.clone(), u(e, s), this.onLoad && this.onLoad(s)
                                }), null, (() => {
                                    throw new Error(`Asset ${e.motionController.assetUrl} missing or malformed.`)
                                }))
                            }
                        })).catch((t => {
                            p.warn(t)
                        }))
                    })), t.addEventListener("disconnected", (() => {
                        e.motionController = null, e.remove(s), s = null
                    })), e
                }
            }
        }
    }
]);