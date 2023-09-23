'use client';
import { useProductContext } from '@/context/productContext';
import { usePathname, useRouter, useParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { GridContainer, H1, ProductsListWrapper } from '../utils';
import { Button2, FilterSort, FilterTip, NonSwiperProizvod } from '..';
import Link from 'next/link';
import { Product } from '@/@types';
const KategorijaProizvoda = ({ products }: { products: Product[] }) => {
  const pathname = usePathname();
  const { url } = useParams();

  const {
    setItems,
    items,
    setVrstaZivotinje,
    vrstaZivotinje,
    pagination,
    setPagination,
  } = useProductContext();

  const [page, setPage] = useState<Product[] | null>(null);
  useEffect(() => {
    setPage(products.filter((prod) => prod.link === url) as Product[]);
  }, [url]);

  useEffect(() => {
    setItems(vrstaZivotinje);
  }, [vrstaZivotinje]);

  useEffect(() => {
    setVrstaZivotinje(page ?? []);
  }, [page]);
  return (
    <>
      {page && vrstaZivotinje && items && page[0] ? (
        <>
          <div className={`wrapper w-full `}>
            <section className="sm:px-5 px-1  ">
              <div className="flex flex-col  w-full m-auto mt-12 mb-12">
                <H1 className="text-center">{page[0].title}</H1>
                <ProductsListWrapper>
                  <div className="sm:w-1/6 w-4/5 flex flex-col px-2">
                    <FilterSort />
                    <FilterTip numberOfProductsByType={page} />
                  </div>
                  <GridContainer>
                    {items &&
                      items
                        .slice(0, pagination.page * pagination.perPage)
                        .map((p, idx) => <NonSwiperProizvod key={idx} p={p} />)}
                  </GridContainer>
                </ProductsListWrapper>
                {items.length > pagination.perPage * pagination.page && (
                  <Button2
                    className="w-72 m-auto"
                    title="учитај још"
                    onClick={() =>
                      setPagination({
                        ...pagination,
                        page: pagination.page + 1,
                      })
                    }
                  />
                )}
              </div>
            </section>
          </div>
        </>
      ) : (
        <h3 style={{ textAlign: 'center' }}>
          nothing here... <Link href="/">Go home</Link>{' '}
        </h3>
      )}
    </>
  );
};

export default KategorijaProizvoda;
