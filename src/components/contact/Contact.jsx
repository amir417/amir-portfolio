import React from 'react'
import './contact.css'
import {HiOutlineMail} from 'react-icons/hi'
import  { useRef } from 'react';
import emailjs from 'emailjs-com';


const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x2du6a5', 'template_6w9zjwf', form.current, 'zrA57UfiSKA3d1ltJ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };
  return (
    <section id='contact'>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <HiOutlineMail/>
            <h4>Email</h4>
            {/* <h5>aazam.amirreza@gmail.com</h5> */}
            <a href="mailto: aazam.amirreza@gmail.com">Send a message</a>
          </article>


        </div>
      

      <form action="" className='form' ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder='Your Full Name' required />
        <input type="email" name='email' placeholder='Your Email' required />
        <textarea name="message" id="" cols="30" rows="10"  placeholder='Your Message'></textarea>
        <button type='submit' className='btn btn-primary'>Send Message</button>
      </form>
      </div>







    </section>
  )
}

export default Contact


