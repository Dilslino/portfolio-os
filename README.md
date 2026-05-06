# Portfolio OS

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs) ![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss) ![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-deployed-222?logo=github) ![License](https://img.shields.io/badge/license-MIT-brightgreen)

**Portfolio OS** adalah template portfolio premium berbasis Next.js yang memperlakukan website pribadi seperti sebuah operating system: window sections, dock navigation, command palette, project case studies, resume interaktif, dan sistem konten berbasis config.

Live demo:

https://dilslino.github.io/portfolio-os/

## Features

- Next.js App Router + TypeScript
- Tailwind CSS v4 dengan token warna premium
- shadcn/ui compatible structure
- Framer Motion transitions yang halus dan terkendali
- Command palette (`CMD/CTRL + K` / `CTRL + K`)
- Window-based portfolio sections
- Floating dock navigation
- Sidebar navigation untuk desktop
- Dark, darker, dan light theme via `next-themes`
- Project case study detail pages
- Resume page lengkap dengan data dummy profesional
- Semua konten utama berasal dari `config/portfolio.config.ts`
- GitHub Pages ready dengan base path `/portfolio-os`
- Responsive untuk mobile, tablet, dan desktop

## Pages

- Home: OS-style landing, stats, featured projects, terminal mini, skills, contact
- Projects: daftar project dan stack
- Project Detail: overview, problem, solution, impact, screenshots placeholder, GitHub/live demo
- Experience: timeline pengalaman
- Resume: profil, pengalaman, skill, pencapaian, pendidikan, sertifikasi
- Contact: email CTA

## Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Framer Motion
- Lucide React
- next-themes

## Installation

```bash
npm install
npm run dev
```

Atau jika memakai pnpm:

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`.

## Production Build

```bash
npm run build
```

Untuk build yang sama seperti GitHub Pages:

```bash
GITHUB_PAGES=true NEXT_PUBLIC_BASE_PATH=/portfolio-os npm run build
```

## Customization

Ubah seluruh isi portfolio utama dari satu file:

```txt
config/portfolio.config.ts
```

Anda bisa mengganti:

- nama
- role
- lokasi
- bio
- stats
- skills
- projects
- socials
- experience
- testimonials
- contact

Komponen UI tidak perlu disentuh untuk perubahan konten standar.

## Resume Content

Halaman resume sudah berisi dummy data profesional untuk:

- profil singkat
- pengalaman kerja
- keahlian utama
- pencapaian
- pendidikan
- sertifikasi

Jika ingin membuat resume sepenuhnya config-based, pindahkan array `education`, `achievements`, dan `certifications` dari `app/resume/page.tsx` ke `config/portfolio.config.ts`.

## Project Structure

```txt
app/                    App Router pages
app/projects/[slug]/     Dynamic static project detail pages
components/os/           Shell, window system, command palette
components/sections/     Page sections
components/ui/           shadcn-compatible primitives
config/                  Portfolio content source
lib/                     Utilities, base path helper
public/                  Static assets and screenshots
.github/workflows/       GitHub Pages deployment workflow
```

## GitHub Pages Deployment

Deployment sudah disiapkan lewat GitHub Actions:

```txt
.github/workflows/deploy.yml
```

Workflow akan:

1. Install dependencies
2. Build static export Next.js
3. Upload artifact dari folder `out`
4. Deploy ke GitHub Pages

URL produksi saat ini:

```txt
https://dilslino.github.io/portfolio-os/
```

## Screenshot Placeholders

Simpan gambar project di:

```txt
public/screens/
```

Lalu referensikan path-nya dari `portfolio.config.ts`.

Contoh:

```ts
screenshots: ["/screens/orbit-1.png"]
```

## Quality Checklist

- [x] Static build sukses
- [x] GitHub Pages deployment sukses
- [x] Base path GitHub Pages aman
- [x] Command palette tersedia
- [x] Dock navigation tersedia
- [x] Project detail pages tersedia
- [x] Resume page lengkap dengan dummy content
- [x] Theme switch tersedia
- [x] Responsive layout tersedia

## Contributing

Kontribusi terbuka untuk perbaikan aksesibilitas, performa, dokumentasi, dan komponen tambahan yang tetap sejalan dengan karakter Portfolio OS: tenang, matang, dan tidak berlebihan.

1. Fork repository
2. Buat branch fitur
3. Jalankan build
4. Buka pull request dengan konteks perubahan yang jelas

## License

MIT — gunakan untuk portfolio pribadi maupun proyek komersial.
