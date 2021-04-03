import styled from "styled-components";

const List = (props) => {
  if (props.type === "bullet") {
    return (
      <StyledUl>{props.children}</StyledUl>
    );
  }
  if (props.type === "number") {
    return (
      <StyledOl>{props.children}</StyledOl>
    );
  }
  return (
    <div>{props.children}</div>
  );
};

export { List };

const StyledUl = styled.ul`
  margin-bottom: ${props => props.theme.betweenTextBlocks};
`;

const StyledOl = styled.ol`
  margin-bottom: ${props => props.theme.betweenTextBlocks};
`;