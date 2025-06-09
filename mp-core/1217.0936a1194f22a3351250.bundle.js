"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [1217], {
        1217: (e, t, s) => {
            s.d(t, {
                E: () => o
            });
            var n = s(99477),
                r = s(40140),
                i = s(25108);
            class o extends n.Loader {
                constructor(e) {
                    super(e), this.dracoLoader = null, this.ktx2Loader = null, this.meshoptDecoder = null, this.pluginCallbacks = [], this.register((function(e) {
                        return new d(e)
                    })), this.register((function(e) {
                        return new p(e)
                    })), this.register((function(e) {
                        return new E(e)
                    })), this.register((function(e) {
                        return new v(e)
                    })), this.register((function(e) {
                        return new S(e)
                    })), this.register((function(e) {
                        return new f(e)
                    })), this.register((function(e) {
                        return new A(e)
                    })), this.register((function(e) {
                        return new g(e)
                    })), this.register((function(e) {
                        return new T(e)
                    })), this.register((function(e) {
                        return new h(e)
                    })), this.register((function(e) {
                        return new x(e)
                    })), this.register((function(e) {
                        return new m(e)
                    })), this.register((function(e) {
                        return new _(e)
                    })), this.register((function(e) {
                        return new R(e)
                    })), this.register((function(e) {
                        return new l(e)
                    })), this.register((function(e) {
                        return new M(e)
                    })), this.register((function(e) {
                        return new L(e)
                    }))
                }
                load(e, t, s, r) {
                    const o = this;
                    let a;
                    if ("" !== this.resourcePath) a = this.resourcePath;
                    else if ("" !== this.path) {
                        const t = n.LoaderUtils.extractUrlBase(e);
                        a = n.LoaderUtils.resolveURL(t, this.path)
                    } else a = n.LoaderUtils.extractUrlBase(e);
                    this.manager.itemStart(e);
                    const c = function(t) {
                            r ? r(t) : i.error(t), o.manager.itemError(e), o.manager.itemEnd(e)
                        },
                        l = new n.FileLoader(this.manager);
                    l.setPath(this.path), l.setResponseType("arraybuffer"), l.setRequestHeader(this.requestHeader), l.setWithCredentials(this.withCredentials), l.load(e, (function(s) {
                        try {
                            o.parse(s, a, (function(s) {
                                t(s), o.manager.itemEnd(e)
                            }), c)
                        } catch (e) {
                            c(e)
                        }
                    }), s, c)
                }
                setDRACOLoader(e) {
                    return this.dracoLoader = e, this
                }
                setDDSLoader() {
                    throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".')
                }
                setKTX2Loader(e) {
                    return this.ktx2Loader = e, this
                }
                setMeshoptDecoder(e) {
                    return this.meshoptDecoder = e, this
                }
                register(e) {
                    return -1 === this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.push(e), this
                }
                unregister(e) {
                    return -1 !== this.pluginCallbacks.indexOf(e) && this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(e), 1), this
                }
                parse(e, t, s, n) {
                    let r;
                    const o = {},
                        a = {},
                        l = new TextDecoder;
                    if ("string" == typeof e) r = JSON.parse(e);
                    else if (e instanceof ArrayBuffer)
                        if (l.decode(new Uint8Array(e, 0, 4)) === w) {
                            try {
                                o[c.KHR_BINARY_GLTF] = new y(e)
                            } catch (e) {
                                return void(n && n(e))
                            }
                            r = JSON.parse(o[c.KHR_BINARY_GLTF].content)
                        } else r = JSON.parse(l.decode(e));
                    else r = e;
                    if (void 0 === r.asset || r.asset.version[0] < 2) return void(n && n(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported.")));
                    const h = new Y(r, {
                        path: t || this.resourcePath || "",
                        crossOrigin: this.crossOrigin,
                        requestHeader: this.requestHeader,
                        manager: this.manager,
                        ktx2Loader: this.ktx2Loader,
                        meshoptDecoder: this.meshoptDecoder
                    });
                    h.fileLoader.setRequestHeader(this.requestHeader);
                    for (let e = 0; e < this.pluginCallbacks.length; e++) {
                        const t = this.pluginCallbacks[e](h);
                        t.name || i.error("THREE.GLTFLoader: Invalid plugin found: missing name"), a[t.name] = t, o[t.name] = !0
                    }
                    if (r.extensionsUsed)
                        for (let e = 0; e < r.extensionsUsed.length; ++e) {
                            const t = r.extensionsUsed[e],
                                s = r.extensionsRequired || [];
                            switch (t) {
                                case c.KHR_MATERIALS_UNLIT:
                                    o[t] = new u;
                                    break;
                                case c.KHR_DRACO_MESH_COMPRESSION:
                                    o[t] = new I(r, this.dracoLoader);
                                    break;
                                case c.KHR_TEXTURE_TRANSFORM:
                                    o[t] = new b;
                                    break;
                                case c.KHR_MESH_QUANTIZATION:
                                    o[t] = new C;
                                    break;
                                default:
                                    s.indexOf(t) >= 0 && void 0 === a[t] && i.warn('THREE.GLTFLoader: Unknown extension "' + t + '".')
                            }
                        }
                    h.setExtensions(o), h.setPlugins(a), h.parse(s, n)
                }
                parseAsync(e, t) {
                    const s = this;
                    return new Promise((function(n, r) {
                        s.parse(e, t, n, r)
                    }))
                }
            }

            function a() {
                let e = {};
                return {
                    get: function(t) {
                        return e[t]
                    },
                    add: function(t, s) {
                        e[t] = s
                    },
                    remove: function(t) {
                        delete e[t]
                    },
                    removeAll: function() {
                        e = {}
                    }
                }
            }
            const c = {
                KHR_BINARY_GLTF: "KHR_binary_glTF",
                KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
                KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
                KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
                KHR_MATERIALS_DISPERSION: "KHR_materials_dispersion",
                KHR_MATERIALS_IOR: "KHR_materials_ior",
                KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
                KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
                KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
                KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
                KHR_MATERIALS_ANISOTROPY: "KHR_materials_anisotropy",
                KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
                KHR_MATERIALS_VOLUME: "KHR_materials_volume",
                KHR_TEXTURE_BASISU: "KHR_texture_basisu",
                KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
                KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
                KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
                EXT_MATERIALS_BUMP: "EXT_materials_bump",
                EXT_TEXTURE_WEBP: "EXT_texture_webp",
                EXT_TEXTURE_AVIF: "EXT_texture_avif",
                EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
                EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
            };
            class l {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_LIGHTS_PUNCTUAL, this.cache = {
                        refs: {},
                        uses: {}
                    }
                }
                _markDefs() {
                    const e = this.parser,
                        t = this.parser.json.nodes || [];
                    for (let s = 0, n = t.length; s < n; s++) {
                        const n = t[s];
                        n.extensions && n.extensions[this.name] && void 0 !== n.extensions[this.name].light && e._addNodeRef(this.cache, n.extensions[this.name].light)
                    }
                }
                _loadLight(e) {
                    const t = this.parser,
                        s = "light:" + e;
                    let r = t.cache.get(s);
                    if (r) return r;
                    const i = t.json,
                        o = ((i.extensions && i.extensions[this.name] || {}).lights || [])[e];
                    let a;
                    const c = new n.Color(16777215);
                    void 0 !== o.color && c.setRGB(o.color[0], o.color[1], o.color[2], n.LinearSRGBColorSpace);
                    const l = void 0 !== o.range ? o.range : 0;
                    switch (o.type) {
                        case "directional":
                            a = new n.DirectionalLight(c), a.target.position.set(0, 0, -1), a.add(a.target);
                            break;
                        case "point":
                            a = new n.PointLight(c), a.distance = l;
                            break;
                        case "spot":
                            a = new n.SpotLight(c), a.distance = l, o.spot = o.spot || {}, o.spot.innerConeAngle = void 0 !== o.spot.innerConeAngle ? o.spot.innerConeAngle : 0, o.spot.outerConeAngle = void 0 !== o.spot.outerConeAngle ? o.spot.outerConeAngle : Math.PI / 4, a.angle = o.spot.outerConeAngle, a.penumbra = 1 - o.spot.innerConeAngle / o.spot.outerConeAngle, a.target.position.set(0, 0, -1), a.add(a.target);
                            break;
                        default:
                            throw new Error("THREE.GLTFLoader: Unexpected light type: " + o.type)
                    }
                    return a.position.set(0, 0, 0), a.decay = 2, V(a, o), void 0 !== o.intensity && (a.intensity = o.intensity), a.name = t.createUniqueName(o.name || "light_" + e), r = Promise.resolve(a), t.cache.add(s, r), r
                }
                getDependency(e, t) {
                    if ("light" === e) return this._loadLight(t)
                }
                createNodeAttachment(e) {
                    const t = this,
                        s = this.parser,
                        n = s.json.nodes[e],
                        r = (n.extensions && n.extensions[this.name] || {}).light;
                    return void 0 === r ? null : this._loadLight(r).then((function(e) {
                        return s._getNodeRef(t.cache, r, e)
                    }))
                }
            }
            class u {
                constructor() {
                    this.name = c.KHR_MATERIALS_UNLIT
                }
                getMaterialType() {
                    return n.MeshBasicMaterial
                }
                extendParams(e, t, s) {
                    const r = [];
                    e.color = new n.Color(1, 1, 1), e.opacity = 1;
                    const i = t.pbrMetallicRoughness;
                    if (i) {
                        if (Array.isArray(i.baseColorFactor)) {
                            const t = i.baseColorFactor;
                            e.color.setRGB(t[0], t[1], t[2], n.LinearSRGBColorSpace), e.opacity = t[3]
                        }
                        void 0 !== i.baseColorTexture && r.push(s.assignTexture(e, "map", i.baseColorTexture, n.SRGBColorSpace))
                    }
                    return Promise.all(r)
                }
            }
            class h {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_EMISSIVE_STRENGTH
                }
                extendMaterialParams(e, t) {
                    const s = this.parser.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    const n = s.extensions[this.name].emissiveStrength;
                    return void 0 !== n && (t.emissiveIntensity = n), Promise.resolve()
                }
            }
            class d {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_CLEARCOAT
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    const i = [],
                        o = r.extensions[this.name];
                    if (void 0 !== o.clearcoatFactor && (t.clearcoat = o.clearcoatFactor), void 0 !== o.clearcoatTexture && i.push(s.assignTexture(t, "clearcoatMap", o.clearcoatTexture)), void 0 !== o.clearcoatRoughnessFactor && (t.clearcoatRoughness = o.clearcoatRoughnessFactor), void 0 !== o.clearcoatRoughnessTexture && i.push(s.assignTexture(t, "clearcoatRoughnessMap", o.clearcoatRoughnessTexture)), void 0 !== o.clearcoatNormalTexture && (i.push(s.assignTexture(t, "clearcoatNormalMap", o.clearcoatNormalTexture)), void 0 !== o.clearcoatNormalTexture.scale)) {
                        const e = o.clearcoatNormalTexture.scale;
                        t.clearcoatNormalScale = new n.Vector2(e, e)
                    }
                    return Promise.all(i)
                }
            }
            class p {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_DISPERSION
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    const n = s.extensions[this.name];
                    return t.dispersion = void 0 !== n.dispersion ? n.dispersion : 0, Promise.resolve()
                }
            }
            class m {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_IRIDESCENCE
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    const r = [],
                        i = n.extensions[this.name];
                    return void 0 !== i.iridescenceFactor && (t.iridescence = i.iridescenceFactor), void 0 !== i.iridescenceTexture && r.push(s.assignTexture(t, "iridescenceMap", i.iridescenceTexture)), void 0 !== i.iridescenceIor && (t.iridescenceIOR = i.iridescenceIor), void 0 === t.iridescenceThicknessRange && (t.iridescenceThicknessRange = [100, 400]), void 0 !== i.iridescenceThicknessMinimum && (t.iridescenceThicknessRange[0] = i.iridescenceThicknessMinimum), void 0 !== i.iridescenceThicknessMaximum && (t.iridescenceThicknessRange[1] = i.iridescenceThicknessMaximum), void 0 !== i.iridescenceThicknessTexture && r.push(s.assignTexture(t, "iridescenceThicknessMap", i.iridescenceThicknessTexture)), Promise.all(r)
                }
            }
            class f {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_SHEEN
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    const i = [];
                    t.sheenColor = new n.Color(0, 0, 0), t.sheenRoughness = 0, t.sheen = 1;
                    const o = r.extensions[this.name];
                    if (void 0 !== o.sheenColorFactor) {
                        const e = o.sheenColorFactor;
                        t.sheenColor.setRGB(e[0], e[1], e[2], n.LinearSRGBColorSpace)
                    }
                    return void 0 !== o.sheenRoughnessFactor && (t.sheenRoughness = o.sheenRoughnessFactor), void 0 !== o.sheenColorTexture && i.push(s.assignTexture(t, "sheenColorMap", o.sheenColorTexture, n.SRGBColorSpace)), void 0 !== o.sheenRoughnessTexture && i.push(s.assignTexture(t, "sheenRoughnessMap", o.sheenRoughnessTexture)), Promise.all(i)
                }
            }
            class A {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_TRANSMISSION
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    const r = [],
                        i = n.extensions[this.name];
                    return void 0 !== i.transmissionFactor && (t.transmission = i.transmissionFactor), void 0 !== i.transmissionTexture && r.push(s.assignTexture(t, "transmissionMap", i.transmissionTexture)), Promise.all(r)
                }
            }
            class g {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_VOLUME
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    const i = [],
                        o = r.extensions[this.name];
                    t.thickness = void 0 !== o.thicknessFactor ? o.thicknessFactor : 0, void 0 !== o.thicknessTexture && i.push(s.assignTexture(t, "thicknessMap", o.thicknessTexture)), t.attenuationDistance = o.attenuationDistance || 1 / 0;
                    const a = o.attenuationColor || [1, 1, 1];
                    return t.attenuationColor = (new n.Color).setRGB(a[0], a[1], a[2], n.LinearSRGBColorSpace), Promise.all(i)
                }
            }
            class T {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_IOR
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser.json.materials[e];
                    if (!s.extensions || !s.extensions[this.name]) return Promise.resolve();
                    const n = s.extensions[this.name];
                    return t.ior = void 0 !== n.ior ? n.ior : 1.5, Promise.resolve()
                }
            }
            class x {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_SPECULAR
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser,
                        r = s.json.materials[e];
                    if (!r.extensions || !r.extensions[this.name]) return Promise.resolve();
                    const i = [],
                        o = r.extensions[this.name];
                    t.specularIntensity = void 0 !== o.specularFactor ? o.specularFactor : 1, void 0 !== o.specularTexture && i.push(s.assignTexture(t, "specularIntensityMap", o.specularTexture));
                    const a = o.specularColorFactor || [1, 1, 1];
                    return t.specularColor = (new n.Color).setRGB(a[0], a[1], a[2], n.LinearSRGBColorSpace), void 0 !== o.specularColorTexture && i.push(s.assignTexture(t, "specularColorMap", o.specularColorTexture, n.SRGBColorSpace)), Promise.all(i)
                }
            }
            class R {
                constructor(e) {
                    this.parser = e, this.name = c.EXT_MATERIALS_BUMP
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    const r = [],
                        i = n.extensions[this.name];
                    return t.bumpScale = void 0 !== i.bumpFactor ? i.bumpFactor : 1, void 0 !== i.bumpTexture && r.push(s.assignTexture(t, "bumpMap", i.bumpTexture)), Promise.all(r)
                }
            }
            class _ {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_MATERIALS_ANISOTROPY
                }
                getMaterialType(e) {
                    const t = this.parser.json.materials[e];
                    return t.extensions && t.extensions[this.name] ? n.MeshPhysicalMaterial : null
                }
                extendMaterialParams(e, t) {
                    const s = this.parser,
                        n = s.json.materials[e];
                    if (!n.extensions || !n.extensions[this.name]) return Promise.resolve();
                    const r = [],
                        i = n.extensions[this.name];
                    return void 0 !== i.anisotropyStrength && (t.anisotropy = i.anisotropyStrength), void 0 !== i.anisotropyRotation && (t.anisotropyRotation = i.anisotropyRotation), void 0 !== i.anisotropyTexture && r.push(s.assignTexture(t, "anisotropyMap", i.anisotropyTexture)), Promise.all(r)
                }
            }
            class E {
                constructor(e) {
                    this.parser = e, this.name = c.KHR_TEXTURE_BASISU
                }
                loadTexture(e) {
                    const t = this.parser,
                        s = t.json,
                        n = s.textures[e];
                    if (!n.extensions || !n.extensions[this.name]) return null;
                    const r = n.extensions[this.name],
                        i = t.options.ktx2Loader;
                    if (!i) {
                        if (s.extensionsRequired && s.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
                        return null
                    }
                    return t.loadTextureImage(e, r.source, i)
                }
            }
            class v {
                constructor(e) {
                    this.parser = e, this.name = c.EXT_TEXTURE_WEBP, this.isSupported = null
                }
                loadTexture(e) {
                    const t = this.name,
                        s = this.parser,
                        n = s.json,
                        r = n.textures[e];
                    if (!r.extensions || !r.extensions[t]) return null;
                    const i = r.extensions[t],
                        o = n.images[i.source];
                    let a = s.textureLoader;
                    if (o.uri) {
                        const e = s.options.manager.getHandler(o.uri);
                        null !== e && (a = e)
                    }
                    return this.detectSupport().then((function(r) {
                        if (r) return s.loadTextureImage(e, i.source, a);
                        if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
                        return s.loadTexture(e)
                    }))
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise((function(e) {
                        const t = new Image;
                        t.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    }))), this.isSupported
                }
            }
            class S {
                constructor(e) {
                    this.parser = e, this.name = c.EXT_TEXTURE_AVIF, this.isSupported = null
                }
                loadTexture(e) {
                    const t = this.name,
                        s = this.parser,
                        n = s.json,
                        r = n.textures[e];
                    if (!r.extensions || !r.extensions[t]) return null;
                    const i = r.extensions[t],
                        o = n.images[i.source];
                    let a = s.textureLoader;
                    if (o.uri) {
                        const e = s.options.manager.getHandler(o.uri);
                        null !== e && (a = e)
                    }
                    return this.detectSupport().then((function(r) {
                        if (r) return s.loadTextureImage(e, i.source, a);
                        if (n.extensionsRequired && n.extensionsRequired.indexOf(t) >= 0) throw new Error("THREE.GLTFLoader: AVIF required by asset but unsupported.");
                        return s.loadTexture(e)
                    }))
                }
                detectSupport() {
                    return this.isSupported || (this.isSupported = new Promise((function(e) {
                        const t = new Image;
                        t.src = "data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAABcAAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAEAAAABAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQAMAAAAABNjb2xybmNseAACAAIABoAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAAB9tZGF0EgAKCBgABogQEDQgMgkQAAAAB8dSLfI=", t.onload = t.onerror = function() {
                            e(1 === t.height)
                        }
                    }))), this.isSupported
                }
            }
            class M {
                constructor(e) {
                    this.name = c.EXT_MESHOPT_COMPRESSION, this.parser = e
                }
                loadBufferView(e) {
                    const t = this.parser.json,
                        s = t.bufferViews[e];
                    if (s.extensions && s.extensions[this.name]) {
                        const e = s.extensions[this.name],
                            n = this.parser.getDependency("buffer", e.buffer),
                            r = this.parser.options.meshoptDecoder;
                        if (!r || !r.supported) {
                            if (t.extensionsRequired && t.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                            return null
                        }
                        return n.then((function(t) {
                            const s = e.byteOffset || 0,
                                n = e.byteLength || 0,
                                i = e.count,
                                o = e.byteStride,
                                a = new Uint8Array(t, s, n);
                            return r.decodeGltfBufferAsync ? r.decodeGltfBufferAsync(i, o, a, e.mode, e.filter).then((function(e) {
                                return e.buffer
                            })) : r.ready.then((function() {
                                const t = new ArrayBuffer(i * o);
                                return r.decodeGltfBuffer(new Uint8Array(t), i, o, a, e.mode, e.filter), t
                            }))
                        }))
                    }
                    return null
                }
            }
            class L {
                constructor(e) {
                    this.name = c.EXT_MESH_GPU_INSTANCING, this.parser = e
                }
                createNodeMesh(e) {
                    const t = this.parser.json,
                        s = t.nodes[e];
                    if (!s.extensions || !s.extensions[this.name] || void 0 === s.mesh) return null;
                    const r = t.meshes[s.mesh];
                    for (const e of r.primitives)
                        if (e.mode !== H.TRIANGLES && e.mode !== H.TRIANGLE_STRIP && e.mode !== H.TRIANGLE_FAN && void 0 !== e.mode) return null;
                    const i = s.extensions[this.name].attributes,
                        o = [],
                        a = {};
                    for (const e in i) o.push(this.parser.getDependency("accessor", i[e]).then((t => (a[e] = t, a[e]))));
                    return o.length < 1 ? null : (o.push(this.parser.createNodeMesh(e)), Promise.all(o).then((e => {
                        const t = e.pop(),
                            s = t.isGroup ? t.children : [t],
                            r = e[0].count,
                            i = [];
                        for (const e of s) {
                            const t = new n.Matrix4,
                                s = new n.Vector3,
                                o = new n.Quaternion,
                                c = new n.Vector3(1, 1, 1),
                                l = new n.InstancedMesh(e.geometry, e.material, r);
                            for (let e = 0; e < r; e++) a.TRANSLATION && s.fromBufferAttribute(a.TRANSLATION, e), a.ROTATION && o.fromBufferAttribute(a.ROTATION, e), a.SCALE && c.fromBufferAttribute(a.SCALE, e), l.setMatrixAt(e, t.compose(s, o, c));
                            for (const t in a)
                                if ("_COLOR_0" === t) {
                                    const e = a[t];
                                    l.instanceColor = new n.InstancedBufferAttribute(e.array, e.itemSize, e.normalized)
                                } else "TRANSLATION" !== t && "ROTATION" !== t && "SCALE" !== t && e.geometry.setAttribute(t, a[t]);
                            n.Object3D.prototype.copy.call(l, e), this.parser.assignFinalMaterial(l), i.push(l)
                        }
                        return t.isGroup ? (t.clear(), t.add(...i), t) : i[0]
                    })))
                }
            }
            const w = "glTF";
            class y {
                constructor(e) {
                    this.name = c.KHR_BINARY_GLTF, this.content = null, this.body = null;
                    const t = new DataView(e, 0, 12),
                        s = new TextDecoder;
                    if (this.header = {
                            magic: s.decode(new Uint8Array(e.slice(0, 4))),
                            version: t.getUint32(4, !0),
                            length: t.getUint32(8, !0)
                        }, this.header.magic !== w) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
                    if (this.header.version < 2) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
                    const n = this.header.length - 12,
                        r = new DataView(e, 12);
                    let i = 0;
                    for (; i < n;) {
                        const t = r.getUint32(i, !0);
                        i += 4;
                        const n = r.getUint32(i, !0);
                        if (i += 4, 1313821514 === n) {
                            const n = new Uint8Array(e, 12 + i, t);
                            this.content = s.decode(n)
                        } else if (5130562 === n) {
                            const s = 12 + i;
                            this.body = e.slice(s, s + t)
                        }
                        i += t
                    }
                    if (null === this.content) throw new Error("THREE.GLTFLoader: JSON content not found.")
                }
            }
            class I {
                constructor(e, t) {
                    if (!t) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
                    this.name = c.KHR_DRACO_MESH_COMPRESSION, this.json = e, this.dracoLoader = t, this.dracoLoader.preload()
                }
                decodePrimitive(e, t) {
                    const s = this.json,
                        r = this.dracoLoader,
                        i = e.extensions[this.name].bufferView,
                        o = e.extensions[this.name].attributes,
                        a = {},
                        c = {},
                        l = {};
                    for (const e in o) {
                        const t = G[e] || e.toLowerCase();
                        a[t] = o[e]
                    }
                    for (const t in e.attributes) {
                        const n = G[t] || t.toLowerCase();
                        if (void 0 !== o[t]) {
                            const r = s.accessors[e.attributes[t]],
                                i = F[r.componentType];
                            l[n] = i.name, c[n] = !0 === r.normalized
                        }
                    }
                    return t.getDependency("bufferView", i).then((function(e) {
                        return new Promise((function(t, s) {
                            r.decodeDracoFile(e, (function(e) {
                                for (const t in e.attributes) {
                                    const s = e.attributes[t],
                                        n = c[t];
                                    void 0 !== n && (s.normalized = n)
                                }
                                t(e)
                            }), a, l, n.LinearSRGBColorSpace, s)
                        }))
                    }))
                }
            }
            class b {
                constructor() {
                    this.name = c.KHR_TEXTURE_TRANSFORM
                }
                extendTexture(e, t) {
                    return void 0 !== t.texCoord && t.texCoord !== e.channel || void 0 !== t.offset || void 0 !== t.rotation || void 0 !== t.scale ? (e = e.clone(), void 0 !== t.texCoord && (e.channel = t.texCoord), void 0 !== t.offset && e.offset.fromArray(t.offset), void 0 !== t.rotation && (e.rotation = t.rotation), void 0 !== t.scale && e.repeat.fromArray(t.scale), e.needsUpdate = !0, e) : e
                }
            }
            class C {
                constructor() {
                    this.name = c.KHR_MESH_QUANTIZATION
                }
            }
            class N extends n.Interpolant {
                constructor(e, t, s, n) {
                    super(e, t, s, n)
                }
                copySampleValue_(e) {
                    const t = this.resultBuffer,
                        s = this.sampleValues,
                        n = this.valueSize,
                        r = e * n * 3 + n;
                    for (let e = 0; e !== n; e++) t[e] = s[r + e];
                    return t
                }
                interpolate_(e, t, s, n) {
                    const r = this.resultBuffer,
                        i = this.sampleValues,
                        o = this.valueSize,
                        a = 2 * o,
                        c = 3 * o,
                        l = n - t,
                        u = (s - t) / l,
                        h = u * u,
                        d = h * u,
                        p = e * c,
                        m = p - c,
                        f = -2 * d + 3 * h,
                        A = d - h,
                        g = 1 - f,
                        T = A - h + u;
                    for (let e = 0; e !== o; e++) {
                        const t = i[m + e + o],
                            s = i[m + e + a] * l,
                            n = i[p + e + o],
                            c = i[p + e] * l;
                        r[e] = g * t + T * s + f * n + A * c
                    }
                    return r
                }
            }
            const O = new n.Quaternion;
            class P extends N {
                interpolate_(e, t, s, n) {
                    const r = super.interpolate_(e, t, s, n);
                    return O.fromArray(r).normalize().toArray(r), r
                }
            }
            const H = {
                    FLOAT: 5126,
                    FLOAT_MAT3: 35675,
                    FLOAT_MAT4: 35676,
                    FLOAT_VEC2: 35664,
                    FLOAT_VEC3: 35665,
                    FLOAT_VEC4: 35666,
                    LINEAR: 9729,
                    REPEAT: 10497,
                    SAMPLER_2D: 35678,
                    POINTS: 0,
                    LINES: 1,
                    LINE_LOOP: 2,
                    LINE_STRIP: 3,
                    TRIANGLES: 4,
                    TRIANGLE_STRIP: 5,
                    TRIANGLE_FAN: 6,
                    UNSIGNED_BYTE: 5121,
                    UNSIGNED_SHORT: 5123
                },
                F = {
                    5120: Int8Array,
                    5121: Uint8Array,
                    5122: Int16Array,
                    5123: Uint16Array,
                    5125: Uint32Array,
                    5126: Float32Array
                },
                k = {
                    9728: n.NearestFilter,
                    9729: n.LinearFilter,
                    9984: n.NearestMipmapNearestFilter,
                    9985: n.LinearMipmapNearestFilter,
                    9986: n.NearestMipmapLinearFilter,
                    9987: n.LinearMipmapLinearFilter
                },
                B = {
                    33071: n.ClampToEdgeWrapping,
                    33648: n.MirroredRepeatWrapping,
                    10497: n.RepeatWrapping
                },
                D = {
                    SCALAR: 1,
                    VEC2: 2,
                    VEC3: 3,
                    VEC4: 4,
                    MAT2: 4,
                    MAT3: 9,
                    MAT4: 16
                },
                G = {
                    POSITION: "position",
                    NORMAL: "normal",
                    TANGENT: "tangent",
                    TEXCOORD_0: "uv",
                    TEXCOORD_1: "uv1",
                    TEXCOORD_2: "uv2",
                    TEXCOORD_3: "uv3",
                    COLOR_0: "color",
                    WEIGHTS_0: "skinWeight",
                    JOINTS_0: "skinIndex"
                },
                U = {
                    scale: "scale",
                    translation: "position",
                    rotation: "quaternion",
                    weights: "morphTargetInfluences"
                },
                K = {
                    CUBICSPLINE: void 0,
                    LINEAR: n.InterpolateLinear,
                    STEP: n.InterpolateDiscrete
                };

            function j(e, t, s) {
                for (const n in s.extensions) void 0 === e[n] && (t.userData.gltfExtensions = t.userData.gltfExtensions || {}, t.userData.gltfExtensions[n] = s.extensions[n])
            }

            function V(e, t) {
                void 0 !== t.extras && ("object" == typeof t.extras ? Object.assign(e.userData, t.extras) : i.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + t.extras))
            }

            function X(e, t) {
                if (e.updateMorphTargets(), void 0 !== t.weights)
                    for (let s = 0, n = t.weights.length; s < n; s++) e.morphTargetInfluences[s] = t.weights[s];
                if (t.extras && Array.isArray(t.extras.targetNames)) {
                    const s = t.extras.targetNames;
                    if (e.morphTargetInfluences.length === s.length) {
                        e.morphTargetDictionary = {};
                        for (let t = 0, n = s.length; t < n; t++) e.morphTargetDictionary[s[t]] = t
                    } else i.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.")
                }
            }

            function q(e) {
                let t;
                const s = e.extensions && e.extensions[c.KHR_DRACO_MESH_COMPRESSION];
                if (t = s ? "draco:" + s.bufferView + ":" + s.indices + ":" + z(s.attributes) : e.indices + ":" + z(e.attributes) + ":" + e.mode, void 0 !== e.targets)
                    for (let s = 0, n = e.targets.length; s < n; s++) t += ":" + z(e.targets[s]);
                return t
            }

            function z(e) {
                let t = "";
                const s = Object.keys(e).sort();
                for (let n = 0, r = s.length; n < r; n++) t += s[n] + ":" + e[s[n]] + ";";
                return t
            }

            function W(e) {
                switch (e) {
                    case Int8Array:
                        return 1 / 127;
                    case Uint8Array:
                        return 1 / 255;
                    case Int16Array:
                        return 1 / 32767;
                    case Uint16Array:
                        return 1 / 65535;
                    default:
                        throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.")
                }
            }
            const Q = new n.Matrix4;
            class Y {
                constructor(e = {}, t = {}) {
                    this.json = e, this.extensions = {}, this.plugins = {}, this.options = t, this.cache = new a, this.associations = new Map, this.primitiveCache = {}, this.nodeCache = {}, this.meshCache = {
                        refs: {},
                        uses: {}
                    }, this.cameraCache = {
                        refs: {},
                        uses: {}
                    }, this.lightCache = {
                        refs: {},
                        uses: {}
                    }, this.sourceCache = {}, this.textureCache = {}, this.nodeNamesUsed = {};
                    let s = !1,
                        r = !1,
                        i = -1;
                    "undefined" != typeof navigator && (s = !0 === /^((?!chrome|android).)*safari/i.test(navigator.userAgent), r = navigator.userAgent.indexOf("Firefox") > -1, i = r ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1), "undefined" == typeof createImageBitmap || s || r && i < 98 ? this.textureLoader = new n.TextureLoader(this.options.manager) : this.textureLoader = new n.ImageBitmapLoader(this.options.manager), this.textureLoader.setCrossOrigin(this.options.crossOrigin), this.textureLoader.setRequestHeader(this.options.requestHeader), this.fileLoader = new n.FileLoader(this.options.manager), this.fileLoader.setResponseType("arraybuffer"), "use-credentials" === this.options.crossOrigin && this.fileLoader.setWithCredentials(!0)
                }
                setExtensions(e) {
                    this.extensions = e
                }
                setPlugins(e) {
                    this.plugins = e
                }
                parse(e, t) {
                    const s = this,
                        n = this.json,
                        r = this.extensions;
                    this.cache.removeAll(), this.nodeCache = {}, this._invokeAll((function(e) {
                        return e._markDefs && e._markDefs()
                    })), Promise.all(this._invokeAll((function(e) {
                        return e.beforeRoot && e.beforeRoot()
                    }))).then((function() {
                        return Promise.all([s.getDependencies("scene"), s.getDependencies("animation"), s.getDependencies("camera")])
                    })).then((function(t) {
                        const i = {
                            scene: t[0][n.scene || 0],
                            scenes: t[0],
                            animations: t[1],
                            cameras: t[2],
                            asset: n.asset,
                            parser: s,
                            userData: {}
                        };
                        return j(r, i, n), V(i, n), Promise.all(s._invokeAll((function(e) {
                            return e.afterRoot && e.afterRoot(i)
                        }))).then((function() {
                            for (const e of i.scenes) e.updateMatrixWorld();
                            e(i)
                        }))
                    })).catch(t)
                }
                _markDefs() {
                    const e = this.json.nodes || [],
                        t = this.json.skins || [],
                        s = this.json.meshes || [];
                    for (let s = 0, n = t.length; s < n; s++) {
                        const n = t[s].joints;
                        for (let t = 0, s = n.length; t < s; t++) e[n[t]].isBone = !0
                    }
                    for (let t = 0, n = e.length; t < n; t++) {
                        const n = e[t];
                        void 0 !== n.mesh && (this._addNodeRef(this.meshCache, n.mesh), void 0 !== n.skin && (s[n.mesh].isSkinnedMesh = !0)), void 0 !== n.camera && this._addNodeRef(this.cameraCache, n.camera)
                    }
                }
                _addNodeRef(e, t) {
                    void 0 !== t && (void 0 === e.refs[t] && (e.refs[t] = e.uses[t] = 0), e.refs[t]++)
                }
                _getNodeRef(e, t, s) {
                    if (e.refs[t] <= 1) return s;
                    const n = s.clone(),
                        r = (e, t) => {
                            const s = this.associations.get(e);
                            null != s && this.associations.set(t, s);
                            for (const [s, n] of e.children.entries()) r(n, t.children[s])
                        };
                    return r(s, n), n.name += "_instance_" + e.uses[t]++, n
                }
                _invokeOne(e) {
                    const t = Object.values(this.plugins);
                    t.push(this);
                    for (let s = 0; s < t.length; s++) {
                        const n = e(t[s]);
                        if (n) return n
                    }
                    return null
                }
                _invokeAll(e) {
                    const t = Object.values(this.plugins);
                    t.unshift(this);
                    const s = [];
                    for (let n = 0; n < t.length; n++) {
                        const r = e(t[n]);
                        r && s.push(r)
                    }
                    return s
                }
                getDependency(e, t) {
                    const s = e + ":" + t;
                    let n = this.cache.get(s);
                    if (!n) {
                        switch (e) {
                            case "scene":
                                n = this.loadScene(t);
                                break;
                            case "node":
                                n = this._invokeOne((function(e) {
                                    return e.loadNode && e.loadNode(t)
                                }));
                                break;
                            case "mesh":
                                n = this._invokeOne((function(e) {
                                    return e.loadMesh && e.loadMesh(t)
                                }));
                                break;
                            case "accessor":
                                n = this.loadAccessor(t);
                                break;
                            case "bufferView":
                                n = this._invokeOne((function(e) {
                                    return e.loadBufferView && e.loadBufferView(t)
                                }));
                                break;
                            case "buffer":
                                n = this.loadBuffer(t);
                                break;
                            case "material":
                                n = this._invokeOne((function(e) {
                                    return e.loadMaterial && e.loadMaterial(t)
                                }));
                                break;
                            case "texture":
                                n = this._invokeOne((function(e) {
                                    return e.loadTexture && e.loadTexture(t)
                                }));
                                break;
                            case "skin":
                                n = this.loadSkin(t);
                                break;
                            case "animation":
                                n = this._invokeOne((function(e) {
                                    return e.loadAnimation && e.loadAnimation(t)
                                }));
                                break;
                            case "camera":
                                n = this.loadCamera(t);
                                break;
                            default:
                                if (n = this._invokeOne((function(s) {
                                        return s != this && s.getDependency && s.getDependency(e, t)
                                    })), !n) throw new Error("Unknown type: " + e)
                        }
                        this.cache.add(s, n)
                    }
                    return n
                }
                getDependencies(e) {
                    let t = this.cache.get(e);
                    if (!t) {
                        const s = this,
                            n = this.json[e + ("mesh" === e ? "es" : "s")] || [];
                        t = Promise.all(n.map((function(t, n) {
                            return s.getDependency(e, n)
                        }))), this.cache.add(e, t)
                    }
                    return t
                }
                loadBuffer(e) {
                    const t = this.json.buffers[e],
                        s = this.fileLoader;
                    if (t.type && "arraybuffer" !== t.type) throw new Error("THREE.GLTFLoader: " + t.type + " buffer type is not supported.");
                    if (void 0 === t.uri && 0 === e) return Promise.resolve(this.extensions[c.KHR_BINARY_GLTF].body);
                    const r = this.options;
                    return new Promise((function(e, i) {
                        s.load(n.LoaderUtils.resolveURL(t.uri, r.path), e, void 0, (function() {
                            i(new Error('THREE.GLTFLoader: Failed to load buffer "' + t.uri + '".'))
                        }))
                    }))
                }
                loadBufferView(e) {
                    const t = this.json.bufferViews[e];
                    return this.getDependency("buffer", t.buffer).then((function(e) {
                        const s = t.byteLength || 0,
                            n = t.byteOffset || 0;
                        return e.slice(n, n + s)
                    }))
                }
                loadAccessor(e) {
                    const t = this,
                        s = this.json,
                        r = this.json.accessors[e];
                    if (void 0 === r.bufferView && void 0 === r.sparse) {
                        const e = D[r.type],
                            t = F[r.componentType],
                            s = !0 === r.normalized,
                            i = new t(r.count * e);
                        return Promise.resolve(new n.BufferAttribute(i, e, s))
                    }
                    const i = [];
                    return void 0 !== r.bufferView ? i.push(this.getDependency("bufferView", r.bufferView)) : i.push(null), void 0 !== r.sparse && (i.push(this.getDependency("bufferView", r.sparse.indices.bufferView)), i.push(this.getDependency("bufferView", r.sparse.values.bufferView))), Promise.all(i).then((function(e) {
                        const i = e[0],
                            o = D[r.type],
                            a = F[r.componentType],
                            c = a.BYTES_PER_ELEMENT,
                            l = c * o,
                            u = r.byteOffset || 0,
                            h = void 0 !== r.bufferView ? s.bufferViews[r.bufferView].byteStride : void 0,
                            d = !0 === r.normalized;
                        let p, m;
                        if (h && h !== l) {
                            const e = Math.floor(u / h),
                                s = "InterleavedBuffer:" + r.bufferView + ":" + r.componentType + ":" + e + ":" + r.count;
                            let l = t.cache.get(s);
                            l || (p = new a(i, e * h, r.count * h / c), l = new n.InterleavedBuffer(p, h / c), t.cache.add(s, l)), m = new n.InterleavedBufferAttribute(l, o, u % h / c, d)
                        } else p = null === i ? new a(r.count * o) : new a(i, u, r.count * o), m = new n.BufferAttribute(p, o, d);
                        if (void 0 !== r.sparse) {
                            const t = D.SCALAR,
                                s = F[r.sparse.indices.componentType],
                                c = r.sparse.indices.byteOffset || 0,
                                l = r.sparse.values.byteOffset || 0,
                                u = new s(e[1], c, r.sparse.count * t),
                                h = new a(e[2], l, r.sparse.count * o);
                            null !== i && (m = new n.BufferAttribute(m.array.slice(), m.itemSize, m.normalized));
                            for (let e = 0, t = u.length; e < t; e++) {
                                const t = u[e];
                                if (m.setX(t, h[e * o]), o >= 2 && m.setY(t, h[e * o + 1]), o >= 3 && m.setZ(t, h[e * o + 2]), o >= 4 && m.setW(t, h[e * o + 3]), o >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.")
                            }
                        }
                        return m
                    }))
                }
                loadTexture(e) {
                    const t = this.json,
                        s = this.options,
                        n = t.textures[e].source,
                        r = t.images[n];
                    let i = this.textureLoader;
                    if (r.uri) {
                        const e = s.manager.getHandler(r.uri);
                        null !== e && (i = e)
                    }
                    return this.loadTextureImage(e, n, i)
                }
                loadTextureImage(e, t, s) {
                    const r = this,
                        i = this.json,
                        o = i.textures[e],
                        a = i.images[t],
                        c = (a.uri || a.bufferView) + ":" + o.sampler;
                    if (this.textureCache[c]) return this.textureCache[c];
                    const l = this.loadImageSource(t, s).then((function(t) {
                        t.flipY = !1, t.name = o.name || a.name || "", "" === t.name && "string" == typeof a.uri && !1 === a.uri.startsWith("data:image/") && (t.name = a.uri);
                        const s = (i.samplers || {})[o.sampler] || {};
                        return t.magFilter = k[s.magFilter] || n.LinearFilter, t.minFilter = k[s.minFilter] || n.LinearMipmapLinearFilter, t.wrapS = B[s.wrapS] || n.RepeatWrapping, t.wrapT = B[s.wrapT] || n.RepeatWrapping, r.associations.set(t, {
                            textures: e
                        }), t
                    })).catch((function() {
                        return null
                    }));
                    return this.textureCache[c] = l, l
                }
                loadImageSource(e, t) {
                    const s = this.json,
                        r = this.options;
                    if (void 0 !== this.sourceCache[e]) return this.sourceCache[e].then((e => e.clone()));
                    const o = s.images[e],
                        a = self.URL || self.webkitURL;
                    let c = o.uri || "",
                        l = !1;
                    if (void 0 !== o.bufferView) c = this.getDependency("bufferView", o.bufferView).then((function(e) {
                        l = !0;
                        const t = new Blob([e], {
                            type: o.mimeType
                        });
                        return c = a.createObjectURL(t), c
                    }));
                    else if (void 0 === o.uri) throw new Error("THREE.GLTFLoader: Image " + e + " is missing URI and bufferView");
                    const u = Promise.resolve(c).then((function(e) {
                        return new Promise((function(s, i) {
                            let o = s;
                            !0 === t.isImageBitmapLoader && (o = function(e) {
                                const t = new n.Texture(e);
                                t.needsUpdate = !0, s(t)
                            }), t.load(n.LoaderUtils.resolveURL(e, r.path), o, void 0, i)
                        }))
                    })).then((function(e) {
                        var t;
                        return !0 === l && a.revokeObjectURL(c), e.userData.mimeType = o.mimeType || ((t = o.uri).search(/\.jpe?g($|\?)/i) > 0 || 0 === t.search(/^data\:image\/jpeg/) ? "image/jpeg" : t.search(/\.webp($|\?)/i) > 0 || 0 === t.search(/^data\:image\/webp/) ? "image/webp" : "image/png"), e
                    })).catch((function(e) {
                        throw i.error("THREE.GLTFLoader: Couldn't load texture", c), e
                    }));
                    return this.sourceCache[e] = u, u
                }
                assignTexture(e, t, s, n) {
                    const r = this;
                    return this.getDependency("texture", s.index).then((function(i) {
                        if (!i) return null;
                        if (void 0 !== s.texCoord && s.texCoord > 0 && ((i = i.clone()).channel = s.texCoord), r.extensions[c.KHR_TEXTURE_TRANSFORM]) {
                            const e = void 0 !== s.extensions ? s.extensions[c.KHR_TEXTURE_TRANSFORM] : void 0;
                            if (e) {
                                const t = r.associations.get(i);
                                i = r.extensions[c.KHR_TEXTURE_TRANSFORM].extendTexture(i, e), r.associations.set(i, t)
                            }
                        }
                        return void 0 !== n && (i.colorSpace = n), e[t] = i, i
                    }))
                }
                assignFinalMaterial(e) {
                    const t = e.geometry;
                    let s = e.material;
                    const r = void 0 === t.attributes.tangent,
                        i = void 0 !== t.attributes.color,
                        o = void 0 === t.attributes.normal;
                    if (e.isPoints) {
                        const e = "PointsMaterial:" + s.uuid;
                        let t = this.cache.get(e);
                        t || (t = new n.PointsMaterial, n.Material.prototype.copy.call(t, s), t.color.copy(s.color), t.map = s.map, t.sizeAttenuation = !1, this.cache.add(e, t)), s = t
                    } else if (e.isLine) {
                        const e = "LineBasicMaterial:" + s.uuid;
                        let t = this.cache.get(e);
                        t || (t = new n.LineBasicMaterial, n.Material.prototype.copy.call(t, s), t.color.copy(s.color), t.map = s.map, this.cache.add(e, t)), s = t
                    }
                    if (r || i || o) {
                        let e = "ClonedMaterial:" + s.uuid + ":";
                        r && (e += "derivative-tangents:"), i && (e += "vertex-colors:"), o && (e += "flat-shading:");
                        let t = this.cache.get(e);
                        t || (t = s.clone(), i && (t.vertexColors = !0), o && (t.flatShading = !0), r && (t.normalScale && (t.normalScale.y *= -1), t.clearcoatNormalScale && (t.clearcoatNormalScale.y *= -1)), this.cache.add(e, t), this.associations.set(t, this.associations.get(s))), s = t
                    }
                    e.material = s
                }
                getMaterialType() {
                    return n.MeshStandardMaterial
                }
                loadMaterial(e) {
                    const t = this,
                        s = this.json,
                        r = this.extensions,
                        i = s.materials[e];
                    let o;
                    const a = {},
                        l = [];
                    if ((i.extensions || {})[c.KHR_MATERIALS_UNLIT]) {
                        const e = r[c.KHR_MATERIALS_UNLIT];
                        o = e.getMaterialType(), l.push(e.extendParams(a, i, t))
                    } else {
                        const s = i.pbrMetallicRoughness || {};
                        if (a.color = new n.Color(1, 1, 1), a.opacity = 1, Array.isArray(s.baseColorFactor)) {
                            const e = s.baseColorFactor;
                            a.color.setRGB(e[0], e[1], e[2], n.LinearSRGBColorSpace), a.opacity = e[3]
                        }
                        void 0 !== s.baseColorTexture && l.push(t.assignTexture(a, "map", s.baseColorTexture, n.SRGBColorSpace)), a.metalness = void 0 !== s.metallicFactor ? s.metallicFactor : 1, a.roughness = void 0 !== s.roughnessFactor ? s.roughnessFactor : 1, void 0 !== s.metallicRoughnessTexture && (l.push(t.assignTexture(a, "metalnessMap", s.metallicRoughnessTexture)), l.push(t.assignTexture(a, "roughnessMap", s.metallicRoughnessTexture))), o = this._invokeOne((function(t) {
                            return t.getMaterialType && t.getMaterialType(e)
                        })), l.push(Promise.all(this._invokeAll((function(t) {
                            return t.extendMaterialParams && t.extendMaterialParams(e, a)
                        }))))
                    }!0 === i.doubleSided && (a.side = n.DoubleSide);
                    const u = i.alphaMode || "OPAQUE";
                    if ("BLEND" === u ? (a.transparent = !0, a.depthWrite = !1) : (a.transparent = !1, "MASK" === u && (a.alphaTest = void 0 !== i.alphaCutoff ? i.alphaCutoff : .5)), void 0 !== i.normalTexture && o !== n.MeshBasicMaterial && (l.push(t.assignTexture(a, "normalMap", i.normalTexture)), a.normalScale = new n.Vector2(1, 1), void 0 !== i.normalTexture.scale)) {
                        const e = i.normalTexture.scale;
                        a.normalScale.set(e, e)
                    }
                    if (void 0 !== i.occlusionTexture && o !== n.MeshBasicMaterial && (l.push(t.assignTexture(a, "aoMap", i.occlusionTexture)), void 0 !== i.occlusionTexture.strength && (a.aoMapIntensity = i.occlusionTexture.strength)), void 0 !== i.emissiveFactor && o !== n.MeshBasicMaterial) {
                        const e = i.emissiveFactor;
                        a.emissive = (new n.Color).setRGB(e[0], e[1], e[2], n.LinearSRGBColorSpace)
                    }
                    return void 0 !== i.emissiveTexture && o !== n.MeshBasicMaterial && l.push(t.assignTexture(a, "emissiveMap", i.emissiveTexture, n.SRGBColorSpace)), Promise.all(l).then((function() {
                        const s = new o(a);
                        return i.name && (s.name = i.name), V(s, i), t.associations.set(s, {
                            materials: e
                        }), i.extensions && j(r, s, i), s
                    }))
                }
                createUniqueName(e) {
                    const t = n.PropertyBinding.sanitizeNodeName(e || "");
                    return t in this.nodeNamesUsed ? t + "_" + ++this.nodeNamesUsed[t] : (this.nodeNamesUsed[t] = 0, t)
                }
                loadGeometries(e) {
                    const t = this,
                        s = this.extensions,
                        r = this.primitiveCache;

                    function i(e) {
                        return s[c.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(e, t).then((function(s) {
                            return Z(s, e, t)
                        }))
                    }
                    const o = [];
                    for (let s = 0, a = e.length; s < a; s++) {
                        const a = e[s],
                            l = q(a),
                            u = r[l];
                        if (u) o.push(u.promise);
                        else {
                            let e;
                            e = a.extensions && a.extensions[c.KHR_DRACO_MESH_COMPRESSION] ? i(a) : Z(new n.BufferGeometry, a, t), r[l] = {
                                primitive: a,
                                promise: e
                            }, o.push(e)
                        }
                    }
                    return Promise.all(o)
                }
                loadMesh(e) {
                    const t = this,
                        s = this.json,
                        i = this.extensions,
                        o = s.meshes[e],
                        a = o.primitives,
                        c = [];
                    for (let e = 0, t = a.length; e < t; e++) {
                        const t = void 0 === a[e].material ? (void 0 === (l = this.cache).DefaultMaterial && (l.DefaultMaterial = new n.MeshStandardMaterial({
                            color: 16777215,
                            emissive: 0,
                            metalness: 1,
                            roughness: 1,
                            transparent: !1,
                            depthTest: !0,
                            side: n.FrontSide
                        })), l.DefaultMaterial) : this.getDependency("material", a[e].material);
                        c.push(t)
                    }
                    var l;
                    return c.push(t.loadGeometries(a)), Promise.all(c).then((function(s) {
                        const c = s.slice(0, s.length - 1),
                            l = s[s.length - 1],
                            u = [];
                        for (let s = 0, h = l.length; s < h; s++) {
                            const h = l[s],
                                d = a[s];
                            let p;
                            const m = c[s];
                            if (d.mode === H.TRIANGLES || d.mode === H.TRIANGLE_STRIP || d.mode === H.TRIANGLE_FAN || void 0 === d.mode) p = !0 === o.isSkinnedMesh ? new n.SkinnedMesh(h, m) : new n.Mesh(h, m), !0 === p.isSkinnedMesh && p.normalizeSkinWeights(), d.mode === H.TRIANGLE_STRIP ? p.geometry = (0, r.Vs)(p.geometry, n.TriangleStripDrawMode) : d.mode === H.TRIANGLE_FAN && (p.geometry = (0, r.Vs)(p.geometry, n.TriangleFanDrawMode));
                            else if (d.mode === H.LINES) p = new n.LineSegments(h, m);
                            else if (d.mode === H.LINE_STRIP) p = new n.Line(h, m);
                            else if (d.mode === H.LINE_LOOP) p = new n.LineLoop(h, m);
                            else {
                                if (d.mode !== H.POINTS) throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + d.mode);
                                p = new n.Points(h, m)
                            }
                            Object.keys(p.geometry.morphAttributes).length > 0 && X(p, o), p.name = t.createUniqueName(o.name || "mesh_" + e), V(p, o), d.extensions && j(i, p, d), t.assignFinalMaterial(p), u.push(p)
                        }
                        for (let s = 0, n = u.length; s < n; s++) t.associations.set(u[s], {
                            meshes: e,
                            primitives: s
                        });
                        if (1 === u.length) return o.extensions && j(i, u[0], o), u[0];
                        const h = new n.Group;
                        o.extensions && j(i, h, o), t.associations.set(h, {
                            meshes: e
                        });
                        for (let e = 0, t = u.length; e < t; e++) h.add(u[e]);
                        return h
                    }))
                }
                loadCamera(e) {
                    let t;
                    const s = this.json.cameras[e],
                        r = s[s.type];
                    if (r) return "perspective" === s.type ? t = new n.PerspectiveCamera(n.MathUtils.radToDeg(r.yfov), r.aspectRatio || 1, r.znear || 1, r.zfar || 2e6) : "orthographic" === s.type && (t = new n.OrthographicCamera(-r.xmag, r.xmag, r.ymag, -r.ymag, r.znear, r.zfar)), s.name && (t.name = this.createUniqueName(s.name)), V(t, s), Promise.resolve(t);
                    i.warn("THREE.GLTFLoader: Missing camera parameters.")
                }
                loadSkin(e) {
                    const t = this.json.skins[e],
                        s = [];
                    for (let e = 0, n = t.joints.length; e < n; e++) s.push(this._loadNodeShallow(t.joints[e]));
                    return void 0 !== t.inverseBindMatrices ? s.push(this.getDependency("accessor", t.inverseBindMatrices)) : s.push(null), Promise.all(s).then((function(e) {
                        const s = e.pop(),
                            r = e,
                            o = [],
                            a = [];
                        for (let e = 0, c = r.length; e < c; e++) {
                            const c = r[e];
                            if (c) {
                                o.push(c);
                                const t = new n.Matrix4;
                                null !== s && t.fromArray(s.array, 16 * e), a.push(t)
                            } else i.warn('THREE.GLTFLoader: Joint "%s" could not be found.', t.joints[e])
                        }
                        return new n.Skeleton(o, a)
                    }))
                }
                loadAnimation(e) {
                    const t = this.json,
                        s = this,
                        r = t.animations[e],
                        i = r.name ? r.name : "animation_" + e,
                        o = [],
                        a = [],
                        c = [],
                        l = [],
                        u = [];
                    for (let e = 0, t = r.channels.length; e < t; e++) {
                        const t = r.channels[e],
                            s = r.samplers[t.sampler],
                            n = t.target,
                            i = n.node,
                            h = void 0 !== r.parameters ? r.parameters[s.input] : s.input,
                            d = void 0 !== r.parameters ? r.parameters[s.output] : s.output;
                        void 0 !== n.node && (o.push(this.getDependency("node", i)), a.push(this.getDependency("accessor", h)), c.push(this.getDependency("accessor", d)), l.push(s), u.push(n))
                    }
                    return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c), Promise.all(l), Promise.all(u)]).then((function(e) {
                        const t = e[0],
                            r = e[1],
                            o = e[2],
                            a = e[3],
                            c = e[4],
                            l = [];
                        for (let e = 0, n = t.length; e < n; e++) {
                            const n = t[e],
                                i = r[e],
                                u = o[e],
                                h = a[e],
                                d = c[e];
                            if (void 0 === n) continue;
                            n.updateMatrix && n.updateMatrix();
                            const p = s._createAnimationTracks(n, i, u, h, d);
                            if (p)
                                for (let e = 0; e < p.length; e++) l.push(p[e])
                        }
                        return new n.AnimationClip(i, void 0, l)
                    }))
                }
                createNodeMesh(e) {
                    const t = this.json,
                        s = this,
                        n = t.nodes[e];
                    return void 0 === n.mesh ? null : s.getDependency("mesh", n.mesh).then((function(e) {
                        const t = s._getNodeRef(s.meshCache, n.mesh, e);
                        return void 0 !== n.weights && t.traverse((function(e) {
                            if (e.isMesh)
                                for (let t = 0, s = n.weights.length; t < s; t++) e.morphTargetInfluences[t] = n.weights[t]
                        })), t
                    }))
                }
                loadNode(e) {
                    const t = this,
                        s = this.json.nodes[e],
                        n = t._loadNodeShallow(e),
                        r = [],
                        i = s.children || [];
                    for (let e = 0, s = i.length; e < s; e++) r.push(t.getDependency("node", i[e]));
                    const o = void 0 === s.skin ? Promise.resolve(null) : t.getDependency("skin", s.skin);
                    return Promise.all([n, Promise.all(r), o]).then((function(e) {
                        const t = e[0],
                            s = e[1],
                            n = e[2];
                        null !== n && t.traverse((function(e) {
                            e.isSkinnedMesh && e.bind(n, Q)
                        }));
                        for (let e = 0, n = s.length; e < n; e++) t.add(s[e]);
                        return t
                    }))
                }
                _loadNodeShallow(e) {
                    const t = this.json,
                        s = this.extensions,
                        r = this;
                    if (void 0 !== this.nodeCache[e]) return this.nodeCache[e];
                    const i = t.nodes[e],
                        o = i.name ? r.createUniqueName(i.name) : "",
                        a = [],
                        c = r._invokeOne((function(t) {
                            return t.createNodeMesh && t.createNodeMesh(e)
                        }));
                    return c && a.push(c), void 0 !== i.camera && a.push(r.getDependency("camera", i.camera).then((function(e) {
                        return r._getNodeRef(r.cameraCache, i.camera, e)
                    }))), r._invokeAll((function(t) {
                        return t.createNodeAttachment && t.createNodeAttachment(e)
                    })).forEach((function(e) {
                        a.push(e)
                    })), this.nodeCache[e] = Promise.all(a).then((function(t) {
                        let a;
                        if (a = !0 === i.isBone ? new n.Bone : t.length > 1 ? new n.Group : 1 === t.length ? t[0] : new n.Object3D, a !== t[0])
                            for (let e = 0, s = t.length; e < s; e++) a.add(t[e]);
                        if (i.name && (a.userData.name = i.name, a.name = o), V(a, i), i.extensions && j(s, a, i), void 0 !== i.matrix) {
                            const e = new n.Matrix4;
                            e.fromArray(i.matrix), a.applyMatrix4(e)
                        } else void 0 !== i.translation && a.position.fromArray(i.translation), void 0 !== i.rotation && a.quaternion.fromArray(i.rotation), void 0 !== i.scale && a.scale.fromArray(i.scale);
                        return r.associations.has(a) || r.associations.set(a, {}), r.associations.get(a).nodes = e, a
                    })), this.nodeCache[e]
                }
                loadScene(e) {
                    const t = this.extensions,
                        s = this.json.scenes[e],
                        r = this,
                        i = new n.Group;
                    s.name && (i.name = r.createUniqueName(s.name)), V(i, s), s.extensions && j(t, i, s);
                    const o = s.nodes || [],
                        a = [];
                    for (let e = 0, t = o.length; e < t; e++) a.push(r.getDependency("node", o[e]));
                    return Promise.all(a).then((function(e) {
                        for (let t = 0, s = e.length; t < s; t++) i.add(e[t]);
                        return r.associations = (e => {
                            const t = new Map;
                            for (const [e, s] of r.associations)(e instanceof n.Material || e instanceof n.Texture) && t.set(e, s);
                            return e.traverse((e => {
                                const s = r.associations.get(e);
                                null != s && t.set(e, s)
                            })), t
                        })(i), i
                    }))
                }
                _createAnimationTracks(e, t, s, r, i) {
                    const o = [],
                        a = e.name ? e.name : e.uuid,
                        c = [];
                    let l;
                    switch (U[i.path] === U.weights ? e.traverse((function(e) {
                            e.morphTargetInfluences && c.push(e.name ? e.name : e.uuid)
                        })) : c.push(a), U[i.path]) {
                        case U.weights:
                            l = n.NumberKeyframeTrack;
                            break;
                        case U.rotation:
                            l = n.QuaternionKeyframeTrack;
                            break;
                        case U.position:
                        case U.scale:
                            l = n.VectorKeyframeTrack;
                            break;
                        default:
                            l = 1 === s.itemSize ? n.NumberKeyframeTrack : n.VectorKeyframeTrack
                    }
                    const u = void 0 !== r.interpolation ? K[r.interpolation] : n.InterpolateLinear,
                        h = this._getArrayFromAccessor(s);
                    for (let e = 0, s = c.length; e < s; e++) {
                        const s = new l(c[e] + "." + U[i.path], t.array, h, u);
                        "CUBICSPLINE" === r.interpolation && this._createCubicSplineTrackInterpolant(s), o.push(s)
                    }
                    return o
                }
                _getArrayFromAccessor(e) {
                    let t = e.array;
                    if (e.normalized) {
                        const e = W(t.constructor),
                            s = new Float32Array(t.length);
                        for (let n = 0, r = t.length; n < r; n++) s[n] = t[n] * e;
                        t = s
                    }
                    return t
                }
                _createCubicSplineTrackInterpolant(e) {
                    e.createInterpolant = function(e) {
                        return new(this instanceof n.QuaternionKeyframeTrack ? P : N)(this.times, this.values, this.getValueSize() / 3, e)
                    }, e.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = !0
                }
            }

            function Z(e, t, s) {
                const r = t.attributes,
                    o = [];

                function a(t, n) {
                    return s.getDependency("accessor", t).then((function(t) {
                        e.setAttribute(n, t)
                    }))
                }
                for (const t in r) {
                    const s = G[t] || t.toLowerCase();
                    s in e.attributes || o.push(a(r[t], s))
                }
                if (void 0 !== t.indices && !e.index) {
                    const n = s.getDependency("accessor", t.indices).then((function(t) {
                        e.setIndex(t)
                    }));
                    o.push(n)
                }
                return n.ColorManagement.workingColorSpace !== n.LinearSRGBColorSpace && "COLOR_0" in r && i.warn(`THREE.GLTFLoader: Converting vertex colors from "srgb-linear" to "${n.ColorManagement.workingColorSpace}" not supported.`), V(e, t),
                    function(e, t, s) {
                        const r = t.attributes,
                            o = new n.Box3;
                        if (void 0 === r.POSITION) return;
                        {
                            const e = s.json.accessors[r.POSITION],
                                t = e.min,
                                a = e.max;
                            if (void 0 === t || void 0 === a) return void i.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
                            if (o.set(new n.Vector3(t[0], t[1], t[2]), new n.Vector3(a[0], a[1], a[2])), e.normalized) {
                                const t = W(F[e.componentType]);
                                o.min.multiplyScalar(t), o.max.multiplyScalar(t)
                            }
                        }
                        const a = t.targets;
                        if (void 0 !== a) {
                            const e = new n.Vector3,
                                t = new n.Vector3;
                            for (let n = 0, r = a.length; n < r; n++) {
                                const r = a[n];
                                if (void 0 !== r.POSITION) {
                                    const n = s.json.accessors[r.POSITION],
                                        o = n.min,
                                        a = n.max;
                                    if (void 0 !== o && void 0 !== a) {
                                        if (t.setX(Math.max(Math.abs(o[0]), Math.abs(a[0]))), t.setY(Math.max(Math.abs(o[1]), Math.abs(a[1]))), t.setZ(Math.max(Math.abs(o[2]), Math.abs(a[2]))), n.normalized) {
                                            const e = W(F[n.componentType]);
                                            t.multiplyScalar(e)
                                        }
                                        e.max(t)
                                    } else i.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.")
                                }
                            }
                            o.expandByVector(e)
                        }
                        e.boundingBox = o;
                        const c = new n.Sphere;
                        o.getCenter(c.center), c.radius = o.min.distanceTo(o.max) / 2, e.boundingSphere = c
                    }(e, t, s), Promise.all(o).then((function() {
                        return void 0 !== t.targets ? function(e, t, s) {
                            let n = !1,
                                r = !1,
                                i = !1;
                            for (let e = 0, s = t.length; e < s; e++) {
                                const s = t[e];
                                if (void 0 !== s.POSITION && (n = !0), void 0 !== s.NORMAL && (r = !0), void 0 !== s.COLOR_0 && (i = !0), n && r && i) break
                            }
                            if (!n && !r && !i) return Promise.resolve(e);
                            const o = [],
                                a = [],
                                c = [];
                            for (let l = 0, u = t.length; l < u; l++) {
                                const u = t[l];
                                if (n) {
                                    const t = void 0 !== u.POSITION ? s.getDependency("accessor", u.POSITION) : e.attributes.position;
                                    o.push(t)
                                }
                                if (r) {
                                    const t = void 0 !== u.NORMAL ? s.getDependency("accessor", u.NORMAL) : e.attributes.normal;
                                    a.push(t)
                                }
                                if (i) {
                                    const t = void 0 !== u.COLOR_0 ? s.getDependency("accessor", u.COLOR_0) : e.attributes.color;
                                    c.push(t)
                                }
                            }
                            return Promise.all([Promise.all(o), Promise.all(a), Promise.all(c)]).then((function(t) {
                                const s = t[0],
                                    o = t[1],
                                    a = t[2];
                                return n && (e.morphAttributes.position = s), r && (e.morphAttributes.normal = o), i && (e.morphAttributes.color = a), e.morphTargetsRelative = !0, e
                            }))
                        }(e, t.targets, s) : e
                    }))
            }
        }
    }
]);