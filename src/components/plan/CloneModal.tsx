import { X, Search, Star, Copy, Filter } from 'lucide-react';
import { useState } from 'react';
import { cloneableItineraries } from '../../data/mockData';

interface CloneModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CloneModal({ isOpen, onClose }: CloneModalProps) {
  const [search, setSearch] = useState('');
  const [styleFilter, setStyleFilter] = useState('All');

  if (!isOpen) return null;

  const styles = ['All', 'Cultural', 'Budget', 'Foodie', 'Wellness'];
  const filtered = cloneableItineraries.filter((it) => {
    const matchesSearch =
      it.destination.toLowerCase().includes(search.toLowerCase()) ||
      it.traveler.name.toLowerCase().includes(search.toLowerCase());
    const matchesStyle = styleFilter === 'All' || it.style === styleFilter;
    return matchesSearch && matchesStyle;
  });

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] overflow-hidden animate-slide-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100">
          <div>
            <h2 className="text-lg font-bold text-slate-900">Clone a Traveler's Plan</h2>
            <p className="text-sm text-slate-400">Pick an itinerary to start with, then customize</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-xl hover:bg-slate-100 text-slate-400 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="px-6 py-3 border-b border-slate-100 space-y-3">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by destination or traveler..."
              className="w-full pl-10 pr-4 py-2 bg-slate-50 rounded-xl text-sm border border-slate-200 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex items-center gap-2">
            <Filter className="w-4 h-4 text-slate-400" />
            {styles.map((s) => (
              <button
                key={s}
                onClick={() => setStyleFilter(s)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-all ${
                  styleFilter === s
                    ? 'bg-amber-500 text-white'
                    : 'bg-slate-100 text-slate-500 hover:bg-slate-200'
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </div>

        {/* Results */}
        <div className="overflow-y-auto max-h-[50vh] px-6 py-4 space-y-3">
          {filtered.map((it) => (
            <div
              key={it.id}
              className="flex items-start gap-4 p-4 rounded-xl border border-slate-100 hover:border-amber-200 hover:bg-amber-50/30 transition-all cursor-pointer group"
            >
              <img
                src={it.traveler.avatar}
                alt={it.traveler.name}
                className="w-10 h-10 rounded-full ring-2 ring-slate-200 flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2">
                  <h3 className="font-semibold text-sm text-slate-800">{it.traveler.name}</h3>
                  <span className="text-xs text-slate-400">· {it.destination} · {it.duration}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-400 mt-0.5">
                  <Star className="w-3 h-3 text-amber-400 fill-amber-400" />
                  <span>{it.rating}</span>
                  <span className="ml-2 tag-blue text-[10px]">{it.style}</span>
                </div>
                <div className="flex flex-wrap gap-1.5 mt-2">
                  {it.highlights.map((h, i) => (
                    <span key={i} className="text-[11px] px-2 py-0.5 bg-slate-100 rounded-md text-slate-500">
                      {h}
                    </span>
                  ))}
                </div>
              </div>
              <button className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity btn-primary text-xs px-3 py-1.5">
                <Copy className="w-3.5 h-3.5 mr-1 inline" />
                Clone
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
