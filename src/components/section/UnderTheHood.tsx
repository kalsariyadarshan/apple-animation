import Container from '@/layouts/Container';
import HoodCard from './HoodCard';
import { UNDER_THE_HOOD_PART } from '@/constatns';

const UnderTheHood = () => {
  return (
    <div className="mb-[130px] mt-0 pt-10 font-Alliance md:-mt-[200px] xl:mt-0">
      <Container>
        <div className="mx-auto mb-12 max-w-[693px] md:mb-16">
          <div className="mb-4 flex h-auto flex-col items-center justify-center">
            <span className="text-2xl font-bold text-white/70 md:text-5xl">
              Under the hood
            </span>
          </div>
          <p className="text-center text-base font-medium leading-7 text-base-75 md:text-xl">
            We're a team of experienced designers, developers,
            <br className="hidden lg:block" /> and marketers, passionate about
            delivering exceptional digital solutions.
          </p>
        </div>
        <div className="mx-auto grid w-full max-w-[1200px] grid-cols-1 grid-rows-6 gap-[40px] md:grid-cols-2 md:grid-rows-3 md:gap-[70px] lg:grid-cols-3 lg:grid-rows-2">
          {UNDER_THE_HOOD_PART.map((item) => (
            <HoodCard
              img={item.img}
              headding={item.headding}
              description={item.description}
              color={item.color}
            />
          ))}
        </div>
      </Container>
    </div>
  );
};

export default UnderTheHood;
