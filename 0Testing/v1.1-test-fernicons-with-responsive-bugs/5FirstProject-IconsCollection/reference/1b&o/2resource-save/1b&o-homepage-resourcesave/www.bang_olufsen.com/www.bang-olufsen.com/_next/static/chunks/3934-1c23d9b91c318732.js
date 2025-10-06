"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [3934, 5307], {
        63934: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return A
                }
            });
            var r = n(90849),
                a = n(27378),
                o = n(6234),
                i = n(43350),
                c = n(80040),
                l = n(48415),
                s = n(73667),
                u = n(3117),
                d = n(34051),
                p = n(41408),
                f = (0, p.iv)(["&.faqSectionWrapper{.pageTitle{text-align:left;margin-bottom:34px;}.sectionWrapper{padding-bottom:60px;h3{padding-bottom:0;}.m-accordionAnimated__content{@media ", "{max-height:none;}}.m-accordionAnimated__button{box-shadow:none;@media ", "{padding:20px 0;}}}}"], (function(t) {
                    return t.theme.mediaQuery.small
                }), (function(t) {
                    return t.theme.mediaQuery.xSmall
                })),
                m = n(34869),
                h = n(40574),
                v = n(59307),
                y = n(5307),
                g = n(57439),
                x = (0, p.iv)(["&.faqCard{.a-container{padding-top:0;padding-bottom:20px;.m-textAndImage__wrapper{.m-textAndImage__video{@media ", "{min-height:unset;}}.m-textAndImage__image{align-items:start;}.m-textAndImage__columnLeft{@media ", "{padding-bottom:20px;}}.m-textAndImage__copy{padding:0;justify-content:flex-start;.a-anchorButton{margin-top:20px;}}}.a-markdownContent{padding-bottom:20px;}}}"], (function(t) {
                    return t.theme.mediaQuery.small
                }), (function(t) {
                    return t.theme.mediaQuery.xSmall
                })),
                Z = n(24246);

            function j(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, u.Z)(t);
                    if (e) {
                        var a = (0, u.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var b = function(t) {
                (0, l.Z)(n, t);
                var e = j(n);

                function n() {
                    var t;
                    (0, i.Z)(this, n);
                    for (var a = arguments.length, o = new Array(a), c = 0; c < a; c++) o[c] = arguments[c];
                    return t = e.call.apply(e, [this].concat(o)), (0, r.Z)((0, v.Z)(t), "renderFaqCards", (function(e) {
                        var n = e.getIn(["cards", "0"]),
                            r = n && n.get("cardType"),
                            a = n && n.getIn(["item", "0"]);
                        return (0, Z.jsxs)("div", {
                            itemType: "text",
                            className: "faqCard",
                            children: ["text" === r && t.renderTextType(a), ("textAndImageLeft" === r || "textAndImageRight" === r) && t.renderTextImageType(a)]
                        })
                    })), (0, r.Z)((0, v.Z)(t), "renderTextType", (function(e) {
                        var n = t.props,
                            r = n.data,
                            a = n.country,
                            o = r.get("locale");
                        return (0, Z.jsx)("div", {
                            itemProp: "text",
                            children: (0, Z.jsx)(y.default, {
                                locale: o,
                                data: e,
                                country: a
                            })
                        })
                    })), (0, r.Z)((0, v.Z)(t), "renderTextImageType", (function(e) {
                        var n = t.props.data,
                            r = n.get("locale"),
                            a = n.get("country");
                        return (0, Z.jsx)("div", {
                            itemProp: "text",
                            children: (0, Z.jsx)(g.default, {
                                isFaqSection: !0,
                                data: e,
                                variant: "fiftyFifty",
                                locale: r,
                                country: a,
                                withOutBackground: !0
                            })
                        })
                    })), t
                }
                return (0, c.Z)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.data,
                            n = t.className;
                        return (0, Z.jsx)("div", {
                            itemProp: "acceptedAnswer",
                            itemScope: !0,
                            itemType: "http://schema.org/Answer",
                            className: "".concat(n, " faqCard"),
                            children: this.renderFaqCards(e)
                        })
                    }
                }]), n
            }(a.PureComponent);
            b.displayName = "FaqSection";
            var _ = (0, o.Z)(b),
                w = (0, m.Z)(_, x);

            function O(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, u.Z)(t);
                    if (e) {
                        var a = (0, u.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var R = function(t) {
                (0, l.Z)(n, t);
                var e = O(n);

                function n() {
                    return (0, i.Z)(this, n), e.apply(this, arguments)
                }
                return (0, c.Z)(n, [{
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.sections,
                            n = t.pageTitle,
                            r = t.className,
                            a = t.locale,
                            o = t.country,
                            i = t.items,
                            c = t.title,
                            l = e || (0, d.fromJS)([{
                                cards: i
                            }]);
                        return (0, Z.jsxs)("div", {
                            className: "".concat(r, " faqSectionWrapper"),
                            children: [(n || c) && (0, Z.jsx)("h2", {
                                className: "h4 pageTitle",
                                children: n || c
                            }), l && l.map((function(t) {
                                var e = null === t || void 0 === t ? void 0 : t.get("sectionTitle"),
                                    n = null === t || void 0 === t ? void 0 : t.get("cards"),
                                    r = null === n || void 0 === n ? void 0 : n.map((function(t) {
                                        var e = null === t || void 0 === t ? void 0 : t.get("title"),
                                            n = null === t || void 0 === t ? void 0 : t.get("item");
                                        return (0, d.fromJS)({
                                            name: e,
                                            cards: n,
                                            locale: a,
                                            country: o
                                        })
                                    }));
                                return (0, Z.jsxs)("div", {
                                    className: "sectionWrapper",
                                    children: [(null === e || void 0 === e ? void 0 : e.trim()) && (0, Z.jsx)("h3", {
                                        children: e
                                    }), (0, Z.jsx)(h.Z, {
                                        data: r,
                                        allowMultipleOpen: !0,
                                        renderItem: w,
                                        locale: a,
                                        country: o,
                                        isFaqSection: !0
                                    })]
                                }, "faqSection_".concat(e))
                            }))]
                        })
                    }
                }]), n
            }(a.PureComponent);
            R.displayName = "FaqSections";
            var C = (0, o.Z)(R),
                N = (0, m.Z)(C, f),
                S = n(71377);

            function T(t, e) {
                var n = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function P(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var n = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? T(Object(n), !0).forEach((function(e) {
                        (0, r.Z)(t, e, n[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(n)) : T(Object(n)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(n, e))
                    }))
                }
                return t
            }
            var k = function(t) {
                var e = {
                    items: t.data,
                    title: t.title,
                    className: "isIndependentComp col-md-10 col-md-offset-1 col-xs-12",
                    locale: t.locale,
                    country: t.country
                };
                return t.isCategoryPage ? (0, Z.jsx)(S.Z, {
                    children: (0, Z.jsx)(N, P({}, e))
                }) : (0, Z.jsx)(N, P({}, e))
            };
            k.displayName = "QuestionAnswerListing";
            var A = (0, o.Z)(k)
        },
        5307: function(t, e, n) {
            n.r(e), n.d(e, {
                default: function() {
                    return T
                }
            });
            var r = n(43350),
                a = n(80040),
                o = n(59307),
                i = n(48415),
                c = n(73667),
                l = n(3117),
                s = n(90849),
                u = n(27378),
                d = n(90104),
                p = n.n(d),
                f = n(34869),
                m = n(41408),
                h = n(83030),
                v = (0, m.iv)([".a-markdownContent.no-title{p{strong{font-size:", ";}}}&.m-text{p{color:", ";}.m-readMore{color:", ";text-decoration:underline;cursor:pointer;margin-top:20px;}.richTextWrapper{p{margin-bottom:20px;}}}.a-anchorButton{margin-top:20px;}"], (function(t) {
                    return (0, h.hO)(t.theme.fonts.fontSize.body.small.tertiary)
                }), (function(t) {
                    return t.theme.colors.BEO_BLACK
                }), (function(t) {
                    return t.theme.colors.GREY5
                })),
                y = n(71377),
                g = n(8103),
                x = n(21250),
                Z = n(48787),
                j = n(48323),
                b = n(41507),
                _ = n(6234),
                w = n(17726),
                O = n(5047),
                R = n(24246);

            function C(t) {
                var e = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function() {}))), !0
                    } catch (t) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = (0, l.Z)(t);
                    if (e) {
                        var a = (0, l.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return (0, c.Z)(this, n)
                }
            }
            var N = function(t) {
                (0, i.Z)(n, t);
                var e = C(n);

                function n(t) {
                    var a;
                    return (0, r.Z)(this, n), a = e.call(this, t), (0, s.Z)((0, o.Z)(a), "readMoreDescp", (function() {
                        a.setState({
                            showReadMore: !1
                        })
                    })), a.state = {
                        showReadMore: !1
                    }, a
                }
                return (0, a.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var t;
                        (null === (t = this.props.data) || void 0 === t ? void 0 : t.get("alternateDescription")) && this.setState({
                            showReadMore: !0
                        })
                    }
                }, {
                    key: "render",
                    value: function() {
                        var t = this.props,
                            e = t.className,
                            n = t.modifierClasses,
                            r = t.data,
                            a = t.slnId,
                            o = t.locale,
                            i = t.country,
                            c = t.readMoreLabel,
                            l = r && r.get("title"),
                            s = r && r.get("subtitle"),
                            u = r && r.get("callToAction"),
                            d = null === r || void 0 === r ? void 0 : r.get("alternateDescription"),
                            f = u && u.get("linkText"),
                            m = u && u.get("url"),
                            h = u && u.get("ariaLabel"),
                            v = (null === u || void 0 === u ? void 0 : u.get("theme")) || "secondary",
                            _ = null === u || void 0 === u ? void 0 : u.get("buttonColor"),
                            C = m && ((0, j.Sv)(m) ? m : (0, Z.LK)({
                                pathname: m,
                                query: {
                                    language: o,
                                    country: null === i || void 0 === i ? void 0 : i.toLowerCase()
                                }
                            })),
                            N = u && u.get("target") || m && ((0, j.Sv)(m) ? "_blank" : "_self");
                        return (0, R.jsx)("div", {
                            className: "".concat(e, " m-text"),
                            "data-sln-id": a,
                            children: (0, R.jsx)(y.Z, {
                                children: (0, R.jsx)("div", {
                                    className: "row",
                                    children: (0, R.jsxs)("div", {
                                        className: "".concat(n || ""),
                                        children: [!p()(null === l || void 0 === l ? void 0 : l.trim()) && (0, R.jsx)("h2", {
                                            "data-sln-id": "".concat(a, "_title"),
                                            className: "h3",
                                            children: (0, R.jsx)("span", {
                                                children: l
                                            })
                                        }), !p()(null === s || void 0 === s ? void 0 : s.trim()) && (0, R.jsx)("h2", {
                                            "data-sln-id": "".concat(a, "_subtitle"),
                                            className: "h3",
                                            children: (0, R.jsx)("span", {
                                                children: s
                                            })
                                        }), this.state.showReadMore && (0, R.jsxs)(R.Fragment, {
                                            children: [(0, R.jsx)(w.Z, {
                                                data: d,
                                                dataSlnId: "".concat(a, "_text_description"),
                                                className: "alt-desc"
                                            }), (0, R.jsx)(O.Z, {
                                                cta: null,
                                                className: "b1 m-readMore",
                                                onClick: this.readMoreDescp,
                                                noLink: !0,
                                                children: c
                                            })]
                                        }), !this.state.showReadMore && (0, R.jsx)(g.Z, {
                                            data: r,
                                            slnId: a,
                                            locale: o,
                                            country: i
                                        }), u && !this.state.showReadMore && (0, R.jsx)(x.Z, {
                                            cta: u,
                                            href: C,
                                            variant: v,
                                            labelText: f,
                                            target: N,
                                            tertiaryBtnHoverColor: b.Z.BEO_BLACK,
                                            ariaLabel: h,
                                            buttonColor: _
                                        })]
                                    })
                                })
                            })
                        })
                    }
                }]), n
            }(u.PureComponent);
            N.displayName = "Text";
            var S = (0, _.Z)(N),
                T = (0, f.Z)(S, v)
        }
    }
]);