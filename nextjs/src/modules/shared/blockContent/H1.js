import styled from "styled-components";

const H1 = (props) => (
  <StyledH1>{props.children}</StyledH1>
);

export { H1 };

const StyledH1 = styled.h1`
  font-family: ${props => props.theme.sansSerif};
  font-size: 4.8rem;
  font-weight: ${props => props.theme.fontBlack};
  margin: 0 0 ${props => props.theme.betweenTextBlocks};
`;
