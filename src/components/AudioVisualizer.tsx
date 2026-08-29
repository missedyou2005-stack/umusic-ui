import React, { useEffect, useState } from 'react';
import { usePlayer } from '../context/PlayerContext';
import { audioEngine } from '../utils/audioEngine';

export const AudioVisualizer: React.FC<{ barsCount?: number; heightClass?: string }> = ({
  barsCount = 16,
  heightClass = 'h-8'
}) => {
  const { isPlaying } = usePlayer();
  const [data, setData] = useState<number[]>(new Array(barsCount).fill(15));

  useEffect(() => {
    let animId: number;
    const update = () => {
      if (isPlaying) {
        const raw = audioEngine.getFrequencyData();
        const step = Math.floor(raw.length / barsCount) || 1;
        const normalized = Array.from({ length: barsCount }, (_, i) => {
          const val = raw[i * step] || 30;
          return Math.max(10, Math.min(100, (val / 255) * 100));
        });
        setData(normalized);
      } else {
        setData(new Array(barsCount).fill(8));
      }
      animId = requestAnimationFrame(update);
    };

    animId = requestAnimationFrame(update);
    return () => cancelAnimationFrame(animId);
  }, [isPlaying, barsCount]);

  return (
    <div className={`flex items-end justify-between gap-1 w-full ${heightClass} px-1`}>
      {data.map((height, idx) => (
        <div
          key={idx}
          className="flex-1 bg-gradient-to-t from-[#ff5a3c] to-[#ffb4a5] rounded-full transition-all duration-100 ease-out"
          style={{
            height: `${height}%`,
            opacity: 0.75 + (height / 400)
          }}
        />
      ))}
    </div>
  );
};
