/* components/admin/sidebar.js */
window.KL = window.KL || {};
KL.components = KL.components || {};
KL.components.admin = KL.components.admin || {};

KL.components.admin.sidebar = function (route) {
  const I = KL.icons;
  const items = [
    { href: '#/admin', label: 'Dashboard', icon: 'grid' },
    { href: '#/admin/projects', label: 'Projects', icon: 'pencil' },
    { href: '#/admin/assets', label: 'Assets', icon: 'grid' }
  ];
  const links = items.map((i) =>
    '<a href="' + i.href + '" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm font-medium text-zinc-400 hover:text-white transition-colors ' +
    (route === i.href ? 'active' : '') + '">' + I[i.icon] + '<span>' + i.label + '</span></a>'
  ).join('');

  return (
    '<aside class="admin-sidebar hidden md:flex flex-col bg-zinc-900 dark:bg-black text-zinc-300 px-4 py-6 gap-1">' +
      '<div class="px-4 pb-6 mb-2 border-b border-zinc-800">' +
        '<p class="font-display font-bold text-white">kelly<span class="text-accent">.</span> admin</p>' +
      '</div>' +
      links +
      '<div class="mt-auto pt-6 border-t border-zinc-800 flex flex-col gap-1">' +
        '<a href="#/" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-white transition-colors">' + I.chevronLeft + '<span>View site</span></a>' +
        '<button id="admin-logout" class="flex items-center gap-3 px-4 py-2.5 rounded-xl text-sm text-zinc-400 hover:text-white transition-colors text-left">' + I.logout + '<span>Log out</span></button>' +
      '</div>' +
    '</aside>'
  );
};
