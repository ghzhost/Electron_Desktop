"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [4716], {
        40001: (e, t, i) => {
            i.d(t, {
                Lm: () => o,
                U8: () => s,
                lk: () => n,
                sN: () => r
            });
            var a = i(67294);
            const n = e => a.createElement(a.Fragment, null, a.createElement("div", {
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
                }, a.createElement("div", {
                    style: {
                        fontSize: 15,
                        margin: "0px 20px",
                        flex: "1 1 1px"
                    }
                }, e.title), null != e.onClose ? a.createElement("img", {
                    draggable: "false",
                    src: i(42728),
                    title: "Close",
                    style: {
                        width: 20,
                        height: 20,
                        marginRight: 15,
                        cursor: "pointer"
                    },
                    onClick: e.onClose
                }) : null), a.createElement("div", {
                    style: Object.assign({
                        position: "absolute",
                        top: 45,
                        left: 0,
                        width: "100%",
                        height: "calc(100% - 45px)",
                        overflowX: "hidden",
                        overflowY: "auto"
                    }, e.containerStyle)
                }, e.children)),
                o = e => {
                    let [t, n] = a.useState(!!e.openByDefault);
                    return !1 === e.visible ? a.createElement(a.Fragment, null) : a.createElement(a.Fragment, null, a.createElement("div", {
                        style: Object.assign({
                            display: "flex",
                            margin: "20px 10px 10px 10px",
                            fontSize: 15,
                            cursor: "pointer",
                            alignItems: "center"
                        }, e.style),
                        onClick: e => n(!t)
                    }, a.createElement("img", {
                        draggable: "false",
                        src: i(t ? 40313 : 65141),
                        style: {
                            width: 8,
                            height: 8,
                            margin: "0px 6px"
                        }
                    }), a.createElement("div", {
                        style: {
                            flex: "1 1 auto"
                        }
                    }, e.title), e.onRemove ? a.createElement("img", {
                        draggable: "false",
                        src: i(3272),
                        style: {
                            width: 16,
                            height: 16,
                            margin: "0px 10px",
                            cursor: "pointer",
                            opacity: .75
                        },
                        onClick: t => {
                            t.preventDefault(), t.stopPropagation(), e.onRemove()
                        }
                    }) : null), t ? e.children : null)
                },
                r = e => {
                    let [t, n] = a.useState(!1);
                    return a.createElement("div", {
                        style: {
                            margin: "2px 10px",
                            fontSize: 13,
                            borderRadius: 5,
                            backgroundColor: t ? "rgba(255, 255, 255, 0.1)" : e.selected ? "rgb(36, 76, 119)" : "rgba(255, 255, 255, 0.0)",
                            cursor: e.disabled ? "not-allowed" : "pointer",
                            display: "flex",
                            alignItems: "center",
                            height: 30
                        },
                        title: e.tooltip,
                        onPointerEnter: e => n(!0),
                        onPointerLeave: e => n(!1),
                        onClick: e.disabled ? null : e.onClick
                    }, e.disabled ? a.createElement("div", {
                        style: {
                            flex: "0 0 auto",
                            margin: "0 10px",
                            backgroundColor: "#717171",
                            width: 16,
                            height: 16,
                            maskImage: `url(${e.icon||i(86029)})`,
                            maskPosition: "center",
                            maskSize: "cover",
                            maskRepeat: "no-repeat",
                            WebkitMaskImage: `url(${e.icon||i(86029)})`,
                            WebkitMaskPosition: "center",
                            WebkitMaskSize: "cover",
                            WebkitMaskRepeat: "no-repeat",
                            pointerEvents: "none"
                        }
                    }) : a.createElement("img", {
                        draggable: "false",
                        src: e.icon || i(86029),
                        style: {
                            pointerEvents: "none",
                            width: 16,
                            height: 16,
                            margin: "0px 10px",
                            flex: "0 0 auto",
                            border: "none"
                        }
                    }), a.createElement("div", {
                        style: {
                            color: e.disabled ? "#717171" : null,
                            fontSize: 13,
                            textOverflow: "ellipsis",
                            overflow: "hidden",
                            whiteSpace: "nowrap",
                            marginRight: 10
                        }
                    }, e.name))
                },
                s = e => a.createElement("div", {
                    style: {
                        margin: "10px 20px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: 5,
                        display: "flex"
                    }
                }, a.createElement("img", {
                    src: i(83203),
                    style: {
                        width: 16,
                        margin: "0px 20px",
                        flex: "0 0 auto",
                        opacity: .5
                    }
                }), a.createElement("div", {
                    style: {
                        fontSize: 12,
                        color: "rgba(255, 255, 255, 0.5)",
                        textAlign: "left",
                        margin: "10px 10px 10px 0px",
                        lineHeight: "1.5",
                        flex: "1 1 1px"
                    }
                }, e.text))
        },
        4716: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => y
            });
            var a = i(67294),
                n = i(28250),
                o = i(47743),
                r = i(28721),
                s = i(55437),
                m = i(32589),
                l = i(40001);
            const c = [{
                    description: "acenar",
                    emoji: "👋"
                }, {
                    description: "dançar",
                    emoji: "🕺"
                }, {
                    description: "rir",
                    emoji: "😂"
                }, {
                    description: "joinha",
                    emoji: "👍"
                }, {
                    description: "festa",
                    emoji: "🥳"
                }, {
                    description: "explodir",
                    emoji: "🤯"
                }, {
                    description: "saudar",
                    emoji: "🫡"
                }, {
                    description: "levantar",
                    emoji: "🙌"
                }, {
                    description: "rock",
                    emoji: "🤘"
                }, {
                    description: "amor",
                    emoji: "🥰"
                }, {
                    description: "cantar",
                    emoji: "🎤"
                }, {
                    description: "chorar",
                    emoji: "😭"
                }],
                d = s.m6(),
                p = d.filter((e => c.findIndex((t => t.emoji === e.emoji)) < 0)),
                h = [];
            for (let e = 0; e < 4; e++) h.push(Math.floor(e / 4 * p.length));
            h.push(p.length);
            class u extends a.PureComponent {
                state = {
                    searchEmojis: [],
                    searchText: ""
                };
                prevSearch = "";
                renderedEmojis = p.slice(h[0], h[1]);
                emojiShowTimers = [];
                componentDidMount() {
                    this.staggeredTimer = setTimeout(this.startStaggeredEmojiDisplay, 1e3)
                }
                componentWillUnmount() {
                    this.staggeredTimer && clearTimeout(this.staggeredTimer);
                    for (let e = 0; e < this.emojiShowTimers.length; e++) clearTimeout(this.emojiShowTimers[e])
                }
                startStaggeredEmojiDisplay = () => {
                    for (let e = 1; e < h.length - 1; e++) {
                        let t = setTimeout((() => {
                            this.renderedEmojis = p.slice(h[0], h[e + 1]), this.forceUpdate(), this.emojiShowTimers = this.emojiShowTimers.filter((e => e != t))
                        }), 800 * e);
                        this.emojiShowTimers.push(t)
                    }
                    this.staggeredTimer = null
                };
                triggerEmoji(e) {
                    metapress.emojis.triggerEmoji(e)
                }
                onSearch(e) {
                    if (e === this.prevSearch) return;
                    this.prevSearch = e, this.setState({
                        searchText: e || ""
                    });
                    let t = e.trim();
                    if (!t) return this.renderedEmojis = p.slice(h[0], h[1]), void this.setState({
                        searchEmojis: []
                    }, (() => this.startStaggeredEmojiDisplay()));
                    t = t.toLowerCase();
                    const i = d.filter((e => e.description.toLowerCase().includes(t) || e.keywords.includes(t)));
                    this.setState({
                        searchEmojis: i
                    })
                }
                renderSearch() {
                    return a.createElement(a.Fragment, null, this.state.searchEmojis.length > 0 ? this.state.searchEmojis.map((e => a.createElement(g, {
                        key: e.description,
                        emoji: e,
                        onClick: t => this.triggerEmoji(e)
                    }))) : a.createElement("div", {
                        style: {
                            color: "white",
                            textAlign: "center",
                            fontSize: 16,
                            marginTop: 10
                        }
                    }, "Nenhum emoji encontrado."))
                }
                renderEmojis() {
                    return a.createElement(a.Fragment, null, a.createElement(l.Lm, {
                        title: "Animados",
                        openByDefault: !0,
                        style: {
                            margin: "5px 10px 10px 10px"
                        }
                    }, c.map((e => a.createElement(g, {
                        key: e.description,
                        emoji: e,
                        onClick: t => this.triggerEmoji(e)
                    })))), a.createElement(l.Lm, {
                        title: "Todos",
                        openByDefault: !0
                    }, this.renderedEmojis.length > 0 ? this.renderedEmojis.map((e => {
                        let t = {
                            ...e,
                            description: e.description.replace("grinning face", "rosto sorridente").replace("grinning face with big eyes", "rosto sorridente com olhos grandes").replace("grinning face with smiling eyes", "rosto sorridente com olhos sorridentes").replace("beaming face with smiling eyes", "rosto radiante com olhos sorridentes").replace("grinning squinting face", "rosto sorridente com olhos semicerrados").replace("grinning face with sweat", "rosto sorridente com suor").replace("rolling on the floor laughing", "rolando de rir").replace("face with tears of joy", "rosto com lágrimas de alegria").replace("slightly smiling face", "rosto levemente sorridente").replace("upside-down face", "rosto de cabeça para baixo").replace("melting face", "rosto derretendo").replace("winking face", "rosto piscando").replace("smiling face with smiling eyes", "rosto sorridente com olhos sorridentes").replace("smiling face with halo", "rosto sorridente com auréola").replace("smiling face with hearts", "rosto sorridente com corações").replace("smiling face with heart-eyes", "rosto sorridente com olhos de coração")
                        };
                        return a.createElement(g, {
                            key: t.description,
                            emoji: t,
                            onClick: e => this.triggerEmoji(t)
                        })
                    })) : null))
                }
                render() {
                    return a.createElement(l.lk, {
                        title: "Emojis",
                        onClose: () => metapress.menubar.closePanel()
                    }, a.createElement(m.Um, {
                        onSearch: e => this.onSearch(e)
                    }), a.createElement("div", {
                        style: {
                            overflowY: "scroll",
                            height: "calc(100% - 71px)",
                            padding: 5
                        }
                    }, this.state.searchText.length > 0 ? this.renderSearch() : this.renderEmojis()))
                }
            }
            const g = e => a.createElement("div", {
                title: e.emoji.description,
                onClick: t => e.onClick(e.emoji),
                style: {
                    display: "inline-block",
                    width: 52,
                    height: 52,
                    fontSize: 30,
                    fontFamily: "monospace",
                    textAlign: "center",
                    cursor: "pointer",
                    margin: 5
                }
            }, e.emoji.emoji);
            class y {
                id = "core.ui.emojis";
                name = "Emoji Plugin";
                description = "Allows the user to use animated emojis.";
                requires = ["backend", "avatars", "menubar", "entities", "messaging", "renderer", "animation", "render:animation", "modifier:animator", "modifier:avatar-animations"];
                provides = ["emojis"];
                onLoad() {
                    metapress.entities.add({
                        id: "emojis.menu",
                        type: "menubar.item",
                        name: "Emojis",
                        description: "Lets you perform emoji animations.",
                        is_panel: !0,
                        icon: i(2520),
                        onClick: () => this.toggleUI()
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/laugh.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.laugh"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/cry.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.cry"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/thumbsup.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.thumbsup"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/party.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.party"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/love.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.love"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/mindblown.fbx"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.mindblown"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/dance.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.dance"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/salute.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.salute"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/sing.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.sing"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/rock.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.rock"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/raise.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.raise"
                    }), metapress.entities.add({
                        type: "animation",
                        url: metapress.backend.getAsset("emoji-animations/wave.glb"),
                        animation_cache_priority: 1,
                        animation_name_override: "core.human.wave"
                    })
                }
                toggleUI() {
                    metapress.menubar.toggleReactPanel("emojis.menu", (() => a.createElement(u, {
                        plugin: this
                    })))
                }
                triggerEmoji(e) {
                    if (!e) return;
                    let t = {
                            x: metapress.avatars.currentUserEntity.x,
                            y: metapress.avatars.currentUserEntity.y,
                            z: metapress.avatars.currentUserEntity.z
                        },
                        i = (0, r.Z)();
                    metapress.messaging.send("global", "emoji:msg", {
                        username: "Guest",
                        emoji: e.emoji,
                        description: e.description,
                        id: i,
                        position: t
                    }), this.onEmojiIncoming({
                        data: {
                            username: "Guest",
                            emoji: e.emoji,
                            description: e.description,
                            id: i,
                            position: t
                        }
                    });
                    let a = c.find((t => t.emoji == e.emoji));
                    a ? this.animateUser({
                        data: {
                            username: "Guest",
                            emoji: a.emoji,
                            description: a.description,
                            id: i,
                            position: t
                        }
                    }) : this.animateUser({
                        data: {
                            username: "Guest",
                            emoji: e.emoji,
                            description: e.description,
                            id: i,
                            position: t
                        }
                    }), metapress.menubar.closePanel()
                }
                $onIncomingMessage(e) {
                    "emoji:msg" != e.name || this.onEmojiIncoming(e)
                }
                async onEmojiIncoming(e) {
                    if (!e?.data?.emoji || !e?.data?.position) return;
                    let t = e?.data?.emoji,
                        i = o.Z.get(t, {
                            author: "apple",
                            size: 64,
                            type: "png"
                        }),
                        a = null;
                    const n = (new THREE.TextureLoader).load(i);
                    a = new THREE.SpriteMaterial({
                        map: n
                    }), this.handleEmoji(e, 0, 2, 2500, 0, a), this.handleEmoji(e, .55, 1.51, 2e3, 1e3, a), this.handleEmoji(e, .45, -1.42, 1500, 500, a), this.handleEmoji(e, .3, 1.6, 1500, 1e3, a), this.handleEmoji(e, .22, -1.75, 1e3, 1500, a), this.handleEmoji(e, .15, 1.88, 2e3, 1e3, a), this.handleEmoji(e, .08, -2, 2e3, 500, a)
                }
                async handleEmoji(e, t, i, a, n, o) {
                    let r = await this.create(e, o);
                    r && (await Promise.all([this.animate({
                        property: "scaleX",
                        entity: r,
                        value: .8 - t,
                        duration: a,
                        delay: n
                    }, t, i), this.animate({
                        property: "scaleY",
                        entity: r,
                        value: .8 - t,
                        duration: a,
                        delay: n
                    }, t, i), this.animate({
                        property: "positionY",
                        entity: r,
                        value: r.position.y + Math.abs(i) / 1.5,
                        duration: a,
                        delay: n
                    }, t, i), this.animate({
                        property: "positionX",
                        entity: r,
                        value: r.position.x + i * t,
                        duration: a,
                        delay: n
                    }, t, i), this.animate({
                        property: "positionZ",
                        entity: r,
                        value: r.position.z + i * t / 10,
                        duration: a,
                        delay: n
                    }, t), this.animate({
                        property: "opacity",
                        entity: r,
                        value: 1,
                        delay: n,
                        duration: a
                    }, t)]), metapress.renderer.scene.remove(r))
                }
                async create(e, t) {
                    let i = e?.data?.position,
                        a = new THREE.Vector3(i.x, i.y + 1.55, i.z),
                        n = new THREE.Vector3;
                    metapress.renderer.camera.getWorldDirection(n), n.set(a.x, a.y, a.z);
                    let o = null;
                    return o = new THREE.Sprite(t), o.position.set(n.x, n.y, n.z), o.scale.set(0, 0, 0), o.material.opacity = 1, metapress.renderer.scene.add(o), o
                }
                async animate(e) {
                    let t = e.duration || 2e3,
                        i = e.entity,
                        a = null;
                    switch (e.property) {
                        case "positionX":
                            a = new n.ZP.Tween(i.position).to({
                                x: e.value
                            }, t);
                            break;
                        case "positionY":
                            a = new n.ZP.Tween(i.position).to({
                                y: e.value
                            }, t);
                            break;
                        case "positionZ":
                            a = new n.ZP.Tween(i.position).to({
                                z: e.value
                            }, t);
                            break;
                        case "scaleX":
                            a = new n.ZP.Tween(i.scale).to({
                                x: e.value
                            }, t);
                            break;
                        case "scaleY":
                            a = new n.ZP.Tween(i.scale).to({
                                y: e.value
                            }, t);
                            break;
                        case "scaleZ":
                            a = new n.ZP.Tween(i.scale).to({
                                z: e.value
                            }, t);
                            break;
                        case "opacity":
                            a = new n.ZP.Tween(i.material).to({
                                opacity: e.value
                            }, 1e3)
                    }
                    e.delay && (a = a.delay(e.delay)), await new Promise((e => {
                        a = a.onComplete((t => {
                            e()
                        })), a = a.start()
                    }))
                }
                async animateUser(e) {
                    let t = e?.data?.description;
                    if (!t) return;
                    let i = metapress.avatar.currentUserEntity.id,
                        a = metapress.entities.getModifier(i, "avatar-controller");
                    a && await a.overrideAnimation({
                        animation: t,
                        pauseAtEnd: !1,
                        interruptOnMovement: !0
                    })
                }
                ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:sendEmoji`,
                    type: "action",
                    name: "Send emoji",
                    tags: "send emoji, show emoji, display emoji, present emoji, animate emoji, send emote, avatar animation",
                    content: `\n                Assistant instruction: Run this action when the user wants to display an emote or avatar animation. The 'value' is the emoji to present. Any emoji can be used, though certain emojis have avatar animations associated with them:\n                ${c.map((e=>`- ${e.emoji} - ${e.description}`)).join("\n")}\n            `,
                    action: e => {
                        let t = d.find((t => t.emoji == e.value));
                        if (!t) throw new Error(`Emoji '${e.value}' not found.`);
                        return this.triggerEmoji(t), "Success"
                    }
                }]
            }
        },
        40313: (e, t, i) => {
            e.exports = i.p + "mp-core/chevron-down.cc1880a489f70d445894.svg"
        },
        65141: (e, t, i) => {
            e.exports = i.p + "mp-core/chevron-right.4d67e59ffa9deea58f42.svg"
        },
        83203: (e, t, i) => {
            e.exports = i.p + "mp-core/icon-info.7ffb0c7f21d06d441b00.svg"
        },
        86029: (e, t, i) => {
            e.exports = i.p + "mp-core/icon-unknown.c9a47daeb41c69cd7c2b.svg"
        },
        3272: (e, t, i) => {
            e.exports = i.p + "mp-core/trash-can.a6dd95456040e25648a2.svg"
        },
        2520: (e, t, i) => {
            e.exports = i.p + "mp-core/icon.5387bc7a752dd0b42064.svg"
        }
    }
]);