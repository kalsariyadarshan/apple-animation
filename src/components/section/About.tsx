import Container from '@/layouts/Container';
import LeftLine from '../icons/LeftLine';
import RightLine from '../icons/RightLine';
import Marquee from 'react-fast-marquee';
import Turbotax from '../icons/Mraquee/Turbotax';
import CreditKarma from '../icons/Mraquee/CreditKarma';
import QuickBooks from '../icons/Mraquee/QuickBooks';
import Intuit from '../icons/Mraquee/Intuit';
import MailChimp from '../icons/Mraquee/MailChimp';
import Apple from '../icons/Mraquee/Apple';
import BishopFox from '../icons/Mraquee/BishopFox';

const About = () => {
  return (
    <div className="py-10 font-Alliance">
      <Container>
        <div className="mb-3 flex items-center justify-center gap-8 md:mb-5">
          <LeftLine />
          <p className="text-sm font-bold text-white">ABOUT US</p>
          <RightLine />
        </div>
        <div>
          <div className="mb-2 flex h-auto flex-col items-center justify-center md:mb-4">
            <span className="flex gap-1 bg-text-primary bg-clip-text text-2xl font-bold text-transparent md:gap-2 md:text-5xl">
              Built with{' '}
              <img
                src="/assets/images/heartEmoji.png"
                className="my-2 h-auto w-4 md:my-3 md:w-8"
                alt=""
              />{' '}
              by security
            </span>
            <span className="text-2xl font-bold text-white/70 md:text-5xl">
              engineers for security team
            </span>
          </div>
          <p className="text-center text-base font-medium text-base-75 md:text-xl md:leading-7">
            We have been there and done that !
          </p>
        </div>

        <div className="relative flex">
          <img
            className="absolute z-10 hidden h-full w-40 md:block"
            src="assets/images/marqee/shadowLeft.png"
            alt=""
          />
          <Marquee>
            <div className="mx-auto my-16 flex items-center justify-center gap-16 md:my-32">
              <Turbotax />
              <CreditKarma />
              <QuickBooks />
              <Intuit />
              <MailChimp />
              <Apple />
              <BishopFox />
            </div>
          </Marquee>
          <img
            src="assets/images/marqee/shadowRight.png"
            className="absolute right-0 z-10 hidden h-full w-40 md:block"
            alt=""
          />
        </div>
      </Container>
    </div>
  );
};

export default About;
