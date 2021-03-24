import Image from "next/image";
import styled from "styled-components";

// components
import { EpisodeGrid } from "modules/shared/components/EpisodeGrid";
import { FeaturedEpisode } from "./components/FeaturedEpisode";
import { Newsletter } from "modules/shared/components/Newsletter";
import { Podcatchers } from "../shared/components/Podcatchers";
import { TheHosts } from "./components/TheHosts";
import { VerticalDivider } from "../shared/components/VerticalDivider";

// styles
import { Breakpoints } from "styles/Breakpoints";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const HomePage = ({ episodes }) => {

  // get the first element in the array to feature
  const featuredEpisode = episodes.shift();

  return (
    <StyledHomePage>
      <Podcatchers className="podcatchers" />
      <VerticalDivider />

      {featuredEpisode && (
        <>
          <FeaturedEpisode episode={featuredEpisode} />
          <VerticalDivider />
        </>
      )}

      <TheHosts />
      <VerticalDivider />

      {episodes && (
        <>
          <EpisodeGrid header="Recent Episodes" episodes={episodes} />
          <VerticalDivider />
        </>
      )}

      <Newsletter />
    </StyledHomePage>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledHomePage = styled.div`
  .podcatchers {
    padding-bottom: 50px;
  }
`;

export { HomePage }
