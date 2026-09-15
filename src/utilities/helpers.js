/* utilities/helpers.js — small DOM + formatting helpers used across the app */
window.KL = window.KL || {};

KL.helpers = (function () {
  function qs(sel, root) { return (root || document).querySelector(sel); }
  function qsa(sel, root) { return Array.from((root || document).querySelectorAll(sel)); }

  function escapeHtml(str) {
    if (str == null) return '';
    return String(str)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function formatDate(iso) {
    try {
      const d = new Date(iso);
      return d.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
    } catch (e) { return iso; }
  }

  // tiny toast used by the admin panel after create/update/delete
  let toastTimer = null;
  function toast(message) {
    let el = qs('#kl-toast');
    if (!el) {
      el = document.createElement('div');
      el.id = 'kl-toast';
      el.className = 'fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 text-sm font-medium px-5 py-3 rounded-full shadow-lg transition-all duration-300';
      document.body.appendChild(el);
    }
    el.textContent = message;
    el.style.opacity = '1';
    el.style.transform = 'translate(-50%, 0)';
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.style.opacity = '0';
      el.style.transform = 'translate(-50%, 10px)';
    }, 2200);
  }

  function debounce(fn, wait) {
    let t;
    return function (...args) {
      clearTimeout(t);
      t = setTimeout(() => fn.apply(this, args), wait);
    };
  }

  // re-runs the reveal-on-scroll observer against whatever is currently in the DOM —
  // called by app.js after every route render since old nodes are replaced
  function observeReveals() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
    qsa('.reveal').forEach((el) => io.observe(el));
  }

  return { qs, qsa, escapeHtml, formatDate, toast, debounce, observeReveals };
})();
