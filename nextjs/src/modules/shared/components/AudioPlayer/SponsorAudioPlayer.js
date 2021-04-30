import { useCallback, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { calculateTime } from 'utils/timeHelpers';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorAudioPlayer = ({ id, currentlyPlaying, handleMultipleAudioPlayers }) => {
  // state
  const [isPlaying, setIsPlaying] = useState(true);
  const [duration, setDuration] = useState();
  const [currentTime, setCurrentTime] = useState(0);

  const audioPlayer = useRef(); // set up reference for the audio component
  const progressBar = useRef(); // reference for the progress bar
  const animationRef = useRef(); // reference the animation

  // GET THE DURATION - once the meta data has been loaded
  // loadedmetadata is provided by the browser
  useEffect(() => {
    const seconds = Math.floor(audioPlayer.current.duration);
    setDuration(seconds);
    progressBar.current.max = seconds;
  }, [audioPlayer?.current?.loadedmetadata, audioPlayer?.current?.readyState]);

  // when another audio player starts playing
  useEffect(() => {
    if (currentlyPlaying !== id) {
      setIsPlaying(true);
      pauseAudio();
    }
  }, [currentlyPlaying]);

  // toggle between play and pause
  const togglePlaying = () => {
    setIsPlaying((prevVal) => !prevVal);
    // play
    if (isPlaying) {
      audioPlayer.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
      handleMultipleAudioPlayers(id);
    } // pause
    else {
      pauseAudio();
    }
  };

  const pauseAudio = () => {
    audioPlayer.current.pause();
    cancelAnimationFrame(animationRef.current);
  };

  const whilePlaying = () => {
    progressBar.current.value = Math.floor(audioPlayer.current.currentTime);
    progressBar.current.style.setProperty('--seek-before-width', `${(progressBar.current.value / duration) * 100}%`);
    updateCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // when the playhead is moved, update the current time (text)
  const updateCurrentTime = () => {
    setCurrentTime(progressBar.current.value);
  };

  // the knobby moves when you click on the progress bar
  // update the audio player to the new point
  const changeAudioToKnobby = () => {
    audioPlayer.current.currentTime = progressBar.current.value;
    progressBar.current.style.setProperty('--seek-before-width', `${(progressBar.current.value / duration) * 100}%`);
  };

  // toggle play / pause when you tap the space bar
  const tapSpaceBar = (e) => {
    if (e.keyCode == 32) {
      togglePlaying();
    }
  };

  return (
    <StyledFeaturedAudioPlayer>
      <audio
        ref={audioPlayer}
        src="https://cdn.simplecast.com/audio/cae8b0eb-d9a9-480d-a652-0defcbe047f4/episodes/88284991-93d9-436a-845d-4133c01cde8a/audio/2040cdce-b212-4958-906d-1706fa39f6ac/default_tc.mp3"
        preload="metadata"
      />

      <div className="controls">
        <button className="playPause" onClick={togglePlaying} onKeyPress={tapSpaceBar}>
          {isPlaying ? (
            <svg width="26" height="30" viewBox="0 0 26 30" xmlns="http://www.w3.org/2000/svg" className="play">
              <path d="M25.1045 14.8922L0.949477 0.539171L0.949472 29.2453L25.1045 14.8922Z" />
            </svg>
          ) : (
            <svg width="24" height="29" viewBox="0 0 24 29" xmlns="http://www.w3.org/2000/svg" className="pause">
              <rect width="9" height="29" />
              <rect x="15" width="9" height="29" />
            </svg>
          )}
        </button>
        <input
          type="range"
          min="0"
          max="100"
          defaultValue="0"
          ref={progressBar}
          onInput={updateCurrentTime}
          onChange={changeAudioToKnobby}
        />
        <div className="bookmark" />
      </div>

      <div className="current-time">{calculateTime(currentTime)}</div>
      <div className="duration">{calculateTime(duration)}</div>
    </StyledFeaturedAudioPlayer>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFeaturedAudioPlayer = styled.div`
  .playPause {
    align-items: center;
    background: ${(props) => props.theme.charcoal};
    border: none;
    border-radius: 50%;
    color: ${(props) => props.theme.white};
    cursor: pointer;
    display: flex;
    height: 70px;
    justify-content: center;
    outline: none;
    width: 70px;

    &:hover {
      background: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.lavenderIndigo};
    }

    svg {
      fill: currentColor;
      position: relative;

      &.play {
        left: 3px;
      }
    }
  }

  /* --------- BAR STYLES ---------------- */
  input[type='range'] {
    --buffered-width: 0;
    --seek-before-width: 0;

    --bar-bg: ${(props) => props.theme.montana};
    --seek-before-color: ${(props) => props.theme.gray};
    --buffered-color: ${(props) => props.theme.shipGray};

    appearance: none;
    background: var(--bar-bg);
    border-radius: 10px;
    position: relative;
    width: 100%;
    height: 11px;
    outline: none;

    /* progress bar - safari */
    &::-webkit-slider-runnable-track {
      background: linear-gradient(
        to right,
        var(--buffered-color) 0%,
        var(--buffered-color) var(--buffered-width),
        transparent var(--buffered-width),
        transparent 100%
      );
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      cursor: pointer;
      height: 11px;
      width: 100%;
    }

    /* progress bar - chrome */
    &::before {
      background-color: var(--seek-before-color);
      border-top-left-radius: 10px;
      border-bottom-left-radius: 10px;
      content: '';
      cursor: pointer;
      height: 11px;
      left: 0;
      position: absolute;
      top: 0;
      width: var(--seek-before-width);
      z-index: 2;
      mix-blend-mode: screen;
    }
  }

  /* progress bar - firefox */
  input[type='range']::-moz-range-track {
    width: 100%;
    height: 11px;
    cursor: pointer;
    background: linear-gradient(
      to right,
      var(--buffered-color) var(--buffered-width),
      var(--bar-bg) var(--buffered-width)
    );
    border-radius: 10px;
  }

  input[type='range']::-moz-focus-outer {
    border: 0;
  }

  /* played bar - firefox */
  input[type='range']::-moz-range-progress {
    background-color: ${(props) => props.theme.gray};
    border-bottom-left-radius: 10px;
    border-top-left-radius: 10px;
    height: 11px;
  }

  input[type='range']::-moz-focus-outer {
    border: 0;
  }

  /* knobby - safari */
  input[type='range']::-webkit-slider-thumb {
    position: relative;
    -webkit-appearance: none;
    box-sizing: content-box;
    border: none;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.white};
    cursor: pointer;
    margin: -2px 0 0 0;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.45);
    z-index: 3;
    position: relative;
  }

  /* knobby while dragging - safari */
  input[type='range']:active::-webkit-slider-thumb {
    transform: scale(1.2);
    background: ${(props) => props.theme.yellow};
  }

  /* knobby - firefox */
  input[type='range']::-moz-range-thumb {
    box-sizing: content-box;
    border: transparent;
    height: 15px;
    width: 15px;
    border-radius: 50%;
    background-color: ${(props) => props.theme.white};
    cursor: pointer;
    z-index: 3;
    position: relative;
  }
  input[type='range']:active::-moz-range-thumb {
    transform: scale(1.2);
    background: ${(props) => props.theme.yellow};
  }

  .bookmark {
    background: ${(props) => props.theme.yellow};
    display: block;
    height: 11px;
    width: 100px;
    position: relative;
    top: -13px;
    left: 300px;
    pointer-events: none;
    z-index: 1;
  }
`;

export { SponsorAudioPlayer };
