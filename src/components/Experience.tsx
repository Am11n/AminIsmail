"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Developer",
    company: "XALA TECHNOLOGIES",
    period: "05/2025 – Present",
    location: "Nesbru",
    description: [
      "Participated in technical decisions and code reviews.",
      "Worked with cloud-based services, APIs, and integrations with databases and third-party systems.",
      "Used AI tools to solve complex tasks.",
      "Involved in testing, requirements analysis, and system design."
    ]
  },
  {
    id: 2,
    role: "System Consultant",
    company: "QUESTBACK",
    period: "12/2023 – 03/2024",
    location: "Oslo",
    description: [
      "Monitored performance and availability of data systems and networks to ensure stable operations.",
      "Handled user support and resolved IT-related problems and inquiries.",
      "Contributed to the installation, configuration, and maintenance of servers, network devices, and infrastructure.",
      "Implemented basic security practices and operational reliability via patching."
    ]
  },
  {
    id: 3,
    role: "Application Analyst",
    company: "CENTIFIC",
    period: "01/2023 – 11/2024",
    location: "Remote",
    description: [
      "Tested and optimized internal systems for performance and security.",
      "Contributed to the development and maintenance of backend features.",
      "Participated in the documentation and improvement of development processes."
    ]
  }
];

export default function Experience() {
  return (
    <section className="relative bg-black text-white py-32 px-8 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 md:mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-4">Experience</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-xl">
            My professional journey in software development, system architecture, and operations.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={false}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="relative pl-8 md:pl-0 border-l border-white/10 md:border-none"
            >
              <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                
                <div className="mb-4 md:mb-0 md:col-span-1 text-white/50 text-sm font-mono mt-1">
                  {exp.period}
                  <div className="mt-1 text-white/30">{exp.location}</div>
                </div>

                <div className="md:col-span-3">
                  <h3 className="text-2xl font-medium mb-1">{exp.role}</h3>
                  <p className="text-blue-400 mb-4 font-medium uppercase tracking-wider text-sm">{exp.company}</p>
                  
                  <ul className="space-y-2 text-white/70">
                    {exp.description.map((item, i) => (
                      <li key={i} className="flex relative">
                        <span className="absolute -left-6 top-2 w-1.5 h-1.5 bg-white/20 rounded-full md:hidden" />
                        <span className="mr-3 text-white/30 hidden md:inline-block">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
