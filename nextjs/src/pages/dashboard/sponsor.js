import { useEffect, useState } from 'react';
import client from 'utils/client';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsorDashboardPage } from 'modules/sponsorDashboard';
import { useUser, getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import { sponsorQuery } from 'utils/queries';
import { getStatsForEpisodes } from 'utils/simpleCast';
import Custom403 from '../403';

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
    const stats = await getStatsForEpisodes(['d40a26eb-6f44-4e30-a161-850bd2841abb']);
    console.log(stats);
    return { props: { sponsor, user } };
  },
});
