import React, { useState, useEffect } from 'react';
import { AiFillEye, AiFillGithub } from 'react-icons/ai';
import { motion } from 'framer-motion';

import { AppWrap, MotionWrap } from '../../wrapper';
import { urlFor, client } from '../../client';
import './work.scss';

const Work = () => {
  const [activeFilter, setactiveFilter] = useState('All');
  const [animateCard, setAnimateCard] = useState({ y:0, opacity: 1});
  const [projects, setProjects] = useState([]);
  const [filterProject, setfilterProject] = useState([]);

  useEffect(() => {
    const query = `*[_type == "works"]`;
    client.fetch(query).then((data) => {
      setProjects(data);
      setfilterProject(data);
    });
  }, [])
  
  const handleWorkFilter = (item) => {
    setactiveFilter(item);
    setAnimateCard([{y:100, opacity: 0}]);

    setTimeout(() => {
      setAnimateCard([{y:0, opacity: 1}]);

      if( item === 'All') {
        setfilterProject(projects);
      }else{
        setfilterProject(projects.filter((project) => project.tags.includes(item)));
      }
    }, 500);
  }
  return (
    <>
    <h2 className="head-text"> <span> Good Apps</span> <br /> means <span>Good Business</span></h2>
     <div className="app_work-filter">
        {['ReactJs', 'UI/UX', 'DevOps', 'NextJs', 'Web3', 'Python', 'All'].map((item, index) => (
          <div 
            key={index} 
            onClick={ () => handleWorkFilter(item)}
            className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
          >
            {item}
          </div>
        ))}
     </div>
     <motion.div
        animate={animateCard}
        transition={{duration: 0.5, delayeChildren: 0.5}}
        className="app__work-portfolio"
     >
        {filterProject.map((project, index) => (
          <div className="app__work-item app__flex" key={index}>
            <div className="app__work-img app__flex">
              <img src={urlFor(project.imgUrl)} alt={project.name}/>
              <motion.div
                whileHover={{opacity: [0, 1]}}
                transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                className="app__work-hover app__flex"
              >
                <a href={project.projectLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                    className="app__flex"
                  >
                    <AiFillEye />
                  </motion.div>
                </a>
                <a href={project.codeLink} target="_blank" rel="noreferrer">
                  <motion.div
                    whileInView={{scale: [0, 1]}}
                    whileHover={{scale: [1, 0.9]}}
                    transition={{duration: 0.25, ease: 'easeInOut', staggerChildren: 0.5}}
                    className="app__flex"
                  >
                    <AiFillGithub />
                  </motion.div>
                </a>
              </motion.div>
            </div>
            <div className="app__work-content app__flex">
              <h4 className="bold-text">{project.title}</h4>
              <p className="p-text" style={{marginTop: 10}}>{project.description}</p>
              
              <div className="app__work-tag app__flex">
                <p className="p-text">{project.tags[0]}</p>
              </div>
            </div>
          </div>
        ))}
     </motion.div>
    </>
  )
}

export default AppWrap(
  MotionWrap(Work, 'app__works'),
  'projects',
  'app__primarybg'
);