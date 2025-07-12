import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProjectCard } from '@/components/ProjectCard';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import profileHero from '@/assets/profile-hero.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const Index = () => {
  const featuredProjects = [
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

  const skills = [
    { name: "Visual Studio Code", icon: "💻" },
    { name: "Figma", icon: "🎨" },
    { name: "Python", icon: "🐍" },
    { name: "HTML5", icon: "🌐" },
    { name: "CSS3", icon: "💅" }
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="home" />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-hero">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-portfolio-white mb-6 leading-tight">
                I am a <span className="text-portfolio-orange underline decoration-4 underline-offset-8">UI/UX Designer</span> with a strong interest in designing seamless and delightful digital products.
              </h1>
              <p className="text-xl text-portfolio-gray mb-8 leading-relaxed">
                Hi, I'm Moh. Ibnu Kondiyasa, I'm dedicated to designing seamless and delightful digital products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" asChild>
                  <a href="/contact">Hire Me</a>
                </Button>
                <Button variant="secondary" size="lg" asChild>
                  <a href="/cv/mohibnukondiyasa_cv.pdf" target="_blank">Download CV</a>
                </Button>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-portfolio-orange/20 rounded-full blur-3xl"></div>
                <img
                  src={profileHero}
                  alt="Moh. Ibnu Kondiyasa"
                  className="relative rounded-2xl shadow-2xl w-80 h-96 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-white mb-4">
              FEATURED PROJECTS
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
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

      {/* Skills Section */}
      <section className="py-16 bg-portfolio-navy-light">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-portfolio-white text-center mb-12">
            Tools I Use
          </h2>
          <div className="flex flex-wrap justify-center gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="flex flex-col items-center p-6 bg-portfolio-navy rounded-xl hover:bg-portfolio-navy/80 transition-colors group cursor-pointer"
              >
                <span className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                  {skill.icon}
                </span>
                <span className="text-portfolio-gray group-hover:text-portfolio-white transition-colors text-sm">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Dive deeper into my professional journey!"
        description="My portfolio awaits your exploration, showcasing a range of projects and experiences that have shaped me."
        buttonText="Explore Now"
        buttonUrl="/about"
      />

      <Footer />
    </div>
  );
};

export default Index;
