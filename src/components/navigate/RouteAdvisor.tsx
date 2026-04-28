import { Navigation, Clock, Shield, ShieldCheck } from 'lucide-react';
import { routeOptions } from '../../data/mockData';
import { useState } from 'react';

export default function RouteAdvisor() {
  const [from, setFrom] = useState('Hotel Raphael');
  const [to, setTo] = useState('Colosseum');
  const [showRoutes, setShowRoutes] = useState(true);

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-4">
      <div className="flex items-center gap-2 mb-3">
        <Navigation className="w-4 h-4 text-teal-600" />
        <h3 className="font-bold text-sm text-slate-800">Road Route Advisor</h3>
      </div>

      {/* From → To Inputs */}
      <div className="space-y-2 mb-3">
        <input
          type="text"
          value={from}
          onChange={(e) => setFrom(e.target.value)}
          placeholder="From"
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30"
        />
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="To"
          className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/30"
        />
        <button
          onClick={() => setShowRoutes(true)}
          className="w-full btn-secondary text-sm"
        >
          Find Safest Route
        </button>
      </div>

      {/* Route Options */}
      {showRoutes && (
        <div className="space-y-2 animate-fade-in">
          {routeOptions.map((route) => (
            <div
              key={route.id}
              className={`p-3 rounded-xl border cursor-pointer transition-all duration-200 hover:shadow-md ${
                route.type === 'safer'
                  ? 'border-teal-200 bg-teal-50/50 hover:border-teal-300'
                  : 'border-slate-200 bg-slate-50/50 hover:border-slate-300'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className="font-semibold text-sm text-slate-800">{route.label}</span>
                <div className="flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-slate-400" />
                  <span className="text-sm font-medium text-slate-600">{route.time}</span>
                </div>
              </div>
              <p className="text-xs text-slate-500 mb-2">{route.description}</p>
              <div className="flex items-center gap-1">
                {route.type === 'safer' ? (
                  <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
                ) : (
                  <Shield className="w-3.5 h-3.5 text-slate-400" />
                )}
                <span
                  className={`text-xs font-medium ${
                    route.safety === 'High' ? 'text-teal-600' : 'text-amber-600'
                  }`}
                >
                  Safety: {route.safety}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
