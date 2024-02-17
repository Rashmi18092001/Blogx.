import '../css/contact.css';

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
function Contact() {
  return <>
    <div className='contact-main'>
        <div className='contact-left'>
          <h2>Drop us a line</h2>
          <form className='form'>
            <label htmlFor="">Full Name</label>
            <input type="text" placeholder="What's your full name ?"/>
            <label htmlFor="">Email address</label>
            <input type="text" placeholder="you@example.com"/>
            <label htmlFor="">Message</label>
            <textarea placeholder='Write your message for the team here'></textarea>

          </form>
          <div>
            <button className='foot-btn'>Submit</button>
          </div>
        </div>
        <div className='contact-right'>
            <img src='./images/contact.jpg'></img>
        </div>
    </div>
      <div className='foot-boxes'>
        <div className='box'>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d14888.070263407199!2d79.12098225!3d21.11186585!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1707309228045!5m2!1sen!2sin"   allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        
        <div className='box'>
          <h1>Meet us</h1>

            <div className='icon-container'>
              <div className='icon-list'>
                <div className='icon'><FontAwesomeIcon icon={faPhone} /></div>
                <div><p>+91 5847596212</p></div>
              </div>

              <div className='icon-list'>
                <div className='icon'>
                  <img className='icon-img' src="data:image/jpeg;base64,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" alt="" />
                </div>
                <div className='mail'><p>contact@blogx.com</p></div>
            </div>

            <div className='icon-list'>
                <div className='icon'><FontAwesomeIcon icon={faAddressCard} /></div>
                <div><p>Dani St, no 35, 4th floor, ap 10, Bucharest</p></div>
              </div>
            </div>
        </div>
      </div>

  </>

}

export default Contact;