import React, { ReactNode } from 'react';

import { Footer } from './Footer';
import { Header } from './Header';

type Props = {
  meta: ReactNode;
  children: ReactNode;
};

const Layout = ({ meta, children }: Props) => (
  <>
    {meta}
    <Header />
    <div className="container">{children}</div>
    <Footer />
  </>
);

export default Layout;
