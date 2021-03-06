import PropTypes from 'prop-types';
import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { useUser } from '@auth0/nextjs-auth0';

// styles
import { MixinHeading, MixinPageTitle } from 'styles/Typography';

// components
import { SponsorAudioPlayer } from 'modules/shared/components/AudioPlayer/SponsorAudioPlayer';
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import { ButtonLink } from 'modules/shared/components/ButtonLink';
import { TotalBlock } from './components/TotalBlock';
import { ContractItem } from './components/ContractItem';
import { InvoiceItem } from './components/InvoiceItem';

/** -------------------------------------------------
* COMPONENT
---------------------------------------------------- */
const SponsorDashboardPage = ({ sponsor }) => {
  const [currentlyPlaying, setCurrentlyPlaying] = useState();
  const { user } = useUser();

  const handleMultipleAudioPlayers = (id) => {
    setCurrentlyPlaying(id);
  };

  const totalDownloads = sponsor.episodes.reduce((acc, episode) => acc + episode.downloads, 0);

  const totalListens = sponsor.episodes.reduce((acc, episode) => acc + episode.listens, 0);

  return (
    <StyledSponsorDashboardPage>
      <h1>Thanks for Sponsoring!</h1>
      <div className="logo">
        <img src={sponsor.logo} alt={sponsor.title} />
      </div>

      <div className="box-grid">
        <TotalBlock number={totalListens} label="Total Listens" />
        <TotalBlock number={totalDownloads} label="Total Downloads" />
        <div className="button-link-wrapper">
          <ButtonLink label="Sponsor Again" href="/sponsor-application" />
        </div>
      </div>

      <VerticalDivider />

      {/* contracts & invoices */}
      <div className="contract-list">
        <div className="contracts-invoices__header">Contracts</div>
        {/* <InvoiceItem invoice={invoice} /> */}
      </div>

      <div className="invoice-list">
        <div className="contracts-invoices__header">Invoices</div>
        {/* <ContractItem contract={contract} /> */}
      </div>

      <VerticalDivider />

      <h2 className="heading">Episodes You've Sponsored</h2>

      {/* PLAYERS */}
      <SponsorAudioPlayer
        id="1"
        currentlyPlaying={currentlyPlaying}
        handleMultipleAudioPlayers={handleMultipleAudioPlayers}
      />
      <SponsorAudioPlayer
        id="2"
        currentlyPlaying={currentlyPlaying}
        handleMultipleAudioPlayers={handleMultipleAudioPlayers}
      />
      <SponsorAudioPlayer
        id="3"
        currentlyPlaying={currentlyPlaying}
        handleMultipleAudioPlayers={handleMultipleAudioPlayers}
      />
    </StyledSponsorDashboardPage>
  );
};

SponsorDashboardPage.propTypes = {
  sponsor: PropTypes.shape({
    about: PropTypes.string,
    contractsInvoices: PropTypes.array,
    episodes: PropTypes.array,
    founding: PropTypes.bool,
    logo: PropTypes.string,
    offer: PropTypes.string,
    offerLink: PropTypes.string,
    title: PropTypes.string,
  }).isRequired,
};

/** -------------------------------------------------
* STYLES
---------------------------------------------------- */
const StyledSponsorDashboardPage = styled.section`
  h1 {
    ${MixinPageTitle};
  }

  .heading {
    ${MixinHeading}
  }

  .logo {
    margin-bottom: 100px;
    text-align: center;

    img {
      max-width: 100%;
      position: relative;
      top: -25px;
      width: 250px;
    }
  }

  .box-grid {
    align-items: center;
    max-width: ${(props) => props.theme.pageWidth};
    margin: 0 auto 35px;
    justify-content: center;
    position: relative;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 50px;
  }

  .button-link-wrapper {
    max-width: 85%;
  }
`;

export { SponsorDashboardPage };
