import React from 'react';

import Container from './Container';
import Link from 'next/link';
import ThunderIcon from '@/components/icons/ThunderIcon';
import FacebookIcon from '@/components/icons/FacebookIcon';
import LinkedInIcon from '@/components/icons/LinkedInIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import Logo from '@/components/icons/logo';

const Footer = () => {
  return (
    <footer className="bg-base-100 py-10 font-Alliance">
      <Container>
        <div className="flex w-full flex-col justify-between pb-4 sm:flex-row">
          <div className="mx-auto sm:mx-0 lg:w-full lg:max-w-[420px]">
            <div className="mx-auto mb-18px sm:mx-0">
              <Logo />
            </div>
            <div className="flex items-center gap-1">
              <p className="text-base font-semibold uppercase text-white">
                Speed meets security
              </p>
              <ThunderIcon />
            </div>
            <div className="mx-auto my-4 flex w-full items-center justify-center gap-4 sm:mx-0 sm:justify-start md:my-8">
              <FacebookIcon />
              <LinkedInIcon />
              <TwitterIcon />
            </div>
          </div>
          <div className="mx-auto flex gap-10 sm:mx-0 sm:gap-28">
            <div className="flex flex-col gap-6 text-base font-medium">
              <h4 className="font-Alliance leading-4 text-white">LEGAL</h4>
              <div className="flex flex-col gap-3">
                <Link className="leading-6 text-gray-200/60" href={''}>
                  Privacy Policy
                </Link>
                <Link className="leading-6 text-gray-200/60" href={''}>
                  Terms Of Use
                </Link>
              </div>
            </div>
            <div className="flex flex-col gap-6 text-base font-medium">
              <h4 className="font-Alliance leading-4 text-white">COMPANY</h4>
              <div className="flex flex-col gap-3">
                <Link className="leading-6 text-gray-200/60" href={''}>
                  Home
                </Link>
                <Link className="leading-6 text-gray-200/60" href={''}>
                  Careers
                </Link>
                <Link className="leading-6 text-gray-200/60" href={''}>
                  Contact Sales
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-8 border-b border-[rgb(255,255,255,0.08)]">
          <form
            action=""
            className="mx-auto mb-6 flex justify-center gap-2 md:justify-start"
          >
            <input
              type="text"
              className="rounded-xl bg-base-200 p-3 text-base font-medium text-gray-100 outline-none md:w-full md:max-w-xs"
              placeholder="work@email.com"
            />
            <button className="rounded-xl bg-gray-200 p-3 text-base font-medium text-base-100 outline-none">
              Sign Up
            </button>
          </form>
        </div>
        <div>
          <p className="text-center text-base font-medium leading-4 text-white/60 md:text-left">
            Copyright © 2023 EOS Security Inc.
          </p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
