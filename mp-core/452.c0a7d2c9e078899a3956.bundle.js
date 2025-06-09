"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [452], {
        20452: (e, t, r) => {
            r.d(t, {
                y: () => h
            });
            var n = r(99477),
                o = r(78646);

            function a(e, t, r) {
                const n = r.length - e - 1;
                if (t >= r[n]) return n - 1;
                if (t <= r[e]) return e;
                let o = e,
                    a = n,
                    s = Math.floor((o + a) / 2);
                for (; t < r[s] || t >= r[s + 1];) t < r[s] ? a = s : o = s, s = Math.floor((o + a) / 2);
                return s
            }

            function s(e, t) {
                let r = 1;
                for (let t = 2; t <= e; ++t) r *= t;
                let n = 1;
                for (let e = 2; e <= t; ++e) n *= e;
                for (let r = 2; r <= e - t; ++r) n *= r;
                return r / n
            }
            class i extends n.Curve {
                constructor(e, t, r, o, a) {
                    super(), this.degree = e, this.knots = t, this.controlPoints = [], this.startKnot = o || 0, this.endKnot = a || this.knots.length - 1;
                    for (let e = 0; e < r.length; ++e) {
                        const t = r[e];
                        this.controlPoints[e] = new n.Vector4(t.x, t.y, t.z, t.w)
                    }
                }
                getPoint(e, t = new n.Vector3) {
                    const r = t,
                        o = this.knots[this.startKnot] + e * (this.knots[this.endKnot] - this.knots[this.startKnot]),
                        s = function(e, t, r, o) {
                            const s = a(e, o, t),
                                i = function(e, t, r, n) {
                                    const o = [],
                                        a = [],
                                        s = [];
                                    o[0] = 1;
                                    for (let i = 1; i <= r; ++i) {
                                        a[i] = t - n[e + 1 - i], s[i] = n[e + i] - t;
                                        let r = 0;
                                        for (let e = 0; e < i; ++e) {
                                            const t = s[e + 1],
                                                n = a[i - e],
                                                l = o[e] / (t + n);
                                            o[e] = r + t * l, r = n * l
                                        }
                                        o[i] = r
                                    }
                                    return o
                                }(s, o, e, t),
                                l = new n.Vector4(0, 0, 0, 0);
                            for (let t = 0; t <= e; ++t) {
                                const n = r[s - e + t],
                                    o = i[t],
                                    a = n.w * o;
                                l.x += n.x * a, l.y += n.y * a, l.z += n.z * a, l.w += n.w * o
                            }
                            return l
                        }(this.degree, this.knots, this.controlPoints, o);
                    return 1 !== s.w && s.divideScalar(s.w), r.set(s.x, s.y, s.z)
                }
                getTangent(e, t = new n.Vector3) {
                    const r = t,
                        o = this.knots[0] + e * (this.knots[this.knots.length - 1] - this.knots[0]),
                        i = function(e, t, r, o, i) {
                            const l = function(e, t, r, o, s) {
                                const i = s < e ? s : e,
                                    l = [],
                                    c = a(e, o, t),
                                    u = function(e, t, r, n, o) {
                                        const a = [];
                                        for (let e = 0; e <= r; ++e) a[e] = 0;
                                        const s = [];
                                        for (let e = 0; e <= n; ++e) s[e] = a.slice(0);
                                        const i = [];
                                        for (let e = 0; e <= r; ++e) i[e] = a.slice(0);
                                        i[0][0] = 1;
                                        const l = a.slice(0),
                                            c = a.slice(0);
                                        for (let n = 1; n <= r; ++n) {
                                            l[n] = t - o[e + 1 - n], c[n] = o[e + n] - t;
                                            let r = 0;
                                            for (let e = 0; e < n; ++e) {
                                                const t = c[e + 1],
                                                    o = l[n - e];
                                                i[n][e] = t + o;
                                                const a = i[e][n - 1] / i[n][e];
                                                i[e][n] = r + t * a, r = o * a
                                            }
                                            i[n][n] = r
                                        }
                                        for (let e = 0; e <= r; ++e) s[0][e] = i[e][r];
                                        for (let e = 0; e <= r; ++e) {
                                            let t = 0,
                                                o = 1;
                                            const l = [];
                                            for (let e = 0; e <= r; ++e) l[e] = a.slice(0);
                                            l[0][0] = 1;
                                            for (let a = 1; a <= n; ++a) {
                                                let n = 0;
                                                const c = e - a,
                                                    u = r - a;
                                                e >= a && (l[o][0] = l[t][0] / i[u + 1][c], n = l[o][0] * i[c][u]);
                                                const p = e - 1 <= u ? a - 1 : r - e;
                                                for (let e = c >= -1 ? 1 : -c; e <= p; ++e) l[o][e] = (l[t][e] - l[t][e - 1]) / i[u + 1][c + e], n += l[o][e] * i[c + e][u];
                                                e <= u && (l[o][a] = -l[t][a - 1] / i[u + 1][e], n += l[o][a] * i[e][u]), s[a][e] = n;
                                                const h = t;
                                                t = o, o = h
                                            }
                                        }
                                        let u = r;
                                        for (let e = 1; e <= n; ++e) {
                                            for (let t = 0; t <= r; ++t) s[e][t] *= u;
                                            u *= r - e
                                        }
                                        return s
                                    }(c, o, e, i, t),
                                    p = [];
                                for (let e = 0; e < r.length; ++e) {
                                    const t = r[e].clone(),
                                        n = t.w;
                                    t.x *= n, t.y *= n, t.z *= n, p[e] = t
                                }
                                for (let t = 0; t <= i; ++t) {
                                    const r = p[c - e].clone().multiplyScalar(u[t][0]);
                                    for (let n = 1; n <= e; ++n) r.add(p[c - e + n].clone().multiplyScalar(u[t][n]));
                                    l[t] = r
                                }
                                for (let e = i + 1; e <= s + 1; ++e) l[e] = new n.Vector4(0, 0, 0);
                                return l
                            }(e, t, r, o, i);
                            return function(e) {
                                const t = e.length,
                                    r = [],
                                    o = [];
                                for (let a = 0; a < t; ++a) {
                                    const t = e[a];
                                    r[a] = new n.Vector3(t.x, t.y, t.z), o[a] = t.w
                                }
                                const a = [];
                                for (let e = 0; e < t; ++e) {
                                    const t = r[e].clone();
                                    for (let r = 1; r <= e; ++r) t.sub(a[e - r].clone().multiplyScalar(s(e, r) * o[r]));
                                    a[e] = t.divideScalar(o[0])
                                }
                                return a
                            }(l)
                        }(this.degree, this.knots, this.controlPoints, o, 1);
                    return r.copy(i[1]).normalize(), r
                }
            }
            var l = r(25108);
            let c, u, p;
            class h extends n.Loader {
                constructor(e) {
                    super(e)
                }
                load(e, t, r, o) {
                    const a = this,
                        s = "" === a.path ? n.LoaderUtils.extractUrlBase(e) : a.path,
                        i = new n.FileLoader(this.manager);
                    i.setPath(a.path), i.setResponseType("arraybuffer"), i.setRequestHeader(a.requestHeader), i.setWithCredentials(a.withCredentials), i.load(e, (function(r) {
                        try {
                            t(a.parse(r, s))
                        } catch (t) {
                            o ? o(t) : l.error(t), a.manager.itemError(e)
                        }
                    }), r, o)
                }
                parse(e, t) {
                    if (function(e) {
                            const t = "Kaydara FBX Binary  \0";
                            return e.byteLength >= t.length && t === N(e, 0, t.length)
                        }(e)) c = (new v).parse(e);
                    else {
                        const t = N(e);
                        if (! function(e) {
                                const t = ["K", "a", "y", "d", "a", "r", "a", "\\", "F", "B", "X", "\\", "B", "i", "n", "a", "r", "y", "\\", "\\"];
                                let r = 0;

                                function n(t) {
                                    const n = e[t - 1];
                                    return e = e.slice(r + t), r++, n
                                }
                                for (let e = 0; e < t.length; ++e)
                                    if (n(1) === t[e]) return !1;
                                return !0
                            }(t)) throw new Error("THREE.FBXLoader: Unknown format.");
                        if (x(t) < 7e3) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + x(t));
                        c = (new g).parse(t)
                    }
                    const r = new n.TextureLoader(this.manager).setPath(this.resourcePath || t).setCrossOrigin(this.crossOrigin);
                    return new d(r, this.manager).parse(c)
                }
            }
            class d {
                constructor(e, t) {
                    this.textureLoader = e, this.manager = t
                }
                parse() {
                    u = this.parseConnections();
                    const e = this.parseImages(),
                        t = this.parseTextures(e),
                        r = this.parseMaterials(t),
                        n = this.parseDeformers(),
                        o = (new f).parse(n);
                    return this.parseScene(n, o, r), p
                }
                parseConnections() {
                    const e = new Map;
                    return "Connections" in c && c.Connections.connections.forEach((function(t) {
                        const r = t[0],
                            n = t[1],
                            o = t[2];
                        e.has(r) || e.set(r, {
                            parents: [],
                            children: []
                        });
                        const a = {
                            ID: n,
                            relationship: o
                        };
                        e.get(r).parents.push(a), e.has(n) || e.set(n, {
                            parents: [],
                            children: []
                        });
                        const s = {
                            ID: r,
                            relationship: o
                        };
                        e.get(n).children.push(s)
                    })), e
                }
                parseImages() {
                    const e = {},
                        t = {};
                    if ("Video" in c.Objects) {
                        const r = c.Objects.Video;
                        for (const n in r) {
                            const o = r[n];
                            if (e[parseInt(n)] = o.RelativeFilename || o.Filename, "Content" in o) {
                                const e = o.Content instanceof ArrayBuffer && o.Content.byteLength > 0,
                                    a = "string" == typeof o.Content && "" !== o.Content;
                                if (e || a) {
                                    const e = this.parseImage(r[n]);
                                    t[o.RelativeFilename || o.Filename] = e
                                }
                            }
                        }
                    }
                    for (const r in e) {
                        const n = e[r];
                        void 0 !== t[n] ? e[r] = t[n] : e[r] = e[r].split("\\").pop()
                    }
                    return e
                }
                parseImage(e) {
                    const t = e.Content,
                        r = e.RelativeFilename || e.Filename,
                        n = r.slice(r.lastIndexOf(".") + 1).toLowerCase();
                    let o;
                    switch (n) {
                        case "bmp":
                            o = "image/bmp";
                            break;
                        case "jpg":
                        case "jpeg":
                            o = "image/jpeg";
                            break;
                        case "png":
                            o = "image/png";
                            break;
                        case "tif":
                            o = "image/tiff";
                            break;
                        case "tga":
                            null === this.manager.getHandler(".tga") && l.warn("FBXLoader: TGA loader not found, skipping ", r), o = "image/tga";
                            break;
                        default:
                            return void l.warn('FBXLoader: Image type "' + n + '" is not supported.')
                    }
                    if ("string" == typeof t) return "data:" + o + ";base64," + t;
                    {
                        const e = new Uint8Array(t);
                        return window.URL.createObjectURL(new Blob([e], {
                            type: o
                        }))
                    }
                }
                parseTextures(e) {
                    const t = new Map;
                    if ("Texture" in c.Objects) {
                        const r = c.Objects.Texture;
                        for (const n in r) {
                            const o = this.parseTexture(r[n], e);
                            t.set(parseInt(n), o)
                        }
                    }
                    return t
                }
                parseTexture(e, t) {
                    const r = this.loadTexture(e, t);
                    r.ID = e.id, r.name = e.attrName;
                    const o = e.WrapModeU,
                        a = e.WrapModeV,
                        s = void 0 !== o ? o.value : 0,
                        i = void 0 !== a ? a.value : 0;
                    if (r.wrapS = 0 === s ? n.RepeatWrapping : n.ClampToEdgeWrapping, r.wrapT = 0 === i ? n.RepeatWrapping : n.ClampToEdgeWrapping, "Scaling" in e) {
                        const t = e.Scaling.value;
                        r.repeat.x = t[0], r.repeat.y = t[1]
                    }
                    if ("Translation" in e) {
                        const t = e.Translation.value;
                        r.offset.x = t[0], r.offset.y = t[1]
                    }
                    return r
                }
                loadTexture(e, t) {
                    let r;
                    const o = this.textureLoader.path,
                        a = u.get(e.id).children;
                    let s;
                    void 0 !== a && a.length > 0 && void 0 !== t[a[0].ID] && (r = t[a[0].ID], 0 !== r.indexOf("blob:") && 0 !== r.indexOf("data:") || this.textureLoader.setPath(void 0));
                    const i = e.FileName.slice(-3).toLowerCase();
                    if ("tga" === i) {
                        const t = this.manager.getHandler(".tga");
                        null === t ? (l.warn("FBXLoader: TGA loader not found, creating placeholder texture for", e.RelativeFilename), s = new n.Texture) : (t.setPath(this.textureLoader.path), s = t.load(r))
                    } else if ("dds" === i) {
                        const t = this.manager.getHandler(".dds");
                        null === t ? (l.warn("FBXLoader: DDS loader not found, creating placeholder texture for", e.RelativeFilename), s = new n.Texture) : (t.setPath(this.textureLoader.path), s = t.load(r))
                    } else "psd" === i ? (l.warn("FBXLoader: PSD textures are not supported, creating placeholder texture for", e.RelativeFilename), s = new n.Texture) : s = this.textureLoader.load(r);
                    return this.textureLoader.setPath(o), s
                }
                parseMaterials(e) {
                    const t = new Map;
                    if ("Material" in c.Objects) {
                        const r = c.Objects.Material;
                        for (const n in r) {
                            const o = this.parseMaterial(r[n], e);
                            null !== o && t.set(parseInt(n), o)
                        }
                    }
                    return t
                }
                parseMaterial(e, t) {
                    const r = e.id,
                        o = e.attrName;
                    let a = e.ShadingModel;
                    if ("object" == typeof a && (a = a.value), !u.has(r)) return null;
                    const s = this.parseParameters(e, t, r);
                    let i;
                    switch (a.toLowerCase()) {
                        case "phong":
                            i = new n.MeshPhongMaterial;
                            break;
                        case "lambert":
                            i = new n.MeshLambertMaterial;
                            break;
                        default:
                            l.warn('THREE.FBXLoader: unknown material type "%s". Defaulting to MeshPhongMaterial.', a), i = new n.MeshPhongMaterial
                    }
                    return i.setValues(s), i.name = o, i
                }
                parseParameters(e, t, r) {
                    const o = {};
                    e.BumpFactor && (o.bumpScale = e.BumpFactor.value), e.Diffuse ? o.color = (new n.Color).fromArray(e.Diffuse.value).convertSRGBToLinear() : !e.DiffuseColor || "Color" !== e.DiffuseColor.type && "ColorRGB" !== e.DiffuseColor.type || (o.color = (new n.Color).fromArray(e.DiffuseColor.value).convertSRGBToLinear()), e.DisplacementFactor && (o.displacementScale = e.DisplacementFactor.value), e.Emissive ? o.emissive = (new n.Color).fromArray(e.Emissive.value).convertSRGBToLinear() : !e.EmissiveColor || "Color" !== e.EmissiveColor.type && "ColorRGB" !== e.EmissiveColor.type || (o.emissive = (new n.Color).fromArray(e.EmissiveColor.value).convertSRGBToLinear()), e.EmissiveFactor && (o.emissiveIntensity = parseFloat(e.EmissiveFactor.value)), e.Opacity && (o.opacity = parseFloat(e.Opacity.value)), o.opacity < 1 && (o.transparent = !0), e.ReflectionFactor && (o.reflectivity = e.ReflectionFactor.value), e.Shininess && (o.shininess = e.Shininess.value), e.Specular ? o.specular = (new n.Color).fromArray(e.Specular.value).convertSRGBToLinear() : e.SpecularColor && "Color" === e.SpecularColor.type && (o.specular = (new n.Color).fromArray(e.SpecularColor.value).convertSRGBToLinear());
                    const a = this;
                    return u.get(r).children.forEach((function(e) {
                        const r = e.relationship;
                        switch (r) {
                            case "Bump":
                                o.bumpMap = a.getTexture(t, e.ID);
                                break;
                            case "Maya|TEX_ao_map":
                                o.aoMap = a.getTexture(t, e.ID);
                                break;
                            case "DiffuseColor":
                            case "Maya|TEX_color_map":
                                o.map = a.getTexture(t, e.ID), void 0 !== o.map && (o.map.colorSpace = n.SRGBColorSpace);
                                break;
                            case "DisplacementColor":
                                o.displacementMap = a.getTexture(t, e.ID);
                                break;
                            case "EmissiveColor":
                                o.emissiveMap = a.getTexture(t, e.ID), void 0 !== o.emissiveMap && (o.emissiveMap.colorSpace = n.SRGBColorSpace);
                                break;
                            case "NormalMap":
                            case "Maya|TEX_normal_map":
                                o.normalMap = a.getTexture(t, e.ID);
                                break;
                            case "ReflectionColor":
                                o.envMap = a.getTexture(t, e.ID), void 0 !== o.envMap && (o.envMap.mapping = n.EquirectangularReflectionMapping, o.envMap.colorSpace = n.SRGBColorSpace);
                                break;
                            case "SpecularColor":
                                o.specularMap = a.getTexture(t, e.ID), void 0 !== o.specularMap && (o.specularMap.colorSpace = n.SRGBColorSpace);
                                break;
                            case "TransparentColor":
                            case "TransparencyFactor":
                                o.alphaMap = a.getTexture(t, e.ID), o.transparent = !0;
                                break;
                            default:
                                l.warn("THREE.FBXLoader: %s map is not supported in three.js, skipping texture.", r)
                        }
                    })), o
                }
                getTexture(e, t) {
                    return "LayeredTexture" in c.Objects && t in c.Objects.LayeredTexture && (l.warn("THREE.FBXLoader: layered textures are not supported in three.js. Discarding all but first layer."), t = u.get(t).children[0].ID), e.get(t)
                }
                parseDeformers() {
                    const e = {},
                        t = {};
                    if ("Deformer" in c.Objects) {
                        const r = c.Objects.Deformer;
                        for (const n in r) {
                            const o = r[n],
                                a = u.get(parseInt(n));
                            if ("Skin" === o.attrType) {
                                const t = this.parseSkeleton(a, r);
                                t.ID = n, a.parents.length > 1 && l.warn("THREE.FBXLoader: skeleton attached to more than one geometry is not supported."), t.geometryID = a.parents[0].ID, e[n] = t
                            } else if ("BlendShape" === o.attrType) {
                                const e = {
                                    id: n
                                };
                                e.rawTargets = this.parseMorphTargets(a, r), e.id = n, a.parents.length > 1 && l.warn("THREE.FBXLoader: morph target attached to more than one geometry is not supported."), t[n] = e
                            }
                        }
                    }
                    return {
                        skeletons: e,
                        morphTargets: t
                    }
                }
                parseSkeleton(e, t) {
                    const r = [];
                    return e.children.forEach((function(e) {
                        const o = t[e.ID];
                        if ("Cluster" !== o.attrType) return;
                        const a = {
                            ID: e.ID,
                            indices: [],
                            weights: [],
                            transformLink: (new n.Matrix4).fromArray(o.TransformLink.a)
                        };
                        "Indexes" in o && (a.indices = o.Indexes.a, a.weights = o.Weights.a), r.push(a)
                    })), {
                        rawBones: r,
                        bones: []
                    }
                }
                parseMorphTargets(e, t) {
                    const r = [];
                    for (let n = 0; n < e.children.length; n++) {
                        const o = e.children[n],
                            a = t[o.ID],
                            s = {
                                name: a.attrName,
                                initialWeight: a.DeformPercent,
                                id: a.id,
                                fullWeights: a.FullWeights.a
                            };
                        if ("BlendShapeChannel" !== a.attrType) return;
                        s.geoID = u.get(parseInt(o.ID)).children.filter((function(e) {
                            return void 0 === e.relationship
                        }))[0].ID, r.push(s)
                    }
                    return r
                }
                parseScene(e, t, r) {
                    p = new n.Group;
                    const o = this.parseModels(e.skeletons, t, r),
                        a = c.Objects.Model,
                        s = this;
                    o.forEach((function(e) {
                        const t = a[e.ID];
                        s.setLookAtProperties(e, t), u.get(e.ID).parents.forEach((function(t) {
                            const r = o.get(t.ID);
                            void 0 !== r && r.add(e)
                        })), null === e.parent && p.add(e)
                    })), this.bindSkeleton(e.skeletons, t, o), this.addGlobalSceneSettings(), p.traverse((function(e) {
                        if (e.userData.transformData) {
                            e.parent && (e.userData.transformData.parentMatrix = e.parent.matrix, e.userData.transformData.parentMatrixWorld = e.parent.matrixWorld);
                            const t = A(e.userData.transformData);
                            e.applyMatrix4(t), e.updateWorldMatrix()
                        }
                    }));
                    const i = (new m).parse();
                    1 === p.children.length && p.children[0].isGroup && (p.children[0].animations = i, p = p.children[0]), p.animations = i
                }
                parseModels(e, t, r) {
                    const o = new Map,
                        a = c.Objects.Model;
                    for (const s in a) {
                        const i = parseInt(s),
                            l = a[s],
                            c = u.get(i);
                        let p = this.buildSkeleton(c, e, i, l.attrName);
                        if (!p) {
                            switch (l.attrType) {
                                case "Camera":
                                    p = this.createCamera(c);
                                    break;
                                case "Light":
                                    p = this.createLight(c);
                                    break;
                                case "Mesh":
                                    p = this.createMesh(c, t, r);
                                    break;
                                case "NurbsCurve":
                                    p = this.createCurve(c, t);
                                    break;
                                case "LimbNode":
                                case "Root":
                                    p = new n.Bone;
                                    break;
                                default:
                                    p = new n.Group
                            }
                            p.name = l.attrName ? n.PropertyBinding.sanitizeNodeName(l.attrName) : "", p.userData.originalName = l.attrName, p.ID = i
                        }
                        this.getTransformData(p, l), o.set(i, p)
                    }
                    return o
                }
                buildSkeleton(e, t, r, o) {
                    let a = null;
                    return e.parents.forEach((function(e) {
                        for (const s in t) {
                            const i = t[s];
                            i.rawBones.forEach((function(t, s) {
                                if (t.ID === e.ID) {
                                    const e = a;
                                    a = new n.Bone, a.matrixWorld.copy(t.transformLink), a.name = o ? n.PropertyBinding.sanitizeNodeName(o) : "", a.userData.originalName = o, a.ID = r, i.bones[s] = a, null !== e && a.add(e)
                                }
                            }))
                        }
                    })), a
                }
                createCamera(e) {
                    let t, r;
                    if (e.children.forEach((function(e) {
                            const t = c.Objects.NodeAttribute[e.ID];
                            void 0 !== t && (r = t)
                        })), void 0 === r) t = new n.Object3D;
                    else {
                        let e = 0;
                        void 0 !== r.CameraProjectionType && 1 === r.CameraProjectionType.value && (e = 1);
                        let o = 1;
                        void 0 !== r.NearPlane && (o = r.NearPlane.value / 1e3);
                        let a = 1e3;
                        void 0 !== r.FarPlane && (a = r.FarPlane.value / 1e3);
                        let s = window.innerWidth,
                            i = window.innerHeight;
                        void 0 !== r.AspectWidth && void 0 !== r.AspectHeight && (s = r.AspectWidth.value, i = r.AspectHeight.value);
                        const c = s / i;
                        let u = 45;
                        void 0 !== r.FieldOfView && (u = r.FieldOfView.value);
                        const p = r.FocalLength ? r.FocalLength.value : null;
                        switch (e) {
                            case 0:
                                t = new n.PerspectiveCamera(u, c, o, a), null !== p && t.setFocalLength(p);
                                break;
                            case 1:
                                t = new n.OrthographicCamera(-s / 2, s / 2, i / 2, -i / 2, o, a);
                                break;
                            default:
                                l.warn("THREE.FBXLoader: Unknown camera type " + e + "."), t = new n.Object3D
                        }
                    }
                    return t
                }
                createLight(e) {
                    let t, r;
                    if (e.children.forEach((function(e) {
                            const t = c.Objects.NodeAttribute[e.ID];
                            void 0 !== t && (r = t)
                        })), void 0 === r) t = new n.Object3D;
                    else {
                        let e;
                        e = void 0 === r.LightType ? 0 : r.LightType.value;
                        let o = 16777215;
                        void 0 !== r.Color && (o = (new n.Color).fromArray(r.Color.value).convertSRGBToLinear());
                        let a = void 0 === r.Intensity ? 1 : r.Intensity.value / 100;
                        void 0 !== r.CastLightOnObject && 0 === r.CastLightOnObject.value && (a = 0);
                        let s = 0;
                        void 0 !== r.FarAttenuationEnd && (s = void 0 !== r.EnableFarAttenuation && 0 === r.EnableFarAttenuation.value ? 0 : r.FarAttenuationEnd.value);
                        const i = 1;
                        switch (e) {
                            case 0:
                                t = new n.PointLight(o, a, s, i);
                                break;
                            case 1:
                                t = new n.DirectionalLight(o, a);
                                break;
                            case 2:
                                let e = Math.PI / 3;
                                void 0 !== r.InnerAngle && (e = n.MathUtils.degToRad(r.InnerAngle.value));
                                let c = 0;
                                void 0 !== r.OuterAngle && (c = n.MathUtils.degToRad(r.OuterAngle.value), c = Math.max(c, 1)), t = new n.SpotLight(o, a, s, e, c, i);
                                break;
                            default:
                                l.warn("THREE.FBXLoader: Unknown light type " + r.LightType.value + ", defaulting to a PointLight."), t = new n.PointLight(o, a)
                        }
                        void 0 !== r.CastShadows && 1 === r.CastShadows.value && (t.castShadow = !0)
                    }
                    return t
                }
                createMesh(e, t, r) {
                    let o, a = null,
                        s = null;
                    const i = [];
                    return e.children.forEach((function(e) {
                        t.has(e.ID) && (a = t.get(e.ID)), r.has(e.ID) && i.push(r.get(e.ID))
                    })), i.length > 1 ? s = i : i.length > 0 ? s = i[0] : (s = new n.MeshPhongMaterial({
                        name: n.Loader.DEFAULT_MATERIAL_NAME,
                        color: 13421772
                    }), i.push(s)), "color" in a.attributes && i.forEach((function(e) {
                        e.vertexColors = !0
                    })), a.FBX_Deformer ? (o = new n.SkinnedMesh(a, s), o.normalizeSkinWeights()) : o = new n.Mesh(a, s), o
                }
                createCurve(e, t) {
                    const r = e.children.reduce((function(e, r) {
                            return t.has(r.ID) && (e = t.get(r.ID)), e
                        }), null),
                        o = new n.LineBasicMaterial({
                            name: n.Loader.DEFAULT_MATERIAL_NAME,
                            color: 3342591,
                            linewidth: 1
                        });
                    return new n.Line(r, o)
                }
                getTransformData(e, t) {
                    const r = {};
                    "InheritType" in t && (r.inheritType = parseInt(t.InheritType.value)), r.eulerOrder = "RotationOrder" in t ? D(t.RotationOrder.value) : "ZYX", "Lcl_Translation" in t && (r.translation = t.Lcl_Translation.value), "PreRotation" in t && (r.preRotation = t.PreRotation.value), "Lcl_Rotation" in t && (r.rotation = t.Lcl_Rotation.value), "PostRotation" in t && (r.postRotation = t.PostRotation.value), "Lcl_Scaling" in t && (r.scale = t.Lcl_Scaling.value), "ScalingOffset" in t && (r.scalingOffset = t.ScalingOffset.value), "ScalingPivot" in t && (r.scalingPivot = t.ScalingPivot.value), "RotationOffset" in t && (r.rotationOffset = t.RotationOffset.value), "RotationPivot" in t && (r.rotationPivot = t.RotationPivot.value), e.userData.transformData = r
                }
                setLookAtProperties(e, t) {
                    "LookAtProperty" in t && u.get(e.ID).children.forEach((function(t) {
                        if ("LookAtProperty" === t.relationship) {
                            const r = c.Objects.Model[t.ID];
                            if ("Lcl_Translation" in r) {
                                const t = r.Lcl_Translation.value;
                                void 0 !== e.target ? (e.target.position.fromArray(t), p.add(e.target)) : e.lookAt((new n.Vector3).fromArray(t))
                            }
                        }
                    }))
                }
                bindSkeleton(e, t, r) {
                    const o = this.parsePoseNodes();
                    for (const a in e) {
                        const s = e[a];
                        u.get(parseInt(s.ID)).parents.forEach((function(e) {
                            if (t.has(e.ID)) {
                                const t = e.ID;
                                u.get(t).parents.forEach((function(e) {
                                    r.has(e.ID) && r.get(e.ID).bind(new n.Skeleton(s.bones), o[e.ID])
                                }))
                            }
                        }))
                    }
                }
                parsePoseNodes() {
                    const e = {};
                    if ("Pose" in c.Objects) {
                        const t = c.Objects.Pose;
                        for (const r in t)
                            if ("BindPose" === t[r].attrType && t[r].NbPoseNodes > 0) {
                                const o = t[r].PoseNode;
                                Array.isArray(o) ? o.forEach((function(t) {
                                    e[t.Node] = (new n.Matrix4).fromArray(t.Matrix.a)
                                })) : e[o.Node] = (new n.Matrix4).fromArray(o.Matrix.a)
                            }
                    }
                    return e
                }
                addGlobalSceneSettings() {
                    if ("GlobalSettings" in c) {
                        if ("AmbientColor" in c.GlobalSettings) {
                            const e = c.GlobalSettings.AmbientColor.value,
                                t = e[0],
                                r = e[1],
                                o = e[2];
                            if (0 !== t || 0 !== r || 0 !== o) {
                                const e = new n.Color(t, r, o).convertSRGBToLinear();
                                p.add(new n.AmbientLight(e, 1))
                            }
                        }
                        "UnitScaleFactor" in c.GlobalSettings && (p.userData.unitScaleFactor = c.GlobalSettings.UnitScaleFactor.value)
                    }
                }
            }
            class f {
                constructor() {
                    this.negativeMaterialIndices = !1
                }
                parse(e) {
                    const t = new Map;
                    if ("Geometry" in c.Objects) {
                        const r = c.Objects.Geometry;
                        for (const n in r) {
                            const o = u.get(parseInt(n)),
                                a = this.parseGeometry(o, r[n], e);
                            t.set(parseInt(n), a)
                        }
                    }
                    return !0 === this.negativeMaterialIndices && l.warn("THREE.FBXLoader: The FBX file contains invalid (negative) material indices. The asset might not render as expected."), t
                }
                parseGeometry(e, t, r) {
                    switch (t.attrType) {
                        case "Mesh":
                            return this.parseMeshGeometry(e, t, r);
                        case "NurbsCurve":
                            return this.parseNurbsGeometry(t)
                    }
                }
                parseMeshGeometry(e, t, r) {
                    const n = r.skeletons,
                        o = [],
                        a = e.parents.map((function(e) {
                            return c.Objects.Model[e.ID]
                        }));
                    if (0 === a.length) return;
                    const s = e.children.reduce((function(e, t) {
                        return void 0 !== n[t.ID] && (e = n[t.ID]), e
                    }), null);
                    e.children.forEach((function(e) {
                        void 0 !== r.morphTargets[e.ID] && o.push(r.morphTargets[e.ID])
                    }));
                    const i = a[0],
                        l = {};
                    "RotationOrder" in i && (l.eulerOrder = D(i.RotationOrder.value)), "InheritType" in i && (l.inheritType = parseInt(i.InheritType.value)), "GeometricTranslation" in i && (l.translation = i.GeometricTranslation.value), "GeometricRotation" in i && (l.rotation = i.GeometricRotation.value), "GeometricScaling" in i && (l.scale = i.GeometricScaling.value);
                    const u = A(l);
                    return this.genGeometry(t, s, o, u)
                }
                genGeometry(e, t, r, o) {
                    const a = new n.BufferGeometry;
                    e.attrName && (a.name = e.attrName);
                    const s = this.parseGeoNode(e, t),
                        i = this.genBuffers(s),
                        l = new n.Float32BufferAttribute(i.vertex, 3);
                    if (l.applyMatrix4(o), a.setAttribute("position", l), i.colors.length > 0 && a.setAttribute("color", new n.Float32BufferAttribute(i.colors, 3)), t && (a.setAttribute("skinIndex", new n.Uint16BufferAttribute(i.weightsIndices, 4)), a.setAttribute("skinWeight", new n.Float32BufferAttribute(i.vertexWeights, 4)), a.FBX_Deformer = t), i.normal.length > 0) {
                        const e = (new n.Matrix3).getNormalMatrix(o),
                            t = new n.Float32BufferAttribute(i.normal, 3);
                        t.applyNormalMatrix(e), a.setAttribute("normal", t)
                    }
                    if (i.uvs.forEach((function(e, t) {
                            const r = 0 === t ? "uv" : `uv${t}`;
                            a.setAttribute(r, new n.Float32BufferAttribute(i.uvs[t], 2))
                        })), s.material && "AllSame" !== s.material.mappingType) {
                        let e = i.materialIndex[0],
                            t = 0;
                        if (i.materialIndex.forEach((function(r, n) {
                                r !== e && (a.addGroup(t, n - t, e), e = r, t = n)
                            })), a.groups.length > 0) {
                            const t = a.groups[a.groups.length - 1],
                                r = t.start + t.count;
                            r !== i.materialIndex.length && a.addGroup(r, i.materialIndex.length - r, e)
                        }
                        0 === a.groups.length && a.addGroup(0, i.materialIndex.length, i.materialIndex[0])
                    }
                    return this.addMorphTargets(a, e, r, o), a
                }
                parseGeoNode(e, t) {
                    const r = {};
                    if (r.vertexPositions = void 0 !== e.Vertices ? e.Vertices.a : [], r.vertexIndices = void 0 !== e.PolygonVertexIndex ? e.PolygonVertexIndex.a : [], e.LayerElementColor && (r.color = this.parseVertexColors(e.LayerElementColor[0])), e.LayerElementMaterial && (r.material = this.parseMaterialIndices(e.LayerElementMaterial[0])), e.LayerElementNormal && (r.normal = this.parseNormals(e.LayerElementNormal[0])), e.LayerElementUV) {
                        r.uv = [];
                        let t = 0;
                        for (; e.LayerElementUV[t];) e.LayerElementUV[t].UV && r.uv.push(this.parseUVs(e.LayerElementUV[t])), t++
                    }
                    return r.weightTable = {}, null !== t && (r.skeleton = t, t.rawBones.forEach((function(e, t) {
                        e.indices.forEach((function(n, o) {
                            void 0 === r.weightTable[n] && (r.weightTable[n] = []), r.weightTable[n].push({
                                id: t,
                                weight: e.weights[o]
                            })
                        }))
                    }))), r
                }
                genBuffers(e) {
                    const t = {
                        vertex: [],
                        normal: [],
                        colors: [],
                        uvs: [],
                        materialIndex: [],
                        vertexWeights: [],
                        weightsIndices: []
                    };
                    let r = 0,
                        n = 0,
                        o = !1,
                        a = [],
                        s = [],
                        i = [],
                        c = [],
                        u = [],
                        p = [];
                    const h = this;
                    return e.vertexIndices.forEach((function(d, f) {
                        let m, g = !1;
                        d < 0 && (d ^= -1, g = !0);
                        let v = [],
                            y = [];
                        if (a.push(3 * d, 3 * d + 1, 3 * d + 2), e.color) {
                            const t = b(f, r, d, e.color);
                            i.push(t[0], t[1], t[2])
                        }
                        if (e.skeleton) {
                            if (void 0 !== e.weightTable[d] && e.weightTable[d].forEach((function(e) {
                                    y.push(e.weight), v.push(e.id)
                                })), y.length > 4) {
                                o || (l.warn("THREE.FBXLoader: Vertex has more than 4 skinning weights assigned to vertex. Deleting additional weights."), o = !0);
                                const e = [0, 0, 0, 0],
                                    t = [0, 0, 0, 0];
                                y.forEach((function(r, n) {
                                    let o = r,
                                        a = v[n];
                                    t.forEach((function(t, r, n) {
                                        if (o > t) {
                                            n[r] = o, o = t;
                                            const s = e[r];
                                            e[r] = a, a = s
                                        }
                                    }))
                                })), v = e, y = t
                            }
                            for (; y.length < 4;) y.push(0), v.push(0);
                            for (let e = 0; e < 4; ++e) u.push(y[e]), p.push(v[e])
                        }
                        if (e.normal) {
                            const t = b(f, r, d, e.normal);
                            s.push(t[0], t[1], t[2])
                        }
                        e.material && "AllSame" !== e.material.mappingType && (m = b(f, r, d, e.material)[0], m < 0 && (h.negativeMaterialIndices = !0, m = 0)), e.uv && e.uv.forEach((function(e, t) {
                            const n = b(f, r, d, e);
                            void 0 === c[t] && (c[t] = []), c[t].push(n[0]), c[t].push(n[1])
                        })), n++, g && (h.genFace(t, e, a, m, s, i, c, u, p, n), r++, n = 0, a = [], s = [], i = [], c = [], u = [], p = [])
                    })), t
                }
                getNormalNewell(e) {
                    const t = new n.Vector3(0, 0, 0);
                    for (let r = 0; r < e.length; r++) {
                        const n = e[r],
                            o = e[(r + 1) % e.length];
                        t.x += (n.y - o.y) * (n.z + o.z), t.y += (n.z - o.z) * (n.x + o.x), t.z += (n.x - o.x) * (n.y + o.y)
                    }
                    return t.normalize(), t
                }
                getNormalTangentAndBitangent(e) {
                    const t = this.getNormalNewell(e),
                        r = (Math.abs(t.z) > .5 ? new n.Vector3(0, 1, 0) : new n.Vector3(0, 0, 1)).cross(t).normalize(),
                        o = t.clone().cross(r).normalize();
                    return {
                        normal: t,
                        tangent: r,
                        bitangent: o
                    }
                }
                flattenVertex(e, t, r) {
                    return new n.Vector2(e.dot(t), e.dot(r))
                }
                genFace(e, t, r, o, a, s, i, l, c, u) {
                    let p;
                    if (u > 3) {
                        const e = [];
                        for (let o = 0; o < r.length; o += 3) e.push(new n.Vector3(t.vertexPositions[r[o]], t.vertexPositions[r[o + 1]], t.vertexPositions[r[o + 2]]));
                        const {
                            tangent: o,
                            bitangent: a
                        } = this.getNormalTangentAndBitangent(e), s = [];
                        for (const t of e) s.push(this.flattenVertex(t, o, a));
                        p = n.ShapeUtils.triangulateShape(s, [])
                    } else p = [
                        [0, 1, 2]
                    ];
                    for (const [n, u, h] of p) e.vertex.push(t.vertexPositions[r[3 * n]]), e.vertex.push(t.vertexPositions[r[3 * n + 1]]), e.vertex.push(t.vertexPositions[r[3 * n + 2]]), e.vertex.push(t.vertexPositions[r[3 * u]]), e.vertex.push(t.vertexPositions[r[3 * u + 1]]), e.vertex.push(t.vertexPositions[r[3 * u + 2]]), e.vertex.push(t.vertexPositions[r[3 * h]]), e.vertex.push(t.vertexPositions[r[3 * h + 1]]), e.vertex.push(t.vertexPositions[r[3 * h + 2]]), t.skeleton && (e.vertexWeights.push(l[4 * n]), e.vertexWeights.push(l[4 * n + 1]), e.vertexWeights.push(l[4 * n + 2]), e.vertexWeights.push(l[4 * n + 3]), e.vertexWeights.push(l[4 * u]), e.vertexWeights.push(l[4 * u + 1]), e.vertexWeights.push(l[4 * u + 2]), e.vertexWeights.push(l[4 * u + 3]), e.vertexWeights.push(l[4 * h]), e.vertexWeights.push(l[4 * h + 1]), e.vertexWeights.push(l[4 * h + 2]), e.vertexWeights.push(l[4 * h + 3]), e.weightsIndices.push(c[4 * n]), e.weightsIndices.push(c[4 * n + 1]), e.weightsIndices.push(c[4 * n + 2]), e.weightsIndices.push(c[4 * n + 3]), e.weightsIndices.push(c[4 * u]), e.weightsIndices.push(c[4 * u + 1]), e.weightsIndices.push(c[4 * u + 2]), e.weightsIndices.push(c[4 * u + 3]), e.weightsIndices.push(c[4 * h]), e.weightsIndices.push(c[4 * h + 1]), e.weightsIndices.push(c[4 * h + 2]), e.weightsIndices.push(c[4 * h + 3])), t.color && (e.colors.push(s[3 * n]), e.colors.push(s[3 * n + 1]), e.colors.push(s[3 * n + 2]), e.colors.push(s[3 * u]), e.colors.push(s[3 * u + 1]), e.colors.push(s[3 * u + 2]), e.colors.push(s[3 * h]), e.colors.push(s[3 * h + 1]), e.colors.push(s[3 * h + 2])), t.material && "AllSame" !== t.material.mappingType && (e.materialIndex.push(o), e.materialIndex.push(o), e.materialIndex.push(o)), t.normal && (e.normal.push(a[3 * n]), e.normal.push(a[3 * n + 1]), e.normal.push(a[3 * n + 2]), e.normal.push(a[3 * u]), e.normal.push(a[3 * u + 1]), e.normal.push(a[3 * u + 2]), e.normal.push(a[3 * h]), e.normal.push(a[3 * h + 1]), e.normal.push(a[3 * h + 2])), t.uv && t.uv.forEach((function(t, r) {
                        void 0 === e.uvs[r] && (e.uvs[r] = []), e.uvs[r].push(i[r][2 * n]), e.uvs[r].push(i[r][2 * n + 1]), e.uvs[r].push(i[r][2 * u]), e.uvs[r].push(i[r][2 * u + 1]), e.uvs[r].push(i[r][2 * h]), e.uvs[r].push(i[r][2 * h + 1])
                    }))
                }
                addMorphTargets(e, t, r, n) {
                    if (0 === r.length) return;
                    e.morphTargetsRelative = !0, e.morphAttributes.position = [];
                    const o = this;
                    r.forEach((function(r) {
                        r.rawTargets.forEach((function(r) {
                            const a = c.Objects.Geometry[r.geoID];
                            void 0 !== a && o.genMorphGeometry(e, t, a, n, r.name)
                        }))
                    }))
                }
                genMorphGeometry(e, t, r, o, a) {
                    const s = void 0 !== t.PolygonVertexIndex ? t.PolygonVertexIndex.a : [],
                        i = void 0 !== r.Vertices ? r.Vertices.a : [],
                        l = void 0 !== r.Indexes ? r.Indexes.a : [],
                        c = 3 * e.attributes.position.count,
                        u = new Float32Array(c);
                    for (let e = 0; e < l.length; e++) {
                        const t = 3 * l[e];
                        u[t] = i[3 * e], u[t + 1] = i[3 * e + 1], u[t + 2] = i[3 * e + 2]
                    }
                    const p = {
                            vertexIndices: s,
                            vertexPositions: u
                        },
                        h = this.genBuffers(p),
                        d = new n.Float32BufferAttribute(h.vertex, 3);
                    d.name = a || r.attrName, d.applyMatrix4(o), e.morphAttributes.position.push(d)
                }
                parseNormals(e) {
                    const t = e.MappingInformationType,
                        r = e.ReferenceInformationType,
                        n = e.Normals.a;
                    let o = [];
                    return "IndexToDirect" === r && ("NormalIndex" in e ? o = e.NormalIndex.a : "NormalsIndex" in e && (o = e.NormalsIndex.a)), {
                        dataSize: 3,
                        buffer: n,
                        indices: o,
                        mappingType: t,
                        referenceType: r
                    }
                }
                parseUVs(e) {
                    const t = e.MappingInformationType,
                        r = e.ReferenceInformationType,
                        n = e.UV.a;
                    let o = [];
                    return "IndexToDirect" === r && (o = e.UVIndex.a), {
                        dataSize: 2,
                        buffer: n,
                        indices: o,
                        mappingType: t,
                        referenceType: r
                    }
                }
                parseVertexColors(e) {
                    const t = e.MappingInformationType,
                        r = e.ReferenceInformationType,
                        o = e.Colors.a;
                    let a = [];
                    "IndexToDirect" === r && (a = e.ColorIndex.a);
                    for (let e = 0, t = new n.Color; e < o.length; e += 4) t.fromArray(o, e).convertSRGBToLinear().toArray(o, e);
                    return {
                        dataSize: 4,
                        buffer: o,
                        indices: a,
                        mappingType: t,
                        referenceType: r
                    }
                }
                parseMaterialIndices(e) {
                    const t = e.MappingInformationType,
                        r = e.ReferenceInformationType;
                    if ("NoMappingInformation" === t) return {
                        dataSize: 1,
                        buffer: [0],
                        indices: [0],
                        mappingType: "AllSame",
                        referenceType: r
                    };
                    const n = e.Materials.a,
                        o = [];
                    for (let e = 0; e < n.length; ++e) o.push(e);
                    return {
                        dataSize: 1,
                        buffer: n,
                        indices: o,
                        mappingType: t,
                        referenceType: r
                    }
                }
                parseNurbsGeometry(e) {
                    const t = parseInt(e.Order);
                    if (isNaN(t)) return l.error("THREE.FBXLoader: Invalid Order %s given for geometry ID: %s", e.Order, e.id), new n.BufferGeometry;
                    const r = t - 1,
                        o = e.KnotVector.a,
                        a = [],
                        s = e.Points.a;
                    for (let e = 0, t = s.length; e < t; e += 4) a.push((new n.Vector4).fromArray(s, e));
                    let c, u;
                    if ("Closed" === e.Form) a.push(a[0]);
                    else if ("Periodic" === e.Form) {
                        c = r, u = o.length - 1 - c;
                        for (let e = 0; e < r; ++e) a.push(a[e])
                    }
                    const p = new i(r, o, a, c, u).getPoints(12 * a.length);
                    return (new n.BufferGeometry).setFromPoints(p)
                }
            }
            class m {
                parse() {
                    const e = [],
                        t = this.parseClips();
                    if (void 0 !== t)
                        for (const r in t) {
                            const n = t[r],
                                o = this.addClip(n);
                            e.push(o)
                        }
                    return e
                }
                parseClips() {
                    if (void 0 === c.Objects.AnimationCurve) return;
                    const e = this.parseAnimationCurveNodes();
                    this.parseAnimationCurves(e);
                    const t = this.parseAnimationLayers(e);
                    return this.parseAnimStacks(t)
                }
                parseAnimationCurveNodes() {
                    const e = c.Objects.AnimationCurveNode,
                        t = new Map;
                    for (const r in e) {
                        const n = e[r];
                        if (null !== n.attrName.match(/S|R|T|DeformPercent/)) {
                            const e = {
                                id: n.id,
                                attr: n.attrName,
                                curves: {}
                            };
                            t.set(e.id, e)
                        }
                    }
                    return t
                }
                parseAnimationCurves(e) {
                    const t = c.Objects.AnimationCurve;
                    for (const r in t) {
                        const n = {
                                id: t[r].id,
                                times: t[r].KeyTime.a.map(T),
                                values: t[r].KeyValueFloat.a
                            },
                            o = u.get(n.id);
                        if (void 0 !== o) {
                            const t = o.parents[0].ID,
                                r = o.parents[0].relationship;
                            r.match(/X/) ? e.get(t).curves.x = n : r.match(/Y/) ? e.get(t).curves.y = n : r.match(/Z/) ? e.get(t).curves.z = n : r.match(/DeformPercent/) && e.has(t) && (e.get(t).curves.morph = n)
                        }
                    }
                }
                parseAnimationLayers(e) {
                    const t = c.Objects.AnimationLayer,
                        r = new Map;
                    for (const o in t) {
                        const t = [],
                            a = u.get(parseInt(o));
                        void 0 !== a && (a.children.forEach((function(r, o) {
                            if (e.has(r.ID)) {
                                const a = e.get(r.ID);
                                if (void 0 !== a.curves.x || void 0 !== a.curves.y || void 0 !== a.curves.z) {
                                    if (void 0 === t[o]) {
                                        const e = u.get(r.ID).parents.filter((function(e) {
                                            return void 0 !== e.relationship
                                        }))[0].ID;
                                        if (void 0 !== e) {
                                            const a = c.Objects.Model[e.toString()];
                                            if (void 0 === a) return void l.warn("THREE.FBXLoader: Encountered a unused curve.", r);
                                            const s = {
                                                modelName: a.attrName ? n.PropertyBinding.sanitizeNodeName(a.attrName) : "",
                                                ID: a.id,
                                                initialPosition: [0, 0, 0],
                                                initialRotation: [0, 0, 0],
                                                initialScale: [1, 1, 1]
                                            };
                                            p.traverse((function(e) {
                                                e.ID === a.id && (s.transform = e.matrix, e.userData.transformData && (s.eulerOrder = e.userData.transformData.eulerOrder))
                                            })), s.transform || (s.transform = new n.Matrix4), "PreRotation" in a && (s.preRotation = a.PreRotation.value), "PostRotation" in a && (s.postRotation = a.PostRotation.value), t[o] = s
                                        }
                                    }
                                    t[o] && (t[o][a.attr] = a)
                                } else if (void 0 !== a.curves.morph) {
                                    if (void 0 === t[o]) {
                                        const e = u.get(r.ID).parents.filter((function(e) {
                                                return void 0 !== e.relationship
                                            }))[0].ID,
                                            a = u.get(e).parents[0].ID,
                                            s = u.get(a).parents[0].ID,
                                            i = u.get(s).parents[0].ID,
                                            l = c.Objects.Model[i],
                                            p = {
                                                modelName: l.attrName ? n.PropertyBinding.sanitizeNodeName(l.attrName) : "",
                                                morphName: c.Objects.Deformer[e].attrName
                                            };
                                        t[o] = p
                                    }
                                    t[o][a.attr] = a
                                }
                            }
                        })), r.set(parseInt(o), t))
                    }
                    return r
                }
                parseAnimStacks(e) {
                    const t = c.Objects.AnimationStack,
                        r = {};
                    for (const n in t) {
                        const o = u.get(parseInt(n)).children;
                        o.length > 1 && l.warn("THREE.FBXLoader: Encountered an animation stack with multiple layers, this is currently not supported. Ignoring subsequent layers.");
                        const a = e.get(o[0].ID);
                        r[n] = {
                            name: t[n].attrName,
                            layer: a
                        }
                    }
                    return r
                }
                addClip(e) {
                    let t = [];
                    const r = this;
                    return e.layer.forEach((function(e) {
                        t = t.concat(r.generateTracks(e))
                    })), new n.AnimationClip(e.name, -1, t)
                }
                generateTracks(e) {
                    const t = [];
                    let r = new n.Vector3,
                        o = new n.Vector3;
                    if (e.transform && e.transform.decompose(r, new n.Quaternion, o), r = r.toArray(), o = o.toArray(), void 0 !== e.T && Object.keys(e.T.curves).length > 0) {
                        const n = this.generateVectorTrack(e.modelName, e.T.curves, r, "position");
                        void 0 !== n && t.push(n)
                    }
                    if (void 0 !== e.R && Object.keys(e.R.curves).length > 0) {
                        const r = this.generateRotationTrack(e.modelName, e.R.curves, e.preRotation, e.postRotation, e.eulerOrder);
                        void 0 !== r && t.push(r)
                    }
                    if (void 0 !== e.S && Object.keys(e.S.curves).length > 0) {
                        const r = this.generateVectorTrack(e.modelName, e.S.curves, o, "scale");
                        void 0 !== r && t.push(r)
                    }
                    if (void 0 !== e.DeformPercent) {
                        const r = this.generateMorphTrack(e);
                        void 0 !== r && t.push(r)
                    }
                    return t
                }
                generateVectorTrack(e, t, r, o) {
                    const a = this.getTimesForAllAxes(t),
                        s = this.getKeyframeTrackValues(a, t, r);
                    return new n.VectorKeyframeTrack(e + "." + o, a, s)
                }
                generateRotationTrack(e, t, r, o, a) {
                    let s, i;
                    if (void 0 !== t.x && void 0 !== t.y && void 0 !== t.z) {
                        const e = this.interpolateRotations(t.x, t.y, t.z, a);
                        s = e[0], i = e[1]
                    }
                    void 0 !== r && ((r = r.map(n.MathUtils.degToRad)).push(a), r = (new n.Euler).fromArray(r), r = (new n.Quaternion).setFromEuler(r)), void 0 !== o && ((o = o.map(n.MathUtils.degToRad)).push(a), o = (new n.Euler).fromArray(o), o = (new n.Quaternion).setFromEuler(o).invert());
                    const l = new n.Quaternion,
                        c = new n.Euler,
                        u = [];
                    if (!i || !s) return new n.QuaternionKeyframeTrack(e + ".quaternion", [0], [0]);
                    for (let e = 0; e < i.length; e += 3) c.set(i[e], i[e + 1], i[e + 2], a), l.setFromEuler(c), void 0 !== r && l.premultiply(r), void 0 !== o && l.multiply(o), e > 2 && (new n.Quaternion).fromArray(u, (e - 3) / 3 * 4).dot(l) < 0 && l.set(-l.x, -l.y, -l.z, -l.w), l.toArray(u, e / 3 * 4);
                    return new n.QuaternionKeyframeTrack(e + ".quaternion", s, u)
                }
                generateMorphTrack(e) {
                    const t = e.DeformPercent.curves.morph,
                        r = t.values.map((function(e) {
                            return e / 100
                        })),
                        o = p.getObjectByName(e.modelName).morphTargetDictionary[e.morphName];
                    return new n.NumberKeyframeTrack(e.modelName + ".morphTargetInfluences[" + o + "]", t.times, r)
                }
                getTimesForAllAxes(e) {
                    let t = [];
                    if (void 0 !== e.x && (t = t.concat(e.x.times)), void 0 !== e.y && (t = t.concat(e.y.times)), void 0 !== e.z && (t = t.concat(e.z.times)), t = t.sort((function(e, t) {
                            return e - t
                        })), t.length > 1) {
                        let e = 1,
                            r = t[0];
                        for (let n = 1; n < t.length; n++) {
                            const o = t[n];
                            o !== r && (t[e] = o, r = o, e++)
                        }
                        t = t.slice(0, e)
                    }
                    return t
                }
                getKeyframeTrackValues(e, t, r) {
                    const n = r,
                        o = [];
                    let a = -1,
                        s = -1,
                        i = -1;
                    return e.forEach((function(e) {
                        if (t.x && (a = t.x.times.indexOf(e)), t.y && (s = t.y.times.indexOf(e)), t.z && (i = t.z.times.indexOf(e)), -1 !== a) {
                            const e = t.x.values[a];
                            o.push(e), n[0] = e
                        } else o.push(n[0]);
                        if (-1 !== s) {
                            const e = t.y.values[s];
                            o.push(e), n[1] = e
                        } else o.push(n[1]);
                        if (-1 !== i) {
                            const e = t.z.values[i];
                            o.push(e), n[2] = e
                        } else o.push(n[2])
                    })), o
                }
                interpolateRotations(e, t, r, o) {
                    const a = [],
                        s = [];
                    a.push(e.times[0]), s.push(n.MathUtils.degToRad(e.values[0])), s.push(n.MathUtils.degToRad(t.values[0])), s.push(n.MathUtils.degToRad(r.values[0]));
                    for (let i = 1; i < e.values.length; i++) {
                        const l = [e.values[i - 1], t.values[i - 1], r.values[i - 1]];
                        if (isNaN(l[0]) || isNaN(l[1]) || isNaN(l[2])) continue;
                        const c = l.map(n.MathUtils.degToRad),
                            u = [e.values[i], t.values[i], r.values[i]];
                        if (isNaN(u[0]) || isNaN(u[1]) || isNaN(u[2])) continue;
                        const p = u.map(n.MathUtils.degToRad),
                            h = [u[0] - l[0], u[1] - l[1], u[2] - l[2]],
                            d = [Math.abs(h[0]), Math.abs(h[1]), Math.abs(h[2])];
                        if (d[0] >= 180 || d[1] >= 180 || d[2] >= 180) {
                            const t = Math.max(...d) / 180,
                                r = new n.Euler(...c, o),
                                l = new n.Euler(...p, o),
                                u = (new n.Quaternion).setFromEuler(r),
                                h = (new n.Quaternion).setFromEuler(l);
                            u.dot(h) && h.set(-h.x, -h.y, -h.z, -h.w);
                            const f = e.times[i - 1],
                                m = e.times[i] - f,
                                g = new n.Quaternion,
                                v = new n.Euler;
                            for (let e = 0; e < 1; e += 1 / t) g.copy(u.clone().slerp(h.clone(), e)), a.push(f + e * m), v.setFromQuaternion(g, o), s.push(v.x), s.push(v.y), s.push(v.z)
                        } else a.push(e.times[i]), s.push(n.MathUtils.degToRad(e.values[i])), s.push(n.MathUtils.degToRad(t.values[i])), s.push(n.MathUtils.degToRad(r.values[i]))
                    }
                    return [a, s]
                }
            }
            class g {
                getPrevNode() {
                    return this.nodeStack[this.currentIndent - 2]
                }
                getCurrentNode() {
                    return this.nodeStack[this.currentIndent - 1]
                }
                getCurrentProp() {
                    return this.currentProp
                }
                pushStack(e) {
                    this.nodeStack.push(e), this.currentIndent += 1
                }
                popStack() {
                    this.nodeStack.pop(), this.currentIndent -= 1
                }
                setCurrentProp(e, t) {
                    this.currentProp = e, this.currentPropName = t
                }
                parse(e) {
                    this.currentIndent = 0, this.allNodes = new w, this.nodeStack = [], this.currentProp = [], this.currentPropName = "";
                    const t = this,
                        r = e.split(/[\r\n]+/);
                    return r.forEach((function(e, n) {
                        const o = e.match(/^[\s\t]*;/),
                            a = e.match(/^[\s\t]*$/);
                        if (o || a) return;
                        const s = e.match("^\\t{" + t.currentIndent + "}(\\w+):(.*){", ""),
                            i = e.match("^\\t{" + t.currentIndent + "}(\\w+):[\\s\\t\\r\\n](.*)"),
                            l = e.match("^\\t{" + (t.currentIndent - 1) + "}}");
                        s ? t.parseNodeBegin(e, s) : i ? t.parseNodeProperty(e, i, r[++n]) : l ? t.popStack() : e.match(/^[^\s\t}]/) && t.parseNodePropertyContinued(e)
                    })), this.allNodes
                }
                parseNodeBegin(e, t) {
                    const r = t[1].trim().replace(/^"/, "").replace(/"$/, ""),
                        n = t[2].split(",").map((function(e) {
                            return e.trim().replace(/^"/, "").replace(/"$/, "")
                        })),
                        o = {
                            name: r
                        },
                        a = this.parseNodeAttr(n),
                        s = this.getCurrentNode();
                    0 === this.currentIndent ? this.allNodes.add(r, o) : r in s ? ("PoseNode" === r ? s.PoseNode.push(o) : void 0 !== s[r].id && (s[r] = {}, s[r][s[r].id] = s[r]), "" !== a.id && (s[r][a.id] = o)) : "number" == typeof a.id ? (s[r] = {}, s[r][a.id] = o) : "Properties70" !== r && (s[r] = "PoseNode" === r ? [o] : o), "number" == typeof a.id && (o.id = a.id), "" !== a.name && (o.attrName = a.name), "" !== a.type && (o.attrType = a.type), this.pushStack(o)
                }
                parseNodeAttr(e) {
                    let t = e[0];
                    "" !== e[0] && (t = parseInt(e[0]), isNaN(t) && (t = e[0]));
                    let r = "",
                        n = "";
                    return e.length > 1 && (r = e[1].replace(/^(\w+)::/, ""), n = e[2]), {
                        id: t,
                        name: r,
                        type: n
                    }
                }
                parseNodeProperty(e, t, r) {
                    let n = t[1].replace(/^"/, "").replace(/"$/, "").trim(),
                        o = t[2].replace(/^"/, "").replace(/"$/, "").trim();
                    "Content" === n && "," === o && (o = r.replace(/"/g, "").replace(/,$/, "").trim());
                    const a = this.getCurrentNode();
                    if ("Properties70" !== a.name) {
                        if ("C" === n) {
                            const e = o.split(",").slice(1),
                                t = parseInt(e[0]),
                                r = parseInt(e[1]);
                            let s = o.split(",").slice(3);
                            s = s.map((function(e) {
                                    return e.trim().replace(/^"/, "")
                                })), n = "connections", o = [t, r],
                                function(e, t) {
                                    for (let r = 0, n = e.length, o = t.length; r < o; r++, n++) e[n] = t[r]
                                }(o, s), void 0 === a[n] && (a[n] = [])
                        }
                        "Node" === n && (a.id = o), n in a && Array.isArray(a[n]) ? a[n].push(o) : "a" !== n ? a[n] = o : a.a = o, this.setCurrentProp(a, n), "a" === n && "," !== o.slice(-1) && (a.a = L(o))
                    } else this.parseNodeSpecialProperty(e, n, o)
                }
                parseNodePropertyContinued(e) {
                    const t = this.getCurrentNode();
                    t.a += e, "," !== e.slice(-1) && (t.a = L(t.a))
                }
                parseNodeSpecialProperty(e, t, r) {
                    const n = r.split('",').map((function(e) {
                            return e.trim().replace(/^\"/, "").replace(/\s/, "_")
                        })),
                        o = n[0],
                        a = n[1],
                        s = n[2],
                        i = n[3];
                    let l = n[4];
                    switch (a) {
                        case "int":
                        case "enum":
                        case "bool":
                        case "ULongLong":
                        case "double":
                        case "Number":
                        case "FieldOfView":
                            l = parseFloat(l);
                            break;
                        case "Color":
                        case "ColorRGB":
                        case "Vector3D":
                        case "Lcl_Translation":
                        case "Lcl_Rotation":
                        case "Lcl_Scaling":
                            l = L(l)
                    }
                    this.getPrevNode()[o] = {
                        type: a,
                        type2: s,
                        flag: i,
                        value: l
                    }, this.setCurrentProp(this.getPrevNode(), o)
                }
            }
            class v {
                parse(e) {
                    const t = new y(e);
                    t.skip(23);
                    const r = t.getUint32();
                    if (r < 6400) throw new Error("THREE.FBXLoader: FBX version not supported, FileVersion: " + r);
                    const n = new w;
                    for (; !this.endOfContent(t);) {
                        const e = this.parseNode(t, r);
                        null !== e && n.add(e.name, e)
                    }
                    return n
                }
                endOfContent(e) {
                    return e.size() % 16 == 0 ? (e.getOffset() + 160 + 16 & -16) >= e.size() : e.getOffset() + 160 + 16 >= e.size()
                }
                parseNode(e, t) {
                    const r = {},
                        n = t >= 7500 ? e.getUint64() : e.getUint32(),
                        o = t >= 7500 ? e.getUint64() : e.getUint32();
                    t >= 7500 ? e.getUint64() : e.getUint32();
                    const a = e.getUint8(),
                        s = e.getString(a);
                    if (0 === n) return null;
                    const i = [];
                    for (let t = 0; t < o; t++) i.push(this.parseProperty(e));
                    const l = i.length > 0 ? i[0] : "",
                        c = i.length > 1 ? i[1] : "",
                        u = i.length > 2 ? i[2] : "";
                    for (r.singleProperty = 1 === o && e.getOffset() === n; n > e.getOffset();) {
                        const n = this.parseNode(e, t);
                        null !== n && this.parseSubNode(s, r, n)
                    }
                    return r.propertyList = i, "number" == typeof l && (r.id = l), "" !== c && (r.attrName = c), "" !== u && (r.attrType = u), "" !== s && (r.name = s), r
                }
                parseSubNode(e, t, r) {
                    if (!0 === r.singleProperty) {
                        const e = r.propertyList[0];
                        Array.isArray(e) ? (t[r.name] = r, r.a = e) : t[r.name] = e
                    } else if ("Connections" === e && "C" === r.name) {
                        const e = [];
                        r.propertyList.forEach((function(t, r) {
                            0 !== r && e.push(t)
                        })), void 0 === t.connections && (t.connections = []), t.connections.push(e)
                    } else if ("Properties70" === r.name) Object.keys(r).forEach((function(e) {
                        t[e] = r[e]
                    }));
                    else if ("Properties70" === e && "P" === r.name) {
                        let e = r.propertyList[0],
                            n = r.propertyList[1];
                        const o = r.propertyList[2],
                            a = r.propertyList[3];
                        let s;
                        0 === e.indexOf("Lcl ") && (e = e.replace("Lcl ", "Lcl_")), 0 === n.indexOf("Lcl ") && (n = n.replace("Lcl ", "Lcl_")), s = "Color" === n || "ColorRGB" === n || "Vector" === n || "Vector3D" === n || 0 === n.indexOf("Lcl_") ? [r.propertyList[4], r.propertyList[5], r.propertyList[6]] : r.propertyList[4], t[e] = {
                            type: n,
                            type2: o,
                            flag: a,
                            value: s
                        }
                    } else void 0 === t[r.name] ? "number" == typeof r.id ? (t[r.name] = {}, t[r.name][r.id] = r) : t[r.name] = r : "PoseNode" === r.name ? (Array.isArray(t[r.name]) || (t[r.name] = [t[r.name]]), t[r.name].push(r)) : void 0 === t[r.name][r.id] && (t[r.name][r.id] = r)
                }
                parseProperty(e) {
                    const t = e.getString(1);
                    let r;
                    switch (t) {
                        case "C":
                            return e.getBoolean();
                        case "D":
                            return e.getFloat64();
                        case "F":
                            return e.getFloat32();
                        case "I":
                            return e.getInt32();
                        case "L":
                            return e.getInt64();
                        case "R":
                            return r = e.getUint32(), e.getArrayBuffer(r);
                        case "S":
                            return r = e.getUint32(), e.getString(r);
                        case "Y":
                            return e.getInt16();
                        case "b":
                        case "c":
                        case "d":
                        case "f":
                        case "i":
                        case "l":
                            const n = e.getUint32(),
                                a = e.getUint32(),
                                s = e.getUint32();
                            if (0 === a) switch (t) {
                                case "b":
                                case "c":
                                    return e.getBooleanArray(n);
                                case "d":
                                    return e.getFloat64Array(n);
                                case "f":
                                    return e.getFloat32Array(n);
                                case "i":
                                    return e.getInt32Array(n);
                                case "l":
                                    return e.getInt64Array(n)
                            }
                            const i = o.HT(new Uint8Array(e.getArrayBuffer(s))),
                                l = new y(i.buffer);
                            switch (t) {
                                case "b":
                                case "c":
                                    return l.getBooleanArray(n);
                                case "d":
                                    return l.getFloat64Array(n);
                                case "f":
                                    return l.getFloat32Array(n);
                                case "i":
                                    return l.getInt32Array(n);
                                case "l":
                                    return l.getInt64Array(n)
                            }
                            break;
                        default:
                            throw new Error("THREE.FBXLoader: Unknown property type " + t)
                    }
                }
            }
            class y {
                constructor(e, t) {
                    this.dv = new DataView(e), this.offset = 0, this.littleEndian = void 0 === t || t, this._textDecoder = new TextDecoder
                }
                getOffset() {
                    return this.offset
                }
                size() {
                    return this.dv.buffer.byteLength
                }
                skip(e) {
                    this.offset += e
                }
                getBoolean() {
                    return 1 == (1 & this.getUint8())
                }
                getBooleanArray(e) {
                    const t = [];
                    for (let r = 0; r < e; r++) t.push(this.getBoolean());
                    return t
                }
                getUint8() {
                    const e = this.dv.getUint8(this.offset);
                    return this.offset += 1, e
                }
                getInt16() {
                    const e = this.dv.getInt16(this.offset, this.littleEndian);
                    return this.offset += 2, e
                }
                getInt32() {
                    const e = this.dv.getInt32(this.offset, this.littleEndian);
                    return this.offset += 4, e
                }
                getInt32Array(e) {
                    const t = [];
                    for (let r = 0; r < e; r++) t.push(this.getInt32());
                    return t
                }
                getUint32() {
                    const e = this.dv.getUint32(this.offset, this.littleEndian);
                    return this.offset += 4, e
                }
                getInt64() {
                    let e, t;
                    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), 2147483648 & t ? (t = 4294967295 & ~t, e = 4294967295 & ~e, 4294967295 === e && (t = t + 1 & 4294967295), e = e + 1 & 4294967295, -(4294967296 * t + e)) : 4294967296 * t + e
                }
                getInt64Array(e) {
                    const t = [];
                    for (let r = 0; r < e; r++) t.push(this.getInt64());
                    return t
                }
                getUint64() {
                    let e, t;
                    return this.littleEndian ? (e = this.getUint32(), t = this.getUint32()) : (t = this.getUint32(), e = this.getUint32()), 4294967296 * t + e
                }
                getFloat32() {
                    const e = this.dv.getFloat32(this.offset, this.littleEndian);
                    return this.offset += 4, e
                }
                getFloat32Array(e) {
                    const t = [];
                    for (let r = 0; r < e; r++) t.push(this.getFloat32());
                    return t
                }
                getFloat64() {
                    const e = this.dv.getFloat64(this.offset, this.littleEndian);
                    return this.offset += 8, e
                }
                getFloat64Array(e) {
                    const t = [];
                    for (let r = 0; r < e; r++) t.push(this.getFloat64());
                    return t
                }
                getArrayBuffer(e) {
                    const t = this.dv.buffer.slice(this.offset, this.offset + e);
                    return this.offset += e, t
                }
                getString(e) {
                    const t = this.offset;
                    let r = new Uint8Array(this.dv.buffer, t, e);
                    this.skip(e);
                    const n = r.indexOf(0);
                    return n >= 0 && (r = new Uint8Array(this.dv.buffer, t, n)), this._textDecoder.decode(r)
                }
            }
            class w {
                add(e, t) {
                    this[e] = t
                }
            }

            function x(e) {
                const t = e.match(/FBXVersion: (\d+)/);
                if (t) return parseInt(t[1]);
                throw new Error("THREE.FBXLoader: Cannot find the version number for the file given.")
            }

            function T(e) {
                return e / 46186158e3
            }
            const I = [];

            function b(e, t, r, n) {
                let o;
                switch (n.mappingType) {
                    case "ByPolygonVertex":
                        o = e;
                        break;
                    case "ByPolygon":
                        o = t;
                        break;
                    case "ByVertice":
                        o = r;
                        break;
                    case "AllSame":
                        o = n.indices[0];
                        break;
                    default:
                        l.warn("THREE.FBXLoader: unknown attribute mapping type " + n.mappingType)
                }
                "IndexToDirect" === n.referenceType && (o = n.indices[o]);
                const a = o * n.dataSize,
                    s = a + n.dataSize;
                return function(e, t, r, n) {
                    for (let o = r, a = 0; o < n; o++, a++) e[a] = t[o];
                    return e
                }(I, n.buffer, a, s)
            }
            const E = new n.Euler,
                M = new n.Vector3;

            function A(e) {
                const t = new n.Matrix4,
                    r = new n.Matrix4,
                    o = new n.Matrix4,
                    a = new n.Matrix4,
                    s = new n.Matrix4,
                    i = new n.Matrix4,
                    l = new n.Matrix4,
                    c = new n.Matrix4,
                    u = new n.Matrix4,
                    p = new n.Matrix4,
                    h = new n.Matrix4,
                    d = new n.Matrix4,
                    f = e.inheritType ? e.inheritType : 0;
                if (e.translation && t.setPosition(M.fromArray(e.translation)), e.preRotation) {
                    const t = e.preRotation.map(n.MathUtils.degToRad);
                    t.push(e.eulerOrder || n.Euler.DEFAULT_ORDER), r.makeRotationFromEuler(E.fromArray(t))
                }
                if (e.rotation) {
                    const t = e.rotation.map(n.MathUtils.degToRad);
                    t.push(e.eulerOrder || n.Euler.DEFAULT_ORDER), o.makeRotationFromEuler(E.fromArray(t))
                }
                if (e.postRotation) {
                    const t = e.postRotation.map(n.MathUtils.degToRad);
                    t.push(e.eulerOrder || n.Euler.DEFAULT_ORDER), a.makeRotationFromEuler(E.fromArray(t)), a.invert()
                }
                e.scale && s.scale(M.fromArray(e.scale)), e.scalingOffset && l.setPosition(M.fromArray(e.scalingOffset)), e.scalingPivot && i.setPosition(M.fromArray(e.scalingPivot)), e.rotationOffset && c.setPosition(M.fromArray(e.rotationOffset)), e.rotationPivot && u.setPosition(M.fromArray(e.rotationPivot)), e.parentMatrixWorld && (h.copy(e.parentMatrix), p.copy(e.parentMatrixWorld));
                const m = r.clone().multiply(o).multiply(a),
                    g = new n.Matrix4;
                g.extractRotation(p);
                const v = new n.Matrix4;
                v.copyPosition(p);
                const y = v.clone().invert().multiply(p),
                    w = g.clone().invert().multiply(y),
                    x = s,
                    T = new n.Matrix4;
                if (0 === f) T.copy(g).multiply(m).multiply(w).multiply(x);
                else if (1 === f) T.copy(g).multiply(w).multiply(m).multiply(x);
                else {
                    const e = (new n.Matrix4).scale((new n.Vector3).setFromMatrixScale(h)).clone().invert(),
                        t = w.clone().multiply(e);
                    T.copy(g).multiply(m).multiply(t).multiply(x)
                }
                const I = u.clone().invert(),
                    b = i.clone().invert();
                let A = t.clone().multiply(c).multiply(u).multiply(r).multiply(o).multiply(a).multiply(I).multiply(l).multiply(i).multiply(s).multiply(b);
                const D = (new n.Matrix4).copyPosition(A),
                    L = p.clone().multiply(D);
                return d.copyPosition(L), A = d.clone().multiply(T), A.premultiply(p.invert()), A
            }

            function D(e) {
                const t = ["ZYX", "YZX", "XZY", "ZXY", "YXZ", "XYZ"];
                return 6 === (e = e || 0) ? (l.warn("THREE.FBXLoader: unsupported Euler Order: Spherical XYZ. Animations and rotations may be incorrect."), t[0]) : t[e]
            }

            function L(e) {
                return e.split(",").map((function(e) {
                    return parseFloat(e)
                }))
            }

            function N(e, t, r) {
                return void 0 === t && (t = 0), void 0 === r && (r = e.byteLength), (new TextDecoder).decode(new Uint8Array(e, t, r))
            }
        }
    }
]);