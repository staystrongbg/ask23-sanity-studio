import { PortableTextBlock } from 'sanity';

export type Product = {
  _id: string;
  tip: string;
  name: string;
  price: string;
  detail: PortableTextBlock[];
  image: string;
  novo: boolean;
  akcija: boolean;
  title: string;
  link: string;
  kolicina: number;
};
