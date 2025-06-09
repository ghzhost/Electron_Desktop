"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2167], {
        92167: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => s
            });
            var n = i(25108);
            class s {
                id = "core.audio";
                name = "Audio Support";
                description = "Provides audio for the environment.";
                version = "1.0.0";
                provides = ["audio"];
                requires = ["renderer"];
                context = null;
                listener = null;
                inputNode = null;
                micStream = null;
                outputNode = null;
                onLoad() {
                    if (this.listener = new THREE.AudioListener, this.context = this.listener.context, metapress.renderer.camera.add(this.listener), "suspended" == this.context.state) {
                        let e = () => {
                            this.context.resume(), window.removeEventListener("keydown", e), window.removeEventListener("pointerdown", e)
                        };
                        window.addEventListener("keydown", e), window.addEventListener("pointerdown", e)
                    }
                    this.inputNode = this.context.createGain(), this.outputNode = this.context.createGain(), this.outputNode.connect(this.context.destination)
                }
                _muted = !0;
                get muted() {
                    return this._muted
                }
                set muted(e) {
                    this._muted != e && (this._muted = !!e, e ? (this.micNode?.disconnect(), this.micNode = null, this.micStream?.getTracks()?.forEach((e => e.stop())), this.micStream = null) : navigator.mediaDevices.getUserMedia({
                        audio: !0,
                        video: !1
                    }).then((e => {
                        this.micNode?.disconnect(), this.micNode = null, this.micStream?.getTracks()?.forEach((e => e.stop())), this.micStream = null, this.micStream = e, this.micNode = this.context.createMediaStreamSource(this.micStream), this.micNode.connect(this.inputNode)
                    })).catch((e => {
                        n.warn(`[MetaPress] Unable to fetch microphone input! ${e.message}`), this._muted = !0
                    })), metapress.plugins.sendEvent("onAudioMuteChanged", !!e))
                }
                $getDebugSection = () => ({
                    id: "core.main",
                    text: `Audio: state=${this.context?.state}`
                });
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:setMute`,
                    type: "action",
                    name: "mute/unmute microphone",
                    tags: "mute,unmute",
                    content: `\n                    Run the KB action "${this.id}:setMute" with value "true" or "false" to mute or unmute this user.\n                `,
                    action: async e => {
                        if ("mute" == e.value || "true" == e.value) this.muted = !0;
                        else {
                            if ("unmute" != e.value && "false" != e.value) return n.warn(`[MetaPress] Invalid input for mute/unmute action: ${e.value}`), `invalid input: ${e.value}`;
                            this.muted = !1
                        }
                        return metapress.p2p?.updateMicButton(), `muted: ${this.muted}`
                    }
                }]
            }
        }
    }
]);