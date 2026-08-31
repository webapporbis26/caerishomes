import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import { A as Calendar, C as Gem, E as Clock, F as House, I as CircleCheckBig, N as ArrowRight, P as ArrowLeft, a as Settings, h as LayoutTemplate, j as Award, n as Users, v as HeartHandshake, w as Factory, y as Headset } from "../_libs/lucide-react.mjs";
import { n as AvatarFallback$1, r as AvatarImage$1, t as Avatar$1 } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { l as cn, t as Button } from "./select-FA_MzwEv.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as services, i as projects, o as testimonials, r as SiteLayout } from "./site-layout-CMLsfdzW.mjs";
import { t as splitChars } from "./split-chars-XR_qVCnk.mjs";
import { t as useRevealAnimations } from "./use-reveal-animations-fIie3TO5.mjs";
import { t as Magnetic } from "./magnetic-ByL5WlHd.mjs";
import { t as whyus_villa_default } from "./whyus-villa-Al0yjkBC.mjs";
import { t as ProjectCTA } from "./project-cta-DgapIh7i.mjs";
import { t as hero_1_desk_default } from "./hero 1 desk-C8bkpM_X.mjs";
import { t as useEmblaCarousel } from "../_libs/embla-carousel-react+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DE8sVsuw.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_2_desk_default = "/assets/hero%202%20desk-Bc7S5RXR.png";
var hero_3_desk_default = "/assets/hero%203%20desk-DLWfsPPZ.png";
var hero_1_mob_default = "/assets/hero%201%20mob-CcNDagPq.png";
var hero_2_mob_default = "/assets/hero%202%20mob-T725qirw.png";
var hero_3_mob_default = "/assets/hero%203%20mob-CCq2KPo1.png";
function Hero() {
	const images = [
		{
			desktop: hero_1_desk_default,
			mobile: hero_1_mob_default
		},
		{
			desktop: hero_2_desk_default,
			mobile: hero_2_mob_default
		},
		{
			desktop: hero_3_desk_default,
			mobile: hero_3_mob_default
		}
	];
	const [currentImage, setCurrentImage] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const timer = setInterval(() => {
			setCurrentImage((prev) => (prev + 1) % images.length);
		}, 5e3);
		return () => clearInterval(timer);
	}, [images.length]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "hero relative h-[100dvh] w-full overflow-hidden dark text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute inset-0 overflow-hidden bg-black",
				children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						media: "(max-width: 768px)",
						srcSet: img.mobile
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("source", {
						media: "(min-width: 769px)",
						srcSet: img.desktop
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: img.desktop,
						alt: `Luxury Caeris Homes architecture view ${index + 1}`,
						className: `absolute inset-0 w-full h-full object-cover transition-opacity duration-[3000ms] ease-in-out ${index === currentImage ? "opacity-100 z-10" : "opacity-0 z-0"}`
					})
				] }, index))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-20 h-full flex flex-col justify-center px-4 sm:px-8 md:px-12 pt-[120px] md:pt-[160px]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-eyebrow mb-8 hero-sub flex items-center gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-10 h-px bg-[#C8A45D]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Care in Every Detail" })]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
						className: "font-display text-[12vw] md:text-[8vw] text-foreground overflow-hidden max-w-5xl",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden",
							children: "We Build Your".split("").map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-char inline-block",
								children: c === " " ? "\xA0" : c
							}, i))
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "block overflow-hidden italic font-light text-[#C8A45D]",
							children: "Dream Home".split("").map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-char inline-block",
								children: c === " " ? "\xA0" : c
							}, i))
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "hero-sub text-foreground/70 max-w-xl leading-relaxed mt-8 text-lg",
						children: "Experienced architectural consultants crafting beautiful, luxurious residences — from concept and construction to interiors and turnkey handover."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-sub mt-12 flex flex-wrap gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/quote",
							className: "inline-block bg-[#C8A45D] text-black px-8 py-4 text-meta transition-all duration-500 hover:bg-white active:scale-[0.98] shadow-sm",
							children: "Get a Free Quote"
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Magnetic, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "inline-block border border-border/40 px-8 py-4 text-meta text-foreground transition-all duration-500 hover:border-border hover:bg-white/5 active:scale-[0.98]",
							children: "View Projects →"
						}) })]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hidden md:flex absolute bottom-6 left-1/2 -translate-x-1/2 text-meta text-foreground/60 flex-col items-center gap-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "w-px h-12 bg-white/40 animate-pulse" })
			})
		]
	});
}
var CarouselContext = import_react.createContext(null);
function useCarousel() {
	const context = import_react.useContext(CarouselContext);
	if (!context) throw new Error("useCarousel must be used within a <Carousel />");
	return context;
}
var Carousel = import_react.forwardRef(({ orientation = "horizontal", opts, setApi, plugins, className, children, ...props }, ref) => {
	const [carouselRef, api] = useEmblaCarousel({
		...opts,
		axis: orientation === "horizontal" ? "x" : "y"
	}, plugins);
	const [canScrollPrev, setCanScrollPrev] = import_react.useState(false);
	const [canScrollNext, setCanScrollNext] = import_react.useState(false);
	const onSelect = import_react.useCallback((api) => {
		if (!api) return;
		setCanScrollPrev(api.canScrollPrev());
		setCanScrollNext(api.canScrollNext());
	}, []);
	const scrollPrev = import_react.useCallback(() => {
		api?.scrollPrev();
	}, [api]);
	const scrollNext = import_react.useCallback(() => {
		api?.scrollNext();
	}, [api]);
	const handleKeyDown = import_react.useCallback((event) => {
		if (event.key === "ArrowLeft") {
			event.preventDefault();
			scrollPrev();
		} else if (event.key === "ArrowRight") {
			event.preventDefault();
			scrollNext();
		}
	}, [scrollPrev, scrollNext]);
	import_react.useEffect(() => {
		if (!api || !setApi) return;
		setApi(api);
	}, [api, setApi]);
	import_react.useEffect(() => {
		if (!api) return;
		onSelect(api);
		api.on("reInit", onSelect);
		api.on("select", onSelect);
		return () => {
			api?.off("select", onSelect);
		};
	}, [api, onSelect]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContext.Provider, {
		value: {
			carouselRef,
			api,
			opts,
			orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
			scrollPrev,
			scrollNext,
			canScrollPrev,
			canScrollNext
		},
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			onKeyDownCapture: handleKeyDown,
			className: cn("relative", className),
			role: "region",
			"aria-roledescription": "carousel",
			...props,
			children
		})
	});
});
Carousel.displayName = "Carousel";
var CarouselContent = import_react.forwardRef(({ className, ...props }, ref) => {
	const { carouselRef, orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: carouselRef,
		className: "overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			ref,
			className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
			...props
		})
	});
});
CarouselContent.displayName = "CarouselContent";
var CarouselItem = import_react.forwardRef(({ className, ...props }, ref) => {
	const { orientation } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref,
		role: "group",
		"aria-roledescription": "slide",
		className: cn("min-w-0 shrink-0 grow-0 basis-full", orientation === "horizontal" ? "pl-4" : "pt-4", className),
		...props
	});
});
CarouselItem.displayName = "CarouselItem";
var CarouselPrevious = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollPrev, canScrollPrev } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute  h-8 w-8 rounded-full", orientation === "horizontal" ? "-left-12 top-1/2 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollPrev,
		onClick: scrollPrev,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Previous slide"
		})]
	});
});
CarouselPrevious.displayName = "CarouselPrevious";
var CarouselNext = import_react.forwardRef(({ className, variant = "outline", size = "icon", ...props }, ref) => {
	const { orientation, scrollNext, canScrollNext } = useCarousel();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Button, {
		ref,
		variant,
		size,
		className: cn("absolute h-8 w-8 rounded-full", orientation === "horizontal" ? "-right-12 top-1/2 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90", className),
		disabled: !canScrollNext,
		onClick: scrollNext,
		...props,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Next slide"
		})]
	});
});
CarouselNext.displayName = "CarouselNext";
function ProjectsGrid({ limit, showViewAll = false }) {
	const items = limit ? projects.slice(0, limit) : projects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 pt-12 pb-12 md:pt-16 md:pb-16",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-7xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
				opts: {
					align: "start",
					dragFree: true
				},
				className: "w-full",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-eyebrow mb-3",
							children: "Our Projects"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							"data-split": true,
							className: "font-display text-4xl md:text-5xl lg:text-7xl",
							children: splitChars("From vision to reality.")
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/60 mt-4 max-w-xl",
							children: "On time and with unwavering commitment. Explore our newest residential commissions."
						})
					] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4",
						children: [showViewAll && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/projects",
							className: "text-meta border-b border-[#C8A45D] text-[#C8A45D] pb-2 pt-2 hover:text-foreground hover:border-border w-fit inline-block mr-2 lg:mr-4",
							children: "View all projects →"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "hidden md:flex gap-2 relative",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, {
								"aria-label": "Previous projects",
								className: "static translate-y-0 translate-x-0 h-12 w-12 bg-background border-border hover:bg-surface hover:text-[#C8A45D] transition-colors"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, {
								"aria-label": "Next projects",
								className: "static translate-y-0 translate-x-0 h-12 w-12 bg-background border-border hover:bg-surface hover:text-[#C8A45D] transition-colors"
							})]
						})]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
					className: "-ml-4 sm:-ml-6",
					children: items.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
						className: "pl-4 sm:pl-6 basis-[85%] sm:basis-1/2 lg:basis-1/3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group relative aspect-[4/3] rounded-2xl overflow-hidden h-full apple-shadow border border-white/10 cursor-grab active:cursor-grabbing",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
									src: project.img,
									alt: project.client,
									className: "w-full h-full object-cover transition-transform duration-[1000ms] ease-out group-hover:scale-[1.03]",
									loading: "lazy",
									decoding: "async"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute inset-0 p-8 flex flex-col justify-end",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
										className: "translate-y-4 group-hover:translate-y-0 transition-transform duration-500",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "font-display text-3xl md:text-4xl text-white mb-2",
												children: project.client
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-white/80 font-light tracking-wide",
												children: project.location
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
												to: "/projects",
												className: "mt-6 py-2 text-[#C8A45D] opacity-0 group-hover:opacity-100 transition-all duration-500 inline-block font-medium uppercase tracking-widest text-xs lg:text-sm",
												children: "View project →"
											})
										]
									})
								})
							]
						})
					}, project.slug))
				})]
			})
		})
	});
}
function ArchitectureIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 24 24",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1.5",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
				d: "M3 21h18",
				className: "group-hover:stroke-[#C8A45D] transition-colors duration-500"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M5 21V7l7-5 7 5v14" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M9 21v-6h6v6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: "group-hover:-rotate-12 transition-transform duration-500",
				style: { transformOrigin: "12px 4px" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4l-4 10" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("g", {
				className: "group-hover:rotate-12 transition-transform duration-500",
				style: { transformOrigin: "12px 4px" },
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 4l4 10" })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
				cx: "12",
				cy: "4",
				r: "1.5",
				className: "group-hover:fill-[#C8A45D] transition-colors duration-500"
			})
		]
	});
}
function MinimalInteriorIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 40h28a4 4 0 0 0 4-4v-4a4 4 0 0 0-4-4H22" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 40v6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M50 40v6" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M26 28a6 6 0 0 1 12 0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M42 28a6 6 0 0 1 12 0" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 46V18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 18l4-8 4 8h-8z" })
		]
	});
}
function MinimalConstructionIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 50h40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 40h40" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 30h28" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M22 40v10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M42 40v10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 30v10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M36 34l8-8 6 6-8 8z" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 38l4-4" })
		]
	});
}
function MinimalPlanningIcon(props) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
		viewBox: "0 0 64 64",
		fill: "none",
		stroke: "currentColor",
		strokeWidth: "1",
		strokeLinecap: "round",
		strokeLinejoin: "round",
		...props,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M12 44l10-10 6 6 18-18" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M36 20c0 4-3 6-3 10s3 6 3 10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M36 20v20" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M40 32l10 10-6 6-10-10" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M44 42l2-2" })
		]
	});
}
var service_1_default = "/assets/service-1-CCpMhLW-.png";
var service_2_default = "/assets/service-2-CvpAin3V.png";
var service_3_default = "/assets/service-3-uACUlbDk.png";
var service_4_default = "/assets/service-4-Bia6gE_t.png";
function Services() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#FAF9F6] text-foreground pt-12 pb-4 md:pt-16 md:pb-8 px-4 sm:px-8 md:px-12 xl:px-20 relative overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[90rem] mx-auto relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center max-w-4xl mx-auto mb-20 md:mb-28",
				"data-reveal": true,
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-center gap-4 mb-6",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-10 bg-[#C8A45D]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase",
								children: "What we do"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-10 bg-[#C8A45D]" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-4xl md:text-5xl lg:text-[4rem] mb-6 leading-tight text-foreground font-normal",
						children: [
							"We Will Help You Build Your ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C8A45D]",
								children: "Dream Home"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rotate-45 border border-[#C8A45D] mx-auto mb-6" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/60 leading-relaxed max-w-2xl mx-auto",
						children: "From concept to completion, we provide end-to-end architectural and construction solutions crafted with passion, precision, and a commitment to excellence."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-16 lg:gap-y-0",
				children: [
					{
						title: "Architectural Design",
						description: "We create visionary architectural blueprints that perfectly balance aesthetic beauty, structural integrity, and modern innovation.",
						icon: ArchitectureIcon,
						link: "/construction",
						img: service_1_default
					},
					{
						title: "Interior Designing",
						description: "We create stunning interiors that reflect your personal style while ensuring absolute functionality, comfort, and luxury in every detail.",
						icon: MinimalInteriorIcon,
						link: "/construction",
						img: service_2_default
					},
					{
						title: "Home Construction",
						description: "From laying the foundation to the final coat of paint, we build your home with precision, premium materials, and unwavering care.",
						icon: MinimalConstructionIcon,
						link: "/construction",
						img: service_3_default
					},
					{
						title: "Planning",
						description: "Our meticulous architectural planning ensures every square foot is optimized for both breathtaking aesthetics and daily utility.",
						icon: MinimalPlanningIcon,
						link: "/construction",
						img: service_4_default
					}
				].map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: service.link,
					className: "group flex flex-col bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_60px_rgba(0,0,0,0.06)] relative pt-12 transition-all duration-500 overflow-visible mt-8 lg:mt-0",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute -top-10 left-1/2 -translate-x-1/2 w-20 h-20 rounded-full bg-[#C8A45D] flex items-center justify-center shadow-[0_0_0_8px_white,0_10px_20px_rgba(200,164,93,0.3)] z-10 transition-transform duration-500 group-hover:scale-110",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(service.icon, {
								className: "w-10 h-10 text-white",
								strokeWidth: 1
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-center px-6 pb-8 pt-6 flex-1 flex flex-col",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display text-2xl md:text-3xl mb-4 text-foreground group-hover:text-[#C8A45D] transition-colors",
								children: service.title
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground/60 text-sm leading-relaxed font-light mb-4 flex-1",
								children: service.description
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "h-[200px] w-full overflow-hidden rounded-b-3xl mt-auto",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: service.img,
								alt: service.title,
								className: "w-full h-full object-cover transition-transform duration-[1500ms] ease-out group-hover:scale-105"
							})
						})
					]
				}, i))
			})]
		})
	});
}
var Avatar = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar$1, {
	ref,
	className: cn("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", className),
	...props
}));
Avatar.displayName = Avatar$1.displayName;
var AvatarImage = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage$1, {
	ref,
	className: cn("aspect-square h-full w-full", className),
	...props
}));
AvatarImage.displayName = AvatarImage$1.displayName;
var AvatarFallback = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarFallback$1, {
	ref,
	className: cn("flex h-full w-full items-center justify-center rounded-full bg-muted", className),
	...props
}));
AvatarFallback.displayName = AvatarFallback$1.displayName;
function TestimonialCard({ author, text, href, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(href ? "a" : "div", {
		...href ? { href } : {},
		className: cn("flex flex-col rounded-lg border-t", "bg-gradient-to-b from-muted/50 to-muted/10", "p-4 text-start sm:p-6", "hover:from-muted/60 hover:to-muted/20", "max-w-[320px] sm:max-w-[320px]", "transition-colors duration-300 shadow-none", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
				className: "h-12 w-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AvatarImage, {
					src: author.avatar,
					alt: author.name
				})
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-start",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
					className: "text-md font-semibold leading-none",
					children: author.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-sm text-muted-foreground",
					children: author.handle
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "sm:text-md mt-4 text-sm text-muted-foreground",
			children: text
		})]
	});
}
function TestimonialsSection({ title, description, testimonials, className }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: cn("bg-background text-foreground", "py-12 md:py-16 px-0 overflow-hidden", className),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex max-w-[1280px] flex-col items-center gap-4 text-center sm:gap-16",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col items-center gap-4 px-4 sm:gap-8",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "max-w-[720px] text-3xl font-semibold leading-tight sm:text-5xl sm:leading-tight",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-md max-w-[600px] font-medium text-muted-foreground sm:text-xl",
					children: description
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative flex w-full flex-col items-center justify-center overflow-hidden",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]",
						children: testimonials.map((testimonial, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { ...testimonial }, `a-${i}`))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						"aria-hidden": "true",
						className: "flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]",
						children: testimonials.map((testimonial, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialCard, { ...testimonial }, `b-${i}`))
					})]
				})
			})]
		})
	});
}
function Testimonials() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		id: "testimonials",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TestimonialsSection, {
			title: "Voices of Trust",
			description: "Hear from families who have experienced our commitment to quality, transparency, and care firsthand.",
			testimonials: testimonials.map((t) => ({
				author: {
					name: t.name,
					handle: t.location,
					avatar: t.image
				},
				text: t.quote
			})),
			className: "bg-[#FAF9F6] border-y border-border/10"
		})
	});
}
function WhatWeDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 pt-8 pb-4 md:pt-12 md:pb-8 border-y border-border/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-start",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-eyebrow mb-4",
					children: "What we do"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-split": true,
					className: "font-display text-4xl md:text-5xl lg:text-7xl leading-tight",
					children: splitChars("We Build Your Dream Home")
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "space-y-6",
				children: services.map((service, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					className: "border-l border-[#C8A45D]/40 pl-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-xl mb-2 text-foreground",
						children: service.title
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/70 leading-relaxed",
						children: service.description
					})]
				}, i))
			})]
		})
	});
}
function WhyUs() {
	const topFeatures = [
		{
			title: "Easy Accessibility",
			desc: "We are always reachable and available when you need support or clarity.",
			icon: Users
		},
		{
			title: "Trust & Credibility",
			desc: "We build lasting relationships through honesty, consistency, and dependable work.",
			icon: Award
		},
		{
			title: "Clear Budgets",
			desc: "We offer transparent estimates with complete clarity and no hidden costs.",
			icon: Settings
		},
		{
			title: "Reliable Timelines",
			desc: "We plan with care and deliver projects on time, as promised.",
			icon: Calendar
		},
		{
			title: "Quality & Comfort",
			desc: "We focus on materials and finishes that ensure lasting strength and everyday comfort.",
			icon: Gem
		},
		{
			title: "Personal Service",
			desc: "We stay closely involved, guiding you through every stage with care.",
			icon: Headset
		},
		{
			title: "Local Expertise",
			desc: "We understand local conditions, approvals, and practical building requirements.",
			icon: House
		}
	];
	const principles = [
		{
			num: "01",
			title: "Build with Integrity",
			subtitle: "OUR COMMITMENT",
			desc: "We do what we promise, with honesty in every detail and decision.",
			icon: Award
		},
		{
			num: "02",
			title: "Simplicity",
			subtitle: "OUR APPROACH",
			desc: "We believe in clear thinking, clean design, and straightforward processes.",
			icon: LayoutTemplate
		},
		{
			num: "03",
			title: "Adaptability",
			subtitle: "OUR PROMISE",
			desc: "We stay flexible and responsive, shaping each home to fit your needs and changing priorities.",
			icon: House
		}
	];
	const bottomGuarantees = [
		{
			title: "Certified Quality\nAssurance",
			icon: CircleCheckBig
		},
		{
			title: "Advanced Building\nTechnology",
			icon: Settings
		},
		{
			title: "10 Year Structural\nWarranty",
			icon: Award
		},
		{
			title: "Dedicated Project\nSupport",
			icon: Headset
		},
		{
			title: "Transparent Process\n& On-Time Delivery",
			icon: Factory
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-white pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 xl:px-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid lg:grid-cols-2 gap-12 lg:gap-8 items-center mb-24 relative z-10",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "max-w-xl",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase mb-6",
								children: "WHY CAERIS HOMES"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
								className: "font-display text-5xl md:text-6xl text-foreground font-normal leading-[1.1] mb-6",
								children: [
									"Crafted Around You. ",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-[#C8A45D]",
										children: "Built to Perfection."
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex items-center gap-4 mb-6",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-12 bg-[#C8A45D]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rotate-45 border border-[#C8A45D]" })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-foreground/70 text-lg leading-relaxed mb-10 max-w-md",
								children: "With years of expertise and a passion for design, we create bespoke homes that reflect your lifestyle, your values, and your vision of luxury."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "space-y-6",
								children: topFeatures.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start gap-4 group",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "w-10 h-10 rounded-full bg-[#C8A45D] flex items-center justify-center flex-shrink-0 shadow-[0_0_0_4px_rgba(200,164,93,0.15)] transition-transform group-hover:scale-110",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
											className: "w-4 h-4 text-white",
											strokeWidth: 1.5
										})
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "font-display text-base text-foreground font-medium mb-1",
										children: item.title
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
										className: "text-foreground/60 text-sm",
										children: item.desc
									})] })]
								}, i))
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative h-[500px] lg:h-[700px] w-full mt-10 lg:mt-0",
						"data-reveal": true,
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute inset-0 overflow-hidden shadow-2xl",
							style: { clipPath: "polygon(15% 0, 100% 0, 100% 100%, 0 100%, 5% 50%)" },
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: whyus_villa_default,
								alt: "Luxury Villa Design",
								className: "w-full h-full object-cover transition-transform duration-[2000ms] hover:scale-105"
							})
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-24",
					"data-reveal": true,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-center mb-12",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-display text-3xl md:text-4xl text-foreground font-normal mb-6",
							children: "Our Core Principles"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center justify-center gap-4",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-12 bg-[#C8A45D]/40" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-2 h-2 rotate-45 bg-[#C8A45D]" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-12 bg-[#C8A45D]/40" })
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid md:grid-cols-3 gap-6",
						children: principles.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-[#FAF9F6] rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-lg transition-shadow",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-2xl text-foreground mb-2",
									children: item.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#C8A45D] text-sm font-medium italic mb-4",
									children: item.subtitle
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/60 text-sm leading-relaxed mb-6 max-w-[85%]",
									children: item.desc
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "absolute right-6 bottom-6 opacity-10 group-hover:opacity-20 transition-opacity",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
										className: "w-24 h-24 text-[#C8A45D]",
										strokeWidth: .5
									})
								})
							]
						}, i))
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#C8A45D]/10 p-6 md:p-8",
					"data-reveal": true,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-2 md:grid-cols-5 divide-y md:divide-y-0 md:divide-x divide-border/10",
						children: bottomGuarantees.map((item, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col xl:flex-row items-center justify-center gap-4 p-4 text-center xl:text-left group",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-12 h-12 flex-shrink-0 flex items-center justify-center text-[#C8A45D]",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(item.icon, {
									className: "w-8 h-8 transition-transform group-hover:scale-110",
									strokeWidth: 1
								})
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "font-display text-[13px] lg:text-sm text-foreground font-medium leading-snug whitespace-pre-line",
								children: item.title
							})]
						}, i))
					})
				})
			]
		})
	});
}
var about_villa_default = "/assets/about-villa-CKiHRepm.png";
function YourStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-[#FAF9F6] relative overflow-hidden pt-16 pb-4 md:pt-24 md:pb-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[90rem] mx-auto grid md:grid-cols-2 items-center gap-12 relative z-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pl-4 sm:pl-8 md:pl-12 xl:pl-20 pr-4 md:pr-0 z-20",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-4 mb-6",
						"data-reveal": true,
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-8 bg-[#C8A45D]" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#C8A45D] text-sm font-bold tracking-[0.2em] uppercase",
								children: "ABOUT US"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-8 bg-[#C8A45D]" })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "font-display text-5xl md:text-6xl lg:text-7xl mb-8 leading-tight text-foreground font-normal",
						"data-reveal": true,
						children: [
							"A space to recharge ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C8A45D] italic",
								children: "life's"
							}),
							" batteries."
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "w-2 h-2 rotate-45 border border-[#C8A45D] mb-8",
						"data-reveal": true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-foreground/60 leading-relaxed text-lg max-w-lg",
						"data-reveal": true,
						children: "Caeris Homes is a residential construction company based in Elanji, Ernakulam, Kerala. We specialize in building practical homes designed for everyday living. Our focus is on smart design, clear planning, and reliable execution. We work closely with each client to understand their needs and budget. With a strong local presence and a hands-on approach, we ensure every project is handled with care. Our goal is simple. To deliver homes that are functional, durable, and built with trust."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 space-y-6 max-w-lg",
						"data-reveal": true,
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[#C8A45D] font-display text-xl mb-2",
							children: "MISSION"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/60 leading-relaxed",
							children: "To build functional and lasting homes that respect every client’s budget, needs, and vision."
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-[#C8A45D] font-display text-xl mb-2",
							children: "VISION"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/60 leading-relaxed",
							children: "To become the most trusted name for standard residential homes across Kerala."
						})] })]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative h-[300px] sm:h-[400px] md:h-[600px] w-full pr-4 md:pr-8",
				"data-reveal": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF9F6] to-transparent z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: about_villa_default,
					alt: "Luxury Villa Exterior",
					className: "w-full h-full object-cover rounded-3xl shadow-2xl"
				})]
			})]
		})
	});
}
function useHomeAnimations() {
	useRevealAnimations();
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.from(".hero-char", {
				yPercent: 110,
				opacity: 0,
				duration: 1.2,
				ease: "expo.out",
				stagger: .018,
				delay: .2
			});
			gsapWithCSS.from(".hero-sub > *", {
				y: 30,
				opacity: 0,
				duration: 1,
				ease: "expo.out",
				stagger: .1,
				delay: 1.1
			});
			gsapWithCSS.to(".hero-img", {
				scale: 1,
				duration: 2.4,
				ease: "expo.out"
			});
			gsapWithCSS.to(".hero-img", {
				yPercent: 25,
				ease: "none",
				scrollTrigger: {
					trigger: ".hero",
					start: "top top",
					end: "bottom top",
					scrub: true
				}
			});
			gsapWithCSS.utils.toArray(".counter").forEach((el) => {
				const target = Number(el.dataset.count || 0);
				const obj = { v: 0 };
				gsapWithCSS.to(obj, {
					v: target,
					duration: 2.2,
					ease: "expo.out",
					scrollTrigger: {
						trigger: el,
						start: "top 80%"
					},
					onUpdate: () => {
						el.textContent = Math.round(obj.v).toString();
					}
				});
			});
		});
		return () => ctx.revert();
	}, []);
}
function Stats() {
	const containerRef = (0, import_react.useRef)(null);
	const stats = [
		{
			n: 20,
			suf: "+",
			l: "Projects Delivered",
			desc: "Successfully completed premium residential projects.",
			icon: House
		},
		{
			n: 5,
			suf: "+",
			l: "Years Experience",
			desc: "Delivering architectural and construction excellence.",
			icon: Clock
		},
		{
			n: 98,
			suf: "%",
			l: "Client Satisfaction",
			desc: "Trusted by families to build their dream homes.",
			icon: HeartHandshake
		}
	];
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			gsapWithCSS.utils.toArray(".stat-counter").forEach((el) => {
				const target = Number(el.dataset.count || 0);
				const obj = { v: 0 };
				gsapWithCSS.to(obj, {
					v: target,
					duration: 2.5,
					ease: "power2.out",
					scrollTrigger: {
						trigger: el,
						start: "top 95%"
					},
					onUpdate: () => {
						el.textContent = Math.round(obj.v).toString();
					}
				});
			});
		}, containerRef);
		return () => ctx.revert();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		ref: containerRef,
		className: "px-4 sm:px-8 md:px-12 xl:px-20 pt-12 md:pt-16 pb-8 md:pb-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-6xl mx-auto px-4 md:px-8 lg:px-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8",
				children: stats.map((s) => {
					const Icon = s.icon;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						"data-reveal": true,
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mb-6",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, {
									className: "w-10 h-10 text-[#C8A45D]",
									strokeWidth: 1.5
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "font-display text-4xl md:text-5xl text-foreground mb-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "stat-counter",
									"data-count": s.n,
									children: s.n
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: s.suf })]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-[#C8A45D] uppercase tracking-[0.15em] text-xs font-bold mb-4",
								children: s.l
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-foreground/60 max-w-[220px] leading-relaxed",
								children: s.desc
							})
						]
					}, s.l);
				})
			})
		})
	});
}
function HomePage() {
	useHomeAnimations();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Services, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhatWeDo, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsGrid, {
			limit: 6,
			showViewAll: true
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCTA, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(WhyUs, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(YourStory, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Testimonials, {})
	] });
}
//#endregion
export { HomePage as component };
