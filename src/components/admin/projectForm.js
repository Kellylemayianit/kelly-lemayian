/* components/admin/projectForm.js — create/edit form. Pass an existing
   project to prefill it for editing, or omit it for a blank "create" form. */
window.KL = window.KL || {};
KL.components = KL.components || {};
KL.components.admin = KL.components.admin || {};

KL.components.admin.projectForm = function (project, assets) {
  const p = project || {};
  const v = (x) => KL.helpers.escapeHtml(x || '');
  const tags = Array.isArray(p.tags) ? p.tags.join(', ') : '';

  const pickerThumbs = (assets || []).map((a) =>
    '<button type="button" data-cover-pick="' + KL.helpers.escapeHtml(a.file) + '" class="pf w-16 h-16 rounded-lg border-2 border-transparent hover:border-accent transition-colors shrink-0" title="' + v(a.caption || a.file) + '">' +
      '<img src="' + a.file + '" alt="">' +
    '</button>'
  ).join('');

  return (
    '<form id="project-form" class="grid sm:grid-cols-2 gap-5">' +
      '<input type="hidden" name="id" value="' + v(p.id) + '">' +
      '<div class="admin-field sm:col-span-2"><label for="pf-title">Title</label><input id="pf-title" name="title" required value="' + v(p.title) + '" placeholder="Project name"></div>' +
      '<div class="admin-field sm:col-span-2"><label for="pf-tagline">Tagline</label><input id="pf-tagline" name="tagline" value="' + v(p.tagline) + '" placeholder="One line describing it"></div>' +
      '<div class="admin-field"><label for="pf-year">Year</label><input id="pf-year" name="year" value="' + v(p.year) + '" placeholder="2026"></div>' +
      '<div class="admin-field"><label for="pf-tags">Tags (comma-separated)</label><input id="pf-tags" name="tags" value="' + v(tags) + '" placeholder="React, DevOps"></div>' +
      '<div class="admin-field sm:col-span-2"><label for="pf-cover">Cover image URL</label><input id="pf-cover" name="cover" value="' + v(p.cover) + '" placeholder="https://... or assets/1.jpeg">' +
        (pickerThumbs ? '<div class="flex items-center gap-2 mt-2 overflow-x-auto pb-1">' + pickerThumbs + '</div><p class="text-xs text-zinc-400 mt-1">Click a photo from your library to use it as the cover, or type/paste a URL above.</p>' : '') +
      '</div>' +
      '<div class="admin-field"><label for="pf-repo">Repo URL</label><input id="pf-repo" name="repoUrl" value="' + v(p.repoUrl) + '" placeholder="https://github.com/..."></div>' +
      '<div class="admin-field"><label for="pf-live">Live URL</label><input id="pf-live" name="liveUrl" value="' + v(p.liveUrl) + '" placeholder="https://..."></div>' +
      '<div class="admin-field sm:col-span-2"><label for="pf-booking">Booking.com URL (optional)</label><input id="pf-booking" name="bookingUrl" value="' + v(p.bookingUrl) + '" placeholder="https://www.booking.com/hotel/..."></div>' +
      '<div class="admin-field sm:col-span-2"><label for="pf-summary">Summary</label><textarea id="pf-summary" name="summary" rows="2">' + v(p.summary) + '</textarea></div>' +
      '<div class="admin-field sm:col-span-2"><label for="pf-challenge">Challenge</label><textarea id="pf-challenge" name="challenge" rows="2">' + v(p.challenge) + '</textarea></div>' +
      '<div class="admin-field sm:col-span-2"><label for="pf-approach">Approach</label><textarea id="pf-approach" name="approach" rows="2">' + v(p.approach) + '</textarea></div>' +
      '<div class="admin-field sm:col-span-2"><label for="pf-result">Result</label><textarea id="pf-result" name="result" rows="2">' + v(p.result) + '</textarea></div>' +
      '<div class="sm:col-span-2 flex items-center gap-3 pt-2">' +
        '<button type="submit" class="bg-accent text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-accent-light transition-colors">' + (p.id ? 'Save changes' : 'Add project') + '</button>' +
        '<button type="button" id="project-form-cancel" class="text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors">Cancel</button>' +
      '</div>' +
    '</form>'
  );
};
