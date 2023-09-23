'use client';
import { useProductContext } from '@/context/productContext';
import { FilterKategorije, FilterSort, FilterTip, NonSwiperProizvod } from '..';
import { GridContainer, ProductsListWrapper } from '../utils';
import { Product } from '@/@types';
import { useEffect } from 'react';

const ProductList = ({ products }: { products: Product[] }) => {
  const {
    items,
    setItems,
    vrstaZivotinje,
    setVrstaZivotinje,
    pagination,
    setPagination,
  } = useProductContext();

  useEffect(() => {
    setVrstaZivotinje([]);
  }, []);

  useEffect(() => {
    setItems(products as Product[]);
  }, []);

  return (
    <ProductsListWrapper>
      <div className="sm:w-1/6 w-4/5 flex flex-col px-2">
        {vrstaZivotinje.length > 0 ? (
          <>
            <FilterKategorije numberOfProductsByType={products as Product[]} />
            <FilterTip
              numberOfProductsByType={vrstaZivotinje.filter((f) => f.title)}
            />
          </>
        ) : (
          <FilterKategorije numberOfProductsByType={products as Product[]} />
        )}

        <FilterSort />
      </div>
      <GridContainer>
        {items &&
          items
            .slice(0, pagination.page * pagination.perPage)
            .map((p, idx) => <NonSwiperProizvod key={idx} p={p} />)}
      </GridContainer>
    </ProductsListWrapper>
  );
};

export default ProductList;
