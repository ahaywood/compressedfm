import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { MixinBodyCopy } from "styles/Typography";
import { Icon } from "modules/shared/components/icon";
import { EpisodeZeros } from "utils/EpisodeZeros";


const FeaturedEpisode = ({ audioUrl, date, episodeNumber, hostAvatars, moreLink, title, summary }) => {
  return (
    <StyledFeaturedEpisode>
      <div className="episode-number-date__wrapper">
        <span className="episode">Episode</span>
        <span className="episode-number">{EpisodeZeros(episodeNumber)}<EpisodeZeros number={episodeNumber} />{episodeNumber}</span>
        <span className="episode-publish-date">02.13.21</span>
      </div>
      <div>
        {/* cover art */}
        <Image src="/images/podcast-cover.jpg" width={378} height={378} layout="intrinsic" />
      </div>
      <div>
        <h3>TypeScript Fundamentals</h3>
        <p>In this episode of Syntax, Scott and Wes talk about TypeScript fundamentals — what it is, how you use it, why people love it so much, and more.</p>
        <Link href="/login">
          <a className="more">
            More
            <Icon name="arrow" />
          </a>
        </Link>
        <ul className="tiny-avatars">
          <li><Image src="/images/placeholder-chris.png" height={60} width={60} alt="Chris Coyier" layout="intrinsic" /></li>
          <li><Image src="/images/james.png" height={60} width={60} alt="James Q Quick" layout="intrinsic" /></li>
          <li><Image src="/images/amy.png" height={60} width={60} alt="Amy Dutton" layout="intrinsic" /></li>
        </ul>
      </div>
    </StyledFeaturedEpisode>
  )
}

const StyledFeaturedEpisode = styled.section`
  margin: 0 auto;
  max-width: ${props => props.theme.pageWidth};
  position: relative;

  .episode-number-date__wrapper {
    align-items: center;
    display: flex;
    justify-content: center;
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

  .zeros {
    color: transparent;
    -webkit-text-stroke: 1px ${props => props.theme.yellow};
  }

  /* episode title */
  h3 {
    color: ${props => props.theme.white};
    font-family: ${props => props.theme.sansSerif};
    font-size: 8.5rem;
    font-weight: ${props => props.theme.fontBlack};
    margin: 0 0 36px 0;
    padding: 0;
  }

  /* description */
  p {
    ${MixinBodyCopy};
  }

  a.more {
    color: ${props => props.theme.yellow};
    font-family: ${props => props.theme.mono};
    font-size: 1.8rem;
    letter-spacing: 4px;
    text-transform: uppercase;
    text-decoration: none;

    svg {
      position: relative;
      top: 10px;
    }

    &:hover svg {
      right:
    }
  }

  .tiny-avatars {
    display: flex;
    flex-direction: row-reverse;
    list-style-type: none;
    margin: 0;
    padding: 0;

    li {
      margin-left: -10px;
    }
  }
`;

export { FeaturedEpisode }
