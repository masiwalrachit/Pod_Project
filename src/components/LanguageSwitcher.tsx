import { useState, useRef, useEffect } from 'react';
import { Globe, Check, Search } from 'lucide-react';
import { languages } from '../data/languages';

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState(languages[0]);
  const [searchQuery, setSearchQuery] = useState('');
  const [focusedIndex, setFocusedIndex] = useState(0);
  const [toast, setToast] = useState<{show: boolean, lang: string}>({show: false, lang: ''});
  
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  const filteredLanguages = languages.filter(l => 
    l.native.toLowerCase().includes(searchQuery.toLowerCase()) || 
    l.english.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen) {
      setSearchQuery('');
      setFocusedIndex(languages.findIndex(l => l.code === selectedLang.code));
      setTimeout(() => searchInputRef.current?.focus(), 10);
    }
  }, [isOpen, selectedLang.code]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setFocusedIndex(prev => (prev < filteredLanguages.length - 1 ? prev + 1 : prev));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setFocusedIndex(prev => (prev > 0 ? prev - 1 : prev));
    } else if (e.key === 'Enter') {
      e.preventDefault();
      if (filteredLanguages[focusedIndex]) {
        handleSelect(filteredLanguages[focusedIndex]);
      }
    } else if (e.key === 'Escape') {
      setIsOpen(false);
    }
  };

  const handleSelect = (lang: any) => {
    setSelectedLang(lang);
    setIsOpen(false);
    setToast({ show: true, lang: lang.english });
    setTimeout(() => setToast({ show: false, lang: '' }), 3000);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="relative p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all duration-200 flex items-center justify-center"
      >
        <Globe className="w-5 h-5" />
        <span className="absolute -bottom-1 -right-1 bg-[#F59E0B] text-[#0A0C12] text-[10px] font-bold px-1 rounded-sm shadow-sm ring-1 ring-white">
          {selectedLang.code}
        </span>
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-72 bg-[#0A0C12] border border-[#1A1D2A] rounded-2xl shadow-xl overflow-hidden z-50 flex flex-col [color-scheme:dark]">
          <div className="p-4 border-b border-[#1A1D2A]">
            <h3 className="text-[#F0F2F8] font-bold mb-3">Display Language</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#3A4060]" />
              <input 
                ref={searchInputRef}
                type="text" 
                placeholder="Search languages..." 
                value={searchQuery}
                onChange={e => {
                  setSearchQuery(e.target.value);
                  setFocusedIndex(0);
                }}
                onKeyDown={handleKeyDown}
                className="w-full pl-9 pr-3 py-2 bg-[#0F1118] border border-[#1A1D2A] rounded-lg text-sm text-[#F0F2F8] placeholder:text-[#3A4060] focus:outline-none focus:border-[#F59E0B]"
              />
            </div>
          </div>
          <div className="max-h-64 overflow-y-auto p-2">
            {filteredLanguages.length === 0 ? (
              <div className="p-3 text-sm text-[#3A4060] text-center">No languages found.</div>
            ) : (
              filteredLanguages.map((lang, idx) => (
                <button
                  key={lang.code}
                  onClick={() => handleSelect(lang)}
                  onMouseEnter={() => setFocusedIndex(idx)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left transition-colors ${
                    idx === focusedIndex ? 'bg-[#1A1D2A]' : 'hover:bg-[#1A1D2A]'
                  }`}
                >
                  <div>
                    <div className={`text-sm font-bold ${lang.code === selectedLang.code ? 'text-[#F59E0B]' : 'text-[#F0F2F8]'}`}>
                      {lang.native}
                    </div>
                    <div className="text-xs text-[#3A4060]">{lang.english}</div>
                  </div>
                  {lang.code === selectedLang.code && (
                    <Check className="w-4 h-4 text-[#F59E0B]" />
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}

      {toast.show && (
        <div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-[#0D9488] text-white px-6 py-3 rounded-full shadow-lg font-medium flex items-center gap-2 z-[110] animate-slide-up whitespace-nowrap">
          <div className="w-2 h-2 rounded-full bg-white/40 animate-pulse" />
          Language set to {toast.lang}. Full translation coming soon.
        </div>
      )}
    </div>
  );
}
