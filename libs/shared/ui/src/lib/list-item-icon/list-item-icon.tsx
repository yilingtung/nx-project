import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface ListItemIconProps {
  className?: string;
  children?: React.ReactNode;
}

export function ListItemIcon({ className, children }: ListItemIconProps) {
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      return React.cloneElement(child, {
        className: `inline-block flex-shrink-0 w-full ${child.props.className}`,
      });
    }
    return child;
  });

  return (
    <div
      className={twMerge(
        'inline-flex flex-shrink-0 h-[20px] w-[20px] items-center justify-center not-last:mr-[12px]',
        className
      )}
    >
      {childrenWithProps}
    </div>
  );
}

export default ListItemIcon;
