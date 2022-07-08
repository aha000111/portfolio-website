import React from 'react';
import './about.css';
import ME from '../../assets/aboutme.png';
import {FaAward} from 'react-icons/fa';
import {GiOilPump} from 'react-icons/gi';
import {FaBriefcase} from 'react-icons/fa';


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
          <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>3 months experience</small>
            </article>
            
            <article className="about__card">
              <GiOilPump className='about__icon'/>
              <h5>Background</h5>
              <small>Petroleum Engineering</small>
            </article>
            
            <article className="about__card">
              <FaBriefcase className='about__icon'/>
              <h5>Projects</h5>
              <small>5+ and growing!</small>
            </article>
          </div>
          <p>

            My hobbies include: gym, tennis, visiting ancient Megalith's, and binge-watching netflix.                                                    

          </p>

          <p>
            I have a deep appreciation for the strides and increased efficiency today's technology affords us, enabling us to do and experience magnitudes more by abstracting away the tedious - remember sending letters to the Bank? 
            Extrapolating not too far in the distant future, I'm incredibly excited about society moving away from the reliance on paper promises - a structural pillar the world has relied upon for thousands of years without success, to a cryptographically secured altnerative - the first time in known human history such an alternative exists and wouldn't be possible without a) the advent of the world wide web and b) the solving of the double spend problem was solved in 2009. 
          </p> 

          <p> 
            Nixon once said, "Trust but verify". 
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About
