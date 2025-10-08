"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [4245], {
        95267: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return y
                }
            });
            var n = r(43350),
                o = r(80040),
                a = r(48415),
                i = r(73667),
                c = r(3117),
                l = r(27378),
                s = r(60042),
                u = r.n(s),
                d = (0, r(41408).iv)(["display:block;width:100%;appearance:none;padding:20px;margin:0;border-radius:0;border:solid 1px ", ";border-width:1px 0;font-weight:", ";text-transform:uppercase;background:", ";.a-svgIcon{position:relative;display:inline-block;width:12px;height:12px;margin-left:8px;transform:rotate(0deg);transition:transform ", " ", ";}&:hover,&:active{cursor:pointer;.a-svgIcon{transform:rotate(90deg);}}"], (function(e) {
                    return e.theme.darkColor ? e.theme.colors.BEO_BLACK : e.theme.colors.GREY2
                }), (function(e) {
                    return e.theme.fonts.fontWeight.medium
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                })),
                m = r(34869),
                f = r(41605),
                p = r(10754),
                h = r(24246);

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
                    var r, n = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, i.Z)(this, r)
                }
            }
            var v = function(e) {
                (0, a.Z)(r, e);
                var t = g(r);

                function r() {
                    return (0, n.Z)(this, r), t.apply(this, arguments)
                }
                return (0, o.Z)(r, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            r = e.onClick,
                            n = e.tabIndex,
                            o = e.handleKeyPress,
                            a = e.slnId,
                            i = e.loadMoreButtonLabel,
                            c = u()("a-loadMoreButton", t),
                            l = i || f.P69;
                        return (0, h.jsxs)("button", {
                            type: "button",
                            className: "".concat(c, " h5 focus-styling"),
                            onClick: r,
                            tabIndex: n,
                            onKeyPress: o,
                            "data-sln-id": a,
                            children: [l, " ", (0, h.jsx)(p.Z, {
                                icon: "plus",
                                size: "small",
                                alt: ""
                            })]
                        })
                    }
                }]), r
            }(l.PureComponent);
            v.displayName = "LoadMoreButton";
            var y = (0, m.Z)(v, d)
        },
        75628: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return x
                }
            });
            var n = r(90849),
                o = r(27378),
                a = r(41408),
                i = function(e) {
                    return e.textColor || e.theme.colors.BEO_BLACK
                },
                c = (0, a.iv)(["&.m-recommendedStory{position:relative;margin-top:60px;margin-bottom:60px;background:", ";.a-container{background:", ";}.image-wrapper{position:relative;width:100%;overflow:hidden;aspect-ratio:13/10;@media ", "{aspect-ratio:8/5;}@media ", "{max-width:300px;min-width:200px;}@media ", "{margin:auto;}&.-isHover{img{transform:", ";}}img{transition:transform ", " ", ";&:hover,&:active,&:focus{transform:", ";}}}.title{margin-bottom:16px;text-align:left;color:", ";}.content-wrapper{display:flex;align-items:center;.storyTitle{color:", ";margin-bottom:0;}}}"], (function(e) {
                    return e.backgroundColor || e.theme.colors.WHITE
                }), (function(e) {
                    return e.backgroundColor || e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.large
                }), (function(e) {
                    return e.theme.mediaQuery.quadHighDefinition
                }), (function(e) {
                    return e.theme.scale.scaleImageHover
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.scale.scaleImageHover
                }), i, i),
                l = r(34869),
                s = r(71377),
                u = r(5047),
                d = r(34919),
                m = r(6234),
                f = r(50813),
                p = r(21318),
                h = r(38944),
                g = r(24246);

            function v(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function y(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? v(Object(r), !0).forEach((function(t) {
                        (0, n.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : v(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var b = (0, m.Z)((function(e) {
                    var t = e.data,
                        r = e.className,
                        n = e.locale,
                        a = e.country,
                        i = e.slnId,
                        c = e.section,
                        l = e.title,
                        m = e.pageType,
                        v = (0, o.useRef)(null),
                        b = null === t || void 0 === t ? void 0 : t.get("title"),
                        x = null === t || void 0 === t ? void 0 : t.get("slug"),
                        w = null === t || void 0 === t ? void 0 : t.get("landscape"),
                        Z = null === t || void 0 === t ? void 0 : t.getIn(["landscape", "media"]),
                        k = null === t || void 0 === t ? void 0 : t.getIn(["landscape", "mediaType"]),
                        C = null === t || void 0 === t ? void 0 : t.getIn(["tags", "0", "key"]),
                        j = null === t || void 0 === t ? void 0 : t.get("corporateParentPage"),
                        I = j ? {
                            href: {
                                pathname: "/[language]/[country]/[slug]/[tag]/[corporateDetailSlug]",
                                query: {
                                    slug: j,
                                    language: n,
                                    country: null === a || void 0 === a ? void 0 : a.toLowerCase(),
                                    tag: C,
                                    corporateDetailSlug: x
                                }
                            }
                        } : {
                            href: {
                                pathname: "/[language]/[country]/story/[slug]",
                                query: {
                                    slug: x,
                                    language: n,
                                    country: null === a || void 0 === a ? void 0 : a.toLowerCase()
                                }
                            }
                        };
                    return (0, g.jsx)("div", {
                        className: "".concat(r, " m-recommendedStory"),
                        "data-sln-id": "".concat(i, "_container"),
                        children: (0, g.jsx)(s.Z, {
                            children: (0, g.jsx)("div", {
                                className: "row",
                                children: (0, g.jsx)("div", {
                                    className: "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3",
                                    children: (0, g.jsx)("div", {
                                        className: "m-recommendedStory__wrapper",
                                        onMouseEnter: function() {
                                            return function() {
                                                var e = null === v || void 0 === v ? void 0 : v.current;
                                                e && null !== e && void 0 !== e && e.classList && e.classList.add("-isHover")
                                            }()
                                        },
                                        onMouseLeave: function() {
                                            return function() {
                                                var e, t = null === v || void 0 === v ? void 0 : v.current;
                                                null !== t && void 0 !== t && null !== (e = t.classList) && void 0 !== e && e.contains("-isHover") && t.classList.remove("-isHover")
                                            }()
                                        },
                                        children: (0, g.jsxs)(u.Z, y(y({
                                            cta: null
                                        }, I), {}, {
                                            slnId: "".concat(i, "_").concat(c, "_cta"),
                                            handleLinkClick: function() {
                                                var e = {
                                                    event: f.cHh,
                                                    eventCategory: m,
                                                    eventAction: "".concat(f.Lfs, "_").concat(f.dVX),
                                                    eventLabel: "".concat(f.a4r, " : ").concat(b)
                                                };
                                                (0, p.q8)(e)
                                            },
                                            forceClick: !0,
                                            children: [(0, g.jsx)("div", {
                                                className: "row",
                                                children: (0, g.jsx)("div", {
                                                    className: "col-xs-12 col-sm-11 col-md-10",
                                                    children: l && (0, g.jsx)("p", {
                                                        className: "title h5",
                                                        children: l
                                                    })
                                                })
                                            }), (0, g.jsxs)("div", {
                                                className: "row",
                                                children: [(0, g.jsx)("div", {
                                                    className: "col-xs-4",
                                                    children: (0, g.jsx)("div", {
                                                        className: "image-wrapper",
                                                        ref: v,
                                                        children: "video" === k ? (0, g.jsx)(h.Z, {
                                                            backgroundVideo: w,
                                                            isRichMediaVideoOnCategoryPageProductCardCarousel: !0,
                                                            storyAutoPlayed: !0,
                                                            isSmallBtn: !0
                                                        }) : (0, g.jsx)(d.Z, {
                                                            showShimmer: !0,
                                                            className: "filterTab_content__img",
                                                            objectFit: "cover",
                                                            layout: "fill",
                                                            contentfulImage: !0,
                                                            media: Z
                                                        })
                                                    })
                                                }), (0, g.jsx)("div", {
                                                    className: "col-xs-8 content-wrapper",
                                                    children: b && (0, g.jsx)("p", {
                                                        className: "storyTitle h4",
                                                        children: b
                                                    })
                                                })]
                                            })]
                                        }))
                                    })
                                })
                            })
                        })
                    })
                })),
                x = (0, l.Z)((0, a.Zz)(b), c)
        },
        68754: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return O
                }
            });
            var n = r(43350),
                o = r(80040),
                a = r(48415),
                i = r(73667),
                c = r(3117),
                l = r(27378),
                s = r(41408),
                u = (0, s.iv)(["&.m-techSpecsGuideLinks{display:flex;flex-direction:column;padding:25px 0 0;@media ", "{flex-direction:row;}.m-downloadLink__details{.-download{color:", ";}}.m-downloadLink{& + .m-downloadLink{@media ", "{margin-left:20px;}}}}"], (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.darkColor ? e.theme.colors.WHITE : e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.small
                })),
                d = r(34869),
                m = r(90089),
                f = r(59307),
                p = r(90849),
                h = (0, s.iv)(["&.m-downloadLink{display:inline-flex;text-decoration:none;padding:10px;margin-left:-10px;margin-right:20px;&:hover,&:active,&:focus{.a-animatedIcon{&.-download{", ';}}}.m-downloadLink__icon{background:url("/static-assets/images/common/download.svg");width:24px;background-repeat:no-repeat;background-position:center;position:relative;}.m-downloadLink__details{margin-left:20px;.-downloadLabel{color:', ";& + p{margin-top:5px;}}}}"], (function(e) {
                    return e.theme.iconAnimations.download
                }), (function(e) {
                    return e.invertColor || e.theme.darkColor ? e.theme.colors.WHITE : e.theme.colors.BEO_BLACK
                })),
                g = r(5047),
                v = r(6234),
                y = r(24246),
                b = ["className", "assetUrl", "label", "assetType", "target", "slnId", "theme", "downloadLabel", "ariaLabel"];

            function x(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function w(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? x(Object(r), !0).forEach((function(t) {
                        (0, p.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : x(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function Z(e) {
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
                    var r, n = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, i.Z)(this, r)
                }
            }
            var k = function(e) {
                (0, a.Z)(r, e);
                var t = Z(r);

                function r() {
                    var e;
                    (0, n.Z)(this, r);
                    for (var o = arguments.length, a = new Array(o), i = 0; i < o; i++) a[i] = arguments[i];
                    return e = t.call.apply(t, [this].concat(a)), (0, p.Z)((0, f.Z)(e), "onClickHandler", (function() {
                        var t = e.props.onClick;
                        t && t()
                    })), e
                }
                return (0, o.Z)(r, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            r = e.assetUrl,
                            n = e.label,
                            o = e.assetType,
                            a = e.target,
                            i = e.slnId,
                            c = (e.theme, e.downloadLabel),
                            l = e.ariaLabel,
                            s = (0, m.Z)(e, b);
                        return (0, y.jsxs)(g.Z, w(w({
                            cta: null,
                            className: "".concat(t, " m-downloadLink"),
                            href: r,
                            target: a,
                            download: r,
                            slnId: "".concat(i, "_").concat(n),
                            forceClick: !0,
                            onClick: this.onClickHandler,
                            ariaLabel: l
                        }, s), {}, {
                            children: [(0, y.jsx)("div", {
                                className: "m-downloadLink__icon"
                            }), (0, y.jsxs)("div", {
                                className: "m-downloadLink__details",
                                children: [(0, y.jsx)("p", {
                                    className: "-downloadLabel b3A",
                                    children: n
                                }), (0, y.jsxs)("p", {
                                    className: "b3",
                                    children: [c, " ", o]
                                })]
                            })]
                        }))
                    }
                }]), r
            }(l.PureComponent);
            k.displayName = "DownloadLink";
            var C = (0, v.Z)(k),
                j = (0, d.Z)((0, s.Zz)(C), h);

            function I(e) {
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
                    var r, n = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, i.Z)(this, r)
                }
            }
            var N = function(e) {
                (0, a.Z)(r, e);
                var t = I(r);

                function r() {
                    return (0, n.Z)(this, r), t.apply(this, arguments)
                }
                return (0, o.Z)(r, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            r = e.data,
                            n = e.slnId,
                            o = e.downloadLabel;
                        return (0, y.jsx)("div", {
                            className: "".concat(t, " m-techSpecsGuideLinks"),
                            "data-sln-id": "".concat(n, "_container"),
                            children: r.map((function(e, t) {
                                var r = e.get("linkText"),
                                    a = e.get("url"),
                                    i = e.get("assetType"),
                                    c = e.get("target"),
                                    l = "".concat(a, "_").concat(t),
                                    s = e.get("ariaLabel");
                                return (0, y.jsx)(j, {
                                    assetUrl: a,
                                    label: r,
                                    assetType: i,
                                    target: c,
                                    slnId: n,
                                    downloadLabel: o,
                                    ariaLabel: s
                                }, l)
                            }))
                        })
                    }
                }]), r
            }(l.PureComponent);
            N.displayName = "TechSpecsGuideLinks";
            var _ = (0, v.Z)(N),
                O = (0, d.Z)(_, u)
        },
        79206: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return O
                }
            });
            var n = r(43350),
                o = r(80040),
                a = r(59307),
                i = r(48415),
                c = r(73667),
                l = r(3117),
                s = r(90849),
                u = r(27378),
                d = r(63594),
                m = r.n(d),
                f = r(60042),
                p = r.n(f),
                h = r(41408),
                g = r(96667),
                v = (0, h.iv)(["&.o-galleryGrid{background-color:", ";color:", ";&.-grid{", ";padding-top:30px;padding-bottom:30px;@media ", "{padding-top:60px;padding-bottom:60px;}ul{display:flex;flex-wrap:wrap;overflow:hidden;transition:height ", " ", ";}li{position:relative;flex-basis:auto;width:50%;overflow:hidden;border-bottom:solid 1px ", ";&::before{content:'';display:block;", ";}&:nth-child(odd){border-right:solid 1px ", ";}.a-responsiveImage{position:absolute;width:100%;height:100%;top:0;left:0;}.videoCont{position:absolute;inset:0;}img{", ";}}.a-loadMoreButton{margin-top:-1px;transform:translateZ(0);background-color:", ";color:", ";}}}"], (function(e) {
                    return e.theme.darkColor ? e.theme.colors.BEO_BLACK : e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.darkColor ? e.theme.colors.GREY2 : e.theme.colors.BEO_BLACK
                }), g.Z.maxWidthNoPadding("small"), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.darkColor ? e.theme.colors.BEO_BLACK : e.theme.colors.WHITE
                }), g.Z.maintainRatio(570, 510), (function(e) {
                    return e.theme.darkColor ? e.theme.colors.BEO_BLACK : e.theme.colors.WHITE
                }), g.Z.objectFit(), (function(e) {
                    return e.theme.darkColor ? e.theme.colors.BEO_BLACK : e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.darkColor ? e.theme.colors.WHITE : e.theme.colors.BEO_BLACK
                })),
                y = r(34869),
                b = r(2463),
                x = r(31357),
                w = r(95267),
                Z = r(11654),
                k = r(5337),
                C = r(6234),
                j = r(24246);

            function I(e) {
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
                    var r, n = (0, l.Z)(e);
                    if (t) {
                        var o = (0, l.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, c.Z)(this, r)
                }
            }
            var N = function(e) {
                (0, i.Z)(r, e);
                var t = I(r);

                function r(e) {
                    var o;
                    return (0, n.Z)(this, r), o = t.call(this, e), (0, s.Z)((0, a.Z)(o), "onResize", (function(e) {
                        o.toggleCarouselMode(e.matches)
                    })), (0, s.Z)((0, a.Z)(o), "onLoadMore", (function() {
                        var e = o.list.current;
                        o.setState((function(t) {
                            return {
                                visibleItems: t.visibleItems + 2,
                                listHeight: "".concat(e.offsetHeight, "px")
                            }
                        })), setTimeout((function() {
                            o.setState({
                                listHeight: "".concat(e.scrollHeight - 20, "px")
                            })
                        }), 1)
                    })), (0, s.Z)((0, a.Z)(o), "addResizeListener", (function() {
                        var e = window.matchMedia("(max-width: ".concat(k.j$.small, "px)"));
                        o.toggleCarouselMode(e.matches), e.addListener(o.onResize)
                    })), (0, s.Z)((0, a.Z)(o), "toggleCarouselMode", (function(e) {
                        o.setState({
                            carouselMode: e
                        })
                    })), (0, s.Z)((0, a.Z)(o), "resetHeight", (function() {
                        o.setState({
                            listHeight: "auto"
                        })
                    })), (0, s.Z)((0, a.Z)(o), "list", (0, u.createRef)()), o.state = {
                        visibleItems: 6,
                        listHeight: "auto",
                        carouselMode: !1
                    }, o
                }
                return (0, o.Z)(r, [{
                    key: "componentDidMount",
                    value: function() {
                        m()(), this.addResizeListener()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            r = e.gallery,
                            n = e.slnId,
                            o = e.loadMoreButtonLabel,
                            a = p()(t, "o-galleryGrid", {
                                "-carousel": this.state.carouselMode,
                                "-grid": !this.state.carouselMode
                            }),
                            i = r && r.size,
                            c = r && r.toArray().slice(0, this.state.visibleItems),
                            l = c && this.state.visibleItems < i,
                            u = this.state.visibleItems - 2 - 1,
                            d = r && this.state.carouselMode,
                            m = c && !d;
                        return (0, j.jsxs)("div", {
                            className: a,
                            children: [d && (0, j.jsx)(Z.default, {
                                variant: "galleryGrid",
                                data: r
                            }), m && (0, j.jsxs)(j.Fragment, {
                                children: [(0, j.jsx)("ul", {
                                    className: "-noBullets",
                                    ref: this.list,
                                    style: {
                                        height: this.state.listHeight
                                    },
                                    onTransitionEnd: this.resetHeight,
                                    "data-sln-id": "".concat(n, "_container"),
                                    children: c.map((function(e, t) {
                                        var r = e.get("mediaType"),
                                            o = e.get("media"),
                                            a = e && e.getIn(["media", "autoPlay"]),
                                            i = e && e.getIn(["media", "enableLoop"]),
                                            c = o && "".concat(o.get("imageName"), "_").concat(t),
                                            l = p()("o-galleryGrid__item", (0, s.Z)({}, "-fadeInUp", t > u && t > 5));
                                        return (0, j.jsx)("li", {
                                            className: l,
                                            "data-sln-id": "".concat(n, "_images"),
                                            children: "video" === r || "externalVideo" === r ? (0, j.jsx)("div", {
                                                className: "videoCont",
                                                children: (0, j.jsx)(b.default, {
                                                    mediaItem: e,
                                                    responsive: !1,
                                                    ratio: [16, 9],
                                                    muted: a,
                                                    autoplay: a,
                                                    loop: i
                                                })
                                            }) : (0, j.jsx)(x.Z, {
                                                size: x.Z.SIZES.MEDIUM,
                                                media: o,
                                                slnId: "".concat(n, "_images_image_").concat(t)
                                            })
                                        }, c)
                                    }))
                                }), l && (0, j.jsx)(w.Z, {
                                    onClick: this.onLoadMore,
                                    "data-sln-id": "".concat(n, "_loadMoreButton"),
                                    loadMoreButtonLabel: o
                                })]
                            })]
                        })
                    }
                }]), r
            }(u.PureComponent);
            N.displayName = "GalleryGrid";
            var _ = (0, C.Z)(N),
                O = (0, y.Z)(_, v)
        },
        54245: function(e, t, r) {
            r.d(t, {
                Z: function() {
                    return J
                }
            });
            var n = r(43350),
                o = r(80040),
                a = r(59307),
                i = r(48415),
                c = r(73667),
                l = r(3117),
                s = r(90849),
                u = r(27378),
                d = r(34051),
                m = r(34869),
                f = r(41408),
                p = (0, f.iv)(["&.o-features{background-color:", ";color:", ";.m-topFeatures{.a-container{@media ", "{padding-top:", ";}}}.m-inPageNav + .m-topFeatures{@media ", "{margin-top:-215px;}}.m-guidelink-container{&.a-container{width:100%;max-width:1512px;margin-left:auto;margin-right:auto;@media ", "{padding-left:36px;padding-right:36px;}}.-download{color:", ";font-weight:", ";}}}"], (function(e) {
                    return e.theme.darkColor ? e.theme.colors.BEO_BLACK : e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.darkColor ? e.theme.colors.GREY2 : e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.padding.paddingExtraExtraLarge
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                })),
                h = (0, f.iv)(["&.m-topFeatures{.a-container{&.topFeatureContainer{padding-top:0;}}}"]),
                g = r(71377),
                v = r(83030),
                y = (0, f.iv)(["&.a-topFeature{.a-topFeature__feature{margin-top:50px;.a-topFeature__featureTitle{margin:0;padding:0;}.description{color:", ";}}.a-topFeature__image{font-size:", ";transform:translateZ(0);img{width:100%;}& + .a-topFeature__feature{margin-top:30px;@media ", "{margin-top:40px;}}}.learnMore{margin-top:20px;}}"], (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return (0, v.hO)(e.theme.fonts.fontSize.body.custom.custom_1)
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                b = r(21250),
                x = r(17726),
                w = r(8103),
                Z = r(31357),
                k = r(48323),
                C = r(48787),
                j = r(24246);

            function I(e) {
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
                    var r, n = (0, l.Z)(e);
                    if (t) {
                        var o = (0, l.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, c.Z)(this, r)
                }
            }
            var N = function(e) {
                (0, i.Z)(r, e);
                var t = I(r);

                function r() {
                    var e;
                    (0, n.Z)(this, r);
                    for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(i)), (0, s.Z)((0, a.Z)(e), "renderFeature", (function(t, r, n) {
                        var o = e.props,
                            a = o.slnId,
                            i = o.locale,
                            c = o.country,
                            l = r.get("title"),
                            s = r.get("subtitle"),
                            u = r.get("description"),
                            m = r.get("descriptionRichText"),
                            f = r.get("mediaItem"),
                            p = f && f.get("media"),
                            h = r.get("callToAction"),
                            g = h && h.get("url");
                        g = (0, k.Sv)(g) ? g : (0, C.LK)({
                            pathname: g,
                            query: {
                                language: i,
                                country: c.toLowerCase()
                            }
                        });
                        var v = h && h.get("linkText"),
                            y = h && h.get("ariaLabel");
                        return (0, j.jsxs)("div", {
                            className: "".concat(t, " a-topFeature col-xs-12 ").concat(n ? "" : "col-md-6"),
                            "data-sln-id": "".concat(a, "_item"),
                            children: [n && f && (0, j.jsx)(Z.Z, {
                                className: "a-topFeature__image",
                                media: p,
                                ratio: [16, 9],
                                size: Z.Z.SIZES.MEDIUM,
                                imageType: "large",
                                slnId: "".concat(a, "_image")
                            }), (0, j.jsxs)("div", {
                                className: "a-topFeature__feature",
                                children: [(0, j.jsxs)("h2", {
                                    children: [l && (0, j.jsx)("div", {
                                        className: "a-topFeature__featureTitle h5",
                                        "data-sln-id": "".concat(a, "_title"),
                                        children: l
                                    }), s && (0, j.jsx)("div", {
                                        className: "h4",
                                        "data-sln-id": "".concat(a, "_subtitle"),
                                        children: s
                                    })]
                                }), u && (0, j.jsx)(w.Z, {
                                    className: "b1 description",
                                    "data-sln-id": "".concat(a, "_description"),
                                    data: (0, d.fromJS)({
                                        description: u
                                    }),
                                    locale: i,
                                    country: c
                                }), m && (0, j.jsx)(x.Z, {
                                    className: "b1 description",
                                    data: m,
                                    dataSlnId: "".concat(a, "_description")
                                }), n && h && (0, j.jsx)("div", {
                                    className: "learnMore",
                                    children: (0, j.jsx)(b.Z, {
                                        cta: h,
                                        variant: "secondary",
                                        labelText: v,
                                        className: "learn-more -medium",
                                        href: g,
                                        slnId: "".concat(a, "_ctaButton"),
                                        ariaLabel: y
                                    })
                                })]
                            })]
                        })
                    })), e
                }
                return (0, o.Z)(r, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            r = e.feature,
                            n = e.isPrimary;
                        return this.renderFeature(t, r, n)
                    }
                }]), r
            }(u.PureComponent);
            N.displayName = "TopFeature";
            var _ = (0, m.Z)(N, y),
                O = r(89633),
                P = r(6234);

            function L(e) {
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
                    var r, n = (0, l.Z)(e);
                    if (t) {
                        var o = (0, l.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, c.Z)(this, r)
                }
            }
            var S = function(e) {
                (0, i.Z)(r, e);
                var t = L(r);

                function r() {
                    return (0, n.Z)(this, r), t.apply(this, arguments)
                }
                return (0, o.Z)(r, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            r = e.primaryFeature,
                            n = e.secondaryFeatures,
                            o = e.slnId,
                            a = e.locale,
                            i = e.country,
                            c = e.additionalFeatures,
                            l = e.pageType,
                            s = e.listName,
                            u = e.availableQuant,
                            d = e.getVariantStockAvailability,
                            m = e.hidePriceForCountries,
                            f = e.homeCountryCookie;
                        return (0, j.jsxs)(j.Fragment, {
                            children: [(0, j.jsx)("div", {
                                className: "".concat(t, " m-topFeatures"),
                                "data-sln-id": "automation_topFeatures_container",
                                children: (0, j.jsx)(g.Z, {
                                    className: r ? "" : "topFeatureContainer",
                                    children: (0, j.jsx)("div", {
                                        className: "row",
                                        children: (0, j.jsxs)("div", {
                                            className: "col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6",
                                            children: [(0, j.jsx)("div", {
                                                className: "row",
                                                children: r && (0, j.jsx)(_, {
                                                    locale: a,
                                                    country: i,
                                                    feature: r,
                                                    slnId: "".concat(o, "_topFeature"),
                                                    isPrimary: !0
                                                })
                                            }), (0, j.jsx)("div", {
                                                className: "row",
                                                "data-sln-id": "".concat(o, "_secFeature"),
                                                children: n && n.map((function(e, t) {
                                                    var r = "secondary_".concat(t);
                                                    return (0, j.jsx)(_, {
                                                        locale: a,
                                                        country: i,
                                                        feature: e,
                                                        slnId: "".concat(o, "_secFeature_ul").concat(t)
                                                    }, r)
                                                }))
                                            })]
                                        })
                                    })
                                })
                            }), c && (0, j.jsx)(O.Z, {
                                items: c,
                                pageType: l,
                                listName: s,
                                availableQuant: u,
                                getVariantStockAvailability: d,
                                trackAnalytics: !0,
                                hidePriceForCountries: m,
                                homeCountryCookie: f,
                                calledFromComponent: "top-features"
                            })]
                        })
                    }
                }]), r
            }(u.PureComponent);
            S.displayName = "TopFeatures";
            var B = (0, P.Z)(S),
                E = (0, m.Z)(B, h),
                T = r(5307),
                R = r(75628),
                F = r(73578),
                A = r(68754),
                M = r(63583),
                H = r(79206),
                D = r(21318),
                Q = r(40754),
                K = r(50813),
                z = r(41605);

            function G(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var n = Object.getOwnPropertySymbols(e);
                    t && (n = n.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, n)
                }
                return r
            }

            function W(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? G(Object(r), !0).forEach((function(t) {
                        (0, s.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : G(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }

            function V(e) {
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
                    var r, n = (0, l.Z)(e);
                    if (t) {
                        var o = (0, l.Z)(this).constructor;
                        r = Reflect.construct(n, arguments, o)
                    } else r = n.apply(this, arguments);
                    return (0, c.Z)(this, r)
                }
            }
            var q = function(e) {
                (0, i.Z)(r, e);
                var t = V(r);

                function r() {
                    var e;
                    (0, n.Z)(this, r);
                    for (var o = arguments.length, i = new Array(o), c = 0; c < o; c++) i[c] = arguments[c];
                    return e = t.call.apply(t, [this].concat(i)), (0, s.Z)((0, a.Z)(e), "getHeroAddProdTrackObj", (function(t, r) {
                        var n = e.props.locale,
                            o = t.get("categorySlug") || "",
                            a = t.get("slug") || "",
                            i = t.get("variantKey"),
                            c = "/".concat(n, "/").concat(o, "/").concat(a);
                        return {
                            url: encodeURI("".concat(z.zDf).concat(c)),
                            variantKey: i,
                            cartData: r
                        }
                    })), (0, s.Z)((0, a.Z)(e), "addToCartSuccessAction", (function(t) {
                        var r = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : K.JzP,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : K.ae5,
                            o = e.props.cartData,
                            a = (0, d.List)();
                        a = a.push(t);
                        var i = (0, d.Map)({
                                variants: a
                            }),
                            c = {
                                productDetails: (0, d.List)(i ? [i] : []),
                                showCartValue: !0,
                                cartData: o,
                                variantId: t.get("variantId"),
                                noPosition: !0
                            },
                            l = e.getHeroAddProdTrackObj(t, o);
                        (0, D.wL)({
                            cartConfig: c,
                            userAction: n,
                            prodPosition: "".concat(K.tIE, ": ").concat(r)
                        }), (0, Q.bH)(l)
                    })), (0, s.Z)((0, a.Z)(e), "sendTrackingObject", (function(t, r) {
                        var n = e.props.product;
                        (0, D._r)(t, n, r ? "".concat(K.TLR, ":").concat(r) : K.JzP)
                    })), e
                }
                return (0, o.Z)(r, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            r = e.features,
                            n = e.inPageNavId,
                            o = e.cmsLabels,
                            a = e.slnId,
                            i = e.locale,
                            c = e.pageType,
                            l = e.loadMoreButtonLabel,
                            s = e.categoryLabels,
                            u = e.tabIndex,
                            d = void 0 === u ? "" : u,
                            m = e.country,
                            f = e.getVariantStockAvailability,
                            p = e.availableQuant,
                            h = e.handleShowCartPopup,
                            g = e.setAddToBasketProdSku,
                            v = e.hidePriceForCountries,
                            y = e.homeCountryCookie,
                            b = e.viewportInfo,
                            x = r && {
                                primaryFeature: r.get("primaryFeature"),
                                secondaryFeatures: r.get("secondaryFeatures"),
                                additionalFeatures: r.get("additionalFeatures")
                            },
                            w = r && r.get("galleryGrid"),
                            Z = r && r.get("recommendedContent"),
                            k = r && r.get("recommendedStory"),
                            C = r && (r.get("productCrossSell") || r.get("productCrossSellMultiple")),
                            I = C && C.get("isStereoPair"),
                            N = !(!r || !r.get("productCrossSellMultiple")) && C.some((function(e) {
                                return e && e.get("isStereoPair")
                            })),
                            _ = r && r.get("guideLinks"),
                            O = _ && _.getIn(["0", "downloadText"]),
                            P = I || N;
                        return r ? (0, j.jsxs)("div", {
                            id: n,
                            className: "".concat(t, " o-features"),
                            "data-sln-id": "".concat(a, "_features_container"),
                            tabIndex: d,
                            children: [(x.primaryFeature || x.secondaryFeatures || x.additionalFeatures) && (0, j.jsx)(E, W(W({
                                slnId: a,
                                locale: i,
                                country: m,
                                pageType: c,
                                listName: K.tIE,
                                availableQuant: p,
                                getVariantStockAvailability: f
                            }, x), {}, {
                                hidePriceForCountries: v,
                                homeCountryCookie: y
                            })), w && (0, j.jsx)(H.default, {
                                gallery: w,
                                slnId: "".concat(a, "_galleryGrid"),
                                loadMoreButtonLabel: l
                            }), Z && (0, j.jsx)(T.default, {
                                modifierClasses: "col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6",
                                data: Z
                            }), k && (0, j.jsx)(R.default, {
                                data: k,
                                locale: i,
                                pageType: c,
                                country: m,
                                viewportInfo: b
                            }), C && !P && (0, j.jsx)(F.default, {
                                data: C,
                                cmsLabels: o,
                                addToCartSuccessAction: this.addToCartSuccessAction,
                                slnId: "".concat(a, "_CrossSellUpSell"),
                                categoryLabels: s,
                                locale: i,
                                listName: K.tIE,
                                country: m,
                                getVariantStockAvailability: f,
                                availableQuant: p,
                                handleShowCartPopup: h,
                                setAddToBasketProdSku: g,
                                hidePriceForCountries: v,
                                homeCountryCookie: y
                            }), C && P && (0, j.jsx)(M.default, {
                                data: C,
                                cmsLabels: o,
                                addToCartSuccessAction: this.addToCartSuccessAction,
                                slnId: "".concat(a, "_CrossSellUpSell"),
                                categoryLabels: s,
                                locale: i,
                                listName: K.tIE,
                                country: m,
                                getVariantStockAvailability: f,
                                availableQuant: p,
                                handleShowCartPopup: h,
                                setAddToBasketProdSku: g,
                                hidePriceForCountries: v,
                                homeCountryCookie: y
                            }), _ && (0, j.jsx)("div", {
                                className: "m-guidelink-container container-fluid a-container",
                                children: (0, j.jsx)("div", {
                                    className: "row",
                                    children: (0, j.jsx)("div", {
                                        className: "col-xs-12 col-sm-offset-2 col-sm-8 col-md-offset-3 col-md-6",
                                        children: (0, j.jsx)(A.Z, {
                                            data: _,
                                            slnId: "".concat(a, "_link"),
                                            downloadLabel: O
                                        })
                                    })
                                })
                            })]
                        }) : null
                    }
                }]), r
            }(u.PureComponent);
            q.displayName = "Features";
            var U = (0, P.Z)(q),
                J = (0, m.Z)(U, p)
        },
        40754: function(e, t, r) {
            r.d(t, {
                bH: function() {
                    return s
                },
                Nk: function() {
                    return c
                },
                zv: function() {
                    return m
                },
                Pg: function() {
                    return i
                },
                iR: function() {
                    return d
                },
                S: function() {
                    return u
                }
            });
            var n = "track",
                o = "beosound",
                a = r(48787),
                i = function(e) {
                    try {
                        var t = e.url,
                            r = e.variant,
                            i = e.variantKey,
                            c = e.defaultCurrency;
                        if (t && r && i && window && window.hero) {
                            var l = r && function(e) {
                                    var t = e.get("categoryName"),
                                        r = e.get("sku"),
                                        n = e.get("productName"),
                                        o = e.getIn(["price", "currencyCode"]),
                                        i = e.getIn(["price", "centAmount"]),
                                        c = Math.pow(10, e.getIn(["price", "fractionDigits"])),
                                        l = i ? i / c || 1 : null,
                                        s = e.getIn(["mediaItems", "0", "media", "defaultAssetUrl"]);
                                    return {
                                        categoryName: t,
                                        productId: r,
                                        productName: n,
                                        currency: o,
                                        amount: l,
                                        image: s = (0, a.ns)(s)
                                    }
                                }(r),
                                s = l.categoryName,
                                u = l.productId,
                                d = l.productName,
                                m = l.currency,
                                f = l.amount,
                                p = l.image;
                            window.hero(n, {
                                type: "ecommerce:detail",
                                products: [{
                                    id: u,
                                    name: d,
                                    price: f,
                                    brand: o,
                                    category: s,
                                    variant: i,
                                    location: t,
                                    currency: m || c,
                                    image: p
                                }]
                            })
                        }
                    } catch (h) {
                        console.log("Error while hero tracking PDP page...", h)
                    }
                },
                c = function(e, t) {
                    try {
                        window && window.hero && window.hero(n, {
                            type: "event",
                            action: "category-view",
                            value: e,
                            location: t
                        })
                    } catch (r) {
                        console.log("Error while hero tracking category page...", r)
                    }
                },
                l = function(e) {
                    var t = e.get("categoryName"),
                        r = e.get("sku"),
                        n = e.get("name"),
                        o = e.getIn(["price", "value", "currencyCode"]),
                        i = e.getIn(["price", "value", "centAmount"]),
                        c = Math.pow(10, e.getIn(["price", "value", "fractionDigits"])),
                        l = i ? i / c || 1 : null,
                        s = e.getIn(["variant", "images", "0", "url"]);
                    return {
                        categoryName: t,
                        productId: r,
                        productName: n,
                        currency: o,
                        amount: l,
                        image: s = (0, a.ns)(s)
                    }
                },
                s = function(e) {
                    try {
                        var t = e.url,
                            r = e.variantKey,
                            a = e.cartData,
                            i = e.defaultCurrency;
                        if (t && a && r && window && window.hero) {
                            var c = a.get("lineItems").find((function(e) {
                                    return e.getIn(["variant", "key"]) === r
                                })),
                                s = c && l(c),
                                u = s.categoryName,
                                d = s.productId,
                                m = s.productName,
                                f = s.currency,
                                p = s.amount,
                                h = s.image,
                                g = c.get("quantity");
                            window.hero(n, {
                                type: "ecommerce:add",
                                products: [{
                                    id: d,
                                    name: m,
                                    price: p,
                                    brand: o,
                                    category: u,
                                    variant: r,
                                    location: t,
                                    currency: f || i,
                                    quantity: 1,
                                    image: h,
                                    basketQuantity: g
                                }]
                            })
                        }
                    } catch (v) {
                        console.log("Error while hero tracking add product to cart.", v)
                    }
                },
                u = function(e) {
                    try {
                        var t = e.url,
                            r = e.variantKey,
                            a = e.cartData,
                            i = e.basketQuantity,
                            c = e.defaultCurrency;
                        if (t && a && r && window && window.hero) {
                            var s = a.get("lineItems").find((function(e) {
                                    return e.getIn(["variant", "key"]) === r
                                })),
                                u = s && l(s),
                                d = u.categoryName,
                                m = u.productId,
                                f = u.productName,
                                p = u.currency,
                                h = u.amount,
                                g = u.image;
                            window.hero(n, {
                                type: "ecommerce:remove",
                                products: [{
                                    id: m,
                                    name: f,
                                    price: h,
                                    brand: o,
                                    category: d,
                                    variant: r,
                                    location: t,
                                    currency: p || c,
                                    quantity: 1,
                                    image: g,
                                    basketQuantity: i
                                }]
                            })
                        }
                    } catch (v) {
                        console.log("Error while hero tracking remove product from cart...", v)
                    }
                },
                d = function(e) {
                    try {
                        var t = e.purchase,
                            r = e.productDetails,
                            i = e.defaultCurrency;
                        if (r && window && window.hero) {
                            var c = r.map((function(e) {
                                var t = e.getIn(["totalPrice", "centAmount"]),
                                    r = Math.pow(10, e.getIn(["totalPrice", "fractionDigits"])),
                                    n = t ? t / r || 1 : null,
                                    c = e.getIn(["variant", "attributes"]),
                                    l = c && c.find((function(e) {
                                        return "CategoryName" === e.get("name")
                                    })),
                                    s = l && l.get("value"),
                                    u = e.getIn(["variant", "images", "0", "url"]);
                                return u = (0, a.ns)(u), {
                                    id: e.getIn(["variant", "sku"]),
                                    quantity: e.get("quantity"),
                                    name: e.get("name"),
                                    image: u,
                                    price: n,
                                    currency: e.getIn(["totalPrice", "currencyCode"]) || i,
                                    brand: o,
                                    category: s,
                                    variant: e.getIn(["variant", "key"])
                                }
                            }));
                            window.hero(n, {
                                type: "ecommerce:purchase",
                                products: c && c.toJS(),
                                purchase: t
                            })
                        }
                    } catch (l) {
                        console.log("Error while hero tracking product purchased event...", l)
                    }
                },
                m = function(e) {
                    try {
                        if (window && window.hero) {
                            var t = e.firstName,
                                r = e.lastName,
                                n = e.phone,
                                o = {
                                    firstName: t,
                                    lastName: r,
                                    email: e.email,
                                    phoneNumber: n
                                };
                            window.hero("update", {
                                customer: o
                            })
                        }
                    } catch (a) {
                        console.log("Error while hero tracking update customer details...", a)
                    }
                }
        }
    }
]);