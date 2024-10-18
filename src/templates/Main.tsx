import type { ReactNode } from 'react';

import Header from '@/layouts/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  className?: string;
};

const Main = (props: IMainProps) => {
  return (
    <div className="font-roboto w-full text-gray-700 antialiased">
      {props.meta}

      <Header />
      <main className="text-xl">{props.children}</main>
    </div>
  );
};

export { Main };
