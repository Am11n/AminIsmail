import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="bg-black min-h-screen selection:bg-white/30 selection:text-white">
      <ScrollyCanvas>
        <Overlay />
      </ScrollyCanvas>
      <Projects />
      
      {/* Footer */}
      <footer className="bg-black text-white/40 py-12 text-center text-sm border-t border-white/10">
        <p>© {new Date().getFullYear()} Amin Ismail. All rights reserved. <span className="opacity-0 hover:opacity-100 transition-opacity">Built with Next.js, Framer Motion, and a Nano Banana 🍌</span></p>
      </footer>
    </main>
  );
}
