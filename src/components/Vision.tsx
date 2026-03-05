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
              오프라인 비즈니스를 온라인으로 옮기고, 사용자가 접근하기 쉬운 플랫폼을 만드는 인프라 중심의 디지털 전환 단계입니다.
            </p>
            <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  <span className="font-bold text-white">Web & App Platform</span>
                </div>
                <p className="pl-4 text-gray-400 text-xs">만능형 웹 및 모바일 앱 구축</p>
              </li>
              <li>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  <span className="font-bold text-white">UI/UX Optimization</span>
                </div>
                <p className="pl-4 text-gray-400 text-xs">사용자 편의성 중심의 인터페이스 설계!</p>
              </li>
              <li>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  <span className="font-bold text-white">System Integration</span>
                </div>
                <p className="pl-4 text-gray-400 text-xs">레거시 시스템 연동 및 데이터 수집</p>
              </li>
            </ul>
          </motion.div>

          {/* Center Arrow/Indicator */}
          <div className="flex justify-center relative z-10">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 md:w-48 h-[2px] bg-gradient-to-r from-transparent via-blue-500 to-transparent -z-10" />
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-blue-600 flex items-center justify-center bg-[radial-gradient(circle_at_30%_30%,#1e3a8a,#000000_70%)] text-blue-400 font-black text-xl md:text-2xl shadow-[0_0_25px_rgba(37,99,235,0.6),inset_0_0_15px_rgba(37,99,235,0.5)] tracking-wider">
              i-PIE
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
            <h4 className="text-2xl font-bold mb-4 text-white">지능형 경험 에이전시</h4>
            <p className="text-gray-400 text-sm mb-8">
              AI를 사용하여 데이터를 분석하고 콘텐츠를 생성하며, 사용자에게 개인화된 예측형 디지털 경험을 제공하는 지능형 전환 단계입니다.
            </p>
           <ul className="space-y-4 text-gray-300 text-sm">
              <li>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  <span className="font-bold text-white">Al-Driven UX/UI</span>
                </div>
                <p className="pl-4 text-gray-400 text-xs">사용자 행동 예측 및 초개인화된 맞춤형 인터페이스</p>
              </li>
              <li>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  <span className="font-bold text-white">Generative Content</span>
                </div>
                <p className="pl-4 text-gray-400 text-xs">생성형 AI 기반의 텍스트, 이미지 등 동적 콘텐츠 생성</p>
              </li>
              <li>
                <div className="flex items-center gap-3 mb-1">
                  <div className="w-1.5 h-1.5 bg-gray-500 rounded-full" />
                  <span className="font-bold text-white">Intelligent Agent</span>
                </div>
                <p className="pl-4 text-gray-400 text-xs">자율적으로 업무와 상호작용하는 AI 에이전트 연동</p>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Core Tech Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { title: "AI Service Planning", desc: "데이터 기반의 사용자 분석을 통한 AI 서비스 기획" },
            { title: "Intelligent Platform", desc: "AI 모델을 적용한 지능형 플랫폼 구축" },
            { title: "AI Design System", desc: "AI 생성형 도구를 활용한 효율적인 UI/UX 디자인 시스템 설계" },
            { title: "Workflow AI Agents", desc: "반복적인 업무를 자동화하여 생산성 향상 및 비용 절감" }
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
