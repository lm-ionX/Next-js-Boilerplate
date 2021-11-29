import React from 'react';

import { Disclosure, Tab, Transition } from '@headlessui/react';
import { useAtom } from 'jotai';

import { cvAtom } from '../store/cv';
import { classNames } from '../utils/utils';
import TagsInfos from './TagsInfos';

const CategoriesTabs: React.FunctionComponent = () => {
  const [myCv] = useAtom(cvAtom);

  function IconOpenOrClose(props: { isOpen: boolean }) {
    const open = props.isOpen;

    return open ? (
      <div
        className="text-4xl icon hover:text-indigo-600 icon__close"
        aria-hidden="true"
      >
        c
      </div>
    ) : (
      <div className="text-4xl icon hover:text-indigo-600" aria-hidden="true">
        c
      </div>
    );
  }

  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button>
            <IconOpenOrClose isOpen={open} />
          </Disclosure.Button>
          <Transition
            enter="transition ease-in duration-400"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-300 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
          >
            <Disclosure.Panel>
              <div className="w-full max-w-md px-2 py-6 sm:px-0">
                <Tab.Group>
                  <Tab.List className="flex p-1 space-x-1 bg-gray-300/20 rounded-xl">
                    {myCv.cvCategories.map((category) => (
                      <Tab
                        key={category.href}
                        className={({ selected }) =>
                          classNames(
                            'w-full py-2.5 text-sm leading-5 font-medium text-indigo-700 rounded-md',
                            'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-indigo-400 ring-white ring-opacity-60',
                            selected
                              ? 'bg-white shadow'
                              : 'text-indigo-100 hover:bg-white/[0.12] hover:text-indigo-400'
                          )
                        }
                      >
                        {category.name}
                      </Tab>
                    ))}
                  </Tab.List>
                  <Tab.Panels className="mt-2">
                    {myCv.cvCategories.map((category) => (
                      <Tab.Panel key={category.href}>
                        <TagsInfos skills={category.skills} />
                      </Tab.Panel>
                    ))}
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </Disclosure.Panel>
          </Transition>
        </>
      )}
    </Disclosure>
  );
};

export default CategoriesTabs;
