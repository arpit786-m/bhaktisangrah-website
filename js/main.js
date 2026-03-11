/* =============================================
   BHAKTI SANGRAH — MAIN JAVASCRIPT v3.0
   Modern Interactive Devotional Experience
   ============================================= */

// ---- Prayer Database ----
const PRAYERS = [
  { id: 'hanuman-chalisa',      title: 'Hanuman Chalisa',          titleHi: 'हनुमान चालीसा',      category: 'chalisa', color: '#FF6B00', path: '../prayers/chalisa/hanuman-chalisa.html',         description: 'Most powerful prayer to Lord Hanuman by Tulsidas', youtube: 'https://www.youtube.com/results?search_query=hanuman+chalisa+full' },
  { id: 'ganesh-aarti',         title: 'Ganesh Aarti',             titleHi: 'गणेश आरती',           category: 'aarti',   color: '#FF8C38', path: '../prayers/aarti/ganesh-aarti.html',              description: 'Jay Ganesh Deva — Aarti in praise of Lord Ganesha', youtube: 'https://www.youtube.com/results?search_query=jai+ganesh+deva+aarti' },
  { id: 'ganpati-aarti',        title: 'Ganpati Ji Ki Aarti',      titleHi: 'गणपति आरती',          category: 'aarti',   color: '#FF8C38', path: '../prayers/aarti/ganpati-aarti.html',             description: 'Ganpati Ki Seva Mangal Meva — Ancient Aarti to Lord Ganesha', youtube: 'https://www.youtube.com/results?search_query=ganpati+aarti+ganpati+ki+seva' },
  { id: 'shiv-aarti',           title: 'Shiv Aarti',               titleHi: 'शिव आरती',            category: 'aarti',   color: '#1A6BB5', path: '../prayers/aarti/shiv-aarti.html',                description: 'Om Jai Shiv Onkara — Aarti of Lord Shiva', youtube: 'https://www.youtube.com/results?search_query=om+jai+shiv+onkara+aarti' },
  { id: 'jagdish-aarti',        title: 'Jagdish Aarti',            titleHi: 'जगदीश आरती',          category: 'aarti',   color: '#6A1B9A', path: '../prayers/aarti/jagdish-aarti.html',             description: 'Om Jai Jagdish Hare — Universally sung Aarti to Lord Vishnu', youtube: 'https://www.youtube.com/results?search_query=om+jai+jagdish+hare+aarti' },
  { id: 'lakshmi-aarti',        title: 'Lakshmi Aarti',            titleHi: 'लक्ष्मी आरती',        category: 'aarti',   color: '#F5A623', path: '../prayers/aarti/lakshmi-aarti.html',             description: 'Om Jai Lakshmi Mata — Aarti of Goddess Lakshmi', youtube: 'https://www.youtube.com/results?search_query=om+jai+lakshmi+mata+aarti' },
  { id: 'durga-aarti',          title: 'Durga Aarti',              titleHi: 'दुर्गा आरती',         category: 'aarti',   color: '#C62828', path: '../prayers/aarti/durga-aarti.html',               description: 'Jai Ambe Gauri — Aarti of Goddess Durga', youtube: 'https://www.youtube.com/results?search_query=jai+ambe+gauri+durga+aarti' },
  { id: 'hanuman-aarti',        title: 'Hanuman Aarti',            titleHi: 'हनुमान आरती',         category: 'aarti',   color: '#FF6B00', path: '../prayers/aarti/hanuman-aarti.html',             description: 'Aarti Keejai Hanuman Lala Ki — Bajrangbali Aarti', youtube: 'https://www.youtube.com/results?search_query=aarti+keejai+hanuman+lala+ki' },
  { id: 'balaji-aarti',         title: 'Balaji Aarti',             titleHi: 'बालाजी आरती',         category: 'aarti',   color: '#BF360C', path: '../prayers/aarti/balaji-aarti.html',              description: 'Om Jai Hanumat Veera — Mehandipur Balaji Aarti', youtube: 'https://www.youtube.com/results?search_query=balaji+aarti+mehandipur' },
  { id: 'kali-maa-aarti',       title: 'Kali Maa Aarti',           titleHi: 'काली माँ आरती',       category: 'aarti',   color: '#880E4F', path: '../prayers/aarti/kali-maa-aarti.html',            description: 'Ambe Tu Hai Jagdambe Kaali — Aarti of Goddess Kali', youtube: 'https://www.youtube.com/results?search_query=kali+maa+aarti+ambe+tu+hai' },
  { id: 'pretraj-aarti',        title: 'Pretraj Sarkar Aarti',     titleHi: 'प्रेतराज सरकार आरती', category: 'aarti',   color: '#4A148C', path: '../prayers/aarti/pretraj-aarti.html',             description: 'Jai Jai Pretraj Sarkar — Guardian of Mehandipur', youtube: 'https://www.youtube.com/results?search_query=pretraj+sarkar+aarti+mehandipur' },
  { id: 'bhairav-aarti',        title: 'Bhairav Kotwal Aarti',     titleHi: 'भैरव कोतवाल आरती',   category: 'aarti',   color: '#B71C1C', path: '../prayers/aarti/bhairav-aarti.html',             description: 'Jai Jai Bhairav Kotwal — Bhairav Aarti for protection', youtube: 'https://www.youtube.com/results?search_query=kal+bhairav+aarti' },
  { id: 'ganga-aarti',          title: 'Ganga Aarti',              titleHi: 'गंगा आरती',           category: 'aarti',   color: '#0097A7', path: '../prayers/aarti/ganga-aarti.html',               description: 'Om Jai Gange Mata — Sacred Ganga Aarti at ghats', youtube: 'https://www.youtube.com/results?search_query=ganga+aarti+varanasi+haridwar' },
  { id: 'saraswati-aarti',      title: 'Saraswati Aarti',          titleHi: 'सरस्वती आरती',        category: 'aarti',   color: '#0288D1', path: '../prayers/aarti/saraswati-aarti.html',           description: 'Jay Saraswati Mata — Aarti of Goddess Saraswati', youtube: 'https://www.youtube.com/results?search_query=jai+saraswati+mata+aarti' },
  { id: 'balkrishna-aarti',     title: 'Balkrishna Aarti',         titleHi: 'बालकृष्ण आरती',       category: 'aarti',   color: '#283593', path: '../prayers/aarti/balkrishna-aarti.html',          description: 'Aarti Balkrishn Ki Keejai — Braj Bhasha Aarti to infant Krishna', youtube: 'https://www.youtube.com/results?search_query=balkrishna+aarti' },
  { id: 'krishna-aarti',        title: 'Kunj Bihari Aarti',        titleHi: 'कुंज बिहारी आरती',   category: 'aarti',   color: '#1565C0', path: '../prayers/aarti/krishna-aarti.html',             description: 'Aarti Kunj Bihari Ki — Devotional Aarti to Lord Krishna', youtube: 'https://www.youtube.com/results?search_query=aarti+kunj+bihari+ki' },
  { id: 'gayatri-aarti',        title: 'Gayatri Mata Aarti',       titleHi: 'गायत्री माता आरती',  category: 'aarti',   color: '#F57F17', path: '../prayers/aarti/gayatri-aarti.html',             description: 'Om Jai Gayatri Mata — Aarti to the mother of all Vedic mantras', youtube: 'https://www.youtube.com/results?search_query=gayatri+mata+aarti' },
  { id: 'shani-dev-aarti',      title: 'Shani Dev Aarti',          titleHi: 'शनि देव आरती',       category: 'aarti',   color: '#263238', path: '../prayers/aarti/shani-dev-aarti.html',           description: 'Jai Jai Shri Shanidev — Saturday Shani Aarti', youtube: 'https://www.youtube.com/results?search_query=shani+dev+aarti' },
  { id: 'shyam-baba-aarti',     title: 'Khatu Shyam Aarti',        titleHi: 'खाटू श्याम आरती',    category: 'aarti',   color: '#1B5E20', path: '../prayers/aarti/shyam-baba-aarti.html',          description: 'Om Jai Shri Shyam Hare — Aarti to Khatu Shyam Baba', youtube: 'https://www.youtube.com/results?search_query=khatu+shyam+baba+aarti' },
  { id: 'sai-baba-aarti',       title: 'Sai Baba Aarti',           titleHi: 'साई बाबा आरती',      category: 'aarti',   color: '#E65100', path: '../prayers/aarti/sai-baba-aarti.html',            description: 'Aarti Shri Sai Guruvar Ki — Shirdi Sai Baba Aarti', youtube: 'https://www.youtube.com/results?search_query=sai+baba+aarti+shirdi' },
  { id: 'santoshi-maa-aarti',   title: 'Santoshi Maa Aarti',       titleHi: 'संतोषी माता आरती',   category: 'aarti',   color: '#FFD700', path: '../prayers/aarti/santoshi-maa-aarti.html',        description: 'Jai Santoshi Mata — Friday Aarti to Goddess of Contentment', youtube: 'https://www.youtube.com/results?search_query=santoshi+maa+aarti' },
  { id: 'durga-chalisa',        title: 'Durga Chalisa',            titleHi: 'दुर्गा चालीसा',      category: 'chalisa', color: '#C62828', path: '../prayers/chalisa/durga-chalisa.html',            description: 'Forty devotional verses to Goddess Durga', youtube: 'https://www.youtube.com/results?search_query=durga+chalisa' },
  { id: 'shiv-chalisa',         title: 'Shiv Chalisa',             titleHi: 'शिव चालीसा',         category: 'chalisa', color: '#1A6BB5', path: '../prayers/chalisa/shiv-chalisa.html',             description: 'Forty devotional verses to Lord Shiva', youtube: 'https://www.youtube.com/results?search_query=shiv+chalisa' },
  { id: 'gayatri-mantra',       title: 'Gayatri Mantra',           titleHi: 'गायत्री मंत्र',      category: 'mantra',  color: '#2E7D32', path: '../prayers/mantra/gayatri-mantra.html',            description: 'Sacred Vedic mantra for wisdom — Rigveda 3.62.10', youtube: 'https://www.youtube.com/results?search_query=gayatri+mantra+108+times' },
  { id: 'mahamrityunjaya-mantra', title: 'Mahamrityunjaya Mantra', titleHi: 'महामृत्युंजय मंत्र', category: 'mantra', color: '#6A1B9A', path: '../prayers/mantra/mahamrityunjaya-mantra.html', description: 'Powerful Shiva mantra for healing and liberation', youtube: 'https://www.youtube.com/results?search_query=mahamrityunjaya+mantra+108+times' },
  { id: 'ram-stuti',            title: 'Shri Ram Stuti',           titleHi: 'श्री राम स्तुति',    category: 'mantra',  color: '#1A237E', path: '../prayers/mantra/ram-stuti.html',                 description: 'Shri Ramchandra Kripalu Bhajman — Tulsidas Ram Stuti', youtube: 'https://www.youtube.com/results?search_query=shri+ram+stuti+ramchandra+kripalu' },
  { id: 'satyanarayan-katha',   title: 'Satyanarayan Katha',       titleHi: 'सत्यनारायण कथा',    category: 'pooja',   color: '#E65100', path: '../prayers/pooja/satyanarayan-katha.html',         description: 'Sacred story of Lord Satyanarayan Vrat', youtube: 'https://www.youtube.com/results?search_query=satyanarayan+katha' },
  { id: 'navratri-pooja',       title: 'Navratri Pooja Vidhi',     titleHi: 'नवरात्रि पूजा',     category: 'pooja',   color: '#C62828', path: '../prayers/pooja/navratri-pooja.html',              description: 'Complete Navratri puja procedure', youtube: 'https://www.youtube.com/results?search_query=navratri+pooja+vidhi' },
  { id: 'shiv-puja',            title: 'Shiv Puja Vidhi',          titleHi: 'शिव पूजा',           category: 'pooja',   color: '#1A6BB5', path: '../prayers/pooja/shiv-puja.html',                   description: 'Step-by-step Shiva puja procedure', youtube: 'https://www.youtube.com/results?search_query=shiv+puja+vidhi' },
  { id: 'ganesh-puja',          title: 'Ganesh Puja Vidhi',        titleHi: 'गणेश पूजा',          category: 'pooja',   color: '#FF8C38', path: '../prayers/pooja/ganesh-puja.html',                 description: 'Ganesh puja with proper procedure', youtube: 'https://www.youtube.com/results?search_query=ganesh+puja+vidhi' },
  { id: 'lakshmi-puja',         title: 'Lakshmi Puja Vidhi',       titleHi: 'लक्ष्मी पूजा',      category: 'pooja',   color: '#F5A623', path: '../prayers/pooja/lakshmi-puja.html',                description: 'Lakshmi puja for wealth and prosperity', youtube: 'https://www.youtube.com/results?search_query=lakshmi+puja+vidhi' },
  { id: 'tulsi-puja',           title: 'Tulsi Puja Vidhi',         titleHi: 'तुलसी पूजा',        category: 'pooja',   color: '#2E7D32', path: '../prayers/pooja/tulsi-puja.html',                  description: 'Sacred Tulsi plant puja procedure', youtube: 'https://www.youtube.com/results?search_query=tulsi+puja+vidhi' },
];

// ---- Daily Prayers / Quotes ----
const DAILY_PRAYERS = [
  { text: 'मन की शांति प्रभु भक्ति में है', trans: '"true peace lies in devotion to the Lord"', source: 'उपनिषद्' },
  { text: 'जय गणेश जय गणेश जय गणेश देवा', trans: 'Victory to Lord Ganesha, remover of all obstacles', source: 'गणेश आरती' },
  { text: 'ॐ नमः शिवाय', trans: 'Salutations to Lord Shiva — the auspicious one', source: 'शिव पंचाक्षर मंत्र' },
  { text: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे', trans: 'Hare Krishna Mahamantra — chant for liberation', source: 'महामंत्र' },
  { text: 'श्री राम जय राम जय जय राम', trans: 'Victory to Lord Ram — the ideal ruler and protector', source: 'रामनाम' },
  { text: 'ॐ भूर्भुवः स्वः तत्सवितुर्वरेण्यम्', trans: 'Gayatri Mantra — we meditate on that divine light of God', source: 'ऋग्वेद ३.६२.१०' },
  { text: 'जय अंबे गौरी मैया जय मंगल मूर्ति', trans: 'Victory to Mother Durga — embodiment of auspiciousness', source: 'दुर्गा आरती' },
];

// ---- Hindu Festival/Month Data ----
const VIKRAM_MONTHS = ['चैत्र','वैशाख','ज्येष्ठ','आषाढ़','श्रावण','भाद्रपद','आश्विन','कार्तिक','मार्गशीर्ष','पौष','माघ','फाल्गुन'];
const UPCOMING_FESTIVALS = [
  { name: 'Ram Navami', date: 'Chaitra Shukla 9', emoji: '🏹' },
  { name: 'Hanuman Jayanti', date: 'Chaitra Purnima', emoji: '🙏' },
  { name: 'Akshaya Tritiya', date: 'Vaishakh Shukla 3', emoji: '🪷' },
  { name: 'Ganesh Chaturthi', date: 'Bhadrapad Shukla 4', emoji: '🐘' },
  { name: 'Navratri', date: 'Ashwin Shukla 1-9', emoji: '🌺' },
  { name: 'Diwali', date: 'Kartik Amavasya', emoji: '🪔' },
  { name: 'Maha Shivratri', date: 'Falgun Krishna 13', emoji: '🔱' },
];

// ---- Favourites ----
const FAV_KEY = 'bhakti_favourites';
function getFavourites() { try { return JSON.parse(localStorage.getItem(FAV_KEY) || '[]'); } catch { return []; } }
function saveFavourites(list) { localStorage.setItem(FAV_KEY, JSON.stringify(list)); }
function isFavourite(id) { return getFavourites().includes(id); }
function toggleFavourite(id) {
  let favs = getFavourites();
  if (favs.includes(id)) { favs = favs.filter(f => f !== id); showToast('Removed from Favourites'); }
  else { favs.push(id); showToast('Saved to Favourites ❤️'); }
  saveFavourites(favs);
  return favs.includes(id);
}

// ---- Toast ----
function showToast(msg) {
  let toast = document.getElementById('toast');
  if (!toast) { toast = document.createElement('div'); toast.id = 'toast'; toast.className = 'toast'; document.body.appendChild(toast); }
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 3000);
}

// ---- Dark Mode ----
function initTheme() {
  const saved = localStorage.getItem('bhakti_theme') || 'light';
  document.documentElement.setAttribute('data-theme', saved);
  updateThemeBtn(saved);
}
function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', next);
  localStorage.setItem('bhakti_theme', next);
  updateThemeBtn(next);
}
function updateThemeBtn(theme) {
  document.querySelectorAll('.theme-toggle').forEach(btn => {
    btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  });
}

// ---- Mobile Nav ----
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');
  const navOverlay = document.getElementById('navOverlay');
  const closeNav = document.getElementById('closeNav');
  function openNav() { mobileNav?.classList.add('open'); navOverlay?.classList.add('show'); document.body.style.overflow = 'hidden'; }
  function closeNavFn() { mobileNav?.classList.remove('open'); navOverlay?.classList.remove('show'); document.body.style.overflow = ''; }
  hamburger?.addEventListener('click', openNav);
  closeNav?.addEventListener('click', closeNavFn);
  navOverlay?.addEventListener('click', closeNavFn);
}

// ---- Search ----
function initSearch() {
  const overlay = document.getElementById('searchOverlay');
  const input = document.getElementById('searchInput');
  const resultsList = document.getElementById('searchResultsList');
  function openSearch() { overlay?.classList.add('show'); setTimeout(() => input?.focus(), 100); }
  function closeSearch() { overlay?.classList.remove('show'); if (input) input.value = ''; if (resultsList) resultsList.innerHTML = ''; }
  document.querySelectorAll('.open-search').forEach(btn => btn.addEventListener('click', openSearch));
  document.getElementById('closeSearch')?.addEventListener('click', closeSearch);
  overlay?.addEventListener('click', e => { if (e.target === overlay) closeSearch(); });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeSearch(); if ((e.ctrlKey || e.metaKey) && e.key === 'k') { e.preventDefault(); openSearch(); } });
  input?.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    if (!resultsList) return;
    if (!q) { resultsList.innerHTML = ''; return; }
    const results = PRAYERS.filter(p => p.title.toLowerCase().includes(q) || p.description.toLowerCase().includes(q) || p.titleHi.includes(q));
    if (results.length === 0) { resultsList.innerHTML = '<div class="search-no-results">No prayers found 🙏</div>'; return; }
    const scriptTag = document.querySelector('script[src*="js/main.js"]');
    const basePath = scriptTag ? scriptTag.getAttribute('src').replace('js/main.js', '') : '';
    resultsList.innerHTML = results.slice(0, 6).map(p => `
      <a href="${basePath}${p.path.replace('../', '')}" class="search-result-item" onclick="closeSearch?.()">
        <span class="search-result-icon" style="color:${p.color}">🪔</span>
        <div><strong>${p.title}</strong> <span style="font-family:var(--font-hindi);font-size:0.85em;color:var(--text-muted)">${p.titleHi}</span><br/><small style="color:var(--text-muted)">${p.description}</small></div>
        <span class="card-badge badge-${p.category}" style="flex-shrink:0">${p.category}</span>
      </a>`).join('');
  });
}

// ---- Favourite Buttons ----
function initFavButtons() {
  document.querySelectorAll('.fav-btn').forEach(btn => {
    const id = btn.dataset.id;
    if (!id) return;
    btn.textContent = isFavourite(id) ? '❤️' : '🤍';
    btn.addEventListener('click', e => {
      e.preventDefault();
      const isNowFav = toggleFavourite(id);
      btn.textContent = isNowFav ? '❤️' : '🤍';
      btn.classList.add('fav-pop');
      setTimeout(() => btn.classList.remove('fav-pop'), 400);
    });
  });
  const favBtn = document.getElementById('prayerFavBtn');
  if (favBtn) {
    const id = favBtn.dataset.id;
    favBtn.textContent = isFavourite(id) ? '❤️ Saved' : '🤍 Save';
    favBtn.addEventListener('click', () => {
      const isNowFav = toggleFavourite(id);
      favBtn.textContent = isNowFav ? '❤️ Saved' : '🤍 Save';
    });
  }
}

// ---- Share ----
function initShare() {
  document.querySelectorAll('.share-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (navigator.share) {
        navigator.share({ title: document.title, url: window.location.href }).catch(() => {});
      } else {
        navigator.clipboard?.writeText(window.location.href).then(() => showToast('Link copied! 🔗'));
      }
    });
  });
}

// ---- Language Toggle (Prayer Pages) ----
function initLangToggle() {
  const btns = document.querySelectorAll('.lang-btn');
  if (!btns.length) return;
  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const lang = btn.dataset.lang;
      document.querySelectorAll('.lang-hi').forEach(el => el.style.display = lang === 'hi' ? '' : 'none');
      document.querySelectorAll('.lang-en').forEach(el => el.style.display = lang === 'en' ? '' : 'none');
    });
  });
}

// ---- Feedback Form ----
function initFeedback() {
  const form = document.getElementById('feedbackForm');
  form?.addEventListener('submit', e => {
    e.preventDefault();
    showToast('Thank you for your suggestion! 🙏');
    form.reset();
  });
}

// ======================================================
// ====  PARTICLE / FLOWER BURST (Click Effect)  ========
// ======================================================
function initFlowerParticles() {
  const SYMBOLS = ['🌸','🌺','🪷','🌼','✨','⭐','🌟','💫','🪔','🔱','🕉️','🌹','🙏','🪻'];
  const hero = document.querySelector('.hero') || document.querySelector('.prayer-header') || document.body;
  
  function burst(x, y, count = 16) {
    for (let i = 0; i < count; i++) {
      const el = document.createElement('span');
      el.className = 'particle-petal';
      el.textContent = SYMBOLS[Math.floor(Math.random() * SYMBOLS.length)];
      const angle = (i / count) * 360;
      const distance = 80 + Math.random() * 120;
      const rad = (angle * Math.PI) / 180;
      const tx = Math.cos(rad) * distance;
      const ty = Math.sin(rad) * distance;
      const size = 1 + Math.random() * 1.5;
      const duration = 800 + Math.random() * 600;
      el.style.cssText = `
        position:fixed;left:${x}px;top:${y}px;
        font-size:${size}rem;pointer-events:none;
        z-index:9999;user-select:none;
        transform:translate(-50%,-50%) scale(1);
        transition:all ${duration}ms cubic-bezier(.22,.68,0,1.2);
        opacity:1;
      `;
      document.body.appendChild(el);
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          el.style.transform = `translate(calc(-50% + ${tx}px), calc(-50% + ${ty}px)) scale(0) rotate(${Math.random()*720}deg)`;
          el.style.opacity = '0';
        });
      });
      setTimeout(() => el.remove(), duration + 50);
    }
  }
  
  // Click anywhere on hero fires burst
  if (hero && hero !== document.body) {
    hero.addEventListener('click', e => burst(e.clientX, e.clientY));
  }
  // Click on prayer cards fires smaller burst
  document.querySelectorAll('.prayer-card, .category-card, .fav-btn').forEach(card => {
    card.addEventListener('click', e => burst(e.clientX, e.clientY, 8));
  });
}

// ======================================================
// ====  SCROLL ANIMATIONS   ============================
// ======================================================
function initScrollAnimations() {
  const targets = document.querySelectorAll('.prayer-card, .category-card, .section-header, .youtube-card, .deity-card, .stat-item, .festival-item');
  if (!targets.length) return;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  targets.forEach((el, i) => {
    el.style.animationDelay = `${(i % 6) * 60}ms`;
    observer.observe(el);
  });
}

// ======================================================
// ====  PRAYER COUNTER (Streak)  =======================
// ======================================================
function initPrayerCounter() {
  const VISIT_KEY = 'bhakti_visits';
  const DATE_KEY = 'bhakti_last_visit';
  const today = new Date().toDateString();
  let visits = parseInt(localStorage.getItem(VISIT_KEY) || '0');
  const lastVisit = localStorage.getItem(DATE_KEY);
  if (lastVisit !== today) {
    visits++;
    localStorage.setItem(VISIT_KEY, visits);
    localStorage.setItem(DATE_KEY, today);
  }
  const el = document.getElementById('prayerCount');
  if (el) {
    const total = visits + 8472; // seed number
    el.textContent = total.toLocaleString('en-IN');
  }
}

// ======================================================
// ====  TODAY'S PRAYER WIDGET  =========================
// ======================================================
function initTodaysPrayer() {
  const container = document.getElementById('todaysPrayer');
  if (!container) return;
  const dayIndex = new Date().getDay();
  const prayer = DAILY_PRAYERS[dayIndex % DAILY_PRAYERS.length];
  container.innerHTML = `
    <div class="todays-prayer-text">${prayer.text}</div>
    <div class="todays-prayer-trans">${prayer.trans}</div>
    <div class="todays-prayer-source">— ${prayer.source}</div>`;
}

// ======================================================
// ====  HINDU CALENDAR WIDGET  =========================
// ======================================================
function initHinduCalendar() {
  const el = document.getElementById('hinduCalendar');
  if (!el) return;
  const now = new Date();
  const vikramYear = now.getFullYear() + 57; // approximate
  const monthIndex = now.getMonth();
  const vikramMonth = VIKRAM_MONTHS[(monthIndex + 1) % 12];
  const paksha = now.getDate() <= 15 ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';
  const tithi = Math.floor((now.getDate() % 15) + 1);
  const tithiNames = ['प्रतिपदा','द्वितीया','तृतीया','चतुर्थी','पंचमी','षष्ठी','सप्तमी','अष्टमी','नवमी','दशमी','एकादशी','द्वादशी','त्रयोदशी','चतुर्दशी','पूर्णिमा/अमावस्या'];
  const tithiName = tithiNames[tithi - 1] || 'प्रतिपदा';
  const festival = UPCOMING_FESTIVALS[now.getMonth() % UPCOMING_FESTIVALS.length];
  el.innerHTML = `
    <div class="cal-item"><span class="cal-label">विक्रम संवत</span><span class="cal-value">${vikramYear}</span></div>
    <div class="cal-item"><span class="cal-label">मास</span><span class="cal-value">${vikramMonth}</span></div>
    <div class="cal-item"><span class="cal-label">पक्ष / तिथि</span><span class="cal-value">${paksha} · ${tithiName}</span></div>
    <div class="cal-item cal-festival"><span class="cal-label">🎉 आने वाला पर्व</span><span class="cal-value">${festival.emoji} ${festival.name}</span></div>`;
}

// ======================================================
// ====  FLOATING OM BUTTON  ============================
// ======================================================
function initOmButton() {
  const btn = document.getElementById('omBtn');
  if (!btn) return;
  let active = false;
  btn.addEventListener('click', () => {
    active = !active;
    if (active) {
      btn.classList.add('om-active');
      btn.title = 'Click to stop Om meditation';
      showToast('🕉️ OM meditation started — focus on the divine sound');
    } else {
      btn.classList.remove('om-active');
      btn.title = 'Start Om Meditation';
      showToast('🙏 Namaste — May peace be with you');
    }
    // Particle burst
    const rect = btn.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const SYMBOLS = ['🕉️','✨','🌟','💫','🪷','🌸'];
    for (let i = 0; i < 12; i++) {
      const el = document.createElement('span');
      el.textContent = SYMBOLS[i % SYMBOLS.length];
      const angle = (i / 12) * 360;
      const rad = (angle * Math.PI) / 180;
      const dist = 60 + Math.random() * 80;
      el.style.cssText = `position:fixed;left:${cx}px;top:${cy}px;font-size:1.5rem;pointer-events:none;z-index:9999;transition:all 700ms ease;opacity:1;transform:translate(-50%,-50%)`;
      document.body.appendChild(el);
      requestAnimationFrame(() => requestAnimationFrame(() => {
        el.style.transform = `translate(calc(-50% + ${Math.cos(rad)*dist}px), calc(-50% + ${Math.sin(rad)*dist}px)) scale(0)`;
        el.style.opacity = '0';
      }));
      setTimeout(() => el.remove(), 750);
    }
  });
}

// ======================================================
// ====  NAVBAR SCROLL EFFECT  ==========================
// ======================================================
function initNavbarScroll() {
  const nav = document.querySelector('.navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    if (window.scrollY > 60) nav.classList.add('scrolled'); 
    else nav.classList.remove('scrolled');
  }, { passive: true });
}

// ======================================================
// ====  TYPING ANIMATION FOR HERO  ====================
// ======================================================
function initHeroTyping() {
  const el = document.getElementById('heroSubtitle');
  if (!el) return;
  const texts = ['Read Hanuman Chalisa in Hindi...', 'Sing Ganesh Aarti with devotion...', 'Chant Gayatri Mantra daily...', 'Find peace in every prayer...'];
  let ti = 0, ci = 0, deleting = false;
  function type() {
    const current = texts[ti];
    if (!deleting) {
      el.textContent = current.substring(0, ci + 1);
      ci++;
      if (ci === current.length) { deleting = true; setTimeout(type, 1800); return; }
    } else {
      el.textContent = current.substring(0, ci - 1);
      ci--;
      if (ci === 0) { deleting = false; ti = (ti + 1) % texts.length; }
    }
    setTimeout(type, deleting ? 40 : 70);
  }
  setTimeout(type, 500);
}

// ======================================================
// ====  FAVOURITES PAGE  ===============================
// ======================================================
function initFavouritesPage() {
  const container = document.getElementById('favouritesGrid') || document.getElementById('favGrid');
  if (!container) return;
  const favs = getFavourites();
  if (favs.length === 0) {
    container.innerHTML = '<div class="empty-state"><span style="font-size:4rem">🙏</span><h3>No saved prayers yet</h3><p>Click 🤍 on any prayer to save it here</p></div>';
    return;
  }
  const scriptTag = document.querySelector('script[src*="js/main.js"]');
  const basePath = scriptTag ? scriptTag.getAttribute('src').replace('js/main.js', '') : '';
  const matched = favs.map(id => PRAYERS.find(p => p.id === id)).filter(Boolean);
  container.innerHTML = matched.map(p => `
    <div class="prayer-card visible">
      <div class="card-thumb" style="background:linear-gradient(135deg,${p.color}22,${p.color}44)">🪔</div>
      <div class="card-body">
        <span class="card-badge badge-${p.category}">${p.category}</span>
        <h3>${p.title}</h3>
        <p style="font-family:var(--font-hindi);font-size:.9rem;color:var(--text-muted)">${p.titleHi}</p>
        <p>${p.description}</p>
      </div>
      <div class="card-footer"><a href="${basePath}${p.path.replace('../', '')}">Read Now →</a><button class="fav-btn" data-id="${p.id}">❤️</button></div>
    </div>`).join('');
  initFavButtons();
}

// ---- Init All ----
document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initSearch();
  initFavButtons();
  initShare();
  initLangToggle();
  initFeedback();
  initFlowerParticles();
  initScrollAnimations();
  initPrayerCounter();
  initTodaysPrayer();
  initHinduCalendar();
  initOmButton();
  initNavbarScroll();
  initHeroTyping();
  initFavouritesPage();
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', toggleTheme));
});
window.addEventListener('beforeunload', () => { /* no TTS to cancel */ });
