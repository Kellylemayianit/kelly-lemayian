/* components/header.js — persistent site nav, re-rendered on every route change
   so the active link and mobile-menu state stay in sync. */
window.KL = window.KL || {};
KL.components = KL.components || {};

KL.components.header = function (route) {
  const I = KL.icons;
  const links = [
    { href: '#/', label: 'Home' },
    { href: '#/projects', label: 'Projects' },
    { href: '#/blog', label: 'Blog' },
    { href: '#/contact', label: 'Contact' }
  ];

  const isOn = (href) => {
    if (href === '#/') return route === '#/' || route === '' || route === '#';
    return route.indexOf(href) === 0;
  };

  const navItems = links.map((l) =>
    '<li><a href="' + l.href + '" class="nl text-sm text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white transition-colors ' +
    (isOn(l.href) ? 'on !text-zinc-900 dark:!text-white' : '') + '">' + l.label + '</a></li>'
  ).join('');

  const mobileItems = links.map((l) =>
    '<li><a href="' + l.href + '" data-mobile-link class="block text-zinc-700 dark:text-zinc-300 hover:text-accent transition-colors">' + l.label + '</a></li>'
  ).join('');

  return (
    '<header class="fixed inset-x-0 top-0 z-50 bg-white/90 dark:bg-zinc-950/90 backdrop-blur-md border-b border-zinc-100 dark:border-zinc-900" id="site-header">' +
      '<nav class="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between" aria-label="Main navigation">' +
        '<a href="#/" class="font-display font-bold text-xl tracking-tight relative z-10">' +
          '<span class="text-zinc-900 dark:text-white">kelly</span><span class="text-accent">.</span>' +
        '</a>' +
        '<ul class="hidden md:flex items-center gap-8" role="list">' + navItems + '</ul>' +
        '<div class="flex items-center gap-3">' +
          '<button id="dark-toggle" class="w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors" aria-label="Toggle dark mode">' +
            '<span id="dark-toggle-icon">' + I.moon + '</span>' +
          '</button>' +
          '<a href="#/contact" class="hidden md:inline-flex items-center gap-2 shimmer bg-accent text-white text-sm font-medium px-5 py-2 rounded-full hover:bg-accent-light transition-colors">' +
            'Hire me ' + I.arrowRight +
          '</a>' +
          '<button id="mobile-menu-toggle" class="md:hidden w-9 h-9 flex items-center justify-center rounded-full border border-zinc-200 dark:border-zinc-800" aria-label="Toggle menu" aria-expanded="false">' +
            I.menu +
          '</button>' +
        '</div>' +
      '</nav>' +
      '<div id="mobile-menu" hidden class="md:hidden bg-white dark:bg-zinc-950 border-t border-zinc-100 dark:border-zinc-900">' +
        '<ul class="flex flex-col px-6 py-5 gap-4 text-sm font-medium" role="list">' +
          mobileItems +
          '<li class="pt-2 border-t border-zinc-100 dark:border-zinc-900">' +
            '<a href="#/contact" data-mobile-link class="inline-flex shimmer bg-accent text-white font-medium text-sm px-5 py-2.5 rounded-full">Hire me &rarr;</a>' +
          '</li>' +
        '</ul>' +
      '</div>' +
    '</header>'
  );
};
