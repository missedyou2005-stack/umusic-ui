import React from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { TRACKS, ARTISTS, UMUSIC_LOGO } from '../../data/musicData';

export const HomeView: React.FC = () => {
  const { playTrack, openArtist, openPlaylist, setTrackMenuTarget, setActiveTab } = usePlayer();

  const recentlyPlayedTracks = [
    {
      track: TRACKS.find(t => t.id === 'track-midnight-city') || TRACKS[4],
      title: 'Midnight City',
      subtitle: 'Synthwave Mix',
      bgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD4sbAGQ6WnPJv2_eMODevrOwGd5voISTTpXQwx6f96OOBlD05IvYUkue1Nb5uBzGu3W4_1_tjp2BeKgZikEqwRXnt76P_GGA-ALQQoY8gukVkuT8LP6fh4u0LHg3wKRzaclcp0_scSdUMk_-g_nD3poC_vGTbhmKXKFIy7uLAFxdknXqwwH9ymsH0m7ktbRS16XWaeQAgFEt5FuWgeNrrtPPovUX8Yh9sJBQ9DjCJX6pqvTREyHRA',
      isPrimary: true
    },
    {
      track: TRACKS.find(t => t.id === 'track-focus-flow') || TRACKS[5],
      title: 'Focus Flow',
      subtitle: 'Ambient Beats',
      bgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTTuI0WqDgHQf9IviPUcKRkuURWCyDzRk9oDASPWsTXzKQFrV59KvDrD9NDZHYImW-dcha0pP8L7pP0H_ndGJppmc_AgFU978ixjUEIgFoRNRyFCOh0Ms1lbUwaC34SdAk7HeGvjkiIwVFub3eWRS32yucD1w67mFTsiz0ijeD1RuZtlclFer47_BwRzeDtw3SlkiweJZWsQ3evQCGXJ6ZLrDViwRTNoCMeO0jPNUZyo-iF5ULR78',
      isPrimary: false
    }
  ];

  const trendingTracks = [
    {
      rank: 1,
      track: TRACKS.find(t => t.id === 'track-crimson-horizon') || TRACKS[1]
    },
    {
      rank: 2,
      track: TRACKS.find(t => t.id === 'track-velocity') || TRACKS[2]
    },
    {
      rank: 3,
      track: TRACKS.find(t => t.id === 'track-lost-in-the-wash') || TRACKS[3]
    }
  ];

  return (
    <div className="flex flex-col w-full pb-36 max-w-xl mx-auto space-y-8 animate-in fade-in duration-300">
      {/* Wordmark Section */}
      <div className="flex items-center px-5 pt-4">
        <img
          src={UMUSIC_LOGO}
          alt="Umusic Wordmark"
          className="h-10 w-auto object-contain brightness-110"
        />
      </div>

      {/* Recently Played */}
      <section className="flex flex-col gap-4">
        <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] px-5 tracking-tight">
          Recently Played
        </h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-4 px-5 pb-2 hide-scrollbar">
          {recentlyPlayedTracks.map((item, idx) => (
            <div
              key={idx}
              onClick={() => playTrack(item.track)}
              className="relative min-w-[280px] h-40 rounded-[20px] overflow-hidden snap-center glass-pill shrink-0 cursor-pointer active:scale-[0.98] transition-all shadow-lg group"
            >
              <div
                className="absolute inset-0 bg-cover bg-center opacity-85 group-hover:scale-105 transition-transform duration-500"
                style={{ backgroundImage: `url('${item.bgUrl}')` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0e0f13]/95 via-[#0e0f13]/30 to-transparent" />

              <div className="absolute bottom-4 left-4 right-4 flex items-end justify-between">
                <div>
                  <h3 className="font-inter text-[18px] font-semibold text-[#e3e2e7] line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="font-inter text-[12px] font-medium text-[#e3beb7]">
                    {item.subtitle}
                  </p>
                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    playTrack(item.track);
                  }}
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 active:scale-95 shadow-md transition-transform ${
                    item.isPrimary
                      ? 'bg-[#ff5a3c] text-[#5c0800]'
                      : 'bg-[#343439] text-[#e3e2e7]'
                  }`}
                  aria-label="Play track"
                >
                  <span
                    className="material-symbols-outlined"
                    style={{ fontVariationSettings: "'FILL' 1" }}
                  >
                    play_arrow
                  </span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Made For You (Hero Feature) */}
      <section className="flex flex-col gap-4 px-5">
        <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
          Made For You
        </h2>
        <div
          onClick={() => playTrack(TRACKS[0])}
          className="relative w-full h-[360px] rounded-[24px] overflow-hidden shadow-2xl group active:scale-[0.98] transition-all duration-300 cursor-pointer border border-white/5"
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center scale-105 group-hover:scale-100 transition-transform duration-700"
            style={{
              backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuDnVcB0F6cEQLt0KYwxksCGGbKpODkzO3qojkqEOnDavjvCD2s-Zb9pJnoPhwXAm4T6hB46kEZGXXaE4HTZ7AQmHOSFyEmeZ9vqYx3HISjAH_KHud7XkCQUekNHnYI_etynQIAdjkoFnQiRcS29cSrSg4kdYoULfL23mafa9CVwCv0IP44RSTWTAKv9BUSJ7G9XLE2M_9UjA26WiYnErN1IfijVPCpltDk1NOFQhp860aLk08k_gkc')`
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0e0f13]/40 to-[#0e0f13]/95" />

          {/* Top Badge */}
          <div className="absolute top-4 left-4 bg-[#0e0f13]/60 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/10">
            <span className="font-inter text-[11px] font-bold text-[#e3e2e7] uppercase tracking-widest">
              Daily Discovery
            </span>
          </div>

          {/* Bottom Content */}
          <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4">
            <div>
              <h1 className="font-syne text-[26px] font-bold text-[#e3e2e7] leading-tight mb-1">
                Neon Echoes &<br />Dark Matter
              </h1>
              <p className="font-inter text-[14px] text-[#e3beb7]/90 leading-relaxed">
                Your personalized mix of underground electronic and deep house.
              </p>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                playTrack(TRACKS[0]);
              }}
              className="w-full h-14 bg-[#ff5a3c] hover:bg-[#ff6d52] text-[#5c0800] font-inter text-[16px] font-bold rounded-xl active:scale-95 transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#ff5a3c]/25"
            >
              <span
                className="material-symbols-outlined text-[24px]"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                play_arrow
              </span>
              <span>Play Mix</span>
            </button>
          </div>
        </div>
      </section>

      {/* Trending Now (List) */}
      <section className="flex flex-col gap-4 px-5">
        <div className="flex items-center justify-between">
          <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
            Trending Now
          </h2>
          <span className="font-inter text-[12px] font-semibold text-[#ffb4a5] uppercase tracking-wider">
            Top 50
          </span>
        </div>

        <div className="flex flex-col gap-3">
          {trendingTracks.map((item) => (
            <div
              key={item.track.id}
              onClick={() => playTrack(item.track)}
              className="flex items-center gap-4 group active:scale-[0.98] transition-transform p-2 -mx-2 rounded-xl hover:bg-white/[0.03] cursor-pointer"
            >
              <span className="font-syne text-[36px] font-extrabold text-[#343439] w-10 text-right group-hover:text-[#ff5a3c] transition-colors">
                {item.rank}
              </span>
              <div className="w-14 h-14 rounded-xl bg-[#292a2e] overflow-hidden shrink-0 relative shadow-sm">
                <img
                  src={item.track.coverUrl}
                  alt={item.track.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 min-w-0 flex flex-col justify-center">
                <h3 className="font-inter text-[16px] font-semibold text-[#e3e2e7] truncate group-hover:text-[#ffb4a5] transition-colors">
                  {item.track.title}
                </h3>
                <p className="font-inter text-[13px] text-[#e3beb7] truncate">
                  {item.track.artist}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setTrackMenuTarget(item.track);
                }}
                className="w-8 h-8 flex items-center justify-center text-[#e3beb7] hover:text-[#ffb4a5] active:scale-90 transition-colors"
                aria-label="More options"
              >
                <span className="material-symbols-outlined text-[24px]">more_vert</span>
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Popular Artists (Horizontal Circular) */}
      <section className="flex flex-col gap-4">
        <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] px-5 tracking-tight">
          Popular Artists
        </h2>
        <div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-5 pb-2 hide-scrollbar">
          {ARTISTS.map((artist) => {
            const isFeatured = artist.name === 'Luna Ray';
            return (
              <div
                key={artist.id}
                onClick={() => openArtist(artist.id)}
                className="flex flex-col items-center gap-2.5 shrink-0 snap-center w-24 active:scale-95 transition-transform cursor-pointer group"
              >
                <div
                  className={`w-24 h-24 rounded-full overflow-hidden bg-[#1f1f24] p-[2px] shadow-lg ${
                    isFeatured ? 'border-2 border-[#ff5a3c]' : 'border border-white/10'
                  }`}
                >
                  <div className="w-full h-full rounded-full overflow-hidden relative">
                    <img
                      src={artist.avatarUrl}
                      alt={artist.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                </div>
                <span className="font-inter text-[13px] font-medium text-[#e3e2e7] text-center line-clamp-1 group-hover:text-[#ffb4a5] transition-colors">
                  {artist.name}
                </span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Genres & Moods */}
      <section className="flex flex-col gap-4 px-5">
        <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
          Genres & Moods
        </h2>
        <div className="grid grid-cols-2 gap-4">
          {/* Energy */}
          <div
            onClick={() => openPlaylist('playlist-synthwave-night-drive')}
            className="relative h-28 rounded-2xl overflow-hidden bg-[#7d2c1d] active:scale-95 transition-transform p-4 flex flex-col justify-end shadow-md cursor-pointer group"
          >
            <div
              className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBIwpW3i8dtrg7YTr51k6sWv0d1gYmjI2USxsYaD9urGiM4XmDv7NxxptsOGBT6RzbOzP81RltR6KMwTlxpEYJpZI7eKGDFL_LVK1WkvJjtUo0eUALqE48tQVkqmKCTUJI9mdWa8aub4mVyq_HZgGQZi7rMRoHZTC17oJJ1IQtkywcoaGYZLEuaH-tzPvGb6hJEmU3wEEpofaHdxwVIyq65ZDcvYocJ5a69XLx_47M7Y8cAlP3nnFk')`
              }}
            />
            <h3 className="font-syne text-[18px] font-bold text-[#ffdad3] relative z-10">
              Energy
            </h3>
          </div>

          {/* Chill */}
          <div
            onClick={() => openPlaylist('playlist-cinematic-electronica')}
            className="relative h-28 rounded-2xl overflow-hidden bg-[#00a1b3] active:scale-95 transition-transform p-4 flex flex-col justify-end shadow-md cursor-pointer group"
          >
            <div
              className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2Vw9Uy929dTdXWT-PeP9RX4j9yvoJjg64OiK_NuIH6wFWr69kzZzDVeUrsMwxjAtCDx8C_zBhKiAqHhfoeWEw0WJGdEXqeH6jcZ3E-UGzqTKERbgpuOyZwXRtxz3TebVPhmeOL7LqNIIseK8VzKDSP4duagRv0PUA0o5Z5Ick1uhFIh_rdMdKJuqL69FXSq3hET9WuyCiGAspRu9kZhrdSSZ37xCW_1FeKm_bdSZYHWOlNyIgCMo')`
              }}
            />
            <h3 className="font-syne text-[18px] font-bold text-[#003037] relative z-10">
              Chill
            </h3>
          </div>

          {/* Hip-Hop */}
          <div
            onClick={() => setActiveTab('search')}
            className="relative h-28 rounded-2xl overflow-hidden bg-[#343439] active:scale-95 transition-transform p-4 flex flex-col justify-end shadow-md cursor-pointer group"
          >
            <div
              className="absolute inset-0 opacity-40 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuBxI0WXlu2O15kni6CMziaLA8ukPtVdAYO-VplQb558FAB9_ndpZ-mXoWbdLY_oWvJ-3uwhuGWjElJDsrHHXGudKzwKLLK7EHI8yg4jkO8sgKRi1bRF2h0c8Kn4-41QrGuc2yMUBLNt9rv2VQs5KOyp9r9K4hh0H8DSiJXiD0jRa_bSHNfTJnJpPYeWw86q8xWm8ZgT6hLVwPKLi0QlZ284tKHl2nrT0Z_91ahM6JOyrwpPTYk9euQ')`
              }}
            />
            <h3 className="font-syne text-[18px] font-bold text-[#e3e2e7] relative z-10">
              Hip-Hop
            </h3>
          </div>

          {/* Electronic */}
          <div
            onClick={() => openPlaylist('playlist-synthwave-night-drive')}
            className="relative h-28 rounded-2xl overflow-hidden bg-[#ff5a3c] active:scale-95 transition-transform p-4 flex flex-col justify-end shadow-md cursor-pointer group"
          >
            <div
              className="absolute inset-0 opacity-30 bg-cover bg-center mix-blend-overlay group-hover:scale-105 transition-transform duration-500"
              style={{
                backgroundImage: `url('https://lh3.googleusercontent.com/aida-public/AB6AXuC2vQ10oahtn9w2Dny9gGoG-oheC0RHrviAkNNTeXouiod0VGrYzbkMBY2PbwOQeNDs264A4nWbgXfn_-brKfSvYgYYghxNyq-aNCxe6FaMVcREPgwwSG9tfPXMdDsz8AUfYWeAJ5uXCjZ5NcijgtDlcxzmFAP6IOQHbY5jz5uLsX17i3_a1gaZ6ee8zzvLUsMsuHE2CJs2w_hQEG3YEtkOdGDZVc7ilLqk0T0ajIQ3Y1smOkQP-kQ')`
              }}
            />
            <h3 className="font-syne text-[18px] font-bold text-[#5c0800] relative z-10">
              Electronic
            </h3>
          </div>
        </div>
      </section>
    </div>
  );
};
