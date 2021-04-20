import styled from 'styled-components';
import { MixinBodyCopy, MixinHeading } from 'styles/Typography';
import { Icon } from 'modules/shared/components/Icon';
import { Breakpoints } from 'styles/Breakpoints';

const Links = ({ listLink }) => (
  <StyledLinks>
    <h4>Links</h4>
    <ul>
      {listLink &&
        listLink.map((item) => (
          <li key={item._key}>
            <a href={item.linkUrl} _target={item.newTab ? 'blank' : 'self'}>
              <Icon name="arrow" />
              {item.linkLabel}
            </a>
          </li>
        ))}
    </ul>
  </StyledLinks>
);

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
    line-height: 1.2rem;
    margin-bottom: 20px;
    padding-left: 35px;

    @media (${Breakpoints.portrait}) {
      line-height: 1.5;
    }
  }

  a {
    color: ${(props) => props.theme.white};
    text-decoration: none;
    position: relative;

    &:hover {
      color: ${(props) => props.theme.lavenderIndigo};
    }
  }

  svg {
    fill: ${(props) => props.theme.yellow};
    position: absolute;
    left: -40px;
    top: -9px;

    @media (${Breakpoints.portrait}) {
      top: -1px;
    }
  }

  a:hover svg {
    fill: ${(props) => props.theme.lavenderIndigo};
  }
`;

export { Links };
