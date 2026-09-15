/* components/projectCard.js — preview card used on Home + Projects grid */
window.KL = window.KL || {};
KL.components = KL.components || {};

KL.components.projectCard = function (project, delayClass) {
  const h = KL.helpers;
  const tags = (project.tags || []).slice(0, 3).map((t) =>
    '<span class="text-xs bg-orange-50 dark:bg-zinc-800 text-accent border border-orange-200 dark:border-zinc-700 px-2.5 py-1 rounded-full">' + h.escapeHtml(t) + '</span>'
  ).join('');

  return (
    '<article class="reveal ' + (delayClass || '') + ' card-h group bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800 hover:border-accent">' +
      '<a href="#/projects/' + encodeURIComponent(project.id) + '">' +
        '<div class="pf w-full h-44"><img src="' + project.cover + '" alt="' + h.escapeHtml(project.title) + '" loading="lazy"></div>' +
      '</a>' +
      '<div class="p-6">' +
        '<div class="flex items-center gap-2 mb-3 flex-wrap">' + tags + '</div>' +
        '<a href="#/projects/' + encodeURIComponent(project.id) + '">' +
          '<h3 class="font-display font-bold text-lg text-zinc-900 dark:text-white mb-2 group-hover:text-accent transition-colors">' + h.escapeHtml(project.title) + '</h3>' +
        '</a>' +
        '<p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed mb-4">' + h.escapeHtml(project.tagline) + '</p>' +
        '<a href="#/projects/' + encodeURIComponent(project.id) + '" class="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-900 dark:text-white nl">View case study &rarr;</a>' +
      '</div>' +
    '</article>'
  );
};
