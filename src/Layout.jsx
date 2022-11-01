import {Navbar} from "./Components/Navbar";
import {Footer} from "./Components/Footer";

export function Layout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
