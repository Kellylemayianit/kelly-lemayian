/* components/admin/statCard.js */
window.KL = window.KL || {};
KL.components = KL.components || {};
KL.components.admin = KL.components.admin || {};

KL.components.admin.statCard = function (label, value) {
  return (
    '<div class="stat-card rounded-2xl p-6 bg-white dark:bg-zinc-900">' +
      '<p class="text-3xl font-display font-bold text-zinc-900 dark:text-white">' + value + '</p>' +
      '<p class="text-sm text-zinc-500 dark:text-zinc-400 mt-1">' + label + '</p>' +
    '</div>'
  );
};
