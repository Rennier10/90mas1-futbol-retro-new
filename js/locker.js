/* ═══════════════════════════════════════════════════════════
   locker.js — Renders the jersey racks and boots shelf
═══════════════════════════════════════════════════════════ */

function buildJerseyHanger(product, index) {
  const hanger = document.createElement('div');
  hanger.className = 'jersey-hanger';
  hanger.setAttribute('tabindex', '0');
  hanger.setAttribute('role', 'button');
  hanger.setAttribute('aria-label', `Ver detalle: ${product.name}`);
  hanger.dataset.id = product.id;
  hanger.style.setProperty('--i', index);

  hanger.innerHTML = `
    <div class="jersey-hanger__hook"></div>
    <div class="jersey-hanger__bar"></div>
    <div class="jersey-hanger__jersey">${product.svg()}</div>
    <div class="jersey-hanger__label">
      <span class="jersey-hanger__team">${product.team}</span>
      <span class="jersey-hanger__year">${product.year}</span>
      <span class="jersey-hanger__price">${product.priceLabel}</span>
    </div>`;

  // Click / Enter / Space → open modal
  const open = () => Modal.open(product.id);
  hanger.addEventListener('click', open);
  hanger.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });

  // Stagger animation entry
  setTimeout(() => {
    hanger.classList.add('hanger-in');
  }, 80 + index * 100);

  return hanger;
}

function buildBootCard(product, index) {
  const card = document.createElement('div');
  card.className = 'boot-card';
  card.setAttribute('tabindex', '0');
  card.setAttribute('role', 'button');
  card.setAttribute('aria-label', `Ver detalle: ${product.name}`);
  card.dataset.id = product.id;

  card.innerHTML = `
    ${product.badge ? `<span class="boot-card__badge">${product.badge}</span>` : ''}
    <div class="boot-card__img--svg">${product.svg()}</div>
    <div class="boot-card__name">${product.name}</div>
    <div class="boot-card__brand">${product.brand}</div>
    <div class="boot-card__price">${product.priceLabel}</div>`;

  const open = () => Modal.open(product.id);
  card.addEventListener('click', open);
  card.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); open(); }
  });

  setTimeout(() => {
    card.classList.add('boot-in');
  }, 80 + index * 120);

  return card;
}

function renderRack(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  products.forEach((p, i) => container.appendChild(buildJerseyHanger(p, i)));
}

function renderBoots(containerId, products) {
  const container = document.getElementById(containerId);
  if (!container) return;
  container.innerHTML = '';
  products.forEach((p, i) => container.appendChild(buildBootCard(p, i)));
}

function initLocker() {
  renderRack('rackRetro',  PRODUCTS.retro);
  renderRack('rackModern', PRODUCTS.modern);
  renderBoots('bootsShelf', PRODUCTS.boots);

  // Tab switching
  const tabs   = document.querySelectorAll('.locker-tab');
  const panels = document.querySelectorAll('.rack-panel');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.dataset.tab;

      tabs.forEach(t => {
        t.classList.remove('locker-tab--active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('locker-tab--active');
      tab.setAttribute('aria-selected', 'true');

      panels.forEach(panel => {
        const isTarget = panel.id === 'tab-' + target;
        panel.hidden = !isTarget;
        if (isTarget) {
          // Re-animate items
          const items = panel.querySelectorAll('.jersey-hanger, .boot-card');
          items.forEach((el, i) => {
            el.classList.remove('hanger-in', 'boot-in');
            void el.offsetWidth;
            setTimeout(() => el.classList.add('hanger-in', 'boot-in'), 60 + i * 80);
          });
        }
      });
    });
  });
}
