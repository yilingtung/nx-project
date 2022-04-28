import { twMerge } from 'tailwind-merge';

export interface TabProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
  activeClassName?: string;
  active?: boolean;
  children?: React.ReactNode;
}

export function Tab({
  className,
  activeClassName,
  active = false,
  children,
  ...props
}: TabProps) {
  return (
    <button
      className={twMerge(
        'inline-flex items-center justify-center flex-shrink-0 whitespace-nowrap p-4 text-16 leading-[140%] font-medium text-netural-70',
        className,
        active && 'font-bold text-netural-80',
        active && activeClassName
      )}
      role="tab"
      {...props}
    >
      {children}
    </button>
  );
}

export default Tab;
