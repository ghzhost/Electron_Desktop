"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [6955], {
        26955: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => o
            });
            var s = i(4162),
                r = i(99477),
                a = i(25108);
            class o {
                id = "core.render.camera";
                name = "Camera Controller";
                description = "Controls the 3D camera.";
                version = "1.0.0";
                requires = ["renderer", "raycast", "input"];
                provides = ["camera"];
                priority = 100;
                focusedEntity = null;
                attachedEntity = null;
                attachedPosition = new r.Vector3;
                attachedEntityOffset = new r.Vector3;
                screenOffset = new r.Vector2(.3, 0);
                cameraCollision = !0;
                get camera() {
                    return metapress.renderer.camera
                }
                zoom = 2;
                minZoom = 1;
                maxZoom = 5;
                rotation = new r.Vector2;
                wantsToBeBehind = !0;
                cameraColliderFirstPerson = !1;
                get isFirstPerson() {
                    return 0 == this.zoom || metapress.renderer.glrenderer.xr.isPresenting || 1 == this.cameraColliderFirstPerson
                }
                onLoad() {
                    this.raycaster = new r.Raycaster, this.tempVec1 = new r.Vector3, this.tempVec2 = new r.Vector3, this.camera.rotation.order = "YXZ", this.reticleDiv = document.createElement("div"), this.reticleDiv.style.cssText = `position: absolute; width: 8px; height: 8px; top: calc(50% - 4px); left: calc(50% - 4px); opacity: 0; transition: width 0.3s, height 0.3s, top 0.3s, left 0.3s, opacity 0.3s, background-color 0.3s; background-color: black; mask: url(${i(62994)}) center / contain no-repeat; -webkit-mask: url(${i(62994)}) center / contain no-repeat; pointer-events: none; `, metapress.contentDiv.appendChild(this.reticleDiv), this.hoveringTimer = setInterval((() => this.doHoveringCheck()), 250), this.colorTimer = setInterval((() => this.doReticleColorCheck()), 1e3)
                }
                get reticleActive() {
                    return this._reticleActive
                }
                set reticleActive(t) {
                    this._reticleActive !== t && (this._reticleActive = t, this.updateReticleStyle())
                }
                get reticleLightMode() {
                    return this._reticleLightMode
                }
                set reticleLightMode(t) {
                    this._reticleLightMode !== t && (this._reticleLightMode = t, this.updateReticleStyle())
                }
                get reticleVisible() {
                    return this._reticleVisible
                }
                set reticleVisible(t) {
                    this._reticleVisible !== t && (this._reticleVisible = t, this.updateReticleStyle())
                }
                updateReticleStyle() {
                    this.reticleVisible ? (this.reticleActive ? this.reticleDiv.style.cssText += "width: 16px; height: 16px; top: calc(50% - 8px); left: calc(50% - 8px); opacity: 0.75; " : this.reticleDiv.style.cssText += "width: 8px; height: 8px; top: calc(50% - 4px); left: calc(50% - 4px); opacity: 0.25; ", this.reticleLightMode ? this.reticleDiv.style.cssText += "background-color: white; " : this.reticleDiv.style.cssText += "background-color: black; ") : this.reticleDiv.style.cssText += "width: 8px; height: 8px; top: calc(50% - 4px); left: calc(50% - 4px); opacity: 0; "
                }
                async doHoveringCheck() {
                    if (metapress.renderer.glrenderer.xr.isPresenting) return;
                    if (!document.pointerLockElement && !metapress.input.gamepad.isActive) return this.focusedEntity = null, this.focusedEntityHit = null, this.reticleActive = !1, void(this.reticleVisible = !1);
                    this.reticleVisible = !0;
                    let t = metapress.raycast.clickableAtScreenCoordinates(metapress.renderer.canvasRect.width / 2, metapress.renderer.canvasRect.height / 2, 10);
                    if (!t?.entityRenderer) return this.focusedEntity = null, this.focusedEntityHit = null, void(this.reticleActive = !1);
                    this.focusedEntity = t.entity, this.focusedEntityHit = t, this.reticleActive = !0
                }
                async doReticleColorCheck() {
                    if (metapress.renderer.glrenderer.xr.isPresenting) return;
                    this._reticleImgBuffer || (this._reticleImgBuffer = new Uint8Array(4096));
                    let t = this._reticleImgBuffer,
                        e = metapress.renderer.glrenderer.getContext(),
                        i = metapress.renderer.canvasRect.width / 2 - 16,
                        s = metapress.renderer.canvasRect.height / 2 - 16;
                    e.readPixels(i, s, 32, 32, e.RGBA, e.UNSIGNED_BYTE, t);
                    let r = 0;
                    for (let e = 0; e < t.length; e += 4) r += (t[e + 0] + t[e + 1] + t[e + 2]) / 3;
                    r /= 1024, this.reticleLightMode = r < 128
                }
                $onRender() {
                    this.updateCamera()
                }
                axisX = new r.Vector3(1, 0, 0);
                axisY = new r.Vector3(0, 1, 0);
                axisZ = new r.Vector3(0, 0, 1);
                quatA = new r.Quaternion;
                v3a = new r.Vector3;
                updateCamera() {
                    if (this.attachedEntityRenderer && this.attachedEntityRenderer.entity == this.attachedEntity || (this.attachedEntityRenderer = this.attachedEntity && metapress.entities.getRenderer(this.attachedEntity.id), this.avatarHideLockRelease?.(), this.avatarHideLockRelease = null, this.bodyphysicsModifier = null), this.attachedEntityRenderer && (this.attachedEntityRenderer.container?.updateMatrixWorld(), this.attachedEntityRenderer.container?.getWorldPosition(this.attachedPosition), this.attachedPosition.add(this.attachedEntityOffset)), this.zoom == this.minZoom && metapress.input.zoomSmoothed < 0 ? this.zoom = 0 : 0 == this.zoom && metapress.input.zoomSmoothed > 0 && (this.zoom = this.minZoom), !this.avatarHideLockRelease && this.isFirstPerson ? this.avatarHideLockRelease = this.attachedEntityRenderer?.hideLock?.acquire() : this.avatarHideLockRelease && !this.isFirstPerson && (this.avatarHideLockRelease?.(), this.avatarHideLockRelease = null), !metapress.renderer.glrenderer.xr.isPresenting)
                        if (this.wantsToBeBehind && this.attachedEntityRenderer, this.rotation.x = r.MathUtils.clamp(this.rotation.x + metapress.input.rotationSmoothed.y, -1.45, 1.45), this.rotation.y += metapress.input.rotationSmoothed.x, this.zoom > 0 && (this.zoom = r.MathUtils.clamp(this.zoom + metapress.input.zoomSmoothed, this.minZoom, this.maxZoom)), this.v3a.set(0, 0, this.zoom), this.v3a.applyAxisAngle(this.axisX, this.rotation.x), this.v3a.applyAxisAngle(this.axisY, this.rotation.y), this.v3a.add(this.attachedPosition), this.camera.position.copy(this.v3a), 0 == this.zoom) this.setCameraToFirstPerson();
                        else if (this.v3a.set(this.screenOffset.x, this.screenOffset.y, 0), this.v3a.applyAxisAngle(this.axisX, this.rotation.x), this.v3a.applyAxisAngle(this.axisY, this.rotation.y), this.v3a.add(this.attachedPosition), this.camera.lookAt(this.v3a), this.cameraCollision && this.attachedEntityRenderer) {
                        this.desiredCameraDistance = this.camera.position.distanceTo(this.attachedPosition), this.tempVec1.subVectors(this.camera.position, this.attachedPosition).normalize(), this.raycasterRapier = new s.zH(this.attachedPosition, this.tempVec1), this.bodyphysicsModifier || (this.bodyphysicsModifier = metapress.entities.getModifier(metapress.avatar?.currentUserEntity.id, "physics"));
                        let t = metapress.physics?.world.castRayAndGetNormal(this.raycasterRapier, this.desiredCameraDistance, !1, null, null, null, this.bodyphysicsModifier?.body);
                        if (t && (this.tempVec2.copy(this.tempVec1).multiplyScalar(.9 * t.toi).add(this.attachedPosition), this.camera.position.copy(this.tempVec2), this.tempVec2.distanceTo(this.attachedPosition) < 1)) return this.cameraColliderFirstPerson = !0, void this.setCameraToFirstPerson();
                        this.cameraColliderFirstPerson = !1
                    }
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:setFirstPerson`,
                    type: "action",
                    name: "Set to first person",
                    content: `Run "${this.id}:setFirstPerson" to set the camera to first person mode. This will make the camera look straight forward from the user's perspective.`,
                    action: async () => {
                        try {
                            return this.zoom = 0, metapress.input.zoomSmoothed = -1, this.setCameraToFirstPerson(), "Success, camera set to first person mode"
                        } catch (t) {
                            return a.warn("[CameraController] Error:", t), "Failed to set camera to first person mode"
                        }
                    }
                }];
                setCameraToFirstPerson() {
                    this.v3a.set(0, 0, -1), this.v3a.applyAxisAngle(this.axisX, this.rotation.x), this.v3a.applyAxisAngle(this.axisY, this.rotation.y), this.v3a.add(this.camera.position), this.camera.lookAt(this.v3a)
                }
            }
        },
        62994: (t, e, i) => {
            t.exports = i.p + "mp-core/reticle.fbac6bded228452dead9.svg"
        }
    }
]);