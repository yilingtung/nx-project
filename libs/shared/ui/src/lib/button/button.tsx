import classnames from 'classnames';

import { SVGIconProps } from '@nx-project/shared/types';

import { ReactComponent as SpinnerSvg } from '../../assets/icons/spinner.svg';

import styles from './button.module.css';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md';
  kind?: 'primary' | 'secondary' | 'outline';
  shape?: 'squard' | 'round';
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
      className={classnames(
        styles['btn'],
        kind === 'primary' && styles['kind-primary'],
        kind === 'secondary' && styles['kind-secondary'],
        kind === 'outline' && styles['kind-outline'],
        size === 'xs' && classnames(styles['size-xs'], 'h-[30px] px-[8px]'),
        size === 'sm' && classnames(styles['size-sm'], 'h-[40px] px-[12px]'),
        size === 'md' && classnames(styles['size-md'], 'h-[48px] px-[16px]'),
        {
          rounded: shape === 'squard',
          'rounded-[25px]': shape === 'round' && size === 'xs',
          'rounded-[20px]': shape === 'round' && size === 'sm',
          'rounded-[24px]': shape === 'round' && size === 'md',
        },
        'group',
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
          className={classnames(styles['icon'], 'animate-spin-slow')}
          width={iconSize}
        />
      ) : (
        IconLeft &&
        IconLeft.SVG && (
          <IconLeft.SVG
            className={classnames(styles['icon'])}
            width={iconSize}
            {...IconLeft.props}
          />
        )
      )}
      <span
        className={classnames(
          'whitespace-nowrap font-bold leading-[112.5%] transition-[color] ease-in-out duration-300',
          'group-disabled:text-netural-10',
          {
            'text-[12px]': size === 'xs' || size === 'sm',
            'text-[16px]': size === 'md',
          },
          {
            'text-netural-10': kind === 'primary',
            'text-netural-70 group-active:text-netural-10':
              kind === 'secondary' || kind === 'outline',
          }
        )}
      >
        {children}
      </span>
      {IconRight && IconRight.SVG && (
        <IconRight.SVG
          className={classnames(styles['icon'])}
          width={iconSize}
          {...IconRight.props}
        />
      )}
    </button>
  );
}

export default Button;
