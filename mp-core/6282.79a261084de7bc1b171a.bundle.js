"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [6282], {
        6147: (e, t, i) => {
            i.d(t, {
                Z: () => r
            });
            var n = i(4028);
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
                    for (let e of metapress.entities.renderers) e != this && e.container?.isObject3D && e.applyParent && e.applyParent(!0);
                    this.entity.wireframe != this._lastEntityWireframe && (this._lastEntityWireframe = this.entity.wireframe, this.container.traverse((e => {
                        e.isMesh && e.material && (e.material.wireframe = this.entity.wireframe ?? !1, this.wireframeState[e.uuid] = e.material.wireframe)
                    }))), this.onRender()
                }
                onRender() {
                    this._lastTransformUpdate != this.entity.lastModified && (this._lastTransformUpdate = this.entity.lastModified, this.applyTransforms()), this.applyHideLock(), this.applyBoundingBox(), this.applyWireframe()
                }
                applyTransforms() {
                    this.object && (this.entity.x = parseFloat(this.entity.x) || 0, this.entity.y = parseFloat(this.entity.y) || 0, this.entity.z = parseFloat(this.entity.z) || 0, this.entity.scaleX = parseFloat(this.entity.scaleX) || 1, this.entity.scaleY = parseFloat(this.entity.scaleY) || 1, this.entity.scaleZ = parseFloat(this.entity.scaleZ) || 1, this.entity.quatX = parseFloat(this.entity.quatX) || 0, this.entity.quatY = parseFloat(this.entity.quatY) || 0, this.entity.quatZ = parseFloat(this.entity.quatZ) || 0, this.entity.quatW = parseFloat(this.entity.quatW) || 0, this.entity.extra_offset_x = parseFloat(this.entity.extra_offset_x) || 0, this.entity.extra_offset_y = parseFloat(this.entity.extra_offset_y) || 0, this.entity.extra_offset_z = parseFloat(this.entity.extra_offset_z) || 0, this.entity.extra_scale_x = parseFloat(this.entity.extra_scale_x) || 1, this.entity.extra_scale_y = parseFloat(this.entity.extra_scale_y) || 1, this.entity.extra_scale_z = parseFloat(this.entity.extra_scale_z) || 1, this.entity.extra_rotation_x = parseFloat(this.entity.extra_rotation_x) || 0, this.entity.extra_rotation_y = parseFloat(this.entity.extra_rotation_y) || 0, this.entity.extra_rotation_z = parseFloat(this.entity.extra_rotation_z) || 0, this.container.position.set(this.entity.x, this.entity.y, this.entity.z), this.container.scale.set(this.entity.scaleX, this.entity.scaleY, this.entity.scaleZ), this.entity.quatX || this.entity.quatY || this.entity.quatZ || this.entity.quatW ? this.container.quaternion.set(this.entity.quatX, this.entity.quatY, this.entity.quatZ, this.entity.quatW) : this.container.quaternion.set(0, 0, 0, 1), this.object.position.set(this.entity.extra_offset_x, this.entity.extra_offset_y, this.entity.extra_offset_z), this.object.scale.set(this.entity.extra_scale_x, this.entity.extra_scale_y, this.entity.extra_scale_z), this.object.rotation.set(this.entity.extra_rotation_x, this.entity.extra_rotation_y, this.entity.extra_rotation_z))
                }
                applyHideLock() {
                    let e = !this.entity.hidden && !this.hideLock.isAcquired;
                    this.container.visible && !e ? this.container.visible = !1 : !this.container.visible && e && (this.container.visible = !0)
                }
                applyBoundingBox() {
                    this.boundingBoxHelper?.update();
                    let e = r.showBoundingBoxes && this.container.visible;
                    !e && this.boundingBoxHelper ? (this.boundingBoxHelper.removeFromParent(), this.boundingBoxHelper.dispose(), this.boundingBoxHelper = null) : e && !this.boundingBoxHelper && (this.boundingBoxHelper = new THREE.BoxHelper(this.container, 16777215), metapress.renderer.scene.add(this.boundingBoxHelper))
                }
                applyWireframe() {
                    this._lastWireframeMode != r.wireframeMode && (this._lastWireframeMode = r.wireframeMode, this.container.traverse((e => {
                        e.isMesh && e.material && (this.hasLoaded || (this.wireframeState[e.uuid] = !!e.material.wireframe), e.material.wireframe = !!r.wireframeMode || (this.wireframeState[e.uuid] ?? !1))
                    })), this.hasLoaded = !0)
                }
                applyParent(e) {
                    if (!e && !this.parentHideLock && void 0 !== this._lastParent && this._lastParent != this.entity.parent) return;
                    if (this._lastParent = this.entity.parent || "", !e)
                        for (let e of metapress.entities.renderers) e != this && e.container?.isObject3D && e.applyParent && e.applyParent(!0);
                    if (!this.entity.parent) return this.parentHideLock?.(), this.parentHideLock = null, void(this.container && this.container.parent != metapress.renderer.scene && (this.container.removeFromParent(), metapress.renderer.scene.add(this.container)));
                    let t = metapress.entities.getRenderer(this.entity.parent);
                    t?.object?.isObject3D ? (this.parentHideLock?.(), this.parentHideLock = null, this.container.parent != t.container && (this.container.removeFromParent(), t.container.add(this.container))) : this.parentHideLock || (this.parentHideLock = this.hideLock.acquire())
                }
            }
        },
        16282: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => c
            });
            var n = i(99477),
                r = i(6147),
                s = i(25108);
            class a extends r.Z {
                get settings() {
                    let e = [],
                        t = metapress.plugins.callAll("getRegionPresets").flat().filter((e => !!e.id)).sort(((e, t) => e.priority != t.priority ? (t.priority || 0) - (e.priority || 0) : (e.name || e.id).localeCompare(t.name || t.id)));
                    return t.unshift({
                        id: "",
                        name: "(none)"
                    }), e.push({
                        id: "region_preset",
                        name: "Preset",
                        type: "select",
                        help: "Select a preset environment type.",
                        values: t.map((e => e.id)),
                        labels: t.map((e => e.name || e.id))
                    }), e
                }
                async onLoad() {
                    let e = new n.BoxGeometry(1, 1, 1),
                        t = new n.MeshBasicMaterial;
                    this.object = new n.Mesh(e, t), this.object.visible = !1, this._lastPreset = this.entity.region_preset, a._checkTimer || (a._checkTimer = setInterval((() => a.checkAll()), 1e3)), this.entity.region_preset && this.setPreset(this.entity.region_preset)
                }
                afterLoad() {
                    super.afterLoad(), this.object.updateMatrixWorld(!0)
                }
                onEntityEdited() {
                    if (this._lastPreset != this.entity.region_preset) {
                        this._lastPreset = this.entity.region_preset;
                        try {
                            this.setPreset(this.entity.region_preset)
                        } catch (e) {
                            s.warn(`[MetaPress > Region] Unable to set preset to '${this.entity.region_preset}' : ${e.message}`)
                        }
                    }
                }
                setPreset(e) {
                    if (!e) return;
                    let t = metapress.plugins.callAll("getRegionPresets").flat().find((t => t.id == e));
                    if (!t) throw new Error("Preset not found.");
                    if (!t.fields) throw new Error("Missing 'fields' on preset.");
                    for (let e in t.fields) "id" != e && "name" != e && "type" != e && "comment" != e && (this.entity[e] = t.fields[e]);
                    this.entity.lastModified = Date.now()
                }
                static activeRegions() {
                    let e = [],
                        t = metapress.renderer.camera.position;
                    for (let i of metapress.entities.renderers) "region" == i.entity.type && i.object?.geometry && (this._box3a || (this._box3a = new n.Box3), this._m4a || (this._m4a = new n.Matrix4), i.object.geometry.boundingBox || i.object.geometry.computeBoundingBox(), i.container.updateMatrixWorld(!0), this._box3a.copy(i.object.geometry.boundingBox).applyMatrix4(i.container.matrixWorld), this._box3a.containsPoint(t) && e.push(i));
                    return e.sort(((e, t) => (this._v3a || (this._v3a = new n.Vector3), e.object.geometry.boundingBox.getSize(this._v3a).length() - t.object.geometry.boundingBox.getSize(this._v3a).length()))), e
                }
                static checkAll() {
                    let e = a.activeRegions();
                    for (let t of metapress.entities.renderers) {
                        if ("region" != t.entity.type) continue;
                        if (!t.object?.geometry) continue;
                        let i = e.includes(t);
                        i && !t._regionWasActive ? (t._regionWasActive = i, t.onRegionActivate?.()) : !i && t._regionWasActive && (t._regionWasActive = i, t.onRegionDeactivate?.());
                        let n = e[0] == t;
                        n && !t._regionWasPrimary ? (t._regionWasPrimary = n, t.onRegionBecamePrimary?.()) : !n && t._regionWasPrimary && (t._regionWasPrimary = n, t.onRegionLostPrimary?.())
                    }
                    for (let t of metapress.entities.modifiers) {
                        if ("region" != t.entity.type) continue;
                        if (!t.renderer?.object?.geometry) continue;
                        let i = e.includes(t.renderer);
                        i && !t._regionWasActive ? (t._regionWasActive = i, t.onRegionActivate?.()) : !i && t._regionWasActive && (t._regionWasActive = i, t.onRegionDeactivate?.());
                        let n = a.isPrimaryModifier(e, t.entity.id, t.id);
                        n && !t._regionWasPrimary ? (t._regionWasPrimary = n, t.onRegionModifierBecamePrimary?.()) : !n && t._regionWasPrimary && (t._regionWasPrimary = n, t.onRegionModifierLostPrimary?.())
                    }
                }
                static isPrimaryModifier(e, t, i) {
                    for (let n of e)
                        if (n.entity["modifier:" + i]) return n.entity.id == t;
                    return !1
                }
            }
            var o = i(91259);
            class p {
                name = "Skybox";
                hidden = !0;
                exrLoader = null;
                get settings() {
                    if (this.entity.skybox_settings_hidden) return [];
                    let e = [];
                    return e.push({
                        id: "skybox_type",
                        type: "select",
                        name: "Type",
                        values: ["cubemap", "equirectangular"],
                        labels: ["Cube Map", "Equirectangular"]
                    }), "cubemap" == this.entity.skybox_type ? e = e.concat([{
                        id: "skybox_nx",
                        name: "-X",
                        type: "file"
                    }, {
                        id: "skybox_px",
                        name: "+X",
                        type: "file"
                    }, {
                        id: "skybox_ny",
                        name: "-Y",
                        type: "file"
                    }, {
                        id: "skybox_py",
                        name: "+Y",
                        type: "file"
                    }, {
                        id: "skybox_nz",
                        name: "-Z",
                        type: "file"
                    }, {
                        id: "skybox_pz",
                        name: "+Z",
                        type: "file"
                    }]) : "equirectangular" == this.entity.skybox_type ? e = e.concat([{
                        id: "skybox_equirectangular",
                        name: "Image",
                        type: "file"
                    }]) : "skybox_exr" == this.entity.skybox_type && (e = e.concat([{
                        id: "skybox_exr_file",
                        name: "exr",
                        type: "file"
                    }])), e.push({
                        type: "header",
                        name: "Environment Map"
                    }), e.push({
                        id: "envmap_copy_skybox",
                        type: "checkbox",
                        name: "Copy skybox"
                    }), this.entity.envmap_copy_skybox || e.push({
                        id: "envmap_type",
                        type: "select",
                        name: "Type",
                        values: ["", "cubemap", "equirectangular"],
                        labels: ["Default", "Cube Map", "Equirectangular"]
                    }), this.entity.envmap_copy_skybox || !this.entity.envmap_type || ("cubemap" == this.entity.envmap_type ? e = e.concat([{
                        id: "envmap_nx",
                        name: "Environment -X",
                        type: "file"
                    }, {
                        id: "envmap_px",
                        name: "Environment +X",
                        type: "file"
                    }, {
                        id: "envmap_ny",
                        name: "Environment -Y",
                        type: "file"
                    }, {
                        id: "envmap_py",
                        name: "Environment +Y",
                        type: "file"
                    }, {
                        id: "envmap_nz",
                        name: "Environment -Z",
                        type: "file"
                    }, {
                        id: "envmap_pz",
                        name: "Environment +Z",
                        type: "file"
                    }]) : "equirectangular" == this.entity.envmap_type && (e = e.concat([{
                        id: "envmap_equirectangular",
                        name: "Image",
                        type: "file"
                    }]))), e
                }
                onRegionModifierBecamePrimary() {
                    this.isPrimarySkybox = !0, this._fieldCache = null, this.updateEnvironment()
                }
                onRegionModifierLostPrimary() {
                    this.isPrimarySkybox = !1, this._fieldCache = null
                }
                onEntityEdited() {
                    this.isPrimarySkybox && this.updateEnvironment()
                }
                hasPropertiesChanged() {
                    const e = ["skybox_nx", "skybox_px", "skybox_ny", "skybox_py", "skybox_nz", "skybox_pz", "skybox_type", "skybox_equirectangular", "envmap_nx", "envmap_px", "envmap_ny", "envmap_py", "envmap_nz", "envmap_pz", "envmap_copy_skybox", "envmap_type", "envmap_equirectangular"];
                    this._fieldCache || (this._fieldCache = {});
                    let t = !1;
                    for (let i of e) this._fieldCache[i] != this.entity[i] && (t = !0, this._fieldCache[i] = this.entity[i]);
                    return t
                }
                async updateEnvironment() {
                    if (!this.hasPropertiesChanged()) return;
                    let e = ((t = metapress.renderer.glrenderer)._pmremGenerator || (t._pmremGenerator = new n.PMREMGenerator(t), t._pmremGenerator.compileCubemapShader(), t._pmremGenerator.compileEquirectangularShader()), t._pmremGenerator);
                    var t;
                    "cubemap" == this.entity.skybox_type ? metapress.renderer.scene.background = (new n.CubeTextureLoader).load([this.entity.skybox_px, this.entity.skybox_nx, this.entity.skybox_py, this.entity.skybox_ny, this.entity.skybox_pz, this.entity.skybox_nz], (e => {
                        metapress.renderer.scene.background = e
                    })) : "equirectangular" == this.entity.skybox_type && "exr" == this.entity.skybox_equirectangular?.split("?")[0].split(".").pop() ? (metapress.renderer.scene.background = (new o.I).load(this.entity.skybox_equirectangular), metapress.renderer.scene.background.mapping = n.EquirectangularReflectionMapping, metapress.renderer.scene.background.encoding = n.LinearSRGBColorSpace) : (metapress.renderer.scene.background = (new n.TextureLoader).load(this.entity.skybox_equirectangular), metapress.renderer.scene.background.mapping = n.EquirectangularReflectionMapping);
                    let r = this.entity.envmap_type,
                        s = this.entity.envmap_px,
                        a = this.entity.envmap_nx,
                        p = this.entity.envmap_py,
                        y = this.entity.envmap_ny,
                        c = this.entity.envmap_pz,
                        h = this.entity.envmap_nz,
                        l = this.entity.envmap_equirectangular || "";
                    if (this.entity.envmap_copy_skybox && (r = this.entity.skybox_type, s = this.entity.skybox_px, a = this.entity.skybox_nx, p = this.entity.skybox_py, y = this.entity.skybox_ny, c = this.entity.skybox_pz, h = this.entity.skybox_nz, l = this.entity.skybox_equirectangular || ""), r)
                        if ("cubemap" == r) {
                            let t = await new Promise(((e, t) => (new n.CubeTextureLoader).load([s, a, p, y, c, h], e, null, t)));
                            metapress.renderer.scene.environment = e.fromCubemap(t).texture
                        } else if ("equirectangular" == r && "exr" == l.split("?")[0].split(".").pop()) {
                        let t = await new Promise(((e, t) => (new o.I).load(l, e, null, t)));
                        t.mapping = n.EquirectangularReflectionMapping, t.encoding = n.LinearSRGBColorSpace, metapress.renderer.scene.environment = e.fromEquirectangular(t).texture
                    } else {
                        let t = await new Promise(((e, t) => (new n.TextureLoader).load(l, e, null, t)));
                        t.mapping = n.EquirectangularReflectionMapping, metapress.renderer.scene.environment = e.fromEquirectangular(t).texture
                    } else {
                        let t = await new Promise(((e, t) => (new n.CubeTextureLoader).load([i(52022), i(94493), i(57067), i(89701), i(42474), i(65964)], e, null, t)));
                        metapress.renderer.scene.environment = e.fromCubemap(t).texture
                    }
                }
            }
            class y {
                name = "Fog";
                hidden = !0;
                get settings() {
                    let e = [];
                    return e.push({
                        id: "fog_description",
                        type: "description",
                        name: "Adds fog to the environment."
                    }, {
                        id: "fog_enabler",
                        type: "checkbox",
                        name: "Enable Fog",
                        help: "When enabled, fog will be created for this environment."
                    }), this.entity.fog_enabler && (e = e.concat([{
                        id: "fog_color",
                        type: "color",
                        name: "Color",
                        default: "#DEDEDE",
                        value: null != this.entity.fog_color ? this.entity.fog_color : "#FFFFFF",
                        help: "The color of the fog."
                    }, {
                        id: "fog_near",
                        type: "number",
                        name: "Minimum Distance",
                        placeholder: 10,
                        help: "The minimum distance, in metres, around the user at which of the fog appears."
                    }, {
                        id: "fog_far",
                        type: "number",
                        name: "Maximum Distance",
                        placeholder: 40,
                        help: "The maximum distance, in metres, at which the fog appears."
                    }])), e
                }
                applyFog = !0;
                onRegionModifierBecamePrimary() {
                    this.isPrimary = !0, this.updateEnvironmentFog()
                }
                onRegionModifierLostPrimary() {
                    this.isPrimary = !1, metapress.renderer.scene.fog = null
                }
                onEntityEdited() {
                    this.entity.fog_enabler && this.fogDistanceValidity(), this.isPrimary && this.onRegionModifierBecamePrimary()
                }
                fogDistanceValidity() {
                    return this.entity.fog_far < 0 || this.entity.fog_near < 0 ? (metapress.menubar.toasts.show({
                        id: "fog.settings",
                        text: "Fog distance values should be positive.",
                        duration: 3e3
                    }), void(this.applyFog = !1)) : 0 != this.entity.fog_far || 0 != this.entity.fog_near ? this.entity.fog_near > this.entity.fog_far || this.entity.fog_far < this.entity.fog_near ? (metapress.menubar.toasts.show({
                        id: "fog.settings",
                        text: "Invalid fog distance values! Minimum Fog Distance should be lower than Maximum Fog Distance.",
                        duration: 3e3
                    }), void(this.applyFog = !1)) : void(this.applyFog = !0) : void(this.applyFog = !1)
                }
                updateEnvironmentFog() {
                    if (!this.entity.fog_enabler || !this.applyFog) return metapress.renderer.scene.fog = null;
                    const e = new n.Fog(new n.Color(this.entity.fog_color), this.entity.fog_near, this.entity.fog_far);
                    metapress.renderer.scene.fog = e
                }
            }
            class c {
                id = "core.render.regions";
                name = "Regions";
                description = "Manages regions.";
                version = "1.0.0";
                provides = ["render:region", "modifier:skybox", "modifier:fog"];
                createRenderer(e) {
                    if ("region" == e) return new a
                }
                createModifier(e) {
                    return "skybox" == e ? new p : "fog" == e ? new y : void 0
                }
                $getRegionPresets = () => [{
                    id: "core.sunny",
                    name: "Sunny",
                    priority: 10,
                    fields: {
                        "modifier:skybox": !0,
                        "modifier:fog": !0,
                        skybox_settings_hidden: !0,
                        skybox_type: "cubemap",
                        skybox_nx: i(93663),
                        skybox_px: i(66910),
                        skybox_ny: i(5465),
                        skybox_py: i(58464),
                        skybox_nz: i(44424),
                        skybox_pz: i(48405),
                        envmap_copy_skybox: !1,
                        envmap_type: ""
                    }
                }, {
                    id: "core.overcast",
                    name: "Overcast",
                    fields: {
                        "modifier:skybox": !0,
                        "modifier:fog": !0,
                        skybox_settings_hidden: !0,
                        skybox_type: "cubemap",
                        skybox_nx: i(93663),
                        skybox_px: i(66910),
                        skybox_ny: i(5465),
                        skybox_py: i(58464),
                        skybox_nz: i(44424),
                        skybox_pz: i(48405),
                        envmap_copy_skybox: !1,
                        envmap_type: "cubemap",
                        envmap_nx: i(74331),
                        envmap_px: i(60250),
                        envmap_ny: i(37960),
                        envmap_py: i(29826),
                        envmap_nz: i(11430),
                        envmap_pz: i(79882)
                    }
                }, {
                    id: "core.custom",
                    name: "Custom",
                    priority: -10,
                    fields: {
                        "modifier:skybox": !0,
                        skybox_settings_hidden: !1,
                        "modifier:fog": !0
                    }
                }]
            }
        },
        4028: (e, t, i) => {
            i.d(t, {
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
                    let e = !1;
                    return () => {
                        e || (e = !0, this._counter = Math.max(0, this._counter - 1))
                    }
                }
                acquire() {
                    return this.lock()
                }
            }
        },
        74331: (e, t, i) => {
            e.exports = i.p + "mp-core/overcastEnv_nx.c305aab6164aba47e304.jpg"
        },
        37960: (e, t, i) => {
            e.exports = i.p + "mp-core/overcastEnv_ny.dd15b7d3b718b31f74df.jpg"
        },
        11430: (e, t, i) => {
            e.exports = i.p + "mp-core/overcastEnv_nz.1d729561e0dca050a308.jpg"
        },
        60250: (e, t, i) => {
            e.exports = i.p + "mp-core/overcastEnv_px.0fa2662a0952f86d993a.jpg"
        },
        29826: (e, t, i) => {
            e.exports = i.p + "mp-core/overcastEnv_py.5a10b1213adccf2e2f01.jpg"
        },
        79882: (e, t, i) => {
            e.exports = i.p + "mp-core/overcastEnv_pz.bbe72b99f24a744acc85.jpg"
        },
        93663: (e, t, i) => {
            e.exports = i.p + "mp-core/skybox3_nx.c54bd67d3a1f4cf7dd40.jpg"
        },
        5465: (e, t, i) => {
            e.exports = i.p + "mp-core/skybox3_ny.f812cf466afd9b70f00b.jpg"
        },
        44424: (e, t, i) => {
            e.exports = i.p + "mp-core/skybox3_nz.066f5b999c05ff9bc0d1.jpg"
        },
        66910: (e, t, i) => {
            e.exports = i.p + "mp-core/skybox3_px.e66bb446bf515c768c9d.jpg"
        },
        58464: (e, t, i) => {
            e.exports = i.p + "mp-core/skybox3_py.712cc34a8de3bcb502c5.jpg"
        },
        48405: (e, t, i) => {
            e.exports = i.p + "mp-core/skybox3_pz.ae33242069c1dc3dad62.jpg"
        },
        94493: (e, t, i) => {
            e.exports = i.p + "mp-core/sunnyEnv_nx.6ae59103870ceb6357cd.jpg"
        },
        89701: (e, t, i) => {
            e.exports = i.p + "mp-core/sunnyEnv_ny.a3bf2702c2c6e68ac885.jpg"
        },
        65964: (e, t, i) => {
            e.exports = i.p + "mp-core/sunnyEnv_nz.fafae53c18ddc94757e6.jpg"
        },
        52022: (e, t, i) => {
            e.exports = i.p + "mp-core/sunnyEnv_px.3441181d436903d0b9c9.jpg"
        },
        57067: (e, t, i) => {
            e.exports = i.p + "mp-core/sunnyEnv_py.789e631b909ca15d3208.jpg"
        },
        42474: (e, t, i) => {
            e.exports = i.p + "mp-core/sunnyEnv_pz.1ac6f091a04f1cd66d01.jpg"
        }
    }
]);