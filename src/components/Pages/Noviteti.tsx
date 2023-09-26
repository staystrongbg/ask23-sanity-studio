'use client';
import { MultipleSwipers } from '../';

import { useState, useEffect } from 'react';

import { H2, P } from '../utils';
import { Product } from '../../@types';

const Noviteti = ({ products }: { products: Omit<Product, 'kolicina'>[] }) => {
  const [isActive, setIsActive] = useState<number | null>(null);
  const [produkti, setProdukti] = useState<Omit<Product, 'kolicina'>[]>([]);

  const [slajderProizvodi, setSlajderProizvodi] = useState({ tekst: '' });

  const handleCategory = (e = 'акција', idx = 1) => {
    setIsActive(idx);
    setSlajderProizvodi(
      e === 'акција'
        ? { tekst: 'ПОПУСТ НА КОЛИЧИНУ! 10% попуста за сваки џак хране.' }
        : {
            tekst:
              'АСК23 - СВЕ ЗА КУЋНЕ ЉУБИМЦЕ се труди да своје верне потрошаче обавештава о најновијим производима и акцијама.',
          }
    );
    setProdukti(
      e === 'ново'
        ? products.filter((p) => p.novo)
        : e === 'акција'
        ? products.filter((p) => p.akcija)
        : []
    );
  };

  //set diff initial render
  useEffect(() => {
    handleCategory();
  }, []);

  console.log('products', products);
  return (
    <section className="  px-5 py-10 ">
      <div className="flex flex-col items-center justify-center xl:w-5/6 w-full  m-auto mt-12 mb-12">
        <div className="flex gap-10">
          {['ново', 'акција'].map((i, idx) => (
            <H2
              key={idx}
              onClick={(e) =>
                handleCategory((e.target as HTMLElement).textContent ?? '', idx)
              }
              className={` ${
                isActive === idx && 'border-b-4 border-red-400'
              } sm:text-2xl text-xl cursor-pointer uppercase select-none `}
            >
              {i}
            </H2>
          ))}
        </div>
        <P className="text-center">{slajderProizvodi.tekst}</P>

        <div className="w-full gap-1 py-10">
          {!produkti.length && (
            <h2 className="text-center text-3xl text-gray-400 w-full">
              Тренутно нема производа...
            </h2>
          )}

          <MultipleSwipers products={produkti} />
        </div>
      </div>
    </section>
  );
};

export default Noviteti;
