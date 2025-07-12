import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';

const Organizations = () => {
  const organizations = [
    {
      title: "BEM FT 2024",
      position: "Staff of the Department of Engineering, Research, and Technology",
      duration: "March 2024 - Present",
      description: [
        "Led innovative research initiatives in engineering technology and digital innovation",
        "Coordinated cross-functional teams for technology-driven projects and solutions",
        "Organized workshops and seminars on emerging technologies and design trends",
        "Collaborated with industry partners to bridge academic knowledge with real-world applications",
        "Mentored junior members in research methodologies and project management"
      ],
      impact: "Increased department engagement by 40% through innovative tech initiatives"
    },
    {
      title: "Design Student Community",
      position: "UI/UX Design Lead",
      duration: "September 2023 - February 2024",
      description: [
        "Established and led the university's first dedicated UI/UX design community",
        "Organized design workshops, critique sessions, and portfolio review meetings",
        "Facilitated collaboration between design students and computer science majors",
        "Coordinated design competitions and hackathons to foster creative innovation",
        "Built partnerships with local design agencies for student internship opportunities"
      ],
      impact: "Founded community with 150+ active members across multiple departments"
    },
    {
      title: "Technology Innovation Club",
      position: "Vice President of Creative Affairs",
      duration: "January 2023 - August 2023",
      description: [
        "Developed creative strategies for technology events and innovation showcases",
        "Managed digital marketing campaigns and social media presence across platforms",
        "Coordinated design assets and visual identity for all club activities",
        "Led creative workshops combining technology and design thinking methodologies",
        "Supervised design team responsible for event branding and promotional materials"
      ],
      impact: "Increased event attendance by 60% through strategic creative campaigns"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="organizations" />
      
      {/* Organizations Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              ORGANIZATION
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Delving through my organizational experiences, I have taken on various roles that have shaped my leadership skills, collaborative abilities, and passion for innovation in technology and design.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-12">
            {organizations.map((org, index) => (
              <div key={index} className="group bg-portfolio-navy-light rounded-2xl p-8 shadow-portfolio-card hover:shadow-portfolio-hover transition-all duration-300">
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
                          <h4 className="text-portfolio-white font-semibold mb-2 text-sm">Impact</h4>
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
                      Key Responsibilities & Achievements
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
                Leadership & Skills Developed
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-portfolio-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-portfolio-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-white mb-2">Team Leadership</h3>
                  <p className="text-portfolio-gray text-sm">
                    Led diverse teams, fostering collaboration and driving innovation in technology and design projects.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-portfolio-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-portfolio-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-white mb-2">Innovation</h3>
                  <p className="text-portfolio-gray text-sm">
                    Spearheaded creative initiatives and technological solutions that enhanced organizational impact.
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-portfolio-orange/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-portfolio-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                    </svg>
                  </div>
                  <h3 className="text-lg font-semibold text-portfolio-white mb-2">Communication</h3>
                  <p className="text-portfolio-gray text-sm">
                    Developed strong communication skills through presentations, workshops, and cross-functional collaboration.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Got a Project Idea? Let's Collaborate!"
        description="I'd love to help you bring your vision to life using the leadership and collaborative skills I've developed through my organizational experiences."
        buttonText="Explore Now"
        buttonUrl="/contact"
      />

      <Footer />
    </div>
  );
};

export default Organizations;