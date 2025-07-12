import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";
import project12 from "@/assets/project-12.jpg";
import project13 from "@/assets/project-13.jpg";
import project14 from "@/assets/project-14.jpg";
import project15 from "@/assets/project-15.jpg";

const Certifications = () => {
  const certificates = [
    {
      title: "Kursus Proyek UI/UX Figma: Desain 2 Aplikasi dan Siap Kerja",
      description:
        "Menguasai Figma dengan mendesain 2 aplikasi UI/UX nyata. Kursus ini membekali Anda dengan portofolio kuat dan kesiapan untuk langsung berkarier.",
      imageUrl: project12,
      issuer: "Udemy",
      date: "10 Oktober 2024",
      credentialId: "FA-2024-001",
    },
    {
      title:
        "melajari Figma: Kelas Master Desain UI/UX dari Pemula hingga Profesional",
      description:
        "Menguasai Figma dari dasar hingga mahir untuk mendesain antarmuka (UI) dan pengalaman pengguna (UX) aplikasi secara profesional.",
      imageUrl: project13,
      issuer: "Udemy",
      date: "15 Oktober 2024",
      credentialId: "GUX-2024-789",
    },
    {
      title:
        "Desain Pengalaman Pengguna - Pelajari Desain Aplikasi UI UX dengan Figma",
      description:
        "Melajari cara mendesain aplikasi UI/UX yang intuitif dan menarik menggunakan Figma, fokus pada pengalaman pengguna yang optimal.",
      imageUrl: project14,
      issuer: "Udemy",
      date: "4 Juli 2024",
      credentialId: "ACE-PS-2024",
    },
    {
      title: "Bootcamp Pengembangan Web dengan HTML CSS PHP MySQL WordPress",
      description:
        "Bootcamp ini membekali Anda dengan keahlian membangun website dari nol, mencakup HTML, CSS, PHP, MySQL, dan WordPress, siap terjun ke dunia pengembangan web.",
      imageUrl: project15,
      issuer: "Udemy",
      date: "26 Juni 2025",
      credentialId: "HCI-2024-456",
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="certifications" />

      {/* Certifications Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              SERTIFIKAT
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Jelajahi bagian sertifikasi saya untuk melihat tonggak
              pengembangan profesional yang telah meningkatkan keahlian saya
              dalam desain UI/UX dan pengembangan produk digital.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div
                key={index}
                className="group bg-portfolio-navy-light rounded-xl overflow-hidden shadow-portfolio-card hover:shadow-portfolio-hover transition-all duration-300 hover:-translate-y-2"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={cert.imageUrl}
                    alt={cert.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-portfolio-orange bg-portfolio-orange/10 px-3 py-1 rounded-full">
                      {cert.issuer}
                    </span>
                    <span className="text-xs text-portfolio-gray">
                      {cert.date}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-portfolio-white mb-3 group-hover:text-portfolio-orange transition-colors line-clamp-2">
                    {cert.title}
                  </h3>
                  <p className="text-portfolio-gray text-sm mb-4 leading-relaxed line-clamp-2">
                    {cert.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-portfolio-gray font-mono">
                      ID: {cert.credentialId}
                    </span>
                    <div className="w-6 h-6 bg-portfolio-orange rounded-full flex items-center justify-center">
                      <svg
                        className="w-3 h-3 text-portfolio-navy"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Skills Enhancement */}
          <div className="mt-16">
            <div className="bg-portfolio-navy-light rounded-2xl p-8 md:p-12 text-center">
              <h2 className="text-2xl lg:text-3xl font-bold text-portfolio-white mb-4">
                Perjalanan Belajar Berkelanjutan
              </h2>
              <p className="text-portfolio-gray mb-8 max-w-3xl mx-auto leading-relaxed">
                Saya percaya pada pembelajaran seumur hidup dan selalu mengikuti
                perkembangan tren dan teknologi terbaru dalam desain UI/UX.
                Sertifikasi ini mewakili komitmen saya terhadap pertumbuhan
                profesional dan memberikan keunggulan dalam setiap proyek.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">
                    15+
                  </div>
                  <div className="text-portfolio-gray text-sm">
                    Kursus Selesai
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">
                    500+
                  </div>
                  <div className="text-portfolio-gray text-sm">Jam Belajar</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">
                    15
                  </div>
                  <div className="text-portfolio-gray text-sm">Sertifikat</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">
                    2
                  </div>
                  <div className="text-portfolio-gray text-sm">
                    Pengalaman Bertahun-tahun
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
        description="Saya ingin membantu Anda mewujudkan visi Anda menggunakan keterampilan dan keahlian saya yang tersertifikasi dalam desain UI/UX dan pengembangan produk digital."
        buttonText="Jelajahi Sekarang"
        buttonUrl="/contact"
      />

      <Footer />
    </div>
  );
};

export default Certifications;
