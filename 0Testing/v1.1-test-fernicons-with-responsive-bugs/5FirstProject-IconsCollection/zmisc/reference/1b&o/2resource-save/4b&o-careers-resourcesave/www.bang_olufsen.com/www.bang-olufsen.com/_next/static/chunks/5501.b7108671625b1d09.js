(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [5501, 8944, 484], {
        38944: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return f
                }
            });
            var n = o(90849),
                i = o(60042),
                r = o.n(i),
                a = o(27378),
                l = o(2463),
                s = o(48500),
                c = o(6234),
                u = o(34869),
                d = (0, o(41408).iv)(["&.a-richMediaVideo{position:relative;width:100%;height:100%;&.setRatio{aspect-ratio:1/1;}.pause-button-wrapper{position:absolute;width:32px;height:32px;right:16px;bottom:16px;background-color:", ";z-index:", ";border-radius:50%;@media ", "{width:45px;height:45px;}&.show-btn{visibility:visible;}&.hide-btn{visibility:hidden;}&.-isSmallBtn{width:32px;height:32px;.-playPauseA11yButton{width:32px;height:32px;}}}&.isCarouselVideo{.pause-button-wrapper{@media ", "{bottom:36px;}@media ", "{bottom:8.5%;}}}.-playPauseA11yButton{z-index:", ";position:absolute;bottom:50%;right:50%;display:block;width:32px;height:32px;cursor:pointer;background-color:transparent;transform:translate(50%,50%);border-radius:50%;@media ", "{width:45px;height:45px;}&.-pause{background-image:url('/static-assets/images/common/video-pause-button.svg');background-position:center;background-repeat:no-repeat;}&.-play{background-image:url('/static-assets/images/common/video-play-button.svg');background-position:center;background-repeat:no-repeat;}.vjs-control-text{visibility:hidden;}}}"], (function(e) {
                    return "".concat(e.theme.colors.BEO_BLACK, "66")
                }), (function(e) {
                    return e.theme.zIndex.zCookiePopup
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.zIndex.zVideo
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                p = o(41605),
                m = o(24246);

            function g(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(o), !0).forEach((function(t) {
                        (0, n.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : g(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var v = (0, c.Z)((function(e) {
                    var t, o = e.backgroundVideo,
                        n = e.className,
                        i = e.isRichMediaVideoOnCategoryPageProductCardCarousel,
                        c = e.ratio,
                        u = e.storyAutoPlayed,
                        d = e.parentRef,
                        g = e.isSmallBtn,
                        v = e.isCarouselVideo,
                        f = e.videoInlineStyles,
                        b = e.alwaysShowPlayPauseButton,
                        x = (0, a.useState)(!1),
                        y = x[0],
                        j = x[1],
                        w = (0, a.useState)(!1),
                        C = w[0],
                        N = w[1],
                        O = (0, a.useRef)(null),
                        S = function(e) {
                            e.stopPropagation(), i && e.preventDefault(), t()
                        },
                        k = function(e) {
                            var t = null === O || void 0 === O ? void 0 : O.current,
                                o = null === t || void 0 === t ? void 0 : t.getElementsByClassName("pause-button-wrapper"),
                                n = o && (null === o || void 0 === o ? void 0 : o.length) && o[0];
                            n && !t.contains(e.relatedTarget) && (n.classList.remove("show-btn"), n.classList.add("hide-btn"))
                        };
                    (0, a.useEffect)((function() {
                        var e = null === O || void 0 === O ? void 0 : O.current;
                        return e.addEventListener("focusout", k),
                            function() {
                                e.removeEventListener("focusout", k)
                            }
                    }), []);
                    var I = function() {
                        var e = null === O || void 0 === O ? void 0 : O.current,
                            t = null === e || void 0 === e ? void 0 : e.getElementsByClassName("pause-button-wrapper"),
                            o = t && (null === t || void 0 === t ? void 0 : t.length) && t[0];
                        o && (o.classList.remove("hide-btn"), o.classList.add("show-btn"))
                    };
                    (0, a.useEffect)((function() {
                        var e = null === d || void 0 === d ? void 0 : d.current;
                        return e && (e.addEventListener("mouseover", I), e.addEventListener("mouseout", k)),
                            function() {
                                e && (e.addEventListener("mouseover", I), e.addEventListener("mouseout", k))
                            }
                    }), []);
                    var P = null === o || void 0 === o ? void 0 : o.getIn(["media", "defaultAssetUrl"]),
                        L = u || (null === o || void 0 === o ? void 0 : o.getIn(["media", "autoPlay"])),
                        E = null === o || void 0 === o ? void 0 : o.getIn(["media", "enableLoop"]),
                        _ = u || (null === o || void 0 === o ? void 0 : o.getIn(["media", "autoPlay"])),
                        z = {
                            mediaItem: o,
                            trackVideo: !1,
                            controls: !_
                        },
                        A = C || b ? "show-btn" : "hide-btn",
                        Z = r()(n, "a-richMediaVideo", {
                            setRatio: c,
                            isCarouselVideo: v
                        });
                    return (0, m.jsxs)("div", {
                        className: Z,
                        ref: O,
                        onMouseOver: function(e) {
                            e.stopPropagation(), C || N(!0)
                        },
                        onMouseLeave: function(e) {
                            e.stopPropagation(), C && N(!1)
                        },
                        tabIndex: "0",
                        onFocus: function(e) {
                            return I()
                        },
                        role: "group",
                        "aria-label": "Rich Media Video",
                        children: [_ && (0, m.jsx)("div", {
                            className: "pause-button-wrapper ".concat(A, " ").concat(g ? "-isSmallBtn" : ""),
                            tabIndex: "0",
                            role: "button",
                            onClick: S,
                            onKeyUp: function(e) {
                                return (null === e || void 0 === e ? void 0 : e.keyCode) === p.q70 && S(e)
                            },
                            children: (0, m.jsx)(s.Z, {
                                isPaused: y,
                                tabIndex: "-1"
                            })
                        }), (0, m.jsx)(l.default, h({
                            className: "-staggerIn -stagger0",
                            autoplay: L,
                            loop: E,
                            setPlayPauseOptions: function(e) {
                                t = e
                            },
                            setPlayPauseState: function(e) {
                                j(e)
                            },
                            isRichMediaVideoOnCategoryPageProductCardCarousel: i,
                            videoInlineStyles: f
                        }, z), P)]
                    })
                })),
                f = (0, u.Z)(v, d)
        },
        85060: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return m
                }
            });
            var n = o(60042),
                i = o.n(n),
                r = o(34869),
                a = o(6234),
                l = o(41408),
                s = o(83030),
                c = (0, l.iv)(["&.o-productCardTags{display:flex;flex-direction:column;.product-card-tag{display:inline-block;align-self:flex-start;height:24px;border-radius:2px;font-size:", ";line-height:", ";padding:4px 8px;background:", ";color:", ";font-weight:", ";&.light{color:", ";background:", ";}&.discounted{padding:4px 8px;background:", ";color:", ";}}.alignment{height:auto;text-align:right;}}"], (function(e) {
                    return (0, s.hO)(e.theme.fonts.fontSize.body.small.quinary)
                }), (function(e) {
                    return (0, s.hO)(e.theme.fonts.lineHeight.custom.custom_6)
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.fonts.fontWeight.medium
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.colors.WHITE
                })),
                u = o(24246),
                d = "light",
                p = (0, a.Z)((function(e) {
                    var t = e.className,
                        o = e.data,
                        n = e.color,
                        r = e.productCard,
                        a = i()(t, "o-productCardTags");
                    return (0, u.jsx)("div", {
                        className: a,
                        children: o && o.map((function(e) {
                            return function(e) {
                                var t = null === e || void 0 === e ? void 0 : e.get("title"),
                                    o = null === e || void 0 === e ? void 0 : e.get("isDiscounted"),
                                    a = null === e || void 0 === e ? void 0 : e.get("tagTheme"),
                                    l = i()("product-card-tag", {
                                        light: !o && (n === d || a === d),
                                        discounted: o,
                                        alignment: r
                                    });
                                return (0, u.jsx)("span", {
                                    className: l,
                                    children: t
                                }, t)
                            }(e)
                        }))
                    })
                })),
                m = (0, r.Z)(p, c)
        },
        70678: function(e, t, o) {
            "use strict";
            o.r(t), o.d(t, {
                default: function() {
                    return q
                }
            });
            var n = o(60042),
                i = o.n(n),
                r = o(27378),
                a = o(34869),
                l = o(71377),
                s = o(90849),
                c = o(34051),
                u = o(31357),
                d = o(83030),
                p = o(41408),
                m = function(e) {
                    return e.textColor || e.theme.colors.BEO_WHITE
                },
                g = (0, p.iv)(["&.o-mosaic1x1{height:auto;position:relative;background-color:", ";&.isNonclickable{&::after{display:none;}}&:hover::after{content:'';width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgb(0 0 0 / 40%);transition:all 0.3s;}.bg_wrapper{height:100%;width:100%;position:relative;.product-tags{position:absolute;top:8px;left:8px;z-index:1;@media ", "{top:16px;left:16px;}}.video-wrapper{position:relative;aspect-ratio:1/1;height:100%;width:100%;}}.content_wrapper{width:100%;height:100%;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;z-index:", ";.title{@media ", "{position:absolute;top:38%;}p{color:", ";margin-bottom:0;}}.subtitle{position:relative;p{text-align:center;color:", ";font-weight:", ";font-size:", ";line-height:", ";letter-spacing:0.5px;@media ", "{font-weight:", ";font-size:", ";line-height:26px;letter-spacing:0.2px;}}&.-isFastpen{font-family:", ";p{text-align:center;font-weight:", ";font-size:34px;line-height:", ";letter-spacing:-0.5px;color:", ";@media ", "{letter-spacing:2px;font-size:22px;line-height:26px;}}}}.hoverSubtitle{position:relative;p{text-align:center;color:", ";font-weight:", ";font-size:", ";line-height:", ";letter-spacing:0.5px;@media ", "{font-weight:", ";font-size:", ";line-height:26px;letter-spacing:0.2px;}}&.-isFastpen{font-family:", ";p{text-align:center;font-weight:", ";font-size:34px;line-height:", ";letter-spacing:-0.5px;color:", ";@media ", "{letter-spacing:2px;font-size:22px;line-height:26px;}}}}.subtitleUnderline{content:'';position:absolute;width:80%;height:1px;border-bottom:1.5px solid ", ";top:61%;@media ", "{top:57%;width:60%;}@media ", "{top:55.5%;}}}}"], (function(e) {
                    return e.backgroundColor || e.theme.colors.BACKGROUND.TRANPARENT
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.zIndex.zDefault
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), m, m, (function(e) {
                    return e.theme.fonts.fontWeight.medium
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.heading.large.h4)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_14)
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.large.primary)
                }), (function(e) {
                    return e.theme.fonts.fastpen
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_14)
                }), m, (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), m, (function(e) {
                    return e.theme.fonts.fontWeight.medium
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.heading.large.h4)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_14)
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.large.primary)
                }), (function(e) {
                    return e.theme.fonts.fastpen
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_14)
                }), m, (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), m, (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                h = o(6234),
                v = o(5047),
                f = o(85060),
                b = "mosaic2x2",
                x = "mosaic1x1",
                y = "mosaicstory1x1",
                j = "mosaicstory2x2",
                w = "mosaicNonClickable1x1",
                C = "mosaicNonClickable2x2",
                N = "heroempty",
                O = o(50813),
                S = o(21318),
                k = o(68154),
                I = o(48787),
                P = o(38944),
                L = o(24246);

            function E(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function _(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(o), !0).forEach((function(t) {
                        (0, s.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : E(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var z = (0, h.Z)((function(e) {
                    var t, o, n, a, l = e.item,
                        s = e.className,
                        d = e.locale,
                        p = e.country,
                        m = e.deviceInfo,
                        g = e.viewportInfo,
                        h = e.type,
                        b = e.position,
                        j = e.generateAriaLabelForMosiac,
                        C = null === l || void 0 === l ? void 0 : l.get("title"),
                        N = null === l || void 0 === l ? void 0 : l.get("subtitle"),
                        E = null === l || void 0 === l ? void 0 : l.get("hoverSubtitle"),
                        z = null === l || void 0 === l ? void 0 : l.get("subtitleFont"),
                        A = null === l || void 0 === l ? void 0 : l.get("subtitleFontDecoration"),
                        Z = null === l || void 0 === l ? void 0 : l.getIn(["backgroundImage", "media"]),
                        M = null === l || void 0 === l ? void 0 : l.getIn(["backgroundVideo"]),
                        D = null === M || void 0 === M ? void 0 : M.get("autoPlay"),
                        R = null === M || void 0 === M ? void 0 : M.get("enableLoop"),
                        B = i()(s, "o-mosaic1x1", {
                            isNonclickable: h === w
                        }),
                        T = null === l || void 0 === l ? void 0 : l.getIn(["item", "0"]),
                        Q = null === (t = T) || void 0 === t ? void 0 : t.get("productDetails"),
                        F = null === (o = Q) || void 0 === o ? void 0 : o.get("variantKey"),
                        V = null === p || void 0 === p ? void 0 : p.toLowerCase(),
                        H = (0, r.useState)(!1),
                        W = H[0],
                        U = H[1],
                        K = null === (n = T) || void 0 === n ? void 0 : n.get("callToAction"),
                        q = (0, r.useRef)(null),
                        J = m && m.getIn(["featureSupport", "touch"]),
                        G = g && g.getIn(["isSmallerThan", "small"]),
                        Y = function() {
                            var e, t, o, n, i = [],
                                r = null === (e = T) || void 0 === e ? void 0 : e.get("hideDiscountTag"),
                                a = null === (t = Q) || void 0 === t ? void 0 : t.getIn(["price", "centAmount"]),
                                l = null === (o = Q) || void 0 === o ? void 0 : o.getIn(["discountedPrice", "centAmount"]);
                            if (!0 !== r && l) {
                                var s = Math.floor(Math.abs(l - a) / a * 100);
                                i.push({
                                    title: "-".concat(s, "%"),
                                    isDiscounted: !0
                                })
                            }
                            var c = null === (n = T) || void 0 === n ? void 0 : n.getIn(["variantTag", "value"]);
                            return c && i.push({
                                title: c
                            }), G && i.length > 0 ? [i[0]] : i
                        }(),
                        X = null === (a = T) || void 0 === a ? void 0 : a.get("tagTheme"),
                        $ = i()("subtitle", {
                            "-isFastpen": "fastpen" === z
                        });
                    return (0, L.jsx)("div", {
                        className: B,
                        onMouseEnter: function() {
                            return J ? null : void U(!0)
                        },
                        onMouseLeave: function() {
                            return J ? null : void U(!1)
                        },
                        ref: q,
                        children: h === w ? (0, L.jsxs)(L.Fragment, {
                            children: [" ", (0, L.jsxs)("div", {
                                className: "bg_wrapper",
                                children: [(0, L.jsx)("div", {
                                    className: "product-tags",
                                    children: (0, L.jsx)(f.Z, {
                                        data: (0, c.fromJS)(Y),
                                        color: X
                                    })
                                }), M ? (0, L.jsx)("div", {
                                    className: "video-wrapper",
                                    children: (0, L.jsx)(P.Z, {
                                        backgroundVideo: M,
                                        loop: R,
                                        autoplay: D,
                                        controls: !1,
                                        isRichMediaVideoOnCategoryPageProductCardCarousel: !0,
                                        alwaysShowPlayPauseButton: !0,
                                        parentRef: q,
                                        isSmallBtn: !0
                                    })
                                }) : (0, L.jsx)(u.Z, {
                                    "data-testid": "ResponsiveImage",
                                    media: Z,
                                    ratio: [1, 1],
                                    size: u.Z.SIZES.SMALL,
                                    transparent: !0
                                })]
                            }), (0, L.jsxs)("div", {
                                className: "content_wrapper",
                                children: [C && (0, L.jsx)("div", {
                                    className: "title",
                                    children: (0, L.jsx)("p", {
                                        className: "h5",
                                        children: C
                                    })
                                }), !W && N && (0, L.jsx)("div", {
                                    className: $,
                                    children: (0, L.jsx)("p", {
                                        children: N
                                    })
                                }), W && E && (0, L.jsx)("div", {
                                    className: "hoverSubtitle",
                                    children: (0, L.jsx)("p", {
                                        children: E
                                    })
                                }), "underline" === A && N && E && (0, L.jsx)("div", {
                                    className: "subtitleUnderline"
                                })]
                            })]
                        }) : (0, L.jsxs)(v.Z, _(_({
                            cta: K
                        }, function() {
                            var e;
                            if (h === y) {
                                var t, o, n, i = null === (t = T) || void 0 === t ? void 0 : t.get("slug"),
                                    r = null === (o = T) || void 0 === o ? void 0 : o.getIn(["tags", "0", "key"]),
                                    a = null === (n = T) || void 0 === n ? void 0 : n.get("corporateParentPage");
                                e = a ? {
                                    href: {
                                        pathname: "/[language]/[country]/[slug]/[tag]/[corporateDetailSlug]",
                                        query: {
                                            slug: a,
                                            language: d,
                                            country: V,
                                            tag: r,
                                            corporateDetailSlug: i
                                        }
                                    },
                                    ariaLabel: j(i, b)
                                } : {
                                    href: {
                                        pathname: "/[language]/[country]/story/[slug]",
                                        query: {
                                            slug: i,
                                            language: d,
                                            country: V
                                        }
                                    },
                                    ariaLabel: j(i, b)
                                }
                            } else if (h === x) {
                                var l, s, c = null === (l = Q) || void 0 === l ? void 0 : l.get("slug"),
                                    u = null === (s = Q) || void 0 === s ? void 0 : s.get("categorySlug");
                                e = {
                                    className: "".concat(B, "__link"),
                                    productLink: "/".concat(d, "/").concat(V, "/").concat(u, "/").concat(c),
                                    href: {
                                        pathname: "/[language]/[country]/[categoriesSlug]/[slug]",
                                        query: {
                                            locale: d,
                                            country: V,
                                            variant: F,
                                            slug: c,
                                            categoriesSlug: u
                                        }
                                    },
                                    ariaLabel: j(c, b)
                                }
                            }
                            if (K) {
                                var m = null === K || void 0 === K ? void 0 : K.get("url"),
                                    g = null === K || void 0 === K ? void 0 : K.get("target");
                                m = (0, k.httpUrlCheck)(m) ? m : (0, I.LK)({
                                    pathname: m,
                                    query: {
                                        language: d,
                                        country: p.toLowerCase()
                                    }
                                }), e = {
                                    className: "".concat(B, "__link"),
                                    href: m,
                                    target: g || "_self"
                                }
                            }
                            return e
                        }()), {}, {
                            onClick: function() {
                                if (h === y) {
                                    var e = {
                                        eventName: O.cHh,
                                        section: O.Amw,
                                        subSection: O.B0k,
                                        selection: C ? "".concat(null === C || void 0 === C ? void 0 : C.toLowerCase(), " ").concat(null === N || void 0 === N ? void 0 : N.toLowerCase()) : ""
                                    };
                                    (0, S.Cm)(e)
                                } else if (h === x) {
                                    var t, o, n, i = {
                                        eventName: O.cHh,
                                        section: O.tIE,
                                        subSection: O.B0k,
                                        selection: C ? "".concat(null === C || void 0 === C ? void 0 : C.toLowerCase(), " ").concat(null === N || void 0 === N ? void 0 : N.toLowerCase()) : ""
                                    };
                                    (0, S.Cm)(i), Q = null === (t = Q) || void 0 === t ? void 0 : t.setIn(["0", "position"], b);
                                    var r = (0, c.fromJS)([Q]);
                                    T = null === (o = T) || void 0 === o ? void 0 : o.set("variants", r);
                                    var a = null === (n = Q) || void 0 === n ? void 0 : n.getIn(["price", "currencyCode"]),
                                        l = (0, c.fromJS)([T]);
                                    (0, S.av)({
                                        productDetails: l,
                                        listName: O.tIE,
                                        event: O.Ceb,
                                        action: "click",
                                        initialPageData: {
                                            currency: a
                                        },
                                        availableQuant: !0
                                    })
                                }
                            },
                            children: [(0, L.jsxs)("div", {
                                className: "bg_wrapper",
                                children: [(0, L.jsx)("div", {
                                    className: "product-tags",
                                    children: (0, L.jsx)(f.Z, {
                                        data: (0, c.fromJS)(Y),
                                        color: X
                                    })
                                }), M ? (0, L.jsx)("div", {
                                    className: "video-wrapper",
                                    children: (0, L.jsx)(P.Z, {
                                        backgroundVideo: M,
                                        loop: R,
                                        autoplay: D,
                                        controls: !1,
                                        isRichMediaVideoOnCategoryPageProductCardCarousel: !0,
                                        parentRef: q,
                                        isSmallBtn: !0
                                    })
                                }) : (0, L.jsx)(u.Z, {
                                    "data-testid": "ResponsiveImage",
                                    media: Z,
                                    ratio: [1, 1],
                                    size: u.Z.SIZES.SMALL,
                                    transparent: !0
                                })]
                            }), (0, L.jsxs)("div", {
                                className: "content_wrapper",
                                children: [C && (0, L.jsx)("div", {
                                    className: "title",
                                    children: (0, L.jsx)("p", {
                                        className: "h5",
                                        children: C
                                    })
                                }), !W && N && (0, L.jsx)("div", {
                                    className: $,
                                    children: (0, L.jsx)("p", {
                                        children: N
                                    })
                                }), W && E && (0, L.jsx)("div", {
                                    className: "hoverSubtitle",
                                    children: (0, L.jsx)("p", {
                                        children: E
                                    })
                                }), "underline" === A && N && E && (0, L.jsx)("div", {
                                    className: "subtitleUnderline"
                                })]
                            })]
                        }))
                    })
                })),
                A = (0, a.Z)(z, g),
                Z = function(e) {
                    return e.textColor || e.theme.colors.BEO_WHITE
                },
                M = (0, p.iv)(["&.o-mosaic2x2{position:relative;background-color:", ";width:100%;height:100%;&.isNonclickable{&::after{display:none;}}&:hover::after{content:'';width:100%;height:100%;position:absolute;top:0;left:0;background-color:rgba(0 0 0 / 40%);}.bg_wrapper{position:relative;width:100%;height:100%;aspect-ratio:1/1;.product-tags{position:absolute;top:8px;left:8px;z-index:1;@media ", "{top:24px;left:24px;}}.video-wrapper{position:relative;aspect-ratio:1/1;height:100%;width:100%;}}.content_wrapper{width:100%;height:100%;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);display:flex;flex-direction:column;align-items:center;z-index:", ";.title{@media ", "{position:absolute;top:41%;}p{color:", ";margin-bottom:0;}}.subtitle{position:relative;p{color:", ";text-align:center;font-weight:", ";font-size:", ";line-height:", ";letter-spacing:0.5px;@media ", "{font-size:24px;line-height:28px;}}&.-isFastpen{p{text-align:center;font-family:", ";font-weight:", ";font-size:34px;line-height:28px;letter-spacing:0.5px;color:", ";@media ", "{letter-spacing:unset;font-size:58px;line-height:70px;}}}}.hoverSubtitle{position:relative;p{text-align:center;color:", ";font-weight:", ";font-size:", ";line-height:", ";letter-spacing:0.5px;@media ", "{font-size:24px;line-height:28px;}}&.-isFastpen{p{text-align:center;font-family:", ";font-weight:", ";font-size:34px;line-height:28px;letter-spacing:0.5px;color:", ";@media ", "{letter-spacing:unset;font-size:58px;line-height:70px;}}}}.subtitleUnderline{content:'';position:absolute;width:80%;height:1px;border-bottom:1.5px solid ", ";top:57.5%;@media ", "{top:55%;width:60%;}@media ", "{top:55%;}}}}"], (function(e) {
                    return e.backgroundColor || e.theme.colors.BACKGROUND.TRANPARENT
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.zIndex.zDefault
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), Z, Z, (function(e) {
                    return e.theme.fonts.fontWeight.medium
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.heading.small.h0)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_22)
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.fonts.fastpen
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), Z, (function(e) {
                    return e.theme.mediaQuery.small
                }), Z, (function(e) {
                    return e.theme.fonts.fontWeight.medium
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.heading.small.h0)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_22)
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.fonts.fastpen
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), Z, (function(e) {
                    return e.theme.mediaQuery.small
                }), Z, (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                D = o(74661);

            function R(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, n)
                }
                return o
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(o), !0).forEach((function(t) {
                        (0, s.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : R(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var T = (0, h.Z)((function(e) {
                    var t, o, n, a, l = e.item,
                        s = e.className,
                        u = e.locale,
                        d = e.country,
                        p = e.deviceInfo,
                        m = e.type,
                        g = e.position,
                        h = e.generateAriaLabelForMosiac,
                        x = null === l || void 0 === l ? void 0 : l.get("title"),
                        y = null === l || void 0 === l ? void 0 : l.get("subtitle"),
                        w = null === l || void 0 === l ? void 0 : l.get("subtitleFont"),
                        N = null === l || void 0 === l ? void 0 : l.get("subtitleFontDecoration"),
                        E = null === l || void 0 === l ? void 0 : l.getIn(["backgroundImage", "media"]),
                        _ = null === l || void 0 === l ? void 0 : l.getIn(["backgroundVideo"]),
                        z = null === _ || void 0 === _ ? void 0 : _.get("autoPlay"),
                        A = null === _ || void 0 === _ ? void 0 : _.get("enableLoop"),
                        Z = i()(s, "o-mosaic2x2", {
                            isNonclickable: m === C
                        }),
                        M = null === l || void 0 === l ? void 0 : l.getIn(["item", "0"]),
                        R = null === (t = M) || void 0 === t ? void 0 : t.get("productDetails"),
                        T = null === (o = R) || void 0 === o ? void 0 : o.get("variantKey"),
                        Q = null === d || void 0 === d ? void 0 : d.toLowerCase(),
                        F = null === l || void 0 === l ? void 0 : l.get("hoverSubtitle"),
                        V = (0, r.useState)(!1),
                        H = V[0],
                        W = V[1],
                        U = null === (n = M) || void 0 === n ? void 0 : n.get("callToAction"),
                        K = (0, r.useRef)(null),
                        q = p && p.getIn(["featureSupport", "touch"]),
                        J = function() {
                            var e, t, o, n, i = [],
                                r = null === (e = M) || void 0 === e ? void 0 : e.get("hideDiscountTag"),
                                a = null === (t = R) || void 0 === t ? void 0 : t.getIn(["price", "centAmount"]),
                                l = null === (o = R) || void 0 === o ? void 0 : o.getIn(["discountedPrice", "centAmount"]);
                            if (!0 !== r && l) {
                                var s = Math.floor(Math.abs(l - a) / a * 100);
                                i.push({
                                    title: "-".concat(s, "%"),
                                    isDiscounted: !0
                                })
                            }
                            var c = null === (n = M) || void 0 === n ? void 0 : n.getIn(["variantTag", "value"]);
                            return c && i.push({
                                title: c
                            }), i
                        }(),
                        G = null === (a = M) || void 0 === a ? void 0 : a.get("tagTheme"),
                        Y = i()("subtitle", {
                            "-isFastpen": "fastpen" === w
                        });
                    return (0, L.jsx)("div", {
                        className: Z,
                        onMouseEnter: function() {
                            return q ? null : void W(!0)
                        },
                        onMouseLeave: function() {
                            return q ? null : void W(!1)
                        },
                        ref: K,
                        children: m === C ? (0, L.jsxs)(L.Fragment, {
                            children: [(0, L.jsxs)("div", {
                                className: "bg_wrapper",
                                children: [(0, L.jsx)("div", {
                                    className: "product-tags",
                                    children: (0, L.jsx)(f.Z, {
                                        data: (0, c.fromJS)(J),
                                        color: G
                                    })
                                }), _ ? (0, L.jsx)("div", {
                                    className: "video-wrapper",
                                    children: (0, L.jsx)(P.Z, {
                                        backgroundVideo: _,
                                        loop: A,
                                        autoplay: z,
                                        controls: !1,
                                        isRichMediaVideoOnCategoryPageProductCardCarousel: !0,
                                        parentRef: K,
                                        isSmallBtn: !0
                                    })
                                }) : (0, L.jsx)(D.Z, {
                                    "data-testid": "ResponsiveImage",
                                    media: E,
                                    layout: "fill",
                                    objectFit: "cover",
                                    contentfulImage: !0
                                })]
                            }), (0, L.jsxs)("div", {
                                className: "content_wrapper",
                                children: [x && (0, L.jsx)("div", {
                                    className: "title",
                                    children: (0, L.jsx)("p", {
                                        className: "h5",
                                        children: x
                                    })
                                }), !H && y && (0, L.jsx)("div", {
                                    className: Y,
                                    children: (0, L.jsx)("p", {
                                        children: y
                                    })
                                }), H && F && (0, L.jsx)("div", {
                                    className: "hoverSubtitle",
                                    children: (0, L.jsx)("p", {
                                        children: F
                                    })
                                }), "underline" === N && (0, L.jsx)("div", {
                                    className: "subtitleUnderline"
                                })]
                            })]
                        }) : (0, L.jsxs)(v.Z, B(B({
                            cta: U
                        }, function() {
                            var e;
                            if (m === j) {
                                var t, o, n, i = null === (t = M) || void 0 === t ? void 0 : t.get("slug"),
                                    r = null === (o = M) || void 0 === o ? void 0 : o.getIn(["tags", "0", "key"]),
                                    a = null === (n = M) || void 0 === n ? void 0 : n.get("corporateParentPage");
                                e = a ? {
                                    href: {
                                        pathname: "/[language]/[country]/[slug]/[tag]/[corporateDetailSlug]",
                                        query: {
                                            slug: a,
                                            language: u,
                                            country: Q,
                                            tag: r,
                                            corporateDetailSlug: i
                                        }
                                    },
                                    ariaLabel: h(i, g)
                                } : {
                                    href: {
                                        pathname: "/[language]/[country]/story/[slug]",
                                        query: {
                                            slug: i,
                                            language: u,
                                            country: Q
                                        }
                                    },
                                    ariaLabel: h(i, g)
                                }
                            } else if (m === b) {
                                var l, s, c = null === (l = R) || void 0 === l ? void 0 : l.get("slug"),
                                    p = null === (s = R) || void 0 === s ? void 0 : s.get("categorySlug");
                                e = {
                                    className: "".concat(Z, "__link"),
                                    productLink: "/".concat(u, "/").concat(Q, "/").concat(p, "/").concat(c),
                                    href: {
                                        pathname: "/[language]/[country]/[categoriesSlug]/[slug]",
                                        query: {
                                            locale: u,
                                            country: Q,
                                            variant: T,
                                            slug: c,
                                            categoriesSlug: p
                                        }
                                    },
                                    ariaLabel: h(c, g)
                                }
                            }
                            if (U) {
                                var v = null === U || void 0 === U ? void 0 : U.get("url"),
                                    f = null === U || void 0 === U ? void 0 : U.get("target");
                                v = (0, k.httpUrlCheck)(v) ? v : (0, I.LK)({
                                    pathname: v,
                                    query: {
                                        language: u,
                                        country: d.toLowerCase()
                                    }
                                }), e = {
                                    className: "".concat(Z, "__link"),
                                    href: v,
                                    target: f || "_self"
                                }
                            }
                            return e
                        }()), {}, {
                            forceClick: !0,
                            onClick: function() {
                                if (m === b) {
                                    var e, t, o, n = {
                                        eventName: O.cHh,
                                        section: O.tIE,
                                        subSection: O.B0k,
                                        selection: x ? "".concat(null === x || void 0 === x ? void 0 : x.toLowerCase(), " ").concat(null === y || void 0 === y ? void 0 : y.toLowerCase()) : ""
                                    };
                                    (0, S.Cm)(n), R = null === (e = R) || void 0 === e ? void 0 : e.setIn(["0", "position"], g);
                                    var i = (0, c.fromJS)([R]);
                                    M = null === (t = M) || void 0 === t ? void 0 : t.set("variants", i);
                                    var r = null === (o = R) || void 0 === o ? void 0 : o.getIn(["price", "currencyCode"]),
                                        a = (0, c.fromJS)([M]);
                                    (0, S.av)({
                                        productDetails: a,
                                        listName: O.tIE,
                                        event: O.Ceb,
                                        action: "click",
                                        initialPageData: {
                                            currency: r
                                        },
                                        availableQuant: !0
                                    })
                                } else if (m === j) {
                                    var l = {
                                        eventName: O.cHh,
                                        section: O.Amw,
                                        subSection: O.B0k,
                                        selection: x ? "".concat(null === x || void 0 === x ? void 0 : x.toLowerCase(), " ").concat(null === y || void 0 === y ? void 0 : y.toLowerCase()) : ""
                                    };
                                    (0, S.Cm)(l)
                                }
                            },
                            children: [(0, L.jsxs)("div", {
                                className: "bg_wrapper",
                                children: [(0, L.jsx)("div", {
                                    className: "product-tags",
                                    children: (0, L.jsx)(f.Z, {
                                        data: (0, c.fromJS)(J),
                                        color: G
                                    })
                                }), _ ? (0, L.jsx)("div", {
                                    className: "video-wrapper",
                                    children: (0, L.jsx)(P.Z, {
                                        backgroundVideo: _,
                                        loop: A,
                                        autoplay: z,
                                        controls: !1,
                                        isRichMediaVideoOnCategoryPageProductCardCarousel: !0,
                                        parentRef: K,
                                        isSmallBtn: !0
                                    })
                                }) : (0, L.jsx)(D.Z, {
                                    "data-testid": "ResponsiveImage",
                                    media: E,
                                    layout: "fill",
                                    objectFit: "cover",
                                    contentfulImage: !0
                                })]
                            }), (0, L.jsxs)("div", {
                                className: "content_wrapper",
                                children: [x && (0, L.jsx)("div", {
                                    className: "title",
                                    children: (0, L.jsx)("p", {
                                        className: "h5",
                                        children: x
                                    })
                                }), !H && y && (0, L.jsx)("div", {
                                    className: Y,
                                    children: (0, L.jsx)("p", {
                                        children: y
                                    })
                                }), H && F && (0, L.jsx)("div", {
                                    className: "hoverSubtitle",
                                    children: (0, L.jsx)("p", {
                                        children: F
                                    })
                                }), "underline" === N && (0, L.jsx)("div", {
                                    className: "subtitleUnderline"
                                })]
                            })]
                        }))
                    })
                })),
                Q = (0, a.Z)(T, M),
                F = (0, p.iv)(["&.o-mosaicEmpty{background-color:", ";height:100%;}"], (function(e) {
                    return e.backgroundColor || e.theme.colors.BACKGROUND.TRANPARENT
                })),
                V = (0, h.Z)((function(e) {
                    var t = e.className,
                        o = i()(t, "o-mosaicEmpty");
                    return (0, L.jsx)("div", {
                        className: o
                    })
                })),
                H = (0, a.Z)(V, F),
                W = function(e) {
                    var t = e.item,
                        o = e.itemIndex,
                        n = e.className,
                        r = e.locale,
                        a = e.country,
                        l = e.deviceInfo,
                        s = e.cmsLabels,
                        c = e.viewportInfo,
                        u = null === t || void 0 === t ? void 0 : t.get("backgroundColor"),
                        d = null === t || void 0 === t ? void 0 : t.get("textColor"),
                        p = t.get("cardType"),
                        m = i()(n, {
                            grid_mosiac2x2: p === b || p === j || p === C,
                            grid_mosiac1x1: p === x || p === y || p === w,
                            grid_mosiacEmpty: p === N
                        }),
                        g = function(e, t) {
                            var o = null === e || void 0 === e ? void 0 : e.split("?variant="),
                                n = o && o.length && 2 === o.length ? "".concat(o[0], " ").concat(o[1]) : "".concat(e);
                            return "Card at position:  ".concat(t, " :  ").concat(n)
                        };
                    return (0, L.jsxs)("li", {
                        className: m,
                        children: [(p === b || p === j || p === C) && (0, L.jsx)(Q, {
                            item: t,
                            locale: r,
                            country: a,
                            deviceInfo: l,
                            backgroundColor: u,
                            textColor: d,
                            cmsLabels: s,
                            viewportInfo: c,
                            type: p,
                            position: o,
                            generateAriaLabelForMosiac: g
                        }), (p === x || p === y || p === w) && (0, L.jsx)(A, {
                            item: t,
                            locale: r,
                            country: a,
                            deviceInfo: l,
                            backgroundColor: u,
                            textColor: d,
                            cmsLabels: s,
                            viewportInfo: c,
                            type: p,
                            position: o,
                            generateAriaLabelForMosiac: g
                        }), p === N && (0, L.jsx)(H, {
                            item: t,
                            locale: r,
                            country: a,
                            deviceInfo: l,
                            backgroundColor: u,
                            textColor: d,
                            type: p
                        })]
                    }, "".concat(p, "_").concat(o))
                },
                U = (0, p.iv)(["&.o-mosaicListing_main{background-color:", ";.o-mosaicListing{.o-mosaicListing__list{padding-left:0;list-style:none;display:grid;grid-template-columns:repeat(12,1fr);grid-auto-flow:dense;gap:12px;margin:0;@media ", "{gap:24px;}@media ", "{gap:30px;}.grid_mosiac2x2{grid-column-end:span 12;max-height:unset;grid-row-end:span 2;@media ", "{grid-column-end:span 6;}}.grid_mosiac1x1{grid-column-end:span 6;max-height:unset;grid-row-end:span 1;@media ", "{grid-column-end:span 3;}}.grid_mosiacEmpty{grid-column-end:span 6;max-height:unset;grid-row-end:span 1;@media ", "{grid-column-end:span 3;}}}}}"], (function(e) {
                    return e.backgroundColor || e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                K = (0, h.Z)((function(e) {
                    var t = e.items,
                        o = e.className,
                        n = e.locale,
                        r = e.country,
                        a = e.deviceInfo,
                        s = e.cmsLabels,
                        c = e.viewportInfo,
                        u = "o-mosaicListing",
                        d = i()(o, u);
                    return (0, L.jsx)("div", {
                        className: "".concat(o, " o-mosaicListing_main"),
                        children: (0, L.jsx)(l.Z, {
                            className: d,
                            children: t && t.size > 0 && (0, L.jsx)("ul", {
                                className: "".concat(o, " ").concat(u, "__list"),
                                children: t.map((function(e, t) {
                                    return function(e, t) {
                                        return (0, L.jsx)(W, {
                                            componentClass: u,
                                            item: e,
                                            itemIndex: t,
                                            locale: n,
                                            country: r,
                                            deviceInfo: a,
                                            cmsLabels: s,
                                            viewportInfo: c
                                        })
                                    }(e, t)
                                }))
                            })
                        })
                    })
                })),
                q = (0, a.Z)(K, U)
        },
        48500: function(e, t, o) {
            "use strict";
            o.d(t, {
                Z: function() {
                    return r
                }
            });
            var n = o(51321),
                i = o(24246),
                r = function(e) {
                    var t = e.isPaused,
                        o = e.onClick,
                        r = e.onKeyUp,
                        a = e.tabIndex;
                    return (0, i.jsxs)("button", {
                        className: "-playPauseA11yButton ".concat(t ? "-play" : "-pause"),
                        type: "button",
                        title: t ? n.F.PLAY : n.F.PAUSE,
                        "aria-disabled": "false",
                        onClick: function(e) {
                            o && o(e)
                        },
                        onKeyUp: function(e) {
                            r && r(e)
                        },
                        tabIndex: a,
                        children: [(0, i.jsx)("span", {
                            "aria-hidden": "true",
                            className: "vjs-icon-placeholder"
                        }), (0, i.jsx)("div", {
                            "aria-live": "assertive",
                            role: "alert",
                            "aria-atomic": "true",
                            children: (0, i.jsx)("span", {
                                className: "vjs-control-text",
                                children: t ? n.F.PLAY : n.F.PAUSE
                            })
                        })]
                    })
                }
        },
        20484: function(e) {
            "undefined" !== typeof e.exports && (e.exports = function(e) {
                "use strict";
                var t = navigator.userAgent.indexOf("Edge/") >= 0,
                    o = new Image,
                    n = "object-fit" in o.style && !t,
                    i = "object-position" in o.style && !t,
                    r = /(object-fit|object-position)\s*:\s*([-\w\s%]+)/g;

                function a(e) {
                    for (var t = getComputedStyle(e).fontFamily, o = null, n = {}; null !== (o = r.exec(t));) n[o[1]] = o[2];
                    return n["object-position"] ? function(e) {
                        ~e["object-position"].indexOf("left") ? e["object-position-x"] = "left" : ~e["object-position"].indexOf("right") ? e["object-position-x"] = "right" : e["object-position-x"] = "center";
                        ~e["object-position"].indexOf("top") ? e["object-position-y"] = "top" : ~e["object-position"].indexOf("bottom") ? e["object-position-y"] = "bottom" : e["object-position-y"] = "center";
                        return e
                    }(n) : n
                }

                function l(e, t) {
                    if ("fill" !== t["object-fit"]) {
                        var o = e.style,
                            n = window.getComputedStyle(e),
                            i = document.createElement("object-fit");
                        i.appendChild(e.parentNode.replaceChild(i, e));
                        var r = {
                            height: "100%",
                            width: "100%",
                            boxSizing: "content-box",
                            display: "inline-block",
                            overflow: "hidden"
                        };
                        for (var a in "backgroundColor backgroundImage borderColor borderStyle borderWidth bottom fontSize lineHeight left opacity margin position right top visibility".replace(/\w+/g, (function(e) {
                                r[e] = n[e]
                            })), r) i.style[a] = r[a];
                        o.border = o.margin = o.padding = 0, o.display = "block", o.opacity = 1, e.addEventListener("loadedmetadata", l), window.addEventListener("optimizedResize", l), e.readyState >= 1 && (e.removeEventListener("loadedmetadata", l), l())
                    }

                    function l() {
                        var n = e.videoWidth / e.videoHeight,
                            r = i.clientWidth,
                            a = i.clientHeight,
                            l = r / a,
                            s = 0,
                            c = 0;
                        o.marginLeft = o.marginTop = 0, (n < l ? "contain" === t["object-fit"] : "cover" === t["object-fit"]) ? (s = a * n, c = r / n, o.width = Math.round(s) + "px", o.height = a + "px", "left" === t["object-position-x"] ? o.marginLeft = 0 : "right" === t["object-position-x"] ? o.marginLeft = Math.round(r - s) + "px" : o.marginLeft = Math.round((r - s) / 2) + "px") : (c = r / n, o.width = r + "px", o.height = Math.round(c) + "px", "top" === t["object-position-y"] ? o.marginTop = 0 : "bottom" === t["object-position-y"] ? o.marginTop = Math.round(a - c) + "px" : o.marginTop = Math.round((a - c) / 2) + "px"), e.autoplay && e.play()
                    }
                }
                n && i || (function(e) {
                    var t = -1;
                    e ? "length" in e || (e = [e]) : e = document.querySelectorAll("video");
                    for (; e[++t];) {
                        var o = a(e[t]);
                        (o["object-fit"] || o["object-position"]) && (o["object-fit"] = o["object-fit"] || "fill", l(e[t], o))
                    }
                }(e), function(e, t, o) {
                    o = o || window;
                    var n = !1,
                        i = null;
                    try {
                        i = new CustomEvent(t)
                    } catch (a) {
                        (i = document.createEvent("Event")).initEvent(t, !0, !0)
                    }
                    var r = function() {
                        n || (n = !0, requestAnimationFrame((function() {
                            o.dispatchEvent(i), n = !1
                        })))
                    };
                    o.addEventListener(e, r)
                }("resize", "optimizedResize"))
            })
        }
    }
]);