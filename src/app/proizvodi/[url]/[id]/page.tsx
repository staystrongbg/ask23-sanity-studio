// export const dynamic = 'force-static';
import { Product } from '@/@types';
import SingleProduct from '@/components/Pages/SingleProduct';
import { Metadata } from 'next';
import { getProducts } from '../../../../../sanity/utils';
import { signle_product_query } from '../../../../../sanity/groq-queries';

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
  const products: Product[] = await getProducts({
    query: signle_product_query(params),
  });
  return <SingleProduct products={products} />;
};

export default ProizvodPojedinacno;
