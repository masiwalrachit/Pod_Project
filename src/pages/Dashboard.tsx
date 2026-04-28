import { Sparkles, TrendingUp } from 'lucide-react';
import TripCard from '../components/dashboard/TripCard';
import ItineraryCard from '../components/dashboard/ItineraryCard';
import SeasonalBanner from '../components/dashboard/SeasonalBanner';
import { upcomingTrips, recommendedItineraries } from '../data/mockData';

export default function Dashboard() {
  return (
    <div className="space-y-10 max-w-7xl mx-auto">
      {/* Welcome Section */}
      <div className="animate-slide-up">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">
          Welcome back, <span className="text-amber-500">Rahul</span> ✈️
        </h1>
        <p className="text-slate-500 mt-1">Your next adventure is just around the corner.</p>
      </div>

      <SeasonalBanner />

      {/* Upcoming Trips */}
      <section className="animate-slide-up" style={{ animationDelay: '100ms' }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center">
              <TrendingUp className="w-4 h-4 text-amber-600" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">My Upcoming Trips</h2>
          </div>
          <button className="btn-ghost text-sm">View all →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {upcomingTrips.map((trip) => (
            <TripCard
              key={trip.id}
              name={trip.name}
              destination={trip.destination}
              daysUntil={trip.daysUntil}
              cover={trip.cover}
              travelers={trip.travelers}
            />
          ))}
        </div>
      </section>

      {/* Recommended Itineraries */}
      <section className="animate-slide-up" style={{ animationDelay: '200ms' }}>
        <div className="flex items-center justify-between mb-5">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-teal-600" />
            </div>
            <h2 className="text-lg font-bold text-slate-800">Recommended Itineraries to Clone</h2>
          </div>
          <button className="btn-ghost text-sm">Browse all →</button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {recommendedItineraries.map((itin) => (
            <ItineraryCard
              key={itin.id}
              traveler={itin.traveler}
              destination={itin.destination}
              duration={itin.duration}
              tags={itin.tags}
              rating={itin.rating}
              clones={itin.clones}
              description={itin.description}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
