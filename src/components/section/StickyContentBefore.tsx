import { useEffect, useState } from 'react';

export default (props: any) => {
  const { children } = props;
  const [num1, setNum1] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;

      setNum1(scrollTop);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <div
      className={`sticky-content__above ${
        num1 < 2780 &&
        'top-[-310px] h-[310px] md:top-[-310px] md:h-[310px] lg:top-[-270px] lg:h-[270px]'
      } `}
      style={
        num1 < 2780
          ? {
              position: 'sticky',
              zIndex: 2,
            }
          : {
              height: `calc((100vh) - (200px / 2))`,
              top: 0,
              right: 0,
              left: 0,
              position: `absolute`,
              zIndex: 2,
            }
      }
    >
      {children}
    </div>
  );
};
