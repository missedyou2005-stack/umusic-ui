import React, { useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { TRACKS, ALBUMS, PLAYLISTS } from '../../data/musicData';

export const ArtistView: React.FC = () => {
  const {
    selectedArtist,
    playTrack,
    openAlbum,
    openPlaylist,
    setTrackMenuTarget,
    showToast
  } = usePlayer();

  const [isFollowing, setIsFollowing] = useState(false);

  if (!selectedArtist) return null;

  const artistTracks = TRACKS.filter(t => t.artistId === selectedArtist.id || t.artist === selectedArtist.name);
  const artistAlbums = ALBUMS.filter(a => a.artistId === selectedArtist.id);

  return (
    <div className="flex flex-col w-full pb-36 max-w-xl mx-auto animate-in fade-in duration-300">
      {/* Hero Header with Background Banner */}
      <div className="relative w-full h-[360px] flex flex-col justify-end p-6 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center brightness-75 scale-105"
          style={{ backgroundImage: `url('${selectedArtist.bannerUrl || selectedArtist.heroUrl}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121317] via-[#121317]/50 to-transparent" />

        <div className="relative z-10 flex flex-col gap-1">
          <div className="flex items-center gap-1.5 mb-1">
            <span className="material-symbols-outlined text-[#5fd7e9] text-[18px]" style={{ fontVariationSettings: "'FILL' 1" }}>
              verified
            </span>
            <span className="font-inter text-[11px] font-bold text-[#e3e2e7] tracking-widest uppercase">
              Verified Artist
            </span>
          </div>

          <h1 className="font-syne text-[32px] md:text-[38px] font-extrabold text-[#e3e2e7] tracking-tight leading-none">
            {selectedArtist.name}
          </h1>
          <p className="font-inter text-[13px] font-medium text-[#e3beb7]/80 tracking-wide uppercase mt-1">
            {selectedArtist.monthlyListeners}
          </p>
        </div>
      </div>

      {/* Action Controls */}
      <div className="flex items-center gap-3 px-6 py-4">
        <button
          onClick={() => {
            if (artistTracks.length > 0) {
              playTrack(artistTracks[0], artistTracks);
            }
          }}
          className="w-14 h-14 rounded-full bg-[#ff5a3c] text-[#5c0800] flex items-center justify-center shadow-lg shadow-[#ff5a3c]/30 active:scale-90 transition-transform"
          aria-label="Play artist"
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
            if (artistTracks.length > 0) {
              const rand = Math.floor(Math.random() * artistTracks.length);
              playTrack(artistTracks[rand], artistTracks);
              showToast('Shuffling artist tracks');
            }
          }}
          className="w-12 h-12 rounded-full bg-[#292a2e] text-[#e3e2e7] flex items-center justify-center hover:bg-[#343439] active:scale-90 transition-transform shadow-md"
          aria-label="Shuffle"
        >
          <span className="material-symbols-outlined text-[24px]">shuffle</span>
        </button>

        <button
          onClick={() => {
            setIsFollowing(!isFollowing);
            showToast(!isFollowing ? `Following ${selectedArtist.name}` : `Unfollowed ${selectedArtist.name}`);
          }}
          className={`ml-auto px-5 py-2.5 rounded-full font-inter text-[13px] font-bold border transition-all active:scale-95 ${
            isFollowing
              ? 'bg-[#ff5a3c] text-[#5c0800] border-[#ff5a3c]'
              : 'border-white/20 text-[#e3e2e7] hover:bg-white/5'
          }`}
        >
          {isFollowing ? 'Following' : 'Follow'}
        </button>
      </div>

      {/* Popular Tracks */}
      <section className="flex flex-col gap-4 px-6 mt-4">
        <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
          Popular
        </h2>
        <div className="flex flex-col gap-2">
          {artistTracks.map((track, idx) => (
            <div
              key={track.id}
              onClick={() => playTrack(track, artistTracks)}
              className="flex items-center gap-3.5 p-2 -mx-2 rounded-xl hover:bg-white/[0.04] active:scale-[0.98] transition-all cursor-pointer group"
            >
              <span className="font-syne text-[16px] font-bold text-[#e3beb7]/60 w-5 text-center group-hover:text-[#ff5a3c] transition-colors">
                {idx + 1}
              </span>
              <img
                src={track.coverUrl}
                alt={track.title}
                className="w-12 h-12 rounded-lg object-cover bg-[#292a2e] shadow-sm"
              />
              <div className="flex-1 min-w-0">
                <h4 className="font-inter text-[15px] font-semibold text-[#e3e2e7] truncate group-hover:text-[#ffb4a5] transition-colors">
                  {track.title}
                </h4>
                <p className="font-inter text-[12px] text-[#e3beb7]/80 truncate">
                  {track.plays?.toLocaleString() || '12,450,000'} plays
                </p>
              </div>
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
          ))}
        </div>
      </section>

      {/* Albums Horizontal Carousel */}
      <section className="flex flex-col gap-4 mt-8">
        <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] px-6 tracking-tight">
          Albums
        </h2>
        <div className="flex gap-4 overflow-x-auto snap-x px-6 pb-2 hide-scrollbar">
          {artistAlbums.map((album) => (
            <div
              key={album.id}
              onClick={() => openAlbum(album.id)}
              className="snap-start shrink-0 w-36 flex flex-col gap-2.5 group cursor-pointer active:scale-95 transition-transform"
            >
              <div className="relative w-full aspect-square rounded-[18px] overflow-hidden bg-[#1f1f24] shadow-md border border-white/5">
                <img
                  src={album.coverUrl}
                  alt={album.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[14px] font-semibold text-[#e3e2e7] line-clamp-1 group-hover:text-[#ffb4a5] transition-colors">
                  {album.title}
                </span>
                <span className="font-inter text-[12px] text-[#e3beb7]/70">
                  {album.year} • Album
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Appears On */}
      <section className="flex flex-col gap-4 mt-8">
        <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] px-6 tracking-tight">
          Appears On
        </h2>
        <div className="flex gap-4 overflow-x-auto snap-x px-6 pb-2 hide-scrollbar">
          {PLAYLISTS.map((pl) => (
            <div
              key={pl.id}
              onClick={() => openPlaylist(pl.id)}
              className="snap-start shrink-0 w-40 flex flex-col gap-2.5 group cursor-pointer active:scale-95 transition-transform"
            >
              <div className="relative w-full aspect-square rounded-[18px] overflow-hidden bg-[#1f1f24] shadow-md border border-white/5">
                <img
                  src={pl.coverUrl}
                  alt={pl.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex flex-col">
                <span className="font-inter text-[14px] font-semibold text-[#e3e2e7] line-clamp-1 group-hover:text-[#ffb4a5] transition-colors">
                  {pl.title}
                </span>
                <span className="font-inter text-[12px] text-[#e3beb7]/70">
                  Playlist
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section className="flex flex-col gap-4 px-6 mt-8">
        <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
          About
        </h2>
        <div className="relative rounded-[24px] overflow-hidden bg-[#1a1b20] p-6 border border-white/5 shadow-xl">
          <div
            className="absolute inset-0 bg-cover bg-center opacity-30 brightness-50"
            style={{ backgroundImage: `url('${selectedArtist.aboutImgUrl || selectedArtist.bannerUrl || selectedArtist.heroUrl}')` }}
          />
          <div className="relative z-10 flex flex-col gap-3">
            <span className="font-syne text-[20px] font-bold text-[#e3e2e7]">
              {selectedArtist.monthlyListeners}
            </span>
            <p className="font-inter text-[14px] text-[#e3beb7] leading-relaxed">
              {selectedArtist.bio || selectedArtist.aboutText}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
