import {
  createContext,
  useContext,
  ReactNode,
  useState,
  Dispatch,
  SetStateAction,
  useRef,
  useCallback,
} from 'react';
import EditorJS, { EditorConfig } from '@editorjs/editorjs';
import EDITOR_JS_TOOLS from './tools';

type EditorStatus =
  | 'SETTING'
  | 'INITIALIZE'
  | 'EDITING'
  | 'SAVING'
  | 'SAVED'
  | 'DESTROYED';

type InitializeEditorFunc = (options: {
  title?: string;
  editorConfig: EditorConfig;
}) => void;

export const PostEditorContext = createContext([null, null] as unknown as [
  {
    status: EditorStatus;
    title: string;
  },
  {
    setStatus: Dispatch<SetStateAction<EditorStatus>>;
    setTitle: Dispatch<SetStateAction<string>>;
    initializeEditor: InitializeEditorFunc;
    destroyEditor: () => void;
    saveEditor: () => Promise<void>;
  }
]);

export const usePostEditorContext = () => useContext(PostEditorContext);

export const PostEditorProvider = ({ children }: { children: ReactNode }) => {
  const editorRef = useRef<EditorJS | null>(null);
  const [status, setStatus] = useState<EditorStatus>('SETTING');
  const [title, setTitle] = useState('');

  const initializeEditor = useCallback<InitializeEditorFunc>(
    ({ title = '', editorConfig }) => {
      setStatus('SETTING');
      editorRef.current = new EditorJS({
        holder: 'codex-editor',
        tools: EDITOR_JS_TOOLS as EditorConfig['tools'],
        onReady: () => {
          if (editorConfig.data) {
            setStatus('SAVED');
          } else {
            setStatus('INITIALIZE');
          }
        },
        onChange: () => {
          setStatus('EDITING');
        },
        ...editorConfig,
      });
      setTitle(title);
    },
    []
  );

  const destroyEditor = useCallback(() => {
    if (typeof editorRef?.current?.destroy === 'function') {
      setTitle('');
      editorRef?.current?.destroy();
      setStatus('DESTROYED');
    }
  }, []);

  const saveEditor = useCallback(async () => {
    if (typeof editorRef?.current?.save === 'function') {
      setStatus('SAVING');
      const data = await editorRef?.current?.save();
      console.log('SAVED: ', title, data);
      setStatus('SAVED');
    }
  }, [title]);

  return (
    <PostEditorContext.Provider
      value={[
        {
          status,
          title,
        },
        { setStatus, setTitle, initializeEditor, destroyEditor, saveEditor },
      ]}
    >
      {children}
    </PostEditorContext.Provider>
  );
};
