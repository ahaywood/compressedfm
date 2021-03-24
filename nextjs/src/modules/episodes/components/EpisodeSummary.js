import styled from "styled-components";
import { MoreLink } from "modules/shared/components/MoreLink";

// utilities
import { EpisodeZeros } from "utils/EpisodeZeros";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const EpisodeSummary = ({ briefDescription, className, title, episodeNumber, publishedAt }) => {
  return (
    <StyledEpisodeSummary className={className}>
      <div className="title">
        <h3>March 21, 2021</h3>
        <h1>Starting a New Design Project</h1>
      </div>
      <div className="description">
        <div className="episode-number">
          {EpisodeZeros(episodeNumber)}
          {episodeNumber}
        </div>
        <p className="large-body-copy">
          This week, we talk about starting new design projects. This is not just about pushing pixels, but also includes the discovery process: competitor analysis, content audit, user journey, and more.
        </p>
      </div>

      <div className="audio-player">
        <iframe height="200px" width="700px" frameborder="no" scrolling="no" seamless src="https://player.simplecast.com/88284991-93d9-436a-845d-4133c01cde8a?dark=true"></iframe>
      </div>
    </StyledEpisodeSummary>
  )
}

const StyledEpisodeSummary = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 50px;

  /* episode title */
  h3 {
    font-family: ${props => props.theme.mono};
    font-size: 1.8rem;
    font-weight: ${props => props.theme.fontNormal};
    letter-spacing: 0.4rem;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
  }

  /* episode title */
  h1 {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.sansSerif};
    font-size: 8.5rem;
    font-weight: ${props => props.theme.fontBlack};
    line-height: 1;
    margin: 0;
    padding: 0;
  }

  .description {
    position: relative;
  }

  .episode-number {
    color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.sansSerif};
    font-weight: ${props => props.theme.fontBlack};
    font-size: 20rem;
    position: absolute;
    right: 0;
    top: -175px;
  }

  .large-body-copy {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.sansSerif};
    font-size: 2.8rem;
    font-weight: ${props => props.theme.fontBold};
    margin: 0;
    padding: 75px 0 0  0;
  }

  .audio-player {
    grid-column: span 2;
    margin: 60px 0;
    text-align: center;
  }

`;

export { EpisodeSummary }
