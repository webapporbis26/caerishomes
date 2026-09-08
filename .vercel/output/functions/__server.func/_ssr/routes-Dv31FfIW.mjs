import { o as __toESM } from "../_runtime.mjs";
import { n as require_react } from "../_libs/@radix-ui/react-compose-refs+[...].mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { g as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { A as Factory, B as ArrowRight, C as Headset, H as House, I as Calendar, N as Clock, O as Gem, R as Award, S as HeartHandshake, U as CircleCheckBig, W as CircleCheck, c as Settings, l as Quote, r as Users, y as LayoutTemplate } from "../_libs/lucide-react.mjs";
import { a as SiteLayout, c as testimonials, i as STATS, r as Magnetic, s as projects } from "./site-layout-DqrmCT8E.mjs";
import { t as splitChars } from "./split-chars-2vro5If-.mjs";
import { t as whyus_villa_default } from "./whyus-villa-BnqfMg9F.mjs";
import { a as CarouselPrevious, i as CarouselNext, n as CarouselContent, r as CarouselItem, t as Carousel } from "./carousel-D_PgV_Xe.mjs";
import { t as Autoplay } from "../_libs/embla-carousel-autoplay.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Dv31FfIW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var hero_1_desk_default = "/assets/hero%201%20desk-BWMpKZvJ.webp";
var hero_2_desk_default = "/assets/hero%202%20desk-BT7xLp7c.webp";
var hero_3_desk_default = "/assets/hero%203%20desk-PdHkyDGD.webp";
var hero_1_mob_default = "/assets/hero%201%20mob-Cd_VwJ6U.webp";
var hero_2_mob_default = "/assets/hero%202%20mob-DHO7j-79.webp";
var hero_3_mob_default = "/assets/hero%203%20mob-B7HdUk3O.webp";
function Hero() {
	const images = [
		{
			desktop: hero_1_desk_default,
			mobile: hero_1_mob_default,
			title: "Caeris Homes – Celebrating Excellence in Kerala"
		},
		{
			desktop: hero_2_desk_default,
			mobile: hero_2_mob_default,
			title: "Caeris Homes – Building Your Dream Home"
		},
		{
			desktop: hero_3_desk_default,
			mobile: hero_3_mob_default,
			title: "Caeris Homes – Generations of Quality Construction"
		}
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "relative w-full bg-black",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
			plugins: [import_react.useRef(Autoplay({
				delay: 5e3,
				stopOnInteraction: false
			})).current],
			className: "w-full",
			opts: {
				loop: true,
				align: "start"
			},
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
					className: "ml-0",
					children: images.map((img, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(CarouselItem, {
						className: "pl-0 basis-full relative h-[100dvh] w-full overflow-hidden",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/40 z-10" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("picture", { children: [
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
									alt: `Slide ${index + 1}`,
									className: "w-full h-full object-cover"
								})
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 z-20 flex flex-col justify-center px-4 sm:px-8 md:px-12 lg:px-24",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
									className: "max-w-4xl mx-auto md:mx-0",
									children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
										className: "text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight",
										children: img.title
									})
								})
							})
						]
					}, index))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "hidden md:flex absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 h-12 w-12 border-0 bg-black/20 hover:bg-white/20 text-white z-30 transition-all backdrop-blur-sm" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "hidden md:flex absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 h-12 w-12 border-0 bg-black/20 hover:bg-white/20 text-white z-30 transition-all backdrop-blur-sm" })
			]
		})
	});
}
function ProjectCTA() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "px-4 sm:px-8 md:px-12 xl:px-20 py-8 bg-[#C8A45D] text-foreground",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto flex flex-col md:flex-row md:items-center md:justify-between gap-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				"data-reveal": true,
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-meta mb-3 opacity-70",
					children: "Let's begin"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					"data-split": true,
					className: "font-display text-3xl md:text-4xl lg:text-5xl leading-tight",
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
function ProjectsGrid({ limit, showViewAll = false }) {
	const displayProjects = limit ? projects.slice(0, limit) : projects;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-10 bg-muted/10",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-4 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col md:flex-row justify-between items-end mb-12 gap-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-[#C8A45D] font-bold tracking-widest uppercase mb-3 text-sm",
					children: "Portfolio"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground",
					children: "Our Projects"
				})] }), showViewAll && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/projects",
					className: "group flex items-center gap-2 text-foreground font-bold hover:text-[#C8A45D] transition-colors",
					children: ["View All Projects", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform" })]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
				children: displayProjects.map((project, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "bg-card rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-shadow duration-300 border border-border/50 group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "relative aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: project.img,
							alt: project.name,
							className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500",
							loading: "lazy",
							onError: (e) => {
								e.target.src = "/og-image.jpg";
							}
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-6 text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-bold text-foreground mb-2",
							children: project.name
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: `/projects`,
							className: "inline-block mt-2 text-sm font-bold text-[#C8A45D] uppercase tracking-wider hover:text-foreground transition-colors",
							children: "View Project"
						})]
					})]
				}, i))
			})]
		})
	});
}
function Testimonials() {
	const plugin = import_react.useRef(Autoplay({
		delay: 3e3,
		stopOnInteraction: false,
		stopOnMouseEnter: true
	}));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-8 md:py-10 bg-muted/10 overflow-hidden relative",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-4 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-10 md:mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-[#C8A45D] font-bold tracking-widest uppercase mb-2 text-sm",
					children: "Testimonials"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground",
					children: "What Our Clients Say"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-w-[90rem] mx-auto relative px-4 md:px-12",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Carousel, {
					plugins: [plugin.current],
					className: "w-full",
					opts: {
						align: "start",
						loop: true
					},
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselContent, {
						className: "-ml-4 md:-ml-8",
						children: testimonials.map((t, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselItem, {
							className: "pl-4 md:pl-8 basis-full sm:basis-1/2 lg:basis-1/3",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "bg-card p-6 md:p-8 rounded-xl shadow-sm border border-border/40 hover:shadow-lg transition-shadow duration-300 relative h-full flex flex-col justify-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Quote, { className: "absolute top-4 right-4 w-8 h-8 text-[#C8A45D]/10 group-hover:text-[#C8A45D]/20 transition-colors" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex text-[#C8A45D] text-base mb-4",
										children: Array.from({ length: t.rating || 5 }).map((_, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "★" }, i))
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
										className: "text-foreground/80 leading-relaxed mb-6 italic text-sm md:text-base",
										children: [
											"\"",
											t.quote,
											"\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: "flex items-center gap-3",
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
											className: "font-bold text-foreground text-base",
											children: t.name
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-[#C8A45D] text-xs font-semibold uppercase tracking-wide",
											children: t.location
										})] })
									})
								]
							})
						}, index))
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hidden md:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselPrevious, { className: "absolute -left-12 top-1/2 -translate-y-1/2 h-10 w-10 border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white bg-transparent" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CarouselNext, { className: "absolute -right-12 top-1/2 -translate-y-1/2 h-10 w-10 border border-[#C8A45D]/40 text-[#C8A45D] hover:bg-[#C8A45D] hover:text-white bg-transparent" })]
					})]
				})
			})]
		})
	});
}
var consultation_default = "/assets/consultation-D4F6KZAC.png";
var construction_default = "/assets/construction-MNSYH_Us.png";
var architecture_default = "/assets/architecture-MqJCQjOG.png";
var interior_design_default = "/assets/interior_design-BJKfcfZk.png";
function WhatWeDo() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-10 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[1400px] mx-auto px-4 md:px-8",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "text-center mb-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-[#C8A45D] font-bold tracking-widest uppercase mb-3 text-sm",
					children: "Expertise"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl lg:text-5xl font-bold text-foreground",
					children: "Areas of Excellence"
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6",
				children: [
					{
						title: "Consultation",
						img: consultation_default
					},
					{
						title: "Construction",
						img: construction_default
					},
					{
						title: "Architecture",
						img: architecture_default
					},
					{
						title: "Interior Design",
						img: interior_design_default
					}
				].map((cat, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative aspect-[3/4] rounded-lg overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-all duration-300",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							loading: "lazy",
							decoding: "async",
							src: cat.img,
							alt: cat.title,
							className: "w-full h-full object-cover group-hover:scale-110 transition-transform duration-700",
							onError: (e) => {
								e.target.src = "/og-image.jpg";
							}
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "absolute bottom-0 left-0 w-full p-6 text-center",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-white text-xl font-bold uppercase tracking-wide",
								children: cat.title
							})
						})
					]
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
		className: "bg-card pt-12 md:pt-16 pb-12 md:pb-16 overflow-hidden relative",
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
								className: "font-display text-3xl md:text-4xl lg:text-5xl text-foreground font-normal leading-[1.1] mb-6",
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
								loading: "lazy",
								decoding: "async",
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
							className: "bg-surface rounded-2xl p-8 lg:p-10 relative overflow-hidden group hover:shadow-lg transition-shadow",
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
					className: "bg-card rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-[#C8A45D]/10 p-6 md:p-8",
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
var about_villa_default = "/assets/about-villa-CVd1v1zd.webp";
function YourStory() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-surface relative overflow-hidden pt-16 pb-4 md:pt-24 md:pb-8",
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
						className: "font-display text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight text-foreground font-normal",
						"data-reveal": true,
						children: [
							"Built with Care. ",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[#C8A45D]",
								children: "Made for Life."
							})
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
					loading: "lazy",
					decoding: "async",
					src: about_villa_default,
					alt: "Luxury Villa Exterior",
					className: "w-full h-full object-cover rounded-3xl shadow-2xl"
				})]
			})]
		})
	});
}
function Stats() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "bg-background py-10 px-4 sm:px-6 md:px-8",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-5xl mx-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "bg-card shadow-[0_8px_30px_rgb(0,0,0,0.12)] rounded-lg p-6 md:p-10 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4 border border-border/10",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(House, { className: "w-8 h-8 text-[#C8A45D]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-3xl md:text-4xl font-bold text-foreground",
								children: [STATS.projectsCompleted.value, STATS.projectsCompleted.suffix]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold uppercase text-muted-foreground mt-1",
								children: STATS.projectsCompleted.label
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block w-px h-24 bg-border/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "w-8 h-8 text-[#C8A45D]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-3xl md:text-4xl font-bold text-foreground",
								children: [STATS.yearsExperience.value, STATS.yearsExperience.suffix]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold uppercase text-muted-foreground mt-1",
								children: STATS.yearsExperience.label
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "hidden md:block w-px h-24 bg-border/40" }),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "w-16 h-16 rounded-full bg-[#f8f9fa] flex items-center justify-center mb-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeartHandshake, { className: "w-8 h-8 text-[#C8A45D]" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-3xl md:text-4xl font-bold text-foreground",
								children: [STATS.clientSatisfaction.value, STATS.clientSatisfaction.suffix]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-sm font-semibold uppercase text-muted-foreground mt-1",
								children: STATS.clientSatisfaction.label
							})
						]
					})
				]
			})
		})
	});
}
function HomeAbout() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
		className: "py-10 md:py-10 px-4 md:px-8 bg-background",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "text-[#C8A45D] font-bold tracking-widest uppercase mb-3 text-sm",
					children: "About Caeris Homes"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-foreground leading-tight",
					children: "Built with Care. Made for Life."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-muted-foreground text-lg mb-8 leading-relaxed",
					children: "Caeris Homes is a residential construction company based in Elanji, Ernakulam, Kerala. We specialize in building practical homes designed for everyday living. Our focus is on smart design, clear planning, and reliable execution. We work closely with each client to understand their needs and budget. With a strong local presence and a hands-on approach, we ensure every project is handled with care. Our goal is simple. To deliver homes that are functional, durable, and built with trust."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "space-y-4 mb-10",
					children: [
						"Over 5 years of construction experience",
						"Transparent pricing with no hidden costs",
						"20+ successfully completed residential projects",
						"Premium branded materials (Ultratech, Jindal, etc.)"
					].map((point, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CircleCheck, { className: "w-6 h-6 text-[#C8A45D] shrink-0" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-foreground font-medium",
							children: point
						})]
					}, i))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/about",
					className: "inline-block bg-foreground text-background hover:bg-[#C8A45D] px-8 py-4 rounded font-bold transition-colors",
					children: "Discover More About Us"
				})
			] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[#C8A45D] rounded-lg translate-x-4 translate-y-4 md:translate-x-6 md:translate-y-6 -z-10" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					loading: "lazy",
					decoding: "async",
					src: about_villa_default,
					alt: "Caeris Homes Villa",
					className: "w-full h-auto rounded-lg shadow-xl object-cover aspect-[4/3]",
					onError: (e) => {
						const target = e.target;
						target.src = "/og-image.jpg";
					}
				})]
			})]
		})
	});
}
function HomePage() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SiteLayout, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Hero, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomeAbout, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stats, {}),
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
