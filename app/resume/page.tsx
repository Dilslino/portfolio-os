import { OSShell } from "@/components/os/os-shell";
import { OSWindow } from "@/components/os/window";
import { portfolio } from "@/config/portfolio.config";

const education = [
  { school: "Universitas Bina Nusantara", degree: "S1 Teknik Informatika", period: "2012 — 2016", note: "Fokus pada rekayasa perangkat lunak, interaksi manusia-komputer, dan arsitektur aplikasi web." },
  { school: "Interaction Design Foundation", degree: "Professional Certificate", period: "2021", note: "Design systems, accessibility, dan product usability untuk aplikasi berskala tim." },
];

const achievements = [
  "Memimpin migrasi frontend bertahap ke Next.js App Router tanpa downtime pada produk B2B aktif.",
  "Menyusun design system internal yang dipakai oleh 12 engineer dan 5 designer lintas squad.",
  "Menurunkan LCP halaman utama dari 4.1s ke 1.8s melalui image strategy, streaming, dan audit bundle.",
  "Membuat standar review aksesibilitas yang masuk ke definition of done tim frontend.",
];

const certifications = [
  "Advanced React Performance Workshop — 2024",
  "Frontend Architecture Patterns — 2023",
  "Web Accessibility Practical Audit — 2022",
];

export default function Resume(){return <OSShell><div className="mx-auto max-w-5xl px-4 pb-28 sm:px-6 lg:px-10"><OSWindow title="resume.xdil"><div className="flex flex-col gap-6 border-b border-border pb-8 md:flex-row md:items-end md:justify-between"><div><p className="text-sm text-muted">Resume / Curriculum Vitae</p><h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">{portfolio.name}</h1><p className="mt-3 text-lg text-muted">{portfolio.role} · {portfolio.location}</p></div><div className="rounded-3xl border border-border bg-card p-4 text-sm text-muted"><p>{portfolio.contact.email}</p><p>{portfolio.contact.response}</p></div></div><section className="grid gap-8 border-b border-border py-8 md:grid-cols-[220px_1fr]"><div><h2 className="font-semibold">Profil singkat</h2></div><p className="max-w-3xl leading-8 text-muted">{portfolio.bio} Dalam pekerjaan sehari-hari, saya nyaman berada di antara engineering, design, dan product decision. Saya suka membuat fondasi frontend yang tidak hanya terlihat bagus saat demo, tapi juga tetap sehat setelah dipakai tim berbulan-bulan.</p></section><section className="grid gap-8 border-b border-border py-8 md:grid-cols-[220px_1fr]"><h2 className="font-semibold">Pengalaman</h2><div className="space-y-5">{portfolio.experience.map(e=><article key={e.company} className="rounded-3xl border border-border bg-card p-5"><p className="text-sm text-muted">{e.period}</p><h3 className="mt-1 text-lg font-semibold">{e.role} · {e.company}</h3><p className="mt-3 leading-7 text-muted">{e.description}</p></article>)}</div></section><section className="grid gap-8 border-b border-border py-8 md:grid-cols-[220px_1fr]"><h2 className="font-semibold">Keahlian utama</h2><div className="flex flex-wrap gap-3">{portfolio.skills.map(skill=><span key={skill} className="rounded-2xl border border-border bg-card px-4 py-2 text-sm text-muted">{skill}</span>)}</div></section><section className="grid gap-8 border-b border-border py-8 md:grid-cols-[220px_1fr]"><h2 className="font-semibold">Pencapaian</h2><ul className="space-y-3">{achievements.map(item=><li key={item} className="rounded-2xl border border-border bg-card p-4 leading-7 text-muted">{item}</li>)}</ul></section><section className="grid gap-8 border-b border-border py-8 md:grid-cols-[220px_1fr]"><h2 className="font-semibold">Pendidikan</h2><div className="space-y-4">{education.map(item=><article key={item.school} className="rounded-3xl border border-border bg-card p-5"><p className="text-sm text-muted">{item.period}</p><h3 className="mt-1 font-semibold">{item.degree}</h3><p className="mt-1 text-muted">{item.school}</p><p className="mt-3 leading-7 text-muted">{item.note}</p></article>)}</div></section><section className="grid gap-8 py-8 md:grid-cols-[220px_1fr]"><h2 className="font-semibold">Sertifikasi</h2><div className="grid gap-3 sm:grid-cols-3">{certifications.map(item=><div key={item} className="rounded-2xl border border-border bg-card p-4 text-sm leading-6 text-muted">{item}</div>)}</div></section></OSWindow></div></OSShell>}
