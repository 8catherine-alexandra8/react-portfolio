import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";

import { projectState } from "../projectState";
import ScrollTop from '../components/ScrollTop'
//Animations
import { motion } from "framer-motion";
import { pageAnimation, lineAnim } from "../animation";

const ProjectDetailScreen = () => {
  const history = useHistory();
  const url = history.location.pathname;
  const [projects] = useState(projectState);
  const [project, setProject] = useState(null);

  useEffect(() => {
    const currentProject = projects.filter((stateProject) => stateProject.url === url);
    setProject(currentProject[0]);
  }, [projects, url]);

  return (
    <>
    <ScrollTop />
      {project && (
        <ProjectDetailWrapper>
        <HeadLine           
          initial="hidden"
          animate="show"
          id='headline'>
            <h2>{project.title}</h2>
            <p>{project.about}</p>
            <motion.div variants={lineAnim} className='line' />
        </HeadLine>
        <ProjectLinks
          exit="exit"
          variants={pageAnimation}
          initial="hidden"
          animate="show"
        >
            <div className='project-gif'>
              <a 
              id='link-to-deployed'
              href={project.gifLink}
              target='_blank'
              rel='noreferrer'
              className='project-link'
              >
              <img src={project.gif} alt="project" className='gif-img' width={project.gifWidth}/>
              <i class="fas fa-external-link-alt"><span> Go to deployed site</span></i>
              </a>
            </div> 
            <div className='project-git'>
              <a
              id='link-to-repo'
              href={project.gitLink}
              target='_blank'
              rel='noreferrer'
              className='project-link'
              >
              <img src={project.git} alt="project" className='git-img' />
              <i class="fas fa-external-link-alt"><span> Go to GitHub repo</span></i>
              </a>
            </div>
          </ProjectLinks>
          <Details>
            <DetailsSection>
              <h3>Front End</h3>
              <div className='line'></div>
              {project.frontEndTech.map((tech) => (
                <i class="far fa-check-square" key={tech}><span>{tech}</span></i>
              ))}
            </DetailsSection>
            <DetailsSection>
              <h3>Back End</h3>
              <div className='line'></div>
              {project.backEndTech.map((tech) => (
                <i class="far fa-check-square" key={tech}><span>{tech}</span></i>
              ))}
            </DetailsSection>
            <DetailsSection>
              <h3>Future Enhancements</h3>
              <div className='line'></div>
              {project.futureEnhancements.map((enhancement, index) => (
                <i class="far fa-plus-square enhancements" key={index}><span className='enhancements'>{enhancement}</span></i>
              ))}
            </DetailsSection>
          </Details>
          </ProjectDetailWrapper>
      )}
      </>
  );
};


const ProjectDetailWrapper = styled.div`
  margin-top: 8vh;
  @media (min-width: 540px){
    padding: 10%;
  }
  @media (min-width: 768px){
    padding: 5%;
  }
  @media (min-width: 1024px){
    padding: 2%;
  }


`
const ProjectLinks = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem 2rem;
  @media (min-width: 768px) {
    padding: 5rem 10rem 1rem 10rem;
  }
  @media (min-width: 1024px) {
    max-height: 55vh;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    padding: 2rem 10rem 2rem 10rem;
    color: white;
    span {
      font-size: 1.1rem;
    }
  }

  .project-gif {
    display: block;
    padding: 2rem 2rem;
    width: 100%;
    text-align: center;
    max-width: 700px;
    img {
      max-width: 100%;
    }
  }

  .project-git {
    display: block;
    text-align: center;
    padding: 2rem;
    img {
      margin: auto;
      max-height: 180px;
      @media (min-width: 540px){
        max-height: 220px;
      }
      @media (min-width: 1500px){
      min-height: 400px;
      object-fit: cover;
      }
    }
  }

  a {
    text-decoration: none;
    i:hover {
      color:  #E9FA03;
    }
  }

  i {
    overflow: hidden;
    display: block;
    color: #0B4c5F;
    padding-top: 8px;
    text-align: center;
    font-size: 1.5rem;
    span {
      font-family:  'Roboto', sans-serif; 
    }
  } 
`;

const HeadLine = styled(motion.div)`
  display: block;
  padding: 2rem 2rem;
  color: white;
  p {
    padding: 2rem 0rem;
    font-size: 1.6rem;
  }
  .line {
  height: 0.5rem;
  background: #0B4C5F;
  margin-bottom: 1rem;
  }


  @media (min-width: 768px) {
  display: block;
  overflow: hidden;
  padding: 5rem 10rem 1rem 10rem;
  p {
    padding: 2rem 0rem;
  }
  }
`;
 

const Details = styled.div`
  display: block;
  padding: 2rem 2rem;
  @media (min-width: 768px) {
    padding: 5rem 10rem 1rem 10rem;
  }
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
  }
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  padding-bottom: 5rem;
  min-width: 25%;
  h3 {
    font-size: 1.8rem;
  }
  .line {
    width: 100%;
    background: #0B4C5F;
    height: 0.5rem;
    margin: 1rem 0rem;
  }
  i {
    color: #E9FA03;
    font-size: 1.6rem;
  }
  span {
    padding-left: .8rem;
    color: white;
    font-size: 1.6rem;
    font-family:  'Roboto', sans-serif; 
    font-weight: lighter;
  }
  .enhancements {
      font-size: 1.6rem;
      padding-bottom: 2rem;
    }
  @media (min-width: 1200px) {
    padding: 3rem; 
    align-self: flex-start;
    h3 {
      font-weight: normal;
    }
  } 
`;

export default ProjectDetailScreen;