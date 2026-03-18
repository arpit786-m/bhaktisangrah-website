/* =============================================
   BHAKTI SANGRAH — SHARED NAV / FOOTER INJECTOR
   nav.js: Auto-injects consistent header, footer,
   search overlay and floating OM button on every page.
   ============================================= */

(function () {
  /* ---- Detect root path from URL pattern (reliable for file:// and https://) ---- */
  const href = window.location.href.replace(/\\/g, '/');
  let root;
  if (href.includes('/prayers/')) {
    root = '../../';
  } else if (href.includes('/pages/')) {
    root = '../';
  } else {
    root = ''; // homepage (index.html at root)
  }

  /* ---- Determine active link ---- */
  function isActive(href) {
    const p = window.location.href;
    if (href === root + 'index.html' || href === root) return p.includes('index.html') || p.endsWith('/Bhakti%20Sangrah/') || p.endsWith('/Bhakti Sangrah/');
    if (href.includes('aarti')) return p.includes('aarti');
    if (href.includes('chalisa')) return p.includes('chalisa');
    if (href.includes('mantra')) return p.includes('mantra');
    if (href.includes('pooja')) return p.includes('pooja');
    if (href.includes('popular')) return p.includes('popular');
    if (href.includes('favourites')) return p.includes('favourit');
    if (href.includes('about')) return p.includes('about');
    return false;
  }

  const navLinks = [
    { href: root + 'index.html', label: 'Home', icon: '🏠' },
    { href: root + 'pages/aarti.html', label: 'Aarti', icon: '🪔' },
    { href: root + 'pages/chalisa.html', label: 'Chalisa', icon: '🙏' },
    { href: root + 'pages/mantra.html', label: 'Mantra', icon: '🕉️' },
    { href: root + 'pages/stotra.html', label: 'Stotra', icon: '📿' },
    { href: root + 'pages/bhajan.html', label: 'Bhajan', icon: '🎵' },
    { href: root + 'pages/stuti.html', label: 'Stuti', icon: '🙌' },
    { href: root + 'pages/pooja.html', label: 'Pooja Path', icon: '🌸' },
    { href: root + 'pages/popular.html', label: 'Popular', icon: '⭐' },
    { href: root + 'pages/favourites.html', label: 'Favourites', icon: '❤️' },
    { href: root + 'pages/about.html', label: 'About', icon: 'ℹ️' },
  ];

  const navLinksHTML = navLinks.map(l =>
    `<li><a href="${l.href}"${isActive(l.href) ? ' class="active"' : ''}>${l.label}</a></li>`).join('');
  const mobileLinksHTML = navLinks.map(l =>
    `<li><a href="${l.href}"${isActive(l.href) ? ' class="active"' : ''}>${l.icon} ${l.label}</a></li>`).join('');

  /* ---- Inject Navbar ---- */
  if (!document.querySelector('.navbar')) {
    const nav = document.createElement('nav');
    nav.className = 'navbar';
    nav.innerHTML = `<div class="container">
      <a href="${root}index.html" class="nav-brand">
        <svg width="38" height="38" viewBox="0 0 38 38" fill="none"><circle cx="19" cy="19" r="18" fill="#FF6B00" opacity=".15"/><text x="19" y="26" text-anchor="middle" font-size="20" fill="#FF6B00" font-family="serif">ॐ</text></svg>
        <div><span class="brand-name">Bhakti Sangrah</span></div>
      </a>
      <ul class="nav-links">${navLinksHTML}</ul>
      <div class="nav-actions">
        <button class="icon-btn theme-toggle" title="Toggle theme" aria-label="Toggle dark and light theme">🌙</button>
        <button class="icon-btn open-search" title="Search (Ctrl+K)" aria-label="Open search modal">🔍</button>
        <button class="icon-btn" id="hamburger" title="Menu" aria-label="Open mobile navigation"><span></span><span></span><span></span></button>
      </div>
    </div>`;
    document.body.insertBefore(nav, document.body.firstChild);
  } else {
    /* update existing navbar to use shared roots */
    document.querySelectorAll('.nav-links a, .mobile-nav-links a').forEach(a => {
      if (isActive(a.href)) a.classList.add('active');
    });
  }

  /* ---- Inject Mobile Nav ---- */
  if (!document.getElementById('navOverlay')) {
    const overlay = document.createElement('div');
    overlay.className = 'nav-overlay'; overlay.id = 'navOverlay';
    document.body.insertBefore(overlay, document.body.children[1]);
  }
  if (!document.getElementById('mobileNav')) {
    const mob = document.createElement('div');
    mob.className = 'mobile-nav'; mob.id = 'mobileNav';
    mob.innerHTML = `<div class="mobile-nav-header">
      <span style="font-family:var(--font-cinzel);color:var(--saffron)">ॐ Bhakti Sangrah</span>
      <button class="icon-btn" id="closeNav" aria-label="Close mobile navigation">✕</button>
    </div>
    <ul class="mobile-nav-links">${mobileLinksHTML}</ul>`;
    document.body.insertBefore(mob, document.body.children[2]);
  }

  /* ---- Inject Search Overlay ---- */
  if (!document.getElementById('searchOverlay')) {
    const so = document.createElement('div');
    so.className = 'search-overlay'; so.id = 'searchOverlay';
    so.innerHTML = `<div class="search-modal"><div class="search-modal-inner"><div class="search-modal-input">
      <span>🔍</span>
      <input type="text" id="searchInput" placeholder="Search Aarti, Chalisa, Mantra..." autocomplete="off" aria-label="Search prayers input" />
      <button class="icon-btn" id="closeSearch" aria-label="Close search modal">✕</button>
    </div></div><div class="search-results-list" id="searchResultsList"></div></div>`;
    document.body.appendChild(so);
  }

  /* ---- Inject Floating OM Button ---- */
  if (!document.getElementById('omBtn')) {
    const omBtn = document.createElement('button');
    omBtn.id = 'omBtn'; omBtn.title = 'Start Om Meditation'; omBtn.textContent = 'ॐ';
    document.body.appendChild(omBtn);
  }

  /* ---- Inject Footer ---- */
  if (!document.querySelector('.footer')) {
    const footer = document.createElement('footer');
    footer.className = 'footer';
    footer.innerHTML = `<div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-name">ॐ Bhakti Sangrah</div>
          <p>A digital sanctuary for Hindu devotional prayers. Read Aarti, Chalisa, Mantra in Hindi and Roman transliteration — free, forever.</p>
          <div style="margin-top:1rem">
            <a href="https://www.youtube.com/results?search_query=hanuman+chalisa" target="_blank" style="display:inline-flex;align-items:center;gap:.4rem;background:rgba(255,0,0,.15);color:#FF4444;border:1px solid rgba(255,0,0,.25);padding:.35rem .85rem;border-radius:50px;font-size:.8rem;font-weight:600">▶ Watch Bhajans on YouTube</a>
          </div>
        </div>
        <div class="footer-col">
          <h4>Aarti</h4>
          <a href="${root}prayers/aarti/ganesh-aarti.html">Ganesh Aarti</a>
          <a href="${root}prayers/aarti/shiv-aarti.html">Shiv Aarti</a>
          <a href="${root}prayers/aarti/lakshmi-aarti.html">Lakshmi Aarti</a>
          <a href="${root}prayers/aarti/durga-aarti.html">Durga Aarti</a>
          <a href="${root}prayers/aarti/hanuman-aarti.html">Hanuman Aarti</a>
          <a href="${root}pages/aarti.html">View All Aartis →</a>
        </div>
        <div class="footer-col">
          <h4>Chalisa & Mantra</h4>
          <a href="${root}prayers/chalisa/hanuman-chalisa.html">Hanuman Chalisa</a>
          <a href="${root}prayers/chalisa/durga-chalisa.html">Durga Chalisa</a>
          <a href="${root}prayers/chalisa/shiv-chalisa.html">Shiv Chalisa</a>
          <a href="${root}prayers/mantra/gayatri-mantra.html">Gayatri Mantra</a>
          <a href="${root}prayers/mantra/mahamrityunjaya-mantra.html">Mahamrityunjaya</a>
          <a href="${root}prayers/mantra/ram-stuti.html">Shri Ram Stuti</a>
        </div>
        <div class="footer-col">
          <h4>Quick Links</h4>
          <a href="${root}pages/popular.html">⭐ Popular Prayers</a>
          <a href="${root}pages/favourites.html">❤️ My Favourites</a>
          <a href="${root}pages/pooja.html">🌸 Pooja Path</a>
          <a href="${root}pages/chalisa.html">🙏 Chalisa</a>
          <a href="${root}pages/mantra.html">🕉️ Mantra</a>
          <a href="${root}pages/about.html">ℹ️ About</a>
        </div>
      </div>
      <div class="footer-bottom">
        <p>© 2026 Bhakti Sangrah. Made with 🙏 devotion for devotees worldwide.</p>
        <p style="font-family:var(--font-hindi)">🕉️ सर्वे भवन्तु सुखिनः · सर्वे सन्तु निरामयाः</p>
      </div>
    </div>`;
    document.body.appendChild(footer);
  }

  /* ---- Inject Toast ---- */
  if (!document.getElementById('toast')) {
    const toast = document.createElement('div');
    toast.id = 'toast'; toast.className = 'toast';
    document.body.appendChild(toast);
  }
})();
