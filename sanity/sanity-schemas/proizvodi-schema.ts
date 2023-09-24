export const proizvod = {
  name: 'product',
  title: 'Proizvodi',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Naziv',
      type: 'string',
      description: 'Naziv proizvoda',
    },
    {
      name: 'id',
      type: 'slug',
      title: 'ID',
      description: 'ID proizvoda max 30 karaktera',
      validation: (Rule: { max: (arg0: number) => any }) => Rule.max(30),
      options: {
        source: 'name',
        maxLength: 30,
      },
    },
    {
      name: 'details',
      title: 'Detalji',
      type: 'array',
      description: 'Opis proizvoda',
      of: [
        {
          type: 'block',
        },
      ],
    },
    {
      name: 'cena',
      type: 'number',
      title: 'Cena  ',
    },
    {
      name: 'tip',
      title: 'Tip',
      type: 'array',
      description: 'Tip proizvoda',
      of: [{ type: 'reference', to: [{ type: 'product-type' }] }],
    },
    {
      name: 'title',
      type: 'array',
      title: 'Zivotinja',
      of: [{ type: 'reference', to: [{ type: 'category' }] }],
    },
    {
      name: 'link',
      type: 'array',
      title: 'Link',
      description: 'URL - koristi se za sortiranje',
      of: [{ type: 'reference', to: [{ type: 'subpath' }] }],
    },
    {
      name: 'novo',
      type: 'boolean',
      title: 'Novo?',
      description: 'prikaz u sekciji novi proizvodi',
    },
    {
      name: 'akcija',
      type: 'boolean',
      title: 'Akcija?',
      description: 'prikaz u/na sekciji/stranici akcije',
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
