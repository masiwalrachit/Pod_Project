import { Star, Copy, Clock, MapPin } from 'lucide-react';

interface ItineraryCardProps {
  traveler: { name: string; avatar: string };
  destination: string;
  duration: string;
  tags: string[];
  rating: number;
  clones: number;
  description: string;
}

const tagColors: Record<string, string> = {
  Solo: 'tag-purple',
  Cultural: 'tag-blue',
  Budget: 'tag-teal',
  Foodie: 'tag-amber',
  Adventure: 'tag-red',
  Luxury: 'tag-amber',
  Wellness: 'tag-teal',
  Nature: 'tag-teal',
};

export default function ItineraryCard({
  traveler,
  destination,
  duration,
  tags,
  rating,
  clones,
  description,
}: ItineraryCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-md card-hover border border-slate-100">
      {/* Traveler Header */}
      <div className="flex items-center gap-3 mb-4">
        <img
          src={traveler.avatar}
          alt={traveler.name}
          className="w-10 h-10 rounded-full ring-2 ring-slate-200"
        />
        <div>
          <p className="text-sm font-semibold text-slate-800">{traveler.name}</p>
          <div className="flex items-center gap-1 text-xs text-slate-400">
            <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
            <span>{rating}</span>
            <span className="mx-1">·</span>
            <Copy className="w-3 h-3" />
            <span>{clones} clones</span>
          </div>
        </div>
      </div>

      {/* Destination & Duration */}
      <div className="flex items-center gap-4 mb-3">
        <div className="flex items-center gap-1.5 text-sm text-slate-600">
          <MapPin className="w-4 h-4 text-teal-600" />
          <span className="font-medium">{destination}</span>
        </div>
        <div className="flex items-center gap-1.5 text-sm text-slate-500">
          <Clock className="w-4 h-4 text-slate-400" />
          <span>{duration}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-sm text-slate-500 leading-relaxed mb-4 line-clamp-2">
        {description}
      </p>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag) => (
          <span key={tag} className={tagColors[tag] || 'tag-blue'}>
            {tag}
          </span>
        ))}
      </div>

      {/* Clone Button */}
      <button className="w-full btn-primary text-sm flex items-center justify-center gap-2">
        <Copy className="w-4 h-4" />
        Clone Itinerary
      </button>
    </div>
  );
}
