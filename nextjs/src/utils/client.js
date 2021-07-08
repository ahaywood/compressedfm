// client.js
import sanityClient from '@sanity/client';

const client = sanityClient({
  projectId: 'gqnsvyvh', // you can find this in sanity.json
  dataset: 'production', // or the name you chose in step 1
  apiVersion: '2021-03-25', // use a UTC date string
  useCdn: false, // `false` if you want to ensure fresh data
  token: process.env.SANITY_TOKEN
});
export default client;
