import React from "react";
import './talk.css'

const Talk = () => {
  return (
    <section className="container talk">
        <h1>Subscribe to get updated <br></br> information about weather</h1>
      <div className="container hero__container talkk">
      <p>
          The World's Most Accurate Forecaster. With extreme weather on the rise
          . Its so easy to receive weather conditions in your current location.
        </p>
     
      <div className=" search-box">
        <form className="form-search d-flex">
          <div className="form-box">
            <input
              className="form-control me-2"
              type="email"
              placeholder=" Enter your email"
              aria-label="Search"
            />
            <button className="search-btn btn btn-success" type="submit">
              Subscribe
            </button>
          </div>
        </form>
      </div>
      </div>
    </section>
  );
};

export default Talk;
