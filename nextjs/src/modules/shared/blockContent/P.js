import styled from "styled-components";
import { MixinBodyCopy } from "styles/Typography";

const P = (props) => (
  <StyledP>{props.children}</StyledP>
);

export { P };

const StyledP = styled.p`
  ${MixinBodyCopy};
  margin-bottom: ${props => props.theme.betweenTextBlocks};

  a {
    border-bottom: 1px solid ${props => props.theme.yellow};
    color: ${props => props.theme.yellow};
    font-weight: ${props => props.theme.fontBold};
    text-decoration: none;

    &:hover {
      border-color: ${props => props.theme.lavendarIndigo};
      color: ${props => props.theme.lavendarIndigo};
    }
  }
`;