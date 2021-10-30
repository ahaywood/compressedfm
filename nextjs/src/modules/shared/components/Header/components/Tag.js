/* eslint-disable jsx-a11y/no-static-element-interactions */
import PropTypes from 'prop-types';
import Link from 'next/link';
import styled from 'styled-components';
import { slugify } from 'utils/slugify';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Tag = ({ handleClick, name }) => (
  <StyledTag>
    <Link href={`/tag/${slugify(name)}`}>
      <a onClick={handleClick}>{name}</a>
    </Link>
  </StyledTag>
);

Tag.propTypes = {
  handleClick: PropTypes.func,
  name: PropTypes.string.isRequired,
};

Tag.defaultProps = {
  // eslint-disable-next-line prettier/prettier
  handleClick: () => { },
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledTag = styled.div`
  font-size: 1.8rem;
  font-weight: ${(props) => props.theme.fontBlack};

  a {
    background: ${(props) => props.theme.darkJungleGreen};
    border-radius: 3px;
    color: ${(props) => props.theme.lightGray};
    display: inline-block;
    margin: 0 10px 10px 0;
    padding: 5px 10px;
    text-decoration: none;

    &:hover {
      background: ${(props) => props.theme.lavenderIndigo};
      color: ${(props) => props.theme.yellow};
    }
  }
`;

export { Tag };
