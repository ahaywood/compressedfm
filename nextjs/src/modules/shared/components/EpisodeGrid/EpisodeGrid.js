import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
import { MixinSectionHeading } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';

// components
import { Episode } from './Episode';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const EpisodeGrid = ({ header, episodes }) => (
  <StyledEpisodeGrid className={header ? 'w-section-header' : 'no-section-header'}>
    {header && (
      <div className="section-heading">
        <h3>{header}</h3>
      </div>
    )}
    {episodes && episodes.map((item) => <Episode className="episode-card" key={item._id} episode={item} />)}
  </StyledEpisodeGrid>
);

EpisodeGrid.propTypes = {
  header: PropTypes.string,
  episodes: PropTypes.array,
};

EpisodeGrid.defaultProps = {
  header: '',
  episodes: [],
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledEpisodeGrid = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 60px auto;
  max-width: ${(props) => props.theme.pageWidth};

  @media (${Breakpoints.portrait}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${Breakpoints.regular}) {
    grid-template-columns: repeat(3, 1fr);
  }

  .section-heading {
    margin-bottom: 60px;
    text-align: center;
    width: 100%;

    @media (${Breakpoints.portrait}) {
      grid-column: span 3;
    }
  }

  h3 {
    ${MixinSectionHeading};
  }

  /*
    remove the dotted line for items on the end
    - The section header throws off the counting
  */
  // when we're 2-up
  &.w-section-header > .episode-card:nth-child(2n + 1),
  &.no-section-header > .episode-card:nth-child(2n) {
    @media (${Breakpoints.portrait}) {
      background: none;
    }

    @media (${Breakpoints.medium}) {
      background: url('/images/vertical-divider.svg') right top repeat-y;
    }
  }

  // when we're 3-up
  @media (${Breakpoints.regular}) {
    &.w-section-header > .episode-card:nth-child(3n + 1),
    &.no-section-header > .episode-card:nth-child(3n) {
      background: none;
    }
  }
`;

export { EpisodeGrid };
