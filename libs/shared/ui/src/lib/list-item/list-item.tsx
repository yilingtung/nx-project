import { twMerge } from 'tailwind-merge';

export interface ListItemProps {
  className?: string;
  onClick?: (event: React.MouseEvent<HTMLDivElement>) => void;
  children?: React.ReactNode;
}

export function ListItem({ className, onClick, children }: ListItemProps) {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center h-[46px] px-6 ',
        className
      )}
      role="button"
      tabIndex={0}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default ListItem;
