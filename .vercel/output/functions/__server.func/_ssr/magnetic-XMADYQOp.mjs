import { r as __toESM } from "../_runtime.mjs";
import { o as require_jsx_runtime, s as require_react } from "../_libs/@radix-ui/react-avatar+[...].mjs";
import { n as gsapWithCSS } from "../_libs/gsap.mjs";
import "./site-layout-DqbnLW94.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/magnetic-XMADYQOp.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Magnetic({ children, className = "" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const move = (e) => {
			const rect = el.getBoundingClientRect();
			const x = e.clientX - (rect.left + rect.width / 2);
			const y = e.clientY - (rect.top + rect.height / 2);
			gsapWithCSS.to(el, {
				x: x * .25,
				y: y * .25,
				duration: .6,
				ease: "power3.out"
			});
		};
		const leave = () => gsapWithCSS.to(el, {
			x: 0,
			y: 0,
			duration: .8,
			ease: "elastic.out(1,0.3)"
		});
		el.addEventListener("mousemove", move);
		el.addEventListener("mouseleave", leave);
		return () => {
			el.removeEventListener("mousemove", move);
			el.removeEventListener("mouseleave", leave);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		ref,
		className: `magnetic ${className}`,
		children
	});
}
//#endregion
export { Magnetic as t };
