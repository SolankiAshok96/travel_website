import React, { useState } from 'react';
import { useRef } from 'react';
import axios from 'axios';
import emailjs from '@emailjs/browser';
import { BsFillChatDotsFill } from 'react-icons/bs';
import { GoLocation } from 'react-icons/go';
import "bootstrap/dist/css/bootstrap.min.css";
import './Contact.css'


const Contact = () => {
    const form = useRef()

//     const sendEmail = (e) =>{
    
//         e.preventDefault();
    
//         emailjs.sendForm('service_boibuim', 'template_olqr2gj', form.current, 'eka9O5vDIQ94y0XdO')
//           .then((result) => {
//               console.log(result.text);
//           }, (error) => {
//               console.log(error.text);
//           }
//           );
//           e.target.reset(e)
      

// };
    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');
    const [to,setTo] = useState('tourdrift786@gmail.com')
   

    const sendEmail = async (e) =>{
        e.prevetDefault();
        try{
            await axios.post('/sendemail',{to,name,email,message});
           
            alert('Email sent Successfully')
        }
        catch(error){
            console.log(error);
            alert('Email error')
        }

    }

    return (
        <>
        <div className='containe'>
            <div className='head'>
                <img src='https://img.freepik.com/free-photo/traveler-standing-rock-doi-pha-tang-morning-fog-chiang-rai-thailand_335224-808.jpg?w=996&t=st=1694775116~exp=1694775716~hmac=5d33a5276a019af8064db6b34aea56496fc92d8ee7bcbe7aa08879ce8e9805e9' alt='about-bg' className='contact-img'></img>
                <div className='head-1 contact_heads-1'>
                    <h1 className='contactus_head'>Contact Us</h1>                   
                </div>
            </div>
         
            <div className='second-container'>
            <div className='row_para1'>
                <div className='col-12 col-md-6 mr-5 get_touch'>
                    <icon className="icon-c"><BsFillChatDotsFill /></icon>
                    <h4 className='para1_contact_head'> Get In Touch</h4>
                     <div className='para1_detail'>
                     <p className='tel'>Telephone: +5445545656 </p>
                    <p className='tel'> Mobile : +91 7869617798</p>
                     </div>
                  
                    <h6 className='row_bottom'>Hello@Tourdrift.com</h6>
                </div>
                     <div className='line'>.</div>
                <div className='col-12 col-md-6 visit'>
                    <icon className="icon-c_2"><GoLocation /></icon>
                    <h4 className='para1_contact_head_2'> Visit Our Location</h4>
                    <p className='para1_contact_para'> Lorem ipsum dolor sit amet<br></br>consectetuer adipiscingelit. </p>
                    <h6 className='row_bottom_2'>Get Directions</h6>
                </div>
            </div>
            </div>
         
         
            <div className='third-container mt-4 mb-4'>
            <div className='row third_row' >
                <div className='col-12 col-md-6 contact_content'>
                <h5 className='third_cont_head'>CONTACT US</h5>
                    <h3 className='third_cont_head_q'> Have Any Questions? feel free to contact us.</h3>
                    <p className='third_cont_para'> Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh tempor cum soluta nobis consectetuer nihil imperdiet doming... </p>
                </div>
                <div className='col-12 col-md-6 third-second mb-3'>
                   
                    <form  ref={form} onSubmit={sendEmail} className='form'>
                    <div>
                    <div className='input-box'>
                        <h5 className='msg'> Write a Message</h5>

                         <div className='msg_input'>
                         <input type='text' className="txt mb-1" placeholder='Your Name' value={name} name='user_name' onChange={(e) =>setName(e.target.value)} required></input>
                        <input type='email'  className="txt " placeholder='Your Email' value={email} name='user_email' onChange={(e) =>setEmail(e.target.value)} required></input>
                         </div>
                     
                    </div>
                    <div>
                        <textarea className="textar" placeholder="Leave A Comment" rows="10"  value={message} name='message' onChange={(e) =>setMessage(e.target.value)}></textarea>
                        <button type='submit' className='btn-send' onSubmit={(e) => setTo(e.target.value)}> Send Message</button>
                    </div>
                    </div>
                    </form>
                </div>
            </div>
            </div>
           
        </div>
        </>
    )
}

export default Contact;