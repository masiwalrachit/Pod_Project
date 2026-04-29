import { MapPin, Calendar, Copy, Archive } from 'lucide-react';
import { useState } from 'react';
import DayCard from '../components/plan/DayCard';
import CloneModal from '../components/plan/CloneModal';
import MissPredictor from '../components/plan/MissPredictor';
import EventSync from '../components/plan/EventSync';
import CombineNearbyAlert from '../components/plan/CombineNearbyAlert';
import CommunityQAWidget from '../components/plan/CommunityQAWidget';
import { tripItinerary } from '../data/mockData';

export default function Plan() {
  const [cloneModalOpen, setCloneModalOpen] = useState(false);
  const [completedDays, setCompletedDays] = useState<number[]>([]);

  const toggleDayCompletion = (dayNum: number) => {
    setCompletedDays(prev => 
      prev.includes(dayNum) ? prev.filter(d => d !== dayNum) : [...prev, dayNum]
    );
  };

  const activeDays = tripItinerary.days.filter(d => !completedDays.includes(d.day));
  const archivedDays = tripItinerary.days.filter(d => completedDays.includes(d.day));

  return (
    <div className="max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 animate-slide-up">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">{tripItinerary.tripName}</h1>
          <div className="flex items-center gap-3 mt-1 text-sm text-slate-500">
            <span className="flex items-center gap-1">
              <MapPin className="w-4 h-4 text-teal-600" />
              {tripItinerary.destination}
            </span>
            <span className="flex items-center gap-1">
              <Calendar className="w-4 h-4 text-slate-400" />
              {tripItinerary.dateRange}
            </span>
          </div>
        </div>
        <button
          onClick={() => setCloneModalOpen(true)}
          className="btn-primary flex items-center gap-2 self-start"
        >
          <Copy className="w-4 h-4" />
          Clone a Traveler's Plan
        </button>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Left Sidebar — Events */}
        <div className="lg:col-span-1 space-y-6 animate-slide-in-right" style={{ animationDelay: '50ms' }}>
          <div className="lg:sticky lg:top-24">
            <EventSync />
          </div>
        </div>

        {/* Day-by-day itinerary — 2 cols */}
        <div className="lg:col-span-2 space-y-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <CombineNearbyAlert />
          
          {/* Active Days */}
          {activeDays.map((day) => (
            <DayCard
              key={day.day}
              day={day.day}
              date={day.date}
              title={day.title}
              blocks={day.blocks}
              isCompleted={false}
              onToggleComplete={() => toggleDayCompletion(day.day)}
            />
          ))}

          {/* Archived Days */}
          {archivedDays.length > 0 && (
            <div className="mt-8 pt-4">
              <div className="flex items-center gap-3 mb-6 text-slate-400">
                <Archive className="w-5 h-5" />
                <h3 className="font-semibold uppercase tracking-widest text-xs">Archived Days</h3>
                <div className="flex-1 h-px bg-slate-200" />
              </div>
              <div className="space-y-4 opacity-75 grayscale-[30%] transition-all duration-500">
                {archivedDays.map((day) => (
                  <DayCard
                    key={day.day}
                    day={day.day}
                    date={day.date}
                    title={day.title}
                    blocks={day.blocks}
                    isCompleted={true}
                    onToggleComplete={() => toggleDayCompletion(day.day)}
                  />
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Right Sidebar — Miss Predictor */}
        <div className="lg:col-span-1 space-y-6 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
          <div className="lg:sticky lg:top-24">
            <MissPredictor />
            <CommunityQAWidget />
          </div>
        </div>
      </div>

      {/* Clone Modal */}
      <CloneModal isOpen={cloneModalOpen} onClose={() => setCloneModalOpen(false)} />
    </div>
  );
}
