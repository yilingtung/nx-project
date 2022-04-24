import { twMerge } from 'tailwind-merge';

export interface DividerProps {
  className?: string;
  children?: React.ReactNode;
  color?: string;
}

export function Divider({
  className,
  color = 'netural-30',
  children,
}: DividerProps) {
  if (children) {
    return (
      <div
        className={twMerge(
          `flex items-center text-center text-[12px] leading-[18px] text-${color}`,
          className
        )}
      >
        <hr className={`flex h-[1px] w-full mr-[24px] border-${color}`} />
        {children}
        <hr className={`flex h-[1px] w-full ml-[24px] border-${color}`} />
      </div>
    );
  }

  return (
    <hr className={twMerge(`flex h-[1px] w-full border-${color}`, className)} />
  );
}

export default Divider;
