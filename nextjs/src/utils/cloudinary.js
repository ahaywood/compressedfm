const cloudinary = require('cloudinary').v2;
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const uploadAudio = async (audioPath, episodeNumber) => {
  const audio = await cloudinary.uploader.upload(audioPath, {
    public_id: episodeNumber,
    resource_type: 'video',
    upload_preset: 'compressedfm',
  });
  const { public_id } = audio;
  return public_id;
};

const uploadAudioFromEpisode = (episode) => uploadAudio(episode.audioPath, episode.episodeNumber);

const getWaveformURLForAudio = (publicId) => {
  const waveformURL = cloudinary.url(`${publicId}.png`, {
    height: 200,
    width: 500,
    flags: 'waveform',
    color: '#FAFF00',
    background: 'black',
    resource_type: 'video',
  });
  return waveformURL;
};

export { getWaveformURLForAudio, uploadAudioFromEpisode };
