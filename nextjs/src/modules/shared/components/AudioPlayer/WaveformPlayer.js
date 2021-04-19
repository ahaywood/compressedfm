import PropTypes from 'prop-types';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

// components
import { Icon } from 'modules/shared/components/Icon';

// utils
import { calculateTime } from 'utils/timeHelpers';

// hooks
import { useAudioPlayer } from './hooks/AudioPlayer';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const WaveformPlayer = ({ audioPath, episodeNumber, episodeTitle, skipTo }) => {
  // references
  const audioPlayer = useRef(); // set up reference for the audio component
  const progressBar = useRef(); // reference for the progress bar

  // hooks
  const {
    backThirty,
    changeAudioToPlayhead,
    changePlaybackSpeed,
    currentTime,
    duration,
    forwardThirty,
    isPlaying,
    skipToTime,
    speed,
    togglePlaying,
  } = useAudioPlayer(audioPlayer, progressBar);

  // useEffect(() => {
  //   skipToTime(skipTo);
  // }, [skipTo]);

  // toggle play / pause when you tap the space bar
  const tapSpaceBar = (e) => {
    if (e.keyCode === 32) {
      togglePlaying();
    }
  };

  return (
    <StyledFeaturedAudioPlayer>
      {/* audio element */}
      <audio ref={audioPlayer} src={audioPath} preload="metadata" />

      {/* album cover */}
      <div className="album-cover">
        <img src="/images/placeholder__cover.png" alt="Episode Cover" />
      </div>

      {/* episode meta data */}
      <div className="meta">
        <h4>COMPRESSED.fm {episodeNumber && `|| Episode ${episodeNumber}`}</h4>
        <h2>{episodeTitle}</h2>
      </div>

      {/* play / pause */}
      <div className="controls">
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

        {/* current time */}
        <div className="current-time">{calculateTime(currentTime)}</div>

        {/* progress bar */}
        <div className="progress-bar">
          <input type="range" min="0" max="100" defaultValue="0" ref={progressBar} onChange={changeAudioToPlayhead} />
        </div>

        {/* duration */}
        <div className="duration">{duration && calculateTime(duration)}</div>

        {/* back thirty */}
        <button type="button" onClick={backThirty} className="forwardBackward backward">
          <Icon name="arrow" className="back" />
          30
        </button>

        {/* forward thirty */}
        <button type="button" onClick={forwardThirty} className="forwardBackward forward">
          30
          <Icon name="arrow" />
        </button>

        {/* change playback speed */}
        <button type="button" className="playbackSpeed" onClick={changePlaybackSpeed}>
          {speed}X
        </button>
      </div>
    </StyledFeaturedAudioPlayer>
  );
};

WaveformPlayer.propTypes = {
  audioPath: PropTypes.string,
  episodeNumber: PropTypes.number,
  episodeTitle: PropTypes.string,
  skipTo: PropTypes.number,
};

WaveformPlayer.defaultProps = {
  audioPath: '',
  episodeNumber: '',
  episodeTitle: '',
  skipTo: 0,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFeaturedAudioPlayer = styled.div`
  background: linear-gradient(
    ${(props) => props.theme.black} 0%,
    ${(props) => props.theme.black} 50%,
    ${(props) => props.theme.bastille} 50%,
    ${(props) => props.theme.bastille} 100%
  );
  border: 1px solid ${(props) => props.theme.bastille};
  display: grid;
  grid-template-areas:
    'cover meta'
    'cover controls';
  grid-template-columns: 160px 1fr;
  grid-column-gap: 20px;
  padding: 20px;
  max-width: 660px;
  margin: 0 auto;
  position: relative;

  .album-cover {
    grid-area: cover;

    img {
      width: 100%;
    }
  }

  .meta {
    grid-area: meta;
    text-align: left;

    /* episode title */
    h2 {
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 2rem;
      line-height: 1;
      margin: 0;
      padding: 0;
    }

    /* episode number */
    h4 {
      color: ${(props) => props.theme.gray};
      font-family: ${(props) => props.theme.mono};
      font-size: 1.4rem;
      font-weight: normal;
      line-height: 1;
      margin: 0 0 10px 0;
      padding: 0;
    }
  }

  .controls {
    align-items: center;
    align-self: flex-end;
    grid-area: controls;
    display: flex;
    position: relative;
  }

  .playbackSpeed {
    background: none;
    border: 1px solid ${(props) => props.theme.white};
    color: ${(props) => props.theme.white};
    cursor: pointer;
    font-family: ${(props) => props.theme.mono};
    font-size: 1.2rem;
    position: absolute;
    left: 90px;
    top: 55px;

    &:hover {
      background: ${(props) => props.theme.yellow};
      border-color: ${(props) => props.theme.yellow};
      color: ${(props) => props.theme.black};
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
    font-size: 1.4rem;
    position: absolute;
    width: 75px;

    svg {
      position: relative;
      transition: transform 0.25s ease-in-out;
    }

    &:hover svg {
      transform: translateX(5px);
    }

    /* back 30 button */
    &.backward {
      left: 120px;
      top: 47px;
    }

    /* rotates the arrow to point left */
    .back {
      transform: rotate(180deg);
    }

    &:hover .back {
      transform: rotate(180deg) translateX(5px);
    }

    /* forward 30 button */
    &.forward {
      right: 0;
      top: 47px;
    }
  }

  .playPause {
    align-items: center;
    background: ${(props) => props.theme.lightGray};
    border: none;
    border-radius: 50%;
    color: ${(props) => props.theme.black};
    cursor: pointer;
    display: flex;
    height: 70px;
    justify-content: center;
    margin: 0 20px 0 0;
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

  .current-time,
  .duration {
    background: ${(props) => props.theme.black};
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.mono};
    font-size: 1.2rem;
    padding: 3px 0;
    position: absolute;
    width: 45px;
    z-index: 2;
  }

  .current-time {
    top: 15px;
    left: 100px;
  }

  .duration {
    top: 15px;
    right: 20px;
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
    /* background: var(--bar-bg); */
    background: url('https://res.cloudinary.com/ahha/video/upload/h_40,w_375,fl_waveform,co_rgb:5d5d5d,b_rgb:2e2e2e/v1616512497/compressedfm/212_full_body-rock_0159_zmnaay.png')
      left top no-repeat;
    border-radius: 10px;
    position: relative;
    width: 375px;
    height: 40px;
    outline: none;
    position: relative;
    top: -10px;
    z-index: 1;

    /* progress bar - safari */
    /* &::-webkit-slider-runnable-track {
      background: url('https://res.cloudinary.com/ahha/video/upload/h_40,w_375,fl_waveform,co_white,b_rgb:2e2e2e/v1616512497/compressedfm/212_full_body-rock_0159_zmnaay.png') left top no-repeat;
      cursor: pointer;
      height: 40px;
      /* width: var(--seek-before-width); */
    /* width: 30px; */
    /* }  */

    /* progress bar - chrome */
    &::before {
      background: url('https://res.cloudinary.com/ahha/video/upload/h_40,w_375,fl_waveform,co_rgb:white,b_rgb:2e2e2e/v1616512497/compressedfm/212_full_body-rock_0159_zmnaay.png')
        left top no-repeat;
      content: '';
      cursor: pointer;
      height: 40px;
      left: 0;
      position: absolute;
      top: 0;
      width: var(--seek-before-width);
      z-index: 2;
      z-index: 2;
    }

    /* progress bar - firefox */
    &::-moz-range-track {
      width: 100%;
      height: 40px;
      cursor: pointer;
      background: url('https://res.cloudinary.com/ahha/video/upload/h_40,w_375,fl_waveform,co_rgb:5d5d5d,b_rgb:2e2e2e/v1616512497/compressedfm/212_full_body-rock_0159_zmnaay.png')
        left top no-repeat;
    }

    &::-moz-focus-outer {
      border: 0;
    }

    /* played bar - firefox */
    &::-moz-range-progress {
      background-color: ${(props) => props.theme.gray};
      border-bottom-left-radius: 10px;
      border-top-left-radius: 10px;
      height: 11px;
    }

    /* knobby - safari */
    &::-webkit-slider-thumb {
      position: relative;
      -webkit-appearance: none;
      box-sizing: content-box;
      border: none;
      height: 50px;
      width: 3px;
      background-color: ${(props) => props.theme.yellow};
      cursor: pointer;
      margin: -2px 0 0 0;
      box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.45);
      z-index: 3;
      position: relative;
      top: 0px;
    }

    /* knobby while dragging - safari */
    &:active::-webkit-slider-thumb {
      transform: scale(1.1);
      background: ${(props) => props.theme.yellow};
    }

    /* knobby - firefox */
    &::-moz-range-thumb {
      box-sizing: content-box;
      border: transparent;
      height: 40px;
      width: 2px;
      background-color: ${(props) => props.theme.yellow};
      cursor: pointer;
      z-index: 3;
      position: relative;
    }
    &:active::-moz-range-thumb {
      transform: scale(1.2);
      background: ${(props) => props.theme.yellow};
    }
  }
`;

export { WaveformPlayer };
