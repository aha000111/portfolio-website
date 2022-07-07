import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/GithubTracker.png';
import IMG2 from '../../assets/MusicApp.png';
import IMG4 from '../../assets/SmallTalk.png';
import IMG5 from '../../assets/WhatsmyDoodle.png';



const data = [
  {
    id: 1,
    image: IMG1,
    title:'GitHub Tracker',
    github: 'https://github.com/aha000111/Github-Tracker-App',
    demo: 'https://earnest-stroopwafel-d0b890.netlify.app/'
  },
  {
    id: 2,
    image: IMG2,
    title:'MusicApp',
    github: 'https://github.com/aha000111/MusicApp',
    demo: 'https://fascinating-youtiao-6e761f.netlify.app/'
  },
  {
    id: 4,
    image: IMG4,
    title:'smallTalk',
    github: 'https://github.com/aha000111/smallTalk_Client',
    demo: 'https://smalltalkapp.netlify.app/'
  },
  {
    id: 5,
    image: IMG5,
    title:'Whats My Doodle?',
    github: 'https://github.com/aha000111/ClientQuizzards',
    demo: 'https://whatsmydoodlee.netlify.app/'
  }
]


const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article key={id} className='portfolio__item'>
              <div className="portfolio__item-image">
                <img src={image} alt={title} /> 
              </div>
              <h3>{title}</h3>
              <div className="portfolio__item-cta">
                 <a href={github} className='btn' target='_blank'>Github</a>
                 <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
              </div>
            </article>
            )
          })
        }
      </div>
      </section>
  )
}

export default Portfolio
