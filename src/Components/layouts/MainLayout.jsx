/* eslint-disable prettier/prettier */
import {Navbar} from "../Navbar";
import {Footer} from "../Footer";


export function MainLayout({ children }) {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
