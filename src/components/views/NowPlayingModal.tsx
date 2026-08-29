import React, { useRef } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { AudioVisualizer } from '../AudioVisualizer';

export const NowPlayingModal: React.FC = () => {
  const {
    currentTrack,
    isPlaying,
    currentTime,
    duration,
    progressPercent,
    togglePlay,
    seekTo,
    nextTrack,
    prevTrack,
    isShuffle,
    toggleShuffle,
    isRepeat,
    toggleRepeat,
    likedTrackIds,
    toggleLike,
    viewMode,
    setViewMode,
    setIsQueueOpen,
    setTrackMenuTarget,
    openArtist,
    showToast
  } = usePlayer();

  const progressRef = useRef<HTMLDivElement>(null);

  if (viewMode !== 'now_playing') return null;

  const isLiked = likedTrackIds.has(currentTrack.id);
  const remainingSec = Math.max(0, duration - currentTime);

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = Math.floor(secs % 60);
    return `${mins}:${s.toString().padStart(2, '0')}`;
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current) return;
    const rect = progressRef.current.getBoundingClientRect();
    const pos = (e.clientX - rect.left) / rect.width;
    seekTo(pos * duration);
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#0e0f13] flex flex-col justify-between p-6 overflow-hidden animate-in fade-in slide-in-from-bottom duration-300">
      {/* Background Ambient Glow */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-[80px] opacity-25 scale-125 pointer-events-none"
        style={{ backgroundImage: `url('${currentTrack.coverUrl}')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80 pointer-events-none" />

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between pt-safe">
        <button
          onClick={() => setViewMode('main')}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#e3e2e7] bg-white/5 hover:bg-white/10 active:scale-90 transition-all"
          aria-label="Minimize"
        >
          <span className="material-symbols-outlined text-[26px]">keyboard_arrow_down</span>
        </button>

        <div className="flex flex-col items-center">
          <span className="font-inter text-[11px] font-bold text-[#e3beb7]/70 uppercase tracking-widest">
            Playing from {currentTrack.album}
          </span>
          <span className="font-syne text-[14px] font-bold text-[#e3e2e7]">
            Now Playing
          </span>
        </div>

        <button
          onClick={() => setTrackMenuTarget(currentTrack)}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#e3e2e7] bg-white/5 hover:bg-white/10 active:scale-90 transition-all"
          aria-label="Options"
        >
          <span className="material-symbols-outlined text-[22px]">more_horiz</span>
        </button>
      </div>

      {/* Center Artwork */}
      <div className="relative z-10 flex flex-col items-center justify-center my-auto px-4 max-w-sm mx-auto w-full">
        <div className="relative w-full aspect-square rounded-[32px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.8)] border border-white/10 group">
          <img
            src={currentTrack.coverUrl}
            alt={currentTrack.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Subtle live equalizer overlay */}
          {isPlaying && (
            <div className="absolute bottom-4 inset-x-4 h-6 bg-black/40 backdrop-blur-md rounded-xl px-3 py-1 flex items-center">
              <AudioVisualizer barsCount={24} heightClass="h-4" />
            </div>
          )}
        </div>
      </div>

      {/* Track Info & Controls Area */}
      <div className="relative z-10 flex flex-col gap-6 max-w-md mx-auto w-full pb-safe">
        {/* Title & Heart Button */}
        <div className="flex items-center justify-between px-1">
          <div className="flex flex-col min-w-0 pr-4">
            <h1 className="font-syne text-[24px] md:text-[28px] font-bold text-[#e3e2e7] truncate tracking-tight">
              {currentTrack.title}
            </h1>
            <p
              onClick={() => currentTrack.artistId && openArtist(currentTrack.artistId)}
              className="font-inter text-[16px] text-[#e3beb7] truncate hover:text-[#ffb4a5] cursor-pointer mt-0.5"
            >
              {currentTrack.artist}
            </p>
          </div>

          <button
            onClick={() => toggleLike(currentTrack.id)}
            className="w-12 h-12 rounded-full flex items-center justify-center active:scale-90 transition-transform shrink-0"
            aria-label="Like track"
          >
            <span
              className={`material-symbols-outlined text-[30px] ${
                isLiked ? 'text-[#ff5a3c]' : 'text-[#e3beb7]/80'
              }`}
              style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
          </button>
        </div>

        {/* Progress Bar & Timestamps */}
        <div className="flex flex-col gap-2">
          <div
            ref={progressRef}
            onClick={handleProgressBarClick}
            className="relative w-full h-3 bg-white/10 rounded-full cursor-pointer flex items-center group py-1"
          >
            <div className="w-full h-1.5 bg-white/15 rounded-full overflow-hidden">
              <div
                className="h-full bg-[#ff5a3c] rounded-full transition-all duration-150"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
            {/* Scrubber Thumb */}
            <div
              className="absolute w-4 h-4 bg-white rounded-full shadow-md scale-0 group-hover:scale-100 transition-transform -translate-x-1/2 pointer-events-none"
              style={{ left: `${progressPercent}%` }}
            />
          </div>

          <div className="flex items-center justify-between text-[12px] font-inter font-medium text-[#e3beb7]/80">
            <span>{formatTime(currentTime)}</span>
            <span>-{formatTime(remainingSec)}</span>
          </div>
        </div>

        {/* Transport Controls */}
        <div className="flex items-center justify-between px-2">
          <button
            onClick={toggleShuffle}
            className={`w-10 h-10 rounded-full flex items-center justify-center active:scale-90 transition-transform ${
              isShuffle ? 'text-[#ff5a3c]' : 'text-[#e3beb7]/60 hover:text-white'
            }`}
            aria-label="Shuffle"
          >
            <span className="material-symbols-outlined text-[24px]">shuffle</span>
          </button>

          <button
            onClick={prevTrack}
            className="w-12 h-12 rounded-full flex items-center justify-center text-[#e3e2e7] hover:text-white active:scale-90 transition-transform"
            aria-label="Previous track"
          >
            <span className="material-symbols-outlined text-[34px]">skip_previous</span>
          </button>

          {/* Big Tactile Play / Pause Button */}
          <button
            onClick={togglePlay}
            className="w-18 h-18 rounded-full bg-[#ff5a3c] text-[#5c0800] flex items-center justify-center shadow-[0_8px_25px_rgba(255,90,60,0.4)] active:scale-95 transition-all"
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            <span
              className="material-symbols-outlined text-[42px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              {isPlaying ? 'pause' : 'play_arrow'}
            </span>
          </button>

          <button
            onClick={nextTrack}
            className="w-12 h-12 rounded-full flex items-center justify-center text-[#e3e2e7] hover:text-white active:scale-90 transition-transform"
            aria-label="Next track"
          >
            <span className="material-symbols-outlined text-[34px]">skip_next</span>
          </button>

          <button
            onClick={toggleRepeat}
            className={`w-10 h-10 rounded-full flex items-center justify-center active:scale-90 transition-transform ${
              isRepeat ? 'text-[#ff5a3c]' : 'text-[#e3beb7]/60 hover:text-white'
            }`}
            aria-label="Repeat"
          >
            <span className="material-symbols-outlined text-[24px]">repeat</span>
          </button>
        </div>

        {/* Bottom Actions: Lyrics & Queue */}
        <div className="flex items-center justify-between pt-2 border-t border-white/10 px-2">
          <button
            onClick={() => showToast('Connected to Umusic Studio Hifi Output')}
            className="flex items-center gap-1.5 text-[#e3beb7]/70 hover:text-white text-[13px] font-inter font-medium"
          >
            <span className="material-symbols-outlined text-[18px]">speaker_group</span>
            <span>Umusic Studio</span>
          </button>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setViewMode('lyrics')}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 hover:bg-white/10 text-[#e3e2e7] text-[12px] font-inter font-semibold active:scale-95 transition-all"
            >
              <span className="material-symbols-outlined text-[18px] text-[#ff5a3c]">lyrics</span>
              <span>Lyrics</span>
            </button>

            <button
              onClick={() => setIsQueueOpen(true)}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-white/5 hover:bg-white/10 text-[#e3e2e7] active:scale-90 transition-all"
              aria-label="Open queue"
            >
              <span className="material-symbols-outlined text-[20px]">queue_music</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
