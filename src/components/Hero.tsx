"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { HeroNodeAnimation } from "./HeroNodeAnimation";
import { motion } from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";

export function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-12 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/20 rounded-full blur-[120px] pointer-events-none opacity-50" />

      <div className="max-w-5xl mx-auto px-6 w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
        <div className="flex flex-col items-start gap-6">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-accent-light font-mono text-sm tracking-wider"
          >
            {dict.hero.eyebrow}
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.1]"
          >
            {dict.hero.headline}
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 text-lg md:text-xl max-w-lg leading-relaxed"
          >
            {dict.hero.subheadline}
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap items-center gap-4 mt-4"
          >
            <a
              href="#projects"
              className="flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-md font-medium hover:bg-foreground/90 transition-colors"
            >
              {dict.hero.ctaWork}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="/cv.pdf"
              target="_blank"
              className="flex items-center gap-2 bg-white/5 border border-white/10 text-foreground px-6 py-3 rounded-md font-medium hover:bg-white/10 transition-colors"
            >
              <FileText className="w-4 h-4" />
              {dict.hero.ctaCv}
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative"
        >
          <HeroNodeAnimation />
        </motion.div>
      </div>
    </section>
  );
}
