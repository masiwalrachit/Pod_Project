import { AlertTriangle, Plus } from 'lucide-react';
import { missedPlaces } from '../../data/mockData';

export default function MissPredictor() {
  return (
    <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl border border-amber-200/60 p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
          <AlertTriangle className="w-4 h-4 text-amber-600" />
        </div>
        <div>
          <h3 className="font-bold text-sm text-slate-800">What You'll Actually Miss</h3>
          <p className="text-xs text-slate-500">Based on travelers like you</p>
        </div>
      </div>

      <div className="space-y-3">
        {missedPlaces.map((place, i) => (
          <div
            key={i}
            className="bg-white/80 rounded-xl p-3 border border-amber-100 hover:shadow-md transition-all duration-200"
          >
            <div className="flex items-start justify-between gap-2">
              <div className="flex-1">
                <p className="font-semibold text-sm text-slate-800">{place.name}</p>
                <p className="text-xs text-slate-500 mt-0.5">{place.reason}</p>
              </div>
              <span className="flex-shrink-0 text-xs font-bold text-amber-600 bg-amber-100 px-2 py-1 rounded-lg">
                {place.percent}%
              </span>
            </div>

            <div className="flex items-center justify-between mt-3">
              <div className="flex -space-x-1.5">
                {place.avatars.map((a, j) => (
                  <img
                    key={j}
                    src={a}
                    alt=""
                    className="w-5 h-5 rounded-full ring-1 ring-white"
                  />
                ))}
                <span className="text-[10px] text-slate-400 ml-2 self-center">mentioned it</span>
              </div>
              <button className="text-xs text-amber-600 hover:text-amber-700 font-medium flex items-center gap-1">
                <Plus className="w-3 h-3" />
                Add
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
