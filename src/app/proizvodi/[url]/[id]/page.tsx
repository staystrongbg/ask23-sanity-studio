// export const dynamic = 'force-static';
// import products from '../../../../../products.json';
import { Product } from '@/@types';
import SingleProduct from '@/components/Pages/SingleProduct';
import { Metadata } from 'next';
import { getProducts } from '../../../../../sanity/utils';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};
export async function generateStaticParams() {
  const products = await getProducts({
    query:
      '*[_type == "product" && defined(link[][0]->slug) && defined(id.current)]{ "id": id.current, "link": link[][0]->slug}',
  });

  return products;
}
const ProizvodPojedinacno = async ({
  params,
}: {
  params: { id: string; url: string };
}) => {
  const products = await getProducts({
    query: `*[_type == "product" && defined(link[][0]->slug == "${params.url}") && defined(id.current == "${params.id}" )]{
    "id":id.current,
    "tip": tip,
    "name": name,
    "price": cena,
    "detail": details,  
    "image": image.asset->url,
    "novo": novo,
    "akcija": akcija,
    "title": title[][0]->name,
    "link": link[][0]->slug,
    
    }`,
  });
  return <SingleProduct products={products as Product[]} />;
};

export default ProizvodPojedinacno;