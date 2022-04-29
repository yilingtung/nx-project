import { useMemo, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

import {
  Button,
  Header,
  HeaderActionGroup,
  HeaderTitle,
} from '@nx-project/shared/ui';
import { pagePathParser } from '@nx-project/dashboard/shared/utils';
import { usePostEditorContext } from '@nx-project/dashboard/shared/context';
import {
  DRAWER_COLLAPSE_WIDTH,
  DRAWER_EXPAND_WIDTH,
  HEADER_HEIGHT,
} from '@nx-project/dashboard/shared/config';
import DrawerLeft from '../drawer-left/drawer-left';

import { ReactComponent as ArrowSvg } from '../../assets/icons/arrow-left.svg';

export interface MainLayoutProps {
  className?: string;
  children?: React.ReactNode;
}

export function MainLayout({ className, children }: MainLayoutProps) {
  const { pathname } = useLocation();
  const [{ status: editorStatus }, { saveEditor }] = usePostEditorContext();

  const page = useMemo(() => {
    return pagePathParser(pathname);
  }, [pathname]);

  const isLeftDrawerShow = useMemo(() => {
    if (page === 'POST') {
      return false;
    }
    return true;
  }, [page]);
  const [isDrawerOpen, setDrawerOpenState] = useState(false);
  const leftDrawerWidth = !isLeftDrawerShow
    ? 0
    : isDrawerOpen
    ? DRAWER_EXPAND_WIDTH
    : DRAWER_COLLAPSE_WIDTH;
  const headerWidth = window.innerWidth - leftDrawerWidth;

  const renderHeader = useMemo(() => {
    if (page === 'POST') {
      return (
        <>
          <HeaderActionGroup>
            <Link
              to="/posts"
              className="inline-flex justify-center items-center "
            >
              <ArrowSvg />
              <span className="ml-[8px]">貼文</span>
            </Link>
            <div className="h-[27px] border-r-[1px] border-r-netural-50 mx-[16px]" />
            <span className="text-netural-70">{editorStatus}</span>
          </HeaderActionGroup>
          <HeaderActionGroup className=" ml-auto">
            <button className="mr-[24px] text-primary" onClick={saveEditor}>
              儲存
            </button>
            <button>發布</button>
          </HeaderActionGroup>
        </>
      );
    }
    if (page === 'POSTS') {
      return (
        <>
          <HeaderActionGroup>
            <HeaderTitle>貼文</HeaderTitle>
          </HeaderActionGroup>
          <HeaderActionGroup className=" ml-auto">
            <Button>新增貼文</Button>
          </HeaderActionGroup>
        </>
      );
    }
    return null;
  }, [page, editorStatus, saveEditor]);

  return (
    <div className={twMerge('flex h-screen', className)}>
      <Header
        style={{
          width: `${headerWidth}px`,
        }}
        height={HEADER_HEIGHT}
      >
        {renderHeader}
      </Header>
      <div
        className="flex-shrink-0 transition-[width] ease-in-out duration-300 overflow-x-hidden"
        style={{
          width: `${leftDrawerWidth}px`,
        }}
      >
        <DrawerLeft
          expandWidth={DRAWER_EXPAND_WIDTH}
          collapseWidth={DRAWER_COLLAPSE_WIDTH}
          isOpen={isDrawerOpen}
          isHide={!isLeftDrawerShow}
          toggleDrawer={() => setDrawerOpenState((state) => !state)}
        />
      </div>
      <main
        className="app flex-1 min-h-screen overflow-x-hidden"
        style={{ paddingTop: `${HEADER_HEIGHT}px` }}
      >
        {children}
      </main>
    </div>
  );
}

export default MainLayout;
