"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [1003], {
        91003: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => l
            });
            var s = i(69584),
                r = i(48830),
                a = i(62977),
                n = i(84362),
                o = i(25108);
            class l {
                id = "core.misc.tools.optimize_glb_imports";
                name = "Optimize GLB Imports";
                description = "Allows the user to optimize their .glb files for better performance.";
                requires = ["entities"];
                texture = 2048;
                strength = 0;
                error = 8e-4;
                async optimizeGLTF(e, t, i, l) {
                    this.texture = i, this.strength = t, this.error = l, this.requireExtensionsSet = new Set;
                    const c = {
                            KHR_materials_ior: n.S8,
                            KHR_materials_emissive_strength: n.SE,
                            KHR_draco_mesh_compression: n.r7,
                            EXT_mesh_gpu_instancing: n.Fb,
                            KHR_lights_punctual: n.bO,
                            KHR_texture_transform: n.c7,
                            KHR_texture_basisu: n.S3,
                            KHR_mesh_quantization: n.to,
                            KHR_materials_unlit: n.oN,
                            KHR_materials_clearcoat: n.X4,
                            KHR_materials_sheen: n.V$,
                            KHR_materials_specular: n.UW,
                            KHR_materials_transmission: n.y1,
                            KHR_materials_volume: n.Wh,
                            KHR_materials_anisotropy: n.HN,
                            KHR_materials_pbrSpecularGlossiness: n.z4,
                            KHR_materials_variants: n.vC,
                            KHR_xmp_json_ld: n.FC,
                            KHR_materials_iridescence: n.Gq,
                            EXT_texture_webp: n.oh,
                            EXT_texture_avif: n.t4,
                            EXT_meshopt_compression: n.XD
                        },
                        g = new m(s.Yd.Verbosity.WARN);
                    let p = (new s.AH).setLogger(g);
                    try {
                        let i, s = await this.readFileAsUint8Array(e);
                        try {
                            await p.readBinary(s)
                        } catch (l) {
                            if (o.log("Failed to read binary: ", l), l.message.includes("Missing required extension")) {
                                const e = g.extractExtensionName(l.message);
                                e && g.missingExtensions.add(e)
                            }({
                                io: p,
                                document: i
                            } = await this.SetupMissingExtensions(g, c, p, i, s))
                        }
                        i = await p.readBinary(s), ({
                            io: p,
                            document: i
                        } = await this.SetupMissingExtensions(g, c, p, i, s));
                        try {
                            await i.transform((0, r.LV)(), (0, r.Qs)())
                        } catch (e) {
                            o.log("Error during transformation, trying fallback approach:", e), await i.transform((0, r.Qs)())
                        }
                        try {
                            await this.processTextures(i, this.texture)
                        } catch (l) {
                            o.log("Failed to process textures: ", l)
                        }
                        await i.transform((0, r.xH)(), (0, r.v_)(), (0, r.sr)(), (0, r.uC)({
                            tolerance: 5e-7
                        }), (0, r.og)({
                            simplifier: a.BC,
                            ratio: t,
                            error: l
                        }), (0, r.VJ)());
                        const n = await p.writeBinary(i),
                            m = new Blob([n], {
                                type: "model/gltf-binary"
                            });
                        return new File([m], e.name, {
                            type: m.type,
                            lastModified: (new Date).getTime()
                        })
                    } catch (l) {
                        o.error("Failed to optimize: ", l, "Returning original file")
                    }
                }
                async SetupMissingExtensions(e, t, i, r, a) {
                    const n = e.getMissingExtensions(),
                        o = [];
                    return n.forEach((e => {
                        t[e] && o.push(t[e])
                    })), o.length > 0 && (i = (new s.AH).setLogger(e).registerExtensions(o), r = await i.readBinary(a)), {
                        io: i,
                        document: r
                    }
                }
                backfaceCulling(e) {
                    return t => {
                        for (const i of t.getRoot().listMaterials()) i.setDoubleSided(!e.cull)
                    }
                }
                readFileAsUint8Array(e) {
                    return new Promise(((t, i) => {
                        const s = new FileReader;
                        s.onload = () => {
                            const e = s.result,
                                i = new Uint8Array(e);
                            t(i)
                        }, s.onerror = i, s.readAsArrayBuffer(e)
                    }))
                }
                async processTextures(e, t) {
                    const i = e.getRoot();
                    for (const e of i.listTextures()) {
                        let i = e.getImage();
                        if (i) try {
                            let s = new Blob([i], {
                                    type: e.getMimeType()
                                }),
                                r = await this.resizeImageToOriginalFormat(s, t, t, e.getMimeType()),
                                a = await this.convertAndResizeImage(s, t, t),
                                n = await this.getSmallestBlob([s, r, a]);
                            if (n === s) continue;
                            const o = await this.blobToUint8Array(n);
                            e.setImage(o), n === a && e.setMimeType("image/webp")
                        } catch (e) {
                            o.error("Failed to convert and resize image: ", e)
                        }
                    }
                }
                async getSmallestBlob(e) {
                    let t = 1 / 0,
                        i = null;
                    for (const s of e) {
                        const e = s.size;
                        e >= t || (t = e, i = s)
                    }
                    return i
                }
                async blobToUint8Array(e) {
                    const t = await e.arrayBuffer();
                    return new Uint8Array(t)
                }
                async convertAndResizeImage(e, t, i) {
                    return new Promise(((s, r) => {
                        const a = new Image;
                        a.onload = () => {
                            const e = document.createElement("canvas");
                            e.width = t, e.height = i, e.getContext("2d").drawImage(a, 0, 0, t, i), e.toBlob((e => s(e)), "image/webp", 1)
                        }, a.onerror = r, a.src = URL.createObjectURL(new Blob([e]))
                    }))
                }
                async resizeImageToOriginalFormat(e, t, i, s) {
                    return new Promise(((r, a) => {
                        const n = new Image;
                        n.onload = () => {
                            const e = document.createElement("canvas");
                            e.width = t, e.height = i, e.getContext("2d").drawImage(n, 0, 0, t, i), e.toBlob((e => r(e)), s, 1)
                        }, n.onerror = a, n.src = URL.createObjectURL(new Blob([e]))
                    }))
                }
                $upload_getFileOptimizationStages = () => [{
                    id: "optimize_glb_imports.optimize.glb",
                    name: "Optimize GLB Model",
                    filter: e => e.name.toLowerCase().endsWith(".glb"),
                    settings: [{
                        type: "header",
                        id: "optimize.glb.header",
                        name: "3D Model Optimization"
                    }, {
                        type: "description",
                        id: "optimize.glb.decription",
                        name: "Optimize your 3D model for better performance."
                    }, {
                        type: "select",
                        id: "optimize.glb.texture",
                        name: "Texture Size",
                        placeholder: "2048",
                        values: [512, 1024, 2048, 4096],
                        labels: ["small(512)", "Medium(1024)", "Big(2048)", "Very Big(4096)"],
                        value: 2048,
                        help: "Select the maximum size of the textures in the model."
                    }, {
                        type: "select",
                        id: "optimize.glb.strength",
                        name: "Strength",
                        placeholder: "0.0",
                        values: [0, 5e-9, 5e-5, .005],
                        labels: ["None", "Low", "Medium", "High"],
                        value: 0,
                        help: "Select the strength of mesh the optimization"
                    }],
                    execute: async (e, t) => {
                        let i = e.settings.filter((e => "optimize.glb.texture" === e.id))[0].value,
                            s = e.settings.filter((e => "optimize.glb.strength" === e.id))[0].value;
                        return await this.optimizeGLTF(t, 0, i, s)
                    }
                }, {
                    id: "optimize_glb_imports.optimize.img",
                    name: "Optimize Image",
                    filter: e => e.name.toLowerCase().endsWith(".png") || e.name.toLowerCase().endsWith(".jpg") || e.name.toLowerCase().endsWith(".jpeg") || e.name.toLowerCase().endsWith(".webp"),
                    settings: [{
                        type: "header",
                        id: "optimize.img.header",
                        name: "Image Optimization"
                    }, {
                        type: "description",
                        id: "optimize.img.decription",
                        name: "Optimize your image for better performance."
                    }, {
                        type: "select",
                        id: "optimize.img.size",
                        name: "Image Size",
                        placeholder: "2048",
                        values: [512, 1024, 2048, 4096],
                        labels: ["small(512)", "Medium(1024)", "Big(2048)", "Very Big(4096)"],
                        value: 2048,
                        help: "Select the maximum size of the image."
                    }],
                    execute: async (e, t) => {
                        let i = e.settings.filter((e => "optimize.img.size" === e.id))[0].value,
                            s = t.type,
                            r = await this.resizeImageToOriginalFormat(t, i, i, s);
                        return o.log("Image", r, t), new File([r], t.name, {
                            type: r.type,
                            lastModified: (new Date).getTime()
                        })
                    }
                }]
            }
            class m extends s.Yd {
                constructor(e) {
                    super(e), this.missingExtensions = new Set
                }
                warn(e) {
                    if (!e.includes("Missing optional extension")) return;
                    const t = this.extractExtensionName(e);
                    this.missingExtensions.add(t)
                }
                extractExtensionName(e) {
                    const t = e.match(/"([^"]+)"/);
                    return t ? t[1] : null
                }
                getMissingExtensions() {
                    return this.missingExtensions
                }
            }
        }
    }
]);