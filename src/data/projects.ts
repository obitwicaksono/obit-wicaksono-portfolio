export interface Project {
  slug: string;
  name: string;
  description: string;
  detail: string;
  thumbnail?: string;
  image: string;
  gallery?: string[];
  tech: string[];
  githubUrl?: string;
  figmaUrl?: string;
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
    image: "/projects/allinol/card.png", // Using the designated hero image
    gallery: [
      "/projects/allinol/1.png",
      "/projects/allinol/2.png",
      "/projects/allinol/3.png",
      "/projects/allinol/4.png",
      "/projects/allinol/5.png"
    ],
    tech: ["Figma", "UI/UX"],
    figmaUrl: "https://www.figma.com/proto/sevtbxGP1TLYHr4bzsRb4r/Allinol?node-id=685-5305&p=f&t=lhYfyKDnLHyyzKs4-1&scaling=scale-down&content-scaling=fixed&page-id=121%3A62&starting-point-node-id=685%3A5330&show-proto-sidebar=1", // Placeholder link
  },
  {
    slug: "fitness-app",
    name: "Fitness App",
    description:
      "Aplikasi mobile fitness dengan Flutter, mempelajari tentang widget structure dan ListView.builder.",
    detail:
      "Fitness App adalah aplikasi mobile yang dibangun menggunakan Flutter. Dalam project ini saya mempelajari tentang struktur widget di Flutter, cara membuat data model, serta melakukan fetching dan menampilkan data menggunakan ListView.builder. Aplikasi ini menampilkan daftar workout dan exercise yang bisa dipilih pengguna.",
    thumbnail: "/projects/fitness-app/card.png",
    image: "/projects/fitness-app/card.png",
    gallery: [
      "/projects/fitness-app/1.png"
    ],
    tech: ["Flutter", "Dart", "Mobile"],
    githubUrl: "https://github.com/obitwicaksono/fitness", // Placeholder link
  },
  {
    slug: "astra-property-app",
    name: "Astra Property App",
    description:
      "List Properti dengan Navigasi Detail Informasi menggunakan GoRouter",
    detail:
      "Astra Property App adalah aplikasi daftar properti yang dikembangkan menggunakan Flutter. Dalam proyek ini, saya mempelajari implementasi sistem routing menggunakan GoRouter. Aplikasi ini menampilkan daftar properti yang tersedia, dan ketika salah satu properti dipilih, pengguna akan diarahkan ke halaman detail yang berisi informasi lengkap mengenai properti tersebut.",
    thumbnail: "/projects/astra-property/card.png",
    image: "/projects/astra-property/card.png",
    gallery: [
      "/projects/astra-property/1.png",
      "/projects/astra-property/2.png",
      "/projects/astra-property/3.png"
    ],
    tech: ["Flutter", "Dart", "GoRoute"],
    githubUrl: "https://github.com/obitwicaksono/astra-property", // Placeholder link
  },
];
