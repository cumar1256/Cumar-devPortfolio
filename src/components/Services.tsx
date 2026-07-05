import { motion } from 'motion/react';
import { Monitor, Code2, Palette, PenTool } from 'lucide-react';
import { services } from '../data';

const iconMap: { [key: string]: any } = {
  Monitor: Monitor,
  Code2: Code2,
  Palette: Palette,
  PenTool: PenTool,
};

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-10 sm:mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            My Services
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What I Do
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-8">
          {services.map((service, index) => {
            const IconComponent = iconMap[service.icon] || Monitor;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8, transition: { duration: 0.2 } }}
                className="bg-gray-50/30 rounded-2xl border border-gray-100 p-6 sm:p-8 flex flex-col justify-between items-start hover:bg-white hover:border-orange-500/20 hover:shadow-xl hover:shadow-gray-200/40 transition-all duration-300 group"
              >
                <div className="space-y-6">
                  {/* Icon */}
                  <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shadow-sm group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                    <IconComponent className="w-5 h-5" />
                  </div>

                  {/* Title & Description */}
                  <div className="space-y-3">
                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-orange-500 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                {/* Subtle visual link/indicator */}
                <div className="mt-8 flex items-center gap-1.5 text-xs font-bold text-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span>Learn More</span>
                  <span className="text-base leading-none">→</span>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
