import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Certificates from "@/components/Certificates";
import Skills from "@/components/Skills";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-white/30 selection:text-white">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      
      <Skills />
      <Experience />
      <Certificates />
      <Projects />
      
      {/* Footer */}
      <footer className="bg-black text-white py-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-white/40 text-sm">
            © {new Date().getFullYear()} Amin Ismail. All rights reserved. <span className="opacity-0 hover:opacity-100 transition-opacity">🍌</span>
          </p>
          
          <div className="flex items-center gap-6">
            <a 
              href="https://github.com/Am11n" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-white transition-colors flex items-center gap-2"
            >
              <FaGithub className="w-5 h-5" />
              <span className="text-sm font-medium">GitHub</span>
            </a>
            <a 
              href="https://www.linkedin.com/in/amin-ismail-moh/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white/40 hover:text-[#0A66C2] transition-colors flex items-center gap-2"
            >
              <FaLinkedin className="w-5 h-5" />
              <span className="text-sm font-medium">LinkedIn</span>
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
