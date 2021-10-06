const STAT_TYPES = {
  DOWNLOADS: 'downloads',
  LISTENS: 'embed/listens',
};

export const getStatsForEpisode = async (episodeId, type = STAT_TYPES.DOWNLOADS) => {
  const res = await fetch(`https://api.simplecast.com/analytics/${type}?episode=${episodeId}`, {
    headers: {
      authorization: `Bearer ${process.env.SIMPLECAST_API_TOKEN}`,
    },
  });
  return await res.json();
};

export const getStatsForEpisodes = async (episodeIds) => {
  const downloads = await Promise.all(episodeIds.map((id) => getStatsForEpisode(id, STAT_TYPES.downloads)));
  const listens = await Promise.all(episodeIds.map((id) => getStatsForEpisode(id, STAT_TYPES.LISTENS)));
  const stats = [];
  for (let i = 0; i < downloads.length; i += 1) {
    const episodeStats = {
      downloads: downloads[i].total,
      listens: listens[i].total,
    };
    stats[i] = episodeStats;
  }
  return stats;
};
