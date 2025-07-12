import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import project3 from '@/assets/project-3.jpg';

const ProjectDetail3 = () => {
  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header />
      
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
                E-commerce Dashboard
              </h1>
              <p className="text-xl text-portfolio-gray leading-relaxed">
                Analytics and data visualization dashboard design for e-commerce platform with comprehensive metrics.
              </p>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src={project3}
                alt="E-commerce Dashboard"
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
                    This e-commerce dashboard was designed to help business owners make data-driven decisions through clear visualization of key performance metrics. The challenge was to present complex analytics in an intuitive, actionable format that serves both technical and non-technical users.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Key Features</h2>
                  <ul className="space-y-2 text-portfolio-gray">
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Real-time sales analytics with customizable date ranges
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Interactive charts and graphs for trend analysis
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Customer behavior insights and segmentation
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Inventory management with automated alerts
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Design Challenges</h2>
                  <div className="space-y-6">
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">Information Hierarchy</h3>
                      <p className="text-portfolio-gray text-sm">
                        Balanced the need to display comprehensive data while maintaining a clean, scannable interface. Used progressive disclosure and smart defaults to reduce cognitive load.
                      </p>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">Data Visualization</h3>
                      <p className="text-portfolio-gray text-sm">
                        Selected appropriate chart types for different data sets and ensured accessibility through color choices and alternative text descriptions.
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
                      <span className="text-portfolio-white ml-2">10 weeks</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">My Role:</span>
                      <span className="text-portfolio-white ml-2">Senior UI/UX Designer</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">Platform:</span>
                      <span className="text-portfolio-white ml-2">Web Application</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="#" target="_blank">View Prototype</a>
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

export default ProjectDetail3;