import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./Components/Root";
import ErrorPage from "./pages/ErrorPage";
import Content from "./Components/Content";
import Content2 from "./Components/Content2";
import Users from "./pages/Users";
import Dashboard from "./pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [{
      element: <Content />,
      children: [{
        path: '/',
        element: <Dashboard />
      },
      {
        path: '/users',
        element: <Users />
      }]
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
