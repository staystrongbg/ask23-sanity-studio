import products from '../../products.json';
export const crumbCir = (term: string) => {
  const tempUrl = products.find((l) => l._id.$oid === term);
  if (term === 'proizvodi') term = 'производи';
  if (term === 'brendovi') term = 'брендови';
  if (term === 'o-nama') term = 'о нама';
  if (term === 'kontakt') term = 'контакт';
  if (term === 'akcije') term = 'акције';
  if (term === 'psi') term = 'пси';
  if (term === 'macke') term = 'мачке';
  if (term === 'ptice') term = 'птице';
  if (term === 'ribice') term = 'рибице';
  if (term === 'glodari') term = 'глодари';
  if (term.includes('#')) return term.slice(0, 1);
  if (tempUrl) {
    term =
      tempUrl.name.length > 12
        ? tempUrl.name.slice(0, 12) + '... '
        : tempUrl.name;
    return term;
  }
  return term;
};
