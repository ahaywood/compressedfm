import styled from "styled-components";
import { Episode } from "./Episode";

const EpisodeGrid = ({ episodes }) => {
  return (
    <StyledEpisodeGrid>
      <h3>Episode Grid</h3>
      {episodes && episodes.map(() => {
        <Episode />
      })}
    </StyledEpisodeGrid>
  )
}

const StyledEpisodeGrid = styled.section`

`;

export { EpisodeGrid }
