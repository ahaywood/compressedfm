const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});



const uploadAudioFromEpisodes = episodes => {
    return Promise.all(episodes.map(episode => uploadAudio(episode.audioPath, episode.episodeNumber)));
}

const uploadAudio = async (audioPath, publicId) => {
        const audio = await cloudinary.uploader.upload(audioPath, {
            public_id: publicId,
            resource_type: 'video',
            upload_preset: 'compressedfm',
        });
        const { public_id } = audio;
        return public_id;
};

const getWaveformURLsForAudios = (publicIds) => {
    return publicIds.map(id => getWaveformURLForAudio(id));
}

const getWaveformURLForAudio = (publicId) =>{
    const waveformURL = cloudinary.url(publicId + '.png', {
        height: 200,
        width: 500,
        flags: 'waveform',
        color: '#FAFF00',
        background: 'black',
        resource_type: 'video',
    });
    return waveformURL;
}

export {
    getWaveformURLsForAudios, 
    uploadAudioFromEpisodes
}

