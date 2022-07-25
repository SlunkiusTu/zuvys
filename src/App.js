import React from "react";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import { Sectors } from "./features/sectors/Sectors";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Sectors />
    </>
  );
}

export default App;
