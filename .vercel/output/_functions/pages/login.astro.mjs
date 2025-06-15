import { c as createComponent, m as maybeRenderHead, r as renderTemplate, a as renderComponent } from '../chunks/astro/server_DbpHXfDG.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$LoginHeader = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="text-center mb-6"> <h1 class="text-[28px] font-bold" style="font-family: var(--font-family); color: var(--color-text);">
Start your journey
</h1> </div>`;
}, "C:/dev/travel_web/src/components/LoginHeader.astro", void 0);

const $$LoginForm = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<form class="flex flex-col gap-4"> <input type="email" placeholder="Email" class="px-4 py-3 rounded-[var(--border-radius)] bg-[var(--color-tertiary)] text-[var(--color-accent)] outline-none border-none" required> <input type="password" placeholder="Password" class="px-4 py-3 rounded-[var(--border-radius)] bg-[var(--color-tertiary)] text-[var(--color-accent)] outline-none border-none" required> <button type="submit" class="mt-2 py-3 rounded-[var(--border-radius)] bg-[var(--color-highlight)] text-[var(--color-text)] font-bold">
Sign up
</button> </form>`;
}, "C:/dev/travel_web/src/components/LoginForm.astro", void 0);

const $$LoginSocial = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-6"> <p class="text-[14px] text-[var(--color-accent)] text-center mb-2">Or continue with</p> <div class="flex gap-3 justify-center"> <button class="flex items-center gap-2 px-4 py-2 rounded-[var(--border-radius)] bg-[var(--color-tertiary)]"> <img src="/images/facebook.svg" alt="Facebook" class="w-5 h-5"> Facebook
</button> <button class="flex items-center gap-2 px-4 py-2 rounded-[var(--border-radius)] bg-[var(--color-tertiary)]"> <img src="/images/twitter.svg" alt="Twitter" class="w-5 h-5"> Twitter
</button> </div> </div>`;
}, "C:/dev/travel_web/src/components/LoginSocial.astro", void 0);

const $$LoginFooter = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="mt-6 text-center"> <a href="/login" class="text-[14px] text-[var(--color-accent)]">
Already have an account? Sign in
</a> </div>`;
}, "C:/dev/travel_web/src/components/LoginFooter.astro", void 0);

const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<main class="min-h-screen flex items-center justify-center bg-[var(--background-color)]"> <section class="w-full max-w-xs p-6 rounded-lg shadow bg-[var(--color-primary)]"> ${renderComponent($$result, "LoginHeader", $$LoginHeader, {})} ${renderComponent($$result, "LoginForm", $$LoginForm, {})} ${renderComponent($$result, "LoginSocial", $$LoginSocial, {})} ${renderComponent($$result, "LoginFooter", $$LoginFooter, {})} </section> </main>`;
}, "C:/dev/travel_web/src/pages/login.astro", void 0);

const $$file = "C:/dev/travel_web/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
