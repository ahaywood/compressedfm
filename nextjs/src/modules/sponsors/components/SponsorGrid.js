import styled from "styled-components";

// components
import { SponsorCard } from "./SponsorCard";

// styles
import { MixinHeadingWithHorizontalLines } from "styles/Typography";
import { Breakpoints } from "styles/Breakpoints";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorGrid = ({ className, header, sponsors }) => {
  return (
    <StyledSponsorGrid className={className} header={header}>
      <div className="page-title__wrapper">
        <h1>{header}</h1>
      </div>

      <div className="sponsor-grid">
        {sponsors && sponsors.map(sponsor => (
          <SponsorCard sponsor={sponsor} key={sponsor._id} />
        ))}
      </div>
    </StyledSponsorGrid>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorGrid = styled.section`
  ${MixinHeadingWithHorizontalLines}

  .sponsor-grid {
    display: grid;
    grid-template-columns: 1fr;
    margin: 40px auto 70px;
    max-width: ${props => props.theme.pageWidth};
    position: relative;
    column-gap: 80px;

    @media (${Breakpoints.portrait}) {
      grid-template-columns: repeat(3, 1fr);
    }
  }
`;

export { SponsorGrid }
