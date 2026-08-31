import { r as __toESM } from "../_runtime.mjs";
import { n as cn, t as ChatGPT_Image_Jul_2__2026__07_51_22_PM_default } from "./utils-NKUYuD-d.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { D as ChevronUp, O as ChevronDown, P as ArrowLeft, k as Check } from "../_libs/lucide-react.mjs";
import { t as useRevealAnimations } from "./use-reveal-animations-c0LUeHAF.mjs";
import { t as Button } from "./button-CRsnCulZ.mjs";
import { n as Textarea, t as Input } from "./textarea-CTvFB5qu.mjs";
import { t as hero_1_desk_default } from "./hero 1 desk-C8bkpM_X.mjs";
import { a as SelectItemIndicator, c as SelectPortal, d as SelectSeparator$1, f as SelectTrigger$1, i as SelectItem$1, l as SelectScrollDownButton$1, m as SelectViewport, n as SelectContent$1, o as SelectItemText, p as SelectValue$1, r as SelectIcon, s as SelectLabel$1, t as Select$1, u as SelectScrollUpButton$1 } from "../_libs/@radix-ui/react-select+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/quote-nb7vVXKc.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var Select = Select$1;
var SelectValue = SelectValue$1;
var SelectTrigger = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectTrigger$1, {
	ref,
	className: cn("flex h-9 w-full items-center justify-between whitespace-nowrap rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm ring-offset-background cursor-pointer data-[placeholder]:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-ring disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectIcon, {
		asChild: true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4 opacity-50" })
	})]
}));
SelectTrigger.displayName = SelectTrigger$1.displayName;
var SelectScrollUpButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "h-4 w-4" })
}));
SelectScrollUpButton.displayName = SelectScrollUpButton$1.displayName;
var SelectScrollDownButton = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton$1, {
	ref,
	className: cn("flex cursor-default items-center justify-center py-1", className),
	...props,
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "h-4 w-4" })
}));
SelectScrollDownButton.displayName = SelectScrollDownButton$1.displayName;
var SelectContent = import_react.forwardRef(({ className, children, position = "popper", ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectPortal, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent$1, {
	ref,
	className: cn("relative z-50 max-h-(--radix-select-content-available-height) min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-select-content-transform-origin)", position === "popper" && "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1", className),
	position,
	...props,
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollUpButton, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectViewport, {
			className: cn("p-1", position === "popper" && "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"),
			children
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectScrollDownButton, {})
	]
}) }));
SelectContent.displayName = SelectContent$1.displayName;
var SelectLabel = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectLabel$1, {
	ref,
	className: cn("px-2 py-1.5 text-sm font-semibold", className),
	...props
}));
SelectLabel.displayName = SelectLabel$1.displayName;
var SelectItem = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectItem$1, {
	ref,
	className: cn("relative flex w-full cursor-default select-none items-center rounded-sm py-1.5 pl-2 pr-8 text-sm outline-none focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50", className),
	...props,
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "absolute right-2 flex h-3.5 w-3.5 items-center justify-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemIndicator, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "h-4 w-4" }) })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItemText, { children })]
}));
SelectItem.displayName = SelectItem$1.displayName;
var SelectSeparator = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectSeparator$1, {
	ref,
	className: cn("-mx-1 my-1 h-px bg-muted", className),
	...props
}));
SelectSeparator.displayName = SelectSeparator$1.displayName;
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
											className: `flex-1 min-w-[100px] placeholder:text-sm md:text-sm ${inputClass}`
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
