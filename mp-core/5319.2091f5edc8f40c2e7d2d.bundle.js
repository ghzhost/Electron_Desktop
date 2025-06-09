/*! For license information please see 5319.2091f5edc8f40c2e7d2d.bundle.js.LICENSE.txt */
(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [5319], {
        86239: (e, t, a) => {
            "use strict";
            var s = a(65081);

            function r() {
                this.argTypes = [], this.shimArgs = [], this.arrayArgs = [], this.arrayBlockIndices = [], this.scalarArgs = [], this.offsetArgs = [], this.offsetArgIndex = [], this.indexArgs = [], this.shapeArgs = [], this.funcName = "", this.pre = null, this.body = null, this.post = null, this.debug = !1
            }
            e.exports = function(e) {
                var t = new r;
                t.pre = e.pre, t.body = e.body, t.post = e.post;
                var a = e.args.slice(0);
                t.argTypes = a;
                for (var n = 0; n < a.length; ++n) {
                    var i = a[n];
                    if ("array" === i || "object" == typeof i && i.blockIndices) {
                        if (t.argTypes[n] = "array", t.arrayArgs.push(n), t.arrayBlockIndices.push(i.blockIndices ? i.blockIndices : 0), t.shimArgs.push("array" + n), n < t.pre.args.length && t.pre.args[n].count > 0) throw new Error("cwise: pre() block may not reference array args");
                        if (n < t.post.args.length && t.post.args[n].count > 0) throw new Error("cwise: post() block may not reference array args")
                    } else if ("scalar" === i) t.scalarArgs.push(n), t.shimArgs.push("scalar" + n);
                    else if ("index" === i) {
                        if (t.indexArgs.push(n), n < t.pre.args.length && t.pre.args[n].count > 0) throw new Error("cwise: pre() block may not reference array index");
                        if (n < t.body.args.length && t.body.args[n].lvalue) throw new Error("cwise: body() block may not write to array index");
                        if (n < t.post.args.length && t.post.args[n].count > 0) throw new Error("cwise: post() block may not reference array index")
                    } else if ("shape" === i) {
                        if (t.shapeArgs.push(n), n < t.pre.args.length && t.pre.args[n].lvalue) throw new Error("cwise: pre() block may not write to array shape");
                        if (n < t.body.args.length && t.body.args[n].lvalue) throw new Error("cwise: body() block may not write to array shape");
                        if (n < t.post.args.length && t.post.args[n].lvalue) throw new Error("cwise: post() block may not write to array shape")
                    } else {
                        if ("object" != typeof i || !i.offset) throw new Error("cwise: Unknown argument type " + a[n]);
                        t.argTypes[n] = "offset", t.offsetArgs.push({
                            array: i.array,
                            offset: i.offset
                        }), t.offsetArgIndex.push(n)
                    }
                }
                if (t.arrayArgs.length <= 0) throw new Error("cwise: No array arguments specified");
                if (t.pre.args.length > a.length) throw new Error("cwise: Too many arguments in pre() block");
                if (t.body.args.length > a.length) throw new Error("cwise: Too many arguments in body() block");
                if (t.post.args.length > a.length) throw new Error("cwise: Too many arguments in post() block");
                return t.debug = !!e.printCode || !!e.debug, t.funcName = e.funcName || "cwise", t.blockSize = e.blockSize || 64, s(t)
            }
        },
        1984: (e, t, a) => {
            "use strict";
            var s = a(25108),
                r = a(38706);

            function n(e, t, a) {
                var s, r, n = e.length,
                    i = t.arrayArgs.length,
                    o = t.indexArgs.length > 0,
                    c = [],
                    b = [],
                    d = 0,
                    f = 0;
                for (s = 0; s < n; ++s) b.push(["i", s, "=0"].join(""));
                for (r = 0; r < i; ++r)
                    for (s = 0; s < n; ++s) f = d, d = e[s], 0 === s ? b.push(["d", r, "s", s, "=t", r, "p", d].join("")) : b.push(["d", r, "s", s, "=(t", r, "p", d, "-s", f, "*t", r, "p", f, ")"].join(""));
                for (b.length > 0 && c.push("var " + b.join(",")), s = n - 1; s >= 0; --s) d = e[s], c.push(["for(i", s, "=0;i", s, "<s", d, ";++i", s, "){"].join(""));
                for (c.push(a), s = 0; s < n; ++s) {
                    for (f = d, d = e[s], r = 0; r < i; ++r) c.push(["p", r, "+=d", r, "s", s].join(""));
                    o && (s > 0 && c.push(["index[", f, "]-=s", f].join("")), c.push(["++index[", d, "]"].join(""))), c.push("}")
                }
                return c.join("\n")
            }

            function i(e, t, a) {
                for (var s = e.body, r = [], n = [], i = 0; i < e.args.length; ++i) {
                    var o = e.args[i];
                    if (!(o.count <= 0)) {
                        var c = new RegExp(o.name, "g"),
                            b = "",
                            d = t.arrayArgs.indexOf(i);
                        switch (t.argTypes[i]) {
                            case "offset":
                                var f = t.offsetArgIndex.indexOf(i);
                                d = t.offsetArgs[f].array, b = "+q" + f;
                            case "array":
                                b = "p" + d + b;
                                var h = "l" + i,
                                    u = "a" + d;
                                if (0 === t.arrayBlockIndices[d]) 1 === o.count ? "generic" === a[d] ? o.lvalue ? (r.push(["var ", h, "=", u, ".get(", b, ")"].join("")), s = s.replace(c, h), n.push([u, ".set(", b, ",", h, ")"].join(""))) : s = s.replace(c, [u, ".get(", b, ")"].join("")) : s = s.replace(c, [u, "[", b, "]"].join("")) : "generic" === a[d] ? (r.push(["var ", h, "=", u, ".get(", b, ")"].join("")), s = s.replace(c, h), o.lvalue && n.push([u, ".set(", b, ",", h, ")"].join(""))) : (r.push(["var ", h, "=", u, "[", b, "]"].join("")), s = s.replace(c, h), o.lvalue && n.push([u, "[", b, "]=", h].join("")));
                                else {
                                    for (var l = [o.name], g = [b], p = 0; p < Math.abs(t.arrayBlockIndices[d]); p++) l.push("\\s*\\[([^\\]]+)\\]"), g.push("$" + (p + 1) + "*t" + d + "b" + p);
                                    if (c = new RegExp(l.join(""), "g"), b = g.join("+"), "generic" === a[d]) throw new Error("cwise: Generic arrays not supported in combination with blocks!");
                                    s = s.replace(c, [u, "[", b, "]"].join(""))
                                }
                                break;
                            case "scalar":
                                s = s.replace(c, "Y" + t.scalarArgs.indexOf(i));
                                break;
                            case "index":
                                s = s.replace(c, "index");
                                break;
                            case "shape":
                                s = s.replace(c, "shape")
                        }
                    }
                }
                return [r.join("\n"), s, n.join("\n")].join("\n").trim()
            }

            function o(e) {
                for (var t = new Array(e.length), a = !0, s = 0; s < e.length; ++s) {
                    var r = e[s],
                        n = r.match(/\d+/);
                    n = n ? n[0] : "", 0 === r.charAt(0) ? t[s] = "u" + r.charAt(1) + n : t[s] = r.charAt(0) + n, s > 0 && (a = a && t[s] === t[s - 1])
                }
                return a ? t[0] : t.join("")
            }
            e.exports = function(e, t) {
                for (var a = t[1].length - Math.abs(e.arrayBlockIndices[0]) | 0, c = new Array(e.arrayArgs.length), b = new Array(e.arrayArgs.length), d = 0; d < e.arrayArgs.length; ++d) b[d] = t[2 * d], c[d] = t[2 * d + 1];
                var f = [],
                    h = [],
                    u = [],
                    l = [],
                    g = [];
                for (d = 0; d < e.arrayArgs.length; ++d) {
                    e.arrayBlockIndices[d] < 0 ? (u.push(0), l.push(a), f.push(a), h.push(a + e.arrayBlockIndices[d])) : (u.push(e.arrayBlockIndices[d]), l.push(e.arrayBlockIndices[d] + a), f.push(0), h.push(e.arrayBlockIndices[d]));
                    for (var p = [], m = 0; m < c[d].length; m++) u[d] <= c[d][m] && c[d][m] < l[d] && p.push(c[d][m] - u[d]);
                    g.push(p)
                }
                var y = ["SS"],
                    x = ["'use strict'"],
                    T = [];
                for (m = 0; m < a; ++m) T.push(["s", m, "=SS[", m, "]"].join(""));
                for (d = 0; d < e.arrayArgs.length; ++d) {
                    for (y.push("a" + d), y.push("t" + d), y.push("p" + d), m = 0; m < a; ++m) T.push(["t", d, "p", m, "=t", d, "[", u[d] + m, "]"].join(""));
                    for (m = 0; m < Math.abs(e.arrayBlockIndices[d]); ++m) T.push(["t", d, "b", m, "=t", d, "[", f[d] + m, "]"].join(""))
                }
                for (d = 0; d < e.scalarArgs.length; ++d) y.push("Y" + d);
                if (e.shapeArgs.length > 0 && T.push("shape=SS.slice(0)"), e.indexArgs.length > 0) {
                    var E = new Array(a);
                    for (d = 0; d < a; ++d) E[d] = "0";
                    T.push(["index=[", E.join(","), "]"].join(""))
                }
                for (d = 0; d < e.offsetArgs.length; ++d) {
                    var j = e.offsetArgs[d],
                        w = [];
                    for (m = 0; m < j.offset.length; ++m) 0 !== j.offset[m] && (1 === j.offset[m] ? w.push(["t", j.array, "p", m].join("")) : w.push([j.offset[m], "*t", j.array, "p", m].join("")));
                    0 === w.length ? T.push("q" + d + "=0") : T.push(["q", d, "=", w.join("+")].join(""))
                }
                var A = r([].concat(e.pre.thisVars).concat(e.body.thisVars).concat(e.post.thisVars));
                for ((T = T.concat(A)).length > 0 && x.push("var " + T.join(",")), d = 0; d < e.arrayArgs.length; ++d) x.push("p" + d + "|=0");
                e.pre.body.length > 3 && x.push(i(e.pre, e, b));
                var I = i(e.body, e, b),
                    N = function(e) {
                        for (var t = 0, a = e[0].length; t < a;) {
                            for (var s = 1; s < e.length; ++s)
                                if (e[s][t] !== e[0][t]) return t;
                            ++t
                        }
                        return t
                    }(g);
                N < a ? x.push(function(e, t, a, s) {
                    for (var r = t.length, i = a.arrayArgs.length, o = a.blockSize, c = a.indexArgs.length > 0, b = [], d = 0; d < i; ++d) b.push(["var offset", d, "=p", d].join(""));
                    for (d = e; d < r; ++d) b.push(["for(var j" + d + "=SS[", t[d], "]|0;j", d, ">0;){"].join("")), b.push(["if(j", d, "<", o, "){"].join("")), b.push(["s", t[d], "=j", d].join("")), b.push(["j", d, "=0"].join("")), b.push(["}else{s", t[d], "=", o].join("")), b.push(["j", d, "-=", o, "}"].join("")), c && b.push(["index[", t[d], "]=j", d].join(""));
                    for (d = 0; d < i; ++d) {
                        for (var f = ["offset" + d], h = e; h < r; ++h) f.push(["j", h, "*t", d, "p", t[h]].join(""));
                        b.push(["p", d, "=(", f.join("+"), ")"].join(""))
                    }
                    for (b.push(n(t, a, s)), d = e; d < r; ++d) b.push("}");
                    return b.join("\n")
                }(N, g[0], e, I)) : x.push(n(g[0], e, I)), e.post.body.length > 3 && x.push(i(e.post, e, b)), e.debug && s.log("-----Generated cwise routine for ", t, ":\n" + x.join("\n") + "\n----------");
                var k = [e.funcName || "unnamed", "_cwise_loop_", c[0].join("s"), "m", N, o(b)].join("");
                return new Function(["function ", k, "(", y.join(","), "){", x.join("\n"), "} return ", k].join(""))()
            }
        },
        65081: (e, t, a) => {
            "use strict";
            var s = a(25108),
                r = a(1984);
            e.exports = function(e) {
                var t = ["'use strict'", "var CACHED={}"],
                    a = [],
                    n = e.funcName + "_cwise_thunk";
                t.push(["return function ", n, "(", e.shimArgs.join(","), "){"].join(""));
                for (var i = [], o = [], c = [
                        ["array", e.arrayArgs[0], ".shape.slice(", Math.max(0, e.arrayBlockIndices[0]), e.arrayBlockIndices[0] < 0 ? "," + e.arrayBlockIndices[0] + ")" : ")"].join("")
                    ], b = [], d = [], f = 0; f < e.arrayArgs.length; ++f) {
                    var h = e.arrayArgs[f];
                    a.push(["t", h, "=array", h, ".dtype,", "r", h, "=array", h, ".order"].join("")), i.push("t" + h), i.push("r" + h), o.push("t" + h), o.push("r" + h + ".join()"), c.push("array" + h + ".data"), c.push("array" + h + ".stride"), c.push("array" + h + ".offset|0"), f > 0 && (b.push("array" + e.arrayArgs[0] + ".shape.length===array" + h + ".shape.length+" + (Math.abs(e.arrayBlockIndices[0]) - Math.abs(e.arrayBlockIndices[f]))), d.push("array" + e.arrayArgs[0] + ".shape[shapeIndex+" + Math.max(0, e.arrayBlockIndices[0]) + "]===array" + h + ".shape[shapeIndex+" + Math.max(0, e.arrayBlockIndices[f]) + "]"))
                }
                for (e.arrayArgs.length > 1 && (t.push("if (!(" + b.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same dimensionality!')"), t.push("for(var shapeIndex=array" + e.arrayArgs[0] + ".shape.length-" + Math.abs(e.arrayBlockIndices[0]) + "; shapeIndex--\x3e0;) {"), t.push("if (!(" + d.join(" && ") + ")) throw new Error('cwise: Arrays do not all have the same shape!')"), t.push("}")), f = 0; f < e.scalarArgs.length; ++f) c.push("scalar" + e.scalarArgs[f]);
                return a.push(["type=[", o.join(","), "].join()"].join("")), a.push("proc=CACHED[type]"), t.push("var " + a.join(",")), t.push(["if(!proc){", "CACHED[type]=proc=compile([", i.join(","), "])}", "return proc(", c.join(","), ")}"].join("")), e.debug && s.log("-----Generated thunk:\n" + t.join("\n") + "\n----------"), new Function("compile", t.join("\n"))(r.bind(void 0, e))
            }
        },
        16907: e => {
            "use strict";
            e.exports = function(e) {
                for (var t = new Array(e), a = 0; a < e; ++a) t[a] = a;
                return t
            }
        },
        48738: e => {
            function t(e) {
                return !!e.constructor && "function" == typeof e.constructor.isBuffer && e.constructor.isBuffer(e)
            }
            e.exports = function(e) {
                return null != e && (t(e) || function(e) {
                    return "function" == typeof e.readFloatLE && "function" == typeof e.slice && t(e.slice(0, 0))
                }(e) || !!e._isBuffer)
            }
        },
        62977: (e, t, a) => {
            "use strict";
            a.d(t, {
                    BC: () => s
                }),
                function() {
                    var e, t = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
                    if ("object" != typeof WebAssembly) return {
                        supported: !1
                    };
                    WebAssembly.instantiate(function(e) {
                        for (var a = new Uint8Array(e.length), s = 0; s < e.length; ++s) {
                            var r = e.charCodeAt(s);
                            a[s] = r > 96 ? r - 97 : r > 64 ? r - 39 : r + 4
                        }
                        var n = 0;
                        for (s = 0; s < e.length; ++s) a[n++] = a[s] < 60 ? t[a[s]] : 64 * (a[s] - 60) + a[++s];
                        return a.buffer.slice(0, n)
                    }("b9H79TebbbeJq9Geueu9Geub9Gbb9Gvuuuuueu9Gduueu9Gluuuueu9Gvuuuuub9Gouuuuuub9Gluuuub9GiuuueuiKLdilevlevlooroowwvwbDDbelve9Weiiviebeoweuec:W;kekr;RiOo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWVbe8F9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949c919M9MWV9c9V919U9KbdE9TW79O9V9Wt9FW9U9J9V9KW9wWVtW949wWV79P9V9UbiY9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWVbl8E9TW79O9V9Wt9FW9U9J9V9KW69U9KW949c919M9MWV9c9V919U9Kbv8A9TW79O9V9Wt9FW9U9J9V9KW69U9KW949wWV79P9V9UboE9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JWbra9TW79O9V9Wt9FW9U9J9V9KW69U9KW949tWG91W9U9JW9c9V919U9KbwL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9p9JtbDK9TW79O9V9Wt9FW9U9J9V9KWS9P2tWV9r919HtbqL9TW79O9V9Wt9FW9U9J9V9KWS9P2tWVT949WbkE9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OWbPa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94J9H9J9OW9ttV9P9Wbsa9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9WbzK9TW79O9V9Wt9F79W9Ht9P9H29t9VVt9sW9T9H9WbHl79IV9RbODwebcekdQXq:g9sLdbk;3keYu8Jjjjjbcjo9Rgv8Kjjjjbcbhodnalcefae0mbabcbRb:S:kjjbc:GeV86bbavcjdfcbcjdzNjjjb8AdnaiTmbavcjdfadalz:tjjjb8Akabaefhrabcefhwavalfcbcbcjdal9RalcFe0EzNjjjb8Aavavcjdfalz:tjjjbhDcj;abal9UhodndndndndnalTmbaoc;WFbGgecjdaecjd6Ehqcbhkdninakai9pmiaDcjlfcbcjdzNjjjb8Aaqaiak9Rakaqfai6Egxcsfgecl4cifcd4hmadakal2fhPdndndndndnaec9WGgsTmbcbhzcehHaPhOawhAxekdnaxTmbcbhAcehHaPhCinaDaAfRbbhXaDcjlfheaChoaxhQinaeaoRbbgLaX9RgXcetaX;acr4786bbaoalfhoaecefheaLhXaQcufgQmbkaraw9Ram6miawcbamzNjjjbgeTmiaCcefhCaeamfhwaAcefgAal6hHaAal9hmbxvkkaraw9Ram6mvawcbamzNjjjb8AceheinawgXamfhwalaegoSmldnaraw9Ram6mbaocefheawcbamzNjjjb8AaXmekkaoal6hHxekindnaxTmbaDazfRbbhXaDcjlfheaOhoaxhQinaeaoRbbgLaX9RgXcetaX;acr4786bbaoalfhoaecefheaLhXaQcufgQmbkkaraA9Ram6mearaAcbamzNjjjbgKamfgw9RcK6mdcbhYaDcjlfhAinaDcjlfaYfh8AcwhCczhLcehQindndnaQce9hmbcuhoa8ARbbmecbhodninaogecsSmeaecefhoaAaefcefRbbTmbkkcucbaecs6EhoxekaQcetc;:FFFeGhocuaQtcu7cFeGhXcbheinaoaXaAaefRbb9nfhoaecefgecz9hmbkkaoaLaoaL6geEhLaQaCaeEhCaQcetgQcw6mbkdndndndnaCcufPdiebkaKaYco4fgeaeRbbcdciaCclSEaYci4coGtV86bbaCcw9hmeawa8A8Pbb83bbawcwfa8Acwf8Pbb83bbawczfhwxdkaKaYco4fgeaeRbbceaYci4coGtV86bbkdncwaC9TgEmbinawcb86bbawcefhwxbkkcuaCtcu7h8Acbh3aAh5ina5heaEhQcbhoinaeRbbgLa8AcFeGgXaLaX6EaoaCtVhoaecefheaQcufgQmbkawao86bba5aEfh5awcefhwa3aEfg3cz6mbkcbheindnaAaefRbbgoaX6mbawao86bbawcefhwkaecefgecz9hmbkkdnaYczfgYas9pmbaAczfhAaraw9RcL0mekkaYas6meawTmeaOcefhOazcefgzal6hHawhAazalSmixbkkcbhwaHceGTmexikcbhwaHceGmdkaDaPaxcufal2falz:tjjjb8AaxakfhkawmbkcbhoxokcbhoxvkaiTmekcbhoaraw9Ralcaalca0E6mialc8F9nmexdkcbhoaecufca6mdkawcbcaal9RgezNjjjbaefhwkawaDcjdfalz:tjjjbalfab9Rhokavcjof8Kjjjjbaok9heeuaecaaeca0Eabcj;abae9Uc;WFbGgdcjdadcjd6Egdfcufad9Uae2adcl4cifcd4adV2fcefkmbcbabBd:S:kjjbk;rse3u8Jjjjjbc;ae9Rgl8Kjjjjbcbhvdnaici9UgocHfae0mbabcbyd:C:kjjbgrc;GeV86bbalc;abfcFecjezNjjjb8AalcUfgw9cu83ibalc8WfgD9cu83ibalcyfgq9cu83ibalcafgk9cu83ibalcKfgx9cu83ibalczfgm9cu83ibal9cu83iwal9cu83ibabaefc9WfhPabcefgsaofhednaiTmbcmcsarcb9kgzEhHcbhOcbhAcbhCcbhXcbhQindnaeaP9nmbcbhvxikaQcufhvadaCcdtfgoydbhLaocwfydbhKaoclfydbhYcbh8Adndninalc;abfavcsGcitfgoydlhEdndndnaoydbgoaL9hmbaEaYSmekdnaoaY9hmbaEaK9hmba8Acefh8AxekaoaK9hmeaEaL9hmea8Acdfh8Aka8Ac870mdaXcufhvada8AciGcx2goc:y1jjbfydbaCfcdtfydbhEadaocN1jjbfydbaCfcdtfydbhKadaoc:q1jjbfydbaCfcdtfydbhLcbhodnindnalavcsGcdtfydbaE9hmbaohYxdkcuhYavcufhvaocefgocz9hmbkkaEaOSgvaYce9iaYaH9oVgoGh3dndndndndncbcsavEaYaoEgvcs9hmbarce9imbaEaEaAaEcefaASgvEgAcefSmecmcsavEhvkasava8Acdtc;WeGV86bbavcs9hmeaEaA9Rgvcetavc8F917hvinaeavcFb0crtavcFbGV86bbaecefheavcje6hoavcr4hvaoTmbkaEhAxdkcPhvasa8AcdtcPV86bbaEhAkavTmbavaH9imekalaXcdtfaEBdbaXcefcsGhXkaOa3fhOalc;abfaQcitfgvaKBdlavaEBdbalc;abfaQcefcsGgvcitfgoaEBdlaoaLBdbavcefhoxikavcufhva8Aclfg8Ac;ab9hmbkkdnadceaKaOScetaYaOSEcx2gvc:q1jjbfydbaCfcdtfydbgLTadavcN1jjbfydbaCfcdtfydbg8AceSGadavc:y1jjbfydbaCfcdtfydbgYcdSGaOcb9hGazGg5ce9hmbaw9cu83ibaD9cu83ibaq9cu83ibak9cu83ibax9cu83ibam9cu83ibal9cu83iwal9cu83ibcbhOkcbhEaXcufgvhodnindnalaocsGcdtfydba8A9hmbaEhKxdkcuhKaocufhoaEcefgEcz9hmbkkcbhodnindnalavcsGcdtfydbaY9hmbaohExdkcuhEavcufhvaocefgocz9hmbkkaOaLaOSg8Efh3dndnaKcm0mbaKcefhKxekcbcsa8Aa3SgvEhKa3avfh3kdndnaEcm0mbaEcefhExekcbcsaYa3SgvEhEa3avfh3kc9:cua8EEh8FaEaKcltVhocbhvdndndninavcj1jjbfRbbaocFeGSmeavcefgvcz9hmbxdkka5aLaO9havcm0VVmbasavc;WeV86bbxekasa8F86bbaeao86bbaecefhekdna8EmbaLaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombkaLhAkdnaKcs9hmba8AaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombka8AhAkdnaEcs9hmbaYaA9Rgvcetavc8F917hvinaeavcFb0gocrtavcFbGV86bbavcr4hvaecefheaombkaYhAkalaXcdtfaLBdbaXcefcsGhvdndnaKPzbeeeeeeeeeeeeeebekalavcdtfa8ABdbaXcdfcsGhvkdndnaEPzbeeeeeeeeeeeeeebekalavcdtfaYBdbavcefcsGhvkalc;abfaQcitfgoaLBdlaoa8ABdbalc;abfaQcefcsGcitfgoa8ABdlaoaYBdbalc;abfaQcdfcsGcitfgoaYBdlaoaLBdbaQcifhoavhXa3hOkascefhsaocsGhQaCcifgCai6mbkkcbhvaeaP0mbcbhvinaeavfavcj1jjbfRbb86bbavcefgvcz9hmbkaeab9Ravfhvkalc;aef8KjjjjbavkZeeucbhddninadcefgdc8F0meceadtae6mbkkadcrfcFeGcr9Uci2cdfabci9U2cHfkmbcbabBd:C:kjjbk:ydewu8Jjjjjbcz9Rhlcbhvdnaicvfae0mbcbhvabcbRb:C:kjjbc;qeV86bbal9cb83iwabcefhoabaefc98fhrdnaiTmbcbhwcbhDindnaoar6mbcbskadaDcdtfydbgqalcwfawaqav9Rgvavc8F91gv7av9Rc507gwcdtfgkydb9Rgvc8E91c9:Gavcdt7awVhvinaoavcFb0gecrtavcFbGV86bbavcr4hvaocefhoaembkakaqBdbaqhvaDcefgDai9hmbkkcbhvaoar0mbaocbBbbaoab9RclfhvkavkBeeucbhddninadcefgdc8F0meceadtae6mbkkadcwfcFeGcr9Uab2cvfk:dvli99dui99ludnaeTmbcuadcetcuftcu7:Yhvdndncuaicuftcu7:YgoJbbbZMgr:lJbbb9p9DTmbar:Ohwxekcjjjj94hwkcbhicbhDinalclfIdbgrJbbbbJbbjZalIdbgq:lar:lMalcwfIdbgk:lMgr:varJbbbb9BEgrNhxaqarNhralcxfIdbhqdndnakJbbbb9GTmbaxhkxekJbbjZar:l:tgkak:maxJbbbb9GEhkJbbjZax:l:tgxax:marJbbbb9GEhrkdndnaqJbbj:;aqJbbj:;9GEgxJbbjZaxJbbjZ9FEavNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohmxekcjjjj94hmkdndnakJbbj:;akJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;akJbbbb9GEMgq:lJbbb9p9DTmbaq:OhPxekcjjjj94hPkdndnarJbbj:;arJbbj:;9GEgqJbbjZaqJbbjZ9FEaoNJbbbZJbbb:;arJbbbb9GEMgr:lJbbb9p9DTmbar:Ohsxekcjjjj94hskdndnadcl9hmbabaifgzas86bbazcifam86bbazcdfaw86bbazcefaP86bbxekabaDfgzas87ebazcofam87ebazclfaw87ebazcdfaP87ebkalczfhlaiclfhiaDcwfhDaecufgembkkk;klld99eud99eudnaeTmbdndncuaicuftcu7:YgvJbbbZMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikaic;8FiGhrinabcofcicdalclfIdb:lalIdb:l9EgialcwfIdb:lalaicdtfIdb:l9EEgialcxfIdb:lalaicdtfIdb:l9EEgiarV87ebdndnalaicefciGcdtfIdbJ;Zl:1ZNJbbj:;JbbjZalaicdtfIdbJbbbb9DEgoNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabaq87ebdndnaoalaicdfciGcdtfIdbJ;Zl:1ZNNgwJbbj:;awJbbj:;9GEgDJbbjZaDJbbjZ9FEavNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohqxekcjjjj94hqkabcdfaq87ebdndnaoalaicufciGcdtfIdbJ;Zl:1ZNNgoJbbj:;aoJbbj:;9GEgwJbbjZawJbbjZ9FEavNJbbbZJbbb:;aoJbbbb9GEMgo:lJbbb9p9DTmbao:Ohixekcjjjj94hikabclfai87ebabcwfhbalczfhlaecufgembkkk:Hvdxue998Jjjjjbcjd9Rgo8Kjjjjbadcd4hrdndndndnavcd9hmbadcl6mearcearce0EhwaohDinaDc:CuBdbaDclfhDawcufgwmbkaeTmiadcl6mdarcearce0EhqarcdthkalhxcbhminaohDaxhwaqhPinaDaDydbgsawydbgzcL4cFeGc:cufcbazEgzasaz9kEBdbawclfhwaDclfhDaPcufgPmbkaxakfhxamcefgmae9hmbkkaeTmdxekaeTmekavcb9hadcl6gqVhHarcearce0Ehkarcdthrceai9Rhmcbhdindndndnavce9hmbaqmdc:CuhwalhDakhPinawaDydbgscL4cFeGc:cufcbasEgsawas9kEhwaDclfhDaPcufgPmbxdkkc:CuhwaHmbaohDalhPakhsinaDaPydbgzcL4cFeGgxc8Aaxc8A9kEc:cufcbazEBdbaPclfhPaDclfhDascufgsmbkkaqmbcbhDakhsinawhPdnavceSmbaoaDfydbhPkdndnalaDfIdbgOcjjj;8iamaPfgPcLt9R::NJbbbZJbbb:;aOJbbbb9GEMgO:lJbbb9p9DTmbaO:Ohzxekcjjjj94hzkabaDfazcFFFrGaPcKtVBdbaDclfhDascufgsmbkkabarfhbalarfhladcefgdae9hmbkkaocjdf8KjjjjbkFkdCui998Jjjjjbc:Gd9Rgv8Kjjjjbavc:4efcbc;KbzNjjjb8AcbhodnadTmbcbhoaiTmbdnabae9hmbavcuadcdtgoadcFFFFi0Ecbyd:K:kjjbHjjjjbbgeBd:4eavceBd:ydaeabaoz:tjjjb8Akavc:OefcwfcbBdbav9cb83i:Oeavc:Oefaeadaiavc:4efz:njjjbcuaicdtgraicFFFFi0Egwcbyd:K:kjjbHjjjjbbhoavc:4efavyd:ydgDcdtfaoBdbavaDcefgqBd:ydaoavyd:Oegkarz:tjjjbhxavc:4efaqcdtfadci9Ugmcbyd:K:kjjbHjjjjbbgoBdbavaDcdfgrBd:ydaocbamzNjjjbhPavc:4efarcdtfawcbyd:K:kjjbHjjjjbbgsBdbavaDcifgqBd:ydaxhoashrinaralIdbalaoydbgwcwawcw6Ecdtfc;ebfIdbMUdbaoclfhoarclfhraicufgimbkavc:4efaqcdtfcuamcdtadcFFFF970Ecbyd:K:kjjbHjjjjbbgqBdbavaDclfBd:yddnadci6mbamceamce0EhiaehoaqhrinarasaoydbcdtfIdbasaoclfydbcdtfIdbMasaocwfydbcdtfIdbMUdbaocxfhoarclfhraicufgimbkkavc;qbfhzavhoavyd:SehHavyd:WehOcbhwcbhrcbhAcehCinaohXcihQaearci2gLcdtfgocwfydbhdaoydbhDabaAcx2fgiclfaoclfydbgKBdbaiaDBdbaicwfadBdbaParfce86bbazadBdwazaKBdlazaDBdbaqarcdtfcbBdbdnawTmbcihQaXhiinazaQcdtfaiydbgoBdbaQaoaD9haoaK9hGaoad9hGfhQaiclfhiawcufgwmbkkaAcefhAaxaDcdtfgoaoydbcufBdbaxaKcdtfgoaoydbcufBdbaxadcdtfgoaoydbcufBdbcbhwinaOaHaeawaLfcdtfydbcdtgifydbcdtfgKhoakaifgDydbgdhidnadTmbdninaoydbarSmeaoclfhoaicufgiTmdxbkkaoadcdtaKfc98fydbBdbaDaDydbcufBdbkawcefgwci9hmbkdndndnaQTmbcuhrJbbbbhYcbhDavyd:SehKavyd:WehLindndnakazaDcdtfydbcdtgofydbgimbaDcefhDxekaDcs0hwasaofgdIdbh8AadalcbaDcefgDawEcdtfIdbalaxaofydbgwcwawcw6Ecdtfc;ebfIdbMgEUdbaEa8A:thEaicdthiaLaKaofydbcdtfhoinaqaoydbgwcdtfgdaEadIdbMg8AUdba8AaYaYa8A9DgdEhYawaradEhraoclfhoaic98fgimbkkaDaQ9hmbkarcu9hmekaCam9pmeindnaPaCfRbbmbaChrxdkamaCcefgC9hmbxdkkaQczaQcz6EhwazhoaXhzarcu9hmekkavyd:ydhokaocdtavc:4effc98fhrdninaoTmearydbcbyd:G:kjjbH:bjjjbbarc98fhraocufhoxbkkavc:Gdf8Kjjjjbk;UlevucuaicdtgvaicFFFFi0Egocbyd:K:kjjbHjjjjbbhralalyd9GgwcdtfarBdbalawcefBd9GabarBdbaocbyd:K:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdlcuadcdtadcFFFFi0Ecbyd:K:kjjbHjjjjbbhralalyd9GgocdtfarBdbalaocefBd9GabarBdwabydbcbavzNjjjb8Aadci9UhwdnadTmbabydbhoaehladhrinaoalydbcdtfgvavydbcefBdbalclfhlarcufgrmbkkdnaiTmbabydbhlabydlhrcbhvaihoinaravBdbarclfhralydbavfhvalclfhlaocufgombkkdnadci6mbawceawce0EhDabydlhrabydwhvcbhlinaecwfydbhoaeclfydbhdaraeydbcdtfgwawydbgwcefBdbavawcdtfalBdbaradcdtfgdadydbgdcefBdbavadcdtfalBdbaraocdtfgoaoydbgocefBdbavaocdtfalBdbaecxfheaDalcefgl9hmbkkdnaiTmbabydlheabydbhlinaeaeydbalydb9RBdbalclfhlaeclfheaicufgimbkkkQbabaeadaic:01jjbz:mjjjbkQbabaeadaic:C:jjjbz:mjjjbk9DeeuabcFeaicdtzNjjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk;:kivuo99lu8Jjjjjbcj;Hb9Rgl8Kjjjjbcbhvalc1;Gbfcbc;KbzNjjjb8AalcuadcdtadcFFFFi0Egocbyd:K:kjjbHjjjjbbgrBd19GalceBd;O9Galcwfcbyd:m:kjjbBdbalcb8Pd:e:kjjb83ibalc;W;Gbfcwfcbyd:y:kjjbBdbalcb8Pd:q:kjjb83i;W9Gaicd4hwdndnadmbJFFuFhDJFFuuhqJFFuuhkJFFuFhxJFFuuhmJFFuFhPxekawcdthsaehzincbhiinalaifgHazaifIdbgDaHIdbgxaxaD9EEUdbalc;W;GbfaifgHaDaHIdbgxaxaD9DEUdbaiclfgicx9hmbkazasfhzavcefgvad9hmbkalIdwhqalId;49GhDalIdlhkalId;09GhxalIdbhmalId;W9GhPkdndnadTmbJbbbbJbbjZaPam:tJbbbb:xgPaxak:tgxaxaP9DEgxaDaq:tgDaDax9DEgD:vaDJbbbb9BEhDawcdthsarhHadhzindndnaDaeIdbam:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcv2c;j:KM;jbGhvdndnaDaeclfIdbak:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcq2cM;j:KMeGavVhvdndnaDaecwfIdbaq:tNJb;au9eNJbbbZMgx:lJbbb9p9DTmbax:Ohixekcjjjj94hikaHavaicztaicwtcj;GiGVaicsGVc:p;G:dKGcH2c;d;H:WKGcC2c:KM;j:KdGVBdbaeasfheaHclfhHazcufgzmbkalcbcj;GbzNjjjbhiarhHadheinaiaHydbgzcFrGcx2fgvavydbcefBdbaiazcq4cFrGcx2fgvavydlcefBdlaiazcC4cFrGcx2fgzazydwcefBdwaHclfhHaecufgembxdkkalcbcj;GbzNjjjb8AkcbhHcbhzcbhecbhvinalaHfgiydbhsaiazBdbaicwfgwydbhOawavBdbaiclfgiydbhwaiaeBdbasazfhzaOavfhvawaefheaHcxfgHcj;Gb9hmbkcbhialaocbyd:K:kjjbHjjjjbbgzBd:m9GdnadTmbabhHinaHaiBdbaHclfhHadaicefgi9hmbkadTmbabhiadhHinalaraiydbgecdtfydbcFrGcx2fgvavydbgvcefBdbazavcdtfaeBdbaiclfhiaHcufgHmbkazhiadhHinalaraiydbgecdtfydbcq4cFrGcx2fgvavydlgvcefBdlabavcdtfaeBdbaiclfhiaHcufgHmbkabhiadhHinalaraiydbgecdtfydbcC4cFrGcx2fgvavydwgvcefBdwazavcdtfaeBdbaiclfhiaHcufgHmbkadTmbcbhiinabazydbcdtfaiBdbazclfhzadaicefgi9hmbkkclhidninaic98Smealc1;Gbfaifydbcbyd:G:kjjbH:bjjjbbaic98fhixbkkalcj;Hbf8Kjjjjbk9teiucbcbyd:O:kjjbgeabcifc98GfgbBd:O:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:O:kjjbgeabcrfc94GfgbBd:O:kjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd:O:kjjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd:O:kjjbfgdBd:O:kjjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akkk:6ddbcjwk:Cdb4:h9w9N94:P:gW:j9O:ye9Pbbbbbbebbbdbbbebbbdbbbbbbbdbbbbbbbebbbbbbb:l29hZ;69:9kZ;N;76Z;rg97Z;z;o9xZ8J;B85Z;:;u9yZ;b;k9HZ:2;Z9DZ9e:l9mZ59A8KZ:r;T3Z:A:zYZ79OHZ;j4::8::Y:D9V8:bbbb9s:49:Z8R:hBZ9M9M;M8:L;z;o8:;8:PG89q;x:J878R:hQ8::M:B;e87bbbbbbjZbbjZbbjZ:E;V;N8::Y:DsZ9i;H;68:xd;R8:;h0838:;W:NoZbbbb:WV9O8:uf888:9i;H;68:9c9G;L89;n;m9m89;D8Ko8:bbbbf:8tZ9m836ZS:2AZL;zPZZ818EZ9e:lxZ;U98F8:819E;68:FFuuFFuuFFuuFFuFFFuFFFuFbc:Cqkzebbbebbbdbbb8WWbb"), {}).then((function(t) {
                        (e = t.instance).exports.__wasm_call_ctors(), e.exports.meshopt_encodeVertexVersion(0), e.exports.meshopt_encodeIndexVersion(1)
                    }))
                }(),
                function() {
                    var e = new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 4, 1, 96, 0, 0, 3, 3, 2, 0, 0, 5, 3, 1, 0, 1, 12, 1, 0, 10, 22, 2, 12, 0, 65, 0, 65, 0, 65, 0, 252, 10, 0, 0, 11, 7, 0, 65, 0, 253, 15, 26, 11]),
                        t = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
                    if ("object" != typeof WebAssembly) return {
                        supported: !1
                    };
                    var a = WebAssembly.validate(e) ? "b9H79TebbbeKl9Gbb9Gvuuuuueu9Giuuub9Geueuikqbbebeedddilve9Weeeviebeoweuec:q;Aekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbdY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVblE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtboK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbrL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbwl79IV9RbDq;b9tqlbzik9:evu8Jjjjjbcz9Rhbcbheincbhdcbhiinabcwfadfaicjuaead4ceGglE86bbaialfhiadcefgdcw9hmbkaec:q:yjjbfai86bbaecitc:q1jjbfab8Piw83ibaecefgecjd9hmbkk;e8JlHud97euo978Jjjjjbcj;kb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Rad;8qbbcj;abad9UhoaicefhldnadTmbaoc;WFbGgocjdaocjd6EhwcbhDinaDae9pmeawaeaD9RaDawfae6Egqcsfgoc9WGgkci2hxakcethmaocl4cifcd4hPabaDad2fhscbhzdnincbhHalhOcbhAdninaraO9RaP6miavcj;cbfaAak2fhCaOaPfhlcbhidnakc;ab6mbaral9Rc;Gb6mbcbhoinaCaofhidndndndndnaOaoco4fRbbgXciGPlbedibkaipxbbbbbbbbbbbbbbbbpklbxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklbalczfhlkdndndndndnaXcd4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklzxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklzalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklzalczfhlkdndndndndnaXcl4ciGPlbedibkaipxbbbbbbbbbbbbbbbbpklaxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklaalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaialpbbbpklaalczfhlkdndndndndnaXco4Plbedibkaipxbbbbbbbbbbbbbbbbpkl8WxikaialpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalclfaYpQbfaXc:q:yjjbfRbbfhlxdkaialpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibaXc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgXcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spkl8WalcwfaYpQbfaXc:q:yjjbfRbbfhlxekaialpbbbpkl8Walczfhlkaoc;abfhiaocjefak0meaihoaral9Rc;Fb0mbkkdndnaiak9pmbaici4hoinaral9RcK6mdaCaifhXdndndndndnaOaico4fRbbaocoG4ciGPlbedibkaXpxbbbbbbbbbbbbbbbbpklbxikaXalpbblalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLgQcdp:meaQpmbzeHdOiAlCvXoQrLpxiiiiiiiiiiiiiiiip9ogLpxiiiiiiiiiiiiiiiip8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalclfaYpQbfaKc:q:yjjbfRbbfhlxdkaXalpbbwalpbbbgQclp:meaQpmbzeHdOiAlCvXoQrLpxssssssssssssssssp9ogLpxssssssssssssssssp8JgQp5b9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibaKc:q:yjjbfpbbbgYaYpmbbbbbbbbbbbbbbbbaQp5e9cjF;8;4;W;G;ab9:9cU1:NgKcitc:q1jjbfpbibp9UpmbedilvorzHOACXQLpPaLaQp9spklbalcwfaYpQbfaKc:q:yjjbfRbbfhlxekaXalpbbbpklbalczfhlkaocdfhoaiczfgiak6mbkkalTmbaAcd0hHalhOaAcefgAclSmdxekkcbhlaHceGTmdkdnakTmbavcjdfazfhiavazfpbdbhYcbhXinaiavcj;cbfaXfgopblbgLcep9TaLpxeeeeeeeeeeeeeeeegQp9op9Hp9rgLaoakfpblbg8Acep9Ta8AaQp9op9Hp9rg8ApmbzeHdOiAlCvXoQrLgEaoamfpblbg3cep9Ta3aQp9op9Hp9rg3aoaxfpblbg5cep9Ta5aQp9op9Hp9rg5pmbzeHdOiAlCvXoQrLg8EpmbezHdiOAlvCXorQLgQaQpmbedibedibedibediaYp9UgYp9AdbbaiadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaEa8EpmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwKDYq8AkEx3m5P8Es8FgLa3a5pmwKDYq8AkEx3m5P8Es8Fg8ApmbezHdiOAlvCXorQLgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfgoaYaLa8ApmwDKYqk8AExm35Ps8E8FgQaQpmbedibedibedibedip9UgYp9AdbbaoadfgoaYaQaQpmlvorlvorlvorlvorp9UgYp9AdbbaoadfgoaYaQaQpmwDqkwDqkwDqkwDqkp9UgYp9AdbbaoadfgoaYaQaQpmxmPsxmPsxmPsxmPsp9UgYp9AdbbaoadfhiaXczfgXak6mbkkazclfgzad6mbkasavcjdfaqad2;8qbbavavcjdfaqcufad2fad;8qbbaqaDfhDc9:hoalmexikkc9:hoxekcbc99aral9Radcaadca0ESEhokavcj;kbf8Kjjjjbaokwbz:bjjjbk;tzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecje;8kbavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfalaDcu7gPcl4fcsGcitfgsydlhzasydbhHdnaDcsGgDak9pmbavaiaPfcsGcdtfydbaxaDEhsaDThDdndnadcd9hmbabarcetfgPaH87ebaPcdfaz87ebaPclfas87ebxekabarcdtfgPaHBdbaPclfazBdbaPcwfasBdbkaxaDfhxavc;abfalcitfgPasBdbaPazBdlavaicdtfasBdbavc;abfalcefcsGglcitfgPaHBdbaPasBdlaiaDfhialcefhlxdkdndnaDcsSmbamaDfaDc987fcefhmxekaocefhDao8SbbgscFeGhPdndnascu9mmbaDhoxekaocvfhoaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhokaPce4cbaPceG9R7amfhmkdndnadcd9hmbabarcetfgDaH87ebaDcdfaz87ebaDclfam87ebxekabarcdtfgDaHBdbaDclfazBdbaDcwfamBdbkavc;abfalcitfgDamBdbaDazBdlavaicdtfamBdbavc;abfalcefcsGglcitfgDaHBdbaDamBdlaicefhialcefhlxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHcdfaD87ebaHclfas87ebxekabarcdtfgHaxBdbaHclfaDBdbaHcwfasBdbkavaicdtfaxBdbavc;abfalcitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfalcefcsGcitfgHasBdbaHaDBdlavaiaPfcsGgicdtfasBdbavc;abfalcdfcsGglcitfgDaxBdbaDasBdlalcefhlaiaOfhiazaOfhxxekaxcbaoRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbaocefhDxekaocdfhDao8SbegPcFeGhsdnaPcu9kmbaocofhAascFbGhscrhodninaD8SbbgPcFbGaotasVhsaPcu9kmeaDcefhDaocrfgoc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbgocFeGhPdnaocu9kmbaDcvfhzaPcFbGhPcrhodninas8SbbgDcFbGaotaPVhPaDcu9kmeascefhsaocrfgoc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashoxekascefhoas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninao8SbbgscFbGaDtaPVhPascu9kmeaocefhoaDcrfgDc8J9hmbkaOhoxekaocefhokaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDcdfaz87ebaDclfaO87ebxekabarcdtfgDaABdbaDclfazBdbaDcwfaOBdbkavc;abfalcitfgDazBdbaDaABdlavaicdtfaABdbavc;abfalcefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfalcdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiarcifgrae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:wPliuo97eue978Jjjjjbca9Rhiaec98Ghldndnadcl9hmbdnalTmbcbhvabhdinadadpbbbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDpxbbbbbbbbbbbbbbbbp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpkbbadczfhdavclfgval6mbkkalae9pmeaipxbbbbbbbbbbbbbbbbgqpklbaiabalcdtfgdaeciGglcdtgv;8qbbdnalTmbaiaipblbgocKp:RecKp:Sep;6egraocwp:RecKp:Sep;6earp;Geaoczp:RecKp:Sep;6egwp;Gep;Kep;LegDaqp:2egqarpxbbbjbbbjbbbjbbbjgkp9op9rp;Kegrpxbb;:9cbb;:9cbb;:9cbb;:9cararp;MeaDaDp;Meawaqawakp9op9rp;Kegrarp;Mep;Kep;Kep;Jep;Negwp;Mepxbbn0bbn0bbn0bbn0gqp;KepxFbbbFbbbFbbbFbbbp9oaopxbbbFbbbFbbbFbbbFp9op9qarawp;Meaqp;Kecwp:RepxbFbbbFbbbFbbbFbbp9op9qaDawp;Meaqp;Keczp:RepxbbFbbbFbbbFbbbFbp9op9qpklbkadaiav;8qbbskdnalTmbcbhvabhdinadczfgxaxpbbbgopxbbbbbbFFbbbbbbFFgkp9oadpbbbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpkbbadaDakp9oawaopmbezHdiOAlvCXorQLp9qpkbbadcafhdavclfgval6mbkkalae9pmbaiaeciGgvcitgdfcbcaad9R;8kbaiabalcitfglad;8qbbdnavTmbaiaipblzgopxbbbbbbFFbbbbbbFFgkp9oaipblbgDaopmlvorxmPsCXQL358E8FpxFubbFubbFubbFubbp9op;6eaDaopmbediwDqkzHOAKY8AEgoczp:Sep;6egrp;Geaoczp:Reczp:Sep;6egwp;Gep;Kep;Legopxb;:FSb;:FSb;:FSb;:FSawaopxbbbbbbbbbbbbbbbbp:2egqawpxbbbjbbbjbbbjbbbjgmp9op9rp;Kegwawp;Meaoaop;Mearaqaramp9op9rp;Kegoaop;Mep;Kep;Kep;Jep;Negrp;Mepxbbn0bbn0bbn0bbn0gqp;Keczp:Reawarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9op9qgwaoarp;Meaqp;KepxFFbbFFbbFFbbFFbbp9ogopmwDKYqk8AExm35Ps8E8Fp9qpklzaiaDakp9oawaopmbezHdiOAlvCXorQLp9qpklbkalaiad;8qbbkk;4wllue97euv978Jjjjjbc8W9Rhidnaec98GglTmbcbhvabhoinaiaopbbbgraoczfgwpbbbgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklbaopxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblbpEb:T:j83ibaocwfarp5eaipblbpEe:T:j83ibawaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblbpEd:T:j83ibaocKfakp5eaipblbpEi:T:j83ibaocafhoavclfgval6mbkkdnalae9pmbaiaeciGgvcitgofcbcaao9R;8kbaiabalcitfgwao;8qbbdnavTmbaiaipblbgraipblzgDpmlvorxmPsCXQL358E8Fgqczp:Segkclp:RepklaaipxbbjZbbjZbbjZbbjZpx;Zl81Z;Zl81Z;Zl81Z;Zl81Zakpxibbbibbbibbbibbbp9qp;6ep;NegkaraDpmbediwDqkzHOAKY8AEgrczp:Reczp:Sep;6ep;MegDaDp;Meakarczp:Sep;6ep;Megxaxp;Meakaqczp:Reczp:Sep;6ep;Megqaqp;Mep;Kep;Kep;Lepxbbbbbbbbbbbbbbbbp:4ep;Jepxb;:FSb;:FSb;:FSb;:FSgkp;Mepxbbn0bbn0bbn0bbn0grp;KepxFFbbFFbbFFbbFFbbgmp9oaxakp;Mearp;Keczp:Rep9qgxaqakp;Mearp;Keczp:ReaDakp;Mearp;Keamp9op9qgkpmbezHdiOAlvCXorQLgrp5baipblapEb:T:j83ibaiarp5eaipblapEe:T:j83iwaiaxakpmwDKYqk8AExm35Ps8E8Fgkp5baipblapEd:T:j83izaiakp5eaipblapEi:T:j83iKkawaiao;8qbbkk:Pddiue978Jjjjjbc;ab9Rhidnadcd4ae2glc98GgvTmbcbheabhdinadadpbbbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepkbbadczfhdaeclfgeav6mbkkdnaval9pmbaialciGgecdtgdVcbc;abad9R;8kbaiabavcdtfgvad;8qbbdnaeTmbaiaipblbgocwp:Recwp:Sep;6eaocep:SepxbbjFbbjFbbjFbbjFp9opxbbjZbbjZbbjZbbjZp:Uep;Mepklbkavaiad;8qbbkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaikkkebcjwklz9Tbb" : "b9H79Tebbbe8Fv9Gbb9Gvuuuuueu9Giuuub9Geueu9Giuuueuikqbeeedddillviebeoweuec:q;iekr;leDo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bb8A9TW79O9V9Wt9F9KW9J9V9KW9wWVtW949c919M9MWVbeY9TW79O9V9Wt9F9KW9J9V9KW69U9KW949c919M9MWVbdE9TW79O9V9Wt9F9KW9J9V9KW69U9KW949tWG91W9U9JWbiL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9p9JtblK9TW79O9V9Wt9F9KW9J9V9KWS9P2tWV9r919HtbvL9TW79O9V9Wt9F9KW9J9V9KWS9P2tWVT949Wbol79IV9Rbrq;d8Yqdbk:yzeHu8Jjjjjbcj;eb9Rgv8Kjjjjbc9:hodnadcefal0mbcuhoaiRbbc:Ge9hmbavaialfgrad9Radz1jjjbhwcj;abad9UhlaicefhodnadTmbalc;WFbGglcjdalcjd6EhDcbhqinaqae9pmeaDaeaq9RaqaDfae6Egkcsfglcl4cifcd4hxdndndndnalc9WGgmTmbcbhPcehsawcjdfhzaohHinaraH9Rax6midnaraHaxfgo9RcK6mbczhlcbhOinalgic9WfgAawcj;cbffhldndndndndnaHaAco4fRbbaOcoG4ciGPlbedibkal9cb83ibalcwf9cb83ibxikalaoRblaoRbbgAco4gCaCciSgCE86bbawcj;cbfaifglcGfaoclfaCfgCRbbaAcl4ciGgXaXciSgXE86bbalcVfaCaXfgCRbbaAcd4ciGgXaXciSgXE86bbalc7faCaXfgCRbbaAciGgAaAciSgAE86bbalctfaCaAfgCRbbaoRbegAco4gXaXciSgXE86bbalc91faCaXfgCRbbaAcl4ciGgXaXciSgXE86bbalc4faCaXfgCRbbaAcd4ciGgXaXciSgXE86bbalc93faCaXfgCRbbaAciGgAaAciSgAE86bbalc94faCaAfgCRbbaoRbdgAco4gXaXciSgXE86bbalc95faCaXfgCRbbaAcl4ciGgXaXciSgXE86bbalc96faCaXfgCRbbaAcd4ciGgXaXciSgXE86bbalc97faCaXfgCRbbaAciGgAaAciSgAE86bbalc98faCaAfgARbbaoRbigoco4gCaCciSgCE86bbalc99faAaCfgARbbaocl4ciGgCaCciSgCE86bbalc9:faAaCfgARbbaocd4ciGgCaCciSgCE86bbalcufaAaCfglRbbaociGgoaociSgoE86bbalaofhoxdkalaoRbwaoRbbgAcl4gCaCcsSgCE86bbawcj;cbfaifglcGfaocwfaCfgCRbbaAcsGgAaAcsSgAE86bbalcVfaCaAfgARbbaoRbegCcl4gXaXcsSgXE86bbalc7faAaXfgARbbaCcsGgCaCcsSgCE86bbalctfaAaCfgARbbaoRbdgCcl4gXaXcsSgXE86bbalc91faAaXfgARbbaCcsGgCaCcsSgCE86bbalc4faAaCfgARbbaoRbigCcl4gXaXcsSgXE86bbalc93faAaXfgARbbaCcsGgCaCcsSgCE86bbalc94faAaCfgARbbaoRblgCcl4gXaXcsSgXE86bbalc95faAaXfgARbbaCcsGgCaCcsSgCE86bbalc96faAaCfgARbbaoRbvgCcl4gXaXcsSgXE86bbalc97faAaXfgARbbaCcsGgCaCcsSgCE86bbalc98faAaCfgARbbaoRbogCcl4gXaXcsSgXE86bbalc99faAaXfgARbbaCcsGgCaCcsSgCE86bbalc9:faAaCfgARbbaoRbrgocl4gCaCcsSgCE86bbalcufaAaCfglRbbaocsGgoaocsSgoE86bbalaofhoxekalao8Pbb83bbalcwfaocwf8Pbb83bbaoczfhokdnaiam9pmbaOcdfhOaiczfhlarao9RcL0mekkaiam6miaoTmidnakTmbawaPfRbbhOawcj;cbfhlazhiakhAinaialRbbgHce4cbaHceG9R7aOfgO86bbaiadfhialcefhlaAcufgAmbkkazcefhzaPcefgPad6hsaohHaPad9hmexvkkcbhoasceGmdxikaoaxad2fhXdnakTmbcbhmcehsawcjdfhCinarao9Rax6miaoTmdaoaxfhoawamfRbbhOawcj;cbfhlaChiakhAinaialRbbgHce4cbaHceG9R7aOfgO86bbaiadfhialcefhlaAcufgAmbkaCcefhCamcefgmad6hsamad9hmbkaXhoxikcbhlcehsinarao9Rax6mdaoTmeaoaxfhoalcefglad6hsadal9hmbkaXhoxdkcbhoasceGTmekc9:hoxikabaqad2fawcjdfakad2z1jjjb8Aawawcjdfakcufad2fadz1jjjb8Aakaqfhqaombkc9:hoxekcbc99arao9Radcaadca0ESEhokavcj;ebf8Kjjjjbaok;xzeHu8Jjjjjbc;ae9Rgv8Kjjjjbc9:hodnaeci9UgrcHfal0mbcuhoaiRbbgwc;WeGc;Ge9hmbawcsGgDce0mbavc;abfcFecjez:jjjjb8AavcUf9cu83ibavc8Wf9cu83ibavcyf9cu83ibavcaf9cu83ibavcKf9cu83ibavczf9cu83ibav9cu83iwav9cu83ibaialfc9WfhqaicefgwarfhodnaeTmbcmcsaDceSEhkcbhxcbhmcbhrcbhicbhlindnaoaq9nmbc9:hoxikdndnawRbbgDc;Ve0mbavc;abfalaDcu7gPcl4fcsGcitfgsydlhzasydbhHdnaDcsGgDak9pmbavaiaPfcsGcdtfydbaxaDEhsaDThDdndnadcd9hmbabarcetfgPaH87ebaPcdfaz87ebaPclfas87ebxekabarcdtfgPaHBdbaPclfazBdbaPcwfasBdbkaxaDfhxavc;abfalcitfgPasBdbaPazBdlavaicdtfasBdbavc;abfalcefcsGglcitfgPaHBdbaPasBdlaiaDfhialcefhlxdkdndnaDcsSmbamaDfaDc987fcefhmxekaocefhDao8SbbgscFeGhPdndnascu9mmbaDhoxekaocvfhoaPcFbGhPcrhsdninaD8SbbgOcFbGastaPVhPaOcu9kmeaDcefhDascrfgsc8J9hmbxdkkaDcefhokaPce4cbaPceG9R7amfhmkdndnadcd9hmbabarcetfgDaH87ebaDcdfaz87ebaDclfam87ebxekabarcdtfgDaHBdbaDclfazBdbaDcwfamBdbkavc;abfalcitfgDamBdbaDazBdlavaicdtfamBdbavc;abfalcefcsGglcitfgDaHBdbaDamBdlaicefhialcefhlxekdnaDcpe0mbaxcefgOavaiaqaDcsGfRbbgscl49RcsGcdtfydbascz6gPEhDavaias9RcsGcdtfydbaOaPfgzascsGgOEhsaOThOdndnadcd9hmbabarcetfgHax87ebaHcdfaD87ebaHclfas87ebxekabarcdtfgHaxBdbaHclfaDBdbaHcwfasBdbkavaicdtfaxBdbavc;abfalcitfgHaDBdbaHaxBdlavaicefgicsGcdtfaDBdbavc;abfalcefcsGcitfgHasBdbaHaDBdlavaiaPfcsGgicdtfasBdbavc;abfalcdfcsGglcitfgDaxBdbaDasBdlalcefhlaiaOfhiazaOfhxxekaxcbaoRbbgHEgAaDc;:eSgDfhzaHcsGhCaHcl4hXdndnaHcs0mbazcefhOxekazhOavaiaX9RcsGcdtfydbhzkdndnaCmbaOcefhxxekaOhxavaiaH9RcsGcdtfydbhOkdndnaDTmbaocefhDxekaocdfhDao8SbegPcFeGhsdnaPcu9kmbaocofhAascFbGhscrhodninaD8SbbgPcFbGaotasVhsaPcu9kmeaDcefhDaocrfgoc8J9hmbkaAhDxekaDcefhDkasce4cbasceG9R7amfgmhAkdndnaXcsSmbaDhsxekaDcefhsaD8SbbgocFeGhPdnaocu9kmbaDcvfhzaPcFbGhPcrhodninas8SbbgDcFbGaotaPVhPaDcu9kmeascefhsaocrfgoc8J9hmbkazhsxekascefhskaPce4cbaPceG9R7amfgmhzkdndnaCcsSmbashoxekascefhoas8SbbgDcFeGhPdnaDcu9kmbascvfhOaPcFbGhPcrhDdninao8SbbgscFbGaDtaPVhPascu9kmeaocefhoaDcrfgDc8J9hmbkaOhoxekaocefhokaPce4cbaPceG9R7amfgmhOkdndnadcd9hmbabarcetfgDaA87ebaDcdfaz87ebaDclfaO87ebxekabarcdtfgDaABdbaDclfazBdbaDcwfaOBdbkavc;abfalcitfgDazBdbaDaABdlavaicdtfaABdbavc;abfalcefcsGcitfgDaOBdbaDazBdlavaicefgicsGcdtfazBdbavc;abfalcdfcsGcitfgDaABdbaDaOBdlavaiaHcz6aXcsSVfgicsGcdtfaOBdbaiaCTaCcsSVfhialcifhlkawcefhwalcsGhlaicsGhiarcifgrae6mbkkcbc99aoaqSEhokavc;aef8Kjjjjbaok:flevu8Jjjjjbcz9Rhvc9:hodnaecvfal0mbcuhoaiRbbc;:eGc;qe9hmbav9cb83iwaicefhraialfc98fhwdnaeTmbdnadcdSmbcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcdtfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfglBdbaoalBdbaDcefgDae9hmbxdkkcbhDindnaraw6mbc9:skarcefhoar8SbbglcFeGhidndnalcu9mmbaohrxekarcvfhraicFbGhicrhldninao8SbbgdcFbGaltaiVhiadcu9kmeaocefhoalcrfglc8J9hmbxdkkaocefhrkabaDcetfaic8Etc8F91aicd47avcwfaiceGcdtVgoydbfgl87ebaoalBdbaDcefgDae9hmbkkcbc99arawSEhokaok:Lvoeue99dud99eud99dndnadcl9hmbaeTmeindndnabcdfgd8Sbb:Yab8Sbbgi:Ygl:l:tabcefgv8Sbbgo:Ygr:l:tgwJbb;:9cawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai86bbdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad86bbdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad86bbabclfhbaecufgembxdkkaeTmbindndnabclfgd8Ueb:Yab8Uebgi:Ygl:l:tabcdfgv8Uebgo:Ygr:l:tgwJb;:FSawawNJbbbbawawJbbbb9GgDEgq:mgkaqaicb9iEalMgwawNakaqaocb9iEarMgqaqNMM:r:vglNJbbbZJbbb:;aDEMgr:lJbbb9p9DTmbar:Ohixekcjjjj94hikadai87ebdndnaqalNJbbbZJbbb:;aqJbbbb9GEMgq:lJbbb9p9DTmbaq:Ohdxekcjjjj94hdkavad87ebdndnawalNJbbbZJbbb:;awJbbbb9GEMgw:lJbbb9p9DTmbaw:Ohdxekcjjjj94hdkabad87ebabcwfhbaecufgembkkk;siliui99iue99dnaeTmbcbhiabhlindndnJ;Zl81Zalcof8UebgvciV:Y:vgoal8Ueb:YNgrJb;:FSNJbbbZJbbb:;arJbbbb9GEMgw:lJbbb9p9DTmbaw:OhDxekcjjjj94hDkalclf8Uebhqalcdf8UebhkabaiavcefciGfcetfaD87ebdndnaoak:YNgwJb;:FSNJbbbZJbbb:;awJbbbb9GEMgx:lJbbb9p9DTmbax:Ohkxekcjjjj94hkkabaiavcdfciGfcetfak87ebdndnaoaq:YNgoJb;:FSNJbbbZJbbb:;aoJbbbb9GEMgx:lJbbb9p9DTmbax:Ohqxekcjjjj94hqkabaiavcufciGfcetfaq87ebdndnJbbjZararN:tawawN:taoaoN:tgrJbbbbarJbbbb9GE:rJb;:FSNJbbbZMgr:lJbbb9p9DTmbar:Ohqxekcjjjj94hqkabaiavciGfcetfaq87ebalcwfhlaiclfhiaecufgembkkk9mbdnadcd4ae2gdTmbinababydbgecwtcw91:Yaece91cjjj98Gcjjj;8if::NUdbabclfhbadcufgdmbkkk9teiucbcbydj1jjbgeabcifc98GfgbBdj1jjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabkkkebcjwklz9Kbb";
                    WebAssembly.instantiate(function(e) {
                        for (var a = new Uint8Array(e.length), s = 0; s < e.length; ++s) {
                            var r = e.charCodeAt(s);
                            a[s] = r > 96 ? r - 97 : r > 64 ? r - 39 : r + 4
                        }
                        var n = 0;
                        for (s = 0; s < e.length; ++s) a[n++] = a[s] < 60 ? t[a[s]] : 64 * (a[s] - 60) + a[++s];
                        return a.buffer.slice(0, n)
                    }(a), {}).then((function(e) {
                        e.instance.exports.__wasm_call_ctors()
                    }))
                }();
            var s = function() {
                var e, t = new Uint8Array([32, 0, 65, 2, 1, 106, 34, 33, 3, 128, 11, 4, 13, 64, 6, 253, 10, 7, 15, 116, 127, 5, 8, 12, 40, 16, 19, 54, 20, 9, 27, 255, 113, 17, 42, 67, 24, 23, 146, 148, 18, 14, 22, 45, 70, 69, 56, 114, 101, 21, 25, 63, 75, 136, 108, 28, 118, 29, 73, 115]);
                if ("object" != typeof WebAssembly) return {
                    supported: !1
                };
                var a = WebAssembly.instantiate(function(e) {
                    for (var a = new Uint8Array(e.length), s = 0; s < e.length; ++s) {
                        var r = e.charCodeAt(s);
                        a[s] = r > 96 ? r - 97 : r > 64 ? r - 39 : r + 4
                    }
                    var n = 0;
                    for (s = 0; s < e.length; ++s) a[n++] = a[s] < 60 ? t[a[s]] : 64 * (a[s] - 60) + a[++s];
                    return a.buffer.slice(0, n)
                }("b9H79Tebbbe9Ek9Geueu9Geub9Gbb9GPuuuuuuuuuuu99uueu9Gvuuuuub9Gluuuub9Gquuuuuuu99uueu9Gwuuuuuu99ueu9Giuuue999Gluuuueu9GiuuueuizsdilvoirwDbqqbeqlve9Weiiviebeoweuec:G;jekr:Tewo9TW9T9VV95dbH9F9F939H79T9F9J9H229F9Jt9VV7bbz9TW79O9V9Wt9F79P9T9W29P9M95bl8E9TW79O9V9Wt9F79P9T9W29P9M959x9Pt9OcttV9P9I91tW7bvQ9TW79O9V9Wt9F79P9T9W29P9M959q9V9P9Ut7boX9TW79O9V9Wt9F79P9T9W29P9M959t9J9H2Wbra9TW79O9V9Wt9F9V9Wt9P9T9P96W9wWVtW94SWt9J9O9sW9T9H9Wbwl79IV9RbDDwebcekdxmq::9Usdbk;i6iKuY99Ou8Jjjjjbc;W;ab9RgP8KjjjjbaPcwfcbc;Kbz:ljjjb8AaPcualcefgscdtascFFFFi0Ecbyd1:jjjbHjjjjbbgzBdwaPceBd9OaPazBdbaPcuadcitadcFFFFe0Ecbyd1:jjjbHjjjjbbgHBdxaPcdBd9OaPaHBdlaPaeadalcbz:cjjjbaPcualcdtgOalcFFFFi0EgAcbyd1:jjjbHjjjjbbgCBdzaPciBd9OaPaAcbyd1:jjjbHjjjjbbgXBdCaPclBd9Oalcd4alfhQcehLinaLgscethLasaQ6mbkcbhKaPcuascdtgLascFFFFi0Ecbyd1:jjjbHjjjjbbgQBdKaPcvBd9OaQcFeaLz:ljjjbhYdnalTmbavcd4h8AascufhEinaiaKa8A2cdtfg3ydlgscH4as7c:F:b:DD2a3ydbgscH4as7c;D;O:B8J27a3ydwgscH4as7c:3F;N8N27hQcbhsdndninaYaQaEGgQcdtfg5ydbgLcuSmeaiaLa8A2cdtfa3cxz:ojjjbTmdascefgsaQfhQasaE9nmbxdkka5aKBdbaKhLkaCaKcdtfaLBdbaKcefgKal9hmbkcbhsaXhLinaLasBdbaLclfhLalascefgs9hmbkcbhsaChLaXhQindnasaLydbgESmbaQaXaEcdtfgEydbBdbaEasBdbkaLclfhLaQclfhQalascefgs9hmbkkcbh8EaYcbyd:m:jjjbH:bjjjbbaPclBd9OaPalcbyd1:jjjbHjjjjbbgEBdKaPcvBd9OaPaAcbyd1:jjjbHjjjjbbgsBd3aPcoBd9OaPaAcbyd1:jjjbHjjjjbbgLBdaaPcrBd9OascFeaOz:ljjjbh8FaLcFeaOz:ljjjbhadnalTmbaHcwfhhindnaza8EgQcefg8Ecdtfydbg3azaQcdtgsfydbgLSmba3aL9RhOaHaLcitfhgaaasfh8Ja8FasfhKcbh8Aindndnaga8Acitfydbg5aQ9hmbaKaQBdba8JaQBdbxekdnaza5cdtg8KfgsclfydbgLasydbgsSmbaHascitg3fydbaQSmeaLas9Rh8Lascu7aLfhYaha3fhLcbhsinaYasSmeascefhsaLydbh3aLcwfhLa3aQ9hmbkasa8L6mekaaa8KfgsaQa5asydbcuSEBdbaKa5aQaKydbcuSEBdbka8Acefg8AaO9hmbkka8Eal9hmbkaChLaXhQaah3a8Fh8AcbhsindndnasaLydbg59hmbdnasaQydbg59hmba8Aydbh5dna3ydbgYcu9hmba5cu9hmbaEasfcb86bbxikaEasfhKdnasaYSmbasa5SmbaKce86bbxikaKcl86bbxdkdnasaXa5cdtgYfydb9hmbdna3ydbgKcuSmbasaKSmba8AydbgOcuSmbasaOSmbaaaYfydbggcuSmbaga5Smba8FaYfydbgYcuSmbaYa5SmbdnaCaKcdtfydbaCaYcdtfydb9hmbaCaOcdtfydbaCagcdtfydb9hmbaEasfcd86bbxlkaEasfcl86bbxikaEasfcl86bbxdkaEasfcl86bbxekaEasfaEa5fRbb86bbkaLclfhLaQclfhQa3clfh3a8Aclfh8Aalascefgs9hmbkaxceGTmbaEhsalhLindnasRbbce9hmbascl86bbkascefhsaLcufgLmbkkcualcx2alc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbh8JaPcwfaPyd9Ogscdtfa8JBdbaPascefgOBd9Oa8Jaialavz:djjjbdndnaDmbcbhvxekcbh5aPcwfaOcdtfcuaDal2gLcdtaLcFFFFi0Ecbyd1:jjjbHjjjjbbgvBdbaPascdfgOBd9OalTmbarcd4cdthYaDcdthKavh8AinaohsawhLa8AhQaDh3inaQasIdbaLIdbNUdbasclfhsaLclfhLaQclfhQa3cufg3mbkaoaYfhoa8AaKfh8Aa5cefg5al9hmbkkaPcwfaOcdtfcualc8S2gsalc;D;O;f8U0EgQcbyd1:jjjbHjjjjbbgLBdbaPaOcefg3Bd9OaLcbasz:ljjjbh8EdndndnaDTmbaPcwfa3cdtfaQcbyd1:jjjbHjjjjbbgoBdbaPaOcdfgLBd9Oaocbasz:ljjjb8AaPcwfaLcdtfcuaDal2gscltgLascFFFFb0Ecbyd1:jjjbHjjjjbbgwBdbaPaOcifBd9OawcbaLz:ljjjb8AadmexdkcbhocbhwadTmekcbh8AaehLindna8JaLclfydbg5cx2fgsIdba8JaLydbgYcx2fgQIdbg8M:tg8Na8JaLcwfydbgKcx2fg3IdlaQIdlgy:tg8PNa3Idba8M:tgIasIdlay:tg8RN:tg8Sa8SNa8Ra3IdwaQIdwgR:tg8UNa8PasIdwaR:tg8RN:tg8Pa8PNa8RaINa8Ua8NN:tg8Na8NNMM:rgIJbbbb9ETmba8SaI:vh8Sa8NaI:vh8Na8PaI:vh8Pka8EaCaYcdtfydbc8S2fgsa8PaI:rgIa8PNNg8RasIdbMUdbasa8NaIa8NNg8VNg8UasIdlMUdlasa8SaIa8SNg8WNg8XasIdwMUdwasa8Va8PNg8VasIdxMUdxasa8Wa8PNg8YasIdzMUdzasa8Wa8NNg8WasIdCMUdCasa8PaIa8SaRNa8Pa8MNaya8NNMM:mgyNg8MNg8PasIdKMUdKasa8Na8MNg8NasId3MUd3asa8Sa8MNg8SasIdaMUdaasa8MayNg8MasId8KMUd8KasaIasIdyMUdya8EaCa5cdtfydbc8S2fgsa8RasIdbMUdbasa8UasIdlMUdlasa8XasIdwMUdwasa8VasIdxMUdxasa8YasIdzMUdzasa8WasIdCMUdCasa8PasIdKMUdKasa8NasId3MUd3asa8SasIdaMUdaasa8MasId8KMUd8KasaIasIdyMUdya8EaCaKcdtfydbc8S2fgsa8RasIdbMUdbasa8UasIdlMUdlasa8XasIdwMUdwasa8VasIdxMUdxasa8YasIdzMUdzasa8WasIdCMUdCasa8PasIdKMUdKasa8NasId3MUd3asa8SasIdaMUdaasa8MasId8KMUd8KasaIasIdyMUdyaLcxfhLa8Acifg8Aad6mbkcbh5aehYincbhLinaEaeaLc:G1jjbfydba5fcdtfydbgQfRbbhsdndnaEaYaLfydbg3fRbbg8Ac99fcFeGcpe0mbasceSmbascd9hmekdna8AcufcFeGce0mba8Fa3cdtfydbaQ9hmekdnascufcFeGce0mbaaaQcdtfydba39hmekdna8Acv2asfc:W1jjbfRbbTmbaCaQcdtfydbaCa3cdtfydb0mekJbbacJbbjZasceSEhIa8AceShOa8JaeaLc:K1jjbfydba5fcdtfydbcx2fhsdna8JaQcx2fg8AIdwa8Ja3cx2fgKIdwgy:tg8Pa8PNa8AIdbaKIdbgR:tg8Na8NNa8AIdlaKIdlg8R:tg8Sa8SNMM:rg8MJbbbb9ETmba8Pa8M:vh8Pa8Sa8M:vh8Sa8Na8M:vh8NkJbbacaIaOEh8WdnasIdway:tgIa8PaIa8PNasIdbaR:tg8Xa8NNa8SasIdla8R:tg8VNMMg8UN:tgIaINa8Xa8Na8UN:tg8Pa8PNa8Va8Sa8UN:tg8Na8NNMM:rg8SJbbbb9ETmbaIa8S:vhIa8Na8S:vh8Na8Pa8S:vh8Pka8EaCa3cdtfydbc8S2fgsa8Pa8Wa8MNg8Sa8PNNg8UasIdbMUdbasa8Na8Sa8NNg8WNg8XasIdlMUdlasaIa8SaINg8MNg8VasIdwMUdwasa8Wa8PNg8WasIdxMUdxasa8Ma8PNg8YasIdzMUdzasa8Ma8NNg8ZasIdCMUdCasa8Pa8SaIayNa8PaRNa8Ra8NNMM:mgyNg8MNg8PasIdKMUdKasa8Na8MNg8NasId3MUd3asaIa8MNgIasIdaMUdaasa8MayNg8MasId8KMUd8Kasa8SasIdyMUdya8EaCaQcdtfydbc8S2fgsa8UasIdbMUdbasa8XasIdlMUdlasa8VasIdwMUdwasa8WasIdxMUdxasa8YasIdzMUdzasa8ZasIdCMUdCasa8PasIdKMUdKasa8NasId3MUd3asaIasIdaMUdaasa8MasId8KMUd8Kasa8SasIdyMUdykaLclfgLcx9hmbkaYcxfhYa5cifg5ad6mbkaDTmbcbhYinJbbbbhRa8JaeaYcdtfgsclfydbgKcx2fgLIdwa8JasydbgOcx2fgQIdwg8V:tg8Na8NNaLIdbaQIdbg8Y:tgIaINaLIdlaQIdlg8Z:tg8Sa8SNMMg8Wa8Jascwfydbggcx2fgsIdwa8V:tg8MNa8Na8Na8MNaIasIdba8Y:tgyNa8SasIdla8Z:tg8RNMMg8PN:tJbbbbJbbjZa8Wa8Ma8MNayayNa8Ra8RNMMg8XNa8Pa8PN:tg8U:va8UJbbbb9BEg8UNh80a8Xa8NNa8Ma8PN:ta8UNh81a8Wa8RNa8Sa8PN:ta8UNhBa8Xa8SNa8Ra8PN:ta8UNh83a8WayNaIa8PN:ta8UNhUa8XaINaya8PN:ta8UNh85aIa8RNaya8SN:tg8Pa8PNa8Sa8MNa8Ra8NN:tg8Pa8PNa8NayNa8MaIN:tg8Pa8PNMM:r:rh8PavaOaD2cdtfhLavagaD2cdtfhQavaKaD2cdtfh3a8V:mh86a8Z:mh87a8Y:mh88cbh8AaDh5Jbbbbh8RJbbbbh8UJbbbbh8WJbbbbh8XJbbbbh8VJbbbbh8YJbbbbh8ZJbbbbh89Jbbbbh8:inaPc;Wbfa8Afgscwfa8Pa81a3IdbaLIdbg8M:tg8SNa80aQIdba8M:tgyNMg8NNUdbasclfa8Pa83a8SNaBayNMgINUdbasa8Pa85a8SNaUayNMg8SNUdbascxfa8Pa86a8NNa87aINa8Ma88a8SNMMMg8MNUdba8Pa8NaINNa8XMh8Xa8Pa8Na8SNNa8VMh8Va8PaIa8SNNa8YMh8Ya8Pa8Ma8MNNaRMhRa8Pa8Na8MNNa8RMh8Ra8PaIa8MNNa8UMh8Ua8Pa8Sa8MNNa8WMh8Wa8Pa8Na8NNNa8ZMh8Za8PaIaINNa89Mh89a8Pa8Sa8SNNa8:Mh8:aLclfhLa3clfh3aQclfhQa8Aczfh8Aa5cufg5mbkaoaCaOcdtfydbgLc8S2fgsa8:asIdbMUdbasa89asIdlMUdlasa8ZasIdwMUdwasa8YasIdxMUdxasa8VasIdzMUdzasa8XasIdCMUdCasa8WasIdKMUdKasa8UasId3MUd3asa8RasIdaMUdaasaRasId8KMUd8Kasa8PasIdyMUdyaoaCaKcdtfydbgKc8S2fgsa8:asIdbMUdbasa89asIdlMUdlasa8ZasIdwMUdwasa8YasIdxMUdxasa8VasIdzMUdzasa8XasIdCMUdCasa8WasIdKMUdKasa8UasId3MUd3asa8RasIdaMUdaasaRasId8KMUd8Kasa8PasIdyMUdyaoaCagcdtfydbgOc8S2fgsa8:asIdbMUdbasa89asIdlMUdlasa8ZasIdwMUdwasa8YasIdxMUdxasa8VasIdzMUdzasa8XasIdCMUdCasa8WasIdKMUdKasa8UasId3MUd3asa8RasIdaMUdaasaRasId8KMUd8Kasa8PasIdyMUdyawaLaD2cltfh5cbhLaDh3ina5aLfgsaPc;WbfaLfgQIdbasIdbMUdbasclfg8AaQclfIdba8AIdbMUdbascwfg8AaQcwfIdba8AIdbMUdbascxfgsaQcxfIdbasIdbMUdbaLczfhLa3cufg3mbkawaKaD2cltfh5cbhLaDh3ina5aLfgsaPc;WbfaLfgQIdbasIdbMUdbasclfg8AaQclfIdba8AIdbMUdbascwfg8AaQcwfIdba8AIdbMUdbascxfgsaQcxfIdbasIdbMUdbaLczfhLa3cufg3mbkawaOaD2cltfh5cbhLaDh3ina5aLfgsaPc;WbfaLfgQIdbasIdbMUdbasclfg8AaQclfIdba8AIdbMUdbascwfg8AaQcwfIdba8AIdbMUdbascxfgsaQcxfIdbasIdbMUdbaLczfhLa3cufg3mbkaYcifgYad6mbkkdnabaeSmbabaeadcdtz:kjjjb8AkaPydbhZcbhsdnalTmbaZclfhsaZydbh3aEhLalh8AcbhQincbasydbg5a39RaLRbbcpeGEaQfhQaLcefhLasclfhsa5h3a8Acufg8AmbkaQce4hskcuadas9Rcifgrcx2arc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbh8LaPcwfaPyd9Ogscdtfa8LBdbaPascefgLBd9OaPcwfaLcdtfcuarcdtarcFFFFi0Ecbyd1:jjjbHjjjjbbgxBdbaPascdfgLBd9OaPcwfaLcdtfaAcbyd1:jjjbHjjjjbbgHBdbaPascifgLBd9OaPcwfaLcdtfalcbyd1:jjjbHjjjjbbgnBdbaPasclfBd9OJbbbbh8Ydnadaq9nmbdnarci6mbakakNh8VaDclthca8Lcwfh9cJbbbbh8YinaPabadghalaCz:cjjjbabhOcbhzcbhKincbhsindnaCaOasfydbgQcdtgYfydbg8AaCabasc;m1jjbfydbaKfcdtfydbgLcdtfydbg5SmbaEaLfRbbgecv2aEaQfRbbg3fc;G1jjbfRbbg8Ka3cv2aefggc;G1jjbfRbbgiVcFeGTmbdnagc:W1jjbfRbbTmba5a8A0mekdna3ae9hmba3cufcFeGce0mba8FaYfydbaL9hmeka8Lazcx2fg3aLaQaicFeGg8AEBdla3aQaLa8AEBdba3a8Aa8KGcb9hBdwazcefhzkasclfgscx9hmbkdnaKcifgKah9pmbaOcxfhOazcifar9nmekkdnazmbahhdxikcbheinJbbbbJbbjZa8EaCa8Laecx2fg3ydlg8Aa3ydbg5a3ydwgLEgKcdtfydbg8Kc8S2gifgsIdyg8P:va8PJbbbb9BEasIdwa8Ja5a8AaLEgYcx2fgLIdwg8SNasIdzaLIdbg8MNasIdaMg8Pa8PMMa8SNasIdlaLIdlgyNasIdCa8SNasId3Mg8Pa8PMMayNasIdba8MNasIdxayNasIdKMg8Pa8PMMa8MNasId8KMMM:lNh8WJbbbbJbbjZa8EaCa5cdtfydbgdc8S2gQfgsIdyg8P:va8PJbbbb9BEasIdwa8Ja8Acx2fgLIdwgINasIdzaLIdbgRNasIdaMg8Pa8PMMaINasIdlaLIdlg8RNasIdCaINasId3Mg8Pa8PMMa8RNasIdbaRNasIdxa8RNasIdKMg8Pa8PMMaRNasId8KMMM:lNh8Xa3cwfhOa3clfhgdnaDTmbaoaQfgQIdwaINaQIdzaRNaQIdaMg8Pa8PMMaINaQIdla8RNaQIdCaINaQId3Mg8Pa8PMMa8RNaQIdbaRNaQIdxa8RNaQIdKMg8Pa8PMMaRNaQId8KMMMh8Nava8AaD2cdtfhLawadaD2cltfhsaQIdyh8UaDhQinaLIdbg8PJbbb;aNascxfIdbaIascwfIdbNaRasIdbNa8RasclfIdbNMMMNa8Pa8PNa8UNa8NMMh8NaLclfhLasczfhsaQcufgQmbkaoaifgQIdwa8SNaQIdza8MNaQIdaMg8Pa8PMMa8SNaQIdlayNaQIdCa8SNaQId3Mg8Pa8PMMayNaQIdba8MNaQIdxayNaQIdKMg8Pa8PMMa8MNaQId8KMMMhIavaYaD2cdtfhLawa8KaD2cltfhsaQIdyhRaDhQinaLIdbg8PJbbb;aNascxfIdba8SascwfIdbNa8MasIdbNayasclfIdbNMMMNa8Pa8PNaRNaIMMhIaLclfhLasczfhsaQcufgQmbka8WaI:lMh8Wa8Xa8N:lMh8Xkaga8AaYa8Xa8W9FgsEBdba3a5aKasEBdbaOa8Xa8WasEUdbaecefgeaz9hmbkaPc;Wbfcbcj;abz:ljjjb8Aa9chsazhLinaPc;WbfasydbcO4c;8ZGfgQaQydbcefBdbascxfhsaLcufgLmbkcbhscbhLinaPc;WbfasfgQydbh3aQaLBdba3aLfhLasclfgscj;ab9hmbkcbhsa9chLinaPc;WbfaLydbcO4c;8ZGfgQaQydbgQcefBdbaxaQcdtfasBdbaLcxfhLazascefgs9hmbkahaq9RgQci9UhJdnalTmbcbhsaHhLinaLasBdbaLclfhLalascefgs9hmbkkcbh9eancbalz:ljjjbhTaQcO9UhSaJce4h9haPydlh9icbhicbhgdnina8Laxagcdtfydbcx2fgOIdwg8Na8V9EmeaiaJ9pmeJFFuuh8Pdna9haz9pmba8Laxa9hcdtfydbcx2fIdwJbb;aZNh8Pkdna8Na8P9ETmbaiaS0mdkdnaTaCaOydlg6cdtg9kfydbg3fg0RbbaTaCaOydbgKcdtg9mfydbg9nfg9oRbbVmbdnaZa9ncdtfgsclfydbgLasydbgsSmbaLas9Rh5a9iascitfhsa8Ja3cx2fgYcwfhdaYclfhAa8Ja9ncx2fg8Kcwfh9pa8Kclfh9qcbhLcehednindnaHasydbcdtfydbgQa3SmbaHasclfydbcdtfydbg8Aa3SmbaQa8ASmba8Ja8Acx2fg8AIdba8JaQcx2fgQIdbgI:tg8Pa9qIdbaQIdlg8S:tg8MNa8KIdbaI:tgya8AIdla8S:tg8NN:ta8PaAIdba8S:tgRNaYIdbaI:tg8Ra8NN:tNa8Na9pIdbaQIdwg8S:tg8UNa8Ma8AIdwa8S:tgIN:ta8NadIdba8S:tg8SNaRaIN:tNaIayNa8Ua8PN:taIa8RNa8Sa8PN:tNMMJbbbb9FmdkascwfhsaLcefgLa56hea5aL9hmbkkaeceGTmba9hcefh9hxeka8Ea3c8S2gQfgsa8Ea9nc8S2g8AfgLIdbasIdbMUdbasaLIdlasIdlMUdlasaLIdwasIdwMUdwasaLIdxasIdxMUdxasaLIdzasIdzMUdzasaLIdCasIdCMUdCasaLIdKasIdKMUdKasaLId3asId3MUd3asaLIdaasIdaMUdaasaLId8KasId8KMUd8KasaLIdyasIdyMUdydnaDTmbaoaQfgsaoa8AfgLIdbasIdbMUdbasaLIdlasIdlMUdlasaLIdwasIdwMUdwasaLIdxasIdxMUdxasaLIdzasIdzMUdzasaLIdCasIdCMUdCasaLIdKasIdKMUdKasaLId3asId3MUd3asaLIdaasIdaMUdaasaLId8KasId8KMUd8KasaLIdyasIdyMUdyaca9n2heaca32hYawhLaDh8AinaLaYfgsaLaefgQIdbasIdbMUdbasclfg5aQclfIdba5IdbMUdbascwfg5aQcwfIdba5IdbMUdbascxfgsaQcxfIdbasIdbMUdbaLczfhLa8Acufg8AmbkkaOcwfhLdndndndnaEaKfgQRbbc9:fPdebdkaKhsinaHascdtgsfa3BdbaXasfydbgsaK9hmbxikkaXa9kfydbhsaXa9mfydbhKaHa9mfa6Bdbash6kaHaKcdtfa6Bdbka9oce86bba0ce86bbaLIdbg8Pa8Ya8Ya8P9DEh8Ya9ecefh9ececdaQRbbceSEaifhikagcefggaz9hmbkkdna9embahhdxikdnalTmbcbhLa8FhsindnasydbgQcuSmbdnaLaHaQcdtg3fydbgQ9hmba8Fa3fydbhQkasaQBdbkasclfhsalaLcefgL9hmbkcbhLaahsindnasydbgQcuSmbdnaLaHaQcdtg3fydbgQ9hmbaaa3fydbhQkasaQBdbkasclfhsalaLcefgL9hmbkkcbhdabhscbh8AindnaHasydbcdtfydbgLaHasclfydbcdtfydbgQSmbaLaHascwfydbcdtfydbg3SmbaQa3Smbabadcdtfg5aLBdba5clfaQBdba5cwfa3Bdbadcifhdkascxfhsa8Acifg8Aah6mbkadaq9nmdxbkkaPabadalaCz:cjjjbkdnamTmbama8Y:rUdbkaPyd9OgscdtaPcwffc98fhCdninasTmeaCydbcbyd:m:jjjbH:bjjjbbaCc98fhCascufhsxbkkaPc;W;abf8Kjjjjbadk;:ieouabydlhvabydbclfcbaicdtz:ljjjbhoadci9UhrdnadTmbdnalTmbaehwadhDinaoalawydbcdtfydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbxdkkaehwadhDinaoawydbcdtfgqaqydbcefBdbawclfhwaDcufgDmbkkdnaiTmbcbhDaohwinawydbhqawaDBdbawclfhwaqaDfhDaicufgimbkkdnadci6mbarcearce0EhdinaecwfydbhwaeclfydbhDaeydbhidnalTmbalawcdtfydbhwalaDcdtfydbhDalaicdtfydbhikavaoaicdtfgqydbcitfaDBdbavaqydbcitfawBdlaqaqydbcefBdbavaoaDcdtfgqydbcitfawBdbavaqydbcitfaiBdlaqaqydbcefBdbavaoawcdtfgwydbcitfaiBdbavawydbcitfaDBdlawawydbcefBdbaecxfheadcufgdmbkkabydbcbBdbk:Zldouv998Jjjjjbca9Rglczfcwfcbyd11jjbBdbalcb8Pdj1jjb83izalcwfcbydN1jjbBdbalcb8Pd:m1jjb83ibdnadTmbaicd4hvdnabTmbavcdthocbhraehwinabarcx2fgiaearav2cdtfgDIdbUdbaiaDIdlUdlaiaDIdwUdwcbhiinalczfaifgDawaifIdbgqaDIdbgkakaq9EEUdbalaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkawaofhwarcefgrad9hmbxdkkavcdthrcbhwincbhiinalczfaifgDaeaifIdbgqaDIdbgkakaq9EEUdbalaifgDaqaDIdbgkakaq9DEUdbaiclfgicx9hmbkaearfheawcefgwad9hmbkkdnabTmbadTmbJbbbbJbbjZalIdbalIdzgk:tJbbbb:xgqalIdlalIdCgx:tgmamaq9DEgqalIdwalIdKgm:tgPaPaq9DEgq:vaqJbbbb9BEhqinabaqabIdbak:tNUdbabclfgiaqaiIdbax:tNUdbabcwfgiaqaiIdbam:tNUdbabcxfhbadcufgdmbkkk8KbabaeadaialavcbcbcbcbaoarawaDz:bjjjbk8KbabaeadaialavaoarawaDaqakaxamz:bjjjbk;lOowud99wue99iul998Jjjjjbc;Wb9Rgw8KjjjjbdndnarmbcbhDxekawcwfcbc;Kbz:ljjjb8Aawcuadcx2adc;v:Q;v:Qe0Ecbyd1:jjjbHjjjjbbgqBdwawceBd9Oaqaeadaiz:djjjbawcuadcdtadcFFFFi0Egkcbyd1:jjjbHjjjjbbgxBdxawcdBd9Oadcd4adfhmceheinaegicetheaiam6mbkcbhmawcuaicdtgPaicFFFFi0Ecbyd1:jjjbHjjjjbbgsBdzawciBd9Odndnar:Zgz:rJbbbZMgH:lJbbb9p9DTmbaH:Ohexekcjjjj94hekaicufhOc:bwhAcbhCcbhXadhQinaChLaeaAgKcufaeaK9iEamgDcefaeaD9kEhYdndnadTmbaYcuf:YhHaqhiaxheadhmindndnaiIdbaHNJbbbZMg8A:lJbbb9p9DTmba8A:OhAxekcjjjj94hAkaAcCthAdndnaiclfIdbaHNJbbbZMg8A:lJbbb9p9DTmba8A:OhCxekcjjjj94hCkaCcqtaAVhAdndnaicwfIdbaHNJbbbZMg8A:lJbbb9p9DTmba8A:OhCxekcjjjj94hCkaeaAaCVBdbaicxfhiaeclfheamcufgmmbkascFeaPz:ljjjbhEcbh3cbh5indnaEaxa5cdtfydbgAcm4aA7c:v;t;h;Ev2gics4ai7aOGgmcdtfgCydbgecuSmbaeaASmbcehiinaEamaifaOGgmcdtfgCydbgecuSmeaicefhiaeaA9hmbkkaCaABdba3aecuSfh3a5cefg5ad9hmbxdkkascFeaPz:ljjjb8Acbh3kaDaYa3ar0giEhmaLa3aiEhCdna3arSmbaYaKaiEgAam9Rcd9imbdndnaXcl0mbdnaQ:ZgHaL:Zg8A:taY:Yg8EaD:Y:tg8Fa8EaK:Y:tgaa3:Zghaz:tNNNaHaz:taaNa8Aah:tNa8Aaz:ta8FNahaH:tNM:va8EMJbbbZMgH:lJbbb9p9DTmbaH:Ohexdkcjjjj94hexekamaAfcd9Theka3aQaiEhQaXcefgXcs9hmekkdndnaCmbcihicbhDxekcbhiawakcbyd1:jjjbHjjjjbbg5BdCawclBd9OdndnadTmbamcuf:YhHaqhiaxheadhmindndnaiIdbaHNJbbbZMg8A:lJbbb9p9DTmba8A:OhAxekcjjjj94hAkaAcCthAdndnaiclfIdbaHNJbbbZMg8A:lJbbb9p9DTmba8A:OhCxekcjjjj94hCkaCcqtaAVhAdndnaicwfIdbaHNJbbbZMg8A:lJbbb9p9DTmba8A:OhCxekcjjjj94hCkaeaAaCVBdbaicxfhiaeclfheamcufgmmbkascFeaPz:ljjjbhEcbhDcbh3inaxa3cdtgYfydbgAcm4aA7c:v;t;h;Ev2gics4ai7hecbhidndninaEaeaOGgmcdtfgCydbgecuSmednaxaecdtgCfydbaASmbaicefgiamfheaiaO9nmekka5aCfydbhixekaCa3BdbaDhiaDcefhDka5aYfaiBdba3cefg3ad9hmbkcuaDc32giaDc;j:KM;jb0EhexekascFeaPz:ljjjb8AcbhDcbhekawaecbyd1:jjjbHjjjjbbgeBdKawcvBd9Oaecbaiz:ljjjbhOavcd4hxdnadTmbaxcdth3a5hmalhAaqheadhEinaOamydbc32fgiaeIdbaiIdbMUdbaiaeclfIdbaiIdlMUdlaiaecwfIdbaiIdwMUdwaiaAc;81jjbalEgCIdbaiIdxMUdxaiaCIdlaiIdzMUdzaiaCIdwaiIdCMUdCaiaiIdKJbbjZMUdKamclfhmaAa3fhAaecxfheaEcufgEmbkkdnaDTmbaOcxfhiaDheinaictfgmamIdbJbbbbJbbjZaicxfIdbgH:vaHJbbbb9BEgHNUdbaic94fgmaHamIdbNUdbaic98fgmaHamIdbNUdbaiaHaiIdbNUdbaiclfgmaHamIdbNUdbaicwfgmaHamIdbNUdbaic3fhiaecufgembkkcbhAawcuaDcdtgYaDcFFFFi0Egicbyd1:jjjbHjjjjbbgeBd3awcoBd9Oawaicbyd1:jjjbHjjjjbbgEBdaaecFeaYz:ljjjbh3dnadTmbaoaoNh8Aaxcdthxalheina8Aaec;81jjbalEgmIdwaOa5ydbgCc32fgiIdC:tgHaHNamIdbaiIdx:tgHaHNamIdlaiIdz:tgHaHNMMNaqcwfIdbaiIdw:tgHaHNaqIdbaiIdb:tgHaHNaqclfIdbaiIdl:tgHaHNMMMhHdndna3aCcdtgifgmydbcuSmbaEaifIdbaH9ETmekamaABdbaEaifaHUdbka5clfh5aeaxfheaqcxfhqadaAcefgA9hmbkkaba3aYz:kjjjb8AcrhikaicdthiinaiTmeaic98fgiawcwffydbcbyd:m:jjjbH:bjjjbbxbkkawc;Wbf8KjjjjbaDk:Qdidui99ducbhi8Jjjjjbca9Rglczfcwfcbyd11jjbBdbalcb8Pdj1jjb83izalcwfcbydN1jjbBdbalcb8Pd:m1jjb83ibdndnaembJbbjFhvJbbjFhoJbbjFhrxekadcd4cdthwincbhdinalczfadfgDabadfIdbgoaDIdbgrarao9EEUdbaladfgDaoaDIdbgrarao9DEUdbadclfgdcx9hmbkabawfhbaicefgiae9hmbkalIdwalIdK:thralIdlalIdC:thoalIdbalIdz:thvkavJbbbb:xgvaoaoav9DEgoararao9DEk9DeeuabcFeaicdtz:ljjjbhlcbhbdnadTmbindnalaeydbcdtfgiydbcu9hmbaiabBdbabcefhbkaeclfheadcufgdmbkkabk9teiucbcbyd:q:jjjbgeabcifc98GfgbBd:q:jjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik;LeeeudndnaeabVciGTmbabhixekdndnadcz9pmbabhixekabhiinaiaeydbBdbaiclfaeclfydbBdbaicwfaecwfydbBdbaicxfaecxfydbBdbaeczfheaiczfhiadc9Wfgdcs0mbkkadcl6mbinaiaeydbBdbaeclfheaiclfhiadc98fgdci0mbkkdnadTmbinaiaeRbb86bbaicefhiaecefheadcufgdmbkkabk;aeedudndnabciGTmbabhixekaecFeGc:b:c:ew2hldndnadcz9pmbabhixekabhiinaialBdbaicxfalBdbaicwfalBdbaiclfalBdbaiczfhiadc9Wfgdcs0mbkkadcl6mbinaialBdbaiclfhiadc98fgdci0mbkkdnadTmbinaiae86bbaicefhiadcufgdmbkkabk9teiucbcbyd:q:jjjbgeabcrfc94GfgbBd:q:jjjbdndnabZbcztgd9nmbcuhiabad9RcFFifcz4nbcuSmekaehikaik9:eiuZbhedndncbyd:q:jjjbgdaecztgi9nmbcuheadai9RcFFifcz4nbcuSmekadhekcbabae9Rcifc98Gcbyd:q:jjjbfgdBd:q:jjjbdnadZbcztge9nmbadae9RcFFifcz4nb8Akk6eiucbhidnadTmbdninabRbbglaeRbbgv9hmeaecefheabcefhbadcufgdmbxdkkalav9Rhikaikk:Iedbcjwk1eFFuuFFuuFFuuFFuFFFuFFFuFbbbbbbbbebbbdbbbbbbbebbbeeebeebebbeeebebbbbbebebbbbbebbbdbbbbbbbbbbbbbbbeeeeebebbbbbebbbbbeebbbbbbbbbbbbbbbbbbbbbc1Dkxebbbdbbb:G9Kbb"), {}).then((function(t) {
                    (e = t.instance).exports.__wasm_call_ctors()
                }));

                function s(e) {
                    if (!e) throw new Error("Assertion failed")
                }

                function r(e) {
                    return new Uint8Array(e.buffer, e.byteOffset, e.byteLength)
                }

                function n(t, a, s, n, i, o, c, b) {
                    var d = e.exports.sbrk,
                        f = d(4 * b),
                        h = d(s * n),
                        u = d(s * o),
                        l = new Uint8Array(e.exports.memory.buffer);
                    l.set(r(a), h), i && l.set(r(i), u);
                    var g = t(f, h, s, n, u, o, c, b);
                    l = new Uint8Array(e.exports.memory.buffer);
                    var p = new Uint32Array(g);
                    return r(p).set(l.subarray(f, f + 4 * g)), d(f - d(0)), p
                }
                var i = {
                    LockBorder: 1
                };
                return {
                    ready: a,
                    supported: !0,
                    useExperimentalFeatures: !1,
                    compactMesh: function(t) {
                        s(t instanceof Uint32Array || t instanceof Int32Array || t instanceof Uint16Array || t instanceof Int16Array), s(t.length % 3 == 0);
                        var a = 4 == t.BYTES_PER_ELEMENT ? t : new Uint32Array(t);
                        return function(t, a, s) {
                            var n = e.exports.sbrk,
                                i = n(4 * a.length),
                                o = n(4 * s),
                                c = new Uint8Array(e.exports.memory.buffer),
                                b = r(a);
                            c.set(b, i);
                            var d = t(o, i, a.length, s);
                            c = new Uint8Array(e.exports.memory.buffer);
                            var f = new Uint32Array(s);
                            new Uint8Array(f.buffer).set(c.subarray(o, o + 4 * s)), b.set(c.subarray(i, i + 4 * a.length)), n(i - n(0));
                            for (var h = 0; h < a.length; ++h) a[h] = f[a[h]];
                            return [f, d]
                        }(e.exports.meshopt_optimizeVertexFetchRemap, a, function(e) {
                            for (var t = 0, a = 0; a < e.length; ++a) {
                                var s = e[a];
                                t = t < s ? s : t
                            }
                            return t
                        }(t) + 1)
                    },
                    simplify: function(t, a, n, o, c, b) {
                        s(t instanceof Uint32Array || t instanceof Int32Array || t instanceof Uint16Array || t instanceof Int16Array), s(t.length % 3 == 0), s(a instanceof Float32Array), s(a.length % n == 0), s(n >= 3), s(o >= 0 && o <= t.length), s(o % 3 == 0), s(c >= 0 && c <= 1);
                        for (var d = 0, f = 0; f < (b ? b.length : 0); ++f) d |= i[b[f]];
                        var h = 4 == t.BYTES_PER_ELEMENT ? t : new Uint32Array(t),
                            u = function(t, a, s, n, i, o, c, b, d) {
                                var f = e.exports.sbrk,
                                    h = f(4),
                                    u = f(4 * s),
                                    l = f(i * o),
                                    g = f(4 * s),
                                    p = new Uint8Array(e.exports.memory.buffer);
                                p.set(r(n), l), p.set(r(a), g);
                                var m = t(u, g, s, l, i, o, c, b, d, h);
                                p = new Uint8Array(e.exports.memory.buffer);
                                var y = new Uint32Array(m);
                                r(y).set(p.subarray(u, u + 4 * m));
                                var x = new Float32Array(1);
                                return r(x).set(p.subarray(h, h + 4)), f(h - f(0)), [y, x[0]]
                            }(e.exports.meshopt_simplify, h, t.length, a, a.length / n, 4 * n, o, c, d);
                        return u[0] = t instanceof Uint32Array ? u[0] : new t.constructor(u[0]), u
                    },
                    simplifyWithAttributes: function(t, a, n, o, c, b, d, f, h) {
                        s(this.useExperimentalFeatures), s(t instanceof Uint32Array || t instanceof Int32Array || t instanceof Uint16Array || t instanceof Int16Array), s(t.length % 3 == 0), s(a instanceof Float32Array), s(a.length % n == 0), s(n >= 3), s(o instanceof Float32Array), s(o.length % c == 0), s(c >= 0), s(d >= 0 && d <= t.length), s(d % 3 == 0), s(f >= 0 && f <= 1), s(Array.isArray(b)), s(c >= b.length), s(b.length <= 16);
                        for (var u = 0, l = 0; l < (h ? h.length : 0); ++l) u |= i[h[l]];
                        var g = 4 == t.BYTES_PER_ELEMENT ? t : new Uint32Array(t),
                            p = function(t, a, s, n, i, o, c, b, d, f, h, u) {
                                var l = e.exports.sbrk,
                                    g = l(4),
                                    p = l(4 * s),
                                    m = l(i * o),
                                    y = l(i * b),
                                    x = l(4 * d.length),
                                    T = l(4 * s),
                                    E = new Uint8Array(e.exports.memory.buffer);
                                E.set(r(n), m), E.set(r(c), y), E.set(r(d), x), E.set(r(a), T);
                                var j = t(p, T, s, m, i, o, y, b, x, d.length, f, h, u, g);
                                E = new Uint8Array(e.exports.memory.buffer);
                                var w = new Uint32Array(j);
                                r(w).set(E.subarray(p, p + 4 * j));
                                var A = new Float32Array(1);
                                return r(A).set(E.subarray(g, g + 4)), l(g - l(0)), [w, A[0]]
                            }(e.exports.meshopt_simplifyWithAttributes, g, t.length, a, a.length / n, 4 * n, o, 4 * c, new Float32Array(b), d, f, u);
                        return p[0] = t instanceof Uint32Array ? p[0] : new t.constructor(p[0]), p
                    },
                    getScale: function(t, a) {
                        return s(t instanceof Float32Array), s(t.length % a == 0), s(a >= 3),
                            function(t, a, s, n) {
                                var i = e.exports.sbrk,
                                    o = i(s * n);
                                new Uint8Array(e.exports.memory.buffer).set(r(a), o);
                                var c = t(o, s, n);
                                return i(o - i(0)), c
                            }(e.exports.meshopt_simplifyScale, t, t.length / a, 4 * a)
                    },
                    simplifyPoints: function(t, a, r, i, o, c) {
                        return s(this.useExperimentalFeatures), s(t instanceof Float32Array), s(t.length % a == 0), s(a >= 3), s(r >= 0 && r <= t.length / a), i ? (s(i instanceof Float32Array), s(i.length % o == 0), s(o >= 3), s(t.length / a == i.length / o), n(e.exports.meshopt_simplifyPoints, t, t.length / a, 4 * a, i, 4 * o, c, r)) : n(e.exports.meshopt_simplifyPoints, t, t.length / a, 4 * a, void 0, 0, 0, r)
                    }
                }
            }()
        },
        38897: (e, t, a) => {
            "use strict";
            var s = a(86239),
                r = {
                    body: "",
                    args: [],
                    thisVars: [],
                    localVars: []
                };

            function n(e) {
                if (!e) return r;
                for (var t = 0; t < e.args.length; ++t) {
                    var a = e.args[t];
                    e.args[t] = 0 === t ? {
                        name: a,
                        lvalue: !0,
                        rvalue: !!e.rvalue,
                        count: e.count || 1
                    } : {
                        name: a,
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }
                }
                return e.thisVars || (e.thisVars = []), e.localVars || (e.localVars = []), e
            }

            function i(e) {
                for (var t = [], a = 0; a < e.args.length; ++a) t.push("a" + a);
                return new Function("P", ["return function ", e.funcName, "_ndarrayops(", t.join(","), ") {P(", t.join(","), ");return a0}"].join(""))(function(e) {
                    return s({
                        args: e.args,
                        pre: n(e.pre),
                        body: n(e.body),
                        post: n(e.proc),
                        funcName: e.funcName
                    })
                }(e))
            }
            var o = {
                add: "+",
                sub: "-",
                mul: "*",
                div: "/",
                mod: "%",
                band: "&",
                bor: "|",
                bxor: "^",
                lshift: "<<",
                rshift: ">>",
                rrshift: ">>>"
            };
            ! function() {
                for (var e in o) {
                    var a = o[e];
                    t[e] = i({
                        args: ["array", "array", "array"],
                        body: {
                            args: ["a", "b", "c"],
                            body: "a=b" + a + "c"
                        },
                        funcName: e
                    }), t[e + "eq"] = i({
                        args: ["array", "array"],
                        body: {
                            args: ["a", "b"],
                            body: "a" + a + "=b"
                        },
                        rvalue: !0,
                        funcName: e + "eq"
                    }), t[e + "s"] = i({
                        args: ["array", "array", "scalar"],
                        body: {
                            args: ["a", "b", "s"],
                            body: "a=b" + a + "s"
                        },
                        funcName: e + "s"
                    }), t[e + "seq"] = i({
                        args: ["array", "scalar"],
                        body: {
                            args: ["a", "s"],
                            body: "a" + a + "=s"
                        },
                        rvalue: !0,
                        funcName: e + "seq"
                    })
                }
            }();
            var c = {
                not: "!",
                bnot: "~",
                neg: "-",
                recip: "1.0/"
            };
            ! function() {
                for (var e in c) {
                    var a = c[e];
                    t[e] = i({
                        args: ["array", "array"],
                        body: {
                            args: ["a", "b"],
                            body: "a=" + a + "b"
                        },
                        funcName: e
                    }), t[e + "eq"] = i({
                        args: ["array"],
                        body: {
                            args: ["a"],
                            body: "a=" + a + "a"
                        },
                        rvalue: !0,
                        count: 2,
                        funcName: e + "eq"
                    })
                }
            }();
            var b = {
                and: "&&",
                or: "||",
                eq: "===",
                neq: "!==",
                lt: "<",
                gt: ">",
                leq: "<=",
                geq: ">="
            };
            ! function() {
                for (var e in b) {
                    var a = b[e];
                    t[e] = i({
                        args: ["array", "array", "array"],
                        body: {
                            args: ["a", "b", "c"],
                            body: "a=b" + a + "c"
                        },
                        funcName: e
                    }), t[e + "s"] = i({
                        args: ["array", "array", "scalar"],
                        body: {
                            args: ["a", "b", "s"],
                            body: "a=b" + a + "s"
                        },
                        funcName: e + "s"
                    }), t[e + "eq"] = i({
                        args: ["array", "array"],
                        body: {
                            args: ["a", "b"],
                            body: "a=a" + a + "b"
                        },
                        rvalue: !0,
                        count: 2,
                        funcName: e + "eq"
                    }), t[e + "seq"] = i({
                        args: ["array", "scalar"],
                        body: {
                            args: ["a", "s"],
                            body: "a=a" + a + "s"
                        },
                        rvalue: !0,
                        count: 2,
                        funcName: e + "seq"
                    })
                }
            }();
            var d = ["abs", "acos", "asin", "atan", "ceil", "cos", "exp", "floor", "log", "round", "sin", "sqrt", "tan"];
            ! function() {
                for (var e = 0; e < d.length; ++e) {
                    var a = d[e];
                    t[a] = i({
                        args: ["array", "array"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b"],
                            body: "a=this_f(b)",
                            thisVars: ["this_f"]
                        },
                        funcName: a
                    }), t[a + "eq"] = i({
                        args: ["array"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a"],
                            body: "a=this_f(a)",
                            thisVars: ["this_f"]
                        },
                        rvalue: !0,
                        count: 2,
                        funcName: a + "eq"
                    })
                }
            }();
            var f = ["max", "min", "atan2", "pow"];
            ! function() {
                for (var e = 0; e < f.length; ++e) {
                    var a = f[e];
                    t[a] = i({
                        args: ["array", "array", "array"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b", "c"],
                            body: "a=this_f(b,c)",
                            thisVars: ["this_f"]
                        },
                        funcName: a
                    }), t[a + "s"] = i({
                        args: ["array", "array", "scalar"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b", "c"],
                            body: "a=this_f(b,c)",
                            thisVars: ["this_f"]
                        },
                        funcName: a + "s"
                    }), t[a + "eq"] = i({
                        args: ["array", "array"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b"],
                            body: "a=this_f(a,b)",
                            thisVars: ["this_f"]
                        },
                        rvalue: !0,
                        count: 2,
                        funcName: a + "eq"
                    }), t[a + "seq"] = i({
                        args: ["array", "scalar"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b"],
                            body: "a=this_f(a,b)",
                            thisVars: ["this_f"]
                        },
                        rvalue: !0,
                        count: 2,
                        funcName: a + "seq"
                    })
                }
            }();
            var h = ["atan2", "pow"];
            ! function() {
                for (var e = 0; e < h.length; ++e) {
                    var a = h[e];
                    t[a + "op"] = i({
                        args: ["array", "array", "array"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b", "c"],
                            body: "a=this_f(c,b)",
                            thisVars: ["this_f"]
                        },
                        funcName: a + "op"
                    }), t[a + "ops"] = i({
                        args: ["array", "array", "scalar"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b", "c"],
                            body: "a=this_f(c,b)",
                            thisVars: ["this_f"]
                        },
                        funcName: a + "ops"
                    }), t[a + "opeq"] = i({
                        args: ["array", "array"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b"],
                            body: "a=this_f(b,a)",
                            thisVars: ["this_f"]
                        },
                        rvalue: !0,
                        count: 2,
                        funcName: a + "opeq"
                    }), t[a + "opseq"] = i({
                        args: ["array", "scalar"],
                        pre: {
                            args: [],
                            body: "this_f=Math." + a,
                            thisVars: ["this_f"]
                        },
                        body: {
                            args: ["a", "b"],
                            body: "a=this_f(b,a)",
                            thisVars: ["this_f"]
                        },
                        rvalue: !0,
                        count: 2,
                        funcName: a + "opseq"
                    })
                }
            }(), t.any = s({
                args: ["array"],
                pre: r,
                body: {
                    args: [{
                        name: "a",
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }],
                    body: "if(a){return true}",
                    localVars: [],
                    thisVars: []
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: [],
                    body: "return false"
                },
                funcName: "any"
            }), t.all = s({
                args: ["array"],
                pre: r,
                body: {
                    args: [{
                        name: "x",
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }],
                    body: "if(!x){return false}",
                    localVars: [],
                    thisVars: []
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: [],
                    body: "return true"
                },
                funcName: "all"
            }), t.sum = s({
                args: ["array"],
                pre: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "this_s=0"
                },
                body: {
                    args: [{
                        name: "a",
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }],
                    body: "this_s+=a",
                    localVars: [],
                    thisVars: ["this_s"]
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "return this_s"
                },
                funcName: "sum"
            }), t.prod = s({
                args: ["array"],
                pre: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "this_s=1"
                },
                body: {
                    args: [{
                        name: "a",
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }],
                    body: "this_s*=a",
                    localVars: [],
                    thisVars: ["this_s"]
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "return this_s"
                },
                funcName: "prod"
            }), t.norm2squared = s({
                args: ["array"],
                pre: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "this_s=0"
                },
                body: {
                    args: [{
                        name: "a",
                        lvalue: !1,
                        rvalue: !0,
                        count: 2
                    }],
                    body: "this_s+=a*a",
                    localVars: [],
                    thisVars: ["this_s"]
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "return this_s"
                },
                funcName: "norm2squared"
            }), t.norm2 = s({
                args: ["array"],
                pre: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "this_s=0"
                },
                body: {
                    args: [{
                        name: "a",
                        lvalue: !1,
                        rvalue: !0,
                        count: 2
                    }],
                    body: "this_s+=a*a",
                    localVars: [],
                    thisVars: ["this_s"]
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "return Math.sqrt(this_s)"
                },
                funcName: "norm2"
            }), t.norminf = s({
                args: ["array"],
                pre: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "this_s=0"
                },
                body: {
                    args: [{
                        name: "a",
                        lvalue: !1,
                        rvalue: !0,
                        count: 4
                    }],
                    body: "if(-a>this_s){this_s=-a}else if(a>this_s){this_s=a}",
                    localVars: [],
                    thisVars: ["this_s"]
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "return this_s"
                },
                funcName: "norminf"
            }), t.norm1 = s({
                args: ["array"],
                pre: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "this_s=0"
                },
                body: {
                    args: [{
                        name: "a",
                        lvalue: !1,
                        rvalue: !0,
                        count: 3
                    }],
                    body: "this_s+=a<0?-a:a",
                    localVars: [],
                    thisVars: ["this_s"]
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: ["this_s"],
                    body: "return this_s"
                },
                funcName: "norm1"
            }), t.sup = s({
                args: ["array"],
                pre: {
                    body: "this_h=-Infinity",
                    args: [],
                    thisVars: ["this_h"],
                    localVars: []
                },
                body: {
                    body: "if(_inline_1_arg0_>this_h)this_h=_inline_1_arg0_",
                    args: [{
                        name: "_inline_1_arg0_",
                        lvalue: !1,
                        rvalue: !0,
                        count: 2
                    }],
                    thisVars: ["this_h"],
                    localVars: []
                },
                post: {
                    body: "return this_h",
                    args: [],
                    thisVars: ["this_h"],
                    localVars: []
                }
            }), t.inf = s({
                args: ["array"],
                pre: {
                    body: "this_h=Infinity",
                    args: [],
                    thisVars: ["this_h"],
                    localVars: []
                },
                body: {
                    body: "if(_inline_1_arg0_<this_h)this_h=_inline_1_arg0_",
                    args: [{
                        name: "_inline_1_arg0_",
                        lvalue: !1,
                        rvalue: !0,
                        count: 2
                    }],
                    thisVars: ["this_h"],
                    localVars: []
                },
                post: {
                    body: "return this_h",
                    args: [],
                    thisVars: ["this_h"],
                    localVars: []
                }
            }), t.argmin = s({
                args: ["index", "array", "shape"],
                pre: {
                    body: "{this_v=Infinity;this_i=_inline_0_arg2_.slice(0)}",
                    args: [{
                        name: "_inline_0_arg0_",
                        lvalue: !1,
                        rvalue: !1,
                        count: 0
                    }, {
                        name: "_inline_0_arg1_",
                        lvalue: !1,
                        rvalue: !1,
                        count: 0
                    }, {
                        name: "_inline_0_arg2_",
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }],
                    thisVars: ["this_i", "this_v"],
                    localVars: []
                },
                body: {
                    body: "{if(_inline_1_arg1_<this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
                    args: [{
                        name: "_inline_1_arg0_",
                        lvalue: !1,
                        rvalue: !0,
                        count: 2
                    }, {
                        name: "_inline_1_arg1_",
                        lvalue: !1,
                        rvalue: !0,
                        count: 2
                    }],
                    thisVars: ["this_i", "this_v"],
                    localVars: ["_inline_1_k"]
                },
                post: {
                    body: "{return this_i}",
                    args: [],
                    thisVars: ["this_i"],
                    localVars: []
                }
            }), t.argmax = s({
                args: ["index", "array", "shape"],
                pre: {
                    body: "{this_v=-Infinity;this_i=_inline_0_arg2_.slice(0)}",
                    args: [{
                        name: "_inline_0_arg0_",
                        lvalue: !1,
                        rvalue: !1,
                        count: 0
                    }, {
                        name: "_inline_0_arg1_",
                        lvalue: !1,
                        rvalue: !1,
                        count: 0
                    }, {
                        name: "_inline_0_arg2_",
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }],
                    thisVars: ["this_i", "this_v"],
                    localVars: []
                },
                body: {
                    body: "{if(_inline_1_arg1_>this_v){this_v=_inline_1_arg1_;for(var _inline_1_k=0;_inline_1_k<_inline_1_arg0_.length;++_inline_1_k){this_i[_inline_1_k]=_inline_1_arg0_[_inline_1_k]}}}",
                    args: [{
                        name: "_inline_1_arg0_",
                        lvalue: !1,
                        rvalue: !0,
                        count: 2
                    }, {
                        name: "_inline_1_arg1_",
                        lvalue: !1,
                        rvalue: !0,
                        count: 2
                    }],
                    thisVars: ["this_i", "this_v"],
                    localVars: ["_inline_1_k"]
                },
                post: {
                    body: "{return this_i}",
                    args: [],
                    thisVars: ["this_i"],
                    localVars: []
                }
            }), t.random = i({
                args: ["array"],
                pre: {
                    args: [],
                    body: "this_f=Math.random",
                    thisVars: ["this_f"]
                },
                body: {
                    args: ["a"],
                    body: "a=this_f()",
                    thisVars: ["this_f"]
                },
                funcName: "random"
            }), t.assign = i({
                args: ["array", "array"],
                body: {
                    args: ["a", "b"],
                    body: "a=b"
                },
                funcName: "assign"
            }), t.assigns = i({
                args: ["array", "scalar"],
                body: {
                    args: ["a", "b"],
                    body: "a=b"
                },
                funcName: "assigns"
            }), t.equals = s({
                args: ["array", "array"],
                pre: r,
                body: {
                    args: [{
                        name: "x",
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }, {
                        name: "y",
                        lvalue: !1,
                        rvalue: !0,
                        count: 1
                    }],
                    body: "if(x!==y){return false}",
                    localVars: [],
                    thisVars: []
                },
                post: {
                    args: [],
                    localVars: [],
                    thisVars: [],
                    body: "return true"
                },
                funcName: "equals"
            })
        },
        62861: (e, t, a) => {
            var s = a(16907),
                r = a(48738),
                n = "undefined" != typeof Float64Array;

            function i(e, t) {
                return e[0] - t[0]
            }

            function o() {
                var e, t = this.stride,
                    a = new Array(t.length);
                for (e = 0; e < a.length; ++e) a[e] = [Math.abs(t[e]), e];
                a.sort(i);
                var s = new Array(a.length);
                for (e = 0; e < s.length; ++e) s[e] = a[e][1];
                return s
            }

            function c(e, t) {
                var a = ["View", t, "d", e].join("");
                t < 0 && (a = "View_Nil" + e);
                var r = "generic" === e;
                if (-1 === t) {
                    var n = "function " + a + "(a){this.data=a;};var proto=" + a + ".prototype;proto.dtype='" + e + "';proto.index=function(){return -1};proto.size=0;proto.dimension=-1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function(){return new " + a + "(this.data);};proto.get=proto.set=function(){};proto.pick=function(){return null};return function construct_" + a + "(a){return new " + a + "(a);}";
                    return new Function(n)()
                }
                if (0 === t) return n = "function " + a + "(a,d) {this.data = a;this.offset = d};var proto=" + a + ".prototype;proto.dtype='" + e + "';proto.index=function(){return this.offset};proto.dimension=0;proto.size=1;proto.shape=proto.stride=proto.order=[];proto.lo=proto.hi=proto.transpose=proto.step=function " + a + "_copy() {return new " + a + "(this.data,this.offset)};proto.pick=function " + a + "_pick(){return TrivialArray(this.data);};proto.valueOf=proto.get=function " + a + "_get(){return " + (r ? "this.data.get(this.offset)" : "this.data[this.offset]") + "};proto.set=function " + a + "_set(v){return " + (r ? "this.data.set(this.offset,v)" : "this.data[this.offset]=v") + "};return function construct_" + a + "(a,b,c,d){return new " + a + "(a,d)}", new Function("TrivialArray", n)(b[e][0]);
                n = ["'use strict'"];
                var i = s(t),
                    c = i.map((function(e) {
                        return "i" + e
                    })),
                    d = "this.offset+" + i.map((function(e) {
                        return "this.stride[" + e + "]*i" + e
                    })).join("+"),
                    f = i.map((function(e) {
                        return "b" + e
                    })).join(","),
                    h = i.map((function(e) {
                        return "c" + e
                    })).join(",");
                n.push("function " + a + "(a," + f + "," + h + ",d){this.data=a", "this.shape=[" + f + "]", "this.stride=[" + h + "]", "this.offset=d|0}", "var proto=" + a + ".prototype", "proto.dtype='" + e + "'", "proto.dimension=" + t), n.push("Object.defineProperty(proto,'size',{get:function " + a + "_size(){return " + i.map((function(e) {
                    return "this.shape[" + e + "]"
                })).join("*"), "}})"), 1 === t ? n.push("proto.order=[0]") : (n.push("Object.defineProperty(proto,'order',{get:"), t < 4 ? (n.push("function " + a + "_order(){"), 2 === t ? n.push("return (Math.abs(this.stride[0])>Math.abs(this.stride[1]))?[1,0]:[0,1]}})") : 3 === t && n.push("var s0=Math.abs(this.stride[0]),s1=Math.abs(this.stride[1]),s2=Math.abs(this.stride[2]);if(s0>s1){if(s1>s2){return [2,1,0];}else if(s0>s2){return [1,2,0];}else{return [1,0,2];}}else if(s0>s2){return [2,0,1];}else if(s2>s1){return [0,1,2];}else{return [0,2,1];}}})")) : n.push("ORDER})")), n.push("proto.set=function " + a + "_set(" + c.join(",") + ",v){"), r ? n.push("return this.data.set(" + d + ",v)}") : n.push("return this.data[" + d + "]=v}"), n.push("proto.get=function " + a + "_get(" + c.join(",") + "){"), r ? n.push("return this.data.get(" + d + ")}") : n.push("return this.data[" + d + "]}"), n.push("proto.index=function " + a + "_index(", c.join(), "){return " + d + "}"), n.push("proto.hi=function " + a + "_hi(" + c.join(",") + "){return new " + a + "(this.data," + i.map((function(e) {
                    return ["(typeof i", e, "!=='number'||i", e, "<0)?this.shape[", e, "]:i", e, "|0"].join("")
                })).join(",") + "," + i.map((function(e) {
                    return "this.stride[" + e + "]"
                })).join(",") + ",this.offset)}");
                var u = i.map((function(e) {
                        return "a" + e + "=this.shape[" + e + "]"
                    })),
                    l = i.map((function(e) {
                        return "c" + e + "=this.stride[" + e + "]"
                    }));
                n.push("proto.lo=function " + a + "_lo(" + c.join(",") + "){var b=this.offset,d=0," + u.join(",") + "," + l.join(","));
                for (var g = 0; g < t; ++g) n.push("if(typeof i" + g + "==='number'&&i" + g + ">=0){d=i" + g + "|0;b+=c" + g + "*d;a" + g + "-=d}");
                for (n.push("return new " + a + "(this.data," + i.map((function(e) {
                        return "a" + e
                    })).join(",") + "," + i.map((function(e) {
                        return "c" + e
                    })).join(",") + ",b)}"), n.push("proto.step=function " + a + "_step(" + c.join(",") + "){var " + i.map((function(e) {
                        return "a" + e + "=this.shape[" + e + "]"
                    })).join(",") + "," + i.map((function(e) {
                        return "b" + e + "=this.stride[" + e + "]"
                    })).join(",") + ",c=this.offset,d=0,ceil=Math.ceil"), g = 0; g < t; ++g) n.push("if(typeof i" + g + "==='number'){d=i" + g + "|0;if(d<0){c+=b" + g + "*(a" + g + "-1);a" + g + "=ceil(-a" + g + "/d)}else{a" + g + "=ceil(a" + g + "/d)}b" + g + "*=d}");
                n.push("return new " + a + "(this.data," + i.map((function(e) {
                    return "a" + e
                })).join(",") + "," + i.map((function(e) {
                    return "b" + e
                })).join(",") + ",c)}");
                var p = new Array(t),
                    m = new Array(t);
                for (g = 0; g < t; ++g) p[g] = "a[i" + g + "]", m[g] = "b[i" + g + "]";
                for (n.push("proto.transpose=function " + a + "_transpose(" + c + "){" + c.map((function(e, t) {
                        return e + "=(" + e + "===undefined?" + t + ":" + e + "|0)"
                    })).join(";"), "var a=this.shape,b=this.stride;return new " + a + "(this.data," + p.join(",") + "," + m.join(",") + ",this.offset)}"), n.push("proto.pick=function " + a + "_pick(" + c + "){var a=[],b=[],c=this.offset"), g = 0; g < t; ++g) n.push("if(typeof i" + g + "==='number'&&i" + g + ">=0){c=(c+this.stride[" + g + "]*i" + g + ")|0}else{a.push(this.shape[" + g + "]);b.push(this.stride[" + g + "])}");
                return n.push("var ctor=CTOR_LIST[a.length+1];return ctor(this.data,a,b,c)}"), n.push("return function construct_" + a + "(data,shape,stride,offset){return new " + a + "(data," + i.map((function(e) {
                    return "shape[" + e + "]"
                })).join(",") + "," + i.map((function(e) {
                    return "stride[" + e + "]"
                })).join(",") + ",offset)}"), new Function("CTOR_LIST", "ORDER", n.join("\n"))(b[e], o)
            }
            var b = {
                float32: [],
                float64: [],
                int8: [],
                int16: [],
                int32: [],
                uint8: [],
                uint16: [],
                uint32: [],
                array: [],
                uint8_clamped: [],
                bigint64: [],
                biguint64: [],
                buffer: [],
                generic: []
            };
            e.exports = function(e, t, a, s) {
                if (void 0 === e) return (0, b.array[0])([]);
                "number" == typeof e && (e = [e]), void 0 === t && (t = [e.length]);
                var i = t.length;
                if (void 0 === a) {
                    a = new Array(i);
                    for (var o = i - 1, d = 1; o >= 0; --o) a[o] = d, d *= t[o]
                }
                if (void 0 === s)
                    for (s = 0, o = 0; o < i; ++o) a[o] < 0 && (s -= (t[o] - 1) * a[o]);
                for (var f = function(e) {
                        if (r(e)) return "buffer";
                        if (n) switch (Object.prototype.toString.call(e)) {
                            case "[object Float64Array]":
                                return "float64";
                            case "[object Float32Array]":
                                return "float32";
                            case "[object Int8Array]":
                                return "int8";
                            case "[object Int16Array]":
                                return "int16";
                            case "[object Int32Array]":
                                return "int32";
                            case "[object Uint8Array]":
                                return "uint8";
                            case "[object Uint16Array]":
                                return "uint16";
                            case "[object Uint32Array]":
                                return "uint32";
                            case "[object Uint8ClampedArray]":
                                return "uint8_clamped";
                            case "[object BigInt64Array]":
                                return "bigint64";
                            case "[object BigUint64Array]":
                                return "biguint64"
                        }
                        return Array.isArray(e) ? "array" : "generic"
                    }(e), h = b[f]; h.length <= i + 1;) h.push(c(f, h.length - 1));
                return (0, h[i + 1])(e, t, a, s)
            }
        },
        38706: e => {
            "use strict";
            e.exports = function(e, t, a) {
                return 0 === e.length ? e : t ? (a || e.sort(t), function(e, t) {
                    for (var a = 1, s = e.length, r = e[0], n = e[0], i = 1; i < s; ++i)
                        if (n = r, t(r = e[i], n)) {
                            if (i === a) {
                                a++;
                                continue
                            }
                            e[a++] = r
                        } return e.length = a, e
                }(e, t)) : (a || e.sort(), function(e) {
                    for (var t = 1, a = e.length, s = e[0], r = e[0], n = 1; n < a; ++n, r = s)
                        if (r = s, (s = e[n]) !== r) {
                            if (n === t) {
                                t++;
                                continue
                            }
                            e[t++] = s
                        } return e.length = t, e
                }(e))
            }
        },
        69584: (e, t, a) => {
            "use strict";
            a.d(t, {
                AH: () => Ce,
                BB: () => pe,
                BD: () => X,
                F5: () => ie,
                M8: () => _,
                Pp: () => I,
                U_: () => J,
                VS: () => d,
                WV: () => be,
                Yd: () => S,
                Zt: () => Y,
                aw: () => i,
                eY: () => ee,
                fC: () => ge,
                hj: () => me,
                i5: () => w,
                lO: () => te,
                oY: () => j,
                qi: () => we,
                tn: () => h,
                uS: () => o,
                xE: () => le,
                xs: () => he,
                zX: () => x
            });
            var s = a(24987),
                r = a(48764).Buffer,
                n = a(25108);
            const i = "@glb.bin";
            var o, c, b, d, f;
            ! function(e) {
                e.ACCESSOR = "Accessor", e.ANIMATION = "Animation", e.ANIMATION_CHANNEL = "AnimationChannel", e.ANIMATION_SAMPLER = "AnimationSampler", e.BUFFER = "Buffer", e.CAMERA = "Camera", e.MATERIAL = "Material", e.MESH = "Mesh", e.PRIMITIVE = "Primitive", e.PRIMITIVE_TARGET = "PrimitiveTarget", e.NODE = "Node", e.ROOT = "Root", e.SCENE = "Scene", e.SKIN = "Skin", e.TEXTURE = "Texture", e.TEXTURE_INFO = "TextureInfo"
            }(o || (o = {})),
            function(e) {
                e.INTERLEAVED = "interleaved", e.SEPARATE = "separate"
            }(c || (c = {})),
            function(e) {
                e.ARRAY_BUFFER = "ARRAY_BUFFER", e.ELEMENT_ARRAY_BUFFER = "ELEMENT_ARRAY_BUFFER", e.INVERSE_BIND_MATRICES = "INVERSE_BIND_MATRICES", e.OTHER = "OTHER", e.SPARSE = "SPARSE"
            }(b || (b = {})),
            function(e) {
                e[e.R = 4096] = "R", e[e.G = 256] = "G", e[e.B = 16] = "B", e[e.A = 1] = "A"
            }(d || (d = {})),
            function(e) {
                e.GLTF = "GLTF", e.GLB = "GLB"
            }(f || (f = {}));
            const h = {
                5120: Int8Array,
                5121: Uint8Array,
                5122: Int16Array,
                5123: Uint16Array,
                5125: Uint32Array,
                5126: Float32Array
            };
            var u, l, g, p = "undefined" != typeof Float32Array ? Float32Array : Array;

            function m(e) {
                var t = e[0],
                    a = e[1],
                    s = e[2];
                return Math.hypot(t, a, s)
            }

            function y(e, t, a) {
                var s = t[0],
                    r = t[1],
                    n = t[2],
                    i = a[3] * s + a[7] * r + a[11] * n + a[15];
                return i = i || 1, e[0] = (a[0] * s + a[4] * r + a[8] * n + a[12]) / i, e[1] = (a[1] * s + a[5] * r + a[9] * n + a[13]) / i, e[2] = (a[2] * s + a[6] * r + a[10] * n + a[14]) / i, e
            }

            function x(e) {
                const t = {
                        min: [1 / 0, 1 / 0, 1 / 0],
                        max: [-1 / 0, -1 / 0, -1 / 0]
                    },
                    a = e.propertyType === o.NODE ? [e] : e.listChildren();
                for (const e of a) e.traverse((e => {
                    const a = e.getMesh();
                    if (!a) return;
                    const s = T(a, e.getWorldMatrix());
                    s.min.every(isFinite) && s.max.every(isFinite) && (E(s.min, t), E(s.max, t))
                }));
                return t
            }

            function T(e, t) {
                const a = {
                    min: [1 / 0, 1 / 0, 1 / 0],
                    max: [-1 / 0, -1 / 0, -1 / 0]
                };
                for (const s of e.listPrimitives()) {
                    const e = s.getAttribute("POSITION"),
                        r = s.getIndices();
                    if (!e) continue;
                    let n = [0, 0, 0],
                        i = [0, 0, 0];
                    for (let s = 0, o = r ? r.getCount() : e.getCount(); s < o; s++) {
                        const o = r ? r.getScalar(s) : s;
                        n = e.getElement(o, n), i = y(i, n, t), E(i, a)
                    }
                }
                return a
            }

            function E(e, t) {
                for (let a = 0; a < 3; a++) t.min[a] = Math.min(e[a], t.min[a]), t.max[a] = Math.max(e[a], t.max[a])
            }
            Math.hypot || (Math.hypot = function() {
                for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
                return Math.sqrt(e)
            }), u = new p(3), p != Float32Array && (u[0] = 0, u[1] = 0, u[2] = 0);
            class j {
                static createBufferFromDataURI(e) {
                    if (void 0 === r) {
                        const t = atob(e.split(",")[1]),
                            a = new Uint8Array(t.length);
                        for (let e = 0; e < t.length; e++) a[e] = t.charCodeAt(e);
                        return a
                    } {
                        const t = e.split(",")[1],
                            a = e.indexOf("base64") >= 0;
                        return r.from(t, a ? "base64" : "utf8")
                    }
                }
                static encodeText(e) {
                    return "undefined" != typeof TextEncoder ? (new TextEncoder).encode(e) : r.from(e)
                }
                static decodeText(e) {
                    return "undefined" != typeof TextDecoder ? (new TextDecoder).decode(e) : r.from(e).toString("utf8")
                }
                static concat(e) {
                    let t = 0;
                    for (const a of e) t += a.byteLength;
                    const a = new Uint8Array(t);
                    let s = 0;
                    for (const t of e) a.set(t, s), s += t.byteLength;
                    return a
                }
                static pad(e, t = 0) {
                    const a = this.padNumber(e.byteLength);
                    if (a === e.byteLength) return e;
                    const s = new Uint8Array(a);
                    if (s.set(e), 0 !== t)
                        for (let r = e.byteLength; r < a; r++) s[r] = t;
                    return s
                }
                static padNumber(e) {
                    return 4 * Math.ceil(e / 4)
                }
                static equals(e, t) {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    let a = e.byteLength;
                    for (; a--;)
                        if (e[a] !== t[a]) return !1;
                    return !0
                }
                static toView(e, t = 0, a = 1 / 0) {
                    return new Uint8Array(e.buffer, e.byteOffset + t, Math.min(e.byteLength, a))
                }
                static assertView(e) {
                    if (e && !ArrayBuffer.isView(e)) throw new Error(`Method requires Uint8Array parameter; received "${typeof e}".`);
                    return e
                }
            }
            class w {
                static hexToFactor(e, t) {
                    e = Math.floor(e);
                    const a = t;
                    return a[0] = (e >> 16 & 255) / 255, a[1] = (e >> 8 & 255) / 255, a[2] = (255 & e) / 255, this.convertSRGBToLinear(t, t)
                }
                static factorToHex(e) {
                    const t = [...e],
                        [a, s, r] = this.convertLinearToSRGB(e, t);
                    return 255 * a << 16 ^ 255 * s << 8 ^ 255 * r << 0
                }
                static convertSRGBToLinear(e, t) {
                    const a = e,
                        s = t;
                    for (let e = 0; e < 3; e++) s[e] = a[e] < .04045 ? .0773993808 * a[e] : Math.pow(.9478672986 * a[e] + .0521327014, 2.4);
                    return t
                }
                static convertLinearToSRGB(e, t) {
                    const a = e,
                        s = t;
                    for (let e = 0; e < 3; e++) s[e] = a[e] < .0031308 ? 12.92 * a[e] : 1.055 * Math.pow(a[e], .41666) - .055;
                    return t
                }
            }
            class A {
                match(e) {
                    return e.length >= 8 && 137 === e[0] && 80 === e[1] && 78 === e[2] && 71 === e[3] && 13 === e[4] && 10 === e[5] && 26 === e[6] && 10 === e[7]
                }
                getSize(e) {
                    const t = new DataView(e.buffer, e.byteOffset);
                    return j.decodeText(e.slice(12, 16)) === A.PNG_FRIED_CHUNK_NAME ? [t.getUint32(32, !1), t.getUint32(36, !1)] : [t.getUint32(16, !1), t.getUint32(20, !1)]
                }
                getChannels(e) {
                    return 4
                }
            }
            A.PNG_FRIED_CHUNK_NAME = "CgBI";
            class I {
                static registerFormat(e, t) {
                    this.impls[e] = t
                }
                static getMimeType(e) {
                    for (const t in this.impls)
                        if (this.impls[t].match(e)) return t;
                    return null
                }
                static getSize(e, t) {
                    return this.impls[t] ? this.impls[t].getSize(e) : null
                }
                static getChannels(e, t) {
                    return this.impls[t] ? this.impls[t].getChannels(e) : null
                }
                static getVRAMByteLength(e, t) {
                    if (!this.impls[t]) return null;
                    if (this.impls[t].getVRAMByteLength) return this.impls[t].getVRAMByteLength(e);
                    let a = 0;
                    const s = this.getSize(e, t);
                    if (!s) return null;
                    for (; s[0] > 1 || s[1] > 1;) a += s[0] * s[1] * 4, s[0] = Math.max(Math.floor(s[0] / 2), 1), s[1] = Math.max(Math.floor(s[1] / 2), 1);
                    return a += 4, a
                }
                static mimeTypeToExtension(e) {
                    return "image/jpeg" === e ? "jpg" : e.split("/").pop()
                }
                static extensionToMimeType(e) {
                    return "jpg" === e ? "image/jpeg" : e ? `image/${e}` : ""
                }
            }

            function N(e, t) {
                if (t > e.byteLength) throw new TypeError("Corrupt JPG, exceeded buffer limits");
                if (255 !== e.getUint8(t)) throw new TypeError("Invalid JPG, marker table corrupted");
                return e
            }
            I.impls = {
                "image/jpeg": new class {
                    match(e) {
                        return e.length >= 3 && 255 === e[0] && 216 === e[1] && 255 === e[2]
                    }
                    getSize(e) {
                        let t, a, s = new DataView(e.buffer, e.byteOffset + 4);
                        for (; s.byteLength;) {
                            if (t = s.getUint16(0, !1), N(s, t), a = s.getUint8(t + 1), 192 === a || 193 === a || 194 === a) return [s.getUint16(t + 7, !1), s.getUint16(t + 5, !1)];
                            s = new DataView(e.buffer, s.byteOffset + t + 2)
                        }
                        throw new TypeError("Invalid JPG, no size found")
                    }
                    getChannels(e) {
                        return 3
                    }
                },
                "image/png": new A
            };
            class k {
                static basename(e) {
                    const t = e.split(/[\\/]/).pop();
                    return t.substring(0, t.lastIndexOf("."))
                }
                static extension(e) {
                    if (e.startsWith("data:image/")) {
                        const t = e.match(/data:(image\/\w+)/)[1];
                        return I.mimeTypeToExtension(t)
                    }
                    return e.startsWith("data:model/gltf+json") ? "gltf" : e.startsWith("data:model/gltf-binary") ? "glb" : e.startsWith("data:application/") ? "bin" : e.split(/[\\/]/).pop().split(/[.]/).pop()
                }
            }

            function v(e) {
                return "[object Object]" === Object.prototype.toString.call(e)
            }

            function R(e) {
                if (!1 === v(e)) return !1;
                const t = e.constructor;
                if (void 0 === t) return !0;
                const a = t.prototype;
                return !1 !== v(a) && !1 !== Object.prototype.hasOwnProperty.call(a, "isPrototypeOf")
            }! function(e) {
                e[e.SILENT = 4] = "SILENT", e[e.ERROR = 3] = "ERROR", e[e.WARN = 2] = "WARN", e[e.INFO = 1] = "INFO", e[e.DEBUG = 0] = "DEBUG"
            }(g || (g = {}));
            class S {
                constructor(e) {
                    this.verbosity = void 0, this.verbosity = e
                }
                debug(e) {
                    this.verbosity <= S.Verbosity.DEBUG && n.debug(e)
                }
                info(e) {
                    this.verbosity <= S.Verbosity.INFO && n.info(e)
                }
                warn(e) {
                    this.verbosity <= S.Verbosity.WARN && n.warn(e)
                }
                error(e) {
                    this.verbosity <= S.Verbosity.ERROR && n.error(e)
                }
            }

            function M(e, t, a) {
                var s = t[0],
                    r = t[1],
                    n = t[2],
                    i = t[3],
                    o = t[4],
                    c = t[5],
                    b = t[6],
                    d = t[7],
                    f = t[8],
                    h = t[9],
                    u = t[10],
                    l = t[11],
                    g = t[12],
                    p = t[13],
                    m = t[14],
                    y = t[15],
                    x = a[0],
                    T = a[1],
                    E = a[2],
                    j = a[3];
                return e[0] = x * s + T * o + E * f + j * g, e[1] = x * r + T * c + E * h + j * p, e[2] = x * n + T * b + E * u + j * m, e[3] = x * i + T * d + E * l + j * y, x = a[4], T = a[5], E = a[6], j = a[7], e[4] = x * s + T * o + E * f + j * g, e[5] = x * r + T * c + E * h + j * p, e[6] = x * n + T * b + E * u + j * m, e[7] = x * i + T * d + E * l + j * y, x = a[8], T = a[9], E = a[10], j = a[11], e[8] = x * s + T * o + E * f + j * g, e[9] = x * r + T * c + E * h + j * p, e[10] = x * n + T * b + E * u + j * m, e[11] = x * i + T * d + E * l + j * y, x = a[12], T = a[13], E = a[14], j = a[15], e[12] = x * s + T * o + E * f + j * g, e[13] = x * r + T * c + E * h + j * p, e[14] = x * n + T * b + E * u + j * m, e[15] = x * i + T * d + E * l + j * y, e
            }
            l = S, S.Verbosity = g, S.DEFAULT_INSTANCE = new l(l.Verbosity.INFO);
            class _ {
                static identity(e) {
                    return e
                }
                static eq(e, t, a = 1e-5) {
                    if (e.length !== t.length) return !1;
                    for (let s = 0; s < e.length; s++)
                        if (Math.abs(e[s] - t[s]) > a) return !1;
                    return !0
                }
                static clamp(e, t, a) {
                    return e < t ? t : e > a ? a : e
                }
                static decodeNormalizedInt(e, t) {
                    switch (t) {
                        case 5126:
                            return e;
                        case 5123:
                            return e / 65535;
                        case 5121:
                            return e / 255;
                        case 5122:
                            return Math.max(e / 32767, -1);
                        case 5120:
                            return Math.max(e / 127, -1);
                        default:
                            throw new Error("Invalid component type.")
                    }
                }
                static encodeNormalizedInt(e, t) {
                    switch (t) {
                        case 5126:
                            return e;
                        case 5123:
                            return Math.round(65535 * _.clamp(e, 0, 1));
                        case 5121:
                            return Math.round(255 * _.clamp(e, 0, 1));
                        case 5122:
                            return Math.round(32767 * _.clamp(e, -1, 1));
                        case 5120:
                            return Math.round(127 * _.clamp(e, -1, 1));
                        default:
                            throw new Error("Invalid component type.")
                    }
                }
                static decompose(e, t, a, s) {
                    let r = m([e[0], e[1], e[2]]);
                    const n = m([e[4], e[5], e[6]]),
                        i = m([e[8], e[9], e[10]]);
                    var o, c, b, d, f, h, u, l, g, y, x, T, E, j, w, A, I;
                    c = (o = e)[0], b = o[1], d = o[2], f = o[3], h = o[4], u = o[5], l = o[6], g = o[7], y = o[8], x = o[9], T = o[10], E = o[11], j = o[12], w = o[13], A = o[14], (c * u - b * h) * (T * (I = o[15]) - E * A) - (c * l - d * h) * (x * I - E * w) + (c * g - f * h) * (x * A - T * w) + (b * l - d * u) * (y * I - E * j) - (b * g - f * u) * (y * A - T * j) + (d * g - f * l) * (y * w - x * j) < 0 && (r = -r), t[0] = e[12], t[1] = e[13], t[2] = e[14];
                    const N = e.slice(),
                        k = 1 / r,
                        v = 1 / n,
                        R = 1 / i;
                    N[0] *= k, N[1] *= k, N[2] *= k, N[4] *= v, N[5] *= v, N[6] *= v, N[8] *= R, N[9] *= R, N[10] *= R,
                        function(e, t) {
                            var a = new p(3);
                            ! function(e, t) {
                                var a = t[0],
                                    s = t[1],
                                    r = t[2],
                                    n = t[4],
                                    i = t[5],
                                    o = t[6],
                                    c = t[8],
                                    b = t[9],
                                    d = t[10];
                                e[0] = Math.hypot(a, s, r), e[1] = Math.hypot(n, i, o), e[2] = Math.hypot(c, b, d)
                            }(a, t);
                            var s = 1 / a[0],
                                r = 1 / a[1],
                                n = 1 / a[2],
                                i = t[0] * s,
                                o = t[1] * r,
                                c = t[2] * n,
                                b = t[4] * s,
                                d = t[5] * r,
                                f = t[6] * n,
                                h = t[8] * s,
                                u = t[9] * r,
                                l = t[10] * n,
                                g = i + d + l,
                                m = 0;
                            g > 0 ? (m = 2 * Math.sqrt(g + 1), e[3] = .25 * m, e[0] = (f - u) / m, e[1] = (h - c) / m, e[2] = (o - b) / m) : i > d && i > l ? (m = 2 * Math.sqrt(1 + i - d - l), e[3] = (f - u) / m, e[0] = .25 * m, e[1] = (o + b) / m, e[2] = (h + c) / m) : d > l ? (m = 2 * Math.sqrt(1 + d - i - l), e[3] = (h - c) / m, e[0] = (o + b) / m, e[1] = .25 * m, e[2] = (f + u) / m) : (m = 2 * Math.sqrt(1 + l - i - d), e[3] = (o - b) / m, e[0] = (h + c) / m, e[1] = (f + u) / m, e[2] = .25 * m)
                        }(a, N), s[0] = r, s[1] = n, s[2] = i
                }
                static compose(e, t, a, s) {
                    const r = s,
                        n = t[0],
                        i = t[1],
                        o = t[2],
                        c = t[3],
                        b = n + n,
                        d = i + i,
                        f = o + o,
                        h = n * b,
                        u = n * d,
                        l = n * f,
                        g = i * d,
                        p = i * f,
                        m = o * f,
                        y = c * b,
                        x = c * d,
                        T = c * f,
                        E = a[0],
                        j = a[1],
                        w = a[2];
                    return r[0] = (1 - (g + m)) * E, r[1] = (u + T) * E, r[2] = (l - x) * E, r[3] = 0, r[4] = (u - T) * j, r[5] = (1 - (h + m)) * j, r[6] = (p + y) * j, r[7] = 0, r[8] = (l + x) * w, r[9] = (p - y) * w, r[10] = (1 - (h + g)) * w, r[11] = 0, r[12] = e[0], r[13] = e[1], r[14] = e[2], r[15] = 1, r
                }
            }

            function C(e, t) {
                if (!!e != !!t) return !1;
                const a = e.getChild(),
                    s = t.getChild();
                return a === s || a.equals(s)
            }

            function D(e, t) {
                if (!!e != !!t) return !1;
                const a = e.values(),
                    s = t.values();
                if (a.length !== s.length) return !1;
                for (let e = 0; e < a.length; e++) {
                    const t = a[e],
                        r = s[e];
                    if (t.getChild() !== r.getChild() && !t.getChild().equals(r.getChild())) return !1
                }
                return !0
            }

            function O(e, t) {
                if (!!e != !!t) return !1;
                const a = e.keys(),
                    s = t.keys();
                if (a.length !== s.length) return !1;
                for (const s of a) {
                    const a = e.get(s),
                        r = t.get(s);
                    if (!!a != !!r) return !1;
                    const n = a.getChild(),
                        i = r.getChild();
                    if (n !== i && !n.equals(i)) return !1
                }
                return !0
            }

            function F(e, t) {
                if (e === t) return !0;
                if (!!e != !!t || !e || !t) return !1;
                if (e.length !== t.length) return !1;
                for (let a = 0; a < e.length; a++)
                    if (e[a] !== t[a]) return !1;
                return !0
            }

            function U(e, t) {
                if (e === t) return !0;
                if (!!e != !!t) return !1;
                if (!R(e) || !R(t)) return e === t;
                const a = e,
                    s = t;
                let r, n = 0,
                    i = 0;
                for (r in a) n++;
                for (r in s) i++;
                if (n !== i) return !1;
                for (r in a) {
                    const e = a[r],
                        t = s[r];
                    if (P(e) && P(t)) {
                        if (!F(e, t)) return !1
                    } else if (R(e) && R(t)) {
                        if (!U(e, t)) return !1
                    } else if (e !== t) return !1
                }
                return !0
            }

            function P(e) {
                return Array.isArray(e) || ArrayBuffer.isView(e)
            }
            const L = "23456789abdegjkmnpqrvwxyzABDEGJKMNPQRVWXYZ",
                B = new Set,
                G = function() {
                    let e = "";
                    for (let t = 0; t < 6; t++) e += L.charAt(Math.floor(Math.random() * L.length));
                    return e
                },
                z = "https://null.example";
            class V {
                static dirname(e) {
                    const t = e.lastIndexOf("/");
                    return -1 === t ? "./" : e.substring(0, t + 1)
                }
                static basename(e) {
                    return k.basename(new URL(e, z).pathname)
                }
                static extension(e) {
                    return k.extension(new URL(e, z).pathname)
                }
                static resolve(e, t) {
                    if (!this.isRelativePath(t)) return t;
                    const a = e.split("/"),
                        s = t.split("/");
                    a.pop();
                    for (let e = 0; e < s.length; e++) "." !== s[e] && (".." === s[e] ? a.pop() : a.push(s[e]));
                    return a.join("/")
                }
                static isAbsoluteURL(e) {
                    return this.PROTOCOL_REGEXP.test(e)
                }
                static isRelativePath(e) {
                    return !/^(?:[a-zA-Z]+:)?\//.test(e)
                }
            }
            V.DEFAULT_INIT = {}, V.PROTOCOL_REGEXP = /^[a-zA-Z]+:\/\//;
            const q = e => e,
                K = new Set;
            class H extends s.Ao {
                constructor(e, t = "") {
                    super(e), this[s.kE].name = t, this.init(), this.dispatchEvent({
                        type: "create"
                    })
                }
                getGraph() {
                    return this.graph
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        name: "",
                        extras: {}
                    })
                }
                set(e, t) {
                    return Array.isArray(t) && (t = t.slice()), super.set(e, t)
                }
                getName() {
                    return this.get("name")
                }
                setName(e) {
                    return this.set("name", e)
                }
                getExtras() {
                    return this.get("extras")
                }
                setExtras(e) {
                    return this.set("extras", e)
                }
                clone() {
                    return new(0, this.constructor)(this.graph).copy(this, q)
                }
                copy(e, t = q) {
                    for (const e in this[s.kE]) {
                        const t = this[s.kE][e];
                        if (t instanceof s.w3) this[s.Wb].has(e) || t.dispose();
                        else if (t instanceof s.Rl || t instanceof s.BK)
                            for (const e of t.values()) e.dispose();
                        else if (t instanceof s.lA)
                            for (const e of t.values()) e.dispose()
                    }
                    for (const a in e[s.kE]) {
                        const r = this[s.kE][a],
                            n = e[s.kE][a];
                        if (n instanceof s.w3) this[s.Wb].has(a) ? r.getChild().copy(t(n.getChild()), t) : this.setRef(a, t(n.getChild()), n.getAttributes());
                        else if (n instanceof s.BK || n instanceof s.Rl)
                            for (const e of n.values()) this.addRef(a, t(e.getChild()), e.getAttributes());
                        else if (n instanceof s.lA)
                            for (const e of n.keys()) {
                                const s = n.get(e);
                                this.setRefMap(a, e, t(s.getChild()), s.getAttributes())
                            } else R(n) ? this[s.kE][a] = JSON.parse(JSON.stringify(n)) : Array.isArray(n) || n instanceof ArrayBuffer || ArrayBuffer.isView(n) ? this[s.kE][a] = n.slice() : this[s.kE][a] = n
                    }
                    return this
                }
                equals(e, t = K) {
                    if (this === e) return !0;
                    if (this.propertyType !== e.propertyType) return !1;
                    for (const a in this[s.kE]) {
                        if (t.has(a)) continue;
                        const r = this[s.kE][a],
                            n = e[s.kE][a];
                        if (r instanceof s.w3 || n instanceof s.w3) {
                            if (!C(r, n)) return !1
                        } else if (r instanceof s.BK || n instanceof s.BK || r instanceof s.Rl || n instanceof s.Rl) {
                            if (!D(r, n)) return !1
                        } else if (r instanceof s.lA || n instanceof s.lA) {
                            if (!O(r, n)) return !1
                        } else if (R(r) || R(n)) {
                            if (!U(r, n)) return !1
                        } else if (P(r) || P(n)) {
                            if (!F(r, n)) return !1
                        } else if (r !== n) return !1
                    }
                    return !0
                }
                detach() {
                    return this.graph.disconnectParents(this, (e => "Root" !== e.propertyType)), this
                }
                listParents() {
                    return this.graph.listParents(this)
                }
            }
            class W extends H {
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        extensions: new s.lA
                    })
                }
                getExtension(e) {
                    return this.getRefMap("extensions", e)
                }
                setExtension(e, t) {
                    return t && t._validateParent(this), this.setRefMap("extensions", e, t)
                }
                listExtensions() {
                    return this.listRefMapValues("extensions")
                }
            }
            class J extends W {
                init() {
                    this.propertyType = o.ACCESSOR
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        array: null,
                        type: J.Type.SCALAR,
                        componentType: J.ComponentType.FLOAT,
                        normalized: !1,
                        sparse: !1,
                        buffer: null
                    })
                }
                static getElementSize(e) {
                    switch (e) {
                        case J.Type.SCALAR:
                            return 1;
                        case J.Type.VEC2:
                            return 2;
                        case J.Type.VEC3:
                            return 3;
                        case J.Type.VEC4:
                        case J.Type.MAT2:
                            return 4;
                        case J.Type.MAT3:
                            return 9;
                        case J.Type.MAT4:
                            return 16;
                        default:
                            throw new Error("Unexpected type: " + e)
                    }
                }
                static getComponentSize(e) {
                    switch (e) {
                        case J.ComponentType.BYTE:
                        case J.ComponentType.UNSIGNED_BYTE:
                            return 1;
                        case J.ComponentType.SHORT:
                        case J.ComponentType.UNSIGNED_SHORT:
                            return 2;
                        case J.ComponentType.UNSIGNED_INT:
                        case J.ComponentType.FLOAT:
                            return 4;
                        default:
                            throw new Error("Unexpected component type: " + e)
                    }
                }
                getMinNormalized(e) {
                    const t = this.getNormalized(),
                        a = this.getElementSize(),
                        s = this.getComponentType();
                    if (this.getMin(e), t)
                        for (let t = 0; t < a; t++) e[t] = _.decodeNormalizedInt(e[t], s);
                    return e
                }
                getMin(e) {
                    const t = this.getArray(),
                        a = this.getCount(),
                        s = this.getElementSize();
                    for (let t = 0; t < s; t++) e[t] = 1 / 0;
                    for (let r = 0; r < a * s; r += s)
                        for (let a = 0; a < s; a++) {
                            const s = t[r + a];
                            Number.isFinite(s) && (e[a] = Math.min(e[a], s))
                        }
                    return e
                }
                getMaxNormalized(e) {
                    const t = this.getNormalized(),
                        a = this.getElementSize(),
                        s = this.getComponentType();
                    if (this.getMax(e), t)
                        for (let t = 0; t < a; t++) e[t] = _.decodeNormalizedInt(e[t], s);
                    return e
                }
                getMax(e) {
                    const t = this.get("array"),
                        a = this.getCount(),
                        s = this.getElementSize();
                    for (let t = 0; t < s; t++) e[t] = -1 / 0;
                    for (let r = 0; r < a * s; r += s)
                        for (let a = 0; a < s; a++) {
                            const s = t[r + a];
                            Number.isFinite(s) && (e[a] = Math.max(e[a], s))
                        }
                    return e
                }
                getCount() {
                    const e = this.get("array");
                    return e ? e.length / this.getElementSize() : 0
                }
                getType() {
                    return this.get("type")
                }
                setType(e) {
                    return this.set("type", e)
                }
                getElementSize() {
                    return J.getElementSize(this.get("type"))
                }
                getComponentSize() {
                    return this.get("array").BYTES_PER_ELEMENT
                }
                getComponentType() {
                    return this.get("componentType")
                }
                getNormalized() {
                    return this.get("normalized")
                }
                setNormalized(e) {
                    return this.set("normalized", e)
                }
                getScalar(e) {
                    const t = this.getElementSize(),
                        a = this.getComponentType(),
                        s = this.getArray();
                    return this.getNormalized() ? _.decodeNormalizedInt(s[e * t], a) : s[e * t]
                }
                setScalar(e, t) {
                    const a = this.getElementSize(),
                        s = this.getComponentType(),
                        r = this.getArray();
                    return this.getNormalized() ? r[e * a] = _.encodeNormalizedInt(t, s) : r[e * a] = t, this
                }
                getElement(e, t) {
                    const a = this.getNormalized(),
                        s = this.getElementSize(),
                        r = this.getComponentType(),
                        n = this.getArray();
                    for (let i = 0; i < s; i++) t[i] = a ? _.decodeNormalizedInt(n[e * s + i], r) : n[e * s + i];
                    return t
                }
                setElement(e, t) {
                    const a = this.getNormalized(),
                        s = this.getElementSize(),
                        r = this.getComponentType(),
                        n = this.getArray();
                    for (let i = 0; i < s; i++) n[e * s + i] = a ? _.encodeNormalizedInt(t[i], r) : t[i];
                    return this
                }
                getSparse() {
                    return this.get("sparse")
                }
                setSparse(e) {
                    return this.set("sparse", e)
                }
                getBuffer() {
                    return this.getRef("buffer")
                }
                setBuffer(e) {
                    return this.setRef("buffer", e)
                }
                getArray() {
                    return this.get("array")
                }
                setArray(e) {
                    return this.set("componentType", e ? function(e) {
                        switch (e.constructor) {
                            case Float32Array:
                                return J.ComponentType.FLOAT;
                            case Uint32Array:
                                return J.ComponentType.UNSIGNED_INT;
                            case Uint16Array:
                                return J.ComponentType.UNSIGNED_SHORT;
                            case Uint8Array:
                                return J.ComponentType.UNSIGNED_BYTE;
                            case Int16Array:
                                return J.ComponentType.SHORT;
                            case Int8Array:
                                return J.ComponentType.BYTE;
                            default:
                                throw new Error("Unknown accessor componentType.")
                        }
                    }(e) : J.ComponentType.FLOAT), this.set("array", e), this
                }
                getByteLength() {
                    const e = this.get("array");
                    return e ? e.byteLength : 0
                }
            }
            J.Type = {
                SCALAR: "SCALAR",
                VEC2: "VEC2",
                VEC3: "VEC3",
                VEC4: "VEC4",
                MAT2: "MAT2",
                MAT3: "MAT3",
                MAT4: "MAT4"
            }, J.ComponentType = {
                BYTE: 5120,
                UNSIGNED_BYTE: 5121,
                SHORT: 5122,
                UNSIGNED_SHORT: 5123,
                UNSIGNED_INT: 5125,
                FLOAT: 5126
            };
            class Q extends W {
                init() {
                    this.propertyType = o.ANIMATION
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        channels: new s.BK,
                        samplers: new s.BK
                    })
                }
                addChannel(e) {
                    return this.addRef("channels", e)
                }
                removeChannel(e) {
                    return this.removeRef("channels", e)
                }
                listChannels() {
                    return this.listRefs("channels")
                }
                addSampler(e) {
                    return this.addRef("samplers", e)
                }
                removeSampler(e) {
                    return this.removeRef("samplers", e)
                }
                listSamplers() {
                    return this.listRefs("samplers")
                }
            }
            class Y extends W {
                init() {
                    this.propertyType = o.ANIMATION_CHANNEL
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        targetPath: null,
                        targetNode: null,
                        sampler: null
                    })
                }
                getTargetPath() {
                    return this.get("targetPath")
                }
                setTargetPath(e) {
                    return this.set("targetPath", e)
                }
                getTargetNode() {
                    return this.getRef("targetNode")
                }
                setTargetNode(e) {
                    return this.setRef("targetNode", e)
                }
                getSampler() {
                    return this.getRef("sampler")
                }
                setSampler(e) {
                    return this.setRef("sampler", e)
                }
            }
            Y.TargetPath = {
                TRANSLATION: "translation",
                ROTATION: "rotation",
                SCALE: "scale",
                WEIGHTS: "weights"
            };
            class X extends W {
                init() {
                    this.propertyType = o.ANIMATION_SAMPLER
                }
                getDefaultAttributes() {
                    return Object.assign(super.getDefaults(), {
                        interpolation: X.Interpolation.LINEAR,
                        input: null,
                        output: null
                    })
                }
                getInterpolation() {
                    return this.get("interpolation")
                }
                setInterpolation(e) {
                    return this.set("interpolation", e)
                }
                getInput() {
                    return this.getRef("input")
                }
                setInput(e) {
                    return this.setRef("input", e, {
                        usage: b.OTHER
                    })
                }
                getOutput() {
                    return this.getRef("output")
                }
                setOutput(e) {
                    return this.setRef("output", e, {
                        usage: b.OTHER
                    })
                }
            }
            X.Interpolation = {
                LINEAR: "LINEAR",
                STEP: "STEP",
                CUBICSPLINE: "CUBICSPLINE"
            };
            class Z extends W {
                init() {
                    this.propertyType = o.BUFFER
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        uri: ""
                    })
                }
                getURI() {
                    return this.get("uri")
                }
                setURI(e) {
                    return this.set("uri", e)
                }
            }
            class $ extends W {
                init() {
                    this.propertyType = o.CAMERA
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        type: $.Type.PERSPECTIVE,
                        znear: .1,
                        zfar: 100,
                        aspectRatio: null,
                        yfov: 2 * Math.PI * 50 / 360,
                        xmag: 1,
                        ymag: 1
                    })
                }
                getType() {
                    return this.get("type")
                }
                setType(e) {
                    return this.set("type", e)
                }
                getZNear() {
                    return this.get("znear")
                }
                setZNear(e) {
                    return this.set("znear", e)
                }
                getZFar() {
                    return this.get("zfar")
                }
                setZFar(e) {
                    return this.set("zfar", e)
                }
                getAspectRatio() {
                    return this.get("aspectRatio")
                }
                setAspectRatio(e) {
                    return this.set("aspectRatio", e)
                }
                getYFov() {
                    return this.get("yfov")
                }
                setYFov(e) {
                    return this.set("yfov", e)
                }
                getXMag() {
                    return this.get("xmag")
                }
                setXMag(e) {
                    return this.set("xmag", e)
                }
                getYMag() {
                    return this.get("ymag")
                }
                setYMag(e) {
                    return this.set("ymag", e)
                }
            }
            $.Type = {
                PERSPECTIVE: "perspective",
                ORTHOGRAPHIC: "orthographic"
            };
            class ee extends H {
                _validateParent(e) {
                    if (!this.parentTypes.includes(e.propertyType)) throw new Error(`Parent "${e.propertyType}" invalid for child "${this.propertyType}".`)
                }
            }
            ee.EXTENSION_NAME = void 0;
            class te extends W {
                init() {
                    this.propertyType = o.TEXTURE_INFO
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        texCoord: 0,
                        magFilter: null,
                        minFilter: null,
                        wrapS: te.WrapMode.REPEAT,
                        wrapT: te.WrapMode.REPEAT
                    })
                }
                getTexCoord() {
                    return this.get("texCoord")
                }
                setTexCoord(e) {
                    return this.set("texCoord", e)
                }
                getMagFilter() {
                    return this.get("magFilter")
                }
                setMagFilter(e) {
                    return this.set("magFilter", e)
                }
                getMinFilter() {
                    return this.get("minFilter")
                }
                setMinFilter(e) {
                    return this.set("minFilter", e)
                }
                getWrapS() {
                    return this.get("wrapS")
                }
                setWrapS(e) {
                    return this.set("wrapS", e)
                }
                getWrapT() {
                    return this.get("wrapT")
                }
                setWrapT(e) {
                    return this.set("wrapT", e)
                }
            }
            te.WrapMode = {
                CLAMP_TO_EDGE: 33071,
                MIRRORED_REPEAT: 33648,
                REPEAT: 10497
            }, te.MagFilter = {
                NEAREST: 9728,
                LINEAR: 9729
            }, te.MinFilter = {
                NEAREST: 9728,
                LINEAR: 9729,
                NEAREST_MIPMAP_NEAREST: 9984,
                LINEAR_MIPMAP_NEAREST: 9985,
                NEAREST_MIPMAP_LINEAR: 9986,
                LINEAR_MIPMAP_LINEAR: 9987
            };
            const {
                R: ae,
                G: se,
                B: re,
                A: ne
            } = d;
            class ie extends W {
                init() {
                    this.propertyType = o.MATERIAL
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        alphaMode: ie.AlphaMode.OPAQUE,
                        alphaCutoff: .5,
                        doubleSided: !1,
                        baseColorFactor: [1, 1, 1, 1],
                        baseColorTexture: null,
                        baseColorTextureInfo: new te(this.graph, "baseColorTextureInfo"),
                        emissiveFactor: [0, 0, 0],
                        emissiveTexture: null,
                        emissiveTextureInfo: new te(this.graph, "emissiveTextureInfo"),
                        normalScale: 1,
                        normalTexture: null,
                        normalTextureInfo: new te(this.graph, "normalTextureInfo"),
                        occlusionStrength: 1,
                        occlusionTexture: null,
                        occlusionTextureInfo: new te(this.graph, "occlusionTextureInfo"),
                        roughnessFactor: 1,
                        metallicFactor: 1,
                        metallicRoughnessTexture: null,
                        metallicRoughnessTextureInfo: new te(this.graph, "metallicRoughnessTextureInfo")
                    })
                }
                getDoubleSided() {
                    return this.get("doubleSided")
                }
                setDoubleSided(e) {
                    return this.set("doubleSided", e)
                }
                getAlpha() {
                    return this.get("baseColorFactor")[3]
                }
                setAlpha(e) {
                    const t = this.get("baseColorFactor").slice();
                    return t[3] = e, this.set("baseColorFactor", t)
                }
                getAlphaMode() {
                    return this.get("alphaMode")
                }
                setAlphaMode(e) {
                    return this.set("alphaMode", e)
                }
                getAlphaCutoff() {
                    return this.get("alphaCutoff")
                }
                setAlphaCutoff(e) {
                    return this.set("alphaCutoff", e)
                }
                getBaseColorFactor() {
                    return this.get("baseColorFactor")
                }
                setBaseColorFactor(e) {
                    return this.set("baseColorFactor", e)
                }
                getBaseColorTexture() {
                    return this.getRef("baseColorTexture")
                }
                getBaseColorTextureInfo() {
                    return this.getRef("baseColorTexture") ? this.getRef("baseColorTextureInfo") : null
                }
                setBaseColorTexture(e) {
                    return this.setRef("baseColorTexture", e, {
                        channels: ae | se | re | ne,
                        isColor: !0
                    })
                }
                getEmissiveFactor() {
                    return this.get("emissiveFactor")
                }
                setEmissiveFactor(e) {
                    return this.set("emissiveFactor", e)
                }
                getEmissiveTexture() {
                    return this.getRef("emissiveTexture")
                }
                getEmissiveTextureInfo() {
                    return this.getRef("emissiveTexture") ? this.getRef("emissiveTextureInfo") : null
                }
                setEmissiveTexture(e) {
                    return this.setRef("emissiveTexture", e, {
                        channels: ae | se | re,
                        isColor: !0
                    })
                }
                getNormalScale() {
                    return this.get("normalScale")
                }
                setNormalScale(e) {
                    return this.set("normalScale", e)
                }
                getNormalTexture() {
                    return this.getRef("normalTexture")
                }
                getNormalTextureInfo() {
                    return this.getRef("normalTexture") ? this.getRef("normalTextureInfo") : null
                }
                setNormalTexture(e) {
                    return this.setRef("normalTexture", e, {
                        channels: ae | se | re
                    })
                }
                getOcclusionStrength() {
                    return this.get("occlusionStrength")
                }
                setOcclusionStrength(e) {
                    return this.set("occlusionStrength", e)
                }
                getOcclusionTexture() {
                    return this.getRef("occlusionTexture")
                }
                getOcclusionTextureInfo() {
                    return this.getRef("occlusionTexture") ? this.getRef("occlusionTextureInfo") : null
                }
                setOcclusionTexture(e) {
                    return this.setRef("occlusionTexture", e, {
                        channels: ae
                    })
                }
                getRoughnessFactor() {
                    return this.get("roughnessFactor")
                }
                setRoughnessFactor(e) {
                    return this.set("roughnessFactor", e)
                }
                getMetallicFactor() {
                    return this.get("metallicFactor")
                }
                setMetallicFactor(e) {
                    return this.set("metallicFactor", e)
                }
                getMetallicRoughnessTexture() {
                    return this.getRef("metallicRoughnessTexture")
                }
                getMetallicRoughnessTextureInfo() {
                    return this.getRef("metallicRoughnessTexture") ? this.getRef("metallicRoughnessTextureInfo") : null
                }
                setMetallicRoughnessTexture(e) {
                    return this.setRef("metallicRoughnessTexture", e, {
                        channels: se | re
                    })
                }
            }
            ie.AlphaMode = {
                OPAQUE: "OPAQUE",
                MASK: "MASK",
                BLEND: "BLEND"
            };
            class oe extends W {
                init() {
                    this.propertyType = o.MESH
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        weights: [],
                        primitives: new s.BK
                    })
                }
                addPrimitive(e) {
                    return this.addRef("primitives", e)
                }
                removePrimitive(e) {
                    return this.removeRef("primitives", e)
                }
                listPrimitives() {
                    return this.listRefs("primitives")
                }
                getWeights() {
                    return this.get("weights")
                }
                setWeights(e) {
                    return this.set("weights", e)
                }
            }
            class ce extends W {
                init() {
                    this.propertyType = o.NODE
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        translation: [0, 0, 0],
                        rotation: [0, 0, 0, 1],
                        scale: [1, 1, 1],
                        weights: [],
                        camera: null,
                        mesh: null,
                        skin: null,
                        children: new s.BK
                    })
                }
                copy(e, t = q) {
                    if (t === q) throw new Error("Node cannot be copied.");
                    return super.copy(e, t)
                }
                getTranslation() {
                    return this.get("translation")
                }
                getRotation() {
                    return this.get("rotation")
                }
                getScale() {
                    return this.get("scale")
                }
                setTranslation(e) {
                    return this.set("translation", e)
                }
                setRotation(e) {
                    return this.set("rotation", e)
                }
                setScale(e) {
                    return this.set("scale", e)
                }
                getMatrix() {
                    return _.compose(this.get("translation"), this.get("rotation"), this.get("scale"), [])
                }
                setMatrix(e) {
                    const t = this.get("translation").slice(),
                        a = this.get("rotation").slice(),
                        s = this.get("scale").slice();
                    return _.decompose(e, t, a, s), this.set("translation", t).set("rotation", a).set("scale", s)
                }
                getWorldTranslation() {
                    const e = [0, 0, 0];
                    return _.decompose(this.getWorldMatrix(), e, [0, 0, 0, 1], [1, 1, 1]), e
                }
                getWorldRotation() {
                    const e = [0, 0, 0, 1];
                    return _.decompose(this.getWorldMatrix(), [0, 0, 0], e, [1, 1, 1]), e
                }
                getWorldScale() {
                    const e = [1, 1, 1];
                    return _.decompose(this.getWorldMatrix(), [0, 0, 0], [0, 0, 0, 1], e), e
                }
                getWorldMatrix() {
                    const e = [];
                    for (let t = this; null != t; t = t.getParentNode()) e.push(t);
                    let t;
                    const a = e.pop().getMatrix();
                    for (; t = e.pop();) M(a, a, t.getMatrix());
                    return a
                }
                addChild(e) {
                    const t = e.getParentNode();
                    t && t.removeChild(e);
                    for (const t of e.listParents()) t.propertyType === o.SCENE && t.removeChild(e);
                    return this.addRef("children", e)
                }
                removeChild(e) {
                    return this.removeRef("children", e)
                }
                listChildren() {
                    return this.listRefs("children")
                }
                getParentNode() {
                    for (const e of this.listParents())
                        if (e.propertyType === o.NODE) return e;
                    return null
                }
                getMesh() {
                    return this.getRef("mesh")
                }
                setMesh(e) {
                    return this.setRef("mesh", e)
                }
                getCamera() {
                    return this.getRef("camera")
                }
                setCamera(e) {
                    return this.setRef("camera", e)
                }
                getSkin() {
                    return this.getRef("skin")
                }
                setSkin(e) {
                    return this.setRef("skin", e)
                }
                getWeights() {
                    return this.get("weights")
                }
                setWeights(e) {
                    return this.set("weights", e)
                }
                traverse(e) {
                    e(this);
                    for (const t of this.listChildren()) t.traverse(e);
                    return this
                }
            }
            class be extends W {
                init() {
                    this.propertyType = o.PRIMITIVE
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        mode: be.Mode.TRIANGLES,
                        material: null,
                        indices: null,
                        attributes: new s.lA,
                        targets: new s.BK
                    })
                }
                getIndices() {
                    return this.getRef("indices")
                }
                setIndices(e) {
                    return this.setRef("indices", e, {
                        usage: b.ELEMENT_ARRAY_BUFFER
                    })
                }
                getAttribute(e) {
                    return this.getRefMap("attributes", e)
                }
                setAttribute(e, t) {
                    return this.setRefMap("attributes", e, t, {
                        usage: b.ARRAY_BUFFER
                    })
                }
                listAttributes() {
                    return this.listRefMapValues("attributes")
                }
                listSemantics() {
                    return this.listRefMapKeys("attributes")
                }
                getMaterial() {
                    return this.getRef("material")
                }
                setMaterial(e) {
                    return this.setRef("material", e)
                }
                getMode() {
                    return this.get("mode")
                }
                setMode(e) {
                    return this.set("mode", e)
                }
                listTargets() {
                    return this.listRefs("targets")
                }
                addTarget(e) {
                    return this.addRef("targets", e)
                }
                removeTarget(e) {
                    return this.removeRef("targets", e)
                }
            }
            be.Mode = {
                POINTS: 0,
                LINES: 1,
                LINE_LOOP: 2,
                LINE_STRIP: 3,
                TRIANGLES: 4,
                TRIANGLE_STRIP: 5,
                TRIANGLE_FAN: 6
            };
            class de extends H {
                init() {
                    this.propertyType = o.PRIMITIVE_TARGET
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        attributes: new s.lA
                    })
                }
                getAttribute(e) {
                    return this.getRefMap("attributes", e)
                }
                setAttribute(e, t) {
                    return this.setRefMap("attributes", e, t, {
                        usage: b.ARRAY_BUFFER
                    })
                }
                listAttributes() {
                    return this.listRefMapValues("attributes")
                }
                listSemantics() {
                    return this.listRefMapKeys("attributes")
                }
            }

            function fe() {
                return fe = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }, fe.apply(this, arguments)
            }
            class he extends W {
                init() {
                    this.propertyType = o.SCENE
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        children: new s.BK
                    })
                }
                copy(e, t = q) {
                    if (t === q) throw new Error("Scene cannot be copied.");
                    return super.copy(e, t)
                }
                addChild(e) {
                    const t = e.getParentNode();
                    return t && t.removeChild(e), this.addRef("children", e)
                }
                removeChild(e) {
                    return this.removeRef("children", e)
                }
                listChildren() {
                    return this.listRefs("children")
                }
                traverse(e) {
                    for (const t of this.listChildren()) t.traverse(e);
                    return this
                }
            }
            class ue extends W {
                init() {
                    this.propertyType = o.SKIN
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        skeleton: null,
                        inverseBindMatrices: null,
                        joints: new s.BK
                    })
                }
                getSkeleton() {
                    return this.getRef("skeleton")
                }
                setSkeleton(e) {
                    return this.setRef("skeleton", e)
                }
                getInverseBindMatrices() {
                    return this.getRef("inverseBindMatrices")
                }
                setInverseBindMatrices(e) {
                    return this.setRef("inverseBindMatrices", e, {
                        usage: b.INVERSE_BIND_MATRICES
                    })
                }
                addJoint(e) {
                    return this.addRef("joints", e)
                }
                removeJoint(e) {
                    return this.removeRef("joints", e)
                }
                listJoints() {
                    return this.listRefs("joints")
                }
            }
            class le extends W {
                init() {
                    this.propertyType = o.TEXTURE
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        image: null,
                        mimeType: "",
                        uri: ""
                    })
                }
                getMimeType() {
                    return this.get("mimeType") || I.extensionToMimeType(k.extension(this.get("uri")))
                }
                setMimeType(e) {
                    return this.set("mimeType", e)
                }
                getURI() {
                    return this.get("uri")
                }
                setURI(e) {
                    this.set("uri", e);
                    const t = I.extensionToMimeType(k.extension(e));
                    return t && this.set("mimeType", t), this
                }
                getImage() {
                    return this.get("image")
                }
                setImage(e) {
                    return this.set("image", j.assertView(e))
                }
                getSize() {
                    const e = this.get("image");
                    return e ? I.getSize(e, this.getMimeType()) : null
                }
            }
            class ge extends W {
                init() {
                    this.propertyType = o.ROOT
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        asset: {
                            generator: "glTF-Transform v4.0.1",
                            version: "2.0"
                        },
                        defaultScene: null,
                        accessors: new s.BK,
                        animations: new s.BK,
                        buffers: new s.BK,
                        cameras: new s.BK,
                        materials: new s.BK,
                        meshes: new s.BK,
                        nodes: new s.BK,
                        scenes: new s.BK,
                        skins: new s.BK,
                        textures: new s.BK
                    })
                }
                constructor(e) {
                    super(e), this._extensions = new Set, e.addEventListener("node:create", (e => {
                        this._addChildOfRoot(e.target)
                    }))
                }
                clone() {
                    throw new Error("Root cannot be cloned.")
                }
                copy(e, t = q) {
                    if (t === q) throw new Error("Root cannot be copied.");
                    this.set("asset", fe({}, e.get("asset"))), this.setName(e.getName()), this.setExtras(fe({}, e.getExtras())), this.setDefaultScene(e.getDefaultScene() ? t(e.getDefaultScene()) : null);
                    for (const a of e.listRefMapKeys("extensions")) {
                        const s = e.getExtension(a);
                        this.setExtension(a, t(s))
                    }
                    return this
                }
                _addChildOfRoot(e) {
                    return e instanceof he ? this.addRef("scenes", e) : e instanceof ce ? this.addRef("nodes", e) : e instanceof $ ? this.addRef("cameras", e) : e instanceof ue ? this.addRef("skins", e) : e instanceof oe ? this.addRef("meshes", e) : e instanceof ie ? this.addRef("materials", e) : e instanceof le ? this.addRef("textures", e) : e instanceof Q ? this.addRef("animations", e) : e instanceof J ? this.addRef("accessors", e) : e instanceof Z && this.addRef("buffers", e), this
                }
                getAsset() {
                    return this.get("asset")
                }
                listExtensionsUsed() {
                    return Array.from(this._extensions)
                }
                listExtensionsRequired() {
                    return this.listExtensionsUsed().filter((e => e.isRequired()))
                }
                _enableExtension(e) {
                    return this._extensions.add(e), this
                }
                _disableExtension(e) {
                    return this._extensions.delete(e), this
                }
                listScenes() {
                    return this.listRefs("scenes")
                }
                setDefaultScene(e) {
                    return this.setRef("defaultScene", e)
                }
                getDefaultScene() {
                    return this.getRef("defaultScene")
                }
                listNodes() {
                    return this.listRefs("nodes")
                }
                listCameras() {
                    return this.listRefs("cameras")
                }
                listSkins() {
                    return this.listRefs("skins")
                }
                listMeshes() {
                    return this.listRefs("meshes")
                }
                listMaterials() {
                    return this.listRefs("materials")
                }
                listTextures() {
                    return this.listRefs("textures")
                }
                listAnimations() {
                    return this.listRefs("animations")
                }
                listAccessors() {
                    return this.listRefs("accessors")
                }
                listBuffers() {
                    return this.listRefs("buffers")
                }
            }
            class pe {
                static fromGraph(e) {
                    return pe._GRAPH_DOCUMENTS.get(e) || null
                }
                constructor() {
                    this._graph = new s.kJ, this._root = new ge(this._graph), this._logger = S.DEFAULT_INSTANCE, pe._GRAPH_DOCUMENTS.set(this._graph, this)
                }
                getRoot() {
                    return this._root
                }
                getGraph() {
                    return this._graph
                }
                getLogger() {
                    return this._logger
                }
                setLogger(e) {
                    return this._logger = e, this
                }
                clone() {
                    throw new Error("Use 'cloneDocument(source)' from '@gltf-transform/functions'.")
                }
                merge(e) {
                    throw new Error("Use 'mergeDocuments(target, source)' from '@gltf-transform/functions'.")
                }
                async transform(...e) {
                    const t = e.map((e => e.name));
                    for (const a of e) await a(this, {
                        stack: t
                    });
                    return this
                }
                createExtension(e) {
                    const t = e.EXTENSION_NAME;
                    return this.getRoot().listExtensionsUsed().find((e => e.extensionName === t)) || new e(this)
                }
                createScene(e = "") {
                    return new he(this._graph, e)
                }
                createNode(e = "") {
                    return new ce(this._graph, e)
                }
                createCamera(e = "") {
                    return new $(this._graph, e)
                }
                createSkin(e = "") {
                    return new ue(this._graph, e)
                }
                createMesh(e = "") {
                    return new oe(this._graph, e)
                }
                createPrimitive() {
                    return new be(this._graph)
                }
                createPrimitiveTarget(e = "") {
                    return new de(this._graph, e)
                }
                createMaterial(e = "") {
                    return new ie(this._graph, e)
                }
                createTexture(e = "") {
                    return new le(this._graph, e)
                }
                createAnimation(e = "") {
                    return new Q(this._graph, e)
                }
                createAnimationChannel(e = "") {
                    return new Y(this._graph, e)
                }
                createAnimationSampler(e = "") {
                    return new X(this._graph, e)
                }
                createAccessor(e = "", t = null) {
                    return t || (t = this.getRoot().listBuffers()[0]), new J(this._graph, e).setBuffer(t)
                }
                createBuffer(e = "") {
                    return new Z(this._graph, e)
                }
            }
            pe._GRAPH_DOCUMENTS = new WeakMap;
            class me {
                constructor(e) {
                    this.extensionName = "", this.prereadTypes = [], this.prewriteTypes = [], this.readDependencies = [], this.writeDependencies = [], this.document = void 0, this.required = !1, this.properties = new Set, this._listener = void 0, this.document = e, e.getRoot()._enableExtension(this), this._listener = e => {
                        const t = e,
                            a = t.target;
                        a instanceof ee && a.extensionName === this.extensionName && ("node:create" === t.type && this._addExtensionProperty(a), "node:dispose" === t.type && this._removeExtensionProperty(a))
                    };
                    const t = e.getGraph();
                    t.addEventListener("node:create", this._listener), t.addEventListener("node:dispose", this._listener)
                }
                dispose() {
                    this.document.getRoot()._disableExtension(this);
                    const e = this.document.getGraph();
                    e.removeEventListener("node:create", this._listener), e.removeEventListener("node:dispose", this._listener);
                    for (const e of this.properties) e.dispose()
                }
                static register() {}
                isRequired() {
                    return this.required
                }
                setRequired(e) {
                    return this.required = e, this
                }
                listProperties() {
                    return Array.from(this.properties)
                }
                _addExtensionProperty(e) {
                    return this.properties.add(e), this
                }
                _removeExtensionProperty(e) {
                    return this.properties.delete(e), this
                }
                install(e, t) {
                    return this
                }
                preread(e, t) {
                    return this
                }
                prewrite(e, t) {
                    return this
                }
            }
            me.EXTENSION_NAME = void 0;
            class ye {
                constructor(e) {
                    this.jsonDoc = void 0, this.buffers = [], this.bufferViews = [], this.bufferViewBuffers = [], this.accessors = [], this.textures = [], this.textureInfos = new Map, this.materials = [], this.meshes = [], this.cameras = [], this.nodes = [], this.skins = [], this.animations = [], this.scenes = [], this.jsonDoc = e
                }
                setTextureInfo(e, t) {
                    this.textureInfos.set(e, t), void 0 !== t.texCoord && e.setTexCoord(t.texCoord), void 0 !== t.extras && e.setExtras(t.extras);
                    const a = this.jsonDoc.json.textures[t.index];
                    if (void 0 === a.sampler) return;
                    const s = this.jsonDoc.json.samplers[a.sampler];
                    void 0 !== s.magFilter && e.setMagFilter(s.magFilter), void 0 !== s.minFilter && e.setMinFilter(s.minFilter), void 0 !== s.wrapS && e.setWrapS(s.wrapS), void 0 !== s.wrapT && e.setWrapT(s.wrapT)
                }
            }
            const xe = {
                logger: S.DEFAULT_INSTANCE,
                extensions: [],
                dependencies: {}
            };
            class Te {
                static read(e, t = xe) {
                    const a = fe({}, xe, t),
                        {
                            json: s
                        } = e,
                        r = (new pe).setLogger(a.logger);
                    this.validate(e, a);
                    const n = new ye(e),
                        c = s.asset,
                        b = r.getRoot().getAsset();
                    c.copyright && (b.copyright = c.copyright), c.extras && (b.extras = c.extras), void 0 !== s.extras && r.getRoot().setExtras(fe({}, s.extras));
                    const d = s.extensionsUsed || [],
                        f = s.extensionsRequired || [];
                    a.extensions.sort(((e, t) => e.EXTENSION_NAME > t.EXTENSION_NAME ? 1 : -1));
                    for (const e of a.extensions)
                        if (d.includes(e.EXTENSION_NAME)) {
                            const t = r.createExtension(e).setRequired(f.includes(e.EXTENSION_NAME));
                            for (const e of t.readDependencies) t.install(e, a.dependencies[e])
                        } const u = s.buffers || [];
                    r.getRoot().listExtensionsUsed().filter((e => e.prereadTypes.includes(o.BUFFER))).forEach((e => e.preread(n, o.BUFFER))), n.buffers = u.map((e => {
                        const t = r.createBuffer(e.name);
                        return e.extras && t.setExtras(e.extras), e.uri && 0 !== e.uri.indexOf("__") && t.setURI(e.uri), t
                    }));
                    const l = s.bufferViews || [];
                    n.bufferViewBuffers = l.map(((t, a) => {
                        if (!n.bufferViews[a]) {
                            const s = e.json.buffers[t.buffer],
                                r = s.uri ? e.resources[s.uri] : e.resources[i],
                                o = t.byteOffset || 0;
                            n.bufferViews[a] = j.toView(r, o, t.byteLength)
                        }
                        return n.buffers[t.buffer]
                    }));
                    const g = s.accessors || [];
                    n.accessors = g.map((e => {
                        const t = n.bufferViewBuffers[e.bufferView],
                            a = r.createAccessor(e.name, t).setType(e.type);
                        return e.extras && a.setExtras(e.extras), void 0 !== e.normalized && a.setNormalized(e.normalized), void 0 === e.bufferView || a.setArray(Ee(e, n)), a
                    }));
                    const p = s.images || [],
                        m = s.textures || [];
                    r.getRoot().listExtensionsUsed().filter((e => e.prereadTypes.includes(o.TEXTURE))).forEach((e => e.preread(n, o.TEXTURE))), n.textures = p.map((t => {
                        const a = r.createTexture(t.name);
                        if (t.extras && a.setExtras(t.extras), void 0 !== t.bufferView) {
                            const r = s.bufferViews[t.bufferView],
                                n = e.json.buffers[r.buffer],
                                o = n.uri ? e.resources[n.uri] : e.resources[i],
                                c = r.byteOffset || 0,
                                b = r.byteLength,
                                d = o.slice(c, c + b);
                            a.setImage(d)
                        } else void 0 !== t.uri && (a.setImage(e.resources[t.uri]), 0 !== t.uri.indexOf("__") && a.setURI(t.uri));
                        if (void 0 !== t.mimeType) a.setMimeType(t.mimeType);
                        else if (t.uri) {
                            const e = k.extension(t.uri);
                            a.setMimeType(I.extensionToMimeType(e))
                        }
                        return a
                    })), r.getRoot().listExtensionsUsed().filter((e => e.prereadTypes.includes(o.MATERIAL))).forEach((e => e.preread(n, o.MATERIAL)));
                    const y = s.materials || [];
                    n.materials = y.map((e => {
                        const t = r.createMaterial(e.name);
                        e.extras && t.setExtras(e.extras), void 0 !== e.alphaMode && t.setAlphaMode(e.alphaMode), void 0 !== e.alphaCutoff && t.setAlphaCutoff(e.alphaCutoff), void 0 !== e.doubleSided && t.setDoubleSided(e.doubleSided);
                        const a = e.pbrMetallicRoughness || {};
                        if (void 0 !== a.baseColorFactor && t.setBaseColorFactor(a.baseColorFactor), void 0 !== e.emissiveFactor && t.setEmissiveFactor(e.emissiveFactor), void 0 !== a.metallicFactor && t.setMetallicFactor(a.metallicFactor), void 0 !== a.roughnessFactor && t.setRoughnessFactor(a.roughnessFactor), void 0 !== a.baseColorTexture) {
                            const e = a.baseColorTexture,
                                s = n.textures[m[e.index].source];
                            t.setBaseColorTexture(s), n.setTextureInfo(t.getBaseColorTextureInfo(), e)
                        }
                        if (void 0 !== e.emissiveTexture) {
                            const a = e.emissiveTexture,
                                s = n.textures[m[a.index].source];
                            t.setEmissiveTexture(s), n.setTextureInfo(t.getEmissiveTextureInfo(), a)
                        }
                        if (void 0 !== e.normalTexture) {
                            const a = e.normalTexture,
                                s = n.textures[m[a.index].source];
                            t.setNormalTexture(s), n.setTextureInfo(t.getNormalTextureInfo(), a), void 0 !== e.normalTexture.scale && t.setNormalScale(e.normalTexture.scale)
                        }
                        if (void 0 !== e.occlusionTexture) {
                            const a = e.occlusionTexture,
                                s = n.textures[m[a.index].source];
                            t.setOcclusionTexture(s), n.setTextureInfo(t.getOcclusionTextureInfo(), a), void 0 !== e.occlusionTexture.strength && t.setOcclusionStrength(e.occlusionTexture.strength)
                        }
                        if (void 0 !== a.metallicRoughnessTexture) {
                            const e = a.metallicRoughnessTexture,
                                s = n.textures[m[e.index].source];
                            t.setMetallicRoughnessTexture(s), n.setTextureInfo(t.getMetallicRoughnessTextureInfo(), e)
                        }
                        return t
                    })), r.getRoot().listExtensionsUsed().filter((e => e.prereadTypes.includes(o.MESH))).forEach((e => e.preread(n, o.MESH)));
                    const x = s.meshes || [];
                    r.getRoot().listExtensionsUsed().filter((e => e.prereadTypes.includes(o.PRIMITIVE))).forEach((e => e.preread(n, o.PRIMITIVE))), n.meshes = x.map((e => {
                        const t = r.createMesh(e.name);
                        return e.extras && t.setExtras(e.extras), void 0 !== e.weights && t.setWeights(e.weights), (e.primitives || []).forEach((a => {
                            const s = r.createPrimitive();
                            a.extras && s.setExtras(a.extras), void 0 !== a.material && s.setMaterial(n.materials[a.material]), void 0 !== a.mode && s.setMode(a.mode);
                            for (const [e, t] of Object.entries(a.attributes || {})) s.setAttribute(e, n.accessors[t]);
                            void 0 !== a.indices && s.setIndices(n.accessors[a.indices]);
                            const i = e.extras && e.extras.targetNames || [];
                            (a.targets || []).forEach(((e, t) => {
                                const a = i[t] || t.toString(),
                                    o = r.createPrimitiveTarget(a);
                                for (const [t, a] of Object.entries(e)) o.setAttribute(t, n.accessors[a]);
                                s.addTarget(o)
                            })), t.addPrimitive(s)
                        })), t
                    }));
                    const T = s.cameras || [];
                    n.cameras = T.map((e => {
                        const t = r.createCamera(e.name).setType(e.type);
                        if (e.extras && t.setExtras(e.extras), e.type === $.Type.PERSPECTIVE) {
                            const a = e.perspective;
                            t.setYFov(a.yfov), t.setZNear(a.znear), void 0 !== a.zfar && t.setZFar(a.zfar), void 0 !== a.aspectRatio && t.setAspectRatio(a.aspectRatio)
                        } else {
                            const a = e.orthographic;
                            t.setZNear(a.znear).setZFar(a.zfar).setXMag(a.xmag).setYMag(a.ymag)
                        }
                        return t
                    }));
                    const E = s.nodes || [];
                    r.getRoot().listExtensionsUsed().filter((e => e.prereadTypes.includes(o.NODE))).forEach((e => e.preread(n, o.NODE))), n.nodes = E.map((e => {
                        const t = r.createNode(e.name);
                        if (e.extras && t.setExtras(e.extras), void 0 !== e.translation && t.setTranslation(e.translation), void 0 !== e.rotation && t.setRotation(e.rotation), void 0 !== e.scale && t.setScale(e.scale), void 0 !== e.matrix) {
                            const a = [0, 0, 0],
                                s = [0, 0, 0, 1],
                                r = [1, 1, 1];
                            _.decompose(e.matrix, a, s, r), t.setTranslation(a), t.setRotation(s), t.setScale(r)
                        }
                        return void 0 !== e.weights && t.setWeights(e.weights), t
                    }));
                    const w = s.skins || [];
                    n.skins = w.map((e => {
                        const t = r.createSkin(e.name);
                        e.extras && t.setExtras(e.extras), void 0 !== e.inverseBindMatrices && t.setInverseBindMatrices(n.accessors[e.inverseBindMatrices]), void 0 !== e.skeleton && t.setSkeleton(n.nodes[e.skeleton]);
                        for (const a of e.joints) t.addJoint(n.nodes[a]);
                        return t
                    })), E.map(((e, t) => {
                        const a = n.nodes[t];
                        (e.children || []).forEach((e => a.addChild(n.nodes[e]))), void 0 !== e.mesh && a.setMesh(n.meshes[e.mesh]), void 0 !== e.camera && a.setCamera(n.cameras[e.camera]), void 0 !== e.skin && a.setSkin(n.skins[e.skin])
                    }));
                    const A = s.animations || [];
                    n.animations = A.map((e => {
                        const t = r.createAnimation(e.name);
                        e.extras && t.setExtras(e.extras);
                        const a = (e.samplers || []).map((e => {
                            const a = r.createAnimationSampler().setInput(n.accessors[e.input]).setOutput(n.accessors[e.output]).setInterpolation(e.interpolation || X.Interpolation.LINEAR);
                            return e.extras && a.setExtras(e.extras), t.addSampler(a), a
                        }));
                        return (e.channels || []).forEach((e => {
                            const s = r.createAnimationChannel().setSampler(a[e.sampler]).setTargetPath(e.target.path);
                            void 0 !== e.target.node && s.setTargetNode(n.nodes[e.target.node]), e.extras && s.setExtras(e.extras), t.addChannel(s)
                        })), t
                    }));
                    const N = s.scenes || [];
                    return r.getRoot().listExtensionsUsed().filter((e => e.prereadTypes.includes(o.SCENE))).forEach((e => e.preread(n, o.SCENE))), n.scenes = N.map((e => {
                        const t = r.createScene(e.name);
                        return e.extras && t.setExtras(e.extras), (e.nodes || []).map((e => n.nodes[e])).forEach((e => t.addChild(e))), t
                    })), void 0 !== s.scene && r.getRoot().setDefaultScene(n.scenes[s.scene]), r.getRoot().listExtensionsUsed().forEach((e => e.read(n))), g.forEach(((e, t) => {
                        const a = n.accessors[t],
                            s = !!e.sparse,
                            r = !e.bufferView && !a.getArray();
                        (s || r) && a.setSparse(!0).setArray(function(e, t) {
                            const a = h[e.componentType],
                                s = J.getElementSize(e.type);
                            let r;
                            r = void 0 !== e.bufferView ? Ee(e, t) : new a(e.count * s);
                            const n = e.sparse;
                            if (!n) return r;
                            const i = n.count,
                                o = fe({}, e, n.indices, {
                                    count: i,
                                    type: "SCALAR"
                                }),
                                c = fe({}, e, n.values, {
                                    count: i
                                }),
                                b = Ee(o, t),
                                d = Ee(c, t);
                            for (let e = 0; e < o.count; e++)
                                for (let t = 0; t < s; t++) r[b[e] * s + t] = d[e * s + t];
                            return r
                        }(e, n))
                    })), r
                }
                static validate(e, t) {
                    const a = e.json;
                    if ("2.0" !== a.asset.version) throw new Error(`Unsupported glTF version, "${a.asset.version}".`);
                    if (a.extensionsRequired)
                        for (const e of a.extensionsRequired)
                            if (!t.extensions.find((t => t.EXTENSION_NAME === e))) throw new Error(`Missing required extension, "${e}".`);
                    if (a.extensionsUsed)
                        for (const e of a.extensionsUsed) t.extensions.find((t => t.EXTENSION_NAME === e)) || t.logger.warn(`Missing optional extension, "${e}".`)
                }
            }

            function Ee(e, t) {
                const a = t.jsonDoc,
                    s = t.bufferViews[e.bufferView],
                    r = a.json.bufferViews[e.bufferView],
                    n = h[e.componentType],
                    i = J.getElementSize(e.type),
                    o = n.BYTES_PER_ELEMENT,
                    c = i * o;
                if (void 0 !== r.byteStride && r.byteStride !== c) return function(e, t) {
                    const a = t.jsonDoc,
                        s = t.bufferViews[e.bufferView],
                        r = a.json.bufferViews[e.bufferView],
                        n = h[e.componentType],
                        i = J.getElementSize(e.type),
                        o = n.BYTES_PER_ELEMENT,
                        c = e.byteOffset || 0,
                        b = new n(e.count * i),
                        d = new DataView(s.buffer, s.byteOffset, s.byteLength),
                        f = r.byteStride;
                    for (let t = 0; t < e.count; t++)
                        for (let a = 0; a < i; a++) {
                            const s = c + t * f + a * o;
                            let r;
                            switch (e.componentType) {
                                case J.ComponentType.FLOAT:
                                    r = d.getFloat32(s, !0);
                                    break;
                                case J.ComponentType.UNSIGNED_INT:
                                    r = d.getUint32(s, !0);
                                    break;
                                case J.ComponentType.UNSIGNED_SHORT:
                                    r = d.getUint16(s, !0);
                                    break;
                                case J.ComponentType.UNSIGNED_BYTE:
                                    r = d.getUint8(s);
                                    break;
                                case J.ComponentType.SHORT:
                                    r = d.getInt16(s, !0);
                                    break;
                                case J.ComponentType.BYTE:
                                    r = d.getInt8(s);
                                    break;
                                default:
                                    throw new Error(`Unexpected componentType "${e.componentType}".`)
                            }
                            b[t * i + a] = r
                        }
                    return b
                }(e, t);
                const b = s.byteOffset + (e.byteOffset || 0),
                    d = e.count * i * o;
                return new n(s.buffer.slice(b, b + d))
            }
            var je;
            ! function(e) {
                e[e.ARRAY_BUFFER = 34962] = "ARRAY_BUFFER", e[e.ELEMENT_ARRAY_BUFFER = 34963] = "ELEMENT_ARRAY_BUFFER"
            }(je || (je = {}));
            class we {
                constructor(e, t, a) {
                    this._doc = void 0, this.jsonDoc = void 0, this.options = void 0, this.accessorIndexMap = new Map, this.animationIndexMap = new Map, this.bufferIndexMap = new Map, this.cameraIndexMap = new Map, this.skinIndexMap = new Map, this.materialIndexMap = new Map, this.meshIndexMap = new Map, this.nodeIndexMap = new Map, this.imageIndexMap = new Map, this.textureDefIndexMap = new Map, this.textureInfoDefMap = new Map, this.samplerDefIndexMap = new Map, this.sceneIndexMap = new Map, this.imageBufferViews = [], this.otherBufferViews = new Map, this.otherBufferViewsIndexMap = new Map, this.extensionData = {}, this.bufferURIGenerator = void 0, this.imageURIGenerator = void 0, this.logger = void 0, this._accessorUsageMap = new Map, this.accessorUsageGroupedByParent = new Set(["ARRAY_BUFFER"]), this.accessorParents = new Map, this._doc = e, this.jsonDoc = t, this.options = a;
                    const s = e.getRoot(),
                        r = s.listBuffers().length,
                        n = s.listTextures().length;
                    this.bufferURIGenerator = new Ae(r > 1, (() => a.basename || "buffer")), this.imageURIGenerator = new Ae(n > 1, (t => function(e, t) {
                        const a = e.getGraph().listParentEdges(t).find((t => t.getParent() !== e.getRoot()));
                        return a ? a.getName().replace(/texture$/i, "") : ""
                    }(e, t) || a.basename || "texture")), this.logger = e.getLogger()
                }
                createTextureInfoDef(e, t) {
                    const a = {
                            magFilter: t.getMagFilter() || void 0,
                            minFilter: t.getMinFilter() || void 0,
                            wrapS: t.getWrapS(),
                            wrapT: t.getWrapT()
                        },
                        s = JSON.stringify(a);
                    this.samplerDefIndexMap.has(s) || (this.samplerDefIndexMap.set(s, this.jsonDoc.json.samplers.length), this.jsonDoc.json.samplers.push(a));
                    const r = {
                            source: this.imageIndexMap.get(e),
                            sampler: this.samplerDefIndexMap.get(s)
                        },
                        n = JSON.stringify(r);
                    this.textureDefIndexMap.has(n) || (this.textureDefIndexMap.set(n, this.jsonDoc.json.textures.length), this.jsonDoc.json.textures.push(r));
                    const i = {
                        index: this.textureDefIndexMap.get(n)
                    };
                    return 0 !== t.getTexCoord() && (i.texCoord = t.getTexCoord()), Object.keys(t.getExtras()).length > 0 && (i.extras = t.getExtras()), this.textureInfoDefMap.set(t, i), i
                }
                createPropertyDef(e) {
                    const t = {};
                    return e.getName() && (t.name = e.getName()), Object.keys(e.getExtras()).length > 0 && (t.extras = e.getExtras()), t
                }
                createAccessorDef(e) {
                    const t = this.createPropertyDef(e);
                    return t.type = e.getType(), t.componentType = e.getComponentType(), t.count = e.getCount(), this._doc.getGraph().listParentEdges(e).some((e => "attributes" === e.getName() && "POSITION" === e.getAttributes().key || "input" === e.getName())) && (t.max = e.getMax([]).map(Math.fround), t.min = e.getMin([]).map(Math.fround)), e.getNormalized() && (t.normalized = e.getNormalized()), t
                }
                createImageData(e, t, a) {
                    if (this.options.format === f.GLB) this.imageBufferViews.push(t), e.bufferView = this.jsonDoc.json.bufferViews.length, this.jsonDoc.json.bufferViews.push({
                        buffer: 0,
                        byteOffset: -1,
                        byteLength: t.byteLength
                    });
                    else {
                        const s = I.mimeTypeToExtension(a.getMimeType());
                        e.uri = this.imageURIGenerator.createURI(a, s), this.jsonDoc.resources[e.uri] = t
                    }
                }
                getAccessorUsage(e) {
                    const t = this._accessorUsageMap.get(e);
                    if (t) return t;
                    if (e.getSparse()) return b.SPARSE;
                    for (const t of this._doc.getGraph().listParentEdges(e)) {
                        const {
                            usage: e
                        } = t.getAttributes();
                        if (e) return e;
                        t.getParent().propertyType !== o.ROOT && this.logger.warn(`Missing attribute ".usage" on edge, "${t.getName()}".`)
                    }
                    return b.OTHER
                }
                addAccessorToUsageGroup(e, t) {
                    const a = this._accessorUsageMap.get(e);
                    if (a && a !== t) throw new Error(`Accessor with usage "${a}" cannot be reused as "${t}".`);
                    return this._accessorUsageMap.set(e, t), this
                }
            }
            we.BufferViewTarget = je, we.BufferViewUsage = b, we.USAGE_TO_TARGET = {
                [b.ARRAY_BUFFER]: je.ARRAY_BUFFER,
                [b.ELEMENT_ARRAY_BUFFER]: je.ELEMENT_ARRAY_BUFFER
            };
            class Ae {
                constructor(e, t) {
                    this.multiple = void 0, this.basename = void 0, this.counter = {}, this.multiple = e, this.basename = t
                }
                createURI(e, t) {
                    if (e.getURI()) return e.getURI();
                    if (this.multiple) {
                        const a = this.basename(e);
                        return this.counter[a] = this.counter[a] || 1, `${a}_${this.counter[a]++}.${t}`
                    }
                    return `${this.basename(e)}.${t}`
                }
            }
            const {
                BufferViewUsage: Ie
            } = we, {
                UNSIGNED_INT: Ne,
                UNSIGNED_SHORT: ke,
                UNSIGNED_BYTE: ve
            } = J.ComponentType;
            class Re {
                static write(e, t) {
                    const a = e.getGraph(),
                        s = e.getRoot(),
                        r = {
                            asset: fe({
                                generator: "glTF-Transform v4.0.1"
                            }, s.getAsset()),
                            extras: fe({}, s.getExtras())
                        },
                        n = {
                            json: r,
                            resources: {}
                        },
                        b = new we(e, n, t),
                        d = t.logger || S.DEFAULT_INSTANCE,
                        u = new Set(t.extensions.map((e => e.EXTENSION_NAME))),
                        l = e.getRoot().listExtensionsUsed().filter((e => u.has(e.extensionName))).sort(((e, t) => e.extensionName > t.extensionName ? 1 : -1)),
                        g = e.getRoot().listExtensionsRequired().filter((e => u.has(e.extensionName))).sort(((e, t) => e.extensionName > t.extensionName ? 1 : -1));
                    l.length < e.getRoot().listExtensionsUsed().length && d.warn("Some extensions were not registered for I/O, and will not be written.");
                    for (const e of l)
                        for (const a of e.writeDependencies) e.install(a, t.dependencies[a]);

                    function p(e, t, a, s) {
                        const n = [];
                        let i = 0;
                        for (const t of e) {
                            const e = b.createAccessorDef(t);
                            e.bufferView = r.bufferViews.length;
                            const a = t.getArray(),
                                s = j.pad(j.toView(a));
                            e.byteOffset = i, i += s.byteLength, n.push(s), b.accessorIndexMap.set(t, r.accessors.length), r.accessors.push(e)
                        }
                        const o = {
                            buffer: t,
                            byteOffset: a,
                            byteLength: j.concat(n).byteLength
                        };
                        return s && (o.target = s), r.bufferViews.push(o), {
                            buffers: n,
                            byteLength: i
                        }
                    }

                    function m(e, t, a) {
                        const s = e[0].getCount();
                        let n = 0;
                        for (const t of e) {
                            const e = b.createAccessorDef(t);
                            e.bufferView = r.bufferViews.length, e.byteOffset = n;
                            const a = t.getElementSize(),
                                s = t.getComponentSize();
                            n += j.padNumber(a * s), b.accessorIndexMap.set(t, r.accessors.length), r.accessors.push(e)
                        }
                        const i = s * n,
                            o = new ArrayBuffer(i),
                            c = new DataView(o);
                        for (let t = 0; t < s; t++) {
                            let a = 0;
                            for (const s of e) {
                                const e = s.getElementSize(),
                                    r = s.getComponentSize(),
                                    i = s.getComponentType(),
                                    o = s.getArray();
                                for (let s = 0; s < e; s++) {
                                    const b = t * n + a + s * r,
                                        d = o[t * e + s];
                                    switch (i) {
                                        case J.ComponentType.FLOAT:
                                            c.setFloat32(b, d, !0);
                                            break;
                                        case J.ComponentType.BYTE:
                                            c.setInt8(b, d);
                                            break;
                                        case J.ComponentType.SHORT:
                                            c.setInt16(b, d, !0);
                                            break;
                                        case J.ComponentType.UNSIGNED_BYTE:
                                            c.setUint8(b, d);
                                            break;
                                        case J.ComponentType.UNSIGNED_SHORT:
                                            c.setUint16(b, d, !0);
                                            break;
                                        case J.ComponentType.UNSIGNED_INT:
                                            c.setUint32(b, d, !0);
                                            break;
                                        default:
                                            throw new Error("Unexpected component type: " + i)
                                    }
                                }
                                a += j.padNumber(e * r)
                            }
                        }
                        const d = {
                            buffer: t,
                            byteOffset: a,
                            byteLength: i,
                            byteStride: n,
                            target: we.BufferViewTarget.ARRAY_BUFFER
                        };
                        return r.bufferViews.push(d), {
                            byteLength: i,
                            buffers: [new Uint8Array(o)]
                        }
                    }

                    function y(e, t, a) {
                        const s = [];
                        let n = 0;
                        const i = new Map;
                        let o = -1 / 0,
                            c = !1;
                        for (const t of e) {
                            const e = b.createAccessorDef(t);
                            r.accessors.push(e), b.accessorIndexMap.set(t, r.accessors.length - 1);
                            const a = [],
                                s = [],
                                n = [],
                                d = new Array(t.getElementSize()).fill(0);
                            for (let e = 0, r = t.getCount(); e < r; e++)
                                if (t.getElement(e, n), !_.eq(n, d, 0)) {
                                    o = Math.max(e, o), a.push(e);
                                    for (let e = 0; e < n.length; e++) s.push(n[e])
                                } const f = a.length,
                                u = {
                                    accessorDef: e,
                                    count: f
                                };
                            if (i.set(t, u), 0 === f) continue;
                            f > t.getCount() / 2 && (c = !0);
                            const l = h[t.getComponentType()];
                            u.indices = a, u.values = new l(s)
                        }
                        if (!Number.isFinite(o)) return {
                            buffers: s,
                            byteLength: n
                        };
                        c && d.warn("Some sparse accessors have >50% non-zero elements, which may increase file size.");
                        const f = o < 255 ? Uint8Array : o < 65535 ? Uint16Array : Uint32Array,
                            u = o < 255 ? ve : o < 65535 ? ke : Ne,
                            l = {
                                buffer: t,
                                byteOffset: a + n,
                                byteLength: 0
                            };
                        for (const t of e) {
                            const e = i.get(t);
                            if (0 === e.count) continue;
                            e.indicesByteOffset = l.byteLength;
                            const a = j.pad(j.toView(new f(e.indices)));
                            s.push(a), n += a.byteLength, l.byteLength += a.byteLength
                        }
                        r.bufferViews.push(l);
                        const g = r.bufferViews.length - 1,
                            p = {
                                buffer: t,
                                byteOffset: a + n,
                                byteLength: 0
                            };
                        for (const t of e) {
                            const e = i.get(t);
                            if (0 === e.count) continue;
                            e.valuesByteOffset = p.byteLength;
                            const a = j.pad(j.toView(e.values));
                            s.push(a), n += a.byteLength, p.byteLength += a.byteLength
                        }
                        r.bufferViews.push(p);
                        const m = r.bufferViews.length - 1;
                        for (const t of e) {
                            const e = i.get(t);
                            0 !== e.count && (e.accessorDef.sparse = {
                                count: e.count,
                                indices: {
                                    bufferView: g,
                                    byteOffset: e.indicesByteOffset,
                                    componentType: u
                                },
                                values: {
                                    bufferView: m,
                                    byteOffset: e.valuesByteOffset
                                }
                            })
                        }
                        return {
                            buffers: s,
                            byteLength: n
                        }
                    }
                    if (r.accessors = [], r.bufferViews = [], r.samplers = [], r.textures = [], r.images = s.listTextures().map(((e, t) => {
                            const a = b.createPropertyDef(e);
                            e.getMimeType() && (a.mimeType = e.getMimeType());
                            const s = e.getImage();
                            return s && b.createImageData(a, s, e), b.imageIndexMap.set(e, t), a
                        })), l.filter((e => e.prewriteTypes.includes(o.ACCESSOR))).forEach((e => e.prewrite(b, o.ACCESSOR))), s.listAccessors().forEach((e => {
                            const t = b.accessorUsageGroupedByParent,
                                s = b.accessorParents;
                            if (b.accessorIndexMap.has(e)) return;
                            const r = b.getAccessorUsage(e);
                            if (b.addAccessorToUsageGroup(e, r), t.has(r)) {
                                const t = a.listParents(e).find((e => e.propertyType !== o.ROOT));
                                s.set(e, t)
                            }
                        })), l.filter((e => e.prewriteTypes.includes(o.BUFFER))).forEach((e => e.prewrite(b, o.BUFFER))), (s.listAccessors().length > 0 || s.listTextures().length > 0 || b.otherBufferViews.size > 0) && 0 === s.listBuffers().length) throw new Error("Buffer required for Document resources, but none was found.");
                    r.buffers = [], s.listBuffers().forEach(((e, a) => {
                        const s = b.createPropertyDef(e),
                            o = b.accessorUsageGroupedByParent,
                            d = e.listParents().filter((e => e instanceof J)),
                            h = new Set(d.map((e => b.accessorParents.get(e)))),
                            u = new Map(Array.from(h).map(((e, t) => [e, t]))),
                            l = {};
                        for (const e of d) {
                            var g;
                            if (b.accessorIndexMap.has(e)) continue;
                            const t = b.getAccessorUsage(e);
                            let a = t;
                            if (o.has(t)) {
                                const t = b.accessorParents.get(e);
                                a += `:${u.get(t)}`
                            }
                            l[g = a] || (l[g] = {
                                usage: t,
                                accessors: []
                            }), l[a].accessors.push(e)
                        }
                        const x = [],
                            T = r.buffers.length;
                        let E = 0;
                        for (const {
                                usage: e,
                                accessors: a
                            }
                            of Object.values(l))
                            if (e === Ie.ARRAY_BUFFER && t.vertexLayout === c.INTERLEAVED) {
                                const e = m(a, T, E);
                                E += e.byteLength, x.push(...e.buffers)
                            } else if (e === Ie.ARRAY_BUFFER)
                            for (const e of a) {
                                const t = m([e], T, E);
                                E += t.byteLength, x.push(...t.buffers)
                            } else if (e === Ie.SPARSE) {
                                const e = y(a, T, E);
                                E += e.byteLength, x.push(...e.buffers)
                            } else if (e === Ie.ELEMENT_ARRAY_BUFFER) {
                            const e = p(a, T, E, we.BufferViewTarget.ELEMENT_ARRAY_BUFFER);
                            E += e.byteLength, x.push(...e.buffers)
                        } else {
                            const e = p(a, T, E);
                            E += e.byteLength, x.push(...e.buffers)
                        }
                        if (b.imageBufferViews.length && 0 === a)
                            for (let e = 0; e < b.imageBufferViews.length; e++)
                                if (r.bufferViews[r.images[e].bufferView].byteOffset = E, E += b.imageBufferViews[e].byteLength, x.push(b.imageBufferViews[e]), E % 8) {
                                    const e = 8 - E % 8;
                                    E += e, x.push(new Uint8Array(e))
                                } if (b.otherBufferViews.has(e))
                            for (const t of b.otherBufferViews.get(e)) r.bufferViews.push({
                                buffer: T,
                                byteOffset: E,
                                byteLength: t.byteLength
                            }), b.otherBufferViewsIndexMap.set(t, r.bufferViews.length - 1), E += t.byteLength, x.push(t);
                        if (E) {
                            let a;
                            t.format === f.GLB ? a = i : (a = b.bufferURIGenerator.createURI(e, "bin"), s.uri = a), s.byteLength = E, n.resources[a] = j.concat(x)
                        }
                        r.buffers.push(s), b.bufferIndexMap.set(e, a)
                    })), s.listAccessors().find((e => !e.getBuffer())) && d.warn("Skipped writing one or more Accessors: no Buffer assigned."), l.filter((e => e.prewriteTypes.includes(o.MATERIAL))).forEach((e => e.prewrite(b, o.MATERIAL))), r.materials = s.listMaterials().map(((e, t) => {
                        const a = b.createPropertyDef(e);
                        if (e.getAlphaMode() !== ie.AlphaMode.OPAQUE && (a.alphaMode = e.getAlphaMode()), e.getAlphaMode() === ie.AlphaMode.MASK && (a.alphaCutoff = e.getAlphaCutoff()), e.getDoubleSided() && (a.doubleSided = !0), a.pbrMetallicRoughness = {}, _.eq(e.getBaseColorFactor(), [1, 1, 1, 1]) || (a.pbrMetallicRoughness.baseColorFactor = e.getBaseColorFactor()), _.eq(e.getEmissiveFactor(), [0, 0, 0]) || (a.emissiveFactor = e.getEmissiveFactor()), 1 !== e.getRoughnessFactor() && (a.pbrMetallicRoughness.roughnessFactor = e.getRoughnessFactor()), 1 !== e.getMetallicFactor() && (a.pbrMetallicRoughness.metallicFactor = e.getMetallicFactor()), e.getBaseColorTexture()) {
                            const t = e.getBaseColorTexture(),
                                s = e.getBaseColorTextureInfo();
                            a.pbrMetallicRoughness.baseColorTexture = b.createTextureInfoDef(t, s)
                        }
                        if (e.getEmissiveTexture()) {
                            const t = e.getEmissiveTexture(),
                                s = e.getEmissiveTextureInfo();
                            a.emissiveTexture = b.createTextureInfoDef(t, s)
                        }
                        if (e.getNormalTexture()) {
                            const t = e.getNormalTexture(),
                                s = e.getNormalTextureInfo(),
                                r = b.createTextureInfoDef(t, s);
                            1 !== e.getNormalScale() && (r.scale = e.getNormalScale()), a.normalTexture = r
                        }
                        if (e.getOcclusionTexture()) {
                            const t = e.getOcclusionTexture(),
                                s = e.getOcclusionTextureInfo(),
                                r = b.createTextureInfoDef(t, s);
                            1 !== e.getOcclusionStrength() && (r.strength = e.getOcclusionStrength()), a.occlusionTexture = r
                        }
                        if (e.getMetallicRoughnessTexture()) {
                            const t = e.getMetallicRoughnessTexture(),
                                s = e.getMetallicRoughnessTextureInfo();
                            a.pbrMetallicRoughness.metallicRoughnessTexture = b.createTextureInfoDef(t, s)
                        }
                        return b.materialIndexMap.set(e, t), a
                    })), l.filter((e => e.prewriteTypes.includes(o.MESH))).forEach((e => e.prewrite(b, o.MESH))), r.meshes = s.listMeshes().map(((e, t) => {
                        const a = b.createPropertyDef(e);
                        let s = null;
                        return a.primitives = e.listPrimitives().map((e => {
                            const t = {
                                attributes: {}
                            };
                            t.mode = e.getMode();
                            const a = e.getMaterial();
                            a && (t.material = b.materialIndexMap.get(a)), Object.keys(e.getExtras()).length && (t.extras = e.getExtras());
                            const r = e.getIndices();
                            r && (t.indices = b.accessorIndexMap.get(r));
                            for (const a of e.listSemantics()) t.attributes[a] = b.accessorIndexMap.get(e.getAttribute(a));
                            for (const a of e.listTargets()) {
                                const e = {};
                                for (const t of a.listSemantics()) e[t] = b.accessorIndexMap.get(a.getAttribute(t));
                                t.targets = t.targets || [], t.targets.push(e)
                            }
                            return e.listTargets().length && !s && (s = e.listTargets().map((e => e.getName()))), t
                        })), e.getWeights().length && (a.weights = e.getWeights()), s && (a.extras = a.extras || {}, a.extras.targetNames = s), b.meshIndexMap.set(e, t), a
                    })), r.cameras = s.listCameras().map(((e, t) => {
                        const a = b.createPropertyDef(e);
                        if (a.type = e.getType(), a.type === $.Type.PERSPECTIVE) {
                            a.perspective = {
                                znear: e.getZNear(),
                                zfar: e.getZFar(),
                                yfov: e.getYFov()
                            };
                            const t = e.getAspectRatio();
                            null !== t && (a.perspective.aspectRatio = t)
                        } else a.orthographic = {
                            znear: e.getZNear(),
                            zfar: e.getZFar(),
                            xmag: e.getXMag(),
                            ymag: e.getYMag()
                        };
                        return b.cameraIndexMap.set(e, t), a
                    })), r.nodes = s.listNodes().map(((e, t) => {
                        const a = b.createPropertyDef(e);
                        return _.eq(e.getTranslation(), [0, 0, 0]) || (a.translation = e.getTranslation()), _.eq(e.getRotation(), [0, 0, 0, 1]) || (a.rotation = e.getRotation()), _.eq(e.getScale(), [1, 1, 1]) || (a.scale = e.getScale()), e.getWeights().length && (a.weights = e.getWeights()), b.nodeIndexMap.set(e, t), a
                    })), r.skins = s.listSkins().map(((e, t) => {
                        const a = b.createPropertyDef(e),
                            s = e.getInverseBindMatrices();
                        s && (a.inverseBindMatrices = b.accessorIndexMap.get(s));
                        const r = e.getSkeleton();
                        return r && (a.skeleton = b.nodeIndexMap.get(r)), a.joints = e.listJoints().map((e => b.nodeIndexMap.get(e))), b.skinIndexMap.set(e, t), a
                    })), s.listNodes().forEach(((e, t) => {
                        const a = r.nodes[t],
                            s = e.getMesh();
                        s && (a.mesh = b.meshIndexMap.get(s));
                        const n = e.getCamera();
                        n && (a.camera = b.cameraIndexMap.get(n));
                        const i = e.getSkin();
                        i && (a.skin = b.skinIndexMap.get(i)), e.listChildren().length > 0 && (a.children = e.listChildren().map((e => b.nodeIndexMap.get(e))))
                    })), r.animations = s.listAnimations().map(((e, t) => {
                        const a = b.createPropertyDef(e),
                            s = new Map;
                        return a.samplers = e.listSamplers().map(((e, t) => {
                            const a = b.createPropertyDef(e);
                            return a.input = b.accessorIndexMap.get(e.getInput()), a.output = b.accessorIndexMap.get(e.getOutput()), a.interpolation = e.getInterpolation(), s.set(e, t), a
                        })), a.channels = e.listChannels().map((e => {
                            const t = b.createPropertyDef(e);
                            return t.sampler = s.get(e.getSampler()), t.target = {
                                node: b.nodeIndexMap.get(e.getTargetNode()),
                                path: e.getTargetPath()
                            }, t
                        })), b.animationIndexMap.set(e, t), a
                    })), r.scenes = s.listScenes().map(((e, t) => {
                        const a = b.createPropertyDef(e);
                        return a.nodes = e.listChildren().map((e => b.nodeIndexMap.get(e))), b.sceneIndexMap.set(e, t), a
                    }));
                    const x = s.getDefaultScene();
                    return x && (r.scene = s.listScenes().indexOf(x)), r.extensionsUsed = l.map((e => e.extensionName)), r.extensionsRequired = g.map((e => e.extensionName)), l.forEach((e => e.write(b))),
                        function(e) {
                            const t = [];
                            for (const a in e) {
                                const s = e[a];
                                (Array.isArray(s) && 0 === s.length || null === s || "" === s || s && "object" == typeof s && 0 === Object.keys(s).length) && t.push(a)
                            }
                            for (const a of t) delete e[a]
                        }(r), n
                }
            }
            var Se;
            ! function(e) {
                e[e.JSON = 1313821514] = "JSON", e[e.BIN = 5130562] = "BIN"
            }(Se || (Se = {}));
            class Me {
                constructor() {
                    this._logger = S.DEFAULT_INSTANCE, this._extensions = new Set, this._dependencies = {}, this._vertexLayout = c.INTERLEAVED, this.lastReadBytes = 0, this.lastWriteBytes = 0
                }
                setLogger(e) {
                    return this._logger = e, this
                }
                registerExtensions(e) {
                    for (const t of e) this._extensions.add(t), t.register();
                    return this
                }
                registerDependencies(e) {
                    return Object.assign(this._dependencies, e), this
                }
                setVertexLayout(e) {
                    return this._vertexLayout = e, this
                }
                async read(e) {
                    return await this.readJSON(await this.readAsJSON(e))
                }
                async readAsJSON(e) {
                    const t = await this.readURI(e, "view");
                    this.lastReadBytes = t.byteLength;
                    const a = _e(t) ? this._binaryToJSON(t) : {
                        json: JSON.parse(j.decodeText(t)),
                        resources: {}
                    };
                    return await this._readResourcesExternal(a, this.dirname(e)), this._readResourcesInternal(a), a
                }
                async readJSON(e) {
                    return e = this._copyJSON(e), this._readResourcesInternal(e), Te.read(e, {
                        extensions: Array.from(this._extensions),
                        dependencies: this._dependencies,
                        logger: this._logger
                    })
                }
                async binaryToJSON(e) {
                    const t = this._binaryToJSON(j.assertView(e));
                    this._readResourcesInternal(t);
                    const a = t.json;
                    if (a.buffers && a.buffers.some((e => function(e, t) {
                            return void 0 !== t.uri && !(t.uri in e.resources)
                        }(t, e)))) throw new Error("Cannot resolve external buffers with binaryToJSON().");
                    if (a.images && a.images.some((e => function(e, t) {
                            return void 0 !== t.uri && !(t.uri in e.resources) && void 0 === t.bufferView
                        }(t, e)))) throw new Error("Cannot resolve external images with binaryToJSON().");
                    return t
                }
                async readBinary(e) {
                    return this.readJSON(await this.binaryToJSON(j.assertView(e)))
                }
                async writeJSON(e, t = {}) {
                    if (t.format === f.GLB && e.getRoot().listBuffers().length > 1) throw new Error("GLB must have 0–1 buffers.");
                    return Re.write(e, {
                        format: t.format || f.GLTF,
                        basename: t.basename || "",
                        logger: this._logger,
                        vertexLayout: this._vertexLayout,
                        dependencies: fe({}, this._dependencies),
                        extensions: Array.from(this._extensions)
                    })
                }
                async writeBinary(e) {
                    const {
                        json: t,
                        resources: a
                    } = await this.writeJSON(e, {
                        format: f.GLB
                    }), s = new Uint32Array([1179937895, 2, 12]), r = JSON.stringify(t), n = j.pad(j.encodeText(r), 32), i = j.toView(new Uint32Array([n.byteLength, 1313821514])), o = j.concat([i, n]);
                    s[s.length - 1] += o.byteLength;
                    const c = Object.values(a)[0];
                    if (!c || !c.byteLength) return j.concat([j.toView(s), o]);
                    const b = j.pad(c, 0),
                        d = j.toView(new Uint32Array([b.byteLength, 5130562])),
                        h = j.concat([d, b]);
                    return s[s.length - 1] += h.byteLength, j.concat([j.toView(s), o, h])
                }
                async _readResourcesExternal(e, t) {
                    var a = this;
                    const s = [...e.json.images || [], ...e.json.buffers || []].map((async function(s) {
                        const r = s.uri;
                        if (!r || r.match(/data:/)) return Promise.resolve();
                        e.resources[r] = await a.readURI(a.resolve(t, r), "view"), a.lastReadBytes += e.resources[r].byteLength
                    }));
                    await Promise.all(s)
                }
                _readResourcesInternal(e) {
                    function t(t) {
                        if (t.uri)
                            if (t.uri in e.resources) j.assertView(e.resources[t.uri]);
                            else if (t.uri.match(/data:/)) {
                            const a = `__${function(){for(let e=0;e<999;e++){const e=G();if(!B.has(e))return B.add(e),e}return""}()}.${k.extension(t.uri)}`;
                            e.resources[a] = j.createBufferFromDataURI(t.uri), t.uri = a
                        }
                    }(e.json.images || []).forEach((e => {
                        if (void 0 === e.bufferView && void 0 === e.uri) throw new Error("Missing resource URI or buffer view.");
                        t(e)
                    })), (e.json.buffers || []).forEach(t)
                }
                _copyJSON(e) {
                    const {
                        images: t,
                        buffers: a
                    } = e.json;
                    return e = {
                        json: fe({}, e.json),
                        resources: fe({}, e.resources)
                    }, t && (e.json.images = t.map((e => fe({}, e)))), a && (e.json.buffers = a.map((e => fe({}, e)))), e
                }
                _binaryToJSON(e) {
                    if (!_e(e)) throw new Error("Invalid glTF 2.0 binary.");
                    const t = new Uint32Array(e.buffer, e.byteOffset + 12, 2);
                    if (t[1] !== Se.JSON) throw new Error("Missing required GLB JSON chunk.");
                    const a = t[0],
                        s = j.decodeText(j.toView(e, 20, a)),
                        r = JSON.parse(s),
                        n = 20 + a;
                    if (e.byteLength <= n) return {
                        json: r,
                        resources: {}
                    };
                    const o = new Uint32Array(e.buffer, e.byteOffset + n, 2);
                    if (o[1] !== Se.BIN) throw new Error("Expected GLB BIN in second chunk.");
                    const c = o[0],
                        b = j.toView(e, n + 8, c);
                    return {
                        json: r,
                        resources: {
                            [i]: b
                        }
                    }
                }
            }

            function _e(e) {
                if (e.byteLength < 3 * Uint32Array.BYTES_PER_ELEMENT) return !1;
                const t = new Uint32Array(e.buffer, e.byteOffset, 3);
                return 1179937895 === t[0] && 2 === t[1]
            }
            class Ce extends Me {
                constructor(e = null, t = V.DEFAULT_INIT) {
                    super(), this._fetch = void 0, this._fetchConfig = void 0, this._init = void 0, this._fetchEnabled = !1, this._fetch = e, this._fetchConfig = t, this._init = this.init()
                }
                async init() {
                    return this._init ? this._init : Promise.all([a.e(87).then(a.t.bind(a, 40087, 19)), a.e(7263).then(a.t.bind(a, 17263, 19))]).then((([e, t]) => {
                        this._fs = e.promises, this._path = t
                    }))
                }
                setAllowNetwork(e) {
                    if (e && !this._fetch) throw new Error("NodeIO requires a Fetch API implementation for HTTP requests.");
                    return this._fetchEnabled = e, this
                }
                async readURI(e, t) {
                    if (await this.init(), V.isAbsoluteURL(e)) {
                        if (!this._fetchEnabled || !this._fetch) throw new Error("Network request blocked. Allow HTTP requests explicitly, if needed.");
                        const a = await this._fetch(e, this._fetchConfig);
                        switch (t) {
                            case "view":
                                return new Uint8Array(await a.arrayBuffer());
                            case "text":
                                return a.text()
                        }
                    } else switch (t) {
                        case "view":
                            return this._fs.readFile(e);
                        case "text":
                            return this._fs.readFile(e, "utf8")
                    }
                }
                resolve(e, t) {
                    return V.isAbsoluteURL(e) || V.isAbsoluteURL(t) ? V.resolve(e, t) : this._path.resolve(e, decodeURIComponent(t))
                }
                dirname(e) {
                    return V.isAbsoluteURL(e) ? V.dirname(e) : this._path.dirname(e)
                }
                async write(e, t) {
                    await this.init();
                    const a = !!e.match(/\.glb$/);
                    await (a ? this._writeGLB(e, t) : this._writeGLTF(e, t))
                }
                async _writeGLTF(e, t) {
                    var a = this;
                    this.lastWriteBytes = 0;
                    const {
                        json: s,
                        resources: r
                    } = await this.writeJSON(t, {
                        format: f.GLTF,
                        basename: k.basename(e)
                    }), {
                        _fs: n,
                        _path: i
                    } = this, o = i.dirname(e), c = JSON.stringify(s, null, 2);
                    await n.writeFile(e, c), this.lastWriteBytes += c.length;
                    for (const e of function(e, t) {
                            const a = [];
                            for (let t = 0, s = e.length; t < s; t += 10) {
                                const r = [];
                                for (let a = 0; a < 10 && t + a < s; a++) r.push(e[t + a]);
                                a.push(r)
                            }
                            return a
                        }(Object.keys(r))) await Promise.all(e.map((async function(e) {
                        if (V.isAbsoluteURL(e)) {
                            if ("bin" === V.extension(e)) throw new Error(`Cannot write buffer to path "${e}".`);
                            return
                        }
                        const t = i.join(o, decodeURIComponent(e));
                        await n.mkdir(i.dirname(t), {
                            recursive: !0
                        }), await n.writeFile(t, r[e]), a.lastWriteBytes += r[e].byteLength
                    })))
                }
                async _writeGLB(e, t) {
                    const a = r.from(await this.writeBinary(t));
                    await this._fs.writeFile(e, a), this.lastWriteBytes = a.byteLength
                }
            }
        },
        84362: (e, t, a) => {
            "use strict";
            a.d(t, {
                Fb: () => C,
                XD: () => Q,
                t4: () => Z,
                oh: () => ae,
                r7: () => Te,
                bO: () => Ae,
                HN: () => Se,
                X4: () => Fe,
                SE: () => Qe,
                S8: () => Ze,
                Gq: () => st,
                z4: () => dt,
                V$: () => mt,
                UW: () => At,
                y1: () => vt,
                oN: () => Mt,
                vC: () => Ft,
                Wh: () => Bt,
                to: () => zt,
                S3: () => Kt,
                c7: () => Jt,
                FC: () => $t
            });
            var s = a(69584),
                r = a(24987),
                n = a(48764).Buffer;
            class i {
                constructor() {
                    this.vkFormat = 0, this.typeSize = 1, this.pixelWidth = 0, this.pixelHeight = 0, this.pixelDepth = 0, this.layerCount = 0, this.faceCount = 1, this.supercompressionScheme = 0, this.levels = [], this.dataFormatDescriptor = [{
                        vendorId: 0,
                        descriptorType: 0,
                        descriptorBlockSize: 0,
                        versionNumber: 2,
                        colorModel: 0,
                        colorPrimaries: 1,
                        transferFunction: 2,
                        flags: 0,
                        texelBlockDimension: [0, 0, 0, 0],
                        bytesPlane: [0, 0, 0, 0, 0, 0, 0, 0],
                        samples: []
                    }], this.keyValue = {}, this.globalData = null
                }
            }
            class o {
                constructor(e, t, a, s) {
                    this._dataView = void 0, this._littleEndian = void 0, this._offset = void 0, this._dataView = new DataView(e.buffer, e.byteOffset + t, a), this._littleEndian = s, this._offset = 0
                }
                _nextUint8() {
                    const e = this._dataView.getUint8(this._offset);
                    return this._offset += 1, e
                }
                _nextUint16() {
                    const e = this._dataView.getUint16(this._offset, this._littleEndian);
                    return this._offset += 2, e
                }
                _nextUint32() {
                    const e = this._dataView.getUint32(this._offset, this._littleEndian);
                    return this._offset += 4, e
                }
                _nextUint64() {
                    const e = this._dataView.getUint32(this._offset, this._littleEndian) + 2 ** 32 * this._dataView.getUint32(this._offset + 4, this._littleEndian);
                    return this._offset += 8, e
                }
                _nextInt32() {
                    const e = this._dataView.getInt32(this._offset, this._littleEndian);
                    return this._offset += 4, e
                }
                _nextUint8Array(e) {
                    const t = new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + this._offset, e);
                    return this._offset += e, t
                }
                _skip(e) {
                    return this._offset += e, this
                }
                _scan(e, t = 0) {
                    const a = this._offset;
                    let s = 0;
                    for (; this._dataView.getUint8(this._offset) !== t && s < e;) s++, this._offset++;
                    return s < e && this._offset++, new Uint8Array(this._dataView.buffer, this._dataView.byteOffset + a, s)
                }
            }
            new Uint8Array([0]);
            const c = [171, 75, 84, 88, 32, 50, 48, 187, 13, 10, 26, 10];

            function b(e) {
                return "undefined" != typeof TextDecoder ? (new TextDecoder).decode(e) : n.from(e).toString("utf8")
            }

            function d(e) {
                const t = new Uint8Array(e.buffer, e.byteOffset, c.length);
                if (t[0] !== c[0] || t[1] !== c[1] || t[2] !== c[2] || t[3] !== c[3] || t[4] !== c[4] || t[5] !== c[5] || t[6] !== c[6] || t[7] !== c[7] || t[8] !== c[8] || t[9] !== c[9] || t[10] !== c[10] || t[11] !== c[11]) throw new Error("Missing KTX 2.0 identifier.");
                const a = new i,
                    s = 17 * Uint32Array.BYTES_PER_ELEMENT,
                    r = new o(e, c.length, s, !0);
                a.vkFormat = r._nextUint32(), a.typeSize = r._nextUint32(), a.pixelWidth = r._nextUint32(), a.pixelHeight = r._nextUint32(), a.pixelDepth = r._nextUint32(), a.layerCount = r._nextUint32(), a.faceCount = r._nextUint32();
                const n = r._nextUint32();
                a.supercompressionScheme = r._nextUint32();
                const d = r._nextUint32(),
                    f = r._nextUint32(),
                    h = r._nextUint32(),
                    u = r._nextUint32(),
                    l = r._nextUint64(),
                    g = r._nextUint64(),
                    p = new o(e, c.length + s, 3 * n * 8, !0);
                for (let t = 0; t < n; t++) a.levels.push({
                    levelData: new Uint8Array(e.buffer, e.byteOffset + p._nextUint64(), p._nextUint64()),
                    uncompressedByteLength: p._nextUint64()
                });
                const m = new o(e, d, f, !0),
                    y = {
                        vendorId: m._skip(4)._nextUint16(),
                        descriptorType: m._nextUint16(),
                        versionNumber: m._nextUint16(),
                        descriptorBlockSize: m._nextUint16(),
                        colorModel: m._nextUint8(),
                        colorPrimaries: m._nextUint8(),
                        transferFunction: m._nextUint8(),
                        flags: m._nextUint8(),
                        texelBlockDimension: [m._nextUint8(), m._nextUint8(), m._nextUint8(), m._nextUint8()],
                        bytesPlane: [m._nextUint8(), m._nextUint8(), m._nextUint8(), m._nextUint8(), m._nextUint8(), m._nextUint8(), m._nextUint8(), m._nextUint8()],
                        samples: []
                    },
                    x = (y.descriptorBlockSize / 4 - 6) / 4;
                for (let e = 0; e < x; e++) {
                    const t = {
                        bitOffset: m._nextUint16(),
                        bitLength: m._nextUint8(),
                        channelType: m._nextUint8(),
                        samplePosition: [m._nextUint8(), m._nextUint8(), m._nextUint8(), m._nextUint8()],
                        sampleLower: -1 / 0,
                        sampleUpper: 1 / 0
                    };
                    64 & t.channelType ? (t.sampleLower = m._nextInt32(), t.sampleUpper = m._nextInt32()) : (t.sampleLower = m._nextUint32(), t.sampleUpper = m._nextUint32()), y.samples[e] = t
                }
                a.dataFormatDescriptor.length = 0, a.dataFormatDescriptor.push(y);
                const T = new o(e, h, u, !0);
                for (; T._offset < u;) {
                    const e = T._nextUint32(),
                        t = T._scan(e),
                        s = b(t);
                    if (a.keyValue[s] = T._nextUint8Array(e - t.byteLength - 1), s.match(/^ktx/i)) {
                        const e = b(a.keyValue[s]);
                        a.keyValue[s] = e.substring(0, e.lastIndexOf("\0"))
                    }
                    const r = e % 4 ? 4 - e % 4 : 0;
                    T._skip(r)
                }
                if (g <= 0) return a;
                const E = new o(e, l, g, !0),
                    j = E._nextUint16(),
                    w = E._nextUint16(),
                    A = E._nextUint32(),
                    I = E._nextUint32(),
                    N = E._nextUint32(),
                    k = E._nextUint32(),
                    v = [];
                for (let e = 0; e < n; e++) v.push({
                    imageFlags: E._nextUint32(),
                    rgbSliceByteOffset: E._nextUint32(),
                    rgbSliceByteLength: E._nextUint32(),
                    alphaSliceByteOffset: E._nextUint32(),
                    alphaSliceByteLength: E._nextUint32()
                });
                const R = l + E._offset,
                    S = R + A,
                    M = S + I,
                    _ = M + N,
                    C = new Uint8Array(e.buffer, e.byteOffset + R, A),
                    D = new Uint8Array(e.buffer, e.byteOffset + S, I),
                    O = new Uint8Array(e.buffer, e.byteOffset + M, N),
                    F = new Uint8Array(e.buffer, e.byteOffset + _, k);
                return a.globalData = {
                    endpointCount: j,
                    selectorCount: w,
                    imageDescs: v,
                    endpointsData: C,
                    selectorsData: D,
                    tablesData: O,
                    extendedData: F
                }, a
            }
            const f = "EXT_mesh_gpu_instancing",
                h = "KHR_draco_mesh_compression",
                u = "KHR_lights_punctual",
                l = "KHR_materials_anisotropy",
                g = "KHR_materials_clearcoat",
                p = "KHR_materials_diffuse_transmission",
                m = "KHR_materials_dispersion",
                y = "KHR_materials_emissive_strength",
                x = "KHR_materials_ior",
                T = "KHR_materials_iridescence",
                E = "KHR_materials_pbrSpecularGlossiness",
                j = "KHR_materials_sheen",
                w = "KHR_materials_specular",
                A = "KHR_materials_transmission",
                I = "KHR_materials_unlit",
                N = "KHR_materials_volume",
                k = "KHR_materials_variants",
                v = "KHR_texture_transform",
                R = "KHR_xmp_json_ld",
                S = "INSTANCE_ATTRIBUTE";
            class M extends s.eY {
                init() {
                    this.extensionName = f, this.propertyType = "InstancedMesh", this.parentTypes = [s.uS.NODE]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        attributes: new r.lA
                    })
                }
                getAttribute(e) {
                    return this.getRefMap("attributes", e)
                }
                setAttribute(e, t) {
                    return this.setRefMap("attributes", e, t, {
                        usage: S
                    })
                }
                listAttributes() {
                    return this.listRefMapValues("attributes")
                }
                listSemantics() {
                    return this.listRefMapKeys("attributes")
                }
            }
            M.EXTENSION_NAME = f;
            const _ = f;
            class C extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = _, this.provideTypes = [s.uS.NODE], this.prewriteTypes = [s.uS.ACCESSOR]
                }
                createInstancedMesh() {
                    return new M(this.document.getGraph())
                }
                read(e) {
                    return (e.jsonDoc.json.nodes || []).forEach(((t, a) => {
                        if (!t.extensions || !t.extensions[_]) return;
                        const s = t.extensions[_],
                            r = this.createInstancedMesh();
                        for (const t in s.attributes) r.setAttribute(t, e.accessors[s.attributes[t]]);
                        e.nodes[a].setExtension(_, r)
                    })), this
                }
                prewrite(e) {
                    e.accessorUsageGroupedByParent.add(S);
                    for (const t of this.properties)
                        for (const a of t.listAttributes()) e.addAccessorToUsageGroup(a, S);
                    return this
                }
                write(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listNodes().forEach((a => {
                        const s = a.getExtension(_);
                        if (s) {
                            const r = e.nodeIndexMap.get(a),
                                n = t.json.nodes[r],
                                i = {
                                    attributes: {}
                                };
                            s.listSemantics().forEach((t => {
                                const a = s.getAttribute(t);
                                i.attributes[t] = e.accessorIndexMap.get(a)
                            })), n.extensions = n.extensions || {}, n.extensions[_] = i
                        }
                    })), this
                }
            }

            function D() {
                return D = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }, D.apply(this, arguments)
            }
            var O, F, U;
            C.EXTENSION_NAME = _,
                function(e) {
                    e.QUANTIZE = "quantize", e.FILTER = "filter"
                }(O || (O = {})),
                function(e) {
                    e.ATTRIBUTES = "ATTRIBUTES", e.TRIANGLES = "TRIANGLES", e.INDICES = "INDICES"
                }(F || (F = {})),
                function(e) {
                    e.NONE = "NONE", e.OCTAHEDRAL = "OCTAHEDRAL", e.QUATERNION = "QUATERNION", e.EXPONENTIAL = "EXPONENTIAL"
                }(U || (U = {}));
            const {
                BYTE: P,
                SHORT: L,
                FLOAT: B
            } = s.U_.ComponentType, {
                encodeNormalizedInt: G,
                decodeNormalizedInt: z
            } = s.M8;

            function V(e, t, a, r) {
                const {
                    filter: n,
                    bits: i
                } = r, o = {
                    array: e.getArray(),
                    byteStride: e.getElementSize() * e.getComponentSize(),
                    componentType: e.getComponentType(),
                    normalized: e.getNormalized()
                };
                if (a !== F.ATTRIBUTES) return o;
                if (n !== U.NONE) {
                    let a = e.getNormalized() ? function(e) {
                        const t = e.getComponentType(),
                            a = e.getArray(),
                            s = new Float32Array(a.length);
                        for (let e = 0; e < a.length; e++) s[e] = z(a[e], t);
                        return s
                    }(e) : new Float32Array(o.array);
                    switch (n) {
                        case U.EXPONENTIAL:
                            o.byteStride = 4 * e.getElementSize(), o.componentType = B, o.normalized = !1, o.array = t.encodeFilterExp(a, e.getCount(), o.byteStride, i);
                            break;
                        case U.OCTAHEDRAL:
                            o.byteStride = i > 8 ? 8 : 4, o.componentType = i > 8 ? L : P, o.normalized = !0, a = 3 === e.getElementSize() ? function(e) {
                                const t = new Float32Array(4 * e.length / 3);
                                for (let a = 0, s = e.length / 3; a < s; a++) t[4 * a] = e[3 * a], t[4 * a + 1] = e[3 * a + 1], t[4 * a + 2] = e[3 * a + 2];
                                return t
                            }(a) : a, o.array = t.encodeFilterOct(a, e.getCount(), o.byteStride, i);
                            break;
                        case U.QUATERNION:
                            o.byteStride = 8, o.componentType = L, o.normalized = !0, o.array = t.encodeFilterQuat(a, e.getCount(), o.byteStride, i);
                            break;
                        default:
                            throw new Error("Invalid filter.")
                    }
                    o.min = e.getMin([]), o.max = e.getMax([]), e.getNormalized() && (o.min = o.min.map((t => z(t, e.getComponentType()))), o.max = o.max.map((t => z(t, e.getComponentType())))), o.normalized && (o.min = o.min.map((e => G(e, o.componentType))), o.max = o.max.map((e => G(e, o.componentType))))
                } else o.byteStride % 4 && (o.array = function(e, t) {
                    const a = s.oY.padNumber(e.BYTES_PER_ELEMENT * t) / e.BYTES_PER_ELEMENT,
                        r = e.length / t,
                        n = new e.constructor(r * a);
                    for (let s = 0; s * t < e.length; s++)
                        for (let r = 0; r < t; r++) n[s * a + r] = e[s * t + r];
                    return n
                }(o.array, e.getElementSize()), o.byteStride = o.array.byteLength / e.getCount());
                return o
            }

            function q(e, t) {
                return t === s.qi.BufferViewUsage.ELEMENT_ARRAY_BUFFER ? e.listParents().some((e => e instanceof s.WV && e.getMode() === s.WV.Mode.TRIANGLES)) ? F.TRIANGLES : F.INDICES : F.ATTRIBUTES
            }

            function K(e, t) {
                const a = t.getGraph().listParentEdges(e).filter((e => !(e.getParent() instanceof s.fC)));
                for (const t of a) {
                    const a = t.getName(),
                        r = t.getAttributes().key || "",
                        n = t.getParent().propertyType === s.uS.PRIMITIVE_TARGET;
                    if ("indices" === a) return {
                        filter: U.NONE
                    };
                    if ("attributes" === a) {
                        if ("POSITION" === r) return {
                            filter: U.NONE
                        };
                        if ("TEXCOORD_0" === r) return {
                            filter: U.NONE
                        };
                        if (r.startsWith("JOINTS_")) return {
                            filter: U.NONE
                        };
                        if (r.startsWith("WEIGHTS_")) return {
                            filter: U.NONE
                        };
                        if ("NORMAL" === r || "TANGENT" === r) return n ? {
                            filter: U.NONE
                        } : {
                            filter: U.OCTAHEDRAL,
                            bits: 8
                        }
                    }
                    if ("output" === a) {
                        const t = H(e);
                        return "rotation" === t ? {
                            filter: U.QUATERNION,
                            bits: 16
                        } : "translation" === t || "scale" === t ? {
                            filter: U.EXPONENTIAL,
                            bits: 12
                        } : {
                            filter: U.NONE
                        }
                    }
                    if ("input" === a) return {
                        filter: U.NONE
                    };
                    if ("inverseBindMatrices" === a) return {
                        filter: U.NONE
                    }
                }
                return {
                    filter: U.NONE
                }
            }

            function H(e) {
                for (const t of e.listParents())
                    if (t instanceof s.BD)
                        for (const e of t.listParents())
                            if (e instanceof s.Zt) return e.getTargetPath();
                return null
            }
            const W = "EXT_meshopt_compression",
                J = {
                    method: O.QUANTIZE
                };
            class Q extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = W, this.prereadTypes = [s.uS.BUFFER, s.uS.PRIMITIVE], this.prewriteTypes = [s.uS.BUFFER, s.uS.ACCESSOR], this.readDependencies = ["meshopt.decoder"], this.writeDependencies = ["meshopt.encoder"], this._decoder = null, this._decoderFallbackBufferMap = new Map, this._encoder = null, this._encoderOptions = J, this._encoderFallbackBuffer = null, this._encoderBufferViews = {}, this._encoderBufferViewData = {}, this._encoderBufferViewAccessors = {}
                }
                install(e, t) {
                    return "meshopt.decoder" === e && (this._decoder = t), "meshopt.encoder" === e && (this._encoder = t), this
                }
                setEncoderOptions(e) {
                    return this._encoderOptions = D({}, J, e), this
                }
                preread(e, t) {
                    if (!this._decoder) {
                        if (!this.isRequired()) return this;
                        throw new Error(`[${W}] Please install extension dependency, "meshopt.decoder".`)
                    }
                    if (!this._decoder.supported) {
                        if (!this.isRequired()) return this;
                        throw new Error(`[${W}]: Missing WASM support.`)
                    }
                    return t === s.uS.BUFFER ? this._prereadBuffers(e) : t === s.uS.PRIMITIVE && this._prereadPrimitives(e), this
                }
                _prereadBuffers(e) {
                    const t = e.jsonDoc;
                    (t.json.bufferViews || []).forEach(((a, r) => {
                        if (!a.extensions || !a.extensions[W]) return;
                        const n = a.extensions[W],
                            i = n.byteOffset || 0,
                            o = n.byteLength || 0,
                            c = n.count,
                            b = n.byteStride,
                            d = new Uint8Array(c * b),
                            f = t.json.buffers[n.buffer],
                            h = f.uri ? t.resources[f.uri] : t.resources[s.aw],
                            u = s.oY.toView(h, i, o);
                        this._decoder.decodeGltfBuffer(d, c, b, u, n.mode, n.filter), e.bufferViews[r] = d
                    }))
                }
                _prereadPrimitives(e) {
                    const t = e.jsonDoc;
                    (t.json.bufferViews || []).forEach((a => {
                        if (!a.extensions || !a.extensions[W]) return;
                        const s = a.extensions[W],
                            r = e.buffers[s.buffer],
                            n = e.buffers[a.buffer];
                        var i;
                        (i = t.json.buffers[a.buffer]).extensions && i.extensions.EXT_meshopt_compression && i.extensions.EXT_meshopt_compression.fallback && this._decoderFallbackBufferMap.set(n, r)
                    }))
                }
                read(e) {
                    if (!this.isRequired()) return this;
                    for (const [e, t] of this._decoderFallbackBufferMap) {
                        for (const a of e.listParents()) a instanceof s.U_ && a.swap(e, t);
                        e.dispose()
                    }
                    return this
                }
                prewrite(e, t) {
                    return t === s.uS.ACCESSOR ? this._prewriteAccessors(e) : t === s.uS.BUFFER && this._prewriteBuffers(e), this
                }
                _prewriteAccessors(e) {
                    const t = e.jsonDoc.json,
                        a = this._encoder,
                        r = this._encoderOptions,
                        n = this.document.getGraph(),
                        i = this.document.createBuffer(),
                        o = this.document.getRoot().listBuffers().indexOf(i);
                    let c = 1;
                    const b = new Map,
                        d = e => {
                            for (const t of n.listParents(e)) {
                                if (t.propertyType === s.uS.ROOT) continue;
                                let a = b.get(e);
                                return void 0 === a && b.set(e, a = c++), a
                            }
                            return -1
                        };
                    this._encoderFallbackBuffer = i, this._encoderBufferViews = {}, this._encoderBufferViewData = {}, this._encoderBufferViewAccessors = {};
                    for (const n of this.document.getRoot().listAccessors()) {
                        if ("weights" === H(n)) continue;
                        if (n.getSparse()) continue;
                        const i = e.getAccessorUsage(n),
                            c = e.accessorUsageGroupedByParent.has(i) ? d(n) : null,
                            b = q(n, i),
                            f = r.method === O.FILTER ? K(n, this.document) : {
                                filter: U.NONE
                            },
                            h = V(n, a, b, f),
                            {
                                array: u,
                                byteStride: l
                            } = h,
                            g = n.getBuffer();
                        if (!g) throw new Error(`${W}: Missing buffer for accessor.`);
                        const p = this.document.getRoot().listBuffers().indexOf(g),
                            m = [i, c, b, f.filter, l, p].join(":");
                        let y = this._encoderBufferViews[m],
                            x = this._encoderBufferViewData[m],
                            T = this._encoderBufferViewAccessors[m];
                        y && x || (T = this._encoderBufferViewAccessors[m] = [], x = this._encoderBufferViewData[m] = [], y = this._encoderBufferViews[m] = {
                            buffer: o,
                            target: s.qi.USAGE_TO_TARGET[i],
                            byteOffset: 0,
                            byteLength: 0,
                            byteStride: i === s.qi.BufferViewUsage.ARRAY_BUFFER ? l : void 0,
                            extensions: {
                                [W]: {
                                    buffer: p,
                                    byteOffset: 0,
                                    byteLength: 0,
                                    mode: b,
                                    filter: f.filter !== U.NONE ? f.filter : void 0,
                                    byteStride: l,
                                    count: 0
                                }
                            }
                        });
                        const E = e.createAccessorDef(n);
                        E.componentType = h.componentType, E.normalized = h.normalized, E.byteOffset = y.byteLength, E.min && h.min && (E.min = h.min), E.max && h.max && (E.max = h.max), e.accessorIndexMap.set(n, t.accessors.length), t.accessors.push(E), T.push(E), x.push(new Uint8Array(u.buffer, u.byteOffset, u.byteLength)), y.byteLength += u.byteLength, y.extensions.EXT_meshopt_compression.count += n.getCount()
                    }
                }
                _prewriteBuffers(e) {
                    const t = this._encoder;
                    for (const a in this._encoderBufferViews) {
                        const r = this._encoderBufferViews[a],
                            n = this._encoderBufferViewData[a],
                            i = this.document.getRoot().listBuffers()[r.extensions[W].buffer],
                            o = e.otherBufferViews.get(i) || [],
                            {
                                count: c,
                                byteStride: b,
                                mode: d
                            } = r.extensions[W],
                            f = s.oY.concat(n),
                            h = t.encodeGltfBuffer(f, c, b, d),
                            u = s.oY.pad(h);
                        r.extensions[W].byteLength = h.byteLength, n.length = 0, n.push(u), o.push(u), e.otherBufferViews.set(i, o)
                    }
                }
                write(e) {
                    let t = 0;
                    for (const a in this._encoderBufferViews) {
                        const r = this._encoderBufferViews[a],
                            n = this._encoderBufferViewData[a][0],
                            i = e.otherBufferViewsIndexMap.get(n),
                            o = this._encoderBufferViewAccessors[a];
                        for (const e of o) e.bufferView = i;
                        const c = e.jsonDoc.json.bufferViews[i],
                            b = c.byteOffset || 0;
                        Object.assign(c, r), c.byteOffset = t, c.extensions[W].byteOffset = b, t += s.oY.padNumber(r.byteLength)
                    }
                    const a = this._encoderFallbackBuffer,
                        r = e.bufferIndexMap.get(a),
                        n = e.jsonDoc.json.buffers[r];
                    return n.byteLength = t, n.extensions = {
                        [W]: {
                            fallback: !0
                        }
                    }, a.dispose(), this
                }
            }
            Q.EXTENSION_NAME = W, Q.EncoderMethod = O;
            const Y = "EXT_texture_avif";
            class X {
                match(e) {
                    return e.length >= 12 && "ftypavif" === s.oY.decodeText(e.slice(4, 12))
                }
                getSize(e) {
                    if (!this.match(e)) return null;
                    const t = new DataView(e.buffer, e.byteOffset, e.byteLength);
                    let a = $(t, 0);
                    if (!a) return null;
                    let s = a.end;
                    for (; a = $(t, s);)
                        if ("meta" === a.type) s = a.start + 4;
                        else if ("iprp" === a.type || "ipco" === a.type) s = a.start;
                    else {
                        if ("ispe" === a.type) return [t.getUint32(a.start + 4), t.getUint32(a.start + 8)];
                        if ("mdat" === a.type) break;
                        s = a.end
                    }
                    return null
                }
                getChannels(e) {
                    return 4
                }
            }
            class Z extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Y, this.prereadTypes = [s.uS.TEXTURE]
                }
                static register() {
                    s.Pp.registerFormat("image/avif", new X)
                }
                preread(e) {
                    return (e.jsonDoc.json.textures || []).forEach((e => {
                        e.extensions && e.extensions[Y] && (e.source = e.extensions[Y].source)
                    })), this
                }
                read(e) {
                    return this
                }
                write(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listTextures().forEach((a => {
                        if ("image/avif" === a.getMimeType()) {
                            const s = e.imageIndexMap.get(a);
                            (t.json.textures || []).forEach((e => {
                                e.source === s && (e.extensions = e.extensions || {}, e.extensions[Y] = {
                                    source: e.source
                                }, delete e.source)
                            }))
                        }
                    })), this
                }
            }

            function $(e, t) {
                if (e.byteLength < 4 + t) return null;
                const a = e.getUint32(t);
                return e.byteLength < a + t || a < 8 ? null : {
                    type: s.oY.decodeText(new Uint8Array(e.buffer, e.byteOffset + t + 4, 4)),
                    start: t + 8,
                    end: t + a
                }
            }
            Z.EXTENSION_NAME = Y;
            const ee = "EXT_texture_webp";
            class te {
                match(e) {
                    return e.length >= 12 && 87 === e[8] && 69 === e[9] && 66 === e[10] && 80 === e[11]
                }
                getSize(e) {
                    const t = s.oY.decodeText(e.slice(0, 4)),
                        a = s.oY.decodeText(e.slice(8, 12));
                    if ("RIFF" !== t || "WEBP" !== a) return null;
                    const r = new DataView(e.buffer, e.byteOffset);
                    let n = 12;
                    for (; n < r.byteLength;) {
                        const e = s.oY.decodeText(new Uint8Array([r.getUint8(n), r.getUint8(n + 1), r.getUint8(n + 2), r.getUint8(n + 3)])),
                            t = r.getUint32(n + 4, !0);
                        if ("VP8 " === e) return [16383 & r.getInt16(n + 14, !0), 16383 & r.getInt16(n + 16, !0)];
                        if ("VP8L" === e) {
                            const e = r.getUint8(n + 9),
                                t = r.getUint8(n + 10),
                                a = r.getUint8(n + 11);
                            return [1 + ((63 & t) << 8 | e), 1 + ((15 & r.getUint8(n + 12)) << 10 | a << 2 | (192 & t) >> 6)]
                        }
                        n += 8 + t + t % 2
                    }
                    return null
                }
                getChannels(e) {
                    return 4
                }
            }
            class ae extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = ee, this.prereadTypes = [s.uS.TEXTURE]
                }
                static register() {
                    s.Pp.registerFormat("image/webp", new te)
                }
                preread(e) {
                    return (e.jsonDoc.json.textures || []).forEach((e => {
                        e.extensions && e.extensions[ee] && (e.source = e.extensions[ee].source)
                    })), this
                }
                read(e) {
                    return this
                }
                write(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listTextures().forEach((a => {
                        if ("image/webp" === a.getMimeType()) {
                            const s = e.imageIndexMap.get(a);
                            (t.json.textures || []).forEach((e => {
                                e.source === s && (e.extensions = e.extensions || {}, e.extensions[ee] = {
                                    source: e.source
                                }, delete e.source)
                            }))
                        }
                    })), this
                }
            }
            ae.EXTENSION_NAME = ee;
            const se = h;
            let re, ne, ie, oe;

            function ce(e, t) {
                const a = new re.DecoderBuffer;
                try {
                    if (a.Init(t, t.length), e.GetEncodedGeometryType(a) !== re.TRIANGULAR_MESH) throw new Error(`[${se}] Unknown geometry type.`);
                    const s = new re.Mesh;
                    if (!e.DecodeBufferToMesh(a, s).ok() || 0 === s.ptr) throw new Error(`[${se}] Decoding failure.`);
                    return s
                } finally {
                    re.destroy(a)
                }
            }

            function be(e, t) {
                const a = 3 * t.num_faces();
                let s, r;
                if (t.num_points() <= 65534) {
                    const n = a * Uint16Array.BYTES_PER_ELEMENT;
                    s = re._malloc(n), e.GetTrianglesUInt16Array(t, n, s), r = new Uint16Array(re.HEAPU16.buffer, s, a).slice()
                } else {
                    const n = a * Uint32Array.BYTES_PER_ELEMENT;
                    s = re._malloc(n), e.GetTrianglesUInt32Array(t, n, s), r = new Uint32Array(re.HEAPU32.buffer, s, a).slice()
                }
                return re._free(s), r
            }

            function de(e, t, a, s) {
                const r = ie[s.componentType],
                    n = ne[s.componentType],
                    i = a.num_components(),
                    o = t.num_points() * i,
                    c = o * n.BYTES_PER_ELEMENT,
                    b = re._malloc(c);
                e.GetAttributeDataArrayForAllPoints(t, a, r, c, b);
                const d = new n(re.HEAPF32.buffer, b, o).slice();
                return re._free(b), d
            }
            var fe, he;
            ! function(e) {
                e[e.EDGEBREAKER = 1] = "EDGEBREAKER", e[e.SEQUENTIAL = 0] = "SEQUENTIAL"
            }(fe || (fe = {})),
            function(e) {
                e.POSITION = "POSITION", e.NORMAL = "NORMAL", e.COLOR = "COLOR", e.TEX_COORD = "TEX_COORD", e.GENERIC = "GENERIC"
            }(he || (he = {}));
            const ue = {
                    [he.POSITION]: 14,
                    [he.NORMAL]: 10,
                    [he.COLOR]: 8,
                    [he.TEX_COORD]: 12,
                    [he.GENERIC]: 12
                },
                le = {
                    decodeSpeed: 5,
                    encodeSpeed: 5,
                    method: fe.EDGEBREAKER,
                    quantizationBits: ue,
                    quantizationVolume: "mesh"
                };

            function ge(e, t = le) {
                const a = D({}, le, t);
                a.quantizationBits = D({}, ue, t.quantizationBits);
                const s = new oe.MeshBuilder,
                    r = new oe.Mesh,
                    n = new oe.ExpertEncoder(r),
                    i = {},
                    o = new oe.DracoInt8Array,
                    c = e.listTargets().length > 0;
                let b = !1;
                for (const t of e.listSemantics()) {
                    const o = e.getAttribute(t);
                    if (o.getSparse()) {
                        b = !0;
                        continue
                    }
                    const c = pe(t),
                        d = me(s, o.getComponentType(), r, oe[c], o.getCount(), o.getElementSize(), o.getArray());
                    if (-1 === d) throw new Error(`Error compressing "${t}" attribute.`);
                    if (i[t] = d, "mesh" === a.quantizationVolume || "POSITION" !== t) n.SetAttributeQuantization(d, a.quantizationBits[c]);
                    else {
                        if ("object" != typeof a.quantizationVolume) throw new Error("Invalid quantization volume state.");
                        {
                            const {
                                quantizationVolume: e
                            } = a, t = Math.max(e.max[0] - e.min[0], e.max[1] - e.min[1], e.max[2] - e.min[2]);
                            n.SetAttributeExplicitQuantization(d, a.quantizationBits[c], o.getElementSize(), e.min, t)
                        }
                    }
                }
                const d = e.getIndices();
                if (!d) throw new ye("Primitive must have indices.");
                s.AddFacesToMesh(r, d.getCount() / 3, d.getArray()), n.SetSpeedOptions(a.encodeSpeed, a.decodeSpeed), n.SetTrackEncodedProperties(!0), a.method === fe.SEQUENTIAL || c || b ? n.SetEncodingMethod(oe.MESH_SEQUENTIAL_ENCODING) : n.SetEncodingMethod(oe.MESH_EDGEBREAKER_ENCODING);
                const f = n.EncodeToDracoBuffer(!(c || b), o);
                if (f <= 0) throw new ye("Error applying Draco compression.");
                const h = new Uint8Array(f);
                for (let e = 0; e < f; ++e) h[e] = o.GetValue(e);
                const u = n.GetNumberOfEncodedPoints(),
                    l = 3 * n.GetNumberOfEncodedFaces();
                return oe.destroy(o), oe.destroy(r), oe.destroy(s), oe.destroy(n), {
                    numVertices: u,
                    numIndices: l,
                    data: h,
                    attributeIDs: i
                }
            }

            function pe(e) {
                return "POSITION" === e ? he.POSITION : "NORMAL" === e ? he.NORMAL : e.startsWith("COLOR_") ? he.COLOR : e.startsWith("TEXCOORD_") ? he.TEX_COORD : he.GENERIC
            }

            function me(e, t, a, r, n, i, o) {
                switch (t) {
                    case s.U_.ComponentType.UNSIGNED_BYTE:
                        return e.AddUInt8Attribute(a, r, n, i, o);
                    case s.U_.ComponentType.BYTE:
                        return e.AddInt8Attribute(a, r, n, i, o);
                    case s.U_.ComponentType.UNSIGNED_SHORT:
                        return e.AddUInt16Attribute(a, r, n, i, o);
                    case s.U_.ComponentType.SHORT:
                        return e.AddInt16Attribute(a, r, n, i, o);
                    case s.U_.ComponentType.UNSIGNED_INT:
                        return e.AddUInt32Attribute(a, r, n, i, o);
                    case s.U_.ComponentType.FLOAT:
                        return e.AddFloatAttribute(a, r, n, i, o);
                    default:
                        throw new Error(`Unexpected component type, "${t}".`)
                }
            }
            class ye extends Error {}
            const xe = h;
            class Te extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = xe, this.prereadTypes = [s.uS.PRIMITIVE], this.prewriteTypes = [s.uS.ACCESSOR], this.readDependencies = ["draco3d.decoder"], this.writeDependencies = ["draco3d.encoder"], this._decoderModule = null, this._encoderModule = null, this._encoderOptions = {}
                }
                install(e, t) {
                    var a, r;
                    return "draco3d.decoder" === e && (this._decoderModule = t, a = this._decoderModule, re = a, ne = {
                        [s.U_.ComponentType.FLOAT]: Float32Array,
                        [s.U_.ComponentType.UNSIGNED_INT]: Uint32Array,
                        [s.U_.ComponentType.UNSIGNED_SHORT]: Uint16Array,
                        [s.U_.ComponentType.UNSIGNED_BYTE]: Uint8Array,
                        [s.U_.ComponentType.SHORT]: Int16Array,
                        [s.U_.ComponentType.BYTE]: Int8Array
                    }, ie = {
                        [s.U_.ComponentType.FLOAT]: re.DT_FLOAT32,
                        [s.U_.ComponentType.UNSIGNED_INT]: re.DT_UINT32,
                        [s.U_.ComponentType.UNSIGNED_SHORT]: re.DT_UINT16,
                        [s.U_.ComponentType.UNSIGNED_BYTE]: re.DT_UINT8,
                        [s.U_.ComponentType.SHORT]: re.DT_INT16,
                        [s.U_.ComponentType.BYTE]: re.DT_INT8
                    }), "draco3d.encoder" === e && (this._encoderModule = t, r = this._encoderModule, oe = r), this
                }
                setEncoderOptions(e) {
                    return this._encoderOptions = e, this
                }
                preread(e) {
                    if (!this._decoderModule) throw new Error(`[${xe}] Please install extension dependency, "draco3d.decoder".`);
                    const t = this.document.getLogger(),
                        a = e.jsonDoc,
                        r = new Map;
                    try {
                        const n = a.json.meshes || [];
                        for (const i of n)
                            for (const n of i.primitives) {
                                if (!n.extensions || !n.extensions[xe]) continue;
                                const i = n.extensions[xe];
                                let [o, c] = r.get(i.bufferView) || [];
                                if (!c || !o) {
                                    const e = a.json.bufferViews[i.bufferView],
                                        n = a.json.buffers[e.buffer],
                                        b = n.uri ? a.resources[n.uri] : a.resources[s.aw],
                                        d = e.byteOffset || 0,
                                        f = e.byteLength,
                                        h = s.oY.toView(b, d, f);
                                    o = new this._decoderModule.Decoder, c = ce(o, h), r.set(i.bufferView, [o, c]), t.debug(`[${xe}] Decompressed ${h.byteLength} bytes.`)
                                }
                                for (const t in n.attributes) {
                                    const a = e.jsonDoc.json.accessors[n.attributes[t]],
                                        s = o.GetAttributeByUniqueId(c, i.attributes[t]),
                                        r = de(o, c, s, a);
                                    e.accessors[n.attributes[t]].setArray(r)
                                }
                                void 0 !== n.indices && e.accessors[n.indices].setArray(be(o, c))
                            }
                    } finally {
                        for (const [e, t] of Array.from(r.values())) this._decoderModule.destroy(e), this._decoderModule.destroy(t)
                    }
                    return this
                }
                read(e) {
                    return this
                }
                prewrite(e, t) {
                    if (!this._encoderModule) throw new Error(`[${xe}] Please install extension dependency, "draco3d.encoder".`);
                    const a = this.document.getLogger();
                    a.debug(`[${xe}] Compression options: ${JSON.stringify(this._encoderOptions)}`);
                    const r = function(e) {
                            const t = e.getLogger(),
                                a = new Set,
                                r = new Set;
                            let n = 0,
                                i = 0;
                            for (const t of e.getRoot().listMeshes())
                                for (const e of t.listPrimitives()) e.getIndices() ? e.getMode() !== s.WV.Mode.TRIANGLES ? (r.add(e), i++) : a.add(e) : (r.add(e), n++);
                            n > 0 && t.warn(`[${xe}] Skipping Draco compression of ${n} non-indexed primitives.`), i > 0 && t.warn(`[${xe}] Skipping Draco compression of ${i} non-TRIANGLES primitives.`);
                            const o = e.getRoot().listAccessors(),
                                c = new Map;
                            for (let e = 0; e < o.length; e++) c.set(o[e], e);
                            const b = new Map,
                                d = new Set,
                                f = new Map;
                            for (const t of Array.from(a)) {
                                let a = Ee(t, c);
                                if (d.has(a)) f.set(t, a);
                                else {
                                    if (b.has(t.getIndices())) {
                                        const a = t.getIndices(),
                                            s = a.clone();
                                        c.set(s, e.getRoot().listAccessors().length - 1), t.swap(a, s)
                                    }
                                    for (const a of t.listAttributes())
                                        if (b.has(a)) {
                                            const s = a.clone();
                                            c.set(s, e.getRoot().listAccessors().length - 1), t.swap(a, s)
                                        } a = Ee(t, c), d.add(a), f.set(t, a), b.set(t.getIndices(), a);
                                    for (const e of t.listAttributes()) b.set(e, a)
                                }
                            }
                            for (const e of Array.from(b.keys())) {
                                const t = new Set(e.listParents().map((e => e.propertyType)));
                                if (2 !== t.size || !t.has(s.uS.PRIMITIVE) || !t.has(s.uS.ROOT)) throw new Error(`[${xe}] Compressed accessors must only be used as indices or vertex attributes.`)
                            }
                            for (const e of Array.from(a)) {
                                const t = f.get(e),
                                    a = e.getIndices();
                                if (b.get(a) !== t || e.listAttributes().some((e => b.get(e) !== t))) throw new Error(`[${xe}] Draco primitives must share all, or no, accessors.`)
                            }
                            for (const e of Array.from(r)) {
                                const t = e.getIndices();
                                if (b.has(t) || e.listAttributes().some((e => b.has(e)))) throw new Error(`[${xe}] Accessor cannot be shared by compressed and uncompressed primitives.`)
                            }
                            return f
                        }(this.document),
                        n = new Map;
                    let i = "mesh";
                    "scene" === this._encoderOptions.quantizationVolume && (1 !== this.document.getRoot().listScenes().length ? a.warn(`[${xe}]: quantizationVolume=scene requires exactly 1 scene.`) : i = (0, s.zX)(this.document.getRoot().listScenes().pop()));
                    for (const t of Array.from(r.keys())) {
                        const o = r.get(t);
                        if (!o) throw new Error("Unexpected primitive.");
                        if (n.has(o)) {
                            n.set(o, n.get(o));
                            continue
                        }
                        const c = t.getIndices(),
                            b = e.jsonDoc.json.accessors;
                        let d;
                        try {
                            d = ge(t, D({}, this._encoderOptions, {
                                quantizationVolume: i
                            }))
                        } catch (e) {
                            if (e instanceof ye) {
                                a.warn(`[${xe}]: ${e.message} Skipping primitive compression.`);
                                continue
                            }
                            throw e
                        }
                        n.set(o, d);
                        const f = e.createAccessorDef(c);
                        f.count = d.numIndices, e.accessorIndexMap.set(c, b.length), b.push(f), d.numVertices > 65534 && f.componentType !== s.U_.ComponentType.UNSIGNED_INT && (f.componentType = s.U_.ComponentType.UNSIGNED_INT);
                        for (const a of t.listSemantics()) {
                            const s = t.getAttribute(a);
                            if (void 0 === d.attributeIDs[a]) continue;
                            const r = e.createAccessorDef(s);
                            r.count = d.numVertices, e.accessorIndexMap.set(s, b.length), b.push(r)
                        }
                        const h = t.getAttribute("POSITION").getBuffer() || this.document.getRoot().listBuffers()[0];
                        e.otherBufferViews.has(h) || e.otherBufferViews.set(h, []), e.otherBufferViews.get(h).push(d.data)
                    }
                    return a.debug(`[${xe}] Compressed ${r.size} primitives.`), e.extensionData[xe] = {
                        primitiveHashMap: r,
                        primitiveEncodingMap: n
                    }, this
                }
                write(e) {
                    const t = e.extensionData[xe];
                    for (const a of this.document.getRoot().listMeshes()) {
                        const s = e.jsonDoc.json.meshes[e.meshIndexMap.get(a)];
                        for (let r = 0; r < a.listPrimitives().length; r++) {
                            const n = a.listPrimitives()[r],
                                i = s.primitives[r],
                                o = t.primitiveHashMap.get(n);
                            if (!o) continue;
                            const c = t.primitiveEncodingMap.get(o);
                            c && (i.extensions = i.extensions || {}, i.extensions[xe] = {
                                bufferView: e.otherBufferViewsIndexMap.get(c.data),
                                attributes: c.attributeIDs
                            })
                        }
                    }
                    if (!t.primitiveHashMap.size) {
                        const t = e.jsonDoc.json;
                        t.extensionsUsed = (t.extensionsUsed || []).filter((e => e !== xe)), t.extensionsRequired = (t.extensionsRequired || []).filter((e => e !== xe))
                    }
                    return this
                }
            }

            function Ee(e, t) {
                const a = [],
                    s = e.getIndices();
                a.push(t.get(s));
                for (const s of e.listAttributes()) a.push(t.get(s));
                return a.sort().join("|")
            }
            Te.EXTENSION_NAME = xe, Te.EncoderMethod = fe;
            class je extends s.eY {
                init() {
                    this.extensionName = u, this.propertyType = "Light", this.parentTypes = [s.uS.NODE]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        color: [1, 1, 1],
                        intensity: 1,
                        type: je.Type.POINT,
                        range: null,
                        innerConeAngle: 0,
                        outerConeAngle: Math.PI / 4
                    })
                }
                getColor() {
                    return this.get("color")
                }
                setColor(e) {
                    return this.set("color", e)
                }
                getIntensity() {
                    return this.get("intensity")
                }
                setIntensity(e) {
                    return this.set("intensity", e)
                }
                getType() {
                    return this.get("type")
                }
                setType(e) {
                    return this.set("type", e)
                }
                getRange() {
                    return this.get("range")
                }
                setRange(e) {
                    return this.set("range", e)
                }
                getInnerConeAngle() {
                    return this.get("innerConeAngle")
                }
                setInnerConeAngle(e) {
                    return this.set("innerConeAngle", e)
                }
                getOuterConeAngle() {
                    return this.get("outerConeAngle")
                }
                setOuterConeAngle(e) {
                    return this.set("outerConeAngle", e)
                }
            }
            je.EXTENSION_NAME = u, je.Type = {
                POINT: "point",
                SPOT: "spot",
                DIRECTIONAL: "directional"
            };
            const we = u;
            class Ae extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = we
                }
                createLight(e = "") {
                    return new je(this.document.getGraph(), e)
                }
                read(e) {
                    const t = e.jsonDoc;
                    if (!t.json.extensions || !t.json.extensions[we]) return this;
                    const a = (t.json.extensions[we].lights || []).map((e => {
                        var t, a;
                        const s = this.createLight().setName(e.name || "").setType(e.type);
                        return void 0 !== e.color && s.setColor(e.color), void 0 !== e.intensity && s.setIntensity(e.intensity), void 0 !== e.range && s.setRange(e.range), void 0 !== (null == (t = e.spot) ? void 0 : t.innerConeAngle) && s.setInnerConeAngle(e.spot.innerConeAngle), void 0 !== (null == (a = e.spot) ? void 0 : a.outerConeAngle) && s.setOuterConeAngle(e.spot.outerConeAngle), s
                    }));
                    return t.json.nodes.forEach(((t, s) => {
                        if (!t.extensions || !t.extensions[we]) return;
                        const r = t.extensions[we];
                        e.nodes[s].setExtension(we, a[r.light])
                    })), this
                }
                write(e) {
                    const t = e.jsonDoc;
                    if (0 === this.properties.size) return this;
                    const a = [],
                        r = new Map;
                    for (const e of this.properties) {
                        const t = e,
                            n = {
                                type: t.getType()
                            };
                        s.M8.eq(t.getColor(), [1, 1, 1]) || (n.color = t.getColor()), 1 !== t.getIntensity() && (n.intensity = t.getIntensity()), null != t.getRange() && (n.range = t.getRange()), t.getName() && (n.name = t.getName()), t.getType() === je.Type.SPOT && (n.spot = {
                            innerConeAngle: t.getInnerConeAngle(),
                            outerConeAngle: t.getOuterConeAngle()
                        }), a.push(n), r.set(t, a.length - 1)
                    }
                    return this.document.getRoot().listNodes().forEach((a => {
                        const s = a.getExtension(we);
                        if (s) {
                            const n = e.nodeIndexMap.get(a),
                                i = t.json.nodes[n];
                            i.extensions = i.extensions || {}, i.extensions[we] = {
                                light: r.get(s)
                            }
                        }
                    })), t.json.extensions = t.json.extensions || {}, t.json.extensions[we] = {
                        lights: a
                    }, this
                }
            }
            Ae.EXTENSION_NAME = we;
            const {
                R: Ie,
                G: Ne,
                B: ke
            } = s.VS;
            class ve extends s.eY {
                init() {
                    this.extensionName = l, this.propertyType = "Anisotropy", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        anisotropyStrength: 0,
                        anisotropyRotation: 0,
                        anisotropyTexture: null,
                        anisotropyTextureInfo: new s.lO(this.graph, "anisotropyTextureInfo")
                    })
                }
                getAnisotropyStrength() {
                    return this.get("anisotropyStrength")
                }
                setAnisotropyStrength(e) {
                    return this.set("anisotropyStrength", e)
                }
                getAnisotropyRotation() {
                    return this.get("anisotropyRotation")
                }
                setAnisotropyRotation(e) {
                    return this.set("anisotropyRotation", e)
                }
                getAnisotropyTexture() {
                    return this.getRef("anisotropyTexture")
                }
                getAnisotropyTextureInfo() {
                    return this.getRef("anisotropyTexture") ? this.getRef("anisotropyTextureInfo") : null
                }
                setAnisotropyTexture(e) {
                    return this.setRef("anisotropyTexture", e, {
                        channels: Ie | Ne | ke
                    })
                }
            }
            ve.EXTENSION_NAME = l;
            const Re = l;
            class Se extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Re, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createAnisotropy() {
                    return new ve(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[Re]) {
                            const r = this.createAnisotropy();
                            e.materials[a].setExtension(Re, r);
                            const n = t.extensions[Re];
                            if (void 0 !== n.anisotropyStrength && r.setAnisotropyStrength(n.anisotropyStrength), void 0 !== n.anisotropyRotation && r.setAnisotropyRotation(n.anisotropyRotation), void 0 !== n.anisotropyTexture) {
                                const t = n.anisotropyTexture,
                                    a = e.textures[s[t.index].source];
                                r.setAnisotropyTexture(a), e.setTextureInfo(r.getAnisotropyTextureInfo(), t)
                            }
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(Re);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {};
                            const i = n.extensions[Re] = {};
                            if (s.getAnisotropyStrength() > 0 && (i.anisotropyStrength = s.getAnisotropyStrength()), 0 !== s.getAnisotropyRotation() && (i.anisotropyRotation = s.getAnisotropyRotation()), s.getAnisotropyTexture()) {
                                const t = s.getAnisotropyTexture(),
                                    a = s.getAnisotropyTextureInfo();
                                i.anisotropyTexture = e.createTextureInfoDef(t, a)
                            }
                        }
                    })), this
                }
            }
            Se.EXTENSION_NAME = Re;
            const {
                R: Me,
                G: _e,
                B: Ce
            } = s.VS;
            class De extends s.eY {
                init() {
                    this.extensionName = g, this.propertyType = "Clearcoat", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        clearcoatFactor: 0,
                        clearcoatTexture: null,
                        clearcoatTextureInfo: new s.lO(this.graph, "clearcoatTextureInfo"),
                        clearcoatRoughnessFactor: 0,
                        clearcoatRoughnessTexture: null,
                        clearcoatRoughnessTextureInfo: new s.lO(this.graph, "clearcoatRoughnessTextureInfo"),
                        clearcoatNormalScale: 1,
                        clearcoatNormalTexture: null,
                        clearcoatNormalTextureInfo: new s.lO(this.graph, "clearcoatNormalTextureInfo")
                    })
                }
                getClearcoatFactor() {
                    return this.get("clearcoatFactor")
                }
                setClearcoatFactor(e) {
                    return this.set("clearcoatFactor", e)
                }
                getClearcoatTexture() {
                    return this.getRef("clearcoatTexture")
                }
                getClearcoatTextureInfo() {
                    return this.getRef("clearcoatTexture") ? this.getRef("clearcoatTextureInfo") : null
                }
                setClearcoatTexture(e) {
                    return this.setRef("clearcoatTexture", e, {
                        channels: Me
                    })
                }
                getClearcoatRoughnessFactor() {
                    return this.get("clearcoatRoughnessFactor")
                }
                setClearcoatRoughnessFactor(e) {
                    return this.set("clearcoatRoughnessFactor", e)
                }
                getClearcoatRoughnessTexture() {
                    return this.getRef("clearcoatRoughnessTexture")
                }
                getClearcoatRoughnessTextureInfo() {
                    return this.getRef("clearcoatRoughnessTexture") ? this.getRef("clearcoatRoughnessTextureInfo") : null
                }
                setClearcoatRoughnessTexture(e) {
                    return this.setRef("clearcoatRoughnessTexture", e, {
                        channels: _e
                    })
                }
                getClearcoatNormalScale() {
                    return this.get("clearcoatNormalScale")
                }
                setClearcoatNormalScale(e) {
                    return this.set("clearcoatNormalScale", e)
                }
                getClearcoatNormalTexture() {
                    return this.getRef("clearcoatNormalTexture")
                }
                getClearcoatNormalTextureInfo() {
                    return this.getRef("clearcoatNormalTexture") ? this.getRef("clearcoatNormalTextureInfo") : null
                }
                setClearcoatNormalTexture(e) {
                    return this.setRef("clearcoatNormalTexture", e, {
                        channels: Me | _e | Ce
                    })
                }
            }
            De.EXTENSION_NAME = g;
            const Oe = g;
            class Fe extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Oe, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createClearcoat() {
                    return new De(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[Oe]) {
                            const r = this.createClearcoat();
                            e.materials[a].setExtension(Oe, r);
                            const n = t.extensions[Oe];
                            if (void 0 !== n.clearcoatFactor && r.setClearcoatFactor(n.clearcoatFactor), void 0 !== n.clearcoatRoughnessFactor && r.setClearcoatRoughnessFactor(n.clearcoatRoughnessFactor), void 0 !== n.clearcoatTexture) {
                                const t = n.clearcoatTexture,
                                    a = e.textures[s[t.index].source];
                                r.setClearcoatTexture(a), e.setTextureInfo(r.getClearcoatTextureInfo(), t)
                            }
                            if (void 0 !== n.clearcoatRoughnessTexture) {
                                const t = n.clearcoatRoughnessTexture,
                                    a = e.textures[s[t.index].source];
                                r.setClearcoatRoughnessTexture(a), e.setTextureInfo(r.getClearcoatRoughnessTextureInfo(), t)
                            }
                            if (void 0 !== n.clearcoatNormalTexture) {
                                const t = n.clearcoatNormalTexture,
                                    a = e.textures[s[t.index].source];
                                r.setClearcoatNormalTexture(a), e.setTextureInfo(r.getClearcoatNormalTextureInfo(), t), void 0 !== t.scale && r.setClearcoatNormalScale(t.scale)
                            }
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(Oe);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {};
                            const i = n.extensions[Oe] = {
                                clearcoatFactor: s.getClearcoatFactor(),
                                clearcoatRoughnessFactor: s.getClearcoatRoughnessFactor()
                            };
                            if (s.getClearcoatTexture()) {
                                const t = s.getClearcoatTexture(),
                                    a = s.getClearcoatTextureInfo();
                                i.clearcoatTexture = e.createTextureInfoDef(t, a)
                            }
                            if (s.getClearcoatRoughnessTexture()) {
                                const t = s.getClearcoatRoughnessTexture(),
                                    a = s.getClearcoatRoughnessTextureInfo();
                                i.clearcoatRoughnessTexture = e.createTextureInfoDef(t, a)
                            }
                            if (s.getClearcoatNormalTexture()) {
                                const t = s.getClearcoatNormalTexture(),
                                    a = s.getClearcoatNormalTextureInfo();
                                i.clearcoatNormalTexture = e.createTextureInfoDef(t, a), 1 !== s.getClearcoatNormalScale() && (i.clearcoatNormalTexture.scale = s.getClearcoatNormalScale())
                            }
                        }
                    })), this
                }
            }
            Fe.EXTENSION_NAME = Oe;
            const {
                R: Ue,
                G: Pe,
                B: Le,
                A: Be
            } = s.VS;
            class Ge extends s.eY {
                init() {
                    this.extensionName = p, this.propertyType = "DiffuseTransmission", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        diffuseTransmissionFactor: 0,
                        diffuseTransmissionTexture: null,
                        diffuseTransmissionTextureInfo: new s.lO(this.graph, "diffuseTransmissionTextureInfo"),
                        diffuseTransmissionColorFactor: [1, 1, 1],
                        diffuseTransmissionColorTexture: null,
                        diffuseTransmissionColorTextureInfo: new s.lO(this.graph, "diffuseTransmissionColorTextureInfo")
                    })
                }
                getDiffuseTransmissionFactor() {
                    return this.get("diffuseTransmissionFactor")
                }
                setDiffuseTransmissionFactor(e) {
                    return this.set("diffuseTransmissionFactor", e)
                }
                getDiffuseTransmissionTexture() {
                    return this.getRef("diffuseTransmissionTexture")
                }
                getDiffuseTransmissionTextureInfo() {
                    return this.getRef("diffuseTransmissionTexture") ? this.getRef("diffuseTransmissionTextureInfo") : null
                }
                setDiffuseTransmissionTexture(e) {
                    return this.setRef("diffuseTransmissionTexture", e, {
                        channels: Be
                    })
                }
                getDiffuseTransmissionColorFactor() {
                    return this.get("diffuseTransmissionColorFactor")
                }
                setDiffuseTransmissionColorFactor(e) {
                    return this.set("diffuseTransmissionColorFactor", e)
                }
                getDiffuseTransmissionColorTexture() {
                    return this.getRef("diffuseTransmissionColorTexture")
                }
                getDiffuseTransmissionColorTextureInfo() {
                    return this.getRef("diffuseTransmissionColorTexture") ? this.getRef("diffuseTransmissionColorTextureInfo") : null
                }
                setDiffuseTransmissionColorTexture(e) {
                    return this.setRef("diffuseTransmissionColorTexture", e, {
                        channels: Ue | Pe | Le
                    })
                }
            }
            Ge.EXTENSION_NAME = p;
            const ze = p;
            class Ve extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = ze
                }
                createDiffuseTransmission() {
                    return new Ge(this.document.getGraph())
                }
                read(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[ze]) {
                            const r = this.createDiffuseTransmission();
                            e.materials[a].setExtension(ze, r);
                            const n = t.extensions[ze];
                            if (void 0 !== n.diffuseTransmissionFactor && r.setDiffuseTransmissionFactor(n.diffuseTransmissionFactor), void 0 !== n.diffuseTransmissionColorFactor && r.setDiffuseTransmissionColorFactor(n.diffuseTransmissionColorFactor), void 0 !== n.diffuseTransmissionTexture) {
                                const t = n.diffuseTransmissionTexture,
                                    a = e.textures[s[t.index].source];
                                r.setDiffuseTransmissionTexture(a), e.setTextureInfo(r.getDiffuseTransmissionTextureInfo(), t)
                            }
                            if (void 0 !== n.diffuseTransmissionColorTexture) {
                                const t = n.diffuseTransmissionColorTexture,
                                    a = e.textures[s[t.index].source];
                                r.setDiffuseTransmissionColorTexture(a), e.setTextureInfo(r.getDiffuseTransmissionColorTextureInfo(), t)
                            }
                        }
                    })), this
                }
                write(e) {
                    const t = e.jsonDoc;
                    for (const a of this.document.getRoot().listMaterials()) {
                        const s = a.getExtension(ze);
                        if (!s) continue;
                        const r = e.materialIndexMap.get(a),
                            n = t.json.materials[r];
                        n.extensions = n.extensions || {};
                        const i = n.extensions[ze] = {
                            diffuseTransmissionFactor: s.getDiffuseTransmissionFactor(),
                            diffuseTransmissionColorFactor: s.getDiffuseTransmissionColorFactor()
                        };
                        if (s.getDiffuseTransmissionTexture()) {
                            const t = s.getDiffuseTransmissionTexture(),
                                a = s.getDiffuseTransmissionTextureInfo();
                            i.diffuseTransmissionTexture = e.createTextureInfoDef(t, a)
                        }
                        if (s.getDiffuseTransmissionColorTexture()) {
                            const t = s.getDiffuseTransmissionColorTexture(),
                                a = s.getDiffuseTransmissionColorTextureInfo();
                            i.diffuseTransmissionColorTexture = e.createTextureInfoDef(t, a)
                        }
                    }
                    return this
                }
            }
            Ve.EXTENSION_NAME = ze;
            class qe extends s.eY {
                init() {
                    this.extensionName = m, this.propertyType = "Dispersion", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        dispersion: 0
                    })
                }
                getDispersion() {
                    return this.get("dispersion")
                }
                setDispersion(e) {
                    return this.set("dispersion", e)
                }
            }
            qe.EXTENSION_NAME = m;
            const Ke = m;
            class He extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Ke, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createDispersion() {
                    return new qe(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    return (e.jsonDoc.json.materials || []).forEach(((t, a) => {
                        if (t.extensions && t.extensions[Ke]) {
                            const s = this.createDispersion();
                            e.materials[a].setExtension(Ke, s);
                            const r = t.extensions[Ke];
                            void 0 !== r.dispersion && s.setDispersion(r.dispersion)
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(Ke);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {}, n.extensions[Ke] = {
                                dispersion: s.getDispersion()
                            }
                        }
                    })), this
                }
            }
            He.EXTENSION_NAME = Ke;
            class We extends s.eY {
                init() {
                    this.extensionName = y, this.propertyType = "EmissiveStrength", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        emissiveStrength: 1
                    })
                }
                getEmissiveStrength() {
                    return this.get("emissiveStrength")
                }
                setEmissiveStrength(e) {
                    return this.set("emissiveStrength", e)
                }
            }
            We.EXTENSION_NAME = y;
            const Je = y;
            class Qe extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Je, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createEmissiveStrength() {
                    return new We(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    return (e.jsonDoc.json.materials || []).forEach(((t, a) => {
                        if (t.extensions && t.extensions[Je]) {
                            const s = this.createEmissiveStrength();
                            e.materials[a].setExtension(Je, s);
                            const r = t.extensions[Je];
                            void 0 !== r.emissiveStrength && s.setEmissiveStrength(r.emissiveStrength)
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(Je);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {}, n.extensions[Je] = {
                                emissiveStrength: s.getEmissiveStrength()
                            }
                        }
                    })), this
                }
            }
            Qe.EXTENSION_NAME = Je;
            class Ye extends s.eY {
                init() {
                    this.extensionName = x, this.propertyType = "IOR", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        ior: 1.5
                    })
                }
                getIOR() {
                    return this.get("ior")
                }
                setIOR(e) {
                    return this.set("ior", e)
                }
            }
            Ye.EXTENSION_NAME = x;
            const Xe = x;
            class Ze extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Xe, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createIOR() {
                    return new Ye(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    return (e.jsonDoc.json.materials || []).forEach(((t, a) => {
                        if (t.extensions && t.extensions[Xe]) {
                            const s = this.createIOR();
                            e.materials[a].setExtension(Xe, s);
                            const r = t.extensions[Xe];
                            void 0 !== r.ior && s.setIOR(r.ior)
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(Xe);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {}, n.extensions[Xe] = {
                                ior: s.getIOR()
                            }
                        }
                    })), this
                }
            }
            Ze.EXTENSION_NAME = Xe;
            const {
                R: $e,
                G: et
            } = s.VS;
            class tt extends s.eY {
                init() {
                    this.extensionName = T, this.propertyType = "Iridescence", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        iridescenceFactor: 0,
                        iridescenceTexture: null,
                        iridescenceTextureInfo: new s.lO(this.graph, "iridescenceTextureInfo"),
                        iridescenceIOR: 1.3,
                        iridescenceThicknessMinimum: 100,
                        iridescenceThicknessMaximum: 400,
                        iridescenceThicknessTexture: null,
                        iridescenceThicknessTextureInfo: new s.lO(this.graph, "iridescenceThicknessTextureInfo")
                    })
                }
                getIridescenceFactor() {
                    return this.get("iridescenceFactor")
                }
                setIridescenceFactor(e) {
                    return this.set("iridescenceFactor", e)
                }
                getIridescenceTexture() {
                    return this.getRef("iridescenceTexture")
                }
                getIridescenceTextureInfo() {
                    return this.getRef("iridescenceTexture") ? this.getRef("iridescenceTextureInfo") : null
                }
                setIridescenceTexture(e) {
                    return this.setRef("iridescenceTexture", e, {
                        channels: $e
                    })
                }
                getIridescenceIOR() {
                    return this.get("iridescenceIOR")
                }
                setIridescenceIOR(e) {
                    return this.set("iridescenceIOR", e)
                }
                getIridescenceThicknessMinimum() {
                    return this.get("iridescenceThicknessMinimum")
                }
                setIridescenceThicknessMinimum(e) {
                    return this.set("iridescenceThicknessMinimum", e)
                }
                getIridescenceThicknessMaximum() {
                    return this.get("iridescenceThicknessMaximum")
                }
                setIridescenceThicknessMaximum(e) {
                    return this.set("iridescenceThicknessMaximum", e)
                }
                getIridescenceThicknessTexture() {
                    return this.getRef("iridescenceThicknessTexture")
                }
                getIridescenceThicknessTextureInfo() {
                    return this.getRef("iridescenceThicknessTexture") ? this.getRef("iridescenceThicknessTextureInfo") : null
                }
                setIridescenceThicknessTexture(e) {
                    return this.setRef("iridescenceThicknessTexture", e, {
                        channels: et
                    })
                }
            }
            tt.EXTENSION_NAME = T;
            const at = T;
            class st extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = at, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createIridescence() {
                    return new tt(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[at]) {
                            const r = this.createIridescence();
                            e.materials[a].setExtension(at, r);
                            const n = t.extensions[at];
                            if (void 0 !== n.iridescenceFactor && r.setIridescenceFactor(n.iridescenceFactor), void 0 !== n.iridescenceIor && r.setIridescenceIOR(n.iridescenceIor), void 0 !== n.iridescenceThicknessMinimum && r.setIridescenceThicknessMinimum(n.iridescenceThicknessMinimum), void 0 !== n.iridescenceThicknessMaximum && r.setIridescenceThicknessMaximum(n.iridescenceThicknessMaximum), void 0 !== n.iridescenceTexture) {
                                const t = n.iridescenceTexture,
                                    a = e.textures[s[t.index].source];
                                r.setIridescenceTexture(a), e.setTextureInfo(r.getIridescenceTextureInfo(), t)
                            }
                            if (void 0 !== n.iridescenceThicknessTexture) {
                                const t = n.iridescenceThicknessTexture,
                                    a = e.textures[s[t.index].source];
                                r.setIridescenceThicknessTexture(a), e.setTextureInfo(r.getIridescenceThicknessTextureInfo(), t)
                            }
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(at);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {};
                            const i = n.extensions[at] = {};
                            if (s.getIridescenceFactor() > 0 && (i.iridescenceFactor = s.getIridescenceFactor()), 1.3 !== s.getIridescenceIOR() && (i.iridescenceIor = s.getIridescenceIOR()), 100 !== s.getIridescenceThicknessMinimum() && (i.iridescenceThicknessMinimum = s.getIridescenceThicknessMinimum()), 400 !== s.getIridescenceThicknessMaximum() && (i.iridescenceThicknessMaximum = s.getIridescenceThicknessMaximum()), s.getIridescenceTexture()) {
                                const t = s.getIridescenceTexture(),
                                    a = s.getIridescenceTextureInfo();
                                i.iridescenceTexture = e.createTextureInfoDef(t, a)
                            }
                            if (s.getIridescenceThicknessTexture()) {
                                const t = s.getIridescenceThicknessTexture(),
                                    a = s.getIridescenceThicknessTextureInfo();
                                i.iridescenceThicknessTexture = e.createTextureInfoDef(t, a)
                            }
                        }
                    })), this
                }
            }
            st.EXTENSION_NAME = at;
            const {
                R: rt,
                G: nt,
                B: it,
                A: ot
            } = s.VS;
            class ct extends s.eY {
                init() {
                    this.extensionName = E, this.propertyType = "PBRSpecularGlossiness", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        diffuseFactor: [1, 1, 1, 1],
                        diffuseTexture: null,
                        diffuseTextureInfo: new s.lO(this.graph, "diffuseTextureInfo"),
                        specularFactor: [1, 1, 1],
                        glossinessFactor: 1,
                        specularGlossinessTexture: null,
                        specularGlossinessTextureInfo: new s.lO(this.graph, "specularGlossinessTextureInfo")
                    })
                }
                getDiffuseFactor() {
                    return this.get("diffuseFactor")
                }
                setDiffuseFactor(e) {
                    return this.set("diffuseFactor", e)
                }
                getDiffuseTexture() {
                    return this.getRef("diffuseTexture")
                }
                getDiffuseTextureInfo() {
                    return this.getRef("diffuseTexture") ? this.getRef("diffuseTextureInfo") : null
                }
                setDiffuseTexture(e) {
                    return this.setRef("diffuseTexture", e, {
                        channels: rt | nt | it | ot,
                        isColor: !0
                    })
                }
                getSpecularFactor() {
                    return this.get("specularFactor")
                }
                setSpecularFactor(e) {
                    return this.set("specularFactor", e)
                }
                getGlossinessFactor() {
                    return this.get("glossinessFactor")
                }
                setGlossinessFactor(e) {
                    return this.set("glossinessFactor", e)
                }
                getSpecularGlossinessTexture() {
                    return this.getRef("specularGlossinessTexture")
                }
                getSpecularGlossinessTextureInfo() {
                    return this.getRef("specularGlossinessTexture") ? this.getRef("specularGlossinessTextureInfo") : null
                }
                setSpecularGlossinessTexture(e) {
                    return this.setRef("specularGlossinessTexture", e, {
                        channels: rt | nt | it | ot
                    })
                }
            }
            ct.EXTENSION_NAME = E;
            const bt = E;
            class dt extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = bt, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createPBRSpecularGlossiness() {
                    return new ct(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[bt]) {
                            const r = this.createPBRSpecularGlossiness();
                            e.materials[a].setExtension(bt, r);
                            const n = t.extensions[bt];
                            if (void 0 !== n.diffuseFactor && r.setDiffuseFactor(n.diffuseFactor), void 0 !== n.specularFactor && r.setSpecularFactor(n.specularFactor), void 0 !== n.glossinessFactor && r.setGlossinessFactor(n.glossinessFactor), void 0 !== n.diffuseTexture) {
                                const t = n.diffuseTexture,
                                    a = e.textures[s[t.index].source];
                                r.setDiffuseTexture(a), e.setTextureInfo(r.getDiffuseTextureInfo(), t)
                            }
                            if (void 0 !== n.specularGlossinessTexture) {
                                const t = n.specularGlossinessTexture,
                                    a = e.textures[s[t.index].source];
                                r.setSpecularGlossinessTexture(a), e.setTextureInfo(r.getSpecularGlossinessTextureInfo(), t)
                            }
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(bt);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {};
                            const i = n.extensions[bt] = {
                                diffuseFactor: s.getDiffuseFactor(),
                                specularFactor: s.getSpecularFactor(),
                                glossinessFactor: s.getGlossinessFactor()
                            };
                            if (s.getDiffuseTexture()) {
                                const t = s.getDiffuseTexture(),
                                    a = s.getDiffuseTextureInfo();
                                i.diffuseTexture = e.createTextureInfoDef(t, a)
                            }
                            if (s.getSpecularGlossinessTexture()) {
                                const t = s.getSpecularGlossinessTexture(),
                                    a = s.getSpecularGlossinessTextureInfo();
                                i.specularGlossinessTexture = e.createTextureInfoDef(t, a)
                            }
                        }
                    })), this
                }
            }
            dt.EXTENSION_NAME = bt;
            const {
                R: ft,
                G: ht,
                B: ut,
                A: lt
            } = s.VS;
            class gt extends s.eY {
                init() {
                    this.extensionName = j, this.propertyType = "Sheen", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        sheenColorFactor: [0, 0, 0],
                        sheenColorTexture: null,
                        sheenColorTextureInfo: new s.lO(this.graph, "sheenColorTextureInfo"),
                        sheenRoughnessFactor: 0,
                        sheenRoughnessTexture: null,
                        sheenRoughnessTextureInfo: new s.lO(this.graph, "sheenRoughnessTextureInfo")
                    })
                }
                getSheenColorFactor() {
                    return this.get("sheenColorFactor")
                }
                setSheenColorFactor(e) {
                    return this.set("sheenColorFactor", e)
                }
                getSheenColorTexture() {
                    return this.getRef("sheenColorTexture")
                }
                getSheenColorTextureInfo() {
                    return this.getRef("sheenColorTexture") ? this.getRef("sheenColorTextureInfo") : null
                }
                setSheenColorTexture(e) {
                    return this.setRef("sheenColorTexture", e, {
                        channels: ft | ht | ut,
                        isColor: !0
                    })
                }
                getSheenRoughnessFactor() {
                    return this.get("sheenRoughnessFactor")
                }
                setSheenRoughnessFactor(e) {
                    return this.set("sheenRoughnessFactor", e)
                }
                getSheenRoughnessTexture() {
                    return this.getRef("sheenRoughnessTexture")
                }
                getSheenRoughnessTextureInfo() {
                    return this.getRef("sheenRoughnessTexture") ? this.getRef("sheenRoughnessTextureInfo") : null
                }
                setSheenRoughnessTexture(e) {
                    return this.setRef("sheenRoughnessTexture", e, {
                        channels: lt
                    })
                }
            }
            gt.EXTENSION_NAME = j;
            const pt = j;
            class mt extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = pt, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createSheen() {
                    return new gt(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[pt]) {
                            const r = this.createSheen();
                            e.materials[a].setExtension(pt, r);
                            const n = t.extensions[pt];
                            if (void 0 !== n.sheenColorFactor && r.setSheenColorFactor(n.sheenColorFactor), void 0 !== n.sheenRoughnessFactor && r.setSheenRoughnessFactor(n.sheenRoughnessFactor), void 0 !== n.sheenColorTexture) {
                                const t = n.sheenColorTexture,
                                    a = e.textures[s[t.index].source];
                                r.setSheenColorTexture(a), e.setTextureInfo(r.getSheenColorTextureInfo(), t)
                            }
                            if (void 0 !== n.sheenRoughnessTexture) {
                                const t = n.sheenRoughnessTexture,
                                    a = e.textures[s[t.index].source];
                                r.setSheenRoughnessTexture(a), e.setTextureInfo(r.getSheenRoughnessTextureInfo(), t)
                            }
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(pt);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {};
                            const i = n.extensions[pt] = {
                                sheenColorFactor: s.getSheenColorFactor(),
                                sheenRoughnessFactor: s.getSheenRoughnessFactor()
                            };
                            if (s.getSheenColorTexture()) {
                                const t = s.getSheenColorTexture(),
                                    a = s.getSheenColorTextureInfo();
                                i.sheenColorTexture = e.createTextureInfoDef(t, a)
                            }
                            if (s.getSheenRoughnessTexture()) {
                                const t = s.getSheenRoughnessTexture(),
                                    a = s.getSheenRoughnessTextureInfo();
                                i.sheenRoughnessTexture = e.createTextureInfoDef(t, a)
                            }
                        }
                    })), this
                }
            }
            mt.EXTENSION_NAME = pt;
            const {
                R: yt,
                G: xt,
                B: Tt,
                A: Et
            } = s.VS;
            class jt extends s.eY {
                init() {
                    this.extensionName = w, this.propertyType = "Specular", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        specularFactor: 1,
                        specularTexture: null,
                        specularTextureInfo: new s.lO(this.graph, "specularTextureInfo"),
                        specularColorFactor: [1, 1, 1],
                        specularColorTexture: null,
                        specularColorTextureInfo: new s.lO(this.graph, "specularColorTextureInfo")
                    })
                }
                getSpecularFactor() {
                    return this.get("specularFactor")
                }
                setSpecularFactor(e) {
                    return this.set("specularFactor", e)
                }
                getSpecularColorFactor() {
                    return this.get("specularColorFactor")
                }
                setSpecularColorFactor(e) {
                    return this.set("specularColorFactor", e)
                }
                getSpecularTexture() {
                    return this.getRef("specularTexture")
                }
                getSpecularTextureInfo() {
                    return this.getRef("specularTexture") ? this.getRef("specularTextureInfo") : null
                }
                setSpecularTexture(e) {
                    return this.setRef("specularTexture", e, {
                        channels: Et
                    })
                }
                getSpecularColorTexture() {
                    return this.getRef("specularColorTexture")
                }
                getSpecularColorTextureInfo() {
                    return this.getRef("specularColorTexture") ? this.getRef("specularColorTextureInfo") : null
                }
                setSpecularColorTexture(e) {
                    return this.setRef("specularColorTexture", e, {
                        channels: yt | xt | Tt,
                        isColor: !0
                    })
                }
            }
            jt.EXTENSION_NAME = w;
            const wt = w;
            class At extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = wt, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createSpecular() {
                    return new jt(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[wt]) {
                            const r = this.createSpecular();
                            e.materials[a].setExtension(wt, r);
                            const n = t.extensions[wt];
                            if (void 0 !== n.specularFactor && r.setSpecularFactor(n.specularFactor), void 0 !== n.specularColorFactor && r.setSpecularColorFactor(n.specularColorFactor), void 0 !== n.specularTexture) {
                                const t = n.specularTexture,
                                    a = e.textures[s[t.index].source];
                                r.setSpecularTexture(a), e.setTextureInfo(r.getSpecularTextureInfo(), t)
                            }
                            if (void 0 !== n.specularColorTexture) {
                                const t = n.specularColorTexture,
                                    a = e.textures[s[t.index].source];
                                r.setSpecularColorTexture(a), e.setTextureInfo(r.getSpecularColorTextureInfo(), t)
                            }
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const r = a.getExtension(wt);
                        if (r) {
                            const n = e.materialIndexMap.get(a),
                                i = t.json.materials[n];
                            i.extensions = i.extensions || {};
                            const o = i.extensions[wt] = {};
                            if (1 !== r.getSpecularFactor() && (o.specularFactor = r.getSpecularFactor()), s.M8.eq(r.getSpecularColorFactor(), [1, 1, 1]) || (o.specularColorFactor = r.getSpecularColorFactor()), r.getSpecularTexture()) {
                                const t = r.getSpecularTexture(),
                                    a = r.getSpecularTextureInfo();
                                o.specularTexture = e.createTextureInfoDef(t, a)
                            }
                            if (r.getSpecularColorTexture()) {
                                const t = r.getSpecularColorTexture(),
                                    a = r.getSpecularColorTextureInfo();
                                o.specularColorTexture = e.createTextureInfoDef(t, a)
                            }
                        }
                    })), this
                }
            }
            At.EXTENSION_NAME = wt;
            const {
                R: It
            } = s.VS;
            class Nt extends s.eY {
                init() {
                    this.extensionName = A, this.propertyType = "Transmission", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        transmissionFactor: 0,
                        transmissionTexture: null,
                        transmissionTextureInfo: new s.lO(this.graph, "transmissionTextureInfo")
                    })
                }
                getTransmissionFactor() {
                    return this.get("transmissionFactor")
                }
                setTransmissionFactor(e) {
                    return this.set("transmissionFactor", e)
                }
                getTransmissionTexture() {
                    return this.getRef("transmissionTexture")
                }
                getTransmissionTextureInfo() {
                    return this.getRef("transmissionTexture") ? this.getRef("transmissionTextureInfo") : null
                }
                setTransmissionTexture(e) {
                    return this.setRef("transmissionTexture", e, {
                        channels: It
                    })
                }
            }
            Nt.EXTENSION_NAME = A;
            const kt = A;
            class vt extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = kt, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createTransmission() {
                    return new Nt(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[kt]) {
                            const r = this.createTransmission();
                            e.materials[a].setExtension(kt, r);
                            const n = t.extensions[kt];
                            if (void 0 !== n.transmissionFactor && r.setTransmissionFactor(n.transmissionFactor), void 0 !== n.transmissionTexture) {
                                const t = n.transmissionTexture,
                                    a = e.textures[s[t.index].source];
                                r.setTransmissionTexture(a), e.setTextureInfo(r.getTransmissionTextureInfo(), t)
                            }
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const s = a.getExtension(kt);
                        if (s) {
                            const r = e.materialIndexMap.get(a),
                                n = t.json.materials[r];
                            n.extensions = n.extensions || {};
                            const i = n.extensions[kt] = {
                                transmissionFactor: s.getTransmissionFactor()
                            };
                            if (s.getTransmissionTexture()) {
                                const t = s.getTransmissionTexture(),
                                    a = s.getTransmissionTextureInfo();
                                i.transmissionTexture = e.createTextureInfoDef(t, a)
                            }
                        }
                    })), this
                }
            }
            vt.EXTENSION_NAME = kt;
            class Rt extends s.eY {
                init() {
                    this.extensionName = I, this.propertyType = "Unlit", this.parentTypes = [s.uS.MATERIAL]
                }
            }
            Rt.EXTENSION_NAME = I;
            const St = I;
            class Mt extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = St, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createUnlit() {
                    return new Rt(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    return (e.jsonDoc.json.materials || []).forEach(((t, a) => {
                        t.extensions && t.extensions[St] && e.materials[a].setExtension(St, this.createUnlit())
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        if (a.getExtension(St)) {
                            const s = e.materialIndexMap.get(a),
                                r = t.json.materials[s];
                            r.extensions = r.extensions || {}, r.extensions[St] = {}
                        }
                    })), this
                }
            }
            Mt.EXTENSION_NAME = St;
            class _t extends s.eY {
                init() {
                    this.extensionName = k, this.propertyType = "Mapping", this.parentTypes = ["MappingList"]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        material: null,
                        variants: new r.BK
                    })
                }
                getMaterial() {
                    return this.getRef("material")
                }
                setMaterial(e) {
                    return this.setRef("material", e)
                }
                addVariant(e) {
                    return this.addRef("variants", e)
                }
                removeVariant(e) {
                    return this.removeRef("variants", e)
                }
                listVariants() {
                    return this.listRefs("variants")
                }
            }
            _t.EXTENSION_NAME = k;
            class Ct extends s.eY {
                init() {
                    this.extensionName = k, this.propertyType = "MappingList", this.parentTypes = [s.uS.PRIMITIVE]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        mappings: new r.BK
                    })
                }
                addMapping(e) {
                    return this.addRef("mappings", e)
                }
                removeMapping(e) {
                    return this.removeRef("mappings", e)
                }
                listMappings() {
                    return this.listRefs("mappings")
                }
            }
            Ct.EXTENSION_NAME = k;
            class Dt extends s.eY {
                init() {
                    this.extensionName = k, this.propertyType = "Variant", this.parentTypes = ["MappingList"]
                }
            }
            Dt.EXTENSION_NAME = k;
            const Ot = k;
            class Ft extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Ot
                }
                createMappingList() {
                    return new Ct(this.document.getGraph())
                }
                createVariant(e = "") {
                    return new Dt(this.document.getGraph(), e)
                }
                createMapping() {
                    return new _t(this.document.getGraph())
                }
                listVariants() {
                    return Array.from(this.properties).filter((e => e instanceof Dt))
                }
                read(e) {
                    const t = e.jsonDoc;
                    if (!t.json.extensions || !t.json.extensions[Ot]) return this;
                    const a = (t.json.extensions[Ot].variants || []).map((e => this.createVariant().setName(e.name || "")));
                    return (t.json.meshes || []).forEach(((t, s) => {
                        const r = e.meshes[s];
                        (t.primitives || []).forEach(((t, s) => {
                            if (!t.extensions || !t.extensions[Ot]) return;
                            const n = this.createMappingList(),
                                i = t.extensions[Ot];
                            for (const t of i.mappings) {
                                const s = this.createMapping();
                                void 0 !== t.material && s.setMaterial(e.materials[t.material]);
                                for (const e of t.variants || []) s.addVariant(a[e]);
                                n.addMapping(s)
                            }
                            r.listPrimitives()[s].setExtension(Ot, n)
                        }))
                    })), this
                }
                write(e) {
                    const t = e.jsonDoc,
                        a = this.listVariants();
                    if (!a.length) return this;
                    const s = [],
                        r = new Map;
                    for (const t of a) r.set(t, s.length), s.push(e.createPropertyDef(t));
                    for (const t of this.document.getRoot().listMeshes()) {
                        const a = e.meshIndexMap.get(t);
                        t.listPrimitives().forEach(((t, s) => {
                            const n = t.getExtension(Ot);
                            if (!n) return;
                            const i = e.jsonDoc.json.meshes[a].primitives[s],
                                o = n.listMappings().map((t => {
                                    const a = e.createPropertyDef(t),
                                        s = t.getMaterial();
                                    return s && (a.material = e.materialIndexMap.get(s)), a.variants = t.listVariants().map((e => r.get(e))), a
                                }));
                            i.extensions = i.extensions || {}, i.extensions[Ot] = {
                                mappings: o
                            }
                        }))
                    }
                    return t.json.extensions = t.json.extensions || {}, t.json.extensions[Ot] = {
                        variants: s
                    }, this
                }
            }
            Ft.EXTENSION_NAME = Ot;
            const {
                G: Ut
            } = s.VS;
            class Pt extends s.eY {
                init() {
                    this.extensionName = N, this.propertyType = "Volume", this.parentTypes = [s.uS.MATERIAL]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        thicknessFactor: 0,
                        thicknessTexture: null,
                        thicknessTextureInfo: new s.lO(this.graph, "thicknessTexture"),
                        attenuationDistance: 1 / 0,
                        attenuationColor: [1, 1, 1]
                    })
                }
                getThicknessFactor() {
                    return this.get("thicknessFactor")
                }
                setThicknessFactor(e) {
                    return this.set("thicknessFactor", e)
                }
                getThicknessTexture() {
                    return this.getRef("thicknessTexture")
                }
                getThicknessTextureInfo() {
                    return this.getRef("thicknessTexture") ? this.getRef("thicknessTextureInfo") : null
                }
                setThicknessTexture(e) {
                    return this.setRef("thicknessTexture", e, {
                        channels: Ut
                    })
                }
                getAttenuationDistance() {
                    return this.get("attenuationDistance")
                }
                setAttenuationDistance(e) {
                    return this.set("attenuationDistance", e)
                }
                getAttenuationColor() {
                    return this.get("attenuationColor")
                }
                setAttenuationColor(e) {
                    return this.set("attenuationColor", e)
                }
            }
            Pt.EXTENSION_NAME = N;
            const Lt = N;
            class Bt extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Lt, this.prereadTypes = [s.uS.MESH], this.prewriteTypes = [s.uS.MESH]
                }
                createVolume() {
                    return new Pt(this.document.getGraph())
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
                preread(e) {
                    const t = e.jsonDoc,
                        a = t.json.materials || [],
                        s = t.json.textures || [];
                    return a.forEach(((t, a) => {
                        if (t.extensions && t.extensions[Lt]) {
                            const r = this.createVolume();
                            e.materials[a].setExtension(Lt, r);
                            const n = t.extensions[Lt];
                            if (void 0 !== n.thicknessFactor && r.setThicknessFactor(n.thicknessFactor), void 0 !== n.attenuationDistance && r.setAttenuationDistance(n.attenuationDistance), void 0 !== n.attenuationColor && r.setAttenuationColor(n.attenuationColor), void 0 !== n.thicknessTexture) {
                                const t = n.thicknessTexture,
                                    a = e.textures[s[t.index].source];
                                r.setThicknessTexture(a), e.setTextureInfo(r.getThicknessTextureInfo(), t)
                            }
                        }
                    })), this
                }
                prewrite(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listMaterials().forEach((a => {
                        const r = a.getExtension(Lt);
                        if (r) {
                            const n = e.materialIndexMap.get(a),
                                i = t.json.materials[n];
                            i.extensions = i.extensions || {};
                            const o = i.extensions[Lt] = {};
                            if (r.getThicknessFactor() > 0 && (o.thicknessFactor = r.getThicknessFactor()), Number.isFinite(r.getAttenuationDistance()) && (o.attenuationDistance = r.getAttenuationDistance()), s.M8.eq(r.getAttenuationColor(), [1, 1, 1]) || (o.attenuationColor = r.getAttenuationColor()), r.getThicknessTexture()) {
                                const t = r.getThicknessTexture(),
                                    a = r.getThicknessTextureInfo();
                                o.thicknessTexture = e.createTextureInfoDef(t, a)
                            }
                        }
                    })), this
                }
            }
            Bt.EXTENSION_NAME = Lt;
            const Gt = "KHR_mesh_quantization";
            class zt extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Gt
                }
                read(e) {
                    return this
                }
                write(e) {
                    return this
                }
            }
            zt.EXTENSION_NAME = Gt;
            const Vt = "KHR_texture_basisu";
            class qt {
                match(e) {
                    return 171 === e[0] && 75 === e[1] && 84 === e[2] && 88 === e[3] && 32 === e[4] && 50 === e[5] && 48 === e[6] && 187 === e[7] && 13 === e[8] && 10 === e[9] && 26 === e[10] && 10 === e[11]
                }
                getSize(e) {
                    const t = d(e);
                    return [t.pixelWidth, t.pixelHeight]
                }
                getChannels(e) {
                    const t = d(e).dataFormatDescriptor[0];
                    if (163 === t.colorModel) return 2 === t.samples.length && 15 == (15 & t.samples[1].channelType) ? 4 : 3;
                    if (166 === t.colorModel) return 3 == (15 & t.samples[0].channelType) ? 4 : 3;
                    throw new Error(`Unexpected KTX2 colorModel, "${t.colorModel}".`)
                }
                getVRAMByteLength(e) {
                    const t = d(e),
                        a = this.getChannels(e) > 3;
                    let s = 0;
                    for (let e = 0; e < t.levels.length; e++) {
                        const r = t.levels[e];
                        r.uncompressedByteLength ? s += r.uncompressedByteLength : s += Math.max(1, Math.floor(t.pixelWidth / Math.pow(2, e))) / 4 * (Math.max(1, Math.floor(t.pixelHeight / Math.pow(2, e))) / 4) * (a ? 16 : 8)
                    }
                    return s
                }
            }
            class Kt extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Vt, this.prereadTypes = [s.uS.TEXTURE]
                }
                static register() {
                    s.Pp.registerFormat("image/ktx2", new qt)
                }
                preread(e) {
                    return e.jsonDoc.json.textures.forEach((e => {
                        if (e.extensions && e.extensions[Vt]) {
                            const t = e.extensions[Vt];
                            e.source = t.source
                        }
                    })), this
                }
                read(e) {
                    return this
                }
                write(e) {
                    const t = e.jsonDoc;
                    return this.document.getRoot().listTextures().forEach((a => {
                        if ("image/ktx2" === a.getMimeType()) {
                            const s = e.imageIndexMap.get(a);
                            t.json.textures.forEach((e => {
                                e.source === s && (e.extensions = e.extensions || {}, e.extensions[Vt] = {
                                    source: e.source
                                }, delete e.source)
                            }))
                        }
                    })), this
                }
            }
            Kt.EXTENSION_NAME = Vt;
            class Ht extends s.eY {
                init() {
                    this.extensionName = v, this.propertyType = "Transform", this.parentTypes = [s.uS.TEXTURE_INFO]
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        offset: [0, 0],
                        rotation: 0,
                        scale: [1, 1],
                        texCoord: null
                    })
                }
                getOffset() {
                    return this.get("offset")
                }
                setOffset(e) {
                    return this.set("offset", e)
                }
                getRotation() {
                    return this.get("rotation")
                }
                setRotation(e) {
                    return this.set("rotation", e)
                }
                getScale() {
                    return this.get("scale")
                }
                setScale(e) {
                    return this.set("scale", e)
                }
                getTexCoord() {
                    return this.get("texCoord")
                }
                setTexCoord(e) {
                    return this.set("texCoord", e)
                }
            }
            Ht.EXTENSION_NAME = v;
            const Wt = v;
            class Jt extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Wt
                }
                createTransform() {
                    return new Ht(this.document.getGraph())
                }
                read(e) {
                    for (const [t, a] of Array.from(e.textureInfos.entries())) {
                        if (!a.extensions || !a.extensions[Wt]) continue;
                        const e = this.createTransform(),
                            s = a.extensions[Wt];
                        void 0 !== s.offset && e.setOffset(s.offset), void 0 !== s.rotation && e.setRotation(s.rotation), void 0 !== s.scale && e.setScale(s.scale), void 0 !== s.texCoord && e.setTexCoord(s.texCoord), t.setExtension(Wt, e)
                    }
                    return this
                }
                write(e) {
                    const t = Array.from(e.textureInfoDefMap.entries());
                    for (const [e, a] of t) {
                        const t = e.getExtension(Wt);
                        if (!t) continue;
                        a.extensions = a.extensions || {};
                        const r = {},
                            n = s.M8.eq;
                        n(t.getOffset(), [0, 0]) || (r.offset = t.getOffset()), 0 !== t.getRotation() && (r.rotation = t.getRotation()), n(t.getScale(), [1, 1]) || (r.scale = t.getScale()), null != t.getTexCoord() && (r.texCoord = t.getTexCoord()), a.extensions[Wt] = r
                    }
                    return this
                }
            }
            Jt.EXTENSION_NAME = Wt;
            const Qt = [s.uS.ROOT, s.uS.SCENE, s.uS.NODE, s.uS.MESH, s.uS.MATERIAL, s.uS.TEXTURE, s.uS.ANIMATION];
            class Yt extends s.eY {
                init() {
                    this.extensionName = R, this.propertyType = "Packet", this.parentTypes = Qt
                }
                getDefaults() {
                    return Object.assign(super.getDefaults(), {
                        context: {},
                        properties: {}
                    })
                }
                getContext() {
                    return this.get("context")
                }
                setContext(e) {
                    return this.set("context", D({}, e))
                }
                listProperties() {
                    return Object.keys(this.get("properties"))
                }
                getProperty(e) {
                    const t = this.get("properties");
                    return e in t ? t[e] : null
                }
                setProperty(e, t) {
                    this._assertContext(e);
                    const a = D({}, this.get("properties"));
                    return t ? a[e] = t : delete a[e], this.set("properties", a)
                }
                toJSONLD() {
                    return D({
                        "@context": Xt(this.get("context"))
                    }, Xt(this.get("properties")))
                }
                fromJSONLD(e) {
                    const t = (e = Xt(e))["@context"];
                    return t && this.set("context", t), delete e["@context"], this.set("properties", e)
                }
                _assertContext(e) {
                    if (!(e.split(":")[0] in this.get("context"))) throw new Error(`KHR_xmp_json_ld: Missing context for term, "${e}".`)
                }
            }

            function Xt(e) {
                return JSON.parse(JSON.stringify(e))
            }
            Yt.EXTENSION_NAME = R;
            const Zt = R;
            class $t extends s.hj {
                constructor(...e) {
                    super(...e), this.extensionName = Zt
                }
                createPacket() {
                    return new Yt(this.document.getGraph())
                }
                listPackets() {
                    return Array.from(this.properties)
                }
                read(e) {
                    var t;
                    const a = null == (t = e.jsonDoc.json.extensions) ? void 0 : t[Zt];
                    if (!a || !a.packets) return this;
                    const s = e.jsonDoc.json,
                        r = this.document.getRoot(),
                        n = a.packets.map((e => this.createPacket().fromJSONLD(e))),
                        i = [
                            [s.asset], s.scenes, s.nodes, s.meshes, s.materials, s.images, s.animations
                        ],
                        o = [
                            [r], r.listScenes(), r.listNodes(), r.listMeshes(), r.listMaterials(), r.listTextures(), r.listAnimations()
                        ];
                    for (let e = 0; e < i.length; e++) {
                        const t = i[e] || [];
                        for (let a = 0; a < t.length; a++) {
                            const s = t[a];
                            if (s.extensions && s.extensions[Zt]) {
                                const t = s.extensions[Zt];
                                o[e][a].setExtension(Zt, n[t.packet])
                            }
                        }
                    }
                    return this
                }
                write(e) {
                    const {
                        json: t
                    } = e.jsonDoc, a = [];
                    for (const r of this.properties) {
                        a.push(r.toJSONLD());
                        for (const n of r.listParents()) {
                            let r;
                            switch (n.propertyType) {
                                case s.uS.ROOT:
                                    r = t.asset;
                                    break;
                                case s.uS.SCENE:
                                    r = t.scenes[e.sceneIndexMap.get(n)];
                                    break;
                                case s.uS.NODE:
                                    r = t.nodes[e.nodeIndexMap.get(n)];
                                    break;
                                case s.uS.MESH:
                                    r = t.meshes[e.meshIndexMap.get(n)];
                                    break;
                                case s.uS.MATERIAL:
                                    r = t.materials[e.materialIndexMap.get(n)];
                                    break;
                                case s.uS.TEXTURE:
                                    r = t.images[e.imageIndexMap.get(n)];
                                    break;
                                case s.uS.ANIMATION:
                                    r = t.animations[e.animationIndexMap.get(n)];
                                    break;
                                default:
                                    r = null, this.document.getLogger().warn(`[${Zt}]: Unsupported parent property, "${n.propertyType}"`)
                            }
                            r && (r.extensions = r.extensions || {}, r.extensions[Zt] = {
                                packet: a.length - 1
                            })
                        }
                    }
                    return a.length > 0 && (t.extensions = t.extensions || {}, t.extensions[Zt] = {
                        packets: a
                    }), this
                }
            }
            $t.EXTENSION_NAME = Zt
        },
        48830: (e, t, a) => {
            "use strict";
            a.d(t, {
                LV: () => O,
                VJ: () => Re,
                xH: () => Me,
                v_: () => Je,
                Qs: () => q,
                sr: () => ut,
                og: () => At,
                uC: () => be
            });
            var s = a(69584),
                r = a(62861);
            a(38897);
            var n = a(84362);

            function i() {
                return i = Object.assign ? Object.assign.bind() : function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            const {
                POINTS: o,
                LINES: c,
                LINE_STRIP: b,
                LINE_LOOP: d,
                TRIANGLES: f,
                TRIANGLE_STRIP: h,
                TRIANGLE_FAN: u
            } = s.WV.Mode;

            function l(e, t) {
                return Object.defineProperty(t, "name", {
                    value: e
                }), t
            }

            function g(e, t) {
                const a = i({}, e);
                for (const e in t) void 0 !== t[e] && (a[e] = t[e]);
                return a
            }

            function p(e) {
                const t = e.getIndices(),
                    a = e.getAttribute("POSITION");
                switch (e.getMode()) {
                    case s.WV.Mode.POINTS:
                        return t ? t.getCount() : a.getCount();
                    case s.WV.Mode.LINES:
                        return t ? t.getCount() / 2 : a.getCount() / 2;
                    case s.WV.Mode.LINE_LOOP:
                        return t ? t.getCount() : a.getCount();
                    case s.WV.Mode.LINE_STRIP:
                        return t ? t.getCount() - 1 : a.getCount() - 1;
                    case s.WV.Mode.TRIANGLES:
                        return t ? t.getCount() / 3 : a.getCount() / 3;
                    case s.WV.Mode.TRIANGLE_STRIP:
                    case s.WV.Mode.TRIANGLE_FAN:
                        return t ? t.getCount() - 2 : a.getCount() - 2;
                    default:
                        throw new Error("Unexpected mode: " + e.getMode())
                }
            }

            function m(e) {
                return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
            }

            function y(e, t) {
                return `${m(e)} → ${m(t)} (${function(e,t,a=2){return(e>t?"–":"+")+(Math.abs(e-t)/e*100).toFixed(a)+"%"}(e,t)})`
            }

            function x(e) {
                const t = [];
                for (const a of e.listAttributes()) t.push(a);
                for (const a of e.listTargets())
                    for (const e of a.listAttributes()) t.push(e);
                return Array.from(new Set(t))
            }

            function T(e, t, a) {
                e.swap(t, a);
                for (const s of e.listTargets()) s.swap(t, a)
            }

            function E(e, t) {
                if (null == e && null == t) return !0;
                if (null == e || null == t) return !1;
                if (e.length !== t.length) return !1;
                for (let a = 0; a < e.length; a++)
                    if (e[a] !== t[a]) return !1;
                return !0
            }

            function j(e, t) {
                return e.createAccessor(t.getName()).setArray(t.getArray()).setType(t.getType()).setBuffer(t.getBuffer()).setNormalized(t.getNormalized()).setSparse(t.getSparse())
            }

            function w(e, t = e) {
                const a = A(e, t);
                for (let e = 0; e < a.length; e++) a[e] = e;
                return a
            }

            function A(e, t = e) {
                return t <= 65534 ? new Uint16Array(e) : new Uint32Array(e)
            }

            function I(e) {
                for (const t in e) return !1;
                return !0
            }

            function N(e) {
                const t = s.BB.fromGraph(e.getGraph()),
                    a = e.getMaterial();
                return `${t.getRoot().listMaterials().indexOf(a)}|${k[e.getMode()]}|${!!e.getIndices()}|${e.listSemantics().sort().map((t=>{const a=e.getAttribute(t);return`${t}:${a.getElementSize()}:${a.getComponentType()}`})).join("+")}|${e.listTargets().map((t=>t.listSemantics().sort().map((t=>{const a=e.getAttribute(t);return`${t}:${a.getElementSize()}:${a.getComponentType()}`})).join("+"))).join("~")}`
            }
            const k = {
                [o]: o,
                [c]: c,
                [b]: c,
                [d]: c,
                [f]: f,
                [h]: f,
                [u]: f
            };

            function v(e) {
                const t = function(e) {
                        const t = new Set;
                        let a, r = e;
                        for (; a = r.getParentNode();) {
                            if (t.has(a)) throw new Error("Circular dependency in scene graph.");
                            t.add(a), r = a
                        }
                        return r.listParents().filter((e => e instanceof s.xs))
                    }(e),
                    a = e.getParentNode();
                if (!a) return e;
                e.setMatrix(e.getWorldMatrix()), a.removeChild(e);
                for (const a of t) a.addChild(e);
                return e
            }
            var R = "undefined" != typeof Float32Array ? Float32Array : Array;

            function S(e, t, a) {
                var s = t[0],
                    r = t[1],
                    n = t[2],
                    i = t[3],
                    o = t[4],
                    c = t[5],
                    b = t[6],
                    d = t[7],
                    f = t[8],
                    h = t[9],
                    u = t[10],
                    l = t[11],
                    g = t[12],
                    p = t[13],
                    m = t[14],
                    y = t[15],
                    x = a[0],
                    T = a[1],
                    E = a[2],
                    j = a[3];
                return e[0] = x * s + T * o + E * f + j * g, e[1] = x * r + T * c + E * h + j * p, e[2] = x * n + T * b + E * u + j * m, e[3] = x * i + T * d + E * l + j * y, x = a[4], T = a[5], E = a[6], j = a[7], e[4] = x * s + T * o + E * f + j * g, e[5] = x * r + T * c + E * h + j * p, e[6] = x * n + T * b + E * u + j * m, e[7] = x * i + T * d + E * l + j * y, x = a[8], T = a[9], E = a[10], j = a[11], e[8] = x * s + T * o + E * f + j * g, e[9] = x * r + T * c + E * h + j * p, e[10] = x * n + T * b + E * u + j * m, e[11] = x * i + T * d + E * l + j * y, x = a[12], T = a[13], E = a[14], j = a[15], e[12] = x * s + T * o + E * f + j * g, e[13] = x * r + T * c + E * h + j * p, e[14] = x * n + T * b + E * u + j * m, e[15] = x * i + T * d + E * l + j * y, e
            }

            function M() {
                var e = new R(3);
                return R != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0), e
            }

            function _(e, t) {
                var a = t[0],
                    s = t[1],
                    r = t[2],
                    n = a * a + s * s + r * r;
                return n > 0 && (n = 1 / Math.sqrt(n)), e[0] = t[0] * n, e[1] = t[1] * n, e[2] = t[2] * n, e
            }

            function C(e, t, a) {
                var s = t[0],
                    r = t[1],
                    n = t[2];
                return e[0] = s * a[0] + r * a[3] + n * a[6], e[1] = s * a[1] + r * a[4] + n * a[7], e[2] = s * a[2] + r * a[5] + n * a[8], e
            }
            Math.hypot || (Math.hypot = function() {
                for (var e = 0, t = arguments.length; t--;) e += arguments[t] * arguments[t];
                return Math.sqrt(e)
            });
            M();
            const D = {
                keepUniqueNames: !1,
                propertyTypes: [s.uS.ACCESSOR, s.uS.MESH, s.uS.TEXTURE, s.uS.MATERIAL, s.uS.SKIN]
            };

            function O(e = D) {
                const t = g(D, e),
                    a = new Set(t.propertyTypes);
                for (const e of t.propertyTypes)
                    if (!D.propertyTypes.includes(e)) throw new Error(`dedup: Unsupported deduplication on type "${e}".`);
                return l("dedup", (e => {
                    const r = e.getLogger();
                    a.has(s.uS.ACCESSOR) && function(e) {
                        const t = e.getLogger(),
                            a = new Map,
                            r = new Map,
                            n = new Map,
                            i = new Map,
                            o = e.getRoot().listMeshes();
                        o.forEach((e => {
                            e.listPrimitives().forEach((e => {
                                e.listAttributes().forEach((e => c(e, r))), c(e.getIndices(), a)
                            }))
                        }));
                        for (const t of e.getRoot().listAnimations())
                            for (const e of t.listSamplers()) c(e.getInput(), n), c(e.getOutput(), i);

                        function c(e, t) {
                            if (!e) return;
                            const a = [e.getCount(), e.getType(), e.getComponentType(), e.getNormalized(), e.getSparse()].join(":");
                            let s = t.get(a);
                            s || t.set(a, s = new Set), s.add(e)
                        }

                        function b(e, t) {
                            for (let a = 0; a < e.length; a++) {
                                const r = e[a],
                                    n = s.oY.toView(r.getArray());
                                if (!t.has(r))
                                    for (let i = a + 1; i < e.length; i++) {
                                        const a = e[i];
                                        t.has(a) || s.oY.equals(n, s.oY.toView(a.getArray())) && t.set(a, r)
                                    }
                            }
                        }
                        let d = 0;
                        const f = new Map;
                        for (const e of [r, a, n, i])
                            for (const t of e.values()) d += t.size, b(Array.from(t), f);
                        t.debug(`dedup: Merged ${f.size} of ${d} accessors.`), o.forEach((e => {
                            e.listPrimitives().forEach((e => {
                                e.listAttributes().forEach((t => {
                                    f.has(t) && e.swap(t, f.get(t))
                                }));
                                const t = e.getIndices();
                                t && f.has(t) && e.swap(t, f.get(t))
                            }))
                        }));
                        for (const t of e.getRoot().listAnimations())
                            for (const e of t.listSamplers()) {
                                const t = e.getInput(),
                                    a = e.getOutput();
                                t && f.has(t) && e.swap(t, f.get(t)), a && f.has(a) && e.swap(a, f.get(a))
                            }
                        Array.from(f.keys()).forEach((e => e.dispose()))
                    }(e), a.has(s.uS.TEXTURE) && function(e, t) {
                        const a = e.getLogger(),
                            r = e.getRoot(),
                            n = r.listTextures(),
                            i = new Map;
                        for (let e = 0; e < n.length; e++) {
                            const a = n[e],
                                r = a.getImage();
                            if (!i.has(a))
                                for (let o = e + 1; o < n.length; o++) {
                                    const e = n[o],
                                        c = e.getImage();
                                    if (i.has(e)) continue;
                                    if (a.getMimeType() !== e.getMimeType()) continue;
                                    if (t.keepUniqueNames && a.getName() !== e.getName()) continue;
                                    const b = a.getSize(),
                                        d = e.getSize();
                                    b && d && b[0] === d[0] && b[1] === d[1] && r && c && s.oY.equals(r, c) && i.set(e, a)
                                }
                        }
                        a.debug(`dedup: Merged ${i.size} of ${r.listTextures().length} textures.`), Array.from(i.entries()).forEach((([e, t]) => {
                            e.listParents().forEach((a => {
                                a instanceof s.fC || a.swap(e, t)
                            })), e.dispose()
                        }))
                    }(e, t), a.has(s.uS.MATERIAL) && function(e, t) {
                        const a = e.getLogger(),
                            r = e.getRoot().listMaterials(),
                            n = new Map,
                            i = new Map,
                            o = new Set;
                        t.keepUniqueNames || o.add("name");
                        for (let e = 0; e < r.length; e++) {
                            const t = r[e];
                            if (!n.has(t) && !U(t, i))
                                for (let a = e + 1; a < r.length; a++) {
                                    const e = r[a];
                                    n.has(e) || U(e, i) || t.equals(e, o) && n.set(e, t)
                                }
                        }
                        a.debug(`dedup: Merged ${n.size} of ${r.length} materials.`), Array.from(n.entries()).forEach((([e, t]) => {
                            e.listParents().forEach((a => {
                                a instanceof s.fC || a.swap(e, t)
                            })), e.dispose()
                        }))
                    }(e, t), a.has(s.uS.MESH) && function(e, t) {
                        const a = e.getLogger(),
                            r = e.getRoot(),
                            n = new Map;
                        r.listAccessors().forEach(((e, t) => n.set(e, t))), r.listMaterials().forEach(((e, t) => n.set(e, t)));
                        const i = r.listMeshes().length,
                            o = new Map;
                        for (const e of r.listMeshes()) {
                            const a = [];
                            for (const t of e.listPrimitives()) a.push(F(t, n));
                            let r = "";
                            if (t.keepUniqueNames && (r += e.getName() + ";"), r += a.join(";"), o.has(r)) {
                                const t = o.get(r);
                                e.listParents().forEach((a => {
                                    a.propertyType !== s.uS.ROOT && a.swap(e, t)
                                })), e.dispose()
                            } else o.set(r, e)
                        }
                        a.debug(`dedup: Merged ${i-o.size} of ${i} meshes.`)
                    }(e, t), a.has(s.uS.SKIN) && function(e, t) {
                        const a = e.getLogger(),
                            r = e.getRoot().listSkins(),
                            n = new Map,
                            i = new Set(["joints"]);
                        t.keepUniqueNames || i.add("name");
                        for (let e = 0; e < r.length; e++) {
                            const t = r[e];
                            if (!n.has(t))
                                for (let a = e + 1; a < r.length; a++) {
                                    const e = r[a];
                                    n.has(e) || t.equals(e, i) && E(t.listJoints(), e.listJoints()) && n.set(e, t)
                                }
                        }
                        a.debug(`dedup: Merged ${n.size} of ${r.length} skins.`), Array.from(n.entries()).forEach((([e, t]) => {
                            e.listParents().forEach((a => {
                                a instanceof s.fC || a.swap(e, t)
                            })), e.dispose()
                        }))
                    }(e, t), r.debug("dedup: Complete.")
                }))
            }

            function F(e, t) {
                const a = [];
                for (const s of e.listSemantics()) {
                    const r = e.getAttribute(s);
                    a.push(s + ":" + t.get(r))
                }
                if (e instanceof s.WV) {
                    const s = e.getIndices();
                    s && a.push("indices:" + t.get(s));
                    const r = e.getMaterial();
                    r && a.push("material:" + t.get(r)), a.push("mode:" + e.getMode());
                    for (const s of e.listTargets()) a.push("target:" + F(s, t))
                }
                return a.join(",")
            }

            function U(e, t) {
                if (t.has(e)) return t.get(e);
                const a = e.getGraph(),
                    s = new Set,
                    r = a.listParentEdges(e);
                for (; r.length > 0;) {
                    const n = r.pop();
                    if (!0 === n.getAttributes().modifyChild) return t.set(e, !0), !0;
                    const i = n.getChild();
                    if (!s.has(i))
                        for (const e of a.listChildEdges(i)) r.push(e)
                }
                return t.set(e, !1), !1
            }

            function P() {
                var e = new R(4);
                return R != Float32Array && (e[0] = 0, e[1] = 0, e[2] = 0, e[3] = 0), e
            }
            var L = function(e, t, a) {
                    return e[0] = t[0] - a[0], e[1] = t[1] - a[1], e[2] = t[2] - a[2], e[3] = t[3] - a[3], e
                },
                B = function(e) {
                    var t = e[0],
                        a = e[1],
                        s = e[2],
                        r = e[3];
                    return Math.hypot(t, a, s, r)
                };
            P();
            const G = /color|emissive|diffuse/i;
            const z = 3 / 255,
                V = {
                    propertyTypes: [s.uS.NODE, s.uS.SKIN, s.uS.MESH, s.uS.CAMERA, s.uS.PRIMITIVE, s.uS.PRIMITIVE_TARGET, s.uS.ANIMATION, s.uS.MATERIAL, s.uS.TEXTURE, s.uS.ACCESSOR, s.uS.BUFFER],
                    keepLeaves: !1,
                    keepAttributes: !1,
                    keepIndices: !1,
                    keepSolidTextures: !1,
                    keepExtras: !1
                };

            function q(e = V) {
                const t = g(V, e),
                    a = new Set(t.propertyTypes),
                    n = t.keepExtras;
                return l("prune", (async e => {
                    const i = e.getLogger(),
                        o = e.getRoot(),
                        c = e.getGraph(),
                        b = new K,
                        d = e => b.dispose(e.target);
                    if (c.addEventListener("node:dispose", d), a.has(s.uS.MESH))
                        for (const e of o.listMeshes()) e.listPrimitives().length > 0 || e.dispose();
                    if (a.has(s.uS.NODE)) {
                        if (!t.keepLeaves)
                            for (const e of o.listScenes()) J(c, e, n);
                        for (const e of o.listNodes()) H(e, n)
                    }
                    if (a.has(s.uS.SKIN))
                        for (const e of o.listSkins()) H(e, n);
                    if (a.has(s.uS.MESH))
                        for (const e of o.listMeshes()) H(e, n);
                    if (a.has(s.uS.CAMERA))
                        for (const e of o.listCameras()) H(e, n);
                    if (a.has(s.uS.PRIMITIVE) && W(c, s.uS.PRIMITIVE, n), a.has(s.uS.PRIMITIVE_TARGET) && W(c, s.uS.PRIMITIVE_TARGET, n), !t.keepAttributes && a.has(s.uS.ACCESSOR)) {
                        const t = new Map;
                        for (const a of o.listMeshes())
                            for (const s of a.listPrimitives()) {
                                const a = s.getMaterial();
                                if (!a) continue;
                                const r = X(s, Z(e, s, a));
                                Q(s, r), s.listTargets().forEach((e => Q(e, r))), t.has(a) ? t.get(a).add(s) : t.set(a, new Set([s]))
                            }
                        for (const [e, a] of t) $(e, Array.from(a))
                    }
                    if (!t.keepIndices && a.has(s.uS.ACCESSOR))
                        for (const e of o.listMeshes())
                            for (const t of e.listPrimitives()) Y(t);
                    if (a.has(s.uS.ANIMATION))
                        for (const e of o.listAnimations()) {
                            for (const t of e.listChannels()) t.getTargetNode() || t.dispose();
                            if (e.listChannels().length) e.listSamplers().forEach((e => H(e, n)));
                            else {
                                const t = e.listSamplers();
                                H(e, n), t.forEach((e => H(e, n)))
                            }
                        }
                    if (a.has(s.uS.MATERIAL) && o.listMaterials().forEach((e => H(e, n))), a.has(s.uS.TEXTURE) && (o.listTextures().forEach((e => H(e, n))), t.keepSolidTextures || await async function(e) {
                            const t = e.getRoot(),
                                a = e.getGraph(),
                                n = e.getLogger(),
                                i = t.listTextures().map((async e => {
                                    var i;
                                    const o = await async function(e) {
                                        const t = await async function(e) {
                                            try {
                                                return await async function(e, t) {
                                                    return function(e, t) {
                                                        if (!(e instanceof Uint8Array)) throw new Error("[ndarray-pixels] Input must be Uint8Array or Buffer.");
                                                        const a = new Blob([e], {
                                                                type: t
                                                            }),
                                                            s = URL.createObjectURL(a);
                                                        return new Promise(((e, t) => {
                                                            const a = new Image;
                                                            a.crossOrigin = "anonymous", a.onload = function() {
                                                                URL.revokeObjectURL(s);
                                                                const t = new OffscreenCanvas(a.width, a.height).getContext("2d");
                                                                t.drawImage(a, 0, 0);
                                                                const n = t.getImageData(0, 0, a.width, a.height);
                                                                e(r(new Uint8Array(n.data), [a.width, a.height, 4], [4, 4 * a.width, 1], 0))
                                                            }, a.onerror = e => {
                                                                URL.revokeObjectURL(s), t(e)
                                                            }, a.src = s
                                                        }))
                                                    }(e, t)
                                                }(e.getImage(), e.getMimeType())
                                            } catch (e) {
                                                return null
                                            }
                                        }(e);
                                        if (!t) return null;
                                        const a = [1 / 0, 1 / 0, 1 / 0, 1 / 0],
                                            s = [-1 / 0, -1 / 0, -1 / 0, -1 / 0],
                                            n = [0, 0, 0, 0],
                                            [i, o] = t.shape;
                                        for (let e = 0; e < i; e++) {
                                            for (let r = 0; r < o; r++)
                                                for (let n = 0; n < 4; n++) a[n] = Math.min(a[n], t.get(e, r, n)), s[n] = Math.max(s[n], t.get(e, r, n));
                                            if (B(L(n, s, a)) / 255 > z) return null
                                        }
                                        return function(e, t, a) {
                                            return e[0] = t[0] * a, e[1] = t[1] * a, e[2] = t[2] * a, e[3] = t[3] * a, e
                                        }(n, (d = a, (c = n)[0] = (b = s)[0] + d[0], c[1] = b[1] + d[1], c[2] = b[2] + d[2], c[3] = b[3] + d[3], c), .5 / 255);
                                        var c, b, d
                                    }(e);
                                    if (!o) return;
                                    "srgb" === function(e) {
                                        return e.getGraph().listParentEdges(e).some((e => e.getAttributes().isColor || G.test(e.getName()))) ? "srgb" : null
                                    }(e) && s.i5.convertSRGBToLinear(o, o);
                                    const c = e.getName() || e.getURI(),
                                        b = null == (i = e.getSize()) ? void 0 : i.join("x"),
                                        d = function(e) {
                                            const t = s.BB.fromGraph(e.getGraph()).getRoot(),
                                                a = e.getGraph().listParentEdges(e).filter((e => e.getParent() !== t)).map((e => e.getName()));
                                            return Array.from(new Set(a))
                                        }(e);
                                    for (const s of a.listParentEdges(e)) {
                                        const e = s.getParent();
                                        e !== t && ee(e, o, s.getName(), n) && s.dispose()
                                    }
                                    1 === e.listParents().length && (e.dispose(), n.debug(`prune: Removed solid-color texture "${c}" (${b}px ${d.join(", ")})`))
                                }));
                            await Promise.all(i)
                        }(e)), a.has(s.uS.ACCESSOR) && o.listAccessors().forEach((e => H(e, n))), a.has(s.uS.BUFFER) && o.listBuffers().forEach((e => H(e, n))), c.removeEventListener("node:dispose", d), b.empty()) i.info("prune: No unused properties found.");
                    else {
                        const e = b.entries().map((([e, t]) => `${e} (${t})`)).join(", ");
                        i.info(`prune: Removed types... ${e}`)
                    }
                    i.debug("prune: Complete.")
                }))
            }
            class K {
                constructor() {
                    this.disposed = {}
                }
                empty() {
                    for (const e in this.disposed) return !1;
                    return !0
                }
                entries() {
                    return Object.entries(this.disposed)
                }
                dispose(e) {
                    this.disposed[e.propertyType] = this.disposed[e.propertyType] || 0, this.disposed[e.propertyType]++
                }
            }

            function H(e, t) {
                const a = e.listParents().filter((e => !(e instanceof s.fC || e instanceof s.Zt))),
                    r = t && !I(e.getExtras());
                a.length || r || e.dispose()
            }

            function W(e, t, a) {
                for (const s of e.listEdges()) {
                    const e = s.getParent();
                    e.propertyType === t && H(e, a)
                }
            }

            function J(e, t, a) {
                if (t.listChildren().forEach((t => J(e, t, a))), t instanceof s.xs) return;
                const r = e.listParentEdges(t).some((e => {
                        const t = e.getParent().propertyType;
                        return t !== s.uS.ROOT && t !== s.uS.SCENE && t !== s.uS.NODE
                    })),
                    n = 0 === e.listChildren(t).length,
                    i = a && !I(t.getExtras());
                !n || r || i || t.dispose()
            }

            function Q(e, t) {
                for (const a of t) e.setAttribute(a, null)
            }

            function Y(e) {
                const t = e.getIndices(),
                    a = t && t.getArray(),
                    s = e.listAttributes()[0];
                if (a && s && t.getCount() === s.getCount()) {
                    for (let e = 0, t = a.length; e < t; e++)
                        if (e !== a[e]) return;
                    e.setIndices(null)
                }
            }

            function X(e, t) {
                const a = [];
                for (const s of e.listSemantics())("NORMAL" === s && !t.has(s) || "TANGENT" === s && !t.has(s) || s.startsWith("TEXCOORD_") && !t.has(s) || s.startsWith("COLOR_") && "COLOR_0" !== s) && a.push(s);
                return a
            }

            function Z(e, t, a, r = new Set) {
                const n = e.getGraph().listChildEdges(a),
                    i = new Set;
                for (const e of n) e.getChild() instanceof s.xE && i.add(e.getName());
                for (const a of n) {
                    const n = a.getName(),
                        o = a.getChild();
                    o instanceof s.lO && i.has(n.replace(/Info$/, "")) && r.add(`TEXCOORD_${o.getTexCoord()}`), o instanceof s.xE && n.match(/normalTexture/i) && r.add("TANGENT"), o instanceof s.eY && Z(e, t, o, r)
                }
                const o = a instanceof s.F5 && !a.getExtension("KHR_materials_unlit"),
                    c = t.getMode() === s.WV.Mode.POINTS;
                return o && !c && r.add("NORMAL"), r
            }

            function $(e, t) {
                const a = function(e) {
                        const t = e.getGraph(),
                            a = new Set,
                            r = new Set;
                        return function e(n) {
                            const i = new Set;
                            for (const e of t.listChildEdges(n)) e.getChild() instanceof s.xE && i.add(e.getName() + "Info");
                            for (const o of t.listChildEdges(n)) {
                                const t = o.getChild();
                                a.has(t) || (a.add(t), t instanceof s.lO && i.has(o.getName()) ? r.add(t) : t instanceof s.eY && e(t))
                            }
                        }(e), Array.from(r)
                    }(e),
                    r = new Set(a.map((e => e.getTexCoord()))),
                    n = Array.from(r).sort(),
                    i = new Map(n.map(((e, t) => [e, t]))),
                    o = new Map(n.map(((e, t) => [`TEXCOORD_${e}`, `TEXCOORD_${t}`])));
                for (const e of a) {
                    const t = e.getTexCoord();
                    e.setTexCoord(i.get(t))
                }
                for (const e of t) {
                    const t = e.listSemantics().filter((e => e.startsWith("TEXCOORD_"))).sort();
                    c(e, t), e.listTargets().forEach((e => c(e, t)))
                }

                function c(e, t) {
                    for (const a of t) {
                        const t = e.getAttribute(a);
                        if (!t) continue;
                        const s = o.get(a);
                        s !== a && (e.setAttribute(s, t), e.setAttribute(a, null))
                    }
                }
            }

            function ee(e, t, a, r) {
                if (e instanceof s.F5) switch (a) {
                    case "baseColorTexture":
                        return e.setBaseColorFactor((n = t, i = t, o = e.getBaseColorFactor(), n[0] = i[0] * o[0], n[1] = i[1] * o[1], n[2] = i[2] * o[2], n[3] = i[3] * o[3], n)), !0;
                    case "emissiveTexture":
                        return e.setEmissiveFactor(function(e, t, a) {
                            return e[0] = t[0] * a[0], e[1] = t[1] * a[1], e[2] = t[2] * a[2], e
                        }([0, 0, 0], t.slice(0, 3), e.getEmissiveFactor())), !0;
                    case "occlusionTexture":
                        return Math.abs(t[0] - 1) <= z;
                    case "metallicRoughnessTexture":
                        return e.setRoughnessFactor(t[1] * e.getRoughnessFactor()), e.setMetallicFactor(t[2] * e.getMetallicFactor()), !0;
                    case "normalTexture":
                        return B(L(P(), t, [.5, .5, 1, 1])) <= z
                }
                var n, i, o;
                return r.warn(`prune: Detected single-color ${a} texture. Pruning ${a} not yet supported.`), !1
            }
            const te = 2 ** 32 - 1;
            class ae {
                constructor(e) {
                    this.attributes = [], this.u8 = void 0, this.u32 = void 0;
                    let t = 0;
                    for (const a of x(e)) t += this._initAttribute(a);
                    this.u8 = new Uint8Array(t), this.u32 = new Uint32Array(this.u8.buffer)
                }
                _initAttribute(e) {
                    const t = e.getArray(),
                        a = new Uint8Array(t.buffer, t.byteOffset, t.byteLength),
                        r = e.getElementSize() * e.getComponentSize(),
                        n = s.oY.padNumber(r);
                    return this.attributes.push({
                        u8: a,
                        byteStride: r,
                        paddedByteStride: n
                    }), n
                }
                hash(e) {
                    let t = 0;
                    for (const {
                            u8: a,
                            byteStride: s,
                            paddedByteStride: r
                        }
                        of this.attributes) {
                        for (let n = 0; n < r; n++) this.u8[t + n] = n < s ? a[e * s + n] : 0;
                        t += r
                    }
                    return function(e, t) {
                        const a = 1540483477;
                        for (let s = 0, r = t.length; s < r; s++) {
                            let r = t[s];
                            r = Math.imul(r, a) >>> 0, r = (r ^ r >> 24) >>> 0, r = Math.imul(r, a) >>> 0, e = ((e = Math.imul(e, a) >>> 0) ^ r) >>> 0
                        }
                        return e
                    }(0, this.u32)
                }
                equal(e, t) {
                    for (const {
                            u8: a,
                            byteStride: s
                        }
                        of this.attributes)
                        for (let r = 0; r < s; r++)
                            if (a[e * s + r] !== a[t * s + r]) return !1;
                    return !0
                }
            }

            function se(e, t, a, s, r = 4294967295) {
                const n = t - 1;
                let i = a.hash(s) & n;
                for (let t = 0; t <= n; t++) {
                    const o = e[i];
                    if (o === r || a.equal(o, s)) return i;
                    i = i + t + 1 & n
                }
                throw new Error("Hash table full.")
            }
            var re;

            function ne(e, t) {
                const a = e.getAttribute("POSITION"),
                    s = e.getIndices();
                switch (t) {
                    case re.RENDER:
                        return s ? s.getCount() : a.getCount();
                    case re.RENDER_CACHED:
                        return s ? new Set(s.getArray()).size : a.getCount();
                    case re.UPLOAD_NAIVE:
                    case re.UPLOAD:
                        return a.getCount();
                    case re.DISTINCT:
                    case re.DISTINCT_POSITION:
                        return function(e) {
                            throw new Error(`Not implemented: ${e}`)
                        }(t);
                    case re.UNUSED:
                        return s ? a.getCount() - new Set(s.getArray()).size : 0;
                    default:
                        return function(e) {
                            throw new Error(`Unexpected value: ${e}`)
                        }(t)
                }
            }

            function ie(e, t, a) {
                const r = s.BB.fromGraph(e.getGraph());
                t && a || ([t, a] = function(e) {
                    const t = ne(e, re.UPLOAD),
                        a = e.getIndices(),
                        s = a ? a.getArray() : null;
                    if (!a || !s) return [w(t, 1e6), t];
                    const r = new Uint32Array(t).fill(te);
                    let n = 0;
                    for (let e = 0; e < s.length; e++) {
                        const t = s[e];
                        r[t] === te && (r[t] = n++)
                    }
                    return [r, n]
                }(e));
                const n = e.getIndices(),
                    i = n ? n.getArray() : null,
                    o = ne(e, re.RENDER),
                    c = r.createAccessor(),
                    b = o,
                    d = A(b, a);
                for (let e = 0; e < b; e++) d[e] = t[i ? i[e] : e];
                e.setIndices(c.setArray(d));
                const f = x(e);
                for (const s of e.listAttributes()) {
                    const i = j(r, s);
                    oe(s, n, t, i, a), e.swap(s, i)
                }
                for (const s of e.listTargets())
                    for (const e of s.listAttributes()) {
                        const i = j(r, e);
                        oe(e, n, t, i, a), s.swap(e, i)
                    }
                n && 1 === n.listParents().length && n.dispose();
                for (const e of f) 1 === e.listParents().length && e.dispose();
                return e
            }

            function oe(e, t, a, s, r) {
                const n = e.getElementSize(),
                    i = e.getArray(),
                    o = t ? t.getArray() : null,
                    c = t ? t.getCount() : e.getCount(),
                    b = new i.constructor(r * n),
                    d = new Uint8Array(r);
                for (let e = 0; e < c; e++) {
                    const t = o ? o[e] : e,
                        s = a[t];
                    if (!d[s]) {
                        for (let e = 0; e < n; e++) b[s * n + e] = i[t * n + e];
                        d[s] = 1
                    }
                }
                return s.setArray(b)
            }! function(e) {
                e.RENDER = "render", e.RENDER_CACHED = "render-cached", e.UPLOAD = "upload", e.UPLOAD_NAIVE = "upload-naive", e.DISTINCT = "distinct", e.DISTINCT_POSITION = "distinct-position", e.UNUSED = "unused"
            }(re || (re = {}));
            const ce = {
                overwrite: !0,
                cleanup: !0
            };

            function be(e = ce) {
                const t = g(ce, e);
                return l("weld", (async e => {
                    const a = e.getLogger();
                    for (const a of e.getRoot().listMeshes()) {
                        for (const e of a.listPrimitives()) de(e, t), 0 === ne(e, re.RENDER) && e.dispose();
                        0 === a.listPrimitives().length && a.dispose()
                    }
                    t.cleanup && await e.transform(q({
                        propertyTypes: [s.uS.ACCESSOR, s.uS.NODE],
                        keepAttributes: !0,
                        keepIndices: !0,
                        keepLeaves: !1
                    }), O({
                        propertyTypes: [s.uS.ACCESSOR]
                    })), a.debug("weld: Complete.")
                }))
            }

            function de(e, t = ce) {
                const a = e.getGraph(),
                    r = s.BB.fromGraph(a).getLogger(),
                    n = i({}, ce, t);
                if (e.getIndices() && !n.overwrite) return;
                if (e.getMode() === s.WV.Mode.POINTS) return;
                const o = e.getAttribute("POSITION").getCount(),
                    c = e.getIndices(),
                    b = null == c ? void 0 : c.getArray(),
                    d = c ? c.getCount() : o,
                    f = new ae(e),
                    h = (g = o + o / 4, Math.pow(2, Math.ceil(Math.log(g) / Math.LN2))),
                    u = new Uint32Array(h).fill(te),
                    l = new Uint32Array(o).fill(te);
                var g;
                let p = 0;
                for (let e = 0; e < d; e++) {
                    const t = b ? b[e] : e;
                    if (l[t] !== te) continue;
                    const a = se(u, h, f, t, te),
                        s = u[a];
                    s === te ? (u[a] = t, l[t] = p++) : l[t] = l[s]
                }
                r.debug(`weld: ${y(o,p)} vertices.`), ie(e, l, p)
            }
            const {
                FLOAT: fe
            } = s.U_.ComponentType;

            function he(e, t) {
                const a = e.getAttribute("POSITION");
                a && ue(t, a);
                const r = e.getAttribute("NORMAL");
                r && le(t, r);
                const n = e.getAttribute("TANGENT");
                n && ge(t, n);
                for (const a of e.listTargets()) {
                    const e = a.getAttribute("POSITION");
                    e && ue(t, e);
                    const s = a.getAttribute("NORMAL");
                    s && le(t, s);
                    const r = a.getAttribute("TANGENT");
                    r && ge(t, r)
                }
                var i, o, c, b, d, f, h, u, l, g, p, m, y, x, T, E, j;
                o = (i = t)[0], c = i[1], b = i[2], d = i[3], f = i[4], h = i[5], u = i[6], l = i[7], g = i[8], p = i[9], m = i[10], y = i[11], x = i[12], T = i[13], E = i[14], (o * h - c * f) * (m * (j = i[15]) - y * E) - (o * u - b * f) * (p * j - y * T) + (o * l - d * f) * (p * E - m * T) + (c * u - b * h) * (g * j - y * x) - (c * l - d * h) * (g * E - m * x) + (b * l - d * u) * (g * T - p * x) < 0 && function(e) {
                    if (e.getMode() !== s.WV.Mode.TRIANGLES) return;
                    e.getIndices() || de(e);
                    const t = e.getIndices();
                    for (let e = 0, a = t.getCount(); e < a; e += 3) {
                        const a = t.getScalar(e),
                            s = t.getScalar(e + 2);
                        t.setScalar(e, s), t.setScalar(e + 2, a)
                    }
                }(e)
            }

            function ue(e, t) {
                const a = t.getComponentType(),
                    r = t.getNormalized(),
                    n = t.getArray(),
                    i = a === fe ? n : new Float32Array(n.length),
                    o = M();
                for (let g = 0, p = t.getCount(); g < p; g++) r ? (o[0] = s.M8.decodeNormalizedInt(n[3 * g], a), o[1] = s.M8.decodeNormalizedInt(n[3 * g + 1], a), o[2] = s.M8.decodeNormalizedInt(n[3 * g + 2], a)) : (o[0] = n[3 * g], o[1] = n[3 * g + 1], o[2] = n[3 * g + 2]), c = o, d = e, f = void 0, h = void 0, u = void 0, l = void 0, f = (b = o)[0], h = b[1], u = b[2], l = (l = d[3] * f + d[7] * h + d[11] * u + d[15]) || 1, c[0] = (d[0] * f + d[4] * h + d[8] * u + d[12]) / l, c[1] = (d[1] * f + d[5] * h + d[9] * u + d[13]) / l, c[2] = (d[2] * f + d[6] * h + d[10] * u + d[14]) / l, i[3 * g] = o[0], i[3 * g + 1] = o[1], i[3 * g + 2] = o[2];
                var c, b, d, f, h, u, l;
                t.setArray(i).setNormalized(!1)
            }

            function le(e, t) {
                const a = t.getArray(),
                    r = t.getNormalized(),
                    n = t.getComponentType(),
                    i = (o = new R(9), R != Float32Array && (o[1] = 0, o[2] = 0, o[3] = 0, o[5] = 0, o[6] = 0, o[7] = 0), o[0] = 1, o[4] = 1, o[8] = 1, o);
                var o;
                ! function(e, t) {
                    e[0] = t[0], e[1] = t[1], e[2] = t[2], e[3] = t[4], e[4] = t[5], e[5] = t[6], e[6] = t[8], e[7] = t[9], e[8] = t[10]
                }(i, e),
                function(e, t) {
                    var a = t[0],
                        s = t[1],
                        r = t[2],
                        n = t[3],
                        i = t[4],
                        o = t[5],
                        c = t[6],
                        b = t[7],
                        d = t[8],
                        f = d * i - o * b,
                        h = -d * n + o * c,
                        u = b * n - i * c,
                        l = a * f + s * h + r * u;
                    l && (l = 1 / l, e[0] = f * l, e[1] = (-d * s + r * b) * l, e[2] = (o * s - r * i) * l, e[3] = h * l, e[4] = (d * a - r * c) * l, e[5] = (-o * a + r * n) * l, e[6] = u * l, e[7] = (-b * a + s * c) * l, e[8] = (i * a - s * n) * l)
                }(i, i),
                function(e, t) {
                    if (e === t) {
                        var a = t[1],
                            s = t[2],
                            r = t[5];
                        e[1] = t[3], e[2] = t[6], e[3] = a, e[5] = t[7], e[6] = s, e[7] = r
                    } else e[0] = t[0], e[1] = t[3], e[2] = t[6], e[3] = t[1], e[4] = t[4], e[5] = t[7], e[6] = t[2], e[7] = t[5], e[8] = t[8]
                }(i, i);
                const c = M();
                for (let e = 0, o = t.getCount(); e < o; e++) r ? (c[0] = s.M8.decodeNormalizedInt(a[3 * e], n), c[1] = s.M8.decodeNormalizedInt(a[3 * e + 1], n), c[2] = s.M8.decodeNormalizedInt(a[3 * e + 2], n)) : (c[0] = a[3 * e], c[1] = a[3 * e + 1], c[2] = a[3 * e + 2]), C(c, c, i), _(c, c), r ? (a[3 * e] = s.M8.decodeNormalizedInt(c[0], n), a[3 * e + 1] = s.M8.decodeNormalizedInt(c[1], n), a[3 * e + 2] = s.M8.decodeNormalizedInt(c[2], n)) : (a[3 * e] = c[0], a[3 * e + 1] = c[1], a[3 * e + 2] = c[2])
            }

            function ge(e, t) {
                const a = t.getArray(),
                    r = t.getNormalized(),
                    n = t.getComponentType(),
                    i = M();
                for (let o = 0, c = t.getCount(); o < c; o++) r ? (i[0] = s.M8.decodeNormalizedInt(a[4 * o], n), i[1] = s.M8.decodeNormalizedInt(a[4 * o + 1], n), i[2] = s.M8.decodeNormalizedInt(a[4 * o + 2], n)) : (i[0] = a[4 * o], i[1] = a[4 * o + 1], i[2] = a[4 * o + 2]), i[0] = e[0] * i[0] + e[4] * i[1] + e[8] * i[2], i[1] = e[1] * i[0] + e[5] * i[1] + e[9] * i[2], i[2] = e[2] * i[0] + e[6] * i[1] + e[10] * i[2], _(i, i), r ? (a[4 * o] = s.M8.decodeNormalizedInt(i[0], n), a[4 * o + 1] = s.M8.decodeNormalizedInt(i[1], n), a[4 * o + 2] = s.M8.decodeNormalizedInt(i[2], n)) : (a[4 * o] = i[0], a[4 * o + 1] = i[1], a[4 * o + 2] = i[2])
            }
            const {
                LINES: pe,
                LINE_STRIP: me,
                LINE_LOOP: ye,
                TRIANGLES: xe,
                TRIANGLE_STRIP: Te,
                TRIANGLE_FAN: Ee
            } = s.WV.Mode;

            function je(e) {
                const t = e.getGraph(),
                    a = s.BB.fromGraph(t);
                e.getIndices() || de(e);
                const r = e.getIndices(),
                    n = r.getArray(),
                    i = p(e),
                    o = new(0, s.tn[r.getComponentType()])(2 * i),
                    c = e.getMode();
                if (c === me)
                    for (let e = 0; e < i; e++) o[2 * e] = n[e], o[2 * e + 1] = n[e + 1];
                else {
                    if (c !== ye) throw new Error("Only LINE_STRIP and LINE_LOOP may be converted to LINES.");
                    for (let e = 0; e < i; e++) e < i - 1 ? (o[2 * e] = n[e], o[2 * e + 1] = n[e + 1]) : (o[2 * e] = n[e], o[2 * e + 1] = n[0])
                }
                e.setMode(pe);
                const b = a.getRoot();
                r.listParents().some((t => t !== b && t !== e)) ? e.setIndices(j(a, r).setArray(o)) : r.setArray(o)
            }

            function we(e) {
                const t = e.getGraph(),
                    a = s.BB.fromGraph(t);
                e.getIndices() || de(e);
                const r = e.getIndices(),
                    n = r.getArray(),
                    i = p(e),
                    o = new(0, s.tn[r.getComponentType()])(3 * i),
                    c = e.getMode();
                if (c === Te)
                    for (let e = 0, t = n.length; e < t - 2; e++) e % 2 ? (o[3 * e] = n[e + 1], o[3 * e + 1] = n[e], o[3 * e + 2] = n[e + 2]) : (o[3 * e] = n[e], o[3 * e + 1] = n[e + 1], o[3 * e + 2] = n[e + 2]);
                else {
                    if (c !== Ee) throw new Error("Only TRIANGLE_STRIP and TRIANGLE_FAN may be converted to TRIANGLES.");
                    for (let e = 0; e < i; e++) o[3 * e] = n[0], o[3 * e + 1] = n[e + 1], o[3 * e + 2] = n[e + 2]
                }
                e.setMode(xe);
                const b = a.getRoot();
                r.listParents().some((t => t !== b && t !== e)) ? e.setIndices(j(a, r).setArray(o)) : r.setArray(o)
            }

            function Ae(e) {
                const t = e.getArray();
                if (!t) return;
                const a = Ie(t, e.getComponentType(), e.getNormalized());
                e.setArray(a).setNormalized(!1)
            }

            function Ie(e, t, a) {
                const r = new Float32Array(e.length);
                for (let n = 0, i = e.length; n < i; n++) r[n] = a ? s.M8.decodeNormalizedInt(e[n], t) : e[n];
                return r
            }
            const {
                TEXTURE_INFO: Ne,
                ROOT: ke
            } = s.uS;
            new Set([Ne, ke]);
            const ve = {
                method: "edgebreaker",
                encodeSpeed: 5,
                decodeSpeed: 5,
                quantizePosition: 14,
                quantizeNormal: 10,
                quantizeColor: 8,
                quantizeTexcoord: 12,
                quantizeGeneric: 12,
                quantizationVolume: "mesh"
            };

            function Re(e = ve) {
                const t = g(ve, e);
                return l("draco", (async e => {
                    await e.transform(be()), e.createExtension(n.r7).setRequired(!0).setEncoderOptions({
                        method: "edgebreaker" === t.method ? n.r7.EncoderMethod.EDGEBREAKER : n.r7.EncoderMethod.SEQUENTIAL,
                        encodeSpeed: t.encodeSpeed,
                        decodeSpeed: t.decodeSpeed,
                        quantizationBits: {
                            POSITION: t.quantizePosition,
                            NORMAL: t.quantizeNormal,
                            COLOR: t.quantizeColor,
                            TEX_COORD: t.quantizeTexcoord,
                            GENERIC: t.quantizeGeneric
                        },
                        quantizationVolume: t.quantizationVolume
                    })
                }))
            }
            const Se = {
                cleanup: !0
            };

            function Me(e = Se) {
                const t = g(Se, e);
                return l("flatten", (async e => {
                    const a = e.getRoot(),
                        r = e.getLogger(),
                        n = new Set;
                    for (const e of a.listSkins())
                        for (const t of e.listJoints()) n.add(t);
                    const i = new Set;
                    for (const e of a.listAnimations())
                        for (const t of e.listChannels()) {
                            const e = t.getTargetNode();
                            e && "weights" !== t.getTargetPath() && i.add(e)
                        }
                    const o = new Set,
                        c = new Set;
                    for (const e of a.listScenes()) e.traverse((e => {
                        const t = e.getParentNode();
                        t && ((n.has(t) || o.has(t)) && o.add(e), (i.has(t) || c.has(t)) && c.add(e))
                    }));
                    for (const e of a.listScenes()) e.traverse((e => {
                        i.has(e) || o.has(e) || c.has(e) || v(e)
                    }));
                    i.size && r.debug("flatten: Flattening node hierarchies with TRS animation not yet supported."), t.cleanup && await e.transform(q({
                        propertyTypes: [s.uS.NODE],
                        keepLeaves: !1
                    })), r.debug("flatten: Complete.")
                }))
            }
            const _e = {
                    skipValidation: !1
                },
                Ce = 2 ** 32 - 1,
                {
                    LINE_STRIP: De,
                    LINE_LOOP: Oe,
                    TRIANGLE_STRIP: Fe,
                    TRIANGLE_FAN: Ue
                } = s.WV.Mode;

            function Pe(e, t = {}) {
                const a = g(_e, t),
                    r = e[0],
                    n = s.BB.fromGraph(r.getGraph());
                if (!a.skipValidation && new Set(e.map(N)).size > 1) throw new Error("Requires >=2 Primitives, sharing the same Material and Mode, with compatible vertex attributes and indices.");
                for (const t of e) switch (t.getMode()) {
                    case De:
                    case Oe:
                        je(t);
                        break;
                    case Fe:
                    case Ue:
                        we(t)
                }
                const i = [],
                    o = new Uint32Array(e.length);
                let c = 0,
                    b = 0;
                for (let t = 0; t < e.length; t++) {
                    const a = e[t],
                        s = a.getIndices(),
                        r = a.getAttribute("POSITION").getCount(),
                        n = s ? s.getArray() : null,
                        d = s ? s.getCount() : r,
                        f = new Uint32Array(r).fill(Ce);
                    for (let e = 0; e < d; e++) {
                        const a = n ? n[e] : e;
                        f[a] === Ce && (f[a] = c++, o[t]++)
                    }
                    i.push(f), b += d
                }
                const d = n.createPrimitive().setMode(r.getMode()).setMaterial(r.getMaterial());
                for (const e of r.listSemantics()) {
                    const t = r.getAttribute(e),
                        a = s.tn[t.getComponentType()],
                        i = j(n, t).setArray(new a(c * t.getElementSize()));
                    d.setAttribute(e, i)
                }
                const f = r.getIndices(),
                    h = f ? j(n, f).setArray(A(b, c)) : null;
                d.setIndices(h);
                let u = 0;
                for (let t = 0; t < i.length; t++) {
                    const a = e[t],
                        s = a.getIndices(),
                        r = s ? s.getCount() : -1,
                        n = i[t];
                    s && h && (Be(s, n, h, u), u += r);
                    for (const e of d.listSemantics()) Le(a.getAttribute(e), s, n, d.getAttribute(e))
                }
                return d
            }

            function Le(e, t, a, s) {
                const r = e.getElementSize(),
                    n = t ? t.getArray() : null,
                    i = e.getCount(),
                    o = e.getArray(),
                    c = s.getArray(),
                    b = new Uint8Array(e.getCount());
                for (let e = 0, s = t ? t.getCount() : i; e < s; e++) {
                    const t = n ? n[e] : e,
                        s = a[t];
                    if (!b[s]) {
                        for (let e = 0; e < r; e++) c[s * r + e] = o[t * r + e];
                        b[s] = 1
                    }
                }
            }

            function Be(e, t, a, s) {
                const r = e.getCount(),
                    n = e.getArray(),
                    i = a.getArray();
                for (let e = 0; e < r; e++) {
                    const a = t[n[e]];
                    i[s + e] = a
                }
            }
            const {
                ROOT: Ge,
                NODE: ze,
                MESH: Ve,
                PRIMITIVE: qe,
                ACCESSOR: Ke
            } = s.uS, He = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], We = {
                keepMeshes: !1,
                keepNamed: !1,
                cleanup: !0
            };

            function Je(e = We) {
                const t = g(We, e);
                return l("join", (async e => {
                    const a = e.getRoot(),
                        s = e.getLogger();
                    for (const s of a.listScenes()) Qe(e, s, t), s.traverse((a => Qe(e, a, t)));
                    t.cleanup && await e.transform(q({
                        propertyTypes: [ze, Ve, qe, Ke],
                        keepAttributes: !0,
                        keepIndices: !0,
                        keepLeaves: !1
                    })), s.debug("join: Complete.")
                }))
            }

            function Qe(e, t, a) {
                const r = e.getLogger(),
                    n = {},
                    i = t.listChildren();
                for (let e = 0; e < i.length; e++) {
                    const t = i[e];
                    if (t.listParents().some((e => e instanceof s.Zt))) continue;
                    const r = t.getMesh();
                    if (r && !t.getExtension("EXT_mesh_gpu_instancing") && !t.getSkin())
                        for (const s of r.listPrimitives()) {
                            if (s.listTargets().length > 0) continue;
                            const i = s.getMaterial();
                            if (i && i.getExtension("KHR_materials_volume")) continue;
                            ie(s), Xe(s);
                            let o = N(s);
                            const c = r.getName() || t.getName();
                            (a.keepMeshes || a.keepNamed && c) && (o += `|${e}`), o in n || (n[o] = {
                                prims: [],
                                primMeshes: [],
                                primNodes: [],
                                dstNode: t,
                                dstMesh: void 0
                            });
                            const b = n[o];
                            b.prims.push(s), b.primNodes.push(t)
                        }
                }
                const o = Object.values(n).filter((({
                        prims: e
                    }) => e.length > 1)),
                    c = new Set(o.flatMap((e => e.primNodes)));
                for (const e of c) {
                    const t = e.getMesh(),
                        a = t.listParents().some((t => t.propertyType !== Ge && e !== t));
                    a && e.setMesh(t.clone())
                }
                for (const e of o) {
                    const {
                        dstNode: t,
                        primNodes: a
                    } = e;
                    e.dstMesh = t.getMesh(), e.primMeshes = a.map((e => e.getMesh()))
                }
                for (const e of o) {
                    const {
                        prims: t,
                        primNodes: a,
                        primMeshes: n,
                        dstNode: i,
                        dstMesh: o
                    } = e, c = i.getMatrix();
                    for (let e = 0; e < t.length; e++) {
                        const r = a[e],
                            o = n[e];
                        let m = t[e];
                        o.removePrimitive(m), m.listParents().some((e => e.propertyType !== s.uS.ROOT)) && (m = t[e] = Ye(t[e])), r !== i && (S(He, (b = He, f = void 0, h = void 0, u = void 0, l = void 0, g = void 0, p = void 0, y = void 0, x = void 0, T = void 0, E = void 0, j = void 0, w = void 0, A = void 0, I = void 0, k = void 0, v = void 0, R = void 0, M = void 0, _ = void 0, C = void 0, D = void 0, O = void 0, F = void 0, U = void 0, P = void 0, L = void 0, B = void 0, G = void 0, z = void 0, f = (d = c)[0], h = d[1], u = d[2], l = d[3], g = d[4], p = d[5], y = d[6], x = d[7], T = d[8], E = d[9], j = d[10], w = d[11], A = d[12], I = d[13], k = d[14], v = d[15], (z = (R = f * p - h * g) * (G = j * v - w * k) - (M = f * y - u * g) * (B = E * v - w * I) + (_ = f * x - l * g) * (L = E * k - j * I) + (C = h * y - u * p) * (P = T * v - w * A) - (D = h * x - l * p) * (U = T * k - j * A) + (O = u * x - l * y) * (F = T * I - E * A)) ? (z = 1 / z, b[0] = (p * G - y * B + x * L) * z, b[1] = (u * B - h * G - l * L) * z, b[2] = (I * O - k * D + v * C) * z, b[3] = (j * D - E * O - w * C) * z, b[4] = (y * P - g * G - x * U) * z, b[5] = (f * G - u * P + l * U) * z, b[6] = (k * _ - A * O - v * M) * z, b[7] = (T * O - j * _ + w * M) * z, b[8] = (g * B - p * P + x * F) * z, b[9] = (h * P - f * B - l * F) * z, b[10] = (A * D - I * _ + v * R) * z, b[11] = (E * _ - T * D - w * R) * z, b[12] = (p * U - g * L - y * F) * z, b[13] = (f * L - h * U + u * F) * z, b[14] = (I * M - A * C - k * R) * z, b[15] = (T * C - E * M + j * R) * z, b) : null), r.getMatrix()), he(m, He))
                    }
                    const N = Pe(t),
                        V = N.listAttributes()[0].getCount();
                    o.addPrimitive(N), r.debug(`join: Joined Primitives (${t.length}) containing ${m(V)} vertices under Node "${i.getName()}".`)
                }
                var b, d, f, h, u, l, g, p, y, x, T, E, j, w, A, I, k, v, R, M, _, C, D, O, F, U, P, L, B, G, z
            }

            function Ye(e) {
                const t = e.clone();
                for (const e of t.listSemantics()) t.setAttribute(e, t.getAttribute(e).clone());
                const a = t.getIndices();
                return a && t.setIndices(a.clone()), t
            }

            function Xe(e) {
                for (const t of ["POSITION", "NORMAL", "TANGENT"]) {
                    const a = e.getAttribute(t);
                    a && Ae(a)
                }
            }
            Int8Array, Int16Array, Int32Array;
            const {
                TRANSLATION: Ze,
                ROTATION: $e,
                SCALE: et,
                WEIGHTS: tt
            } = s.Zt.TargetPath;

            function at(e, t, a, s) {
                if (s.has(t) && s.get(t).has(a)) return s.get(t).get(a);
                const r = t.getArray(),
                    n = new(0, r.constructor)(a.getCount() * t.getElementSize()),
                    i = a.getArray(),
                    o = t.getElementSize();
                for (let e = 0, t = a.getCount(); e < t; e++)
                    for (let t = 0; t < o; t++) n[e * o + t] = r[i[e] * o + t];
                s.has(t) || s.set(t, new Map);
                const c = j(e, t).setArray(n);
                return s.get(t).set(a, c), c
            }
            var st;

            function rt(e, t, a) {
                for (let s = 0, r = a.length; s < r; s++) a[s] = e[t * r + s];
                return a
            }

            function nt(e, t, a) {
                for (let s = 0, r = a.length; s < r; s++) e[t * r + s] = a[s]
            }

            function it(e, t, a = 0) {
                if (e.length !== t.length) return !1;
                for (let s = 0; s < e.length; s++)
                    if (Math.abs(e[s] - t[s]) > a) return !1;
                return !0
            }

            function ot(e, t, a) {
                return e * (1 - a) + t * a
            }

            function ct(e, t, a, s) {
                for (let r = 0; r < t.length; r++) e[r] = ot(t[r], a[r], s);
                return e
            }

            function bt(e, t, a, s) {
                let r, n, i, o, c, b = t[0],
                    d = t[1],
                    f = t[2],
                    h = t[3],
                    u = a[0],
                    l = a[1],
                    g = a[2],
                    p = a[3];
                return n = b * u + d * l + f * g + h * p, n < 0 && (n = -n, u = -u, l = -l, g = -g, p = -p), 1 - n > 1e-6 ? (r = Math.acos(n), i = Math.sin(r), o = Math.sin((1 - s) * r) / i, c = Math.sin(s * r) / i) : (o = 1 - s, c = s), e[0] = o * b + c * u, e[1] = o * d + c * l, e[2] = o * f + c * g, e[3] = o * h + c * p, e
            }

            function dt(e, t) {
                const a = function(e, t) {
                    return e[0] * t[0] + e[1] * t[1] + e[2] * t[2] + e[3] * t[3]
                }(e, t);
                return Math.acos(2 * a * a - 1)
            }
            i({
                    level: "high"
                }, {
                    pattern: /.*/,
                    quantizationVolume: "mesh",
                    quantizePosition: 14,
                    quantizeNormal: 10,
                    quantizeTexcoord: 12,
                    quantizeColor: 8,
                    quantizeWeight: 8,
                    quantizeGeneric: 12,
                    normalizeWeights: !0,
                    cleanup: !0
                }),
                function(e) {
                    e[e.STEP = 0] = "STEP", e[e.LERP = 1] = "LERP", e[e.SLERP = 2] = "SLERP"
                }(st || (st = {}));
            const ft = new Float32Array(0),
                ht = {
                    ready: Promise.resolve(),
                    resample: function(e, t, a, s = 1e-4) {
                        const r = t.length / e.length,
                            n = new Array(r).fill(0),
                            i = new Array(r).fill(0),
                            o = new Array(r).fill(0),
                            c = new Array(r).fill(0),
                            b = e.length - 1;
                        let d = 1;
                        for (let r = 1; r < b; ++r) {
                            const b = e[d - 1],
                                f = e[r],
                                h = e[r + 1],
                                u = (f - b) / (h - b);
                            let l = !1;
                            if (f !== h && (1 !== r || f !== e[0]))
                                if (rt(t, d - 1, c), rt(t, r, i), rt(t, r + 1, o), "slerp" === a) {
                                    const e = bt(n, c, o, u),
                                        t = dt(c, i) + dt(i, o);
                                    l = !it(i, e, s) || t + Number.EPSILON >= Math.PI
                                } else "lerp" === a ? l = !it(i, ct(n, c, o, u), s) : "step" === a && (l = !it(i, c) || !it(i, o));
                            l && (r !== d && (e[d] = e[r], nt(t, d, rt(t, r, n))), d++)
                        }
                        return b > 0 && (e[d] = e[b], nt(t, d, rt(t, b, n)), d++), d
                    },
                    tolerance: 1e-4,
                    cleanup: !0
                };

            function ut(e = ht) {
                const t = g(ht, e);
                return l("resample", (async e => {
                    const a = new Set,
                        r = e.getRoot().listAccessors().length,
                        n = e.getLogger(),
                        i = t.ready,
                        o = t.resample;
                    await i;
                    for (const s of e.getRoot().listAnimations()) {
                        const e = new Map;
                        for (const t of s.listChannels()) e.set(t.getSampler(), t.getTargetPath());
                        for (const r of s.listSamplers()) {
                            const s = r.getInterpolation();
                            if ("STEP" === s || "LINEAR" === s) {
                                const n = r.getInput(),
                                    i = r.getOutput();
                                a.add(n), a.add(i);
                                const c = lt(n.getArray(), n.getComponentType(), n.getNormalized()),
                                    b = lt(i.getArray(), i.getComponentType(), i.getNormalized()),
                                    d = b.length / c.length,
                                    f = c.length;
                                let h;
                                if (h = "STEP" === s ? o(c, b, "step", t.tolerance) : "rotation" === e.get(r) ? o(c, b, "slerp", t.tolerance) : o(c, b, "lerp", t.tolerance), h < f) {
                                    const e = n.getArray(),
                                        t = i.getArray(),
                                        a = gt(new Float32Array(c.buffer, c.byteOffset, h), n.getComponentType(), n.getNormalized()),
                                        s = gt(new Float32Array(b.buffer, b.byteOffset, h * d), i.getComponentType(), i.getNormalized());
                                    n.setArray(ft), i.setArray(ft), r.setInput(n.clone().setArray(a)), r.setOutput(i.clone().setArray(s)), n.setArray(e), i.setArray(t)
                                }
                            }
                        }
                    }
                    for (const e of Array.from(a.values())) e.listParents().some((e => !(e instanceof s.fC))) || e.dispose();
                    e.getRoot().listAccessors().length > r && t.cleanup && await e.transform(O({
                        propertyTypes: [s.uS.ACCESSOR]
                    })), n.debug("resample: Complete.")
                }))
            }

            function lt(e, t, a) {
                if (e instanceof Float32Array) return e.slice();
                const r = new Float32Array(e);
                if (!a) return r;
                for (let e = 0; e < r.length; e++) r[e] = s.M8.decodeNormalizedInt(r[e], t);
                return r
            }

            function gt(e, t, a) {
                if (t === s.U_.ComponentType.FLOAT) return e.slice();
                const r = new(0, s.tn[t])(e.length);
                for (let n = 0; n < r.length; n++) r[n] = a ? s.M8.encodeNormalizedInt(e[n], t) : e[n];
                return r
            }
            const {
                POINTS: pt,
                LINES: mt,
                LINE_STRIP: yt,
                LINE_LOOP: xt,
                TRIANGLES: Tt,
                TRIANGLE_STRIP: Et,
                TRIANGLE_FAN: jt
            } = s.WV.Mode, wt = {
                ratio: 0,
                error: 1e-4,
                lockBorder: !1,
                cleanup: !0
            };

            function At(e) {
                const t = g(wt, e),
                    a = t.simplifier;
                if (!a) throw new Error('simplify: simplifier dependency required — install "meshoptimizer".');
                return l("simplify", (async e => {
                    const r = e.getLogger();
                    await a.ready, await e.transform(be({
                        overwrite: !1,
                        cleanup: t.cleanup
                    }));
                    let n = 0;
                    for (const s of e.getRoot().listMeshes()) {
                        for (const e of s.listPrimitives()) {
                            const s = e.getMode();
                            s === Tt || s === Et || s === jt || e.getMode() === pt && a.simplifyPoints ? (It(e, t), 0 === ne(e, re.RENDER) && e.dispose()) : n++
                        }
                        0 === s.listPrimitives().length && s.dispose()
                    }
                    n > 0 && r.warn(`simplify: Skipping simplification of ${n} primitives: Unsupported draw mode.`), t.cleanup && await e.transform(q({
                        propertyTypes: [s.uS.ACCESSOR, s.uS.NODE],
                        keepAttributes: !0,
                        keepIndices: !0,
                        keepLeaves: !1
                    }), O({
                        propertyTypes: [s.uS.ACCESSOR]
                    })), r.debug("simplify: Complete.")
                }))
            }

            function It(e, t) {
                const a = i({}, wt, t),
                    r = a.simplifier,
                    n = e.getGraph(),
                    o = s.BB.fromGraph(n),
                    c = o.getLogger();
                switch (e.getMode()) {
                    case pt:
                        return function(e, t, a) {
                            const r = a.simplifier,
                                n = e.getLogger();
                            t.getIndices() && function(e, t = new Map) {
                                const a = e.getIndices();
                                if (!a) return;
                                const r = e.getGraph(),
                                    n = s.BB.fromGraph(r),
                                    i = n.getLogger(),
                                    o = e.getAttribute("POSITION").getCount();
                                for (const s of e.listAttributes()) e.swap(s, at(n, s, a, t)), 1 === s.listParents().length && s.dispose();
                                for (const s of e.listTargets())
                                    for (const e of s.listAttributes()) s.swap(e, at(n, e, a, t)), 1 === e.listParents().length && e.dispose();
                                const c = e.getAttribute("POSITION").getCount();
                                i.debug(`unweld: ${y(o,c)} vertices.`), e.setIndices(null), 1 === a.listParents().length && a.dispose()
                            }(t);
                            const i = t.getAttribute("POSITION"),
                                o = t.getAttribute("COLOR_0"),
                                c = i.getCount();
                            let b = i.getArray(),
                                d = o ? o.getArray() : void 0;
                            const f = o ? o.getComponentSize() : void 0;
                            b instanceof Float32Array || (b = Ie(b, i.getComponentType(), i.getNormalized())), !d || d instanceof Float32Array || (d = Ie(d, i.getComponentType(), i.getNormalized())), r.useExperimentalFeatures = !0;
                            const h = Math.floor(a.ratio * c),
                                u = r.simplifyPoints(b, 3, h, d, f);
                            r.useExperimentalFeatures = !1;
                            const [l, g] = r.compactMesh(u);
                            n.debug(`simplify: ${y(i.getCount(),g)} vertices.`);
                            for (const a of x(t)) {
                                const s = j(e, a);
                                oe(a, null, l, s, g), T(t, a, s), 1 === a.listParents().length && a.dispose()
                            }
                            return t
                        }(o, e, a);
                    case mt:
                    case yt:
                    case xt:
                        return c.warn("simplify: Skipping primitive simplification: Unsupported draw mode."), e;
                    case Et:
                    case jt:
                        we(e)
                }
                const b = ne(e, re.UPLOAD),
                    d = ne(e, re.RENDER);
                d < b / 2 && ie(e);
                const f = e.getAttribute("POSITION"),
                    h = e.getIndices();
                let u = f.getArray(),
                    l = h.getArray();
                u instanceof Float32Array || (u = Ie(u, f.getComponentType(), f.getNormalized())), l instanceof Uint32Array || (l = new Uint32Array(l));
                const g = 3 * Math.floor(a.ratio * d / 3),
                    p = a.lockBorder ? ["LockBorder"] : [],
                    [m, E] = r.simplify(l, u, 3, g, a.error, p);
                e.setIndices(j(o, h).setArray(m)), 1 === h.listParents().length && h.dispose(), ie(e);
                const w = ne(e, re.UPLOAD);
                return w <= 65534 && e.getIndices().setArray(new Uint16Array(e.getIndices().getArray())), c.debug(`simplify: ${y(b,w)} vertices, error: ${E.toFixed(4)}.`), e
            }
            var Nt;
            ! function(e) {
                e.LANCZOS3 = "lanczos3", e.LANCZOS2 = "lanczos2"
            }(Nt || (Nt = {})), Nt.LANCZOS3
        },
        24987: (e, t, a) => {
            "use strict";
            a.d(t, {
                Ao: () => h,
                BK: () => c,
                Rl: () => o,
                Wb: () => f,
                kE: () => d,
                kJ: () => n,
                lA: () => b,
                w3: () => r
            });
            class s {
                constructor() {
                    this._listeners = {}
                }
                addEventListener(e, t) {
                    const a = this._listeners;
                    return void 0 === a[e] && (a[e] = []), -1 === a[e].indexOf(t) && a[e].push(t), this
                }
                removeEventListener(e, t) {
                    if (void 0 === this._listeners) return this;
                    const a = this._listeners[e];
                    if (void 0 !== a) {
                        const e = a.indexOf(t); - 1 !== e && a.splice(e, 1)
                    }
                    return this
                }
                dispatchEvent(e) {
                    if (void 0 === this._listeners) return this;
                    const t = this._listeners[e.type];
                    if (void 0 !== t) {
                        const a = t.slice(0);
                        for (let t = 0, s = a.length; t < s; t++) a[t].call(this, e)
                    }
                    return this
                }
                dispose() {
                    for (const e in this._listeners) delete this._listeners[e]
                }
            }
            class r extends s {
                constructor(e, t, a, s = {}) {
                    if (super(), this._name = void 0, this._parent = void 0, this._child = void 0, this._attributes = void 0, this._disposed = !1, this._name = e, this._parent = t, this._child = a, this._attributes = s, !t.isOnGraph(a)) throw new Error("Cannot connect disconnected graphs.")
                }
                getName() {
                    return this._name
                }
                getParent() {
                    return this._parent
                }
                getChild() {
                    return this._child
                }
                setChild(e) {
                    return this._child = e, this
                }
                getAttributes() {
                    return this._attributes
                }
                dispose() {
                    this._disposed || (this._disposed = !0, this.dispatchEvent({
                        type: "dispose",
                        target: this
                    }), super.dispose())
                }
                isDisposed() {
                    return this._disposed
                }
            }
            class n extends s {
                constructor(...e) {
                    super(...e), this._emptySet = new Set, this._edges = new Set, this._parentEdges = new Map, this._childEdges = new Map
                }
                listEdges() {
                    return Array.from(this._edges)
                }
                listParentEdges(e) {
                    return Array.from(this._childEdges.get(e) || this._emptySet)
                }
                listParents(e) {
                    return this.listParentEdges(e).map((e => e.getParent()))
                }
                listChildEdges(e) {
                    return Array.from(this._parentEdges.get(e) || this._emptySet)
                }
                listChildren(e) {
                    return this.listChildEdges(e).map((e => e.getChild()))
                }
                disconnectParents(e, t) {
                    let a = this.listParentEdges(e);
                    return t && (a = a.filter((e => t(e.getParent())))), a.forEach((e => e.dispose())), this
                }
                createEdge(e, t, a, s) {
                    return this._registerEdge(new r(e, t, a, s))
                }
                _registerEdge(e) {
                    this._edges.add(e);
                    const t = e.getParent();
                    this._parentEdges.has(t) || this._parentEdges.set(t, new Set), this._parentEdges.get(t).add(e);
                    const a = e.getChild();
                    return this._childEdges.has(a) || this._childEdges.set(a, new Set), this._childEdges.get(a).add(e), e.addEventListener("dispose", (() => this._removeEdge(e))), e
                }
                _removeEdge(e) {
                    return this._edges.delete(e), this._parentEdges.get(e.getParent()).delete(e), this._childEdges.get(e.getChild()).delete(e), this
                }
            }

            function i() {
                return i = Object.assign || function(e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var a = arguments[t];
                        for (var s in a) Object.prototype.hasOwnProperty.call(a, s) && (e[s] = a[s])
                    }
                    return e
                }, i.apply(this, arguments)
            }
            class o {
                constructor(e) {
                    if (this.list = [], e)
                        for (const t of e) this.list.push(t)
                }
                add(e) {
                    this.list.push(e)
                }
                remove(e) {
                    const t = this.list.indexOf(e);
                    t >= 0 && this.list.splice(t, 1)
                }
                removeChild(e) {
                    const t = [];
                    for (const a of this.list) a.getChild() === e && t.push(a);
                    for (const e of t) this.remove(e);
                    return t
                }
                listRefsByChild(e) {
                    const t = [];
                    for (const a of this.list) a.getChild() === e && t.push(a);
                    return t
                }
                values() {
                    return this.list
                }
            }
            class c {
                constructor(e) {
                    if (this.set = new Set, this.map = new Map, e)
                        for (const t of e) this.add(t)
                }
                add(e) {
                    const t = e.getChild();
                    this.removeChild(t), this.set.add(e), this.map.set(t, e)
                }
                remove(e) {
                    this.set.delete(e), this.map.delete(e.getChild())
                }
                removeChild(e) {
                    const t = this.map.get(e) || null;
                    return t && this.remove(t), t
                }
                getRefByChild(e) {
                    return this.map.get(e) || null
                }
                values() {
                    return Array.from(this.set)
                }
            }
            class b {
                constructor(e) {
                    this.map = {}, e && Object.assign(this.map, e)
                }
                set(e, t) {
                    this.map[e] = t
                }
                delete(e) {
                    delete this.map[e]
                }
                get(e) {
                    return this.map[e] || null
                }
                keys() {
                    return Object.keys(this.map)
                }
                values() {
                    return Object.values(this.map)
                }
            }
            const d = Symbol("attributes"),
                f = Symbol("immutableKeys");
            class h extends s {
                constructor(e) {
                    super(), this._disposed = !1, this.graph = void 0, this[d] = void 0, this[f] = void 0, this.graph = e, this[f] = new Set, this[d] = this._createAttributes()
                }
                getDefaults() {
                    return {}
                }
                _createAttributes() {
                    const e = this.getDefaults(),
                        t = {};
                    for (const a in e) {
                        const s = e[a];
                        if (s instanceof h) {
                            const e = this.graph.createEdge(a, this, s);
                            e.addEventListener("dispose", (() => s.dispose())), this[f].add(a), t[a] = e
                        } else t[a] = s
                    }
                    return t
                }
                isOnGraph(e) {
                    return this.graph === e.graph
                }
                isDisposed() {
                    return this._disposed
                }
                dispose() {
                    this._disposed || (this.graph.listChildEdges(this).forEach((e => e.dispose())), this.graph.disconnectParents(this), this._disposed = !0, this.dispatchEvent({
                        type: "dispose"
                    }))
                }
                detach() {
                    return this.graph.disconnectParents(this), this
                }
                swap(e, t) {
                    for (const a in this[d]) {
                        const s = this[d][a];
                        if (s instanceof r) {
                            const r = s;
                            r.getChild() === e && this.setRef(a, t, r.getAttributes())
                        } else if (s instanceof o)
                            for (const r of s.listRefsByChild(e)) {
                                const s = r.getAttributes();
                                this.removeRef(a, e), this.addRef(a, t, s)
                            } else if (s instanceof c) {
                                const r = s.getRefByChild(e);
                                if (r) {
                                    const s = r.getAttributes();
                                    this.removeRef(a, e), this.addRef(a, t, s)
                                }
                            } else if (s instanceof b)
                            for (const r of s.keys()) {
                                const n = s.get(r);
                                n.getChild() === e && this.setRefMap(a, r, t, n.getAttributes())
                            }
                    }
                    return this
                }
                get(e) {
                    return this[d][e]
                }
                set(e, t) {
                    return this[d][e] = t, this.dispatchEvent({
                        type: "change",
                        attribute: e
                    })
                }
                getRef(e) {
                    const t = this[d][e];
                    return t ? t.getChild() : null
                }
                setRef(e, t, a) {
                    if (this[f].has(e)) throw new Error(`Cannot overwrite immutable attribute, "${e}".`);
                    const s = this[d][e];
                    if (s && s.dispose(), !t) return this;
                    const r = this.graph.createEdge(e, this, t, a);
                    return r.addEventListener("dispose", (() => {
                        delete this[d][e], this.dispatchEvent({
                            type: "change",
                            attribute: e
                        })
                    })), this[d][e] = r, this.dispatchEvent({
                        type: "change",
                        attribute: e
                    })
                }
                listRefs(e) {
                    return this.assertRefList(e).values().map((e => e.getChild()))
                }
                addRef(e, t, a) {
                    const s = this.graph.createEdge(e, this, t, a),
                        r = this.assertRefList(e);
                    return r.add(s), s.addEventListener("dispose", (() => {
                        r.remove(s), this.dispatchEvent({
                            type: "change",
                            attribute: e
                        })
                    })), this.dispatchEvent({
                        type: "change",
                        attribute: e
                    })
                }
                removeRef(e, t) {
                    const a = this.assertRefList(e);
                    if (a instanceof o)
                        for (const e of a.removeChild(t)) e.dispose();
                    else {
                        const e = a.removeChild(t);
                        e && e.dispose()
                    }
                    return this
                }
                assertRefList(e) {
                    const t = this[d][e];
                    if (t instanceof o || t instanceof c) return t;
                    throw new Error(`Expected RefList or RefSet for attribute "${e}"`)
                }
                listRefMapKeys(e) {
                    return this.assertRefMap(e).keys()
                }
                listRefMapValues(e) {
                    return this.assertRefMap(e).values().map((e => e.getChild()))
                }
                getRefMap(e, t) {
                    const a = this.assertRefMap(e).get(t);
                    return a ? a.getChild() : null
                }
                setRefMap(e, t, a, s) {
                    const r = this.assertRefMap(e),
                        n = r.get(t);
                    if (n && n.dispose(), !a) return this;
                    s = Object.assign(s || {}, {
                        key: t
                    });
                    const o = this.graph.createEdge(e, this, a, i({}, s, {
                        key: t
                    }));
                    return o.addEventListener("dispose", (() => {
                        r.delete(t), this.dispatchEvent({
                            type: "change",
                            attribute: e,
                            key: t
                        })
                    })), r.set(t, o), this.dispatchEvent({
                        type: "change",
                        attribute: e,
                        key: t
                    })
                }
                assertRefMap(e) {
                    const t = this[d][e];
                    if (t instanceof b) return t;
                    throw new Error(`Expected RefMap for attribute "${e}"`)
                }
                dispatchEvent(e) {
                    return super.dispatchEvent(i({}, e, {
                        target: this
                    })), this.graph.dispatchEvent(i({}, e, {
                        target: this,
                        type: `node:${e.type}`
                    })), this
                }
            }
        }
    }
]);