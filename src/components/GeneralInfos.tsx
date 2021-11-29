import React from 'react';

import { useAtom } from 'jotai';

import { cvAtom } from '../store/cv';
import { displayAtom } from '../store/display';
import CategoriesTabs from './CategoriesTabs';
import ListInfos from './ListInfos';
import ModalMoreInfos from './ModalMoreInfos';

const GeneralInfos = () => {
  const [myCv] = useAtom(cvAtom);
  const [myDisplay] = useAtom(displayAtom);

  function DisplayMini() {
    return myDisplay.isMini ? (
      <>
        <ListInfos isFormation={true} />
        <ListInfos isFormation={false} />
      </>
    ) : (
      <div></div>
    );
  }

  return (
    <>
      <div className="w-full max-w-lg mx-auto my-8">
        <div className="sm:flex">
          <div className="flex-shrink-0 mb-4 sm:mb-0 sm:mr-4">
            <svg
              className="w-full h-32 text-gray-300 transition-transform duration-500 bg-white border border-gray-300 sm:w-32 hover:scale-110"
              preserveAspectRatio="none"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 200 200"
              aria-hidden="true"
            >
              <path
                vectorEffect="non-scaling-stroke"
                strokeWidth="1"
                d="M0 0l200 200M0 200L200 0"
              />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl font-bold">{myCv.cvGeneral.name}</h2>
            <h4 className="text-lg font-bold text-indigo-500">
              {myCv.cvGeneral.title}
            </h4>
            <p className="mt-1">{myCv.cvGeneral.description}</p>
          </div>
          <DisplayMini />
        </div>
        <CategoriesTabs />
      </div>
      <ModalMoreInfos />
    </>
  );
};

export default GeneralInfos;
