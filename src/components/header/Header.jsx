import React from 'react';
import CTA from './CTA';
import './header.css';
import ME from '../../assets/me.jpeg';

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Amir Ali</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />


        <div className="me">
          <img src={ME} alt="me" />
        </div>

        <a href="#contact" className='scroll_down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header