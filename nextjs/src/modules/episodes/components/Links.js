import styled from "styled-components";
import { MixinBodyCopy, MixinHeading } from "styles/Typography";
import { Icon } from "modules/shared/components/Icon";

const Links = ({ listLink }) => {
  return (
    <StyledLinks>
      <h4>Links</h4>
      <ul>
        {listLink && listLink.map(item => (
          <li>
            <a href={item.linkUrl} _target={item.newTab ? 'blank' : 'self'}>
              <Icon name="arrow" />
              {item.linkLabel}
            </a>
          </li>
        ))}
      </ul>
    </StyledLinks >
  )
}

const StyledLinks = styled.section`
  h4 {
    ${MixinHeading}
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    ${MixinBodyCopy}
    display: flex;
    line-height: 1.8rem;
    margin-bottom: 20px;
    padding-left: 35px;
  }

  a {
    color: ${props => props.theme.white};
    text-decoration: none;
    position: relative;

    &:hover {
      color: ${props => props.theme.lavendarIndigo};
    }
  }

  svg {
    fill: ${props => props.theme.yellow};
    position: absolute;
    left: -40px;
    top: -5px;
  }

  a:hover svg {
    fill: ${props => props.theme.lavendarIndigo};
  }
`;

export { Links }
