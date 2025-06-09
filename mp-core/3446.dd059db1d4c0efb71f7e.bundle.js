"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [3446], {
        43446: (t, e, a) => {
            a.r(e), a.d(e, {
                default: () => h
            });
            var i = a(99477),
                r = a(1794),
                s = a(25108);
            class n {
                name = "Avatar Controller";
                hidden = !0;
                entity = null;
                renderer = null;
                shouldControl = !1;
                animationOverrideActive = null;
                characterController = null;
                yVelocity = 0;
                isGrounded = !0;
                onLoad() {
                    this.shouldControl = this.entity.owner == metapress.instanceID, this.shouldControl && (this.characterController = metapress.physics.world.createCharacterController(.1), this.characterController.enableAutostep(.8, .1, !1), this.characterController.enableSnapToGround(.8), this.characterController.applyImpulsesToDynamicBodies(!0), this.characterController.setSlideEnabled(!0), this.characterController.setCharacterMass(50), this.characterController.setOffset(.1), this.isLoaded = !1)
                }
                onUnload() {
                    this.characterController && metapress.physics.world.removeCharacterController(this.characterController), this.characterController = null
                }
                onRender() {
                    this.shouldControl && this.entity["modifier:animator"] && this.onRenderAnimation()
                }
                axisY = new i.Vector3(0, 1, 0);
                eulerA = new i.Euler;
                quatA = new i.Quaternion;
                $physics_beforeStep() {
                    if (!this.shouldControl) return;
                    if (!this.entity["modifier:physics"]) return;
                    if (this.entity.y < -15) return void metapress.spawnpoints.respawn();
                    if (this.physicsModifier || (this.physicsModifier = metapress.entities.getModifier(this.entity.id, "physics")), !this.physicsModifier?.body || !this.physicsModifier.colliders?.length || null === metapress.physics.world_colliders || this.shouldControl && !this.isLoaded) return;
                    if (this.physicsModifier.colliders.length > 1 && !this.shownColliderWarning && (s.warn("[AvatarControllerModifier] Avatar has multiple colliders. This could cause issues.", this.entity), this.shownColliderWarning = !0), this.animationOverrideActive?.preventMovement) return;
                    this.v3a || (this.v3a = new i.Vector3), this.v3a.set(metapress.input.movementSmoothed.x, 0, -metapress.input.movementSmoothed.y), this.v3a.applyAxisAngle(this.axisY, metapress.renderer.camera.rotation.y);
                    let t = this.entity.avatar_walkSpeed || 2,
                        e = this.entity.avatar_runSpeed || 5,
                        a = this.v3a.length() / metapress.renderer.delta * (metapress.input.actionActive("run") ? e : t);
                    this._smoothSpeed || (this._smoothSpeed = 0), this._smoothSpeed = i.MathUtils.damp(this._smoothSpeed, a, 10, metapress.renderer.delta), this.v3a.setLength(this._smoothSpeed);
                    let r = this.entity.avatar_gravity ?? -9.8;
                    this.yVelocity += r * metapress.renderer.delta, this.v3a.y = this.yVelocity;
                    let n = this.physicsModifier.colliders[0];
                    if (this.characterController.computeColliderMovement(n, this.v3a.multiplyScalar(metapress.physics.world.timestep)), this.entity.physics_kinematicVelocity) {
                        let t = this.characterController.computedMovement();
                        t.x /= metapress.physics.world.timestep, t.y /= metapress.physics.world.timestep, t.z /= metapress.physics.world.timestep, this.physicsModifier.body.setLinvel(t, !0)
                    } else if (this.entity.physics_kinematicPosition) {
                        let t = this.characterController.computedMovement(),
                            e = this.physicsModifier.body.translation();
                        e.x += t.x, e.y += t.y, e.z += t.z, this.physicsModifier.body.setTranslation(e)
                    } else this.warnedUnknownType || (s.warn("[AvatarControllerModifier] Unknown physics kinematic mode", this.entity), this.warnedUnknownType = !0);
                    let o = this.characterController.computedGrounded();
                    o != this.isGrounded && s.debug(`[AvatarControllerModifier] Grounded: ${o}`), this.isGrounded = o, o && (this.yVelocity = 0), this.isGrounded && metapress.input.actionActive("jump") && (s.debug("[AvatarControllerModifier] Jumping"), this.yVelocity += this.entity.avatar_jumpHeight || 5, this.isGrounded = !1, metapress.plugins.sendEvent("avatar_jump", {
                        id: this.entity.id,
                        height: this.entity.avatar_jumpHeight || 5
                    }), this.overrideAnimation({
                        animationStart: "jump_start",
                        animation: "jump_loop",
                        animationEnd: "jump_end",
                        interruptOnGround: !0,
                        pauseAtEnd: !0
                    }))
                }
                $physics_unlocked() {
                    this.yVelocity = 0
                }
                onRenderAnimation() {
                    if (this.animationOverrideActive) return;
                    let t = metapress.input.movement.length() / metapress.renderer.delta > .1 ? metapress.input.actionActive("run") ? "run" : "walk" : "idle";
                    if (this._lastAnimationName != t) {
                        this._lastAnimationName = t;
                        let e = this.entity.avatar_skeletonType || "core.human";
                        this.entity.animation_name = e + "." + t, this.entity.animation_loop = !0
                    }
                }
                async overrideAnimation(t) {
                    let e = this.entity.avatar_skeletonType || "core.human";
                    if (!t.animationStart && !t.animation && !t.animationEnd) throw new Error("Please specify an animation name to play.");
                    if (this.animator || (this.animator = metapress.entities.getModifier(this.entity.id, "animator")), !this.animator) return;
                    if (this.animationOverrideActive = t, this._lastAnimationName = "", this._didTryToMove = !1, t.animationStart && await this.animator.playAnimationAndWait(e + "." + t.animationStart), this.animationOverrideActive != t) return;
                    let a = t.loop;
                    !0 === a && (a = 1 / 0), !1 === a && (a = 1), null == a && (a = 1);
                    let i = 0;
                    for (;;) {
                        let s = !1;
                        t.animation && i < a && this.animator.playAnimationAndWait(e + "." + t.animation).then((t => s = !0));
                        let n = await (0, r.C)((() => s ? 1 : this.animationOverrideActive != t ? 3 : t.interruptOnMovement && (metapress.input.movement.length() > .001 || metapress.input.actionActive("jump")) || t.interruptOnGround && this.isGrounded ? 2 : void 0));
                        if (2 == n) break;
                        if (3 == n) return;
                        if (i += 1, i >= a && !t.pauseAtEnd) break
                    }
                    t.animationEnd && await this.animator.playAnimationAndWait(e + "." + t.animationEnd), this.animationOverrideActive == t && (this.animationOverrideActive = null)
                }
                $onEntityLoaded(t) {
                    t.id == metapress.avatar.currentUserEntity.id && (this.isLoaded = !0)
                }
            }
            class o {
                instanceID = "";
                avatarID = "";
                lastSeen = 0;
                get x() {
                    return this.avatarEntity?.x || 0
                }
                get y() {
                    return this.avatarEntity?.y || 0
                }
                get z() {
                    return this.avatarEntity?.z || 0
                }
                metadata = {};
                get name() {
                    return this.metadata.name || "Guest"
                }
                get avatarEntity() {
                    return this._avatarEntity && this.avatarID == this._avatarEntity?.id && !this.needsEntityUpdate || (this._avatarEntity = metapress.entities.all.find((t => t.isMainAvatar && "avatars" == t.sync && t.owner == this.instanceID)), this.needsEntityUpdate = !1), this._avatarEntity
                }
                get distance() {
                    let t = Date.now();
                    if (this._lastDistanceCheck && t - this._lastDistanceCheck < 500) return this._lastDistanceValue;
                    if (!this.avatarEntity) return this._lastDistanceCheck = t, this._lastDistanceValue = -1, -1;
                    let e = metapress.renderer.camera.position,
                        a = Math.sqrt((this.x - e.x) ** 2 + (this.y - e.y) ** 2 + (this.z - e.z) ** 2);
                    return this._lastDistanceCheck = t, this._lastDistanceValue = a, a
                }
            }
            var l = a(25108);
            class h {
                id = "core.avatars";
                name = "Avatars over IPFS PubSub";
                description = "Creates avatar entities based on realtime data.";
                version = "1.0.0";
                requires = ["entities", "camera", "physics", "profile", "avatar:default"];
                provides = ["avatar", "avatars", "modifier:avatar-controller"];
                users = [];
                sharedMetadata = {};
                currentUserEntity = null;
                fallbackAvatarConfiguration = {
                    type: "cube",
                    "modifier:physics": !0,
                    physics_enabled: !0,
                    physics_shape: "cube",
                    "modifier:avatar-controller": !0,
                    avatar_id: "fallback"
                };
                async onLoad() {
                    this.updateTimer = setInterval(this.sendSlowUpdate.bind(this), 5e3), this.cleanupTimer = setInterval(this.cleanup.bind(this), 1e4);
                    let t = metapress.profile.get("avatarConfig");
                    if (!t) {
                        let configurations = metapress.plugins.callAll("getAvatarConfigurations").flat().filter((t => !!t));
                        if (configurations.length > 0) {
                            let randomIndex = Math.floor(Math.random() * configurations.length);
                            t = configurations[randomIndex];
                        } else {
                            l.warn(`[MetaPress > Avatars] No avatar configurations found!`), t = this.fallbackAvatarConfiguration;
                        }
                    }
                    await this.setAvatarConfiguration(t, !0)
                }
                updateAvatarEntity(t) {
                    metapress.entities.update(this.currentUserEntity.id, t)
                }
                moveTo(t, e, a) {
                    this.updateAvatarEntity({
                        x: t,
                        y: e,
                        z: a
                    })
                }
                distanceTo(t) {
                    if ("string" == typeof t && !(t = metapress.entities.get(t))) return -1;
                    let e = this.currentUserEntity?.x || 0,
                        a = this.currentUserEntity?.y || 0,
                        i = this.currentUserEntity?.z || 0,
                        r = t.x || 0,
                        s = t.y || 0,
                        n = t.z || 0;
                    return Math.sqrt((e - r) ** 2 + (a - s) ** 2 + (i - n) ** 2)
                }
                getAdvertisementPacket() {
                    return this.sharedMetadata.name = metapress.profile.currentProfile.fields.name || "Guest", {
                        action: "advertise",
                        instanceID: metapress.instanceID,
                        metadata: this.sharedMetadata,
                        entities: [this.currentUserEntity]
                    }
                }
                sendSlowUpdate() {
                    metapress.messaging.send("global", "avatar:update", this.getAdvertisementPacket())
                }
                $onIncomingMessage(t) {
                    "avatar:update" == t.name && this.onAdvertisementPacketReceived(t.data, t.from, !0)
                }
                onAdvertisementPacketReceived(t, e, a = !1) {
                    let i = null;
                    try {
                        i = this.users.find((t => t.instanceID == e)), i || (i = new o, i.instanceID = e, this.users.push(i)), i.lastSeen = Date.now(), i.metadata = t.metadata || i.metadata;
                        for (let r = 0; r < t.entities.length; r++) {
                            let s = 0 == r,
                                n = t.entities[r],
                                o = n.id,
                                l = metapress.entities.get(o);
                            if (l) {
                                if (a && l.lastModified > i.lastSeen - 1e3) continue;
                                metapress.entities.update(o, {
                                    ...n,
                                    id: l.id,
                                    sync: l.sync,
                                    owner: l.owner,
                                    isMainAvatar: s
                                }), i.avatarID = l.id, l.x == i.avatarEntity.x && l.y == i.avatarEntity.y && l.z == i.avatarEntity.z || (i.needsEntityUpdate = !0)
                            } else l = metapress.entities.add({
                                ...n,
                                sync: "avatars",
                                owner: e,
                                isMainAvatar: s
                            }), i.avatarID = l.id
                        }
                        for (let a of metapress.entities.all) "avatars" == a.sync && a.owner == e && (t.entities.find((t => t.id == a.id)) || metapress.entities.remove(a.id))
                    } catch (t) {
                        l.warn(`[MetaPress > Avatars] Failed to process update from ${e}: `, t)
                    }
                    return i
                }
                cleanup() {
                    let t = Date.now();
                    for (let e of this.users)
                        if (!(t - e.lastSeen < 15e3)) {
                            this.users = this.users.filter((t => t != e));
                            for (let t of metapress.entities.all) "avatars" == t.sync && t.owner == e.instanceID && metapress.entities.remove(t.id)
                        }
                }
                getUser(t, e) {
                    let a = this.users.find((e => e.instanceID == t));
                    return a || (e ? (a = new o, a.instanceID = t, this.users.push(a), a) : null)
                }
                async setConfigurationByID(t, e = !1) {
                    let a = this.getConfigurations().find((e => e.avatar_id == t));
                    if (!a) throw new Error(`Avatar configuration for '${t}' not found!`);
                    this.currentUserEntity?.avatar_id != t || this.currentUserEntity?.url != a.url || e ? await this.setAvatarConfiguration(a) : l.warn(`[MetaPress > Avatars] Avatar configuration '${t}' is already active.`)
                }
                getConfigurations() {
                    return metapress.plugins.callAll("getAvatarConfigurations").flat().filter((t => !!t))
                }
                get configurationID() {
                    return this.currentUserEntity?.avatar_id || "extra.justin"
                }
                async setAvatarConfiguration(t, e) {
                    if (t.getURL && "function" == typeof t.getURL) {
                        let e = t.getURL;
                        delete(t = {
                            ...t
                        }).getURL;
                        let a = null;
                        try {
                            a = await e()
                        } catch (t) {
                            l.error("[MetaPress > Avatars] Failed to get URL for avatar: ", t)
                        }
                        if (!a) return null;
                        if ("string" == typeof a) t.url = a;
                        else {
                            if ("object" != typeof a) return l.error("[MetaPress > Avatars] Unknown response from getURL function: ", a), null;
                            t = {
                                ...t,
                                ...a
                            }
                        }
                    }
                    let a = this.currentUserEntity;
                    a && metapress.entities.remove(a.id), this.currentUserEntity = metapress.entities.add({
                        ...t,
                        id: "",
                        sync: "avatars",
                        owner: metapress.instanceID,
                        x: a?.x || 0,
                        y: a?.y || 0,
                        z: a?.z || 0
                    }), metapress.camera.attachedEntity = this.currentUserEntity, metapress.camera.attachedEntityOffset.set(0, this.currentUserEntity.avatar_eye_height || .95 * (this.currentUserEntity.avatar_height || 1.8), 0), e || metapress.profile.set("avatarConfig", t), a && metapress.plugins.sendEvent("avatar_changed", t), setTimeout((t => {
                        a && a?.y != this.currentUserEntity.y && this.updateAvatarEntity({
                            y: a.y
                        })
                    }), 1e3)
                }
                createModifier(t) {
                    if ("avatar-controller" == t) return new n
                }
                $getDebugMenuOptions = () => [{
                    id: "core.avatar.respawn",
                    section: "Avatar",
                    name: "Move to Origin",
                    action: () => metapress.entities.update(this.currentUserEntity.id, {
                        x: 0,
                        y: 0,
                        z: 0
                    })
                }];
                $profile_onUpdate(t) {
                    let e = t?.isFromPortal ? metapress.profile.get("avatarConfig") : null;
                    t?.isFromPortal && e && this.setAvatarConfiguration(e, !0)
                }
                $entity_loadFailed({
                    entity: t,
                    renderer: e,
                    modifier: a
                }) {
                    t.id == this.currentUserEntity?.id && (l.warn("[MetaPress > Avatars] Failed to load avatar entity, setting back to default."), this.setConfigurationByID("default"))
                }
                moveToUser(t) {
                    this.users.forEach((e => {
                        let a = t?.toLowerCase();
                        if (e.name.toLowerCase().includes(a)) {
                            var i = Math.random();
                            let t = e.x + i,
                                a = e.y + i,
                                r = e.z + i;
                            this.moveTo(t, a, r)
                        }
                    }))
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: "core.avatars:setAvatar",
                    type: "action",
                    name: "Set Avatar",
                    content: `\n                To change the avatar, run the KB action "core.avatars:setAvatar" with value as the ID of the avatar to use.\n                Current avatar: id=${this.currentUserEntity?.avatar_id||"default"} name=${this.currentUserEntity?.avatar_name||"default"}\n                Available avatars:\n                ${this.getConfigurations().map((t=>`- id=${t.avatar_id} name=${t.avatar_name}`)).join("\n")}\n            `,
                    action: t => this.setConfigurationByID(t.value)
                }, {
                    id: `${this.id}:goToUser`,
                    type: "action",
                    name: "Avatars - Go To User",
                    tags: "go to user, find user, teleport to user, join user, take me to, take me to user, go to person, find person, teleport to person, join person, take me to, take me to person, go to avatar, find avatar, teleport to avatar, join avatar, take me to, take me to avatar",
                    content: `\n                This action can be used to go to a user in the space.\n                Assistant instruction: The value is the name of the user to go to. This is the list of users in a space:\n                ${this.users.map((t=>`- ${t.name}`)).join("\n")}\n            `,
                    action: t => {
                        if (!t.value) throw new Error("Cannot go to user.");
                        return this.moveToUser(t.value), "Moved to user."
                    }
                }]
            }
        },
        1794: (t, e, a) => {
            function i(t, e = 1 / 0) {
                return new Promise(((a, i) => {
                    let r = Date.now(),
                        s = null;
                    s = setInterval((function() {
                        if (Date.now() - r > e) return clearInterval(s), void i(new Error("Timed out."));
                        let n = t();
                        n && (clearInterval(s), a(n))
                    }), 5)
                }))
            }
            a.d(e, {
                C: () => i
            })
        }
    }
]);