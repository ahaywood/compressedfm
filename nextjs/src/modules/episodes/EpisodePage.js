import styled from "styled-components";

// components
import { EpisodeGrid } from "modules/shared/components/EpisodeGrid";
import { Newsletter } from "modules/shared/components/Newsletter";
import { Podcatchers } from "modules/shared/components/Podcatchers";
import { FeaturedEpisode } from "modules/home/components/FeaturedEpisode";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const EpisodePage = ({ episodes }) => {

  // get the first element in the array to feature
  const featuredEpisode = episodes.shift();

  return (
    <StyledEpisodePage>
      <Podcatchers />
      {featuredEpisode && (
        <>
          <FeaturedEpisode episode={featuredEpisode} />
          <VerticalDivider />
        </>
      )}
      <FeaturedEpisode episode={featuredEpisode} />
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
