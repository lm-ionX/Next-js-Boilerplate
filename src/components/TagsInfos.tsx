import React from 'react';

import Image from 'next/image';

import { ISkills } from '../utils/interfaces';
import { classNames } from '../utils/utils';

type MyProps = {
  skills: Array<ISkills>;
};

const TagsInfos = ({ skills }: MyProps) => {
  function handleTagClick(href: string) {
    const isExternalLink = href.startsWith('http');

    if (isExternalLink) {
      if (window) window.open(href, '_blank')?.focus();
    }
  }

  function ImageWithSize({ skill }: { skill: ISkills }) {
    const isExternalLink = skill.href.startsWith('http');
    const hasLogo = !!skill.logo;

    if (hasLogo) {
      if (isExternalLink) {
        return (
          <div className="flex items-center justify-center flex-shrink-0 w-8 text-sm font-medium text-white bg-gray-100 rounded-lg ">
            <Image src={skill.logo} alt={skill.name} width={20} height={20} />
          </div>
        );
      }

      return (
        <div className="flex items-center justify-center flex-shrink-0 w-8 text-sm font-medium text-white bg-gray-100 rounded-lg ">
          <Image src={skill.logo} alt={skill.name} width={20} height={20} />
        </div>
      );
    }

    return (
      <div className="flex items-center justify-center flex-shrink-0 w-8 text-sm font-medium text-white bg-gray-100 rounded-lg "></div>
    );
  }

  return (
    <>
      <div className="h-full mb-8">
        <ul
          role="list"
          className="grid gap-5 mt-3 md:grid-cols-6 sm:grid-cols-4 animate-pulse-in sm:gap-6"
        >
          {skills.map((skill) => (
            <li
              key={skill.name}
              className={classNames(
                skill.href.startsWith('http') ? 'cursor-pointer' : '',
                'flex col-span-2 rounded-md shadow-sm'
              )}
              onClick={() => handleTagClick(skill.href)}
            >
              <ImageWithSize skill={skill} />

              <div
                className={classNames(
                  skill.href.startsWith('http') ? 'hover:bg-gray-200' : '',
                  'flex items-center justify-between flex-1 truncate bg-white border-t border-b border-r border-gray-200  rounded-r-md'
                )}
              >
                <div className="flex-1 px-4 py-2 text-xs truncate has-tooltip">
                  <span className="p-1 px-4 -mt-10 text-indigo-500 bg-gray-100 rounded-lg shadow-lg tooltip">
                    {skill.name}
                  </span>
                  <span className="font-medium text-gray-900 hover:text-gray-600">
                    {skill.name}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TagsInfos;
