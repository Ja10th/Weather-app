import React from "react";
import { TiWeatherShower } from "react-icons/ti";
import './footer.css'

const Footer = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light nav-bar footer">
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
                Accessibility
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Legal
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Email Policy
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link " href="#">
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Footer;
