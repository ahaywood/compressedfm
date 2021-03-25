import PropTypes from "prop-types";
import { useRouter } from 'next/router'
import styled from "styled-components";
import Link from "next/link"
import { useUser } from '@auth0/nextjs-auth0';

// components
import { Icon } from "modules/shared/components/Icon"
import { Tag } from "./Tag";

// styles
import { MixinTextField, MixinLabel, MixinButtonWithArrow } from "styles/Form";
import { Breakpoints } from "styles/Breakpoints";
import { Zindex } from "styles/Zindex";


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Navigation = ({ isShowing }) => {
  const router = useRouter()
  const { user } = useUser();

  // strip the slash out of the pathname so that I can use it as a className
  const currentPage = router.asPath.replace('/', '');

  return (
    <StyledNavigation className={isShowing ? 'showing' : ''}>
      <div className="main-nav">
        <ul className={currentPage ? currentPage : 'home'}>
          <li className="home">
            <Link href="/"><a>Home</a></Link>
          </li>
          <li className="about">
            <Link href="/about"><a>About</a></Link>
          </li>
          <li className="episodes">
            <Link href="/episodes"><a>Episodes</a></Link>
          </li>
          <li className="sponsors">
            <Link href="/sponsors"><a>Sponsors</a></Link>
          </li>
          <li className="newsletter">
            <Link href="/newsletter"><a>Newsletter</a></Link>
          </li>
          <li className="contact">
            <Link href="/contact"><a>Contact</a></Link>
          </li>
        </ul>
      </div>

      <div className="sub-nav">
        <ul className={currentPage ? currentPage : 'home'}>
          <li className="press-kit">
            <Link href="/press-kit"><a>Press Kit</a></Link>
          </li>
          <li className="sponsoring">
            <Link href="/sponsoring"><a>Sponsoring</a></Link>
          </li>
          <li className="login">
            {user ? <a href="/api/auth/logout">Logout</a> : <a href="/api/auth/login">Login</a>}
          </li>
        </ul>
      </div>

      <div className="search">
        <form action="">
          <input type="text" name="search" id="search" placeholder=" " />
          <label htmlFor="search">Search</label>
          <button name="submit" role="submit">
            <Icon name="arrow" height="64" width="64" />
          </button>
        </form>

        <h3>Tags</h3>
        <ul className="tag-list">
          <li><Tag name="TypeScript" /></li>
          <li><Tag name="Design" /></li>
          <li><Tag name="Serverless" /></li>
          <li><Tag name="JAMStack" /></li>
          <li><Tag name="WordPress" /></li>
          <li><Tag name="No Code" /></li>
          <li><Tag name="TypeScript" /></li>
          <li><Tag name="Design" /></li>
          <li><Tag name="Serverless" /></li>
          <li><Tag name="JAMStack" /></li>
          <li><Tag name="WordPress" /></li>
          <li><Tag name="No Code" /></li>
          <li><Tag name="TypeScript" /></li>
          <li><Tag name="Design" /></li>
          <li><Tag name="Serverless" /></li>
          <li><Tag name="JAMStack" /></li>
          <li><Tag name="WordPress" /></li>
          <li><Tag name="No Code" /></li>
        </ul>
      </div>
    </StyledNavigation>
  )
}

Navigation.propTypes = {
  isShowing: PropTypes.bool
};

Navigation.defaultProps = {
  isShowing: false
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledNavigation = styled.div`
  --container-padding: 110px;

  background:${props => props.theme.bastille};
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    "main search"
    "sub search";
  height: 100vh;
  left: 0;
  position: fixed;
  bottom: 200vh;
  transition: bottom 0.5s ease-in-out;
  right: 0;
  width: 100vw;
  z-index: 100;

  &.showing {
    bottom: 0;
  }

  .main-nav {
    background: ${props => props.theme.bastille};
    grid-area: main;
    padding: var(--container-padding);
    padding-bottom: 0;
    text-align:left;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        font-family: ${props => props.theme.sansSerif};
        font-size: 4.8rem;
        font-weight: ${props => props.theme.fontBlack};
        line-height: 8.2rem;
      }

      a {
        color: ${props => props.theme.white};
        text-decoration: none;

        &:hover {
          color: ${props => props.theme.lavendarIndigo};
        }
      }

      /* set styles for the current page */
      &.home li.home a,
      &.about li.about a,
      &.episodes li.episodes a,
      &.sponsors li.sponsors a,
      &.newsletter li.newsletter a,
      &.contact li.contact a {
        color: ${props => props.theme.yellow};
      }
    }
  }

  .sub-nav {
    align-self: flex-end;
    background: ${props => props.theme.bastille};;
    grid-area: sub;
    padding: var(--container-padding);
    padding-top: 0;
    text-align: left;

    ul {
      list-style-type: none;
      margin: 0;
      padding: 0;

      li {
        font-family: ${props => props.theme.sansSerif};
        font-size: 2.4rem;
        font-weight: ${props => props.theme.fontMedium};
        line-height: 2;
      }

      a {
        color: ${props => props.theme.white};
        text-decoration: none;

        &:hover {
          color: ${props => props.theme.yellow};
        }
      }

      /* set styles for the current page */
      &.press-kit li.press-kit a,
      &.sponsoring li.sponsoring a,
      &.login li.login a {
        color: ${props => props.theme.yellow};
      }
    }


  }

  .search {
    background: ${props => props.theme.charcoal};;
    grid-area: search;
    padding: var(--container-padding);;
    text-align: left;

    form {
      position: relative;
      margin-bottom: 85px;
    }

    input[type=text] {
      ${MixinTextField}
    }

    label {
      ${MixinLabel}
    }

    ${MixinButtonWithArrow}
  }

  h3 {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme.fontMedium};
    font-size: 2.4rem;
  }

  .tag-list {
    display: flex;
    flex-wrap: wrap;
    list-style-type: none;
    margin: 0;
    padding: 0;
  }


`;

export { Navigation };
