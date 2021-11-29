import React, { useEffect } from 'react';

import { useAtom } from 'jotai';

import GeneralInfos from '../components/GeneralInfos';
import ListInfos from '../components/ListInfos';
import SiteQrCode from '../components/SiteQrCode';
import Layout from '../layout/Layout';
import { Meta } from '../layout/Meta';
import { displayAtom } from '../store/display';

let resizeTimer: ReturnType<typeof setTimeout>;

const Index = () => {
  const [myDisplay, setDisplay] = useAtom(displayAtom);

  function WithOrWitouthLists() {
    if (!myDisplay.isMini) {
      return (
        <>
          <ListInfos isFormation={true} />
          <GeneralInfos />
          <ListInfos isFormation={false} />
        </>
      );
    }

    return <GeneralInfos />;
  }

  useEffect(() => {
    function onResize() {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => {
        const width = window.innerWidth;
        setDisplay({ isOnlyLogo: width <= 1024, isMini: width <= 800 });
      }, 250);
    }

    window.addEventListener('resize', onResize);

    return function cleanup() {
      window.removeEventListener('resize', onResize);
    };
  });

  return (
    <Layout
      meta={
        <Meta
          title="Next.js Boilerplate Presentation"
          description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
        />
      }
    >
      <div className="flex col-auto">
        <WithOrWitouthLists />
      </div>

      <SiteQrCode />
    </Layout>
  );
};

export default Index;
