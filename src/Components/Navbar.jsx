export function Navbar() {
  return (
    <div className="w-full flex items-center bg-primary h-[80px] justify-between px-8">
      <img
        className="h-[60px] cursor-pointer"
        src="https://res.cloudinary.com/dax0wf30d/image/upload/v1664998445/shit/logo_mefdgd.png"
      />
      <ul className="flex flex-row gap-4">
        <Link to="/" className="p-2 cursor-pointer">
          <p>Home</p>
        </Link>
        <Link to="/" className="p-2 cursor-pointer">
          <p>Profile</p>
        </Link>
        <Link
          to="/"
          className="p-2 bg-black rounded cursor-pointer duration-300 transition-colors hover:bg-white hover:text-black"
        >
          <p>Sign out</p>
        </Link>
      </ul>
    </div>
  );
}
