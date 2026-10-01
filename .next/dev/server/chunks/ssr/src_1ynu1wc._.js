module.exports = [
"[project]/src/components/sections/Hero.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Hero
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tours.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Hero() {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [tourInterest, setTourInterest] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [guests, setGuests] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const handleStrip = (e)=>{
        e.preventDefault();
        const params = new URLSearchParams();
        if (tourInterest) params.set("tour", tourInterest);
        if (date) params.set("date", date);
        if (guests) params.set("guests", guests);
        router.push(`/contact?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "relative h-screen min-h-[600px] max-h-[900px] overflow-hidden",
        "aria-label": "Hero",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85",
                alt: "Dramatic Cape Breton coastal cliffs and ocean",
                fill: true,
                priority: true,
                sizes: "100vw",
                className: "object-cover ken-burns"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 27,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "hero-overlay absolute inset-0"
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 35,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative z-10 h-full flex flex-col justify-end pb-32 md:pb-36",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-xl mx-auto px-6 lg:px-10 w-full",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "max-w-2xl",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "inline-block font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne mb-6",
                                children: "Cape Breton & Nova Scotia, Canada"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "divider-champagne mb-6"
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 45,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                className: "font-serif text-4xl md:text-6xl lg:text-7xl text-white leading-[1.08] mb-6",
                                children: [
                                    "Discover Cape Breton,",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 49,
                                        columnNumber: 36
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("em", {
                                        className: "not-italic text-champagne",
                                        children: "One Beautiful Stop"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 50,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("br", {}, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 50,
                                        columnNumber: 80
                                    }, this),
                                    "at a Time."
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 48,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "font-sans text-base md:text-lg text-white/80 leading-relaxed max-w-xl mb-10",
                                children: "Cinematic coastal scenery, Gaelic heritage, and the legendary Cabot Trail — explored at your pace with a dedicated private guide."
                            }, void 0, false, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 55,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/tours",
                                        className: "btn-primary",
                                        children: [
                                            "Explore Tours",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                                width: "16",
                                                height: "16",
                                                viewBox: "0 0 16 16",
                                                fill: "none",
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                                    d: "M2 8h12M9 3l5 5-5 5",
                                                    stroke: "currentColor",
                                                    strokeWidth: "1.5",
                                                    strokeLinecap: "round",
                                                    strokeLinejoin: "round"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 64,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/src/components/sections/Hero.tsx",
                                                lineNumber: 63,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 61,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: "/private-tours",
                                        className: "btn-outline",
                                        children: "Plan a Private Tour"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                        lineNumber: 67,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/sections/Hero.tsx",
                                lineNumber: 60,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/sections/Hero.tsx",
                        lineNumber: 40,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-0 left-0 right-0 z-20 bg-navy/90 backdrop-blur-sm border-t border-white/10",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-xl mx-auto px-6 lg:px-10 py-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                            onSubmit: handleStrip,
                            className: "flex flex-col sm:flex-row items-stretch sm:items-end gap-3",
                            "aria-label": "Quick enquiry",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-sans text-[0.65rem] tracking-widest uppercase text-white/50",
                                            children: "Tour Interest"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 84,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                            value: tourInterest,
                                            onChange: (e)=>setTourInterest(e.target.value),
                                            className: "bg-white/10 border border-white/20 text-white font-sans text-sm px-3 py-2 focus:outline-none focus:border-champagne",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: "",
                                                    className: "text-charcoal bg-white",
                                                    children: "— Any tour —"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                                    lineNumber: 92,
                                                    columnNumber: 17
                                                }, this),
                                                __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["TOURS"].map((t)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: t.slug,
                                                        className: "text-charcoal bg-white",
                                                        children: t.title
                                                    }, t.slug, false, {
                                                        fileName: "[project]/src/components/sections/Hero.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, this))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 87,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 83,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-sans text-[0.65rem] tracking-widest uppercase text-white/50",
                                            children: "Preferred Date"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 101,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "date",
                                            value: date,
                                            onChange: (e)=>setDate(e.target.value),
                                            className: "bg-white/10 border border-white/20 text-white font-sans text-sm px-3 py-2 focus:outline-none focus:border-champagne [color-scheme:dark]"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 104,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex-1 flex flex-col gap-1",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "font-sans text-[0.65rem] tracking-widest uppercase text-white/50",
                                            children: "Guests"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 112,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "number",
                                            min: "1",
                                            placeholder: "2",
                                            value: guests,
                                            onChange: (e)=>setGuests(e.target.value),
                                            className: "bg-white/10 border border-white/20 text-white font-sans text-sm px-3 py-2 focus:outline-none focus:border-champagne placeholder-white/30"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/sections/Hero.tsx",
                                            lineNumber: 115,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 111,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    className: "btn-primary flex-shrink-0 self-end sm:self-auto",
                                    children: "Request Availability"
                                }, void 0, false, {
                                    fileName: "[project]/src/components/sections/Hero.tsx",
                                    lineNumber: 124,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "font-sans text-[0.65rem] text-white/35 mt-2",
                            children: "This form prefills an enquiry — it does not confirm availability or take payment."
                        }, void 0, false, {
                            fileName: "[project]/src/components/sections/Hero.tsx",
                            lineNumber: 131,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/sections/Hero.tsx",
                    lineNumber: 77,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/sections/Hero.tsx",
                lineNumber: 76,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/sections/Hero.tsx",
        lineNumber: 25,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/FaqAccordion.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function FaqAccordion({ items, light = false }) {
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const border = light ? "border-white/20" : "border-ivory-warm";
    const questionColor = light ? "text-ivory" : "text-navy";
    const answerColor = light ? "text-ivory/75" : "text-muted";
    const iconColor = light ? "text-champagne" : "text-teal";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y divide-opacity-20",
        style: {
            borderTop: `1px solid`,
            borderColor: light ? "rgba(255,255,255,0.2)" : "#e8e0d4"
        },
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: `1px solid`,
                    borderColor: light ? "rgba(255,255,255,0.2)" : "#e8e0d4"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen(open === i ? null : i),
                        className: `w-full flex items-start justify-between gap-4 py-5 text-left ${questionColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne`,
                        "aria-expanded": open === i,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif text-base md:text-lg leading-snug",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex-shrink-0 mt-0.5 transition-transform duration-300 ${iconColor} ${open === i ? "rotate-180" : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                        d: "M5 7.5l5 5 5-5",
                                        stroke: "currentColor",
                                        strokeWidth: "1.5",
                                        strokeLinecap: "round",
                                        strokeLinejoin: "round"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                                        lineNumber: 35,
                                        columnNumber: 17
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                                    lineNumber: 34,
                                    columnNumber: 15
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                                lineNumber: 33,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                        lineNumber: 27,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: open === i ? "400px" : "0",
                            overflow: "hidden",
                            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: `font-sans text-sm md:text-base leading-relaxed pb-5 ${answerColor}`,
                            children: item.answer
                        }, void 0, false, {
                            fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                            lineNumber: 46,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                        lineNumber: 39,
                        columnNumber: 11
                    }, this)
                ]
            }, i, true, {
                fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                lineNumber: 26,
                columnNumber: 9
            }, this))
    }, void 0, false, {
        fileName: "[project]/src/components/ui/FaqAccordion.tsx",
        lineNumber: 24,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/ScrollReveal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
function ScrollReveal({ children, delay = 0, className = "" }) {
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const el = ref.current;
        if (!el) return;
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) return;
        el.style.opacity = "0";
        el.style.transform = "translateY(28px)";
        el.style.transition = `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`;
        const obs = new IntersectionObserver(([entry])=>{
            if (entry.isIntersecting) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                obs.unobserve(el);
            }
        }, {
            threshold: 0.15
        });
        obs.observe(el);
        return ()=>obs.disconnect();
    }, [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ScrollReveal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/SectionHeader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SectionHeader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
"use client";
;
function SectionHeader({ eyebrow, heading, body, align = "center", light = false }) {
    const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";
    const textColor = light ? "text-ivory" : "text-navy";
    const bodyColor = light ? "text-ivory/75" : "text-muted";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `flex flex-col gap-4 ${alignClass}`,
        children: [
            eyebrow && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: `text-xs font-sans font-semibold tracking-[0.2em] uppercase ${light ? "text-champagne" : "text-teal"}`,
                children: eyebrow
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 25,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "divider-champagne"
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: `font-serif text-3xl md:text-4xl lg:text-5xl leading-tight ${textColor}`,
                children: heading
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 34,
                columnNumber: 7
            }, this),
            body && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: `max-w-2xl text-base md:text-lg leading-relaxed font-sans ${bodyColor}`,
                children: body
            }, void 0, false, {
                fileName: "[project]/src/components/ui/SectionHeader.tsx",
                lineNumber: 40,
                columnNumber: 9
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/SectionHeader.tsx",
        lineNumber: 23,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/components/ui/TourCard.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const CATEGORY_LABELS = {
    coastal: "Coastal",
    cultural: "Cultural",
    highland: "Highland",
    private: "Private"
};
function TourCard({ tour, priority = false }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
        href: `/tours/${tour.slug}`,
        className: "tour-card group block bg-white overflow-hidden border border-ivory-warm hover:shadow-xl transition-shadow duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-64 md:h-72 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                        src: tour.heroImage,
                        alt: tour.title,
                        fill: true,
                        sizes: "(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw",
                        className: "object-cover tour-card-img",
                        priority: priority
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 27,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "absolute top-4 left-4 bg-champagne text-navy-deep text-[0.7rem] font-semibold font-sans tracking-widest uppercase px-3 py-1",
                        children: CATEGORY_LABELS[tour.category] ?? tour.category
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 37,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/TourCard.tsx",
                lineNumber: 26,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 md:p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif text-xl md:text-2xl text-navy leading-snug mb-2",
                        children: tour.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-sm text-muted leading-relaxed line-clamp-3 mb-5",
                        children: tour.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-4 border-t border-ivory-warm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs font-semibold tracking-widest uppercase text-teal",
                                children: tour.priceFrom ? `From ${tour.priceFrom}` : "Request Pricing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TourCard.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs font-semibold tracking-widest uppercase text-navy flex items-center gap-1.5 group-hover:text-teal transition-colors",
                                children: [
                                    "View Tour",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 14 14",
                                        fill: "none",
                                        className: "translate-x-0 group-hover:translate-x-1 transition-transform duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            d: "M1 7h12M8 2l5 5-5 5",
                                            stroke: "currentColor",
                                            strokeWidth: "1.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/ui/TourCard.tsx",
                                            lineNumber: 59,
                                            columnNumber: 15
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/ui/TourCard.tsx",
                                        lineNumber: 58,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/ui/TourCard.tsx",
                                lineNumber: 56,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 52,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/ui/TourCard.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/ui/TourCard.tsx",
        lineNumber: 21,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/lib/tours.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// ─────────────────────────────────────────────────────────────────────────────
// TOUR CATALOGUE — DRAFT FOR OWNER REVIEW
// All itinerary details, durations, and pricing fields marked `null` require
// confirmation from the business owner before publishing publicly.
// ─────────────────────────────────────────────────────────────────────────────
__turbopack_context__.s([
    "TOURS",
    ()=>TOURS,
    "getRelatedTours",
    ()=>getRelatedTours,
    "getTourBySlug",
    ()=>getTourBySlug
]);
const UNSPLASH = {
    cabotCoast: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=80",
    oceanCliff: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?w=1600&q=80",
    beach: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1600&q=80",
    fortress: "https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?w=1600&q=80",
    harbor: "https://images.unsplash.com/photo-1519046904884-53103b34b206?w=1600&q=80",
    highland: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=80",
    lake: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1600&q=80",
    lighthouse: "https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1600&q=80",
    road: "https://images.unsplash.com/photo-1504701954957-2010ec3bcec1?w=1600&q=80",
    village: "https://images.unsplash.com/photo-1448375240586-882707db888b?w=1600&q=80",
    waterfront: "https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=1600&q=80",
    mistyForest: "https://images.unsplash.com/photo-1425082661705-1834bfd09dca?w=1600&q=80"
};
const TOURS = [
    {
        slug: "cabot-trail-coastal",
        title: "Cabot Trail Coastal Tour",
        subtitle: "A curated half-day along the legendary coastal highway",
        category: "coastal",
        heroImage: UNSPLASH.cabotCoast,
        galleryImages: [
            UNSPLASH.oceanCliff,
            UNSPLASH.lighthouse,
            UNSPLASH.road,
            UNSPLASH.harbor
        ],
        description: "Experience the most celebrated stretch of the Cabot Trail — dramatic ocean vistas, wind-carved headlands, and charming fishing villages at a comfortable, unhurried pace.",
        longDescription: "The Cabot Trail is widely regarded as one of the most spectacular coastal drives in North America. This curated experience focuses on the most breathtaking viewpoints and hidden coastal gems, giving you ample time at each stop to absorb the scenery, take photographs, and simply breathe in the salt air. Your local guide will share stories of the land, its Mi'kmaq heritage, and the Acadian and Scottish settlers who shaped the region's character.",
        highlights: [
            "Panoramic ocean lookouts over the Gulf of St. Lawrence",
            "Charming fishing villages and harbourside vistas",
            "Insider knowledge of the trail's finest viewpoints",
            "Comfortable, unhurried pace with flexible stops",
            "Stories of Cape Breton's rich cultural heritage"
        ],
        itinerary: [
            {
                title: "Departure",
                description: "Meet your guide at your agreed pickup point in the Sydney/Cape Breton area."
            },
            {
                title: "Coastal Lookouts",
                description: "Visit the trail's most dramatic oceanside viewpoints with uninterrupted Gulf of St. Lawrence panoramas."
            },
            {
                title: "Village & Harbour Stop",
                description: "Explore a traditional Cape Breton fishing community. Time to browse local craft shops or enjoy a coffee."
            },
            {
                title: "Return",
                description: "Return transfer to your starting point."
            }
        ],
        duration: null,
        groupSize: null,
        priceFrom: null,
        pickupInfo: "Contact us to discuss pickup arrangements. Flexible pickups available across the Cape Breton area.",
        accessibility: null,
        inclusions: null,
        exclusions: null,
        faqs: [
            {
                question: "Is this a private tour?",
                answer: "All our tours operate as private experiences — you will not be sharing the vehicle with strangers. Send an enquiry and we will tailor the day to your group."
            },
            {
                question: "Can we customise the stops?",
                answer: "Absolutely. We encourage you to share your interests when you enquire and we will build the itinerary around you."
            },
            {
                question: "What should I bring?",
                answer: "Comfortable walking shoes, layers for the coastal breeze, sunscreen, a camera, and a sense of adventure. We will cover everything else when we confirm your booking."
            }
        ],
        relatedSlugs: [
            "full-cabot-trail",
            "ingonish-beach-green-cove"
        ],
        draftNote: "DRAFT — duration, group size, and pricing to be confirmed by owner."
    },
    {
        slug: "full-cabot-trail",
        title: "Full Cabot Trail Experience",
        subtitle: "The complete circuit — an unforgettable full-day journey",
        category: "coastal",
        heroImage: UNSPLASH.road,
        galleryImages: [
            UNSPLASH.cabotCoast,
            UNSPLASH.highland,
            UNSPLASH.lake,
            UNSPLASH.mistyForest
        ],
        description: "Complete the entire Cabot Trail loop in one magnificent day — rugged highlands, sweeping ocean panoramas, serene lakes, and lush Cape Breton Highlands National Park.",
        longDescription: "For those who want the full story, the complete Cabot Trail circuit delivers Cape Breton's most iconic landscapes in a single, immersive journey. Wind through Cape Breton Highlands National Park, pause at the park's finest viewpoints, and travel the full arc from the Atlantic coast to the Gulf of St. Lawrence. This is the definitive Cape Breton experience — a road trip that stays with you long after you return home.",
        highlights: [
            "The complete 298 km Cabot Trail loop",
            "Cape Breton Highlands National Park",
            "Atlantic coast and Gulf of St. Lawrence scenery",
            "Highland plateau and valley landscapes",
            "Flexible lunch and photo stops throughout the day"
        ],
        itinerary: [
            {
                title: "Morning Departure",
                description: "Early start from your agreed pickup location."
            },
            {
                title: "Cape Breton Highlands National Park",
                description: "Enter the park and ascend to the highland plateau with sweeping valley views."
            },
            {
                title: "Northern Coast Viewpoints",
                description: "The trail's most dramatic northern coastal section, with stops at legendary lookouts."
            },
            {
                title: "Lunch Break",
                description: "Stop at a scenic location for lunch (own expense unless otherwise arranged)."
            },
            {
                title: "Afternoon Coastal Drive",
                description: "Continue the circuit along the Cabot Trail's southern stretches."
            },
            {
                title: "Return",
                description: "Return to your starting point as the day draws to a close."
            }
        ],
        duration: null,
        groupSize: null,
        priceFrom: null,
        pickupInfo: "Contact us to discuss pickup arrangements for this full-day experience.",
        accessibility: null,
        inclusions: null,
        exclusions: null,
        faqs: [
            {
                question: "How long is the full day?",
                answer: "Exact timing will be confirmed when we discuss your booking. We customise the schedule to ensure a relaxed, enjoyable experience rather than rushing through."
            },
            {
                question: "Are National Park fees included?",
                answer: "Park fees and inclusions will be detailed when we confirm your enquiry. Please note them when submitting your request."
            }
        ],
        relatedSlugs: [
            "cabot-trail-coastal",
            "highland-village-bras-dor"
        ],
        draftNote: "DRAFT — duration, group size, and pricing to be confirmed by owner."
    },
    {
        slug: "ingonish-beach-green-cove",
        title: "Ingonish Beach & Green Cove",
        subtitle: "Crystal waters and rugged coves within the National Park",
        category: "coastal",
        heroImage: UNSPLASH.beach,
        galleryImages: [
            UNSPLASH.oceanCliff,
            UNSPLASH.cabotCoast,
            UNSPLASH.lighthouse,
            UNSPLASH.road
        ],
        description: "Discover the pristine shores of Ingonish Beach and the wild beauty of Green Cove — some of the most striking coastal landscapes within Cape Breton Highlands National Park.",
        longDescription: "Ingonish is celebrated for its remarkable freshwater beach that meets the saltwater Atlantic — a unique natural phenomenon found in very few places in the world. Nearby Green Cove offers dramatic cliff-edge scenery, crashing surf, and sea-stacks carved by millennia of Atlantic weather. Together, they form one of Cape Breton's most memorable coastal experiences.",
        highlights: [
            "Ingonish Beach — a rare freshwater-meets-saltwater coastal formation",
            "Green Cove's dramatic sea-cliffs and Atlantic vistas",
            "Cape Breton Highlands National Park scenery",
            "Opportunities for short coastal walks",
            "Photography stops at prime golden-hour viewpoints"
        ],
        itinerary: [
            {
                title: "Pickup & Scenic Drive",
                description: "Journey north along the Cabot Trail towards Ingonish."
            },
            {
                title: "Ingonish Beach",
                description: "Free time at the beach — walk, swim (seasonal), or simply absorb the landscape."
            },
            {
                title: "Green Cove",
                description: "Dramatic clifftop views over the open Atlantic."
            },
            {
                title: "Return Journey",
                description: "Scenic return along the coast."
            }
        ],
        duration: null,
        groupSize: null,
        priceFrom: null,
        pickupInfo: "Contact us to discuss pickup arrangements.",
        accessibility: null,
        inclusions: null,
        exclusions: null,
        faqs: [
            {
                question: "Is swimming possible at Ingonish Beach?",
                answer: "Swimming is seasonal. We recommend contacting us close to your travel date for current conditions."
            }
        ],
        relatedSlugs: [
            "cabot-trail-coastal",
            "full-cabot-trail"
        ],
        draftNote: "DRAFT — duration, group size, and pricing to be confirmed by owner."
    },
    {
        slug: "fortress-of-louisbourg",
        title: "Fortress of Louisbourg",
        subtitle: "Step inside 18th-century New France on the Atlantic coast",
        category: "cultural",
        heroImage: UNSPLASH.fortress,
        galleryImages: [
            UNSPLASH.village,
            UNSPLASH.harbor,
            UNSPLASH.lighthouse,
            UNSPLASH.waterfront
        ],
        description: "Visit the largest reconstructed 18th-century fortified town in North America — a living history site where costumed interpreters bring colonial Cape Breton vividly to life.",
        longDescription: "Fortress of Louisbourg National Historic Site is a breathtaking achievement in historical reconstruction. Wander cobblestone streets, visit reconstructed homes and barracks, and speak with costumed interpreters who inhabit the world of 1744 New France. The fortress sits on a windswept Atlantic headland, adding a dramatic natural backdrop to an already extraordinary cultural experience.",
        highlights: [
            "Largest reconstructed 18th-century fortified town in North America",
            "Costumed interpreters and immersive living history",
            "Dramatic Atlantic headland setting",
            "Historic architecture, trades, and period demonstrations",
            "Rich Acadian, French, and British colonial history"
        ],
        itinerary: [
            {
                title: "Pickup & Drive to Louisbourg",
                description: "Depart and drive south along the Fleur-de-lis Trail to the fortress."
            },
            {
                title: "Fortress Exploration",
                description: "Free time to explore the fortress at your own pace with optional guided interpretation."
            },
            {
                title: "Coastal Headland Walk",
                description: "Short walk along the Atlantic headland (weather permitting)."
            },
            {
                title: "Return",
                description: "Return journey to your starting point."
            }
        ],
        duration: null,
        groupSize: null,
        priceFrom: null,
        pickupInfo: "Contact us to discuss pickup arrangements.",
        accessibility: null,
        inclusions: null,
        exclusions: null,
        faqs: [
            {
                question: "Is Fortress of Louisbourg open year-round?",
                answer: "The fortress typically operates from late spring through early autumn. We recommend confirming opening dates when you enquire, as they vary by year."
            },
            {
                question: "Are site admission fees included?",
                answer: "Admission fees and inclusions will be detailed when we confirm your enquiry."
            }
        ],
        relatedSlugs: [
            "sydney-city-waterfront",
            "baddeck-agbell"
        ],
        draftNote: "DRAFT — duration, group size, and pricing to be confirmed by owner."
    },
    {
        slug: "sydney-city-waterfront",
        title: "Sydney City & Waterfront",
        subtitle: "Cape Breton's vibrant urban heart and historic waterfront",
        category: "cultural",
        heroImage: UNSPLASH.waterfront,
        galleryImages: [
            UNSPLASH.harbor,
            UNSPLASH.village,
            UNSPLASH.lighthouse,
            UNSPLASH.fortress
        ],
        description: "Explore the storied city of Sydney — Cape Breton's cultural capital — with its striking waterfront, Celtic music scene, murals, and rich industrial and maritime heritage.",
        longDescription: "Sydney is more than a gateway to Cape Breton's wilder attractions — it is a destination in its own right. Walk the rejuvenated waterfront boardwalk, discover the city's steel-industry history at the Sydney Waterfront, and find its world-famous collection of Celtic music venues. Your local guide will reveal the layers of this city's character that visitors so often miss.",
        highlights: [
            "Sydney Waterfront boardwalk and harbour views",
            "Historic murals and public art",
            "Cape Breton's Celtic music and cultural scene",
            "Industrial and maritime heritage sites",
            "Local dining and artisan recommendations"
        ],
        itinerary: [
            {
                title: "City Orientation",
                description: "Gentle introduction to Sydney's neighbourhoods and history."
            },
            {
                title: "Waterfront Walk",
                description: "Explore the rejuvenated Sydney Waterfront and harbour promenade."
            },
            {
                title: "Cultural Quarter",
                description: "Visit key cultural landmarks and hear stories of Sydney's Celtic heritage."
            },
            {
                title: "Return or Onward Connection",
                description: "Drop-off at your accommodation or onward destination."
            }
        ],
        duration: null,
        groupSize: null,
        priceFrom: null,
        pickupInfo: "Contact us to discuss pickup arrangements within the Sydney/Cape Breton area.",
        accessibility: null,
        inclusions: null,
        exclusions: null,
        faqs: [
            {
                question: "Can we combine Sydney with another tour stop?",
                answer: "Yes — Sydney makes an excellent starting or ending point for a longer Cape Breton itinerary. Contact us to discuss multi-stop arrangements."
            }
        ],
        relatedSlugs: [
            "fortress-of-louisbourg",
            "baddeck-agbell"
        ],
        draftNote: "DRAFT — duration, group size, and pricing to be confirmed by owner."
    },
    {
        slug: "baddeck-agbell",
        title: "Baddeck & Alexander Graham Bell Historic Site",
        subtitle: "Lakeside village and the legacy of a world-changing inventor",
        category: "cultural",
        heroImage: UNSPLASH.lake,
        galleryImages: [
            UNSPLASH.village,
            UNSPLASH.harbor,
            UNSPLASH.waterfront,
            UNSPLASH.cabotCoast
        ],
        description: "Visit the charming village of Baddeck on the shores of the Bras d'Or Lake and explore the Alexander Graham Bell National Historic Site — where the inventor spent his most productive years.",
        longDescription: "Baddeck is one of Cape Breton's most beloved destinations — a quiet waterfront village with a refined character shaped by decades of artists, sailors, and curious visitors. Alexander Graham Bell chose this corner of Cape Breton as his family home, and the national historic site dedicated to his work here is one of Atlantic Canada's finest museums. The surrounding Bras d'Or Lake — a vast inland sea — adds a serene and spectacular natural backdrop.",
        highlights: [
            "Baddeck's charming waterfront and village atmosphere",
            "Alexander Graham Bell National Historic Site",
            "Bras d'Or Lake — UNESCO Biosphere Reserve",
            "Local artisan shops and café recommendations",
            "Historical context from your local guide"
        ],
        itinerary: [
            {
                title: "Scenic Drive to Baddeck",
                description: "Travel along the Trans-Canada Highway with views of the Bras d'Or Lake."
            },
            {
                title: "Alexander Graham Bell National Historic Site",
                description: "Explore the museum dedicated to Bell's extraordinary legacy in Cape Breton."
            },
            {
                title: "Baddeck Village",
                description: "Stroll the waterfront, browse shops, and enjoy a coffee or light meal at your leisure."
            },
            {
                title: "Return Journey",
                description: "Scenic return to your starting point."
            }
        ],
        duration: null,
        groupSize: null,
        priceFrom: null,
        pickupInfo: "Contact us to discuss pickup arrangements.",
        accessibility: null,
        inclusions: null,
        exclusions: null,
        faqs: [
            {
                question: "Is the Alexander Graham Bell site suitable for children?",
                answer: "The site has excellent interactive exhibits suitable for all ages. Contact us if you have specific accessibility or family requirements."
            }
        ],
        relatedSlugs: [
            "highland-village-bras-dor",
            "sydney-city-waterfront"
        ],
        draftNote: "DRAFT — duration, group size, and pricing to be confirmed by owner."
    },
    {
        slug: "highland-village-bras-dor",
        title: "Highland Village & Bras d'Or Lake",
        subtitle: "Cape Breton's Gaelic heritage on a hilltop above the inland sea",
        category: "highland",
        heroImage: UNSPLASH.highland,
        galleryImages: [
            UNSPLASH.lake,
            UNSPLASH.mistyForest,
            UNSPLASH.village,
            UNSPLASH.cabotCoast
        ],
        description: "Discover the Highland Village Museum — an open-air living history site preserving Cape Breton's Gaelic heritage — with panoramic views over the silver waters of the Bras d'Or.",
        longDescription: "Perched on a hillside above the Bras d'Or Lake in Iona, the Highland Village Museum tells the story of Cape Breton's Cape Breton's Gaelic settlers through a remarkable collection of reconstructed historic buildings. Costumed interpreters demonstrate crafts, music, and daily life, while the hilltop setting offers some of the most sweeping views of the Bras d'Or Lake to be found anywhere. Combined with a scenic lakeside drive, this is one of Cape Breton's most moving cultural experiences.",
        highlights: [
            "Highland Village Museum open-air living history",
            "Cape Breton's Gaelic language and culture",
            "Panoramic Bras d'Or Lake views from the hillside",
            "Reconstructed 18th–20th century historic buildings",
            "Scenic Bras d'Or lakeside drive"
        ],
        itinerary: [
            {
                title: "Departure",
                description: "Drive south through the heart of Cape Breton towards Iona."
            },
            {
                title: "Bras d'Or Lake Scenic Drive",
                description: "Follow the lakeside route with views of this UNESCO Biosphere Reserve."
            },
            {
                title: "Highland Village Museum",
                description: "Explore the hillside museum village with its costumed interpreters and historic buildings."
            },
            {
                title: "Return Journey",
                description: "Return to your starting point via the scenic inland route."
            }
        ],
        duration: null,
        groupSize: null,
        priceFrom: null,
        pickupInfo: "Contact us to discuss pickup arrangements.",
        accessibility: null,
        inclusions: null,
        exclusions: null,
        faqs: [
            {
                question: "When is the Highland Village Museum open?",
                answer: "Opening season and hours vary. We strongly recommend confirming current operating times when you enquire — we will check this for you."
            }
        ],
        relatedSlugs: [
            "baddeck-agbell",
            "full-cabot-trail"
        ],
        draftNote: "DRAFT — duration, group size, and pricing to be confirmed by owner."
    },
    {
        slug: "custom-private-cape-breton",
        title: "Custom Private Cape Breton Tour",
        subtitle: "Your Cape Breton itinerary, entirely on your terms",
        category: "private",
        heroImage: UNSPLASH.cabotCoast,
        galleryImages: [
            UNSPLASH.road,
            UNSPLASH.highland,
            UNSPLASH.beach,
            UNSPLASH.lake
        ],
        description: "Design your perfect Cape Breton day — choose your destinations, set your pace, and travel in complete privacy with a dedicated local guide.",
        longDescription: "No two travellers want the same Cape Breton. Some crave dramatic coastal headlands, others seek out Gaelic culture and heritage sites, and some simply want to follow a winding coastal road and see where it leads. Our custom private tour lets you dictate exactly that. Share your interests, travel dates, and the experiences you are hoping for — we will craft a bespoke itinerary and provide a detailed proposal for your review.",
        highlights: [
            "Completely bespoke itinerary designed for your group",
            "Your choice of destinations, pace, and stopping points",
            "Dedicated private guide throughout the day",
            "Flexible to photography, hiking, or cultural interests",
            "Perfect for honeymoons, anniversaries, and special occasions"
        ],
        itinerary: [
            {
                title: "Consultation",
                description: "We discuss your interests and dream Cape Breton day before your visit."
            },
            {
                title: "Bespoke Route",
                description: "A custom itinerary crafted to your preferences, confirmed in advance."
            },
            {
                title: "Your Day, Your Pace",
                description: "Travel at your own rhythm with a dedicated local guide who knows Cape Breton intimately."
            }
        ],
        duration: null,
        groupSize: null,
        priceFrom: null,
        pickupInfo: "Flexible pickup from your accommodation or preferred location.",
        accessibility: null,
        inclusions: null,
        exclusions: null,
        faqs: [
            {
                question: "How far in advance should I book a custom tour?",
                answer: "We recommend enquiring at least two weeks in advance to allow time for itinerary planning and confirmation, though we will always do our best to accommodate late requests."
            },
            {
                question: "Can you arrange special touches for anniversaries or proposals?",
                answer: "Absolutely. Please mention any special occasion or request in your enquiry message and we will do everything possible to make it memorable."
            }
        ],
        relatedSlugs: [
            "full-cabot-trail",
            "cabot-trail-coastal"
        ],
        draftNote: "DRAFT — all operational details subject to owner confirmation."
    }
];
function getTourBySlug(slug) {
    return TOURS.find((t)=>t.slug === slug);
}
function getRelatedTours(slugs) {
    return slugs.map((s)=>TOURS.find((t)=>t.slug === s)).filter((t)=>t !== undefined);
}
}),
];

//# sourceMappingURL=src_1ynu1wc._.js.map