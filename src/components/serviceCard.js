/* components/serviceCard.js */
window.KL = window.KL || {};
KL.components = KL.components || {};

KL.components.serviceCard = function (skill, delayClass) {
  const I = KL.icons;
  return (
    '<article class="reveal ' + (delayClass || '') + ' card-h group bg-white dark:bg-zinc-900 rounded-2xl p-8 border border-zinc-100 dark:border-zinc-800 hover:border-accent">' +
      '<div class="w-12 h-12 flex items-center justify-center bg-orange-50 dark:bg-zinc-800 rounded-xl mb-6 text-accent group-hover:bg-accent/10 transition-colors">' +
        (I[skill.icon] || I.grid) +
      '</div>' +
      '<h3 class="font-display font-bold text-xl text-zinc-900 dark:text-white mb-3">' + KL.helpers.escapeHtml(skill.title) + '</h3>' +
      '<p class="text-sm text-zinc-500 dark:text-zinc-400 leading-relaxed">' + KL.helpers.escapeHtml(skill.desc) + '</p>' +
    '</article>'
  );
};
