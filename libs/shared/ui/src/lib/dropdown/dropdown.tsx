import React, { useCallback, useRef, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { usePopper } from 'react-popper';

import { useOutsideClick } from '@nx-project/shared/hooks';

export interface DropdownProps {
  triggerWrapperClassName?: string;
  triggerComponent?: React.ReactNode;
  popperOption?: Parameters<typeof usePopper>[2];
  children?:
    | (({
        setVisible,
      }: {
        setVisible: React.Dispatch<React.SetStateAction<boolean>>;
      }) => React.ReactNode)
    | React.ReactNode;
}

export function Dropdown({
  triggerWrapperClassName,
  triggerComponent,
  popperOption,
  children,
}: DropdownProps) {
  const [visible, setVisible] = useState(false);
  const referenceRef = useRef(null);
  const popperRef = useRef(null);

  const handleClickOutside = useCallback(() => {
    setVisible(false);
  }, []);

  useOutsideClick([referenceRef, popperRef], handleClickOutside);

  const { styles, attributes } = usePopper(
    referenceRef.current,
    popperRef.current,
    {
      placement: 'bottom',
      modifiers: [
        {
          name: 'offset',
          enabled: true,
          options: {
            offset: [0, 10],
          },
        },
      ],
      ...popperOption,
    }
  );

  const handleDropdownClick = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    setVisible(true);
  }, []);

  const renderChildren = () => {
    if (typeof children === 'function') {
      return children({ setVisible });
    }

    return children;
  };

  return (
    <>
      <div
        ref={referenceRef}
        className={twMerge('inline-flex', triggerWrapperClassName)}
        onClick={handleDropdownClick}
      >
        {triggerComponent}
      </div>
      <div
        ref={popperRef}
        style={{ ...styles['popper'], display: visible ? 'flex' : 'none' }}
        {...attributes['popper']}
      >
        {renderChildren()}
      </div>
    </>
  );
}

export default Dropdown;
