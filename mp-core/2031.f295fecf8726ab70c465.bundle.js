"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2031], {
        32031: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => o
            });
            var s = i(99477),
                n = i(6147);
            class a extends n.Z {
                async onLoad() {
                    this.object = new s.Group, metapress.editor?.isOpen && this.$editor_onOpen()
                }
                $editor_onOpen() {
                    this.tool || (this.tool = metapress.entities.add({
                        type: "mesh",
                        url: i(63216),
                        parent: this.entity.id,
                        hidden: !1,
                        physical: !0
                    })), metapress.entities.update(this.tool.id, {
                        hidden: !1,
                        physical: !0
                    })
                }
                $editor_onClose() {
                    this.tool && metapress.entities.update(this.tool.id, {
                        hidden: !0,
                        physical: !1
                    })
                }
            }
            var r = i(25108);
            class o {
                id = "core.spawnpoint";
                name = "Spawn point";
                description = "This plugin allows the user to specify spawn points.";
                version = "1.0.0";
                requires = ["avatars"];
                provides = ["spawnpoints", "render:spawnpoint"];
                createRenderer(t) {
                    if ("spawnpoint" == t) return new a
                }
                $editor_getAddableEntities = () => [{
                    id: "spawnpoint",
                    name: "Spawn Point",
                    icon: i(83843),
                    description: "Specifies where new users will appear.",
                    action: t => this.addSpawnPoint()
                }];
                addSpawnPoint() {
                    let t = new THREE.Vector3,
                        e = new THREE.Vector3;
                    metapress.renderer.camera.getWorldPosition(t), metapress.renderer.camera.getWorldDirection(e), e.setLength(2), e.add(new THREE.Vector3(0, 1, 0).cross(e).setLength(1)), e.add(t);
                    let i = metapress.entities.add({
                        type: "spawnpoint",
                        name: "Spawn Point",
                        sync: "template",
                        x: e.x,
                        y: e.y,
                        z: e.z
                    });
                    metapress.editor.selectionManager.select(i.id)
                }
                $loader_onEnterWorld() {
                    this.respawn()
                }
                respawn() {
                    let t = metapress.entities.all.filter((t => "spawnpoint" == t.type)),
                        e = t[Math.floor(Math.random() * t.length)],
                        i = e?.x || 0,
                        s = (e?.y || 0) + .1,
                        n = e?.z || 0;
                    if (e || r.warn("[SpawnPointPlugin] No spawn points found in the space."), i += 1 * Math.random() * 2 - 1, n += 1 * Math.random() * 2 - 1, metapress.avatars.moveTo(i, s, n), e?.quatX || e?.quatY || e?.quatZ || e?.quatW) {
                        let t = new THREE.Quaternion(e.quatX || 0, e.quatY || 0, e.quatZ || 0, e.quatW || 0),
                            i = (new THREE.Euler).setFromQuaternion(t, "YXZ");
                        metapress.camera.rotation.y = i.y
                    }
                    let a = !this.hasSpawned;
                    this.hasSpawned = !0, metapress.plugins.sendEvent("spawnpoint_onSpawn", {
                        x: i,
                        y: s,
                        z: n,
                        isFirstSpawn: a
                    })
                }
                $getDebugMenuOptions = () => [{
                    id: "core.spawnpoint.respawn",
                    section: "Avatar",
                    name: "Respawn",
                    action: () => this.respawn()
                }];
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:info`,
                    type: "info",
                    name: "Spawn point",
                    tags: "spawn point",
                    content: "\n                Spawn Points are used to determine where a new user should spawn in the world. You can use the Editor to create new spawn points.\n            "
                }, {
                    id: `${this.id}:respawn`,
                    type: "action",
                    name: "Respawn",
                    tags: "respawn, unstuck, stuck in ground, stuck in world, stuck in floor, stuck in wall, stuck in ceiling",
                    content: "\n                Use this action to respawn the user. This can be used if the user gets stuck as well.\n            ",
                    action: t => (this.respawn(), "Success")
                }]
            }
        },
        6147: (t, e, i) => {
            i.d(e, {
                Z: () => n
            });
            var s = i(4028);
            class n {
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
                    let t = n.showBoundingBoxes && this.container.visible;
                    !t && this.boundingBoxHelper ? (this.boundingBoxHelper.removeFromParent(), this.boundingBoxHelper.dispose(), this.boundingBoxHelper = null) : t && !this.boundingBoxHelper && (this.boundingBoxHelper = new THREE.BoxHelper(this.container, 16777215), metapress.renderer.scene.add(this.boundingBoxHelper))
                }
                applyWireframe() {
                    this._lastWireframeMode != n.wireframeMode && (this._lastWireframeMode = n.wireframeMode, this.container.traverse((t => {
                        t.isMesh && t.material && (this.hasLoaded || (this.wireframeState[t.uuid] = !!t.material.wireframe), t.material.wireframe = !!n.wireframeMode || (this.wireframeState[t.uuid] ?? !1))
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
        63216: (t, e, i) => {
            t.exports = i.p + "mp-core/Spawn Point Indicator.53f9ae103a84ba06c10b.glb"
        },
        83843: (t, e, i) => {
            t.exports = i.p + "mp-core/spawnpoint-icon.9e8b1ced194273c71120.svg"
        }
    }
]);