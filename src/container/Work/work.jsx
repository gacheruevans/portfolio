import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './work.scss';

const Work = () => {
  const [activeFilter, setactiveFilter] = useState('All')
  const handleWorkFilter = (item) => {
    
  }
  return (
    <>
     <h2 className="head-text"> My Creative <span> Portfolio</span> <span> Section </span></h2>
     <div className="app_work-filter">
        {['UI/UX','DevOps','ReactJs','Python','All'].map((item, index) => (
          <div 
            key={index} 
            onClick={()=> handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
     </div>
    </>
  )
}

export default Work