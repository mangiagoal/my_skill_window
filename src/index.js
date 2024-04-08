import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./routes/root";
import ErrorPage from "./error-page";
import About from "./routes/about";
import Services from "./routes/services";
import WebDesign from "./routes/web-design";
import WebDev from "./routes/web-dev";
import Frontend from "./routes/frontend";
import Backend from "./routes/backend";
import Php from "./routes/php";
import NodeJs from "./routes/node";
import SEO from "./routes/seo";

import reportWebVitals from './reportWebVitals';

const router = createBrowserRouter([
  {
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "services",
        element: <Services />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "web-design",
        element: <WebDesign />,
      },
      {
        path: "web-development",
        element: <WebDev />,
      },
      {
        path: "frontend",
        element: <Frontend />,
      },
      {
        path: "backend",
        element: <Backend />,
      },
      {
        path: "node",
        element: <NodeJs />,
      },
      {
        path: "php",
        element: <Php />,
      },
      {
        path: "seo",
        element: <SEO />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
