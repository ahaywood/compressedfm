import PropTypes from 'prop-types';
import styled from 'styled-components';

const H2 = ({ children }) => <StyledH2>{children}</StyledH2>;

H2.propTypes = {
  children: PropTypes.string.isRequired,
};

export { H2 };

const StyledH2 = styled.h2`
  font-family: ${(props) => props.theme.sansSerif};
  font-size: 3.8rem;
  font-weight: ${(props) => props.theme.fontBlack};
  margin: 0 0 20px;
  color: ${(props) => props.theme.yellow};
`;
