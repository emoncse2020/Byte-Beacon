import { Outlet } from "react-router";
import NavBar from "../components/Shared/NavBar";
import Blogs from "../pages/Blogs/Blogs";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Home from "../pages/Home/Home";

const MainLayouts = () => {
  return (
    <div>
      <div className="h-16">
        <header className="bg-gray-50 shadow px-16">
          <NavBar></NavBar>
        </header>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default MainLayouts;
