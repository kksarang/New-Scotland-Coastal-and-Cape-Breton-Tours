module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

var mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/src/app/favicon.ico (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.v("/_next/static/media/favicon.2vob68tjqpejf.ico" + (globalThis["NEXT_CLIENT_ASSET_SUFFIX"] || ''));}),
"[project]/src/app/favicon.ico.mjs { IMAGE => \"[project]/src/app/favicon.ico (static in ecmascript, tag client)\" } [app-rsc] (structured image object, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/src/app/favicon.ico (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$app$2f$favicon$2e$ico__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 256,
    height: 256
};
}),
"[project]/src/app/tours/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ToursPage,
    "metadata",
    ()=>metadata
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tours.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TourCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/TourCard.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeader.tsx [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/ui/ScrollReveal.tsx [app-rsc] (ecmascript)");
;
;
;
;
;
;
const metadata = {
    title: "All Tours",
    description: "Explore our full catalogue of Cape Breton and Nova Scotia tours — Cabot Trail, Fortress of Louisbourg, Baddeck, Ingonish Beach, and custom private experiences.",
    alternates: {
        canonical: "/tours"
    }
};
function ToursPage() {
    const coastal = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOURS"].filter((t)=>t.category === "coastal");
    const cultural = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOURS"].filter((t)=>t.category === "cultural");
    const highland = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOURS"].filter((t)=>t.category === "highland");
    const privateT = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["TOURS"].filter((t)=>t.category === "private");
    const sections = [
        {
            label: "Coastal Experiences",
            tours: coastal
        },
        {
            label: "Cultural Discoveries",
            tours: cultural
        },
        {
            label: "Highland & Lakeside",
            tours: highland
        },
        {
            label: "Private & Custom",
            tours: privateT
        }
    ].filter((s)=>s.tours.length > 0);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-[440px] md:h-[520px] overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                        src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=85",
                        alt: "Cape Breton coastal panorama",
                        fill: true,
                        priority: true,
                        sizes: "100vw",
                        className: "object-cover"
                    }, void 0, false, {
                        fileName: "[project]/src/app/tours/page.tsx",
                        lineNumber: 32,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "hero-overlay absolute inset-0"
                    }, void 0, false, {
                        fileName: "[project]/src/app/tours/page.tsx",
                        lineNumber: 40,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative z-10 h-full flex items-end pb-16 md:pb-20",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-screen-xl mx-auto px-6 lg:px-10 w-full",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "font-sans text-xs font-semibold tracking-[0.22em] uppercase text-champagne block mb-3",
                                    children: "Cape Breton & Nova Scotia"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tours/page.tsx",
                                    lineNumber: 43,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "divider-champagne mb-5"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tours/page.tsx",
                                    lineNumber: 46,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                    className: "font-serif text-4xl md:text-6xl text-white leading-tight",
                                    children: "Our Tours"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tours/page.tsx",
                                    lineNumber: 47,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "font-sans text-base md:text-lg text-white/75 mt-3 max-w-xl",
                                    children: "Private, unhurried experiences along the Cabot Trail and Nova Scotia's most extraordinary destinations."
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tours/page.tsx",
                                    lineNumber: 50,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tours/page.tsx",
                            lineNumber: 42,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/app/tours/page.tsx",
                        lineNumber: 41,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/tours/page.tsx",
                lineNumber: 31,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-champagne-pale border-b border-champagne/30",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-xl mx-auto px-6 lg:px-10 py-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-xs text-navy/70 leading-relaxed",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                className: "font-semibold text-navy",
                                children: "Please note:"
                            }, void 0, false, {
                                fileName: "[project]/src/app/tours/page.tsx",
                                lineNumber: 61,
                                columnNumber: 13
                            }, this),
                            " Tour durations, pricing, and operational details are subject to confirmation. Send an enquiry and we will respond with a personalised proposal."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/app/tours/page.tsx",
                        lineNumber: 60,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/app/tours/page.tsx",
                    lineNumber: 59,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/tours/page.tsx",
                lineNumber: 58,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-ivory",
                children: sections.map((section, si)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                        className: `section-pad ${si % 2 === 1 ? "bg-ivory-warm" : "bg-ivory"}`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "max-w-screen-xl mx-auto px-6 lg:px-10",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                    className: "mb-10",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                            className: "font-serif text-2xl md:text-3xl text-navy",
                                            children: section.label
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tours/page.tsx",
                                            lineNumber: 75,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "divider-champagne mt-3"
                                        }, void 0, false, {
                                            fileName: "[project]/src/app/tours/page.tsx",
                                            lineNumber: 76,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/app/tours/page.tsx",
                                    lineNumber: 74,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8",
                                    children: section.tours.map((tour, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                            delay: i * 80,
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TourCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                                                tour: tour
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/tours/page.tsx",
                                                lineNumber: 81,
                                                columnNumber: 21
                                            }, this)
                                        }, tour.slug, false, {
                                            fileName: "[project]/src/app/tours/page.tsx",
                                            lineNumber: 80,
                                            columnNumber: 19
                                        }, this))
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tours/page.tsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tours/page.tsx",
                            lineNumber: 73,
                            columnNumber: 13
                        }, this)
                    }, section.label, false, {
                        fileName: "[project]/src/app/tours/page.tsx",
                        lineNumber: 69,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/src/app/tours/page.tsx",
                lineNumber: 67,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
                className: "section-pad bg-navy",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-screen-xl mx-auto px-6 lg:px-10 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {
                            eyebrow: "Can't find what you're looking for?",
                            heading: "Let Us Design Your Perfect Cape Breton Day",
                            body: "Tell us your interests and we will create a bespoke itinerary tailored entirely to you.",
                            light: true
                        }, void 0, false, {
                            fileName: "[project]/src/app/tours/page.tsx",
                            lineNumber: 93,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-10 flex justify-center gap-4 flex-wrap",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/tours/custom-private-cape-breton",
                                    className: "btn-primary",
                                    children: "Custom Private Tour"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tours/page.tsx",
                                    lineNumber: 100,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "/contact",
                                    className: "btn-outline",
                                    children: "Send an Enquiry"
                                }, void 0, false, {
                                    fileName: "[project]/src/app/tours/page.tsx",
                                    lineNumber: 101,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/app/tours/page.tsx",
                            lineNumber: 99,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/app/tours/page.tsx",
                    lineNumber: 92,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/app/tours/page.tsx",
                lineNumber: 91,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/tours/page.tsx",
        lineNumber: 29,
        columnNumber: 5
    }, this);
}
}),
"[project]/src/app/tours/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", (function(__turbopack_context__){

__turbopack_context__.n(__turbopack_context__.i("[project]/src/app/tours/page.tsx [app-rsc] (ecmascript)"));
}),
"[project]/src/components/ui/ScrollReveal.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/ScrollReveal.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/ScrollReveal.tsx", "default");
}),
"[project]/src/components/ui/ScrollReveal.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/ScrollReveal.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/ScrollReveal.tsx <module evaluation>", "default");
}),
"[project]/src/components/ui/ScrollReveal.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/ScrollReveal.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/ScrollReveal.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$ScrollReveal$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/SectionHeader.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/SectionHeader.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/SectionHeader.tsx", "default");
}),
"[project]/src/components/ui/SectionHeader.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/SectionHeader.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/SectionHeader.tsx <module evaluation>", "default");
}),
"[project]/src/components/ui/SectionHeader.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeader.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/SectionHeader.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$SectionHeader$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/components/ui/TourCard.tsx [app-rsc] (client reference proxy)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/TourCard.tsx from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/TourCard.tsx", "default");
}),
"[project]/src/components/ui/TourCard.tsx [app-rsc] (client reference proxy) <module evaluation>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
// This file is generated by next-core EcmascriptClientReferenceModule.
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-server-dom-turbopack-server.js [app-rsc] (ecmascript)");
;
const __TURBOPACK__default__export__ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$server$2d$dom$2d$turbopack$2d$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["registerClientReference"])(function() {
    throw new Error("Attempted to call the default export of [project]/src/components/ui/TourCard.tsx <module evaluation> from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.");
}, "[project]/src/components/ui/TourCard.tsx <module evaluation>", "default");
}),
"[project]/src/components/ui/TourCard.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TourCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__$3c$module__evaluation$3e$__ = __turbopack_context__.i("[project]/src/components/ui/TourCard.tsx [app-rsc] (client reference proxy) <module evaluation>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TourCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__ = __turbopack_context__.i("[project]/src/components/ui/TourCard.tsx [app-rsc] (client reference proxy)");
;
__turbopack_context__.n(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$ui$2f$TourCard$2e$tsx__$5b$app$2d$rsc$5d$__$28$client__reference__proxy$29$__);
}),
"[project]/src/lib/tours.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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

//# sourceMappingURL=%5Broot-of-the-server%5D__0-4_98i._.js.map