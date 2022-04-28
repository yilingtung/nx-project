import { User } from '@nx-project/shared/types';
import { twMerge } from 'tailwind-merge';

import AvatarName from '../avatar-name/avatar-name';

export interface CardPostProps {
  className?: string;
  title: string;
  author: User;
  time: string;
}

export function CardPost({
  className,
  title = '',
  author,
  time,
}: CardPostProps) {
  return (
    <div className={twMerge('flex flex-col', className)}>
      <AvatarName
        className="not-last:mb-[8px]"
        avatarProps={{
          className: 'not-last:mr-[4px]',
          src: author.avatar,
          alt: author.name,
          width: 24,
          height: 24,
        }}
        name={author.name}
        nameClassName="text-[12px]"
      />
      <h2 className="not-last:mb-[8px]">{title}</h2>
      <div className="inline-flex flex-wrap items-center">
        {time && (
          <span className="text-[14px] leading-[200%] text-netural-70 not-last:mr-[12px]">
            {time}
          </span>
        )}
      </div>
    </div>
  );
}

export default CardPost;
