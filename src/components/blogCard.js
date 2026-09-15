/* components/blogCard.js */
window.KL = window.KL || {};
KL.components = KL.components || {};

KL.components.blogCard = function (post, delayClass) {
  const h = KL.helpers;
  return (
    '<article class="reveal ' + (delayClass || '') + ' card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">' +
      '<div class="pf w-full h-44"><img src="' + post.cover + '" alt="' + h.escapeHtml(post.title) + '" loading="lazy"></div>' +
      '<div class="p-6">' +
        '<div class="flex items-center gap-3 mb-3">' +
          '<span class="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">' + h.escapeHtml(post.category) + '</span>' +
          '<span class="text-xs text-zinc-400">' + h.formatDate(post.date) + '</span>' +
        '</div>' +
        '<a href="#/blog/' + encodeURIComponent(post.id) + '">' +
          '<h3 class="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">' + h.escapeHtml(post.title) + '</h3>' +
        '</a>' +
        '<p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">' + h.escapeHtml(post.excerpt) + '</p>' +
        '<a href="#/blog/' + encodeURIComponent(post.id) + '" class="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">Read more &rarr;</a>' +
      '</div>' +
    '</article>'
  );
};
