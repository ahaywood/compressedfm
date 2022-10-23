import styled from 'styled-components';

// utilities
import { EpisodeZeros } from 'utils/EpisodeZeros';
import { formatLongDate } from 'utils/dateHelpers';

// styles
import { Breakpoints } from 'styles/Breakpoints';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const EpisodeSummary = ({ briefDescription, className, title, episodeNumber, publishedAt }) => (
  <StyledEpisodeSummary className={className}>
    <div className="title">
      <h3>{formatLongDate(publishedAt)}</h3>
      <h1>{title}</h1>
    </div>
    <div className="episode-number">
      {EpisodeZeros(episodeNumber)}
      {episodeNumber}
    </div>
    <div className="description">
      <p className="large-body-copy">{briefDescription}</p>
    </div>
  </StyledEpisodeSummary>
);

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledEpisodeSummary = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'number'
    'title'
    'description';

  @media (${Breakpoints.portrait}) {
    grid-column-gap: 50px;
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'title number'
      'title description';
  }

  .title {
    grid-area: title;
    padding: 0 ${(props) => props.theme.mobilePadding};

    @media (${Breakpoints.portrait}) {
      padding: 0 0 0 ${(props) => props.theme.mobilePadding};
    }

    @media (${Breakpoints.regular}) {
      padding: 0;
    }
  }

  /* episode date */
  h3 {
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    font-weight: ${(props) => props.theme.fontNormal};
    letter-spacing: 0.4rem;
    margin: 0;
    padding: 75px 0 0 0;
    text-transform: uppercase;

    @media (${Breakpoints.portrait}) {
      padding: 0;
    }
  }

  /* episode title */
  h1 {
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 6rem;
    font-weight: ${(props) => props.theme.fontBlack};
    line-height: 1;
    margin: 0;
    padding: 0;
    position: relative;
    z-index: 3;

    @media (${Breakpoints.portrait}) {
      font-size: 8.5rem;
    }
  }

  .description {
    grid-area: description;
    position: relative;
    padding: 0 ${(props) => props.theme.mobilePadding};

    @media (${Breakpoints.portrait}) {
      padding: 0;
    }
  }

  .episode-number {
    color: ${(props) => props.theme.yellow};
    grid-area: number;
    font-family: ${(props) => props.theme.sansSerif};
    font-weight: ${(props) => props.theme.fontBlack};
    font-size: 20rem;
    position: absolute;
    right: 0;
    top: -75px;
    z-index: 1;

    @media (${Breakpoints.portrait}) {
      top: -175px;
    }
  }

  .large-body-copy {
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 2.8rem;
    font-weight: ${(props) => props.theme.fontBold};
    margin: 0;
    padding: 25px 0 0 0;

    @media (${Breakpoints.portrait}) {
      padding: 75px ${(props) => props.theme.mobilePadding} 0 0;
    }

    @media (${Breakpoints.regular}) {
      padding: 75px 0 0 0;
    }
  }
`;

export { EpisodeSummary };
