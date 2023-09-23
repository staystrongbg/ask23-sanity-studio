'use client';
import {
  useContext,
  createContext,
  useState,
  useEffect,
  SetStateAction,
} from 'react';
import { useRouter, usePathname, useParams } from 'next/navigation';
import products from '../../products.json';
import { Product } from '../@types';

type ProductContext = {
  offset: number | null;
  setOffset: React.Dispatch<SetStateAction<number | null>>;
  showTitles: boolean;
  setShowTitles: React.Dispatch<SetStateAction<boolean>>;
  showfilters: boolean;
  setShowFilters: React.Dispatch<SetStateAction<boolean>>;
  showTip: boolean;
  setShowTip: React.Dispatch<SetStateAction<boolean>>;
  tip: string[];
  setTip: React.Dispatch<SetStateAction<string[]>>;
  trenutnaAkcija: {
    tekst: string;
  };
  titles: string[];
  setVrstaZivotinje: React.Dispatch<SetStateAction<Product[]>>;
  vrstaZivotinje: Product[];
  vrsteProizvoda: string[];
  setVrsteProizvoda: React.Dispatch<SetStateAction<string[]>>;
  items: Product[];
  setItems: React.Dispatch<SetStateAction<Product[]>>;
  product: Product | null;
  setProduct: React.Dispatch<SetStateAction<Product | null>>;
  similarProduct: boolean;
  setSimilarProduct: React.Dispatch<SetStateAction<boolean>>;
  pagination: Pagination;
  setPagination: React.Dispatch<SetStateAction<Pagination>>;
};

type Pagination = {
  page: number;
  perPage: number;
};

export const ProductContext = createContext<ProductContext>({
  offset: null,
  setOffset: () => {},
  showTitles: false,
  setShowTitles: () => {},
  showfilters: false,
  setShowFilters: () => {},
  showTip: false,
  setShowTip: () => {},
  tip: [],
  setTip: () => {},
  trenutnaAkcija: {
    tekst: `ПОПУСТ НА КОЛИЧИНУ! 10% попуста за сваки џак хране.`,
  },
  titles: [],
  setVrstaZivotinje: () => {},
  vrstaZivotinje: [],
  vrsteProizvoda: [],
  setVrsteProizvoda: () => {},
  items: [],
  setItems: () => {},
  product: null,
  setProduct: () => {},
  similarProduct: false,
  setSimilarProduct: () => {},
  pagination: {
    page: 1,
    perPage: 16,
  },
  setPagination: () => {},
});

export const ProductContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const router = useRouter();
  const { id } = useParams();
  const pathname = usePathname();

  const [offset, setOffset] = useState<number | null>(null);

  const [showTitles, setShowTitles] = useState(false);
  const [showfilters, setShowFilters] = useState(false);
  const [showTip, setShowTip] = useState(false);
  const [tip, setTip] = useState(products.map((tip) => tip.tip));
  const [titles] = useState([...new Set(products.map((v) => v.title)), 'све']);
  const [vrstaZivotinje, setVrstaZivotinje] = useState<Product[]>([]);
  const [vrsteProizvoda, setVrsteProizvoda] = useState<string[]>([]);
  const [items, setItems] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [similarProduct, setSimilarProduct] = useState(false);

  type Akcija = {
    tekst: string;
  };
  //trenutno na akciji Index
  const [trenutnaAkcija] = useState<Akcija>({
    tekst: `ПОПУСТ НА КОЛИЧИНУ! 10% попуста за сваки џак хране.`,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  const [pagination, setPagination] = useState<Pagination>({
    page: 1,
    perPage: 16,
  });

  //reset state on page load
  useEffect(() => {
    setShowFilters(false);
    setShowTitles(false);
    setVrsteProizvoda([]);
    setShowTip(false);
    setPagination({ page: 1, perPage: 16 });
    setSimilarProduct(false);
  }, [pathname]);

  return (
    <ProductContext.Provider
      value={{
        offset,
        setOffset,
        showTitles,
        setShowTitles,
        titles,
        setShowFilters,
        showfilters,
        items,
        showTip,
        setShowTip,
        tip,
        setTip,
        vrstaZivotinje,
        setVrstaZivotinje,
        vrsteProizvoda,
        setVrsteProizvoda,
        trenutnaAkcija,
        setItems,
        pagination,
        setPagination,
        setProduct,
        product,
        setSimilarProduct,
        similarProduct,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  return useContext(ProductContext);
};
