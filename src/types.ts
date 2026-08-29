export interface LyricLine {
  time: number; // in seconds
  text: string;
}

export interface Track {
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  album: string;
  albumId?: string;
  duration: number; // in seconds
  coverUrl: string;
  plays?: number;
  playsCount?: number;
  lyrics?: LyricLine[];
  audioKey?: 'synthwave1' | 'ambient' | 'electronic' | 'chill' | 'kinetic';
  bpm?: number;
}

export interface Artist {
  id: string;
  name: string;
  monthlyListeners: string;
  avatarUrl: string;
  heroUrl?: string;
  bannerUrl?: string;
  aboutText?: string;
  bio?: string;
  aboutImgUrl?: string;
  isFollowing?: boolean;
}

export interface Album {
  id: string;
  title: string;
  artist: string;
  artistId?: string;
  year: number;
  genre?: string;
  coverUrl: string;
  backdropUrl?: string;
  tracksCount?: number;
  trackIds?: string[];
  duration?: string;
}

export interface Playlist {
  id: string;
  title: string;
  subtitle: string;
  description?: string;
  coverUrl: string;
  trackCount: number;
  totalDurationText?: string;
  duration?: string;
  trackIds?: string[];
}

export interface GenreItem {
  id: string;
  title: string;
  bgGradient?: string;
  imageUrl: string;
  accentColor?: string;
}

export type ActiveTab = 'home' | 'search' | 'library' | 'settings';
export type ViewMode = 'main' | 'artist' | 'album' | 'playlist' | 'now_playing' | 'lyrics';
