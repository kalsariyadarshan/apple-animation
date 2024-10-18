import Container from '@/layouts/Container';
import Card from './card';
import { WHAT_SETS_UP_APART } from '@/constatns';

const WhatSetsUsApart = () => {
  return (
    <div className="mb-20 font-Alliance md:mb-[130px]">
      <Container>
        <div className="mx-auto mb-10 max-w-[693px] md:mb-16">
          <div className="flex h-auto flex-col items-center justify-center md:mb-4">
            <span className="text-2xl font-bold leading-10 text-white/70 md:text-5xl md:!leading-19">
              What sets us apart
            </span>
          </div>
          <p className="text-center text-base font-medium text-base-75/60 md:mb-16 md:max-w-2xl md:text-xl md:leading-7">
            We're a team of experienced designers, developers,
            <br className="hidden lg:block" /> and marketers, passionate about
            delivering exceptional digital solutions.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 grid-rows-6 items-center gap-5 md:grid-cols-2 md:grid-rows-3 lg:grid-cols-3 lg:grid-rows-2">
          {WHAT_SETS_UP_APART.map((item) => (
            <Card
              img={item.img}
              headding={item.headding}
              description={item.description}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default WhatSetsUsApart;
