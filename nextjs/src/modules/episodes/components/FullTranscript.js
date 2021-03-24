import styled from "styled-components";
import { MixinBodyCopy, MixinHeading } from "styles/Typography";

const FullTranscript = ({ className }) => {
  return (
    <StyledFullTranscript className={className}>
      <h4>Transcript</h4>
    </StyledFullTranscript>
  )
}

const StyledFullTranscript = styled.section`
  h4 {
    ${MixinHeading};
  }
`;

export { FullTranscript }
