import React from 'react';
import { usePlayer } from '../../context/PlayerContext';

export const QueueDrawer: React.FC = () => {
  const {
    isQueueOpen,
    setIsQueueOpen,
    queue,
    currentTrack,
    playTrack,
    removeFromQueue,
    showToast
  } = usePlayer();

  if (!isQueueOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-end justify-center p-4 animate-in fade-in duration-200"
      onClick={() => setIsQueueOpen(false)}
    >
      <div
        className="w-full max-w-md max-h-[80vh] bg-[#16181e] border border-white/10 rounded-[32px] p-6 flex flex-col gap-4 shadow-2xl overflow-hidden animate-in slide-in-from-bottom duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-2 border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ff5a3c]">queue_music</span>
            <h3 className="font-syne text-[20px] font-bold text-[#e3e2e7]">Up Next Queue</h3>
          </div>
          <button
            onClick={() => setIsQueueOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#e3beb7] hover:text-white bg-white/5 active:scale-90"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Currently Playing Track */}
        <div className="flex flex-col gap-2">
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#ffb4a5]">
            Now Playing
          </span>
          <div className="flex items-center gap-3 p-3 rounded-2xl bg-[#ff5a3c]/15 border border-[#ff5a3c]/20">
            <img
              src={currentTrack.coverUrl}
              alt={currentTrack.title}
              className="w-12 h-12 rounded-xl object-cover"
            />
            <div className="flex-1 min-w-0">
              <h4 className="font-inter text-[15px] font-bold text-[#ffdad3] truncate">
                {currentTrack.title}
              </h4>
              <p className="font-inter text-[12px] text-[#ffb4a5] truncate">
                {currentTrack.artist}
              </p>
            </div>
            <div className="w-4 h-4 flex items-end justify-between gap-[2px]">
              <div className="w-[3px] bg-[#ff5a3c] h-full animate-[bounce_0.8s_infinite]" />
              <div className="w-[3px] bg-[#ff5a3c] h-2/3 animate-[bounce_1s_infinite_0.2s]" />
              <div className="w-[3px] bg-[#ff5a3c] h-4/5 animate-[bounce_0.6s_infinite_0.4s]" />
            </div>
          </div>
        </div>

        {/* Up Next List */}
        <div className="flex-1 overflow-y-auto flex flex-col gap-2 py-1 pr-1 hide-scrollbar">
          <span className="font-inter text-[11px] font-bold uppercase tracking-widest text-[#e3beb7]/70 pt-2">
            Next in Queue ({queue.length})
          </span>
          {queue.map((track, idx) => {
            const isCurrent = track.id === currentTrack.id;
            return (
              <div
                key={`${track.id}-${idx}`}
                onClick={() => playTrack(track)}
                className={`flex items-center gap-3 p-2.5 rounded-xl transition-all cursor-pointer group ${
                  isCurrent ? 'bg-white/5 opacity-60' : 'hover:bg-white/5'
                }`}
              >
                <span className="font-syne text-[13px] text-[#e3beb7]/50 w-5 text-center">
                  {idx + 1}
                </span>
                <img
                  src={track.coverUrl}
                  alt={track.title}
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <div className="flex-1 min-w-0">
                  <h5 className="font-inter text-[14px] font-semibold text-[#e3e2e7] truncate group-hover:text-[#ffb4a5] transition-colors">
                    {track.title}
                  </h5>
                  <p className="font-inter text-[12px] text-[#e3beb7]/70 truncate">
                    {track.artist}
                  </p>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    removeFromQueue(idx);
                    showToast('Track removed from queue');
                  }}
                  className="w-8 h-8 flex items-center justify-center text-[#e3beb7]/60 hover:text-[#ff5a3c] active:scale-90"
                >
                  <span className="material-symbols-outlined text-[18px]">remove_circle_outline</span>
                </button>
              </div>
            );
          })}
        </div>

        {/* Bottom Actions */}
        <button
          onClick={() => {
            setIsQueueOpen(false);
            showToast('Queue cleared');
          }}
          className="w-full py-3 rounded-2xl bg-[#292a2e] text-[#e3e2e7] font-inter text-[14px] font-semibold hover:bg-[#343439] active:scale-95 transition-all"
        >
          Close Queue
        </button>
      </div>
    </div>
  );
};
