import { AppProps } from 'next/app';
import Head from 'next/head';
import { useState } from 'react';

import { DrawerBlog, Header } from '@nx-project/blog/shared/ui';

import './styles.css';

const DRAWER_EXPAND_WIDTH = 240;
const DRAWER_COLLAPSE_WIDTH = 80;

function CustomApp({ Component, pageProps }: AppProps) {
  const [isDrawerOpen, setDrawerOpenState] = useState(false);
  const headerOpenWidth =
    typeof window === 'undefined' || !isDrawerOpen
      ? '100%'
      : `${window.innerWidth - DRAWER_EXPAND_WIDTH}px`;

  return (
    <>
      <Head>
        <title>Welcome to blog!</title>
      </Head>
      <div className="flex">
        <Header
          title="Test"
          style={{
            width: headerOpenWidth,
          }}
        />

        <div
          className="flex-shrink-0 transition-[width] ease-in-out duration-300 overflow-x-hidden"
          style={{
            width: isDrawerOpen
              ? `${DRAWER_EXPAND_WIDTH}px`
              : `${DRAWER_COLLAPSE_WIDTH}px`,
          }}
        >
          <DrawerBlog
            expandWidth={DRAWER_EXPAND_WIDTH}
            collapseWidth={DRAWER_COLLAPSE_WIDTH}
            isOpen={isDrawerOpen}
            toggleDrawer={() => setDrawerOpenState((state) => !state)}
          />
        </div>
        <main className="app flex-1 pt-[80px]">
          <Component {...pageProps} />
        </main>
      </div>
    </>
  );
}

export default CustomApp;
