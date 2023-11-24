import React from 'react'
import './intro.css'
import bg from '../../Assets/image.png'
import {Link} from 'react-scroll';
import btnImg from '../../Assets/bag.png'
const Intro = () => {
  return (
    <section id='intro'>
      <div className='introContent'>
      <span className='hello'>Hello,</span>
      <span className='introText'>I'm <span className='introname'>Kaustubh</span><br/>Web Developer</span>
      <p className='introPara'>I am a skilled web developer with perfection in creating <br/>visually appealing and user friendly websites.</p>
      <Link><button className='btn'><img src={btnImg} alt='HireMe' className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt='Profile' className='bg'></img>
    </section>
  )
}

export default Intro

