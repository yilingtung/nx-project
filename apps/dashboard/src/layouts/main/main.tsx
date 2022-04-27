import { useState } from 'react';
import { twMerge } from 'tailwind-merge';

import {
  Button,
  Header,
  HeaderActionGroup,
  HeaderTitle,
} from '@nx-project/shared/ui';
import { DrawerDashboard } from '@nx-project/dashboard/shared/ui';
import { pagePathParser } from '@nx-project/dashboard/shared/utils';
import {
  DRAWER_COLLAPSE_WIDTH,
  DRAWER_EXPAND_WIDTH,
  HEADER_HEIGHT,
} from '../../config/CONSTANTS';

export interface MainLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export function MainLayout({ className, children }: MainLayoutProps) {
  const [isDrawerOpen, setDrawerOpenState] = useState(false);
  const headerOpenWidth =
    typeof window === 'undefined' || !isDrawerOpen
      ? '100%'
      : `${window.innerWidth - DRAWER_EXPAND_WIDTH}px`;

  return (
    <div className={twMerge('flex h-screen', className)}>
      <Header
        style={{
          width: headerOpenWidth,
        }}
        height={HEADER_HEIGHT}
        title="Test"
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
      <main className={`app flex-1 min-h-full pt-[${HEADER_HEIGHT}px]`}>
        {children}
      </main>
    </div>
  );
}
