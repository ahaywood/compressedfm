import { createClient } from '@sanity/client';
import type { SanityClient } from '@sanity/client';

// Copy these from your Studio's sanity.config.ts
export const projectId = process.env.SANITY_PROJECT_ID;
export const dataset = process.env.SANITY_DATASET;
export const apiVersion = '2023-07-01';

export function getClient(preview?: { token?: string }): SanityClient {
  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
    perspective: 'published',
  });
  if (preview) {
    if (!preview.token) {
      throw new Error('Attempted to activate Preview but a token was not provided');
    }
    return client.withConfig({
      token: preview.token,
      useCdn: false,
      ignoreBrowserTokenWarning: true,
      perspective: 'previewDrafts',
    });
  }
  return client;
}

export const getClientWithEdit = () => {
  return createClient({
    projectId,
    dataset,
    apiVersion,
    token: process.env.SANITY_WRITE_TOKEN, // or leave blank for unauthenticated usage
    useCdn: true, // `false` if you want to ensure fresh data
  });
};
