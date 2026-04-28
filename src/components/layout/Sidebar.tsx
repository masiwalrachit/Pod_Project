import { NavLink } from 'react-router-dom';
import {
  LayoutDashboard,
  Map,
  Compass,
  Users,
  Wallet,
  Plane,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { useState } from 'react';

const navItems = [
  { to: '/', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/plan', icon: Map, label: 'Plan' },
  { to: '/navigate', icon: Compass, label: 'Navigate' },
  { to: '/community', icon: Users, label: 'Community' },
  { to: '/money', icon: Wallet, label: 'Money' },
  { to: '/guide', icon: Map, label: 'Feature Guide' },
];

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-navy-900 text-white z-50 flex flex-col transition-all duration-300 ${
        collapsed ? 'w-[72px]' : 'w-[240px]'
      }`}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-6 border-b border-white/10">
        <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center flex-shrink-0">
          <Plane className="w-5 h-5 text-white" />
        </div>
        {!collapsed && (
          <span className="text-xl font-bold tracking-tight animate-fade-in">
            Way<span className="text-amber-400">find</span>
          </span>
        )}
      </div>

      {/* Nav Links */}
      <nav className="flex-1 py-4 px-3 space-y-1">
        {navItems.map((item) => (
          <NavLink
            key={item.to}
            to={item.to}
            end={item.to === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-3 rounded-xl transition-all duration-200 group ${
                isActive
                  ? 'bg-amber-500/15 text-amber-400'
                  : 'text-slate-400 hover:bg-white/5 hover:text-white'
              }`
            }
          >
            <item.icon className="w-5 h-5 flex-shrink-0" />
            {!collapsed && (
              <span className="text-sm font-medium animate-fade-in">{item.label}</span>
            )}
          </NavLink>
        ))}
      </nav>

      {/* Collapse Toggle */}
      <button
        onClick={() => setCollapsed(!collapsed)}
        className="flex items-center justify-center py-4 border-t border-white/10 text-slate-500 hover:text-white transition-colors"
      >
        {collapsed ? <ChevronRight className="w-5 h-5" /> : <ChevronLeft className="w-5 h-5" />}
      </button>

      {/* User Avatar */}
      <div className="flex items-center gap-3 px-5 py-4 border-t border-white/10">
        <img
          src="https://i.pravatar.cc/36?img=4"
          alt="User"
          className="w-9 h-9 rounded-full ring-2 ring-amber-500/50 flex-shrink-0"
        />
        {!collapsed && (
          <div className="animate-fade-in">
            <p className="text-sm font-semibold text-white">Rahul K.</p>
            <p className="text-xs text-slate-400">Explorer</p>
          </div>
        )}
      </div>
    </aside>
  );
}
