"use client";

import { motion } from "framer-motion";
import { FaEnvelope, FaPhone } from "react-icons/fa";

const email = "amiinismail@hotmail.com";
const phone = "45765567";
const phoneHref = "tel:45765567";

export default function Contact() {
  return (
    <section className="relative bg-black text-white pt-20 pb-12 md:pt-24 md:pb-16 px-8 border-t border-white/5 overflow-hidden">
      <motion.div
        initial={false}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-10 md:mb-14 text-center md:text-left"
        >
          <h2 className="text-4xl md:text-6xl font-medium mb-4">Contact Me</h2>
          <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto md:mx-0">
            Feel free to reach out if you&apos;d like to discuss a project, a role, or collaboration.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto md:mx-0"
        >
          <a
            href={`mailto:${email}`}
            className="group relative flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300"
          >
            <motion.div
              initial={false}
              className="shrink-0 p-3 rounded-xl bg-white/5 text-white/80 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
            >
              <FaEnvelope className="w-6 h-6" />
            </motion.div>
            <motion.div initial={false} className="min-w-0">
              <p className="text-sm text-white/50 mb-1">Email</p>
              <p className="font-medium text-white/90 group-hover:text-white transition-colors break-all">
                {email}
              </p>
            </motion.div>
          </a>

          <a
            href={phoneHref}
            className="group relative flex items-center gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/5 transition-all duration-300"
          >
            <motion.div
              initial={false}
              className="shrink-0 p-3 rounded-xl bg-white/5 text-white/80 group-hover:bg-white/10 group-hover:text-white transition-colors duration-300"
            >
              <FaPhone className="w-6 h-6" />
            </motion.div>
            <motion.div initial={false} className="min-w-0">
              <p className="text-sm text-white/50 mb-1">Phone</p>
              <p className="font-medium text-white/90 group-hover:text-white transition-colors">
                {phone}
              </p>
            </motion.div>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
