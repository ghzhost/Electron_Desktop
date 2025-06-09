"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [4240], {
        54240: (a, t, e) => {
            e.r(t), e.d(t, {
                default: () => r
            });
            class r {
                id = "core.avatars.extra";
                name = "Extra Avatars";
                description = "A selection of avatars for users to use.";
                version = "1.0.0";
                requires = ["backend"];
                get provides() {
                    return this.avatars.map((a => "avatar:" + a.avatar_id))
                }
                avatars = [];
                $getAvatarConfigurations() {
                    return this.avatars
                }
                mixamoAvatar = {
                    type: "mesh",
                    mesh_bounding_box: !0,
                    "modifier:avatar-controller": !0,
                    "modifier:physics": !0,
                    physics_enabled: !0,
                    physics_shape: "capsule",
                    physics_lockRotation: !0,
                    physics_anchorBottom: !0,
                    physics_kinematicVelocity: !0,
                    "modifier:transform-smoothing": !0,
                    "modifier:face-movement-direction": !0,
                    "modifier:animator": !0
                };
                onLoad() {
                    this.avatars = [{
                        avatar_id: "extra.dart",
                        avatar_image: metapress.backend.getAsset("avatars/images/dart.jpg"),
                        avatar_name: "Arty",
                        avatar_description: "Arty",
                        avatar_height: 1.8,
                        avatar_walkSpeed: 1.2,
                        avatar_runSpeed: 4,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/logo.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.brandon",
                        avatar_image: metapress.backend.getAsset("avatars/images/brandon.jpg"),
                        avatar_name: "Brandon",
                        avatar_description: "Brandon from RPM",
                        avatar_height: 1.8,
                        avatar_walkSpeed: 1.2,
                        avatar_runSpeed: 4,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/brandon.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.jess",
                        avatar_image: metapress.backend.getAsset("avatars/images/jess.jpg"),
                        avatar_name: "Jess",
                        avatar_description: "Jess from RPM",
                        avatar_height: 1.8,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/jess.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.dena",
                        avatar_image: metapress.backend.getAsset("avatars/images/dena.jpg"),
                        avatar_name: "Dena",
                        avatar_description: "Dena from RPM",
                        avatar_height: 1.8,
                        avatar_walkSpeed: 1.2,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/dena.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.charles",
                        avatar_image: metapress.backend.getAsset("avatars/images/charles.jpg"),
                        avatar_name: "Charles",
                        avatar_description: "Charles from RPM",
                        avatar_height: 1.8,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/charles.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.jim",
                        avatar_image: metapress.backend.getAsset("avatars/images/jim.jpg"),
                        avatar_name: "Jim",
                        avatar_description: "Jim from RPM",
                        avatar_height: 1.8,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/jim.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.joslin",
                        avatar_image: metapress.backend.getAsset("avatars/images/joslin.jpg"),
                        avatar_name: "Joslin",
                        avatar_description: "Joslin from RPM",
                        avatar_height: 1.8,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/joslin.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.justin",
                        avatar_image: metapress.backend.getAsset("avatars/images/justin.jpg"),
                        avatar_name: "Justin",
                        avatar_description: "Justin from RPM",
                        avatar_height: 1.8,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/justin.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.monique",
                        avatar_image: metapress.backend.getAsset("avatars/images/monique.jpg"),
                        avatar_name: "Monique",
                        avatar_description: "Monique from RPM",
                        avatar_height: 1.8,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/monique.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.tyler",
                        avatar_image: metapress.backend.getAsset("avatars/images/tyler.jpg"),
                        avatar_name: "Tyler",
                        avatar_description: "Tyler from RPM",
                        avatar_height: 1.8,
                        extra_offset_y: 0,
                        url: metapress.backend.getAsset("avatars/tyler.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.amy",
                        avatar_image: metapress.backend.getAsset("avatars/images/amy.jpg"),
                        avatar_name: "Amy",
                        avatar_description: "Amy from Mixamo.com",
                        avatar_height: 1.4,
                        avatar_walkSpeed: 1.2,
                        avatar_runSpeed: 4,
                        extra_offset_y: -.2,
                        url: metapress.backend.getAsset("avatars/amy.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.mannequin",
                        avatar_image: metapress.backend.getAsset("avatars/images/manny.jpg"),
                        avatar_name: "Mannequin",
                        avatar_description: "Mannequin from Mixamo.com",
                        avatar_height: 1.7,
                        extra_offset_y: .05,
                        url: metapress.backend.getAsset("avatars/mannequin.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.elvis",
                        avatar_image: metapress.backend.getAsset("avatars/images/elvis.jpg"),
                        avatar_name: "Elvis",
                        avatar_description: "Elvis from Mixamo.com",
                        avatar_height: 1.5,
                        avatar_walkSpeed: 1.2,
                        extra_offset_y: -.1,
                        url: metapress.backend.getAsset("avatars/elvis.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.knight",
                        avatar_image: metapress.backend.getAsset("avatars/images/knight.jpg"),
                        avatar_name: "Knight",
                        avatar_description: "Knight D Pelegrini from Mixamo.com",
                        avatar_height: 2,
                        extra_offset_y: .2,
                        url: metapress.backend.getAsset("avatars/knight.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.paladin",
                        avatar_image: metapress.backend.getAsset("avatars/images/paladin.jpg"),
                        avatar_name: "Paladin",
                        avatar_description: "Paladin J Nordstrom from Mixamo.com",
                        avatar_height: 1.7,
                        extra_offset_y: -.05,
                        url: metapress.backend.getAsset("avatars/paladin.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.ybot",
                        avatar_image: metapress.backend.getAsset("avatars/images/y-bot.jpg"),
                        avatar_name: "Y Bot",
                        avatar_description: "Y Bot from Mixamo.com",
                        avatar_height: 1.7,
                        extra_offset_y: .05,
                        url: metapress.backend.getAsset("avatars/ybot.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.xbot",
                        avatar_image: metapress.backend.getAsset("avatars/images/x-bot.jpg"),
                        avatar_name: "X Bot",
                        avatar_description: "X Bot from Mixamo.com",
                        avatar_height: 1.7,
                        extra_offset_y: .05,
                        url: metapress.backend.getAsset("avatars/xbot.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.ely",
                        avatar_image: metapress.backend.getAsset("avatars/images/ely.jpg"),
                        avatar_name: "Ely",
                        avatar_description: "Ely By K.Atienza from Mixamo.com",
                        avatar_height: 1.7,
                        url: metapress.backend.getAsset("avatars/ely.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.medea",
                        avatar_image: metapress.backend.getAsset("avatars/images/medea.jpg"),
                        avatar_name: "Medea",
                        avatar_description: "Medea By M. Arrebola from Mixamo.com",
                        avatar_height: 1.5,
                        extra_offset_y: .1,
                        url: metapress.backend.getAsset("avatars/medea.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.lola",
                        avatar_image: metapress.backend.getAsset("avatars/images/lola.jpg"),
                        avatar_name: "Lola",
                        avatar_description: "Lola By M. Arrebola from Mixamo.com",
                        avatar_height: 1.7,
                        extra_offset_y: .15,
                        url: metapress.backend.getAsset("avatars/lola.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.granny",
                        avatar_image: metapress.backend.getAsset("avatars/images/granny.jpg"),
                        avatar_name: "Granny",
                        avatar_description: "Sporty Granny  from Mixamo.com",
                        avatar_height: 1.5,
                        avatar_walkSpeed: 1.2,
                        extra_offset_y: -.15,
                        url: metapress.backend.getAsset("avatars/granny.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.pirate",
                        avatar_image: metapress.backend.getAsset("avatars/images/pirate.jpg"),
                        avatar_name: "Pirate",
                        avatar_description: "Pirate By P. Konstantinov from Mixamo.com",
                        avatar_height: 1.7,
                        extra_offset_y: .05,
                        url: metapress.backend.getAsset("avatars/pirate.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.franco",
                        avatar_image: metapress.backend.getAsset("avatars/images/franco.jpg"),
                        avatar_name: "Franco",
                        avatar_description: "Franco",
                        avatar_height: 1.7,
                        url: metapress.backend.getAsset("avatars/franco.glb"),
                        ...this.mixamoAvatar
                    }, {
                        avatar_id: "extra.vrguy",
                        avatar_image: metapress.backend.getAsset("avatars/images/vrguy.jpg"),
                        avatar_name: "VR Guy",
                        avatar_description: "VR Guy",
                        avatar_height: 1.7,
                        url: metapress.backend.getAsset("avatars/vrguy.glb"),
                        ...this.mixamoAvatar
                    }]
                }
            }
        }
    }
]);