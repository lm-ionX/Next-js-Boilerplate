import React from 'react';

import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline';
import { useAtom } from 'jotai';
import Image from 'next/image';

import { cvAtom } from '../store/cv';
import { displayAtom } from '../store/display';
import { modalAtom } from '../store/modal';
import { IFormation, IJob } from '../utils/interfaces';
import { getDates } from '../utils/utils';

type MyProps = {
  isFormation: boolean;
};

type Props = {
  jobOrFormation: IJob | IFormation;
};

const ListInfos = ({ isFormation }: MyProps) => {
  const [myCv] = useAtom(cvAtom);
  const [myDisplay] = useAtom(displayAtom);
  const [, setMyModal] = useAtom(modalAtom);

  function onItemClick(data: IJob | IFormation) {
    setMyModal({ open: true, isFormation, jobOrFormation: data });
  }

  function OnlyImageDisplay(prop: Props) {
    const { jobOrFormation } = prop;

    return (
      <div
        className={
          myDisplay.isMini
            ? 'flex items-center px-4 py-4 sm:px-4'
            : 'px-4 py-4 sm:px-4'
        }
      >
        <div
          className={
            myDisplay.isMini ? 'flex items-center flex-auto min-w-0' : 'min-w-0'
          }
        >
          <div className={myDisplay.isMini ? 'flex-shrink-0' : ''}>
            <Image
              className="w-12 h-12"
              src={
                isFormation
                  ? (jobOrFormation as IFormation).school.imageUrl
                  : (jobOrFormation as IJob).company.imageUrl
              }
              alt={
                isFormation
                  ? (jobOrFormation as IFormation).school.name
                  : (jobOrFormation as IJob).company.name
              }
              width={myDisplay.isMini ? 50 : 100}
              height={myDisplay.isMini ? 50 : 100}
            />
          </div>
        </div>
      </div>
    );
  }

  function FullDisplay(prop: Props) {
    const { jobOrFormation } = prop;

    if (isFormation) {
      const formation = jobOrFormation as IFormation;

      return (
        <div className="flex items-center px-4 py-4 group sm:px-4">
          <div className="flex-shrink-0">
            <Image
              className="w-12 h-12"
              src={formation.school.imageUrl}
              alt={formation.school.name}
              width={myDisplay.isMini ? 40 : 60}
              height={myDisplay.isMini ? 40 : 60}
            />
          </div>
          <div className="flex items-center flex-auto min-w-0">
            <div className="flex-auto min-w-0 px-4 md:gap-4">
              <div className="hidden text-center md:block">
                <p className="text-sm font-medium text-indigo-600 truncate">
                  {formation.school.name}
                </p>
                <p className="text-sm text-gray-900">
                  {getDates(formation.bYear, formation.eYear)}
                </p>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <ChevronRightIcon
              className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:animate-ping"
              aria-hidden="true"
            />
          </div>
        </div>
      );
    }

    const job = jobOrFormation as IJob;

    return (
      <div className="flex items-center px-4 py-4 group sm:px-4">
        <div className="hidden md:block">
          <ChevronLeftIcon
            className="w-5 h-5 text-gray-400 group-hover:text-indigo-600 group-hover:animate-ping"
            aria-hidden="true"
          />
        </div>
        <div className="flex items-center flex-auto min-w-0">
          <div className="flex-auto min-w-0 px-4 md:gap-4">
            <div className="hidden text-center md:block">
              <p className="text-sm font-medium text-indigo-600 truncate">
                {job.company.name}
              </p>
              <p className="text-sm text-gray-900">
                {getDates(job.worker.bYear, job.worker.eYear)}
              </p>
            </div>
          </div>
          <div className="flex-shrink-0">
            <Image
              className="w-12 h-12"
              src={job.company.imageUrl}
              alt={job.company.name}
              width={myDisplay.isMini ? 40 : 60}
              height={myDisplay.isMini ? 40 : 60}
            />
          </div>
        </div>
      </div>
    );
  }

  function Display() {
    let jobsOrFormations: Array<IFormation | IJob>;

    if (isFormation) {
      jobsOrFormations = myCv.cvFormations;
    } else {
      jobsOrFormations = myCv.cvJobs;
    }

    if (myDisplay.isMini) {
      return (
        <>
          <ul
            role="list"
            className="inline-block max-w-md mx-8 mt-4 bg-white divide-x divide-gray-200 shadow sm:px-0 sm:rounded-md"
          >
            {jobsOrFormations.map((jobOrFormation) => (
              <li
                key={
                  isFormation
                    ? (jobOrFormation as IFormation).school.name
                    : (jobOrFormation as IJob).company.name
                }
                className="inline-block"
              >
                <div
                  className="hover:bg-gray-50 hover:cursor-pointer"
                  onClick={() => onItemClick(jobOrFormation)}
                >
                  {myDisplay.isOnlyLogo ? (
                    <OnlyImageDisplay jobOrFormation={jobOrFormation} />
                  ) : (
                    <FullDisplay jobOrFormation={jobOrFormation} />
                  )}
                </div>
              </li>
            ))}
          </ul>
        </>
      );
    }

    return (
      <>
        <ul
          role="list"
          className="h-full max-w-sm m-8 overflow-hidden bg-white divide-y divide-gray-200 shadow sm:rounded-md"
        >
          {jobsOrFormations.map((jobOrFormation) => (
            <li
              key={
                isFormation
                  ? (jobOrFormation as IFormation).school.name
                  : (jobOrFormation as IJob).company.name
              }
            >
              <div
                className="has-tooltip hover:bg-gray-50 hover:cursor-pointer"
                onClick={() => onItemClick(jobOrFormation)}
              >
                <span className="p-1 px-4 mx-2 mt-2 text-xs text-indigo-500 bg-gray-100 rounded-lg shadow-lg tooltip">
                  {isFormation
                    ? `${
                        (jobOrFormation as IFormation).school.name
                      } @ ${getDates(
                        (jobOrFormation as IFormation).bYear,
                        (jobOrFormation as IFormation).eYear
                      )}`
                    : `${(jobOrFormation as IJob).company.name} @ ${getDates(
                        (jobOrFormation as IJob).worker.bYear,
                        (jobOrFormation as IJob).worker.eYear
                      )}`}
                </span>
                {myDisplay.isOnlyLogo ? (
                  <OnlyImageDisplay jobOrFormation={jobOrFormation} />
                ) : (
                  <FullDisplay jobOrFormation={jobOrFormation} />
                )}
              </div>
            </li>
          ))}
        </ul>
      </>
    );
  }

  return (
    <>
      <Display />
    </>
  );
};

export default ListInfos;
