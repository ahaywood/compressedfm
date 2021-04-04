import styled from "styled-components";
import BlockContent from '@sanity/block-content-to-react'
import { serializers } from "modules/shared/blockContent/Serializers";
import { calculateTime } from "utils/timeHelpers";

// styles
import { MixinBodyCopy, MixinHeading } from "styles/Typography";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const FullTranscript = ({ className, handleClick, transcript }) => {

  const onClick = (e, time) => {
    e.preventDefault();
    handleClick(time);
  }

  return (
    <StyledFullTranscript className={className}>
      <h4>Transcript</h4>
      {transcript && transcript.map(item => (
        <div className="transcript-line" key={item._id}>
          <div className="timestamp">
            <button onClick={(e) => onClick(e, item.timestamp)}>
              {calculateTime(item.timestamp)}
            </button>
          </div>
          <div className="speaker">{item.speaker}</div>
          <div className="transcript-content">
            <BlockContent blocks={item.content} serializers={serializers} />
          </div>
        </div>
      ))}
    </StyledFullTranscript>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFullTranscript = styled.section`
  h4 {
    ${MixinHeading};
  }

  .transcript-line {
    display: grid;
    grid-template-columns: 70px 50px 1fr;
    grid-column-gap: 20px;
  }

  .timestamp {
    text-align: right;
  }

  .timestamp button {
    background: ${props => props.theme.lavendarIndigo};
    border: none;
    border-radius: 3px;
    color: ${props => props.theme.black};
    cursor: pointer;
    display: inline-block;
    font-family: ${props => props.theme.sansSerif};
    font-size: 1.6rem;
    font-weight: ${props => props.theme.fontBlack};
    padding: 3px 5px;
    margin-top: 4px;

    &:hover {
      background: ${props => props.theme.yellow};
      color: ${props => props.theme.lavendarIndigo};
    }
  }

  .speaker {
    color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.mono};
    font-size: 1.6rem;
    letter-spacing: 0.3rem;
    margin-top: 8px;
    text-align: right;
    text-transform: uppercase;
  }

  .transcript-content {
    padding-right: 50px;
  }
`;

export { FullTranscript }
