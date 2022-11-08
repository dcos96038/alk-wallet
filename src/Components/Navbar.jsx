import {Link} from "react-router-dom";

export function Navbar() {
  return (
    <div className="w-full flex items-center bg-primary h-[50px] justify-between px-8">
      <img
        className="h-[40px] cursor-pointer"
        src="https://res.cloudinary.com/dax0wf30d/image/upload/v1664998445/shit/logo_mefdgd.png"
      />
      <div className="flex 1" />
      <div className="flex">
        <Link className="p-2 cursor-pointer no-underline text-white" to="/">
          Home
        </Link>
        <Link className="p-2 cursor-pointer no-underline text-white" to="/">
          Profile&apos;s name
        </Link>
        <Link
          className="p-2 bg-black rounded cursor-pointer duration-300 transition-colors hover:bg-white hover:text-black no-underline"
          to="/"
        >
          Sign out
        </Link>
      </div>
    </div>
  );
}
