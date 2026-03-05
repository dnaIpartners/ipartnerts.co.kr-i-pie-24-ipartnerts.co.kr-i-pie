import { motion, useScroll, useTransform, MotionValue } from 'motion/react';
import { useRef } from 'react';

const Character = ({ children, progress, range }: { children: React.ReactNode, progress: MotionValue<number>, range: [number, number] }) => {
  const color = useTransform(progress, range, ["#001641", "#FFFFFF"]);
  return (
    <motion.span style={{ color }}>
      {children}
    </motion.span>
  );
};

export default function Mission() {
  const textRef = useRef<HTMLHeadingElement>(null);
  const { scrollYProgress } = useScroll({
    target: textRef,
    offset: ["start 90%", "end 50%"]
  });

  const text = "아이파트너즈의 AX는\n 사람을 줄이지 않고키웁니다.\n전 구성원을 '비즈니스 아키텍트'로\n성장시켜 흔들림 없는 프로젝트\n품질을 완성합니다.";
  const characters = text.split("");

  return (
    <section className="relative py-32 px-6 md:px-20 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] -z-10" />
      
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-blue-450 text-sm font-bold tracking-widest uppercase mb-4 block">Our Mission</span>
          <h2 ref={textRef} className="text-4xl md:text-6xl font-bold leading-tight mb-8">
            {characters.map((char, i) => {
              const start = i / characters.length;
              const end = start + (1 / characters.length);
              if (char === '\n') {
                return <br key={i} />;
              }
              return (
                <Character key={i} progress={scrollYProgress} range={[start, end]}>
                  {char}
                </Character>
              );
            })}
          </h2>
          <p className="text-white-400 max-w-4xl leading-relaxed text-lg font-Regular">
            기술형 에이전시를 넘어, AI를 도입하여 업무 단계를 자동화하고 생산성을 극대화합니다. <br className="hidden md:block" />
            이를 통해 축적된 역량은 품질에 집중하여, 고객의 비즈니스 가치를 극대화하는 파트너로 성장합니다. <br className="hidden md:block" />
            아이파트너즈는 새로운 기술과 트렌드를 빠르게 받아들이고, 고객의 비즈니스 혁신을 이끌어갑니다.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
