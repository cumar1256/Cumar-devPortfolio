import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data';

export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Design', 'Frontend Development', 'Graphic Design', 'Logo Design'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <section id="portfolio" className="py-14 sm:py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-12 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            My Portfolio
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Selected Works
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Category Filters */}
        <div className="-mx-4 sm:mx-0 mb-10 sm:mb-12 overflow-x-auto px-4 sm:px-0">
          <div className="flex w-max min-w-full sm:w-auto sm:min-w-0 sm:flex-wrap justify-start sm:justify-center items-center gap-2 pb-1">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`shrink-0 px-4 sm:px-5 py-2.5 rounded-full text-xs sm:text-sm font-semibold transition-all duration-300 cursor-pointer ${
                selectedCategory === category
                  ? 'bg-orange-500 text-white shadow-md shadow-orange-500/15'
                  : 'bg-white text-gray-600 hover:text-orange-500 hover:bg-orange-50/20 border border-gray-100'
              }`}
            >
              {category}
            </button>
          ))}
          </div>
        </div>

        {/* Grid Container */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="bg-white rounded-2xl sm:rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col justify-between"
              >
                {/* Project Image Container */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
                    <a
                      href={project.demoUrl}
                      onClick={(e) => { if (project.demoUrl === '#') e.preventDefault(); }}
                      className="w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg"
                      title="Live Demo"
                    >
                      <ExternalLink className="w-5 h-5" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="w-11 h-11 rounded-full bg-white text-slate-900 flex items-center justify-center hover:bg-orange-500 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 duration-300 shadow-lg delay-75"
                        title="Source Code"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Info Area */}
                <div className="p-5 sm:p-6 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold text-orange-500 uppercase tracking-widest bg-orange-50 px-2.5 py-1 rounded-full inline-block">
                      {project.category}
                    </span>
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono font-medium text-gray-400 bg-gray-50 border border-gray-100 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20 text-gray-400">
            No projects found in this category.
          </div>
        )}

      </div>
    </section>
  );
}
