import styled from "styled-components";
import { EpisodeZeros } from "utils/EpisodeZeros";
import { Arrow } from "modules/shared/components/icon";

const Episode = ({ episodeNumber }) => {
  return (
    <StyledEpisode>
      <div className="episode-number__wrapper">
        <span className="episode-number">{EpisodeZeros(episodeNumber)}<EpisodeZeros number={episodeNumber} />{episodeNumber}</span>
      </div>
      <h2>CSS Typography and Systems</h2>
      <h4>March 17, 2021</h4>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      <Link href="/login">
        MORE
        <Icon name="arrow" />
      </Link>
    </StyledEpisode>
  )
}

const StyledEpisode = styled.article`

`;

export { Episode }
