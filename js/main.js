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
,
  { id: 'bajrang-baan', title: 'Bajrang Baan', titleHi: 'बजरंग बाण', category: 'chalisa', color: '#FF6B00', path: '../prayers/chalisa/bajrang-baan.html', description: 'Most powerful prayer to Lord Hanuman for protection from evil', youtube: 'https://www.youtube.com/results?search_query=Bajrang+Baan' },
  { id: 'shani-chalisa', title: 'Shani Chalisa', titleHi: 'शनि चालीसा', category: 'chalisa', color: '#263238', path: '../prayers/chalisa/shani-chalisa.html', description: '40 devotional verses to Lord Shani Dev for relief from Saturn\'s effects', youtube: 'https://www.youtube.com/results?search_query=Shani+Chalisa' },
  { id: 'ganesh-chalisa', title: 'Ganesh Chalisa', titleHi: 'गणेश चालीसा', category: 'chalisa', color: '#FF8C38', path: '../prayers/chalisa/ganesh-chalisa.html', description: '40 verses to Lord Ganesha — remover of all obstacles', youtube: 'https://www.youtube.com/results?search_query=Ganesh+Chalisa' },
  { id: 'shiv-tandav-stotram', title: 'Shiv Tandav Stotram', titleHi: 'शिव तांडव स्तोत्रम्', category: 'stotra', color: '#1A6BB5', path: '../prayers/stotra/shiv-tandav-stotram.html', description: 'Ravana\'s magnificent hymn describing Lord Shiva\'s cosmic dance', youtube: 'https://www.youtube.com/results?search_query=Shiv+Tandav+Stotram' },
  { id: 'ram-aarti', title: 'Ram Aarti', titleHi: 'राम जी की आरती', category: 'aarti', color: '#1A237E', path: '../prayers/aarti/ram-aarti.html', description: 'Jai Ram Ji Ki — devotional aarti to Lord Shri Ram', youtube: 'https://www.youtube.com/results?search_query=Ram+Aarti' },
  { id: 'vaishno-devi-aarti', title: 'Vaishno Devi Aarti', titleHi: 'वैष्णो देवी आरती', category: 'aarti', color: '#C62828', path: '../prayers/aarti/vaishno-devi-aarti.html', description: 'Aarti to Maa Vaishno Devi — the supreme goddess of Trikuta mountains', youtube: 'https://www.youtube.com/results?search_query=Vaishno+Devi+Aarti' },
  { id: 'raghupati-raghav', title: 'Raghupati Raghav Raja Ram', titleHi: 'रघुपति राघव राजा राम', category: 'bhajan', color: '#1A237E', path: '../prayers/bhajan/raghupati-raghav.html', description: 'Mahatma Gandhi\'s favourite bhajan — Ishwar Allah tero naam', youtube: 'https://www.youtube.com/results?search_query=Raghupati+Raghav+Raja+Ram' },
  { id: 'om-namah-shivaya', title: 'Om Namah Shivaya', titleHi: 'ॐ नमः शिवाय', category: 'mantra', color: '#1A6BB5', path: '../prayers/mantra/om-namah-shivaya.html', description: 'The eternal Panchakshara mantra of Lord Shiva', youtube: 'https://www.youtube.com/results?search_query=Om+Namah+Shivaya' },
  { id: 'durga-stuti', title: 'Durga Stuti', titleHi: 'दुर्गा स्तुति', category: 'stuti', color: '#C62828', path: '../prayers/stuti/durga-stuti.html', description: 'Ya Devi Sarva Bhuteshu — powerful stuti from Durga Saptashati', youtube: 'https://www.youtube.com/results?search_query=Durga+Stuti' },
  { id: 'lakshmi-chalisa', title: 'Lakshmi Chalisa', titleHi: 'लक्ष्मी चालीसा', category: 'chalisa', color: '#F5A623', path: '../prayers/chalisa/lakshmi-chalisa.html', description: '40 devotional verses to Goddess Lakshmi for wealth and prosperity', youtube: 'https://www.youtube.com/results?search_query=Lakshmi+Chalisa' },
  { id: 'ram-chalisa', title: 'Ram Chalisa', titleHi: 'राम चालीसा', category: 'chalisa', color: '#1A237E', path: '../prayers/chalisa/ram-chalisa.html', description: '40 devotional verses to Lord Shri Ram', youtube: 'https://www.youtube.com/results?search_query=Ram+Chalisa' },
  { id: 'krishna-chalisa', title: 'Krishna Chalisa', titleHi: 'कृष्ण चालीसा', category: 'chalisa', color: '#1565C0', path: '../prayers/chalisa/krishna-chalisa.html', description: '40 verses glorifying Lord Shri Krishna', youtube: 'https://www.youtube.com/results?search_query=Krishna+Chalisa' },
  { id: 'saraswati-chalisa', title: 'Saraswati Chalisa', titleHi: 'सरस्वती चालीसा', category: 'chalisa', color: '#4A90D9', path: '../prayers/chalisa/saraswati-chalisa.html', description: '40 verses to Goddess Saraswati for knowledge and wisdom', youtube: 'https://www.youtube.com/results?search_query=Saraswati+Chalisa' },
  { id: 'ganesh-mantra', title: 'Ganesh Mantra', titleHi: 'गणेश मंत्र', category: 'mantra', color: '#FF8C38', path: '../prayers/mantra/ganesh-mantra.html', description: 'Om Gan Ganapataye Namah — Vakratunda Mahakaya mantra', youtube: 'https://www.youtube.com/results?search_query=Ganesh+Mantra' },
  { id: 'hanuman-mantra', title: 'Hanuman Mantra', titleHi: 'हनुमान मंत्र', category: 'mantra', color: '#FF6B00', path: '../prayers/mantra/hanuman-mantra.html', description: 'Powerful mantras to Hanuman for strength and protection', youtube: 'https://www.youtube.com/results?search_query=Hanuman+Mantra' },
  { id: 'aditya-hridayam', title: 'Aditya Hridayam', titleHi: 'आदित्य हृदयम्', category: 'stotra', color: '#F57F17', path: '../prayers/stotra/aditya-hridayam.html', description: 'Surya prayer from Valmiki Ramayana given to Shri Ram', youtube: 'https://www.youtube.com/results?search_query=Aditya+Hridayam' },
  { id: 'hare-krishna-mahamantra', title: 'Hare Krishna Mahamantra', titleHi: 'हरे कृष्ण महामंत्र', category: 'bhajan', color: '#1565C0', path: '../prayers/bhajan/hare-krishna-mahamantra.html', description: 'The greatest mantra for Kali Yuga — Hare Ram Hare Krishna', youtube: 'https://www.youtube.com/results?search_query=Hare+Krishna+Mahamantra' },
  { id: 'achutam-keshavam', title: 'Achutam Keshavam', titleHi: 'अच्युतम् केशवम्', category: 'bhajan', color: '#6A1B9A', path: '../prayers/bhajan/achutam-keshavam.html', description: 'Beautiful Vishnu-Krishna bhajan with Shantakaram shloka', youtube: 'https://www.youtube.com/results?search_query=Achutam+Keshavam' },
  { id: 'vishnu-aarti', title: 'Vishnu Aarti', titleHi: 'विष्णु जी की आरती', category: 'aarti', color: '#6A1B9A', path: '../prayers/aarti/vishnu-aarti.html', description: 'Om Jai Jagdish Hare — India\'s most popular household aarti', youtube: 'https://www.youtube.com/results?search_query=Vishnu+Aarti' },
  { id: 'durga-mantra', title: 'Durga Mantra', titleHi: 'दुर्गा मंत्र', category: 'mantra', color: '#C62828', path: '../prayers/mantra/durga-mantra.html', description: 'Om Dum Durgayei Namah — Navarna Mantra for Navratri', youtube: 'https://www.youtube.com/results?search_query=Durga+Mantra' },
  { id: 'lakshmi-mantra', title: 'Lakshmi Mantra', titleHi: 'लक्ष्मी मंत्र', category: 'mantra', color: '#F5A623', path: '../prayers/mantra/lakshmi-mantra.html', description: 'Om Shreem Mahalakshmiyei Namah — wealth and prosperity mantra', youtube: 'https://www.youtube.com/results?search_query=Lakshmi+Mantra' },
  { id: 'navaratri-9-days', title: 'Navratri 9 Days Guide', titleHi: 'नवरात्रि 9 दिन विधि', category: 'pooja', color: '#C62828', path: '../prayers/pooja/navaratri-9-days.html', description: 'Complete day-by-day Navratri pooja guide with colors and mantras', youtube: 'https://www.youtube.com/results?search_query=Navratri+9+Days+Guide' },
  { id: 'diwali-lakshmi-pooja', title: 'Diwali Lakshmi Puja', titleHi: 'दीवाली लक्ष्मी पूजा', category: 'pooja', color: '#F57F17', path: '../prayers/pooja/diwali-lakshmi-pooja.html', description: 'Complete step-by-step Diwali Lakshmi puja vidhi', youtube: 'https://www.youtube.com/results?search_query=Diwali+Lakshmi+Puja' },
  { id: 'rudrashtakam', title: 'Rudrashtakam', titleHi: 'रुद्राष्टकम्', category: 'stotra', color: '#1A6BB5', path: '../prayers/stotra/rudrashtakam.html', description: '8 powerful verses by Tulsidas praising Lord Shiva (Rudra)', youtube: 'https://www.youtube.com/results?search_query=Rudrashtakam' },
  { id: 'ambe-maa-aarti', title: 'Ambe Maa Aarti', titleHi: 'अम्बे माँ आरती', category: 'aarti', color: '#C62828', path: '../prayers/aarti/ambe-maa-aarti.html', description: 'Jai Jai Ambe Jai Jagdambe — Navratri favourite aarti', youtube: 'https://www.youtube.com/results?search_query=Ambe+Maa+Aarti' }
,
  { id: 'kuber-mantra', title: 'Kuber Mantra', titleHi: 'कुबेर मंत्र', category: 'mantra', color: '#F5A623', path: '../prayers/mantra/kuber-mantra.html', description: 'Om Yakshaya Kuberaya — powerful wealth mantra to Lord Kuber', youtube: 'https://www.youtube.com/results?search_query=Kuber+Mantra' },
  { id: 'shanti-mantra', title: 'Shanti Mantra', titleHi: 'शांति मंत्र', category: 'mantra', color: '#2E7D32', path: '../prayers/mantra/shanti-mantra.html', description: 'Om Shanti — Asatoma Sadgamaya — Sarve Bhavantu Sukhinah', youtube: 'https://www.youtube.com/results?search_query=Shanti+Mantra' },
  { id: 'ram-mantra', title: 'Ram Mantra', titleHi: 'राम मंत्र', category: 'mantra', color: '#1A237E', path: '../prayers/mantra/ram-mantra.html', description: 'Sri Ram Jai Ram Jai Jai Ram — the supreme liberating mantra', youtube: 'https://www.youtube.com/results?search_query=Ram+Mantra' },
  { id: 'kali-chalisa', title: 'Kali Chalisa', titleHi: 'काली चालीसा', category: 'chalisa', color: '#880E4F', path: '../prayers/chalisa/kali-chalisa.html', description: '40 devotional verses to fierce Goddess Maa Kali', youtube: 'https://www.youtube.com/results?search_query=Kali+Chalisa' },
  { id: 'sai-chalisa', title: 'Sai Chalisa', titleHi: 'साई चालीसा', category: 'chalisa', color: '#E65100', path: '../prayers/chalisa/sai-chalisa.html', description: 'Sabka Malik Ek — 40 verses to Shirdi Sai Baba', youtube: 'https://www.youtube.com/results?search_query=Sai+Chalisa' },
  { id: 'karva-chauth-pooja', title: 'Karva Chauth Pooja', titleHi: 'करवा चौथ पूजा', category: 'pooja', color: '#C62828', path: '../prayers/pooja/karva-chauth-pooja.html', description: 'Complete Karva Chauth fast and moon-sighting ritual guide', youtube: 'https://www.youtube.com/results?search_query=Karva+Chauth+Pooja' },
  { id: 'sunderkand', title: 'Sunderkand Path', titleHi: 'सुंदरकांड पाठ', category: 'stotra', color: '#FF6B00', path: '../prayers/stotra/sunderkand.html', description: 'Key verses from Hanuman\'s journey to Lanka from Valmiki Ramayana', youtube: 'https://www.youtube.com/results?search_query=Sunderkand+Path' },
  { id: 'ramchandra-kripalu', title: 'Ramchandra Kripalu', titleHi: 'रामचंद्र कृपालु', category: 'stuti', color: '#1A237E', path: '../prayers/stuti/ramchandra-kripalu.html', description: 'Tulsidas\'s magnificent Ram Stuti describing Lord Ram\'s divine form', youtube: 'https://www.youtube.com/results?search_query=Ramchandra+Kripalu' }
,
  { id: 'surya-chalisa', title: 'Surya Chalisa', titleHi: 'सूर्य चालीसा', category: 'chalisa', color: '#F57F17', path: '../prayers/chalisa/surya-chalisa.html', description: '40 verses to Lord Surya Dev — the Sun God', youtube: 'https://www.youtube.com/results?search_query=Surya+Chalisa' },
  { id: 'santoshi-maa-chalisa', title: 'Santoshi Maa Chalisa', titleHi: 'संतोषी माँ चालीसा', category: 'chalisa', color: '#FFD700', path: '../prayers/chalisa/santoshi-maa-chalisa.html', description: 'Friday vrat chalisa to Goddess Santoshi Maa', youtube: 'https://www.youtube.com/results?search_query=Santoshi+Maa+Chalisa' },
  { id: 'bhairav-chalisa', title: 'Bhairav Chalisa', titleHi: 'भैरव चालीसा', category: 'chalisa', color: '#B71C1C', path: '../prayers/chalisa/bhairav-chalisa.html', description: '40 verses to Lord Kal Bhairav — fierce protector', youtube: 'https://www.youtube.com/results?search_query=Bhairav+Chalisa' },
  { id: 'navagraha-mantra', title: 'Navagraha Mantra', titleHi: 'नवग्रह मंत्र', category: 'mantra', color: '#37474F', path: '../prayers/mantra/navagraha-mantra.html', description: 'All 9 planet mantras — Surya to Ketu', youtube: 'https://www.youtube.com/results?search_query=Navagraha+Mantra' },
  { id: 'vishnu-mantra', title: 'Vishnu Mantra', titleHi: 'विष्णु मंत्र', category: 'mantra', color: '#6A1B9A', path: '../prayers/mantra/vishnu-mantra.html', description: 'Om Namo Narayanaya — Shantakaram Bhujagashayanam', youtube: 'https://www.youtube.com/results?search_query=Vishnu+Mantra' },
  { id: 'surya-dev-aarti', title: 'Surya Dev Aarti', titleHi: 'सूर्य देव आरती', category: 'aarti', color: '#F57F17', path: '../prayers/aarti/surya-dev-aarti.html', description: 'Om Jai Surya Bhagwan — aarti to the Sun God', youtube: 'https://www.youtube.com/results?search_query=Surya+Dev+Aarti' },
  { id: 'radha-aarti', title: 'Radha Rani Aarti', titleHi: 'राधा रानी आरती', category: 'aarti', color: '#E91E8C', path: '../prayers/aarti/radha-aarti.html', description: 'Aarti Radha Rani Ki — Barsana aarti to Shri Radha', youtube: 'https://www.youtube.com/results?search_query=Radha+Rani+Aarti' },
  { id: 'havan-vidhi', title: 'Havan Pooja Vidhi', titleHi: 'हवन पूजा विधि', category: 'pooja', color: '#E65100', path: '../prayers/pooja/havan-vidhi.html', description: 'Complete step-by-step Havan procedure with mantras', youtube: 'https://www.youtube.com/results?search_query=Havan+Pooja+Vidhi' },
  { id: 'hanuman-ashtak', title: 'Hanuman Ashtak', titleHi: 'हनुमान अष्टक', category: 'stotra', color: '#FF6B00', path: '../prayers/stotra/hanuman-ashtak.html', description: '8 powerful verses to Lord Hanuman by Tulsidas', youtube: 'https://www.youtube.com/results?search_query=Hanuman+Ashtak' }
,
  { id: 'itni-shakti-hame-dena', title: 'Itni Shakti Hame Dena Data', titleHi: 'इतनी शक्ति हमें देना दाता', category: 'bhajan', color: '#1A6BB5', path: '../prayers/bhajan/itni-shakti-hame-dena.html', description: '\'Itni Shakti Hame Dena Data\' (इतनी शक्ति हमें देना दाता) is one of the most beloved and universal morning prayers in India', youtube: 'https://www.youtube.com/results?search_query=Itni+Shakti+Hame+Dena+Data' },
  { id: 'aye-malik-tere-bande', title: 'Aye Malik Tere Bande Hum', titleHi: 'ऐ मालिक तेरे बंदे हम', category: 'bhajan', color: '#2E7D32', path: '../prayers/bhajan/aye-malik-tere-bande.html', description: '\'Aye Malik Tere Bande Hum\' (ऐ मालिक तेरे बंदे हम) is a deeply moving prayer song from the classic 1957 film Do Aankhen Barah Haath', youtube: 'https://www.youtube.com/results?search_query=Aye+Malik+Tere+Bande+Hum' },
  { id: 'tumhi-ho-mata-pita', title: 'Tumhi Ho Mata Pita Tumhi Ho', titleHi: 'तुम्हीं हो माता पिता तुम्हीं हो', category: 'bhajan', color: '#1565C0', path: '../prayers/bhajan/tumhi-ho-mata-pita.html', description: '\'Tumhi Ho Mata Pita Tumhi Ho\' (तुम्हीं हो माता पिता तुम्हीं हो) is the Hindi poetic adaptation of the famous Sanskrit shloka \'Twameva Mata Cha Pita Twameva\'', youtube: 'https://www.youtube.com/results?search_query=Tumhi+Ho+Mata+Pita+Tumhi+Ho' },
  { id: 'yashomati-maiya-se', title: 'Yashomati Maiya Se Bole Nandlala', titleHi: 'यशोमती मैया से बोले नंदलाला', category: 'bhajan', color: '#283593', path: '../prayers/bhajan/yashomati-maiya-se.html', description: '\'Yashomati Maiya Se Bole Nandlala\' (यशोमती मैया से बोले नंदलाला) is a profoundly sweet devotional song portraying the innocent childhood (Bal Leela) of Lord Krishna', youtube: 'https://www.youtube.com/results?search_query=Yashomati+Maiya+Se+Bole+Nandlala' },
  { id: 'payo-ji-maine', title: 'Payo Ji Maine Ram Ratan Dhan Payo', titleHi: 'पायो जी मैंने राम रतन धन पायो', category: 'bhajan', color: '#D84315', path: '../prayers/bhajan/payo-ji-maine.html', description: '\'Payo Ji Maine Ram Ratan Dhan Payo\' (पायो जी मैंने राम रतन धन पायो) is an iconic bhajan composed by the 16th-century mystic poet and Krishna devotee, Sant Meera Bai', youtube: 'https://www.youtube.com/results?search_query=Payo+Ji+Maine+Ram+Ratan+Dhan+Payo' },
  { id: 'kabhi-ram-banke', title: 'Kabhi Ram Banke Kabhi Shyam Banke', titleHi: 'कभी राम बनके कभी श्याम बनके', category: 'bhajan', color: '#6A1B9A', path: '../prayers/bhajan/kabhi-ram-banke.html', description: '\'Kabhi Ram Banke Kabhi Shyam Banke\' (कभी राम बनके कभी श्याम बनके) is a joyous and deeply devotional bhajan that celebrates the various incarnations (Avatars) of Lord Vishnu', youtube: 'https://www.youtube.com/results?search_query=Kabhi+Ram+Banke+Kabhi+Shyam+Banke' },
  { id: 'badi-der-bhai-nandlala', title: 'Badi Der Bhai Nandlala', titleHi: 'बड़ी देर भई नंदलाला', category: 'bhajan', color: '#1565C0', path: '../prayers/bhajan/badi-der-bhai-nandlala.html', description: '\'Badi Der Bhai Nandlala\' (बड़ी देर भई नंदलाला) is an emotionally charged and iconic bhajan sung by legendary playback singer Mohammed Rafi for the 1965 film Khandan', youtube: 'https://www.youtube.com/results?search_query=Badi+Der+Bhai+Nandlala' },
  { id: 'humko-man-ki-shakti-dena', title: 'Humko Man Ki Shakti Dena', titleHi: 'हमको मन की शक्ति देना', category: 'bhajan', color: '#1565C0', path: '../prayers/bhajan/humko-man-ki-shakti-dena.html', description: '\'Humko Man Ki Shakti Dena\' (हमको मन की शक्ति देना) is another iconic Hindi cinematic prayer that became a staple in school assemblies across India', youtube: 'https://www.youtube.com/results?search_query=Humko+Man+Ki+Shakti+Dena' },
  { id: 'o-paalanhaare', title: 'O Paalanhaare', titleHi: 'ओ पालनहारे, निर्गुण और न्यारे', category: 'bhajan', color: '#6A1B9A', path: '../prayers/bhajan/o-paalanhaare.html', description: '\'O Paalanhaare\' (ओ पालनहारे, निर्गुण और न्यारे) is a deeply emotional and monumental bhajan from the Oscar-nominated 2001 film Lagaan', youtube: 'https://www.youtube.com/results?search_query=O+Paalanhaare' },
  { id: 'vaishnav-jan-to', title: 'Vaishnav Jan To Tene Kahiye', titleHi: 'वैष्णव जन तो तेने कहिये', category: 'bhajan', color: '#1A237E', path: '../prayers/bhajan/vaishnav-jan-to.html', description: '\'Vaishnav Jan To Tene Kahiye je peed parayi jaane re\' is a highly revered 15th-century Gujarati bhajan composed by the saint-poet Narsinh Mehta', youtube: 'https://www.youtube.com/results?search_query=Vaishnav+Jan+To+Tene+Kahiye' }
,
  { id: 'shiv-stuti-karpur-gauram', title: 'Shiv Stuti (Karpur Gauram)', titleHi: 'शिव स्तुति (कर्पूरगौरं)', category: 'stuti', color: '#1A6BB5', path: '../prayers/stuti/shiv-stuti-karpur-gauram.html', description: 'The \'Karpur Gauram Karunavtaram\' (कर्पूरगौरं करुणावतारम्) is an ancient and profound Sanskrit shloka dedicated to Lord Shiva', youtube: 'https://www.youtube.com/results?search_query=Shiv+Stuti+' },
  { id: 'saraswati-vandana', title: 'Saraswati Vandana', titleHi: 'सरस्वती वंदना (या कुन्देन्दु)', category: 'stuti', color: '#0288D1', path: '../prayers/stuti/saraswati-vandana.html', description: 'Saraswati Vandana (सरस्वती वंदना) — beginning with the famous verses \'Ya Kundendu Tusharahara Dhavala\' — is the primary prayer to Goddess Saraswati, the deity of knowledge, music, arts, wisdom, and learning', youtube: 'https://www.youtube.com/results?search_query=Saraswati+Vandana' },
  { id: 'mahalakshmi-ashtakam', title: 'Mahalakshmi Ashtakam', titleHi: 'महालक्ष्मी अष्टकम्', category: 'stuti', color: '#F5A623', path: '../prayers/stuti/mahalakshmi-ashtakam.html', description: 'Shri Mahalakshmi Ashtakam (महालक्ष्मी अष्टकम्) is a powerful eight-verse hymn dedicated to Goddess Mahalakshmi, the granter of wealth, fortune, and prosperity', youtube: 'https://www.youtube.com/results?search_query=Mahalakshmi+Ashtakam' },
  { id: 'krishnashtakam', title: 'Krishnashtakam', titleHi: 'कृष्णाष्टकम्', category: 'stuti', color: '#1565C0', path: '../prayers/stuti/krishnashtakam.html', description: 'Shri Krishnashtakam (कृष्णाष्टकम्) is a magnificent eight-verse Sanskrit hymn composed by the great philosopher-saint Adi Shankaracharya', youtube: 'https://www.youtube.com/results?search_query=Krishnashtakam' },
  { id: 'lingashtakam', title: 'Lingashtakam', titleHi: 'लिंगाष्टकम्', category: 'stuti', color: '#37474F', path: '../prayers/stuti/lingashtakam.html', description: 'Lingashtakam (लिंगाष्टकम्) is a revered eight-verse Sanskrit hymn that glorifies the Shiva Linga — the universal, formless symbol of Lord Shiva', youtube: 'https://www.youtube.com/results?search_query=Lingashtakam' },
  { id: 'bhavani-ashtakam', title: 'Bhavani Ashtakam', titleHi: 'भवानी अष्टकम्', category: 'stuti', color: '#D32F2F', path: '../prayers/stuti/bhavani-ashtakam.html', description: 'Bhavani Ashtakam (भवानी अष्टकम्) is a profoundly moving eight-verse hymn composed by Adi Shankaracharya', youtube: 'https://www.youtube.com/results?search_query=Bhavani+Ashtakam' }
,
  { id: 'ram-raksha-stotram', title: 'Ram Raksha Stotram', titleHi: 'श्री राम रक्षा स्तोत्र', category: 'stotra', color: '#1A237E', path: '../prayers/stotra/ram-raksha-stotram.html', description: 'The Shri Ram Raksha Stotram (श्री राम रक्षा स्तोत्र) is an exceptionally powerful Sanskrit hymn dedicated to Lord Shri Ram, authored by Sage Budha Kaushika', youtube: 'https://www.youtube.com/results?search_query=Ram+Raksha+Stotram' },
  { id: 'mahishasura-mardini-stotram', title: 'Mahishasura Mardini Stotram', titleHi: 'महिषासुर मर्दिनी स्तोत्र', category: 'stotra', color: '#B71C1C', path: '../prayers/stotra/mahishasura-mardini-stotram.html', description: 'The Mahishasura Mardini Stotram (महिषासुर मर्दिनी स्तोत्र) — universally known by its iconic opening \'Aigiri Nandini\' — is an exhilarating Sanskrit poem composed by Sri Adi Shankaracharya', youtube: 'https://www.youtube.com/results?search_query=Mahishasura+Mardini+Stotram' },
  { id: 'kanakadhara-stotram', title: 'Kanakadhara Stotram', titleHi: 'कनकधारा स्तोत्र', category: 'stotra', color: '#F5A623', path: '../prayers/stotra/kanakadhara-stotram.html', description: 'The Kanakadhara Stotram (कनकधारा स्तोत्र) is an exceptionally potent 21-verse Sanskrit hymn composed by the great 8th-century philosopher Adi Shankaracharya', youtube: 'https://www.youtube.com/results?search_query=Kanakadhara+Stotram' },
  { id: 'sankat-nashan-ganesh-stotram', title: 'Sankat Nashan Ganesh Stotram', titleHi: 'संकटनाशन गणेश स्तोत्र', category: 'stotra', color: '#FF8C38', path: '../prayers/stotra/sankat-nashan-ganesh-stotram.html', description: 'The Sankat Nashan Ganesh Stotram (संकटनाशन गणेश स्तोत्र) is one of the most effective and widely practiced prayers dedicated to Lord Ganesha, the remover of obstacles', youtube: 'https://www.youtube.com/results?search_query=Sankat+Nashan+Ganesh+Stotram' }
];

// ---- Hindu Calendar Vikram Months ----
const VIKRAM_MONTHS = ['चैत्र','वैशाख','ज्येष्ठ','आषाढ़','श्रावण','भाद्रपद','आश्विन','कार्तिक','मार्गशीर्ष','पौष','माघ','फाल्गुन'];

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
// ====  TODAY'S PRAYER WIDGET (Festival-Aware)  ========
// ======================================================
function initTodaysPrayer() {
  const container = document.getElementById('todaysPrayer');
  const widget = document.querySelector('.todays-prayer-widget');
  const linkEl = document.getElementById('todaysPrayerLink');
  if (!container) return;

  // Use festival-calendar if available, otherwise fallback
  let prayer;
  if (typeof getAajKaMantra === 'function') {
    prayer = getAajKaMantra();
  } else {
    const fallback = [
      { text: 'ॐ नमः शिवाय', trans: 'Salutations to Lord Shiva', source: 'शिव पंचाक्षर मंत्र', color: '#1A6BB5' },
      { text: 'जय गणेश देवा', trans: 'Victory to Lord Ganesha', source: 'गणेश आरती', color: '#FF8C38' },
      { text: 'हरे कृष्ण हरे कृष्ण', trans: 'Hare Krishna Mahamantra', source: 'महामंत्र', color: '#283593' },
      { text: 'श्री राम जय राम', trans: 'Victory to Lord Rama', source: 'रामनाम', color: '#1A237E' },
      { text: 'ॐ जय जगदीश हरे', trans: 'Victory to Lord Vishnu', source: 'जगदीश आरती', color: '#6A1B9A' },
      { text: 'ॐ श्रीं महालक्ष्म्यै नमः', trans: 'Salutations to Goddess Lakshmi', source: 'लक्ष्मी मंत्र', color: '#F5A623' },
      { text: 'जय जय श्री शनि देव', trans: 'Victory to Lord Shani', source: 'शनि आरती', color: '#37474F' },
    ];
    prayer = fallback[new Date().getDay()];
  }

  // Apply festival color to widget background
  if (prayer.color && widget) {
    const c = prayer.color;
    widget.style.background = `linear-gradient(135deg, ${c}dd, ${c}99)`;
  }

  // Build festival badge if applicable
  const festivalBadge = prayer.isFestival
    ? `<div class="mantra-festival-badge">${prayer.emoji} ${prayer.festivalHi}</div>`
    : '';

  container.innerHTML = `
    ${festivalBadge}
    <div class="todays-prayer-text">${prayer.text}</div>
    <div class="todays-prayer-trans">${prayer.trans}</div>
    <div class="todays-prayer-source">— ${prayer.source}</div>`;

  // Update "Read Full Prayer" link to festival-specific prayer if applicable
  if (linkEl && prayer.prayer) {
    // Determine base path (index page is at root)
    const scriptTag = document.querySelector('script[src*="js/main.js"]');
    const base = scriptTag ? scriptTag.getAttribute('src').replace('js/main.js', '') : '';
    linkEl.href = base + prayer.prayer;
    linkEl.textContent = `${prayer.emoji || '📖'} Read ${prayer.prayerTitle || 'Full Prayer'} →`;
  }
}

// ======================================================
// ====  HINDU CALENDAR WIDGET (Festival-Aware)  ========
// ======================================================
function initHinduCalendar() {
  const el = document.getElementById('hinduCalendar');
  if (!el) return;
  const now = new Date();
  const vikramYear = now.getFullYear() + 57;
  const vikramMonth = VIKRAM_MONTHS[(now.getMonth() + 1) % 12];
  const paksha = now.getDate() <= 15 ? 'शुक्ल पक्ष' : 'कृष्ण पक्ष';
  const tithi = Math.floor((now.getDate() % 15) + 1);
  const tithiNames = ['प्रतिपदा','द्वितीया','तृतीया','चतुर्थी','पंचमी','षष्ठी','सप्तमी','अष्टमी','नवमी','दशमी','एकादशी','द्वादशी','त्रयोदशी','चतुर्दशी','पूर्णिमा/अमावस्या'];
  const tithiName = tithiNames[Math.max(0, tithi - 1)] || 'प्रतिपदा';

  // Use dynamic festival data if available
  let festivalHtml = '';
  if (typeof getCalendarFestival === 'function') {
    const cal = getCalendarFestival();
    const tag = cal.isActive
      ? `<span class="cal-festival-active">${cal.emoji} ${cal.nameHi} — आज!</span>`
      : `<span>${cal.emoji} ${cal.name}${cal.daysUntil ? ` (${cal.daysUntil} दिन में)` : ''}</span>`;
    festivalHtml = `<div class="cal-item cal-festival"><span class="cal-label">${cal.isActive ? '🎉 आज का पर्व' : '🎉 आने वाला पर्व'}</span>${tag}</div>`;
  } else {
    festivalHtml = `<div class="cal-item cal-festival"><span class="cal-label">🎉 आने वाला पर्व</span><span class="cal-value">🌺 नवरात्रि</span></div>`;
  }

  el.innerHTML = `
    <div class="cal-item"><span class="cal-label">विक्रम संवत</span><span class="cal-value">${vikramYear}</span></div>
    <div class="cal-item"><span class="cal-label">मास</span><span class="cal-value">${vikramMonth}</span></div>
    <div class="cal-item"><span class="cal-label">पक्ष / तिथि</span><span class="cal-value">${paksha} · ${tithiName}</span></div>
    ${festivalHtml}`;
}

// ======================================================
// ====  FESTIVAL BANNER  ==============================
// ======================================================
function initFestivalBanner() {
  const bannerEl = document.getElementById('festivalBanner');
  if (!bannerEl) return;
  if (typeof getFestivalBannerData !== 'function') return;

  const data = getFestivalBannerData();
  if (!data) { bannerEl.style.display = 'none'; return; }

  const { festival: f, daysUntil, isActive } = data;
  const prefix = isActive ? '' : `${daysUntil === 1 ? 'कल' : daysUntil + ' दिन में'} — `;
  bannerEl.style.background = `linear-gradient(90deg, ${f.color}ee, ${f.color}bb, ${f.color}ee)`;
  bannerEl.innerHTML = `
    <div class="festival-banner-inner">
      <span class="festival-banner-marquee">
        ${f.emoji}&nbsp;${prefix}${f.banner}&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;${f.emoji}&nbsp;${prefix}${f.banner}&nbsp;&nbsp;&nbsp;✦&nbsp;&nbsp;&nbsp;
      </span>
      <button class="festival-banner-close" id="festivalBannerClose" aria-label="Close festival banner">✕</button>
    </div>`;
  bannerEl.style.display = 'block';

  // Push navbar down by banner height
  const nav = document.querySelector('.navbar');
  const bannerH = bannerEl.offsetHeight;
  if (nav) nav.style.top = bannerH + 'px';

  // Close button — removes banner from page; reappears on next page load
  document.getElementById('festivalBannerClose').addEventListener('click', () => {
    bannerEl.style.transition = 'opacity 0.3s ease';
    bannerEl.style.opacity = '0';
    setTimeout(() => {
      bannerEl.remove();
      if (nav) {
        nav.style.transition = 'top 0.3s ease';
        nav.style.top = '0';
        setTimeout(() => { nav.style.transition = ''; }, 350);
      }
    }, 280);
  });
}

// ======================================================
// ====  TRENDING PRAYER BADGES  ========================
// ======================================================
function initTrendingBadges() {
  if (typeof getTrendingPrayerIds !== 'function') return;
  const trending = getTrendingPrayerIds();
  if (!trending.length) return;
  document.querySelectorAll('.prayer-card[data-id]').forEach(card => {
    if (trending.includes(card.dataset.id)) {
      if (!card.querySelector('.trending-chip')) {
        const chip = document.createElement('div');
        chip.className = 'trending-chip';
        chip.innerHTML = '🔥 Trending';
        card.style.position = 'relative';
        card.querySelector('.card-thumb')?.appendChild(chip);
      }
    }
  });
}

// ======================================================
// ====  FLOATING OM BUTTON  ============================
// ======================================================
function initOmButton() {
  const btn = document.getElementById('omBtn');
  if (!btn) return;

  // Resolve root path for audio (same logic as nav.js)
  const href = window.location.href.replace(/\\/g, '/');
  let audioRoot = '';
  if (href.includes('/prayers/')) audioRoot = '../../';
  else if (href.includes('/pages/')) audioRoot = '../';

  // Create Om audio — uses Gayatri Mantra (closest Om chant in our audio folder)
  const omAudio = new Audio(audioRoot + 'audio/gayatri-mantra.mp3');
  omAudio.loop = true;
  omAudio.volume = 0.7;

  let playing = false;

  btn.addEventListener('click', () => {
    playing = !playing;

    if (playing) {
      omAudio.play().catch(() => {
        showToast('🔇 Audio could not play. Check browser permissions.');
        playing = false;
        return;
      });
      btn.classList.add('om-active');
      btn.title = 'Click to stop Om chant';
      btn.style.animation = 'omPulse 1.5s ease-in-out infinite';
      showToast('🕉️ OM chant started — breathe and focus');
    } else {
      omAudio.pause();
      omAudio.currentTime = 0;
      btn.classList.remove('om-active');
      btn.title = 'Play Om Chant';
      btn.style.animation = '';
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

  // Stop audio when user leaves the page
  window.addEventListener('pagehide', () => { omAudio.pause(); });
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
  initFestivalBanner();
  initTrendingBadges();
  document.querySelectorAll('.theme-toggle').forEach(btn => btn.addEventListener('click', toggleTheme));
});
window.addEventListener('beforeunload', () => { /* no TTS to cancel */ });
