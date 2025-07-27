import React from 'react'
import { BlurBlob } from '../BlurBlob'
import ReactTypingEffect from 'react-typing-effect';
export const About = () => {
  return (


    <div id='About' className='relative'>

{/* Background Blobs */}

      <div className=' hidden sm:visible'> 
          <BlurBlob top="100%" left="25%" width="300px" height="400px" />
      
      </div>

{/* Actual About Content */}
       
        <div className=' flex flex-col-reverse md:flex-row justify-center items-center '>

              {/*left side */}
              <div className="w-40 h-20 md:w-50 md:h-70 md:mr-15">
                <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 mt-4 '>
                  Hi , I am
                </h1>

                <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-2 '>
                  Mohit Sharma
                </h2>
                <p className="  sm:text-lg md:text-lg text-gray-400">
                  I am a full-stack developer <br />
                  coder , gamer,I specialize in the MERN stack <br />

                </p>
              </div>

               {/*right side */}
               <div className="">
                   <img src="mypic.jpg"  className="w-28 h-28 md:w-96 md:h-96  rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] mt-10 md:mt-40  md:ml-40 hover:scale-105 transition-transform duration-300"/>
               </div>


        </div>


   
    </div>
  )
}
