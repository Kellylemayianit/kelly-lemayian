/* components/admin/table.js — generic-ish table for the projects list.
   Row action buttons carry data-id / data-action; the page wires up the
   actual click handling via delegated events. */
window.KL = window.KL || {};
KL.components = KL.components || {};
KL.components.admin = KL.components.admin || {};

KL.components.admin.projectsTable = function (projects) {
  const I = KL.icons;
  const rows = projects.map((p) => (
    '<tr>' +
      '<td class="font-medium text-zinc-900 dark:text-white">' + KL.helpers.escapeHtml(p.title) + (p.needsReview ? ' <span class="text-xs text-accent align-middle">&bull; needs review</span>' : '') + '</td>' +
      '<td class="text-zinc-500 dark:text-zinc-400">' + (p.tags || []).map(KL.helpers.escapeHtml).join(', ') + '</td>' +
      '<td class="text-zinc-500 dark:text-zinc-400">' + KL.helpers.escapeHtml(p.year || '') + '</td>' +
      '<td class="text-right whitespace-nowrap">' +
        '<button data-action="edit" data-id="' + p.id + '" class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-accent hover:bg-orange-50 dark:hover:bg-zinc-800 transition-colors" aria-label="Edit">' + I.pencil + '</button>' +
        '<button data-action="delete" data-id="' + p.id + '" class="inline-flex items-center justify-center w-8 h-8 rounded-lg text-zinc-400 hover:text-red-500 hover:bg-red-50 dark:hover:bg-zinc-800 transition-colors" aria-label="Delete">' + I.trash + '</button>' +
      '</td>' +
    '</tr>'
  )).join('');

  return (
    '<div class="bg-white dark:bg-zinc-900 rounded-2xl overflow-hidden border border-zinc-100 dark:border-zinc-800">' +
      '<table class="admin-table">' +
        '<thead><tr><th>Project</th><th>Tags</th><th>Year</th><th></th></tr></thead>' +
        '<tbody>' + (rows || '<tr><td colspan="4" class="text-center text-zinc-400 py-10">No projects yet — add one above.</td></tr>') + '</tbody>' +
      '</table>' +
    '</div>'
  );
};
