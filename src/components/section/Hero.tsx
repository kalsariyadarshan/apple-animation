import React, { useEffect, useState } from 'react';
import ScrollSection from './ScrollSection';

const Hero = () => {
  const [num1, setNum1] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      console.log('hh', scrollTop);
      if (scrollTop < 2000) {
        setNum1(3);
      }
      if (scrollTop < 1500) {
        setNum1(2);
      }
      if (scrollTop < 1000) {
        setNum1(1);
      }
      if (scrollTop < 500) {
        setNum1(0);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="relative">
      {num1 === 0 ? (
        <ScrollSection
          img={'standingPatternBox1.png'}
          num={0}
          imgCode={'sectionCode.png'}
        />
      ) : num1 === 1 ? (
        <ScrollSection
          img={'standingPatternBox2.png'}
          num={1}
          imgCode={'shotcode1.png'}
        />
      ) : num1 === 2 ? (
        <ScrollSection
          img={'standingPatternBox3.png'}
          num={2}
          imgCode={'sectionCode.png'}
        />
      ) : (
        <ScrollSection
          img={'standingPatternBox4.png'}
          num={3}
          imgCode={'shotcode1.png'}
        />
      )}
    </div>
  );
};

export default Hero;
