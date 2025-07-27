import React from 'react'
import { BlurBlob } from '../BlurBlob'
export const Projects = () => {
  return (
    <div>

      <div id='Projects' className=" text-center md:mt-40 mt-60  px-[12vw] md:px-[7vw] lg:px-[20vw] " >
        <div className='absolute hidden sm:visible'>
            <BlurBlob top="100%" left="20%" width="300px" height="400px" />
         
        </div>
      

       <h2 className="text-3xl sm:text-4xl font-bold text-white ">PROJECTS</h2>
       <div className="w-24 h-1 bg-[#7121fa] mx-auto mt-2"></div>
       <p className="text-gray-400 mt-4 mb-4 text-lg font-semibold">
     A showcase of the projects I have worked on, highlighting my skills and experience in various technologies
      </p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pl-24 pr-24 mt:24  gap-10'>
       
        <div className='border border-white bg-gray-900 hover:shadow-purple-500/50 mt-10 hover:scale-105 transition-transform duration-100 hover:drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] ' >
         <a href='https://mohit98k.github.io/gameedex/' target='_blank'>
            <div>
              <a href='https://mohit98k.github.io/gameedex/' target='_blank'> <img src="/Portfolio/gameedex.png" alt="" className='h-30 w-30 md:w-50 p-2' /></a> 
            </div>
            <div className='text-center '>
              <a href="https://mohit98k.github.io/gameedex/" target='_blank' className=' font-bold text-xl md:text3xl text-gray-300'> Gameedex</a>
            </div>
            <div>
              <p className='font-medium text-gray-500 p-5'>GameeDex is a sleek, responsive landing page designed for a fictional video game recommendation service.</p>
            </div>
            <div className='flex flex-wrap p-5 gap-6 justify-center'>
                <button className='font-medium text-gray-400 h-6 w-14 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >HTML</button>
                 <button className='font-medium text-gray-400 h-6 w-14 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >Css</button>
                  <button className='font-medium text-gray-400 h-6 w-29 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >JavaScript</button>
            
            </div>
           </a>
        </div>
       
        <div className='border border-white bg-gray-900 hover:shadow-purple-500/50 mt-10  hover:scale-105 transition-transform duration-100 hover:drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]  ' >
        <a href='https://mohit98k.github.io/tic-tac-toe-game/' target='_blank'>
            <div>
              <a href='https://mohit98k.github.io/tic-tac-toe-game/' target='_blank'> <img src="/Portfolio/tictactoe.png" alt="" className='h-30 w-30 md:w-50 p-2' /></a>
            </div>
            <div className='text-center '>
              <a href="https://mohit98k.github.io/tic-tac-toe-game/" target='_blank' className=' font-bold text-xl md:text3xl text-gray-300'> Tic-Tac-Toe</a>
            </div>
            <div>
              <p className='font-medium text-gray-500 p-5'>A simple, interactive Tic-Tac-Toe game built using HTML, CSS, and JavaScript. Play against a friend in the same browser and enjoy a fun game with a clean UI and game logic. </p>
            </div>
            <div className='flex flex-wrap p-5 gap-6 justify-center'>
                <button className='font-medium text-gray-400 h-6 w-14 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >HTML</button>
                 <button className='font-medium text-gray-400 h-6 w-14 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >Css</button>
                  <button className='font-medium text-gray-400 h-6 w-29 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >JavaScript</button>
            
            </div>
            </a>
        </div>

         <div className='border border-white bg-gray-900 hover:shadow-purple-500/50 mt-10  hover:scale-105 transition-transform duration-100 hover:drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]  ' >
        <a href='https://mohit98k.github.io/CurrencyConverterWebApp/' target='_blank'>
            <div>
              <a href='https://mohit98k.github.io/CurrencyConverterWebApp/' target='_blank'> <img src="/Portfolio/currencyconverter.png" alt="" className='h-30 w-30 md:w-50 p-2' /></a>
            </div>
            <div className='text-center '>
              <a href="https://mohit98k.github.io/CurrencyConverterWebApp/" target='_blank' className=' font-bold text-xl md:text3xl text-gray-300'> Currency Converter</a>
            </div>
            <div>
              <p className='font-medium text-gray-500 p-5'>A simple and responsive currency converter app built using HTML, CSS, and JavaScript. </p>
            </div>
            <div className='flex flex-wrap p-5 gap-6 justify-center'>
                <button className='font-medium text-gray-400 h-6 w-14 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >HTML</button>
                 <button className='font-medium text-gray-400 h-6 w-14 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >Css</button>
                  <button className='font-medium text-gray-400 h-6 w-29 border border-gray-500 rounded-full bg-violet-900 overflow-hidden' >JavaScript</button>
            
            </div>
            </a>
        </div>
      </div>

    </div>
  )
}
