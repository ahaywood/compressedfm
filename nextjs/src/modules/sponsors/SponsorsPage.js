import PropTypes from 'prop-types';
import styled from 'styled-components';

// components
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import { SponsorGrid } from './components/SponsorGrid';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorsPage = ({ sponsors }) => {
  const foundingSponsors = sponsors.filter((sponsor) => sponsor.founding);
  const remainingSponsors = sponsors.filter((sponsor) => !sponsor.founding);

  return (
    <StyledSponsorsPage>
      <SponsorGrid header="Founding Sponsors" sponsors={foundingSponsors} />

      {remainingSponsors && remainingSponsors.length > 0 && (
        <>
          <VerticalDivider />
          <SponsorGrid header="Sponsors" sponsors={remainingSponsors} />
        </>
      )}
    </StyledSponsorsPage>
  );
};

SponsorsPage.propTypes = {
  sponsors: PropTypes.array,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorsPage = styled.section``;

export { SponsorsPage };
