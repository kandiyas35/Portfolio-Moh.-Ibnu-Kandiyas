import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import project2 from '@/assets/project-2.jpg';

const ProjectDetail2 = () => {
  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header />
      
      {/* Project Hero */}
      <section className="pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
                Gunung Penanggungan
              </h1>
              <p className="text-xl text-portfolio-gray leading-relaxed">
                Travel destination website design showcasing beautiful mountain landscapes with immersive user experience.
              </p>
            </div>
            
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12">
              <img
                src={project2}
                alt="Gunung Penanggungan Website"
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
                    Gunung Penanggungan is a travel destination website that showcases one of Indonesia's most beautiful mountains. The project aimed to create an immersive digital experience that captures the natural beauty and cultural significance of this sacred mountain while providing practical information for visitors and hikers.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Goals</h2>
                  <ul className="space-y-2 text-portfolio-gray">
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Create an immersive visual experience showcasing mountain beauty
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Provide comprehensive travel and hiking information
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Promote local culture and heritage awareness
                    </li>
                    <li className="flex items-start">
                      <span className="text-portfolio-orange mr-2 mt-1">•</span>
                      Encourage responsible and sustainable tourism
                    </li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Design Process</h2>
                  <div className="space-y-6">
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">1. Cultural Research</h3>
                      <p className="text-portfolio-gray text-sm">
                        Conducted extensive research on the mountain's cultural significance, local traditions, and historical importance. Interviewed local guides and community leaders to understand authentic storytelling approaches.
                      </p>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">2. Visual Strategy</h3>
                      <p className="text-portfolio-gray text-sm">
                        Developed a visual language that combines stunning landscape photography with traditional Indonesian design elements. Created a responsive design system that adapts beautifully across all devices.
                      </p>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-6">
                      <h3 className="text-lg font-semibold text-portfolio-orange mb-2">3. User Journey Mapping</h3>
                      <p className="text-portfolio-gray text-sm">
                        Mapped out visitor journeys from inspiration to trip planning. Integrated practical features like trail maps, weather information, and local accommodation booking capabilities.
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-bold text-portfolio-white mb-4">Results & Impact</h2>
                  <p className="text-portfolio-gray leading-relaxed mb-4">
                    The website successfully increased tourism awareness while promoting sustainable travel practices. Local tourism operators reported a 60% increase in inquiries after the website launch, with visitors specifically mentioning the site's comprehensive information and inspiring visuals.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-portfolio-navy-light rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-portfolio-orange mb-1">60%</div>
                      <div className="text-portfolio-gray text-sm">Tourism Inquiries</div>
                    </div>
                    <div className="bg-portfolio-navy-light rounded-xl p-4 text-center">
                      <div className="text-2xl font-bold text-portfolio-orange mb-1">85%</div>
                      <div className="text-portfolio-gray text-sm">User Engagement</div>
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
                      <span className="text-portfolio-white ml-2">12 weeks</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">Team Size:</span>
                      <span className="text-portfolio-white ml-2">6 members</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">My Role:</span>
                      <span className="text-portfolio-white ml-2">UI/UX Designer & Researcher</span>
                    </div>
                    <div>
                      <span className="text-portfolio-gray">Platform:</span>
                      <span className="text-portfolio-white ml-2">Responsive Web</span>
                    </div>
                  </div>
                </div>

                <div className="bg-portfolio-navy-light rounded-xl p-6">
                  <h3 className="text-lg font-semibold text-portfolio-white mb-4">Technologies Used</h3>
                  <div className="flex flex-wrap gap-2">
                    {['Figma', 'Adobe Photoshop', 'Webflow', 'Google Maps API', 'Unsplash'].map((tech) => (
                      <span key={tech} className="bg-portfolio-orange/10 text-portfolio-orange px-3 py-1 rounded-full text-xs">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <Button className="w-full" asChild>
                    <a href="#" target="_blank">Visit Website</a>
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

export default ProjectDetail2;