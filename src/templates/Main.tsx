import { ReactNode } from 'react';

import { Footer } from '../layout/Footer';
import { Header } from '../layout/Header';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="w-full px-1 antialiased text-gray-700">
    {props.meta}

    <div className="max-w-screen-md mx-auto">
      <Header />

      <div className="py-5 text-xl content">{props.children}</div>

      <Footer />
    </div>
  </div>
);

export { Main };
