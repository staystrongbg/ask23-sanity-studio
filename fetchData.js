import { createClient } from 'next-sanity';

import fetch from 'node-fetch';
//remap fetch data to match sanity schema
const client = createClient({
  projectId: 'tjniynvh',
  dataset: 'production',
  useCdn: false,
  apiVersion: '2023-10-20',
  token:
    'skzKPM6M0ITZZ5MFRqH87vrA4CJMeZ3sGSkNqdSIdiE9D2W6bkyS2jtYFRWMWcbktHMsHci0OWj2BKFbqxD9QwnAEsvbW4REzwIM1qzgZqiBY6JrXPWaY8yyJ9EfNGvi7d1duv30JujSQuizRRhG8xSoKTdflgzcHNs90VmPD4srjuS1nKay',
});
function transformData(data) {
  //category
  //subpath
  //product-type
  return data.map((item) => {
    console.log('item', item);
    return {
      _id: item._id.$oid,
      tip: 'test',
      name: item.name,
      cena: +item.price,
      details: item.detail,
      image: 'test',
      novo: item.novo,
      akcija: item.akcija,
      title: item.title,
      link: 'test',
      _type: 'product',
    };
  });
}
//za reference trebe kreirati posebno const pa to postaviti kao value
const fetchData = async (url) => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    const data = await transformData(json);
    return data;
  } catch (error) {
    console.log(error);
  }
};

const gitRepoUrl =
  'https://raw.githubusercontent.com/staystrongbg/ask23-refactor/main/products.json';

fetchData(gitRepoUrl)
  .then((data) => {
    console.log(data);
    const dataWriten = Promise.all(
      data.map((item) => client.createOrReplace(item))
    );
  })
  .catch((err) => {
    console.log(err);
  });
