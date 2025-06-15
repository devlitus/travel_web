import { c as createComponent, m as maybeRenderHead, a as renderComponent, r as renderTemplate } from '../chunks/astro/server_DbpHXfDG.mjs';
import 'kleur/colors';
import { $ as $$BottomNav } from '../chunks/BottomNav_DUe9tD9j.mjs';
export { renderers } from '../renderers.mjs';

const $$Explore = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="min-h-screen flex flex-col justify-between bg-[var(--background-color)]"> <h1 class="text-center text-2xl font-bold mt-8">Exploración</h1> ${renderComponent($$result, "BottomNav", $$BottomNav, {})} </main>`;
}, "C:/dev/travel_web/src/pages/explore.astro", void 0);

const $$file = "C:/dev/travel_web/src/pages/explore.astro";
const $$url = "/explore";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Explore,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
