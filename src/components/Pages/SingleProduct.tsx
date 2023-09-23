'use client';
import { useCartContext } from '@/context/cartContext';
import { AkcijaBadge, Button2, MultipleSwipers } from '..';
import { useProductContext } from '@/context/productContext';
import { useParams } from 'next/navigation';
import { useEffect } from 'react';
import { Product } from '@/@types';
import Image from 'next/image';
import { H2 } from '../utils';
import { toPlainText } from '@portabletext/react';

function SingleProduct({ products }: { products: Product[] }) {
  const { dodajProizvodUKorpu, kolicinaInput, setKolicinaInput } =
    useCartContext();
  const { trenutnaAkcija, product, setProduct, similarProduct } =
    useProductContext();

  const { id } = useParams();

  useEffect(() => {
    setProduct(
      !similarProduct
        ? (products.find((product) => product.id === id) as Product)
        : null
    );
  }, [id]);
  return (
    <>
      {product ? (
        <>
          <div className={`wrapper w-full  `}>
            <article className="flex flex-col lg:w-4/5 w-full m-auto p-4 bg-transparent">
              <h1 className="text-xl sm:text-2xl mb-5 text-orange-900 ">
                {product.name.toUpperCase()}
              </h1>
              <div className="flex md:flex-row flex-col gap-4 ">
                <div className="flex justify-center relative xl:max-w-[600px] p-4 bg-white ">
                  {product.akcija && <AkcijaBadge />}
                  <Image
                    objectFit="contain"
                    width={600}
                    height={600}
                    placeholder="blur"
                    blurDataURL={product.image}
                    unoptimized={true}
                    loading="eager"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="sm:text-base text-sm mt-2 flex flex-col gap-6">
                  <div className="">
                    <p className="font-bold mb-2 text-gray-600">
                      Детаљи о производу
                    </p>
                    <p className="text-gray-800">
                      {product.akcija
                        ? trenutnaAkcija.tekst
                        : toPlainText(product.detail)}
                    </p>
                  </div>
                  <div>
                    <div className=" flex items-center gap-10">
                      <div className="cena flex flex-col">
                        <span>цена</span>
                        <span className="sm:text-2xl text-xl font-bold text-gray-50 bg-orange-600 px-1 rounded-sm">
                          {product.price}
                        </span>
                      </div>
                      <div className="cena flex flex-col">
                        <span>количина</span>

                        <input
                          onChange={(e) =>
                            setKolicinaInput(
                              +e.currentTarget.value < 99
                                ? e.currentTarget.value
                                : 99
                            )
                          }
                          className="w-10 p-1 font-bold text-center text-gray-600"
                          value={kolicinaInput}
                          min={1}
                          max={99}
                          type="number"
                        />
                      </div>
                      <Button2
                        title=" у корпу"
                        onClick={() => dodajProizvodUKorpu(product)}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </article>
            <div className="px-8">
              <H2 className="text-center my-10">Слични производи</H2>
              <MultipleSwipers
                products={products.filter(
                  (p) => p.tip === product.tip && p.title === product.title
                )}
              />
            </div>
          </div>
        </>
      ) : (
        <h3>nothing here...</h3>
      )}
    </>
  );
}

export default SingleProduct;
