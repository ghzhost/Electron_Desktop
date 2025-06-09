"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [3301], {
        13301: (e, t, r) => {
            r.r(t), r.d(t, {
                default: () => s
            });
            var i = r(28721),
                n = r(55293),
                d = r(25108);
            class s extends EventTarget {
                id = "core.render.entities";
                name = "Entity Manager";
                description = "Manages entities. An entity is any visible thing in the 3D environment.";
                version = "1.0.0";
                provides = ["entities"];
                requires = ["renderer"];
                all = [];
                renderers = [];
                modifiers = [];
                onLoad() {
                    for (let e of metapress.config.template?.entities || []) this.add(e);
                    this.entityTimer = setInterval((() => this.checkAllEntities()), 250)
                }
                add(e) {
                    if (e.id || (e.id = (0, i.Z)()), e.type || (e.type = "group"), delete e._lastCheckComplete, delete e._deleted, this.all.find((t => t.id == e.id))) throw new Error(`An entity with ID '${e.id}' already exists.`);
                    return e.lastModified = Date.now(), e.lastEdited = Date.now(), this.all.push(e), metapress.plugins.sendEvent("onEntitiesUpdated"), "template" == e.sync && metapress.plugins.sendEvent("onUnsavedFieldsChanged"), e
                }
                create(e) {
                    return this.add(e)
                }
                get(e) {
                    return this.all.find((t => t.id == e))
                }
                update(e, t) {
                    let r = this.all.find((t => t.id == e));
                    if (!r) throw new Error(`Entity with id '${e}' was not found.`);
                    if (t.id && t.id == r.id && delete t.id, t.id) throw new Error("You cannot modify the 'id' field.");
                    if (t.type && t.type == r.type && delete t.type, t.type) throw new Error("You cannot modify the 'type' field.");
                    delete t._lastCheckComplete, delete t._deleted, Object.assign(r, t), r.lastModified = Date.now(), metapress.plugins.sendEvent("onEntitiesUpdated"), "template" == r.sync && metapress.plugins.sendEvent("onUnsavedFieldsChanged")
                }
                remove(e) {
                    let t = this.all.findIndex((t => t.id == e));
                    if (-1 == t) return;
                    let r = this.all[t];
                    "template" == r.sync && metapress.plugins.sendEvent("onUnsavedFieldsChanged"), metapress.editor?.selectionManager && metapress.editor.selectionManager.isSelected(e) && metapress.editor.selectionManager.deselectOnly(e), this.all.splice(t, 1), r._deleted = !0, metapress.plugins.sendEvent("onEntityRemoved", {
                        entity: r
                    }), metapress.plugins.sendEvent("onEntitiesUpdated")
                }
                delete(e) {
                    return this.remove(e)
                }
                getRenderer(e, t) {
                    let r = this.renderers.find((t => t.entity.id == e));
                    return r && (t || r._loaded) ? r : null
                }
                getModifiers(e) {
                    return this.modifiers.filter((t => t.entity?.id == e))
                }
                getModifier(e, t) {
                    return this.modifiers.find((r => r.entity?.id == e && r.id == t))
                }
                $onPluginLoad(e) {
                    this.renderers = this.renderers.filter((e => !e._dummy)), this.modifiers = this.modifiers.filter((e => !e._dummy))
                }
                checkAllEntities() {
                    if (metapress.plugins.allLoaded) {
                        for (let e = 0; e < this.all.length; e++) {
                            let t = this.all[e],
                                r = this.getOrCreateRenderer(t);
                            if (!r || !r._loaded || r._loadError) continue;
                            if (r._entityLastModified != t.lastModified) {
                                r._entityLastModified = t.lastModified;
                                try {
                                    r.onEntityUpdated?.()
                                } catch (e) {
                                    d.warn("[MetaPress > EntityManager] Error in onEntityUpdated:", e)
                                }
                            }
                            if (r._entityLastEdited != t.lastEdited) {
                                r._entityLastEdited = t.lastEdited;
                                try {
                                    r.onEntityEdited?.()
                                } catch (e) {
                                    d.warn("[MetaPress > EntityManager] Error in onEntityEdited:", e)
                                }
                            }
                            let i = !0;
                            for (let e in t) {
                                if (!e.startsWith("modifier:")) continue;
                                if (!t[e]) continue;
                                let n = this.getOrCreateModifier(t, r, e.substring(9));
                                if (n && n._loaded && !n._loadError) {
                                    if (n._entityLastModified != t.lastModified) {
                                        n._entityLastModified = t.lastModified;
                                        try {
                                            n.onEntityUpdated?.()
                                        } catch (e) {
                                            d.warn("[MetaPress > EntityManager] Error in onEntityUpdated:", e)
                                        }
                                    }
                                    if (n._entityLastEdited != t.lastEdited) {
                                        n._entityLastEdited = t.lastEdited;
                                        try {
                                            n.onEntityEdited?.()
                                        } catch (e) {
                                            d.warn("[MetaPress > EntityManager] Error in onEntityEdited:", e)
                                        }
                                    }
                                } else n._loaded || (i = !1)
                            }
                            i && !r._hasSentLoadedEvent && (r._hasSentLoadedEvent = !0, metapress.plugins.sendEvent("onEntityLoaded", {
                                id: t.id,
                                renderer: r
                            }))
                        }
                        for (let e = 0; e < this.modifiers.length; e++) {
                            let t = this.modifiers[e];
                            if (!t._loaded) continue;
                            let r = !this.all.includes(t.entity);
                            r = r || !t.entity["modifier:" + t.id], r = r || t._wantsUnload, r && (this.modifiers.splice(e--, 1), t.entity._lastCheckDate = 0, Promise.resolve().then((() => t.beforeUnload?.())).then((() => t.onUnload?.())).then((() => t.afterUnload?.())).catch((e => {
                                d.warn(`[MetaPress] Error unloading modifier '${t.id}' for '${t.entity.id}': `, e)
                            })))
                        }
                        for (let e = 0; e < this.renderers.length; e++) {
                            let t = this.renderers[e];
                            if (!t._loaded) continue;
                            let r = !this.all.includes(t.entity);
                            r = r || t._wantsUnload, r && (this.renderers.splice(e--, 1), t.entity._lastCheckDate = 0, Promise.resolve().then((() => t.beforeUnload?.())).then((() => t.onUnload?.())).then((() => t.afterUnload?.())).catch((e => {
                                d.warn(`[MetaPress] Error unloading renderer for '${t.entity.id}':`, e)
                            })))
                        }
                    }
                }
                getOrCreateRenderer(e) {
                    let t = this.renderers.find((t => t.entity == e));
                    if (t) return t;
                    let r = metapress["render:" + e.type];
                    if (!r) return t = {
                        entity: e,
                        _loaded: !0,
                        _loadError: !0,
                        _dummy: !0
                    }, this.renderers.push(t), t;
                    if (r._state == n.BV.Waiting || r._state == n.BV.Loading) return null;
                    try {
                        if (t = r.createRenderer?.(e.type), !t) throw !1
                    } catch (r) {
                        return !1 !== r && d.warn(`[MetaPress > EntityManager] Error creating '${e.type}' renderer`, r), t = {
                            entity: e,
                            _loaded: !0,
                            _loadError: !0,
                            _dummy: !0
                        }, this.renderers.push(t), t
                    }
                    return t.entity = e, t._loaded = !1, t._entityLastModified = e.lastModified, t._entityLastEdited = e.lastEdited, this.renderers.push(t), this.renderers.sort(((e, t) => (e.priority || 0) - (t.priority || 0))), Promise.resolve().then((() => t.beforeLoad?.())).then((() => t.onLoad?.())).then((() => metapress.plugins.callAllAsync("onEntityRendererLoad", t))).then((() => t.afterLoad?.())).then((() => t._loaded = !0)).catch((r => {
                        d.warn(`[MetaPress] Unable to load renderer for '${e.id}':`, r), t._loaded = !0, t._loadError = !0, metapress.plugins.sendEvent("entity_loadFailed", {
                            entity: e,
                            renderer: t,
                            error: r
                        })
                    })), t
                }
                getOrCreateModifier(e, t, r) {
                    let i = this.getModifier(e.id, r);
                    if (i) return i;
                    let s = metapress["modifier:" + r];
                    if (!s) return i = {
                        entity: e,
                        id: r,
                        _loaded: !0,
                        _loadError: !0,
                        _dummy: !0
                    }, this.modifiers.push(i), i;
                    if (s._state == n.BV.Waiting || s._state == n.BV.Loading) return null;
                    try {
                        if (i = s.createModifier?.(r), !i) throw !1
                    } catch (t) {
                        return !1 !== t && d.warn(`[MetaPress > EntityManager] Error creating '${e.type}' modifier`, t), i = {
                            entity: e,
                            id: r,
                            _loaded: !0,
                            _loadError: !0,
                            _dummy: !0
                        }, this.modifiers.push(i), i
                    }
                    return i.id = r, i.entity = e, i.renderer = t, i._loaded = !1, i._entityLastModified = e.lastModified, i._entityLastEdited = e.lastEdited, this.modifiers.push(i), this.modifiers.sort(((e, t) => (e.priority || 0) - (t.priority || 0))), Promise.resolve().then((() => i.beforeLoad?.())).then((() => i.onLoad?.())).then((() => metapress.plugins.callAllAsync("onEntityModifierLoad", i))).then((() => i.afterLoad?.())).then((() => i._loaded = !0)).catch((t => {
                        d.warn(`[MetaPress] Unable to load modifier '${r}' for '${e.id}':`, t), i._loaded = !0, i._loadError = !0, metapress.plugins.sendEvent("entity_loadFailed", {
                            entity: e,
                            modifier: i,
                            error: t
                        })
                    })), i
                }
                $beforeRender() {
                    for (let e of this.renderers) e.beforeRender && e._loaded && !e._loadError && e.beforeRender();
                    for (let e of this.modifiers) e.beforeRender && e._loaded && !e._loadError && e.beforeRender()
                }
                $onRender() {
                    for (let e of this.renderers) e.onRender && e._loaded && !e._loadError && e.onRender();
                    for (let e of this.modifiers) e.onRender && e._loaded && !e._loadError && e.onRender()
                }
                $afterRender() {
                    for (let e of this.renderers) e.afterRender && e._loaded && !e._loadError && e.afterRender();
                    for (let e of this.modifiers) e.afterRender && e._loaded && !e._loadError && e.afterRender()
                }
                rendererFromObject3D(e) {
                    let t = e;
                    for (; t && !t.entityRenderer;) t = t.parent;
                    return t?.entityRenderer
                }
                isClickable(e) {
                    return !!this.getRenderer(e).onClick || !!metapress.entities.getModifiers(e).find((e => e.onClick))
                }
                doClick(e, t) {
                    let r = metapress.entities.getRenderer(e)?.onClick?.(t);
                    for (let i of metapress.entities.getModifiers(e)) {
                        let e = i.onClick?.(t);
                        r = r || e
                    }
                    return r
                }
                reload(e) {
                    for (let t of this.renderers) t.entity.id == e && (t._wantsUnload = !0);
                    for (let t of this.modifiers) t.entity.id == e && (t._wantsUnload = !0)
                }
                $_onInternalEvent(e, t, r) {
                    t = "$" + t;
                    let i = e == n.mc.All || e == n.mc.AllAsync ? [] : null;
                    for (let d of this.renderers) {
                        if (!d[t]) continue;
                        let s = e == n.mc.AllAsync ? Promise.resolve().then((() => d[t]?.apply(d, r))) : d[t]?.apply(d, r);
                        if (null == s);
                        else if (e == n.mc.All || e == n.mc.AllAsync) i.push(s);
                        else if (e == n.mc.First) return s
                    }
                    for (let d of this.modifiers) {
                        if (!d[t]) continue;
                        let s = e == n.mc.AllAsync ? Promise.resolve().then((() => d[t]?.apply(d, r))) : d[t]?.apply(d, r);
                        if (null == s);
                        else if (e == n.mc.All || e == n.mc.AllAsync) i.push(s);
                        else if (e == n.mc.First) return s
                    }
                    return i
                }
                didSettingsChange(e, t) {
                    let r = e.entity;
                    if (!r) return !1;
                    if (!t) {
                        let i = e.settings;
                        if ("function" == typeof i) try {
                            i = i(r)
                        } catch (t) {
                            return d.warn(`[EntityManager] Error getting renderer/modifier settings for ${e.id}`, t), !1
                        }
                        t = i?.map((e => e.id))?.filter((e => !!e)) || []
                    }
                    e.__lastEntityState || (e.__lastEntityState = {});
                    let i = !1;
                    for (let n of t) r[n] !== e.__lastEntityState[n] && (i = !0, e.__lastEntityState[n] = r[n]);
                    return i
                }
            }
        }
    }
]);