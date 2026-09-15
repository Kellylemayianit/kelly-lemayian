/* components/admin/assetForm.js — register a reference to an image file
   (already dropped into /assets) or an external URL, with caption + credit. */
window.KL = window.KL || {};
KL.components = KL.components || {};
KL.components.admin = KL.components.admin || {};

KL.components.admin.assetForm = function (asset) {
  const a = asset || {};
  const v = (x) => KL.helpers.escapeHtml(x || '');
  return (
    '<form id="asset-form" class="grid sm:grid-cols-2 gap-5">' +
      '<input type="hidden" name="id" value="' + v(a.id) + '">' +
      '<div class="admin-field sm:col-span-2"><label for="af-file">File path or URL</label><input id="af-file" name="file" required value="' + v(a.file) + '" placeholder="assets/8.jpeg or https://..."></div>' +
      '<div class="admin-field"><label for="af-caption">Caption</label><input id="af-caption" name="caption" value="' + v(a.caption) + '" placeholder="What is this photo of?"></div>' +
      '<div class="admin-field"><label for="af-credit">Photo credit</label><input id="af-credit" name="credit" value="' + v(a.credit) + '" placeholder="Kelly Lemayian"></div>' +
      '<div class="sm:col-span-2 flex items-center gap-3 pt-2">' +
        '<button type="submit" class="bg-accent text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-accent-light transition-colors">' + (a.id ? 'Save changes' : 'Add asset') + '</button>' +
        '<button type="button" id="asset-form-cancel" class="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Cancel</button>' +
      '</div>' +
    '</form>'
  );
};
