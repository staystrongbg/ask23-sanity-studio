// export const dynamic = 'force-static';
import ProductList from '@/components/Pages/ProductList';

// import products from '../../../products.json';
import { Product } from '@/@types';
import Pagination from '@/components/Pagination';
import { H1 } from '@/components/utils';
import { getProducts } from '../../../sanity/utils';

const Akcije = async () => {
  const products: Product[] = await getProducts({
    query: `*[_type == "product" && akcija == true]{
    "id":id.current,
    "tip": tip,
    "name": name, 
    "price": cena,
    "detail": details,
    "image": image.asset->url,
    "novo": novo,
    "akcija": akcija,
    "title": title[][0]->name,
    "link": link[][0]->slug,}`,
  });
  return (
    <>
      <div className={`wrapper w-full  `}>
        {/* //top slider */}

        <section className="sm:px-5 px-1">
          <div className="flex flex-col w-full m-auto mb-12">
            <H1 className="text-center">сви производи тренутно на акцији</H1>
            <ProductList products={products} />
            <Pagination />
          </div>
        </section>
      </div>
    </>
  );
};

export default Akcije;
