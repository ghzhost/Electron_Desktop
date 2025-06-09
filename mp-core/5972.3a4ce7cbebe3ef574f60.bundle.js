/*! For license information please see 5972.3a4ce7cbebe3ef574f60.bundle.js.LICENSE.txt */
"use strict";
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [5972], {
        74444: (e, t, n) => {
            n.d(t, {
                $s: () => I,
                BH: () => u,
                L: () => c,
                LL: () => b,
                ZR: () => m,
                aH: () => d,
                eu: () => p,
                hl: () => f,
                m9: () => E,
                ru: () => h,
                vZ: () => v,
                zI: () => g
            });
            var r = n(25108),
                a = n(34155);
            const i = function(e) {
                    const t = [];
                    let n = 0;
                    for (let r = 0; r < e.length; r++) {
                        let a = e.charCodeAt(r);
                        a < 128 ? t[n++] = a : a < 2048 ? (t[n++] = a >> 6 | 192, t[n++] = 63 & a | 128) : 55296 == (64512 & a) && r + 1 < e.length && 56320 == (64512 & e.charCodeAt(r + 1)) ? (a = 65536 + ((1023 & a) << 10) + (1023 & e.charCodeAt(++r)), t[n++] = a >> 18 | 240, t[n++] = a >> 12 & 63 | 128, t[n++] = a >> 6 & 63 | 128, t[n++] = 63 & a | 128) : (t[n++] = a >> 12 | 224, t[n++] = a >> 6 & 63 | 128, t[n++] = 63 & a | 128)
                    }
                    return t
                },
                s = {
                    byteToCharMap_: null,
                    charToByteMap_: null,
                    byteToCharMapWebSafe_: null,
                    charToByteMapWebSafe_: null,
                    ENCODED_VALS_BASE: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
                    get ENCODED_VALS() {
                        return this.ENCODED_VALS_BASE + "+/="
                    },
                    get ENCODED_VALS_WEBSAFE() {
                        return this.ENCODED_VALS_BASE + "-_."
                    },
                    HAS_NATIVE_SUPPORT: "function" == typeof atob,
                    encodeByteArray(e, t) {
                        if (!Array.isArray(e)) throw Error("encodeByteArray takes an array as a parameter");
                        this.init_();
                        const n = t ? this.byteToCharMapWebSafe_ : this.byteToCharMap_,
                            r = [];
                        for (let t = 0; t < e.length; t += 3) {
                            const a = e[t],
                                i = t + 1 < e.length,
                                s = i ? e[t + 1] : 0,
                                o = t + 2 < e.length,
                                c = o ? e[t + 2] : 0,
                                l = a >> 2,
                                d = (3 & a) << 4 | s >> 4;
                            let u = (15 & s) << 2 | c >> 6,
                                h = 63 & c;
                            o || (h = 64, i || (u = 64)), r.push(n[l], n[d], n[u], n[h])
                        }
                        return r.join("")
                    },
                    encodeString(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? btoa(e) : this.encodeByteArray(i(e), t)
                    },
                    decodeString(e, t) {
                        return this.HAS_NATIVE_SUPPORT && !t ? atob(e) : function(e) {
                            const t = [];
                            let n = 0,
                                r = 0;
                            for (; n < e.length;) {
                                const a = e[n++];
                                if (a < 128) t[r++] = String.fromCharCode(a);
                                else if (a > 191 && a < 224) {
                                    const i = e[n++];
                                    t[r++] = String.fromCharCode((31 & a) << 6 | 63 & i)
                                } else if (a > 239 && a < 365) {
                                    const i = ((7 & a) << 18 | (63 & e[n++]) << 12 | (63 & e[n++]) << 6 | 63 & e[n++]) - 65536;
                                    t[r++] = String.fromCharCode(55296 + (i >> 10)), t[r++] = String.fromCharCode(56320 + (1023 & i))
                                } else {
                                    const i = e[n++],
                                        s = e[n++];
                                    t[r++] = String.fromCharCode((15 & a) << 12 | (63 & i) << 6 | 63 & s)
                                }
                            }
                            return t.join("")
                        }(this.decodeStringToByteArray(e, t))
                    },
                    decodeStringToByteArray(e, t) {
                        this.init_();
                        const n = t ? this.charToByteMapWebSafe_ : this.charToByteMap_,
                            r = [];
                        for (let t = 0; t < e.length;) {
                            const a = n[e.charAt(t++)],
                                i = t < e.length ? n[e.charAt(t)] : 0;
                            ++t;
                            const s = t < e.length ? n[e.charAt(t)] : 64;
                            ++t;
                            const c = t < e.length ? n[e.charAt(t)] : 64;
                            if (++t, null == a || null == i || null == s || null == c) throw new o;
                            const l = a << 2 | i >> 4;
                            if (r.push(l), 64 !== s) {
                                const e = i << 4 & 240 | s >> 2;
                                if (r.push(e), 64 !== c) {
                                    const e = s << 6 & 192 | c;
                                    r.push(e)
                                }
                            }
                        }
                        return r
                    },
                    init_() {
                        if (!this.byteToCharMap_) {
                            this.byteToCharMap_ = {}, this.charToByteMap_ = {}, this.byteToCharMapWebSafe_ = {}, this.charToByteMapWebSafe_ = {};
                            for (let e = 0; e < this.ENCODED_VALS.length; e++) this.byteToCharMap_[e] = this.ENCODED_VALS.charAt(e), this.charToByteMap_[this.byteToCharMap_[e]] = e, this.byteToCharMapWebSafe_[e] = this.ENCODED_VALS_WEBSAFE.charAt(e), this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]] = e, e >= this.ENCODED_VALS_BASE.length && (this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)] = e, this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)] = e)
                        }
                    }
                };
            class o extends Error {
                constructor() {
                    super(...arguments), this.name = "DecodeBase64StringError"
                }
            }
            const c = function(e) {
                    return function(e) {
                        const t = i(e);
                        return s.encodeByteArray(t, !0)
                    }(e).replace(/\./g, "")
                },
                l = () => {
                    try {
                        return function() {
                            if ("undefined" != typeof self) return self;
                            if ("undefined" != typeof window) return window;
                            if (void 0 !== n.g) return n.g;
                            throw new Error("Unable to locate global object.")
                        }().__FIREBASE_DEFAULTS__ || (() => {
                            if (void 0 === a || void 0 === a.env) return;
                            const e = a.env.__FIREBASE_DEFAULTS__;
                            return e ? JSON.parse(e) : void 0
                        })() || (() => {
                            if ("undefined" == typeof document) return;
                            let e;
                            try {
                                e = document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)
                            } catch (e) {
                                return
                            }
                            const t = e && function(e) {
                                try {
                                    return s.decodeString(e, !0)
                                } catch (e) {
                                    r.error("base64Decode failed: ", e)
                                }
                                return null
                            }(e[1]);
                            return t && JSON.parse(t)
                        })()
                    } catch (e) {
                        return void r.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)
                    }
                },
                d = () => {
                    var e;
                    return null === (e = l()) || void 0 === e ? void 0 : e.config
                };
            class u {
                constructor() {
                    this.reject = () => {}, this.resolve = () => {}, this.promise = new Promise(((e, t) => {
                        this.resolve = e, this.reject = t
                    }))
                }
                wrapCallback(e) {
                    return (t, n) => {
                        t ? this.reject(t) : this.resolve(n), "function" == typeof e && (this.promise.catch((() => {})), 1 === e.length ? e(t) : e(t, n))
                    }
                }
            }

            function h() {
                const e = "object" == typeof chrome ? chrome.runtime : "object" == typeof browser ? browser.runtime : void 0;
                return "object" == typeof e && void 0 !== e.id
            }

            function f() {
                try {
                    return "object" == typeof indexedDB
                } catch (e) {
                    return !1
                }
            }

            function p() {
                return new Promise(((e, t) => {
                    try {
                        let n = !0;
                        const r = "validate-browser-context-for-indexeddb-analytics-module",
                            a = self.indexedDB.open(r);
                        a.onsuccess = () => {
                            a.result.close(), n || self.indexedDB.deleteDatabase(r), e(!0)
                        }, a.onupgradeneeded = () => {
                            n = !1
                        }, a.onerror = () => {
                            var e;
                            t((null === (e = a.error) || void 0 === e ? void 0 : e.message) || "")
                        }
                    } catch (e) {
                        t(e)
                    }
                }))
            }

            function g() {
                return !("undefined" == typeof navigator || !navigator.cookieEnabled)
            }
            class m extends Error {
                constructor(e, t, n) {
                    super(t), this.code = e, this.customData = n, this.name = "FirebaseError", Object.setPrototypeOf(this, m.prototype), Error.captureStackTrace && Error.captureStackTrace(this, b.prototype.create)
                }
            }
            class b {
                constructor(e, t, n) {
                    this.service = e, this.serviceName = t, this.errors = n
                }
                create(e, ...t) {
                    const n = t[0] || {},
                        r = `${this.service}/${e}`,
                        a = this.errors[e],
                        i = a ? function(e, t) {
                            return e.replace(w, ((e, n) => {
                                const r = t[n];
                                return null != r ? String(r) : `<${n}?>`
                            }))
                        }(a, n) : "Error",
                        s = `${this.serviceName}: ${i} (${r}).`;
                    return new m(r, s, n)
                }
            }
            const w = /\{\$([^}]+)}/g;

            function v(e, t) {
                if (e === t) return !0;
                const n = Object.keys(e),
                    r = Object.keys(t);
                for (const a of n) {
                    if (!r.includes(a)) return !1;
                    const n = e[a],
                        i = t[a];
                    if (y(n) && y(i)) {
                        if (!v(n, i)) return !1
                    } else if (n !== i) return !1
                }
                for (const e of r)
                    if (!n.includes(e)) return !1;
                return !0
            }

            function y(e) {
                return null !== e && "object" == typeof e
            }

            function I(e, t = 1e3, n = 2) {
                const r = t * Math.pow(n, e),
                    a = Math.round(.5 * r * (Math.random() - .5) * 2);
                return Math.min(144e5, r + a)
            }

            function E(e) {
                return e && e._delegate ? e._delegate : e
            }
        },
        10389: (e, t, n) => {
            n.d(t, {
                qX: () => O,
                Xd: () => k,
                Mq: () => j,
                ZF: () => $,
                KN: () => P
            });
            var r = n(8463),
                a = n(53333),
                i = n(74444);
            let s, o;
            const c = new WeakMap,
                l = new WeakMap,
                d = new WeakMap,
                u = new WeakMap,
                h = new WeakMap;
            let f = {
                get(e, t, n) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t) return l.get(e);
                        if ("objectStoreNames" === t) return e.objectStoreNames || d.get(e);
                        if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                    }
                    return g(e[t])
                },
                set: (e, t, n) => (e[t] = n, !0),
                has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            };

            function p(e) {
                return "function" == typeof e ? (t = e) !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (o || (o = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                    return t.apply(m(this), e), g(c.get(this))
                } : function(...e) {
                    return g(t.apply(m(this), e))
                } : function(e, ...n) {
                    const r = t.call(m(this), e, ...n);
                    return d.set(r, e.sort ? e.sort() : [e]), g(r)
                } : (e instanceof IDBTransaction && function(e) {
                    if (l.has(e)) return;
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("complete", a), e.removeEventListener("error", i), e.removeEventListener("abort", i)
                            },
                            a = () => {
                                t(), r()
                            },
                            i = () => {
                                n(e.error || new DOMException("AbortError", "AbortError")), r()
                            };
                        e.addEventListener("complete", a), e.addEventListener("error", i), e.addEventListener("abort", i)
                    }));
                    l.set(e, t)
                }(e), n = e, (s || (s = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => n instanceof e)) ? new Proxy(e, f) : e);
                var t, n
            }

            function g(e) {
                if (e instanceof IDBRequest) return function(e) {
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("success", a), e.removeEventListener("error", i)
                            },
                            a = () => {
                                t(g(e.result)), r()
                            },
                            i = () => {
                                n(e.error), r()
                            };
                        e.addEventListener("success", a), e.addEventListener("error", i)
                    }));
                    return t.then((t => {
                        t instanceof IDBCursor && c.set(t, e)
                    })).catch((() => {})), h.set(t, e), t
                }(e);
                if (u.has(e)) return u.get(e);
                const t = p(e);
                return t !== e && (u.set(e, t), h.set(t, e)), t
            }
            const m = e => h.get(e),
                b = ["get", "getKey", "getAll", "getAllKeys", "count"],
                w = ["put", "add", "delete", "clear"],
                v = new Map;

            function y(e, t) {
                if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
                if (v.get(t)) return v.get(t);
                const n = t.replace(/FromIndex$/, ""),
                    r = t !== n,
                    a = w.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !a && !b.includes(n)) return;
                const i = async function(e, ...t) {
                    const i = this.transaction(e, a ? "readwrite" : "readonly");
                    let s = i.store;
                    return r && (s = s.index(t.shift())), (await Promise.all([s[n](...t), a && i.done]))[0]
                };
                return v.set(t, i), i
            }
            var I;
            I = f, f = {
                ...I,
                get: (e, t, n) => y(e, t) || I.get(e, t, n),
                has: (e, t) => !!y(e, t) || I.has(e, t)
            };
            class E {
                constructor(e) {
                    this.container = e
                }
                getPlatformInfoString() {
                    return this.container.getProviders().map((e => {
                        if (function(e) {
                                const t = e.getComponent();
                                return "VERSION" === (null == t ? void 0 : t.type)
                            }(e)) {
                            const t = e.getImmediate();
                            return `${t.library}/${t.version}`
                        }
                        return null
                    })).filter((e => e)).join(" ")
                }
            }
            const D = "@firebase/app",
                S = "0.9.23",
                C = new a.Yd("@firebase/app"),
                _ = "[DEFAULT]",
                A = {
                    [D]: "fire-core",
                    "@firebase/app-compat": "fire-core-compat",
                    "@firebase/analytics": "fire-analytics",
                    "@firebase/analytics-compat": "fire-analytics-compat",
                    "@firebase/app-check": "fire-app-check",
                    "@firebase/app-check-compat": "fire-app-check-compat",
                    "@firebase/auth": "fire-auth",
                    "@firebase/auth-compat": "fire-auth-compat",
                    "@firebase/database": "fire-rtdb",
                    "@firebase/database-compat": "fire-rtdb-compat",
                    "@firebase/functions": "fire-fn",
                    "@firebase/functions-compat": "fire-fn-compat",
                    "@firebase/installations": "fire-iid",
                    "@firebase/installations-compat": "fire-iid-compat",
                    "@firebase/messaging": "fire-fcm",
                    "@firebase/messaging-compat": "fire-fcm-compat",
                    "@firebase/performance": "fire-perf",
                    "@firebase/performance-compat": "fire-perf-compat",
                    "@firebase/remote-config": "fire-rc",
                    "@firebase/remote-config-compat": "fire-rc-compat",
                    "@firebase/storage": "fire-gcs",
                    "@firebase/storage-compat": "fire-gcs-compat",
                    "@firebase/firestore": "fire-fst",
                    "@firebase/firestore-compat": "fire-fst-compat",
                    "fire-js": "fire-js",
                    firebase: "fire-js-all"
                },
                T = new Map,
                L = new Map;

            function B(e, t) {
                try {
                    e.container.addComponent(t)
                } catch (n) {
                    C.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`, n)
                }
            }

            function k(e) {
                const t = e.name;
                if (L.has(t)) return C.debug(`There were multiple attempts to register component ${t}.`), !1;
                L.set(t, e);
                for (const t of T.values()) B(t, e);
                return !0
            }

            function O(e, t) {
                const n = e.container.getProvider("heartbeat").getImmediate({
                    optional: !0
                });
                return n && n.triggerHeartbeat(), e.container.getProvider(t)
            }
            const M = new i.LL("app", "Firebase", {
                "no-app": "No Firebase App '{$appName}' has been created - call initializeApp() first",
                "bad-app-name": "Illegal App name: '{$appName}",
                "duplicate-app": "Firebase App named '{$appName}' already exists with different options or config",
                "app-deleted": "Firebase App named '{$appName}' already deleted",
                "no-options": "Need to provide options, when not being deployed to hosting via source.",
                "invalid-app-argument": "firebase.{$appName}() takes either no argument or a Firebase App instance.",
                "invalid-log-argument": "First argument to `onLog` must be null or a function.",
                "idb-open": "Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-get": "Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-set": "Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",
                "idb-delete": "Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."
            });
            class N {
                constructor(e, t, n) {
                    this._isDeleted = !1, this._options = Object.assign({}, e), this._config = Object.assign({}, t), this._name = t.name, this._automaticDataCollectionEnabled = t.automaticDataCollectionEnabled, this._container = n, this.container.addComponent(new r.wA("app", (() => this), "PUBLIC"))
                }
                get automaticDataCollectionEnabled() {
                    return this.checkDestroyed(), this._automaticDataCollectionEnabled
                }
                set automaticDataCollectionEnabled(e) {
                    this.checkDestroyed(), this._automaticDataCollectionEnabled = e
                }
                get name() {
                    return this.checkDestroyed(), this._name
                }
                get options() {
                    return this.checkDestroyed(), this._options
                }
                get config() {
                    return this.checkDestroyed(), this._config
                }
                get container() {
                    return this._container
                }
                get isDeleted() {
                    return this._isDeleted
                }
                set isDeleted(e) {
                    this._isDeleted = e
                }
                checkDestroyed() {
                    if (this.isDeleted) throw M.create("app-deleted", {
                        appName: this._name
                    })
                }
            }

            function $(e, t = {}) {
                let n = e;
                "object" != typeof t && (t = {
                    name: t
                });
                const a = Object.assign({
                        name: _,
                        automaticDataCollectionEnabled: !1
                    }, t),
                    s = a.name;
                if ("string" != typeof s || !s) throw M.create("bad-app-name", {
                    appName: String(s)
                });
                if (n || (n = (0, i.aH)()), !n) throw M.create("no-options");
                const o = T.get(s);
                if (o) {
                    if ((0, i.vZ)(n, o.options) && (0, i.vZ)(a, o.config)) return o;
                    throw M.create("duplicate-app", {
                        appName: s
                    })
                }
                const c = new r.H0(s);
                for (const e of L.values()) c.addComponent(e);
                const l = new N(n, a, c);
                return T.set(s, l), l
            }

            function j(e = "[DEFAULT]") {
                const t = T.get(e);
                if (!t && e === _ && (0, i.aH)()) return $();
                if (!t) throw M.create("no-app", {
                    appName: e
                });
                return t
            }

            function P(e, t, n) {
                var a;
                let i = null !== (a = A[e]) && void 0 !== a ? a : e;
                n && (i += `-${n}`);
                const s = i.match(/\s|\//),
                    o = t.match(/\s|\//);
                if (s || o) {
                    const e = [`Unable to register library "${i}" with version "${t}":`];
                    return s && e.push(`library name "${i}" contains illegal characters (whitespace or "/")`), s && o && e.push("and"), o && e.push(`version name "${t}" contains illegal characters (whitespace or "/")`), void C.warn(e.join(" "))
                }
                k(new r.wA(`${i}-version`, (() => ({
                    library: i,
                    version: t
                })), "VERSION"))
            }
            const F = "firebase-heartbeat-store";
            let R = null;

            function H() {
                return R || (R = function(e, t, {
                    blocked: n,
                    upgrade: r,
                    blocking: a,
                    terminated: i
                } = {}) {
                    const s = indexedDB.open(e, t),
                        o = g(s);
                    return r && s.addEventListener("upgradeneeded", (e => {
                        r(g(s.result), e.oldVersion, e.newVersion, g(s.transaction), e)
                    })), n && s.addEventListener("blocked", (e => n(e.oldVersion, e.newVersion, e))), o.then((e => {
                        i && e.addEventListener("close", (() => i())), a && e.addEventListener("versionchange", (e => a(e.oldVersion, e.newVersion, e)))
                    })).catch((() => {})), o
                }("firebase-heartbeat-database", 1, {
                    upgrade: (e, t) => {
                        0 === t && e.createObjectStore(F)
                    }
                }).catch((e => {
                    throw M.create("idb-open", {
                        originalErrorMessage: e.message
                    })
                }))), R
            }
            async function x(e, t) {
                try {
                    const n = (await H()).transaction(F, "readwrite"),
                        r = n.objectStore(F);
                    await r.put(t, z(e)), await n.done
                } catch (e) {
                    if (e instanceof i.ZR) C.warn(e.message);
                    else {
                        const t = M.create("idb-set", {
                            originalErrorMessage: null == e ? void 0 : e.message
                        });
                        C.warn(t.message)
                    }
                }
            }

            function z(e) {
                return `${e.name}!${e.options.appId}`
            }
            class V {
                constructor(e) {
                    this.container = e, this._heartbeatsCache = null;
                    const t = this.container.getProvider("app").getImmediate();
                    this._storage = new q(t), this._heartbeatsCachePromise = this._storage.read().then((e => (this._heartbeatsCache = e, e)))
                }
                async triggerHeartbeat() {
                    var e;
                    const t = this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),
                        n = U();
                    if (null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) && (this._heartbeatsCache = await this._heartbeatsCachePromise), this._heartbeatsCache.lastSentHeartbeatDate !== n && !this._heartbeatsCache.heartbeats.some((e => e.date === n))) return this._heartbeatsCache.heartbeats.push({
                        date: n,
                        agent: t
                    }), this._heartbeatsCache.heartbeats = this._heartbeatsCache.heartbeats.filter((e => {
                        const t = new Date(e.date).valueOf();
                        return Date.now() - t <= 2592e6
                    })), this._storage.overwrite(this._heartbeatsCache)
                }
                async getHeartbeatsHeader() {
                    var e;
                    if (null === this._heartbeatsCache && await this._heartbeatsCachePromise, null == (null === (e = this._heartbeatsCache) || void 0 === e ? void 0 : e.heartbeats) || 0 === this._heartbeatsCache.heartbeats.length) return "";
                    const t = U(),
                        {
                            heartbeatsToSend: n,
                            unsentEntries: r
                        } = function(e, t = 1024) {
                            const n = [];
                            let r = e.slice();
                            for (const a of e) {
                                const e = n.find((e => e.agent === a.agent));
                                if (e) {
                                    if (e.dates.push(a.date), W(n) > t) {
                                        e.dates.pop();
                                        break
                                    }
                                } else if (n.push({
                                        agent: a.agent,
                                        dates: [a.date]
                                    }), W(n) > t) {
                                    n.pop();
                                    break
                                }
                                r = r.slice(1)
                            }
                            return {
                                heartbeatsToSend: n,
                                unsentEntries: r
                            }
                        }(this._heartbeatsCache.heartbeats),
                        a = (0, i.L)(JSON.stringify({
                            version: 2,
                            heartbeats: n
                        }));
                    return this._heartbeatsCache.lastSentHeartbeatDate = t, r.length > 0 ? (this._heartbeatsCache.heartbeats = r, await this._storage.overwrite(this._heartbeatsCache)) : (this._heartbeatsCache.heartbeats = [], this._storage.overwrite(this._heartbeatsCache)), a
                }
            }

            function U() {
                return (new Date).toISOString().substring(0, 10)
            }
            class q {
                constructor(e) {
                    this.app = e, this._canUseIndexedDBPromise = this.runIndexedDBEnvironmentCheck()
                }
                async runIndexedDBEnvironmentCheck() {
                    return !!(0, i.hl)() && (0, i.eu)().then((() => !0)).catch((() => !1))
                }
                async read() {
                    return await this._canUseIndexedDBPromise && await async function(e) {
                        try {
                            const t = await H();
                            return await t.transaction(F).objectStore(F).get(z(e))
                        } catch (e) {
                            if (e instanceof i.ZR) C.warn(e.message);
                            else {
                                const t = M.create("idb-get", {
                                    originalErrorMessage: null == e ? void 0 : e.message
                                });
                                C.warn(t.message)
                            }
                        }
                    }(this.app) || {
                        heartbeats: []
                    }
                }
                async overwrite(e) {
                    var t;
                    if (await this._canUseIndexedDBPromise) {
                        const n = await this.read();
                        return x(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                            heartbeats: e.heartbeats
                        })
                    }
                }
                async add(e) {
                    var t;
                    if (await this._canUseIndexedDBPromise) {
                        const n = await this.read();
                        return x(this.app, {
                            lastSentHeartbeatDate: null !== (t = e.lastSentHeartbeatDate) && void 0 !== t ? t : n.lastSentHeartbeatDate,
                            heartbeats: [...n.heartbeats, ...e.heartbeats]
                        })
                    }
                }
            }

            function W(e) {
                return (0, i.L)(JSON.stringify({
                    version: 2,
                    heartbeats: e
                })).length
            }
            k(new r.wA("platform-logger", (e => new E(e)), "PRIVATE")), k(new r.wA("heartbeat", (e => new V(e)), "PRIVATE")), P(D, S, ""), P(D, S, "esm2017"), P("fire-js", "")
        },
        8463: (e, t, n) => {
            n.d(t, {
                H0: () => o,
                wA: () => a
            });
            var r = n(74444);
            class a {
                constructor(e, t, n) {
                    this.name = e, this.instanceFactory = t, this.type = n, this.multipleInstances = !1, this.serviceProps = {}, this.instantiationMode = "LAZY", this.onInstanceCreated = null
                }
                setInstantiationMode(e) {
                    return this.instantiationMode = e, this
                }
                setMultipleInstances(e) {
                    return this.multipleInstances = e, this
                }
                setServiceProps(e) {
                    return this.serviceProps = e, this
                }
                setInstanceCreatedCallback(e) {
                    return this.onInstanceCreated = e, this
                }
            }
            const i = "[DEFAULT]";
            class s {
                constructor(e, t) {
                    this.name = e, this.container = t, this.component = null, this.instances = new Map, this.instancesDeferred = new Map, this.instancesOptions = new Map, this.onInitCallbacks = new Map
                }
                get(e) {
                    const t = this.normalizeInstanceIdentifier(e);
                    if (!this.instancesDeferred.has(t)) {
                        const e = new r.BH;
                        if (this.instancesDeferred.set(t, e), this.isInitialized(t) || this.shouldAutoInitialize()) try {
                            const n = this.getOrInitializeService({
                                instanceIdentifier: t
                            });
                            n && e.resolve(n)
                        } catch (e) {}
                    }
                    return this.instancesDeferred.get(t).promise
                }
                getImmediate(e) {
                    var t;
                    const n = this.normalizeInstanceIdentifier(null == e ? void 0 : e.identifier),
                        r = null !== (t = null == e ? void 0 : e.optional) && void 0 !== t && t;
                    if (!this.isInitialized(n) && !this.shouldAutoInitialize()) {
                        if (r) return null;
                        throw Error(`Service ${this.name} is not available`)
                    }
                    try {
                        return this.getOrInitializeService({
                            instanceIdentifier: n
                        })
                    } catch (e) {
                        if (r) return null;
                        throw e
                    }
                }
                getComponent() {
                    return this.component
                }
                setComponent(e) {
                    if (e.name !== this.name) throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);
                    if (this.component) throw Error(`Component for ${this.name} has already been provided`);
                    if (this.component = e, this.shouldAutoInitialize()) {
                        if (function(e) {
                                return "EAGER" === e.instantiationMode
                            }(e)) try {
                            this.getOrInitializeService({
                                instanceIdentifier: i
                            })
                        } catch (e) {}
                        for (const [e, t] of this.instancesDeferred.entries()) {
                            const n = this.normalizeInstanceIdentifier(e);
                            try {
                                const e = this.getOrInitializeService({
                                    instanceIdentifier: n
                                });
                                t.resolve(e)
                            } catch (e) {}
                        }
                    }
                }
                clearInstance(e = "[DEFAULT]") {
                    this.instancesDeferred.delete(e), this.instancesOptions.delete(e), this.instances.delete(e)
                }
                async delete() {
                    const e = Array.from(this.instances.values());
                    await Promise.all([...e.filter((e => "INTERNAL" in e)).map((e => e.INTERNAL.delete())), ...e.filter((e => "_delete" in e)).map((e => e._delete()))])
                }
                isComponentSet() {
                    return null != this.component
                }
                isInitialized(e = "[DEFAULT]") {
                    return this.instances.has(e)
                }
                getOptions(e = "[DEFAULT]") {
                    return this.instancesOptions.get(e) || {}
                }
                initialize(e = {}) {
                    const {
                        options: t = {}
                    } = e, n = this.normalizeInstanceIdentifier(e.instanceIdentifier);
                    if (this.isInitialized(n)) throw Error(`${this.name}(${n}) has already been initialized`);
                    if (!this.isComponentSet()) throw Error(`Component ${this.name} has not been registered yet`);
                    const r = this.getOrInitializeService({
                        instanceIdentifier: n,
                        options: t
                    });
                    for (const [e, t] of this.instancesDeferred.entries()) n === this.normalizeInstanceIdentifier(e) && t.resolve(r);
                    return r
                }
                onInit(e, t) {
                    var n;
                    const r = this.normalizeInstanceIdentifier(t),
                        a = null !== (n = this.onInitCallbacks.get(r)) && void 0 !== n ? n : new Set;
                    a.add(e), this.onInitCallbacks.set(r, a);
                    const i = this.instances.get(r);
                    return i && e(i, r), () => {
                        a.delete(e)
                    }
                }
                invokeOnInitCallbacks(e, t) {
                    const n = this.onInitCallbacks.get(t);
                    if (n)
                        for (const r of n) try {
                            r(e, t)
                        } catch (e) {}
                }
                getOrInitializeService({
                    instanceIdentifier: e,
                    options: t = {}
                }) {
                    let n = this.instances.get(e);
                    if (!n && this.component && (n = this.component.instanceFactory(this.container, {
                            instanceIdentifier: (r = e, r === i ? void 0 : r),
                            options: t
                        }), this.instances.set(e, n), this.instancesOptions.set(e, t), this.invokeOnInitCallbacks(n, e), this.component.onInstanceCreated)) try {
                        this.component.onInstanceCreated(this.container, e, n)
                    } catch (e) {}
                    var r;
                    return n || null
                }
                normalizeInstanceIdentifier(e = "[DEFAULT]") {
                    return this.component ? this.component.multipleInstances ? e : i : e
                }
                shouldAutoInitialize() {
                    return !!this.component && "EXPLICIT" !== this.component.instantiationMode
                }
            }
            class o {
                constructor(e) {
                    this.name = e, this.providers = new Map
                }
                addComponent(e) {
                    const t = this.getProvider(e.name);
                    if (t.isComponentSet()) throw new Error(`Component ${e.name} has already been registered with ${this.name}`);
                    t.setComponent(e)
                }
                addOrOverwriteComponent(e) {
                    this.getProvider(e.name).isComponentSet() && this.providers.delete(e.name), this.addComponent(e)
                }
                getProvider(e) {
                    if (this.providers.has(e)) return this.providers.get(e);
                    const t = new s(e, this);
                    return this.providers.set(e, t), t
                }
                getProviders() {
                    return Array.from(this.providers.values())
                }
            }
        },
        53333: (e, t, n) => {
            n.d(t, {
                Yd: () => d
            });
            var r = n(25108);
            const a = [];
            var i;
            ! function(e) {
                e[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"
            }(i || (i = {}));
            const s = {
                    debug: i.DEBUG,
                    verbose: i.VERBOSE,
                    info: i.INFO,
                    warn: i.WARN,
                    error: i.ERROR,
                    silent: i.SILENT
                },
                o = i.INFO,
                c = {
                    [i.DEBUG]: "log",
                    [i.VERBOSE]: "log",
                    [i.INFO]: "info",
                    [i.WARN]: "warn",
                    [i.ERROR]: "error"
                },
                l = (e, t, ...n) => {
                    if (t < e.logLevel) return;
                    const a = (new Date).toISOString(),
                        i = c[t];
                    if (!i) throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);
                    r[i](`[${a}]  ${e.name}:`, ...n)
                };
            class d {
                constructor(e) {
                    this.name = e, this._logLevel = o, this._logHandler = l, this._userLogHandler = null, a.push(this)
                }
                get logLevel() {
                    return this._logLevel
                }
                set logLevel(e) {
                    if (!(e in i)) throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);
                    this._logLevel = e
                }
                setLogLevel(e) {
                    this._logLevel = "string" == typeof e ? s[e] : e
                }
                get logHandler() {
                    return this._logHandler
                }
                set logHandler(e) {
                    if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function");
                    this._logHandler = e
                }
                get userLogHandler() {
                    return this._userLogHandler
                }
                set userLogHandler(e) {
                    this._userLogHandler = e
                }
                debug(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.DEBUG, ...e), this._logHandler(this, i.DEBUG, ...e)
                }
                log(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.VERBOSE, ...e), this._logHandler(this, i.VERBOSE, ...e)
                }
                info(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.INFO, ...e), this._logHandler(this, i.INFO, ...e)
                }
                warn(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.WARN, ...e), this._logHandler(this, i.WARN, ...e)
                }
                error(...e) {
                    this._userLogHandler && this._userLogHandler(this, i.ERROR, ...e), this._logHandler(this, i.ERROR, ...e)
                }
            }
        },
        43897: (e, t, n) => {
            n.d(t, {
                IH: () => Ae,
                Kz: () => Te
            });
            var r = n(10389),
                a = n(53333),
                i = n(74444),
                s = n(8463);
            let o, c;
            const l = new WeakMap,
                d = new WeakMap,
                u = new WeakMap,
                h = new WeakMap,
                f = new WeakMap;
            let p = {
                get(e, t, n) {
                    if (e instanceof IDBTransaction) {
                        if ("done" === t) return d.get(e);
                        if ("objectStoreNames" === t) return e.objectStoreNames || u.get(e);
                        if ("store" === t) return n.objectStoreNames[1] ? void 0 : n.objectStore(n.objectStoreNames[0])
                    }
                    return m(e[t])
                },
                set: (e, t, n) => (e[t] = n, !0),
                has: (e, t) => e instanceof IDBTransaction && ("done" === t || "store" === t) || t in e
            };

            function g(e) {
                return "function" == typeof e ? (t = e) !== IDBDatabase.prototype.transaction || "objectStoreNames" in IDBTransaction.prototype ? (c || (c = [IDBCursor.prototype.advance, IDBCursor.prototype.continue, IDBCursor.prototype.continuePrimaryKey])).includes(t) ? function(...e) {
                    return t.apply(b(this), e), m(l.get(this))
                } : function(...e) {
                    return m(t.apply(b(this), e))
                } : function(e, ...n) {
                    const r = t.call(b(this), e, ...n);
                    return u.set(r, e.sort ? e.sort() : [e]), m(r)
                } : (e instanceof IDBTransaction && function(e) {
                    if (d.has(e)) return;
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("complete", a), e.removeEventListener("error", i), e.removeEventListener("abort", i)
                            },
                            a = () => {
                                t(), r()
                            },
                            i = () => {
                                n(e.error || new DOMException("AbortError", "AbortError")), r()
                            };
                        e.addEventListener("complete", a), e.addEventListener("error", i), e.addEventListener("abort", i)
                    }));
                    d.set(e, t)
                }(e), n = e, (o || (o = [IDBDatabase, IDBObjectStore, IDBIndex, IDBCursor, IDBTransaction])).some((e => n instanceof e)) ? new Proxy(e, p) : e);
                var t, n
            }

            function m(e) {
                if (e instanceof IDBRequest) return function(e) {
                    const t = new Promise(((t, n) => {
                        const r = () => {
                                e.removeEventListener("success", a), e.removeEventListener("error", i)
                            },
                            a = () => {
                                t(m(e.result)), r()
                            },
                            i = () => {
                                n(e.error), r()
                            };
                        e.addEventListener("success", a), e.addEventListener("error", i)
                    }));
                    return t.then((t => {
                        t instanceof IDBCursor && l.set(t, e)
                    })).catch((() => {})), f.set(t, e), t
                }(e);
                if (h.has(e)) return h.get(e);
                const t = g(e);
                return t !== e && (h.set(e, t), f.set(t, e)), t
            }
            const b = e => f.get(e),
                w = ["get", "getKey", "getAll", "getAllKeys", "count"],
                v = ["put", "add", "delete", "clear"],
                y = new Map;

            function I(e, t) {
                if (!(e instanceof IDBDatabase) || t in e || "string" != typeof t) return;
                if (y.get(t)) return y.get(t);
                const n = t.replace(/FromIndex$/, ""),
                    r = t !== n,
                    a = v.includes(n);
                if (!(n in (r ? IDBIndex : IDBObjectStore).prototype) || !a && !w.includes(n)) return;
                const i = async function(e, ...t) {
                    const i = this.transaction(e, a ? "readwrite" : "readonly");
                    let s = i.store;
                    return r && (s = s.index(t.shift())), (await Promise.all([s[n](...t), a && i.done]))[0]
                };
                return y.set(t, i), i
            }
            var E;
            E = p, p = {
                ...E,
                get: (e, t, n) => I(e, t) || E.get(e, t, n),
                has: (e, t) => !!I(e, t) || E.has(e, t)
            };
            var D = n(25108);
            const S = "@firebase/installations",
                C = "0.6.4",
                _ = "w:0.6.4",
                A = new i.LL("installations", "Installations", {
                    "missing-app-config-values": 'Missing App configuration value: "{$valueName}"',
                    "not-registered": "Firebase Installation is not registered.",
                    "installation-not-found": "Firebase Installation not found.",
                    "request-failed": '{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',
                    "app-offline": "Could not process request. Application offline.",
                    "delete-pending-registration": "Can't delete installation while there is a pending registration request."
                });

            function T(e) {
                return e instanceof i.ZR && e.code.includes("request-failed")
            }

            function L({
                projectId: e
            }) {
                return `https://firebaseinstallations.googleapis.com/v1/projects/${e}/installations`
            }

            function B(e) {
                return {
                    token: e.token,
                    requestStatus: 2,
                    expiresIn: (t = e.expiresIn, Number(t.replace("s", "000"))),
                    creationTime: Date.now()
                };
                var t
            }
            async function k(e, t) {
                const n = (await t.json()).error;
                return A.create("request-failed", {
                    requestName: e,
                    serverCode: n.code,
                    serverMessage: n.message,
                    serverStatus: n.status
                })
            }

            function O({
                apiKey: e
            }) {
                return new Headers({
                    "Content-Type": "application/json",
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }
            async function M(e) {
                const t = await e();
                return t.status >= 500 && t.status < 600 ? e() : t
            }

            function N(e) {
                return new Promise((t => {
                    setTimeout(t, e)
                }))
            }
            const $ = /^[cdef][\w-]{21}$/;

            function j() {
                try {
                    const e = new Uint8Array(17);
                    (self.crypto || self.msCrypto).getRandomValues(e), e[0] = 112 + e[0] % 16;
                    const t = function(e) {
                        return (t = e, btoa(String.fromCharCode(...t)).replace(/\+/g, "-").replace(/\//g, "_")).substr(0, 22);
                        var t
                    }(e);
                    return $.test(t) ? t : ""
                } catch (e) {
                    return ""
                }
            }

            function P(e) {
                return `${e.appName}!${e.appId}`
            }
            const F = new Map;

            function R(e, t) {
                const n = P(e);
                H(n, t),
                    function(e, t) {
                        const n = (!x && "BroadcastChannel" in self && (x = new BroadcastChannel("[Firebase] FID Change"), x.onmessage = e => {
                            H(e.data.key, e.data.fid)
                        }), x);
                        n && n.postMessage({
                            key: e,
                            fid: t
                        }), 0 === F.size && x && (x.close(), x = null)
                    }(n, t)
            }

            function H(e, t) {
                const n = F.get(e);
                if (n)
                    for (const e of n) e(t)
            }
            let x = null;
            const z = "firebase-installations-store";
            let V = null;

            function U() {
                return V || (V = function(e, t, {
                    blocked: n,
                    upgrade: r,
                    blocking: a,
                    terminated: i
                } = {}) {
                    const s = indexedDB.open(e, t),
                        o = m(s);
                    return r && s.addEventListener("upgradeneeded", (e => {
                        r(m(s.result), e.oldVersion, e.newVersion, m(s.transaction))
                    })), n && s.addEventListener("blocked", (() => n())), o.then((e => {
                        i && e.addEventListener("close", (() => i())), a && e.addEventListener("versionchange", (() => a()))
                    })).catch((() => {})), o
                }("firebase-installations-database", 1, {
                    upgrade: (e, t) => {
                        0 === t && e.createObjectStore(z)
                    }
                })), V
            }
            async function q(e, t) {
                const n = P(e),
                    r = (await U()).transaction(z, "readwrite"),
                    a = r.objectStore(z),
                    i = await a.get(n);
                return await a.put(t, n), await r.done, i && i.fid === t.fid || R(e, t.fid), t
            }
            async function W(e) {
                const t = P(e),
                    n = (await U()).transaction(z, "readwrite");
                await n.objectStore(z).delete(t), await n.done
            }
            async function K(e, t) {
                const n = P(e),
                    r = (await U()).transaction(z, "readwrite"),
                    a = r.objectStore(z),
                    i = await a.get(n),
                    s = t(i);
                return void 0 === s ? await a.delete(n) : await a.put(s, n), await r.done, !s || i && i.fid === s.fid || R(e, s.fid), s
            }
            async function Z(e) {
                let t;
                const n = await K(e.appConfig, (n => {
                    const r = function(e) {
                            return J(e || {
                                fid: j(),
                                registrationStatus: 0
                            })
                        }(n),
                        a = function(e, t) {
                            if (0 === t.registrationStatus) {
                                if (!navigator.onLine) return {
                                    installationEntry: t,
                                    registrationPromise: Promise.reject(A.create("app-offline"))
                                };
                                const n = {
                                        fid: t.fid,
                                        registrationStatus: 1,
                                        registrationTime: Date.now()
                                    },
                                    r = async function(e, t) {
                                        try {
                                            const n = await async function({
                                                appConfig: e,
                                                heartbeatServiceProvider: t
                                            }, {
                                                fid: n
                                            }) {
                                                const r = L(e),
                                                    a = O(e),
                                                    i = t.getImmediate({
                                                        optional: !0
                                                    });
                                                if (i) {
                                                    const e = await i.getHeartbeatsHeader();
                                                    e && a.append("x-firebase-client", e)
                                                }
                                                const s = {
                                                        fid: n,
                                                        authVersion: "FIS_v2",
                                                        appId: e.appId,
                                                        sdkVersion: _
                                                    },
                                                    o = {
                                                        method: "POST",
                                                        headers: a,
                                                        body: JSON.stringify(s)
                                                    },
                                                    c = await M((() => fetch(r, o)));
                                                if (c.ok) {
                                                    const e = await c.json();
                                                    return {
                                                        fid: e.fid || n,
                                                        registrationStatus: 2,
                                                        refreshToken: e.refreshToken,
                                                        authToken: B(e.authToken)
                                                    }
                                                }
                                                throw await k("Create Installation", c)
                                            }(e, t);
                                            return q(e.appConfig, n)
                                        } catch (n) {
                                            throw T(n) && 409 === n.customData.serverCode ? await W(e.appConfig) : await q(e.appConfig, {
                                                fid: t.fid,
                                                registrationStatus: 0
                                            }), n
                                        }
                                    }(e, n);
                                return {
                                    installationEntry: n,
                                    registrationPromise: r
                                }
                            }
                            return 1 === t.registrationStatus ? {
                                installationEntry: t,
                                registrationPromise: G(e)
                            } : {
                                installationEntry: t
                            }
                        }(e, r);
                    return t = a.registrationPromise, a.installationEntry
                }));
                return "" === n.fid ? {
                    installationEntry: await t
                } : {
                    installationEntry: n,
                    registrationPromise: t
                }
            }
            async function G(e) {
                let t = await X(e.appConfig);
                for (; 1 === t.registrationStatus;) await N(100), t = await X(e.appConfig);
                if (0 === t.registrationStatus) {
                    const {
                        installationEntry: t,
                        registrationPromise: n
                    } = await Z(e);
                    return n || t
                }
                return t
            }

            function X(e) {
                return K(e, (e => {
                    if (!e) throw A.create("installation-not-found");
                    return J(e)
                }))
            }

            function J(e) {
                return 1 === (t = e).registrationStatus && t.registrationTime + 1e4 < Date.now() ? {
                    fid: e.fid,
                    registrationStatus: 0
                } : e;
                var t
            }
            async function Y({
                appConfig: e,
                heartbeatServiceProvider: t
            }, n) {
                const r = function(e, {
                        fid: t
                    }) {
                        return `${L(e)}/${t}/authTokens:generate`
                    }(e, n),
                    a = function(e, {
                        refreshToken: t
                    }) {
                        const n = O(e);
                        return n.append("Authorization", function(e) {
                            return `FIS_v2 ${e}`
                        }(t)), n
                    }(e, n),
                    i = t.getImmediate({
                        optional: !0
                    });
                if (i) {
                    const e = await i.getHeartbeatsHeader();
                    e && a.append("x-firebase-client", e)
                }
                const s = {
                        installation: {
                            sdkVersion: _,
                            appId: e.appId
                        }
                    },
                    o = {
                        method: "POST",
                        headers: a,
                        body: JSON.stringify(s)
                    },
                    c = await M((() => fetch(r, o)));
                if (c.ok) return B(await c.json());
                throw await k("Generate Auth Token", c)
            }
            async function Q(e, t = !1) {
                let n;
                const r = await K(e.appConfig, (r => {
                    if (!te(r)) throw A.create("not-registered");
                    const a = r.authToken;
                    if (!t && (2 === (i = a).requestStatus && ! function(e) {
                            const t = Date.now();
                            return t < e.creationTime || e.creationTime + e.expiresIn < t + 36e5
                        }(i))) return r;
                    var i;
                    if (1 === a.requestStatus) return n = async function(e, t) {
                        let n = await ee(e.appConfig);
                        for (; 1 === n.authToken.requestStatus;) await N(100), n = await ee(e.appConfig);
                        const r = n.authToken;
                        return 0 === r.requestStatus ? Q(e, t) : r
                    }(e, t), r;
                    {
                        if (!navigator.onLine) throw A.create("app-offline");
                        const t = function(e) {
                            const t = {
                                requestStatus: 1,
                                requestTime: Date.now()
                            };
                            return Object.assign(Object.assign({}, e), {
                                authToken: t
                            })
                        }(r);
                        return n = async function(e, t) {
                            try {
                                const n = await Y(e, t),
                                    r = Object.assign(Object.assign({}, t), {
                                        authToken: n
                                    });
                                return await q(e.appConfig, r), n
                            } catch (n) {
                                if (!T(n) || 401 !== n.customData.serverCode && 404 !== n.customData.serverCode) {
                                    const n = Object.assign(Object.assign({}, t), {
                                        authToken: {
                                            requestStatus: 0
                                        }
                                    });
                                    await q(e.appConfig, n)
                                } else await W(e.appConfig);
                                throw n
                            }
                        }(e, t), t
                    }
                }));
                return n ? await n : r.authToken
            }

            function ee(e) {
                return K(e, (e => {
                    if (!te(e)) throw A.create("not-registered");
                    return 1 === (t = e.authToken).requestStatus && t.requestTime + 1e4 < Date.now() ? Object.assign(Object.assign({}, e), {
                        authToken: {
                            requestStatus: 0
                        }
                    }) : e;
                    var t
                }))
            }

            function te(e) {
                return void 0 !== e && 2 === e.registrationStatus
            }

            function ne(e) {
                return A.create("missing-app-config-values", {
                    valueName: e
                })
            }
            const re = "installations";
            (0, r.Xd)(new s.wA(re, (e => {
                const t = e.getProvider("app").getImmediate(),
                    n = function(e) {
                        if (!e || !e.options) throw ne("App Configuration");
                        if (!e.name) throw ne("App Name");
                        const t = ["projectId", "apiKey", "appId"];
                        for (const n of t)
                            if (!e.options[n]) throw ne(n);
                        return {
                            appName: e.name,
                            projectId: e.options.projectId,
                            apiKey: e.options.apiKey,
                            appId: e.options.appId
                        }
                    }(t);
                return {
                    app: t,
                    appConfig: n,
                    heartbeatServiceProvider: (0, r.qX)(t, "heartbeat"),
                    _delete: () => Promise.resolve()
                }
            }), "PUBLIC")), (0, r.Xd)(new s.wA("installations-internal", (e => {
                const t = e.getProvider("app").getImmediate(),
                    n = (0, r.qX)(t, re).getImmediate();
                return {
                    getId: () => async function(e) {
                        const t = e,
                            {
                                installationEntry: n,
                                registrationPromise: r
                            } = await Z(t);
                        return r ? r.catch(D.error) : Q(t).catch(D.error), n.fid
                    }(n),
                    getToken: e => async function(e, t = !1) {
                        const n = e;
                        return await async function(e) {
                            const {
                                registrationPromise: t
                            } = await Z(e);
                            t && await t
                        }(n), (await Q(n, t)).token
                    }(n, e)
                }
            }), "PRIVATE")), (0, r.KN)(S, C), (0, r.KN)(S, C, "esm2017");
            const ae = "analytics",
                ie = "https://www.googletagmanager.com/gtag/js",
                se = new a.Yd("@firebase/analytics"),
                oe = new i.LL("analytics", "Analytics", {
                    "already-exists": "A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",
                    "already-initialized": "initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",
                    "already-initialized-settings": "Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",
                    "interop-component-reg-failed": "Firebase Analytics Interop Component failed to instantiate: {$reason}",
                    "invalid-analytics-context": "Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
                    "indexeddb-unavailable": "IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",
                    "fetch-throttle": "The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",
                    "config-fetch-failed": "Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",
                    "no-api-key": 'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',
                    "no-app-id": 'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',
                    "no-client-id": 'The "client_id" field is empty.',
                    "invalid-gtag-resource": "Trusted Types detected an invalid gtag resource: {$gtagURL}."
                });

            function ce(e) {
                if (!e.startsWith(ie)) {
                    const t = oe.create("invalid-gtag-resource", {
                        gtagURL: e
                    });
                    return se.warn(t.message), ""
                }
                return e
            }

            function le(e) {
                return Promise.all(e.map((e => e.catch((e => e)))))
            }
            const de = new class {
                constructor(e = {}, t = 1e3) {
                    this.throttleMetadata = e, this.intervalMillis = t
                }
                getThrottleMetadata(e) {
                    return this.throttleMetadata[e]
                }
                setThrottleMetadata(e, t) {
                    this.throttleMetadata[e] = t
                }
                deleteThrottleMetadata(e) {
                    delete this.throttleMetadata[e]
                }
            };

            function ue(e) {
                return new Headers({
                    Accept: "application/json",
                    "x-goog-api-key": e
                })
            }
            async function he(e, t = de, n) {
                const {
                    appId: r,
                    apiKey: a,
                    measurementId: i
                } = e.options;
                if (!r) throw oe.create("no-app-id");
                if (!a) {
                    if (i) return {
                        measurementId: i,
                        appId: r
                    };
                    throw oe.create("no-api-key")
                }
                const s = t.getThrottleMetadata(r) || {
                        backoffCount: 0,
                        throttleEndTimeMillis: Date.now()
                    },
                    o = new pe;
                return setTimeout((async () => {
                    o.abort()
                }), void 0 !== n ? n : 6e4), fe({
                    appId: r,
                    apiKey: a,
                    measurementId: i
                }, s, o, t)
            }
            async function fe(e, {
                throttleEndTimeMillis: t,
                backoffCount: n
            }, r, a = de) {
                var s;
                const {
                    appId: o,
                    measurementId: c
                } = e;
                try {
                    await
                    function(e, t) {
                        return new Promise(((n, r) => {
                            const a = Math.max(t - Date.now(), 0),
                                i = setTimeout(n, a);
                            e.addEventListener((() => {
                                clearTimeout(i), r(oe.create("fetch-throttle", {
                                    throttleEndTimeMillis: t
                                }))
                            }))
                        }))
                    }(r, t)
                } catch (e) {
                    if (c) return se.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==e?void 0:e.message}]`), {
                        appId: o,
                        measurementId: c
                    };
                    throw e
                }
                try {
                    const t = await async function(e) {
                        var t;
                        const {
                            appId: n,
                            apiKey: r
                        } = e, a = {
                            method: "GET",
                            headers: ue(r)
                        }, i = "https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig".replace("{app-id}", n), s = await fetch(i, a);
                        if (200 !== s.status && 304 !== s.status) {
                            let e = "";
                            try {
                                const n = await s.json();
                                (null === (t = n.error) || void 0 === t ? void 0 : t.message) && (e = n.error.message)
                            } catch (e) {}
                            throw oe.create("config-fetch-failed", {
                                httpStatus: s.status,
                                responseMessage: e
                            })
                        }
                        return s.json()
                    }(e);
                    return a.deleteThrottleMetadata(o), t
                } catch (t) {
                    const l = t;
                    if (! function(e) {
                            if (!(e instanceof i.ZR && e.customData)) return !1;
                            const t = Number(e.customData.httpStatus);
                            return 429 === t || 500 === t || 503 === t || 504 === t
                        }(l)) {
                        if (a.deleteThrottleMetadata(o), c) return se.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null==l?void 0:l.message}]`), {
                            appId: o,
                            measurementId: c
                        };
                        throw t
                    }
                    const d = 503 === Number(null === (s = null == l ? void 0 : l.customData) || void 0 === s ? void 0 : s.httpStatus) ? (0, i.$s)(n, a.intervalMillis, 30) : (0, i.$s)(n, a.intervalMillis),
                        u = {
                            throttleEndTimeMillis: Date.now() + d,
                            backoffCount: n + 1
                        };
                    return a.setThrottleMetadata(o, u), se.debug(`Calling attemptFetch again in ${d} millis`), fe(e, u, r, a)
                }
            }
            class pe {
                constructor() {
                    this.listeners = []
                }
                addEventListener(e) {
                    this.listeners.push(e)
                }
                abort() {
                    this.listeners.forEach((e => e()))
                }
            }
            let ge, me;
            async function be(e, t, n, r, a, s, o) {
                var c;
                const l = he(e);
                l.then((t => {
                    n[t.measurementId] = t.appId, e.options.measurementId && t.measurementId !== e.options.measurementId && se.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)
                })).catch((e => se.error(e))), t.push(l);
                const d = async function() {
                    if (!(0, i.hl)()) return se.warn(oe.create("indexeddb-unavailable", {
                        errorInfo: "IndexedDB is not available in this environment."
                    }).message), !1;
                    try {
                        await (0, i.eu)()
                    } catch (e) {
                        return se.warn(oe.create("indexeddb-unavailable", {
                            errorInfo: null == e ? void 0 : e.toString()
                        }).message), !1
                    }
                    return !0
                }().then((e => e ? r.getId() : void 0)), [u, h] = await Promise.all([l, d]);
                (function(e) {
                    const t = window.document.getElementsByTagName("script");
                    for (const n of Object.values(t))
                        if (n.src && n.src.includes(ie) && n.src.includes(e)) return n;
                    return null
                })(s) || function(e, t) {
                    const n = function(e, t) {
                            let n;
                            return window.trustedTypes && (n = window.trustedTypes.createPolicy("firebase-js-sdk-policy", t)), n
                        }(0, {
                            createScriptURL: ce
                        }),
                        r = document.createElement("script"),
                        a = `${ie}?l=${e}&id=${t}`;
                    r.src = n ? null == n ? void 0 : n.createScriptURL(a) : a, r.async = !0, document.head.appendChild(r)
                }(s, u.measurementId), me && (a("consent", "default", me), me = void 0), a("js", new Date);
                const f = null !== (c = null == o ? void 0 : o.config) && void 0 !== c ? c : {};
                return f.origin = "firebase", f.update = !0, null != h && (f.firebase_id = h), a("config", u.measurementId, f), ge && (a("set", ge), ge = void 0), u.measurementId
            }
            class we {
                constructor(e) {
                    this.app = e
                }
                _delete() {
                    return delete ve[this.app.options.appId], Promise.resolve()
                }
            }
            let ve = {},
                ye = [];
            const Ie = {};
            let Ee, De, Se = "dataLayer",
                Ce = !1;

            function _e(e, t, n) {
                ! function() {
                    const e = [];
                    if ((0, i.ru)() && e.push("This is a browser extension environment."), (0, i.zI)() || e.push("Cookies are not available."), e.length > 0) {
                        const t = e.map(((e, t) => `(${t+1}) ${e}`)).join(" "),
                            n = oe.create("invalid-analytics-context", {
                                errorInfo: t
                            });
                        se.warn(n.message)
                    }
                }();
                const r = e.options.appId;
                if (!r) throw oe.create("no-app-id");
                if (!e.options.apiKey) {
                    if (!e.options.measurementId) throw oe.create("no-api-key");
                    se.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)
                }
                if (null != ve[r]) throw oe.create("already-exists", {
                    id: r
                });
                if (!Ce) {
                    ! function(e) {
                        let t = [];
                        Array.isArray(window.dataLayer) ? t = window.dataLayer : window.dataLayer = t
                    }();
                    const {
                        wrappedGtag: e,
                        gtagCore: t
                    } = function(e, t, n, r, a) {
                        let i = function(...e) {
                            window.dataLayer.push(arguments)
                        };
                        return window.gtag && "function" == typeof window.gtag && (i = window.gtag), window.gtag = function(e, t, n, r) {
                            return async function(a, ...i) {
                                try {
                                    if ("event" === a) {
                                        const [r, a] = i;
                                        await async function(e, t, n, r, a) {
                                            try {
                                                let i = [];
                                                if (a && a.send_to) {
                                                    let e = a.send_to;
                                                    Array.isArray(e) || (e = [e]);
                                                    const r = await le(n);
                                                    for (const n of e) {
                                                        const e = r.find((e => e.measurementId === n)),
                                                            a = e && t[e.appId];
                                                        if (!a) {
                                                            i = [];
                                                            break
                                                        }
                                                        i.push(a)
                                                    }
                                                }
                                                0 === i.length && (i = Object.values(t)), await Promise.all(i), e("event", r, a || {})
                                            } catch (e) {
                                                se.error(e)
                                            }
                                        }(e, t, n, r, a)
                                    } else if ("config" === a) {
                                        const [a, s] = i;
                                        await async function(e, t, n, r, a, i) {
                                            const s = r[a];
                                            try {
                                                if (s) await t[s];
                                                else {
                                                    const e = (await le(n)).find((e => e.measurementId === a));
                                                    e && await t[e.appId]
                                                }
                                            } catch (e) {
                                                se.error(e)
                                            }
                                            e("config", a, i)
                                        }(e, t, n, r, a, s)
                                    } else if ("consent" === a) {
                                        const [t] = i;
                                        e("consent", "update", t)
                                    } else if ("get" === a) {
                                        const [t, n, r] = i;
                                        e("get", t, n, r)
                                    } else if ("set" === a) {
                                        const [t] = i;
                                        e("set", t)
                                    } else e(a, ...i)
                                } catch (e) {
                                    se.error(e)
                                }
                            }
                        }(i, e, t, n), {
                            gtagCore: i,
                            wrappedGtag: window.gtag
                        }
                    }(ve, ye, Ie);
                    De = e, Ee = t, Ce = !0
                }
                return ve[r] = be(e, ye, Ie, t, Ee, Se, n), new we(e)
            }

            function Ae(e = (0, r.Mq)()) {
                e = (0, i.m9)(e);
                const t = (0, r.qX)(e, ae);
                return t.isInitialized() ? t.getImmediate() : function(e, t = {}) {
                    const n = (0, r.qX)(e, ae);
                    if (n.isInitialized()) {
                        const e = n.getImmediate();
                        if ((0, i.vZ)(t, n.getOptions())) return e;
                        throw oe.create("already-initialized")
                    }
                    return n.initialize({
                        options: t
                    })
                }(e)
            }

            function Te(e, t, n, r) {
                e = (0, i.m9)(e), async function(e, t, n, r, a) {
                    if (a && a.global) e("event", n, r);
                    else {
                        const a = await t;
                        e("event", n, Object.assign(Object.assign({}, r), {
                            send_to: a
                        }))
                    }
                }(De, ve[e.app.options.appId], t, n, r).catch((e => se.error(e)))
            }
            const Le = "@firebase/analytics",
                Be = "0.10.0";
            (0, r.Xd)(new s.wA(ae, ((e, {
                options: t
            }) => _e(e.getProvider("app").getImmediate(), e.getProvider("installations-internal").getImmediate(), t)), "PUBLIC")), (0, r.Xd)(new s.wA("analytics-internal", (function(e) {
                try {
                    const t = e.getProvider(ae).getImmediate();
                    return {
                        logEvent: (e, n, r) => Te(t, e, n, r)
                    }
                } catch (e) {
                    throw oe.create("interop-component-reg-failed", {
                        reason: e
                    })
                }
            }), "PRIVATE")), (0, r.KN)(Le, Be), (0, r.KN)(Le, Be, "esm2017")
        },
        83977: (e, t, n) => {
            n.d(t, {
                ZF: () => r.ZF
            });
            var r = n(10389);
            (0, r.KN)("firebase", "10.6.0", "app")
        }
    }
]);