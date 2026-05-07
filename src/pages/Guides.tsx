import { useState } from 'react';
import { Star, MapPin, X, Calendar, Clock, Hourglass, Compass } from 'lucide-react';
import { guidesData } from '../data/guidesData';

export default function Guides() {
  const [cityFilter, setCityFilter] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('');
  const [priceFilter, setPriceFilter] = useState('');
  
  const [selectedGuide, setSelectedGuide] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('Morning 9am');
  const [duration, setDuration] = useState(2);
  const [showToast, setShowToast] = useState(false);

  const filteredGuides = guidesData.filter((guide) => {
    if (cityFilter && guide.city !== cityFilter) return false;
    if (categoryFilter && guide.category !== categoryFilter) return false;
    if (priceFilter) {
      if (priceFilter === 'Budget' && guide.price >= 450) return false;
      if (priceFilter === 'Mid' && (guide.price < 450 || guide.price > 550)) return false;
      if (priceFilter === 'Premium' && guide.price <= 550) return false;
    }
    return true;
  });

  const handleBookClick = (guide: any) => {
    setSelectedGuide(guide);
    setIsModalOpen(true);
  };

  const handleConfirmBooking = () => {
    setIsModalOpen(false);
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  };

  return (
    <div className="max-w-7xl mx-auto animate-slide-up pb-24">
      {/* Header */}
      <div className="mb-6">
        <div className="flex items-center gap-2 mb-2">
          <div className="w-9 h-9 rounded-xl bg-teal-100 flex items-center justify-center">
            <Compass className="w-5 h-5 text-teal-600" />
          </div>
          <div>
            <h1 className="text-2xl font-bold text-slate-900">Book a Local Guide</h1>
            <p className="text-slate-500 text-sm">Handpicked locals who know Goa inside out.</p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-3 mb-8">
        <select 
          className="bg-white border border-slate-200 text-slate-700 font-medium rounded-xl px-4 py-2.5 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="">All Regions</option>
          <option value="North Goa">North Goa</option>
          <option value="South Goa">South Goa</option>
          <option value="Panjim">Panjim</option>
          <option value="Old Goa">Old Goa</option>
        </select>
        
        <select 
          className="bg-white border border-slate-200 text-slate-700 font-medium rounded-xl px-4 py-2.5 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food & Restaurants">Food & Restaurants</option>
          <option value="History & Culture">History & Culture</option>
          <option value="Adventure">Adventure</option>
          <option value="Nightlife">Nightlife</option>
          <option value="Hidden Gems">Hidden Gems</option>
        </select>

        <select 
          className="bg-white border border-slate-200 text-slate-700 font-medium rounded-xl px-4 py-2.5 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="Budget">Budget under ₹450/hr</option>
          <option value="Mid">Mid ₹450–₹550/hr</option>
          <option value="Premium">Premium ₹550+/hr</option>
        </select>
      </div>

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <div key={guide.id} className="bg-white border border-slate-100 rounded-2xl p-6 flex flex-col hover:border-slate-300 hover:shadow-md transition-all">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white shrink-0 shadow-sm ${guide.color}`}>
                {guide.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-lg text-slate-900">{guide.name}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="inline-flex items-center gap-1 bg-slate-100 text-teal-700 px-2 py-0.5 rounded-md text-xs font-bold">
                    <MapPin className="w-3 h-3" /> {guide.city}
                  </span>
                  <span className="inline-flex items-center bg-slate-100 text-slate-600 px-2 py-0.5 rounded-md text-xs font-bold">
                    {guide.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-sm font-bold mb-3">
              <Star className="w-4 h-4 text-amber-500 fill-amber-500" />
              <span className="text-slate-800">{guide.rating}</span>
              <span className="text-slate-400 font-medium">· {guide.trips} trips</span>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed mb-4 flex-1">
              {guide.bio}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {guide.languages.map((lang: string) => (
                <span key={lang} className="text-[10px] font-bold text-slate-500 uppercase tracking-wider bg-slate-50 border border-slate-100 px-2 py-1 rounded">
                  {lang}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto pt-4 border-t border-slate-100">
              <div>
                <span className="text-lg font-bold text-slate-900">₹{guide.price}</span>
                <span className="text-xs text-slate-500 font-medium">/hr</span>
              </div>
              <div className="flex gap-2">
                <button 
                  onClick={() => handleBookClick(guide)}
                  className="px-5 py-2 rounded-xl text-sm font-bold bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-sm"
                >
                  Book Guide
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-900/40 backdrop-blur-sm p-4 animate-fade-in">
          <div className="bg-white border border-slate-100 shadow-2xl rounded-2xl w-full max-w-md overflow-hidden transform transition-all">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50">
              <div>
                <h2 className="text-xl font-bold text-slate-900">{selectedGuide.name}</h2>
                <p className="text-sm font-bold text-teal-700 flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" /> {selectedGuide.city}
                </p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-slate-400 hover:text-slate-600 bg-white rounded-full p-1 border border-slate-200">
                <X className="w-5 h-5" />
              </button>
            </div>
            
            <div className="p-6 space-y-5">
              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4 text-slate-400" /> Date
                </label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm"
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-slate-400" /> Time
                </label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm"
                >
                  <option value="Morning 9am">Morning 9am</option>
                  <option value="Afternoon 2pm">Afternoon 2pm</option>
                  <option value="Evening 7pm">Evening 7pm</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 mb-1.5 flex items-center gap-1.5">
                  <Hourglass className="w-4 h-4 text-slate-400" /> Duration
                </label>
                <select 
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full bg-white border border-slate-200 text-slate-800 rounded-xl px-4 py-2.5 focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 shadow-sm"
                >
                  <option value={2}>2 hrs</option>
                  <option value={4}>4 hrs</option>
                  <option value={8}>Full day (8 hrs)</option>
                </select>
              </div>

              <div className="bg-slate-50 rounded-xl p-4 mt-6 border border-slate-100 flex items-center justify-between">
                <span className="text-slate-600 font-bold text-sm">Total Price</span>
                <span className="text-2xl font-bold text-teal-700 font-mono">
                  ₹{(selectedGuide.price * duration).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="p-6 pt-0 flex flex-col gap-3">
              <button 
                onClick={handleConfirmBooking}
                disabled={!date}
                className="w-full py-3.5 rounded-xl font-bold bg-teal-600 text-white hover:bg-teal-700 transition-colors shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && selectedGuide && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-slate-900 text-white px-6 py-4 rounded-2xl shadow-xl font-medium flex items-center gap-3 z-[110] animate-slide-up border border-slate-700">
          <div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-teal-400 animate-ping" />
          </div>
          <div>
            <p className="font-bold text-sm">Booking confirmed!</p>
            <p className="text-xs text-slate-400">{selectedGuide.name.split(' ')[0]} will meet you at your hotel lobby.</p>
          </div>
        </div>
      )}
    </div>
  );
}
