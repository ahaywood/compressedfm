import styled from "styled-components";
import { MixinBodyCopy } from "styles/Typography";

const UnorderedList = (props) => (
  <StyledUl>{props.children}</StyledUl>
);

export { UnorderedList };

const StyledUl = styled.div`
  margin-bottom: ${props => props.theme.betweenTextBlocks};

  li {
    ${MixinBodyCopy};
  }

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