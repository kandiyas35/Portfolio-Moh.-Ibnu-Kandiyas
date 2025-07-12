import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import project16 from "@/assets/project-16.jpg";
import project17 from "@/assets/project-17.jpg";
import project18 from "@/assets/project-18.jpg";
import project19 from "@/assets/project-19.jpg";

const Blogs = () => {
  const blogPosts = [
    {
      title:
        "Masa Depan Desain UI/UX: Tren yang Perlu Diperhatikan di Tahun 2025",
      description:
        "Menjelajahi tren desain yang muncul, integrasi AI, dan bagaimana ekspektasi pengguna berkembang dalam lanskap digital.",
      imageUrl: project16,
      date: "20 Jan 2025",
      readTime: "5 menit membaca",
      category: "Tren Desain",
      url: "https://www.loungelizard.com/blog/future-of-ui-ux-design/",
    },
    {
      title: "Menciptakan Desain yang Aksesibel: Panduan Desainer",
      description:
        "Pelajari prinsip dasar aksesibilitas dalam desain dan cara menciptakan pengalaman digital inklusif untuk semua pengguna.",
      imageUrl: project17,
      date: "15 Jan 2025",
      readTime: "8 menit membaca",
      category: "Aksesibilitas",
      url: "https://codilime.com/blog/what-is-accessibility-design/",
    },
    {
      title: "Dari Figma ke Produksi: Serah Terima Desain yang Lancar",
      description:
        "Praktik terbaik untuk berkolaborasi dengan pengembang dan memastikan desain Anda diterapkan persis seperti yang diharapkan.",
      imageUrl: project18,
      date: "10 Jan 2025",
      readTime: "6 menit membaca",
      category: "Alur kerja",
      url: "https://www.smashingmagazine.com/2023/05/designing-better-design-handoff-file-figma/",
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="blogs" />

      {/* Blogs Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              BLOG
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Selamat datang di blog saya, tempat saya berbagi wawasan,
              pengalaman, dan pemikiran tentang desain UI/UX, tren teknologi,
              dan proses kreatif di balik pengembangan produk digital.
            </p>
          </div>

          {/* Blog Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article
                key={index}
                className="group bg-portfolio-navy-light rounded-xl overflow-hidden shadow-portfolio-card hover:shadow-portfolio-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-portfolio-orange bg-portfolio-orange/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-portfolio-gray">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-portfolio-white mb-3 group-hover:text-portfolio-orange transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-portfolio-gray text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-portfolio-gray">
                      {post.date}
                    </span>
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button variant="outline" size="sm">
                        Jelajahi Sekarang
                      </Button>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mt-16">
            <div className="bg-portfolio-navy-light rounded-2xl overflow-hidden shadow-portfolio-card">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={project19}
                    alt="Featured Article"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-portfolio-orange bg-portfolio-orange/10 px-3 py-1 rounded-full">
                      Artikel Unggulan
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-portfolio-white mb-4">
                    Membangun Sistem Desain dari Awal
                  </h2>
                  <p className="text-portfolio-gray mb-6 leading-relaxed">
                    Panduan komprehensif tentang cara membuat sistem desain
                    skalabel yang berkembang bersama produk dan tim Anda.
                    Pelajari tentang pustaka komponen, token desain, dan praktik
                    terbaik dokumentasi.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-portfolio-gray">
                      25 Jan 2025 • 12 menit membaca
                    </span>
                    <a
                      href="https://www.netguru.com/blog/how-to-build-design-systems-from-scratch"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Button>Baca Artikel Lengkapnya</Button>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Punya Ide Proyek? Ayo Berkolaborasi!"
        description="Saya ingin sekali membantu Anda mewujudkan visi Anda. Baik itu aplikasi seluler, situs web, maupun produk digital, mari kita ciptakan sesuatu yang luar biasa bersama."
        buttonText="Jelajahi Sekarang"
        buttonUrl="/contact"
      />

      <Footer />
    </div>
  );
};

export default Blogs;
