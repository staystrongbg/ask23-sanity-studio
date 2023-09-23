'use client';
import { FaTimes } from 'react-icons/fa';
import { NonSwiperProizvod } from '.';
import { GridContainer } from './utils';
import { useSearchContext } from '../context/searchContext';

const Modal = () => {
  const { setSearchTerm, searchProducts } = useSearchContext();
  console.log('searchProducts', searchProducts);
  return (
    <div
      className={`fixed  top-0 left-0 right-0 bottom-0 bg-gray-100/90 z-50 flex items-center justify-center flex-wrap overflow-auto p-4 gap-8 shadow-lg`}
    >
      <span
        className="absolute top-4 right-4 cursor-pointer"
        onClick={() => setSearchTerm('')}
      >
        <FaTimes className="w-[24px] h-[24px] text-gray-400" />
      </span>
      <GridContainer>
        {searchProducts &&
          searchProducts.map((p, idx: number) => (
            <NonSwiperProizvod key={idx} p={p} />
          ))}
        {!searchProducts.length && (
          <h2 className="price  inline text-gray-700   text-xl">
            Нема производа...
          </h2>
        )}
      </GridContainer>
    </div>
  );
};

export default Modal;
