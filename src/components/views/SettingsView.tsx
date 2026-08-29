import React, { useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { ALEX_RIVERA_AVATAR } from '../../data/musicData';

export const SettingsView: React.FC = () => {
  const { theme, setTheme, cacheSizeMb, clearCache, showToast } = usePlayer();
  const [autoplay, setAutoplay] = useState(true);
  const [crossfade, setCrossfade] = useState(true);
  const [quality, setQuality] = useState<'Normal (160kbps)' | 'High (256kbps)' | 'Lossless FLAC'>('High (256kbps)');
  const [showQualityMenu, setShowQualityMenu] = useState(false);

  return (
    <div className="flex flex-col w-full pb-36 max-w-xl mx-auto space-y-7 px-5 pt-2 animate-in fade-in duration-300">
      {/* Account Section */}
      <section className="flex flex-col space-y-3">
        <h2 className="font-syne text-[18px] font-bold text-[#e3e2e7] uppercase tracking-tight">
          Account
        </h2>
        <div
          onClick={() => showToast('Managing Alex Rivera Premium Subscription')}
          className="flex items-center gap-4 bg-[#1a1b20] p-4 rounded-[20px] active:scale-[0.98] transition-all cursor-pointer border border-white/5 shadow-md group"
        >
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border border-white/10 shadow-sm">
            <img
              src={ALEX_RIVERA_AVATAR}
              alt="Alex Rivera"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col flex-1 min-w-0">
            <span className="text-[#e3e2e7] font-inter text-[17px] font-semibold truncate group-hover:text-[#ffb4a5] transition-colors">
              Alex Rivera
            </span>
            <span className="text-[#e3beb7] font-inter text-[13px]">
              Premium Individual
            </span>
          </div>
          <span className="material-symbols-outlined text-[#e3beb7]">chevron_right</span>
        </div>
      </section>

      {/* Playback Section */}
      <section className="flex flex-col space-y-3">
        <h2 className="font-syne text-[18px] font-bold text-[#e3e2e7] uppercase tracking-tight">
          Playback
        </h2>
        <div className="flex flex-col bg-[#0d0e12] rounded-[20px] overflow-hidden border border-white/5 shadow-md">
          {/* Autoplay Toggle */}
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-col pr-4">
              <span className="text-[#e3e2e7] font-inter text-[15px] font-semibold">
                Autoplay
              </span>
              <span className="text-[#e3beb7]/80 font-inter text-[12px]">
                Keep listening to similar tracks when your music ends.
              </span>
            </div>
            <button
              onClick={() => {
                setAutoplay(!autoplay);
                showToast(!autoplay ? 'Autoplay enabled' : 'Autoplay disabled');
              }}
              className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                autoplay ? 'bg-[#ff5a3c]' : 'bg-[#343439]'
              }`}
              role="switch"
              aria-checked={autoplay}
            >
              <span
                className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  autoplay ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="h-px bg-[#292a2e] mx-4" />

          {/* Crossfade */}
          <div className="flex items-center justify-between p-4">
            <div className="flex flex-col pr-4">
              <span className="text-[#e3e2e7] font-inter text-[15px] font-semibold">
                Crossfade
              </span>
              <span className="text-[#e3beb7]/80 font-inter text-[12px]">3s</span>
            </div>
            <button
              onClick={() => {
                setCrossfade(!crossfade);
                showToast(!crossfade ? 'Crossfade enabled (3s)' : 'Crossfade disabled');
              }}
              className={`relative inline-flex h-8 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none ${
                crossfade ? 'bg-[#ff5a3c]' : 'bg-[#343439]'
              }`}
              role="switch"
              aria-checked={crossfade}
            >
              <span
                className={`pointer-events-none inline-block h-7 w-7 transform rounded-full bg-white shadow-md ring-0 transition duration-200 ease-in-out ${
                  crossfade ? 'translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          <div className="h-px bg-[#292a2e] mx-4" />

          {/* Audio Quality */}
          <div
            onClick={() => setShowQualityMenu(!showQualityMenu)}
            className="flex items-center justify-between p-4 active:bg-[#1a1b20] transition-colors cursor-pointer"
          >
            <div className="flex flex-col pr-4">
              <span className="text-[#e3e2e7] font-inter text-[15px] font-semibold">
                Audio Quality
              </span>
              <span className="text-[#ff5a3c] font-inter text-[12px] font-semibold">
                {quality}
              </span>
            </div>
            <span className="material-symbols-outlined text-[#e3beb7]">
              {showQualityMenu ? 'expand_less' : 'expand_more'}
            </span>
          </div>

          {/* Quality Options Dropdown */}
          {showQualityMenu && (
            <div className="px-4 pb-4 pt-1 flex flex-col gap-2 bg-[#16181e] animate-in fade-in duration-200">
              {(['Normal (160kbps)', 'High (256kbps)', 'Lossless FLAC'] as const).map((q) => (
                <button
                  key={q}
                  onClick={() => {
                    setQuality(q);
                    setShowQualityMenu(false);
                    showToast(`Audio quality set to ${q}`);
                  }}
                  className={`flex items-center justify-between p-2.5 rounded-xl font-inter text-[13px] ${
                    quality === q ? 'bg-[#ff5a3c]/15 text-[#ffb4a5] font-semibold' : 'text-[#e3e2e7] hover:bg-white/5'
                  }`}
                >
                  <span>{q}</span>
                  {quality === q && <span className="material-symbols-outlined text-[18px]">check</span>}
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Appearance Section */}
      <section className="flex flex-col space-y-3">
        <h2 className="font-syne text-[18px] font-bold text-[#e3e2e7] uppercase tracking-tight">
          Appearance
        </h2>
        <div className="flex bg-[#0d0e12] p-1.5 rounded-[18px] border border-white/5">
          {(['dark', 'light', 'auto'] as const).map((t) => {
            const isSelected = theme === t;
            return (
              <button
                key={t}
                onClick={() => {
                  setTheme(t);
                  showToast(`Theme changed to ${t}`);
                }}
                className={`flex-1 py-2.5 px-4 rounded-xl font-inter text-[14px] font-semibold transition-all capitalize text-center ${
                  isSelected
                    ? 'text-[#e3e2e7] bg-[#292a2e] shadow-md'
                    : 'text-[#e3beb7]/70 hover:text-white'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </section>

      {/* Storage Section */}
      <section className="flex flex-col space-y-3">
        <h2 className="font-syne text-[18px] font-bold text-[#e3e2e7] uppercase tracking-tight">
          Storage
        </h2>
        <div className="flex flex-col bg-[#0d0e12] rounded-[20px] overflow-hidden p-5 space-y-4 border border-white/5 shadow-md">
          <div className="flex justify-between items-end">
            <div className="flex flex-col">
              <span className="text-[#e3e2e7] font-inter text-[15px] font-semibold">
                Cache
              </span>
              <span className="text-[#e3beb7]/80 font-inter text-[12px]">
                Temporary files for faster playback
              </span>
            </div>
            <span className="text-[#ff5a3c] font-syne text-[16px] font-bold">
              {cacheSizeMb > 0 ? `${(cacheSizeMb / 1000).toFixed(1)} GB` : '0 MB'}
            </span>
          </div>

          {/* Progress Bar */}
          <div className="w-full h-2 bg-[#292a2e] rounded-full overflow-hidden">
            <div
              className="h-full bg-[#ff5a3c] rounded-full transition-all duration-500"
              style={{ width: `${(cacheSizeMb / 2000) * 100}%` }}
            />
          </div>

          <button
            onClick={clearCache}
            className="w-full py-3.5 mt-1 rounded-xl bg-[#292a2e] hover:bg-[#343439] text-[#e3e2e7] font-inter text-[14px] font-semibold transition-all active:scale-[0.98] shadow-sm"
          >
            Clear Cache
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col space-y-3 pb-8">
        <h2 className="font-syne text-[18px] font-bold text-[#e3e2e7] uppercase tracking-tight">
          About
        </h2>
        <div className="flex flex-col bg-[#0d0e12] rounded-[20px] overflow-hidden border border-white/5 shadow-md">
          <div className="flex items-center justify-between p-4">
            <span className="text-[#e3e2e7] font-inter text-[15px] font-semibold">
              Version
            </span>
            <span className="text-[#e3beb7]/70 font-inter text-[13px]">8.12.0</span>
          </div>

          <div className="h-px bg-[#292a2e] mx-4" />

          <div
            onClick={() => showToast('Opening Terms & Privacy Policy')}
            className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <span className="text-[#e3e2e7] font-inter text-[15px] font-semibold">
              Terms & Privacy
            </span>
            <span className="material-symbols-outlined text-[#e3beb7] text-[20px]">
              open_in_new
            </span>
          </div>

          <div className="h-px bg-[#292a2e] mx-4" />

          <div
            onClick={() => showToast('Viewing Third-Party Software Licenses')}
            className="flex items-center justify-between p-4 hover:bg-white/5 transition-colors cursor-pointer"
          >
            <span className="text-[#e3e2e7] font-inter text-[15px] font-semibold">
              Third-Party Software
            </span>
            <span className="material-symbols-outlined text-[#e3beb7]">
              chevron_right
            </span>
          </div>
        </div>

        <div className="pt-6 pb-6 text-center">
          <span className="font-inter text-[11px] text-[#e3beb7]/50 uppercase tracking-[0.2em] font-semibold leading-relaxed">
            UMUSIC INC.
            <br />
            CRAFTED WITH INTENTION.
          </span>
        </div>
      </section>
    </div>
  );
};
