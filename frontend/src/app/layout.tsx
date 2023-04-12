'use client';

import './globals.css';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import speakeasyIcon from '../../public/speakeasy.png';
import Image from 'next/image';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [searchValue, setSearchValue] = useState('');
  const [searchVisibility, setSearchVisibility] = useState(false);

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(event.target.value);
  };

  const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle search submit logic here
  };

  const toggleSearchVisibility = () => {
    if (searchVisibility) {
      setSearchVisibility(false);
    } else {
      setSearchVisibility(true);
    }
  };

  return (
    <html lang='en'>
      <head>
        <meta name='theme-color' content='#d1ad54' />
        <link rel='manifest' href='/manifest.json' />
        <title>Speakeasy</title>
      </head>
      <body>
        <header className='flex items-center justify-between px-4 bg-black-800 text-white'>
          <Link href='/'>
            <Image src={speakeasyIcon} alt='Home' height={80} />
          </Link>
          <button
            onClick={() => toggleSearchVisibility()}
            className='flex items-center px-4'
          >
            {!searchVisibility ? (
              <svg
                className='w-6 h-6 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='1 1 32 32'
              >
                <path
                  d='M27,14 C27,6.82029825 21.1797017,1 14,1 C6.82029825,1 1,6.82029825 1,14 C1,21.1797017 6.82029825,27 14,27 C21.1797017,27 27,21.1797017 27,14 Z M3,14 C3,7.92486775 7.92486775,3 14,3 C20.0751322,3 25,7.92486775 25,14 C25,20.0751322 20.0751322,25 14,25 C7.92486775,25 3,20.0751322 3,14 Z M29.7368574,32.6738729 C30.1154992,33.0759286 30.7483796,33.0949094 31.1504354,32.7162676 C31.5524911,32.3376258 31.5714719,31.7047454 31.1928301,31.3026896 C31.1928301,31.3026896 23.7390742,23.3273941 23.3890738,23.0163752 C23.3890738,22.9433594 22.798584,23.5787354 22.6536865,23.7145996 C22.5087891,23.8504639 21.8980149,24.263855 21.8980149,24.3503027 C25.4563599,28.1820068 29.7368574,32.6738729 29.7368574,32.6738729 Z'
                  id='Combined-Shape'
                  stroke='none'
                  fill='#d1ad54'
                  fillRule='evenodd'
                ></path>
              </svg>
            ) : (
              <svg
                className='w-6 h-6 fill-current'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 16 16'
              >
                <path
                  d='m1 1 14 14m0-14-14 14'
                  id='Combined-Shape'
                  strokeWidth='1'
                  stroke='#d1ad54'
                  fillRule='evenodd'
                ></path>
              </svg>
            )}
          </button>
        </header>
        {searchVisibility && (
          <main className='absolute z-[100] w-full flex min-h-screen flex-col items-center justify-between p-24 bg-black-600/75'>
            <div className='z-[100] w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-transparent'>
              <input
                type='text'
                className='w-full max-w-5xl h-12 rounded-l-3xl bg-black-600 text-white-600 p-4 outline-0'
                placeholder='Search'
              ></input>
              <button className='h-12 rounded-r-3xl bg-black-600 p-3'>
                <svg
                  className='w-6 h-6 fill-current'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='1 1 32 32'
                >
                  <path
                    d='M27,14 C27,6.82029825 21.1797017,1 14,1 C6.82029825,1 1,6.82029825 1,14 C1,21.1797017 6.82029825,27 14,27 C21.1797017,27 27,21.1797017 27,14 Z M3,14 C3,7.92486775 7.92486775,3 14,3 C20.0751322,3 25,7.92486775 25,14 C25,20.0751322 20.0751322,25 14,25 C7.92486775,25 3,20.0751322 3,14 Z M29.7368574,32.6738729 C30.1154992,33.0759286 30.7483796,33.0949094 31.1504354,32.7162676 C31.5524911,32.3376258 31.5714719,31.7047454 31.1928301,31.3026896 C31.1928301,31.3026896 23.7390742,23.3273941 23.3890738,23.0163752 C23.3890738,22.9433594 22.798584,23.5787354 22.6536865,23.7145996 C22.5087891,23.8504639 21.8980149,24.263855 21.8980149,24.3503027 C25.4563599,28.1820068 29.7368574,32.6738729 29.7368574,32.6738729 Z'
                    id='Combined-Shape'
                    stroke='none'
                    fill='#d1ad54'
                    fillRule='evenodd'
                  ></path>
                </svg>
              </button>
            </div>
          </main>
        )}
        {children}
      </body>
    </html>
  );
}
