import React from 'react'
import { BlurBlob } from '../BlurBlob'
export const Education = () => {
  return (
    <div id='Education '>

      <div className=' absolute '> 
                <BlurBlob top="100%" left="30%" width="300px" height="400px" />
            
            </div>

        <div  className="text-center md:mt-40 mt-60  px-[12vw] md:px-[7vw] lg:px-[20vw] " >
                
        
               <h2 className="text-3xl sm:text-4xl font-bold text-white ">EDUCATION</h2>
               <div className="w-24 h-1 bg-[#7121fa] mx-auto mt-2"></div>
               <p className="text-gray-400 mt-4 mb-4 text-lg font-semibold">
            My education has been a journey of learning and development. Here are the details of my academic background
              </p>
        </div>

          <div className='mt-20 flex flex-col items-center '>
                
              <div className='border border-gray-400  mx-auto w-[30%] md:w-[20] bg-gray-900  '>
                <div >
                    <div className='md:flex text-center'>
                          <img src="nit.png" className='h-20 w-20 p-2 rounded-full text-center' alt="" />
                          <p className='font-bold p-2  text-sm md:text-xl text-gray-400'>B.Tech in Information Technology</p>
                  </div>
                  <p className='font-semibold md:pl-4 text-center p-2 text-gray-300' >GRADE:8.6 CGPA</p>
                  <p className='mt-2 text-center p-2'>I am doing my Bachelors from Nit , currently in my 3rd year.</p>
                </div>
              </div>


              <div className='w-[2px] h-[100px] bg-gray-400'></div>


               <div className='border border-gray-400  mx-auto w-[30%] md:w-[20] bg-gray-900  '>
                <div >
                    <div className='md:flex '>
                          <img src="rjlv.png" className='h-20 w-20 p-2 rounded-full' alt="" />
                          <p className='font-bold text-center p-2 text-sm md:text-xl text-gray-400'>XII- PCMB</p>
                  </div>
                  <p className='font-semibold md:pl-4 text-gray-300 p-2 text-center'  >GRADE:93.4 %</p>
                  <p className='mt-2 text-center p-1'>I have completed my schooling from RJLV .</p>
                </div>
              </div>
          </div>
              

    </div>
  )
}
