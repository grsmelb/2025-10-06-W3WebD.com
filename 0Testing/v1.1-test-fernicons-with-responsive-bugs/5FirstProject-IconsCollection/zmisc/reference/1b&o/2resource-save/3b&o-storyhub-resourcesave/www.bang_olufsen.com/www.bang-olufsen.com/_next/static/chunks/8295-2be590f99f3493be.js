(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8295, 484], {
        4860: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return g
                }
            });
            var n = i(27378),
                o = i(34869),
                a = i(71377),
                r = (0, i(41408).iv)(["&.o-compact-story-header{background-color:", ";.story-header-container{&.a-container,&.-padded{padding-top:138px;padding-bottom:40px;@media ", "{padding-top:236px;padding-bottom:120px;}}}.text-wrapper_logo{max-width:3.25rem;margin-bottom:8px;}.text-wrapper{display:flex;flex-direction:column;align-items:center;@media ", "{align-items:unset;}.title{width:66.67%;text-align:center;margin-bottom:16px;color:", ";@media ", "{text-align:left;width:75%;}@media ", "{width:100%;text-align:left;}}.subtitle{width:50%;text-align:center;margin-bottom:8px;color:", ";@media ", "{text-align:left;width:75%;}@media ", "{width:100%;text-align:left;}}.page-description{width:50%;text-align:center;@media ", "{text-align:left;width:75%;}@media ", "{width:100%;text-align:left;}p{color:", ";}}}.image-wrapper{position:relative;margin-left:16px;margin-right:16px;aspect-ratio:9/16;@media ", "{aspect-ratio:16/9;}@media ", "{margin-left:36px;margin-right:36px;}}.video-wrapper{position:relative;margin-left:16px;margin-right:16px;aspect-ratio:9/16;overflow:hidden;@media ", "{aspect-ratio:16/9;}@media ", "{margin-left:36px;margin-right:36px;}.pause-button-wrapper{right:1vw;}}}"], (function(e) {
                    return e.pageTitleData.backgroundColor || e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.pageTitleData.textColor || e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.pageTitleData.textColor || e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.pageTitleData.textColor || e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                l = i(6234),
                d = i(8103),
                c = i(17726),
                s = i(34919),
                u = i(38944),
                m = i(31357),
                v = i(24246),
                p = (0, l.Z)((function(e) {
                    var t = e.className,
                        i = e.data,
                        o = e.inlineStyle,
                        r = e.locale,
                        l = e.viewportInfo,
                        p = null === i || void 0 === i ? void 0 : i.get("title"),
                        g = null === i || void 0 === i ? void 0 : i.get("subtitle"),
                        h = null === i || void 0 === i ? void 0 : i.get("description"),
                        f = null === i || void 0 === i ? void 0 : i.get("descriptionRichText"),
                        x = (null === i || void 0 === i ? void 0 : i.getIn(["pageTitleItem", "mediaItem", "media"])) || (null === i || void 0 === i ? void 0 : i.getIn(["backgroundImage", "media"])),
                        y = (null === i || void 0 === i ? void 0 : i.getIn(["pageTitleItem", "mediaItem", "mediaType"])) || (null === i || void 0 === i ? void 0 : i.getIn(["backgroundImage", "mediaType"])),
                        b = null === i || void 0 === i ? void 0 : i.getIn(["pageTitleItem", "logoMedia"]),
                        w = b && b.get("media"),
                        j = (null === i || void 0 === i ? void 0 : i.getIn(["pageTitleItem", "mediaItem"])) || (null === i || void 0 === i ? void 0 : i.getIn(["backgroundImage"])),
                        I = (0, n.useState)(1),
                        S = I[0],
                        E = I[1],
                        N = (0, n.useRef)(null),
                        T = (0, n.useState)(!1),
                        k = T[0],
                        M = T[1],
                        C = null === l || void 0 === l ? void 0 : l.getIn(["isSmallerThan", "medium"]);
                    return (0, n.useEffect)((function() {
                        var e = new IntersectionObserver((function(e) {
                            null === e || void 0 === e || e.forEach((function(e) {
                                e.isIntersecting ? M(!0) : M(!1)
                            }))
                        }), {
                            threshold: .5
                        });
                        return null !== N && void 0 !== N && N.current && (null === e || void 0 === e || e.observe(null === N || void 0 === N ? void 0 : N.current)),
                            function() {
                                null !== N && void 0 !== N && N.current && (null === e || void 0 === e || e.unobserve(null === N || void 0 === N ? void 0 : N.current))
                            }
                    }), []), (0, n.useEffect)((function() {
                        var e = function() {
                            var e, t = null === N || void 0 === N || null === (e = N.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                                i = null === t || void 0 === t ? void 0 : t.top,
                                n = "medium" === (null === l || void 0 === l ? void 0 : l.get("equals")) || "small" === (null === l || void 0 === l ? void 0 : l.get("equals")),
                                o = n ? 1 - i / 6e3 : 1 - i / 8e3;
                            o = n ? Math.max(1, Math.min(1.1, o)) : Math.max(1, Math.min(1.05, o)), E(o)
                        };
                        return k && window.addEventListener("scroll", e, !1),
                            function() {
                                window.removeEventListener("scroll", e)
                            }
                    }), [k]), (0, v.jsxs)("div", {
                        className: "".concat(t, " o-compact-story-header"),
                        ref: N,
                        id: "story-header",
                        children: [(0, v.jsx)(a.Z, {
                            className: "story-header-container",
                            children: (0, v.jsxs)("div", {
                                className: "text-wrapper",
                                children: [b && (0, v.jsx)("div", {
                                    className: "text-wrapper_logo",
                                    children: (0, v.jsx)(s.Z, {
                                        media: w,
                                        size: m.Z.SIZES.XSMALL,
                                        transparent: !0,
                                        imgWidth: "63",
                                        imgHeight: "38"
                                    })
                                }), g && (0, v.jsx)("h2", {
                                    className: "h5 subtitle",
                                    children: g
                                }), p && (0, v.jsx)("h1", {
                                    className: "h2 title",
                                    children: p
                                }), h && (0, v.jsx)("div", {
                                    className: "b1 page-description",
                                    style: o,
                                    children: (0, v.jsx)(d.Z, {
                                        className: "b1",
                                        data: i,
                                        inlineStyle: o,
                                        locale: r
                                    })
                                }), f && (0, v.jsx)(c.Z, {
                                    data: f,
                                    className: "b1 page-description"
                                })]
                            })
                        }), x && "image" === y && (0, v.jsx)("div", {
                            className: "image-wrapper",
                            style: {
                                transform: "scale3d(".concat(S, ",").concat(S, ",1)"),
                                transformStyle: "preserve-3d"
                            },
                            children: (0, v.jsx)(s.Z, {
                                media: x,
                                objectFit: "cover",
                                layout: "fill",
                                contentfulImage: !0,
                                imgStyles: {
                                    transform: "scale3d(".concat(S, ",").concat(S, ",1)"),
                                    transformStyle: "preserve-3d"
                                },
                                className: "nxt-image"
                            })
                        }), x && "video" === y && (0, v.jsx)("div", {
                            className: "video-wrapper",
                            style: {
                                transform: "scale3d(".concat(S, ",").concat(S, ",1)"),
                                transformStyle: "preserve-3d"
                            },
                            children: (0, v.jsx)(u.Z, {
                                backgroundVideo: j,
                                videoInlineStyles: {
                                    transform: "scale3d(".concat(S, ",").concat(S, ",1)"),
                                    transformStyle: "preserve-3d"
                                },
                                alwaysShowPlayPauseButton: C
                            })
                        })]
                    })
                })),
                g = (0, o.Z)(p, r)
        },
        55915: function(e, t, i) {
            "use strict";
            i.d(t, {
                Z: function() {
                    return v
                }
            });
            var n = i(27378),
                o = i(60042),
                a = i.n(o),
                r = i(34869),
                l = (0, i(41408).iv)(["&.o-immersive-story-header{position:relative;.text-wrapper{display:flex;flex-direction:column;position:absolute;z-index:9;padding:88px 20px 72px;width:100%;max-width:1700px;margin:0 auto;pointer-events:none;@media ", "{padding:88px 40px 200px;}@media ", "{padding:144px 40px 200px;}@media ", "{align-items:unset;}.title{width:83.4%;margin-bottom:16px;color:", ";@media ", "{width:100%;}}.subtitle{width:50%;margin-bottom:8px;color:", ";@media ", "{width:100%;}}}.image-wrapper{position:relative;height:100vh;@media ", "{height:140vh;}.overlay{width:100%;height:100%;position:absolute;top:0;left:0;background:linear-gradient(180deg,#000 0%,rgb(0 0 0 / 0%) 100%);}}&.in-viewPort{.video-wrapper{.pause-button-wrapper{position:fixed;}}}.video-wrapper{position:relative;height:100vh;overflow:hidden;@media ", "{height:140vh;}.overlay{width:100%;height:100%;position:absolute;top:0;left:0;background:linear-gradient(180deg,#000 0%,rgb(0 0 0 / 0%) 100%);pointer-events:none;}}}"], (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                })),
                d = i(6234),
                c = i(34919),
                s = i(38944),
                u = i(24246),
                m = (0, d.Z)((function(e) {
                    var t = e.className,
                        i = e.data,
                        o = e.viewportInfo,
                        r = null === i || void 0 === i ? void 0 : i.get("title"),
                        l = null === i || void 0 === i ? void 0 : i.get("subtitle"),
                        d = (null === i || void 0 === i ? void 0 : i.getIn(["pageTitleItem", "mediaItem", "media"])) || (null === i || void 0 === i ? void 0 : i.getIn(["backgroundImage", "media"])),
                        m = (null === i || void 0 === i ? void 0 : i.getIn(["pageTitleItem", "mediaItem", "mediaType"])) || (null === i || void 0 === i ? void 0 : i.getIn(["backgroundImage", "mediaType"])),
                        v = (null === i || void 0 === i ? void 0 : i.getIn(["pageTitleItem", "mediaItem"])) || (null === i || void 0 === i ? void 0 : i.getIn(["backgroundImage"])),
                        p = null === o || void 0 === o ? void 0 : o.getIn(["isSmallerThan", "medium"]),
                        g = (0, n.useState)(1.2),
                        h = g[0],
                        f = g[1],
                        x = (0, n.useRef)(null),
                        y = (0, n.useState)(!1),
                        b = y[0],
                        w = y[1],
                        j = (0, n.useState)(.5),
                        I = j[0],
                        S = j[1],
                        E = (0, n.useState)(!1),
                        N = E[0],
                        T = E[1],
                        k = function() {
                            var e, t, i, n = null === x || void 0 === x || null === (e = x.current) || void 0 === e ? void 0 : e.getBoundingClientRect();
                            (null === n || void 0 === n ? void 0 : n.top) >= 0 && (null === n || void 0 === n ? void 0 : n.bottom) <= (null === (t = window) || void 0 === t ? void 0 : t.innerHeight) ? T(!0) : (null === n || void 0 === n ? void 0 : n.bottom) <= (null === (i = window) || void 0 === i ? void 0 : i.innerHeight) ? T(!1) : (null === n || void 0 === n || n.top, T(!0))
                        };
                    (0, n.useEffect)((function() {
                        var e = new IntersectionObserver((function(e) {
                            null === e || void 0 === e || e.forEach((function(e) {
                                e.isIntersecting ? w(!0) : w(!1)
                            }))
                        }), {
                            threshold: .7
                        });
                        return null !== x && void 0 !== x && x.current && (null === e || void 0 === e || e.observe(null === x || void 0 === x ? void 0 : x.current)), k(),
                            function() {
                                null !== x && void 0 !== x && x.current && (null === e || void 0 === e || e.unobserve(null === x || void 0 === x ? void 0 : x.current))
                            }
                    }), []), (0, n.useEffect)((function() {
                        var e = function() {
                            var e, t = null === x || void 0 === x || null === (e = x.current) || void 0 === e ? void 0 : e.getBoundingClientRect(),
                                i = null === t || void 0 === t ? void 0 : t.top,
                                n = i / 800,
                                o = 1.2 + i / 2e3;
                            o = Math.max(1, Math.min(1.2, o));
                            var a = .5 + n;
                            f(o), S(a), k()
                        };
                        return b && window.addEventListener("scroll", e, !1),
                            function() {
                                window.removeEventListener("scroll", e)
                            }
                    }), [b]);
                    var M = a()(t, "o-immersive-story-header", {
                        "in-viewPort": N
                    });
                    return (0, u.jsxs)("div", {
                        className: M,
                        id: "story-header",
                        children: [(l || r) && (0, u.jsxs)("div", {
                            className: "text-wrapper",
                            children: [l && (0, u.jsx)("h2", {
                                className: "h5 subtitle",
                                children: l
                            }), r && (0, u.jsx)("h1", {
                                className: "new-immersive h1A title",
                                children: r
                            })]
                        }), d && "image" === m && (0, u.jsxs)("div", {
                            className: "image-wrapper",
                            ref: x,
                            children: [(0, u.jsx)(c.Z, {
                                media: d,
                                objectFit: "cover",
                                layout: "fill",
                                contentfulImage: !0,
                                className: "nxt-img",
                                imgStyles: {
                                    transform: "scale3d(".concat(h, ",").concat(h, ",1)"),
                                    transformStyle: "preserve-3d"
                                }
                            }), (0, u.jsx)("div", {
                                className: "overlay",
                                style: {
                                    opacity: "".concat(I)
                                }
                            })]
                        }), d && "video" === m && (0, u.jsxs)("div", {
                            className: "video-wrapper",
                            ref: x,
                            children: [(0, u.jsx)(s.Z, {
                                backgroundVideo: v,
                                videoInlineStyles: {
                                    transform: "scale3d(".concat(h, ",").concat(h, ",1)"),
                                    transformStyle: "preserve-3d"
                                },
                                alwaysShowPlayPauseButton: p
                            }), (0, u.jsx)("div", {
                                className: "overlay",
                                style: {
                                    opacity: "".concat(I)
                                }
                            })]
                        })]
                    })
                })),
                v = (0, r.Z)(m, l)
        },
        20484: function(e) {
            "undefined" !== typeof e.exports && (e.exports = function(e) {
                "use strict";
                var t = navigator.userAgent.indexOf("Edge/") >= 0,
                    i = new Image,
                    n = "object-fit" in i.style && !t,
                    o = "object-position" in i.style && !t,
                    a = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;

                function r(e) {
                    for (var t = getComputedStyle(e).fontFamily, i = null, n = {}; null !== (i = a.exec(t));) n[i[1]] = i[2];
                    return n["object-position"] ? function(e) {
                        ~e["object-position"].indexOf("left") ? e["object-position-x"] = "left" : ~e["object-position"].indexOf("right") ? e["object-position-x"] = "right" : e["object-position-x"] = "center";
                        ~e["object-position"].indexOf("top") ? e["object-position-y"] = "top" : ~e["object-position"].indexOf("bottom") ? e["object-position-y"] = "bottom" : e["object-position-y"] = "center";
                        return e
                    }(n) : n
                }

                function l(e, t) {
                    if ("fill" !== t["object-fit"]) {
                        var i = e.style,
                            n = window.getComputedStyle(e),
                            o = document.createElement("object-fit");
                        o.appendChild(e.parentNode.replaceChild(o, e));
                        var a = {
                            height: "100%",
                            width: "100%",
                            boxSizing: "content-box",
                            display: "inline-block",
                            overflow: "hidden"
                        };
                        for (var r in "backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g, (function(e) {
                                a[e] = n[e]
                            })), a) o.style[r] = a[r];
                        i.border = i.margin = i.padding = 0, i.display = "block", i.opacity = 1, e.addEventListener("loadedmetadata", l), window.addEventListener("optimizedResize", l), e.readyState >= 1 && (e.removeEventListener("loadedmetadata", l), l())
                    }

                    function l() {
                        var n = e.videoWidth / e.videoHeight,
                            a = o.clientWidth,
                            r = o.clientHeight,
                            l = a / r,
                            d = 0,
                            c = 0;
                        i.marginLeft = i.marginTop = 0, (n < l ? "contain" === t["object-fit"] : "cover" === t["object-fit"]) ? (d = r * n, c = a / n, i.width = Math.round(d) + "px", i.height = r + "px", "left" === t["object-position-x"] ? i.marginLeft = 0 : "right" === t["object-position-x"] ? i.marginLeft = Math.round(a - d) + "px" : i.marginLeft = Math.round((a - d) / 2) + "px") : (c = a / n, i.width = a + "px", i.height = Math.round(c) + "px", "top" === t["object-position-y"] ? i.marginTop = 0 : "bottom" === t["object-position-y"] ? i.marginTop = Math.round(r - c) + "px" : i.marginTop = Math.round((r - c) / 2) + "px"), e.autoplay && e.play()
                    }
                }
                n && o || (function(e) {
                    var t = -1;
                    e ? "length" in e || (e = [e]) : e = document.querySelectorAll("video");
                    for (; e[++t];) {
                        var i = r(e[t]);
                        (i["object-fit"] || i["object-position"]) && (i["object-fit"] = i["object-fit"] || "fill", l(e[t], i))
                    }
                }(e), function(e, t, i) {
                    i = i || window;
                    var n = !1,
                        o = null;
                    try {
                        o = new CustomEvent(t)
                    } catch (r) {
                        (o = document.createEvent("Event")).initEvent(t, !0, !0)
                    }
                    var a = function() {
                        n || (n = !0, requestAnimationFrame((function() {
                            i.dispatchEvent(o), n = !1
                        })))
                    };
                    i.addEventListener(e, a)
                }("resize", "optimizedResize"))
            })
        }
    }
]);