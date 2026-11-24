/* ═══════════════════════════════════════════════════════════
   modal.js — Product detail modal
═══════════════════════════════════════════════════════════ */

const Modal = (() => {
  let currentId   = null;
  let selectedSize = null;

  function open(productId) {
    const p = ALL_PRODUCTS[productId];
    if (!p) return;
    currentId    = productId;
    selectedSize = null;

    // Populate fields
    document.getElementById('modalBadge').textContent = p.badge || (p.tab === 'retro' ? 'Retro' : p.tab === 'boots' ? 'Guayos' : 'Actual');
    document.getElementById('modalTitle').textContent = p.name;
    document.getElementById('modalDesc').textContent  = p.desc;
    document.getElementById('modalPrice').textContent = p.priceLabel;

    // Meta tags
    const metaEl = document.getElementById('modalMeta');
    metaEl.innerHTML = p.meta.map(m => `<span class="modal__meta-tag">${m}</span>`).join('');

    // Visual — jersey hanger or boot card
    const visual = document.getElementById('modalVisual');
    if (p.tab === 'boots') {
      visual.innerHTML = `
        <div class="boot-card">
          <div class="boot-card__img--svg">${p.svg()}</div>
        </div>`;
    } else {
      visual.innerHTML = `
        <div class="jersey-hanger">
          <div class="jersey-hanger__hook"></div>
          <div class="jersey-hanger__bar"></div>
          <div class="jersey-hanger__jersey">${p.svg()}</div>
        </div>`;
    }

    // Sizes
    const sizesEl = document.getElementById('modalSizes');
    sizesEl.innerHTML = `<span class="modal__sizes-label">Talla</span>` +
      p.sizes.map(s =>
        `<button class="size-btn" data-size="${s}" aria-pressed="false">${s}</button>`
      ).join('');
    sizesEl.querySelectorAll('.size-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        sizesEl.querySelectorAll('.size-btn').forEach(b => {
          b.classList.remove('size-btn--active');
          b.setAttribute('aria-pressed', 'false');
        });
        btn.classList.add('size-btn--active');
        btn.setAttribute('aria-pressed', 'true');
        selectedSize = btn.dataset.size;
      });
    });

    // Show overlay
    const overlay = document.getElementById('modalOverlay');
    overlay.hidden = false;
    document.body.style.overflow = 'hidden';
    requestAnimationFrame(() => overlay.classList.add('modal-overlay--visible'));

    // Focus close button for a11y
    setTimeout(() => document.getElementById('modalClose')?.focus(), 50);
  }

  function close() {
    const overlay = document.getElementById('modalOverlay');
    overlay.classList.remove('modal-overlay--visible');
    setTimeout(() => {
      overlay.hidden = true;
      document.body.style.overflow = '';
    }, 400);
    currentId = null;
    selectedSize = null;
  }

  function init() {
    document.getElementById('modalClose')?.addEventListener('click', close);
    document.getElementById('modalOverlay')?.addEventListener('click', e => {
      if (e.target === document.getElementById('modalOverlay')) close();
    });

    document.getElementById('modalAddBtn')?.addEventListener('click', () => {
      if (!currentId) return;
      const size = selectedSize || ALL_PRODUCTS[currentId]?.sizes[0] || 'M';
      Cart.add(currentId, size);
      close();
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') close();
    });
  }

  return { open, close, init };
})();
