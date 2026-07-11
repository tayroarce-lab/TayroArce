"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";

export function Navbar() {
  const { dict, language, setLanguage } = useLanguage();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between text-sm font-medium">
        <a href="#" className="text-foreground hover:text-accent-light transition-colors">
          Tayro Arce
        </a>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6 text-foreground/70">
            <a href="#projects" className="hover:text-foreground transition-colors">{dict.projects.title}</a>
            <a href="#education" className="hover:text-foreground transition-colors">{dict.education.title}</a>
            <a href="#about" className="hover:text-foreground transition-colors">{dict.about.title}</a>
            <a href="#skills" className="hover:text-foreground transition-colors">{dict.skills.title}</a>
            <a href="#contact" className="hover:text-foreground transition-colors">{dict.contact.title}</a>
          </div>
          
          <button
            onClick={() => setLanguage(language === "en" ? "es" : "en")}
            className="px-2 py-1 rounded-md bg-white/5 hover:bg-white/10 transition-colors text-xs font-mono text-foreground/80"
          >
            {language === "en" ? "EN" : "ES"}
          </button>
        </div>
      </div>
    </nav>
  );
}
