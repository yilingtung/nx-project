import { twMerge } from 'tailwind-merge';

import Avatar, { AvatarProps } from '../avatar/avatar';

export interface AvatarNameProps {
  className?: string;
  nameClassName?: string;
  avatarProps: AvatarProps;
  name?: string;
}

export function AvatarName({
  className,
  nameClassName,
  avatarProps,
  name,
}: AvatarNameProps) {
  return (
    <div className={twMerge('inline-flex items-center', className)}>
      <Avatar className={twMerge('not-last:mr-[12px]')} {...avatarProps} />
      {name && (
        <span
          className={twMerge(
            'overflow-hidden text-ellipsis whitespace-nowrap font-[14px] leading-[140%]',
            nameClassName
          )}
        >
          {name}
        </span>
      )}
    </div>
  );
}

export default AvatarName;
