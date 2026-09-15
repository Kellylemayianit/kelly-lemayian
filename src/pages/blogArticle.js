/* pages/blogArticle.js — matched by #/blog/:id */
window.KL = window.KL || {};
KL.pages = KL.pages || {};

KL.pages.blogArticle = {
  async render(container, params) {
    const h = KL.helpers;
    const post = await KL.dataLoader.getBlogPost(params.id);
    if (!post) return KL.pages.notFound.render(container);

    container.innerHTML =
      '<article class="pt-32 pb-24">' +
        '<div class="max-w-2xl mx-auto px-6">' +
          '<a href="#/blog" class="reveal inline-flex items-center gap-1.5 text-sm text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors mb-8">' + KL.icons.chevronLeft + ' All articles</a>' +
          '<div class="reveal d1 flex items-center gap-3 mb-4">' +
            '<span class="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">' + h.escapeHtml(post.category) + '</span>' +
            '<span class="text-xs text-zinc-400">' + h.formatDate(post.date) + '</span>' +
          '</div>' +
          '<h1 class="reveal d2 font-display font-bold text-3xl md:text-4xl text-zinc-900 dark:text-white mb-8 leading-tight">' + h.escapeHtml(post.title) + '</h1>' +
          '<div class="reveal d3 pf w-full h-64 md:h-80 rounded-2xl mb-10"><img src="' + post.cover + '" alt="' + h.escapeHtml(post.title) + '"></div>' +
          '<div class="reveal d4 space-y-5 text-zinc-600 dark:text-zinc-300 leading-relaxed">' +
            post.content.map((p) => '<p>' + h.escapeHtml(p) + '</p>').join('') +
          '</div>' +
        '</div>' +
      '</article>';
    h.observeReveals();
  }
};
