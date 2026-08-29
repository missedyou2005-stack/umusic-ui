import React from 'react';
import { usePlayer } from '../context/PlayerContext';

export const TrackOptionsMenu: React.FC = () => {
  const {
    trackMenuTarget,
    setTrackMenuTarget,
    playTrack,
    addToQueue,
    toggleLike,
    likedTrackIds,
    openArtist,
    openAlbum,
    showToast
  } = usePlayer();

  if (!trackMenuTarget) return null;

  const isLiked = likedTrackIds.has(trackMenuTarget.id);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/70 backdrop-blur-md flex items-end justify-center p-4"
      onClick={() => setTrackMenuTarget(null)}
    >
      <div
        className="w-full max-w-md bg-[#1a1b20] border border-white/10 rounded-[28px] p-5 flex flex-col gap-4 shadow-2xl animate-in fade-in slide-in-from-bottom duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Track header preview */}
        <div className="flex items-center gap-3 pb-3 border-b border-white/10">
          <img
            src={trackMenuTarget.coverUrl}
            alt={trackMenuTarget.title}
            className="w-14 h-14 rounded-xl object-cover shadow-md"
          />
          <div className="flex-1 min-w-0">
            <h4 className="font-syne text-[16px] font-bold text-[#e3e2e7] truncate">
              {trackMenuTarget.title}
            </h4>
            <p className="font-inter text-[13px] text-[#e3beb7]/80 truncate">
              {trackMenuTarget.artist} • {trackMenuTarget.album}
            </p>
          </div>
        </div>

        {/* Action List */}
        <div className="flex flex-col gap-1">
          <button
            onClick={() => {
              playTrack(trackMenuTarget);
              setTrackMenuTarget(null);
            }}
            className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-white/5 active:scale-[0.98] text-[#e3e2e7] text-[15px] font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[#ff5a3c]">play_arrow</span>
            <span>Play Now</span>
          </button>

          <button
            onClick={() => {
              addToQueue(trackMenuTarget);
              setTrackMenuTarget(null);
            }}
            className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-white/5 active:scale-[0.98] text-[#e3e2e7] text-[15px] font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[#5fd7e9]">queue_music</span>
            <span>Add to Queue</span>
          </button>

          <button
            onClick={() => {
              toggleLike(trackMenuTarget.id);
              setTrackMenuTarget(null);
            }}
            className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-white/5 active:scale-[0.98] text-[#e3e2e7] text-[15px] font-medium transition-colors"
          >
            <span
              className={`material-symbols-outlined ${isLiked ? 'text-[#ff5a3c]' : 'text-[#e3beb7]'}`}
              style={{ fontVariationSettings: isLiked ? "'FILL' 1" : "'FILL' 0" }}
            >
              favorite
            </span>
            <span>{isLiked ? 'Remove from Liked Songs' : 'Save to Liked Songs'}</span>
          </button>

          {trackMenuTarget.artistId && (
            <button
              onClick={() => {
                openArtist(trackMenuTarget.artistId);
                setTrackMenuTarget(null);
              }}
              className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-white/5 active:scale-[0.98] text-[#e3e2e7] text-[15px] font-medium transition-colors"
            >
              <span className="material-symbols-outlined text-[#ffb4a5]">person</span>
              <span>Go to Artist ({trackMenuTarget.artist})</span>
            </button>
          )}

          {trackMenuTarget.albumId && (
            <button
              onClick={() => {
                openAlbum(trackMenuTarget.albumId);
                setTrackMenuTarget(null);
              }}
              className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-white/5 active:scale-[0.98] text-[#e3e2e7] text-[15px] font-medium transition-colors"
            >
              <span className="material-symbols-outlined text-[#9af0ff]">album</span>
              <span>View Album ({trackMenuTarget.album})</span>
            </button>
          )}

          <button
            onClick={() => {
              showToast('Track link copied to clipboard');
              setTrackMenuTarget(null);
            }}
            className="flex items-center gap-3.5 px-3 py-2.5 rounded-xl hover:bg-white/5 active:scale-[0.98] text-[#e3e2e7] text-[15px] font-medium transition-colors"
          >
            <span className="material-symbols-outlined text-[#e3beb7]">share</span>
            <span>Share Track</span>
          </button>
        </div>

        {/* Close */}
        <button
          onClick={() => setTrackMenuTarget(null)}
          className="w-full py-3 rounded-xl bg-[#292a2e] text-[#e3e2e7] font-semibold text-[14px] active:scale-[0.98] transition-transform"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};
