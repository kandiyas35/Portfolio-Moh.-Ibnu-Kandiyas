import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import profileHero from '@/assets/profile-hero.jpg';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const About = () => {
  const experiences = [
    {
      title: "BEM FT 2024",
      subtitle: "Staff of the Department of Engineering, Research, and Technology",
      duration: "March 2024 - Now",
      responsibilities: [
        "Contributed to innovative research initiatives in engineering technology",
        "Collaborated with cross-functional teams to develop technological solutions",
        "Participated in academic conferences and technology workshops",
        "Supported development of engineering research methodologies"
      ]
    },
    {
      title: "UI/UX Design Freelancer",
      subtitle: "Independent Digital Designer",
      duration: "January 2023 - Present",
      responsibilities: [
        "Designed user interfaces for mobile and web applications",
        "Conducted user research and usability testing sessions",
        "Created comprehensive design systems and style guides",
        "Collaborated with development teams to ensure design implementation"
      ]
    },
    {
      title: "Student Organization Leadership",
      subtitle: "Technology Committee Head",
      duration: "September 2023 - February 2024",
      responsibilities: [
        "Led technology initiatives for student organization events",
        "Managed digital marketing and social media presence",
        "Coordinated with vendors and stakeholders for tech requirements",
        "Mentored junior members in design and technology skills"
      ]
    }
  ];

  const galleryImages = [
    project1, project2, project3, project4, profileHero, project1
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="about" />
      
      {/* About Me Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              ABOUT ME
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              A UI/UX Designer who is passionate about User Experience, User Interface, and delightful design that creates meaningful connections between users and digital products.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
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
            <div className="space-y-6">
              <h2 className="text-2xl lg:text-3xl font-bold text-portfolio-white">
                A passionate UI/UX Designer dedicated to bringing innovative ideas to life
              </h2>
              <p className="text-portfolio-gray leading-relaxed">
                With a strong foundation in user-centered design principles, I specialize in creating digital experiences that are not only visually appealing but also highly functional and accessible. My approach combines creativity with analytical thinking to solve complex design challenges.
              </p>
              <p className="text-portfolio-gray leading-relaxed">
                I believe that great design is invisible – it should feel natural and intuitive to users while achieving business objectives. Through continuous learning and staying updated with the latest design trends and technologies, I strive to deliver exceptional digital solutions that make a positive impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-20 bg-portfolio-navy-light">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-white mb-4">
              EXPERIENCE
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-portfolio-orange"></div>
              
              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-20">
                    {/* Timeline Dot */}
                    <div className="absolute left-6 w-4 h-4 bg-portfolio-orange rounded-full border-4 border-portfolio-navy-light"></div>
                    
                    <div className="bg-portfolio-navy rounded-xl p-6 shadow-portfolio-card">
                      <h3 className="text-xl font-bold text-portfolio-white mb-2">
                        {exp.title}
                      </h3>
                      <p className="text-portfolio-orange font-medium mb-2">
                        {exp.subtitle}
                      </p>
                      <p className="text-portfolio-gray text-sm mb-4">
                        {exp.duration}
                      </p>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((responsibility, idx) => (
                          <li key={idx} className="text-portfolio-gray text-sm flex items-start">
                            <span className="text-portfolio-orange mr-2 mt-1">•</span>
                            {responsibility}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Activity Gallery Section */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-portfolio-white mb-4">
              ACTIVITY GALLERY
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {galleryImages.map((image, index) => (
              <div key={index} className="aspect-square overflow-hidden rounded-xl">
                <img
                  src={image}
                  alt={`Activity ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Want to Learn More? Read Further on the Blog!"
        description="Explore my thoughts! Click the button below to see some of my work, or you can see my ideas and thoughts that I've written on my blog."
        buttonText="Explore Now"
        buttonUrl="/blogs"
      />

      <Footer />
    </div>
  );
};

export default About;