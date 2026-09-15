/* components/footer.js */
window.KL = window.KL || {};
KL.components = KL.components || {};

KL.components.footer = function (profile) {
  const I = KL.icons;
  const s = (profile && profile.social) || {};
  const link = (key, icon, label) => (s[key] && s[key].url)
    ? '<a href="' + s[key].url + '" target="_blank" rel="noopener noreferrer" class="text-zinc-400 hover:text-accent transition-colors" aria-label="' + label + '">' + icon + '</a>'
    : '';

  return (
    '<footer class="border-t border-zinc-100 dark:border-zinc-900">' +
      '<div class="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row items-center justify-between gap-4">' +
        '<p class="text-sm text-zinc-400">&copy; <span id="yr"></span> ' + (profile ? KL.helpers.escapeHtml(profile.name) : 'Kelly Lemayian') + '. All rights reserved.</p>' +
        '<div class="flex items-center gap-4 flex-wrap justify-center">' +
          link('whatsapp', I.whatsapp, 'WhatsApp') +
          link('telegram', I.telegram, 'Telegram') +
          link('linkedin', I.linkedin, 'LinkedIn') +
          link('youtube', I.youtube, 'YouTube') +
          link('tiktok', I.tiktok, 'TikTok') +
          link('facebook', I.facebook, 'Facebook') +
          link('github', I.github, 'GitHub') +
          '<a href="#/admin/login" class="text-xs text-zinc-300 dark:text-zinc-700 hover:text-zinc-400 transition-colors ml-2">Admin</a>' +
        '</div>' +
      '</div>' +
    '</footer>'
  );
};
