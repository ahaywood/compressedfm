import client from 'utils/client';
import { InteriorLayout } from 'modules/shared/layouts/InteriorLayout';
import { SponsorDashboardPage } from 'modules/sponsorDashboard';
import { useUser, getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import { sponsorQuery } from 'utils/queries';
import { getStatsForEpisodes } from 'utils/simpleCast';
import CustomError from '../customError';

export default function sponsor({ sponsor, error = null }) {
  if (error) {
    return <CustomError status={500} text={error} />;
  }
  if (!sponsor) {
    return <CustomError status={403} text="You don't have access to this page" />;
  }
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
    try {
      const episodeIds = sponsor.episodes.map((episode) => episode.simplecastId);
      const stats = await getStatsForEpisodes(episodeIds);
      for (let i = 0; i < sponsor.episodes.length; i++) {
        sponsor.episodes[i].downloads = stats[i].downloads;
        sponsor.episodes[i].listens = stats[i].listens;
      }
      return { props: { sponsor, user } };
    } catch (err) {
      console.error(err);
      return {
        props: { error: 'Failed to retrieve episode statistics' },
      };
    }
  },
});
