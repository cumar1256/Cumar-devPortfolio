import { motion } from 'motion/react';
import { MapPin, GraduationCap, Briefcase, Clock } from 'lucide-react';
import { personalInfo } from '../data';
import profileImg from '../assets/images/omar.jpeg';

export default function About() {
  const infoCards = [
    {
      id: 'location',
      label: 'Location',
      value: personalInfo.location,
      icon: MapPin,
    },
    {
      id: 'education',
      label: 'Education',
      value: personalInfo.education,
      icon: GraduationCap,
    },
    {
      id: 'experience',
      label: 'Experience',
      value: `${personalInfo.experienceYears}+ Years`,
      icon: Briefcase,
    },
    {
      id: 'availability',
      label: 'Availability',
      value: personalInfo.availability,
      icon: Clock,
    },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Photo with Experience Badge */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6 }}
              className="relative w-full max-w-[380px] aspect-[3/4] rounded-[2rem] overflow-hidden shadow-xl shadow-gray-200/50 group"
            >
              <img
                src={profileImg}
                alt="Cumar Saciid Portrait"
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay Badge exactly like screenshot */}
              <div className="absolute bottom-6 left-6 right-6 bg-orange-500/95 backdrop-blur-sm text-white p-5 rounded-2xl flex items-center gap-4 border border-orange-400/30 shadow-lg shadow-orange-500/20">
                <div className="text-4xl font-extrabold tracking-tight">2+</div>
                <div className="text-sm font-semibold leading-tight text-orange-50">
                  Years<br />Experience
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Info Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 space-y-6"
          >
            {/* About Me Label */}
            <div className="space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-orange-500">
                About Me
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
                Building digital experiences that make a difference
              </h2>
            </div>

            {/* Separator Line */}
            <div className="w-16 h-1 bg-orange-500 rounded-full" />

            {/* Descriptions */}
            <div className="space-y-4 text-gray-600 leading-relaxed text-base sm:text-lg">
              <p>{personalInfo.detailedBio}</p>
              <p>{personalInfo.experienceSummary}</p>
            </div>

            {/* Info Cards Grid (2x2) */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {infoCards.map((card) => {
                const IconComponent = card.icon;
                return (
                  <div
                    key={card.id}
                    className="flex items-center gap-4 p-4 bg-gray-50/50 hover:bg-gray-50 rounded-2xl border border-gray-100 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-orange-50 border border-orange-100/50 flex items-center justify-center text-orange-600 shrink-0 shadow-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="block text-xs font-semibold text-gray-400 uppercase tracking-wider">
                        {card.label}
                      </span>
                      <span className="block text-base font-bold text-gray-800">
                        {card.value}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
