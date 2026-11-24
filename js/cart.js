/* ═══════════════════════════════════════════════════════════
   cart.js — Cart state, drawer, persistence
═══════════════════════════════════════════════════════════ */

const Cart = (() => {
  let items = JSON.parse(localStorage.getItem('cart90') || '[]');

  function save() {
    localStorage.setItem('cart90', JSON.stringify(items));
  }

  function getCount() {
    return items.reduce((n, i) => n + i.qty, 0);
  }

  function getSubtotal() {
    return items.reduce((n, i) => n + i.price * i.qty, 0);
  }

  function add(productId, size) {
    const p = ALL_PRODUCTS[productId];
    if (!p) return;
    const key = productId + '-' + size;
    const existing = items.find(i => i.key === key);
    if (existing) {
      existing.qty++;
    } else {
      items.push({
        key,
        id: productId,
        name: p.name,
        price: p.price,
        size,
        qty: 1,
        svgFn: p.id   // used in render
      });
    }
    save();
    updateUI();
    showToast('✓ Agregado al carrito — ' + p.team || p.name);
    bumpCounter();
  }

  function remove(key) {
    items = items.filter(i => i.key !== key);
    save();
    updateUI();
    renderDrawerItems();
  }

  function changeQty(key, delta) {
    const item = items.find(i => i.key === key);
    if (!item) return;
    item.qty = Math.max(1, item.qty + delta);
    save();
    updateUI();
    renderDrawerItems();
  }

  function updateUI() {
    const count = getCount();
    const countEl = document.getElementById('cartCount');
    if (countEl) countEl.textContent = count;

    const drawerCount = document.getElementById('cartDrawerCount');
    if (drawerCount) drawerCount.textContent = count + (count === 1 ? ' item' : ' items');

    const subtotalEl = document.getElementById('cartSubtotal');
    if (subtotalEl) subtotalEl.textContent = formatPrice(getSubtotal());

    const footerEl = document.getElementById('cartFooter');
    const emptyEl  = document.getElementById('cartEmpty');
    const listEl   = document.getElementById('cartItems');
    if (footerEl) footerEl.hidden = count === 0;
    if (emptyEl)  emptyEl.style.display  = count === 0 ? '' : 'none';
    if (listEl)   listEl.style.display   = count === 0 ? 'none' : '';
  }

  function renderDrawerItems() {
    const list = document.getElementById('cartItems');
    if (!list) return;
    list.innerHTML = '';
    items.forEach(item => {
      const p = ALL_PRODUCTS[item.id];
      const svgStr = p ? p.svg() : '<svg viewBox="0 0 100 100"><text x="50" y="50" text-anchor="middle">?</text></svg>';
      const li = document.createElement('li');
      li.className = 'cart-item';
      li.dataset.key = item.key;
      li.innerHTML = `
        <div class="cart-item__thumb">${svgStr}</div>
        <div class="cart-item__info">
          <div class="cart-item__name">${item.name}</div>
          <div class="cart-item__size">Talla: ${item.size}</div>
          <div class="cart-item__controls">
            <button class="cart-item__qty-btn" data-action="dec" data-key="${item.key}" aria-label="Disminuir cantidad">−</button>
            <span class="cart-item__qty">${item.qty}</span>
            <button class="cart-item__qty-btn" data-action="inc" data-key="${item.key}" aria-label="Aumentar cantidad">+</button>
          </div>
        </div>
        <div class="cart-item__right">
          <span class="cart-item__price">${formatPrice(item.price * item.qty)}</span>
          <button class="cart-item__remove" data-key="${item.key}" aria-label="Eliminar producto">Eliminar</button>
        </div>`;
      list.appendChild(li);
    });

    // Delegate events on list
    list.onclick = e => {
      const inc = e.target.closest('[data-action="inc"]');
      const dec = e.target.closest('[data-action="dec"]');
      const rem = e.target.closest('.cart-item__remove');
      if (inc) changeQty(inc.dataset.key, 1);
      if (dec) changeQty(dec.dataset.key, -1);
      if (rem) remove(rem.dataset.key);
    };
  }

  function bumpCounter() {
    const c = document.getElementById('cartCount');
    if (!c) return;
    c.classList.remove('cart-bump');
    void c.offsetWidth;
    c.classList.add('cart-bump');
    setTimeout(() => c.classList.remove('cart-bump'), 400);
  }

  function openDrawer() {
    renderDrawerItems();
    updateUI();
    const drawer  = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (!drawer) return;
    drawer.hidden  = false;
    overlay.hidden = false;
    overlay.setAttribute('aria-hidden', 'false');
    requestAnimationFrame(() => drawer.classList.add('cart-drawer--open'));
    document.body.style.overflow = 'hidden';
    drawer.querySelector('.cart-drawer__close')?.focus();
  }

  function closeDrawer() {
    const drawer  = document.getElementById('cartDrawer');
    const overlay = document.getElementById('cartOverlay');
    if (!drawer) return;
    drawer.classList.remove('cart-drawer--open');
    setTimeout(() => {
      drawer.hidden  = true;
      overlay.hidden = true;
      overlay.setAttribute('aria-hidden', 'true');
      document.body.style.overflow = '';
    }, 500);
  }

  function init() {
    updateUI();
    renderDrawerItems();

    const cartBtn    = document.getElementById('cartBtn');
    const closeBtn   = document.getElementById('cartDrawerClose');
    const overlay    = document.getElementById('cartOverlay');

    cartBtn?.addEventListener('click', openDrawer);
    closeBtn?.addEventListener('click', closeDrawer);
    overlay?.addEventListener('click', closeDrawer);

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeDrawer();
    });
  }

  return { add, remove, changeQty, openDrawer, closeDrawer, init, getCount, getSubtotal };
})();

function showToast(msg) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('toast--visible');
  clearTimeout(t._timeout);
  t._timeout = setTimeout(() => t.classList.remove('toast--visible'), 3000);
}
