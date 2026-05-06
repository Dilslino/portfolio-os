export type Project = { slug:string; title:string; year:string; overview:string; problem:string; solution:string; stack:string[]; impact:string[]; screenshots:string[]; github:string; demo:string; featured?:boolean };

export const portfolio = {
  name: "xDil",
  role: "Senior Frontend Engineer",
  location: "Jakarta, Indonesia",
  availability: "Terbuka untuk kerja remote selektif",
  bio: "Saya membangun antarmuka produk yang rapi, cepat, dan mudah dirawat. Fokus saya ada di Next.js, sistem desain, dan detail interaksi kecil yang membuat produk terasa matang tanpa perlu terlihat berlebihan.",
  stats: [{label:"Tahun pengalaman",value:"8+"},{label:"Produk dirilis",value:"34"},{label:"Teknologi utama",value:"18"},{label:"GitHub stars",value:"12.8k"}],
  skills: ["Next.js","TypeScript","React","Tailwind CSS","Design System","Framer Motion","Accessibility","Performance","Node.js","Testing"],
  socials: { github:"https://github.com/xdilmahendra", linkedin:"https://linkedin.com/in/xdilmahendra", email:"mailto:xdil@example.com" },
  contact: { email:"xdil@example.com", response:"Biasanya membalas dalam 1–2 hari kerja." },
  experience: [
    {role:"Lead Frontend Engineer", company:"Nusantara Digital Studio", period:"2022 — Sekarang", description:"Memimpin arsitektur frontend untuk platform B2B dengan fokus pada performa, aksesibilitas, dan konsistensi sistem desain lintas tim."},
    {role:"Senior Frontend Engineer", company:"Kelana Pay", period:"2019 — 2022", description:"Membangun dashboard finansial real-time, memperbaiki waktu muat halaman inti sebesar 46%, dan menyusun fondasi komponen reusable."},
    {role:"Frontend Engineer", company:"Aruna Labs", period:"2016 — 2019", description:"Mengembangkan pengalaman web untuk marketplace logistik dan membantu migrasi bertahap dari monolith UI ke React."}
  ],
  testimonials: [
    {name:"Dian Pramesti", title:"Product Director", quote:"xDil punya rasa desain yang jarang dimiliki engineer. Ia bisa mengubah kebutuhan yang masih mentah menjadi antarmuka yang tenang dan jelas."},
    {name:"Fahmi Nugroho", title:"Engineering Manager", quote:"Kodenya bersih, keputusan teknisnya masuk akal, dan ia selalu memikirkan bagaimana tim lain akan merawat produk setelah rilis."}
  ],
  projects: [
    {slug:"orbit-ops", title:"Orbit Ops", year:"2025", overview:"Command center untuk tim operasional yang memantau SLA, insiden, dan kapasitas layanan dalam satu ruang kerja.", problem:"Tim sebelumnya berpindah di antara enam dashboard berbeda saat insiden terjadi, sehingga keputusan sering terlambat.", solution:"Saya merancang workspace tunggal dengan timeline insiden, panel metrik kontekstual, dan command palette untuk tindakan cepat.", stack:["Next.js","TypeScript","Tailwind","WebSocket","Framer Motion"], impact:["Waktu triase turun 38%","Adopsi internal 92% dalam bulan pertama","CLS stabil di bawah 0.02"], screenshots:["/screens/orbit-1.png","/screens/orbit-2.png"], github:"https://github.com/xdilmahendra/orbit-ops", demo:"https://orbit.example.com", featured:true},
    {slug:"sagara-commerce", title:"Sagara Commerce", year:"2024", overview:"Storefront premium untuk brand lokal dengan katalog cepat, checkout ringkas, dan editorial product storytelling.", problem:"Pengalaman belanja lama terasa lambat dan tidak memberi ruang untuk cerita produk.", solution:"Membangun storefront modular dengan komposisi section editorial, image strategy yang disiplin, dan cart interaction yang tidak mengganggu.", stack:["Next.js","React Server Components","Stripe","Tailwind"], impact:["Konversi naik 21%","LCP halaman produk 1.7s","Bounce rate turun 18%"], screenshots:["/screens/sagara-1.png"], github:"https://github.com/xdilmahendra/sagara", demo:"https://sagara.example.com", featured:true},
    {slug:"aksara-design-system", title:"Aksara Design System", year:"2023", overview:"Sistem desain internal untuk menyatukan dashboard, aplikasi mobile web, dan portal admin.", problem:"Tim bergerak cepat tetapi komponen tidak konsisten, membuat biaya maintenance terus naik.", solution:"Menyusun token, primitive component, dokumentasi penggunaan, dan proses review UI bersama designer.", stack:["React","Storybook","Radix UI","TypeScript"], impact:["Waktu delivery UI turun 32%","Lebih dari 70 komponen terdokumentasi","Bug visual regresi turun signifikan"], screenshots:["/screens/aksara-1.png"], github:"https://github.com/xdilmahendra/aksara", demo:"https://aksara.example.com"}
  ] satisfies Project[]
};
