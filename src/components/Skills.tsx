"use client";

import { motion } from "framer-motion";
import { VscAzure } from "react-icons/vsc";
import { 
  SiNextdotjs, 
  SiReact, 
  SiTypescript,
  SiNodedotjs,
  SiDotnet,
  SiSharp,
  SiDocker,
  SiKubernetes,
  SiPostgresql,
  SiGithubactions,
  SiTailwindcss
} from "react-icons/si";

const skills = [
  { name: "Next.js", icon: SiNextdotjs, color: "text-white" },
  { name: "React", icon: SiReact, color: "text-[#61DAFB]" },
  { name: "TypeScript", icon: SiTypescript, color: "text-[#3178C6]" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-[#06B6D4]" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-[#339933]" },
  { name: ".NET", icon: SiDotnet, color: "text-[#512BD4]" },
  { name: "C#", icon: SiSharp, color: "text-[#239120]" },
  { name: "PostgreSQL", icon: SiPostgresql, color: "text-[#4169E1]" },
  { name: "Docker", icon: SiDocker, color: "text-[#2496ED]" },
  { name: "Kubernetes", icon: SiKubernetes, color: "text-[#326CE5]" },
  { name: "Azure", icon: VscAzure, color: "text-[#0078D4]" },
  { name: "GitHub Actions", icon: SiGithubactions, color: "text-[#2088FF]" },
];

export default function Skills() {
  return (
    <section className="relative bg-black text-white py-32 px-8 border-t border-white/5 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div 
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-4">Skills & Technologies</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            A selection of the tools and technologies I use to build scalable and user-friendly solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={false}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="group relative flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-[inset_0_0_80px_rgba(255,255,255,0.02)] pointer-events-none rounded-2xl" />
              
              <div className={`p-3 rounded-xl bg-white/5 group-hover:bg-white/10 transition-colors duration-300 ${skill.color}`}>
                <skill.icon className="w-8 h-8" />
              </div>
              
              <span className="font-medium text-white/80 group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
