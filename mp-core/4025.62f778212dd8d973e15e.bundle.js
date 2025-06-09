(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [4025], {
        21611: (e, t, i) => {
            "use strict";
            i.d(t, {
                Z: () => h,
                a: () => d
            });
            var s = i(38853),
                n = i.n(s),
                a = i(28721),
                o = i(99477),
                r = i(25108);
            const d = {
                Connecting: "connecting",
                Connected: "connected",
                Closed: "closed"
            };
            let c = 1;
            class h {
                id = "";
                instanceID = "";
                isInitiator = !1;
                p2p = null;
                state = d.Connecting;
                plugin = null;
                index = c++;
                audioPlayer = null;
                user = null;
                constructor(e, t, i) {
                    this.plugin = e, this.user = t, this.instanceID = t.instanceID, this.isInitiator = !i, this.id = i ? i.connectionID : (0, a.Z)(), this.micNode = metapress.audio.context.createMediaStreamDestination(), metapress.audio.inputNode.connect(this.micNode), this.p2p = new(n())({
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
                        r.debug(`[MetaPress > P2P Audio #${this.index}] Audio connection timed out`), this.onClose()
                    }), 15e3), this.pingTimer = setInterval(this.doPing.bind(this), 2e3)
                }
                getEntityID() {
                    return metapress.entities.all.find((e => e.instanceID == this.instanceID && "avatar" == e.type))?.id
                }
                onConnect() {
                    clearTimeout(this.connectTimeout), this.state = d.Connected, metapress.plugins.sendEvent("p2p_peerConnected", this)
                }
                onClose() {
                    this.p2p && (clearTimeout(this.connectTimeout), clearTimeout(this.pingTimer), this.state = d.Closed, this.p2p.destroy(), this.p2p = null, this.plugin.connections = this.plugin.connections.filter((e => e != this)), this.micNode && metapress.audio.inputNode.disconnect(this.micNode), this.micNode = null, this.audioPlayer?.removeFromParent(), this.audioPlayer = null, this.chromeHackPlayer && (this.chromeHackPlayer.srcObject = null), this.chromeHackPlayer = null, metapress.plugins.sendEvent("p2p_peerDisconnected", this))
                }
                onError(e) {
                    r.debug(`[MetaPress > P2P Audio #${this.index}] Audio connection error: connection=${this.id} error=${e.message}`)
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
                    this.state == d.Connected && (this.lastPingTime = Date.now(), this.lastPingID = (this.lastPingID || 0) + 1, this.send({
                        action: "ping",
                        data: this.lastPingID
                    }))
                }
                sendEvent(e, t) {
                    if (this.state != d.Connected) return !1;
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
                    this.audioPlayer?.removeFromParent(), this.chromeHackPlayer && (this.chromeHackPlayer.srcObject = null), this.audioPlayer = new o.PositionalAudio(metapress.audio.listener), this.audioPlayer.setDistanceModel("linear"), this.audioPlayer.setRefDistance(1), this.audioPlayer.setMaxDistance(10), this.audioPlayer.setMediaStreamSource(e), metapress.renderer.scene.add(this.audioPlayer), this.chromeHackPlayer = new Audio, this.chromeHackPlayer.srcObject = e, this.chromeHackPlayer.muted = !0
                }
                get debugText() {
                    let e = metapress.renderer.camera.position,
                        t = this.user ? Math.sqrt((this.user.x - e.x) ** 2 + (this.user.y - e.y) ** 2 + (this.user.z - e.z) ** 2) : void 0;
                    return `#${String(this.index).padStart(4,"0")}: ${this.state} distance=${t?.toFixed(0)||"?"}m ping=${this.ping?.toFixed(0)??"?"}ms user=${this.instanceID}`
                }
            }
        },
        45604: (e, t, i) => {
            "use strict";
            i.r(t), i.d(t, {
                default: () => n
            });
            var s = i(21611);
            class n {
                id = "core.networking.etherealStorage";
                name = "Ethereal Storage";
                description = "Provides a temporary key/value and data storage system that is tied to individual users.";
                version = "1.0.0";
                requires = ["p2p"];
                provides = ["etherealStorage"];
                fieldData = [];
                data = {};
                onLoad() {
                    for (let e of this.fieldData)
                        if (void 0 !== e.data && null !== e.data)
                            for (let t of metapress.p2p.connections) t.state == s.a.Connected && t.sendEvent("etherealStorage_item", e)
                }
                $p2p_event_etherealStorage_item(e, t) {
                    let i = this.fieldData.findIndex((e => e.name == t.name));
                    if (-1 != i) {
                        if (this.fieldData[i].time > t.time) return;
                        this.fieldData.splice(i, 1)
                    }
                    this.fieldData.push(t), this.data[t.name] = t.data, metapress.plugins.sendEvent("etherealStorage_itemUpdated", t)
                }
                $p2p_peerConnected(e) {
                    for (let t of this.fieldData) void 0 !== t.data && null !== t.data && e.sendEvent("etherealStorage_item", t)
                }
                set(e, t) {
                    let i = this.fieldData.findIndex((t => t.name == e)); - 1 != i && this.fieldData.splice(i, 1);
                    let n = {
                        name: e,
                        data: t,
                        time: Date.now(),
                        owner: metapress.instanceID
                    };
                    this.fieldData.push(n), this.data[e] = t, metapress.plugins.sendEvent("etherealStorage_itemUpdated", n);
                    for (let e of metapress.p2p.connections) e.state == s.a.Connected && e.sendEvent("etherealStorage_item", n)
                }
            }
        },
        52361: () => {},
        94616: () => {}
    }
]);