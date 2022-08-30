// client.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { basename } from 'path';
import request from 'request';

const client = sanityClient({
  projectId: 'gqnsvyvh', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-03-25', // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
  token: process.env.SANITY_TOKEN,
});
export default client;

export const clientWithEdit = sanityClient({
  projectId: 'gqnsvyvh',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_WRITE_TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export const sanityImageBuilder = imageUrlBuilder(client);

export const addWaveformToEpisode = async (episodeId, waveformURL) => {
  console.log('🚀 ~ file: client.js ~ line 27 ~ addWaveformToEpisode ~ waveformURL', waveformURL);
  const uploadedWaveformImage = await clientWithEdit.assets.upload('image', request(waveformURL), {
    filename: basename(`episode-${episodeId}-waveform`),
  });
  // update episode with waveformURL
  const updatedEpisode = await clientWithEdit
    .patch(episodeId)
    .set({
      waveform: {
        _type: 'image',
        asset: {
          _ref: uploadedWaveformImage._id,
          _type: 'reference',
        },
      },
    })
    .commit();
  return updatedEpisode;
};

export const getGuestById = async (id) => {
  const guest = await client.getDocument(id);
  return guest;
};
