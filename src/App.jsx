import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import AnimatedCursor from "react-animated-cursor";

const App = () => {
  const cursorColor = "orange";

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={35}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: cursorColor,
        }}
        outerStyle={{
          border: `3px solid white`, 
        }}
      />
      <Navbar />
      <Home />
      <About />
      <Skills />
    </div>
  );
};

export default App;
