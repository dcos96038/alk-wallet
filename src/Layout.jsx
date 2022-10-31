import { Navbar } from "./Components/Navbar";
import { Footer } from "./Components/Footer";
import { BrowserRouter, Routes } from "react-router-dom";

export function Layout() {
  return (
    <>
      <Navbar />
      <BrowserRouter>
        <Routes></Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}
