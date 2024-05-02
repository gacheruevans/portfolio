import React from 'react';
import { BsTwitterX,BsInstagram } from 'react-icons/bs';
import { FaFacebook } from 'react-icons/fa';

const SocialMedia = () => {;
  return (
    <div className="app__social">
        <div>
            <a href="https://twitter.com/EvansGacheru"><BsTwitterX /></a>
        </div>
        <div>
            <a href="https://www.facebook.com/evan.g.munene"><FaFacebook /></a>
        </div>
        <div>
        <a href="https://www.instagram.com/evan.gacheru/"><BsInstagram /></a>
        </div>
    </div>
  )
};

export default SocialMedia;