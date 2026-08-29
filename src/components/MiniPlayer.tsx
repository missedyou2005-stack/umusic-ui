import React from 'react';
import { usePlayer } from '../context/PlayerContext';

export const MiniPlayer: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    togglePlay,
    nextTrack,
    progressPercent,
    viewMode,
    setViewMode
  } = usePlayer();

  if (viewMode === 'now_playing' || viewMode === 'lyrics') {
    return null;
  }

  return (
    <div className="fixed bottom-[92px] inset-x-0 z-35 flex justify-center px-4 pointer-events-none">
      <div
        onClick={() => setViewMode('now_playing')}
        className="pointer-events-auto w-full max-w-md bg-[#1a1b20]/95 backdrop-blur-2xl border border-white/10 rounded-[18px] p-2.5 flex items-center gap-3 shadow-[0_8px_24px_rgba(0,0,0,0.6)] cursor-pointer active:scale-[0.98] transition-all relative overflow-hidden group"
      >
        {/* Live Progress Bar at the top of miniplayer */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-white/10">
          <div
            className="h-full bg-[#ff5a3c] transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Artwork */}
        <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 bg-[#292a2e] shadow-sm">
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className="w-full h-full object-cover"
          />
          {isPlaying && (
            <div className="absolute inset-0 bg-[#ff5a3c]/15 flex items-center justify-center">
              <div className="w-3 h-3 flex items-end justify-between gap-[2px]">
                <div className="w-[2px] bg-[#ff5a3c] h-full animate-[bounce_0.8s_infinite]" />
                <div className="w-[2px] bg-[#ff5a3c] h-2/3 animate-[bounce_1s_infinite_0.2s]" />
                <div className="w-[2px] bg-[#ff5a3c] h-4/5 animate-[bounce_0.6s_infinite_0.4s]" />
              </div>
            </div>
          )}
        </div>

        {/* Title & Artist */}
        <div className="flex-1 min-w-0 pr-1">
          <h4 className="font-syne text-[14px] font-bold text-[#e3e2e7] truncate group-hover:text-[#ffb4a5] transition-colors">
            {currentTrack.title}
          </h4>
          <p className="font-inter text-[12px] text-[#e3beb7]/80 truncate">
            {currentTrack.artist}
          </p>
        </div>

        {/* Play/Pause Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="w-10 h-10 rounded-full bg-[#ff5a3c] text-[#5c0800] flex items-center justify-center shadow-md active:scale-90 transition-transform shrink-0"
          aria-label={isPlaying ? 'Pause' : 'Play'}
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            {isPlaying ? 'pause' : 'play_arrow'}
          </span>
        </button>

        {/* Next Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            nextTrack();
          }}
          className="w-8 h-8 rounded-full flex items-center justify-center text-[#e3e2e7]/80 hover:text-white active:scale-90 transition-transform shrink-0"
          aria-label="Next track"
        >
          <span className="material-symbols-outlined text-[22px]">skip_next</span>
        </button>
      </div>
    </div>
  );
};
