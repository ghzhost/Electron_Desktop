"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [4148], {
        94148: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => a
            });
            class a {
                id = "core.nametags";
                name = "Nametags";
                description = "Renders a nametag above user heads.";
                version = "1.0.0";
                requires = ["renderer", "raycast", "avatars", "profile"];
                provides = ["nametags"];
                onLoad() {
                    document.addEventListener("mousemove", this.onMouseUpdate.bind(this), !1), document.addEventListener("mouseenter", this.onMouseUpdate.bind(this), !1), this.positionTimer = setInterval(this.updatePosition.bind(this), 500), this.v3d = new THREE.Vector3
                }
                onUnload() {
                    document.removeEventListener("mousemove", this.onMouseUpdate), document.removeEventListener("mouseenter", this.onMouseUpdate), clearInterval(this.updatePosition)
                }
                async create(e, t, a, n) {
                    if (this.hoverOwner == n || this.creatingNametag) return;
                    this.creatingNametag = !0;
                    let i = "     " + e + " ";
                    this.showingCanvas && metapress.contentDiv.removeChild(this.showingCanvas), this.showingCanvas = null;
                    let r = document.getElementsByClassName("usernametag");
                    for (let e of r) metapress.contentDiv.removeChild(e);
                    let o = document.createElement("canvas"),
                        h = o.getContext("2d");
                    h.textAlign = "left", h.font = "50 24px sans-serif", o.width = h.measureText(i).width, e.length < 5 && (i = " " + i + " ", o.width *= 1.2), o.style.width = o.width + "px", o.height = 32, o.style.height = o.height + "px", o.style.position = "absolute", o.style.zIndex = 999, o.style.top = a - 2 * o.height + "px", o.style.left = t - o.width / 2 + "px", o.style.borderRadius = "50px", o.className = "usernametag", h.font = "50 8px sans-serif", h.scale(2, 2), h.fillStyle = "white", h.fillText(i, o.width / 10, 11), h.globalAlpha = .8, h.globalCompositeOperation = "destination-over", h.fillStyle = "black", h.fillRect(0, 0, o.width, o.height);
                    let l = await new Promise(((e, t) => {
                        let a = new Image;
                        a.src = s(69003), a.onload = () => e(a), a.onerror = () => t(new Error("unable to load image."))
                    }));
                    h.globalAlpha = 1, h.globalCompositeOperation = "source-over", h.fillStyle = "white", h.drawImage(l, 5, 2, 12, 12), this.hoverOwner = n, this.hoverUserName = e, this.showingCanvas = o, metapress.contentDiv.appendChild(o), this.creatingNametag = !1
                }
                updateCanvas(e, t, s) {
                    let a = e.style.top.substring(0, e.style.top.length - 2),
                        n = e.style.left.substring(0, e.style.left.length - 2),
                        i = s - 2 * e.height,
                        r = t - e.width / 2,
                        o = parseFloat(i) - parseFloat(a),
                        h = parseFloat(r) - parseFloat(n);
                    e.style.transform = `translate(${h}px,${o}px)`
                }
                async doHoveringCheck() {
                    let e = null,
                        t = null;
                    if (t = document.pointerLockElement ? metapress.raycast.atScreenCoordinates(metapress.renderer.canvasRect.width / 2, metapress.renderer.canvasRect.height / 2) : metapress.raycast.atScreenCoordinates(this.mouseX, this.mouseY), t?.entityRenderer) {
                        if (e = t?.entityRenderer?.entity?.owner, e) {
                            let t = this.getUserName(e),
                                s = this.toScreenPosition(e);
                            t && s && this.create(t, s.x, s.y, e)
                        } else {
                            this.showingCanvas && metapress.contentDiv.removeChild(this.showingCanvas), this.showingCanvas = null, this.hoverOwner = null;
                            let e = document.getElementsByClassName("usernametag");
                            for (let t of e) metapress.contentDiv.removeChild(t)
                        }
                        this.hoveringTimer = null
                    } else {
                        this.checkingHover = !1, this.showingCanvas && metapress.contentDiv.removeChild(this.showingCanvas), this.showingCanvas = null, this.hoveringTimer = null, this.hoverOwner = null;
                        let e = document.getElementsByClassName("usernametag");
                        for (let t of e) metapress.contentDiv.removeChild(t)
                    }
                }
                onMouseUpdate(e) {
                    this.hoveringTimer || (this.hoveringTimer = setTimeout((() => this.doHoveringCheck()), 250)), document.pointerLockElement ? (this.mouseX = metapress.renderer.canvasRect.width / 2 + metapress.renderer.canvasRect.left, this.mouseY = metapress.renderer.canvasRect.height / 2 + metapress.renderer.canvasRect.top) : (this.mouseX = e.pageX, this.mouseY = e.pageY)
                }
                getUserName(e) {
                    return metapress.avatars.users.find((t => t.instanceID == e))?.name
                }
                toScreenPosition(e) {
                    let t = metapress.avatars.users.find((t => t.instanceID == e));
                    this.v3d || (this.v3d = new THREE.Vector3);
                    let s = metapress.renderer.canvas;
                    if (!t?.avatarEntity) return null;
                    let a = t.avatarEntity.x,
                        n = t.avatarEntity.y + t.avatarEntity.avatar_height,
                        i = t.avatarEntity.z;
                    return this.v3d.set(a, n, i), this.v3d.project(metapress.renderer.camera), this.v3d.x = Math.round((this.v3d.x + 1) * s.width / 2), this.v3d.y = Math.round((1 - this.v3d.y) * s.height / 2), {
                        x: this.v3d.x,
                        y: this.v3d.y
                    }
                }
                updatePosition() {
                    if (this.showingCanvas && this.hoverOwner && this.hoverUserName) {
                        let e = this.toScreenPosition(this.hoverOwner);
                        e && this.updateCanvas(this.showingCanvas, e.x, e.y)
                    }
                }
            }
        },
        69003: (e, t, s) => {
            e.exports = s.p + "mp-core/avatar-default.18641ec0b2a9915caf50.svg"
        }
    }
]);