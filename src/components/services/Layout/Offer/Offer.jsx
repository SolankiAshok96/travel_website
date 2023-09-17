import React from "react";
import "./Offer.css";
import "bootstrap/dist/css/bootstrap.min.css";
import arrow from "../../../../img/Arrow 5.png";

const Offer = () => {
  return (
    <div className="main-offer-container containe my-4">
      <div className="row position-relative ">
        <div className="col-12">
          <h2 className="offer_head">Offers</h2>
        </div>
        <div className="d-flex my-4 offerimgbox">
          <div className="col-12 col-md-4 offersimg">
            <img
              src="./images/Rectangle 160.png"
              alt=""
              className="offer-png"
            />
            <div className="offer_con">
              <h2 className="offer_con_head">Fly away with cheap flights</h2>
              <p className="offer_con_para">FLAT 40% OFFER</p>
            </div>
          </div>
          <div className="col-12 col-md-4 offersimg">
            <img src="/images/Rectangle 161.png" alt="" className="offer-png" />
            <div className="offer_con">
              <h2 className="offer_con_head">Hotels,Homes and resort</h2>
              <p className="offer_con_para">FLAT 20% OFFER</p>
            </div>
          </div>
          <div className="col-12 col-md-4 offersimg">
            <img src="/images/Rectangle 162.png" alt="" className="offer-png" />
            <div className="offer_con">
              <h2 className="offer_con_head">International Packages</h2>
              <p className="offer_con_para">Min 10% OFF</p>
            </div>
          </div>
        </div>
        <div className="arrow">
          <img src={arrow} alt="no img" />
        </div>
      </div>
    </div>
  );
};

export default Offer;
