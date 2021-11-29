import React from 'react';

import Image from 'next/image';
import Link from 'next/link';

type MyProps = {
  altText: string;
};

const TheLogo = ({ altText }: MyProps) => {
  return (
    <>
      <style jsx>{`
        .logo {
          filter: hue-rotate(80deg);
        }

        .logo:hover {
          filter: hue-rotate(0deg);
        }
      `}</style>
      <Link href="/">
        <a>
          <Image
            className="block w-auto h-8 logo hover:animate-spin"
            src="/assets/images/logo-indigo-500.svg"
            alt={altText}
            width={40}
            height={40}
          />
        </a>
      </Link>
    </>
  );
};

export default TheLogo;
