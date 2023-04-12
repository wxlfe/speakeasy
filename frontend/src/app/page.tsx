import Image from 'next/image';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

const data = {
  entries: [
    {
      url: 'https://newegg.com/',
      score: 500,
    },
    {
      url: 'https://coinbase.com/',
      score: 320,
    },
    {
      url: 'https://amazon.com/',
      score: 220,
    },
  ],
};

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center p-24'>
      <h1 className={`${inter.className} mb-3 text-3xl font-semibold`}>
        Featured
      </h1>
      <div className='mb-32 grid text-center lg:mb-0 lg:grid-cols-4 lg:text-left'>
        <a
          href='https://beta.nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Steam{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Steam is the ultimate destination for playing, discussing, and
            creating games.
          </p>
        </a>

        <a
          href='https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800 hover:dark:bg-opacity-30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            AT&amp;T{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Shop deals on unlimited data plans, Internet service, and DIRECTV
            STREAM. Get 24/7 support, pay your bills & manage your account
            online.
          </p>
        </a>

        <a
          href='https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            Tesla{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Tesla is accelerating the world&#39;s transition to sustainable
            energy with electric cars, solar and integrated renewable energy
            solutions for homes and businesses.
          </p>
        </a>

        <a
          href='https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app'
          className='group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30'
          target='_blank'
          rel='noopener noreferrer'
        >
          <h2 className={`${inter.className} mb-3 text-2xl font-semibold`}>
            AMC Theatres - movie times, movie trailers, buy tickets and gift
            cards.{' '}
            <span className='inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none'>
              -&gt;
            </span>
          </h2>
          <p
            className={`${inter.className} m-0 max-w-[30ch] text-sm opacity-50`}
          >
            Find movies near you, view show times, watch movie trailers and buy
            movie tickets. AMC Theatres has the newest movies near you
          </p>
        </a>
      </div>
      <h1 className={`${inter.className} m-3 text-3xl font-semibold`}>
        Popular
      </h1>
      {data.entries.map((entry, index) => {
        return (
          <div
            key={index}
            className='w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex bg-white-600/75'
          >
            <a
              href={entry.url}
              className={`${inter.className} w-full max-w-5xl h-12 bg-white-900 p-4`}
            >
              {entry.url.substring(
                entry.url.indexOf('//') + 2,
                entry.url.lastIndexOf('/')
              )}
            </a>
            <div className='h-12 bg-white-900 p-3 flex flex-row justify-around'>
              <button className='px-2'>
                <svg
                  id='Layer_1'
                  version='1.1'
                  viewBox='0 0 64 64'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#282828'
                  className='w-6 h-6 fill-current'
                >
                  <g>
                    <g
                      id='Icon-Like'
                      transform='translate(78.000000, 528.000000)'
                    >
                      <path
                        d='M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5     c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z'
                        id='Fill-4_2_'
                        fill='#282828'
                        fillRule='evenodd'
                      />
                      <path
                        d='M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5'
                        id='Fill-6_2_'
                        fill='#282828'
                        fillRule='evenodd'
                      />
                    </g>
                  </g>
                </svg>
              </button>
              <button className='px-2'>
                <svg
                  id='Layer_1'
                  version='1.1'
                  viewBox='0 0 64 64'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='#282828'
                  className='w-6 h-6 fill-current rotate-180'
                >
                  <g>
                    <g
                      id='Icon-Like'
                      transform='translate(78.000000, 528.000000)'
                    >
                      <path
                        d='M-22-495.6c0-3.2-2.5-4.9-6-4.9h-10.1c0.7-2.7,1.1-5.3,1.1-7.5c0-8.7-2.4-10.5-4.5-10.5     c-1.4,0-2.4,0.1-3.8,1c-0.4,0.2-0.6,0.6-0.7,1l-1.5,8.1c-1.6,4.3-5.7,8-9,10.5v21.4c1.1,0,2.5,0.6,3.8,1.3     c1.6,0.8,3.3,1.6,5.2,1.6h14.3c3,0,5.2-2.4,5.2-4.5c0-0.4,0-0.8-0.1-1.1c1.9-0.7,3.1-2.3,3.1-4.1c0-0.9-0.2-1.7-0.5-2.3     c1.1-0.8,2.3-2.1,2.3-3.7c0-0.8-0.4-1.8-1-2.5C-22.9-492.8-22-494.2-22-495.6L-22-495.6z M-25.1-495.6c0,1.9-2,2.1-2.3,3     c-0.3,1,1.2,1.4,1.2,3.2c0,1.9-2.3,1.9-2.6,2.8c-0.4,1.1,0.7,1.5,0.7,3.3c0,0.1,0,0.2,0,0.3c-0.3,1.5-2.6,1.6-3,2.2     c-0.4,0.7,0.1,1.1,0.1,2.7c0,0.9-1,1.5-2.2,1.5h-14.3c-1.1,0-2.5-0.6-3.8-1.3c-1.2-0.6-2.4-1.2-3.7-1.5v-15.9     c3.7-2.8,8.5-7.1,10.4-12.3c0-0.1,0-0.2,0.1-0.2l1.4-7.5c0.5-0.2,0.9-0.2,1.7-0.2c0.3,0,1.5,1.8,1.5,7.5c0,2.2-0.4,4.7-1.2,7.5     h-0.4c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5H-28C-26.5-497.5-25.1-496.8-25.1-495.6L-25.1-495.6z'
                        id='Fill-4_2_'
                        fill='#282828'
                        fillRule='evenodd'
                      />
                      <path
                        d='M-58-473.5h-9c-1.7,0-3-1.3-3-3v-21c0-1.7,1.3-3,3-3h9c1.7,0,3,1.3,3,3v21     C-55-474.8-56.3-473.5-58-473.5L-58-473.5z M-67-497.5v21h9l0-21H-67L-67-497.5z M-70-518.5'
                        id='Fill-6_2_'
                        fill='#282828'
                        fillRule='evenodd'
                      />
                    </g>
                  </g>
                </svg>
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}
