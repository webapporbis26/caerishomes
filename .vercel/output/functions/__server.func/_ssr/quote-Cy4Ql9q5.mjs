import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { P as ArrowLeft } from "../_libs/lucide-react.mjs";
import { a as SelectContent, c as SelectValue, i as Select, n as ChatGPT_Image_Jul_2__2026__07_51_22_PM_default, o as SelectItem, r as Input, s as SelectTrigger, t as Button } from "./select-FA_MzwEv.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as useRevealAnimations } from "./use-reveal-animations-fIie3TO5.mjs";
import { t as Textarea } from "./textarea-K2UkBH-x.mjs";
import { t as hero_1_desk_default } from "./hero 1 desk-C8bkpM_X.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-Cy4Ql9q5.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var serviceOptions = [
	"Architecture",
	"Interior Design",
	"Turnkey Construction",
	"Renovation",
	"Consultation"
];
var areaOptions = [
	"Less than 1000",
	"1000 - 2500",
	"2500 - 5000",
	"5000 - 10000",
	"10000+"
];
function QuotePage() {
	useRevealAnimations();
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
	};
	const inputClass = "h-11 border-0 border-b border-border/20 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 text-sm sm:text-base transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background flex flex-col lg:flex-row font-sans",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full lg:w-[45%] lg:h-screen relative overflow-hidden hidden lg:block sticky top-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: hero_1_desk_default,
						alt: "Luxury Architecture",
						className: "absolute inset-0 w-full h-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative z-10 p-12 h-full flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "inline-block hover:opacity-70 transition-opacity",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: ChatGPT_Image_Jul_2__2026__07_51_22_PM_default,
								alt: "Caeris Homes",
								className: "h-16 brightness-0 invert"
							})
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-reveal": true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "text-white text-5xl xl:text-6xl font-display leading-[1.1] mb-6",
								children: [
									"Let's craft your",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"dream space."
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/70 text-lg max-w-md",
								children: "Share the details of your project with us. Our team of expert architects and builders will get back to you with a customized proposal and consultation schedule."
							})]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:hidden bg-[#111] p-4 sm:p-6 text-white",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 text-white/70 hover:text-white mb-6 min-h-[44px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 }), " Back to Home"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
						className: "text-3xl sm:text-4xl font-display leading-[1.1] mb-4",
						children: "Let's craft your dream space."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-white/70",
						children: "Share your project details to get a customized quote."
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full lg:w-[55%] min-h-[100dvh] flex items-center justify-center p-4 sm:p-6 md:px-12 lg:px-20 py-8 lg:py-6 bg-background text-foreground relative z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-12 right-12 hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "text-foreground/50 hover:text-foreground transition-colors flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { size: 20 }), " Return to site"]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "w-full max-w-2xl",
					"data-reveal": true,
					children: submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center py-20",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-24 h-24 bg-red-600/10 text-red-600 rounded-full flex items-center justify-center mx-auto mb-8",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
									xmlns: "http://www.w3.org/2000/svg",
									width: "40",
									height: "40",
									viewBox: "0 0 24 24",
									fill: "none",
									stroke: "currentColor",
									strokeWidth: "2",
									strokeLinecap: "round",
									strokeLinejoin: "round",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M20 6 9 17l-5-5" })
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-5xl font-display mb-4 text-[#C8A45D]",
								children: "Quote Request Received"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground/70 text-lg leading-relaxed max-w-md mx-auto",
								children: "Thank you for reaching out to Caeris Homes. Our team is reviewing your project details and will contact you within 24 hours."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/",
								className: "inline-block mt-10 border-b border-foreground pb-1 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors",
								children: "Return to homepage"
							})
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
						onSubmit: handleSubmit,
						className: "space-y-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-foreground/50",
									children: "Your Details"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "firstName",
										required: true,
										placeholder: "First Name",
										defaultValue: "John",
										className: inputClass
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "lastName",
										required: true,
										placeholder: "Last Name",
										defaultValue: "Doe",
										className: inputClass
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-foreground/50",
									children: "Contact Info"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "grid grid-cols-1 md:grid-cols-2 gap-4 pt-1",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "email",
										type: "email",
										required: true,
										placeholder: "Email Address",
										defaultValue: "john.doe@example.com",
										className: inputClass
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "flex gap-2",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
											defaultValue: "+91",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
												className: "w-[80px] h-11 border-0 border-b border-border/20 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm sm:text-base",
												children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Country" })
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, { children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "+91",
													children: "India (+91)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "+1",
													children: "USA (+1)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "+44",
													children: "UK (+44)"
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: "+971",
													children: "UAE (+971)"
												})
											] })]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											name: "phone",
											type: "tel",
											required: true,
											placeholder: "Phone Number",
											defaultValue: "9876543210",
											className: `flex-1 min-w-[120px] ${inputClass}`
										})]
									})]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-2 pt-1",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
									className: "text-xs font-semibold uppercase tracking-widest text-foreground/50",
									children: "Project Information"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "pt-1 space-y-4",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
											name: "location",
											required: true,
											placeholder: "Location of your plot",
											defaultValue: "Kochi, Kerala",
											className: inputClass
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "grid grid-cols-1 md:grid-cols-2 gap-4",
											children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												name: "service",
												required: true,
												defaultValue: "Architecture",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-11 border-0 border-b border-border/20 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm sm:text-base",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Service Type" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: serviceOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: opt,
													children: opt
												}, opt)) })]
											}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
												name: "area",
												required: true,
												defaultValue: "2500 - 5000",
												children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
													className: "h-11 border-0 border-b border-border/20 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm sm:text-base",
													children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Built-up Area (Sq. Ft.)" })
												}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, { children: areaOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
													value: opt,
													children: opt
												}, opt)) })]
											})]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
											name: "message",
											required: true,
											placeholder: "Tell us more about your vision...",
											defaultValue: "I am looking to build a modern 4-bedroom villa with a pool.",
											className: "min-h-[80px] border-0 border-b border-border/20 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 text-sm sm:text-base resize-none pt-2"
										})
									]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "pt-4 flex flex-col sm:flex-row items-center justify-end gap-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "h-14 px-12 bg-red-600 hover:bg-red-700 text-white rounded-sm font-medium transition-colors w-full sm:w-auto text-lg",
									children: "Submit Request"
								})
							})
						]
					})
				})]
			})
		]
	});
}
//#endregion
export { QuotePage as component };
