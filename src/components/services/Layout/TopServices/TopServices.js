import React from "react";
import "./TopServices.css";
import "bootstrap/dist/css/bootstrap.min.css";

const TopServices = () => {
  return (
    <div className="main-layout-container container mt-3  top_service_main">
      <div className="row">
        <div className="col-12 top_service_head">
          <h2 className="top_service_heading">Our Top Services</h2>
        </div>
        <div className="top_service_content">
          <img
            src="/images/Rectangle 148.png"
            alt="map img"
            className="rec-img"
          />
          <img
            src="/images/Rectangle 149.png "
            alt="tree img"
            className="rec-img"
          />
          <img
            src="/images/Rectangle 151.png"
            alt="paper img"
            className="rec-img"
          />
          <img
            src="images/Rectangle 152.png"
            alt="man img"
            className="rec-img"
          />

          <img
            src="images/Rectangle 153.png"
            alt="percel img"
            className="rec-img"
          />
         
          <div className="comingsoon">Coming Soon</div>
           
        </div>
      </div>
    </div>
  );
};

export default TopServices;
