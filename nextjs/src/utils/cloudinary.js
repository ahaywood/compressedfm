import { v2 as cloudinary } from 'cloudinary';

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
  const { public_id: publicId } = audio;
  return publicId;
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
  const httpsUrl = waveformURL.replace('http', 'https');
  return httpsUrl;
};

export { cloudinary, getWaveformURLForAudio, uploadAudioFromEpisode };
