import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';

// components
import { Icon } from 'modules/shared/components/Icon';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ButtonLink = ({ href, label }) => (
  <Link href={href}>
    <StyledButtonLink>
      {label}
      <Icon name="arrow" />
    </StyledButtonLink>
  </Link>
);

ButtonLink.propTypes = {
  href: PropTypes.string,
  label: PropTypes.string,
};

ButtonLink.defaultProps = {
  href: '',
  label: 'Submit',
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledButtonLink = styled.a`
  align-items: center;
  background: ${(props) => props.theme.yellow};
  border: none;
  bottom: 10px;
  color: ${(props) => props.theme.black};
  cursor: pointer;
  display: flex;
  font-family: ${(props) => props.theme.mono};
  font-size: 1.8rem;
  justify-content: center;
  left: 10px;
  margin-top: 15px;
  padding: 15px 50px 15px 70px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  transition: all 0.25s ease-in-out;
  z-index: 2;

  &:hover {
    background: ${(props) => props.theme.lavenderIndigo};
    color: ${(props) => props.theme.white};
    transform: translateX(-15px) translateY(15px);
  }

  &:before {
    border: 2px solid ${(props) => props.theme.yellow};
    content: '';
    display: block;
    height: 100%;
    left: -15px;
    position: absolute;
    top: 15px;
    transition: all 0.25s ease-in-out;
    width: 100%;
    z-index: 1;
  }

  &:hover:before {
    border-color: ${(props) => props.theme.lavenderIndigo};
    transform: translateX(13px) translateY(-17px); /* magical numbers take border into account */
  }

  svg {
    transition: right 0.25s ease-in-out;
  }
`;

export { ButtonLink };
