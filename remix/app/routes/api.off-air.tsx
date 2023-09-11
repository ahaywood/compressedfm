import { json, redirect } from "@remix-run/node";
import type { LoaderArgs } from "@remix-run/node";
import { getClientWithEdit } from "~/lib/sanity";

export async function loader({ request }: LoaderArgs) {
  const secret = new URL(request.url).searchParams.get("secret");
  if (secret !== process.env.ON_OFF_AIR_TOKEN) {
    return json({ message: "sorry you are not authorized" }, { status: 401 });
  }

  const goingLive = async () => {
    getClientWithEdit()
      .patch("siteSettings")
      .set({
        currentlyRecording: false,
      }) // Shallow merge
      .commit() // Perform the patch and return a promise
      .then((updatedEntry) => {
        console.info("Entry updated to revision %s", updatedEntry._rev);
      })
      .catch((err) => {
        console.error("Oh no, the update failed: ", err.message);
      });
  };
  goingLive();
  return redirect("/");
}
