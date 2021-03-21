import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

// utilities
import { EpisodeZeros } from "utils/EpisodeZeros";
import { formatShortDate } from "utils/dateHelpers";

// components
import { MoreLink } from "modules/shared/components/MoreLink";
import { FeaturedAudioPlayer } from "modules/shared/components/AudioPlayer/FeaturedAudioPlayer";

// styles
import { MixinBodyCopy } from "styles/Typography";
import { Breakpoints } from "styles/Breakpoints";


const FeaturedEpisode = ({ episode: { audioPath, publishedAt, episodeNumber, guest, slug, title, briefDescription } }) => {
  return (
    <StyledFeaturedEpisode>
      <div className="episode-number-date__wrapper">
        <span className="episode">Episode</span>
        <span className="episode-number">{EpisodeZeros(episodeNumber)}<EpisodeZeros number={episodeNumber} />{episodeNumber}</span>
        <span className="episode-publish-date">{formatShortDate(publishedAt)}</span>
      </div>
      <div className="podcast-cover">
        {/* cover art */}
        <Image src="/images/podcast-cover.jpg" width={378} height={378} layout="intrinsic" />
      </div>
      <div>
        <h3><Link href={`/episode/${slug.current}`}><a>{title}</a></Link></h3>
        <p>{briefDescription}</p>
        <MoreLink href={`/episode/${slug.current}`} />
        <ul className="tiny-avatars">
          <li><Image src="/images/james.png" height={60} width={60} alt="James Q Quick" layout="intrinsic" /></li>
          <li><Image src="/images/amy.png" height={60} width={60} alt="Amy Dutton" layout="intrinsic" /></li>
        </ul>
      </div>
      <div className="audio-player">
        <FeaturedAudioPlayer />
      </div>
    </StyledFeaturedEpisode>
  )
}

const StyledFeaturedEpisode = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  margin: 0 auto;
  max-width: ${props => props.theme.pageWidth};
  position: relative;

  @media (${Breakpoints.portrait}) {
    grid-template-columns: repeat(2, 1fr);
  }

  .episode-number-date__wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-bottom: 30px;

    @media (${Breakpoints.portrait}) {
      grid-column: span 2;
    }
  }

  .podcast-cover {
    text-align: right;
    padding-right: 55px;
  }

  .episode,
  .episode-publish-date {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.mono};
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  .episode-number {
    color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.sansSerif};
    font-size: 13.2rem;
    font-weight: ${props => props.theme.fontBlack};
    margin: 0 10px;
  }

  /* episode title */
  h3 {
    font-family: ${props => props.theme.sansSerif};
    font-size: 8.5rem;
    font-weight: ${props => props.theme.fontBlack};
    margin: 0 0 36px 0;
    padding: 0;

    a {
      color: ${props => props.theme.white};
      text-decoration: none;

      &:hover {
        color: ${props => props.theme.lavendarIndigo};
        text-decoration: none;
      }
    }
  }

  /* description */
  p {
    ${MixinBodyCopy};
  }

  .tiny-avatars {
    display: flex;
    flex-direction: row-reverse;
    list-style-type: none;
    margin: 0;
    padding: 0;
    pointer-events: none;
    position: relative;
    top: -25px;

    li {
      margin-left: -10px;
    }
  }

  .audio-player {
    grid-column: span 2;
  }
`;

export { FeaturedEpisode }
