"use client";

import { motion } from "framer-motion";

const education = [
  {
    id: 1,
    degree: "Computer Engineer – Embedded Systems",
    university: "University of South-Eastern Norway (USN)",
    period: "08/2019 – 06/2022",
    description: "Bachelor's degree focusing on embedded systems, software engineering, and system integration."
  },
  {
    id: 2,
    degree: "Mechanical Engineer – Product Developer",
    university: "University of South-Eastern Norway (USN)",
    period: "08/2015 – 06/2019",
    description: "Bachelor's degree with a focus on product design, mechanical systems, and engineering principles."
  }
];

export default function Education() {
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
          <h2 className="text-4xl md:text-6xl font-medium mb-4">Education</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-xl">
            My academic background bridging mechanical engineering and computer science.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
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
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  </div>
                  <span className="text-white/40 text-sm font-mono whitespace-nowrap">{edu.period}</span>
                </div>
                
                <h3 className="text-2xl font-medium mb-2">{edu.degree}</h3>
                <p className="text-blue-400 text-sm font-mono uppercase tracking-widest mb-4">{edu.university}</p>
                <p className="text-white/60">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
