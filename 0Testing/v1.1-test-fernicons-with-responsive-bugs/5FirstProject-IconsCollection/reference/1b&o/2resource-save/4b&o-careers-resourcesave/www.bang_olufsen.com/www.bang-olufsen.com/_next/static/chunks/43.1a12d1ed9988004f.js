"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [43], {
        43: function(e, t, r) {
            r.r(t), r.d(t, {
                default: function() {
                    return s
                }
            });
            var i = r(90849),
                n = r(60042),
                o = r.n(n),
                c = (r(27378), r(41408).ZP.div.withConfig({
                    componentId: "sc-1czf2pm-0"
                })(["&.a-spacer{position:relative;width:100vw;background:", ";height:5vh;@media ", "{height:10vh;}&.-compact{height:5vh;@media ", "{height:10vh;}}&.-immersive{height:10vh;@media ", "{height:20vh;}}}"], (function(e) {
                    var t, r;
                    return (null === e || void 0 === e ? void 0 : e.backgroundColor) || (null === e || void 0 === e || null === (t = e.theme) || void 0 === t || null === (r = t.colors) || void 0 === r ? void 0 : r.WHITE)
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }))),
                u = r(24246);

            function a(e, t) {
                var r = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var i = Object.getOwnPropertySymbols(e);
                    t && (i = i.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), r.push.apply(r, i)
                }
                return r
            }

            function m(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var r = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? a(Object(r), !0).forEach((function(t) {
                        (0, i.Z)(e, t, r[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(r)) : a(Object(r)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(r, t))
                    }))
                }
                return e
            }
            var s = function(e) {
                var t = e.size,
                    r = e.className,
                    i = o()(r, "a-spacer", {
                        "-compact": "Compact" === t,
                        "-immersive": "Immersive" === t
                    });
                return (0, u.jsx)(c, m(m({}, e), {}, {
                    className: i,
                    "data-testid": "spacer"
                }))
            }
        }
    }
]);