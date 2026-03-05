import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';

export default function WireframeSphere({ className = "", stretchRange = [1, 1.5] }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  const scaleY = useTransform(scrollYProgress, [0, 1], stretchRange);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.3, 1, 0.3]);

  return (
    <motion.div
      ref={ref}
      className={`relative rounded-full ${className}`}
      style={{
        perspective: '1000px',
        scaleY,
        opacity
      }}
    >
      <motion.div
        className="absolute inset-0"
        style={{ transformStyle: 'preserve-3d' }}
        animate={{ rotateY: 360, rotateX: 180 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      >
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={`y-${i}`}
            className="absolute inset-0 border border-blue-500/20 rounded-full"
            style={{ transform: `rotateY(${i * 5}deg)` }}
          />
        ))}
        {Array.from({ length: 36 }).map((_, i) => (
          <div
            key={`x-${i}`}
            className="absolute inset-0 border border-blue-500/20 rounded-full"
            style={{ transform: `rotateX(${i * 5}deg)` }}
          />
        ))}
      </motion.div>
      {/* Inner Glow */}
      <div className="absolute inset-0 bg-blue-600/20 blur-[80px] rounded-full" />
    </motion.div>
  );
}
