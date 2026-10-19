"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";

export function Projects() {
  const { dict } = useLanguage();

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-3"
        >
          {dict.projects.title}
        </motion.h2>
        <p className="text-foreground/50 text-sm mb-12">{dict.projects.privateNote}</p>

        <div className="grid gap-6 md:grid-cols-2">
          {dict.projects.items.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (index % 2) * 0.1 }}
              className="group bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.04] transition-colors relative overflow-hidden flex flex-col h-full"
            >
              <div className="mb-4">
                <span className="text-xs font-mono text-accent-light tracking-wider uppercase mb-2 block">
                  {project.type}
                </span>
                <h3 className="text-xl font-semibold tracking-tight group-hover:text-accent-light transition-colors">
                  {project.title}
                </h3>
                {project.note && (
                  <span className="inline-block mt-2 px-2 py-0.5 text-[11px] font-medium rounded-full bg-accent/10 border border-accent/20 text-accent-light">
                    {project.note}
                  </span>
                )}
              </div>

              <p className="text-foreground/70 text-sm leading-relaxed mb-6 flex-grow">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mt-auto">
                {project.stack.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2.5 py-1 text-xs font-medium bg-white/5 border border-white/5 rounded-md text-foreground/80"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.links.length > 0 && (
                <div className="flex flex-wrap gap-4 mt-5 pt-4 border-t border-white/5">
                  {project.links.map((link) => (
                    <a
                      key={link.url}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-sm text-accent-light hover:text-foreground transition-colors"
                    >
                      {link.label}
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
