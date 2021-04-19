import PropTypes from 'prop-types';
import styled from 'styled-components';
import { calculateTime } from 'utils/timeHelpers';

// styles
import { Breakpoints } from 'styles/Breakpoints';
import { MixinBodyCopy, MixinHeading } from 'styles/Typography';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const JumpLinks = ({ timeJump, handleClick }) => {
  const onClick = (e, time) => {
    e.preventDefault();
    handleClick(time);
  };

  return (
    <StyledJumpLinks>
      <h4>Jump Links</h4>
      <ul>
        {timeJump &&
          timeJump.map((one) => (
            <li key={one._key}>
              <button type="button" onClick={(e) => onClick(e, one.time)}>
                <div className="time-code">{calculateTime(one.time)}</div>
                <div className="description">{one.description}</div>
              </button>
            </li>
          ))}
      </ul>
    </StyledJumpLinks>
  );
};

JumpLinks.propTypes = {
  timeJump: PropTypes.array,
  handleClick: PropTypes.func,
};

JumpLinks.defaultProps = {
  timeJump: [],
  handleClick: () => { },
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledJumpLinks = styled.section`
  h4 {
    ${MixinHeading}
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    margin-bottom: 15px;

    button {
      background: none;
      border: none;
      cursor: pointer;
      display: grid;
      grid-template-columns: 60px 1fr;
      text-decoration: none;
    }

    &:hover .time-code,
    &:hover .description {
      color: ${(props) => props.theme.lavenderIndigo};
    }

    .time-code {
      color: ${(props) => props.theme.yellow};
      display: block;
      font-family: ${(props) => props.theme.sansSerif};
      font-size: 1.8rem;
      font-weight: ${(props) => props.theme.fontBlack};
      line-height: 1;
      margin-right: 10px;
      position: relative;
      text-align: right;
      top: 5px;
      /* width: 60px; */
    }

    .description {
      ${MixinBodyCopy}
      text-align: left;
      line-height: 1;
      margin-bottom: 0;

      @media (${Breakpoints.portrait}) {
        line-height: 1.5;
      }
    }
  }
`;

export { JumpLinks };
