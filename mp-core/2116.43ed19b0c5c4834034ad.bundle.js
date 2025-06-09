"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2116], {
        62116: (t, e, i) => {
            i.r(e), i.d(e, {
                default: () => p
            });
            const n = new class {
                isValid(t) {
                    try {
                        return new URL(t), !0
                    } catch (t) {
                        return !1
                    }
                }
            };
            var o = i(83674),
                s = i(60516),
                a = i(25108);
            class r {
                name = "Open Link";
                icon = i(44455);
                get settings() {
                    let t = [];
                    return t.push({
                        type: "description",
                        name: "Allows you to perform actions when clicking this object."
                    }, {
                        type: "select",
                        id: "content_type",
                        name: "Content Type",
                        placeholder: "url",
                        values: ["url", "post"],
                        labels: ["URL", "Post"],
                        help: "Type of Content to open when clicking the object"
                    }, {
                        type: "select",
                        id: "post_display_type",
                        name: "Display Type",
                        placeholder: "panel",
                        values: ["panel", "popup", "same-tab", "new-tab", "sidebar"],
                        labels: ["Open in panel", "Open in browser popup", "Open in same tab", "Open in new tab", "Open in sidebar"],
                        help: "Controls how the content will be displayed when the user clicks on the object."
                    }, {
                        type: "checkbox",
                        id: "distance_trigger",
                        name: "Trigger on Distance",
                        help: "When enabled, the click action will be triggered when the user is within the specified distance to the object."
                    }), this.entity.distance_trigger && (t = t.concat([{
                        type: "number",
                        id: "distance_value",
                        name: "Distance Value",
                        help: "The distance the user needs to be from the object in order to trigger its action. The default is 2 meters."
                    }])), t = this.entity.content_type && "url" != this.entity.content_type ? t.concat([{
                        type: "button",
                        id: "post",
                        name: "Select Post",
                        help: "Select the content to display in this slot.",
                        onClick: () => this.showContentPicker()
                    }, {
                        type: "text",
                        id: "contentSlot_source",
                        name: "Source ID",
                        placeholder: "any:0",
                        help: "Can either be a direct post ID or an offset in a list, ie 'posts:0' would return the first post etc."
                    }, {
                        type: "checkbox",
                        id: "disable_click",
                        name: "Disable Click Interaction",
                        help: "When enabled, the click action will not trigger the action."
                    }]) : t.concat([{
                        type: "text",
                        id: "link_url",
                        name: "URL",
                        help: "URL to open when clicking the object."
                    }]), t
                }
                onLoad() {
                    this.updateTimer = setInterval(this.checkDistance.bind(this), 1e3)
                }
                onUnload() {
                    this.updateTimer && clearInterval(this.updateTimer), this.updateTimer = null
                }
                showContentPicker() {
                    metapress.menubar.openReactPanel("site-content-picker", o.g, {
                        entityID: this.entity.id
                    })
                }
                getContent() {
                    if (!this.entity.content_type || "url" == this.entity.content_type) {
                        const t = this.entity.link_url ? this.entity.link_url.trim() : "";
                        return t.length < 1 ? void a.warn("[ActionScripterModifier] No URL provided.") : n.isValid(t) ? {
                            title: this.entity.name || "Link",
                            link: t
                        } : void a.warn("[ActionScripterModifier] Invalid URL provided.")
                    }
                    const t = metapress.siteContent.getItem(this.entity.contentSlot_source || "any:0");
                    if (t && t.link) return t
                }
                async onClick() {
                    this.entity.disable_click && this.entity.distance_trigger || await this.onAction()
                }
                async onAction(t) {
                    const e = this.getContent();
                    if (e?.link)
                        if (metapress.action_scripter.sendMessage({
                                source: "openlink",
                                entity: this.entity.id
                            }), "same-tab" == this.entity.post_display_type) metapress.close(), await new Promise((t => setTimeout(t, 500))), location.href = e.link;
                        else if ("new-tab" == this.entity.post_display_type) window.parent.open(e.link, "_blank");
                    else if ("popup" == this.entity.post_display_type) {
                        let t = 600,
                            i = 800,
                            n = window.screenLeft || window.screenX || 0,
                            o = window.screenTop || window.screenY || 0,
                            s = window.outerWidth || 1920,
                            a = window.outerHeight || 1080,
                            r = Math.max(n + s / 2 - t / 2, 0),
                            c = Math.max(o + a / 2 - i / 2, 0);
                        window.open(e.link, "_blank", `width=${t},height=${i},left=${r},top=${c},menubar=no,toolbar=no,location=no,personalbar=no,status=no`), metapress.input.movement.x = 0, metapress.input.movement.y = 0, metapress.input.devices.forEach((t => {
                            for (let e in t.activeKeys) t.activeKeys[e] = !1
                        }))
                    } else "sidebar" == this.entity.post_display_type ? metapress.menubar.openReactPanel("sidebar-iframe", s.T, {
                        item: e,
                        onClose: () => metapress.menubar.closePanel()
                    }) : (t && (this.popupOpen = !0), this.popup = metapress.dialogs.show({
                        title: e.title,
                        url: e.link,
                        width: Math.floor(.8 * window.innerWidth),
                        height: Math.floor(.8 * window.innerHeight)
                    }))
                }
                checkDistance() {
                    let t = this.entity.distance_value || 2;
                    if (!(this.entity.distance_trigger && this.entity && metapress.avatars && t)) return;
                    let e = new THREE.Vector3(metapress.avatars?.currentUserEntity.x || 0, metapress.avatars?.currentUserEntity.y || 0, metapress.avatars?.currentUserEntity.z || 0),
                        i = new THREE.Vector3(this.entity?.x, this.entity?.y, this.entity?.z);
                    e.distanceTo(i) <= t ? this.triggered || (this.triggered = !0, this.onAction(!0)) : (this.popup && this.popupOpen && (this.popup.close(), this.popup = null, this.popupOpen = !1), this.triggered = !1)
                }
            }
            var c = i(25108);
            class l {
                name = "Object Interaction";
                hidden = !0;
                get settings() {
                    return [{
                        type: "description",
                        name: "Used to execute the actions from the action scripter."
                    }]
                }
                entity = null;
                actionsTriggered = [];
                mixer = null;
                onLoad() {
                    this.updateTimer = setInterval(this.checkDistance.bind(this), 1e3), this.mixer = new THREE.AnimationMixer(this.renderer.object), this.triggeredActions = [], this.entity.entityActions?.forEach((t => {
                        "load" == t.trigger && this.onAction(t)
                    }))
                }
                onUnload() {
                    this.updateTimer && clearInterval(this.updateTimer), this.updateTimer = null
                }
                async onClick() {
                    this.entity.entityActions && this.entity.entityActions.length > 0 && this.entity.entityActions.forEach((t => {
                        "click" == t.trigger && this.onAction(t)
                    }))
                }
                async onAction(t, e) {
                    this.actionsTriggered.push(t), !e && t.synchronized && metapress.messaging.send("global", "actionscripter:action", {
                        action: t
                    }), 0 != t.actionLimit && null != t.actionLimit && this.actionsTriggered.filter((e => e.id == t.id))?.length > t.actionLimit || (metapress.action_scripter.sendMessage({
                        source: "actionscripter",
                        entity: this.entity.id,
                        action: t.action
                    }), "playsound" == t.action && this.playSound(t.fileURL, t.trigger), "playanimation" == t.action && this.playAnimation(t.animation, t.animationDuration), "showalert" != t.action && "showpanel" != t.action && "showsidebar" != t.action && "showpopup" != t.action || await this.openURL(t))
                }
                checkDistance() {
                    if (!this.entity.entityActions || this.entity.entityActions.length < 1) return;
                    let t = new THREE.Vector3(metapress.avatars?.currentUserEntity.x || 0, metapress.avatars?.currentUserEntity.y || 0, metapress.avatars?.currentUserEntity.z || 0),
                        e = new THREE.Vector3(this.entity?.x, this.entity?.y, this.entity?.z),
                        i = t.distanceTo(e);
                    this.entity.entityActions.forEach((t => {
                        let e = t.proximityRange ? parseInt(t.proximityRange) : 2;
                        "proximityenter" == t.trigger && (i <= e ? this.triggeredActions.find((e => e.id == t.id)) || (this.onAction(t), this.triggeredActions.push({
                            id: t.id
                        })) : (this.triggeredActions = this.triggeredActions.filter((e => e.id != t.id)), this.stopAudio())), i > e && (this.popup && "proximityenter" == this.popupTrigger && (this.popup.close(), this.popup = null, this.popupTrigger = null), "proximityenter" == this.alertTrigger && (metapress.dialogs.closeAll(), this.alertTrigger = null))
                    }))
                }
                playAnimation(t, e) {
                    if (t) {
                        if (this.entity?.["modifier:animator"] || metapress.entities.update(this.entity.id, {
                                "modifier:animator": !0
                            }), e = e ? 1e3 * parseInt(e) : 2e3, Date.now(), this.lastMoveTime, this.entity.lastAnimationTriggerDate) {
                            if (!(Date.now() - this.entity.lastAnimationTriggerDate > e)) return;
                            this.playCurrentAnimation(t)
                        } else this.playCurrentAnimation(t);
                        metapress.entities.update(this.entity.id, {
                            lastAnimationTriggerDate: Date.now()
                        }), setTimeout((() => {
                            this.action && (this.previousAnimation ? this.playCurrentAnimation(this.previousAnimation) : (this.action.stop(), this.action.enabled = !1, this.action = null, this.entity.animation_name = null))
                        }), e)
                    }
                }
                playSound(t, e) {
                    if (t) {
                        if (this.audio && (this.stopAudio(), this.lastURL == t && "click" == e && this.audio.duration > 8)) {
                            let t = 1e3 * this.audio.duration,
                                e = Date.now() - this.lastPlayDate;
                            if ("play" == this.lastAction && e < t) return this.lastAction = "stop", void(this.lastURL = null)
                        }
                        this.audio = new Audio(t), this.audio.play(), this.lastAction = "play", this.lastURL = t, this.lastPlayDate = Date.now()
                    }
                }
                stopAudio() {
                    this.audio && (this.audio.duration > 0 && !this.audio.paused && this.audio.pause(), this.audio.src = "")
                }
                playCurrentAnimation(t) {
                    let e = metapress.animation.getClip(t, this.renderer);
                    if (!e) return this["_notified_clipNotFound_" + t] || c.warn(`[MetaPress > Animator] Animation clip not found: ${t}`), void(this["_notified_clipNotFound_" + t] = !0);
                    this.previousAnimation = this.entity.animation_name;
                    let i = this.mixer.clipAction(e);
                    this.action = i, this.entity.animation_nonce = Date.now(), this.entity.animation_name = t, this.entity.animation_loop = !1
                }
                getContent(t) {
                    if (t) {
                        const e = t ? t.trim() : "";
                        return e.length < 1 ? void c.warn("[ObjectInteractionModifier] No URL provided.") : n.isValid(e) ? {
                            title: this.entity.name || "Link",
                            link: e
                        } : void c.warn("[ObjectInteractionModifier] Invalid URL provided.")
                    }
                }
                async openURL(t) {
                    const e = this.getContent(t.triggerText);
                    if (e?.link || "showalert" == t.action)
                        if ("showpopup" == t.action) {
                            let t = 600,
                                i = 800,
                                n = window.screenLeft || window.screenX || 0,
                                o = window.screenTop || window.screenY || 0,
                                s = window.outerWidth || 1920,
                                a = window.outerHeight || 1080,
                                r = Math.max(n + s / 2 - t / 2, 0),
                                c = Math.max(o + a / 2 - i / 2, 0);
                            window.open(e.link, "_blank", `width=${t},height=${i},left=${r},top=${c},menubar=no,toolbar=no,location=no,personalbar=no,status=no`), metapress.input.movement.x = 0, metapress.input.movement.y = 0, metapress.input.devices.forEach((t => {
                                for (let e in t.activeKeys) t.activeKeys[e] = !1
                            }))
                        } else "showsidebar" == t.action ? metapress.menubar.openReactPanel("sidebar-iframe", s.T, {
                            item: e,
                            onClose: () => metapress.menubar.closePanel()
                        }) : "showpanel" == t.action ? (this.popup && (this.popup.close(), this.popup = null, this.popupTrigger = null), this.popupTrigger = t.trigger, this.popup = await metapress.dialogs.show({
                            title: e.title,
                            url: e.link,
                            width: Math.floor(.8 * window.innerWidth),
                            height: Math.floor(.8 * window.innerHeight)
                        })) : "showalert" == t.action && (metapress.dialogs.closeAll(), this.alertTrigger = t.trigger, this.alert = await metapress.dialogs.alert({
                            icon: "info",
                            title: t.triggerTitle,
                            text: t.triggerText
                        }))
                }
                $onIncomingMessage(t) {
                    "actionscripter:action" == t.name && this.onAction(t.data.action, !0)
                }
                actionTrigger(t) {
                    this.onAction(t, !0)
                }
            }
            class p {
                id = "core.misc.action_scripter";
                name = "Open Link";
                description = "Allows the user perform actions when interacting with a object.";
                requires = ["entities"];
                provides = ["action_scripter", "modifier:action_scripter_click", "modifier:object_interaction"];
                createModifier(t) {
                    return "action_scripter_click" == t ? new r : "object_interaction" == t ? new l : void 0
                }
                sendMessage(t) {
                    metapress.plugins.sendEvent("actionScripter_onObjectAction", {
                        entity: t.entity,
                        action: t.action,
                        source: t.source
                    })
                }
                getObjects() {
                    return metapress.entities.all.filter((t => t.entityActions && t.entityActions?.length > 0))
                }
                getClosest(t) {
                    let e = this.getObjects(),
                        i = [],
                        n = [];
                    if (t)
                        if ("any" == t) i = e;
                        else
                            for (let n of e) {
                                let e = !1;
                                for (let i of n.entityActions) i.action == t && (e = !0);
                                e && i.push(n)
                            }
                    let o = new THREE.Vector3(metapress.avatars?.currentUserEntity.x || 0, metapress.avatars?.currentUserEntity.y || 0, metapress.avatars?.currentUserEntity.z || 0);
                    for (let t of i) {
                        let e = t,
                            i = new THREE.Vector3(t.x, t.y, t.z),
                            s = o.distanceTo(i);
                        e.distance = s, n.push(e)
                    }
                    return n.sort(((t, e) => t.distance - e.distance)), n[0]
                }
                triggerActions(t) {
                    let e = this.getObjects();
                    for (let i of e)
                        for (let e of i.entityActions) e.action == t && metapress.entities.getModifier(i.id, "object_interaction").actionTrigger(e)
                }
                triggerAction(t) {
                    let e = this.getClosest(t);
                    for (let i of e.entityActions) i.action == t && metapress.entities.getModifier(e.id, "object_interaction").actionTrigger(i)
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:info`,
                    type: "info",
                    name: "Action scripter",
                    tags: "action scripter, scripts, logic, perform automatic actions, automate, automation, click actions, object actions, object interaction",
                    content: '\n                The action scripter can be used to automate things within the world. For example, show a message when a user clicks an object or gets near an object, etc.\n                To use it, add the "Action Scripter" modifier to an object in the Editor and configure the actions you want to perform.\n            '
                }, {
                    id: `${this.id}:triggerActionsOfTypeOnClosest`,
                    type: "action",
                    name: "Action Scripter - Trigger specific closest action",
                    tags: "trigger playanimation, trigger playsound, trigger showpopup, trigger showalert",
                    content: "\n                Assistant instruction: Run this action with value 'playanimation' or 'playsound' or 'showpopup' or 'showalert' and when the user asks to trigger a type of action scripter actions.\n            ",
                    action: t => {
                        if (!t.value) throw new Error("Cannot send empty message.");
                        return this.triggerAction(t.value), "Triggered action"
                    }
                }, {
                    id: `${this.id}:triggerActionsOnClosest`,
                    type: "action",
                    name: "Action Scripter - Trigger any closest action",
                    tags: "trigger closest action, trigger closest action scripter action, play closest action, play closest action scripter action",
                    content: "\n                Assistant instruction: Run this action with value 'any' when the user asks for the closest object to trigger the action scripter actions.\n            ",
                    action: t => {
                        if (!t.value) throw new Error("Cannot send empty message.");
                        return this.triggerAction(t.value), "Triggered action"
                    }
                }, {
                    id: `${this.id}:getObjectActionScripterList`,
                    type: "action",
                    name: "Action Scripter - Specific object actions list",
                    tags: "object animate, get object actions, get object actions list, get object action scripter actions list",
                    content: `\n                To retrieve the list of actions that can be performed on a specific object, run the KB action '${this.id}:getObjectActionScripterList' with the value as the object name.\n\n                Available objects: ${this.getObjects().map((t=>`- ${t.name}`)).join("\n")}\n            `,
                    action: t => {
                        if (!t.value) throw new Error("Cannot send empty message.");
                        for (let e of this.getObjects())
                            if (e?.name?.includes(t.value) && e.entityActions.length > 0) return `The object plays ${e.entityActions.map((t=>`${t.action} ${t.triggerLabel}`)).join(", ")}.`;
                        return "No Action Scripter actions found for the object."
                    }
                }, {
                    id: `${this.id}:triggerActionOnObject`,
                    type: "action",
                    name: "Action Scripter - Trigger specific object action",
                    tags: "trigger object, trigger object action, click object, play sound, trigger object action scripter action, start object",
                    content: `\n                Assistant instruction: Run this action when the user asks to animate a specific object that has Action scripter actions. \n                Run the KB action '${this.id}:triggerActionOnObject' with the value as the object name.\n                Available objects: ${this.getObjects().map((t=>`- ${t.name}`)).join("\n")}\n            `,
                    action: t => {
                        if (!t.value) throw new Error("Cannot send empty message.");
                        for (let e of this.getObjects())
                            if (e?.name?.includes(t.value) && e.entityActions.length > 0) {
                                let t = metapress.entities.getModifier(e.id, "object_interaction");
                                for (let i of e.entityActions) t.actionTrigger(i);
                                return `Triggered the object action: ${e.name}`
                            } return "No Action Scripter actions found for the object."
                    }
                }]
            }
        },
        44455: (t, e, i) => {
            t.exports = i.p + "mp-core/action.091e0874ceb265e38c22.svg"
        }
    }
]);