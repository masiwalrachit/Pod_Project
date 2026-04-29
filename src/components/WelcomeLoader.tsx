import { useEffect, useState } from 'react';
import { Plane } from 'lucide-react';

export default function WelcomeLoader() {
  const [phase, setPhase] = useState<'initial' | 'flying' | 'hiding' | 'done'>('initial');

  useEffect(() => {
    // // Check if the user has already seen the loader in this session
    // const hasSeenLoader = sessionStorage.getItem('wayfind_welcome_loader');
    // if (hasSeenLoader) {
    //   setPhase('done');
    //   return;
    // }
    // sessionStorage.setItem('wayfind_welcome_loader', 'true');

    // 1. After a brief delay, fade in text and start flying the plane
    const startFlightTimer = setTimeout(() => {
      setPhase('flying');
    }, 100);

    // 2. Wait for plane to reach the top, then start hiding the loader
    const hideTimer = setTimeout(() => {
      setPhase('hiding');
    }, 2800);

    // 3. Unmount completely after hide animation finishes
    const doneTimer = setTimeout(() => {
      setPhase('done');
    }, 3600);

    return () => {
      clearTimeout(startFlightTimer);
      clearTimeout(hideTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (phase === 'done') return null;

  return (
    <div 
      className={`fixed inset-0 z-[99999] bg-[#0A0C12] flex flex-col items-center justify-center overflow-hidden transition-all duration-[800ms] ease-in-out
        ${phase === 'hiding' ? 'opacity-0 -translate-y-20' : 'opacity-100 translate-y-0'}
      `}
    >
      {/* Background radial glow */}
      <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-800 via-[#0A0C12] to-[#0A0C12]"></div>

      {/* Main Text Container */}
      <div 
        className={`relative z-10 text-center flex flex-col items-center transition-all duration-1000 ease-out delay-200
          ${phase === 'initial' ? 'opacity-0 translate-y-8' : 'opacity-100 translate-y-0'}
        `}
      >
        <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-amber-600 tracking-tight mb-5 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
          You are off to Rome
        </h1>
        <p className="text-slate-400 text-lg md:text-2xl font-medium tracking-widest animate-pulse-soft uppercase">
          Preparing your travel intelligence
        </p>
      </div>

      {/* The Plane flying up */}
      <div 
        className="absolute left-[50%] bottom-0 flex flex-col items-center transition-transform duration-[2800ms] ease-in-out"
        style={{
          transform: `translate(-50%, ${phase === 'initial' ? '250px' : '-130vh'})`
        }}
      >
        <Plane className="w-20 h-20 text-teal-500 transform -rotate-45 drop-shadow-[0_0_25px_rgba(20,184,166,0.9)] relative z-10" />
        <div className="w-3 h-64 bg-gradient-to-b from-teal-500/80 to-transparent blur-[6px] mt-[-15px] rounded-full"></div>
      </div>
    </div>
  );
}
