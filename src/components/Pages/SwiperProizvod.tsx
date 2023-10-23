/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { AkcijaBadge } from '..';
import { useSearchContext } from '@/context/searchContext';
import { useCartContext } from '@/context/cartContext';
import { useProductContext } from '@/context/productContext';
import { Product } from '@/@types';
const SwiperProizvod = ({
  proizvod,
}: {
  proizvod: Omit<Product, 'kolicina'>;
}) => {
  const { dodajProizvodUKorpu } = useCartContext();
  const { setSearchTerm, setIsSearching } = useSearchContext();
  const { setProduct } = useProductContext();

  const closeOverlays = () => {
    setSearchTerm('');
    setIsSearching(false);
  };

  return (
    <>
      {proizvod && (
        <div className="flex flex-col hover:shadow-lg rounded-md border  bg-white border-gray-200 ">
          <div
            className={` h-[320px] lg:text-base text-xs bg-green-500  transition-all relative overflow-hidden flex flex-col justify-start `}
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          >
            {proizvod.akcija && <AkcijaBadge />}
            <div className="w-full h-full p-2 bg-white">
              <Link
                href="/proizvodi/[url]/[id]"
                as={`/proizvodi/${proizvod.link}/${proizvod._id}`}
              >
                <img
                  onClick={() => setSearchTerm('')}
                  className="product-image  rounded-t-md object-contain  h-full w-full cursor-pointer "
                  src={proizvod.image}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="p-2 flex flex-col items-center justify-around ">
            <div className="flex mt-2 ">
              <span className=" text-gray-300 py-1 px-2">{proizvod.tip}</span>
              <span className=" text-gray-300 py-1 px-2">{proizvod.title}</span>
            </div>
            <div className="h-[100px] flex items-center justify-center">
              <h3 className="title text-xs sm:text-sm text-blue-700 whitespace-pre-wrap py-4 ">
                {proizvod.name.toUpperCase()}
              </h3>
            </div>
            <div className="proizvod-cena lg:py-2 py-1 lg:px-8 px-4 bg-red-600 ">
              <h2 className="price font-bold inline text-gray-100 text-xl  sm:text-2xl   ">
                {proizvod.price}
              </h2>
            </div>
            <p className="details sm:text-sm text-xs text-gray-400">
              *приказане цене су у РСД
            </p>
            <div
              className="uppercase gap-2  korpa-ikonica  p-2 flex w-full cursor-pointer items-center justify-center"
              onClick={() => dodajProizvodUKorpu(proizvod as Product)}
            >
              <span className=" xl:text-3xl text-xl text-yellow-500  ">
                <FaShoppingCart />
              </span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperProizvod;
