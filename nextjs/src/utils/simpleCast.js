const STAT_TYPES = {
  DOWNLOADS: 'downloads',
  LISTENS: 'episodes/listeners',
};

const PODCAST_ID = 'c3161c7d-d5ac-46a9-82c1-b18cbcc93b5c';

export const getDownloadsForEpisode = async (episodeId, type = STAT_TYPES.DOWNLOADS) => {
  const res = await fetch(`https://api.simplecast.com/analytics/${type}?episode=${episodeId}`, {
    headers: {
      authorization: `Bearer ${process.env.SIMPLECAST_API_TOKEN}`,
    },
  });
  return await res.json();
};

export const getListenersForEpisode = async (episodeId, type = STAT_TYPES.DOWNLOADS) => {
  const res = await fetch(`https://api.simplecast.com/analytics/${type}?podcast=${PODCAST_ID}`, {
    headers: {
      authorization: `Bearer ${process.env.SIMPLECAST_API_TOKEN}`,
    },
  });
  return await res.json();
};

export const getEpisodeStats = async();

export const getStatsForEpisodes = async (episodeIds) => {
  // const downloads = await Promise.all(episodeIds.map((id) => getDownloadsForEpisode(id, STAT_TYPES.downloads)));
  // const listens = await Promise.all(episodeIds.map((id) => getListenersForEpisode(id, STAT_TYPES.LISTENS)));
  const stats = [];
  for (let i = 0; i < downloads.length; i += 1) {
    console.log(listens[i]);
    const episodeStats = {
      downloads: downloads[i].total,
      listens: listens[i].total,
    };
    stats[i] = episodeStats;
  }
  return stats;
};
