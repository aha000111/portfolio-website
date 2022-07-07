import React from 'react';
import './portfolio.css';
import IMG1 from '../../assets/GithubTracker.png';
import IMG2 from '../../assets/MusicApp.png';
import IMG3 from '../../assets/GithubTracker.png';
import IMG4 from '../../assets/SmallTalk.png';
import IMG5 from '../../assets/WhatsmyDoodle.png';
// import '../../assets/GithubTracker.png';



const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="screenshot of GitHub Tacker Project" />
          </div>
          <h3>This is a porfolio item title</h3>
          <a href="https://github.com/aha000111/Github-Tracker-App" className='btn' target='_blank'>Github</a>
          <a href="https://earnest-stroopwafel-d0b890.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="screenshot of GitHub Tacker Project" />
          </div>
          <h3>This is a porfolio item title</h3>
          <a href="https://github.com/aha000111/Github-Tracker-App" className='btn' target='_blank'>Github</a>
          <a href="https://earnest-stroopwafel-d0b890.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="screenshot of GitHub Tacker Project" />
          </div>
          <h3>This is a porfolio item title</h3>
          <a href="https://github.com/aha000111/Github-Tracker-App" className='btn' target='_blank'>Github</a>
          <a href="https://earnest-stroopwafel-d0b890.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="screenshot of GitHub Tacker Project" />
          </div>
          <h3>This is a porfolio item title</h3>
          <a href="https://github.com/aha000111/Github-Tracker-App" className='btn' target='_blank'>Github</a>
          <a href="https://earnest-stroopwafel-d0b890.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="screenshot of GitHub Tacker Project" />
          </div>
          <h3>This is a porfolio item title</h3>
          <a href="https://github.com/aha000111/Github-Tracker-App" className='btn' target='_blank'>Github</a>
          <a href="https://earnest-stroopwafel-d0b890.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src={IMG1} alt="screenshot of GitHub Tacker Project" />
          </div>
          <h3>This is a porfolio item title</h3>
          <a href="https://github.com/aha000111/Github-Tracker-App" className='btn' target='_blank'>Github</a>
          <a href="https://earnest-stroopwafel-d0b890.netlify.app/" className='btn btn-primary' target='_blank'>Live Demo</a>
        </article>
      </div>
      
      </section>
  )
}

export default Portfolio
