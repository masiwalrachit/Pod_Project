import { useState } from 'react';
import { Heart, MapPin, Calendar, Sparkles, Frown } from 'lucide-react';

interface CapsuleCardProps {
  traveler: { name: string; avatar: string };
  destination: string;
  dates: string;
  bestMoment: string;
  oneRegret: string;
  photo?: string;
}

export default function CapsuleCard({
  traveler,
  destination,
  dates,
  bestMoment,
  oneRegret,
  photo,
}: CapsuleCardProps) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="bg-gradient-to-br from-white to-amber-50/40 rounded-2xl border border-amber-100 shadow-sm overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5">
      {/* Photo */}
      {photo && !imgError && (
        <div className="h-44 overflow-hidden">
          <img
            src={photo}
            alt={destination}
            className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            onError={() => setImgError(true)}
          />
        </div>
      )}

      <div className="p-5">
        {/* Traveler Header */}
        <div className="flex items-center gap-3 mb-4">
          <img
            src={traveler.avatar}
            alt={traveler.name}
            className="w-10 h-10 rounded-full ring-2 ring-amber-200 flex-shrink-0"
          />
          <div className="min-w-0">
            <p className="text-sm font-bold text-slate-800">{traveler.name}</p>
            <div className="flex items-center gap-2 text-xs text-slate-400 flex-wrap">
              <span className="flex items-center gap-1">
                <MapPin className="w-3 h-3 flex-shrink-0" />
                {destination}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="w-3 h-3 flex-shrink-0" />
                {dates}
              </span>
            </div>
          </div>
        </div>

        {/* Best Moment */}
        <div className="mb-4 p-3 bg-amber-50 rounded-xl border border-amber-100">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Sparkles className="w-3.5 h-3.5 text-amber-500 flex-shrink-0" />
            <span className="text-[10px] font-bold text-amber-600 uppercase tracking-widest">Best Moment</span>
          </div>
          <p className="text-sm text-slate-700 leading-relaxed italic">"{bestMoment}"</p>
        </div>

        {/* One Regret */}
        <div className="mb-4 p-3 bg-slate-50 rounded-xl border border-slate-100">
          <div className="flex items-center gap-1.5 mb-1.5">
            <Frown className="w-3.5 h-3.5 text-slate-400 flex-shrink-0" />
            <span className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">One Regret</span>
          </div>
          <p className="text-sm text-slate-500 leading-relaxed">"{oneRegret}"</p>
        </div>

        {/* Like */}
        <div className="flex items-center justify-end pt-2 border-t border-amber-100">
          <button className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-red-500 transition-colors group">
            <Heart className="w-4 h-4 group-hover:fill-red-500 transition-all" />
            <span>Love this</span>
          </button>
        </div>
      </div>
    </div>
  );
}
