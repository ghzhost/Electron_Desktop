"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [5414], {
        47660: (e, t, i) => {
            i.d(t, {
                Z: () => r
            });
            var n = i(6147);
            class r extends n.Z {
                get settings() {
                    return [...super.settings, {
                        type: "file",
                        id: "url",
                        name: "Source",
                        help: "The model to render."
                    }]
                }
                modelInfo = {};animationClips = [];async onLoad() {
                    let e = await metapress.assets.load("mesh", this.entity.url, !0);
                    this.object = e.scene, this.animationClips = e.animations || [], this.modelInfo = e.userData || {}
                }
            }
        },
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
        65414: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => f
            });
            class n {
                name = "Face movement direction";
                hidden = !0;
                entity = null;
                renderer = null;
                isOwner = !1;
                onLoad() {
                    if (!this.renderer.object?.isObject3D) throw new Error(`Not supported on entity of type '${this.entity.type}'`);
                    this.currentAngle = this.renderer.container.rotation.y, this.targetAngle = this.currentAngle, this.oldPosition.copy(this.renderer.container.position), this.isOwner = !this.entity.owner || this.entity.owner == metapress.instanceID
                }
                oldPosition = new THREE.Vector3;
                direction = new THREE.Vector3;
                v3a = new THREE.Vector3;
                v3b = new THREE.Vector3;
                quatA = new THREE.Quaternion;
                beforeRender() {
                    if (this.isOwner) {
                        if (Math.abs(this.oldPosition.x - this.renderer.container.position.x) > .001 || Math.abs(this.oldPosition.z - this.renderer.container.position.z) > .001) {
                            this.v3a.copy(this.renderer.container.position).sub(this.oldPosition).normalize(), this.targetAngle = -Math.atan2(this.v3a.z, this.v3a.x) + Math.PI / 2;
                            let e = 2 * Math.PI;
                            for (; Math.abs(this.targetAngle - this.currentAngle) > e / 2;) this.targetAngle += this.targetAngle > this.currentAngle ? -e : e;
                            this.oldPosition.copy(this.renderer.container.position)
                        }
                        Math.abs(this.currentAngle - this.targetAngle) > 1e-4 && (this.currentAngle = THREE.MathUtils.damp(this.currentAngle, this.targetAngle, 5, metapress.renderer.delta), this.quatA.setFromAxisAngle(THREE.Object3D.DEFAULT_UP, this.currentAngle), this.entity.quatX = this.quatA.x, this.entity.quatY = this.quatA.y, this.entity.quatZ = this.quatA.z, this.entity.quatW = this.quatA.w, this.entity.lastModified = Date.now())
                    }
                }
            }
            var r = i(25108);
            class a {
                name = "Material";
                description = "Modifies object material.";
                icon = i(5143);
                provides = ["material"];
                get settings() {
                    let e = [{
                        type: "file",
                        id: "url",
                        name: "Image",
                        allowClear: !0,
                        help: "The image to render.",
                        onRemove: () => this.removeImage(!0)
                    }, {
                        type: "select",
                        id: "transparencyMode",
                        name: "Transparency",
                        values: ["", "alpha", "clip"],
                        labels: ["None", "Alpha Blend", "Alpha Clip"],
                        help: "In Alpha Blend mode, full transparency is supported but the render order is changed, which may cause visual glitches. In Alpha Clip mode, only on/off transparency is supported but the render order is unchanged."
                    }, {
                        type: "select",
                        id: "shaderMode",
                        name: "Shading Type",
                        values: ["standard", "basic"],
                        labels: ["Standard (Default)", "Basic"],
                        help: "Shading type to be used on this object."
                    }];
                    return this.entity?.url && "" !== this.entity?.url && (e = e.concat([{
                        type: "number",
                        id: "tileX",
                        name: "Repeat X",
                        help: "Amount of times to repeat the image on the X axis."
                    }, {
                        type: "number",
                        id: "tileY",
                        name: "Repeat Y",
                        help: "Amount of times to repeat the image on the Y axis."
                    }, {
                        type: "checkbox",
                        id: "mirrorX",
                        name: "Mirrored Repeat X",
                        help: "Mirror the repeats of the image on the X axis."
                    }, {
                        type: "checkbox",
                        id: "mirrorY",
                        name: "Mirrored Repeat Y",
                        help: "Mirror the repeats of the image on the Y axis"
                    }])), e
                }
                entity = null;
                renderer = null;
                onLoad() {
                    if (!this.renderer.object?.isObject3D) throw new Error(`Not supported on entity of type '${this.entity.type}'`);
                    this.applyChanges(), this.updateMaterial()
                }
                onEntityEdited() {
                    this.applyChanges()
                }
                applyChanges() {
                    for (let e in this.entity)
                        if (e.startsWith("replaceMaterial:")) try {
                            this.applyChangesFor(e)
                        } catch (e) {
                            r.warn("[MetaPress > MaterialModifier] Error: ", e)
                        }
                }
                applyChangesFor(e) {
                    let t = e.substring(16),
                        i = this.renderer.object.getObjectByName(t);
                    if (!i) throw new Error(`Mesh not found: ${t}`);
                    let n = this.entity[e];
                    if (i._materialReplacerLastValue == n) return;
                    i._materialReplacerLastValue = n;
                    let r = n,
                        a = "",
                        s = r.indexOf(":");
                    if (-1 != s && (a = n.substring(s + 1).trim(), r = n.substring(0, s).trim()), "color" == r) "basic" == this.entity.shaderMode ? i.material = new THREE.MeshBasicMaterial({
                        color: a
                    }) : i.material = new THREE.MeshStandardMaterial({
                        color: a
                    });
                    else {
                        if ("image" != r) throw new Error(`Unknown material type '${r}'`);
                        {
                            let e = (new THREE.TextureLoader).load(a);
                            e.flipY = !1, e.colorSpace = THREE.SRGBColorSpace, "basic" == this.entity.shaderMode ? i.material = new THREE.MeshBasicMaterial({
                                map: e
                            }) : i.material = new THREE.MeshStandardMaterial({
                                map: e
                            })
                        }
                    }
                }
                onEntityUpdated() {
                    this._lastTransparencyMode == this.entity.transparencyMode && this._lastColor == this.entity.color && this._lastOpacity == this.entity.opacity && this._lastAlphaClip == this.entity.alphaClip && this._lastEntityUrl == this.entity.url && this._lastShaderMode == this.entity.shaderMode && this._lastMirrorX == this.entity.mirrorX && this._lastMirrorY == this.entity.mirrorY && this._lastTileX == this.entity.tileX && this._lastTileY == this.entity.tileY || this.updateMaterial()
                }
                removeImage(e) {
                    e && metapress.entities.update(this.entity.id, {
                        url: null
                    }), this.renderer.object.material.map = null, this.renderer.object.material.color = new THREE.Color(16777215)
                }
                updateMaterial() {
                    if (!this.renderer.object) return;
                    let e = "basic" === this.entity.shaderMode ? THREE.MeshBasicMaterial : THREE.MeshStandardMaterial,
                        t = this.renderer.object.material.type !== e.name,
                        i = this.renderer.object.material.map;
                    this.entity.url && this.entity.url !== this._lastTextureUrl && (i = (new THREE.TextureLoader).load(this.entity.url), i.colorSpace = THREE.SRGBColorSpace, this._lastTextureUrl = this.entity.url), i && (i.wrapS = this.entity.mirrorX ? THREE.MirroredRepeatWrapping : THREE.RepeatWrapping, i.wrapT = this.entity.mirrorY ? THREE.MirroredRepeatWrapping : THREE.RepeatWrapping, i.repeat.set(this.entity.tileX || 1, this.entity.tileY || 1), i.needsUpdate = !0), t || !this.renderer.object.material.map ? this.renderer.object.material = new e({
                        color: this.entity.color ? new THREE.Color(this.entity.color) : "#FFFFFF",
                        side: THREE.DoubleSide,
                        map: i,
                        transparent: "alpha" === this.entity.transparencyMode,
                        opacity: this.entity.opacity || 1,
                        alphaTest: "clip" === this.entity.transparencyMode ? this.entity.alphaClip || .5 : .01
                    }) : (this.renderer.object.material.map = i, this.renderer.object.material.color.set(this.entity.color ? new THREE.Color(this.entity.color) : "#FFFFFF"), this.renderer.object.material.transparent = "alpha" === this.entity.transparencyMode, this.renderer.object.material.opacity = this.entity.opacity || 1, this.renderer.object.material.alphaTest = "clip" === this.entity.transparencyMode ? this.entity.alphaClip || .5 : .01), this._lastTransparencyMode = this.entity.transparencyMode, this._lastColor = this.entity.color, this._lastOpacity = this.entity.opacity, this._lastAlphaClip = this.entity.alphaClip, this._lastEntityUrl = this.entity.url, this._lastShaderMode = this.entity.shaderMode, this._lastMirrorX = this.entity.mirrorX, this._lastMirrorY = this.entity.mirrorY, this._lastTileX = this.entity.tileX, this._lastTileY = this.entity.tileY
                }
            }
            var s = i(47660),
                o = i(6147),
                h = i(99477);
            class l extends o.Z {
                get settings() {
                    return [...super.settings]
                }
                async onLoad() {
                    let e = null;
                    if ("cube" == this.entity.type) e = new h.BoxGeometry(1, 1, 1);
                    else if ("plane" == this.entity.type) e = new h.PlaneGeometry(1, 1);
                    else if ("circle" == this.entity.type) e = new h.CircleGeometry(.5, 32);
                    else if ("cylinder" == this.entity.type) e = new h.CylinderGeometry(.5, .5, 1, 32);
                    else {
                        if ("sphere" != this.entity.type) throw new Error("Unknown shape type: " + this.entity.type);
                        e = new h.SphereGeometry(.5)
                    }
                    let t = null;
                    t = "basic" == this.entity.shaderMode ? new h.MeshBasicMaterial({
                        side: h.DoubleSide
                    }) : new h.MeshStandardMaterial({
                        side: h.DoubleSide
                    }), this.object = new h.Mesh(e, t)
                }
            }
            class d {
                name = "Transform smoothing";
                hidden = !0;
                entity = null;
                renderer = null;
                onLoad() {
                    if (!this.renderer.object?.isObject3D) throw new Error(`Not supported on entity of type '${this.entity.type}'`);
                    this.currentPosition = this.renderer.container.position.clone(), this.targetPosition = this.renderer.container.position.clone(), this.currentQuaternion = this.renderer.container.quaternion.clone(), this.targetQuaternion = this.renderer.container.quaternion.clone(), this.isOwner = this.entity.owner == metapress.instanceID
                }
                beforeRender() {
                    this.isOwner || (this.preparePosition(), this.prepareOrientation())
                }
                onRender() {
                    this.isOwner || (this.smoothPosition(), this.smoothOrientation())
                }
                preparePosition() {
                    let e = Date.now();
                    this.entity.x == this._x && this.entity.y == this._y && this.entity.z == this._z || (this._x = this.entity.x || 0, this._y = this.entity.y || 0, this._z = this.entity.z || 0, this.positionUpdatedAt = e, this.currentPosition.copy(this.renderer.container.position), this.targetPosition.set(this.entity.x || 0, this.entity.y || 0, this.entity.z || 0))
                }
                smoothPosition() {
                    let e = Date.now() - this.positionUpdatedAt,
                        t = THREE.MathUtils.clamp(e / 250, 0, 1);
                    t >= 1 ? this.renderer.container.position.copy(this.targetPosition) : (this._v3a || (this._v3a = new THREE.Vector3), this._v3a.lerpVectors(this.currentPosition, this.targetPosition, t), this.renderer.container.position.copy(this._v3a))
                }
                prepareOrientation() {
                    if (!(this.entity.quatX || this.entity.quatY || this.entity.quatZ || this.entity.quatW)) return;
                    let e = Date.now();
                    this.entity.quatX == this._quatX && this.entity.quatY == this._quatY && this.entity.quatZ == this._quatZ && this.entity.quatW == this._quatW || (this._quatX = this.entity.quatX, this._quatY = this.entity.quatY, this._quatZ = this.entity.quatZ, this._quatW = this.entity.quatW, this.quaternionUpdatedAt = e, this.currentQuaternion.copy(this.renderer.container.quaternion), this.targetQuaternion.set(this.entity.quatX || 0, this.entity.quatY || 0, this.entity.quatZ || 0, this.entity.quatW || 0))
                }
                smoothOrientation() {
                    if (!(this.entity.quatX || this.entity.quatY || this.entity.quatZ || this.entity.quatW)) return;
                    let e = Date.now() - this.quaternionUpdatedAt,
                        t = THREE.MathUtils.clamp(e / 250, 0, 1);
                    t >= 1 ? this.renderer.container.quaternion.copy(this.targetQuaternion) : (this._quatA || (this._quatA = new THREE.Quaternion), this._quatA.slerpQuaternions(this.currentQuaternion, this.targetQuaternion, t), this.renderer.container.quaternion.copy(this._quatA))
                }
            }
            var c = i(1217),
                p = i(20452);
            class y extends o.Z {
                async onLoad() {
                    this.object = new h.Group
                }
            }
            class u {
                name = "ShaderToy Material";
                description = "Modifies object material.";
                icon = i(5143);
                provides = ["material"];
                get settings() {
                    return [{
                        type: "description",
                        name: "Renders a ShaderToy compatible shader as this object's material."
                    }, {
                        type: "select",
                        id: "shadertoy_transparencyMode",
                        name: "Transparency Mode",
                        help: "The transparency mode to use.",
                        values: ["none", "alpha-channel", "brightness"],
                        labels: ["None", "Alpha Channel", "Color Brightness"]
                    }, {
                        type: "textarea",
                        id: "shadertoy_code",
                        name: "Shader Code",
                        help: "Specify the ShaderToy shader code."
                    }, ...[0, 1, 2, 3].map((e => [{
                        type: "header",
                        name: `iChannel${e}`
                    }, {
                        type: "select",
                        id: `shadertoy_iChannel${e}_type`,
                        name: "Type",
                        values: ["none", "texture", "framebuffer"],
                        labels: ["None", "Texture", "Frame Buffer"]
                    }, "texture" == this.entity?.[`shadertoy_iChannel${e}_type`] ? [{
                        type: "file",
                        id: `shadertoy_iChannel${e}_texture`,
                        name: "Texture File",
                        help: "The texture file to use."
                    }] : []])).flat(2)]
                }
                entity = null;
                renderer = null;
                async onLoad() {
                    if (!this.renderer.object?.geometry) throw new Error("Not supported on solid shape entities, eg. cube, sphere, plane etc.");
                    await this.onEntityUpdated()
                }
                async onEntityUpdated() {
                    metapress.entities.didSettingsChange(this) && await this.updateMaterial()
                }
                async updateMaterial() {
                    let e = {},
                        t = [];
                    for (let i = 0; i < 4; i++) {
                        let n = this.createChannel(i, t);
                        n && (e[`iChannel${i}`] = {
                            value: n
                        })
                    }
                    this.renderer.object.material = new m({
                        shader: this.entity.shadertoy_code,
                        transparencyMode: this.entity.shadertoy_transparencyMode,
                        uniforms: e,
                        onBeforeRender: (e, i, n, r, a, s) => {
                            t.forEach((t => t(e, i, n, r, a, s)))
                        }
                    })
                }
                createChannel(e, t) {
                    return "texture" == this.entity[`shadertoy_iChannel${e}_type`] ? this.createChannelTexture(e) : "framebuffer" == this.entity[`shadertoy_iChannel${e}_type`] ? this.createChannelFramebuffer(e, t) : void 0
                }
                createChannelTexture(e) {
                    let t = this.entity[`shadertoy_iChannel${e}_texture`];
                    if (t) return (new h.TextureLoader).load(t)
                }
                createChannelFramebuffer(e, t) {
                    let i = new h.Vector2;
                    metapress.renderer.glrenderer.getSize(i);
                    let n = new h.FramebufferTexture(i.x, i.y);
                    n.type = h.HalfFloatType;
                    let r = new h.Vector2(0, 0);
                    return t.push(((e, t, i, a, s, o) => {
                        e.copyFramebufferToTexture(r, n, 0)
                    })), n
                }
                $renderer_onResize() {
                    this.updateMaterial()
                }
            }
            class m extends h.ShaderMaterial {
                constructor(e) {
                    let t = {
                        ...e
                    };
                    delete t.shader, delete t.transparencyMode, delete t.onBeforeRender, /#define\s+METAPRESS_DEPTH_WRITE_DISABLED/.test(e.shader) && (e.depthWrite = !1), super({
                        side: h.DoubleSide,
                        ...t,
                        transparent: "alpha-channel" == e.transparencyMode || "brightness" == e.transparencyMode,
                        defines: {
                            ...e.defines,
                            TRANSPARENCY_MODE_ALPHA_CHANNEL: "alpha-channel" == e.transparencyMode ? 1 : 0,
                            TRANSPARENCY_MODE_BRIGHTNESS: "brightness" == e.transparencyMode ? 1 : 0
                        },
                        uniforms: {
                            ...e.uniforms,
                            iTime: {
                                value: 0
                            },
                            iTimeDelta: {
                                value: 0
                            },
                            iTimeGlobal: {
                                value: 0
                            },
                            iFrame: {
                                value: 0
                            },
                            iResolution: {
                                value: new h.Vector2(1024, 1024)
                            },
                            iScreenResolution: {
                                value: new h.Vector2(1024, 1024)
                            },
                            iMouse: {
                                value: new h.Vector4
                            },
                            iDiffuse: {
                                value: null
                            },
                            iDepth: {
                                value: null
                            }
                        },
                        vertexShader: `\n        \n                // THREE.js's shader code\n                #include <common>\n                #include <fog_pars_vertex>\n            \n                // Uniforms we add automatically\n                uniform vec2 iResolution;\n                uniform vec2 iScreenResolution;\n                uniform float iTime;\n                uniform float iTimeDelta;\n                uniform float iTimeGlobal;\n                uniform int iFrame;\n                uniform vec4 iMouse;\n                ${e.uniforms?.iChannel0?"uniform sampler2D iChannel0;":""}\n                ${e.uniforms?.iChannel1?"uniform sampler2D iChannel1;":""}\n                ${e.uniforms?.iChannel2?"uniform sampler2D iChannel2;":""}\n                ${e.uniforms?.iChannel3?"uniform sampler2D iChannel3;":""}\n            \n                // Stuff to pass to the fragment shader\n                varying vec3 vNormal;\n                varying vec2 vUv;\n                varying vec3 vPosition;\n                varying vec4 vWorldPosition;\n                varying vec3 vCameraPosition;\n\n                // Main code\n                void main() {\n\n                    // Pass values to fragment shader\n                    vNormal = normal;\n                    vUv = uv;\n                    vPosition = position;\n                    vWorldPosition = modelMatrix * vec4(position, 1.0);\n                    vCameraPosition = cameraPosition;\n\n                    // THREE.js code\n                    #include <begin_vertex>\n                    #include <project_vertex>\n                    #include <fog_vertex>\n\n                }\n\n            `,
                        fragmentShader: `\n\n                // THREE.js's shader code\n                #include <common>\n                #include <fog_pars_fragment>\n                #include <packing>\n            \n                // Uniforms we add automatically\n                uniform vec2 iResolution;\n                uniform vec2 iScreenResolution;\n                uniform float iTime;\n                uniform float iTimeDelta;\n                uniform float iTimeGlobal;\n                uniform int iFrame;\n                uniform vec4 iMouse;\n                ${e.uniforms?.iChannel0?"uniform sampler2D iChannel0;":""}\n                ${e.uniforms?.iChannel1?"uniform sampler2D iChannel1;":""}\n                ${e.uniforms?.iChannel2?"uniform sampler2D iChannel2;":""}\n                ${e.uniforms?.iChannel3?"uniform sampler2D iChannel3;":""}\n            \n                // Stuff we received from the vertex shader\n                varying vec3 vNormal;\n                varying vec2 vUv;\n                varying vec3 vPosition;\n                varying vec4 vWorldPosition;\n                varying vec3 vCameraPosition;\n\n                // ShaderToy code provides the mainImage() function\n                ${e.shader}\n\n                // Main entry point\n                void main() {\n\n                    // Call mainImage() in the provided shader\n                    mainImage(gl_FragColor, vUv * 1024.0);\n\n                    // Safety check on the returned values from the shader. Without this it can cause the entire scene to flicker.\n                    gl_FragColor = clamp(gl_FragColor, 0.0, 999.0);\n\n                    // Check transparency mode\n                    #if TRANSPARENCY_MODE_ALPHA_CHANNEL\n\n                        // In alpha channel mode, use the alpha channel as transparency and discard colors too close to 0 opacity, to help\n                        // prevent issues with z-fighting in certain situations\n                        if (gl_FragColor.a < 0.01) \n                            discard;\n\n                    #elif TRANSPARENCY_MODE_BRIGHTNESS\n\n                        // In brightness mode, use the brightness of the color as transparency. Reduce it a bit as well to hide cutoff parts.\n                        gl_FragColor.a = clamp((gl_FragColor.r + gl_FragColor.g + gl_FragColor.b) / 3.0, 0.0, 1.0);\n                        if (gl_FragColor.a < 0.01) \n                            discard;\n\n                    #else\n\n                        // In no transparency mode, set to fully opaque. This should already be the case, but just in case the\n                        // shader messed with the alpha value we set it back.\n                        gl_FragColor.a = 1.0;\n\n                    #endif\n\n                    // Done, do THREE.js shader code now\n                    #include <fog_fragment>\n\n                }\n                \n            `
                    }), this._params = e, this.clock = new h.Clock
                }
                onBeforeRender(e, t, i, n, r, a) {
                    this._params.onBeforeRender?.(e, t, i, n, r, a), this.uniforms.iTimeDelta.value = this.clock.getDelta(), this.uniforms.iTime.value = this.clock.elapsedTime, this.uniforms.iTimeGlobal.value = this.clock.elapsedTime, e.getDrawingBufferSize(this.uniforms.iScreenResolution.value), this.uniforms.iDiffuse.value = metapress.renderer.diffuseCopyPass?.texture, this.uniforms.iDepth.value = metapress.renderer.depthCopyPass?.texture, super.onBeforeRender(e, t, i, n, r, a)
                }
            }
            class f extends EventTarget {
                id = "core.render.builtin-objects";
                name = "Built-in Objects";
                description = "Provides a set of built-in objects and modifiers.";
                version = "1.0.0";
                requires = ["assets", "renderer"];
                provides = ["builtinObjects", "render:group", "render:mesh", "render:cube", "render:circle", "render:cylinder", "render:plane", "render:sphere", "modifier:transform-smoothing", "modifier:materials", "modifier:face-movement-direction", "modifier:shadertoy"];
                Object3DRenderer = o.Z;
                createRenderer(e) {
                    return "mesh" == e ? new s.Z : "group" == e ? new y : new l
                }
                createModifier(e) {
                    return "transform-smoothing" == e ? new d : "materials" == e ? new a : "face-movement-direction" == e ? new n : "shadertoy" == e ? new u : void 0
                }
                async $prepareEntityForFile(e) {
                    if ([".glb", ".fbx"].find((t => e.name.toLowerCase().endsWith(t)))) return {
                        type: "mesh",
                        url: "$URL"
                    };
                    if ([".png", ".jpg", ".jpeg", ".gif", ".webp"].find((t => e.name.toLowerCase().endsWith(t)))) {
                        let t = await new Promise(((t, i) => {
                                let n = new Image;
                                n.src = URL.createObjectURL(e), n.onload = () => t(n), n.onerror = () => i(new Error("unable to load image."))
                            })),
                            i = document.createElement("canvas");
                        i.width = 32, i.height = 32;
                        let n = i.getContext("2d");
                        n.drawImage(t, 0, 0, 32, 32);
                        let r = n.getImageData(0, 0, 32, 32),
                            a = !1;
                        for (let e = 0; e < r.data.length; e += 4)
                            if (255 != r.data[e + 3]) {
                                a = !0;
                                break
                            } return {
                            type: "plane",
                            scaleX: t.width / t.height,
                            "modifier:materials": !0,
                            shaderMode: "basic",
                            transparencyMode: a ? "alpha" : "",
                            url: "$URL"
                        }
                    }
                }
                $loadAsset(e) {
                    return "mesh" == e.type && ".glb" == e.extension ? this.loadGLB(e) : "mesh" == e.type && ".fbx" == e.extension ? this.loadFBX(e) : void 0
                }
                async loadGLB(e) {
                    let t = new c.E,
                        i = await t.loadAsync(e.url);
                    return i.scene.traverse((e => {
                        e.isMesh && e.geometry?.attributes?.uv1 && (e.material.emissiveMap?.name.toLowerCase().includes("use_as_lightmap") && (e.material.lightMap = e.material.emissiveMap, e.material.lightMapIntensity = e.material.emissiveIntensity, e.material.emissiveMap = null, e.material.emissiveIntensity = 0), e.material.aoMap && (e.material.aoMap.channel = 1), e.material.lightMap && (e.material.lightMap.channel = 1))
                    })), i.userData = {
                        ...i.userData,
                        isGLTF: !0,
                        isGLB: !0
                    }, i
                }
                async loadFBX(e) {
                    let t = await (new p.y).loadAsync(e.url);
                    return {
                        animations: t.animations || [],
                        cameras: [],
                        scene: t,
                        scenes: [t],
                        userData: {
                            ...t.userData,
                            isFBX: !0
                        }
                    }
                }
                $getDebugMenuOptions = () => [{
                    id: "core.objects.boundingBoxes",
                    section: "Rendering",
                    name: "Bounding boxes: " + (o.Z.showBoundingBoxes ? "On" : "Off"),
                    action: () => o.Z.showBoundingBoxes = !o.Z.showBoundingBoxes
                }, {
                    id: "core.objects.wireframe",
                    section: "Rendering",
                    name: "Wireframe: " + (o.Z.wireframeMode ? "On" : "Off"),
                    action: () => o.Z.wireframeMode = !o.Z.wireframeMode
                }];
                $editor_getAddableEntities = () => [{
                    id: "metapress.shape.circle",
                    name: "Add Circle",
                    icon: i(41598),
                    section: "builtin",
                    action: e => metapress.editor.createEntityNearby({
                        type: "circle",
                        "modifier:materials": !0
                    })
                }, {
                    id: "metapress.shape.cylinder",
                    name: "Add Cylinder",
                    icon: i(5461),
                    section: "builtin",
                    action: e => metapress.editor.createEntityNearby({
                        type: "cylinder",
                        "modifier:materials": !0
                    })
                }, {
                    id: "metapress.shape.cube",
                    name: "Add Cube",
                    icon: i(90371),
                    section: "builtin",
                    action: e => metapress.editor.createEntityNearby({
                        type: "cube",
                        "modifier:materials": !0
                    })
                }, {
                    id: "metapress.shape.plane",
                    name: "Add Plane",
                    icon: i(26192),
                    section: "builtin",
                    action: e => metapress.editor.createEntityNearby({
                        type: "plane",
                        "modifier:materials": !0
                    })
                }, {
                    id: "metapress.shape.region",
                    name: "Add Region",
                    description: "Regions are 3D volumes that can be used for adjusting the skybox, lighting etc when a user is inside the volume.",
                    icon: i(26247),
                    section: "builtin",
                    action: e => metapress.editor.createEntityNearby({
                        type: "region",
                        "modifier:materials": !0
                    })
                }, {
                    id: "metapress.shape.sphere",
                    name: "Add Sphere",
                    icon: i(34949),
                    section: "builtin",
                    action: e => metapress.editor.createEntityNearby({
                        type: "sphere",
                        "modifier:materials": !0
                    })
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
        5143: (e, t, i) => {
            e.exports = i.p + "mp-core/texture.5890236f46b2b8ebaca6.svg"
        },
        41598: (e, t, i) => {
            e.exports = i.p + "mp-core/object-circle.f7abe3405d346872969c.svg"
        },
        90371: (e, t, i) => {
            e.exports = i.p + "mp-core/object-cube.28f5b6d5b3236e38a354.svg"
        },
        5461: (e, t, i) => {
            e.exports = i.p + "mp-core/object-cylinder.8ba97d22a2f697c6e15f.svg"
        },
        26192: (e, t, i) => {
            e.exports = i.p + "mp-core/object-plane.12f4b034648a5127c7b9.svg"
        },
        26247: (e, t, i) => {
            e.exports = i.p + "mp-core/object-region.9d3d97740123301db48b.svg"
        },
        34949: (e, t, i) => {
            e.exports = i.p + "mp-core/object-sphere.76ed3af0e9e4df404a93.svg"
        }
    }
]);