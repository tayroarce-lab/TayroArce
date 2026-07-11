"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="py-24 border-t border-white/5 bg-white/[0.01]">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-12"
        >
          {dict.about.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-12 items-start">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="md:col-span-1 relative aspect-square rounded-2xl overflow-hidden border border-white/10"
          >
            <Image 
              src="/profile.png" 
              alt="Tayro Arce - Profile Picture" 
              fill 
              className="object-cover" 
              priority
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="md:col-span-2 space-y-6 text-foreground/80 leading-relaxed text-lg"
          >
            <p>{dict.about.text}</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
