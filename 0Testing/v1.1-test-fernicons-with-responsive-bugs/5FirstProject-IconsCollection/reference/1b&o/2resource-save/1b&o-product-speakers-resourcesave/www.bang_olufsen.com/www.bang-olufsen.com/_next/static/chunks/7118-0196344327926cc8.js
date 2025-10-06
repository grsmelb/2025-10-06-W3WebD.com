"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [7118, 8944], {
        12348: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return I
                }
            });
            var o = n(43350),
                i = n(80040),
                r = n(48415),
                a = n(73667),
                l = n(3117),
                c = n(90849),
                s = n(27378),
                d = n(96676),
                u = n(34869),
                m = (0, n(41408).iv)(["&.a-parallaxImage{width:100%;overflow:hidden;}"]),
                p = n(34919),
                g = n(31357),
                h = n(48787),
                f = n(24246);

            function x(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function v(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(n), !0).forEach((function(t) {
                        (0, c.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : x(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function y(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = (0, l.Z)(e);
                    if (t) {
                        var i = (0, l.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (0, a.Z)(this, n)
                }
            }
            var b = function(e) {
                (0, r.Z)(n, e);
                var t = y(n);

                function n() {
                    return (0, o.Z)(this, n), t.apply(this, arguments)
                }
                return (0, i.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.image,
                            o = e.size,
                            i = e.ratio,
                            r = e.offsets,
                            a = e.disableParallax,
                            l = e.slnId,
                            c = e.isFullScreen,
                            s = e.pictureTag,
                            u = e.style,
                            m = e.isServerSideRendered,
                            x = e.isNextImage,
                            y = {
                                transform: "scale(1.".concat(r.yMax, ")")
                            };
                        return x && (y = v(v({}, y), {
                            position: "relative",
                            height: "100%",
                            aspectRatio: (0, h.VC)([1, 1])
                        })), (0, f.jsx)(d.VS, {
                            className: "".concat(t, x ? " a-parallaxImage h-inherit" : " a-parallaxImage "),
                            offsetYMax: r.yMax,
                            offsetYMin: r.yMin,
                            slowerScrollRate: !0,
                            disabled: a,
                            children: x ? (0, f.jsx)("div", {
                                role: "presentation",
                                style: y,
                                children: (0, f.jsx)(p.Z, {
                                    media: n,
                                    objectFit: "cover",
                                    layout: "fill",
                                    contentfulImage: !0,
                                    loadingMethod: "eager",
                                    priority: !0
                                })
                            }) : (0, f.jsx)("div", {
                                role: "presentation",
                                style: y,
                                children: (0, f.jsx)(g.Z, {
                                    size: o,
                                    style: u,
                                    media: n,
                                    ratio: i,
                                    isServerSideRendered: m,
                                    isFullScreen: c,
                                    slnId: "".concat(l, "_parallaxImage"),
                                    parallax: !0,
                                    pictureTag: s
                                })
                            })
                        })
                    }
                }]), n
            }(s.PureComponent);
            (0, c.Z)(b, "SIZES", g.Z.SIZES), b.displayName = "ParallaxImage", b.defaultProps = {
                offsets: {
                    yMax: 15,
                    yMin: -15,
                    xMax: 0,
                    xMin: 0
                },
                disableParallax: !1
            };
            var I = (0, u.Z)(b, m)
        },
        38944: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return x
                }
            });
            var o = n(90849),
                i = n(60042),
                r = n.n(i),
                a = n(27378),
                l = n(2463),
                c = n(48500),
                s = n(6234),
                d = n(34869),
                u = (0, n(41408).iv)(["&.a-richMediaVideo{position:relative;width:100%;height:100%;&.setRatio{aspect-ratio:1/1;}.pause-button-wrapper{position:absolute;width:32px;height:32px;right:16px;bottom:16px;background-color:", ";z-index:", ";border-radius:50%;@media ", "{width:45px;height:45px;}&.show-btn{visibility:visible;}&.hide-btn{visibility:hidden;}&.-isSmallBtn{width:32px;height:32px;.-playPauseA11yButton{width:32px;height:32px;}}}&.isCarouselVideo{.pause-button-wrapper{@media ", "{bottom:36px;}@media ", "{bottom:8.5%;}}}.-playPauseA11yButton{z-index:", ";position:absolute;bottom:50%;right:50%;display:block;width:32px;height:32px;cursor:pointer;background-color:transparent;transform:translate(50%,50%);border-radius:50%;@media ", "{width:45px;height:45px;}&.-pause{background-image:url('/static-assets/images/common/video-pause-button.svg');background-position:center;background-repeat:no-repeat;}&.-play{background-image:url('/static-assets/images/common/video-play-button.svg');background-position:center;background-repeat:no-repeat;}.vjs-control-text{visibility:hidden;}}}"], (function(e) {
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
                m = n(41605),
                p = n(24246);

            function g(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function h(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? g(Object(n), !0).forEach((function(t) {
                        (0, o.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : g(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var f = (0, s.Z)((function(e) {
                    var t, n = e.backgroundVideo,
                        o = e.className,
                        i = e.isRichMediaVideoOnCategoryPageProductCardCarousel,
                        s = e.ratio,
                        d = e.storyAutoPlayed,
                        u = e.parentRef,
                        g = e.isSmallBtn,
                        f = e.isCarouselVideo,
                        x = e.videoInlineStyles,
                        v = e.alwaysShowPlayPauseButton,
                        y = (0, a.useState)(!1),
                        b = y[0],
                        I = y[1],
                        _ = (0, a.useState)(!1),
                        j = _[0],
                        w = _[1],
                        O = (0, a.useRef)(null),
                        k = function(e) {
                            e.stopPropagation(), i && e.preventDefault(), t()
                        },
                        C = function(e) {
                            var t = null === O || void 0 === O ? void 0 : O.current,
                                n = null === t || void 0 === t ? void 0 : t.getElementsByClassName("pause-button-wrapper"),
                                o = n && (null === n || void 0 === n ? void 0 : n.length) && n[0];
                            o && !t.contains(e.relatedTarget) && (o.classList.remove("show-btn"), o.classList.add("hide-btn"))
                        };
                    (0, a.useEffect)((function() {
                        var e = null === O || void 0 === O ? void 0 : O.current;
                        return e.addEventListener("focusout", C),
                            function() {
                                e.removeEventListener("focusout", C)
                            }
                    }), []);
                    var S = function() {
                        var e = null === O || void 0 === O ? void 0 : O.current,
                            t = null === e || void 0 === e ? void 0 : e.getElementsByClassName("pause-button-wrapper"),
                            n = t && (null === t || void 0 === t ? void 0 : t.length) && t[0];
                        n && (n.classList.remove("hide-btn"), n.classList.add("show-btn"))
                    };
                    (0, a.useEffect)((function() {
                        var e = null === u || void 0 === u ? void 0 : u.current;
                        return e && (e.addEventListener("mouseover", S), e.addEventListener("mouseout", C)),
                            function() {
                                e && (e.addEventListener("mouseover", S), e.addEventListener("mouseout", C))
                            }
                    }), []);
                    var A = null === n || void 0 === n ? void 0 : n.getIn(["media", "defaultAssetUrl"]),
                        N = d || (null === n || void 0 === n ? void 0 : n.getIn(["media", "autoPlay"])),
                        T = null === n || void 0 === n ? void 0 : n.getIn(["media", "enableLoop"]),
                        Z = d || (null === n || void 0 === n ? void 0 : n.getIn(["media", "autoPlay"])),
                        P = {
                            mediaItem: n,
                            trackVideo: !1,
                            controls: !Z
                        },
                        L = j || v ? "show-btn" : "hide-btn",
                        B = r()(o, "a-richMediaVideo", {
                            setRatio: s,
                            isCarouselVideo: f
                        });
                    return (0, p.jsxs)("div", {
                        className: B,
                        ref: O,
                        onMouseOver: function(e) {
                            e.stopPropagation(), j || w(!0)
                        },
                        onMouseLeave: function(e) {
                            e.stopPropagation(), j && w(!1)
                        },
                        tabIndex: "0",
                        onFocus: function(e) {
                            return S()
                        },
                        role: "group",
                        "aria-label": "Rich Media Video",
                        children: [Z && (0, p.jsx)("div", {
                            className: "pause-button-wrapper ".concat(L, " ").concat(g ? "-isSmallBtn" : ""),
                            tabIndex: "0",
                            role: "button",
                            onClick: k,
                            onKeyUp: function(e) {
                                return (null === e || void 0 === e ? void 0 : e.keyCode) === m.q70 && k(e)
                            },
                            children: (0, p.jsx)(c.Z, {
                                isPaused: b,
                                tabIndex: "-1"
                            })
                        }), (0, p.jsx)(l.default, h({
                            className: "-staggerIn -stagger0",
                            autoplay: N,
                            loop: T,
                            setPlayPauseOptions: function(e) {
                                t = e
                            },
                            setPlayPauseState: function(e) {
                                I(e)
                            },
                            isRichMediaVideoOnCategoryPageProductCardCarousel: i,
                            videoInlineStyles: x
                        }, P), A)]
                    })
                })),
                x = (0, d.Z)(f, u)
        },
        85060: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return p
                }
            });
            var o = n(60042),
                i = n.n(o),
                r = n(34869),
                a = n(6234),
                l = n(41408),
                c = n(83030),
                s = (0, l.iv)(["&.o-productCardTags{display:flex;flex-direction:column;.product-card-tag{display:inline-block;align-self:flex-start;height:24px;border-radius:2px;font-size:", ";line-height:", ";padding:4px 8px;background:", ";color:", ";font-weight:", ";&.light{color:", ";background:", ";}&.discounted{padding:4px 8px;background:", ";color:", ";}}.alignment{height:auto;text-align:right;}}"], (function(e) {
                    return (0, c.hO)(e.theme.fonts.fontSize.body.small.quinary)
                }), (function(e) {
                    return (0, c.hO)(e.theme.fonts.lineHeight.custom.custom_6)
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
                d = n(24246),
                u = "light",
                m = (0, a.Z)((function(e) {
                    var t = e.className,
                        n = e.data,
                        o = e.color,
                        r = e.productCard,
                        a = i()(t, "o-productCardTags");
                    return (0, d.jsx)("div", {
                        className: a,
                        children: n && n.map((function(e) {
                            return function(e) {
                                var t = null === e || void 0 === e ? void 0 : e.get("title"),
                                    n = null === e || void 0 === e ? void 0 : e.get("isDiscounted"),
                                    a = null === e || void 0 === e ? void 0 : e.get("tagTheme"),
                                    l = i()("product-card-tag", {
                                        light: !n && (o === u || a === u),
                                        discounted: n,
                                        alignment: r
                                    });
                                return (0, d.jsx)("span", {
                                    className: l,
                                    children: t
                                }, t)
                            }(e)
                        }))
                    })
                })),
                p = (0, r.Z)(m, s)
        },
        57439: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return Me
                }
            });
            var o = n(43350),
                i = n(80040),
                r = n(59307),
                a = n(48415),
                l = n(73667),
                c = n(3117),
                s = n(90849),
                d = n(27378),
                u = n(41408),
                m = n(96667),
                p = (0, u.iv)(["&.-categoryTile{.m-textAndImage__wrapper{height:100%;width:100%;position:relative;display:flex;flex-direction:column;padding:30px;overflow:hidden;background-color:", ";transition:background-color ", " ease-in-out;min-height:341px;@media ", "{min-height:376px;}@media ", "{min-height:307px;}@media ", "{min-height:396px;}.a-animatedIcon{position:absolute;right:0;margin-top:1px;}.m-textAndImage__background{height:100%;width:100%;position:absolute;top:0;left:0;background-size:cover;background-position:center;transition:transform ", " ", ";}&:hover,&:active,&:focus{background-color:", ";.a-animatedIcon{", ";}.m-textAndImage__background{transform:", ";}}}.category-tile-link{display:block;height:100%;}.m-textAndImage__content,.m-textAndImage__link{z-index:1;}.m-textAndImage__content{position:relative;.-secondary{float:left;}}.m-textAndImage__image{.img-wrapper{position:relative;width:80%;aspect-ratio:1;margin:0 auto;}@media ", "{padding:8% 0;}}.m-textAndImage__link{position:relative;text-align:right;padding-right:40px;}.m-textAndImage__image + .m-textAndImage__link{@media ", "{margin-top:10px;}}p{margin:0;}&.-hasBackgroundImage{.m-textAndImage__wrapper{background:", ";transition:none;padding:30px;@media ", "{padding:40px;}&::after{", "}}.m-textAndImage__content{position:relative;text-align:center;display:flex;flex-direction:column;justify-content:space-between;align-items:center;.category-tile-link{height:initial;width:fit-content;}}.m-textAndImage__content,.m-textAndImage__image{flex:1;}.m-textAndImage__link{margin-top:150px;}}&.-light{.m-textAndImage__wrapper{&::after{display:none;}}}&.-dark{.m-textAndImage__wrapper{.m-textAndImage__content{.title{color:", ";}}}}}"], (function(e) {
                    return e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.duration.fast
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.large
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.iconAnimations.arrowRight.animateRight
                }), (function(e) {
                    return e.theme.scale.scaleImageHover
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.BACKGROUND.TRANSPARENT
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return m.Z.imageOverlay([{
                        hex: e.theme.colors.BEO_BLACK,
                        opacity: .7
                    }])
                }), (function(e) {
                    return e.theme.colors.WHITE
                })),
                g = (0, u.iv)(["&.-background{width:100%;.m-textAndImage__wrapper{position:relative;padding:20% 5%;background-size:cover;min-height:380px;display:flex;align-items:center;text-align:center;overflow:hidden;transform-style:preserve-3d;@media ", "{padding:0;&::before{content:'';display:block;", ";}}}.m-textAndImage__background{position:absolute;inset:0;@media ", "{.parallax-inner{height:100%;& > div{height:100%;transform:scale(1) !important;}.a-responsiveImage{height:100%;img{", ";}}}}}.container{height:100%;width:100%;z-index:", ";@media ", "{position:absolute;top:0;left:0;padding-top:30px;padding-bottom:30px;}}.row{height:100%;@media ", "{display:flex;text-align:center;align-items:center;}}.a-anchorButton{margin-top:30px;}&.-lightTheme{.m-textAndImage__wrapper{&::after{", "}}}}"], (function(e) {
                    return e.theme.mediaQuery.small
                }), m.Z.maintainRatio(1080, 1920), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), m.Z.objectFit(), (function(e) {
                    return e.theme.zIndex.zDefault
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return m.Z.imageOverlay([{
                        hex: e.theme.colors.BEO_BLACK,
                        opacity: .5
                    }])
                })),
                h = n(83030),
                f = (0, u.iv)(["&.-fiftyFifty{width:100%;@media ", "{margin-top:50px;}@media ", "{.-padded{padding-top:54px;padding-bottom:54px;}}.m-textAndImage__wrapper{", "}&.-withBackground{background:", ";.m-textAndImage__wrapper{background-color:", ";margin:-1rem;padding:1rem;@media ", "{margin:0;padding:0;}}}.m-textAndImage__columnLeft{order:0;@media ", "{order:", ";}}.m-textAndImage__image{height:100%;display:flex;align-items:center;.parallax-inner{height:inherit;}@media ", "{.parallax-inner{& > div{height:100%;transform:scale(1) !important;}}}}picture{width:100%;}img{display:block;width:100%;}.m-textAndImage__title{margin-bottom:8px;padding:0;line-height:", ";@media ", "{margin-bottom:16px;}}.textAndImageTextWrapper{height:100%;@media ", "{padding-top:60px;padding-bottom:60px;}.m-textAndImage__copy{height:100%;display:flex;flex-direction:column;justify-content:center;.textAndImage_Logo{margin-top:30px;max-width:160px;}.textAndImage-text{@media ", "{margin-top:32px;}.h4{margin-bottom:16px;@media ", "{margin-bottom:32px;margin-top:unset;}}p{color:", ";}.m-readMore{color:", ";text-decoration:underline;cursor:pointer;}.richTextWrapper{p{margin-bottom:20px;}}}}}.cta-buttons{display:flex;flex-direction:column;width:fit-content;.a-anchorButton{display:flex;flex:1 1 0;justify-content:center;}}.first-cta a{line-height:", ";@media ", "{text-align:center;em{display:none;}}@media ", "{display:flex;}}.second-cta a{margin-top:20px;@media ", "{text-align:center;em{display:none;}}@media ", "{display:flex;}}.m-textAndImage__anchor{display:block;&:hover,&:active,&:focus{.a-animatedIcon{", ";}}}.m-textAndImage__video{width:100%;height:100%;background:transparent;display:flex;flex-direction:column;aspect-ratio:1/1;}.a-anchorButton{margin-top:28px;@media ", "{padding:10px;min-width:fit-content;}@media ", "{margin-top:32px;}@media ", "{margin-top:40px;}@media ", "{margin-top:48px;}}}"], (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallOnly
                }), (function(e) {
                    return e.textColor && (0, u.iv)([".h4,.h5{color:", ";}"], e.textColor)
                }), (function(e) {
                    return e.theme.darkColor ? e.theme.darkColor.BACKGROUND.BEO_BLACK : e.backgroundSecondaryColor || e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.darkColor ? e.theme.darkColor.BACKGROUND.GREY : e.backgroundColor || e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.imageRight ? 2 : 0
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.fonts.lineHeight.loose
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.textColor || e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.textColor || e.theme.colors.GREY5
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallOnly
                }), (function(e) {
                    return e.theme.iconAnimations.arrowRight.animateLeft.large
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.large
                })),
                x = (0, u.iv)(["&.-fiftyFiftyTwoThird{position:relative;.m-textAndImage__wrapper{background:", ";color:", ";margin-left:0;margin-right:0;.textAndImage__imageWrapper{display:flex;align-items:center;padding-right:0;padding-left:0;@media ", "{padding:16px;}&.-imageRight{@media ", "{order:2;}}}.textAndImage__textWrapper{display:flex;flex-direction:column;justify-content:center;padding-left:40px;padding-right:40px;@media ", "{padding:16px;}@media ", "{padding-left:16px;padding-right:16px;}.fiftyFiftyTwoThird_title{color:", ";margin-bottom:0;}.fiftyFiftyTwoThird_description{color:", ";margin-top:16px;}.textAndImage__cta{margin-top:30px;@media ", "{margin-top:30px;margin-bottom:32px;}}}}}"], (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                })),
                v = (0, u.iv)(["&.-oneFeature{position:relative;&.-versionTwo{background:", ";}.a-container{background:", ";}&.-isFeaturedStory{width:100%;@media ", "{padding-top:8px;}.a-container{@media ", "{padding-left:0;padding-right:0;}padding-bottom:0;@media ", "{padding-left:0;padding-right:0;}.m-textAndImage__wrapper{.textContainer{.textWrapper__v2{@media ", "{padding-bottom:32px;}}}}}.m-textAndImage__wrapper{.imageWrapper{.imageContainer{@media ", "{padding:0;}@media ", "{padding-left:0;}}}.textWrapper__v2{.container{padding:0;.oneFeature__title,.oneFeature_subtitle,.oneFeature__description{@media ", "{padding:0;}}}}}}.textAndImage__wrapper_version_two{@media ", "{padding-top:2px;}@media ", "{padding:0 48px;}@media ", "{padding-top:18px;}}.m-textAndImage__wrapper{.imageWrapper{@media ", "{background:", ";}@media ", "{background:", ";}.imageContainer{height:100%;background:", ";@media ", "{padding:0;}.row{height:100%;}}.image_columns{height:100%;width:100%;&.-isHover{.oneFeature__image{.a-observer{img{transform:", ";}}}}}.oneFeature__image{height:100%;background:transparent;.a-observer{overflow:hidden;isolation:isolate;}img{height:100%;width:100%;object-fit:cover;transition:transform ", " ", ";background:transparent;&:hover,&:active,&:focus{transform:", ";background:transparent;}}}}.video-btn-wrapper{position:relative;@media ", "{padding-right:0;}}.pause-button-wrapper{position:absolute;width:32px;height:32px;right:16px;bottom:16px;background-color:", ";z-index:", ";border-radius:50%;@media ", "{bottom:20px;right:20px;}@media ", "{bottom:24px;right:24px;}}.-playPauseA11yButton{z-index:", ";position:absolute;bottom:50%;right:50%;display:block;width:32px;height:32px;cursor:pointer;background-color:transparent;transform:translate(50%,50%);border-radius:50%;&.-pause{background-image:url('/static-assets/images/common/video-pause-button.svg');background-position:center;background-repeat:no-repeat;}&.-play{background-image:url('/static-assets/images/common/video-play-button.svg');background-position:center;background-repeat:no-repeat;}.vjs-control-text{font-size:", ";display:none;}}.video-wrapper{aspect-ratio:4 / 5;@media ", "{aspect-ratio:1 / 1;}.m-videoPlayer{&.-responsive{margin-top:initial;height:100%;}}width:100%;height:100%;.vjs-big-play-button{display:none;}@media ", "{margin-bottom:0;padding-right:0;}}.textContainer{@media ", "{background:", ";}.textWrapper__v2{.container{padding:0;}height:100%;background:", ";color:", ";display:flex;flex-direction:column;justify-content:center;padding:20px 0 32px;@media ", "{padding:48px 0;padding-bottom:18px;}@media ", "{padding:0;padding-left:48px;}.oneFeature__title{margin-bottom:8px;text-align:center;padding:0 20px;@media ", "{padding:0;}}.oneFeature_subtitle{margin-bottom:16px;text-align:center;padding:0 20px;@media ", "{margin-bottom:20px;padding:0;}}.oneFeature__description{margin-top:initial;color:", ";text-align:center;padding:0 20px;@media ", "{padding:0;}}.oneFeature__cta{margin-top:24px;text-align:center;@media ", "{margin-top:40px;}}}}.textWrapper{height:100%;background:", ";display:flex;flex-direction:column;justify-content:space-between;padding:48px 4px;@media ", "{padding:64px 0;padding-bottom:72px;}@media ", "{padding:64px 0 64px 32px;}.upperSection__wrapper{margin-left:initial;@media ", "{width:100%;}.oneFeature__title{padding-bottom:32px;margin:0;@media ", "{padding-bottom:16px;}}.oneFeature_subtitle{margin:0;}padding-bottom:60px;@media ", "{padding-bottom:80px;}}.lowerSection__wrapper{.cta_wrapper{padding-top:32px;display:block;@media ", "{display:flex;align-items:flex-end;justify-content:end;}.textAndImage__cta{.a-anchorButton{min-width:100%;}a{em{display:none;}}}}}}}}"], (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.scale.scaleImageHover
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.scale.scaleImageHover
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return "".concat(e.theme.colors.BEO_BLACK, "66")
                }), (function(e) {
                    return e.theme.zIndex.zCookiePopup
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.zIndex.zVideo
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.fontSize.body.custom.custom_6)
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.textColor || e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.textColor || e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                })),
                y = (0, u.iv)(["&.-twoFeature{background:", ";.a-container{padding-top:0;padding-bottom:0;}.text-color{color:", ";}.wrapper{display:flex;flex-direction:column;align-items:stretch;}.m-textAndImage__wrapper{@media ", "{padding:40px 64px;}@media ", "{padding:60px 52px;}padding-top:32px;padding-bottom:32px;.wrapper-image{margin-bottom:16px;overflow:hidden;isolation:isolate;@media ", "{margin-bottom:24px;}.image__twoFeature{img{transition:transform ", " ", ";}}&.zoomin{.image__twoFeature{img{transform:", ";}}}}.video-btn-wrapper{position:relative;margin-bottom:16px;width:100%;@media ", "{margin-bottom:24px;}.vjs-control-text{font-size:", ";display:none;}.vjs-big-play-button{display:none;}.pause-button-wrapper{position:absolute;width:32px;height:32px;right:16px;bottom:16px;background-color:", ";z-index:", ";border-radius:50%;@media ", "{bottom:24px;right:24px;}}.-playPauseA11yButton{z-index:", ';position:absolute;bottom:50%;right:50%;display:block;width:32px;height:32px;cursor:pointer;background-color:transparent;transform:translate(50%,50%);border-radius:50%;&.-pause{background-image:url("/static-assets/images/common/video-pause-button.svg");background-position:center;background-repeat:no-repeat;}&.-play{background-image:url("/static-assets/images/common/video-play-button.svg");background-position:center;background-repeat:no-repeat;}}.m-videoPlayer{&.-responsive{margin-top:initial;height:100%;}}}.text__wrapper{padding:0 20px;@media ', "{padding:0;display:flex;flex-direction:column;flex:2;}.title{margin-bottom:8px;}.sub_title{margin-bottom:16px;padding:0;@media ", "{margin-bottom:20px;}}.description{margin:0 0 40px;@media ", "{margin:0 0 32px;}@media ", "{margin:0 0 24px;}}.textAndImage__cta{display:inline-block;align-self:flex-start;@media ", "{margin:auto 0 0;}&.cta-margin{@media ", "{margin-bottom:60px;}@media ", "{margin-bottom:48px;}}}}}}"], (function(e) {
                    return e.backgroundColor ? e.backgroundColor : e.theme.colors.BEO_GREY_LIGHT
                }), (function(e) {
                    return e.textColor ? e.textColor : e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.scale.scaleImageHover
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.fontSize.body.custom.custom_6)
                }), (function(e) {
                    return "".concat(e.theme.colors.BEO_BLACK, "66")
                }), (function(e) {
                    return e.theme.zIndex.zCookiePopup
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.zIndex.zVideo
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmall
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmall
                })),
                b = function(e) {
                    return e.textColor || e.theme.colors.BEO_BLACK
                },
                I = function(e) {
                    return e.backgroundColor || e.theme.colors.BEO_WHITE
                },
                _ = (0, u.iv)(["&.-holiday{position:relative;background:", ";.a-container{max-width:1920px;@media ", "{padding-left:0;padding-right:0;}}.rows-class{@media ", "{margin:0;}}.columns{background:", ";padding:0;&.-imageRight{@media ", "{order:2;}}}.media-section-wrapper{position:relative;height:inherit;.product-tags{position:absolute;top:16px;left:16px;z-index:1;}.holiday__image{background:", ";}.video-wrapper{width:100%;height:100%;aspect-ratio:1 / 1;.m-videoPlayer{margin-top:0;height:100%;}}}.text-section-row{height:100%;}.textWrapper{display:flex;flex-direction:column;justify-content:center;height:100%;width:100%;text-align:", ";background:", ";padding:72px 20px;@media ", "{padding:72px 0;}@media ", "{padding:0;border-radius:0;}.title{color:", ";margin-bottom:0;@media ", "{margin-bottom:8px;}}.subtitle{margin-bottom:0;color:", ";position:relative;&.-isUnderlined{&::after{content:'';position:absolute;bottom:0;left:5%;width:90%;height:1px;border-bottom:1.5px solid ", ";}}&.-isFastpen{font-family:", ";font-weight:400;font-size:42px;line-height:50px;letter-spacing:2px;@media ", "{font-size:64px;line-height:77px;}&.-isUnderlined{&::after{bottom:6px;}}}}.description{color:", ";margin-top:16px;}.holiday__ctaWrapper{margin-top:24px;}.m-readMore{color:", ";cursor:pointer;text-decoration:underline;margin-top:20px;}}.pause-button-wrapper{position:absolute;width:32px;height:32px;right:16px;bottom:16px;background-color:", ";z-index:", ";border-radius:50%;@media ", "{right:36px;bottom:36px;}}.-playPauseA11yButton{z-index:", ";position:absolute;bottom:50%;right:50%;display:block;width:32px;height:32px;cursor:pointer;background-color:transparent;transform:translate(50%,50%);border-radius:50%;&.-pause{background-image:url('/static-assets/images/common/video-pause-button.svg');background-position:center;background-repeat:no-repeat;}&.-play{background-image:url('/static-assets/images/common/video-play-button.svg');background-position:center;background-repeat:no-repeat;}.vjs-control-text{font-size:", ";display:none;}}}"], (function(e) {
                    return e.backgroundSecondaryColor || e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), I, (function(e) {
                    return e.theme.mediaQuery.medium
                }), I, (function(e) {
                    return e.textAlignment || "center"
                }), I, (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), b, (function(e) {
                    return e.theme.mediaQuery.small
                }), b, b, (function(e) {
                    return e.theme.fonts.fastpen
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), b, b, (function(e) {
                    return "".concat(e.theme.colors.BEO_BLACK, "66")
                }), (function(e) {
                    return e.theme.zIndex.zCookiePopup
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.zIndex.zVideo
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.fontSize.body.custom.custom_6)
                })),
                j = n(96686),
                w = (0, u.iv)(["&.o-overlayImmersive-wrapper{position:relative;.backgroundImageWrapper{position:relative;height:120vh;width:100%;@media ", "{height:100vw;}&.is-compact{height:55vw;@media ", "{height:100vh;}}&::after{content:'';position:absolute;background:linear-gradient(180deg,rgb(0 0 0 / 0%) 0%,rgb(0 0 0 / 70%) 100%);transition:all 0.3s;z-index:1;}&.no-content{&::after{display:none;}}&.--top{&::after{width:100%;height:50%;top:0;background:", ";}}&.--compactTop{&::after{width:100%;height:75%;top:0;background:", ";}}&.--left{&::after{width:75%;height:100%;left:0;top:0;background:", ";}}&.--bottom{&::after{width:100%;height:50%;bottom:0;background:", ";}}&.--compactBottom{&::after{width:100%;height:75%;bottom:0;background:", ";}}&.--right{&::after{width:75%;height:100%;right:0;top:0;background:", ";}}&.--full{&::after{width:100%;height:100%;top:0;}}}.content_container{position:absolute;top:0;height:100%;width:100%;}.o-overlay_immersive_container{height:100%;padding:0;position:relative;&.a-container{max-width:1700px;}.overlay_immersive_content{position:absolute;width:100%;z-index:", ";padding:48px 32px;text-align:", ";@media ", "{max-width:600px;}@media ", "{padding:80px 86px;text-align:", ";}.overlay_immersive__title{color:", ";margin-bottom:24px;}.overlay_immersive__description{color:", ";margin-bottom:24px;}&.top_left{top:0;}&.bottom_left{bottom:0;}&.center_left{top:50%;left:0;transform:translate(0,-50%);}&.top_center{top:0;left:50%;transform:translate(-50%,0);}&.bottom_center{bottom:0;left:50%;transform:translate(-50%,0);}&.center_right{top:50%;right:0;transform:translate(0,-50%);}&.bottom_right{bottom:0;right:0;}&.top_right{top:0;right:0;}&.center_center{top:50%;left:50%;transform:translate(-50%,-50%);}}}}"], (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.colorTheme === j.$o ? "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.75) 100%)" : "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%)"
                }), (function(e) {
                    return e.colorTheme === j.$o ? "linear-gradient(0deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.75) 100%)" : "linear-gradient(0deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%)"
                }), (function(e) {
                    return e.colorTheme === j.$o ? "linear-gradient(-90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.75) 100%)" : "linear-gradient(-90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%)"
                }), (function(e) {
                    return e.colorTheme === j.$o ? "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.75) 100%)" : "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%)"
                }), (function(e) {
                    return e.colorTheme === j.$o ? "linear-gradient(180deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.75) 100%)" : "linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%)"
                }), (function(e) {
                    return e.colorTheme === j.$o ? "linear-gradient(90deg, rgba(255, 255, 255, 0.00) 0%, rgba(255, 255, 255, 0.75) 100%)" : "linear-gradient(90deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%)"
                }), (function(e) {
                    return e.theme.zIndex.zDefault
                }), (function(e) {
                    return e.textAlignment || "left"
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.textAlignmentMobile || e.textAlignment || "left"
                }), (function(e) {
                    return e.textColor || e.theme.colors.WHITE
                }), (function(e) {
                    return e.textColor || e.theme.colors.WHITE
                })),
                O = (0, u.iv)(["&.m-textAndImage{", ";", ";", ";", ";", ";", ";", ";", ";display:block;height:100%;.m-textAndImage__wrapper{", "}.image-clickable{width:100%;height:100%;}}"], p, g, f, x, v, y, _, w, (function(e) {
                    return e.textColor && (0, u.iv)(["p{color:", ";}h3,h4{color:", ";}h4::after,.h4::after{background-color:", ";}"], e.textColor, e.textColor, e.textColor)
                })),
                k = n(34869),
                C = n(60042),
                S = n.n(C),
                A = n(56438),
                N = n(77759),
                T = n(85193),
                Z = n(94414),
                P = n(5047),
                L = n(31357),
                B = n(39949),
                E = n(34919),
                R = n(48787),
                Q = n(21318),
                M = n(50813),
                z = n(48323),
                F = n(21250),
                D = n(24246);

            function H(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? H(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : H(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function K(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = (0, c.Z)(e);
                    if (t) {
                        var i = (0, c.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var V = function(e) {
                (0, a.Z)(n, e);
                var t = K(n);

                function n() {
                    var e;
                    (0, o.Z)(this, n);
                    for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(a)), (0, s.Z)((0, r.Z)(e), "getCategoryTiles", (function() {
                        var t = e.props,
                            n = t.className,
                            o = t.data,
                            i = t.locale,
                            r = t.categoryLabels,
                            a = t.slnId,
                            l = t.partner,
                            c = t.country,
                            s = o.get("item"),
                            d = r && r.get("viewAllLabel");
                        return s.map((function(t) {
                            var o = l ? t.getIn(["item", 0]) : t,
                                r = o.get("title"),
                                s = o.get("slug"),
                                u = o.get("entryName") || o.get("title"),
                                m = {
                                    title: r,
                                    className: "category-tile-link"
                                };
                            if (l) {
                                var p = o.get("callToAction"),
                                    g = (0, R.HB)(p, i, c);
                                d = o.getIn(["callToAction", "title"]), m = W(W(W({}, m), g), {}, {
                                    "data-sln-id": "automation_titleAndImage_container",
                                    handleLinkClick: function(t) {
                                        return e.handlePartnersClick(t, g)
                                    },
                                    forceClick: !0
                                })
                            } else m = {
                                href: {
                                    pathname: "/[language]/[country]/[categoriesSlug]",
                                    query: {
                                        categoriesSlug: s,
                                        language: i,
                                        country: c.toLowerCase()
                                    }
                                },
                                "data-sln-id": "automation_textAndImage_container",
                                handleLinkClick: function() {
                                    return e.handleTileClick(u)
                                },
                                forceClick: !0
                            };
                            var h = l ? "mediaItem" : "categoryImage",
                                f = o.getIn([h, "media"]),
                                x = {
                                    backgroundColor: t.get("backgroundColor") || T.Z.colors.GREY1,
                                    color: t.get("textColor") || T.Z.colors.BEO_BLACK
                                };
                            return (0, D.jsx)("div", {
                                className: "".concat(n, " m-textAndImage -categoryTile focus-styling"),
                                children: (0, D.jsx)(P.Z, W(W({
                                    cta: null
                                }, m), {}, {
                                    className: "category-tile-link",
                                    tabIndex: "0",
                                    children: (0, D.jsxs)("div", {
                                        className: "m-textAndImage__wrapper",
                                        "data-sln-id": "".concat(a, "_container").concat(s),
                                        style: x,
                                        children: [(0, D.jsx)("div", {
                                            className: "m-textAndImage__content",
                                            children: (0, D.jsx)("h3", {
                                                className: " h4 brand-reignite -secondary -senary ",
                                                "data-sln-id": "".concat(a, "_title").concat(s),
                                                children: r
                                            })
                                        }), (0, D.jsx)("div", {
                                            className: "m-textAndImage__image",
                                            children: (0, D.jsx)("div", {
                                                className: "img-wrapper",
                                                children: (0, D.jsx)(E.Z, {
                                                    contentfulImage: !0,
                                                    media: f,
                                                    priority: !0,
                                                    loading: "eager",
                                                    layout: "fill",
                                                    objectFit: "cover"
                                                })
                                            })
                                        }), d ? (0, D.jsxs)("div", {
                                            className: "m-textAndImage__link",
                                            children: [(0, D.jsx)("p", {
                                                className: "h5",
                                                "data-sln-id": "".concat(a, "_link"),
                                                children: d
                                            }), (0, D.jsx)(B.Z, {
                                                icon: "arrowRight",
                                                animationDirection: "right",
                                                size: "small"
                                            })]
                                        }) : ""]
                                    })
                                }))
                            }, s)
                        }))
                    })), (0, s.Z)((0, r.Z)(e), "getCategoryTilesWithBackground", (function() {
                        var t = e.props,
                            n = t.className,
                            o = t.data,
                            i = t.locale,
                            r = t.slnId,
                            a = t.deviceInfo,
                            l = t.country,
                            c = !!o.get("backgroundImage") ? o.getIn(["backgroundImage", "media"]) : o.getIn(["item", "0", "categoryImage", "media"]),
                            s = (0, A.dk)(N.F9[L.Z.SIZES.MEDIUM][1], {
                                connectionSpeed: a && a.get("connectionSpeed"),
                                isWebpSupported: a && a.getIn(["featureSupport", "webp"]),
                                media: c,
                                ratio: [1, 1],
                                fit: L.Z.FIT.FILL
                            }),
                            d = {
                                backgroundImage: "url(".concat(s, ")")
                            },
                            u = o.getIn(["item", "0", "callToAction"]),
                            m = o.getIn(["item", "0", "title"]),
                            p = u && u.get("linkText"),
                            g = u && u.get("url"),
                            h = u && u.get("ariaLabel"),
                            f = o.getIn(["item", "0", "entryName"]).split("-").pop() || m,
                            x = (null === u || void 0 === u ? void 0 : u.get("theme")) || "secondary",
                            v = null === u || void 0 === u ? void 0 : u.get("target"),
                            y = null === u || void 0 === u ? void 0 : u.get("buttonColor"),
                            b = null === o || void 0 === o ? void 0 : o.get("colorTheme"),
                            I = {
                                className: "category-tile-link",
                                noLink: (0, z.Sv)(g),
                                href: (0, R.LK)({
                                    pathname: g,
                                    query: {
                                        language: i,
                                        country: l.toLowerCase()
                                    }
                                }),
                                slnId: "automation_textAndImage_container",
                                forceClick: !0,
                                ariaLabel: h,
                                target: v,
                                variant: x,
                                buttonColor: y
                            },
                            _ = S()(n, "m-textAndImage -categoryTile focus-styling -hasBackgroundImage", {
                                "-light": "light" === b,
                                "-dark": "dark" === b
                            });
                        return (0, D.jsx)("div", {
                            className: _,
                            children: (0, D.jsxs)("div", {
                                className: "m-textAndImage__wrapper",
                                "data-sln-id": "".concat(r, "_container"),
                                children: [(0, D.jsxs)("div", {
                                    className: "m-textAndImage__content",
                                    children: [m && (0, D.jsx)("p", {
                                        className: "h4 title",
                                        "data-sln-id": "".concat(r, "_link"),
                                        children: m
                                    }), (0, D.jsx)(F.Z, W(W({
                                        cta: u
                                    }, I), {}, {
                                        labelText: p,
                                        onClick: function() {
                                            return e.handleTileClick(f)
                                        }
                                    }))]
                                }), (0, D.jsx)("div", {
                                    children: (0, D.jsx)("span", {
                                        className: "m-textAndImage__background",
                                        style: d
                                    })
                                })]
                            })
                        })
                    })), (0, s.Z)((0, r.Z)(e), "leftAlignedTiles", [M.Hao.CART]), (0, s.Z)((0, r.Z)(e), "handlePartnersClick", (function(t, n) {
                        var o = e.props,
                            i = o.pageType,
                            r = o.level,
                            a = n.entryName,
                            l = "".concat(M.A1x, " : ").concat(r);
                        (0, Q.Cm)({
                            section: l,
                            subSection: i,
                            selection: null === a || void 0 === a ? void 0 : a.toLowerCase()
                        })
                    })), (0, s.Z)((0, r.Z)(e), "handleTileClick", (function(t) {
                        var n = e.props.pageType;
                        (0, Q.Cm)({
                            section: M.sk_,
                            subSection: n,
                            selection: null === t || void 0 === t ? void 0 : t.toLowerCase()
                        })
                    })), (0, s.Z)((0, r.Z)(e), "renderNoBackgroundTiles", (function() {
                        var t = e.props,
                            n = t.partner,
                            o = t.leftAligned,
                            i = S()("row center-sm", {
                                "-left": n || o
                            });
                        return (0, D.jsx)("div", {
                            className: "container",
                            children: (0, D.jsx)("div", {
                                className: i,
                                children: e.getCategoryTiles()
                            })
                        })
                    })), e
                }
                return (0, i.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.data;
                        if (e.partner) return (0, D.jsx)(D.Fragment, {
                            children: this.renderNoBackgroundTiles()
                        });
                        var n = t.get("backgroundImage");
                        return (0, D.jsx)(D.Fragment, {
                            children: n ? this.getCategoryTilesWithBackground() : this.renderNoBackgroundTiles()
                        })
                    }
                }]), n
            }(d.PureComponent);
            V.displayName = "CategoryTile";
            var G = (0, Z.Z)(V),
                U = n(11246),
                Y = n(63594),
                q = n.n(Y),
                X = n(71377),
                J = n(12348),
                $ = n(17726);

            function ee(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = (0, c.Z)(e);
                    if (t) {
                        var i = (0, c.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var te = function(e) {
                (0, a.Z)(n, e);
                var t = ee(n);

                function n() {
                    var e;
                    (0, o.Z)(this, n);
                    for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(a)), (0, s.Z)((0, r.Z)(e), "onAnchorClick", (function(t) {
                        var n = {};
                        t.includes(M.Amw) && (n = e.storyLinkClick(t)), (0, Q.Cm)(n)
                    })), (0, s.Z)((0, r.Z)(e), "storyLinkClick", (function(t) {
                        var n = e.props.pageType,
                            o = t ? t.split("/") : [],
                            i = (0, U.Z)(o, 4)[3];
                        return {
                            section: M.VHc,
                            subSection: n,
                            selection: i
                        }
                    })), (0, s.Z)((0, r.Z)(e), "partnerLinkClick", (function(t) {
                        var n = e.props,
                            o = n.pageType,
                            i = n.data,
                            r = i && i.getIn(["item", 0, "entryName"]);
                        return t && (r = "".concat(M.ZXp, ":").concat(r)), {
                            section: r,
                            subSection: o,
                            selection: i && i.get("cardType")
                        }
                    })), e
                }
                return (0, i.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        q()()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            n = t.className,
                            o = t.data,
                            i = t.disableParallax,
                            r = t.slnId,
                            a = t.locale,
                            l = t.country,
                            c = o && o.get("backgroundImage"),
                            s = o && o.get("cardType"),
                            d = c && c.get("media"),
                            u = "light" === o.get("colorTheme"),
                            m = o && o.get("textColor"),
                            p = o && o.getIn(["item", 0]),
                            g = p && p.get("title"),
                            h = p && p.get("description"),
                            f = p && p.get("descriptionRichText"),
                            x = p && p.get("callToAction"),
                            v = (0, R.HB)(x, a, l),
                            y = v.href,
                            b = v.text,
                            I = v.ariaLabel,
                            _ = S()("".concat(n, " m-textAndImage -background"), {
                                "-lightTheme": u
                            }),
                            w = {
                                color: m
                            },
                            O = "".concat(r, g ? "_background_title" : "_background_description"),
                            k = s && s === j.M4,
                            C = (null === x || void 0 === x ? void 0 : x.get("theme")) || "secondary",
                            A = null === x || void 0 === x ? void 0 : x.get("buttonColor");
                        return (0, D.jsx)("div", {
                            className: _,
                            children: (0, D.jsx)(X.Z, {
                                children: (0, D.jsxs)("div", {
                                    className: "m-textAndImage__wrapper",
                                    children: [d && (0, D.jsx)(J.Z, {
                                        className: "m-textAndImage__background",
                                        image: d,
                                        size: J.Z.SIZES.LARGE,
                                        ratio: [16, 9],
                                        disableParallax: i,
                                        slnId: "".concat(r, "_background"),
                                        pictureTag: k
                                    }), p && (0, D.jsx)("div", {
                                        className: "container",
                                        children: (0, D.jsx)("div", {
                                            className: "row",
                                            children: (0, D.jsxs)("div", {
                                                className: "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3",
                                                children: [(g || h) && (0, D.jsx)("div", {
                                                    className: "h4 -light",
                                                    style: w,
                                                    "data-sln-id": O,
                                                    children: g || h
                                                }), f && (0, D.jsx)($.Z, {
                                                    data: f,
                                                    dataSlnId: O
                                                }), x && (0, D.jsx)(F.Z, {
                                                    cta: x,
                                                    variant: C,
                                                    labelText: b,
                                                    href: y,
                                                    forceClick: !0,
                                                    onClick: function() {
                                                        return e.onAnchorClick(y.pathname)
                                                    },
                                                    invertColor: u,
                                                    slnId: "".concat(r, "_background_CTA_links"),
                                                    ariaLabel: I,
                                                    buttonColor: A
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    }
                }]), n
            }(d.PureComponent);
            te.displayName = "Background";
            var ne = n(90104),
                oe = n.n(ne),
                ie = n(34051),
                re = n(19783),
                ae = n.n(re),
                le = n(38944),
                ce = n(27239),
                se = n(19410),
                de = n(8103);

            function ue(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function me(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ue(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ue(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function pe(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = (0, c.Z)(e);
                    if (t) {
                        var i = (0, c.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var ge = function(e) {
                (0, a.Z)(n, e);
                var t = pe(n);

                function n(e) {
                    var i;
                    return (0, o.Z)(this, n), i = t.call(this, e), (0, s.Z)((0, r.Z)(i), "readMoreDescp", (function() {
                        i.setState({
                            showReadMore: !1
                        })
                    })), (0, s.Z)((0, r.Z)(i), "addResizeListener", (function() {
                        i.props.isFaqSection && window.addEventListener("resize", ae()(i.onResize, 20))
                    })), (0, s.Z)((0, r.Z)(i), "removeResizeListener", (function() {
                        i.props.isFaqSection && window.removeEventListener("resize", ae()(i.onResize, 20))
                    })), (0, s.Z)((0, r.Z)(i), "onResize", (function() {
                        var e = i.props.isFaqSection,
                            t = i.container.current;
                        if (t && e) {
                            var n = t.offsetWidth,
                                o = (0, R.Gu)(n);
                            t.style.minHeight = "".concat(o, "px")
                        }
                    })), (0, s.Z)((0, r.Z)(i), "handleSalesSupportCompModal", (function() {
                        var e = i.state.showModal;
                        i.setState({
                            showModal: !e
                        })
                    })), (0, s.Z)((0, r.Z)(i), "partnerLinkClick", (function(e) {
                        var t = i.props,
                            n = t.pageType,
                            o = t.data,
                            r = o.getIn(["baseContent", "template"]),
                            a = o.getIn(["callToAction", "linkText"]);
                        return {
                            section: e ? "".concat(M.icT, ":").concat(a) : M.J0Z,
                            subSection: n,
                            selection: r
                        }
                    })), (0, s.Z)((0, r.Z)(i), "renderBackgroundVideo", (function(e) {
                        var t = {
                                mediaItem: e,
                                trackVideo: !1
                            },
                            n = e.getIn(["media", "defaultAssetUrl"]),
                            o = e.getIn(["media", "autoPlay"]);
                        return (0, D.jsx)("div", {
                            ref: i.container,
                            className: "m-textAndImage__video",
                            children: (0, D.jsx)(le.Z, me(me({
                                autoplay: o,
                                loop: o,
                                muted: o,
                                backgroundVideo: t.mediaItem
                            }, t), {}, {
                                isSmallBtn: !0
                            }), n)
                        })
                    })), (0, s.Z)((0, r.Z)(i), "renderText", (function() {
                        var e = i.props,
                            t = e.data,
                            n = e.slnId,
                            o = e.locale,
                            r = e.country,
                            a = e.readMoreLabel,
                            l = t.get("description"),
                            c = t.get("descriptionRichText"),
                            s = null === t || void 0 === t ? void 0 : t.get("alternateDescription"),
                            d = t.get("title"),
                            u = t.get("subtitle");
                        return (0, D.jsxs)("div", {
                            className: "textAndImage-text",
                            children: [(!oe()(d) || !oe()(u)) && (0, D.jsxs)(D.Fragment, {
                                children: [d && (0, D.jsx)("h2", {
                                    className: "m-textAndImage__title h5 -secondary",
                                    "data-sln-id": "".concat(n, "_fiftyfifty_title"),
                                    children: d
                                }), u && (0, D.jsx)("h2", {
                                    className: "h4",
                                    "data-sln-id": "".concat(n, "_fiftyfifty_subtitle"),
                                    children: u
                                })]
                            }), !i.state.showReadMore && l && (0, D.jsx)(de.Z, {
                                className: "b1",
                                "data-sln-id": "".concat(n, "_fiftyfifty_description"),
                                data: (0, ie.fromJS)({
                                    description: l
                                }),
                                slnId: n,
                                locale: o,
                                country: r
                            }), i.state.showReadMore && (0, D.jsxs)(D.Fragment, {
                                children: [(0, D.jsx)($.Z, {
                                    data: s,
                                    dataSlnId: "".concat(n, "_fiftyfifty_description"),
                                    className: "alt-desc"
                                }), (0, D.jsx)(P.Z, {
                                    cta: null,
                                    className: "b1 m-readMore",
                                    onClick: i.readMoreDescp,
                                    onKeyDown: i.readMoreDescp,
                                    noLink: !0,
                                    tabindex: "0",
                                    ariaLabel: a,
                                    children: a
                                })]
                            }), !i.state.showReadMore && c && (0, D.jsx)($.Z, {
                                data: c,
                                dataSlnId: "".concat(n, "_fiftyfifty_description")
                            })]
                        })
                    })), (0, s.Z)((0, r.Z)(i), "getButtonProps", (function(e, t) {
                        var n = i.props.country,
                            o = e && e.get("url"),
                            r = e && e.get("internalPage");
                        !o && r && (o = "/".concat(r.get("slug")));
                        var a = o;
                        (0, z.Sv)(o) || (a = (0, R.LK)({
                            pathname: o,
                            query: {
                                language: t,
                                country: n.toLowerCase()
                            }
                        }));
                        var l = e && e.get("target"),
                            c = !("_blank" === l),
                            s = e && e.get("theme") || "secondary",
                            d = o ? !(o.length > 1) : null;
                        return {
                            href: a,
                            slnId: "_ctaButton",
                            wrapperClass: "button-wrapper",
                            target: l,
                            variant: s,
                            forceClick: c,
                            labelText: e && e.get("linkText"),
                            disabled: d,
                            ariaLabel: e && e.get("ariaLabel"),
                            buttonColor: null === e || void 0 === e ? void 0 : e.get("buttonColor")
                        }
                    })), (0, s.Z)((0, r.Z)(i), "renderImageWithOrWithoutLink", (function(e, t, n, o, r, a) {
                        var l = i.props.slnId;
                        return e && !t ? (0, D.jsx)("div", {
                            className: "image-clickable",
                            children: (0, D.jsx)(P.Z, {
                                cta: e,
                                href: n,
                                target: o,
                                forceClick: !0,
                                children: (0, D.jsx)(J.Z, {
                                    image: r,
                                    size: J.Z.SIZES.MEDIUM,
                                    ratio: a,
                                    disableParallax: !0,
                                    isNextImage: !0,
                                    slnId: "".concat(l, "_fiftyfifty_")
                                })
                            })
                        }) : (0, D.jsx)(J.Z, {
                            image: r,
                            size: J.Z.SIZES.MEDIUM,
                            ratio: a,
                            disableParallax: !0,
                            isNextImage: !0,
                            slnId: "".concat(l, "_fiftyfifty_")
                        })
                    })), i.container = (0, d.createRef)(), i.state = {
                        showModal: !1,
                        showReadMore: !1
                    }, i
                }
                return (0, i.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e;
                        this.onResize(), this.addResizeListener(), (null === (e = this.props.data) || void 0 === e ? void 0 : e.get("alternateDescription")) && this.setState({
                            showReadMore: !0
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.removeResizeListener()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.imageRight,
                            o = e.data,
                            i = e.locale,
                            r = e.country,
                            a = e.slnId,
                            l = e.withOutBackground,
                            c = e.isFaqSection,
                            s = e.compName,
                            d = e.overlayItems,
                            u = o.get("mediaItem"),
                            m = u && u.get("media"),
                            p = u && u.get("mediaType"),
                            g = o.get("logoMedia"),
                            h = g && g.get("media"),
                            f = o.get("callToAction"),
                            x = s === se.pX,
                            v = S()("".concat(t, " m-textAndImage -fiftyFifty"), {
                                "-imageRight": n,
                                "-withBackground": !l
                            }),
                            y = this.props.data.getIn(["callToAction", "title"]),
                            b = {
                                isButton: !0,
                                variant: (null === f || void 0 === f ? void 0 : f.get("theme")) || "secondary",
                                className: "button",
                                slnId: "_ctaButton",
                                type: "submit",
                                forceClick: !0,
                                wrapperClass: "button-wrapper",
                                labelText: y,
                                buttonColor: null === f || void 0 === f ? void 0 : f.get("buttonColor")
                            },
                            I = o.get("secondaryCallToAction"),
                            _ = this.getButtonProps(f, i),
                            j = this.getButtonProps(I, i),
                            w = c ? [16, 9] : [1, 1],
                            O = null === f || void 0 === f ? void 0 : f.get("url");
                        O = (0, z.Sv)(O) ? O : (0, R.LK)({
                            pathname: O,
                            query: {
                                language: i,
                                country: null === r || void 0 === r ? void 0 : r.toLowerCase()
                            }
                        });
                        var k = null === f || void 0 === f ? void 0 : f.get("target");
                        return (0, D.jsxs)("div", {
                            className: v,
                            "data-sln-id": "".concat(a, "_container"),
                            children: [(0, D.jsx)(X.Z, {
                                children: (0, D.jsx)("div", {
                                    className: "m-textAndImage__wrapper",
                                    children: (0, D.jsxs)("div", {
                                        className: "row",
                                        children: [(0, D.jsx)("div", {
                                            className: "m-textAndImage__columnLeft col-xs-12 col-sm-6",
                                            children: (0, D.jsx)("div", {
                                                className: "m-textAndImage__image",
                                                children: m && ("video" === p || "externalVideo" === p ? this.renderBackgroundVideo(u) : this.renderImageWithOrWithoutLink(f, I, O, k, m, w))
                                            })
                                        }), (0, D.jsx)("div", {
                                            className: "col-xs-12 col-sm-6",
                                            children: (0, D.jsx)("div", {
                                                className: "row textAndImageTextWrapper",
                                                children: (0, D.jsxs)("div", {
                                                    className: "col-xs-12 col-sm-offset-2 col-sm-8 m-textAndImage__copy",
                                                    children: [x && (0, D.jsxs)(D.Fragment, {
                                                        children: [this.renderText(), g && (0, D.jsx)(L.Z, {
                                                            media: h,
                                                            size: L.Z.SIZES.XSMALL,
                                                            className: "textAndImage_Logo",
                                                            transparent: !0
                                                        }), (0, D.jsx)("div", {
                                                            children: (0, D.jsx)(F.Z, me(me({
                                                                cta: null
                                                            }, b), {}, {
                                                                onClick: this.handleSalesSupportCompModal
                                                            }))
                                                        })]
                                                    }), !x && (f ? (0, D.jsxs)(D.Fragment, {
                                                        children: [(0, D.jsxs)(D.Fragment, {
                                                            children: [this.renderText(), g && (0, D.jsx)(L.Z, {
                                                                media: h,
                                                                size: L.Z.SIZES.XSMALL,
                                                                transparent: !0,
                                                                className: "textAndImage_Logo"
                                                            })]
                                                        }), !this.state.showReadMore && (0, D.jsxs)("div", {
                                                            className: "cta-buttons",
                                                            children: [(0, D.jsx)("div", {
                                                                className: "first-cta",
                                                                children: (0, D.jsx)(F.Z, me({
                                                                    cta: f
                                                                }, _))
                                                            }), I && (0, D.jsx)("div", {
                                                                className: "second-cta",
                                                                children: (0, D.jsx)(F.Z, me({
                                                                    cta: I
                                                                }, j))
                                                            })]
                                                        })]
                                                    }) : (0, D.jsxs)("div", {
                                                        children: [this.renderText(), g && (0, D.jsx)(L.Z, {
                                                            media: h,
                                                            size: L.Z.SIZES.XSMALL,
                                                            className: "textAndImage_Logo",
                                                            transparent: !0
                                                        })]
                                                    }))]
                                                })
                                            })
                                        })]
                                    })
                                })
                            }), this.state.showModal && (0, D.jsx)(ce.Z, {
                                closeModalHanlder: this.handleSalesSupportCompModal,
                                overlayItems: d
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);

            function he(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function fe(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? he(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : he(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            ge.displayName = "FiftyFifty";
            var xe = function(e) {
                    var t = e.className,
                        n = e.data,
                        o = e.locale,
                        i = e.slnId,
                        r = e.country,
                        a = e.imageRight,
                        l = function() {
                            var e = null === n || void 0 === n ? void 0 : n.get("subtitle"),
                                t = {
                                    eventName: M.Ceb,
                                    section: M.En4,
                                    subSection: M.JZq,
                                    selection: "".concat(M.Cae, "|").concat(e)
                                };
                            (0, Q.Cm)(t)
                        },
                        c = null === n || void 0 === n ? void 0 : n.get("callToAction"),
                        s = "".concat(t, " m-textAndImage -fiftyFiftyTwoThird"),
                        d = a ? "-imageRight" : "",
                        u = null === n || void 0 === n ? void 0 : n.getIn(["mediaItem", "media", "defaultAssetUrl"]),
                        m = null === n || void 0 === n ? void 0 : n.getIn(["mediaItem", "media", "defaultAssetUrl"]),
                        p = c && function() {
                            var e = null === c || void 0 === c ? void 0 : c.get("url"),
                                t = e;
                            (0, z.Sv)(e) || (t = (0, z.Sv)(e) ? e : (0, R.LK)({
                                pathname: e,
                                query: {
                                    language: o,
                                    country: r.toLowerCase()
                                }
                            }));
                            var n = null === c || void 0 === c ? void 0 : c.get("target"),
                                i = (null === c || void 0 === c ? void 0 : c.get("theme")) || "secondary",
                                a = e ? !(e.length > 1) : null;
                            return {
                                href: t,
                                slnId: "fiftyFityTwoThird_ctaButton",
                                wrapperClass: "button-wrapper",
                                target: n,
                                variant: i,
                                forceClick: !0,
                                labelText: null === c || void 0 === c ? void 0 : c.get("linkText"),
                                disabled: a,
                                ariaLabel: null === c || void 0 === c ? void 0 : c.get("ariaLabel"),
                                tertiaryBtnHoverColor: "#000",
                                buttonColor: null === c || void 0 === c ? void 0 : c.get("buttonColor")
                            }
                        }(),
                        g = (null === c || void 0 === c ? void 0 : c.get("theme")) || "secondary",
                        h = null === c || void 0 === c ? void 0 : c.get("url");
                    h = (0, z.Sv)(h) ? h : (0, R.LK)({
                        pathname: h,
                        query: {
                            language: o,
                            country: null === r || void 0 === r ? void 0 : r.toLowerCase()
                        }
                    });
                    var f = null === c || void 0 === c ? void 0 : c.get("target"),
                        x = null === c || void 0 === c ? void 0 : c.get("ariaLabel");
                    return (0, D.jsx)("div", {
                        className: s,
                        "data-sln-id": "".concat(i, "_container"),
                        children: (0, D.jsxs)("div", {
                            className: "m-textAndImage__wrapper row",
                            children: [(0, D.jsx)("div", {
                                className: "textAndImage__imageWrapper col-xs-12 col-sm-6 ".concat(d),
                                children: c ? (0, D.jsx)("div", {
                                    className: "image-clickable",
                                    children: (0, D.jsx)(P.Z, {
                                        cta: c,
                                        href: h,
                                        target: f,
                                        forceClick: !0,
                                        onClick: l,
                                        ariaLabel: x,
                                        children: (0, D.jsx)("div", {
                                            className: "relative h-full w-full",
                                            style: {
                                                aspectRatio: (0, R.VC)([5, 6])
                                            },
                                            children: (0, D.jsx)(E.Z, {
                                                contentfulImage: !0,
                                                className: "textAndImage__image",
                                                alt: m,
                                                imgSrc: u,
                                                layout: "fill",
                                                objectFit: "cover",
                                                priority: !0,
                                                loading: "eager"
                                            })
                                        })
                                    })
                                }) : (0, D.jsx)("div", {
                                    className: "relative h-full w-full",
                                    style: {
                                        aspectRatio: (0, R.VC)([5, 6])
                                    },
                                    children: (0, D.jsx)(E.Z, {
                                        contentfulImage: !0,
                                        className: "textAndImage__image",
                                        alt: m,
                                        imgSrc: u,
                                        layout: "fill",
                                        objectFit: "cover"
                                    })
                                })
                            }), (0, D.jsxs)("div", {
                                className: "textAndImage__textWrapper col-xs-12 col-sm-6",
                                children: [function() {
                                    var e = null === n || void 0 === n ? void 0 : n.get("description"),
                                        t = null === n || void 0 === n ? void 0 : n.get("descriptionRichText"),
                                        o = null === n || void 0 === n ? void 0 : n.get("title"),
                                        r = null === n || void 0 === n ? void 0 : n.get("subtitle");
                                    return (0, D.jsxs)("div", {
                                        className: "textAndImage-text",
                                        children: [(!oe()(o) || !oe()(r)) && (0, D.jsxs)("h2", {
                                            children: [o && (0, D.jsx)("div", {
                                                className: "fiftyFiftyTwoThird_title h5",
                                                "data-sln-id": "".concat(i, "_fiftyfifty_title"),
                                                children: o
                                            }), r && (0, D.jsx)("div", {
                                                className: "fiftyFiftyTwoThird_subTitle h4",
                                                "data-sln-id": "".concat(i, "_fiftyfifty_subtitle"),
                                                children: r
                                            })]
                                        }), e && (0, D.jsx)("p", {
                                            className: "fiftyFiftyTwoThird_description b1",
                                            "data-sln-id": "".concat(i, "_fiftyfifty_description"),
                                            children: e
                                        }), t && (0, D.jsx)($.Z, {
                                            data: t,
                                            dataSlnId: "".concat(i, "_fiftyfifty_description")
                                        })]
                                    })
                                }(), (0, D.jsx)("div", {
                                    className: "textAndImage__cta",
                                    children: c && (0, D.jsx)(F.Z, fe(fe({
                                        cta: c
                                    }, p), {}, {
                                        variant: g,
                                        onClick: l
                                    }))
                                })]
                            })]
                        })
                    })
                },
                ve = n(2463),
                ye = n(48500);

            function be(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Ie(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? be(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : be(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var _e = function(e) {
                    var t, n = e.className,
                        o = e.data,
                        i = e.locale,
                        r = e.slnId,
                        a = e.country,
                        l = e.viewportInfo,
                        c = e.pageType,
                        s = e.isFeaturedStory,
                        u = (0, d.useState)(!1),
                        m = u[0],
                        p = u[1],
                        g = (0, d.useRef)(null),
                        h = (0, d.useState)(!1),
                        f = h[0],
                        x = h[1],
                        v = null === o || void 0 === o ? void 0 : o.get("subtitle"),
                        y = null === o || void 0 === o ? void 0 : o.get("title"),
                        b = function(e) {
                            var t, n = null === e || void 0 === e || null === (t = e.currentTarget) || void 0 === t ? void 0 : t.innerText,
                                o = {
                                    eventName: M.cHh,
                                    section: c,
                                    subSection: M.B0k,
                                    selection: "".concat(null === n || void 0 === n ? void 0 : n.toLowerCase(), ":").concat(null === y || void 0 === y ? void 0 : y.toLowerCase())
                                };
                            (0, Q.Cm)(o)
                        },
                        I = S()("".concat(n, " m-textAndImage -oneFeature -versionTwo"), {
                            "-isFeaturedStory": s
                        }),
                        _ = null === o || void 0 === o ? void 0 : o.getIn(["mediaItem", "media", "altText"]),
                        j = null === o || void 0 === o ? void 0 : o.getIn(["mediaItem", "media", "defaultAssetUrl"]),
                        w = (null === o || void 0 === o ? void 0 : o.getIn(["mediaItem", "media", "mobileAssetUrl"])) || j,
                        O = null === o || void 0 === o ? void 0 : o.get("description"),
                        k = null === o || void 0 === o ? void 0 : o.get("callToAction"),
                        C = null === o || void 0 === o ? void 0 : o.getIn(["mediaItem", "mediaType"]),
                        A = null === o || void 0 === o ? void 0 : o.get("mediaItem"),
                        N = null === o || void 0 === o ? void 0 : o.getIn(["mediaItem", "media", "autoPlay"]),
                        T = null === o || void 0 === o ? void 0 : o.getIn(["mediaItem", "media", "enableLoop"]),
                        Z = k && function(e) {
                            var t = e.callToAction,
                                n = null === t || void 0 === t ? void 0 : t.get("url"),
                                o = n;
                            (0, z.Sv)(n) || (o = (0, R.LK)({
                                pathname: n,
                                query: {
                                    language: i,
                                    country: a.toLowerCase()
                                }
                            }));
                            var r = null === t || void 0 === t ? void 0 : t.get("target"),
                                l = (null === t || void 0 === t ? void 0 : t.get("theme")) || "secondary",
                                c = n ? !(n.length > 1) : null;
                            return {
                                href: o,
                                slnId: "oneFeature_ctaButton",
                                wrapperClass: "button-wrapper",
                                target: r,
                                variant: l,
                                forceClick: !0,
                                labelText: null === t || void 0 === t ? void 0 : t.get("linkText"),
                                disabled: c,
                                ariaLabel: null === t || void 0 === t ? void 0 : t.get("ariaLabel"),
                                centered: !0,
                                buttonColor: null === t || void 0 === t ? void 0 : t.get("buttonColor")
                            }
                        }({
                            callToAction: k
                        }),
                        B = null === l || void 0 === l ? void 0 : l.getIn(["isSmallerThan", "small"]),
                        E = null === l || void 0 === l ? void 0 : l.getIn(["isSmallerThan", "medium"]),
                        H = S()("", {
                            "col-md-12": s && l && l.getIn(["isEqualOrLargerThan", "medium"])
                        }),
                        W = B ? [4, 5] : [1, 1],
                        K = E ? w : j;
                    return (0, D.jsx)("div", {
                        className: I,
                        "data-sln-id": "".concat(r, "_container"),
                        children: (0, D.jsx)(X.Z, {
                            children: (0, D.jsx)("div", {
                                className: H,
                                children: (0, D.jsxs)("div", {
                                    className: "m-textAndImage__wrapper row textAndImage__wrapper_version_two",
                                    children: ["video" === C ? (0, D.jsxs)("div", {
                                        className: "video-btn-wrapper col-xs-12 col-sm-12 col-md-6",
                                        children: [(0, D.jsx)("div", {
                                            className: "pause-button-wrapper",
                                            children: (0, D.jsx)(ye.Z, {
                                                isPaused: m,
                                                onClick: function(e) {
                                                    e.stopPropagation(), t()
                                                }
                                            })
                                        }), (0, D.jsx)("div", {
                                            className: "video-wrapper ",
                                            children: (0, D.jsx)(ve.default, {
                                                mediaItem: A,
                                                responsive: !0,
                                                ratio: W,
                                                autoplay: N,
                                                loop: T,
                                                controls: !1,
                                                trackVideo: !1,
                                                inheritedClass: "-fadeIn",
                                                setPlayPauseOptions: function(e) {
                                                    t = e
                                                },
                                                setPlayPauseState: function(e) {
                                                    p(e)
                                                }
                                            })
                                        })]
                                    }) : (0, D.jsx)("div", {
                                        className: "imageWrapper col-xs-12 col-sm-12 col-md-6",
                                        children: (0, D.jsx)("div", {
                                            className: "imageContainer",
                                            children: (0, D.jsx)("div", {
                                                className: "row",
                                                children: (0, D.jsx)("div", {
                                                    className: "image_columns col-xs-12 col-sm-10 col-sm-offset-1 col-md-12 col-md-offset-0",
                                                    ref: g,
                                                    onMouseEnter: function() {
                                                        x(!0)
                                                    },
                                                    onMouseLeave: function() {
                                                        x(!1)
                                                    },
                                                    children: k ? (0, D.jsx)(P.Z, {
                                                        cta: k,
                                                        href: null === Z || void 0 === Z ? void 0 : Z.href,
                                                        target: null === Z || void 0 === Z ? void 0 : Z.target,
                                                        handleLinkClick: b,
                                                        ariaLabel: null === Z || void 0 === Z ? void 0 : Z.ariaLabel,
                                                        children: (0, D.jsx)(L.Z, {
                                                            className: "oneFeature__image",
                                                            src: K,
                                                            alt: _,
                                                            ratio: W
                                                        })
                                                    }) : (0, D.jsx)(L.Z, {
                                                        className: "oneFeature__image",
                                                        src: K,
                                                        alt: _,
                                                        ratio: W
                                                    })
                                                })
                                            })
                                        })
                                    }), (0, D.jsx)("div", {
                                        className: "textContainer col-xs-12 col-sm-12 col-md-6",
                                        children: (0, D.jsx)("div", {
                                            className: "textWrapper__v2",
                                            children: (0, D.jsxs)("div", {
                                                className: "container",
                                                children: [y && (0, D.jsx)("h2", {
                                                    className: "brand-reignite h5 oneFeature__title",
                                                    children: y
                                                }), v && (0, D.jsx)("h2", {
                                                    className: "brand-reignite h2 oneFeature_subtitle",
                                                    children: v
                                                }), O && (0, D.jsx)("div", {
                                                    className: "row",
                                                    children: (0, D.jsx)("div", {
                                                        className: "col-xs-12 col-sm-8 col-sm-offset-2 col-md-12 col-md-offset-0",
                                                        children: (0, D.jsx)("p", {
                                                            className: "brand-reignite b1 oneFeature__description",
                                                            children: O
                                                        })
                                                    })
                                                }), k && (0, D.jsx)("div", {
                                                    className: "oneFeature__cta",
                                                    onMouseEnter: function() {
                                                        return function() {
                                                            var e = null === g || void 0 === g ? void 0 : g.current;
                                                            e && null !== e && void 0 !== e && e.classList && e.classList.add("-isHover")
                                                        }()
                                                    },
                                                    onMouseLeave: function() {
                                                        return function() {
                                                            var e, t = null === g || void 0 === g ? void 0 : g.current;
                                                            null !== t && void 0 !== t && null !== (e = t.classList) && void 0 !== e && e.contains("-isHover") && t.classList.remove("-isHover")
                                                        }()
                                                    },
                                                    children: (0, D.jsx)(F.Z, Ie(Ie({
                                                        cta: k
                                                    }, Z), {}, {
                                                        onClick: b,
                                                        isHovered: f
                                                    }))
                                                })]
                                            })
                                        })
                                    })]
                                })
                            })
                        })
                    })
                },
                je = n(6234),
                we = (0, je.Z)((function(e) {
                    var t, n = e.mediaItem,
                        o = e.isLessThanDesktop,
                        i = e.autoplay,
                        r = e.loop,
                        a = (0, d.useState)(!1),
                        l = a[0],
                        c = a[1];
                    return (0, D.jsxs)("div", {
                        className: "video-btn-wrapper",
                        children: [(0, D.jsx)("div", {
                            className: "pause-button-wrapper",
                            children: (0, D.jsx)(ye.Z, {
                                isPaused: l,
                                onClick: function(e) {
                                    e.stopPropagation(), t()
                                }
                            })
                        }), (0, D.jsx)("div", {
                            className: "video-wrapper",
                            children: (0, D.jsx)(ve.default, {
                                mediaItem: n,
                                responsive: !0,
                                ratio: o ? [4, 5] : [16, 9],
                                autoplay: i,
                                loop: r,
                                controls: !1,
                                trackVideo: !1,
                                inheritedClass: "-fadeIn",
                                setPlayPauseOptions: function(e) {
                                    t = e
                                },
                                setPlayPauseState: function(e) {
                                    c(!!e)
                                }
                            })
                        })]
                    })
                }));

            function Oe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function ke(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Oe(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Oe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ce = (0, je.Z)((function(e) {
                    var t = e.className,
                        n = e.data,
                        o = e.locale,
                        i = e.slnId,
                        r = e.country,
                        a = e.viewportInfo,
                        l = e.pageType,
                        c = (0, d.useState)(!1),
                        s = c[0],
                        u = c[1],
                        m = (0, d.useState)(-1),
                        p = m[0],
                        g = m[1],
                        h = function(e) {
                            u(!0), g(e)
                        },
                        f = function() {
                            u(!1), g(-1)
                        },
                        x = function() {},
                        v = null === n || void 0 === n ? void 0 : n.get("item"),
                        y = "".concat(t, " -twoFeature"),
                        b = null === a || void 0 === a ? void 0 : a.getIn(["isSmallerThan", "medium"]);
                    return (0, D.jsx)("div", {
                        className: y,
                        "data-sln-id": "".concat(i, "_container"),
                        children: (0, D.jsx)(X.Z, {
                            children: (0, D.jsx)("div", {
                                className: "m-textAndImage__wrapper",
                                children: (0, D.jsx)("div", {
                                    className: "row",
                                    children: null === v || void 0 === v ? void 0 : v.map((function(e, t) {
                                        var n = null === e || void 0 === e ? void 0 : e.get("title"),
                                            a = null === e || void 0 === e ? void 0 : e.get("subtitle"),
                                            c = null === e || void 0 === e ? void 0 : e.get("mediaItem"),
                                            d = null === e || void 0 === e ? void 0 : e.getIn(["mediaItem", "media", "defaultAssetUrl"]),
                                            u = null === e || void 0 === e ? void 0 : e.getIn(["mediaItem", "mediaType"]),
                                            m = null === e || void 0 === e ? void 0 : e.getIn(["mediaItem", "media", "altText"]),
                                            g = null === e || void 0 === e ? void 0 : e.getIn(["mediaItem", "media", "autoPlay"]),
                                            y = null === e || void 0 === e ? void 0 : e.getIn(["mediaItem", "media", "enableLoop"]),
                                            I = null === e || void 0 === e ? void 0 : e.get("callToAction"),
                                            _ = "".concat(n, "_").concat(t),
                                            j = I && function(e) {
                                                var t = e.callToAction,
                                                    n = null === t || void 0 === t ? void 0 : t.get("url"),
                                                    i = n;
                                                (0, z.Sv)(n) || (i = (0, R.LK)({
                                                    pathname: n,
                                                    query: {
                                                        language: o,
                                                        country: r.toLowerCase()
                                                    }
                                                }));
                                                var a = null === t || void 0 === t ? void 0 : t.get("target"),
                                                    l = (null === t || void 0 === t ? void 0 : t.get("theme")) || "secondary",
                                                    c = n ? !(n.length > 1) : null;
                                                return {
                                                    href: i,
                                                    slnId: "twoFeature_ctaButton",
                                                    wrapperClass: "button-wrapper",
                                                    target: a,
                                                    variant: l,
                                                    forceClick: !0,
                                                    labelText: null === t || void 0 === t ? void 0 : t.get("linkText"),
                                                    disabled: c,
                                                    ariaLabel: null === t || void 0 === t ? void 0 : t.get("ariaLabel"),
                                                    centered: !0,
                                                    buttonColor: null === t || void 0 === t ? void 0 : t.get("buttonColor")
                                                }
                                            }({
                                                callToAction: I
                                            }),
                                            w = S()("textAndImage__cta brand-reignite", {
                                                "cta-margin": t !== v.size - 1
                                            }),
                                            O = s && t === p ? "zoomin" : "";
                                        return (0, D.jsxs)("div", {
                                            className: "col-md-6 col-sm-12 col-xs-12 wrapper",
                                            children: ["video" === u ? (0, D.jsx)(we, {
                                                mediaItem: c,
                                                autoplay: g,
                                                loop: y,
                                                isLessThanDesktop: b
                                            }) : (0, D.jsx)(P.Z, {
                                                cta: I,
                                                href: j.href,
                                                target: j.target,
                                                onMouseEnter: function() {
                                                    return h(t)
                                                },
                                                onMouseLeave: function() {
                                                    return f()
                                                },
                                                handleLinkClick: x,
                                                ariaLabel: null === j || void 0 === j ? void 0 : j.ariaLabel,
                                                children: (0, D.jsx)("div", {
                                                    className: "wrapper-image ".concat(O),
                                                    children: (0, D.jsx)(L.Z, {
                                                        className: "image__twoFeature",
                                                        src: d,
                                                        alt: m,
                                                        ratio: [16, 9]
                                                    })
                                                })
                                            }), (0, D.jsxs)("div", {
                                                className: "text__wrapper",
                                                children: [n && (0, D.jsx)("p", {
                                                    className: "title brand-reignite h5 text-color",
                                                    children: n
                                                }), a && (0, D.jsx)("p", {
                                                    className: "sub_title brand-reignite h3 text-color",
                                                    children: a
                                                }), (0, D.jsx)(de.Z, {
                                                    className: "description brand-reignite b1 text-color",
                                                    data: e,
                                                    slnId: i,
                                                    locale: o,
                                                    country: r
                                                }), I && (0, D.jsx)("div", {
                                                    className: w,
                                                    onMouseEnter: function() {
                                                        return h(t)
                                                    },
                                                    onMouseLeave: function() {
                                                        return f()
                                                    },
                                                    children: (0, D.jsx)(F.Z, ke(ke({
                                                        cta: I
                                                    }, j), {}, {
                                                        onClick: function() {
                                                            return function(e) {
                                                                var t = null === e || void 0 === e ? void 0 : e.get("title"),
                                                                    n = null === e || void 0 === e ? void 0 : e.get("callToAction"),
                                                                    o = null === n || void 0 === n ? void 0 : n.get("linkText"),
                                                                    i = {
                                                                        section: l,
                                                                        subSection: M.B0k,
                                                                        selection: "".concat(o, ":").concat(t).toLowerCase()
                                                                    };
                                                                (0, Q.Cm)(i)
                                                            }(e)
                                                        },
                                                        isHovered: s && t === p
                                                    }))
                                                })]
                                            })]
                                        }, _)
                                    }))
                                })
                            })
                        })
                    })
                })),
                Se = (0, k.Z)(Ce, y),
                Ae = n(85060);

            function Ne(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Te(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Ne(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Ne(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Ze = function(e) {
                var t = e.className,
                    n = e.data,
                    o = e.locale,
                    i = e.slnId,
                    r = e.country,
                    a = e.viewportInfo,
                    l = e.pageType,
                    c = e.isImageRight,
                    s = e.subtitleFont,
                    u = e.subtitleFontDecoration,
                    m = e.readMoreLabel,
                    p = e.textColor,
                    g = (0, d.useState)(!1),
                    h = g[0],
                    f = g[1],
                    x = (0, d.useState)(!1),
                    v = x[0],
                    y = x[1];
                (0, d.useEffect)((function() {
                    (null === n || void 0 === n ? void 0 : n.get("alternateDescription")) && y(!0)
                }), []);
                var b = null === n || void 0 === n ? void 0 : n.get("subtitle"),
                    I = null === n || void 0 === n ? void 0 : n.get("title"),
                    _ = S()("".concat(t, " m-textAndImage -holiday"), {
                        "-imageRight": c
                    }),
                    j = null === n || void 0 === n ? void 0 : n.getIn(["mediaItem", "media", "altText"]),
                    w = null === n || void 0 === n ? void 0 : n.getIn(["mediaItem", "media", "defaultAssetUrl"]),
                    O = (null === n || void 0 === n ? void 0 : n.getIn(["mediaItem", "media", "mobileAssetUrl"])) || w,
                    k = null === n || void 0 === n ? void 0 : n.get("description"),
                    C = null === n || void 0 === n ? void 0 : n.get("alternateDescription"),
                    A = null === n || void 0 === n ? void 0 : n.get("callToAction"),
                    N = null === A || void 0 === A ? void 0 : A.get("url"),
                    T = N;
                (0, z.Sv)(N) || (T = (0, R.LK)({
                    pathname: N,
                    query: {
                        language: o,
                        country: r.toLowerCase()
                    }
                }));
                var Z, L = null === A || void 0 === A ? void 0 : A.get("target"),
                    B = (null === A || void 0 === A ? void 0 : A.get("theme")) || "primary",
                    H = N ? !(N.length > 1) : null,
                    W = {
                        href: T,
                        slnId: "holiday_textAndImage",
                        wrapperClass: "button-wrapper",
                        target: L,
                        variant: B,
                        forceClick: !0,
                        labelText: null === A || void 0 === A ? void 0 : A.get("linkText"),
                        disabled: H,
                        ariaLabel: null === A || void 0 === A ? void 0 : A.get("ariaLabel"),
                        centered: !0,
                        buttonColor: null === A || void 0 === A ? void 0 : A.get("buttonColor")
                    },
                    K = null === n || void 0 === n ? void 0 : n.getIn(["mediaItem", "mediaType"]),
                    V = null === n || void 0 === n ? void 0 : n.get("mediaItem"),
                    G = null === n || void 0 === n ? void 0 : n.getIn(["mediaItem", "media", "autoPlay"]),
                    U = null === n || void 0 === n ? void 0 : n.getIn(["mediaItem", "media", "enableLoop"]),
                    Y = null === a || void 0 === a ? void 0 : a.getIn(["isSmallerThan", "small"]),
                    q = null === a || void 0 === a ? void 0 : a.getIn(["isSmallerThan", "medium"]),
                    J = function(e) {
                        var t, n = null === e || void 0 === e || null === (t = e.currentTarget) || void 0 === t ? void 0 : t.innerText,
                            o = {
                                eventName: M.cHh,
                                section: l,
                                subSection: M.B0k,
                                selection: "".concat(null === n || void 0 === n ? void 0 : n.toLowerCase())
                            };
                        (0, Q.Cm)(o)
                    },
                    ee = S()("subtitle brand-reignite h3", {
                        "-isFastpen": "fastpen" === s,
                        "-isUnderlined": "underline" === u
                    }),
                    te = function() {
                        y(!1)
                    },
                    ne = Y ? [4, 5] : [1, 1],
                    oe = q ? O : w,
                    re = c ? ["col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-5", "col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6"] : ["col-xs-12 col-sm-offset-1 col-sm-10  col-md-offset-1 col-md-5", "col-xs-12 col-sm-offset-1 col-sm-10 col-md-offset-0 col-md-6"],
                    ae = c ? "-imageRight" : "",
                    le = null === n || void 0 === n ? void 0 : n.get("tags"),
                    ce = null === n || void 0 === n ? void 0 : n.get("tagTheme"),
                    se = [];
                return le && le.forEach((function(e) {
                    var t = null === e || void 0 === e ? void 0 : e.get("value"),
                        n = null === e || void 0 === e ? void 0 : e.get("key"),
                        o = null === e || void 0 === e ? void 0 : e.get("tagTheme");
                    se.push({
                        title: t,
                        tagTheme: o,
                        isDiscounted: "discount" === n
                    })
                })), (0, D.jsx)("div", {
                    className: _,
                    "data-sln-id": "".concat(i, "_container"),
                    children: (0, D.jsx)(X.Z, {
                        children: (0, D.jsxs)("div", {
                            className: "row rows-class w-full",
                            children: [(0, D.jsx)("div", {
                                className: "columns media-columns ".concat(ae, " ").concat(re[0]),
                                children: (0, D.jsxs)("div", {
                                    className: "media-section-wrapper",
                                    children: [se.length > 0 && (0, D.jsx)("div", {
                                        className: "product-tags",
                                        children: (0, D.jsx)(Ae.Z, {
                                            data: (0, ie.fromJS)(se),
                                            color: ce
                                        })
                                    }), "video" === K ? (0, D.jsxs)(D.Fragment, {
                                        children: [(0, D.jsx)("div", {
                                            className: "pause-button-wrapper",
                                            children: (0, D.jsx)(ye.Z, {
                                                isPaused: h,
                                                onClick: function(e) {
                                                    e.stopPropagation(), Z()
                                                }
                                            })
                                        }), (0, D.jsx)("div", {
                                            className: "video-wrapper",
                                            children: (0, D.jsx)(ve.default, {
                                                mediaItem: V,
                                                responsive: !0,
                                                ratio: ne,
                                                autoplay: G,
                                                loop: U,
                                                controls: !1,
                                                trackVideo: !1,
                                                inheritedClass: "-fadeIn",
                                                setPlayPauseOptions: function(e) {
                                                    Z = e
                                                },
                                                setPlayPauseState: function(e) {
                                                    f(e)
                                                }
                                            })
                                        })]
                                    }) : (0, D.jsx)(D.Fragment, {
                                        children: A ? (0, D.jsx)("div", {
                                            className: "image-clickable",
                                            children: (0, D.jsx)(P.Z, {
                                                cta: A,
                                                href: T,
                                                target: L,
                                                forceClick: !0,
                                                onClick: J,
                                                ariaLabel: null === W || void 0 === W ? void 0 : W.ariaLabel,
                                                children: (0, D.jsx)("div", {
                                                    className: "relative w-full h-full",
                                                    style: {
                                                        aspectRatio: (0, R.VC)([1, 1])
                                                    },
                                                    children: (0, D.jsx)(E.Z, {
                                                        contentfulImage: !0,
                                                        alt: j,
                                                        imgSrc: oe,
                                                        layout: "fill",
                                                        priority: !0,
                                                        loading: "eager"
                                                    })
                                                })
                                            })
                                        }) : (0, D.jsx)("div", {
                                            className: "relative w-full h-full",
                                            style: {
                                                aspectRatio: (0, R.VC)([1, 1])
                                            },
                                            children: (0, D.jsx)(E.Z, {
                                                contentfulImage: !0,
                                                alt: j,
                                                imgSrc: oe,
                                                layout: "fill",
                                                priority: !0,
                                                loading: "eager"
                                            })
                                        })
                                    })]
                                })
                            }), (0, D.jsx)("div", {
                                className: "columns ".concat(re[1], " textsection-columns"),
                                children: (0, D.jsx)("div", {
                                    className: "row text-section-row",
                                    children: (0, D.jsx)("div", {
                                        className: "col-xs-12 col-sm-offset-2 col-sm-8",
                                        children: (0, D.jsxs)("div", {
                                            className: "textWrapper",
                                            children: [I && (0, D.jsx)("p", {
                                                className: "title brand-reignite h5",
                                                children: I
                                            }), b && (0, D.jsx)("p", {
                                                className: ee,
                                                children: b
                                            }), C && v && (0, D.jsxs)(D.Fragment, {
                                                children: [(0, D.jsx)($.Z, {
                                                    data: C,
                                                    dataSlnId: "".concat(i, "_Holiday_description"),
                                                    className: "description alt-desc b1",
                                                    propColor: p || "#191817"
                                                }), (0, D.jsx)(P.Z, {
                                                    cta: null,
                                                    className: "b1 m-readMore",
                                                    onClick: te,
                                                    noLink: !0,
                                                    children: m
                                                })]
                                            }), !v && k && (0, D.jsx)("p", {
                                                className: "description brand-reignite b1",
                                                children: k
                                            }), !v && A && (0, D.jsx)("div", {
                                                className: "holiday__ctaWrapper",
                                                children: (0, D.jsx)(F.Z, Te(Te({
                                                    cta: A
                                                }, W), {}, {
                                                    onClick: J
                                                }))
                                            })]
                                        })
                                    })
                                })
                            })]
                        })
                    })
                })
            };

            function Pe(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function Le(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? Pe(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : Pe(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var Be = function(e) {
                var t = e.data,
                    n = e.className,
                    o = e.locale,
                    i = e.country,
                    r = e.textAndImageOverlayCompact,
                    a = e.viewportInfo,
                    l = (null === t || void 0 === t ? void 0 : t.getIn(["item", "0", "mediaItem", "media"])) || (null === t || void 0 === t ? void 0 : t.getIn(["mediaItem", "media"])),
                    c = (null === t || void 0 === t ? void 0 : t.getIn(["item", "0", "mediaItem", "mediaType"])) || (null === t || void 0 === t ? void 0 : t.getIn(["mediaItem", "mediaType"])),
                    s = (null === t || void 0 === t ? void 0 : t.getIn(["item", "0", "mediaItem"])) || (null === t || void 0 === t ? void 0 : t.get("mediaItem")),
                    u = (null === t || void 0 === t ? void 0 : t.getIn(["item", "0", "title"])) || (null === t || void 0 === t ? void 0 : t.get("title")),
                    m = (null === t || void 0 === t ? void 0 : t.getIn(["item", "0", "description"])) || (null === t || void 0 === t ? void 0 : t.get("description")),
                    p = (null === t || void 0 === t ? void 0 : t.getIn(["item", "0", "descriptionRichText"])) || (null === t || void 0 === t ? void 0 : t.get("descriptionRichText")),
                    g = (null === t || void 0 === t ? void 0 : t.getIn(["item", "0", "callToAction"])) || (null === t || void 0 === t ? void 0 : t.get("callToAction")),
                    h = null === g || void 0 === g ? void 0 : g.get("url"),
                    f = h;
                (0, z.Sv)(h) || (f = (0, R.LK)({
                    pathname: h,
                    query: {
                        language: o,
                        country: null === i || void 0 === i ? void 0 : i.toLowerCase()
                    }
                }));
                var x = null === g || void 0 === g ? void 0 : g.get("target"),
                    v = (null === g || void 0 === g ? void 0 : g.get("theme")) || "primary",
                    y = h ? !(h.length > 1) : null,
                    b = null === g || void 0 === g ? void 0 : g.get("linkText"),
                    I = null === g || void 0 === g ? void 0 : g.get("ariaLabel"),
                    _ = null === g || void 0 === g ? void 0 : g.get("buttonColor"),
                    j = {
                        href: f,
                        slnId: "overlayImmersive",
                        wrapperClass: "button-wrapper",
                        target: x,
                        variant: v,
                        forceClick: !0,
                        labelText: b,
                        disabled: y,
                        ariaLabel: I,
                        centered: !0,
                        buttonColor: _
                    },
                    w = (0, d.useRef)(null),
                    O = a && a.getIn(["isSmallerThan", "medium"]),
                    k = null === t || void 0 === t ? void 0 : t.get("itemHorizontalAlignment"),
                    C = null === t || void 0 === t ? void 0 : t.get("itemVerticalAlignment"),
                    S = (null === t || void 0 === t ? void 0 : t.get("itemHorizontalAlignmentMobile")) || k,
                    A = (null === t || void 0 === t ? void 0 : t.get("itemVerticalAlignmentMobile")) || C,
                    N = O ? S : k,
                    T = "",
                    Z = "",
                    P = "";
                switch (O ? A : C) {
                    case "top":
                        switch (N) {
                            case "left":
                                T = "top_left", Z = "--top", P = "--compactTop";
                                break;
                            case "center":
                                T = "top_center", Z = "--top", P = "--compactTop";
                                break;
                            case "right":
                                T = "top_right", Z = "--top", P = "--compactTop";
                                break;
                            default:
                                T = "bottom_left", Z = "--top", P = "--compactTop"
                        }
                        break;
                    case "middle":
                        switch (N) {
                            case "left":
                                T = "center_left", Z = O ? "--full" : "--left", P = O ? "--full" : "--left";
                                break;
                            case "center":
                                T = "center_center", Z = "--full", P = "--full";
                                break;
                            case "right":
                                T = "center_right", Z = O ? "--full" : "--right", P = O ? "--full" : "--right";
                                break;
                            default:
                                T = "bottom_left", Z = O ? "--full" : "--left", P = O ? "--full" : "--left"
                        }
                        break;
                    case "bottom":
                        switch (N) {
                            case "left":
                            default:
                                T = "bottom_left", P = "--compactBottom", Z = "--bottom";
                                break;
                            case "center":
                                T = "bottom_center", P = "--compactBottom", Z = "--bottom";
                                break;
                            case "right":
                                T = "bottom_right", P = "--compactBottom", Z = "--bottom"
                        }
                        break;
                    default:
                        T = "bottom_left", P = O ? "--full" : "--left", Z = "--bottom"
                }
                var L = u || m || g || p;
                return (0, D.jsxs)("div", {
                    className: "".concat(n, " m-textAndImage o-overlayImmersive-wrapper"),
                    ref: w,
                    children: [l && (0, D.jsx)("div", {
                        className: "backgroundImageWrapper ".concat(r ? P : Z, " ").concat(r && "is-compact", " ").concat(L ? "" : "no-content"),
                        children: "video" === c ? (0, D.jsx)(le.Z, {
                            backgroundVideo: s,
                            storyAutoPlayed: !0,
                            parentRef: w
                        }) : (0, D.jsx)(E.Z, {
                            media: l,
                            objectFit: "cover",
                            layout: "fill",
                            contentfulImage: !0,
                            loadingMethod: "eager",
                            priority: !0
                        })
                    }), (0, D.jsx)("div", {
                        className: "content_container",
                        children: (0, D.jsx)(X.Z, {
                            className: "o-overlay_immersive_container",
                            children: (0, D.jsxs)("div", {
                                className: "col-md-5 col-sm-8 col-xs-12 overlay_immersive_content ".concat(T),
                                children: [u && (0, D.jsx)("p", {
                                    className: "h3 overlay_immersive__title",
                                    children: u
                                }), m && (0, D.jsx)("p", {
                                    className: "b1 overlay_immersive__description",
                                    children: m
                                }), p && (0, D.jsx)($.Z, {
                                    data: p,
                                    className: "b1 overlay_immersive__description",
                                    paragraphClassName: "b1 overlay_immersive__description"
                                }), g && (0, D.jsx)("div", {
                                    className: "overlay_immersive__ctaWrapper",
                                    children: (0, D.jsx)(F.Z, Le(Le({
                                        cta: g
                                    }, j), {}, {
                                        onClick: function() {
                                            return function() {
                                                var e = {
                                                    eventName: M.cHh,
                                                    section: M.Hao.HOME,
                                                    subSection: M.B0k,
                                                    selection: "".concat(null === b || void 0 === b ? void 0 : b.toLowerCase(), ": ").concat(u)
                                                };
                                                (0, Q.Cm)(e)
                                            }()
                                        }
                                    }))
                                })]
                            })
                        })
                    })]
                })
            };

            function Ee(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = (0, c.Z)(e);
                    if (t) {
                        var i = (0, c.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var Re = function(e) {
                (0, a.Z)(n, e);
                var t = Ee(n);

                function n() {
                    var e;
                    (0, o.Z)(this, n);
                    for (var i = arguments.length, a = new Array(i), l = 0; l < i; l++) a[l] = arguments[l];
                    return e = t.call.apply(t, [this].concat(a)), (0, s.Z)((0, r.Z)(e), "renderVariant", (function() {
                        var t = j.ZP.categoryTile,
                            n = j.ZP.background,
                            o = j.ZP.fiftyFifty,
                            i = j.ZP.leftOneFeature,
                            r = j.ZP.twoFeature,
                            a = j.ZP.textAndImageLeftHoliday,
                            l = j.ZP.textAndImageRightHoliday,
                            c = j.ZP.textAndImageOverlayImmersive,
                            s = j.ZP.textAndImageOverlayCompact,
                            d = e.props,
                            u = d.className,
                            m = d.variant,
                            p = d.data,
                            g = d.locale,
                            h = d.imageRight,
                            f = d.disableParallax,
                            x = d.categoryLabels,
                            v = d.position,
                            y = d.slnId,
                            b = d.pageType,
                            I = d.withOutBackground,
                            _ = d.partner,
                            w = d.level,
                            O = d.leftAligned,
                            k = d.isFaqSection,
                            C = d.overlayItems,
                            S = d.compName,
                            A = d.country,
                            N = d.isTwoThird,
                            T = d.backgroundColor,
                            Z = d.textColor,
                            P = d.viewportInfo,
                            L = d.isVersionTwo,
                            B = d.isFeaturedStory,
                            E = d.colorTheme,
                            R = d.backgroundSecondaryColor,
                            Q = d.textAlignment,
                            M = d.readMoreLabel,
                            z = null === p || void 0 === p ? void 0 : p.get("subtitleFont"),
                            F = null === p || void 0 === p ? void 0 : p.get("subtitleFontDecoration"),
                            H = null === p || void 0 === p ? void 0 : p.get("backgroundColor"),
                            W = null === p || void 0 === p ? void 0 : p.get("colorTheme"),
                            K = null === p || void 0 === p ? void 0 : p.get("textAlignmentMobile");
                        switch (m) {
                            case t:
                                return (0, D.jsx)(G, {
                                    className: u,
                                    data: p,
                                    locale: g,
                                    categoryLabels: x,
                                    slnId: y,
                                    partner: _,
                                    pageType: b,
                                    level: w,
                                    leftAligned: O,
                                    country: A,
                                    backgroundColor: H,
                                    colorThemeCategoryTile: W
                                });
                            case n:
                                return (0, D.jsx)(te, {
                                    className: u,
                                    data: p,
                                    disableParallax: f,
                                    locale: g,
                                    slnId: y,
                                    pageType: b,
                                    country: A
                                });
                            case o:
                                return N ? (0, D.jsx)(xe, {
                                    className: u,
                                    data: p,
                                    locale: g,
                                    imageRight: h,
                                    slnId: y,
                                    position: v,
                                    pageType: b,
                                    country: A,
                                    backgroundColor: T,
                                    textColor: Z
                                }) : (0, D.jsx)(ge, {
                                    className: u,
                                    data: p,
                                    locale: g,
                                    imageRight: h,
                                    disableParallax: f,
                                    slnId: y,
                                    position: v,
                                    withOutBackground: I,
                                    pageType: b,
                                    isFaqSection: k,
                                    compName: S,
                                    overlayItems: C,
                                    country: A,
                                    readMoreLabel: M,
                                    textColor: Z,
                                    backgroundSecondaryColor: R
                                });
                            case i:
                                return (0, D.jsx)(_e, {
                                    className: u,
                                    data: p,
                                    locale: g,
                                    imageRight: h,
                                    slnId: y,
                                    position: v,
                                    pageType: b,
                                    country: A,
                                    backgroundColor: T,
                                    textColor: Z,
                                    viewportInfo: P,
                                    isVersionTwo: L,
                                    isFeaturedStory: B,
                                    colorTheme: E
                                });
                            case r:
                                return (0, D.jsx)(Se, {
                                    data: p,
                                    className: u,
                                    locale: g,
                                    pageType: b,
                                    slnId: y,
                                    country: A,
                                    viewportInfo: P,
                                    backgroundColor: T,
                                    textColor: Z
                                });
                            case a:
                                return (0, D.jsx)(Ze, {
                                    className: u,
                                    data: p,
                                    locale: g,
                                    slnId: y,
                                    position: v,
                                    pageType: b,
                                    country: A,
                                    backgroundColor: T,
                                    textColor: Z,
                                    viewportInfo: P,
                                    colorTheme: E,
                                    subtitleFont: z,
                                    backgroundSecondaryColor: R,
                                    textAlignment: Q,
                                    subtitleFontDecoration: F,
                                    readMoreLabel: M
                                });
                            case l:
                                return (0, D.jsx)(Ze, {
                                    className: u,
                                    data: p,
                                    locale: g,
                                    slnId: y,
                                    position: v,
                                    pageType: b,
                                    country: A,
                                    backgroundColor: T,
                                    textColor: Z,
                                    viewportInfo: P,
                                    colorTheme: E,
                                    isImageRight: !0,
                                    subtitleFont: z,
                                    backgroundSecondaryColor: R,
                                    textAlignment: Q,
                                    subtitleFontDecoration: F,
                                    readMoreLabel: M
                                });
                            case c:
                                return (0, D.jsx)(Be, {
                                    className: u,
                                    data: p,
                                    pageType: b,
                                    country: A,
                                    locale: g,
                                    viewportInfo: P,
                                    textColor: Z,
                                    colorTheme: E,
                                    textAlignmentMobile: K,
                                    textAlignment: Q
                                });
                            case s:
                                return (0, D.jsx)(Be, {
                                    className: u,
                                    data: p,
                                    pageType: b,
                                    country: A,
                                    locale: g,
                                    viewportInfo: P,
                                    textColor: Z,
                                    colorTheme: E,
                                    textAndImageOverlayCompact: !0,
                                    textAlignmentMobile: K,
                                    textAlignment: Q
                                });
                            default:
                                return "Please specify a valid variant"
                        }
                    })), e
                }
                return (0, i.Z)(n, [{
                    key: "render",
                    value: function() {
                        return this.renderVariant()
                    }
                }]), n
            }(d.PureComponent);
            Re.displayName = "TextAndImage";
            var Qe = (0, je.Z)(Re),
                Me = (0, k.Z)(Qe, O)
        },
        44750: function(e, t, n) {
            n.d(t, {
                TO: function() {
                    return z
                },
                ZP: function() {
                    return G
                }
            });
            var o = n(27378),
                i = n(73546),
                r = n(60042),
                a = n.n(r),
                l = n(34869),
                c = n(6234),
                s = n(41408),
                d = n(83030),
                u = (0, s.iv)(["&.m-textAndIconSupport{text-align:center;}&.cardContainer{display:flex;justify-content:center;padding:60px 0;@media ", "{padding:30px 0;}@media ", "{padding:30px 0;}@media ", "{padding:30px 0;}.headingAndCards{width:100%;}.headingFrame1{margin-top:60px;margin-bottom:40px;height:50px;font-size:", ";line-height:", ";display:flex;align-items:center;justify-content:center;letter-spacing:1px;color:", ";@media ", "{margin-top:30px;height:50px;font-size:", ";line-height:", ";display:flex;align-items:center;text-align:center;letter-spacing:0.6px;color:", ";width:100%;}@media ", "{margin-top:26px;font-size:", ";}}.supportCompCard{@media ", "{margin-top:24px;}.cardWrapper{@media ", "{margin-bottom:20px;height:auto;}.m-textAndIconSupport{height:100%;background:", ";}}.m-chatAndIcon,.m-textAndIcon{@media ", "{padding-top:40px;padding-bottom:40px;}@media ", "{padding-top:40px;padding-bottom:40px;}.h5{line-height:", ";margin-bottom:0;}}.description{font-size:", ";line-height:", ";text-align:center;margin-top:20px;@media ", "{letter-spacing:0;}}.subtitle{margin-top:8px;font-size:", ";line-height:", ";text-align:center;letter-spacing:2px;text-transform:uppercase;color:", ";font-weight:500;}.status-green{color:", ";}.status-brown{color:", ";}.status-red{color:", ";}.invisible{display:none;}.store-timing-wrapper{margin-top:20px;}.day-time-container{display:flex;flex-wrap:wrap;justify-content:space-between;font-size:", ";line-height:", ";color:", ";}.a-anchorButton{line-height:", ";letter-spacing:2px;margin-top:20px;@media ", "{min-width:fit-content;padding:10px 20px;text-align:center;em{display:none;}}@media ", "{width:100%;}}}.cardContainerFrame2{.-padded{padding-top:0;padding-bottom:0;}@media ", "{.-fiftyFifty{margin-top:0;}}@media ", "{.-padded{padding-top:15px;padding-bottom:15px;.m-textAndImage__wrapper{padding-top:0;padding-bottom:0;}}}.row{margin:0;}}.m-textAndImage__columnLeft{padding:0;}.m-textAndImage{.textAndImageTextWrapper{@media ", "{padding:21px 0;}.m-textAndImage__copy{.textAndImage-text{margin-bottom:4px;@media ", "{margin-top:32px;margin-bottom:0;}}}}}.m-textAndImage__copy{@media ", "{padding-top:2px;padding-bottom:40px;}h2{margin-bottom:24px;@media ", "{margin-bottom:20px;}.m-textAndImage__title{font-size:", ";line-height:", ";letter-spacing:1px;text-transform:none;@media ", "{font-size:", ";}}}.a-anchorButton{margin-top:20px;font-size:", ";line-height:", ";letter-spacing:2px;@media ", "{text-align:center;em{display:none;}}@media ", "{width:100%;}}}}"], (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.custom.custom_8)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_23)
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.heading.large.h3)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_23)
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.heading.large.h3)
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.mediaQuery.large
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.colors.RED
                }), (function(e) {
                    return e.theme.colors.GREEN
                }), (function(e) {
                    return e.theme.colors.BEO_GREY_DARK
                }), (function(e) {
                    return e.theme.colors.RED
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.heading.large.h4)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_15)
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.heading.small.h4)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallOnly
                })),
                m = n(57439),
                p = n(96686),
                g = n(19410),
                h = n(99920),
                f = n(43350),
                x = n(80040),
                v = n(59307),
                y = n(48415),
                b = n(73667),
                I = n(3117),
                _ = n(90849),
                j = n(96667),
                w = (0, s.iv)(["&.m-chatAndIcon{text-align:center;", ";svg,img{&.-small{height:26px;width:44px;margin-bottom:10px;}&.-large{width:90px;height:90px;margin-bottom:20px;}}h3{width:100%;&::after{display:none;}}p{width:100%;}.voucherText{margin-top:0;}.thankyou-title{padding-top:20px;line-height:", ";@media ", "{padding-top:26px;line-height:", ";}}.lineHeight_padding{line-height:1.43;padding-bottom:1px;}.a-soundCloud,.a-anchorButton{margin-top:20px;}.a-soundCloud + .a-anchorButton{margin-top:25px;}&.-hasSubtitle{@media ", "{margin-left:20%;margin-right:20%;}}&.-isNewsLetter{@media ", "{margin-right:4%;margin-left:4%;}}&.-trustPilot{.trustLinkIcon{width:143px;height:35px;}.trustIconBtn{margin-top:30px;&.-tertiary{background-color:", ";color:", ";padding:10px 65px 10px 20px;border:2px solid transparent;&:hover,&:active,&:focus{background-color:", ";}.a-animatedIcon{fill:", ";&.-arrowRight{&.-left,&.-right{&::before{background-color:", ";}}}}}}.wrapper{background:", ";padding:40px 0;@media ", "{padding:60px 0;}}}&.-isEmbedded{height:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 16px 32px;background-color:", ";.a-anchorButton{flex-shrink:0;@media ", "{min-width:auto;}}}&.-isNps{h4{font-size:", ";text-transform:none;font-weight:", ";}.a-anchorButton{margin-top:60px;}}&.-isNewsletterConfirmation{h4{font-size:", ";text-transform:none;font-weight:", ";}}}&.-CampaignOverlay{max-width:900px;margin-left:auto;margin-right:auto;form{padding-top:40px;font-size:", ";max-width:410px;margin-left:auto;margin-right:auto;.input.input-email{margin-bottom:20px;}@media ", "{padding-top:20px;}}}"], j.Z.topAndBottomWhitespace(), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_15)
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_20)
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.invertColor ? e.theme.colors.WHITE : e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.invertColor ? e.theme.colors.BEO_BLACK : e.theme.colors.WHITE
                }), (function(e) {
                    return e.invertColor ? (0, d._j)(.2, e.theme.colors.WHITE) : (0, d.$n)(.2, e.theme.colors.BEO_BLACK)
                }), (function(e) {
                    return e.invertColor ? e.theme.colors.BEO_BLACK : e.theme.colors.WHITE
                }), (function(e) {
                    return e.invertColor ? e.theme.colors.BEO_BLACK : e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return "".concat(e.theme.fonts.fontSize.heading.small.h3, "px")
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), (function(e) {
                    return "".concat(e.theme.fonts.fontSize.heading.small.h3, "px")
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.large.tertiary)
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                })),
                O = n(23149),
                k = n(21250),
                C = n(17726),
                S = "SalesSupportComp",
                A = n(48078),
                N = n(48323),
                T = n(48787),
                Z = n(24246);

            function P(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = (0, I.Z)(e);
                    if (t) {
                        var i = (0, I.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (0, b.Z)(this, n)
                }
            }
            var L = {
                    Mon: "Monday",
                    Tue: "Tuesday",
                    Wed: "Wednesday",
                    Thu: "Thursday",
                    Fri: "Friday",
                    Sat: "Saturday",
                    Sun: "Sunday"
                },
                B = function(e) {
                    (0, y.Z)(n, e);
                    var t = P(n);

                    function n() {
                        var e;
                        (0, f.Z)(this, n);
                        for (var o = arguments.length, i = new Array(o), r = 0; r < o; r++) i[r] = arguments[r];
                        return e = t.call.apply(t, [this].concat(i)), (0, _.Z)((0, v.Z)(e), "openingDayAndTime", (function(e) {
                            for (var t = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"], n = [], o = 0; o < t.length; o++) {
                                var i = new RegExp("<b>".concat(t[o], "</b>\\s(\\d{1,2}.+?PM)")),
                                    r = e.match(i);
                                r ? (n[o] = r, n[o].push(t[o])) : null === r && (n[o] = ["", "CLOSED", t[o]], n[o].push(t[o]))
                            }
                            return n
                        })), (0, _.Z)((0, v.Z)(e), "displayDayAndTime", (function(t) {
                            var n = t && e.openingDayAndTime(t);
                            return n && n.map((function(e) {
                                return (0, Z.jsxs)("div", {
                                    className: "day-time-container",
                                    children: [(0, Z.jsx)("div", {
                                        className: "day",
                                        children: L[e[2]]
                                    }), (0, Z.jsx)("div", {
                                        className: "time",
                                        children: e[1]
                                    })]
                                }, L[e[2]])
                            }))
                        })), (0, _.Z)((0, v.Z)(e), "openChatButtonClick", (function() {
                            var t = e.props,
                                n = t.chatState,
                                o = t.closeModalHanlder;
                            return n === A.u.STATUS_AVAILABLE || n === A.u.STATUS_BUSY ? (o && o(), insideFrontInterface.openChatPane()) : e.chatRequested = !0, !1
                        })), (0, _.Z)((0, v.Z)(e), "renderComponent", (function() {
                            var t, n = e.props,
                                o = n.data,
                                i = n.locale,
                                r = n.slnId,
                                l = n.isButton,
                                c = n.country,
                                s = n.chatState,
                                d = n.openingTimeDisplay,
                                u = function(e, t) {
                                    var n = e || A.u.STATUS_NOT_AVAILABLE,
                                        o = t && t.filter((function(e) {
                                            return e.getIn(["communicationStatus"]).toLowerCase() === n.toLowerCase()
                                        }));
                                    return o && o.getIn([0])
                                }(s, o),
                                m = !!e.props.compName && e.props.compName === S,
                                p = null === u || void 0 === u ? void 0 : u.get("title");
                            t = m ? null === u || void 0 === u ? void 0 : u.get("subtitle") : (null === u || void 0 === u ? void 0 : u.get("subtitle")) || (null === u || void 0 === u ? void 0 : u.get("description"));
                            var g = null === u || void 0 === u ? void 0 : u.get("description"),
                                h = null === u || void 0 === u ? void 0 : u.get("descriptionRichText"),
                                f = null === u || void 0 === u ? void 0 : u.getIn(["mediaItem", "media"]),
                                x = f && f.get("defaultAssetUrl"),
                                v = f && f.get("altText"),
                                y = null === u || void 0 === u ? void 0 : u.get("callToAction"),
                                b = y && y.get("url");
                            m && b && b.includes("stores.bang-olufsen.com") && b.includes("search") && (b = (0, T.lu)(b, i, c));
                            var I = y && y.get("internalPage");
                            !b && I && (b = "/".concat(I.get("slug")));
                            var _ = (0, N.Sv)(b),
                                j = y && y.get("linkText"),
                                w = y && y.get("target"),
                                P = y && y.get("ariaLabel"),
                                L = (null === y || void 0 === y ? void 0 : y.get("theme")) || "secondary",
                                B = null === y || void 0 === y ? void 0 : y.get("buttonColor"),
                                E = b;
                            _ || (E = (0, T.LK)({
                                pathname: b,
                                query: {
                                    language: i
                                }
                            }));
                            var R = e.props.isDisabled,
                                Q = a()("col-xs-12", {
                                    "col-sm-offset-2 col-sm-8 col-md-offset-1 col-md-10": !m
                                }),
                                M = a()("subtitle", {
                                    "status-green": s === A.u.STATUS_AVAILABLE,
                                    "status-red": s === A.u.STATUS_NOT_AVAILABLE,
                                    "status-brown": s === A.u.STATUS_BUSY
                                }),
                                z = a()("cta-buttons", {
                                    "status-closed": s === A.u.STATUS_NOT_AVAILABLE
                                }),
                                F = (0, Z.jsxs)(Z.Fragment, {
                                    children: [f && (0, Z.jsx)(O.Z, {
                                        className: "-large",
                                        slnId: "".concat(r, "_icon"),
                                        src: x,
                                        alt: v
                                    }), (0, Z.jsx)("h3", {
                                        className: "h5",
                                        "data-sln-id": "".concat(r, "_title"),
                                        "data-testid": "chatImageTitle",
                                        children: p
                                    }), m ? (0, Z.jsxs)(Z.Fragment, {
                                        children: [t ? (0, Z.jsx)("p", {
                                            className: M,
                                            "data-sln-id": "".concat(r, "_subtitle"),
                                            "data-testid": "chatImageSubtitle",
                                            children: s || A.u.STATUS_NOT_AVAILABLE
                                        }) : (0, Z.jsx)("p", {
                                            className: "subtitle invisible",
                                            "data-sln-id": "".concat(r, "_subtitle"),
                                            "data-testid": "chatImageSubtitle",
                                            children: t
                                        }), g && (0, Z.jsx)("p", {
                                            className: "description",
                                            "data-sln-id": "".concat(r, "_description"),
                                            children: g
                                        }), s && s !== A.u.STATUS_NOT_AVAILABLE ? null : (0, Z.jsx)("div", {
                                            className: "store-timing-wrapper",
                                            children: (0, Z.jsx)("div", {
                                                className: "row",
                                                children: (0, Z.jsx)("div", {
                                                    className: "col-xs-offset-2 col-xs-8 col-sm-offset-0 col-sm-12 col-md-offset-2 col-md-8",
                                                    children: (0, Z.jsx)("div", {
                                                        className: "store-timing",
                                                        children: e.displayDayAndTime(d)
                                                    })
                                                })
                                            })
                                        })]
                                    }) : (0, Z.jsx)("p", {
                                        "data-sln-id": "".concat(r, "_description"),
                                        "data-testid": "description",
                                        children: t
                                    }), h && (0, Z.jsx)(C.Z, {
                                        data: h,
                                        dataSlnId: "".concat(r, "_description")
                                    })]
                                });
                            return (0, Z.jsxs)(Z.Fragment, {
                                children: [(0, Z.jsxs)("div", {
                                    className: Q,
                                    children: [" ", F]
                                }), y && (0, Z.jsx)("div", {
                                    className: z,
                                    children: (0, Z.jsx)(k.Z, {
                                        cta: y,
                                        href: E,
                                        target: w,
                                        labelText: j,
                                        variant: L,
                                        onClick: e.openChatButtonClick,
                                        forceClick: !0,
                                        slnId: "".concat(r, "_ctaButton"),
                                        disabled: R,
                                        isButton: l,
                                        ariaLabel: P,
                                        buttonColor: B
                                    })
                                })]
                            })
                        })), e
                    }
                    return (0, x.Z)(n, [{
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.className,
                                n = e.slnId,
                                o = a()("".concat(t, " m-chatAndIcon focus-styling")),
                                i = !!this.props.compName && this.props.compName === S,
                                r = a()("col-xs-12", "wrapper", {
                                    "col-md-offset-2 col-md-8": !i
                                });
                            return (0, Z.jsx)("div", {
                                className: o,
                                tabIndex: "0",
                                "data-sln-id": "".concat(n, "_iconAndText_container"),
                                children: (0, Z.jsx)("div", {
                                    className: "container",
                                    children: (0, Z.jsx)("div", {
                                        className: "row",
                                        children: (0, Z.jsx)("div", {
                                            className: r,
                                            children: this.renderComponent()
                                        })
                                    })
                                })
                            })
                        }
                    }]), n
                }(o.PureComponent);
            B.displayName = "ChatAndIcon";
            var E = (0, c.Z)(B),
                R = (0, l.Z)(E, w),
                Q = (0, i.connect)((function(e) {
                    return {
                        storeOpeningHours: e.getIn(["global", "salesSupportComp", "storeOpeningHours"]),
                        isFetchStoreHoursError: e.getIn(["isError"]),
                        featureConfigs: e.getIn(["global", "globalData", "siteSettings", "featureConfigs"]),
                        chatState: e.getIn(["global", "chatData", "chatStoreData", "chatState"]),
                        openingTimeDisplay: e.getIn(["global", "chatData", "chatStoreData", "openingTimeDisplay"])
                    }
                }), null)(R),
                M = n(7174),
                z = function(e, t, n, o, i, r) {
                    var l = !!t || null,
                        c = t ? e.getIn(["item"]) : e.getIn(["item", 0]),
                        s = a()("".concat(n, " m-textAndIconSupport col-xs-12")),
                        d = e.getIn(["item", 0, "callToAction", "url"]),
                        u = !l && (d ? !(d.length > 1) : null),
                        m = e.getIn(["item", 0, "secondaryCallToAction", "url"]),
                        p = m ? !(m.length > 1) : null;
                    return (0, Z.jsx)("div", {
                        className: s,
                        tabIndex: "0",
                        children: t ? c && (0, Z.jsx)(Q, {
                            data: c,
                            compName: g.pX,
                            isDisabled: u,
                            isSecondaryDisabled: p,
                            isButton: l,
                            locale: o,
                            country: i,
                            closeModalHanlder: r
                        }) : c && (0, Z.jsx)(h.Z, {
                            data: c,
                            compName: g.pX,
                            isDisabled: u,
                            isSecondaryDisabled: p,
                            isButton: l,
                            locale: o,
                            country: i
                        })
                    })
                },
                F = function(e, t, n, o, i) {
                    return (0, Z.jsxs)("div", {
                        className: "headingAndCards",
                        children: [(0, Z.jsx)("h3", {
                            className: "-underline headingFrame1",
                            children: (0, Z.jsx)("span", {
                                children: t
                            })
                        }), (0, Z.jsx)("div", {
                            className: "supportCompCard",
                            children: (0, Z.jsx)("div", {
                                className: "container-fluid",
                                children: (0, Z.jsxs)("div", {
                                    className: "row",
                                    children: [(0, Z.jsx)("div", {
                                        className: "col-sm-offset-2"
                                    }), e.map((function(t, r) {
                                        var a = t.getIn(["cardType"]),
                                            l = "".concat(r, "_textAndIconSupport"),
                                            c = "textAndIconSupport" === a,
                                            s = e.getIn([r]);
                                        return (0, Z.jsx)("div", {
                                            className: "col-xs-12 col-sm-4 cardWrapper",
                                            children: z(s, c, n, o, i)
                                        }, l)
                                    }))]
                                })
                            })
                        })]
                    })
                },
                D = function(e, t, n) {
                    var o = e.getIn([0, "item", 0]),
                        i = {
                            overlayTitle: e.getIn([1, "title"]),
                            overlayData: e.getIn([1, "item"])
                        };
                    return (0, Z.jsx)("div", {
                        className: "cardContainerFrame2",
                        children: (0, Z.jsx)(m.default, {
                            data: o,
                            variant: p.ZP.fiftyFifty,
                            imageRight: !0,
                            locale: t,
                            country: n,
                            compName: g.pX,
                            overlayItems: i
                        })
                    })
                },
                H = function(e) {
                    return (e && e.filter((function(e) {
                        var t = e.getIn(["cardType"]);
                        return (null === t || void 0 === t ? void 0 : t.toLowerCase()) === M.jP
                    }))).size > 0
                },
                W = function(e) {
                    var t = e.data,
                        n = e.className,
                        o = e.title,
                        i = e.locale,
                        r = e.country,
                        a = "".concat(n, " cardContainer"),
                        l = t;
                    return (0, Z.jsx)("div", {
                        className: a,
                        children: H(l) ? D(l, i, r) : F(l, o, n, i, r)
                    })
                };
            W.displayName = "SalesSupportComp";
            var K = (0, c.Z)(W),
                V = (0, l.Z)(K, u),
                G = (0, i.connect)((function(e) {
                    return {
                        locale: e.getIn(["global", "globalData", "userlanguage"]),
                        country: e.getIn(["global", "globalData", "country"])
                    }
                }), null)(V)
        },
        27239: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return I
                }
            });
            var o = n(43350),
                i = n(80040),
                r = n(48415),
                a = n(73667),
                l = n(3117),
                c = n(27378),
                s = n(73546),
                d = n(34869),
                u = n(41408),
                m = n(83030),
                p = (0, u.iv)(["&.supportCompModal{position:fixed;left:50%;top:45%;z-index:1;transform:translate(-50%,-50%);box-shadow:0 4px 16px rgba(0,0,0,0.25);@media ", "{margin-top:0;top:50vh;}.inner{width:100%;height:100%;text-align:center;display:flex;align-items:center;justify-content:space-around;.supportCompModalWrapper{background:", ";padding:0;display:flex;flex-direction:column;justify-content:space-around;align-items:flex-start;width:800px;box-shadow:0 4px 16px rgba(0,0,0,0.25);position:relative;@media ", "{justify-content:center;width:700px;flex-basis:100%;max-width:100%;}@media ", "{flex-direction:column;width:100vw;height:100vh;.container-fluid{height:100vh;}}}}.heading{display:flex;justify-content:space-between;width:100%;margin-top:40px;@media ", "{margin-top:48px;}@media ", "{margin-top:30px;}.heading-text{font-size:", ";line-height:", ";display:flex;align-items:center;letter-spacing:1px;margin-bottom:0;height:50px;color:", ";@media ", "{font-size:", ";line-height:", ";letter-spacing:0.6px;height:34px;}@media ", "{font-size:", ";line-height:", ";display:flex;align-items:center;letter-spacing:0.6px;color:", ";}}}.close-button-container{.close{background-color:", ";}position:absolute;right:2rem;top:40px;@media ", "{top:48px;}}.modalItems{display:flex;justify-content:space-between;@media ", "{justify-content:flex-start;}@media ", "{height:100vh;justify-items:flex-start;align-items:flex-start;}.row{position:relative;@media ", "{display:flex;align-items:flex-start;}}}.supportCompModalItems{display:flex;.-withCopy{padding-top:40px;padding-bottom:40px;}.m-chatAndIcon{padding-top:40px;padding-bottom:40px;}}.container .row .wrapper{flex-basis:100%;max-width:100%;margin:0;img{margin-bottom:24px;@media ", "{display:none;}}}.h5{font-size:", ";line-height:", ";letter-spacing:2px;margin-bottom:8px;}.subtitle{font-size:", ";line-height:", ";display:flex;align-items:center;justify-content:center;letter-spacing:2px;text-transform:uppercase;color:", ";font-weight:500;}.status-green{color:", ";}.status-brown{color:", ";}.status-red{color:", ";}.description{font-size:", ";line-height:", ";text-align:center;color:", ";margin-top:20px;@media ", "{margin-top:20px;}}.invisible{display:none;}.store-timing-wrapper{margin-top:20px;}.day-time-container{display:flex;flex-wrap:wrap;justify-content:space-between;font-size:", ";line-height:", ";color:", ";@media ", "{justify-content:space-around;}}.a-anchorButton{text-align:center;font-size:", ";line-height:", ";letter-spacing:2px;text-transform:uppercase;margin-top:20px;@media ", "{min-width:fit-content;padding:10px 20px;text-align:center;em{display:none;}}@media ", "{width:100%;}}.supportCompModalItemsDivider{position:absolute;width:330px;height:0;left:30%;top:50%;border:1px solid ", ";transform:rotate(-90deg);@media ", "{left:26%;width:324px;top:54%;}@media ", "{width:343px;}@media ", "{left:5%;width:343px;transform:rotate(180deg);position:relative;}}}"], (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmall
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.fontSize.body.custom.custom_11)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.lineHeight.custom.custom_23)
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.fontSize.heading.large.h3)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.lineHeight.custom.custom_18)
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.fontSize.heading.large.h3)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.lineHeight.custom.custom_23)
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.colors.RED
                }), (function(e) {
                    return e.theme.colors.GREEN
                }), (function(e) {
                    return e.theme.colors.BEO_GREY_DARK
                }), (function(e) {
                    return e.theme.colors.RED
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.fontSize.body.small.tertiary)
                }), (function(e) {
                    return (0, m.hO)(e.theme.fonts.lineHeight.custom.custom_9)
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.smallOnly
                }), (function(e) {
                    return e.theme.mediaQuery.xSmall
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                })),
                g = n(78288),
                h = n(19410),
                f = n(44750),
                x = n(24246);

            function v(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = (0, l.Z)(e);
                    if (t) {
                        var i = (0, l.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (0, a.Z)(this, n)
                }
            }
            var y = function(e) {
                (0, r.Z)(n, e);
                var t = v(n);

                function n() {
                    return (0, o.Z)(this, n), t.apply(this, arguments)
                }
                return (0, i.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.overlayItems,
                            o = e.locale,
                            i = e.country,
                            r = e.closeModalHanlder,
                            a = e.cmsLabelsGlobal,
                            l = null === a || void 0 === a ? void 0 : a.get("closeLabel"),
                            c = n.overlayTitle,
                            s = n.overlayData,
                            d = "".concat(t, " supportCompModal");
                        return (0, x.jsx)(g.Z, {
                            modalWithoutScroll: !0,
                            compName: h.pX,
                            children: (0, x.jsx)("div", {
                                className: d,
                                children: (0, x.jsx)("div", {
                                    className: "inner",
                                    children: (0, x.jsx)("div", {
                                        className: "supportCompModalWrapper modal-content",
                                        children: (0, x.jsx)("div", {
                                            className: "container-fluid",
                                            children: (0, x.jsxs)("div", {
                                                className: "row",
                                                children: [(0, x.jsx)("div", {
                                                    className: "col-xs-12 heading",
                                                    children: (0, x.jsx)("h3", {
                                                        className: "-underline heading-text",
                                                        children: (0, x.jsx)("span", {
                                                            children: c
                                                        })
                                                    })
                                                }), (0, x.jsx)("div", {
                                                    className: "close-button-container",
                                                    children: (0, x.jsx)("button", {
                                                        id: "closeBtn",
                                                        type: "button",
                                                        onClick: r,
                                                        "aria-label": "".concat(l),
                                                        className: "close icn-close"
                                                    })
                                                }), (0, x.jsx)("div", {
                                                    className: "modalItems",
                                                    children: (0, x.jsx)("div", {
                                                        className: "row",
                                                        children: s.map((function(e, n) {
                                                            var a = e.getIn(["cardType"]),
                                                                l = "".concat(n, "_textAndIconSupport"),
                                                                c = "textAndIconSupport" === a,
                                                                d = s.getIn([n]);
                                                            return (0, x.jsxs)(x.Fragment, {
                                                                children: [(0, x.jsx)("div", {
                                                                    className: "col-xs-12 col-sm-6 supportCompModalItems",
                                                                    children: (0, f.TO)(d, c, t, o, i, r)
                                                                }, l), 0 === n ? (0, x.jsx)("div", {
                                                                    className: "supportCompModalItemsDivider"
                                                                }) : null]
                                                            })
                                                        }))
                                                    })
                                                })]
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    }
                }]), n
            }(c.PureComponent);
            y.displayName = "SalesSupportCompModal";
            var b = (0, d.Z)(y, p),
                I = (0, s.connect)((function(e) {
                    return {
                        locale: e.getIn(["global", "globalData", "userlanguage"]),
                        country: e.getIn(["global", "globalData", "country"]),
                        cmsLabelsGlobal: null === e || void 0 === e ? void 0 : e.getIn(["global", "cmsData", "Global"])
                    }
                }), null)(b)
        },
        48500: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return r
                }
            });
            var o = n(51321),
                i = n(24246),
                r = function(e) {
                    var t = e.isPaused,
                        n = e.onClick,
                        r = e.onKeyUp,
                        a = e.tabIndex;
                    return (0, i.jsxs)("button", {
                        className: "-playPauseA11yButton ".concat(t ? "-play" : "-pause"),
                        type: "button",
                        title: t ? o.F.PLAY : o.F.PAUSE,
                        "aria-disabled": "false",
                        onClick: function(e) {
                            n && n(e)
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
                                children: t ? o.F.PLAY : o.F.PAUSE
                            })
                        })]
                    })
                }
        },
        94414: function(e, t, n) {
            var o = n(90849),
                i = n(43350),
                r = n(80040),
                a = n(48415),
                l = n(73667),
                c = n(3117),
                s = n(27378),
                d = n(34051),
                u = n(79041),
                m = n(24246);

            function p(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function g(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, o = (0, c.Z)(e);
                    if (t) {
                        var i = (0, c.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, i)
                    } else n = o.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            t.Z = function(e) {
                return function(t) {
                    (0, a.Z)(l, t);
                    var n = g(l);

                    function l(e) {
                        var t;
                        return (0, i.Z)(this, l), (t = n.call(this, e)).state = {
                            deviceInfo: (0, d.fromJS)({}),
                            viewportInfo: (0, d.fromJS)({})
                        }, t
                    }
                    return (0, r.Z)(l, [{
                        key: "componentDidMount",
                        value: function() {
                            this.setState({
                                deviceInfo: (0, d.fromJS)((0, u.dz)()),
                                viewportInfo: (0, d.fromJS)((0, u.yK)())
                            })
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var t = this.state,
                                n = t.deviceInfo,
                                i = t.viewportInfo;
                            return (0, m.jsx)(e, function(e) {
                                for (var t = 1; t < arguments.length; t++) {
                                    var n = null != arguments[t] ? arguments[t] : {};
                                    t % 2 ? p(Object(n), !0).forEach((function(t) {
                                        (0, o.Z)(e, t, n[t])
                                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : p(Object(n)).forEach((function(t) {
                                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                                    }))
                                }
                                return e
                            }({
                                deviceInfo: n,
                                viewportInfo: i
                            }, this.props))
                        }
                    }]), l
                }(s.PureComponent)
            }
        }
    }
]);