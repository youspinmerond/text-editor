import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Editor from './Editor.tsx';
import './index.sass';

export const router = createBrowserRouter([
  {
    path:"/",
    element: <App/>
  },
  {
    path: "/editor",
    element: <Editor/>
  }
]);

ReactDOM.createRoot(document.body as HTMLBodyElement).render(
  <>
    <RouterProvider router={router}/>
  </>
);