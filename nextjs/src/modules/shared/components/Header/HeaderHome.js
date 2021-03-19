import { useState } from "react";
import styled from "styled-components";
import Image from "next/image";

// utilities
import { Constants } from "utils/constants";

// components
import { Navigation } from "./components/Navigation";
import { Hamburger } from "./components/Hamburger";

// styles
import { Breakpoints } from "styles/Breakpoints";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const HeaderHome = () => {
  const [navShowing, setNavShowing] = useState(false);

  const handleClick = () => {
    setNavShowing(!navShowing);
  }

  return (
    <StyledHeader>
      <Navigation isShowing={navShowing} />
      <Hamburger className="hamburger" onClick={handleClick} />

      <div>
        <h1>
          <Image src="/images/logo.svg" width={850} height={272} layout="intrinsic" />
        </h1>
        <h2>
          A weekly podcast about web design and development from{" "}
          <a href={Constants.JAMES_WEBSITE_URL} target="_blank">James Q Quick</a>{" "}
            and <a href={Constants.AMY_WEBSITE_URL} target="_blank">Amy Dutton</a>.
          </h2>
      </div>
    </StyledHeader>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledHeader = styled.header`
  text-align: center;
  padding-top: 50px;
  width: 100%;

  @media (${Breakpoints.portrait}) {
    padding-top: 110px;
  }

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
      padding: 0 0 0 140px;
      transform: translateX(0);
    }
  }

  /* A weekly podcast about... */
  h2 {
    font-family: ${props => props.theme.sansSerif};
    font-size: 2.4rem;
    font-weight: ${props => props.theme.fontBlack};
    text-align: left;
    margin: 0 auto;
    padding: 0 ${props => props.theme.mobilePadding} 120px ${props => props.theme.mobilePadding};
    position: relative;
    max-width: 100%;

    @media (${Breakpoints.portrait}) {
      font-size: 3.6rem;
      width: 710px;
    }

    a {
      color: #AAA;
      text-decoration: none;

      @media (${Breakpoints.portrait}) {
        white-space: nowrap;
      }

      &:hover {
        color: ${props => props.theme.yellow};
      }
    }
  }
`;

export { HeaderHome }
