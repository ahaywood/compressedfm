// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import client from "utils/client";
import { getWaveformURLsForAudios, uploadAudioFromEpisodes } from "utils/cloudinary";
import { getEpisodeByIdQuery } from "utils/queries";
import { addWaveformToEpisode } from "utils/sanity";

export default async (req, res) => {
    const body = req.body;
    if(!body || !body.ids) {
        return res.status(200).json({ msg: "Nothing to see here."});
    }
    const {created, updated} = body.ids;
    const ids = [...new Set([...created, ...updated])];

    try {
        const episodes = await client.fetch(getEpisodeByIdQuery, {ids} );
        //filter episodes that already have waveform images to avoid infinite loops
        const episodesWithoutWaveforms = episodes.filter(episode => !episode.waveform);
        console.log({episodesWithoutWaveforms} );
        if(episodesWithoutWaveforms.length === 0)  {
            console.log("No new records without an existing waveform image")
            return res.status(200).json({ msg: "Nothing to see here."});
        }
        const publicIds = await uploadAudioFromEpisodes(episodesWithoutWaveforms);
        const waveformURLs = getWaveformURLsForAudios(publicIds);
        //iterate through each episodeId and add the corresponding waveformURL
        for (let i = 0; i < episodesWithoutWaveforms.length; i++) {
            const episodeId = episodesWithoutWaveforms[i]._id;
            const waveformURL = waveformURLs[i];
            const updatedEpisode = await addWaveformToEpisode(episodeId, waveformURL);
            console.log(updatedEpisode)
            return res.status(200).json({ msg: "Waveform generated and added"});
        }
    }catch(err){
        console.error(err)
        return res.status(500).json({ msg: `I don't know...` });       
    }
};
