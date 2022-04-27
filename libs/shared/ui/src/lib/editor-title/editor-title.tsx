import { twMerge } from 'tailwind-merge';

import styles from './editor-title.module.css';

export interface EditorTitleProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  prefix?: string;
  suffix?: string;
}

export function EditorTitle({
  className,
  value,
  prefix,
  suffix,
  onChange,
  ...props
}: EditorTitleProps) {
  return (
    <div className={twMerge(styles['container'], className)}>
      {prefix && <h1>{prefix}</h1>}
      <input value={value} onChange={onChange} {...props} />
      {suffix && <h1>{suffix}</h1>}
    </div>
  );
}

export default EditorTitle;
