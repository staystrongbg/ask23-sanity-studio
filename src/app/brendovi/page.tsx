// export const dynamic = 'force-static';
import { H1, P, brands } from '@/components/utils';

import Image from 'next/image';

const Brendovi = () => {
  return (
    <>
      <div className={`wrapper w-full   `}>
        <div className="flex flex-col  xl:w-5/6 w-full m-auto mb-12">
          <H1 className="my-8 text-center">Брендови</H1>

          <P className="m-auto text-center">
            Ово је списак свих брендова које можете наћи код нас.
          </P>

          <section className=" m-auto flex flex-wrap items-center justify-center  gap-8">
            {(brands as string[]).map((brand, idx) => (
              <Image
                key={idx}
                src={brand}
                alt={brand}
                width={300}
                objectFit="contain"
                height={100}
                placeholder="blur"
                blurDataURL={brand}
                loading="eager"
                unoptimized={true}
              />
            ))}
          </section>
        </div>
      </div>
    </>
  );
};

export default Brendovi;
