import React from 'react';
import './contact.css';
import {MdOutlineMarkEmailUnread} from 'react-icons/md';
import {BsMessenger} from 'react-icons/bs';
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2r2dsyi', 'template_3fnwpga', form.current, 'JUuU8rjvdMydZZcH4')

    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineMarkEmailUnread className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>aha000111@icloud.com</h5>
            <a href='mailto:aha000111@icloud.com' target="_blank">Send a Message</a>
          </article>       
          <article className="contact__option">
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            {/* <h5>afsafaf</h5> */}
            <a href='https://m.me/profile.php?id=100048549632775' target="_blank">Send a Message</a>
          </article>       
          <article className="contact__option">
            <BsWhatsapp className='contact__option-icon'/>
            <h4>WhatsApp</h4>
            <h5>+44 7877332512</h5>
            <a href="https://api.whatsapp.com/send?phone+447877332512" target="_blank">Send a Message</a>
          </article>
        </div>
        {/* END OF CONTACTS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact
