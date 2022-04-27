import { Routes, Route, Outlet } from 'react-router-dom';

import MainLayout from '../layouts/main';
import PostsPage from '../pages/posts';
import PostPage from '../pages/posts/[id]';

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
          <Route index element={<PostsPage />} />
          <Route path=":postId" element={<PostPage />} />
        </Route>
        <Route path="*" element={<div>not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
