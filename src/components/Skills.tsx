"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Code2, Server, Bot } from "lucide-react";

export function Skills() {
  const { dict } = useLanguage();

  const columns = [
    {
      title: dict.skills.col1_title,
      items: dict.skills.col1_items,
      icon: <Code2 className="w-5 h-5 text-accent-light" />,
      delay: 0.1
    },
    {
      title: dict.skills.col2_title,
      items: dict.skills.col2_items,
      icon: <Server className="w-5 h-5 text-accent-light" />,
      delay: 0.2
    },
    {
      title: dict.skills.col3_title,
      items: dict.skills.col3_items,
      icon: <Bot className="w-5 h-5 text-accent-light" />,
      delay: 0.3
    }
  ];

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative">
      <div className="max-w-5xl mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold tracking-tight mb-12"
        >
          {dict.skills.title}
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-6">
          {columns.map((col, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: col.delay }}
              className="bg-white/[0.02] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.03] transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent/10 rounded-lg">
                  {col.icon}
                </div>
                <h3 className="font-semibold text-lg tracking-tight">{col.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {col.items.map((skill, i) => (
                  <span 
                    key={i}
                    className="px-3 py-1.5 text-sm font-medium bg-background border border-white/5 rounded-md text-foreground/80 shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
