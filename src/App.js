import React from 'react'
import Navbar from './components/NavBar/navbar';
import Intro from './components/Intro/intro';
import Skills from './components/skills/skills';
import Works from './components/works/works';
import Contact from './components/contact/contact';
import Footer from './components/footer/footer';
import Education from './components/education/education';
const App = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Intro></Intro>
      <Works></Works>
      <Skills></Skills>
      <Education></Education>
      <Contact></Contact>
      <Footer></Footer>
    </div>
  )
}

export default App;

