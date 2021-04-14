import styled from "styled-components";

// components
import { MoreLink } from "modules/shared/components/MoreLink";

// styles
import { MixinBodyCopy } from "styles/Typography";

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorCard = ({ sponsor }) => {
  return (
    <StyledSponsorCard>
      <img src={sponsor.logo} alt={sponsor.title} className="logo" />
      {sponsor?.offerLink && sponsor?.offerLabel && (
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
  .logo {
    margin-bottom: 30px;
  }

  p {
    ${MixinBodyCopy};
    font-size: 1.6rem;
  }
`;

export { SponsorCard }
