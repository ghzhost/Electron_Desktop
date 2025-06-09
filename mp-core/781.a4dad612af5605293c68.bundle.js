"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [781], {
        10781: (e, s, t) => {
            t.r(s), t.d(s, {
                default: () => r
            });
            var n = t(91310),
                i = t(25108);
            class r {
                id = "core.networking.mqtt";
                name = "MQTT";
                description = "Provides networking and peer discovery via MQTT.";
                version = "1.0.0";
                requires = ["backend"];
                provides = ["mqtt"];
                client = null;
                queued = !0;
                queuedUsers = [];
                queueStartDate = Date.now();
                isConnected = !1;
                get queuePosition() {
                    let e = this.queuedUsers.findIndex((e => e.instanceID == metapress.instanceID));
                    return -1 == e ? -1 : e - Math.max(1, parseInt(this.config.maxUsers) || 10)
                }
                async onLoad() {
                    if (this.config.disabled) throw {
                        message: "MQTT networking is disabled in the config.",
                        cancelled: !0
                    };
                    let e = this.config.address;
                    if (!e) try {
                        e = (await fetch(`${metapress.backend.apiURL}/mqtt/address`).then((e => e.json()))).address
                    } catch (s) {
                        i.warn(`[MQTT] Unable to determine default server address, using fallback... ${s.message}`), e = "wss://guest:MetaPress1Pwd@ze37deee.ala.us-east-1.emqxsl.com:8084/mqtt"
                    }
                    let s = Object.assign({}, this.config.clientOptions, {
                        will: {
                            payload: "",
                            topic: `metapress/world/${metapress.worldID}/user/${metapress.instanceID}/presence`,
                            retain: !0
                        },
                        clientId: `metapress_${metapress.instanceID}`
                    });
                    this.client = n.Z.connect(e, s), this.client.on("connect", (() => this.onMQTTConnect())), this.client.on("error", (e => i.warn(`[MQTT] Error connecting to MQTT server: ${e.message}`))), this.client.on("offline", (() => this.onMQTTDisconnect())), this.client.on("message", ((e, s) => this.onIncomingMsg(e, s))), await this.client.subscribe([`metapress/world/${metapress.worldID}/global/messages`, `metapress/world/${metapress.worldID}/user/${metapress.instanceID}/messages`, `metapress/world/${metapress.worldID}/user/+/presence`])
                }
                onMQTTConnect() {
                    i.debug("[MQTT] Connected to MQTT server."), this.queued = !0, this.connectionDate = Date.now(), this.isConnected = !0, this.client.publish(`metapress/world/${metapress.worldID}/user/${metapress.instanceID}/presence`, JSON.stringify({
                        date: this.queueStartDate
                    }), {
                        retain: !0
                    }), this.checkQueue(), metapress.plugins.sendEvent("mqtt_onConnect"), metapress.plugins.sendEvent("mqtt_onStatusUpdated")
                }
                onMQTTDisconnect() {
                    i.warn("[MQTT] Client has gone offline."), this.queued = !0, this.queuedUsers = [], this.isConnected = !1, this.checkQueue(), metapress.plugins.sendEvent("mqtt_onDisconnect"), metapress.plugins.sendEvent("mqtt_onStatusUpdated")
                }
                async checkQueue() {
                    if (!this._queueChecking) {
                        this._queueChecking = !0;
                        try {
                            await this._checkQueue()
                        } catch (e) {
                            i.warn("[MQTT] Error checking the entry queue!", e)
                        } finally {
                            this._queueChecking = !1
                        }
                    }
                }
                async _checkQueue() {
                    this.queued = !0;
                    let e = Math.max(1, parseInt(this.config.maxUsers) || 10);
                    for (;;) {
                        if (await new Promise((e => setTimeout(e, 1e3))), !this.client.connected) continue;
                        if (metapress.editor?.canEdit) {
                            i.debug("[MQTT] User is an admin, skipping queue check...");
                            break
                        }
                        let s = this.queuedUsers.findIndex((e => e.instanceID == metapress.instanceID));
                        if (-1 != s && !(s >= e + 1)) break
                    }
                    i.debug("[MQTT] Queue entry complete"), this.queued = !1, metapress.plugins.sendEvent("mqtt_onQueueComplete"), metapress.plugins.sendEvent("mqtt_onStatusUpdated")
                }
                $onOutgoingMessage(e) {
                    if (this.queued || !this.client.connected) return;
                    e.from = metapress.instanceID;
                    let s = `metapress/world/${metapress.worldID}/global/messages`;
                    "global" != e.target && (s = `metapress/world/${metapress.worldID}/user/${e.target}/messages`), this.client.publish(s, JSON.stringify(e))
                }
                onIncomingMsg(e, s) {
                    try {
                        e.endsWith("/presence") ? this.onIncomingPresenceMsg(e, s) : e.endsWith("/messages") && this.onIncomingAppMsg(e, s)
                    } catch (e) {
                        i.warn(`[MQTT] Invalid message received: ${e.message}`)
                    }
                }
                onIncomingPresenceMsg(e, s) {
                    this._presenceEventTimer || (this._presenceEventTimer = setTimeout((() => {
                        metapress.plugins.sendEvent("mqtt_onStatusUpdated"), this._presenceEventTimer = null
                    }), 500));
                    let t = e.split("/")[4],
                        n = s.toString();
                    if (!n) return this.queuedUsers = this.queuedUsers.filter((e => e.instanceID != t)), void(this.queued && i.debug(`[MQTT] Queue user removed, size: ${this.queuedUsers.length}`));
                    let r = JSON.parse(n);
                    r.instanceID = t;
                    let a = this.queuedUsers.find((e => e.instanceID == t));
                    a ? (Object.assign(a, r), this.queued && i.debug(`[MQTT] Queue user updated, size: ${this.queuedUsers.length}`)) : (this.queuedUsers.push(r), this.queued && i.debug(`[MQTT] Queue user added, size: ${this.queuedUsers.length}`)), this.queuedUsers.sort(((e, s) => e.date - s.date))
                }
                onIncomingAppMsg(e, s) {
                    if (this.queued) return;
                    let t = JSON.parse(s.toString());
                    t.from != metapress.instanceID && metapress.messaging.handleIncomingMessage(t)
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:info`,
                    type: "info",
                    name: "MQTT",
                    tags: "mqtt protocol, networking, pubsub, messaging",
                    content: "\n                MQTT is a protocol used my MetaPress to discover and connect to other users in the world. Once connected, communication is done between users via peer-to-peer WebRTC connections.\n            "
                }]
            }
        }
    }
]);