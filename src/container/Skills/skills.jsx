import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ReactTooltip from 'react-tooltip';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './skills.scss';

const Skills = () => {
  const [experience, setExperience] = useState([]);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const query = `*[_type == "experiences"]`;
    const skillsQuery = `*[_type == "skills"]`;

    client.fetch(query).then((data) => {
      setExperience(data);
    });

    client.fetch(skillsQuery).then((data) => {
      setSkills(data);
    });

  }, [])
  
  return (
    <>
      <h2 className="head-text"> Skills & <span>Experience</span></h2>
      <div className="app__skills-container">
        <motion.div
          className="app__skills-list"
        >
          {skills.map((skill) => (
            <motion.div
              whileInView={{opacity: [0,1]}}
              transition={{duration: 0.5}}
              className="app__skills-item app__flex"
              key={skill.name}
            > 
              <div className="app__flex" style={{backgroundColor: skill.bgColor}}>
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
        <motion.div className="app__skills-exp">
          {experience?.map((experience)=> (
          <motion.div
            className="app__skills-exp-item"
            key={experience.company}
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
                    <h4 className="bold-text-years"><span>{work.startyear} - {work.endyear}</span></h4>
                    <p className="p-text-desc">{work.desc}</p>
                  </motion.div>
                  <ReactTooltip
                      id={work.role}
                      effect="solid"
                      arrowColor='#fff'
                      className="skills-tooltip"
                  >
                    <p className="p-text">
                      {work.skills.map((skill) => skill)}
                    </p>
                  </ReactTooltip>
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
  'skills',
  'app__whitebg'
);