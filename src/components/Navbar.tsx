import { motion } from 'motion/react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 py-6 bg-black/50 backdrop-blur-md border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 bg-blue-600 rounded-full" />
        <span className="text-xl font-bold tracking-widest text-white uppercase">Partners Inc.</span>
      </div>
      
     
    </motion.nav>
  );
}
