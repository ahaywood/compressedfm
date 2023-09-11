import type { LoaderArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { getClient } from "~/lib/sanity";
import { IndividualLegalQuery } from "~/queries/Queries";
import { PortableText } from "@portabletext/react";

export const loader = async ({ params }: LoaderArgs) => {
  const slug = params.slug;
  const legal = await getClient().fetch(IndividualLegalQuery, { slug });
  return { legal };
};

export default function Legal() {
  const { legal } = useLoaderData();
  console.log({ legal });
  return (
    <div>
      <div className="page-title__wrapper">
        <h1>{legal.title}</h1>
      </div>
      <main>
        <PortableText value={legal.content} />
      </main>
    </div>
  );
}
