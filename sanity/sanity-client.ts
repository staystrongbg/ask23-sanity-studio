import { createClient } from 'next-sanity';
export const client = createClient({
  projectId: 'tjniynvh',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-09-25',
});
