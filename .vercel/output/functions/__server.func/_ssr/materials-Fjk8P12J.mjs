import { r as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { o as SiteLayout } from "./site-layout-DqbnLW94.mjs";
import { t as splitChars } from "./split-chars-XR_qVCnk.mjs";
import { t as useRevealAnimations } from "./use-reveal-animations-BCPYSA9V.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/materials-Fjk8P12J.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var after_default = "/assets/after-DRJh-LZC.jpg";
var before_default = "/assets/before-CKsmYqt9.jpg";
function BeforeAfter() {
	const [pos, setPos] = (0, import_react.useState)(50);
	const ref = (0, import_react.useRef)(null);
	const drag = (clientX) => {
		if (!ref.current) return;
		const r = ref.current.getBoundingClientRect();
		const p = (clientX - r.left) / r.width * 100;
		setPos(Math.max(2, Math.min(98, p)));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "px-8 md:px-12 py-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-4xl mb-12",
			"data-reveal": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-eyebrow mb-3",
					children: "Transformations · 04"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-split": true,
					className: "font-display text-5xl md:text-7xl mb-6",
					children: splitChars("Before. After.")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground/60 max-w-xl leading-relaxed",
					children: "Drag across to witness a tired apartment reimagined into a curated residence."
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			ref,
			className: "mask-reveal relative w-full aspect-[16/10] overflow-hidden cursor-ew-resize select-none",
			onMouseMove: (e) => e.buttons === 1 && drag(e.clientX),
			onMouseDown: (e) => drag(e.clientX),
			onTouchMove: (e) => drag(e.touches[0].clientX),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: after_default,
					alt: "After",
					className: "absolute inset-0 w-full h-full object-cover",
					loading: "lazy"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 overflow-hidden",
					style: { clipPath: `inset(0 ${100 - pos}% 0 0)` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: before_default,
						alt: "Before",
						className: "absolute inset-0 w-full h-full object-cover",
						loading: "lazy"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute top-0 bottom-0 w-px bg-[#C8A45D]",
					style: { left: `${pos}%` },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full border border-[#C8A45D] bg-background/60 backdrop-blur grid place-items-center text-[#C8A45D]",
						children: "◂ ▸"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-6 left-6 text-meta bg-background/50 px-3 py-1",
					children: "Before"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "absolute top-6 right-6 text-meta bg-[#C8A45D] text-black px-3 py-1",
					children: "After"
				})
			]
		})]
	});
}
var material_finishes_default = "/assets/material-finishes-OsnYcVtw.jpg";
var material_furniture_default = "/assets/material-furniture-DcKRhZfE.jpg";
var material_lighting_default = "/assets/material-lighting-BYXoqCF7.jpg";
var material_marble_default = "/assets/material-marble-BdeziBmK.jpg";
var material_wood_default = "/assets/material-wood-Co9bdefP.jpg";
function Materials() {
	const items = [
		{
			img: material_marble_default,
			t: "Italian Marble",
			n: "01"
		},
		{
			img: material_wood_default,
			t: "Natural Wood",
			n: "02"
		},
		{
			img: material_lighting_default,
			t: "Luxury Lighting",
			n: "03"
		},
		{
			img: material_furniture_default,
			t: "Designer Furniture",
			n: "04"
		},
		{
			img: material_finishes_default,
			t: "Custom Finishes",
			n: "05"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "bg-background pt-12 py-16 px-8 md:px-12",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex justify-between items-end mb-16 max-w-7xl mx-auto",
			"data-reveal": true,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-eyebrow mb-3",
				children: "Material Library · 05"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				"data-split": true,
				className: "font-display text-5xl md:text-7xl",
				children: splitChars("Tactile by intent.")
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "text-meta hidden md:block max-w-xs",
				children: "Premium materials sourced with a focus on quality, durability, and timeless elegance."
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "grid grid-cols-2 md:grid-cols-5 gap-3 max-w-7xl mx-auto",
			children: items.map((m, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
				"data-reveal": true,
				className: "group relative aspect-[3/4] overflow-hidden bg-background",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: m.img,
						alt: m.t,
						className: "w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:opacity-100 opacity-80",
						loading: "lazy"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 p-3 md:p-5 flex flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-eyebrow text-[#C8A45D]",
							children: m.n
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-lg sm:text-2xl md:text-3xl leading-tight",
							children: m.t
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 border border-transparent group-hover:border-[#C8A45D]/40 transition-colors" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "sr-only",
						children: i
					})
				]
			}, m.t))
		})]
	});
}
function useMaterialsAnimations() {
	useRevealAnimations();
}
function MaterialsPage() {
	useMaterialsAnimations();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Materials, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BeforeAfter, {})] });
}
//#endregion
export { MaterialsPage as component };
