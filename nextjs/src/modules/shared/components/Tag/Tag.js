import styled from 'styled-components';
import PropTypes from 'prop-types';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Tag = ({ className, label }) => <StyledTag className={className}>{label}</StyledTag>;

Tag.propTypes = {
  className: PropTypes.string,
  label: PropTypes.string,
};

Tag.defaultProps = {
  className: '',
  label: '',
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledTag = styled.section`
  background: ${(props) => props.theme.montana};
  font-size: 1.8rem;
  font-family: ${(props) => props.theme.mono};
  text-transform: uppercase;
  padding: 4px 0;
  border-radius: 3px;
  text-align: center;
  width: 100%;

  &.alert {
    background: ${(props) => props.theme.lavenderIndigo};
    color: white;
  }
`;

export { Tag };
