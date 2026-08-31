import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/split-chars-XR_qVCnk.js
var import_jsx_runtime = require_jsx_runtime();
function splitChars(text) {
	return text.split("").map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "split-char",
		style: { display: c === " " ? "inline" : "inline-block" },
		children: c === " " ? " " : c
	}, i));
}
//#endregion
export { splitChars as t };
