import React, { useState } from 'react';

import { images } from '../../constants';
import { AppWrap, MotionWrap } from '../../wrapper';
import { client } from '../../client';
// import { createAssessment } from '../../utils/recaptcha.js'
import './footer.scss';

const Footer = () => {
  const [formData, setformData] = useState({name:'', email:'', message:''});
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [isValidated, setIsValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const reCAPTCHA_site_key = process.env.RECAPTCHA_SITE_KEY;

  const {name, email, message } = formData;
  const handleChangeInput = (e) => {
    const {name, value } = e.target;

    setformData({ ...formData, [name]: value });
  }; 
  const handleSubmit = () => {
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

  const handleGcaptcha = (e) => {
    e.preventDefault();
    // const result = createAssessment();
    // setIsValidated(result);
  };

  return (
   <>
    <h2 className="head-text"> Take a coffe & <span>chat with me</span></h2>
    <div className="app__footer-cards">
      <div className="app__footer-card">
        <img src={images.email} alt="email"/>
        <a href="mailto:letschat@evansgacherumunene.co.ke" className="p-text">letschat@evansgacherumunene.co.ke</a>
      </div>
      <div className="app__footer-card">
        <img src={images.mobile} alt="mobile"/>
        <a href="tel:+(254) 720-851-489" className="p-text">+(254) 720-851-489</a>
      </div>
    </div>
    
    {!isFormSubmitted ? (
      <div className="app__footer-form app_flex">
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
        { !isValidated ? 
          (
              <button className="g-recaptcha" data-sitekey={reCAPTCHA_site_key} data-callback='onSubmit' data-action='submit' onClick={handleGcaptcha}>
                Submit
              </button>
            )
          :
          (
            <button type="button" className="p-text" onClick={handleSubmit}>
              {loading ? 'Sending Message...' : 'Sending Message'}
            </button>
          )
        }
      </div>
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