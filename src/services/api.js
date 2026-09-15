/* services/api.js — async client the rest of the app talks to (via dataLoader).
   Every function returns a Promise and has a small artificial delay, so it
   behaves like a real network call. Swap each function BODY for a fetch()
   to your API later (Cloudflare Worker + D1 fits) — nothing above this
   file needs to change.

   State is persisted to localStorage so admin edits survive a page reload,
   without needing a server. */
window.KL = window.KL || {};

KL.api = (function () {
  const STORE_KEY = 'kl_data_v1';
  const DELAY = 220;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORE_KEY);
      if (raw) return JSON.parse(raw);
    } catch (e) { /* fall through to seed */ }
    const seed = JSON.parse(JSON.stringify(KL.mockData));
    localStorage.setItem(STORE_KEY, JSON.stringify(seed));
    return seed;
  }

  function saveState(state) {
    localStorage.setItem(STORE_KEY, JSON.stringify(state));
  }

  let state = loadState();

  function delay(value) {
    return new Promise((resolve) => setTimeout(() => resolve(value), DELAY));
  }

  function uid() {
    return 'p-' + Math.random().toString(36).slice(2, 9);
  }

  // ---- reads ----
  function getProfile() { return delay(JSON.parse(JSON.stringify(state.profile))); }
  function listProjects() { return delay(JSON.parse(JSON.stringify(state.projects))); }
  function getProject(id) {
    const found = state.projects.find((p) => p.id === id);
    return delay(found ? JSON.parse(JSON.stringify(found)) : null);
  }
  function listBlogPosts() { return delay(JSON.parse(JSON.stringify(state.blogPosts))); }
  function getBlogPost(id) {
    const found = state.blogPosts.find((p) => p.id === id);
    return delay(found ? JSON.parse(JSON.stringify(found)) : null);
  }

  // ---- writes (used by the admin panel) ----
  function createProject(data) {
    const project = Object.assign({ id: uid(), tags: [], needsReview: false }, data);
    state.projects.unshift(project);
    saveState(state);
    return delay(project);
  }

  function updateProject(id, data) {
    const idx = state.projects.findIndex((p) => p.id === id);
    if (idx === -1) return delay(null);
    state.projects[idx] = Object.assign({}, state.projects[idx], data);
    saveState(state);
    return delay(state.projects[idx]);
  }

  function deleteProject(id) {
    state.projects = state.projects.filter((p) => p.id !== id);
    saveState(state);
    return delay(true);
  }

  function resetToSeed() {
    state = JSON.parse(JSON.stringify(KL.mockData));
    saveState(state);
    return delay(true);
  }

  // ---- assets (photo library) ----
  // Browser JS can't write new files to disk, so "adding" an asset here
  // registers a reference to a file already dropped into /assets (or an
  // external URL) — it doesn't upload bytes. "Removing" hides it from the
  // pickers; it doesn't delete the file itself.
  function listAssets() { return delay(JSON.parse(JSON.stringify(state.assets || []))); }

  function createAsset(data) {
    const asset = Object.assign({ id: uid() }, data);
    state.assets = state.assets || [];
    state.assets.unshift(asset);
    saveState(state);
    return delay(asset);
  }

  function updateAsset(id, data) {
    const idx = (state.assets || []).findIndex((a) => a.id === id);
    if (idx === -1) return delay(null);
    state.assets[idx] = Object.assign({}, state.assets[idx], data);
    saveState(state);
    return delay(state.assets[idx]);
  }

  function deleteAsset(id) {
    state.assets = (state.assets || []).filter((a) => a.id !== id);
    saveState(state);
    return delay(true);
  }

  return {
    getProfile, listProjects, getProject, listBlogPosts, getBlogPost,
    createProject, updateProject, deleteProject, resetToSeed,
    listAssets, createAsset, updateAsset, deleteAsset
  };
})();
