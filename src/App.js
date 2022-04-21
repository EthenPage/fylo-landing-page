import React from "react";
import CallToAction from "./Components/CallToAction";
import Feature from "./Components/Feature";
import Footer from "./Components/Footer";
import Hero from "./Components/Hero";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <main>
        <Hero />
        <Feature />
        <CallToAction />
      </main>
      <Footer />
    </React.Fragment>
  );
}

export default App;
