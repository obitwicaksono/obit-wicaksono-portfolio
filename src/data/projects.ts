export interface Project {
  slug: string;
  name: string;
  description: string;
  detail: string;
  thumbnail?: string;
  image: string;
  gallery?: string[];
  tech: string[];
}

export const projects: Project[] = [
  {
    slug: "allinol",
    name: "Allinol",
    description:
      "Prototype platform jual minyak jelantah berbasis Web3 & AI, membuat dari business plan dan hingga desain UI/UX.",
    detail:
      "Allinol adalah platform jual beli minyak jelantah berbasis Web3 dan AI. Project ini merupakan tugas Matakuliah Technopreneurship, di mana saya membuat prototype aplikasi menggunakan Figma. Proses pengerjaan mencakup pembuatan business plan, financial projection, serta desain UI/UX secara menyeluruh. Platform ini dirancang untuk menghubungkan penjual minyak jelantah dengan pembeli secara transparan menggunakan teknologi blockchain.",
    thumbnail: "/projects/allinol/card.png",
    image: "/projects/allinol/hero.png", // Using the designated hero image
    gallery: [
      "/projects/allinol/1.png",
      "/projects/allinol/2.png",
      "/projects/allinol/3.png",
      "/projects/allinol/4.png",
      "/projects/allinol/5.png"
    ],
    tech: ["Figma", "Web3", "AI", "UI/UX"],
  },
  {
    slug: "fitness-app",
    name: "Fitness App",
    description:
      "Aplikasi mobile fitness dengan Flutter, mempelajari tentang widget structure dan ListView.builder.",
    detail:
      "Fitness App adalah aplikasi mobile yang dibangun menggunakan Flutter. Dalam project ini saya mempelajari tentang struktur widget di Flutter, cara membuat data model, serta melakukan fetching dan menampilkan data menggunakan ListView.builder. Aplikasi ini menampilkan daftar workout dan exercise yang bisa dipilih pengguna.",
    image: "/projects/fitness-app.png",
    tech: ["Flutter", "Dart", "Mobile"],
  },
  {
    slug: "astra-property-app",
    name: "Astra Property App",
    description:
      "Aplikasi list properti dengan navigasi detail menggunakan GoRoute di Flutter.",
    detail:
      "Astra Property App adalah aplikasi list properti yang dibuat dengan Flutter. Dalam project ini saya mempelajari tentang routing aplikasi menggunakan GoRoute. Aplikasi menampilkan daftar property yang tersedia, dan saat salah satu property di-klik, akan muncul halaman detail dengan informasi lengkap mengenai property tersebut.",
    image: "/projects/astra-property.png",
    tech: ["Flutter", "Dart", "GoRoute"],
  },
];
