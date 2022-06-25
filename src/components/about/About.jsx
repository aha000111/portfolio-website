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
              <small>10+</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi ipsam ipsum non aspernatur! 
            Autem animi nisi unde in totam aperiam harum nostrum velit earum nihil? 
            Perferendis sed ullam eos esse!
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About