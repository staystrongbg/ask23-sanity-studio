/* eslint-disable @next/next/no-img-element */
'use client';
import Link from 'next/link';
import { FaShoppingCart } from 'react-icons/fa';
import { AkcijaBadge } from '../';
import { useCartContext } from '../../context/cartContext';
import { useSearchContext } from '../../context/searchContext';
import { Product } from '@/@types';

const NonSwiperProizvod = ({ p }: { p: Product }) => {
  const { dodajProizvodUKorpu } = useCartContext();
  const { setSearchTerm } = useSearchContext();
  return (
    <>
      {p && (
        <div className="flex flex-col hover:shadow-lg rounded-md border border-gray-200 ">
          <div
            className={`h-[320px] lg:text-base text-xs bg-green-500  transition-all relative overflow-hidden flex flex-col justify-start `}
            style={{ animation: 'fadeIn 0.3s ease-out' }}
          >
            {p.akcija && <AkcijaBadge />}
            <div className="w-full h-full p-2 bg-white">
              <Link
                href="/proizvodi/[url]/[id]"
                as={`/proizvodi/${p.link}/${p.id}`}
              >
                <img
                  onClick={() => setSearchTerm('')}
                  className="product-image  rounded-t-md object-contain  h-full w-full cursor-pointer "
                  src={p.image}
                  alt=""
                />
              </Link>
            </div>
          </div>
          <div className="p-2 flex flex-col items-center justify-around ">
            <div className="flex mt-2 ">
              <span className=" text-gray-500 py-1 px-2">{p.tip}</span>
              <span className=" text-gray-500 py-1 px-2">{p.title}</span>
            </div>
            <div className="h-[100px] flex items-center justify-center">
              <h3 className="title text-sm sm:text-base text-blue-700 whitespace-pre-wrap py-4 ">
                {p.name.toUpperCase()}
              </h3>
            </div>
            <div className="proizvod-cena lg:py-2 py-1 lg:px-8 px-4 bg-red-600 ">
              <h2 className="price font-bold inline text-gray-100 text-xl  sm:text-2xl   ">
                {p.price}
              </h2>
            </div>
            <p className="details sm:text-sm text-xs text-gray-400">
              *приказане цене су у РСД
            </p>
            <div
              className="uppercase gap-2  korpa-ikonica  p-2 flex w-full cursor-pointer items-center justify-center"
              onClick={() => dodajProizvodUKorpu(p)}
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

export default NonSwiperProizvod;
