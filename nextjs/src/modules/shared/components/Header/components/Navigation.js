import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import client from 'utils/client';
import groq from 'groq';
import styled from 'styled-components';

// components
import { Breakpoints } from 'styles/Breakpoints';
import { Tag } from './Tag';
import { TopNav } from './TopNav';
import { SearchForm } from './SearchForm';
import { BtmNav } from './BtmNav';

// styles

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Navigation = ({ handleClick, isShowing }) => {
  const [tags, setTags] = useState();

  // GET TAGS
  useEffect(() => {
    const query = groq`*[_type == "category"] {_id, title, slug}`;
    client.fetch(query).then((res) => setTags(res));
  }, []);

  return (
    <StyledNavigation className={isShowing ? 'showing' : ''}>
      <div className="main-nav">
        <TopNav />
      </div>

      <div className="sub-nav">
        <BtmNav />
      </div>

      <div className="search">
        <SearchForm />

        <h3>Tags</h3>
        <ul className="tag-list">
          {tags &&
            tags.map((tag) => (
              <li key={tag._id}>
                <Tag name={tag.title} handleClick={handleClick} />
              </li>
            ))}
        </ul>
      </div>
    </StyledNavigation>
  );
};

Navigation.propTypes = {
  closeNav: PropTypes.func,
  isShowing: PropTypes.bool,
  handleClick: PropTypes.func,
};

Navigation.defaultProps = {
  closeNav: () => { },
  isShowing: false,
  // eslint-disable-next-line prettier/prettier
  handleClick: () => { },
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledNavigation = styled.div`
  --container-padding: 48px ${(props) => props.theme.mobilePadding};

  @media (${Breakpoints.portrait}) {
    --container-padding: 110px;
  }

  background: ${(props) => props.theme.bastille};
  display: grid;
  grid-template-columns: 1fr 2fr;
  grid-template-rows: auto auto;
  grid-template-areas:
    'main search'
    'sub search';
  height: 100vh;
  left: 0;
  position: fixed;
  bottom: 200vh;
  transition: bottom 0.5s ease-in-out;
  right: 0;
  width: 100vw;
  z-index: 100;

  /* nav showing */
  &.showing {
    bottom: 0;
  }

  .main-nav {
    background: ${(props) => props.theme.bastille};
    grid-area: main;
    padding: var(--container-padding);
    padding-bottom: 0;
    text-align: left;
  }

  .sub-nav {
    align-self: flex-end;
    background: ${(props) => props.theme.bastille};
    grid-area: sub;
    padding: var(--container-padding);
    padding-top: 0;
    text-align: left;
  }

  .search {
    background: ${(props) => props.theme.charcoal};
    display: none;
    grid-area: search;
    padding: var(--container-padding);
    text-align: left;

    @media (${Breakpoints.medium}) {
      display: block;
    }
  }

  h3 {
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.sansSerif};
    font-weight: ${(props) => props.theme.fontMedium};
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
