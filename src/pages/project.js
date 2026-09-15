/* pages/project.js — single case-study detail, matched by #/projects/:id */
window.KL = window.KL || {};
KL.pages = KL.pages || {};

KL.pages.project = {
  async render(container, params) {
    const h = KL.helpers;
    const project = await KL.dataLoader.getProject(params.id);

    if (!project) {
      return KL.pages.notFound.render(container);
    }

    const linkRow = (label, url) => url
      ? '<a href="' + url + '" target="_blank" rel="noopener noreferrer" class="inline-flex items-center gap-1.5 text-sm font-medium text-accent hover:underline">' + label + KL.icons.external + '</a>'
      : '';

    container.innerHTML =
      '<article class="pt-32 pb-24">' +
        '<div class="max-w-3xl mx-auto px-6">' +
          '<a href="#/projects" class="reveal inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8">' + KL.icons.chevronLeft + ' All projects</a>' +
          '<div class="reveal d1 flex items-center gap-2 flex-wrap mb-4">' +
            (project.tags || []).map((t) => '<span class="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">' + h.escapeHtml(t) + '</span>').join('') +
          '</div>' +
          '<h1 class="reveal d2 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white mb-4">' + h.escapeHtml(project.title) + '</h1>' +
          '<p class="reveal d3 text-lg text-zinc-500 dark:text-zinc-400 mb-8">' + h.escapeHtml(project.tagline) + '</p>' +
          '<div class="reveal d3 flex items-center gap-6 flex-wrap mb-10">' + linkRow('View repo', project.repoUrl) + linkRow('Live site', project.liveUrl) + linkRow('View on Booking.com', project.bookingUrl) + '</div>' +
          '<div class="reveal d4 pf w-full h-72 md:h-96 rounded-2xl mb-12"><img src="' + project.cover + '" alt="' + h.escapeHtml(project.title) + '"></div>' +

          (project.needsReview
            ? '<div class="mb-10 text-sm text-accent bg-orange-50 dark:bg-zinc-900 border border-orange-200 dark:border-zinc-800 rounded-xl px-4 py-3">This case study is a placeholder write-up &mdash; edit it from the admin panel with the real details.</div>'
            : '') +

          '<div class="prose-content space-y-10 text-zinc-600 dark:text-zinc-300 leading-relaxed">' +
            '<div><h2 class="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">Overview</h2><p>' + h.escapeHtml(project.summary) + '</p></div>' +
            '<div><h2 class="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">The challenge</h2><p>' + h.escapeHtml(project.challenge) + '</p></div>' +
            '<div><h2 class="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">The approach</h2><p>' + h.escapeHtml(project.approach) + '</p></div>' +
            '<div><h2 class="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">The result</h2><p>' + h.escapeHtml(project.result) + '</p></div>' +
          '</div>' +
        '</div>' +
      '</article>';
    h.observeReveals();
  }
};
