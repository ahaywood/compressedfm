import styled from "styled-components";
import { calculateTime } from "utils/timeHelpers";

// styles
import { MixinBodyCopy, MixinHeading } from "styles/Typography";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const JumpLinks = ({ timeJump, handleClick }) => {

  const onClick = (e, time) => {
    e.preventDefault();
    handleClick(time);
  }

  return (
    <StyledJumpLinks>
      <h4>Jump Links</h4>
      <ul>
        {timeJump && timeJump.map(one => (
          <li key={one._key}>
            <a href="#" onClick={e => onClick(e, one.time)}>
              <div className="time-code">{calculateTime(one.time)}</div>
              <div className="description">{one.description}</div>
            </a>
          </li>
        ))}
      </ul>
    </StyledJumpLinks>
  )
}

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
    margin-bottom: 20px;

    a {
      display: flex;
      text-decoration: none;
    }

    &:hover .time-code,
    &:hover .description {
      color: ${props => props.theme.lavendarIndigo};
    }

    .time-code {
      color: ${props => props.theme.yellow};
      display: block;
      font-family: ${props => props.theme.sansSerif};
      font-size: 1.8rem;
      font-weight: ${props => props.theme.fontBlack};
      line-height: 1;
      margin-right: 10px;
      text-align: right;
      width: 55px;
    }

    .description {
      ${MixinBodyCopy}
      line-height: 1;
      margin-bottom: 0;
    }
  }
`;

export { JumpLinks }
