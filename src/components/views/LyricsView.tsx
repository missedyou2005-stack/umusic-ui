import React, { useRef, useEffect } from 'react';
import { usePlayer } from '../../context/PlayerContext';

export const LyricsView: React.FC = () => {
  const {
    currentTrack,
    currentTime,
    duration,
    progressPercent,
    isPlaying,
    togglePlay,
    seekTo,
    nextTrack,
    prevTrack,
    isShuffle,
    toggleShuffle,
    isRepeat,
    toggleRepeat,
    viewMode,
    setViewMode,
    setIsQueueOpen
  } = usePlayer();

  const activeLineRef = useRef<HTMLDivElement>(null);
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  if (viewMode !== 'lyrics') return null;

  const lyrics = currentTrack.lyrics || [
    { time: 0, text: 'Instrumental intro...' },
    { time: 10, text: 'Neon lights reflecting on the wet pavement' },
    { time: 25, text: 'Driving fast into the endless midnight' },
    { time: 40, text: 'Synthesizers pulsing with our heartbeat' },
    { time: 60, text: 'We will never fade into the dark' }
  ];

  // Find active line
  let activeIndex = 0;
  for (let i = 0; i < lyrics.length; i++) {
    if (currentTime >= lyrics[i].time) {
      activeIndex = i;
    }
  }

  // Smooth scroll to active line
  useEffect(() => {
    if (activeLineRef.current && scrollContainerRef.current) {
      activeLineRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
    }
  }, [activeIndex]);

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    seekTo(pos * duration);
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${mins}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0e0f13] flex flex-col justify-between overflow-hidden animate-in fade-in duration-300">
      {/* Dynamic Blurred Backdrop */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[90px] opacity-30 scale-125 pointer-events-none"
        style={{ backgroundImage: `url('${currentTrack.coverUrl}')` }}
      />
      <div className="absolute inset-0 bg-black/60 pointer-events-none" />

      {/* Top Bar */}
      <div className="relative z-20 flex items-center justify-between px-6 pt-safe pb-4 border-b border-white/5 bg-[#0e0f13]/40 backdrop-blur-md">
        <button
          onClick={() => setViewMode('now_playing')}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#e3e2e7] bg-white/5 hover:bg-white/10 active:scale-90 transition-all"
          aria-label="Back to player"
        >
          <span className="material-symbols-outlined text-[26px]">keyboard_arrow_down</span>
        </button>

        <div className="flex flex-col items-center max-w-[200px]">
          <span className="font-syne text-[14px] font-bold text-[#e3e2e7] truncate">
            {currentTrack.title}
          </span>
          <span className="font-inter text-[12px] text-[#e3beb7]/80 truncate">
            {currentTrack.artist}
          </span>
        </div>

        <button
          onClick={() => setIsQueueOpen(true)}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#e3e2e7] bg-white/5 hover:bg-white/10 active:scale-90 transition-all"
          aria-label="Queue"
        >
          <span className="material-symbols-outlined text-[22px]">queue_music</span>
        </button>
      </div>

      {/* Lyrics Scroll View */}
      <div
        ref={scrollContainerRef}
        className="relative z-10 flex-1 overflow-y-auto px-8 py-20 flex flex-col gap-8 max-w-xl mx-auto w-full hide-scrollbar"
      >
        {lyrics.map((line, idx) => {
          const isActive = idx === activeIndex;
          const isPassed = idx < activeIndex;

          return (
            <div
              key={idx}
              ref={isActive ? activeLineRef : null}
              onClick={() => seekTo(line.time)}
              className={`cursor-pointer transition-all duration-300 select-none ${
                isActive
                  ? 'font-syne text-[26px] md:text-[32px] font-bold text-[#ffffff] scale-105 origin-left drop-shadow-[0_4px_15px_rgba(255,90,60,0.5)]'
                  : isPassed
                  ? 'font-inter text-[20px] md:text-[24px] font-medium text-[#e3e2e7]/40 hover:text-[#e3e2e7]/70'
                  : 'font-inter text-[20px] md:text-[24px] font-medium text-[#e3e2e7]/20 hover:text-[#e3e2e7]/50'
              }`}
            >
              {line.text}
            </div>
          );
        })}
      </div>

      {/* Floating Bottom Mini Transport Dock */}
      <div className="relative z-20 px-5 pb-safe pb-4 pt-2">
        <div className="max-w-md mx-auto bg-[#16181e]/90 backdrop-blur-xl border border-white/10 rounded-[24px] p-4 shadow-2xl flex flex-col gap-3">
          {/* Scrubber */}
          <div
            ref={progressRef}
            onClick={handleProgressBarClick}
            className="w-full h-2 bg-white/10 rounded-full cursor-pointer flex items-center"
          >
            <div
              className="h-full bg-[#ff5a3c] rounded-full transition-all duration-150"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[11px] font-inter text-[#e3beb7]/70 -mt-1 px-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>

          {/* Controls row */}
          <div className="flex items-center justify-between px-2">
            <button
              onClick={toggleShuffle}
              className={`text-[20px] material-symbols-outlined ${
                isShuffle ? 'text-[#ff5a3c]' : 'text-[#e3beb7]/60'
              }`}
            >
              shuffle
            </button>

            <button
              onClick={prevTrack}
              className="material-symbols-outlined text-[28px] text-[#e3e2e7] hover:text-white"
            >
              skip_previous
            </button>

            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full bg-[#ff5a3c] text-[#5c0800] flex items-center justify-center shadow-lg active:scale-95 transition-transform"
            >
              <span
                className="material-symbols-outlined text-[30px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                {isPlaying ? 'pause' : 'play_arrow'}
              </span>
            </button>

            <button
              onClick={nextTrack}
              className="material-symbols-outlined text-[28px] text-[#e3e2e7] hover:text-white"
            >
              skip_next
            </button>

            <button
              onClick={toggleRepeat}
              className={`text-[20px] material-symbols-outlined ${
                isRepeat ? 'text-[#ff5a3c]' : 'text-[#e3beb7]/60'
              }`}
            >
              repeat
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
