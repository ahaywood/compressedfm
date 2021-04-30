import PropTypes from 'prop-types';
import styled from 'styled-components';

// styles
import { MixinHeadingWithHorizontalLines } from 'styles/Typography';
import { Breakpoints } from 'styles/Breakpoints';

// components
import { SponsorCard } from './SponsorCard';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorGrid = ({ className, header, sponsors }) => (
  <StyledSponsorGrid className={className} header={header}>
    <div className="page-title__wrapper">
      <h1>{header}</h1>
    </div>

    <div className="sponsor-grid">
      {sponsors && sponsors.map((sponsor) => <SponsorCard sponsor={sponsor} key={sponsor._id} />)}
    </div>
  </StyledSponsorGrid>
);

SponsorGrid.propTypes = {
  className: PropTypes.string,
  header: PropTypes.string,
  sponsors: PropTypes.array.isRequired,
};

SponsorGrid.defaultProps = {
  className: '',
  header: '',
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorGrid = styled.section`
  ${MixinHeadingWithHorizontalLines}

  .sponsor-grid {
    display: grid;
    grid-template-columns: 1fr;
    margin: 40px auto 70px;
    max-width: ${(props) => props.theme.pageWidth};
    padding: 0 ${(props) => props.theme.mobilePadding};
    position: relative;
    column-gap: 80px;

    @media (${Breakpoints.portrait}) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (${Breakpoints.regular}) {
      padding: 0;
    }
  }
`;

export { SponsorGrid };
