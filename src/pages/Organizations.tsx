import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CTASection } from "@/components/CTASection";

const Organizations = () => {
  const organizations = [
    {
      title: "BEM FT 2025",
      position: "Kepala Departemen Luar Negeri",
      duration: "Januari 2025 - Sekarang",
      description: [
        "Menginisiasi dan mengelola kemitraan strategis dengan berbagai pihak eksternal, termasuk institusi, organisasi, dan mitra industri, untuk mendukung program kerja dan visi organisasi.",
        "Mengoordinasikan dan memfasilitasi proyek-proyek kolaborasi yang melibatkan pihak luar, memastikan alur komunikasi yang efektif antar tim internal dan eksternal.",
        "Merencanakan dan menyelenggarakan kegiatan edukatif, seperti lokakarya, seminar, atau kunjungan, dengan menghadirkan narasumber atau melibatkan partisipasi dari entitas eksternal.",
        "Menjadi jembatan komunikasi utama yang menjaga hubungan baik dan membangun citra positif organisasi di mata pihak luar.",
        "Membimbing anggota tim dalam pengembangan keterampilan negosiasi, etiket berinteraksi dengan pihak eksternal, dan manajemen proyek kerja sama.",
      ],
      impact:
        "Meningkatkan kompetensi dan kapasitas tim departemen dalam membangun jaringan, mengelola proyek eksternal, dan berkomunikasi secara profesional.",
    },
    {
      title: "BEM FT 2024",
      position: "Anggota Departemen Penalaran Riset & Teknologi",
      duration: "Januari 2024 - Desember 2024",
      description: [
        "Melakukan riset dan analisis terhadap isu-isu terkait teknologi dan sains, serta tren inovasi yang relevan dengan bidang organisasi.",
        "OBerpartisipasi aktif dalam pengembangan proyek berbasis riset, mulai dari tahap ideasi, perencanaan, hingga implementasi dan pengujian.",
        "Membantu penyelenggaraan kegiatan departemen seperti lokakarya, seminar, atau diskusi ilmiah yang bertujuan untuk meningkatkan pengetahuan anggota dan komunitas.",
        "Berkolaborasi dengan anggota tim dalam setiap proses kerja, memastikan tercapainya tujuan departemen secara efektif.",
        "Mengembangkan kemampuan pribadi dalam riset, analisis data, dan penggunaan teknologi terkini.",
      ],
      impact:
        "Berpartisipasi dalam pencapaian target departemen secara keseluruhan dan berkontribusi pada budaya inovasi dan pengembangan berkelanjutan dalam organisasi.",
    },
    {
      title: "Ashnaff Muhibbin",
      position: "Bendahara Umum",
      duration: "January 2022 - Desember 2022",
      description: [
        "DMengelola dan mencatat seluruh transaksi keuangan organisasi secara akurat dan transparan, termasuk pemasukan dan pengeluaran dana.",
        "Menyusun laporan keuangan periodik (bulanan/triwulanan) dan laporan akhir tahun anggaran yang jelas dan dapat dipertanggungjawabkan.",
        "Menyimpan dan mengamankan aset keuangan organisasi, baik dalam bentuk fisik maupun digital.",
        "Merencanakan dan mengawasi anggaran seluruh program kerja departemen dan kegiatan organisasi.",
        "Memberikan edukasi dan sosialisasi terkait kebijakan keuangan organisasi kepada seluruh anggota dan departemen.",
      ],
      impact:
        "Membangun kepercayaan internal dan eksternal terhadap pengelolaan keuangan organisasi, yang mendukung reputasi dan kredibilitas organisasi.",
    },
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="organizations" />

      {/* Organizations Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              ORGANISASI
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Melalui pengalaman berorganisasi saya, saya telah mengambil
              berbagai peran yang telah membentuk keterampilan kepemimpinan,
              kemampuan kolaboratif, dan hasrat saya untuk berinovasi dalam
              teknologi dan desain.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {organizations.map((org, index) => (
              <div
                key={index}
                className="group bg-portfolio-navy-light rounded-2xl p-8 shadow-portfolio-card hover:shadow-portfolio-hover transition-all duration-300"
              >
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Timeline and Basic Info */}
                  <div className="lg:col-span-1">
                    <div className="relative">
                      <div className="absolute left-0 top-0 w-1 h-full bg-portfolio-orange rounded-full"></div>
                      <div className="pl-6">
                        <h3 className="text-xl lg:text-2xl font-bold text-portfolio-white mb-2 group-hover:text-portfolio-orange transition-colors">
                          {org.title}
                        </h3>
                        <p className="text-portfolio-orange font-semibold mb-2">
                          {org.position}
                        </p>
                        <p className="text-portfolio-gray text-sm mb-4">
                          {org.duration}
                        </p>
                        <div className="bg-portfolio-navy rounded-lg p-4">
                          <h4 className="text-portfolio-white font-semibold mb-2 text-sm">
                            Dampak
                          </h4>
                          <p className="text-portfolio-gray text-xs leading-relaxed">
                            {org.impact}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <div className="lg:col-span-2">
                    <h4 className="text-lg font-semibold text-portfolio-white mb-4">
                      Tugas Pokok dan Fungsi
                    </h4>
                    <ul className="space-y-3">
                      {org.description.map((responsibility, idx) => (
                        <li key={idx} className="flex items-start">
                          <div className="w-2 h-2 bg-portfolio-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                          <span className="text-portfolio-gray text-sm leading-relaxed">
                            {responsibility}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Leadership Skills */}
          <div className="mt-20">
            <div className="bg-portfolio-navy-light rounded-2xl p-8 md:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-portfolio-white text-center mb-8">
                Kepemimpinan & Keterampilan yang Dikembangkan
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-portfolio-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-portfolio-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-white mb-2">
                    Kepemimpinan Tim
                  </h3>
                  <p className="text-portfolio-gray text-sm">
                    Memimpin beragam tim, membina kolaborasi, dan mendorong
                    inovasi dalam proyek teknologi dan desain.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-portfolio-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-portfolio-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-white mb-2">
                    Inovasi
                  </h3>
                  <p className="text-portfolio-gray text-sm">
                    Memimpin inisiatif kreatif dan solusi teknologi yang
                    meningkatkan dampak organisasi.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-portfolio-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg
                      className="w-8 h-8 text-portfolio-orange"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-white mb-2">
                    Komunikasi
                  </h3>
                  <p className="text-portfolio-gray text-sm">
                    Mengembangkan keterampilan komunikasi yang kuat melalui
                    presentasi, lokakarya, dan kolaborasi lintas fungsi.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Punya Ide Proyek? Ayo Berkolaborasi!"
        description="Saya ingin membantu Anda mewujudkan visi Anda dengan menggunakan keterampilan kepemimpinan dan kolaboratif yang telah saya kembangkan melalui pengalaman berorganisasi saya."
        buttonText="Jelahi Sekarang"
        buttonUrl="/contact"
      />

      <Footer />
    </div>
  );
};

export default Organizations;
