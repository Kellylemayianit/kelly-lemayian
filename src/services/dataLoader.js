/* services/dataLoader.js — the ONLY data-import surface pages/components use.
   Adds a simple in-memory cache in front of api.js so switching pages
   doesn't re-fetch the same lists over and over. Call invalidateProjects()
   after any admin write so the public pages pick up the change. */
window.KL = window.KL || {};

KL.dataLoader = (function () {
  let cache = { profile: null, projects: null, blogPosts: null, assets: null };

  async function getProfile() {
    if (!cache.profile) cache.profile = await KL.api.getProfile();
    return cache.profile;
  }

  async function getProjects(force) {
    if (force || !cache.projects) cache.projects = await KL.api.listProjects();
    return cache.projects;
  }

  async function getProject(id) {
    const list = await getProjects();
    const found = list.find((p) => p.id === id);
    if (found) return found;
    return KL.api.getProject(id);
  }

  async function getBlogPosts(force) {
    if (force || !cache.blogPosts) cache.blogPosts = await KL.api.listBlogPosts();
    return cache.blogPosts;
  }

  async function getBlogPost(id) {
    const list = await getBlogPosts();
    const found = list.find((p) => p.id === id);
    if (found) return found;
    return KL.api.getBlogPost(id);
  }

  async function getAssets(force) {
    if (force || !cache.assets) cache.assets = await KL.api.listAssets();
    return cache.assets;
  }

  function invalidateProjects() { cache.projects = null; }
  function invalidateBlogPosts() { cache.blogPosts = null; }
  function invalidateAssets() { cache.assets = null; }

  return {
    getProfile, getProjects, getProject, getBlogPosts, getBlogPost, getAssets,
    invalidateProjects, invalidateBlogPosts, invalidateAssets
  };
})();
