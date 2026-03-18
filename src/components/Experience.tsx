"use client";

import { motion } from "framer-motion";

const experiences = [
  {
    id: 1,
    role: "Utvikler",
    company: "XALA TECHNOLOGIES",
    period: "05/2025 – Nå",
    location: "Asker",
    description: [
      "Deltok i tekniske valg og kodegjennomganger.",
      "Jobbet med skybaserte tjenester, API-er og integrasjoner mot databaser og tredjepartssystemer.",
      "Brukt AI verktøy for å løse komplekse oppgaver.",
      "Involvert i testing, kravanalyse og systemdesign."
    ]
  },
  {
    id: 2,
    role: "System Konsulent",
    company: "QUESTBACK",
    period: "12/2023 – 03/2024",
    location: "Oslo",
    description: [
      "Overvåket ytelse og tilgjengelighet på datasystemer og nettverk for å sikre stabil drift.",
      "Håndterte brukerstøtte og løste IT-relaterte problemer og henvendelser.",
      "Bidro til installasjon, konfigurasjon og vedlikehold av servere, nettverksenheter og infrastruktur.",
      "Implementerte grunnleggende sikkerhetspraksiser og driftssikkerhet via patching."
    ]
  },
  {
    id: 3,
    role: "Applikasjon Analytiker",
    company: "CENTIFIC",
    period: "01/2023 – 11/2024",
    location: "Remote",
    description: [
      "Testet og optimaliserte interne systemer for ytelse og sikkerhet.",
      "Bidro til utvikling og vedlikehold av backend-funksjoner.",
      "Deltok i dokumentasjon og forbedring av utviklingsprosesser."
    ]
  }
];

export default function Experience() {
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
          <h2 className="text-4xl md:text-6xl font-medium mb-4">Erfaring</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-xl">
            Min profesjonelle reise innen programvareutvikling, systemarkitektur og drift.
          </p>
        </motion.div>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -30 }}
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
