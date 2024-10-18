import Container from '@/layouts/Container';
import React from 'react';
import { SECTION_CONTENT } from '@/constatns';

const ScrollSection = ({
  img,
  num,
  imgCode,
}: {
  img: string;
  num: number;
  imgCode: string;
}) => {
  return (
    <>
      <div className="mx-auto flex w-full justify-center py-10 xl:py-0">
        <Container className="top-[-260px] flex flex-col justify-center xl:absolute xl:flex-row">
          <div className="flex w-full flex-col gap-5 xl:w-[45%] xl:max-w-[480px]">
            <div className="grid grid-cols-1 grid-rows-4 gap-5 md:grid-cols-2 md:grid-rows-2 xl:grid-cols-1 xl:grid-rows-4">
              {SECTION_CONTENT &&
                SECTION_CONTENT.length > 0 &&
                SECTION_CONTENT?.map(({ title }, index) => (
                  <div
                    className={`${num === index && 'linear-gradient-border'}`}
                  >
                    <div className="flex cursor-pointer flex-col justify-start gap-2 rounded-2xl bg-base-185 p-6 pb-[38px]">
                      <div key={index}>
                        <h4 className="text-base font-medium leading-6 text-white">
                          {title}
                        </h4>
                      </div>
                      <div>
                        <p className="text-base font-medium leading-6 text-indigo-200 text-opacity-70">
                          Don’t take it from me:
                          <span
                            className={`${
                              num === index ? ' text-[#9382FF]' : 'text-white'
                            }`}
                          >
                            {' '}
                            @reflectnotes
                          </span>{' '}
                          is magic.
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
          <div className="mx-6 hidden h-134 w-4 xl:block">
            <img src={`/assets/images/${img}`} alt="standing-pattern " />
          </div>
          <div className="mx-auto mt-10 block xl:hidden">
            <img
              src="/assets/images/standingPattern1.png"
              alt="standing-pattern "
            />
          </div>
          <div className="mt-[7%] w-full flex-shrink-0 xl:h-107 xl:w-[45%]">
            <img
              src={`/assets/images/${imgCode}`}
              className="w-full"
              alt="section-Code"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default ScrollSection;
