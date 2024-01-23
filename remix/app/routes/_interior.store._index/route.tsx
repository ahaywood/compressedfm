import type { LoaderArgs } from '@remix-run/node';
import { useLoaderData } from '@remix-run/react';
import { getClient } from '~/lib/sanity';
import { StoreQuery } from '~/queries/Queries';
import StoreThumbnail from './StoreThumbnail';
import { VerticalDivider } from '~/components/VerticalDivider';

export const loader = async ({ params }: LoaderArgs) => {
  const store = await getClient().fetch(StoreQuery);
  return { store };
};

export default function Store() {
  const { store } = useLoaderData();

  return (
    <div className="grid grid-cols-12 gap-x-5 my-[120px] mx-auto gap-y-12">
      <div className="col-span-12 text-center">
        <h1 className="page-title mb-10">Swag Store</h1>
        <h2 className="uppercase italic font-mono text-2xl mb-12">TShirts</h2>
      </div>
      {store.map((item: Swag) => {
        if (item.category === 'hoodies') return <></>;
        return (
          <div className="col-span-3" key={item._id}>
            <StoreThumbnail
              alt={item.title}
              image={item.image}
              link={item.slug.current}
              price={item.price}
              slug={item.slug.current}
            />
          </div>
        );
      })}
      <div className="col-span-12 text-center">
        <VerticalDivider />
        <h2 className="uppercase italic font-mono text-2xl mb-12">Hoodies</h2>
      </div>
      {/* spacer so that the first hoodie is on the second column */}
      <div className="col-span-3" />{' '}
      {store.map((item: Swag) => {
        if (item.category === 'tshirts') return <></>;
        return (
          <div className="col-span-3" key={item._id}>
            <StoreThumbnail
              alt={item.title}
              image={item.image}
              link={`/store/${item.slug}`}
              price={item.price}
              slug={item.slug.current}
            />
          </div>
        );
      })}
    </div>
  );
}
