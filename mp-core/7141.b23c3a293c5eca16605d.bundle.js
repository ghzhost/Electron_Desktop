"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [7141], {
        27141: (e, t, s) => {
            s.r(t), s.d(t, {
                default: () => a
            });
            class a {
                id = "core.integration.web-weaver";
                name = "Web Weaver AI";
                description = "Manages integration with Web Weaver AI.";
                version = "1.0.0";
                requires = [];
                provides = ["ai", "webWeaver"];
                onLoad() {
                    window.webWeaver = window.webWeaver || {}, window.webWeaver.pageSummary = window.webWeaver.pageSummary || "You are Web Weaver, an AI helping the user to interact with MetaPress.", window.webWeaver.knowledgeBase = window.webWeaver.knowledgeBase || [], document.addEventListener("webweaver_kb_search", (e => this.onKnowledgeBaseSearch(e)))
                }
                onKnowledgeBaseSearch(e) {
                    const t = metapress.plugins.callAll("ai_getKnowledgeBaseEntries").flat().filter((e => e && !e.disabled));
                    for (let e of t) e.sourceID = "VerseWeb";
                    window.webWeaver.knowledgeBase = window.webWeaver.knowledgeBase.filter((e => !t.find((e => "VerseWeb" == e.sourceID)))).concat(t)
                }
                $ai_getKnowledgeBaseEntries = () => [{
                    type: "info",
                    name: "VerseWeb",
                    tags: "VerseWeb features, MP features, VerseWeb capabilities, MP capabilities, VerseWeb description, MP description, VerseWeb info, MP info, VerseWeb information, MP information",
                    content: "VerseWeb is a tool which allows anyone to create and host their own metaverse. It runs in the browser and can automatically pull in content from backends like WordPress. Visit https://metapress.dev for more information."
                }, {
                    type: "tour",
                    name: "General guided tour of MetaPress",
                    content: `Perform these steps one by one:\n                ${metapress.isOpen?"":'- Open MetaPress by running the KB action "core.metapress:open"'}\n                - Explain that the sidebar on the left of the screen contains actions the user can perform. Suggest the response "Continue" and wait.\n                ${(metapress.entities?.all||[]).filter((e=>"menubar.item"==e.type&&(e.ai_description||e.description))).sort(((e,t)=>(e.order||0)-(t.order||0))).map((e=>e.is_panel?`- Explain the sidebar button "${e.ai_name||e.name}". ${e.ai_description||e.description}. Run the KB action "core.ui.menubar:clickItem" with value "${e.id}". Suggest the response "Continue" and wait.`:`- Explain the sidebar button "${e.ai_name||e.name}". ${e.ai_description||e.description}. Suggest the response "Continue" and wait.`))}\n                - This is the end of the tour.\n            `
                }, {
                    id: "core.metapress:open",
                    type: "action",
                    name: "Open MetaPress",
                    content: "Opens the metaverse if it's not already open.",
                    action: e => metapress.isOpen ? "Success: Already open." : (metapress.open(), "Success")
                }, {
                    id: "core.metapress:close",
                    type: "action",
                    name: "Close MetaPress",
                    content: "Closes the metaverse and goes back to the 2D page.",
                    action: e => metapress.isOpen ? (metapress.close(), "Success") : "Success: Already closed."
                }]
            }
        }
    }
]);