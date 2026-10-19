"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { motion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";

const GithubIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c3-.3 6-1.5 6-6.5a5.5 5.5 0 0 0-1.5-3.8 5.5 5.5 0 0 0-.1-3.8s-1.2-.4-3.9 1.4a13.3 13.3 0 0 0-7 0C6.2 1.4 5 1.8 5 1.8a5.5 5.5 0 0 0-.1 3.8A5.5 5.5 0 0 0 3 9.5c0 5 3 6.2 6 6.5a4.8 4.8 0 0 0-1 3.2v4"></path>
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
    <rect width="4" height="12" x="2" y="9"></rect>
    <circle cx="4" cy="4" r="2"></circle>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path>
    <path d="m10 15 5-3-5-3z"></path>
  </svg>
);

const socialLinkClass = "p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-foreground/80 hover:text-foreground";

export function Contact() {
  const { dict } = useLanguage();

  return (
    <section id="contact" className="py-24 border-t border-white/5 bg-background relative overflow-hidden">
      {/* Subtle bottom glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-accent/10 rounded-t-full blur-[100px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold tracking-tight mb-6"
        >
          {dict.contact.cta1}
        </motion.h2>
        
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-foreground/60 text-lg mb-12"
        >
          {dict.contact.cta2}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${dict.contact.email}`}
            className="flex items-center gap-2 bg-foreground text-background px-8 py-4 rounded-full font-medium hover:bg-foreground/90 transition-all hover:scale-105 active:scale-95"
          >
            <Mail className="w-5 h-5" />
            {dict.contact.email}
          </a>
          
          <div className="flex items-center gap-4 mt-6 sm:mt-0 sm:ml-4">
            <a 
              href="https://github.com/tayroarce-lab" 
              target="_blank" 
              rel="noreferrer"
              className="p-4 bg-white/5 border border-white/10 rounded-full hover:bg-white/10 transition-colors text-foreground/80 hover:text-foreground"
            >
              <GithubIcon className="w-5 h-5" />
              <span className="sr-only">GitHub</span>
            </a>
            <a
              href="https://www.linkedin.com/in/tayro-arce-b0a686372"
              target="_blank"
              rel="noreferrer"
              className={socialLinkClass}
            >
              <LinkedinIcon className="w-5 h-5" />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://www.youtube.com/@TayroArce"
              target="_blank"
              rel="noreferrer"
              className={socialLinkClass}
            >
              <YoutubeIcon className="w-5 h-5" />
              <span className="sr-only">YouTube</span>
            </a>
          </div>
        </motion.div>
      </div>
      
      <div className="max-w-5xl mx-auto px-6 mt-32 flex flex-col md:flex-row items-center justify-between text-sm text-foreground/40 font-mono">
        <p>© {new Date().getFullYear()} Tayro Arce.</p>
        <p className="mt-2 md:mt-0">Reach me at <a href="mailto:tayroarce@gmail.com" className="hover:text-foreground transition-colors">tayroarce@gmail.com</a></p>
      </div>
    </section>
  );
}
