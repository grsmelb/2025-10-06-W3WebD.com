(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6509], {
        89288: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return E
                }
            });
            var r = n(43350),
                o = n(80040),
                i = n(48415),
                a = n(73667),
                s = n(3117),
                c = n(27378),
                u = n(60042),
                l = n.n(u),
                d = n(73546),
                p = n(48787),
                m = n(34869),
                f = n(41408),
                h = n(83030),
                g = (0, f.iv)(["&.contentNotFound{@media ", "{max-width:unset;padding:0 26px;}@media ", "{padding:0 24px;}@media ", "{padding:0 36px;}.o-error{text-align:center;font-family:", ";color:", ";p{letter-spacing:0.4px;}}.o-imageContainer{position:relative;width:100%;}.o-oh-no{margin-top:10px;}.o-error__status{font-weight:", ";margin-top:40px;color:", ";font-size:", ";@media ", "{margin-top:150px;}}.o-error__description{margin-top:18px;color:", ";font-size:", ";@media ", "{margin-top:10px;}}.return-home{@media ", "{margin-bottom:100px;}}}"], (function(e) {
                    return e.theme.mediaQuery.large
                }), (function(e) {
                    return e.theme.mediaQuery.mediumOnly
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.fonts.primaryFontFamily
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.fonts.fontWeight.medium
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.fontSize.icon.tertiary)
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.fontSize.body.small.primary)
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                v = n(21250),
                y = n(17726),
                w = n(6234),
                x = n(24246);

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
                    var n, r = (0, s.Z)(e);
                    if (t) {
                        var o = (0, s.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, a.Z)(this, n)
                }
            }
            var S = function(e) {
                (0, i.Z)(n, e);
                var t = Z(n);

                function n() {
                    return (0, r.Z)(this, n), t.apply(this, arguments)
                }
                return (0, o.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.errorInfo,
                            n = e.locale,
                            r = e.className,
                            o = e.country,
                            i = l()("container contentNotFound", r),
                            a = t && t.get("title"),
                            s = t && t.get("description"),
                            c = t && t.get("descriptionRichText"),
                            u = t && t.get("subtitle"),
                            d = t && t.get("callToAction"),
                            m = d && d.get("url"),
                            f = (0, p.LK)({
                                pathname: m,
                                query: {
                                    language: n,
                                    country: null === o || void 0 === o ? void 0 : o.toLowerCase()
                                }
                            }),
                            h = d && d.get("title"),
                            g = d && d.get("ariaLabel");
                        return t ? (0, x.jsx)("div", {
                            className: i,
                            children: (0, x.jsx)("div", {
                                className: "o-imageContainer",
                                children: (0, x.jsx)("div", {
                                    className: "o-error",
                                    children: (0, x.jsxs)("div", {
                                        className: "col-xs-12 col-md-offset-3 col-md-6 ",
                                        children: [(0, x.jsx)("p", {
                                            className: "o-error__status",
                                            children: a
                                        }), (0, x.jsx)("h2", {
                                            className: "o-oh-no",
                                            children: u
                                        }), (0, x.jsx)("p", {
                                            className: "o-error__description",
                                            children: s
                                        }), c && (0, x.jsx)(y.Z, {
                                            data: c,
                                            className: "o-error__description"
                                        }), (0, x.jsx)(v.Z, {
                                            cta: d,
                                            variant: "secondary",
                                            className: "return-home",
                                            labelText: h,
                                            href: f,
                                            ariaLabel: g
                                        })]
                                    })
                                })
                            })
                        }) : null
                    }
                }]), n
            }(c.PureComponent);
            S.displayName = "ContentNotAvailable";
            var P = (0, w.Z)(S),
                b = (0, m.Z)(P, g),
                E = (0, d.connect)((function(e) {
                    return {
                        country: e.getIn(["global", "globalData", "country"]),
                        locale: e.getIn(["global", "globalData", "userlanguage"])
                    }
                }), null)(b)
        },
        7174: function(e, t, n) {
            "use strict";
            n.d(t, {
                BA: function() {
                    return m
                },
                Gl: function() {
                    return a
                },
                IO: function() {
                    return v
                },
                IU: function() {
                    return x
                },
                JI: function() {
                    return h
                },
                NM: function() {
                    return g
                },
                Oi: function() {
                    return s
                },
                RT: function() {
                    return u
                },
                Sf: function() {
                    return w
                },
                dK: function() {
                    return f
                },
                eb: function() {
                    return p
                },
                jP: function() {
                    return Z
                },
                ob: function() {
                    return c
                },
                tW: function() {
                    return y
                },
                wZ: function() {
                    return d
                },
                zs: function() {
                    return l
                }
            });
            var r = n(90849);

            function o(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function i(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? o(Object(n), !0).forEach((function(t) {
                        (0, r.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }
            var a = {
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
                c = {
                    className: "-staggerInUp -stagger5",
                    variant: "secondary",
                    forceClick: !0,
                    centered: !0,
                    isButton: !0,
                    invertColor: !0
                },
                u = {
                    className: "-staggerInUp -stagger5",
                    variant: "primary",
                    forceClick: !0
                },
                l = {
                    className: "-staggerInUp -stagger5",
                    variant: "secondary",
                    invertColor: !0,
                    forceClick: !0
                },
                d = i(i({}, l), {}, {
                    className: "".concat(l.className, " secondary-cta")
                }),
                p = {
                    className: "-staggerIn -stagger5",
                    variant: "play",
                    invertColor: !0,
                    noLabel: !0
                },
                m = {
                    className: "o-hero__closeBtn -staggerIn -stagger5",
                    variant: "close",
                    invertColor: !0,
                    noLabel: !0
                },
                f = "herosplit",
                h = "hero16x9",
                g = "herosquare",
                v = "herov4",
                y = "heroscrollbanner",
                w = "herosplitv2",
                x = "productHeader",
                Z = "salesSupportModal"
        },
        14547: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, {
                default: function() {
                    return r.Z
                }
            });
            var r = n(97409)
        },
        30125: function() {
            ! function(e) {
                var t = e ? e.noise = {} : window.noise = {};

                function n(e, t, n) {
                    this.x = e, this.y = t, this.z = n
                }
                n.prototype.dot2 = function(e, t) {
                    return this.x * e + this.y * t
                }, n.prototype.dot3 = function(e, t, n) {
                    return this.x * e + this.y * t + this.z * n
                };
                var r = [new n(1, 1, 0), new n(-1, 1, 0), new n(1, -1, 0), new n(-1, -1, 0), new n(1, 0, 1), new n(-1, 0, 1), new n(1, 0, -1), new n(-1, 0, -1), new n(0, 1, 1), new n(0, -1, 1), new n(0, 1, -1), new n(0, -1, -1)],
                    o = [151, 160, 137, 91, 90, 15, 131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23, 190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33, 88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166, 77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244, 102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196, 135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123, 5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42, 223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9, 129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228, 251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107, 49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254, 138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180],
                    i = new Array(512),
                    a = new Array(512);
                t.seed = function(e) {
                    e > 0 && e < 1 && (e *= 65536), (e = Math.floor(e)) < 256 && (e |= e << 8);
                    for (var t = 0; t < 256; t++) {
                        var n;
                        n = 1 & t ? o[t] ^ 255 & e : o[t] ^ e >> 8 & 255, i[t] = i[t + 256] = n, a[t] = a[t + 256] = r[n % 12]
                    }
                }, t.seed(0);
                var s = .5 * (Math.sqrt(3) - 1),
                    c = (3 - Math.sqrt(3)) / 6,
                    u = 1 / 6;

                function l(e) {
                    return e * e * e * (e * (6 * e - 15) + 10)
                }

                function d(e, t, n) {
                    return (1 - n) * e + n * t
                }
                t.simplex2 = function(e, t) {
                    var n, r, o = (e + t) * s,
                        u = Math.floor(e + o),
                        l = Math.floor(t + o),
                        d = (u + l) * c,
                        p = e - u + d,
                        m = t - l + d;
                    p > m ? (n = 1, r = 0) : (n = 0, r = 1);
                    var f = p - n + c,
                        h = m - r + c,
                        g = p - 1 + 2 * c,
                        v = m - 1 + 2 * c,
                        y = a[(u &= 255) + i[l &= 255]],
                        w = a[u + n + i[l + r]],
                        x = a[u + 1 + i[l + 1]],
                        Z = .5 - p * p - m * m,
                        S = .5 - f * f - h * h,
                        P = .5 - g * g - v * v;
                    return 70 * ((Z < 0 ? 0 : (Z *= Z) * Z * y.dot2(p, m)) + (S < 0 ? 0 : (S *= S) * S * w.dot2(f, h)) + (P < 0 ? 0 : (P *= P) * P * x.dot2(g, v)))
                }, t.simplex3 = function(e, t, n) {
                    var r, o, s, c, l, d, p = .3333333333333333 * (e + t + n),
                        m = Math.floor(e + p),
                        f = Math.floor(t + p),
                        h = Math.floor(n + p),
                        g = (m + f + h) * u,
                        v = e - m + g,
                        y = t - f + g,
                        w = n - h + g;
                    v >= y ? y >= w ? (r = 1, o = 0, s = 0, c = 1, l = 1, d = 0) : v >= w ? (r = 1, o = 0, s = 0, c = 1, l = 0, d = 1) : (r = 0, o = 0, s = 1, c = 1, l = 0, d = 1) : y < w ? (r = 0, o = 0, s = 1, c = 0, l = 1, d = 1) : v < w ? (r = 0, o = 1, s = 0, c = 0, l = 1, d = 1) : (r = 0, o = 1, s = 0, c = 1, l = 1, d = 0);
                    var x = v - r + u,
                        Z = y - o + u,
                        S = w - s + u,
                        P = v - c + 2 * u,
                        b = y - l + 2 * u,
                        E = w - d + 2 * u,
                        R = v - 1 + .5,
                        T = y - 1 + .5,
                        C = w - 1 + .5,
                        k = a[(m &= 255) + i[(f &= 255) + i[h &= 255]]],
                        z = a[m + r + i[f + o + i[h + s]]],
                        I = a[m + c + i[f + l + i[h + d]]],
                        A = a[m + 1 + i[f + 1 + i[h + 1]]],
                        _ = .6 - v * v - y * y - w * w,
                        H = .6 - x * x - Z * Z - S * S,
                        L = .6 - P * P - b * b - E * E,
                        N = .6 - R * R - T * T - C * C;
                    return 32 * ((_ < 0 ? 0 : (_ *= _) * _ * k.dot3(v, y, w)) + (H < 0 ? 0 : (H *= H) * H * z.dot3(x, Z, S)) + (L < 0 ? 0 : (L *= L) * L * I.dot3(P, b, E)) + (N < 0 ? 0 : (N *= N) * N * A.dot3(R, T, C)))
                }, t.perlin2 = function(e, t) {
                    var n = Math.floor(e),
                        r = Math.floor(t);
                    e -= n, t -= r;
                    var o = a[(n &= 255) + i[r &= 255]].dot2(e, t),
                        s = a[n + i[r + 1]].dot2(e, t - 1),
                        c = a[n + 1 + i[r]].dot2(e - 1, t),
                        u = a[n + 1 + i[r + 1]].dot2(e - 1, t - 1),
                        p = l(e);
                    return d(d(o, c, p), d(s, u, p), l(t))
                }, t.perlin3 = function(e, t, n) {
                    var r = Math.floor(e),
                        o = Math.floor(t),
                        s = Math.floor(n);
                    e -= r, t -= o, n -= s;
                    var c = a[(r &= 255) + i[(o &= 255) + i[s &= 255]]].dot3(e, t, n),
                        u = a[r + i[o + i[s + 1]]].dot3(e, t, n - 1),
                        p = a[r + i[o + 1 + i[s]]].dot3(e, t - 1, n),
                        m = a[r + i[o + 1 + i[s + 1]]].dot3(e, t - 1, n - 1),
                        f = a[r + 1 + i[o + i[s]]].dot3(e - 1, t, n),
                        h = a[r + 1 + i[o + i[s + 1]]].dot3(e - 1, t, n - 1),
                        g = a[r + 1 + i[o + 1 + i[s]]].dot3(e - 1, t - 1, n),
                        v = a[r + 1 + i[o + 1 + i[s + 1]]].dot3(e - 1, t - 1, n - 1),
                        y = l(e),
                        w = l(t),
                        x = l(n);
                    return d(d(d(c, f, y), d(u, h, y), x), d(d(p, g, y), d(m, v, y), x), w)
                }
            }(this)
        },
        537: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return z
                }
            });
            var r = n(44285),
                o = n(43350),
                i = n(80040),
                a = n(59307),
                s = n(48415),
                c = n(73667),
                u = n(3117),
                l = n(90849),
                d = n(27378),
                p = n(34051),
                m = n(89754),
                f = n.n(m),
                h = n(89633),
                g = n(69516),
                v = n(55915),
                y = n(4860),
                w = n(14547),
                x = n(6234),
                Z = n(21318),
                S = n(50813),
                P = n(20865),
                b = n(24246);

            function E(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function R(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? E(Object(n), !0).forEach((function(t) {
                        (0, l.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : E(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function T(e) {
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
                    var n, r = (0, u.Z)(e);
                    if (t) {
                        var o = (0, u.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, c.Z)(this, n)
                }
            }
            var C = (0, l.Z)({}, g.iB.ProductListing, {
                    componentName: "ProductListing",
                    customDataProp: "items",
                    customProps: {
                        template: "product",
                        slnId: "atm_ProductListing",
                        centerAligned: !0
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }),
                k = function(e) {
                    (0, s.Z)(n, e);
                    var t = T(n);

                    function n() {
                        var e;
                        (0, o.Z)(this, n);
                        for (var i = arguments.length, s = new Array(i), c = 0; c < i; c++) s[c] = arguments[c];
                        return e = t.call.apply(t, [this].concat(s)), (0, l.Z)((0, a.Z)(e), "pageLoadAnalytics", (function() {
                            var t = e.props,
                                n = t.data,
                                r = t.cartData,
                                o = t.userInfo,
                                i = t.currencyCode,
                                a = n.get("slug"),
                                s = n.getIn(["storyItem", "articleVariants"]),
                                c = e.refineProduct(s),
                                u = null === n || void 0 === n ? void 0 : n.get("pageName"),
                                l = (0, Z.v8)({
                                    userInfo: o,
                                    pageType: S.Amw,
                                    pageName: S.Hao.ARTICLE,
                                    story_title: n.get("slug"),
                                    cartData: r,
                                    currencyCode: i,
                                    impressions: e.createImpressionData(c, a),
                                    commonPageName: u
                                });
                            (0, Z.q8)(l)
                        })), (0, l.Z)((0, a.Z)(e), "getPageTitle", (function() {
                            var t = e.props.data,
                                n = t.get("tags"),
                                r = t.get("storyHeader"),
                                o = null === t || void 0 === t ? void 0 : t.get("colorTheme"),
                                i = r && r.get("colorTheme"),
                                a = r && r.get("backgroundColor"),
                                s = r && r.getIn(["item", "0"]),
                                c = s && s.get("title"),
                                u = s && s.get("subtitle"),
                                l = s && s.get("description"),
                                d = s && s.get("descriptionRichText");
                            return {
                                tags: n,
                                theme: i,
                                backgroundColor: a,
                                title: c,
                                subtitle: u,
                                description: l,
                                backgroundImage: r && r.get("backgroundImage"),
                                textColor: r && r.get("textColor"),
                                descriptionRichText: d,
                                colorTheme: o,
                                pageTitleItem: s
                            }
                        })), (0, l.Z)((0, a.Z)(e), "createImpressionData", (function(e, t) {
                            var n = e.map((function(e) {
                                var n = (0, p.List)();
                                n = n.push((0, p.fromJS)(e));
                                var r = e.position,
                                    o = (0, p.Map)({
                                        variants: n,
                                        position: r
                                    });
                                return o = (0, p.List)(o ? [o] : []), (0, P.jw)(o, "".concat(S.Amw, ": ").concat(t)).toJS()
                            }));
                            return f()(n)
                        })), (0, l.Z)((0, a.Z)(e), "productPosition", 0), (0, l.Z)((0, a.Z)(e), "productCardData", (function(t) {
                            var n = t.productDetail,
                                r = t.variants,
                                o = [];
                            return o.push(R(R(R({}, n), r[0]), {}, {
                                position: e.productPosition
                            })), e.productPosition += 1, o
                        })), (0, l.Z)((0, a.Z)(e), "refineProduct", (function(t) {
                            return t && t.toJS().reduce((function(t, n) {
                                switch (n.cardType) {
                                    case S.JzP:
                                        t.push(R(R({}, n.item[0].productDetails), {}, {
                                            position: e.productPosition
                                        })), e.productPosition += 1;
                                        break;
                                    case S.PKX:
                                        n.item && t.push.apply(t, (0, r.Z)(e.refineProduct((0, p.fromJS)(n.item))));
                                        break;
                                    case S.AAp:
                                        t.push.apply(t, (0, r.Z)(e.productCardData(n.item[0])));
                                        break;
                                    case S.Csk:
                                        t.push(R(R({}, n.item[0].productDetails), {}, {
                                            position: e.productPosition
                                        })), e.productPosition += 1;
                                        break;
                                    default:
                                        return t
                                }
                                return t
                            }), [])
                        })), (0, l.Z)((0, a.Z)(e), "addToCartSuccessAction", (function(t) {
                            var n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : S.Hao.ARTICLE,
                                r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : S.ae5,
                                o = e.props.cartData,
                                i = (0, p.List)();
                            i = i.push(t);
                            var a = (0, p.Map)({
                                    variants: i
                                }),
                                s = a && a.getIn(["variants", "0", "variantKey"]),
                                c = {
                                    productDetails: (0, p.List)(a ? [a] : []),
                                    showCartValue: !0,
                                    cartData: o,
                                    variantId: t.get("variantId"),
                                    noPosition: !0
                                },
                                u = {
                                    eventCategory: S.nOH,
                                    eventLabel: "".concat(S.nOH, "|").concat(s),
                                    eventAction: S.G2X
                                };
                            (0, Z.wL)({
                                cartConfig: c,
                                userAction: r,
                                prodPosition: "".concat(S.Amw, ": ").concat(n),
                                listName: S.nOH,
                                eventAdditionalLabels: u
                            })
                        })), e
                    }
                    return (0, i.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.pageLoadAnalytics()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t, n;
                            (null === (t = e.router) || void 0 === t ? void 0 : t.asPath) !== (null === (n = this.props.router) || void 0 === n ? void 0 : n.asPath) && this.pageLoadAnalytics()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.toggleHeader,
                                r = e.toggleSupportingNav,
                                o = e.locale,
                                i = e.viewportInfo,
                                a = e.getVariantStockAvailability,
                                s = e.availableQuant,
                                c = t.get("storyItem"),
                                u = c && c.get("hero"),
                                l = u && u.get("cardType"),
                                d = c && c.get("articleVariants"),
                                m = this.getPageTitle(),
                                f = "Immersive" === (null === t || void 0 === t ? void 0 : t.getIn(["storyHeader", "size"])) ? v.Z : y.Z;
                            return d ? (0, b.jsxs)("div", {
                                children: [u && (0, b.jsx)(w.default, {
                                    immersiveVariant: l,
                                    hero: u,
                                    offsets: {
                                        yMax: 15,
                                        yMin: 0,
                                        xMax: 0,
                                        xMin: 0
                                    },
                                    viewportInfo: i,
                                    overlapHeader: !0,
                                    withoutSubNav: !0,
                                    isStoryHero: !0
                                }), m && (0, b.jsx)(f, {
                                    data: (0, p.fromJS)(m),
                                    isFullScreen: !0,
                                    minHeightAuto: !0,
                                    overlapHeader: !0,
                                    locale: o,
                                    viewportInfo: i,
                                    pageTitleData: m
                                }), d && (0, b.jsx)(h.Z, {
                                    items: d,
                                    toggleHeader: n,
                                    toggleSupportingNav: r,
                                    addToCartSuccessAction: this.addToCartSuccessAction,
                                    pageType: S.Hao.ARTICLE,
                                    listName: S.nOH,
                                    customSettings: C,
                                    getVariantStockAvailability: a,
                                    availableQuant: s
                                })]
                            }) : null
                        }
                    }]), n
                }(d.PureComponent);
            k.displayName = "ArticlePage", k.defaultProps = {
                toggleHeader: function() {},
                toggleSupportingNav: function() {}
            };
            var z = (0, x.Z)(k)
        },
        61249: function(e, t, n) {
            "use strict";
            n.d(t, {
                Z: function() {
                    return At
                }
            });
            var r = n(43350),
                o = n(80040),
                i = n(59307),
                a = n(48415),
                s = n(73667),
                c = n(3117),
                u = n(90849),
                l = n(27378),
                d = n(34051),
                p = n(19783),
                m = n.n(p),
                f = n(23615),
                h = n.n(f),
                g = n(34869),
                v = n(41408),
                y = (0, v.iv)([""]),
                w = n(48787),
                x = n(39129),
                Z = n(95739),
                S = n(89633),
                P = n(60042),
                b = n.n(P),
                E = n(83030),
                R = (0, v.iv)(["&.m-pageTitle{color:", ";z-index:", ";a{color:", ";text-decoration:none;border-bottom:1px solid ", ";padding-bottom:unset;span{background:none;}}.page-description{p{font-size:", ";color:", ";line-height:1.25;letter-spacing:1px;.a-markdownContent__link{span{color:", ";padding-bottom:3px;background:none;}}}}&.-light{background-color:", ";.a-tag{border:", ";}.page-description{p{color:", ";}}}&.-hasBackground{&.-light{.a-tag{color:", ";border-color:", ";}}&.-dark{.a-tag{color:", ";border-color:", ";}}}.m-pageTitle__wrapper{padding-top:80px;padding-bottom:80px;@media ", "{padding-top:", ";padding-bottom:", ";}&.-hasBackgroundImg{padding:0;}}&.-isFullScreen{height:100%;display:flex;.m-pageTitle__wrapper{min-height:100vh;width:100%;display:flex;flex-direction:column;justify-content:center;align-items:center;&.-minHeightAuto{min-height:auto;}}}.-description-wrapper{margin:0;&::after{content:none;}}.m-tags{& + div.-description-wrapper{margin-top:30px;}}.a-soundCloud{margin-top:40px;@media ", "{margin-top:60px;}}.groupTitles{margin-bottom:0;display:flex;flex-direction:column;.titleSpace{position:absolute;height:1px;width:1px;overflow:hidden;}.pageTitle{padding-bottom:20px;margin-bottom:0;}}}"], (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.zIndex.zDefault
                }), (function(e) {
                    return e.inlineStyle ? e.inlineStyle.color : e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.inlineStyle ? e.inlineStyle.color : e.theme.colors.GREY5
                }), (function(e) {
                    return (0, E.hO)(e.theme.fonts.fontSize.heading.large.h4)
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.borders.quaternary
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.padding.paddingExtraExtraLarge
                }), (function(e) {
                    return e.theme.padding.paddingExtraExtraLarge
                }), (function(e) {
                    return e.theme.mediaQuery.small
                })),
                T = n(71377),
                C = n(48),
                k = n(17726),
                z = n(8103),
                I = n(6234),
                A = n(24246);

            function _(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var H = function(e) {
                (0, a.Z)(n, e);
                var t = _(n);

                function n() {
                    return (0, r.Z)(this, n), t.apply(this, arguments)
                }
                return (0, o.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.data,
                            r = e.isFullScreen,
                            o = e.slnId,
                            i = e.minHeightAuto,
                            a = void 0 !== i && i,
                            s = e.customStyle,
                            c = e.hasBackgroundImg,
                            u = e.inlineStyle,
                            l = e.locale,
                            d = n.get("title"),
                            p = n.get("subtitle"),
                            m = n.get("description"),
                            f = n.get("descriptionRichText"),
                            h = n.get("soundCloudUrl"),
                            g = n.get("hasPlaylist"),
                            v = n.get("colorTheme"),
                            y = "light" === v ? "-light" : "-dark",
                            w = c ? "dark" === v ? "-dark" : "-light" : y,
                            x = n.get("backgroundColor"),
                            S = {
                                backgroundColor: x
                            },
                            P = b()("".concat(t, " m-pageTitle focus-styling"), y, {
                                "-isFullScreen": r,
                                "-hasBackground": x
                            }),
                            E = b()("m-pageTitle__wrapper", {
                                "-minHeightAuto": a,
                                "-hasBackgroundImg": c
                            }),
                            R = (null === u || void 0 === u ? void 0 : u.color) || "";
                        return (0, A.jsx)(Z.Z, {
                            className: P,
                            style: S,
                            children: (0, A.jsx)("div", {
                                className: E,
                                children: (0, A.jsx)(T.Z, {
                                    disablePadding: !0,
                                    className: s,
                                    children: (0, A.jsx)("div", {
                                        className: "row",
                                        "data-sln-id": "".concat(o, "_container"),
                                        children: (0, A.jsxs)("div", {
                                            className: "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3",
                                            children: [(0, A.jsxs)("h1", {
                                                className: "groupTitles",
                                                children: [p && (0, A.jsx)("span", {
                                                    className: "h5 -secondary ".concat(w, " -staggerInUp -stagger1 margin-bottom-10"),
                                                    "data-sln-id": "".concat(o, "_pageSubTitle"),
                                                    style: u,
                                                    children: p
                                                }), (0, A.jsx)("span", {
                                                    className: "titleSpace",
                                                    children: "\xa0\xa0"
                                                }), d && (0, A.jsx)("span", {
                                                    className: "h2 ".concat(w, " -staggerInUp pageTitle -stagger2"),
                                                    "data-sln-id": "".concat(o, "_pageTitle"),
                                                    style: u,
                                                    children: d
                                                })]
                                            }), m && (0, A.jsx)("div", {
                                                className: "h4 ".concat(w, " -staggerInUp -stagger4"),
                                                style: u,
                                                children: (0, A.jsx)(z.Z, {
                                                    className: "page-description",
                                                    data: n,
                                                    inlineStyle: u,
                                                    locale: l
                                                })
                                            }), f && (0, A.jsx)(k.Z, {
                                                data: f,
                                                className: "h4 ".concat(y, " -staggerInUp -stagger4"),
                                                propColor: R
                                            }), h && (0, A.jsx)(C.Z, {
                                                className: "-staggerInUp -stagger4",
                                                url: h,
                                                hasPlaylist: g,
                                                slnId: "".concat(o, "_pageTitle")
                                            })]
                                        })
                                    })
                                })
                            })
                        })
                    }
                }]), n
            }(l.PureComponent);
            H.displayName = "PageTitle";
            var L = (0, I.Z)(H),
                N = (0, g.Z)(L, R),
                M = n(96667),
                j = (0, v.iv)(["&.m-pageTitleBackground{.m-pageTitleBackground__wrapper{&.-position{position:relative;}&.hero__wrapper{position:relative;margin:0 auto;width:100%;min-height:100vh;display:flex;flex-direction:column;justify-content:center;overflow:hidden;.o-hero__bg,.o-hero__bgImg,.o-hero__bgImmersive,.o-hero__bgVideo,.o-hero__fullVideo,.a-responsiveImage{position:absolute;width:100%;height:100%;top:0;left:0;}&.-dark{&::after{", "}}.o-hero__bgImg{.a-responsiveImage{width:100%;height:100%;}.a-parallaxImage{position:absolute;inset:0;.parallax-inner{transform:translate3d(0%,6.6103%,0);position:absolute;inset:0;> div{width:100%;height:100%;}}}img{", ";}}}&.-overlap{margin-top:-60px;}.-info{top:80px;@media ", "{top:120px;}}}}"], (function(e) {
                    return M.Z.imageOverlay([{
                        hex: e.theme.colors.BEO_BLACK,
                        opacity: .5
                    }])
                }), M.Z.objectFit(), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                O = n(20410);

            function B(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var D = function(e) {
                (0, a.Z)(n, e);
                var t = B(n);

                function n() {
                    return (0, r.Z)(this, n), t.apply(this, arguments)
                }
                return (0, o.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.data,
                            r = e.isFullScreen,
                            o = e.slnId,
                            i = e.minHeightAuto,
                            a = void 0 !== i && i,
                            s = e.overlapHeader,
                            c = e.inlineStyle,
                            u = e.wide,
                            l = e.locale,
                            d = e.viewportInfo,
                            p = n.get("backgroundImage"),
                            m = "light" === n.get("theme") ? "-light" : "-dark",
                            f = b()("".concat(t, " m-pageTitleBackground__wrapper"), {
                                "-overlap": s,
                                "-wide": u
                            });
                        return (0, A.jsx)(Z.Z, {
                            className: "".concat(t, " m-pageTitleBackground focus-styling"),
                            children: (0, A.jsxs)("div", {
                                className: "".concat(f, " -position hero__wrapper ").concat(m),
                                children: [p && (0, A.jsx)(O.Z, {
                                    backgroundImage: p,
                                    slnId: o,
                                    viewportInfo: d,
                                    wide: !0,
                                    pictureTag: !0
                                }), n && (0, A.jsx)(N, {
                                    data: n,
                                    inlineStyle: c,
                                    customStyle: "-info",
                                    hasBackgroundImg: !0,
                                    isFullScreen: r,
                                    minHeightAuto: a,
                                    locale: l
                                })]
                            })
                        })
                    }
                }]), n
            }(l.PureComponent);
            D.displayName = "PageTitleBackground";
            var W = (0, I.Z)(D),
                V = (0, g.Z)(W, j),
                F = n(49366),
                U = (0, v.iv)(["&.m-narration{&.-paused{.a-narrationSentence{animation-play-state:paused !important;}}&.-ready{.a-narrationSentence{animation-name:none;}}&.-playing{.a-narrationSentence:first-child{animation-play-state:running;}}.a-container{padding-top:110px;padding-bottom:110px;}.focus-visible:focus{", ";}}"], (0, F.Z)()),
                q = function(e) {
                    var t = "".concat(e, "\n").split("\n"),
                        n = 0,
                        r = [],
                        o = {
                            content: ""
                        };
                    return t.reduce((function(e, t) {
                        var i = t.trim();
                        if (i && !o.id) o.id = i;
                        else if (o.start)
                            if ("" !== i) {
                                var a = "" !== o.content ? " ".concat(i) : i;
                                o.content += a
                            } else r.push(o), o = {
                                content: ""
                            };
                        else {
                            var s = i.split(" --\x3e "),
                                c = {
                                    minutes: s[0].split(":")[1],
                                    seconds: s[0].split(":")[2].split(",")[0],
                                    milliseconds: s[0].split(":")[2].split(",")[1]
                                },
                                u = new Date("2000-01-01T00:".concat(c.minutes, ":").concat(c.seconds, ".").concat(c.milliseconds)),
                                l = parseInt("".concat(c.seconds).concat(c.milliseconds), 10),
                                d = {
                                    minutes: s[1].split(":")[1],
                                    seconds: s[1].split(":")[2].split(",")[0],
                                    milliseconds: s[1].split(":")[2].split(",")[1]
                                },
                                p = new Date("2000-01-01T00:".concat(d.minutes, ":").concat(d.seconds, ".").concat(d.milliseconds)),
                                m = parseInt("".concat(d.seconds).concat(d.milliseconds), 10);
                            o.delay = l - n, n = m, o.start = u.getTime() - new Date("2000-01-01T00:00:00.00").getTime(), o.duration = p - u, o.end = l + o.duration
                        }
                        return r
                    }), 0)
                },
                G = (0, v.iv)(["&.a-chapterTitle{.a-chapterTitle__chapter{display:flex;align-items:center;margin-bottom:", ";}.a-svgIcon{height:30px;width:30px;margin-right:8px;display:", ";@media ", "{display:block;}}.h5{margin:0;padding:0;}}"], (function(e) {
                    return e.chapterTitle && "10px"
                }), (function(e) {
                    return !e.chapterTitle && "none"
                }), (function(e) {
                    return !e.chapterTitle && e.theme.mediaQuery.small
                })),
                Y = n(41605),
                Q = n(10754);

            function X(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var J = function(e) {
                (0, a.Z)(n, e);
                var t = X(n);

                function n() {
                    return (0, r.Z)(this, n), t.apply(this, arguments)
                }
                return (0, o.Z)(n, [{
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.chapterNumber,
                            r = e.chapterTotal,
                            o = e.chapterTitle,
                            i = "light" === e.colorTheme,
                            a = i ? "-light" : "-dark";
                        return (0, A.jsxs)("div", {
                            className: "".concat(t, " a-chapterTitle ").concat(a),
                            children: [(0, A.jsxs)("div", {
                                className: "a-chapterTitle__chapter",
                                children: [(0, A.jsx)(Q.Z, {
                                    icon: "audio",
                                    invertColor: i
                                }), (0, A.jsx)("h3", {
                                    className: "".concat(a, " h5"),
                                    children: void 0 === n ? "".concat(Y.SRs) : "".concat(Y.t6h, " ").concat(n + 1, " ").concat(r ? "/ ".concat(r) : "")
                                })]
                            }), o && (0, A.jsx)("h3", {
                                className: a,
                                children: (0, A.jsx)("span", {
                                    children: o
                                })
                            })]
                        })
                    }
                }]), n
            }(l.PureComponent);
            J.displayName = "ChapterTitle";
            var K = (0, g.Z)(J, G),
                $ = n(70448),
                ee = (0, v.F4)([" ", " "], $.Z.narrationText.highlight),
                te = (0, v.iv)(["&.a-narrationSentence{background:", ";color:", ";background-size:200%;background-position:0 0;display:inline;animation-name:", ";animation-play-state:paused;animation-direction:normal;animation-timing-function:linear;padding:6px 0;white-space:normal;&.-isReset{animation-name:none;}&.-isRead{background:", ";animation-name:none;& + .a-narrationSentence{animation-play-state:running;}}}"], (function(e) {
                    return "linear-gradient(to right, transparent 50%, ".concat("dark" === e.colorTheme ? e.theme.colors.PINK1 : e.theme.colors.TEXT.PINK2, " 50%)")
                }), (function(e) {
                    return "dark" === e.colorTheme ? e.theme.colors.GREY5 : e.theme.colors.WHITE
                }), ee, (function(e) {
                    return "dark" === e.colorTheme ? e.theme.colors.PINK1 : e.theme.colors.TEXT.PINK2
                }));

            function ne(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var re = function(e) {
                (0, a.Z)(n, e);
                var t = ne(n);

                function n(e) {
                    var o;
                    return (0, r.Z)(this, n), o = t.call(this, e), (0, u.Z)((0, i.Z)(o), "onAnimationEnd", (function() {
                        o.setState({
                            isRead: !0
                        })
                    })), (0, u.Z)((0, i.Z)(o), "resetState", (function() {
                        o.setState({
                            isRead: !1,
                            isReset: !0
                        })
                    })), o.state = {
                        isRead: !1,
                        isReset: !1
                    }, o
                }
                return (0, o.Z)(n, [{
                    key: "componentDidUpdate",
                    value: function() {
                        var e = this.state.isRead;
                        this.props.resetState && e && this.resetState()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            n = t.isRead,
                            r = t.isReset,
                            o = this.props,
                            i = o.className,
                            a = o.data.content,
                            s = o.details,
                            c = s.initialDelay,
                            u = s.duration,
                            l = {
                                animationDuration: "".concat(u, "ms"),
                                animationDelay: "".concat(c, "ms")
                            },
                            d = b()(i, "a-narrationSentence", {
                                "-isRead": n,
                                "-isReset": n && r
                            });
                        return (0, A.jsxs)("span", {
                            className: d,
                            style: l,
                            onAnimationEnd: function() {
                                return e.onAnimationEnd()
                            },
                            children: [a, " "]
                        })
                    }
                }]), n
            }(l.PureComponent);
            re.displayName = "NarrationSentence";
            var oe = (0, g.Z)(re, te);

            function ie(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var ae = function(e) {
                (0, a.Z)(n, e);
                var t = ie(n);

                function n(e) {
                    var o;
                    return (0, r.Z)(this, n), o = t.call(this, e), (0, u.Z)((0, i.Z)(o), "convertData", (function() {
                        var e = o.props.data.get("description");
                        o.setState({
                            narrationText: e ? q(e) : []
                        })
                    })), (0, u.Z)((0, i.Z)(o), "startNarration", (function() {
                        o.setState({
                            hasPlayed: !0,
                            resetState: !1
                        })
                    })), (0, u.Z)((0, i.Z)(o), "pauseNarration", (function() {
                        o.setState({
                            isPaused: !0
                        })
                    })), (0, u.Z)((0, i.Z)(o), "resumeNarration", (function() {
                        o.setState({
                            isPaused: !1
                        })
                    })), (0, u.Z)((0, i.Z)(o), "resetNarration", (function(e) {
                        o.setState({
                            isPaused: !1,
                            hasPlayed: !1,
                            resetState: !0
                        }, o.startNarration), e && setTimeout((function() {
                            o.startNarration()
                        }), 1)
                    })), (0, u.Z)((0, i.Z)(o), "renderContent", (function() {
                        var e = o.state.narrationText,
                            t = o.props.colorTheme;
                        return e.map((function(e) {
                            var n = {
                                initialDelay: e.delay,
                                duration: e.duration
                            };
                            return (0, A.jsx)(oe, {
                                data: e,
                                details: n,
                                colorTheme: t,
                                resetState: o.state.resetState
                            }, e.id)
                        }))
                    })), o.timeoutsArray = [], o.state = {
                        narrationText: [],
                        hasPlayed: !1,
                        isPaused: !1,
                        resetState: !1
                    }, o
                }
                return (0, o.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.convertData()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state,
                            t = e.narrationText,
                            n = e.hasPlayed,
                            r = e.isPaused,
                            o = this.props,
                            i = o.className,
                            a = o.data,
                            s = o.chapterNumber,
                            c = o.colorTheme,
                            u = a.get("title"),
                            l = b()(i, "m-narration", {
                                "-ready": !n,
                                "-playing": n,
                                "-paused": r
                            });
                        return (0, A.jsx)("div", {
                            className: l,
                            children: (0, A.jsx)(T.Z, {
                                children: (0, A.jsx)("div", {
                                    className: "row",
                                    children: (0, A.jsxs)("div", {
                                        className: "col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3",
                                        tabIndex: Y.$L2,
                                        children: [(0, A.jsx)(K, {
                                            chapterNumber: s,
                                            chapterTitle: u,
                                            colorTheme: c
                                        }), t.length > 0 && (0, A.jsx)("p", {
                                            className: "m-narration__copy",
                                            children: this.renderContent()
                                        })]
                                    })
                                })
                            })
                        })
                    }
                }]), n
            }(l.PureComponent);
            ae.displayName = "NarrationText";
            var se = (0, I.Z)(ae),
                ce = (0, g.Z)(se, U),
                ue = (0, v.iv)(["&.m-audioPlayer{position:fixed;right:0;bottom:-44px;left:0;z-index:", ";transition:transform ", " ", ";@media ", "{bottom:-64px;}&.-isVisible{padding-top:30px;transform:translateY(-44px);@media ", "{transform:translateY(-64px);}&.-inPartialView{@media ", "{transform:translateY(-2px);transition-delay:2700ms;}}&:hover{transform:translateY(-44px);transition-delay:0s;@media ", "{transform:translateY(-64px);}}}.m-audioPlayer__tracks{height:2px;position:relative;@media ", "{height:4px;}}.m-audioPlayer__trackBuffered,.m-audioPlayer__trackPlayback{height:100%;width:100%;position:absolute;top:0;left:0;transform-origin:left;}.m-audioPlayer__trackBuffered{background-color:", ";transition:transform 1s ease;}@keyframes playback{0%{transform:scaleX(0);}100%{transform:scaleX(1);}}.m-audioPlayer__trackPlayback{background-color:", ";transform:scaleX(0);animation:playback linear;animation-play-state:paused;animation-delay:100ms;}.m-audioPlayer__controls{height:42px;display:flex;align-items:center;background-color:", ";@media ", "{height:60px;}}.m-audioPlayer__playPause{height:100%;width:42px;text-indent:100%;white-space:nowrap;overflow:hidden;position:relative;margin:0;padding:0;background-color:", ";cursor:pointer;transition:background-color ", " ", ";@media ", "{width:60px;}.a-animatedIcon{position:absolute;top:0;left:0;width:100%;height:100%;display:flex;justify-content:center;align-items:center;}&:hover,&:active,&:focus{background-color:", ";.a-animatedIcon{&::before{background-color:", ";}}}}.m-audioPlayer__trackInfo{display:flex;flex:1;align-items:center;padding:0 12px 0 16px;@media ", "{padding:0 22px 0 30px;}}.a-chapterTitle{flex:1 0 auto;}.m-audioPlayer__chapterControls{display:flex;button{background-color:transparent;padding:4px;width:20px;margin:0;height:20px;overflow:hidden;cursor:pointer;box-sizing:content-box;transition:transform ", " ", ";@media ", "{padding:8px;}& + button{margin-left:4px;}&:not(:disabled){&.m-audioPlayer__previousChapter{&:hover,&:active,&:focus{transform:translateY(-5px);}}&.m-audioPlayer__nextChapter{&:hover,&:active,&:focus{transform:translateY(5px);}}}@media ", "{&:not(:disabled){&.m-audioPlayer__previousChapter{&:hover,&:active,&:focus{transform:translateY(0);}&.mobileView_AudioPlayerBtn{transform:translateY(-5px);}}&.m-audioPlayer__nextChapter{&:hover,&:active,&:focus{transform:translateY(0);}&.mobileView_AudioPlayerBtn{transform:translateY(5px);}}}}.a-svgIcon{transition:fill ", " ", ";}&:disabled{cursor:default;.a-svgIcon{fill:", ";}}span{text-indent:100%;display:block;overflow:hidden;}}}.m-audioPlayer__muteControl{position:relative;display:flex;&::before,&::after{content:'';position:absolute;left:0;display:block;width:1px;height:8px;background:", ";opacity:0.8;}&::before{top:0;}&::after{bottom:0;}.m-audioPlayer__mute{position:relative;background-color:transparent;width:20px;height:16px;margin:0;padding:12px 11px 9px;overflow:hidden;cursor:pointer;box-sizing:content-box;transition:transform ", " ", ";@media ", "{padding:20px;}.a-svgIcon{width:16px;height:16px;transition:fill ", " ", ";}&::after{content:'';position:absolute;top:9px;left:21px;display:block;width:2px;height:23px;background:", ";box-shadow:1px 1px 3px rgb(0 0 0 / 100%);opacity:0;transform:scale(0.7) rotate(45deg);transform-origin:50% 50%;transition:all ", " ", ";@media ", "{top:17px;left:30px;}}}}&.-reset{.m-audioPlayer__trackPlayback{transform:scaleX(0);animation:0s ease;}}&.-hasPlayed{.m-audioPlayer__trackPlayback{animation-fill-mode:forwards;}}&.-hasEnded{.m-audioPlayer__trackPlayback{transform:scaleX(1);animation:0s ease;}}&.-isPlaying{@media ", "{transition-delay:2700ms;transform:translateY(-4px);}.m-audioPlayer__trackPlayback{animation-play-state:running;}}&.-isPaused{.m-audioPlayer__trackPlayback{animation-play-state:paused;}}&.-isMuted{.m-audioPlayer__muteControl{.m-audioPlayer__mute{.a-svgIcon{fill:", ";}&::after{opacity:1;background:", ";transform:scale(1) rotate(45deg);}}}}}"], (function(e) {
                    return e.theme.zIndex.zDefault
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return (0, E.DZ)(.7, e.theme.colors.RED)
                }), (function(e) {
                    return e.theme.colors.RED
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.easeOutQuart
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.primary
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.primary
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.colors.GREY5
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.primary
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.primary
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.duration.normal
                }), (function(e) {
                    return e.theme.easing.primary
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.colors.RED
                }), (function(e) {
                    return e.theme.colors.RED
                })),
                le = n(32583),
                de = n(39949);

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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var me = function(e) {
                (0, a.Z)(n, e);
                var t = pe(n);

                function n(e) {
                    var o;
                    return (0, r.Z)(this, n), o = t.call(this, e), (0, u.Z)((0, i.Z)(o), "onLoad", (function() {
                        o.setState({
                            duration: o.audioNode.duration
                        })
                    })), (0, u.Z)((0, i.Z)(o), "onEnded", (function() {
                        o.setState({
                            isPlaying: !1,
                            hasEnded: !0
                        }), o.props.setNarrationState("idle")
                    })), (0, u.Z)((0, i.Z)(o), "onPlaying", (function() {
                        o.setState({
                            resetPlayer: !1
                        }), o.props.setNarrationState("playing")
                    })), (0, u.Z)((0, i.Z)(o), "onClick", (function() {
                        var e = o.state,
                            t = e.isPlaying,
                            n = e.hasPlayed,
                            r = e.hasEnded,
                            i = e.isBackgroundPlaying,
                            a = o.props,
                            s = a.handlePauseClick,
                            c = a.handlePlayClick,
                            u = a.handleResetClick,
                            l = a.hasBegunStory;
                        void 0 !== a.chapterNumber ? (o.setState({
                            hasPlayed: !0,
                            isPlaying: !t,
                            hasEnded: !1
                        }), t && (o.audioNode.pause(), s()), t || !n || r || (o.audioNode.play(), c(!0)), t || n || r || (o.audioNode.play(), c()), r && (o.audioNode.play(), u())) : l && (i ? o.backgroundAudioNode.pause() : o.backgroundAudioNode.play(), o.setState((function(e) {
                            return {
                                isBackgroundPlaying: !e.isBackgroundPlaying
                            }
                        })))
                    })), (0, u.Z)((0, i.Z)(o), "onProgressUpdate", (function() {
                        setTimeout((function() {
                            o.updateDownloadProgress(o.audioNode.buffered)
                        }), 100)
                    })), (0, u.Z)((0, i.Z)(o), "updateDownloadProgress", (function(e) {
                        var t = o.state.duration;
                        if (e.length) {
                            var n = 100 * e.end(0) / t / 100;
                            o.setState({
                                buffered: n
                            })
                        }
                    })), (0, u.Z)((0, i.Z)(o), "resetAudioPlayer", (function() {
                        o.setState({
                            hasPlayed: !1,
                            isPlaying: !1,
                            resetPlayer: !0
                        })
                    })), (0, u.Z)((0, i.Z)(o), "rewindAudio", (function() {
                        o.audioNode.pause(), o.audioNode.currentTime = 0
                    })), (0, u.Z)((0, i.Z)(o), "nextChapter", (function() {
                        var e = o.props,
                            t = e.chapterNumber + 1;
                        (0, e.handleChapterNavigation)(), o.scrollToSectionById(t), o.setState({
                            addNextBtnClass: !0
                        }, (function() {
                            o.timer = setTimeout((function() {
                                o.setState({
                                    addNextBtnClass: !1
                                })
                            }), 100)
                        }))
                    })), (0, u.Z)((0, i.Z)(o), "previousChapter", (function() {
                        var e = o.props,
                            t = e.chapterNumber - 1;
                        (0, e.handleChapterNavigation)(), o.scrollToSectionById(t), o.setState({
                            addPrevBtnClass: !0
                        }, (function() {
                            o.timer = setTimeout((function() {
                                o.setState({
                                    addPrevBtnClass: !1
                                })
                            }), 100)
                        }))
                    })), (0, u.Z)((0, i.Z)(o), "scrollToSectionById", (function(e) {
                        var t = document.querySelector('[data-chapter-id="'.concat(e, '"]'));
                        t && (0, w.NY)(t.offsetTop - le.Mz, 500)
                    })), (0, u.Z)((0, i.Z)(o), "toggleMute", (function() {
                        o.state.isMuted ? (o.audioNode.muted = !1, o.backgroundAudioNode.muted = !1) : (o.audioNode.muted = !0, o.backgroundAudioNode.muted = !0), o.setState((function(e) {
                            return {
                                isMuted: !e.isMuted
                            }
                        }))
                    })), o.state = {
                        hasPlayed: !1,
                        hasEnded: !1,
                        isMuted: !1,
                        isPlaying: !1,
                        isBackgroundPlaying: !1,
                        resetPlayer: !1,
                        buffered: 0,
                        duration: 0,
                        addPrevBtnClass: !1,
                        addNextBtnClass: !1
                    }, o.timer = null, o.backgroundAudioNode = (0, l.createRef)(), o
                }
                return (0, o.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.audioNode.addEventListener("progress", this.onProgressUpdate)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        e.audioFileUrl !== this.props.audioFileUrl && (this.resetAudioPlayer(), this.onProgressUpdate()), this.props.hasBegunStory !== e.hasBegunStory && this.setState({
                            isBackgroundPlaying: !0
                        })
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.audioNode.removeEventListener("progress", this.onProgressUpdate, !1), clearTimeout(this.timer)
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.state,
                            n = t.resetPlayer,
                            r = t.hasPlayed,
                            o = t.hasEnded,
                            i = t.isMuted,
                            a = t.isPlaying,
                            s = t.buffered,
                            c = t.duration,
                            u = t.isBackgroundPlaying,
                            l = t.addNextBtnClass,
                            d = t.addPrevBtnClass,
                            p = this.props,
                            m = p.className,
                            f = p.chapterNumber,
                            h = p.chapterTotal,
                            g = p.audioFileUrl,
                            v = p.backgroundAudioFileUrl,
                            y = p.isVisible,
                            w = p.hasBegunStory,
                            x = p.inPartialView,
                            Z = b()(m, "m-audioPlayer", {
                                "-hasPlayed": r && !o,
                                "-hasEnded": o,
                                "-isPlaying": a || w,
                                "-isMuted": i,
                                "-isVisible": y || w,
                                "-inPartialView": x,
                                "-reset": n,
                                "-isPaused": !a
                            }),
                            S = {
                                transform: "scaleX(".concat(s, ")")
                            },
                            P = {
                                animationDuration: "".concat(c, "s")
                            },
                            E = f === h - 1,
                            R = 0 === f,
                            T = a || void 0 === f && u;
                        return (0, A.jsxs)("div", {
                            className: Z,
                            "data-sln-id": "automation_audioPlayer_container",
                            children: [v && (0, A.jsx)("audio", {
                                src: v,
                                playsInline: !0,
                                id: "background-audio",
                                loop: !0,
                                crossOrigin: "anonymous",
                                ref: function(t) {
                                    e.backgroundAudioNode = t
                                }
                            }), (0, A.jsx)("audio", {
                                src: g || void 0,
                                onPlaying: this.onPlaying,
                                onEnded: this.onEnded,
                                onLoadedData: this.onLoad,
                                playsInline: !0,
                                ref: function(t) {
                                    e.audioNode = t
                                }
                            }), (0, A.jsxs)("div", {
                                className: "m-audioPlayer__container",
                                children: [(0, A.jsxs)("div", {
                                    className: "m-audioPlayer__tracks",
                                    children: [(0, A.jsx)("span", {
                                        className: "m-audioPlayer__trackBuffered",
                                        style: S
                                    }), (0, A.jsx)("span", {
                                        className: "m-audioPlayer__trackPlayback",
                                        style: P
                                    })]
                                }), (0, A.jsxs)("div", {
                                    className: "m-audioPlayer__controls",
                                    children: [(0, A.jsxs)("button", {
                                        type: "button",
                                        className: "m-audioPlayer__playPause",
                                        onClick: this.onClick,
                                        children: [T ? Y.wiW : Y.hl4, (0, A.jsx)(de.Z, {
                                            icon: "playPause",
                                            animate: T
                                        })]
                                    }), (0, A.jsxs)("div", {
                                        className: "m-audioPlayer__trackInfo",
                                        children: [(0, A.jsx)(K, {
                                            chapterNumber: f,
                                            chapterTotal: h,
                                            colorTheme: "light"
                                        }), h > 1 && void 0 !== f && (0, A.jsxs)("div", {
                                            className: "m-audioPlayer__chapterControls",
                                            children: [(0, A.jsxs)("button", {
                                                type: "button",
                                                className: "m-audioPlayer__nextChapter ".concat(l ? "mobileView_AudioPlayerBtn" : ""),
                                                onClick: this.nextChapter,
                                                disabled: E,
                                                children: [(0, A.jsx)(Q.Z, {
                                                    icon: "arrowThinDown",
                                                    invertColor: !0
                                                }), (0, A.jsx)("span", {
                                                    children: Y.uE0
                                                })]
                                            }), (0, A.jsxs)("button", {
                                                type: "button",
                                                className: "m-audioPlayer__previousChapter ".concat(d ? "mobileView_AudioPlayerBtn" : ""),
                                                onClick: this.previousChapter,
                                                disabled: R,
                                                children: [(0, A.jsx)(Q.Z, {
                                                    icon: "arrowThinUp",
                                                    invertColor: !0
                                                }), (0, A.jsx)("span", {
                                                    children: Y.Mol
                                                })]
                                            })]
                                        })]
                                    }), (0, A.jsx)("div", {
                                        className: "m-audioPlayer__muteControl",
                                        children: (0, A.jsxs)("button", {
                                            id: "mute-toggle",
                                            type: "button",
                                            className: "m-audioPlayer__mute",
                                            onClick: this.toggleMute,
                                            children: [(0, A.jsx)(Q.Z, {
                                                icon: "volume",
                                                invertColor: !0
                                            }), (0, A.jsx)("span", {
                                                className: "visually-hidden",
                                                children: i ? Y.bTK : Y.b9l
                                            })]
                                        })
                                    })]
                                })]
                            })]
                        })
                    }
                }]), n
            }(l.PureComponent);
            me.displayName = "AudioPlayer", me.defaultProps = {
                setNarrationState: function() {}
            };
            var fe = (0, I.Z)(me),
                he = (0, g.Z)(fe, ue),
                ge = n(14547),
                ve = n(30125),
                ye = n.n(ve);

            function we() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                this._x = e, this._y = t, this._z = n
            }
            var xe = n(60465),
                Ze = {
                    url: function(e) {
                        return new Promise((function(t, n) {
                            var r = document.createElement("script");
                            r.type = "text/javascript", r.src = e, r.addEventListener("load", (function() {
                                return t(r)
                            }), !1), r.addEventListener("error", (function() {
                                return n(r)
                            }), !1), document.body.appendChild(r)
                        }))
                    },
                    urls: function(e) {
                        return Promise.all(e.map(Ze.url))
                    }
                },
                Se = Ze,
                Pe = function(e) {
                    Se.url(xe.YD).then((function() {
                        e && e()
                    })).catch((function(e) {
                        console.warn("Failed to load THREE.js: ".concat(e))
                    }))
                },
                be = function(e, t) {
                    Se.url(xe.mS).then((function() {
                        Se.urls(t).then((function() {
                            e && e()
                        })).catch((function(e) {
                            console.warn("Failed to load THREE.js libraries: ".concat(e))
                        }))
                    })).catch((function(e) {
                        console.warn("Failed to load THREE.EffectComposer: ".concat(e))
                    }))
                },
                Ee = function() {
                    return window && window.THREE
                },
                Re = function() {
                    return window && window.THREE && window.THREE.CopyShader && window.THREE.EffectComposer && window.THREE.ShaderPass && window.THREE.RenderPass
                },
                Te = function() {
                    return window && window.TweenMax
                },
                Ce = function(e) {
                    Se.url(xe._8).then((function() {
                        e && e()
                    })).catch((function(e) {
                        console.warn("Failed to load TweenMax: ".concat(e))
                    }))
                };

            function ke(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var ze = function(e) {
                (0, a.Z)(n, e);
                var t = ke(n);

                function n(e) {
                    var o;
                    return (0, r.Z)(this, n), o = t.call(this, e), (0, u.Z)((0, i.Z)(o), "onToggleclick", (function() {
                        o.isScrolling = !0, setTimeout((function() {
                            o.isScrolling = !1, o.drawFrame()
                        }), 2e3)
                    })), (0, u.Z)((0, i.Z)(o), "setupAnimation", (function() {
                        o.updateScreenResolutionValues(), o.sceneSetup(), o.cameraSetup(), o.objectSetup(), o.lightSetup(), o.effectSetup(), o.createCanvas(), o.drawFrame(), o.addListeners(), o.isSetup = !0
                    })), (0, u.Z)((0, i.Z)(o), "getAverageFrequency", (function() {
                        return o.analyser.getByteFrequencyData(o.frequencyData), o.frequencyData.reduce((function(e, t) {
                            return e + t
                        }), 0) / o.frequencyData.length
                    })), (0, u.Z)((0, i.Z)(o), "connectAudioAnalyser", (function() {
                        if (window.immersiveAudioAnalyser) o.analyser = window.immersiveAudioAnalyser;
                        else if (o.props.hasBegunStory && !window.webkitAudioContext) {
                            o.audioNode = document.getElementById("background-audio");
                            var e = new window.AudioContext;
                            if (o.audioNode && e) {
                                var t = e.createMediaElementSource(o.audioNode);
                                o.analyser = e.createAnalyser(), t.connect(o.analyser), o.analyser.connect(e.destination), o.analyser.fftSize = 512, window.immersiveAudioAnalyser = o.analyser, o.frequencyData = new Uint8Array(o.analyser.frequencyBinCount)
                            }
                        }
                    })), (0, u.Z)((0, i.Z)(o), "initialise", (function() {
                        Re() ? o.setupAnimation() : Pe((function() {
                            return be(o.setupAnimation, [xe.mU, xe.xy, xe.L, xe.f_])
                        }))
                    })), (0, u.Z)((0, i.Z)(o), "sceneSetup", (function() {
                        o.isPortrait = o.sceneHeight > o.sceneWidth, o.scene = new window.THREE.Scene, o.scene.background = new window.THREE.Color(0), o.renderer = new window.THREE.WebGLRenderer({
                            antialias: !1
                        }), o.renderer.setSize(o.sceneWidth, o.sceneHeight), o.renderer.setPixelRatio(window.devicePixelRatio)
                    })), (0, u.Z)((0, i.Z)(o), "cameraSetup", (function() {
                        o.camera = new window.THREE.PerspectiveCamera(45, o.sceneWidth / o.sceneHeight, .1, 1e3), o.camera.position.x = -20, o.camera.position.y = 30, o.camera.position.z = -50, o.camera.lookAt(new window.THREE.Vector3(0, 0, 0)), o.camera.position.y = 25
                    })), (0, u.Z)((0, i.Z)(o), "objectSetup", (function() {
                        o.sphereGeometry = new window.THREE.BoxGeometry(1, 1, 1, 30, 30, 30), o.sphereGeometry.vertices.forEach((function(e) {
                            e.normalize().multiplyScalar(o.isPortrait ? 6 : 8)
                        })), o.sphereGeometry.vertices.forEach((function(e) {
                            var t = new window.THREE.Vector3(e.x, e.y, e.z);
                            o.sphereVerticesArray.push(t);
                            var n = t.x * t.x + t.y * t.y + t.z * t.z;
                            n = Math.sqrt(n);
                            var r = new window.THREE.Vector3(e.x / n, e.y / n, e.z / n);
                            o.sphereVerticesNormArray.push(r)
                        }));
                        var e = new window.THREE.MeshPhongMaterial({
                            color: 16777215,
                            opacity: 1
                        });
                        o.sphere = new window.THREE.Mesh(o.sphereGeometry, e), o.scene.add(o.sphere)
                    })), (0, u.Z)((0, i.Z)(o), "lightSetup", (function() {
                        o.spotLight = new window.THREE.DirectionalLight(16777215), o.spotLight.position.set(-20, 25, -40), o.spotLight.intensity = 1.8, o.scene.add(o.spotLight)
                    })), (0, u.Z)((0, i.Z)(o), "effectSetup", (function() {
                        o.composer = new window.THREE.EffectComposer(o.renderer), o.renderPass = new window.THREE.RenderPass(o.scene, o.camera), o.composer.addPass(o.renderPass), o.sobelShader = new window.THREE.ShaderPass(window.THREE.SobelOperatorShader), o.sobelShader.renderToScreen = !0, o.sobelShader.uniforms.resolution.value.x = o.sceneWidth, o.sobelShader.uniforms.resolution.value.y = o.sceneHeight, o.composer.addPass(o.sobelShader)
                    })), (0, u.Z)((0, i.Z)(o), "updateScreenResolutionValues", (function() {
                        if (o.sceneContainer.current) {
                            var e = o.sceneContainer.current.getBoundingClientRect();
                            o.sceneWidth = e.width, o.sceneHeight = e.height
                        } else o.sceneWidth = window.innerWidth, o.sceneHeight = window.innerHeight
                    })), (0, u.Z)((0, i.Z)(o), "resize", (function() {
                        o.updateScreenResolutionValues(), o.camera.aspect = o.sceneWidth / o.sceneHeight, o.camera.updateProjectionMatrix(), o.renderer.setSize(o.sceneWidth, o.sceneHeight), o.renderer.setPixelRatio(window.devicePixelRatio), o.sobelShader.uniforms.resolution.value.x = o.sceneWidth, o.sobelShader.uniforms.resolution.value.y = o.sceneHeight
                    })), (0, u.Z)((0, i.Z)(o), "addListeners", (function() {
                        window.addEventListener("mousemove", o.respondToMouse), window.addEventListener("resize", o.throttledOnResize, !1), window.addEventListener("orientationchange", o.throttledOnResize, !1), o.resize()
                    })), (0, u.Z)((0, i.Z)(o), "removeListeners", (function() {
                        window.removeEventListener("mousemove", o.respondToMouse, !1), window.removeEventListener("resize", o.throttledOnResize, !1), window.removeEventListener("orientationchange", o.throttledOnResize, !1)
                    })), (0, u.Z)((0, i.Z)(o), "destroyScene", (function() {
                        o.stopAnimation(), o.removeListeners(), o.scene && o.scene.dispose(), o.analyser = null, window.immersiveAudioAnalyser = null
                    })), (0, u.Z)((0, i.Z)(o), "stopAnimation", (function() {
                        window.cancelAnimationFrame(o.renderLoop), o.sphereGeometry && o.sphereGeometry.dispose(), o.composer && o.composer.dispose && o.composer.dispose(), o.renderer && o.renderer.dispose && o.renderer.dispose()
                    })), (0, u.Z)((0, i.Z)(o), "restartAnimation", (function() {
                        o.drawFrame(), o.removeListeners(), o.addListeners()
                    })), (0, u.Z)((0, i.Z)(o), "createCanvas", (function() {
                        o.sceneContainer && (o.sceneContainer.current.innerHTML = "", o.sceneContainer.current.appendChild(o.renderer.domElement))
                    })), (0, u.Z)((0, i.Z)(o), "fbm", (function(e) {
                        return ye() && ye().noise.simplex3(e._x, e._y, e._z)
                    })), (0, u.Z)((0, i.Z)(o), "addPoint", (function(e) {
                        for (var t = new we(0, 0, 0), n = e.length, r = 0; r < n; r += 1) t._x += e[r]._x, t._y += e[r]._y, t._z += e[r]._z;
                        return t
                    })), (0, u.Z)((0, i.Z)(o), "displace", (function(e) {
                        var t = new we(o.fbm(o.addPoint([e, new we(0, 0, 0)])), o.fbm(o.addPoint([e, new we(0, 1, 0)])), o.fbm(o.addPoint([e, new we(0, 0, 1)])));
                        return o.fbm(o.addPoint([e, new we(o.qMultiplier1 * t._x, o.qMultiplier2 * t._y, o.qMultiplier3 * t._z)]))
                    })), (0, u.Z)((0, i.Z)(o), "respondToMouse", (function(e) {
                        var t = o.sceneWidth / 2,
                            n = o.sceneHeight / 2,
                            r = e.clientX,
                            i = e.clientY,
                            a = 1 - Math.abs(t - r) / t,
                            s = 1 - Math.abs(n - i) / n;
                        o.noiseMultiplier = a / 2 + s / 2
                    })), (0, u.Z)((0, i.Z)(o), "drawFrame", (function() {
                        o.props.isInView && !o.isScrolling && (o.renderLoop = window.requestAnimationFrame(o.drawFrame));
                        var e = o.analyser && o.getAverageFrequency() / 50 || o.minSoundFrequency,
                            t = e / 10 * .2;
                        o.step += .2 + t, o.noiseAmount = o.wideBeam * o.noiseMultiplier * o.beamMultiplier, o.audioEnabled && !o.isMuted || (o.noiseAmount *= 7), o.sphereGeometry.vertices.forEach((function(t, n) {
                            var r = t,
                                i = o.sphereVerticesArray[n],
                                a = o.sphereVerticesNormArray[n],
                                s = o.displace(new we((r.x + o.step) / 100)),
                                c = o.noiseAmount * e;
                            r.x = i.x + .5 * a.x * c, r.y = i.y + a.y * s * c, r.z = i.z + a.z * s * c
                        })), o.sphereGeometry.computeFaceNormals(), o.sphereGeometry.computeVertexNormals(), o.sphereGeometry.verticesNeedUpdate = !0, o.sphereGeometry.normalsNeedUpdate = !0, o.composer && o.composer.render(o.scene, o.camera)
                    })), (0, u.Z)((0, i.Z)(o), "sceneContainer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(o), "throttledOnResize", m()(o.resize, 50)), o.sphereVerticesArray = [], o.sphereVerticesNormArray = [], o.noiseAmount = 1.4, o.disabledNoiseAmount = 3, o.qMultiplier1 = 5, o.qMultiplier2 = 5, o.qMultiplier3 = 0, o.minSoundFrequency = .1, o.noiseMultiplier = .5, o.beamMultiplier = 1.4, o.wideBeam = 3, o.step = 0, o.stepAmount = .2, o.isSetup = !1, o.isScrolling = !1, o.audioNode = null, o.analyzer = null, o
                }
                return (0, o.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.initialise()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props.isInView;
                        t && this.isSetup ? this.restartAnimation() : e.isInView && !t && this.stopAnimation(), this.connectAudioAnalyser()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.destroyScene()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.slnId,
                            n = e.data,
                            r = n && n.get("title") || "A vision of sound";
                        return (0, A.jsx)("figure", {
                            ref: this.sceneContainer,
                            className: "o-hero__bgImmersive -A1 -fadeInSlow",
                            "data-slnm-id": "".concat(t, "_immersiveA1"),
                            children: (0, A.jsx)("figcaption", {
                                className: "o-hero__bgCaption",
                                children: (0, A.jsx)("p", {
                                    className: "-expand -stagger2",
                                    children: r
                                })
                            })
                        })
                    }
                }]), n
            }(l.PureComponent);

            function Ie(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var Ae = function(e) {
                (0, a.Z)(n, e);
                var t = Ie(n);

                function n(e) {
                    var o;
                    return (0, r.Z)(this, n), o = t.call(this, e), (0, u.Z)((0, i.Z)(o), "setupAnimation", (function() {
                        o.updateScreenResolutionValues(), o.sceneSetup(), o.cameraSetup(), o.objectSetup(), o.lightSetup(), o.effectSetup(), o.createCanvas(), o.connectAudioAnalyser(), o.drawFrame(), o.isSetup = !0
                    })), (0, u.Z)((0, i.Z)(o), "initialise", (function() {
                        Re() ? o.setupAnimation() : Pe((function() {
                            return be(o.setupAnimation, [xe.mU, xe.xy, xe.L, xe.f_])
                        }))
                    })), (0, u.Z)((0, i.Z)(o), "sceneSetup", (function() {
                        o.isPortrait = o.sceneHeight > o.sceneWidth, o.scene = new window.THREE.Scene, o.scene.background = new window.THREE.Color(0), o.renderer = new window.THREE.WebGLRenderer({
                            antialias: !1
                        }), o.renderer.setSize(o.sceneWidth, o.sceneHeight), o.renderer.setPixelRatio(window.devicePixelRatio)
                    })), (0, u.Z)((0, i.Z)(o), "cameraSetup", (function() {
                        o.camera = new window.THREE.PerspectiveCamera(45, o.sceneWidth / o.sceneHeight, .1, 1e3), o.camera.position.x = -20, o.camera.position.y = 30, o.camera.position.z = -50, o.camera.lookAt(new window.THREE.Vector3(0, 0, 0))
                    })), (0, u.Z)((0, i.Z)(o), "objectSetup", (function() {
                        o.sphereGeometry = new window.THREE.BoxGeometry(1, 1, 1, 30, 30, 30), o.sphereGeometry.vertices.forEach((function(e) {
                            e.normalize().multiplyScalar(o.isPortrait ? 7 : 10)
                        })), o.sphereGeometry.vertices.forEach((function(e) {
                            var t = new window.THREE.Vector3(e.x, e.y, e.z);
                            o.sphereVerticesArray.push(t);
                            var n = t.x * t.x + t.y * t.y + t.z * t.z;
                            n = Math.sqrt(n);
                            var r = new window.THREE.Vector3(e.x / n, e.y / n, e.z / n);
                            o.sphereVerticesNormArray.push(r)
                        }));
                        var e = new window.THREE.MeshPhongMaterial({
                            color: 16777215,
                            opacity: 1
                        });
                        o.sphere = new window.THREE.Mesh(o.sphereGeometry, e), o.scene.add(o.sphere)
                    })), (0, u.Z)((0, i.Z)(o), "lightSetup", (function() {
                        o.spotLight = new window.THREE.DirectionalLight(16777215), o.spotLight.position.set(-20, 30, -40), o.spotLight.intensity = 1.8, o.scene.add(o.spotLight)
                    })), (0, u.Z)((0, i.Z)(o), "effectSetup", (function() {
                        o.composer = new window.THREE.EffectComposer(o.renderer), o.renderPass = new window.THREE.RenderPass(o.scene, o.camera), o.composer.addPass(o.renderPass), o.sobelShader = new window.THREE.ShaderPass(window.THREE.SobelOperatorShader), o.sobelShader.renderToScreen = !0, o.sobelShader.uniforms.resolution.value.x = o.sceneWidth, o.sobelShader.uniforms.resolution.value.y = o.sceneHeight, o.composer.addPass(o.sobelShader)
                    })), (0, u.Z)((0, i.Z)(o), "updateScreenResolutionValues", (function() {
                        if (o.sceneContainer.current) {
                            var e = o.sceneContainer.current.getBoundingClientRect();
                            o.sceneWidth = e.width, o.sceneHeight = e.height
                        } else o.sceneWidth = window.innerWidth, o.sceneHeight = window.innerHeight
                    })), (0, u.Z)((0, i.Z)(o), "resize", (function() {
                        o.updateScreenResolutionValues(), o.camera.aspect = o.sceneWidth / o.sceneHeight, o.camera.updateProjectionMatrix(), o.renderer.setSize(o.sceneWidth, o.sceneHeight), o.renderer.setPixelRatio(window.devicePixelRatio), o.sobelShader.uniforms.resolution.value.x = o.sceneWidth, o.sobelShader.uniforms.resolution.value.y = o.sceneHeight
                    })), (0, u.Z)((0, i.Z)(o), "addListeners", (function() {
                        window.addEventListener("mousemove", o.respondToMouse), window.addEventListener("resize", o.throttledOnResize, !1), window.addEventListener("orientationchange", o.throttledOnResize, !1), o.resize()
                    })), (0, u.Z)((0, i.Z)(o), "removeListeners", (function() {
                        window.removeEventListener("mousemove", o.respondToMouse, !1), window.removeEventListener("resize", o.throttledOnResize, !1), window.removeEventListener("orientationchange", o.throttledOnResize, !1)
                    })), (0, u.Z)((0, i.Z)(o), "destroyScene", (function() {
                        o.stopAnimation(), o.removeListeners(), o.scene && o.scene.dispose()
                    })), (0, u.Z)((0, i.Z)(o), "stopAnimation", (function() {
                        window.cancelAnimationFrame(o.renderLoop), o.sphereGeometry && o.sphereGeometry.dispose(), o.composer && o.composer.dispose && o.composer.dispose(), o.renderer && o.renderer.dispose && o.renderer.dispose()
                    })), (0, u.Z)((0, i.Z)(o), "restartAnimation", (function() {
                        o.drawFrame(), o.removeListeners(), o.addListeners()
                    })), (0, u.Z)((0, i.Z)(o), "createCanvas", (function() {
                        o.sceneContainer && (o.sceneContainer.current.innerHTML = "", o.sceneContainer.current.appendChild(o.renderer.domElement))
                    })), (0, u.Z)((0, i.Z)(o), "getAverageFrequency", (function() {
                        return o.analyser.getByteFrequencyData(o.frequencyData), o.frequencyData.reduce((function(e, t) {
                            return e + t
                        }), 0) / o.frequencyData.length
                    })), (0, u.Z)((0, i.Z)(o), "connectAudioAnalyser", (function() {
                        o.analyser = window.immersiveAudioAnalyser, o.analyser && (o.frequencyData = new Uint8Array(o.analyser.frequencyBinCount))
                    })), (0, u.Z)((0, i.Z)(o), "fbm", (function(e) {
                        return ye() && ye().noise.simplex3(e._x, e._y, e._z)
                    })), (0, u.Z)((0, i.Z)(o), "addPoint", (function(e) {
                        for (var t = new we(0, 0, 0), n = e.length, r = 0; r < n; r += 1) t._x += e[r]._x, t._y += e[r]._y, t._z += e[r]._z;
                        return t
                    })), (0, u.Z)((0, i.Z)(o), "displace", (function(e) {
                        var t = new we(o.fbm(o.addPoint([e, new we(0, 0, 0)])), o.fbm(o.addPoint([e, new we(0, 1, 0)])), o.fbm(o.addPoint([e, new we(0, 0, 1)])));
                        return o.fbm(o.addPoint([e, new we(o.qMultiplier1 * t._x, o.qMultiplier2 * t._y, o.qMultiplier3 * t._z)]))
                    })), (0, u.Z)((0, i.Z)(o), "respondToMouse", (function(e) {
                        var t = o.sceneWidth / 2,
                            n = o.sceneHeight / 2,
                            r = e.clientX,
                            i = e.clientY,
                            a = (1 - Math.abs(t - r) / t) / 2 + (1 - Math.abs(n - i) / n) / 2;
                        o.noiseMultiplier = a
                    })), (0, u.Z)((0, i.Z)(o), "drawFrame", (function() {
                        if (o.props.isInView) {
                            o.renderLoop = window.requestAnimationFrame(o.drawFrame);
                            var e = o.analyser && o.getAverageFrequency(),
                                t = e && (e[3] + e[6]) / 2,
                                n = t && t / 75 || o.minSoundFrequency,
                                r = n / 10 * .2;
                            o.step += .2 + r, o.noiseAmount = o.wideBeam * o.noiseMultiplier * o.beamMultiplier, o.audioEnabled && !o.isMuted || (o.noiseAmount *= 7), o.sphereGeometry.vertices.forEach((function(e, t) {
                                var r = e,
                                    i = o.sphereVerticesArray[t],
                                    a = o.sphereVerticesNormArray[t],
                                    s = o.displace(new we((r.x + o.step) / 100)),
                                    c = o.noiseAmount * n;
                                r.x = i.x + .5 * a.x * c, r.y = i.y + a.y * s * c, r.z = i.z + a.z * s * c
                            })), o.sphereGeometry.computeFaceNormals(), o.sphereGeometry.computeVertexNormals(), o.sphereGeometry.verticesNeedUpdate = !0, o.sphereGeometry.normalsNeedUpdate = !0, o.composer && o.composer.render(o.scene, o.camera)
                        }
                    })), (0, u.Z)((0, i.Z)(o), "sceneContainer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(o), "throttledOnResize", m()(o.resize, 50)), o.sphereVerticesArray = [], o.sphereVerticesNormArray = [], o.noiseAmount = 1.3, o.qMultiplier1 = 5, o.qMultiplier2 = 5, o.qMultiplier3 = 0, o.audioNode = null, o.analyzer = null, o.minSoundFrequency = .1, o.noiseMultiplier = .5, o.beamMultiplier = 1.4, o.wideBeam = 3, o.step = 0, o.stepAmount = .2, o.isSetup = !1, o
                }
                return (0, o.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        this.initialise()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this.props.isInView;
                        t && this.isSetup ? this.restartAnimation() : e.isInView && !t && (this.stopAnimation(), this.removeListeners())
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.destroyScene()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props.slnId;
                        return (0, A.jsx)("figure", {
                            ref: this.sceneContainer,
                            className: "o-heroImmersive__bg -A2 o-hero__bgImmersive -staggerIn -stagger1",
                            "data-slnm-id": "".concat(e, "_immersiveA2")
                        })
                    }
                }]), n
            }(l.PureComponent);

            function _e(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var He = function(e) {
                    (0, a.Z)(n, e);
                    var t = _e(n);

                    function n(e) {
                        var o;
                        (0, r.Z)(this, n), o = t.call(this, e), (0, u.Z)((0, i.Z)(o), "setupAnimation", (function() {
                            o.updateScreenResolutionValues(), o.sceneSetup(), o.cameraSetup(), o.createCanvas(), o.sceneElements(), o.textureSetup(), o.effectSetup(), o.connectAudioAnalyser(), o.drawFrame(), o.isSetup = !0
                        })), (0, u.Z)((0, i.Z)(o), "getAverageFrequency", (function() {
                            return o.analyser.getByteFrequencyData(o.frequencyData), o.frequencyData.reduce((function(e, t) {
                                return e + t
                            }), 0) / o.frequencyData.length
                        })), (0, u.Z)((0, i.Z)(o), "connectAudioAnalyser", (function() {
                            o.analyser = window.immersiveAudioAnalyser, o.analyser && (o.frequencyData = new Uint8Array(o.analyser.frequencyBinCount))
                        })), (0, u.Z)((0, i.Z)(o), "initialise", (function() {
                            Re() ? o.setupAnimation() : Pe((function() {
                                return be(o.setupAnimation, [xe.mU, xe.xy, xe.L, xe.f_])
                            }))
                        })), (0, u.Z)((0, i.Z)(o), "sceneSetup", (function() {
                            o.scene = new window.THREE.Scene, o.scene.background = 0, o.scene.fog = new window.THREE.Fog(new window.THREE.Color(16777215), 20, 400), o.renderer = new window.THREE.WebGLRenderer({
                                antialias: !1
                            }), o.renderer.setSize(o.sceneWidth, o.sceneHeight)
                        })), (0, u.Z)((0, i.Z)(o), "cameraSetup", (function() {
                            o.camera = new window.THREE.PerspectiveCamera(60, o.sceneWidth / o.sceneHeight, .1, 1e4), o.camera.position.y = 8, o.camera.position.z = 4
                        })), (0, u.Z)((0, i.Z)(o), "effectSetup", (function() {
                            o.composer = new window.THREE.EffectComposer(o.renderer), o.renderPass = new window.THREE.RenderPass(o.scene, o.camera), o.composer.addPass(o.renderPass), o.sobelShader = new window.THREE.ShaderPass(window.THREE.SobelOperatorShader), o.sobelShader.renderToScreen = !0, o.sobelShader.uniforms.resolution.value.x = o.sceneWidth, o.sobelShader.uniforms.resolution.value.y = o.sceneHeight, o.composer.addPass(o.sobelShader)
                        })), (0, u.Z)((0, i.Z)(o), "sceneElements", (function() {
                            var e = new window.THREE.PlaneBufferGeometry(200, 400, 600, 600),
                                t = {
                                    time: {
                                        type: "f",
                                        value: 0
                                    },
                                    distortCenter: {
                                        type: "f",
                                        value: .1
                                    },
                                    roadWidth: {
                                        type: "f",
                                        value: .5
                                    },
                                    pallete: {
                                        type: "t",
                                        value: null
                                    },
                                    speed: {
                                        type: "f",
                                        value: .5
                                    },
                                    maxHeight: {
                                        type: "f",
                                        value: 10
                                    },
                                    color: new window.THREE.Color(1, 0, 0)
                                },
                                n = new window.THREE.ShaderMaterial({
                                    uniforms: window.THREE.UniformsUtils.merge([window.THREE.ShaderLib.basic.uniforms, t]),
                                    vertexShader: '\n//\n// GLSL textureless classic 3D noise "cnoise",\n// with an RSL-style periodic variant "pnoise".\n// Author:  Stefan Gustavson (stefan.gustavson@liu.se)\n// Version: 2011-10-11\n//\n// Many thanks to Ian McEwan of Ashima Arts for the\n// ideas for permutation and gradient selection.\n//\n// Copyright (c) 2011 Stefan Gustavson. All rights reserved.\n// Distributed under the MIT license. See LICENSE file.\n// https://github.com/stegu/webgl-noise\n//\n\nvec3 mod289(vec3 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 mod289(vec4 x)\n{\n  return x - floor(x * (1.0 / 289.0)) * 289.0;\n}\n\nvec4 permute(vec4 x)\n{\n  return mod289(((x*34.0)+1.0)*x);\n}\n\nvec4 taylorInvSqrt(vec4 r)\n{\n  return 1.79284291400159 - 0.85373472095314 * r;\n}\n\nvec3 fade(vec3 t) {\n  return t*t*t*(t*(t*6.0-15.0)+10.0);\n}\n\n// Classic Perlin noise\nfloat cnoise(vec3 P)\n{\n  vec3 Pi0 = floor(P); // Integer part for indexing\n  vec3 Pi1 = Pi0 + vec3(1.0); // Integer part + 1\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n// Classic Perlin noise, periodic variant\nfloat pnoise(vec3 P, vec3 rep)\n{\n  vec3 Pi0 = mod(floor(P), rep); // Integer part, modulo period\n  vec3 Pi1 = mod(Pi0 + vec3(1.0), rep); // Integer part + 1, mod period\n  Pi0 = mod289(Pi0);\n  Pi1 = mod289(Pi1);\n  vec3 Pf0 = fract(P); // Fractional part for interpolation\n  vec3 Pf1 = Pf0 - vec3(1.0); // Fractional part - 1.0\n  vec4 ix = vec4(Pi0.x, Pi1.x, Pi0.x, Pi1.x);\n  vec4 iy = vec4(Pi0.yy, Pi1.yy);\n  vec4 iz0 = Pi0.zzzz;\n  vec4 iz1 = Pi1.zzzz;\n\n  vec4 ixy = permute(permute(ix) + iy);\n  vec4 ixy0 = permute(ixy + iz0);\n  vec4 ixy1 = permute(ixy + iz1);\n\n  vec4 gx0 = ixy0 * (1.0 / 7.0);\n  vec4 gy0 = fract(floor(gx0) * (1.0 / 7.0)) - 0.5;\n  gx0 = fract(gx0);\n  vec4 gz0 = vec4(0.5) - abs(gx0) - abs(gy0);\n  vec4 sz0 = step(gz0, vec4(0.0));\n  gx0 -= sz0 * (step(0.0, gx0) - 0.5);\n  gy0 -= sz0 * (step(0.0, gy0) - 0.5);\n\n  vec4 gx1 = ixy1 * (1.0 / 7.0);\n  vec4 gy1 = fract(floor(gx1) * (1.0 / 7.0)) - 0.5;\n  gx1 = fract(gx1);\n  vec4 gz1 = vec4(0.5) - abs(gx1) - abs(gy1);\n  vec4 sz1 = step(gz1, vec4(0.0));\n  gx1 -= sz1 * (step(0.0, gx1) - 0.5);\n  gy1 -= sz1 * (step(0.0, gy1) - 0.5);\n\n  vec3 g000 = vec3(gx0.x,gy0.x,gz0.x);\n  vec3 g100 = vec3(gx0.y,gy0.y,gz0.y);\n  vec3 g010 = vec3(gx0.z,gy0.z,gz0.z);\n  vec3 g110 = vec3(gx0.w,gy0.w,gz0.w);\n  vec3 g001 = vec3(gx1.x,gy1.x,gz1.x);\n  vec3 g101 = vec3(gx1.y,gy1.y,gz1.y);\n  vec3 g011 = vec3(gx1.z,gy1.z,gz1.z);\n  vec3 g111 = vec3(gx1.w,gy1.w,gz1.w);\n\n  vec4 norm0 = taylorInvSqrt(vec4(dot(g000, g000), dot(g010, g010), dot(g100, g100), dot(g110, g110)));\n  g000 *= norm0.x;\n  g010 *= norm0.y;\n  g100 *= norm0.z;\n  g110 *= norm0.w;\n  vec4 norm1 = taylorInvSqrt(vec4(dot(g001, g001), dot(g011, g011), dot(g101, g101), dot(g111, g111)));\n  g001 *= norm1.x;\n  g011 *= norm1.y;\n  g101 *= norm1.z;\n  g111 *= norm1.w;\n\n  float n000 = dot(g000, Pf0);\n  float n100 = dot(g100, vec3(Pf1.x, Pf0.yz));\n  float n010 = dot(g010, vec3(Pf0.x, Pf1.y, Pf0.z));\n  float n110 = dot(g110, vec3(Pf1.xy, Pf0.z));\n  float n001 = dot(g001, vec3(Pf0.xy, Pf1.z));\n  float n101 = dot(g101, vec3(Pf1.x, Pf0.y, Pf1.z));\n  float n011 = dot(g011, vec3(Pf0.x, Pf1.yz));\n  float n111 = dot(g111, Pf1);\n\n  vec3 fade_xyz = fade(Pf0);\n  vec4 n_z = mix(vec4(n000, n100, n010, n110), vec4(n001, n101, n011, n111), fade_xyz.z);\n  vec2 n_yz = mix(n_z.xy, n_z.zw, fade_xyz.y);\n  float n_xyz = mix(n_yz.x, n_yz.y, fade_xyz.x);\n  return 2.2 * n_xyz;\n}\n\n#define PI 3.1415926535897932384626433832795\n\nuniform float time;\nuniform float maxHeight;\nuniform float speed;\nuniform float distortCenter;\nuniform float roadWidth;\nvarying float vDisplace;\n\nvarying float fogDepth;\n\nvoid main(){\n\n  float t = time * speed;\n  float wRoad = distortCenter;\n  float wRoad2 = wRoad * 0.5;\n\n  float angleCenter = uv.y * PI*4.0;\n  angleCenter += t * 0.9;\n\n  float centerOff = (\n    sin(angleCenter) +\n    sin(angleCenter*0.5)\n  ) * wRoad;\n\n\n  vec3 noiseIn = vec3(uv, 1.0)*10.0;\n  float noise = cnoise(vec3(noiseIn.x, noiseIn.y + t, noiseIn.z));\n  noise += 1.0;\n  float h = noise;\n  float angle = (uv.x - centerOff) * PI;\n  float f = abs(cos(angle));\n  h *= pow(f, 1.5 + roadWidth);\n\n\n  vDisplace = h;\n\n\n  h*=maxHeight;\n\n  vec3 transformed = vec3( position.x, position.y, position.z + h );\n\n\n  vec4 mvPosition = modelViewMatrix * vec4( transformed, 1.0 );\n  gl_Position = projectionMatrix * mvPosition;\n\n  fogDepth = -mvPosition.z;\n\n}',
                                    fragmentShader: "\nuniform float time;\nuniform vec3 color;\nuniform sampler2D pallete;\nvarying float vDisplace;\n\nuniform vec3 fogColor;\nuniform float fogNear;\nuniform float fogFar;\nvarying float fogDepth;\n\nvoid main(){\n\n  vec2 stripPos = vec2( 0.0, vDisplace );\n  vec4 stripColor = texture2D( pallete, stripPos );\n  stripColor *= pow(1.0-vDisplace, 1.0);\n\n  gl_FragColor = stripColor;\n\n  #ifdef USE_FOG\n    float fogFactor = smoothstep( fogNear, fogFar, fogDepth );\n    gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );\n  #endif\n}\n",
                                    wireframe: !1,
                                    fog: !0
                                });
                            o.terrain = new window.THREE.Mesh(e, n), o.terrain.position.z = -180, o.terrain.rotation.x = -Math.PI / 2, o.scene.add(o.terrain)
                        })), (0, u.Z)((0, i.Z)(o), "textureSetup", (function() {
                            var e = o.terrain;
                            (new window.THREE.TextureLoader).load(o.palleteImage, (function(t) {
                                e.material.uniforms.pallete.value = t, e.material.needsUpdate = !0
                            }))
                        })), (0, u.Z)((0, i.Z)(o), "map", (function(e, t, n, r, o) {
                            return r + (e - t) / (n - t) * (o - r)
                        })), (0, u.Z)((0, i.Z)(o), "lerp", (function(e, t, n) {
                            return (1 - n) * e + n * t
                        })), (0, u.Z)((0, i.Z)(o), "updateScreenResolutionValues", (function() {
                            if (o.sceneContainer.current) {
                                var e = o.sceneContainer.current.getBoundingClientRect();
                                o.sceneWidth = e.width, o.sceneHeight = e.height
                            } else o.sceneWidth = window.innerWidth, o.sceneHeight = window.innerHeight;
                            o.centerIndex = o.sceneWidth, o.roadIndex = o.sceneHeight, o.mountainIndex = o.sceneHeight
                        })), (0, u.Z)((0, i.Z)(o), "resize", (function() {
                            o.camera.aspect = o.sceneWidth / o.sceneHeight, o.camera.updateProjectionMatrix(), o.renderer.setSize(o.sceneWidth, o.sceneHeight)
                        })), (0, u.Z)((0, i.Z)(o), "respondToMouse", (function(e) {
                            o.mouse.x = e.clientX, o.mouse.y = e.clientY
                        })), (0, u.Z)((0, i.Z)(o), "addListeners", (function() {
                            window.addEventListener("mousemove", o.respondToMouse, !1), window.addEventListener("resize", o.throttledOnResize, !1), window.addEventListener("orientationchange", o.throttledOnResize, !1), o.resize()
                        })), (0, u.Z)((0, i.Z)(o), "createCanvas", (function() {
                            o.sceneContainer && (o.sceneContainer.current.innerHTML = "", o.sceneContainer.current.appendChild(o.renderer.domElement))
                        })), (0, u.Z)((0, i.Z)(o), "removeListeners", (function() {
                            window.removeEventListener("mousemove", o.respondToMouse, !1), window.removeEventListener("resize", o.throttledOnResize, !1), window.removeEventListener("orientationchange", o.throttledOnResize, !1)
                        })), (0, u.Z)((0, i.Z)(o), "destroyScene", (function() {
                            o.stopAnimation(), o.removeListeners(), o.scene && o.scene.dispose()
                        })), (0, u.Z)((0, i.Z)(o), "stopAnimation", (function() {
                            window.cancelAnimationFrame(o.renderLoop), o.composer && o.composer.dispose && o.composer.dispose(), o.renderer && o.renderer.dispose && o.renderer.dispose()
                        })), (0, u.Z)((0, i.Z)(o), "restartAnimation", (function() {
                            o.drawFrame(), o.removeListeners(), o.addListeners()
                        })), (0, u.Z)((0, i.Z)(o), "drawFrame", (function() {
                            if (o.props.isInView) {
                                o.renderLoop = window.requestAnimationFrame(o.drawFrame);
                                var e = .005 * performance.now();
                                o.soundMultiplier = o.analyser ? o.getAverageFrequency() / 15 : o.soundMultiplier, o.distortMultiplier > o.maxDistort ? o.distortMultiplier -= .01 : o.distortMultiplier < o.minDistort && (o.distortMultiplier += .01), o.mouse.xDamped = o.lerp(o.mouse.xDamped, o.mouse.x, .1), o.mouse.yDamped = o.lerp(o.mouse.yDamped, o.mouse.y, .1), o.terrain.material.uniforms.time.value = e, o.terrain.material.uniforms.distortCenter.value = o.map(Math.min(Math.max(o.mouse.xDamped, .3 * o.centerIndex), o.centerIndex) + o.centerIndex / 2 * o.distortMultiplier, 0, o.centerIndex, -.1, .1), o.terrain.material.uniforms.roadWidth.value = o.map(o.mouse.yDamped, 0, o.roadIndex, -.5, 5.5), o.terrain.material.uniforms.maxHeight.value = o.map(Math.min(Math.max(o.mouse.yDamped, .3 * o.mountainIndex), o.mountainIndex), 0, o.mountainIndex, 20 * (2 * o.soundMultiplier + 1), 5 * o.soundMultiplier), o.composer && o.composer.render(o.scene, o.camera)
                            }
                        })), (0, u.Z)((0, i.Z)(o), "sceneContainer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(o), "throttledOnResize", m()(o.resize, 50));
                        var a = e.data;
                        o.mouse = {
                            x: 0,
                            y: 0,
                            xDamped: 0,
                            yDamped: 0
                        };
                        var s = a && a.get("backgroundImage");
                        return o.palleteImage = s && s.getIn(["media", "defaultAssetUrl"]) || "//images.ctfassets.net/8cd2csgvqd3m/6oWewcy7OMXYElCJoas4FG/96987ebfbce99496836cc08d2278c179/beolab-90-terrain-texture.png", o.audioNode = null, o.analyzer = null, o.soundMultiplier = .1, o.distortMultiplier = 0, o.centerIndex = 0, o.roadIndex = 0, o.mountainIndex = 0, o.minDistort = 0, o.maxDistort = 1, o.isSetup = !1, o
                    }
                    return (0, o.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.initialise()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.isInView;
                            t && this.isSetup ? (this.restartAnimation(), this.connectAudioAnalyser()) : e.isInView && !t && (this.stopAnimation(), this.removeListeners())
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.destroyScene()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.slnId;
                            return (0, A.jsx)("figure", {
                                ref: this.sceneContainer,
                                className: "o-heroImmersive__bg -A3 o-hero__bgImmersive -fadeInSlow",
                                "data-slnm-id": "".concat(e, "_immersiveA3")
                            })
                        }
                    }]), n
                }(l.PureComponent),
                Le = n(73546),
                Ne = "/static-assets/images/hero-immersive/B1/sprite.png",
                Me = "The shape of sound",
                je = n(31357);

            function Oe(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var Be = function(e) {
                    (0, a.Z)(n, e);
                    var t = Oe(n);

                    function n() {
                        var e;
                        (0, r.Z)(this, n);
                        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(a)), (0, u.Z)((0, i.Z)(e), "onToggleclick", (function() {
                            e.isScrolling = !0, setTimeout((function() {
                                e.isScrolling = !1, e.drawFrame()
                            }), 2e3)
                        })), (0, u.Z)((0, i.Z)(e), "setupAnimation", (function() {
                            e.step = 0, e.sceneSetup(), e.panSetup(), e.cameraSetup(), e.objectSetup(), e.createCanvas(), e.drawFrame(), e.addListeners(), e.isSetup = !0
                        })), (0, u.Z)((0, i.Z)(e), "initialise", (function() {
                            Ee() ? e.setupAnimation() : Pe(e.setupAnimation)
                        })), (0, u.Z)((0, i.Z)(e), "sceneSetup", (function() {
                            e.updateScreenResolutionValues(), e.scene = new window.THREE.Scene, e.scene.fog = new window.THREE.FogExp2(0, .00499), e.renderer = new window.THREE.WebGLRenderer, e.renderer.setSize(e.sceneWidth, e.sceneHeight), e.renderer.setPixelRatio(window.devicePixelRatio)
                        })), (0, u.Z)((0, i.Z)(e), "panSetup", (function() {
                            e.maxScrolledAmount = 2 * e.sceneHeight, e.scrolledAmount = window.scrollY || window.pageYOffset, e.pctScrolled = 100 * e.scrolledAmount / e.maxScrolledAmount, e.decimalScrolled = e.pctScrolled / 100
                        })), (0, u.Z)((0, i.Z)(e), "cameraSetup", (function() {
                            e.camera = new window.THREE.PerspectiveCamera(45, e.sceneWidth / e.sceneHeight, .01, 1e4), e.camera.position.set(0, 50, 150), e.camera.lookAt(e.scene.position)
                        })), (0, u.Z)((0, i.Z)(e), "objectSetup", (function() {
                            var t = new window.THREE.PlaneGeometry(500, 500, 200, 200),
                                n = new window.THREE.MeshBasicMaterial({
                                    color: 16777215,
                                    transparent: !0,
                                    opacity: .5
                                }),
                                r = new window.THREE.Mesh(t, n);
                            r.rotation.x = -.5 * Math.PI, r.position.set(0, 0, 0);
                            var o = new window.THREE.Geometry;
                            o.vertices = t.vertices;
                            var i = e.props.data,
                                a = i && i.getIn(["backgroundImage", "media"]),
                                s = a && a.get("defaultAssetUrl") || Ne,
                                c = (new window.THREE.TextureLoader).load(s),
                                u = new window.THREE.PointsMaterial({
                                    sizeAttenuation: !1,
                                    color: 16777215,
                                    size: 2,
                                    map: c,
                                    opacity: .9,
                                    transparent: !0
                                });
                            e.particles = new window.THREE.Points(o, u), e.particles.rotation.x = -.15 * Math.PI, e.particles.rotation.z = -.25 * Math.PI, e.particles.position.set(0, 0, 0), e.scene.add(e.particles)
                        })), (0, u.Z)((0, i.Z)(e), "pan", (function() {
                            e.scrolledAmount = window.scrollY || window.pageYOffset, e.pctScrolled = 100 * e.scrolledAmount / e.maxScrolledAmount, e.decimalScrolled = e.pctScrolled / 100
                        })), (0, u.Z)((0, i.Z)(e), "updateScreenResolutionValues", (function() {
                            if (e.sceneContainer.current) {
                                var t = e.sceneContainer.current.getBoundingClientRect();
                                e.sceneWidth = t.width, e.sceneHeight = t.height
                            } else e.sceneWidth = window.innerWidth, e.sceneHeight = window.innerHeight
                        })), (0, u.Z)((0, i.Z)(e), "resize", (function() {
                            e.updateScreenResolutionValues(), e.camera && (e.camera.aspect = e.sceneWidth / e.sceneHeight, e.camera.updateProjectionMatrix()), e.renderer && (e.renderer.setSize(e.sceneWidth, e.sceneHeight), e.renderer.setPixelRatio(window.devicePixelRatio))
                        })), (0, u.Z)((0, i.Z)(e), "drawFrame", (function() {
                            if (e.props.isInView) {
                                e.renderLoop = window.requestAnimationFrame(e.drawFrame), e.step += .04;
                                var t = new window.THREE.Vector2(0, 0);
                                e.particles.geometry.vertices.forEach((function(n) {
                                    var r = n,
                                        o = new window.THREE.Vector2(r.x, r.y).sub(t);
                                    r.z = 3.5 * Math.sin(o.length() / -5 + e.step)
                                })), e.particles.geometry.verticesNeedUpdate = !0, e.particles.rotation.x = -(.15 + .5 * e.decimalScrolled) * Math.PI, e.camera.position.set(0, 90, 150), e.camera.lookAt(0, 0, 0), e.camera.position.set(0, 90 + 60 * e.decimalScrolled, 150 + 50 * e.decimalScrolled), e.renderer && e.renderer.render(e.scene, e.camera)
                            }
                        })), (0, u.Z)((0, i.Z)(e), "createCanvas", (function() {
                            e.sceneContainer && (e.sceneContainer.current.innerHTML = "", e.sceneContainer.current.appendChild(e.renderer.domElement), e.resize())
                        })), (0, u.Z)((0, i.Z)(e), "addListeners", (function() {
                            window.addEventListener("scroll", e.throttledOnScroll, {
                                capture: !1,
                                passive: !0
                            }), window.addEventListener("resize", e.throttledOnResize, !1), e.resize()
                        })), (0, u.Z)((0, i.Z)(e), "removeListeners", (function() {
                            window.removeEventListener("scroll", e.throttledOnScroll, {
                                capture: !1,
                                passive: !0
                            }), window.removeEventListener("resize", e.throttledOnResize, !1)
                        })), (0, u.Z)((0, i.Z)(e), "destroyScene", (function() {
                            e.stopAnimation(), e.scene && e.scene.dispose(), e.sound && (e.sound.setVolume(0), e.sound.stop())
                        })), (0, u.Z)((0, i.Z)(e), "stopAnimation", (function() {
                            window.cancelAnimationFrame(e.renderLoop), e.renderer && e.renderer.dispose && e.renderer.dispose(), e.removeListeners()
                        })), (0, u.Z)((0, i.Z)(e), "restartAnimation", (function() {
                            e.drawFrame(), e.removeListeners(), e.addListeners()
                        })), (0, u.Z)((0, i.Z)(e), "sceneContainer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(e), "throttledOnScroll", m()(e.pan, 1)), (0, u.Z)((0, i.Z)(e), "throttledOnResize", m()(e.resize, 50)), e
                    }
                    return (0, o.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.initialise()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.isInView;
                            t && this.isSetup ? this.restartAnimation() : e.isInView && !t && this.stopAnimation()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.destroyScene()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.data,
                                n = e.isMaskSupported,
                                r = e.slnId,
                                o = t && t.get("item").get(0),
                                i = o && o.getIn(["backgroundMedia", "media"]),
                                a = i && i.get("defaultAssetUrl") || "/static-assets/video/hero-immersive/B1/sea.mp4",
                                s = i && i.get("posterImageAssetUrl") || "/static-assets/images/hero-immersive/B1/sea.gif";
                            return (0, A.jsx)("figure", {
                                className: "o-hero__bgImmersive -B1 -fadeInSlow",
                                "data-slnm-id": "".concat(r, "_immersiveB1"),
                                children: (0, A.jsx)("div", {
                                    className: "o-hero__videoTextMask",
                                    children: (0, A.jsxs)("div", {
                                        className: "o-hero__maskWrapper",
                                        children: [(0, A.jsx)("div", {
                                            className: "o-hero__scene",
                                            ref: this.sceneContainer
                                        }), (0, A.jsx)("div", {
                                            className: "o-hero__mask",
                                            children: n ? (0, A.jsx)("video", {
                                                className: "o-hero__maskVideo",
                                                title: Me,
                                                autoPlay: !0,
                                                playsInline: !0,
                                                muted: !0,
                                                loop: !0,
                                                poster: s,
                                                children: (0, A.jsx)("source", {
                                                    src: a
                                                })
                                            }) : (0, A.jsx)(je.Z, {
                                                className: "o-hero__maskImage",
                                                src: "/static-assets/images/hero-immersive/B1/video-mask-fallback.gif",
                                                alt: Me,
                                                size: je.Z.SIZES.SMALL,
                                                transparent: !0
                                            })
                                        })]
                                    })
                                })
                            })
                        }
                    }]), n
                }(l.PureComponent),
                De = (0, Le.connect)((function(e) {
                    return {
                        isMaskSupported: e.getIn(["global", "globalData", "deviceInfo", "featureSupport", "cssmask"])
                    }
                }), null)(Be),
                We = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/0.7.3/p5.min.js";

            function Ve(e) {
                var t = e,
                    n = function() {},
                    r = !1,
                    o = window.innerHeight,
                    i = window.innerWidth,
                    a = o > i,
                    s = 4e3,
                    c = 0,
                    u = 0,
                    l = 2e3,
                    d = function() {
                        var e = t.canvas.parentNode.parentNode,
                            n = e.offsetHeight,
                            r = e ? parseInt(e.getBoundingClientRect().top, 10) : 0,
                            i = n + o,
                            s = Math.abs(r - (a ? 2 * o : o));
                        u = (c = 100 * s / i) / 100
                    },
                    p = function() {
                        o = window.innerHeight, i = window.innerWidth, s = (a = o > i) ? 3 * o : 3 * i, t.resizeCanvas(i, o)
                    },
                    m = function(e, n) {
                        var r = 137.5 * e,
                            o = (0 + .0055 * e) * t.sqrt(e),
                            i = o * t.cos(r),
                            a = o * t.sin(r),
                            s = t.sin(l - .4 * e);
                        s = t.map(s, -1, 1, 0, 160), t.stroke(s, 0, 120 - s / 2), t.noFill(), t.ellipse(i, a, n, n)
                    };
                t.setOnReady = function(e) {
                    n = e
                }, t.setVisibility = function(e) {
                    (r = e) ? (t.removeListeners(), t.addListeners()) : t.removeListeners()
                }, t.setup = function() {
                    t.createCanvas(window.innerWidth, window.innerHeight), t.angleMode(t.DEGREES), t.colorMode(t.HSB), n()
                }, t.draw = function() {
                    if (r) {
                        var e = 7,
                            n = 810,
                            o = s * u,
                            i = a ? 85 : 70;
                        t.background(0), t.translate(t.width / 2, t.height / 2), t.rotate(.1 * l), c > i && (n = 810 + 30 * (c - i));
                        for (var d = 0; d < o; d += 1) d > n && d < o && m(d, e += 9e-6 * d);
                        l += 4
                    }
                }, t.addListeners = function() {
                    window.addEventListener("scroll", d, {
                        capture: !1,
                        passive: !0
                    }), window.addEventListener("resize", p), d(), p()
                }, t.removeListeners = function() {
                    window.removeEventListener("scroll", d, {
                        capture: !1,
                        passive: !0
                    }), window.removeEventListener("resize", p)
                }
            }
            var Fe = function() {
                return window && window.p5
            };

            function Ue(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var qe = function(e) {
                    (0, a.Z)(n, e);
                    var t = Ue(n);

                    function n() {
                        var e;
                        (0, r.Z)(this, n);
                        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(a)), (0, u.Z)((0, i.Z)(e), "onReady", (function() {
                            e.addListeners()
                        })), (0, u.Z)((0, i.Z)(e), "setupScene", (function() {
                            e.scene = new window.p5(Ve, "p5-fibonacci"), e.scene.setOnReady(e.onReady)
                        })), (0, u.Z)((0, i.Z)(e), "loadP5", (function() {
                            Se.url(We).then((function() {
                                e.setupScene()
                            })).catch((function(e) {
                                console.warn("Failed to load P5: ".concat(e))
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "destroyScene", (function() {
                            e.scene && (e.removeListeners(), e.scene.remove())
                        })), (0, u.Z)((0, i.Z)(e), "addListeners", (function() {
                            e.scene.addListeners()
                        })), (0, u.Z)((0, i.Z)(e), "removeListeners", (function() {
                            e.scene.removeListeners()
                        })), (0, u.Z)((0, i.Z)(e), "sceneContainer", (0, l.createRef)()), e
                    }
                    return (0, o.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            Fe() ? this.setupScene() : this.loadP5()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            var e = this.props.isInView;
                            this.scene && this.scene.setVisibility(e)
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.destroyScene()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.slnId;
                            return (0, A.jsx)("figure", {
                                ref: this.sceneContainer,
                                className: "o-hero__bgImmersive -B2 -fadeInSlow",
                                "data-slnm-id": "".concat(e, "_immersiveB2"),
                                children: (0, A.jsx)("div", {
                                    id: "p5-fibonacci",
                                    className: "o-hero__fibonacci"
                                })
                            })
                        }
                    }]), n
                }(l.PureComponent),
                Ge = "/static-assets/images/hero-immersive/C1/bg.jpg",
                Ye = "/static-assets/images/hero-immersive/C1/logo.png",
                Qe = "/static-assets/images/hero-immersive/C1/logo-portrait.png";

            function Xe(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var Je = function(e) {
                    (0, a.Z)(n, e);
                    var t = Xe(n);

                    function n() {
                        var e;
                        (0, r.Z)(this, n);
                        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(a)), (0, u.Z)((0, i.Z)(e), "setupAnimation", (function() {
                            e.isSetup = !0, e.sceneSetup(), e.cameraSetup(), e.objectSetup(), e.lightSetup(), e.createCanvas(), e.drawFrame(), e.addListeners()
                        })), (0, u.Z)((0, i.Z)(e), "sceneSetup", (function() {
                            e.updateScreenResolutionValues(), e.isPortrait = e.sceneHeight > e.sceneWidth, e.scene = new window.THREE.Scene, e.clock = new window.THREE.Clock;
                            var t = window.devicePixelRatio;
                            e.pixelRatio = t && t > 1 ? 1.5 : t, e.renderer = new window.THREE.WebGLRenderer, e.renderer.setSize(e.sceneWidth, e.sceneHeight), e.renderer.setPixelRatio(e.pixelRatio)
                        })), (0, u.Z)((0, i.Z)(e), "cameraSetup", (function() {
                            e.camera = new window.THREE.PerspectiveCamera(47, e.sceneWidth / e.sceneHeight, .01, 1e4), e.cameraRotation = 0, e.camera.position.set(0, 0, 0)
                        })), (0, u.Z)((0, i.Z)(e), "objectSetup", (function() {
                            e.backgroundSetup(), e.logoSetup()
                        })), (0, u.Z)((0, i.Z)(e), "backgroundSetup", (function() {
                            var t = new window.THREE.CylinderGeometry(70, 70, 65, 200, 100, !0);
                            e.bgVertices = JSON.parse(JSON.stringify(t.vertices));
                            var n = e.getImgByIndex(1) || Ge,
                                r = (new window.THREE.TextureLoader).load(n);
                            r.wrapS = window.THREE.RepeatWrapping, r.repeat.set(2, 1);
                            var o = new window.THREE.MeshLambertMaterial({
                                transparent: !0,
                                side: window.THREE.BackSide,
                                map: r
                            });
                            e.background = new window.THREE.Mesh(t, o), e.background.position.set(0, 0, 0), e.background.rotation.y = Math.PI / 2, e.scene.add(e.background)
                        })), (0, u.Z)((0, i.Z)(e), "logoSetup", (function() {
                            var t = new window.THREE.CylinderGeometry(10, 10, 8, 200, 100, !0);
                            e.logoVertices = JSON.parse(JSON.stringify(t.vertices));
                            var n = e.isPortrait ? Qe : Ye,
                                r = e.getImgByIndex(e.isPortrait ? 3 : 2) || n,
                                o = (new window.THREE.TextureLoader).load(r);
                            o.wrapS = window.THREE.RepeatWrapping, o.repeat.set(2, 1);
                            var i = new window.THREE.MeshBasicMaterial({
                                transparent: !0,
                                side: window.THREE.BackSide,
                                map: o
                            });
                            e.logo = new window.THREE.Mesh(t, i), e.logo.position.set(0, 0, 0), e.logo.rotation.y = Math.PI / 2, e.scene.add(e.logo)
                        })), (0, u.Z)((0, i.Z)(e), "getImgByIndex", (function(t) {
                            var n = e.props.data.get("item"),
                                r = n && n.toJS(),
                                o = r && r[t],
                                i = o && o.media;
                            return i && i.defaultAssetUrl
                        })), (0, u.Z)((0, i.Z)(e), "lightSetup", (function() {
                            var t = new window.THREE.PointLight(16777215, 11.7, 100, 2);
                            t.position.set(0, 7, 0), e.scene.add(t)
                        })), (0, u.Z)((0, i.Z)(e), "createCanvas", (function() {
                            e.sceneContainer.current && (e.sceneContainer.current.innerHTML = "", e.sceneContainer.current.appendChild(e.renderer.domElement))
                        })), (0, u.Z)((0, i.Z)(e), "addListeners", (function() {
                            window.addEventListener("mousemove", e.throttledOnMousemove, !1), window.addEventListener("resize", e.throttledOnResize, !1), window.addEventListener("orientationchange", e.throttledOnResize, !1), e.resize()
                        })), (0, u.Z)((0, i.Z)(e), "removeListeners", (function() {
                            window.removeEventListener("mousemove", e.throttledOnMousemove, !1), window.removeEventListener("resize", e.throttledOnResize, !1), window.removeEventListener("orientationchange", e.throttledOnResize, !1)
                        })), (0, u.Z)((0, i.Z)(e), "destroyScene", (function() {
                            e.stopAnimation(), e.scene && e.scene.dispose()
                        })), (0, u.Z)((0, i.Z)(e), "stopAnimation", (function() {
                            e.removeListeners(), window.cancelAnimationFrame(e.renderLoop), e.renderer && e.renderer.dispose && e.renderer.dispose()
                        })), (0, u.Z)((0, i.Z)(e), "restartAnimation", (function() {
                            e.drawFrame(), e.removeListeners(), e.addListeners()
                        })), (0, u.Z)((0, i.Z)(e), "move", (function(t) {
                            var n = e.sceneWidth / 2,
                                r = e.sceneHeight / 2,
                                o = (n - t.clientX) / n,
                                i = (r - t.clientY) / r,
                                a = Math.PI * (.03 * o),
                                s = .5 * -i;
                            Te() && e.camera && (window.TweenMax.to(e.camera.rotation, 5, {
                                ease: window.Sine.easeOut,
                                y: e.cameraRotation - a
                            }), window.TweenMax.to(e.camera.position, 5, {
                                ease: window.Sine.easeOut,
                                y: s
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "updateScreenResolutionValues", (function() {
                            if (e.sceneContainer.current) {
                                var t = e.sceneContainer.current.getBoundingClientRect();
                                e.sceneWidth = t.width, e.sceneHeight = t.height
                            } else e.sceneWidth = window.innerWidth, e.sceneHeight = window.innerHeight
                        })), (0, u.Z)((0, i.Z)(e), "resize", (function() {
                            if (e.updateScreenResolutionValues(), e.camera && (e.camera.aspect = e.sceneWidth / e.sceneHeight, e.camera.updateProjectionMatrix()), e.renderer) {
                                var t = window.devicePixelRatio;
                                e.pixelRatio = t && t > 1 ? 1.5 : t, e.renderer.setSize(e.sceneWidth, e.sceneHeight), e.renderer.setPixelRatio(e.pixelRatio)
                            }
                        })), (0, u.Z)((0, i.Z)(e), "getWave", (function(e, t) {
                            return Math.sin(e / 15 + (t + e) / 17)
                        })), (0, u.Z)((0, i.Z)(e), "initialise", (function() {
                            Ee() && Te() ? e.setupAnimation() : Pe((function() {
                                return Ce(e.setupAnimation)
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "drawFrame", (function() {
                            e.props.isInView && (e.renderLoop = window.requestAnimationFrame(e.drawFrame));
                            var t, n, r, o = 7 * e.clock.getElapsedTime();
                            e.background.geometry.vertices.forEach((function(i, a) {
                                t = e.getWave(a, o), n = e.bgVertices[a], (r = i).x = n.x + t, r.y = n.y + t, r.z = n.z + t
                            })), e.background.geometry.verticesNeedUpdate = !0, e.renderer.render(e.scene, e.camera)
                        })), (0, u.Z)((0, i.Z)(e), "sceneContainer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(e), "throttledOnMousemove", m()(e.move, 200)), (0, u.Z)((0, i.Z)(e), "throttledOnResize", m()(e.resize, 50)), e
                    }
                    return (0, o.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.isInView && this.initialise()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.isInView;
                            t && !this.isSetup ? this.initialise() : t && this.isSetup ? this.restartAnimation() : e.isInView && !t && this.stopAnimation()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.destroyScene()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.slnId;
                            return (0, A.jsx)("figure", {
                                ref: this.sceneContainer,
                                className: "o-hero__bgImmersive -C1 -fadeInSlow",
                                "data-slnm-id": "".concat(e, "_immersiveC1")
                            })
                        }
                    }]), n
                }(l.PureComponent),
                Ke = "/static-assets/images/hero-immersive",
                $e = "c2-products",
                et = "c2-backgrounds",
                tt = "c2-texts",
                nt = ["".concat(Ke, "/C2/products/product-01.png"), "".concat(Ke, "/C2/products/product-02.png"), "".concat(Ke, "/C2/products/product-03.png"), "".concat(Ke, "/C2/products/product-04.png")],
                rt = ["".concat(Ke, "/C2/products/portrait/product-01.png"), "".concat(Ke, "/C2/products/portrait/product-02.png"), "".concat(Ke, "/C2/products/portrait/product-03.png"), "".concat(Ke, "/C2/products/portrait/product-04.png")],
                ot = ["".concat(Ke, "/C2/background/bg-01.jpg"), "".concat(Ke, "/C2/background/bg-02.jpg"), "".concat(Ke, "/C2/background/bg-03.jpg"), "".concat(Ke, "/C2/background/bg-04.jpg")],
                it = ["".concat(Ke, "/C2/background/portrait/bg-01.jpg"), "".concat(Ke, "/C2/background/portrait/bg-02.jpg"), "".concat(Ke, "/C2/background/portrait/bg-03.jpg"), "".concat(Ke, "/C2/background/portrait/bg-04.jpg")],
                at = ["".concat(Ke, "/C2/text/text-01.svg"), "".concat(Ke, "/C2/text/text-02.svg"), "".concat(Ke, "/C2/text/text-03.svg"), "".concat(Ke, "/C2/text/text-04.svg")],
                st = ["".concat(Ke, "/C2/text/portrait/text-01.svg"), "".concat(Ke, "/C2/text/portrait/text-02.svg"), "".concat(Ke, "/C2/text/portrait/text-03.svg"), "".concat(Ke, "/C2/text/portrait/text-04.svg")],
                ct = "-active",
                ut = 1.25,
                lt = "up",
                dt = "down",
                pt = "top",
                mt = "bottom",
                ft = 1200;

            function ht(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function gt(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? ht(Object(n), !0).forEach((function(t) {
                        (0, u.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : ht(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function vt(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var yt = function(e) {
                    (0, a.Z)(n, e);
                    var t = vt(n);

                    function n() {
                        var e;
                        (0, r.Z)(this, n);
                        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(a)), (0, u.Z)((0, i.Z)(e), "setupAnimation", (function() {
                            e.sceneSetup(), e.cameraSetup(), e.textureSetup(), e.imageSetup(), e.lightSetup(), e.createCanvas(), e.drawFrame(), e.addListeners(), e.isSetup = !0
                        })), (0, u.Z)((0, i.Z)(e), "sceneSetup", (function() {
                            e.prevSlide = 0, e.currentSlide = 0, e.isAnimating = !1, e.scene = new window.THREE.Scene, e.clock = new window.THREE.Clock, e.renderer = new window.THREE.WebGLRenderer;
                            var t = window.devicePixelRatio;
                            e.pixelRatio = t && t > 1 ? 1.5 : t, e.renderer.setSize(e.sceneWidth, e.sceneHeight), e.renderer.setPixelRatio(e.pixelRatio)
                        })), (0, u.Z)((0, i.Z)(e), "cameraSetup", (function() {
                            e.camera = new window.THREE.PerspectiveCamera(47, e.sceneWidth / e.sceneHeight, .01, 1e4), e.cameraRotation = 0, e.camera.position.set(0, 0, 0)
                        })), (0, u.Z)((0, i.Z)(e), "imageSetup", (function() {
                            e.updateScreenResolutionValues(), e.isPortrait = e.sceneHeight > e.sceneWidth, e.productSetup(), e.backgroundSetup(), e.textSetup()
                        })), (0, u.Z)((0, i.Z)(e), "productSetup", (function() {
                            var t = e.isPortrait ? rt : nt,
                                n = e.getImagesByGalleryId(e.isPortrait ? "c2-products-portrait" : $e) || t,
                                r = e.productContainer.current;
                            n.forEach((function(e, t) {
                                var n = document.createElement("div");
                                r.appendChild(n), n && (n.classList.add("o-hero__product"), n.style.backgroundImage = "url(".concat(e, ")"), 0 === t && n.classList.add("-active"))
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "textureSetup", (function() {
                            var t = e.isPortrait ? it : ot,
                                n = e.getImagesByGalleryId(e.isPortrait ? "c2-backgrounds-portrait" : et) || t;
                            e.bgTextures = n.map((function(e) {
                                return (new window.THREE.TextureLoader).load(e)
                            }));
                            var r = e.isPortrait ? st : at,
                                o = e.getImagesByGalleryId(e.isPortrait ? "c2-texts-portrait" : tt) || r;
                            e.textTextures = o.map((function(e) {
                                return (new window.THREE.TextureLoader).load(e)
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "backgroundSetup", (function() {
                            var t = new window.THREE.CylinderGeometry(70, 70, 65, 200, 100, !0);
                            e.bgVertices = JSON.parse(JSON.stringify(t.vertices));
                            var n = e.bgTextures.map((function(e) {
                                    var t = e;
                                    return t.wrapS = window.THREE.RepeatWrapping, t.repeat.set(2, 1), t
                                })),
                                r = {
                                    transparent: !0,
                                    side: window.THREE.BackSide
                                },
                                o = n.map((function(e, t) {
                                    return new window.THREE.MeshLambertMaterial(gt(gt({}, r), {}, {
                                        map: e,
                                        opacity: 0 === t ? 1 : 0
                                    }))
                                })).map((function(e) {
                                    return new window.THREE.Mesh(t, e)
                                }));
                            e.backgrounds = o.map((function(e) {
                                var t = e;
                                return t.position.set(0, 0, 0), t.rotation.y = Math.PI / 2, t
                            })), e.totalSlides = e.backgrounds.length, e.backgrounds.forEach((function(t) {
                                e.scene.add(t)
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "textSetup", (function() {
                            var t = new window.THREE.CylinderGeometry(55, 55, 55, 200, 100, !0);
                            e.textVertices = JSON.parse(JSON.stringify(t.vertices));
                            var n = e.textTextures.map((function(e) {
                                    var t = e;
                                    return t.wrapS = window.THREE.RepeatWrapping, t.repeat.set(2, 1), t
                                })),
                                r = {
                                    transparent: !0,
                                    side: window.THREE.BackSide
                                },
                                o = n.map((function(e, t) {
                                    return new window.THREE.MeshLambertMaterial(gt(gt({}, r), {}, {
                                        map: e,
                                        opacity: 0 === t ? 1 : 0
                                    }))
                                })).map((function(e) {
                                    return new window.THREE.Mesh(t, e)
                                }));
                            e.texts = o.map((function(e) {
                                var t = e;
                                return t.position.set(0, 0, 0), t.rotation.y = Math.PI / 2, t
                            })), e.texts.forEach((function(t) {
                                e.scene.add(t)
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "lightSetup", (function() {
                            var t = new window.THREE.PointLight(16777215, 5, 100, 2),
                                n = new window.THREE.PointLight(16777215, 6, 100, 2);
                            t.position.set(5, 5, 5), n.position.set(-5, 5, -5), e.scene.add(t), e.scene.add(n)
                        })), (0, u.Z)((0, i.Z)(e), "createCanvas", (function() {
                            e.sceneContainer && (e.sceneContainer.current.innerHTML = "", e.sceneContainer.current.appendChild(e.renderer.domElement))
                        })), (0, u.Z)((0, i.Z)(e), "addListeners", (function() {
                            e.sceneContainer.current.addEventListener("click", e.spin, !1), window.addEventListener("mousemove", e.throttledOnMousemove, !1), window.addEventListener("resize", e.throttledOnResize, !1), window.addEventListener("orientationchange", e.throttledOnResize, !1), e.scrollListenerTimeout = setTimeout(e.addScrollListener, 1500), e.resize()
                        })), (0, u.Z)((0, i.Z)(e), "addScrollListener", (function() {
                            window.addEventListener("scroll", e.throttledOnScroll, {
                                capture: !1,
                                passive: !0
                            })
                        })), (0, u.Z)((0, i.Z)(e), "removeListeners", (function() {
                            e.sceneContainer.current.removeEventListener("click", e.spin, !1), window.removeEventListener("mousemove", e.throttledOnMousemove, !1), window.removeEventListener("resize", e.throttledOnResize, !1), window.removeEventListener("orientationchange", e.throttledOnResize, !1), e.removeScrollListener(), clearTimeout(e.scrollListenerTimeout)
                        })), (0, u.Z)((0, i.Z)(e), "removeScrollListener", (function() {
                            window.removeEventListener("scroll", e.throttledOnScroll, {
                                capture: !1,
                                passive: !0
                            })
                        })), (0, u.Z)((0, i.Z)(e), "destroyScene", (function() {
                            e.stopAnimation(), e.scene && e.scene.dispose()
                        })), (0, u.Z)((0, i.Z)(e), "stopAnimation", (function() {
                            e.removeListeners(), e.renderer && e.renderer.dispose && e.renderer.dispose(), window.cancelAnimationFrame(e.renderLoop)
                        })), (0, u.Z)((0, i.Z)(e), "restartAnimation", (function() {
                            e.drawFrame(), e.removeListeners(), e.addListeners()
                        })), (0, u.Z)((0, i.Z)(e), "spin", (function(t) {
                            if (e.isAnimating) return !1;
                            var n = (0, i.Z)(e),
                                r = e.productContainer.current.getElementsByTagName("div");
                            e.isAnimating = !0;
                            var o = t === lt ? e.camera.rotation.y + Math.PI : e.camera.rotation.y - Math.PI;
                            return e.cameraRotation = o, r.length && (r[e.prevSlide].classList.remove(ct), r[e.currentSlide].classList.add(ct)), e.scene.remove(e.backgrounds), e.scene.remove(e.texts), e.scene.add(e.backgrounds[e.currentSlide]), e.scene.add(e.texts[e.currentSlide]), window.TweenMax.to(e.camera.rotation, ut, {
                                ease: window.Sine.easeInOut,
                                y: o,
                                onComplete: function() {
                                    n.isAnimating = !1
                                }
                            }), window.TweenMax.to(e.backgrounds[e.prevSlide].material, ut, {
                                ease: window.Sine.easeInOut,
                                opacity: 0,
                                onComplete: function() {
                                    n.scene.remove(n.backgrounds[this.prevSlide]), n.scene.remove(n.texts[this.prevSlide])
                                }
                            }), window.TweenMax.to(e.backgrounds[e.currentSlide].material, ut, {
                                ease: window.Sine.easeInOut,
                                opacity: 1
                            }), window.TweenMax.to(e.texts[e.prevSlide].material, ut, {
                                ease: window.Sine.easeInOut,
                                opacity: 0
                            }), window.TweenMax.to(e.texts[e.currentSlide].material, ut, {
                                ease: window.Sine.easeInOut,
                                opacity: 1
                            }), !0
                        })), (0, u.Z)((0, i.Z)(e), "move", (function(t) {
                            var n = e.sceneWidth / 2,
                                r = e.sceneHeight / 2,
                                o = (n - t.clientX) / n,
                                i = (r - t.clientY) / r,
                                a = Math.PI * (.03 * o),
                                s = 1.5 * -i;
                            Te() && !e.isAnimating && (window.TweenMax.to(e.camera.rotation, 5, {
                                ease: window.Sine.easeOut,
                                y: e.cameraRotation - a
                            }), window.TweenMax.to(e.camera.position, 5, {
                                ease: window.Sine.easeOut,
                                y: s
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "updateScreenResolutionValues", (function() {
                            if (e.sceneContainer.current) {
                                var t = e.sceneContainer.current.getBoundingClientRect();
                                e.sceneWidth = t.width, e.sceneHeight = t.height
                            } else e.sceneWidth = window.innerWidth, e.sceneHeight = window.innerHeight
                        })), (0, u.Z)((0, i.Z)(e), "resize", (function() {
                            e.updateScreenResolutionValues(), e.wrapperHeight = e.scrollWrapper.current.offsetHeight, e.camera && (e.camera.aspect = e.sceneWidth / e.sceneHeight, e.camera.updateProjectionMatrix()), e.renderer && (e.renderer.setSize(e.sceneWidth, e.sceneHeight), e.renderer.setPixelRatio(e.pixelRatio))
                        })), (0, u.Z)((0, i.Z)(e), "onScroll", (function() {
                            var t = window.scrollY || window.pageYOffset,
                                n = t > e.scrollPos ? dt : lt;
                            e.scrollPos = t, e.wrapperOffset = e.getWrapperOffset(), e.moveOnScroll(n)
                        })), (0, u.Z)((0, i.Z)(e), "moveOnScroll", (function(t) {
                            if (!e.isStuck() || e.isAnimating) return !1;
                            var n = t === lt && e.currentSlide > 0,
                                r = t === dt && e.currentSlide < e.totalSlides - 1;
                            return (n || r) && (e.updateSlide(t), 0 === e.currentSlide ? setTimeout((function() {
                                return e.scrollTo(pt)
                            }), ft) : e.currentSlide === e.totalSlides - 1 ? setTimeout((function() {
                                return e.scrollTo(mt)
                            }), ft) : e.resetScrollPosition()), !0
                        })), (0, u.Z)((0, i.Z)(e), "updateSlide", (function(t) {
                            e.prevSlide = parseInt(e.currentSlide, 10), e.currentSlide = t === lt ? e.currentSlide - 1 : e.currentSlide + 1, e.spin(t)
                        })), (0, u.Z)((0, i.Z)(e), "scrollTo", (function(t) {
                            if (!e.isStuck()) return !1;
                            var n = e.scrollPos + e.wrapperOffset,
                                r = n + e.wrapperHeight - e.sceneHeight,
                                o = t === pt ? n : r;
                            return e.scrollToPos(o), !0
                        })), (0, u.Z)((0, i.Z)(e), "resetScrollPosition", (function() {
                            var t = e.scrollPos + e.wrapperOffset + e.wrapperHeight;
                            e.removeScrollListener(), e.scrollToPos(t), e.addScrollListener()
                        })), (0, u.Z)((0, i.Z)(e), "scrollToPos", (function(e) {
                            return window.scrollTo(0, e)
                        })), (0, u.Z)((0, i.Z)(e), "isStuck", (function() {
                            return e.wrapperOffset = e.getWrapperOffset(), e.wrapperOffset < -e.sceneHeight / 10 && e.wrapperOffset > -(e.wrapperHeight - e.sceneHeight)
                        })), (0, u.Z)((0, i.Z)(e), "getWrapperOffset", (function() {
                            return e.scrollWrapper.current ? e.scrollWrapper.current.getBoundingClientRect().top : 0
                        })), (0, u.Z)((0, i.Z)(e), "getWave", (function(e, t) {
                            return Math.sin(e / 15 + (t + e) / 17)
                        })), (0, u.Z)((0, i.Z)(e), "initialise", (function() {
                            Ee() && Te() ? e.setupAnimation() : Pe((function() {
                                return Ce(e.setupAnimation)
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "drawFrame", (function() {
                            e.props.isInView && (e.renderLoop = window.requestAnimationFrame(e.drawFrame));
                            var t, n, r, o, i, a, s = 7 * e.clock.getElapsedTime(),
                                c = e.backgrounds[e.currentSlide],
                                u = e.texts[e.currentSlide];
                            c.geometry.vertices.forEach((function(o, i) {
                                return t = e.getWave(i, s), n = e.bgVertices[i], (r = o).x = n.x + t, r.y = n.y + t, r.z = n.z + t, r
                            })), c.geometry.verticesNeedUpdate = !0, u.geometry.vertices.forEach((function(t, n) {
                                return o = e.getWave(n, s), i = e.textVertices[n], (a = t).x = i.x + 5 * o, a.z = i.z - o, a
                            })), u.geometry.verticesNeedUpdate = !0, e.renderer && e.renderer.render(e.scene, e.camera)
                        })), (0, u.Z)((0, i.Z)(e), "getImagesByGalleryId", (function(t) {
                            var n = e.props.data.get("item"),
                                r = n && n.toJS(),
                                o = r && r.filter((function(e) {
                                    return e.entryName === t
                                }))[0];
                            return o && o.images.map((function(e) {
                                return e.defaultAssetUrl
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "scrollWrapper", (0, l.createRef)()), (0, u.Z)((0, i.Z)(e), "productContainer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(e), "sceneContainer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(e), "throttledOnMousemove", m()(e.move, 200)), (0, u.Z)((0, i.Z)(e), "throttledOnResize", m()(e.resize, 50)), (0, u.Z)((0, i.Z)(e), "throttledOnScroll", m()(e.onScroll, 5)), e
                    }
                    return (0, o.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.props.isInView && this.initialise()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.isInView;
                            t && !this.isSetup ? this.initialise() : t && this.isSetup ? this.restartAnimation() : e.isInView && !t && this.stopAnimation()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.destroyScene()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props.slnId;
                            return (0, A.jsx)("figure", {
                                ref: this.scrollWrapper,
                                className: "o-hero__bgImmersive -C2 -fadeInSlow",
                                "data-slnm-id": "".concat(e, "_immersiveC2"),
                                children: (0, A.jsxs)("div", {
                                    className: "o-hero__scene",
                                    children: [(0, A.jsx)("div", {
                                        ref: this.sceneContainer,
                                        className: "o-hero__backgrounds -staggerIn -stagger0"
                                    }), (0, A.jsx)("div", {
                                        ref: this.productContainer,
                                        className: "o-hero__products -staggerIn -stagger2"
                                    })]
                                })
                            })
                        }
                    }]), n
                }(l.PureComponent),
                wt = n(63594),
                xt = n.n(wt),
                Zt = "-fadeInSlow",
                St = "-stroked",
                Pt = 2e3,
                bt = 1e3;

            function Et(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var Rt = function(e) {
                    (0, a.Z)(n, e);
                    var t = Et(n);

                    function n() {
                        var e;
                        (0, r.Z)(this, n);
                        for (var o = arguments.length, a = new Array(o), s = 0; s < o; s++) a[s] = arguments[s];
                        return e = t.call.apply(t, [this].concat(a)), (0, u.Z)((0, i.Z)(e), "onToggleClick", (function() {
                            e.isScrolling = !0, setTimeout((function() {
                                e.isScrolling = !1, e.drawFrame()
                            }), 2e3)
                        })), (0, u.Z)((0, i.Z)(e), "getImagesByGalleryId", (function(t) {
                            var n = e.props.data.get("item"),
                                r = n && n.toJS(),
                                o = r && r.filter((function(e) {
                                    return e.entryName === t
                                }))[0];
                            return o && o.images && o.images.map((function(e) {
                                return e.defaultAssetUrl
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "getSnowflakePosition", (function() {
                            return Math.random() * Pt - bt
                        })), (0, u.Z)((0, i.Z)(e), "getRandomRange", (function(e, t) {
                            return Math.random() * (t - e) + e
                        })), (0, u.Z)((0, i.Z)(e), "setupAnimation", (function() {
                            e.sceneSetup(), e.cameraSetup(), e.objectSetup(), e.createCanvas(), e.drawFrame(), e.animateLogo(), e.addListeners(), e.isSetup = !0
                        })), (0, u.Z)((0, i.Z)(e), "initialise", (function() {
                            Ee() ? e.setupAnimation() : Pe(e.setupAnimation)
                        })), (0, u.Z)((0, i.Z)(e), "rotateX", (function(e, t) {
                            var n = e,
                                r = Math.cos(t * (Math.PI / 180)),
                                o = Math.sin(t * (Math.PI / 180)),
                                i = e.z,
                                a = e.y;
                            n.y = a * r + i * o, n.z = a * -o + i * r
                        })), (0, u.Z)((0, i.Z)(e), "rotateY", (function(e, t) {
                            var n = e,
                                r = Math.cos(t * (Math.PI / 180)),
                                o = Math.sin(t * (Math.PI / 180)),
                                i = e.z,
                                a = e.x;
                            n.x = a * r + i * o, n.z = a * -o + i * r
                        })), (0, u.Z)((0, i.Z)(e), "sceneSetup", (function() {
                            e.scene = new window.THREE.Scene, e.renderer = new window.THREE.WebGLRenderer({
                                alpha: !0
                            }), e.renderer.setSize(e.sceneWidth, e.sceneHeight), e.renderer.setClearColor(0, 0)
                        })), (0, u.Z)((0, i.Z)(e), "cameraSetup", (function() {
                            e.camera = new window.THREE.PerspectiveCamera(75, e.sceneWidth / e.sceneHeight, 1, 1e4), e.camera.position.z = 500
                        })), (0, u.Z)((0, i.Z)(e), "objectSetup", (function() {
                            for (var t, n, r = e.snowflakeImages.map((function(e) {
                                    return new window.THREE.SpriteMaterial({
                                        map: (new window.THREE.TextureLoader).load(e)
                                    })
                                })), o = 0; o < 1150; o += 1) t = r[Math.floor(Math.random() * r.length)], (n = new window.THREE.Sprite(t)).velocity = new window.THREE.Vector3(0, -4, 0), e.rotateX(n.velocity, e.getRandomRange(-45, 45)), e.rotateY(n.velocity, e.getRandomRange(0, 360)), n.gravity = new window.THREE.Vector3(0, 0, 0), n.drag = 1, n.position.x = e.getSnowflakePosition(), n.position.y = e.getSnowflakePosition(), n.position.z = e.getSnowflakePosition(), n.scale.x = 18, n.scale.y = 18, e.scene.add(n), e.particles.push(n)
                        })), (0, u.Z)((0, i.Z)(e), "createCanvas", (function() {
                            e.sceneContainer.current && (e.sceneContainer.current.innerHTML = "", e.sceneContainer.current.appendChild(e.renderer.domElement))
                        })), (0, u.Z)((0, i.Z)(e), "animateLogo", (function() {
                            e.wrapper.current && e.wrapper.current.classList.add(Zt), e.logo.current && e.logo.current.classList.add(St)
                        })), (0, u.Z)((0, i.Z)(e), "updateMousePosition", (function(t) {
                            var n = t.touches ? t.touches[0].pageX : t.clientX;
                            e.mouseX = n - e.windowHalfX
                        })), (0, u.Z)((0, i.Z)(e), "addListeners", (function() {
                            document.addEventListener("mousemove", e.throttledOnMousemove, !1), document.addEventListener("touchmove", e.throttledOnMousemove, !1), window.addEventListener("resize", e.throttledOnResize, !1), e.resize()
                        })), (0, u.Z)((0, i.Z)(e), "removeListeners", (function() {
                            document.removeEventListener("mousemove", e.throttledOnMousemove, !1), document.removeEventListener("touchmove", e.throttledOnMousemove, !1), window.removeEventListener("resize", e.throttledOnResize, !1)
                        })), (0, u.Z)((0, i.Z)(e), "destroyScene", (function() {
                            e.stopAnimation(), e.sound && (e.sound.setVolume(0), e.sound.stop()), e.particles && e.particles.forEach((function(e) {
                                e.geometry.dispose(), e.material.dispose()
                            })), e.renderer && e.renderer.dispose(), e.scene && (e.scene = null)
                        })), (0, u.Z)((0, i.Z)(e), "stopAnimation", (function() {
                            e.removeListeners(), window.cancelAnimationFrame(e.renderLoop), e.renderer && e.renderer.dispose && e.renderer.dispose()
                        })), (0, u.Z)((0, i.Z)(e), "restartAnimation", (function() {
                            e.drawFrame(), e.removeListeners(), e.addListeners()
                        })), (0, u.Z)((0, i.Z)(e), "updateScreenResolutionValues", (function() {
                            if (e.wrapper.current) {
                                var t = e.wrapper.current.getBoundingClientRect();
                                e.sceneWidth = t.width, e.sceneHeight = t.height
                            } else e.sceneWidth = window.innerWidth, e.sceneHeight = window.innerHeight
                        })), (0, u.Z)((0, i.Z)(e), "resize", (function() {
                            e.updateScreenResolutionValues(), e.camera && (e.camera.aspect = e.sceneWidth / e.sceneHeight, e.camera.updateProjectionMatrix()), e.renderer && e.renderer.setSize(e.sceneWidth, e.sceneHeight)
                        })), (0, u.Z)((0, i.Z)(e), "updateParticlePosition", (function() {
                            var t, n = bt,
                                r = Pt;
                            e.particles.forEach((function(e) {
                                (t = e).velocity.multiplyScalar(t.drag), t.velocity.add(t.gravity), t.position.add(t.velocity), t.position.x > n ? t.position.x -= r : t.position.x < -1e3 && (t.position.x += r), t.position.y < -1e3 && (t.position.y += r), t.position.z > n ? t.position.z -= r : t.position.z < -1e3 && (t.position.z += r)
                            }))
                        })), (0, u.Z)((0, i.Z)(e), "updateCameraPosition", (function() {
                            e.camera && (e.camera.position.x += .01 * (e.mouseX - e.camera.position.x), e.camera.lookAt(new window.THREE.Vector3(0, 0, 0)))
                        })), (0, u.Z)((0, i.Z)(e), "drawFrame", (function() {
                            e.props.isInView && !e.isScrolling && (e.renderLoop = window.requestAnimationFrame(e.drawFrame)), e.updateParticlePosition(), e.updateCameraPosition(), e.renderer && e.renderer.render(e.scene, e.camera)
                        })), (0, u.Z)((0, i.Z)(e), "sceneContainer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(e), "wrapper", (0, l.createRef)()), (0, u.Z)((0, i.Z)(e), "logo", (0, l.createRef)()), (0, u.Z)((0, i.Z)(e), "throttledOnMousemove", m()(e.updateMousePosition, 50)), (0, u.Z)((0, i.Z)(e), "throttledOnResize", m()(e.resize, 50)), e
                    }
                    return (0, o.Z)(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this.updateScreenResolutionValues(), this.windowHalfX = this.sceneWidth / 2, this.windowHalfY = this.sceneHeight / 2, this.mouseX = 0, this.mouseY = 0, this.particles = [], this.snowflakeImages = this.getImagesByGalleryId("d1-snowflakes"), this.isScrolling = !1, xt()(), this.initialise()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function(e) {
                            var t = this.props.isInView;
                            t && this.isSetup ? this.restartAnimation() : e.isInView && !t && this.stopAnimation()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this.destroyScene()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            var e = this.props,
                                t = e.slnId,
                                n = e.data,
                                r = this.getImagesByGalleryId("d1-backgrounds"),
                                o = n && n.get("item"),
                                i = o && o.toJS(),
                                a = i && i.filter((function(e) {
                                    return "d1-title" === e.entryName
                                })),
                                s = a && a[0].title;
                            return (0, A.jsxs)("figure", {
                                ref: this.wrapper,
                                className: "o-hero__bgImmersive -D1",
                                "data-slnm-id": "".concat(t, "_immersiveD1"),
                                children: [r && (0, A.jsxs)("div", {
                                    className: "o-hero__snowScene",
                                    children: [(0, A.jsx)(je.Z, {
                                        src: r[0],
                                        className: "o-hero__snowBg"
                                    }), (0, A.jsx)(je.Z, {
                                        src: r[1],
                                        className: "o-hero__snowLight"
                                    }), (0, A.jsx)(je.Z, {
                                        src: r[2],
                                        className: "o-hero__snowLight2"
                                    }), (0, A.jsx)(je.Z, {
                                        src: r[3],
                                        className: "o-hero__cabinLight",
                                        transparent: !0
                                    })]
                                }), (0, A.jsx)("div", {
                                    ref: this.logo,
                                    className: "o-hero__snowLogo",
                                    children: (0, A.jsx)(Q.Z, {
                                        icon: "snowLogo",
                                        invertColor: !0
                                    })
                                }), s && (0, A.jsx)("figcaption", {
                                    className: "o-hero__bgCaption",
                                    children: (0, A.jsx)("p", {
                                        className: "-fadeIn",
                                        children: s || "THE STORY OF SHAPE"
                                    })
                                }), (0, A.jsx)("div", {
                                    className: "o-hero__snowScene3D",
                                    ref: this.sceneContainer
                                })]
                            })
                        }
                    }]), n
                }(l.PureComponent),
                Tt = n(21318),
                Ct = n(50813);

            function kt(e) {
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
                    var n, r = (0, c.Z)(e);
                    if (t) {
                        var o = (0, c.Z)(this).constructor;
                        n = Reflect.construct(r, arguments, o)
                    } else n = r.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var zt = function(e) {
                (0, a.Z)(n, e);
                var t = kt(n);

                function n(e) {
                    var o;
                    return (0, r.Z)(this, n), o = t.call(this, e), (0, u.Z)((0, i.Z)(o), "onIntersectionEnter", (function(e) {
                        var t = o.state,
                            n = t.hasBegunStory,
                            r = t.hasReachedStory,
                            a = t.navigatedByClick,
                            s = t.activeChapter;
                        if (r || o.setState({
                                hasReachedStory: !0
                            }), "down" === o.scrollDirection && (o.narrationTexts[e] && o.narrationTexts[e].resetNarration(), !a && (void 0 === s || e > s))) {
                            var c, u = (null === (c = o.observers[e]) || void 0 === c ? void 0 : c.offsetTop) - 61;
                            (0, w.NY)(u, 1500)
                        }
                        var l = e + 1 === o.narrationTexts.length;
                        if (n && "up" === o.scrollDirection && !l) {
                            var d = l ? e : e + 1;
                            o.narrationTexts[d] && o.narrationTexts[d].pauseNarration()
                        }(n && "down" === o.scrollDirection || a) && (o.setState({
                            navigatedByClick: !1
                        }), setTimeout((function() {
                            var e, t, n;
                            null === (e = (0, i.Z)(o)) || void 0 === e || null === (t = e.audioPlayer) || void 0 === t || null === (n = t.current) || void 0 === n || n.onClick()
                        }), 500)), o.setState({
                            activeChapter: e
                        })
                    })), (0, u.Z)((0, i.Z)(o), "onIntersectionLeave", (function(e) {
                        var t, n = e + 1 === o.narrationTexts.length;
                        (o.state.hasBegunStory && !n && o.narrationTexts[e] && o.narrationTexts[e].resetNarration(), o.state.hasBegunStory && n && "up" === o.scrollDirection && o.narrationTexts[e] && o.narrationTexts[e].resetNarration(), 0 === e && "up" === o.scrollDirection) && (o.narrationTexts[e] && o.narrationTexts[e].resetNarration(), null !== (t = o.audioPlayer) && void 0 !== t && t.current && (o.audioPlayer.current.rewindAudio(), o.audioPlayer.current.resetAudioPlayer()), o.setState({
                            activeChapter: void 0
                        }))
                    })), (0, u.Z)((0, i.Z)(o), "getAudioTracks", (function() {
                        var e = o.props.data.get("storyItem"),
                            t = (e && e.get("chapters")).map((function(e) {
                                return e.getIn(["narration", "item", 0, "mediaItem", "media", "defaultAssetUrl"])
                            }));
                        o.audioTrackUrls = t
                    })), (0, u.Z)((0, i.Z)(o), "getPageTitle", (function() {
                        var e = o.props.data,
                            t = e.get("tags"),
                            n = e.get("storyHeader"),
                            r = n && n.get("colorTheme"),
                            i = n && n.get("backgroundColor"),
                            a = n && n.getIn(["item", "0"]),
                            s = a && a.get("title"),
                            c = a && a.get("subtitle"),
                            u = a && a.get("description"),
                            l = a && a.get("descriptionRichText"),
                            d = n && n.get("backgroundImage");
                        return {
                            tags: t,
                            theme: r,
                            textColor: n && n.get("textColor"),
                            backgroundColor: i,
                            title: s,
                            subtitle: c,
                            description: u,
                            backgroundImage: d,
                            descriptionRichText: l
                        }
                    })), (0, u.Z)((0, i.Z)(o), "addToCartSuccessAction", (function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Ct.uLT,
                            n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : Ct.ae5,
                            r = o.props.cartData,
                            i = (0, d.List)();
                        i = i.push(e);
                        var a = (0, d.Map)({
                                variants: i
                            }),
                            s = {
                                productDetails: (0, d.List)(a ? [a] : []),
                                showCartValue: !0,
                                cartData: r,
                                variantId: e.get("variantId"),
                                noPosition: !0
                            };
                        (0, Tt.wL)({
                            cartConfig: s,
                            userAction: n,
                            prodPosition: "".concat(Ct.Amw, ": ").concat(t)
                        })
                    })), (0, u.Z)((0, i.Z)(o), "addScrollListener", (function() {
                        window.addEventListener("scroll", m()(o.handleScrollDirection, 100, {
                            leading: !0,
                            trailing: !1
                        }))
                    })), (0, u.Z)((0, i.Z)(o), "removeScrollListener", (function() {
                        window.removeEventListener("scroll", m()(o.handleScrollDirection, 100, {
                            leading: !0,
                            trailing: !1
                        }))
                    })), (0, u.Z)((0, i.Z)(o), "handleScrollDirection", (function(e) {
                        var t = e.currentTarget;
                        o.scrollY > t.pageYOffset ? o.scrollDirection = "up" : o.scrollY < t.pageYOffset && (o.scrollDirection = "down"), o.scrollY = t.pageYOffset
                    })), (0, u.Z)((0, i.Z)(o), "handlePlayClick", (function(e) {
                        var t = o.state,
                            n = t.hasBegunStory,
                            r = t.activeChapter;
                        e ? o.narrationTexts[r] && o.narrationTexts[r].resumeNarration() : o.narrationTexts[r] && o.narrationTexts[r].startNarration(), n || o.setState({
                            hasBegunStory: !0
                        })
                    })), (0, u.Z)((0, i.Z)(o), "handlePauseClick", (function() {
                        var e = o.state.activeChapter;
                        o.narrationTexts[e] && o.narrationTexts[e].pauseNarration()
                    })), (0, u.Z)((0, i.Z)(o), "handleResetClick", (function() {
                        var e = o.state.activeChapter;
                        o.narrationTexts[e] && o.narrationTexts[e].resetNarration(!0)
                    })), (0, u.Z)((0, i.Z)(o), "handleChapterNavigation", (function() {
                        o.setState({
                            navigatedByClick: !0
                        })
                    })), (0, u.Z)((0, i.Z)(o), "startStory", (function() {
                        var e, t, n, r = o.props.toggleFooterAria,
                            a = null === (e = (0, i.Z)(o)) || void 0 === e || null === (t = e.audioPlayer) || void 0 === t || null === (n = t.current) || void 0 === n ? void 0 : n.backgroundAudioNode,
                            s = null === a || void 0 === a ? void 0 : a.play();
                        void 0 !== s ? s.catch((function(e) {
                            console.warn(e.message)
                        })) : (a && a.pause(), a && (a.mute = !1)), o.setState({
                            hasBegunStory: !0
                        }, (function() {
                            void 0 !== r && r(o.state.hasBegunStory)
                        }))
                    })), (0, u.Z)((0, i.Z)(o), "audioPlayer", (0, l.createRef)()), (0, u.Z)((0, i.Z)(o), "observers", [(0, l.createRef)()]), (0, u.Z)((0, i.Z)(o), "narrationTexts", [(0, l.createRef)()]), (0, u.Z)((0, i.Z)(o), "renderAudioPlayer", (function() {
                        var e, t = o.state.activeChapter,
                            n = o.props.data.get("storyItem"),
                            r = n && n.get("chapters"),
                            i = n && n.getIn(["heroVideoDescriptionVariant", "item", 0, "mediaItem", "media", "defaultAssetUrl"]),
                            a = t || 0,
                            s = (null === (e = o.audioTrackUrls) || void 0 === e ? void 0 : e.size) && o.audioTrackUrls.get(a);
                        return (0, A.jsx)(he, {
                            chapterNumber: t,
                            chapterTotal: r.size,
                            audioFileUrl: s,
                            backgroundAudioFileUrl: i,
                            isVisible: void 0 !== t,
                            hasBegunStory: o.state.hasBegunStory,
                            inPartialView: "up" === o.scrollDirection,
                            forceVisible: !o.state.hasBegunStory && o.state.hasReachedStory,
                            handlePlayClick: o.handlePlayClick,
                            handlePauseClick: o.handlePauseClick,
                            handleResetClick: o.handleResetClick,
                            handleChapterNavigation: o.handleChapterNavigation,
                            innerRef: o.audioPlayer
                        })
                    })), (0, u.Z)((0, i.Z)(o), "renderChapters", (function() {
                        var e = o.state.activeChapter,
                            t = o.props,
                            n = t.data,
                            r = t.toggleHeader,
                            i = t.toggleSupportingNav,
                            a = t.getVariantStockAvailability,
                            s = t.availableQuant,
                            c = n.get("storyItem"),
                            u = c && c.get("chapters");
                        return (0, A.jsx)("div", {
                            children: u && u.map((function(t, n) {
                                var c = t.get("narration"),
                                    u = c.getIn(["item", 0]),
                                    l = n,
                                    d = l === e,
                                    p = c.get("colorTheme"),
                                    m = t.get("chapterSections"),
                                    f = "chapter_".concat(l);
                                return (0, A.jsx)("div", {
                                    "data-chapter-id": l,
                                    ref: function(e) {
                                        o.observers[n] = e
                                    },
                                    children: (0, A.jsxs)(Z.Z, {
                                        onIntersectionEnter: function() {
                                            return o.onIntersectionEnter(n)
                                        },
                                        onIntersectionLeave: function() {
                                            return o.onIntersectionLeave(n)
                                        },
                                        rootMargin: "-45% 45%",
                                        multiple: [x.XS.ENTRIES, x.XS.EXITS],
                                        children: [u && (0, A.jsx)(ce, {
                                            data: u,
                                            playText: d,
                                            innerRef: function(e) {
                                                o.narrationTexts[n] = e
                                            },
                                            chapterNumber: l,
                                            colorTheme: p
                                        }), m && (0, A.jsx)(S.Z, {
                                            items: m,
                                            toggleHeader: r,
                                            toggleSupportingNav: i,
                                            addToCartSuccessAction: o.addToCartSuccessAction,
                                            pageType: Ct.uLT,
                                            getVariantStockAvailability: a,
                                            availableQuant: s
                                        }, f)]
                                    })
                                }, l)
                            }))
                        })
                    })), o.state = {
                        activeChapter: void 0,
                        hasBegunStory: !1,
                        hasReachedStory: !1,
                        navigatedByClick: !1
                    }, o.scrollY = 0, o.scrollDirection = void 0, o.audioTrackUrls = [], o.observers = [], o.narrationTexts = [], o
                }
                return (0, o.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props,
                            t = e.data,
                            n = e.cartData,
                            r = e.userInfo,
                            o = e.currencyCode,
                            i = null === t || void 0 === t ? void 0 : t.get("pageName"),
                            a = (0, Tt.v8)({
                                userInfo: r,
                                pageType: Ct.Amw,
                                cartData: n,
                                pageName: Ct.uLT,
                                story_title: t.get("slug"),
                                currencyCode: o,
                                commonPageName: i
                            });
                        (0, Tt.q8)(a), this.observers = this.observers.filter(Boolean), this.narrationTexts = this.narrationTexts.filter(Boolean), this.addScrollListener(), this.getAudioTracks()
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function() {
                        this.context.parallaxController.update()
                    }
                }, {
                    key: "componentWillUnmount",
                    value: function() {
                        this.removeScrollListener()
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.state.hasBegunStory,
                            t = this.props,
                            r = t.data,
                            o = t.toggleHeader,
                            i = t.toggleSupportingNav,
                            a = r.get("storyItem"),
                            s = a && a.get("heroVideoDescriptionVariant"),
                            c = a && a.get("heroVideoPlainVariant"),
                            u = s && s.get("cardType"),
                            l = c && c.get("cardType"),
                            p = a && a.get("immersiveVariants"),
                            m = a && a.get("chapters"),
                            f = this.getPageTitle(),
                            h = f.backgroundImage,
                            g = {
                                color: f.textColor
                            },
                            v = h ? V : N;
                        return m ? (0, A.jsxs)("div", {
                            children: [s && (0, A.jsx)(ge.default, {
                                immersiveVariant: u,
                                hero: s,
                                onScrollDown: this.startStory,
                                overlapHeader: !0,
                                withoutSubNav: !0,
                                isIcon: !0,
                                hasBegunStory: e,
                                immersiveComponents: n.VARIANTS
                            }), (0, A.jsxs)("div", {
                                children: [f && (0, A.jsx)(v, {
                                    data: (0, d.fromJS)(f),
                                    isFullScreen: !0,
                                    inlineStyle: g
                                }), c && (0, A.jsx)(ge.default, {
                                    hero: c,
                                    immersiveVariant: l
                                }), this.renderChapters(), p && (0, A.jsx)(S.Z, {
                                    immersiveComponents: n.VARIANTS,
                                    items: p,
                                    toggleHeader: o,
                                    toggleSupportingNav: i,
                                    addToCartSuccessAction: this.addToCartSuccessAction,
                                    pageType: Ct.uLT
                                }), this.renderAudioPlayer()]
                            })]
                        }) : null
                    }
                }]), n
            }(l.PureComponent);
            (0, u.Z)(zt, "VARIANTS", {
                HeroImmersiveA1: ze,
                HeroImmersiveA2: Ae,
                HeroImmersiveA3: He,
                HeroImmersiveB1: De,
                HeroImmersiveB2: qe,
                HeroImmersiveC1: Je,
                HeroImmersiveC2: yt,
                HeroImmersiveD1: Rt
            }), zt.displayName = "ImmersivePage", zt.defaultProps = {
                toggleHeader: function() {},
                toggleFooterAria: function() {},
                toggleSupportingNav: function() {}
            }, zt.contextTypes = {
                parallaxController: h().object.isRequired
            };
            var It = (0, I.Z)(zt),
                At = (0, g.Z)(It, y)
        },
        63594: function(e) {
            "use strict";
            var t = "bfred-it:object-fit-images",
                n = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g,
                r = "undefined" === typeof Image ? {
                    style: {
                        "object-position": 1
                    }
                } : new Image,
                o = "object-fit" in r.style,
                i = "object-position" in r.style,
                a = "background-size" in r.style,
                s = "string" === typeof r.currentSrc,
                c = r.getAttribute,
                u = r.setAttribute,
                l = !1;

            function d(e, t, n) {
                var r = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + (t || 1) + "' height='" + (n || 0) + "'%3E%3C/svg%3E";
                c.call(e, "src") !== r && u.call(e, "src", r)
            }

            function p(e, t) {
                e.naturalWidth ? t(e) : setTimeout(p, 100, e, t)
            }

            function m(e) {
                var r = function(e) {
                        for (var t, r = getComputedStyle(e).fontFamily, o = {}; null !== (t = n.exec(r));) o[t[1]] = t[2];
                        return o
                    }(e),
                    i = e[t];
                if (r["object-fit"] = r["object-fit"] || "fill", !i.img) {
                    if ("fill" === r["object-fit"]) return;
                    if (!i.skipTest && o && !r["object-position"]) return
                }
                if (!i.img) {
                    i.img = new Image(e.width, e.height), i.img.srcset = c.call(e, "data-ofi-srcset") || e.srcset, i.img.src = c.call(e, "data-ofi-src") || e.src, u.call(e, "data-ofi-src", e.src), e.srcset && u.call(e, "data-ofi-srcset", e.srcset), d(e, e.naturalWidth || e.width, e.naturalHeight || e.height), e.srcset && (e.srcset = "");
                    try {
                        ! function(e) {
                            var n = {
                                get: function(n) {
                                    return e[t].img[n || "src"]
                                },
                                set: function(n, r) {
                                    return e[t].img[r || "src"] = n, u.call(e, "data-ofi-" + r, n), m(e), n
                                }
                            };
                            Object.defineProperty(e, "src", n), Object.defineProperty(e, "currentSrc", {
                                get: function() {
                                    return n.get("currentSrc")
                                }
                            }), Object.defineProperty(e, "srcset", {
                                get: function() {
                                    return n.get("srcset")
                                },
                                set: function(e) {
                                    return n.set(e, "srcset")
                                }
                            })
                        }(e)
                    } catch (a) {
                        window.console && console.warn("https://bit.ly/ofi-old-browser")
                    }
                }! function(e) {
                    if (e.srcset && !s && window.picturefill) {
                        var t = window.picturefill._;
                        e[t.ns] && e[t.ns].evaled || t.fillImg(e, {
                            reselect: !0
                        }), e[t.ns].curSrc || (e[t.ns].supported = !1, t.fillImg(e, {
                            reselect: !0
                        })), e.currentSrc = e[t.ns].curSrc || e.src
                    }
                }(i.img), e.style.backgroundImage = 'url("' + (i.img.currentSrc || i.img.src).replace(/"/g, '\\"') + '")', e.style.backgroundPosition = r["object-position"] || "center", e.style.backgroundRepeat = "no-repeat", e.style.backgroundOrigin = "content-box", /scale-down/.test(r["object-fit"]) ? p(i.img, (function() {
                    i.img.naturalWidth > e.width || i.img.naturalHeight > e.height ? e.style.backgroundSize = "contain" : e.style.backgroundSize = "auto"
                })) : e.style.backgroundSize = r["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), p(i.img, (function(t) {
                    d(e, t.naturalWidth, t.naturalHeight)
                }))
            }

            function f(e, n) {
                var r = !l && !e;
                if (n = n || {}, e = e || "img", i && !n.skipTest || !a) return !1;
                "img" === e ? e = document.getElementsByTagName("img") : "string" === typeof e ? e = document.querySelectorAll(e) : "length" in e || (e = [e]);
                for (var o = 0; o < e.length; o++) e[o][t] = e[o][t] || {
                    skipTest: n.skipTest
                }, m(e[o]);
                r && (document.body.addEventListener("load", (function(e) {
                    "IMG" === e.target.tagName && f(e.target, {
                        skipTest: n.skipTest
                    })
                }), !0), l = !0, e = "img"), n.watchMQ && window.addEventListener("resize", f.bind(null, e, {
                    skipTest: n.skipTest
                }))
            }
            f.supportsObjectFit = o, f.supportsObjectPosition = i,
                function() {
                    function e(e, n) {
                        return e[t] && e[t].img && ("src" === n || "srcset" === n) ? e[t].img : e
                    }
                    i || (HTMLImageElement.prototype.getAttribute = function(t) {
                        return c.call(e(this, t), t)
                    }, HTMLImageElement.prototype.setAttribute = function(t, n) {
                        return u.call(e(this, t), t, String(n))
                    })
                }(), e.exports = f
        }
    }
]);