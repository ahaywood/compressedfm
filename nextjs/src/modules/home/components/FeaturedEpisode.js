import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';
import styled from 'styled-components';

// utilities
import { EpisodeZeros } from 'utils/EpisodeZeros';
import { formatShortDate } from 'utils/dateHelpers';

// components
import { MoreLink } from 'modules/shared/components/MoreLink';
import { FeaturedAudioPlayer } from 'modules/shared/components/AudioPlayer/FeaturedAudioPlayer';

// styles
import { MixinBodyCopy } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const FeaturedEpisode = ({
  episode: { audioPath, publishedAt, episodeNumber, guest, slug, title, briefDescription, cover },
}) => (
  <StyledFeaturedEpisode>
    <div className="episode-number-date__wrapper">
      <span className="episode">Episode</span>
      <span className="episode-number">
        {EpisodeZeros(episodeNumber)}
        <EpisodeZeros number={episodeNumber} />
        {episodeNumber}
      </span>
      <span className="episode-publish-date">{formatShortDate(publishedAt)}</span>
    </div>
    <div className="podcast-cover">
      {/* cover art */}
      <img src={cover || '/images/podcast-cover.jpg'} alt={title} />
    </div>
    <div className="episode-content">
      <h3>
        <Link href={`/episode/${slug.current}`}>
          <a>{title}</a>
        </Link>
      </h3>
      <p>{briefDescription}</p>
      <MoreLink href={`/episode/${slug.current}`} />
      <ul className="tiny-avatars">
        <li>
          <Image src="/images/james.png" height={60} width={60} alt="James Q Quick" layout="intrinsic" />
        </li>
        <li>
          <Image src="/images/amy.png" height={60} width={60} alt="Amy Dutton" layout="intrinsic" />
        </li>
      </ul>
    </div>
    <div className="audio-player">
      <FeaturedAudioPlayer track={audioPath} />
    </div>
  </StyledFeaturedEpisode>
);

FeaturedEpisode.propTypes = {
  episode: PropTypes.shape({
    audioPath: PropTypes.string,
    publishedAt: PropTypes.string,
    episodeNumber: PropTypes.number,
    guest: PropTypes.any,
    slug: PropTypes.object,
    title: PropTypes.string,
    briefDescription: PropTypes.string,
    cover: PropTypes.string,
  }),
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledFeaturedEpisode = styled.section`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-areas:
    'episodeNumberDate'
    'cover'
    'episodeContent'
    'player';
  margin: 0 auto;
  max-width: ${(props) => props.theme.pageWidth};
  padding: 0 ${(props) => props.theme.mobilePadding};
  position: relative;

  @media (${Breakpoints.portrait}) {
    grid-template-columns: 300px 1fr;
    grid-template-areas:
      'episodeNumberDate episodeNumberDate'
      'cover episodeContent'
      'player player';
  }

  @media (${Breakpoints.medium}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (${Breakpoints.regular}) {
    padding: 0;
  }

  .episode-number-date__wrapper {
    align-items: center;
    display: flex;
    grid-area: episodeNumberDate;
    justify-content: center;
    margin-bottom: 30px;
  }

  /* cover */
  .podcast-cover {
    display: none;
    grid-area: cover;
    text-align: right;
    padding-right: 55px;

    @media (${Breakpoints.portrait}) {
      display: block;
    }

    img {
      border: 1px solid ${(props) => props.theme.bastille};
      max-width: 400px;
      width: 100%;
    }
  }

  .episode-content {
    grid-area: episodeContent;
  }

  .episode,
  .episode-publish-date {
    color: ${(props) => props.theme.white};
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    letter-spacing: 0.2rem;
    text-transform: uppercase;
  }

  .episode-number {
    color: ${(props) => props.theme.yellow};
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 8rem;
    font-weight: ${(props) => props.theme.fontBlack};
    margin: 0 10px;

    @media (${Breakpoints.regular}) {
      font-size: 13.2rem;
    }
  }

  /* episode title */
  h3 {
    font-family: ${(props) => props.theme.sansSerif};
    font-size: 6rem;
    font-weight: ${(props) => props.theme.fontBlack};
    line-height: 0.95;
    margin: 0 0 36px 0;
    padding: 0;

    @media (${Breakpoints.portrait}) {
      font-size: 8.5rem;
    }

    a {
      color: ${(props) => props.theme.white};
      text-decoration: none;

      &:hover {
        color: ${(props) => props.theme.lavenderIndigo};
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
    grid-area: player;
  }
`;

export { FeaturedEpisode };
