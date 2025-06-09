(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [510], {
        21611: (e, t, n) => {
            "use strict";
            n.d(t, {
                Z: () => l,
                a: () => c
            });
            var i = n(38853),
                s = n.n(i),
                o = n(28721),
                r = n(99477),
                a = n(25108);
            const c = {
                Connecting: "connecting",
                Connected: "connected",
                Closed: "closed"
            };
            let d = 1;
            class l {
                id = "";
                instanceID = "";
                isInitiator = !1;
                p2p = null;
                state = c.Connecting;
                plugin = null;
                index = d++;
                audioPlayer = null;
                user = null;
                constructor(e, t, n) {
                    this.plugin = e, this.user = t, this.instanceID = t.instanceID, this.isInitiator = !n, this.id = n ? n.connectionID : (0, o.Z)(), this.micNode = metapress.audio.context.createMediaStreamDestination(), metapress.audio.inputNode.connect(this.micNode), this.p2p = new(s())({
                        objectMode: !0,
                        channelConfig: {
                            ordered: !1
                        },
                        initiator: this.isInitiator,
                        stream: this.micNode.stream,
                        config: {
                            iceServers: metapress.p2p.iceServers
                        }
                    }), this.p2p.on("connect", this.onConnect.bind(this)), this.p2p.on("close", this.onClose.bind(this)), this.p2p.on("signal", this.onOutgoingSignal.bind(this)), this.p2p.on("data", this.onData.bind(this)), this.p2p.on("error", this.onError.bind(this)), this.p2p.on("stream", this.onStream.bind(this)), this.connectTimeout = setTimeout((() => {
                        a.debug(`[MetaPress > P2P Audio #${this.index}] Audio connection timed out`), this.onClose()
                    }), 15e3), this.pingTimer = setInterval(this.doPing.bind(this), 2e3)
                }
                getEntityID() {
                    return metapress.entities.all.find((e => e.instanceID == this.instanceID && "avatar" == e.type))?.id
                }
                onConnect() {
                    clearTimeout(this.connectTimeout), this.state = c.Connected, metapress.plugins.sendEvent("p2p_peerConnected", this)
                }
                onClose() {
                    this.p2p && (clearTimeout(this.connectTimeout), clearTimeout(this.pingTimer), this.state = c.Closed, this.p2p.destroy(), this.p2p = null, this.plugin.connections = this.plugin.connections.filter((e => e != this)), this.micNode && metapress.audio.inputNode.disconnect(this.micNode), this.micNode = null, this.audioPlayer?.removeFromParent(), this.audioPlayer = null, this.chromeHackPlayer && (this.chromeHackPlayer.srcObject = null), this.chromeHackPlayer = null, metapress.plugins.sendEvent("p2p_peerDisconnected", this))
                }
                onError(e) {
                    a.debug(`[MetaPress > P2P Audio #${this.index}] Audio connection error: connection=${this.id} error=${e.message}`)
                }
                onOutgoingSignal(e) {
                    metapress.messaging.send(this.instanceID, "audio.p2p.users.signal", {
                        connectionID: this.id,
                        instanceID: metapress.instanceID,
                        data: e,
                        advertisement: metapress.avatars.getAdvertisementPacket()
                    })
                }
                onIncomingSignal(e) {
                    e.connectionID == this.id && this.p2p.signal(e.data)
                }
                doPing() {
                    this.state == c.Connected && (this.lastPingTime = Date.now(), this.lastPingID = (this.lastPingID || 0) + 1, this.send({
                        action: "ping",
                        data: this.lastPingID
                    }))
                }
                sendEvent(e, t) {
                    if (this.state != c.Connected) return !1;
                    this.send({
                        action: "event",
                        name: e,
                        data: t
                    })
                }
                send(e) {
                    this.p2p.send(JSON.stringify(e))
                }
                onData(e) {
                    let t = JSON.parse(e);
                    if ("ping" == t.action) this.send({
                        action: "pong",
                        data: t.data
                    });
                    else if ("pong" == t.action) this.ping = Date.now() - this.lastPingTime;
                    else if ("sync" == t.action) {
                        delete t.fields.id, delete t.fields.instanceID, delete t.fields.type, delete t.fields.isPubSubAvatar;
                        let e = this.getEntityID();
                        e && metapress.entities.update(e, t.fields)
                    } else "advertise" == t.action ? metapress.avatars.onAdvertisementPacketReceived(t, this.user.instanceID) : "event" == t.action && metapress.plugins.sendEvent("p2p_event_" + t.name, this, t.data)
                }
                onStream(e) {
                    this.audioPlayer?.removeFromParent(), this.chromeHackPlayer && (this.chromeHackPlayer.srcObject = null), this.audioPlayer = new r.PositionalAudio(metapress.audio.listener), this.audioPlayer.setDistanceModel("linear"), this.audioPlayer.setRefDistance(1), this.audioPlayer.setMaxDistance(10), this.audioPlayer.setMediaStreamSource(e), metapress.renderer.scene.add(this.audioPlayer), this.chromeHackPlayer = new Audio, this.chromeHackPlayer.srcObject = e, this.chromeHackPlayer.muted = !0
                }
                get debugText() {
                    let e = metapress.renderer.camera.position,
                        t = this.user ? Math.sqrt((this.user.x - e.x) ** 2 + (this.user.y - e.y) ** 2 + (this.user.z - e.z) ** 2) : void 0;
                    return `#${String(this.index).padStart(4,"0")}: ${this.state} distance=${t?.toFixed(0)||"?"}m ping=${this.ping?.toFixed(0)??"?"}ms user=${this.instanceID}`
                }
            }
        },
        82944: (e, t, n) => {
            "use strict";
            n.r(t), n.d(t, {
                default: () => u
            });
            var i = n(38853),
                s = n.n(i),
                o = n(28721),
                r = n(25108);
            let a = 0;
            class c {
                peerID = "";
                serviceID = "";
                initiator = !1;
                connectionID = "";
                readableStream = null;
                writableStream = null;
                error = null;
                id = a++;
                constructor(e, t, n = null) {
                    if (!e) throw new Error("Missing peerID in P2PSocket constructor");
                    if (!t) throw new Error("Missing serviceID in P2PSocket constructor");
                    this.peerID = e, this.serviceID = t, n ? (this.initiator = !1, this.connectionID = n) : (this.initiator = !0, this.connectionID = (0, o.Z)()), this.p2p = new(s())({
                        objectMode: !0,
                        channelConfig: {
                            ordered: !0
                        },
                        initiator: this.initiator,
                        iceCompleteTimeout: 1e4,
                        config: {
                            iceServers: metapress.p2p.iceServers
                        }
                    }), this.p2p.on("signal", (e => {
                        metapress.messaging.send(this.peerID, "p2p.socketSignal", {
                            signal: e,
                            serviceID: this.serviceID,
                            connectionID: this.connectionID
                        })
                    })), this.readableStream = new ReadableStream({
                        start: async e => {
                            this.readableStreamController = e, this.p2p.on("data", (t => {
                                "string" == typeof t && (t = JSON.parse(t)), e.enqueue(t)
                            })), this.p2p.on("error", (t => {
                                r.debug(`[P2PSocket #${this.id}] Error: (read stream) ${t.message}`), e.error(t), this.close()
                            })), this.p2p.once("close", (() => {
                                this.close()
                            })), this.p2p.connected || await new Promise((e => this.p2p.once("connect", e)))
                        },
                        cancel: () => {
                            this.close()
                        }
                    }), this.writableStream = new WritableStream({
                        start: async e => {
                            this.writableStreamController = e, this.p2p.on("error", (t => {
                                r.debug(`[P2PSocket #${this.id}] Error: (write stream) ${t.message}`), e.error(t), this.close()
                            })), this.p2p.once("close", (() => {
                                this.close()
                            })), this.p2p.connected || await new Promise((e => this.p2p.once("connect", e)))
                        },
                        write: async (e, t) => {
                            e instanceof ArrayBuffer || e instanceof Blob || e instanceof File || e instanceof Uint8Array || e instanceof Uint16Array || e instanceof Uint32Array || e instanceof Int8Array || e instanceof Int16Array || e instanceof Int32Array || e instanceof Float32Array || e instanceof Float64Array || (e = JSON.stringify(e)), !this.p2p.write(e) && await new Promise((e => this.p2p.once("drain", e)))
                        },
                        close: () => {
                            this.close()
                        },
                        abort: e => {
                            this.close()
                        }
                    })
                }
                close() {
                    try {
                        this.p2p?.destroy()
                    } catch (e) {}
                    try {
                        readableStreamController?.close()
                    } catch (e) {}
                    try {
                        writableStreamController?.error(new Error("This stream has been closed."))
                    } catch (e) {}
                }
                onIncomingSignal(e) {
                    this.p2p?.destroyed || this.p2p?.signal(e)
                }
            }
            var d = n(21611),
                l = n(25108);
            class u {
                id = "core.audio.users";
                name = "Avatar P2P + Audio";
                description = "Provides P2P realtime connection and spatial audio between nearby users in the environment.";
                version = "1.0.0";
                requires = ["avatars", "audio", "renderer", "mqtt"];
                provides = ["p2p"];
                connections = [];
                get iceServers() {
                    return this.config.iceServers || [{
                        urls: "stun:stun.l.google.com:19302"
                    }, {
                        urls: "stun:global.stun.twilio.com:3478"
                    }, {
                        urls: "stun:stun.relay.metered.ca:80"
                    }, {
                        urls: "turn:a.relay.metered.ca:80",
                        username: "90ce206d0f0a832e446287c7",
                        credential: "6IrBLPtZiCCp6Thy"
                    }, {
                        urls: "turn:a.relay.metered.ca:80?transport=tcp",
                        username: "90ce206d0f0a832e446287c7",
                        credential: "6IrBLPtZiCCp6Thy"
                    }, {
                        urls: "turn:a.relay.metered.ca:443",
                        username: "90ce206d0f0a832e446287c7",
                        credential: "6IrBLPtZiCCp6Thy"
                    }, {
                        urls: "turn:a.relay.metered.ca:443?transport=tcp",
                        username: "90ce206d0f0a832e446287c7",
                        credential: "6IrBLPtZiCCp6Thy"
                    }]
                }
                onLoad() {
                    this.connectionTimer = setInterval(this.onConnectionLoop.bind(this), 2e3), this.updateTimer = setInterval(this.sendAvatarUpdates.bind(this), 250), metapress.entities.add({
                        id: "core.audio.users:menubutton",
                        type: "menubar.item",
                        name: "Unmute",
                        description: "This button controls if other people can hear the user. If red, they are muted.",
                        order: -100,
                        icon: n(23873),
                        onClick: null
                    }), this.updateMicButton()
                }
                toggleMute() {
                    metapress.audio.muted = !metapress.audio.muted
                }
                $onAudioMuteChanged() {
                    this.updateMicButton()
                }
                $mqtt_onStatusUpdated() {
                    this.updateMicButton()
                }
                updateMicButton() {
                    return metapress.mqtt.isConnected ? metapress.mqtt.queued ? metapress.entities.update("core.audio.users:menubutton", {
                        name: "Queued for entry" + (-1 == metapress.mqtt.queuePosition ? "" : ` (${metapress.mqtt.queuePosition} in queue)`),
                        icon: n(23873),
                        onClick: () => metapress.dialogs.alert({
                            icon: "info",
                            title: "Queued for entry",
                            text: "It is busy here! As soon as slots open up you will be able to engage with others." + (-1 == metapress.mqtt.queuePosition ? "" : ` You are #${metapress.mqtt.queuePosition} in the queue.`)
                        })
                    }) : void metapress.entities.update("core.audio.users:menubutton", {
                        name: metapress.audio.muted ? "Unmute" : "Mute",
                        icon: metapress.audio.muted ? n(76907) : n(68009),
                        onClick: () => this.toggleMute()
                    }) : metapress.entities.update("core.audio.users:menubutton", {
                        name: "Not connected",
                        icon: n(23873),
                        onClick: () => metapress.dialogs.alert({
                            icon: "warning",
                            title: "World is busy",
                            text: "It is busy here! As soon as slots open up you will be able to engage with others."
                        })
                    })
                }
                $onIncomingMessage(e) {
                    "audio.p2p.users.signal" == e.name && this.onSignalReceived(e.data, e.from), "p2p.socketSignal" == e.name && this.onSocketSignalReceived(e)
                }
                onSignalReceived(e, t) {
                    let n = this.connections.find((t => t.id == e.connectionID));
                    if (!n) {
                        let i = metapress.avatars.onAdvertisementPacketReceived(e.advertisement, t);
                        if (!i) return;
                        n = new d.Z(this, i, e), this.connections.push(n)
                    }
                    n.onIncomingSignal(e)
                }
                onConnectionLoop() {
                    let e = metapress.avatars.users;
                    e.sort(((e, t) => e.distance - t.distance)), e = e.slice(0, 32);
                    for (let t of this.connections) e.find((e => t.user == e)) || t.onClose();
                    for (let t of e) {
                        let e = this.connections.find((e => e.instanceID == t.instanceID));
                        e || (e = new d.Z(this, t), this.connections.push(e))
                    }
                    for (let e of this.connections) {
                        if (!e.isInitiator || e.state != d.a.Connected) continue;
                        let t = this.connections.find((t => t != e && !t.isInitiator && t.instanceID == e.instanceID));
                        t && (e.id.localeCompare(t.id) > 0 || e.onClose())
                    }
                    this.connections.sort(((e, t) => (e.user?.distance || 0) - (t.user?.distance || 0)))
                }
                $getDebugSection() {
                    return {
                        name: "P2P Network",
                        text: this.connections.slice(0, 5).map((e => e.debugText)).join("\n") + (this.connections.length > 5 ? `\n + ${this.connections.length-5} more` : "") || "(no connections)"
                    }
                }
                $onRender() {
                    for (let e = 0; e < this.connections.length; e++) {
                        let t = this.connections[e];
                        t?.audioPlayer && (t.audioPlayer.position.x = t.user.x, t.audioPlayer.position.y = t.user.y, t.audioPlayer.position.z = t.user.z)
                    }
                }
                sendAvatarUpdates() {
                    if (0 == this.connections.length) return;
                    let e = JSON.stringify(metapress.avatars.getAdvertisementPacket());
                    for (let t = 0; t < this.connections.length; t++) {
                        let n = this.connections[t];
                        n.state == d.a.Connected && n.p2p.send(e)
                    }
                }
                sockets = [];
                openSocket(e, t) {
                    let n = new c(e, t, null);
                    return this.sockets.push(n), n
                }
                onSocketSignalReceived({
                    from: e,
                    data: t
                }) {
                    let n = this.sockets.find((e => e.connectionID == t.connectionID));
                    n || (l.debug(`[MetaPress > P2P Audio] New incoming P2P socket connection: user=${e} connection=${t.connectionID}`), n = new c(e, t.serviceID, t.connectionID), this.sockets.push(n), metapress.plugins.sendEvent(`p2p_socketIncoming_${t.serviceID}`, n)), n.onIncomingSignal(t.signal)
                }
            }
        },
        76907: (e, t, n) => {
            "use strict";
            e.exports = n.p + "mp-core/muted.82f196339dec9505d6b9.svg"
        },
        23873: (e, t, n) => {
            "use strict";
            e.exports = n.p + "mp-core/no-connection.753cc41a8a78b87a488b.svg"
        },
        68009: (e, t, n) => {
            "use strict";
            e.exports = n.p + "mp-core/unmuted.ece446c326c519a0682a.svg"
        },
        52361: () => {},
        94616: () => {}
    }
]);