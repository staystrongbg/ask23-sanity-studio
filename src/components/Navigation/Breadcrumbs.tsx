'use client';
import Link from 'next/link';
import crumbPath from '@/hooks/useCrumbPath';
import Crumb from './Crumb';
import { crumbCir } from '@/lib/snippetTranslation';
const Breadcrumbs = () => {
  const { disabled, pathSnippets } = crumbPath();
  const urls = pathSnippets.map((snippet, idx) => {
    let url = `/${snippet}`;
    const path = crumbCir(snippet);
    return (
      <>
        {pathSnippets && path && (
          <Crumb url={url} disabled={disabled} snippet={path} idx={idx} />
        )}
      </>
    );
  });
  return (
    <div className="breadcrumbs sm:w-4/5 w-full m-auto bg-transparent ">
      <div className=" sm:text-base text-sm flex gap-2 text-gray-500 font-thin   p-2  ">
        <Link href="/">почетна</Link>
        {urls.map((url, idx) => (
          <span key={idx}>{url}</span>
        ))}
      </div>
    </div>
  );
};

export default Breadcrumbs;
