import { r as __toESM } from "../_runtime.mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import "./utils-NKUYuD-d.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/use-reveal-animations-c0LUeHAF.js
var import_react = /* @__PURE__ */ __toESM(require_react());
function useRevealAnimations() {
	(0, import_react.useEffect)(() => {
		const ctx = gsapWithCSS.context(() => {
			if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
			gsapWithCSS.utils.toArray("[data-reveal]").forEach((el) => {
				gsapWithCSS.from(el, {
					y: 60,
					opacity: 0,
					duration: 1.1,
					ease: "expo.out",
					scrollTrigger: {
						trigger: el,
						start: "top 85%"
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-split]").forEach((el) => {
				const chars = el.querySelectorAll(".split-char");
				gsapWithCSS.from(chars, {
					yPercent: 110,
					opacity: 0,
					duration: 1,
					ease: "expo.out",
					stagger: .02,
					scrollTrigger: {
						trigger: el,
						start: "top 80%"
					}
				});
			});
			gsapWithCSS.utils.toArray(".mask-reveal").forEach((el) => {
				gsapWithCSS.fromTo(el, { clipPath: "inset(0 0 100% 0)" }, {
					clipPath: "inset(0 0 0% 0)",
					duration: 1.4,
					ease: "expo.out",
					scrollTrigger: {
						trigger: el,
						start: "top 80%"
					}
				});
			});
			gsapWithCSS.utils.toArray(".counter").forEach((el) => {
				const target = parseFloat(el.getAttribute("data-count") || "0");
				gsapWithCSS.to(el, {
					innerHTML: target,
					duration: 2,
					snap: { innerHTML: 1 },
					scrollTrigger: {
						trigger: el,
						start: "top 90%"
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-scrub]").forEach((el) => {
				gsapWithCSS.fromTo(el, { backgroundPositionX: "100%" }, {
					backgroundPositionX: "0%",
					ease: "none",
					scrollTrigger: {
						trigger: el,
						scrub: 1,
						start: "top 85%",
						end: "bottom 50%"
					}
				});
			});
			gsapWithCSS.utils.toArray("[data-parallax]").forEach((el) => {
				const speed = el.dataset.parallax ? parseFloat(el.dataset.parallax) : .15;
				gsapWithCSS.fromTo(el, { yPercent: -speed * 100 }, {
					yPercent: speed * 100,
					ease: "none",
					scrollTrigger: {
						trigger: el.parentElement,
						start: "top bottom",
						end: "bottom top",
						scrub: true
					}
				});
			});
		});
		return () => ctx.revert();
	}, []);
}
//#endregion
export { useRevealAnimations as t };
