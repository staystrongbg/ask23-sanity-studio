export const proizvod = {
  name: 'product',
  title: 'Proizvodi',
  type: 'document',
  fields: [
    {
      name: 'id',
      type: 'slug',
      title: 'ID',
      options: {
        source: 'name',
        maxLength: 30,
      },
    },
    {
      name: 'details',
      title: 'Detalji',
      type: 'array',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'name',
      title: 'Naziv',
      type: 'string',
    },
    {
      name: 'cena',
      type: 'number',
      title: 'Cena  ',
    },
    {
      name: 'tip',
      title: 'Tip',
      type: 'string',
    },
    {
      name: 'title',
      type: 'array',
      title: 'Kategorija',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'link',
      type: 'array',
      title: 'Link',
      of: [{ type: 'reference', to: [{ type: 'subpath' }] }],
    },
    {
      name: 'novo',
      type: 'boolean',
      title: 'Novo?',
    },
    {
      name: 'akcija',
      type: 'boolean',
      title: 'Akcija?',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Slika',
      options: {
        hotspot: true,
      },
    },
  ],
};
