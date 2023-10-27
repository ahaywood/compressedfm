import { useRef } from 'react';
import { useAudioPlayer } from 'react-hook-audio';
import { calculateTime } from '~/lib/timeHelpers';
import { Icon } from '../Icon';

interface FeaturedAudioPlayerProps {
  track: string;
}

const FeaturedAudioPlayer = ({ track }: FeaturedAudioPlayerProps) => {
  // references
  const audioPlayer = useRef(null); // set up reference for the audio component
  const progressBar = useRef(null); // reference for the progress bar

  const {
    backThirty,
    changeAudioToPlayhead,
    currentTime,
    duration,
    forwardThirty,
    isPlaying,
    onLoadedMetadata,
    tapSpaceBar,
    togglePlaying,
  } = useAudioPlayer(audioPlayer, progressBar);

  return (
    <div className="featured-audio-player relative">
      <audio
        ref={audioPlayer}
        src={track}
        preload="metadata"
        onLoadedMetadata={onLoadedMetadata}
      />

      <div className="grid items-center grid-cols-[60px_1fr_60px] md:flex lg:p-0">
        <div className="flex justify-end">
          <button
            type="button"
            onClick={backThirty}
            className="forwardBackward"
          >
            <Icon name="arrow" className="back" />
            30
          </button>
        </div>
        <button
          type="button"
          className="center relative bg-charcoal border-none rounded-full text-white cursor-pointer h-[70px] mt-0 mx-auto mb-[10px] outline-none w-[70px] md:my-0 md:mx-5 hover:bg-yellow hover:text-lavenderIndigo"
          onClick={togglePlaying}
          onKeyPress={tapSpaceBar}
        >
          {!isPlaying ? (
            <svg
              width="26"
              height="30"
              viewBox="0 0 26 30"
              xmlns="http://www.w3.org/2000/svg"
              className="play fill-current relative left-[3px]"
            >
              <path d="M25.1045 14.8922L0.949477 0.539171L0.949472 29.2453L25.1045 14.8922Z" />
            </svg>
          ) : (
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
          )}
        </button>
        <button
          type="button"
          onClick={forwardThirty}
          className="forwardBackward"
        >
          30
          <Icon name="arrow" />
        </button>
        <div className="current-time text-white font-mono text-lg w-[50px]">
          {calculateTime(currentTime)}
        </div>
        <div className="progress-bar flex-1 mr-4 flex">
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="0"
            ref={progressBar}
            onChange={changeAudioToPlayhead}
          />
        </div>
        <div className="duration text-white font-mono text-lg w-[50px]">
          {duration && !Number.isNaN(duration) && calculateTime(duration)}
        </div>
      </div>
    </div>
  );
};

export { FeaturedAudioPlayer };
