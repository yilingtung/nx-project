import { twMerge } from 'tailwind-merge';
import HeaderTitle from '../header-title/header-title';

export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  height?: number;
  children?: React.ReactNode;
}

export function Header({
  className,
  style,
  title,
  height = 80,
  children,
}: HeaderProps) {
  return (
    <header
      className={twMerge(
        'fixed top-0 right-0 w-full z-20 transition-[width] ease-in-out duration-300 text-netural-80 text-[14px]',
        className
      )}
      style={style}
    >
      <div
        className="flex items-center relative z-[1] px-6 bg-netural-10 border-b-[1px] border-netural-30"
        style={{ height: `${height}px` }}
      >
        {title && <HeaderTitle>{title}</HeaderTitle>}
        {children}
      </div>
    </header>
  );
}

export default Header;
