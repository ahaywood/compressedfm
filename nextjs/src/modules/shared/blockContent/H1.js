import PropTypes from 'prop-types';
import styled from 'styled-components';

const H1 = ({ children }) => <StyledH1>{children}</StyledH1>;

H1.propTypes = {
  children: PropTypes.any.isRequired,
};

export { H1 };

const StyledH1 = styled.h1`
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 4.8rem;
  font-weight: ${(props) => props.theme.fontBlack};
  margin: 0 0 ${(props) => props.theme.betweenTextBlocks};
`;
