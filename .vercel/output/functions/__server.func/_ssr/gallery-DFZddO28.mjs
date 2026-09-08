import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { F as ChevronLeft, P as ChevronRight, g as MapPin, n as X, t as ZoomIn } from "../_libs/lucide-react.mjs";
import { a as SiteLayout, s as projects } from "./site-layout-DqrmCT8E.mjs";
import { t as useRevealAnimations } from "./use-reveal-animations-YPiJfyKn.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/gallery-DFZddO28.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function GalleryPage() {
	useRevealAnimations();
	const [selectedIndex, setSelectedIndex] = (0, import_react.useState)(null);
	const activeProject = selectedIndex !== null ? projects[selectedIndex] : null;
	const handlePrev = (0, import_react.useCallback)(() => {
		setSelectedIndex((prev) => prev === null ? null : prev === 0 ? projects.length - 1 : prev - 1);
	}, []);
	const handleNext = (0, import_react.useCallback)(() => {
		setSelectedIndex((prev) => prev === null ? null : prev === projects.length - 1 ? 0 : prev + 1);
	}, []);
	(0, import_react.useEffect)(() => {
		const handleKeyDown = (e) => {
			if (selectedIndex === null) return;
			if (e.key === "Escape") setSelectedIndex(null);
			if (e.key === "ArrowLeft") handlePrev();
			if (e.key === "ArrowRight") handleNext();
		};
		window.addEventListener("keydown", handleKeyDown);
		if (selectedIndex !== null) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "";
		};
	}, [
		selectedIndex,
		handlePrev,
		handleNext
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "pt-20 md:pt-24 pb-16 sm:pb-24 px-4 sm:px-8 md:px-12 bg-white dark:bg-background min-h-screen",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "reveal-slide-up mb-8 sm:mb-10 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-4xl md:text-5xl font-display font-light text-foreground mb-4",
					children: "Project Gallery"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground/70 max-w-2xl mx-auto text-lg",
					children: "A curated collection of our completed residential projects. Click on any image to view details in full screen."
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: projects.map((project, idx) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					onClick: () => setSelectedIndex(idx),
					className: "group relative block overflow-hidden bg-muted aspect-[4/3] reveal-slide-up cursor-pointer rounded-xl",
					style: {
						transitionDelay: `${idx % 3 * 100}ms`,
						contentVisibility: "auto",
						containIntrinsicSize: "400px"
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: project.img,
						alt: `Project ${project.name}`,
						loading: "lazy",
						decoding: "async",
						className: "w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-[#C8A45D] text-xs tracking-widest uppercase font-semibold mb-2 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100 flex items-center gap-1.5",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5" }), project.location]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-between transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-150",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-white text-2xl font-display",
								children: project.name
							}), project.type && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-white/70 text-xs mt-0.5",
								children: project.type
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white backdrop-blur-sm group-hover:bg-[#C8A45D] group-hover:border-[#C8A45D] transition-colors",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ZoomIn, { size: 18 })
							})]
						})]
					})]
				}, idx))
			})]
		})
	}), selectedIndex !== null && activeProject && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex flex-col justify-between items-center p-4 sm:p-8 animate-in fade-in duration-200",
		onClick: () => setSelectedIndex(null),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-7xl flex items-center justify-between z-10 text-white",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#C8A45D]",
					children: [
						selectedIndex + 1,
						" / ",
						projects.length
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setSelectedIndex(null),
					className: "p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors flex items-center justify-center",
					"aria-label": "Close modal",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "w-6 h-6" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex-1 w-full max-w-6xl flex items-center justify-center my-4 overflow-hidden",
				onClick: (e) => e.stopPropagation(),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: activeProject.img,
						alt: activeProject.name,
						className: "max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition-all duration-300"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							handlePrev();
						},
						className: "absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#C8A45D] text-white transition-colors border border-white/10 shadow-lg",
						"aria-label": "Previous image",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "w-6 h-6" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: (e) => {
							e.stopPropagation();
							handleNext();
						},
						className: "absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/60 hover:bg-[#C8A45D] text-white transition-colors border border-white/10 shadow-lg",
						"aria-label": "Next image",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "w-6 h-6" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "w-full max-w-2xl text-center text-white z-10 bg-white/5 backdrop-blur-md px-6 py-4 rounded-2xl border border-white/10",
				onClick: (e) => e.stopPropagation(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "font-display text-2xl sm:text-3xl text-white mb-1",
					children: activeProject.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-4 text-xs sm:text-sm text-white/70",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-1 text-[#C8A45D] font-medium",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-3.5 h-3.5" }), activeProject.location]
					}), activeProject.type && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: ["• ", activeProject.type] })]
				})]
			})
		]
	})] });
}
//#endregion
export { GalleryPage as component };
