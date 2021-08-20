import Image from 'next/image';
import styled from 'styled-components';

// components
import { EpisodeGrid } from 'modules/shared/components/EpisodeGrid';
import { Newsletter } from 'modules/shared/components/Newsletter';
import { Podcatchers } from 'modules/shared/components/Podcatchers';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';

// styles
import { Breakpoints } from 'styles/Breakpoints';
import { TheHosts } from './components/TheHosts';
import { FeaturedEpisode } from './components/FeaturedEpisode';

// types
import { Episode } from 'pages';

interface Props {
  episodes: Episode[]
}

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const HomePage = ({ episodes }: Props) => {
  // get the first element in the array to feature
  const featuredEpisode = episodes[0];
  const remainingEpisodes = episodes.slice(1)

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
          <EpisodeGrid header="Recent Episodes" episodes={remainingEpisodes} />
          <VerticalDivider />
        </>
      )}

      <Newsletter />
    </StyledHomePage>
  );
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledHomePage = styled.div`
  .podcatchers {
    padding-bottom: 50px;
  }
`;

export { HomePage };
