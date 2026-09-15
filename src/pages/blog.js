/* pages/blog.js — blog listing */
window.KL = window.KL || {};
KL.pages = KL.pages || {};

KL.pages.blog = {
  async render(container) {
    const posts = await KL.dataLoader.getBlogPosts();
    container.innerHTML =
      '<section class="pt-32 pb-24">' +
        '<div class="max-w-6xl mx-auto px-6">' +
          '<div class="mb-14 max-w-2xl">' +
            '<p class="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Thoughts</p>' +
            '<h1 class="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">From the blog</h1>' +
          '</div>' +
          '<div class="grid md:grid-cols-3 gap-6">' +
            posts.map((p, i) => KL.components.blogCard(p, 'd' + ((i % 3) + 1))).join('') +
          '</div>' +
        '</div>' +
      '</section>';
    KL.helpers.observeReveals();
  }
};
