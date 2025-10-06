"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9148], {
        83756: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return b
                }
            });
            var o = n(27378),
                a = n(59742),
                r = n(40154),
                i = n(60042),
                l = n.n(i),
                c = n(34869),
                s = n(41408),
                d = n(83030),
                p = (0, s.iv)(["&.varientDetailPopup{position:absolute;.popup-container{position:absolute;width:284px;padding:20px;bottom:15px;left:30px;.cross-btn{top:8px;right:3px;.close-icon{width:10px;height:10px;}}.price_description{font-size:", ";line-height:", ";}@media ", "{width:400px;left:-32px;}}}&.no-animations{animation:unset;position:relative;}&.specialOffer{.popup-container{position:absolute;width:100%;padding:24px;bottom:0;left:0;top:0;margin:0;max-width:initial;height:fit-content;.cross-btn{top:8px;right:3px;.close-icon{width:10px;height:10px;}}.offerPopup_wrapper{p{color:", ";}.subTitle{p{margin-bottom:16px;}}}@media ", "{width:100%;}}}"], (function(e) {
                    return (0, d.hO)(e.theme.fonts.fontSize.body.small.quinary)
                }), (function(e) {
                    return (0, d.hO)(e.theme.fonts.lineHeight.custom.custom_6)
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                u = n(30049),
                m = n(6234),
                h = n(17726),
                g = n(24246),
                f = (0, o.memo)((function(e) {
                    var t = e.className,
                        n = e.showCloseBtn,
                        i = e.onCloseCallback,
                        c = e.data,
                        s = e.key,
                        d = e.viewportInfo,
                        p = e.isSpecialOfferPopUp,
                        m = e.formattedDateForStockRefilExpectedDeliveryMessage,
                        f = e.fromPDP,
                        x = l()(t, p ? "specialOffer" : "varientDetailPopup", "-fadeInUp", p && "no-animations"),
                        b = (0, o.useRef)(null);

                    function y(e) {
                        b.current && !b.current.contains(e.target) && i(s)
                    }
                    return (0, o.useEffect)((function() {
                        return document.addEventListener("mousedown", y),
                            function() {
                                document.removeEventListener("mousedown", y)
                            }
                    }), []), (0, g.jsx)("div", {
                        className: x,
                        ref: b,
                        children: (0, g.jsx)(a.ZP, {
                            children: (0, g.jsx)(r.Z, {
                                children: (0, g.jsx)(u.Z, {
                                    showCloseBtn: n,
                                    onCloseCallback: i,
                                    fromPDP: f,
                                    children: p ? function() {
                                        var e, t = null === c || void 0 === c || null === (e = c.getIn(["0", "title"])) || void 0 === e ? void 0 : e.replace("%%stockRefilExpectedDeliveryDate%%", m || ""),
                                            n = null === c || void 0 === c ? void 0 : c.getIn(["0", "subtitle"]),
                                            o = null === c || void 0 === c ? void 0 : c.getIn(["0", "description"]),
                                            a = null === c || void 0 === c ? void 0 : c.getIn(["0", "descriptionRichText"]),
                                            r = null === d || void 0 === d ? void 0 : d.getIn(["isEqualOrLargerThan", "small"]),
                                            i = r ? "b1" : "b3";
                                        return (0, g.jsxs)("div", {
                                            className: "offerPopup_wrapper",
                                            children: [t && (0, g.jsx)("div", {
                                                className: "title",
                                                children: (0, g.jsx)("p", {
                                                    className: " ".concat(f ? i : "h5B"),
                                                    children: t
                                                })
                                            }), n && (0, g.jsx)("div", {
                                                className: "subTitle",
                                                children: (0, g.jsx)("p", {
                                                    className: " ".concat(f ? i : "h4A"),
                                                    children: n
                                                })
                                            }), a && (0, g.jsx)("div", {
                                                className: "description",
                                                children: (0, g.jsx)(h.Z, {
                                                    data: a,
                                                    paragraphClassName: "".concat(r ? "b1" : "b3"),
                                                    className: "".concat(f ? i : "b1A")
                                                })
                                            }), !a && o && (0, g.jsx)("div", {
                                                className: "description",
                                                children: (0, g.jsx)("p", {
                                                    className: "".concat(f ? i : "b1A"),
                                                    children: o
                                                })
                                            })]
                                        })
                                    }() : (0, g.jsx)("p", {
                                        className: "price_description",
                                        children: c
                                    })
                                })
                            })
                        })
                    })
                }));
            f.displayName = "VariantDetailPopup";
            var x = (0, m.Z)(f),
                b = (0, c.Z)(x, p)
        },
        69148: function(e, t, n) {
            n.r(t), n.d(t, {
                default: function() {
                    return U
                }
            });
            var o = n(43350),
                a = n(80040),
                r = n(59307),
                i = n(48415),
                l = n(73667),
                c = n(3117),
                s = n(90849),
                d = n(27378),
                p = n(73546),
                u = n(34051),
                m = n(86677),
                h = n.n(m),
                g = n(34869),
                f = n(41408),
                x = n(83030),
                b = (0, f.iv)(["&.productComparison{padding-bottom:30px;@media ", "{padding-bottom:60px;}&.category-compare-table{padding:60px 10px;margin-right:-16px;margin-left:-16px;@media ", "{margin-right:-36px;margin-left:-36px;}}@media ", "{padding-right:6px;padding-left:6px;}&.a-container{max-width:1512px;}.productComparisonTitle{caption{padding-bottom:8px;display:flex}}.tContainer{display:flex;flex-direction:column;width:100%;position:relative;&.teaserContainer{@media ", "{overflow:auto;}.productHeader{.productImage{@media ", "{width:130px;height:130px;}}}.descText{vertical-align:middle;}.productPrice{color:", ";max-width:150px;}&.teaserContainer-2-items{.descText{width:35%;}}}&.inDepthContainer{.productHeader{.productImage{@media ", "{margin:0 auto 20px auto;width:50px;height:50px;}}}table{.productHeader{.productHeaderTitle{@media ", "{width:140px;margin-right:0;}}.productSwatches{@media ", "{margin:4px 0;}.m-swatches{.m-swatches__form{@media ", "{li{position:relative;margin-right:-6px;&:nth-child(5){z-index:1;}&:nth-child(4){z-index:2;}&:nth-child(3){z-index:3;}&:nth-child(2){z-index:4;}&:nth-child(1){z-index:5;}.a-swatch__chip{height:14px;width:14px;}.m-swatches__truncated{position:relative;top:-2px;width:18px;height:18px;margin-left:10px;.a-svgIcon{position:absolute;margin:0;top:5px;left:5px;width:6px;height:6px;}}}}}}}}}}.inDepthTableHeadWrapper{position:sticky;top:", "px;z-index:1;display:flex;@media ", "{top:", ";}}.inDepthTableBodyWrapper{display:flex;.ptableRow{.pTableHeading{vertical-align:top;padding-top:20px;}}table{@media ", "{margin:0;}}}}table{width:100%;margin:20px 0 0 0;border-spacing:0;position:relative;@media ", "{margin:", " 0 0 0;}tr{position:relative;}th{padding:20px 10px;border-bottom:1px solid ", ";@media ", "{padding:10px;}}td{text-align:center;padding:20px 10px;border-bottom:1px solid ", ";}.pTableHeading{min-width:140px;.moreInfo-icon_button{width:32px;height:32px;padding:0;background:transparent;margin-left:0;cursor:pointer;position:relative;svg{width:32px;height:32px;position:absolute;left:0;top:-5px;}}.varientDetailPopup{z-index:", ";font-weight:", ";}.popup-container{bottom:35px;left:-10px;.price_description{text-transform:none;}}}.ptableRow{.pTableHeading{text-align:left;}td{width:25%;}}.descText{vertical-align:top;.a-markdownContent{display:flex;justify-content:center;flex-direction:column;align-items:center;}p{color:", ";max-width:150px;}.emptyList{color:", ";}.descriptionList{color:", ";text-align:left;.a-markdownContent{align-items:flex-start;}}}.productHeader{display:flex;flex-direction:column;position:relative;text-align:center;.productImage{width:150px;height:150px;display:flex;margin:10px auto;transition:all 0.5s ease-in;@media ", "{margin-top:15px;}a.product-image-anchor-link{display:block;}&.tinyImage{width:60px;height:60px;transition:all 0.5s ease-in;@media ", "{display:none;}}.externalLink-span{.a-svgIcon{display:none;}}}.productHeaderTitle{margin:initial;@media ", "{width:90px;align-self:center;margin-right:10px;min-height:", ";}}.productTags{ul.tagList{list-style-type:none;padding:0;margin:0;color:", ";li{text-transform:capitalize;}}}.productSwatches{margin:10px 0;.a-swatch__chip{&.size{height:26px;width:26px;}}.m-swatches{.m-swatches__form{@media ", "{li{position:relative;margin-right:-6px;&:nth-child(5){z-index:1;}&:nth-child(4){z-index:2;}&:nth-child(3){z-index:3;}&:nth-child(2){z-index:4;}&:nth-child(1){z-index:5;}.a-swatch__chip{height:14px;width:14px;}.m-swatches__truncated{position:relative;top:-2px;width:18px;height:18px;margin-left:10px;.a-svgIcon{position:absolute;margin:0;top:5px;left:5px;width:6px;height:6px;}}}}}}.customisable{content:'';position:relative;top:3px;margin:0 4px 0 0;display:inline-block;width:24px;height:24px;background:url('/static-assets/images/common/icon-customisable.png') no-repeat;background-size:24px 24px;@media ", "{display:block;margin:0 auto 2px;}}}.productLink{font-weight:normal;color:", ";margin-top:5px;letter-spacing:0;a{border-bottom:1px solid ", ";}}.close-btn{width:20px;height:20px;position:absolute;top:20px;right:0;display:flex;align-items:center;justify-content:center;background:white;border-radius:10px;cursor:pointer;font-size:", ";@media ", "{top:0;}}}.fixedVertically{position:sticky;top:0;background:white;z-index:1;}.fixedSubHeading{border-bottom:none;padding-bottom:0;.fixedHorizontal{position:sticky;text-align:center;transform:translate3d(-50%,0,0);left:50%;width:33%;text-transform:uppercase;&.headingWith_icon{left:52%;display:flex;width:35%;.varientDetailPopup{left:-17vw;bottom:0;}}}}.a-swatch{div,a{border:", ";cursor:default;}}}.inDepthComparison{th,.emptyCol{width:25%;}.emptyCol{p{color:", ";font-weight:normal;text-transform:capitalize;}}.inDepthCompareTableHead{background:", ";.pTableHeading{@media ", "{padding:20px 10px;}}}.expandComparisonRow{text-align:left;cursor:pointer;.comparisonRowContent{display:flex;justify-content:space-between;align-items:center;position:relative;top:10px;@media ", "{width:95vw;position:sticky;left:0;}}}.m-accordionAnimated__icon{height:20px;width:20px;position:relative;overflow:hidden;text-indent:-999px;border-radius:100%;border:1px solid ", ";background-color:", ";transition:background-color ", " ", ";&::before,&::after{content:'';display:block;position:absolute;background-color:", ";transform:translate3d(-50%,-50%,0);transition:all ", " ", ";}&::before{height:8px;width:2px;top:50%;left:50%;}&::after{height:2px;width:8px;top:50%;left:50%;}&.-isExpanded{background-color:transparent;&::before{opacity:0;}&::after{background-color:", ";}}}&.inDepthScrollHead{.productHeader{@media ", "{height:100%;}}}.descText{ul{padding-left:0;margin-top:0;li{list-style-type:none;display:flex;&::before{content:'\u2022';padding-right:5px;font-size:", "px;}}}.a-markdownContent{align-items:flex-start;p{text-align:left;}}}}.compareBtnWrapper{.ctaContainer{max-width:1512px;margin:0 auto;.ctaModifier{margin-top:30px;text-transform:uppercase;display:flex;margin-left:auto;margin-right:auto;justify-content:flex-end;@media ", "{flex-direction:column-reverse;}.startNewComparison,.addAnotherProduct,.showFullComparison{display:flex;flex:1 1 0;@media ", "{margin-left:0;margin-bottom:10px;display:block;}}}}}.ctaModifier > div{margin-left:20px;@media ", "{margin-left:0;}}.showFixedCta{position:fixed;bottom:0;left:0;z-index:", ";width:100%;background:", ";box-shadow:0 0 10px 2px ", ";min-height:60px;.ctaContainer{.ctaModifier{align-items:center;margin-top:0;min-height:60px;padding-right:2rem;padding-left:2rem;@media ", "{align-items:stretch;padding:6px 6px 0 6px;}}}}}"], (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.tableTop + 20
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.showMobileHeader ? "".concat(e.tableTop + 40, "px") : "0"
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.showMobileHeader ? "20px" : "0"
                }), (function(e) {
                    return e.theme.colors.GREY2
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.colors.GREY2
                }), (function(e) {
                    return e.theme.zIndex.zDefault
                }), (function(e) {
                    return e.theme.fonts.fontWeight.normal
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (0, x.hO)(50), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return (0, x.hO)(e.theme.fonts.fontSize.body.small.octonary)
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.borders.senary
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.colors.GREY1
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.duration.fast
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.duration.fast
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return e.theme.fonts.fontSize.body.small.secondary
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.zIndex.zCartSummary
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return (0, x.DZ)(.9, e.theme.colors.BEO_BLACK)
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                })),
                y = n(6234),
                v = n(34919),
                w = n(21318),
                C = n(50813),
                j = n(8103),
                T = n(18307),
                S = n(5047),
                N = n(21250),
                I = n(23149),
                Z = n(60042),
                k = n.n(Z),
                P = n(41605),
                R = n(24246);

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
                    var n, o = (0, c.Z)(e);
                    if (t) {
                        var a = (0, c.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var D = function(e) {
                (0, i.Z)(n, e);
                var t = L(n);

                function n(e) {
                    var a;
                    return (0, o.Z)(this, n), a = t.call(this, e), (0, s.Z)((0, r.Z)(a), "toggleComparisonRow", (function(e) {
                        e.preventDefault();
                        var t = a.state.show;
                        a.setState({
                            show: !t
                        })
                    })), a.state = {
                        show: a.props.defaultExpanded
                    }, a
                }
                return (0, a.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props.title,
                            t = this.state.show,
                            n = k()("m-accordionAnimated__icon", {
                                "-isExpanded": t
                            });
                        return (0, R.jsxs)(R.Fragment, {
                            children: [(0, R.jsx)("tr", {
                                children: (0, R.jsx)("td", {
                                    className: "expandComparisonRow",
                                    colSpan: "4",
                                    onClick: this.toggleComparisonRow,
                                    "aria-hidden": "true",
                                    children: (0, R.jsxs)("caption", {
                                        className: "comparisonRowContent h4",
                                        children: [e, (0, R.jsx)("em", {
                                            className: n,
                                            children: t ? P.e8_ : P.TgJ
                                        })]
                                    })
                                })
                            }), this.state.show && this.props.children]
                        })
                    }
                }]), n
            }(d.PureComponent);
            D.displayName = "ComparisonRowWrapper";
            var H = D,
                O = n(75006),
                _ = "INDEPTH",
                z = n(3514),
                E = n(83756),
                M = n(10754),
                Q = n(48787);

            function A(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(e);
                    t && (o = o.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, o)
                }
                return n
            }

            function B(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? A(Object(n), !0).forEach((function(t) {
                        (0, s.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : A(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function F(e) {
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
                        var a = (0, c.Z)(this).constructor;
                        n = Reflect.construct(o, arguments, a)
                    } else n = o.apply(this, arguments);
                    return (0, l.Z)(this, n)
                }
            }
            var W = function(e) {
                (0, i.Z)(n, e);
                var t = F(n);

                function n(e) {
                    var a;
                    return (0, o.Z)(this, n), a = t.call(this, e), (0, s.Z)((0, r.Z)(a), "isBottom", (function(e) {
                        return e && e.getBoundingClientRect().bottom <= window.innerHeight
                    })), (0, s.Z)((0, r.Z)(a), "closePopUp", (function(e) {
                        a.setState({
                            isPopupOn: e
                        })
                    })), (0, s.Z)((0, r.Z)(a), "renderSeoTags", (function() {
                        var e = a.props,
                            t = e.pageQuery,
                            n = e.locale,
                            o = e.country,
                            r = e.productComparisonData,
                            i = null === r || void 0 === r ? void 0 : r.get("categoryTitle"),
                            l = null === r || void 0 === r ? void 0 : r.getIn(["labels", "compareLabel"]),
                            c = null === r || void 0 === r ? void 0 : r.get("comparisonItems"),
                            s = [];
                        c.forEach((function(e) {
                            s.push(e.get("name"))
                        }));
                        var d = s.join(" - "),
                            p = t && t.get("slug"),
                            u = null === o || void 0 === o ? void 0 : o.toLowerCase(),
                            m = {
                                canonical: "".concat(P.zDf, "/").concat(n, "/").concat(u, "/compare/").concat(p)
                            },
                            h = "".concat(l, " ").concat(i, ": ").concat(d, " | B&O");
                        return (0, R.jsx)(z.Z, B(B({}, m), {}, {
                            title: h
                        }))
                    })), (0, s.Z)((0, r.Z)(a), "displayHeaderOnScroll", (function(e, t) {
                        0 === t || a.state.displayScrollHeader ? 0 === t && setTimeout((function() {
                            a.setState({
                                displayScrollHeader: !1
                            })
                        }), 200) : setTimeout((function() {
                            a.setState({
                                displayScrollHeader: !0
                            }, (function() {
                                window.scrollTo(0, t)
                            }))
                        }), 200)
                    })), (0, s.Z)((0, r.Z)(a), "handleScroll", (function() {
                        var e = a.props,
                            t = e.viewportInfo,
                            n = e.scrollPageCallback,
                            o = a.state.lastScrollTop,
                            r = document.querySelector(".inDepthTableHeadWrapper"),
                            i = document.querySelector(".tContainer"),
                            l = document.querySelector(".productComparison"),
                            c = r && r.getBoundingClientRect().bottom,
                            s = window.pageYOffset || document.documentElement.scrollTop,
                            d = t && t.getIn(["isSmallerThan", "small"]),
                            p = (r && r.getBoundingClientRect().top) - (l && l.getBoundingClientRect().top + 20);
                        d ? d && s > o ? (a.isBottom(i) ? a.setState({
                            footerReach: !0
                        }) : a.setState({
                            footerReach: !1
                        }), c <= s && setTimeout((function() {
                            n(!1)
                        }), 200)) : d && s < o && (a.setState({
                            footerReach: !0
                        }), setTimeout((function() {
                            n(!0)
                        }), 200)) : a.isBottom(i) ? a.setState({
                            footerReach: !0
                        }) : a.setState({
                            footerReach: !1
                        }), (s > 100 || 0 === s) && a.displayHeaderOnScroll(p, s), a.setState({
                            lastScrollTop: s <= 0 ? 0 : s
                        })
                    })), (0, s.Z)((0, r.Z)(a), "handleCloseClick", (function(e, t) {
                        var n = a.props,
                            o = n.productComparisonData,
                            r = n.removeProduct,
                            i = n.locale,
                            l = n.country,
                            c = null === l || void 0 === l ? void 0 : l.toLowerCase(),
                            s = "/".concat(i, "/").concat(c, "/compare/").concat(t),
                            d = {
                                language: i,
                                country: c,
                                slug: t
                            },
                            p = o && o.get("comparisonItems");
                        p.size <= 1 && h().push({
                            pathname: "/[language]/[country]/compare",
                            query: d
                        }, s), r({
                            categorySlug: t,
                            products: p && p.filter((function(t) {
                                return t.get("slug") !== e
                            }))
                        })
                    })), (0, s.Z)((0, r.Z)(a), "renderlist", (function(e) {
                        var t = e.descriptionList,
                            n = e.key,
                            o = a.props.locale;
                        return (0, R.jsxs)("ul", {
                            children: [" ", null === t || void 0 === t ? void 0 : t.map((function(e) {
                                return e && "-" === e ? (0, R.jsxs)("span", {
                                    className: "emptyList",
                                    children: [" ", e, " "]
                                }) : e && (0, R.jsx)("li", {
                                    className: "descriptionList",
                                    children: (0, R.jsx)(j.Z, {
                                        className: "b3",
                                        data: (0, u.fromJS)({
                                            description: e
                                        }),
                                        locale: o
                                    })
                                }, n)
                            }))]
                        })
                    })), (0, s.Z)((0, r.Z)(a), "getTableColumns", (function(e) {
                        var t = a.props,
                            n = t.locale,
                            o = t.tableType;
                        return e.map((function(e, t) {
                            var r = e && e.get("description"),
                                i = null === e || void 0 === e ? void 0 : e.get("showAsPlainTextOnCompare"),
                                l = e && e.get("images"),
                                c = l && l.getIn(["0", "defaultAssetUrl"]),
                                s = l && l.getIn(["0", "altText"]),
                                d = l && l.getIn(["0", "titleText"]),
                                p = null === r || void 0 === r ? void 0 : r.split("\n"),
                                m = "".concat(t, "_key");
                            return (0, R.jsxs)("td", {
                                className: "descText b3",
                                children: [l && c && (0, R.jsx)(I.Z, {
                                    src: c,
                                    alt: s,
                                    title: d
                                }), r && !l && (o && o === _ && !i ? a.renderlist({
                                    descriptionList: p,
                                    key: m
                                }) : (0, R.jsx)(j.Z, {
                                    className: "b3",
                                    data: (0, u.fromJS)({
                                        description: r
                                    }),
                                    locale: n
                                })), !r && !l && (0, R.jsx)("p", {
                                    children: "\u2013"
                                })]
                            }, m)
                        }))
                    })), (0, s.Z)((0, r.Z)(a), "renderTableRows", (function(e) {
                        if (e) {
                            var t = a.props,
                                n = t.viewportInfo,
                                o = t.productComparisonData,
                                r = t.tableType,
                                i = t.moreInfoLabel,
                                l = a.state.isPopupOn,
                                c = o && o.get("comparisonItems"),
                                s = n && n.getIn(["isSmallerThan", "small"]);
                            return e.map((function(e) {
                                var t = e && e.get("title"),
                                    n = null === e || void 0 === e ? void 0 : e.get("titleInfo"),
                                    o = e && e.get("ComparisonRowContents"),
                                    d = null === t || void 0 === t ? void 0 : t.split(" ")[0];
                                return (0, R.jsxs)("tr", {
                                    className: "ptableRow",
                                    children: [(0, R.jsxs)("th", {
                                        className: "pTableHeading h5",
                                        scope: "row",
                                        children: [t, n && (0, R.jsx)("button", {
                                            type: "button",
                                            className: "moreInfo-icon_button",
                                            "aria-label": i,
                                            onClick: function() {
                                                return a.closePopUp(d)
                                            },
                                            children: (0, R.jsx)(M.Z, {
                                                className: "moreInfo-icon",
                                                icon: "moreInfo"
                                            })
                                        }), l === d && n && (0, R.jsx)(E.Z, {
                                            showCloseBtn: !0,
                                            onCloseCallback: a.closePopUp,
                                            data: n
                                        }, d)]
                                    }), o && a.getTableColumns(o), !s && r === _ && 2 === c.size && (0, R.jsx)("td", {
                                        children: "\xa0"
                                    }), !s && r === _ && 1 === c.size && (0, R.jsxs)(R.Fragment, {
                                        children: [(0, R.jsx)("td", {
                                            children: "\xa0"
                                        }), (0, R.jsx)("td", {
                                            children: "\xa0"
                                        })]
                                    })]
                                }, t)
                            }))
                        }
                        return null
                    })), (0, s.Z)((0, r.Z)(a), "getProductTags", (function(e, t, n) {
                        if (e) {
                            var o = t - e.size,
                                a = e.toJS();
                            if (o > 0)
                                for (var r = 0; r < o; r++) a.push({});
                            return a.map((function(e, t) {
                                var o = e.value,
                                    a = void 0 === o ? "" : o,
                                    r = "".concat(n, "_").concat(a, "_").concat(t);
                                return (0, R.jsxs)("li", {
                                    children: [a, "\xa0"]
                                }, r)
                            }))
                        }
                        return null
                    })), (0, s.Z)((0, r.Z)(a), "getTagCount", (function(e) {
                        var t = 0;
                        return e.forEach((function(e) {
                            var n = e && e.get("tags");
                            n && (t = n.size > t ? n.size : t)
                        })), t
                    })), (0, s.Z)((0, r.Z)(a), "renderTableHeader", (function(e) {
                        var t = a.props,
                            n = t.productComparisonData,
                            o = t.viewportInfo,
                            r = t.tableType,
                            i = t.locale,
                            l = t.country,
                            c = t.cmsLabelsGlobal,
                            s = null === c || void 0 === c ? void 0 : c.get("closeLabel"),
                            d = n && n.get("comparisonItems"),
                            p = o && o.getIn(["isSmallerThan", "small"]),
                            m = "".concat(p && r !== _ ? "fixedVertically" : "", " pTableHeading"),
                            h = d && a.getTagCount(d),
                            g = n && n.get("labels"),
                            f = g && g.get("viewMore"),
                            x = a.state.displayScrollHeader,
                            b = r === _ && x ? "tinyImage" : "";
                        return d.map((function(t) {
                            var n = t && t.get("name"),
                                o = t && t.get("slug"),
                                c = t && t.get("categorySlug"),
                                d = t && t.get("catSlugForPdp"),
                                p = t && t.get("swatches"),
                                g = t && t.get("tags"),
                                y = t && t.get("isCustomisable"),
                                v = t && t.get("defaultVariantAttribute"),
                                w = p && p.map((function(e) {
                                    var t = "Color" === v ? e.get("hexCode") : e.get("title"),
                                        n = e.get("title"),
                                        o = v.toLowerCase(),
                                        a = !("Color" === v);
                                    return (0, u.fromJS)({
                                        name: n,
                                        value: t,
                                        type: o,
                                        isSizeComparisionTable: a,
                                        isCompareSwatch: !0
                                    })
                                })),
                                C = null;
                            return d && o && (C = {
                                pathname: "/[language]/[country]/[categoriesSlug]/[slug]",
                                query: {
                                    language: i,
                                    country: l && l.toLowerCase(),
                                    categoriesSlug: d,
                                    slug: o
                                }
                            }), (0, R.jsx)("th", {
                                className: m,
                                scope: "col",
                                children: (0, R.jsxs)("div", {
                                    className: "productHeader",
                                    children: [r === _ && (0, R.jsx)("button", {
                                        type: "button",
                                        onClick: function() {
                                            return a.handleCloseClick(o, c)
                                        },
                                        className: "close-btn icn-close",
                                        "aria-label": "".concat(s)
                                    }), (0, R.jsx)("span", {
                                        className: "productImage ".concat(b),
                                        children: a.getProductImage(t)
                                    }), (0, R.jsx)("span", {
                                        className: "productHeaderTitle h5",
                                        children: a.getProductNameAnchorLink(t, n)
                                    }), g && r === _ && !x && (0, R.jsx)("span", {
                                        className: "productTags",
                                        children: (0, R.jsx)("ul", {
                                            className: "tagList b3",
                                            children: a.getProductTags(g, h, o)
                                        })
                                    }), y && r === _ && !x && (0, R.jsx)("span", {
                                        className: "productSwatches",
                                        children: (0, R.jsx)("div", {
                                            className: "customisable"
                                        })
                                    }), w && r === _ && !x && !y && (0, R.jsx)("span", {
                                        className: "productSwatches",
                                        children: (0, R.jsx)(O.Z, {
                                            limit: 3,
                                            swatches: w,
                                            showInfo: !1,
                                            isTouchEnabled: !1,
                                            isCompareSwatch: !0,
                                            swatchClickDisabled: !0,
                                            hidePrice: e
                                        })
                                    }), r === _ && !x && !e && a.getProductPrice(t), r === _ && C && !x && (0, R.jsx)("span", {
                                        className: "productLink b3",
                                        children: (0, R.jsx)(S.Z, {
                                            cta: null,
                                            href: C,
                                            ariaLabel: n,
                                            forceClick: !0,
                                            target: "_blank",
                                            children: f
                                        })
                                    })]
                                })
                            }, "products-column-".concat(o))
                        }))
                    })), (0, s.Z)((0, r.Z)(a), "renderMobileTableRows", (function(e) {
                        var t = [];
                        return e.forEach((function(e) {
                            var n = e && e.get("title"),
                                o = e.get("titleInfo"),
                                a = e && e.get("ComparisonRowContents");
                            n && t.push({
                                title: n,
                                colSpan: a.size,
                                titleInfo: o
                            }), a && t.push({
                                comparisonRowContents: a
                            })
                        })), t.map((function(e) {
                            var t = e.title,
                                n = e.colSpan,
                                o = e.comparisonRowContents,
                                r = e.titleInfo,
                                i = a.state.isPopupOn,
                                l = a.props.moreInfoLabel,
                                c = null === t || void 0 === t ? void 0 : t.split(" ")[0];
                            return t ? (0, R.jsx)("tr", {
                                children: (0, R.jsx)("th", {
                                    className: "pTableHeading fixedSubHeading h5",
                                    colSpan: n,
                                    scope: "col",
                                    children: (0, R.jsxs)("div", {
                                        className: "".concat(r && "headingWith_icon", " fixedHorizontal"),
                                        children: [(0, R.jsxs)("div", {
                                            children: [" ", t, " "]
                                        }), r && (0, R.jsx)("button", {
                                            type: "button",
                                            className: "moreInfo-icon_button",
                                            "aria-label": l,
                                            onClick: function() {
                                                return a.closePopUp(c)
                                            },
                                            children: (0, R.jsx)(M.Z, {
                                                className: "moreInfo-icon",
                                                icon: "moreInfo"
                                            })
                                        }), i === c && r && (0, R.jsx)(E.Z, {
                                            showCloseBtn: !0,
                                            onCloseCallback: a.closePopUp,
                                            data: r
                                        }, c)]
                                    })
                                })
                            }) : o ? (0, R.jsx)("tr", {
                                children: a.getTableColumns(o)
                            }) : null
                        }))
                    })), (0, s.Z)((0, r.Z)(a), "getProductPrice", (function(e) {
                        var t = a.props,
                            n = t.categoryLabels,
                            o = t.fromPriceLabelOnRightEnabled,
                            r = e && e.get("comparisonItemType"),
                            i = e && e.get("productPrice"),
                            l = e && e.get("subtitle"),
                            c = e && e.get("showFromPrice"),
                            s = n && n.get("startingFromLabel"),
                            d = a.state.displayScrollHeader;
                        return "product" === r && i && !d ? (0, R.jsxs)("span", {
                            className: "productPrice b3",
                            children: [c && !o && (0, R.jsxs)("span", {
                                children: [s, "\xa0"]
                            }), (0, R.jsx)(T.Z, {
                                price: i
                            }), c && o && (0, R.jsxs)("span", {
                                children: [s, "\xa0"]
                            })]
                        }) : "unavailableproduct" !== r || i || d ? (0, R.jsx)("span", {
                            className: "productPrice b3",
                            children: "\xa0"
                        }) : (0, R.jsx)("span", {
                            className: "productPrice b3",
                            children: l
                        })
                    })), (0, s.Z)((0, r.Z)(a), "getProductImage", (function(e) {
                        var t = a.props,
                            n = t.locale,
                            o = t.pageQuery,
                            r = t.tableType,
                            i = t.viewportInfo,
                            l = t.country,
                            c = e && e.getIn(["comparisonItemMediaItem", "media", "defaultAssetUrl"]),
                            s = e && e.getIn(["comparisonItemMediaItem", "media", "altText"]),
                            d = e && e.getIn(["comparisonItemMediaItem", "media"]),
                            p = e && e.get("categorySlug"),
                            u = e && e.get("slug"),
                            m = o && o.get("categoriesSlug"),
                            h = e && e.get("catSlugForPdp"),
                            g = o && o.get("slug"),
                            f = l ? "/".concat(l.toLowerCase()) : "",
                            x = i && i.getIn(["isSmallerThan", "small"]),
                            b = null;
                        if (h && u && (m !== p || u !== g) && (b = "/".concat(n).concat(f, "/").concat(h, "/").concat(u)), c && b && r !== _) {
                            var y = {
                                pathname: "/[language]/[country]/[categoriesSlug]/[slug]",
                                query: {
                                    language: n,
                                    country: l.toLowerCase(),
                                    categoriesSlug: h,
                                    slug: u
                                }
                            };
                            return (0, R.jsx)(S.Z, {
                                cta: null,
                                href: y,
                                handleLinkClick: function() {
                                    return a.productImpressionCall(e)
                                },
                                ariaLabel: s,
                                className: "product-image-anchor-link",
                                forceClick: !0,
                                children: (0, R.jsx)(v.Z, {
                                    media: d,
                                    imgHeight: x ? "130" : "150",
                                    imgWidth: x ? "130" : "150",
                                    contentfulImage: !0
                                })
                            })
                        }
                        return c ? (0, R.jsx)(v.Z, {
                            media: d,
                            imgHeight: x ? "130" : "150",
                            imgWidth: x ? "130" : "150",
                            contentfulImage: !0
                        }) : null
                    })), (0, s.Z)((0, r.Z)(a), "getProductNameAnchorLink", (function(e, t) {
                        var n = a.props,
                            o = n.locale,
                            r = n.pageQuery,
                            i = n.tableType,
                            l = n.country,
                            c = e && e.get("categorySlug"),
                            s = e && e.get("slug"),
                            d = r && r.get("categoriesSlug"),
                            p = e && e.get("catSlugForPdp"),
                            u = r && r.get("slug"),
                            m = l ? "/".concat(l.toLowerCase()) : "",
                            h = null;
                        if (p && s && (d !== c || s !== u) && (h = "/".concat(o).concat(m, "/").concat(p, "/").concat(s)), h && i !== _) {
                            var g = {
                                pathname: "/[language]/[country]/[categoriesSlug]/[slug]",
                                query: {
                                    language: o,
                                    country: l.toLowerCase(),
                                    categoriesSlug: p,
                                    slug: s
                                }
                            };
                            return (0, R.jsx)(S.Z, {
                                cta: null,
                                href: g,
                                handleLinkClick: function() {
                                    return a.productImpressionCall(e)
                                },
                                ariaLabel: t,
                                forceClick: !0,
                                children: t
                            })
                        }
                        return (0, R.jsx)("span", {
                            className: "productHeaderTitle h5",
                            children: t
                        })
                    })), (0, s.Z)((0, r.Z)(a), "getInDepthTableRows", (function() {
                        var e = a.props,
                            t = e.productComparisonData,
                            n = e.viewportInfo,
                            o = t && t.get("comparisonRowWrappers"),
                            r = n && n.getIn(["isSmallerThan", "small"]);
                        return o ? o.map((function(e, t) {
                            var n, o = e && e.get("wrapperTitle"),
                                i = e && e.get("comparisonRows");
                            n = r ? i && a.renderMobileTableRows(i) : i && a.renderTableRows(i);
                            var l = 0 === t;
                            return (0, R.jsx)(H, {
                                title: o,
                                defaultExpanded: l,
                                children: n
                            })
                        })) : null
                    })), (0, s.Z)((0, r.Z)(a), "getProductId", (function(e) {
                        var t = e.map((function(e) {
                            return e && e.get("slug")
                        })).toJS() || [];
                        return t = t && t.filter((function(e) {
                            return void 0 !== e
                        }))
                    })), (0, s.Z)((0, r.Z)(a), "onClickAnalytics", (function(e) {
                        var t = a.props.productComparisonData,
                            n = t && t.get("comparisonItems"),
                            o = n && a.getProductId(n),
                            r = {
                                section: e,
                                subSection: C.Hao.COMPARE,
                                selection: o
                            };
                        (0, w.Cm)(r)
                    })), (0, s.Z)((0, r.Z)(a), "productImpressionCall", (function(e) {
                        var t = e.getIn(["productPrice", "currencyCode"]),
                            n = e.get("name");
                        (0, w.av)({
                            productDetails: [e],
                            event: C.Ceb,
                            action: C.Lfs,
                            initialPageData: {
                                currency: t
                            },
                            availableQuant: !0,
                            listName: C.j2s,
                            eventAdditionalLabels: {
                                eventCategory: C.DES,
                                eventLabel: "".concat(C.j2s, "_").concat(n),
                                eventAction: C.gdP
                            }
                        })
                    })), (0, s.Z)((0, r.Z)(a), "displayPrice", (function(e) {
                        return e.map((function(e, t) {
                            var n = "".concat(t, "_price");
                            return (0, R.jsx)("td", {
                                children: a.getProductPrice(e)
                            }, n)
                        }))
                    })), a.state = {
                        displayScrollHeader: !1,
                        footerReach: !1,
                        lastScrollTop: 0,
                        isPopupOn: null
                    }, a
                }
                return (0, a.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.props.tableType === _ && (window.addEventListener("scroll", this.handleScroll, {
                            capture: !1,
                            passive: !0
                        }), document.body.style.overflowX = "auto")
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this.props,
                            t = e.tableType,
                            n = e.viewportInfo,
                            o = n && n.getIn(["isSmallerThan", "small"]);
                        t === _ && (document.body.style.display = o ? "flex" : "block")
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.props.tableType === _ && (document.body.style.display = "block", document.body.style.overflowX = "hidden", window.removeEventListener("scroll", this.handleScroll, {
                            capture: !1,
                            passive: !0
                        }))
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e, t = this,
                            n = this.props,
                            o = n.className,
                            a = void 0 === o ? "" : o,
                            r = n.viewportInfo,
                            i = n.productComparisonData,
                            l = n.tableType,
                            c = void 0 === l ? "" : l,
                            s = n.locale,
                            d = n.country,
                            p = n.pageQuery,
                            u = n.categoryLabels,
                            m = n.isCategoryPage,
                            h = n.slugConfig,
                            g = void 0 === h ? {} : h,
                            f = n.hidePriceForCountries,
                            x = n.homeCountryCookie,
                            b = n.priceLabel,
                            y = g.parentCategorySlug,
                            v = g.parentCategoryName,
                            w = "".concat(a, " productComparison"),
                            j = "".concat(c === _ ? "inDepthContainer" : "teaserContainer"),
                            T = r && r.getIn(["isSmallerThan", "small"]),
                            S = i && i.get("title"),
                            I = i && i.get("comparisonRows"),
                            Z = i && i.get("comparisonItems"),
                            k = i && i.get("singularCategoryTitle");
                        k = void 0 === (k = (k = m ? p && p.get("categoriesSlug") : k) && k.trim()) ? v : k;
                        var P = i && i.get("labels"),
                            L = P && P.get("noCategorySelected");
                        L = L && L.replace("%%category%%", k);
                        var D = null === d || void 0 === d ? void 0 : d.toLowerCase(),
                            H = "/".concat(s, "/").concat(D, "/compare"),
                            O = p && p.get("slug"),
                            z = Z && this.getProductId(Z),
                            E = z && z.join(),
                            M = "/".concat(s, "/").concat(D, "/compare/").concat(O, "?selected=").concat(E),
                            A = P && P.get("startNewComparison"),
                            B = P && P.get("addAnotherItem");
                        B = B && B.replace("%%category%%", k);
                        var F = u && u.get("compareAllCTALabel"),
                            W = u && u.get("compareOtherCategoryCTALabel");
                        W = W && W.replace("%%categoryTitle%%", null === (e = k) || void 0 === e ? void 0 : e.toLowerCase());
                        var G = "/".concat(s, "/").concat(D, "/comparison/products/").concat(y, "/").concat(z && z.join("/")),
                            q = this.state,
                            U = q.displayScrollHeader,
                            Y = q.footerReach,
                            J = "".concat(Y || c !== _ ? "" : "col-md-10 col-md-offset-1"),
                            K = T || c === _ || 2 !== Z.size ? "" : "teaserContainer-2-items",
                            V = (0, Q.CQ)(x, f);
                        return (0, R.jsxs)("div", {
                            className: "".concat(w, " a-container container-fluid"),
                            children: [c === _ && this.renderSeoTags(), (0, R.jsx)("div", {
                                className: "row",
                                children: (0, R.jsxs)("div", {
                                    className: "col-md-10 col-md-offset-1 col-xs-12 col-sm-12",
                                    children: [c !== _ && S && (0, R.jsx)("h2", {
                                        className: "productComparisonTitle h3",
                                        children: S
                                    }), (0, R.jsxs)("div", {
                                        className: "tContainer ".concat(j, " ").concat(K),
                                        children: [c !== _ && (0, R.jsxs)("table", {
                                            children: [(0, R.jsx)("thead", {
                                                children: (0, R.jsxs)("tr", {
                                                    children: [!T && (0, R.jsx)("th", {
                                                        scope: "col",
                                                        "aria-hidden": "true",
                                                        children: "\xa0"
                                                    }, "first-empty-column"), this.renderTableHeader(V)]
                                                })
                                            }), (0, R.jsxs)("tbody", {
                                                children: [T && (0, R.jsx)("tr", {
                                                    children: (0, R.jsx)("th", {
                                                        className: "pTableHeading fixedSubHeading h5",
                                                        colSpan: "3",
                                                        scope: "colgroup",
                                                        children: (0, R.jsx)("div", {
                                                            className: "fixedHorizontal",
                                                            children: (0, R.jsx)("div", {
                                                                children: b
                                                            })
                                                        })
                                                    })
                                                }), !U && !V && Z && (0, R.jsxs)("tr", {
                                                    className: "ptableRow",
                                                    children: [!T && (0, R.jsx)("th", {
                                                        className: "pTableHeading h5",
                                                        scope: "row",
                                                        children: b
                                                    }), this.displayPrice(Z)]
                                                }), !T && this.renderTableRows(I), T && this.renderMobileTableRows(I)]
                                            })]
                                        }), c === _ && (0, R.jsxs)(R.Fragment, {
                                            children: [(0, R.jsx)("div", {
                                                className: "inDepthTableHeadWrapper",
                                                children: (0, R.jsxs)("table", {
                                                    className: "inDepthComparison ".concat(U ? "inDepthScrollHead" : ""),
                                                    children: [(0, R.jsx)("caption", {
                                                        className: "h3",
                                                        children: S
                                                    }), " ", (0, R.jsx)("thead", {
                                                        children: (0, R.jsxs)("tr", {
                                                            className: "inDepthCompareTableHead",
                                                            children: [!T && (0, R.jsx)("th", {
                                                                className: "emptyCol",
                                                                scope: "col",
                                                                "aria-hidden": "true",
                                                                children: "\xa0"
                                                            }, "first-empty-column"), this.renderTableHeader(V), !T && 2 === Z.size && (0, R.jsx)("th", {
                                                                className: "emptyCol",
                                                                scope: "col",
                                                                children: (0, R.jsx)("p", {
                                                                    className: "b3",
                                                                    children: L
                                                                })
                                                            }, "no-category-empty-column"), !T && 1 === Z.size && (0, R.jsxs)(R.Fragment, {
                                                                children: [(0, R.jsx)("th", {
                                                                    className: "emptyCol",
                                                                    scope: "col",
                                                                    children: (0, R.jsx)("p", {
                                                                        className: "b3",
                                                                        children: L
                                                                    })
                                                                }, "second-empty-column"), (0, R.jsx)("th", {
                                                                    className: "emptyCol",
                                                                    scope: "col",
                                                                    children: (0, R.jsx)("p", {
                                                                        className: "b3",
                                                                        children: L
                                                                    })
                                                                }, "third-empty-column")]
                                                            })]
                                                        })
                                                    })]
                                                })
                                            }), (0, R.jsx)("div", {
                                                className: "inDepthTableBodyWrapper",
                                                children: (0, R.jsx)("table", {
                                                    className: "inDepthComparison",
                                                    children: (0, R.jsx)("tbody", {
                                                        children: this.getInDepthTableRows()
                                                    })
                                                })
                                            })]
                                        })]
                                    }), (0, R.jsx)("div", {
                                        className: "compareBtnWrapper ".concat(Y || c !== _ ? "" : "showFixedCta", " "),
                                        children: (0, R.jsx)("div", {
                                            className: "ctaContainer",
                                            children: (0, R.jsx)("div", {
                                                className: "row",
                                                children: (0, R.jsx)("div", {
                                                    className: "".concat(J, " col-xs-12 col-sm-12"),
                                                    children: (0, R.jsxs)("div", {
                                                        className: "ctaModifier",
                                                        children: [c === _ && (0, R.jsxs)(R.Fragment, {
                                                            children: [(0, R.jsx)(N.Z, {
                                                                cta: null,
                                                                forwardedAs: "".concat(H, "/").concat(O || ""),
                                                                href: {
                                                                    pathname: "/[language]/[country]/compare",
                                                                    query: {
                                                                        language: s,
                                                                        country: D,
                                                                        slug: O
                                                                    }
                                                                },
                                                                variant: "secondary",
                                                                icon: "arrowRight",
                                                                labelText: A,
                                                                disabled: !1,
                                                                className: "startNewComparison",
                                                                onClick: function() {
                                                                    return t.onClickAnalytics(C.N_0)
                                                                },
                                                                forceClick: !0
                                                            }), Z && Z.size < 3 && (0, R.jsx)(N.Z, {
                                                                cta: null,
                                                                forwardedAs: M,
                                                                href: {
                                                                    pathname: "/[language]/[country]/compare",
                                                                    query: {
                                                                        language: s,
                                                                        country: D,
                                                                        slug: O,
                                                                        selected: E
                                                                    }
                                                                },
                                                                variant: "secondary",
                                                                icon: "arrowRight",
                                                                labelText: B,
                                                                disabled: !1,
                                                                className: "addAnotherProduct",
                                                                onClick: function() {
                                                                    return t.onClickAnalytics(C.RV6)
                                                                },
                                                                forceClick: !0
                                                            })]
                                                        }), c !== _ && (0, R.jsxs)(R.Fragment, {
                                                            children: [(0, R.jsx)(N.Z, {
                                                                cta: null,
                                                                forwardedAs: "".concat(H, "/").concat(y || ""),
                                                                href: {
                                                                    pathname: "/[language]/[country]/compare",
                                                                    query: {
                                                                        language: s,
                                                                        country: D,
                                                                        slug: y
                                                                    }
                                                                },
                                                                variant: "secondary",
                                                                icon: "arrowRight",
                                                                labelText: W,
                                                                disabled: !1,
                                                                className: "startNewComparison",
                                                                onClick: function() {
                                                                    return t.onClickAnalytics(C.NN7)
                                                                },
                                                                forceClick: !0
                                                            }), z.length >= 2 && (0, R.jsx)(N.Z, {
                                                                cta: null,
                                                                forwardedAs: G,
                                                                href: {
                                                                    pathname: "/[language]/[country]/comparison/products",
                                                                    query: {
                                                                        language: s,
                                                                        country: D,
                                                                        slug: y,
                                                                        p1: z[0] || null,
                                                                        p2: z[1] || null,
                                                                        p3: z[2] || null
                                                                    }
                                                                },
                                                                variant: "primary",
                                                                icon: "arrowRight",
                                                                labelText: F,
                                                                disabled: !1,
                                                                className: "showFullComparison",
                                                                invertColor: !1,
                                                                onClick: function() {
                                                                    return t.onClickAnalytics(C.KvU)
                                                                },
                                                                forceClick: !0
                                                            })]
                                                        })]
                                                    })
                                                })
                                            })
                                        })
                                    })]
                                })
                            })]
                        })
                    }
                }]), n
            }(d.PureComponent);
            W.displayName = "ProductComparisonTable";
            var G = (0, y.Z)(W),
                q = (0, g.Z)(G, b),
                U = (0, p.connect)((function(e) {
                    return {
                        pageQuery: e.getIn(["global", "globalData", "pageQuery"]),
                        country: e.getIn(["global", "globalData", "country"]),
                        moreInfoLabel: e.getIn(["global", "cmsData", "Global", "moreInfoLabel"]),
                        priceLabel: e.getIn(["global", "cmsData", "Global", "comparisonPriceLabel"]),
                        cmsLabelsGlobal: null === e || void 0 === e ? void 0 : e.getIn(["global", "cmsData", "Global"])
                    }
                }), null)(q)
        }
    }
]);