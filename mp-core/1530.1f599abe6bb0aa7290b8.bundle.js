"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [1530], {
        41530: (e, i, t) => {
            t.r(i), t.d(i, {
                default: () => h
            });
            class a {
                isMediaChannel = !0;
                audioOutput = null;
                videoOutput = null;
                channelIsStopped = !1;
                channelURL = "";
                async onChannelStart(e) {}
                async onChannelStop() {}
                onUserInput() {}
            }
            var n = t(25108);
            class d extends a {
                mediaElement = null;
                isLive = !1;
                hls = null;
                async onChannelStart(e) {
                    if (n.debug("[MediaChannelVideoElement] Creating media channel"), this.mediaElement = document.createElement("video"), this.mediaElement.crossOrigin = "anonymous", this.mediaElement.muted = !0, this.mediaElement.autoplay = !0, this.mediaElement.loop = !0, this.mediaElement.playsInline = !0, this.mediaElement.style.cssText = "position: absolute; width: 1024px; height: 1024px; ", this.mediaElement.addEventListener("loadedmetadata", (e => this.onLoadedMetadata(e))), e.includes(".m3u8")) {
                        const {
                            default: i
                        } = await t.e(3041).then(t.bind(t, 93041));
                        if (i.isSupported()) {
                            let t = {
                                maxLiveSyncPlaybackRate: 1.1,
                                ignoreDevicePixelRatio: !0
                            };
                            this.hls = new i(t), this.hls.attachMedia(this.mediaElement), this.hls.loadSource(e), this.hls.on(i.Events.LEVEL_LOADED, ((e, i) => this.onHLSLevelLoaded(e, i)))
                        } else this.mediaElement.canPlayType("application/vnd.apple.mpegurl") || n.warn("[MediaChannelVideoElement] HLS video feed detected, but HLS is not supported on this browser."), this.mediaElement.src = e
                    } else this.mediaElement.src = e;
                    this.videoOutput = new THREE.VideoTexture(this.mediaElement), this.videoOutput.format = THREE.RGBAFormat, this.videoOutput.colorSpace = THREE.SRGBColorSpace, this.audioOutput = metapress.audio.context.createGain(), this.audioElementNode = metapress.audio.context.createMediaElementSource(this.mediaElement), this.audioElementNode.connect(this.audioOutput), this.zeroGainNode = metapress.audio.context.createGain(), this.zeroGainNode.gain.value = 0, this.zeroGainNode.connect(metapress.audio.context.destination), this.audioOutput.connect(this.zeroGainNode), this.attemptResumeAudio()
                }
                onLoadedMetadata(e) {
                    this.isLive = this.mediaElement.duration == 1 / 0
                }
                onHLSLevelLoaded(e, i) {
                    this.isLive = !!i?.details?.live
                }
                onChannelStop() {
                    n.debug("[MediaChannelVideoElement] Stopping media channel"), this.hls?.detachMedia(), this.hls?.destroy(), this.mediaElement.pause(), this.mediaElement.src = "", this.videoOutput.dispose(), this.audioElementNode.disconnect(), this.zeroGainNode.disconnect()
                }
                onUserInput() {
                    this.attemptResumeAudio()
                }
                async attemptResumeAudio() {
                    if (this.mediaElement) {
                        try {
                            this.mediaElement.muted = !1
                        } catch (e) {
                            n.warn(`[MediaChannelVideoElement] Unable to unmute media element! ${e.message}`)
                        }
                        if (!this._played)
                            if (this.mediaElement.paused) try {
                                await this.mediaElement.play(), this._played = !0
                            } catch (e) {
                                n.warn(`[MediaChannelVideoElement] Unable to play media element! ${e.message}`)
                            } else this._played = !0
                    }
                }
            }
            var o = t(25108);
            class s {
                name = "Media";
                description = "Plays audio and/or video in-world.";
                provides = ["material"];
                icon = t(39486);
                settings = () => [{
                    type: "description",
                    name: "This modifier streams audio and/or video in-world."
                }, {
                    type: "file",
                    id: "media_url",
                    name: "Media file",
                    help: "The file to play."
                }, {
                    type: "file",
                    id: "placeholder_url",
                    name: "Placeholder image",
                    help: "Image to display when user is out of media range."
                }, {
                    type: "button",
                    id: "media_external_url",
                    name: "Set external media URL",
                    help: "Allows you to set a media URL outside of MetaPress. Note that external media files will not be saved as part of world backups.",
                    onClick: e => this.onSetExternalURL()
                }, {
                    type: "header",
                    name: "Audio"
                }, {
                    type: "checkbox",
                    id: "media_audio",
                    name: "Enable audio",
                    help: "When enabled, the source's audio will be played in-world."
                }, {
                    type: "checkbox",
                    id: "media_audio_spatial",
                    name: "Spatialize",
                    help: "When enabled, the user will hear the audio coming from the source. If disabled, the audio is played directly.",
                    hidden: !this.entity.media_audio
                }, {
                    type: "number",
                    id: "media_audio_range",
                    name: "Hearing range",
                    placeholder: 10,
                    help: "Distance (in meters) that this object can be heard from.",
                    hidden: !this.entity.media_audio
                }, {
                    type: "number",
                    id: "media_audio_volume",
                    name: "Volume %",
                    placeholder: 100,
                    help: "Audio volume, from 0 to 100.",
                    hidden: !this.entity.media_audio
                }, {
                    type: "header",
                    name: "Video"
                }, {
                    type: "checkbox",
                    id: "media_video",
                    name: "Enable video",
                    help: "When enabled, the source's video will be applied to the surface of this object."
                }, {
                    type: "number",
                    id: "media_video_range",
                    name: "Visible range",
                    placeholder: 10,
                    help: "When the user is within this distance (in meters) the video will be displayed.",
                    hidden: !this.entity.media_video
                }];
                channel = null;
                channelCloser = null;
                channelURL = "";
                channelLastError = null;
                onLoad() {
                    this.checkTimer = setInterval((() => this.check()), 1e3), this.displayPlaceholder()
                }
                async onUnload() {
                    clearInterval(this.checkTimer), this.channel && await this.stopChannel()
                }
                async check() {
                    if (!this.busy) {
                        this.busy = !0;
                        try {
                            await this.checkIteration()
                        } catch (e) {
                            this.channelLastError?.message != e.message && o.error(e), this.channelLastError = e
                        } finally {
                            this.busy = !1
                        }
                    }
                }
                async checkIteration() {
                    let e = this._media_url != this.entity.media_url || this._media_audio != this.entity.media_audio || this._media_audio_spatial != this.entity.media_audio_spatial || this._media_audio_range != this.entity.media_audio_range || this._media_audio_volume != this.entity.media_audio_volume || this._media_video != this.entity.media_video || this._placeholder_url != this.entity.placeholder_url;
                    this._media_url = this.entity.media_url, this._media_audio = this.entity.media_audio, this._media_audio_spatial = this.entity.media_audio_spatial, this._media_audio_range = this.entity.media_audio_range, this._media_audio_volume = this.entity.media_audio_volume, this._media_video = this.entity.media_video, this._placeholder_url = this.entity.placeholder_url, e && this.channel && await this.stopChannel();
                    let i = this.entity.media_url,
                        t = this.entity.media_audio_range ? parseFloat(this.entity.media_audio_range) : 10,
                        a = this.entity.media_video_range ? parseFloat(this.entity.media_video_range) : 10;
                    isNaN(t) && (t = 10), isNaN(a) && (a = 10);
                    let n = metapress.avatar.distanceTo(this.entity),
                        d = -1 != n && this.entity.media_audio && n < t + 5,
                        o = -1 != n && this.entity.media_video && n < a;
                    d || o || (i = null), i && !this.channel ? await this.startChannel(i) : (this.channel && !i || this.channel && i != this.channelURL) && await this.stopChannel(), this.channel && (this.channel.audioOutput && d ? await this.applyAudio() : this.removeAudio(), this.channel.videoOutput && o ? await this.applyVideo() : this.removeVideo())
                }
                async startChannel(e) {
                    let {
                        channel: i,
                        close: t
                    } = await metapress.media.openChannel(e);
                    o.debug(`[MediaOutlet] Connected to channel: entity=${this.entity.id}`), this.channel = i, this.channelCloser = t, this.channelURL = e, i.audioOutput || i.videoOutput || o.warn("[MediaOutlet] No media output set. The channel must provide 'audioOutput' and/or 'videoOutput'.")
                }
                async applyAudio() {
                    if (this.audioObject) return;
                    if (this.entity.media_audio_spatial) {
                        let e = this.entity.media_audio_range && parseFloat(this.entity.media_audio_range) || 10;
                        this.audioObject = new THREE.PositionalAudio(metapress.audio.listener), this.audioObject.setDistanceModel("linear"), this.audioObject.setRefDistance(e / 2), this.audioObject.setMaxDistance(e), this.audioObject.setRolloffFactor(1)
                    } else this.audioObject = new THREE.Audio(metapress.audio.listener);
                    const e = (null != this.entity.media_audio_volume ? parseFloat(this.entity.media_audio_volume) || 0 : 100) / 100;
                    this.audioObject.setVolume(e), this.audioObject.setNodeSource(this.channel.audioOutput), this.renderer.container.add(this.audioObject)
                }
                removeAudio() {
                    this.audioObject && (this.audioObject.disconnect(), this.audioObject.removeFromParent(), this.audioObject = null)
                }
                async applyVideo() {
                    if (this.videoMaterial) return;
                    let e = this.renderer.object;
                    if (!e?.isMesh) return o.warn(`[MediaOutlet] Could not find mesh for the video to be applied to: entity=${this.entity.id}`);
                    this.videoMaterial = new THREE.MeshStandardMaterial({
                        map: this.channel.videoOutput,
                        side: THREE.DoubleSide
                    }), e.material = this.videoMaterial
                }
                removeVideo() {
                    if (this.videoMaterial) return this.renderer.object?.isMesh ? (this.videoMaterial.dispose(), this.videoMaterial = null, void this.displayPlaceholder()) : o.warn(`[MediaOutlet] Could not find mesh for the video to be applied to: entity=${this.entity.id}`)
                }
                async stopChannel() {
                    this.channelCloser(), o.debug(`[MediaOutlet] Closed channel: entity=${this.entity.id}`), this.channel = null, this.channelCloser = null, this.channelURL = "", this.removeAudio(), this.removeVideo()
                }
                displayPlaceholder() {
                    let e = this.renderer.object;
                    if (!e?.isMesh) return o.warn(`[MediaOutlet] Could not find mesh for the video to be applied to: entity=${this.entity.id}`);
                    if (null != this.entity.placeholder_url) {
                        let i = this.entity.scaleX / this.entity.scaleY,
                            t = (new THREE.TextureLoader).load(this.entity.placeholder_url, (function(e) {
                                let t = e.image.width / e.image.height;
                                e.matrixAutoUpdate = !1, i < t ? e.matrix.setUvTransform(0, 0, i / t, 1, 0, .5, .5) : e.matrix.setUvTransform(0, 0, 1, t / i, 0, .5, .5)
                            }));
                        e.material = new THREE.MeshBasicMaterial({
                            map: t,
                            side: THREE.DoubleSide
                        }), e.material.map.colorSpace = THREE.SRGBColorSpace
                    } else e.material = new THREE.MeshStandardMaterial({
                        color: "#000000",
                        side: THREE.DoubleSide
                    })
                }
                async onSetExternalURL() {
                    let e = prompt("Enter the URL of the media to play:", this.entity.media_url);
                    e && metapress.entities.update(this.entity.id, {
                        media_url: e
                    })
                }
            }
            var l = t(25108);
            class h {
                id = "core.media";
                name = "Media Support";
                description = "Provides the ability to play audio and video files within the world.";
                version = "1.0.0";
                provides = ["media", "modifier:mediaoutlet"];
                requires = ["entities", "audio", "avatar"];
                activeChannels = [];
                createModifier() {
                    return new s
                }
                async openChannel(e) {
                    let i = new URL(e, window.location.href);
                    e = i.toString();
                    let t = this.activeChannels.find((i => i?.channelURL == e));
                    if (!t) {
                        let i = metapress.plugins.callAll("media_createChannel", e),
                            a = -99999;
                        for (let e of i.flat()) {
                            let i = e.channelPriority || 0;
                            i > a && (t = e, a = i)
                        }
                        if (!t) throw new Error("Unknown channel type for url: " + e);
                        t.channelURL = e, this.activeChannels.push(t), t._openPromise = Promise.resolve().then((() => t.onChannelStart(e))).catch((i => {
                            throw l.error(`[MediaPlugin] Failed to open channel for url: ${e}`, i), this.activeChannels = this.activeChannels.filter((e => e != t)), i
                        }))
                    }
                    await t._openPromise, t._usageCount = (t._usageCount || 0) + 1;
                    var a = !1;
                    let n = new r;
                    return n.channel = t, n.close = async () => {
                        a || (a = !0, t._usageCount -= 1, this.shutdownChannelSoon(t))
                    }, n
                }
                shutdownChannelSoon(e) {
                    e._shutdownDelay && clearTimeout(e._shutdownDelay), e._shutdownDelay = setTimeout((() => {
                        e._shutdownDelay = null, e._usageCount > 0 || (this.activeChannels = this.activeChannels.filter((i => i != e)), Promise.resolve().then((() => e.onChannelStop())))
                    }), 5e3)
                }
                $media_createChannel(e) {
                    let i = new URL(e, window.location.href);
                    if ("http:" == i.protocol || "https:" == i.protocol) return new d(e)
                }
                $input_onUserInput() {
                    for (let e of this.activeChannels) e.onUserInput?.()
                }
                async $prepareEntityForFile(e) {
                    return [".mp4", ".mov", ".webm", ".ogv"].find((i => e.name.toLowerCase().endsWith(i))) ? {
                        name: "Video: " + e.name,
                        type: "plane",
                        scaleX: 16 / 9,
                        "modifier:mediaoutlet": !0,
                        media_url: "$URL",
                        media_audio: !0,
                        media_audio_spatial: !0,
                        media_video: !0
                    } : [".wav", ".mp3", ".ogg"].find((i => e.name.toLowerCase().endsWith(i))) ? {
                        name: "Audio: " + e.name,
                        type: "cube",
                        scaleX: .1,
                        scaleY: .1,
                        scaleZ: .1,
                        "modifier:mediaoutlet": !0,
                        media_url: "$URL",
                        media_audio: !0,
                        media_audio_spatial: !0
                    } : void 0
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:info`,
                    type: "info",
                    name: "Media Plugin",
                    tags: "add video, add audio, add video to wall, add sound, add ambient sound, add ambient audio, add music, add ambient music, drag video, sound object, video panel, background music",
                    content: "\n                The Media plugin allows you to create in-world audio and video. Audio and video files can be added to the world by dragging them from your file browser into the world, or by using the Editor in the sidebar. \n                Supported formats are: .mp4 .mov .webm .ogv .wav .mp3 .ogg\n            "
                }]
            }
            class r {
                channel = null;
                close() {}
            }
        },
        39486: (e, i, t) => {
            e.exports = t.p + "mp-core/media.1b58e4b27b7114150e7c.svg"
        }
    }
]);