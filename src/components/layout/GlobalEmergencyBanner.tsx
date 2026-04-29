import { useState } from 'react';
import { AlertTriangle, Info, X } from 'lucide-react';

export default function GlobalEmergencyBanner() {
  const [isActive, setIsActive] = useState(false);

  return (
    <>
      {/* Dev Simulation Trigger */}
      <button 
        onClick={() => setIsActive(!isActive)}
        className="fixed bottom-4 left-4 z-[9999] bg-slate-800 text-white px-3 py-2 rounded-xl shadow-lg opacity-50 hover:opacity-100 flex items-center gap-2 text-xs font-bold transition-all border border-slate-600 hover:bg-slate-700"
        title="Simulate Global Emergency"
      >
        <AlertTriangle className="w-4 h-4 text-red-400" />
        SIMULATE ALERT
      </button>

      {/* Flashing Banner */}
      {isActive && (
        <div className="fixed top-0 left-0 w-full z-[9999] bg-red-600 text-white shadow-2xl animate-pulse">
          <div className="flex items-center justify-between px-4 py-3 max-w-7xl mx-auto">
            <div className="flex items-center gap-3">
              <div className="animate-bounce mt-1">
                <AlertTriangle className="w-6 h-6 md:w-8 md:h-8" />
              </div>
              <div>
                <p className="font-extrabold text-sm md:text-lg tracking-wide">EMERGENCY ALERT: Tsunami Warning for Coastal Regions</p>
                <p className="text-red-100 text-xs md:text-sm font-medium">Seek higher ground immediately. Do not wait for official evacuation orders.</p>
              </div>
            </div>
            <div className="flex items-center gap-4 flex-shrink-0">
              <button className="hidden md:flex items-center gap-1.5 bg-white text-red-600 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-50 transition-colors shadow-sm">
                <Info className="w-4 h-4" />
                More Info & Map
              </button>
              <button onClick={() => setIsActive(false)} className="p-2 hover:bg-red-700 rounded-lg transition-colors">
                <X className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
