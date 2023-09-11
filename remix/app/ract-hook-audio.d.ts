declare module 'react-hook-audio';

declare const useAudioPlayer: (audioRef: React.RefObject<HTMLAudioElement>, progressBarRef: React.RefObject<HTMLInputElement>) => {
  backThirty: () => void;
  changeAudioToPlayhead: () => void;
  changePlaybackSpeed: () => void;
  currentTime: number;
  duration: number;
  forwardThirty: () => void;
  isPlaying: boolean;
  onLoadedMetadata: () => void;
  play: () => void;
  skipToTime: (newTime: number) => void;
  speed: number;
  tapSpaceBar: (e: KeyboardEvent) => void;
  togglePlaying: () => void;
};
