'use strict';
(() => {
  const copy = {
    id: {
      title: 'Rehearsal — Segera Hadir, 30 Oktober 2026',
      description: 'Beberapa hal memang hanya bisa kita jalani, meski tahu akhirnya tidak akan berubah. Rehearsal, 30 Oktober 2026, 18.00 WIB.',
      'og.title': 'Rehearsal — 30 Oktober 2026',
      'og.description': 'Rehearsal, sebuah visual novel oleh MangMengMong Studio. 30 Oktober 2026, 18.00 WIB.',
      skip: 'Lewati ke konten', navigation: 'Navigasi utama', home: 'Beranda', story: 'Cerita', gallery: 'Galeri', back: '← Kembali ke Studio',
      eyebrow: 'SEBUAH VISUAL NOVEL<br>OLEH MANGMENGMONG STUDIO',
      epigraph: 'Beberapa hal memang hanya bisa kita jalani,<br>meski tahu akhirnya tidak akan berubah.',
      release: 'Jadwal rilis', countdown: 'Hitung mundur menuju 30 Oktober 2026 pukul 18.00 WIB', begins: 'CERITA DIMULAI DALAM',
      days: 'HARI', hours: 'JAM', minutes: 'MENIT', seconds: 'DETIK', date: '30 Oktober 2026 <span>·</span> 18.00 WIB',
      released: 'Waktu yang ditunggu sudah tiba. Cek kabar rilis terbaru dari MangMengMong Studio.',
      platforms: 'Segera hadir untuk', calendar: 'Simpan tanggalnya', calendarFile: 'rehearsal-release.ics',
      'music.play': 'Putar musik', 'music.pause': 'Jeda musik', 'music.retry': 'Coba putar musik lagi', 'music.error': 'Musik tidak tersedia',
      quote: 'Kutipan karakter', 'quote.ella': 'Kalau di sekolah, jangan diem-diem aja kali. Kamu lucu kalau ngomong.', 'quote.manda': 'Boleh pinjam kapan-kapan? Kalau kakak udah selesai.',
      'scene.label': 'Pilih latar CG', 'scene.short': 'Latar', 'scene.loading': 'Memuat latar…', 'scene.ready': 'Latar {name} ditampilkan.', 'scene.error': 'Latar belum bisa dimuat. Coba lagi.',
      socials: 'Media sosial', 'story.close': 'Tutup cerita', 'story.label': 'TENTANG REHEARSAL', 'story.title': 'Ada yang ingin kamu bilang?',
      'story.first': 'Bagi Budiman, mengobrol dengan Ella tidak sesederhana kelihatannya. Ada percakapan yang terus ia ulang di kepala, dan kalimat yang belum berani ia ucapkan.',
      'story.second': 'Ikuti keseharian Budiman, Ella, dan Manda dalam <em>Rehearsal</em>, sebuah visual novel berbahasa Indonesia.',
      follow: 'Ikuti perkembangan ↗', 'gallery.close': 'Tutup galeri', 'gallery.label': 'GALERI', 'gallery.title': 'Cuplikan suasana',
      'gallery.street': 'Jalan pulang, menjelang sore', 'gallery.classroom': 'Kelas setelah bel pulang', 'gallery.corridor': 'Lorong sekolah yang mulai sepi', 'gallery.library': 'Satu halaman lagi di perpustakaan',
      preview: 'Pratinjau ilustrasi', 'preview.close': 'Tutup pratinjau'
    },
    en: {
      title: 'Rehearsal — Coming Soon, 30 October 2026',
      description: 'Some things we can only live through, even when we know the ending won’t change. Rehearsal, 30 October 2026, 18:00 WIB (UTC+7).',
      'og.title': 'Rehearsal — 30 October 2026',
      'og.description': 'Rehearsal, a visual novel by MangMengMong Studio. 30 October 2026, 18:00 WIB (UTC+7).',
      skip: 'Skip to content', navigation: 'Main navigation', home: 'Home', story: 'Story', gallery: 'Gallery', back: '← Back to Studio',
      eyebrow: 'A VISUAL NOVEL<br>BY MANGMENGMONG STUDIO',
      epigraph: 'Some things we can only live through,<br>even when we know the ending won’t change.',
      release: 'Release schedule', countdown: 'Countdown to 30 October 2026 at 18:00 WIB (UTC+7)', begins: 'THE STORY BEGINS IN',
      days: 'DAYS', hours: 'HOURS', minutes: 'MINUTES', seconds: 'SECONDS', date: '30 October 2026 <span>·</span> 18:00 WIB (UTC+7)',
      released: 'The wait is over. Check the latest release news from MangMengMong Studio.',
      platforms: 'Coming soon for', calendar: 'Save the date', calendarFile: 'rehearsal-release-en.ics',
      'music.play': 'Play music', 'music.pause': 'Pause music', 'music.retry': 'Try playing again', 'music.error': 'Music unavailable',
      quote: 'Character quote', 'quote.ella': 'Don’t be so quiet at school. You’re funny when you talk.', 'quote.manda': 'Can I borrow it sometime? When you’re done with it.',
      'scene.label': 'Choose background CG', 'scene.short': 'Scene', 'scene.loading': 'Loading background…', 'scene.ready': '{name} background displayed.', 'scene.error': 'Couldn’t load the background. Please try again.',
      socials: 'Social media', 'story.close': 'Close story', 'story.label': 'ABOUT REHEARSAL', 'story.title': 'Something you want to say?',
      'story.first': 'For Budiman, talking to Ella isn’t as simple as it seems. There are conversations he keeps rehearsing in his head, and words he hasn’t quite found the courage to say.',
      'story.second': 'Follow the everyday lives of Budiman, Ella, and Manda in <em>Rehearsal</em>, an Indonesian-language visual novel.',
      follow: 'Follow our updates ↗', 'gallery.close': 'Close gallery', 'gallery.label': 'GALLERY', 'gallery.title': 'Glimpses of their world',
      'gallery.street': 'The walk home, late afternoon', 'gallery.classroom': 'The classroom after the bell', 'gallery.corridor': 'A school hallway growing quiet', 'gallery.library': 'One more page in the library',
      preview: 'Illustration preview', 'preview.close': 'Close preview'
    }
  };
  let language = 'id';
  try { if (localStorage.getItem('rehearsal-language') === 'en') language = 'en'; } catch {}
  let quoteScene = 'ella';
  const t = (key, variables = {}) => (copy[language][key] ?? copy.id[key] ?? key).replace(/\{(\w+)\}/g, (_, name) => variables[name] ?? '');
  const put = (selector, key, attribute) => document.querySelectorAll(selector).forEach(node => {
    if (attribute) node.setAttribute(attribute, t(key));
    else node.textContent = t(key);
  });
  // HTML is limited to this trusted, local translation dictionary.
  const html = (selector, key) => document.querySelectorAll(selector).forEach(node => { node.innerHTML = t(key); });
  function renderQuote(scene = quoteScene) {
    quoteScene = scene;
    document.getElementById('character-line').textContent = `“${t(`quote.${scene}`)}”`;
    document.getElementById('character-name').textContent = `— ${scene === 'manda' ? 'Manda' : 'Ella'}`;
  }
  function refreshDynamic() {
    document.querySelectorAll('[data-message]').forEach(node => {
      node.textContent = t(node.dataset.message, { name: node.dataset.name ?? '' });
    });
  }
  function apply(nextLanguage) {
    language = nextLanguage === 'en' ? 'en' : 'id';
    document.documentElement.lang = language;
    document.title = t('title');
    put('meta[name="description"]', 'description', 'content');
    put('meta[property="og:title"]', 'og.title', 'content');
    put('meta[property="og:description"]', 'og.description', 'content');
    put('.skip-link', 'skip'); put('.topbar nav', 'navigation', 'aria-label');
    put('.topbar nav>a:first-child', 'home'); put('[data-open="story-dialog"]', 'story'); put('[data-open="scenes-dialog"]', 'gallery'); put('.back-link', 'back');
    html('.opening>.eyebrow', 'eyebrow'); html('.epigraph', 'epigraph');
    put('.release', 'release', 'aria-label'); put('.countdown', 'countdown', 'aria-label'); put('.release-label', 'begins');
    ['days', 'hours', 'minutes', 'seconds'].forEach(key => put(`#${key}+span`, key));
    html('.release-date time', 'date'); put('.platforms>span', 'platforms');
    document.querySelector('.outline-button').innerHTML = `<span aria-hidden="true">＋</span> ${t('calendar')}`;
    put('.outline-button', 'calendarFile', 'href');
    put('.character-quote', 'quote', 'aria-label'); renderQuote();
    put('.scene-switch', 'scene.label', 'aria-label'); put('.scene-switch>span:first-child', 'scene.short');
    put('.hero-footer nav', 'socials', 'aria-label');
    put('#story-dialog .close-dialog', 'story.close', 'aria-label'); put('#story-dialog>.eyebrow', 'story.label'); put('#story-title', 'story.title');
    const paragraphs = document.querySelectorAll('#story-dialog>p:not(.eyebrow)');
    paragraphs[0].textContent = t('story.first'); paragraphs[1].innerHTML = t('story.second');
    put('.follow-button', 'follow'); put('#scenes-dialog .close-dialog', 'gallery.close', 'aria-label');
    put('#scenes-dialog>.eyebrow', 'gallery.label'); put('#scenes-title', 'gallery.title');
    document.querySelectorAll('.film').forEach((link, index) => {
      const key = ['gallery.street', 'gallery.classroom', 'gallery.corridor', 'gallery.library'][index];
      link.dataset.caption = t(key); link.querySelector('span').textContent = t(key); link.querySelector('img').alt = t(key);
      if (document.querySelector('#gallery-dialog img').getAttribute('src') === link.getAttribute('href') || document.querySelector('#gallery-dialog img').src === link.href) {
        document.querySelector('#gallery-dialog img').alt = t(key); document.querySelector('#gallery-dialog>p').textContent = t(key);
      }
    });
    put('#gallery-dialog', 'preview', 'aria-label'); put('#gallery-dialog .close-dialog', 'preview.close', 'aria-label');
    document.querySelectorAll('[data-language]').forEach(button => button.setAttribute('aria-pressed', String(button.dataset.language === language)));
    refreshDynamic();
  }
  function message(node, key, variables = {}) {
    node.dataset.message = key;
    node.dataset.name = variables.name ?? '';
    node.textContent = t(key, variables);
  }
  window.rehearsalI18n = { t, message, renderQuote };
  const languageSwitch = document.querySelector('.language-switch');
  languageSwitch.hidden = false;
  languageSwitch.querySelectorAll('button').forEach(button => button.addEventListener('click', () => {
    apply(button.dataset.language);
    try { localStorage.setItem('rehearsal-language', language); } catch {}
  }));
  apply(language);
})();
