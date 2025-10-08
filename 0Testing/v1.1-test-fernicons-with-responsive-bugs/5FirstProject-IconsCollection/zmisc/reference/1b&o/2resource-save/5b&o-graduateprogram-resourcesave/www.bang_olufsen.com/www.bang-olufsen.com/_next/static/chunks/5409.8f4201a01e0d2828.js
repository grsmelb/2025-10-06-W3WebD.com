(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5409, 484, 3284], {
        7174: function(t, e, n) {
            "use strict";
            n.d(e, {
                BA: function() {
                    return d
                },
                Gl: function() {
                    return c
                },
                IO: function() {
                    return h
                },
                IU: function() {
                    return j
                },
                JI: function() {
                    return b
                },
                NM: function() {
                    return m
                },
                Oi: function() {
                    return s
                },
                RT: function() {
                    return l
                },
                Sf: function() {
                    return v
                },
                dK: function() {
                    return p
                },
                eb: function() {
                    return g
                },
                jP: function() {
                    return w
                },
                ob: function() {
                    return a
                },
                tW: function() {
                    return y
                },
                wZ: function() {
                    return f
                },
                zs: function() {
                    return u
                }
            });
            var i = n(90849);

            function o(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(t);
                    e && (i = i.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function r(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? o(Object(n), !0).forEach((function(e) {
                        (0, i.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var c = {
                    inheritedClass: "-fadeIn",
                    controls: !0,
                    autoplay: !0,
                    muted: !1,
                    loop: !1,
                    ratio: [16, 9]
                },
                s = {
                    inheritedClass: "-fadeIn",
                    ratio: [16, 9],
                    cover: !0,
                    controls: !1,
                    autoplay: !0,
                    muted: !0,
                    loop: !0
                },
                a = {
                    className: "-staggerInUp -stagger5",
                    variant: "secondary",
                    forceClick: !0,
                    centered: !0,
                    isButton: !0,
                    invertColor: !0
                },
                l = {
                    className: "-staggerInUp -stagger5",
                    variant: "primary",
                    forceClick: !0
                },
                u = {
                    className: "-staggerInUp -stagger5",
                    variant: "secondary",
                    invertColor: !0,
                    forceClick: !0
                },
                f = r(r({}, u), {}, {
                    className: "".concat(u.className, " secondary-cta")
                }),
                g = {
                    className: "-staggerIn -stagger5",
                    variant: "play",
                    invertColor: !0,
                    noLabel: !0
                },
                d = {
                    className: "o-hero__closeBtn -staggerIn -stagger5",
                    variant: "close",
                    invertColor: !0,
                    noLabel: !0
                },
                p = "herosplit",
                b = "hero16x9",
                m = "herosquare",
                h = "herov4",
                y = "heroscrollbanner",
                v = "herosplitv2",
                j = "productHeader",
                w = "salesSupportModal"
        },
        63594: function(t) {
            "use strict";
            var e = "bfred-it:object-fit-images",
                n = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
                i = "undefined" === typeof Image ? {
                    style: {
                        "object-position": 1
                    }
                } : new Image,
                o = "object-fit" in i.style,
                r = "object-position" in i.style,
                c = "background-size" in i.style,
                s = "string" === typeof i.currentSrc,
                a = i.getAttribute,
                l = i.setAttribute,
                u = !1;

            function f(t, e, n) {
                var i = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (e || 1) + "' height='" + (n || 0) + "'%3E%3C/svg%3E";
                a.call(t, "src") !== i && l.call(t, "src", i)
            }

            function g(t, e) {
                t.naturalWidth ? e(t) : setTimeout(g, 100, t, e)
            }

            function d(t) {
                var i = function(t) {
                        for (var e, i = getComputedStyle(t).fontFamily, o = {}; null !== (e = n.exec(i));) o[e[1]] = e[2];
                        return o
                    }(t),
                    r = t[e];
                if (i["object-fit"] = i["object-fit"] || "fill", !r.img) {
                    if ("fill" === i["object-fit"]) return;
                    if (!r.skipTest && o && !i["object-position"]) return
                }
                if (!r.img) {
                    r.img = new Image(t.width, t.height), r.img.srcset = a.call(t, "data-ofi-srcset") || t.srcset, r.img.src = a.call(t, "data-ofi-src") || t.src, l.call(t, "data-ofi-src", t.src), t.srcset && l.call(t, "data-ofi-srcset", t.srcset), f(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = "");
                    try {
                        ! function(t) {
                            var n = {
                                get: function(n) {
                                    return t[e].img[n || "src"]
                                },
                                set: function(n, i) {
                                    return t[e].img[i || "src"] = n, l.call(t, "data-ofi-" + i, n), d(t), n
                                }
                            };
                            Object.defineProperty(t, "src", n), Object.defineProperty(t, "currentSrc", {
                                get: function() {
                                    return n.get("currentSrc")
                                }
                            }), Object.defineProperty(t, "srcset", {
                                get: function() {
                                    return n.get("srcset")
                                },
                                set: function(t) {
                                    return n.set(t, "srcset")
                                }
                            })
                        }(t)
                    } catch (c) {
                        window.console && console.warn("https://bit.ly/ofi-old-browser")
                    }
                }! function(t) {
                    if (t.srcset && !s && window.picturefill) {
                        var e = window.picturefill._;
                        t[e.ns] && t[e.ns].evaled || e.fillImg(t, {
                            reselect: !0
                        }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, {
                            reselect: !0
                        })), t.currentSrc = t[e.ns].curSrc || t.src
                    }
                }(r.img), t.style.backgroundImage = 'url("' + (r.img.currentSrc || r.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = i["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(i["object-fit"]) ? g(r.img, (function() {
                    r.img.naturalWidth > t.width || r.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto"
                })) : t.style.backgroundSize = i["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), g(r.img, (function(e) {
                    f(t, e.naturalWidth, e.naturalHeight)
                }))
            }

            function p(t, n) {
                var i = !u && !t;
                if (n = n || {}, t = t || "img", r && !n.skipTest || !c) return !1;
                "img" === t ? t = document.getElementsByTagName("img") : "string" === typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]);
                for (var o = 0; o < t.length; o++) t[o][e] = t[o][e] || {
                    skipTest: n.skipTest
                }, d(t[o]);
                i && (document.body.addEventListener("load", (function(t) {
                    "IMG" === t.target.tagName && p(t.target, {
                        skipTest: n.skipTest
                    })
                }), !0), u = !0, t = "img"), n.watchMQ && window.addEventListener("resize", p.bind(null, t, {
                    skipTest: n.skipTest
                }))
            }
            p.supportsObjectFit = o, p.supportsObjectPosition = r,
                function() {
                    function t(t, n) {
                        return t[e] && t[e].img && ("src" === n || "srcset" === n) ? t[e].img : t
                    }
                    r || (HTMLImageElement.prototype.getAttribute = function(e) {
                        return a.call(t(this, e), e)
                    }, HTMLImageElement.prototype.setAttribute = function(e, n) {
                        return l.call(t(this, e), e, String(n))
                    })
                }(), t.exports = p
        },
        20484: function(t) {
            "undefined" !== typeof t.exports && (t.exports = function(t) {
                "use strict";
                var e = navigator.userAgent.indexOf("Edge/") >= 0,
                    n = new Image,
                    i = "object-fit" in n.style && !e,
                    o = "object-position" in n.style && !e,
                    r = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;

                function c(t) {
                    for (var e = getComputedStyle(t).fontFamily, n = null, i = {}; null !== (n = r.exec(e));) i[n[1]] = n[2];
                    return i["object-position"] ? function(t) {
                        ~t["object-position"].indexOf("left") ? t["object-position-x"] = "left" : ~t["object-position"].indexOf("right") ? t["object-position-x"] = "right" : t["object-position-x"] = "center";
                        ~t["object-position"].indexOf("top") ? t["object-position-y"] = "top" : ~t["object-position"].indexOf("bottom") ? t["object-position-y"] = "bottom" : t["object-position-y"] = "center";
                        return t
                    }(i) : i
                }

                function s(t, e) {
                    if ("fill" !== e["object-fit"]) {
                        var n = t.style,
                            i = window.getComputedStyle(t),
                            o = document.createElement("object-fit");
                        o.appendChild(t.parentNode.replaceChild(o, t));
                        var r = {
                            height: "100%",
                            width: "100%",
                            boxSizing: "content-box",
                            display: "inline-block",
                            overflow: "hidden"
                        };
                        for (var c in "backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g, (function(t) {
                                r[t] = i[t]
                            })), r) o.style[c] = r[c];
                        n.border = n.margin = n.padding = 0, n.display = "block", n.opacity = 1, t.addEventListener("loadedmetadata", s), window.addEventListener("optimizedResize", s), t.readyState >= 1 && (t.removeEventListener("loadedmetadata", s), s())
                    }

                    function s() {
                        var i = t.videoWidth / t.videoHeight,
                            r = o.clientWidth,
                            c = o.clientHeight,
                            s = r / c,
                            a = 0,
                            l = 0;
                        n.marginLeft = n.marginTop = 0, (i < s ? "contain" === e["object-fit"] : "cover" === e["object-fit"]) ? (a = c * i, l = r / i, n.width = Math.round(a) + "px", n.height = c + "px", "left" === e["object-position-x"] ? n.marginLeft = 0 : "right" === e["object-position-x"] ? n.marginLeft = Math.round(r - a) + "px" : n.marginLeft = Math.round((r - a) / 2) + "px") : (l = r / i, n.width = r + "px", n.height = Math.round(l) + "px", "top" === e["object-position-y"] ? n.marginTop = 0 : "bottom" === e["object-position-y"] ? n.marginTop = Math.round(c - l) + "px" : n.marginTop = Math.round((c - l) / 2) + "px"), t.autoplay && t.play()
                    }
                }
                i && o || (function(t) {
                    var e = -1;
                    t ? "length" in t || (t = [t]) : t = document.querySelectorAll("video");
                    for (; t[++e];) {
                        var n = c(t[e]);
                        (n["object-fit"] || n["object-position"]) && (n["object-fit"] = n["object-fit"] || "fill", s(t[e], n))
                    }
                }(t), function(t, e, n) {
                    n = n || window;
                    var i = !1,
                        o = null;
                    try {
                        o = new CustomEvent(e)
                    } catch (c) {
                        (o = document.createEvent("Event")).initEvent(e, !0, !0)
                    }
                    var r = function() {
                        i || (i = !0, requestAnimationFrame((function() {
                            n.dispatchEvent(o), i = !1
                        })))
                    };
                    n.addEventListener(t, r)
                }("resize", "optimizedResize"))
            })
        }
    }
]);