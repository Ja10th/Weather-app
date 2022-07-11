import React from "react";
import "./map.css";

const Map = () => {
  return (
    <div className="map">
      <h2>Live Weather Radar Map</h2>
      <iframe
        src="https://www.rainviewer.com/map.html?loc=46.7549,-73.905,6&oFa=0&oC=0&oU=0&oCS=1&oF=0&oAP=0&c=1&o=83&lm=1&layer=radar&sm=1&sn=1"
        width="100%"
        frameborder="0"
        allowfullscreen></iframe>
      <button className="btn btn-primary forecast-btn">
        Explore All Locations
      </button>
    </div>
  );
};

export default Map;
