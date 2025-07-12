import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { CTASection } from '@/components/CTASection';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Mobile App Design",
      description: "A comprehensive UI/UX design for a modern mobile application with intuitive user flows and engaging interactions.",
      imageUrl: project1,
      projectUrl: "/project-1"
    },
    {
      title: "Gunung Penanggungan",
      description: "Travel destination website design showcasing beautiful mountain landscapes with immersive user experience.",
      imageUrl: project2,
      projectUrl: "/project-2"
    },
    {
      title: "E-commerce Dashboard",
      description: "Analytics and data visualization dashboard design for e-commerce platform with comprehensive metrics.",
      imageUrl: project3,
      projectUrl: "/project-3"
    },
    {
      title: "Banking App Interface",
      description: "Modern fintech application design focused on security, usability, and seamless financial transactions.",
      imageUrl: project4,
      projectUrl: "/project-4"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="projects" />
      
      {/* Projects Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              PROJECT
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              The UI/UX projects that I have worked on, have been created with a strong emphasis on user satisfaction, accessibility, and modern design principles that deliver exceptional digital experiences.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
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

      {/* CTA Section */}
      <CTASection
        title="Explore My Insights and Blog"
        description="Dive into my captivating UI/UX projects and discover how my expertise in user-centric design creates seamless digital experiences that engage and delight users."
        buttonText="Go to Blog"
        buttonUrl="/blogs"
      />

      <Footer />
    </div>
  );
};

export default Projects;