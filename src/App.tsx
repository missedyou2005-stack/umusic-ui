/**
 * Umusic - Tactile, Editorial & Cinematic Streaming Audio Player
 */

import React from 'react';
import { PlayerProvider, usePlayer } from './context/PlayerContext';
import { Header } from './components/Header';
import { NavigationDock } from './components/NavigationDock';
import { MiniPlayer } from './components/MiniPlayer';
import { TrackOptionsMenu } from './components/TrackOptionsMenu';
import { QueueDrawer } from './components/views/QueueDrawer';
import { DownloadModal } from './components/DownloadModal';
import { Toast } from './components/Toast';

import { HomeView } from './components/views/HomeView';
import { SearchView } from './components/views/SearchView';
import { LibraryView } from './components/views/LibraryView';
import { SettingsView } from './components/views/SettingsView';
import { ArtistView } from './components/views/ArtistView';
import { AlbumView } from './components/views/AlbumView';
import { PlaylistView } from './components/views/PlaylistView';
import { NowPlayingModal } from './components/views/NowPlayingModal';
import { LyricsView } from './components/views/LyricsView';

const MainAppContent: React.FC = () => {
  const { activeTab, viewMode } = usePlayer();

  const renderCurrentView = () => {
    // Priority fullscreen/sub views
    if (viewMode === 'artist') return <ArtistView />;
    if (viewMode === 'album') return <AlbumView />;
    if (viewMode === 'playlist') return <PlaylistView />;

    // Main tabs
    switch (activeTab) {
      case 'home':
        return <HomeView />;
      case 'search':
        return <SearchView />;
      case 'library':
        return <LibraryView />;
      case 'settings':
        return <SettingsView />;
      default:
        return <HomeView />;
    }
  };

  const hideHeader = viewMode === 'now_playing' || viewMode === 'lyrics';

  return (
    <div className="min-h-screen bg-[#121317] text-[#e3e2e7] flex flex-col selection:bg-[#ff5a3c] selection:text-white font-inter relative overflow-x-hidden">
      {/* Dynamic Header */}
      {!hideHeader && <Header />}

      {/* Main Scrollable View Area */}
      <main className={`flex-1 w-full ${!hideHeader ? 'pt-20 md:pt-24' : ''}`}>
        {renderCurrentView()}
      </main>

      {/* Persistent Mini Player */}
      <MiniPlayer />

      {/* Bottom Floating Navigation Dock */}
      <NavigationDock />

      {/* Modals & Fullscreen Overlays */}
      <NowPlayingModal />
      <LyricsView />
      <TrackOptionsMenu />
      <QueueDrawer />
      <DownloadModal />
      <Toast />
    </div>
  );
};

export default function App() {
  return (
    <PlayerProvider>
      <MainAppContent />
    </PlayerProvider>
  );
}
