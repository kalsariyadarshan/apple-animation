import React from 'react';
import Hero from './Hero';
import StickyContainer from './StickyContainer';
import UnderTheHood from './UnderTheHood';
import About from './About';
import BuiltForEnterprise from './BuiltForEnterprise';
import WhatSetsUsApart from './WhatSetsUsApart';
import Footer from '@/layouts/Footer';
import SectionContent from './SectionContent';
import Container from '@/layouts/Container';
import Thunder from '../icons/Thunder';

const StickySection = () => {
  const calHeights = [`1200px`, `1200px`, `1200px`, `10vh`];
  return (
    <>
      <div>
        <StickyContainer
          calHeights={`calc(${calHeights[0]} + ${calHeights[1]} + ${calHeights[2]} + ${calHeights[3]})`}
          before={<Before />}
          primary={<Primary />}
          after={<After calHeights={calHeights} />}
        />
      </div>
    </>
  );
};

export default StickySection;

const Before = () => {
  return (
    <SectionContent>
      <div className="bg-base-100 bg-section-background bg-center bg-no-repeat py-14 md:pb-[182px] md:pt-32 xl:relative xl:mb-[580px]">
        <Container className="content">
          <div className="mx-auto flex w-full max-w-2xl flex-col items-center justify-center gap-4">
            <div className="mb-1 flex flex-row items-center gap-1 rounded-3xl bg-base-125 px-6 py-2">
              <p className="text-center text-sm font-medium uppercase leading-5 tracking-[1px] text-white">
                EOS - Speed meets Security
              </p>
              <Thunder />
            </div>

            <div>
              <p className="bg-text-light bg-clip-text text-center text-3xl font-bold -tracking-[1.2px] text-transparent md:text-6xl md:leading-19">
                <span className="bg-text-primary bg-clip-text text-transparent">
                  Fast Security Assistance
                </span>{' '}
                Every Step Of The Way
              </p>
            </div>

            <div>
              <p className="text-center text-base font-medium leading-7 text-base-75 md:text-xl">
                We're a team of experienced designers, developers, <br /> and
                marketers, passionate about delivering exceptional digital
                solutions.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </SectionContent>
  );
};

const Primary = () => {
  return (
    <div
      id={'bio'}
      style={{
        width: '100%',
        height: '100%',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      <div
        data-lax-preset={'scaleInFadeOut'}
        className="icon"
        style={{
          maxWidth: 1440,
          width: '100%',
          top: '50%',
          left: '50%',
          position: 'absolute',
          zIndex: 3,
          transformOrigin: '0 0',
          transform: `translate3d(-50%, -50%, 0)`,
        }}
      >
        <Hero />
      </div>
    </div>
  );
};

const After = (props: any) => {
  const { calHeights } = props;
  return (
    <div
      style={{
        height: calHeights[3],
      }}
    >
      <UnderTheHood />
      <WhatSetsUsApart />
      <BuiltForEnterprise />
      <About />
      <Footer />
    </div>
  );
};
