import styled from "styled-components";
import { MixinLargeBodyCopy } from "styles/Typography";

const LargeText = (props) => (
  <StyledLargeText>{props.children}</StyledLargeText>
);

export { LargeText };

const StyledLargeText = styled.span`
  ${MixinLargeBodyCopy}
  margin-bottom: ${props => props.theme.betweenTextBlocks};
`;
