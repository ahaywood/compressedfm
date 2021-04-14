export const getStatsForEpisode = async (episodeId) => {
    const res = await fetch(
        `https://api.simplecast.com/analytics?podcast=${episodeId}`,
        {
            headers: {
                authorization: `Bearer ${process.env.SIMPLECAST_API_TOKEN}`,
            },
        }
    );
    return await res.json();
};

export const getStatsForEpisodes = async (episodeIds) => {
    return Process.all(episodeIds.map((id) => getStatsForEpisode(id)));
};
