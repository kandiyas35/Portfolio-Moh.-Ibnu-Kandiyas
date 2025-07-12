import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';

const ProjectDetail1 = () => {
  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header />
      
      {/* Project Hero */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
                Mobile App Design
              </h1>
              <p className="text-xl text-portfolio-gray leading-relaxed">
                A comprehensive UI/UX design for a modern mobile application with intuitive user flows and engaging interactions.
              </p>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src={project1}
                alt="Mobile App Design"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Project Details */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Overview</h2>
                  <p className="text-portfolio-gray leading-relaxed">
                    This mobile application design project focused on creating an intuitive and engaging user experience for a fitness tracking platform. The challenge was to design an interface that would motivate users to maintain their fitness goals while providing comprehensive tracking capabilities in a clean, accessible format.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Goals</h2>
                  <ul className="space-y-2 text-portfolio-gray">
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Create an intuitive interface that encourages daily app usage
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Design comprehensive tracking features without overwhelming users
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Implement motivational elements to support user fitness goals
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Ensure accessibility across different user demographics
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Design Process</h2>
                  <div className="space-y-6">
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">1. Research & Discovery</h3>
                      <p className="text-portfolio-gray text-sm">
                        Conducted user interviews with 25 fitness enthusiasts to understand pain points and motivations. Analyzed competitor apps and identified opportunities for innovation.
                      </p>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">2. Wireframing & Prototyping</h3>
                      <p className="text-portfolio-gray text-sm">
                        Created low-fidelity wireframes focusing on user flow optimization. Developed interactive prototypes using Figma to validate design concepts with stakeholders.
                      </p>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">3. Visual Design & Testing</h3>
                      <p className="text-portfolio-gray text-sm">
                        Applied modern design principles with accessibility in mind. Conducted usability testing with target users and iteratively refined the interface based on feedback.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Results & Impact</h2>
                  <p className="text-portfolio-gray leading-relaxed mb-4">
                    The final design resulted in a 40% increase in daily active users during beta testing. User feedback highlighted the intuitive navigation and motivational design elements as key factors in their continued app usage.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-portfolio-navy-light rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-portfolio-orange mb-1">40%</div>
                      <div className="text-portfolio-gray text-sm">Increase in DAU</div>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-portfolio-orange mb-1">95%</div>
                      <div className="text-portfolio-gray text-sm">User Satisfaction</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <div className="bg-portfolio-navy-light rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-portfolio-white mb-4">Project Details</h3>
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="text-portfolio-gray">Duration:</span>
                      <span className="text-portfolio-white ml-2">8 weeks</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">Team Size:</span>
                      <span className="text-portfolio-white ml-2">4 members</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">My Role:</span>
                      <span className="text-portfolio-white ml-2">Lead UI/UX Designer</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">Platform:</span>
                      <span className="text-portfolio-white ml-2">iOS & Android</span>
                    </div>
                  </div>
                </div>

                <div className="bg-portfolio-navy-light rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-portfolio-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Principle', 'InVision', 'Sketch', 'Adobe XD'].map((tech) => (
                      <span key={tech} className="bg-portfolio-orange/10 text-portfolio-orange px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="#" target="_blank">Live Demo</a>
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

export default ProjectDetail1;