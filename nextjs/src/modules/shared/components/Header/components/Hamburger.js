import { useState } from "react";
import styled from "styled-components";

import { Zindex } from "styles/Zindex";

const Hamburger = ({ className, onClick, navShowing }) => {
  const [toggled, useToggled] = useState(navShowing);

  const toggle = () => {
    useToggled(!toggled);
    onClick();
  }

  return (
    <StyledHamburger className={className} onClick={toggle}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 75.41 69.03" className={toggled ? 'x' : ''}>
        <path className="top line" d="M23.79,46,46.17,23.56s11-13.77,16-6.77-9.61,8.47-11.8,8.47l-31.71.06" />
        <line className="middle line" x1="19.12" y1="34.82" x2="50.83" y2="34.76" />
        <path className="bottom line" d="M23.79,23,46.17,45.49s11,13.77,16,6.77-9.61-8.47-11.8-8.47l-31.71-.06" />
      </svg>
    </StyledHamburger>
  )
};

const StyledHamburger = styled.button`
  background: transparent;
  border: none;
  cursor: pointer;
  position: absolute;
  height: 70px;
  width: 70px;
  z-index: ${Zindex.hamburger};

  &:focus {
    outline: none;
  }

  .line {
    fill: none;
    stroke: white;
    stroke-linecap: round;
    stroke-miterlimit: 10;
    stroke-width: 2px;
  }

  &:hover .line {
    stroke: ${props => props.theme.yellow};
  }

  path {
    stroke-dasharray: 31.71 70;
    stroke-dashoffset: 33;
  }

  .top,
  .bottom {
    transition: stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .middle {
    transition: opacity 0.5s cubic-bezier(0.4, 0, 0.2, 1);
  }

  .x .line {
    stroke: ${props => props.theme.yellow};
  }

  .x .middle {
    opacity: 0;
  }

  .x .top,
  .x .bottom {
    stroke-dashoffset: 101;
  }
`;

export { Hamburger }
