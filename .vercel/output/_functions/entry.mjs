import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_BnFc8i0X.mjs';
import { manifest } from './manifest_DMhTWshi.mjs';

const serverIslandMap = new Map();;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/api/search.astro.mjs');
const _page2 = () => import('./pages/explore.astro.mjs');
const _page3 = () => import('./pages/home.astro.mjs');
const _page4 = () => import('./pages/login.astro.mjs');
const _page5 = () => import('./pages/settings.astro.mjs');
const _page6 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/api/search.ts", _page1],
    ["src/pages/explore.astro", _page2],
    ["src/pages/home.astro", _page3],
    ["src/pages/login.astro", _page4],
    ["src/pages/settings.astro", _page5],
    ["src/pages/index.astro", _page6]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "754bf412-d35e-4378-9661-ecd90ce12ed7",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
