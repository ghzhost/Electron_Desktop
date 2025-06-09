"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [5948], {
        25948: (e, s, n) => {
            n.r(s), n.d(s, {
                default: () => a
            }), n(8838);
            var t = n(25108);
            class a {
                id = "core.messaging";
                name = "Messaging";
                description = "Handles sending and receiving global messages in the space.";
                version = "1.0.0";
                provides = ["messaging"];
                async send(e, s, n) {
                    if (!e) throw new Error("Missing target in metapress.messaging.send()");
                    if (!s) throw new Error("Missing name in metapress.messaging.send()");
                    metapress.plugins.sendEvent("onOutgoingMessage", {
                        from: metapress.instanceID,
                        target: e,
                        name: s,
                        data: n
                    })
                }
                handleIncomingMessage(e) {
                    "global" != e.target && e.target != metapress.instanceID || e.from != metapress.instanceID && metapress.plugins.sendEvent("onIncomingMessage", e)
                }
                pendingRequests = {};
                lastRequestID = 0;
                async request(e, s, n, t = 5e3) {
                    let a = this.lastRequestID++;
                    this.send(e, "messagingInternal_request", {
                        requestID: a,
                        name: s,
                        data: n
                    });
                    let r = null,
                        i = null,
                        u = new Promise(((e, s) => {
                            i = e, r = s
                        }));
                    return this.pendingRequests[a] = {
                        promiseResolve: i,
                        promiseReject: r,
                        promise: u
                    }, this.pendingRequests[a].timer = setTimeout((() => {
                        r(new Error("Request timed out")), delete this.pendingRequests[a]
                    }), t), u
                }
                async $onIncomingMessage(e) {
                    if ("messagingInternal_request" == e.name) try {
                        let s = await metapress.plugins.callAsync(`messaging_request_${e.data.name}`, e.data.data);
                        if (void 0 === s) return;
                        this.send(e.from, "messagingInternal_response", {
                            requestID: e.data.requestID,
                            result: s
                        })
                    } catch (s) {
                        t.warn(`[MetaPress] Error in remote request ${e.data?.name}:`, s), this.send(e.from, "messagingInternal_response", {
                            requestID: e.data.requestID,
                            error: s.message
                        })
                    } else if ("messagingInternal_response" == e.name) {
                        let s = this.pendingRequests[e.data.requestID];
                        if (!s) return;
                        clearTimeout(s.timer), delete this.pendingRequests[e.data.requestID], e.data.error ? s.promiseReject(new Error(e.data.error)) : s.promiseResolve(e.data.result)
                    }
                }
            }
        },
        8838: (e, s, n) => {
            n.d(s, {
                dI: () => r,
                j8: () => a
            });
            var t = n(25108);

            function a(e) {
                let s = null;
                return function(...n) {
                    let t = this,
                        a = s;
                    return s = async function() {
                        return await (a?.catch((() => null))), await e.apply(t, n)
                    }(), s
                }
            }

            function r(e) {
                return function(s) {
                    return async function(...n) {
                        try {
                            return await s.apply(this, n)
                        } catch (s) {
                            return e ? t.warn(e, s) : t.warn(s), null
                        }
                    }
                }
            }
        }
    }
]);