import Home from "./pages/Home";
import Blog from "./pages/Blog";
import About from "./pages/About";
import MainLayout from "./layouts/MainLayout";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MainLayout />,
      children: [
        { index: true, element: <Blog /> },
        { path: "home", element: <Home /> },
        { path: "blog", element: <Blog /> },
        { path: "about", element: <About /> },
      ],
    },
  ],
  {
    basename: "/Adasa---React",
  }
);

export default function App() {
  return <RouterProvider router={router} />;
}
