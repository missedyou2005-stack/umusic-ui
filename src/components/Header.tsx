import React from 'react';
import { usePlayer } from '../context/PlayerContext';
import { UMUSIC_LOGO, USER_AVATAR } from '../data/musicData';

interface HeaderProps {
  title?: string;
  showBack?: boolean;
}

export const Header: React.FC<HeaderProps> = ({ title, showBack }) => {
  const { activeTab, setActiveTab, viewMode, goBack } = usePlayer();

  const getHeaderTitle = () => {
    if (title) return title;
    switch (viewMode) {
      case 'artist':
        return 'Artist';
      case 'album':
        return 'Album Detail';
      case 'playlist':
        return 'Library';
      case 'now_playing':
      case 'lyrics':
        return 'Now Playing';
      default:
        switch (activeTab) {
          case 'home':
            return 'Home';
          case 'search':
            return 'Search';
          case 'library':
            return 'Library';
          case 'settings':
            return 'Settings';
        }
    }
  };

  const isHome = activeTab === 'home' && viewMode === 'main';
  const isSettings = activeTab === 'settings' && viewMode === 'main';
  const isPlaylist = viewMode === 'playlist';
  const isSubView = showBack || (viewMode !== 'main' && viewMode !== 'now_playing' && viewMode !== 'lyrics');

  return (
    <header className="fixed top-0 inset-x-0 z-40 bg-[#121317]/85 backdrop-blur-xl pt-safe border-b border-white/[0.04]">
      <div className="h-16 md:h-20 px-5 max-w-xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          {isSubView ? (
            <button
              onClick={goBack}
              className="w-10 h-10 -ml-2 rounded-full flex items-center justify-center text-[#e3e2e7] bg-[#292a2e]/60 hover:bg-[#343439] active:scale-90 transition-all"
              aria-label="Go back"
            >
              <span className="material-symbols-outlined text-[20px]">arrow_back_ios_new</span>
            </button>
          ) : (
            <div className="flex items-center gap-2 cursor-pointer" onClick={() => setActiveTab('home')}>
              {isPlaylist ? (
                <span className="font-syne text-[26px] font-bold text-[#ffb4a5] tracking-tight">Umusic</span>
              ) : (
                <img
                  src={UMUSIC_LOGO}
                  alt="Umusic"
                  className="h-8 w-auto object-contain brightness-110"
                />
              )}
            </div>
          )}

          <span
            className={`font-syne text-[20px] md:text-[22px] font-bold text-[#e3e2e7] ${
              isSettings ? 'uppercase tracking-tight' : ''
            }`}
          >
            {getHeaderTitle()}
          </span>
        </div>

        <button
          onClick={() => setActiveTab('settings')}
          className="relative w-8 h-8 md:w-9 md:h-9 rounded-full overflow-hidden border border-white/15 active:scale-95 transition-transform shrink-0"
          aria-label="Settings & Profile"
        >
          <img
            src={USER_AVATAR}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </button>
      </div>
    </header>
  );
};
