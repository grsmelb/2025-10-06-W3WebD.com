"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [6530], {
        16530: function(e, t, n) {
            n.d(t, {
                Z: function() {
                    return H
                }
            });
            var i = n(43350),
                r = n(80040),
                a = n(59307),
                o = n(48415),
                s = n(73667),
                l = n(3117),
                c = n(90849),
                d = n(27378),
                u = n(34051),
                p = n(34869),
                m = n(41408),
                h = n(83030),
                f = (0, m.iv)(["&.m-categoryTitle{display:flex;align-items:center;.text-wrapper{display:inline;}.reloved_Title_wrapper{display:flex;align-items:flex-start;gap:1rem;}.count_container{display:flex;flex-direction:row;align-items:center;}.count{width:24px;height:18px;margin:unset;margin-left:16px;display:inline;position:relative;top:-5px;@media ", "{top:-4px;}}.no-margin{margin:0;}.m-categoryTitle__wrapper{background-color:", ";padding-top:16px;padding-bottom:16px;.center{justify-content:center;}.alignmentClass{padding:0 22px;margin-bottom:60px;@media ", "{margin-bottom:44px;}@media ", "{padding:0 52px;margin-bottom:44px;}}@media ", "{padding-top:24px;padding-bottom:24px;}@media ", "{padding:40px 4px;}.a-markdownContent{display:inline;p{display:inline;}}}.new-padding{padding-bottom:10px;@media ", "{padding-bottom:8px;}@media ", "{padding-bottom:24px;}}h3{margin:0;padding:0;}.productCount{text-align:right;font-size:", ";@media ", "{font-size:", ";line-height:", ";}@media ", "{text-align:left;margin-top:24px;}}.readMoreLink{background:none;padding-left:0;i{font-style:normal;font-size:", ";color:", ";cursor:pointer;text-decoration:underline;line-height:", ";display:inline-block;text-underline-position:under;text-transform:capitalize;}}&.storyHubTitle{.m-categoryTitle__wrapper{padding:0;margin-bottom:16px;margin-top:40px;@media ", "{margin-bottom:24px;margin-top:56px;}@media ", "{margin-bottom:70px;margin-top:54px;}.story-title,.story-subtitle{text-align:center;&.h5{margin-bottom:8px;}}}}}"], (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.colors.WHITE
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.large
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.fontSize.body.small.primary)
                }), (function(e) {
                    return e.theme.mediaQuery.smallMax
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.fontSize.body.small.quaternary)
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.lineHeight.custom.custom_6)
                }), (function(e) {
                    return e.theme.mediaQuery.xSmallMax
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.fontSize.body.large.primary)
                }), (function(e) {
                    return e.theme.colors.BEO_BLACK
                }), (function(e) {
                    return (0, h.hO)(e.theme.fonts.lineHeight.custom.custom_12)
                }), (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                })),
                g = n(41605),
                x = n(34919),
                v = n(71377),
                y = n(6234),
                b = n(8103),
                j = n(5047),
                M = n(24246);

            function w(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, i)
                }
                return n
            }

            function T(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? w(Object(n), !0).forEach((function(t) {
                        (0, c.Z)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : w(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

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
                    var n, i = (0, l.Z)(e);
                    if (t) {
                        var r = (0, l.Z)(this).constructor;
                        n = Reflect.construct(i, arguments, r)
                    } else n = i.apply(this, arguments);
                    return (0, s.Z)(this, n)
                }
            }
            var N = function(e) {
                (0, o.Z)(n, e);
                var t = _(n);

                function n(e) {
                    var r;
                    return (0, i.Z)(this, n), r = t.call(this, e), (0, c.Z)((0, a.Z)(r), "checkCharsBeforeReadMore", (function(e) {
                        var t = r.readMorePrevisousTextWrapper && r.readMorePrevisousTextWrapper.current;
                        if (t) {
                            if (!e) return t.innerHTML = "", void r.setState({
                                showReadMore: !1
                            });
                            var n = r.props.viewportInfo,
                                i = n && n.getIn(["isSmallerThan", "xSmall"]),
                                a = e,
                                o = r.props.readMoreLabel,
                                s = a.split(" "),
                                l = i ? 60 : 30;
                            t.innerHTML = "";
                            var c = document.createElement("button");
                            c.classList.add("readMoreLink"), c.innerHTML = "...  <i>".concat(o, "</i>"), t.appendChild(c);
                            for (var d = null === t || void 0 === t ? void 0 : t.offsetHeight, u = !1, p = 0, m = 0; d < l && s[m];) t.innerHTML = "".concat(t.innerHTML, " ").concat(s[m]), p = m - 1, m++, (d = null === t || void 0 === t ? void 0 : t.offsetHeight) > l && (u = !0);
                            if (u) {
                                if (t.innerHTML = "", p < 0) {
                                    d = null === t || void 0 === t ? void 0 : t.offsetHeight;
                                    var h = 0,
                                        f = 0;
                                    t.appendChild(c);
                                    for (var g = a.split(""); d < l && g[h];) t.innerHTML = "".concat(t.innerHTML, " ").concat(g[h]), f = h - 1, h++, d = null === t || void 0 === t ? void 0 : t.offsetHeight;
                                    var x = null === g || void 0 === g ? void 0 : g.slice(0, f + 1),
                                        v = null === x || void 0 === x ? void 0 : x.join("");
                                    t.innerHTML = "", t.innerHTML = v || e
                                } else {
                                    var y = s.slice(0, p + 1).join(" ");
                                    t.innerHTML = y
                                }
                                r.setState({
                                    showReadMore: !0
                                })
                            } else r.setState({
                                showReadMore: !1
                            }), t.innerHTML = "", t.innerHTML = a
                        }
                    })), (0, c.Z)((0, a.Z)(r), "addTextEllipsis", (function(e) {
                        var t, n, i = r.props.viewportInfo;
                        if (i && i.getIn(["isSmallerThan", "xSmall"]))
                            if (e && e.length > 90) {
                                var a, o = null === e || void 0 === e ? void 0 : e.substring(0, 90),
                                    s = null === o || void 0 === o ? void 0 : o.match(/\(([^)]+)\)/);
                                n = s ? null === (a = s[0]) || void 0 === a ? void 0 : a.length : 0;
                                var l = e.indexOf(" ", n + 90);
                                t = e.substring(0, l)
                            } else t = e;
                        else if (e && e.length > 120) {
                            var c, d = null === e || void 0 === e ? void 0 : e.substring(0, 120),
                                u = null === d || void 0 === d ? void 0 : d.match(/\(([^)]+)\)/);
                            n = u ? null === (c = u[0]) || void 0 === c ? void 0 : c.length : 0;
                            var p = e.indexOf(" ", n + 120);
                            t = e.substring(0, p)
                        } else t = e;
                        return t
                    })), (0, c.Z)((0, a.Z)(r), "readMoreHandler", (function() {
                        r.setState({
                            readMoreExpanded: !0,
                            showReadMore: !1
                        })
                    })), (0, c.Z)((0, a.Z)(r), "handleKeyDown", (function(e) {
                        e.shiftKey && e.which === g.HFj && document.getElementById("subCategoryFilters").focus()
                    })), (0, c.Z)((0, a.Z)(r), "renderContent", (function() {
                        var e = r.props,
                            t = e.title,
                            n = e.subtitle,
                            i = e.slnId,
                            a = e.isCategoryPage,
                            o = e.isComparePage,
                            s = e.productsCount,
                            l = e.readMoreLabel,
                            c = e.categoryTitleValue,
                            d = e.locale,
                            p = e.country,
                            m = e.isReloved,
                            h = e.relovedConfiguration,
                            f = e.isTitleWithDescription,
                            g = r.state,
                            v = g.showReadMore,
                            y = g.readMoreExpanded,
                            w = n,
                            _ = (0, M.jsx)(b.Z, {
                                data: (0, u.fromJS)({
                                    description: w
                                })
                            }),
                            N = null === p || void 0 === p ? void 0 : p.toLowerCase(),
                            O = r.props.viewportInfo,
                            H = O && O.getIn(["isSmallerThan", "xSmall"]),
                            C = null === h || void 0 === h ? void 0 : h.get("tagImage"),
                            Z = {
                                href: {
                                    pathname: "/[language]/[country]/stories",
                                    query: {
                                        language: d,
                                        country: N
                                    }
                                }
                            };
                        return a || o ? (0, M.jsxs)("div", {
                            className: "row categoryTitleFocusAble",
                            children: [(0, M.jsxs)("div", {
                                className: "col-xs-12 col-md-8",
                                "data-sln-id": "".concat(i, "_container"),
                                children: [o && (0, M.jsxs)(M.Fragment, {
                                    children: [(0, M.jsx)("h1", {
                                        "data-sln-id": "".concat(i, "_title"),
                                        className: "h2",
                                        children: (0, M.jsx)("span", {
                                            children: c
                                        })
                                    }), _ && (0, M.jsxs)(M.Fragment, {
                                        children: [(0, M.jsx)("p", {
                                            "data-sln-id": "".concat(i, "_subtitle"),
                                            children: y && _
                                        }), !y && (0, M.jsx)("p", {
                                            "data-sln-id": "".concat(i, "_subtitle"),
                                            className: "text-wrapper",
                                            ref: r.readMorePrevisousTextWrapper
                                        }), (0, M.jsx)("span", {
                                            children: v && !y && (0, M.jsxs)("button", {
                                                type: "button",
                                                className: "readMoreLink",
                                                onClick: r.readMoreHandler,
                                                onKeyDown: function(e) {
                                                    return r.handleKeyDown(e)
                                                },
                                                children: ["... ", (0, M.jsx)("i", {
                                                    children: l
                                                })]
                                            })
                                        })]
                                    })]
                                }), a && (0, M.jsx)(M.Fragment, {
                                    children: !f && (0, M.jsxs)("div", {
                                        className: "col-xs-12 col-md-8",
                                        "data-sln-id": "".concat(i, "_container"),
                                        children: [m && (0, M.jsxs)("div", {
                                            className: "reloved_Title_wrapper",
                                            children: [(0, M.jsx)(x.Z, {
                                                className: "reloved-tag-image",
                                                media: C,
                                                imgWidth: "63",
                                                imgHeight: "38",
                                                slnId: "".concat(i, "_imageResponsive"),
                                                contentfulImage: !0
                                            }), (0, M.jsx)("div", {
                                                className: "count_container",
                                                children: (0, M.jsxs)("h1", {
                                                    "data-sln-id": "".concat(i, "_title"),
                                                    className: "h4 no-margin",
                                                    children: [(0, M.jsx)("span", {
                                                        children: c
                                                    }), (0, M.jsx)("span", {
                                                        className: "h6 count",
                                                        children: !!s && "(".concat(s, ")")
                                                    })]
                                                })
                                            })]
                                        }), !m && (0, M.jsx)("div", {
                                            className: "count_container",
                                            children: (0, M.jsxs)("h1", {
                                                "data-sln-id": "".concat(i, "_title"),
                                                className: "h4 no-margin",
                                                children: [(0, M.jsx)("span", {
                                                    children: c
                                                }), (0, M.jsx)("span", {
                                                    className: "h6 count",
                                                    children: !!s && "(".concat(s, ")")
                                                })]
                                            })
                                        })]
                                    })
                                })]
                            }), w && f && a && (0, M.jsxs)("div", {
                                className: "col-xs-12 col-sm-8 col-md-8 col-lg-6 alignmentClass",
                                "data-sln-id": "".concat(i, "_container"),
                                children: [(0, M.jsx)("h2", {
                                    "data-sln-id": "".concat(i, "_title"),
                                    className: "".concat(H ? "h3" : "h2"),
                                    children: (0, M.jsx)("span", {
                                        children: t
                                    })
                                }), (0, M.jsx)("p", {
                                    className: "b1",
                                    children: _
                                })]
                            })]
                        }) : (0, M.jsx)("div", {
                            className: "row",
                            children: (0, M.jsxs)("div", {
                                className: "col-xs-12",
                                "data-sln-id": "".concat(i, "_container"),
                                children: [n && (0, M.jsx)("p", {
                                    "data-sln-id": "".concat(i, "_subtitle"),
                                    className: "h5 story-subtitle",
                                    children: n
                                }), t && (0, M.jsx)(j.Z, T(T({
                                    cta: null
                                }, Z), {}, {
                                    children: (0, M.jsx)("h1", {
                                        "data-sln-id": "".concat(i, "_title"),
                                        className: "h2 story-title",
                                        children: (0, M.jsx)("span", {
                                            children: t
                                        })
                                    })
                                }))]
                            })
                        })
                    })), r.state = {
                        showReadMore: !1,
                        readMoreExpanded: !1
                    }, r.readMorePrevisousTextWrapper = (0, d.createRef)(), r
                }
                return (0, r.Z)(n, [{
                    key: "componentDidMount",
                    value: function() {
                        var e = this.props.subtitle;
                        this.checkCharsBeforeReadMore(e)
                    }
                }, {
                    key: "componentDidUpdate",
                    value: function(e) {
                        var t = this;
                        if (e.activeFilterItem !== this.props.activeFilterItem || e.subtitle !== this.props.subtitle || e.viewportInfo !== this.props.viewportInfo) {
                            var n = this.props.subtitle;
                            this.setState({
                                readMoreExpanded: !1
                            }, (function() {
                                return t.checkCharsBeforeReadMore(n)
                            }))
                        }
                    }
                }, {
                    key: "render",
                    value: function() {
                        var e = this.props,
                            t = e.className,
                            n = e.enableTagFilters,
                            i = e.isCategoryPage && !n ? "new-padding" : "";
                        return (0, M.jsx)("div", {
                            className: "".concat(t, " m-categoryTitle"),
                            "data-sln-id": "automation_categoryTitle_container",
                            children: (0, M.jsx)(v.Z, {
                                disablePadding: !0,
                                children: (0, M.jsx)("div", {
                                    className: "m-categoryTitle__wrapper ".concat(i),
                                    children: this.renderContent()
                                })
                            })
                        })
                    }
                }]), n
            }(d.PureComponent);
            N.displayName = "CategoryTitle";
            var O = (0, y.Z)(N),
                H = (0, p.Z)(O, f)
        }
    }
]);