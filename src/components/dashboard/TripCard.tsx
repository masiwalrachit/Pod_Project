import { Calendar, MapPin, Users } from 'lucide-react';

interface TripCardProps {
  name: string;
  destination: string;
  daysUntil: number;
  cover: string;
  travelers: string[];
}

export default function TripCard({ name, destination, daysUntil, cover, travelers }: TripCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-white shadow-md card-hover cursor-pointer">
      {/* Cover Image */}
      <div className="relative h-44 overflow-hidden">
        <img
          src={cover}
          alt={destination}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

        {/* Countdown Badge */}
        <div className="absolute top-3 right-3 bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
          {daysUntil} days
        </div>

        {/* Destination overlay */}
        <div className="absolute bottom-3 left-4 right-4">
          <h3 className="text-white font-bold text-lg leading-tight">{name}</h3>
          <div className="flex items-center gap-1.5 mt-1">
            <MapPin className="w-3.5 h-3.5 text-amber-400" />
            <span className="text-white/80 text-sm">{destination}</span>
          </div>
        </div>
      </div>

      {/* Bottom Content */}
      <div className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-500 text-xs">
          <Calendar className="w-3.5 h-3.5" />
          <span>In {daysUntil} days</span>
        </div>

        <div className="flex items-center gap-1">
          <Users className="w-3.5 h-3.5 text-slate-400 mr-1" />
          <div className="flex -space-x-2">
            {travelers.map((t, i) => (
              <div
                key={i}
                className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-white text-[10px] font-bold flex items-center justify-center ring-2 ring-white"
              >
                {t[0]}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
