import { defineConfig } from 'sanity';
import { deskTool } from 'sanity/desk';
import { schemaTypes } from './sanity/sanity-schemas';
const config = defineConfig({
  title: 'ask23-pet-shop',

  projectId: 'tjniynvh',
  dataset: 'production',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: {
    types: schemaTypes,
  },
});

export default config;
