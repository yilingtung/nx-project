import { twMerge } from 'tailwind-merge';

export interface HeaderProps {
  className?: string;
  style?: React.CSSProperties;
  title?: string;
  height?: number;
}

export function Header({ className, style, title, height = 80 }: HeaderProps) {
  return (
    <header
      className={twMerge(
        'fixed top-0 right-0 w-full z-20 transition-[width] ease-in-out duration-300',
        className
      )}
      style={style}
    >
      <div
        className={`flex items-center relative z-[1] h-[${height}px] px-6 bg-netural-10 border-b-[1px] border-netural-30`}
      >
        <div className="font-bold text-[16px] text-netural-80">{title}</div>
      </div>
    </header>
  );
}

export default Header;
