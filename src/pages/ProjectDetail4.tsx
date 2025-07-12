import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import project4 from '@/assets/project-4.jpg';

const ProjectDetail4 = () => {
  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header />
      
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
                Banking App Interface
              </h1>
              <p className="text-xl text-portfolio-gray leading-relaxed">
                Modern fintech application design focused on security, usability, and seamless financial transactions.
              </p>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src={project4}
                alt="Banking App Interface"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Overview</h2>
                  <p className="text-portfolio-gray leading-relaxed">
                    A comprehensive banking application designed to provide users with secure, intuitive access to their financial services. The project emphasized trust-building through design while maintaining the highest standards of security and regulatory compliance.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Security & Trust</h2>
                  <ul className="space-y-2 text-portfolio-gray">
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Biometric authentication integration for enhanced security
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Clear visual indicators for secure transactions
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Transparent fee structures and transaction history
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Real-time fraud detection alerts and notifications
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Design Process</h2>
                  <div className="space-y-6">
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">Security-First Design</h3>
                      <p className="text-portfolio-gray text-sm">
                        Collaborated with security experts to ensure all design decisions aligned with banking regulations and security best practices while maintaining user-friendly interactions.
                      </p>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">Trust Building</h3>
                      <p className="text-portfolio-gray text-sm">
                        Implemented design patterns that build user confidence through clear communication, consistent branding, and transparent interaction feedback.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-portfolio-navy-light rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-portfolio-white mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-portfolio-gray">Duration:</span>
                      <span className="text-portfolio-white ml-2">16 weeks</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">My Role:</span>
                      <span className="text-portfolio-white ml-2">Lead Product Designer</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">Platform:</span>
                      <span className="text-portfolio-white ml-2">iOS & Android</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="#" target="_blank">Case Study</a>
                  </Button>
                  <Button variant="outline" className="w-full" asChild>
                    <a href="/projects">Back to Projects</a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProjectDetail4;