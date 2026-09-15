/* pages/admin/projects.js — #/admin/projects — CRUD over the case studies
   shown on the public Projects page. */
window.KL = window.KL || {};
KL.pages = KL.pages || {};
KL.pages.admin = KL.pages.admin || {};

KL.pages.admin.projects = {
  async render(container) {
    const h = KL.helpers;
    let editing = null; // project being edited, or null for "create"

    const draw = async () => {
      const projects = await KL.dataLoader.getProjects(true);
      const inner =
        '<div class="flex items-center justify-between mb-8">' +
          '<h1 class="font-display font-bold text-2xl text-zinc-900 dark:text-white">Projects</h1>' +
          '<button id="new-project-btn" class="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-accent-light transition-colors">' + KL.icons.plus + 'New project</button>' +
        '</div>' +
        '<div id="project-form-wrap" class="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 mb-8" hidden>' +
          '<h2 class="font-display font-bold text-lg text-zinc-900 dark:text-white mb-5" id="project-form-title">New project</h2>' +
          '<div id="project-form-slot"></div>' +
        '</div>' +
        KL.components.admin.projectsTable(projects);

      container.innerHTML = KL.components.admin.shell('#/admin/projects', inner) || '';
      if (!container.innerHTML) return; // not authed — shell already redirected

      wire(projects);
    };

    const showForm = async (project) => {
      editing = project || null;
      const wrap = h.qs('#project-form-wrap', container);
      const slot = h.qs('#project-form-slot', container);
      h.qs('#project-form-title', container).textContent = project ? 'Edit project' : 'New project';
      const assets = await KL.dataLoader.getAssets();
      slot.innerHTML = KL.components.admin.projectForm(project, assets);
      wrap.hidden = false;
      wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      h.qsa('[data-cover-pick]', slot).forEach((btn) => {
        btn.addEventListener('click', () => {
          h.qs('#pf-cover', slot).value = btn.dataset.coverPick;
        });
      });

      const form = h.qs('#project-form', slot);
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        data.tags = data.tags ? data.tags.split(',').map((t) => t.trim()).filter(Boolean) : [];
        if (data.id) {
          await KL.api.updateProject(data.id, data);
          h.toast('Project updated');
        } else {
          delete data.id;
          await KL.api.createProject(data);
          h.toast('Project added');
        }
        KL.dataLoader.invalidateProjects();
        wrap.hidden = true;
        draw();
      });
      h.qs('#project-form-cancel', slot).addEventListener('click', () => { wrap.hidden = true; });
    };

    const wire = (projects) => {
      h.qs('#new-project-btn', container).addEventListener('click', () => showForm(null));
      h.qsa('[data-action="edit"]', container).forEach((btn) => {
        btn.addEventListener('click', () => {
          const project = projects.find((p) => p.id === btn.dataset.id);
          showForm(project);
        });
      });
      h.qsa('[data-action="delete"]', container).forEach((btn) => {
        btn.addEventListener('click', async () => {
          if (!confirm('Delete this project? This can\u2019t be undone.')) return;
          await KL.api.deleteProject(btn.dataset.id);
          KL.dataLoader.invalidateProjects();
          h.toast('Project deleted');
          draw();
        });
      });
      const logout = h.qs('#admin-logout', container);
      if (logout) logout.addEventListener('click', () => { KL.auth.logout(); location.hash = '#/admin/login'; });
    };

    await draw();
  }
};
