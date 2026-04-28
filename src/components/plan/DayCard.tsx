import { ChevronDown, ChevronUp, Plus, Clock, Footprints } from 'lucide-react';
import { useState } from 'react';
import ActivityFlags from './ActivityFlags';
import { getPairDistance, destinationSuggestions } from '../../data/travelIntelligence';

interface Activity {
  time: string;
  activity: string;
  type: string;
  icon: string;
}

interface DayCardProps {
  day: number;
  date: string;
  title: string;
  blocks: {
    morning: Activity[];
    afternoon: Activity[];
    evening: Activity[];
  };
}

const typeColors: Record<string, string> = {
  food: 'bg-amber-50 border-amber-200 text-amber-700',
  sightseeing: 'bg-blue-50 border-blue-200 text-blue-700',
  transport: 'bg-slate-50 border-slate-200 text-slate-600',
  accommodation: 'bg-purple-50 border-purple-200 text-purple-700',
  leisure: 'bg-teal-50 border-teal-200 text-teal-700',
  adventure: 'bg-red-50 border-red-200 text-red-700',
};

function TimeBlock({ label, activities, color }: { label: string; activities: Activity[]; color: string }) {
  return (
    <div className="mb-4 last:mb-0">
      <div className="flex items-center gap-2 mb-2">
        <span className={`text-xs font-semibold uppercase tracking-wider ${color}`}>{label}</span>
        <div className="flex-1 h-px bg-slate-100" />
      </div>
      <div className="space-y-2 pl-2">
        {activities.map((act, i) => (
          <div
            key={i}
            className={`flex items-center gap-3 px-3 py-2.5 rounded-xl border transition-all duration-200 hover:shadow-sm ${
              typeColors[act.type] || 'bg-slate-50 border-slate-200'
            }`}
          >
            <span className="text-lg">{act.icon}</span>
            <div className="flex-1 min-w-0 py-0.5">
              <p className="text-sm font-medium truncate">{act.activity}</p>
              <ActivityFlags activityName={act.activity} time={act.time} />
            </div>
            <span className="text-xs font-mono text-slate-400 flex-shrink-0 self-start mt-1">{act.time}</span>
          </div>
        ))}
        <button className="flex items-center gap-2 px-3 py-2 rounded-xl border border-dashed border-slate-200 text-slate-400 text-sm hover:border-amber-400 hover:text-amber-500 transition-all duration-200 w-full">
          <Plus className="w-4 h-4" />
          <span>Add activity</span>
        </button>
      </div>
    </div>
  );
}

export default function DayCard({ day, date, title, blocks }: DayCardProps) {
  const [expanded, setExpanded] = useState(day <= 2);
  const totalActivities =
    blocks.morning.length + blocks.afternoon.length + blocks.evening.length;

  const allActivities = [...blocks.morning, ...blocks.afternoon, ...blocks.evening];
  let deadTimeMessage = null;
  let totalWalking = 0;

  for (let i = 0; i < allActivities.length - 1; i++) {
    const curr = allActivities[i];
    const next = allActivities[i + 1];

    totalWalking += getPairDistance(curr.activity, next.activity);

    if (!deadTimeMessage) {
      const currMins = parseInt(curr.time.split(':')[0]) * 60 + parseInt(curr.time.split(':')[1]);
      const nextMins = parseInt(next.time.split(':')[0]) * 60 + parseInt(next.time.split(':')[1]);
      const diff = nextMins - currMins;
      const gap = diff - 60; // Assumed 1hr activity duration
      if (gap >= 90) {
        deadTimeMessage = { hours: (Math.round(gap / 60 * 10) / 10), near: curr.activity };
      }
    }
  }

  const isOverload = totalWalking > 9.0;

  return (
    <div className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-300">
      {/* Header */}
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between px-5 py-4 hover:bg-slate-50/50 transition-colors"
      >
        <div className="flex items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-amber-500 text-white font-bold text-sm flex items-center justify-center shadow-md">
            D{day}
          </div>
          <div className="text-left">
            <h3 className="font-semibold text-slate-800 text-sm">{title}</h3>
            <p className="text-xs text-slate-400">{date} · {totalActivities} activities</p>
          </div>
        </div>
        {expanded ? (
          <ChevronUp className="w-5 h-5 text-slate-400" />
        ) : (
          <ChevronDown className="w-5 h-5 text-slate-400" />
        )}
      </button>

      {/* Expandable Content */}
      {expanded && (
        <div className="px-5 pb-5 animate-fade-in">
          <div className="border-t border-slate-100 pt-4">
            
            {/* Day Overload Warning */}
            {isOverload && (
              <div className="mb-4 bg-red-50 border border-red-100 rounded-xl p-3 flex gap-3">
                <Footprints className="w-5 h-5 text-red-500 flex-shrink-0" />
                <div>
                  <p className="text-sm font-semibold text-red-800">Heads up — this day has ~{totalWalking.toFixed(1)}km of walking.</p>
                  <p className="text-xs text-red-700 mt-0.5">Most travelers find 6–8km comfortable. Consider moving one activity to another day.</p>
                </div>
              </div>
            )}

            {/* Dead Time Detector */}
            {deadTimeMessage && (
              <div className="mb-4 bg-blue-50 border border-blue-100 rounded-xl p-3">
                <div className="flex gap-3 mb-2">
                  <Clock className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  <p className="text-sm font-semibold text-blue-800">
                    You have {deadTimeMessage.hours} hrs free near {deadTimeMessage.near}. Here's what travelers did nearby:
                  </p>
                </div>
                <div className="flex flex-wrap gap-2 pl-8">
                  {(destinationSuggestions["Rome"] || []).map((sug, i) => (
                    <button key={i} className="flex items-center gap-1 bg-white border border-blue-200 text-blue-700 text-xs font-medium px-2.5 py-1.5 rounded-full hover:bg-blue-100 transition-colors shadow-sm">
                      <Plus className="w-3 h-3" />
                      {sug}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <TimeBlock label="Morning" activities={blocks.morning} color="text-amber-500" />
            <TimeBlock label="Afternoon" activities={blocks.afternoon} color="text-teal-500" />
            <TimeBlock label="Evening" activities={blocks.evening} color="text-indigo-500" />
          </div>
        </div>
      )}
    </div>
  );
}
