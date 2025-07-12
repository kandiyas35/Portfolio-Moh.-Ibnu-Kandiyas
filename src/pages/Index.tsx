import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ProjectCard } from "@/components/ProjectCard";
import { CTASection } from "@/components/CTASection";
import { Button } from "@/components/ui/button";
import profileHero from "@/assets/profile-hero.jpg";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import project4 from "@/assets/project-4.jpg";
import project5 from "@/assets/project-5.jpg";

const Index = () => {
  const featuredProjects = [
    {
      title: "🔗 Website Penanggungan Summit Explore",
      description:
        "Website destinasi wisata yang menampilkan keindahan Gunung Penanggungan dengan pengalaman pengguna yang imersif.",
      imageUrl: project1,
      projectUrl: "https://kandiyas35.github.io/Penanggung-Summit-Explore/",
      isExternal: true,
    },
    {
      title: "🎓 Website Persiapan UTBK - S2TU",
      description:
        "Platform pembelajaran online untuk persiapan UTBK dengan fitur lengkap dan antarmuka yang user-friendly.",
      imageUrl: project2,
      projectUrl: "https://github.com/kandiyas35/Website-Persiapan-UTBK-S2TU",
      isExternal: true,
    },
    {
      title: "🚗 Remote Controller Robot Car (ESP32)",
      description:
        "Sistem kontrol robot mobil berbasis ESP32 dengan antarmuka web yang responsif dan real-time.",
      imageUrl: project3,
      projectUrl: "https://kandiyas35.github.io/Smar-Robot-Car-ESP-32/",
      isExternal: true,
    },
    {
      title: '🏠 UI/UX Website "Omah Impian"',
      description:
        "Desain UI/UX modern untuk website properti dengan fokus pada kemudahan navigasi dan pengalaman pengguna.",
      imageUrl: project4,
      projectUrl:
        "https://www.figma.com/proto/r4HSI76YJJAYt8W1XO9yRf/Untitled?node-id=0-1&t=EIIOPAvPPLx7k39t-1",
      isExternal: true,
    },
    {
      title: '📱 Mobile UI/UX App "One UNESA"',
      description:
        "Desain aplikasi mobile untuk komunitas UNESA dengan antarmuka yang intuitif dan engagement yang tinggi.",
      imageUrl: project5,
      projectUrl:
        "https://www.figma.com/proto/7NBj52f5WRfuJI6JgagLOp/NCast---Podcast-App--Community-?page-id=&node-id=2184-199&starting-point-node-id=2099%3A94&t=5Vm7MHIaFtaVeG7b-1",
      isExternal: true,
    },
  ];

  const skills = [
    { name: "Visual Studio Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "💅" },
    { name: "React", icon: "⚛️" },
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="home" />

      {/* Hero Section */}
      <section className="pt-28 pb-20 bg-gradient-hero min-h-[80vh]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-portfolio-white mb-6 leading-relaxed">
                <span className="bg-gradient-to-r from-portfolio-orange via-orange-400 to-yellow-400 bg-clip-text text-transparent font-bold underline decoration-dotted underline-offset-4">
                  Desainer UI/UX
                </span>{" "}
                &{" "}
                <span className="bg-gradient-to-r from-yellow-400 via-orange-400 to-portfolio-orange bg-clip-text text-transparent font-bold underline decoration-dotted underline-offset-4">
                  Junior Web Developer
                </span>{" "}
                yang bersemangat menciptakan produk digital yang mulus dan
                menyenangkan.
              </h1>

              <p className="text-xl text-portfolio-gray mb-8 leading-relaxed">
                Halo, saya Moh. Ibnu Kandiyas, saya berdedikasi untuk merancang
                produk digital yang mulus dan menyenangkan.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <a href="/contact">Hubungi Saya</a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a
                    href="https://drive.google.com/drive/folders/1NBuT8jNVMb44HT_lqZGnYU-1yQM3UYDh?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    📄 Unduh CV
                  </a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-portfolio-orange/20 rounded-full blur-3xl"></div>
                <img
                  src={profileHero}
                  alt="Moh. Ibnu Kandiyas"
                  className="relative rounded-2xl shadow-2xl w-80 h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-white mb-4">
              Projek Saya
            </h2>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Kumpulan proyek pengembangan UI/UX dan web yang telah saya
              kerjakan dengan fokus pada kepuasan pengguna dan prinsip desain
              modern.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard
                key={index}
                title={project.title}
                description={project.description}
                imageUrl={project.imageUrl}
                projectUrl={project.projectUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 bg-portfolio-navy-light">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-portfolio-white text-center mb-12">
            Alat yang Saya Gunakan
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-portfolio-navy rounded-xl hover:bg-portfolio-navy/80 transition-colors group cursor-pointer"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span className="text-portfolio-gray group-hover:text-portfolio-white transition-colors text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Jelajahi lebih dalam perjalanan profesional saya!"
        description="Portofolio saya menanti eksplorasi Anda, menampilkan berbagai proyek dan pengalaman yang telah membentuk saya."
        buttonText="Jelajahi Sekarang"
        buttonUrl="/about"
      />

      <Footer />
    </div>
  );
};

export default Index;
