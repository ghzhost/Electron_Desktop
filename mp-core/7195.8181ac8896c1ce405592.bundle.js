"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [7195], {
        47195: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => n
            });
            var l = s(25108);
            class n {
                id = "core.ui.fullscreen";
                name = "Fullscreen Support";
                description = "Allows the app to enter fullscreen mode on supported devices.";
                requires = ["menubar", "renderer"];
                provides = ["fullscreen"];
                onLoad() {
                    document.body.requestFullscreen && (window.addEventListener("keydown", (e => {
                        (e.altKey || e.metaKey) && "Enter" == e.key && this.toggle()
                    })), document.body.addEventListener("fullscreenchange", (() => {
                        this.isFullscreen || null == metapress.button?.div?.style?.bottom || (metapress.button.div.style.bottom = null)
                    })))
                }
                get isFullscreen() {
                    return !!document.fullscreenElement
                }
                async toggle() {
                    try {
                        this.isFullscreen ? await this.exit() : await this.enter()
                    } catch (e) {
                        l.warn("[Fullscreen] Unable to toggle fullscreen mode.", e)
                    }
                }
                async enter() {
                    this.isFullscreen || (await document.body.requestFullscreen(), metapress.button?.div && (metapress.button.div.style.bottom = "-42px"))
                }
                async exit() {
                    this.isFullscreen && (await document.exitFullscreen(), metapress.button?.div && (metapress.button.div.style.bottom = null))
                }
                $input_onDoubleClick() {
                    this.toggle()
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    id: `${this.id}:enterFullscreen`,
                    type: "action",
                    name: "Enter fullscreen",
                    tags: "enter fullscreen, take over screen, full screen, mouse lock, cursor lock",
                    content: "\n                Use this action to enter fullscreen mode. Value is 'enter' or 'leave' to enter or leave fullscreen mode.\n            ",
                    action: async e => "enter" == e.value ? this.isFullscreen ? "Already in fullscreen mode" : (await this.enter(), "Successfully entered fullscreen mode") : this.isFullscreen ? (await this.exit(), "Successfully exited fullscreen mode") : "Not in fullscreen mode"
                }]
            }
        }
    }
]);