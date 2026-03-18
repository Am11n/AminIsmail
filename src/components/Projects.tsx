"use client";

import { motion } from "framer-motion";

const projects = [
  { id: 1, title: "TeqBook", category: "SaaS Platform", href: "https://www.teqbook.com" },
  { id: 2, title: "DocsAI", category: "AI Automation", href: "https://github.com/Am11n/DocsAI" },
  { id: 3, title: "Digiskjema", category: "Web Application", href: "https://github.com/Am11n/digiskjema" },
  { id: 4, title: "Saudi Real Estate", category: "Real Estate Platform", href: "https://github.com/Am11n/saudi-real-estate-main" }
];

export default function Projects() {
  return (
    <section className="relative min-h-screen bg-black text-white py-32 px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex justify-between items-end"
        >
          <div>
            <h2 className="text-4xl md:text-6xl font-medium mb-4">Selected Work</h2>
            <p className="text-white/60 text-lg md:text-xl max-w-xl">
              A collection of digital experiences that blend aesthetic design with performant engineering.
            </p>
          </div>
          
          {/* A NanoBanana cheeky detail */}
          <div className="hidden md:flex items-center gap-2 group cursor-pointer text-white/30 hover:text-yellow-400 transition-colors duration-300">
            <span className="text-sm font-mono tracking-wider opacity-0 group-hover:opacity-100 transition-opacity">nano banana mode</span>
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:animate-bounce">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z" />
            </svg>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a
              href={project.href}
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden flex flex-col justify-end p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500"
            >
              {/* Subtle hover glow ring */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_100px_rgba(255,255,255,0.05)] pointer-events-none" />
              
              <div className="relative z-10 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-white/50 text-sm mb-2 font-mono uppercase tracking-widest">{project.category}</p>
                <h3 className="text-3xl font-medium">{project.title}</h3>
              </div>

              {/* Arrow icon that animates in */}
              <div className="absolute top-8 right-8 opacity-0 -translate-x-4 translate-y-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-500 text-white/50 group-hover:text-white">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
