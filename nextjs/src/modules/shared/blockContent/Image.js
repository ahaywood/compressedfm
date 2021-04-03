import styled from "styled-components";

const Image = (props) => {
  const { alt, caption, attribution, imageUrl } = props.node;
  return (
    <StyledImage>
      <img
        src={imageUrl && imageUrl}
        alt={alt && alt} />
    </StyledImage>);
};
export { Image };

const StyledImage = styled.div`
  margin-bottom: ${props => props.theme.betweenTextBlocks};
`;