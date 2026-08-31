import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { f as MapPin, p as Mail, s as Phone } from "../_libs/lucide-react.mjs";
import { r as Input, t as Button } from "./select-FA_MzwEv.mjs";
import { r as SiteLayout, t as CONTACT } from "./site-layout-CMLsfdzW.mjs";
import { t as PageHero } from "./page-hero-DSR35MVY.mjs";
import { t as useRevealAnimations } from "./use-reveal-animations-fIie3TO5.mjs";
import { t as ProjectCTA } from "./project-cta-DgapIh7i.mjs";
import { t as Textarea } from "./textarea-K2UkBH-x.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-CikZTWz5.js
var import_jsx_runtime = require_jsx_runtime();
function ContactPage() {
	useRevealAnimations();
	const inputClass = "h-12 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 transition-colors";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PageHero, {
			eyebrow: "Get In Touch",
			title: "Contact Us",
			description: "Whether you have a question about our services, want to discuss a project, or just want to say hello, we are here for you."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "py-12 md:py-20 px-4 sm:px-8 md:px-12 xl:px-20 max-w-[90rem] mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					className: "space-y-12 flex flex-col",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-3xl md:text-4xl mb-8",
						children: "Reach Out Directly"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "space-y-8",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center rounded-full shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-5 h-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold uppercase tracking-widest text-xs mb-2 text-foreground/50",
									children: "Office Address"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/80 leading-relaxed whitespace-pre-line",
									children: CONTACT.address.split(", ").join("\\n")
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center rounded-full shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold uppercase tracking-widest text-xs mb-2 text-foreground/50",
									children: "Phone"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-foreground/80 leading-relaxed",
									children: [
										CONTACT.phone,
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										CONTACT.phone2
									]
								})] })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-start gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "w-12 h-12 bg-[#C8A45D]/10 text-[#C8A45D] flex items-center justify-center rounded-full shrink-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-5 h-5" })
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-bold uppercase tracking-widest text-xs mb-2 text-foreground/50",
									children: "Email"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/80 leading-relaxed break-all",
									children: CONTACT.email
								})] })]
							})
						]
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-full h-[300px] bg-surface relative overflow-hidden border border-border/10 rounded-sm",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
							src: "https://maps.google.com/maps?q=Elanji,+Ernakulam,+Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed",
							width: "100%",
							height: "100%",
							style: {
								border: 0,
								position: "absolute",
								inset: 0
							},
							allowFullScreen: false,
							loading: "lazy",
							referrerPolicy: "no-referrer-when-downgrade",
							className: "grayscale opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
						})
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					className: "bg-surface/30 p-8 md:p-12 border border-border/10 rounded-sm h-fit",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "font-display text-3xl md:text-4xl mb-2",
							children: "Send a Message"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/60 mb-8",
							children: "We usually respond within 24 hours."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
							className: "space-y-8",
							onSubmit: (e) => e.preventDefault(),
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-bold tracking-widest uppercase text-foreground/50",
										children: "Full Name"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "name",
										required: true,
										placeholder: "John Doe",
										className: inputClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-bold tracking-widest uppercase text-foreground/50",
										children: "Email Address"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "email",
										type: "email",
										required: true,
										placeholder: "john@example.com",
										className: inputClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-bold tracking-widest uppercase text-foreground/50",
										children: "Phone (Optional)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
										name: "phone",
										type: "tel",
										placeholder: "+91 9876543210",
										className: inputClass
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "space-y-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
										className: "text-xs font-bold tracking-widest uppercase text-foreground/50",
										children: "Your Message"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Textarea, {
										name: "message",
										required: true,
										placeholder: "How can we help you?",
										className: "min-h-[120px] border-0 border-b border-border/30 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 resize-none transition-colors"
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
									type: "submit",
									className: "h-14 w-full bg-[#C8A45D] hover:bg-[#a68645] text-white rounded-sm font-bold tracking-wide uppercase text-sm transition-colors shadow-sm mt-4",
									children: "Send Message"
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCTA, {})
	] });
}
//#endregion
export { ContactPage as component };
