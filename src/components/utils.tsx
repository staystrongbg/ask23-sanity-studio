//custom styled components! TEST TEST TEST :)
//kategorija stilovi

type ComponentProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLHeadingElement>;
  tabIndex?: number | string;
  width?: string;
};

export const CategoryCard = ({ children, className }: ComponentProps) => {
  return (
    <span
      className={`w-[150px] h-[150px] xl:w-[240px] xl:h-[240px] rounded-lg items-center relative justify-center flex flex-col overflow-hidden hover:shadow-custom hover:scale-110 hover:z-20 transition-all gap-4  ${className}`}
    >
      {children}
    </span>
  );
};

export const CategoryTitle = ({ className, children }: ComponentProps) => {
  return (
    <h3
      className={`${className} xl:text-4xl break-all text-2xl tracking-normal  uppercase head`}
    >
      {children}
    </h3>
  );
};

export const CategoryImgContainer = ({
  children,
  className,
}: ComponentProps) => {
  return <div className={`${className}`}>{children}</div>;
};
//kategorijastilovi

//dropdown icon stilovi
export const ICON_STYLE =
  'bg-gray-50 rounded-full w-8 h-8 items-center  justify-center flex ';
//footer icon style
export const ICON_STYLE_FOOTER = 'bg-gray-700 text-slate-50  rounded-full p-2';

//filteri
export const UL_LIST_STYLE =
  'flex items-center justify-between w-full rounded-md px-4 py-2  cursor-pointer sm:text-base text-sm  text-gray-600 whitespace-nowrap';

export const LI_LIST_STYLE =
  'list-none cursor-pointer text-gray-600  my-3 tracking-wide whitespace-nowrap  ml-4 flex justify-between active:text-orange-400  ';

//filteri kraj

export const CHEVRON_ROTATING_STYLE = 'rotate-90 transition-all';

//array sa zadatom duzinom
export const createArr = (length: number) => [...Array(length).keys()];

export const H1 = ({ children, className = '', onClick }: ComponentProps) => {
  return (
    <h1
      className={`${className}  xl:text-4xl md:text-3xl sm:text-2xl sm:my-20 my-10  uppercase`}
      onClick={onClick}
    >
      {children}
    </h1>
  );
};
export const H2 = ({
  children,
  onClick,
  className,
  tabIndex = '0',
}: ComponentProps) => {
  return (
    <h2
      onClick={onClick}
      tabIndex={tabIndex as number}
      className={` ${className} sm:text-3xl text-2xl uppercase`}
    >
      {children}
    </h2>
  );
};

//tailwind units
export const P = ({ children, width = '2/3', className }: ComponentProps) => {
  return (
    <p
      className={`xl:w-${width}  sm:text-xl text-base w-full border-b sm:py-10 py-5 border-dashed border-gray-500 mb-20 ${className} `}
    >
      {children}
    </p>
  );
};

//grid product list
export const GridContainer = ({ children, className }: ComponentProps) => {
  return (
    <div
      className={` w-5/6 grid ${className} grid-cols-1 sm:grid-cols-2 gap-y-6 xl:gap-y-10 gap-x-2 mt-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-4   `}
    >
      {children}
    </div>
  );
};
//filters container
export const ProductsListWrapper = ({
  children,
  className,
}: ComponentProps) => {
  return (
    <div
      className={`flex md:flex-row flex-col xl:gap-40 gap-20 mb-20 sm:items-start items-center ${className} `}
    >
      {children}
    </div>
  );
};

export const links = [
  { href: '/', name: 'почетна' },
  { href: '/brendovi', name: 'брендови' },
  { href: '/o-nama', name: 'о нама' },
  { href: '/kontakt', name: 'контакт' },
];

//brand logos
//@ts-ignore
function importAll(r) {
  return r.keys().map(r);
}

const getBrandLogo = () => {
  const f = importAll(
    //@ts-ignore
    require.context(
      '../../public/brendovi',
      false,
      /\.(png|jpe?g|JPG|webp|svg)$/
    )
  );
  //@ts-ignore
  return f.map((img) => img.default).map((image) => image.src);
};

export const brands = getBrandLogo();
