/* =============================================
   BHAKTI SANGRAH — FESTIVAL CALENDAR v1.0
   Dynamic Hindu festival detection & content
   Data covers 2025 – 2027 (Gregorian dates)
   ============================================= */

/**
 * Each festival entry:
 * start/end : "YYYY-MM-DD"
 * name      : English name
 * nameHi    : Hindi name
 * emoji     : emoji symbol
 * deity     : primary deity
 * color     : theme hex color
 * mantra    : festival mantra text (Hindi)
 * mantraTrans: English translation
 * mantraSource: source name
 * prayer    : linked prayer path (relative from root)
 * prayerTitle: link label
 * banner    : short banner message
 * daysAfterShow: show "upcoming" banner N days before
 */
const FESTIVAL_CALENDAR = [
  // ── 2026 ──────────────────────────────────────────
  {
    start: '2026-01-14', end: '2026-01-14',
    name: 'Makar Sankranti', nameHi: 'मकर संक्रांति',
    emoji: '🪁', deity: 'Surya',
    color: '#F5A623',
    mantra: 'ॐ सूर्याय नमः', mantraTrans: 'Salutations to the Sun God — the source of all light and life',
    mantraSource: 'सूर्य मंत्र', prayer: 'prayers/aarti/gayatri-aarti.html', prayerTitle: 'Gayatri Mata Aarti',
    banner: '🪁 Makar Sankranti — मकर संक्रांति मुबारक! Sun enters Capricorn today.',
    daysAfterShow: 3
  },
  {
    start: '2026-02-02', end: '2026-02-02',
    name: 'Basant Panchami', nameHi: 'बसंत पंचमी',
    emoji: '🌼', deity: 'Saraswati',
    color: '#FFD700',
    mantra: 'या देवी सर्वभूतेषु विद्यारूपेण संस्थिता', mantraTrans: 'The Goddess who resides in all beings as knowledge — salutations to her',
    mantraSource: 'देवी महात्म्य', prayer: 'prayers/aarti/saraswati-aarti.html', prayerTitle: 'Saraswati Aarti',
    banner: '🌼 Basant Panchami — बसंत पंचमी! Day of Goddess Saraswati — seek wisdom & knowledge.',
    daysAfterShow: 3
  },
  {
    start: '2026-02-26', end: '2026-02-26',
    name: 'Maha Shivratri', nameHi: 'महाशिवरात्रि',
    emoji: '🔱', deity: 'Shiva',
    color: '#1A6BB5',
    mantra: 'ॐ नमः शिवाय', mantraTrans: 'Great devotional night of Lord Shiva — Om Namah Shivaya',
    mantraSource: 'शिव पंचाक्षर मंत्र', prayer: 'prayers/chalisa/shiv-chalisa.html', prayerTitle: 'Shiv Chalisa',
    banner: '🔱 Maha Shivratri — महाशिवरात्रि! The great night of Lord Shiva.',
    daysAfterShow: 5
  },
  {
    start: '2026-03-14', end: '2026-03-14',
    name: 'Holi', nameHi: 'होली',
    emoji: '🎨', deity: 'Krishna',
    color: '#FF69B4',
    mantra: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे', mantraTrans: 'The festival of colors — Hare Krishna Mahamantra for liberation',
    mantraSource: 'महामंत्र', prayer: 'prayers/aarti/krishna-aarti.html', prayerTitle: 'Kunj Bihari Aarti',
    banner: '🎨 Holi — होली की शुभकामनाएं! The festival of colors and joy.',
    daysAfterShow: 3
  },
  {
    start: '2026-03-19', end: '2026-03-27',
    name: 'Chaitra Navratri', nameHi: 'चैत्र नवरात्रि',
    emoji: '🌺', deity: 'Durga',
    color: '#C62828',
    mantra: 'जय अम्बे गौरी मैया जय मंगल मूर्ति', mantraTrans: 'Victory to Mother Durga — destroyer of evil, embodiment of auspiciousness',
    mantraSource: 'दुर्गा आरती', prayer: 'prayers/aarti/durga-aarti.html', prayerTitle: 'Durga Aarti',
    banner: '🌺 Chaitra Navratri begins! — चैत्र नवरात्रि शुरू! 9 divine nights of Goddess Durga.',
    daysAfterShow: 5
  },
  {
    start: '2026-03-19', end: '2026-03-19',
    name: 'Gudi Padwa', nameHi: 'गुड़ी पड़वा / उगादि',
    emoji: '🪅', deity: 'Brahma',
    color: '#FF8C00',
    mantra: 'ॐ ब्रह्मणे नमः — नव वर्ष की शुभकामनाएं', mantraTrans: 'Salutations to Lord Brahma — Hindu New Year begins today (Vikram Samvat 2083)',
    mantraSource: 'नव वर्ष मंत्र', prayer: 'prayers/pooja/ganesh-puja.html', prayerTitle: 'Ganesh Puja Vidhi',
    banner: '🪅 Gudi Padwa / Ugadi — गुड़ी पड़वा! Hindu New Year — Shubh Nav Varsha Vikram Samvat 2083!',
    daysAfterShow: 3
  },
  {
    start: '2026-03-27', end: '2026-03-27',
    name: 'Ram Navami', nameHi: 'राम नवमी',
    emoji: '🏹', deity: 'Rama',
    color: '#1A237E',
    mantra: 'श्री राम जय राम जय जय राम', mantraTrans: 'Victory to Lord Rama — the ideal king, the protector of dharma',
    mantraSource: 'रामनाम', prayer: 'prayers/mantra/ram-stuti.html', prayerTitle: 'Ram Stuti',
    banner: '🏹 Ram Navami — राम नवमी! Birthday of Lord Shri Ram — Jai Shri Ram!',
    daysAfterShow: 3
  },
  {
    start: '2026-04-04', end: '2026-04-04',
    name: 'Hanuman Jayanti', nameHi: 'हनुमान जयंती',
    emoji: '🙏', deity: 'Hanuman',
    color: '#FF6B00',
    mantra: 'जय हनुमान ज्ञान गुण सागर, जय कपीश तिहुँ लोक उजागर', mantraTrans: 'Glory to Hanuman — ocean of wisdom and virtue, the light of three worlds',
    mantraSource: 'हनुमान चालीसा', prayer: 'prayers/chalisa/hanuman-chalisa.html', prayerTitle: 'Hanuman Chalisa',
    banner: '🙏 Hanuman Jayanti — हनुमान जयंती! Birthday of Bajrangbali — Jai Hanuman!',
    daysAfterShow: 5
  },
  {
    start: '2026-04-21', end: '2026-04-21',
    name: 'Akshaya Tritiya', nameHi: 'अक्षय तृतीया',
    emoji: '🪷', deity: 'Lakshmi',
    color: '#F5A623',
    mantra: 'ॐ श्रीं महालक्ष्म्यै नमः', mantraTrans: 'Salutations to Goddess Mahalakshmi — the auspicious day of eternal prosperity',
    mantraSource: 'लक्ष्मी मंत्र', prayer: 'prayers/aarti/lakshmi-aarti.html', prayerTitle: 'Lakshmi Aarti',
    banner: '🪷 Akshaya Tritiya — अक्षय तृतीया! The auspicious day of eternal prosperity.',
    daysAfterShow: 3
  },
  {
    start: '2026-08-19', end: '2026-08-19',
    name: 'Janmashtami', nameHi: 'जन्माष्टमी',
    emoji: '🦚', deity: 'Krishna',
    color: '#283593',
    mantra: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे, हरे राम हरे राम, राम राम हरे हरे', mantraTrans: 'The Hare Krishna Mahamantra — chanted on the birthday of Lord Krishna',
    mantraSource: 'महामंत्र', prayer: 'prayers/aarti/krishna-aarti.html', prayerTitle: 'Kunj Bihari Aarti',
    banner: '🦚 Janmashtami — जन्माष्टमी! Birthday of Lord Krishna. Nand Ghar Anand Bhayo!',
    daysAfterShow: 5
  },
  {
    start: '2026-08-22', end: '2026-08-22',
    name: 'Ganesh Chaturthi', nameHi: 'गणेश चतुर्थी',
    emoji: '🐘', deity: 'Ganesha',
    color: '#FF8C38',
    mantra: 'जय गणेश जय गणेश जय गणेश देवा, माता जाकी पार्वती पिता महादेवा', mantraTrans: 'Victory to Lord Ganesha — the remover of all obstacles, son of Parvati and Shiva',
    mantraSource: 'गणेश आरती', prayer: 'prayers/aarti/ganesh-aarti.html', prayerTitle: 'Ganesh Aarti',
    banner: '🐘 Ganesh Chaturthi — गणेश चतुर्थी! Ganapati Bappa Morya!',
    daysAfterShow: 7
  },
  {
    start: '2026-10-09', end: '2026-10-17',
    name: 'Shardiya Navratri', nameHi: 'शारदीय नवरात्रि',
    emoji: '🌺', deity: 'Durga',
    color: '#B71C1C',
    mantra: 'सर्वमंगल मांगल्ये शिवे सर्वार्थ साधिके, शरण्ये त्र्यंबके गौरि नारायणि नमोस्तुते', mantraTrans: 'To the auspicious one, Shiva, the fulfiller of all goals — we bow to Goddess Narayani',
    mantraSource: 'देवी श्लोक', prayer: 'prayers/aarti/durga-aarti.html', prayerTitle: 'Durga Aarti',
    banner: '🌺 Navratri — नवरात्रि! 9 divine nights of Goddess Durga. Jai Maa!',
    daysAfterShow: 7
  },
  {
    start: '2026-10-17', end: '2026-10-17',
    name: 'Dussehra', nameHi: 'दशहरा',
    emoji: '🏹', deity: 'Rama',
    color: '#E65100',
    mantra: 'श्री राम जय राम जय जय राम', mantraTrans: 'Victory to Lord Rama who defeated Ravana — triumph of truth over evil',
    mantraSource: 'रामनाम', prayer: 'prayers/mantra/ram-stuti.html', prayerTitle: 'Ram Stuti',
    banner: '🏹 Dussehra — विजयदशमी! Triumph of truth over evil. Jai Shri Ram!',
    daysAfterShow: 3
  },
  {
    start: '2026-11-01', end: '2026-11-01',
    name: 'Dhanteras', nameHi: 'धनतेरस',
    emoji: '🪙', deity: 'Lakshmi',
    color: '#C8860A',
    mantra: 'ॐ श्रीं ह्रीं क्लीं महालक्ष्म्यै नमः', mantraTrans: 'Salutations to Goddess Mahalakshmi on the day of wealth and prosperity',
    mantraSource: 'लक्ष्मी मंत्र', prayer: 'prayers/aarti/lakshmi-aarti.html', prayerTitle: 'Lakshmi Aarti',
    banner: '🪙 Dhanteras — धनतेरस! Day of wealth. May Goddess Lakshmi bless your home.',
    daysAfterShow: 3
  },
  {
    start: '2026-11-03', end: '2026-11-03',
    name: 'Diwali', nameHi: 'दीपावली',
    emoji: '🪔', deity: 'Lakshmi',
    color: '#FF8C00',
    mantra: 'ॐ जय लक्ष्मी माता मैया जय लक्ष्मी माता', mantraTrans: 'Victory to Goddess Lakshmi on Diwali — the festival of lights',
    mantraSource: 'लक्ष्मी आरती', prayer: 'prayers/aarti/lakshmi-aarti.html', prayerTitle: 'Lakshmi Aarti',
    banner: '🪔 Diwali — दीपावली मुबारक! Festival of Lights. Har ghar diya jale!',
    daysAfterShow: 7
  },
  {
    start: '2026-11-11', end: '2026-11-11',
    name: 'Dev Diwali', nameHi: 'देव दीपावली',
    emoji: '🕯️', deity: 'Shiva',
    color: '#5C6BC0',
    mantra: 'ॐ नमः शिवाय — गंगा स्नान की जय', mantraTrans: 'Dev Diwali at Haridwar — when the gods celebrate Diwali with lamps on Ganga',
    mantraSource: 'शिव मंत्र', prayer: 'prayers/aarti/ganga-aarti.html', prayerTitle: 'Ganga Aarti',
    banner: '🕯️ Dev Diwali — देव दीपावली! The night when Gods light lamps on Ganga.',
    daysAfterShow: 2
  },

  // ── 2025 (past year, kept for completeness) ──────
  {
    start: '2025-03-30', end: '2025-03-30',
    name: 'Holi', nameHi: 'होली',
    emoji: '🎨', deity: 'Krishna', color: '#FF69B4',
    mantra: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे', mantraTrans: 'Hare Krishna Mahamantra — the festival of colors', mantraSource: 'महामंत्र',
    prayer: 'prayers/aarti/krishna-aarti.html', prayerTitle: 'Kunj Bihari Aarti',
    banner: '🎨 Holi — होली की शुभकामनाएं!', daysAfterShow: 2
  },

  // ── 2027 ──────────────────────────────────────────
  {
    start: '2027-03-19', end: '2027-03-27',
    name: 'Chaitra Navratri', nameHi: 'चैत्र नवरात्रि',
    emoji: '🌺', deity: 'Durga', color: '#C62828',
    mantra: 'जय अम्बे गौरी मैया जय मंगल मूर्ति', mantraTrans: 'Victory to Mother Durga — destroyer of evil', mantraSource: 'दुर्गा आरती',
    prayer: 'prayers/aarti/durga-aarti.html', prayerTitle: 'Durga Aarti',
    banner: '🌺 Chaitra Navratri begins! — चैत्र नवरात्रि शुरू! 9 divine nights of Goddess Durga.', daysAfterShow: 5
  },
  {
    start: '2027-08-10', end: '2027-08-10',
    name: 'Janmashtami', nameHi: 'जन्माष्टमी',
    emoji: '🦚', deity: 'Krishna', color: '#283593',
    mantra: 'हरे कृष्ण हरे कृष्ण, कृष्ण कृष्ण हरे हरे', mantraTrans: 'Hare Krishna Mahamantra — chanted on the birthday of Lord Krishna', mantraSource: 'महामंत्र',
    prayer: 'prayers/aarti/krishna-aarti.html', prayerTitle: 'Kunj Bihari Aarti',
    banner: '🦚 Janmashtami — जन्माष्टमी! Nand Ghar Anand Bhayo!', daysAfterShow: 5
  },
];

// ── Day-of-week fallback mantras (when no festival is active) ────────────────
const WEEKDAY_MANTRAS = [
  // Sunday  0
  { text: 'ॐ सूर्याय नमः', trans: 'Salutations to Surya Deva — the life-giving Sun God (Sunday)', source: 'सूर्य मंत्र', deity: 'Surya', color: '#FF8C00' },
  // Monday  1
  { text: 'ॐ नमः शिवाय', trans: 'Salutations to Lord Shiva — the auspicious one (Monday)', source: 'शिव पंचाक्षर मंत्र', deity: 'Shiva', color: '#1A6BB5' },
  // Tuesday 2
  { text: 'जय हनुमान ज्ञान गुण सागर, जय कपीश तिहुँ लोक उजागर', trans: 'Glory to Lord Hanuman — ocean of wisdom, light of three worlds (Tuesday)', source: 'हनुमान चालीसा', deity: 'Hanuman', color: '#FF6B00' },
  // Wednesday 3
  { text: 'जय गणेश जय गणेश जय गणेश देवा', trans: 'Victory to Lord Ganesha — the remover of all obstacles (Wednesday)', source: 'गणेश आरती', deity: 'Ganesha', color: '#FF8C38' },
  // Thursday 4
  { text: 'ॐ जय जगदीश हरे, स्वामी जय जगदीश हरे', trans: 'Victory to Lord Vishnu / Sai Baba — universally sung Thursday aarti', source: 'जगदीश आरती', deity: 'Vishnu', color: '#6A1B9A' },
  // Friday   5
  { text: 'ॐ जय लक्ष्मी माता मैया जय लक्ष्मी माता', trans: 'Victory to Goddess Lakshmi — the goddess of wealth and prosperity (Friday)', source: 'लक्ष्मी आरती', deity: 'Lakshmi', color: '#F5A623' },
  // Saturday 6
  { text: 'जय जय श्री शनि देव', trans: 'Victory to Lord Shani — the teacher of karma. Saturday is his day', source: 'शनि आरती', deity: 'Shani', color: '#37474F' },
];

// ── Core API functions ────────────────────────────────────────────────────────

/**
 * Returns today's date as "YYYY-MM-DD" string.
 */
function getTodayDateStr() {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

/**
 * Returns the active festival for today, or null.
 */
function getActiveFestival() {
  const today = getTodayDateStr();
  return FESTIVAL_CALENDAR.find(f => today >= f.start && today <= f.end) || null;
}

/**
 * Returns the next upcoming festival within 30 days that hasn't started yet.
 */
function getUpcomingFestival() {
  const today = getTodayDateStr();
  const todayDate = new Date(today);
  const future = FESTIVAL_CALENDAR
    .filter(f => f.start > today)
    .map(f => ({ ...f, daysUntil: Math.round((new Date(f.start) - todayDate) / 86400000) }))
    .filter(f => f.daysUntil <= 30)
    .sort((a, b) => a.daysUntil - b.daysUntil);
  return future[0] || null;
}

/**
 * Returns upcoming festival text for calendar widget.
 * Shows active festival first, then upcoming within 30 days.
 */
function getCalendarFestival() {
  const active = getActiveFestival();
  if (active) return { emoji: active.emoji, name: active.name, nameHi: active.nameHi, isActive: true };
  const upcoming = getUpcomingFestival();
  if (upcoming) return { emoji: upcoming.emoji, name: upcoming.name, nameHi: upcoming.nameHi, isActive: false, daysUntil: upcoming.daysUntil };
  return { emoji: '🙏', name: 'पूजा पर्व', nameHi: 'पूजा पर्व', isActive: false };
}

/**
 * Returns today's mantra — festival-specific if a festival is active,
 * otherwise falls back to day-of-week mantra.
 */
function getAajKaMantra() {
  const active = getActiveFestival();
  if (active) {
    return {
      text: active.mantra,
      trans: active.mantraTrans,
      source: active.mantraSource,
      color: active.color,
      festival: active.name,
      festivalHi: active.nameHi,
      emoji: active.emoji,
      prayer: active.prayer,
      prayerTitle: active.prayerTitle,
      isFestival: true,
    };
  }
  const day = WEEKDAY_MANTRAS[new Date().getDay()];
  return { ...day, isFestival: false };
}

/**
 * Returns { festival, daysUntil } if a festival is upcoming within `days` days.
 * Used to show the animated top banner.
 */
function getFestivalBannerData() {
  const today = getTodayDateStr();
  const todayDate = new Date(today);
  for (const f of FESTIVAL_CALENDAR) {
    if (today >= f.start && today <= f.end) {
      return { festival: f, daysUntil: 0, isActive: true };
    }
    const daysUntil = Math.round((new Date(f.start) - todayDate) / 86400000);
    if (daysUntil > 0 && daysUntil <= (f.daysAfterShow || 3)) {
      return { festival: f, daysUntil, isActive: false };
    }
  }
  return null;
}

/**
 * Returns IDs of prayers relevant to today's festival for "Trending" section.
 */
function getTrendingPrayerIds() {
  const active = getActiveFestival() || getUpcomingFestival();
  if (!active) return [];
  const deityMap = {
    'Durga':   ['durga-aarti', 'durga-chalisa', 'kali-maa-aarti', 'navratri-pooja'],
    'Hanuman': ['hanuman-chalisa', 'hanuman-aarti', 'balaji-aarti'],
    'Ganesha': ['ganesh-aarti', 'ganpati-aarti', 'ganesh-puja'],
    'Lakshmi': ['lakshmi-aarti', 'lakshmi-puja'],
    'Shiva':   ['shiv-aarti', 'shiv-chalisa', 'shiv-puja', 'mahamrityunjaya-mantra'],
    'Krishna': ['krishna-aarti', 'balkrishna-aarti'],
    'Rama':    ['ram-stuti', 'hanuman-chalisa'],
    'Surya':   ['gayatri-mantra', 'gayatri-aarti'],
    'Saraswati': ['saraswati-aarti'],
  };
  return deityMap[active.deity] || [];
}
