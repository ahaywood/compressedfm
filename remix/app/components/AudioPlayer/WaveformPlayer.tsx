import { calculateTime } from '~/lib/timeHelpers';
import { Icon } from '../Icon';
import { useAudioPlayer } from 'react-hook-audio';
import { useEffect, useRef } from 'react';

interface WaveformPlayerProps {
  artwork: string;
  episodeTitle: string;
  audioPath: string;
  episodeNumber: number;
  skipTo: number | null;
}

const WaveformPlayer = ({
  artwork = '/images/podcast-cover.jpg',
  audioPath,
  episodeNumber,
  episodeTitle,
  skipTo,
}: WaveformPlayerProps) => {
  // references
  const audioPlayer = useRef<HTMLAudioElement>(null); // set up reference for the audio component
  const progressBar = useRef<HTMLInputElement>(null); // reference for the progress bar

  // hooks
  const {
    backThirty,
    changeAudioToPlayhead,
    changePlaybackSpeed,
    currentTime,
    duration,
    forwardThirty,
    isPlaying,
    onLoadedMetadata,
    skipToTime,
    speed,
    tapSpaceBar,
    togglePlaying,
  } = useAudioPlayer(audioPlayer, progressBar);

  useEffect(() => {
    if (skipTo !== null) {
      skipToTime(skipTo);
    }
  }, [skipTo]);

  return (
    <div className="waveform-audio-player border-bastille border-1 p-5 max-w-[660px] my-0 mx-auto relative w-full">
      {/* audio element */}
      <audio ref={audioPlayer} src={audioPath} preload="metadata" onLoadedMetadata={onLoadedMetadata} />

      {/* album cover */}
      <div className="album-cover">
        <img
          src={artwork}
          alt="Episode Cover"
          className="border-1 border-bastille mb-[10px] max-w-[200px] w-full sm:max-w-full"
        />
      </div>

      {/* episode meta data */}
      <div className="text-left py-0 px-5">
        <h4 className="text-gray font-mono text-sm font-normal leading-none mt-0 mb-[10px] mx-0 p-0">
          <span className="block sm:inline">COMPRESSED.fm</span>{' '}
          <span className="block sm:inline episode-number">{episodeNumber && `Episode ${episodeNumber}`}</span>
        </h4>
        <h2 className="font-sans text-xl leading-none m-0 p-0">{episodeTitle}</h2>
      </div>

      {/* play / pause */}
      <div className="controls flex items-center self-end relative">
        <button
          type="button"
          className="playPause items-center bg-lightGray border-none rounded-full text-black cursor-pointer flex h-[70px] justify-center my-0 mr-5 ml-0 outline-none w-[70px] hover:bg-yellow hover:text-lavenderIndigo "
          onClick={togglePlaying}
          onKeyPress={tapSpaceBar}
        >
          {isPlaying ? (
            <svg
              width="24"
              height="29"
              viewBox="0 0 24 29"
              xmlns="http://www.w3.org/2000/svg"
              className="pause fill-current relative"
            >
              <rect width="9" height="29" />
              <rect x="15" width="9" height="29" />
            </svg>
          ) : (
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              xmlns="http://www.w3.org/2000/svg"
              className="play fill-current relative left-[3px]"
            >
              <path d="M25.1045 14.8922L0.949477 0.539171L0.949472 29.2453L25.1045 14.8922Z" />
            </svg>
          )}
        </button>

        {/* current time */}
        <div className="current-time top-[15px] left-[100px]">{calculateTime(currentTime)}</div>

        {/* progress bar */}
        <div className="progress-bar">
          <input type="range" min="0" max="100" defaultValue="0" ref={progressBar} onChange={changeAudioToPlayhead} />
        </div>

        {/* duration */}
        <div className="duration top-[15px] right-5">{duration && calculateTime(duration)}</div>

        {/* back thirty */}
        <button type="button" onClick={backThirty} className="forwardBackward backward left-[120px] top-[47px]">
          <Icon name="arrow" className="back rotate-180" />
          30
        </button>

        {/* forward thirty */}
        <button type="button" onClick={forwardThirty} className="forwardBackward forward right-0 top-[47px]">
          30
          <Icon name="arrow" />
        </button>

        {/* change playback speed */}
        <button
          type="button"
          className="playbackSpeed bg-none border-white border-1 text-white cursor-pointer font-mono text-xs absolute left-[90px] top-[55px] hover:bg-yellow hover:border-yellow hover:text-black"
          onClick={changePlaybackSpeed}
        >
          {speed}X
        </button>
      </div>
    </div>
  );
};

export { WaveformPlayer };
