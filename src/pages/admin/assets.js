/* pages/admin/assets.js — #/admin/assets — add/remove the photo library
   used as project covers and profile photos across the site. */
window.KL = window.KL || {};
KL.pages = KL.pages || {};
KL.pages.admin = KL.pages.admin || {};

KL.pages.admin.assets = {
  async render(container) {
    const h = KL.helpers;

    const draw = async () => {
      const assets = await KL.dataLoader.getAssets(true);
      const inner =
        '<div class="flex items-center justify-between mb-2">' +
          '<h1 class="font-display font-bold text-2xl text-zinc-900 dark:text-white">Assets</h1>' +
          '<button id="new-asset-btn" class="inline-flex items-center gap-2 bg-accent text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-accent-light transition-colors">' + KL.icons.plus + 'Add asset</button>' +
        '</div>' +
        '<p class="text-sm text-zinc-500 dark:text-zinc-400 mb-8">Photos live in the <code>/assets</code> folder. Adding one here registers it for use as a project cover or profile photo — drop the actual file into <code>/assets</code> first, then add its path below.</p>' +
        '<div id="asset-form-wrap" class="bg-white dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 rounded-2xl p-6 mb-8" hidden>' +
          '<h2 class="font-display font-bold text-lg text-zinc-900 dark:text-white mb-5" id="asset-form-title">New asset</h2>' +
          '<div id="asset-form-slot"></div>' +
        '</div>' +
        KL.components.admin.assetGrid(assets);

      container.innerHTML = KL.components.admin.shell('#/admin/assets', inner) || '';
      if (!container.innerHTML) return;

      wire(assets);
    };

    const showForm = (asset) => {
      const wrap = h.qs('#asset-form-wrap', container);
      const slot = h.qs('#asset-form-slot', container);
      h.qs('#asset-form-title', container).textContent = asset ? 'Edit asset' : 'New asset';
      slot.innerHTML = KL.components.admin.assetForm(asset);
      wrap.hidden = false;
      wrap.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

      const form = h.qs('#asset-form', slot);
      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const data = Object.fromEntries(new FormData(form).entries());
        if (data.id) {
          await KL.api.updateAsset(data.id, data);
          h.toast('Asset updated');
        } else {
          delete data.id;
          await KL.api.createAsset(data);
          h.toast('Asset added');
        }
        KL.dataLoader.invalidateAssets();
        wrap.hidden = true;
        draw();
      });
      h.qs('#asset-form-cancel', slot).addEventListener('click', () => { wrap.hidden = true; });
    };

    const wire = (assets) => {
      h.qs('#new-asset-btn', container).addEventListener('click', () => showForm(null));
      h.qsa('[data-action="edit-asset"]', container).forEach((btn) => {
        btn.addEventListener('click', () => showForm(assets.find((a) => a.id === btn.dataset.id)));
      });
      h.qsa('[data-action="delete-asset"]', container).forEach((btn) => {
        btn.addEventListener('click', async () => {
          if (!confirm('Remove this asset from the library? The file itself stays in /assets — this only removes the reference.')) return;
          await KL.api.deleteAsset(btn.dataset.id);
          KL.dataLoader.invalidateAssets();
          h.toast('Asset removed');
          draw();
        });
      });
      const logout = h.qs('#admin-logout', container);
      if (logout) logout.addEventListener('click', () => { KL.auth.logout(); location.hash = '#/admin/login'; });
    };

    await draw();
  }
};
