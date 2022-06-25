import React from 'react';
import './nav.css';
import {FaHome} from 'react-icons/fa';
import {BsFilePerson} from 'react-icons/bs';
import {FiBook} from 'react-icons/fi';
import {RiServiceFill} from 'react-icons/ri';
import {RiMessage2Line} from 'react-icons/ri'



const nav = () => {
  return (
    <nav>
      <a href="#"><FaHome /></a>
      <a href="about"><BsFilePerson /></a>
      <a href="experience"><FiBook /></a>
      <a href="services"><RiServiceFill /></a>
      <a href="contact"><RiMessage2Line /></a>

    </nav>
  )
}

export default nav