import PropTypes from 'prop-types';
import styled from 'styled-components';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const TotalBlock = ({ number, label }) => (
  <StyledTotalBlock>
    <h3 className="number">{number}</h3>
    <h5>{label}</h5>
  </StyledTotalBlock>
);

TotalBlock.propTypes = {
  label: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledTotalBlock = styled.section`
  display: block;
  background: ${(props) => props.theme.montana};
  padding: 30px;

  .number {
    color: ${(props) => props.theme.yellow};
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 6rem;
    font-weight: ${(props) => props.theme.fontBlack};
    padding: 0;
    margin: 0 0 10px;
    line-height: 1;
  }

  h5 {
    color: ${(props) => props.theme.white};
    font-size: 2.4rem;
    font-family: ${(props) => props.theme.mono};
    font-style: italic;
    padding: 0;
    margin: 0;
  }
`;

export { TotalBlock };
