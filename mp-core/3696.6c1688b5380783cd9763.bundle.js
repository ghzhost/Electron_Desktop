"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [3696], {
        73696: (e, s, n) => {
            n.r(s), n.d(s, {
                default: () => r
            });
            var i = n(62371);
            class r {
                id = "core.render.ambient-occlusion";
                name = "Ambient Occlusion";
                description = "Adds ambient occlusion to the scene.";
                version = "1.0.0";
                requires = [];
                provides = ["ambientOcclusion"];
                onLoad() {}
                ssaoeffect = {
                    blendFunction: i.YQ.MULTIPLY,
                    samples: 8,
                    rings: 3,
                    distanceThreshold: .05,
                    distanceFalloff: .03,
                    rangeThreshold: .5,
                    rangeFalloff: .15,
                    luminanceInfluence: .9,
                    radius: .5,
                    scale: .5,
                    bias: .1,
                    resolutionScale: 1
                };
                isEnabled = !0;
                $renderer_getPipelineEffects(e) {
                    if (!this.isEnabled) return [];
                    let s = new i.bn(e, void 0, this.ssaoeffect);
                    return s.priority = -10, [s]
                }
                $renderer_getPipelinePasses(e) {}
            }
        }
    }
]);