import React from "react";
import "./Visa.css";
import aboutback from "../../img/travel-concept-with-worldwide-landmarks 1.png";
import { AiOutlineArrowRight } from "react-icons/ai";
import dubai from "../../img/Canada.png";
import uk from "../../img/UK.png";
import usa from "../../img/USA.png";
import canada from "../../img/Canada.png";
import singapore from "../../img/Singpore.png";
import vector_back from "../../img/Vector image.png";
import beutifulgirl from "../../img/beautiful-tourist-looking-away-with-copy-space 1.png";
import elipse1 from "../../img/Ellipse 18.png"
import elipse2 from "../../img/Ellipse 19.png"
import elipse3 from "../../img/Ellipse 20.png"
import arrow from '../../img/Arrow 5.png'




const Visa = () => {
  return (
    <div className="visa">
      <div className="head">
        <div className="left">
          <h1 className="left_heading">
            Find Visa information for all Countries.
          </h1>
          <p className="left_para">Simplfying Travel Around The World</p>
        </div>
        <div className="right">
          <img src={aboutback} alt="about-bg"></img>
        </div>
      </div>

      <div className="travel_info">
        <div className="from">
          <label>Where are you From?</label>
          <select className="options" name="country" required>
            <option value="" disabled selected hidden>
              Country
            </option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="America">America</option>
          </select>
        </div>
        <div className="where">
          <label>Where are you To?</label>
          <select className="options" name="country" required>
            <option value="" disabled selected hidden>
              Country
            </option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            <option value="America">America</option>
          </select>
        </div>
        <button className="check_button">Check Now</button>
      </div>

      <div className="popular_destination">
        <div className="text_content">
          <h1 className="left_text_content">Most Popular Destination</h1>
          <p className="right_text_content">
            See All
            <AiOutlineArrowRight />
          </p>
        </div>

        <div className="popular_img">
          <div className="left_img m_img">
            <img src={dubai} alt="no image found" />
            <p className="left_img_content">Dubai</p>
          </div>
          <div className="middle_img ">
            <div className="middle_top_img m_img">
              <img src={uk} alt="no img" />
              <p className="middle_img_content">United Kingdom</p>
            </div>
            <div className="middle_bottom_img">
              <div className="middle_bottom_left">
                <img src={usa} alt="no img" />
                <p className="middle_img_content">USA</p>
              </div>
              <div className="middle_bottom_left">
                <img src={canada} alt="no img" />
                <p className="middle_img_content">Canada</p>
              </div>
            </div>
          </div>
          <div className="right_img m_img">
            <img src={singapore} alt="no img" />
            <p className="middle_img_content">singapore</p>
          </div>
        </div>
      </div>

      <div className="visa_status">
        <div className="left_visa">
          <h1 className="left_visa_heading">Check visa Status</h1>
          <div className="left_input">
            <label>Reference Number</label>
            <input className="visa_input" type="text" />
          </div>
          <button className="visa_submit">Submit</button>
        </div>

        <div className="right_visa">
          <img src={beutifulgirl} />
        </div>
      </div>

      <div className="works">
        <h1 className="work_heading">How it Works</h1>

        <div className="works_Para">
          <p className="work_para_left">Electric Visa(e-visa)</p>
          <p className="work_other_para">Health declaration</p>
          <p className="work_other_para">Visa Guide</p>
        </div>

        <div className="work_box">
          <div className="work_boxes">
            <div className="work_box_top">
              <p>Fill online Application</p>
            </div>
            <div className="work_box_bottom">
             <p>  Complete our easy online application and pay with credit card or
              PayPal.
              </p>
            </div>
          </div>

          <div className="work_boxes">
            <div className="work_box_top">
              <p>Receive document through e-mail</p>
            </div>
            <div className="work_box_bottom">
             <p> No need to deal with the embassy. We do it for you so you don't
              lose valuable time.</p>
            </div>
          </div>

          <div className="work_boxes">
            <div className="work_box_top">
              <p>Enter Destination</p>
            </div>
            <div className="work_box_bottom">
            <p>    Present your Passport and documents we provide, upon entry to
              destination country.</p>
            </div>
          </div>
        </div>
              <div className="work_flex_button">
             <button className="work_button">Apply Now</button>
             </div>
      </div>
 
            <div className="words_users">
               <h1 className="words_user_head">Some Words From our Users</h1>
               <div className="user_boxs">
 
                  <div className="user_box">
                    <img src={elipse1} alt="no img"/>
                     <h6>Edwin Zohir</h6>
                     <p className="user_proff">Businessman</p>
                     <p className="user_say">
                     Lörem ipsum denisöde kontaktlös kortbetalning pedade eftersom intran regt. Polysk. Spoilervarning gack i sosade i segisk regisk polynde. Krorade ål ana kross. Juna kavis i sojyspeng, hypont: i vafanytt sögon. 
                     </p>
                  </div>
                  <div className="user_box">
                    <img src={elipse2} alt="no img"/>
                     <h6>Jackson</h6>
                     <p className="user_proff">Entrepreneus</p>
                     <p className="user_say" >
                     Lörem ipsum denisöde kontaktlös kortbetalning pedade eftersom intran regt. Polysk. Spoilervarning gack i sosade i segisk regisk polynde. Krorade ål ana kross. Juna kavis i sojyspeng, hypont: i vafanytt sögon. 
                     </p>
                  </div>

                  <div className="user_box">
                    <img src={elipse3} alt="no img"/>
                     <h6>Zoya</h6>
                     <p className="user_proff">Architect</p>
                     <p className="user_say">
                     Lörem ipsum denisöde kontaktlös kortbetalning pedade eftersom intran regt. Polysk. Spoilervarning gack i sosade i segisk regisk polynde. Krorade ål ana kross. Juna kavis i sojyspeng, hypont: i vafanytt sögon. 
                     </p>
                  </div>

                </div> 

                <div className="user_arrow">
                     <img src={arrow}/>
                  </div>    
            </div>

          <div className="frequently_ask_questions">
                <h1>Frequently asked Questions</h1>
                <div className="freq_ask_box">
                   
                  <div className="freq_ask_top">
                     <h2 className="freq_top_heading">What is a health declaration</h2>
                     <p className="freq_top_para">
                     A health declaration is a formal document that travelers must complete to confirm that they are not suffering from symptoms of COVID-19 or any other contagious illness.
                      </p> 
                  </div>      

                   <div className="freq_ask_other">
                      <h2 className="freq_ask_other_head">
                      Do I need a COVID-19 vaccine certificate to travel?
                        </h2>   
                   </div>
                   <div className="freq_ask_other">
                      <h2 className="freq_ask_other_head">
                      Do I need a COVID-19 test to travel?
                        </h2>   
                   </div> 

                   <div className="freq_ask_other">
                      <h2 className="freq_ask_other_head">
                      How do I know when I need a visa?
                        </h2>   
                   </div> 
                   <div className="freq_ask_other">
                      <h2 className="freq_ask_other_head">
                      Once I apply, when I will receive my visa?
                        </h2>   
                   </div> 
                   <div className="freq_ask_other">
                      <h2 className="freq_ask_other_head">
                         How I apply?
                        </h2>   
                   </div>
                   <div className="freq_ask_other">
                      <h2 className="freq_ask_other_head">
                      Where can I check the status of my visa application?
                        </h2>   
                   </div>  
                </div>
          </div>


    </div>
  );
};

export default Visa;
