/* app.js — kernel: mounts the persistent header/footer, wires the
   cross-page delegated events (dark mode, mobile menu), and starts the
   router. This is the only file the <script> tags need to end on. */
window.KL = window.KL || {};

KL.app = (function () {
  const h = KL.helpers;

  function applyDarkMode(dark) {
    document.documentElement.classList.toggle('dark', dark);
    const iconSlot = h.qs('#dark-toggle-icon');
    if (iconSlot) iconSlot.innerHTML = dark ? KL.icons.sun : KL.icons.moon;
  }

  function initDarkMode() {
    const stored = localStorage.getItem('kl_theme');
    const dark = stored === 'dark' || (!stored && window.matchMedia('(prefers-color-scheme: dark)').matches);
    applyDarkMode(dark);
  }

  async function renderChrome(hash) {
    const profile = await KL.dataLoader.getProfile();
    h.qs('#app-header').innerHTML = KL.components.header(hash);
    h.qs('#app-footer').innerHTML = KL.components.footer(profile);
    wireChromeEvents();
    initDarkMode();
    const yr = h.qs('#yr');
    if (yr) yr.textContent = new Date().getFullYear();
  }

  function wireChromeEvents() {
    const darkBtn = h.qs('#dark-toggle');
    if (darkBtn) {
      darkBtn.addEventListener('click', () => {
        const nowDark = !document.documentElement.classList.contains('dark');
        localStorage.setItem('kl_theme', nowDark ? 'dark' : 'light');
        applyDarkMode(nowDark);
      });
    }

    const menuBtn = h.qs('#mobile-menu-toggle');
    const menu = h.qs('#mobile-menu');
    if (menuBtn && menu) {
      menuBtn.addEventListener('click', () => {
        const open = menu.hidden;
        menu.hidden = !open;
        menuBtn.setAttribute('aria-expanded', String(open));
        menuBtn.innerHTML = open ? KL.icons.close : KL.icons.menu;
      });
      h.qsa('[data-mobile-link]', menu).forEach((a) => a.addEventListener('click', () => {
        menu.hidden = true;
        menuBtn.setAttribute('aria-expanded', 'false');
        menuBtn.innerHTML = KL.icons.menu;
      }));
    }
  }

  function init() {
    initDarkMode();
    KL.router.onChange(renderChrome);
    KL.router.start();
  }

  return { init };
})();

document.addEventListener('DOMContentLoaded', KL.app.init);
