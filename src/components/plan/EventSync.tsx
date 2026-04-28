import { CalendarDays, MapPin, Plus } from 'lucide-react';
import { localEvents } from '../../data/mockData';

const typeColors: Record<string, string> = {
  Festival: 'tag-amber',
  Market: 'tag-teal',
  Cinema: 'tag-blue',
};

export default function EventSync() {
  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm p-5">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
          <CalendarDays className="w-4 h-4 text-teal-600" />
        </div>
        <div>
          <h3 className="font-bold text-sm text-slate-800">Events During Your Trip</h3>
          <p className="text-xs text-slate-500">Auto-detected for Rome, May 12–19</p>
        </div>
      </div>

      <div className="space-y-3">
        {localEvents.map((event) => (
          <div
            key={event.id}
            className="flex items-start gap-3 p-3 rounded-xl border border-slate-100 hover:border-teal-200 hover:bg-teal-50/20 transition-all duration-200 group"
          >
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h4 className="font-semibold text-sm text-slate-800">{event.name}</h4>
                <span className={typeColors[event.type] || 'tag-blue'}>{event.type}</span>
              </div>
              <div className="flex items-center gap-3 mt-1 text-xs text-slate-400">
                <span className="flex items-center gap-1">
                  <CalendarDays className="w-3 h-3" /> {event.date}
                </span>
                <span className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" /> {event.location}
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-1.5 line-clamp-2">{event.description}</p>
            </div>
            <button className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity bg-teal-600 hover:bg-teal-700 text-white text-xs px-3 py-1.5 rounded-lg font-medium flex items-center gap-1">
              <Plus className="w-3 h-3" />
              Add to Day
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
