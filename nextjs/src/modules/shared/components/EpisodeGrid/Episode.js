import Link from "next/link";
import styled from "styled-components";

// utilities
import { Constants } from "utils/constants";
import { EpisodeZeros } from "utils/EpisodeZeros";

// components
import { Icon } from "../Icon";
import { MoreLink } from "../MoreLink";

// utilities
import { formatLongDate } from "utils/dateHelpers"

// styles
import { Breakpoints } from "styles/Breakpoints";
import { MixinBodyCopy } from "styles/Typography";


const Episode = ({ className, episode: { publishedAt, briefDescription, episodeNumber, slug, title } }) => {
  return (
    <StyledEpisode className={className}>
      <div className="episode-number__wrapper">
        <span className="episode">Episode</span>
        <span className="episode-number">
          {EpisodeZeros(episodeNumber)}
          {episodeNumber}
        </span>
      </div>
      <h2><Link href={`/episode/${slug.current}`}><a>{title}</a></Link></h2>
      <h4>{formatLongDate(publishedAt)}</h4>
      <p>{briefDescription}</p>
      <MoreLink href={`/episode/${slug.current}`} />
    </StyledEpisode>
  )
}

const StyledEpisode = styled.article`
  margin: 0 0 75px 0;
  padding: 20px ${props => props.theme.mobilePadding} 60px;

  @media (${Breakpoints.portrait}) {
    background: url('/images/vertical-divider.svg') right top repeat-y;
    padding: 20px 30px 60px;
  }

  .episode-number__wrapper {
    align-items: center;
    display: flex;

    .episode {
      color: ${props => props.theme.white};
      font-family: ${props => props.theme.mono};
      font-size: 1.8rem;
      letter-spacing: 0.4rem;
      margin-right: 4px;
      position: relative;
      text-transform: uppercase;
      top: 8px;
    }

    .episode-number {
      color: ${props => props.theme.yellow};
      font-size: 13.2rem;
      font-weight: ${props => props.theme.fontBlack};
      line-height: 1;
    }
  }

  /* episode title */
  h2 {
    font-family: ${props => props.theme.sansSerif};
    font-size: 4.8rem;
    font-weight: ${props => props.theme.fontBlack};
    line-height: 1;
    margin: 0 0 20px 0;
    padding: 0;

    a {
      color: ${props => props.theme.white};
      text-decoration: none;

      &:hover {
        color: ${props => props.theme.lavendarIndigo};
      }
    }
  }

  /* date */
  h4 {
    font-family: ${props => props.theme.mono};
    font-size: 1.8rem;
    font-style: italic;
    margin: 0 0 15px 0;
    padding: 0;
  }

  p {
    ${MixinBodyCopy};
    margin-bottom: 20px;
  }
`;

export { Episode }
