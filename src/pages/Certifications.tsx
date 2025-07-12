import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const Certifications = () => {
  const certificates = [
    {
      title: "Figmalion UI/UX Project Course: Design 2 Apps and Get Job Ready",
      description: "Learn Figma: UI/UX Design Masterclass From Beginner to Pro",
      imageUrl: project1,
      issuer: "Design Academy",
      date: "December 2024",
      credentialId: "FA-2024-001"
    },
    {
      title: "Google UX Design Professional Certificate",
      description: "Comprehensive program covering user research, prototyping, and design thinking methodologies",
      imageUrl: project2,
      issuer: "Google Career Certificates",
      date: "November 2024",
      credentialId: "GUX-2024-789"
    },
    {
      title: "Adobe Certified Expert - Photoshop",
      description: "Advanced certification in Adobe Photoshop for digital design and photo manipulation",
      imageUrl: project3,
      issuer: "Adobe",
      date: "October 2024",
      credentialId: "ACE-PS-2024"
    },
    {
      title: "Human-Computer Interaction Certification",
      description: "Understanding user behavior, interaction design, and usability testing principles",
      imageUrl: project4,
      issuer: "HCI Institute",
      date: "September 2024",
      credentialId: "HCI-2024-456"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="certifications" />
      
      {/* Certifications Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              CERTIFICATE
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Explore my certifications section to see the professional development milestones that have enhanced my expertise in UI/UX design and digital product development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, index) => (
              <div key={index} className="group bg-portfolio-navy-light rounded-xl overflow-hidden shadow-portfolio-card hover:shadow-portfolio-hover transition-all duration-300 hover:-translate-y-2">
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
                      <svg className="w-3 h-3 text-portfolio-navy" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
                Continuous Learning Journey
              </h2>
              <p className="text-portfolio-gray mb-8 max-w-3xl mx-auto leading-relaxed">
                I believe in lifelong learning and staying updated with the latest trends and technologies in UI/UX design. These certifications represent my commitment to professional growth and delivering excellence in every project.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">15+</div>
                  <div className="text-portfolio-gray text-sm">Courses Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">500+</div>
                  <div className="text-portfolio-gray text-sm">Hours of Learning</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">8</div>
                  <div className="text-portfolio-gray text-sm">Certifications</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-portfolio-orange mb-2">3</div>
                  <div className="text-portfolio-gray text-sm">Years Experience</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Got a Project Idea? Let's Collaborate!"
        description="I'd love to help you bring your vision to life using my certified skills and expertise in UI/UX design and digital product development."
        buttonText="Explore Now"
        buttonUrl="/contact"
      />

      <Footer />
    </div>
  );
};

export default Certifications;