import PropTypes from 'prop-types';
import styled from 'styled-components';
import Image from 'next/image';

// utilities
import { Constants } from 'utils/constants';

// styles
import { Breakpoints } from 'styles/Breakpoints';
import Link from 'next/link';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const Podcatchers = ({ className, showHeading }) => (
  <StyledPodcatcher className={className}>
    {showHeading && <h3>SUBSCRIBE ON YOUR PODCATCHER OF CHOICE</h3>}
    <ul>
      {/* ITUNES */}
      {Constants.ITUNES_URL !== '' && (
        <li>
          <Link href={Constants.ITUNES_URL} target="_blank" rel="noreferrer">
            <Image src="/images/itunes@2x.png" alt="iTunes" width={146} height={46} />
          </Link>
        </li>
      )}

      {/* GOOGLE PODCASTS */}
      {Constants.GOOGLE_URL !== '' && (
        <li>
          <Link href={Constants.GOOGLE_URL} target="_blank" rel="noreferrer">
            <Image src="/images/google-podcasts@2x.png" alt="Google Podcasts" width={187} height={38} />
          </Link>
        </li>
      )}

      {/* SPOTIFY */}
      {Constants.SPOTIFY_URL !== '' && (
        <li>
          <Link href={Constants.SPOTIFY_URL} target="_blank" rel="noreferrer">
            <Image src="/images/spotify@2x.png" alt="Spotify" width={135} height={47} />
          </Link>
        </li>
      )}

      {/* STITCHER */}
      {Constants.STITCHER_URL !== '' && (
        <li>
          <Link href={Constants.STITCHER_URL} target="_blank" rel="noreferrer">
            <Image src="/images/stitcher@2x.png" alt="Sitcher" width={95} height={50} />
          </Link>
        </li>
      )}

      {/* CASTBOX */}
      {Constants.CASTBOX_URL !== '' && (
        <li>
          <Link href={Constants.CASTBOX_URL} target="_blank" rel="noreferrer">
            <Image src="/images/castbox@2x.png" alt="Listen on Castbox" width={158} height={56} />
          </Link>
        </li>
      )}

      {/* POCKET CASTS */}
      {Constants.POCKET_CASTS_URL !== '' && (
        <li>
          <Link href={Constants.POCKET_CASTS_URL} target="_blank" rel="noreferrer">
            <Image src="/images/pocket-casts@2x.png" alt="Listen on Pocket Casts" width={180} height={44} />
          </Link>
        </li>
      )}
    </ul>
  </StyledPodcatcher>
);

Podcatchers.propTypes = {
  className: PropTypes.string,
  showHeading: PropTypes.bool,
};

Podcatchers.defaultProps = {
  className: '',
  showHeading: true,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledPodcatcher = styled.section`
  padding: 0 ${(props) => props.theme.mobilePadding};
  text-align: center;

  @media (${Breakpoints.medium}) {
    padding: 0;
  }

  h3 {
    font-family: ${(props) => props.theme.mono};
    font-size: 1.8rem;
    font-style: italic;
    letter-spacing: 4px;
    margin: 0 0 30px 0;
    padding: 0;
    text-transform: uppercase;
  }

  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    list-style-type: none;
    margin: 0 auto;
    padding: 0;
    position: relative;
    max-width: 1200px;

    li {
      justify-content: space-between;
      padding: 0 20px 20px;
    }

    @media (${Breakpoints.portrait}) {
      flex-wrap: nowrap;
    }
  }
`;

export { Podcatchers };
