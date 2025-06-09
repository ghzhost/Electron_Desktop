"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [341], {
        90341: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => l
            });
            var a = s(80983),
                o = s(25108);
            class l {
                id = "core.assets";
                name = "Asset Manager";
                description = "Handles downloading and managing assets, such as models, images, etc.";
                version = "1.0.0";
                provides = ["assets"];
                cache = {};
                numActiveDownloads = 0;
                load(e, t, s) {
                    let a = e + ":" + t,
                        l = this.cache[a];
                    if (l && !s) return l;
                    let n = this.load2(e, t);
                    return this.cache[a] = n, n.catch((s => {
                        o.warn(`[MetaPress > Assets] Failed to load ${e} from ${t}`, s), this.cache[a] = null
                    })), n
                }
                async load2(e, t) {
                    let s = new URL(t, window.location.href),
                        l = s.pathname;
                    "blob:" == s.protocol && (l = s.href);
                    let n = "",
                        r = "application/octet-stream",
                        i = l.lastIndexOf("."); - 1 != i && (n = l.substring(i).toLowerCase(), r = a.lookup(l) || r);
                    let d = await metapress.plugins.callAllAsync("loadAsset", {
                        type: e,
                        url: t,
                        extension: n,
                        mimetype: r
                    });
                    if (0 == d.length) throw new Error(`Asset type '${e}' (${r}) is not supported.`);
                    return d.length > 1 && o.warn(`[MetaPress > Assets] Multiple loaders responded to type '${e}' (${r}). One will be used at random!`), d[0]
                }
                getProviders() {
                    return metapress.plugins.callAll("getAssetProviders").flat().filter((e => null != e))
                }
                download(e, t) {
                    let s = "_blob:" + e,
                        a = this.cache[s];
                    if (a && !t) return a;
                    let l = this.download2(e);
                    return this.cache[s] = l, l.catch((t => {
                        o.warn(`[MetaPress > Assets] Failed to download ${e}`, t), this.cache[s] = null
                    })), l
                }
                async download2(e) {
                    for (this.numActiveDownloads = this.numActiveDownloads || 0; this.numActiveDownloads >= 8;) await new Promise((e => setTimeout(e, 100)));
                    try {
                        this.numActiveDownloads += 1;
                        let t = await fetch(e);
                        if (!t.ok) throw new Error(`Unable to load file: ${t.status} ${t.statusText}`);
                        return await t.blob()
                    } finally {
                        this.numActiveDownloads -= 1
                    }
                }
                $loadAsset(e) {
                    return "blob" == e.type ? this.download(e.url) : "string" == e.type ? this.download(e.url).then((e => e.text())) : "image" == e.type ? new Promise(((t, s) => {
                        let a = new Image;
                        a.crossOrigin = "anonymous", a.src = e.url, a.onload = () => t(a), a.onerror = () => s(new Error("Unable to load image."))
                    })) : void 0
                }
            }
        }
    }
]);