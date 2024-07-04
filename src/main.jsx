import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Error404 from "./components/Page/404.jsx";
import Tst from "./components/Page/tst.jsx";
import Dashboard from "./components/Admin/Dashboard.jsx";
import Form from "./components/Admin/Form.jsx";
import SignIn from "./components/Page/Sign In.jsx";
import Details from "./components/Page/Posts.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error404 />,
  },
  {
    path: "/tst",
    element: <Tst />,
  },
  {
    path: "/admin",
    element: <Dashboard />,
  },
  {
    path: "/admin/article/new",
    element: <Form />,
  },
  {
    path: "/signin",
    element: <SignIn />,
  },
  {
    path: "/posts/:id",
    element: <Details />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
