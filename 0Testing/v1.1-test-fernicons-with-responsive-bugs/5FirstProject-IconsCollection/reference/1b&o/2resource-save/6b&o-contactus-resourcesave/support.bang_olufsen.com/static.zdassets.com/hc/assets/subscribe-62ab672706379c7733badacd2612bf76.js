"use strict";
(self.webpackChunkhelp_center = self.webpackChunkhelp_center || []).push([
    [56295], {
        70486: function(n, e, t) {
            t.d(e, {
                v2: function() {
                    return c.v2
                },
                j2: function() {
                    return E
                },
                sN: function() {
                    return C
                },
                Uk: function() {
                    return w
                },
                qy: function() {
                    return v
                },
                Cl: function() {
                    return g
                }
            });
            var r = t(41266),
                o = t(73126),
                i = t(67294),
                a = t(45697),
                s = t.n(a),
                c = t(20288),
                l = t(55877),
                u = t.n(l);

            function A() {
                for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t];
                var r = (0, i.useRef)();
                return (0, i.useEffect)((function() {
                    e.forEach((function(n) {
                        n && ("function" == typeof n ? n(r.current) : n.current = r.current)
                    }))
                }), [e]), r
            }
            var p = t(93379),
                d = t.n(p),
                f = t(76967),
                m = {
                    insert: "head",
                    singleton: !1
                },
                b = (d()(f.Z, m), f.Z.locals || {}),
                x = ["position"],
                E = (0, i.forwardRef)((function(n, e) {
                    var t = A(e, i.useRef(null));
                    return (0, i.useEffect)((function() {
                        t.current.removeAttribute("data-reach-menu-button"), setTimeout((function() {
                            t.current.removeAttribute("aria-controls")
                        }), 500)
                    }), [t, e]), i.createElement(c.j2, (0, o.Z)({
                        ref: t,
                        id: u().v4()
                    }, n))
                }));
            E.displayName = c.j2.displayName;
            var h = (0, i.forwardRef)((function(n, e) {
                var t = A(e, i.useRef(null));
                return (0, i.useEffect)((function() {
                    t.current.removeAttribute("data-reach-menu-items"), t.current.parentElement.removeAttribute("data-reach-popover"), t.current.parentElement.removeAttribute("data-reach-menu"), t.current.parentElement.removeAttribute("data-reach-menu-popover")
                }), [t, e]), i.createElement(c.sd, (0, o.Z)({
                    ref: t,
                    className: b.list
                }, n))
            }));
            h.displayName = c.sd.displayName;
            var v = (0, i.forwardRef)((function(n, e) {
                var t = n.position,
                    o = (0, r.Z)(n, x);
                return i.createElement(c.YI, {
                    ref: e,
                    position: t
                }, i.createElement(h, o))
            }));
            v.propTypes = {
                position: s().any
            }, v.displayName = c.qy.displayName;
            var C = (0, i.forwardRef)((function(n, e) {
                var t = A(e, i.useRef(null));
                return (0, i.useEffect)((function() {
                    t.current.removeAttribute("data-reach-menu-item")
                }), [t, e]), i.createElement(c.sN, (0, o.Z)({
                    ref: t,
                    className: b.item
                }, n))
            }));
            C.displayName = c.sN.displayName;
            var w = (0, i.forwardRef)((function(n, e) {
                var t = A(e, i.useRef(null));
                return (0, i.useEffect)((function() {
                    t.current.removeAttribute("data-reach-menu-item"), t.current.removeAttribute("data-reach-menu-link")
                }), [t, e]), i.createElement(c.Uk, (0, o.Z)({
                    ref: t,
                    className: b.item
                }, n))
            }));
            w.displayName = c.Uk.displayName;
            var g = function(n) {
                return i.createElement("div", (0, o.Z)({
                    className: b.separator
                }, n))
            }
        },
        69605: function(n, e, t) {
            t.r(e), t.d(e, {
                default: function() {
                    return V
                }
            });
            var r = t(25110),
                o = t.n(r),
                i = t(67294),
                a = t(73935),
                s = t(56869),
                c = t.n(s),
                l = t(44845),
                u = t(83728),
                A = t(33938),
                p = t(51679),
                d = t.n(p),
                f = t(97606),
                m = t.n(f),
                b = t(28222),
                x = t.n(b),
                E = t(80222),
                h = t.n(E),
                v = t(14418),
                C = t.n(v),
                w = t(8446),
                g = t.n(w),
                B = t(66870),
                y = t.n(B),
                k = t(29747),
                _ = t.n(k),
                R = t(96718),
                N = t.n(R),
                O = t(30222),
                Z = t.n(O),
                T = t(45697),
                W = t.n(T),
                S = t(38016),
                q = t.n(S),
                j = t(53371),
                z = t(43410),
                F = t(96989),
                Q = t(70486),
                U = t(6188),
                X = t(93379),
                I = t.n(X),
                Y = t(39354),
                K = {
                    insert: "head",
                    singleton: !1
                },
                D = (I()(Y.Z, K), Y.Z.locals || {});

            function L(n, e) {
                var t = x()(n);
                if (h()) {
                    var r = h()(n);
                    e && (r = C()(r).call(r, (function(e) {
                        return g()(n, e).enumerable
                    }))), t.push.apply(t, r)
                }
                return t
            }

            function J(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? L(Object(t), !0).forEach((function(e) {
                        (0, l.Z)(n, e, t[e])
                    })) : y() ? _()(n, y()(t)) : L(Object(t)).forEach((function(e) {
                        N()(n, e, g()(t, e))
                    }))
                }
                return n
            }
            var M = function() {
                    var n = (0, A.Z)(Z().mark((function n(e, t) {
                        var r;
                        return Z().wrap((function(n) {
                            for (;;) switch (n.prev = n.next) {
                                case 0:
                                    return n.t0 = fetch, n.t1 = e, n.t2 = t, n.next = 5, (0, j.RJ)();
                                case 5:
                                    return n.t3 = n.sent, n.t4 = {
                                        "X-CSRF-Token": n.t3
                                    }, n.t5 = {
                                        method: n.t2,
                                        credentials: "same-origin",
                                        headers: n.t4
                                    }, n.next = 10, (0, n.t0)(n.t1, n.t5);
                                case 10:
                                    if ((r = n.sent).ok) {
                                        n.next = 13;
                                        break
                                    }
                                    throw new Error(r.statusText);
                                case 13:
                                case "end":
                                    return n.stop()
                            }
                        }), n)
                    })));
                    return function(e, t) {
                        return n.apply(this, arguments)
                    }
                }(),
                P = {
                    section: q()("txt.help_center.views.user.following.type.section"),
                    article: q()("txt.help_center.views.user.following.type.article"),
                    topic: q()("txt.help_center.views.user.following.type.topic"),
                    post: q()("txt.help_center.views.user.following.type.community_post"),
                    question: q()("txt.help_center.views.user.following.type.question"),
                    user: q()("txt.help_center.views.user.following.type.user")
                };

            function H(n) {
                var e = n.url,
                    t = (0, i.useState)(n.options),
                    r = (0, u.Z)(t, 2),
                    o = r[0],
                    a = r[1],
                    s = (0, i.useState)(n.isSubscribed),
                    c = (0, u.Z)(s, 2),
                    l = c[0],
                    p = c[1],
                    f = (0, i.useState)(n.followerCount || 0),
                    b = (0, u.Z)(f, 2),
                    x = b[0],
                    E = b[1],
                    h = "anonymous" !== F.Z.get("user.role"),
                    v = null == o ? void 0 : d()(o).call(o, (function(n) {
                        return n.selected
                    })),
                    C = "subscriptons-description-".concat(Math.random()),
                    w = "follow-button-".concat(Math.random()),
                    g = function() {
                        var n = (0, A.Z)(Z().mark((function n(t) {
                            var r;
                            return Z().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return r = l, p(!0), a(null == o ? void 0 : m()(o).call(o, (function(n) {
                                            return J(J({}, n), {}, {
                                                selected: n === t
                                            })
                                        }))), void 0 === x || l || E(x + 1), n.prev = 4, n.next = 7, M((null == t ? void 0 : t.url) || e, "POST");
                                    case 7:
                                        n.next = 15;
                                        break;
                                    case 9:
                                        n.prev = 9, n.t0 = n.catch(4), U.N.push({
                                            type: "error",
                                            title: q()("txt.help_center.views.subscribe.error_message")
                                        }), p(r), a(null == o ? void 0 : m()(o).call(o, (function(n) {
                                            return J(J({}, n), {}, {
                                                selected: n === v
                                            })
                                        }))), void 0 === x || r || E(x);
                                    case 15:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [4, 9]
                            ])
                        })));
                        return function(e) {
                            return n.apply(this, arguments)
                        }
                    }(),
                    B = function() {
                        var n = (0, A.Z)(Z().mark((function n() {
                            return Z().wrap((function(n) {
                                for (;;) switch (n.prev = n.next) {
                                    case 0:
                                        return p(!1), a(null == o ? void 0 : m()(o).call(o, (function(n) {
                                            return J(J({}, n), {}, {
                                                selected: !1
                                            })
                                        }))), void 0 !== x && E(Math.max(x - 1, 0)), n.prev = 3, n.next = 6, M(e, "DELETE");
                                    case 6:
                                        n.next = 14;
                                        break;
                                    case 8:
                                        n.prev = 8, n.t0 = n.catch(3), U.N.push({
                                            type: "error",
                                            title: q()("txt.help_center.views.subscribe.error_message")
                                        }), p(!0), a(null == o ? void 0 : m()(o).call(o, (function(n) {
                                            return J(J({}, n), {}, {
                                                selected: n === v
                                            })
                                        }))), void 0 !== x && E(x);
                                    case 14:
                                    case "end":
                                        return n.stop()
                                }
                            }), n, null, [
                                [3, 8]
                            ])
                        })));
                        return function() {
                            return n.apply(this, arguments)
                        }
                    }(),
                    y = function() {
                        h && !o && (l ? B() : g())
                    },
                    k = P[n.item],
                    _ = l ? o ? q()("txt.help_center.views.section._subscription.following") : q()("txt.help_center.views.section._subscription.unfollow") : q()("txt.help_center.views.section._subscription.follow"),
                    R = l ? o ? q()("txt.help_center.views.item._subscription.following", {
                        item: k
                    }) : q()("txt.help_center.views.item._subscription.unfollow", {
                        item: k
                    }) : q()("txt.help_center.views.item._subscription.follow", {
                        item: k
                    }),
                    N = "Section" === k ? R : q()("txt.help_center.views.section._subscription.aria_description", {
                        count: x
                    });
                return h && o ? i.createElement(Q.v2, null, i.createElement(Q.j2, {
                    onClick: y,
                    "data-auth-action": h ? void 0 : "signin",
                    id: w,
                    "data-follower-count": x,
                    "data-selected": l,
                    "aria-describedby": C,
                    "aria-label": R
                }, _), i.createElement("span", {
                    className: D.invisible,
                    id: C
                }, N), i.createElement(Q.qy, {
                    className: D.list,
                    "aria-labelledby": w
                }, m()(o).call(o, (function(n) {
                    return i.createElement(Q.sN, {
                        key: n.url,
                        className: D.item,
                        onSelect: function() {
                            return g(n)
                        },
                        role: "menuitemcheckbox",
                        "aria-checked": n.selected ? "true" : "false"
                    }, n.label, n.selected && i.createElement(i.Fragment, null, i.createElement("span", {
                        className: D.spacer
                    }), i.createElement(z.Z, {
                        "aria-hidden": !0
                    })))
                })), l && i.createElement(Q.sN, {
                    key: e,
                    className: D.item,
                    onSelect: B,
                    role: "menuitemcheckbox"
                }, q()("txt.help_center.views.section._subscription.unfollow")))) : i.createElement(i.Fragment, null, i.createElement("button", {
                    type: "button",
                    onClick: y,
                    id: w,
                    "data-auth-action": h ? void 0 : "signin",
                    "data-follower-count": x,
                    "data-selected": l,
                    "aria-describedby": C,
                    "aria-label": R,
                    "aria-pressed": o ? null : l
                }, _), i.createElement("span", {
                    className: D.invisible,
                    id: C
                }, N))
            }

            function V() {
                var n = document.querySelectorAll("[data-helper='subscribe']");
                o()(n).forEach((function(n) {
                    var e = n.getAttribute("data-json"),
                        t = c()(JSON.parse(e));
                    n.removeAttribute("data-helper"), n.removeAttribute("data-json"), a.render(i.createElement(H, t), n)
                }))
            }
            H.propTypes = {
                item: W().string.isRequired,
                url: W().string.isRequired,
                isSubscribed: W().bool.isRequired,
                followerCount: W().number,
                options: W().arrayOf(W().shape({
                    label: W().string.isRequired,
                    url: W().string.isRequired,
                    selected: W().bool.isRequired
                }))
            }
        },
        76967: function(n, e, t) {
            var r = t(87537),
                o = t.n(r),
                i = t(23645),
                a = t.n(i)()(o());
            a.push([n.id, ":root {\n  --reach-menu-button: 1;\n}\n\n._8RHFYPTt0CxuUudzL8wxA9oZq1ynL1u {\n  background: #fff;\n  border: 1px solid rgb(216, 216, 216);\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  left: 0;\n  min-width: 170px;\n  outline: none;\n  padding: 10px 0;\n  position: relative;\n  z-index: 1000;\n}\n\n._s7IdTkp038IFCdlKs8vwOcioOy4uK5h {\n  color: #333;\n  cursor: pointer;\n  display: block;\n  padding: 7px 40px 7px 20px;\n  outline: none;\n  white-space: nowrap;\n}\n\n._s7IdTkp038IFCdlKs8vwOcioOy4uK5h:hover,\n._s7IdTkp038IFCdlKs8vwOcioOy4uK5h:focus {\n  background: #f3f3f3;\n  text-decoration: none;\n  color: #333;\n}\n\n.XmCiWBUhr_QflETEQRaOWgLkfbAj8oS7 {\n  border-bottom: 1px solid rgb(216, 216, 216);\n  color: rgb(150, 150, 150);\n  display: block;\n  font-weight: normal;\n  font-size: 11px;\n  padding: 5px 0;\n  margin: 5px 20px 10px 20px;\n}\n\n.NFPgFc0gI0HvonfLdOrjAWlpe6fhsgu2 {\n  display: inline-block;\n  width: 10px;\n}\n", "", {
                version: 3,
                sources: ["webpack://./ui/components/MenuButton/index.css"],
                names: [],
                mappings: "AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,oCAAoC;EACpC,kBAAkB;EAClB,wCAAwC;EACxC,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,OAAO;EACP,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,kBAAkB;EAClB,aAAa;AACf;;AAEA;EACE,WAAW;EACX,eAAe;EACf,cAAc;EACd,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;EACnB,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,2CAA2C;EAC3C,yBAAyB;EACzB,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,cAAc;EACd,0BAA0B;AAC5B;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb",
                sourcesContent: [":root {\n  --reach-menu-button: 1;\n}\n\n.list {\n  background: #fff;\n  border: 1px solid rgb(216, 216, 216);\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  left: 0;\n  min-width: 170px;\n  outline: none;\n  padding: 10px 0;\n  position: relative;\n  z-index: 1000;\n}\n\n.item {\n  color: #333;\n  cursor: pointer;\n  display: block;\n  padding: 7px 40px 7px 20px;\n  outline: none;\n  white-space: nowrap;\n}\n\n.item:hover,\n.item:focus {\n  background: #f3f3f3;\n  text-decoration: none;\n  color: #333;\n}\n\n.separator {\n  border-bottom: 1px solid rgb(216, 216, 216);\n  color: rgb(150, 150, 150);\n  display: block;\n  font-weight: normal;\n  font-size: 11px;\n  padding: 5px 0;\n  margin: 5px 20px 10px 20px;\n}\n\n.spacer {\n  display: inline-block;\n  width: 10px;\n}\n"],
                sourceRoot: ""
            }]), a.locals = {
                list: "_8RHFYPTt0CxuUudzL8wxA9oZq1ynL1u",
                item: "_s7IdTkp038IFCdlKs8vwOcioOy4uK5h",
                separator: "XmCiWBUhr_QflETEQRaOWgLkfbAj8oS7",
                spacer: "NFPgFc0gI0HvonfLdOrjAWlpe6fhsgu2"
            }, e.Z = a
        },
        39354: function(n, e, t) {
            var r = t(87537),
                o = t.n(r),
                i = t(23645),
                a = t.n(i)()(o());
            a.push([n.id, ":root {\n  --reach-menu-button: 1;\n}\n\n.vb0q01gYhxX6xjoZDd0O4Qb7TxhiDaKD {\n  background: #fff;\n  border: 1px solid rgb(216, 216, 216);\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  left: 0;\n  min-width: 170px;\n  outline: none;\n  padding: 10px 0;\n  z-index: 1000;\n}\n\n.OZgYUTQTaNinWRRb5SyjeQ8WEtA09RuF {\n  color: #333;\n  cursor: pointer;\n  display: block;\n  padding: 7px 40px 7px 20px;\n  outline: none;\n  white-space: nowrap;\n}\n\n.OZgYUTQTaNinWRRb5SyjeQ8WEtA09RuF:hover,\n.OZgYUTQTaNinWRRb5SyjeQ8WEtA09RuF:focus {\n  background: #f3f3f3;\n  text-decoration: none;\n  color: #333;\n}\n\n.p1JvbEyYxbSfz1_7MmGKUQzT0SOap8Vu {\n  display: inline-block;\n  width: 10px;\n}\n\n.IJDXXdfgVXcY6MRd9u66HghwrbdhBtJv {\n  position: absolute;\n  top: auto;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  width: 1px;\n  height: 1px;\n  white-space: nowrap;\n}\n", "", {
                version: 3,
                sources: ["webpack://./ui/components/Subscribe/index.css"],
                names: [],
                mappings: "AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,gBAAgB;EAChB,oCAAoC;EACpC,kBAAkB;EAClB,wCAAwC;EACxC,eAAe;EACf,kBAAkB;EAClB,mBAAmB;EACnB,OAAO;EACP,gBAAgB;EAChB,aAAa;EACb,eAAe;EACf,aAAa;AACf;;AAEA;EACE,WAAW;EACX,eAAe;EACf,cAAc;EACd,0BAA0B;EAC1B,aAAa;EACb,mBAAmB;AACrB;;AAEA;;EAEE,mBAAmB;EACnB,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,qBAAqB;EACrB,WAAW;AACb;;AAEA;EACE,kBAAkB;EAClB,SAAS;EACT,gBAAgB;EAChB,8BAA8B;EAC9B,UAAU;EACV,WAAW;EACX,mBAAmB;AACrB",
                sourcesContent: [":root {\n  --reach-menu-button: 1;\n}\n\n.list {\n  background: #fff;\n  border: 1px solid rgb(216, 216, 216);\n  border-radius: 3px;\n  box-shadow: 0 1px 5px rgba(0, 0, 0, 0.1);\n  font-size: 14px;\n  font-style: normal;\n  font-weight: normal;\n  left: 0;\n  min-width: 170px;\n  outline: none;\n  padding: 10px 0;\n  z-index: 1000;\n}\n\n.item {\n  color: #333;\n  cursor: pointer;\n  display: block;\n  padding: 7px 40px 7px 20px;\n  outline: none;\n  white-space: nowrap;\n}\n\n.item:hover,\n.item:focus {\n  background: #f3f3f3;\n  text-decoration: none;\n  color: #333;\n}\n\n.spacer {\n  display: inline-block;\n  width: 10px;\n}\n\n.invisible {\n  position: absolute;\n  top: auto;\n  overflow: hidden;\n  clip: rect(1px, 1px, 1px, 1px);\n  width: 1px;\n  height: 1px;\n  white-space: nowrap;\n}\n"],
                sourceRoot: ""
            }]), a.locals = {
                list: "vb0q01gYhxX6xjoZDd0O4Qb7TxhiDaKD",
                item: "OZgYUTQTaNinWRRb5SyjeQ8WEtA09RuF",
                spacer: "p1JvbEyYxbSfz1_7MmGKUQzT0SOap8Vu",
                invisible: "IJDXXdfgVXcY6MRd9u66HghwrbdhBtJv"
            }, e.Z = a
        }
    }
]);