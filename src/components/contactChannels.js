/* components/contactChannels.js — reused on Home's contact CTA and the Contact page */
window.KL = window.KL || {};
KL.components = KL.components || {};

KL.components.contactChannels = function (profile) {
  const I = KL.icons;
  const s = (profile && profile.social) || {};

  const row = (icon, label, url) =>
    '<a href="' + url + '" target="_blank" rel="noopener noreferrer" class="group flex items-center gap-3 text-zinc-400 hover:text-white transition-colors">' +
      '<span class="w-9 h-9 flex items-center justify-center bg-zinc-800 rounded-lg group-hover:bg-accent/20 transition-colors shrink-0">' + icon + '</span>' +
      '<span class="text-sm">' + label + '</span>' +
    '</a>';

  const items = [
    ['whatsapp', I.whatsapp, 'Message on WhatsApp'],
    ['telegram', I.telegram, 'Message on Telegram'],
    ['linkedin', I.linkedin, 'linkedin.com/in/kelly-lemayian'],
    ['github', I.github, 'github.com/Kellylemayianit'],
    ['youtube', I.youtube, 'YouTube'],
    ['tiktok', I.tiktok, 'TikTok'],
    ['facebook', I.facebook, 'Facebook']
  ];

  return (
    '<div class="flex flex-col gap-4">' +
      items.map(([key, icon, label]) => (s[key] && s[key].url) ? row(icon, label, s[key].url) : '').join('') +
    '</div>'
  );
};
