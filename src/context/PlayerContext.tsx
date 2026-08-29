import React, { createContext, useContext, useState, useEffect, useCallback, useRef } from 'react';
import { Track, ActiveTab, ViewMode, Album, Artist, Playlist } from '../types';
import { TRACKS, ARTISTS, ALBUMS, PLAYLISTS } from '../data/musicData';
import { audioEngine } from '../utils/audioEngine';

interface PlayerContextType {
  // Navigation & View state
  activeTab: ActiveTab;
  setActiveTab: (tab: ActiveTab) => void;
  viewMode: ViewMode;
  setViewMode: (mode: ViewMode) => void;
  selectedArtist: Artist | null;
  setSelectedArtist: (artist: Artist | null) => void;
  selectedAlbum: Album | null;
  setSelectedAlbum: (album: Album | null) => void;
  selectedPlaylist: Playlist | null;
  setSelectedPlaylist: (playlist: Playlist | null) => void;
  openArtist: (artistId: string) => void;
  openAlbum: (albumId: string) => void;
  openPlaylist: (playlistId: string) => void;
  goBack: () => void;

  // Playback state
  currentTrack: Track;
  isPlaying: boolean;
  currentTime: number;
  duration: number;
  progressPercent: number;
  isShuffle: boolean;
  isRepeat: boolean;
  volume: number;
  queue: Track[];
  likedTrackIds: Set<string>;
  
  // Controls
  playTrack: (track: Track, newQueue?: Track[]) => void;
  togglePlay: () => void;
  seekTo: (timeInSec: number) => void;
  nextTrack: () => void;
  prevTrack: () => void;
  toggleShuffle: () => void;
  toggleRepeat: () => void;
  toggleLike: (trackId: string) => void;
  setVolume: (val: number) => void;
  addToQueue: (track: Track) => void;
  removeFromQueue: (index: number) => void;

  // UI Modals & Drawers
  isQueueOpen: boolean;
  setIsQueueOpen: (open: boolean) => void;
  trackMenuTarget: Track | null;
  setTrackMenuTarget: (track: Track | null) => void;
  downloadModalOpen: boolean;
  setDownloadModalOpen: (open: boolean) => void;
  theme: 'dark' | 'light' | 'auto';
  setTheme: (t: 'dark' | 'light' | 'auto') => void;
  cacheSizeMb: number;
  clearCache: () => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const PlayerContext = createContext<PlayerContextType | null>(null);

export const PlayerProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Navigation
  const [activeTab, setActiveTab] = useState<ActiveTab>('home');
  const [viewMode, setViewMode] = useState<ViewMode>('main');
  const [viewStack, setViewStack] = useState<{ mode: ViewMode; tab: ActiveTab }[]>([]);
  const [selectedArtist, setSelectedArtist] = useState<Artist | null>(ARTISTS[0]);
  const [selectedAlbum, setSelectedAlbum] = useState<Album | null>(ALBUMS[0]);
  const [selectedPlaylist, setSelectedPlaylist] = useState<Playlist | null>(PLAYLISTS[0]);

  // Audio Playback
  const [currentTrack, setCurrentTrack] = useState<Track>(TRACKS[0]);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [currentTime, setCurrentTime] = useState<number>(134); // starts at 2:14 as shown in screenshot
  const [duration, setDuration] = useState<number>(TRACKS[0].duration);
  const [isShuffle, setIsShuffle] = useState<boolean>(false);
  const [isRepeat, setIsRepeat] = useState<boolean>(false);
  const [volume, setVolumeState] = useState<number>(0.85);
  const [queue, setQueue] = useState<Track[]>(TRACKS);
  const [likedTrackIds, setLikedTrackIds] = useState<Set<string>>(
    new Set(['track-neon-overture', 'track-night-drive', 'track-crimson-horizon'])
  );

  // Modals & Extras
  const [isQueueOpen, setIsQueueOpen] = useState(false);
  const [trackMenuTarget, setTrackMenuTarget] = useState<Track | null>(null);
  const [downloadModalOpen, setDownloadModalOpen] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light' | 'auto'>('dark');
  const [cacheSizeMb, setCacheSizeMb] = useState<number>(1200); // 1.2 GB
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const timerRef = useRef<number | null>(null);

  const showToast = useCallback((msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(prev => (prev === msg ? null : prev));
    }, 2800);
  }, []);

  const clearCache = useCallback(() => {
    setCacheSizeMb(0);
    showToast('Cache cleared successfully (1.2 GB freed)');
  }, [showToast]);

  const openArtist = useCallback((artistId: string) => {
    const found = ARTISTS.find(a => a.id === artistId) || ARTISTS[0];
    setSelectedArtist(found);
    setViewStack(prev => [...prev, { mode: viewMode, tab: activeTab }]);
    setViewMode('artist');
  }, [viewMode, activeTab]);

  const openAlbum = useCallback((albumId: string) => {
    const found = ALBUMS.find(a => a.id === albumId) || ALBUMS[0];
    setSelectedAlbum(found);
    setViewStack(prev => [...prev, { mode: viewMode, tab: activeTab }]);
    setViewMode('album');
  }, [viewMode, activeTab]);

  const openPlaylist = useCallback((playlistId: string) => {
    const found = PLAYLISTS.find(p => p.id === playlistId) || PLAYLISTS[0];
    setSelectedPlaylist(found);
    setViewStack(prev => [...prev, { mode: viewMode, tab: activeTab }]);
    setViewMode('playlist');
  }, [viewMode, activeTab]);

  const goBack = useCallback(() => {
    if (viewMode === 'lyrics') {
      setViewMode('now_playing');
      return;
    }
    if (viewMode === 'now_playing') {
      setViewMode('main');
      return;
    }
    if (viewStack.length > 0) {
      const prev = viewStack[viewStack.length - 1];
      setViewStack(s => s.slice(0, -1));
      setViewMode(prev.mode);
      setActiveTab(prev.tab);
    } else {
      setViewMode('main');
    }
  }, [viewMode, viewStack]);

  const playTrack = useCallback((track: Track, newQueue?: Track[]) => {
    setCurrentTrack(track);
    setDuration(track.duration);
    setCurrentTime(0);
    setIsPlaying(true);
    if (newQueue) {
      setQueue(newQueue);
    }
    audioEngine.playTrack(track.audioKey || 'synthwave1', track.bpm || 110);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      audioEngine.pause();
      setIsPlaying(false);
    } else {
      audioEngine.resume(currentTrack.audioKey || 'synthwave1', currentTrack.bpm || 110);
      setIsPlaying(true);
    }
  }, [isPlaying, currentTrack]);

  const seekTo = useCallback((timeInSec: number) => {
    const safeTime = Math.max(0, Math.min(duration, timeInSec));
    setCurrentTime(safeTime);
  }, [duration]);

  const nextTrack = useCallback(() => {
    const currentIdx = queue.findIndex(t => t.id === currentTrack.id);
    if (isShuffle) {
      const randomIdx = Math.floor(Math.random() * queue.length);
      playTrack(queue[randomIdx] || queue[0]);
    } else if (currentIdx >= 0 && currentIdx < queue.length - 1) {
      playTrack(queue[currentIdx + 1]);
    } else {
      playTrack(queue[0]);
    }
  }, [queue, currentTrack, isShuffle, playTrack]);

  const prevTrack = useCallback(() => {
    if (currentTime > 4) {
      seekTo(0);
      return;
    }
    const currentIdx = queue.findIndex(t => t.id === currentTrack.id);
    if (currentIdx > 0) {
      playTrack(queue[currentIdx - 1]);
    } else {
      playTrack(queue[queue.length - 1]);
    }
  }, [currentTime, queue, currentTrack, seekTo, playTrack]);

  const toggleShuffle = useCallback(() => {
    setIsShuffle(prev => {
      showToast(!prev ? 'Shuffle mode enabled' : 'Shuffle mode disabled');
      return !prev;
    });
  }, [showToast]);

  const toggleRepeat = useCallback(() => {
    setIsRepeat(prev => {
      showToast(!prev ? 'Repeat one track enabled' : 'Repeat disabled');
      return !prev;
    });
  }, [showToast]);

  const toggleLike = useCallback((trackId: string) => {
    setLikedTrackIds(prev => {
      const next = new Set(prev);
      if (next.has(trackId)) {
        next.delete(trackId);
        showToast('Removed from Liked Songs');
      } else {
        next.add(trackId);
        showToast('Added to Liked Songs');
      }
      return next;
    });
  }, [showToast]);

  const setVolume = useCallback((val: number) => {
    setVolumeState(val);
    audioEngine.setVolume(val);
  }, []);

  const addToQueue = useCallback((track: Track) => {
    setQueue(prev => [...prev, track]);
    showToast(`Added "${track.title}" to Queue`);
  }, [showToast]);

  const removeFromQueue = useCallback((idx: number) => {
    setQueue(prev => prev.filter((_, i) => i !== idx));
  }, []);

  // Timer progression for active playback
  useEffect(() => {
    if (isPlaying) {
      timerRef.current = window.setInterval(() => {
        setCurrentTime(prev => {
          if (prev >= duration) {
            if (isRepeat) {
              return 0;
            }
            nextTrack();
            return 0;
          }
          return prev + 1;
        });
      }, 1000);
    } else if (timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPlaying, duration, isRepeat, nextTrack]);

  const progressPercent = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <PlayerContext.Provider
      value={{
        activeTab,
        setActiveTab: (t) => {
          setActiveTab(t);
          if (viewMode !== 'main') setViewMode('main');
        },
        viewMode,
        setViewMode,
        selectedArtist,
        setSelectedArtist,
        selectedAlbum,
        setSelectedAlbum,
        selectedPlaylist,
        setSelectedPlaylist,
        openArtist,
        openAlbum,
        openPlaylist,
        goBack,
        currentTrack,
        isPlaying,
        currentTime,
        duration,
        progressPercent,
        isShuffle,
        isRepeat,
        volume,
        queue,
        likedTrackIds,
        playTrack,
        togglePlay,
        seekTo,
        nextTrack,
        prevTrack,
        toggleShuffle,
        toggleRepeat,
        toggleLike,
        setVolume,
        addToQueue,
        removeFromQueue,
        isQueueOpen,
        setIsQueueOpen,
        trackMenuTarget,
        setTrackMenuTarget,
        downloadModalOpen,
        setDownloadModalOpen,
        theme,
        setTheme,
        cacheSizeMb,
        clearCache,
        toastMessage,
        showToast
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};

export const usePlayer = () => {
  const context = useContext(PlayerContext);
  if (!context) {
    throw new Error('usePlayer must be used within PlayerProvider');
  }
  return context;
};
