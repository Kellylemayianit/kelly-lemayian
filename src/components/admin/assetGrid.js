/* components/admin/assetGrid.js — thumbnail grid for the admin Assets manager */
window.KL = window.KL || {};
KL.components = KL.components || {};
KL.components.admin = KL.components.admin || {};

KL.components.admin.assetGrid = function (assets) {
  const I = KL.icons;
  const cards = assets.map((a) => (
    '<div class="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800">' +
      '<div class="pf w-full h-36"><img src="' + a.file + '" alt="' + KL.helpers.escapeHtml(a.caption || '') + '" loading="lazy"></div>' +
      '<div class="p-4">' +
        '<p class="text-sm font-medium text-zinc-900 dark:text-white truncate">' + KL.helpers.escapeHtml(a.caption || a.file) + '</p>' +
        '<p class="text-xs text-zinc-400 mt-0.5">' + KL.helpers.escapeHtml(a.credit || '') + (a.needsReview ? ' &bull; <span class="text-accent">verify credit</span>' : '') + '</p>' +
        '<div class="flex items-center gap-2 mt-3">' +
          '<button data-action="edit-asset" data-id="' + a.id + '" class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-accent hover:bg-orange-50 dark:hover:bg-zinc-800 transition-colors" aria-label="Edit">' + I.pencil + '</button>' +
          '<button data-action="delete-asset" data-id="' + a.id + '" class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-zinc-800 transition-colors" aria-label="Remove">' + I.trash + '</button>' +
          '<code class="text-[11px] text-zinc-300 dark:text-zinc-600 ml-auto">' + KL.helpers.escapeHtml(a.file) + '</code>' +
        '</div>' +
      '</div>' +
    '</div>'
  )).join('');

  return '<div class="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">' + (cards || '<p class="text-zinc-400 col-span-full">No assets yet — add one above.</p>') + '</div>';
};
