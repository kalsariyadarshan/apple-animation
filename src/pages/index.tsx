import StickySection from '@/components/section/StickySection';
import { Meta } from '@/layouts/Meta';
import { Main } from '@/templates/Main';
import React from 'react';

const Index = () => {
  return (
    <>
      <Main meta={<Meta title="" description="" />}>
        <StickySection />
      </Main>
    </>
  );
};

export default Index;
