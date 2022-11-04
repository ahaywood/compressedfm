// client.js
import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import { createReadStream } from 'fs';
import got from 'got';

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

export const updateEpisode = (episodeId, changes) => clientWithEdit.patch(episodeId).set(changes).commit();

export const getGuestById = async (id) => {
  const guest = await client.getDocument(id);
  return guest;
};

export const uploadImage = async (imageUrl) => clientWithEdit.assets.upload('image', got.stream(imageUrl));
