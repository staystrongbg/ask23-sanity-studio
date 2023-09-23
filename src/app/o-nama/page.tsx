// export const dynamic = 'force-static';
/* eslint-disable @next/next/no-img-element */
const About = () => {
  return (
    <>
      <section className="py-20 mb-20 w-full ">
        <div className="lg:w-5/6 m-auto w-full lg:p-0  p-2 lg:flex-row flex flex-col items-center  justify-center gap-4 lg:gap-8 ">
          <div className="flex flex-col items-start  justify-start lg:w-1/3 w-5/6  ">
            <h1 className="text-left z-10  text-6xl font-bold text-sky-500 mb-6">
              АСК23
            </h1>
            <p className="text-lg text-gray-800">
              Из велике љубави према животињама родила се жеља да се отвори
              продавница за куће љубимце која ће у понуди имати све што наше
              љубимце чини ситим и срећним.
            </p>
          </div>
          <div
            className={`grid place-items-center  relative  rounded-t-full rounded-b-full bg-transparent`}
          >
            <div className="bg-slate-700 w-[101%] rounded-t-3xl rounded-b-3xl top-2 left-2 transition-all sm:top-6 sm:left-6 h-[101%] absolute  "></div>
            <img
              placeholder="blur"
              src="/radnja-spolja.jpg"
              alt=""
              width={400}
              height={400}
              className="rounded-t-3xl rounded-b-3xl z-10 "
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
