import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface HeaderProps {
  activeSection: string;
  setActiveSection: (section: string) => void;
}

export default function Header({ activeSection, setActiveSection }: HeaderProps) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string, label: string) => {
    setIsMobileMenuOpen(false);
    setActiveSection(label.toLowerCase());
    const element = document.querySelector(href);
    if (element) {
      const offset = 80; // height of fixed header
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header
      id="app-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <button
            id="logo-btn"
            onClick={() => handleNavClick('#home', 'Home')}
            className="flex min-w-0 items-center gap-2 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center border border-orange-200 shadow-sm transition-all duration-300 group-hover:scale-105">
              <span className="font-extrabold text-orange-600 text-lg">CS</span>
            </div>
            <span className="font-bold text-gray-900 text-lg sm:text-xl tracking-tight truncate">
              Cumar <span className="text-orange-500">Saciid</span>
            </span>
          </button>

          {/* Desktop Nav */}
          <nav id="desktop-nav" className="hidden md:flex items-center gap-4 lg:gap-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.label.toLowerCase();
              return (
                <button
                  key={item.label}
                  id={`nav-item-${item.label.toLowerCase()}`}
                  onClick={() => handleNavClick(item.href, item.label)}
                  className={`relative text-sm font-medium transition-colors cursor-pointer py-2 ${
                    isActive ? 'text-orange-500' : 'text-gray-600 hover:text-orange-500'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-orange-500 rounded-full" />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Desktop CTA Button */}
          <div className="hidden md:block">
            <button
              id="cta-hire-me-header"
              onClick={() => handleNavClick('#contact', 'Contact')}
              className="bg-orange-500 hover:bg-orange-600 text-white font-medium text-sm px-5 lg:px-6 py-2.5 rounded-full transition-all duration-300 shadow-md shadow-orange-500/15 hover:shadow-orange-500/25 active:scale-95 cursor-pointer"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-600 hover:text-orange-500 focus:outline-none p-2 rounded-lg hover:bg-gray-50 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div id="mobile-menu" className="md:hidden max-h-[calc(100vh-72px)] overflow-y-auto bg-white/98 backdrop-blur-md border-b border-gray-100 shadow-lg py-4 px-4 space-y-2">
          {navItems.map((item) => {
            const isActive = activeSection === item.label.toLowerCase();
            return (
              <button
                key={item.label}
                id={`mobile-nav-item-${item.label.toLowerCase()}`}
                onClick={() => handleNavClick(item.href, item.label)}
                className={`block w-full text-left px-4 py-3 rounded-xl text-base font-medium transition-all ${
                  isActive
                    ? 'bg-orange-50 text-orange-600 font-semibold border-l-4 border-orange-500'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-orange-500'
                }`}
              >
                {item.label}
              </button>
            );
          })}
          <div className="pt-2 px-4">
            <button
              id="mobile-cta-hire"
              onClick={() => handleNavClick('#contact', 'Contact')}
              className="w-full bg-orange-500 hover:bg-orange-600 text-white font-semibold text-center py-3 rounded-xl transition-all shadow-md shadow-orange-500/10 cursor-pointer"
            >
              Hire Me
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
