import styled from "styled-components";

const H2 = (props) => {
  return (
    <StyledH2>{props.children}</StyledH2>
  )
};
export { H2 };

const StyledH2 = styled.h2`
  font-family: ${props => props.theme.sansSerif};
  font-size: 3.8rem;
  font-weight: ${props => props.theme.fontBlack};
  margin: 0 0 10px;
  color: ${props => props.theme.yellow};
`;