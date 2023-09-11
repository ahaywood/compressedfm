import type { LoaderArgs } from "@remix-run/node";
import { Outlet, useLoaderData } from "@remix-run/react";
import { Footer } from "~/components/Footer";
import { Header } from "~/components/Header";
import { getClient } from "~/lib/sanity";
import { LegalQuery, TagsQuery } from "~/queries/Queries";

export const loader = async ({ params }: LoaderArgs) => {
  const footerLinks = await getClient().fetch(LegalQuery);
  const tags = await getClient().fetch(TagsQuery);
  return { footerLinks, tags };
};

export default function InteriorLayout() {
  const { footerLinks, tags } = useLoaderData();
  return (
    <>
      <div className="bg-bg bg-[center_-450px] bg-no-repeat bg-100-auto min-h-screen">
        <Header tags={tags} />
        <Outlet />
        <Footer footerLinks={footerLinks} />
      </div>
    </>
  );
}
