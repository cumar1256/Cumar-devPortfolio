import { motion } from 'motion/react';
import { Code2, Palette, Cpu, Atom, Wind, PenTool } from 'lucide-react';
import { skills } from '../data';

const iconMap: { [key: string]: any } = {
  Html5Icon: Code2,
  Css3Icon: Palette,
  JsIcon: Cpu,
  ReactIcon: Atom,
  TailwindIcon: Wind,
  FigmaIcon: PenTool,
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-xl mx-auto mb-16 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
            My Skills
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            My Expertise
          </h2>
          <div className="w-16 h-1 bg-orange-500 rounded-full mx-auto mt-4" />
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col justify-between items-center shadow-sm shadow-gray-100 hover:shadow-md hover:border-orange-500/20 transition-all group"
              >
                {/* Skill Icon */}
                <div className="w-14 h-14 rounded-2xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shadow-inner group-hover:scale-110 transition-transform duration-300">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* Skill Name */}
                <div className="text-center mt-6 mb-4">
                  <span className="block font-bold text-gray-800 text-sm tracking-tight">
                    {skill.name}
                  </span>
                </div>

                {/* Progress Bar & Percentage */}
                <div className="w-full space-y-1.5">
                  <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden relative">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: 0.2 }}
                      className="absolute top-0 bottom-0 left-0 bg-orange-500 rounded-full"
                    />
                  </div>
                  <div className="flex justify-between text-[10px] font-mono font-bold text-gray-400">
                    <span>PROGRESS</span>
                    <span className="text-orange-600">{skill.level}%</span>
                  </div>
                </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
