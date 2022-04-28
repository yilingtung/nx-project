import { Routes, Route, Outlet } from 'react-router-dom';
import { PostEditPage, PostListPage } from '@nx-project/dashboard/feature/page';

import MainLayout from '../layouts/main';

export function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <Outlet />
          </MainLayout>
        }
      >
        <Route index element={<div>home</div>} />
        <Route path="posts">
          <Route index element={<PostListPage />} />
          <Route path=":postId" element={<PostEditPage />} />
        </Route>
        <Route path="*" element={<div>not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
