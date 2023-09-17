
import React from 'react'
import { GoGoal } from 'react-icons/go';
import './About.css'

const About = () => {

    return (
        <>
        <div className='main-about-container containe'>
            <div className='head'>
         <img className='about_background_img' src='service-bg.jpg' alt='about-bg'></img>  
                <div className='head-1 '>
                     
                      <h2 className='about_heading_top' > We are Grand Tour World <br/>class Travel Agency</h2>
                     
                     <h6 className='about_heading_bottom'> Trips, experiences, and places. All in one service.</h6>

                </div>
            </div>
            <div className='row p-5'>
                <div className='col-12 col-md-6 mt-3 person-cont'>
                    <img src='person-01.jpg' alt='person' className='person1-img'/>
                </div>
                <div className='col-12 col-md-6 mt-3 service_content'>
                    <p className='tour_heading'>Best Tour Services</p>
                    <h3 className='tour_heading_h3'>Trusted & Award WinningTour Agency</h3>
                    <h5 className='para'>By investing in technology that takes the friction out of travel .Wherever you want to go and whatever you want to do,Tourdrift makes it easy and supports you with 24/7 customer support</h5>
                    <p className='about_tour_service'><GoGoal className='gogoal' /> Our services are more affordable than you think</p>
                    <p className='about_tour_service'><GoGoal className='gogoal' /> We are a fully insured nationally ranked brand.</p>
                    <p className='about_tour_service'><GoGoal className='gogoal' /> We are a fully insured nationally ranked brand.</p>
                    <p className='about_tour_service'><GoGoal className='gogoal' /> We are a fully insured nationally ranked brand.</p>
                </div>
            </div>
        
            <div className='row ticket-cont p-5'>
               
               <div className='col-6 col-md-4 mt-2 tour_guide' >
                    <h3 className='tours_head_h3'><span className='tours_num'>01</span>Flights Tickets</h3>
                    <p className='tour_para'> Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
                <div className='col-6 col-md-4 mt-2 tour_guide' >
                    <h3 className='tours_head_h3'><span className='tours_num'>02</span>Luxury Hotels</h3>
                    <p className='tour_para'>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
                <div className='col-6 col-md-4 mt-2 tour_guide' >
                    <h3 className='tours_head_h3'><span className='tours_num'>03</span>Visa Process</h3>
                    <p className='tour_para'>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
                <div className='col-6 col-md-4 mt-2 tour_guide' >
                    <h3 className='tours_head_h3'><span className='tours_num'>04</span>Tourist Guide</h3>
                    <p className='tour_para'>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
                <div className='col-6 col-md-4 mt-2 tour_guide' >
                    <h3 className='tours_head_h3_I'><span className='tours_num'>05</span>International Packages</h3>
                    <p className='tour_para_I'>Lorem ipsum dolor sit amet,<br></br>
                        consectetuer adipiscing elit,sed<br></br>
                        diam nonummy nibh tempor cum<br></br>
                        soluta nobis consectetuer nihil<br></br>
                        imperdiet doming...
                    </p>
                </div>
            </div>
             

                <div className='about_bitch'>
                   <img src='nature.jpg' alt='no img'/>

                   <div className='bitch_content'>
                    <p className='bitch_head'>Get 10% Off On Your Next Travel</p>
                     <p className='bitch_head_p'>Travel between 22 June to 21 July and get existing offers along with a sure 10% cash discount</p>
                      <button className='tour_button' >Explore Tour</button>
                   </div>

                </div>
            

            <div className='row reviews pt-5 review'>
                <div className='col-12 p-2'>
                    <h3 className='review_heading'>Top Tour Reviews</h3>
                </div>
                <div className='col-12 col-md-4'>
                    <div className='review_box'>
                        <p className='review_box_para'>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>

                            

                    </div>
                       <div className='tringle'></div>
                    <div className='image-details'>
                        <img src='Image-1.jpeg' alt='member-1' className='mem'></img>
                        <p className='review_name'>Kevin Smith</p>
                    </div>
                </div>

                <div className='col-12 col-md-4'>
                    <div className='review_box'>
                        <p className='review_box_para'>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>

                    </div>
                    <div className='tringle'></div>

                    <div className='image-details'>
                        <img src='Image-2.jpeg' alt='member-2' className='mem'></img>
                        <p className='review_name'>Christine Eve</p>
                    </div>
                </div>

                <div className='col-12 col-md-4'>
                    <div className='review_box'>
                        <p className='review_box_para'>Lorem ipsum denisode kantakktios<br></br>
                        kartbetaining pedade eftersom intran regt.<br></br>
                        Polysk Spoilervarning gack i sosade i segisk <br></br>
                        regisk polynde.Krorade al ana kross.Juna<br></br>
                        kavis i sojspeng hypant .i vafanytt sogan.</p>
                    </div>
                    <div className='tringle'></div>

                    <div className='image-details'>
                        <img src='Image-3.jpeg' alt='member-3' className='mem'></img>
                            <p className='review_name'>Mike</p>
                    </div>
                </div>
            </div>
               
               
               <div className='visa_banner'>
                  <div className='left_content'>
                        <h1 className='left_content_head'>Are You Looking for Visa Consultation ?</h1>
                            <button className='left_content_button'>Book Appointment</button>
                  </div>
                    <div className='right_content'>
                           <img src='visa.jpg' alt='no img'/>
                    </div>
               </div>

        </div>
        </>
    )
}
export default About;
