/* utilities/auth.js — mock login + session flag.
   Swap checkCredentials() and the session store for a real auth check
   (signed cookie / JWT from your API) when you wire up a real backend. */
window.KL = window.KL || {};

KL.auth = (function () {
  const SESSION_KEY = 'kl_admin_session';

  // demo-only credentials — change this before using this anywhere real
  const DEMO_USER = 'kelly';
  const DEMO_PASS = 'buildinpublic';

  function checkCredentials(username, password) {
    return username === DEMO_USER && password === DEMO_PASS;
  }

  function login(username, password) {
    if (checkCredentials(username, password)) {
      localStorage.setItem(SESSION_KEY, JSON.stringify({ user: username, at: Date.now() }));
      return true;
    }
    return false;
  }

  function logout() {
    localStorage.removeItem(SESSION_KEY);
  }

  function isLoggedIn() {
    return !!localStorage.getItem(SESSION_KEY);
  }

  function currentUser() {
    try { return JSON.parse(localStorage.getItem(SESSION_KEY)).user; } catch (e) { return null; }
  }

  return { login, logout, isLoggedIn, currentUser };
})();
