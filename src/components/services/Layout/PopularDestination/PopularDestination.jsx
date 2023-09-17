import React from "react";
import "./PopularDestination.css";

const PopularDestination = () => {
  return (
    <div className="main-popular-container container my-4">
      <div className="row my-2">
        <div className="col-12">
          <h2>Popular Destination Outside India</h2>
        </div>
        <div className="d-flex justify-content-between my-2 popular_dest">
          <div className="">
            <img src="/images/Ellipse 25.png" alt="" className="popular-img" />
          </div>
          <div className=" ">
            <img src="/images/Ellipse 26.png" alt="" className="popular-img" />
          </div>
          <div className=" ">
            <img src="/images/Ellipse 27.png" alt="" className="popular-img" />
          </div>
          <div className=" ">
            <img src="/images/Ellipse 28.png" alt="" className="popular-img" />
          </div>
          <div className=" ">
            <img src="/images/Ellipse 29.png" alt="" className="popular-img" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;
