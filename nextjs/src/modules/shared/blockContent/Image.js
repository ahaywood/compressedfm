import PropTypes from 'prop-types';
import styled from 'styled-components';

const Image = ({ node }) => {
  const { alt, imageUrl } = node;
  return (
    <StyledImage>
      <img src={imageUrl && imageUrl} alt={alt && alt} />
    </StyledImage>
  );
};

Image.propTypes = {
  node: PropTypes.shape({
    alt: PropTypes.string,
    imageUrl: PropTypes.string,
  }),
};

Image.defaultProps = {
  node: {
    alt: '',
    imageUrl: '',
  },
};

export { Image };

const StyledImage = styled.div`
  margin-bottom: ${(props) => props.theme.betweenTextBlocks};
`;
