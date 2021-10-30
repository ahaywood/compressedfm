import sanityClient from '@sanity/client';
import groq from 'groq';
import { find } from 'lodash';

// set the sanity client.
// This is different than the normal Sanity client because it has read / write
const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_WRITE_TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

const STAT_TYPES = {
  DOWNLOADS: 'episodes',
  LISTENS: 'episodes/listeners',
};

// get stats from Simplecast
export const getStats = async (type = STAT_TYPES.DOWNLOADS) => {
  let res;
  try {
    res = await fetch(
      `https://api.simplecast.com/analytics/${type}?podcast=${process.env.SIMPLECAST_PODCAST_ID}&limit=100`,
      {
        headers: {
          authorization: `Bearer ${process.env.SIMPLECAST_API_TOKEN}`,
        },
      }
    );
    const result = await res.json();
    return result;
  } catch {
    console.log('errors with downloads');
  }
};

// get all episodes from Sanity
export const AllEpisodesQuery = groq`*[_type == "episode" && published == true && publishedAt < now()] | order(episodeNumber desc) {
  _id,
  episodeNumber,
  simplecastId,
  episodeStats
}`;

export default async function handler(req, res) {
  // 1. grab the stats from Simplecast
  const downloads = await getStats(STAT_TYPES.DOWNLOADS);
  const listens = await getStats(STAT_TYPES.LISTENS);

  // 2. grab all episodes from sanity
  const episodes = await client.fetch(AllEpisodesQuery);

  // 3. loop over each episode (from Sanity) and build a new object
  //    with downloads and listens
  const analytics = episodes.map((episode) => {
    // look in the downloads feed and find the matching episode
    const curDownload = find(downloads.collection, { id: episode.simplecastId });
    const curListens = find(listens.collection, { id: episode.simplecastId });

    return {
      ...episode,
      downloads: curDownload?.downloads?.total,
      listens: curListens?.listeners.total,
    };
  });

  // 4. Update Sanity, saving the downloads and listens
  const updateSanity = async ({ episodeId, episodeDownloads, episodeListens }) => {
    client
      .patch(episodeId) // Document ID to patch
      .set({
        episodeStats: {
          _type: 'episodeStats',
          stats: {
            _type: 'stat',
            downloads: episodeDownloads,
            listens: episodeListens,
          },
        },
      }) // Shallow merge
      .commit() // Perform the patch and return a promise
      .then((updatedEpisode) => {
        console.log('Hurray, the episode is updated! New document:');
        console.log(updatedEpisode);
      })
      .catch((err) => {
        console.error('Oh no, the update failed: ', err.message);
      });
  };

  // map over each episode and update it within Sanity
  analytics.map((episode) =>
    updateSanity({
      episodeId: episode._id,
      episodeDownloads: episode.downloads,
      episodeListens: episode.listens,
    })
  );

  res.status(200).json({
    success: 'success',
  });
}
