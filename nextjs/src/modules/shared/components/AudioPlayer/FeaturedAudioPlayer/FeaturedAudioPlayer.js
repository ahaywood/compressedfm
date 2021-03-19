import { useState } from "react";
import styled from "styled-components";

const FeaturedAudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  const togglePlaying = () => {
    setIsPlaying(!isPlaying);
  }

  const scrubTimeline = () => {
    console.log('scrubbing');
  }

  return (
    <StyledFeaturedAudioPlayer>
      <button className="playPause" onClick={togglePlaying}>
        {isPlaying ? (<svg width="26" height="30" viewBox="0 0 26 30" xmlns="http://www.w3.org/2000/svg">
          <path d="M25.1045 14.8922L0.949477 0.539171L0.949472 29.2453L25.1045 14.8922Z" />
        </svg>) : "paused"}
      </button>

      <input type="range" className="seek-slider" max="100" defaultValue="0" onChange={scrubTimeline} />

      <div className="current-time">0:00</div>
      <div className="duration">0:00</div>
    </StyledFeaturedAudioPlayer>
  )
}

const StyledFeaturedAudioPlayer = styled.div`
  .playPause {
    align-items: center;
    background: ${props => props.theme.charcoal};
    border: none;
    border-radius: 50%;
    color: ${props => props.theme.white};
    cursor: pointer;
    display: flex;
    height: 70px;
    justify-content: center;
    outline: none;
    width: 70px;

    &:hover {
      background: ${props => props.theme.yellow};
      color: ${props => props.theme.black};
    }

    svg {
      fill: currentColor;
      left: 3px;
      position: relative;
    }
  }
`;

export { FeaturedAudioPlayer }
