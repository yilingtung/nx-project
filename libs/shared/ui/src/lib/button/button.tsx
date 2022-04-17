import classnames from 'classnames';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: 'xs' | 'sm' | 'md';
  kind?: 'primary' | 'secondary' | 'outline';
  shape?: 'squard' | 'round';
  loading?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}

export function Button({
  className,
  size = 'sm',
  kind = 'primary',
  shape = 'squard',
  loading = false,
  disabled,
  onClick,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={classnames(
        'group inline-flex justify-center items-center flex-grow-0 flex-shrink-0 border-solid border transition ease-in-out duration-300',
        'disabled:cursor-not-allowed disabled:bg-netural-50 disabled:border-netural-50',
        {
          'bg-primary border-primary hover:border-primary-dark hover:bg-primary-dark focus:border-primary-dark focus:bg-primary-dark active:border-primary-dark active:bg-primary-dark':
            kind === 'primary',
          'bg-netural-20 border-netural-20 hover:border-netural-30 hover:bg-netural-30 focus:border-netural-30 focus:bg-netural-30 active:border-netural-70 active:bg-netural-70':
            kind === 'secondary',
          'border-netural-70 hover:bg-netural-30 focus:bg-netural-30 active:bg-netural-70':
            kind === 'outline',
        },
        {
          'h-[30px] px-[8px]': size === 'xs',
          'h-[40px] px-[12px]': size === 'sm',
          'h-[48px] px-[16px]': size === 'md',
        },
        {
          rounded: shape === 'squard',
          'rounded-[25px]': shape === 'round' && size === 'xs',
          'rounded-[20px]': shape === 'round' && size === 'sm',
          'rounded-[24px]': shape === 'round' && size === 'md',
        },
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
      <span
        className={classnames(
          'whitespace-nowrap font-bold leading-[112.5%] transition-[color] ease-in-out duration-300',
          'group-disabled:text-netural-10',
          {
            'not-last:mr-[4px]': size === 'xs',
            'not-last:mr-[8px]': size === 'sm' || size === 'md',
          },
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
    </button>
  );
}

export default Button;
