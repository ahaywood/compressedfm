import client from 'utils/client';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsorDashboardPage } from 'modules/sponsorDashboard';
import { useUser, getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import { sponsorQuery } from 'utils/queries';
import { getStatsForEpisodes } from 'utils/simpleCast';
import CustomError from '../customError';
import { LegalQuery } from 'queries/Queries';

export default function sponsor({ error = null, footerLinks, sponsor }) {
  if (error) {
    return <CustomError status={500} text={error} />;
  }
  if (!sponsor) {
    return <CustomError status={403} text="You don't have access to this page" />;
  }
  return (
    <InteriorLayout footerLinks={footerLinks}>
      <SponsorDashboardPage sponsor={sponsor} />
    </InteriorLayout>
  );
}

export const getServerSideProps = withPageAuthRequired({
  async getServerSideProps({ req, res }) {
    // get footer links
    const footerLinks = await client.fetch(LegalQuery);

    // get page content
    const { user } = getSession(req, res);
    const { email } = user;
    const sponsor = await client.fetch(sponsorQuery, { email });
    return { props: { footerLinks, sponsor, user } };
  },
});
