"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [5101], {
        45101: (e, t, a) => {
            a.r(t), a.d(t, {
                default: () => v
            });
            var n = a(8838),
                r = a(99477);
            class i extends r.ShaderMaterial {
                lastFrame = Date.now();
                static get unknownPortalTexture() {
                    return i._unknownPortalTexture || (i._unknownPortalTexture = (new r.TextureLoader).load(a(55647))), i._unknownPortalTexture
                }
                constructor() {
                    super({
                        transparent: !0,
                        side: r.DoubleSide,
                        vertexShader: o,
                        fragmentShader: s,
                        uniforms: r.UniformsUtils.merge([r.UniformsLib.fog, {
                            iResolution: {
                                value: new r.Vector2(1024, 1024)
                            },
                            iTime: {
                                value: 0
                            },
                            iTimeDelta: {
                                value: 0
                            },
                            iTimeGlobal: {
                                value: 0
                            },
                            iFrame: {
                                value: 0
                            },
                            iMouse: {
                                value: new r.Vector4
                            }
                        }, {
                            tPortalDestination: {
                                value: i.unknownPortalTexture
                            }
                        }])
                    })
                }
                get portalTexture() {
                    return this.uniforms.tPortalDestination.value
                }
                set portalTexture(e) {
                    this.uniforms.tPortalDestination.value = e
                }
                onBeforeRender(e, t, a, n, r, i) {
                    super.onBeforeRender(e, t, a, n, r, i);
                    let o = Date.now(),
                        s = Math.min(1e3, o - this.lastFrame) / 1e3;
                    this.lastFrame = o, this.uniforms.iTime.value += s, this.uniforms.iTimeGlobal.value += s, this.uniforms.iTimeDelta.value = s, this.uniforms.iFrame.value += 1
                }
            }
            const o = `\n        \n    // Stuff to pass to the fragment shader\n    varying vec3 vNormal;\n    varying vec2 vUv;\n    varying vec3 vPosition;\n    varying vec4 vWorldPosition;\n    varying vec3 vCameraPosition;\n\n    // Main code\n    void main() {\n\n        // Pass values to fragment shader\n        vNormal = normal;\n        vUv = uv;\n        vPosition = position;\n        vWorldPosition = modelMatrix * vec4(position, 1.0);\n        vCameraPosition = cameraPosition;\n\n        // THREE.js code\n        ${r.ShaderChunk.begin_vertex}\n        ${r.ShaderChunk.project_vertex}    // <-- Sets gl_Position\n\n    }\n\n`,
                s = "\n\n    // Uniforms we add automatically\n    uniform vec2 iResolution;\n    uniform float iTime;\n    uniform float iTimeDelta;\n    uniform float iTimeGlobal;\n    uniform int iFrame;\n    uniform vec4 iMouse;\n    uniform sampler2D tPortalDestination;\n\n    // Stuff we received from the vertex shader\n    varying vec3 vNormal;\n    varying vec2 vUv;\n    varying vec3 vPosition;\n    varying vec4 vWorldPosition;\n    varying vec3 vCameraPosition;\n\n    // Voronoi Portal\n    // Voronoi Variation + Fractional Brownian Motion\n    // By: Brandon Fogerty\n    // bfogerty at gmail dot com\n    // xdpixel.com\n    // Adapted from: https://www.shadertoy.com/view/4tsSWs\n    \n    #ifdef GL_ES\n    precision mediump float;\n    #endif\n    \n    uniform float time;\n    uniform vec2 mouse;\n    uniform vec2 resolution;\n    \n    vec2 hash( vec2 p )\n    {\n        mat2 m = mat2( 15.32, 83.43,\n                        117.38, 289.59 );\n        \n        return fract( sin( m * p) * 46783.289 );\n    }\n    \n    float voronoi( vec2 p )\n    {\n        vec2 g = floor( p );\n        vec2 f = fract( p );\n        \n        float distanceFromPointToCloestFeaturePoint = 1.0;\n        for( int y = -1; y <= 1; ++y )\n        {\n            for( int x = -1; x <= 1; ++x )\n            {\n                vec2 latticePoint = vec2( x, y );\n                float h = distance( latticePoint + hash( g + latticePoint), f );\n            \n            distanceFromPointToCloestFeaturePoint = min( distanceFromPointToCloestFeaturePoint, h ); \n            }\n        }\n        \n        return 1.0 - sin(distanceFromPointToCloestFeaturePoint);\n    }\n    \n    float texture(vec2 uv )\n    {\n        float t = voronoi( uv * 8.0 + vec2(iTime) );\n        t *= 1.0-length(uv * 2.0);\n        \n        return t;\n    }\n    \n    float fbm( vec2 uv )\n    {\n        float sum = 0.00;\n        float amp = 1.0;\n        \n        for( int i = 0; i < 4; ++i )\n        {\n            sum += texture( uv ) * amp;\n            uv += uv;\n            amp *= 0.8;\n        }\n        \n        return sum;\n    }\n\n    // Clamp function\n    #define clamp(val, min, max) (val > max ? max : (val < min ? min : val))\n    \n    // Main code\n    void mainImage(out vec4 fragColor, in vec2 fragCoord) {\n        \n        // Generate portal effect\n        vec2 uv = ( fragCoord.xy / iResolution.xy ) * 2.0 - 1.0;\n        uv.x *= iResolution.x / iResolution.y;\n    \n        float t = pow( fbm( uv * 0.3 ), 2.0);\n        float portalEffect = clamp(1.0 - t, 0.0, 1.0);\n\n        // Calculate circle of visibility in the center\n        float distanceFromCenter = clamp(1.0 - distance(uv, vec2(0.0, 0.0)) * 1.0, 0.0, 1.0);\n        float innerCircle = clamp(distanceFromCenter * 2.0, 0.0, 1.0);\n        if (innerCircle < 0.9) innerCircle = 0.0;\n\n        // Alpha is the most visible between the inner circle and the texture effect\n        float alpha = max(portalEffect, innerCircle);\n        if (alpha < 0.01)\n            discard;\n\n        // Apply portal texture with a bit of a wobble\n        float wobbleX = sin(iTimeGlobal * 1.0) * 0.01;\n        float wobbleY = sin(iTimeGlobal * 0.9) * 0.01;\n        fragColor = texture2D(tPortalDestination, fragCoord.xy / iResolution.xy + vec2(wobbleX, wobbleY));\n        \n        // Apply transparency\n        fragColor.a = alpha;\n        \n    }\n\n    // Converts a color from sRGB gamma to linear light gamma\n    // From: https://gamedev.stackexchange.com/a/194038/161525\n    vec4 toLinear(vec4 sRGB) {\n        bvec3 cutoff = lessThan(sRGB.rgb, vec3(0.04045));\n        vec3 higher = pow((sRGB.rgb + vec3(0.055))/vec3(1.055), vec3(2.4));\n        vec3 lower = sRGB.rgb/vec3(12.92);\n        return vec4(mix(higher, lower, cutoff), sRGB.a);\n    }\n\n    // Main code for ShaderToy mode\n    void main() {\n\n        // Call mainImage() in the provided shader\n        mainImage(gl_FragColor, vUv * 1024.0);\n\n        // Convert sRGB color space\n        gl_FragColor = toLinear(gl_FragColor);\n\n        // Done, do THREE.js shader code now\n    \n\n    }\n\n";
            var l, c, u = a(25108);

            function d(e, t, a) {
                return (d = function() {
                    function e(e, t) {
                        return function(n) {
                            ! function(e, t) {
                                if (e.v) throw new Error("attempted to call addInitializer after decoration was finished")
                            }(t), a(n, "An initializer"), e.push(n)
                        }
                    }

                    function t(t, a, n, r, i, o, s, l) {
                        var c;
                        switch (i) {
                            case 1:
                                c = "accessor";
                                break;
                            case 2:
                                c = "method";
                                break;
                            case 3:
                                c = "getter";
                                break;
                            case 4:
                                c = "setter";
                                break;
                            default:
                                c = "field"
                        }
                        var u, d, h = {
                                kind: c,
                                name: s ? "#" + a : a,
                                static: o,
                                private: s
                            },
                            f = {
                                v: !1
                            };
                        0 !== i && (h.addInitializer = e(r, f)), 0 === i ? s ? (u = n.get, d = n.set) : (u = function() {
                            return this[a]
                        }, d = function(e) {
                            this[a] = e
                        }) : 2 === i ? u = function() {
                            return n.value
                        } : (1 !== i && 3 !== i || (u = function() {
                            return n.get.call(this)
                        }), 1 !== i && 4 !== i || (d = function(e) {
                            n.set.call(this, e)
                        })), h.access = u && d ? {
                            get: u,
                            set: d
                        } : u ? {
                            get: u
                        } : {
                            set: d
                        };
                        try {
                            return t(l, h)
                        } finally {
                            f.v = !0
                        }
                    }

                    function a(e, t) {
                        if ("function" != typeof e) throw new TypeError(t + " must be a function")
                    }

                    function n(e, t) {
                        var n = typeof t;
                        if (1 === e) {
                            if ("object" !== n || null === t) throw new TypeError("accessor decorators must return an object with get, set, or init properties or void 0");
                            void 0 !== t.get && a(t.get, "accessor.get"), void 0 !== t.set && a(t.set, "accessor.set"), void 0 !== t.init && a(t.init, "accessor.init")
                        } else if ("function" !== n) throw new TypeError((0 === e ? "field" : 10 === e ? "class" : "method") + " decorators must return a function or void 0")
                    }

                    function r(e, a, r, i, o, s, l, c) {
                        var u, d, h, f, m, p, v = r[0];
                        if (l ? u = 0 === o || 1 === o ? {
                                get: r[3],
                                set: r[4]
                            } : 3 === o ? {
                                get: r[3]
                            } : 4 === o ? {
                                set: r[3]
                            } : {
                                value: r[3]
                            } : 0 !== o && (u = Object.getOwnPropertyDescriptor(a, i)), 1 === o ? h = {
                                get: u.get,
                                set: u.set
                            } : 2 === o ? h = u.value : 3 === o ? h = u.get : 4 === o && (h = u.set), "function" == typeof v) void 0 !== (f = t(v, i, u, c, o, s, l, h)) && (n(o, f), 0 === o ? d = f : 1 === o ? (d = f.init, m = f.get || h.get, p = f.set || h.set, h = {
                            get: m,
                            set: p
                        }) : h = f);
                        else
                            for (var g = v.length - 1; g >= 0; g--) {
                                var y;
                                void 0 !== (f = t(v[g], i, u, c, o, s, l, h)) && (n(o, f), 0 === o ? y = f : 1 === o ? (y = f.init, m = f.get || h.get, p = f.set || h.set, h = {
                                    get: m,
                                    set: p
                                }) : h = f, void 0 !== y && (void 0 === d ? d = y : "function" == typeof d ? d = [d, y] : d.push(y)))
                            }
                        if (0 === o || 1 === o) {
                            if (void 0 === d) d = function(e, t) {
                                return t
                            };
                            else if ("function" != typeof d) {
                                var w = d;
                                d = function(e, t) {
                                    for (var a = t, n = 0; n < w.length; n++) a = w[n].call(e, a);
                                    return a
                                }
                            } else {
                                var b = d;
                                d = function(e, t) {
                                    return b.call(e, t)
                                }
                            }
                            e.push(d)
                        }
                        0 !== o && (1 === o ? (u.get = h.get, u.set = h.set) : 2 === o ? u.value = h : 3 === o ? u.get = h : 4 === o && (u.set = h), l ? 1 === o ? (e.push((function(e, t) {
                            return h.get.call(e, t)
                        })), e.push((function(e, t) {
                            return h.set.call(e, t)
                        }))) : 2 === o ? e.push(h) : e.push((function(e, t) {
                            return h.call(e, t)
                        })) : Object.defineProperty(a, i, u))
                    }

                    function i(e, t) {
                        for (var a, n, i = [], s = new Map, l = new Map, c = 0; c < t.length; c++) {
                            var u = t[c];
                            if (Array.isArray(u)) {
                                var d, h, f = u[1],
                                    m = u[2],
                                    p = u.length > 3,
                                    v = f >= 5;
                                if (v ? (d = e, 0 != (f -= 5) && (h = n = n || [])) : (d = e.prototype, 0 !== f && (h = a = a || [])), 0 !== f && !p) {
                                    var g = v ? l : s,
                                        y = g.get(m) || 0;
                                    if (!0 === y || 3 === y && 4 !== f || 4 === y && 3 !== f) throw new Error("Attempted to decorate a public method/accessor that has the same name as a previously decorated public method/accessor. This is not currently supported by the decorators plugin. Property name was: " + m);
                                    !y && f > 2 ? g.set(m, f) : g.set(m, !0)
                                }
                                r(i, d, u, m, f, v, p, h)
                            }
                        }
                        return o(i, a), o(i, n), i
                    }

                    function o(e, t) {
                        t && e.push((function(e) {
                            for (var a = 0; a < t.length; a++) t[a].call(e);
                            return e
                        }))
                    }
                    return function(t, a, r) {
                        return {
                            e: i(t, a),
                            get c() {
                                return function(t, a) {
                                    if (a.length > 0) {
                                        for (var r = [], i = t, o = t.name, s = a.length - 1; s >= 0; s--) {
                                            var l = {
                                                v: !1
                                            };
                                            try {
                                                var c = a[s](i, {
                                                    kind: "class",
                                                    name: o,
                                                    addInitializer: e(r, l)
                                                })
                                            } finally {
                                                l.v = !0
                                            }
                                            void 0 !== c && (n(10, c), i = c)
                                        }
                                        return [i, function() {
                                            for (var e = 0; e < r.length; e++) r[e].call(i)
                                        }]
                                    }
                                }(t, r)
                            }
                        }
                    }
                }())(e, t, a)
            }
            l = (0, n.dI)("[MetaPress > Portals] Failed to get portal info.");
            class h {
                static {
                    [c] = d(this, [
                        [l, 2, "updatePortal"]
                    ], []).e
                }
                constructor(...e) {
                    c(this)
                }
                name = "Portal";
                icon = a(21083);
                provides = ["material"];
                hidden = !0;
                effectMap = {};
                get settings() {
                    let e = metapress.plugins.callAll("portal_effects").flat().filter((e => !!e.id && !!e.value && "default" != e.value)),
                        t = [],
                        a = [];
                    for (let n of e) this.effectMap[n.id] = n, t.push(n.label || n.value), a.push(n.value);
                    return t.unshift("None"), a.unshift("none"), this.effectMap.none = {
                        id: "none",
                        value: "none",
                        label: "None"
                    }, t.unshift("Default"), a.unshift("default"), this.effectMap.default = {
                        id: "default",
                        value: "default",
                        label: "Default"
                    }, [{
                        type: "description",
                        name: "Allows users to travel between metaverses."
                    }, {
                        type: "text",
                        id: "portal_url",
                        name: "URL",
                        help: "A user will navigate to this URL when entering the portal."
                    }, {
                        type: "file",
                        id: "portal_img",
                        name: "Image",
                        allowClear: !0,
                        help: "Image to show as the portal. Leave blank to show the destination URL image, or default image if no other image exists."
                    }, {
                        type: "select",
                        id: "effect_type",
                        name: "Effect",
                        labels: t,
                        values: a,
                        default: "default",
                        help: "Type of effect to show for the portal."
                    }, {
                        type: "checkbox",
                        id: "disable_click",
                        name: "Disable on click",
                        help: "When enabled, the portal will be trigger when a user clicks on it."
                    }, {
                        type: "checkbox",
                        id: "collide",
                        name: "Enable on collision",
                        help: "When enabled, the portal will be trigger when a user collides with it. Physics needs to be enabled on the object."
                    }]
                }
                metadata = {};
                checkTimer = null;
                busy = !1;
                async onLoad() {
                    if (!this.renderer.object?.isMesh) throw new Error("Unable to attach PostModifier to a non-mesh entity.");
                    this.portalMaterial = new i, this.renderer.object.material = this.portalMaterial, this.updatePortal(), this.checkTimer = setInterval((() => this.check()), 1e3)
                }
                onUnload() {
                    this.checkTimer && clearInterval(this.checkTimer), this.checkTimer = null
                }
                onEntityEdited() {
                    this.updateTimer && clearTimeout(this.updateTimer), this.updateTimer = setTimeout((() => {
                        this.updateTimer = null, this.updatePortal()
                    }), 1e3)
                }
                async getImage() {
                    let e = this.entity.portal_img || this.metadata["metaverse:portal.image"] || this.metadata["og:image"] || this.metadata["twitter:image"] || this.metadata.image || a(55647);
                    return await new Promise(((t, a) => {
                        let n = new Image;
                        n.crossOrigin = "anonymous", n.src = e, n.onload = () => t(n), n.onerror = () => a(new Error("Failed to load portal image."))
                    }))
                }
                getTexture(e) {
                    if (e.width != e.height || e.width > 512 || e.height > 512) {
                        let t = document.createElement("canvas"),
                            a = t.getContext("2d");
                        t.width = 512, t.height = 512;
                        let n = Math.max(t.width / e.width, t.height / e.height),
                            r = t.width / 2 - e.width / 2 * n,
                            i = t.height / 2 - e.height / 2 * n;
                        return a.drawImage(e, r, i, e.width * n, e.height * n), new THREE.CanvasTexture(t)
                    }
                    return (new THREE.TextureLoader).load(e.src)
                }
                getMaterialForEffect(e) {
                    const t = this.entity.effect_type || "default";
                    if ("none" === t) return new THREE.MeshBasicMaterial({
                        map: e,
                        side: THREE.DoubleSide
                    });
                    if ("default" === t) return this.portalMaterial;
                    let a = this.effectMap[t]?.material;
                    return a?.texture && (a.texture = e), a || (u.warn('[PortalModifier] Unable to find material for effect "' + t + '", falling back to default...'), a = this.portalMaterial), a
                }
                async updatePortalMaterial() {
                    let e = await this.getImage(),
                        t = this.getTexture(e);
                    this.portalMaterial.portalTexture = t, this.renderer.object.material = this.getMaterialForEffect(t), this.renderer.object.material.map && (this.renderer.object.material.map.colorSpace = THREE.SRGBColorSpace)
                }
                async updatePortal() {
                    this.metadata = {}, await this.updatePortalMaterial(), this.entity.portal_url && (this.metadata = await metapress.portals.getMetadataFromURL(this.entity.portal_url), await this.updatePortalMaterial())
                }
                async onClick() {
                    this.entity.disable_click || await this.enterPortal()
                }
                async check() {
                    if (!this.busy) {
                        this.busy = !0;
                        try {
                            await this.checkIteration()
                        } catch (e) {
                            u.error("[PortalModifier]", e)
                        }
                        this.busy = !1
                    }
                }
                async checkIteration() {
                    if (this.didEnterPortal || !this.entity.collide) return;
                    metapress.entities.getModifier(this.entity.id, "physics") || (metapress.entities.update(this.entity.id, {
                        "modifier:physics": !0
                    }), this.entity.physics_fixed = !0, this.entity.physics_enabled = !0, this.entity.physics_shape = "mesh");
                    let e = null,
                        t = null;
                    for (let a of metapress.entities.modifiers)
                        if (a.entity?.id == this.entity.id && "physics" == a.id && (e = a), a.entity?.id == metapress.avatars.currentUserEntity.id && "physics" == a.id && (t = a), e && t) break;
                    if (!e?.colliders || e.colliders.length < 1 || !t?.colliders || t.colliders.length < 1) return;
                    let a = e.colliders[0].contactCollider(t.colliders[0], .1),
                        n = metapress.avatars.currentUserEntity && Math.sqrt((this.entity.x - metapress.avatars.currentUserEntity.x) ** 2 + (this.entity.y - metapress.avatars.currentUserEntity.y) ** 2 + (this.entity.z - metapress.avatars.currentUserEntity.z) ** 2) < 2;
                    a && n && await this.enterPortal()
                }
                async enterPortal() {
                    if (!this.entity.portal_url) return metapress.menubar.toasts.show({
                        id: "portal.status",
                        text: "Portal has no destination set."
                    });
                    metapress.menubar.toasts.show({
                        id: "portal.status",
                        text: "Entering " + (this.entity.name || this.entity.id)
                    });
                    let e = this.metadata["metaverse:portal.url"] ? new URL(this.metadata["metaverse:portal.url"], this.entity.portal_url).toString() : this.entity.portal_url,
                        t = {
                            portal_url: e
                        };
                    if (await metapress.plugins.callAllAsync("portals_prepareTransfer", t), this.metadata["metaverse:portal.url"]) {
                        let a = e.indexOf("#"); - 1 != a && (e = e.substr(0, a)), e += "#mp.portal:" + btoa(JSON.stringify(t))
                    }
                    this.didEnterPortal = !0, window.parent.location.href = e
                }
            }
            var f = a(87600),
                m = a.n(f),
                p = a(25108);
            class v {
                id = "core.misc.portals";
                name = "Portals";
                description = "Allows the user to travel between metaverses.";
                requires = ["avatars", "backend"];
                provides = ["portals", "modifier:portal"];
                createModifier() {
                    return new h
                }
                $editor_getAddableEntities = () => [{
                    id: "portal",
                    name: "Portal",
                    icon: a(21083),
                    description: "Allows users to travel between metaverses.",
                    action: e => this.addPortal()
                }];
                addPortal() {
                    let e = new THREE.Vector3,
                        t = new THREE.Vector3;
                    metapress.renderer.camera.getWorldPosition(e), metapress.renderer.camera.getWorldDirection(t), t.setLength(2), t.add(new THREE.Vector3(0, 1, 0).cross(t).setLength(1)), t.add(e);
                    let a = metapress.entities.add({
                        type: "plane",
                        name: "Portal",
                        sync: "template",
                        x: t.x,
                        y: t.y,
                        z: t.z,
                        doublesided: !0,
                        "modifier:portal": !0
                    });
                    metapress.editor.selectionManager.select(a.id)
                }
                async getMetadataFromURL(e) {
                    try {
                        return await m()(e)
                    } catch (t) {
                        return await metapress.backend.callApi("/portal/getMetadata", {
                            url: e
                        })
                    }
                }
                $loader_beforeLoadEntities() {
                    if (window.location.hash.startsWith("#mp.portal:")) try {
                        let e = window.location.hash.substring(11);
                        window.location.hash = "";
                        let t = JSON.parse(atob(e));
                        p.debug("[Portals] Received portal transfer:", t), metapress.plugins.sendEvent("portals_receiveTransfer", t)
                    } catch (e) {
                        p.warn("[Portals] Error while receiving portal transfer:", e)
                    }
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:info`,
                    type: "info",
                    name: "Portal information",
                    tags: "portal, portals, travel",
                    content: '\n                Portals can be used to travel between metaverse worlds. To create a portal, add a "Portal" entity from the editor.\n                \n                ## Developer information - don\'t describe unless the user is a developer\n                To define a MetaPress Core or non-MetaPress URL as a portal target, specify the following tags in the page header:\n                <meta name="metaverse:portal.url" content="." />\n                <meta name="metaverse:portal.image" content="./portal.png" />\n                <meta name="metaverse:portal.discoverable" content="true" />\n            '
                }]
            }
        },
        8838: (e, t, a) => {
            a.d(t, {
                dI: () => i,
                j8: () => r
            });
            var n = a(25108);

            function r(e) {
                let t = null;
                return function(...a) {
                    let n = this,
                        r = t;
                    return t = async function() {
                        return await (r?.catch((() => null))), await e.apply(n, a)
                    }(), t
                }
            }

            function i(e) {
                return function(t) {
                    return async function(...a) {
                        try {
                            return await t.apply(this, a)
                        } catch (t) {
                            return e ? n.warn(e, t) : n.warn(t), null
                        }
                    }
                }
            }
        },
        21083: (e, t, a) => {
            e.exports = a.p + "mp-core/portal.18b3a08fb7fb77d74010.svg"
        },
        55647: (e, t, a) => {
            e.exports = a.p + "mp-core/unknown.0a7d9d561559f05ca0fc.png"
        }
    }
]);