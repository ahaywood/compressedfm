import styled from "styled-components";

// components
import { EpisodeGrid } from "modules/shared/components/EpisodeGrid";
import { Newsletter } from "modules/shared/components/Newsletter";
import { Podcatchers } from "modules/shared/components/Podcatchers";
import { FeaturedEpisode } from "modules/home/components/FeaturedEpisode";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import { HorizontalDivider } from "modules/shared/components/HorizontalDivider";


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const EpisodePage = ({ episodes }) => {

  // get the first element in the array to feature
  const featuredEpisode = episodes.shift();

  return (
    <StyledEpisodePage>
      {featuredEpisode && (
        <>
          <FeaturedEpisode episode={featuredEpisode} />
          <VerticalDivider />
        </>
      )}
      <EpisodeGrid episodes={episodes} />
      <VerticalDivider />
      <Podcatchers className="podcatchers" />
      <VerticalDivider />
      <Newsletter />
    </StyledEpisodePage>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledEpisodePage = styled.section`
  .podcatchers {
    margin: 50px 0;
  }
`;

export { EpisodePage }
