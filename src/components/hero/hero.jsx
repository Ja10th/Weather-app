import React from "react";
import "./hero.css";
import Herotwo from "./hero-two";

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero__container">
        <h1>Provide you a world wide weather forecast</h1>
        <p>
          The World's Most Accurate Forecaster. With extreme weather on the rise
          . Its so easy to receive weather conditions in your current location.
        </p>
      </div>
      <Herotwo />
    </section>
  );
};

export default Hero;
