import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  // {
  //   path: "/:id",
  //   element: <Update />,
  // },
  // {
  //   path: "/create",
  //   element: <Create />,
  // }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div style={{ textAlign: "center" }}>
      <h1>Some Testing App with React (plain css)</h1>
      <h3>and json-server, react-router-dom and stuff</h3>
    </div>
    <RouterProvider router={router} />
  </React.StrictMode>
);
