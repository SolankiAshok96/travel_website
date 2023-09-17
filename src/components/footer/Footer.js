import React from "react";
import "./footer.css";
import "bootstrap/dist/css/bootstrap.min.css";

import {
  AiFillTwitterCircle,
  AiFillWechat,
  AiFillYoutube,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="main-container containe ">
      <div className="row ">
        <div className="col-12 col-md-6 text-start px-5 mt-5">
          <div>
            <p className="footer_para">Free Travel Trips</p>
          </div>
          <div className="input_details ">
            <input className=" px-4 footer_input" type="text" placeholder="Enter here..."></input>
             <button type="submit" className="submit-btn">
              Submit
            </button>
          </div>
          <div className="d-flex  connect_details mt-5 ">
            <p className="para mt-2 para_get">Get In Touch To Connect</p>
            <div className="contact_detail">
              <h3>Contact Us</h3>
              <h5>
                Email : <a href="#">tourdrift2023@.gmailcom</a>
              </h5>
              <h5>
                Call : <a href="#"> +91 9774267382</a>
              </h5>
              <h5>
                WhatsApp : <a href="#">+91 8563459234</a>
              </h5>
            </div>
          </div>
          <div className="social-icons">
            <AiFillTwitterCircle className="symbol1" />
            <AiFillWechat className="symbol1" />
            <AiFillYoutube className="symbol1" />
          </div>
        </div>
        
        <div className="foot col-12 col-md-6 pt-2 pb-2 d-flex flex-column justify-content-center align-items-center">
          <div>
            <button className="book-btn d-none d-md-inline">BOOK NOW</button>
          </div>
           <div className="footer_bottom_img">
                 <img src="tourdrift-logo-4-2@2x.png" alt="no img" />
           </div>

        </div>
           <div className="line">

           </div>
        <b className="copyright">@2023 tourdrift powered and secured by WIX</b>
      </div>
    </div>
  );
};

export default Footer;
