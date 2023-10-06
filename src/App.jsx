import React from "react";
import { AboutUs } from "./Components/AboutUs";
import { Footer } from "./Components/Footer";
import { Navbar } from "./Components/Navbar";
import { Herosection } from "./Components/Herosection";
function App() {
  return (
    <>
      <div className="">
        {/* Navbar */}
        <Navbar />

        {/* Hero Section */}
        <Herosection />

        {/* About us Section */}
        <AboutUs />

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
