import styled from "styled-components";
import Image from "next/image";

// utilities
import { Constants } from "utils/constants";

// styles
import { Breakpoints } from "styles/Breakpoints";


const Podcatchers = ({ className }) => {
  return (
    <StyledPodcatcher className={className}>
      <h3>SUBSCRIBE ON YOUR PODCATCHER OF CHOICE</h3>
      <ul>
        {/* ITUNES */}
        <li>
          <a href="{Constants.ITUNES_URL}" target="_blank">
            <Image src="/images/itunes@2x.png" alt="iTunes" width={146} height={46} />
          </a>
        </li>

        {/* GOOGLE PODCASTS */}
        <li>
          <a href={Constants.GOOGLE_URL} target="_blank">
            <Image src="/images/google-podcasts@2x.png" alt="Google Podcasts" width={187} height={38} />
          </a>
        </li>

        {/* SPOTIFY */}
        <li>
          <a href={Constants.SPOTIFY_URL} target="_blank">
            <Image src="/images/spotify@2x.png" alt="Spotify" width={135} height={47} />
          </a>
        </li>

        {/* STITCHER */}
        <li>
          <a href={Constants.STITCHER_URL} target="_blank">
            <Image src="/images/stitcher@2x.png" alt="Sitcher" width={95} height={50} />
          </a>
        </li>

        {/* CASTBOX */}
        <li>
          <a href={Constants.CASTBOX_URL} target="_blank">
            <Image src="/images/castbox@2x.png" alt="Listen on Castbox" width={158} height={56} />
          </a>
        </li>

        {/* POCKET CASTS */}
        <li>
          <a href={Constants.POCKET_CASTS_URL} target="_blank">
            <Image src="/images/pocket-casts@2x.png" alt="Listen on Pocket Casts" width={180} height={44} />
          </a>
        </li>

      </ul>
    </StyledPodcatcher>
  )
}

const StyledPodcatcher = styled.section`
  text-align: center;

  h3 {
    font-family: ${props => props.theme.mono};
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

export { Podcatchers }
