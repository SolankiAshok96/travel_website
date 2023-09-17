import React from "react";
import "./Body.css";
import "bootstrap/dist/css/bootstrap.min.css";

const Body = () => {
  return (
    <>
      <div className="main-cont">
        <div className="second-container containe mt-5 mb-5 p-3">
          <div className="row row_down">
            <div className="row_down_con">
              <input
                type="text"
                className="row_down_input"
                placeholder="Form"
              />
              <input type="text" className="row_down_input" placeholder="To" />
              <input
                type="text"
                className="row_down_input"
                placeholder="Depature Date"
              />
              <input
                type="text"
                className="row_down_input"
                placeholder="1 Adult"
              />

              <button className="row_down_btn">Search Flight</button>
            </div>
          </div>

          <div className="row_up">
            <div className="row_up_con">
              <p className="row_up_para_m">Flight</p>
              <p className="row_up_para">Private Stays</p>
              <p className="row_up_para">Resorts</p>
              <p className="row_up_para">Packages</p>
            </div>
          </div>
        </div>

        <div className="third-container thid_containerss">
           <div className="col-12 third_con_cont">
            <h1 className="third-heading">Welcome to Tour Drift</h1>
            <p className="third-para">
              Explore the World with Us Are you ready to embark on a thrilling
              adventure and discover breathtaking destinations around the globe?
              Look no further! Tourdrift is here to guide you on an
              unforgettable journey, offering a plethora of travel resources,
              tips, and inspiration.
            </p>
            <button className="learn-btn">Learn More</button>
          </div>
         
        </div>

        <div className="fourth-container mt-5 mb-5">
          <div className="fourt_row_con">
            <h1 className="forty_row_head">Explore Top Terrains</h1>
            <p className="forty_row_para">For All Types of People</p>
          </div>
          <div className="fourth_row">
            <div className="row_left">
              <img className="places-img pt-2" src="../rectangle-85@2x.png" />
              <p className="place_con">Sea Terrain</p>
            </div>
            <div className="row_right">
              <div className="row_right_up">
                <img className="places-img pt-2" src="../rectangle-86@2x.png" />
                <p className="place_con">Sea Terrain</p>
              </div>

              <div className="row_right_up">
                <img className="places-img pt-2" src="../rectangle-87@2x.png" />
                <p className="place_con">Sea Terrain</p>
              </div>
            </div>
          </div>
        </div>

        <div className="fifth-container containe mt-5 mb-5">
          <div className="row">
            <div className="col-12 fifth_con">
              <p className="fifth-para">What we offer</p>
              <h1 className="fifth-head">
                Checkout a few advantage of joining us
              </h1>
            </div>
            <div className="col-12 col-md-6 mt-5 fifth_row">
              <div className="fifth_row_left fifthrows">
                <h1 className="th-head">Best deals and Discount</h1>
                <p className="th-para">
                  we are committed tp find the best deals and discounts for our
                  customers. We work with the top travel provides to offer you
                  exclusive discounts, so you can stretch your budget further
                  and make the most of your vaction.
                </p>
              </div>
              <div className="fifth_row_middle fifthrows">
                <h1 className="th-head">Reliable and safe Travel</h1>
                <p className="th-para">
                  {" "}
                  understand that safety is a top cocern when traveling. That’s
                  why we work with only the most reliable travel providers and
                  tour operators, so you can travel with peace of mind knowning
                  that your trip is in good hands.
                </p>
              </div>
              <div className="fifth_row_right fifthrows">
                <h1 className="th-head">Hassle-Free Booking</h1>
                <p className="th-para">
                  Booking your trip us is simple and straight forward, we take
                  care of all the details, from fight and hotel reservations to
                  activates and transportation, so you can focus on what really
                  matters-enjoying your vacation.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="sixth-container containe mt-5 mb-5">
          <div className="row sixth_rowss">
            <div className="col-12 col-md-6 mt-5 sixth_row_con">
              <h1 className="th-head">
                We’ll make sure you have a fantastic vacation.
              </h1>
              <p className="th-para para_box">
                We know that every traveler is unique, which is why we offer a
                range of options to fit your specific needs. Whether you’re
                looking for luxury or budget-friendly, we’ve got you covered.
                Our team of travel experts is always on hand to provide
                personalized recommendations and advice, so you can make the
                most of your trip.
              </p>
              <button className="learn-btn">Learn More</button>

              <div className="sixth_row_info">
                <div className="sixt_row_left">
                  <p className="sixt_row_left_head">300+</p>
                  <p className="sixt_row_left_short">
                    Traveler <br />
                    And Panthers
                  </p>
                </div>
                <div className="sixt_row_middle">
                  <p className="sixt_row_left_head">500+</p>
                  <p className="sixt_row_left_short">
                    Places and <br /> Destination
                  </p>
                </div>
                <div className="sixt_row_right">
                  <p className="sixt_row_left_head">10+</p>
                  <p className="sixt_row_left_short">
                    Years Of <br /> Experience{" "}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 mt-5 sixth_img six_img_a">
              <img className="sixth-img" src="../twophoto.png" />
            </div>
          </div>
        </div>

        <div className="seventh_row ">
          <h1 className="seventh_row_heading">Explore Top Adventure</h1>

          <div className="seventh_row_Explore">
            <div className="seventh_row_Explore_left">
              <img src="rectangle-86@2x.png" alt="no img" />
              <p className="bottom_explore">london Clock</p>
            </div>

            <div className="seventh_row_Explore_middle">
              <div className="seventh_row_Explore_middle-up">
                <img src="rectangle-102@2x.png" alt="no img" />
                <p className="bottom_explore">Jeep Safari</p>
              </div>
              <div className="seventh_row_Explore_middle_bottom">
                <img src="mount.jpeg" alt="no img" />
                <p className="bottom_explore">Sunset view</p>
              </div>
            </div>

            <div className="seventh_row_Explore_right">
              <img src="rectangle-105@2x.png" alt="no img" />
              <p className="bottom_explore">Indian Temple</p>
            </div>
          </div>
        </div>

        <div className="row reviews pt-5 review">
          <div className="col-12 p-2">
            <h3 className="review_heading">Overheard from travelers</h3>
          </div>
          <div className="col-12 col-md-4">
            <div className="review_box">
              <p className="review_box_para">
                Lorem ipsum denisode kantakktios<br></br>
                kartbetaining pedade eftersom intran regt.<br></br>
                Polysk Spoilervarning gack i sosade i segisk <br></br>
                regisk polynde.Krorade al ana kross.Juna<br></br>
                kavis i sojspeng hypant .i vafanytt sogan.
              </p>
            </div>
            <div className="tringle"></div>
            <div className="image-details">
              <img src="Image-1.jpeg" alt="member-1" className="mem"></img>
              <p className="review_name">Kevin Smith</p>
              <p className="review_country">Ausralia</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="review_box">
              <p className="review_box_para">
                Lorem ipsum denisode kantakktios<br></br>
                kartbetaining pedade eftersom intran regt.<br></br>
                Polysk Spoilervarning gack i sosade i segisk <br></br>
                regisk polynde.Krorade al ana kross.Juna<br></br>
                kavis i sojspeng hypant .i vafanytt sogan.
              </p>
            </div>
            <div className="tringle"></div>

            <div className="image-details">
              <img src="Image-2.jpeg" alt="member-2" className="mem"></img>
              <p className="review_name">Christine Eve</p>
              <p className="review_country">Oman</p>
            </div>
          </div>

          <div className="col-12 col-md-4">
            <div className="review_box">
              <p className="review_box_para">
                Lorem ipsum denisode kantakktios<br></br>
                kartbetaining pedade eftersom intran regt.<br></br>
                Polysk Spoilervarning gack i sosade i segisk <br></br>
                regisk polynde.Krorade al ana kross.Juna<br></br>
                kavis i sojspeng hypant .i vafanytt sogan.
              </p>
            </div>
            <div className="tringle"></div>

            <div className="image-details">
              <img src="Image-3.jpeg" alt="member-3" className="mem"></img>
              <p className="review_name">Mike</p>
              <p className="review_country">Texas_USA</p>
            </div>
          </div>
        </div>

        <div className="details_box">
          <div className="details_left_box">
            <h1 className="details_left_head">Best Guide, Best Experience.</h1>
            <p className="details_left_para">
              Your trip will be very <span className="span_col">memorable</span>  with thw best guide{" "}
            </p>
            <h3 className="details_left_head_bottom">More details</h3>
          </div>
         
          <div className="details_middle_box">
          <h1 className="details_middle_head">Always have
Special Tickets.</h1>
            <p className="details_middle_para">
            We always offer special tickets and we
give them to all customers
            </p>
            <h3 className="details_middle_head_bottom">More details</h3>
          </div>

          <div className="details_right_box">
            <h1 className="details_right_head">Always Ready Support 24/7.</h1>
            <p className="details_left_para">
              We <span className="span_col">always</span> make time to ask questions anytime and anywhere
            </p>
            <h3 className="details_right_head_bottom">More details</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
