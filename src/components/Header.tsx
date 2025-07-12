import React from 'react';
import { Button } from '@/components/ui/button';
import { Instagram, Linkedin, Github } from 'lucide-react';

interface HeaderProps {
  currentPage?: string;
}

export const Header: React.FC<HeaderProps> = ({ currentPage = 'home' }) => {
  const navItems = [
    { label: 'Beranda', href: '/', key: 'home' },
    { label: 'Tentang', href: '/about', key: 'about' },
    { label: 'Proyek', href: '/projects', key: 'projects' },
    { label: 'Blog', href: '/blogs', key: 'blogs' },
    { label: 'Kontak', href: '/contact', key: 'contact' },
  ];

  const dropdownItems = [
    { label: 'Sertifikasi', href: '/certifications', key: 'certifications' },
    { label: 'Organisasi', href: '/organizations', key: 'organizations' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-portfolio-navy/95 backdrop-blur-sm border-b border-portfolio-navy-light">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="text-xl font-bold text-portfolio-white">
            <a href="/" className="hover:text-portfolio-orange transition-colors flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center text-white font-bold text-sm">
                MIK
              </div>
              <span>Moh. Ibnu Kandiyas</span>
            </a>
          </div>

          {/* Navigation */}
          <nav className="hidden lg:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-portfolio-orange ${
                  currentPage === item.key
                    ? 'text-portfolio-orange border-b-2 border-portfolio-orange pb-1'
                    : 'text-portfolio-white'
                }`}
              >
                {item.label}
              </a>
            ))}
            {/* Dropdown for additional pages */}
            <div className="relative group">
              <button className="text-sm font-medium text-portfolio-white hover:text-portfolio-orange transition-colors flex items-center">
                Lainnya
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-48 bg-portfolio-navy-light rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                {dropdownItems.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    className="block px-4 py-3 text-sm text-portfolio-white hover:text-portfolio-orange hover:bg-portfolio-navy transition-colors first:rounded-t-lg last:rounded-b-lg"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </nav>

          {/* Social Icons */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://www.instagram.com/kndyas_"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-gray hover:text-portfolio-orange transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/kandiyass"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-gray hover:text-portfolio-orange transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="https://github.com/kandiyas35"
              target="_blank"
              rel="noopener noreferrer"
              className="text-portfolio-gray hover:text-portfolio-orange transition-colors"
            >
              <Github size={20} />
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};