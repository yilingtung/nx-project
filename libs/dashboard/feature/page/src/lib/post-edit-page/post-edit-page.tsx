import { useEffect, useRef } from 'react';
import { twMerge } from 'tailwind-merge';

import { Editor, EditorTitle } from '@nx-project/shared/ui';
import { usePostEditorContext } from '@nx-project/dashboard/shared/context';

export interface PostEditPageProps {
  className?: string;
}

export function PostEditPage({ className }: PostEditPageProps) {
  const hasRun = useRef(false);
  const [{ status, title }, { setTitle, initializeEditor, destroyEditor }] =
    usePostEditorContext();

  useEffect(() => {
    if (!hasRun.current) {
      hasRun.current = true;

      // Running effect
      initializeEditor({
        title: '',
        editorConfig: {
          placeholder: '開始分享你的知識',
        },
      });
    }
    return () => {
      destroyEditor();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className={twMerge('flex flex-col h-full pt-[32px]', className)}>
      {status !== 'SETTING' && (
        <EditorTitle
          prefix="如何"
          suffix="?"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
      )}
      <Editor />
    </div>
  );
}

export default PostEditPage;
