import React from "react";
import Feature from "./Components/Feature";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Hero />
        <Feature />
      </main>
    </React.Fragment>
  );
}

export default App;
