import styled from "styled-components";

// components
import { MoreLink } from "modules/shared/components/MoreLink";

// styles
import { MixinBodyCopy } from "styles/Typography";
import { Breakpoints } from "styles/Breakpoints";


/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorCard = ({ sponsor }) => {
  return (
    <StyledSponsorCard>
      <div className="logo-wrapper">
        <img src={sponsor.logo} alt={sponsor.title} className="logo" />
      </div>
      {sponsor?.offerLink && sponsor?.offer && (
        <MoreLink href={sponsor.offerLink} label={sponsor.offer} />
      )}
      <p>
        {sponsor.about}
      </p>
    </StyledSponsorCard>
  )
}

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorCard = styled.section`
  padding: 0 ${props => props.theme.mobilePadding};

  @media (${Breakpoints.portrait}) {
    padding: 0;
  }

  .logo-wrapper {
    display: flex;
    height: 75px;
    margin-bottom: 20px;
    justify-content: flex-start;
    align-items: flex-end;
  }

  .logo {
    margin: auto auto 0 0;
    max-width: 150px;
  }

  p {
    ${MixinBodyCopy};
    font-size: 1.6rem;
  }
`;

export { SponsorCard }
