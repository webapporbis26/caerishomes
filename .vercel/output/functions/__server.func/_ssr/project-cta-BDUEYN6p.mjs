import { o as require_jsx_runtime } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as splitChars } from "./split-chars-XR_qVCnk.mjs";
import { t as Magnetic } from "./magnetic-XMADYQOp.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/project-cta-BDUEYN6p.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 py-12 bg-[#C8A45D] text-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-meta mb-3 opacity-70",
					children: "Let's begin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-split": true,
					className: "font-display text-4xl md:text-5xl lg:text-6xl leading-tight",
					children: splitChars("Have a project in mind?")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				className: "inline-block bg-background text-foreground px-10 py-5 text-meta hover:bg-background transition-colors w-fit",
				children: "Talk to us today →"
			}) })]
		})
	});
}
//#endregion
export { ProjectCTA as t };
