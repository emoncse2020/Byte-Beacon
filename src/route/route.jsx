import { createBrowserRouter } from "react-router";
import Home from "../pages/Home/Home";
import Blogs from "../pages/Blogs/Blogs";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import MainLayouts from "../layouts/MainLayouts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayouts></MainLayouts>,
    errorElement: <h1>Error in Code</h1>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "blogs",
        element: <Blogs></Blogs>,
      },
      {
        path: "bookMarks",
        element: <Bookmarks></Bookmarks>,
      },
    ],
  },
]);

export default router;
