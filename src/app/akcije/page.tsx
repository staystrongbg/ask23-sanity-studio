// export const dynamic = 'force-static';
import ProductList from '@/components/Pages/ProductList';
import { Product } from '@/@types';
import Pagination from '@/components/Pagination';
import { H1 } from '@/components/utils';
import { getProducts } from '../../../sanity/utils';
import { AKCIJA_QUERY } from '../../../sanity/groq-queries';

const Akcije = async () => {
  const products: Product[] = await getProducts({
    query: AKCIJA_QUERY,
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
