import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    // Simulate sphere binding time (approx 1.5s for the intro animation)
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  const text1 = "AI는 사람을 대신하는 것이 아니라,";
  const text2 = "역량을 한 단계 위로";
  const text3 = "끌어올리는 것입니다.";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      }
    }
  };

  const charVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 overflow-hidden">
      <div className="text-center z-10 max-w-5xl px-6">
        <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-8 drop-shadow-lg min-h-[200px]">
          {isReady && (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]">
                {text1.split('').map((char, index) => (
                  <motion.span key={`t1-${index}`} variants={charVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
              <div className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0033FF]">
                {text2.split('').map((char, index) => (
                  <motion.span key={`t2-${index}`} variants={charVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
              <div className="block text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]">
                {text3.split('').map((char, index) => (
                  <motion.span key={`t3-${index}`} variants={charVariants} className="inline-block">
                    {char === ' ' ? '\u00A0' : char}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          )}
        </h1>
        {isReady && (
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="text-lg md:text-xl text-white-300 text-transparent bg-clip-text bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF]"
          >
            1년차가 5년차의 시야를 갖고, 5년차가 10년차의 깊이를 갖습니다.
          </motion.p>
        )}
      </div>
    </section>
  );
}
