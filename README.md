# Portfolio OS

![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=nextdotjs) ![TypeScript](https://img.shields.io/badge/TypeScript-ready-3178c6?logo=typescript) ![Tailwind](https://img.shields.io/badge/Tailwind-CSS-38bdf8?logo=tailwindcss) ![License](https://img.shields.io/badge/license-MIT-brightgreen)

**Portfolio OS** adalah template portfolio premium berbasis Next.js yang memperlakukan website pribadi seperti sebuah operating system: window sections, dock navigation, command palette, project case studies, dan sistem konten berbasis config.

## Preview

> Tambahkan screenshot di sini setelah deployment.

![Portfolio OS preview](./public/preview.png)

## Features

- Next.js 15 App Router + TypeScript
- Tailwind CSS v4 dengan token warna premium
- shadcn/ui compatible structure
- Framer Motion transitions yang halus dan terkendali
- Command palette (`CMD/CTRL + K`)
- Window-based portfolio sections
- Floating dock navigation
- Dark, darker, dan light theme via `next-themes`
- Project case study detail pages
- Semua konten berasal dari `config/portfolio.config.ts`
- Responsive untuk mobile, tablet, dan desktop

## Tech Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- shadcn/ui primitives
- Framer Motion
- Lucide React
- next-themes

## Installation

```bash
pnpm install
pnpm dev
```

Buka `http://localhost:3000`.

## Customization

Ubah seluruh isi portfolio dari satu file:

```ts
config/portfolio.config.ts
```

Anda bisa mengganti:

- nama
- role
- bio
- skills
- projects
- socials
- experience
- testimonials
- contact

Komponen UI tidak perlu disentuh untuk perubahan konten standar.

## Project Structure

```txt
app/                  App Router pages
components/os/         Shell, window system, command palette
components/sections/   Page sections
components/ui/         shadcn-compatible primitives
config/                Portfolio content source
lib/                   Utilities
public/                Static assets and screenshots
```

## Deployment

Deploy paling mudah melalui Vercel:

```bash
pnpm build
```

Pastikan build berhasil, lalu hubungkan repository ke Vercel.

## Screenshot Placeholders

Simpan gambar project di:

```txt
public/screens/
```

Lalu referensikan path-nya dari `portfolio.config.ts`.

## Contributing

Kontribusi terbuka untuk perbaikan aksesibilitas, performa, dokumentasi, dan komponen tambahan yang tetap sejalan dengan karakter Portfolio OS: tenang, matang, dan tidak berlebihan.

1. Fork repository
2. Buat branch fitur
3. Jalankan lint dan build
4. Buka pull request dengan konteks perubahan yang jelas

## License

MIT — gunakan untuk portfolio pribadi maupun proyek komersial.
