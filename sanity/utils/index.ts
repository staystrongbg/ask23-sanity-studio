import { Product } from '@/@types';
import { client } from '../sanity-client';
export async function getProducts({
  query,
}: {
  query: string;
}): Promise<Product[]> {
  return await client.fetch(query);
}
