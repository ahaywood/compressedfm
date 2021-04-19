import Link from 'next/link';
import { useState } from 'react';
import styled from 'styled-components';
import { SponsorAudioPlayer } from 'modules/shared/components/AudioPlayer/SponsorAudioPlayer';
import { FeaturedAudioPlayer } from 'modules/shared/components/AudioPlayer/FeaturedAudioPlayer';
// import { Icon } from "modules/shared/components/Icon";
import { VerticalDivider } from 'modules/shared/components/VerticalDivider';
import { MixinHeading } from 'styles/Typography';
import { useUser } from '@auth0/nextjs-auth0';

const SponsorDashboardPage = ({ sponsor }) => {
    const [currentlyPlaying, setCurrentlyPlaying] = useState();
    const { user } = useUser();
    console.log(sponsor);
    const handleMultipleAudioPlayers = (id) => {
        setCurrentlyPlaying(id);
    };

    const totalDownloads = sponsor.episodes.reduce(
        (acc, episode) => acc + episode.downloads,
        0
    );

    const totalListens = sponsor.episodes.reduce(
        (acc, episode) => acc + episode.listens,
        0
    );

    return (
        <StyledSponsorDashboardPage>
            <h1>Thanks for Sponsoring!</h1>
            <img src="" />

            <div className="box">
                <h3 className="number">{totalListens}</h3>
                <h5>Total Listens</h5>
            </div>

            <div className="box">
                <h3 className="number">{totalDownloads}</h3>
                <h5>Total Downloads</h5>
            </div>

            <div>
                <Link href="/sponsor-application">
                    <a className="button">Sponsor Again</a>
                </Link>
            </div>

            <VerticalDivider />

            {/* contracts & invoices */}
            <div className="contracts-invoices">
                <div className="contracts-invoices__header">Contracts</div>
                <div className="space"></div>
                <div className="contracts-invoices__header">Invoices</div>

                {/* contract */}
                <div className="contract-status">
                    <span>Attn</span>
                </div>
                <div className="contract-date">02.28.21</div>
                <div className="contract-quantity">3</div>
                <div className="contract-description">Bundle</div>
                <div className="contract-arrow">
                    {/* <Icon name="arrow" /> */}
                </div>

                {/* invoice */}
                <div className="invoice-status">
                    <span>Attn</span>
                </div>
                <div className="invoice-number">#0093</div>
                <div className="invoice-description">
                    3 EPISODES: 60 seconds
                </div>
                <div className="invoice amount">$150</div>
                <div className="invoice-arrow">
                    {/* <Icon name="arrow" /> */}
                </div>

                {/* contract */}
                <div className="contract-status">
                    <span>Attn</span>
                </div>
                <div className="contract-date">02.28.21</div>
                <div className="contract-quantity">3</div>
                <div className="contract-description">Bundle</div>
                <div className="contract-arrow">
                    {/* <Icon name="arrow" /> */}
                </div>

                {/* invoice */}
                <div className="invoice-status">
                    <span>Attn</span>
                </div>
                <div className="invoice-number">#0093</div>
                <div className="invoice-description">
                    3 EPISODES: 60 seconds
                </div>
                <div className="invoice amount">$150</div>
                <div className="invoice-arrow">
                    {/* <Icon name="arrow" /> */}
                </div>
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

const StyledSponsorDashboardPage = styled.section`
    .heading {
        ${MixinHeading}
    }
`;

export { SponsorDashboardPage };
