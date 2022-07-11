import React from "react";
import { RiSearch2Fill } from "react-icons/ri";

const Herotwo = () => {
  return (
    <div className=" hero-two__container">
      <div className=" search-box">
        <form className="form-search d-flex">
          <div className="form-box">
            <input
              className="form-control me-2"
              type="search"
              placeholder=" Search place"
              aria-label="Search"
            />
            <button className="search-btn btn btn-success" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>
      <div>
        <h4>Recent places</h4>
        <div className="places">
          <div className="New-york">
            <p>New York</p>
            <h3>12 &#8451;</h3>
            <small>Raining</small>
          </div>
          <div className="Gotham">
            <p>Gotham</p>
            <h3>14 &#8451;</h3>
            <small>Mostly Clear</small>
          </div>
          <div className="Madripoor">
            <p>Madripoor</p>
            <h3>11 &#8451;</h3>
            <small>Mostly Clear</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herotwo;
