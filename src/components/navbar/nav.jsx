import React from "react";
import "./nav.css";
import { TiWeatherShower } from "react-icons/ti";
import { BiMapPin } from "react-icons/bi";

const Nav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bar">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          <TiWeatherShower className="Nav-logo" />
          J.Forecast
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Research
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Climate
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                About Us
              </a>
            </li>
          </ul>
          <button className="map-btn btn btn-primary">
            <BiMapPin className="map-icon" />
            Open Maps
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
