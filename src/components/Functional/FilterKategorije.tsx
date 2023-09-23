'use client';
import { useEffect } from 'react';
import { useProductContext } from '../../context/productContext';
// import products from '../../../products.json';

import { FaChevronRight } from 'react-icons/fa';
import { CHEVRON_ROTATING_STYLE, LI_LIST_STYLE, UL_LIST_STYLE } from '../utils';
import { Product } from '../../@types';

import { usePathname } from 'next/navigation';
export const FilterKategorije = ({
  numberOfProductsByType,
}: {
  numberOfProductsByType: Product[];
}) => {
  const {
    showTitles,
    setShowTitles,
    titles,
    setItems,
    setShowTip,
    setVrstaZivotinje,
    pagination,
    setPagination,
  } = useProductContext();

  const pathname = usePathname();
  const handleTitleClick = (
    e: React.MouseEvent<HTMLLIElement>,
    title: string
  ) => {
    e.stopPropagation();

    setItems(
      title !== 'све'
        ? (numberOfProductsByType.filter(
            (p) => p.title === title
          ) as Product[] & {
            kolicina: number;
          })
        : numberOfProductsByType
    );
    //ak je akcja onda filter produkta po akciji
    setShowTip(false);
    setVrstaZivotinje(
      title !== 'све'
        ? (numberOfProductsByType.filter(
            (p) => p.title === title
          ) as Product[] & {
            kolicina: number;
          })
        : []
    );
    setPagination({ ...pagination, page: 1 });
  };
  return (
    <div className="bg-white p-2 shadow-md rounded-sm mb-4">
      <ul>
        <span
          className={UL_LIST_STYLE}
          onClick={() => setShowTitles(!showTitles)}
        >
          животиња
          <FaChevronRight
            className={` ${showTitles && CHEVRON_ROTATING_STYLE}`}
          />
        </span>
        {showTitles &&
          titles.map((title, idx) => (
            <li
              onClick={(e) => handleTitleClick(e, title)}
              key={idx}
              className={LI_LIST_STYLE}
            >
              <span>{title}</span>
              <span className="pointer-events-none">
                (
                {title === 'све'
                  ? numberOfProductsByType.length
                  : numberOfProductsByType.filter((u) => u.title === title)
                      .length}
                )
              </span>
            </li>
          ))}
      </ul>
    </div>
  );
};

export const FilterTip = ({
  numberOfProductsByType,
}: {
  numberOfProductsByType: Product[];
}) => {
  const {
    setItems,
    showTip,
    setShowTip,
    vrstaZivotinje,
    vrsteProizvoda,
    setVrsteProizvoda,
    pagination,
    setPagination,
  } = useProductContext();

  useEffect(() => {
    setVrsteProizvoda(
      vrstaZivotinje.length
        ? [...new Set(vrstaZivotinje.map((v) => v.tip)), 'све']
        : []
    );
  }, [vrstaZivotinje]);

  const handleVrsteProizvodaClick = (
    e: React.MouseEvent<HTMLLIElement> & { target: HTMLLIElement }
  ) => {
    setPagination({ ...pagination, page: 1 });
    setItems(
      e.target.textContent && e.target.textContent.includes('све')
        ? vrstaZivotinje
        : vrstaZivotinje.filter(
            (z) => e.target.textContent && e.target.textContent.includes(z.tip)
          )
    );
  };
  return (
    <div className="bg-white p-2 shadow-md rounded-sm mb-4 ">
      <ul>
        <span className={UL_LIST_STYLE} onClick={() => setShowTip(!showTip)}>
          тип производа
          <FaChevronRight className={` ${showTip && CHEVRON_ROTATING_STYLE}`} />
        </span>
        {/* za proizvodi ne bi isla vrsta zivotinja i tip vec treba da se gadjaju products i title */}
        {showTip &&
          vrsteProizvoda.map((tip, idx) => (
            <li
              onClick={handleVrsteProizvodaClick}
              key={idx}
              className={LI_LIST_STYLE}
            >
              <span>{tip}</span>
              <span className=" pointer-events-none ">
                (
                {tip === 'све'
                  ? numberOfProductsByType.length
                  : numberOfProductsByType.filter((u) => tip.includes(u.tip))
                      .length}
                )
              </span>
            </li>
          ))}
        {/* {showTip && !vrsteProizvoda.length && (
        <p className='text-base font-normal lowercase'>изабери животињу</p>
      )} */}
      </ul>
    </div>
  );
};

export const FilterSort = () => {
  const { setItems, items, showfilters, setShowFilters } = useProductContext();

  return (
    <div className="bg-white p-2 shadow-md mb-4 rounded-sm ">
      <ul>
        <span
          className={UL_LIST_STYLE}
          onClick={() => setShowFilters(!showfilters)}
        >
          филтери
          <FaChevronRight
            className={` ${showfilters && CHEVRON_ROTATING_STYLE}`}
          />
        </span>
        {showfilters && (
          <>
            <li
              className={LI_LIST_STYLE}
              onClick={() =>
                setItems(
                  items
                    .sort((a: any, b: any) => a.price - b.price)
                    .map((r) => r)
                )
              }
            >
              цена растуће
            </li>
            <li
              className={LI_LIST_STYLE}
              onClick={() =>
                setItems(
                  items
                    .sort((a: any, b: any) => b.price - a.price)
                    .map((g) => g)
                )
              }
            >
              цена опадајуће
            </li>
          </>
        )}
      </ul>
    </div>
  );
};
