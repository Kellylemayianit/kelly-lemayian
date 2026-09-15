/* pages/home.js — a short overview, not a long-scroll landing page.
   Hero + a taste of skills/projects, each pointing deeper into its own page. */
window.KL = window.KL || {};
KL.pages = KL.pages || {};

KL.pages.home = {
  async render(container) {
    const h = KL.helpers;
    const [profile, projects] = await Promise.all([
      KL.dataLoader.getProfile(),
      KL.dataLoader.getProjects()
    ]);
    const featured = projects.slice(0, 2);

    container.innerHTML =
      '<section class="relative min-h-[90vh] flex items-center pt-16 overflow-hidden">' +
        '<div class="absolute top-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>' +
        '<div class="absolute bottom-1/4 left-0 w-64 h-64 bg-zinc-200/50 dark:bg-zinc-800/30 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>' +
        '<div class="relative z-10 max-w-6xl mx-auto px-6 py-24 w-full">' +
          '<div class="grid md:grid-cols-2 gap-12 items-center">' +
            '<div>' +
              '<p class="reveal text-sm font-medium text-accent tracking-widest uppercase mb-4">Available for remote contracts</p>' +
              '<h1 class="reveal d1 font-display font-bold text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-tight text-zinc-900 dark:text-white mb-6">Hi, I&rsquo;m <span class="text-accent">' + h.escapeHtml(profile.name.split(' ')[0]) + '</span></h1>' +
              '<p class="reveal d2 text-lg md:text-xl text-zinc-500 dark:text-zinc-400 font-light leading-relaxed max-w-md mb-10">' + h.escapeHtml(profile.tagline) + ' <strong class="font-medium text-zinc-700 dark:text-zinc-300">' + h.escapeHtml(profile.role) + '</strong>.</p>' +
              '<div class="reveal d3 flex flex-wrap gap-4">' +
                '<a href="#/projects" class="shimmer inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-700 dark:hover:bg-zinc-200 transition-colors text-sm">View my work' + KL.icons.arrowRight + '</a>' +
                '<a href="#/contact" class="inline-flex items-center gap-2 border border-zinc-300 dark:border-zinc-700 text-zinc-700 dark:text-zinc-300 font-medium px-7 py-3.5 rounded-full hover:bg-zinc-50 dark:hover:bg-zinc-900 transition-colors text-sm">Get in touch</a>' +
              '</div>' +
              '<div class="reveal d4 flex gap-8 mt-14 pt-8 border-t border-zinc-100 dark:border-zinc-900">' +
                profile.stats.map((s) => '<div><p class="font-display font-bold text-3xl text-zinc-900 dark:text-white">' + h.escapeHtml(s.value) + '</p><p class="text-xs text-zinc-500 dark:text-zinc-400 mt-1">' + h.escapeHtml(s.label) + '</p></div>').join('') +
              '</div>' +
            '</div>' +
            '<div class="reveal d2 flex justify-center md:justify-end">' +
              '<div class="relative w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96">' +
                '<div class="pf w-full h-full rounded-3xl"><img src="' + profile.avatar + '" alt="' + h.escapeHtml(profile.name) + '" loading="eager"></div>' +
                '<div class="absolute -bottom-4 -left-4 bg-accent text-white font-display font-bold text-sm px-4 py-2.5 rounded-2xl shadow-lg">Open to projects</div>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="py-24 bg-zinc-50 dark:bg-zinc-900/40">' +
        '<div class="max-w-6xl mx-auto px-6">' +
          '<div class="mb-14"><p class="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">What I do</p><h2 class="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Services</h2></div>' +
          '<div class="grid md:grid-cols-3 gap-6">' +
            profile.skills.map((s, i) => KL.components.serviceCard(s, 'd' + (i + 1))).join('') +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="py-24">' +
        '<div class="max-w-6xl mx-auto px-6">' +
          '<div class="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-14">' +
            '<div><p class="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Recent work</p><h2 class="reveal d1 font-display font-bold text-4xl md:text-5xl text-zinc-900 dark:text-white">Featured projects</h2></div>' +
            '<a href="#/projects" class="reveal d1 text-sm font-medium text-zinc-500 dark:text-zinc-400 hover:text-accent transition-colors nl">All projects &rarr;</a>' +
          '</div>' +
          '<div class="grid md:grid-cols-2 gap-6">' +
            featured.map((p, i) => KL.components.projectCard(p, 'd' + (i + 1))).join('') +
          '</div>' +
        '</div>' +
      '</section>' +

      '<section class="py-24 bg-zinc-50 dark:bg-zinc-900/40">' +
        '<div class="max-w-6xl mx-auto px-6">' +
          '<div class="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">' +
            '<div class="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>' +
            '<div class="relative z-10 max-w-xl">' +
              '<h2 class="reveal d1 font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-4">Let&rsquo;s work together</h2>' +
              '<p class="reveal d2 text-zinc-400 leading-relaxed mb-8">Open to UI/UX and full-stack missions, short or long-term.</p>' +
              '<a href="#/contact" class="reveal d3 shimmer inline-flex items-center gap-2 bg-accent text-white font-display font-bold text-sm px-7 py-3.5 rounded-full hover:bg-accent-light transition-colors">Get in touch' + KL.icons.arrowRight + '</a>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';

    h.observeReveals();
  }
};
