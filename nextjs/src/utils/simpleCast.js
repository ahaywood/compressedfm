const STAT_TYPES = {
  DOWNLOADS: 'downloads',
  LISTENS: 'embed/listens',
};

// get download stats for a specific episode
export const getDownloadStatsForEpisode = async (episodeId, type = STAT_TYPES.DOWNLOADS) => {
  const res = await fetch(`https://api.simplecast.com/analytics/${type}?episode=${episodeId}`, {
    headers: {
      authorization: `Bearer ${process.env.SIMPLECAST_API_TOKEN}`,
    },
  });
  return await res.json();
};

// get listener stats for a specific episode
export const getListenStatsForEpisode = async (episodeId) => {
  const res = await fetch(
    `https://api.simplecast.com/analytics/episodes/listeners?podcast${process.env.SIMPLECAST_PODCAST_ID}&episode=${episodeId}`,
    {
      headers: {
        authorization: `Bearer ${process.env.SIMPLECAST_API_TOKEN}`,
      },
    }
  );
  const results = await res.json();
  console.log(results);
  return results;
};

// get stats for all episodes
export const getStatsForEpisodes = async (episodeIds) => {
  const downloads = await Promise.all(episodeIds.map((id) => getDownloadStatsForEpisode(id, STAT_TYPES.downloads)));
  const listens = await Promise.all(episodeIds.map((id) => getListenStatsForEpisode(id)));
  const stats = [];
  for (let i = 0; i < downloads.length; i += 1) {
    const episodeStats = {
      downloads: downloads[i].total,
      // listens: listens.collection[i].listeners.total,
    };
    stats[i] = episodeStats;
  }
  return stats;
};
