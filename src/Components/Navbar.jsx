import { useState } from "react";
import { HomeView } from "../views/HomeView";
import { Link } from "react-router-dom";

export function Navbar() {
  // helps to display the menu in small devices
  const [active, setActive] = useState(false);
  const loggedViews = [
    "home",
    "balance",
    "charge",
    "expenses",
    "movements",
    "send",
    "profile",
  ];
  return (
    <div className="w-full flex items-center bg-primary h-[80px] justify-between px-8">
      {/* logo */}
      <img
        className="h-[55px] cursor-pointer"
        src="https://res.cloudinary.com/dax0wf30d/image/upload/v1664998445/shit/logo_mefdgd.png"
      />
      <div>
        {/* Burger menu */}
        <div
          onClick={() => setActive(!active)}
          className="w-[50px] md:hidden relative overflow-hidden h-[45px] rounded-md border-[3px] cursor-pointer flex justify-center items-center"
        >
          <div className="w-[35px] h-[4px] bg-white rounded shadow after:content-[''] after:h-[4px] after:w-[35px] after:rounded after:translate-y-[10px] after:bg-white after:shadow after:absolute before:content-[''] before:h-[4px] before:w-[35px] before:rounded before:translate-y-[-10px] before:bg-white before:shadow before:absolute"></div>
        </div>
        {/* Overlay */}
        <div
          className={`fixed w-screen md:hidden h-screen bg-black opacity-30 top-0 right-0 z-[9999999999] ${
            !active ? "hidden" : ""
          }`}
        ></div>
        <nav
          className={`flex flex-col items-center justify-center transition-all md:items-start z-[99999999999] bg-primary w-screen sm:w-1/2 md:w-fit md:flex-row h-screen fixed top-0 right-0 md:right-auto md:relative md:h-fit ${
            active ? "right-0" : "right-[-100%]"
          }`}
        >
          <div
            onClick={() => setActive(!active)}
            className="text-6xl absolute top-[5px] right-[40px] md:hidden cursor-pointer"
          >
            &times;
          </div>
          {loggedViews.map((el, i) => (
            <Link
              to={`/${el}`}
              key={i}
              className="p-2 cursor-pointer text-white no-underline capitalize"
            >
              {el}
            </Link>
          ))}
        </nav>
        {/* <Link to="/" >
          <p>Home</p>
          </Link>
          <Link to="/" className="p-2 cursor-pointer">
          <p>Profile's name</p>
          </Link>
          <Link
          to="/"
          className="p-2 bg-black rounded cursor-pointer duration-300 transition-colors hover:bg-white hover:text-black"
          >
          <p>Sign out</p>
        </Link> */}
      </div>
    </div>
  );
}
