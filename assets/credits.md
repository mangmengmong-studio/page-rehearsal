# Aset Rehearsal

Aset resmi dari proyek game milik pengguna, `/home/yusufprananda/Projects/vn-project-rehearsal/`:

| Aset website | Sumber |
| --- | --- |
| `classroom-rain.webp` | `game/images/ui/menu_cg_hujan.png` |
| `logo-light.webp` | `game/images/ui/logo_rehearsal_light.png` |
| `rain.ogg` | `game/audio/ui/hujan_menu.ogg` |
| `Literata-Regular.ttf`, `Literata-Italic.ttf` | `game/fonts/` |
| `PlusJakartaSans-Regular.ttf` | `game/fonts/` |
| `JetBrainsMono-Regular.ttf` | `game/fonts/` |

Artwork dikompresi ke WebP; logo resmi mempertahankan transparansi. Font disertai lisensi SIL Open Font License masing-masing. Favicon memakai ikon resmi Rehearsal yang diberikan pengguna pada 23 Oktober 2026; diperkecil tanpa mengubah desain untuk ICO, PNG 32/192 px, dan Apple touch icon 180 px.

Epigraf memakai teks `game/main_menu.rpy`. Sinopsis singkat merangkum premis Budiman/Ella dari materi cerita tanpa mengungkap akhir. Kutipan di halaman utama mengikuti main menu secara verbatim.

## Pembaruan scrapbook

| Aset website | Sumber |
| --- | --- |
| `classroom-sunset.webp` | `game/images/ui/menu_cg_cerah.png` |
| `ella.webp` | `game/images/sprites/ella/ella_senyum.png`, dipangkas pada area transparan |
| `gallery-classroom.webp` | `game/images/bg/bg_kelas_sore.png` |
| `gallery-street.webp` | `game/images/bg/bg_jalan_sore.png` |
| `gallery-library.webp` | `game/images/bg/bg_perpus_sore.png` |
| `gallery-corridor.webp` | `game/images/bg/bg_lorong_sore.png` |
| `Kalam-Regular.ttf` | `game/fonts/`, lisensi `OFL-Kalam.txt` |
| `studio.webp` | `../mangmengmong.github.io/assets/images/studio/logo.webp` |

`paper-grain.svg` merupakan tekstur noise SVG lokal. Ilustrasi lokasi berasal dari aset game yang sudah tersedia.

## CG Ella untuk halaman penuh

`ella-hero-cg.webp` adalah CG baru yang dihasilkan dengan built-in imagegen pada 23 Oktober 2026, memakai `produksi/karakter/ella-v2/acuan-seragam.png` sebagai acuan identitas dan `game/images/cg/cg_ella_kartu.png` sebagai acuan gaya. Prompt lengkap: `ella-hero-prompt.txt`. CG dikonversi ke WebP untuk web. Sprite `ella.webp` dan latar kelas terpisah tidak digunakan pada halaman utama.

## CG Manda dan BGM

`manda-hero-cg.webp` dibuat menggunakan built-in imagegen pada 23 Oktober 2026. Acuan identitas: `produksi/karakter/manda-v2/acuan.png` dan detail identitas terkunci di `README.md` karakter; acuan gaya/komposisi: CG Ella website. Prompt lengkap: `manda-hero-prompt.txt`. Ilustrasi dikonversi ke WebP.

`theme-morning-light.ogg` disalin tanpa perubahan dari `game/audio/bgm/theme_morning_light.ogg`, lagu pembuka (`OPENING_BGM` di `game/opening.rpy`) dan menu cerah (`game/main_menu.rpy`). Audio menggantikan suara hujan di halaman.

Akun sosial mengikuti situs studio: Instagram `https://www.instagram.com/mangmengmong.studio/` dan Threads `https://www.threads.com/@mangmengmong.studio`.

## Kutipan karakter

Kutipan mengikuti dialog naskah secara verbatim dan dipilih dari percakapan ringan, tanpa mengungkap perkembangan atau akhir cerita:

- Ella: “Kalau di sekolah, jangan diem-diem aja kali. Kamu lucu kalau ngomong.” — `naskah/03_Arc3_Kedekatan.md`.
- Manda: “Boleh pinjam kapan-kapan? Kalau kakak udah selesai.” — `naskah/02_Arc2_Pendekatan.md`.

Efek kertas bergaris, lubang jilid, dan selotip dibuat dengan CSS; tulisan tangan memakai font Kalam dari game.

## Bahasa website

Dialog Indonesia mempertahankan naskah asli; versi Inggris di `translations.js` merupakan terjemahan untuk website. Dukungan dua bahasa website tidak menyatakan bahwa game sudah diterjemahkan. Kedua file kalender menggunakan jadwal rilis UTC yang sama.
