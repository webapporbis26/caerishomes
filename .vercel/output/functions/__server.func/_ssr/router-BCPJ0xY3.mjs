import { r as __toESM } from "../_runtime.mjs";
import { u as require_react } from "../_libs/@floating-ui/react-dom+[...].mjs";
import { s as require_jsx_runtime } from "../_libs/@radix-ui/react-arrow+[...].mjs";
import { N as useRouter, c as HeadContent, d as createRouter, f as Outlet, g as Link, h as createRootRouteWithContext, m as createFileRoute, p as lazyRouteComponent, s as Scripts } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
import { t as QueryClientProvider } from "../_libs/tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-BCPJ0xY3.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var ThemeProviderContext = (0, import_react.createContext)({
	theme: "dark",
	setTheme: () => null
});
function ThemeProvider({ children, defaultTheme = "dark", storageKey = "vite-ui-theme", ...props }) {
	const [theme, setTheme] = (0, import_react.useState)("light");
	(0, import_react.useEffect)(() => {
		const root = window.document.documentElement;
		root.classList.remove("dark");
		root.classList.add("light");
	}, []);
	const value = {
		theme,
		setTheme: (theme) => {
			if (typeof window !== "undefined") localStorage.setItem(storageKey, theme);
			setTheme(theme);
		}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProviderContext.Provider, {
		...props,
		value,
		children
	});
}
function SmoothScroll({ children }) {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: .6,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			orientation: "vertical",
			gestureOrientation: "vertical",
			wheelMultiplier: 1,
			touchMultiplier: 2
		});
		let rafId;
		function raf(time) {
			lenis.raf(time);
			rafId = requestAnimationFrame(raf);
		}
		rafId = requestAnimationFrame(raf);
		return () => {
			cancelAnimationFrame(rafId);
			lenis.destroy();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_jsx_runtime.Fragment, { children });
}
var styles_default = "/assets/styles-g1bBXRSS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$9 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Caeris Homes — Luxury Builders & Architects in Kerala" },
			{
				name: "description",
				content: "Top home builders and architectural consultants in Kerala, focused on delivering sustainable, innovative homes through turnkey construction."
			},
			{
				property: "og:image",
				content: "https://caerishomes.com/og-image.jpg"
			}
		],
		links: [
			{
				rel: "canonical",
				href: "https://caerishomes.com"
			},
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@300;400;500;600&family=Inter:wght@300;400;500;600&display=swap"
			}
		],
		scripts: [{
			type: "application/ld+json",
			children: JSON.stringify({
				"@context": "https://schema.org",
				"@type": "HomeAndConstructionBusiness",
				"name": "Caeris Homes",
				"image": "https://caerishomes.com/og-image.jpg",
				"url": "https://caerishomes.com",
				"telephone": "+918075931749",
				"address": {
					"@type": "PostalAddress",
					"streetAddress": "Neduvelil H, Mutholapuram PO",
					"addressLocality": "Elanji, Ernakulam",
					"addressRegion": "Kerala",
					"addressCountry": "IN"
				}
			})
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeProvider, {
			defaultTheme: "dark",
			storageKey: "vite-ui-theme",
			children
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$9.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SmoothScroll, { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {}) })
	});
}
var $$splitComponentImporter$8 = () => import("./quote-Cy4Ql9q5.mjs");
var Route$8 = createFileRoute("/quote")({
	head: () => ({ meta: [{ title: "Get a Quote — Caeris Homes" }, {
		name: "description",
		content: "Request a custom quote for your architectural or construction project."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
var $$splitComponentImporter$7 = () => import("./projects-DLJocI6_.mjs");
var Route$7 = createFileRoute("/projects")({
	head: () => ({ meta: [{ title: "Our Projects — Caeris Homes" }, {
		name: "description",
		content: "Explore luxury residential projects delivered on time with unwavering commitment."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
var $$splitComponentImporter$6 = () => import("./process-LJ4HMhAw.mjs");
var Route$6 = createFileRoute("/process")({
	head: () => ({ meta: [{ title: "Process — Caeris Homes" }, {
		name: "description",
		content: "Our five-stage design and build process from consultation to handover."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
var $$splitComponentImporter$5 = () => import("./materials-t-bVyZV3.mjs");
var Route$5 = createFileRoute("/materials")({
	head: () => ({ meta: [{ title: "Materials — Caeris Homes" }, {
		name: "description",
		content: "Premium materials sourced with a focus on quality, durability, and timeless elegance."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
var $$splitComponentImporter$4 = () => import("./gallery-CIIHNWmT.mjs");
var Route$4 = createFileRoute("/gallery")({
	head: () => ({ meta: [{ title: "Gallery — Caeris Homes" }, {
		name: "description",
		content: "Explore our completed projects and luxury home designs."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./contact-D8Ofo0_0.mjs");
var Route$3 = createFileRoute("/contact")({
	head: () => ({ meta: [{ title: "Contact Us — Caeris Homes" }, {
		name: "description",
		content: "Get in touch with us for any questions or project discussions."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./construction-DZB8HwlX.mjs");
var Route$2 = createFileRoute("/construction")({
	head: () => ({ meta: [{ title: "Services — Caeris Homes" }, {
		name: "description",
		content: "Top home builders and architectural consultants in Kerala, focused on delivering sustainable, innovative homes through turnkey construction."
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./about-BHrKvRmz.mjs");
var Route$1 = createFileRoute("/about")({
	head: () => ({ meta: [{ title: "About Us — Caeris Homes" }, {
		name: "description",
		content: "Best Home Builders In Kerala"
	}] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./routes-BbMORNWW.mjs");
var Route = createFileRoute("/")({
	head: () => ({ meta: [
		{ title: "Caeris Homes — Luxury Home Builders & Architects" },
		{
			name: "description",
			content: "Luxury home builders and leading architects crafting dream residences — architecture, construction, interiors and turnkey delivery."
		},
		{
			property: "og:title",
			content: "Caeris Homes — We Build Your Dream Home"
		},
		{
			property: "og:description",
			content: "From vision to reality. Architecture, construction, interiors and turnkey projects worldwide."
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var QuoteRoute = Route$8.update({
	id: "/quote",
	path: "/quote",
	getParentRoute: () => Route$9
});
var ProjectsRoute = Route$7.update({
	id: "/projects",
	path: "/projects",
	getParentRoute: () => Route$9
});
var ProcessRoute = Route$6.update({
	id: "/process",
	path: "/process",
	getParentRoute: () => Route$9
});
var MaterialsRoute = Route$5.update({
	id: "/materials",
	path: "/materials",
	getParentRoute: () => Route$9
});
var GalleryRoute = Route$4.update({
	id: "/gallery",
	path: "/gallery",
	getParentRoute: () => Route$9
});
var ContactRoute = Route$3.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$9
});
var ConstructionRoute = Route$2.update({
	id: "/construction",
	path: "/construction",
	getParentRoute: () => Route$9
});
var AboutRoute = Route$1.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$9
});
var rootRouteChildren = {
	IndexRoute: Route.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$9
	}),
	AboutRoute,
	ConstructionRoute,
	ContactRoute,
	GalleryRoute,
	MaterialsRoute,
	ProcessRoute,
	ProjectsRoute,
	QuoteRoute
};
var routeTree = Route$9._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
