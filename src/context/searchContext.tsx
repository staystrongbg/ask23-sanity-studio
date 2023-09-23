'use client';
import { useRouter, usePathname } from 'next/navigation';
import { createContext, useState, useContext } from 'react';
import { Product } from '../@types';

type SearchProps = {
  searchProducts: Product[];
  setSearchProducts: any;
  isSearching: boolean;
  setIsSearching: any;
  searchTerm: string;
  setSearchTerm: any;
};
export const SearchContext = createContext<SearchProps>({
  searchProducts: [],
  setSearchProducts: () => {},
  isSearching: false,
  setIsSearching: () => {},
  searchTerm: '',
  setSearchTerm: () => {},
});

export const SearchContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [searchProducts, setSearchProducts] = useState<Product[]>([]); // state for searchInput only
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const router = useRouter();
  const pathname = usePathname();

  return (
    <SearchContext.Provider
      value={{
        searchProducts,
        setSearchProducts,
        isSearching,
        setIsSearching,
        searchTerm,
        setSearchTerm,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () => {
  return useContext(SearchContext);
};
