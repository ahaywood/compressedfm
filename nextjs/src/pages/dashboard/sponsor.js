import { useEffect, useState } from 'react';
import client from 'utils/client';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsorDashboardPage } from 'modules/sponsorDashboard';
import { useUser, getSession } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';
import Custom403 from '../403';
import { sponsorQuery } from 'utils/queries';

export default function sponsor({ sponsor }) {
    if (!sponsor) return <Custom403 />;

    return (
        <InteriorLayout>
            <SponsorDashboardPage sponsor={sponsor} />
        </InteriorLayout>
    );
}

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps({ req, res }) {
        const { user } = getSession(req, res);
        const { email } = user;
        const sponsor = await client.fetch(sponsorQuery, { email });
        return { props: { sponsor, user } };
    },
});
