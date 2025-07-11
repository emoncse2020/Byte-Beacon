import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";

const NavBar = () => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    localStorage.setItem("theme", theme);
    const localTheme = localStorage.getItem("theme");
    document.querySelector("html").setAttribute("data-theme", localTheme);
  }, [theme]);

  const handleToggleTheme = (e) => {
    if (e.target.checked) {
      setTheme("synthwave");
    } else {
      setTheme("light");
    }
  };

  const links = (
    <>
      <li>
        <NavLink
          to={"/blogs"}
          className={({ isActive }) => {
            return isActive ? "text-primary font-bold" : "font-bold";
          }}
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/bookMarks"}
          className={({ isActive }) => {
            return isActive ? "text-primary font-bold" : "font-bold";
          }}
        >
          Bookmarks
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar sticky top-0 z-20">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <NavLink
          to={"/"}
          className={({ isActive }) => {
            return isActive
              ? "text-4xl font-extrabold"
              : "gap-0 text-3xl font-bold";
          }}
        >
          <span className="text-primary">Byte</span>
          <span className="text-secondary">Beacon</span>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <label className="inline-flex items-center cursor-pointer">
          <input
            onChange={handleToggleTheme}
            type="checkbox"
            value=""
            className="sr-only peer"
          />
          <div className="relative w-14 h-7 bg-gray-800 rounded-full dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all dark:border-gray-600 peer-checked:bg-gray-600 dark:peer-checked:bg-gray-600"></div>
        </label>
      </div>
    </div>
  );
};

export default NavBar;
