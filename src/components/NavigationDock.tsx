import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import { ActiveTab } from '../types';

export const NavigationDock: React.FC = () => {
  const { activeTab, setActiveTab, viewMode, setViewMode } = usePlayer();

  const navItems: { id: ActiveTab; label: string; icon: string }[] = [
    { id: 'home', label: 'Home', icon: 'home' },
    { id: 'search', label: 'Search', icon: 'search' },
    { id: 'library', label: 'Library', icon: 'library_music' },
    { id: 'settings', label: 'Settings', icon: 'settings' }
  ];

  // If in fullscreen Now Playing or Lyrics view, don't show main nav dock (they have their own transport docks)
  if (viewMode === 'now_playing' || viewMode === 'lyrics') {
    return null;
  }

  return (
    <nav className="fixed bottom-6 inset-x-0 z-40 flex justify-center px-5 pointer-events-none pb-safe">
      <div className="glass-pill pointer-events-auto flex items-center justify-around h-16 w-full max-w-md rounded-full px-4 shadow-[0_12px_32px_rgba(0,0,0,0.5)] border border-white/10">
        {navItems.map((item) => {
          const isActive = activeTab === item.id && viewMode === 'main';
          return (
            <button
              key={item.id}
              onClick={() => {
                setActiveTab(item.id);
                if (viewMode !== 'main') setViewMode('main');
              }}
              className={`flex flex-col items-center justify-center w-14 h-14 rounded-full transition-all duration-200 active:scale-90 ${
                isActive ? 'text-[#ff5a3c]' : 'text-[#e3beb7]/70 hover:text-[#e3e2e7]'
              }`}
              aria-label={item.label}
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: isActive ? "'FILL' 1" : "'FILL' 0" }}
              >
                {item.icon}
              </span>
              <span className="font-inter text-[10px] font-semibold tracking-wider uppercase mt-0.5">
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
