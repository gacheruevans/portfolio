import React, { useState } from 'react';
import { HiMenuAlt4, HiX } from 'react-icons/hi';
import { motion } from 'framer-motion';

import './Navbar.scss';

const Navbar = () => {
  const [activeFilter, setactiveFilter] = useState('home');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <p className="bold-text"><span>E</span>G<span>M</span></p>
      </div>
      <ul className='app__navbar-links'>
        {['home', 'about', 'projects', 'experience','testimonial', 'contact'].map((item)=>(
          <li
            onClick={() => setactiveFilter(item)} 
            className={`app__flex p-text`} 
            key={`link-${item}`}>
            <a 
              href={`#${item}`} 
              className={`${activeFilter === item ? 'item-active' : ''}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
          <HiMenuAlt4 onClick={() => setToggle(true)} />

          {toggle && (
            <motion.div
              whileInView={{ x: [300, 0] }}
              transition={{ duration: 0.85, ease: 'easeOut' }}
            >
              <HiX onClick={() => setToggle(false)} />
              <ul>
                {['home', 'about', 'projects', 'experience', 'testimonial', 'contact'].map((item)=>(
                  <li key={item} >
                    <a 
                      href={`#${item}`} 
                      onClick={() => { setToggle(false); setactiveFilter(item); }}
                      className={`${activeFilter === item ? 'item-active' : ''}`} 
                      >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
      </div>
    </nav>
  );
};

export default Navbar;