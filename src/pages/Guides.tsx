import { useState } from 'react';
import { Star, MapPin, X, Calendar, Clock, Hourglass } from 'lucide-react';
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
      if (priceFilter === 'Budget' && guide.price >= 500) return false;
      if (priceFilter === 'Mid' && (guide.price < 500 || guide.price > 1500)) return false;
      if (priceFilter === 'Premium' && guide.price <= 1500) return false;
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
    <div className="min-h-screen bg-[#0A0C12] text-[#F0F2F8] p-6 lg:p-10 pt-20 lg:pt-24 pb-24">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-2">Book a Local Guide</h1>
        <p className="text-[#3A4060] text-lg">
          Handpicked locals who know their city inside out. Not a tour operator — a real person.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="flex flex-col sm:flex-row gap-4 mb-8">
        <select 
          className="bg-[#0F1118] border border-[#1A1D2A] text-[#F0F2F8] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F59E0B]"
          value={cityFilter}
          onChange={(e) => setCityFilter(e.target.value)}
        >
          <option value="">All Cities</option>
          <option value="Rome">Rome</option>
          <option value="Bali">Bali</option>
          <option value="Tokyo">Tokyo</option>
        </select>
        
        <select 
          className="bg-[#0F1118] border border-[#1A1D2A] text-[#F0F2F8] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F59E0B]"
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
        >
          <option value="">All Categories</option>
          <option value="Food & Restaurants">Food & Restaurants</option>
          <option value="History & Culture">History & Culture</option>
          <option value="Adventure">Adventure</option>
          <option value="Photography">Photography</option>
          <option value="Nightlife">Nightlife</option>
          <option value="Hidden Gems">Hidden Gems</option>
        </select>

        <select 
          className="bg-[#0F1118] border border-[#1A1D2A] text-[#F0F2F8] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F59E0B]"
          value={priceFilter}
          onChange={(e) => setPriceFilter(e.target.value)}
        >
          <option value="">All Prices</option>
          <option value="Budget">Budget under ₹500/hr</option>
          <option value="Mid">Mid ₹500–₹1500/hr</option>
          <option value="Premium">Premium ₹1500+/hr</option>
        </select>
      </div>

      {/* Guide Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredGuides.map((guide) => (
          <div key={guide.id} className="bg-[#0F1118] border border-[#1A1D2A] rounded-2xl p-6 flex flex-col hover:border-[#3A4060] transition-colors">
            <div className="flex items-start gap-4 mb-4">
              <div className={`w-14 h-14 rounded-full flex items-center justify-center text-xl font-bold text-white shrink-0 ${guide.color}`}>
                {guide.name.split(' ').map((n: string) => n[0]).join('')}
              </div>
              <div>
                <h3 className="font-bold text-lg">{guide.name}</h3>
                <div className="flex flex-wrap gap-2 mt-1">
                  <span className="inline-flex items-center gap-1 bg-[#1A1D2A] text-[#0D9488] px-2 py-0.5 rounded-full text-xs font-medium">
                    <MapPin className="w-3 h-3" /> {guide.city}
                  </span>
                  <span className="inline-flex items-center bg-[#1A1D2A] text-[#F0F2F8] px-2 py-0.5 rounded-full text-xs font-medium">
                    {guide.category}
                  </span>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-1 text-sm font-medium mb-3">
              <Star className="w-4 h-4 text-[#F59E0B] fill-[#F59E0B]" />
              <span className="text-[#F0F2F8]">{guide.rating}</span>
              <span className="text-[#3A4060]">· {guide.trips} trips</span>
            </div>

            <p className="text-[#F0F2F8] text-sm leading-relaxed mb-4 flex-1 line-clamp-2">
              {guide.bio}
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              {guide.languages.map((lang: string) => (
                <span key={lang} className="text-xs text-[#3A4060] bg-[#1A1D2A] px-2 py-1 rounded-md">
                  {lang}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-auto">
              <div>
                <span className="text-lg font-bold text-[#F0F2F8]">₹{guide.price}</span>
                <span className="text-xs text-[#3A4060]">/hr</span>
              </div>
              <div className="flex gap-2">
                <button className="px-4 py-2 rounded-xl text-sm font-medium border border-[#1A1D2A] hover:bg-[#1A1D2A] text-[#F0F2F8] transition-colors">
                  View Profile
                </button>
                <button 
                  onClick={() => handleBookClick(guide)}
                  className="px-4 py-2 rounded-xl text-sm font-bold bg-[#F59E0B] text-[#0A0C12] hover:bg-[#D97706] transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Booking Modal */}
      {isModalOpen && selectedGuide && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-[#0F1118] border border-[#1A1D2A] rounded-2xl w-full max-w-md overflow-hidden">
            <div className="p-6 border-b border-[#1A1D2A] flex items-center justify-between">
              <div>
                <h2 className="text-xl font-bold text-[#F0F2F8]">{selectedGuide.name}</h2>
                <p className="text-sm text-[#0D9488] flex items-center gap-1 mt-1">
                  <MapPin className="w-3 h-3" /> {selectedGuide.city}
                </p>
              </div>
              <button onClick={() => setIsModalOpen(false)} className="text-[#3A4060] hover:text-[#F0F2F8]">
                <X className="w-6 h-6" />
              </button>
            </div>
            
            <div className="p-6 space-y-4">
              <div>
                <label className="block text-sm text-[#3A4060] mb-1.5 flex items-center gap-1.5">
                  <Calendar className="w-4 h-4" /> Date
                </label>
                <input 
                  type="date" 
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#0A0C12] border border-[#1A1D2A] text-[#F0F2F8] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F59E0B] [color-scheme:dark]"
                />
              </div>

              <div>
                <label className="block text-sm text-[#3A4060] mb-1.5 flex items-center gap-1.5">
                  <Clock className="w-4 h-4" /> Time
                </label>
                <select 
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#0A0C12] border border-[#1A1D2A] text-[#F0F2F8] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F59E0B]"
                >
                  <option value="Morning 9am">Morning 9am</option>
                  <option value="Afternoon 2pm">Afternoon 2pm</option>
                  <option value="Evening 7pm">Evening 7pm</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-[#3A4060] mb-1.5 flex items-center gap-1.5">
                  <Hourglass className="w-4 h-4" /> Duration
                </label>
                <select 
                  value={duration}
                  onChange={(e) => setDuration(Number(e.target.value))}
                  className="w-full bg-[#0A0C12] border border-[#1A1D2A] text-[#F0F2F8] rounded-xl px-4 py-2.5 focus:outline-none focus:border-[#F59E0B]"
                >
                  <option value={2}>2 hrs</option>
                  <option value={4}>4 hrs</option>
                  <option value={8}>Full day (8 hrs)</option>
                </select>
              </div>

              <div className="bg-[#0A0C12] rounded-xl p-4 mt-6 border border-[#1A1D2A] flex items-center justify-between">
                <span className="text-[#F0F2F8] font-medium">Total Price</span>
                <span className="text-xl font-bold text-[#F59E0B]">
                  ₹{(selectedGuide.price * duration).toLocaleString()}
                </span>
              </div>
            </div>

            <div className="p-6 border-t border-[#1A1D2A] flex flex-col gap-3">
              <button 
                onClick={handleConfirmBooking}
                disabled={!date}
                className="w-full py-3 rounded-xl font-bold bg-[#F59E0B] text-[#0A0C12] hover:bg-[#D97706] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Confirm Booking
              </button>
              <button 
                onClick={() => setIsModalOpen(false)}
                className="w-full py-2 text-sm text-[#3A4060] hover:text-[#F0F2F8] transition-colors"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Success Toast */}
      {showToast && selectedGuide && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0D9488] text-white px-6 py-3 rounded-full shadow-lg font-medium flex items-center gap-2 z-[110] animate-slide-up">
          <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
          Booking confirmed! {selectedGuide.name.split(' ')[0]} will meet you at your hotel lobby.
        </div>
      )}
    </div>
  );
}
