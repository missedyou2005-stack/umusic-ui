import React, { useState } from 'react';
import { usePlayer } from '../../context/PlayerContext';
import { GENRES, RECENT_SEARCHES, TRENDING_SEARCHES, TRACKS, ARTISTS, ALBUMS } from '../../data/musicData';

export const SearchView: React.FC = () => {
  const { playTrack, openArtist, openAlbum, openPlaylist, showToast } = usePlayer();
  const [query, setQuery] = useState('');
  const [recentSearches, setRecentSearches] = useState(RECENT_SEARCHES);

  const clearRecent = () => {
    setRecentSearches([]);
    showToast('Recent searches cleared');
  };

  const handleSelectSearch = (term: string) => {
    setQuery(term);
  };

  // Filtered tracks / artists
  const filteredTracks = query.trim()
    ? TRACKS.filter(
        t =>
          t.title.toLowerCase().includes(query.toLowerCase()) ||
          t.artist.toLowerCase().includes(query.toLowerCase()) ||
          t.album.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  const filteredArtists = query.trim()
    ? ARTISTS.filter(a => a.name.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="flex flex-col w-full pb-36 max-w-xl mx-auto space-y-6 px-5 pt-3 animate-in fade-in duration-300">
      {/* Search Input */}
      <div className="relative w-full">
        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-[#e3beb7]/70">
          <span className="material-symbols-outlined text-[22px]">search</span>
        </div>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Artists, songs, or podcasts"
          className="w-full bg-[#16181e] text-[#e3e2e7] placeholder:text-[#e3beb7]/60 text-[15px] font-inter rounded-[14px] py-3.5 pl-12 pr-10 focus:outline-none focus:ring-1 focus:ring-[#ff5a3c] border border-white/5 transition-all shadow-inner"
        />
        {query && (
          <button
            onClick={() => setQuery('')}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-[#e3beb7]/60 hover:text-white"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        )}
      </div>

      {/* Live Search Results if searching */}
      {query.trim() ? (
        <div className="flex flex-col gap-6">
          {filteredTracks.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="font-syne text-[18px] font-bold text-[#e3e2e7]">Songs</h3>
              <div className="flex flex-col gap-2">
                {filteredTracks.map(track => (
                  <div
                    key={track.id}
                    onClick={() => playTrack(track)}
                    className="flex items-center gap-3 p-2.5 rounded-xl bg-[#16181e] hover:bg-[#1f1f24] active:scale-[0.98] transition-all cursor-pointer"
                  >
                    <img
                      src={track.coverUrl}
                      alt={track.title}
                      className="w-12 h-12 rounded-lg object-cover"
                    />
                    <div className="flex-1 min-w-0">
                      <h4 className="font-inter text-[15px] font-semibold text-[#e3e2e7] truncate">
                        {track.title}
                      </h4>
                      <p className="font-inter text-[12px] text-[#e3beb7] truncate">
                        {track.artist} • {track.album}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[#ff5a3c]">play_circle</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredArtists.length > 0 && (
            <div className="flex flex-col gap-3">
              <h3 className="font-syne text-[18px] font-bold text-[#e3e2e7]">Artists</h3>
              <div className="flex gap-4 overflow-x-auto pb-2 hide-scrollbar">
                {filteredArtists.map(artist => (
                  <div
                    key={artist.id}
                    onClick={() => openArtist(artist.id)}
                    className="flex flex-col items-center gap-2 shrink-0 cursor-pointer"
                  >
                    <img
                      src={artist.avatarUrl}
                      alt={artist.name}
                      className="w-16 h-16 rounded-full object-cover border border-white/10"
                    />
                    <span className="font-inter text-[12px] text-[#e3e2e7] font-medium truncate max-w-[80px]">
                      {artist.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {filteredTracks.length === 0 && filteredArtists.length === 0 && (
            <div className="py-12 text-center text-[#e3beb7]/60 font-inter text-[14px]">
              No results found for "{query}"
            </div>
          )}
        </div>
      ) : (
        <>
          {/* Recent Searches */}
          {recentSearches.length > 0 && (
            <section className="flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
                  Recent Searches
                </h2>
                <button
                  onClick={clearRecent}
                  className="text-[12px] font-inter font-bold text-[#ff5a3c] uppercase tracking-wider active:scale-95 transition-transform"
                >
                  Clear
                </button>
              </div>
              <div className="flex gap-2.5 overflow-x-auto snap-x snap-mandatory hide-scrollbar -mx-5 px-5 pb-1">
                {recentSearches.map((term, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSelectSearch(term)}
                    className="snap-start flex-shrink-0 bg-[#16181e] hover:bg-[#1f1f24] text-[#e3e2e7] text-[13px] font-inter py-2 px-4 rounded-full shadow-sm flex items-center gap-1.5 active:scale-95 transition-all border border-white/5"
                  >
                    <span>{term}</span>
                  </button>
                ))}
              </div>
            </section>
          )}

          {/* Browse All (Genre Grid) */}
          <section className="flex flex-col gap-4">
            <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
              Browse All
            </h2>
            <div className="grid grid-cols-2 gap-4">
              {GENRES.map((genre) => (
                <div
                  key={genre.id}
                  onClick={() => openPlaylist('playlist-synthwave-night-drive')}
                  className="group relative aspect-[4/3] rounded-[20px] overflow-hidden bg-gradient-to-br shadow-md cursor-pointer transform transition-transform active:scale-95 border border-white/5"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121317]/90 via-[#121317]/20 to-transparent z-10 pointer-events-none" />
                  <div
                    className="absolute inset-0 bg-cover bg-center opacity-70 mix-blend-overlay group-hover:scale-110 transition-transform duration-700"
                    style={{ backgroundImage: `url('${genre.imageUrl}')` }}
                  />
                  <span className="absolute bottom-4 left-4 z-20 font-syne text-[20px] font-bold leading-tight text-[#f5f6f7] drop-shadow-md">
                    {genre.title}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Trending Searches */}
          <section className="flex flex-col gap-3 pt-2">
            <h2 className="font-syne text-[22px] font-bold text-[#e3e2e7] tracking-tight">
              Trending Searches
            </h2>
            <div className="flex flex-col gap-2">
              {TRENDING_SEARCHES.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleSelectSearch(item)}
                  className="flex items-center gap-4 py-3 bg-[#16181e] hover:bg-[#1e212a] rounded-xl px-4 shadow-sm active:scale-[0.99] transition-all cursor-pointer group border border-white/5"
                >
                  <span className="font-syne text-[16px] font-bold text-[#e3beb7] w-6 text-center opacity-50 group-hover:opacity-100 group-hover:text-[#ff5a3c] transition-all">
                    {idx + 1}
                  </span>
                  <div className="flex flex-col flex-1 min-w-0">
                    <span className="font-inter text-[15px] font-medium text-[#f5f6f7] truncate group-hover:text-[#ffb4a5] transition-colors">
                      {item}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-[#e3beb7] text-[20px] opacity-0 group-hover:opacity-100 transition-opacity">
                    north_west
                  </span>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </div>
  );
};
