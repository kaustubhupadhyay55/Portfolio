import React from 'react'
import './works.css';
import HTML from '../../Assets/html.png';
import DataStructure from '../../Assets/datastructure.png';
import Javascript from '../../Assets/javascript.png';
import CSS from '../../Assets/css.png';
import react from '../../Assets/react.png';
const Works = () => {
  return (
    <section id="works">
        <h2 className="worksTitle">My Skills</h2>
        <span className="worksDesc">I am skilled and passionate web developer as i build visually appealing and user friendly websites. I am proficient in HTML,Css,Javascript,React as well as in Data structure.</span>
        <div className="skills">
        <div className="worksImgs" id='html'>
        <img src={HTML} alt="HTML" className="workImg"/>
        <h3 className="language">HTML</h3>
        </div>
        <div className="worksImgs" id='css'>
        <img src={CSS} alt="" className="workImg" />
        <h3 className="language">Cascading stylesheet</h3>
        </div>
        
        <div className="worksImgs" id='javascript'>
        <img src={Javascript} alt="" className="workImg" />
        <h3 className="language">Javascript</h3>
        </div>
        
        <div className="worksImgs" id='react'>
        <img src={react} alt="" className="workImg" />
        <h3 className="language">React</h3>
        </div>
        
        <div className="worksImgs" id='data structure'>
        <img src={DataStructure} alt="" className="workImg" />
        <h3 className="language">Data Structure</h3>
        </div>
        </div>
        <button className="worksBtn">See More</button>
    </section>
  )
}

export default Works
