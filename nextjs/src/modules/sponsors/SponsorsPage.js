import { Podcatchers } from "modules/shared/components/Podcatchers";
import { VerticalDivider } from "modules/shared/components/VerticalDivider";
import styled from "styled-components";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorsPage = () => {
  return (
    <StyledSponsorsPage>
      <Podcatchers />
      <VerticalDivider />

      <SponsorGrid header="Founding Sponsors" />

      <VerticalDivider />
      <SponsorGrid header="Sponsors" />

    </StyledSponsorsPage>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorsPage = styled.section`

`;

export { SponsorsPage }
