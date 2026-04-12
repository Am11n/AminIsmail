"use client";

import { motion } from "framer-motion";

type Project = {
  id: number;
  title: string;
  category: string;
  href: string;
  description: string;
  tech: string[];
  isReleased?: boolean;
};

const projects: Project[] = [
  {
    id: 1,
    title: "TeqBook",
    category: "SaaS Platform",
    href: "https://www.teqbook.com",
    isReleased: true,
    description:
      "Multi-tenant booking-SaaS for salonger: pnpm-monorepo med tre Next.js-apper (public, dashboard, admin), Supabase med RLS, Stripe, 2FA og rate limiting, 15 språk, Vitest og Playwright.",
    tech: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Radix UI",
      "Supabase",
      "Stripe",
      "pnpm",
      "Vitest",
      "Playwright",
    ],
  },
  {
    id: 2,
    title: "DocsAI",
    category: "AI Automation",
    href: "https://github.com/Am11n/DocsAI",
    description:
      "MVP for AI-drevet dokumentautomatisering: opplasting via kø, PDF-tekst og embeddings, pgvector-søk og chat med kilder. Next.js, FastAPI + Celery, Redis og Supabase/Postgres.",
    tech: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Celery",
      "Redis",
      "Supabase",
      "PostgreSQL",
      "pgvector",
    ],
  },
  {
    id: 3,
    title: "Rønningen Selskapslokale",
    category: "Website",
    href: "https://www.ronningenselskapslokale.no",
    isReleased: true,
    description:
      "Nettside for selskapslokale: Vite, React og TypeScript med React Router. Kontaktforespørsler i Supabase og e-post via Web3Forms eller FormSubmit, deploy på Vercel.",
    tech: ["Vite", "React", "TypeScript", "React Router", "Supabase"],
  },
  {
    id: 4,
    title: "Digilist",
    category: "SaaS Platform",
    href: "https://www.digilist.no",
    isReleased: true,
    description:
      "Multi-tenant Backend-as-a-Service bygget på Convex: tenant-isolasjon, RBAC, booking og ressursstyring, fakturering og compliance — konsumert av seks React-apper via et delt SDK.",
    tech: [
      "Convex",
      "React",
      "TypeScript",
      "pnpm",
      "Vitest & Playwright",
      "i18next",
      "Digdir / @xala/ds",
    ],
  },
];

export default function Projects() {
  return (
    <section className="relative bg-black text-white pt-20 pb-12 md:pt-24 md:pb-16 px-8 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 md:mb-14 flex justify-between items-end"
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
              aria-label={`${project.title}. ${project.description}`}
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative h-80 rounded-2xl overflow-hidden flex flex-col justify-end p-8 border border-white/10 bg-white/5 backdrop-blur-md hover:bg-white/10 transition-all duration-500"
            >
              {/* Subtle hover glow ring */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 shadow-[inset_0_0_100px_rgba(255,255,255,0.05)] pointer-events-none" />

              <div className="relative z-10 min-h-0 flex flex-col justify-end translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-2 shrink-0">
                  <p className="text-white/50 text-sm font-mono uppercase tracking-widest">{project.category}</p>
                  {project.isReleased && (
                    <span className="px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider text-emerald-400 bg-emerald-400/10 border border-emerald-400/20 rounded-full flex items-center justify-center translate-y-[-1px]">
                      Live
                    </span>
                  )}
                </div>
                <h3 className="text-3xl font-medium shrink-0">{project.title}</h3>

                <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
                  <div className="min-h-0 overflow-hidden">
                    <div className="pt-3 opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 ease-out delay-75">
                      <p className="text-sm text-white/70 leading-relaxed line-clamp-3 mb-3">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tag) => (
                          <span
                            key={tag}
                            className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wide text-white/80 bg-white/5 border border-white/15 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
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
