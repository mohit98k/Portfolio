import {FiMenu,FiX} from 'react-icons/fi'
import {FaGithub,FaLinkedin} from 'react-icons/fa'
import React, { useState } from 'react'

export const Navbar = () => {

  const [menuOpen , setMenuOpen]=useState(false)

  const toggleMenu=()=>{
    setMenuOpen(!menuOpen)
  }

  return (

/* title*/

    <div className='flex justify-evenly md:fixed z-10  bg-[#7a76b13e] md:w-full'>
        <div className='my-3 font-lg font-semibold'>
          <span className='text-[#8245ec] text-lg font-semibold'>&lt;</span>
          <span className='text-[#09BC8A] text-lg font-semibold'>Mohit</span>
          <span className="text-white text-lg font-semibold">/</span>
          <span className="text-[#09BC8A] text-lg font-semibold">Sharma</span>
          <span className="text-[#8245ec] text-lg font-semibold">&gt;</span>
        </div>


{/* Menu Desktop */}

        <div className='justify-between  hidden sm:flex'>
          <div className='mx-9 my-3 hover:text-[#8245ec] font-medium text-gray-200'>
            <a href="#About" className=''>About</a>
          </div>
          <div className='mx-9 my-3 hover:text-[#8245ec] font-medium text-gray-200'>
            <a href="#Skills" className=''>Skills</a>
          </div>
          <div className='mx-9 my-3 hover:text-[#8245ec] font-medium text-gray-200'>
            <a href="#Projects" className=''>Project</a>
          </div>
          <div className='mx-9 my-3 hover:text-[#8245ec] font-medium text-gray-200'>
            <a href="#Education" className=''>Education</a>
          </div>
          <div className='mx-9 my-3 hover:text-[#8245ec] font-medium text-gray-200'>
            <a href="#Contact" className=''>Contact</a>
          </div>

        </div>
{/* Menu Mobile Icon */}

      <div className=' sm:hidden my-3' >
          <button onClick={toggleMenu} className='text-white'>
            {/* conditional render */}
            {menuOpen?<FiX size={"24"}/>:<FiMenu size={"24"}/>}
          </button>
      </div>


{/* Menu Mobile content */}

      {menuOpen &&(
        <div className='absolute w-50 space-y-4  top-10 bg-[#050414] backdrop-blur-md bg-white/20 z-10'>
            <div className='flex flex-col justify-center items-center '>
              <a href="#About" onClick={toggleMenu} className='hover:text-[#8245ec]'>About</a>
              <a href="#Skills" onClick={toggleMenu} className='hover:text-[#8245ec]'>Skills</a>
              <a href="#Projects" onClick={toggleMenu} className='hover:text-[#8245ec]'>Project</a>
              <a href="#Education" onClick={toggleMenu} className='hover:text-[#8245ec]'>Education</a>
              <a href="#Contact" onClick={toggleMenu} className='hover:text-[#8245ec]'>Contact</a>
            </div>

            <div className='flex  justify-center'>

                  <div className="github my-3 pr-1 ">
                    <a href="https://github.com/mohit98k" target='_blank' className='hover:text-[#8245ec]' > <FaGithub size="24"/> </a>
                  </div>
                  <div className="linkedin my-3">
                    <a href="https://www.linkedin.com/in/mohit-sharma-a1276a326/" target="_blank" className='hover:text-[#8245ec]'> <FaLinkedin size={"24"}/> </a>
                  </div>

            </div>
            </div>
          )
          
      }



{/* icons */}

        <div className="hidden sm:flex">
          <div className="github mx-4 my-3 ">
            <a href="https://github.com/mohit98k" target='_blank' className='hover:text-[#8245ec]' > <FaGithub size="24"/> </a>
          </div>
          <div className="linkedin my-3">
            <a href="https://www.linkedin.com/in/mohit-sharma-a1276a326/" target="_blank" className='hover:text-[#8245ec]'> <FaLinkedin size={"24"}/> </a>
          </div>
        </div>


    </div>
  )
}
