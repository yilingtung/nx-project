import { StrictMode } from 'react';
import * as ReactDOMClient from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import { PostEditorProvider } from '@nx-project/dashboard/shared/context';

import App from './app/app';

const root = ReactDOMClient.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <BrowserRouter>
      <PostEditorProvider>
        <App />
      </PostEditorProvider>
    </BrowserRouter>
  </StrictMode>
);
