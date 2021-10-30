import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { calculateTime } from 'utils/timeHelpers';
import { formatLongDate } from 'utils/dateHelpers';
import { EpisodeZeros } from 'utils/EpisodeZeros';
import { useAudioPlayer } from './hooks/AudioPlayer';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorAudioPlayer = ({
  chapters,
  currentlyPlaying,
  date,
  downloads,
  episodeNumber,
  handleMultipleAudioPlayers,
  id,
  listens,
  title,
  track,
}) => {
  // references
  const audioPlayer = useRef(); // set up reference for the audio component
  const progressBar = useRef(); // reference for the progress bar

  // hooks
  const {
    changeAudioToPlayhead,
    currentTime,
    duration,
    isPlaying,
    onLoadedMetadata,
    tapSpaceBar,
    togglePlaying,
  } = useAudioPlayer(audioPlayer, progressBar);

  // console.log({ chapters });

  const determineTime = (time) => (time / duration) * 100;

  return (
    <StyledFeaturedAudioPlayer>
      <audio ref={audioPlayer} src={track} preload="metadata" onLoadedMetadata={onLoadedMetadata} />

      {episodeNumber && (
        <div className="episodeNumber">
          {EpisodeZeros(episodeNumber)}
          {episodeNumber}
        </div>
      )}
      <div className="episodeMetaData">
        <div className="episodeTitle">{title && title}</div>
        <div className="episodeDate">{date && formatLongDate(date)}</div>
      </div>
      {downloads && (
        <div className="downloads">
          <div className="number">{downloads}</div>
          <div className="label">Downloads</div>
        </div>
      )}
      {listens && (
        <div className="listens">
          <div className="number">{listens}</div>
          <div className="label">Listens</div>
        </div>
      )}

      <div className="controls">
        <div>
          <button className="playPause" onClick={togglePlaying} onKeyPress={tapSpaceBar} type="button">
            {isPlaying ? (
              <svg width="24" height="29" viewBox="0 0 24 29" xmlns="http://www.w3.org/2000/svg" className="pause">
                <rect width="9" height="29" />
                <rect x="15" width="9" height="29" />
              </svg>
            ) : (
              <svg width="26" height="30" viewBox="0 0 26 30" xmlns="http://www.w3.org/2000/svg" className="play">
                <path d="M25.1045 14.8922L0.949477 0.539171L0.949472 29.2453L25.1045 14.8922Z" />
              </svg>
            )}
          </button>
        </div>
        <div className="current-time">{calculateTime(currentTime)}</div>
        <div className="range-wrapper">
          <input type="range" min="0" max="100" defaultValue="0" ref={progressBar} onChange={changeAudioToPlayhead} />
          {chapters?.adStart && chapters?.adEnd && (
            <StyledBookmarks
              adStart={determineTime(Number(chapters.adStart))}
              adEnd={determineTime(Number(chapters.adEnd) - Number(chapters.adStart))}
            />
          )}
        </div>
        <div className="duration">{calculateTime(duration)}</div>
      </div>
    </StyledFeaturedAudioPlayer>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFeaturedAudioPlayer = styled.div`
  background: url(/images/horizontal-divider.svg) left bottom repeat-x;
  margin: 0 auto;
  max-width: ${(props) => props.theme.pageWidth};
  position: relative;
  display: grid;
  grid-template-columns: 1fr 185px 185px;
  grid-template-areas:
    'title downloads listens'
    'player player player';
  grid-column-gap: 25px;
  margin-bottom: 45px;
  padding-bottom: 45px;
  padding-left: 200px;

  .episodeNumber {
    color: ${(props) => props.theme.montana};
    position: absolute;
    top: -50px;
    font-size: 13.2rem;
    font-weight: ${(props) => props.theme.fontBlack};
    text-align: right;
    width: 255px;
    left: -70px;

    .zeros {
      -webkit-text-stroke: 2px ${(props) => props.theme.montana};
    }
  }

  .episodeMetaData {
    grid-area: title;
  }

  .episodeTitle {
    font-family: ${(props) => props.theme.sans};
    font-size: 4.8rem;
    font-weight: ${(props) => props.theme.fontBlack};
    margin-bottom: 4px;
  }

  .episodeDate {
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    font-style: italic;
    margin-bottom: 10px;
  }

  .downloads {
    grid-area: downloads;
  }

  .listens {
    grid-area: listens;
  }

  .downloads .number,
  .listens .number {
    color: ${(props) => props.theme.yellow};
    font-size: 3.5rem;
    font-family: ${(props) => props.theme.sans};
    font-weight: ${(props) => props.theme.fontBlack};
    margin-bottom: 5px;
  }

  .downloads .label,
  .listens .label {
    font-size: 1.8rem;
    font-family: ${(props) => props.theme.mono};
    text-transform: uppercase;
  }

  .controls {
    grid-area: player;
    display: flex;
    align-items: center;
    gap: 25px;
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

  .range-wrapper {
    flex: 1;
    position: relative;
    top: 4px;
  }

  .current-time,
  .duration {
    font-size: 1.8rem;
    font-family: ${(props) => props.theme.mono};
  }
`;

const StyledBookmarks = styled.div`
  background: ${(props) => props.theme.yellow};
  display: block;
  height: 11px;
  width: ${(props) => props.adEnd}%;
  position: relative;
  top: -13px;
  left: ${(props) => props.adStart}%;
  pointer-events: none;
  z-index: 1;
`;

export { SponsorAudioPlayer };
