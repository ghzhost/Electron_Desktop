"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [1985], {
        40001: (e, t, i) => {
            i.d(t, {
                Lm: () => a,
                U8: () => o,
                lk: () => n,
                sN: () => r
            });
            var s = i(67294);
            const n = e => s.createElement(s.Fragment, null, s.createElement("div", {
                    style: {
                        display: "flex",
                        alignItems: "center",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        width: "100%",
                        height: 44,
                        borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                    }
                }, s.createElement("div", {
                    style: {
                        fontSize: 15,
                        margin: "0px 20px",
                        flex: "1 1 1px"
                    }
                }, e.title), null != e.onClose ? s.createElement("img", {
                    draggable: "false",
                    src: i(42728),
                    title: "Close",
                    style: {
                        width: 20,
                        height: 20,
                        marginRight: 15,
                        cursor: "pointer"
                    },
                    onClick: e.onClose
                }) : null), s.createElement("div", {
                    style: Object.assign({
                        position: "absolute",
                        top: 45,
                        left: 0,
                        width: "100%",
                        height: "calc(100% - 45px)",
                        overflowX: "hidden",
                        overflowY: "auto"
                    }, e.containerStyle)
                }, e.children)),
                a = e => {
                    let [t, n] = s.useState(!!e.openByDefault);
                    return !1 === e.visible ? s.createElement(s.Fragment, null) : s.createElement(s.Fragment, null, s.createElement("div", {
                        style: Object.assign({
                            display: "flex",
                            margin: "20px 10px 10px 10px",
                            fontSize: 15,
                            cursor: "pointer",
                            alignItems: "center"
                        }, e.style),
                        onClick: e => n(!t)
                    }, s.createElement("img", {
                        draggable: "false",
                        src: i(t ? 40313 : 65141),
                        style: {
                            width: 8,
                            height: 8,
                            margin: "0px 6px"
                        }
                    }), s.createElement("div", {
                        style: {
                            flex: "1 1 auto"
                        }
                    }, e.title), e.onRemove ? s.createElement("img", {
                        draggable: "false",
                        src: i(3272),
                        style: {
                            width: 16,
                            height: 16,
                            margin: "0px 10px",
                            cursor: "pointer",
                            opacity: .75
                        },
                        onClick: t => {
                            t.preventDefault(), t.stopPropagation(), e.onRemove()
                        }
                    }) : null), t ? e.children : null)
                },
                r = e => {
                    let [t, n] = s.useState(!1);
                    return s.createElement("div", {
                        style: {
                            margin: "2px 10px",
                            fontSize: 13,
                            borderRadius: 5,
                            backgroundColor: t ? "rgba(255, 255, 255, 0.1)" : e.selected ? "rgb(36, 76, 119)" : "rgba(255, 255, 255, 0.0)",
                            cursor: e.disabled ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            height: 30
                        },
                        title: e.tooltip,
                        onPointerEnter: e => n(!0),
                        onPointerLeave: e => n(!1),
                        onClick: e.disabled ? null : e.onClick
                    }, e.disabled ? s.createElement("div", {
                        style: {
                            flex: "0 0 auto",
                            margin: "0 10px",
                            backgroundColor: "#717171",
                            width: 16,
                            height: 16,
                            maskImage: `url(${e.icon||i(86029)})`,
                            maskPosition: "center",
                            maskSize: "cover",
                            maskRepeat: "no-repeat",
                            WebkitMaskImage: `url(${e.icon||i(86029)})`,
                            WebkitMaskPosition: "center",
                            WebkitMaskSize: "cover",
                            WebkitMaskRepeat: "no-repeat",
                            pointerEvents: "none"
                        }
                    }) : s.createElement("img", {
                        draggable: "false",
                        src: e.icon || i(86029),
                        style: {
                            pointerEvents: "none",
                            width: 16,
                            height: 16,
                            margin: "0px 10px",
                            flex: "0 0 auto",
                            border: "none"
                        }
                    }), s.createElement("div", {
                        style: {
                            color: e.disabled ? "#717171" : null,
                            fontSize: 13,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            marginRight: 10
                        }
                    }, e.name))
                },
                o = e => s.createElement("div", {
                    style: {
                        margin: "10px 20px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: 5,
                        display: "flex"
                    }
                }, s.createElement("img", {
                    src: i(83203),
                    style: {
                        width: 16,
                        margin: "0px 20px",
                        flex: "0 0 auto",
                        opacity: .5
                    }
                }), s.createElement("div", {
                    style: {
                        fontSize: 12,
                        color: "rgba(255, 255, 255, 0.5)",
                        textAlign: "left",
                        margin: "10px 10px 10px 0px",
                        lineHeight: "1.5",
                        flex: "1 1 1px"
                    }
                }, e.text))
        },
        46839: (e, t, i) => {
            i.d(t, {
                Z: () => s
            });
            const s = {
                appVersion: i(4147).i8,
                colors: {
                    darkGrey: "#272727",
                    black: "#1a1a1a"
                }
            }
        },
        31985: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => g
            });
            var s = i(46839),
                n = i(42238),
                a = i.n(n),
                r = i(67294),
                o = i(32589),
                l = i(40001);
            class h extends r.PureComponent {
                render() {
                    let e = metapress.plugins.callAll("getDebugMenuOptions").flat();
                    for (let t of e) t.section = t.section || "General";
                    let t = [];
                    for (let i of e) t.includes(i.section) || t.push(i.section);
                    return t.sort(((e, t) => e.localeCompare(t))), e.sort(((e, t) => (e.name || "").localeCompare(t.name || ""))), r.createElement(l.lk, {
                        title: "Debug Menu",
                        onClose: () => metapress.menubar.closePanel()
                    }, t.map((t => r.createElement(l.Lm, {
                        openByDefault: !0,
                        key: t,
                        title: t
                    }, e.filter((e => e.section == t)).map((e => this.renderOption(e)))))))
                }
                renderOption(e) {
                    return r.createElement(o.zx, {
                        key: e.id,
                        title: e.name,
                        onClick: () => this.onOptionClick(e)
                    })
                }
                async onOptionClick(e) {
                    await (e.action?.()), this.forceUpdate()
                }
            }
            var d = i(55293),
                c = i(6147);
            class p extends c.Z {
                canvas = null;
                context = null;
                iconCache = {};
                onLoad() {
                    this.canvas = document.createElement("canvas"), this.canvas.width = 1024, this.canvas.height = 1024, this.context = this.canvas.getContext("2d");
                    let e = new THREE.CanvasTexture(this.canvas);
                    e.colorSpace = THREE.SRGBColorSpace, e.anisotropy = metapress.renderer.glrenderer.capabilities.getMaxAnisotropy();
                    let t = new THREE.PlaneGeometry(1, 1),
                        i = new THREE.MeshBasicMaterial({
                            map: e,
                            transparent: !0,
                            alphaTest: .01
                        });
                    this.object = new THREE.Mesh(t, i), this.timer = setInterval((() => this.draw()), 1e3)
                }
                onUnload() {
                    clearInterval(this.timer)
                }
                draw() {
                    if (this.entity.hidden) return;
                    this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
                    let e = metapress.debug.text.split("\n");
                    this.context.fillStyle = "#000", this.context.font = "12px monospace", this.context.textAlign = "left", this.context.textBaseline = "top";
                    for (let t = 0; t < e.length; t++) this.context.fillText(e[t], 0, 14 * t);
                    this.object.material.map.needsUpdate = !0
                }
            }
            var m = i(25108);

            function u(e) {
                let [t, i] = (0, r.useState)(0);
                (0, r.useEffect)((() => {
                    let e = setInterval((() => i((e => e + 1))), 1e3);
                    return () => clearInterval(e)
                }), []);
                let s = [];
                for (let e of metapress.plugins.stats.recordedEvents) {
                    let t = s.find((t => t.name == e.name));
                    t ? t.events.push(e) : s.push({
                        name: e.name,
                        events: [e]
                    })
                }
                return s.sort(((e, t) => e.name.localeCompare(t.name))), r.createElement(l.lk, {
                    title: "Event Monitor",
                    onClose: () => metapress.menubar.closePanel()
                }, r.createElement(l.Lm, {
                    openByDefault: !0,
                    title: "Actions"
                }, r.createElement(o.aW, null, r.createElement(o.ek, {
                    title: "Clear",
                    onClick: () => {
                        metapress.plugins.stats.recordedEvents = [], i((e => e + 1))
                    },
                    disabled: !metapress.plugins.stats.recordedEvents.length
                }), r.createElement(o.ek, {
                    title: "Start",
                    onClick: () => {
                        metapress.plugins.stats.recordEvents = !0, i((e => e + 1))
                    },
                    disabled: metapress.plugins.stats.recordEvents
                }), r.createElement(o.ek, {
                    title: "Stop",
                    onClick: () => {
                        metapress.plugins.stats.recordEvents = !1, i((e => e + 1))
                    },
                    disabled: !metapress.plugins.stats.recordEvents
                }))), r.createElement(l.Lm, {
                    openByDefault: !0,
                    title: `Events (${metapress.plugins.stats.recordedEvents.length})`
                }, 0 == s.length ? r.createElement("div", {
                    style: {
                        margin: "0px 28px",
                        padding: 0,
                        fontSize: 12,
                        color: "rgba(255, 255, 255, 0.5)",
                        textAlign: "left"
                    }
                }, "No events recorded") : null, s.map(((e, t) => r.createElement(l.sN, {
                    key: t,
                    name: `${e.name} (${e.events.length})`,
                    onClick: () => m.log(e)
                })))))
            }
            class g {
                id = "core.debug";
                name = "Debug Utilities";
                description = "Displays an overlay describing the app internals.";
                version = "1.0.0";
                requires = ["renderer", "menubar"];
                provides = ["debug", "render:vr.debug-text"];
                div = document.createElement("div");
                text = "";
                isShown = !1;
                onLoad() {
                    this.div.style.cssText = 'display: none; position: absolute; z-index: 1; top: 10px; left: 10px; max-width: calc(100% - 40px); font-size: 10px; font-family: "Roboto Mono", monospace; color: #e9e9e9; line-height: 1.5; white-space: pre-wrap; pointer-events: none; background-color: rgb(0 0 0 / 60%); border-radius: 10px; backdrop-filter: blur(6px); -webkit-backdrop-filter: blur(6px); padding: 10px;', metapress.contentDiv.appendChild(this.div), this.updateTimer = setInterval(this.onTimer.bind(this), 1e3);
                    let e = new(a())(navigator.userAgent).getResult();
                    this.systemLine = `cpu=${e.cpu.architecture||"?"} device=${e.device.type||"?"} model=${e.device.vendor||"?"} ${e.device.model||""} os=${e.os.name||"?"} ${e.os.version||""} browser=${e.browser.name||"?"} ${e.browser.version||""} engine=${e.engine.name||"?"} ${e.engine.version||""}`, window.addEventListener("keydown", (e => {
                        e.shiftKey && e.ctrlKey && ["`", "~", "§", "±", "0"].includes(e.key) && (e.preventDefault(), this.showDebugMenu())
                    })), metapress.entities.add({
                        id: "core.debug:vr.text",
                        type: "vr.debug-text",
                        name: "VR Debug Text",
                        hidden: !0,
                        parent: "core.render.vr:menubar",
                        x: 0,
                        y: -.3,
                        z: 0,
                        scaleX: .5,
                        scaleY: .5,
                        scaleZ: .5,
                        physical: !1
                    }), !this.isShown && localStorage["mp.debug.text"] && this.toggleDisplay()
                }
                createRenderer(e) {
                    if ("vr.debug-text" == e) return new p
                }
                toggleDisplay() {
                    this.div && (this.isShown ? (this.isShown = !1, this.div.style.display = "none", metapress.entities.update("core.debug:vr.text", {
                        hidden: !0
                    })) : (this.isShown = !0, this.div.style.display = "block", metapress.entities.update("core.debug:vr.text", {
                        hidden: !1
                    })), localStorage["mp.debug.text"] = this.isShown ? "1" : "")
                }
                $getDebugSection() {
                    let e = metapress.plugins.all.reduce(((e, t) => e + (t._state == d.BV.Loaded ? 1 : 0)), 0),
                        t = metapress.plugins.all.length,
                        i = metapress.storage?.id || "none",
                        n = {
                            order: -9999,
                            id: "core.main",
                            name: "",
                            text: `App: version=${s.Z.appVersion} origin=${location.origin} storage=${i}\nPosition: x=${(metapress.avatars?.currentUserEntity.x||0).toFixed(2)} y=${(metapress.avatars?.currentUserEntity.y||0).toFixed(2)} z=${(metapress.avatars?.currentUserEntity.z||0).toFixed(2)}\nSystem: ${this.systemLine}\nPlugins: loaded=${e}/${t} events=${metapress.plugins.stats.eventsEmitted}/s`
                        };
                    return metapress.plugins.stats.eventsEmitted = 0, n
                }
                $getDebugMenuOptions = () => [{
                    id: "core.debug.text",
                    name: this.isShown ? "Hide debug text" : "Show debug text",
                    action: () => this.toggleDisplay()
                }, {
                    id: "core.debug.events",
                    name: "Event monitor",
                    action: () => this.showEventMonitor()
                }];
                onTimer() {
                    let e = metapress.plugins.callAll("getDebugSection").flat();
                    e.sort(((e, t) => {
                        let i = e.order || 0,
                            s = t.order || 0;
                        return i != s ? i - s : (e.name || "").localeCompare(t.name || "")
                    }));
                    for (let t = 0; t < e.length; t++) {
                        let i = e[t],
                            s = e.findIndex((e => e != i && e.id && e.id == i.id)); - 1 != s && (i.text += "\n" + e[s].text, e.splice(s, 1))
                    }
                    this.text = "";
                    for (let t of e)(t.name || t.text) && ("core.main" != t.id && (this.text += "=== " + t.name + "\n"), this.text += t.text + "\n\n");
                    this.text = this.text.slice(0, -2), this.div.innerText = this.text
                }
                showDebugMenu() {
                    const debugAccess = metapressConfig.debugMenuAccess || 'admins_only'; // Valor padrão

                    if (debugAccess === 'admins_only') {
                        // Apenas admins podem acessar (verifica barra de administração ou canEdit)
                        if (!metapressConfig.core.integration.wordpress.adminBarShowing && !metapressConfig.core.integration.wordpress.canEdit) {
                            metapress.menubar.toasts.show({
                                text: "Você precisa ser um administrador logado para acessar o menu de debug."
                            });
                            return;
                        }
                    } else if (debugAccess === 'logged_in') {
                        // Todos os usuários logados podem acessar
                        if (!metapress.user.isLoggedIn) {
                            metapress.menubar.toasts.show({
                                text: "Você precisa estar logado para acessar o menu de debug."
                            });
                            return;
                        }
                    } else if (debugAccess === 'everyone') {
                        // Todos podem acessar, sem verificação
                    }

                    metapress.menubar.toggleReactPanel("core.debug.menu", h)
                }
                showEventMonitor() {
                    metapress.menubar.toggleReactPanel("core.debug.events", u)
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:showDebugMenu`,
                    type: "action",
                    name: "Debug - Show menu",
                    tags: "show debug menu, open debug menu",
                    content: "\n                Assistant instruction: Run this action when the user wants to open the debug menu. Don't mention it otherwise. This is a developer feature, don't mention it to normal users.\n            ",
                    action: e => (this.showDebugMenu(), "Menu opened")
                }, {
                    id: `${this.id}:showEventMonitor`,
                    type: "action",
                    name: "Debug - Show event monitor",
                    tags: "show event monitor, open event monitor",
                    content: "\n                Assistant instruction: Run this action when the user wants to see what code events are occurring in the space. Don't mention it otherwise. This is a developer feature, don't mention it to normal users.\n            ",
                    action: e => (this.showEventMonitor(), "Event monitor UI opened")
                }, {
                    id: `${this.id}:showDebugOverlay`,
                    type: "action",
                    name: "Debug - Stats text overlay",
                    tags: "debug text, show debug stats, hide debug stats, show debug statistics, show debug overlay, display debug overlay, display debug stats, remove debug stats, show frame rate, show fps, show memory usage, show graphics memory, show debug information, show debug data, show debug details, show debug info, debug stats, frame rate, fps, memory usage, graphics memory, graphics driver, debug information, debug data, debug details, debug info, graphics card, gfx card, GPU, CPU, processor, RAM, memory, hardware",
                    content: `\n                Assistant instruction: Run this action with value 'show' or 'hide' to show/hide the debug overlay which contains information such as frame rate, graphics memory, etc. Don't mention it otherwise. This is a developer feature, don't mention it to normal users.\n                Stats overlay is currently ${this.isShown?"visible":"hidden"}.\n                Current stats:\n${this.text}\n            `,
                    action: e => "show" == e.value ? this.isShown ? "Debug stats already visible" : (this.toggleDisplay(), "Debug stats shown") : this.isShown ? (this.toggleDisplay(), "Debug stats hidden") : "Debug stats already hidden"
                }]
            }
        },
        6147: (e, t, i) => {
            i.d(t, {
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
                    let e = n.showBoundingBoxes && this.container.visible;
                    !e && this.boundingBoxHelper ? (this.boundingBoxHelper.removeFromParent(), this.boundingBoxHelper.dispose(), this.boundingBoxHelper = null) : e && !this.boundingBoxHelper && (this.boundingBoxHelper = new THREE.BoxHelper(this.container, 16777215), metapress.renderer.scene.add(this.boundingBoxHelper))
                }
                applyWireframe() {
                    this._lastWireframeMode != n.wireframeMode && (this._lastWireframeMode = n.wireframeMode, this.container.traverse((e => {
                        e.isMesh && e.material && (this.hasLoaded || (this.wireframeState[e.uuid] = !!e.material.wireframe), e.material.wireframe = !!n.wireframeMode || (this.wireframeState[e.uuid] ?? !1))
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
        4028: (e, t, i) => {
            i.d(t, {
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
        40313: (e, t, i) => {
            e.exports = i.p + "mp-core/chevron-down.cc1880a489f70d445894.svg"
        },
        65141: (e, t, i) => {
            e.exports = i.p + "mp-core/chevron-right.4d67e59ffa9deea58f42.svg"
        },
        83203: (e, t, i) => {
            e.exports = i.p + "mp-core/icon-info.7ffb0c7f21d06d441b00.svg"
        },
        86029: (e, t, i) => {
            e.exports = i.p + "mp-core/icon-unknown.c9a47daeb41c69cd7c2b.svg"
        },
        3272: (e, t, i) => {
            e.exports = i.p + "mp-core/trash-can.a6dd95456040e25648a2.svg"
        },
        4147: e => {
            e.exports = {
                i8: "VerseWeb 1.0 BETA"
            }
        }
    }
]);