"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [9528], {
        9528: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => a
            });
            var s = i(4162),
                h = i(40140),
                r = i(68789),
                o = i(25108);
            class n {
                static showShapes = !1;
                name = "Physics";
                icon = i(21927);
                settings = [{
                    type: "checkbox",
                    id: "physics_fixed",
                    name: "Static",
                    help: "If enabled, the object does not move and only provides collision."
                }, {
                    type: "checkbox",
                    id: "physics_enabled",
                    name: "Enabled"
                }, {
                    type: "select",
                    id: "physics_shape",
                    name: "Shape",
                    labels: ["Cube", "Capsule", "Cylinder", "Sphere", "Convex Hull", "Whole Mesh"],
                    values: ["cube", "capsule", "cylinder", "sphere", "convex_hull", "mesh"],
                    default: "cube"
                }, {
                    type: "checkbox",
                    id: "physics_lockRotation",
                    name: "Lock rotation",
                    help: "If enabled, the object cannot be rotated via the physics engine."
                }, {
                    type: "number",
                    id: "physics_linearDamping",
                    name: "Linear damping",
                    help: "The higher this number, the slower the object is able to move."
                }];
                body = null;
                colliders = [];
                prevProperties = {
                    name: "",
                    comment: ""
                };
                onLoad() {
                    if (!this.renderer.object?.isObject3D) throw new Error(`Not supported on entity of type '${this.entity.type}'`);
                    this.prevProperties.name = this.entity.name, this.prevProperties.comment = this.entity.comment, this.updateBody()
                }
                onEntityEdited() {
                    if (this.entity.name !== this.prevProperties.name || this.entity.comment !== this.prevProperties.comment) return this.prevProperties.name = this.entity.name, void(this.prevProperties.comment = this.entity.comment);
                    this.updateBody()
                }
                removeBody() {
                    if (this.body) {
                        for (; this.body.numColliders() > 0;) metapress.physics.world.removeCollider(this.body.collider(0));
                        metapress.physics.world.removeRigidBody(this.body), this.body = null, this.colliders = [], this.shapeMesh?.removeFromParent(), this.shapeMesh = null
                    }
                }
                updateBody() {
                    if (this.removeBody(), !this.entity.physics_enabled) return;
                    let e = null;
                    e = this.entity.owner && this.entity.owner != metapress.instanceID || "mesh" == this.entity.physics_shape || this.entity.physics_fixed ? s.ZP.RigidBodyDesc.fixed() : this.entity.physics_kinematicVelocity ? s.ZP.RigidBodyDesc.kinematicVelocityBased() : this.entity.physics_kinematicPosition ? s.ZP.RigidBodyDesc.kinematicPositionBased() : s.ZP.RigidBodyDesc.dynamic(), this.entity.physics_lockRotation && e.lockRotations(), this.entity.physics_linearDamping && e.setLinearDamping(this.entity.physics_linearDamping), this.body = metapress.physics.world.createRigidBody(e);
                    let t = [];
                    if ("sphere" == this.entity.physics_shape) {
                        let e = (new THREE.Box3).setFromObject(this.renderer.container, !0).getSize(new THREE.Vector3),
                            i = s.ZP.ColliderDesc.ball(Math.max(e.x, e.z) / 2 * 1.01);
                        t.push(metapress.physics.world.createCollider(i, this.body))
                    } else if ("cylinder" == this.entity.physics_shape) {
                        let e = (new THREE.Box3).setFromObject(this.renderer.container, !0).getSize(new THREE.Vector3),
                            i = s.ZP.ColliderDesc.cylinder(e.y / 2, Math.max(e.x, e.z) / 2);
                        t.push(metapress.physics.world.createCollider(i, this.body))
                    } else if ("capsule" == this.entity.physics_shape) {
                        let e = this.entity.physics_height || this.entity.avatar_height || 1.8,
                            i = Math.min(.5, e / 3);
                        e -= i * (Math.PI / 2) / 2;
                        let h = s.ZP.ColliderDesc.capsule(e / 2, i / 2);
                        t.push(metapress.physics.world.createCollider(h, this.body))
                    } else if ("mesh" == this.entity.physics_shape || "convex_hull" == this.entity.physics_shape) {
                        this.renderer.container.updateWorldMatrix(!0, !0);
                        let e = this.renderer.container.matrixWorld.clone().invert();
                        this.renderer.container.traverse((i => {
                            if (!i.isMesh || !i.geometry?.isBufferGeometry || !i.geometry?.index) return;
                            try {
                                i.geometry?.morphAttributes?.position && Array.isArray(i.geometry.morphAttributes.position) && (i.geometry.morphAttributes.position = i.geometry.morphAttributes.position[0], o.debug("[Physics] Converting `morphAttributes.position` from BufferAttributes[] to single BufferAttribute for entity", `"${this.entity.name||this.entity.id}".`)), i.simplifiedGeometry = i.simplifiedGeometry || (0, h.$1)(i.geometry, .01)
                            } catch (e) {
                                o.warn(`[Physics] Unable to simplify geometry for ${this.entity.name}: ${e.message}`), i.simplifiedGeometry = i.geometry
                            }
                            let r = new THREE.Vector3,
                                n = new THREE.Quaternion,
                                a = new THREE.Vector3;
                            i.matrixWorld.clone().premultiply(e).decompose(r, n, a), i.getWorldScale(a);
                            let l = i.simplifiedGeometry.getAttribute("position").array.slice(),
                                y = i.simplifiedGeometry.index.array.slice();
                            for (let e = 0; e < l.length; e += 3) l[e + 0] *= a.x, l[e + 1] *= a.y, l[e + 2] *= a.z;
                            let p = null;
                            p = this.body.isFixed() && "convex_hull" != this.entity.physics_shape ? s.ZP.ColliderDesc.trimesh(l, y) : s.ZP.ColliderDesc.convexHull(l), p.setRotation(n), p.setTranslation(r.x, r.y, r.z), t.push(metapress.physics.world.createCollider(p, this.body))
                        }))
                    } else {
                        (new THREE.Box3).setFromObject(this.renderer.container, !0).getSize(new THREE.Vector3);
                        let e = s.ZP.ColliderDesc.cuboid((this.entity.scaleX || 1) / 2, (this.entity.scaleY || 1) / 2, (this.entity.scaleZ || 1) / 2);
                        t.push(metapress.physics.world.createCollider(e, this.body))
                    }
                    if (this.entity.physics_friction)
                        for (let e of t) e.setFriction(this.entity.physics_friction);
                    this.sendTransformToPhysics(!0), this.colliders = t
                }
                onUnload() {
                    this.removeBody()
                }
                beforeRender() {
                    if (!this.body || this.body.isSleeping()) return;
                    let e = this._lastX != this.entity.x || this._lastY != this.entity.y || this._lastZ != this.entity.z;
                    this.body.isFixed() || e ? this.sendTransformToPhysics() : this.getTransformFromPhysics(), this.lastY = this.body.translation().y
                }
                afterRender() {
                    this.applyShowShapes(), this.body && !this.body.isSleeping() && this.body.isFixed()
                }
                get colliderHalfHeight() {
                    if (!this.body || 0 == this.body.numColliders()) return 0;
                    let e = this.body.collider(0);
                    return e.shape.type == s.ZP.ShapeType.Capsule ? e.shape.halfHeight + e.shape.radius : e.shape.halfHeight || e.shape.halfExtents?.y || e.shape.radius || 0
                }
                getTransformFromPhysics() {
                    let e = this.body.translation();
                    if (this.entity.x = e.x - (this.entity.physics_offsetX || 0), this.entity.y = e.y - (this.entity.physics_offsetY || 0), this.entity.z = e.z - (this.entity.physics_offsetZ || 0), this.entity.lastModified = Date.now(), this.entity.physics_anchorBottom && (this.entity.y -= this.colliderHalfHeight), !this.entity.physics_lockRotation) {
                        let e = this.body.rotation();
                        this.entity.quatX = e.x, this.entity.quatY = e.y, this.entity.quatZ = e.z, this.entity.quatW = e.w
                    }
                    this._lastX = this.entity.x, this._lastY = this.entity.y, this._lastZ = this.entity.z
                }
                sendTransformToPhysics(e) {
                    if (!e && this._lastModified == this.entity.lastModified) return;
                    this._lastModified = this.entity.lastModified;
                    let t = 0;
                    this.entity.physics_anchorBottom && (t = this.colliderHalfHeight), this.body.setTranslation({
                        x: (this.entity.x || 0) + (this.entity.physics_offsetX || 0),
                        y: (this.entity.y || 0) + (this.entity.physics_offsetY || 0) + t,
                        z: (this.entity.z || 0) + (this.entity.physics_offsetZ || 0)
                    }), (this.entity.quatX || this.entity.quatY || this.entity.quatZ || this.entity.quatW) && this.body.setRotation({
                        x: this.entity.quatX,
                        y: this.entity.quatY,
                        z: this.entity.quatZ,
                        w: this.entity.quatW
                    }), this._lastX = this.entity.x, this._lastY = this.entity.y, this._lastZ = this.entity.z
                }
                applyImpulse(e) {
                    this.body.applyImpulse(e, !0)
                }
                groundedDistanceCheck = 0;
                _ray = new s.ZP.Ray(new s.ZP.Vector3, new s.ZP.Vector3);
                _isGroundedChecked = 0;
                _isGroundedCached = !1;
                get isGrounded() {
                    if (!this.body) return !1;
                    if (this._isGroundedChecked == metapress.renderer.frameTime) return this._isGroundedCached;
                    let e = this.body.translation();
                    this._ray.origin.x = e.x, this._ray.origin.y = e.y - this.colliderHalfHeight + .01, this._ray.origin.z = e.z, this._ray.dir.x = 0, this._ray.dir.y = -1, this._ray.dir.z = 0;
                    let t = metapress.physics.world.castRay(this._ray, .02, !1, null, null, null, this.body);
                    return this._isGroundedCached = !!t, this._isGroundedChecked = metapress.renderer.frameTime, this._isGroundedCached
                }
                applyShowShapes() {
                    let e = n.showShapes && this.body;
                    if (e && !this.shapeMesh ? this.createDebugShape() : !e && this.shapeMesh && (this.shapeMesh.removeFromParent(), this.shapeMesh = null), this.shapeMesh)
                        for (let e of this.shapeMesh.children) {
                            if (!e.collider) continue;
                            let t = e.collider.translation();
                            e.position.set(t.x, t.y, t.z);
                            let i = e.collider.rotation();
                            e.quaternion.set(i.x, i.y, i.z, i.w)
                        }
                }
                createDebugShape() {
                    this.shapeMesh = new THREE.Group, metapress.renderer.scene.add(this.shapeMesh);
                    for (let e = 0; e < this.body.numColliders(); e++) this.createDebugShapeForCollider(this.body.collider(e))
                }
                createDebugShapeForCollider(e) {
                    let t = null;
                    if (e.shape.type == s.ZP.ShapeType.Ball) t = new THREE.SphereGeometry(e.shape.radius);
                    else if (e.shape.type == s.ZP.ShapeType.Capsule) t = new THREE.CapsuleGeometry(e.shape.radius, 2 * e.shape.halfHeight);
                    else if (e.shape.type == s.ZP.ShapeType.Cuboid) t = new THREE.BoxGeometry(2 * e.shape.halfExtents.x, 2 * e.shape.halfExtents.y, 2 * e.shape.halfExtents.z);
                    else if (e.shape.type == s.ZP.ShapeType.Cylinder) t = new THREE.CylinderGeometry(e.shape.radius, e.shape.radius, 2 * e.shape.halfHeight);
                    else if (e.shape.type == s.ZP.ShapeType.TriMesh) t = new THREE.BufferGeometry, t.setAttribute("position", new THREE.BufferAttribute(e.shape.vertices, 3)), t.index = new THREE.BufferAttribute(e.shape.indices, 1);
                    else if (e.shape.type == s.ZP.ShapeType.ConvexPolyhedron && e.shape.indices?.length) t = new THREE.BufferGeometry, t.setAttribute("position", new THREE.BufferAttribute(e.shape.vertices, 3)), t.index = new THREE.BufferAttribute(e.shape.indices, 1);
                    else {
                        if (e.shape.type != s.ZP.ShapeType.ConvexPolyhedron) return void o.warn(`[Physics] Unknown physics shape ${e.shape.type} for ${this.entity.name||this.entity.id}`);
                        {
                            let i = [],
                                s = 3 * Math.floor(e.shape.vertices.length / 3);
                            for (let t = 0; t < s; t += 3) i.push(new THREE.Vector3(e.shape.vertices[t + 0], e.shape.vertices[t + 1], e.shape.vertices[t + 2]));
                            t = new r.u(i)
                        }
                    }
                    n._debugMeshMaterial || (n._debugMeshMaterial = new THREE.MeshBasicMaterial({
                        color: 255,
                        wireframe: !0
                    }));
                    let i = new THREE.Mesh(t, n._debugMeshMaterial);
                    i.collider = e, this.shapeMesh.add(i)
                }
            }
            class a {
                id = "core.physics";
                name = "Physics";
                description = "Provides a physics engine for the environment.";
                version = "1.0.0";
                provides = ["physics", "modifier:physics"];
                requires = ["renderer"];
                world = null;
                world_colliders = null;
                _lockCounter = 0;
                async onLoad() {
                    await s.ZP.init(), this.world = new s.ZP.World({
                        x: 0,
                        y: -9.81,
                        z: 0
                    });
                    let e = s.ZP.ColliderDesc.cuboid(1e4, .2, 1e4);
                    e.setTranslation(0, -.5, 0), this.world.createCollider(e), this.world_colliders = !0
                }
                lock() {
                    this._lockCounter += 1, 1 == this._lockCounter && metapress.plugins.sendEvent("physics_locked");
                    let e = !1;
                    return () => {
                        e || (e = !0, this._lockCounter -= 1, 0 == this._lockCounter && metapress.plugins.sendEvent("physics_unlocked"))
                    }
                }
                get isLocked() {
                    return this._lockCounter > 0
                }
                createModifier(e) {
                    if ("physics" == e) return new n
                }
                $onRender() {
                    this.isLocked || (this.world.timestep = metapress.renderer.delta || 1 / 60, metapress.plugins.sendEvent("physics_beforeStep"), this.world.step())
                }
                $getDebugMenuOptions = () => [{
                    id: "core.physics.showShapes",
                    section: "Physics",
                    name: "Show collision shapes: " + (n.showShapes ? "On" : "Off"),
                    action: () => n.showShapes = !n.showShapes
                }];
                async $spawnpoint_onSpawn() {
                    let e = metapress.physics.lock();
                    for (metapress.entities.checkAllEntities(); metapress.entities.renderers.find((e => !e._loaded && e.entity["modifier:physics"])) || metapress.entities.modifiers.find((e => !e._loaded && e.entity["modifier:physics"]));) await new Promise((e => setTimeout(e, 500)));
                    e()
                }
            }
        },
        21927: (e, t, i) => {
            e.exports = i.p + "mp-core/physics.ec13b0b7165538111761.svg"
        }
    }
]);