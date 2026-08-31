import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { u as MoveUpRight } from "../_libs/lucide-react.mjs";
import { i as projects, r as SiteLayout } from "./site-layout-D81ix-IL.mjs";
import { t as useRevealAnimations } from "./use-reveal-animations-c0LUeHAF.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-D09oRk1U.js
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	useRevealAnimations();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteLayout, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-[180px] pb-24 px-4 sm:px-8 md:px-12 bg-white dark:bg-background min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal-slide-up mb-16 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl font-display font-light text-foreground mb-4",
					children: "Project Gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground/70 max-w-2xl mx-auto text-lg",
					children: "A curated collection of our completed residential projects. Care in every detail, designed and built for life."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: projects.map((project, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group relative block overflow-hidden bg-muted aspect-[4/3] reveal-slide-up",
					style: {
						transitionDelay: `${idx % 3 * 100}ms`,
						contentVisibility: "auto",
						containIntrinsicSize: "400px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.img,
						alt: `Project for ${project.client}`,
						loading: "lazy",
						decoding: "async",
						className: "w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#C8A45D] text-xs tracking-widest uppercase font-semibold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100",
							children: project.location
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-white text-2xl font-display",
								children: project.client
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveUpRight, { size: 18 })
							})]
						})]
					})]
				}, idx))
			})]
		})
	}) });
}
//#endregion
export { GalleryPage as component };
