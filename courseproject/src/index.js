import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router';
import Home from "./pages/Home"
import History from "./pages/History";
import Requirements from "./pages/Requirements";
import Implementation from "./pages/Implementation";
import "bootstrap/dist/css/bootstrap.min.css";
import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/history", element: <History /> },
  { path: "/requirements", element: <Requirements /> },
  { path: "/implementation", element: <Implementation /> },
]);

document.body.style.backgroundColor = "#D3D3D3";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
