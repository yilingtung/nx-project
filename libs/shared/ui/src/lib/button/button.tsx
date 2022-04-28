import { twMerge } from 'tailwind-merge';
import isEmpty from 'lodash/isEmpty';

import { SVGIconProps } from '@nx-project/shared/types';

import { ReactComponent as SpinnerSvg } from '../../assets/icons/spinner.svg';

import styles from './button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md';
  kind?: 'primary' | 'secondary' | 'outline';
  shape?: 'squard' | 'round';
  status?: 'default' | 'pressed';
  loading?: boolean;
  IconLeft?: SVGIconProps;
  IconRight?: SVGIconProps;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button({
  className,
  size = 'sm',
  kind = 'primary',
  shape = 'squard',
  status = 'default',
  loading = false,
  disabled,
  IconLeft,
  IconRight,
  onClick,
  children,
  ...props
}: ButtonProps) {
  const iconSize = {
    xs: 12,
    sm: 16,
    md: 16,
  }[size];

  return (
    <button
      className={twMerge(
        styles['button'],
        styles[`size-${size}`],
        styles[`kind-${kind}`],
        status === 'pressed' && styles['pressed'],
        shape === 'round' && styles['border-round'],
        className
      )}
      type="button"
      disabled={disabled}
      onClick={(e: React.MouseEvent) => {
        if (!disabled && !loading && typeof onClick === 'function') {
          onClick(e);
        }
      }}
      {...props}
    >
      {!disabled && loading ? (
        <SpinnerSvg
          className={twMerge(styles['icon'], styles['loading'], styles['fill'])}
          width={iconSize}
        />
      ) : (
        IconLeft &&
        IconLeft.SVG && (
          <IconLeft.SVG
            className={twMerge(
              styles['icon'],
              !isEmpty(IconLeft.type) && styles[`${IconLeft.type}`]
            )}
            width={iconSize}
            {...IconLeft.props}
          />
        )
      )}
      <span>{children}</span>
      {IconRight && IconRight.SVG && (
        <IconRight.SVG
          className={twMerge(
            styles['icon'],
            !isEmpty(IconRight.type) && styles[IconRight.type]
          )}
          width={iconSize}
          {...IconRight.props}
        />
      )}
    </button>
  );
}

export default Button;
