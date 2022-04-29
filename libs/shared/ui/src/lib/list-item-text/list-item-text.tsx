import { twMerge } from 'tailwind-merge';

export interface ListItemTextProps {
  className?: string;
  children: React.ReactNode;
}

export function ListItemText({ className, children }: ListItemTextProps) {
  return (
    <div
      className={twMerge(
        'flex flex-1 text-[14px] text-netural-70 overflow-hidden',
        className
      )}
    >
      <span className="overflow-hidden text-ellipsis whitespace-nowrap">
        {children}
      </span>
    </div>
  );
}

export default ListItemText;
