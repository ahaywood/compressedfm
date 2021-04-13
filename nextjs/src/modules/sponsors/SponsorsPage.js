import { Podcatchers } from "modules/shared/components/Podcatchers";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import { SponsorGrid } from "./components/SponsorGrid";
import styled from "styled-components";
import { SponsorAudioPlayer } from "modules/shared/components/AudioPlayer/SponsorAudioPlayer";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorsPage = ({ sponsors }) => {
  const foundingSponsors = sponsors.filter(sponsor => sponsor.founding);
  const remainingSponsors = sponsors.filter(sponsor => !sponsor.founding);

  return (
    <StyledSponsorsPage>

      <SponsorGrid header="Founding Sponsors" sponsors={foundingSponsors} />

      {(remainingSponsors && remainingSponsors.length > 0) && (
        <>
          <VerticalDivider />
          <SponsorGrid header="Sponsors" sponsors={remainingSponsors} />
        </>
      )}

    </StyledSponsorsPage>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorsPage = styled.section`

`;

export { SponsorsPage }


/** -------------------------------------------------
* QUERIES
---------------------------------------------------- */





