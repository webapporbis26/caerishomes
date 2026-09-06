import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { B as House, D as Globe, N as Clock, R as ArrowRight, S as HeartHandshake, T as Handshake, b as Key, d as PencilRuler, f as PenTool, g as MapPin, l as Play, n as Users, o as ShieldCheck, u as Phone, w as HardHat, x as Heart } from "../_libs/lucide-react.mjs";
import { a as SiteLayout, c as testimonials, s as projects } from "./site-layout-mg_vMmDC.mjs";
import { t as useRevealAnimations } from "./use-reveal-animations-BWoamc3F.mjs";
import { a as CarouselPrevious, i as CarouselNext, n as CarouselContent, r as CarouselItem, t as Carousel } from "./carousel-CCI2U8Fn.mjs";
import { t as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/projects-BXgWds96.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var projects_hero_default = "/assets/projects_hero-DKRimB_s.webp";
function ProjectsHero() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "relative w-full h-[100dvh] flex flex-col justify-center overflow-hidden bg-black text-white",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute inset-0 z-0",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: projects_hero_default,
						alt: "Luxury Villa Construction",
						className: "w-full h-full object-cover"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-y-0 left-0 w-full md:w-3/4 bg-gradient-to-r from-[#111111] via-[#111111]/90 to-transparent z-10" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#111111] via-[#111111]/50 to-transparent z-10" })
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-32 right-12 md:right-20 z-20 text-right hidden md:block",
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-white/90 text-sm tracking-[0.2em] font-medium leading-loose uppercase",
					children: [
						"Spaces",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"For A Better",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Tomorrow"
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative z-20 w-full max-w-[90rem] mx-auto px-4 sm:px-8 md:px-12 xl:px-20 mt-10",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "max-w-2xl text-left",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-4 mb-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-[#C8A45D] text-xs font-bold tracking-[0.25em] uppercase",
								children: "OUR PROJECTS"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-16 h-[1px] bg-[#C8A45D]/50" })]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-5xl md:text-6xl lg:text-[5.5rem] leading-[1.1] text-white mb-8 font-normal tracking-tight",
							children: [
								"From Vision ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"to ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#C8A45D]",
									children: "Reality"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-white/70 text-lg md:text-xl font-light leading-relaxed mb-12 max-w-lg",
							children: "Every project we build is a reflection of trust, creativity, and precision. Explore our latest residential commissions across India and beyond."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col sm:flex-row items-start sm:items-center gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "inline-flex items-center gap-3 bg-[#B89650] hover:bg-[#a68645] text-white px-8 py-4 font-bold tracking-[0.15em] uppercase text-xs rounded-sm shadow-[0_8px_20px_rgba(184,150,80,0.3)] transition-all hover:-translate-y-1",
								children: ["VIEW ALL PROJECTS ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								className: "group inline-flex items-center gap-4 text-xs font-medium tracking-wide text-white hover:text-[#C8A45D] transition-colors",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "w-12 h-12 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:border-[#C8A45D] transition-all",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, {
										className: "w-4 h-4 ml-1 fill-transparent",
										strokeWidth: 1.5
									})
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
									className: "text-left leading-tight",
									children: [
										"Watch",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
										"Our Story"
									]
								})]
							})]
						})
					]
				})
			})
		]
	});
}
function ProjectsFeatured() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative z-30 px-4 sm:px-8 md:px-12 xl:px-20 py-20 bg-surface",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[90rem] mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid md:grid-cols-3 gap-6 md:gap-8",
				children: projects.slice(0, 3).map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: `/projects`,
					className: "group block relative aspect-[4/5] sm:aspect-square md:aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] bg-black",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							loading: "lazy",
							decoding: "async",
							src: project.img,
							alt: project.client,
							className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute top-6 left-6 w-12 h-12 bg-card rounded-full flex items-center justify-center shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, {
								className: "w-5 h-5 text-[#C8A45D]",
								strokeWidth: 1.5
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "absolute bottom-0 left-0 right-0 p-8 flex flex-col justify-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "font-display text-2xl md:text-3xl text-white mb-2",
									children: project.client
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-[#C8A45D] mb-6",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, { className: "w-4 h-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "text-sm font-medium",
										children: project.location
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-center gap-2 text-white text-[10px] font-bold tracking-widest uppercase opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300",
									children: ["VIEW PROJECT ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-3 h-3 text-[#C8A45D]" })]
								})
							]
						})
					]
				}, i))
			})
		})
	});
}
function ProjectsStats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[90rem] mx-auto bg-card rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.04)] border border-[#C8A45D]/10 p-8 lg:p-12",
			"data-reveal": true,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-2 md:grid-cols-5 gap-8 md:gap-0 md:divide-x divide-border/10",
				children: [
					{
						icon: House,
						value: "20+",
						label: "Homes Delivered",
						desc: "Successfully completed residential projects."
					},
					{
						icon: Users,
						value: "5+",
						label: "Years of Experience",
						desc: "Delivering excellence consistently."
					},
					{
						icon: HardHat,
						value: "100+",
						label: "Expert Team",
						desc: "Architects, engineers & professionals."
					},
					{
						icon: Handshake,
						value: "500+",
						label: "Happy Clients",
						desc: "Trusted by families across the globe."
					},
					{
						icon: Globe,
						value: "10+",
						label: "Cities",
						desc: "Projects across India and international locations."
					}
				].map((stat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center text-center px-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(stat.icon, {
							className: "w-10 h-10 text-[#C8A45D] mb-4",
							strokeWidth: 1
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display text-4xl text-foreground mb-1",
							children: stat.value
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#C8A45D] text-xs font-bold tracking-widest uppercase mb-4",
							children: stat.label
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-foreground/60 text-xs md:text-sm leading-relaxed max-w-[200px]",
							children: stat.desc
						})
					]
				}, i))
			})
		})
	});
}
var projects_video_default = "/assets/projects_video-VDAHTXjC.webp";
function ProjectsWhyChoose() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-[90rem] mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid lg:grid-cols-2 gap-16 lg:gap-20 items-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative rounded-3xl overflow-hidden aspect-[4/3] group shadow-[0_20px_50px_rgba(0,0,0,0.1)]",
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							loading: "lazy",
							decoding: "async",
							src: projects_video_default,
							alt: "Interior Video",
							className: "absolute inset-0 w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-500" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl hover:scale-110 hover:bg-card transition-all duration-300",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "w-6 h-6 text-[#C8A45D] ml-1 fill-current" })
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					"data-reveal": true,
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[#C8A45D] text-xs font-bold tracking-[0.2em] uppercase mb-6",
							children: "WHY CHOOSE CAERIS HOMES"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-normal leading-[1.1] mb-12",
							children: [
								"Built on Values. ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Focused on ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[#C8A45D]",
									children: "You."
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid sm:grid-cols-2 gap-8 md:gap-12",
							children: [
								{
									icon: PenTool,
									title: "Tailored Designs",
									desc: "Homes designed around your lifestyle and aspirations."
								},
								{
									icon: ShieldCheck,
									title: "Quality Construction",
									desc: "Premium materials and finest craftsmanship."
								},
								{
									icon: Clock,
									title: "Timely Delivery",
									desc: "On-time completion with transparency at every step."
								},
								{
									icon: HeartHandshake,
									title: "After-Sales Support",
									desc: "We stand by you, even after handover."
								}
							].map((feature, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex gap-4",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-12 h-12 flex-shrink-0 relative flex items-center justify-center",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
										className: "absolute inset-0 w-full h-full text-[#C8A45D]/20",
										viewBox: "0 0 100 100",
										fill: "currentColor",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("polygon", { points: "50 1 95 25 95 75 50 99 5 75 5 25" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(feature.icon, {
										className: "w-5 h-5 text-[#C8A45D] relative z-10",
										strokeWidth: 1.5
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-lg text-foreground font-medium mb-2",
									children: feature.title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/60 text-sm leading-relaxed",
									children: feature.desc
								})] })]
							}, i))
						})
					]
				})]
			})
		})
	});
}
function ProjectsProcess() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[90rem] mx-auto text-center",
			"data-reveal": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[#C8A45D] text-xs font-bold tracking-[0.2em] uppercase mb-4",
					children: "OUR PROCESS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-normal mb-8",
					children: "A Seamless Journey, From Start to Finish"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center justify-center gap-4 mb-20",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-12 bg-[#C8A45D]/40" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-1.5 h-1.5 rotate-45 bg-[#C8A45D]" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "h-[1px] w-12 bg-[#C8A45D]/40" })
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block absolute top-10 left-12 right-12 h-[1px] border-t-2 border-dashed border-[#C8A45D]/20 z-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10",
						children: [
							{
								icon: Users,
								title: "Consultation",
								desc: "Understanding your needs and vision."
							},
							{
								icon: PencilRuler,
								title: "Design & Planning",
								desc: "Creating designs that inspire and function."
							},
							{
								icon: HardHat,
								title: "Execution",
								desc: "Precision construction with quality checks."
							},
							{
								icon: Key,
								title: "Handover",
								desc: "Delivering your dream home, ready to live."
							},
							{
								icon: Heart,
								title: "After Care",
								desc: "Continued support for complete peace of mind."
							}
						].map((step, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-col items-center",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "w-20 h-20 bg-surface rounded-full border border-[#C8A45D]/30 flex items-center justify-center mb-6 relative",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 rounded-full border border-white m-1 shadow-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(step.icon, {
										className: "w-8 h-8 text-[#C8A45D] relative z-10",
										strokeWidth: 1
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "font-display text-lg text-foreground font-medium mb-3",
									children: step.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-foreground/60 text-xs md:text-sm leading-relaxed max-w-[180px]",
									children: step.desc
								})
							]
						}, i))
					})]
				})
			]
		})
	});
}
function ProjectsTestimonials() {
	const plugin = import_react.useRef(Autoplay({
		delay: 3e3,
		stopOnInteraction: false,
		stopOnMouseEnter: true
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[90rem] mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6",
				"data-reveal": true,
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[#C8A45D] text-xs font-bold tracking-[0.2em] uppercase mb-4",
					children: "CLIENTS SPEAK"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-normal",
					children: "Trusted by Families, Loved for Generations."
				})] })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
				plugins: [plugin.current],
				className: "w-full",
				opts: {
					align: "start",
					loop: true
				},
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
					className: "-ml-4 md:-ml-8",
					children: testimonials.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
						className: "pl-4 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/3",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "bg-surface p-8 md:p-10 rounded-2xl relative h-full flex flex-col justify-center",
							"data-reveal": true,
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "text-[#C8A45D] font-serif text-5xl leading-none absolute top-8 left-8",
									children: "“"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "text-foreground/80 text-sm md:text-base leading-relaxed mt-6 mb-8",
									children: [
										"\"",
										item.quote,
										"\""
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
									className: "font-bold text-foreground text-sm mb-1",
									children: ["- ", item.name]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-[#C8A45D] text-xs font-medium",
									children: item.location
								})] })
							]
						})
					}, item.name))
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-4 mt-8 md:absolute md:top-[-80px] md:right-0 md:mt-0 justify-end",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "relative inset-auto translate-y-0 translate-x-0 h-10 w-10 border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white bg-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "relative inset-auto translate-y-0 translate-x-0 h-10 w-10 border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white bg-transparent" })]
				})]
			})]
		})
	});
}
function ProjectsCTABanner() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 mb-20 md:mb-32",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[90rem] mx-auto relative rounded-[2rem] overflow-hidden",
			"data-reveal": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					loading: "lazy",
					decoding: "async",
					src: projects_hero_default,
					alt: "CTA Background",
					className: "absolute inset-0 w-full h-full object-cover"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#3A2E20]/90 mix-blend-multiply" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 p-10 md:p-14 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "hidden md:flex w-16 h-16 md:w-20 md:h-20 bg-[#C8A45D] rounded-full items-center justify-center flex-shrink-0 shadow-lg",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-8 h-8 text-white fill-current" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "font-display text-3xl md:text-4xl lg:text-5xl text-white font-normal leading-tight",
							children: [
								"Let's Build Something ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Extraordinary Together"
							]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/contact",
						className: "inline-flex items-center gap-3 bg-[#B89650] hover:bg-[#a68645] text-white px-8 py-5 font-bold tracking-widest uppercase text-xs rounded-sm shadow-[0_8px_20px_rgba(184,150,80,0.3)] transition-all hover:-translate-y-1",
						children: ["TALK TO US TODAY ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-4 h-4" })]
					})]
				})
			]
		})
	});
}
function ProjectsPage() {
	useRevealAnimations();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsHero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsFeatured, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsStats, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsWhyChoose, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsProcess, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsTestimonials, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectsCTABanner, {})
	] });
}
//#endregion
export { ProjectsPage as component };
