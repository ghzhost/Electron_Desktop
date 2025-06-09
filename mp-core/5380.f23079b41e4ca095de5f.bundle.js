"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [5380], {
        55380: (e, a, t) => {
            t.r(a), t.d(a, {
                default: () => r
            });
            class r {
                id = "core.avatars.default";
                name = "Simple Avatar";
                description = "Creates a simple avatar that lets the user put their profile image inside.";
                version = "1.0.0";
                requires = ["backend"];
                provides = ["avatar:default"];
                $getAvatarConfigurations() {
                    const e = ["#eb4034", "#fcba03", "#32a852", "#4287f5", "#9234eb", "#34b1eb", "#343aeb", "#eb34b1"];
                    let a = metapress.profile?.currentProfile?.fields?.profile_image_src || metapress.backend.getAsset("avatars/images/DefaultAvatar.png");
                    return [{
                        avatar_id: "default",
                        avatar_name: "Simple",
                        avatar_description: "",
                        avatar_height: 1.8,
                        type: "mesh",
                        order: -1,
                        url: metapress.backend.getAsset("avatars/DefaultAvatar.glb"),
                        "modifier:avatar-controller": !0,
                        "modifier:physics": !0,
                        physics_enabled: !0,
                        physics_shape: "capsule",
                        physics_lockRotation: !0,
                        physics_anchorBottom: !0,
                        physics_kinematicVelocity: !0,
                        "modifier:transform-smoothing": !0,
                        "modifier:face-movement-direction": !0,
                        "modifier:materials": !0,
                        "replaceMaterial:Body": `color: ${e[Math.floor(Math.random()*e.length)]}`,
                        "replaceMaterial:Head": `image: ${a}`
                    }]
                }
            }
        }
    }
]);