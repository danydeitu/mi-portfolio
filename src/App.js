import React, { useState, useEffect } from "react";
import "./App.css";
import Cover from "./components/cover/Cover";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Slider from "./components/slider/Slider";
import Info from "./components/info/Info";
import Footer from "./components/Footer/Footer";

function App() {
  const [scrollHeight, setScrollHeight] = useState(0);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollHeight(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, [scrollHeight]);

  return (
    <div className="App">
      <Navbar isScrolling={scrollHeight} />
      <Cover />
      <About />
      <Slider />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
