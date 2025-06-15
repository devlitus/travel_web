import { c as createComponent, b as renderHead, d as renderSlot, r as renderTemplate, a as renderComponent, e as renderScript, m as maybeRenderHead } from '../chunks/astro/server_DbpHXfDG.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                                 */
export { renderers } from '../renderers.mjs';

const $$Layout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><title>Viajes Para Ti - Descubre el mundo</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>${renderHead()}</head> <body class="bg-background-color font-family"> ${renderSlot($$result, $$slots["default"])} </body></html>`;
}, "C:/dev/travel_web/src/layouts/Layout.astro", void 0);

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<main> <section> <form class="flex justify-center items-center my-10"> <input type="search" name="destination" placeholder="Busca tu próximo destino..." class="border border-gray-300 rounded-l-lg py-2 px-4 w-1/2 focus:outline-none focus:ring-2 focus:ring-blue-500"> <button type="submit" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r-lg">
Buscar
</button> </form> </section> </main> ` })} ${renderScript($$result, "C:/dev/travel_web/src/pages/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/dev/travel_web/src/pages/index.astro", void 0);

const $$file = "C:/dev/travel_web/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
