import PropTypes from 'prop-types';
import styled from 'styled-components';

const HorizontalDivider = ({ length }) => <StyledHr className={length} />;

export { HorizontalDivider };

const StyledHr = styled.hr`
  background: url('/images/horizontal-divider.svg') center top repeat-x;
  border: none;
  height: 1px;
  margin: 60px 0;

  &.short {
    background-repeat: no-repeat;
  }
`;

HorizontalDivider.propTypes = {
  length: PropTypes.string,
};

HorizontalDivider.defaultProps = {
  length: '',
};
