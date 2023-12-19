import React from 'react';
import '../styles/contact.css';
import emailjs, { send, sendForm } from 'emailjs-com'

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_x8tcxa6', 'template_rsx2azd', e.target, 'HimomhgE4zD3HqF4K')
      .then((res) => {
        console.log('Email sent successfully:', res);
      })
      .catch((err) => {
        console.error('Failed to send email:', err);
      });
  };
  
  return (
    <>
      <div className="contact">
        <h1 className="grid">Contact Us</h1>
      </div>

      <div className="map grid">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.3556440951643!2d77.20348287629035!3d28.64906807565573!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfdea13adbb23%3A0xbab96552d8ad7296!2sD%20CORE%20FITNESS!5e0!3m2!1sen!2sin!4v1702931684494!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

<div className="contact_details">
  <div className="left_side_contact">
    <h3>Contact Us</h3>
    <h2>GET IN TOUCH</h2>
    <div className="left_favicons">
      <ul>
    <li><i className='fa-solid fa-location-dot'></i><span>70, 2nd Floor, rani jhansi road, furniture market Back side reliance fresh, Delhi 110055
    </span></li>
<li> <i className="fa-solid fa-mobile-screen-button"></i><span> 9582124881</span></li>
<li> <i className="fa-solid fa-envelope"></i><span> dcorefitness01@gmail.com</span></li>

      </ul>
    </div>
  </div>
  <div className="right_side_contact">
    <form onSubmit={sendEmail}>

   
        <input type="text" name="user_name" placeholder='NAME'/><br/>

   
        <input type="tel" name="user_mobile_number" placeholder='Mobile number'/><br/>

        
        <input type="email" name="user_email" placeholder='Email id'/><br/>

      
        <textarea name="textarea" id="" cols="30" rows="10" placeholder='Message' ></textarea>
        
      </form>
      <button value={sendForm}>Submit</button>

  </div>
</div>
      
    </>
  );
};

export default Contact;
