import Link from 'next/link';
import { links } from '../utils';
const Links = ({ text_color }: { text_color: string }) => {
  return (
    <div className={` gap-4 xl:gap-6 flex z-30 items-center `}>
      {links.map((link, i) => (
        <Link
          key={i}
          href={link.href}
          className={`select-none whitespace-nowrap ${text_color} border-b-4 border-transparent w-fit hover:border-orange-600  sm:text-sm md:text-base lg:text-[16px]
        `}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
};

export default Links;
