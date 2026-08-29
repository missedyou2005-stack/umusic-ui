import React from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { TRACKS } from '../../data/musicData';

export const AlbumView: React.FC = () => {
  const {
    selectedAlbum,
    playTrack,
    currentTrack,
    isPlaying,
    setTrackMenuTarget,
    openArtist,
    showToast
  } = usePlayer();

  if (!selectedAlbum) return null;

  const albumTracks = TRACKS.filter(t => t.albumId === selectedAlbum.id || t.album === selectedAlbum.title);

  return (
    <div className="flex flex-col w-full pb-36 max-w-xl mx-auto px-5 pt-2 animate-in fade-in duration-300">
      {/* Artwork Header */}
      <div className="flex flex-col items-center text-center mt-2 mb-6">
        <div className="relative w-64 h-64 rounded-[28px] overflow-hidden shadow-2xl bg-[#1f1f24] border border-white/10 mb-5 group">
          <img
            src={selectedAlbum.coverUrl}
            alt={selectedAlbum.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        <h1 className="font-syne text-[28px] font-bold text-[#e3e2e7] tracking-tight leading-tight">
          {selectedAlbum.title}
        </h1>
        <p
          onClick={() => selectedAlbum.artistId && openArtist(selectedAlbum.artistId)}
          className="font-inter text-[15px] font-semibold text-[#ffb4a5] mt-1 hover:underline cursor-pointer"
        >
          {selectedAlbum.artist}
        </p>
        <span className="font-inter text-[12px] text-[#e3beb7]/70 mt-1">
          Album • {selectedAlbum.year} • {selectedAlbum.tracksCount} Songs • {selectedAlbum.duration}
        </span>
      </div>

      {/* Play / Shuffle Bar */}
      <div className="flex items-center justify-between gap-4 mb-6">
        <button
          onClick={() => {
            if (albumTracks.length > 0) {
              playTrack(albumTracks[0], albumTracks);
            }
          }}
          className="flex-1 h-13 rounded-full bg-[#ff5a3c] text-[#5c0800] font-inter text-[15px] font-bold flex items-center justify-center gap-2 shadow-lg shadow-[#ff5a3c]/25 active:scale-95 transition-transform"
        >
          <span
            className="material-symbols-outlined text-[24px]"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            play_arrow
          </span>
          <span>Play</span>
        </button>

        <button
          onClick={() => {
            if (albumTracks.length > 0) {
              const rand = Math.floor(Math.random() * albumTracks.length);
              playTrack(albumTracks[rand], albumTracks);
              showToast('Shuffling album tracks');
            }
          }}
          className="flex-1 h-13 rounded-full bg-[#292a2e] text-[#e3e2e7] font-inter text-[15px] font-semibold flex items-center justify-center gap-2 hover:bg-[#343439] active:scale-95 transition-transform shadow-md"
        >
          <span className="material-symbols-outlined text-[22px]">shuffle</span>
          <span>Shuffle</span>
        </button>
      </div>

      {/* Tracklist */}
      <div className="flex flex-col gap-1">
        {albumTracks.map((track, idx) => {
          const isCurrent = currentTrack.id === track.id;
          return (
            <div
              key={track.id}
              onClick={() => playTrack(track, albumTracks)}
              className={`flex items-center gap-4 p-3 rounded-xl transition-all cursor-pointer group active:scale-[0.98] ${
                isCurrent ? 'bg-[#ff5a3c]/15 text-[#ffb4a5]' : 'hover:bg-white/[0.04] text-[#e3e2e7]'
              }`}
            >
              <span className={`font-syne text-[15px] font-bold w-5 text-center ${isCurrent ? 'text-[#ff5a3c]' : 'text-[#e3beb7]/60'}`}>
                {idx + 1}
              </span>

              <div className="flex-1 min-w-0">
                <h4 className="font-inter text-[15px] font-semibold truncate group-hover:text-[#ffb4a5] transition-colors">
                  {track.title}
                </h4>
                <p className="font-inter text-[12px] text-[#e3beb7]/70 truncate">
                  {track.artist}
                </p>
              </div>

              {isCurrent && isPlaying ? (
                <div className="w-4 h-4 flex items-end justify-between gap-[2px] mr-2">
                  <div className="w-[3px] bg-[#ff5a3c] h-full animate-[bounce_0.8s_infinite]" />
                  <div className="w-[3px] bg-[#ff5a3c] h-2/3 animate-[bounce_1s_infinite_0.2s]" />
                  <div className="w-[3px] bg-[#ff5a3c] h-4/5 animate-[bounce_0.6s_infinite_0.4s]" />
                </div>
              ) : (
                <span className="font-inter text-[12px] text-[#e3beb7]/70">
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
