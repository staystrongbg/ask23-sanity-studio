import { createClient } from 'next-sanity';
export const client = createClient({
  projectId: 'tjniynvh',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-09-25',
});
