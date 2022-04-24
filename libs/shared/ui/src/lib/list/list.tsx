import { twMerge } from 'tailwind-merge';

export interface ListProps {
  className?: string;
  children?: React.ReactNode;
}

export function List({ className, children }: ListProps) {
  return <ul className={twMerge('py-3', className)}>{children}</ul>;
}

export default List;
