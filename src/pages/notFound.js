/* pages/notFound.js */
window.KL = window.KL || {};
KL.pages = KL.pages || {};

KL.pages.notFound = {
  render(container) {
    container.innerHTML =
      '<section class="min-h-[70vh] flex items-center justify-center pt-16">' +
        '<div class="text-center px-6">' +
          '<p class="font-display font-bold text-7xl text-accent mb-4">404</p>' +
          '<p class="text-zinc-500 dark:text-zinc-400 mb-8">That page doesn&rsquo;t exist.</p>' +
          '<a href="#/" class="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-6 py-3 rounded-full text-sm">Back home</a>' +
        '</div>' +
      '</section>';
  }
};
