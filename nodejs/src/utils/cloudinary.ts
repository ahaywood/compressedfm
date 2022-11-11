import { v2 as cloudinary } from 'cloudinary';
import { updateEpisode, uploadImage } from './sanity';
import * as dotenv from 'dotenv';
dotenv.config();
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

//TODO: don't upload audio if already exists?
const uploadAudio = async (audioPath: string, episodeNumber: string) => {
  const audio = await cloudinary.uploader.upload(audioPath, {
    public_id: episodeNumber,
    resource_type: 'video',
    upload_preset: 'compressedfm',
  });
  const { public_id: publicId } = audio;
  return publicId;
};

export { cloudinary, uploadAudio };
