import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { CTASection } from '@/components/CTASection';
import { Button } from '@/components/ui/button';
import project1 from '@/assets/project-1.jpg';
import project2 from '@/assets/project-2.jpg';
import project3 from '@/assets/project-3.jpg';

const Blogs = () => {
  const blogPosts = [
    {
      title: "The Future of UI/UX Design: Trends to Watch in 2024",
      description: "Exploring emerging design trends, AI integration, and how user expectations are evolving in the digital landscape.",
      imageUrl: project1,
      date: "20 Jan 2025",
      readTime: "5 min read",
      category: "Design Trends"
    },
    {
      title: "Creating Accessible Design: A Designer's Guide",
      description: "Learn the fundamental principles of accessibility in design and how to create inclusive digital experiences for all users.",
      imageUrl: project2,
      date: "15 Jan 2025",
      readTime: "8 min read",
      category: "Accessibility"
    },
    {
      title: "From Figma to Production: A Seamless Design Handoff",
      description: "Best practices for collaborating with developers and ensuring your designs are implemented exactly as intended.",
      imageUrl: project3,
      date: "10 Jan 2025",
      readTime: "6 min read",
      category: "Workflow"
    }
  ];

  return (
    <div className="min-h-screen bg-portfolio-navy">
      <Header currentPage="blogs" />
      
      {/* Blogs Section */}
      <section className="pt-24 pb-16">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl lg:text-5xl font-bold text-portfolio-white mb-6">
              BLOGS
            </h1>
            <p className="text-xl text-portfolio-gray max-w-4xl mx-auto leading-relaxed">
              Welcome to my blog, where I share insights, experiences, and thoughts on UI/UX design, technology trends, and the creative process behind digital product development.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="group bg-portfolio-navy-light rounded-xl overflow-hidden shadow-portfolio-card hover:shadow-portfolio-hover transition-all duration-300 hover:-translate-y-2">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-medium text-portfolio-orange bg-portfolio-orange/10 px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="text-xs text-portfolio-gray">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-portfolio-white mb-3 group-hover:text-portfolio-orange transition-colors line-clamp-2">
                    {post.title}
                  </h2>
                  <p className="text-portfolio-gray text-sm mb-4 leading-relaxed line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-portfolio-gray">
                      {post.date}
                    </span>
                    <Button variant="outline" size="sm">
                      Explore Now
                    </Button>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Featured Article */}
          <div className="mt-16">
            <div className="bg-portfolio-navy-light rounded-2xl overflow-hidden shadow-portfolio-card">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="aspect-video lg:aspect-auto">
                  <img
                    src={project1}
                    alt="Featured Article"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="mb-4">
                    <span className="text-sm font-medium text-portfolio-orange bg-portfolio-orange/10 px-3 py-1 rounded-full">
                      Featured Article
                    </span>
                  </div>
                  <h2 className="text-2xl lg:text-3xl font-bold text-portfolio-white mb-4">
                    Building a Design System from Scratch
                  </h2>
                  <p className="text-portfolio-gray mb-6 leading-relaxed">
                    A comprehensive guide on creating scalable design systems that grow with your product and team. Learn about component libraries, design tokens, and documentation best practices.
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-portfolio-gray">
                      25 Jan 2025 • 12 min read
                    </span>
                    <Button>
                      Read Full Article
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        title="Got a Project Idea? Let's Collaborate!"
        description="I'd love to help you bring your vision to life. Whether it's a mobile app, website, or digital product, let's create something amazing together."
        buttonText="Explore Now"
        buttonUrl="/contact"
      />

      <Footer />
    </div>
  );
};

export default Blogs;