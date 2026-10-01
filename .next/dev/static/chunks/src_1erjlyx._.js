(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/components/forms/EnquiryForm.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>EnquiryForm
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/tours.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/config.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
const INITIAL = {
    fullName: "",
    email: "",
    phone: "",
    tourInterest: "",
    preferredDate: "",
    guests: "",
    pickupPreference: "",
    message: ""
};
const TOUR_OPTIONS = [
    {
        value: "",
        label: "— Select a tour or service —"
    },
    ...__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$tours$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["TOURS"].map((t)=>({
            value: t.slug,
            label: t.title
        })),
    {
        value: "private-sightseeing",
        label: "Private Sightseeing Tour"
    },
    {
        value: "airport-transfer",
        label: "Airport Transfer (subject to availability)"
    },
    {
        value: "cruise-excursion",
        label: "Cruise Port Excursion (subject to availability)"
    },
    {
        value: "general",
        label: "General Enquiry"
    }
];
function validate(data) {
    const errors = {};
    if (!data.fullName.trim()) errors.fullName = "Please enter your name.";
    if (!data.email.trim()) {
        errors.email = "Please enter your email address.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
        errors.email = "Please enter a valid email address.";
    }
    if (!data.tourInterest) errors.tourInterest = "Please select a tour or service.";
    if (data.guests && (isNaN(Number(data.guests)) || Number(data.guests) < 1)) {
        errors.guests = "Please enter a valid number of guests.";
    }
    if (data.preferredDate) {
        const d = new Date(data.preferredDate);
        if (isNaN(d.getTime()) || d < new Date()) {
            errors.preferredDate = "Please enter a future date.";
        }
    }
    return errors;
}
function EnquiryForm({ prefilledTour, compact = false }) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const [form, setForm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({
        ...INITIAL
    });
    const [errors, setErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("idle");
    const [errorMsg, setErrorMsg] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "EnquiryForm.useEffect": ()=>{
            const tour = prefilledTour ?? searchParams.get("tour") ?? "";
            if (tour) {
                setForm({
                    "EnquiryForm.useEffect": (f)=>({
                            ...f,
                            tourInterest: tour
                        })
                }["EnquiryForm.useEffect"]);
            }
            const guests = searchParams.get("guests") ?? "";
            const date = searchParams.get("date") ?? "";
            if (guests) setForm({
                "EnquiryForm.useEffect": (f)=>({
                        ...f,
                        guests
                    })
            }["EnquiryForm.useEffect"]);
            if (date) setForm({
                "EnquiryForm.useEffect": (f)=>({
                        ...f,
                        preferredDate: date
                    })
            }["EnquiryForm.useEffect"]);
        }
    }["EnquiryForm.useEffect"], [
        prefilledTour,
        searchParams
    ]);
    const set = (field)=>(e)=>{
            setForm((f)=>({
                    ...f,
                    [field]: e.target.value
                }));
            if (errors[field]) {
                setErrors((er)=>({
                        ...er,
                        [field]: undefined
                    }));
            }
        };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const fieldErrors = validate(form);
        if (Object.keys(fieldErrors).length > 0) {
            setErrors(fieldErrors);
            return;
        }
        setStatus("loading");
        setErrorMsg("");
        try {
            const res = await fetch("/api/enquiry", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            });
            if (res.ok) {
                setStatus("success");
                setForm(INITIAL);
            } else {
                const data = await res.json().catch(()=>({}));
                if (data.fallback) {
                    // Server unavailable — open mailto fallback
                    const subject = encodeURIComponent("Tour Enquiry — New Scotland Coastal");
                    const body = encodeURIComponent(`Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nTour: ${form.tourInterest}\nDate: ${form.preferredDate}\nGuests: ${form.guests}\nPickup: ${form.pickupPreference}\n\n${form.message}`);
                    window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].email}?subject=${subject}&body=${body}`;
                } else {
                    setStatus("error");
                    setErrorMsg(data.message ?? "Something went wrong. Please try again.");
                }
            }
        } catch  {
            // Network error — open mailto fallback
            const subject = encodeURIComponent("Tour Enquiry — New Scotland Coastal");
            const body = encodeURIComponent(`Name: ${form.fullName}\nEmail: ${form.email}\nPhone: ${form.phone}\nTour: ${form.tourInterest}\nDate: ${form.preferredDate}\nGuests: ${form.guests}\nPickup: ${form.pickupPreference}\n\n${form.message}`);
            window.location.href = `mailto:${__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$config$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["SITE"].email}?subject=${subject}&body=${body}`;
        }
    };
    if (status === "success") {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-teal-pale border border-teal/30 p-8 text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-12 h-12 rounded-full bg-teal flex items-center justify-center mx-auto mb-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                        width: "22",
                        height: "22",
                        viewBox: "0 0 22 22",
                        fill: "none",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                            d: "M5 11l4 4 8-8",
                            stroke: "white",
                            strokeWidth: "2",
                            strokeLinecap: "round",
                            strokeLinejoin: "round"
                        }, void 0, false, {
                            fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                            lineNumber: 150,
                            columnNumber: 13
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 149,
                        columnNumber: 11
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                    lineNumber: 148,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "font-serif text-xl text-navy mb-2",
                    children: "Enquiry Received"
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                    lineNumber: 153,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans text-sm text-muted leading-relaxed",
                    children: "Thank you for reaching out. We will review your request and respond with availability and pricing as soon as possible."
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                    lineNumber: 154,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: ()=>setStatus("idle"),
                    className: "mt-6 font-sans text-xs font-semibold tracking-widest uppercase text-teal hover:text-navy transition-colors",
                    children: "Send Another Enquiry"
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                    lineNumber: 157,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/forms/EnquiryForm.tsx",
            lineNumber: 147,
            columnNumber: 7
        }, this);
    }
    const inputClass = (field)=>`form-input ${field && errors[field] ? "error" : ""}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        noValidate: true,
        "aria-label": "Tour enquiry form",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: `grid gap-4 ${compact ? "grid-cols-1" : "grid-cols-1 md:grid-cols-2"}`,
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-semibold tracking-wider uppercase text-navy",
                                htmlFor: "fullName",
                                children: [
                                    "Full Name ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                        lineNumber: 176,
                                        columnNumber: 23
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 175,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "fullName",
                                type: "text",
                                autoComplete: "name",
                                placeholder: "Your full name",
                                value: form.fullName,
                                onChange: set("fullName"),
                                className: inputClass("fullName"),
                                "aria-invalid": !!errors.fullName,
                                "aria-describedby": errors.fullName ? "fullName-error" : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 178,
                                columnNumber: 11
                            }, this),
                            errors.fullName && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "fullName-error",
                                className: "font-sans text-xs text-red-600",
                                children: errors.fullName
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 189,
                                columnNumber: 31
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 174,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-semibold tracking-wider uppercase text-navy",
                                htmlFor: "email",
                                children: [
                                    "Email Address ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                        lineNumber: 195,
                                        columnNumber: 27
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 194,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "email",
                                type: "email",
                                autoComplete: "email",
                                placeholder: "your@email.com",
                                value: form.email,
                                onChange: set("email"),
                                className: inputClass("email"),
                                "aria-invalid": !!errors.email,
                                "aria-describedby": errors.email ? "email-error" : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 197,
                                columnNumber: 11
                            }, this),
                            errors.email && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "email-error",
                                className: "font-sans text-xs text-red-600",
                                children: errors.email
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 208,
                                columnNumber: 28
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 193,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-semibold tracking-wider uppercase text-navy",
                                htmlFor: "phone",
                                children: [
                                    "Phone ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-normal normal-case text-muted",
                                        children: "(optional)"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                        lineNumber: 214,
                                        columnNumber: 19
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 213,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "phone",
                                type: "tel",
                                autoComplete: "tel",
                                placeholder: "+1 (000) 000-0000",
                                value: form.phone,
                                onChange: set("phone"),
                                className: inputClass()
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 212,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-semibold tracking-wider uppercase text-navy",
                                htmlFor: "tourInterest",
                                children: [
                                    "Tour / Service ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-red-500",
                                        children: "*"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                        lineNumber: 230,
                                        columnNumber: 28
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 229,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                id: "tourInterest",
                                value: form.tourInterest,
                                onChange: set("tourInterest"),
                                className: `${inputClass("tourInterest")} bg-white`,
                                "aria-invalid": !!errors.tourInterest,
                                "aria-describedby": errors.tourInterest ? "tour-error" : undefined,
                                children: TOUR_OPTIONS.map((o)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                        value: o.value,
                                        children: o.label
                                    }, o.value, false, {
                                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                        lineNumber: 241,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 232,
                                columnNumber: 11
                            }, this),
                            errors.tourInterest && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "tour-error",
                                className: "font-sans text-xs text-red-600",
                                children: errors.tourInterest
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 244,
                                columnNumber: 35
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 228,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-semibold tracking-wider uppercase text-navy",
                                htmlFor: "preferredDate",
                                children: "Preferred Date"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 249,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "preferredDate",
                                type: "date",
                                value: form.preferredDate,
                                onChange: set("preferredDate"),
                                className: inputClass("preferredDate"),
                                "aria-invalid": !!errors.preferredDate,
                                "aria-describedby": errors.preferredDate ? "date-error" : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 252,
                                columnNumber: 11
                            }, this),
                            errors.preferredDate && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "date-error",
                                className: "font-sans text-xs text-red-600",
                                children: errors.preferredDate
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 261,
                                columnNumber: 36
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 248,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex flex-col gap-1.5",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-semibold tracking-wider uppercase text-navy",
                                htmlFor: "guests",
                                children: "Number of Guests"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 266,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "guests",
                                type: "number",
                                min: "1",
                                placeholder: "e.g. 2",
                                value: form.guests,
                                onChange: set("guests"),
                                className: inputClass("guests"),
                                "aria-invalid": !!errors.guests,
                                "aria-describedby": errors.guests ? "guests-error" : undefined
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 269,
                                columnNumber: 11
                            }, this),
                            errors.guests && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                id: "guests-error",
                                className: "font-sans text-xs text-red-600",
                                children: errors.guests
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 280,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 265,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col gap-1.5 ${compact ? "" : "md:col-span-2"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-semibold tracking-wider uppercase text-navy",
                                htmlFor: "pickup",
                                children: "Pickup Preference"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 285,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "pickup",
                                type: "text",
                                placeholder: "Hotel name, area, or cruise ship terminal",
                                value: form.pickupPreference,
                                onChange: set("pickupPreference"),
                                className: inputClass()
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 288,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 284,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex flex-col gap-1.5 ${compact ? "" : "md:col-span-2"}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                className: "font-sans text-xs font-semibold tracking-wider uppercase text-navy",
                                htmlFor: "message",
                                children: "Message / Special Requests"
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 300,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "message",
                                rows: 4,
                                placeholder: "Tell us about your travel interests, accessibility needs, or any special occasions...",
                                value: form.message,
                                onChange: set("message"),
                                className: `${inputClass()} resize-none`
                            }, void 0, false, {
                                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                lineNumber: 303,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 299,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                lineNumber: 172,
                columnNumber: 7
            }, this),
            status === "error" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 p-3 bg-red-50 border border-red-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "font-sans text-sm text-red-700",
                    children: errorMsg
                }, void 0, false, {
                    fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                    lineNumber: 316,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                lineNumber: 315,
                columnNumber: 9
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: status === "loading",
                        className: "btn-primary disabled:opacity-60 disabled:cursor-not-allowed",
                        children: status === "loading" ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "animate-spin w-4 h-4",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                            lineNumber: 329,
                                            columnNumber: 17
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                            lineNumber: 330,
                                            columnNumber: 17
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                                    lineNumber: 328,
                                    columnNumber: 15
                                }, this),
                                "Sending…"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                            lineNumber: 327,
                            columnNumber: 13
                        }, this) : "Send Enquiry"
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 321,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-xs text-muted leading-relaxed",
                        children: "No payment required. We will respond with availability and pricing."
                    }, void 0, false, {
                        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/forms/EnquiryForm.tsx",
                lineNumber: 320,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/forms/EnquiryForm.tsx",
        lineNumber: 171,
        columnNumber: 5
    }, this);
}
_s(EnquiryForm, "MEZIG4QfV5wVZLZX4/og0EsbCT0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = EnquiryForm;
var _c;
__turbopack_context__.k.register(_c, "EnquiryForm");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/FaqAccordion.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>FaqAccordion
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function FaqAccordion({ items, light = false }) {
    _s();
    const [open, setOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const border = light ? "border-white/20" : "border-ivory-warm";
    const questionColor = light ? "text-ivory" : "text-navy";
    const answerColor = light ? "text-ivory/75" : "text-muted";
    const iconColor = light ? "text-champagne" : "text-teal";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "divide-y divide-opacity-20",
        style: {
            borderTop: `1px solid`,
            borderColor: light ? "rgba(255,255,255,0.2)" : "#e8e0d4"
        },
        children: items.map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                style: {
                    borderBottom: `1px solid`,
                    borderColor: light ? "rgba(255,255,255,0.2)" : "#e8e0d4"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setOpen(open === i ? null : i),
                        className: `w-full flex items-start justify-between gap-4 py-5 text-left ${questionColor} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-champagne`,
                        "aria-expanded": open === i,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-serif text-base md:text-lg leading-snug",
                                children: item.question
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/FaqAccordion.tsx",
                                lineNumber: 32,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: `flex-shrink-0 mt-0.5 transition-transform duration-300 ${iconColor} ${open === i ? "rotate-180" : ""}`,
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        style: {
                            maxHeight: open === i ? "400px" : "0",
                            overflow: "hidden",
                            transition: "max-height 0.4s cubic-bezier(0.4,0,0.2,1)"
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
_s(FaqAccordion, "3gHT60S3lHEhyYybFcB05ha95j4=");
_c = FaqAccordion;
var _c;
__turbopack_context__.k.register(_c, "FaqAccordion");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/ScrollReveal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ScrollReveal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function ScrollReveal({ children, delay = 0, className = "" }) {
    _s();
    const ref = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ScrollReveal.useEffect": ()=>{
            const el = ref.current;
            if (!el) return;
            const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
            if (prefersReduced) return;
            el.style.opacity = "0";
            el.style.transform = "translateY(28px)";
            el.style.transition = `opacity 0.75s ease ${delay}ms, transform 0.75s ease ${delay}ms`;
            const obs = new IntersectionObserver({
                "ScrollReveal.useEffect": ([entry])=>{
                    if (entry.isIntersecting) {
                        el.style.opacity = "1";
                        el.style.transform = "translateY(0)";
                        obs.unobserve(el);
                    }
                }
            }["ScrollReveal.useEffect"], {
                threshold: 0.15
            });
            obs.observe(el);
            return ({
                "ScrollReveal.useEffect": ()=>obs.disconnect()
            })["ScrollReveal.useEffect"];
        }
    }["ScrollReveal.useEffect"], [
        delay
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        ref: ref,
        className: className,
        children: children
    }, void 0, false, {
        fileName: "[project]/src/components/ui/ScrollReveal.tsx",
        lineNumber: 40,
        columnNumber: 5
    }, this);
}
_s(ScrollReveal, "8uVE59eA/r6b92xF80p7sH8rXLk=");
_c = ScrollReveal;
var _c;
__turbopack_context__.k.register(_c, "ScrollReveal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/ui/TourCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TourCard
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/image.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
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
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
        href: `/tours/${tour.slug}`,
        className: "tour-card group block bg-white overflow-hidden border border-ivory-warm hover:shadow-xl transition-shadow duration-500",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "relative h-64 md:h-72 overflow-hidden",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$image$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent"
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 35,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 md:p-7",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "font-serif text-xl md:text-2xl text-navy leading-snug mb-2",
                        children: tour.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "font-sans text-sm text-muted leading-relaxed line-clamp-3 mb-5",
                        children: tour.description
                    }, void 0, false, {
                        fileName: "[project]/src/components/ui/TourCard.tsx",
                        lineNumber: 47,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between pt-4 border-t border-ivory-warm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs font-semibold tracking-widest uppercase text-teal",
                                children: tour.priceFrom ? `From ${tour.priceFrom}` : "Request Pricing"
                            }, void 0, false, {
                                fileName: "[project]/src/components/ui/TourCard.tsx",
                                lineNumber: 53,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-sans text-xs font-semibold tracking-widest uppercase text-navy flex items-center gap-1.5 group-hover:text-teal transition-colors",
                                children: [
                                    "View Tour",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                        width: "14",
                                        height: "14",
                                        viewBox: "0 0 14 14",
                                        fill: "none",
                                        className: "translate-x-0 group-hover:translate-x-1 transition-transform duration-300",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
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
_c = TourCard;
var _c;
__turbopack_context__.k.register(_c, "TourCard");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/tours.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
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
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=src_1erjlyx._.js.map