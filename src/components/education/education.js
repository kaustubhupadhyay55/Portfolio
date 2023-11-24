import React from 'react'
import './education.css';
import Edu from '../../Assets/education.png';
import Intemediate from '../../Assets/intermediate.png';
import Highschool from '../../Assets/highschool.png';
import College from '../../Assets/college.png';
const Education = () => {
  return (
    <section id="education">
        
        <h1 className="educationTitle">Education<img src={Edu} alt="" className="eduImg" /></h1>
        <div className="oops">
        <div className="college">
              <img src={College} alt="" className="edImg" />
              <h3 className='heading'>SRM Institute of Science and Technology</h3>
              <p className='para'>Bachelor of Technology in Computer Science(8.86 <i>cgpa</i>)</p>
              <div className="year">2019-2023</div>
        </div>
        <div className="intermediate">
             <img src={Intemediate} alt="" className="edImg" />
            <h3 className='heading'>Blue Bird Sr. Sec. School</h3>
            <p className="para">Intermediate (XII) in science</p>
            <div className="year">2018-2019</div>
        </div>
        <div className="highschool">
            <img src={Highschool} alt="" className="edImg" />
            <h3 className="heading">Blue Bird Sr. Sec. School</h3>
            <p className="para">High School</p>
            <div className="year">2016-2017</div>
        </div>
        </div>
    </section>
  )
}

export default Education
