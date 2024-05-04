import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import './about.scss';
import { urlFor, client } from '../../client';

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = '*[_type == "about"]'; 
    
    client.fetch(query).then((data) => {
      setAbouts(data);
    }); 
  }, []);

  return (
    <>
      <div className='app_about-description'>
        <p className='p-text'>
          I am a seasoned senior software engineer with over <span>11+ years</span> of impactful contributions to tech-focused organizations.
          My journey includes impactful contributions to prominent companies such as Andela, Membio, Foursquare, Invision, and SettleMint, where I consistently developed, maintained and improved innovative software solutions 
          across diverse technologies in both <span>Backend</span> and <span>Frontend</span> stacks while collaborating seamlessly with cross-functional teams.
        </p>
      </div>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{scale: 1.1}}
            transition={{duration: 0.5, type: 'tween'}}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={urlFor(about.imgUrl)} alt={about.title}/>
            <h2 className="app__profile-title bold-text" style={{marginTop: 20}}>{about.title}</h2>
            <p className="p-text" style={{marginTop: 10}}>{about.description}</p>
          </motion.div>
        ))}
      </div>
    </>
)
}

export default AppWrap(
  MotionWrap(About, 'app__about'),
  'about',
  'app__whitebg'
);