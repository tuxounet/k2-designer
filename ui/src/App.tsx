import { useState } from "react";

import "./App.css";

import { createBrowserRouter, Link, RouterProvider } from "react-router-dom";

import IndexPage from "./pages/IndexPage";
import AboutPage from "./pages/AboutPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <IndexPage />,
    },
    {
      path: "about",
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
