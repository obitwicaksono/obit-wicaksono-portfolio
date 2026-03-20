import { useParams, Link } from "react-router-dom";
import { motion } from "motion/react";
import { ArrowLeft, Code, Github, Figma } from "lucide-react";
import { projects } from "../data/projects";

export default function ProjectDetail() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-6">
        <h1 className="text-4xl font-bold">Project not found</h1>
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F9F8]">
      {/* Back Button - Fixed */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="fixed top-8 left-8 z-50"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-white/80 backdrop-blur-md border border-black/5 shadow-lg hover:shadow-xl hover:bg-white transition-all text-sm font-semibold text-gray-700 hover:text-black"
        >
          <ArrowLeft className="w-4 h-4" />
          Back
        </Link>
      </motion.div>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 md:px-12 pt-32 relative z-10 pb-24">
        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap gap-2 mb-6"
        >
          {project.tech.map((t) => (
            <span
              key={t}
              className="text-xs font-semibold px-4 py-1.5 rounded-full bg-black text-white shadow-md"
            >
              {t}
            </span>
          ))}
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6"
        >
          {project.name}
        </motion.h1>

        {/* Short Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="text-lg md:text-xl text-gray-400 mb-12 leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="h-px bg-black/10 mb-12 origin-left"
        />

        {/* Detail Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-6">
            About This Project
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed mb-16">
            {project.detail}
          </p>

          {/* Gallery Section */}
          {project.gallery && project.gallery.length > 0 && (
            <div className="mt-12">
              <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-8">
                Project Showcase
              </h2>
              {/* Flex/Grid container for mobile mockups */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
                {project.gallery.map((imgSrc, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.8 + idx * 0.1 }}
                    className="relative w-full max-w-[280px] aspect-[9/19.5] rounded-[38px] shadow-2xl border-4 border-gray-900 bg-black overflow-hidden hover:scale-[1.02] transition-transform duration-300"
                  >
                    {/* Inner bezel simulation */}
                    <div className="absolute inset-0 border-[6px] border-black rounded-[34px] z-10 pointer-events-none" />

                    <img
                      src={imgSrc}
                      alt={`${project.name} UI ${idx + 1}`}
                      className="w-full h-full object-cover bg-gray-100"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = "none";
                      }}
                    />

                    {/* Fallback pattern when empty */}
                    <div className="absolute inset-0 -z-10 flex items-center justify-center bg-gray-100">
                      <Code className="w-8 h-8 text-gray-300" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Project Footer Links */}
          {(project.githubUrl || project.figmaUrl) && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-24 pt-12 border-t border-gray-100 flex flex-col items-center text-center"
            >
              <h3 className="text-2xl font-bold mb-3 tracking-tight">Explore the Project</h3>
              <p className="text-gray-500 mb-8 max-w-md">Menyelam lebih dalam ke dalam kerangka kode atau struktur desain aslinya.</p>

              <div className="flex flex-wrap justify-center gap-4">
                {project.githubUrl && (
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3.5 bg-gray-900 text-white rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 shadow-sm">
                    <Github className="w-5 h-5" />
                    Buka Repo GitHub
                  </a>
                )}
                {project.figmaUrl && (
                  <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 px-6 py-3.5 border border-gray-200 text-gray-800 hover:text-black rounded-full font-medium hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-sm bg-white">
                    <Figma className="w-5 h-5 shrink-0 text-pink-500" />
                    Lihat Desain Figma
                  </a>
                )}
              </div>
            </motion.div>
          )}

        </motion.div>
      </div>
    </div>
  );
}
