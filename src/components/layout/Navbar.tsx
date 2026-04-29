import { Search, Bell, Menu, X } from 'lucide-react';
import { useState } from 'react';
import LanguageSwitcher from '../LanguageSwitcher';

interface NavbarProps {
  onMobileMenuToggle?: () => void;
  mobileMenuOpen?: boolean;
}

export default function Navbar({ onMobileMenuToggle, mobileMenuOpen }: NavbarProps) {
  const [searchFocused, setSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-slate-200/60">
      <div className="flex items-center justify-between h-16 px-4 md:px-8">
        {/* Mobile menu button */}
        <button
          onClick={onMobileMenuToggle}
          className="md:hidden p-2 rounded-xl text-slate-600 hover:bg-slate-100 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

        {/* Search Bar */}
        <div className={`relative flex-1 max-w-xl transition-all duration-300 ${searchFocused ? 'max-w-2xl' : ''}`}>
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
          <input
            type="text"
            placeholder="Search a destination, activity, or traveler..."
            className="w-full pl-11 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm text-slate-700 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-amber-500/30 focus:border-amber-500/50 focus:bg-white transition-all duration-200"
            onFocus={() => setSearchFocused(true)}
            onBlur={() => setSearchFocused(false)}
          />
        </div>

        {/* Right section */}
        <div className="flex items-center gap-3 ml-4">
          <LanguageSwitcher />
          
          {/* Notification Bell */}
          <button className="relative p-2.5 rounded-xl text-slate-500 hover:bg-slate-100 hover:text-slate-700 transition-all duration-200">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2 right-2 w-2 h-2 bg-amber-500 rounded-full ring-2 ring-white" />
          </button>

          {/* User Avatar (desktop) */}
          <div className="hidden md:flex items-center gap-3 pl-3 border-l border-slate-200">
            <img
              src="https://i.pravatar.cc/36?img=4"
              alt="User avatar"
              className="w-9 h-9 rounded-full ring-2 ring-slate-200 cursor-pointer hover:ring-amber-400 transition-all duration-200"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
