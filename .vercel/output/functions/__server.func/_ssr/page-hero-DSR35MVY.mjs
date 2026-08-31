import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { t as splitChars } from "./split-chars-XR_qVCnk.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/page-hero-DSR35MVY.js
var import_jsx_runtime = require_jsx_runtime();
function PageHero({ eyebrow, title, description, image }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "pt-24 pb-12 md:pt-32 md:pb-16 px-4 sm:px-8 md:px-12 xl:px-20 relative overflow-hidden",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 max-w-7xl mx-auto",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-eyebrow mb-4",
					"data-reveal": true,
					children: eyebrow
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					"data-split": true,
					className: "font-display text-5xl md:text-6xl lg:text-8xl leading-[0.95]",
					children: splitChars(title)
				}),
				description && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground/60 max-w-xl mt-6 md:mt-8 leading-relaxed",
					"data-reveal": true,
					children: description
				})
			]
		}), image && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-12 md:mt-16 w-full max-w-7xl mx-auto aspect-video md:aspect-[21/9] overflow-hidden relative",
			"data-reveal": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 w-full h-[120%] -top-[10%]",
				"data-parallax": "0.15",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: image,
					alt: title,
					className: "w-full h-full object-cover"
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-background/20" })]
		})]
	});
}
//#endregion
export { PageHero as t };
