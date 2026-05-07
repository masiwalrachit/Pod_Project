import { useState } from 'react';
import { X, Phone, ShieldAlert, Navigation, AlertTriangle, PhoneOff } from 'lucide-react';

interface EmergencyOverlayProps {
  onClose: () => void;
}

export default function EmergencyOverlay({ onClose }: EmergencyOverlayProps) {
  const [callingNumber, setCallingNumber] = useState<{number: string, name: string} | null>(null);

  if (callingNumber) {
    return (
      <div className="fixed inset-0 z-[1000] bg-slate-900/80 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-fade-in">
        <div className="bg-white rounded-[2rem] p-8 flex flex-col items-center max-w-sm w-full shadow-2xl border border-slate-100">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-red-500/20 rounded-full animate-ping"></div>
            <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center relative z-10">
              <Phone className="w-10 h-10 text-red-600 fill-red-600" />
            </div>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 tracking-wider mb-2">{callingNumber.number}</h2>
          <p className="text-slate-500 font-bold mb-12 animate-pulse">Calling {callingNumber.name}...</p>
          
          <button 
            onClick={() => setCallingNumber(null)}
            className="w-16 h-16 bg-red-500 hover:bg-red-600 rounded-full flex items-center justify-center transition-all hover:scale-105 shadow-[0_0_20px_rgba(239,68,68,0.4)]"
          >
            <PhoneOff className="w-7 h-7 text-white" />
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-[1000] bg-slate-900/40 backdrop-blur-md flex flex-col p-4 md:p-8 animate-fade-in">
      {/* Container */}
      <div className="bg-white rounded-3xl shadow-2xl max-w-3xl mx-auto w-full flex flex-col overflow-hidden max-h-full">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-100 bg-slate-50">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center animate-pulse shadow-sm">
              <ShieldAlert className="w-7 h-7 text-red-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900">Emergency Assistance</h2>
              <p className="text-red-500 font-medium text-sm">Stay calm. Help is available.</p>
            </div>
          </div>
          <button 
            onClick={onClose}
            className="p-3 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors shadow-sm"
          >
            <X className="w-6 h-6 text-slate-500" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-6 scrollbar-hide flex flex-col gap-6">
          {/* Current Location Info */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-slate-800 font-bold text-lg mb-4 flex items-center gap-2">
              <Navigation className="w-5 h-5 text-teal-600" />
              Your Current Location
            </h3>
            <div className="bg-slate-50 p-5 rounded-xl border border-slate-100">
              <p className="text-slate-700 font-mono text-xl tracking-wider mb-2 font-bold">15.4909° N, 73.8278° E</p>
              <p className="text-teal-700 font-bold text-lg mb-1">Panaji, Goa, India</p>
              <p className="text-slate-500 text-sm font-medium">Accuracy: within 10 meters</p>
            </div>
          </div>

          {/* Local Emergency Numbers */}
          <div className="bg-white border-2 border-red-100 rounded-2xl p-6 shadow-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 w-1.5 h-full bg-red-500"></div>
            <h3 className="text-slate-900 font-bold text-lg mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-500" />
              Local Emergency Services (India)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <button onClick={() => setCallingNumber({number: '112', name: 'National Emergency'})} className="w-full text-left flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl transition-all hover:scale-[1.02]">
                <div>
                  <p className="text-red-600 font-bold text-2xl tracking-wider">112</p>
                  <p className="text-red-500 text-sm font-bold mt-1">National Emergency</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-500 fill-red-500" />
                </div>
              </button>
              <button onClick={() => setCallingNumber({number: '108', name: 'Ambulance / Medical'})} className="w-full text-left flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl transition-all hover:scale-[1.02]">
                <div>
                  <p className="text-red-600 font-bold text-2xl tracking-wider">108</p>
                  <p className="text-red-500 text-sm font-bold mt-1">Ambulance / Medical</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-500 fill-red-500" />
                </div>
              </button>
              <button onClick={() => setCallingNumber({number: '100', name: 'Police'})} className="w-full text-left flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl transition-all hover:scale-[1.02]">
                <div>
                  <p className="text-red-600 font-bold text-2xl tracking-wider">100</p>
                  <p className="text-red-500 text-sm font-bold mt-1">Police</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-500 fill-red-500" />
                </div>
              </button>
              <button onClick={() => setCallingNumber({number: '1091', name: "Women's Helpline"})} className="w-full text-left flex items-center justify-between p-5 bg-red-50 hover:bg-red-100 border border-red-100 rounded-xl transition-all hover:scale-[1.02]">
                <div>
                  <p className="text-red-600 font-bold text-2xl tracking-wider">1091</p>
                  <p className="text-red-500 text-sm font-bold mt-1">Women's Helpline</p>
                </div>
                <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                  <Phone className="w-6 h-6 text-red-500 fill-red-500" />
                </div>
              </button>
            </div>
          </div>

          {/* Embassy Contacts */}
          <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm">
            <h3 className="text-slate-800 font-bold text-lg mb-4">Your Registered Consular Contact</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between p-5 bg-slate-50 border border-slate-100 rounded-xl">
                <div>
                  <p className="text-slate-900 font-bold text-lg mb-1">UK Consular Assistance, Goa</p>
                  <p className="text-slate-500 text-sm font-medium">Salgaocar Centre, Rua De Ourem, Panaji 403001</p>
                </div>
                <button onClick={() => setCallingNumber({number: '+918322228571', name: 'UK Consular Assistance'})} className="w-12 h-12 bg-teal-600 hover:bg-teal-700 rounded-full text-white flex items-center justify-center transition-colors shadow-sm">
                  <Phone className="w-6 h-6 fill-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
