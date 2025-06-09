(self.webpackChunkmetapress = self.webpackChunkmetapress || []).push([
    [2238], {
        42238: function(i, e, o) {
            var a;
            ! function(r, n) {
                "use strict";
                var t = "function",
                    s = "undefined",
                    b = "object",
                    w = "string",
                    l = "model",
                    d = "name",
                    c = "type",
                    u = "vendor",
                    m = "version",
                    p = "architecture",
                    h = "console",
                    f = "mobile",
                    v = "tablet",
                    g = "smarttv",
                    k = "wearable",
                    x = "embedded",
                    y = "Amazon",
                    _ = "Apple",
                    T = "ASUS",
                    S = "BlackBerry",
                    q = "Google",
                    z = "Huawei",
                    A = "LG",
                    N = "Microsoft",
                    C = "Motorola",
                    O = "Samsung",
                    E = "Sharp",
                    B = "Sony",
                    U = "Xiaomi",
                    j = "Zebra",
                    P = "Facebook",
                    R = "Chromium OS",
                    M = "Mac OS",
                    V = function(i) {
                        for (var e = {}, o = 0; o < i.length; o++) e[i[o].toUpperCase()] = i[o];
                        return e
                    },
                    D = function(i, e) {
                        return typeof i === w && -1 !== F(e).indexOf(F(i))
                    },
                    F = function(i) {
                        return i.toLowerCase()
                    },
                    I = function(i, e) {
                        if (typeof i === w) return i = i.replace(/^\s\s*/, ""), typeof e === s ? i : i.substring(0, 350)
                    },
                    W = function(i, e) {
                        for (var o, a, r, s, w, l, d = 0; d < e.length && !w;) {
                            var c = e[d],
                                u = e[d + 1];
                            for (o = a = 0; o < c.length && !w && c[o];)
                                if (w = c[o++].exec(i))
                                    for (r = 0; r < u.length; r++) l = w[++a], typeof(s = u[r]) === b && s.length > 0 ? 2 === s.length ? typeof s[1] == t ? this[s[0]] = s[1].call(this, l) : this[s[0]] = s[1] : 3 === s.length ? typeof s[1] !== t || s[1].exec && s[1].test ? this[s[0]] = l ? l.replace(s[1], s[2]) : n : this[s[0]] = l ? s[1].call(this, l, s[2]) : n : 4 === s.length && (this[s[0]] = l ? s[3].call(this, l.replace(s[1], s[2])) : n) : this[s] = l || n;
                            d += 2
                        }
                    },
                    G = function(i, e) {
                        for (var o in e)
                            if (typeof e[o] === b && e[o].length > 0) {
                                for (var a = 0; a < e[o].length; a++)
                                    if (D(e[o][a], i)) return "?" === o ? n : o
                            } else if (D(e[o], i)) return "?" === o ? n : o;
                        return i
                    },
                    H = {
                        ME: "4.90",
                        "NT 3.11": "NT3.51",
                        "NT 4.0": "NT4.0",
                        2e3: "NT 5.0",
                        XP: ["NT 5.1", "NT 5.2"],
                        Vista: "NT 6.0",
                        7: "NT 6.1",
                        8: "NT 6.2",
                        8.1: "NT 6.3",
                        10: ["NT 6.4", "NT 10.0"],
                        RT: "ARM"
                    },
                    L = {
                        browser: [
                            [/\b(?:crmo|crios)\/([\w\.]+)/i],
                            [m, [d, "Chrome"]],
                            [/edg(?:e|ios|a)?\/([\w\.]+)/i],
                            [m, [d, "Edge"]],
                            [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i],
                            [d, m],
                            [/opios[\/ ]+([\w\.]+)/i],
                            [m, [d, "Opera Mini"]],
                            [/\bopr\/([\w\.]+)/i],
                            [m, [d, "Opera"]],
                            [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(heytap|ovi)browser\/([\d\.]+)/i, /(weibo)__([\d\.]+)/i],
                            [d, m],
                            [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i],
                            [m, [d, "UCBrowser"]],
                            [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i],
                            [m, [d, "WeChat(Win) Desktop"]],
                            [/micromessenger\/([\w\.]+)/i],
                            [m, [d, "WeChat"]],
                            [/konqueror\/([\w\.]+)/i],
                            [m, [d, "Konqueror"]],
                            [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i],
                            [m, [d, "IE"]],
                            [/ya(?:search)?browser\/([\w\.]+)/i],
                            [m, [d, "Yandex"]],
                            [/(avast|avg)\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Secure Browser"], m
                            ],
                            [/\bfocus\/([\w\.]+)/i],
                            [m, [d, "Firefox Focus"]],
                            [/\bopt\/([\w\.]+)/i],
                            [m, [d, "Opera Touch"]],
                            [/coc_coc\w+\/([\w\.]+)/i],
                            [m, [d, "Coc Coc"]],
                            [/dolfin\/([\w\.]+)/i],
                            [m, [d, "Dolphin"]],
                            [/coast\/([\w\.]+)/i],
                            [m, [d, "Opera Coast"]],
                            [/miuibrowser\/([\w\.]+)/i],
                            [m, [d, "MIUI Browser"]],
                            [/fxios\/([-\w\.]+)/i],
                            [m, [d, "Firefox"]],
                            [/\bqihu|(qi?ho?o?|360)browser/i],
                            [
                                [d, "360 Browser"]
                            ],
                            [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i],
                            [
                                [d, /(.+)/, "$1 Browser"], m
                            ],
                            [/(comodo_dragon)\/([\w\.]+)/i],
                            [
                                [d, /_/g, " "], m
                            ],
                            [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i],
                            [d, m],
                            [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i],
                            [d],
                            [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i],
                            [
                                [d, P], m
                            ],
                            [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i],
                            [d, m],
                            [/\bgsa\/([\w\.]+) .*safari\//i],
                            [m, [d, "GSA"]],
                            [/musical_ly(?:.+app_?version\/|_)([\w\.]+)/i],
                            [m, [d, "TikTok"]],
                            [/headlesschrome(?:\/([\w\.]+)| )/i],
                            [m, [d, "Chrome Headless"]],
                            [/ wv\).+(chrome)\/([\w\.]+)/i],
                            [
                                [d, "Chrome WebView"], m
                            ],
                            [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i],
                            [m, [d, "Android Browser"]],
                            [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i],
                            [d, m],
                            [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i],
                            [m, [d, "Mobile Safari"]],
                            [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i],
                            [m, d],
                            [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i],
                            [d, [m, G, {
                                "1.0": "/8",
                                1.2: "/1",
                                1.3: "/3",
                                "2.0": "/412",
                                "2.0.2": "/416",
                                "2.0.3": "/417",
                                "2.0.4": "/419",
                                "?": "/"
                            }]],
                            [/(webkit|khtml)\/([\w\.]+)/i],
                            [d, m],
                            [/(navigator|netscape\d?)\/([-\w\.]+)/i],
                            [
                                [d, "Netscape"], m
                            ],
                            [/mobile vr; rv:([\w\.]+)\).+firefox/i],
                            [m, [d, "Firefox Reality"]],
                            [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i],
                            [d, m],
                            [/(cobalt)\/([\w\.]+)/i],
                            [d, [m, /master.|lts./, ""]]
                        ],
                        cpu: [
                            [/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i],
                            [
                                [p, "amd64"]
                            ],
                            [/(ia32(?=;))/i],
                            [
                                [p, F]
                            ],
                            [/((?:i[346]|x)86)[;\)]/i],
                            [
                                [p, "ia32"]
                            ],
                            [/\b(aarch64|arm(v?8e?l?|_?64))\b/i],
                            [
                                [p, "arm64"]
                            ],
                            [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i],
                            [
                                [p, "armhf"]
                            ],
                            [/windows (ce|mobile); ppc;/i],
                            [
                                [p, "arm"]
                            ],
                            [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i],
                            [
                                [p, /ower/, "", F]
                            ],
                            [/(sun4\w)[;\)]/i],
                            [
                                [p, "sparc"]
                            ],
                            [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i],
                            [
                                [p, F]
                            ]
                        ],
                        device: [
                            [/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i],
                            [l, [u, O],
                                [c, v]
                            ],
                            [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i],
                            [l, [u, O],
                                [c, f]
                            ],
                            [/(?:\/|\()(ip(?:hone|od)[\w, ]*)(?:\/|;)/i],
                            [l, [u, _],
                                [c, f]
                            ],
                            [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i],
                            [l, [u, _],
                                [c, v]
                            ],
                            [/(macintosh);/i],
                            [l, [u, _]],
                            [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i],
                            [l, [u, E],
                                [c, f]
                            ],
                            [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i],
                            [l, [u, z],
                                [c, v]
                            ],
                            [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i],
                            [l, [u, z],
                                [c, f]
                            ],
                            [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [u, U],
                                [c, f]
                            ],
                            [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i],
                            [
                                [l, /_/g, " "],
                                [u, U],
                                [c, v]
                            ],
                            [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i],
                            [l, [u, "OPPO"],
                                [c, f]
                            ],
                            [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i],
                            [l, [u, "Vivo"],
                                [c, f]
                            ],
                            [/\b(rmx[12]\d{3})(?: bui|;|\))/i],
                            [l, [u, "Realme"],
                                [c, f]
                            ],
                            [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i],
                            [l, [u, C],
                                [c, f]
                            ],
                            [/\b(mz60\d|xoom[2 ]{0,2}) build\//i],
                            [l, [u, C],
                                [c, v]
                            ],
                            [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i],
                            [l, [u, A],
                                [c, v]
                            ],
                            [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i],
                            [l, [u, A],
                                [c, f]
                            ],
                            [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i],
                            [l, [u, "Lenovo"],
                                [c, v]
                            ],
                            [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i],
                            [
                                [l, /_/g, " "],
                                [u, "Nokia"],
                                [c, f]
                            ],
                            [/(pixel c)\b/i],
                            [l, [u, q],
                                [c, v]
                            ],
                            [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i],
                            [l, [u, q],
                                [c, f]
                            ],
                            [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                            [l, [u, B],
                                [c, f]
                            ],
                            [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i],
                            [
                                [l, "Xperia Tablet"],
                                [u, B],
                                [c, v]
                            ],
                            [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i],
                            [l, [u, "OnePlus"],
                                [c, f]
                            ],
                            [/(alexa)webm/i, /(kf[a-z]{2}wi|aeo[c-r]{2})( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i],
                            [l, [u, y],
                                [c, v]
                            ],
                            [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i],
                            [
                                [l, /(.+)/g, "Fire Phone $1"],
                                [u, y],
                                [c, f]
                            ],
                            [/(playbook);[-\w\),; ]+(rim)/i],
                            [l, u, [c, v]],
                            [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i],
                            [l, [u, S],
                                [c, f]
                            ],
                            [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i],
                            [l, [u, T],
                                [c, v]
                            ],
                            [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i],
                            [l, [u, T],
                                [c, f]
                            ],
                            [/(nexus 9)/i],
                            [l, [u, "HTC"],
                                [c, v]
                            ],
                            [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i],
                            [u, [l, /_/g, " "],
                                [c, f]
                            ],
                            [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i],
                            [l, [u, "Acer"],
                                [c, v]
                            ],
                            [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i],
                            [l, [u, "Meizu"],
                                [c, f]
                            ],
                            [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i],
                            [u, l, [c, f]],
                            [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i],
                            [u, l, [c, v]],
                            [/(surface duo)/i],
                            [l, [u, N],
                                [c, v]
                            ],
                            [/droid [\d\.]+; (fp\du?)(?: b|\))/i],
                            [l, [u, "Fairphone"],
                                [c, f]
                            ],
                            [/(u304aa)/i],
                            [l, [u, "AT&T"],
                                [c, f]
                            ],
                            [/\bsie-(\w*)/i],
                            [l, [u, "Siemens"],
                                [c, f]
                            ],
                            [/\b(rct\w+) b/i],
                            [l, [u, "RCA"],
                                [c, v]
                            ],
                            [/\b(venue[\d ]{2,7}) b/i],
                            [l, [u, "Dell"],
                                [c, v]
                            ],
                            [/\b(q(?:mv|ta)\w+) b/i],
                            [l, [u, "Verizon"],
                                [c, v]
                            ],
                            [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i],
                            [l, [u, "Barnes & Noble"],
                                [c, v]
                            ],
                            [/\b(tm\d{3}\w+) b/i],
                            [l, [u, "NuVision"],
                                [c, v]
                            ],
                            [/\b(k88) b/i],
                            [l, [u, "ZTE"],
                                [c, v]
                            ],
                            [/\b(nx\d{3}j) b/i],
                            [l, [u, "ZTE"],
                                [c, f]
                            ],
                            [/\b(gen\d{3}) b.+49h/i],
                            [l, [u, "Swiss"],
                                [c, f]
                            ],
                            [/\b(zur\d{3}) b/i],
                            [l, [u, "Swiss"],
                                [c, v]
                            ],
                            [/\b((zeki)?tb.*\b) b/i],
                            [l, [u, "Zeki"],
                                [c, v]
                            ],
                            [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i],
                            [
                                [u, "Dragon Touch"], l, [c, v]
                            ],
                            [/\b(ns-?\w{0,9}) b/i],
                            [l, [u, "Insignia"],
                                [c, v]
                            ],
                            [/\b((nxa|next)-?\w{0,9}) b/i],
                            [l, [u, "NextBook"],
                                [c, v]
                            ],
                            [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i],
                            [
                                [u, "Voice"], l, [c, f]
                            ],
                            [/\b(lvtel\-)?(v1[12]) b/i],
                            [
                                [u, "LvTel"], l, [c, f]
                            ],
                            [/\b(ph-1) /i],
                            [l, [u, "Essential"],
                                [c, f]
                            ],
                            [/\b(v(100md|700na|7011|917g).*\b) b/i],
                            [l, [u, "Envizen"],
                                [c, v]
                            ],
                            [/\b(trio[-\w\. ]+) b/i],
                            [l, [u, "MachSpeed"],
                                [c, v]
                            ],
                            [/\btu_(1491) b/i],
                            [l, [u, "Rotor"],
                                [c, v]
                            ],
                            [/(shield[\w ]+) b/i],
                            [l, [u, "Nvidia"],
                                [c, v]
                            ],
                            [/(sprint) (\w+)/i],
                            [u, l, [c, f]],
                            [/(kin\.[onetw]{3})/i],
                            [
                                [l, /\./g, " "],
                                [u, N],
                                [c, f]
                            ],
                            [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i],
                            [l, [u, j],
                                [c, v]
                            ],
                            [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i],
                            [l, [u, j],
                                [c, f]
                            ],
                            [/smart-tv.+(samsung)/i],
                            [u, [c, g]],
                            [/hbbtv.+maple;(\d+)/i],
                            [
                                [l, /^/, "SmartTV"],
                                [u, O],
                                [c, g]
                            ],
                            [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i],
                            [
                                [u, A],
                                [c, g]
                            ],
                            [/(apple) ?tv/i],
                            [u, [l, "Apple TV"],
                                [c, g]
                            ],
                            [/crkey/i],
                            [
                                [l, "Chromecast"],
                                [u, q],
                                [c, g]
                            ],
                            [/droid.+aft(\w)( bui|\))/i],
                            [l, [u, y],
                                [c, g]
                            ],
                            [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i],
                            [l, [u, E],
                                [c, g]
                            ],
                            [/(bravia[\w ]+)( bui|\))/i],
                            [l, [u, B],
                                [c, g]
                            ],
                            [/(mitv-\w{5}) bui/i],
                            [l, [u, U],
                                [c, g]
                            ],
                            [/Hbbtv.*(technisat) (.*);/i],
                            [u, l, [c, g]],
                            [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i],
                            [
                                [u, I],
                                [l, I],
                                [c, g]
                            ],
                            [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i],
                            [
                                [c, g]
                            ],
                            [/(ouya)/i, /(nintendo) ([wids3utch]+)/i],
                            [u, l, [c, h]],
                            [/droid.+; (shield) bui/i],
                            [l, [u, "Nvidia"],
                                [c, h]
                            ],
                            [/(playstation [345portablevi]+)/i],
                            [l, [u, B],
                                [c, h]
                            ],
                            [/\b(xbox(?: one)?(?!; xbox))[\); ]/i],
                            [l, [u, N],
                                [c, h]
                            ],
                            [/((pebble))app/i],
                            [u, l, [c, k]],
                            [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i],
                            [l, [u, _],
                                [c, k]
                            ],
                            [/droid.+; (glass) \d/i],
                            [l, [u, q],
                                [c, k]
                            ],
                            [/droid.+; (wt63?0{2,3})\)/i],
                            [l, [u, j],
                                [c, k]
                            ],
                            [/(quest( 2| pro)?)/i],
                            [l, [u, P],
                                [c, k]
                            ],
                            [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i],
                            [u, [c, x]],
                            [/(aeobc)\b/i],
                            [l, [u, y],
                                [c, x]
                            ],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i],
                            [l, [c, f]],
                            [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i],
                            [l, [c, v]],
                            [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i],
                            [
                                [c, v]
                            ],
                            [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i],
                            [
                                [c, f]
                            ],
                            [/(android[-\w\. ]{0,9});.+buil/i],
                            [l, [u, "Generic"]]
                        ],
                        engine: [
                            [/windows.+ edge\/([\w\.]+)/i],
                            [m, [d, "EdgeHTML"]],
                            [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i],
                            [m, [d, "Blink"]],
                            [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i, /\b(libweb)/i],
                            [d, m],
                            [/rv\:([\w\.]{1,9})\b.+(gecko)/i],
                            [m, d]
                        ],
                        os: [
                            [/microsoft (windows) (vista|xp)/i],
                            [d, m],
                            [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i],
                            [d, [m, G, H]],
                            [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i],
                            [
                                [d, "Windows"],
                                [m, G, H]
                            ],
                            [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /ios;fbsv\/([\d\.]+)/i, /cfnetwork\/.+darwin/i],
                            [
                                [m, /_/g, "."],
                                [d, "iOS"]
                            ],
                            [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i],
                            [
                                [d, M],
                                [m, /_/g, "."]
                            ],
                            [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i],
                            [m, d],
                            [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i],
                            [d, m],
                            [/\(bb(10);/i],
                            [m, [d, S]],
                            [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i],
                            [m, [d, "Symbian"]],
                            [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i],
                            [m, [d, "Firefox OS"]],
                            [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i],
                            [m, [d, "webOS"]],
                            [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i],
                            [m, [d, "watchOS"]],
                            [/crkey\/([\d\.]+)/i],
                            [m, [d, "Chromecast"]],
                            [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i],
                            [
                                [d, R], m
                            ],
                            [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i],
                            [d, m],
                            [/(sunos) ?([\w\.\d]*)/i],
                            [
                                [d, "Solaris"], m
                            ],
                            [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux|serenityos)/i, /(unix) ?([\w\.]*)/i],
                            [d, m]
                        ]
                    },
                    Z = function(i, e) {
                        if (typeof i === b && (e = i, i = n), !(this instanceof Z)) return new Z(i, e).getResult();
                        var o = typeof r !== s && r.navigator ? r.navigator : n,
                            a = i || (o && o.userAgent ? o.userAgent : ""),
                            l = o && o.userAgentData ? o.userAgentData : n,
                            d = e ? function(i, e) {
                                var o = {};
                                for (var a in i) e[a] && e[a].length % 2 == 0 ? o[a] = e[a].concat(i[a]) : o[a] = i[a];
                                return o
                            }(L, e) : L,
                            c = o && o.userAgent == a;
                        return this.getBrowser = function() {
                            var i, e = {};
                            return e.name = n, e.version = n, W.call(e, a, d.browser), e.major = typeof(i = e.version) === w ? i.replace(/[^\d\.]/g, "").split(".")[0] : n, c && o && o.brave && typeof o.brave.isBrave == t && (e.name = "Brave"), e
                        }, this.getCPU = function() {
                            var i = {};
                            return i.architecture = n, W.call(i, a, d.cpu), i
                        }, this.getDevice = function() {
                            var i = {};
                            return i.vendor = n, i.model = n, i.type = n, W.call(i, a, d.device), c && !i.type && l && l.mobile && (i.type = f), c && "Macintosh" == i.model && o && typeof o.standalone !== s && o.maxTouchPoints && o.maxTouchPoints > 2 && (i.model = "iPad", i.type = v), i
                        }, this.getEngine = function() {
                            var i = {};
                            return i.name = n, i.version = n, W.call(i, a, d.engine), i
                        }, this.getOS = function() {
                            var i = {};
                            return i.name = n, i.version = n, W.call(i, a, d.os), c && !i.name && l && "Unknown" != l.platform && (i.name = l.platform.replace(/chrome os/i, R).replace(/macos/i, M)), i
                        }, this.getResult = function() {
                            return {
                                ua: this.getUA(),
                                browser: this.getBrowser(),
                                engine: this.getEngine(),
                                os: this.getOS(),
                                device: this.getDevice(),
                                cpu: this.getCPU()
                            }
                        }, this.getUA = function() {
                            return a
                        }, this.setUA = function(i) {
                            return a = typeof i === w && i.length > 350 ? I(i, 350) : i, this
                        }, this.setUA(a), this
                    };
                Z.VERSION = "1.0.35", Z.BROWSER = V([d, m, "major"]), Z.CPU = V([p]), Z.DEVICE = V([l, u, c, h, f, g, v, k, x]), Z.ENGINE = Z.OS = V([d, m]), typeof e !== s ? (i.exports && (e = i.exports = Z), e.UAParser = Z) : o.amdO ? (a = function() {
                    return Z
                }.call(e, o, e, i)) === n || (i.exports = a) : typeof r !== s && (r.UAParser = Z);
                var $ = typeof r !== s && (r.jQuery || r.Zepto);
                if ($ && !$.ua) {
                    var X = new Z;
                    $.ua = X.getResult(), $.ua.get = function() {
                        return X.getUA()
                    }, $.ua.set = function(i) {
                        X.setUA(i);
                        var e = X.getResult();
                        for (var o in e) $.ua[o] = e[o]
                    }
                }
            }("object" == typeof window ? window : this)
        }
    }
]);