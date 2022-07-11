import React from "react";
import Nav from "./components/navbar/nav";
import Hero from "./components/hero/hero";
import Forecast from "./components/forecast/forecast";
import Map from "./components/map/map";
import News from "./components/news/news";
import Info from "./components/info/infp";
import Talk from "./components/talk/talk";
import Footer from "./components/footer/footer";

const App = () => {
  return (
    <>
      <Nav />
      <Hero />
      <Forecast />
      <Map />
      <News />
      <Info />
      <Talk />
      <Footer />
    </>
  );
};

export default App;
