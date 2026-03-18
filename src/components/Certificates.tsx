"use client";

import { motion } from "framer-motion";

const certificates = [
  {
    id: 1,
    title: "NSM grunnprinsipper for IKT-sikkerhet",
    issuer: "Nasjonal sikkerhetsmyndighet (NSM)",
    date: "Oktober 2022",
    description: "Sikkerhetsmåneden 2022 - Grunnleggende IT-sikkerhetspraksiser.",
  },
  {
    id: 2,
    title: "Introduction to DevOps Course",
    issuer: "Tech Education",
    date: "Oktober 2023",
    description: "Successfully completed all course material in the Introduction to DevOps Course.",
  }
];

export default function Certificates() {
  return (
    <section className="relative bg-black text-white py-32 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-4">Sertifiseringer</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-xl">
            Kontinuerlig læring innen IT-sikkerhet og DevOps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative rounded-2xl p-8 border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-500 flex flex-col justify-between h-full"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_80px_rgba(255,255,255,0.03)] pointer-events-none rounded-2xl" />
              
              <div className="relative z-10">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-white/10 rounded-xl text-white mr-4">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1018 0 9 9 0 00-18 0z" />
                    </svg>
                  </div>
                  <span className="text-white/40 text-sm font-mono whitespace-nowrap">{cert.date}</span>
                </div>
                
                <h3 className="text-2xl font-medium mb-2">{cert.title}</h3>
                <p className="text-blue-400 text-sm font-mono uppercase tracking-widest mb-4">{cert.issuer}</p>
                <p className="text-white/60">{cert.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
