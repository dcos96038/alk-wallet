/* eslint-disable prettier/prettier */
import {Navbar} from "./Components/Navbar";
import {Footer} from "./Components/Footer";


export function Layout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
