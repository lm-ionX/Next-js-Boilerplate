import React, { useRef } from 'react';

import { Dialog, Transition } from '@headlessui/react';
import { DocumentDownloadIcon } from '@heroicons/react/outline';
import { useAtom } from 'jotai';
import Image from 'next/image';

import { modalAtom } from '../store/modal';
import { IJob, IFormation } from '../utils/interfaces';
import { getDates } from '../utils/utils';

const ModalMoreInfos = () => {
  const [myModal, setMyModal] = useAtom(modalAtom);
  const cancelButtonRef = useRef(null);

  function ImageWithLink() {
    if (
      !myModal.isFormation &&
      myModal.jobOrFormation !== null &&
      (myModal.jobOrFormation as IJob).company &&
      (myModal.jobOrFormation as IJob).company.website !== ''
    ) {
      return (
        <a
          href={(myModal.jobOrFormation as IJob).company.website}
          target="_blank"
          rel="noreferrer"
        >
          <Image
            src={(myModal.jobOrFormation as IJob).company.imageUrl}
            alt={(myModal.jobOrFormation as IJob).company.name}
            width={200}
            height={200}
          />
        </a>
      );
    }
    if (myModal.jobOrFormation !== null) {
      if (
        (myModal.isFormation &&
          (myModal.jobOrFormation as IFormation).school) ||
        (!myModal.isFormation && (myModal.jobOrFormation as IJob).company)
      )
        return (
          <Image
            src={
              myModal.isFormation
                ? (myModal.jobOrFormation as IFormation).school.imageUrl
                : (myModal.jobOrFormation as IJob).company.imageUrl
            }
            alt={
              myModal.isFormation
                ? (myModal.jobOrFormation as IFormation).school.name
                : (myModal.jobOrFormation as IJob).company.name
            }
            width={200}
            height={200}
          />
        );
    }

    return <div></div>;
  }

  function TasksOrButton() {
    if (myModal.isFormation) {
      return (
        <button
          type="button"
          className="inline-flex justify-center w-8 h-8 mt-8 text-base font-medium text-white bg-blue-600 border border-transparent rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 sm:text-sm"
        >
          <DocumentDownloadIcon />
        </button>
      );
    }
    return (
      <div className="pt-5">
        <ul
          role="list"
          className="grid grid-cols-1 gap-2 mt-3 sm:gap-2 sm:grid-cols-2 lg:grid-cols-4"
        >
          {(myModal.jobOrFormation as IJob)?.worker?.tasks.map((task) => (
            <li key={task} className="flex col-span-6 rounded-md shadow-sm">
              <div className="flex items-center justify-between flex-1 bg-white border border-gray-200 rounded ">
                <div className="flex-1 px-4 py-2 text-sm">{task}</div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return (
    <>
      <Transition show={myModal.open}>
        <Dialog
          open={myModal.open}
          initialFocus={cancelButtonRef}
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setMyModal({ ...myModal, open: false })}
        >
          <div className="flex items-end justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75" />
            </Transition.Child>
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
              &#8203;
            </span>

            <Transition.Child
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <div className="inline-block px-4 pt-5 pb-4 overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
                <div v-if="isFormation">
                  <div className="flex items-center justify-center w-full h-full mx-auto mb-6 ">
                    <ImageWithLink />
                  </div>
                  <div className="text-center">
                    <Dialog.Title
                      as="h3"
                      className="text-lg font-medium leading-6 text-gray-900"
                    >
                      {myModal.isFormation
                        ? (myModal.jobOrFormation as IFormation)?.school?.name
                        : (myModal.jobOrFormation as IJob)?.company?.name}
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        {myModal.isFormation
                          ? getDates(
                              (myModal.jobOrFormation as IFormation)?.bYear,
                              (myModal.jobOrFormation as IFormation)?.eYear
                            )
                          : (myModal.jobOrFormation as IJob)?.company?.email}
                      </p>
                      <p className="text-sm text-gray-500">
                        {myModal.isFormation
                          ? (myModal.jobOrFormation as IFormation)?.school
                              ?.place
                          : (myModal.jobOrFormation as IJob)?.worker?.title}
                      </p>
                      <p className="mt-3 text-sm text-gray-800">
                        {myModal.isFormation
                          ? (myModal.jobOrFormation as IFormation)?.school
                              ?.title
                          : getDates(
                              (myModal.jobOrFormation as IJob)?.worker?.bYear,
                              (myModal.jobOrFormation as IJob)?.worker?.eYear
                            )}
                      </p>
                      <TasksOrButton />
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  <button
                    ref={cancelButtonRef}
                    type="button"
                    className="inline-flex justify-center w-full px-4 py-2 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 sm:text-sm"
                    onClick={() => setMyModal({ ...myModal, open: false })}
                  >
                    Fermer
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default ModalMoreInfos;
