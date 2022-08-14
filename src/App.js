import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Outlet />
    </>
  );
};

export default App;
