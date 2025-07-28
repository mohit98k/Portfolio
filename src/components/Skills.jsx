import React from 'react'
import { BlurBlob } from '../BlurBlob'
export const Skills = () => {
  return (
    <div id='Skills' className="text-center md:mt-40 mt-60  px-[12vw] md:px-[7vw] lg:px-[20vw]  " >
     

       <h2 className="text-3xl sm:text-4xl font-bold text-white ">SKILLS</h2>
       <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
       <p className="text-gray-400 mt-4 mb-4 text-lg font-semibold">
      A collection of my technical skills and expertise honed through various projects and experiences
      </p>
             

      <div className="flex flex-wrap  ">
        <BlurBlob top="100%" left="20%" width="300px" height="400px" />
       
        
            <div className="h-80 w-80 bg-gray-900 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] mt-10 md:mt-40 md:mr-40 md:ml-20 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-300 ">FRONTEND</h3>

                <div className='flex flex-wrap mt-5 ml-3 gap-6'>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/html.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>HTML</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/css.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>CSS</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/javaScript.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>JavaScript</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/react.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>React</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/redux.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Redux</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/nextjs.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>NextJs</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/tailwind.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Tailwind</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/bootstrap.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>BootStrap</p>
                    </div>
                </div>
            </div>

            <div className="h-80 w-80 bg-gray-900 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] mt-10 md:mt-40 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-300 ">BACKEND</h3>

                <div className='flex flex-wrap mt-5 ml-3 gap-6'>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/springboot.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>SpringBoot</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/nodejs.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>NodeJs</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/expressjs.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>ExpressJs</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/mysql.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>MySQL</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/mongodb.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>MongoDB</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/firebase.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>FireBase</p>
                    </div>
                    
                </div>
            </div>
            <div className="h-80 w-80 bg-gray-900 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] mt-10 md:mt-40 md:mr-40 md:ml-20 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-300 ">LANGUAGES</h3>

                <div className='flex flex-wrap mt-5 ml-3 gap-6'>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/c.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>C</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/cpp.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>C++</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/java.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Java</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/python.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>python</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/javaScript.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>JavaScript</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/typescript.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>TypeScript</p>
                    </div>
                    
                </div>
            </div>
            <div className="h-80 w-80 bg-gray-900 drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)] mt-10 md:mt-40 hover:scale-105 transition-transform duration-300">
                <h3 className="text-xl font-bold text-gray-300 ">TOOLS</h3>

                <div className='flex flex-wrap mt-5 ml-3 gap-6'>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/git.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Git</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/github.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>GitHub</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/vscode.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>VS Code</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/postman.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Postman</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/vercel.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Vercel</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/compass.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Compass</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/netlify.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Netlify</p>
                    </div>
                    <div className='flex flex-wrap border-2 rounded-full border-[rgba(130,69,236,0.77)] '>
                      <img src="/Portfolio/figma.png" alt="" className='h-10 w-10 rounded-full mr-2 '/>
                      <p className='text-l font-medium aling-center text-gray-400 '>Figma</p>
                    </div>
                </div>
            </div>
      </div>

    </div>

    
  )
}
