# FREEZE29 — Official Orca Community 🐋❄️

Website komunitas anak muda Indonesia **FREEZE29** dengan tema **paus Orca + es kristal**: hitam orca pekat, biru es, dan gelombang samudra.

## Halaman

| File | Deskripsi |
| --- | --- |
| `freeze-v2.html` | **Landing page utama** — hero, featured, prestasi (gaming & coding), pricing, FAQ, CTA, auto-suggest pencarian, scroll progress |
| `freeze-community.html` | Halaman komunitas lengkap — 6 divisi, event + filter, showcase, testimoni, membership, FAQ, countdown FreezeFest, modal join |
| `freeze-dashboard.html` | **FreezePay** — saldo wallet, kartu virtual (freeze/unfreeze + CVV), top-up, ledger dengan filter + saran otomatis |
| `freeze-portal.html` | **Cyber-Frost Portal** — editorial subculture hub: The Vault masonry feed dengan Chill vote + partikel es, Cryo drops, live telemetry, interactive filters & command desk |
| `404.html` | Halaman error bertema samudra |
| `index.html` | Halaman lama (HIMPACT) yang masih dipertahankan |
| `beasiswa.html` | Halaman contoh eksternal |

## Aset & identitas

- `freeze-logo.png` / `freeze-logo-official.jpeg` — logo resmi **FREEZE29** (dipakai di navbar, footer, watermark, favicon, manifest, dan apple-touch-icon).

## Menjalankan di lokal

```bash
npm start
# atau
node serve-freeze.cjs
```

Server berjalan di <http://localhost:8000> (root → `freeze-v2.html`) dengan port bisa diubah lewat env `PORT`.

## Teknologi

- HTML + Tailwind CSS (CDN) + Lucide Icons + vanilla JavaScript
- Tanpa proses build, tanpa dependency runtime
- Nomor 1 dari `serve-freeze.cjs` (mini static server, juga melayani `404.html`)

## Fitur terbaru

- **Saran otomatis (auto-suggest)** pada pencarian: sidebar & dashboard (`freeze-v2`), pencarian event/divisi (`freeze-community`), dan pencarian transaksi ledger (`freeze-dashboard`) — navigasi pakai ↑/↓ dan Enter.
- **SEO & sosial**: Open Graph, Twitter Card, JSON-LD (`Organization` + `FAQPage`), sitemap, robots.
- **PWA**: `manifest.webmanifest` + theme-color, bisa di-install sebagai aplikasi.
- **Aksesibilitas & performa**: `prefers-reduced-motion`, `aria-label` pada tombol ikon, lazy-load gambar, avatar inisial (tanpa foto eksternal).
- **Tampilan**: background samudra Orca + es kristal, scroll progress bar, countdown FreezeFest 2026, dan tanggal dinamis pada mockup dashboard.

## Deploy

Repo ini siap dipakai GitHub Pages: aktifkan **Settings → Pages → Branch: `main` / root**. File `.nojekyll` sudah disertakan.
