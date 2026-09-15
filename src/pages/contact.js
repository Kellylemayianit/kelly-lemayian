/* pages/contact.js */
window.KL = window.KL || {};
KL.pages = KL.pages || {};

KL.pages.contact = {
  async render(container) {
    const h = KL.helpers;
    const profile = await KL.dataLoader.getProfile();

    container.innerHTML =
      '<section class="pt-32 pb-24">' +
        '<div class="max-w-6xl mx-auto px-6">' +
          '<div class="bg-zinc-900 dark:bg-zinc-800 rounded-3xl p-10 md:p-16 relative overflow-hidden">' +
            '<div class="absolute top-0 right-0 w-64 h-64 bg-accent/20 rounded-full blur-3xl pointer-events-none" aria-hidden="true"></div>' +
            '<div class="absolute bottom-0 left-0 w-40 h-40 bg-accent/10 rounded-full blur-2xl pointer-events-none" aria-hidden="true"></div>' +
            '<div class="relative z-10 grid md:grid-cols-2 gap-12 items-start">' +
              '<div>' +
                '<p class="reveal text-xs font-medium text-accent tracking-widest uppercase mb-3">Get in touch</p>' +
                '<h1 class="reveal d1 font-display font-bold text-4xl md:text-5xl text-white leading-tight mb-5">Let&rsquo;s work<br>together</h1>' +
                '<p class="reveal d2 text-zinc-400 leading-relaxed mb-8">Open to remote contracts and technical bounties &mdash; short or long-term. Tell me a bit about what you&rsquo;re building.</p>' +
                '<div class="reveal d3">' + KL.components.contactChannels(profile) + '</div>' +
              '</div>' +
              '<div class="reveal d2">' +
                '<form id="contact-form" novalidate>' +
                  '<div class="flex flex-col gap-4">' +
                    '<div class="grid sm:grid-cols-2 gap-4">' +
                      '<div><label for="fname" class="block text-xs font-medium text-zinc-400 mb-1.5">Name</label><input type="text" id="fname" name="name" placeholder="Jane Smith" required class="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"></div>' +
                      '<div><label for="femail" class="block text-xs font-medium text-zinc-400 mb-1.5">Email</label><input type="email" id="femail" name="email" placeholder="jane@company.com" required class="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"></div>' +
                    '</div>' +
                    '<div><label for="fsubject" class="block text-xs font-medium text-zinc-400 mb-1.5">Subject</label><input type="text" id="fsubject" name="subject" placeholder="Project inquiry" class="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors"></div>' +
                    '<div><label for="fmessage" class="block text-xs font-medium text-zinc-400 mb-1.5">Message</label><textarea id="fmessage" name="message" rows="4" placeholder="Tell me about your project..." required class="w-full bg-zinc-800 border border-zinc-700 text-white text-sm rounded-xl px-4 py-3 placeholder-zinc-600 focus:outline-none focus:border-accent transition-colors resize-none"></textarea></div>' +
                    '<button type="submit" class="shimmer w-full bg-accent text-white font-display font-bold text-sm py-3.5 rounded-xl hover:bg-accent-light transition-colors">Send message &rarr;</button>' +
                  '</div>' +
                '</form>' +
              '</div>' +
            '</div>' +
          '</div>' +
        '</div>' +
      '</section>';

    h.observeReveals();

    const form = h.qs('#contact-form', container);
    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        // No backend wired up yet — swap this for a real submit (mailto:, a
        // form service, or your own API) alongside services/api.js.
        h.toast('Message noted \u2014 wire this form up to an inbox in services/api.js');
        form.reset();
      });
    }
  }
};
