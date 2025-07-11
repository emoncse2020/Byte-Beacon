import { Outlet } from "react-router";
import NavBar from "../components/Shared/NavBar";
import Blogs from "../pages/Blogs/Blogs";
import Bookmarks from "../pages/Bookmarks/Bookmarks";
import Home from "../pages/Home/Home";
import Footer from "../components/Shared/Footer";

const MainLayouts = () => {
  return (
    <div>
      <div>
        <header className="bg-gray-200 shadow-xl px-16 h-16">
          <NavBar></NavBar>
        </header>
        <div className="min-h-[calc(100vh-288px)]">
          <Outlet></Outlet>
        </div>
        {/* Footer */}
        <Footer></Footer>
      </div>
    </div>
  );
};

export default MainLayouts;
