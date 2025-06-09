"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [7109], {
        77109: (e, t, o) => {
            o.r(t), o.d(t, {
                default: () => d
            });
            var i = o(99477);
            class s {
                id = "gamepad";
                manager = null;
                movement = new THREE.Vector2;
                movementVelocity = new THREE.Vector2;
                rotation = new THREE.Vector2;
                rotationVelocity = new THREE.Vector2;
                zoom = 0;
                zoomVelocity = 0;
                actions = {};
                deadzone = .15;
                isActive = !1;
                constructor(e) {
                    this.manager = e
                }
                processInput() {
                    let e = navigator.getGamepads?.()?.[0];
                    if (!e) return this.movementVelocity.set(0, 0), this.rotationVelocity.set(0, 0), this.zoomVelocity = 0, void(this.isActive = !1);
                    let t = e.axes[0],
                        o = e.axes[1],
                        i = e.axes[2],
                        s = e.axes[3],
                        n = e.buttons;
                    Math.abs(t) < this.deadzone && (t = 0), Math.abs(o) < this.deadzone && (o = 0), Math.abs(i) < this.deadzone && (i = 0), Math.abs(s) < this.deadzone && (s = 0), this.movementVelocity.set(t, -o), n[10]?.value > .5 ? (this.zoomVelocity = 2 * s, this.rotationVelocity.set(0, 0), this.movementVelocity.set(0, 0)) : (this.zoomVelocity = 0, this.rotationVelocity.set(2 * -i, 2 * -s), this.movementVelocity.set(t, -o)), this.isActive = !0, this.movementVelocity.length() > .95 ? this.manager.onActionPressed(this, "run") : this.manager.onActionReleased(this, "run"), n[3].value > .5 ? this.manager.onActionPressed(this, "jump") : this.manager.onActionReleased(this, "jump");
                    let r = n[0].value > .5;
                    if (!this._actionButtonWasPressed && r && metapress.camera.focusedEntity) {
                        let e = metapress.raycast.atScreenCoordinates(metapress.renderer.canvasRect.width / 2, metapress.renderer.canvasRect.height / 2);
                        metapress.entities.getRenderer(metapress.camera.focusedEntity.id)?.onClick?.(e);
                        for (let t of metapress.entities.getModifiers(metapress.camera.focusedEntity.id)) t.onClick?.(e)
                    }
                    this._actionButtonWasPressed = r
                }
            }
            class n {
                id = "keyboard";
                manager = null;
                activeKeys = {};
                movementVelocity = new THREE.Vector2;
                rotation = new THREE.Vector2;
                rotationVelocity = new THREE.Vector2;
                zoom = 0;
                zoomVelocity = 0;
                actions = {};
                constructor(e) {
                    this.manager = e, window.addEventListener("keydown", this.onKeyDown.bind(this)), window.addEventListener("keyup", this.onKeyUp.bind(this))
                }
                ignoredElements = ["INPUT", "TEXTAREA", "WEB-WEAVER-EMBED"];
                onKeyDown(e) {
                    metapress.isOpen && !this.ignoredElements.includes(document.activeElement?.tagName) ? (metapress.plugins.sendEvent("input_onUserInput", e), (e.altKey || e.ctrlKey || e.shiftKey || e.metaKey) && "KeyJ" == e.code || (e.preventDefault(), this.activeKeys[e.code] = !0, "ShiftLeft" != e.code && "ShiftRight" != e.code || this.manager.onActionPressed(this, "run"), "Space" == e.code && this.manager.onActionPressed(this, "jump"))) : this.activeKeys[e.code] = !1
                }
                onKeyUp(e) {
                    metapress.isOpen && !this.ignoredElements.includes(document.activeElement?.tagName) ? (e.preventDefault(), this.activeKeys[e.code] = !1, "ShiftLeft" != e.code && "ShiftRight" != e.code || this.manager.onActionReleased(this, "run"), "Space" == e.code && this.manager.onActionReleased(this, "jump")) : this.activeKeys[e.code] = !1
                }
                reset() {
                    this.movementVelocity.set(0, 0), this.rotationVelocity.set(0, 0), this.manager.onActionReleased(this, "run"), this.manager.onActionReleased(this, "jump")
                }
                processInput() {
                    if ("INPUT" != document.activeElement?.tagName && "TEXTAREA" != document.activeElement?.tagName) {
                        if (this.movementVelocity.set(0, 0), this.rotationVelocity.set(0, 0), (this.activeKeys.KeyW || this.activeKeys.ArrowUp) && (this.movementVelocity.y = 1), (this.activeKeys.KeyS || this.activeKeys.ArrowDown) && (this.movementVelocity.y = -1), this.activeKeys.KeyA && (this.movementVelocity.x = -1), this.activeKeys.KeyD && (this.movementVelocity.x = 1), this.activeKeys.ArrowLeft && (this.rotationVelocity.x = 1), this.activeKeys.ArrowRight && (this.rotationVelocity.x = -1), 0 != this.movementVelocity.x && 0 != this.movementVelocity.y) {
                            const e = Math.sqrt(this.movementVelocity.x ** 2 + this.movementVelocity.y ** 2);
                            this.movementVelocity.x = this.movementVelocity.x / e, this.movementVelocity.y = this.movementVelocity.y / e
                        }
                    } else this.reset()
                }
            }
            var r = o(50840),
                a = o.n(r),
                m = o(4028);
            class h {
                id = "touch";
                manager = null;
                movement = new THREE.Vector2;
                movementVelocity = new THREE.Vector2;
                rotation = new THREE.Vector2;
                rotationVelocity = new THREE.Vector2;
                zoom = 0;
                zoomVelocity = 0;
                actions = {};
                preventInput = new m.Z;
                constructor(e) {
                    this.manager = e, this.hammer = new(a().Manager)(metapress.renderer.canvas, {
                        touchAction: "none",
                        recognizers: [
                            [a().Tap, {
                                    event: "doubletap",
                                    taps: 2
                                },
                                [],
                                []
                            ],
                            [a().Tap, {
                                    event: "tap",
                                    taps: 1
                                },
                                [],
                                ["doubletap"]
                            ],
                            [a().Pan, {
                                    event: "zoom",
                                    pointers: 3,
                                    direction: a().DIRECTION_VERTICAL
                                },
                                [],
                                []
                            ]
                        ]
                    }), this.hammer.on("tap", this.onTap.bind(this)), this.hammer.on("doubletap", this.onDoubleTap.bind(this)), this.hammer.on("zoomstart", this.onZoomStart.bind(this)), this.hammer.on("zoommove", this.onZoomMove.bind(this)), this.hammer.on("zoomend", this.onZoomEnd.bind(this)), metapress.renderer.canvas.addEventListener("pointerdown", this.onPointerDown.bind(this), {
                        passive: !0
                    }), window.addEventListener("pointermove", this.onPointerMove.bind(this), {
                        passive: !0
                    }), window.addEventListener("pointerup", this.onPointerUp.bind(this), {
                        passive: !0
                    }), metapress.renderer.canvas.addEventListener("touchstart", (e => e.preventDefault()), {
                        passive: !1
                    })
                }
                movePointerID = -1;
                movePointerStart = new THREE.Vector2;
                cameraPointerID = -1;
                cameraPointerStart = new THREE.Vector2;
                onPointerDown(e) {
                    if ("touch" != e.pointerType) return;
                    e.pageX < window.innerWidth / 2 ? (this.movePointerID = e.pointerId, this.movePointerStart.set(e.pageX, e.pageY)) : (this.cameraPointerID = e.pointerId, this.cameraPointerStart.set(e.pageX, e.pageY)), metapress.menubar.fade("out");
                    const t = metapress.button?.div;
                    t && (t.style.cssText = "bottom: -42px;")
                }
                onPointerMove(e) {
                    if ("touch" == e.pointerType && !this.preventInput.isLocked)
                        if (this.isZooming) this.onPointerUp(e);
                        else if (e.pointerId == this.movePointerID) {
                        let t = e.pageX - this.movePointerStart.x,
                            o = e.pageY - this.movePointerStart.y;
                        this.movementVelocity.set(t, -o).multiplyScalar(.02), Math.sqrt(t ** 2 + o ** 2) > 125 ? this.manager.onActionPressed(this, "run") : this.manager.onActionReleased(this, "run")
                    } else if (e.pointerId == this.cameraPointerID) {
                        let t = e.pageX - this.cameraPointerStart.x,
                            o = e.pageY - this.cameraPointerStart.y;
                        Math.abs(t) + Math.abs(o) < 50 ? this.rotationVelocity.set(0, 0) : this.rotationVelocity.set(-t, -o).multiplyScalar(.02)
                    }
                }
                onPointerUp(e) {
                    e.pointerId == this.movePointerID ? (this.movePointerID = -1, this.movementVelocity.set(0, 0), this.manager.onActionReleased(this, "run")) : e.pointerId == this.cameraPointerID && (this.cameraPointerID = -1, this.rotationVelocity.set(0, 0)), -1 === this.cameraPointerID && -1 === this.movePointerID && metapress.menubar.fade("in");
                    const t = metapress.button?.div;
                    t && (t.style.cssText = null)
                }
                onZoomStart(e) {
                    e.preventDefault(), "touch" == e.pointerType && (this.lastZoomY = e.center.y, this.isZooming = !0)
                }
                onZoomMove(e) {
                    e.preventDefault(), "touch" == e.pointerType && (this.preventInput.isLocked || (this.zoom += .05 * (this.lastZoomY - e.center.y), this.lastZoomY = e.center.y, this.isZooming = !0))
                }
                onZoomEnd(e) {
                    e.preventDefault(), this.isZooming = !1
                }
                onTap(e) {
                    if (e.preventDefault(), "touch" != e.pointerType) return;
                    if (this.preventInput.isLocked) return;
                    metapress.plugins.sendEvent("input_onUserInput", e);
                    let t = metapress.raycast.atScreenCoordinates(e.center.x, e.center.y);
                    t?.entity && metapress.entities.doClick(t.entity.id, t) || metapress.renderer.canvas.focus()
                }
                onDoubleTap(e) {
                    e.preventDefault(), "touch" == e.pointerType && (this.preventInput.isLocked || (metapress.plugins.sendEvent("input_onUserInput", e), metapress.plugins.sendEvent("input_onDoubleClick", {
                        x: e.center.x,
                        y: e.center.y
                    })))
                }
            }
            class c {
                id = "mouse";
                manager = null;
                movement = new THREE.Vector2;
                movementVelocity = new THREE.Vector2;
                rotation = new THREE.Vector2;
                rotationVelocity = new THREE.Vector2;
                zoom = 0;
                zoomVelocity = 0;
                actions = {};
                preventInput = new m.Z;
                _lastClickTime = null;
                constructor(e) {
                    this.manager = e, metapress.renderer.glrenderer.domElement.addEventListener("mousedown", this.onPointerDown.bind(this)), metapress.renderer.glrenderer.domElement.addEventListener("mousemove", this.onPointerMove.bind(this)), metapress.renderer.glrenderer.domElement.addEventListener("mouseup", this.onPointerUp.bind(this)), metapress.renderer.glrenderer.domElement.addEventListener("wheel", this.onWheel.bind(this)), metapress.renderer.glrenderer.domElement.addEventListener("contextmenu", (e => e.preventDefault())), metapress.renderer.glrenderer.domElement.focus()
                }
                onPointerDown(e) {
                    if (e.preventDefault(), metapress.plugins.sendEvent("input_onUserInput", e), this.preventInput.isLocked) return;
                    if (2 == e.button && document.pointerLockElement) return void document.exitPointerLock();
                    if (2 == e.button) return metapress.renderer.glrenderer.domElement.focus(), void metapress.renderer.glrenderer.domElement.requestPointerLock();
                    this._lastClickTime || (this._lastClickTime = Date.now());
                    let t = Date.now() - this._lastClickTime;
                    if (t > 0 && t < 500) return metapress.plugins.sendEvent("input_onDoubleClick", {
                        x: e.clientX,
                        y: e.clientY
                    }), void(this._lastClickTime = Date.now());
                    if (this._lastClickTime = Date.now(), !document.pointerLockElement) {
                        let t = metapress.raycast.atScreenCoordinates(e.x, e.y);
                        if (t?.entity && metapress.entities.doClick(t.entity.id, t)) return;
                        return metapress.renderer.glrenderer.domElement.focus(), void metapress.renderer.glrenderer.domElement.requestPointerLock()
                    }
                    if (metapress.camera.focusedEntity) {
                        let e = metapress.raycast.atScreenCoordinates(metapress.renderer.canvasRect.width / 2, metapress.renderer.canvasRect.height / 2);
                        metapress.entities.getRenderer(metapress.camera.focusedEntity.id)?.onClick?.(e);
                        for (let t of metapress.entities.getModifiers(metapress.camera.focusedEntity.id)) t.onClick?.(e)
                    }
                }
                onPointerMove(e) {
                    e.preventDefault(), document.pointerLockElement && (this.rotation.x -= .005 * e.movementX, this.rotation.y -= .005 * e.movementY)
                }
                onPointerUp(e) {
                    e.preventDefault()
                }
                onWheel(e) {
                    e.preventDefault();
                    let t = e.deltaX,
                        o = e.deltaY;
                    0 == e.deltaMode || e.wheelDeltaX || e.wheelDeltaY ? (t = e.wheelDeltaX || e.deltaX, o = e.wheelDeltaY || e.deltaY) : 1 == e.deltaMode ? (t = 20 * e.deltaX, o = 20 * e.deltaY) : 2 == e.deltaMode && (t = 50 * e.deltaX, o = 50 * e.deltaY);
                    let i = Date.now();
                    (!this.lastWheelDate || i - this.lastWheelDate > 250) && (Math.abs(e.deltaX) > Math.abs(e.deltaY) ? this.wheelMode = "camera" : this.wheelMode = "zoom"), this.lastWheelDate = i, "camera" == this.wheelMode ? (this.rotation.x += .005 * e.deltaX, this.rotation.y += .0025 * e.deltaY) : this.zoom += .005 * e.deltaY
                }
            }
            class d {
                id = "core.input";
                name = "First Person Camera";
                description = "Allows the user to move around in first-person view.";
                version = "1.0.0";
                provides = ["input"];
                requires = ["renderer", "raycast"];
                eyeHeight = 1.7;
                movement = new i.Vector2;
                movementSmoothed = new i.Vector2;
                rotation = new i.Vector2;
                rotationSmoothed = new i.Vector2;
                zoom = 0;
                zoomSmoothed = 0;
                devices = [];
                actions = {};
                onActionPressed(e, t) {
                    this.actions[t]?.includes?.(e) || (this.actions[t] = this.actions[t] || [], this.actions[t].push(e), 1 == this.actions[t].length && metapress.plugins.sendEvent("input_actionPressed", t))
                }
                onActionReleased(e, t) {
                    this.actions[t]?.includes?.(e) && (this.actions[t] = this.actions[t].filter((t => t !== e)), metapress.plugins.sendEvent("input_actionReleased", t))
                }
                onLoad() {
                    this.addDevice(new n(this)), this.addDevice(new h(this)), this.addDevice(new c(this)), this.addDevice(new s(this))
                }
                actionActive(e) {
                    return !!this.actions[e]?.length
                }
                addDevice(e) {
                    this.devices.push(e), e.id && !this[e.id] && (this[e.id] = e)
                }
                $beforeRender() {
                    this.rotation.set(0, 0), this.movement.set(0, 0), this.zoom = 0;
                    for (let e = 0; e < this.devices.length; e++) {
                        let t = this.devices[e];
                        t.processInput?.(), this.movement.x += t.movementVelocity.x, this.movement.y += t.movementVelocity.y, this.rotation.x += t.rotationVelocity.x, this.rotation.y += t.rotationVelocity.y, this.rotation.x += t.rotation.x / metapress.renderer.delta, this.rotation.y += t.rotation.y / metapress.renderer.delta, this.zoom += t.zoomVelocity, this.zoom += t.zoom / metapress.renderer.delta, t.rotation.set(0, 0), t.zoom = 0
                    }
                    this.movement.length() > 1 && this.movement.setLength(1), this.movement.multiplyScalar(metapress.renderer.delta), this.rotation.multiplyScalar(metapress.renderer.delta), this.zoom *= metapress.renderer.delta, this.movementSmoothed.x = i.MathUtils.damp(this.movementSmoothed.x, this.movement.x, 10, metapress.renderer.delta), this.movementSmoothed.y = i.MathUtils.damp(this.movementSmoothed.y, this.movement.y, 10, metapress.renderer.delta), this.rotationSmoothed.x = i.MathUtils.damp(this.rotationSmoothed.x, this.rotation.x, 10, metapress.renderer.delta), this.rotationSmoothed.y = i.MathUtils.damp(this.rotationSmoothed.y, this.rotation.y, 10, metapress.renderer.delta), this.zoomSmoothed = i.MathUtils.damp(this.zoomSmoothed, this.zoom, 10, metapress.renderer.delta)
                }
            }
        },
        4028: (e, t, o) => {
            o.d(t, {
                Z: () => i
            });
            class i {
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
        }
    }
]);