import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Mission from './components/Mission';
import Vision from './components/Vision';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BackgroundSphere from './components/BackgroundSphere';

export default function App() {
  return (
    <div className="bg-[#050a0f] min-h-screen text-white font-sans selection:bg-blue-500/30 relative">
      <BackgroundSphere />
      <main className="relative z-10">
        <Hero />
        <Mission />
        <Vision />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
