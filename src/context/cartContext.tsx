'use client';
import { useRouter } from 'next/router';
import { createContext, useState, useContext } from 'react';
import products from '../../products.json';
import { Product } from '../@types';

type CartContextProps = {
  proizvodiKorpa: Product[];
  setProizvodiKorpa: any;
  cart: boolean;
  setCart: any;
  removeItemFromCart: (id: string) => void;
  dodajProizvodUKorpu: (product: Product) => void;
  kolicinaInput: number;
  setKolicinaInput: any;
  shakeThatCart: () => void;
  shake: boolean;
  setShake: any;
  add: (arr: Product[], tempP: Product) => Product[];
};

export const CartContext = createContext<CartContextProps>({
  proizvodiKorpa: [],
  setProizvodiKorpa: () => {},
  cart: false,
  setCart: () => {},
  removeItemFromCart: () => {},
  dodajProizvodUKorpu: (product: Product) => {},
  kolicinaInput: 1,
  setKolicinaInput: () => {},
  shakeThatCart: () => {},
  shake: false,
  setShake: () => {},
  add: () => [],
});

export const CartContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [proizvodiKorpa, setProizvodiKorpa] = useState<Product[] | []>([]);
  const [cart, setCart] = useState(false);
  const removeItemFromCart = (id: string) => {
    proizvodiKorpa &&
      setProizvodiKorpa(proizvodiKorpa.filter((item) => item._id !== id));
    // localStorage.removeItem('korpa');
  };

  //shake cart animation
  const [shake, setShake] = useState(false);

  const shakeThatCart = () => {
    setShake(true);
    setTimeout(() => setShake(false), 1000);
  };
  // input number of items to add to cart
  const [kolicinaInput, setKolicinaInput] = useState(1);

  const dodajProizvodUKorpu = (product: Product) => {
    const tempProduct = { ...product, kolicina: kolicinaInput };
    add(proizvodiKorpa, tempProduct);
    setKolicinaInput(1);
    shakeThatCart();
    // localStorage.setItem('korpa', JSON.stringify(tempProduct));
    //mora da bude push u arr ovako ako samo setujes on gazi prethodni unos i cuva samo posslednji
    // setProizvodiKorpa(proizvodiKorpa.map((p) => p));
  };

  function add(arr: Product[] | [], tempP: Product) {
    // function (return index if match / -1 if no match
    let indexFound = arr.findIndex((element) => element._id === tempP._id);

    if (indexFound < 0) setProizvodiKorpa([...arr, tempP]);
    if (indexFound >= 0) {
      if (proizvodiKorpa !== null) {
        proizvodiKorpa[indexFound].kolicina += +kolicinaInput;
        // +proizvodiKorpa[indexFound].kolicina + +kolicinaInput;
      }
    }

    return arr;
  }
  return (
    <CartContext.Provider
      value={{
        proizvodiKorpa,
        setProizvodiKorpa,
        cart,
        setCart,
        removeItemFromCart,
        shake,
        setShake,
        shakeThatCart,
        kolicinaInput,
        setKolicinaInput,
        dodajProizvodUKorpu,
        add,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
