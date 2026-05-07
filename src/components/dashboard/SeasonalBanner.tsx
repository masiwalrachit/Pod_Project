import { Sun, AlertCircle } from 'lucide-react';

export default function SeasonalBanner() {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200/60 rounded-2xl p-4 shadow-sm animate-fade-in flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6">
      <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center flex-shrink-0">
        <Sun className="w-5 h-5 text-amber-600" />
      </div>
      <div className="flex-1">
        <h3 className="text-sm font-bold text-amber-900 flex items-center gap-2">
          Seasonal Heads-up: Goa in December
          <AlertCircle className="w-3.5 h-3.5 text-amber-500" />
        </h3>
        <p className="text-sm text-amber-800 mt-1">
          Expect extreme heat (35°C+) and peak crowds. We recommend starting your outdoor activities before 9 AM and resting indoors during the afternoon.
        </p>
      </div>
      <button className="bg-white border border-amber-200 text-amber-700 hover:bg-amber-50 hover:text-amber-800 text-xs font-bold px-4 py-2 rounded-xl transition-colors whitespace-nowrap shadow-sm">
        Adjust Itinerary
      </button>
    </div>
  );
}
