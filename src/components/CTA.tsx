import { motion } from 'motion/react';

export default function CTA() {
  return (
    <section id="cta-section" className="relative min-h-screen flex flex-col items-center justify-center py-32 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center z-10 px-6"
      >
        <h2 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight drop-shadow-lg">
          Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0033FF]">i-PIE?</span>
        </h2>
        <p className="text-xl text-white-300 mb-12 max-w-2xl mx-auto font-light drop-shadow-md">
          아이파트너즈와 함께 새로운 디지털 경험을 만들어 갈 준비가 되셨나요.
        </p>
        <button className="px-10 py-4 text-sm font-bold tracking-widest text-black uppercase bg-white rounded-full hover:bg-blue-50 hover:scale-105 transition-all duration-300 shadow-[0_0_40px_rgba(255,255,255,0.3)]">
         ai.ipartners.co.kr
        </button>
      </motion.div>
    </section>
  );
}
