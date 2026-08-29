import React, { useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { PLAYLISTS, ALBUMS, ARTISTS, TRACKS } from '../../data/musicData';

export const LibraryView: React.FC = () => {
  const {
    openPlaylist,
    openAlbum,
    openArtist,
    playTrack,
    setTrackMenuTarget,
    setDownloadModalOpen,
    likedTrackIds,
    showToast
  } = usePlayer();

  const [activeFilter, setActiveFilter] = useState<'all' | 'playlists' | 'artists' | 'albums' | 'podcasts'>('all');
  const filters: { id: 'all' | 'playlists' | 'artists' | 'albums' | 'podcasts'; label: string }[] = [
    { id: 'all', label: 'All' },
    { id: 'playlists', label: 'Playlists' },
    { id: 'artists', label: 'Artists' },
    { id: 'albums', label: 'Albums' },
    { id: 'podcasts', label: 'Podcasts' }
  ];

  const recentlyPlayedItems = [
    {
      type: 'playlist',
      title: 'Midnight Grooves',
      subtitle: 'Playlist',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBC5WjHEisUTywzHhT4KsB9qOajtJ97QXRY53jWbf_1AQKaXQKHnfVuhmTTKS8OqDybj9b5ompj9F0NUJzEWgcFy5NczWak7LcqtwznsLISsBzUrE9TMhrH2XsTrAXyBFJjWpnAO3Pr-jokZW49w91uQjh0zwKb34NG_o0-ZBA4BcnBSN1ctB77kyod4YALn1UVmYF26ltGli0s--FIGjG37Z4PKAzWnBFPy4punYjU7kt7iPeS4Q0',
      isCircle: false,
      onClick: () => openPlaylist('playlist-synthwave-night-drive')
    },
    {
      type: 'album',
      title: 'Currents & Tides',
      subtitle: 'Album • Echoes',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBwU_IoFxn-kPZtbQc3RonkyiCN3BAV8xblkSfKWxW_Nk0JV5VeHIxoBeiHDKs19_Nn6twmGRAR82EJXWCAqlynBbj_elDboVGZT9vvtHkLuULsqmXA2L_mq6syNnUJUbu_YkDYqWG1z4hjAPdxJQXz2h8Kr545TRfQ3aY8rCK-epDpfBam_pkOlf0nHmhWKWsj_4i-3fP8zDvyCCrGnlaEuLvZa1cvROQsDhK2tw9eTkyWmWDCuk4',
      isCircle: false,
      onClick: () => openAlbum('album-monolith')
    },
    {
      type: 'artist',
      title: 'The Synthetics',
      subtitle: 'Artist',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3b5RY7s7PuplHlTaTvEnKSmh_ZUvz8EAYRPFjeXTNGxZZBj_4W1nu3shvmsiMdbbyHYih2EpInrEb_DnNEOnZvkklltWdRkspJiYVIKMxGv8EcB5Pm7G74xAM-6I1dfXjipbrGNRMQftNYV_W4WwuzXVKLyh-rZB0HZXol83QkEPSAZqcqkQoocjisH3rig98VxnNQch1F3wJmjtR1C9BEVljwpYltNtNuhJTlGg3GjoEV8GqiA4',
      isCircle: true,
      onClick: () => openArtist('artist-midnight-echoes')
    },
    {
      type: 'playlist',
      title: 'Focus Flow',
      subtitle: 'Playlist',
      imgUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuABw19S_1LSXFBVRFzOIqw9aDaaajyn1GOioqNVDBdEIAghPIwaUBPziP1Alqb1Gi4tno8j7a_KCLxE5wgJgQms90GFUWlHhBcuHWrBLVZnElMrdNF-RPcFkwllf4Fu4X5BpbvxfEKN5mnVmd4zfMR6XBK4Xs0IFHwMhJWNt4mtEq-ovaJxZ4ipYJfEu-8VCDQ2tajKYXdaWRDZoAf6f_GyTpw4t3yXoeyPiWWajWSDIy6ShqesOIM',
      isCircle: false,
      onClick: () => playTrack(TRACKS[5])
    }
  ];

  return (
    <div className="flex flex-col w-full pb-36 max-w-xl mx-auto space-y-6 px-5 pt-2 animate-in fade-in duration-300">
      {/* Segmented Filter Pills */}
      <div className="sticky top-0 z-30 bg-[#121317]/95 backdrop-blur-md pt-2 pb-2 -mx-5 px-5 overflow-x-auto no-scrollbar flex items-center gap-2">
        {filters.map((f) => {
          const isActive = activeFilter === f.id;
          return (
            <button
              key={f.id}
              onClick={() => setActiveFilter(f.id)}
              className={`shrink-0 px-4 py-2 rounded-full font-inter text-[13px] font-medium transition-all active:scale-95 ${
                isActive
                  ? 'bg-[#ff5a3c] text-[#5c0800] font-semibold shadow-sm'
                  : 'bg-[#292a2e] text-[#e3e2e7] hover:bg-[#343439]'
              }`}
            >
              {f.label}
            </button>
          );
        })}
      </div>

      {/* Recently Played (Horizontal Scroll) */}
      {(activeFilter === 'all' || activeFilter === 'playlists' || activeFilter === 'albums') && (
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
              Recently Played
            </h2>
            <button
              onClick={() => showToast('Showing all recently played items')}
              className="text-[#ffb4a5] font-inter text-[13px] font-medium hover:opacity-80 transition-opacity"
            >
              See All
            </button>
          </div>

          <div className="flex gap-4 overflow-x-auto snap-x -mx-5 px-5 no-scrollbar pb-2">
            {recentlyPlayedItems.map((item, idx) => (
              <div
                key={idx}
                onClick={item.onClick}
                className="snap-start shrink-0 w-32 flex flex-col gap-2 group cursor-pointer"
              >
                <div
                  className={`relative w-full aspect-square overflow-hidden bg-[#1f1f24] shadow-md transition-transform duration-300 group-hover:scale-105 ${
                    item.isCircle ? 'rounded-full border border-white/10' : 'rounded-[20px]'
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url('${item.imgUrl}')` }}
                  />
                  <div className="absolute inset-0 bg-black/25 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button
                      className="w-10 h-10 rounded-full bg-[#ff5a3c] text-[#5c0800] flex items-center justify-center scale-90 group-hover:scale-100 transition-transform shadow-lg"
                      aria-label="Play"
                    >
                      <span
                        className="material-symbols-outlined text-[20px]"
                        style={{ fontVariationSettings: "'FILL' 1" }}
                      >
                        play_arrow
                      </span>
                    </button>
                  </div>
                </div>
                <div className={`flex flex-col ${item.isCircle ? 'text-center' : ''}`}>
                  <span className="font-inter text-[13px] font-semibold text-[#e3e2e7] line-clamp-1 group-hover:text-[#ffb4a5] transition-colors">
                    {item.title}
                  </span>
                  <span className="font-inter text-[11px] text-[#e3beb7]/80 line-clamp-1">
                    {item.subtitle}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Favorites Grid */}
      {(activeFilter === 'all' || activeFilter === 'playlists' || activeFilter === 'podcasts') && (
        <section className="flex flex-col gap-3">
          <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
            Favorites
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {/* Liked Songs */}
            <div
              onClick={() => openPlaylist('playlist-synthwave-night-drive')}
              className="relative overflow-hidden rounded-[20px] bg-[#292a2e] p-4 flex flex-col justify-end min-h-[124px] transition-transform active:scale-95 cursor-pointer shadow-md group border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#ff5a3c]/20 to-transparent pointer-events-none" />
              <span
                className="material-symbols-outlined text-[#ff5a3c] text-[28px] mb-2 relative z-10"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                favorite
              </span>
              <span className="font-syne text-[18px] font-bold text-[#e3e2e7] relative z-10">
                Liked Songs
              </span>
              <span className="font-inter text-[12px] text-[#e3beb7] relative z-10">
                {likedTrackIds.size + 425} Tracks
              </span>
            </div>

            {/* Saved Episodes */}
            <div
              onClick={() => showToast('Opening Saved Episodes')}
              className="relative overflow-hidden rounded-[20px] bg-[#1f1f24] p-4 flex flex-col justify-end min-h-[124px] transition-transform active:scale-95 cursor-pointer shadow-md group border border-white/5"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#00a1b3]/20 to-transparent pointer-events-none" />
              <span
                className="material-symbols-outlined text-[#5fd7e9] text-[28px] mb-2 relative z-10"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                podcasts
              </span>
              <span className="font-syne text-[18px] font-bold text-[#e3e2e7] relative z-10">
                Saved Episodes
              </span>
              <span className="font-inter text-[12px] text-[#e3beb7] relative z-10">
                12 New
              </span>
            </div>
          </div>
        </section>
      )}

      {/* Your Playlists */}
      {(activeFilter === 'all' || activeFilter === 'playlists') && (
        <section className="flex flex-col gap-3">
          <div className="flex items-center justify-between">
            <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
              Your Playlists
            </h2>
            <button
              onClick={() => showToast('Create new playlist created: "My Synthwave Mix"')}
              className="w-8 h-8 rounded-full bg-[#1f1f24] hover:bg-[#292a2e] text-[#e3e2e7] flex items-center justify-center transition-transform active:scale-90 shadow-sm border border-white/10"
              aria-label="Create playlist"
            >
              <span className="material-symbols-outlined text-[20px]">add</span>
            </button>
          </div>

          <div className="flex flex-col gap-1">
            {PLAYLISTS.slice(0, 3).map((pl) => (
              <div
                key={pl.id}
                onClick={() => openPlaylist(pl.id)}
                className="flex items-center gap-3.5 p-2 rounded-xl hover:bg-white/[0.04] active:scale-[0.98] transition-all cursor-pointer group"
              >
                <div className="w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-[#1f1f24] shadow-sm">
                  <img
                    src={pl.coverUrl}
                    alt={pl.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col flex-1 min-w-0">
                  <span className="font-inter text-[15px] font-semibold text-[#e3e2e7] truncate group-hover:text-[#ffb4a5] transition-colors">
                    {pl.title}
                  </span>
                  <span className="font-inter text-[13px] text-[#e3beb7]">
                    {pl.subtitle}
                  </span>
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    showToast(`Options for playlist "${pl.title}"`);
                  }}
                  className="w-8 h-8 flex items-center justify-center text-[#e3beb7] hover:text-[#ffb4a5] transition-transform active:scale-90"
                >
                  <span className="material-symbols-outlined text-[22px]">more_vert</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Empty State: Offline Audio */}
      <section className="mt-4 flex flex-col items-center justify-center p-8 rounded-[24px] bg-[#1a1b20] text-center relative overflow-hidden border border-white/5 shadow-xl">
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#ff5a3c]/5 rounded-full blur-2xl pointer-events-none" />
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-[#5fd7e9]/5 rounded-full blur-2xl pointer-events-none" />

        <div className="w-20 h-20 rounded-full bg-[#292a2e] flex items-center justify-center mb-4 relative z-10 shadow-lg border border-white/5">
          <span className="material-symbols-outlined text-4xl text-[#e3beb7] opacity-80">
            cloud_off
          </span>
          <div className="absolute top-4 right-4 w-2.5 h-2.5 rounded-full bg-[#ff5a3c] shadow-[0_0_8px_rgba(255,90,60,0.8)]" />
        </div>

        <h3 className="font-syne text-[18px] font-bold text-[#e3e2e7] mb-1 relative z-10">
          No Offline Audio
        </h3>
        <p className="font-inter text-[13px] text-[#e3beb7] max-w-[260px] mb-5 relative z-10 leading-relaxed">
          Download tracks, albums, or playlists to listen without an internet connection.
        </p>

        <button
          onClick={() => setDownloadModalOpen(true)}
          className="px-6 py-3 rounded-full bg-[#343439] hover:bg-[#3f4046] text-[#e3e2e7] font-inter text-[14px] font-semibold transition-all active:scale-95 shadow-md relative z-10 flex items-center gap-2"
        >
          <span className="material-symbols-outlined text-[18px]">download</span>
          <span>Find Downloads</span>
        </button>
      </section>
    </div>
  );
};
