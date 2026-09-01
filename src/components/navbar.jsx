import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import { HomeIcon, ClockIcon, ChartBarIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        
        {/* Logo */}
        <Link to="/" className="text-xl font-extrabold tracking-tight flex items-center">
          <span className="text-slate-900 font-extrabold">Keen</span>
          <span className="text-[#244B3B] font-semibold">Keeper</span>
        </Link>

        {/* Navigation Links */}
        <nav className="flex items-center gap-3">
          
          {/* Home Link */}
          <NavLink
            to="/"
            end
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#244B3B' : 'transparent',
              color: isActive ? '#ffffff' : '#475569'
            })}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all"
          >
            <HomeIcon className="w-5 h-5" />
            <span>Home</span>
          </NavLink>

          {/* Timeline Link */}
          <NavLink
            to="/timeline"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#244B3B' : 'transparent',
              color: isActive ? '#ffffff' : '#475569'
            })}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all"
          >
            <ClockIcon className="w-5 h-5" />
            <span>Timeline</span>
          </NavLink>

          {/* Stats Link */}
          <NavLink
            to="/stats"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#244B3B' : 'transparent',
              color: isActive ? '#ffffff' : '#475569'
            })}
            className="flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold transition-all"
          >
            <ChartBarIcon className="w-5 h-5" />
            <span>Stats</span>
          </NavLink>

        </nav>

      </div>
    </header>
  );
};

export default Navbar;