import { motion } from 'motion/react';
import { Github, Linkedin, Dribbble, Palette, Music2, ArrowUpRight, Download } from 'lucide-react';
import { personalInfo } from '../data';
import profileImg from '../assets/images/omar.jpeg';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: 'spring', stiffness: 100, damping: 15 }
    }
  };

  const handleHireMeClick = () => {
    const element = document.querySelector('#contact');
    if (element) {
      const offset = 80;
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
    <section
      id="home"
      className="relative min-h-screen pt-24 sm:pt-28 pb-14 sm:pb-16 flex items-center overflow-hidden bg-gradient-to-b from-gray-50/50 via-white to-gray-50/20"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-1/4 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-orange-100/30 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-10 left-0 sm:left-10 w-56 h-56 sm:w-72 sm:h-72 bg-blue-50/50 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Hero Text */}
          <motion.div
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-block">
              <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full text-sm font-semibold bg-orange-50 text-orange-600 border border-orange-100/70 shadow-sm">
                👋 Hello, I'm
              </span>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight"
            >
              Cumar <span className="text-orange-500">Saciid</span>
            </motion.h1>

            {/* Subheading */}
            <motion.h2
              variants={itemVariants}
              className="text-lg sm:text-2xl font-bold text-gray-800"
            >
              {personalInfo.title}
            </motion.h2>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-gray-500 max-w-xl mx-auto lg:mx-0 text-sm sm:text-lg leading-relaxed"
            >
              {personalInfo.bio}
            </motion.p>

            {/* Socials */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-2"
            >
              <a
                href={personalInfo.socials.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-500/40 hover:bg-orange-50/10 transition-all duration-300 hover:scale-110"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-500/40 hover:bg-orange-50/10 transition-all duration-300 hover:scale-110"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.tiktok}
                target="_blank"
                rel="noreferrer"
                aria-label="TikTok"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-500/40 hover:bg-orange-50/10 transition-all duration-300 hover:scale-110"
              >
                <Music2 className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.behance}
                target="_blank"
                rel="noreferrer"
                aria-label="Behance"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-500/40 hover:bg-orange-50/10 transition-all duration-300 hover:scale-110"
              >
                <Palette className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.socials.dribbble}
                target="_blank"
                rel="noreferrer"
                aria-label="Dribbble"
                className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:text-orange-500 hover:border-orange-500/40 hover:bg-orange-50/10 transition-all duration-300 hover:scale-110"
              >
                <Dribbble className="w-5 h-5" />
              </a>
            </motion.div>

            {/* Actions */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <button
                onClick={handleHireMeClick}
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white font-semibold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-orange-500/15 hover:shadow-orange-500/25 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
              >
                Hire Me <ArrowUpRight className="w-5 h-5" />
              </button>
              <a
                href="#"
                onClick={(e) => e.preventDefault()}
                className="w-full sm:w-auto bg-white hover:bg-gray-50 text-gray-800 font-semibold px-8 py-3.5 rounded-xl flex items-center justify-center gap-2 border border-gray-200 shadow-sm hover:shadow hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
              >
                Download CV <Download className="w-5 h-5" />
              </a>
            </motion.div>
          </motion.div>

          {/* Hero Image Graphic */}
          <div className="lg:col-span-5 flex justify-center items-center relative mt-8 lg:mt-0">
            {/* Background circular framing exactly like the screenshot */}
            <div className="relative w-[min(82vw,320px)] aspect-square sm:w-[400px] md:w-[460px] lg:w-[480px]">
              
              {/* Giant backdrop circle border decoration */}
              <div className="absolute inset-0 rounded-full border-2 border-dashed border-orange-200/50 -z-10 animate-[spin_100s_linear_infinite]" />
              
              {/* Colored backdrop arc */}
              <div className="absolute inset-4 rounded-full bg-slate-50 border border-gray-100 shadow-inner -z-10" />

              {/* Dot patterns (orange and grey grids) matching the screenshot */}
              <div className="absolute -right-2 top-1/4 grid grid-cols-4 gap-2 -z-10">
                {Array.from({ length: 16 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-orange-400/40" />
                ))}
              </div>
              
              <div className="absolute -left-4 bottom-1/4 grid grid-cols-3 gap-2 -z-10">
                {Array.from({ length: 9 }).map((_, i) => (
                  <div key={i} className="w-1.5 h-1.5 rounded-full bg-slate-300/60" />
                ))}
              </div>

              {/* Portrait image wrapped in styled circle matching design */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: 'spring', duration: 1, delay: 0.3 }}
                className="w-full h-full rounded-full overflow-hidden border-4 sm:border-8 border-white shadow-xl relative"
              >
                <img
                  src={profileImg}
                  alt="Cumar Saciid"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </motion.div>

              {/* Mini tag or accent */}
              <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 sm:left-auto sm:right-1/4 sm:translate-x-0 bg-white px-3 sm:px-4 py-2 rounded-2xl shadow-lg border border-gray-100 flex items-center gap-1.5 whitespace-nowrap animate-bounce">
                <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse" />
                <span className="text-xs font-bold text-gray-800">Available to Work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
