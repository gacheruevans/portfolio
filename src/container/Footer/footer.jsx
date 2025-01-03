import React, { useState, useRef } from 'react';

import  emailjs from '@emailjs/browser';
import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
import './footer.scss';

const Footer = () => {
  const [formData, setformData] = useState({name:'', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {name, email, message } = formData;
  const form = useRef();
  const handleChangeInput = (e) => {
    const {name, value } = e.target;

    setformData({ ...formData, [name]: value });
  } 
  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_oi6qs8e', 'template_5lm61fo', form.current,{
      publicKey: 'X5NI5OGzhOh1WjuuA'
    })
      .then(()=> {
        console.log('Sent Email!')
      },(error) => {
      console.log('Failed sending email...', error.text);
    });

    setLoading(true);

    const contact = {
      _type: 'contact',
      name: name,
      email: email,
      message: message,
    };

    client.create(contact)
      .then(() =>{
      setLoading(false);
      setIsFormSubmitted(true);
    })
    .catch((err) => console.log(err));
  };
  return (
   <>
    <h2 className="head-text"> Take a coffe & <span>chat with me</span></h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email"/>
        <a href="mailto:evans.gacheru.munene@gmail.com" target='_blank' rel="noreferrer" className="p-text">evans.gacheru.munene@gmail.com</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile"/>
        <a href="tel:+(254) 720-851-489" className="p-text">+(254) 720-851-489</a>
      </div>
    </div>
    
    {!isFormSubmitted ? (
      <form ref={form} className="app__footer-form app_flex">
        <div className="app__flex">
          <input className="p-text" placeholder="Your name" name="name" value={name} onChange={handleChangeInput}></input>
        </div>
        <div className="app__flex">
          <input className="p-text" placeholder="Your email" name="email" value={email} onChange={handleChangeInput}></input>
        </div>
        <div>
          <textarea 
            className="p-text" 
            placeholder="Your message"  
            value={message} 
            name="message"
            onChange={handleChangeInput}></textarea>
        </div>
        <button type="button" className="p-text" onClick={handleSubmit}>{loading ? 'Sending Message...' : 'Send Message'}</button>
      </form>
        
      ) : (
      <div>
        <h3 className="head-text"> Thank you for getting in touch!</h3>
        </div>
      )}
   </>
  )
}

export default AppWrap(
  MotionWrap(Footer, 'app__footer'),
  'contact',
  'app__whitebg'
);