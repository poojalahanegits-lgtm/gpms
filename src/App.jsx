import React from "react";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Services from "./components/Services.jsx";
import ReadyToGetStarted from "./components/ReadyToGetStarted.jsx";
import About from "./components/About.jsx";
import Contact from "./components/Contact.jsx";
import Locations from "./components/Location.jsx";
import Footer from "./components/Footer.jsx";
import Hero from "./components/Hero.jsx";
const App = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Home />
      <Services />

      <About />
      <Contact />
      <Locations />
      <ReadyToGetStarted />
      <Footer />
    </div>
  );
};

export default App;
