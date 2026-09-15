/* pages/admin/dashboard.js — #/admin */
window.KL = window.KL || {};
KL.pages = KL.pages || {};
KL.pages.admin = KL.pages.admin || {};

KL.pages.admin.dashboard = {
  async render(container) {
    const projects = await KL.dataLoader.getProjects(true);
    const posts = await KL.dataLoader.getBlogPosts(true);
    const assets = await KL.dataLoader.getAssets(true);
    const needsReview = projects.filter((p) => p.needsReview).length;
    const sc = KL.components.admin.statCard;

    const inner =
      '<h1 class="font-display font-bold text-2xl text-zinc-900 dark:text-white mb-1">Dashboard</h1>' +
      '<p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Signed in as ' + KL.helpers.escapeHtml(KL.auth.currentUser() || '') + '</p>' +
      '<div class="grid sm:grid-cols-4 gap-4 mb-10">' +
        sc('Total projects', projects.length) +
        sc('Blog posts', posts.length) +
        sc('Photo assets', assets.length) +
        sc('Need review', needsReview) +
      '</div>' +
      '<div class="flex flex-wrap gap-3">' +
        '<a href="#/admin/projects" class="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-accent-light transition-colors">Manage projects' + KL.icons.arrowRight + '</a>' +
        '<a href="#/admin/assets" class="inline-flex items-center gap-2 border border-zinc-200 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors">Manage assets' + KL.icons.arrowRight + '</a>' +
      '</div>';

    container.innerHTML = KL.components.admin.shell('#/admin', inner) || '';
    const logout = KL.helpers.qs('#admin-logout', container);
    if (logout) logout.addEventListener('click', () => { KL.auth.logout(); location.hash = '#/admin/login'; });
  }
};
