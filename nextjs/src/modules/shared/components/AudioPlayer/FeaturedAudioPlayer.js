import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

// component
import { Icon } from 'modules/shared/components/icon';

// utils
import { calculateTime } from 'utils/timeHelpers';

// styles
import { Breakpoints } from 'styles/Breakpoints';

// hooks
import { useAudioPlayer } from './hooks/AudioPlayer';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const FeaturedAudioPlayer = ({ track }) => {
  // references
  const audioPlayer = useRef(); // set up reference for the audio component
  const progressBar = useRef(); // reference for the progress bar

  // hooks
  const {
    backThirty,
    changeAudioToPlayhead,
    currentTime,
    duration,
    forwardThirty,
    isPlaying,
    togglePlaying,
  } = useAudioPlayer(audioPlayer, progressBar);

  // toggle play / pause when you tap the space bar
  const tapSpaceBar = (e) => {
    if (e.keyCode === 32) {
      togglePlaying();
    }
  };

  return (
    <StyledFeaturedAudioPlayer>
      <audio ref={audioPlayer} src={track} preload="metadata" />

      <div className="controls">
        <button type="button" onClick={backThirty} className="forwardBackward">
          <Icon name="arrow" className="back" />
          30
        </button>
        <button type="button" className="playPause" onClick={togglePlaying} onKeyPress={tapSpaceBar}>
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
        <button type="button" onClick={forwardThirty} className="forwardBackward">
          30
          <Icon name="arrow" />
        </button>
        <div className="current-time">{calculateTime(currentTime)}</div>
        <div className="progress-bar">
          <input type="range" min="0" max="100" defaultValue="0" ref={progressBar} onChange={changeAudioToPlayhead} />
        </div>
        <div className="duration">{duration && !isNaN(duration) && calculateTime(duration)}</div>
      </div>
    </StyledFeaturedAudioPlayer>
  );
};

FeaturedAudioPlayer.propTypes = {
  track: PropTypes.string.isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFeaturedAudioPlayer = styled.div`
  .controls {
    align-items: center;
    display: grid;
    grid-template-columns: 60px 1fr 60px;

    @media (${Breakpoints.portrait}) {
      display: flex;
    }

    @media (${Breakpoints.regular}) {
      padding: 0;
    }
  }

  button.forwardBackward {
    align-items: center;
    background: none;
    border: none;
    color: ${(props) => props.theme.yellow};
    cursor: pointer;
    display: flex;
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    width: 75px;

    svg {
      position: relative;
      transition: transform 0.25s ease-in-out;
    }

    &:hover svg {
      transform: translateX(5px);
    }

    .back {
      transform: rotate(180deg);
    }

    &:hover .back {
      transform: rotate(180deg) translateX(5px);
    }
  }

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
    margin: 0 auto 10px;
    outline: none;
    width: 70px;

    @media (${Breakpoints.portrait}) {
      margin: 0 20px;
    }

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

  .current-time,
  .duration {
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    width: 50px;
  }

  /* --------- BAR STYLES ---------------- */
  /* wraps range and any bookmarks and chapters */
  .progress-bar {
    flex: 1;
    margin-right: 15px;
    position: relative;
  }

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
    left: 300px;
    pointer-events: none;
    position: relative;
    top: -13px;
    width: 100px;
    z-index: 1;
  }
`;

export { FeaturedAudioPlayer };
