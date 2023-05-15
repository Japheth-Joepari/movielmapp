import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./pages/Detail";
import Auth from "./pages/Auth";
import { AuthProvider } from "./context/AuthContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },

  {
    path: "/movies/:id",
    element: <Detail />,
    props: true,
  },

  {
    path: "/auth",
    element: <Auth />,
    props: true,
  },

  // {
  //   path: "*",
  //   element: <ErrorPage />,
  // },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
