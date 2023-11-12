import { useState } from "react";
import { Layout, ConfigProvider} from "antd";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./Components/Root";
import ErrorPage from "./pages/ErrorPage";
import Content from "./Components/Content";
import Content2 from "./Components/Content2";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      path: '/',
      element: <Content />
    },
    {
      path: '/2',
      element: <Content2 />
    }]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
