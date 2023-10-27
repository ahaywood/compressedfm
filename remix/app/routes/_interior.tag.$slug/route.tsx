import { redirect, type LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { EpisodeGrid } from '~/components/EpisodeGrid/EpisodeGrid';
import { Newsletter } from '~/components/Newsletter';
import { VerticalDivider } from '~/components/VerticalDivider';
import { getClient } from '~/lib/sanity';
import { TagQuery } from '~/queries/Queries';

export const loader = async ({ params }: LoaderArgs) => {
  const slug = params.slug;
  const sanityClient = getClient();
  const content = await sanityClient.fetch(TagQuery, { slug });
  //Todo: do we have a preferred solution for a page that doesn't exist?
  if (!content) return redirect('/');

  return { content, slug };
};

export default function Tag() {
  const { content } = useLoaderData();

  const { title, episodes } = content;

  return (
    <div>
      <h3 className="text-center text-2xl italic uppercase">Tagged</h3>
      {title && (
        <h1 className="text-white text-center font-sans text-[60px] md:text-[85px] font-black leading-none m-0 p-0 relative z-episodeTitle">
          {title}
        </h1>
      )}
      {episodes ? (
        <EpisodeGrid episodes={episodes} header={''} />
      ) : (
        <p>
          <em>No Episodes Found</em>
        </p>
      )}
      <VerticalDivider />
      <Newsletter />
    </div>
  );
}
