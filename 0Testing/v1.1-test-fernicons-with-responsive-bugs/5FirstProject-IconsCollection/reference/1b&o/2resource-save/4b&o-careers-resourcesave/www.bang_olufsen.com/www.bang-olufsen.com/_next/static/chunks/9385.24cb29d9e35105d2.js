"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [9385], {
        36045: function(t, e, i) {
            i.r(e), i.d(e, {
                default: function() {
                    return y
                }
            });
            var o = i(90849),
                n = i(60042),
                r = i.n(n),
                l = i(41408),
                a = {
                    top: {
                        mobile: {
                            top: "24px",
                            bottom: "96px"
                        },
                        tablet: {
                            top: "32px",
                            bottom: "104px"
                        },
                        desktop: {
                            top: "48px",
                            bottom: "120px"
                        }
                    },
                    middle: {
                        mobile: {
                            top: "60px",
                            bottom: "60px"
                        },
                        tablet: {
                            top: "68px",
                            bottom: "68px"
                        },
                        desktop: {
                            top: "84px",
                            bottom: "84px"
                        }
                    },
                    bottom: {
                        mobile: {
                            top: "96px",
                            bottom: "24px"
                        },
                        tablet: {
                            top: "104px",
                            bottom: "32px"
                        },
                        desktop: {
                            top: "120px",
                            bottom: "48px"
                        }
                    }
                },
                d = (0, l.iv)(["&.textImmersive{background-color:", ";text-align:", ";.content-wrapper{display:flex;flex-direction:column;align-items:", ";max-width:1512px;margin-right:auto;margin-left:auto;padding:", " 36px ", " 36px;@media ", "{padding-top:", ";padding-bottom:", ";}@media ", "{padding:", " 88px ", " 88px;}}.title,.subtitle,.description,.description-p{color:", ";margin-bottom:0;}.title{width:100%;@media ", "{width:66.67%;}@media ", "{width:58.34%;}}.subtitle{width:100%;padding-top:8px;@media ", "{width:83.34%;padding-top:16px;}@media ", "{width:66.67%;}}.description{width:100%;margin-top:8px;@media ", "{width:66.67%;margin-top:16px;}@media ", "{width:50%;}}.cta-wrapper{padding-top:32px;}}"], (function(t) {
                    return t.backgroundColor || t.theme.colors.WHITE
                }), (function(t) {
                    return (null === t || void 0 === t ? void 0 : t.itemHorizontalAlignment) || "center"
                }), (function(t) {
                    var e = t.itemHorizontalAlignment;
                    return "left" === e ? "flex-start" : "right" === e ? "flex-end" : "center"
                }), (function(t) {
                    var e, i;
                    return (null === (e = a[null === t || void 0 === t ? void 0 : t.itemVerticalAlignment]) || void 0 === e || null === (i = e.mobile) || void 0 === i ? void 0 : i.top) || "60px"
                }), (function(t) {
                    var e, i;
                    return (null === (e = a[null === t || void 0 === t ? void 0 : t.itemVerticalAlignment]) || void 0 === e || null === (i = e.mobile) || void 0 === i ? void 0 : i.bottom) || "60px"
                }), (function(t) {
                    return t.theme.mediaQuery.small
                }), (function(t) {
                    var e, i;
                    return (null === (e = a[null === t || void 0 === t ? void 0 : t.itemVerticalAlignment]) || void 0 === e || null === (i = e.tablet) || void 0 === i ? void 0 : i.top) || "68px"
                }), (function(t) {
                    var e, i;
                    return (null === (e = a[null === t || void 0 === t ? void 0 : t.itemVerticalAlignment]) || void 0 === e || null === (i = e.tablet) || void 0 === i ? void 0 : i.bottom) || "68px"
                }), (function(t) {
                    return t.theme.mediaQuery.medium
                }), (function(t) {
                    var e, i;
                    return (null === (e = a[null === t || void 0 === t ? void 0 : t.itemVerticalAlignment]) || void 0 === e || null === (i = e.desktop) || void 0 === i ? void 0 : i.top) || "84px"
                }), (function(t) {
                    var e, i;
                    return (null === (e = a[null === t || void 0 === t ? void 0 : t.itemVerticalAlignment]) || void 0 === e || null === (i = e.desktop) || void 0 === i ? void 0 : i.bottom) || "84px"
                }), (function(t) {
                    return t.textColor || t.theme.colors.BEO_BLACK
                }), (function(t) {
                    return t.theme.mediaQuery.small
                }), (function(t) {
                    return t.theme.mediaQuery.medium
                }), (function(t) {
                    return t.theme.mediaQuery.small
                }), (function(t) {
                    return t.theme.mediaQuery.medium
                }), (function(t) {
                    return t.theme.mediaQuery.small
                }), (function(t) {
                    return t.theme.mediaQuery.medium
                })),
                u = i(6234),
                p = i(34869),
                m = i(21250),
                c = i(48323),
                v = i(48787),
                s = i(21318),
                b = i(50813),
                g = i(17726),
                x = i(24246);

            function f(t, e) {
                var i = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(t);
                    e && (o = o.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), i.push.apply(i, o)
                }
                return i
            }

            function h(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var i = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? f(Object(i), !0).forEach((function(e) {
                        (0, o.Z)(t, e, i[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(i)) : f(Object(i)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(i, e))
                    }))
                }
                return t
            }
            var w = (0, u.Z)((function(t) {
                    var e = t.data,
                        i = t.className,
                        o = t.itemId,
                        n = t.locale,
                        l = t.country,
                        a = t.itemVerticalAlignment,
                        d = t.pageType,
                        u = t.viewportInfo,
                        p = null === e || void 0 === e ? void 0 : e.getIn([0, "title"]),
                        f = null === e || void 0 === e ? void 0 : e.getIn([0, "subtitle"]),
                        w = null === e || void 0 === e ? void 0 : e.getIn([0, "callToAction"]),
                        y = null === w || void 0 === w ? void 0 : w.get("url"),
                        j = y;
                    (0, c.Sv)(y) || (j = (0, v.LK)({
                        pathname: y,
                        query: {
                            language: n,
                            country: null === l || void 0 === l ? void 0 : l.toLowerCase()
                        }
                    }));
                    var O = null === w || void 0 === w ? void 0 : w.get("target"),
                        k = (null === w || void 0 === w ? void 0 : w.get("theme")) || "secondary",
                        C = y ? !(y.length > 1) : null,
                        A = null === w || void 0 === w ? void 0 : w.get("linkText"),
                        I = null === w || void 0 === w ? void 0 : w.get("ariaLabel"),
                        N = null === u || void 0 === u ? void 0 : u.getIn(["isSmallerThan", "small"]),
                        P = null === w || void 0 === w ? void 0 : w.get("buttonColor"),
                        Q = null === e || void 0 === e ? void 0 : e.getIn([0, "descriptionRichText"]),
                        L = {
                            href: j,
                            slnId: "overlayImmersive",
                            wrapperClass: "button-wrapper",
                            target: O,
                            variant: k,
                            forceClick: !0,
                            labelText: A,
                            disabled: C,
                            ariaLabel: I,
                            centered: !0,
                            buttonColor: P
                        },
                        T = r()(i, "textImmersive", "-vertical-align-".concat(a));
                    return (0, x.jsx)("div", {
                        className: T,
                        id: o,
                        children: (0, x.jsxs)("div", {
                            className: "content-wrapper",
                            children: [p && (0, x.jsx)("p", {
                                className: "h5 title",
                                children: p
                            }), f && (0, x.jsx)("p", {
                                className: "".concat(N ? "h3" : "h2", " subtitle"),
                                children: f
                            }), Q && (0, x.jsx)(g.Z, {
                                data: Q,
                                className: "b1 description",
                                paragraphClassName: "b1 description-p"
                            }), w && (0, x.jsx)("div", {
                                className: "cta-wrapper",
                                children: (0, x.jsx)(m.Z, h(h({
                                    cta: w
                                }, L), {}, {
                                    onClick: function() {
                                        return function() {
                                            var t = {
                                                event: b.cHh,
                                                eventCategory: d,
                                                eventAction: b.tnm,
                                                eventLabel: null === A || void 0 === A ? void 0 : A.toLowerCase()
                                            };
                                            (0, s.q8)(t)
                                        }()
                                    }
                                }))
                            })]
                        })
                    })
                })),
                y = (0, p.Z)(w, d)
        }
    }
]);