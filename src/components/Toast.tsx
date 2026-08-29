import React from 'react';
import { usePlayer } from '../context/PlayerContext';

export const Toast: React.FC = () => {
  const { toastMessage } = usePlayer();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-20 inset-x-0 z-50 flex justify-center pointer-events-none px-4 animate-in fade-in slide-in-from-top-4 duration-200">
      <div className="bg-[#1f2026] text-[#e3e2e7] border border-white/10 rounded-full px-5 py-2.5 shadow-2xl flex items-center gap-2.5 max-w-sm pointer-events-auto">
        <span className="material-symbols-outlined text-[#ff5a3c] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          check_circle
        </span>
        <span className="font-inter text-[13px] font-medium truncate">
          {toastMessage}
        </span>
      </div>
    </div>
  );
};
