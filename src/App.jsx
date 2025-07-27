import React from 'react'
import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Education } from './components/Education'
import { Footer } from './components/Footer'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'



function App() {
  

  return (
    <>
       <div >
           <div >
              <Navbar/>
              <About/>
              <Skills/>
              <Projects/>
              <Education/>
              <Contact/>
              <Footer/>
          </div>
       </div>
   


    </>
  )
}

export default App
