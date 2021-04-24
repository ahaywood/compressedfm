import { useState } from 'react';
import Link from 'next/link';
import styled from 'styled-components';
import Image from 'next/image';

// components
import { Breakpoints } from 'styles/Breakpoints';
import { Navigation } from './components/Navigation';
import { Hamburger } from './components/Hamburger';

// styles

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Header = () => {
  const [navShowing, setNavShowing] = useState(false);

  const handleClick = () => {
    setNavShowing(!navShowing);
  };

  return (
    <StyledHeader>
      <Navigation isShowing={navShowing} handleClick={handleClick} />
      <Hamburger className="hamburger" onClick={handleClick} />

      <div>
        <h1>
          <Link href="/">
            <a>
              <Image src="/images/logo.svg" width={435} height={185} layout="intrinsic" />
            </a>
          </Link>
        </h1>
      </div>
    </StyledHeader>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledHeader = styled.header`
  text-align: center;
  padding-top: 36px;
  width: 100%;

  .hamburger {
    position: fixed;
    left: 0px;
    top: 0px;
  }

  /* wraps logo */
  h1 {
    margin: 0 auto 20px;
    position: relative;
    max-width: 65%;
    transform: translateX(8%);

    @media (${Breakpoints.portrait}) {
      max-width: 850px;
      padding: 0 0 0 70px;
      transform: translateX(0);
    }
  }

  /* A weekly podcast about... */
  h2 {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 2.4rem;
    font-weight: ${(props) => props.theme.fontBlack};
    text-align: left;
    margin: 0 auto;
    padding: 0 ${(props) => props.theme.mobilePadding} 120px ${(props) => props.theme.mobilePadding};
    position: relative;
    max-width: 100%;

    @media (${Breakpoints.portrait}) {
      font-size: 3.6rem;
      width: 710px;
    }

    a {
      color: #aaa;
      text-decoration: none;

      @media (${Breakpoints.portrait}) {
        white-space: nowrap;
      }

      &:hover {
        color: ${(props) => props.theme.yellow};
      }
    }
  }
`;

export { Header };
