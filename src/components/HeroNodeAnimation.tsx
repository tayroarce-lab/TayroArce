"use client";

import { motion } from "framer-motion";

export function HeroNodeAnimation() {
  const nodes = [
    { id: 1, x: "10%", y: "50%", delay: 0 },
    { id: 2, x: "45%", y: "20%", delay: 0.2 },
    { id: 3, x: "45%", y: "80%", delay: 0.4 },
    { id: 4, x: "85%", y: "50%", delay: 0.6 },
  ];

  const lines = [
    { id: "1-2", x1: "10%", y1: "50%", x2: "45%", y2: "20%" },
    { id: "1-3", x1: "10%", y1: "50%", x2: "45%", y2: "80%" },
    { id: "2-4", x1: "45%", y1: "20%", x2: "85%", y2: "50%" },
    { id: "3-4", x1: "45%", y1: "80%", x2: "85%", y2: "50%" },
  ];

  return (
    <div className="relative w-full max-w-[400px] h-[300px] mx-auto opacity-80 pointer-events-none">
      <svg className="absolute inset-0 w-full h-full">
        {lines.map((line, i) => (
          <motion.line
            key={line.id}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke="rgba(139, 92, 246, 0.3)" /* Violet-500 with low opacity */
            strokeWidth="1.5"
            strokeDasharray="4 4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.2, ease: "easeInOut" }}
          />
        ))}
      </svg>
      {nodes.map((node) => (
        <motion.div
          key={node.id}
          className="absolute w-12 h-12 -ml-6 -mt-6 bg-background border border-white/10 rounded-xl flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.15)]"
          style={{ left: node.x, top: node.y }}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: node.delay,
          }}
        >
          <div className="w-4 h-4 rounded-full bg-accent-light" />
        </motion.div>
      ))}
      {/* Animated pulse on the final node */}
      <motion.div
        className="absolute w-12 h-12 -ml-6 -mt-6 rounded-xl border border-accent-light/50"
        style={{ left: nodes[3].x, top: nodes[3].y }}
        animate={{ scale: [1, 1.5, 1], opacity: [1, 0, 1] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </div>
  );
}
