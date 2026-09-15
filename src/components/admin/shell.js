/* components/admin/shell.js — wraps every admin page, gates on auth.
   Returns null (and redirects to login) when there is no session. */
window.KL = window.KL || {};
KL.components = KL.components || {};
KL.components.admin = KL.components.admin || {};

KL.components.admin.shell = function (route, innerHtml) {
  if (!KL.auth.isLoggedIn()) {
    location.hash = '#/admin/login';
    return null;
  }
  return (
    '<div class="admin-shell flex bg-zinc-50 dark:bg-zinc-950">' +
      KL.components.admin.sidebar(route) +
      '<div class="flex-1 min-w-0 px-6 md:px-10 py-8">' + innerHtml + '</div>' +
    '</div>'
  );
};
