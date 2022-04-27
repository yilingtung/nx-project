import { twMerge } from 'tailwind-merge';

export interface AvatarProps {
  className?: string;
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

export function Avatar({
  className,
  src,
  alt,
  width = 48,
  height = 48,
}: AvatarProps) {
  return (
    <div
      className={twMerge(
        `inline-flex flex-shrink-0 items-center justify-center rounded-full overflow-hidden transition-all ease-in-out duration-300`,
        className
      )}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <img className="w-full h-full object-cover" src={src} alt={alt} />
    </div>
  );
}

export default Avatar;
