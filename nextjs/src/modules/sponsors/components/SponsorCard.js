import styled from 'styled-components';
import PropTypes from 'prop-types';
import BlockContent from '@sanity/block-content-to-react';

// components
import { MoreLink } from 'modules/shared/components/MoreLink';
import { serializers } from 'modules/shared/blockContent/Serializers';

// styles
import { MixinBodyCopy } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorCard = ({ sponsor }) => (
  <StyledSponsorCard>
    <div className="logo-wrapper">
      <img src={sponsor.logo} alt={sponsor.title} className="logo" />
    </div>
    {sponsor?.offerLink && sponsor?.offer && (
      <div className="more-link-wrapper">
        <MoreLink href={sponsor.offerLink} label={sponsor.offer} />
      </div>
    )}
    {sponsor.aboutText && <BlockContent blocks={sponsor.aboutText} serializers={serializers} />}
  </StyledSponsorCard>
);

SponsorCard.propTypes = {
  sponsor: PropTypes.shape({
    logo: PropTypes.string,
    title: PropTypes.string,
    offerLink: PropTypes.string,
    offer: PropTypes.string,
    about: PropTypes.string,
    aboutText: PropTypes.string,
  }).isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorCard = styled.section`
  padding: 0 ${(props) => props.theme.mobilePadding};

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

  .more-link-wrapper {
    margin-bottom: 20px;
  }
`;

export { SponsorCard };
