/* pages/projects.js — full projects grid */
window.KL = window.KL || {};
KL.pages = KL.pages || {};

KL.pages.projects = {
  async render(container) {
    const projects = await KL.dataLoader.getProjects();
    container.innerHTML =
      '<section class="pt-32 pb-24">' +
        '<div class="max-w-6xl mx-auto px-6">' +
          '<div class="mb-14 max-w-2xl">' +
            '<p class="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Work</p>' +
            '<h1 class="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white mb-4">Projects</h1>' +
            '<p class="reveal d2 text-zinc-500 dark:text-zinc-400 leading-relaxed">A running list of things I&rsquo;ve built. Managed from the admin panel, so it grows as new work ships.</p>' +
          '</div>' +
          '<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">' +
            (projects.length
              ? projects.map((p, i) => KL.components.projectCard(p, 'd' + ((i % 3) + 1))).join('')
              : '<p class="text-zinc-400 col-span-full">No projects yet.</p>') +
          '</div>' +
        '</div>' +
      '</section>';
    KL.helpers.observeReveals();
  }
};
