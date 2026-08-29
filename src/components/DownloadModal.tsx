import React, { useState } from 'react';
import { usePlayer } from '../context/PlayerContext';
import { PLAYLISTS, ALBUMS } from '../data/musicData';

export const DownloadModal: React.FC = () => {
  const { downloadModalOpen, setDownloadModalOpen, showToast } = usePlayer();
  const [downloadingId, setDownloadingId] = useState<string | null>(null);

  if (!downloadModalOpen) return null;

  const handleDownload = (name: string, id: string) => {
    setDownloadingId(id);
    setTimeout(() => {
      setDownloadingId(null);
      setDownloadModalOpen(false);
      showToast(`Downloaded "${name}" for offline listening (145 MB)`);
    }, 1200);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-center justify-center p-5 animate-in fade-in duration-200"
      onClick={() => setDownloadModalOpen(false)}
    >
      <div
        className="w-full max-w-md bg-[#16181e] border border-white/10 rounded-[28px] p-6 flex flex-col gap-4 shadow-2xl animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[#ff5a3c]">download_for_offline</span>
            <h3 className="font-syne text-[20px] font-bold text-[#e3e2e7]">Download Audio</h3>
          </div>
          <button
            onClick={() => setDownloadModalOpen(false)}
            className="w-8 h-8 rounded-full flex items-center justify-center text-[#e3beb7] hover:text-white bg-white/5 active:scale-90"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        <p className="font-inter text-[13px] text-[#e3beb7]/80 leading-relaxed">
          Select albums or playlists to save locally for offline playback at 256kbps high fidelity.
        </p>

        <div className="flex flex-col gap-2 max-h-60 overflow-y-auto pr-1">
          {PLAYLISTS.map((pl) => (
            <div
              key={pl.id}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img src={pl.coverUrl} alt={pl.title} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex flex-col min-w-0">
                  <span className="font-inter text-[14px] font-semibold text-[#e3e2e7] truncate">
                    {pl.title}
                  </span>
                  <span className="font-inter text-[11px] text-[#e3beb7]/70">
                    {pl.trackCount} Tracks
                  </span>
                </div>
              </div>
              <button
                disabled={downloadingId === pl.id}
                onClick={() => handleDownload(pl.title, pl.id)}
                className="px-3.5 py-1.5 rounded-full bg-[#ff5a3c] text-[#5c0800] font-inter text-[12px] font-bold hover:bg-[#ff6d52] active:scale-95 transition-all disabled:opacity-50"
              >
                {downloadingId === pl.id ? 'Saving...' : 'Download'}
              </button>
            </div>
          ))}

          {ALBUMS.map((alb) => (
            <div
              key={alb.id}
              className="flex items-center justify-between p-2.5 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-center gap-3 min-w-0">
                <img src={alb.coverUrl} alt={alb.title} className="w-10 h-10 rounded-lg object-cover" />
                <div className="flex flex-col min-w-0">
                  <span className="font-inter text-[14px] font-semibold text-[#e3e2e7] truncate">
                    {alb.title}
                  </span>
                  <span className="font-inter text-[11px] text-[#e3beb7]/70">
                    {alb.artist} • {alb.tracksCount} Songs
                  </span>
                </div>
              </div>
              <button
                disabled={downloadingId === alb.id}
                onClick={() => handleDownload(alb.title, alb.id)}
                className="px-3.5 py-1.5 rounded-full bg-[#ff5a3c] text-[#5c0800] font-inter text-[12px] font-bold hover:bg-[#ff6d52] active:scale-95 transition-all disabled:opacity-50"
              >
                {downloadingId === alb.id ? 'Saving...' : 'Download'}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
