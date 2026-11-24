/* ═══════════════════════════════════════════════════════════
   main.js — Orchestrates GSAP animations, preloader,
             nav, scroll effects, cursor, particles
═══════════════════════════════════════════════════════════ */

/* ── Feature detect reduced motion ──────────────────────── */
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ════════════════════════════════════════════════
   PRELOADER
════════════════════════════════════════════════ */
(function initPreloader() {
  const preloader = document.getElementById('preloader');
  const fill      = document.getElementById('preloaderFill');
  if (!preloader) return;

  let progress = 0;
  const target = 100;
  const step   = prefersReducedMotion ? 100 : 2;

  function tick() {
    progress = Math.min(progress + step + Math.random() * 3, target);
    if (fill) fill.style.width = progress + '%';

    if (progress < target) {
      requestAnimationFrame(tick);
    } else {
      hidePreloader();
    }
  }

  function hidePreloader() {
    if (prefersReducedMotion) {
      preloader.style.display = 'none';
      startPage();
      return;
    }
    if (typeof gsap !== 'undefined') {
      gsap.to(preloader, {
        opacity: 0, duration: 0.6, ease: 'power2.inOut',
        onComplete: () => { preloader.style.display = 'none'; startPage(); }
      });
    } else {
      preloader.style.opacity = '0';
      setTimeout(() => { preloader.style.display = 'none'; startPage(); }, 600);
    }
  }

  // Delay start by 200ms to let fonts load
  setTimeout(tick, 200);
})();

/* ════════════════════════════════════════════════
   CUSTOM CURSOR
════════════════════════════════════════════════ */
(function initCursor() {
  if (window.matchMedia('(pointer: coarse)').matches) return; // touch device

  const cursor   = document.getElementById('cursor');
  const follower = document.getElementById('cursorFollower');
  if (!cursor || !follower) return;

  let mx = 0, my = 0, fx = 0, fy = 0;
  let raf;

  document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

  function loop() {
    fx += (mx - fx) * 0.12;
    fy += (my - fy) * 0.12;
    cursor.style.left   = mx + 'px';
    cursor.style.top    = my + 'px';
    follower.style.left = fx + 'px';
    follower.style.top  = fy + 'px';
    raf = requestAnimationFrame(loop);
  }
  loop();
})();

/* ════════════════════════════════════════════════
   HERO GSAP ANIMATION
════════════════════════════════════════════════ */
function animateHero() {
  if (typeof gsap === 'undefined' || prefersReducedMotion) {
    // Fallback: show immediately
    ['heroLine1','heroLine2','heroSub','heroCta1','heroCta2'].forEach(id => {
      const el = document.getElementById(id);
      if (el) { el.style.opacity = '1'; el.style.transform = 'none'; }
    });
    return;
  }

  gsap.registerPlugin(ScrollTrigger, TextPlugin);

  const tl = gsap.timeline({ delay: 0.2 });

  // Scoreboard count-up flicker
  tl.fromTo('.hero__scoreboard', {
    opacity: 0, scale: 0.85, y: 30
  }, {
    opacity: 1, scale: 1, y: 0,
    duration: 0.8, ease: 'back.out(1.4)'
  });

  // LED numbers flicker in
  tl.fromTo(['#heroNum1','#heroNum2','#heroExtra'], {
    opacity: 0
  }, {
    opacity: 1, duration: 0.1,
    stagger: { each: 0.08, repeat: 3, yoyo: true },
    ease: 'none'
  }, '-=0.3');

  // Title lines
  tl.to('#heroLine1', {
    y: 0, opacity: 1, duration: 0.7, ease: 'power3.out'
  }, '-=0.1');
  tl.to('#heroLine2', {
    y: 0, opacity: 1, duration: 0.7, ease: 'power3.out'
  }, '-=0.5');

  // Subtitle
  tl.to('#heroSub', {
    y: 0, opacity: 1, duration: 0.6, ease: 'power2.out'
  }, '-=0.3');

  // CTA buttons
  tl.to('#heroCta1', {
    y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.3)'
  }, '-=0.2');
  tl.to('#heroCta2', {
    y: 0, opacity: 1, duration: 0.5, ease: 'back.out(1.3)'
  }, '-=0.3');
}

/* ════════════════════════════════════════════════
   SCROLL REVEAL (via IntersectionObserver + GSAP)
════════════════════════════════════════════════ */
function initScrollReveal() {
  if (prefersReducedMotion) {
    document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el => {
      el.classList.add('in-view');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in-view');
        observer.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  document.querySelectorAll('.reveal-up,.reveal-left,.reveal-right').forEach(el => observer.observe(el));
}

/* ════════════════════════════════════════════════
   PARALLAX on FEATURED JERSEY
════════════════════════════════════════════════ */
function initParallax() {
  if (prefersReducedMotion || typeof gsap === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.to('.featured-jersey__hanger', {
    y: -40,
    scrollTrigger: {
      trigger: '.featured-jersey',
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1.5
    }
  });

  gsap.from('.featured-jersey__meta', {
    x: -50, opacity: 0, duration: 0.8, ease: 'power2.out',
    scrollTrigger: {
      trigger: '.featured-jersey',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });
  gsap.from('.featured-jersey__visual', {
    x: 50, opacity: 0, duration: 0.8, ease: 'power2.out',
    scrollTrigger: {
      trigger: '.featured-jersey',
      start: 'top 70%',
      toggleActions: 'play none none none'
    }
  });
}

/* ════════════════════════════════════════════════
   FLOATING PARTICLES (featured section)
════════════════════════════════════════════════ */
function initParticles() {
  if (prefersReducedMotion) return;
  const container = document.getElementById('featuredParticles');
  if (!container) return;

  for (let i = 0; i < 20; i++) {
    const p = document.createElement('div');
    p.className = 'particle';
    p.style.setProperty('--dur',   (3 + Math.random() * 4) + 's');
    p.style.setProperty('--delay', (Math.random() * 5) + 's');
    p.style.setProperty('--tx',    (-30 + Math.random() * 60) + 'px');
    p.style.setProperty('--ty',    (-40 - Math.random() * 80) + 'px');
    p.style.left    = Math.random() * 100 + '%';
    p.style.top     = Math.random() * 100 + '%';
    p.style.opacity = Math.random() * 0.5;
    p.style.width   = (2 + Math.random() * 3) + 'px';
    p.style.height  = p.style.width;
    container.appendChild(p);
  }
}

/* ════════════════════════════════════════════════
   NAV — Scroll behavior
════════════════════════════════════════════════ */
function initNav() {
  const nav = document.getElementById('nav');
  if (!nav) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) {
      nav.classList.add('nav--scrolled');
    } else {
      nav.classList.remove('nav--scrolled');
    }
  }, { passive: true });

  // Mobile menu
  const menuBtn    = document.getElementById('menuBtn');
  const mobileMenu = document.getElementById('mobileMenu');
  if (!menuBtn || !mobileMenu) return;

  menuBtn.addEventListener('click', () => {
    const open = menuBtn.classList.toggle('nav__menu-btn--open');
    menuBtn.setAttribute('aria-expanded', open);
    mobileMenu.hidden = !open;
    mobileMenu.classList.toggle('mobile-menu--open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
}

/* ════════════════════════════════════════════════
   FEATURED ADD TO CART BUTTON
════════════════════════════════════════════════ */
function initFeaturedBtn() {
  const btn = document.getElementById('featuredAddBtn');
  if (!btn) return;
  btn.addEventListener('click', () => {
    const id = btn.dataset.id;
    const p  = ALL_PRODUCTS[id];
    if (!p) return;
    Cart.add(id, 'L');
  });
}

/* ════════════════════════════════════════════════
   SMOOTH SCROLL TO LOCKER
════════════════════════════════════════════════ */
function initHeroScroll() {
  document.querySelectorAll('a[href="#locker"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.getElementById('locker')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
}

/* ════════════════════════════════════════════════
   SCOREBOARD NUMBER ANIMATION (hero)
════════════════════════════════════════════════ */
function animateScoreboard() {
  if (prefersReducedMotion || typeof gsap === 'undefined') return;
  // Periodic minute flicker
  setInterval(() => {
    const extra = document.getElementById('heroExtra');
    if (!extra) return;
    gsap.fromTo(extra, {
      textShadow: '0 0 60px rgba(255,149,0,1), 0 0 120px rgba(255,149,0,.5)'
    }, {
      textShadow: '0 0 30px rgba(255,149,0,.5), 0 0 60px rgba(255,149,0,.2)',
      duration: 0.3, ease: 'power2.inOut', yoyo: true, repeat: 3
    });
  }, 8000);
}

/* ════════════════════════════════════════════════
   PAGE ENTRY — called after preloader
════════════════════════════════════════════════ */
function startPage() {
  initNav();
  initScrollReveal();
  initParallax();
  initParticles();
  initFeaturedBtn();
  initHeroScroll();
  animateHero();
  animateScoreboard();
  Modal.init();
  Cart.init();
  initLocker();
}
