import Image from "next/image";
import PropTypes from "prop-types";
import styled from "styled-components";

import { EpisodeSummary } from "./components/EpisodeSummary"
import { FullTranscript } from "./components/FullTranscript"
import { Guest } from "./components/Guest"
import { JumpLinks } from "./components/JumpLinks"
import { Links } from "./components/Links"
import { Sponsors } from "./components/Sponsors"
import { Podcatchers } from "modules/shared/components/Podcatchers";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import { EpisodeGrid } from "modules/shared/components/EpisodeGrid";
import Newsletter from "pages/newsletter";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const IndividualEpisodePage = ({ episode: {
  audioPath,
  briefDescription,
  categories,
  episodeCover,
  episodeNumber,
  guests,
  linkList,
  publishedAt,
  sponsors,
  timeJump,
  title,
  transcript
} }) => {
  return (
    <StyledIndividualEpisodePage>
      <EpisodeSummary title briefDescription episodeNumber />

      <div>
        <main>
          <Guest />

          <div>
            <JumpLinks />
            <Links />
          </div>

          <FullTranscript />
        </main>

        <aside className="sponsor-list">
          <Sponsors />
        </aside>
      </div>
      <VerticalDivider />

      <Podcatchers />
      <VerticalDivider />

      <EpisodeGrid />
      <VerticalDivider />

      <Newsletter />

    </StyledIndividualEpisodePage>
  )
}

// IndividualEpisodePage.propTypes = {
//   episode: PropTypes.shape({
//     audioPath,
//   briefDescription,
//   categories,
//   episodeCover,
//   guests,
//   linkList,
//   publishedAt,
//   sponsors,
//   timeJump,
//   title,
//   transcript
//   })
// };

// IndividualEpisodePage.defaultProps = {
//   episode: {
//     audioPath,
//     briefDescription,
//     categories,
//     episodeCover,
//     guests,
//     linkList,
//     publishedAt,
//     sponsors,
//     timeJump,
//     title,
//     transcript
//   }
// };

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledIndividualEpisodePage = styled.section`

`;

export { IndividualEpisodePage }
