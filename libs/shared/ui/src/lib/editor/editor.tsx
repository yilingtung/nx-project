import { twMerge } from 'tailwind-merge';

import styles from './editor.module.css';

export interface EditorProps {
  className?: string;
}

export function Editor({ className }: EditorProps) {
  return (
    <div
      id="codex-editor"
      className={twMerge(
        'prose h-full w-full max-w-full',
        styles['editor'],
        className
      )}
      // https://github.com/codex-team/editor.js/issues/1367#issuecomment-718860194
      // eslint-disable-next-line @typescript-eslint/no-empty-function
      onMouseOver={() => {}}
    />
  );
}

export default Editor;
