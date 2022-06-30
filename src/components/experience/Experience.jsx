import React from 'react';
import './experience.css';
import {BsPatchCheckFill} from 'react-icons/bs';

const Experience = () => {
  return (
    <section id='experience'>
      <h5>Skills I Have Learned</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>
          <div className="experience__content">
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>HTML</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>CSS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>Bootstrap</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>JavaScript</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>React</h4>
              <small className='text-light'>Intermediate</small>
            </article>
          </div>
        </div>
{/* End of Frontend  */}

        <div className='experience__backend'>
        <h3>Backend Development</h3>
          <div className="experience__content">
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>MongoDB</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>MySQL</h4>
              <small className='text-light'>Intermediate</small>
            </article>
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>Python</h4>
              <small className='text-light'>Basic</small>
            </article>
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>Node JS</h4>
              <small className='text-light'>Experienced</small>
            </article>
            <article className="eperience__details">
              <BsPatchCheckFill />
              <h4>Solidity</h4>
              <small className='text-light'>Beginner</small>
            </article>
          </div>
        </div>
      </div>
      </section>
  )
}

export default Experience