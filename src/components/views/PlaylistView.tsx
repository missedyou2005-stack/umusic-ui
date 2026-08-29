import React from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { TRACKS } from '../../data/musicData';

export const PlaylistView: React.FC = () => {
  const {
    selectedPlaylist,
    playTrack,
    currentTrack,
    isPlaying,
    setTrackMenuTarget,
    showToast
  } = usePlayer();

  if (!selectedPlaylist) return null;

  const playlistTracks = TRACKS;

  return (
    <div className="flex flex-col w-full pb-36 max-w-xl mx-auto animate-in fade-in duration-300">
      {/* Playlist Hero Landscape Header */}
      <div className="relative w-full h-[280px] flex flex-col justify-end p-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center scale-105"
          style={{ backgroundImage: `url('${selectedPlaylist.coverUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-[#121317]/60 to-transparent" />

        <div className="relative z-10 flex flex-col gap-1">
          <span className="font-inter text-[11px] font-bold text-[#ffb4a5] tracking-widest uppercase">
            Playlist
          </span>
          <h1 className="font-syne text-[30px] md:text-[34px] font-extrabold text-[#e3e2e7] tracking-tight leading-tight">
            {selectedPlaylist.title}
          </h1>
          <p className="font-inter text-[13px] text-[#e3beb7]/90 leading-snug max-w-sm">
            {selectedPlaylist.description || selectedPlaylist.subtitle}
          </p>
          <span className="font-inter text-[11px] text-[#e3beb7]/60 mt-1">
            {selectedPlaylist.trackCount} Tracks • {selectedPlaylist.duration}
          </span>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-3">
          <button
            onClick={() => playTrack(playlistTracks[0], playlistTracks)}
            className="w-14 h-14 rounded-full bg-[#ff5a3c] text-[#5c0800] flex items-center justify-center shadow-lg shadow-[#ff5a3c]/30 active:scale-90 transition-transform"
            aria-label="Play playlist"
          >
            <span
              className="material-symbols-outlined text-[32px]"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              play_arrow
            </span>
          </button>

          <button
            onClick={() => {
              const rand = Math.floor(Math.random() * playlistTracks.length);
              playTrack(playlistTracks[rand], playlistTracks);
              showToast('Shuffling playlist');
            }}
            className="w-12 h-12 rounded-full bg-[#292a2e] text-[#e3e2e7] flex items-center justify-center hover:bg-[#343439] active:scale-90 transition-transform shadow-md"
            aria-label="Shuffle"
          >
            <span className="material-symbols-outlined text-[24px]">shuffle</span>
          </button>
        </div>

        <button
          onClick={() => showToast('Playlist saved to your library')}
          className="w-10 h-10 rounded-full flex items-center justify-center text-[#e3beb7] hover:text-[#ff5a3c] active:scale-90"
        >
          <span className="material-symbols-outlined text-[26px]">bookmark_add</span>
        </button>
      </div>

      {/* Tracklist */}
      <div className="flex flex-col gap-1 px-6">
        {playlistTracks.map((track, idx) => {
          const isCurrent = currentTrack.id === track.id;
          return (
            <div
              key={track.id}
              onClick={() => playTrack(track, playlistTracks)}
              className={`flex items-center gap-3.5 p-2.5 -mx-2 rounded-xl transition-all cursor-pointer group active:scale-[0.98] ${
                isCurrent ? 'bg-[#ff5a3c]/15 text-[#ffb4a5]' : 'hover:bg-white/[0.04] text-[#e3e2e7]'
              }`}
            >
              <span className={`font-syne text-[15px] font-bold w-5 text-center ${isCurrent ? 'text-[#ff5a3c]' : 'text-[#e3beb7]/60'}`}>
                {idx + 1}
              </span>

              <img
                src={track.coverUrl}
                alt={track.title}
                className="w-12 h-12 rounded-lg object-cover bg-[#292a2e] shadow-sm"
              />

              <div className="flex-1 min-w-0">
                <h4 className="font-inter text-[15px] font-semibold truncate group-hover:text-[#ffb4a5] transition-colors">
                  {track.title}
                </h4>
                <p className="font-inter text-[12px] text-[#e3beb7]/80 truncate">
                  {track.artist}
                </p>
              </div>

              {isCurrent && isPlaying ? (
                <div className="w-4 h-4 flex items-end justify-between gap-[2px] mr-1">
                  <div className="w-[3px] bg-[#ff5a3c] h-full animate-[bounce_0.8s_infinite]" />
                  <div className="w-[3px] bg-[#ff5a3c] h-2/3 animate-[bounce_1s_infinite_0.2s]" />
                  <div className="w-[3px] bg-[#ff5a3c] h-4/5 animate-[bounce_0.6s_infinite_0.4s]" />
                </div>
              ) : (
                <span className="font-inter text-[12px] text-[#e3beb7]/60">
                  {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                </span>
              )}

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTrackMenuTarget(track);
                }}
                className="w-8 h-8 flex items-center justify-center text-[#e3beb7] hover:text-white active:scale-90"
              >
                <span className="material-symbols-outlined text-[22px]">more_vert</span>
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};
