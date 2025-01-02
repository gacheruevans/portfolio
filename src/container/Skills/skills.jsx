import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
// import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor,client } from '../../client';

import './skills.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const d = new Date();
  useEffect(() => {
    const query = `*[_type == "experiences"]`;

    client.fetch(query).then((data) => {
      setExperience(data);
    });
    
  }, [])
  
  return (
    <>
      <div className="app__skills-resume">
        <a 
          hidden
          href='https://gacheruevans.github.io/portfolio/resume.pdf' 
          className="app__skills-downloadbtn" 
          attributes-list download ="resume.pdf" 
          target="_blank" 
          rel="noreferrer" >Download Resume</a>
      </div>
      <div className="app__skills-container">
        <motion.div className="app__skills-exp">
          {
          experience?.map((experience)=> (
          <motion.div
            className="app__skills-exp-item"
            key={experience.company+experience.endyear}
          >
            <motion.div className="app__skills-exp-works">
              {experience.work.map((work) => (
                <>
                  <motion.div
                    whileInView={{opacity: [0 ,1]}}
                    transition={{duration: 0.5}}
                    className="app__skills-exp-work"
                    data-tip
                    data-for={work.role}
                    key={work.role}
                  >
                    <div className="app__skills-exp-year">
                      <p className="bold-text">{experience.company}</p>
                    </div>
                    <h3 className="bold-text">{work.role}</h3>
                    <h4 className="bold-text-years"><span>{work.startyear} - {d.getFullYear() === work.endyear ? 'Present': work.endyear}</span></h4>  
                    {
                      work.desc.split('. ').map((line) =>  <p className="p-text-desc"> - {line}</p>)
                    }
                    <motion.div
                      className="app__skills-list"
                    >
                      <motion.div
                        whileInView={{opacity: [0,1]}}
                        transition={{duration: 0.5}}
                        className="app__skills-item app__flex"
                         key={work.skills}
                      > 
                        {
                           work.skills.map((skill) => ( 
                              <motion.div
                                whileInView={{ opacity: [0, 1] }}
                                transition={{ duration: 0.5, type: 'tween' }}
                                key={work._id}
                                className="app__skills-item "
                              >
                              <>
                                 <img src={urlFor(skill.icon)}  key={skill.name} alt={skill.name} />
                                 <p className="p-text">
                                    {skill.name}
                                  </p>
                              </>
                            </motion.div>
                          ))
                        }
                      </motion.div> 
                    </motion.div>
                  </motion.div>
                </>
              ))}
            </motion.div>
          </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Skills, 'app__skills'),
  'experience',
  'app__whitebg'
);