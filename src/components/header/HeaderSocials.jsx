import React from 'react';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://linkedin.com/in/amir-ali-cl" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/aha000111" target="_blank"><FaGithub/></a>
        <a href="https://dribbble.com" target="_blank"></a>
    </div>
  )
}

export default HeaderSocials
