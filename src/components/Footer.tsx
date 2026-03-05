import { ArrowUpRight, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#f2f2f2] text-black pt-24 pb-8 relative z-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-16">
          READY TO GROW TOGETHER?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-32">
          {/* Left Column - Image */}
          <div className="w-full aspect-[4/3] relative overflow-hidden bg-gray-200">
            <img 
              src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
              alt="IPARTNERS Building" 
              className="object-cover w-full h-full"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Right Column - Info */}
          <div className="flex flex-col justify-between">
            <div className="space-y-8">
              <a href="#" className="flex items-center gap-2 text-4xl md:text-5xl font-bold hover:opacity-70 transition-opacity w-fit group">
                <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span className="underline decoration-4 underline-offset-8">CONTACT US</span>
              </a>
              <a href="#" className="flex items-center gap-2 text-4xl md:text-5xl font-bold hover:opacity-70 transition-opacity w-fit group">
                <ArrowUpRight className="w-8 h-8 md:w-10 md:h-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                <span className="underline decoration-4 underline-offset-8">CAREERS</span>
              </a>
            </div>
            
            <div className="space-y-10 mt-16 md:mt-0">
              <div>
                <p className="text-xs font-bold mb-2 tracking-widest">[INFORMATION]</p>
                <p className="font-bold text-lg">T. 02-2017-2501</p>
              </div>
              
              <div>
                <p className="text-xs font-bold mb-2 tracking-widest">[PROJECT REQUEST]</p>
                <p className="font-bold text-lg">E. IPASALES@IPARTNERS.CO.KR</p>
                <p className="font-bold text-lg">T. 02-2017-2513</p>
              </div>
              
              <div>
                <p className="text-xs font-bold mb-2 tracking-widest">[MARKETING REQUEST]</p>
                <p className="font-bold text-lg">E. IPAMARKETING@IPARTNERS.CO.KR</p>
                <p className="font-bold text-lg">T. 02-2017-2510</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="flex justify-between items-end border-b border-black/20 pb-4 mb-4">
          <p className="text-xs font-bold tracking-wider">ALL CONTENT ©IPARTNERS 2026</p>
          <button 
            onClick={scrollToTop}
            className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5" />
          </button>
        </div>
        
        {/* Huge Text */}
        <div className="w-full overflow-hidden flex justify-center">
          <h1 className="text-[16vw] font-black tracking-tighter leading-none -mb-[4vw] -mt-[2vw]">
            IPΛRTNERS
          </h1>
        </div>
      </div>
    </footer>
  );
}
