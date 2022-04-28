import { twMerge } from 'tailwind-merge';

export interface TabsProps {
  className?: string;
  children?: React.ReactNode;
}

export function Tabs({ className, children }: TabsProps) {
  return (
    <div className={twMerge('flex overflow-hidden', className)}>
      <div className="relative inline-block flex-1 overflow-x-auto overflow-y-hidden">
        <div className="flex whitespace-nowrap">{children}</div>
      </div>
    </div>
  );
}

export default Tabs;
