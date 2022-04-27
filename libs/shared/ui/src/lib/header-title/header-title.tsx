import { twMerge } from 'tailwind-merge';

export interface HeaderTitleProps {
  className?: string;
  children?: React.ReactNode;
}

export function HeaderTitle({ className, children }: HeaderTitleProps) {
  return (
    <div
      className={twMerge('font-bold text-[16px] text-netural-80', className)}
    >
      {children}
    </div>
  );
}

export default HeaderTitle;
