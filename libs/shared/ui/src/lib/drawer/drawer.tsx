import { twMerge } from 'tailwind-merge';

export interface DrawerProps {
  className?: string;
  isOpen?: boolean;
  expandWidth?: number;
  collapseWidth?: number;
  children?: React.ReactNode;
}

export function Drawer({
  className,
  isOpen = false,
  expandWidth = 240,
  collapseWidth = 80,
  children,
}: DrawerProps) {
  return (
    <div
      className={twMerge(
        'flex flex-col flex-[1_0_auto] fixed left-0 top-0 h-full bg-netural-10 overflow-y-auto border-r-[1px] border-r-netural-30 transition-[width] ease-in-out duration-300',
        className
      )}
      style={{ width: isOpen ? `${expandWidth}px` : `${collapseWidth}px` }}
    >
      {children}
    </div>
  );
}

export default Drawer;
