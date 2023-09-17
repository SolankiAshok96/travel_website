import React from "react";
import "./BestVacation.css";

const BestVacation = () => {
  return (
    <div className="main-best-container container my-4">
      <div className="row">
        <div className="col-12">
          <h2 className="rental_head">Explore our Best Vacation Rentals</h2>
        </div>
        <div className="d-flex justify-content-between my-4 vaction_card">
          <div className="cards"> 
              <img src="building.png" alt="" className="best-img" />
               <div className="card_con">
               <p className="card_con_head">Apartments</p>
             <p className="card_con_para">15,786 Properties</p>
               </div>
             
          </div>
          <div className="cards">
            <img src="water.png" alt="" className="best-img" />
            <p className="card_con_head">Private Villas</p>
            <p className="card_con_para">5,706 Properties</p>
          </div>
          <div className="cards">
            <img src="beach.png" alt="" className="best-img" />
            <p className="card_con_head">Resorts</p>
            <p className="card_con_para">25,786 Properties</p>
          </div> 
        
        </div>
      </div>
    </div>
  );
};

export default BestVacation;
