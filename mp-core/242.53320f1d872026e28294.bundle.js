"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [242], {
        242: (e, i, t) => {
            t.r(i), t.d(i, {
                default: () => s
            });
            class s {
                id = "core.compatibility.mixamo";
                name = "Mixamo Compatibility";
                description = "This plugin handles converting models and animations from Mixamo.com.";
                version = "1.0.0";
                prefixes = ["mixamorig1:", "mixamorig:", "mixamorig1", "mixamorig"];
                $onEntityRendererLoad(e) {
                    if (!e.object?.isObject3D) return;
                    let i = !1;
                    e.object.traverse((e => {
                        if (e.isBone && e.name)
                            for (let t of this.prefixes)
                                if (e.name.startsWith(t)) {
                                    e.name = e.name.substring(t.length), i = !0;
                                    break
                                }
                    }));
                    for (let t of e.animationClips || [])
                        for (let s of t.tracks)
                            if (s.name) {
                                for (let e of this.prefixes)
                                    if (s.name.startsWith(e)) {
                                        s.name = s.name.substring(e.length), i = !0;
                                        break
                                    } if (i && !s.name.startsWith("Hips.") && (s.name.endsWith(".position") || s.name.endsWith(".scale")) && (t.tracks = t.tracks.filter((e => e != s))), i && e.modelInfo?.isFBX && "Hips.position" == s.name)
                                    for (let e = 0; e < s.values.length; e++) s.values[e] *= .01
                            }
                }
            }
        }
    }
]);