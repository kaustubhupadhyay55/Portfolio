import React,{useRef} from 'react'
import './contact.css';
import Leetcode from '../../Assets/leetcode.png';
import Github from '../../Assets/github.png';
import Facebook from '../../Assets/facebook.png';
import Instagram from '../../Assets/instagram.png';
import emailjs from '@emailjs/browser';
const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_flkuqbe', 'template_fu0vhy5', form.current, 'Yrd7_yHERt9qVV02g')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
        <div id="contact">
          <h1 className="contactPageTitle">Contact Me</h1>  
          <span className="contactDesc">Please fill out the form to discuss any work related query.</span> 
          <form action="" className="contactForm" ref={form} onSubmit={sendEmail}>
            <input type="text" className="name" placeholder='Your Name' name='from_name'/>
            <input type="email" className="email" placeholder='Your email' name='from_email'/>
            <textarea className='msg' name="message" rows="5" placeholder='Your Message'></textarea>
            <button type='submit' value='Send' className="sumbitbtn">Submit</button>
          </form> 
          <div className="links">
          <a href="https://www.facebook.com/kaustubh.upadhyay.94/" className="linkImg"><img src={Facebook} alt="Facebook" className="link" /></a>
          <a href="https://www.instagram.com/kaustubhhhh/" className="linkImg"><img src={Instagram} alt="Instagram" className="link" /></a>
          <a href="https://github.com/kaustubhupadhyay55" className="linkImg"><img src={Github} alt="Twitter" className="link" /></a>
          <a href="https://leetcode.com/kaustubh55/" className="linkImg"><img src={Leetcode} alt="Youtube" className="link" /></a>
            
            
          </div>
        </div>
  )
}

export default Contact
