import React from 'react';
import { Button } from '@/components/ui/button';

interface ProjectCardProps {
  title: string;
  description: string;
  imageUrl: string;
  projectUrl?: string;
  isExternal?: boolean;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  imageUrl,
  projectUrl = '#',
  isExternal = false
}) => {
  return (
    <div className="group bg-portfolio-navy-light rounded-xl overflow-hidden shadow-portfolio-card hover:shadow-portfolio-hover transition-all duration-300 hover:-translate-y-2">
      <div className="aspect-video overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-portfolio-white mb-3 group-hover:text-portfolio-orange transition-colors">
          {title}
        </h3>
        <p className="text-portfolio-gray text-sm mb-4 leading-relaxed">
          {description}
        </p>
        <Button variant="outline" size="sm" asChild>
          <a 
            href={projectUrl} 
            target={isExternal ? "_blank" : "_self"}
            rel={isExternal ? "noopener noreferrer" : undefined}
          >
            Lihat Proyek
          </a>
        </Button>
      </div>
    </div>
  );
};