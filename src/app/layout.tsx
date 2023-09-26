import '@/styles/globals.scss';
import type { Metadata } from 'next';
import { ProductContextProvider } from '../context/productContext';
import { SearchContextProvider } from '../context/searchContext';
import { CartContextProvider } from '../context/cartContext';
import { Breadcrumbs, Footer, Topbar, Topnav } from '@/components';
import { alegreya } from './fonts';

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProductContextProvider>
      <SearchContextProvider>
        <CartContextProvider>
          <html lang="sr">
            <body>
              <div className="flex flex-col ">
                <Topbar />
                <Topnav />
                {/* <Breadcrumbs /> */}
                <div className="m-auto w-full  min-h-screen">{children}</div>
                <Footer />
              </div>
            </body>
          </html>
        </CartContextProvider>
      </SearchContextProvider>
    </ProductContextProvider>
  );
}
