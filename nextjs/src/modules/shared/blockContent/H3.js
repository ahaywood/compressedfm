import styled from "styled-components";

const H3 = (props) => {
  return (
    <StyledH3>{props.children}</StyledH3>
  );
};
export { H3 };

const StyledH3 = styled.h3`
  font-family: ${props => props.theme.sansSerif};
  font-size: 2.8rem;
  font-weight: ${props => props.theme.fontBlack};
  margin: 0 0 10px;
  color: ${props => props.theme.white};
`;