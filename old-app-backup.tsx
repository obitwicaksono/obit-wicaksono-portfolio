/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Mail, 
  Github, 
  Linkedin,
  ExternalLink, 
  Code, 
  BookOpen, 
  MapPin, 
  Briefcase,
  ArrowUpRight,
  Menu,
  X
} from "lucide-react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const projects = [
    { name: "react-express-og", lang: "TypeScript", url: "https://github.com/obitwicaksono/react-express-og" },
    { name: "cart-react-app", lang: "JavaScript", url: "https://github.com/obitwicaksono/cart-react-app" },
  ];

  return (
    <div className="min-h-screen max-w-7xl mx-auto px-6 py-8 md:px-12 md:py-12">
      {/* Navigation */}
      <nav className="flex justify-between items-center mb-24">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-black rounded-xl flex items-center justify-center">
            <span className="text-white font-bold text-xl">O</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
            <div className="w-1.5 h-1.5 bg-orange-400 rounded-full"></div>
            <a href="mailto:obitwicaksono@gmail.com" className="hover:text-black transition-colors">
              obitwicaksono@gmail.com
            </a>
          </div>
        </div>
        <div className="relative group">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            onMouseEnter={() => setIsMenuOpen(true)}
            className="w-12 h-12 rounded-full border border-black/5 flex items-center justify-center hover:bg-white transition-colors shadow-sm relative z-50"
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div 
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                onMouseLeave={() => setIsMenuOpen(false)}
                className="absolute right-0 top-full mt-4 w-64 bg-white border border-black/5 rounded-2xl shadow-2xl p-4 z-40 overflow-hidden"
              >
                <div className="flex flex-col gap-2">
                  <button 
                    onClick={() => scrollToSection('projects')}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover/item:bg-black group-hover/item:text-white transition-colors">
                        <Code className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">Top Projects</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover/item:text-black transition-colors" />
                  </button>

                  <button 
                    onClick={() => scrollToSection('education-experience')}
                    className="flex items-center justify-between p-3 rounded-xl hover:bg-gray-50 transition-colors text-left group/item"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-gray-100 flex items-center justify-center group-hover/item:bg-black group-hover/item:text-white transition-colors">
                        <Briefcase className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-semibold">Education & Experience</span>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover/item:text-black transition-colors" />
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>

      {/* Hero Section */}
      <motion.section 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-32"
      >
        <div className="relative inline-block mb-8">
          <motion.div 
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="w-24 h-24 rounded-3xl overflow-hidden shadow-2xl relative z-10"
          >
            <img 
              src="https://github.com/obitwicaksono.png" 
              alt="Obit Wicaksono" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <div className="absolute -inset-4 bg-black/5 blur-2xl rounded-full -z-0"></div>
        </div>

        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-bold tracking-tight mb-4">
          Hi, I'm <span className="text-black">Obit Wicaksono!</span>
        </motion.h1>
        
        <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-x-4 gap-y-2 text-4xl md:text-6xl font-bold text-gray-300 mb-8">
          <span>I'm</span>
          <span className="text-black">Passionate</span>
          <span>about</span>
          <span className="text-[#F27D26]">Software Engineering.</span>
          
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-black/5 rounded-full text-sm font-medium text-black shadow-sm ml-4">
            <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></div>
            Open to work
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col md:flex-row md:items-center gap-8">
          <div className="flex items-center gap-4">
            <a 
              href="https://linkedin.com/in/robertho-wicaksono"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-14 h-14 bg-black text-white rounded-full hover:scale-110 transition-transform shadow-xl"
              title="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://github.com/obitwicaksono"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-14 h-14 bg-white text-black border border-black/5 rounded-full hover:scale-110 transition-transform shadow-lg"
              title="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
          </div>
          <p className="text-gray-500 text-xl max-w-2xl leading-relaxed">
            A student who has a strong desire to innovate in an opportunity. I have experience in visual creative field and interested in IT industry, especially web and mobile development. I have been involved in organizations since junior high school, being a problem solver and finding innovations.
          </p>
        </motion.div>
      </motion.section>

      {/* Top Projects - Own Row */}
      <motion.div 
        id="projects"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="mb-6"
      >
        <motion.div variants={itemVariants} className="bento-card flex flex-col">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Top Projects</span>
            <Code className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
            {projects.map((project) => (
              <a 
                key={project.name}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-2xl hover:bg-gray-50 transition-colors border border-transparent hover:border-black/5"
              >
                <div>
                  <h4 className="font-semibold text-sm group-hover:text-black transition-colors">{project.name}</h4>
                  <p className="text-xs text-gray-400">{project.lang}</p>
                </div>
                <ArrowUpRight className="w-4 h-4 text-gray-300 group-hover:text-black transition-colors" />
              </a>
            ))}
          </div>
          
          <div className="mt-6 flex justify-end">
            <a 
              href="https://github.com/obitwicaksono" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm font-semibold inline-flex items-center gap-2 text-gray-400 hover:text-black transition-colors"
            >
              View all on GitHub <Github className="w-4 h-4" />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Bento Grid - Education & Experience */}
      <motion.div 
        id="education-experience"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-24"
      >
        {/* Experience / Education */}
        <motion.div variants={itemVariants} className="bento-card md:col-span-1">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Education</span>
            <Briefcase className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="space-y-8 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100">
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-white shadow-sm z-10"></div>
              <h3 className="font-bold text-lg">University of Merdeka Malang</h3>
              <p className="text-sm text-gray-500">Information System · 2023 - Present</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-gray-200 border-2 border-white shadow-sm z-10"></div>
              <h3 className="font-bold text-lg">SMAN 1 Kediri</h3>
              <p className="text-sm text-gray-500">IPA · 2020 - 2023</p>
            </div>
          </div>
        </motion.div>

        {/* Experience */}
        <motion.div variants={itemVariants} className="bento-card md:col-span-1">
          <div className="flex items-center justify-between mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-gray-400">Experience</span>
            <Briefcase className="w-4 h-4 text-gray-400" />
          </div>
          
          <div className="space-y-10 relative before:absolute before:left-[7px] before:top-2 before:bottom-2 before:w-[1px] before:bg-gray-100">
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-black border-2 border-white shadow-sm z-10"></div>
              <h3 className="font-bold text-lg">BEM FTI UNMER</h3>
              <p className="text-sm text-gray-500">Deputy Coordinator · 2024 - 2025</p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Managed social media & organized IoT webinars for FTI students.</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-gray-200 border-2 border-white shadow-sm z-10"></div>
              <h3 className="font-bold text-lg">Web Admin SIM MBKM</h3>
              <p className="text-sm text-gray-500">Internship · Oct - Dec 2024</p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Automated data entry using Python & Selenium (70% efficiency boost).</p>
            </div>
            <div className="relative pl-8">
              <div className="absolute left-0 top-1.5 w-3.5 h-3.5 rounded-full bg-gray-200 border-2 border-white shadow-sm z-10"></div>
              <h3 className="font-bold text-lg">SanberCode Bootcamp</h3>
              <p className="text-sm text-gray-500">Laravel Dev · Feb - Mar 2024</p>
              <p className="text-sm text-gray-400 mt-2 leading-relaxed">Learned Fullstack Web Dev with Laravel, PHP, and MySQL.</p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Footer */}
      <footer className="border-t border-black/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-gray-400 text-sm">
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          <span>Malang, Indonesia</span>
        </div>
        
        <div className="flex items-center gap-8">
          <a href="https://github.com/obitwicaksono" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">GitHub</a>
          <a href="https://linkedin.com/in/robertho-wicaksono" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a>
        </div>
        
        <p>© {new Date().getFullYear()} Obit Wicaksono</p>
      </footer>
    </div>
  );
}
