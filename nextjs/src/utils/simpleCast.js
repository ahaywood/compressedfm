export const getStatsForEpisode = async (episodeId) => {
    const res = await fetch(
        `https://api.simplecast.com/analytics/downloads?episode=${episodeId}`,
        {
            headers: {
                authorization: `Bearer ${process.env.SIMPLECAST_API_TOKEN}`,
            },
        }
    );
    return await res.json();
};

export const getStatsForEpisodes = async (episodeIds) => {
    return Promise.all(episodeIds.map((id) => getStatsForEpisode(id)));
};
