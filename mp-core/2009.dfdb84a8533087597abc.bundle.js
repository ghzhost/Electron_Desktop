"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2009], {
        40001: (e, t, i) => {
            i.d(t, {
                Lm: () => s,
                U8: () => r,
                lk: () => a,
                sN: () => o
            });
            var n = i(67294);
            const a = e => n.createElement(n.Fragment, null, n.createElement("div", {
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
                }, n.createElement("div", {
                    style: {
                        fontSize: 15,
                        margin: "0px 20px",
                        flex: "1 1 1px"
                    }
                }, e.title), null != e.onClose ? n.createElement("img", {
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
                }) : null), n.createElement("div", {
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
                s = e => {
                    let [t, a] = n.useState(!!e.openByDefault);
                    return !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(n.Fragment, null, n.createElement("div", {
                        style: Object.assign({
                            display: "flex",
                            margin: "20px 10px 10px 10px",
                            fontSize: 15,
                            cursor: "pointer",
                            alignItems: "center"
                        }, e.style),
                        onClick: e => a(!t)
                    }, n.createElement("img", {
                        draggable: "false",
                        src: i(t ? 40313 : 65141),
                        style: {
                            width: 8,
                            height: 8,
                            margin: "0px 6px"
                        }
                    }), n.createElement("div", {
                        style: {
                            flex: "1 1 auto"
                        }
                    }, e.title), e.onRemove ? n.createElement("img", {
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
                o = e => {
                    let [t, a] = n.useState(!1);
                    return n.createElement("div", {
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
                        onPointerEnter: e => a(!0),
                        onPointerLeave: e => a(!1),
                        onClick: e.disabled ? null : e.onClick
                    }, e.disabled ? n.createElement("div", {
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
                    }) : n.createElement("img", {
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
                    }), n.createElement("div", {
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
                r = e => n.createElement("div", {
                    style: {
                        margin: "10px 20px",
                        border: "1px solid rgba(255, 255, 255, 0.2)",
                        borderRadius: 5,
                        display: "flex"
                    }
                }, n.createElement("img", {
                    src: i(83203),
                    style: {
                        width: 16,
                        margin: "0px 20px",
                        flex: "0 0 auto",
                        opacity: .5
                    }
                }), n.createElement("div", {
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
        42009: (e, t, i) => {
            i.r(t), i.d(t, {
                default: () => Oe
            });
            var n = i(67294),
                a = (i(20745), i(40001)),
                s = i(54220),
                o = i(32589),
                r = i(25108);
            class l {
                async callPreProcessing(e) {
                    let t = metapress.plugins.callAll("upload_getFileOptimizationStages").flat().filter((e => !!e)).filter((t => !t.filter || t.filter(e))).sort(((e, t) => (e.priority || 0) - (t.priority || 0)));
                    if (0 == t.length) return e;
                    let i = metapress.dialogs.show({
                        title: "Optimize file",
                        text: "Would you like to optimize this file?",
                        height: "auto",
                        content: n.createElement(c, {
                            onClose: e => {
                                e.optimize ? (t.forEach((t => {
                                    t.settings.forEach((t => {
                                        void 0 !== e[t.id] && (t.value = e[t.id])
                                    }))
                                })), i.result = !0) : i.result = !1, i.close()
                            },
                            stages: t,
                            getComponentForType: this.getComponentForType
                        })
                    });
                    for (; !i.isClosed;) await new Promise((e => setTimeout(e, 150)));
                    if (0 == i.result) return e;
                    for (let i of t) "function" == typeof i.execute ? await i.execute(i, e).catch((e => {
                        r.error("Error in stage", i, e)
                    })).then((t => {
                        t && (e = t)
                    })) : r.warn("Stage.execute is not a function and will be skipped:", i.execute);
                    return e
                }
                getComponentForType(e) {
                    return "header" == e.type ? n.createElement("div", {
                        style: {
                            margin: "14px calc(22px + 0.5%) -6px calc(22px + 0.5%)",
                            fontSize: 12,
                            color: "rgba(255, 255, 255, 0.3)",
                            textAlign: "left"
                        }
                    }, e.name) : "description" == e.type ? n.createElement("div", {
                        style: {
                            margin: "10px calc(22px + 0.5%)",
                            fontSize: 12,
                            color: "rgba(255, 255, 255, 0.5)",
                            textAlign: "left"
                        }
                    }, e.name) : "checkbox" == e.type ? e.id ? n.createElement(o.ji, {
                        name: e.name || e.id,
                        tooltip: e.help,
                        default: e.default,
                        onChange: t => e.value = t.target.checked
                    }) : null : "select" == e.type ? e.id ? n.createElement(o.mg, {
                        name: e.name || e.id,
                        tooltip: e.help,
                        values: e.values,
                        labels: e.labels,
                        default: e.default,
                        onChange: t => e.value = t.target.value
                    }) : null : "button" == e.type ? n.createElement(o.zx, {
                        title: e.name || e.id,
                        tooltip: e.help,
                        onClick: t => e.onClick()
                    }) : "number" == e.type ? e.id ? n.createElement(o.nv, {
                        name: e.name || e.id,
                        tooltip: e.help,
                        placeholder: e.placeholder,
                        default: e.default,
                        onChange: t => e.value = t.target.value
                    }) : null : "color" == e.type ? n.createElement(o.zH, {
                        name: e.name || e.id,
                        tooltip: e.help,
                        default: e.default,
                        onChange: t => e.value = t.target.value
                    }) : "textarea" == e.type ? e.id ? n.createElement(o.eo, {
                        name: e.name || e.id,
                        tooltip: e.help,
                        placeholder: e.placeholder,
                        default: e.default,
                        onChange: t => e.value = t.target.value
                    }) : null : e.id ? n.createElement(o.nv, {
                        name: e.name || e.id,
                        tooltip: e.help,
                        placeholder: e.placeholder,
                        default: e.default,
                        onChange: t => e.value = t.target.value
                    }) : null
                }
            }
            const c = ({
                onClose: e,
                stages: t,
                getComponentForType: i
            }) => {
                const [a, s] = (0, n.useState)((() => {
                    const e = {};
                    return t.forEach((t => {
                        t.settings.forEach((t => {
                            t.id && (e[t.id] = t.placeholder || "")
                        }))
                    })), e
                })), r = t.map((e => e.settings.map((e => {
                    const t = i(e);
                    return n.cloneElement(t, {
                        key: e.id,
                        value: a[e.id],
                        onChange: t => {
                            return i = e.id, n = t.target.value, void s((e => ({
                                ...e,
                                [i]: n
                            })));
                            var i, n
                        }
                    })
                }))));
                return n.createElement(n.Fragment, null, r, n.createElement(o.aW, null, n.createElement(o.ek, {
                    title: "Optimize",
                    onClick: () => {
                        e({
                            optimize: !0,
                            ...a
                        })
                    }
                }), n.createElement(o.ek, {
                    title: "Skip Optimization",
                    onClick: () => {
                        e({
                            optimize: !1
                        })
                    }
                })))
            };
            var d = i(25108);

            function p() {
                return p = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                }, p.apply(this, arguments)
            }
            const h = e => {
                    let [t, i] = n.useState(e.entity[e.property] || "");
                    return n.createElement(o.nv, {
                        name: e.name,
                        tooltip: e.tooltip,
                        value: t,
                        onChange: t => {
                            if (e.disabled) return;
                            let n = t.currentTarget.value || "";
                            metapress.entities.update(e.entity.id, {
                                [e.property]: n,
                                lastEdited: Date.now()
                            }), i(n), e.onUpdate?.(n)
                        },
                        disabled: e.disabled,
                        placeholder: e.placeholder,
                        type: e.type
                    })
                },
                m = e => {
                    let [t, i] = n.useState(e.entity[e.property] || "");
                    return n.createElement(o.eo, {
                        name: e.name,
                        tooltip: e.tooltip,
                        value: t,
                        onChange: t => {
                            if (e.disabled) return;
                            let n = t.currentTarget.value || "";
                            metapress.entities.update(e.entity.id, {
                                [e.property]: n,
                                lastEdited: Date.now()
                            }), i(n), e.onUpdate?.(n)
                        },
                        disabled: e.disabled,
                        placeholder: e.placeholder,
                        type: e.type
                    })
                },
                u = e => {
                    let t = parseFloat(e.entity[e.property1]) || 0,
                        i = parseFloat(e.entity[e.property2]) || 0,
                        a = parseFloat(e.entity[e.property3]) || 0;
                    const s = e.isScale ? 1 : e.default || 0;
                    let r = e.isScale ? o.f4 : o.tC;
                    return n.createElement(r, {
                        name: e.name,
                        tooltip: e.tooltip,
                        value: {
                            x: t,
                            y: i,
                            z: a
                        },
                        onChange: t => {
                            e.disabled || (e.isScale && (t.x = t.x <= 0 ? Math.max(e.entity[e.property1] || s, s) : t.x, t.y = t.y <= 0 ? Math.max(e.entity[e.property2] || s, s) : t.y, t.z = t.z <= 0 ? Math.max(e.entity[e.property3] || s, s) : t.z), metapress.entities.update(e.entity.id, {
                                [e.property1]: t.x,
                                [e.property2]: t.y,
                                [e.property3]: t.z,
                                lastEdited: Date.now()
                            }), e.onUpdate?.())
                        },
                        disabled: e.disabled
                    })
                },
                g = e => n.createElement(u, p({
                    isScale: !0
                }, e)),
                y = e => {
                    let t = parseFloat(e.entity[e.propertyX]) || 0,
                        i = parseFloat(e.entity[e.propertyY]) || 0,
                        a = parseFloat(e.entity[e.propertyZ]) || 0,
                        s = parseFloat(e.entity[e.propertyW]) || 0,
                        [r, l] = n.useState(0);
                    return n.createElement(o.f, {
                        name: e.name,
                        tooltip: e.tooltip,
                        value: {
                            x: t,
                            y: i,
                            z: a,
                            w: s
                        },
                        onChange: t => {
                            metapress.entities.update(e.entity.id, {
                                [e.propertyX]: t.x,
                                [e.propertyY]: t.y,
                                [e.propertyZ]: t.z,
                                [e.propertyW]: t.w,
                                lastEdited: Date.now()
                            }), l(Date.now()), e.onUpdate?.()
                        },
                        disabled: e.disabled
                    })
                },
                f = e => {
                    let [t, i] = n.useState(e.entity[e.property]);
                    return !1 === e.visible ? n.createElement(n.Fragment, null) : n.createElement(o.ji, {
                        name: e.name,
                        tooltip: e.tooltip,
                        value: t,
                        onChange: n => {
                            e.disabled || (metapress.entities.update(e.entity.id, {
                                [e.property]: n,
                                lastEdited: Date.now()
                            }), i(n), e.onUpdate?.(t))
                        }
                    })
                },
                w = e => {
                    let [t, i] = n.useState(e.entity[e.property] || "");
                    return n.createElement(o.j9, {
                        name: e.name,
                        tooltip: e.tooltip,
                        value: t,
                        onSelect: async t => {
                            let n = new l;
                            t = await n.callPreProcessing(t);
                            let a = await metapress.storage.uploadFile("custom-template", t);
                            a = a + (a.includes("?") ? "&_=" : "?_=") + Date.now(), metapress.entities.update(e.entity.id, {
                                [e.property]: a,
                                lastEdited: Date.now()
                            }), i(a);
                            try {
                                e.onUpdate && "function" == typeof e.onUpdate && e.onUpdate(a)
                            } catch (e) {
                                d.warn("[FileUpload] Something went wrong when updating file.", e)
                            }
                        },
                        onClear: e.allowClear ? () => {
                            metapress.entities.update(e.entity.id, {
                                [e.property]: "",
                                lastEdited: Date.now()
                            }), i("");
                            try {
                                e.onRemove && "function" == typeof e.onRemove && e.onRemove(), e.onUpdate && "function" == typeof e.onUpdate && e.onUpdate("")
                            } catch (e) {
                                d.warn("[FileUpload] Something went wrong when removing file.", e)
                            }
                        } : null
                    })
                },
                b = e => {
                    let [t, i] = n.useState(e.entity[e.property] || e.default || "");
                    return n.createElement(o.mg, {
                        name: e.name,
                        tooltip: e.tooltip,
                        value: t,
                        onChange: t => {
                            if (e.disabled) return;
                            let n = t.currentTarget.value || "";
                            metapress.entities.update(e.entity.id, {
                                [e.property]: n,
                                lastEdited: Date.now()
                            }), i(n), e.onUpdate?.(n)
                        },
                        disabled: e.disabled,
                        placeholder: e.placeholder,
                        values: e.values,
                        labels: e.labels
                    })
                },
                v = e => {
                    const t = null != e.entity[e.property] ? e.entity[e.property] : null != e.defaultValue ? e.defaultValue : "#ffffff";
                    let [i, a] = n.useState(t);
                    return n.createElement(o.zH, {
                        name: e.name,
                        tooltip: e.tooltip,
                        value: i,
                        onChange: t => {
                            metapress.entities.update(e.entity.id, {
                                [e.property]: t,
                                lastEdited: Date.now()
                            }), a(t);
                            try {
                                e.onUpdate && "function" == typeof e.onUpdate && e.onUpdate(i)
                            } catch (e) {
                                d.warn("[ColorPicker] Something went wrong when changing color.", e)
                            }
                        }
                    })
                },
                E = e => {
                    const [t, a] = (0, n.useState)(!1), [r, l] = (0, n.useState)("");
                    return n.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }, n.createElement("img", {
                        draggable: "false",
                        src: i(62842),
                        style: {
                            height: 64,
                            opacity: .25,
                            marginBottom: 40
                        }
                    }), n.createElement("div", {
                        style: {
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 10,
                            opacity: .5
                        }
                    }, "Unlock the Editor"), n.createElement("div", {
                        style: {
                            fontSize: 12,
                            textAlign: "center",
                            lineHeight: "1.5",
                            margin: "0px 40px 20px 40px",
                            opacity: .5
                        }
                    }, "The Editor allows you to visually design and customize your world beyond what's available through templates."), n.createElement("div", {
                        style: {
                            alignSelf: "stretch",
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center"
                        }
                    }, n.createElement("input", {
                        value: r,
                        onChange: e => l(e.currentTarget.value),
                        placeholder: "Affiliate Code",
                        style: {
                            fontSize: 12,
                            flex: "1 1 1px",
                            alignSelf: "stretch",
                            margin: "0px 0px 0px 30px",
                            padding: "5px 8px",
                            color: "white",
                            background: "none",
                            border: "1px solid rgba(255, 255, 255, 0.1)",
                            borderRadius: 5,
                            outline: "none"
                        }
                    }), n.createElement("div", {
                        style: {
                            flex: "0 0 auto",
                            width: 20,
                            alignSelf: "stretch",
                            margin: "0px 10px 0px 0px",
                            opacity: .5,
                            backgroundSize: "14px",
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundImage: "url(" + i(8189) + ")",
                            cursor: "pointer"
                        },
                        onClick: e => window.open(metapress.config["core.integration.wordpress"]?.isLocalEnvironment ? "/get.metapress.dev/#/affiliate-program" : "https://get.metapress.dev/#/affiliate-program", "_blank")
                    })), n.createElement("div", {
                        style: {
                            alignSelf: "stretch",
                            margin: "0px 10px"
                        }
                    }, n.createElement(o.aW, null, n.createElement(o.ek, {
                        title: t ? "Please wait..." : "Unlock Editor",
                        disabled: t,
                        onClick: async () => {
                            metapress.backend.logEvent("world_editor_subscribe_click");
                            try {
                                a(!0), await s.H.shared.subscribe(r), Ae.current?.forceUpdate()
                            } catch (e) {
                                d.error(e), metapress.dialogs.alert({
                                    icon: "error",
                                    title: "Unable to subscribe",
                                    text: e.message
                                })
                            } finally {
                                a(!1)
                            }
                        }
                    }), n.createElement(o.ek, {
                        title: "Select Template",
                        onClick: () => Ae.current?.updateState({
                            page: "settings"
                        })
                    }))), n.createElement("div", {
                        style: {
                            display: "flex",
                            alignSelf: "stretch",
                            margin: "-5px 20px 10px 20px",
                            fontSize: 10,
                            textAlign: "center",
                            opacity: .3
                        }
                    }, n.createElement("div", {
                        style: {
                            flex: "1 1 1px",
                            padding: "0px 20px",
                            boxSizing: "border-box"
                        }
                    }, window.location.hostname), n.createElement("div", {
                        style: {
                            flex: "1 1 1px",
                            padding: "0px 20px",
                            boxSizing: "border-box"
                        }
                    })))
                },
                x = e => n.createElement("div", {
                    style: {
                        display: "flex",
                        flexDirection: "row",
                        alignSelf: "stretch",
                        alignItems: "center",
                        margin: "0px 20px 10px 20px",
                        backgroundColor: "rgba(255, 255, 255, 0.1)",
                        borderRadius: 5,
                        overflow: "hidden",
                        cursor: "pointer",
                        height: 80
                    },
                    onClick: e.onClick
                }, n.createElement("img", {
                    draggable: "false",
                    src: e.image,
                    style: {
                        alignSelf: "stretch",
                        aspectRatio: "4/3",
                        objectFit: "cover",
                        flex: "0 0 auto"
                    }
                }), n.createElement("div", {
                    style: {
                        margin: "0px 10px 0px 10px",
                        flex: "1 1 1px",
                        maxHeight: 80
                    }
                }, n.createElement("div", {
                    style: {
                        fontSize: 14,
                        lineHeight: "1.5",
                        fontWeight: "bold",
                        color: "rgba(255, 255, 255, 0.75)"
                    }
                }, e.title), n.createElement("div", {
                    style: {
                        fontSize: 12,
                        lineHeight: "1.5",
                        color: "rgba(255, 255, 255, 0.5)"
                    }
                }, e.subtitle)));
            class S extends n.PureComponent {
                static async doAddAction(e) {
                    let t = new THREE.Vector3,
                        i = new THREE.Vector3;
                    metapress.renderer.camera.getWorldPosition(t), metapress.renderer.camera.getWorldDirection(i), i.setLength(2), i.add(new THREE.Vector3(0, 1, 0).cross(i).setLength(1)), i.add(t);
                    let n = {
                            sync: "template",
                            x: i.x,
                            y: i.y,
                            z: i.z
                        },
                        a = await e.action(n);
                    a && metapress.editor.selectionManager.select(a)
                }
                render() {
                    let e = metapress.plugins.callAll("editor_getAddableEntities").flat().filter((e => !!e)).sort(((e, t) => e.name.localeCompare(t.name)));
                    return s.H.shared.editorUnlocked ? n.createElement(n.Fragment, null, n.createElement("div", {
                        style: {
                            height: 10
                        }
                    }), e.filter((e => "builtin" == e.section)).map((e => n.createElement(a.sN, {
                        key: e.id,
                        icon: e.icon,
                        name: e.name,
                        onClick: t => S.doAddAction(e)
                    }))), e.length > 0 ? n.createElement("div", {
                        style: {
                            margin: "5px 16px",
                            height: 1,
                            backgroundColor: "rgba(255, 255, 255, 0.1)"
                        }
                    }) : null, e.filter((e => "builtin" != e.section)).map((e => n.createElement(a.sN, {
                        key: e.id,
                        icon: e.icon,
                        name: e.name,
                        onClick: t => S.doAddAction(e)
                    }))), n.createElement("div", {
                        style: {
                            margin: "30px 50px",
                            fontSize: 12,
                            color: "rgba(255, 255, 255, 0.5)",
                            textAlign: "center",
                            lineHeight: 1.5
                        }
                    }, "You can also drag and drop files directly into your world.")) : n.createElement(E, null)
                }
            }
            var M = i(25108);
            class k extends n.PureComponent {
                state = {
                    modifiers: []
                };
                entityModifiers = [];
                componentDidMount() {
                    let e = metapress.entities.get(this.props.selectedEntityID);
                    if (!e) return M.warn("[Editor] Selected entity not found in AddModifierPanel");
                    let t = [];
                    for (let i of metapress.plugins.all)
                        for (let n of i.provides || []) {
                            if (!n.startsWith("modifier:")) continue;
                            let a = n.split(":")[1],
                                s = i.createModifier?.(a, e, "");
                            if (s && a && !t.find((e => e.id == a)))
                                if (e["modifier:" + a]) this.entityModifiers.push(s);
                                else if (!s.hidden) {
                                if (null != s.isEntitySupported) try {
                                    const t = s.isEntitySupported(e);
                                    "boolean" != typeof t || t ? "object" == typeof t && !1 === t.result && (s.showAsDisabled = !0, s.showAsDisabledReason = t.reason || null) : s.showAsDisabled = !0
                                } catch (e) {}
                                s.id = a, t.push(s)
                            }
                        }
                    t.sort(((e, t) => (e.name || e.id).localeCompare(t.name || t.id))), this.setState({
                        modifiers: t
                    })
                }
                addModifier(e) {
                    if (e?.provides)
                        for (let t of this.entityModifiers)
                            if (t.provides)
                                for (let i of t.provides)
                                    for (let n of e.provides)
                                        if (i == n) return void metapress.dialogs.alert({
                                            icon: "warn",
                                            title: "Cannot Add Modifier",
                                            text: `This modifier conflicts with ${t.name}, please remove it first.`
                                        });
                    metapress.entities.update(this.props.selectedEntityID, {
                        ["modifier:" + e.id]: !0
                    }), this.props.onSwitchPage("entity")
                }
                render() {
                    return n.createElement(n.Fragment, null, n.createElement("div", {
                        style: {
                            height: 5,
                            flexShrink: 0
                        }
                    }), n.createElement(o.zx, {
                        title: "Cancel",
                        onClick: e => this.props.onSwitchPage("entity")
                    }), this.state.modifiers.map((e => n.createElement(a.sN, {
                        key: e.id,
                        disabled: !!e.showAsDisabled,
                        tooltip: e.showAsDisabledReason || null,
                        icon: e.icon || i(42065),
                        name: e.name || e.id,
                        onClick: () => this.addModifier(e)
                    }))))
                }
            }
            var C = i(28721),
                A = i(25108);
            class P extends n.PureComponent {
                state = {
                    actionList: [],
                    selectedTrigger: "load",
                    selectedAction: "showalert",
                    selectedAnimation: "",
                    triggerText: "",
                    triggerTitle: "",
                    proximityRange: 2,
                    animationDuration: null,
                    actionLimit: 0,
                    fileURL: null,
                    addAction: !1,
                    editAction: !1,
                    editObject: null,
                    synchronized: !1
                };
                onChangeAction = e => {
                    let t = e.currentTarget.value || "";
                    this.setState({
                        selectedAction: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeTrigger = e => {
                    let t = e.currentTarget.value || "";
                    this.setState({
                        selectedTrigger: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeTitle = e => {
                    let t = e.currentTarget.value || "";
                    this.setState({
                        triggerTitle: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeText = e => {
                    let t = e.currentTarget.value || "";
                    this.setState({
                        triggerText: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeLimit = e => {
                    let t = e.currentTarget.value || "";
                    t = parseInt(t), "number" != typeof t && (t = 0), Number.isInteger(t) || (t = 0), this.setState({
                        actionLimit: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeProximity = e => {
                    let t = e.currentTarget.value || "";
                    this.setState({
                        proximityRange: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeDuration = e => {
                    let t = e.currentTarget.value || "";
                    this.setState({
                        animationDuration: t
                    }), this.state.editAction && this.setState({
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeAnimation = e => {
                    let t = e.currentTarget.value || "";
                    this.setState({
                        selectedAnimation: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeSound = e => {
                    let t = e.currentTarget.value || "";
                    this.setState({
                        fileURL: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                onChangeSync = e => {
                    let t = e || !1;
                    this.setState({
                        synchronized: t,
                        editedValue: !0
                    }), this.props.onUpdate?.(t)
                };
                componentDidMount() {
                    this.entity = metapress.entities.get(this.props.selectedEntityID);
                    const e = metapress.entities.getOrCreateRenderer(this.entity);
                    if (this.entityActions = this.entity.entityActions || [], this.animations = [""], e?.animationClips)
                        for (let t of e?.animationClips) this.animations.push(t.name);
                    this.updateActions()
                }
                openAddSection() {
                    this.setState({
                        addAction: !0,
                        editAction: !1,
                        selectedTrigger: "load",
                        selectedAction: "showalert",
                        selectedAnimation: "",
                        triggerText: "",
                        triggerTitle: "",
                        proximityRange: 2,
                        animationDuration: null,
                        actionLimit: 0,
                        fileURL: null,
                        synchronized: !1
                    });
                    var e = document.getElementById("actionscripterdiv");
                    e && (e.parentElement.scrollTop = 100)
                }
                addAction(e) {
                    if (!metapress.entities.get(this.props.selectedEntityID)) return A.warn("[Editor] Selected entity not found in ActionScripterPanel");
                    let t = null;
                    if (this.entity.action_scripter_sound_url) {
                        let e = this.entity.action_scripter_sound_url.indexOf("?"); - 1 != e && (t = this.entity.action_scripter_sound_url.substring(0, e));
                        let i = t.split("/");
                        t = i[i.length - 1]
                    }
                    let i = {};
                    i.id = e ? e.id : (0, C.Z)(), i.trigger = this.state.selectedTrigger, i.action = this.state.selectedAction, i.triggerText = this.state.triggerText || "", i.triggerTitle = this.state.triggerTitle || "", i.proximityRange = this.state.proximityRange || 2, i.actionLimit = this.state.actionLimit || 0, i.animationDuration = this.state.animationDuration || null, i.animation = this.state.selectedAnimation || null, i.fileURL = this.entity.action_scripter_sound_url || null, i.synchronized = this.state.synchronized;
                    let n = "",
                        a = "",
                        s = i.actionLimit > 0 ? " Limit of: " + i.actionLimit : " With no limit",
                        o = i.synchronized ? ". The action is synchronized for all users." : ".";
                    switch (this.state.selectedTrigger) {
                        case "load":
                            n = "On load";
                            break;
                        case "click":
                            n = "On object click";
                            break;
                        case "proximityenter":
                            n = "On object proximity entry (" + i.proximityRange + "m)"
                    }
                    switch (this.state.selectedAction) {
                        case "showalert":
                            a = "show the following alert text: (" + i.triggerText + "), titled: " + i.triggerTitle + s;
                            break;
                        case "showpanel":
                            a = "show the following panel url: (" + i.triggerText + ")" + s;
                            break;
                        case "showpopup":
                            a = "show the following popup url: (" + i.triggerText + ")" + s;
                            break;
                        case "showsidebar":
                            a = "show the following url in the sidebar: (" + i.triggerText + ")" + s;
                            break;
                        case "playsound":
                            a = "play the following sound: (" + t + ")" + s;
                            break;
                        case "playanimation":
                            a = "play the following animation: (" + i.animation + ")", i.animationDuration ? a += " for " + i.animationDuration + " seconds" + s : a += s
                    }
                    a += o, i.triggerLabel = n, i.actionLabel = a, e ? this.entityActions = this.modifyActions(i) : this.entityActions.push(i), metapress.entities.update(this.props.selectedEntityID, {
                        entityActions: this.entityActions,
                        lastEdited: Date.now()
                    }), this.setState({
                        editedValue: !1
                    }), metapress.plugins.sendEvent("onUnsavedFieldsChanged"), this.updateActions()
                }
                modifyActions(e) {
                    return this.entityActions.map((t => t.id === e.id ? {
                        ...t,
                        trigger: e.trigger,
                        action: e.action,
                        triggerText: e.triggerText,
                        triggerTitle: e.triggerTitle,
                        proximityRange: e.proximityRange,
                        actionLimit: e.actionLimit,
                        animationDuration: e.animationDuration,
                        animation: e.animation,
                        fileURL: e.fileURL,
                        triggerLabel: e.triggerLabel,
                        actionLabel: e.actionLabel,
                        synchronized: e.synchronized
                    } : t))
                }
                updateActions() {
                    this.setState({
                        addAction: !1,
                        editAction: !1,
                        selectedTrigger: "load",
                        selectedAction: "showalert",
                        selectedAnimation: "",
                        triggerText: "",
                        triggerTitle: "",
                        proximityRange: 2,
                        animationDuration: null,
                        actionLimit: 0,
                        fileURL: null,
                        synchronized: !1,
                        editObject: null
                    }), this.forceUpdate()
                }
                deleteAction(e) {
                    this.entityActions = this.entityActions.filter((t => t.id != e.id)), metapress.entities.update(this.props.selectedEntityID, {
                        entityActions: this.entityActions,
                        lastEdited: Date.now()
                    }), metapress.plugins.sendEvent("onUnsavedFieldsChanged"), this.updateActions()
                }
                editAction(e) {
                    this.setState({
                        editAction: !0,
                        addAction: !1,
                        selectedTrigger: e.trigger,
                        selectedAction: e.action,
                        selectedAnimation: e.animation,
                        triggerText: e.triggerText,
                        triggerTitle: e.triggerTitle,
                        proximityRange: e.proximityRange,
                        animationDuration: e.animationDuration,
                        actionLimit: e.actionLimit,
                        fileURL: e.fileURL,
                        synchronized: e.synchronized,
                        editObject: e
                    });
                    var t = document.getElementById("actionscripterdiv");
                    t && (t.parentElement.scrollTop = 100)
                }
                saveEditAction() {
                    metapress.plugins.sendEvent("onUnsavedFieldsChanged"), this.addAction(this.state.editObject)
                }
                render() {
                    return n.createElement(n.Fragment, null, n.createElement(o.zx, {
                        title: "Add Action",
                        onClick: e => this.openAddSection()
                    }), n.createElement(o.zx, {
                        title: "Cancel",
                        onClick: e => this.props.onSwitchPage("entity")
                    }), 1 == this.state.addAction || 1 == this.state.editAction ? n.createElement("div", {
                        id: "actionscripterdiv"
                    }, n.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            left: 0,
                            width: "100%",
                            height: 30,
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                        }
                    }, 1 == this.state.addAction ? n.createElement("div", {
                        style: {
                            fontSize: 15,
                            marginLeft: 20
                        }
                    }, "Adding New Action") : 1 == this.state.editAction ? n.createElement("div", {
                        style: {
                            fontSize: 15,
                            marginLeft: 20
                        }
                    }, "Editing Action") : null), n.createElement("div", {
                        style: {
                            height: 5,
                            flexShrink: 0
                        }
                    }), n.createElement(o.mg, {
                        id: "entityTrigger",
                        entity: this.props.selectedEntityID,
                        name: "Trigger",
                        property: "action_scripter_trigger",
                        default: "",
                        labels: ["Load", "Click", "Proximity"],
                        values: ["load", "click", "proximityenter"],
                        onUpdate: () => this.forceUpdate(),
                        onChange: this.onChangeTrigger,
                        value: this.state.selectedTrigger
                    }), n.createElement(o.mg, {
                        id: "entityAction",
                        entity: this.props.selectedEntityID,
                        name: "Action",
                        property: "action_scripter_action",
                        default: "",
                        labels: ["Show Alert", "Show Panel", "Show Popup", "Show Sidebar", "Play Sound", "Play Animation"],
                        values: ["showalert", "showpanel", "showpopup", "showsidebar", "playsound", "playanimation"],
                        onUpdate: () => this.forceUpdate(),
                        onChange: this.onChangeAction,
                        value: this.state.selectedAction
                    }), n.createElement(o.nv, {
                        name: "Action Limit",
                        onChange: this.onChangeLimit,
                        placeholder: "0",
                        value: this.state.actionLimit
                    }), n.createElement(o.ji, {
                        name: "Synchronized",
                        value: this.state.synchronized,
                        onChange: this.onChangeSync
                    }), "showalert" == this.state.selectedAction ? n.createElement("div", null, n.createElement(o.nv, {
                        name: "Title",
                        onChange: this.onChangeTitle,
                        placeholder: "title",
                        value: this.state.triggerTitle
                    }), n.createElement(o.nv, {
                        name: "Text",
                        onChange: this.onChangeText,
                        placeholder: "text",
                        value: this.state.triggerText
                    })) : "showpanel" == this.state.selectedAction || "showpopup" == this.state.selectedAction || "showsidebar" == this.state.selectedAction ? n.createElement(o.nv, {
                        name: "URL",
                        onChange: this.onChangeText,
                        placeholder: "url",
                        value: this.state.triggerText
                    }) : "playsound" == this.state.selectedAction ? n.createElement(w, {
                        entity: this.entity,
                        property: "action_scripter_sound_url",
                        name: "Upload Sound",
                        value: this.state.fileURL,
                        onChange: this.onChangeSound
                    }) : "playanimation" == this.state.selectedAction ? n.createElement("div", null, n.createElement(o.mg, {
                        id: "entityAnimation",
                        entity: this.props.selectedEntityID,
                        name: "Animation",
                        property: "action_scripter_animation",
                        default: "",
                        labels: this.animations,
                        values: this.animations,
                        onUpdate: () => this.forceUpdate(),
                        onChange: this.onChangeAnimation,
                        value: this.state.selectedAnimation
                    }), n.createElement(o.nv, {
                        name: "Animation Duration (s)",
                        onChange: this.onChangeDuration,
                        placeholder: "2",
                        value: this.state.animationDuration
                    })) : null, "proximityenter" == this.state.selectedTrigger ? n.createElement(o.nv, {
                        name: "Proximity range (m)",
                        onChange: this.onChangeProximity,
                        placeholder: "2",
                        value: this.state.proximityRange
                    }) : null) : null, 1 == this.state.addAction ? n.createElement(o.zx, {
                        title: "Add",
                        onClick: e => this.addAction(),
                        style: {
                            backgroundColor: this.state.editedValue ? "#954303" : "rgba(255, 255, 255, 0.1)"
                        }
                    }) : null, 1 == this.state.editAction ? n.createElement(o.zx, {
                        title: "Update",
                        onClick: e => this.saveEditAction(),
                        style: {
                            backgroundColor: this.state.editedValue ? "#954303" : "rgba(255, 255, 255, 0.1)"
                        }
                    }) : null, n.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            left: 0,
                            width: "100%",
                            height: 30,
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
                        }
                    }, n.createElement("div", {
                        style: {
                            fontSize: 15,
                            marginLeft: 20
                        }
                    }, "Actions")), this.entityActions?.map((e => n.createElement("div", {
                        id: e.id,
                        style: {
                            padding: "0px 10px",
                            borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
                            alignItems: "center"
                        }
                    }, n.createElement("p", {
                        style: {
                            fontSize: 12,
                            padding: "0px 15px",
                            margin: "10px 0px 0px 0px"
                        }
                    }, e.triggerLabel, " ", e.actionLabel, " "), n.createElement("div", {
                        style: {
                            display: "flex",
                            position: "relative",
                            left: "80%",
                            marginBottom: 5
                        }
                    }, n.createElement("div", {
                        onClick: t => {
                            this.editAction(e)
                        },
                        style: {
                            cursor: "pointer",
                            fontSize: 10,
                            color: "white",
                            width: "10%"
                        }
                    }, "Edit"), n.createElement("div", {
                        onClick: t => {
                            this.deleteAction(e)
                        },
                        style: {
                            cursor: "pointer",
                            fontSize: 10,
                            color: "lightgrey",
                            width: "10%"
                        }
                    }, "Delete"))))))
                }
            }

            function D() {
                return D = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var i = arguments[t];
                        for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                    }
                    return e
                }, D.apply(this, arguments)
            }
            const T = "Global region",
                I = e => {
                    let [t, r] = n.useState("");
                    if (!s.H.shared.editorUnlocked) return n.createElement(E, null);
                    let l = metapress.entities.all;
                    if (I.showAllEntities || (l = l.filter((e => "template" == e.sync))), l = l.filter((e => "template-global-region" != e.id)), t) {
                        let e = t.toLowerCase();
                        l = l.filter((t => t.name?.toLowerCase()?.includes(e) || t.type?.toLowerCase()?.includes(e)))
                    }
                    l.sort(((e, t) => (e.name || e.id).localeCompare(t.name || t.id)));
                    let c = !t || t && T.toLowerCase().includes(t.toLowerCase());
                    return n.createElement(n.Fragment, null, n.createElement(o.Um, {
                        allowClear: !0,
                        onSearch: e => r(e)
                    }), c ? n.createElement(a.sN, {
                        icon: i(26247),
                        name: T,
                        onClick: () => metapress.editor.selectionManager.select("template-global-region"),
                        selected: "template-global-region" == e.selectedEntityID
                    }) : null, l.length > 0 ? l.map((t => n.createElement(j, {
                        key: t.id,
                        entity: t,
                        onClick: () => metapress.editor.selectionManager.select(t.id),
                        selected: e.selectedEntityID == t.id
                    }))) : c ? null : n.createElement("div", {
                        style: {
                            color: "#999",
                            padding: 10,
                            fontSize: 14,
                            textAlign: "center"
                        }
                    }, t ? "No entities found." : "No entities exist."), n.createElement("div", {
                        style: {
                            height: 10
                        }
                    }))
                };
            I.showAllEntities = !1;
            const z = {},
                j = e => {
                    let t = "";
                    e.entity.type in z ? t = z[e.entity.type] : e.entity.id in z ? t = z[e.entity.id] : "cube" == e.entity.type ? t = i(90371) : "plane" == e.entity.type ? t = i(26192) : "circle" == e.entity.type ? t = i(41598) : "cylinder" == e.entity.type ? t = i(5461) : "mesh" == e.entity.type ? t = i(78365) : "region" == e.entity.type ? t = i(26247) : "sphere" == e.entity.type && (t = i(34949));
                    const s = metapress.entities.getModifiers(e.entity.id);
                    if ((!t || s.length > 0) && null == z[e.entity.id]) {
                        const i = metapress.plugins.callAll("editor_getAddableEntities").flat().filter((e => !!e)),
                            n = i.find((t => e.entity.type == t.id));
                        if (n) t = n.icon, z[e.entity.type] = t;
                        else if (s && s.length > 0) {
                            const n = s.map((e => e.id)),
                                a = i.filter((e => e.icon && n.includes(e.id)));
                            a.length > 0 && (t = a[0].icon, z[e.entity.id] = t)
                        }
                    }
                    t || (t = i(8189));
                    let o = e.entity.name || `Untitled ${e.entity.type}`;
                    return "template" != e.entity.sync && (o += " (unmanaged)"), n.createElement(a.sN, D({
                        icon: t,
                        name: o
                    }, e))
                };
            var _ = i(25108);
            class U extends n.PureComponent {
                async onDelete() {
                    await metapress.dialogs.confirm({
                        title: "Delete item",
                        text: "Are you sure you want to delete this item?"
                    }) && (metapress.entities.remove(this.props.selectedEntityID), this.props.onSwitchPage("entities"), metapress.renderer.canvas.focus())
                }
                onDuplicate() {
                    let e = metapress.entities.get(this.props.selectedEntityID);
                    if (!e) return metapress.menubar.toasts.show({
                        id: "editor.copying",
                        text: "Unable to duplicate: Object does not exist.",
                        duration: 3e3
                    });
                    e = Object.assign({}, e);
                    let t = new THREE.Vector3,
                        i = new THREE.Vector3;
                    metapress.renderer.camera.getWorldPosition(t), metapress.renderer.camera.getWorldDirection(i), i.setLength(2), i.add(new THREE.Vector3(0, 1, 0).cross(i).setLength(1)), i.add(t), e.sync = "template", e.x = i.x, e.y = i.y, e.z = i.z, delete e.id;
                    let n = metapress.entities.add(e);
                    metapress.editor.selectionManager.select(n.id), metapress.menubar.toasts.show({
                        id: "editor.copying",
                        text: "Duplicated " + (e.name || `Untitled ${e.type}`),
                        duration: 3e3
                    }), metapress.renderer.canvas.focus()
                }
                moveObjectToMe() {
                    let e = metapress.entities.get(this.props.selectedEntityID);
                    if (!e) return;
                    const t = new THREE.Quaternion(metapress.avatars.currentUserEntity.quatX, metapress.avatars.currentUserEntity.quatY, metapress.avatars.currentUserEntity.quatZ, metapress.avatars.currentUserEntity.quatW),
                        i = (new THREE.Euler).setFromQuaternion(t),
                        n = Math.abs(i.x),
                        a = Math.abs(i.z),
                        s = Math.max(n, a);
                    let o = s === n ? i.x >= 0 ? 1 : -1 : 0,
                        r = s === a ? i.z >= 0 ? 1 : -1 : 0;
                    n === a && (o = i.x >= 0 ? .5 : -.5, r = i.z >= 0 ? .5 : -.5), metapress.entities.update(e.id, {
                        x: metapress.avatars.currentUserEntity.x + o,
                        y: metapress.avatars.currentUserEntity.y + .5,
                        z: metapress.avatars.currentUserEntity.z + r,
                        lastEdited: Date.now()
                    }), metapress.renderer.canvas.focus()
                }
                moveToObject() {
                    let e = metapress.entities.get(this.props.selectedEntityID);
                    e && (metapress.avatars.moveTo(e.x, e.y, e.z), metapress.renderer.canvas.focus())
                }
                render() {
                    if (!s.H.shared.editorUnlocked) return n.createElement(E, null);
                    if (metapress.entities.checkAllEntities(), !this.props.selectedEntityID) return n.createElement("div", {
                        style: {
                            margin: "50px 20px",
                            fontSize: 12,
                            opacity: .5,
                            textAlign: "center"
                        }
                    }, "Nothing selected");
                    let e = metapress.entities.get(this.props.selectedEntityID);
                    if (!e) return n.createElement("div", {
                        style: {
                            margin: "50px 20px",
                            fontSize: 12,
                            opacity: .5,
                            textAlign: "center"
                        }
                    }, "Nothing selected");
                    let t = metapress.entities.getRenderer(this.props.selectedEntityID, !0),
                        i = metapress.entities.getModifiers(this.props.selectedEntityID);
                    return i.sort(((e, t) => (e.name || e.id).localeCompare(t.name || t.id))), n.createElement(n.Fragment, null, n.createElement(a.Lm, {
                        title: "General",
                        openByDefault: !0
                    }, n.createElement(h, {
                        entity: e,
                        name: "Name",
                        property: "name",
                        tooltip: "The name of this object, shown in the Editor."
                    }), n.createElement(h, {
                        entity: e,
                        name: "Type",
                        property: "type",
                        disabled: !0,
                        tooltip: "The object type."
                    }), n.createElement(h, {
                        entity: e,
                        name: "Comment",
                        property: "comment",
                        tooltip: "A custom comment, shown in the Editor."
                    }), t?.settings?.map(((t, i) => n.createElement(n.Fragment, {
                        key: t.id || i
                    }, this.renderSetting(e, t)))), "template-global-region" != e.id ? n.createElement(o.aW, null, n.createElement(o.ek, {
                        title: "Duplicate",
                        onClick: () => this.onDuplicate()
                    }), n.createElement(o.ek, {
                        title: "Delete",
                        onClick: () => this.onDelete()
                    })) : null), n.createElement(a.Lm, {
                        title: "Transform",
                        visible: "template-global-region" != e.id,
                        openByDefault: !0
                    }, n.createElement(u, {
                        entity: e,
                        name: "Position",
                        property1: "x",
                        property2: "y",
                        property3: "z",
                        tooltip: "The object's position in meters."
                    }), n.createElement(y, {
                        entity: e,
                        name: "Rotation",
                        propertyX: "quatX",
                        propertyY: "quatY",
                        propertyZ: "quatZ",
                        propertyW: "quatW",
                        tooltip: "The object's rotation in degrees."
                    }), n.createElement(g, {
                        entity: e,
                        name: "Scale",
                        property1: "scaleX",
                        property2: "scaleY",
                        property3: "scaleZ",
                        tooltip: "Multiplies the size of the object."
                    }), n.createElement(o.aW, null, n.createElement(o.ek, {
                        title: "Move object to me",
                        onClick: () => this.moveObjectToMe()
                    }), n.createElement(o.ek, {
                        title: "Move to object",
                        onClick: () => this.moveToObject()
                    }))), i.map((t => {
                        let i = t.settings;
                        if ("function" == typeof i) try {
                            i = i(e)
                        } catch (e) {
                            i = null, _.warn(`[EntityPanel] Error getting modifier settings for ${t.id}`, e)
                        }
                        return n.createElement(a.Lm, {
                            key: t.id + t.instanceID,
                            title: t.name || t.id,
                            onRemove: () => this.onRemoveModifier(t),
                            openByDefault: !0
                        }, i?.length ? null : n.createElement("div", {
                            style: {
                                margin: "0px 30px",
                                fontSize: 12,
                                color: "rgba(255, 255, 255, 0.5)",
                                textAlign: "left"
                            }
                        }, "This modifier has no settings."), i?.map(((t, i) => n.createElement(n.Fragment, {
                            key: t.id || i
                        }, this.renderSetting(e, t)))))
                    })), n.createElement("div", {
                        style: {
                            height: 20
                        }
                    }), n.createElement(o.zx, {
                        title: "Add Modifier",
                        onClick: () => this.props.onSwitchPage("add-modifier")
                    }), n.createElement(o.zx, {
                        title: "Action Scripter",
                        onClick: () => this.actionScripterClick()
                    }))
                }
                actionScripterClick() {
                    let e = metapress.entities.get(this.props.selectedEntityID);
                    metapress.entities.update(e.id, {
                        "modifier:object_interaction": !0
                    }), this.props.onSwitchPage("action-scripter")
                }
                renderSetting(e, t) {
                    return t.hidden ? null : "header" == t.type ? n.createElement("div", {
                        style: {
                            margin: "14px calc(22px + 0.5%) -6px calc(22px + 0.5%)",
                            fontSize: 12,
                            color: "rgba(255, 255, 255, 0.3)",
                            textAlign: "left"
                        }
                    }, t.name) : "description" == t.type ? n.createElement("div", {
                        style: {
                            margin: "10px calc(22px + 0.5%)",
                            fontSize: 12,
                            color: "rgba(255, 255, 255, 0.5)",
                            textAlign: "left"
                        }
                    }, t.name) : "checkbox" == t.type ? t.id ? n.createElement(f, {
                        entity: e,
                        name: t.name || t.id,
                        property: t.id,
                        tooltip: t.help,
                        placeholder: t.placeholder,
                        onUpdate: () => this.forceUpdate()
                    }) : null : "file" == t.type ? t.id ? n.createElement(w, {
                        entity: e,
                        name: t.name || t.id,
                        property: t.id,
                        tooltip: t.help,
                        placeholder: t.placeholder,
                        allowClear: t.allowClear ?? !1,
                        onUpdate: () => this.forceUpdate()
                    }) : null : "select" == t.type ? t.id ? n.createElement(b, {
                        entity: e,
                        name: t.name || t.id,
                        property: t.id,
                        tooltip: t.help,
                        default: t.default,
                        values: t.values,
                        labels: t.labels,
                        onUpdate: () => this.forceUpdate()
                    }) : null : "button" == t.type ? n.createElement(o.zx, {
                        title: t.name || t.id,
                        tooltip: t.help,
                        onClick: i => this.onEntityButtonClick(e, t)
                    }) : "number" == t.type ? t.id ? n.createElement(h, {
                        entity: e,
                        name: t.name || t.id,
                        property: t.id,
                        tooltip: t.help,
                        placeholder: t.placeholder,
                        type: "number"
                    }) : null : "color" == t.type ? n.createElement(v, {
                        entity: e,
                        name: t.name || t.id,
                        property: t.id,
                        tooltip: t.help,
                        defaultValue: t.default,
                        onUpdate: () => this.forceUpdate()
                    }) : "textarea" == t.type ? t.id ? n.createElement(m, {
                        entity: e,
                        name: t.name || t.id,
                        property: t.id,
                        tooltip: t.help,
                        placeholder: t.placeholder
                    }) : null : t.id ? n.createElement(h, {
                        entity: e,
                        name: t.name || t.id,
                        property: t.id,
                        tooltip: t.help,
                        placeholder: t.placeholder
                    }) : null
                }
                async onEntityButtonClick(e, t) {
                    if (!t.onClick) return _.warn("[Editor] No onClick action defined for entity button", t);
                    await t.onClick(t, e), this.forceUpdate()
                }
                onRemoveModifier(e) {
                    metapress.entities.update(this.props.selectedEntityID, {
                        ["modifier:" + e.id]: !1
                    }), this.forceUpdate()
                }
            }
            class L extends n.PureComponent {
                render = () => n.createElement(n.Fragment, null)
            }
            var O = i(49220),
                R = i.n(O),
                F = i(25108);
            class $ extends n.PureComponent {
                state = {
                    templates: [],
                    loadingTemplates: !0
                };
                render = () => n.createElement(n.Fragment, null, n.createElement(a.Lm, {
                    title: "General",
                    openByDefault: !0
                }, s.H.shared.activeSubscription ? n.createElement(n.Fragment, null, n.createElement(a.U8, {
                    text: n.createElement(n.Fragment, null, "The subscription for ", n.createElement("b", null, window.location.hostname), " is managed by ", n.createElement("b", null, s.H.shared.activeSubscription.payerName || s.H.shared.activeSubscription.provider || "(private)"), ".", "paypal" == s.H.shared.activeSubscription.provider ? n.createElement("a", {
                        style: {
                            color: "rgb(81, 145, 209)",
                            textDecoration: "none",
                            fontWeight: "bold"
                        },
                        href: "https://www.paypal.com/myaccount/autopay/",
                        target: "_blank"
                    }, "View on PayPal") : null)
                }), n.createElement(o.zx, {
                    title: "Load from Backup",
                    icon: i(36449),
                    onClick: () => this.loadBackup()
                }), n.createElement(o.zx, {
                    title: "Save Backup",
                    icon: i(75588),
                    onClick: () => this.saveBackup()
                }), n.createElement(o.zx, {
                    title: "Delete Everything",
                    icon: i(81501),
                    onClick: () => this.deleteAll()
                })) : null, s.H.shared.activeSubscription ? null : n.createElement(a.U8, {
                    text: n.createElement(n.Fragment, null, "There is no active subscription for ", n.createElement("b", null, window.location.hostname), ". ", n.createElement("a", {
                        style: {
                            color: "rgb(81, 145, 209)",
                            textDecoration: "none",
                            fontWeight: "bold",
                            cursor: "pointer"
                        },
                        onClick: () => this.props.onSwitchPage("entities")
                    }, "Unlock the Editor"))
                })), n.createElement(a.Lm, {
                    title: "Templates",
                    openByDefault: !0
                }, this.state.templates.map((e => n.createElement(x, {
                    key: e.url,
                    image: e.image,
                    title: e.name,
                    subtitle: e.description,
                    onClick: () => this.loadTemplate(e)
                }))), 0 == this.state.templates.length ? n.createElement("div", {
                    style: {
                        margin: "0px 30px",
                        fontSize: 12,
                        color: "rgba(255, 255, 255, 0.5)",
                        textAlign: "left"
                    }
                }, this.state.loadingTemplates ? "Loading templates..." : "No templates found.") : null));
                async componentDidMount() {
                    try {
                        this.setState({
                            loadingTemplates: !0
                        });
                        let e = await metapress.plugins.callAllAsync("editor_getTemplates");
                        e = e.flat().filter((e => e?.url && e?.name)), e.sort(((e, t) => (e.name || "").localeCompare(t.name || ""))), this.setState({
                            templates: e
                        })
                    } catch (e) {
                        F.warn(e), metapress.menubar.toasts.show({
                            text: "Unable to load templates: " + e.message
                        })
                    } finally {
                        this.setState({
                            loadingTemplates: !1
                        })
                    }
                }
                async saveBackup() {
                    if (!this.isSaving) {
                        this.isSaving = !0;
                        try {
                            metapress.menubar.toasts.show({
                                id: "editor.backup",
                                text: "Saving backup...",
                                sticky: !0
                            });
                            let e = await metapress.editor.saveBackup((e => {
                                metapress.menubar.toasts.show({
                                    id: "editor.backup",
                                    text: e,
                                    sticky: !0
                                })
                            }));
                            new O.JSFile(e, "MetaPress Backup.mpbackup").save(), metapress.menubar.toasts.show({
                                id: "editor.backup",
                                text: "Backup saved successfully."
                            })
                        } catch (e) {
                            F.warn(e), metapress.menubar.toasts.show({
                                id: "editor.backup",
                                text: "Unable to save backup: " + e.message
                            })
                        } finally {
                            this.isSaving = !1
                        }
                    }
                }
                async loadBackup() {
                    if (!this.isSaving) try {
                        let e = null;
                        try {
                            if (e = await R().pick({
                                    accept: ".mpbackup"
                                }), !e) return
                        } catch (e) {
                            return void F.warn("[MetaPress] Error selecting file: ", e)
                        }
                        this.isSaving = !0;
                        let t = (await metapress.editor.getBackupMetadata(await e.getBlob()))?.plugins || [],
                            i = [];
                        for (let e of t) metapress.plugins.all.find((t => t.id == e.id)) || i.push(e);
                        if (!await metapress.dialogs.confirm({
                                title: "Load backup",
                                text: `All current world data will be deleted on the server and replaced with the content of this backup. Are you sure you want to continue?\n                    ${i.length>0?`\n**This backup requires the following missing plugins:**  \n${i.map((e=>e.name)).join("  \n")}`:""}\n                `
                            })) return;
                        metapress.menubar.toasts.show({
                            id: "editor.backup",
                            text: "Loading backup...",
                            sticky: !0
                        }), await metapress.editor.loadBackup(await e.getBlob(), (e => {
                            metapress.menubar.toasts.show({
                                id: "editor.backup",
                                text: e,
                                sticky: !0
                            })
                        })), metapress.menubar.toasts.show({
                            id: "editor.backup",
                            text: "Backup loaded successfully."
                        })
                    } catch (e) {
                        F.warn(e), metapress.menubar.toasts.hide("editor.backup"), metapress.dialogs.alert({
                            icon: "error",
                            title: "Unable to load backup",
                            text: e.message
                        })
                    } finally {
                        this.isSaving = !1
                    }
                }
                async loadTemplate(e) {
                    if (!this.isSaving) {
                        this.isSaving = !0;
                        try {
                            let t = e?.plugins || [],
                                i = [];
                            for (let e of t) metapress.plugins.all.find((t => t.id == e.id)) || i.push(e);
                            if (!await metapress.dialogs.confirm({
                                    title: "Load template",
                                    text: `All current world data will be deleted on the server and replaced with the content of this backup. Are you sure you want to continue?\n                    ${i.length>0?`\n**This backup requires the following missing plugins:**  \n${i.map((e=>e.name)).join("  \n")}`:""}\n                `
                                })) return;
                            metapress.menubar.toasts.show({
                                id: "editor.backup",
                                text: "Loading template...",
                                sticky: !0
                            }), await metapress.editor.loadBackup(e.url, (e => {
                                metapress.menubar.toasts.show({
                                    id: "editor.backup",
                                    text: e,
                                    sticky: !0
                                })
                            })), metapress.menubar.toasts.show({
                                id: "editor.backup",
                                text: "Template loaded successfully."
                            })
                        } catch (e) {
                            F.warn(e), metapress.menubar.toasts.hide("editor.backup"), metapress.dialogs.alert({
                                icon: "error",
                                title: "Unable to load template",
                                text: e.message
                            })
                        } finally {
                            this.isSaving = !1
                        }
                    }
                }
                async deleteAll() {
                    let e = metapress.entities.all.filter((e => "template" == e.sync));
                    if (await metapress.dialogs.confirm({
                            title: "Delete all entities",
                            text: `Are you sure you want to delete ${e.length} ${1==e.length?"entity":"entities"}?`
                        })) {
                        for (let t of e) metapress.entities.remove(t.id);
                        metapress.editor.createGlobalRegionIfNeeded()
                    }
                }
            }
            var B = i(99477),
                W = i(25108);
            const Y = new B.Raycaster,
                q = new B.Vector3,
                V = new B.Vector3,
                X = new B.Quaternion,
                Q = {
                    X: new B.Vector3(1, 0, 0),
                    Y: new B.Vector3(0, 1, 0),
                    Z: new B.Vector3(0, 0, 1)
                },
                G = {
                    type: "change"
                },
                Z = {
                    type: "mouseDown"
                },
                N = {
                    type: "mouseUp",
                    mode: null
                },
                H = {
                    type: "objectChange"
                };
            class J extends B.Object3D {
                constructor(e, t) {
                    super(), void 0 === t && (W.warn('THREE.TransformControls: The second parameter "domElement" is now mandatory.'), t = document), this.isTransformControls = !0, this.visible = !1, this.domElement = t, this.domElement.style.touchAction = "none";
                    const i = new Se;
                    this._gizmo = i, this.add(i);
                    const n = new Me;
                    this._plane = n, this.add(n);
                    const a = this;

                    function s(e, t) {
                        let s = t;
                        Object.defineProperty(a, e, {
                            get: function() {
                                return void 0 !== s ? s : t
                            },
                            set: function(t) {
                                s !== t && (s = t, n[e] = t, i[e] = t, a.dispatchEvent({
                                    type: e + "-changed",
                                    value: t
                                }), a.dispatchEvent(G))
                            }
                        }), a[e] = t, n[e] = t, i[e] = t
                    }
                    s("camera", e), s("object", void 0), s("enabled", !0), s("axis", null), s("mode", "translate"), s("translationSnap", null), s("rotationSnap", null), s("scaleSnap", null), s("space", "world"), s("size", 1), s("dragging", !1), s("showX", !0), s("showY", !0), s("showZ", !0);
                    const o = new B.Vector3,
                        r = new B.Vector3,
                        l = new B.Quaternion,
                        c = new B.Quaternion,
                        d = new B.Vector3,
                        p = new B.Quaternion,
                        h = new B.Vector3,
                        m = new B.Vector3,
                        u = new B.Vector3,
                        g = new B.Vector3;
                    s("worldPosition", o), s("worldPositionStart", r), s("worldQuaternion", l), s("worldQuaternionStart", c), s("cameraPosition", d), s("cameraQuaternion", p), s("pointStart", h), s("pointEnd", m), s("rotationAxis", u), s("rotationAngle", 0), s("eye", g), this._offset = new B.Vector3, this._startNorm = new B.Vector3, this._endNorm = new B.Vector3, this._cameraScale = new B.Vector3, this._parentPosition = new B.Vector3, this._parentQuaternion = new B.Quaternion, this._parentQuaternionInv = new B.Quaternion, this._parentScale = new B.Vector3, this._worldScaleStart = new B.Vector3, this._worldQuaternionInv = new B.Quaternion, this._worldScale = new B.Vector3, this._positionStart = new B.Vector3, this._quaternionStart = new B.Quaternion, this._scaleStart = new B.Vector3, this._getPointer = K.bind(this), this._onPointerDown = te.bind(this), this._onPointerHover = ee.bind(this), this._onPointerMove = ie.bind(this), this._onPointerUp = ne.bind(this), this.domElement.addEventListener("pointerdown", this._onPointerDown), this.domElement.addEventListener("pointermove", this._onPointerHover), this.domElement.addEventListener("pointerup", this._onPointerUp)
                }
                updateMatrixWorld() {
                    void 0 !== this.object && (this.object.updateMatrixWorld(), null === this.object.parent ? W.error("TransformControls: The attached 3D object must be a part of the scene graph.") : this.object.parent.matrixWorld.decompose(this._parentPosition, this._parentQuaternion, this._parentScale), this.object.matrixWorld.decompose(this.worldPosition, this.worldQuaternion, this._worldScale), this._parentQuaternionInv.copy(this._parentQuaternion).invert(), this._worldQuaternionInv.copy(this.worldQuaternion).invert()), this.camera.updateMatrixWorld(), this.camera.matrixWorld.decompose(this.cameraPosition, this.cameraQuaternion, this._cameraScale), this.camera.isOrthographicCamera ? this.camera.getWorldDirection(this.eye).negate() : this.eye.copy(this.cameraPosition).sub(this.worldPosition).normalize(), super.updateMatrixWorld(this)
                }
                pointerHover(e) {
                    if (void 0 === this.object || !0 === this.dragging) return;
                    Y.setFromCamera(e, this.camera);
                    const t = ae(this._gizmo.picker[this.mode], Y);
                    this.axis = t ? t.object.name : null
                }
                pointerDown(e) {
                    if (void 0 !== this.object && !0 !== this.dragging && 0 === e.button && null !== this.axis) {
                        Y.setFromCamera(e, this.camera);
                        const t = ae(this._plane, Y, !0);
                        t && (this.object.updateMatrixWorld(), this.object.parent.updateMatrixWorld(), this._positionStart.copy(this.object.position), this._quaternionStart.copy(this.object.quaternion), this._scaleStart.copy(this.object.scale), this.object.matrixWorld.decompose(this.worldPositionStart, this.worldQuaternionStart, this._worldScaleStart), this.pointStart.copy(t.point).sub(this.worldPositionStart)), this.dragging = !0, Z.mode = this.mode, this.dispatchEvent(Z)
                    }
                }
                pointerMove(e) {
                    const t = this.axis,
                        i = this.mode,
                        n = this.object;
                    let a = this.space;
                    if ("scale" === i ? a = "local" : "E" !== t && "XYZE" !== t && "XYZ" !== t || (a = "world"), void 0 === n || null === t || !1 === this.dragging || -1 !== e.button) return;
                    Y.setFromCamera(e, this.camera);
                    const s = ae(this._plane, Y, !0);
                    if (s) {
                        if (this.pointEnd.copy(s.point).sub(this.worldPositionStart), "translate" === i) this._offset.copy(this.pointEnd).sub(this.pointStart), "local" === a && "XYZ" !== t && this._offset.applyQuaternion(this._worldQuaternionInv), -1 === t.indexOf("X") && (this._offset.x = 0), -1 === t.indexOf("Y") && (this._offset.y = 0), -1 === t.indexOf("Z") && (this._offset.z = 0), "local" === a && "XYZ" !== t ? this._offset.applyQuaternion(this._quaternionStart).divide(this._parentScale) : this._offset.applyQuaternion(this._parentQuaternionInv).divide(this._parentScale), n.position.copy(this._offset).add(this._positionStart), this.translationSnap && ("local" === a && (n.position.applyQuaternion(X.copy(this._quaternionStart).invert()), -1 !== t.search("X") && (n.position.x = Math.round(n.position.x / this.translationSnap) * this.translationSnap), -1 !== t.search("Y") && (n.position.y = Math.round(n.position.y / this.translationSnap) * this.translationSnap), -1 !== t.search("Z") && (n.position.z = Math.round(n.position.z / this.translationSnap) * this.translationSnap), n.position.applyQuaternion(this._quaternionStart)), "world" === a && (n.parent && n.position.add(q.setFromMatrixPosition(n.parent.matrixWorld)), -1 !== t.search("X") && (n.position.x = Math.round(n.position.x / this.translationSnap) * this.translationSnap), -1 !== t.search("Y") && (n.position.y = Math.round(n.position.y / this.translationSnap) * this.translationSnap), -1 !== t.search("Z") && (n.position.z = Math.round(n.position.z / this.translationSnap) * this.translationSnap), n.parent && n.position.sub(q.setFromMatrixPosition(n.parent.matrixWorld))));
                        else if ("scale" === i) {
                            if (-1 !== t.search("XYZ")) {
                                let e = this.pointEnd.length() / this.pointStart.length();
                                this.pointEnd.dot(this.pointStart) < 0 && (e *= -1), V.set(e, e, e)
                            } else q.copy(this.pointStart), V.copy(this.pointEnd), q.applyQuaternion(this._worldQuaternionInv), V.applyQuaternion(this._worldQuaternionInv), V.divide(q), -1 === t.search("X") && (V.x = 1), -1 === t.search("Y") && (V.y = 1), -1 === t.search("Z") && (V.z = 1), V.x < 0 && (V.x = .01), V.y < 0 && (V.y = .01), V.z < 0 && (V.z = .01);
                            n.scale.copy(this._scaleStart).multiply(V), this.scaleSnap && (-1 !== t.search("X") && (n.scale.x = Math.round(n.scale.x / this.scaleSnap) * this.scaleSnap || this.scaleSnap), -1 !== t.search("Y") && (n.scale.y = Math.round(n.scale.y / this.scaleSnap) * this.scaleSnap || this.scaleSnap), -1 !== t.search("Z") && (n.scale.z = Math.round(n.scale.z / this.scaleSnap) * this.scaleSnap || this.scaleSnap))
                        } else if ("rotate" === i) {
                            this._offset.copy(this.pointEnd).sub(this.pointStart);
                            const e = 20 / this.worldPosition.distanceTo(q.setFromMatrixPosition(this.camera.matrixWorld));
                            let i = !1;
                            "XYZE" === t ? (this.rotationAxis.copy(this._offset).cross(this.eye).normalize(), this.rotationAngle = this._offset.dot(q.copy(this.rotationAxis).cross(this.eye)) * e) : "X" !== t && "Y" !== t && "Z" !== t || (this.rotationAxis.copy(Q[t]), q.copy(Q[t]), "local" === a && q.applyQuaternion(this.worldQuaternion), q.cross(this.eye), 0 === q.length() ? i = !0 : this.rotationAngle = this._offset.dot(q.normalize()) * e), ("E" === t || i) && (this.rotationAxis.copy(this.eye), this.rotationAngle = this.pointEnd.angleTo(this.pointStart), this._startNorm.copy(this.pointStart).normalize(), this._endNorm.copy(this.pointEnd).normalize(), this.rotationAngle *= this._endNorm.cross(this._startNorm).dot(this.eye) < 0 ? 1 : -1), this.rotationSnap && (this.rotationAngle = Math.round(this.rotationAngle / this.rotationSnap) * this.rotationSnap), "local" === a && "E" !== t && "XYZE" !== t ? (n.quaternion.copy(this._quaternionStart), n.quaternion.multiply(X.setFromAxisAngle(this.rotationAxis, this.rotationAngle)).normalize()) : (this.rotationAxis.applyQuaternion(this._parentQuaternionInv), n.quaternion.copy(X.setFromAxisAngle(this.rotationAxis, this.rotationAngle)), n.quaternion.multiply(this._quaternionStart).normalize())
                        }
                        this.dispatchEvent(G), this.dispatchEvent(H)
                    }
                }
                pointerUp(e) {
                    0 === e.button && (this.dragging && null !== this.axis && (N.mode = this.mode, this.dispatchEvent(N)), this.dragging = !1, this.axis = null)
                }
                dispose() {
                    this.domElement.removeEventListener("pointerdown", this._onPointerDown), this.domElement.removeEventListener("pointermove", this._onPointerHover), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.domElement.removeEventListener("pointerup", this._onPointerUp), this.traverse((function(e) {
                        e.geometry && e.geometry.dispose(), e.material && e.material.dispose()
                    }))
                }
                attach(e) {
                    return this.object = e, this.visible = !0, this
                }
                detach() {
                    return this.object = void 0, this.visible = !1, this.axis = null, this
                }
                reset() {
                    this.enabled && this.dragging && (this.object.position.copy(this._positionStart), this.object.quaternion.copy(this._quaternionStart), this.object.scale.copy(this._scaleStart), this.dispatchEvent(G), this.dispatchEvent(H), this.pointStart.copy(this.pointEnd))
                }
                getRaycaster() {
                    return Y
                }
                getMode() {
                    return this.mode
                }
                setMode(e) {
                    this.mode = e
                }
                setTranslationSnap(e) {
                    this.translationSnap = e
                }
                setRotationSnap(e) {
                    this.rotationSnap = e
                }
                setScaleSnap(e) {
                    this.scaleSnap = e
                }
                setSize(e) {
                    this.size = e
                }
                setSpace(e) {
                    this.space = e
                }
            }

            function K(e) {
                if (this.domElement.ownerDocument.pointerLockElement) return {
                    x: 0,
                    y: 0,
                    button: e.button
                };
                {
                    const t = this.domElement.getBoundingClientRect();
                    return {
                        x: (e.clientX - t.left) / t.width * 2 - 1,
                        y: -(e.clientY - t.top) / t.height * 2 + 1,
                        button: e.button
                    }
                }
            }

            function ee(e) {
                if (this.enabled) switch (e.pointerType) {
                    case "mouse":
                    case "pen":
                        this.pointerHover(this._getPointer(e))
                }
            }

            function te(e) {
                this.enabled && (document.pointerLockElement || this.domElement.setPointerCapture(e.pointerId), this.domElement.addEventListener("pointermove", this._onPointerMove), this.pointerHover(this._getPointer(e)), this.pointerDown(this._getPointer(e)))
            }

            function ie(e) {
                this.enabled && this.pointerMove(this._getPointer(e))
            }

            function ne(e) {
                this.enabled && (this.domElement.releasePointerCapture(e.pointerId), this.domElement.removeEventListener("pointermove", this._onPointerMove), this.pointerUp(this._getPointer(e)))
            }

            function ae(e, t, i) {
                const n = t.intersectObject(e, !0);
                for (let e = 0; e < n.length; e++)
                    if (n[e].object.visible || i) return n[e];
                return !1
            }
            const se = new B.Euler,
                oe = new B.Vector3(0, 1, 0),
                re = new B.Vector3(0, 0, 0),
                le = new B.Matrix4,
                ce = new B.Quaternion,
                de = new B.Quaternion,
                pe = new B.Vector3,
                he = new B.Matrix4,
                me = new B.Vector3(1, 0, 0),
                ue = new B.Vector3(0, 1, 0),
                ge = new B.Vector3(0, 0, 1),
                ye = new B.Vector3,
                fe = new B.Vector3,
                we = new B.Vector3,
                be = "#e74c3c",
                ve = "#27ae60",
                Ee = "#3498db",
                xe = "#f1c40f";
            class Se extends B.Object3D {
                constructor() {
                    super(), this.isTransformControlsGizmo = !0, this.type = "TransformControlsGizmo";
                    const e = new B.MeshBasicMaterial({
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1,
                            toneMapped: !1,
                            transparent: !0
                        }),
                        t = new B.LineBasicMaterial({
                            depthTest: !1,
                            depthWrite: !1,
                            fog: !1,
                            toneMapped: !1,
                            transparent: !0
                        }),
                        i = e.clone();
                    i.opacity = .15;
                    const n = t.clone();
                    n.opacity = .5;
                    const a = e.clone();
                    a.color.set(be);
                    const s = e.clone();
                    s.color.set(ve);
                    const o = e.clone();
                    o.color.set(Ee);
                    const r = e.clone();
                    r.color.set(be), r.opacity = .5;
                    const l = e.clone();
                    l.color.set(ve), l.opacity = .5;
                    const c = e.clone();
                    c.color.set(Ee), c.opacity = .5;
                    const d = e.clone();
                    d.opacity = .25;
                    const p = e.clone();
                    p.color.set(xe), p.opacity = .25, e.clone().color.set(xe);
                    const h = e.clone();
                    h.color.setHex(7895160);
                    const m = new B.CylinderGeometry(0, .04, .1, 12);
                    m.translate(0, .05, 0);
                    const u = new B.BoxGeometry(.08, .08, .08);
                    u.translate(0, .04, 0);
                    const g = new B.BufferGeometry;
                    g.setAttribute("position", new B.Float32BufferAttribute([0, 0, 0, 1, 0, 0], 3));
                    const y = new B.CylinderGeometry(.0075, .0075, .5, 3);

                    function f(e, t) {
                        const i = new B.TorusGeometry(e, .0075, 3, 64, t * Math.PI * 2);
                        return i.rotateY(Math.PI / 2), i.rotateX(Math.PI / 2), i
                    }
                    y.translate(0, .25, 0);
                    const w = {
                            X: [
                                [new B.Mesh(m, a), [.5, 0, 0],
                                    [0, 0, -Math.PI / 2]
                                ],
                                [new B.Mesh(m, a), [-.5, 0, 0],
                                    [0, 0, Math.PI / 2]
                                ],
                                [new B.Mesh(y, a), [0, 0, 0],
                                    [0, 0, -Math.PI / 2]
                                ]
                            ],
                            Y: [
                                [new B.Mesh(m, s), [0, .5, 0]],
                                [new B.Mesh(m, s), [0, -.5, 0],
                                    [Math.PI, 0, 0]
                                ],
                                [new B.Mesh(y, s)]
                            ],
                            Z: [
                                [new B.Mesh(m, o), [0, 0, .5],
                                    [Math.PI / 2, 0, 0]
                                ],
                                [new B.Mesh(m, o), [0, 0, -.5],
                                    [-Math.PI / 2, 0, 0]
                                ],
                                [new B.Mesh(y, o), null, [Math.PI / 2, 0, 0]]
                            ],
                            XYZ: [
                                [new B.Mesh(new B.OctahedronGeometry(.1, 0), d.clone()), [0, 0, 0]]
                            ],
                            XY: [
                                [new B.Mesh(new B.BoxGeometry(.15, .15, .01), c.clone()), [.15, .15, 0]]
                            ],
                            YZ: [
                                [new B.Mesh(new B.BoxGeometry(.15, .15, .01), r.clone()), [0, .15, .15],
                                    [0, Math.PI / 2, 0]
                                ]
                            ],
                            XZ: [
                                [new B.Mesh(new B.BoxGeometry(.15, .15, .01), l.clone()), [.15, 0, .15],
                                    [-Math.PI / 2, 0, 0]
                                ]
                            ]
                        },
                        b = {
                            X: [
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [.3, 0, 0],
                                    [0, 0, -Math.PI / 2]
                                ],
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [-.3, 0, 0],
                                    [0, 0, Math.PI / 2]
                                ]
                            ],
                            Y: [
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [0, .3, 0]],
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [0, -.3, 0],
                                    [0, 0, Math.PI]
                                ]
                            ],
                            Z: [
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [0, 0, .3],
                                    [Math.PI / 2, 0, 0]
                                ],
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [0, 0, -.3],
                                    [-Math.PI / 2, 0, 0]
                                ]
                            ],
                            XYZ: [
                                [new B.Mesh(new B.OctahedronGeometry(.2, 0), i)]
                            ],
                            XY: [
                                [new B.Mesh(new B.BoxGeometry(.2, .2, .01), i), [.15, .15, 0]]
                            ],
                            YZ: [
                                [new B.Mesh(new B.BoxGeometry(.2, .2, .01), i), [0, .15, .15],
                                    [0, Math.PI / 2, 0]
                                ]
                            ],
                            XZ: [
                                [new B.Mesh(new B.BoxGeometry(.2, .2, .01), i), [.15, 0, .15],
                                    [-Math.PI / 2, 0, 0]
                                ]
                            ]
                        },
                        v = {
                            START: [
                                [new B.Mesh(new B.OctahedronGeometry(.01, 2), n), null, null, null, "helper"]
                            ],
                            END: [
                                [new B.Mesh(new B.OctahedronGeometry(.01, 2), n), null, null, null, "helper"]
                            ],
                            DELTA: [
                                [new B.Line(function() {
                                    const e = new B.BufferGeometry;
                                    return e.setAttribute("position", new B.Float32BufferAttribute([0, 0, 0, 1, 1, 1], 3)), e
                                }(), n), null, null, null, "helper"]
                            ],
                            X: [
                                [new B.Line(g, n.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
                            ],
                            Y: [
                                [new B.Line(g, n.clone()), [0, -1e3, 0],
                                    [0, 0, Math.PI / 2],
                                    [1e6, 1, 1], "helper"
                                ]
                            ],
                            Z: [
                                [new B.Line(g, n.clone()), [0, 0, -1e3],
                                    [0, -Math.PI / 2, 0],
                                    [1e6, 1, 1], "helper"
                                ]
                            ]
                        },
                        E = {
                            XYZE: [
                                [new B.Mesh(f(.5, 1), h), null, [0, Math.PI / 2, 0]]
                            ],
                            X: [
                                [new B.Mesh(f(.5, .5), a)]
                            ],
                            Y: [
                                [new B.Mesh(f(.5, .5), s), null, [0, 0, -Math.PI / 2]]
                            ],
                            Z: [
                                [new B.Mesh(f(.5, .5), o), null, [0, Math.PI / 2, 0]]
                            ],
                            E: [
                                [new B.Mesh(f(.75, 1), p), null, [0, Math.PI / 2, 0]]
                            ]
                        },
                        x = {
                            AXIS: [
                                [new B.Line(g, n.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
                            ]
                        },
                        S = {
                            XYZE: [
                                [new B.Mesh(new B.SphereGeometry(.25, 10, 8), i)]
                            ],
                            X: [
                                [new B.Mesh(new B.TorusGeometry(.5, .1, 4, 24), i), [0, 0, 0],
                                    [0, -Math.PI / 2, -Math.PI / 2]
                                ]
                            ],
                            Y: [
                                [new B.Mesh(new B.TorusGeometry(.5, .1, 4, 24), i), [0, 0, 0],
                                    [Math.PI / 2, 0, 0]
                                ]
                            ],
                            Z: [
                                [new B.Mesh(new B.TorusGeometry(.5, .1, 4, 24), i), [0, 0, 0],
                                    [0, 0, -Math.PI / 2]
                                ]
                            ],
                            E: [
                                [new B.Mesh(new B.TorusGeometry(.75, .1, 2, 24), i)]
                            ]
                        },
                        M = {
                            X: [
                                [new B.Mesh(u, a), [.5, 0, 0],
                                    [0, 0, -Math.PI / 2]
                                ],
                                [new B.Mesh(y, a), [0, 0, 0],
                                    [0, 0, -Math.PI / 2]
                                ],
                                [new B.Mesh(u, a), [-.5, 0, 0],
                                    [0, 0, Math.PI / 2]
                                ]
                            ],
                            Y: [
                                [new B.Mesh(u, s), [0, .5, 0]],
                                [new B.Mesh(y, s)],
                                [new B.Mesh(u, s), [0, -.5, 0],
                                    [0, 0, Math.PI]
                                ]
                            ],
                            Z: [
                                [new B.Mesh(u, o), [0, 0, .5],
                                    [Math.PI / 2, 0, 0]
                                ],
                                [new B.Mesh(y, o), [0, 0, 0],
                                    [Math.PI / 2, 0, 0]
                                ],
                                [new B.Mesh(u, o), [0, 0, -.5],
                                    [-Math.PI / 2, 0, 0]
                                ]
                            ],
                            XY: [
                                [new B.Mesh(new B.BoxGeometry(.15, .15, .01), c), [.15, .15, 0]]
                            ],
                            YZ: [
                                [new B.Mesh(new B.BoxGeometry(.15, .15, .01), r), [0, .15, .15],
                                    [0, Math.PI / 2, 0]
                                ]
                            ],
                            XZ: [
                                [new B.Mesh(new B.BoxGeometry(.15, .15, .01), l), [.15, 0, .15],
                                    [-Math.PI / 2, 0, 0]
                                ]
                            ],
                            XYZ: [
                                [new B.Mesh(new B.BoxGeometry(.1, .1, .1), d.clone())]
                            ]
                        },
                        k = {
                            X: [
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [.3, 0, 0],
                                    [0, 0, -Math.PI / 2]
                                ],
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [-.3, 0, 0],
                                    [0, 0, Math.PI / 2]
                                ]
                            ],
                            Y: [
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [0, .3, 0]],
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [0, -.3, 0],
                                    [0, 0, Math.PI]
                                ]
                            ],
                            Z: [
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [0, 0, .3],
                                    [Math.PI / 2, 0, 0]
                                ],
                                [new B.Mesh(new B.CylinderGeometry(.2, 0, .6, 4), i), [0, 0, -.3],
                                    [-Math.PI / 2, 0, 0]
                                ]
                            ],
                            XY: [
                                [new B.Mesh(new B.BoxGeometry(.2, .2, .01), i), [.15, .15, 0]]
                            ],
                            YZ: [
                                [new B.Mesh(new B.BoxGeometry(.2, .2, .01), i), [0, .15, .15],
                                    [0, Math.PI / 2, 0]
                                ]
                            ],
                            XZ: [
                                [new B.Mesh(new B.BoxGeometry(.2, .2, .01), i), [.15, 0, .15],
                                    [-Math.PI / 2, 0, 0]
                                ]
                            ],
                            XYZ: [
                                [new B.Mesh(new B.BoxGeometry(.2, .2, .2), i), [0, 0, 0]]
                            ]
                        },
                        C = {
                            X: [
                                [new B.Line(g, n.clone()), [-1e3, 0, 0], null, [1e6, 1, 1], "helper"]
                            ],
                            Y: [
                                [new B.Line(g, n.clone()), [0, -1e3, 0],
                                    [0, 0, Math.PI / 2],
                                    [1e6, 1, 1], "helper"
                                ]
                            ],
                            Z: [
                                [new B.Line(g, n.clone()), [0, 0, -1e3],
                                    [0, -Math.PI / 2, 0],
                                    [1e6, 1, 1], "helper"
                                ]
                            ]
                        };

                    function A(e) {
                        const t = new B.Object3D;
                        for (const i in e)
                            for (let n = e[i].length; n--;) {
                                const a = e[i][n][0].clone(),
                                    s = e[i][n][1],
                                    o = e[i][n][2],
                                    r = e[i][n][3],
                                    l = e[i][n][4];
                                a.name = i, a.tag = l, s && a.position.set(s[0], s[1], s[2]), o && a.rotation.set(o[0], o[1], o[2]), r && a.scale.set(r[0], r[1], r[2]), a.updateMatrix();
                                const c = a.geometry.clone();
                                c.applyMatrix4(a.matrix), a.geometry = c, a.renderOrder = 1 / 0, a.position.set(0, 0, 0), a.rotation.set(0, 0, 0), a.scale.set(1, 1, 1), t.add(a)
                            }
                        return t
                    }
                    this.gizmo = {}, this.picker = {}, this.helper = {}, this.add(this.gizmo.translate = A(w)), this.add(this.gizmo.rotate = A(E)), this.add(this.gizmo.scale = A(M)), this.add(this.picker.translate = A(b)), this.add(this.picker.rotate = A(S)), this.add(this.picker.scale = A(k)), this.add(this.helper.translate = A(v)), this.add(this.helper.rotate = A(x)), this.add(this.helper.scale = A(C)), this.picker.translate.visible = !1, this.picker.rotate.visible = !1, this.picker.scale.visible = !1
                }
                updateMatrixWorld(e) {
                    const t = "local" === ("scale" === this.mode ? "local" : this.space) ? this.worldQuaternion : de;
                    this.gizmo.translate.visible = "translate" === this.mode, this.gizmo.rotate.visible = "rotate" === this.mode, this.gizmo.scale.visible = "scale" === this.mode, this.helper.translate.visible = "translate" === this.mode, this.helper.rotate.visible = "rotate" === this.mode, this.helper.scale.visible = "scale" === this.mode;
                    let i = [];
                    i = i.concat(this.picker[this.mode].children), i = i.concat(this.gizmo[this.mode].children), i = i.concat(this.helper[this.mode].children);
                    for (let e = 0; e < i.length; e++) {
                        const n = i[e];
                        let a;
                        if (n.visible = !0, n.rotation.set(0, 0, 0), n.position.copy(this.worldPosition), a = this.camera.isOrthographicCamera ? (this.camera.top - this.camera.bottom) / this.camera.zoom : this.worldPosition.distanceTo(this.cameraPosition) * Math.min(1.9 * Math.tan(Math.PI * this.camera.fov / 360) / this.camera.zoom, 7), n.scale.set(1, 1, 1).multiplyScalar(a * this.size / 4), "helper" !== n.tag) {
                            if (n.quaternion.copy(t), "translate" === this.mode || "scale" === this.mode) {
                                const e = .99,
                                    i = .2;
                                "X" === n.name && Math.abs(oe.copy(me).applyQuaternion(t).dot(this.eye)) > e && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), "Y" === n.name && Math.abs(oe.copy(ue).applyQuaternion(t).dot(this.eye)) > e && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), "Z" === n.name && Math.abs(oe.copy(ge).applyQuaternion(t).dot(this.eye)) > e && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), "XY" === n.name && Math.abs(oe.copy(ge).applyQuaternion(t).dot(this.eye)) < i && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), "YZ" === n.name && Math.abs(oe.copy(me).applyQuaternion(t).dot(this.eye)) < i && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1), "XZ" === n.name && Math.abs(oe.copy(ue).applyQuaternion(t).dot(this.eye)) < i && (n.scale.set(1e-10, 1e-10, 1e-10), n.visible = !1)
                            } else "rotate" === this.mode && (ce.copy(t), oe.copy(this.eye).applyQuaternion(X.copy(t).invert()), -1 !== n.name.search("E") && n.quaternion.setFromRotationMatrix(le.lookAt(this.eye, re, ue)), "X" === n.name && (X.setFromAxisAngle(me, Math.atan2(-oe.y, oe.z)), X.multiplyQuaternions(ce, X), n.quaternion.copy(X)), "Y" === n.name && (X.setFromAxisAngle(ue, Math.atan2(oe.x, oe.z)), X.multiplyQuaternions(ce, X), n.quaternion.copy(X)), "Z" === n.name && (X.setFromAxisAngle(ge, Math.atan2(oe.y, oe.x)), X.multiplyQuaternions(ce, X), n.quaternion.copy(X)));
                            n.visible = n.visible && (-1 === n.name.indexOf("X") || this.showX), n.visible = n.visible && (-1 === n.name.indexOf("Y") || this.showY), n.visible = n.visible && (-1 === n.name.indexOf("Z") || this.showZ), n.visible = n.visible && (-1 === n.name.indexOf("E") || this.showX && this.showY && this.showZ), n.material._color = n.material._color || n.material.color.clone(), n.material._opacity = n.material._opacity || n.material.opacity, n.material.color.copy(n.material._color), n.material.opacity = n.material._opacity, this.enabled && this.axis && (n.name === this.axis || this.axis.split("").some((function(e) {
                                return n.name === e
                            }))) && (n.material.color.setHex(16776960), n.material.opacity = 1)
                        } else n.visible = !1, "AXIS" === n.name ? (n.visible = !!this.axis, "X" === this.axis && (X.setFromEuler(se.set(0, 0, 0)), n.quaternion.copy(t).multiply(X), Math.abs(oe.copy(me).applyQuaternion(t).dot(this.eye)) > .9 && (n.visible = !1)), "Y" === this.axis && (X.setFromEuler(se.set(0, 0, Math.PI / 2)), n.quaternion.copy(t).multiply(X), Math.abs(oe.copy(ue).applyQuaternion(t).dot(this.eye)) > .9 && (n.visible = !1)), "Z" === this.axis && (X.setFromEuler(se.set(0, Math.PI / 2, 0)), n.quaternion.copy(t).multiply(X), Math.abs(oe.copy(ge).applyQuaternion(t).dot(this.eye)) > .9 && (n.visible = !1)), "XYZE" === this.axis && (X.setFromEuler(se.set(0, Math.PI / 2, 0)), oe.copy(this.rotationAxis), n.quaternion.setFromRotationMatrix(le.lookAt(re, oe, ue)), n.quaternion.multiply(X), n.visible = this.dragging), "E" === this.axis && (n.visible = !1)) : "START" === n.name ? (n.position.copy(this.worldPositionStart), n.visible = this.dragging) : "END" === n.name ? (n.position.copy(this.worldPosition), n.visible = this.dragging) : "DELTA" === n.name ? (n.position.copy(this.worldPositionStart), n.quaternion.copy(this.worldQuaternionStart), q.set(1e-10, 1e-10, 1e-10).add(this.worldPositionStart).sub(this.worldPosition).multiplyScalar(-1), q.applyQuaternion(this.worldQuaternionStart.clone().invert()), n.scale.copy(q), n.visible = this.dragging) : (n.quaternion.copy(t), this.dragging ? n.position.copy(this.worldPositionStart) : n.position.copy(this.worldPosition), this.axis && (n.visible = -1 !== this.axis.search(n.name)))
                    }
                    super.updateMatrixWorld(e)
                }
            }
            class Me extends B.Mesh {
                constructor() {
                    super(new B.PlaneGeometry(1e5, 1e5, 2, 2), new B.MeshBasicMaterial({
                        visible: !1,
                        wireframe: !0,
                        side: B.DoubleSide,
                        transparent: !0,
                        opacity: .1,
                        toneMapped: !1
                    })), this.isTransformControlsPlane = !0, this.type = "TransformControlsPlane"
                }
                updateMatrixWorld(e) {
                    let t = this.space;
                    switch (this.position.copy(this.worldPosition), "scale" === this.mode && (t = "local"), ye.copy(me).applyQuaternion("local" === t ? this.worldQuaternion : de), fe.copy(ue).applyQuaternion("local" === t ? this.worldQuaternion : de), we.copy(ge).applyQuaternion("local" === t ? this.worldQuaternion : de), oe.copy(fe), this.mode) {
                        case "translate":
                        case "scale":
                            switch (this.axis) {
                                case "X":
                                    oe.copy(this.eye).cross(ye), pe.copy(ye).cross(oe);
                                    break;
                                case "Y":
                                    oe.copy(this.eye).cross(fe), pe.copy(fe).cross(oe);
                                    break;
                                case "Z":
                                    oe.copy(this.eye).cross(we), pe.copy(we).cross(oe);
                                    break;
                                case "XY":
                                    pe.copy(we);
                                    break;
                                case "YZ":
                                    pe.copy(ye);
                                    break;
                                case "XZ":
                                    oe.copy(we), pe.copy(fe);
                                    break;
                                case "XYZ":
                                case "E":
                                    pe.set(0, 0, 0)
                            }
                            break;
                        default:
                            pe.set(0, 0, 0)
                    }
                    0 === pe.length() ? this.quaternion.copy(this.cameraQuaternion) : (he.lookAt(q.set(0, 0, 0), pe, oe), this.quaternion.setFromRotationMatrix(he)), super.updateMatrixWorld(e)
                }
            }
            class ke extends B.Object3D {
                editingObject = null;
                listenerElement = null;
                camera = null;
                dragging = !1;
                gizmo = null;
                gizmoHovering = !1;
                constructor(e, t) {
                    super(), this.listenerElement = t, this.camera = e, this.listenerElement.addEventListener("pointerdown", this.onPointerDown), this.listenerElement.addEventListener("pointermove", this.onPointerMove), this.listenerElement.addEventListener("pointerup", this.onPointerUp), this.listenerElement.addEventListener("pointercancel", this.onPointerUp), this.gizmoIdleMaterial = new B.MeshBasicMaterial({
                        color: 16777215,
                        opacity: .25,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1,
                        toneMapped: !1,
                        transparent: !0
                    }), this.gizmoHoveringMaterial = new B.MeshBasicMaterial({
                        color: 16776960,
                        opacity: .95,
                        depthTest: !1,
                        depthWrite: !1,
                        fog: !1,
                        toneMapped: !1,
                        transparent: !0
                    });
                    let i = new B.BoxGeometry;
                    this.gizmo = new B.Mesh(i, this.gizmoIdleMaterial), this.gizmo.renderOrder = 1 / 0, this.gizmo.visible = !1, this.gizmo.onBeforeRender = this.onGizmoBeforeRender.bind(this), this.add(this.gizmo)
                }
                attach(e) {
                    this.editingObject = e, this.gizmo.visible = !0, this.onGizmoBeforeRender()
                }
                detach() {
                    this.onPointerUp(), this.editingObject = null, this.gizmo.visible = !1
                }
                dispose() {
                    this.listenerElement.removeEventListener("pointerdown", this.onPointerDown), this.listenerElement.removeEventListener("pointermove", this.onPointerMove), this.listenerElement.removeEventListener("pointerup", this.onPointerUp), this.listenerElement.removeEventListener("pointercancel", this.onPointerUp)
                }
                onPointerDown = e => {
                    this.editingObject && this.gizmoHovering && (e.preventDefault(), e.stopPropagation(), this.dragging = !0)
                };
                onPointerMove = e => {
                    this.dragging ? this.onPointerDrag(e) : this.checkHoveringGizmo(e)
                };
                checkHoveringGizmo(e) {
                    this.v2a || (this.v2a = new B.Vector2), this.v2a.x = (e.x - metapress.renderer.canvasRect.left) / metapress.renderer.canvasRect.width * 2 - 1, this.v2a.y = -(e.y - metapress.renderer.canvasRect.top) / metapress.renderer.canvasRect.height * 2 + 1, this.caster || (this.caster = new B.Raycaster), this.caster.setFromCamera(this.v2a, this.camera), this.caster.intersectObject(this.gizmo, !1).length > 0 ? (this.gizmo.material = this.gizmoHoveringMaterial, this.gizmoHovering = !0) : (this.gizmo.material = this.gizmoIdleMaterial, this.gizmoHovering = !1)
                }
                static transformForCoordinates(e, t, i, n, a, s) {
                    this.v2a || (this.v2a = new B.Vector2), this.v2a.x = e / window.innerWidth * 2 - 1, this.v2a.y = -t / window.innerHeight * 2 + 1, this.caster || (this.caster = new B.Raycaster), this.caster.setFromCamera(this.v2a, i);
                    let o = this.caster.intersectObject(n, !0);
                    if (o = o.filter((e => {
                            if (!e.object || !e.face) return !1;
                            let t = e.object.visible,
                                i = e.object;
                            for (; t && i.parent;) i = i.parent, t = i.visible;
                            return !(!t || s && !s(e))
                        })), !this.zeroYplane) {
                        let e = new B.PlaneGeometry(1e3, 1e3),
                            t = new B.MeshBasicMaterial;
                        this.zeroYplane = new B.Mesh(e, t), this.zeroYplane.rotation.x = -Math.PI / 2, this.zeroYplane.name = "Place on Wall: Zero Plane", this.zeroYplane.visible = !1
                    }
                    let r = o[0];
                    return r || (i.getWorldPosition(this.zeroYplane.position), this.zeroYplane.position.y = 0, this.zeroYplane.updateMatrixWorld(!0), r = this.caster.intersectObject(this.zeroYplane, !1)[0]), r ? (this.m4a || (this.m4a = new B.Matrix4), this.v3a || (this.v3a = new B.Vector3), this.m4a.extractRotation(r.object.matrixWorld), this.v3a.copy(r.face.normal), this.v3a.applyMatrix4(this.m4a), this.v3a.normalize(), this.zeroVector || (this.zeroVector = new B.Vector3(0, 0, 0)), this.xAxis || (this.xAxis = new B.Vector3(1, 0, 0)), this.yAxis || (this.yAxis = new B.Vector3(0, 1, 0)), this.qa || (this.qa = new B.Quaternion), this.m4b || (this.m4b = new B.Matrix4), this.m4a.lookAt(this.zeroVector, this.v3a, B.Object3D.DEFAULT_UP), a ? this.m4b.makeRotationAxis(this.yAxis, Math.PI) : this.m4b.makeRotationAxis(this.xAxis, -Math.PI / 2), this.m4a.multiply(this.m4b), this.qa.setFromRotationMatrix(this.m4a), this.v3b || (this.v3b = new B.Vector3), this.v3b.copy(this.v3a), this.v3b.multiplyScalar(.01), this.v3b.add(r.point), {
                        position: this.v3b,
                        quaternion: this.qa
                    }) : null
                }
                onPointerDrag(e) {
                    let t = this.editingObject.isMesh && "PlaneGeometry" == this.editingObject.geometry?.type;
                    t = t || this.editingObject.children[0]?.isMesh && "PlaneGeometry" == this.editingObject.children[0]?.geometry?.type;
                    let i = ke.transformForCoordinates(e.x, e.y, this.camera, this.parent, t, (e => e.object != this.gizmo && e.object != this.editingObject && !this.editingObject.getObjectById(e.object.id)));
                    i && (this.editingObject.position.copy(i.position), this.editingObject.quaternion.copy(i.quaternion))
                }
                onPointerUp = e => {
                    this.dragging && (this.dragging = !1, this.dispatchEvent({
                        type: "objectChange"
                    }))
                };
                onGizmoBeforeRender() {
                    if (!this.editingObject) return;
                    this.editingObject.getWorldPosition(this.gizmo.position), this.v3a || (this.v3a = new B.Vector3), this.camera.getWorldPosition(this.v3a);
                    let e = this.v3a.distanceTo(this.gizmo.position);
                    this.gizmo.scale.setScalar(.035 * e)
                }
            }
            var Ce = i(25108);
            class Ae extends n.PureComponent {
                static current = null;
                state = {
                    page: "entities",
                    selectedEntityID: "",
                    transformControlMode: ""
                };
                transformControl = null;
                wallTool = null;
                _lastEditingMode = "";
                _lastEntityID = "";
                componentDidMount() {
                    this.releaseMouseInput = metapress.input.mouse.preventInput.acquire(), this.releaseTouchInput = metapress.input.touch.preventInput.acquire(), metapress.renderer.canvas.addEventListener("pointerdown", this.onPointerDown), metapress.plugins.addEventListener("onUnsavedFieldsChanged", this.onUnsavedChanges), window.addEventListener("keydown", this.onKeyDown), window.addEventListener("keyup", this.onKeyUp), Ae.current = this;
                    const e = metapress.editor.selectionManager.selectedEntityIDs[0] || "";
                    this.setState({
                        selectedEntityID: e,
                        transformControlMode: Ae.lastTransformControlMode || "",
                        page: Ae.lastPage || "entities"
                    }), this._lastEntityID = e
                }
                componentWillUnmount() {
                    this.releaseMouseInput?.(), this.releaseTouchInput?.(), metapress.renderer.canvas.removeEventListener("pointerdown", this.onPointerDown), metapress.plugins.removeEventListener("onUnsavedFieldsChanged", this.onUnsavedChanges), window.removeEventListener("keydown", this.onKeyDown), window.removeEventListener("keyup", this.onKeyUp), Ae.current == this && (Ae.current = this), this.transformControl?.removeFromParent(), this.transformControl?.dispose(), this.wallTool?.removeFromParent(), this.wallTool?.dispose(), this.wallTool = null, Ae.lastTransformControlMode = this.state.transformControlMode, Ae.lastPage = this.state.page
                }
                onPointerDown = async e => {
                    if (e.preventDefault(), metapress.renderer.canvas.focus(), await new Promise((e => setTimeout(e, 1))), this.transformControl?.dragging || this.wallTool?.dragging) return;
                    let t = metapress.raycast.atScreenCoordinates(e.x, e.y);
                    if (!t?.entity) return;
                    let i = t.entity;
                    for (; i && "template" != i.sync && i.parent;) i = metapress.entities.get(i.parent);
                    i && metapress.editor.selectionManager.select(i.id)
                };
                onKeyDown = async e => {
                    if ("Control" != e.key && "Shift" != e.key && "Alt" != e.key && "Meta" != e.key || (this.transformControl?.setTranslationSnap(.2), this.transformControl?.setScaleSnap(.2), this.transformControl?.setRotationSnap(Math.PI / 16)), (e.ctrlKey || e.metaKey) && "c" == e.key) {
                        if ("INPUT" == document.activeElement?.tagName || "TEXTAREA" == document.activeElement?.tagName) return;
                        e.preventDefault(), this.copySelectedEntities()
                    }
                };
                async copySelectedEntities() {
                    try {
                        if ("INPUT" == document.activeElement?.tagName || "TEXTAREA" == document.activeElement?.tagName) return;
                        if (!metapress.editor.selectionManager.selectedEntityIDs.length) throw new Error("Nothing selected.");
                        let e = metapress.entities.get(metapress.editor.selectionManager.selectedEntityIDs[0]);
                        if (!e) throw new Error("Entity not found.");
                        await navigator.clipboard.writeText("metapress.entity:" + JSON.stringify(e)), metapress.menubar.toasts.show({
                            id: "editor.copying",
                            text: "Copied " + (e.name || `Untitled ${e.type}`),
                            duration: 3e3
                        })
                    } catch (e) {
                        Ce.warn("Failed to copy:", e), metapress.menubar.toasts.show({
                            id: "editor.copying",
                            text: "Cannot copy: " + e.message,
                            duration: 3e3
                        })
                    }
                }
                onKeyUp = e => {
                    "Control" != e.key && "Shift" != e.key && "Alt" != e.key && "Meta" != e.key || (this.transformControl?.setTranslationSnap(0), this.transformControl?.setScaleSnap(0), this.transformControl?.setRotationSnap(0))
                };
                async updateState(e, t, i = null) {
                    if (!e || "object" != typeof e || Array.isArray(e) || Object.keys(e).length < 1) Ce.warn("[EditorWindow] Invalid state update.", e);
                    else if (this.setState({
                            ...e
                        }, t), i) {
                        const e = 100,
                            t = 1e3 / e * 1;
                        let n = 0;
                        for (; !metapress.entities.getRenderer(i) && (n += 1, !(n >= t));) await new Promise((t => setTimeout(t, e)));
                        this.updateTransformControl(!0)
                    }
                }
                updateTransformControl(e = !1) {
                    if (!e && this.state.transformControlMode == this._lastEditingMode && this.state.selectedEntityID == this._lastEntityID) return;
                    this._lastEditingMode = this.state.transformControlMode, this._lastEntityID = this.state.selectedEntityID, this.transformControl?.detach(), this.wallTool?.detach();
                    let t = this.state.selectedEntityID && metapress.entities.getRenderer(this.state.selectedEntityID);
                    t?.object?.isObject3D && ("translate" == this.state.transformControlMode || "rotate" == this.state.transformControlMode || "scale" == this.state.transformControlMode ? (this.transformControl || (this.transformControl = new J(metapress.renderer.camera, metapress.renderer.canvas), this.transformControl.addEventListener("objectChange", this.onTransformControlObjectChange.bind(this)), metapress.renderer.scene.add(this.transformControl)), this.transformControl.setMode(this.state.transformControlMode), this.transformControl.attach(t.container)) : "wall" == this.state.transformControlMode && (this.wallTool || (this.wallTool = new ke(metapress.renderer.camera, metapress.renderer.canvas), this.wallTool.addEventListener("objectChange", this.onTransformControlObjectChange.bind(this)), metapress.renderer.scene.add(this.wallTool)), this.wallTool.attach(t.container)))
                }
                onTransformControlObjectChange() {
                    let e = this.state.selectedEntityID && metapress.entities.getRenderer(this.state.selectedEntityID);
                    e && metapress.entities.update(e.entity.id, {
                        x: e.container.position.x,
                        y: e.container.position.y,
                        z: e.container.position.z,
                        scaleX: e.container.scale.x,
                        scaleY: e.container.scale.y,
                        scaleZ: e.container.scale.z,
                        quatX: e.container.quaternion.x,
                        quatY: e.container.quaternion.y,
                        quatZ: e.container.quaternion.z,
                        quatW: e.container.quaternion.w,
                        lastEdited: Date.now()
                    })
                }
                onUnsavedChanges = () => {
                    this.forceUpdate()
                };
                render() {
                    return this.updateTransformControl(), n.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%"
                        }
                    }, n.createElement("div", {
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
                    }, n.createElement("div", {
                        style: {
                            fontSize: 15,
                            marginLeft: 20
                        }
                    }, "Editor"), n.createElement("div", {
                        style: {
                            flex: "1 1 auto"
                        }
                    }), n.createElement(Pe, {
                        icon: i(67742),
                        enabled: "entities" == this.state.page,
                        onClick: e => this.setState({
                            page: "entities"
                        })
                    }), n.createElement(Pe, {
                        icon: i(75848),
                        enabled: "entity" == this.state.page,
                        onClick: e => this.setState({
                            page: "entity"
                        })
                    }), n.createElement(Pe, {
                        icon: i(88989),
                        enabled: "settings" == this.state.page,
                        onClick: e => this.setState({
                            page: "settings"
                        })
                    }), n.createElement(Pe, {
                        icon: i(42065),
                        enabled: "add" == this.state.page,
                        onClick: e => this.setState({
                            page: "add"
                        }),
                        style: {
                            backgroundSize: 28
                        }
                    }), n.createElement("div", {
                        style: {
                            flex: "1 1 auto"
                        }
                    }), n.createElement("img", {
                        draggable: "false",
                        src: i(42728),
                        title: "Close",
                        style: {
                            flexShrink: 0,
                            width: 20,
                            height: 20,
                            marginRight: 15,
                            cursor: "pointer"
                        },
                        onClick: () => metapress.menubar.closePanel()
                    })), n.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 45,
                            left: 0,
                            width: "100%",
                            height: `calc(100% - ${45+(s.H.shared.editorUnlocked?45:0)}px)`,
                            overflowX: "hidden",
                            overflowY: "auto"
                        }
                    }, "settings" == this.state.page ? n.createElement($, {
                        plugin: this.props.plugin,
                        onSwitchPage: e => this.setState({
                            page: e
                        })
                    }) : null, "entity" == this.state.page ? n.createElement(U, {
                        key: this.state.selectedEntityID || "",
                        plugin: this.props.plugin,
                        selectedEntityID: this.state.selectedEntityID,
                        onSwitchPage: e => this.setState({
                            page: e
                        })
                    }) : null, "entities" == this.state.page ? n.createElement(I, {
                        plugin: this.props.plugin,
                        selectedEntityID: this.state.selectedEntityID
                    }) : null, "add" == this.state.page ? n.createElement(S, {
                        plugin: this.props.plugin
                    }) : null, "set-region-environment" == this.state.page ? n.createElement(L, {
                        plugin: this.props.plugin,
                        selectedEntityID: this.state.selectedEntityID,
                        onSwitchPage: e => this.setState({
                            page: e
                        })
                    }) : null, "add-modifier" == this.state.page ? n.createElement(k, {
                        plugin: this.props.plugin,
                        selectedEntityID: this.state.selectedEntityID,
                        onSwitchPage: e => this.setState({
                            page: e
                        })
                    }) : null, "action-scripter" == this.state.page ? n.createElement(P, {
                        selectedEntityID: this.state.selectedEntityID,
                        onSwitchPage: e => this.setState({
                            page: e
                        })
                    }) : null), s.H.shared.editorUnlocked ? n.createElement("div", {
                        style: {
                            display: "flex",
                            alignItems: "center",
                            position: "absolute",
                            top: "calc(100% - 45px)",
                            left: 0,
                            width: "100%",
                            height: 44,
                            borderTop: "1px solid rgba(255, 255, 255, 0.1)"
                        }
                    }, n.createElement("div", {
                        style: {
                            width: 10,
                            flex: "0 0 auto"
                        }
                    }), n.createElement(Pe, {
                        enabled: !0,
                        icon: i(78371),
                        title: "Save",
                        onClick: e => metapress.editor.save()
                    }), n.createElement("div", {
                        style: {
                            flex: "1 1 1px"
                        }
                    }), n.createElement(Pe, {
                        enabled: "" == this.state.transformControlMode,
                        icon: i(40938),
                        title: "Select",
                        onClick: e => this.setState({
                            transformControlMode: ""
                        })
                    }), n.createElement(Pe, {
                        enabled: "translate" == this.state.transformControlMode,
                        icon: i(97165),
                        title: "Move",
                        onClick: e => this.setState({
                            transformControlMode: "translate"
                        })
                    }), n.createElement(Pe, {
                        enabled: "rotate" == this.state.transformControlMode,
                        icon: i(22907),
                        title: "Rotate",
                        onClick: e => this.setState({
                            transformControlMode: "rotate"
                        })
                    }), n.createElement(Pe, {
                        enabled: "scale" == this.state.transformControlMode,
                        icon: i(23527),
                        title: "Scale",
                        onClick: e => this.setState({
                            transformControlMode: "scale"
                        })
                    }), n.createElement(Pe, {
                        enabled: "wall" == this.state.transformControlMode,
                        icon: i(10965),
                        title: "Surface Movement",
                        onClick: e => this.setState({
                            transformControlMode: "wall"
                        })
                    }), n.createElement("div", {
                        style: {
                            flex: "1 1 1px"
                        }
                    }), metapress.editor.hasUnsavedChanges ? n.createElement(Pe, {
                        enabled: !0,
                        icon: i(38765),
                        title: "Unsaved changes"
                    }) : n.createElement(Pe, {
                        enabled: !0,
                        icon: i(78226),
                        title: "No issues detected"
                    }), n.createElement("div", {
                        style: {
                            width: 10,
                            flex: "0 0 auto"
                        }
                    })) : null)
                }
                onRender3D() {}
                onEntityLoaded(e) {
                    this.forceUpdate()
                }
            }
            const Pe = e => n.createElement("div", {
                style: Object.assign({
                    width: 33,
                    height: "100%",
                    flex: "0 0 auto",
                    opacity: e.enabled ? 1 : .4,
                    cursor: "pointer",
                    backgroundSize: "22px",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundImage: `url(${e.icon})`
                }, e.style),
                onClick: e.onClick,
                title: e.title
            });
            var De = i(25108);
            class Te {
                selectedEntityIDs = [];
                select(e) {
                    if (!e) return this.deselect();
                    let t = metapress.entities.get(e);
                    return !!t && ("template" != t.sync ? (De.warn(`[Editor] Can't select entity ${e} because it's not managed by us.`), !1) : (De.debug("[Editor] Selecting entity: ", t), this.selectedEntityIDs = [e], Ae.current?.updateState({
                        page: "entity",
                        selectedEntityID: e
                    }, void 0, e), metapress.plugins.sendEvent("onEditorSelectionChanged", this.selectedEntityIDs), !0))
                }
                deselect() {
                    return this.selectedEntityIDs = [], metapress.plugins.sendEvent("onEditorSelectionChanged", this.selectedEntityIDs), !0
                }
                deselectOnly(e) {
                    return this.selectedEntityIDs = this.selectedEntityIDs.filter((t => t != e)), metapress.plugins.sendEvent("onEditorSelectionChanged", this.selectedEntityIDs), !0
                }
                isSelected(e) {
                    return this.selectedEntityIDs.includes(e)
                }
            }
            var Ie = i(25108);
            class ze {
                constructor() {
                    metapress.entities.add({
                        id: "temporary:object-dropzone-indicator",
                        type: "mesh",
                        url: i(42969),
                        hidden: !0
                    }), this.PreProcessing = new l, metapress.renderer.canvas.addEventListener("dragover", this.onDragOver.bind(this)), metapress.renderer.canvas.addEventListener("dragleave", this.onDragLeave.bind(this)), metapress.renderer.canvas.addEventListener("drop", this.onDrop.bind(this))
                }
                async onDragOver(e) {
                    if (!s.H.shared.editorUnlocked) return;
                    if (this.isDraggingOver = !0, e.preventDefault(), e.dataTransfer.dropEffect = "copy", this._isDebouncing) return;
                    if (this._isDebouncing = !0, await new Promise((e => setTimeout(e, 1))), this._isDebouncing = !1, !this.isDraggingOver) return;
                    let t = ke.transformForCoordinates(e.x, e.y, metapress.renderer.camera, metapress.renderer.scene, !1, (e => {
                        let t = null;
                        return e.object.traverseAncestors((e => {
                            t || (t = e.entityRenderer)
                        })), "temporary:object-dropzone-indicator" != t?.entity?.id
                    }));
                    t && metapress.entities.update("temporary:object-dropzone-indicator", {
                        x: t.position.x,
                        y: t.position.y,
                        z: t.position.z,
                        quatX: t.quaternion.x,
                        quatY: t.quaternion.y,
                        quatZ: t.quaternion.z,
                        quatW: t.quaternion.w,
                        hidden: !1
                    })
                }
                onDragLeave(e) {
                    s.H.shared.editorUnlocked && (e.preventDefault(), this.isDraggingOver = !1, metapress.entities.update("temporary:object-dropzone-indicator", {
                        hidden: !0
                    }))
                }
                async onDrop(e) {
                    if (!s.H.shared.editorUnlocked) return;
                    e.preventDefault(), this.isDraggingOver = !1, metapress.entities.update("temporary:object-dropzone-indicator", {
                        hidden: !0
                    });
                    let t = e.dataTransfer.files[0];
                    if (!t) return;
                    let i = metapress.menubar.toasts.show({
                        sticky: !0,
                        text: `Saving ${t.name}...`
                    });
                    try {
                        t = await this.PreProcessing.callPreProcessing(t);
                        let i = await metapress.plugins.callAsync("prepareEntityForFile", t);
                        if (!i) throw new Error("Unsupported file type.");
                        i.name || (i.name = t.name);
                        let n = "plane" == i.type,
                            a = ke.transformForCoordinates(e.x, e.y, metapress.renderer.camera, metapress.renderer.scene, n, (e => {
                                let t = null;
                                return e.object.traverseAncestors((e => {
                                    t || (t = e.entityRenderer)
                                })), "temporary:object-dropzone-indicator" != t?.entity?.id
                            }));
                        if (!a) throw new Error("The item could not be placed at this position.");
                        let s = await metapress.storage.uploadFile("custom-template", t);
                        for (let e in i) "$URL" == i[e] && (i[e] = s);
                        let o = metapress.entities.add({
                            ...i,
                            sync: "template",
                            x: a.position.x,
                            y: a.position.y,
                            z: a.position.z,
                            quatX: a.quaternion.x,
                            quatY: a.quaternion.y,
                            quatZ: a.quaternion.z,
                            quatW: a.quaternion.w
                        });
                        metapress.editor.editEntity(o.id)
                    } catch (e) {
                        Ie.warn("[MetaPress] Unable to save dropped file.", e), "cancelled" != e.message && metapress.menubar.toasts.show({
                            text: "Unable to save: " + e.message
                        })
                    }
                    metapress.menubar.toasts.close(i)
                }
            }
            var je = i(25108);
            const _e = e => {
                    let [t, a] = (0, n.useState)("select-template"), [s, o] = (0, n.useState)(""), {
                        templates: r,
                        templatesLoading: l,
                        templatesError: c
                    } = Ue(), d = metapress.dialogs.useDialog();
                    return metapress.editor.canEdit ? "select-template" == t ? n.createElement("div", {
                        style: {
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "flex-start"
                        }
                    }, n.createElement("img", {
                        draggable: "false",
                        src: i(40249),
                        style: {
                            height: 64,
                            marginBottom: 40
                        }
                    }), n.createElement("div", {
                        style: {
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 10,
                            opacity: .5,
                            maxWidth: 300
                        }
                    }, "Get Started"), n.createElement("div", {
                        style: {
                            fontSize: 12,
                            textAlign: "center",
                            lineHeight: "1.5",
                            margin: "0px 40px 60px 40px",
                            opacity: .5,
                            maxWidth: 300
                        }
                    }, "To get started, select a template world below. You can always change your template or customize it later from the Editor."), l && 0 == r.length ? n.createElement("div", {
                        style: {
                            textAlign: "center",
                            fontSize: 15
                        }
                    }, "Loading templates...") : null, r.map((e => n.createElement(x, {
                        key: e.url,
                        image: e.image,
                        title: e.name,
                        subtitle: e.description,
                        onClick: () => (async e => {
                            try {
                                a("loading-template"), o("Fetching template..."), await metapress.editor.loadBackup(e.url, (e => {
                                    o(e)
                                })), a("complete"), o(""), await new Promise((e => setTimeout(e, 2e3))), d.close()
                            } catch (e) {
                                je.warn("[MetaPress] Unable to load template: ", e), a("select-template"), o(""), metapress.dialogs.alert({
                                    icon: "error",
                                    title: "Unable to load template",
                                    text: e.message
                                })
                            }
                        })(e)
                    }))), n.createElement("div", {
                        style: {
                            height: 10
                        }
                    })) : "loading-template" == t ? n.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }, n.createElement("img", {
                        draggable: "false",
                        src: i(27745),
                        style: {
                            height: 64,
                            marginBottom: 40
                        }
                    }), n.createElement("div", {
                        style: {
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 10,
                            opacity: .5,
                            maxWidth: 300
                        }
                    }, "Loading template, please wait..."), n.createElement("div", {
                        style: {
                            fontSize: 12,
                            textAlign: "center",
                            lineHeight: "1.5",
                            margin: "0px 40px 20px 40px",
                            opacity: .5,
                            maxWidth: 300
                        }
                    }, s)) : "complete" == t ? n.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }, n.createElement("img", {
                        draggable: "false",
                        src: i(92260),
                        style: {
                            height: 64,
                            marginBottom: 40
                        }
                    }), n.createElement("div", {
                        style: {
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 10,
                            opacity: .5,
                            maxWidth: 300
                        }
                    }, "Done!"), n.createElement("div", {
                        style: {
                            fontSize: 12,
                            textAlign: "center",
                            lineHeight: "1.5",
                            margin: "0px 40px 20px 40px",
                            opacity: .5,
                            maxWidth: 300
                        }
                    }, "Your world has been set up successfully.")) : void 0 : n.createElement("div", {
                        style: {
                            position: "absolute",
                            top: 0,
                            left: 0,
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            justifyContent: "center"
                        }
                    }, n.createElement("img", {
                        draggable: "false",
                        src: i(31495),
                        style: {
                            height: 64,
                            opacity: .25,
                            marginBottom: 40
                        }
                    }), n.createElement("div", {
                        style: {
                            fontSize: 16,
                            fontWeight: "bold",
                            textAlign: "center",
                            marginBottom: 10,
                            opacity: .5,
                            maxWidth: 300
                        }
                    }, "No Content"), n.createElement("div", {
                        style: {
                            fontSize: 12,
                            textAlign: "center",
                            lineHeight: "1.5",
                            margin: "0px 40px 20px 40px",
                            opacity: .5,
                            maxWidth: 300
                        }
                    }, "This world currently has no content. Please contact an administrator to set up this world."))
                },
                Ue = () => {
                    let [e, t] = n.useState([]), [i, a] = n.useState(!1), [s, o] = n.useState(null);
                    return n.useEffect((() => {
                        (async () => {
                            try {
                                a(!0);
                                let e = await metapress.plugins.callAllAsync("editor_getTemplates");
                                e = e.flat().filter((e => e?.url && e?.name)), e.sort(((e, t) => (e.name || "").localeCompare(t.name || ""))), t(e), a(!1), o(null)
                            } catch (e) {
                                je.warn("[MetaPress] Error fetching templates: " + e.message), a(!1), o(e)
                            }
                        })()
                    }), []), {
                        templates: e,
                        templatesLoading: i,
                        templatesError: s
                    }
                };
            var Le = i(25108);
            class Oe {
                id = "core.ui.editor";
                name = "Editor";
                description = "Allows editing of the world.";
                requires = ["backend", "entities", "storage", "dialogs", "renderer", "raycast"];
                provides = ["editor"];
                editorMenuID = "core.ui.editor.menu";
                prevOpenID = null;
                templateLastEdited = 0;
                selectionManager = null;
                PlaceOnWallTool = ke;
                dropzone = null;
                get canEdit() {
                    return metapress.storage.canEdit
                }
                get currentTool() {
                    return Ae?.current?._lastEditingMode || ""
                }
                async onLoad() {
                    if (await this.loadTemplateFromServer(), !this.canEdit) return Le.debug("[MetaPress] Editor disabled, user does not have editing permission in this world.");
                    metapress.entities.add({
                        id: this.editorMenuID,
                        type: "menubar.item",
                        name: "Editor",
                        description: "Can be used to edit the world. Only visible to admins.",
                        is_panel: !0,
                        order: 99,
                        icon: i(44209),
                        onClick: () => this.toggleEditor()
                    }), this.selectionManager = new Te, this.dropzone = new ze, this.prevOpenID = metapress.menubar.openPanelID || null;
                    try {
                        window.parent.addEventListener("beforeunload", this.onBeforeUnload.bind(this))
                    } catch (e) {
                        Le.warn(`[Editor] Unable to add the 'beforeunload' handler. ${e.message}`)
                    }
                    window.addEventListener("keydown", (e => {
                        if ((e.ctrlKey || e.metaKey) && "v" == e.key) {
                            if ("INPUT" == document.activeElement?.tagName || "TEXTAREA" == document.activeElement?.tagName) return;
                            e.preventDefault(), this.pasteEntities()
                        } else "Tab" == e.key && (e.preventDefault(), this.toggleEditor())
                    }))
                }
                async pasteEntities() {
                    try {
                        if ("INPUT" == document.activeElement?.tagName || "TEXTAREA" == document.activeElement?.tagName) return;
                        let e = await navigator.clipboard.readText();
                        if (!e) throw new Error("Nothing copied.");
                        if (!e.startsWith("metapress.entity:")) throw new Error("Nothing copied...");
                        let t = JSON.parse(e.substring("metapress.entity:".length)),
                            i = new THREE.Vector3,
                            n = new THREE.Vector3;
                        metapress.renderer.camera.getWorldPosition(i), metapress.renderer.camera.getWorldDirection(n), n.setLength(2), n.add(new THREE.Vector3(0, 1, 0).cross(n).setLength(1)), n.add(i), t.sync = "template", t.x = n.x, t.y = n.y, t.z = n.z, delete t.id;
                        let a = metapress.entities.add(t);
                        this.selectionManager.select(a.id), metapress.menubar.toasts.show({
                            id: "editor.copying",
                            text: "Pasted " + (t.name || `Untitled ${t.type}`),
                            duration: 3e3
                        })
                    } catch (e) {
                        Le.warn("Failed to paste:", e), metapress.menubar.toasts.show({
                            id: "editor.copying",
                            text: "Cannot paste: " + e.message,
                            duration: 3e3
                        })
                    }
                }
                async loadTemplateFromServer(e = !1) {
                    try {
                        let t = await metapress.storage.getFileURL("custom-template", "template.json");
                        (e || this.config.templateVersion) && (t += (t.includes("?") ? "&" : "?") + "v=" + (e ? Date.now() : this.config.templateVersion));
                        let i = await fetch(t);
                        if (404 == i.status || !i.ok && !1 === this.config.templateDataExists) return this.lastWorldLoadState = "not-found", Le.warn("[MetaPress] Unable to load editor template: The template doesn't exist (404)."), void metapress.backend.logEvent("world_editor_load_template_404");
                        if (!i.ok) throw new Error(`${i.status} ${i.statusText}`);
                        let n = await i.json();
                        this.loadTemplateFromData(n), Le.debug("[MetaPress] Editor template loaded!"), this.lastWorldLoadState = "loaded", metapress.backend.logEvent("world_editor_load_template_success")
                    } catch (e) {
                        Le.warn(`[MetaPress] Unable to load editor template: ${e.message}`), this.lastWorldLoadState = "failed", metapress.dialogs.alert({
                            icon: "error",
                            title: "Unable to load world",
                            text: e.message
                        }), metapress.backend.logEvent("world_editor_load_template_error")
                    }
                }
                loadTemplateFromData(e) {
                    if ("metapress:custom-template" != e.type) throw new Error("Template data was not valid.");
                    for (let t of e.entities) {
                        t.sync = "template";
                        let e = metapress.entities.get(t.id);
                        if (e) {
                            Object.assign(e, t);
                            for (let i in e) i in t || delete e[i]
                        } else e = metapress.entities.add(t)
                    }
                    let t = metapress.entities.all.slice();
                    for (let i of t) "template" == i.sync && (e.entities.find((e => e.id == i.id)) || metapress.entities.remove(i.id));
                    this.createGlobalRegionIfNeeded(), this.templateLastEdited = e.entities.reduce(((e, t) => Math.max(e, t.lastEdited || 0)), 0)
                }
                createGlobalRegionIfNeeded() {
                    metapress.entities.all.find((e => "template-global-region" == e.id)) || metapress.entities.add({
                        id: "template-global-region",
                        type: "region",
                        name: "Global region",
                        sync: "template",
                        scaleX: 9999999,
                        scaleY: 9999999,
                        scaleZ: 9999999,
                        region_preset: "core.sunny"
                    })
                }
                get isOpen() {
                    return metapress.menubar.openPanelID == this.editorMenuID
                }
                showEditor() {
                    this.isOpen || (metapress.menubar.openReactPanel(this.editorMenuID, (() => n.createElement(Ae, {
                        plugin: this
                    }))), metapress.plugins.sendEvent("editor_onOpen", !0), metapress.backend.logEvent("world_editor_open"))
                }
                hideEditor() {
                    this.isOpen && (metapress.menubar.closePanel(), metapress.plugins.sendEvent("editor_onClose", !1), metapress.backend.logEvent("world_editor_close"))
                }
                toggleEditor() {
                    this.isOpen ? this.hideEditor() : this.showEditor()
                }
                $menubar_onPanelChange(e) {
                    this.prevOpenID != e && (this.prevOpenID == this.editorMenuID && e != this.editorMenuID && metapress.plugins.sendEvent("editor_onClose", !1), this.prevOpenID != this.editorMenuID && e == this.editorMenuID && metapress.plugins.sendEvent("editor_onOpen", !0), this.prevOpenID = e || null)
                }
                $listActionsForEntity(e) {
                    if ("template" == e.sync) return [{
                        id: "properties",
                        name: "Properties",
                        action: () => Le.log("h")
                    }]
                }
                closeEditor() {
                    metapress.menubar.openPanelID == this.editorMenuID && metapress.menubar.closePanel(), metapress.backend.logEvent("world_editor_close")
                }
                $onEditorSelectionChanged(e) {
                    Ae.current?.updateState({
                        selectedEntityID: e[0]
                    })
                }
                get hasUnsavedChanges() {
                    return metapress.entities.all.filter((e => "template" == e.sync)).reduce(((e, t) => Math.max(e, t.lastEdited || 0)), 0) > this.templateLastEdited
                }
                onBeforeUnload(e) {
                    if (this.hasUnsavedChanges) return e.preventDefault(), e.returnValue = "Are you sure you want to leave? Unsaved changes to the template will be lost."
                }
                $getDebugMenuOptions = () => [];
                $onEntityLoaded(e) {
                    Ae.current?.onEntityLoaded(e)
                }
                editEntity(e) {
                    let t = metapress.entities.get(e);
                    return !(!t || "template" != t.sync || (this.selectionManager.select(e), Ae.lastPage = "entity", this.showEditor(), 0))
                }
                assetsFromEntityList(e) {
                    let t = [];
                    for (let i of e)
                        for (let e in i) {
                            let n = i[e];
                            if ("string" != typeof n || !n.startsWith("http")) continue;
                            let a = n.indexOf("/custom-template/");
                            if (-1 == a) continue;
                            let s = n.substring(a + 17);
                            a = s.indexOf("?"), -1 != a && (s = s.substring(0, a)), a = s.indexOf("#"), -1 != a && (s = s.substring(0, a));
                            let o = t.find((e => e.filename == s));
                            o ? o.entities.push({
                                id: i.id,
                                key: e
                            }) : t.push({
                                url: n,
                                filename: s,
                                entities: [{
                                    id: i.id,
                                    key: e
                                }]
                            })
                        }
                    return t
                }
                async getBackupMetadata(e) {
                    if (!e) return;
                    if ("string" == typeof e) progressCb?.("Downloading resource..."), e = await fetch(e).then((e => e.blob()));
                    else if (!(e instanceof Blob)) throw new Error("Invalid file specified for import. Must be either a string URL or a Blob.");
                    let {
                        default: t
                    } = await Promise.all([i.e(8764), i.e(5733)]).then(i.t.bind(i, 55733, 23)), n = new t;
                    await n.loadAsync(e);
                    let a = await n.file("template.json");
                    if (!a) throw new Error("Missing template.json in backup file.");
                    return JSON.parse(await a.async("string"))
                }
                async loadBackup(e, t) {
                    if (!e) throw new Error("No file specified for import.");
                    if ("string" == typeof e) t?.("Downloading resource..."), e = await fetch(e).then((e => e.blob()));
                    else if (!(e instanceof Blob)) throw new Error("Invalid file specified for import. Must be either a string URL or a Blob.");
                    const {
                        default: n
                    } = await i.e(983).then(i.t.bind(i, 80983, 19));
                    let {
                        default: a
                    } = await Promise.all([i.e(8764), i.e(5733)]).then(i.t.bind(i, 55733, 23)), s = new a;
                    await s.loadAsync(e);
                    let o = await s.file("template.json");
                    if (!o) throw new Error("Missing template.json in backup file.");
                    let r = JSON.parse(await o.async("string"));
                    if ("metapress:custom-template" != r.type) throw new Error("Invalid data in backup file.");
                    let l = this.assetsFromEntityList(r.entities);
                    for (let e = 0; e < l.length; e++) {
                        t?.(`Uploading assets: ${e+1} of ${l.length}`);
                        let i = l[e],
                            a = s.file(i.filename);
                        if (!a) throw new Error(`Missing asset: ${i.filename}`);
                        let o = await a.async("blob"),
                            c = new File([o], a.name, {
                                type: n.lookup(a.name) || "application/octet-stream"
                            }),
                            d = await metapress.storage.uploadFile("custom-template", c);
                        for (let e of i.entities) r.entities.find((t => t.id == e.id))[e.key] = d
                    }
                    let c = new File([JSON.stringify(r)], "template.json", {
                        type: "text/plain"
                    });
                    await metapress.storage.uploadFile("custom-template", c), metapress.editor.loadTemplateFromData(r), metapress.messaging.send("global", "core.ui.editor:template-updated", {
                        templateLastEdited: metapress.editor.templateLastEdited
                    }), metapress.spawnpoints.respawn(), metapress.plugins.sendEvent("editor_onBackupLoaded"), metapress.backend.logEvent("world_editor_load_backup")
                }
                async saveBackup(e) {
                    let t = [];
                    for (let e of metapress.plugins.all) t.push({
                        id: e.id,
                        name: e.name,
                        description: e.description,
                        version: e.version || "",
                        requires: e.requires || [],
                        provides: e.provides || [],
                        metadata: e.metadata || {}
                    });
                    let n = metapress.entities.all.filter((e => "template" == e.sync)),
                        a = {
                            type: "metapress:custom-template",
                            date: Date.now(),
                            plugins: [...t],
                            entities: n
                        },
                        {
                            default: s
                        } = await Promise.all([i.e(8764), i.e(5733)]).then(i.t.bind(i, 55733, 23)),
                        o = new s;
                    o.file("template.json", JSON.stringify(a));
                    let r = this.assetsFromEntityList(a.entities);
                    for (let t = 0; t < r.length; t++) {
                        e?.(`Fetching assets: ${t+1} of ${r.length}`);
                        let i = r[t],
                            n = await fetch(i.url);
                        if (!n.ok) throw new Error(`Unable to fetch ${i.filename}: ${n.status} ${n.statusText}`);
                        let a = await n.blob();
                        o.file(i.filename, a)
                    }
                    return metapress.backend.logEvent("world_editor_save_backup"), e?.("Packaging backup..."), await o.generateAsync({
                        type: "blob"
                    })
                }
                async $loader_onEnterWorld() {
                    "not-found" == this.lastWorldLoadState && (await new Promise((e => setTimeout(e, 1e3))), Le.debug("[MetaPress] Showing first time world setup UI..."), metapress.dialogs.show({
                        title: "World Setup",
                        noDismiss: !0,
                        noHeader: !0,
                        content: n.createElement(_e, null)
                    }))
                }
                async $onIncomingMessage(e) {
                    if ("core.ui.editor:template-updated" == e.name) {
                        let t = metapress.avatars.users.find((t => t.instanceID == e.from))?.name || "<No Name>";
                        if (this.hasUnsavedChanges && this.canEdit && !await metapress.dialogs.confirm({
                                title: "Reload World",
                                text: `${t} has made changes to the world, but you have unsaved changes as well. Do you want to reload it now? You will lose your unsaved changes.`
                            })) return;
                        this.loadTemplateFromServer(!0)
                    }
                }
                createEntityNearby(e) {
                    let t = new THREE.Vector3,
                        i = new THREE.Vector3;
                    metapress.renderer.camera.getWorldPosition(t), metapress.renderer.camera.getWorldDirection(i), i.setLength(2), i.add(new THREE.Vector3(0, -1, 0).cross(i).setLength(1)), i.add(t);
                    let n = metapress.entities.add({
                        sync: "template",
                        x: i.x,
                        y: i.y,
                        z: i.z,
                        ...e
                    });
                    return this.showEditor(), metapress.editor.selectionManager.select(n.id), n.id
                }
                save() {
                    this._isSaving || (this._isSaving = !0, metapress.menubar.toasts.show({
                        id: "editor.saving",
                        sticky: !0,
                        text: "Saving, please wait..."
                    }), this.save2().then((() => {
                        metapress.menubar.toasts.show({
                            id: "editor.saving",
                            text: "Save complete!"
                        }), this._isSaving = !1, metapress.plugins.sendEvent("onUnsavedFieldsChanged")
                    })).catch((e => {
                        Le.warn(e), metapress.menubar.toasts.show({
                            id: "editor.saving",
                            text: "Save failed: " + e.message
                        }), this._isSaving = !1
                    })))
                }
                async save2() {
                    let e = metapress.entities.all.filter((e => "template" == e.sync)),
                        t = JSON.stringify({
                            type: "metapress:custom-template",
                            date: Date.now(),
                            entities: e
                        }),
                        i = new File([t], "template.json", {
                            type: "text/plain"
                        });
                    await metapress.storage.uploadFile("custom-template", i), metapress.editor.templateLastEdited = metapress.entities.all.filter((e => "template" == e.sync)).reduce(((e, t) => Math.max(e, t.lastEdited || 0)), 0), metapress.messaging.send("global", "core.ui.editor:template-updated", {
                        templateLastEdited: metapress.editor.templateLastEdited
                    })
                }
                ai_getKnowledgeBaseEntries = () => {
                    let e = metapress.plugins.callAll("editor_getAddableEntities").flat().filter((e => !!e)).sort(((e, t) => e.name.localeCompare(t.name))),
                        t = [];
                    return t = this.GetModifiersForEntity(this.selectionManager.selectedEntityIDs), [{
                        id: `${this.id}:addObject`,
                        type: "action",
                        name: "Add object",
                        tags: e.map((e => `add ${e.name}, create ${e.name}, make ${e.name}`)).join(", "),
                        disabled: !this.canEdit,
                        content: `\n                    Run this action to add an object to the world. Action value is the ID of the object to add. Available objects:\n                    ${e.map((e=>`- id=${e.id} name=${e.name} description=${e.description||"none"}`)).join("\n")}\n                `,
                        action: async t => {
                            let i = e.find((e => e.id == t.value));
                            if (!i) throw new Error(`Object with ID '${t.value}' not found.`);
                            try {
                                await S.doAddAction(i)
                            } catch (e) {
                                throw new Error(`Failed to add object: ${e.message}`)
                            }
                            return "Success, object created and selected in the Editor"
                        }
                    }, {
                        id: `${this.id}:addModifier`,
                        type: "action",
                        name: "Add modifier",
                        tags: "add modifier, add effect, add behavior",
                        disabled: !this.canEdit && null != t,
                        content: `Run this action to add a modifier to the selected object. Action value is the ID of the modifier to add.\n                    Available modifiers:\n                    ${t?t.map((e=>`- id=${e.id} name=${e.name||"noname"} description=${e.description||"none"}`)).join("\n"):"none for current selected object."},\n                    User ${this.id}:addModifier with value as id of the modifier to add.\n                `,
                        action: async e => {
                            try {
                                return this.addModifier(t.find((t => t.id == e.value)), metapress.entities.get(this.selectionManager.selectedEntityIDs)), "Success, modifier added to the selected object."
                            } catch (e) {
                                throw new Error(`Failed to add modifier: ${e.message}`)
                            }
                        }
                    }, {
                        id: `${this.id}:updateObjectSettings`,
                        type: "action",
                        name: "update object settings",
                        tags: `set/update/edit/remove/change/adjust/list/view: ${t?.settings?t.settings.map((e=>`- id=${e.id||"none"}`)).join(", "):""}`,
                        disabled: !this.canEdit,
                        content: `Run this action to update/change the settings of an object.\n                    Action value is a JSON object with the following format:\n                    e.g. value = {setting: {setting.id: value}}   // This sets the value of the setting\n                    Example of modifier settings for the selected object:\n                    ${t?t.map((e=>`${t?.settings?t.settings.map((e=>`- id=${e.id||"none"}`)).join(", "):""}`)).join("\n"):"none for current selected object."},\n                    Use ${this.id}:updateObjectSettings with value as JSON object with setting to update, the setting key HAS to exist either on the object or the modifier.\n                    Current selected object id: ${this.selectionManager.selectedEntityIDs}\n                    curent settings: ${JSON.stringify(metapress.entities.get(this.selectionManager.selectedEntityIDs))}\n                    `,
                        action: e => {
                            try {
                                return this.UpdateObjectSettings(e, t), "Success, object settings updated."
                            } catch (e) {
                                throw new Error(`Failed to update object settings: ${e.message}`)
                            }
                        }
                    }, {
                        id: `${this.id}:viewObjectSettings`,
                        type: "info",
                        name: "view object settings",
                        tags: `show/list/view, ${t?.settings?t.settings.map((e=>`- id=${e.id||"none"}`)).join(", "):""}`,
                        disabled: !this.canEdit,
                        content: `Run this action to update/change the settings of an object.\n                    Action value is a JSON object with the following format:\n                    e.g. value = {setting: {setting.id: value}}   // This sets the value of the setting\n                    Example of modifier settings for the selected object:\n                    ${t?t.map((e=>`${t?.settings?t.settings.map((e=>`- id=${e.id||"none"}`)).join(", "):""}`)).join("\n"):"none for current selected object."},\n                    Use ${this.id}:updateObjectSettings with value as JSON object with setting to update, the setting key HAS to exist either on the object or the modifier.\n                    Current selected object id: ${this.selectionManager.selectedEntityIDs}\n                    curent settings: ${JSON.stringify(metapress.entities.get(this.selectionManager.selectedEntityIDs))}\n                    `
                    }, {
                        id: `${this.id}:saveChanges`,
                        type: "action",
                        name: "Save world changes",
                        tags: "save world, save changes, save editor, save template",
                        disabled: !this.canEdit,
                        content: `Saves the changes made to the world. The world currently has ${this.hasUnsavedChanges?"some":"no"} unsaved changes.`,
                        action: async e => {
                            try {
                                return this.save(), "Success, changes saved."
                            } catch (e) {
                                throw new Error(`Failed to save changes: ${e.message}`)
                            }
                        }
                    }, {
                        id: `${this.id}:pasteEntities`,
                        type: "action",
                        name: "Paste copied entities",
                        tags: "paste entities, paste copied entities, paste",
                        disabled: !this.canEdit,
                        content: "Pastes the entities that were copied earlier.",
                        action: async e => {
                            try {
                                return await this.pasteEntities(), "Success, entities pasted."
                            } catch (e) {
                                throw new Error(`Failed to paste entities: ${e.message}`)
                            }
                        }
                    }, {
                        id: `${this.id}:copyEntities`,
                        type: "action",
                        name: "Copy entities",
                        tags: "copy entities, copy selected entities, copy",
                        disabled: !this.canEdit,
                        content: "Copies the selected entities to the clipboard.",
                        action: async e => {
                            try {
                                return this.showEditor(), Ae.current?.copyEntities(), "Success, entities copied."
                            } catch (e) {
                                throw new Error(`Failed to copy entities: ${e.message}`)
                            }
                        }
                    }, {
                        id: `${this.id}:selectEntity`,
                        type: "action",
                        name: "Select entity by name",
                        tags: "select entity, select entity by name, select",
                        disabled: !this.canEdit,
                        content: `Selects the entity by its select type 'name', 'type', 'id':\n                    ${metapress.entities.all.filter((e=>"template"==e.sync)).map((e=>`id: ${e.id} name:${e.name||"Untitled "+e.type} type:${e.type}`)).join("\n")}.\n                    With input value as id of the object.\n                `,
                        action: async e => {
                            let t;
                            if (t = metapress.entities.all.filter((e => "template" == e.sync)).find((t => t.id == e.value)), !t) throw new Error(`Entity with id ${e.value.substring("id".length).trim()} not found.`);
                            if (this.editEntity(t.id)) return "Success, entity selected.";
                            throw new Error(`Failed to select entity: ${t.name||"Untitled "+t.type}`)
                        }
                    }, {
                        id: `${this.id}:listEntities`,
                        type: "info",
                        name: "List entities",
                        tags: "list entities, list all entities, list",
                        disabled: !this.canEdit,
                        content: `Lists all entities by name. If they are unnamed, lists by "untitled" and type:\n                    ${metapress.entities.all.filter((e=>"template"==e.sync)).map((e=>`id: ${e.id} name:${e.name||"Untitled "+e.type} type:${e.type}`)).join("\n")}.\n                `
                    }, {
                        id: `${this.id}:saveBackup`,
                        type: "action",
                        name: "Save backup",
                        tags: "save backup, backup world, backup",
                        disabled: !this.canEdit,
                        content: "Saves a backup of the world to your computer.",
                        action: async e => {
                            let t = await this.saveBackup(),
                                i = URL.createObjectURL(t),
                                n = `metapress-backup-${(new Date).toISOString().replace(/[^0-9]/g,"")}.zip`,
                                a = document.createElement("a");
                            return a.href = i, a.download = n, a.click(), URL.revokeObjectURL(i), "Success, backup saved."
                        }
                    }, {
                        id: `${this.id}:loadBackup`,
                        type: "action",
                        name: "Load backup",
                        tags: "load backup, restore world, restore",
                        disabled: !this.canEdit,
                        content: "Restores the world from a backup file.",
                        action: async e => {
                            this.showEditor(), Ae.current?.setState({
                                page: "settings"
                            })
                        }
                    }]
                };
                UpdateObjectSettings(e, t) {
                    let i = JSON.parse(e.value);
                    i.setting && (i = i.setting);
                    let n = !1,
                        a = metapress.entities.get(this.selectionManager.selectedEntityIDs),
                        s = [];
                    for (let e in a)
                        if (e.startsWith("modifier:")) {
                            Le.log(e.substring("modifier:".length));
                            let i = t.find((t => t.id == e.substring("modifier:".length)));
                            i && s.push(i)
                        } if (n = this.checkModifierExists(s, i, n), !n) {
                        for (let e in i)
                            for (let t in a)
                                if (t == e) {
                                    n = !0;
                                    break
                                } if (!n) throw new Error(`Setting ${i} does not exist in the object or the modifier`)
                    }
                    i.lastModified = Date.now(), metapress.entities.update(this.selectionManager.selectedEntityIDs, i), this.toggleEditor(), this.showEditor()
                }
                checkModifierExists(e, t) {
                    if (!e) return !1;
                    Le.log("Modifiers:", e);
                    for (let i of e) {
                        if (!i.settings) continue;
                        let e = i.settings;
                        if (e || "function" != typeof i.settings || (e = i.settings()), e) {
                            "function" == typeof e && (e = e()), Le.log("Settings:", e);
                            for (let i of e)
                                if (i.id && i.id in t) return !0
                        }
                    }
                    return !1
                }
                GetModifiersForEntity(e) {
                    let t = metapress.entities.get(e);
                    if (!t) return Le.warn("[Editor] Selected entity not found in AddModifierPanel");
                    let i = [];
                    for (let e of metapress.plugins.all)
                        for (let n of e.provides || []) {
                            if (!n.startsWith("modifier:")) continue;
                            let a = n.split(":")[1],
                                s = e.createModifier?.(a, t, "");
                            if (s && a && !i.find((e => e.id == a)) && !t["modifier:" + a] && !s.hidden) {
                                if (null != s.isEntitySupported) try {
                                    const e = s.isEntitySupported(t);
                                    "boolean" != typeof e || e ? "object" == typeof e && !1 === e.result && (s.showAsDisabled = !0, s.showAsDisabledReason = e.reason || null) : s.showAsDisabled = !0
                                } catch (e) {}
                                s.id = a, i.push(s)
                            }
                        }
                    return i
                }
                addModifier(e, t) {
                    if (e?.provides)
                        for (let i of t.getModifiers()) {
                            if (i.id == e.id) return;
                            if (i.provides)
                                for (let t of i.provides)
                                    for (let n of e.provides)
                                        if (t == n) return void metapress.dialogs.alert({
                                            icon: "warn",
                                            title: "Cannot Add Modifier",
                                            text: `This modifier conflicts with ${i.name}, please remove it first.`
                                        })
                        }
                    metapress.entities.update(t.id, {
                        ["modifier:" + e.id]: !0
                    })
                }
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
        42065: (e, t, i) => {
            e.exports = i.p + "mp-core/add.d19777da7e52d2999ddd.svg"
        },
        75848: (e, t, i) => {
            e.exports = i.p + "mp-core/cube.59aa124e53e51e4d295c.svg"
        },
        81501: (e, t, i) => {
            e.exports = i.p + "mp-core/delete-all.018efb47e737d7ecac63.svg"
        },
        44209: (e, t, i) => {
            e.exports = i.p + "mp-core/draw.564c14085951335df236.svg"
        },
        42969: (e, t, i) => {
            e.exports = i.p + "mp-core/dropzone.d32446ef000317b13930.glb"
        },
        40249: (e, t, i) => {
            e.exports = i.p + "mp-core/first-experience-template-icon.feb62c563237bcaf597d.svg"
        },
        88989: (e, t, i) => {
            e.exports = i.p + "mp-core/gear.8cb3aa11048e7d496917.svg"
        },
        78226: (e, t, i) => {
            e.exports = i.p + "mp-core/icon-good.332ed59028d6225e5a04.svg"
        },
        78371: (e, t, i) => {
            e.exports = i.p + "mp-core/icon-save.d8b6415eeda427d0fe6e.svg"
        },
        38765: (e, t, i) => {
            e.exports = i.p + "mp-core/icon-warning.45f9e38b9fdce56ced4d.svg"
        },
        67742: (e, t, i) => {
            e.exports = i.p + "mp-core/list.f7d07d7e71c99a51f176.svg"
        },
        36449: (e, t, i) => {
            e.exports = i.p + "mp-core/load-backup.94221f0c16ebbd449932.svg"
        },
        27745: (e, t, i) => {
            e.exports = i.p + "mp-core/loading-animated.b8537734bb8cb396f7b9.svg"
        },
        62842: (e, t, i) => {
            e.exports = i.p + "mp-core/lock.d546211e87b9420e55ce.svg"
        },
        31495: (e, t, i) => {
            e.exports = i.p + "mp-core/missing-content.ae18a1e0aaabaa6815c3.svg"
        },
        41598: (e, t, i) => {
            e.exports = i.p + "mp-core/object-circle.f7abe3405d346872969c.svg"
        },
        90371: (e, t, i) => {
            e.exports = i.p + "mp-core/object-cube.28f5b6d5b3236e38a354.svg"
        },
        5461: (e, t, i) => {
            e.exports = i.p + "mp-core/object-cylinder.8ba97d22a2f697c6e15f.svg"
        },
        78365: (e, t, i) => {
            e.exports = i.p + "mp-core/object-mesh.60ce208a667a30abb2b7.svg"
        },
        26192: (e, t, i) => {
            e.exports = i.p + "mp-core/object-plane.12f4b034648a5127c7b9.svg"
        },
        26247: (e, t, i) => {
            e.exports = i.p + "mp-core/object-region.9d3d97740123301db48b.svg"
        },
        34949: (e, t, i) => {
            e.exports = i.p + "mp-core/object-sphere.76ed3af0e9e4df404a93.svg"
        },
        8189: (e, t, i) => {
            e.exports = i.p + "mp-core/object-unknown.d1faaedbffb45df69323.svg"
        },
        75588: (e, t, i) => {
            e.exports = i.p + "mp-core/save-backup.ce66e8326235b6179957.svg"
        },
        92260: (e, t, i) => {
            e.exports = i.p + "mp-core/success-party.9044e4d331f82a323672.svg"
        },
        40938: (e, t, i) => {
            e.exports = i.p + "mp-core/tool-cursor.077130a01d5158d46356.svg"
        },
        22907: (e, t, i) => {
            e.exports = i.p + "mp-core/tool-rotate.9688b0709dbd4b453928.svg"
        },
        23527: (e, t, i) => {
            e.exports = i.p + "mp-core/tool-scale.4bcc2cec75b1f9f61a23.svg"
        },
        97165: (e, t, i) => {
            e.exports = i.p + "mp-core/tool-translate.4f2b8e082a5d8e724090.svg"
        },
        10965: (e, t, i) => {
            e.exports = i.p + "mp-core/tool-wall.98a5c1acfa3b9e9d139a.svg"
        }
    }
]);

// ... existing code ...
try {
    s.H.shared.activeSubscription = {
        payerName: "Simulated User",
        provider: "SimulatedProvider",
        valid: true,
        subscription: "active"
    };
} catch (e) {}
// ... existing code ...