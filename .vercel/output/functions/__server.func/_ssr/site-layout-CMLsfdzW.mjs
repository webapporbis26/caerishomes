import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { n as gsapWithCSS, t as ScrollTrigger } from "../_libs/gsap.mjs";
import { M as ArrowUp, d as Menu, p as Mail, s as Phone, t as X } from "../_libs/lucide-react.mjs";
import { a as DialogOverlay$1, c as DialogTrigger$1, i as DialogDescription$1, n as DialogClose, o as DialogPortal$1, r as DialogContent$1, s as DialogTitle$1, t as Dialog$1 } from "../_libs/@radix-ui/react-dialog+[...].mjs";
import { a as SelectContent, c as SelectValue, i as Select, l as cn, n as ChatGPT_Image_Jul_2__2026__07_51_22_PM_default, o as SelectItem, r as Input, s as SelectTrigger, t as Button } from "./select-FA_MzwEv.mjs";
import { g as Link, l as useRouterState } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { n as FaWhatsapp, t as FaPhoneAlt } from "../_libs/react-icons.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/site-layout-CMLsfdzW.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function useLenis() {
	const pathname = useRouterState({ select: (s) => s.location.pathname });
	(0, import_react.useEffect)(() => {
		if (pathname === "/gallery") return;
		const lenis = new Lenis({
			duration: 1.4,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		lenis.on("scroll", ScrollTrigger.update);
		const onTick = (time) => {
			lenis.raf(time * 1e3);
		};
		gsapWithCSS.ticker.add(onTick);
		gsapWithCSS.ticker.lagSmoothing(0);
		return () => {
			gsapWithCSS.ticker.remove(onTick);
			lenis.destroy();
		};
	}, []);
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
var caeris_homes_elanji_villa_3_default = "/assets/caeris-homes-elanji-villa-3-1ONYm7jx.jpeg";
var CONTACT = {
	phone: "+91 8075931749",
	phone2: "+91 9400759169",
	phoneHref: "tel:+918075931749",
	whatsapp: "+91 8075931749",
	whatsappHref: "https://wa.me/918075931749",
	email: "hello@caerishomes.com",
	address: "Caeris Homes, Neduvelil H, Mutholapuram PO, Elanji, Ernakulam, Kerala"
};
var services = [
	{
		title: "Residential Construction",
		description: "We build well-planned homes that balance comfort, durability, and cost, ensuring long-term value for your investment."
	},
	{
		title: "Renovation & Extension",
		description: "We upgrade and expand existing homes to improve space, function, and overall living experience without unnecessary expense."
	},
	{
		title: "Design & Planning",
		description: "We create smart and practical designs that make the best use of space while keeping your budget in control."
	},
	{
		title: "Turnkey Projects",
		description: "From idea to handover, we manage the entire process so you can build your home without stress or confusion."
	},
	{
		title: "Consultation",
		description: "We prepare building plans based on your site and requirements. We also assist with K-SMART submissions, permits, approvals, completion certificates, and provide full site guidance."
	}
];
var projects = [
	{
		img: JAMSHEER_FINAL_01_jpg_default,
		client: "Mr. Jamsheer",
		location: "Kerala",
		slug: "jamsheer-1"
	},
	{
		img: SHIBU_5_1___Photo_jpg_default,
		client: "Mr. Shibu",
		location: "Kerala",
		slug: "shibu-1"
	},
	{
		img: JAMSHEER_FINAL_02_jpg_default,
		client: "Mr. Jamsheer",
		location: "Kerala",
		slug: "jamsheer-2"
	},
	{
		img: SHIBU_5_2___Photo_jpg_default,
		client: "Mr. Shibu",
		location: "Kerala",
		slug: "shibu-2"
	},
	{
		img: JAMSHEER_FINAL_03_jpg_default,
		client: "Mr. Jamsheer",
		location: "Kerala",
		slug: "jamsheer-3"
	},
	{
		img: SHIBU_5_3___Photo_jpg_default,
		client: "Mr. Shibu",
		location: "Kerala",
		slug: "shibu-3"
	},
	{
		img: caeris_homes_elanji_villa_1_default,
		client: "Client Residence",
		location: "Kerala",
		slug: "residence-1"
	},
	{
		img: caeris_homes_elanji_villa_3_default,
		client: "Client Residence",
		location: "Kerala",
		slug: "residence-2"
	},
	{
		img: caeris_homes_elanji_villa_3_default,
		client: "Client Residence",
		location: "Kerala",
		slug: "residence-3"
	},
	{
		img: caeris_homes_elanji_villa_3_default,
		client: "Client Residence",
		location: "Kerala",
		slug: "residence-4"
	}
];
var testimonials = [
	{
		image: client_1_default,
		name: "Jaison Paul",
		location: "Mutholapuram",
		quote: "The team guided us with exceptional care at every stage. The result is a serene, beautifully refined home that feels effortless, comfortable, and truly ours. Their attention to detail and thoughtful approach made the entire experience feel seamless and premium."
	},
	{
		image: client_2_default,
		name: "Ebin Santhosh",
		location: "Vaduthala",
		quote: "Caeris Homes made our first home journey smooth. They explained every step clearly and stayed within our budget."
	},
	{
		image: client_3_default,
		name: "Rooban Sebastian",
		location: "Mutholapuram",
		quote: "Our home has a calm and peaceful feel. The design is simple and well planned. We are very happy with the overall experience."
	},
	{
		image: client_1_default,
		name: "K V Thomas",
		location: "Josegiri",
		quote: "We wanted a simple and practical home, and they delivered exactly that. No confusion, no hidden costs."
	},
	{
		image: client_2_default,
		name: "Simi Karunan",
		location: "Thodupuzha",
		quote: "The design feels calm and balanced. Every space is useful and comfortable for daily living."
	},
	{
		image: client_3_default,
		name: "Justin Mani",
		location: "Josegiri",
		quote: "They created a clean and peaceful home for our family. The process was clear and stress-free."
	},
	{
		image: client_1_default,
		name: "Sijimol",
		location: "Thrissur",
		quote: "A very calm and thoughtful design. The team listened to our needs and delivered beyond expectations."
	},
	{
		image: client_2_default,
		name: "Shini",
		location: "Thodupuzha",
		quote: "There is a calmness in our home that we truly value. Nothing feels excessive. Every space has purpose and comfort."
	},
	{
		image: client_3_default,
		name: "Nikhil Raj",
		location: "Thripunitura",
		quote: "They listened carefully and designed a home that reflects our daily life. The simplicity and balance make it special."
	},
	{
		image: client_1_default,
		name: "Jobin John",
		location: "Mundakkayam",
		quote: "Our priority was staying within budget without losing quality. Caeris Homes delivered exactly that, with honesty and care."
	},
	{
		image: client_2_default,
		name: "Binto Charly",
		location: "Periyapuram",
		quote: "We appreciate the way everything was planned and executed. The home feels calm, functional, and built to last."
	},
	{
		image: client_3_default,
		name: "Sajin Paul",
		location: "Piravom",
		quote: "There is a quiet elegance in the design. It is simple, but it feels complete in every way."
	},
	{
		image: client_1_default,
		name: "Sijo Mathew",
		location: "Thodupuzha",
		quote: "We never felt overwhelmed during the process. Everything was handled with clarity, and the outcome is a home we are proud of."
	},
	{
		image: client_2_default,
		name: "Sini Mathew",
		location: "Thrissur",
		quote: "Our home feels open, calm, and well thought out. It suits our lifestyle perfectly."
	},
	{
		image: client_3_default,
		name: "Jils Madhavadas",
		location: "Cherthala",
		quote: "What stands out is their honesty and attention to detail. The home feels strong, simple, and reliable."
	},
	{
		image: client_1_default,
		name: "Bino Joseph",
		location: "Josegiri",
		quote: "We wanted a design that would remain timeless. Caeris Homes delivered a space that feels peaceful and lasting."
	},
	{
		image: client_2_default,
		name: "Sebaan K",
		location: "Mutholapuram",
		quote: "The experience was smooth and reassuring. Today, we live in a home that feels calm, comfortable, and complete."
	}
];
var serviceOptions = [
	"Architecture Design Only",
	"Interior Design",
	"Construction Only",
	"Complete Turnkey Project (Design + Build + Interiors)"
];
var areaOptions = [
	"2,500 – 3,000 sq.ft",
	"3,000 – 4,000 sq.ft",
	"4,000 – 5,000 sq.ft",
	"Above 5,000 sq.ft"
];
function Footer() {
	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth"
		});
	};
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
							children: CONTACT.address.split(", ").join("\n")
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-center text-center",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: ChatGPT_Image_Jul_2__2026__07_51_22_PM_default,
							alt: "Logo",
							className: "h-12 sm:h-16 md:h-32 w-auto object-contain mb-3 md:mb-6 filter dark:invert"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "text-[10px] md:text-sm text-foreground/80 font-medium mb-3 md:mb-6 max-w-sm hidden sm:block",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block font-bold text-[#C8A45D] mb-1",
								children: "Care in Every Detail"
							}), "We approach every step with attention, responsibility, and genuine care."]
						})]
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
									href: CONTACT.phoneHref,
									className: "flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3 h-3 md:w-4 md:h-4 hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT.phone })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `tel:${CONTACT.phone2.replace(/\\D/g, "")}`,
									className: "flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, { className: "w-3 h-3 md:w-4 md:h-4 hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: CONTACT.phone2 })]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${CONTACT.email}`,
									className: "flex items-center gap-1 md:gap-3 text-[10px] md:text-sm text-foreground/70 hover:text-[#C8A45D] transition-colors font-medium mt-1 md:mt-2",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, { className: "w-3 h-3 md:w-4 md:h-4 hidden sm:block" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "break-all",
										children: CONTACT.email
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
		className: "fixed bottom-6 right-6 z-50 flex flex-col gap-4",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: CONTACT.phoneHref,
			className: "w-14 h-14 bg-black hover:bg-gray-800 text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(0,0,0,0.2)] transition-transform hover:scale-110 active:scale-95 border-2 border-white/20 relative group",
			"aria-label": "Call Us",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaPhoneAlt, { size: 22 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-full mr-4 bg-black text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",
				children: "Call Us"
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: CONTACT.whatsappHref,
			target: "_blank",
			rel: "noopener noreferrer",
			className: "w-14 h-14 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgba(37,211,102,0.4)] transition-transform hover:scale-110 active:scale-95 relative group",
			"aria-label": "WhatsApp Us",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FaWhatsapp, { size: 32 }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "absolute right-full mr-4 bg-black text-white text-xs font-semibold py-1.5 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap",
				children: "WhatsApp"
			})]
		})]
	});
}
var images = [
	JAMSHEER_FINAL_01_jpg_default,
	SHIBU_5_1___Photo_jpg_default,
	caeris_homes_elanji_villa_1_default,
	"/assets/caeris-homes-elanji-villa-2-C7A_InRI.jpeg"
];
var links$1 = [
	{
		to: "/",
		label: "Home"
	},
	{
		to: "/about",
		label: "About Us"
	},
	{
		to: "/projects",
		label: "Projects"
	},
	{
		to: "/construction",
		label: "Construction"
	},
	{
		to: "/process",
		label: "Process"
	},
	{
		to: "/materials",
		label: "Materials"
	},
	{
		to: "/contact",
		label: "Contact Us"
	}
];
function FullScreenMenu({ isOpen, onClose }) {
	const [currentImage, setCurrentImage] = (0, import_react.useState)(images[0]);
	const menuRef = (0, import_react.useRef)(null);
	const linksRef = (0, import_react.useRef)(null);
	const imgRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		if (menuRef.current) gsapWithCSS.set(menuRef.current, { yPercent: -100 });
		if (isOpen) setCurrentImage(images[Math.floor(Math.random() * images.length)]);
	}, [isOpen]);
	(0, import_react.useEffect)(() => {
		const el = menuRef.current;
		if (!el) return;
		if (isOpen) {
			gsapWithCSS.set(el, { visibility: "visible" });
			gsapWithCSS.to(el, {
				yPercent: 0,
				duration: .8,
				ease: "expo.inOut"
			});
			if (linksRef.current) {
				const linkItems = linksRef.current.querySelectorAll("li");
				gsapWithCSS.fromTo(linkItems, {
					y: 50,
					opacity: 0
				}, {
					y: 0,
					opacity: 1,
					duration: .8,
					stagger: .1,
					ease: "expo.out",
					delay: .4
				});
			}
			if (imgRef.current) gsapWithCSS.fromTo(imgRef.current, {
				scale: 1.1,
				opacity: 0
			}, {
				scale: 1,
				opacity: 1,
				duration: 1.2,
				ease: "expo.out",
				delay: .5
			});
		} else gsapWithCSS.to(el, {
			yPercent: -100,
			duration: .8,
			ease: "expo.inOut",
			onComplete: () => gsapWithCSS.set(el, { visibility: "hidden" })
		});
	}, [isOpen]);
	const handleLinkHover = (index) => {
		const newImage = images[index % images.length];
		if (newImage !== currentImage) if (imgRef.current) gsapWithCSS.to(imgRef.current, {
			opacity: 0,
			duration: .2,
			onComplete: () => {
				setCurrentImage(newImage);
				gsapWithCSS.to(imgRef.current, {
					opacity: 1,
					duration: .4
				});
			}
		});
		else setCurrentImage(newImage);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: menuRef,
		className: "fixed inset-0 z-[100] h-[100dvh] bg-background text-foreground flex flex-col md:flex-row invisible overflow-hidden",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "absolute top-4 left-4 sm:top-8 sm:left-8 z-[110] h-[60px] md:h-[80px] w-[200px] md:w-[260px]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: ChatGPT_Image_Jul_2__2026__07_51_22_PM_default,
					alt: "Logo",
					className: "w-full h-full object-contain object-left filter dark:invert"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				onClick: onClose,
				className: "absolute top-4 right-4 sm:top-8 sm:right-8 z-[110] min-w-[44px] min-h-[44px] flex items-center justify-center p-4 text-foreground/80 hover:text-foreground transition-colors cursor-pointer",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
					size: 32,
					strokeWidth: 1.5
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full md:w-1/2 h-full overflow-y-auto",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-h-full flex flex-col justify-center px-8 md:px-24 py-20 md:py-24",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-eyebrow mb-6 md:mb-10 opacity-60",
						children: "Menu"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						ref: linksRef,
						className: "space-y-4 md:space-y-6",
						children: [links$1.map((link, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							onMouseEnter: () => handleLinkHover(i),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: link.to,
								onClick: onClose,
								className: "font-display text-3xl sm:text-4xl md:text-5xl lg:text-6xl hover:italic hover:text-[#C8A45D] transition-colors block leading-tight",
								activeProps: { className: "italic text-[#C8A45D]" },
								children: link.label
							})
						}, link.to)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
							className: "pt-4 md:hidden",
							onMouseEnter: () => handleLinkHover(links$1.length),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/quote",
								onClick: onClose,
								className: "font-display text-3xl sm:text-4xl text-[#C8A45D] hover:italic transition-colors block py-2",
								children: "Get a Free Quote"
							})
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hidden md:block md:w-1/2 h-full relative overflow-hidden bg-surface",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					ref: imgRef,
					src: currentImage,
					alt: "Caeris Homes Luxury Project Design",
					className: "w-full h-full object-cover"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-black/10" })]
			})
		]
	});
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
	const [isHidden, setIsHidden] = (0, import_react.useState)(false);
	const [lastScrollY, setLastScrollY] = (0, import_react.useState)(0);
	const [isMenuOpen, setIsMenuOpen] = (0, import_react.useState)(false);
	const isHome = useRouterState({ select: (s) => s.location.pathname }) === "/";
	(0, import_react.useEffect)(() => {
		if (isMenuOpen) document.body.style.overflow = "hidden";
		else document.body.style.overflow = "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);
	(0, import_react.useEffect)(() => {
		const handleScroll = () => {
			const currentScrollY = window.scrollY;
			if (currentScrollY > 50) setIsScrolled(true);
			else setIsScrolled(false);
			if (currentScrollY > lastScrollY && currentScrollY > 200) setIsHidden(true);
			else setIsHidden(false);
			setLastScrollY(currentScrollY);
		};
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);
	const isTransparent = isHome && !isScrolled;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: cn("fixed top-0 left-0 right-0 z-[90] px-4 sm:px-8 md:px-12 flex items-center h-[90px] md:h-[130px] transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]", isTransparent ? "bg-transparent" : "bg-transparent", isHidden ? "-translate-y-full" : "translate-y-0"),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex-1 md:flex-none md:w-[450px] flex justify-start items-center h-full py-1 md:py-2",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "relative z-10 block h-full w-full max-w-[320px] md:max-w-[420px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: ChatGPT_Image_Jul_2__2026__07_51_22_PM_default,
						alt: "Logo",
						className: "h-full w-full object-contain object-left transition-all scale-110 sm:scale-100 origin-left"
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: cn("hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-12 text-[12px] tracking-[0.15em] uppercase font-bold transition-colors duration-500", isTransparent ? "text-white/90" : "text-black/80"),
				children: links.map((link) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: link.to,
					className: cn("relative py-2 whitespace-nowrap transition-colors after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-full after:origin-bottom-right after:scale-x-0 after:transition-transform after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)] hover:after:origin-bottom-left hover:after:scale-x-100", isTransparent ? "hover:text-white after:bg-white drop-shadow-sm" : "hover:text-black after:bg-black"),
					activeProps: { className: isTransparent ? "text-white after:scale-x-100 after:origin-bottom-left" : "text-black after:scale-x-100 after:origin-bottom-left" },
					children: link.label
				}, link.label))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-none md:w-[450px] justify-end items-center gap-4 z-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/quote",
					className: cn("hidden md:flex items-center justify-center px-6 min-h-[48px] text-[11px] tracking-widest font-bold uppercase transition-all duration-300 shadow-sm border", isTransparent ? "bg-[#C8A45D] border-[#C8A45D] text-white hover:bg-white hover:text-[#C8A45D] hover:border-white" : "bg-[#C8A45D] border-[#C8A45D] text-white hover:bg-black hover:text-white hover:border-black"),
					children: "Get a Quote"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: () => setIsMenuOpen(true),
					className: cn("flex items-center justify-center min-w-[48px] min-h-[48px] transition-all duration-300 active:scale-[0.96] shadow-sm rounded-none border", isTransparent ? "bg-white/10 border-white/20 text-white hover:bg-white hover:text-black" : "bg-white border-black/10 text-black hover:bg-black hover:text-white"),
					"aria-label": "Open menu",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
						size: 20,
						strokeWidth: 1
					})
				})]
			})
		]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FullScreenMenu, {
		isOpen: isMenuOpen,
		onClose: () => setIsMenuOpen(false)
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
var Dialog = Dialog$1;
var DialogTrigger = DialogTrigger$1;
var DialogPortal = DialogPortal$1;
var DialogOverlay = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay$1, {
	ref,
	className: cn("fixed inset-0 z-50 bg-background/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0", className),
	...props
}));
DialogOverlay.displayName = DialogOverlay$1.displayName;
var DialogContent = import_react.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogPortal, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogOverlay, {}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent$1, {
	ref,
	className: cn("fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 sm:rounded-lg", className),
	...props,
	children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogClose, {
		className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background cursor-pointer transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "sr-only",
			children: "Close"
		})]
	})]
})] }));
DialogContent.displayName = DialogContent$1.displayName;
var DialogHeader = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
	...props
});
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({ className, ...props }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
	...props
});
DialogFooter.displayName = "DialogFooter";
var DialogTitle = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle$1, {
	ref,
	className: cn("text-lg font-semibold leading-none tracking-tight", className),
	...props
}));
DialogTitle.displayName = DialogTitle$1.displayName;
var DialogDescription = import_react.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogDescription$1, {
	ref,
	className: cn("text-sm text-muted-foreground", className),
	...props
}));
DialogDescription.displayName = DialogDescription$1.displayName;
function QuoteModal({ children }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [submitted, setSubmitted] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		if (localStorage.getItem("quote_popup_seen")) return;
		const timer = setTimeout(() => {
			if (!submitted) setOpen(true);
		}, 1e4);
		return () => clearTimeout(timer);
	}, [submitted]);
	const handleOpenChange = (isOpen) => {
		setOpen(isOpen);
		if (!isOpen) localStorage.setItem("quote_popup_seen", "true");
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		setSubmitted(true);
		localStorage.setItem("quote_popup_seen", "true");
		setTimeout(() => {
			setOpen(false);
			setSubmitted(false);
		}, 3e3);
	};
	const inputClass = "h-10 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus-visible:ring-0 focus-visible:border-foreground bg-transparent text-foreground placeholder:text-muted-foreground/50 text-sm";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Dialog, {
		open,
		onOpenChange: handleOpenChange,
		children: [children && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTrigger, {
			asChild: true,
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(DialogContent, {
			className: "sm:max-w-[420px] bg-background border border-border/10 text-foreground p-6 z-[110] rounded-xl shadow-2xl max-h-[90vh] overflow-y-auto",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogHeader, {
				className: "mb-4",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DialogTitle, {
					className: "font-display text-2xl md:text-3xl text-foreground font-normal",
					children: "Get a Free Quote"
				})
			}), submitted ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "py-12 text-center",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-3xl text-[#C8A45D] mb-4",
					children: "Thank you."
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-foreground/60 text-sm",
					children: "Our team will contact you shortly to discuss your project."
				})]
			}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
				onSubmit: handleSubmit,
				className: "space-y-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "modal-name",
							name: "name",
							required: true,
							placeholder: "Your name",
							defaultValue: "John Doe",
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							defaultValue: "+91",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "w-[100px] h-10 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Country" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(SelectContent, {
								className: "z-[120]",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "+91",
										children: "India (+91)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "+1",
										children: "USA (+1)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "+44",
										children: "UK (+44)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
										value: "+971",
										children: "UAE (+971)"
									})
								]
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex-1 space-y-1",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
								id: "modal-phone",
								name: "phone",
								type: "tel",
								required: true,
								placeholder: "Your number",
								defaultValue: "9876543210",
								className: inputClass
							})
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "modal-email",
							name: "email",
							type: "email",
							required: true,
							placeholder: "Your email",
							defaultValue: "john.doe@example.com",
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "modal-location",
							name: "location",
							required: true,
							placeholder: "Location of your plot",
							defaultValue: "Kochi, Kerala",
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							name: "service",
							required: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-10 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "What type of service are you looking for?" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								className: "z-[120] bg-surface border-border/10 text-foreground",
								children: serviceOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: opt,
									children: opt
								}, opt))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Select, {
							name: "area",
							required: true,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectTrigger, {
								className: "h-10 border-0 border-b border-border/30 rounded-none px-0 shadow-none focus:ring-0 bg-transparent text-foreground text-sm",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectValue, { placeholder: "Approximate Built-up Area (Sq. Ft.)" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectContent, {
								className: "z-[120] bg-surface border-border/10 text-foreground",
								children: areaOptions.map((opt) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelectItem, {
									value: opt,
									children: opt
								}, opt))
							})]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "space-y-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Input, {
							id: "modal-message",
							name: "message",
							placeholder: "Your message",
							defaultValue: "I am looking to build a modern 4-bedroom villa with a pool.",
							className: inputClass
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "border border-border/20 bg-background flex items-center gap-2 px-3 py-1.5 rounded shadow-sm self-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "w-5 h-5 border-[1.5px] border-border rounded-sm bg-background flex items-center justify-center" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-xs text-foreground/80",
								children: "I'm not a robot"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Button, {
							type: "submit",
							className: "h-10 px-8 bg-red-600 hover:bg-red-700 text-white rounded-full font-medium transition-colors w-full sm:w-auto",
							children: "Submit"
						})]
					})
				]
			})]
		})]
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
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FloatingContact, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(QuoteModal, {})
		]
	});
}
//#endregion
export { services as a, projects as i, JAMSHEER_FINAL_01_jpg_default as n, testimonials as o, SiteLayout as r, CONTACT as t };
