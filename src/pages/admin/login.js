/* pages/admin/login.js — #/admin/login */
window.KL = window.KL || {};
KL.pages = KL.pages || {};
KL.pages.admin = KL.pages.admin || {};

KL.pages.admin.login = {
  render(container) {
    if (KL.auth.isLoggedIn()) {
      location.hash = '#/admin';
      return;
    }
    container.innerHTML =
      '<section class="min-h-[80vh] flex items-center justify-center pt-16 px-6">' +
        '<div class="w-full max-w-sm">' +
          '<p class="font-display font-bold text-2xl text-center mb-1">kelly<span class="text-accent">.</span> admin</p>' +
          '<p class="text-sm text-zinc-500 dark:text-zinc-400 text-center mb-8">Sign in to manage projects</p>' +
          '<form id="login-form" class="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-8 flex flex-col gap-4">' +
            '<div class="admin-field"><label for="lf-user">Username</label><input id="lf-user" name="username" required autocomplete="username"></div>' +
            '<div class="admin-field"><label for="lf-pass">Password</label><input id="lf-pass" name="password" type="password" required autocomplete="current-password"></div>' +
            '<p id="login-error" hidden class="text-sm text-red-500">Incorrect username or password.</p>' +
            '<button type="submit" class="bg-accent text-white text-sm font-medium py-2.5 rounded-full hover:bg-accent-light transition-colors mt-2">Sign in</button>' +
            '<p class="text-xs text-zinc-400 text-center mt-1">Demo credentials are in README.md \u2014 change them before this goes live.</p>' +
          '</form>' +
        '</div>' +
      '</section>';

    const form = KL.helpers.qs('#login-form', container);
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = new FormData(form);
      const ok = KL.auth.login(data.get('username').trim(), data.get('password'));
      if (ok) {
        location.hash = '#/admin';
      } else {
        KL.helpers.qs('#login-error', form).hidden = false;
      }
    });
  }
};
