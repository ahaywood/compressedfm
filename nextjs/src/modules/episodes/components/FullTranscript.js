import styled from "styled-components";

// styles
import { MixinBodyCopy, MixinHeading } from "styles/Typography";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const FullTranscript = ({ className }) => {
  return (
    <StyledFullTranscript className={className}>
      <h4>Transcript</h4>
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
`;

export { FullTranscript }
