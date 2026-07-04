import { Github, Linkedin, Dribbble, Palette, ChevronUp } from 'lucide-react';
import { personalInfo } from '../data';

export default function Footer() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Footer Top */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-12 border-b border-slate-900">
          
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-orange-500 flex items-center justify-center shadow-sm">
              <span className="font-extrabold text-white text-lg">CS</span>
            </div>
            <span className="font-bold text-white text-xl tracking-tight">
              Cumar <span className="text-orange-500">Saciid</span>
            </span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 hover:scale-110"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.behance}
              target="_blank"
              rel="noreferrer"
              aria-label="Behance"
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 hover:scale-110"
            >
              <Palette className="w-4 h-4" />
            </a>
            <a
              href={personalInfo.socials.dribbble}
              target="_blank"
              rel="noreferrer"
              aria-label="Dribbble"
              className="w-10 h-10 rounded-full border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-slate-700 hover:bg-slate-900 transition-all duration-300 hover:scale-110"
            >
              <Dribbble className="w-4 h-4" />
            </a>
          </div>

          {/* Scroll to Top */}
          <button
            onClick={handleScrollToTop}
            aria-label="Scroll to top"
            className="group flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-400 hover:text-orange-500 transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <div className="w-8 h-8 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-300">
              <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </button>

        </div>

        {/* Footer Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
          <div>
            &copy; {new Date().getFullYear()} Cumar Saciid. All rights reserved.
          </div>
          <div className="flex items-center gap-6">
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" onClick={(e) => e.preventDefault()} className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
