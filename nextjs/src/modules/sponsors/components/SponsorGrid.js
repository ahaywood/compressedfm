import styled from "styled-components";

// components
import { SponsorCard } from "./SponsorCard";

// styles
import { MixinSectionHeading } from "styles/Typography";
import { Breakpoints } from "styles/Breakpoints";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorGrid = ({ className, header }) => {
  return (
    <StyledSponsorGrid className={classname} header={header}>
      <h4>{header}</h4>
      {/* <SponsorCard /> */}
    </StyledSponsorGrid>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorGrid = styled.section`

`;

export { SponsorGrid }
