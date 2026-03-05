import { motion } from 'motion/react';

export default function Vision() {
  return (
    <section className="relative py-32 px-6 md:px-20 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24 relative"
        >
          <span className="text-blue-400 text-sm font-bold tracking-widest uppercase mb-4 block">Our Vision</span>
          <h2 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-lg">
            From <span className="text-gray-400">Web Agency</span> to <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00A3FF] to-[#0033FF]">AI Partner</span>
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto drop-shadow-md">
            성공적인 AI 전환을 위해서는 단순한 기술 도입을 넘어, 비즈니스 모델 혁신이 필요하며,<br className="hidden md:block" /> AI 파트너로서 함께 하겠습니다.
          </p>
        </motion.div>

        {/* Comparison Section */}
        <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center mb-32">
          {/* Left Card */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl"
          >
            <h3 className="text-gray-400 text-sm font-bold mb-2">기존 에이전시 업무 방식</h3>
            <h4 className="text-2xl font-bold mb-4 text-white">구축 중심의 에이전시</h4>
            <p className="text-gray-400 text-sm mb-8">
              인력 중심의 노동 집약적 업무 방식은 프로젝트의 품질과 생산성에 한계를 가질 수밖에 없습니다.
            </p>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                As-Is App Platform
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                Siloed Database
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                System Integration
              </li>
            </ul>
          </motion.div>

          {/* Center Arrow/Indicator */}
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full border border-blue-500/30 flex items-center justify-center bg-blue-500/10 text-blue-400 font-bold text-sm shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              AI 전환
            </div>
          </div>

          {/* Right Area */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass-card p-10 rounded-3xl border-blue-500/30 bg-blue-900/10"
          >
             <h3 className="text-blue-400 text-sm font-bold mb-2">AI 파트너 업무 방식</h3>
            <h4 className="text-2xl font-bold mb-4 text-white">가치 중심의 AI 파트너</h4>
            <p className="text-gray-400 text-sm mb-8">
              AI 기술을 활용한 자동화와 지능화로 프로젝트의 품질을 높이고 새로운 비즈니스 가치를 창출합니다.
            </p>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Intelligent Platform
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                Unified Data Lake
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                AI-Driven Automation
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AI Service Planning", desc: "데이터 기반의 사용자 분석을 통한 AI 서비스 기획" },
            { title: "Intelligent Platform", desc: "머신러닝과 딥러닝 모델을 적용한 지능형 플랫폼 구축" },
            { title: "AI Design System", desc: "AI 생성형 디자인 도구를 활용한 효율적인 UI/UX 설계" },
            { title: "Workflow Automation", desc: "반복적인 업무를 자동화하여 생산성 향상 및 비용 절감" }
          ].map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass-card p-8 rounded-2xl hover:bg-white/5 transition-colors group cursor-pointer"
            >
              <div className="w-2 h-2 bg-blue-500 rounded-full mb-6 group-hover:scale-150 transition-transform" />
              <h5 className="text-lg font-bold mb-3 text-white">{card.title}</h5>
              <p className="text-sm text-gray-400 leading-relaxed">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
