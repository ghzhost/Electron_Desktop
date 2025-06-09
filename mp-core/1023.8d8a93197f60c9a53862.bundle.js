(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [1023], {
        46839: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => n
            });
            const n = {
                appVersion: i(4147).i8,
                colors: {
                    darkGrey: "#272727",
                    black: "#1a1a1a"
                }
            }
        },
        66729: (e, t, i) => {
            "use strict";
            i.d(t, {
                u: () => s
            });
            var n = i(46839);
            class s {
                constructor() {
                    this.div = document.createElement("div"), this.div.id = "metapress-menubar-tooltip-container", this.div.style.cssText = "position: absolute; top: 100px; left: 100px; display: none; z-index: 100; ", metapress.contentDiv.appendChild(this.div), this._x = 100, this._y = 100, this.div.innerHTML = `\n        \n            \x3c!-- Background + text --\x3e\n            <div id='metapress-menubar-tooltip-text' style="background-color: ${n.Z.colors.darkGrey}; border-radius: 10px; display: flex; align-items: center; height: 44px; padding: 0px 20px; color: white; font-size: 13px; box-sizing: border-box; box-shadow: 0 0.4rem 0 0 ${n.Z.colors.black}, 0 0 10px 0px rgba(0, 0, 0, 0.6); ">\n                My text here\n            </div>\n\n            \x3c!-- Chevron --\x3e\n            <div id='metapress-menubar-tooltip-chevron' style="display: none; position: absolute; top: 10px; left: 0px; width: 10px; height: 10px; overflow: hidden; ">\n                <div style="position: absolute; top: 0px; left: 0px; width: 10px; height: 10px; background-color: rgba(0, 0, 0, 0.8); transform: rotate(45deg); "></div>\n            </div>\n        \n        `
                }
                get x() {
                    return this._x
                }
                get y() {
                    return this._y
                }
                show(e, t, i) {
                    this._x = e, this._y = t, this.div.style.cssText += `display: block; left: ${this.x+10}px; top: ${this.y-22}px; `, this.div.querySelector("#metapress-menubar-tooltip-text").innerText = i
                }
                hide() {
                    this.div.style.cssText += "display: none; "
                }
            }
        },
        66579: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => p
            });
            var n = i(46839),
                s = i(42321),
                o = i(28721),
                a = i(91036),
                r = i.n(a);
            class l {
                activeToasts = [];
                constructor() {
                    let e = document.createElement("style");
                    e.innerHTML = `\n\n            /* Menubar toast container */\n            #metapress-menubar-toast-container {\n\n                /* Layout */\n                position: absolute; \n                top: calc(50% - 22px);\n                left: 84px;\n                max-width: min(calc(100% - 84px - 20px), 400px);\n                z-index: 10;\n\n            }\n\n            /* Menubar toast */\n            #metapress-menubar-toast-container > .menubar-toast {\n\n                /* Layout */\n                display: block;\n                min-width: 80px;\n                min-height: 20px;\n                max-width: 100%;\n                max-height: 40%;\n                margin-bottom: 20px;\n                box-sizing: border-box;\n\n                /* Appearance */\n                background-color: ${n.Z.colors.darkGrey};\n                border-radius: 10px;\n                box-shadow: 0 0.4rem 0 0 ${n.Z.colors.black}, 0 0 10px 0px rgba(0, 0, 0, 0.6);\n                overflow: hidden;\n                font-size: 13px;\n                color: white;\n                padding: 13px 20px;\n                line-height: 1.5;\n\n            }\n\n            /* Menubar toast when the panel is open */\n            #metapress-menubar-toast-container.panel-open {\n\n                /* Layout */\n                width: 400px;\n                max-width: 400px;\n                top: calc(80% + 20px);\n\n            }\n\n        `, metapress.contentDiv.appendChild(e), this.div = document.createElement("div"), this.div.id = "metapress-menubar-toast-container", metapress.contentDiv.appendChild(this.div)
                }
                show(e) {
                    e.id && this.close(e.id);
                    let t = {};
                    return t.id = e.id || (0, o.Z)(), t.sticky = e.sticky, t.div = document.createElement("div"), t.div.className = "menubar-toast", t.div.innerHTML = r()(e.text), this.div.appendChild(t.div), e.sticky || (t.timeout = setTimeout((() => {
                        this.close(t.id)
                    }), e.duration || 1e4)), this.activeToasts.push(t), t.id
                }
                close(e) {
                    if (!e) return;
                    let t = this.activeToasts.find((t => t.id == e));
                    t && (t.div?.parentNode?.removeChild(t.div), this.activeToasts = this.activeToasts.filter((e => e != t)))
                }
                hide(e) {
                    this.close(e)
                }
                get menubarPanelOpen() {
                    return this._menubarPanelOpen
                }
                set menubarPanelOpen(e) {
                    this._menubarPanelOpen = e, this.div.className = e ? "panel-open" : ""
                }
            }
            var h = i(66729),
                d = i(67294),
                c = i(20745);
            class p {
                id = "core.ui.menubar";
                name = "Menubar";
                description = "Provides the menubar on the side of the screen.";
                version = "1.0.0";
                requires = ["entities", "audio"];
                provides = ["menubar", "render:menubar.item"];
                toasts = null;
                tooltip = null;
                currentPanel = null;
                hoveringItem = null;
                onLoad() {
                    let e = document.createElement("style");
                    e.innerHTML = `\n\n            /* Menubar panel */\n            #metapress-menubar-panel {\n\n                /* Layout */\n                position: absolute; \n                top: 20%;\n                left: 84px;\n                width: calc(100% - 84px - 20px);\n                max-width: 400px;\n                height: 60%;\n                box-sizing: border-box;\n                z-index: 10;\n\n                /* Appearance */\n                background-color: #00233f;\n                border-radius: 10px;\n                box-shadow: 0 0.4rem 0 0 ${n.Z.colors.black}, 0 0 10px 0px rgba(0, 0, 0, 0.6);\n                overflow: hidden;\n                color: white;\n\n            }\n\n        `, metapress.contentDiv.appendChild(e), this.toasts = new l, this.tooltip = new h.u, u.show(this)
                }
                createRenderer(e) {
                    return new m(this)
                }
                onMenuItemClicked(e) {
                    if ("suspended" == metapress.audio.context.state && metapress.audio.context.resume(), e.onClick) {
                        if (this.windowID == e.id) return this.closeWindow();
                        "string" == typeof e.onClick ? metapress.plugins.sendEvent(e.onClick, e) : "function" == typeof e.onClick && e.onClick(e), this.tooltip.hide()
                    }
                }
                onMenuItemPointerOver(e, t) {
                    if (!e.name) return;
                    this.hoveringItem = e;
                    let i = t.getBoundingClientRect(),
                        n = metapress.contentDiv.getBoundingClientRect(),
                        s = i.x + i.width - n.x,
                        o = i.y + i.height / 2 - n.y;
                    this.tooltip.show(s, o, e.name)
                }
                onMenuItemPointerOut(e, t) {
                    this.hoveringItem = null, this.tooltip.hide()
                }
                get openPanelID() {
                    return this.currentPanel?.id
                }
                fade(e) {
                    metapress.plugins.sendEvent("menubar_fadeDisplay", {
                        type: e
                    })
                }
                closePanel(e) {
                    this.currentPanel && (this.currentPanel.containerDiv.parentNode?.removeChild(this.currentPanel.containerDiv), this.currentPanel.onClose?.(this.currentPanel, this.currentPanel.containerDiv), this.currentPanel = null, e || (metapress.plugins.sendEvent("menubar_onPanelChange", null), window.postMessage({
                        type: "metapress.menubar.onPanelChange"
                    }, "*")), this.toasts.menubarPanelOpen = !1, e || metapress.renderer.glrenderer.domElement.focus(), !e && this._wasPointerLocked && (this._wasPointerLocked = !1, metapress.renderer.glrenderer.domElement.requestPointerLock()))
                }
                openPanel(e) {
                    e.id = e.id || THREE.MathUtils.generateUUID(), e.id != this.currentPanel?.id && (this.currentPanel || (this._wasPointerLocked = !!document.pointerLockElement, this._wasPointerLocked && document.exitPointerLock()), this.closePanel(!0), this.currentPanel = e, metapress.plugins.sendEvent("menubar_onPanelChange", this.currentPanel.id), window.postMessage({
                        type: "metapress.menubar.onPanelChange"
                    }, "*"), e.containerDiv = document.createElement("div"), e.containerDiv.id = "metapress-menubar-panel", metapress.contentDiv.appendChild(e.containerDiv), e.onOpen?.(e, e.containerDiv), this.toasts.menubarPanelOpen = !0, metapress.plugins.sendEvent("menubar_didOpenPanel", e))
                }
                openReactPanel(e, t, i) {
                    this.openPanel({
                        id: e,
                        onOpen: (e, n) => {
                            e.root = c.createRoot(n), e.root.render(d.createElement(t, i))
                        },
                        onClose: (e, t) => {
                            e.root.unmount()
                        }
                    })
                }
                toggleReactPanel(e, t, i) {
                    this.openPanelID == e ? this.closePanel() : this.openReactPanel(e, t, i)
                }
                openAvatarSelectionPanel(e, t, i) {
                    return d.createElement(s.Z, {
                        selectedId: e,
                        onSelectAvatar: t,
                        setPage: i
                    })
                }
                $onUnsavedFieldsChanged = () => {
                    metapress.loader && metapress.loader.finishedLoading && metapress.editor && window.postMessage({
                        type: "metapress.menubar.render"
                    }, "*")
                };
                $ai_getKnowledgeBaseEntries = () => [{
                    id: "core.ui.menubar:clickItem",
                    type: "action",
                    name: "Click sidebar button",
                    tags: "Click sidebar, Open sidebar, Open, Click",
                    content: `Triggers a click on a button in the sidebar, opening the corresponding panel.\n                Example: "core.ui.menubar:clickItem" with value "core.ui.settings.menu" will open the settings panel.\n                Existing buttons are: ${metapress.entities.all.filter((e=>"menubar.item"==e.type)).map((e=>e.id)).join(", ")}.\n            `,
                    action: e => {
                        let t = metapress.entities.get(e.value);
                        if (!t) throw new Error(`Item '${e.value}' not found`);
                        if ("menubar.item" != t.type) throw new Error(`Item '${e.value}' is not a menubar item`);
                        this.onMenuItemClicked(t)
                    }
                }]
            }
            class m {
                constructor(e) {
                    this.plugin = e
                }
                onLoad() {
                    metapress.plugins.sendEvent("menubar_iconsUpdated"), window.postMessage({
                        type: "metapress.menubar.updateIcons"
                    }, "*")
                }
                onEntityUpdated() {
                    if (metapress.plugins.sendEvent("menubar_iconsUpdated"), window.postMessage({
                            type: "metapress.menubar.updateIcons"
                        }, "*"), "core.audio.users:menubutton" === this.plugin.hoveringItem?.id) {
                        const e = metapress.entities.get("core.audio.users:menubutton").name;
                        this.plugin.tooltip.show(this.plugin.tooltip.x, this.plugin.tooltip.y, e)
                    }
                }
            }
            class u extends d.PureComponent {
                static div = null;
                static root = null;
                static show(e) {
                    this.div || (this.div = document.createElement("div"), this.div.setAttribute("id", "metapress-menubar-container"), document.getElementById("metapress-content").appendChild(this.div), this.root = c.createRoot(this.div), this.root.render(d.createElement(u, {
                        plugin: e
                    })))
                }
                static hide() {
                    this.div && (this.div.parentElement.removeChild(this.div), this.div = null, this.root.unmount(), this.root = null)
                }
                state = {
                    height: 100,
                    top: "50%",
                    arrowTop: "50%",
                    isPanelOpen: !1,
                    isHoldingShortcut: !1,
                    hasUnsaved: !1,
                    leftPos: 20,
                    addScrollButtons: !1,
                    isScrollingUp: !1,
                    isScrollingDown: !0,
                    screenHeight: window.innerHeight
                };
                menubarRef = null;
                menuItemPrefix = "menu-item-";
                itemSize = 44;
                items = [];
                _lastHeight = 100;
                _lastTop = "50%";
                _prevPanelID = null;
                _keyCache = {};
                get isShowing() {
                    return 20 === this.state.leftPos
                }
                componentDidMount() {
                    window.addEventListener("message", this.onMessage), window.addEventListener("resize", this.handleResize), window.addEventListener("keyup", this.onKeyUp), window.addEventListener("keydown", this.onKeyDown), window.addEventListener("blur", this.cancel), document.addEventListener("visibilitychange", this.cancel), document.addEventListener("pointerlockchange", this.cancel), metapress.plugins.addEventListener("menubar_fadeDisplay", this.fadeDisplay), this.updateIcons()
                }
                componentWillUnmount() {
                    window.removeEventListener("message", this.onMessage), window.removeEventListener("keyup", this.onKeyUp), window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("blur", this.cancel), window.removeEventListener("resize", this.handleResize), document.removeEventListener("visibilitychange", this.cancel), document.removeEventListener("pointerlockchange", this.cancel), metapress.plugins.removeEventListener("menubar_fadeDisplay", this.fadeDisplay)
                }
                fadeDisplay = e => {
                    if (!e) return;
                    const {
                        type: t
                    } = e;
                    if ("in" !== t)
                        if ("out" !== t);
                        else {
                            if (!this.isShowing) return;
                            this.setState({
                                leftPos: -55
                            })
                        }
                    else {
                        if (this.isShowing) return;
                        this.setState({
                            leftPos: 20
                        })
                    }
                };
                handleResize = () => {
                    window.innerHeight !== this.state.screenHeight && (this.setState({
                        screenHeight: window.innerHeight
                    }), setTimeout((() => {
                        this.updateIcons()
                    }), 100))
                };
                updateIcons() {
                    let e = metapress.entities.all.filter((e => "menubar.item" == e.type));
                    e.sort(((e, t) => (e.order || 0) - (t.order || 0)));
                    let t = this.itemSize * e.length,
                        i = e.length;
                    t > this.state.screenHeight - 200 ? (i = this.itemsCount(), t = i * this.itemSize > this.state.screenHeight - 200 ? this.state.screenHeight - 200 : i * this.itemSize, this.setState({
                        addScrollButtons: i != e.length
                    })) : this.setState({
                        addScrollButtons: !1
                    });
                    const n = `calc(50% - ${t/2}px)`;
                    this.items = e.length > 0 ? [...e] : [];
                    for (let e = 0; e < this.items.length; e++) this.items[e].id || (this.items[e].id = THREE.MathUtils.generateUUID());
                    t !== this._lastHeight || n !== this._lastTop ? (t !== this._lastHeight && (this._lastHeight = t), n !== this._lastTop && (this._lastTop = n), this.setState({
                        height: t,
                        top: n
                    }), i != e.length && this.reshuffleMenuItems()) : this.forceUpdate()
                }
                onMessage = e => {
                    if (!e?.data?.type) return;
                    const {
                        type: t
                    } = e.data;
                    "metapress.menubar.updateIcons" !== t ? "metapress.menubar.onPanelChange" !== t ? "metapress.menubar.render" !== t || setTimeout((() => this.setState({
                        hasUnsaved: metapress.editor.hasUnsavedChanges
                    })), 200) : this.onItemPanelChange() : this.updateIcons()
                };
                cancel = e => {
                    this.setState({
                        isHoldingShortcut: !1
                    })
                };
                onKeyUp = e => {
                    "Control" !== e.key && "Meta" !== e.key ? e.code && e.code.startsWith("Digit") && (this._keyCache[e.code] = !1) : this.setState({
                        isHoldingShortcut: !1
                    })
                };
                onKeyDown = e => {
                    if (!metapress.isOpen || "INPUT" === document.activeElement.tagName || "TEXTAREA" === document.activeElement.tagName) return;
                    (e.ctrlKey || e.metaKey || "Control" === e.key || "Meta" === e.key) && this.setState({
                        isHoldingShortcut: !0
                    });
                    const t = e.code?.startsWith?.("Digit") ? parseInt(e.code.slice(5)) : null;
                    null != t && t > 0 && t <= this.items.length && !this._keyCache[e.code] && (this._keyCache[e.code] = !0, this.onItemClick(this.items[t - 1]))
                };
                onItemPanelChange() {
                    if (this._prevPanelID === this.props.plugin.openPanelID) return void this.setState({
                        isPanelOpen: !!this.props.plugin.openPanelID
                    });
                    this._prevPanelID = this.props.plugin.openPanelID;
                    const e = [...this.menubarRef.children].findIndex((e => e.id === this.menuItemPrefix + this._prevPanelID));
                    e < 0 ? this.setState({
                        isPanelOpen: !1
                    }) : this.setState({
                        arrowTop: `calc(50% - ${this.itemSize*this.items.length/2}px + ${e*this.itemSize+11}px)`,
                        isPanelOpen: !!this._prevPanelID
                    })
                }
                onItemClick = e => {
                    this.props.plugin.onMenuItemClicked(e)
                };
                onItemHoverEnter = (e, t) => {
                    this.props.plugin.onMenuItemPointerOver(e, t)
                };
                onItemHoverLeave = (e, t) => {
                    this.props.plugin.onMenuItemPointerOut(e, t)
                };
                itemsCount = () => Math.floor((this.state.screenHeight - 200) / this.itemSize);
                onClickScrollerButton = (e, t) => {
                    const i = this.itemsCount() - 1;
                    if ("up" === e) {
                        const e = this.items.findIndex((e => e === t[0]));
                        this.itemToDisplay = e <= i ? this.items.slice(0, i) : this.items.slice(e - (i - 1), e)
                    } else {
                        const e = this.items.findIndex((e => e === t[t.length - 1])),
                            n = this.items.length - (e + 1);
                        if (n <= i)
                            if (n === i) this.itemToDisplay = this.items.slice(-n);
                            else {
                                const t = e - (i - n) + 1;
                                this.itemToDisplay = this.items.slice(t)
                            }
                        else this.itemToDisplay = this.items.slice(e + 1, e + i)
                    }
                    this.checkScrollBtnState(), this.forceUpdate()
                };
                checkScrollBtnState = () => {
                    const e = this.items.findIndex((e => e === this.itemToDisplay[0])),
                        t = this.items.findIndex((e => e === this.itemToDisplay[this.itemToDisplay.length - 1]));
                    0 === e && t === this.items.length - 1 ? this.setState({
                        isScrollingUp: !1,
                        isScrollingDown: !1
                    }) : 0 === e ? this.setState({
                        isScrollingUp: !1,
                        isScrollingDown: !0
                    }) : t === this.items.length - 1 ? this.setState({
                        isScrollingDown: !1,
                        isScrollingUp: !0
                    }) : this.setState({
                        isScrollingDown: !0,
                        isScrollingUp: !0
                    })
                };
                reshuffleMenuItems = () => {
                    if (this.state.addScrollButtons) {
                        const e = this.itemsCount() - 1;
                        if (this.state.isScrollingDown && !this.state.isScrollingUp) this.itemToDisplay = this.items.slice(0, e);
                        else if (this.state.isScrollingUp && !this.state.isScrollingDown) this.itemToDisplay = this.items.slice(-e);
                        else {
                            if (0 === this.itemToDisplay.length || 1 === e) return this.itemToDisplay = this.items.slice(0, e), void this.checkScrollBtnState();
                            const t = this.items.findIndex((e => e === this.itemToDisplay[0]));
                            if (t + e >= this.items.length - 1) this.itemToDisplay = this.items.slice(-e);
                            else {
                                const i = t + (e - 1);
                                this.itemToDisplay = this.items.slice(t, i)
                            }
                        }
                        this.checkScrollBtnState()
                    }
                };
                render() {
                    if (!this.itemToDisplay && this.state.addScrollButtons) {
                        const e = this.itemsCount() - 1;
                        this.itemToDisplay = this.items.slice(0, e)
                    }
                    return d.createElement(d.Fragment, null, d.createElement("div", {
                        ref: e => this.menubarRef = e,
                        id: "metapress-menubar",
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            position: "absolute",
                            width: this.itemSize,
                            height: this.state.height,
                            top: this.state.top,
                            left: this.state.leftPos,
                            backgroundColor: "#00233f",
                            borderRadius: 10,
                            boxShadow: `0 0.4rem 0 0 ${n.Z.colors.black}, 0 0 10px 0px rgba(0, 0, 0, 0.6)`,
                            cursor: "pointer",
                            overflow: "hidden",
                            transition: "left 0.35s ease",
                            zIndex: 10
                        }
                    }, this.state.addScrollButtons ? d.createElement(d.Fragment, null, this.state.isScrollingUp ? d.createElement(g, {
                        key: "up-btn",
                        id: "up-btn",
                        index: 0,
                        item: i(55588),
                        size: this.itemSize,
                        onClick: e => this.onClickScrollerButton("up", this.itemToDisplay),
                        onPointerEnter: e => this.onItemHoverEnter(i(55588), e),
                        onPointerLeave: e => this.onItemHoverLeave(i(55588), e)
                    }) : null, this.itemToDisplay.map(((e, t) => d.createElement(g, {
                        key: e.id,
                        id: this.menuItemPrefix + e.id,
                        index: this.items.findIndex((t => t === e)) + 1,
                        item: e,
                        size: this.itemSize,
                        showShortcut: this.state.isHoldingShortcut,
                        showUnsavedIcon: "core.ui.editor.menu" === e.id && this.state.hasUnsaved,
                        onClick: t => this.onItemClick(e),
                        onPointerEnter: t => this.onItemHoverEnter(e, t),
                        onPointerLeave: t => this.onItemHoverLeave(e, t)
                    }))), this.state.isScrollingDown ? d.createElement(g, {
                        key: "down-btn",
                        id: "down-btn",
                        index: this.itemToDisplay.length + 1,
                        item: i(30959),
                        size: this.itemSize,
                        onClick: e => this.onClickScrollerButton("down", this.itemToDisplay),
                        onPointerEnter: e => this.onItemHoverEnter(i(30959), e),
                        onPointerLeave: e => this.onItemHoverLeave(i(30959), e)
                    }) : null) : d.createElement(d.Fragment, null, this.items.map(((e, t) => d.createElement(g, {
                        key: e.id,
                        id: this.menuItemPrefix + e.id,
                        index: t + 1,
                        item: e,
                        size: this.itemSize,
                        showShortcut: this.state.isHoldingShortcut,
                        showUnsavedIcon: "core.ui.editor.menu" === e.id && this.state.hasUnsaved,
                        onClick: t => this.onItemClick(e),
                        onPointerEnter: t => this.onItemHoverEnter(e, t),
                        onPointerLeave: t => this.onItemHoverLeave(e, t)
                    }))))), this.state.isPanelOpen ? d.createElement("div", {
                        id: "metapress-menubar-arrow",
                        style: {
                            display: "flex",
                            position: "absolute",
                            top: this.state.arrowTop,
                            left: `${this.state.leftPos+this.itemSize}px`,
                            width: 0,
                            height: 0,
                            borderLeft: "10px solid #00233f",
                            borderRight: "10px solid transparent",
                            borderTop: "10px solid transparent",
                            borderBottom: "10px solid transparent",
                            transition: "all 0.2s ease"
                        }
                    }) : null)
                }
            }
            const g = e => {
                let t = d.useRef(null),
                    [n, s] = d.useState(!1),
                    [o, a] = d.useState(0),
                    [r, l] = d.useState(0);
                return d.createElement("div", {
                    ref: t,
                    id: e.id,
                    onClick: e.onClick,
                    onPointerEnter: i => (s(!0), a(-4), l(-1), void e.onPointerEnter?.(t.current)),
                    onPointerLeave: i => (s(!1), a(0), l(0), void e.onPointerLeave?.(t.current)),
                    style: {
                        display: "flex",
                        position: "relative",
                        width: e.size,
                        height: e.size,
                        backgroundColor: n ? "rgba(255, 255, 255, 0.1)" : "transparent",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, e.showShortcut ? d.createElement("div", {
                    style: {
                        display: "flex",
                        position: "absolute",
                        right: 3,
                        fontSize: 11,
                        fontFamily: "monospace",
                        color: "#9e9e9e",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, e.index) : null, e.showUnsavedIcon ? d.createElement("img", {
                    src: i(38765),
                    style: {
                        position: "absolute",
                        bottom: 12,
                        right: 8,
                        width: 12,
                        height: 12,
                        zIndex: 3
                    }
                }) : null, e.item?.icon ? d.createElement(d.Fragment, null, d.createElement("div", {
                    style: {
                        position: "absolute",
                        width: 20,
                        height: 20,
                        backgroundColor: "#161616",
                        maskImage: `url(${e.item.icon})`,
                        maskPosition: "center",
                        maskSize: 20,
                        maskRepeat: "no-repeat",
                        WebkitMaskImage: `url(${e.item.icon})`,
                        WebkitMaskPosition: "center",
                        WebkitMaskSize: 20,
                        WebkitMaskRepeat: "no-repeat"
                    }
                }), d.createElement("img", {
                    draggable: "false",
                    src: e.item.icon,
                    style: {
                        position: "relative",
                        top: o,
                        left: r,
                        width: 20,
                        height: 20,
                        transition: "all 0.1s ease"
                    }
                })) : d.createElement("img", {
                    draggable: "false",
                    src: e.item,
                    style: {
                        position: "relative",
                        top: o,
                        left: r,
                        width: 20,
                        height: 20,
                        transition: "all 0.1s ease"
                    }
                }))
            }
        },
        42321: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => o
            });
            var n = i(67294),
                s = i(32589);
            class o extends n.PureComponent {
                render() {
                    let e = metapress.plugins.callAll("getAvatarConfigurations").flat().filter((e => !!e));
                    e.sort(((e, t) => null != e.order ? null != t.order ? e.order - t.order : -1 : null != t.order ? null != e.order ? e.order - t.order : 1 : (e.avatar_name || "").localeCompare(t.avatar_name || "")));
                    let t = "-";
                    if (this.props.selectedId && "string" == typeof this.props.selectedId && this.props.selectedId.length > 0) t = this.props.selectedId;
                    else {
                        let e = metapress.profile.get("avatarConfig");
                        t = e?.avatar_id || "-"
                    }
                    return n.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }
                    }, n.createElement("div", {
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
                    }, n.createElement("img", {
                        draggable: "false",
                        src: i(12108),
                        onClick: e => this.props.setPage("main"),
                        style: {
                            width: 22,
                            height: 22,
                            margin: "0 20px",
                            cursor: "pointer"
                        }
                    }), n.createElement("div", {
                        style: {
                            fontSize: 15,
                            marginRight: 20,
                            flex: "1 1 1px"
                        }
                    }, "Select avatar")), n.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 45,
                            left: 0,
                            width: "100%",
                            height: "calc(100% - 45px)",
                            overflowX: "hidden",
                            overflowY: "auto"
                        }
                    }, n.createElement("div", {
                        style: {
                            display: "flex",
                            gap: "14px 8px",
                            flexWrap: "wrap",
                            marginTop: 14,
                            alignItems: "center",
                            justifyContent: "space-evenly"
                        }
                    }, e.map((e => n.createElement(a, {
                        key: e.avatar_id,
                        avatar: e,
                        selected: e.avatar_id === t,
                        onClick: t => this.props.onSelectAvatar ? this.props.onSelectAvatar(e) : this.onSelectAvatar(e)
                    })))), n.createElement(s.zx, {
                        title: "Voltar",
                        onClick: e => this.props.setPage("main")
                    })))
                }
                async onSelectAvatar(e) {
                    metapress.avatars.setConfigurationByID(e.avatar_id), metapress.menubar.closePanel()
                }
            }
            const a = e => {
                let [t, s] = n.useState(!1), [o, a] = n.useState(!1), r = n.useRef(null);
                const l = e.avatar.avatar_name || e.avatar.avatar_id || "(no name)",
                    h = i(78226),
                    d = e.avatar.avatar_image;
                return n.useEffect((() => {
                    a(r.current.offsetWidth < r.current.scrollWidth)
                }), []), n.createElement("div", {
                    onMouseEnter: e => s(!0),
                    onMouseLeave: e => s(!1),
                    onClick: e.onClick,
                    style: {
                        display: "flex",
                        flexDirection: "column",
                        position: "relative",
                        transform: t ? "scale(1.1)" : null,
                        transition: "all 0.2s ease",
                        alignItems: "center",
                        cursor: "pointer"
                    }
                }, e.selected ? n.createElement("div", {
                    style: {
                        position: "absolute",
                        top: 4,
                        right: 6,
                        width: 18,
                        height: 18,
                        backgroundColor: "#00bd28",
                        mask: `url(${h}) center / contain no-repeat`,
                        WebkitMask: `url(${h}) center / contain no-repeat`
                    }
                }) : null, null != d ? n.createElement("img", {
                    draggable: "false",
                    src: e.avatar.avatar_image,
                    style: {
                        width: 110,
                        height: 80,
                        borderRadius: "6px 6px 0 0"
                    }
                }) : n.createElement("div", {
                    style: {
                        display: "flex",
                        width: 110,
                        height: 80,
                        backgroundColor: "rgba(36, 33, 32, 0.4)",
                        borderRadius: "6px 6px 0 0",
                        justifyContent: "center",
                        alignItems: "center"
                    }
                }, n.createElement("img", {
                    draggable: "false",
                    src: i(95186),
                    style: {
                        width: "90%",
                        height: "90%"
                    }
                })), n.createElement("div", {
                    ref: r,
                    title: o ? l : null,
                    style: {
                        display: "block",
                        width: 110,
                        height: 23,
                        padding: "0 5px",
                        color: "white",
                        backgroundColor: "#202020",
                        fontSize: 13,
                        borderRadius: "0 0 6px 6px",
                        overflow: "hidden",
                        whiteSpace: "nowrap",
                        textOverflow: "ellipsis",
                        textAlign: "center",
                        boxSizing: "border-box"
                    }
                }, l))
            }
        },
        12108: (e, t, i) => {
            "use strict";
            e.exports = i.p + "mp-core/back.6840705508068eb1b067.svg"
        },
        78226: (e, t, i) => {
            "use strict";
            e.exports = i.p + "mp-core/icon-good.332ed59028d6225e5a04.svg"
        },
        38765: (e, t, i) => {
            "use strict";
            e.exports = i.p + "mp-core/icon-warning.45f9e38b9fdce56ced4d.svg"
        },
        30959: (e, t, i) => {
            "use strict";
            e.exports = i.p + "mp-core/arrow-down.94ccc6fa3c7667cb75f6.png"
        },
        55588: (e, t, i) => {
            "use strict";
            e.exports = i.p + "mp-core/arrow-up.2544457d03931fe75201.png"
        },
        95186: (e, t, i) => {
            "use strict";
            e.exports = i.p + "mp-core/avatar-default.18ad46433ff3942e17b8.svg"
        },
        22868: () => {},
        14777: () => {},
        99830: () => {},
        70209: () => {},
        87414: () => {},
        4147: e => {
            "use strict";
            e.exports = {
                i8: "VerseWeb 1.0 BETA"
            }
        }
    }
]);