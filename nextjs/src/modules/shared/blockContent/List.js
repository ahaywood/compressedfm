import PropTypes from 'prop-types';
import styled from 'styled-components';

const List = ({ type, children }) => {
  if (type === 'bullet') {
    return <StyledUl>{children}</StyledUl>;
  }
  if (type === 'number') {
    return <StyledOl>{children}</StyledOl>;
  }
  return <div>{children}</div>;
};

List.propTypes = {
  type: PropTypes.oneOf(['bullet', 'number']),
  children: PropTypes.string,
};

List.defaultProps = {
  type: '',
  children: '',
};

export { List };

const StyledUl = styled.ul`
  margin-bottom: ${(props) => props.theme.betweenTextBlocks};
`;

const StyledOl = styled.ol`
  margin-bottom: ${(props) => props.theme.betweenTextBlocks};
`;
