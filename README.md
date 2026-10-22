# Rehearsal

Halaman coming soon resmi Rehearsal oleh MangMengMong Studio. Rilis **30 Oktober 2026, 18.00 WIB** (`2026-10-30T11:00:00Z`).

Halaman utama memakai pilihan CG Ella dan Manda khusus sebagai latar penuh, tanpa sprite terpisah. Layout satu layar menyesuaikan desktop, HP, dan orientasi landscape. Cerita dan galeri dibuka lewat dialog; galeri mendukung pembesaran gambar dan tombol Escape. BGM `theme_morning_light` dari opening/menu cerah game dapat diputar atau dijeda melalui tombol musik. Audio hanya aktif setelah tombol ditekan. Tombol Ella/Manda mengganti latar dengan crossfade setelah gambar selesai dimuat; kutipan dialog ikut berganti sesuai karakter. Popup cerita dan galeri bergaya catatan kertas dengan animasi masuk/keluar. Animasi mengikuti preferensi reduced motion. Keterangan platform: segera hadir untuk Windows, Linux, dan Android. Hitung mundur menggunakan jadwal WIB di semua zona waktu dan berhenti di nol saat rilis tiba.

CG dibuat dengan built-in imagegen berdasarkan acuan resmi masing-masing karakter. Prompt dan sumber aset tercatat di `assets/credits.md` serta `assets/ella-hero-prompt.txt` dan `assets/manda-hero-prompt.txt`.

Bahasa website dapat diganti lewat tombol ID/EN di header. Indonesia adalah bahasa awal; pilihan disimpan di localStorage jika tersedia. `translations.js` memuat terjemahan antarmuka, kutipan, sinopsis, label aksesibilitas, dan metadata. Versi Inggris tetap menjelaskan bahwa game berbahasa Indonesia. Unduhan kalender mengikuti bahasa yang dipilih, dengan jadwal rilis yang sama.

## GitHub Pages

File situs ada langsung di root repository, tanpa build atau dependency:

- `index.html`
- `style.css`
- `main.js`
- `translations.js`
- `rehearsal-release.ics`
- `rehearsal-release-en.ics`
- `assets/`
- `.nojekyll`

Unggah file tersebut ke repository GitHub. Di **Settings → Pages**, pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**. Semua aset memakai path relatif sehingga dapat dihosting pada domain maupun subpath GitHub Pages.

Jalankan pratinjau lokal dari direktori ini:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Buka `http://localhost:8080/`. Tidak ada konfigurasi Sites, layanan backend, atau ZIP yang diperlukan. Tautan unduh game dapat ditambahkan setelah tautan rilis tersedia. File proyek game dan situs studio sumber tidak diubah.

Sumber aset dan lisensi tercatat di `assets/credits.md`.
