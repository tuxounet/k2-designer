import React from "react";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";
import EditPage from "./pages/EditPage";
import ViewPage from "./pages/display/Page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />
    },
    {
      path : "edit",
      element: <EditPage/>
    },
    {
      path : "view",
      element: <ViewPage/>
    },
    {
      path: "about",
      element: <AboutPage />,
    },
    {
      path: "design",
      element: <AboutPage />,
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
