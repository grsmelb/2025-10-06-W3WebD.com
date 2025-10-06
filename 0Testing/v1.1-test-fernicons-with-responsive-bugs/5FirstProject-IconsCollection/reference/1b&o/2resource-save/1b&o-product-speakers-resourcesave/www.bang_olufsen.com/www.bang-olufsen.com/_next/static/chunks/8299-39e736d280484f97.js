"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
    [8299], {
        8299: function(e, t, o) {
            o.d(t, {
                Z: function() {
                    return k
                }
            });
            var a = o(43350),
                r = o(80040),
                n = o(59307),
                i = o(48415),
                s = o(73667),
                m = o(3117),
                c = o(90849),
                p = o(27378),
                l = o(9385),
                d = o.n(l),
                u = o(73546),
                g = (0, o(41408).iv)(["&.a-componentGenerator{.row.-left{justify-content:left;}.m-textAndImage.-categoryTile{padding:0 5px;margin:60px 0;@media ", "{display:inline-block;width:33.333%;padding:0 10px;}@media ", "{padding:0 18px 0 30px;&:nth-child(3n){padding:0 30px;}}@media ", "{padding:0 18px 0 36px;}}.m-text + div > .o-hero,.m-videoPlayer.-responsive{margin-top:30px;@media ", "{margin-top:90px;}}}"], (function(e) {
                    return e.theme.mediaQuery.small
                }), (function(e) {
                    return e.theme.mediaQuery.medium
                }), (function(e) {
                    return e.theme.mediaQuery.large
                }), (function(e) {
                    return e.theme.mediaQuery.small
                })),
                x = o(34869),
                I = o(57863),
                v = o(48787),
                A = o(45332),
                y = o(24246);

            function b(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function P(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? b(Object(o), !0).forEach((function(t) {
                        (0, c.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : b(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }
            var O = function(e) {
                var t = e.newsLetterFormData,
                    o = e.componentProps,
                    a = e.pageType,
                    r = e.modalBgColor,
                    n = (0, p.useState)(!0),
                    i = n[0],
                    s = n[1],
                    m = null === t || void 0 === t ? void 0 : t.get("saleSignup"),
                    c = null === m || void 0 === m ? void 0 : m.getIn(["productCategoryConfig", "saleEndDate"]),
                    l = null === m || void 0 === m ? void 0 : m.getIn(["productCategoryConfig", "saleStartDate"]),
                    d = (0, v.te)({
                        saleStartDate: l,
                        saleEndDate: c
                    }),
                    u = d.saleStartTimediff,
                    g = d.saleEndTimediff,
                    x = u > 0 || g > 0;
                (0, p.useEffect)((function() {
                    s(x)
                }), []);
                var b = null === t || void 0 === t ? void 0 : t.getIn(["saleSignup", "colorTheme"]),
                    O = b && "dark" === b,
                    f = null === t || void 0 === t ? void 0 : t.getIn(["saleSignup", "backgroundColor"]),
                    D = null === t || void 0 === t ? void 0 : t.getIn(["saleSignup", "outerBackgroundColor"]),
                    C = null === t || void 0 === t ? void 0 : t.getIn(["saleSignup", "textColor"]);
                return i ? (0, y.jsx)(I.Z, {
                    newsLetterFormData: t,
                    isSaleTimer: !0,
                    textColor: C,
                    isDarkTheme: O,
                    backgroundColor: f,
                    outerBackgroundColor: D,
                    hideSaleTimer: function(e) {
                        s(e)
                    },
                    pageType: a
                }) : (0, y.jsx)(A.default, P(P({}, o), {}, {
                    modalBgColor: r,
                    pageType: a
                }))
            };
            O.displayName = "SaleTimerWrapper";
            var f, D = O,
                C = o(96686),
                S = o(948),
                h = "data",
                T = {
                    Carousel: {
                        shopByImage: "shopByImage",
                        multiple: "carouselMultiple"
                    },
                    GalleryGrid: "galleryGrid",
                    Hero: "hero",
                    HeroImmersiveA1: "heroImmersiveA1",
                    HeroImmersiveA2: "heroImmersiveA2",
                    HeroImmersiveA3: "heroImmersiveA3",
                    HeroImmersiveB1: "heroImmersiveB1",
                    HeroImmersiveB2: "heroImmersiveB2",
                    HeroImmersiveC1: "heroImmersiveC1",
                    HeroImmersiveC2: "heroImmersiveC2",
                    HeroOneFeature: "heroOneFeature",
                    ProductCrossSellUpSellWrapper: "productCrossSell",
                    ProductListing: "productListing",
                    Quote: "quote",
                    RecommendedStory: "recommendedStory",
                    Text: "text",
                    IframeComponent: "iframe",
                    TextAndIcon: "textAndIcon",
                    CampaignOverlay: "campaignOverlay",
                    campaignSignup: "campaignSignup",
                    TextAndImage: {
                        left: "textAndImageLeft",
                        right: "textAndImageRight",
                        background: "textAndImageSixteenNine",
                        categoryTile: "textAndImageCategoryTile",
                        leftOneFeatureV2: "textAndImageLeftOneFeatureV2",
                        twoFeature: "textAndImageTwoFeature",
                        textAndImageLeftHoliday: "textAndImageLeftHoliday",
                        textAndImageRightHoliday: "textAndImageRightHoliday",
                        textAndImageOverlayImmersive: "textAndImageOverlayImmersive",
                        textAndImageOverlayCompact: "textAndImageOverlayCompact",
                        textAndImageExplore: "textAndImageExplore"
                    },
                    VideoPlayer: "media",
                    VideoSixteenNine: "mediaSixteenNine",
                    TitleAndImage: "partners",
                    Features: "features",
                    RichMediaPlayer: "richMediaGalleryComponent",
                    MoodBoard: "moodBoardV1",
                    StoryListItem: "storyListing",
                    AppStoreButtons: "appStoreLinks",
                    ProductComparisonTable: "pdpProductsComparisonTeaser",
                    faqListItem: "faqListing",
                    ExpertReviews: "expertReviews",
                    CustomisePromo: "textAndImageCustomizer",
                    SupportCallComp: "supportCallComponent",
                    ImageMosaic: "mosaic",
                    SalesSupportComp: "salesSupportComponent",
                    TextImmersive: "TextImmersive",
                    ImmersiveStoryCarouselListing: "textAndBGImageWithOverlayCarouselListing",
                    guidance: "guidanceV1",
                    guidanceWithFilter: "guidanceV2",
                    ImmersiveFeaturedStories: "featuredStoryListing",
                    HeroV2: "heroV2",
                    mediaSixteenNine: "mediaSixteenNine",
                    ProductCategoriesSection: "productCategories",
                    HeroV3: "herov3",
                    HeroSplit: "herosplit",
                    heroscrollbanner: "heroscrollbanner",
                    HeroSixteenNine: "hero16x9",
                    HeroV4: "herov4",
                    HeroSplitV2: "herosplitv2",
                    mosaiclisting: "mosaiclisting",
                    countdown: "countdown",
                    Spacer: "Spacer",
                    questionAnswerListing: "questionAnswerListing",
                    NewCarousel: "carousel",
                    storyCarouselByTag: "storyCarouselByTag",
                    StoryHeader: "storyHeader"
                },
                N = (f = {}, (0, c.Z)(f, T.Hero, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        fadeContentOnScroll: !0
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroImmersiveA1, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        immersiveVariant: T.HeroImmersiveA1
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroImmersiveA2, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        immersiveVariant: T.HeroImmersiveA2
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroImmersiveA3, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        immersiveVariant: T.HeroImmersiveA3
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroImmersiveB1, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        immersiveVariant: T.HeroImmersiveB1
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroImmersiveB2, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        immersiveVariant: T.HeroImmersiveB2
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroImmersiveC1, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        immersiveVariant: T.HeroImmersiveC1
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroImmersiveC2, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        immersiveVariant: T.HeroImmersiveC2
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroOneFeature, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        heroVariant: T.HeroOneFeature
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroV2, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        heroVariant: T.HeroV2
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroV3, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        heroVariant: T.HeroV3
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroV4, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        heroVariant: T.HeroV4
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroSplit, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        heroVariant: T.HeroSplit
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroSplitV2, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        heroVariant: T.HeroSplitV2
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.HeroSixteenNine, {
                    componentName: "Hero",
                    customDataProp: "hero",
                    customProps: {
                        heroVariant: T.HeroSixteenNine
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.left, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.fiftyFifty,
                        slnId: "atm_TextAndImageVariants"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.right, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.fiftyFifty,
                        imageRight: !0,
                        slnId: "atm_TextAndImageVariants.fiftyFifty"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.background, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.background,
                        slnId: "atm_TextAndImageVariants.background"
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.leftOneFeatureV2, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.leftOneFeature,
                        slnId: "atm_TextAndImageVariants.leftOneFeature"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.twoFeature, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.twoFeature,
                        slnId: "atm_TextAndImageVariants.twoFeature"
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.textAndImageLeftHoliday, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.textAndImageLeftHoliday,
                        slnId: "atm_TextAndImageVariants.textAndImageLeftHoliday"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.textAndImageRightHoliday, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.textAndImageRightHoliday,
                        slnId: "atm_TextAndImageVariants.textAndImageRightHoliday"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.textAndImageOverlayImmersive, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.textAndImageOverlayImmersive,
                        slnId: "atm_TextAndImageVariants.textAndImageOverlayImmersive"
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.textAndImageOverlayCompact, {
                    componentName: "TextAndImage",
                    customProps: {
                        variant: C.ZP.textAndImageOverlayCompact,
                        slnId: "atm_TextAndImageVariants.textAndImageOverlayCompact"
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.TextAndImage.textAndImageExplore, {
                    componentName: "TextAndImageExplore",
                    customProps: {
                        slnId: "atm_textAndImageExplore"
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.RecommendedStory, {
                    componentName: "RecommendedStory",
                    isDataAtRoot: !1,
                    isObjectExpected: !0,
                    customProps: {
                        slnId: "atm_RecommendedStory"
                    }
                }), (0, c.Z)(f, T.Text, {
                    componentName: "Text",
                    customProps: {
                        modifierClasses: "col-xs-12 col-sm-offset-2 col-sm-8 col-lg-offset-3 col-lg-6",
                        slnId: "atm_Text"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.ProductCrossSellUpSellWrapper, {
                    componentName: "ProductCrossSellUpSellWrapper",
                    isDataAtRoot: !1,
                    isObjectExpected: !1,
                    customProps: {
                        hasSticky: !0,
                        slnId: "atm_ProductCrossSellUpSellWrapper"
                    }
                }), (0, c.Z)(f, T.ProductListing, {
                    componentName: "ProductListing",
                    customDataProp: "items",
                    customProps: {
                        template: "product",
                        slnId: "atm_ProductListing"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.mosaiclisting, {
                    componentName: "MosaicListing",
                    customDataProp: "items",
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.VideoPlayer, {
                    componentName: "VideoPlayer",
                    customDataProp: "mediaItem",
                    customProps: {
                        responsive: !0,
                        slnId: "atm_VideoPlayer"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.VideoSixteenNine, {
                    componentName: "VideoSixteenNine",
                    customDataProp: "mediaItem",
                    customProps: {
                        responsive: !0,
                        slnId: "atm_VideoVideoSixteenNine"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.Quote, {
                    componentName: "Quote",
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.GalleryGrid, {
                    componentName: "GalleryGrid",
                    customDataProp: "gallery",
                    isDataAtRoot: !1,
                    isObjectExpected: !1,
                    customProps: {
                        slnId: "atm_GalleryGrid"
                    }
                }), (0, c.Z)(f, T.Carousel.shopByImage, {
                    componentName: "CarouselShopByImage",
                    customProps: {
                        variant: S.ZC.shopByImage,
                        slnId: "atm_shopByImage"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.TextAndImage.categoryTile, {
                    componentName: "TextAndImage",
                    customProps: {
                        className: "col-sm-4",
                        variant: C.ZP.categoryTile,
                        slnId: "atm_TextAndImageVariants.categoryTile"
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.TextAndIcon, {
                    componentName: "TextAndIcon",
                    customProps: {
                        isNewsLetter: !0,
                        slnId: "atm_TextAndIcon"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.CampaignOverlay, {
                    componentName: "TextAndIcon",
                    customProps: {
                        isCampaignOverlay: !0,
                        slnId: "atm_TextAndIcon"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.campaignSignup, {
                    componentName: "NewsLetterModal",
                    customProps: {
                        isCampaignOverlay: !0,
                        slnId: "atm_TextAndIcon"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.Carousel.multiple, {
                    componentName: "CarouselMultiple",
                    isDataAtRoot: !1,
                    isObjectExpected: !0,
                    customProps: {
                        slnId: "atm_CarouselMultiple"
                    }
                }), (0, c.Z)(f, T.TitleAndImage, {
                    componentName: "TitleAndImage",
                    customProps: {
                        className: "col-sm-4",
                        variant: C.ZP.categoryTile,
                        slnId: "atm_TextAndTitleVariants"
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.Features, {
                    componentName: "Features",
                    customDataProp: "features",
                    customProps: {
                        slnId: "atm_Features"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.MoodBoard, {
                    componentName: "MoodBoard",
                    customProps: {
                        slnId: "atm_MoodBoard"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.RichMediaPlayer, {
                    componentName: "RichMediaPlayer",
                    customProps: {
                        slnId: "atm_RichMediaPlayer"
                    },
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.StoryListItem, {
                    componentName: "ProductListing",
                    customDataProp: "items",
                    customProps: {
                        template: "storyListing",
                        slnId: "atm_storyListing"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.faqListItem, {
                    componentName: "ProductListing",
                    customDataProp: "items",
                    customProps: {
                        template: "product",
                        slnId: "atm_FaqListing"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.AppStoreButtons, {
                    componentName: "AppStoreButtons",
                    customDataProp: "appStoreLinks",
                    customProps: {
                        slnId: "atm_appStoreLinks"
                    },
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.ProductComparisonTable, {
                    componentName: "ProductComparisonTable",
                    customDataProp: "productComparisonData",
                    isDataAtRoot: !1,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.ExpertReviews, {
                    componentName: "ProductReviews",
                    customDataProp: "reviewData",
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.ImageMosaic, {
                    componentName: "ImageMosaic",
                    customProp: "mosaic",
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.IframeComponent, {
                    componentName: "IframeComponent",
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.SupportCallComp, {
                    componentName: "SupportCallComp",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.CustomisePromo, {
                    componentName: "CustomisePromo",
                    customDataProp: "promoData",
                    isDataAtRoot: !0,
                    isObjectExpected: !0
                }), (0, c.Z)(f, T.SalesSupportComp, {
                    componentName: "SalesSupportComp",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.TextImmersive, {
                    componentName: "TextImmersive",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.ImmersiveStoryCarouselListing, {
                    componentName: "ImmersiveStoryCarouselListing",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.guidance, {
                    componentName: "Guidance",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.guidanceWithFilter, {
                    componentName: "Guidance",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.ImmersiveFeaturedStories, {
                    componentName: "FeaturedStoryListing",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.mediaSixteenNine, {
                    componentName: "VideoReignite",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.ProductCategoriesSection, {
                    componentName: "ProductCategoriesSection",
                    isDataAtRoot: !0,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.heroscrollbanner, {
                    componentName: "HeroScrollBanner",
                    isDataAtRoot: !0,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.countdown, {
                    componentName: "CountDown",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.Spacer, {
                    componentName: "Spacer",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.questionAnswerListing, {
                    componentName: "QuestionAnswerListing",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.NewCarousel, {
                    componentName: "NewCarousel",
                    isDataAtRoot: !0,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.storyCarouselByTag, {
                    componentName: "StoryCarousel",
                    isDataAtRoot: !0,
                    isObjectExpected: !1
                }), (0, c.Z)(f, T.StoryHeader, {
                    componentName: "StoryHeader",
                    isDataAtRoot: !1,
                    isObjectExpected: !1
                }), f),
                Z = o(6234),
                j = o(7174);

            function R(e, t) {
                var o = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var a = Object.getOwnPropertySymbols(e);
                    t && (a = a.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), o.push.apply(o, a)
                }
                return o
            }

            function E(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var o = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? R(Object(o), !0).forEach((function(t) {
                        (0, c.Z)(e, t, o[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(o)) : R(Object(o)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(o, t))
                    }))
                }
                return e
            }

            function H(e) {
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
                    var o, a = (0, m.Z)(e);
                    if (t) {
                        var r = (0, m.Z)(this).constructor;
                        o = Reflect.construct(a, arguments, r)
                    } else o = a.apply(this, arguments);
                    return (0, s.Z)(this, o)
                }
            }
            var L = function(e) {
                (0, i.Z)(o, e);
                var t = H(o);

                function o() {
                    var e;
                    (0, a.Z)(this, o);
                    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++) i[s] = arguments[s];
                    return e = t.call.apply(t, [this].concat(i)), (0, c.Z)((0, n.Z)(e), "getComponentSettings", (function(t) {
                        return e.props.customSettings && e.props.customSettings[t] ? e.props.customSettings[t] : N[t]
                    })), (0, c.Z)((0, n.Z)(e), "getComponent", (function(t) {
                        return t && e.props.componentList[t]
                    })), (0, c.Z)((0, n.Z)(e), "getComponentProps", (function(t, o, a) {
                        var r = e.props,
                            n = r.locale,
                            i = r.viewportInfo,
                            s = r.categoryLabels,
                            m = r.toggleHeader,
                            c = r.toggleSupportingNav,
                            p = r.isFirstOnPage,
                            l = r.pageURL,
                            d = r.country,
                            u = r.globalCountry,
                            g = r.pageType,
                            x = t.componentName,
                            I = t.customDataProp,
                            v = t.customProps,
                            A = t.isDataAtRoot,
                            y = t.isObjectExpected,
                            b = i && i.getIn(["isSmallerThan", "small"]),
                            P = null === o || void 0 === o ? void 0 : o.get("cardType"),
                            O = {
                                locale: n,
                                country: d || u,
                                disableParallax: b,
                                overlapHeader: p && x.toLowerCase() === T.Hero.toLowerCase() && 0 === a && P !== j.dK && (!b || P !== j.IO),
                                toggleHeader: m,
                                toggleSupportingNav: c,
                                pageURL: l,
                                position: a,
                                backgroundColor: o.get("backgroundColor") || "",
                                textColor: o.get("textColor") || "",
                                pageType: g
                            },
                            f = Object.assign(O, v);
                        f.categoryLabels = s;
                        var D = o.get("item"),
                            C = y ? D && D.get(0) : D,
                            S = A ? o : C;
                        return f[I || h] = S, f
                    })), e
                }
                return (0, r.Z)(o, [{
                    key: "render",
                    value: function() {
                        var e = this,
                            t = this.props,
                            o = t.className,
                            a = t.items,
                            r = t.addToCartSuccessAction,
                            n = t.pageType,
                            i = t.trackAnalytics,
                            s = t.listName,
                            m = t.isServer,
                            c = t.level,
                            p = t.viewportInfo,
                            l = t.immersiveComponents,
                            u = t.slugConfig,
                            g = void 0 === u ? {} : u,
                            x = t.productName,
                            v = t.getVariantStockAvailability,
                            A = t.availableQuant,
                            b = t.componentList,
                            P = t.serverRenderFirstImage,
                            O = t.categoryLabels,
                            f = t.globalMsgHeight,
                            C = t.deviceInfo,
                            S = t.readMoreLabel,
                            h = f && d()(f.expressNotificationBannerHeight + f.countryNotificationHeight + f.unsupportedBrowserBannerHeight) || 0;
                        return a && a.size > 0 ? (0, y.jsx)("div", {
                            className: "".concat(o, " a-componentGenerator"),
                            children: a.map((function(t, o) {
                                var a = t.get("cardType"),
                                    d = "".concat(a, "_").concat(o),
                                    u = t.get("backgroundColor"),
                                    f = t.get("textColor"),
                                    T = null === t || void 0 === t ? void 0 : t.get("colorTheme"),
                                    N = T && "dark" === T,
                                    Z = null === t || void 0 === t ? void 0 : t.get("textAlignment"),
                                    j = null === t || void 0 === t ? void 0 : t.get("backgroundSecondaryColor"),
                                    R = null === t || void 0 === t ? void 0 : t.get("backgroundImage"),
                                    H = null === t || void 0 === t ? void 0 : t.getIn(["item", 0, "quoteSourceDesignationTextColor"]),
                                    L = null === t || void 0 === t ? void 0 : t.getIn(["item", 0, "quoteSourceTextColor"]),
                                    w = null === t || void 0 === t ? void 0 : t.getIn(["item", 0, "quoteTextColor"]),
                                    V = null === t || void 0 === t ? void 0 : t.get("itemHorizontalAlignment"),
                                    k = null === t || void 0 === t ? void 0 : t.get("itemVerticalAlignment"),
                                    B = null === t || void 0 === t ? void 0 : t.get("size"),
                                    _ = a && e.getComponentSettings(a),
                                    F = "TextImmersive" === a || "featuredStoryListing" === a,
                                    M = t.get("sectionAnchorId"),
                                    G = null === t || void 0 === t ? void 0 : t.get("countdownExpirationDate");
                                if (_) {
                                    var q = _.componentName,
                                        Q = b && e.getComponent(q),
                                        U = b && e.getComponentProps(_, t, o),
                                        W = U.data,
                                        z = "campaignOverlay" === a || "campaignSignup" === a;
                                    if ("campaignOverlay" === a) return U.isDarkTheme = N, U.formTextColor = f, (0, y.jsx)(D, {
                                        newsLetterFormData: W,
                                        componentProps: U,
                                        pageType: n,
                                        modalBgColor: u,
                                        viewportInfo: p
                                    }, d);
                                    if ("campaignSignup" === a) return (0, y.jsx)(I.Z, {
                                        newsLetterFormData: W,
                                        newNewsLetter: !0,
                                        backgroundColor: u,
                                        pageType: n,
                                        viewportInfo: p,
                                        formTextColor: f,
                                        isDarkTheme: N
                                    }, d);
                                    if (Q && !z) return (0, y.jsx)(Q, E(E({}, U), {}, {
                                        serverRenderFirstImage: P,
                                        addToCartSuccessAction: r,
                                        pageType: n,
                                        trackAnalytics: i,
                                        listName: s,
                                        isServer: m,
                                        level: c,
                                        title: t.get("title"),
                                        subTitle: t.get("subtitle"),
                                        viewportInfo: p,
                                        immersiveComponents: l,
                                        slugConfig: g,
                                        productName: x,
                                        getVariantStockAvailability: v,
                                        availableQuant: A,
                                        description: null === t || void 0 === t ? void 0 : t.get("description"),
                                        cardType: a,
                                        colorTheme: T,
                                        cmsLabel: O,
                                        itemId: F && M,
                                        bannerTotalHeight: h,
                                        textAlignment: Z,
                                        deviceInfo: C,
                                        backgroundSecondaryColor: j,
                                        backgroundImage: R,
                                        countdownExpirationDate: G,
                                        quoteSourceDesignationTextColor: H,
                                        quoteSourceTextColor: L,
                                        quoteTextColor: w,
                                        readMoreLabel: S,
                                        itemHorizontalAlignment: V,
                                        itemVerticalAlignment: k,
                                        size: B
                                    }), d)
                                }
                                return null
                            }))
                        }) : null
                    }
                }]), o
            }(p.PureComponent);
            (0, c.Z)(L, "ITEM_TYPES", T), L.displayName = "ComponentGeneratorOptimized";
            var w = (0, Z.Z)(L),
                V = (0, x.Z)(w, g),
                k = (0, u.connect)((function(e) {
                    return {
                        locale: e.getIn(["global", "globalData", "userlanguage"]),
                        categoryLabels: e.getIn(["global", "cmsData", "Global"]),
                        viewportInfo: e.getIn(["global", "globalData", "viewportInfo"]),
                        pageURL: e.getIn(["global", "globalData", "pageUrl"]),
                        globalCountry: e.getIn(["global", "globalData", "country"]),
                        deviceInfo: e.getIn(["global", "globalData", "deviceInfo"]),
                        readMoreLabel: e.getIn(["global", "cmsData", "Global", "readMoreLabel"])
                    }
                }), null)(V)
        }
    }
]);