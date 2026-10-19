"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  const { dict } = useLanguage();

  return (
    <section id="experience" className="py-24 border-t border-white/5 bg-background">
      <div className="max-w-5xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-accent font-mono text-sm mb-3">{"// "}{dict.experience.title.toLowerCase()}</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">{dict.experience.title}</h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-white/10 hidden md:block" />

          <div className="flex flex-col gap-8">
            {dict.experience.items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="md:pl-14 relative"
              >
                {/* Timeline dot */}
                <div className="hidden md:flex absolute left-0 top-5 w-8 h-8 rounded-full bg-accent/10 border border-accent/30 items-center justify-center">
                  <Briefcase className="w-4 h-4 text-accent" />
                </div>

                {/* Card */}
                <div className="bg-white/3 border border-white/8 rounded-2xl p-6 hover:border-white/15 transition-colors group">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-3">
                    <div>
                      <h3 className="font-semibold text-lg tracking-tight group-hover:text-accent transition-colors">
                        {item.role}
                      </h3>
                      <p className="text-foreground/50 text-sm font-mono mt-0.5">{item.company}</p>
                    </div>
                    <div className="flex items-center gap-1.5 text-foreground/40 text-xs font-mono shrink-0">
                      <Calendar className="w-3 h-3" />
                      {item.period}
                    </div>
                  </div>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
