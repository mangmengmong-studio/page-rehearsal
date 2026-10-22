# Rehearsal

Halaman coming soon resmi Rehearsal oleh MangMengMong Studio. Rilis **30 Oktober 2026, 18.00 WIB** (`2026-10-30T11:00:00Z`).

Halaman utama memakai satu CG Ella khusus sebagai latar penuh, tanpa sprite terpisah. Layout satu layar menyesuaikan desktop, HP, dan orientasi landscape. Cerita dan galeri dibuka lewat dialog; galeri mendukung pembesaran gambar dan tombol Escape. Suara hujan opsional aktif setelah tombol ditekan. Hitung mundur menggunakan jadwal WIB di semua zona waktu dan berhenti di nol saat rilis tiba.

CG dibuat dengan built-in imagegen berdasarkan acuan resmi Ella. Prompt dan sumber aset tercatat di `assets/credits.md` dan `assets/ella-hero-prompt.txt`.

## GitHub Pages

File situs ada langsung di root repository, tanpa build atau dependency:

- `index.html`
- `style.css`
- `main.js`
- `rehearsal-release.ics`
- `assets/`
- `.nojekyll`

Unggah file tersebut ke repository GitHub. Di **Settings → Pages**, pilih **Deploy from a branch**, branch **main**, folder **/ (root)**, lalu **Save**. Semua aset memakai path relatif sehingga dapat dihosting pada domain maupun subpath GitHub Pages.

Jalankan pratinjau lokal dari direktori ini:

```sh
python3 -m http.server 8080 --bind 127.0.0.1
```

Buka `http://localhost:8080/`. Tidak ada konfigurasi Sites, layanan backend, atau ZIP yang diperlukan. Tautan unduh game dapat ditambahkan setelah tautan rilis tersedia. File proyek game dan situs studio sumber tidak diubah.

Sumber aset dan lisensi tercatat di `assets/credits.md`.
