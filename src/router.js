/* router.js — hash parsing + route dispatch. Order matters: more specific
   patterns are listed before their broader parents. */
window.KL = window.KL || {};

KL.router = (function () {
  const routes = [
    { pattern: '#/admin/login', page: () => KL.pages.admin.login },
    { pattern: '#/admin/projects', page: () => KL.pages.admin.projects },
    { pattern: '#/admin/assets', page: () => KL.pages.admin.assets },
    { pattern: '#/admin', page: () => KL.pages.admin.dashboard },
    { pattern: '#/projects/:id', page: () => KL.pages.project },
    { pattern: '#/projects', page: () => KL.pages.projects },
    { pattern: '#/blog/:id', page: () => KL.pages.blogArticle },
    { pattern: '#/blog', page: () => KL.pages.blog },
    { pattern: '#/contact', page: () => KL.pages.contact },
    { pattern: '#/', page: () => KL.pages.home }
  ];

  let listeners = [];

  function normalize(hash) {
    if (!hash || hash === '#') return '#/';
    return hash;
  }

  function matchRoute(hash) {
    const parts = hash.split('/');
    for (const route of routes) {
      const routeParts = route.pattern.split('/');
      if (routeParts.length !== parts.length) continue;
      const params = {};
      let ok = true;
      for (let i = 0; i < routeParts.length; i++) {
        const rp = routeParts[i];
        if (rp.startsWith(':')) { params[rp.slice(1)] = decodeURIComponent(parts[i]); continue; }
        if (rp !== parts[i]) { ok = false; break; }
      }
      if (ok) return { route, params };
    }
    return null;
  }

  const mainEl = () => document.getElementById('app-main');

  async function render() {
    const hash = normalize(location.hash);
    const matched = matchRoute(hash);
    const container = mainEl();
    if (!container) return;

    listeners.forEach((fn) => fn(hash));

    if (!matched) {
      KL.pages.notFound.render(container);
      window.scrollTo(0, 0);
      return;
    }
    await matched.route.page().render(container, matched.params);
    window.scrollTo(0, 0);
  }

  function onChange(fn) { listeners.push(fn); }

  function start() {
    window.addEventListener('hashchange', render);
    render();
  }

  return { start, onChange, render };
})();
