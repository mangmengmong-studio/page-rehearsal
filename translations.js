'use strict';
(() => {
  const copy = {
    id: {
      "release": "Jadwal rilis",
      "begins": "PEMBARUAN PENGEMBANGAN",
      "heading": "Perilisan ditunda",
      "summary": "Sebelumnya dijadwalkan pada 30 Oktober 2026, Rehearsal ditunda hingga waktu yang belum ditentukan.",
      "note": "Kami memberikan lebih banyak waktu untuk cerita, visual, dan kualitas pengalaman bermain.",
      "platforms": "Dalam pengembangan untuk",
      "announcement": "Baca pengumuman",
      "update.close": "Tutup pengumuman",
      "update.title": "Tentang perilisan Rehearsal",
      "update.label": "PEMBARUAN PENGEMBANGAN",
      "update.greeting": "Halo, semuanya! 🐱",
      "update.schedule": "Kami ingin menyampaikan bahwa perilisan Rehearsal, yang sebelumnya dijadwalkan pada 30 Oktober 2026, ditunda untuk waktu yang belum ditentukan.",
      "update.origin": "Awalnya, proyek ini kami mulai dengan tujuan sederhana: membuat visual novel kecil, menyelesaikannya, lalu merilisnya sebagai game pertama kami.",
      "update.reason": "Namun, seiring berjalannya waktu, cerita dan karakter di Rehearsal mulai hidup. Kami merasa game ini akan sangat sayang jika hanya sekadar dirilis. Karena itu, kami memutuskan untuk memberikan lebih banyak waktu agar pengalaman bermainnya bisa lebih baik, baik dari sisi cerita, visual, maupun keseluruhan kualitasnya.",
      "update.care": "Ini bukan berarti kami mengejar kesempurnaan, tetapi kami percaya masih ada hal-hal yang bisa kami lakukan untuk membuat Rehearsal menjadi pengalaman yang lebih berkesan.",
      "update.progress": "Kami akan terus mengembangkan Rehearsal dan membagikan perkembangannya di waktu mendatang.",
      "update.thanks": "Terima kasih untuk semua yang sudah menunjukkan perhatian dan dukungannya terhadap proyek pertama kami.",
      "update.closing": "Sampai jumpa di update berikutnya!",

      title: 'Rehearsal — Pembaruan Pengembangan',
      description: 'Perilisan Rehearsal ditunda hingga waktu yang belum ditentukan. Ikuti kabar pengembangan terbaru dari MangMengMong Studio.',
      'og.title': 'Rehearsal — Pembaruan Pengembangan',
      'og.description': 'Perilisan Rehearsal ditunda hingga waktu yang belum ditentukan. Kami memberikan lebih banyak waktu untuk cerita, visual, dan kualitas pengalaman bermain.',
      skip: 'Lewati ke konten', navigation: 'Navigasi utama', home: 'Beranda', story: 'Cerita', gallery: 'Galeri', back: '← Kembali ke Studio',
      eyebrow: 'SEBUAH VISUAL NOVEL<br>OLEH MANGMENGMONG STUDIO',
      epigraph: 'Beberapa hal memang hanya bisa kita jalani,<br>meski tahu akhirnya tidak akan berubah.',
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
      "release": "Release schedule",
      "begins": "DEVELOPMENT UPDATE",
      "heading": "Release postponed",
      "summary": "Previously scheduled for 30 October 2026, Rehearsal has been postponed with no new date set.",
      "note": "We are taking more time for the story, visuals, and overall quality of the experience.",
      "platforms": "In development for",
      "announcement": "Read announcement",
      "update.close": "Close announcement",
      "update.title": "About the release of Rehearsal",
      "update.label": "DEVELOPMENT UPDATE",
      "update.greeting": "Hello, everyone! 🐱",
      "update.schedule": "The release of Rehearsal, previously scheduled for 30 October 2026, has been postponed with no new date set.",
      "update.origin": "We began this project with a simple goal: make a small visual novel, finish it, and release it as our first game.",
      "update.reason": "As time went on, the story and characters in Rehearsal began to come alive. We felt they deserved more care before release. So we decided to take more time to improve the experience, from the story and visuals to its overall quality.",
      "update.care": "We are not chasing perfection, but we believe there are still things we can do to make Rehearsal a more memorable experience.",
      "update.progress": "We will continue developing Rehearsal and sharing our progress in the future.",
      "update.thanks": "Thank you to everyone who has shown interest in and supported our first project.",
      "update.closing": "See you in the next update!",

      title: 'Rehearsal — Development Update',
      description: 'The release of Rehearsal has been postponed with no new date set. Follow development updates from MangMengMong Studio.',
      'og.title': 'Rehearsal — Development Update',
      'og.description': 'The release of Rehearsal has been postponed with no new date set. We are taking more time for the story, visuals, and overall quality of the experience.',
      skip: 'Skip to content', navigation: 'Main navigation', home: 'Home', story: 'Story', gallery: 'Gallery', back: '← Back to Studio',
      eyebrow: 'A VISUAL NOVEL<br>BY MANGMENGMONG STUDIO',
      epigraph: 'Some things we can only live through,<br>even when we know the ending won’t change.',
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
    put('.release', 'release', 'aria-label'); put('.release-label', 'begins');
    put('.release-heading', 'heading'); put('.release-summary', 'summary'); put('.release-note', 'note');
    put('.platforms>span', 'platforms'); put('.outline-button', 'announcement');
    put('#update-dialog .close-dialog', 'update.close', 'aria-label'); put('#update-title', 'update.title');
    document.querySelectorAll('[data-update]').forEach(node => { node.textContent = t(`update.${node.dataset.update}`); });
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
