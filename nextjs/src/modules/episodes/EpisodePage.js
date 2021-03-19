import styled from "styled-components";

// components
import { EpisodeGrid } from "modules/shared/components/EpisodeGrid";
import { Newsletter } from "modules/shared/components/Newsletter";
import { Podcatchers } from "modules/shared/components/Podcatchers";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const EpisodePage = ({ episodes }) => {

  return (
    <StyledEpisodePage>
      <Podcatchers />
      <EpisodeGrid episodes={episodes} />
      <Newsletter />
    </StyledEpisodePage>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledEpisodePage = styled.section`

`;

export { EpisodePage }
