import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/split-chars-2vro5If-.js
var import_jsx_runtime = require_jsx_runtime();
function splitChars(text) {
	return text.split(" ").map((word, wordIndex, wordsArray) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		style: { display: "inline-block" },
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			style: {
				display: "inline-block",
				whiteSpace: "nowrap"
			},
			children: word.split("").map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "split-char",
				style: { display: "inline-block" },
				children: c
			}, i))
		}), wordIndex !== wordsArray.length - 1 && " "]
	}, wordIndex));
}
//#endregion
export { splitChars as t };
