import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import "./utils-NKUYuD-d.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { r as SiteLayout } from "./site-layout-D81ix-IL.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/process-CEggHD2c.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var process_1_default = "/assets/process-1-Dm-ZQY6Y.png";
var process_2_default = "/assets/process-2-QCFg6t_-.png";
var kerala_modern_1_default = "/assets/kerala-modern-1-CdCG49FI.png";
var process_4_default = "/assets/process-4-CZZ53kHT.png";
var indian_interior_default = "/assets/indian-interior-BTGGbKrK.png";
function useProcessAnimations() {
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".process-header", {
				y: 50,
				opacity: 0,
				duration: 1,
				ease: "expo.out",
				scrollTrigger: {
					trigger: ".process-header",
					start: "top 80%"
				}
			});
			const images = gsapWithCSS.utils.toArray(".process-img");
			const steps = gsapWithCSS.utils.toArray(".process-text-step");
			images.forEach((img, i) => {
				if (i > 0) gsapWithCSS.set(img, { opacity: 0 });
				else gsapWithCSS.set(img, { opacity: 1 });
			});
			steps.forEach((step, i) => {
				if (i > 0) gsapWithCSS.to(images[i], {
					opacity: 1,
					ease: "none",
					scrollTrigger: {
						trigger: step,
						start: "top 60%",
						end: "top 20%",
						scrub: 1
					}
				});
				const textContent = step.querySelector(".step-content");
				if (textContent) gsapWithCSS.from(textContent, {
					y: 50,
					opacity: 0,
					duration: 1,
					ease: "power3.out",
					scrollTrigger: {
						trigger: step,
						start: "top 85%"
					}
				});
				const number = step.querySelector(".step-number");
				if (number) gsapWithCSS.fromTo(number, { y: -30 }, {
					y: 50,
					ease: "none",
					scrollTrigger: {
						trigger: step,
						start: "top bottom",
						end: "bottom top",
						scrub: 1
					}
				});
				const progressLine = step.querySelector(".progress-line");
				if (progressLine) gsapWithCSS.fromTo(progressLine, { height: "0%" }, {
					height: "100%",
					ease: "none",
					scrollTrigger: {
						trigger: step,
						start: "top 60%",
						end: "bottom 60%",
						scrub: 1
					}
				});
			});
		});
		return () => ctx.revert();
	}, []);
}
function Process() {
	useProcessAnimations();
	const steps = [
		{
			n: "01",
			t: "Consultation",
			d: "We meet in your space — or ours — to understand the life you intend to live.",
			img: process_1_default
		},
		{
			n: "02",
			t: "Concept Design",
			d: "Mood, material, light. A directional palette becomes the soul of the project.",
			img: process_2_default
		},
		{
			n: "03",
			t: "Visualization",
			d: "Photoreal renders and 3D walkthroughs. Every room seen before it is built.",
			img: kerala_modern_1_default
		},
		{
			n: "04",
			t: "Execution",
			d: "Our in-house craftsmen and trusted ateliers bring the design into the world.",
			img: process_4_default
		},
		{
			n: "05",
			t: "Handover",
			d: "Styled, photographed, and handed over fully turnkey. Move in. Live well.",
			img: indian_interior_default
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative bg-background pt-16 md:pt-20 pb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 flex flex-col md:flex-row gap-12 lg:gap-24 items-start relative",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden md:block w-1/2 sticky top-32 h-[75dvh] overflow-hidden shadow-2xl order-1",
				children: [steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: s.img,
					className: "process-img absolute inset-0 w-full h-full object-cover",
					alt: s.t
				}, s.n)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" })]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full md:w-1/2 flex flex-col md:pt-[15dvh] md:pb-[30dvh] order-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "process-header mb-16 md:mb-32",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-eyebrow mb-3 text-[#C8A45D]",
						children: "Design Process"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-4xl md:text-5xl lg:text-7xl text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "italic",
							children: "A method"
						}), ", not a formula."]
					})]
				}), steps.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `process-text-step process-text-step-${i} min-h-[40dvh] md:min-h-[75dvh] flex flex-col justify-center relative mb-16 md:mb-0`,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "md:hidden w-full h-[40dvh] mb-8 overflow-hidden",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: s.img,
								alt: s.t,
								className: "w-full h-full object-cover"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "step-number font-display text-7xl md:text-[12rem] leading-none text-foreground/5 -mb-6 md:-mb-14 select-none z-0 relative",
							children: s.n
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "step-content relative z-10 pl-6 md:pl-10 pb-12",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute left-0 top-0 bottom-0 w-[2px] bg-border/20 hidden md:block",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "progress-line w-full bg-[#C8A45D]",
										style: { height: "0%" }
									})
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-3xl md:text-5xl lg:text-6xl mb-4 text-foreground",
									children: s.t
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/60 text-lg md:text-xl max-w-md leading-relaxed",
									children: s.d
								})
							]
						})
					]
				}, s.n))]
			})]
		})
	});
}
function ProcessPage() {
	useProcessAnimations();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Process, {}) });
}
//#endregion
export { ProcessPage as component };
