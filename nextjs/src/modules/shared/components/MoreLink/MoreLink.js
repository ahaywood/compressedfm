import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { Icon } from 'modules/shared/components/Icon';

const MoreLink = ({ className, href, label }) => (
  <StyledMoreLink className={className}>
    <Link href={href}>
      {label}
      <Icon name="arrow" />
    </Link>
  </StyledMoreLink>
);

const StyledMoreLink = styled.div`
  a {
    color: ${(props) => props.theme.yellow};
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-decoration: none;

    &:hover {
      color: ${(props) => props.theme.white};
    }

    svg {
      position: relative;
      left: -5px;
      top: 10px;
      transition: transform 0.25s ease-in-out;
    }

    &:hover svg {
      transform: translateX(10px);
    }
  }
`;

MoreLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string.isRequired,
  label: PropTypes.string,
};

MoreLink.defaultProps = {
  className: '',
  label: 'More',
};

export { MoreLink };
