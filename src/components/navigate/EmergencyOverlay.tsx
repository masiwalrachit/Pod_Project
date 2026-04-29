import { X, Phone, ShieldAlert, Navigation, AlertTriangle } from 'lucide-react';

interface EmergencyOverlayProps {
  onClose: () => void;
}

export default function EmergencyOverlay({ onClose }: EmergencyOverlayProps) {
  return (
    <div className="fixed inset-0 z-[100] bg-[#0A0C12]/95 backdrop-blur-md flex flex-col p-4 md:p-8 animate-fade-in [color-scheme:dark]">
      {/* Header */}
      <div className="flex items-center justify-between mb-8 max-w-3xl mx-auto w-full">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-full bg-red-500/20 flex items-center justify-center animate-pulse">
            <ShieldAlert className="w-7 h-7 text-red-500" />
          </div>
          <div>
            <h2 className="text-2xl font-bold text-white">Emergency Assistance</h2>
            <p className="text-red-400 text-sm">Stay calm. Help is available.</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="p-3 bg-[#1A1D2A] rounded-full hover:bg-[#2A2D3A] transition-colors"
        >
          <X className="w-6 h-6 text-white" />
        </button>
      </div>

      <div className="flex-1 max-w-3xl mx-auto w-full flex flex-col gap-6 overflow-y-auto pb-8 scrollbar-hide">
        {/* Current Location Info */}
        <div className="bg-[#0F1118] border border-[#1A1D2A] rounded-2xl p-6 shadow-lg">
          <h3 className="text-[#F0F2F8] font-bold text-lg mb-4 flex items-center gap-2">
            <Navigation className="w-5 h-5 text-[#0D9488]" />
            Your Current Location
          </h3>
          <div className="bg-[#1A1D2A] p-5 rounded-xl border border-[#2A2D3A]">
            <p className="text-white font-mono text-xl tracking-wider mb-2">35.6895° N, 139.6917° E</p>
            <p className="text-[#F59E0B] font-medium text-lg mb-1">Shibuya City, Tokyo, Japan</p>
            <p className="text-[#3A4060] text-sm">Accuracy: within 10 meters</p>
          </div>
        </div>

        {/* Local Emergency Numbers */}
        <div className="bg-[#0F1118] border border-red-900/40 rounded-2xl p-6 shadow-lg relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
          <h3 className="text-white font-bold text-lg mb-4 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-500" />
            Local Emergency Services (Japan)
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="tel:110" className="flex items-center justify-between p-5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl transition-all hover:scale-[1.02]">
              <div>
                <p className="text-red-400 font-bold text-2xl tracking-wider">110</p>
                <p className="text-red-300 text-sm font-medium mt-1">Police</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-400 fill-red-400" />
              </div>
            </a>
            <a href="tel:119" className="flex items-center justify-between p-5 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 rounded-xl transition-all hover:scale-[1.02]">
              <div>
                <p className="text-red-400 font-bold text-2xl tracking-wider">119</p>
                <p className="text-red-300 text-sm font-medium mt-1">Fire / Ambulance</p>
              </div>
              <div className="w-12 h-12 bg-red-500/20 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-red-400 fill-red-400" />
              </div>
            </a>
          </div>
        </div>

        {/* Embassy Contacts */}
        <div className="bg-[#0F1118] border border-[#1A1D2A] rounded-2xl p-6 shadow-lg">
          <h3 className="text-[#F0F2F8] font-bold text-lg mb-4">Your Registered Embassy</h3>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-5 bg-[#1A1D2A] border border-[#2A2D3A] rounded-xl">
              <div>
                <p className="text-white font-bold text-lg mb-1">US Embassy in Tokyo</p>
                <p className="text-[#3A4060] text-sm">1-10-5 Akasaka, Minato-ku, Tokyo 107-8420</p>
              </div>
              <a href="tel:+81332245000" className="w-12 h-12 bg-[#0D9488] hover:bg-teal-500 rounded-full text-white flex items-center justify-center transition-colors shadow-[0_0_15px_rgba(13,148,136,0.3)]">
                <Phone className="w-6 h-6 fill-white" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
