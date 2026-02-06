# Karya Halim UI Parity (MJU Colors + MJU Content) Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Menyamakan UI `project-maju-jaya-utama-lestari` dengan `karyahalim-modern-platform` untuk seluruh site **kecuali halaman Works (portfolio)**, dengan **warna tetap memakai MJU** dan **konten/i18n diambil dari MJU saat ini + PDF yang disediakan**.

**Architecture:** Port penuh struktur rute, layout global, dan komponen dari Karya Halim. Sistem desain diselaraskan pada typography, spacing, shadow, utility, dan animasi, tetapi warna tetap memakai token MJU. Konten dan terjemahan diambil dari `src/locales` MJU dan diperkuat oleh isi PDF. Data konten disusun di `src/lib` agar reusable antar halaman.

**Tech Stack:** React 18, Vite, TypeScript, Tailwind CSS, shadcn/ui, React Router v6, Framer Motion, React Query, i18next.

Page: `/services`

Related file:

| Category | Path | Notes |
| --- | --- | --- |
| Komponen Utama & Layout | `src/pages/Services.tsx` | File entry point untuk halaman Layanan. |
| Komponen Utama & Layout | `src/components/ServicesSection.tsx` | Komponen UI inti grid kartu layanan (ServiceCard). |
| Komponen Utama & Layout | `src/components/MotionSection.tsx` | Wrapper untuk animasi scroll dan transisi. |
| Komponen UI Dasar (shadcn/ui) | `src/components/ui/button.tsx` | Tombol CTA dan link "Learn More". |
| Komponen UI Dasar (shadcn/ui) | `src/components/ui/card.tsx` | Container utama setiap item layanan. |
| Data & Konten | `src/lib/services.ts` | Definisi data layanan, slug, gambar, fitur. |
| Data & Konten | `src/lib/i18n-en.ts` | Teks terjemahan EN untuk services/servicesSection. |
| Data & Konten | `src/lib/i18n-id.ts` | Teks terjemahan ID untuk services/servicesSection. |
| Metadata & SEO | `src/components/SEO.tsx` | Pengelola meta tags, Open Graph, JSON-LD. |
| Metadata & SEO | `src/lib/seo-pages.ts` | Metadata halaman Services. |
| Metadata & SEO | `src/lib/seo.ts` | Util JSON-LD Breadcrumbs/WebPage. |
| Komponen Terkait Lainnya | `src/pages/ServiceDetail.tsx` | Detail page layanan per slug. |

## Page Parity Scope (Karya Halim → MJU)

**Included pages:**
- `/` (Index)
- `/about-us/our-company`
- `/about-us/our-team`
- `/about-us/our-team/:slug`
- `/about-us/certifications`
- `/about-us/company-awards`
- `/products`
- `/gallery`
- `/news`
- `/news/:slug`
- `/services`
- `/services/:slug`
- `/career/employee`
- `/career/intern`
- `/contact`
- `/location`
- `*` (NotFound)

**Excluded pages (per request):**
- `/works` dan `/works/:slug` (portfolio)

### Task 1: Verifikasi branch dan kesiapan kerja

**Files:**
- Review: `.git/HEAD`

**Step 1: Pastikan branch `redesign` aktif**

Run: `git status -sb`

Expected: branch `redesign` aktif.

**Step 2: Pastikan working tree bersih**

Run: `git status -sb`

Expected: tidak ada perubahan lokal sebelum implementasi.

**Step 3: Commit (optional)**

Jika ada perubahan tidak terkait, pastikan disimpan atau dipindahkan sebelum melanjutkan.

### Task 2: Buat peta parity rute dan komponen (tanpa portfolio)

**Files:**
- Review: `/Users/msd/workspace/karyahalim-modern-platform/src/App.tsx`
- Review: `/Users/msd/workspace/karyahalim-modern-platform/src/pages/*`
- Review: `/Users/msd/workspace/karyahalim-modern-platform/src/components/*`
- Create: `docs/plans/2026-02-06-karyahalim-ui-parity-map.md`

**Step 1: Catat semua rute Karya Halim**

Run: `rg "path=\"" /Users/msd/workspace/karyahalim-modern-platform/src/App.tsx`

Expected: daftar rute lengkap.

**Step 2: Tandai rute yang di-skip**

Tandai `/works` dan `/works/:slug` sebagai **excluded** (portfolio).

**Step 3: Tulis mapping rute dan komponen**

Tuliskan mapping rute, komponen utama, dan dependency data untuk halaman yang disertakan pada `docs/plans/2026-02-06-karyahalim-ui-parity-map.md`.

**Step 4: Commit**

Run:
```
git add docs/plans/2026-02-06-karyahalim-ui-parity-map.md
git commit -m "docs: add route and component parity map"
```

### Task 3: Selaraskan global styles tanpa mengubah warna MJU

**Files:**
- Modify: `src/index.css`

**Step 1: Pertahankan token warna MJU**

Pastikan blok `:root` mempertahankan nilai warna MJU. Jangan menimpa variabel warna dengan versi Karya Halim.

**Step 2: Port typography dan utilities dari Karya Halim**

Salin kelas global berikut dari Karya Halim ke MJU, lalu sesuaikan font family agar tetap menggunakan font MJU:
- `.heading-*`, `.text-*`
- `.section-padding`, `.container-padding`, `.layout-container`
- `.glass-effect`, `.card-hover`, `.button-glow`
- animasi `fadeUp`, `scaleIn`, `slideInRight`

**Step 3: Jalankan lint**

Run: `npm run lint`

Expected: no errors.

**Step 4: Commit**

Run:
```
git add src/index.css
git commit -m "style: align global utilities without changing MJU colors"
```

### Task 4: Selaraskan Tailwind config tanpa mengubah warna MJU

**Files:**
- Modify: `tailwind.config.ts`

**Step 1: Tambahkan extensions non-warna**

Port bagian berikut dari Karya Halim ke MJU:
- `container` config (padding, screens)
- `fontFamily` untuk heading/body jika diperlukan
- `backgroundImage`, `boxShadow`, `transitionTimingFunction`, `animation`, `keyframes`

Pastikan `colors` tetap memakai token MJU yang sudah ada.

**Step 2: Jalankan build**

Run: `npm run build`

Expected: build sukses.

**Step 3: Commit**

Run:
```
git add tailwind.config.ts
git commit -m "style: align tailwind utilities without color changes"
```

### Task 5: Port App shell, layout, dan animasi routing (tanpa portfolio)

**Files:**
- Modify: `src/App.tsx`
- Create: `src/components/AppLayout.tsx`
- Create: `src/components/ScrollToTop.tsx`
- Create: `src/components/MotionSection.tsx`

**Step 1: Tambahkan AppLayout + ScrollToTop**

Copy penuh dari:
- `/Users/msd/workspace/karyahalim-modern-platform/src/components/AppLayout.tsx`
- `/Users/msd/workspace/karyahalim-modern-platform/src/components/ScrollToTop.tsx`

**Step 2: Tambahkan MotionSection**

Copy penuh dari:
- `/Users/msd/workspace/karyahalim-modern-platform/src/components/MotionSection.tsx`

**Step 3: Implement AnimatedRoutes di App.tsx**

Copy struktur `App.tsx` Karya Halim, lalu sesuaikan:
- i18n provider MJU
- Toaster/Sonner MJU
- Page background MJU
- Hapus rute `/works` dan `/works/:slug`

**Step 4: Run dev server**

Run: `npm run dev`

Expected: app berjalan dan route `/` aktif.

**Step 5: Commit**

Run:
```
git add src/App.tsx src/components/AppLayout.tsx src/components/ScrollToTop.tsx src/components/MotionSection.tsx
git commit -m "feat: add app layout and animated routes"
```

### Task 6: Sinkronkan konten & i18n dari MJU + PDF

**Files:**
- Review: `src/locales/en/*.json`, `src/locales/id/*.json`
- Modify/Create: `src/lib/i18n-en.ts`
- Modify/Create: `src/lib/i18n-id.ts`
- Modify: `src/lib/i18n.ts`
- Modify/Create: `src/lib/services.ts`
- Modify/Create: `src/lib/projects.ts` (opsional bila dipakai)
- Modify/Create: `src/lib/news.ts`

**Step 1: Lokasi PDF dan ekstraksi konten**

Gunakan PDF berikut dan ekstrak poin konten penting (profil, layanan, keunggulan, angka, sertifikasi) untuk mapping ke halaman:
`/Users/msd/workspace/project-maju-jaya-utama-lestari/docs/plans/company profile new-1.pdf`

**Step 2: Konsolidasi i18n MJU**

Gunakan konten dari `src/locales` sebagai sumber utama. Port struktur i18n Karya Halim **tanpa mengganti teks**. Pastikan key `services` dan `servicesSection` tetap berasal dari MJU.

**Step 3: Bentuk data lib dari konten MJU**

Bangun `src/lib/services.ts` dan data lain berdasarkan isi `src/locales` + PDF. Hindari data placeholder Karya Halim.

**Step 4: Run build**

Run: `npm run build`

Expected: build sukses.

**Step 5: Commit**

Run:
```
git add src/lib src/locales

git commit -m "feat: align content and i18n with MJU sources"
```

### Task 7: Port komponen global (Header, Footer, sections)

**Files:**
- Modify: `src/components/Header.tsx`
- Modify: `src/components/Footer.tsx`
- Create: `src/components/CTASection.tsx`
- Create: `src/components/ProjectsSection.tsx` (opsional, jika bukan portfolio)
- Create: `src/components/NewsSection.tsx`
- Create: `src/components/ClientsSection.tsx`

**Step 1: Copy komponen dari Karya Halim**

Copy struktur komponen, lalu ganti konten dengan data MJU dari `src/lib` dan i18n.

**Step 2: Jalankan lint**

Run: `npm run lint`

Expected: no errors.

**Step 3: Commit**

Run:
```
git add src/components/Header.tsx src/components/Footer.tsx src/components/CTASection.tsx src/components/ProjectsSection.tsx src/components/NewsSection.tsx src/components/ClientsSection.tsx
git commit -m "feat: align global sections with MJU content"
```

### Task 8: Port homepage dan core sections

**Files:**
- Modify: `src/pages/Index.tsx`
- Modify: `src/components/HeroSection.tsx`
- Modify: `src/components/ServicesSection.tsx`

**Step 1: Copy struktur halaman Index**

Copy layout dari Karya Halim, tetapi isi konten dari MJU.

**Step 2: Update Hero dan Services**

Gunakan data `src/lib/services.ts` dan i18n MJU.

**Step 3: Run dev server**

Run: `npm run dev`

Expected: homepage tampil dengan layout Karya Halim dan warna MJU.

**Step 4: Commit**

Run:
```
git add src/pages/Index.tsx src/components/HeroSection.tsx src/components/ServicesSection.tsx
git commit -m "feat: align homepage structure with MJU content"
```

### Task 9: Port halaman Services dan ServiceDetail

**Files:**
- Create: `src/pages/Services.tsx`
- Create: `src/pages/ServiceDetail.tsx`

**Step 1: Copy halaman Services**

Copy layout dari Karya Halim, isi data dari `src/lib/services.ts`.

**Step 2: Copy halaman ServiceDetail**

Gunakan slug dan konten MJU.

**Step 3: Run dev server**

Run: `npm run dev`

Expected: `/services` dan `/services/:slug` berfungsi.

**Step 4: Commit**

Run:
```
git add src/pages/Services.tsx src/pages/ServiceDetail.tsx
git commit -m "feat: add services pages with MJU content"
```

### Task 10: Port halaman lain (tanpa portfolio)

**Files:**
- Create: `src/pages/Products.tsx`
- Create: `src/pages/News.tsx`
- Create: `src/pages/NewsDetail.tsx`
- Create: `src/pages/Gallery.tsx`
- Create: `src/pages/CareerEmployee.tsx`
- Create: `src/pages/CareerIntern.tsx`
- Create: `src/pages/Contact.tsx`
- Create: `src/pages/Location.tsx`
- Create: `src/pages/about-us/*`
- Create: `src/components/GalleryImageCard.tsx`
- Create: `src/components/LocationMap.tsx`
- Create: `src/components/VisionMissionSection.tsx`
- Create: `src/components/CompanyStrategySection.tsx`

**Step 1: Copy struktur halaman dari Karya Halim**

Gunakan layout Karya Halim, tetapi isi konten MJU. Jangan membuat `/works` atau `/works/:slug`.

**Step 2: Run dev server**

Run: `npm run dev`

Expected: semua route yang disertakan berfungsi.

**Step 3: Commit**

Run:
```
git add src/pages src/components
git commit -m "feat: add remaining pages without portfolio"
```

### Task 11: SEO dan metadata per halaman

**Files:**
- Modify: `src/components/SEO.tsx`
- Modify/Create: `src/lib/seo.ts`
- Modify/Create: `src/lib/seo-pages.ts`

**Step 1: Port struktur SEO**

Copy struktur Karya Halim, isi metadata dari MJU.

**Step 2: Run build**

Run: `npm run build`

Expected: build sukses.

**Step 3: Commit**

Run:
```
git add src/components/SEO.tsx src/lib/seo.ts src/lib/seo-pages.ts
git commit -m "feat: add SEO metadata per page"
```

### Task 12: QA parity dan polishing akhir

**Files:**
- Review: semua halaman dan komponen

**Step 1: Lint dan build**

Run: `npm run lint`

Expected: no errors.

Run: `npm run build`

Expected: build sukses.

**Step 2: QA visual**

Cek seluruh route utama di desktop dan mobile. Pastikan layout, spacing, dan typography sejajar dengan Karya Halim, sementara warna tetap MJU.

**Step 3: Commit**

Run:
```
git add -A
git commit -m "chore: finalize UI parity and QA"
```

## Open Questions
- Apakah ada konten tambahan selain PDF dan `src/locales` yang harus dipakai untuk halaman tertentu?
