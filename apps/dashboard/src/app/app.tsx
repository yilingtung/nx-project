import { Routes, Route, Outlet } from 'react-router-dom';

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
        <Route path="post" element={<div>post</div>} />
        <Route path="*" element={<div>not found</div>} />
      </Route>
    </Routes>
  );
}

export default App;
