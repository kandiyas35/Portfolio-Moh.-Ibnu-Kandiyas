import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';

const ProjectDetail5 = () => {
  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header />
      
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
                Social Media Platform
              </h1>
              <p className="text-xl text-portfolio-gray leading-relaxed">
                Next-generation social platform design focusing on meaningful connections and community building.
              </p>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src={project1}
                alt="Social Media Platform"
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
                    This social media platform was designed to address the growing need for authentic, meaningful online connections. The project focused on creating an environment that encourages genuine interaction while combating issues like misinformation and toxic behavior.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Innovation Focus</h2>
                  <ul className="space-y-2 text-portfolio-gray">
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Algorithm transparency and user control over content feeds
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Community-driven moderation and verification systems
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Mental health-focused design patterns and features
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Privacy-first approach to user data and interactions
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Design Philosophy</h2>
                  <div className="space-y-6">
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">Human-Centered Design</h3>
                      <p className="text-portfolio-gray text-sm">
                        Prioritized human wellbeing over engagement metrics, implementing features that encourage healthy social interactions and prevent addictive usage patterns.
                      </p>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">Community Building</h3>
                      <p className="text-portfolio-gray text-sm">
                        Designed tools that help users find and build meaningful communities around shared interests and values, with robust moderation and safety features.
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
                      <span className="text-portfolio-white ml-2">20 weeks</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">My Role:</span>
                      <span className="text-portfolio-white ml-2">Principal Designer</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">Platform:</span>
                      <span className="text-portfolio-white ml-2">Web & Mobile</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="#" target="_blank">Research Report</a>
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

export default ProjectDetail5;