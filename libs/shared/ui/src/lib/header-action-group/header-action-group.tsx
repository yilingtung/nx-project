import { twMerge } from 'tailwind-merge';

export interface HeaderActionGroupProps {
  className?: string;
  children?: React.ReactNode;
}

export function HeaderActionGroup({
  className,
  children,
}: HeaderActionGroupProps) {
  return (
    <div
      className={twMerge('inline-flex justify-center items-center', className)}
    >
      {children}
    </div>
  );
}

export default HeaderActionGroup;
