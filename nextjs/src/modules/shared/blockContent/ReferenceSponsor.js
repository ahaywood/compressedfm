import styled from 'styled-components';
import PropTypes from 'prop-types';
import { MoreLink } from 'modules/shared/components/MoreLink';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const ReferenceSponsor = ({ node }) => {
  const {
    sponsor: { title, about, logo, offer, offerLink },
  } = node;
  return (
    <StyledReferenceSponsor>
      <img className="sponsor-logo" src={logo.url} alt={title} />
      <MoreLink className="more-link" href={offerLink} label={offer} />
      <p>{about}</p>
    </StyledReferenceSponsor>
  );
};

ReferenceSponsor.propTypes = {
  node: PropTypes.shape({
    sponsor: PropTypes.shape({
      title: PropTypes.string,
      about: PropTypes.string,
      logo: PropTypes.object,
      offer: PropTypes.string,
      offerLink: PropTypes.string,
    }),
  }).isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledReferenceSponsor = styled.div`
  margin-bottom: 10px;

  .sponsor-logo {
    max-width: 150px;
  }

  .more-link {
    margin-bottom: 7px;
  }
`;

export { ReferenceSponsor };
