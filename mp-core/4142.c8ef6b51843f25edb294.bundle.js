"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [4142], {
        84142: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => r
            });
            class r {
                id = "core.render.raycast";
                name = "Raycasting";
                description = "Allows for raycasting within the scene.";
                version = "1.0.0";
                provides = ["raycast"];
                requires = ["renderer", "entities"];
                onLoad() {
                    this.raycaster = new THREE.Raycaster, this.raycaster.near = .2, this.v2a = new THREE.Vector2
                }
                get clickableObjects() {
                    if (this._clickableObjects && Date.now() - this._clickableObjectsLastUpdate < 1e3) return this._clickableObjects;
                    this._clickableObjects = [];
                    for (let e of metapress.entities.renderers) e.object && e.onClick && (this._clickableObjects.includes(e.object) || this._clickableObjects.push(e.object));
                    for (let e of metapress.entities.modifiers) e.renderer?.object && e.onClick && (this._clickableObjects.includes(e.renderer.object) || this._clickableObjects.push(e.renderer.object));
                    return this._clickableObjectsLastUpdate = Date.now(), this._clickableObjects
                }
                get physicalObjects() {
                    if (this._physicalObjects && Date.now() - this._physicalObjectsLastUpdate < 1e3) return this._physicalObjects;
                    this._physicalObjects = [];
                    let e = metapress.camera?.isFirstPerson || metapress.vr?.isActive,
                        t = metapress.camera.attachedEntityRenderer?.container,
                        s = (e, t) => {
                            if (!1 !== t(e))
                                for (let r = 0; r < e.children.length; r++) s(e.children[r], t)
                        };
                    return s(metapress.renderer.scene, (s => !1 !== s.isPhysicalObject && !1 !== s.entityRenderer?.entity?.physical && (!e || s != t) && (!s.geometry || void(this._physicalObjects.includes(s) || this._physicalObjects.push(s))))), this._physicalObjectsLastUpdate = Date.now(), this._physicalObjects
                }
                atScreenCoordinates(e, t, s = 1 / 0, r = null, i = !1, c = !1) {
                    let a = metapress.renderer.canvas.getBoundingClientRect();
                    this.v2a.x = (e - a.left) / a.width * 2 - 1, this.v2a.y = -(t - a.top) / a.height * 2 + 1, this.raycaster.setFromCamera(this.v2a, metapress.renderer.camera), this.raycaster.far = s;
                    let n = this.raycaster.intersectObjects(r || this.physicalObjects, i);
                    if (!c)
                        for (let e = 0; e < n.length; e++)
                            if (n[e].entityRenderer = metapress.entities.rendererFromObject3D(n[e].object), n[e].entity = n[e].entityRenderer?.entity, n[e].entity) return n[e];
                    for (let e = 0; e < n.length; e++) n[e].entityRenderer = metapress.entities.rendererFromObject3D(n[e].object), n[e].entity = n[e].entityRenderer?.entity, n[e].entity || (n.splice(e, 1), e--);
                    return n
                }
                clickableAtScreenCoordinates(e, t, s = 1 / 0) {
                    return this.atScreenCoordinates(e, t, s, this.clickableObjects, !0)
                }
            }
        }
    }
]);