import { Link, NavLink } from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import ThemeChange from "./ThemeChange";
import logo from "../../assets/logo.png";
import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider";

export default function Navbar() {
  const { user, logOut } = useContext(AuthContext);
  console.log(user);
  const navLinks = [
    { id: 0, name: "Home", path: "/" },
    { id: 2, name: "Article", path: "/article" },
    { id: 3, name: "Design", path: "/design" },
    { id: 4, name: "Shop", path: "/shop" },
    { id: 5, name: "Gallery", path: "gallery" },
    { id: 6, name: "Rental", path: "/rental" },
    // { id: 7, name: "Irriagation", path: "/irriagation" },
    { id: 1, name: "About", path: "/about" },
    // { id: 8, name: "Contact", path: "/contact" },
  ];

  const handleLogout = () => {
    logOut().then();
  };

  return (
    <div className="navbar bg-green-900 text-white">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-green-900 rounded-box w-52 text-white"
          >
            {navLinks?.map((item) => (
              <NavLink key={item.id} to={item.path}>
                {item.name}
              </NavLink>
            ))}
            <li>
              <ThemeChange />
            </li>
          </ul>
        </div>
        <Link to="/" className="btn btn-ghost text-xl">
          <img className="w-[70px]" src={logo} alt="logo" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {navLinks?.map((item) => (
            <NavLink
              className="p-3 font-bold hover:border-b-2"
              key={item.id}
              to={item.path}
            >
              {item.name}
            </NavLink>
          ))}
          <li className="mt-2">
            <ThemeChange />
          </li>
        </ul>
      </div>
      {!user ? (
        <div className="navbar-end">
          <Link to="/login" className="btn bg-yellow-500">
            Login/SignUp
          </Link>
        </div>
      ) : (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full" title="Profile">
                <CgProfile size={30} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[10] p-2 shadow bg-slate-800 rounded-box w-52 border-2 border-green-600"
            >
              <li>
                <a className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </a>
              </li>
              <li>
                <a>Dashboard</a>
              </li>
              <li
                onClick={() => {
                  handleLogout();
                }}
                className="btn btn-error"
              >
                <a>Logout</a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
