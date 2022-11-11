import sanityClient from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';
import axios from 'axios';
import { Guest } from '../types/types';
import * as dotenv from 'dotenv';
dotenv.config();

export const sanity = sanityClient({
  projectId: 'gqnsvyvh',
  dataset: 'production',
  apiVersion: '2021-03-25', // use current UTC date - see "specifying API version"!
  token: process.env.SANITY_WRITE_TOKEN, // or leave blank for unauthenticated usage
  useCdn: false, // `false` if you want to ensure fresh data
});

export const sanityImageBuilder = imageUrlBuilder(sanity);

export const updateEpisode = (episodeId: string, changes: any) =>
  sanity.patch(episodeId).set(changes).commit();

export const getGuestById = async (id: string): Promise<Guest> => {
  const guest = (await sanity.getDocument(id)) as Guest;
  return guest;
};

export const uploadImage = async (imageUrl: string) => {
  const response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  const buffer = Buffer.from(response.data, 'utf-8');
  return sanity.assets.upload('image', buffer);
};
