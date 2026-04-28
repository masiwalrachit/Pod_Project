import { MapPin, Calendar, Copy } from 'lucide-react';
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
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Day-by-day itinerary — 2 cols */}
        <div className="lg:col-span-2 space-y-4 animate-slide-up" style={{ animationDelay: '100ms' }}>
          <CombineNearbyAlert />
          {tripItinerary.days.map((day) => (
            <DayCard
              key={day.day}
              day={day.day}
              date={day.date}
              title={day.title}
              blocks={day.blocks}
            />
          ))}

          {/* Event Sync */}
          <div className="mt-6">
            <EventSync />
          </div>
        </div>

        {/* Sidebar — Miss Predictor */}
        <div className="space-y-6 animate-slide-in-right" style={{ animationDelay: '200ms' }}>
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
