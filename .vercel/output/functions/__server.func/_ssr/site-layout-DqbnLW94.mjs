import { r as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { F as ArrowUp, h as Mail, l as Phone, p as Menu, t as X } from "../_libs/lucide-react.mjs";
import { i as FaYoutube, n as FaInstagram, r as FaWhatsapp, t as FaFacebookF } from "../_libs/react-icons.mjs";
import { n as clsx } from "../_libs/class-variance-authority+clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-DqbnLW94.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
gsapWithCSS.registerPlugin(ScrollTrigger);
function useLenis() {
	(0, import_react.useEffect)(() => {}, []);
}
var client_1_default = "/assets/client-1-C7c-xvnG.jpg";
var client_2_default = "/assets/client-2-C1fD9wG9.jpg";
var client_3_default = "/assets/client-3-Cc_MQYcd.jpg";
var JAMSHEER_FINAL_01_jpg_default = "/assets/JAMSHEER%20FINAL%2001.jpg-C9fXkX07.jpeg";
var JAMSHEER_FINAL_02_jpg_default = "/assets/JAMSHEER%20FINAL%2002.jpg-Dt3JcxI_.jpeg";
var JAMSHEER_FINAL_03_jpg_default = "/assets/JAMSHEER%20FINAL%2003.jpg-CYlZGVvj.jpeg";
var SHIBU_5_1___Photo_jpg_default = "/assets/SHIBU%205_1%20-%20Photo.jpg-BPjbaLbe.jpeg";
var SHIBU_5_2___Photo_jpg_default = "/assets/SHIBU%205_2%20-%20Photo.jpg-x14Tz7oR.jpeg";
var SHIBU_5_3___Photo_jpg_default = "/assets/SHIBU%205_3%20-%20Photo.jpg-iXWJaFIT.jpeg";
var caeris_homes_elanji_villa_1_default = "/assets/caeris-homes-elanji-villa-1-CZyG3PxE.jpeg";
var caeris_homes_elanji_villa_2_default = "/assets/caeris-homes-elanji-villa-4-C7A_InRI.jpeg";
var caeris_homes_elanji_villa_3_default = "/assets/caeris-homes-elanji-villa-3-1ONYm7jx.jpeg";
var caeris_homes_elanji_villa_4_default = "/assets/caeris-homes-elanji-villa-4-C7A_InRI.jpeg";
var CONTACT = {
	phone: "+91 8075931749",
	phone2: "+91 9400759169",
	phoneRaw: "8075931749",
	phoneHref: "tel:+918075931749",
	whatsapp: "+91 8075931749",
	whatsappHref: "https://wa.me/918075931749?text=Hi%20Caeris%20Homes%2C%20I%27d%20like%20to%20know%20more%20about%20your%20services.",
	email: "info@caerishomes.com",
	address: "Caeris Homes, Neduvelil H, Mutholapuram PO, Elanji, Ernakulam, Kerala"
};
var SOCIAL = {
	instagram: "",
	facebook: "",
	youtube: ""
};
var STATS = {
	projectsCompleted: {
		value: 100,
		suffix: "+",
		label: "Completed Projects"
	},
	yearsExperience: {
		value: 12,
		suffix: "+",
		label: "Years of Experience"
	},
	clientSatisfaction: {
		value: 98,
		suffix: "%",
		label: "Client Satisfaction"
	}
};
var projects = [
	{
		img: JAMSHEER_FINAL_01_jpg_default,
		name: "Greenfield Villa",
		location: "Elanji",
		slug: "greenfield-villa-elanji",
		type: "Contemporary Villa"
	},
	{
		img: SHIBU_5_1___Photo_jpg_default,
		name: "Hilltop Residence",
		location: "Thodupuzha",
		slug: "hilltop-residence-thodupuzha",
		type: "Modern House"
	},
	{
		img: JAMSHEER_FINAL_02_jpg_default,
		name: "Greenfield Villa",
		location: "Elanji",
		slug: "greenfield-villa-elanji-2",
		type: "Contemporary Villa"
	},
	{
		img: SHIBU_5_2___Photo_jpg_default,
		name: "Hilltop Residence",
		location: "Thodupuzha",
		slug: "hilltop-residence-thodupuzha-2",
		type: "Modern House"
	},
	{
		img: JAMSHEER_FINAL_03_jpg_default,
		name: "Greenfield Villa",
		location: "Elanji",
		slug: "greenfield-villa-elanji-3",
		type: "Contemporary Villa"
	},
	{
		img: SHIBU_5_3___Photo_jpg_default,
		name: "Hilltop Residence",
		location: "Thodupuzha",
		slug: "hilltop-residence-thodupuzha-3",
		type: "Modern House"
	},
	{
		img: caeris_homes_elanji_villa_1_default,
		name: "Lakeside Villa",
		location: "Piravom",
		slug: "lakeside-villa-piravom",
		type: "Residence"
	},
	{
		img: caeris_homes_elanji_villa_2_default,
		name: "Riverside Residence",
		location: "Muvattupuzha",
		slug: "riverside-residence-muvattupuzha",
		type: "Residence"
	},
	{
		img: caeris_homes_elanji_villa_3_default,
		name: "Palm Grove Villa",
		location: "Perumbavoor",
		slug: "palm-grove-villa-perumbavoor",
		type: "Residence"
	},
	{
		img: caeris_homes_elanji_villa_4_default,
		name: "Courtyard House",
		location: "Kothamangalam",
		slug: "courtyard-house-kothamangalam",
		type: "Residence"
	}
];
var testimonials = [
	{
		image: client_1_default,
		name: "Jaison Paul",
		location: "Mutholapuram",
		rating: 5,
		quote: "The team guided us with exceptional care at every stage. The result is a serene, beautifully refined home that feels effortless, comfortable, and truly ours."
	},
	{
		image: client_2_default,
		name: "Ebin Santhosh",
		location: "Vaduthala",
		rating: 5,
		quote: "Caeris Homes made our first home journey smooth. They explained every step clearly and stayed within our budget."
	},
	{
		image: client_3_default,
		name: "Rooban Sebastian",
		location: "Mutholapuram",
		rating: 5,
		quote: "Our home has a calm and peaceful feel. The design is simple and well planned. We are very happy with the overall experience."
	},
	{
		image: client_1_default,
		name: "K V Thomas",
		location: "Josegiri",
		rating: 5,
		quote: "We wanted a simple and practical home, and they delivered exactly that. No confusion, no hidden costs."
	},
	{
		image: client_2_default,
		name: "Simi Karunan",
		location: "Thodupuzha",
		rating: 5,
		quote: "The design feels calm and balanced. Every space is useful and comfortable for daily living."
	},
	{
		image: client_3_default,
		name: "Justin Mani",
		location: "Josegiri",
		rating: 5,
		quote: "They created a clean and peaceful home for our family. The process was clear and stress-free."
	},
	{
		image: client_1_default,
		name: "Sijimol",
		location: "Thrissur",
		rating: 5,
		quote: "A very calm and thoughtful design. The team listened to our needs and delivered beyond expectations."
	},
	{
		image: client_2_default,
		name: "Shini",
		location: "Thodupuzha",
		rating: 5,
		quote: "There is a calmness in our home that we truly value. Nothing feels excessive. Every space has purpose and comfort."
	},
	{
		image: client_3_default,
		name: "Nikhil Raj",
		location: "Thripunitura",
		rating: 5,
		quote: "They listened carefully and designed a home that reflects our daily life. The simplicity and balance make it special."
	},
	{
		image: client_1_default,
		name: "Jobin John",
		location: "Mundakkayam",
		rating: 5,
		quote: "Our priority was staying within budget without losing quality. Caeris Homes delivered exactly that, with honesty and care."
	},
	{
		image: client_2_default,
		name: "Binto Charly",
		location: "Periyapuram",
		rating: 5,
		quote: "We appreciate the way everything was planned and executed. The home feels calm, functional, and built to last."
	},
	{
		image: client_3_default,
		name: "Sajin Paul",
		location: "Piravom",
		rating: 5,
		quote: "There is a quiet elegance in the design. It is simple, but it feels complete in every way."
	},
	{
		image: client_1_default,
		name: "Sijo Mathew",
		location: "Thodupuzha",
		rating: 5,
		quote: "We never felt overwhelmed during the process. Everything was handled with clarity, and the outcome is a home we are proud of."
	},
	{
		image: client_2_default,
		name: "Sini Mathew",
		location: "Thrissur",
		rating: 5,
		quote: "Our home feels open, calm, and well thought out. It suits our lifestyle perfectly."
	},
	{
		image: client_3_default,
		name: "Jils Madhavadas",
		location: "Cherthala",
		rating: 5,
		quote: "What stands out is their honesty and attention to detail. The home feels strong, simple, and reliable."
	},
	{
		image: client_1_default,
		name: "Bino Joseph",
		location: "Josegiri",
		rating: 5,
		quote: "We wanted a design that would remain timeless. Caeris Homes delivered a space that feels peaceful and lasting."
	},
	{
		image: client_2_default,
		name: "Sebaan K",
		location: "Mutholapuram",
		rating: 5,
		quote: "The experience was smooth and reassuring. Today, we live in a home that feels calm, comfortable, and complete."
	}
];
var logo_caeris_default = "/assets/logo-caeris-CSQG8huD.png";
function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
	const socialLinks = [
		{
			href: SOCIAL?.instagram,
			icon: FaInstagram,
			label: "Instagram"
		},
		{
			href: SOCIAL?.facebook,
			icon: FaFacebookF,
			label: "Facebook"
		},
		{
			href: SOCIAL?.youtube,
			icon: FaYoutube,
			label: "YouTube"
		},
		{
			href: CONTACT?.whatsappHref,
			icon: FaWhatsapp,
			label: "WhatsApp"
		}
	].filter((s) => s.href);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "bg-background text-foreground relative pt-12 pb-24 md:pb-8 px-4 sm:px-8 md:px-12",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-[90rem] mx-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 mb-12 md:mb-16",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col text-left",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-4 text-foreground/90",
							children: "Address"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[10px] md:text-sm leading-relaxed md:leading-loose text-foreground/70 font-medium whitespace-pre-line max-w-[200px]",
							children: CONTACT?.address?.split(", ").join("\n")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
								src: logo_caeris_default,
								alt: "Caeris Homes Logo",
								className: "h-12 sm:h-16 md:h-32 w-auto object-contain mb-3 md:mb-6 filter dark:invert"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-[10px] md:text-sm text-foreground/80 font-medium mb-3 md:mb-6 max-w-sm hidden sm:block",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "block font-bold text-[#C8A45D] mb-1",
									children: "Care in Every Detail"
								}), "Quality construction is our principle, our promise, and our priority."]
							}),
							socialLinks.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "flex items-center gap-3 mt-2",
								children: socialLinks.map((s) => {
									const Icon = s.icon;
									return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
										href: s.href,
										target: "_blank",
										rel: "noopener noreferrer",
										className: "w-8 h-8 md:w-9 md:h-9 rounded-full border border-foreground/15 flex items-center justify-center text-foreground/60 hover:text-[#C8A45D] hover:border-[#C8A45D] transition-colors",
										"aria-label": s.label,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { size: 14 })
									}, s.label);
								})
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-end text-right",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xs md:text-sm font-bold tracking-widest uppercase mb-2 md:mb-4 text-foreground/90",
							children: "Contact"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-2 md:space-y-3 flex flex-col items-end",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: CONTACT?.phoneHref,
									className: "flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3 h-3 md:w-4 md:h-4 hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT?.phone })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${CONTACT?.phone2?.replace(/\D/g, "")}`,
									className: "flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3 h-3 md:w-4 md:h-4 hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT?.phone2 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${CONTACT?.email}`,
									className: "flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium mt-1 md:mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3 h-3 md:w-4 md:h-4 hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "break-all",
										children: CONTACT?.email
									})]
								})
							]
						})]
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "border-t border-[#C8A45D]/30 pt-6 flex flex-col md:flex-row items-center justify-between gap-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-foreground/60 font-medium",
						children: "© Caeris Homes 2026"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: scrollToTop,
						className: "w-10 h-10 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors text-foreground/80 hover:text-[#C8A45D]",
						"aria-label": "Scroll to top",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "w-5 h-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-foreground/60 font-medium",
						children: "Designed and Developed by ENEM"
					})
				]
			})]
		})
	});
}
function FloatingContact() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed bottom-6 right-4 md:right-6 z-50 flex flex-col items-end gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: CONTACT.whatsappHref,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "w-12 h-12 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110 active:scale-95",
			"aria-label": "WhatsApp Us",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { size: 24 })
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: CONTACT.phoneHref,
			className: "flex items-center gap-3 bg-black hover:bg-gray-900 text-white pl-4 pr-5 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,0,0.25)] transition-all hover:scale-[1.03] active:scale-[0.97] group",
			"aria-label": "Call Customer Care",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "w-10 h-10 bg-[#C8A45D] rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-white group-hover:text-[#C8A45D] transition-colors",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-5 h-5" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex flex-col leading-tight",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-[10px] uppercase tracking-widest text-white/60 font-medium",
					children: "Customer Care"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm font-bold tracking-wide",
					children: CONTACT.phoneRaw
				})]
			})]
		})]
	});
}
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var links = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/construction",
		label: "Services"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/gallery",
		label: "Gallery"
	},
	{
		to: "/contact",
		label: "Contact"
	}
];
function Nav() {
	const [isScrolled, setIsScrolled] = (0, import_react.useState)(false);
	const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
	const isTransparent = useRouterState({ select: (s) => s.location.pathname }) === "/" && !isScrolled;
	(0, import_react.useEffect)(() => {
		if (isMenuOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 10);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		setIsScrolled(window.scrollY > 10);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: cn("fixed z-[90] flex items-center transition-all duration-500", isTransparent ? "top-0 left-0 right-0 px-4 md:px-8 bg-transparent border-transparent h-[120px]" : "top-4 left-4 right-4 md:left-8 md:right-8 lg:left-auto lg:right-auto lg:w-[1200px] lg:transform lg:left-1/2 lg:-translate-x-1/2 bg-white/90 backdrop-blur-md border border-border/20 shadow-lg rounded-full h-[70px] px-6 md:px-8"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-7xl mx-auto w-full flex justify-between items-center h-full",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: cn("relative z-10 block flex items-center transition-all duration-500", isTransparent ? "h-full w-[200px] md:w-[280px]" : "h-[40px] w-[150px] md:w-[180px]"),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: logo_caeris_default,
						alt: "Logo",
						className: cn("h-full w-full object-contain object-left transition-all duration-300", isTransparent ? "brightness-0 invert drop-shadow-md" : "")
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: cn("hidden md:flex items-center gap-8 text-[14px] font-medium transition-colors duration-300", isTransparent ? "text-white" : "text-foreground/80"),
					children: [links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: link.to,
						className: cn("transition-colors py-2 drop-shadow-sm", isTransparent ? "hover:text-[#C8A45D]" : "hover:text-[#C8A45D]"),
						activeProps: { className: "text-[#C8A45D] font-bold" },
						children: link.label
					}, link.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/contact",
						className: "bg-[#C8A45D] hover:bg-black text-white px-6 py-2.5 rounded text-sm transition-colors font-bold ml-4",
						children: "Get a Quote"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setIsMenuOpen(!isMenuOpen),
					className: cn("md:hidden flex items-center justify-center w-10 h-10 transition-colors", isTransparent ? "text-white" : "text-foreground"),
					"aria-label": "Toggle menu",
					children: isMenuOpen ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { size: 24 }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { size: 24 })
				})
			]
		})
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("fixed inset-0 bg-white z-[80] pt-[100px] px-6 transition-transform duration-300 ease-in-out md:hidden flex flex-col", isMenuOpen ? "translate-x-0" : "translate-x-full"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			className: "flex flex-col gap-6 text-2xl font-semibold mt-10",
			children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: link.to,
				onClick: () => setIsMenuOpen(false),
				className: "text-foreground border-b border-border/10 pb-4",
				children: link.label
			}, link.label))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-auto mb-12",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
				to: "/contact",
				onClick: () => setIsMenuOpen(false),
				className: "block w-full text-center bg-[#C8A45D] text-white py-4 rounded font-bold text-lg",
				children: "Get a Quote"
			})
		})]
	})] });
}
function Loader() {
	const [stage, setStage] = (0, import_react.useState)("initial");
	const [isVisible, setIsVisible] = (0, import_react.useState)(true);
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (sessionStorage.getItem("caeris_loaded")) {
			setStage("hidden");
			setIsVisible(false);
			return;
		}
		sessionStorage.setItem("caeris_loaded", "true");
		const progressInterval = setInterval(() => {
			setProgress((prev) => {
				if (prev >= 100) {
					clearInterval(progressInterval);
					return 100;
				}
				return Math.min(prev + Math.random() * 15, 100);
			});
		}, 150);
		const t1 = setTimeout(() => {
			setProgress(100);
			setStage("fadeLogo");
		}, 2e3);
		const t2 = setTimeout(() => {
			setStage("exit");
		}, 2500);
		const t3 = setTimeout(() => {
			setIsVisible(false);
		}, 3200);
		return () => {
			clearInterval(progressInterval);
			clearTimeout(t1);
			clearTimeout(t2);
			clearTimeout(t3);
		};
	}, []);
	if (!isVisible) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("fixed inset-0 z-[100] flex items-center justify-center bg-background transition-transform duration-700 ease-[cubic-bezier(0.76,0,0.24,1)]", stage === "exit" && "-translate-y-full"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("transition-all duration-500 ease-out flex flex-col items-center w-full px-4", stage === "fadeLogo" ? "opacity-0 scale-95 blur-sm" : "opacity-100 scale-100 blur-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold tracking-widest uppercase text-muted-foreground/30 font-heading whitespace-nowrap",
				children: ["CAERIS HOMES", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute left-0 top-0 overflow-hidden text-red-600 whitespace-nowrap transition-all duration-200 ease-out",
					style: { width: `${progress}%` },
					children: "CAERIS HOMES"
				})]
			})
		})
	});
}
function SiteLayout({ children }) {
	useLenis();
	(0, import_react.useEffect)(() => {
		const id = requestAnimationFrame(() => ScrollTrigger.refresh());
		return () => cancelAnimationFrame(id);
	}, [useRouterState({ select: (s) => s.location.pathname })]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "bg-background text-foreground",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Loader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Nav, {}),
			children,
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingContact, {})
		]
	});
}
//#endregion
export { STATS as a, cn as c, SHIBU_5_2___Photo_jpg_default as i, projects as l, JAMSHEER_FINAL_01_jpg_default as n, SiteLayout as o, JAMSHEER_FINAL_02_jpg_default as r, caeris_homes_elanji_villa_1_default as s, CONTACT as t, testimonials as u };
