import PropTypes from 'prop-types';
import { useState } from 'react';
import styled from 'styled-components';
import { find, sumBy } from 'lodash';

// styles
import { MixinSectionHeading, MixinPageTitle } from 'styles/Typography';

// utils
import { numberWithCommas } from 'utils/numberHelpers';

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
  const { _id, title, logo, contractsInvoices, episodes } = sponsor;
  const [currentlyPlaying, setCurrentlyPlaying] = useState();

  // console.log(sponsor);

  const handleMultipleAudioPlayers = (id) => {
    setCurrentlyPlaying(id);
  };

  const totalDownloads = sumBy(sponsor.episodes, (episode) =>
    episode?.episodeStats?.stats?.downloads ? episode.episodeStats.stats.downloads : 0
  );
  const totalListens = sumBy(sponsor.episodes, (episode) =>
    episode?.episodeStats?.stats?.listens ? episode.episodeStats.stats.listens : 0
  );

  const GetAdSpot = (sponsorWithTimeCodes) => find(sponsorWithTimeCodes, (one) => one.sponsor._id === _id);

  return (
    <StyledSponsorDashboardPage>
      <h1>Thanks for Sponsoring!</h1>
      <div className="logo">
        <img src={logo} alt={title} />
      </div>

      <div className="box-grid">
        <TotalBlock number={numberWithCommas(totalListens)} label="Total Listens" />
        <TotalBlock number={numberWithCommas(totalDownloads)} label="Total Downloads" />
        <div className="button-link-wrapper">
          <ButtonLink label="Sponsor Again" href="/sponsor-application" />
        </div>
      </div>

      <VerticalDivider />

      {/* contracts & invoices */}
      {contractsInvoices && (
        <div className="contracts-invoices">
          <div className="contract-list">
            <div className="contracts-invoices__header">Contracts</div>
            {contractsInvoices.map((contract) => (
              <ContractItem key={`contract${contract._key}`} contract={contract} />
            ))}
          </div>

          <div className="invoice-list">
            <div className="contracts-invoices__header">Invoices</div>
            {contractsInvoices.map((invoice) => (
              <InvoiceItem key={`invoice${invoice._key}`} invoice={invoice} />
            ))}
          </div>
        </div>
      )}

      <VerticalDivider />

      <div className="heading-wrapper">
        <h2 className="heading">Episodes You've Sponsored</h2>
      </div>

      {/* PLAYERS */}
      {episodes &&
        episodes.map((episode, index) => {
          console.log(episode.sponsorWithTimecode);
          const chapters = GetAdSpot(episode.sponsorWithTimecode);
          console.log({ chapters });
          return (
            <SponsorAudioPlayer
              chapters={chapters}
              currentlyPlaying={currentlyPlaying}
              date={episode.publishedAt}
              downloads={
                episode?.episodeStats?.stats?.downloads &&
                numberWithCommas(Number(episode.episodeStats.stats.downloads))
              }
              episodeNumber={episode.episodeNumber}
              handleMultipleAudioPlayers={handleMultipleAudioPlayers}
              id={episode.__id}
              key={index}
              listens={
                episode?.episodeStats?.stats?.listens && numberWithCommas(Number(episode.episodeStats.stats.listens))
              }
              title={episode.title}
              track={episode.audioPath}
            />
          );
        })}
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

  .heading-wrapper {
    margin-bottom: 60px;
    text-align: center;
    width: 100%;
  }

  .heading {
    ${MixinSectionHeading}
  }

  .logo {
    margin-bottom: 50px;
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

  .contracts-invoices__header {
    font-family: ${(props) => props.theme.mono};
    text-transform: uppercase;
    font-style: italic;
    font-size: 2.4rem;
    letter-spacing: 4px;
    margin-bottom: 20px;
  }

  .contracts-invoices {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 75px;
    max-width: ${(props) => props.theme.pageWidth};
    position: relative;
    margin: 50px auto;
  }

  .contract-list,
  .invoice-list {
    background: url('/images/horizontal-divider.svg') left bottom repeat-x;
  }
`;

export { SponsorDashboardPage };
