import { useState } from 'react';
import { Shield, ShieldOff, MapPin, Star } from 'lucide-react';
import MapView from '../components/navigate/MapView';
import RouteAdvisor from '../components/navigate/RouteAdvisor';
import DynamicReorder from '../components/navigate/DynamicReorder';
import TransportAlerts from '../components/navigate/TransportAlerts';
import TransportPassSuggestion from '../components/navigate/TransportPassSuggestion';
import EmergencyOverlay from '../components/navigate/EmergencyOverlay';
import { nearbyPlaces } from '../data/mockData';

const MAP_HEIGHT = 680; // fixed px — Leaflet MUST have a resolved height

export default function Navigate() {
  const [showSafety, setShowSafety] = useState(false);
  const [showSOS, setShowSOS] = useState(false);

  return (
    <div className="max-w-full animate-slide-up relative">
      <div className="flex flex-col lg:flex-row gap-5 items-start">

        {/* ── Map pane — fixed height, 65% on desktop ──── */}
        <div
          className="w-full lg:w-[65%] flex-shrink-0"
          style={{ height: MAP_HEIGHT, position: 'relative' }}
        >
          {/* Safety toggle — above map */}
          <div style={{ position: 'absolute', top: 14, left: 14, zIndex: 800 }}>
            <button
              onClick={() => setShowSafety((s) => !s)}
              className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold shadow-lg transition-all duration-200 border ${
                showSafety
                  ? 'bg-teal-600 text-white border-teal-700'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-200'
              }`}
            >
              {showSafety ? <Shield className="w-4 h-4" /> : <ShieldOff className="w-4 h-4" />}
              Safety Layer {showSafety ? 'ON' : 'OFF'}
            </button>
          </div>

          {/* Map itself — fills the pane */}
          <div style={{ width: '100%', height: '100%' }}>
            <MapView showSafety={showSafety} />
          </div>

          {/* Dynamic reorder card — bottom of map pane */}
          <DynamicReorder />
        </div>

        {/* ── Right panel — 35% ─────────────────────────── */}
        <div
          className="w-full lg:flex-1 flex flex-col gap-4"
          style={{ maxHeight: MAP_HEIGHT, overflowY: 'auto' }}
        >
          <TransportPassSuggestion />
          
          <RouteAdvisor />

          <TransportAlerts />

          {/* Nearby Places */}
          <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
            <div className="flex items-center gap-2 mb-3">
              <MapPin className="w-4 h-4 text-amber-500" />
              <h3 className="font-bold text-sm text-slate-800">Nearby Places</h3>
            </div>
            <div className="space-y-1">
              {nearbyPlaces.map((place, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-pointer"
                >
                  <span className="text-xl">{place.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-slate-800 truncate">{place.name}</p>
                    <p className="text-xs text-slate-400">{place.type} · {place.distance}</p>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                    <span className="text-xs font-medium text-slate-600">{place.rating}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>

      {/* Floating Pulsing SOS Button */}
      <button 
        onClick={() => setShowSOS(true)}
        className="fixed bottom-8 right-8 z-[90] bg-red-600 text-white w-16 h-16 rounded-full shadow-[0_0_25px_rgba(220,38,38,0.5)] flex items-center justify-center hover:bg-red-700 hover:scale-105 transition-all duration-300 group"
      >
        <div className="absolute inset-0 rounded-full border-[3px] border-red-500 animate-ping opacity-60 group-hover:hidden"></div>
        <span className="font-black text-xl tracking-widest z-10">SOS</span>
      </button>

      {/* Emergency Overlay Component */}
      {showSOS && <EmergencyOverlay onClose={() => setShowSOS(false)} />}
    </div>
  );
}
