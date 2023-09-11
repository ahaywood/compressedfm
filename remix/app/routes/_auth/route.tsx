import { Outlet, useLoaderData } from "@remix-run/react";
import { AuthHeader } from "./AuthHeader";
import { getClient } from "~/lib/sanity";
import type { LoaderArgs } from "@remix-run/node";
import { TagsQuery } from "~/queries/Queries";

export const loader = async ({ params }: LoaderArgs) => {
  const tags = await getClient().fetch(TagsQuery);
  return { tags };
};

export default function AuthLayout() {
  const { tags } = useLoaderData();

  return (
    <div className="bg-bg bg-no-repeat bg-100-auto min-h-screen min-w-screen center">
      <AuthHeader tags={tags} />
      <Outlet />
    </div>
  );
}
