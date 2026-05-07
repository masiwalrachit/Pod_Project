import { Map, X } from 'lucide-react';
import { useState } from 'react';

export default function CombineNearbyAlert() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="mb-6 bg-indigo-50 border border-indigo-100 rounded-2xl p-4 flex gap-4 items-start shadow-sm animate-fade-in">
      <div className="w-10 h-10 rounded-full bg-indigo-100 flex items-center justify-center flex-shrink-0 mt-0.5">
        <Map className="w-5 h-5 text-indigo-600" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-bold text-indigo-900">Combine nearby</h3>
          <button 
            onClick={() => setVisible(false)}
            className="text-indigo-400 hover:text-indigo-600 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
        <p className="text-sm text-indigo-700 mt-1">
          Tip: <span className="font-semibold">Baga Beach</span> and <span className="font-semibold">Calangute Beach</span> are an 8 min walk apart but scheduled on different days. Move them to the same day?
        </p>
        <div className="flex gap-3 mt-3">
          <button className="bg-white border border-indigo-200 text-indigo-700 text-xs font-semibold px-4 py-2 rounded-xl hover:bg-indigo-50 hover:border-indigo-300 transition-colors shadow-sm">
            Merge to Day 2
          </button>
          <button 
            onClick={() => setVisible(false)}
            className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold px-4 py-2 transition-colors"
          >
            Dismiss
          </button>
        </div>
      </div>
    </div>
  );
}
