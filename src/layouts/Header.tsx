import React, { useEffect, useState } from 'react';

import Container from './Container';
import Link from 'next/link';
import { NAVIGATION_LINK } from '@/constatns';
import { useRouter } from 'next/router';
import RightArrow from '@/components/icons/RightArrow';
import NavBarSlide from './NavBarSlide';
import MenuIcon from '@/components/icons/MenuIcon';
import CrossIcon from '@/components/icons/CrossIcon';
import Logo from '@/components/icons/logo';
import FormModal from '@/components/Modal/FormModal';
import { useModal } from '@/Context/Modal';

const Header = () => {
  const router = useRouter();
  const { isShowForm, setIsShowForm } = useModal();

  const [isOpenNav, setIsOpenNav] = useState(false);

  useEffect(() => {
    if (isOpenNav || isShowForm) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
    }
  }, [isOpenNav, isShowForm]);

  return (
    <header className="border-b border-base-175 bg-base-100">
      <Container>
        <div className="flex flex-row items-end justify-between py-5 md:items-center ">
          <div className="flex items-center justify-start sm:w-full sm:max-w-[145px] lg:hidden">
            <div>
              {!isOpenNav && (
                <button
                  className="cursor-pointer"
                  onClick={() => setIsOpenNav(true)}
                  aria-label="menu_click"
                >
                  <MenuIcon />
                </button>
              )}
              {isOpenNav && (
                <button
                  className="cursor-pointer"
                  onClick={() => setIsOpenNav(false)}
                  aria-label="cross_click"
                >
                  <CrossIcon className="fill-white" />
                </button>
              )}
            </div>
          </div>

          <div>
            <Link href={'/'}>
              <Logo />
            </Link>
          </div>

          <div className="hidden flex-row items-center gap-12 lg:flex">
            {NAVIGATION_LINK &&
              NAVIGATION_LINK.length > 0 &&
              NAVIGATION_LINK?.map(({ name, path }, index) => (
                <Link
                  key={index}
                  href={path}
                  className={`text-base font-bold leading-normal text-white ${
                    router?.asPath?.includes(path)
                      ? 'opacity-100'
                      : 'opacity-60'
                  }`}
                >
                  {name}
                </Link>
              ))}
          </div>

          <div>
            <button
              className="flex items-center justify-center gap-2 rounded-full bg-button-primary px-5 py-2 text-sm font-medium leading-7 text-white"
              onClick={() => setIsShowForm(true)}
            >
              <span>Contact Us</span> <RightArrow />
            </button>
          </div>
        </div>

        {isShowForm && (
          <div className="">
            <FormModal />
          </div>
        )}
      </Container>
      {isOpenNav && <NavBarSlide />}
    </header>
  );
};

export default Header;
