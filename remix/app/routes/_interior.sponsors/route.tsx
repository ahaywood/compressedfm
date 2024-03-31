import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { VerticalDivider } from '~/components/VerticalDivider';
import { getClient } from '~/lib/sanity';
import { SponsorsQuery } from '~/queries/Queries';
import { SponsorGrid } from './SponsorGrid';

export const loader = async ({ params }: LoaderArgs) => {
  const sponsors = await getClient().fetch(SponsorsQuery);
  return { sponsors };
};

export default function Sponsors() {
  const { sponsors } = useLoaderData();
  const foundingSponsors = sponsors.filter((sponsor: Sponsor) => sponsor.founding);
  const remainingSponsors = sponsors.filter((sponsor: Sponsor) => !sponsor.founding);

  return (
    <div>
      <SponsorGrid header="Founding Sponsors" sponsors={foundingSponsors} />

      {remainingSponsors && remainingSponsors.length > 0 && (
        <>
          <VerticalDivider />
          <SponsorGrid header="Sponsors" sponsors={remainingSponsors} />
        </>
      )}
    </div>
  );
}
