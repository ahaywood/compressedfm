import { useEffect, useState } from 'react';
import client from 'utils/client';
import groq from 'groq';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsorDashboardPage } from 'modules/sponsorDashboard';
import { useUser } from '@auth0/nextjs-auth0';
import { withPageAuthRequired } from '@auth0/nextjs-auth0';

export default function sponsor({ sponsor }) {
    const { user } = useUser();

    return (
        <InteriorLayout>
            <SponsorDashboardPage sponsor={sponsor} />
        </InteriorLayout>
    );
}

const query = groq`*[_type == "sponsor" && associatedEmails match $email] {
  title,
  logo,
  offer,
  offerLink,
  offerLink,
  about,
  founding,
  contractsInvoices[]
}[0]`;

export const getServerSideProps = withPageAuthRequired({
    async getServerSideProps({ req, res }) {
        const { user } = getSession(req, res);
        const sponsor = await client.fetch(query, { email });
        //TODO: what if we don't find the sponsor?
        return { props: { sponsor, user } };
    },
});
